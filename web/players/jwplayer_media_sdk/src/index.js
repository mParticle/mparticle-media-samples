import mParticle from '@mparticle/web-sdk';
import MediaSession from '@mparticle/web-media-sdk';
import Adobe from '@mparticle/web-adobe-client-kit';

const mParticleConfig = {
    isDevelopmentMode: true
}

var apiKey = 'YOUR API KEY HERE';

Adobe.register(mParticleConfig);

window.mediaSDK = new MediaSession(
    mParticle,
    '1234567',
    'My sweet sweet media',
    120000,
    'Video',
    'OnDemand'
);

mParticle.init(apiKey, mParticleConfig);
