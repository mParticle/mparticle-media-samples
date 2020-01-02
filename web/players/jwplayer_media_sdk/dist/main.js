/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// This will live in a declaration file in core sdk
// once we set that up.
var MessageType;
(function (MessageType) {
    MessageType[MessageType["PageEvent"] = 4] = "PageEvent";
    MessageType[MessageType["Media"] = 20] = "Media";
})(MessageType || (MessageType = {}));
var EventType;
(function (EventType) {
    EventType[EventType["Media"] = 9] = "Media";
})(EventType || (EventType = {}));
var MediaEventType;
(function (MediaEventType) {
    MediaEventType[MediaEventType["Play"] = 23] = "Play";
    MediaEventType[MediaEventType["Pause"] = 24] = "Pause";
    MediaEventType[MediaEventType["MediaContentEnd"] = 25] = "MediaContentEnd";
    MediaEventType[MediaEventType["SessionStart"] = 30] = "SessionStart";
    MediaEventType[MediaEventType["SessionEnd"] = 31] = "SessionEnd";
    MediaEventType[MediaEventType["SeekStart"] = 32] = "SeekStart";
    MediaEventType[MediaEventType["SeekEnd"] = 33] = "SeekEnd";
    MediaEventType[MediaEventType["BufferStart"] = 34] = "BufferStart";
    MediaEventType[MediaEventType["BufferEnd"] = 35] = "BufferEnd";
    MediaEventType[MediaEventType["UpdatePlayheadPosition"] = 36] = "UpdatePlayheadPosition";
    MediaEventType[MediaEventType["AdClick"] = 37] = "AdClick";
    MediaEventType[MediaEventType["AdBreakStart"] = 38] = "AdBreakStart";
    MediaEventType[MediaEventType["AdBreakEnd"] = 39] = "AdBreakEnd";
    MediaEventType[MediaEventType["AdStart"] = 40] = "AdStart";
    MediaEventType[MediaEventType["AdEnd"] = 41] = "AdEnd";
    MediaEventType[MediaEventType["AdSkip"] = 42] = "AdSkip";
    MediaEventType[MediaEventType["SegmentStart"] = 43] = "SegmentStart";
    MediaEventType[MediaEventType["SegmentEnd"] = 44] = "SegmentEnd";
    MediaEventType[MediaEventType["SegmentSkip"] = 45] = "SegmentSkip";
    MediaEventType[MediaEventType["UpdateQoS"] = 46] = "UpdateQoS";
})(MediaEventType || (MediaEventType = {}));
var MediaEventName = {
    Play: 'Play',
    Pause: 'Pause',
    MediaContentEnd: 'Media Content End',
    SessionStart: 'Media Session Start',
    SessionEnd: 'Media Session End',
    SeekStart: 'Seek Start',
    SeekEnd: 'Seek End',
    BufferStart: 'Buffer Start',
    BufferEnd: 'Buffer End',
    UpdatePlayheadPosition: 'Update Playhead Position',
    AdClick: 'Ad Click',
    AdBreakStart: 'Ad Break Start',
    AdBreakEnd: 'Ad Break End',
    AdStart: 'Ad Start',
    AdEnd: 'Ad End',
    AdSkip: 'Ad Skip',
    SegmentStart: 'Segment Start',
    SegmentEnd: 'Segment End',
    SegmentSkip: 'Segment Skip',
    UpdateQoS: 'Update QoS',
};
var MediaContentType;
(function (MediaContentType) {
    MediaContentType["Video"] = "Video";
    MediaContentType["Audio"] = "Audio";
})(MediaContentType || (MediaContentType = {}));
var MediaStreamType;
(function (MediaStreamType) {
    MediaStreamType["LiveStream"] = "LiveStream";
    MediaStreamType["OnDemand"] = "OnDemand";
})(MediaStreamType || (MediaStreamType = {}));
var ValidMediaAttributeKeys = {
    mediaSessionId: 'media_session_id',
    playheadPosition: 'playhead_position',
    id: 'id',
    //MediaConent
    contentTitle: 'content_title',
    contentId: 'content_id',
    duration: 'content_duration',
    streamType: 'stream_type',
    contentType: 'content_type',
    //Seek
    seekPosition: 'seek_position',
    //Buffer
    bufferDuration: 'buffer_duration',
    bufferPercent: 'buffer_percent',
    bufferPosition: 'buffer_position',
    //QoS
    qosBitrate: 'qos_bitrate',
    qosFramesPerSecond: 'qos_fps',
    qosStartupTime: 'qos_startup_time',
    qosDroppedFrames: 'qos_dropped_frames',
    //MediaAd
    adTitle: 'ad_content_title',
    adDuration: 'ad_content_duration',
    adId: 'ad_content_id',
    adAdvertiserId: 'ad_content_advertiser',
    adCampaign: 'ad_content_campaign',
    adCreative: 'ad_content_creative',
    adPlacement: 'ad_content_placement',
    adSiteId: 'ad_content_site_id',
    //MediaAdBreak
    adBreakTitle: 'ad_break_title',
    adBreakDuration: 'ad_break_duration',
    adBreakPlaybackTime: 'ad_break_playback_time',
    adBreakId: 'ad_break_id',
    //Segment
    segmentTitle: 'segment_title',
    segmentIndex: 'segment_index',
    segmentDuration: 'segment_duration',
};

var uuid = function () {
    // Thanks to StackOverflow user Briguy37
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
var getNameFromType = function (type) {
    return MediaEventName[MediaEventType[type]];
};

/**
 * Represents a Base event for mParticle Core
 */
var BaseEvent = /** @class */ (function () {
    /**
     *
     * @param name The name of the event
     * @param eventType an Event Type that corresponds to [EventType](https://github.com/mParticle/mparticle-web-sdk/blob/master/src/types.js) in Core SDK
     * @param messageType A message type that corresponds to MessageType
     */
    function BaseEvent(name, eventType, messageType) {
        this.name = name;
        this.eventType = eventType;
        this.messageType = messageType;
        /**
         * @hidden Abstract representation of a Base Event for the Server model in Core SDK
         */
        this.toEventAPIObject = function () { };
    }
    return BaseEvent;
}());
/**
 * Represents a single media event. Generally you won't call this class directly. The Media SDK calls this class internally when you invoke methods on [[MediaSession]].
 *
 * ## Custom Attributes
 * By default, a `MediaEvent` will have certain required attributes,
 * such as `custom_media_id` and `custom_media_title`, etc. However,
 * if you need to log something custom, such as `content_season_number`
 * or `player_name`, this can be included in the `customAttributes` object .
 *
 * These `customAttributes` are attributes unique to the media event
 * but can be passed through the `MediaSession` via the various log
 * functions as an `options` parameter.
 */
var MediaEvent = /** @class */ (function (_super) {
    __extends(MediaEvent, _super);
    /**
     * Constructor for Media Event
     * @param type Type of action being performed, i.e. play, pause, seek, etc.
     * @param contentTitle Title of the Media Content
     * @param contentId Unique Identifier for the Media Content
     * @param duration Length of time for the Media Content
     * @param contentType Content Type. i.e. video vs audio
     * @param streamType Stream Type i.e. live vs on demand
     * @param mediaSessionID Session ID from media Session
     * @param customAttributes A dictionary of custom attributes
     * @returns An instance of a Media Event
     */
    function MediaEvent(eventType, contentTitle, contentId, duration, contentType, streamType, mediaSessionID, options) {
        if (options === void 0) { options = {}; }
        var _a, _b;
        var _this = _super.call(this, getNameFromType(eventType), eventType, MessageType.Media) || this;
        _this.eventType = eventType;
        _this.contentTitle = contentTitle;
        _this.contentId = contentId;
        _this.duration = duration;
        _this.contentType = contentType;
        _this.streamType = streamType;
        _this.mediaSessionID = mediaSessionID;
        _this.options = options;
        _this.id = uuid();
        /**
         * @hidden Returns custom attributes
         */
        _this.getCustomAttributes = function () {
            return _this.options.customAttributes;
        };
        /**
         * @hidden Returns session related event attributes
         */
        _this.getSessionAttributes = function () {
            var sessionAttributes = {
                content_title: _this.contentTitle,
                content_duration: _this.duration,
                content_id: _this.contentId,
                content_type: MediaContentType[_this.contentType],
                stream_type: MediaStreamType[_this.streamType],
                media_session_id: _this.mediaSessionID,
            };
            if (typeof _this.playheadPosition === 'number') {
                sessionAttributes[ValidMediaAttributeKeys.playheadPosition] = _this.playheadPosition;
            }
            return sessionAttributes;
        };
        /**
         * @hidden Representation of the Media Event as a Custom Event
         */
        _this.getEventAttributes = function () {
            var eventAttributes = {};
            if (_this.seekPosition) {
                eventAttributes[ValidMediaAttributeKeys.seekPosition] = _this.seekPosition;
            }
            if (_this.bufferDuration) {
                eventAttributes[ValidMediaAttributeKeys.bufferDuration] = _this.bufferDuration;
            }
            if (_this.bufferPercent) {
                eventAttributes[ValidMediaAttributeKeys.bufferPercent] = _this.bufferPercent;
            }
            if (_this.bufferPosition) {
                eventAttributes[ValidMediaAttributeKeys.bufferPosition] = _this.bufferPosition;
            }
            // QoS
            if (_this.qos) {
                if (typeof _this.qos.bitRate === 'number') {
                    eventAttributes[ValidMediaAttributeKeys.qosBitrate] = _this.qos.bitRate;
                }
                if (typeof _this.qos.fps === 'number') {
                    eventAttributes[ValidMediaAttributeKeys.qosFramesPerSecond] = _this.qos.fps;
                }
                if (typeof _this.qos.startupTime === 'number') {
                    eventAttributes[ValidMediaAttributeKeys.qosStartupTime] = _this.qos.startupTime;
                }
                if (typeof _this.qos.droppedFrames === 'number') {
                    eventAttributes[ValidMediaAttributeKeys.qosDroppedFrames] = _this.qos.droppedFrames;
                }
            }
            // Ad Content
            if (_this.adContent) {
                if (_this.adContent.title) {
                    eventAttributes[ValidMediaAttributeKeys.adTitle] = _this.adContent.title;
                }
                if (_this.adContent.id) {
                    eventAttributes[ValidMediaAttributeKeys.adId] = _this.adContent.id;
                }
                if (_this.adContent.advertiser) {
                    eventAttributes[ValidMediaAttributeKeys.adAdvertiserId] = _this.adContent.advertiser;
                }
                if (_this.adContent.siteid) {
                    eventAttributes[ValidMediaAttributeKeys.adSiteId] = _this.adContent.siteid;
                }
                if (typeof _this.adContent.placement === 'number') {
                    eventAttributes[ValidMediaAttributeKeys.adPlacement] = _this.adContent.placement;
                }
                if (_this.adContent.duration) {
                    eventAttributes[ValidMediaAttributeKeys.adDuration] = _this.adContent.duration;
                }
                if (_this.adContent.creative) {
                    eventAttributes[ValidMediaAttributeKeys.adCreative] = _this.adContent.creative;
                }
                if (_this.adContent.campaign) {
                    eventAttributes[ValidMediaAttributeKeys.adCampaign] = _this.adContent.campaign;
                }
            }
            // Ad Break
            if (_this.adBreak) {
                if (_this.adBreak.id) {
                    eventAttributes[ValidMediaAttributeKeys.adBreakId] = _this.adBreak.id;
                }
                if (_this.adBreak.title) {
                    eventAttributes[ValidMediaAttributeKeys.adBreakTitle] = _this.adBreak.title;
                }
                if (_this.adBreak.duration) {
                    eventAttributes[ValidMediaAttributeKeys.adBreakDuration] = _this.adBreak.duration;
                }
            }
            // Segments
            if (_this.segment) {
                if (_this.segment.title) {
                    eventAttributes[ValidMediaAttributeKeys.segmentTitle] = _this.segment.title;
                }
                if (_this.segment.index) {
                    eventAttributes[ValidMediaAttributeKeys.segmentIndex] = _this.segment.index;
                }
                if (_this.segment.duration) {
                    eventAttributes[ValidMediaAttributeKeys.segmentDuration] = _this.segment.duration;
                }
            }
            return eventAttributes;
        };
        /**
         * Returns a dictionary of attributes
         * @returns Object
         */
        _this.getAttributes = function () {
            return __assign(__assign(__assign({}, _this.getSessionAttributes()), _this.getEventAttributes()), _this.getCustomAttributes());
        };
        /**
         * Representation of the Media Event as a Page Event for the core SDK
         * @returns Object
         */
        _this.toPageEvent = function () {
            return {
                name: _this.name,
                eventType: EventType.Media,
                messageType: MessageType.PageEvent,
                data: _this.getAttributes(),
            };
        };
        /**
         * @hidden Representation of the Media Event for the server model
         */
        _this.toEventAPIObject = function () {
            return {
                // Core Event Attributes
                EventName: _this.name,
                EventCategory: _this.eventType,
                EventDataType: _this.messageType,
                AdContent: _this.adContent,
                AdBreak: _this.adBreak,
                Segment: _this.segment,
                SeekPosition: _this.seekPosition,
                BufferDuration: _this.bufferDuration,
                BufferPercent: _this.bufferPercent,
                BufferPosition: _this.bufferPosition,
                PlayheadPosition: _this.playheadPosition,
                QoS: _this.qos,
                ContentTitle: _this.contentTitle,
                ContentId: _this.contentId,
                Duration: _this.duration,
                ContentType: MediaContentType[_this.contentType],
                StreamType: MediaStreamType[_this.streamType],
                EventAttributes: _this.options.customAttributes,
            };
        };
        _this.playheadPosition = (_a = options) === null || _a === void 0 ? void 0 : _a.currentPlayheadPosition;
        _this.customAttributes = (_b = options) === null || _b === void 0 ? void 0 : _b.customAttributes;
        return _this;
    }
    return MediaEvent;
}(BaseEvent));

/**
 * The MediaSession class is the primary class that will be used to engage with the mParticle Media SDK.
 *
 * # Usage
 * ## MediaSession Instance
 *
 * ```javascript
 * const mediaSession = new MediaSession(
 *   mParticle,                    // mParticle SDK Instance
 *   '1234567',                    // Custom media ID
 *   'Funny Internet cat video',   // Custom media Title
 *   120000,                       // Duration in milliseconds
 *   'Video',                      // Content Type (Video or Audio)
 *   'OnDemand'                    // Stream Type (OnDemand, Live, etc.)
 *   true,                         // Log Page Event Toggle (true/false)
 *   true,                         // Log Media Event Toggle (true/false)
 * )
 * ```
 *
 * ## Logging Events
 *
 * Once initiated, a [[MediaSession]] provides various log methods
 * that will trigger a [[MediaEvent]].
 *
 * ```javascript
 * mediaSession.logMediaSessionStart();
 * mediaSession.logPlay();
 * ```
 *
 * ## Custom Attributes
 * By default, a `MediaEvent` will have certain required attributes,
 * such as `custom_media_id` and `custom_media_title`, etc. However,
 * if you require to log something custom, such as `content_season_number`
 * or `player_name`, this can be added to `customAttributes`.
 *
 * These `customAttributes` are attributes unique to the media event
 * but can be passed through the `MediaSession` via the various log
 * functions as an `options` parameter.
 *
 * ```javascript
 * const customAttributes = {
 *     content_season: 3,
 *     content_episode: 26,
 *     content_episode_name: 'The Best of Both Worlds',
 * };
 *
 * mediaSession.logPlay({ options: currentAttributes })
 * ```
 */
var MediaSession = /** @class */ (function () {
    /**
     * Initializes the Media Session object. This does not start a session, you can do so by calling `logMediaSessionStart`.
     * @param mparticleInstance Your mParticle global object
     * @param contentId A unique identifier for your media content
     * @param title The title of your media content
     * @param duration The length of time for the complete media content (not including ads or breaks)
     * @param contentType A descriptor for the type of content, i.e. Audio or Video
     * @param streamType A descriptor for the type of stream, i.e. live or on demand
     * @param logPageEvent A flag that toggles sending mParticle Events to Core SDK
     * @param logMediaEvent A flag that toggles sending Media Events to Core SDK
     */
    function MediaSession(mparticleInstance, contentId, title, duration, contentType, streamType, logPageEvent, logMediaEvent) {
        if (logPageEvent === void 0) { logPageEvent = false; }
        if (logMediaEvent === void 0) { logMediaEvent = true; }
        this.mparticleInstance = mparticleInstance;
        this.contentId = contentId;
        this.title = title;
        this.duration = duration;
        this.contentType = contentType;
        this.streamType = streamType;
        this.logPageEvent = logPageEvent;
        this.logMediaEvent = logMediaEvent;
        this._sessionId = '';
        this.currentPlayheadPosition = 0;
        this.currentQoS = {
            startupTime: 0,
            fps: 0,
            bitRate: 0,
            droppedFrames: 0,
        };
        this.customAttributes = {};
        this.listenerCallback = function () { };
    }
    Object.defineProperty(MediaSession.prototype, "sessionId", {
        get: function () {
            return this._sessionId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a base Media Event
     * @param eventType
     * @param customAttributes
     */
    MediaSession.prototype.createMediaEvent = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var _a, _b;
        // Set event option based on options or current state
        this.currentPlayheadPosition =
            ((_a = options) === null || _a === void 0 ? void 0 : _a.currentPlayheadPosition) || this.currentPlayheadPosition;
        this.customAttributes = ((_b = options) === null || _b === void 0 ? void 0 : _b.customAttributes) || {};
        options = __assign({ currentPlayheadPosition: this.currentPlayheadPosition, customAttributes: this.customAttributes }, options);
        return new MediaEvent(eventType, this.title, this.contentId, this.duration, this.contentType, this.streamType, this.sessionId, options);
    };
    /**
     * Sends MediaEvent to CoreSDK depending on if [logMediaEvent] or [logPageEvent] are set
     * @param event MediaEvent
     */
    MediaSession.prototype.logEvent = function (event) {
        this.mediaEventListener(event);
        if (this.logMediaEvent) {
            this.mparticleInstance.logBaseEvent(event);
        }
        if (this.logPageEvent) {
            if (event.eventType !== MediaEventType.UpdatePlayheadPosition) {
                var mpEvent = event.toPageEvent();
                this.mparticleInstance.logBaseEvent(mpEvent);
            }
        }
    };
    /**
     * Returns QoS attributes as a flat object
     */
    MediaSession.prototype.getQoSAttributes = function () {
        var result = {};
        if (this.currentQoS.bitRate) {
            result.qos_bitrate = this.currentQoS.bitRate;
        }
        if (this.currentQoS.startupTime) {
            result.qos_startup_time = this.currentQoS.startupTime;
        }
        if (this.currentQoS.fps) {
            result.qos_fps = this.currentQoS.fps;
        }
        if (this.currentQoS.droppedFrames) {
            result.qos_dropped_frames = this.currentQoS.droppedFrames;
        }
        return result;
    };
    /**
     * Returns session attributes as a flat object
     */
    MediaSession.prototype.getAttributes = function () {
        return {
            content_title: this.title,
            content_duration: this.duration,
            content_id: this.contentId,
            content_type: MediaContentType[this.contentType],
            stream_type: MediaStreamType[this.streamType],
            playhead_position: this.currentPlayheadPosition,
            media_session_id: this.sessionId,
        };
    };
    /**
     * Starts your media session. Should be triggered before any prerolls or ads
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logMediaSessionStart = function (options) {
        this._sessionId = uuid();
        var event = this.createMediaEvent(MediaEventType.SessionStart, options);
        this.logEvent(event);
    };
    /**
     * Ends your media session. Should be triggered after all ads and content have been completed
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logMediaSessionEnd = function (options) {
        var event = this.createMediaEvent(MediaEventType.SessionEnd, options);
        this.logEvent(event);
    };
    /**
     * Logs when your media content has ended, usually before a post-roll ad.
     * Must be fired between MediaSessionStart and MediaSessionEnd
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logMediaContentEnd = function (options) {
        var event = this.createMediaEvent(MediaEventType.MediaContentEnd, options);
        this.logEvent(event);
    };
    /**
     * Logs when an Ad Break pod has started
     * @param adBreakContent An object representing an [[AdBreak]] (collection of ads)
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdBreakStart = function (adBreakContent, options) {
        this.adBreak = adBreakContent;
        var event = this.createMediaEvent(MediaEventType.AdBreakStart, options);
        event.adBreak = adBreakContent;
        this.logEvent(event);
    };
    /**
     * Logs when an [[AdBreak]] pod has ended
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdBreakEnd = function (options) {
        var event = this.createMediaEvent(MediaEventType.AdBreakEnd, options);
        event.adBreak = this.adBreak;
        this.logEvent(event);
        this.adBreak = undefined;
    };
    /**
     * Logs when a single ad plays
     * @param adContent An object representing a single Ad
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdStart = function (adContent, options) {
        this.adContent = adContent;
        var event = this.createMediaEvent(MediaEventType.AdStart, options);
        event.adContent = adContent;
        this.logEvent(event);
    };
    /**
     * Logs when a single ad ends
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdEnd = function (options) {
        var event = this.createMediaEvent(MediaEventType.AdEnd, options);
        event.adContent = this.adContent;
        this.logEvent(event);
        this.adContent = undefined;
    };
    /**
     * Logs when a single ad is skipped by a visitor
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdSkip = function (options) {
        var event = this.createMediaEvent(MediaEventType.AdSkip, options);
        event.adContent = this.adContent;
        this.logEvent(event);
        this.adContent = undefined;
    };
    /**
     * Logs when a single ad is clicked on by a visitor
     * @param options Optional Custom Attributes
     * @category Advertising
     */
    MediaSession.prototype.logAdClick = function (adContent, options) {
        this.adContent = adContent;
        var event = this.createMediaEvent(MediaEventType.AdClick, options);
        event.adContent = this.adContent;
        this.logEvent(event);
    };
    /**
     * Logs the start of a buffering event
     * @param bufferDuration The duration of a buffering event
     * @param bufferPercent The percent that has been buffered
     * @param bufferPosition The playhead position of the buffering event
     * @param options Optional Custom Attributes
     * @category Buffering
     */
    MediaSession.prototype.logBufferStart = function (bufferDuration, bufferPercent, bufferPosition, options) {
        var event = this.createMediaEvent(MediaEventType.BufferStart, options);
        event.bufferDuration = bufferDuration;
        event.bufferPercent = bufferPercent;
        event.bufferPosition = bufferPosition;
        this.logEvent(event);
    };
    /**
     * Logs the end of a buffering event
     * @param bufferDuration The duration of a buffering event
     * @param bufferPercent The percent that has been buffered
     * @param bufferPosition The playhead position of the buffering event
     * @param options Optional Custom Attributes
     * @category Buffering
     */
    MediaSession.prototype.logBufferEnd = function (bufferDuration, bufferPercent, bufferPosition, options) {
        var event = this.createMediaEvent(MediaEventType.BufferEnd, options);
        event.bufferDuration = bufferDuration;
        event.bufferPercent = bufferPercent;
        event.bufferPosition = bufferPosition;
        this.logEvent(event);
    };
    /**
     * Logs a play event
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logPlay = function (options) {
        var event = this.createMediaEvent(MediaEventType.Play, options);
        this.logEvent(event);
    };
    /**
     * Logs a pause event
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logPause = function (options) {
        var event = this.createMediaEvent(MediaEventType.Pause, options);
        this.logEvent(event);
    };
    /**
     * Logs the start of a Segment or Chapter
     * @param segment An object representing a segment or chapter of content
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logSegmentStart = function (segment, options) {
        var event = this.createMediaEvent(MediaEventType.SegmentStart, options);
        event.segment = segment;
        this.logEvent(event);
        this.segment = segment;
    };
    /**
     * Logs the end of a Segment or Chapter
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logSegmentEnd = function (options) {
        var event = this.createMediaEvent(MediaEventType.SegmentEnd, options);
        event.segment = this.segment;
        this.logEvent(event);
        this.segment = undefined;
    };
    /**
     * Logs when a visitor skips a Segment or Chapter
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logSegmentSkip = function (options) {
        var event = this.createMediaEvent(MediaEventType.SegmentSkip, options);
        event.segment = this.segment;
        this.logEvent(event);
        this.segment = undefined;
    };
    /**
     * Logs when a visitor starts seeking
     * @param seekPosition the desired playhead position
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logSeekStart = function (seekPosition, options) {
        var event = this.createMediaEvent(MediaEventType.SeekStart, options);
        event.seekPosition = seekPosition;
        this.logEvent(event);
    };
    /**
     * Logs when a visitor stops seeking
     * @param seekPosition the desired playhead position
     * @param options Optional Custom Attributes
     * @category Media
     */
    MediaSession.prototype.logSeekEnd = function (seekPosition, options) {
        var event = this.createMediaEvent(MediaEventType.SeekEnd, options);
        event.seekPosition = seekPosition;
        this.logEvent(event);
    };
    /**
     * Logs when the playhead position is updated
     * @param playheadPosition The updated playhead position
     * @category Media
     */
    MediaSession.prototype.logPlayheadPosition = function (playheadPosition) {
        this.currentPlayheadPosition = playheadPosition;
        var event = this.createMediaEvent(MediaEventType.UpdatePlayheadPosition);
        event.playheadPosition = playheadPosition;
        this.logEvent(event);
    };
    /**
     * Logs an update in the Quality of Service
     * @param qos An object representing QoS
     * @param options Optional Custom Attributes
     * @category Quality of Service
     */
    MediaSession.prototype.logQoS = function (qos, options) {
        this.currentQoS = __assign(__assign({}, this.currentQoS), qos);
        var event = this.createMediaEvent(MediaEventType.UpdateQoS, options);
        event.qos = __assign({}, this.currentQoS);
        this.logEvent(event);
    };
    /**
     * Creates a Custom Page Event which can then be passed into
     * Core SDK as an event
     *
     * ```typescript
     * const customMPEvent = MediaSession.createPageEvent(
     *     'My Custom Event',
     * .   {
     *        "custom-property": "custom-value"
     *     }
     * );
     *
     * mParticle.logEvent(customMPEvent);
     * ```
     *
     * returns a Custom Page Event
     * @param eventName The name of your custom event
     * @param attributes An Attribute Key/Value pair
     */
    MediaSession.prototype.createPageEvent = function (eventName, attributes) {
        return {
            name: eventName,
            eventType: EventType.Media,
            messageType: MessageType.PageEvent,
            data: __assign(__assign(__assign({}, this.getAttributes()), this.getQoSAttributes()), attributes),
        };
    };
    Object.defineProperty(MediaSession.prototype, "mediaEventListener", {
        /**
         * Subscribes your Media Session to an array of [[MediaEventType]] and fires a
         * callback when they are triggered
         *
         * ```typescript
         * const mediaSession = new MediaSession(
         *     mParticle,
         *     title = "Media Title"
         *     mediaContentId = "123"
         *     duration = 1000
         *     streamType = StreamType.LiveStream
         *     contentType = ContentType.Video
         *
         *     logPageEvents = false              //optional, defaults to false anyway
         *     logMediaEvents = false
         * );
         *
         * const myCallback = (event: MediaEvent): void => {
         *     // Some custom callback method defined by user
         *     // Should only trigger when play or pause is fired
         *     if (
         *         event.type == MediaEventType.Play ||
         *         event.type == MediaEventType.Pause
         *     ) {
         *         const mpEvent = mediaEvent.toPageEvent();
         *         mParticle.getInstance().logEvent(mpEvent);
         *     }
         * }
         *
         * mediaSession.mediaEventListener(myCallback);
         *
         * ```
         * @param eventTypes An Array of MediaEventTypes that are being subscribed to
         * @param callback A callback function
         */
        get: function () {
            return this.listenerCallback;
        },
        set: function (callback) {
            this.listenerCallback = callback;
        },
        enumerable: true,
        configurable: true
    });
    return MediaSession;
}());

module.exports = MediaSession;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function Common() {
    this.playheadPosition = 0;
    this.startupTime = 0;
    this.droppedFrames = 0;
    this.bitRate = 0;
    this.fps = 0;
}

var common = Common;

var MediaEventType = {
    Play: 23,
    Pause: 24,
    MediaContentEnd: 25,
    SessionStart: 30,
    SessionEnd: 31,
    SeekStart: 32,
    SeekEnd: 33,
    BufferStart: 34,
    BufferEnd: 35,
    UpdatePlayheadPosition: 36,
    AdClick: 37,
    AdBreakStart: 38,
    AdBreakEnd: 39,
    AdStart: 40,
    AdEnd: 41,
    AdSkip: 42,
    SegmentStart: 43,
    SegmentEnd: 44,
    SegmentSkip: 45,
    UpdateQoS: 46
};

var ContentType = {
    Audio: 'Audio',
    Video: 'Video'
};

var StreamType = {
    LiveStream: 'LiveStream',
    OnDemand: 'OnDemand'
};

function EventHandler(common) {
    this.common = common || {};
}
EventHandler.prototype.logEvent = function(event) {
    switch (event.EventCategory) {
        case MediaEventType.AdBreakStart:
            var adBreakObject = this.common.MediaHeartbeat.createAdBreakObject(
                event.AdBreak.title,
                event.AdBreak.placement || 0, // TODO: Ad Break Object doesn't support placement yet
                this.common.playheadPosition
            );

            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdBreakStart,
                adBreakObject
            );
            break;
        case MediaEventType.AdBreakEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdBreakComplete
            );
            break;
        case MediaEventType.AdStart:
            var adObject = this.common.MediaHeartbeat.createAdObject(
                event.AdContent.title,
                event.AdContent.id,
                event.AdContent.placement,
                event.AdContent.duration
            );

            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdStart,
                adObject
            );
            break;
        case MediaEventType.AdEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdComplete
            );
            break;
        case MediaEventType.AdSkip:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdSkip
            );
            break;
        case MediaEventType.AdClick:
            // This is not supported in Adobe Heartbeat
            console.warn('Ad Click is not a supported Adobe Heartbeat Event');
            break;
        case MediaEventType.BufferStart:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.BufferStart
            );
            break;
        case MediaEventType.BufferEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.BufferComplete
            );
            break;
        case MediaEventType.MediaContentEnd:
            this.common.mediaHeartbeat.trackComplete();
            break;
        case MediaEventType.SessionStart:
            var streamType = getStreamType(
                event.StreamType,
                event.ContentType,
                this.common.MediaHeartbeat.StreamType
            );

            var adobeMediaObject = this.common.MediaHeartbeat.createMediaObject(
                event.ContentTitle,
                event.ContentId,
                event.Duration,
                streamType,
                event.ContentType
            );

            this.common.mediaHeartbeat.trackSessionStart(adobeMediaObject);
            break;

        case MediaEventType.SessionEnd:
            this.common.mediaHeartbeat.trackSessionEnd();
            break;
        case MediaEventType.Play:
            this.common.mediaHeartbeat.trackPlay();
            break;
        case MediaEventType.Pause:
            this.common.mediaHeartbeat.trackPause();
            break;
        case MediaEventType.UpdatePlayheadPosition:
            this.common.playheadPosition = event.PlayheadPosition;
            break;
        case MediaEventType.SeekStart:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.SeekStart
            );
            break;
        case MediaEventType.SeekEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.SeekComplete
            );
            break;
        case MediaEventType.SegmentStart:
            var chapterObject = this.common.MediaHeartbeat.createChapterObject(
                event.Segment.title,
                event.Segment.index,
                event.Segment.duration,
                this.common.playheadPosition
            );

            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.ChapterStart,
                chapterObject
            );
            break;
        case MediaEventType.SegmentEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.ChapterComplete
            );
            break;
        case MediaEventType.SegmentSkip:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.ChapterSkip
            );
            break;
        case MediaEventType.UpdateQoS:
            this.common.startupTime = event.QoS.startupTime;
            this.common.droppedFrames = event.QoS.droppedFrames;
            this.common.bitRate = event.QoS.bitRate;
            this.common.fps = event.QoS.fps;

            var qosObject = this.common.MediaHeartbeat.createQoSObject(
                this.common.bitRate,
                this.common.startupTime,
                this.common.fps,
                this.common.droppedFrames
            );

            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.BitrateChange,
                qosObject
            );
            break;
        default:
            console.error('Unknown Event Type', event);
            return false;
    }
};

var getStreamType = function(streamType, contentType, types) {
    switch (streamType) {
        case StreamType.OnDemand:
            return contentType === ContentType.Video ? types.VOD : types.AOD;
        case StreamType.LiveStream:
            return types.LIVE;
        default:
            // If it's an unknown type, just pass it through to Adobe
            return streamType;
    }
};

var eventHandler = EventHandler;

var Initialization = {
    name: 'AdobeHeartbeat',
    moduleId: 128,
    initForwarder: function(
        settings,
        testMode,
        userAttributes,
        userIdentities,
        processEvent,
        eventQueue,
        isInitialized,
        common
    ) {
        var self = this;
        if (!window.mParticle.isTestEnvironment || !window.ADB) {
            /* Load your Web SDK here using a variant of your snippet from your readme that your customers would generally put into their <head> tags
               Generally, our integrations create script tags and append them to the <head>. Please follow the following format as a guide:
            */
            var adobeHeartbeatSdk = document.createElement('script');
            adobeHeartbeatSdk.type = 'text/javascript';
            adobeHeartbeatSdk.async = true;
            adobeHeartbeatSdk.src = 'https://static.mparticle.com/sdk/web/adobe/MediaSDK.min.js';
            (
                document.getElementsByTagName('head')[0] ||
                document.getElementsByTagName('body')[0]
            ).appendChild(adobeHeartbeatSdk);
            adobeHeartbeatSdk.onload = function() {
                if (ADB && eventQueue.length > 0) {
                    // Process any events that may have been queued up while forwarder was being initialized.
                    for (var i = 0; i < eventQueue.length; i++) {
                        processEvent(eventQueue[i]);
                    }
                    // now that each queued event is processed, we empty the eventQueue
                    eventQueue = [];
                }
                isInitialized = self.initHeartbeat(
                    settings,
                    common,
                    ADB,
                    testMode
                );
            };
        } else {
            // For testing, you should fill out this section in order to ensure any required initialization calls are made,
            // clientSDKObject.initialize(forwarderSettings.apiKey)
            isInitialized = self.initHeartbeat(settings, common, ADB, testMode);
        }
    },
    initHeartbeat: function(settings, common, adobeSDK) {
        try {
            // Init App Measurement with Visitor
            var appMeasurement = new AppMeasurement(settings.reportSuiteIDs);
            appMeasurement.visitor = Visitor.getInstance(
                settings.organizationID
            );
            appMeasurement.trackingServer = settings.trackingServer;
            appMeasurement.account = settings.reportSuiteIDs;
            appMeasurement.pageName = document.title;
            appMeasurement.charSet = 'UTF­8';

            // Init Media Heartbeat

            var MediaHeartbeat = adobeSDK.va.MediaHeartbeat;
            var MediaHeartbeatConfig = adobeSDK.va.MediaHeartbeatConfig;
            var MediaHeartbeatDelegate = adobeSDK.va.MediaHeartbeatDelegate;
            var mediaConfig = new MediaHeartbeatConfig();
            common.MediaHeartbeat = MediaHeartbeat;

            mediaConfig.trackingServer = settings.mediaTrackingServer;
            mediaConfig.ssl = settings.useSSL;
            mediaConfig.playerName = 'mParticle Media SDK';

            var mediaDelegate = new MediaHeartbeatDelegate();

            mediaDelegate.getCurrentPlaybackTime = function() {
                return common.playheadPosition;
            };

            mediaDelegate.getQoSObject = function() {
                return MediaHeartbeat.createQoSObject(
                    common.bitRate,
                    common.startupTime,
                    common.fps,
                    common.droppedFrames
                );
            };

            var mediaHeartbeat = new MediaHeartbeat(
                mediaDelegate,
                mediaConfig,
                appMeasurement
            );
            common.mediaHeartbeat = mediaHeartbeat;
        } catch (e) {
            console.error(e);
            return false;
        }

        return true;
    }
};

var initialization = Initialization;

// =============== REACH OUT TO MPARTICLE IF YOU HAVE ANY QUESTIONS ===============
//
//  Copyright 2018 mParticle, Inc.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.





var MessageType = {
    SessionStart: 1,
    SessionEnd: 2,
    PageView: 3,
    PageEvent: 4,
    CrashReport: 5,
    OptOut: 6,
    Commerce: 16,
    Media: 20
};

