package com.mpsample.mediasample

//import com.adobe.mobile.Config
import android.app.Application
import com.mparticle.MParticle
import com.mparticle.MParticleOptions
import com.mparticle.networking.MockServer

class SampleApplication: Application() {

    private val launchAppId = "82cfae7baf21/ce7de7b8fb7f/launch-5873adf08516-development"

    override fun onCreate() {
        super.onCreate()

        MockServer.getNewInstance(this)
            .setupConfigResponse(MockServer.ConfigResponse.builder()
                .addKit(MockServer.KitConfig.forKit(MParticle.ServiceProviders.ADOBE)
                    .addSetting("launchAppId", launchAppId)
                    .addSetting("isDebug", true.toString())
                    .build())
                .build()
                .toString())

        MParticleOptions
            .builder(this)
            .credentials("API_KEY", "API_SECRET")
            .build()
            .let {
                MParticle.start(it)
            }
    }
}