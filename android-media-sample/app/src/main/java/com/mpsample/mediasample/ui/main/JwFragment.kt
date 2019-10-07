//package com.mpsample.mediasample.ui.main
//
//import android.os.Bundle
//import android.view.LayoutInflater
//import android.view.View
//import android.view.ViewGroup
//import androidx.fragment.app.Fragment
//import androidx.lifecycle.ViewModelProviders
//import com.adobe.primetime.va.simple.MediaHeartbeat
//import com.adobe.primetime.va.simple.MediaHeartbeatConfig
//import com.adobe.primetime.va.simple.MediaObject
//import com.google.android.exoplayer2.analytics.AnalyticsListener
//import com.longtailvideo.jwplayer.JWPlayerView
//import com.longtailvideo.jwplayer.configuration.PlayerConfig
//import com.longtailvideo.jwplayer.media.playlists.PlaylistItem
//import com.mparticle.MParticle
//import com.mpsample.mediasample.R
//
//
//class JwFragment: Fragment(), MediaHeartbeat.MediaHeartbeatDelegate, AnalyticsListener {
//    private lateinit var pageViewModel: PageViewModel
//
//    private val config = MediaHeartbeatConfig().apply {
//        trackingServer = "testServer"
//        channel = "sampleHeartbeatChannel"
//        appVersion = "sampleSdkVersion"
//        ovp = "sampleOvpName"
//        playerName = "samplePlayerName"
//        ssl = true
//        debugLogging = true
//    }
//    private val mediaHeartbeat = MediaHeartbeat(this, config)
//    private lateinit var player: JWPlayerView
//
//    private var sessionStarted = false
//    private var playbackRate: Float? = null
//    private var startPosition: Double? = null
//    private var totalDroppedFrames = 0
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        pageViewModel = ViewModelProviders.of(this).get(PageViewModel::class.java)
//    }
//
//    override fun onCreateView(
//        inflater: LayoutInflater, container: ViewGroup?,
//        savedInstanceState: Bundle?
//    ): View? {
//        val root = inflater.inflate(R.layout.fragment_jw, container, false)
//        player = root.findViewById(R.id.jw_player)
//        return root
//    }
//
//    override fun onResume() {
//        super.onResume()
//        pageViewModel.videoPlaylist.value?.map {
//            PlaylistItem.Builder()
//                .file(it.sources[0])
//                .image(it.thumb)
//                .description(it.description)
//                .title(it.title)
//                .mediaId(it.title)
//                .build()
//        }?.let {
//            PlayerConfig.Builder()
//                .playlist(it)
//                .build()
//        }?.let {
//            player.setup(it)
//            initializeListeners(player)
//        }
//    }
//
//    override fun onPause() {
//        super.onPause()
//        mediaHeartbeat.trackSessionEnd()
//        player.pause()
//        sessionStarted = false
//
//    }
//
//    companion object {
//        /**
//         * The fragment argument representing the section number for this
//         * fragment.
//         */
//        private const val ARG_SECTION_NUMBER = "section_number"
//
//        /**
//         * Returns a new instance of this fragment for the given section
//         * number.
//         */
//        @JvmStatic
//        fun newInstance(sectionNumber: Int): JwFragment {
//            return JwFragment().apply {
//                arguments = Bundle().apply {
//                    putInt(ARG_SECTION_NUMBER, sectionNumber)
//                }
//            }
//        }
//    }
//
//    override fun onDroppedVideoFrames(eventTime: AnalyticsListener.EventTime?, droppedFrames: Int, elapsedMs: Long) {
//        totalDroppedFrames += droppedFrames
//    }
//
//    override fun getCurrentPlaybackTime(): Double {
//        return player.position
//    }
//
//    override fun getQoSObject(): MediaObject {
//        return MediaHeartbeat.createQoSObject(playbackRate?.toLong(), startPosition, 30.0, totalDroppedFrames.toLong()).also {
//            totalDroppedFrames = 0
//        }
//    }
//
//
//    private fun tryStartSession() {
//        if (!sessionStarted) {
//            val mediaInfo = getMediaObject()
//            val standardVideoMetadata = mapOf(
//                MediaHeartbeat.VideoMetadataKeys.EPISODE to "sample Episode",
//                MediaHeartbeat.VideoMetadataKeys.SHOW to "sample Show"
//            )
//            mediaInfo.setValue(MediaHeartbeat.MediaObjectKey.StandardMediaMetadata, standardVideoMetadata)
//            mediaHeartbeat.trackSessionStart(mediaInfo, getContextData())
//            sessionStarted = true
//        }
//    }
//
//    private fun getMediaObject(): MediaObject {
//        val currentItem = player.playlistItem
//        return MediaHeartbeat.createMediaObject(
//            currentItem.title,
//            currentItem.mediaId,
//            player.duration,
//            "streamType",
//            MediaHeartbeat.MediaType.Video
//        )
//    }
//
//    private fun getContextData(): HashMap<String, String> {
//        return mapOf(
//            "isUserLoggedIn" to (MParticle.getInstance()?.Identity()?.currentUser?.isLoggedIn ?: false).toString(),
//            "tvStation" to "sample",
//            "programmer" to "sample"
//        ).let {
//            HashMap(it)
//        }
//    }
//
//    private fun getAdBreakObject(tag: String): MediaObject {
//        return MediaHeartbeat.createAdBreakObject(
//            tag,
//            (currentPlaybackTime / player.duration).toLong(),
//            currentPlaybackTime
//        )
//    }
//
//    private fun initializeListeners(player: JWPlayerView) {
//        player.addOnFirstFrameListener {
//            tryStartSession() }
//        player.addOnPlayListener {
//            tryStartSession()
//            if (startPosition == null) {
//                startPosition = player.position
//            }
//            mediaHeartbeat.trackPlay()
//        }
//        player.addOnPauseListener { mediaHeartbeat.trackPause() }
//        player.addOnSeekListener { mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekStart, getMediaObject(), getContextData()) }
//        player.addOnSeekedListener { mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekComplete, getMediaObject(), getContextData()) }
//        player.addOnBufferListener { mediaHeartbeat.trackEvent(MediaHeartbeat.Event.BufferStart, getMediaObject(), getContextData()) }
//        player.addOnBufferChangeListener {
//            mediaHeartbeat.trackEvent(MediaHeartbeat.Event.BufferComplete, getMediaObject(), getContextData()) }
//        player.addOnCompleteListener {
//            mediaHeartbeat.trackComplete()
//            sessionStarted = false
//        }
//        player.addOnAdStartedListener {
//            mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakStart, getAdBreakObject(it.tag), null)
//            mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdStart, getAdBreakObject(it.tag), null)
//
//        }
//        player.addOnAdSkippedListener {
//            mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdComplete, getAdBreakObject(it.tag), null)
//            mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakComplete, getAdBreakObject(it.tag), null)
//        }
//        player.addOnErrorListener { mediaHeartbeat.trackError(it.message) }
//        player.addOnPlaybackRateChangedListener {
//            playbackRate = it
//        }
//    }
//}