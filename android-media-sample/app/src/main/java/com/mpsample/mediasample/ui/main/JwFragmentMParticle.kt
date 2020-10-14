package com.mpsample.mediasample.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProviders
import com.google.android.exoplayer2.analytics.AnalyticsListener
import com.longtailvideo.jwplayer.JWPlayerView
import com.longtailvideo.jwplayer.configuration.PlayerConfig
import com.longtailvideo.jwplayer.events.AdBreakStartEvent
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem
import com.mparticle.MParticle
import com.mparticle.media.MediaSession
import com.mparticle.media.events.*
import com.mpsample.mediasample.R
import java.util.*


class JwFragmentMParticle: Fragment(), AnalyticsListener {
    private lateinit var pageViewModel: PageViewModel

    private lateinit var player: JWPlayerView

    private var sessionStarted = false
    private var playbackRate: Float? = null

    private var mediaSession: MediaSession? = null

    private val playheadPositionMillis: Long
        get() = player.position.toMillis()
    private var currentAdBreak: AdBreakStartEvent? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        pageViewModel = ViewModelProviders.of(this).get(PageViewModel::class.java)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val root = inflater.inflate(R.layout.fragment_jw, container, false)
        player = root.findViewById(R.id.jw_player)
        return root
    }

    override fun onResume() {
        super.onResume()
        pageViewModel.videoPlaylist.value?.map {
            PlaylistItem.Builder()
                .file(it.sources[0])
                .image(it.thumb)
                .description(it.description)
                .title(it.title)
                .mediaId(it.title)
                .build()
        }?.let {
            PlayerConfig.Builder()
                .playlist(it)
                .build()
        }?.let {
            player.setup(it)
            initializeListeners(player)
        }
    }

    override fun onPause() {
        super.onPause()
        mediaSession?.logMediaSessionEnd()
        player.pause()
        sessionStarted = false
    }

    companion object {
        /**
         * The fragment argument representing the section number for this
         * fragment.
         */
        private const val ARG_SECTION_NUMBER = "section_number"

        /**
         * Returns a new instance of this fragment for the given section
         * number.
         */
        @JvmStatic
        fun newInstance(sectionNumber: Int): JwFragmentMParticle {
            return JwFragmentMParticle().apply {
                arguments = Bundle().apply {
                    putInt(ARG_SECTION_NUMBER, sectionNumber)
                }
            }
        }
    }

    override fun onDroppedVideoFrames(eventTime: AnalyticsListener.EventTime?, droppedFrames: Int, elapsedMs: Long) {
        mediaSession?.logQos(MediaQoS().apply {
            this.droppedFrames = droppedFrames
        })
    }

    private fun initializeListeners(player: JWPlayerView) {
        /**
         * Playback listeners
         */
        player.addOnFirstFrameListener {
            tryStartSession() }
        player.addOnPlayListener {
            tryStartSession()
            mediaSession?.logPlay()
            mediaSession?.logPlayheadPosition(playheadPositionMillis)
        }
        player.addOnPauseListener {
            mediaSession?.logPause()
            mediaSession?.logPlayheadPosition(playheadPositionMillis)
        }
        player.addOnCompleteListener { mediaSession?.logMediaContentEnd() }

        /**
         * Seek/Buffer listeners
         */
        player.addOnSeekListener { mediaSession?.logSeekStart(playheadPositionMillis) }
        player.addOnSeekedListener { mediaSession?.logSeekEnd(playheadPositionMillis) }
        player.addOnBufferChangeListener {
            if (it.bufferPercent == 0) {
                mediaSession?.logBufferStart(it.duration.toLong(), it.bufferPercent.toDouble(), it.position.toLong())
            }
            if (it.bufferPercent == 100) {
                mediaSession?.logBufferEnd(it.duration.toLong(), it.bufferPercent.toDouble(), it.position.toLong())
            }
        }


        /**
         * Ad Break Listeners
         */
        player.addOnAdBreakStartListener {
            currentAdBreak = it
            mediaSession?.logAdBreakStart(MediaAdBreak().apply {
                duration = playheadPositionMillis
            })
        }

        player.addOnAdBreakEndListener {
            currentAdBreak = null
            mediaSession?.logAdBreakEnd()
        }

        /**
         * Ad Listeners
         *
         * depending on your player ad ad implementation, you may need
         * additional callbacks to handle logAdEnd() calls, if the ad implicitly
         * ends when it is clicked, stopped, etc
         */
        player.addOnAdStartedListener {
            mediaSession?.logAdStart(MediaAd().apply {
                id = UUID.randomUUID().toString() //you very may well have an exisiting ID to fetch in you implementation
                title = it.tag
                creative = it.creativeType
            })
        }
        player.addOnAdCompleteListener {
            mediaSession?.logAdEnd()
        }
        player.addOnAdSkippedListener {
            mediaSession?.logAdSkip()
        }

        /**
         * Error Listener
         *
         * User existing MParticle API
         */
        player.addOnErrorListener {
            MParticle.getInstance()?.logError(it.message)
        }

        /**
         * QoS listeners
         *
         * also see onDroppedVideoFrames() callback implementation
         */
        player.addOnPlaybackRateChangedListener {
            mediaSession?.logQos(MediaQoS()?.apply {
                bitRate = player.playbackRate.toInt()
            })
        }
        player.addOnFirstFrameListener {
            mediaSession?.logQos(MediaQoS().apply {
                startupTime = it.loadTime.toMillis()
            })
        }
        player.addOnLevelsChangedListener{it.currentQuality}
    }

    private fun tryStartSession() {
        val currentItem = player.playlistItem
        val currentTitle = currentItem.title
        if (currentTitle != null && mediaSession?.title != currentTitle) {
            if (mediaSession != null) {
                mediaSession?.logMediaSessionEnd()
            }
            mediaSession = MediaSession.builder(MParticle.getInstance()) {
                title = currentItem.title
                duration = (player.duration * 1000).toLong()
                mediaContentId = UUID.randomUUID().toString()
                streamType = StreamType.ON_DEMAND
                contentType = ContentType.VIDEO
            }
            mediaSession?.logMediaSessionStart()
        }
    }

    fun Double.toMillis(): Long {
        return (this * 1000).toLong()
    }
}
