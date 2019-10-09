import SwiftUI
import BrightcovePlayerSDK
import mParticle_Apple_SDK
import mParticle_Apple_Media_SDK

let kViewControllerPlaybackServicePolicyKey = "BCpkADawqM3n0ImwKortQqSZCgJMcyVbb8lJVwt0z16UD0a_h8MpEYcHyKbM8CGOPxBRp0nfSVdfokXBrUu3Sso7Nujv3dnLo0JxC_lNXCl88O7NJ0PR0z2AprnJ_Lwnq7nTcy1GBUrQPr5e"
let kViewControllerAccountID = "4800266849001"
let kViewControllerVideoID = "5255514387001"
let playbackService = BCOVPlaybackService(accountId: kViewControllerAccountID, policyKey: kViewControllerPlaybackServicePolicyKey)

var alreadyLoaded = false

struct MPBrightCovePlayer : UIViewRepresentable {
    let dsp = BrightcovePlayerDSP()

    func updateUIView(_ uiView: BCOVPUIPlayerView, context: Context) {
        
    }
    
    func makeUIView(context: Context) -> BCOVPUIPlayerView {
        return dsp.videoPlayer
    }
}

class BrightcovePlayerDSP: NSObject, BCOVPlaybackControllerDelegate, BCOVPUIPlayerViewDelegate {
    var playbackController: BCOVPlaybackController
    var videoPlayer: BCOVPUIPlayerView
    var bcVideo: BCOVVideo?
    var mediaSession: MPMediaSession?

    var currentSession: BCOVPlaybackSession?
    var playbackPosition: TimeInterval?
    var adPlaybackPosition: TimeInterval?
    var duration: TimeInterval?
    
    override init() {
        playbackController = BCOVPlayerSDKManager.shared().createPlaybackController()
        videoPlayer = BCOVPUIPlayerView(playbackController: playbackController, options: nil, controlsView: BCOVPUIBasicControlView.withVODLayout())
        
        super.init()
        
        videoPlayer.delegate = self
        playbackController.delegate = self
        
        self.findVideo(videoID: kViewControllerVideoID)
        
        mediaSession = MPMediaSession.init(coreSDK: MParticle.sharedInstance(), mediaContentId: kViewControllerVideoID, title: self.bcVideo?.properties[kBCOVPlaylistPropertiesKeyName] as? String ?? "no title",  duration: nil, contentType: MPMediaContentType.video, streamType: MPMediaStreamType.onDemand)
        
        let notificationCenter = NotificationCenter.default
        notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: UIApplication.willResignActiveNotification, object: nil)
    }
    
    @objc func appMovedToBackground() {
        print("App moved to background!")
        mediaSession?.logMediaSessionEnd()
    }
    
    func findVideo(videoID: String) {
            playbackService?.findVideo(withVideoID: videoID, parameters: nil) { (video: BCOVVideo?, jsonResponse: [AnyHashable: Any]?, error: Error?) -> Void in
                self.bcVideo = video
                
                if (self.bcVideo != nil) {
                    self.playbackController.setVideos([self.bcVideo!] as NSArray)
                } else {
                    print("ViewController Debug - Error retrieving video: \(error?.localizedDescription ?? "unknown error")")
                }
            }
        }
    
    // BCOVPlaybackController Protocol
    func playbackController(_ controller: BCOVPlaybackController!, didAdvanceTo session: BCOVPlaybackSession!) {
        self.currentSession = session
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didProgressTo progress: TimeInterval) {
        self.currentSession = session
        self.playbackPosition = progress
        
        guard !(progress.isNaN || progress.isInfinite) else {
            return
        }
        mediaSession?.logPlayheadPosition(position: NSNumber(value: progress * 1000))
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didChangeDuration duration: TimeInterval) {
        self.currentSession = session
        self.duration = duration
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didChangeSeekableRanges seekableRanges: [Any]!) {
        self.currentSession = session
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didPassCuePoints cuePointInfo: [AnyHashable : Any]!) {
        self.currentSession = session
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didChangeExternalPlaybackActive externalPlaybackActive: Bool) {
        self.currentSession = session
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didReceive lifecycleEvent: BCOVPlaybackSessionLifecycleEvent!) {
        self.currentSession = session
        
        switch lifecycleEvent.eventType {
        case kBCOVPlaybackSessionLifecycleEventPlay:
            mediaSession?.logPlay()
        case kBCOVPlaybackSessionLifecycleEventPause:
            mediaSession?.logPause()
        case kBCOVPlaybackSessionLifecycleEventResumeFail:
            MParticle.sharedInstance().logError("resumeFail")
        case kBCOVPlaybackSessionLifecycleEventResumeBegin:
            mediaSession?.logPlay()
        case kBCOVPlaybackSessionLifecycleEventFail:
            MParticle.sharedInstance().logError("failedToLoad")
        case kBCOVPlaybackSessionLifecycleEventError:
            MParticle.sharedInstance().logError("error")
        case kBCOVPlaybackSessionLifecycleEventPlaybackBufferEmpty: do {
            guard !(playbackPosition!.isNaN || playbackPosition!.isInfinite) else {
                break
            }
            mediaSession?.logBufferStart(duration: NSNumber(value: duration ?? 0.0), bufferPercent: 0.0, position: NSNumber(value: playbackPosition ?? 0))
            }
        case kBCOVPlaybackSessionLifecycleEventPlaybackLikelyToKeepUp: do {
            guard !(playbackPosition!.isNaN || playbackPosition!.isInfinite) else {
                break
            }
            mediaSession?.logBufferEnd(duration: NSNumber(value: duration ?? 0.0), bufferPercent: 100.0, position: NSNumber(value: playbackPosition ?? 0))
           }
        default: break
        }
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didEnter adSequence: BCOVAdSequence!) {
        self.currentSession = session
        
        let adBreakObject = MPMediaAdBreak.init(title: adSequence.properties?["adSequenceTitle"] as! String, id: adSequence.properties?["adSequenceID"] as! String)
        mediaSession?.logAdBreakStart(adBreak: adBreakObject)
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didExitAdSequence adSequence: BCOVAdSequence!) {
        self.currentSession = session
        
        mediaSession?.logAdBreakEnd()
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didEnter ad: BCOVAd!) {
        self.currentSession = session

        let adObject = MPMediaAdContent.init(title: ad.title, id: ad.adId)
        
        mediaSession?.logAdStart(adContent: adObject)
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didExitAd ad: BCOVAd!) {
        self.currentSession = session
                                
        mediaSession?.logAdEnd()
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, ad: BCOVAd!, didProgressTo progress: TimeInterval) {
        self.currentSession = session
        self.adPlaybackPosition = progress
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didPause ad: BCOVAd!) {
        self.currentSession = session
        
        mediaSession?.logPause()
    }
    
    func playbackController(_ controller: BCOVPlaybackController!, playbackSession session: BCOVPlaybackSession!, didResumeAd ad: BCOVAd!) {
        self.currentSession = session
        
        mediaSession?.logPlay()
    }
    
    func setCurrentSession(currentSession: BCOVPlaybackSession?) {
        let metadata = MPMediaQoS.init()
        metadata.startupTime = 0
        metadata.droppedFrames = 0
        metadata.bitRate = NSNumber(value: currentSession?.player.rate ?? 0.0)
        metadata.fps = 30
        
        mediaSession?.logQoS(metadata: metadata)
    }
}

#if DEBUG
struct MPBrightCovePlayer_Previews : PreviewProvider {
    static var previews: some View {
        MPBrightCovePlayer()
    }
}
#endif
