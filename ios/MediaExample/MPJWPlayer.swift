import SwiftUI
import mParticle_Apple_SDK
import mParticle_Apple_Media_SDK

let jwVideoID = "http://playertest.longtailvideo.com/adaptive/oceans/oceans.m3u8"
let jwPosterImage = "http://d3el35u4qe4frz.cloudfront.net/bkaovAYt-480.jpg"

struct MPJWPlayer : UIViewRepresentable {
    let dsp = JWPlayerDSP()
    
    func updateUIView(_ uiView: UIView, context: Context) {
        
    }
    
    func makeUIView(context: Context) -> UIView {
        return (dsp.player?.view)!
    }

}

func createConfig() -> JWConfig {
    let config = JWConfig(contentUrl: jwVideoID)
    config.title = "Disney Nature"
    config.image = jwPosterImage
    config.repeat = true
    return config
}

class JWPlayerDSP: NSObject, JWPlayerDelegate, JWAVPlayerAnalyticsDelegate {
    @objc let player = JWPlayerController(config: createConfig())
    
    var sessionStarted = false
    var mediaSession: MPMediaSession?
    var playBackRate: CGFloat = 0.0
    var playerstatus: AVPlayer.Status = .unknown
    var playerItem: AVPlayerItem?
    var playerError: Error?
    var adCounter = 1;
    
    override init() {
        super.init()
        
        player?.delegate = self
        player?.analyticsDelegate = self
        
        mediaSession = MPMediaSession.init(coreSDK: MParticle.sharedInstance(), mediaContentId: jwVideoID, title: player?.config.title ?? "default", duration: NSNumber(value: Float(player?.duration ?? 0.0)), contentType: MPMediaContentType.video, streamType: MPMediaStreamType.onDemand)

        let notificationCenter = NotificationCenter.default
        notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: UIApplication.willResignActiveNotification, object: nil)
        
        addObserver(self, forKeyPath: #keyPath(player.position), options: [.old, .new], context: nil)
    }
    
    @objc func appMovedToBackground() {
        print("App moved to background!")
        mediaSession?.logMediaSessionEnd()
        player?.pause()
        sessionStarted = false
    }
    
    // JWPlayer Protocol
    func onFirstFrame(_ event: (JWEvent & JWFirstFrameEvent)) {
        if !sessionStarted {
            let mediaInfo = MPMediaQoS.init()
            mediaInfo.startupTime = NSNumber(value: playBackRate.native)
            mediaInfo.droppedFrames = 0
            mediaInfo.bitRate = 23224
            mediaInfo.fps = 30
            
            mediaSession?.logMediaSessionStart()
            mediaSession?.logQoS(metadata: mediaInfo)
            sessionStarted = true
        }
    }
    
    func onPlayAttempt() {
    }
    
    func onBeforePlay() {
    }
    
    func onPlay(_ event: (JWEvent & JWStateChangeEvent)) {
        if !sessionStarted {
            mediaSession?.logMediaSessionStart()
            sessionStarted = true
        }
        
        mediaSession?.logPlay()
    }
    
    func onPause(_ event: (JWEvent & JWStateChangeEvent)) {
        mediaSession?.logPause()
    }
    
    func onSeek(_ event: (JWEvent & JWSeekEvent)) {
        mediaSession?.logSeekStart(position: NSNumber(value: event.position.native
            * 1000))
    }
    
    func onSeeked() {
        mediaSession?.logSeekEnd(position: NSNumber(value: player?.position.native ?? 0.0 * 1000))
    }
    
    func onBuffer(_ event: (JWEvent & JWBufferEvent)) {
        mediaSession?.logBufferStart(duration: NSNumber(value: playerItem?.duration.seconds ?? 0.0), bufferPercent: 0.0, position: NSNumber(value: player?.position.native ?? 0.0 * 1000))
    }
    
    func onBufferChange(_ event: (JWEvent & JWBufferChangeEvent)) {
        if (Double(event.bufferPercent) == 100) {
            mediaSession?.logBufferEnd(duration: NSNumber(value: playerItem?.duration.seconds ?? 0.0), bufferPercent: NSNumber(value: event.bufferPercent.native), position: NSNumber(value: player?.position.native ?? 0.0 * 1000))
        } else {
            mediaSession?.logBufferStart(duration: NSNumber(value: playerItem?.duration.seconds ?? 0.0), bufferPercent: NSNumber(value: event.bufferPercent.native), position: NSNumber(value: player?.position.native ?? 0.0 * 1000))

        }
    }
    
    func onComplete() {
        mediaSession?.logMediaContentEnd()
        sessionStarted = false
    }
    
    func onAdStarted(_ event: (JWAdEvent & JWAdDetailEvent)) {
        // JWPlayer doesn't seem to differentiate between an Ad and Ad Breaks
        let adBreakObject = MPMediaAdBreak.init(title: event.tag, id: "\(adCounter)")
        let adObject = MPMediaAdContent.init(title: event.tag, id: "\(adCounter)")
        mediaSession?.logAdBreakStart(adBreak: adBreakObject)
        mediaSession?.logAdStart(adContent: adObject)
        adCounter += 1
    }
    
    func onAdClick(_ event: (JWAdEvent & JWAdDetailEvent)) {
        mediaSession?.logAdClick()
    }
    
    func onAdSkipped(_ event: (JWAdEvent & JWAdDetailEvent)) {
        mediaSession?.logAdSkip()
    }
    
    func onAdComplete(_ event: (JWAdEvent & JWAdDetailEvent)) {
        mediaSession?.logAdEnd()
        mediaSession?.logAdBreakEnd()
    }
    
    func onError(_ event: (JWEvent & JWErrorEvent)) {
        MParticle.sharedInstance().logError("mediaErrorId")
    }
    
    // JWAVPlayerAnalytics Protocol
    func playbackRateDidChange(_ rate: CGFloat) {
        playBackRate = rate
        
        let metadata = MPMediaQoS.init()
        metadata.startupTime = NSNumber(value: playerItem?.accessLog()?.events.last?.startupTime ?? 0)
        
        if let dropped = playerItem?.accessLog()?.events.last?.numberOfDroppedVideoFrames {
            metadata.droppedFrames = NSNumber(value: dropped)
        }
        
        metadata.bitRate = NSNumber(value: playBackRate.native)
        metadata.fps = 30
        
        mediaSession?.logQoS(metadata: metadata)
    }
    
    func playerStatusDidChange(_ status: AVPlayer.Status) {
        playerstatus = status
    }
    
    func playerItemDidChange(_ item: AVPlayerItem?) {
        playerItem = item
        let metadata = MPMediaQoS.init()
        metadata.startupTime = NSNumber(value: playerItem?.accessLog()?.events.last?.startupTime ?? 0)
        if let dropped = playerItem?.accessLog()?.events.last?.numberOfDroppedVideoFrames {
            metadata.droppedFrames = NSNumber(value: dropped)
        }
        
        metadata.bitRate = NSNumber(value: playBackRate.native)
        metadata.fps = 30
        
        mediaSession?.logQoS(metadata: metadata)
    }
    
    func playerErrorDidChange(_ error: Error?) {
        playerError = error
    }
    
    func playerLayerVideoRectDidChange(_ videoRect: CGRect) {
    }
    
    // MARK: - Key-Value Observing
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == #keyPath(player.position) {
            mediaSession?.logPlayheadPosition(position: NSNumber(value: player?.position.native ?? 0))
        }
    }
}

#if DEBUG
struct MPJWPlayer_Previews : PreviewProvider {
    static var previews: some View {
        MPJWPlayer()
    }
}
#endif