function constructor() {
    var self = this,
        isInitialized = false,
        reportingService,
        eventQueue = [];

    self.moduleId = initialization.moduleId;
    self.common = new common();

    function initForwarder(
        settings,
        service,
        testMode,
        trackerId,
        userAttributes,
        userIdentities
    ) {
        if (window.mParticle.isTestEnvironment) {
            reportingService = function() {};
        } else {
            reportingService = service;
        }

        try {
            initialization.initForwarder(
                settings,
                testMode,
                userAttributes,
                userIdentities,
                processEvent,
                eventQueue,
                isInitialized,
                self.common
            );
            self.eventHandler = new eventHandler(self.common);

            isInitialized = true;
        } catch (e) {
            console.log('Failed to initialize ' + name + ' - ' + e);
        }
    }

    function processEvent(event) {
        var reportEvent = false;
        if (isInitialized) {
            try {
                if (event.EventDataType === MessageType.Media) {
                    // Kits should just treat Media Events as generic Events
                    reportEvent = logEvent(event);
                }
                if (reportEvent === true && reportingService) {
                    reportingService(self, event);
                    return 'Successfully sent to ' + name;
                } else {
                    return (
                        'Error logging event or event type not supported on forwarder ' +
                        name
                    );
                }
            } catch (e) {
                return 'Failed to send to ' + name + ' ' + e;
            }
        } else {
            eventQueue.push(event);
            return (
                'Cannot send to forwarder ' +
                name +
                ', not initialized. Event added to queue.'
            );
        }
    }

    function logEvent(event) {
        try {
            self.eventHandler.logEvent(event);
            return true;
        } catch (e) {
            return {
                error: 'Error logging event on forwarder ' + name + '; ' + e
            };
        }
    }

    this.init = initForwarder;
    this.process = processEvent;
}

if (window.mParticle && window.mParticle.registerHBK) {
    window.mParticle.registerHBK({constructor: constructor});
}

var src = {
    AdobeHbkConstructor: constructor
};
var src_1 = src.AdobeHbkConstructor;

/**
 * @license
 * Adobe Visitor API for JavaScript version: 3.3.0
 * Copyright 2018 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=function(){function e(){return {callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1);}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t);}delete this.callbacks[e];}catch(e){}}},executeAll:function(e,t){(t||e&&!v.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i);},this);},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function t(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return !1;return !0}function i(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0");}function n(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return -1}return 0}function r(e,r){if(e===r)return 0;var a=e.toString().split("."),s=r.toString().split(".");return t(a.concat(s))?(i(a,s),n(a,s)):NaN}var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);}return e};var s={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},o={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},l={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},d={CUSTOMERIDS:"getCustomerIDs"},c={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},u={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},f={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},g={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},m={GLOBAL:"global"},_={MESSAGES:s,STATE_KEYS_MAP:o,ASYNC_API_MAP:l,SYNC_API_MAP:d,ALL_APIS:c,FIELDGROUP_TO_FIELD:u,FIELDS:f,AUTH_STATE:g,OPT_OUT:m},h=_.STATE_KEYS_MAP,p=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,h.MCMID),r={};return r[h.MCMID]=t,n.setStateAndPublish(r),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(h.MCMID,e),r=i.call(this,h.MCMID,e);return void 0!==n?n:r()};},C=_.MESSAGES,S=_.ASYNC_API_MAP,I=_.SYNC_API_MAP,D=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(C.GETSTATE),""}}function i(i){this[S[i]]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return void 0!==r?r:a()};}function n(t){this[I[t]]=function(){return this.findField(t,e)||{}};}Object.keys(S).forEach(i,this),Object.keys(I).forEach(n,this);},A=_.ASYNC_API_MAP,M=function(){Object.keys(A).forEach(function(e){this[A[e]]=function(t){this.callbackRegistry.add(e,t);};},this);},v=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){t.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},t.isValueEmpty=function(e){return ""===e||t.isObjectEmpty(e)},t.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null;}return null},t.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},t.isObject=function(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)};}),y=(v.isObjectEmpty,v.isValueEmpty,v.getIeVersion,v.encodeAndBuildRequest,v.isObject,e),b=_.MESSAGES,T={0:"prefix",1:"orgID",2:"state"},k=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,i){if(void 0!==e){t[T[i]]=2!==i?e:JSON.parse(e);}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return !0;var r=e!==n.orgID,a=!t||i.origin!==t,s=-1===Object.keys(b).indexOf(n.prefix);return r||a||s},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t);}catch(e){}};},O=_.MESSAGES,E=function(e,t,i,n){function r(e){Object.assign(m,e);}function s(e){Object.assign(m.state,e),m.callbackRegistry.executeAll(m.state);}function o(e){if(!C.isInvalid(e)){h=!1;var t=C.parse(e);m.setStateAndPublish(t.state);}}function l(e){!h&&_&&(h=!0,C.send(n,e));}function d(){r(new p(i._generateID)),m.getMarketingCloudVisitorID(),m.callbackRegistry.executeAll(m.state,!0),a.removeEventListener("message",c);}function c(e){if(!C.isInvalid(e)){var t=C.parse(e);h=!1,a.clearTimeout(m._handshakeTimeout),a.removeEventListener("message",c),r(new D(m)),a.addEventListener("message",o),m.setStateAndPublish(t.state),m.callbackRegistry.hasCallbacks()&&l(O.GETSTATE);}}function u(){_&&postMessage?(a.addEventListener("message",c),l(O.HANDSHAKE),m._handshakeTimeout=setTimeout(d,250)):d();}function f(){a.s_c_in||(a.s_c_il=[],a.s_c_in=0),m._c="Visitor",m._il=a.s_c_il,m._in=a.s_c_in,m._il[m._in]=m,a.s_c_in++;}function g(){function e(e){0!==e.indexOf("_")&&"function"==typeof i[e]&&(m[e]=function(){});}Object.keys(i).forEach(e),m.getSupplementalDataID=i.getSupplementalDataID;}var m=this,_=t.whitelistParentDomain;m.state={},m.version=i.version,m.marketingCloudOrgID=e,m.cookieDomain=i.cookieDomain||"",m._instanceType="child";var h=!1,C=new k(e,_);m.callbackRegistry=y(),m.init=function(){f(),g(),r(new M(m)),u();},m.findField=function(e,t){if(m.state[e])return t(m.state[e]),m.state[e]},m.messageParent=l,m.setStateAndPublish=s;},L=_.MESSAGES,P=_.ALL_APIS,R=_.ASYNC_API_MAP,F=_.FIELDGROUP_TO_FIELD,w=function(e,t){function i(){var t={};return Object.keys(P).forEach(function(i){var n=P[i],r=e[n]();v.isValueEmpty(r)||(t[i]=r);}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=F[i];t.push(n);}}),t.length?t:null}function r(t){return function i(r){var a=n();if(a){var s=R[a[0]];e[s](i,!0);}else t();}}function a(e,n){var r=i();t.send(e,n,r);}function s(e){l(e),a(e,L.HANDSHAKE);}function o(e){r(function(){a(e,L.PARENTSTATE);})();}function l(i){function n(n){r.call(e,n),t.send(i,L.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()});}var r=e.setCustomerIDs;e.setCustomerIDs=n;}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===L.HANDSHAKE?s:o)(e.source);}}},V=function(e,t){function i(e){return function(i){n[e]=i,r++,r===a&&t(n);}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r);}});},N=function(e){var t;if(!e&&a.location&&(e=a.location.hostname),t=e)if(/^[0-9.]+$/.test(t))t="";else{var i=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",n=t.split("."),r=n.length-1,s=r-1;if(r>1&&n[r].length<=2&&(2===n[r-1].length||i.indexOf(","+n[r]+",")<0)&&s--,s>0)for(t="";r>=s;)t=n[r]+(t?".":"")+t,r--;}return t},x={compare:r,isLessThan:function(e,t){return r(e,t)<0},areVersionsDifferent:function(e,t){return 0!==r(e,t)},isGreaterThan:function(e,t){return r(e,t)>0},isEqual:function(e,t){return 0===r(e,t)}},j=!!a.postMessage,U={postMessage:function(e,t,i){var n=1;t&&(j?i.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(i.location=t.replace(/#.*$/,"")+"#"+ +new Date+n+++"&"+e));},receiveMessage:function(e,t){var i;try{j&&(e&&(i=function(i){if("string"==typeof t&&i.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(i.origin))return !1;e(i);}),a.addEventListener?a[e?"addEventListener":"removeEventListener"]("message",i):a[e?"attachEvent":"detachEvent"]("onmessage",i));}catch(e){}}},H=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a},B=function(e,t){return {corsMetadata:function(){var e="none",t=!0;return "undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return "none"===this.corsMetadata.corsType?null:new a[this.corsMetadata.corsType]},fireCORS:function(t,i,n){function r(e){var i;try{if((i=JSON.parse(e))!==Object(i))return void s.handleCORSError(t,null,"Response is not JSON")}catch(e){return void s.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var n=t.callback,r=a,o=0;o<n.length;o++)r=r[n[o]];r(i);}catch(e){s.handleCORSError(t,e,"Error forming callback function");}}var s=this;i&&(t.loadErrorHandler=i);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText);}),o.onerror=function(e){s.handleCORSError(t,e,"onerror");},o.ontimeout=function(e){s.handleCORSError(t,e,"ontimeout");},o.send(),e._log.requests.push(t.corsUrl);}catch(e){this.handleCORSError(t,e,"try-catch");}},handleCORSError:function(t,i,n){e.CORSErrors.push({corsData:t,error:i,description:n}),t.loadErrorHandler&&("ontimeout"===n?t.loadErrorHandler(!0):t.loadErrorHandler(!1));}}},G={POST_MESSAGE_ENABLED:!!a.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/},q=function(e,t){var i=a.document;return {THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,n="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(n=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=n+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t);},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:G.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return !(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=i.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=n.id,r.name=n.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=n.url,n.newIframeCreated=!0,t(),i.body.appendChild(r);}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",n.iframeHasLoaded=!0,n.fireIframeLoadedCallbacks(e),n.requestToProcess();});}this.startedAttachingIframe=!0;var n=this,r=i.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r;},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."});}),this.iframeLoadedCallbacks=[];},requestToProcess:function(t){function i(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t);}var n,r=this;if(t===Object(t)&&t.ibs)if(n=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,s,o,l=!1;for(a=0,s=this.jsonForComparison.length;a<s;a++)if(o=this.jsonForComparison[a],n===JSON.stringify(o.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):i();}else i();if((this.receivedThirdPartyCookiesNotification||!G.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess();}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=G.POST_MESSAGE_ENABLED?null:150;},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages());},getRegionAndCheckIfChanged:function(t,i){var n=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),n=r)):(n=r)&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",n)),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage");},process:function(e){var t,i,n,r,a,s=encodeURIComponent,o=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(o=!0,n=0;n<i;n++)r=t[n],a=[s("ibs"),s(r.id||""),s(r.tag||""),v.encodeAndBuildRequest(r.url||[],","),s(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));o&&this.jsonProcessed.push(e);},checkFirstPartyCookie:function(t,i,n){var r="syncOnPage"===n,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var s,o,l=e._getField(a),d=!1,c=!1,u=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);l?(s=l.split("*"),o=this.pruneSyncData(s,t.id,u),d=o.dataPresent,c=o.dataValid,d&&c||this.fireSync(r,t,i,s,a,u)):(s=[],this.fireSync(r,t,i,s,a,u));},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return {dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift();},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,d,c,u,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,d=f.length;l<d;l++){c=f[l],u=/^\/\//.test(c);var m=new Image;m.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),d=[];if(l){s=l.split("*");var c,u,f;for(c=0,u=s.length;c<u;c++)f=s[c],f.match("^"+i.id+"-")||d.push(f);}o.setSyncTrackingData(d,i,n,r);}}(this.onPagePixels.length,i,a,s)),m.src=(u?g:"")+c,this.onPagePixels.push(m);}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s);},addMessage:function(t){var i=encodeURIComponent,n=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((G.POST_MESSAGE_ENABLED?"":n)+t);},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"));},sendMessages:function(){var e,t=this,i="",n=encodeURIComponent;this.regionChanged&&(i=n("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?G.POST_MESSAGE_ENABLED?(e=i+n("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages();},this.messageSendingInterval)):this.sendingMessages=!1;},postMessage:function(e){U.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e);},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e));},processIDCallData:function(n){(null==this.url||n.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=n.subdomain||"",this.url=this.getUrl()),n.ibs instanceof Array&&n.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===i.readyState||"loaded"===i.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(n):this.requestToProcess(n),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(n);},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>G.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(i.body?t.attachIframe():setTimeout(e,30));}var t=this;e();}}},Y={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},disableThirdPartyCalls:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},overwriteCrossDomainMCIDAndAID:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},X={getConfigNames:function(){return Object.keys(Y)},getConfigs:function(){return Y}},W=function(e,t,i){function n(e){var t=e;return function(e){var i=e||c.location.href;try{var n=d._extractParamFromUri(i,t);if(n)return y.parsePipeDelimetedKeyValues(n)}catch(e){}}}function r(e){function t(e,t){e&&e.match(G.VALID_VISITOR_ID_REGEX)&&t(e);}t(e[m],d.setMarketingCloudVisitorID),d._setFieldExpire(I,-1),t(e[C],d.setAnalyticsVisitorID);}function s(e){e=e||{},d._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",d._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},d._supplementalDataIDLast=e.supplementalDataIDLast||"",d._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{};}function o(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e,i){var n=i[0],r=i[1];return null!=r&&r!==D&&(e=t(n,r,e)),e}var n=e.reduce(i,"");return function(e){var t=y.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(n)}function l(e){var t=e.minutesToLive,i="";return (d.idSyncDisableSyncs||d.disableIdSyncs)&&(i=i||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(i=i||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(i=i||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(i=i||"Error: config.minutesToLive needs to be a positive number")),{error:i,ttl:t}}if(!i||i.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var d=this;d.version="3.3.0";var c=a,u=c.Visitor;u.version=d.version,u.AuthState=_.AUTH_STATE,u.OptOut=_.OPT_OUT,c.s_c_in||(c.s_c_il=[],c.s_c_in=0),d._c="Visitor",d._il=c.s_c_il,d._in=c.s_c_in,d._il[d._in]=d,c.s_c_in++,d._instanceType="regular",d._log={requests:[]},d.marketingCloudOrgID=e,d.cookieName="AMCV_"+e,d.sessionCookieName="AMCVS_"+e,d.cookieDomain=N(),d.cookieDomain===c.location.hostname&&(d.cookieDomain=""),d.loadSSL=c.location.protocol.toLowerCase().indexOf("https")>=0,d.loadTimeout=3e4,d.CORSErrors=[],d.marketingCloudServer=d.audienceManagerServer="dpm.demdex.net",d.sdidParamExpiry=30;var f=c.document,g=null,m="MCMID",h="MCIDTS",p="A",C="MCAID",S="AAM",I="MCAAMB",D="NONE",A=function(e){return !Object.prototype[e]},M=B(d);d.FIELDS=_.FIELDS,d.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+f.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1);return i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n))},d.cookieWrite=function(e,t,i){var n,r=d.cookieLifetime,a="";if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r||0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var s=i.getYear();i.setYear(s+2+(s<1900?1900:0));}}else i=0;return e&&"NONE"!==r?(d.configs&&d.configs.secureCookie&&"https:"===location.protocol&&(a="Secure"),f.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(d.cookieDomain?" domain="+d.cookieDomain+";":"")+a,d.cookieRead(e)===t):0},d.resetState=function(e){e?d._mergeServerState(e):s();},d._isAllowedDone=!1,d._isAllowedFlag=!1,d.isAllowed=function(){return d._isAllowedDone||(d._isAllowedDone=!0,(d.cookieRead(d.cookieName)||d.cookieWrite(d.cookieName,"T",1))&&(d._isAllowedFlag=!0)),d._isAllowedFlag},d.setMarketingCloudVisitorID=function(e){d._setMarketingCloudFields(e);},d._use1stPartyMarketingCloudServer=!1,d.getMarketingCloudVisitorID=function(e,t){if(d.isAllowed()){d.marketingCloudServer&&d.marketingCloudServer.indexOf(".demdex.net")<0&&(d._use1stPartyMarketingCloudServer=!0);var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField(m,n,e,t,i)}return ""},d.getVisitorValues=function(e,t){var i={MCMID:{fn:d.getMarketingCloudVisitorID,args:[!0],context:d},MCOPTOUT:{fn:d.isOptedOut,args:[void 0,!0],context:d},MCAID:{fn:d.getAnalyticsVisitorID,args:[!0],context:d},MCAAMLH:{fn:d.getAudienceManagerLocationHint,args:[!0],context:d},MCAAMB:{fn:d.getAudienceManagerBlob,args:[!0],context:d}},n=t&&t.length?y.pluck(i,t):i;V(n,e);},d._currentCustomerIDs={},d._customerIDsHashChanged=!1,d._newCustomerIDsHash="",d.setCustomerIDs=function(e){function t(){d._customerIDsHashChanged=!1;}if(d.isAllowed()&&e){if(!v.isObject(e)||v.isObjectEmpty(e))return !1;d._readVisitor();var i,n;for(i in e)if(A(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),d._currentCustomerIDs[i]=r;}else d._currentCustomerIDs[i]={id:n};var a=d.getCustomerIDs(),s=d._getField("MCCIDH"),o="";s||(s=0);for(i in a)A(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));d._newCustomerIDsHash=String(d._hash(o)),d._newCustomerIDsHash!==s&&(d._customerIDsHashChanged=!0,d._mapCustomerIDs(t));}},d.getCustomerIDs=function(){d._readVisitor();var e,t,i={};for(e in d._currentCustomerIDs)A(e)&&(t=d._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=u.AuthState.UNKNOWN);return i},d.setAnalyticsVisitorID=function(e){d._setAnalyticsFields(e);},d.getAnalyticsVisitorID=function(e,t,i){if(!y.isTrackingServerPopulated()&&!i)return d._callCallback(e,[""]),"";if(d.isAllowed()){var n="";if(i||(n=d.getMarketingCloudVisitorID(function(t){d.getAnalyticsVisitorID(e,!0);})),n||i){var r=i?d.marketingCloudServer:d.trackingServer,a="";d.loadSSL&&(i?d.marketingCloudServerSecure&&(r=d.marketingCloudServerSecure):d.trackingServerSecure&&(r=d.trackingServerSecure));var s={};if(r){var o="http"+(d.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+d.version+"&mcorgid="+encodeURIComponent(d.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",d._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+d._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=c;}return s.url=a,d._getRemoteField(i?m:C,a,e,t,s)}}return ""},d.getAudienceManagerLocationHint=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0);})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0);})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._getRemoteField("MCAAMLH",r,e,t,n)}}}return ""},d.getLocationHint=d.getAudienceManagerLocationHint,d.getAudienceManagerBlob=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerBlob(e,!0);})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerBlob(e,!0);})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._customerIDsHashChanged&&d._setFieldExpire(I,-1),d._getRemoteField(I,r,e,t,n)}}}return ""},d._supplementalDataIDCurrent="",d._supplementalDataIDCurrentConsumed={},d._supplementalDataIDLast="",d._supplementalDataIDLastConsumed={},d.getSupplementalDataID=function(e,t){d._supplementalDataIDCurrent||t||(d._supplementalDataIDCurrent=d._generateID(1));var i=d._supplementalDataIDCurrent;return d._supplementalDataIDLast&&!d._supplementalDataIDLastConsumed[e]?(i=d._supplementalDataIDLast,d._supplementalDataIDLastConsumed[e]=!0):i&&(d._supplementalDataIDCurrentConsumed[e]&&(d._supplementalDataIDLast=d._supplementalDataIDCurrent,d._supplementalDataIDLastConsumed=d._supplementalDataIDCurrentConsumed,d._supplementalDataIDCurrent=i=t?"":d._generateID(1),d._supplementalDataIDCurrentConsumed={}),i&&(d._supplementalDataIDCurrentConsumed[e]=!0)),i},d.getOptOut=function(e,t){if(d.isAllowed()){var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField("MCOPTOUT",n,e,t,i)}return ""},d.isOptedOut=function(e,t,i){if(d.isAllowed()){t||(t=u.OptOut.GLOBAL);var n=d.getOptOut(function(i){var n=i===u.OptOut.GLOBAL||i.indexOf(t)>=0;d._callCallback(e,[n]);},i);return n?n===u.OptOut.GLOBAL||n.indexOf(t)>=0:null}return !1},d._fields=null,d._fieldsExpired=null,d._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},d._generateID=H,d._generateLocalMID=function(){var e=d._generateID(0);return T.isClientSideMarketingCloudVisitorID=!0,e},d._callbackList=null,d._callCallback=function(e,t){try{"function"==typeof e?e.apply(c,t):e[1].apply(e[0],t);}catch(e){}},d._registerCallback=function(e,t){t&&(null==d._callbackList&&(d._callbackList={}),void 0==d._callbackList[e]&&(d._callbackList[e]=[]),d._callbackList[e].push(t));},d._callAllCallbacks=function(e,t){if(null!=d._callbackList){var i=d._callbackList[e];if(i)for(;i.length>0;)d._callCallback(i.shift(),t);}},d._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=y.parseHash(e),s=y.hashlessUrl(e);if(-1===s.indexOf("?"))return s+"?"+r+a;var o=s.split("?"),l=o[0]+"?",d=o[1];return l+y.addQueryParamAtLocation(d,r,n)+a},d._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},d._parseAdobeMcFromUrl=n(G.ADOBE_MC),d._parseAdobeMcSdidFromUrl=n(G.ADOBE_MC_SDID),d._attemptToPopulateSdidFromUrl=function(t){var i=d._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=y.getTimestampInSeconds()-i.TS),i&&i.SDID&&i.MCORGID===e&&n<d.sdidParamExpiry&&(d._supplementalDataIDCurrent=i.SDID,d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0);},d._attemptToPopulateIdsFromUrl=function(){var t=d._parseAdobeMcFromUrl();if(t&&t.TS){var i=y.getTimestampInSeconds(),n=i-t.TS;if(Math.floor(n/60)>G.ADOBE_MC_TTL_IN_MIN||t.MCORGID!==e)return;r(t);}},d._mergeServerState=function(e){if(e)try{if(e=function(e){return y.isObject(e)?e:JSON.parse(e)}(e),e[d.marketingCloudOrgID]){var t=e[d.marketingCloudOrgID];!function(e){y.isObject(e)&&d.setCustomerIDs(e);}(t.customerIDs),s(t.sdid);}}catch(e){throw new Error("`serverState` has an invalid format.")}},d._timeout=null,d._loadData=function(e,t,i,n){t=d._addQuerystringParam(t,"d_fieldgroup",e,1),n.url=d._addQuerystringParam(n.url,"d_fieldgroup",e,1),n.corsUrl=d._addQuerystringParam(n.corsUrl,"d_fieldgroup",e,1),T.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===M.corsMetadata.corsType&&M.fireCORS(n,i,e);},d._clearTimeout=function(e){null!=d._timeout&&d._timeout[e]&&(clearTimeout(d._timeout[e]),d._timeout[e]=0);},d._settingsDigest=0,d._getSettingsDigest=function(){if(!d._settingsDigest){var e=d.version;d.audienceManagerServer&&(e+="|"+d.audienceManagerServer),d.audienceManagerServerSecure&&(e+="|"+d.audienceManagerServerSecure),d._settingsDigest=d._hash(e);}return d._settingsDigest},d._readVisitorDone=!1,d._readVisitor=function(){if(!d._readVisitorDone){d._readVisitorDone=!0;var e,t,i,n,r,a,s=d._getSettingsDigest(),o=!1,l=d.cookieRead(d.cookieName),c=new Date;if(null==d._fields&&(d._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&("MCCIDH"===i&&(n=""),r>0&&(r=c.getTime()/1e3-60)),i&&n&&(d._setField(i,n,1),r>0&&(d._fields["expire"+i]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!d.cookieRead(d.sessionCookieName))&&(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[i]=!0)));!d._getField(C)&&y.isTrackingServerPopulated()&&(l=d.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(G.VALID_VISITOR_ID_REGEX)&&d._setField(C,n)));}},d._appendVersionTo=function(e){var t="vVersion|"+d.version,i=e?d._getCookieVersion(e):null;return i?x.areVersionsDifferent(i,d.version)&&(e=e.replace(G.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},d._writeVisitor=function(){var e,t,i=d._getSettingsDigest()
;for(e in d._fields)A(e)&&d._fields[e]&&"expire"!==e.substring(0,6)&&(t=d._fields[e],i+=(i?"|":"")+e+(d._fields["expire"+e]?"-"+d._fields["expire"+e]:"")+"|"+t);i=d._appendVersionTo(i),d.cookieWrite(d.cookieName,i,1);},d._getField=function(e,t){return null==d._fields||!t&&d._fieldsExpired&&d._fieldsExpired[e]?null:d._fields[e]},d._setField=function(e,t,i){null==d._fields&&(d._fields={}),d._fields[e]=t,i||d._writeVisitor();},d._getFieldList=function(e,t){var i=d._getField(e,t);return i?i.split("*"):null},d._setFieldList=function(e,t,i){d._setField(e,t?t.join("*"):"",i);},d._getFieldMap=function(e,t){var i=d._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},d._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)A(n)&&(r.push(n),r.push(t[n]));}d._setFieldList(e,r,i);},d._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==d._fields&&(d._fields={}),d._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[e]=!0):d._fieldsExpired&&(d._fieldsExpired[e]=!1),i&&(d.cookieRead(d.sessionCookieName)||d.cookieWrite(d.sessionCookieName,"1"));},d._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=D),e&&(e===D||e.match(G.VALID_VISITOR_ID_REGEX))||(e="")),e},d._setFields=function(e,t){if(d._clearTimeout(e),null!=d._loading&&(d._loading[e]=!1),T.fieldGroupObj[e]&&T.setState(e,!1),"MC"===e){!0!==T.isClientSideMarketingCloudVisitorID&&(T.isClientSideMarketingCloudVisitorID=!1);var i=d._getField(m);if(!i||d.overwriteCrossDomainMCIDAndAID){if(!(i="object"==typeof t&&t.mid?t.mid:d._findVisitorID(t))){if(d._use1stPartyMarketingCloudServer&&!d.tried1stPartyMarketingCloudServer)return d.tried1stPartyMarketingCloudServer=!0,void d.getAnalyticsVisitorID(null,!1,!0);i=d._generateLocalMID();}d._setField(m,i);}i&&i!==D||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&d._setFields(S,t),d._use1stPartyMarketingCloudServer&&t.mid&&d._setFields(p,{id:t.id})),d._callAllCallbacks(m,[i]);}if(e===S&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=b.getRegionAndCheckIfChanged(t,n);d._callAllCallbacks("MCAAMLH",[r]);var a=d._getField(I);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),d._setFieldExpire(I,n),d._setField(I,a)),a||(a=""),d._callAllCallbacks(I,[a]),!t.error_msg&&d._newCustomerIDsHash&&d._setField("MCCIDH",d._newCustomerIDsHash);}if(e===p){var s=d._getField(C);s&&!d.overwriteCrossDomainMCIDAndAID||(s=d._findVisitorID(t),s?s!==D&&d._setFieldExpire(I,-1):s=D,d._setField(C,s)),s&&s!==D||(s=""),d._callAllCallbacks(C,[s]);}if(d.idSyncDisableSyncs||d.disableIdSyncs)b.idCallNotProcesssed=!0;else{b.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,b.processIDCallData(o);}if(t===Object(t)){var l,c;d.isAllowed()&&(l=d._getField("MCOPTOUT")),l||(l=D,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),c=parseInt(t.d_ottl,10),isNaN(c)&&(c=7200),d._setFieldExpire("MCOPTOUT",c,!0),d._setField("MCOPTOUT",l)),d._callAllCallbacks("MCOPTOUT",[l]);}},d._loading=null,d._getRemoteField=function(e,t,i,n,r){var a,s="",o=y.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(d.isAllowed()){d._readVisitor(),s=d._getField(e,!0===l[e]);if(function(){return (!s||d._fieldsExpired&&d._fieldsExpired[e])&&(!d.disableThirdPartyCalls||o)}()){if(e===m||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===I?a=S:e===C&&(a=p),a)return !t||null!=d._loading&&d._loading[a]||(null==d._loading&&(d._loading={}),d._loading[a]=!0,d._loadData(a,t,function(t){if(!d._getField(e)){t&&T.setState(a,!0);var i="";e===m?i=d._generateLocalMID():a===S&&(i={error_msg:"timeout"}),d._setFields(a,i);}},r)),d._registerCallback(e,i),s||(t||d._setFields(a,{id:D}),"")}else s||(e===m?(d._registerCallback(e,i),s=d._generateLocalMID(),d.setMarketingCloudVisitorID(s)):e===C?(d._registerCallback(e,i),s="",d.setAnalyticsVisitorID(s)):(s="",n=!0));}return e!==m&&e!==C||s!==D||(s="",n=!0),i&&n&&d._callCallback(i,[s]),s},d._setMarketingCloudFields=function(e){d._readVisitor(),d._setFields("MC",e);},d._mapCustomerIDs=function(e){d.getAudienceManagerBlob(e,!0);},d._setAnalyticsFields=function(e){d._readVisitor(),d._setFields(p,e);},d._setAudienceManagerFields=function(e){d._readVisitor(),d._setFields(S,e);},d._getAudienceManagerURLData=function(e){var t=d.audienceManagerServer,i="",n=d._getField(m),r=d._getField(I,!0),a=d._getField(C),s=a&&a!==D?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(d.loadSSL&&d.audienceManagerServerSecure&&(t=d.audienceManagerServerSecure),t){var o,l,c=d.getCustomerIDs();if(c)for(o in c)A(o)&&(l=c[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(d.loadSSL?"s":"")+"://"+t+"/id",f="d_visid_ver="+d.version+"&d_rtbd=json&d_ver=2"+(!n&&d._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(d.marketingCloudOrgID)+"&d_nsid="+(d.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===g?"&d_coop_safe=1":!1===g?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,_=["s_c_il",d._in,e];return i=u+"?"+f+"&d_cb=s_c_il%5B"+d._in+"%5D."+e,{url:i,corsUrl:u+"?"+f,callback:_}}return {url:i}},d.appendVisitorIDsTo=function(e){try{var t=[[m,d._getField(m)],[C,d._getField(C)],["MCORGID",d.marketingCloudOrgID]];return d._addQuerystringParam(e,G.ADOBE_MC,o(t))}catch(t){return e}},d.appendSupplementalDataIDTo=function(e,t){if(!(t=t||d.getSupplementalDataID(y.generateRandomString(),!0)))return e;try{var i=o([["SDID",t],["MCORGID",d.marketingCloudOrgID]]);return d._addQuerystringParam(e,G.ADOBE_MC_SDID,i)}catch(t){return e}};var y={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==C)return !1;var n;return t||(t=d.trackingServer),i||(i=d.trackingServerSecure),!("string"!=typeof(n=d.loadSSL?i:t)||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(d.cookieDomain?" domain="+d.cookieDomain+";":"");},isTrackingServerPopulated:function(){return !!d.trackingServer||!!d.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return "true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};d._helpers=y;var b=q(d,u);d._destinationPublishing=b,d.timeoutMetricsLog=[];var T={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case p:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case S:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t;}}};d.isClientSideMarketingCloudVisitorID=function(){return T.isClientSideMarketingCloudVisitorID},d.MCIDCallTimedOut=function(){return T.MCIDCallTimedOut},d.AnalyticsIDCallTimedOut=function(){return T.AnalyticsIDCallTimedOut},d.AAMIDCallTimedOut=function(){return T.AAMIDCallTimedOut},d.idSyncGetOnPageSyncInfo=function(){return d._readVisitor(),d._getField("MCSYNCSOP")},d.idSyncByURL=function(e){var t=l(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=b;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=v.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},d.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,d.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},d.publishDestinations=function(e,t,i){if(i="function"==typeof i?i:function(){},"string"!=typeof e||!e.length)return void i({error:"subdomain is not a populated string."});if(!(t instanceof Array&&t.length))return void i({error:"messages is not a populated array."});var n=b;if(!n.readyToAttachIframePreliminary())return void i({error:"The destination publishing iframe is disabled in the Visitor library."});var r=!1;if(t.forEach(function(e){"string"==typeof e&&e.length&&(n.addMessage(e),r=!0);}),!r)return void i({error:"None of the messages are populated strings."});n.iframe?(i({message:"The destination publishing iframe is already attached and loaded."}),n.requestToProcess()):!d.subdomain&&d._getField(m)?(n.subdomain=e,n.doAttachIframe=!0,n.url=n.getUrl(),n.readyToAttachIframe()?(n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")});}),n.attachIframe()):i({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")});});},d._getCookieVersion=function(e){e=e||d.cookieRead(d.cookieName);var t=G.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},d._resetAmcvCookie=function(e){var t=d._getCookieVersion();t&&!x.isLessThan(t,e)||y.removeCookie(d.cookieName);},d.setAsCoopSafe=function(){g=!0;},d.setAsCoopUnsafe=function(){g=!1;},d.init=function(){!function(){if(t&&"object"==typeof t){d.configs=Object.create(null);for(var e in t)A(e)&&(d[e]=t[e],d.configs[e]=t[e]);d.idSyncContainerID=d.idSyncContainerID||0,g="boolean"==typeof d.isCoopSafe?d.isCoopSafe:y.parseBoolean(d.isCoopSafe),d.resetBeforeVersion&&d._resetAmcvCookie(d.resetBeforeVersion),d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl(),d._readVisitor();var i=d._getField(h),n=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);d.idSyncDisableSyncs||d.disableIdSyncs||!b.canMakeSyncIDCall(i,n)||(d._setFieldExpire(I,-1),d._setField(h,n)),d.getMarketingCloudVisitorID(),d.getAudienceManagerLocationHint(),d.getAudienceManagerBlob(),d._mergeServerState(d.serverState);}else d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl();}(),function(){if(!d.idSyncDisableSyncs&&!d.disableIdSyncs){b.checkDPIframeSrc();var e=function(){var e=b;e.readyToAttachIframe()&&e.attachIframe();};c.addEventListener("load",function(){u.windowLoaded=!0,e();});try{U.receiveMessage(function(e){b.receiveMessage(e.data);},b.iframeHost);}catch(e){}}}(),function(){d.whitelistIframeDomains&&G.POST_MESSAGE_ENABLED&&(d.whitelistIframeDomains=d.whitelistIframeDomains instanceof Array?d.whitelistIframeDomains:[d.whitelistIframeDomains],d.whitelistIframeDomains.forEach(function(t){var i=new k(e,t),n=w(d,i);U.receiveMessage(n,t);}));}();};};return W.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var i=function(){var t=a.s_c_il;if(t)for(var i=0;i<t.length;i++){var n=t[i];if(n&&"Visitor"===n._c&&n.marketingCloudOrgID===e)return n}}();if(i)return i;var n=e,r=n.split("").reverse().join(""),s=new W(e,null,r);t===Object(t)&&t.cookieDomain&&(s.cookieDomain=t.cookieDomain),function(){a.s_c_il.splice(--a.s_c_in,1);}();var o=v.getIeVersion();if("number"==typeof o&&o<10)return s._helpers.replaceMethodsWithFunction(s,function(){});var l=function(){try{return a.self!==a.parent}catch(e){return !0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(s)&&a.parent?new E(e,t,s,a.parent):new W(e,t,r);return s=null,l.init(),l},function(){function e(){W.windowLoaded=!0;}a.addEventListener?a.addEventListener("load",e):a.attachEvent&&a.attachEvent("onload",e),W.codeLoadEnd=(new Date).getTime();}(),W.config=X,a.Visitor=W,W}();window.AppMeasurement = window.AppMeasurement || AppMeasurement$1;
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.10.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement$1(r){var a=this;a.version="2.10.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Nb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent;}catch(u){}a.D=function(a){try{console.log(a);}catch(b){}};a.Ha=function(a){return ""+parseInt(a)==""+a};a.replace=function(a,b,d){return !a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.ub=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.za&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.za=0<d?c.substring(d):c;}return a.za};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return "[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.ub(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.rb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.gb(a,function(){}));};a.gb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b);};
a.L=[];a.ba=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ca)for(a.ca=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ca=0,a.delayReady());});f=1;e=0;}else d||a.o("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ca||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.ra();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0;}};a.setAccount=a.sa=function(c){var b,d;if(!a.ba("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",");};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.ga.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Lb,f=a[e].Kb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,");}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g);};a.q=function(c,
b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ha(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)));}g+="&"+a.escape(h)+"="+a.escape(l);}}""!=g&&(g+="&."+c);}return g};a.usePostbacks=0;a.xb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.ga.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Lb,m=a[e].Kb));q&&(q=","+q+","+a.G.join(",")+",");m&&(m=","+m+",",q&&(q+=",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2);}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",
e));}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],q,e));g="";break;default:a.Ha(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)));}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g));}"pev3"==e&&a.e&&(c+=a.e);}a.fa&&(c+="&lrt="+a.fa,a.fa=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.Qb||"undefined"!=""+a.Gb&&"HTML"!=(""+a.Gb).toUpperCase())return "";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Ob=function(c){for(var b=a.C(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Fb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.ha=1;d||(a.ha=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0;}}else a.ha=1;!e&&d&&(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Ga(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e");}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")));};a.yb=function(){var c=a.ha,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Bb()){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");
a.e=a.q("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+
a.escape(l),h--);a.cookieWrite("s_sq",e);}}}return c};a.zb=function(){if(!a.Jb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))));}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Pb(b)?"Y":"N";}catch(s){}try{a.b.addBehavior("#default#clientCaps"),p=a.b.connectionType;}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Jb=1;}};a.Q={};a.loadModule=function(c,
b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.ab=function(){return d.fb};d.hb=function(b){if(d.fb=b)a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d);};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.ab,set:d.hb}):d._olc=1;}catch(f){d._olc=1;}}b&&(a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d));};a.o=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&
d[c]()))return 1;return 0};a.Bb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c;}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.va:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&
("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h;}};a.Ra=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.va:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1);};a.tb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),
b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m="";}d=253-(l.length-m.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l;}return a};a.Va=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);
if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c();});return !1}return !0};a.X=!1;a.J=!1;a.jb=function(){a.J=!0;a.H();};a.Y=!1;a.S=!1;a.kb=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.S=!0;a.H();};a.Ua=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&
setTimeout(function(){c();},a.maxDelay),!1):!0};a.W=!1;a.I=!1;a.ra=function(){a.I=!0;a.H();};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.X||a.J||(a.Va(a.jb)?a.J=!0:a.X=!0);if(a.X&&!a.J)return !1;b&&b.isAllowed()&&(a.Y||a.marketingCloudVisitorID||!b.getVisitorValues||(a.Y=!0,a.marketingCloudVisitorID?a.S=!0:b.getVisitorValues(a.kb)),c=!a.Y||a.S||a.marketingCloudVisitorID?!0:!1);a.W||a.I||(a.Ua(a.ra)?a.I=!0:a.W=!0);a.W&&!a.I&&(c=!1);return c};a.l=p;a.r=0;a.callbackWhenReadyToTrack=function(c,b,
d){var f;f={};f.ob=c;f.nb=b;f.lb=d;a.l==p&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100));};a.H=function(){var c;if(a.isReadyToTrack()&&(a.ib(),a.l!=p))for(;0<a.l.length;)c=a.l.shift(),c.nb.apply(c.ob,c.lb);};a.ib=function(){a.r&&(clearInterval(a.r),a.r=0);};a.cb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f={},c)f[d]=c[d];e={};a.Ra(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return !0}return !1};a.vb=function(){var c=a.cookieRead("s_fid"),b=
"",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d;}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+
" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.o("_s");a.cb(c)||(b&&a.R(b),c&&(d={},a.Ra(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.pa()||(a.fid=a.vb()),a.Fb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Sa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=
f||void 0===f?void 0===f?"":f:n.document.referrer),a.Sa=1,a.referrer=a.tb(a.referrer),a.o("_g")),a.yb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.zb(),g+=a.xb(),a.eb(e,g),a.o("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=
a.pev3=a.e=a.lightProfileID=0;};a.ua=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ua.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback");};a.Ya=function(c){a.oa(a.ua,c);};a.ta=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ta.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPostTrackCallback");};
a.Xa=function(c){a.oa(a.ta,c);};a.oa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e);}catch(g){a.debugTracking&&a.D(g.message);}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<
a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0;};a.tagContainerMarker="";a.eb=function(c,b){var d=a.Za()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.qa()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.Ya(d);a.Wa(d);a.T();};a.Za=function(){var c=a.$a();return "http"+
(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.qa()?"10":"1")+"/JS-"+a.version+(a.Ib?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.qa=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.$a=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.bb()+"."+c+".2o7.net");return b};a.bb=function(){var c=a.visitorNamespace;
c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Qa=/{(%?)(.*?)(%?)}/;a.Mb=RegExp(a.Qa.source,"g");a.sb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Mb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Qa),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.wb());d.c=d.c.replace(g,a.escape(k));}}};a.wb=function(){var c=
new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return (Array(a+1).join(0)+b).slice(-a)};a.la={};a.doPostbacks=function(c){if("object"==typeof c)if(a.sb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&
a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.la[d.id]=new Image,a.la[d.id].alt="",a.la[d.id].src=d.c);}};a.Wa=function(c){a.i||a.Ab();a.i.push(c);a.ea=a.B();a.Oa();};a.Ab=function(){a.i=a.Db();a.i||(a.i=[]);};a.Db=function(){var c,b;if(a.ka()){try{(b=
k.localStorage.getItem(a.ia()))&&(c=k.JSON.parse(b));}catch(d){}return c}};a.ka=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;return c};a.T=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.na(),a.p))return;a.Fa=p;if(a.ja)a.ea>a.O&&a.Ma(a.i),a.ma(500);else{var c=a.mb();if(0<c)a.ma(c);else if(c=a.Ba())a.p=1,a.Eb(c),a.Hb(c);}};a.ma=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.T,c));};a.mb=function(){var c;
if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b);}};a.pa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.V=!1;var t;try{t=JSON.parse('{"x":"y"}');}catch(w){t=null;}t&&"y"==t.x?(a.V=!0,a.U=function(a){return JSON.parse(a)}):
k.$&&k.$.parseJSON?(a.U=function(a){return k.$.parseJSON(a)},a.V=!0):a.U=function(){return null};a.Hb=function(c){var b,d,f;a.pa()&&2047<c.length&&(a.Ta()&&(d=1,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.V?b.wa=!0:b=0));!b&&a.Pa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=2):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=p;}));b.La=Date.now();b.ya=function(){try{b.F&&(clearTimeout(b.F),b.F=0);}catch(a){}};b.onload=b.na=function(){b.La&&(a.fa=Date.now()-b.La);a.Xa(c);b.ya();a.qb();a.Z();a.p=0;a.T();if(b.wa){b.wa=!1;try{a.doPostbacks(a.U(b.responseText));}catch(d){}}};b.onabort=b.onerror=b.Ca=function(){b.ya();(a.trackOffline||a.ja)&&a.p&&
a.i.unshift(a.pb);a.p=0;a.ea>a.O&&a.Ma(a.i);a.Z();a.ma(500);};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.na():b.Ca());};a.Ka=a.B();if(1==d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,2==d){if(a.Ia)try{f.removeChild(a.Ia);}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.A;}b.F=setTimeout(function(){b.F&&(b.complete?b.na():(a.trackOffline&&
b.abort&&b.abort(),b.Ca()));},5E3);a.pb=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.aa=setTimeout(a.Z,a.forcedLinkTrackingTimeout);};a.Ta=function(){return "undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.qb=function(){if(a.ka()&&!(a.Ja>a.O))try{k.localStorage.removeItem(a.ia()),a.Ja=a.B();}catch(c){}};a.Ma=function(c){if(a.ka()){a.Oa();try{k.localStorage.setItem(a.ia(),
k.JSON.stringify(c)),a.O=a.B();}catch(b){}}};a.Oa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ba();}};a.forceOffline=function(){a.ja=!0;};a.forceOnline=function(){a.ja=!1;};a.ia=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.B=function(){return (new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:
!1};a.setTagContainer=function(c){var b,d,f;a.Ib=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=
0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);
0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.ga.slice(0);a.va="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Ka=0;a.ea=0;a.O=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Pa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Pa=!0;}}catch(x){}a.Z=function(){a.aa&&(k.clearTimeout(a.aa),a.aa=p);a.k&&a.K&&a.k.dispatchEvent(a.K);a.v&&("function"==typeof a.v?a.v():
a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.K=a.v=0;};a.Na=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.xa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.xa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.da&&(clearTimeout(a.da),a.da=0);a.da=setTimeout(function(){a.N==h&&(a.N=0);},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents");}catch(l){b=
new k.MouseEvent;}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget);}catch(m){b=0;}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.K=b);}}}}}catch(n){a.clickObject=0;}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.xa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Na,30);};a.rb();a.Rb||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Na(),a.loadModule("ActivityMap"));}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++;}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement$1(r);return a}AppMeasurement$1.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0;}s_pgicq();

    var name$1 = 'Adobe',
        ADOBEMODULENUMBER = 124,
        MARKETINGCLOUDIDKEY = 'mid',
        MessageType$1 = {
            SessionStart: 1,
            SessionEnd: 2,
            PageView: 3,
            PageEvent: 4,
            CrashReport: 5,
            OptOut: 6,
            Commerce: 16,
            Media: 20
        };

    var constructor$1 = function () {
        var self = this,
        //one or more instances of AppMeasurement returned from s_gi()
            appMeasurement,
            settings,
            timestampOption,
            isInitialized = false,
            reportingService,
            contextVariableMapping,
            productIncrementorMapping,
            productMerchandisingMapping,
            propsMapping,
            eVarsMapping,
            hiersMapping,
            eventsMapping;
        
        self.adobeMediaSDK = new src_1(),
        self.name = name$1;

        function initForwarder(forwarderSettings, service, testMode) {
            settings = forwarderSettings;
            reportingService = service;
            try {
                loadMappings();
                timestampOption = (settings.timestampOption === 'optional' || settings.timestampOption === 'required');
                finishAdobeInitialization();
                if (settings.mediaTrackingServer) {
                    self.adobeMediaSDK.init(forwarderSettings, service, testMode);
                }
                isInitialized = true;

                return 'ClientSDK successfully loaded';
            } catch (e) {
                return 'Failed to initialize: ' + e;
            }
        }

        function loadMappings() {
            eVarsMapping = settings.evars ? JSON.parse(settings.evars.replace(/&quot;/g, '"')) : [];
            propsMapping = settings.props ? JSON.parse(settings.props.replace(/&quot;/g, '"')) : [];
            productIncrementorMapping = settings.productIncrementor ? JSON.parse(settings.productIncrementor.replace(/&quot;/g, '"')) : [];
            productMerchandisingMapping = settings.productMerchandising ? JSON.parse(settings.productMerchandising.replace(/&quot;/g, '"')) : [];
            hiersMapping = settings.hvars ? JSON.parse(settings.hvars.replace(/&quot;/g, '"')) : [];
            eventsMapping = settings.events ? JSON.parse(settings.events.replace(/&quot;/g, '"')) : [];
            contextVariableMapping = settings.contextVariables ? JSON.parse(settings.contextVariables.replace(/&quot;/g, '"')) : [];
        }

        function finishAdobeInitialization() {
            try {
                appMeasurement=s_gi(settings.reportSuiteIDs);
                if (settings.setGlobalObject === 'True') {
                    window.s = appMeasurement;
                }
                appMeasurement.visitor = Visitor.getInstance(settings.organizationID);

                appMeasurement.trackingServer = settings.trackingServer;
                appMeasurement.trackingServerSecure = settings.trackingServerURLSecure;
                appMeasurement.trackDownloadLinks = true;
                appMeasurement.trackExternalLinks = settings.trackExternalLinks === 'True';
                appMeasurement.trackInlineStats = true;
                appMeasurement.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                appMeasurement.linkInternalFilters = 'javascript:';
                appMeasurement.linkLeaveQueryString = false;
                appMeasurement.linkTrackVars = 'None';
                appMeasurement.linkTrackEvents = 'None';
                appMeasurement.visitorNamespace = '';

                // On first load, adobe will call the callback correctly if no MCID exists
                // On subsequent loads, it does not, so we need to manually call setMCIDOnIntegrationAttributes
                var mcID = Visitor.getInstance(settings.organizationID).getMarketingCloudVisitorID(setMarketingCloudId);
                if (mcID && mcID.length > 0) {
                    setMCIDOnIntegrationAttributes(mcID);
                }

                return true;
            } catch(e) {
                return 'error initializing adobe: ' + e;
            }
        }

        function setMarketingCloudId(mcid) {
            setMCIDOnIntegrationAttributes(mcid);
        }

        function setMCIDOnIntegrationAttributes(mcid) {
            var adobeIntegrationAttributes = {};
            adobeIntegrationAttributes[MARKETINGCLOUDIDKEY] = mcid;
            mParticle.setIntegrationAttribute(ADOBEMODULENUMBER, adobeIntegrationAttributes);
            mParticle._setIntegrationDelay(ADOBEMODULENUMBER, false);
        }

        // Get the mapped value for custom events
        function getEventMappingValue(event) {
            var jsHash = calculateJSHash(event.EventDataType, event.EventCategory, event.EventName);
            return findValueInMapping(jsHash, eventsMapping);
        }

        function calculateJSHash(eventDataType, eventCategory, name) {
            var preHash =
                ('' + eventDataType) +
                ('' + eventCategory) + '' +
                (name || '');

            return mParticle.generateHash(preHash);
        }

        function findValueInMapping(jsHash, mapping) {
            if (mapping) {
                var filteredArray = mapping.filter(function(mappingEntry) {
                    if (mappingEntry.jsmap && mappingEntry.maptype && mappingEntry.value) {
                        return mappingEntry.jsmap === jsHash.toString();
                    }

                    return {
                        result: false
                    };
                });

                if (filteredArray && filteredArray.length > 0) {
                    return {
                        result: true,
                        matches: filteredArray
                    };
                }
            }
            return null;
        }

        // for each type of event, we run setMappings which sets the eVars, props, hvars, and contextData values
        // after each event is sent to the server (either using t() for pageViews or tl() for non-pageview events), clearVars() is run to wipe out
        // any eVars, props, and hvars
        function processEvent(event) {
            var reportEvent = false;
            var linkTrackVars = [];
            appMeasurement.timestamp = timestampOption ? Math.floor((new Date).getTime()/1000) : null;
            appMeasurement.events = '';

            if (isInitialized) {
                try {
                    // First determine if an eventName is mapped, if so, log it as an event as opposed to a pageview or commerceview
                    // ex. If a pageview is mapped to an event, we logEvent instead of logging it as a pageview
                    var eventMapping = getEventMappingValue(event);

                    if (eventMapping && eventMapping.result && eventMapping.matches) {
                        setMappings(event, true, linkTrackVars);
                        reportEvent = logEvent(event, linkTrackVars, eventMapping.matches);
                    }
                    else if (event.EventDataType === MessageType$1.PageView) {
                        setMappings(event, false);
                        reportEvent = logPageView(event);
                    }
                    else if (event.EventDataType === MessageType$1.Commerce) {
                        setMappings(event, true, linkTrackVars);
                        reportEvent = processCommerceTransaction(event, linkTrackVars);
                    }
                    else if (event.EventDataType === MessageType$1.Media) {
                        self.adobeMediaSDK.process(event);
                    }
                    else {
                        return 'event name not mapped, aborting event logging';
                    }

                    if (reportEvent === true && reportingService && event.EventDataType) {
                        reportingService(self, event);
                        return 'Successfully sent to ' + name$1;
                    }
                    else {
                        return 'Error logging event or event type not supported - ' + reportEvent.error;
                    }
                }
                catch (e) {
                    return 'Failed to send to: ' + name$1 + ' ' + e;
                }
            }

            return 'Can\'t send to forwarder ' + name$1 + ', not initialized.';
        }

        function setMappings(event, includeTrackVars, linkTrackVars) {
            if (includeTrackVars) {
                setEvars(event, linkTrackVars);
                setProps(event, linkTrackVars);
                setHiers(event, linkTrackVars);
                setContextData(event, linkTrackVars);
            } else {
                setEvars(event);
                setProps(event);
                setHiers(event);
                setContextData(event);
            }
        }

        function processCommerceTransaction(event, linkTrackVars) {
            if (event.EventCategory === mParticle.CommerceEventType.ProductPurchase) {
                appMeasurement.events='purchase';
                appMeasurement.purchaseID = event.ProductAction.TransactionId;
                appMeasurement.transactionID = event.ProductAction.TransactionId;
                linkTrackVars.push('purchaseID', 'transactionID');
            } else if (event.EventCategory === mParticle.CommerceEventType.ProductViewDetail) {
                appMeasurement.events='prodView';
            } else if (event.EventCategory === mParticle.CommerceEventType.ProductAddToCart) {
                appMeasurement.events='scAdd';
            } else if (event.EventCategory === mParticle.CommerceEventType.ProductRemoveFromCart) {
                appMeasurement.events='scRemove';
            } else if (event.EventCategory === mParticle.CommerceEventType.ProductCheckout) {
                appMeasurement.events='scCheckout';
            }
            appMeasurement.linkTrackEvents = appMeasurement.events || null;
            processProductsAndSetEvents(event);
            appMeasurement.pageName = event.EventName || window.document.title;
            linkTrackVars.push('products', 'events');
            setPageName(linkTrackVars);
            appMeasurement.linkTrackVars = linkTrackVars;
            appMeasurement.tl(true, 'o', event.EventName);

            appMeasurement.clearVars();

            return true;
        }

        function processProductsAndSetEvents(event) {
            try {
                var productDetails,
                    incrementor,
                    merchandising,
                    productBuilder,
                    product,
                    allProducts = [];

                var expandedEvents = mParticle.eCommerce.expandCommerceEvent(event);
                expandedEvents.forEach(function(expandedEvt) {
                    productBuilder = [];
                    productDetails = [];
                    incrementor = [];
                    merchandising = [];

                    if (expandedEvt.EventName === 'eCommerce - purchase - Total') {
                        for (var eventAttributeKey in expandedEvt.EventAttributes) {
                            if (expandedEvt.EventAttributes.hasOwnProperty(eventAttributeKey)) {
                                var jsHash = calculateJSHash(event.EventDataType, event.EventCategory, eventAttributeKey);
                                var mapping = findValueInMapping(jsHash, eventsMapping);
                                if (mapping && mapping.result && mapping.matches) {
                                    mapping.matches.forEach(function(mapping) {
                                        if (mapping.value) {
                                            if (appMeasurement.events.indexOf(mapping.value) < 0) {
                                                appMeasurement.events += ',' + mapping.value + '=' + expandedEvt.EventAttributes[eventAttributeKey];
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    } else {
                        var productAttributes = expandedEvt.EventAttributes;
                        productDetails.push(productAttributes.Category || '', productAttributes.Name, productAttributes.Id, productAttributes.Quantity || 1, productAttributes['Item Price'] || 0);
                        for (var productAttributeKey in expandedEvt.EventAttributes) {
                            if (expandedEvt.EventAttributes.hasOwnProperty(productAttributeKey)) {
                                productIncrementorMapping.forEach(function(productIncrementorMap) {
                                    if (productIncrementorMap.map === productAttributeKey) {
                                        incrementor.push(productIncrementorMap.value + '='+ productAttributes[productAttributeKey]);
                                        if (appMeasurement.events.indexOf(productIncrementorMap.value) < 0) {
                                            appMeasurement.events += ',' + productIncrementorMap.value;
                                        }
                                    }
                                });
                                productMerchandisingMapping.forEach(function(productMerchandisingMap) {
                                    if (productMerchandisingMap.map === productAttributeKey) {
                                        merchandising.push(productMerchandisingMap.value + '='+ productAttributes[productAttributeKey]);
                                    }
                                });
                            }
                        }
                        productBuilder.push(productDetails.join(';'), incrementor.join('|'), merchandising.join('|'));
                        product = productBuilder.join(';');
                        allProducts.push(product);
                    }
                });

                appMeasurement.products = allProducts.join(',');
            } catch (e) {
                window.console.log(e);
            }

        }

        function logPageView(event) {
            try {
                appMeasurement.pageName = event.EventName || undefined;
                appMeasurement.t();
                appMeasurement.clearVars();
                return true;
            }
            catch (e) {
                appMeasurement.clearVars();
                return {error: 'logPageView not called, error ' + e};
            }
        }

        function logEvent(event, linkTrackVars, mappingMatches) {
            try {
                if (mappingMatches) {
                    mappingMatches.forEach(function(match) {
                        if (appMeasurement.events.length === 0) {
                            appMeasurement.events += match.value;
                        } else {
                            appMeasurement.events += ',' + match.value;
                        }
                    });
                    appMeasurement.linkTrackEvents = appMeasurement.events;
                    appMeasurement.pageName = event.EventName || window.document.title;
                    linkTrackVars.push('events');
                    setPageName(linkTrackVars);

                    appMeasurement.linkTrackVars = linkTrackVars;
                    appMeasurement.tl(true, 'o', event.EventName);
                    appMeasurement.clearVars();
                    return true;
                } else {
                    appMeasurement.clearVars();
                    window.console.log('event name not mapped, aborting event logging');
                }
            }
            catch (e) {
                appMeasurement.clearVars();
                return {error: e};
            }
        }

        // .map is the attribute passed through, .value is the eVar value
        function setEvars(event, linkTrackVars) {
            var eventAttributes = event.EventAttributes;
            for (var eventAttributeKey in eventAttributes) {
                if (eventAttributes.hasOwnProperty(eventAttributeKey)) {
                    eVarsMapping.forEach(function(eVarMap) {
                        if (eVarMap.map === eventAttributeKey) {
                            appMeasurement[eVarMap.value] = eventAttributes[eventAttributeKey];
                            if (linkTrackVars) {
                                linkTrackVars.push(eVarMap.value);
                            }
                        }
                        if (event.EventName === eVarMap.map) {
                            appMeasurement[eVarMap.value] = event.EventName;
                        }
                    });
                }
            }
        }

        // .map is the attribute passed through, .value is the prop value
        function setProps(event, linkTrackVars) {
            var eventAttributes = event.EventAttributes;
            for (var eventAttributeKey in eventAttributes) {
                if (eventAttributes.hasOwnProperty(eventAttributeKey)) {
                    propsMapping.forEach(function(propMap) {
                        if (propMap.map === eventAttributeKey) {
                            appMeasurement[propMap.value] = eventAttributes[eventAttributeKey];
                            if (linkTrackVars) {
                                linkTrackVars.push(propMap.value);
                            }
                        }
                    });
                }
            }
        }

        // .map is the attribute passed through, .value is the hier value
        function setHiers(event, linkTrackVars) {
            var eventAttributes = event.EventAttributes;
            for (var eventAttributeKey in eventAttributes) {
                if (eventAttributes.hasOwnProperty(eventAttributeKey)) {
                    var jsHash = calculateJSHash(event.EventDataType, event.EventCategory, eventAttributeKey);
                    var mapping = findValueInMapping(jsHash, hiersMapping);
                    if (mapping && mapping.result && mapping.matches) {
                        mapping.matches.forEach(function(mapping) {
                            if (mapping.value) {
                                appMeasurement[mapping.value] = eventAttributes[eventAttributeKey];
                                if (linkTrackVars) {
                                    linkTrackVars.push(mapping.value);
                                }
                            }
                        });
                    }
                }
            }
        }

        // .map is the attribute passed through, .value is the contextData value
        function setContextData(event, linkTrackVars) {
            var eventAttributes = event.EventAttributes;
            for (var eventAttributeKey in eventAttributes) {
                if (eventAttributes.hasOwnProperty(eventAttributeKey)) {
                    contextVariableMapping.forEach(function(contextVariableMap) {
                        if (contextVariableMap.map === eventAttributeKey) {
                            appMeasurement.contextData[contextVariableMap.value] = eventAttributes[eventAttributeKey];
                            if (linkTrackVars) {
                                linkTrackVars.push('contextData.' + contextVariableMap.value);
                            }
                        }
                    });
                }
            }
        }

        function onUserIdentified(mpUserObject) {
            if (isInitialized) {
                var userIdentities = mpUserObject.getUserIdentities().userIdentities;

                var identitiesToSet = {};
                if (Object.keys(userIdentities).length) {
                    for (var identity in userIdentities) {
                        identitiesToSet[identity] = {
                            id: userIdentities[identity]
                        };
                    }
                } else {
                    // no user identities means there was a logout, so set all current customer ids to null
                    var currentAdobeCustomerIds = appMeasurement.visitor.getCustomerIDs();
                    for (var currentIdentityKey in currentAdobeCustomerIds) {
                        identitiesToSet[currentIdentityKey] = null;
                    }
                }

                try {
                    appMeasurement.visitor.setCustomerIDs(identitiesToSet);
                } catch (e) {
                    return 'Error calling setCustomerIDs on adobe';
                }
            }
            else {
                return 'Can\'t call setUserIdentity on forwarder ' + name$1 + ', not initialized';
            }
        }

        function setPageName(linkTrackVars) {
            if (settings.enablePageName === 'True') {
                linkTrackVars.push('pageName');
            }
        }

        this.init = initForwarder;
        this.onUserIdentified = onUserIdentified;
        this.process = processEvent;
    };

    function getId() {
        return moduleId;
    }

    if (window && window.mParticle && window.mParticle.addForwarder) {
        window.mParticle.addForwarder({
            name: name$1,
            constructor: constructor$1,
            getId: getId
        });
    }

    function register(config) {
        if (!config) {
            window.console.log('You must pass a config object to register the kit ' + name$1);
            return;
        }

        if (!isObject(config)) {
            window.console.log('\'config\' must be an object. You passed in a ' + typeof config);
            return;
        }

        if (isObject(config.kits)) {
            config.kits[name$1] = {
                constructor: constructor$1
            };
        } else {
            config.kits = {};
            config.kits[name$1] = {
                constructor: constructor$1
            };
        }
        window.console.log('Successfully registered ' + name$1 + ' to your mParticle configuration');
    }

    function isObject(val) {
        return val != null && typeof val === 'object' && Array.isArray(val) === false;
    }

    var AdobeClientSideKit_esm = {
        register: register
    };

module.exports = AdobeClientSideKit_esm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@mparticle/web-sdk/dist/mparticle.esm.js
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

// Base64 encoder/decoder - http://www.webtoolkit.info/javascript_base64.html
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",// Input must be a string
encode:function(a){try{if(window.btoa&&window.atob)return window.btoa(unescape(encodeURIComponent(a)))}catch(a){window.console.log("Error encoding cookie values into Base64:"+a);}return this._encode(a)},_encode:function(a){var b,c,d,e,f,g,h,j="",k=0;for(a=UTF8.encode(a);k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),d=a.charCodeAt(k++),e=b>>2,f=(3&b)<<4|c>>4,g=(15&c)<<2|d>>6,h=63&d,isNaN(c)?g=h=64:isNaN(d)&&(h=64),j=j+Base64._keyStr.charAt(e)+Base64._keyStr.charAt(f)+Base64._keyStr.charAt(g)+Base64._keyStr.charAt(h);return j},decode:function(a){try{if(window.btoa&&window.atob)return decodeURIComponent(escape(window.atob(a)))}catch(a){//log(e);
}return Base64._decode(a)},_decode:function(a){var b,c,d,e,f,g,h,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)e=Base64._keyStr.indexOf(a.charAt(k++)),f=Base64._keyStr.indexOf(a.charAt(k++)),g=Base64._keyStr.indexOf(a.charAt(k++)),h=Base64._keyStr.indexOf(a.charAt(k++)),b=e<<2|f>>4,c=(15&f)<<4|g>>2,d=(3&g)<<6|h,j+=String.fromCharCode(b),64!==g&&(j+=String.fromCharCode(c)),64!==h&&(j+=String.fromCharCode(d));return j=UTF8.decode(j),j}},UTF8={encode:function(a){for(var b,d="",e=0;e<a.length;e++)b=a.charCodeAt(e),128>b?d+=String.fromCharCode(b):127<b&&2048>b?(d+=String.fromCharCode(192|b>>6),d+=String.fromCharCode(128|63&b)):(d+=String.fromCharCode(224|b>>12),d+=String.fromCharCode(128|63&b>>6),d+=String.fromCharCode(128|63&b));return d},decode:function(a){for(var b="",d=0,e=0,f=0,g=0;d<a.length;)e=a.charCodeAt(d),128>e?(b+=String.fromCharCode(e),d++):191<e&&224>e?(f=a.charCodeAt(d+1),b+=String.fromCharCode((31&e)<<6|63&f),d+=2):(f=a.charCodeAt(d+1),g=a.charCodeAt(d+2),b+=String.fromCharCode((15&e)<<12|(63&f)<<6|63&g),d+=3);return b}};var Polyfill = {// forEach polyfill
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
forEach:function forEach(a,b){var c,d;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(1<arguments.length&&(c=b),d=0;d<f;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++;}},// map polyfill
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
map:function map(a,b){var c,d,e;if(null===this)throw new TypeError(" this is null or not defined");var f=Object(this),g=f.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(1<arguments.length&&(c=b),d=Array(g),e=0;e<g;){var h,i;e in f&&(h=f[e],i=a.call(c,h,e,f),d[e]=i),e++;}return d},// filter polyfill
// Prodcution steps of ECMA-262, Edition 5
// Reference: http://es5.github.io/#x15.4.4.20
filter:function filter(a/*, thisArg*/){if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=2<=arguments.length?arguments[1]:void 0,f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g);}return d},// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
isArray:function isArray(a){return "[object Array]"===Object.prototype.toString.call(a)},Base64:Base64};

