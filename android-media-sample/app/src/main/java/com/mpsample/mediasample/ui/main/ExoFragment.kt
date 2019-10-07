package com.mpsample.mediasample.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProviders
import com.google.android.exoplayer2.ExoPlayerFactory
import com.google.android.exoplayer2.ui.PlayerView
import com.mpsample.mediasample.R
import com.google.android.exoplayer2.source.ProgressiveMediaSource
import com.google.android.exoplayer2.upstream.DefaultDataSourceFactory
import android.net.Uri
import androidx.lifecycle.LifecycleOwner
import com.adobe.primetime.va.simple.MediaObject
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.analytics.AnalyticsListener
import com.google.android.exoplayer2.util.Util
import com.google.android.exoplayer2.video.VideoListener


/**
 * A placeholder fragment containing a simple view.
 */
class ExoFragment : Fragment() {
    lateinit var playerView: PlayerView
    val uri = Uri.parse("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")

    private lateinit var pageViewModel: PageViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        pageViewModel = ViewModelProviders.of(this).get(PageViewModel::class.java)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val root = inflater.inflate(R.layout.fragment_exo, container, false)
        playerView = root.findViewById(R.id.exo_player)
//        pageViewModel.text.observe(this, Observer<String> {
//            textView.text = it
//        })
        return root
    }

    override fun onResume() {
        super.onResume()

        pageViewModel.currentVideo.observe({ lifecycle }) {
            setVideo(it)
        }
    }

    private fun setVideo(videoDto: VideoDto?) {
        videoDto?.sources?.get(0)?.also {
            val player = ExoPlayerFactory.newSimpleInstance(context)
            playerView.player = player
            val dataSourceFactory = DefaultDataSourceFactory(
                context,
                Util.getUserAgent(context, "MParticle Media Sample")
            )
            val videoSource = ProgressiveMediaSource.Factory(dataSourceFactory)
                .createMediaSource(Uri.parse(it))

            player.prepare(videoSource)
            player.addAnalyticsListener(ExoAnalyticsListener())
            player.addVideoListener(ExoVideoListener())
            player.addListener(ExoEventListener())
        }
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
        fun newInstance(sectionNumber: Int): ExoFragment {
            return ExoFragment().apply {
                arguments = Bundle().apply {
                    putInt(ARG_SECTION_NUMBER, sectionNumber)
                }
            }
        }
    }
}

class ExoAnalyticsListener: AnalyticsListener{

}

class ExoVideoListener: VideoListener {

}

class ExoEventListener: Player.EventListener {

}