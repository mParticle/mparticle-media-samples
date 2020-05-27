// Used to keep track of when the media session actually starts
var sessionStarted = false;

jwplayer().on('time', function(obj) {
    // Note: Uncomment the following console.log if you want to see time progress.
    // Otherwise, leave it commented out as it will spam your console
    // console.log('time', obj);
    // mediaSDK.logPlayheadPosition(obj.position);
});

jwplayer().on('ready', function(obj) {
    console.log('ready', obj);

    if (sessionStarted) {
        mediaSDK.logQoS({ startupTime: obj.setupTime });
    }
});

jwplayer().on('play', function(obj) {
    console.log('play', obj);

    // Play seems to be the obvious place to start a session, since that's
    // where interaction starts and media should be loaded
    if (!sessionStarted) {
        mediaSDK.logSessionStart();
        sessionStarted = true;
    }

    mediaSDK.logPlay();
});

jwplayer().on('pause', function(obj) {
    mediaSDK.logPause({
        currentPlayheadPosition: jwplayer().getCurrentTime(),
        customAttributes: {
            exampleAttribute: 'I HAZ PAWZ'
        }
    });
});

jwplayer().on('beforeComplete', function(obj) {
    // Fire this when the track/video completes but when the session is still active
    // For example, a post-roll advertisement
    console.log('complete', obj);
    mediaSDK.logMediaContentEnd();
});

jwplayer().on('seek', function(obj) {
    console.log('seek', obj);
    mediaSDK.logSeekStart(obj.offset);
});

jwplayer().on('seeked', function(obj) {
    console.log('seeked', obj);
    mediaSDK.logSeekEnd(jwplayer().getPosition());
});

jwplayer().on('adBreakStart', function(obj) {
    console.log('adBreakStart', obj);

    // Tracking ad breaks can vary between integration partners, players and ad networks.
    // In this example, we're using VAST 3.0 via JW Player
    var adposition = obj.adposition;
    var offset = obj.offset;

    // Create a map to filter possible ad positions
    var adPositionMap = {
        pre: 'pre-roll',
        mid: 'mid-roll',
        post: 'post-roll'
    };

    // In some of our tests, offset returning a value that adposition should, such as 'pre-roll'.
    // Because of this, and Adobe's conflicting names for position, we want to sanitize the
    // adName to be the current position of the break, i.e. pre-roll, mid-roll or post-roll
    var adPosition = adposition || offset;
    // and in some cases, a mid-roll might not come in labeled as a 'mid-roll'
    var adName = adPositionMap[adPosition] || 'mid-roll';

    // Current play head
    var startTime = jwplayer('player').getCurrentTime();

    var adBreakObject = {
        title: adName,
        id: obj.adBreakId,
        duration: startTime
    };

    console.log('ad break object', adBreakObject);

    mediaSDK.logAdBreakStart(adBreakObject);
});

jwplayer().on('adBreakEnd', obj => {
    console.log('adBreakEnd', obj);
    mediaSDK.logAdBreakEnd();
});

jwplayer().on('adClick', function(obj) {
    console.log('adClick', obj);
    mediaSDK.logAdClick();
});

jwplayer().on('adComplete', function(obj) {
    console.log('adComplete', obj);
    mediaSDK.logAdEnd();
});

jwplayer().on('adPlay', function(obj) {
    console.log('adPlay', obj);

    var adObject = {
        title: obj.title,
        id: obj.id,
        placement: 'main',
        position: obj.position,
        duration: obj.length
    };

    mediaSDK.logAdStart(adObject);
});

jwplayer().on('adManager', obj => {
    console.log('adManager', obj);
});

jwplayer().on('adSkipped', function(obj) {
    console.log('adSkipped', obj);
    mediaSDK.logAdSkip();
});

jwplayer().on('beforePlay', function(obj) {
    // This is the closest place to start a session for JWPlayer
    // This happens at the moment a user interacts with the player
    // and before an ad loads
    console.log('beforePlay', obj);
    // debugger;
    if (!sessionStarted) {
        mediaSDK.logMediaSessionStart({
            customAttributes: {
                myCustomAttributes: 'cookie',
                ad_content_campaign: 'Testing AD Content Campaign',
                content_show: 'The Cookies',
                content_season: 2,
                content_episode: 14
            }
        });
        sessionStarted = true;
    }
});

jwplayer().on('complete', function(obj) {
    // For JW Player, has finished playing everything, including ads
    console.log('complete', obj);

    mediaSDK.logMediaSessionEnd();
    sessionStarted = false;
});

jwplayer().on('visualQuality', function(obj) {
    console.log('visualQuality', obj);

    if (sessionStarted) {
        // Careful with the capitalization here
        mediaSDK.logQoS({ bitRate: obj.bitrate });
    }
});

// Subscribe to Media Event Listener so you can act upon any particular
// Media Event that you may need to spy on
window.mediaSDK.mediaEventListener = function(event) {
    console.log('Picking up Media Event', event);
    console.log('Example page event', event.toPageEvent());
    if (event.name === 'Play') {
        console.log('mParticle Media SDK fired play event');

        var customPageEvent = mediaSDK.createPageEvent('AlternativePlay', {
            something: 'custom'
        });

        window.mParticle.logBaseEvent(customPageEvent);
    }
};