var MessageType={SessionStart:1,SessionEnd:2,PageView:3,PageEvent:4,CrashReport:5,OptOut:6,AppStateTransition:10,Profile:14,Commerce:16,Media:20,UserAttributeChange:17,UserIdentityChange:18},EventType={Unknown:0,Navigation:1,Location:2,Search:3,Transaction:4,UserContent:5,UserPreference:6,Social:7,Other:8,Media:9,getName:function getName(a){return a===EventType.Navigation?"Navigation":a===EventType.Location?"Location":a===EventType.Search?"Search":a===EventType.Transaction?"Transaction":a===EventType.UserContent?"User Content":a===EventType.UserPreference?"User Preference":a===EventType.Social?"Social":a===CommerceEventType.ProductAddToCart?"Product Added to Cart":a===CommerceEventType.ProductAddToWishlist?"Product Added to Wishlist":a===CommerceEventType.ProductCheckout?"Product Checkout":a===CommerceEventType.ProductCheckoutOption?"Product Checkout Options":a===CommerceEventType.ProductClick?"Product Click":a===CommerceEventType.ProductImpression?"Product Impression":a===CommerceEventType.ProductPurchase?"Product Purchased":a===CommerceEventType.ProductRefund?"Product Refunded":a===CommerceEventType.ProductRemoveFromCart?"Product Removed From Cart":a===CommerceEventType.ProductRemoveFromWishlist?"Product Removed from Wishlist":a===CommerceEventType.ProductViewDetail?"Product View Details":a===CommerceEventType.PromotionClick?"Promotion Click":a===CommerceEventType.PromotionView?"Promotion View":"Other"}},CommerceEventType={ProductAddToCart:10,ProductRemoveFromCart:11,ProductCheckout:12,ProductCheckoutOption:13,ProductClick:14,ProductViewDetail:15,ProductPurchase:16,ProductRefund:17,PromotionView:18,PromotionClick:19,ProductAddToWishlist:20,ProductRemoveFromWishlist:21,ProductImpression:22},IdentityType={Other:0,CustomerId:1,Facebook:2,Twitter:3,Google:4,Microsoft:5,Yahoo:6,Email:7,FacebookCustomAudienceId:9,Other2:10,Other3:11,Other4:12};IdentityType.isValid=function(a){if("number"==typeof a)for(var b in IdentityType)if(IdentityType.hasOwnProperty(b)&&IdentityType[b]===a)return !0;return !1},IdentityType.getName=function(a){return a===window.mParticle.IdentityType.CustomerId?"Customer ID":a===window.mParticle.IdentityType.Facebook?"Facebook ID":a===window.mParticle.IdentityType.Twitter?"Twitter ID":a===window.mParticle.IdentityType.Google?"Google ID":a===window.mParticle.IdentityType.Microsoft?"Microsoft ID":a===window.mParticle.IdentityType.Yahoo?"Yahoo ID":a===window.mParticle.IdentityType.Email?"Email":a===window.mParticle.IdentityType.FacebookCustomAudienceId?"Facebook App User ID":"Other ID"},IdentityType.getIdentityType=function(a){return "other"===a?IdentityType.Other:"customerid"===a?IdentityType.CustomerId:"facebook"===a?IdentityType.Facebook:"twitter"===a?IdentityType.Twitter:"google"===a?IdentityType.Google:"microsoft"===a?IdentityType.Microsoft:"yahoo"===a?IdentityType.Yahoo:"email"===a?IdentityType.Email:"facebookcustomaudienceid"===a?IdentityType.FacebookCustomAudienceId:"other2"===a?IdentityType.Other2:"other3"===a?IdentityType.Other3:!("other4"!=a)&&IdentityType.Other4},IdentityType.getIdentityName=function(a){return a===IdentityType.Other?"other":a===IdentityType.CustomerId?"customerid":a===IdentityType.Facebook?"facebook":a===IdentityType.Twitter?"twitter":a===IdentityType.Google?"google":a===IdentityType.Microsoft?"microsoft":a===IdentityType.Yahoo?"yahoo":a===IdentityType.Email?"email":a===IdentityType.FacebookCustomAudienceId?"facebookcustomaudienceid":a===IdentityType.Other2?"other2":a===IdentityType.Other3?"other3":a===IdentityType.Other4?"other4":void 0};var ProductActionType={Unknown:0,AddToCart:1,RemoveFromCart:2,Checkout:3,CheckoutOption:4,Click:5,ViewDetail:6,Purchase:7,Refund:8,AddToWishlist:9,RemoveFromWishlist:10};ProductActionType.getName=function(a){return a===ProductActionType.AddToCart?"Add to Cart":a===ProductActionType.RemoveFromCart?"Remove from Cart":a===ProductActionType.Checkout?"Checkout":a===ProductActionType.CheckoutOption?"Checkout Option":a===ProductActionType.Click?"Click":a===ProductActionType.ViewDetail?"View Detail":a===ProductActionType.Purchase?"Purchase":a===ProductActionType.Refund?"Refund":a===ProductActionType.AddToWishlist?"Add to Wishlist":a===ProductActionType.RemoveFromWishlist?"Remove from Wishlist":"Unknown"},ProductActionType.getExpansionName=function(a){return a===ProductActionType.AddToCart?"add_to_cart":a===ProductActionType.RemoveFromCart?"remove_from_cart":a===ProductActionType.Checkout?"checkout":a===ProductActionType.CheckoutOption?"checkout_option":a===ProductActionType.Click?"click":a===ProductActionType.ViewDetail?"view_detail":a===ProductActionType.Purchase?"purchase":a===ProductActionType.Refund?"refund":a===ProductActionType.AddToWishlist?"add_to_wishlist":a===ProductActionType.RemoveFromWishlist?"remove_from_wishlist":"unknown"};var PromotionActionType={Unknown:0,PromotionView:1,PromotionClick:2};PromotionActionType.getName=function(a){return a===PromotionActionType.PromotionView?"view":a===PromotionActionType.PromotionClick?"click":"unknown"},PromotionActionType.getExpansionName=function(a){return a===PromotionActionType.PromotionView?"view":a===PromotionActionType.PromotionClick?"click":"unknown"};var ProfileMessageType={Logout:3},ApplicationTransitionType={AppInit:1};var Types = {MessageType:MessageType,EventType:EventType,CommerceEventType:CommerceEventType,IdentityType:IdentityType,ProfileMessageType:ProfileMessageType,ApplicationTransitionType:ApplicationTransitionType,ProductActionType:ProductActionType,PromotionActionType:PromotionActionType};

var Constants={sdkVersion:"2.9.14",sdkVendor:"mparticle",platform:"web",Messages:{ErrorMessages:{NoToken:"A token must be specified.",EventNameInvalidType:"Event name must be a valid string value.",EventDataInvalidType:"Event data must be a valid object hash.",LoggingDisabled:"Event logging is currently disabled.",CookieParseError:"Could not parse cookie",EventEmpty:"Event object is null or undefined, cancelling send",APIRequestEmpty:"APIRequest is null or undefined, cancelling send",NoEventType:"Event type must be specified.",TransactionIdRequired:"Transaction ID is required",TransactionRequired:"A transaction attributes object is required",PromotionIdRequired:"Promotion ID is required",BadAttribute:"Attribute value cannot be object or array",BadKey:"Key value cannot be object or array",BadLogPurchase:"Transaction attributes and a product are both required to log a purchase, https://docs.mparticle.com/?javascript#measuring-transactions"},InformationMessages:{CookieSearch:"Searching for cookie",CookieFound:"Cookie found, parsing values",CookieNotFound:"Cookies not found",CookieSet:"Setting cookie",CookieSync:"Performing cookie sync",SendBegin:"Starting to send event",SendIdentityBegin:"Starting to send event to identity server",SendWindowsPhone:"Sending event to Windows Phone container",SendIOS:"Calling iOS path: ",SendAndroid:"Calling Android JS interface method: ",SendHttp:"Sending event to mParticle HTTP service",SendAliasHttp:"Sending alias request to mParticle HTTP service",SendIdentityHttp:"Sending event to mParticle HTTP service",StartingNewSession:"Starting new Session",StartingLogEvent:"Starting to log event",StartingLogOptOut:"Starting to log user opt in/out",StartingEndSession:"Starting to end session",StartingInitialization:"Starting to initialize",StartingLogCommerceEvent:"Starting to log commerce event",StartingAliasRequest:"Starting to Alias MPIDs",LoadingConfig:"Loading configuration options",AbandonLogEvent:"Cannot log event, logging disabled or developer token not set",AbandonAliasUsers:"Cannot Alias Users, logging disabled or developer token not set",AbandonStartSession:"Cannot start session, logging disabled or developer token not set",AbandonEndSession:"Cannot end session, logging disabled or developer token not set",NoSessionToEnd:"Cannot end session, no active session found"},ValidationMessages:{ModifyIdentityRequestUserIdentitiesPresent:"identityRequests to modify require userIdentities to be present. Request not sent to server. Please fix and try again",IdentityRequesetInvalidKey:"There is an invalid key on your identityRequest object. It can only contain a `userIdentities` object and a `onUserAlias` function. Request not sent to server. Please fix and try again.",OnUserAliasType:"The onUserAlias value must be a function. The onUserAlias provided is of type",UserIdentities:"The userIdentities key must be an object with keys of identityTypes and values of strings. Request not sent to server. Please fix and try again.",UserIdentitiesInvalidKey:"There is an invalid identity key on your `userIdentities` object within the identityRequest. Request not sent to server. Please fix and try again.",UserIdentitiesInvalidValues:"All user identity values must be strings or null. Request not sent to server. Please fix and try again.",AliasMissingMpid:"Alias Request must contain both a destinationMpid and a sourceMpid",AliasNonUniqueMpid:"Alias Request's destinationMpid and sourceMpid must be unique",AliasMissingTime:"Alias Request must have both a startTime and an endTime",AliasStartBeforeEndTime:"Alias Request's endTime must be later than its startTime"}},NativeSdkPaths:{LogEvent:"logEvent",SetUserTag:"setUserTag",RemoveUserTag:"removeUserTag",SetUserAttribute:"setUserAttribute",RemoveUserAttribute:"removeUserAttribute",SetSessionAttribute:"setSessionAttribute",AddToCart:"addToCart",RemoveFromCart:"removeFromCart",ClearCart:"clearCart",LogOut:"logOut",SetUserAttributeList:"setUserAttributeList",RemoveAllUserAttributes:"removeAllUserAttributes",GetUserAttributesLists:"getUserAttributesLists",GetAllUserAttributes:"getAllUserAttributes",Identify:"identify",Logout:"logout",Login:"login",Modify:"modify",Alias:"aliasUsers"},StorageNames:{localStorageName:"mprtcl-api",// Name of the mP localstorage, had cp and pb even if cookies were used, skipped v2
localStorageNameV3:"mprtcl-v3",// v3 Name of the mP localstorage, final version on SDKv1
cookieName:"mprtcl-api",// v1 Name of the cookie stored on the user's machine
cookieNameV2:"mprtcl-v2",// v2 Name of the cookie stored on the user's machine. Removed keys with no values, moved cartProducts and productBags to localStorage.
cookieNameV3:"mprtcl-v3",// v3 Name of the cookie stored on the user's machine. Base64 encoded keys in Base64CookieKeys object, final version on SDKv1
localStorageNameV4:"mprtcl-v4",// v4 Name of the mP localstorage, Current Version
localStorageProductsV4:"mprtcl-prodv4",// The name for mP localstorage that contains products for cartProducs and productBags
cookieNameV4:"mprtcl-v4",// v4 Name of the cookie stored on the user's machine. Base64 encoded keys in Base64CookieKeys object, current version on SDK v2
currentStorageName:"mprtcl-v4",currentStorageProductsName:"mprtcl-prodv4"},DefaultConfig:{cookieDomain:null,// If null, defaults to current location.host
cookieExpiration:365,// Cookie expiration time in days
logLevel:null,// What logging will be provided in the console
timeout:300,// timeout in milliseconds for logging functions
sessionTimeout:30,// Session timeout in minutes
maxProducts:20,// Number of products persisted in cartProducts and productBags
forwarderStatsTimeout:5e3,// Milliseconds for forwarderStats timeout
integrationDelayTimeout:5e3,// Milliseconds for forcing the integration delay to un-suspend event queueing due to integration partner errors
maxCookieSize:3e3,// Number of bytes for cookie size to not exceed
aliasMaxWindow:90,// Max age of Alias request startTime, in days
uploadInterval:0// Maximum milliseconds in between batch uploads, below 500 will mean immediate upload
},DefaultUrls:{v1SecureServiceUrl:"jssdks.mparticle.com/v1/JS/",v2SecureServiceUrl:"jssdks.mparticle.com/v2/JS/",v3SecureServiceUrl:"jssdks.mparticle.com/v3/JS/",configUrl:"jssdkcdns.mparticle.com/JS/v2/",identityUrl:"identity.mparticle.com/v1/",aliasUrl:"jssdks.mparticle.com/v1/identity/"},Base64CookieKeys:{csm:1,sa:1,ss:1,ua:1,ui:1,csd:1,ia:1,con:1},SDKv2NonMPIDCookieKeys:{gs:1,cu:1,l:1,globalSettings:1,currentUserMPID:1},HTTPCodes:{noHttpCoverage:-1,activeIdentityRequest:-2,activeSession:-3,validationIssue:-4,nativeIdentityRequest:-5,loggingDisabledOrMissingAPIKey:-6,tooManyRequests:429},FeatureFlags:{ReportBatching:"reportBatching",EventsV3:"eventsV3",EventBatchingIntervalMillis:"eventBatchingIntervalMillis"}};

var StorageNames=Constants.StorageNames,pluses=/\+/g;function canLog(){return !!(mParticle.Store.isEnabled&&(mParticle.Store.devToken||mParticle.Store.webviewBridgeEnabled))}function returnConvertedBoolean(a){return "false"!==a&&"0"!==a&&!!a}function getFeatureFlag(a){return mParticle.Store.SDKConfig.flags.hasOwnProperty(a)?mParticle.Store.SDKConfig.flags[a]:null}/**
 * Returns a value between 1-100 inclusive.
 */function getRampNumber(a){if(!a)return 100;var b=generateHash(a);return Math.abs(b%100)+1}function invokeCallback(a,b,c,d,e){a||mParticle.Logger.warning("There is no callback provided");try{Validators.isFunction(a)&&a({httpCode:b,body:c,getUser:function getUser(){return d?d:mParticle.Identity.getCurrentUser()},getPreviousUser:function getPreviousUser(){if(!e){var a=mParticle.Identity.getUsers(),b=a.shift(),c=d||mParticle.Identity.getCurrentUser();return b&&c&&b.getMPID()===c.getMPID()&&(b=a.shift()),b||null}return mParticle.Identity.getUser(e)}});}catch(a){mParticle.Logger.error("There was an error with your callback: "+a);}}function invokeAliasCallback(a,b,c){a||mParticle.Logger.warning("There is no callback provided");try{if(Validators.isFunction(a)){var d={httpCode:b};c&&(d.message=c),a(d);}}catch(a){mParticle.Logger.error("There was an error with your callback: "+a);}}// Standalone version of jQuery.extend, from https://github.com/dansdom/extend
function extend(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,j=arguments.length,k=!1,// helper which replicates the jquery internal functions
l={hasOwn:Object.prototype.hasOwnProperty,class2type:{},type:function type(a){return null==a?a+"":l.class2type[Object.prototype.toString.call(a)]||"object"},isPlainObject:function isPlainObject(a){if(!a||"object"!==l.type(a)||a.nodeType||l.isWindow(a))return !1;try{if(a.constructor&&!l.hasOwn.call(a,"constructor")&&!l.hasOwn.call(a.constructor.prototype,"isPrototypeOf"))return !1}catch(a){return !1}for(var b in a);// eslint-disable-line no-empty
return b===void 0||l.hasOwn.call(a,b)},isArray:Array.isArray||function(a){return "array"===l.type(a)},isFunction:function isFunction(a){return "function"===l.type(a)},isWindow:function isWindow(a){return null!=a&&a==a.window}};// end of objectHelper
// Handle a deep copy situation
for("boolean"==typeof g&&(k=g,g=arguments[1]||{},h=2),"object"===_typeof_1(g)||l.isFunction(g)||(g={}),j===h&&(g=this,--h);h<j;h++)// Only deal with non-null/undefined values
if(null!=(a=arguments[h]))// Extend the base object
for(b in a)// Prevent never-ending loop
(c=g[b],d=a[b],g!==d)&&(k&&d&&(l.isPlainObject(d)||(e=l.isArray(d)))?(e?(e=!1,f=c&&l.isArray(c)?c:[]):f=c&&l.isPlainObject(c)?c:{},g[b]=extend(k,f,d)):void 0!==d&&(g[b]=d));// Recurse if we're merging plain objects or arrays
// Return the modified object
return g}function isObject(a){var b=Object.prototype.toString.call(a);return "[object Object]"===b||"[object Error]"===b}function inArray(a,b){var c=0;if(Array.prototype.indexOf)return 0<=a.indexOf(b,0);for(var d=a.length;c<d;c++)if(c in a&&a[c]===b)return !0}function createServiceUrl(a,b){var c,d=window.mParticle&&mParticle.Store.SDKConfig.forceHttps?"https://":window.location.protocol+"//";return c=mParticle.Store.SDKConfig.forceHttps?"https://"+a:d+a,b&&(c+=b),c}function createXHR(a){var b;try{b=new window.XMLHttpRequest;}catch(a){mParticle.Logger.error("Error creating XMLHttpRequest object.");}if(b&&a&&"withCredentials"in b)b.onreadystatechange=a;else if("undefined"!=typeof window.XDomainRequest){mParticle.Logger.verbose("Creating XDomainRequest object");try{b=new window.XDomainRequest,b.onload=a;}catch(a){mParticle.Logger.error("Error creating XDomainRequest object");}}return b}function generateRandomValue(b){var a;return window.crypto&&window.crypto.getRandomValues&&(a=window.crypto.getRandomValues(new Uint8Array(1))),a?(b^a[0]%16>>b/4).toString(16):(b^16*Math.random()>>b/4).toString(16)}function generateUniqueId(b){// https://gist.github.com/jed/982883
// Added support for crypto for better random
return b// if the placeholder was passed, return
?generateRandomValue(b)// a random number
:// or otherwise a concatenated string:
"10000000-1000-4000-8000-100000000000".// -100000000000,
replace(// replacing
/[018]/g,// zeroes, ones, and eights with
generateUniqueId// random hex digits
)}function filterUserIdentities(a,b){var c=[];if(a&&Object.keys(a).length)for(var d in a)if(a.hasOwnProperty(d)){var e=Types.IdentityType.getIdentityType(d);if(!inArray(b,e)){var f={Type:e,Identity:a[d]};e===mParticle.IdentityType.CustomerId?c.unshift(f):c.push(f);}}return c}function filterUserIdentitiesForForwarders(a,b){var c={};if(a&&Object.keys(a).length)for(var d in a)if(a.hasOwnProperty(d)){var e=Types.IdentityType.getIdentityType(d);inArray(b,e)||(c[d]=a[d]);}return c}function filterUserAttributes(a,b){var c={};if(a&&Object.keys(a).length)for(var d in a)if(a.hasOwnProperty(d)){var e=generateHash(d);inArray(b,e)||(c[d]=a[d]);}return c}function findKeyInObject(a,b){if(b&&a)for(var c in a)if(a.hasOwnProperty(c)&&c.toLowerCase()===b.toLowerCase())return c;return null}function decoded(a){return decodeURIComponent(a.replace(pluses," "))}function converted(a){return 0===a.indexOf("\"")&&(a=a.slice(1,-1).replace(/\\"/g,"\"").replace(/\\\\/g,"\\")),a}function isEventType(a){for(var b in Types.EventType)if(Types.EventType.hasOwnProperty(b)&&Types.EventType[b]===a)return !0;return !1}function parseNumber(a){if(isNaN(a)||!isFinite(a))return 0;var b=parseFloat(a);return isNaN(b)?0:b}function parseStringOrNumber(a){return Validators.isStringOrNumber(a)?a:null}function generateHash(a){var b,c=0,d=0;if(void 0===a||null===a)return 0;if(a=a.toString().toLowerCase(),Array.prototype.reduce)return a.split("").reduce(function(c,d){return c=(c<<5)-c+d.charCodeAt(0),c&c},0);if(0===a.length)return c;for(d=0;d<a.length;d++)b=a.charCodeAt(d),c=(c<<5)-c+b,c&=c;return c}function sanitizeAttributes(a){if(!a||!isObject(a))return null;var b={};for(var c in a)// Make sure that attribute values are not objects or arrays, which are not valid
a.hasOwnProperty(c)&&Validators.isValidAttributeValue(a[c])?b[c]=a[c]:mParticle.Logger.warning("The corresponding attribute value of "+c+" must be a string, number, boolean, or null.");return b}var Validators={isValidAttributeValue:function isValidAttributeValue(a){return a!==void 0&&!isObject(a)&&!Array.isArray(a)},// Neither null nor undefined can be a valid Key
isValidKeyValue:function isValidKeyValue(a){return !(!a||isObject(a)||Array.isArray(a))},isStringOrNumber:function isStringOrNumber(a){return "string"==typeof a||"number"==typeof a},isNumber:function isNumber(a){return "number"==typeof a},isFunction:function isFunction(a){return "function"==typeof a},validateIdentities:function validateIdentities(a,b){var c={userIdentities:1,onUserAlias:1,copyUserAttributes:1};if(a){if("modify"===b&&(isObject(a.userIdentities)&&!Object.keys(a.userIdentities).length||!isObject(a.userIdentities)))return {valid:!1,error:Constants.Messages.ValidationMessages.ModifyIdentityRequestUserIdentitiesPresent};for(var d in a)if(a.hasOwnProperty(d)){if(!c[d])return {valid:!1,error:Constants.Messages.ValidationMessages.IdentityRequesetInvalidKey};if("onUserAlias"===d&&!Validators.isFunction(a[d]))return {valid:!1,error:Constants.Messages.ValidationMessages.OnUserAliasType+_typeof_1(a[d])}}if(0===Object.keys(a).length)return {valid:!0};// identityApiData.userIdentities can't be undefined
if(void 0===a.userIdentities)return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentities};// identityApiData.userIdentities can be null, but if it isn't null or undefined (above conditional), it must be an object
if(null!==a.userIdentities&&!isObject(a.userIdentities))return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentities};if(isObject(a.userIdentities)&&Object.keys(a.userIdentities).length)for(var e in a.userIdentities)if(a.userIdentities.hasOwnProperty(e)){if(!1===Types.IdentityType.getIdentityType(e))return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentitiesInvalidKey};if("string"!=typeof a.userIdentities[e]&&null!==a.userIdentities[e])return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentitiesInvalidValues}}}return {valid:!0}}};function isDelayedByIntegration(a,b,c){if(c-b>mParticle.Store.SDKConfig.integrationDelayTimeout)return !1;for(var d in a){if(!0===a[d])return !0;continue}return !1}function createMainStorageName(a){return a?StorageNames.currentStorageName+"_"+a:StorageNames.currentStorageName}function createProductStorageName(a){return a?StorageNames.currentStorageProductsName+"_"+a:StorageNames.currentStorageProductsName}var Helpers = {canLog:canLog,extend:extend,isObject:isObject,inArray:inArray,createServiceUrl:createServiceUrl,createXHR:createXHR,generateUniqueId:generateUniqueId,filterUserIdentities:filterUserIdentities,filterUserIdentitiesForForwarders:filterUserIdentitiesForForwarders,filterUserAttributes:filterUserAttributes,findKeyInObject:findKeyInObject,decoded:decoded,converted:converted,isEventType:isEventType,parseNumber:parseNumber,parseStringOrNumber:parseStringOrNumber,generateHash:generateHash,sanitizeAttributes:sanitizeAttributes,returnConvertedBoolean:returnConvertedBoolean,invokeCallback:invokeCallback,invokeAliasCallback:invokeAliasCallback,getFeatureFlag:getFeatureFlag,isDelayedByIntegration:isDelayedByIntegration,createMainStorageName:createMainStorageName,createProductStorageName:createProductStorageName,Validators:Validators,getRampNumber:getRampNumber};

var Messages=Constants.Messages,androidBridgeNameBase="mParticleAndroid",iosBridgeNameBase="mParticle";function isBridgeV2Available(a){if(!a)return !1;var b=iosBridgeNameBase+"_"+a+"_v2";// iOS v2 bridge
return !!(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.hasOwnProperty(b))||!(window.mParticle.uiwebviewBridgeName!==b)||!!window.hasOwnProperty(androidBridgeNameBase+"_"+a+"_v2");// other iOS v2 bridge
// android
}function isWebviewEnabled(a,b){return mParticle.Store.bridgeV2Available=isBridgeV2Available(a),mParticle.Store.bridgeV1Available=isBridgeV1Available(),2===b?mParticle.Store.bridgeV2Available:!(window.mParticle.uiwebviewBridgeName&&window.mParticle.uiwebviewBridgeName!==iosBridgeNameBase+"_"+a+"_v2")&&!!(2>b)&&(mParticle.Store.bridgeV2Available||mParticle.Store.bridgeV1Available);// iOS BridgeV1 can be available via mParticle.isIOS, but return false if uiwebviewBridgeName doesn't match requiredWebviewBridgeName
}function isBridgeV1Available(){return !!(mParticle.Store.SDKConfig.useNativeSdk||window.mParticleAndroid||mParticle.Store.SDKConfig.isIOS)}function sendToNative(a,b){return mParticle.Store.bridgeV2Available&&2===mParticle.Store.SDKConfig.minWebviewBridgeVersion?void sendViaBridgeV2(a,b,mParticle.Store.SDKConfig.requiredWebviewBridgeName):mParticle.Store.bridgeV2Available&&2>mParticle.Store.SDKConfig.minWebviewBridgeVersion?void sendViaBridgeV2(a,b,mParticle.Store.SDKConfig.requiredWebviewBridgeName):mParticle.Store.bridgeV1Available&&2>mParticle.Store.SDKConfig.minWebviewBridgeVersion?void sendViaBridgeV1(a,b):void 0}function sendViaBridgeV1(a,b){window.mParticleAndroid&&window.mParticleAndroid.hasOwnProperty(a)?(mParticle.Logger.verbose(Messages.InformationMessages.SendAndroid+a),window.mParticleAndroid[a](b)):mParticle.Store.SDKConfig.isIOS&&(mParticle.Logger.verbose(Messages.InformationMessages.SendIOS+a),sendViaIframeToIOS(a,b));}function sendViaIframeToIOS(a,b){var c=document.createElement("IFRAME");c.setAttribute("src","mp-sdk://"+a+"/"+encodeURIComponent(b)),document.documentElement.appendChild(c),c.parentNode.removeChild(c);}function sendViaBridgeV2(a,b,c){if(c){var d,e,f=window[androidBridgeNameBase+"_"+c+"_v2"],g=iosBridgeNameBase+"_"+c+"_v2";return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[g]&&(d=window.webkit.messageHandlers[g]),window.mParticle.uiwebviewBridgeName===g&&(e=window.mParticle[g]),f&&f.hasOwnProperty(a)?(mParticle.Logger.verbose(Messages.InformationMessages.SendAndroid+a),void f[a](b)):void(d?(mParticle.Logger.verbose(Messages.InformationMessages.SendIOS+a),d.postMessage(JSON.stringify({path:a,value:b?JSON.parse(b):null}))):e&&(mParticle.Logger.verbose(Messages.InformationMessages.SendIOS+a),sendViaIframeToIOS(a,b)))}}var NativeSdkHelpers = {isWebviewEnabled:isWebviewEnabled,isBridgeV2Available:isBridgeV2Available,sendToNative:sendToNative};

function createGDPRConsent(a,b,c,d,e){return "boolean"==typeof a?b&&isNaN(b)?(mParticle.Logger.error("Timestamp must be a valid number when constructing a GDPR Consent object."),null):c&&"string"!=typeof c?(mParticle.Logger.error("Document must be a valid string when constructing a GDPR Consent object."),null):d&&"string"!=typeof d?(mParticle.Logger.error("Location must be a valid string when constructing a GDPR Consent object."),null):e&&"string"!=typeof e?(mParticle.Logger.error("Hardware ID must be a valid string when constructing a GDPR Consent object."),null):{Consented:a,Timestamp:b||Date.now(),ConsentDocument:c,Location:d,HardwareId:e}:(mParticle.Logger.error("Consented boolean is required when constructing a GDPR Consent object."),null)}var ConsentSerialization={toMinifiedJsonObject:function toMinifiedJsonObject(a){var b={};if(a){var c=a.getGDPRConsentState();if(c)for(var d in b.gdpr={},c)if(c.hasOwnProperty(d)){var e=c[d];b.gdpr[d]={},"boolean"==typeof e.Consented&&(b.gdpr[d].c=e.Consented),"number"==typeof e.Timestamp&&(b.gdpr[d].ts=e.Timestamp),"string"==typeof e.ConsentDocument&&(b.gdpr[d].d=e.ConsentDocument),"string"==typeof e.Location&&(b.gdpr[d].l=e.Location),"string"==typeof e.HardwareId&&(b.gdpr[d].h=e.HardwareId);}}return b},fromMinifiedJsonObject:function fromMinifiedJsonObject(a){var b=createConsentState();if(a.gdpr)for(var c in a.gdpr)if(a.gdpr.hasOwnProperty(c)){var d=createGDPRConsent(a.gdpr[c].c,a.gdpr[c].ts,a.gdpr[c].d,a.gdpr[c].l,a.gdpr[c].h);b.addGDPRConsentState(c,d);}return b}};function createConsentState(a){function b(a){if("string"!=typeof a)return null;var b=a.trim();return b.length?b.toLowerCase():null}function c(a){if(!a)g={};else if(Helpers.isObject(a))for(var b in g={},a)a.hasOwnProperty(b)&&d(b,a[b]);return this}function d(a,c){var d=b(a);if(!d)return mParticle.Logger.error("addGDPRConsentState() invoked with bad purpose. Purpose must be a string."),this;if(!Helpers.isObject(c))return mParticle.Logger.error("addGDPRConsentState() invoked with bad or empty GDPR consent object."),this;var e=createGDPRConsent(c.Consented,c.Timestamp,c.ConsentDocument,c.Location,c.HardwareId);return e&&(g[d]=e),this}function e(a){var c=b(a);return c?(delete g[c],this):this}function f(){return Helpers.extend({},g)}var g={};return a&&c(a.getGDPRConsentState()),{setGDPRConsentState:c,addGDPRConsentState:d,getGDPRConsentState:f,removeGDPRConsentState:e}}var Consent = {createGDPRConsent:createGDPRConsent,Serialization:ConsentSerialization,createConsentState:createConsentState};

var Base64$1=Polyfill.Base64,Messages$1=Constants.Messages,Base64CookieKeys=Constants.Base64CookieKeys,SDKv2NonMPIDCookieKeys=Constants.SDKv2NonMPIDCookieKeys,StorageNames$1=Constants.StorageNames;function useLocalStorage(){return !mParticle.Store.SDKConfig.useCookieStorage&&mParticle.Store.isLocalStorageAvailable}function initializeStorage(){try{var a,b,c=getLocalStorage(),d=getCookie();// Determine if there is any data in cookies or localStorage to figure out if it is the first time the browser is loading mParticle
c||d?mParticle.Store.isFirstRun=!1:(mParticle.Store.isFirstRun=!0,mParticle.Store.mpid=0),mParticle.Store.isLocalStorageAvailable||(mParticle.Store.SDKConfig.useCookieStorage=!0),mParticle.Store.isLocalStorageAvailable?(a=window.localStorage,mParticle.Store.SDKConfig.useCookieStorage?(c?(b=d?Helpers.extend(!1,c,d):c,a.removeItem(mParticle.Store.storageName)):d&&(b=d),storeDataInMemory(b)):d?(b=c?Helpers.extend(!1,c,d):d,storeDataInMemory(b),expireCookies(mParticle.Store.storageName)):storeDataInMemory(c)):storeDataInMemory(d);try{if(mParticle.Store.isLocalStorageAvailable){var e=localStorage.getItem(mParticle.Store.prodStorageName);if(e)var f=JSON.parse(Base64$1.decode(e));mParticle.Store.mpid&&storeProductsInMemory(f,mParticle.Store.mpid);}}catch(a){mParticle.Store.isLocalStorageAvailable&&localStorage.removeItem(mParticle.Store.prodStorageName),mParticle.Store.cartProducts=[],mParticle.Logger.error("Error loading products in initialization: "+a);}for(var g in b)b.hasOwnProperty(g)&&(SDKv2NonMPIDCookieKeys[g]||(mParticle.Store.nonCurrentUserMPIDs[g]=b[g]));update();}catch(a){useLocalStorage()&&mParticle.Store.isLocalStorageAvailable?localStorage.removeItem(mParticle.Store.storageName):expireCookies(mParticle.Store.storageName),mParticle.Logger.error("Error initializing storage: "+a);}}function update(){mParticle.Store.webviewBridgeEnabled||(mParticle.Store.SDKConfig.useCookieStorage&&setCookie(),setLocalStorage());}function storeProductsInMemory(a,b){if(a)try{mParticle.Store.cartProducts=a[b]&&a[b].cp?a[b].cp:[];}catch(a){mParticle.Logger.error(Messages$1.ErrorMessages.CookieParseError);}}function storeDataInMemory(a,b){try{a?(mParticle.Store.mpid=b?b:a.cu||0,a.gs=a.gs||{},mParticle.Store.sessionId=a.gs.sid||mParticle.Store.sessionId,mParticle.Store.isEnabled="undefined"==typeof a.gs.ie?mParticle.Store.isEnabled:a.gs.ie,mParticle.Store.sessionAttributes=a.gs.sa||mParticle.Store.sessionAttributes,mParticle.Store.serverSettings=a.gs.ss||mParticle.Store.serverSettings,mParticle.Store.devToken=mParticle.Store.devToken||a.gs.dt,mParticle.Store.SDKConfig.appVersion=mParticle.Store.SDKConfig.appVersion||a.gs.av,mParticle.Store.clientId=a.gs.cgid||mParticle.Store.clientId||Helpers.generateUniqueId(),mParticle.Store.deviceId=a.gs.das||mParticle.Store.deviceId||Helpers.generateUniqueId(),mParticle.Store.integrationAttributes=a.gs.ia||{},mParticle.Store.context=a.gs.c||mParticle.Store.context,mParticle.Store.currentSessionMPIDs=a.gs.csm||mParticle.Store.currentSessionMPIDs,mParticle.Store.isLoggedIn=!0===a.l,a.gs.les&&(mParticle.Store.dateLastEventSent=new Date(a.gs.les)),mParticle.Store.sessionStartDate=a.gs.ssd?new Date(a.gs.ssd):new Date,a=b?a[b]:a[a.cu]):(mParticle.Logger.verbose(Messages$1.InformationMessages.CookieNotFound),mParticle.Store.clientId=mParticle.Store.clientId||Helpers.generateUniqueId(),mParticle.Store.deviceId=mParticle.Store.deviceId||Helpers.generateUniqueId());}catch(a){mParticle.Logger.error(Messages$1.ErrorMessages.CookieParseError);}}function determineLocalStorageAvailability(a){var b;mParticle._forceNoLocalStorage&&(a=void 0);try{return a.setItem("mparticle","test"),b="test"===a.getItem("mparticle"),a.removeItem("mparticle"),b&&a}catch(a){return !1}}function getUserProductsFromLS(a){if(!mParticle.Store.isLocalStorageAvailable)return [];var b,c,d,e=localStorage.getItem(mParticle.Store.prodStorageName);// if there is an MPID, we are retrieving the user's products, which is an array
if(e&&(b=Base64$1.decode(e)),a)try{return b&&(d=JSON.parse(b)),c=b&&d[a]&&d[a].cp&&Array.isArray(d[a].cp)?d[a].cp:[],c}catch(a){return []}else return []}function getAllUserProductsFromLS(){var a,b,c=localStorage.getItem(mParticle.Store.prodStorageName);c&&(a=Base64$1.decode(c));// returns an object with keys of MPID and values of array of products
try{b=JSON.parse(a);}catch(a){b={};}return b}function setLocalStorage(){if(mParticle.Store.isLocalStorageAvailable){var a=mParticle.Store.storageName,b=getAllUserProductsFromLS(),c=getLocalStorage()||{},d=mParticle.Identity.getCurrentUser(),e=d?d.getMPID():null,f={cp:b[e]?b[e].cp:[]};if(e){b=b||{},b[e]=f;try{window.localStorage.setItem(encodeURIComponent(mParticle.Store.prodStorageName),Base64$1.encode(JSON.stringify(b)));}catch(a){mParticle.Logger.error("Error with setting products on localStorage.");}}if(!mParticle.Store.SDKConfig.useCookieStorage){c.gs=c.gs||{},c.l=mParticle.Store.isLoggedIn?1:0,mParticle.Store.sessionId&&(c.gs.csm=mParticle.Store.currentSessionMPIDs),c.gs.ie=mParticle.Store.isEnabled,e&&(c.cu=e),Object.keys(mParticle.Store.nonCurrentUserMPIDs).length&&(c=Helpers.extend({},c,mParticle.Store.nonCurrentUserMPIDs),mParticle.Store.nonCurrentUserMPIDs={}),c=setGlobalStorageAttributes(c);try{window.localStorage.setItem(encodeURIComponent(a),encodeCookies(JSON.stringify(c)));}catch(a){mParticle.Logger.error("Error with setting localStorage item.");}}}}function setGlobalStorageAttributes(a){var b=mParticle.Store;return a.gs.sid=b.sessionId,a.gs.ie=b.isEnabled,a.gs.sa=b.sessionAttributes,a.gs.ss=b.serverSettings,a.gs.dt=b.devToken,a.gs.les=b.dateLastEventSent?b.dateLastEventSent.getTime():null,a.gs.av=b.SDKConfig.appVersion,a.gs.cgid=b.clientId,a.gs.das=b.deviceId,a.gs.c=b.context,a.gs.ssd=b.sessionStartDate?b.sessionStartDate.getTime():null,a.gs.ia=b.integrationAttributes,a}function getLocalStorage(){if(!mParticle.Store.isLocalStorageAvailable)return null;var a,b=mParticle.Store.storageName,c=decodeCookies(window.localStorage.getItem(b)),d={};if(c)for(a in c=JSON.parse(c),c)c.hasOwnProperty(a)&&(d[a]=c[a]);return Object.keys(d).length?d:null}function removeLocalStorage(a){localStorage.removeItem(a);}function retrieveDeviceId(){return mParticle.Store.deviceId?mParticle.Store.deviceId:parseDeviceId(mParticle.Store.serverSettings)}function parseDeviceId(a){try{var b,c={};return a&&a.uid&&a.uid.Value&&(a.uid.Value.split("&").forEach(function(a){b=a.split("="),c[b[0]]=b[1];}),c.g)?c.g:Helpers.generateUniqueId()}catch(a){return Helpers.generateUniqueId()}}function expireCookies(a){var b,c,d,e=new Date;d=getCookieDomain(),c=""===d?"":";domain="+d,e.setTime(e.getTime()-86400000),b="; expires="+e.toUTCString(),document.cookie=a+"="+b+"; path=/"+c;}function getCookie(){var a,b,c,d,e,f=window.document.cookie.split("; "),g=mParticle.Store.storageName,h=g?void 0:{};for(mParticle.Logger.verbose(Messages$1.InformationMessages.CookieSearch),a=0,b=f.length;a<b;a++){if(c=f[a].split("="),d=Helpers.decoded(c.shift()),e=Helpers.decoded(c.join("=")),g&&g===d){h=Helpers.converted(e);break}g||(h[d]=Helpers.converted(e));}return h?(mParticle.Logger.verbose(Messages$1.InformationMessages.CookieFound),JSON.parse(decodeCookies(h))):null}function setCookie(){var a,b=mParticle.Identity.getCurrentUser();b&&(a=b.getMPID());var c,d,e,f=new Date,g=mParticle.Store.storageName,h=getCookie()||{},i=new Date(f.getTime()+1e3*(60*(60*(24*mParticle.Store.SDKConfig.cookieExpiration)))).toGMTString();c=getCookieDomain(),d=""===c?"":";domain="+c,h.gs=h.gs||{},mParticle.Store.sessionId&&(h.gs.csm=mParticle.Store.currentSessionMPIDs),a&&(h.cu=a),h.l=mParticle.Store.isLoggedIn?1:0,h=setGlobalStorageAttributes(h),Object.keys(mParticle.Store.nonCurrentUserMPIDs).length&&(h=Helpers.extend({},h,mParticle.Store.nonCurrentUserMPIDs),mParticle.Store.nonCurrentUserMPIDs={}),e=reduceAndEncodeCookies(h,i,d,mParticle.Store.SDKConfig.maxCookieSize),mParticle.Logger.verbose(Messages$1.InformationMessages.CookieSet),window.document.cookie=encodeURIComponent(g)+"="+e;}/*  This function determines if a cookie is greater than the configured maxCookieSize.
        - If it is, we remove an MPID and its associated UI/UA/CSD from the cookie.
        - Once removed, check size, and repeat.
        - Never remove the currentUser's MPID from the cookie.

    MPID removal priority:
    1. If there are no currentSessionMPIDs, remove a random MPID from the the cookie.
    2. If there are currentSessionMPIDs:
        a. Remove at random MPIDs on the cookie that are not part of the currentSessionMPIDs
        b. Then remove MPIDs based on order in currentSessionMPIDs array, which
        stores MPIDs based on earliest login.
*/function reduceAndEncodeCookies(a,b,c,d){var e,f=a.gs.csm?a.gs.csm:[];// Comment 1 above
if(!f.length)for(var g in a)a.hasOwnProperty(g)&&(e=createFullEncodedCookie(a,b,c),e.length>d&&!SDKv2NonMPIDCookieKeys[g]&&g!==a.cu&&delete a[g]);else{// Comment 2 above - First create an object of all MPIDs on the cookie
var h={};for(var j in a)a.hasOwnProperty(j)&&(SDKv2NonMPIDCookieKeys[j]||j===a.cu||(h[j]=1));// Comment 2a above
if(Object.keys(h).length)for(var k in h)e=createFullEncodedCookie(a,b,c),e.length>d&&h.hasOwnProperty(k)&&-1===f.indexOf(k)&&delete a[k];// Comment 2b above
for(var l,m=0;m<f.length&&(e=createFullEncodedCookie(a,b,c),e.length>d);m++)l=f[m],a[l]?(mParticle.Logger.verbose("Size of new encoded cookie is larger than maxCookieSize setting of "+d+". Removing from cookie the earliest logged in MPID containing: "+JSON.stringify(a[l],0,2)),delete a[l]):mParticle.Logger.error("Unable to save MPID data to cookies because the resulting encoded cookie is larger than the maxCookieSize setting of "+d+". We recommend using a maxCookieSize of 1500.");}return e}function createFullEncodedCookie(a,b,c){return encodeCookies(JSON.stringify(a))+";expires="+b+";path=/"+c}function findPrevCookiesBasedOnUI(a){var b,c=getCookie()||getLocalStorage();if(a)for(var d in a.userIdentities)if(c&&Object.keys(c).length)for(var e in c)// any value in cookies that has an MPID key will be an MPID to search through
// other keys on the cookie are currentSessionMPIDs and currentMPID which should not be searched
if(c[e].mpid){var f=c[e].ui;for(var g in f)if(d===g&&a.userIdentities[d]===f[g]){b=e;break}}b&&storeDataInMemory(c,b);}function encodeCookies(a){for(var b in a=JSON.parse(a),a.gs)a.gs.hasOwnProperty(b)&&(Base64CookieKeys[b]?a.gs[b]?Array.isArray(a.gs[b])&&a.gs[b].length||Helpers.isObject(a.gs[b])&&Object.keys(a.gs[b]).length?a.gs[b]=Base64$1.encode(JSON.stringify(a.gs[b])):delete a.gs[b]:delete a.gs[b]:"ie"===b?a.gs[b]=a.gs[b]?1:0:!a.gs[b]&&delete a.gs[b]);for(var c in a)if(a.hasOwnProperty(c)&&!SDKv2NonMPIDCookieKeys[c])for(b in a[c])a[c].hasOwnProperty(b)&&Base64CookieKeys[b]&&(Helpers.isObject(a[c][b])&&Object.keys(a[c][b]).length?a[c][b]=Base64$1.encode(JSON.stringify(a[c][b])):delete a[c][b]);return createCookieString(JSON.stringify(a))}function decodeCookies(a){try{if(a){if(a=JSON.parse(revertCookieString(a)),Helpers.isObject(a)&&Object.keys(a).length){for(var b in a.gs)a.gs.hasOwnProperty(b)&&(Base64CookieKeys[b]?a.gs[b]=JSON.parse(Base64$1.decode(a.gs[b])):"ie"===b&&(a.gs[b]=!!a.gs[b]));for(var c in a)if(a.hasOwnProperty(c))if(!SDKv2NonMPIDCookieKeys[c])for(b in a[c])a[c].hasOwnProperty(b)&&Base64CookieKeys[b]&&a[c][b].length&&(a[c][b]=JSON.parse(Base64$1.decode(a[c][b])));else"l"===c&&(a[c]=!!a[c]);}return JSON.stringify(a)}}catch(a){mParticle.Logger.error("Problem with decoding cookie",a);}}function replaceCommasWithPipes(a){return a.replace(/,/g,"|")}function replacePipesWithCommas(a){return a.replace(/\|/g,",")}function replaceApostrophesWithQuotes(a){return a.replace(/\'/g,"\"")}function replaceQuotesWithApostrophes(a){return a.replace(/\"/g,"'")}function createCookieString(a){return replaceCommasWithPipes(replaceQuotesWithApostrophes(a))}function revertCookieString(a){return replacePipesWithCommas(replaceApostrophesWithQuotes(a))}function getCookieDomain(){if(mParticle.Store.SDKConfig.cookieDomain)return mParticle.Store.SDKConfig.cookieDomain;var a=getDomain(document,location.hostname);return ""===a?"":"."+a}// This function loops through the parts of a full hostname, attempting to set a cookie on that domain. It will set a cookie at the highest level possible.
// For example subdomain.domain.co.uk would try the following combinations:
// "co.uk" -> fail
// "domain.co.uk" -> success, return
// "subdomain.domain.co.uk" -> skipped, because already found
function getDomain(a,b){var c,d,e=b.split(".");for(c=e.length-1;0<=c;c--)if(d=e.slice(c).join("."),a.cookie="mptest=cookie;domain=."+d+";",-1<a.cookie.indexOf("mptest=cookie"))return a.cookie="mptest=;domain=."+d+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",d;return ""}function getUserIdentities(a){var b=getPersistence();return b&&b[a]&&b[a].ui?b[a].ui:{}}function getAllUserAttributes(a){var b=getPersistence();return b&&b[a]&&b[a].ua?b[a].ua:{}}function getCartProducts(a){var b,c=localStorage.getItem(mParticle.Store.prodStorageName);return c&&(b=JSON.parse(Base64$1.decode(c)),b&&b[a]&&b[a].cp)?b[a].cp:[]}function setCartProducts(a){if(mParticle.Store.isLocalStorageAvailable)try{window.localStorage.setItem(encodeURIComponent(mParticle.Store.prodStorageName),Base64$1.encode(JSON.stringify(a)));}catch(a){mParticle.Logger.error("Error with setting products on localStorage.");}}function saveUserIdentitiesToCookies(a,b){if(b){var c=getPersistence();c&&(c[a]?c[a].ui=b:c[a]={ui:b},saveCookies(c));}}function saveUserAttributesToCookies(a,b){var c=getPersistence();b&&(c&&(c[a]?c[a].ui=b:c[a]={ui:b}),saveCookies(c));}function saveUserCookieSyncDatesToCookies(a,b){if(b){var c=getPersistence();c&&(c[a]?c[a].csd=b:c[a]={csd:b}),saveCookies(c);}}function saveUserConsentStateToCookies(a,b){//it's currently not supported to set persistence
//for any MPID that's not the current one.
if(b||null===b){var c=getPersistence();c&&(c[a]?c[a].con=Consent.Serialization.toMinifiedJsonObject(b):c[a]={con:Consent.Serialization.toMinifiedJsonObject(b)},saveCookies(c));}}function saveCookies(a){var b,c=encodeCookies(JSON.stringify(a)),d=new Date,e=mParticle.Store.storageName,f=new Date(d.getTime()+1e3*(60*(60*(24*mParticle.Store.SDKConfig.cookieExpiration)))).toGMTString(),g=getCookieDomain();if(b=""===g?"":";domain="+g,mParticle.Store.SDKConfig.useCookieStorage){var h=reduceAndEncodeCookies(a,f,b,mParticle.Store.SDKConfig.maxCookieSize);window.document.cookie=encodeURIComponent(e)+"="+h;}else mParticle.Store.isLocalStorageAvailable&&localStorage.setItem(mParticle.Store.storageName,c);}function getPersistence(){var a;return a=mParticle.Store.SDKConfig.useCookieStorage?getCookie():getLocalStorage(),a}function getConsentState(a){var b=getPersistence();return b&&b[a]&&b[a].con?Consent.Serialization.fromMinifiedJsonObject(b[a].con):null}function getFirstSeenTime(a){if(!a)return null;var b=getPersistence();return b&&b[a]&&b[a].fst?b[a].fst:null}/**
 * set the "first seen" time for a user. the time will only be set once for a given
 * mpid after which subsequent calls will be ignored
 */function setFirstSeenTime(a,b){if(a){b||(b=new Date().getTime());var c=getPersistence();c&&(!c[a]&&(c[a]={}),!c[a].fst&&(c[a].fst=b,saveCookies(c)));}}/**
 * returns the "last seen" time for a user. If the mpid represents the current user, the
 * return value will always be the current time, otherwise it will be to stored "last seen"
 * time
 */function getLastSeenTime(a){if(!a)return null;if(a===mParticle.Identity.getCurrentUser().getMPID())//if the mpid is the current user, its last seen time is the current time
return new Date().getTime();var b=getPersistence();return b&&b[a]&&b[a].lst?b[a].lst:null}function setLastSeenTime(a,b){if(a){b||(b=new Date().getTime());var c=getPersistence();c&&c[a]&&(c[a].lst=b,saveCookies(c));}}function getDeviceId(){return mParticle.Store.deviceId}function resetPersistence(){if(removeLocalStorage(StorageNames$1.localStorageName),removeLocalStorage(StorageNames$1.localStorageNameV3),removeLocalStorage(StorageNames$1.localStorageNameV4),removeLocalStorage(mParticle.Store.prodStorageName),removeLocalStorage(StorageNames$1.localStorageProductsV4),expireCookies(StorageNames$1.cookieName),expireCookies(StorageNames$1.cookieNameV2),expireCookies(StorageNames$1.cookieNameV3),expireCookies(StorageNames$1.cookieNameV4),mParticle._isTestEnv){removeLocalStorage(Helpers.createMainStorageName("abcdef")),expireCookies(Helpers.createMainStorageName("abcdef")),removeLocalStorage(Helpers.createProductStorageName("abcdef"));}}// Forwarder Batching Code
var forwardingStatsBatches={uploadsTable:{},forwardingStatsEventQueue:[]};var Persistence = {useLocalStorage:useLocalStorage,initializeStorage:initializeStorage,update:update,determineLocalStorageAvailability:determineLocalStorageAvailability,getUserProductsFromLS:getUserProductsFromLS,getAllUserProductsFromLS:getAllUserProductsFromLS,setLocalStorage:setLocalStorage,getLocalStorage:getLocalStorage,storeDataInMemory:storeDataInMemory,retrieveDeviceId:retrieveDeviceId,parseDeviceId:parseDeviceId,expireCookies:expireCookies,getCookie:getCookie,setCookie:setCookie,reduceAndEncodeCookies:reduceAndEncodeCookies,findPrevCookiesBasedOnUI:findPrevCookiesBasedOnUI,replaceCommasWithPipes:replaceCommasWithPipes,replacePipesWithCommas:replacePipesWithCommas,replaceApostrophesWithQuotes:replaceApostrophesWithQuotes,replaceQuotesWithApostrophes:replaceQuotesWithApostrophes,createCookieString:createCookieString,revertCookieString:revertCookieString,decodeCookies:decodeCookies,getCookieDomain:getCookieDomain,getUserIdentities:getUserIdentities,getAllUserAttributes:getAllUserAttributes,getCartProducts:getCartProducts,setCartProducts:setCartProducts,saveCookies:saveCookies,saveUserIdentitiesToCookies:saveUserIdentitiesToCookies,saveUserAttributesToCookies:saveUserAttributesToCookies,saveUserCookieSyncDatesToCookies:saveUserCookieSyncDatesToCookies,saveUserConsentStateToCookies:saveUserConsentStateToCookies,getPersistence:getPersistence,getDeviceId:getDeviceId,resetPersistence:resetPersistence,getConsentState:getConsentState,forwardingStatsBatches:forwardingStatsBatches,getFirstSeenTime:getFirstSeenTime,getLastSeenTime:getLastSeenTime,setFirstSeenTime:setFirstSeenTime,setLastSeenTime:setLastSeenTime};

var Messages$2=Constants.Messages,cookieSyncManager={attemptCookieSync:function attemptCookieSync(a,b){var c,d,e,f,g;b&&!mParticle.Store.webviewBridgeEnabled&&mParticle.Store.pixelConfigurations.forEach(function(h){c={moduleId:h.moduleId,frequencyCap:h.frequencyCap,pixelUrl:cookieSyncManager.replaceAmp(h.pixelUrl),redirectUrl:h.redirectUrl?cookieSyncManager.replaceAmp(h.redirectUrl):null},e=cookieSyncManager.replaceMPID(c.pixelUrl,b),f=c.redirectUrl?cookieSyncManager.replaceMPID(c.redirectUrl,b):"",g=e+encodeURIComponent(f);var i=Persistence.getPersistence();return a&&a!==b?void(i&&i[b]&&(!i[b].csd&&(i[b].csd={}),performCookieSync(g,c.moduleId,b,i[b].csd))):void(i[b]&&(!i[b].csd&&(i[b].csd={}),d=i[b].csd[c.moduleId.toString()]?i[b].csd[c.moduleId.toString()]:null,d?new Date().getTime()>new Date(d).getTime()+24*(60*(1e3*(60*c.frequencyCap)))&&performCookieSync(g,c.moduleId,b,i[b].csd):performCookieSync(g,c.moduleId,b,i[b].csd)))});},replaceMPID:function replaceMPID(a,b){return a.replace("%%mpid%%",b)},replaceAmp:function replaceAmp(a){return a.replace(/&amp;/g,"&")}};function performCookieSync(a,b,c,d){var e=document.createElement("img");mParticle.Logger.verbose(Messages$2.InformationMessages.CookieSync),e.src=a,d[b.toString()]=new Date().getTime(),Persistence.saveUserCookieSyncDatesToCookies(c,d);}

var MessageType$1=Types.MessageType,ApplicationTransitionType$1=Types.ApplicationTransitionType,parseNumber$1=Helpers.parseNumber;function convertCustomFlags(a,b){var c=[];for(var d in b.flags={},a.CustomFlags)c=[],a.CustomFlags.hasOwnProperty(d)&&(Array.isArray(a.CustomFlags[d])?a.CustomFlags[d].forEach(function(a){("number"==typeof a||"string"==typeof a||"boolean"==typeof a)&&c.push(a.toString());}):("number"==typeof a.CustomFlags[d]||"string"==typeof a.CustomFlags[d]||"boolean"==typeof a.CustomFlags[d])&&c.push(a.CustomFlags[d].toString()),c.length&&(b.flags[d]=c));}function appendUserInfo(a,b){if(b){if(!a)return b.MPID=null,b.ConsentState=null,b.UserAttributes=null,void(b.UserIdentities=null);if(!(b.MPID&&b.MPID===a.getMPID())){b.MPID=a.getMPID(),b.ConsentState=a.getConsentState(),b.UserAttributes=a.getAllUserAttributes();var c=a.getUserIdentities().userIdentities,d={};for(var e in c){var f=Types.IdentityType.getIdentityType(e);!1!==f&&(d[f]=c[e]);}var g=[];if(Helpers.isObject(d)&&Object.keys(d).length)for(var h in d){var i={};i.Identity=d[h],i.Type=Helpers.parseNumber(h),g.push(i);}b.UserIdentities=g;}}}function convertProductListToDTO(a){return a?a.map(function(a){return convertProductToDTO(a)}):[]}function convertProductToDTO(a){return {id:Helpers.parseStringOrNumber(a.Sku),nm:Helpers.parseStringOrNumber(a.Name),pr:parseNumber$1(a.Price),qt:parseNumber$1(a.Quantity),br:Helpers.parseStringOrNumber(a.Brand),va:Helpers.parseStringOrNumber(a.Variant),ca:Helpers.parseStringOrNumber(a.Category),ps:parseNumber$1(a.Position),cc:Helpers.parseStringOrNumber(a.CouponCode),tpa:parseNumber$1(a.TotalAmount),attrs:a.Attributes}}function convertToConsentStateDTO(a){if(!a)return null;var b={},c=a.getGDPRConsentState();if(c){var d={};for(var e in b.gdpr=d,c)if(c.hasOwnProperty(e)){var f=c[e];b.gdpr[e]={},"boolean"==typeof f.Consented&&(d[e].c=f.Consented),"number"==typeof f.Timestamp&&(d[e].ts=f.Timestamp),"string"==typeof f.ConsentDocument&&(d[e].d=f.ConsentDocument),"string"==typeof f.Location&&(d[e].l=f.Location),"string"==typeof f.HardwareId&&(d[e].h=f.HardwareId);}}return b}function createEventObject(a){var b={},c={},d=a.messageType===Types.MessageType.OptOut?!mParticle.Store.isEnabled:null;if(mParticle.Store.sessionId||a.messageType==Types.MessageType.OptOut||mParticle.Store.webviewBridgeEnabled){c=a.hasOwnProperty("toEventAPIObject")?a.toEventAPIObject():{EventName:a.name||a.messageType,EventCategory:a.eventType,EventAttributes:Helpers.sanitizeAttributes(a.data),EventDataType:a.messageType,CustomFlags:a.customFlags||{},UserAttributeChanges:a.userAttributeChanges,UserIdentityChanges:a.userIdentityChanges},a.messageType!==Types.MessageType.SessionEnd&&(mParticle.Store.dateLastEventSent=new Date),b={Store:mParticle.Store.serverSettings,SDKVersion:Constants.sdkVersion,SessionId:mParticle.Store.sessionId,SessionStartDate:mParticle.Store.sessionStartDate?mParticle.Store.sessionStartDate.getTime():null,Debug:mParticle.Store.SDKConfig.isDevelopmentMode,Location:mParticle.Store.currentPosition,OptOut:d,ExpandedEventCount:0,AppVersion:mParticle.Store.SDKConfig.appVersion,ClientGeneratedId:mParticle.Store.clientId,DeviceId:mParticle.Store.deviceId,IntegrationAttributes:mParticle.Store.integrationAttributes,CurrencyCode:mParticle.Store.currencyCode},c.CurrencyCode=mParticle.Store.currencyCode;var e=mParticle.Identity.getCurrentUser();return appendUserInfo(e,c),a.messageType===Types.MessageType.SessionEnd&&(c.SessionLength=mParticle.Store.dateLastEventSent.getTime()-mParticle.Store.sessionStartDate.getTime(),c.currentSessionMPIDs=mParticle.Store.currentSessionMPIDs,c.EventAttributes=mParticle.Store.sessionAttributes,mParticle.Store.currentSessionMPIDs=[],mParticle.Store.sessionStartDate=null),b.Timestamp=mParticle.Store.dateLastEventSent.getTime(),Helpers.extend({},c,b)}return null}function convertEventToDTO(a,b){var c={n:a.EventName,et:a.EventCategory,ua:a.UserAttributes,ui:a.UserIdentities,ia:a.IntegrationAttributes,str:a.Store,attrs:a.EventAttributes,sdk:a.SDKVersion,sid:a.SessionId,sl:a.SessionLength,ssd:a.SessionStartDate,dt:a.EventDataType,dbg:a.Debug,ct:a.Timestamp,lc:a.Location,o:a.OptOut,eec:a.ExpandedEventCount,av:a.AppVersion,cgid:a.ClientGeneratedId,das:a.DeviceId,mpid:a.MPID,smpids:a.currentSessionMPIDs},d=convertToConsentStateDTO(a.ConsentState);return d&&(c.con=d),a.EventDataType===MessageType$1.AppStateTransition&&(c.fr=b,c.iu=!1,c.at=ApplicationTransitionType$1.AppInit,c.lr=window.location.href||null,c.attrs=null),a.CustomFlags&&convertCustomFlags(a,c),a.EventDataType===MessageType$1.Commerce?(c.cu=a.CurrencyCode,a.ShoppingCart&&(c.sc={pl:convertProductListToDTO(a.ShoppingCart.ProductList)}),a.ProductAction?c.pd={an:a.ProductAction.ProductActionType,cs:parseNumber$1(a.ProductAction.CheckoutStep),co:a.ProductAction.CheckoutOptions,pl:convertProductListToDTO(a.ProductAction.ProductList),ti:a.ProductAction.TransactionId,ta:a.ProductAction.Affiliation,tcc:a.ProductAction.CouponCode,tr:parseNumber$1(a.ProductAction.TotalAmount),ts:parseNumber$1(a.ProductAction.ShippingAmount),tt:parseNumber$1(a.ProductAction.TaxAmount)}:a.PromotionAction?c.pm={an:a.PromotionAction.PromotionActionType,pl:a.PromotionAction.PromotionList.map(function(a){return {id:a.Id,nm:a.Name,cr:a.Creative,ps:a.Position?a.Position:0}})}:a.ProductImpressions&&(c.pi=a.ProductImpressions.map(function(a){return {pil:a.ProductImpressionList,pl:convertProductListToDTO(a.ProductList)}}))):a.EventDataType===MessageType$1.Profile&&(c.pet=a.ProfileMessageType),c}var ServerModel = {createEventObject:createEventObject,convertEventToDTO:convertEventToDTO,convertToConsentStateDTO:convertToConsentStateDTO,appendUserInfo:appendUserInfo};

function getFilteredMparticleUser(a,b){return {getUserIdentities:function getUserIdentities(){var c={},d=Persistence.getUserIdentities(a);for(var e in d)d.hasOwnProperty(e)&&(c[Types.IdentityType.getIdentityName(Helpers.parseNumber(e))]=d[e]);return c=Helpers.filterUserIdentitiesForForwarders(c,b.userIdentityFilters),{userIdentities:c}},getMPID:function getMPID(){return a},getUserAttributesLists:function getUserAttributesLists(a){var b,c={};for(var d in b=this.getAllUserAttributes(),b)b.hasOwnProperty(d)&&Array.isArray(b[d])&&(c[d]=b[d].slice());return c=Helpers.filterUserAttributes(c,a.userAttributeFilters),c},getAllUserAttributes:function getAllUserAttributes(){var c={},d=Persistence.getAllUserAttributes(a);if(d)for(var e in d)d.hasOwnProperty(e)&&(c[e]=Array.isArray(d[e])?d[e].slice():d[e]);return c=Helpers.filterUserAttributes(c,b.userAttributeFilters),c}}}

function initForwarders(a,b){var c=mParticle.Identity.getCurrentUser();!mParticle.Store.webviewBridgeEnabled&&mParticle.Store.configuredForwarders&&(mParticle.Store.configuredForwarders.sort(function(a,b){return a.settings.PriorityValue=a.settings.PriorityValue||0,b.settings.PriorityValue=b.settings.PriorityValue||0,-1*(a.settings.PriorityValue-b.settings.PriorityValue)}),mParticle.Store.activeForwarders=mParticle.Store.configuredForwarders.filter(function(d){if(!isEnabledForUserConsent(d.filteringConsentRuleValues,c))return !1;if(!isEnabledForUserAttributes(d.filteringUserAttributeValue,c))return !1;if(!isEnabledForUnknownUser(d.excludeAnonymousUser,c))return !1;var e=Helpers.filterUserIdentities(a,d.userIdentityFilters),f=Helpers.filterUserAttributes(c?c.getAllUserAttributes():{},d.userAttributeFilters);return d.initialized||(d.init(d.settings,b,!1,null,f,e,mParticle.Store.SDKConfig.appVersion,mParticle.Store.SDKConfig.appName,mParticle.Store.SDKConfig.customFlags,mParticle.Store.clientId),d.initialized=!0),!0}));}function isEnabledForUserConsent(a,b){if(!a||!a.values||!a.values.length)return !0;if(!b)return !1;var c={},d=b.getConsentState();if(d){var e=d.getGDPRConsentState();if(e)for(var f in e)if(e.hasOwnProperty(f)){var g=Helpers.generateHash("1"+f).toString();c[g]=e[f].Consented;}}var h=!1;return a.values.forEach(function(a){if(!h){var b=a.consentPurpose,d=a.hasConsented;c.hasOwnProperty(b)&&c[b]===d&&(h=!0);}}),a.includeOnMatch===h}function isEnabledForUserAttributes(a,b){if(!a||!Helpers.isObject(a)||!Object.keys(a).length)return !0;var c,d,e;if(!b)return !1;e=b.getAllUserAttributes();var f=!1;try{if(e&&Helpers.isObject(e)&&Object.keys(e).length)for(var g in e)if(e.hasOwnProperty(g)&&(c=Helpers.generateHash(g).toString(),d=Helpers.generateHash(e[g]).toString(),c===a.userAttributeName&&d===a.userAttributeValue)){f=!0;break}return !a||a.includeOnMatch===f}catch(a){// in any error scenario, err on side of returning true and forwarding event
return !0}}function isEnabledForUnknownUser(a,b){return !!(b&&b.isLoggedIn()||!a)}function applyToForwarders(a,b){mParticle.Store.activeForwarders.length&&mParticle.Store.activeForwarders.forEach(function(c){var d=c[a];if(d)try{var e=c[a](b);e&&mParticle.Logger.verbose(e);}catch(a){mParticle.Logger.verbose(a);}});}function sendEventToForwarders(a){var b,c,d,e=function(a,b){a.UserIdentities&&a.UserIdentities.length&&a.UserIdentities.forEach(function(c,d){Helpers.inArray(b,c.Type)&&(a.UserIdentities.splice(d,1),0<d&&d--);});},f=function(a,b){var c;if(b)for(var d in a.EventAttributes)a.EventAttributes.hasOwnProperty(d)&&(c=Helpers.generateHash(a.EventCategory+a.EventName+d),Helpers.inArray(b,c)&&delete a.EventAttributes[d]);},g=function(a,b){return !!(a&&a.length&&Helpers.inArray(a,b))},h=[Types.MessageType.PageEvent,Types.MessageType.PageView,Types.MessageType.Commerce];if(!mParticle.Store.webviewBridgeEnabled&&mParticle.Store.activeForwarders){c=Helpers.generateHash(a.EventCategory+a.EventName),d=Helpers.generateHash(a.EventCategory);for(var j=0;j<mParticle.Store.activeForwarders.length;j++){// Check attribute forwarding rule. This rule allows users to only forward an event if a
// specific attribute exists and has a specific value. Alternatively, they can specify
// that an event not be forwarded if the specified attribute name and value exists.
// The two cases are controlled by the "includeOnMatch" boolean value.
// Supported message types for attribute forwarding rules are defined in the forwardingRuleMessageTypes array
if(-1<h.indexOf(a.EventDataType)&&mParticle.Store.activeForwarders[j].filteringEventAttributeValue&&mParticle.Store.activeForwarders[j].filteringEventAttributeValue.eventAttributeName&&mParticle.Store.activeForwarders[j].filteringEventAttributeValue.eventAttributeValue){var k=null;// Attempt to find the attribute in the collection of event attributes
if(a.EventAttributes)for(var l in a.EventAttributes){var m;if(m=Helpers.generateHash(l).toString(),m===mParticle.Store.activeForwarders[j].filteringEventAttributeValue.eventAttributeName&&(k={name:m,value:Helpers.generateHash(a.EventAttributes[l]).toString()}),k)break}var n=null!==k&&k.value===mParticle.Store.activeForwarders[j].filteringEventAttributeValue.eventAttributeValue,o=!0===mParticle.Store.activeForwarders[j].filteringEventAttributeValue.includeOnMatch?n:!n;if(!o)continue}// Clone the event object, as we could be sending different attributes to each forwarder
// Check event filtering rules
if(b={},b=Helpers.extend(!0,b,a),a.EventDataType===Types.MessageType.PageEvent&&(g(mParticle.Store.activeForwarders[j].eventNameFilters,c)||g(mParticle.Store.activeForwarders[j].eventTypeFilters,d)))continue;else if(a.EventDataType===Types.MessageType.Commerce&&g(mParticle.Store.activeForwarders[j].eventTypeFilters,d))continue;else if(a.EventDataType===Types.MessageType.PageView&&g(mParticle.Store.activeForwarders[j].screenNameFilters,c))continue;// Check attribute filtering rules
if(b.EventAttributes&&(a.EventDataType===Types.MessageType.PageEvent?f(b,mParticle.Store.activeForwarders[j].attributeFilters):a.EventDataType===Types.MessageType.PageView&&f(b,mParticle.Store.activeForwarders[j].pageViewAttributeFilters)),e(b,mParticle.Store.activeForwarders[j].userIdentityFilters),b.UserAttributes=Helpers.filterUserAttributes(b.UserAttributes,mParticle.Store.activeForwarders[j].userAttributeFilters),mParticle.Logger.verbose("Sending message to forwarder: "+mParticle.Store.activeForwarders[j].name),mParticle.Store.activeForwarders[j].process){var p=mParticle.Store.activeForwarders[j].process(b);p&&mParticle.Logger.verbose(p);}}}}function callSetUserAttributeOnForwarders(a,b){mParticle.Store.activeForwarders.length&&mParticle.Store.activeForwarders.forEach(function(c){if(c.setUserAttribute&&c.userAttributeFilters&&!Helpers.inArray(c.userAttributeFilters,Helpers.generateHash(a)))try{var d=c.setUserAttribute(a,b);d&&mParticle.Logger.verbose(d);}catch(a){mParticle.Logger.error(a);}});}function setForwarderUserIdentities(a){mParticle.Store.activeForwarders.forEach(function(b){var c=Helpers.filterUserIdentities(a,b.userIdentityFilters);b.setUserIdentity&&c.forEach(function(a){var c=b.setUserIdentity(a.Identity,a.Type);c&&mParticle.Logger.verbose(c);});});}function setForwarderOnUserIdentified(a){mParticle.Store.activeForwarders.forEach(function(b){var c=getFilteredMparticleUser(a.getMPID(),b);if(b.onUserIdentified){var d=b.onUserIdentified(c);d&&mParticle.Logger.verbose(d);}});}function setForwarderOnIdentityComplete(a,b){var c;mParticle.Store.activeForwarders.forEach(function(d){var e=getFilteredMparticleUser(a.getMPID(),d);"identify"===b?d.onIdentifyComplete&&(c=d.onIdentifyComplete(e),c&&mParticle.Logger.verbose(c)):"login"===b?d.onLoginComplete&&(c=d.onLoginComplete(e),c&&mParticle.Logger.verbose(c)):"logout"===b?d.onLogoutComplete&&(c=d.onLogoutComplete(e),c&&mParticle.Logger.verbose(c)):"modify"==b&&d.onModifyComplete&&(c=d.onModifyComplete(e),c&&mParticle.Logger.verbose(c));});}function getForwarderStatsQueue(){return Persistence.forwardingStatsBatches.forwardingStatsEventQueue}function setForwarderStatsQueue(a){Persistence.forwardingStatsBatches.forwardingStatsEventQueue=a;}function configureForwarder(a){var b=null,c=a,d={};// if there are kits inside of mParticle.Store.SDKConfig.kits, then mParticle is self hosted
for(var e in Helpers.isObject(mParticle.Store.SDKConfig.kits)&&0<Object.keys(mParticle.Store.SDKConfig.kits).length?d=mParticle.Store.SDKConfig.kits:0<mParticle.preInit.forwarderConstructors.length&&mParticle.preInit.forwarderConstructors.forEach(function(a){d[a.name]=a;}),d)if(e===c.name&&(c.isDebug===mParticle.Store.SDKConfig.isDevelopmentMode||c.isSandbox===mParticle.Store.SDKConfig.isDevelopmentMode)){b=new d[e].constructor,b.id=c.moduleId,b.isSandbox=c.isDebug||c.isSandbox,b.hasSandbox="true"===c.hasDebugString,b.isVisible=c.isVisible,b.settings=c.settings,b.eventNameFilters=c.eventNameFilters,b.eventTypeFilters=c.eventTypeFilters,b.attributeFilters=c.attributeFilters,b.screenNameFilters=c.screenNameFilters,b.screenNameFilters=c.screenNameFilters,b.pageViewAttributeFilters=c.pageViewAttributeFilters,b.userIdentityFilters=c.userIdentityFilters,b.userAttributeFilters=c.userAttributeFilters,b.filteringEventAttributeValue=c.filteringEventAttributeValue,b.filteringUserAttributeValue=c.filteringUserAttributeValue,b.eventSubscriptionId=c.eventSubscriptionId,b.filteringConsentRuleValues=c.filteringConsentRuleValues,b.excludeAnonymousUser=c.excludeAnonymousUser,mParticle.Store.configuredForwarders.push(b);break}}function configurePixel(a){(a.isDebug===mParticle.Store.SDKConfig.isDevelopmentMode||a.isProduction!==mParticle.Store.SDKConfig.isDevelopmentMode)&&mParticle.Store.pixelConfigurations.push(a);}function processForwarders(a,b){if(!a)mParticle.Logger.warning("No config was passed. Cannot process forwarders");else try{Array.isArray(a.kitConfigs)&&a.kitConfigs.length&&a.kitConfigs.forEach(function(a){configureForwarder(a);}),Array.isArray(a.pixelConfigs)&&a.pixelConfigs.length&&a.pixelConfigs.forEach(function(a){configurePixel(a);}),initForwarders(mParticle.Store.SDKConfig.identifyRequest.userIdentities,b);}catch(a){mParticle.Logger.error("Config was not parsed propertly. Forwarders may not be initialized.");}}var Forwarders = {initForwarders:initForwarders,applyToForwarders:applyToForwarders,sendEventToForwarders:sendEventToForwarders,callSetUserAttributeOnForwarders:callSetUserAttributeOnForwarders,setForwarderUserIdentities:setForwarderUserIdentities,setForwarderOnUserIdentified:setForwarderOnUserIdentified,setForwarderOnIdentityComplete:setForwarderOnIdentityComplete,getForwarderStatsQueue:getForwarderStatsQueue,setForwarderStatsQueue:setForwarderStatsQueue,isEnabledForUserConsent:isEnabledForUserConsent,isEnabledForUserAttributes:isEnabledForUserAttributes,configurePixel:configurePixel,processForwarders:processForwarders};

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var SDKProductActionType;
(function (a) { a[a.Unknown = 0] = "Unknown", a[a.AddToCart = 1] = "AddToCart", a[a.RemoveFromCart = 2] = "RemoveFromCart", a[a.Checkout = 3] = "Checkout", a[a.CheckoutOption = 4] = "CheckoutOption", a[a.Click = 5] = "Click", a[a.ViewDetail = 6] = "ViewDetail", a[a.Purchase = 7] = "Purchase", a[a.Refund = 8] = "Refund", a[a.AddToWishlist = 9] = "AddToWishlist", a[a.RemoveFromWishlist = 10] = "RemoveFromWishlist"; })(SDKProductActionType || (SDKProductActionType = {}));

function ownKeys(a, b) { var c = Object.keys(a); if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function (b) { return Object.getOwnPropertyDescriptor(a, b).enumerable; })), c.push.apply(c, d);
} return c; }
function _objectSpread(a) { for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys(b, !0).forEach(function (c) { defineProperty(a, c, b[c]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(b).forEach(function (c) { Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c)); }); return a; }
function convertEvents(a, b) { if (!a)
    return null; if (!b || 1 > b.length)
    return null; var c = [], d = null, e = !0, f = !1, g = void 0; try {
    for (var h, i, j = b[Symbol.iterator](); !(e = (h = j.next()).done); e = !0)
        if (i = h.value, i) {
            d = i;
            var l = convertEvent(i);
            l && c.push(l);
        }
}
catch (a) {
    f = !0, g = a;
}
finally {
    try {
        e || null == j["return"] || j["return"]();
    }
    finally {
        if (f)
            throw g;
    }
} if (!d)
    return null; var k = { source_request_id: Helpers.generateUniqueId(), mpid: a, timestamp_unixtime_ms: new Date().getTime(), environment: d.Debug ? "development" : "production", events: c, mp_deviceid: d.DeviceId, sdk_version: d.SDKVersion, application_info: { application_version: d.AppVersion }, device_info: { platform: "web", screen_width: window.screen.width, screen_height: window.screen.height }, user_attributes: d.UserAttributes, user_identities: convertUserIdentities(d.UserIdentities), consent_state: convertConsentState(d.ConsentState), integration_attributes: d.IntegrationAttributes }; return k; }
function convertConsentState(a) { if (!a)
    return null; var b = { gdpr: convertGdprConsentState(a.getGDPRConsentState()) }; return b; }
function convertGdprConsentState(a) { if (!a)
    return null; var b = {}; for (var c in a)
    a.hasOwnProperty(c) && (b[c] = { consented: a[c].Consented, hardware_id: a[c].HardwareId, document: a[c].ConsentDocument, timestamp_unixtime_ms: a[c].Timestamp, location: a[c].Location }); return b; }
function convertUserIdentities(a) { if (!a || !a.length)
    return null; var b = {}, c = !0, d = !1, e = void 0; try {
    for (var f, g, h = a[Symbol.iterator](); !(c = (f = h.next()).done); c = !0)
        switch (g = f.value, g.Type) {
            case Types.IdentityType.CustomerId:
                b.customer_id = g.Identity;
                break;
            case Types.IdentityType.Email:
                b.email = g.Identity;
                break;
            case Types.IdentityType.Facebook:
                b.facebook = g.Identity;
                break;
            case Types.IdentityType.FacebookCustomAudienceId:
                b.facebook_custom_audience_id = g.Identity;
                break;
            case Types.IdentityType.Google:
                b.google = g.Identity;
                break;
            case Types.IdentityType.Microsoft:
                b.microsoft = g.Identity;
                break;
            case Types.IdentityType.Other:
                b.other = g.Identity;
                break;
            case Types.IdentityType.Other2:
                b.other_id_2 = g.Identity;
                break;
            case Types.IdentityType.Other3:
                b.other_id_3 = g.Identity;
                break;
            case Types.IdentityType.Other4:
                b.other_id_4 = g.Identity;
                break;
            default:
        }
}
catch (a) {
    d = !0, e = a;
}
finally {
    try {
        c || null == h["return"] || h["return"]();
    }
    finally {
        if (d)
            throw e;
    }
} return b; }
function convertEvent(a) {
    if (!a)
        return null;
    switch (a.EventDataType) {
        case Types.MessageType.AppStateTransition: return convertAST(a);
        case Types.MessageType.Commerce: return convertCommerceEvent(a);
        case Types.MessageType.CrashReport: return convertCrashReportEvent(a);
        case Types.MessageType.OptOut: return convertOptOutEvent(a);
        case Types.MessageType.PageEvent: return convertCustomEvent(a);
        case Types.MessageType.PageView: return convertPageViewEvent(a);
        case Types.MessageType.Profile: //deprecated and not supported by the web SDK
            return null;
        case Types.MessageType.SessionEnd: return convertSessionEndEvent(a);
        case Types.MessageType.SessionStart: return convertSessionStartEvent(a);
        case Types.MessageType.UserAttributeChange: return convertUserAttributeChangeEvent(a);
        case Types.MessageType.UserIdentityChange: return convertUserIdentityChangeEvent(a);
        default:
    }
    return null;
}
function convertProductActionType(a) { if (!a)
    return "unknown"; return a === SDKProductActionType.AddToCart ? "add_to_cart" : a === SDKProductActionType.AddToWishlist ? "add_to_wishlist" : a === SDKProductActionType.Checkout ? "checkout" : a === SDKProductActionType.CheckoutOption ? "checkout_option" : a === SDKProductActionType.Click ? "click" : a === SDKProductActionType.Purchase ? "purchase" : a === SDKProductActionType.Refund ? "refund" : a === SDKProductActionType.RemoveFromCart ? "remove_from_cart" : a === SDKProductActionType.RemoveFromWishlist ? "remove_from_wish_list" : a === SDKProductActionType.ViewDetail ? "view_detail" : "unknown"; }
function convertProductAction(a) { if (!a.ProductAction)
    return null; var b = { action: convertProductActionType(a.ProductAction.ProductActionType), checkout_step: a.ProductAction.CheckoutStep, checkout_options: a.ProductAction.CheckoutOptions, transaction_id: a.ProductAction.TransactionId, affiliation: a.ProductAction.Affiliation, total_amount: a.ProductAction.TotalAmount, tax_amount: a.ProductAction.TaxAmount, shipping_amount: a.ProductAction.ShippingAmount, coupon_code: a.ProductAction.CouponCode, products: convertProducts(a.ProductAction.ProductList) }; return b; }
function convertProducts(a) { if (!a || !a.length)
    return null; var b = [], c = !0, d = !1, e = void 0; try {
    for (var f, g = a[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) {
        var h = f.value, i = { id: h.Sku, name: h.Name, brand: h.Brand, category: h.Category, variant: h.Variant, total_product_amount: h.TotalAmount, position: h.Position, price: h.Price, quantity: h.Quantity, coupon_code: h.CouponCode, custom_attributes: h.Attributes };
        b.push(i);
    }
}
catch (a) {
    d = !0, e = a;
}
finally {
    try {
        c || null == g["return"] || g["return"]();
    }
    finally {
        if (d)
            throw e;
    }
} return b; }
function convertPromotionAction(a) { if (!a.PromotionAction)
    return null; var b = { action: a.PromotionAction.PromotionActionType, promotions: convertPromotions(a.PromotionAction.PromotionList) }; return b; }
function convertPromotions(a) { if (!a || !a.length)
    return null; var b = [], c = !0, d = !1, e = void 0; try {
    for (var f, g = a[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) {
        var h = f.value, i = { id: h.Id, name: h.Name, creative: h.Creative, position: h.Position };
        b.push(i);
    }
}
catch (a) {
    d = !0, e = a;
}
finally {
    try {
        c || null == g["return"] || g["return"]();
    }
    finally {
        if (d)
            throw e;
    }
} return b; }
function convertImpressions(a) { if (!a.ProductImpressions)
    return null; var b = [], c = !0, d = !1, e = void 0; try {
    for (var f, g = a.ProductImpressions[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) {
        var h = f.value, i = { product_impression_list: h.ProductImpressionList, products: convertProducts(h.ProductList) };
        b.push(i);
    }
}
catch (a) {
    d = !0, e = a;
}
finally {
    try {
        c || null == g["return"] || g["return"]();
    }
    finally {
        if (d)
            throw e;
    }
} return b; }
function convertShoppingCart(a) { if (!a.ShoppingCart || !a.ShoppingCart.ProductList || !a.ShoppingCart.ProductList.length)
    return null; var b = { products: convertProducts(a.ShoppingCart.ProductList) }; return b; }
function convertCommerceEvent(a) { var b = convertBaseEventData(a), c = { custom_flags: a.CustomFlags, product_action: convertProductAction(a), promotion_action: convertPromotionAction(a), product_impressions: convertImpressions(a), shopping_cart: convertShoppingCart(a), currency_code: a.CurrencyCode }; return c = Object.assign(c, b), { event_type: "commerce_event", data: c }; }
function convertCrashReportEvent(a) { var b = convertBaseEventData(a), c = { message: a.EventName }; return c = Object.assign(c, b), { event_type: "crash_report", data: c }; }
function convertAST(a) { var b = convertBaseEventData(a), c = { application_transition_type: "application_initialized", is_first_run: a.IsFirstRun, is_upgrade: !1 }; return c = Object.assign(c, b), { event_type: "application_state_transition", data: c }; }
function convertSessionEndEvent(a) {
    var b = convertBaseEventData(a), c = { session_duration_ms: a.SessionLength //note: External Events DTO does not support the session mpids array as of this time.
        //spanning_mpids: sdkEvent.SessionMpids
    };
    return c = Object.assign(c, b), { event_type: "session_end", data: c };
}
function convertSessionStartEvent(a) { var b = convertBaseEventData(a), c = {}; return c = Object.assign(c, b), { event_type: "session_start", data: c }; }
function convertPageViewEvent(a) { var b = convertBaseEventData(a), c = { custom_flags: a.CustomFlags, screen_name: a.EventName }; return c = Object.assign(c, b), { event_type: "screen_view", data: c }; }
function convertOptOutEvent(a) { var b = convertBaseEventData(a), c = { is_opted_out: a.OptOut }; return c = Object.assign(c, b), { event_type: "opt_out", data: c }; }
function convertCustomEvent(a) { var b = convertBaseEventData(a), c = { custom_event_type: convertSdkEventType(a.EventCategory), custom_flags: a.CustomFlags, event_name: a.EventName }; return c = Object.assign(c, b), { event_type: "custom_event", data: c }; }
function convertSdkEventType(a) { return a === Types.EventType.Other ? "other" : a === Types.EventType.Location ? "location" : a === Types.EventType.Navigation ? "navigation" : a === Types.EventType.Search ? "search" : a === Types.EventType.Social ? "social" : a === Types.EventType.Transaction ? "transaction" : a === Types.EventType.UserContent ? "user_content" : a === Types.EventType.UserPreference ? "user_preference" : a === Types.CommerceEventType.ProductAddToCart ? "add_to_cart" : a === Types.CommerceEventType.ProductAddToWishlist ? "add_to_wishlist" : a === Types.CommerceEventType.ProductCheckout ? "checkout" : a === Types.CommerceEventType.ProductCheckoutOption ? "checkout_option" : a === Types.CommerceEventType.ProductClick ? "click" : a === Types.CommerceEventType.ProductImpression ? "impression" : a === Types.CommerceEventType.ProductPurchase ? "purchase" : a === Types.CommerceEventType.ProductRefund ? "refund" : a === Types.CommerceEventType.ProductRemoveFromCart ? "remove_from_cart" : a === Types.CommerceEventType.ProductRemoveFromWishlist ? "remove_from_wishlist" : a === Types.CommerceEventType.ProductViewDetail ? "view_detail" : a === Types.CommerceEventType.PromotionClick ? "promotion_click" : a === Types.CommerceEventType.PromotionView ? "promotion_view" : "unknown"; }
function convertBaseEventData(a) { var b = { timestamp_unixtime_ms: a.Timestamp, session_uuid: a.SessionId, session_start_unixtime_ms: a.SessionStartDate, custom_attributes: a.EventAttributes, location: a.Location }; return b; }
function convertUserAttributeChangeEvent(a) { var b = convertBaseEventData(a), c = { user_attribute_name: a.UserAttributeChanges.UserAttributeName, new: a.UserAttributeChanges.New, old: a.UserAttributeChanges.Old, deleted: a.UserAttributeChanges.Deleted, is_new_attribute: a.UserAttributeChanges.IsNewAttribute }; return c = _objectSpread({}, c, {}, b), { event_type: "user_attribute_change", data: c }; }
function convertUserIdentityChangeEvent(a) { var b = convertBaseEventData(a), c = { new: { identity_type: a.UserIdentityChanges.New.IdentityType, identity: a.UserIdentityChanges.New.Identity || null, timestamp_unixtime_ms: a.Timestamp, created_this_batch: a.UserIdentityChanges.New.CreatedThisBatch }, old: { identity_type: a.UserIdentityChanges.Old.IdentityType, identity: a.UserIdentityChanges.Old.Identity || null, timestamp_unixtime_ms: a.Timestamp, created_this_batch: a.UserIdentityChanges.Old.CreatedThisBatch } }; return c = Object.assign(c, b), { event_type: "user_identity_change", data: c }; }

var BatchUploader = /*#__PURE__*/ function () {
    function a(b, c) { var d = this; classCallCheck(this, a), defineProperty(this, "uploadIntervalMillis", void 0), defineProperty(this, "pendingEvents", void 0), defineProperty(this, "pendingUploads", void 0), defineProperty(this, "webSdk", void 0), defineProperty(this, "uploadUrl", void 0), defineProperty(this, "batchingEnabled", void 0), this.webSdk = b, this.uploadIntervalMillis = c, this.batchingEnabled = c >= a.MINIMUM_INTERVAL_MILLIS, this.uploadIntervalMillis < a.MINIMUM_INTERVAL_MILLIS && (this.uploadIntervalMillis = a.MINIMUM_INTERVAL_MILLIS), this.pendingEvents = [], this.pendingUploads = []; var e = this.webSdk.Store, f = e.SDKConfig, g = e.devToken, h = Helpers.createServiceUrl(f.v3SecureServiceUrl, g); this.uploadUrl = "".concat(h, "/events"), setTimeout(function () { d.prepareAndUpload(!0, !1); }, this.uploadIntervalMillis), this.addEventListeners(); }
    return createClass(a, [{ key: "addEventListeners", value: function addEventListeners() { var a = this; window.addEventListener("beforeunload", function () { a.prepareAndUpload(!1, a.isBeaconAvailable()); }), window.addEventListener("pagehide", function () { a.prepareAndUpload(!1, a.isBeaconAvailable()); }); } }, { key: "isBeaconAvailable", value: function isBeaconAvailable() { return !!navigator.sendBeacon; } }, { key: "queueEvent", value: function queueEvent(a) { a && (a.IsFirstRun = this.webSdk.Store.isFirstRun, this.pendingEvents.push(a), this.webSdk.Logger.verbose("Queuing event: ".concat(JSON.stringify(a))), this.webSdk.Logger.verbose("Queued event count: ".concat(this.pendingEvents.length)), !this.batchingEnabled && this.prepareAndUpload(!1, !1)); } /**
                 * This implements crucial logic to:
                 * - bucket pending events by MPID, and then by Session, and upload individual batches for each bucket.
                 *
                 * In the future this should enforce other requirements such as maximum batch size.
                 *
                 * @param sdkEvents current pending events
                 * @param defaultUser the user to reference for events that are missing data
                 */
        }, { key: "prepareAndUpload",
            value: function () { var b = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function b(c, d) { var e, f, g, h, i, j, k, l = this; return regenerator.wrap(function (b) { for (;;)
                switch (b.prev = b.next) {
                    case 0: return e = this.webSdk.Identity.getCurrentUser(), f = this.pendingEvents, this.pendingEvents = [], g = a.createNewUploads(f, e), g && g.length && (h = this.pendingUploads).push.apply(h, toConsumableArray(g)), i = this.pendingUploads, this.pendingUploads = [], b.next = 9, this.upload(this.webSdk.Logger, i, d);
                    case 9: j = b.sent, j && j.length && (k = this.pendingUploads).unshift.apply(k, toConsumableArray(j)), c && setTimeout(function () { l.prepareAndUpload(!0, !1); }, this.uploadIntervalMillis);
                    case 12:
                    case "end": return b.stop();
                } }, b, this); })); return function prepareAndUpload() { return b.apply(this, arguments); }; }() }, { key: "upload", value: function () { var b = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function b(c, d, e) { var f, g, h, j; return regenerator.wrap(function (b) { for (;;)
                switch (b.prev = b.next) {
                    case 0:
                        if (d && !(1 > d.length)) {
                            b.next = 2;
                            break;
                        }
                        return b.abrupt("return", null);
                    case 2: c.verbose("Uploading batches: ".concat(JSON.stringify(d))), c.verbose("Batch count: ".concat(d.length)), f = 0;
                    case 5:
                        if (!(f < d.length)) {
                            b.next = 37;
                            break;
                        }
                        if (g = { method: "POST", headers: { Accept: a.CONTENT_TYPE, "Content-Type": "text/plain;charset=UTF-8" }, body: JSON.stringify(d[f]) }, b.prev = 7, !e) {
                            b.next = 13;
                            break;
                        }
                        h = new Blob([g.body], { type: "text/plain;charset=UTF-8" }), navigator.sendBeacon(this.uploadUrl, h), b.next = 28;
                        break;
                    case 13: return c.verbose("Uploading request ID: ".concat(d[f].source_request_id)), b.next = 16, fetch(this.uploadUrl, g);
                    case 16:
                        if (j = b.sent, !j.ok) {
                            b.next = 21;
                            break;
                        }
                        c.verbose("Upload success for request ID: ".concat(d[f].source_request_id)), b.next = 28;
                        break;
                    case 21:
                        if (!(500 <= j.status || 429 === j.status)) {
                            b.next = 25;
                            break;
                        }
                        return b.abrupt("return", d.slice(f, d.length));
                    case 25:
                        if (!(401 <= j.status)) {
                            b.next = 28;
                            break;
                        }
                        return c.error("HTTP error status ".concat(j.status, " while uploading - please verify your API key.")), b.abrupt("return", null);
                    case 28:
                        b.next = 34;
                        break;
                    case 30: return b.prev = 30, b.t0 = b["catch"](7), c.error("Exception while uploading: ".concat(b.t0)), b.abrupt("return", d.slice(f, d.length));
                    case 34:
                        f++, b.next = 5;
                        break;
                    case 37: return b.abrupt("return", null);
                    case 38:
                    case "end": return b.stop();
                } }, b, this, [[7, 30]]); })); return function upload() { return b.apply(this, arguments); }; }() }], [{ key: "createNewUploads", value: function createNewUploads(a, b) {
                if (!b || !a || !a.length)
                    return null; //bucket by MPID, and then by session, ordered by timestamp
                var c = [], d = new Map, e = !0, f = !1, g = void 0;
                try {
                    for (var h, i, j = a[Symbol.iterator](); !(e = (h = j.next()).done); e = !0) { //on initial startup, there may be events logged without an mpid.
                        if (i = h.value, !i.MPID) {
                            var B = b.getMPID();
                            i.MPID = B;
                        }
                        var C = d.get(i.MPID);
                        C || (C = []), C.push(i), d.set(i.MPID, C);
                    }
                }
                catch (a) {
                    f = !0, g = a;
                }
                finally {
                    try {
                        e || null == j["return"] || j["return"]();
                    }
                    finally {
                        if (f)
                            throw g;
                    }
                }
                for (var k = 0, l = Array.from(d.entries()); k < l.length; k++) {
                    var m = l[k], n = m[0], o = m[1], p = new Map, q = !0, r = !1, s = void 0;
                    try {
                        for (var t, u = o[Symbol.iterator](); !(q = (t = u.next()).done); q = !0) {
                            var v = t.value, w = p.get(v.SessionId);
                            w || (w = []), w.push(v), p.set(v.SessionId, w);
                        }
                    }
                    catch (a) {
                        r = !0, s = a;
                    }
                    finally {
                        try {
                            q || null == u["return"] || u["return"]();
                        }
                        finally {
                            if (r)
                                throw s;
                        }
                    }
                    for (var x = 0, y = Array.from(p.entries()); x < y.length; x++) {
                        var z = y[x], A = convertEvents(n, z[1]);
                        A && c.push(A);
                    }
                }
                return c;
            } }]), a;
}();
defineProperty(BatchUploader, "CONTENT_TYPE", "text/plain;charset=UTF-8"), defineProperty(BatchUploader, "MINIMUM_INTERVAL_MILLIS", 500);

var HTTPCodes=Constants.HTTPCodes,Messages$3=Constants.Messages,uploader=null;function queueEventForBatchUpload(a){if(!uploader){var b=Helpers.getFeatureFlag(Constants.FeatureFlags.EventBatchingIntervalMillis);uploader=new BatchUploader(mParticle,b);}uploader.queueEvent(a);}function shouldEnableBatching(){if(!window.fetch)return !1;var a=Helpers.getFeatureFlag(Constants.FeatureFlags.EventsV3);if(!a||!Helpers.Validators.isNumber(a))return !1;var b=Helpers.getRampNumber(mParticle.Store.deviceId);return a>=b}function processQueuedEvents(){var a,b=mParticle.Identity.getCurrentUser();if(b&&(a=b.getMPID()),mParticle.Store.eventQueue.length&&a){var c=mParticle.Store.eventQueue;mParticle.Store.eventQueue=[],appendUserInfoToEvents(b,c),c.forEach(function(a){sendEventToServer(a);});}}function appendUserInfoToEvents(a,b){b.forEach(function(b){b.MPID||ServerModel.appendUserInfo(a,b);});}function sendEventToServer(a){if(mParticle.Store.webviewBridgeEnabled)return void NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.LogEvent,JSON.stringify(a));var b,c=mParticle.Identity.getCurrentUser();// We queue events if there is no MPID (MPID is null, or === 0), or there are integrations that that require this to stall because integration attributes
// need to be set, or if we are still fetching the config (self hosted only), and so require delaying events
return c&&(b=c.getMPID()),mParticle.Store.requireDelay=Helpers.isDelayedByIntegration(mParticle.preInit.integrationDelays,mParticle.Store.integrationDelayTimeoutStart,Date.now()),b&&!mParticle.Store.requireDelay&&mParticle.Store.configurationLoaded?void(processQueuedEvents(),shouldEnableBatching()?queueEventForBatchUpload(a):sendSingleEventToServer(a),a&&a.EventName!==Types.MessageType.AppStateTransition&&Forwarders.sendEventToForwarders(a)):(mParticle.Logger.verbose("Event was added to eventQueue. eventQueue will be processed once a valid MPID is returned or there is no more integration imposed delay."),void mParticle.Store.eventQueue.push(a))}function sendSingleEventToServer(a){if(a.EventDataType!==Types.MessageType.Media){var b,c=function(){4===b.readyState&&(mParticle.Logger.verbose("Received "+b.statusText+" from server"),parseEventResponse(b.responseText));};if(!a)return void mParticle.Logger.error(Messages$3.ErrorMessages.EventEmpty);if(mParticle.Logger.verbose(Messages$3.InformationMessages.SendHttp),b=Helpers.createXHR(c),b)try{b.open("post",Helpers.createServiceUrl(mParticle.Store.SDKConfig.v2SecureServiceUrl,mParticle.Store.devToken)+"/Events"),b.send(JSON.stringify(ServerModel.convertEventToDTO(a,mParticle.Store.isFirstRun)));}catch(a){mParticle.Logger.error("Error sending event to mParticle servers. "+a);}}}function parseEventResponse(a){var b,c,d,e=new Date;if(a)try{if(mParticle.Logger.verbose("Parsing response from server"),b=JSON.parse(a),b&&b.Store){for(c in mParticle.Logger.verbose("Parsed store from response, updating local settings"),mParticle.Store.serverSettings||(mParticle.Store.serverSettings={}),b.Store)b.Store.hasOwnProperty(c)&&(d=b.Store[c],!d.Value||new Date(d.Expires)<e?mParticle.Store.serverSettings.hasOwnProperty(c)&&delete mParticle.Store.serverSettings[c]:mParticle.Store.serverSettings[c]=d);Persistence.update();}}catch(a){mParticle.Logger.error("Error parsing JSON response from server: "+a.name);}}function sendAliasRequest(a,b){var c,d=function(){if(4===c.readyState){//only parse error messages from failing requests
if(mParticle.Logger.verbose("Received "+c.statusText+" from server"),200!==c.status&&202!==c.status&&c.responseText){var a=JSON.parse(c.responseText);if(a.hasOwnProperty("message")){var d=a.message;return void Helpers.invokeAliasCallback(b,c.status,d)}}Helpers.invokeAliasCallback(b,c.status);}};if(mParticle.Logger.verbose(Messages$3.InformationMessages.SendAliasHttp),c=Helpers.createXHR(d),c)try{c.open("post",Helpers.createServiceUrl(mParticle.Store.SDKConfig.aliasUrl,mParticle.Store.devToken)+"/Alias"),c.send(JSON.stringify(a));}catch(a){Helpers.invokeAliasCallback(b,HTTPCodes.noHttpCoverage,a),mParticle.Logger.error("Error sending alias request to mParticle servers. "+a);}}function sendIdentityRequest(a,b,c,d,e,f){var g,h,i=function(){4===g.readyState&&(mParticle.Logger.verbose("Received "+g.statusText+" from server"),e(g,h,c,d,b));};if(mParticle.Logger.verbose(Messages$3.InformationMessages.SendIdentityBegin),!a)return void mParticle.Logger.error(Messages$3.ErrorMessages.APIRequestEmpty);if(mParticle.Logger.verbose(Messages$3.InformationMessages.SendIdentityHttp),g=Helpers.createXHR(i),g)try{mParticle.Store.identityCallInFlight?Helpers.invokeCallback(c,HTTPCodes.activeIdentityRequest,"There is currently an Identity request processing. Please wait for this to return before requesting again"):(h=f||null,"modify"===b?g.open("post",Helpers.createServiceUrl(mParticle.Store.SDKConfig.identityUrl)+f+"/"+b):g.open("post",Helpers.createServiceUrl(mParticle.Store.SDKConfig.identityUrl)+b),g.setRequestHeader("Content-Type","application/json"),g.setRequestHeader("x-mp-key",mParticle.Store.devToken),mParticle.Store.identityCallInFlight=!0,g.send(JSON.stringify(a)));}catch(a){mParticle.Store.identityCallInFlight=!1,Helpers.invokeCallback(c,HTTPCodes.noHttpCoverage,a),mParticle.Logger.error("Error sending identity request to servers with status code "+g.status+" - "+a);}}function sendBatchForwardingStatsToServer(a,b){var c,d;try{c=Helpers.createServiceUrl(mParticle.Store.SDKConfig.v2SecureServiceUrl,mParticle.Store.devToken),d={uuid:Helpers.generateUniqueId(),data:a},b&&(b.open("post",c+"/Forwarding"),b.send(JSON.stringify(d)));}catch(a){mParticle.Logger.error("Error sending forwarding stats to mParticle servers.");}}function sendSingleForwardingStatsToServer(a){var b,c;try{var d=function(){4===e.readyState&&202===e.status&&mParticle.Logger.verbose("Successfully sent  "+e.statusText+" from server");},e=Helpers.createXHR(d);b=Helpers.createServiceUrl(mParticle.Store.SDKConfig.v1SecureServiceUrl,mParticle.Store.devToken),c=a,e&&(e.open("post",b+"/Forwarding"),e.send(JSON.stringify(c)));}catch(a){mParticle.Logger.error("Error sending forwarding stats to mParticle servers.");}}function getSDKConfiguration(a,b,c){var d;try{var e=function(){4===f.readyState&&(200===f.status?(b=Helpers.extend({},b,JSON.parse(f.responseText)),c(a,b),mParticle.Logger.verbose("Successfully received configuration from server")):(c(a,b),mParticle.Logger.verbose("Issue with receiving configuration from server, received HTTP Code of "+f.status)));},f=Helpers.createXHR(e);d="https://"+mParticle.Store.SDKConfig.configUrl+a+"/config?env=",d+=b.isDevelopmentMode?"1":"0",f&&(f.open("get",d),f.send(null));}catch(d){c(a,b),mParticle.Logger.error("Error getting forwarder configuration from mParticle servers.");}}function prepareForwardingStats(a,b){var c,d=Forwarders.getForwarderStatsQueue();a&&a.isVisible&&(c={mid:a.id,esid:a.eventSubscriptionId,n:b.EventName,attrs:b.EventAttributes,sdk:b.SDKVersion,dt:b.EventDataType,et:b.EventCategory,dbg:b.Debug,ct:b.Timestamp,eec:b.ExpandedEventCount},Helpers.getFeatureFlag(Constants.FeatureFlags.ReportBatching)?(d.push(c),Forwarders.setForwarderStatsQueue(d)):sendSingleForwardingStatsToServer(c));}var ApiClient = {sendEventToServer:sendEventToServer,sendIdentityRequest:sendIdentityRequest,sendBatchForwardingStatsToServer:sendBatchForwardingStatsToServer,sendSingleForwardingStatsToServer:sendSingleForwardingStatsToServer,sendAliasRequest:sendAliasRequest,getSDKConfiguration:getSDKConfiguration,prepareForwardingStats:prepareForwardingStats,processQueuedEvents:processQueuedEvents,appendUserInfoToEvents:appendUserInfoToEvents,shouldEnableBatching:shouldEnableBatching};

var Validators$1=Helpers.Validators,Messages$4=Constants.Messages;function convertTransactionAttributesToProductAction(a,b){b.TransactionId=a.Id,b.Affiliation=a.Affiliation,b.CouponCode=a.CouponCode,b.TotalAmount=a.Revenue,b.ShippingAmount=a.Shipping,b.TaxAmount=a.Tax;}function getProductActionEventName(a){switch(a){case Types.ProductActionType.AddToCart:return "AddToCart";case Types.ProductActionType.AddToWishlist:return "AddToWishlist";case Types.ProductActionType.Checkout:return "Checkout";case Types.ProductActionType.CheckoutOption:return "CheckoutOption";case Types.ProductActionType.Click:return "Click";case Types.ProductActionType.Purchase:return "Purchase";case Types.ProductActionType.Refund:return "Refund";case Types.ProductActionType.RemoveFromCart:return "RemoveFromCart";case Types.ProductActionType.RemoveFromWishlist:return "RemoveFromWishlist";case Types.ProductActionType.ViewDetail:return "ViewDetail";case Types.ProductActionType.Unknown:default:return "Unknown";}}function getPromotionActionEventName(a){return a===Types.PromotionActionType.PromotionClick?"PromotionClick":a===Types.PromotionActionType.PromotionView?"PromotionView":"Unknown"}function convertProductActionToEventType(a){return a===Types.ProductActionType.AddToCart?Types.CommerceEventType.ProductAddToCart:a===Types.ProductActionType.AddToWishlist?Types.CommerceEventType.ProductAddToWishlist:a===Types.ProductActionType.Checkout?Types.CommerceEventType.ProductCheckout:a===Types.ProductActionType.CheckoutOption?Types.CommerceEventType.ProductCheckoutOption:a===Types.ProductActionType.Click?Types.CommerceEventType.ProductClick:a===Types.ProductActionType.Purchase?Types.CommerceEventType.ProductPurchase:a===Types.ProductActionType.Refund?Types.CommerceEventType.ProductRefund:a===Types.ProductActionType.RemoveFromCart?Types.CommerceEventType.ProductRemoveFromCart:a===Types.ProductActionType.RemoveFromWishlist?Types.CommerceEventType.ProductRemoveFromWishlist:a===Types.ProductActionType.Unknown?Types.EventType.Unknown:a===Types.ProductActionType.ViewDetail?Types.CommerceEventType.ProductViewDetail:(mParticle.Logger.error("Could not convert product action type "+a+" to event type"),null)}function convertPromotionActionToEventType(a){return a===Types.PromotionActionType.PromotionClick?Types.CommerceEventType.PromotionClick:a===Types.PromotionActionType.PromotionView?Types.CommerceEventType.PromotionView:(mParticle.Logger.error("Could not convert promotion action type "+a+" to event type"),null)}function generateExpandedEcommerceName(a,b){return "eCommerce - "+a+" - "+(b?"Total":"Item")}function extractProductAttributes(a,b){b.CouponCode&&(a["Coupon Code"]=b.CouponCode),b.Brand&&(a.Brand=b.Brand),b.Category&&(a.Category=b.Category),b.Name&&(a.Name=b.Name),b.Sku&&(a.Id=b.Sku),b.Price&&(a["Item Price"]=b.Price),b.Quantity&&(a.Quantity=b.Quantity),b.Position&&(a.Position=b.Position),b.Variant&&(a.Variant=b.Variant),a["Total Product Amount"]=b.TotalAmount||0;}function extractTransactionId(a,b){b.TransactionId&&(a["Transaction Id"]=b.TransactionId);}function extractActionAttributes(a,b){extractTransactionId(a,b),b.Affiliation&&(a.Affiliation=b.Affiliation),b.CouponCode&&(a["Coupon Code"]=b.CouponCode),b.TotalAmount&&(a["Total Amount"]=b.TotalAmount),b.ShippingAmount&&(a["Shipping Amount"]=b.ShippingAmount),b.TaxAmount&&(a["Tax Amount"]=b.TaxAmount),b.CheckoutOptions&&(a["Checkout Options"]=b.CheckoutOptions),b.CheckoutStep&&(a["Checkout Step"]=b.CheckoutStep);}function extractPromotionAttributes(a,b){b.Id&&(a.Id=b.Id),b.Creative&&(a.Creative=b.Creative),b.Name&&(a.Name=b.Name),b.Position&&(a.Position=b.Position);}function buildProductList(a,b){return b?Array.isArray(b)?b:[b]:a.ShoppingCart.ProductList}function createProduct(a,b,c,d,e,f,g,h,i,j){return (j=Helpers.sanitizeAttributes(j),"string"!=typeof a)?(mParticle.Logger.error("Name is required when creating a product"),null):Validators$1.isStringOrNumber(b)?Validators$1.isStringOrNumber(c)?(h&&!Validators$1.isNumber(h)&&(mParticle.Logger.error("Position must be a number, it will be set to null."),h=null),d||(d=1),{Name:a,Sku:b,Price:c,Quantity:d,Brand:g,Variant:e,Category:f,Position:h,CouponCode:i,TotalAmount:d*c,Attributes:j}):(mParticle.Logger.error("Price is required when creating a product, and must be a string or a number"),null):(mParticle.Logger.error("SKU is required when creating a product, and must be a string or a number"),null)}function createPromotion(a,b,c,d){return Validators$1.isStringOrNumber(a)?{Id:a,Creative:b,Name:c,Position:d}:(mParticle.Logger.error(Messages$4.ErrorMessages.PromotionIdRequired),null)}function createImpression(a,b){return "string"==typeof a?b?{Name:a,Product:b}:(mParticle.Logger.error("Product is required when creating an impression."),null):(mParticle.Logger.error("Name is required when creating an impression."),null)}function createTransactionAttributes(a,b,c,d,e,f){return Validators$1.isStringOrNumber(a)?{Id:a,Affiliation:b,CouponCode:c,Revenue:d,Shipping:e,Tax:f}:(mParticle.Logger.error(Messages$4.ErrorMessages.TransactionIdRequired),null)}function expandProductImpression(a){var b=[];return a.ProductImpressions?(a.ProductImpressions.forEach(function(c){c.ProductList&&c.ProductList.forEach(function(d){var e=Helpers.extend(!1,{},a.EventAttributes);if(d.Attributes)for(var f in d.Attributes)e[f]=d.Attributes[f];extractProductAttributes(e,d),c.ProductImpressionList&&(e["Product Impression List"]=c.ProductImpressionList);var g=ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:generateExpandedEcommerceName("Impression"),data:e,eventType:Types.EventType.Transaction});b.push(g);});}),b):b}function expandCommerceEvent(a){return a?expandProductAction(a).concat(expandPromotionAction(a)).concat(expandProductImpression(a)):null}function expandPromotionAction(a){var b=[];if(!a.PromotionAction)return b;var c=a.PromotionAction.PromotionList;return c.forEach(function(c){var d=Helpers.extend(!1,{},a.EventAttributes);extractPromotionAttributes(d,c);var e=ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:generateExpandedEcommerceName(Types.PromotionActionType.getExpansionName(a.PromotionAction.PromotionActionType)),data:d,eventType:Types.EventType.Transaction});b.push(e);}),b}function expandProductAction(a){var b=[];if(!a.ProductAction)return b;var c=!1;if(a.ProductAction.ProductActionType===Types.ProductActionType.Purchase||a.ProductAction.ProductActionType===Types.ProductActionType.Refund){var d=Helpers.extend(!1,{},a.EventAttributes);d["Product Count"]=a.ProductAction.ProductList?a.ProductAction.ProductList.length:0,extractActionAttributes(d,a.ProductAction),a.CurrencyCode&&(d["Currency Code"]=a.CurrencyCode);var e=ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:generateExpandedEcommerceName(Types.ProductActionType.getExpansionName(a.ProductAction.ProductActionType),!0),data:d,eventType:Types.EventType.Transaction});b.push(e);}else c=!0;var f=a.ProductAction.ProductList;return f?(f.forEach(function(d){var e=Helpers.extend(!1,a.EventAttributes,d.Attributes);c?extractActionAttributes(e,a.ProductAction):extractTransactionId(e,a.ProductAction),extractProductAttributes(e,d);var f=ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:generateExpandedEcommerceName(Types.ProductActionType.getExpansionName(a.ProductAction.ProductActionType)),data:e,eventType:Types.EventType.Transaction});b.push(f);}),b):b}function createCommerceEventObject(a){var b,c=mParticle.Identity.getCurrentUser();return (mParticle.Logger.verbose(Messages$4.InformationMessages.StartingLogCommerceEvent),Helpers.canLog())?(b=ServerModel.createEventObject({messageType:Types.MessageType.Commerce}),b.EventName="eCommerce - ",b.CurrencyCode=mParticle.Store.currencyCode,b.ShoppingCart={ProductList:c?c.getCart().getCartProducts():[]},b.CustomFlags=a,b):(mParticle.Logger.verbose(Messages$4.InformationMessages.AbandonLogEvent),null)}var Ecommerce = {convertTransactionAttributesToProductAction:convertTransactionAttributesToProductAction,getProductActionEventName:getProductActionEventName,getPromotionActionEventName:getPromotionActionEventName,convertProductActionToEventType:convertProductActionToEventType,convertPromotionActionToEventType:convertPromotionActionToEventType,buildProductList:buildProductList,createProduct:createProduct,createPromotion:createPromotion,createImpression:createImpression,createTransactionAttributes:createTransactionAttributes,expandCommerceEvent:expandCommerceEvent,createCommerceEventObject:createCommerceEventObject};

var Messages$5=Constants.Messages,sendEventToServer$1=ApiClient.sendEventToServer;function logEvent(a){if(mParticle.Logger.verbose(Messages$5.InformationMessages.StartingLogEvent+": "+a.name),Helpers.canLog()){a.data&&(a.data=Helpers.sanitizeAttributes(a.data));var b=ServerModel.createEventObject(a);sendEventToServer$1(b),Persistence.update();}else mParticle.Logger.verbose(Messages$5.InformationMessages.AbandonLogEvent);}function startTracking(a){function b(b){// prevents callback from being fired multiple times
mParticle.Store.currentPosition={lat:b.coords.latitude,lng:b.coords.longitude},d(a,b),a=null,mParticle.Store.isTracking=!0;}function c(){// prevents callback from being fired multiple times
d(a),a=null,mParticle.Store.isTracking=!1;}function d(a,b){if(a)try{b?a(b):a();}catch(a){mParticle.Logger.error("Error invoking the callback passed to startTrackingLocation."),mParticle.Logger.error(a);}}if(!mParticle.Store.isTracking)"geolocation"in navigator&&(mParticle.Store.watchPositionId=navigator.geolocation.watchPosition(b,c));else{var e={coords:{latitude:mParticle.Store.currentPosition.lat,longitude:mParticle.Store.currentPosition.lng}};d(a,e);}}function stopTracking(){mParticle.Store.isTracking&&(navigator.geolocation.clearWatch(mParticle.Store.watchPositionId),mParticle.Store.currentPosition=null,mParticle.Store.isTracking=!1);}function logOptOut(){mParticle.Logger.verbose(Messages$5.InformationMessages.StartingLogOptOut);var a=ServerModel.createEventObject({messageType:Types.MessageType.OptOut,eventType:Types.EventType.Other});sendEventToServer$1(a);}function logAST(){logEvent({messageType:Types.MessageType.AppStateTransition});}function logCheckoutEvent(a,b,c,d){var e=Ecommerce.createCommerceEventObject(d);e&&(e.EventName+=Ecommerce.getProductActionEventName(Types.ProductActionType.Checkout),e.EventCategory=Types.CommerceEventType.ProductCheckout,e.ProductAction={ProductActionType:Types.ProductActionType.Checkout,CheckoutStep:a,CheckoutOptions:b,ProductList:e.ShoppingCart.ProductList},logCommerceEvent(e,c));}function logProductActionEvent(a,b,c,d){var e=Ecommerce.createCommerceEventObject(d);e&&(e.EventCategory=Ecommerce.convertProductActionToEventType(a),e.EventName+=Ecommerce.getProductActionEventName(a),e.ProductAction={ProductActionType:a,ProductList:Array.isArray(b)?b:[b]},logCommerceEvent(e,c));}function logPurchaseEvent(a,b,c,d){var e=Ecommerce.createCommerceEventObject(d);e&&(e.EventName+=Ecommerce.getProductActionEventName(Types.ProductActionType.Purchase),e.EventCategory=Types.CommerceEventType.ProductPurchase,e.ProductAction={ProductActionType:Types.ProductActionType.Purchase},e.ProductAction.ProductList=Ecommerce.buildProductList(e,b),Ecommerce.convertTransactionAttributesToProductAction(a,e.ProductAction),logCommerceEvent(e,c));}function logRefundEvent(a,b,c,d){if(!a)return void mParticle.Logger.error(Messages$5.ErrorMessages.TransactionRequired);var e=Ecommerce.createCommerceEventObject(d);e&&(e.EventName+=Ecommerce.getProductActionEventName(Types.ProductActionType.Refund),e.EventCategory=Types.CommerceEventType.ProductRefund,e.ProductAction={ProductActionType:Types.ProductActionType.Refund},e.ProductAction.ProductList=Ecommerce.buildProductList(e,b),Ecommerce.convertTransactionAttributesToProductAction(a,e.ProductAction),logCommerceEvent(e,c));}function logPromotionEvent(a,b,c,d){var e=Ecommerce.createCommerceEventObject(d);e&&(e.EventName+=Ecommerce.getPromotionActionEventName(a),e.EventCategory=Ecommerce.convertPromotionActionToEventType(a),e.PromotionAction={PromotionActionType:a,PromotionList:[b]},logCommerceEvent(e,c));}function logImpressionEvent(a,b,c){var d=Ecommerce.createCommerceEventObject(c);d&&(d.EventName+="Impression",d.EventCategory=Types.CommerceEventType.ProductImpression,!Array.isArray(a)&&(a=[a]),d.ProductImpressions=[],a.forEach(function(a){d.ProductImpressions.push({ProductImpressionList:a.Name,ProductList:Array.isArray(a.Product)?a.Product:[a.Product]});}),logCommerceEvent(d,b));}function logCommerceEvent(a,b){mParticle.Logger.verbose(Messages$5.InformationMessages.StartingLogCommerceEvent),b=Helpers.sanitizeAttributes(b),Helpers.canLog()?(mParticle.Store.webviewBridgeEnabled&&(a.ShoppingCart={}),b&&(a.EventAttributes=b),sendEventToServer$1(a),Persistence.update()):mParticle.Logger.verbose(Messages$5.InformationMessages.AbandonLogEvent);}function addEventHandler(a,b,c,d,f){var g,h,e=[],j=function(a){var b=function(){g.href?window.location.href=g.href:g.submit&&g.submit();};mParticle.Logger.verbose("DOM event triggered, handling event"),logEvent({messageType:Types.MessageType.PageEvent,name:"function"==typeof c?c(g):c,data:"function"==typeof d?d(g):d,eventType:f||Types.EventType.Other}),(g.href&&"_blank"!==g.target||g.submit)&&(a.preventDefault?a.preventDefault():a.returnValue=!1,setTimeout(b,mParticle.Store.SDKConfig.timeout));};if(!b)return void mParticle.Logger.error("Can't bind event, selector is required");// Handle a css selector string or a dom element
if("string"==typeof b?e=document.querySelectorAll(b):b.nodeType&&(e=[b]),e.length)for(mParticle.Logger.verbose("Found "+e.length+" element"+(1<e.length?"s":"")+", attaching event handlers"),h=0;h<e.length;h++)g=e[h],g.addEventListener?g.addEventListener(a,j,!1):g.attachEvent?g.attachEvent("on"+a,j):g["on"+a]=j;else mParticle.Logger.verbose("No elements found");}var Events = {logEvent:logEvent,startTracking:startTracking,stopTracking:stopTracking,logCheckoutEvent:logCheckoutEvent,logProductActionEvent:logProductActionEvent,logPurchaseEvent:logPurchaseEvent,logRefundEvent:logRefundEvent,logPromotionEvent:logPromotionEvent,logImpressionEvent:logImpressionEvent,logOptOut:logOptOut,logAST:logAST,addEventHandler:addEventHandler};

var Messages$6=Constants.Messages,Validators$2=Helpers.Validators,HTTPCodes$1=Constants.HTTPCodes,sendIdentityRequest$1=ApiClient.sendIdentityRequest,sendEventToServer$2=ApiClient.sendEventToServer;function checkIdentitySwap(a,b,c){if(a&&b&&a!==b){var d=Persistence.useLocalStorage()?Persistence.getLocalStorage():Persistence.getCookie();d.cu=b,d.gs.csm=c,Persistence.saveCookies(d);}}var IdentityRequest={createKnownIdentities:function createKnownIdentities(a,b){var c={};if(a&&a.userIdentities&&Helpers.isObject(a.userIdentities))for(var d in a.userIdentities)c[d]=a.userIdentities[d];return c.device_application_stamp=b,c},preProcessIdentityRequest:function preProcessIdentityRequest(a,b,c){mParticle.Logger.verbose(Messages$6.InformationMessages.StartingLogEvent+": "+c);var d=Validators$2.validateIdentities(a,c);if(!d.valid)return mParticle.Logger.error("ERROR: "+d.error),{valid:!1,error:d.error};if(b&&!Validators$2.isFunction(b)){var e="The optional callback must be a function. You tried entering a(n) "+_typeof_1(b);return mParticle.Logger.error(e),{valid:!1,error:e}}return {valid:!0}},createIdentityRequest:function createIdentityRequest(a,b,c,d,e,f,g){var h={client_sdk:{platform:b,sdk_vendor:c,sdk_version:d},context:f,environment:mParticle.Store.SDKConfig.isDevelopmentMode?"development":"production",request_id:Helpers.generateUniqueId(),request_timestamp_ms:new Date().getTime(),previous_mpid:g||null,known_identities:this.createKnownIdentities(a,e)};return h},createModifyIdentityRequest:function createModifyIdentityRequest(a,b,c,d,e,f){return {client_sdk:{platform:c,sdk_vendor:d,sdk_version:e},context:f,environment:mParticle.Store.SDKConfig.isDevelopmentMode?"development":"production",request_id:Helpers.generateUniqueId(),request_timestamp_ms:new Date().getTime(),identity_changes:this.createIdentityChanges(a,b)}},createIdentityChanges:function createIdentityChanges(a,b){var c,d=[];if(b&&Helpers.isObject(b)&&a&&Helpers.isObject(a))for(c in b)d.push({old_value:a[c]||null,new_value:b[c],identity_type:c});return d},modifyUserIdentities:function modifyUserIdentities(a,b){var c={};for(var d in b)c[Types.IdentityType.getIdentityType(d)]=b[d];for(d in a)c[d]||(c[d]=a[d]);return c},createAliasNetworkRequest:function createAliasNetworkRequest(a){return {request_id:Helpers.generateUniqueId(),request_type:"alias",environment:mParticle.Store.SDKConfig.isDevelopmentMode?"development":"production",api_key:mParticle.Store.devToken,data:{destination_mpid:a.destinationMpid,source_mpid:a.sourceMpid,start_unixtime_ms:a.startTime,end_unixtime_ms:a.endTime,device_application_stamp:mParticle.Store.deviceId}}},convertAliasToNative:function convertAliasToNative(a){return {DestinationMpid:a.destinationMpid,SourceMpid:a.sourceMpid,StartUnixtimeMs:a.startTime,EndUnixtimeMs:a.endTime}},convertToNative:function convertToNative(a){var b=[];if(a&&a.userIdentities){for(var c in a.userIdentities)a.userIdentities.hasOwnProperty(c)&&b.push({Type:Types.IdentityType.getIdentityType(c),Identity:a.userIdentities[c]});return {UserIdentities:b}}}},IdentityAPI={HTTPCodes:HTTPCodes$1,/**
     * Initiate a logout request to the mParticle server
     * @method identify
     * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
     * @param {Function} [callback] A callback function that is called when the identify request completes
     */identify:function identify(a,b){var c,d=mParticle.Identity.getCurrentUser(),e=IdentityRequest.preProcessIdentityRequest(a,b,"identify");if(d&&(c=d.getMPID()),e.valid){var f=IdentityRequest.createIdentityRequest(a,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,mParticle.Store.deviceId,mParticle.Store.context,c);Helpers.canLog()?mParticle.Store.webviewBridgeEnabled?(NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Identify,JSON.stringify(IdentityRequest.convertToNative(a))),Helpers.invokeCallback(b,HTTPCodes$1.nativeIdentityRequest,"Identify request sent to native sdk")):sendIdentityRequest$1(f,"identify",b,a,parseIdentityResponse,c):(Helpers.invokeCallback(b,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$6.InformationMessages.AbandonLogEvent),mParticle.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent));}else Helpers.invokeCallback(b,HTTPCodes$1.validationIssue,e.error),mParticle.Logger.verbose(e);},/**
     * Initiate a logout request to the mParticle server
     * @method logout
     * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
     * @param {Function} [callback] A callback function that is called when the logout request completes
     */logout:function logout(a,b){var c,d=mParticle.Identity.getCurrentUser(),e=IdentityRequest.preProcessIdentityRequest(a,b,"logout");if(d&&(c=d.getMPID()),e.valid){var f,g=IdentityRequest.createIdentityRequest(a,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,mParticle.Store.deviceId,mParticle.Store.context,c);Helpers.canLog()?mParticle.Store.webviewBridgeEnabled?(NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Logout,JSON.stringify(IdentityRequest.convertToNative(a))),Helpers.invokeCallback(b,HTTPCodes$1.nativeIdentityRequest,"Logout request sent to native sdk")):(sendIdentityRequest$1(g,"logout",b,a,parseIdentityResponse,c),f=ServerModel.createEventObject({messageType:Types.MessageType.Profile}),f.ProfileMessageType=Types.ProfileMessageType.Logout,mParticle.Store.activeForwarders.length&&mParticle.Store.activeForwarders.forEach(function(a){a.logOut&&a.logOut(f);})):(Helpers.invokeCallback(b,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$6.InformationMessages.AbandonLogEvent),mParticle.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent));}else Helpers.invokeCallback(b,HTTPCodes$1.validationIssue,e.error),mParticle.Logger.verbose(e);},/**
     * Initiate a login request to the mParticle server
     * @method login
     * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
     * @param {Function} [callback] A callback function that is called when the login request completes
     */login:function login(a,b){var c,d=mParticle.Identity.getCurrentUser(),e=IdentityRequest.preProcessIdentityRequest(a,b,"login");if(d&&(c=d.getMPID()),e.valid){var f=IdentityRequest.createIdentityRequest(a,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,mParticle.Store.deviceId,mParticle.Store.context,c);Helpers.canLog()?mParticle.Store.webviewBridgeEnabled?(NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Login,JSON.stringify(IdentityRequest.convertToNative(a))),Helpers.invokeCallback(b,HTTPCodes$1.nativeIdentityRequest,"Login request sent to native sdk")):sendIdentityRequest$1(f,"login",b,a,parseIdentityResponse,c):(Helpers.invokeCallback(b,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$6.InformationMessages.AbandonLogEvent),mParticle.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent));}else Helpers.invokeCallback(b,HTTPCodes$1.validationIssue,e.error),mParticle.Logger.verbose(e);},/**
     * Initiate a modify request to the mParticle server
     * @method modify
     * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
     * @param {Function} [callback] A callback function that is called when the modify request completes
     */modify:function modify(a,b){var c,d=mParticle.Identity.getCurrentUser(),e=IdentityRequest.preProcessIdentityRequest(a,b,"modify");d&&(c=d.getMPID());var f=a&&a.userIdentities?a.userIdentities:{};if(e.valid){var g=IdentityRequest.createModifyIdentityRequest(d?d.getUserIdentities().userIdentities:{},f,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,mParticle.Store.context);Helpers.canLog()?mParticle.Store.webviewBridgeEnabled?(NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Modify,JSON.stringify(IdentityRequest.convertToNative(a))),Helpers.invokeCallback(b,HTTPCodes$1.nativeIdentityRequest,"Modify request sent to native sdk")):sendIdentityRequest$1(g,"modify",b,a,parseIdentityResponse,c):(Helpers.invokeCallback(b,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$6.InformationMessages.AbandonLogEvent),mParticle.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent));}else Helpers.invokeCallback(b,HTTPCodes$1.validationIssue,e.error),mParticle.Logger.verbose(e);},/**
     * Returns a user object with methods to interact with the current user
     * @method getCurrentUser
     * @return {Object} the current user object
     */getCurrentUser:function getCurrentUser(){var a=mParticle.Store.mpid;return a?(a=mParticle.Store.mpid.slice(),mParticleUser(a,mParticle.Store.isLoggedIn)):mParticle.Store.webviewBridgeEnabled?mParticleUser():null},/**
     * Returns a the user object associated with the mpid parameter or 'null' if no such
     * user exists
     * @method getUser
     * @param {String} mpid of the desired user
     * @return {Object} the user for  mpid
     */getUser:function getUser(a){var b=Persistence.getPersistence();return b?b[a]&&!Constants.SDKv2NonMPIDCookieKeys.hasOwnProperty(a)?mParticleUser(a):null:null},/**
     * Returns all users, including the current user and all previous users that are stored on the device.
     * @method getUsers
     * @return {Array} array of users
     */getUsers:function getUsers(){var a=Persistence.getPersistence(),b=[];if(a)for(var c in a)Constants.SDKv2NonMPIDCookieKeys.hasOwnProperty(c)||b.push(mParticleUser(c));return b.sort(function(c,a){var b=c.getLastSeenTime()||0,d=a.getLastSeenTime()||0;return b>d?-1:1}),b},/**
     * Initiate an alias request to the mParticle server
     * @method aliasUsers
     * @param {Object} aliasRequest  object representing an AliasRequest
     * @param {Function} [callback] A callback function that is called when the aliasUsers request completes
     */aliasUsers:function aliasUsers(a,b){var c;if(a.destinationMpid&&a.sourceMpid||(c=Messages$6.ValidationMessages.AliasMissingMpid),a.destinationMpid===a.sourceMpid&&(c=Messages$6.ValidationMessages.AliasNonUniqueMpid),a.startTime&&a.endTime||(c=Messages$6.ValidationMessages.AliasMissingTime),a.startTime>a.endTime&&(c=Messages$6.ValidationMessages.AliasStartBeforeEndTime),c)return mParticle.Logger.warning(c),void Helpers.invokeAliasCallback(b,HTTPCodes$1.validationIssue,c);if(!Helpers.canLog())Helpers.invokeAliasCallback(b,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$6.InformationMessages.AbandonAliasUsers),mParticle.Logger.verbose(Messages$6.InformationMessages.AbandonAliasUsers);else if(mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Alias,JSON.stringify(IdentityRequest.convertAliasToNative(a))),Helpers.invokeAliasCallback(b,HTTPCodes$1.nativeIdentityRequest,"Alias request sent to native sdk");else{mParticle.Logger.verbose(Messages$6.InformationMessages.StartingAliasRequest+": "+a.sourceMpid+" -> "+a.destinationMpid);var d=IdentityRequest.createAliasNetworkRequest(a);ApiClient.sendAliasRequest(d,b);}},/**
      Create a default AliasRequest for 2 MParticleUsers. This will construct the request
      using the sourceUser's firstSeenTime as the startTime, and its lastSeenTime as the endTime.
     
      In the unlikely scenario that the sourceUser does not have a firstSeenTime, which will only
      be the case if they have not been the current user since this functionality was added, the 
      startTime will be populated with the earliest firstSeenTime out of any stored user. Similarly,
      if the sourceUser does not have a lastSeenTime, the endTime will be populated with the current time
     
      There is a limit to how old the startTime can be, represented by the config field 'aliasMaxWindow', in days.
      If the startTime falls before the limit, it will be adjusted to the oldest allowed startTime. 
      In rare cases, where the sourceUser's lastSeenTime also falls outside of the aliasMaxWindow limit, 
      after applying this adjustment it will be impossible to create an aliasRequest passes the aliasUsers() 
      validation that the startTime must be less than the endTime 
     */createAliasRequest:function createAliasRequest(a,b){try{if(!b||!a)return mParticle.Logger.error("'destinationUser' and 'sourceUser' must both be present"),null;var c=a.getFirstSeenTime();c||mParticle.Identity.getUsers().forEach(function(a){a.getFirstSeenTime()&&(!c||a.getFirstSeenTime()<c)&&(c=a.getFirstSeenTime());});var d=new Date().getTime()-1e3*(60*(60*(24*mParticle.Store.SDKConfig.aliasMaxWindow))),e=a.getLastSeenTime()||new Date().getTime();return c<d&&(c=d,e<c&&mParticle.Logger.warning("Source User has not been seen in the last "+mParticle.Store.SDKConfig.maxAliasWindow+" days, Alias Request will likely fail")),{destinationMpid:b.getMPID(),sourceMpid:a.getMPID(),startTime:c,endTime:e}}catch(a){return mParticle.Logger.error("There was a problem with creating an alias request: "+a),null}}};/**
 * Invoke these methods on the mParticle.Identity object.
 * Example: mParticle.Identity.getCurrentUser().
 * @class mParticle.Identity
 */ /**
 * Invoke these methods on the mParticle.Identity.getCurrentUser() object.
 * Example: mParticle.Identity.getCurrentUser().getAllUserAttributes()
 * @class mParticle.Identity.getCurrentUser()
 */function mParticleUser(a,b){return {/**
         * Get user identities for current user
         * @method getUserIdentities
         * @return {Object} an object with userIdentities as its key
         */getUserIdentities:function getUserIdentities(){var b={},c=Persistence.getUserIdentities(a);for(var d in c)c.hasOwnProperty(d)&&(b[Types.IdentityType.getIdentityName(Helpers.parseNumber(d))]=c[d]);return {userIdentities:b}},/**
         * Get the MPID of the current user
         * @method getMPID
         * @return {String} the current user MPID as a string
         */getMPID:function getMPID(){return a},/**
         * Sets a user tag
         * @method setUserTag
         * @param {String} tagName
         */setUserTag:function setUserTag(a){return Validators$2.isValidKeyValue(a)?void this.setUserAttribute(a,null):void mParticle.Logger.error(Messages$6.ErrorMessages.BadKey)},/**
         * Removes a user tag
         * @method removeUserTag
         * @param {String} tagName
         */removeUserTag:function removeUserTag(a){return Validators$2.isValidKeyValue(a)?void this.removeUserAttribute(a):void mParticle.Logger.error(Messages$6.ErrorMessages.BadKey)},/**
         * Sets a user attribute
         * @method setUserAttribute
         * @param {String} key
         * @param {String} value
         */setUserAttribute:function setUserAttribute(b,c){var d,e,f,g;if(mParticle.sessionManager.resetSessionTimer(),Helpers.canLog()){if(!Validators$2.isValidAttributeValue(c))return void mParticle.Logger.error(Messages$6.ErrorMessages.BadAttribute);if(!Validators$2.isValidKeyValue(b))return void mParticle.Logger.error(Messages$6.ErrorMessages.BadKey);if(mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetUserAttribute,JSON.stringify({key:b,value:c}));else{d=Persistence.getPersistence(),e=this.getAllUserAttributes();var h=Helpers.findKeyInObject(e,b);h?(g=!1,f=e[h],delete e[h]):g=!0,sendUserAttributeChangeEvent(b,c,f,g,!1),e[b]=c,d&&d[a]&&(d[a].ua=e,Persistence.saveCookies(d,a)),Forwarders.initForwarders(IdentityAPI.getCurrentUser().getUserIdentities(),ApiClient.prepareForwardingStats),Forwarders.callSetUserAttributeOnForwarders(b,c);}}},/**
         * Set multiple user attributes
         * @method setUserAttributes
         * @param {Object} user attribute object with keys of the attribute type, and value of the attribute value
         */setUserAttributes:function setUserAttributes(a){if(mParticle.sessionManager.resetSessionTimer(),!Helpers.isObject(a))mParticle.Logger.error("Must pass an object into setUserAttributes. You passed a "+_typeof_1(a));else if(Helpers.canLog())for(var b in a)a.hasOwnProperty(b)&&this.setUserAttribute(b,a[b]);},/**
         * Removes a specific user attribute
         * @method removeUserAttribute
         * @param {String} key
         */removeUserAttribute:function removeUserAttribute(b){var c,d;if(mParticle.sessionManager.resetSessionTimer(),!Validators$2.isValidKeyValue(b))return void mParticle.Logger.error(Messages$6.ErrorMessages.BadKey);if(mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveUserAttribute,JSON.stringify({key:b,value:null}));else{c=Persistence.getPersistence(),d=this.getAllUserAttributes(),sendUserAttributeChangeEvent(b,null,d[b],!1,!0);var e=Helpers.findKeyInObject(d,b);e&&(b=e),delete d[b],c&&c[a]&&(c[a].ua=d,Persistence.saveCookies(c,a)),Forwarders.initForwarders(IdentityAPI.getCurrentUser().getUserIdentities(),ApiClient.prepareForwardingStats),Forwarders.applyToForwarders("removeUserAttribute",b);}},/**
         * Sets a list of user attributes
         * @method setUserAttributeList
         * @param {String} key
         * @param {Array} value an array of values
         */setUserAttributeList:function setUserAttributeList(b,c){var d,e,f,g,h;if(mParticle.sessionManager.resetSessionTimer(),!Validators$2.isValidKeyValue(b))return void mParticle.Logger.error(Messages$6.ErrorMessages.BadKey);if(!Array.isArray(c))return void mParticle.Logger.error("The value you passed in to setUserAttributeList must be an array. You passed in a "+("undefined"==typeof value?"undefined":_typeof_1(value)));var j=c.slice();if(mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetUserAttributeList,JSON.stringify({key:b,value:j}));else{d=Persistence.getPersistence(),e=this.getAllUserAttributes();var k=Helpers.findKeyInObject(e,b);if(k?(g=!1,f=e[k],delete e[k]):g=!0,ApiClient.shouldEnableBatching()){// If the new attributeList length is different previous, then there is a change event.
// Loop through new attributes list, see if they are all in the same index as previous user attributes list
// If there are any changes, break, and immediately send a userAttributeChangeEvent with full array as a value
if(!f||!Array.isArray(f))h=!0;else if(c.length!==f.length)h=!0;else for(var l=0;l<c.length;l++)if(f[l]!==c[l]){h=!0;break}h&&sendUserAttributeChangeEvent(b,c,f,g,!1);}e[b]=j,d&&d[a]&&(d[a].ua=e,Persistence.saveCookies(d,a)),Forwarders.initForwarders(IdentityAPI.getCurrentUser().getUserIdentities(),ApiClient.prepareForwardingStats),Forwarders.callSetUserAttributeOnForwarders(b,j);}},/**
         * Removes all user attributes
         * @method removeAllUserAttributes
         */removeAllUserAttributes:function removeAllUserAttributes(){var a;if(mParticle.sessionManager.resetSessionTimer(),mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveAllUserAttributes);else if(a=this.getAllUserAttributes(),Forwarders.initForwarders(IdentityAPI.getCurrentUser().getUserIdentities(),ApiClient.prepareForwardingStats),a)for(var b in a)a.hasOwnProperty(b)&&Forwarders.applyToForwarders("removeUserAttribute",b),this.removeUserAttribute(b);},/**
         * Returns all user attribute keys that have values that are arrays
         * @method getUserAttributesLists
         * @return {Object} an object of only keys with array values. Example: { attr1: [1, 2, 3], attr2: ['a', 'b', 'c'] }
         */getUserAttributesLists:function getUserAttributesLists(){var a,b={};for(var c in a=this.getAllUserAttributes(),a)a.hasOwnProperty(c)&&Array.isArray(a[c])&&(b[c]=a[c].slice());return b},/**
         * Returns all user attributes
         * @method getAllUserAttributes
         * @return {Object} an object of all user attributes. Example: { attr1: 'value1', attr2: ['a', 'b', 'c'] }
         */getAllUserAttributes:function getAllUserAttributes(){var b={},c=Persistence.getAllUserAttributes(a);if(c)for(var d in c)c.hasOwnProperty(d)&&(b[d]=Array.isArray(c[d])?c[d].slice():c[d]);return b},/**
         * Returns the cart object for the current user
         * @method getCart
         * @return a cart object
         */getCart:function getCart(){return mParticleUserCart(a)},/**
         * Returns the Consent State stored locally for this user.
         * @method getConsentState
         * @return a ConsentState object
         */getConsentState:function getConsentState(){return Persistence.getConsentState(a)},/**
         * Sets the Consent State stored locally for this user.
         * @method setConsentState
         * @param {Object} consent state
         */setConsentState:function setConsentState(b){Persistence.saveUserConsentStateToCookies(a,b),Forwarders.initForwarders(this.getUserIdentities().userIdentities,ApiClient.prepareForwardingStats);},isLoggedIn:function isLoggedIn(){return b},getLastSeenTime:function getLastSeenTime(){return Persistence.getLastSeenTime(a)},getFirstSeenTime:function getFirstSeenTime(){return Persistence.getFirstSeenTime(a)}}}/**
 * Invoke these methods on the mParticle.Identity.getCurrentUser().getCart() object.
 * Example: mParticle.Identity.getCurrentUser().getCart().add(...);
 * @class mParticle.Identity.getCurrentUser().getCart()
 */function mParticleUserCart(a){return {/**
         * Adds a cart product to the user cart
         * @method add
         * @param {Object} product the product
         * @param {Boolean} [logEvent] a boolean to log adding of the cart object. If blank, no logging occurs.
         */add:function add(b,c){var d,e,f;if(f=Array.isArray(b)?b.slice():[b],f.forEach(function(a){a.Attributes=Helpers.sanitizeAttributes(a.Attributes);}),mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.AddToCart,JSON.stringify(f));else{mParticle.sessionManager.resetSessionTimer(),e=Persistence.getUserProductsFromLS(a),e=e.concat(f),!0===c&&Events.logProductActionEvent(Types.ProductActionType.AddToCart,f);e.length>mParticle.Store.SDKConfig.maxProducts&&(mParticle.Logger.verbose("The cart contains "+e.length+" items. Only "+mParticle.Store.SDKConfig.maxProducts+" can currently be saved in cookies."),e=e.slice(-mParticle.Store.SDKConfig.maxProducts)),d=Persistence.getAllUserProductsFromLS(),d[a].cp=e,Persistence.setCartProducts(d);}},/**
         * Removes a cart product from the current user cart
         * @method remove
         * @param {Object} product the product
         * @param {Boolean} [logEvent] a boolean to log adding of the cart object. If blank, no logging occurs.
         */remove:function remove(b,c){var d,e,f=-1,g=null;if(mParticle.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveFromCart,JSON.stringify(b));else{mParticle.sessionManager.resetSessionTimer(),e=Persistence.getUserProductsFromLS(a),e&&(e.forEach(function(a,c){a.Sku===b.Sku&&(f=c,g=a);}),-1<f&&(e.splice(f,1),!0===c&&Events.logProductActionEvent(Types.ProductActionType.RemoveFromCart,g)));d=Persistence.getAllUserProductsFromLS(),d[a].cp=e,Persistence.setCartProducts(d);}},/**
         * Clears the user's cart
         * @method clear
         */clear:function clear(){var b;mParticle.Store.webviewBridgeEnabled?NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.ClearCart):(mParticle.sessionManager.resetSessionTimer(),b=Persistence.getAllUserProductsFromLS(),b&&b[a]&&b[a].cp&&(b[a].cp=[],b[a].cp=[],Persistence.setCartProducts(b)));},/**
         * Returns all cart products
         * @method getCartProducts
         * @return {Array} array of cart products
         */getCartProducts:function getCartProducts(){return Persistence.getCartProducts(a)}}}function parseIdentityResponse(a,b,c,d,e){var f,g,h,i=mParticle.Identity.getCurrentUser(),j={},k=i?i.getUserIdentities().userIdentities:{};for(var l in k)j[Types.IdentityType.getIdentityType(l)]=k[l];var m={};mParticle.Store.identityCallInFlight=!1;try{if(mParticle.Logger.verbose("Parsing \""+e+"\" identity response from server"),a.responseText&&(g=JSON.parse(a.responseText),sendUserIdentityChange(d,e,g.mpid),g.hasOwnProperty("is_logged_in")&&(mParticle.Store.isLoggedIn=g.is_logged_in)),200===a.status){if("modify"===e)m=IdentityRequest.modifyUserIdentities(j,d.userIdentities),Persistence.saveUserIdentitiesToCookies(i.getMPID(),m);else{//if there is any previous migration data
if(g=JSON.parse(a.responseText),mParticle.Logger.verbose("Successfully parsed Identity Response"),(!i||i.getMPID()&&g.mpid&&g.mpid!==i.getMPID())&&(mParticle.Store.mpid=g.mpid,i&&Persistence.setLastSeenTime(b),Persistence.setFirstSeenTime(g.mpid)),"identify"==e&&i&&g.mpid===i.getMPID()&&Persistence.setFirstSeenTime(g.mpid),h=mParticle.Store.currentSessionMPIDs.indexOf(g.mpid),mParticle.Store.sessionId&&g.mpid&&b!==g.mpid&&0>h&&mParticle.Store.currentSessionMPIDs.push(g.mpid),-1<h&&(mParticle.Store.currentSessionMPIDs=mParticle.Store.currentSessionMPIDs.slice(0,h).concat(mParticle.Store.currentSessionMPIDs.slice(h+1,mParticle.Store.currentSessionMPIDs.length)),mParticle.Store.currentSessionMPIDs.push(g.mpid)),Persistence.saveUserIdentitiesToCookies(g.mpid,m),cookieSyncManager.attemptCookieSync(b,g.mpid),checkIdentitySwap(b,g.mpid,mParticle.Store.currentSessionMPIDs),Object.keys(mParticle.Store.migrationData).length){m=mParticle.Store.migrationData.userIdentities||{};var n=mParticle.Store.migrationData.userAttributes||{};Persistence.saveUserAttributesToCookies(g.mpid,n);}else d&&d.userIdentities&&Object.keys(d.userIdentities).length&&(m=IdentityRequest.modifyUserIdentities(j,d.userIdentities));Persistence.saveUserIdentitiesToCookies(g.mpid,m),Persistence.update(),Persistence.findPrevCookiesBasedOnUI(d),mParticle.Store.context=g.context||mParticle.Store.context;}if(f=IdentityAPI.getCurrentUser(),d&&d.onUserAlias&&Helpers.Validators.isFunction(d.onUserAlias))try{mParticle.Logger.warning("Deprecated function onUserAlias will be removed in future releases"),d.onUserAlias(i,f);}catch(a){mParticle.Logger.error("There was an error with your onUserAlias function - "+a);}var o=Persistence.getCookie()||Persistence.getLocalStorage();f&&(Persistence.storeDataInMemory(o,f.getMPID()),(!i||f.getMPID()!==i.getMPID()||i.isLoggedIn()!==f.isLoggedIn())&&Forwarders.initForwarders(f.getUserIdentities().userIdentities,ApiClient.prepareForwardingStats),Forwarders.setForwarderUserIdentities(f.getUserIdentities().userIdentities),Forwarders.setForwarderOnIdentityComplete(f,e),Forwarders.setForwarderOnUserIdentified(f,e)),ApiClient.processQueuedEvents();}c?0===a.status?Helpers.invokeCallback(c,HTTPCodes$1.noHttpCoverage,g||null,f):Helpers.invokeCallback(c,a.status,g||null,f):g&&g.errors&&g.errors.length&&mParticle.Logger.error("Received HTTP response code of "+a.status+" - "+g.errors[0].message);}catch(b){c&&Helpers.invokeCallback(c,a.status,g||null),mParticle.Logger.error("Error parsing JSON response from Identity server: "+b);}}// send a user identity change request on identify, login, logout, modify when any values change.
// compare what identities exist vs what it previously was for the specific user if they were in memory before.
// if it's the first time the user is logging in, send a user identity change request with created_this_batch = true
// created_this_batch is always false for old user
function sendUserIdentityChange(a,b,c){var d,e,f;if(ApiClient.shouldEnableBatching()&&(c||"modify"===b)){d="modify"===b?IdentityAPI.getCurrentUser():IdentityAPI.getUser(c);var g=a.userIdentities;// if there is not a user in memory with this mpid, then it is a new user, and we send a user identity
// change for each identity on the identity api request
if(d)e=d.getUserIdentities()?d.getUserIdentities().userIdentities:{};else{for(var h in g)f=createUserIdentityChange(h,g[h],null,!0),sendEventToServer$2(f);return}for(h in g)if(e[h]!==g[h]){var i=!e[h];f=createUserIdentityChange(h,g[h],e[h],i),sendEventToServer$2(f);}}}function createUserIdentityChange(a,b,c,d){var e;return e=ServerModel.createEventObject({messageType:Types.MessageType.UserIdentityChange,userIdentityChanges:{New:{IdentityType:a,Identity:b,CreatedThisBatch:d},Old:{IdentityType:a,Identity:c,CreatedThisBatch:!1}}}),e}function sendUserAttributeChangeEvent(a,b,c,d,e){if(ApiClient.shouldEnableBatching()){var f=createUserAttributeChange(a,b,c,d,e);f&&sendEventToServer$2(f);}}function createUserAttributeChange(a,b,c,d,e){c||(c=null);var f;return b!==c&&(f=ServerModel.createEventObject({messageType:Types.MessageType.UserAttributeChange,userAttributeChanges:{UserAttributeName:a,New:b,Old:c||null,Deleted:e,IsNewAttribute:d}})),f}var Identity = {checkIdentitySwap:checkIdentitySwap,IdentityRequest:IdentityRequest,IdentityAPI:IdentityAPI,mParticleUser:mParticleUser,mParticleUserCart:mParticleUserCart};

var IdentityAPI$1=Identity.IdentityAPI,Messages$7=Constants.Messages,logEvent$1=Events.logEvent;function initialize(){if(mParticle.Store.sessionId){var a=6e4*mParticle.Store.SDKConfig.sessionTimeout;if(new Date>new Date(mParticle.Store.dateLastEventSent.getTime()+a))endSession(),startNewSession();else{var b=Persistence.getPersistence();b&&!b.cu&&(IdentityAPI$1.identify(mParticle.Store.SDKConfig.identifyRequest,mParticle.Store.SDKConfig.identityCallback),mParticle.Store.identifyCalled=!0,mParticle.Store.SDKConfig.identityCallback=null);}}else startNewSession();}function getSession(){return mParticle.Store.sessionId}function startNewSession(){if(mParticle.Logger.verbose(Messages$7.InformationMessages.StartingNewSession),Helpers.canLog()){mParticle.Store.sessionId=Helpers.generateUniqueId().toUpperCase();var a=mParticle.Identity.getCurrentUser(),b=a?a.getMPID():null;if(b&&(mParticle.Store.currentSessionMPIDs=[b]),!mParticle.Store.sessionStartDate){var c=new Date;mParticle.Store.sessionStartDate=c,mParticle.Store.dateLastEventSent=c;}setSessionTimer(),mParticle.Store.identifyCalled||(IdentityAPI$1.identify(mParticle.Store.SDKConfig.identifyRequest,mParticle.Store.SDKConfig.identityCallback),mParticle.Store.identifyCalled=!0,mParticle.Store.SDKConfig.identityCallback=null),logEvent$1({messageType:Types.MessageType.SessionStart});}else mParticle.Logger.verbose(Messages$7.InformationMessages.AbandonStartSession);}function endSession(a){if(mParticle.Logger.verbose(Messages$7.InformationMessages.StartingEndSession),a)logEvent$1({messageType:Types.MessageType.SessionEnd}),mParticle.Store.sessionId=null,mParticle.Store.dateLastEventSent=null,mParticle.Store.sessionAttributes={},Persistence.update();else if(Helpers.canLog()){var b,c,d;if(c=Persistence.getCookie()||Persistence.getLocalStorage(),!c)return;if(c.gs&&!c.gs.sid)return void mParticle.Logger.verbose(Messages$7.InformationMessages.NoSessionToEnd);// sessionId is not equal to cookies.sid if cookies.sid is changed in another tab
if(c.gs.sid&&mParticle.Store.sessionId!==c.gs.sid&&(mParticle.Store.sessionId=c.gs.sid),c.gs&&c.gs.les){b=6e4*mParticle.Store.SDKConfig.sessionTimeout;var e=new Date().getTime();d=e-c.gs.les,d<b?setSessionTimer():(logEvent$1({messageType:Types.MessageType.SessionEnd}),mParticle.Store.sessionId=null,mParticle.Store.dateLastEventSent=null,mParticle.Store.sessionStartDate=null,mParticle.Store.sessionAttributes={},Persistence.update());}}else mParticle.Logger.verbose(Messages$7.InformationMessages.AbandonEndSession);}function setSessionTimer(){var a=6e4*mParticle.Store.SDKConfig.sessionTimeout;mParticle.Store.globalTimer=window.setTimeout(function(){endSession();},a);}function resetSessionTimer(){mParticle.Store.webviewBridgeEnabled||(!mParticle.Store.sessionId&&startNewSession(),clearSessionTimeout(),setSessionTimer()),startNewSessionIfNeeded();}function clearSessionTimeout(){clearTimeout(mParticle.Store.globalTimer);}function startNewSessionIfNeeded(){if(!mParticle.Store.webviewBridgeEnabled){var a=Persistence.getCookie()||Persistence.getLocalStorage();!mParticle.Store.sessionId&&a&&(a.sid?mParticle.Store.sessionId=a.sid:startNewSession());}}var SessionManager = {initialize:initialize,getSession:getSession,startNewSession:startNewSession,endSession:endSession,setSessionTimer:setSessionTimer,resetSessionTimer:resetSessionTimer,clearSessionTimeout:clearSessionTimeout};

var Validators$3=Helpers.Validators;function createSDKConfig(a){var b={};for(var c in Constants.DefaultConfig)Constants.DefaultConfig.hasOwnProperty(c)&&(b[c]=Constants.DefaultConfig[c]);if(a)for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);for(c in Constants.DefaultUrls)b[c]=Constants.DefaultUrls[c];return b}function Store(a,b){var c={isEnabled:!0,sessionAttributes:{},currentSessionMPIDs:[],consentState:null,sessionId:null,isFirstRun:null,clientId:null,deviceId:null,devToken:null,migrationData:{},serverSettings:{},dateLastEventSent:null,sessionStartDate:null,currentPosition:null,isTracking:!1,watchPositionId:null,cartProducts:[],eventQueue:[],currencyCode:null,globalTimer:null,context:"",configurationLoaded:!1,identityCallInFlight:!1,SDKConfig:{},migratingToIDSyncCookies:!1,nonCurrentUserMPIDs:{},identifyCalled:!1,isLoggedIn:!1,cookieSyncDates:{},integrationAttributes:{},requireDelay:!0,isLocalStorageAvailable:null,storageName:null,prodStorageName:null,activeForwarders:[],kits:{},configuredForwarders:[],pixelConfigurations:[]};for(var d in c)this[d]=c[d];// Set configuration to default settings
if(this.storageName=Helpers.createMainStorageName(a.workspaceToken),this.prodStorageName=Helpers.createProductStorageName(a.workspaceToken),this.integrationDelayTimeoutStart=Date.now(),this.SDKConfig=createSDKConfig(a),a){if(this.SDKConfig.isDevelopmentMode=!!a.hasOwnProperty("isDevelopmentMode")&&Helpers.returnConvertedBoolean(a.isDevelopmentMode),a.hasOwnProperty("serviceUrl")&&(this.SDKConfig.serviceUrl=a.serviceUrl),a.hasOwnProperty("secureServiceUrl")&&(this.SDKConfig.secureServiceUrl=a.secureServiceUrl),a.hasOwnProperty("v2ServiceUrl")&&(this.SDKConfig.v2ServiceUrl=a.v2ServiceUrl),a.hasOwnProperty("v2SecureServiceUrl")&&(this.SDKConfig.v2SecureServiceUrl=a.v2SecureServiceUrl),a.hasOwnProperty("identityUrl")&&(this.SDKConfig.identityUrl=a.identityUrl),a.hasOwnProperty("aliasUrl")&&(this.SDKConfig.aliasUrl=a.aliasUrl),a.hasOwnProperty("configUrl")&&(this.SDKConfig.configUrl=a.configUrl),a.hasOwnProperty("logLevel")&&(this.SDKConfig.logLevel=a.logLevel),this.SDKConfig.useNativeSdk=!!a.hasOwnProperty("useNativeSdk")&&a.useNativeSdk,a.hasOwnProperty("kits")&&(this.SDKConfig.kits=a.kits),this.SDKConfig.isIOS=a.hasOwnProperty("isIOS")?a.isIOS:mParticle.isIOS||!1,this.SDKConfig.useCookieStorage=!!a.hasOwnProperty("useCookieStorage")&&a.useCookieStorage,this.SDKConfig.maxProducts=a.hasOwnProperty("maxProducts")?a.maxProducts:Constants.DefaultConfig.maxProducts,this.SDKConfig.maxCookieSize=a.hasOwnProperty("maxCookieSize")?a.maxCookieSize:Constants.DefaultConfig.maxCookieSize,a.hasOwnProperty("appName")&&(this.SDKConfig.appName=a.appName),this.SDKConfig.integrationDelayTimeout=a.hasOwnProperty("integrationDelayTimeout")?a.integrationDelayTimeout:Constants.DefaultConfig.integrationDelayTimeout,a.hasOwnProperty("identifyRequest")&&(this.SDKConfig.identifyRequest=a.identifyRequest),a.hasOwnProperty("identityCallback")){var e=a.identityCallback;Validators$3.isFunction(e)?this.SDKConfig.identityCallback=a.identityCallback:b.warning("The optional callback must be a function. You tried entering a(n) "+_typeof_1(e)," . Callback not set. Please set your callback again.");}a.hasOwnProperty("appVersion")&&(this.SDKConfig.appVersion=a.appVersion),a.hasOwnProperty("sessionTimeout")&&(this.SDKConfig.sessionTimeout=a.sessionTimeout),this.SDKConfig.forceHttps=!a.hasOwnProperty("forceHttps")||a.forceHttps,a.hasOwnProperty("customFlags")&&(this.SDKConfig.customFlags=a.customFlags),a.hasOwnProperty("workspaceToken")?this.SDKConfig.workspaceToken=a.workspaceToken:b.warning("You should have a workspaceToken on your mParticle.config object for security purposes."),a.hasOwnProperty("requiredWebviewBridgeName")?this.SDKConfig.requiredWebviewBridgeName=a.requiredWebviewBridgeName:a.hasOwnProperty("workspaceToken")&&(this.SDKConfig.requiredWebviewBridgeName=a.workspaceToken),this.SDKConfig.minWebviewBridgeVersion=a.hasOwnProperty("minWebviewBridgeVersion")?a.minWebviewBridgeVersion:1,this.SDKConfig.aliasMaxWindow=a.hasOwnProperty("aliasMaxWindow")?a.aliasMaxWindow:Constants.DefaultConfig.aliasMaxWindow,a.hasOwnProperty("flags")||(this.SDKConfig.flags={}),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.EventsV3)||(this.SDKConfig.flags[Constants.FeatureFlags.EventsV3]=0),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.EventBatchingIntervalMillis)||(this.SDKConfig.flags[Constants.FeatureFlags.EventBatchingIntervalMillis]=Constants.DefaultConfig.uploadInterval),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.ReportBatching)||(this.SDKConfig.flags[Constants.FeatureFlags.ReportBatching]=!1);}}

function Logger(a){var b=a.logLevel||"warning";this.logger=a.hasOwnProperty("logger")?a.logger:new ConsoleLogger,this.verbose=function(a){"none"!==b&&this.logger.verbose&&"verbose"===b&&this.logger.verbose(a);},this.warning=function(a){"none"!==b&&this.logger.warning&&("verbose"===b||"warning"===b)&&this.logger.warning(a);},this.error=function(a){"none"!==b&&this.logger.error&&this.logger.error(a);},this.setLogLevel=function(a){b=a;};}function ConsoleLogger(){this.verbose=function(a){window.console&&window.console.info&&window.console.info(a);},this.error=function(a){window.console&&window.console.error&&window.console.error(a);},this.warning=function(a){window.console&&window.console.warn&&window.console.warn(a);};}

var StorageNames$2=Constants.StorageNames,Base64$2=Polyfill.Base64,CookiesGlobalSettingsKeys={das:1},MPIDKeys={ui:1};//  if there is a cookie or localStorage:
//  1. determine which version it is ('mprtcl-api', 'mprtcl-v2', 'mprtcl-v3', 'mprtcl-v4')
//  2. return if 'mprtcl-v4', otherwise migrate to mprtclv4 schema
// 3. if 'mprtcl-api', could be JSSDKv2 or JSSDKv1. JSSDKv2 cookie has a 'globalSettings' key on it
function migrate(){try{migrateCookies();}catch(a){Persistence.expireCookies(StorageNames$2.cookieNameV3),Persistence.expireCookies(StorageNames$2.cookieNameV4),mParticle.Logger.error("Error migrating cookie: "+a);}if(mParticle.Store.isLocalStorageAvailable)try{migrateLocalStorage();}catch(a){localStorage.removeItem(StorageNames$2.localStorageNameV3),localStorage.removeItem(StorageNames$2.localStorageNameV4),mParticle.Logger.error("Error migrating localStorage: "+a);}}function migrateCookies(){var a,b,c,d,e,f,g=window.document.cookie.split("; ");for(mParticle.Logger.verbose(Constants.Messages.InformationMessages.CookieSearch),b=0,c=g.length;b<c;b++){//most recent version needs no migration
if(d=g[b].split("="),e=Helpers.decoded(d.shift()),f=Helpers.decoded(d.join("=")),e===mParticle.Store.storageName)return;if(e===StorageNames$2.cookieNameV4)return finishCookieMigration(f,StorageNames$2.cookieNameV4),void(mParticle.Store.isLocalStorageAvailable&&migrateProductsToNameSpace());// migration path for SDKv1CookiesV3, doesn't need to be encoded
if(e===StorageNames$2.cookieNameV3){a=convertSDKv1CookiesV3ToSDKv2CookiesV4(f),finishCookieMigration(a,StorageNames$2.cookieNameV3);break}}}function finishCookieMigration(a,b){var c,d,e=new Date,f=Persistence.getCookieDomain();c=new Date(e.getTime()+1e3*(60*(60*(24*StorageNames$2.CookieExpiration)))).toGMTString(),d=""===f?"":";domain="+f,mParticle.Logger.verbose(Constants.Messages.InformationMessages.CookieSet),window.document.cookie=encodeURIComponent(mParticle.Store.storageName)+"="+a+";expires="+c+";path=/"+d,Persistence.expireCookies(b),mParticle.Store.migratingToIDSyncCookies=!0;}function convertSDKv1CookiesV3ToSDKv2CookiesV4(a){a=Persistence.replacePipesWithCommas(Persistence.replaceApostrophesWithQuotes(a));var b=JSON.parse(a),c=JSON.parse(restructureToV4Cookie(a));return b.mpid&&(c.gs.csm.push(b.mpid),c.gs.csm=Base64$2.encode(JSON.stringify(c.gs.csm)),migrateProductsFromSDKv1ToSDKv2CookiesV4(b,b.mpid)),JSON.stringify(c)}function restructureToV4Cookie(a){try{var b={gs:{csm:[]}};for(var c in a=JSON.parse(a),a)a.hasOwnProperty(c)&&(CookiesGlobalSettingsKeys[c]?b.gs[c]=a[c]:"mpid"===c?b.cu=a[c]:a.mpid&&(b[a.mpid]=b[a.mpid]||{},MPIDKeys[c]&&(b[a.mpid][c]=a[c])));return JSON.stringify(b)}catch(a){mParticle.Logger.error("Failed to restructure previous cookie into most current cookie schema");}}function migrateProductsToNameSpace(){var a=StorageNames$2.localStorageProductsV4,b=localStorage.getItem(StorageNames$2.localStorageProductsV4);localStorage.setItem(mParticle.Store.prodStorageName,b),localStorage.removeItem(a);}function migrateProductsFromSDKv1ToSDKv2CookiesV4(a,b){if(mParticle.Store.isLocalStorageAvailable){var c={};if(c[b]={},a.cp){try{c[b].cp=JSON.parse(Base64$2.decode(a.cp));}catch(d){c[b].cp=a.cp;}Array.isArray(c[b].cp)||(c[b].cp=[]);}localStorage.setItem(mParticle.Store.prodStorageName,Base64$2.encode(JSON.stringify(c)));}}function migrateLocalStorage(){function a(a,b){try{window.localStorage.setItem(encodeURIComponent(mParticle.Store.storageName),a);}catch(a){mParticle.Logger.error("Error with setting localStorage item.");}window.localStorage.removeItem(encodeURIComponent(b));}var b,c,d,e,f=StorageNames$2.localStorageNameV3,g=StorageNames$2.localStorageNameV4,h=window.localStorage.getItem(mParticle.Store.storageName);if(!h){if(c=window.localStorage.getItem(g),c)return a(c,g),void migrateProductsToNameSpace();if(d=window.localStorage.getItem(f),d){// localStorage may contain only products, or the full persistence
// when there is an MPID on the cookie, it is the full persistence
if(mParticle.Store.migratingToIDSyncCookies=!0,e=d.slice(),d=JSON.parse(Persistence.replacePipesWithCommas(Persistence.replaceApostrophesWithQuotes(d))),d.mpid)return d=JSON.parse(convertSDKv1CookiesV3ToSDKv2CookiesV4(e)),void a(JSON.stringify(d),f);// if no MPID, it is only the products
if((d.cp||d.pb)&&!d.mpid)return b=Persistence.getCookie(),b?(migrateProductsFromSDKv1ToSDKv2CookiesV4(d,b.cu),void localStorage.removeItem(StorageNames$2.localStorageNameV3)):void localStorage.removeItem(StorageNames$2.localStorageNameV3)}}}var Migrations = {migrate:migrate,convertSDKv1CookiesV3ToSDKv2CookiesV4:convertSDKv1CookiesV3ToSDKv2CookiesV4};

function startForwardingStatsTimer(){mParticle._forwardingStatsTimer=setInterval(function(){prepareAndSendForwardingStatsBatch();},mParticle.Store.SDKConfig.forwarderStatsTimeout);}function prepareAndSendForwardingStatsBatch(){var a=Forwarders.getForwarderStatsQueue(),b=Persistence.forwardingStatsBatches.uploadsTable,c=Date.now();for(var d in a.length&&(b[c]={uploading:!1,data:a},Forwarders.setForwarderStatsQueue([])),b)(function(a){if(b.hasOwnProperty(a)&&!1===b[a].uploading){var c=function(){4===d.readyState&&(200===d.status||202===d.status?(mParticle.Logger.verbose("Successfully sent  "+d.statusText+" from server"),delete b[a]):"4"===d.status.toString()[0]?429!==d.status&&delete b[a]:b[a].uploading=!1);},d=Helpers.createXHR(c),e=b[a].data;b[a].uploading=!0,ApiClient.sendBatchForwardingStatsToServer(e,d);}})(d);}

var getDeviceId$1=Persistence.getDeviceId,Messages$8=Constants.Messages,Validators$4=Helpers.Validators,mParticleUser$1=Identity.mParticleUser,IdentityAPI$2=Identity.IdentityAPI,mParticleUserCart$1=Identity.mParticleUserCart,HTTPCodes$2=Constants.HTTPCodes;Array.prototype.forEach||(Array.prototype.forEach=Polyfill.forEach),Array.prototype.map||(Array.prototype.map=Polyfill.map),Array.prototype.filter||(Array.prototype.filter=Polyfill.filter),Array.isArray||(Array.prototype.isArray=Polyfill.isArray);/**
 * Invoke these methods on the mParticle object.
 * Example: mParticle.endSession()
 *
 * @class mParticle
 */var mParticle$1={config:window.mParticle?window.mParticle.config:{},Store:{},getDeviceId:getDeviceId$1,generateHash:Helpers.generateHash,sessionManager:SessionManager,cookieSyncManager:cookieSyncManager,persistence:Persistence,isIOS:!!(window.mParticle&&window.mParticle.isIOS)&&window.mParticle.isIOS,Identity:IdentityAPI$2,Validators:Validators$4,_Identity:Identity,_IdentityRequest:Identity.IdentityRequest,IdentityType:Types.IdentityType,EventType:Types.EventType,CommerceEventType:Types.CommerceEventType,PromotionType:Types.PromotionActionType,ProductActionType:Types.ProductActionType,/**
     * Initializes the mParticle SDK
     *
     * @method init
     * @param {String} apiKey your mParticle assigned API key
     * @param {Object} [options] an options object for additional configuration
     */init:function init(a,b){// /config code - Fetch config when requestConfig = true, otherwise, proceed with SDKInitialization
// Since fetching the configuration is asynchronous, we must pass completeSDKInitialization
// to it for it to be run after fetched
return !b&&window.mParticle.config&&(window.console.warn("You did not pass a config object to mParticle.init(). Attempting to use the window.mParticle.config if it exists. Please note that in a future release, this may not work and mParticle will not initialize properly"),b=window.mParticle.config),runPreConfigFetchInitialization(a,b),b?void(!b.hasOwnProperty("requestConfig")||b.requestConfig?ApiClient.getSDKConfiguration(a,b,completeSDKInitialization):completeSDKInitialization(a,b)):void window.console.error("No config available on the window, please pass a config object to mParticle.init()")},setLogLevel:function setLogLevel(a){mParticle$1.Logger.setLogLevel(a);},/**
     * Completely resets the state of the SDK. mParticle.init(apiKey, window.mParticle.config) will need to be called again.
     * @method reset
     * @param {Boolean} keepPersistence if passed as true, this method will only reset the in-memory SDK state.
     */reset:function reset(a,b){mParticle$1.Store&&delete mParticle$1.Store,mParticle$1.Store=new Store(a),mParticle$1.Store.isLocalStorageAvailable=Persistence.determineLocalStorageAvailability(window.localStorage),Events.stopTracking(),b||Persistence.resetPersistence(),Persistence.forwardingStatsBatches.uploadsTable={},Persistence.forwardingStatsBatches.forwardingStatsEventQueue=[],mParticle$1.preInit={readyQueue:[],pixelConfigurations:[],integrationDelays:{},forwarderConstructors:[],isDevelopmentMode:!1};},ready:function ready(a){mParticle$1.Store.isInitialized&&"function"==typeof a?a():mParticle$1.preInit.readyQueue.push(a);},/**
     * Returns the mParticle SDK version number
     * @method getVersion
     * @return {String} mParticle SDK version number
     */getVersion:function getVersion(){return Constants.sdkVersion},/**
     * Sets the app version
     * @method setAppVersion
     * @param {String} version version number
     */setAppVersion:function setAppVersion(a){mParticle$1.Store.SDKConfig.appVersion=a,Persistence.update();},/**
     * Gets the app name
     * @method getAppName
     * @return {String} App name
     */getAppName:function getAppName(){return mParticle$1.Store.SDKConfig.appName},/**
     * Sets the app name
     * @method setAppName
     * @param {String} name App Name
     */setAppName:function setAppName(a){mParticle$1.Store.SDKConfig.appName=a;},/**
     * Gets the app version
     * @method getAppVersion
     * @return {String} App version
     */getAppVersion:function getAppVersion(){return mParticle$1.Store.SDKConfig.appVersion},/**
     * Stops tracking the location of the user
     * @method stopTrackingLocation
     */stopTrackingLocation:function stopTrackingLocation(){SessionManager.resetSessionTimer(),Events.stopTracking();},/**
     * Starts tracking the location of the user
     * @method startTrackingLocation
     * @param {Function} [callback] A callback function that is called when the location is either allowed or rejected by the user. A position object of schema {coords: {latitude: number, longitude: number}} is passed to the callback
     */startTrackingLocation:function startTrackingLocation(a){Validators$4.isFunction(a)||mParticle$1.Logger.warning("Warning: Location tracking is triggered, but not including a callback into the `startTrackingLocation` may result in events logged too quickly and not being associated with a location."),SessionManager.resetSessionTimer(),Events.startTracking(a);},/**
     * Sets the position of the user
     * @method setPosition
     * @param {Number} lattitude lattitude digit
     * @param {Number} longitude longitude digit
     */setPosition:function setPosition(a,b){SessionManager.resetSessionTimer(),"number"==typeof a&&"number"==typeof b?mParticle$1.Store.currentPosition={lat:a,lng:b}:mParticle$1.Logger.error("Position latitude and/or longitude must both be of type number");},/**
     * Starts a new session
     * @method startNewSession
     */startNewSession:function startNewSession(){SessionManager.startNewSession();},/**
     * Ends the current session
     * @method endSession
     */endSession:function endSession(){// Sends true as an over ride vs when endSession is called from the setInterval
SessionManager.endSession(!0);},/**
     * Logs a Base Event to mParticle's servers
     * @param {Object} event Base Event Object
     */logBaseEvent:function logBaseEvent(a){return (SessionManager.resetSessionTimer(),"string"!=typeof a.name)?void mParticle$1.Logger.error(Messages$8.ErrorMessages.EventNameInvalidType):(a.eventType||(a.eventType=Types.EventType.Unknown),Helpers.canLog()?void Events.logEvent(a):void mParticle$1.Logger.error(Messages$8.ErrorMessages.LoggingDisabled))},/**
     * Logs an event to mParticle's servers
     * @method logEvent
     * @param {String} eventName The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/web/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     * @param {Object} [customFlags] Additional customFlags
     */logEvent:function logEvent(a,b,c,d){return (SessionManager.resetSessionTimer(),"string"!=typeof a)?void mParticle$1.Logger.error(Messages$8.ErrorMessages.EventNameInvalidType):(b||(b=Types.EventType.Unknown),Helpers.isEventType(b)?Helpers.canLog()?void Events.logEvent({messageType:Types.MessageType.PageEvent,name:a,data:c,eventType:b,customFlags:d}):void mParticle$1.Logger.error(Messages$8.ErrorMessages.LoggingDisabled):void mParticle$1.Logger.error("Invalid event type: "+b+", must be one of: \n"+JSON.stringify(Types.EventType)))},/**
     * Used to log custom errors
     *
     * @method logError
     * @param {String or Object} error The name of the error (string), or an object formed as follows {name: 'exampleName', message: 'exampleMessage', stack: 'exampleStack'}
     * @param {Object} [attrs] Custom attrs to be passed along with the error event; values must be string, number, or boolean
     */logError:function logError(a,b){if(SessionManager.resetSessionTimer(),!!a){"string"==typeof a&&(a={message:a});var c={m:a.message?a.message:a,s:"Error",t:a.stack};if(b){var d=Helpers.sanitizeAttributes(b);for(var e in d)c[e]=d[e];}Events.logEvent({messageType:Types.MessageType.CrashReport,name:a.name?a.name:"Error",data:c,eventType:Types.EventType.Other});}},/**
     * Logs `click` events
     * @method logLink
     * @param {String} selector The selector to add a 'click' event to (ex. #purchase-event)
     * @param {String} [eventName] The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/javascript/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     */logLink:function logLink(a,b,c,d){SessionManager.resetSessionTimer(),Events.addEventHandler("click",a,b,d,c);},/**
     * Logs `submit` events
     * @method logForm
     * @param {String} selector The selector to add the event handler to (ex. #search-event)
     * @param {String} [eventName] The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/javascript/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     */logForm:function logForm(a,b,c,d){SessionManager.resetSessionTimer(),Events.addEventHandler("submit",a,b,d,c);},/**
     * Logs a page view
     * @method logPageView
     * @param {String} eventName The name of the event. Defaults to 'PageView'.
     * @param {Object} [attrs] Attributes for the event
     * @param {Object} [customFlags] Custom flags for the event
     */logPageView:function logPageView(a,b,c){if(SessionManager.resetSessionTimer(),Helpers.canLog()){if(Validators$4.isStringOrNumber(a)||(a="PageView"),!b)b={hostname:window.location.hostname,title:window.document.title};else if(!Helpers.isObject(b))return void mParticle$1.Logger.error("The attributes argument must be an object. A "+_typeof_1(b)+" was entered. Please correct and retry.");if(c&&!Helpers.isObject(c))return void mParticle$1.Logger.error("The customFlags argument must be an object. A "+_typeof_1(c)+" was entered. Please correct and retry.")}Events.logEvent({messageType:Types.MessageType.PageView,name:a,data:b,eventType:Types.EventType.Unknown,customFlags:c});},Consent:{createGDPRConsent:Consent.createGDPRConsent,createConsentState:Consent.createConsentState},/**
     * Invoke these methods on the mParticle.eCommerce object.
     * Example: mParticle.eCommerce.createImpresion(...)
     * @class mParticle.eCommerce
     */eCommerce:{/**
         * Invoke these methods on the mParticle.eCommerce.Cart object.
         * Example: mParticle.eCommerce.Cart.add(...)
         * @class mParticle.eCommerce.Cart
         */Cart:{/**
             * Adds a product to the cart
             * @method add
             * @param {Object} product The product you want to add to the cart
             * @param {Boolean} [logEventBoolean] Option to log the event to mParticle's servers. If blank, no logging occurs.
             */add:function add(a,b){var c,d=mParticle$1.Identity.getCurrentUser();d&&(c=d.getMPID()),mParticleUserCart$1(c).add(a,b);},/**
             * Removes a product from the cart
             * @method remove
             * @param {Object} product The product you want to add to the cart
             * @param {Boolean} [logEventBoolean] Option to log the event to mParticle's servers. If blank, no logging occurs.
             */remove:function remove(a,b){var c,d=mParticle$1.Identity.getCurrentUser();d&&(c=d.getMPID()),mParticleUserCart$1(c).remove(a,b);},/**
             * Clears the cart
             * @method clear
             */clear:function clear(){var a,b=mParticle$1.Identity.getCurrentUser();b&&(a=b.getMPID()),mParticleUserCart$1(a).clear();}},/**
         * Sets the currency code
         * @for mParticle.eCommerce
         * @method setCurrencyCode
         * @param {String} code The currency code
         */setCurrencyCode:function setCurrencyCode(a){return "string"==typeof a?void(SessionManager.resetSessionTimer(),mParticle$1.Store.currencyCode=a):void mParticle$1.Logger.error("Code must be a string")},/**
         * Creates a product
         * @for mParticle.eCommerce
         * @method createProduct
         * @param {String} name product name
         * @param {String} sku product sku
         * @param {Number} price product price
         * @param {Number} [quantity] product quantity. If blank, defaults to 1.
         * @param {String} [variant] product variant
         * @param {String} [category] product category
         * @param {String} [brand] product brand
         * @param {Number} [position] product position
         * @param {String} [coupon] product coupon
         * @param {Object} [attributes] product attributes
         */createProduct:function createProduct(a,b,c,d,e,f,g,h,i,j){return SessionManager.resetSessionTimer(),Ecommerce.createProduct(a,b,c,d,e,f,g,h,i,j)},/**
         * Creates a promotion
         * @for mParticle.eCommerce
         * @method createPromotion
         * @param {String} id a unique promotion id
         * @param {String} [creative] promotion creative
         * @param {String} [name] promotion name
         * @param {Number} [position] promotion position
         */createPromotion:function createPromotion(a,b,c,d){return SessionManager.resetSessionTimer(),Ecommerce.createPromotion(a,b,c,d)},/**
         * Creates a product impression
         * @for mParticle.eCommerce
         * @method createImpression
         * @param {String} name impression name
         * @param {Object} product the product for which an impression is being created
         */createImpression:function createImpression(a,b){return SessionManager.resetSessionTimer(),Ecommerce.createImpression(a,b)},/**
         * Creates a transaction attributes object to be used with a checkout
         * @for mParticle.eCommerce
         * @method createTransactionAttributes
         * @param {String or Number} id a unique transaction id
         * @param {String} [affiliation] affilliation
         * @param {String} [couponCode] the coupon code for which you are creating transaction attributes
         * @param {Number} [revenue] total revenue for the product being purchased
         * @param {String} [shipping] the shipping method
         * @param {Number} [tax] the tax amount
         */createTransactionAttributes:function createTransactionAttributes(a,b,c,d,e,f){return SessionManager.resetSessionTimer(),Ecommerce.createTransactionAttributes(a,b,c,d,e,f)},/**
         * Logs a checkout action
         * @for mParticle.eCommerce
         * @method logCheckout
         * @param {Number} step checkout step number
         * @param {Object} options
         * @param {Object} attrs
         * @param {Object} [customFlags] Custom flags for the event
         */logCheckout:function logCheckout(a,b,c,d){SessionManager.resetSessionTimer(),Events.logCheckoutEvent(a,b,c,d);},/**
         * Logs a product action
         * @for mParticle.eCommerce
         * @method logProductAction
         * @param {Number} productActionType product action type as found [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/src/types.js#L206-L218)
         * @param {Object} product the product for which you are creating the product action
         * @param {Object} [attrs] attributes related to the product action
         * @param {Object} [customFlags] Custom flags for the event
         */logProductAction:function logProductAction(a,b,c,d){SessionManager.resetSessionTimer(),Events.logProductActionEvent(a,b,c,d);},/**
         * Logs a product purchase
         * @for mParticle.eCommerce
         * @method logPurchase
         * @param {Object} transactionAttributes transactionAttributes object
         * @param {Object} product the product being purchased
         * @param {Boolean} [clearCart] boolean to clear the cart after logging or not. Defaults to false
         * @param {Object} [attrs] other attributes related to the product purchase
         * @param {Object} [customFlags] Custom flags for the event
         */logPurchase:function logPurchase(a,b,c,d,e){return a&&b?void(SessionManager.resetSessionTimer(),Events.logPurchaseEvent(a,b,d,e),!0===c&&mParticle$1.eCommerce.Cart.clear()):void mParticle$1.Logger.error(Messages$8.ErrorMessages.BadLogPurchase)},/**
         * Logs a product promotion
         * @for mParticle.eCommerce
         * @method logPromotion
         * @param {Number} type the promotion type as found [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/src/types.js#L275-L279)
         * @param {Object} promotion promotion object
         * @param {Object} [attrs] boolean to clear the cart after logging or not
         * @param {Object} [customFlags] Custom flags for the event
         */logPromotion:function logPromotion(a,b,c,d){SessionManager.resetSessionTimer(),Events.logPromotionEvent(a,b,c,d);},/**
         * Logs a product impression
         * @for mParticle.eCommerce
         * @method logImpression
         * @param {Object} impression product impression object
         * @param {Object} attrs attributes related to the impression log
         * @param {Object} [customFlags] Custom flags for the event
         */logImpression:function logImpression(a,b,c){SessionManager.resetSessionTimer(),Events.logImpressionEvent(a,b,c);},/**
         * Logs a refund
         * @for mParticle.eCommerce
         * @method logRefund
         * @param {Object} transactionAttributes transaction attributes related to the refund
         * @param {Object} product product being refunded
         * @param {Boolean} [clearCart] boolean to clear the cart after refund is logged. Defaults to false.
         * @param {Object} [attrs] attributes related to the refund
         * @param {Object} [customFlags] Custom flags for the event
         */logRefund:function logRefund(a,b,c,d,e){SessionManager.resetSessionTimer(),Events.logRefundEvent(a,b,d,e),!0===c&&mParticle$1.eCommerce.Cart.clear();},expandCommerceEvent:function expandCommerceEvent(a){return SessionManager.resetSessionTimer(),Ecommerce.expandCommerceEvent(a)}},/**
     * Sets a session attribute
     * @for mParticle
     * @method setSessionAttribute
     * @param {String} key key for session attribute
     * @param {String or Number} value value for session attribute
     */setSessionAttribute:function setSessionAttribute(a,b){// Logs to cookie
// And logs to in-memory object
// Example: mParticle.setSessionAttribute('location', '33431');
if(SessionManager.resetSessionTimer(),Helpers.canLog()){if(!Validators$4.isValidAttributeValue(b))return void mParticle$1.Logger.error(Messages$8.ErrorMessages.BadAttribute);if(!Validators$4.isValidKeyValue(a))return void mParticle$1.Logger.error(Messages$8.ErrorMessages.BadKey);if(mParticle$1.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:a,value:b}));else{var c=Helpers.findKeyInObject(mParticle$1.Store.sessionAttributes,a);c&&(a=c),mParticle$1.Store.sessionAttributes[a]=b,Persistence.update(),Forwarders.applyToForwarders("setSessionAttribute",[a,b]);}}},/**
     * Set opt out of logging
     * @for mParticle
     * @method setOptOut
     * @param {Boolean} isOptingOut boolean to opt out or not. When set to true, opt out of logging.
     */setOptOut:function setOptOut(a){SessionManager.resetSessionTimer(),mParticle$1.Store.isEnabled=!a,Events.logOptOut(),Persistence.update(),mParticle$1.Store.activeForwarders.length&&mParticle$1.Store.activeForwarders.forEach(function(b){if(b.setOptOut){var c=b.setOptOut(a);c&&mParticle$1.Logger.verbose(c);}});},/**
     * Set or remove the integration attributes for a given integration ID.
     * Integration attributes are keys and values specific to a given integration. For example,
     * many integrations have their own internal user/device ID. mParticle will store integration attributes
     * for a given device, and will be able to use these values for server-to-server communication to services.
     * This is often useful when used in combination with a server-to-server feed, allowing the feed to be enriched
     * with the necessary integration attributes to be properly forwarded to the given integration.
     * @for mParticle
     * @method setIntegrationAttribute
     * @param {Number} integrationId mParticle integration ID
     * @param {Object} attrs a map of attributes that will replace any current attributes. The keys are predefined by mParticle.
     * Please consult with the mParticle docs or your solutions consultant for the correct value. You may
     * also pass a null or empty map here to remove all of the attributes.
     */setIntegrationAttribute:function setIntegrationAttribute(a,b){if("number"!=typeof a)return void mParticle$1.Logger.error("integrationId must be a number");if(null===b)mParticle$1.Store.integrationAttributes[a]={};else{if(!Helpers.isObject(b))return void mParticle$1.Logger.error("Attrs must be an object with keys and values. You entered a "+_typeof_1(b));if(0===Object.keys(b).length)mParticle$1.Store.integrationAttributes[a]={};else for(var c in b)if("string"!=typeof c){mParticle$1.Logger.error("Keys must be strings, you entered a "+_typeof_1(c));continue}else if("string"==typeof b[c])Helpers.isObject(mParticle$1.Store.integrationAttributes[a])?mParticle$1.Store.integrationAttributes[a][c]=b[c]:(mParticle$1.Store.integrationAttributes[a]={},mParticle$1.Store.integrationAttributes[a][c]=b[c]);else{mParticle$1.Logger.error("Values for integration attributes must be strings. You entered a "+_typeof_1(b[c]));continue}}Persistence.update();},/**
     * Get integration attributes for a given integration ID.
     * @method getIntegrationAttributes
     * @param {Number} integrationId mParticle integration ID
     * @return {Object} an object map of the integrationId's attributes
     */getIntegrationAttributes:function getIntegrationAttributes(a){return mParticle$1.Store.integrationAttributes[a]?mParticle$1.Store.integrationAttributes[a]:{}},addForwarder:function addForwarder(a){mParticle$1.preInit.forwarderConstructors.push(a);},configurePixel:function configurePixel(a){Forwarders.configurePixel(a);},_getActiveForwarders:function _getActiveForwarders(){return mParticle$1.Store.activeForwarders},_getIntegrationDelays:function _getIntegrationDelays(){return mParticle$1.preInit.integrationDelays},_setIntegrationDelay:function _setIntegrationDelay(a,b){mParticle$1.preInit.integrationDelays[a]=b;}};function completeSDKInitialization(a,b){if(mParticle$1.Store.configurationLoaded=!0,mParticle$1.Store.webviewBridgeEnabled)NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:"$src_env",value:"webview"})),a&&NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:"$src_key",value:a}));else{var c;// If no initialIdentityRequest is passed in, we set the user identities to what is currently in cookies for the identify request
if(Helpers.isObject(mParticle$1.Store.SDKConfig.identifyRequest)&&Helpers.isObject(mParticle$1.Store.SDKConfig.identifyRequest.userIdentities)&&0===Object.keys(mParticle$1.Store.SDKConfig.identifyRequest.userIdentities).length||!mParticle$1.Store.SDKConfig.identifyRequest){var d={};if(c=mParticle$1.Identity.getCurrentUser(),c){var e=c.getUserIdentities().userIdentities||{};for(var f in e)e.hasOwnProperty(f)&&(d[f]=e[f]);}mParticle$1.Store.SDKConfig.identifyRequest={userIdentities:d};}// If migrating from pre-IDSync to IDSync, a sessionID will exist and an identify request will not have been fired, so we need this check
mParticle$1.Store.migratingToIDSyncCookies&&(IdentityAPI$2.identify(mParticle$1.Store.SDKConfig.identifyRequest,mParticle$1.Store.SDKConfig.identityCallback),mParticle$1.Store.migratingToIDSyncCookies=!1),c=IdentityAPI$2.getCurrentUser(),Helpers.getFeatureFlag(Constants.FeatureFlags.ReportBatching)&&startForwardingStatsTimer(),Forwarders.processForwarders(b,ApiClient.prepareForwardingStats),!mParticle$1.Store.identifyCalled&&mParticle$1.Store.SDKConfig.identityCallback&&c&&c.getMPID()&&mParticle$1.Store.SDKConfig.identityCallback({httpCode:HTTPCodes$2.activeSession,getUser:function getUser(){return mParticleUser$1(c.getMPID())},getPreviousUser:function getPreviousUser(){var a=mParticle$1.Identity.getUsers(),b=a.shift();return b&&c&&b.getMPID()===c.getMPID()&&(b=a.shift()),b||null},body:{mpid:c.getMPID(),is_logged_in:mParticle$1.Store.isLoggedIn,matched_identities:c.getUserIdentities().userIdentities,context:null,is_ephemeral:!1}}),mParticle$1.sessionManager.initialize(),Events.logAST();}// Call any functions that are waiting for the library to be initialized
mParticle$1.preInit.readyQueue&&mParticle$1.preInit.readyQueue.length&&(mParticle$1.preInit.readyQueue.forEach(function(a){Validators$4.isFunction(a)?a():Array.isArray(a)&&processPreloadedItem(a);}),mParticle$1.preInit.readyQueue=[]),mParticle$1.Store.isInitialized=!0,mParticle$1.Store.isFirstRun&&(mParticle$1.Store.isFirstRun=!1);}function runPreConfigFetchInitialization(a,b){//check to see if localStorage is available for migrating purposes
mParticle$1.Logger=new Logger(b),mParticle$1.Store=new Store(b,mParticle$1.Logger),mParticle$1.Store.devToken=a||null,mParticle$1.Logger.verbose(Messages$8.InformationMessages.StartingInitialization),mParticle$1.Store.isLocalStorageAvailable=Persistence.determineLocalStorageAvailability(window.localStorage),mParticle$1.Store.webviewBridgeEnabled=NativeSdkHelpers.isWebviewEnabled(mParticle$1.Store.SDKConfig.requiredWebviewBridgeName,mParticle$1.Store.SDKConfig.minWebviewBridgeVersion),mParticle$1.Store.webviewBridgeEnabled||(Migrations.migrate(),Persistence.initializeStorage());}function processPreloadedItem(a){var b=a,c=b.splice(0,1)[0];// if the first argument is a method on the base mParticle object, run it
if(mParticle$1[b[0]])mParticle$1[c].apply(this,b);else{var d=c.split(".");try{for(var e,f=mParticle$1,g=0;g<d.length;g++)e=d[g],f=f[e];f.apply(this,b);}catch(a){mParticle$1.Logger.verbose("Unable to compute proper mParticle function "+a);}}}mParticle$1.preInit={readyQueue:[],integrationDelays:{},forwarderConstructors:[]},window.mParticle&&window.mParticle.config&&window.mParticle.config.hasOwnProperty("rq")&&(mParticle$1.preInit.readyQueue=window.mParticle.config.rq),window.mParticle=mParticle$1;

/* harmony default export */ var mparticle_esm = (mParticle$1);

// EXTERNAL MODULE: ./node_modules/@mparticle/web-media-sdk/dist/mparticle-media.common.js
var mparticle_media_common = __webpack_require__(0);
var mparticle_media_common_default = /*#__PURE__*/__webpack_require__.n(mparticle_media_common);

// EXTERNAL MODULE: ./node_modules/@mparticle/web-adobe-client-kit/dist/AdobeClientSideKit.common.js
var AdobeClientSideKit_common = __webpack_require__(1);
var AdobeClientSideKit_common_default = /*#__PURE__*/__webpack_require__.n(AdobeClientSideKit_common);

// CONCATENATED MODULE: ./src/index.js




const mParticleConfig = {
    isDevelopmentMode: true
};

var apiKey = 'us1-163fa0c573a70f489696978145cf8d53'; // YOUR API KEY HERE

AdobeClientSideKit_common_default.a.register(mParticleConfig);

window.mediaSDK = new mparticle_media_common_default.a(
    mparticle_esm,
    '1234567',
    'My sweet sweet media',
    120000,
    'Video',
    'OnDemand',
    true,
    true
);

mparticle_esm.init(apiKey, mParticleConfig);


/***/ })
/******/ ]);