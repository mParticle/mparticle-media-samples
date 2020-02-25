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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// Base64 encoder/decoder - http://www.webtoolkit.info/javascript_base64.html
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

var Constants={sdkVersion:"2.11.3",sdkVendor:"mparticle",platform:"web",Messages:{ErrorMessages:{NoToken:"A token must be specified.",EventNameInvalidType:"Event name must be a valid string value.",EventDataInvalidType:"Event data must be a valid object hash.",LoggingDisabled:"Event logging is currently disabled.",CookieParseError:"Could not parse cookie",EventEmpty:"Event object is null or undefined, cancelling send",APIRequestEmpty:"APIRequest is null or undefined, cancelling send",NoEventType:"Event type must be specified.",TransactionIdRequired:"Transaction ID is required",TransactionRequired:"A transaction attributes object is required",PromotionIdRequired:"Promotion ID is required",BadAttribute:"Attribute value cannot be object or array",BadKey:"Key value cannot be object or array",BadLogPurchase:"Transaction attributes and a product are both required to log a purchase, https://docs.mparticle.com/?javascript#measuring-transactions"},InformationMessages:{CookieSearch:"Searching for cookie",CookieFound:"Cookie found, parsing values",CookieNotFound:"Cookies not found",CookieSet:"Setting cookie",CookieSync:"Performing cookie sync",SendBegin:"Starting to send event",SendIdentityBegin:"Starting to send event to identity server",SendWindowsPhone:"Sending event to Windows Phone container",SendIOS:"Calling iOS path: ",SendAndroid:"Calling Android JS interface method: ",SendHttp:"Sending event to mParticle HTTP service",SendAliasHttp:"Sending alias request to mParticle HTTP service",SendIdentityHttp:"Sending event to mParticle HTTP service",StartingNewSession:"Starting new Session",StartingLogEvent:"Starting to log event",StartingLogOptOut:"Starting to log user opt in/out",StartingEndSession:"Starting to end session",StartingInitialization:"Starting to initialize",StartingLogCommerceEvent:"Starting to log commerce event",StartingAliasRequest:"Starting to Alias MPIDs",LoadingConfig:"Loading configuration options",AbandonLogEvent:"Cannot log event, logging disabled or developer token not set",AbandonAliasUsers:"Cannot Alias Users, logging disabled or developer token not set",AbandonStartSession:"Cannot start session, logging disabled or developer token not set",AbandonEndSession:"Cannot end session, logging disabled or developer token not set",NoSessionToEnd:"Cannot end session, no active session found"},ValidationMessages:{ModifyIdentityRequestUserIdentitiesPresent:"identityRequests to modify require userIdentities to be present. Request not sent to server. Please fix and try again",IdentityRequesetInvalidKey:"There is an invalid key on your identityRequest object. It can only contain a `userIdentities` object and a `onUserAlias` function. Request not sent to server. Please fix and try again.",OnUserAliasType:"The onUserAlias value must be a function. The onUserAlias provided is of type",UserIdentities:"The userIdentities key must be an object with keys of identityTypes and values of strings. Request not sent to server. Please fix and try again.",UserIdentitiesInvalidKey:"There is an invalid identity key on your `userIdentities` object within the identityRequest. Request not sent to server. Please fix and try again.",UserIdentitiesInvalidValues:"All user identity values must be strings or null. Request not sent to server. Please fix and try again.",AliasMissingMpid:"Alias Request must contain both a destinationMpid and a sourceMpid",AliasNonUniqueMpid:"Alias Request's destinationMpid and sourceMpid must be unique",AliasMissingTime:"Alias Request must have both a startTime and an endTime",AliasStartBeforeEndTime:"Alias Request's endTime must be later than its startTime"}},NativeSdkPaths:{LogEvent:"logEvent",SetUserTag:"setUserTag",RemoveUserTag:"removeUserTag",SetUserAttribute:"setUserAttribute",RemoveUserAttribute:"removeUserAttribute",SetSessionAttribute:"setSessionAttribute",AddToCart:"addToCart",RemoveFromCart:"removeFromCart",ClearCart:"clearCart",LogOut:"logOut",SetUserAttributeList:"setUserAttributeList",RemoveAllUserAttributes:"removeAllUserAttributes",GetUserAttributesLists:"getUserAttributesLists",GetAllUserAttributes:"getAllUserAttributes",Identify:"identify",Logout:"logout",Login:"login",Modify:"modify",Alias:"aliasUsers"},StorageNames:{localStorageName:"mprtcl-api",// Name of the mP localstorage, had cp and pb even if cookies were used, skipped v2
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
},DefaultUrls:{v1SecureServiceUrl:"jssdks.mparticle.com/v1/JS/",v2SecureServiceUrl:"jssdks.mparticle.com/v2/JS/",v3SecureServiceUrl:"jssdks.mparticle.com/v3/JS/",configUrl:"jssdkcdns.mparticle.com/JS/v2/",identityUrl:"identity.mparticle.com/v1/",aliasUrl:"jssdks.mparticle.com/v1/identity/"},Base64CookieKeys:{csm:1,sa:1,ss:1,ua:1,ui:1,csd:1,ia:1,con:1},SDKv2NonMPIDCookieKeys:{gs:1,cu:1,l:1,globalSettings:1,currentUserMPID:1},HTTPCodes:{noHttpCoverage:-1,activeIdentityRequest:-2,activeSession:-3,validationIssue:-4,nativeIdentityRequest:-5,loggingDisabledOrMissingAPIKey:-6,tooManyRequests:429},FeatureFlags:{ReportBatching:"reportBatching",EventsV3:"eventsV3",EventBatchingIntervalMillis:"eventBatchingIntervalMillis"},DefaultInstance:"default_instance"};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
function convertEvents(a, b, c) { if (!a)
    return null; if (!b || 1 > b.length)
    return null; var d = [], e = null, f = !0, g = !1, h = void 0; try {
    for (var i, j, k = b[Symbol.iterator](); !(f = (i = k.next()).done); f = !0)
        if (j = i.value, j) {
            e = j;
            var m = convertEvent(j);
            m && d.push(m);
        }
}
catch (a) {
    g = !0, h = a;
}
finally {
    try {
        f || null == k["return"] || k["return"]();
    }
    finally {
        if (g)
            throw h;
    }
} if (!e)
    return null; var l = { source_request_id: c._Helpers.generateUniqueId(), mpid: a, timestamp_unixtime_ms: new Date().getTime(), environment: e.Debug ? "development" : "production", events: d, mp_deviceid: e.DeviceId, sdk_version: e.SDKVersion, application_info: { application_version: e.AppVersion, application_name: e.AppName }, device_info: { platform: "web", screen_width: window.screen.width, screen_height: window.screen.height }, user_attributes: e.UserAttributes, user_identities: convertUserIdentities(e.UserIdentities), consent_state: convertConsentState(e.ConsentState), integration_attributes: e.IntegrationAttributes }; return e.DataPlan && e.DataPlan.PlanId && (l.context = { data_plan: { plan_id: e.DataPlan.PlanId, plan_version: e.DataPlan.PlanVersion || void 0 } }), l; }
function convertConsentState(a) { if (!a)
    return null; var b = { gdpr: convertGdprConsentState(a.getGDPRConsentState()), ccpa: convertCcpaConsentState(a.getCCPAConsentState()) }; return b; }
function convertGdprConsentState(a) { if (!a)
    return null; var b = {}; for (var c in a)
    a.hasOwnProperty(c) && (b[c] = { consented: a[c].Consented, hardware_id: a[c].HardwareId, document: a[c].ConsentDocument, timestamp_unixtime_ms: a[c].Timestamp, location: a[c].Location }); return b; }
function convertCcpaConsentState(a) { if (!a)
    return null; var b = { data_sale_opt_out: null }; return a.hasOwnProperty("data_sale_opt_out") && (b.data_sale_opt_out = { consented: a.data_sale_opt_out.Consented, hardware_id: a.data_sale_opt_out.HardwareId, document: a.data_sale_opt_out.ConsentDocument, timestamp_unixtime_ms: a.data_sale_opt_out.Timestamp, location: a.data_sale_opt_out.Location }), b; }
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
    function a(b, c) { var d = this; classCallCheck(this, a), defineProperty(this, "uploadIntervalMillis", void 0), defineProperty(this, "pendingEvents", void 0), defineProperty(this, "pendingUploads", void 0), defineProperty(this, "mpInstance", void 0), defineProperty(this, "uploadUrl", void 0), defineProperty(this, "batchingEnabled", void 0), this.mpInstance = b, this.uploadIntervalMillis = c, this.batchingEnabled = c >= a.MINIMUM_INTERVAL_MILLIS, this.uploadIntervalMillis < a.MINIMUM_INTERVAL_MILLIS && (this.uploadIntervalMillis = a.MINIMUM_INTERVAL_MILLIS), this.pendingEvents = [], this.pendingUploads = []; var e = this.mpInstance._Store, f = e.SDKConfig, g = e.devToken, h = this.mpInstance._Helpers.createServiceUrl(f.v3SecureServiceUrl, g); this.uploadUrl = "".concat(h, "/events"), setTimeout(function () { d.prepareAndUpload(!0, !1); }, this.uploadIntervalMillis), this.addEventListeners(); }
    return createClass(a, [{ key: "addEventListeners", value: function addEventListeners() { var a = this; window.addEventListener("beforeunload", function () { a.prepareAndUpload(!1, a.isBeaconAvailable()); }), window.addEventListener("pagehide", function () { a.prepareAndUpload(!1, a.isBeaconAvailable()); }); } }, { key: "isBeaconAvailable", value: function isBeaconAvailable() { return !!navigator.sendBeacon; } }, { key: "queueEvent", value: function queueEvent(a) { a && (a.IsFirstRun = this.mpInstance._Store.isFirstRun, this.pendingEvents.push(a), this.mpInstance.Logger.verbose("Queuing event: ".concat(JSON.stringify(a))), this.mpInstance.Logger.verbose("Queued event count: ".concat(this.pendingEvents.length)), !this.batchingEnabled && this.prepareAndUpload(!1, !1)); } /**
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
                    case 0: return e = this.mpInstance.Identity.getCurrentUser(), f = this.pendingEvents, this.pendingEvents = [], g = a.createNewUploads(f, e, this.mpInstance), g && g.length && (h = this.pendingUploads).push.apply(h, toConsumableArray(g)), i = this.pendingUploads, this.pendingUploads = [], b.next = 9, this.upload(this.mpInstance.Logger, i, d);
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
                } }, b, this, [[7, 30]]); })); return function upload() { return b.apply(this, arguments); }; }() }], [{ key: "createNewUploads", value: function createNewUploads(a, b, c) {
                if (!b || !a || !a.length)
                    return null; //bucket by MPID, and then by session, ordered by timestamp
                var d = [], e = new Map, f = !0, g = !1, h = void 0;
                try {
                    for (var i, j, k = a[Symbol.iterator](); !(f = (i = k.next()).done); f = !0) { //on initial startup, there may be events logged without an mpid.
                        if (j = i.value, !j.MPID) {
                            var C = b.getMPID();
                            j.MPID = C;
                        }
                        var D = e.get(j.MPID);
                        D || (D = []), D.push(j), e.set(j.MPID, D);
                    }
                }
                catch (a) {
                    g = !0, h = a;
                }
                finally {
                    try {
                        f || null == k["return"] || k["return"]();
                    }
                    finally {
                        if (g)
                            throw h;
                    }
                }
                for (var l = 0, m = Array.from(e.entries()); l < m.length; l++) {
                    var n = m[l], o = n[0], p = n[1], q = new Map, r = !0, s = !1, t = void 0;
                    try {
                        for (var u, v = p[Symbol.iterator](); !(r = (u = v.next()).done); r = !0) {
                            var w = u.value, x = q.get(w.SessionId);
                            x || (x = []), x.push(w), q.set(w.SessionId, x);
                        }
                    }
                    catch (a) {
                        s = !0, t = a;
                    }
                    finally {
                        try {
                            r || null == v["return"] || v["return"]();
                        }
                        finally {
                            if (s)
                                throw t;
                        }
                    }
                    for (var y = 0, z = Array.from(q.entries()); y < z.length; y++) {
                        var A = z[y], B = convertEvents(o, A[1], c);
                        B && d.push(B);
                    }
                }
                return d;
            } }]), a;
}();
defineProperty(BatchUploader, "CONTENT_TYPE", "text/plain;charset=UTF-8"), defineProperty(BatchUploader, "MINIMUM_INTERVAL_MILLIS", 500);

var HTTPCodes=Constants.HTTPCodes,Messages=Constants.Messages;function APIClient(a){this.uploader=null;var b=this;this.queueEventForBatchUpload=function(b){if(!this.uploader){var c=a._Helpers.getFeatureFlag(Constants.FeatureFlags.EventBatchingIntervalMillis);this.uploader=new BatchUploader(a,c);}this.uploader.queueEvent(b);},this.shouldEnableBatching=function(){if(!window.fetch)return !1;// Returns a string of a number that must be parsed
// Invalid strings will be parsed to NaN which is falsey
var b=parseInt(a._Helpers.getFeatureFlag(Constants.FeatureFlags.EventsV3),10);if(!b)return !1;var c=a._Helpers.getRampNumber(a._Store.deviceId);return b>=c},this.processQueuedEvents=function(){var c,d=a.Identity.getCurrentUser();if(d&&(c=d.getMPID()),a._Store.eventQueue.length&&c){var e=a._Store.eventQueue;a._Store.eventQueue=[],this.appendUserInfoToEvents(d,e),e.forEach(function(a){b.sendEventToServer(a);});}},this.appendUserInfoToEvents=function(b,c){c.forEach(function(c){c.MPID||a._ServerModel.appendUserInfo(b,c);});},this.sendEventToServer=function(b){if(a._Store.webviewBridgeEnabled)return void a._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.LogEvent,JSON.stringify(b));var c,d=a.Identity.getCurrentUser();// We queue events if there is no MPID (MPID is null, or === 0), or there are integrations that that require this to stall because integration attributes
// need to be set, or if we are still fetching the config (self hosted only), and so require delaying events
return d&&(c=d.getMPID()),a._Store.requireDelay=a._Helpers.isDelayedByIntegration(a._preInit.integrationDelays,a._Store.integrationDelayTimeoutStart,Date.now()),c&&!a._Store.requireDelay&&a._Store.configurationLoaded?void(this.processQueuedEvents(),this.shouldEnableBatching()?this.queueEventForBatchUpload(b):this.sendSingleEventToServer(b),b&&b.EventName!==Types.MessageType.AppStateTransition&&a._Forwarders.sendEventToForwarders(b)):(a.Logger.verbose("Event was added to eventQueue. eventQueue will be processed once a valid MPID is returned or there is no more integration imposed delay."),void a._Store.eventQueue.push(b))},this.sendSingleEventToServer=function(c){if(c.EventDataType!==Types.MessageType.Media){var d,e=function(){4===d.readyState&&(a.Logger.verbose("Received "+d.statusText+" from server"),b.parseEventResponse(d.responseText));};if(!c)return void a.Logger.error(Messages.ErrorMessages.EventEmpty);if(a.Logger.verbose(Messages.InformationMessages.SendHttp),d=a._Helpers.createXHR(e),d)try{d.open("post",a._Helpers.createServiceUrl(a._Store.SDKConfig.v2SecureServiceUrl,a._Store.devToken)+"/Events"),d.send(JSON.stringify(a._ServerModel.convertEventToDTO(c,a._Store.isFirstRun)));}catch(b){a.Logger.error("Error sending event to mParticle servers. "+b);}}},this.parseEventResponse=function(b){var c,d,e,f=new Date;if(b)try{if(a.Logger.verbose("Parsing response from server"),c=JSON.parse(b),c&&c.Store)for(d in a.Logger.verbose("Parsed store from response, updating local settings"),a._Store.serverSettings||(a._Store.serverSettings={}),c.Store)c.Store.hasOwnProperty(d)&&(e=c.Store[d],!e.Value||new Date(e.Expires)<f?a._Store.serverSettings.hasOwnProperty(d)&&delete a._Store.serverSettings[d]:a._Store.serverSettings[d]=e);a._Persistence.update();}catch(b){a.Logger.error("Error parsing JSON response from server: "+b.name);}},this.sendAliasRequest=function(b,c){var d,e=function(){if(4===d.readyState){//only parse error messages from failing requests
if(a.Logger.verbose("Received "+d.statusText+" from server"),200!==d.status&&202!==d.status&&d.responseText){var b=JSON.parse(d.responseText);if(b.hasOwnProperty("message")){var e=b.message;return void a._Helpers.invokeAliasCallback(c,d.status,e)}}a._Helpers.invokeAliasCallback(c,d.status);}};if(a.Logger.verbose(Messages.InformationMessages.SendAliasHttp),d=a._Helpers.createXHR(e),d)try{d.open("post",a._Helpers.createServiceUrl(a._Store.SDKConfig.aliasUrl,a._Store.devToken)+"/Alias"),d.send(JSON.stringify(b));}catch(b){a._Helpers.invokeAliasCallback(c,HTTPCodes.noHttpCoverage,b),a.Logger.error("Error sending alias request to mParticle servers. "+b);}},this.sendIdentityRequest=function(b,c,d,e,f,g){var h,i,j=function(){4===h.readyState&&(a.Logger.verbose("Received "+h.statusText+" from server"),f(h,i,d,e,c));};if(a.Logger.verbose(Messages.InformationMessages.SendIdentityBegin),!b)return void a.Logger.error(Messages.ErrorMessages.APIRequestEmpty);if(a.Logger.verbose(Messages.InformationMessages.SendIdentityHttp),h=a._Helpers.createXHR(j),h)try{a._Store.identityCallInFlight?a._Helpers.invokeCallback(d,HTTPCodes.activeIdentityRequest,"There is currently an Identity request processing. Please wait for this to return before requesting again"):(i=g||null,"modify"===c?h.open("post",a._Helpers.createServiceUrl(a._Store.SDKConfig.identityUrl)+g+"/"+c):h.open("post",a._Helpers.createServiceUrl(a._Store.SDKConfig.identityUrl)+c),h.setRequestHeader("Content-Type","application/json"),h.setRequestHeader("x-mp-key",a._Store.devToken),a._Store.identityCallInFlight=!0,h.send(JSON.stringify(b)));}catch(b){a._Store.identityCallInFlight=!1,a._Helpers.invokeCallback(d,HTTPCodes.noHttpCoverage,b),a.Logger.error("Error sending identity request to servers with status code "+h.status+" - "+b);}},this.sendBatchForwardingStatsToServer=function(b,c){var d,e;try{d=a._Helpers.createServiceUrl(a._Store.SDKConfig.v2SecureServiceUrl,a._Store.devToken),e={uuid:a._Helpers.generateUniqueId(),data:b},c&&(c.open("post",d+"/Forwarding"),c.send(JSON.stringify(e)));}catch(b){a.Logger.error("Error sending forwarding stats to mParticle servers.");}},this.sendSingleForwardingStatsToServer=function(b){var c,d;try{var e=function(){4===f.readyState&&202===f.status&&a.Logger.verbose("Successfully sent  "+f.statusText+" from server");},f=a._Helpers.createXHR(e);c=a._Helpers.createServiceUrl(a._Store.SDKConfig.v1SecureServiceUrl,a._Store.devToken),d=b,f&&(f.open("post",c+"/Forwarding"),f.send(JSON.stringify(d)));}catch(b){a.Logger.error("Error sending forwarding stats to mParticle servers.");}},this.getSDKConfiguration=function(a,b,c,d){var e;try{var f=function(){4===g.readyState&&(200===g.status?(b=d._Helpers.extend({},b,JSON.parse(g.responseText)),c(a,b,d),d.Logger.verbose("Successfully received configuration from server")):(c(a,b,d),d.Logger.verbose("Issue with receiving configuration from server, received HTTP Code of "+g.status)));},g=d._Helpers.createXHR(f);e="https://"+d._Store.SDKConfig.configUrl+a+"/config?env=",e+=b.isDevelopmentMode?"1":"0",g&&(g.open("get",e),g.send(null));}catch(f){c(a,b,d),d.Logger.error("Error getting forwarder configuration from mParticle servers.");}},this.prepareForwardingStats=function(c,d){var e,f=a._Forwarders.getForwarderStatsQueue();c&&c.isVisible&&(e={mid:c.id,esid:c.eventSubscriptionId,n:d.EventName,attrs:d.EventAttributes,sdk:d.SDKVersion,dt:d.EventDataType,et:d.EventCategory,dbg:d.Debug,ct:d.Timestamp,eec:d.ExpandedEventCount,dp:d.DataPlan},a._Helpers.getFeatureFlag(Constants.FeatureFlags.ReportBatching)?(f.push(e),a._Forwarders.setForwarderStatsQueue(f)):b.sendSingleForwardingStatsToServer(e));};}

var slugify = createCommonjsModule(function (module, exports) {
(function (name, root, factory) {
  {
    module.exports = factory();
    module.exports['default'] = factory();
  }
}('slugify', commonjsGlobal, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');
  var locales = JSON.parse('{"vi":{"Đ":"D","đ":"d"}}');

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? { replacement: options }
      : options || {};

    var locale = locales[options.locale] || {};

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (locale[ch] || charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-');

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key];
    }
  };

  return replace
}));
});

var StorageNames=Constants.StorageNames,pluses=/\+/g;function Helpers(a){function b(b){var a;return window.crypto&&window.crypto.getRandomValues&&(a=window.crypto.getRandomValues(new Uint8Array(1))),a?(b^a[0]%16>>b/4).toString(16):(b^16*Math.random()>>b/4).toString(16)}var c=this;/**
     * Returns a value between 1-100 inclusive.
     */ // Standalone version of jQuery.extend, from https://github.com/dansdom/extend
this.canLog=function(){return !!(a._Store.isEnabled&&(a._Store.devToken||a._Store.webviewBridgeEnabled))},this.returnConvertedBoolean=function(a){return "false"!==a&&"0"!==a&&!!a},this.getFeatureFlag=function(b){return a._Store.SDKConfig.flags.hasOwnProperty(b)?a._Store.SDKConfig.flags[b]:null},this.getRampNumber=function(a){if(!a)return 100;var b=c.generateHash(a);return Math.abs(b%100)+1},this.invokeCallback=function(b,d,e,f,g){b||a.Logger.warning("There is no callback provided");try{c.Validators.isFunction(b)&&b({httpCode:d,body:e,getUser:function getUser(){return f?f:a.Identity.getCurrentUser()},getPreviousUser:function getPreviousUser(){if(!g){var b=a.Identity.getUsers(),c=b.shift(),d=f||a.Identity.getCurrentUser();return c&&d&&c.getMPID()===d.getMPID()&&(c=b.shift()),c||null}return a.Identity.getUser(g)}});}catch(b){a.Logger.error("There was an error with your callback: "+b);}},this.invokeAliasCallback=function(b,d,e){b||a.Logger.warning("There is no callback provided");try{if(c.Validators.isFunction(b)){var f={httpCode:d};e&&(f.message=e),b(f);}}catch(b){a.Logger.error("There was an error with your callback: "+b);}},this.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},j=1,k=arguments.length,l=!1,// helper which replicates the jquery internal functions
m={hasOwn:Object.prototype.hasOwnProperty,class2type:{},type:function type(a){return null==a?a+"":m.class2type[Object.prototype.toString.call(a)]||"object"},isPlainObject:function isPlainObject(a){if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return !1;try{if(a.constructor&&!m.hasOwn.call(a,"constructor")&&!m.hasOwn.call(a.constructor.prototype,"isPrototypeOf"))return !1}catch(a){return !1}for(var b in a);// eslint-disable-line no-empty
return b===void 0||m.hasOwn.call(a,b)},isArray:Array.isArray||function(a){return "array"===m.type(a)},isFunction:function isFunction(a){return "function"===m.type(a)},isWindow:function isWindow(a){return null!=a&&a==a.window}};// end of objectHelper
// Handle a deep copy situation
for("boolean"==typeof h&&(l=h,h=arguments[1]||{},j=2),"object"===_typeof_1(h)||m.isFunction(h)||(h={}),k===j&&(h=this,--j);j<k;j++)// Only deal with non-null/undefined values
if(null!=(a=arguments[j]))// Extend the base object
for(b in a)// Prevent never-ending loop
(d=h[b],e=a[b],h!==e)&&(l&&e&&(m.isPlainObject(e)||(f=m.isArray(e)))?(f?(f=!1,g=d&&m.isArray(d)?d:[]):g=d&&m.isPlainObject(d)?d:{},h[b]=c.extend(l,g,e)):void 0!==e&&(h[b]=e));// Recurse if we're merging plain objects or arrays
// Return the modified object
return h},this.isObject=function(a){var b=Object.prototype.toString.call(a);return "[object Object]"===b||"[object Error]"===b},this.inArray=function(a,b){var c=0;if(Array.prototype.indexOf)return 0<=a.indexOf(b,0);for(var d=a.length;c<d;c++)if(c in a&&a[c]===b)return !0},this.createServiceUrl=function(b,c){var d,e=window.mParticle&&a._Store.SDKConfig.forceHttps?"https://":window.location.protocol+"//";return d=a._Store.SDKConfig.forceHttps?"https://"+b:e+b,c&&(d+=c),d},this.createXHR=function(b){var c;try{c=new window.XMLHttpRequest;}catch(b){a.Logger.error("Error creating XMLHttpRequest object.");}if(c&&b&&"withCredentials"in c)c.onreadystatechange=b;else if("undefined"!=typeof window.XDomainRequest){a.Logger.verbose("Creating XDomainRequest object");try{c=new window.XDomainRequest,c.onload=b;}catch(b){a.Logger.error("Error creating XDomainRequest object");}}return c},this.generateUniqueId=function(d){// https://gist.github.com/jed/982883
// Added support for crypto for better random
return d// if the placeholder was passed, return
?b(d)// a random number
:// or otherwise a concatenated string:
"10000000-1000-4000-8000-100000000000".// -100000000000,
replace(// replacing
/[018]/g,// zeroes, ones, and eights with
c.generateUniqueId// random hex digits
)},this.filterUserIdentities=function(a,b){var d=[];if(a&&Object.keys(a).length)for(var e in a)if(a.hasOwnProperty(e)){var f=Types.IdentityType.getIdentityType(e);if(!c.inArray(b,f)){var g={Type:f,Identity:a[e]};f===Types.IdentityType.CustomerId?d.unshift(g):d.push(g);}}return d},this.filterUserIdentitiesForForwarders=function(a,b){var d={};if(a&&Object.keys(a).length)for(var e in a)if(a.hasOwnProperty(e)){var f=Types.IdentityType.getIdentityType(e);c.inArray(b,f)||(d[e]=a[e]);}return d},this.filterUserAttributes=function(a,b){var d={};if(a&&Object.keys(a).length)for(var e in a)if(a.hasOwnProperty(e)){var f=c.generateHash(e);c.inArray(b,f)||(d[e]=a[e]);}return d},this.findKeyInObject=function(a,b){if(b&&a)for(var c in a)if(a.hasOwnProperty(c)&&c.toLowerCase()===b.toLowerCase())return c;return null},this.decoded=function(a){return decodeURIComponent(a.replace(pluses," "))},this.converted=function(a){return 0===a.indexOf("\"")&&(a=a.slice(1,-1).replace(/\\"/g,"\"").replace(/\\\\/g,"\\")),a},this.isEventType=function(a){for(var b in Types.EventType)if(Types.EventType.hasOwnProperty(b)&&Types.EventType[b]===a)return !0;return !1},this.parseNumber=function(a){if(isNaN(a)||!isFinite(a))return 0;var b=parseFloat(a);return isNaN(b)?0:b},this.parseStringOrNumber=function(a){return c.Validators.isStringOrNumber(a)?a:null},this.generateHash=function(a){var b,c=0,d=0;if(void 0===a||null===a)return 0;if(a=a.toString().toLowerCase(),Array.prototype.reduce)return a.split("").reduce(function(c,d){return c=(c<<5)-c+d.charCodeAt(0),c&c},0);if(0===a.length)return c;for(d=0;d<a.length;d++)b=a.charCodeAt(d),c=(c<<5)-c+b,c&=c;return c},this.sanitizeAttributes=function(b){if(!b||!c.isObject(b))return null;var d={};for(var e in b)// Make sure that attribute values are not objects or arrays, which are not valid
b.hasOwnProperty(e)&&c.Validators.isValidAttributeValue(b[e])?d[e]=b[e]:a.Logger.warning("The corresponding attribute value of "+e+" must be a string, number, boolean, or null.");return d},this.Validators={isValidAttributeValue:function isValidAttributeValue(a){return a!==void 0&&!c.isObject(a)&&!Array.isArray(a)},// Neither null nor undefined can be a valid Key
isValidKeyValue:function isValidKeyValue(a){return !(!a||c.isObject(a)||Array.isArray(a))},isStringOrNumber:function isStringOrNumber(a){return "string"==typeof a||"number"==typeof a},isNumber:function isNumber(a){return "number"==typeof a},isFunction:function isFunction(a){return "function"==typeof a},validateIdentities:function validateIdentities(b,d){var e={userIdentities:1,onUserAlias:1,copyUserAttributes:1};if(b){if("modify"===d&&(c.isObject(b.userIdentities)&&!Object.keys(b.userIdentities).length||!c.isObject(b.userIdentities)))return {valid:!1,error:Constants.Messages.ValidationMessages.ModifyIdentityRequestUserIdentitiesPresent};for(var f in b)if(b.hasOwnProperty(f)){if(!e[f])return {valid:!1,error:Constants.Messages.ValidationMessages.IdentityRequesetInvalidKey};if("onUserAlias"===f&&!a._Helpers.Validators.isFunction(b[f]))return {valid:!1,error:Constants.Messages.ValidationMessages.OnUserAliasType+_typeof_1(b[f])}}if(0===Object.keys(b).length)return {valid:!0};// identityApiData.userIdentities can't be undefined
if(void 0===b.userIdentities)return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentities};// identityApiData.userIdentities can be null, but if it isn't null or undefined (above conditional), it must be an object
if(null!==b.userIdentities&&!c.isObject(b.userIdentities))return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentities};if(c.isObject(b.userIdentities)&&Object.keys(b.userIdentities).length)for(var g in b.userIdentities)if(b.userIdentities.hasOwnProperty(g)){if(!1===Types.IdentityType.getIdentityType(g))return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentitiesInvalidKey};if("string"!=typeof b.userIdentities[g]&&null!==b.userIdentities[g])return {valid:!1,error:Constants.Messages.ValidationMessages.UserIdentitiesInvalidValues}}}return {valid:!0}}},this.isDelayedByIntegration=function(b,c,d){if(d-c>a._Store.SDKConfig.integrationDelayTimeout)return !1;for(var e in b){if(!0===b[e])return !0;continue}return !1},this.createMainStorageName=function(a){return a?StorageNames.currentStorageName+"_"+a:StorageNames.currentStorageName},this.createProductStorageName=function(a){return a?StorageNames.currentStorageProductsName+"_"+a:StorageNames.currentStorageProductsName},this.isSlug=function(a){return a===slugify(a)};}

var Messages$1=Constants.Messages,androidBridgeNameBase="mParticleAndroid",iosBridgeNameBase="mParticle";function NativeSdkHelpers(a){var b=this;this.isBridgeV2Available=function(a){if(!a)return !1;var b=iosBridgeNameBase+"_"+a+"_v2";// iOS v2 bridge
return !!(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.hasOwnProperty(b))||!!(window.mParticle&&window.mParticle.uiwebviewBridgeName&&window.mParticle.uiwebviewBridgeName===b)||!!window.hasOwnProperty(androidBridgeNameBase+"_"+a+"_v2");// other iOS v2 bridge
// TODO: what to do about people setting things on mParticle itself?
// android
},this.isWebviewEnabled=function(c,d){return a._Store.bridgeV2Available=b.isBridgeV2Available(c),a._Store.bridgeV1Available=b.isBridgeV1Available(),2===d?a._Store.bridgeV2Available:!(window.mParticle&&window.mParticle.uiwebviewBridgeName&&window.mParticle.uiwebviewBridgeName!==iosBridgeNameBase+"_"+c+"_v2")&&!!(2>d)&&(a._Store.bridgeV2Available||a._Store.bridgeV1Available);// iOS BridgeV1 can be available via mParticle.isIOS, but return false if uiwebviewBridgeName doesn't match requiredWebviewBridgeName
},this.isBridgeV1Available=function(){return !!(a._Store.SDKConfig.useNativeSdk||window.mParticleAndroid||a._Store.SDKConfig.isIOS)},this.sendToNative=function(c,d){return a._Store.bridgeV2Available&&2===a._Store.SDKConfig.minWebviewBridgeVersion?void b.sendViaBridgeV2(c,d,a._Store.SDKConfig.requiredWebviewBridgeName):a._Store.bridgeV2Available&&2>a._Store.SDKConfig.minWebviewBridgeVersion?void b.sendViaBridgeV2(c,d,a._Store.SDKConfig.requiredWebviewBridgeName):a._Store.bridgeV1Available&&2>a._Store.SDKConfig.minWebviewBridgeVersion?void b.sendViaBridgeV1(c,d):void 0},this.sendViaBridgeV1=function(c,d){window.mParticleAndroid&&window.mParticleAndroid.hasOwnProperty(c)?(a.Logger.verbose(Messages$1.InformationMessages.SendAndroid+c),window.mParticleAndroid[c](d)):a._Store.SDKConfig.isIOS&&(a.Logger.verbose(Messages$1.InformationMessages.SendIOS+c),b.sendViaIframeToIOS(c,d));},this.sendViaIframeToIOS=function(a,b){var c=document.createElement("IFRAME");c.setAttribute("src","mp-sdk://"+a+"/"+encodeURIComponent(b)),document.documentElement.appendChild(c),c.parentNode.removeChild(c);},this.sendViaBridgeV2=function(c,d,e){if(e){var f,g,h=window[androidBridgeNameBase+"_"+e+"_v2"],i=iosBridgeNameBase+"_"+e+"_v2";return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[i]&&(f=window.webkit.messageHandlers[i]),a.uiwebviewBridgeName===i&&(g=a[i]),h&&h.hasOwnProperty(c)?(a.Logger.verbose(Messages$1.InformationMessages.SendAndroid+c),void h[c](d)):void(f?(a.Logger.verbose(Messages$1.InformationMessages.SendIOS+c),f.postMessage(JSON.stringify({path:c,value:d?JSON.parse(d):null}))):g&&(a.Logger.verbose(Messages$1.InformationMessages.SendIOS+c),b.sendViaIframeToIOS(c,d)))}};}

var Messages$2=Constants.Messages;function cookieSyncManager(a){var b=this;this.attemptCookieSync=function(c,d){var e,f,g,h,i;d&&!a._Store.webviewBridgeEnabled&&a._Store.pixelConfigurations.forEach(function(j){e={moduleId:j.moduleId,frequencyCap:j.frequencyCap,pixelUrl:b.replaceAmp(j.pixelUrl),redirectUrl:j.redirectUrl?b.replaceAmp(j.redirectUrl):null},g=b.replaceMPID(e.pixelUrl,d),h=e.redirectUrl?b.replaceMPID(e.redirectUrl,d):"",i=g+encodeURIComponent(h);var k=a._Persistence.getPersistence();return c&&c!==d?void(k&&k[d]&&(!k[d].csd&&(k[d].csd={}),b.performCookieSync(i,e.moduleId,d,k[d].csd))):void(k[d]&&(!k[d].csd&&(k[d].csd={}),f=k[d].csd[e.moduleId.toString()]?k[d].csd[e.moduleId.toString()]:null,f?new Date().getTime()>new Date(f).getTime()+24*(60*(1e3*(60*e.frequencyCap)))&&b.performCookieSync(i,e.moduleId,d,k[d].csd):b.performCookieSync(i,e.moduleId,d,k[d].csd)))});},this.replaceMPID=function(a,b){return a.replace("%%mpid%%",b)},this.replaceAmp=function(a){return a.replace(/&amp;/g,"&")},this.performCookieSync=function(b,c,d,e){var f=document.createElement("img");a.Logger.verbose(Messages$2.InformationMessages.CookieSync),f.src=b,e[c.toString()]=new Date().getTime(),a._Persistence.saveUserCookieSyncDatesToCookies(d,e);};}

var Messages$3=Constants.Messages;function SessionManager(a){var b=this;this.initialize=function(){if(a._Store.sessionId){var c=6e4*a._Store.SDKConfig.sessionTimeout;if(new Date>new Date(a._Store.dateLastEventSent.getTime()+c))b.endSession(),b.startNewSession();else{var d=a._Persistence.getPersistence();d&&!d.cu&&(a.Identity.identify(a._Store.SDKConfig.identifyRequest,a._Store.SDKConfig.identityCallback),a._Store.identifyCalled=!0,a._Store.SDKConfig.identityCallback=null);}}else b.startNewSession();},this.getSession=function(){return a._Store.sessionId},this.startNewSession=function(){if(a.Logger.verbose(Messages$3.InformationMessages.StartingNewSession),a._Helpers.canLog()){a._Store.sessionId=a._Helpers.generateUniqueId().toUpperCase();var c=a.Identity.getCurrentUser(),d=c?c.getMPID():null;if(d&&(a._Store.currentSessionMPIDs=[d]),!a._Store.sessionStartDate){var e=new Date;a._Store.sessionStartDate=e,a._Store.dateLastEventSent=e;}b.setSessionTimer(),a._Store.identifyCalled||(a.Identity.identify(a._Store.SDKConfig.identifyRequest,a._Store.SDKConfig.identityCallback),a._Store.identifyCalled=!0,a._Store.SDKConfig.identityCallback=null),a._Events.logEvent({messageType:Types.MessageType.SessionStart});}else a.Logger.verbose(Messages$3.InformationMessages.AbandonStartSession);},this.endSession=function(c){if(a.Logger.verbose(Messages$3.InformationMessages.StartingEndSession),c)a._Events.logEvent({messageType:Types.MessageType.SessionEnd}),a._Store.sessionId=null,a._Store.dateLastEventSent=null,a._Store.sessionAttributes={},a._Persistence.update();else if(a._Helpers.canLog()){var d,e,f;if(e=a._Persistence.getCookie()||a._Persistence.getLocalStorage(),!e)return;if(e.gs&&!e.gs.sid)return void a.Logger.verbose(Messages$3.InformationMessages.NoSessionToEnd);// sessionId is not equal to cookies.sid if cookies.sid is changed in another tab
if(e.gs.sid&&a._Store.sessionId!==e.gs.sid&&(a._Store.sessionId=e.gs.sid),e.gs&&e.gs.les){d=6e4*a._Store.SDKConfig.sessionTimeout;var g=new Date().getTime();f=g-e.gs.les,f<d?b.setSessionTimer():(a._Events.logEvent({messageType:Types.MessageType.SessionEnd}),a._Store.sessionId=null,a._Store.dateLastEventSent=null,a._Store.sessionStartDate=null,a._Store.sessionAttributes={},a._Persistence.update());}}else a.Logger.verbose(Messages$3.InformationMessages.AbandonEndSession);},this.setSessionTimer=function(){var c=6e4*a._Store.SDKConfig.sessionTimeout;a._Store.globalTimer=window.setTimeout(function(){b.endSession();},c);},this.resetSessionTimer=function(){a._Store.webviewBridgeEnabled||(!a._Store.sessionId&&b.startNewSession(),b.clearSessionTimeout(),b.setSessionTimer()),b.startNewSessionIfNeeded();},this.clearSessionTimeout=function(){clearTimeout(a._Store.globalTimer);},this.startNewSessionIfNeeded=function(){if(!a._Store.webviewBridgeEnabled){var c=a._Persistence.getCookie()||a._Persistence.getLocalStorage();!a._Store.sessionId&&c&&(c.sid?a._Store.sessionId=c.sid:b.startNewSession());}};}

var Messages$4=Constants.Messages;function Ecommerce(a){var b=this;this.convertTransactionAttributesToProductAction=function(a,b){b.TransactionId=a.Id,b.Affiliation=a.Affiliation,b.CouponCode=a.CouponCode,b.TotalAmount=a.Revenue,b.ShippingAmount=a.Shipping,b.TaxAmount=a.Tax;},this.getProductActionEventName=function(a){switch(a){case Types.ProductActionType.AddToCart:return "AddToCart";case Types.ProductActionType.AddToWishlist:return "AddToWishlist";case Types.ProductActionType.Checkout:return "Checkout";case Types.ProductActionType.CheckoutOption:return "CheckoutOption";case Types.ProductActionType.Click:return "Click";case Types.ProductActionType.Purchase:return "Purchase";case Types.ProductActionType.Refund:return "Refund";case Types.ProductActionType.RemoveFromCart:return "RemoveFromCart";case Types.ProductActionType.RemoveFromWishlist:return "RemoveFromWishlist";case Types.ProductActionType.ViewDetail:return "ViewDetail";case Types.ProductActionType.Unknown:default:return "Unknown";}},this.getPromotionActionEventName=function(a){return a===Types.PromotionActionType.PromotionClick?"PromotionClick":a===Types.PromotionActionType.PromotionView?"PromotionView":"Unknown"},this.convertProductActionToEventType=function(b){return b===Types.ProductActionType.AddToCart?Types.CommerceEventType.ProductAddToCart:b===Types.ProductActionType.AddToWishlist?Types.CommerceEventType.ProductAddToWishlist:b===Types.ProductActionType.Checkout?Types.CommerceEventType.ProductCheckout:b===Types.ProductActionType.CheckoutOption?Types.CommerceEventType.ProductCheckoutOption:b===Types.ProductActionType.Click?Types.CommerceEventType.ProductClick:b===Types.ProductActionType.Purchase?Types.CommerceEventType.ProductPurchase:b===Types.ProductActionType.Refund?Types.CommerceEventType.ProductRefund:b===Types.ProductActionType.RemoveFromCart?Types.CommerceEventType.ProductRemoveFromCart:b===Types.ProductActionType.RemoveFromWishlist?Types.CommerceEventType.ProductRemoveFromWishlist:b===Types.ProductActionType.Unknown?Types.EventType.Unknown:b===Types.ProductActionType.ViewDetail?Types.CommerceEventType.ProductViewDetail:(a.Logger.error("Could not convert product action type "+b+" to event type"),null)},this.convertPromotionActionToEventType=function(b){return b===Types.PromotionActionType.PromotionClick?Types.CommerceEventType.PromotionClick:b===Types.PromotionActionType.PromotionView?Types.CommerceEventType.PromotionView:(a.Logger.error("Could not convert promotion action type "+b+" to event type"),null)},this.generateExpandedEcommerceName=function(a,b){return "eCommerce - "+a+" - "+(b?"Total":"Item")},this.extractProductAttributes=function(a,b){b.CouponCode&&(a["Coupon Code"]=b.CouponCode),b.Brand&&(a.Brand=b.Brand),b.Category&&(a.Category=b.Category),b.Name&&(a.Name=b.Name),b.Sku&&(a.Id=b.Sku),b.Price&&(a["Item Price"]=b.Price),b.Quantity&&(a.Quantity=b.Quantity),b.Position&&(a.Position=b.Position),b.Variant&&(a.Variant=b.Variant),a["Total Product Amount"]=b.TotalAmount||0;},this.extractTransactionId=function(a,b){b.TransactionId&&(a["Transaction Id"]=b.TransactionId);},this.extractActionAttributes=function(a,c){b.extractTransactionId(a,c),c.Affiliation&&(a.Affiliation=c.Affiliation),c.CouponCode&&(a["Coupon Code"]=c.CouponCode),c.TotalAmount&&(a["Total Amount"]=c.TotalAmount),c.ShippingAmount&&(a["Shipping Amount"]=c.ShippingAmount),c.TaxAmount&&(a["Tax Amount"]=c.TaxAmount),c.CheckoutOptions&&(a["Checkout Options"]=c.CheckoutOptions),c.CheckoutStep&&(a["Checkout Step"]=c.CheckoutStep);},this.extractPromotionAttributes=function(a,b){b.Id&&(a.Id=b.Id),b.Creative&&(a.Creative=b.Creative),b.Name&&(a.Name=b.Name),b.Position&&(a.Position=b.Position);},this.buildProductList=function(a,b){return b?Array.isArray(b)?b:[b]:a.ShoppingCart.ProductList},this.createProduct=function(b,c,d,e,f,g,h,i,j,k){return (k=a._Helpers.sanitizeAttributes(k),"string"!=typeof b)?(a.Logger.error("Name is required when creating a product"),null):a._Helpers.Validators.isStringOrNumber(c)?a._Helpers.Validators.isStringOrNumber(d)?(i&&!a._Helpers.Validators.isNumber(i)&&(a.Logger.error("Position must be a number, it will be set to null."),i=null),e||(e=1),{Name:b,Sku:c,Price:d,Quantity:e,Brand:h,Variant:f,Category:g,Position:i,CouponCode:j,TotalAmount:e*d,Attributes:k}):(a.Logger.error("Price is required when creating a product, and must be a string or a number"),null):(a.Logger.error("SKU is required when creating a product, and must be a string or a number"),null)},this.createPromotion=function(b,c,d,e){return a._Helpers.Validators.isStringOrNumber(b)?{Id:b,Creative:c,Name:d,Position:e}:(a.Logger.error(Messages$4.ErrorMessages.PromotionIdRequired),null)},this.createImpression=function(b,c){return "string"==typeof b?c?{Name:b,Product:c}:(a.Logger.error("Product is required when creating an impression."),null):(a.Logger.error("Name is required when creating an impression."),null)},this.createTransactionAttributes=function(b,c,d,e,f,g){return a._Helpers.Validators.isStringOrNumber(b)?{Id:b,Affiliation:c,CouponCode:d,Revenue:e,Shipping:f,Tax:g}:(a.Logger.error(Messages$4.ErrorMessages.TransactionIdRequired),null)},this.expandProductImpression=function(c){var d=[];return c.ProductImpressions?(c.ProductImpressions.forEach(function(e){e.ProductList&&e.ProductList.forEach(function(f){var g=a._Helpers.extend(!1,{},c.EventAttributes);if(f.Attributes)for(var h in f.Attributes)g[h]=f.Attributes[h];b.extractProductAttributes(g,f),e.ProductImpressionList&&(g["Product Impression List"]=e.ProductImpressionList);var i=a._ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:b.generateExpandedEcommerceName("Impression"),data:g,eventType:Types.EventType.Transaction});d.push(i);});}),d):d},this.expandCommerceEvent=function(a){return a?b.expandProductAction(a).concat(b.expandPromotionAction(a)).concat(b.expandProductImpression(a)):null},this.expandPromotionAction=function(c){var d=[];if(!c.PromotionAction)return d;var e=c.PromotionAction.PromotionList;return e.forEach(function(e){var f=a._Helpers.extend(!1,{},c.EventAttributes);b.extractPromotionAttributes(f,e);var g=a._ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:b.generateExpandedEcommerceName(Types.PromotionActionType.getExpansionName(c.PromotionAction.PromotionActionType)),data:f,eventType:Types.EventType.Transaction});d.push(g);}),d},this.expandProductAction=function(c){var d=[];if(!c.ProductAction)return d;var e=!1;if(c.ProductAction.ProductActionType===Types.ProductActionType.Purchase||c.ProductAction.ProductActionType===Types.ProductActionType.Refund){var f=a._Helpers.extend(!1,{},c.EventAttributes);f["Product Count"]=c.ProductAction.ProductList?c.ProductAction.ProductList.length:0,b.extractActionAttributes(f,c.ProductAction),c.CurrencyCode&&(f["Currency Code"]=c.CurrencyCode);var g=a._ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:b.generateExpandedEcommerceName(Types.ProductActionType.getExpansionName(c.ProductAction.ProductActionType),!0),data:f,eventType:Types.EventType.Transaction});d.push(g);}else e=!0;var h=c.ProductAction.ProductList;return h?(h.forEach(function(f){var g=a._Helpers.extend(!1,c.EventAttributes,f.Attributes);e?b.extractActionAttributes(g,c.ProductAction):b.extractTransactionId(g,c.ProductAction),b.extractProductAttributes(g,f);var h=a._ServerModel.createEventObject({messageType:Types.MessageType.PageEvent,name:b.generateExpandedEcommerceName(Types.ProductActionType.getExpansionName(c.ProductAction.ProductActionType)),data:g,eventType:Types.EventType.Transaction});d.push(h);}),d):d},this.createCommerceEventObject=function(b){var c;return (a.Logger.verbose(Messages$4.InformationMessages.StartingLogCommerceEvent),a._Helpers.canLog())?(c=a._ServerModel.createEventObject({messageType:Types.MessageType.Commerce}),c.EventName="eCommerce - ",c.CurrencyCode=a._Store.currencyCode,c.ShoppingCart=[],c.CustomFlags=b,c):(a.Logger.verbose(Messages$4.InformationMessages.AbandonLogEvent),null)};}

function createSDKConfig(a){var b={};for(var c in Constants.DefaultConfig)Constants.DefaultConfig.hasOwnProperty(c)&&(b[c]=Constants.DefaultConfig[c]);if(a)for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);for(c in Constants.DefaultUrls)b[c]=Constants.DefaultUrls[c];return b}function Store(a,b){var c={isEnabled:!0,sessionAttributes:{},currentSessionMPIDs:[],consentState:null,sessionId:null,isFirstRun:null,clientId:null,deviceId:null,devToken:null,migrationData:{},serverSettings:{},dateLastEventSent:null,sessionStartDate:null,currentPosition:null,isTracking:!1,watchPositionId:null,cartProducts:[],eventQueue:[],currencyCode:null,globalTimer:null,context:"",configurationLoaded:!1,identityCallInFlight:!1,SDKConfig:{},migratingToIDSyncCookies:!1,nonCurrentUserMPIDs:{},identifyCalled:!1,isLoggedIn:!1,cookieSyncDates:{},integrationAttributes:{},requireDelay:!0,isLocalStorageAvailable:null,storageName:null,prodStorageName:null,activeForwarders:[],kits:{},configuredForwarders:[],pixelConfigurations:[]};for(var d in c)this[d]=c[d];// Set configuration to default settings
if(this.integrationDelayTimeoutStart=Date.now(),this.SDKConfig=createSDKConfig(a),a){if(this.SDKConfig.isDevelopmentMode=!!a.hasOwnProperty("isDevelopmentMode")&&b._Helpers.returnConvertedBoolean(a.isDevelopmentMode),a.hasOwnProperty("serviceUrl")&&(this.SDKConfig.serviceUrl=a.serviceUrl),a.hasOwnProperty("secureServiceUrl")&&(this.SDKConfig.secureServiceUrl=a.secureServiceUrl),a.hasOwnProperty("v2ServiceUrl")&&(this.SDKConfig.v2ServiceUrl=a.v2ServiceUrl),a.hasOwnProperty("v2SecureServiceUrl")&&(this.SDKConfig.v2SecureServiceUrl=a.v2SecureServiceUrl),a.hasOwnProperty("v3SecureServiceUrl")&&(this.SDKConfig.v3SecureServiceUrl=a.v3SecureServiceUrl),a.hasOwnProperty("identityUrl")&&(this.SDKConfig.identityUrl=a.identityUrl),a.hasOwnProperty("aliasUrl")&&(this.SDKConfig.aliasUrl=a.aliasUrl),a.hasOwnProperty("configUrl")&&(this.SDKConfig.configUrl=a.configUrl),a.hasOwnProperty("logLevel")&&(this.SDKConfig.logLevel=a.logLevel),this.SDKConfig.useNativeSdk=!!a.hasOwnProperty("useNativeSdk")&&a.useNativeSdk,a.hasOwnProperty("kits")&&(this.SDKConfig.kits=a.kits),this.SDKConfig.isIOS=a.hasOwnProperty("isIOS")?a.isIOS:!!(window.mParticle&&window.mParticle.isIOS)&&window.mParticle.isIOS,this.SDKConfig.useCookieStorage=!!a.hasOwnProperty("useCookieStorage")&&a.useCookieStorage,this.SDKConfig.maxProducts=a.hasOwnProperty("maxProducts")?a.maxProducts:Constants.DefaultConfig.maxProducts,this.SDKConfig.maxCookieSize=a.hasOwnProperty("maxCookieSize")?a.maxCookieSize:Constants.DefaultConfig.maxCookieSize,a.hasOwnProperty("appName")&&(this.SDKConfig.appName=a.appName),this.SDKConfig.integrationDelayTimeout=a.hasOwnProperty("integrationDelayTimeout")?a.integrationDelayTimeout:Constants.DefaultConfig.integrationDelayTimeout,a.hasOwnProperty("identifyRequest")&&(this.SDKConfig.identifyRequest=a.identifyRequest),a.hasOwnProperty("identityCallback")){var e=a.identityCallback;b._Helpers.Validators.isFunction(e)?this.SDKConfig.identityCallback=a.identityCallback:b.Logger.warning("The optional callback must be a function. You tried entering a(n) "+_typeof_1(e)," . Callback not set. Please set your callback again.");}a.hasOwnProperty("appVersion")&&(this.SDKConfig.appVersion=a.appVersion),a.hasOwnProperty("appName")&&(this.SDKConfig.appName=a.appName),a.hasOwnProperty("sessionTimeout")&&(this.SDKConfig.sessionTimeout=a.sessionTimeout),a.hasOwnProperty("dataPlan")&&(this.SDKConfig.dataPlan={PlanVersion:null,PlanId:null},a.dataPlan.hasOwnProperty("planId")&&("string"==typeof a.dataPlan.planId?b._Helpers.isSlug(a.dataPlan.planId)?this.SDKConfig.dataPlan.PlanId=a.dataPlan.planId:b.Logger.error("Your data plan id must be in a slug format"):b.Logger.error("Your data plan id must be a string")),a.dataPlan.hasOwnProperty("planVersion")&&("number"==typeof a.dataPlan.planVersion?this.SDKConfig.dataPlan.PlanVersion=a.dataPlan.planVersion:b.Logger.error("Your data plan version must be a number"))),this.SDKConfig.forceHttps=!a.hasOwnProperty("forceHttps")||a.forceHttps,a.hasOwnProperty("customFlags")&&(this.SDKConfig.customFlags=a.customFlags),this.SDKConfig.minWebviewBridgeVersion=a.hasOwnProperty("minWebviewBridgeVersion")?a.minWebviewBridgeVersion:1,this.SDKConfig.aliasMaxWindow=a.hasOwnProperty("aliasMaxWindow")?a.aliasMaxWindow:Constants.DefaultConfig.aliasMaxWindow,a.hasOwnProperty("flags")||(this.SDKConfig.flags={}),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.EventsV3)||(this.SDKConfig.flags[Constants.FeatureFlags.EventsV3]=0),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.EventBatchingIntervalMillis)||(this.SDKConfig.flags[Constants.FeatureFlags.EventBatchingIntervalMillis]=Constants.DefaultConfig.uploadInterval),this.SDKConfig.flags.hasOwnProperty(Constants.FeatureFlags.ReportBatching)||(this.SDKConfig.flags[Constants.FeatureFlags.ReportBatching]=!1);}}

function Logger(a){var b=this,c=a.logLevel||"warning";this.logger=a.hasOwnProperty("logger")?a.logger:new ConsoleLogger,this.verbose=function(a){"none"!==c&&b.logger.verbose&&"verbose"===c&&b.logger.verbose(a);},this.warning=function(a){"none"!==c&&b.logger.warning&&("verbose"===c||"warning"===c)&&b.logger.warning(a);},this.error=function(a){"none"!==c&&b.logger.error&&b.logger.error(a);},this.setLogLevel=function(a){c=a;};}function ConsoleLogger(){this.verbose=function(a){window.console&&window.console.info&&window.console.info(a);},this.error=function(a){window.console&&window.console.error&&window.console.error(a);},this.warning=function(a){window.console&&window.console.warn&&window.console.warn(a);};}

var Base64$1=Polyfill.Base64,Messages$5=Constants.Messages,Base64CookieKeys=Constants.Base64CookieKeys,SDKv2NonMPIDCookieKeys=Constants.SDKv2NonMPIDCookieKeys,StorageNames$1=Constants.StorageNames;function _Persistence(a){function b(b){var c=a._Store;return b.gs.sid=c.sessionId,b.gs.ie=c.isEnabled,b.gs.sa=c.sessionAttributes,b.gs.ss=c.serverSettings,b.gs.dt=c.devToken,b.gs.les=c.dateLastEventSent?c.dateLastEventSent.getTime():null,b.gs.av=c.SDKConfig.appVersion,b.gs.cgid=c.clientId,b.gs.das=c.deviceId,b.gs.c=c.context,b.gs.ssd=c.sessionStartDate?c.sessionStartDate.getTime():null,b.gs.ia=c.integrationAttributes,b}function c(a){localStorage.removeItem(a);}function d(a,b,c){return f.encodeCookies(JSON.stringify(a))+";expires="+b+";path=/"+c}var f=this;// only used in persistence
/*  This function determines if a cookie is greater than the configured maxCookieSize.
        - If it is, we remove an MPID and its associated UI/UA/CSD from the cookie.
        - Once removed, check size, and repeat.
        - Never remove the currentUser's MPID from the cookie.

    MPID removal priority:
    1. If there are no currentSessionMPIDs, remove a random MPID from the the cookie.
    2. If there are currentSessionMPIDs:
        a. Remove at random MPIDs on the cookie that are not part of the currentSessionMPIDs
        b. Then remove MPIDs based on order in currentSessionMPIDs array, which
        stores MPIDs based on earliest login.
*/ // This function loops through the parts of a full hostname, attempting to set a cookie on that domain. It will set a cookie at the highest level possible.
// For example subdomain.domain.co.uk would try the following combinations:
// "co.uk" -> fail
// "domain.co.uk" -> success, return
// "subdomain.domain.co.uk" -> skipped, because already found
/**
     * set the "first seen" time for a user. the time will only be set once for a given
     * mpid after which subsequent calls will be ignored
     */ /**
     * returns the "last seen" time for a user. If the mpid represents the current user, the
     * return value will always be the current time, otherwise it will be to stored "last seen"
     * time
     */ // Forwarder Batching Code
this.useLocalStorage=function(){return !a._Store.SDKConfig.useCookieStorage&&a._Store.isLocalStorageAvailable},this.initializeStorage=function(){try{var b,c,d=f.getLocalStorage(),e=f.getCookie();// Determine if there is any data in cookies or localStorage to figure out if it is the first time the browser is loading mParticle
d||e?a._Store.isFirstRun=!1:(a._Store.isFirstRun=!0,a._Store.mpid=0),a._Store.isLocalStorageAvailable||(a._Store.SDKConfig.useCookieStorage=!0),a._Store.isLocalStorageAvailable?(b=window.localStorage,a._Store.SDKConfig.useCookieStorage?(d?(c=e?a._Helpers.extend(!1,d,e):d,b.removeItem(a._Store.storageName)):e&&(c=e),f.storeDataInMemory(c)):e?(c=d?a._Helpers.extend(!1,d,e):e,f.storeDataInMemory(c),f.expireCookies(a._Store.storageName)):f.storeDataInMemory(d)):f.storeDataInMemory(e);try{if(a._Store.isLocalStorageAvailable){var g=localStorage.getItem(a._Store.prodStorageName);if(g)var h=JSON.parse(Base64$1.decode(g));a._Store.mpid&&f.storeProductsInMemory(h,a._Store.mpid);}}catch(b){a._Store.isLocalStorageAvailable&&localStorage.removeItem(a._Store.prodStorageName),a._Store.cartProducts=[],a.Logger.error("Error loading products in initialization: "+b);}for(var i in c)c.hasOwnProperty(i)&&(SDKv2NonMPIDCookieKeys[i]||(a._Store.nonCurrentUserMPIDs[i]=c[i]));f.update();}catch(b){f.useLocalStorage()&&a._Store.isLocalStorageAvailable?localStorage.removeItem(a._Store.storageName):f.expireCookies(a._Store.storageName),a.Logger.error("Error initializing storage: "+b);}},this.update=function(){a._Store.webviewBridgeEnabled||(a._Store.SDKConfig.useCookieStorage&&f.setCookie(),f.setLocalStorage());},this.storeProductsInMemory=function(b,c){if(b)try{a._Store.cartProducts=b[c]&&b[c].cp?b[c].cp:[];}catch(b){a.Logger.error(Messages$5.ErrorMessages.CookieParseError);}},this.storeDataInMemory=function(b,c){try{b?(a._Store.mpid=c?c:b.cu||0,b.gs=b.gs||{},a._Store.sessionId=b.gs.sid||a._Store.sessionId,a._Store.isEnabled="undefined"==typeof b.gs.ie?a._Store.isEnabled:b.gs.ie,a._Store.sessionAttributes=b.gs.sa||a._Store.sessionAttributes,a._Store.serverSettings=b.gs.ss||a._Store.serverSettings,a._Store.devToken=a._Store.devToken||b.gs.dt,a._Store.SDKConfig.appVersion=a._Store.SDKConfig.appVersion||b.gs.av,a._Store.clientId=b.gs.cgid||a._Store.clientId||a._Helpers.generateUniqueId(),a._Store.deviceId=b.gs.das||a._Store.deviceId||a._Helpers.generateUniqueId(),a._Store.integrationAttributes=b.gs.ia||{},a._Store.context=b.gs.c||a._Store.context,a._Store.currentSessionMPIDs=b.gs.csm||a._Store.currentSessionMPIDs,a._Store.isLoggedIn=!0===b.l,b.gs.les&&(a._Store.dateLastEventSent=new Date(b.gs.les)),a._Store.sessionStartDate=b.gs.ssd?new Date(b.gs.ssd):new Date,b=c?b[c]:b[b.cu]):(a.Logger.verbose(Messages$5.InformationMessages.CookieNotFound),a._Store.clientId=a._Store.clientId||a._Helpers.generateUniqueId(),a._Store.deviceId=a._Store.deviceId||a._Helpers.generateUniqueId());}catch(b){a.Logger.error(Messages$5.ErrorMessages.CookieParseError);}},this.determineLocalStorageAvailability=function(a){var b;window.mParticle&&window.mParticle._forceNoLocalStorage&&(a=void 0);try{return a.setItem("mparticle","test"),b="test"===a.getItem("mparticle"),a.removeItem("mparticle"),b&&a}catch(a){return !1}},this.getUserProductsFromLS=function(b){if(!a._Store.isLocalStorageAvailable)return [];var c,d,e,f=localStorage.getItem(a._Store.prodStorageName);// if there is an MPID, we are retrieving the user's products, which is an array
if(f&&(c=Base64$1.decode(f)),b)try{return c&&(e=JSON.parse(c)),d=c&&e[b]&&e[b].cp&&Array.isArray(e[b].cp)?e[b].cp:[],d}catch(a){return []}else return []},this.getAllUserProductsFromLS=function(){var b,c,d=localStorage.getItem(a._Store.prodStorageName);d&&(b=Base64$1.decode(d));// returns an object with keys of MPID and values of array of products
try{c=JSON.parse(b);}catch(a){c={};}return c},this.setLocalStorage=function(){if(a._Store.isLocalStorageAvailable){var c=a._Store.storageName,d=f.getAllUserProductsFromLS(),e=f.getLocalStorage()||{},g=a.Identity.getCurrentUser(),h=g?g.getMPID():null,i={cp:d[h]?d[h].cp:[]};if(h){d=d||{},d[h]=i;try{window.localStorage.setItem(encodeURIComponent(a._Store.prodStorageName),Base64$1.encode(JSON.stringify(d)));}catch(b){a.Logger.error("Error with setting products on localStorage.");}}if(!a._Store.SDKConfig.useCookieStorage){e.gs=e.gs||{},e.l=a._Store.isLoggedIn?1:0,a._Store.sessionId&&(e.gs.csm=a._Store.currentSessionMPIDs),e.gs.ie=a._Store.isEnabled,h&&(e.cu=h),Object.keys(a._Store.nonCurrentUserMPIDs).length&&(e=a._Helpers.extend({},e,a._Store.nonCurrentUserMPIDs),a._Store.nonCurrentUserMPIDs={}),e=b(e);try{window.localStorage.setItem(encodeURIComponent(c),f.encodeCookies(JSON.stringify(e)));}catch(b){a.Logger.error("Error with setting localStorage item.");}}}},this.getLocalStorage=function(){if(!a._Store.isLocalStorageAvailable)return null;var b,c=a._Store.storageName,d=f.decodeCookies(window.localStorage.getItem(c)),e={};if(d)for(b in d=JSON.parse(d),d)d.hasOwnProperty(b)&&(e[b]=d[b]);return Object.keys(e).length?e:null},this.expireCookies=function(a){var b,c,d,e=new Date;d=f.getCookieDomain(),c=""===d?"":";domain="+d,e.setTime(e.getTime()-86400000),b="; expires="+e.toUTCString(),document.cookie=a+"="+b+"; path=/"+c;},this.getCookie=function(){var b,c,d,e,g,h=window.document.cookie.split("; "),j=a._Store.storageName,k=j?void 0:{};for(a.Logger.verbose(Messages$5.InformationMessages.CookieSearch),b=0,c=h.length;b<c;b++){if(d=h[b].split("="),e=a._Helpers.decoded(d.shift()),g=a._Helpers.decoded(d.join("=")),j&&j===e){k=a._Helpers.converted(g);break}j||(k[e]=a._Helpers.converted(g));}return k?(a.Logger.verbose(Messages$5.InformationMessages.CookieFound),JSON.parse(f.decodeCookies(k))):null},this.setCookie=function(){var c,d=a.Identity.getCurrentUser();d&&(c=d.getMPID());var e,g,h,i=new Date,j=a._Store.storageName,k=f.getCookie()||{},l=new Date(i.getTime()+1e3*(60*(60*(24*a._Store.SDKConfig.cookieExpiration)))).toGMTString();e=f.getCookieDomain(),g=""===e?"":";domain="+e,k.gs=k.gs||{},a._Store.sessionId&&(k.gs.csm=a._Store.currentSessionMPIDs),c&&(k.cu=c),k.l=a._Store.isLoggedIn?1:0,k=b(k),Object.keys(a._Store.nonCurrentUserMPIDs).length&&(k=a._Helpers.extend({},k,a._Store.nonCurrentUserMPIDs),a._Store.nonCurrentUserMPIDs={}),h=f.reduceAndEncodeCookies(k,l,g,a._Store.SDKConfig.maxCookieSize),a.Logger.verbose(Messages$5.InformationMessages.CookieSet),window.document.cookie=encodeURIComponent(j)+"="+h;},this.reduceAndEncodeCookies=function(b,c,e,f){var g,h=b.gs.csm?b.gs.csm:[];// Comment 1 above
if(!h.length)for(var j in b)b.hasOwnProperty(j)&&(g=d(b,c,e),g.length>f&&!SDKv2NonMPIDCookieKeys[j]&&j!==b.cu&&delete b[j]);else{// Comment 2 above - First create an object of all MPIDs on the cookie
var k={};for(var l in b)b.hasOwnProperty(l)&&(SDKv2NonMPIDCookieKeys[l]||l===b.cu||(k[l]=1));// Comment 2a above
if(Object.keys(k).length)for(var m in k)g=d(b,c,e),g.length>f&&k.hasOwnProperty(m)&&-1===h.indexOf(m)&&delete b[m];// Comment 2b above
for(var n,o=0;o<h.length&&(g=d(b,c,e),g.length>f);o++)n=h[o],b[n]?(a.Logger.verbose("Size of new encoded cookie is larger than maxCookieSize setting of "+f+". Removing from cookie the earliest logged in MPID containing: "+JSON.stringify(b[n],0,2)),delete b[n]):a.Logger.error("Unable to save MPID data to cookies because the resulting encoded cookie is larger than the maxCookieSize setting of "+f+". We recommend using a maxCookieSize of 1500.");}return g},this.findPrevCookiesBasedOnUI=function(a){var b,c=f.getCookie()||f.getLocalStorage();if(a)for(var d in a.userIdentities)if(c&&Object.keys(c).length)for(var e in c)// any value in cookies that has an MPID key will be an MPID to search through
// other keys on the cookie are currentSessionMPIDs and currentMPID which should not be searched
if(c[e].mpid){var g=c[e].ui;for(var h in g)if(d===h&&a.userIdentities[d]===g[h]){b=e;break}}b&&f.storeDataInMemory(c,b);},this.encodeCookies=function(b){for(var c in b=JSON.parse(b),b.gs)b.gs.hasOwnProperty(c)&&(Base64CookieKeys[c]?b.gs[c]?Array.isArray(b.gs[c])&&b.gs[c].length||a._Helpers.isObject(b.gs[c])&&Object.keys(b.gs[c]).length?b.gs[c]=Base64$1.encode(JSON.stringify(b.gs[c])):delete b.gs[c]:delete b.gs[c]:"ie"===c?b.gs[c]=b.gs[c]?1:0:!b.gs[c]&&delete b.gs[c]);for(var d in b)if(b.hasOwnProperty(d)&&!SDKv2NonMPIDCookieKeys[d])for(c in b[d])b[d].hasOwnProperty(c)&&Base64CookieKeys[c]&&(a._Helpers.isObject(b[d][c])&&Object.keys(b[d][c]).length?b[d][c]=Base64$1.encode(JSON.stringify(b[d][c])):delete b[d][c]);return f.createCookieString(JSON.stringify(b))},this.decodeCookies=function(b){try{if(b){if(b=JSON.parse(f.revertCookieString(b)),a._Helpers.isObject(b)&&Object.keys(b).length){for(var c in b.gs)b.gs.hasOwnProperty(c)&&(Base64CookieKeys[c]?b.gs[c]=JSON.parse(Base64$1.decode(b.gs[c])):"ie"===c&&(b.gs[c]=!!b.gs[c]));for(var d in b)if(b.hasOwnProperty(d))if(!SDKv2NonMPIDCookieKeys[d])for(c in b[d])b[d].hasOwnProperty(c)&&Base64CookieKeys[c]&&b[d][c].length&&(b[d][c]=JSON.parse(Base64$1.decode(b[d][c])));else"l"===d&&(b[d]=!!b[d]);}return JSON.stringify(b)}}catch(b){a.Logger.error("Problem with decoding cookie",b);}},this.replaceCommasWithPipes=function(a){return a.replace(/,/g,"|")},this.replacePipesWithCommas=function(a){return a.replace(/\|/g,",")},this.replaceApostrophesWithQuotes=function(a){return a.replace(/\'/g,"\"")},this.replaceQuotesWithApostrophes=function(a){return a.replace(/\"/g,"'")},this.createCookieString=function(a){return f.replaceCommasWithPipes(f.replaceQuotesWithApostrophes(a))},this.revertCookieString=function(a){return f.replacePipesWithCommas(f.replaceApostrophesWithQuotes(a))},this.getCookieDomain=function(){if(a._Store.SDKConfig.cookieDomain)return a._Store.SDKConfig.cookieDomain;var b=f.getDomain(document,location.hostname);return ""===b?"":"."+b},this.getDomain=function(a,b){var c,d,e=b.split(".");for(c=e.length-1;0<=c;c--)if(d=e.slice(c).join("."),a.cookie="mptest=cookie;domain=."+d+";",-1<a.cookie.indexOf("mptest=cookie"))return a.cookie="mptest=;domain=."+d+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",d;return ""},this.getUserIdentities=function(a){var b=f.getPersistence();return b&&b[a]&&b[a].ui?b[a].ui:{}},this.getAllUserAttributes=function(a){var b=f.getPersistence();return b&&b[a]&&b[a].ua?b[a].ua:{}},this.getCartProducts=function(b){var c,d=localStorage.getItem(a._Store.prodStorageName);return d&&(c=JSON.parse(Base64$1.decode(d)),c&&c[b]&&c[b].cp)?c[b].cp:[]},this.setCartProducts=function(b){if(a._Store.isLocalStorageAvailable)try{window.localStorage.setItem(encodeURIComponent(a._Store.prodStorageName),Base64$1.encode(JSON.stringify(b)));}catch(b){a.Logger.error("Error with setting products on localStorage.");}},this.saveUserIdentitiesToCookies=function(a,b){if(b){var c=f.getPersistence();c&&(c[a]?c[a].ui=b:c[a]={ui:b},f.saveCookies(c));}},this.saveUserAttributesToCookies=function(a,b){var c=f.getPersistence();b&&(c&&(c[a]?c[a].ui=b:c[a]={ui:b}),f.saveCookies(c));},this.saveUserCookieSyncDatesToCookies=function(a,b){if(b){var c=f.getPersistence();c&&(c[a]?c[a].csd=b:c[a]={csd:b}),f.saveCookies(c);}},this.saveUserConsentStateToCookies=function(b,c){//it's currently not supported to set persistence
//for any MPID that's not the current one.
if(c||null===c){var d=f.getPersistence();d&&(d[b]?d[b].con=a._Consent.ConsentSerialization.toMinifiedJsonObject(c):d[b]={con:a._Consent.ConsentSerialization.toMinifiedJsonObject(c)},f.saveCookies(d));}},this.saveCookies=function(b){var c,d=f.encodeCookies(JSON.stringify(b)),e=new Date,g=a._Store.storageName,h=new Date(e.getTime()+1e3*(60*(60*(24*a._Store.SDKConfig.cookieExpiration)))).toGMTString(),i=f.getCookieDomain();if(c=""===i?"":";domain="+i,a._Store.SDKConfig.useCookieStorage){var j=f.reduceAndEncodeCookies(b,h,c,a._Store.SDKConfig.maxCookieSize);window.document.cookie=encodeURIComponent(g)+"="+j;}else a._Store.isLocalStorageAvailable&&localStorage.setItem(a._Store.storageName,d);},this.getPersistence=function(){var b;return b=a._Store.SDKConfig.useCookieStorage?f.getCookie():f.getLocalStorage(),b},this.getConsentState=function(b){var c=f.getPersistence();return c&&c[b]&&c[b].con?a._Consent.ConsentSerialization.fromMinifiedJsonObject(c[b].con):null},this.getFirstSeenTime=function(a){if(!a)return null;var b=f.getPersistence();return b&&b[a]&&b[a].fst?b[a].fst:null},this.setFirstSeenTime=function(a,b){if(a){b||(b=new Date().getTime());var c=f.getPersistence();c&&(!c[a]&&(c[a]={}),!c[a].fst&&(c[a].fst=b,f.saveCookies(c)));}},this.getLastSeenTime=function(b){if(!b)return null;if(b===a.Identity.getCurrentUser().getMPID())//if the mpid is the current user, its last seen time is the current time
return new Date().getTime();var c=f.getPersistence();return c&&c[b]&&c[b].lst?c[b].lst:null},this.setLastSeenTime=function(a,b){if(a){b||(b=new Date().getTime());var c=f.getPersistence();c&&c[a]&&(c[a].lst=b,f.saveCookies(c));}},this.getDeviceId=function(){return a._Store.deviceId},this.reset_Persistence=function(){if(c(StorageNames$1.localStorageName),c(StorageNames$1.localStorageNameV3),c(StorageNames$1.localStorageNameV4),c(a._Store.prodStorageName),c(StorageNames$1.localStorageProductsV4),f.expireCookies(StorageNames$1.cookieName),f.expireCookies(StorageNames$1.cookieNameV2),f.expireCookies(StorageNames$1.cookieNameV3),f.expireCookies(StorageNames$1.cookieNameV4),mParticle._isTestEnv){c(a._Helpers.createMainStorageName("abcdef")),f.expireCookies(a._Helpers.createMainStorageName("abcdef")),c(a._Helpers.createProductStorageName("abcdef"));}},this.forwardingStatsBatches={uploadsTable:{},forwardingStatsEventQueue:[]};}

var Messages$6=Constants.Messages;function Events(a){var b=this;this.logEvent=function(b){if(a.Logger.verbose(Messages$6.InformationMessages.StartingLogEvent+": "+b.name),a._Helpers.canLog()){b.data&&(b.data=a._Helpers.sanitizeAttributes(b.data));var c=a._ServerModel.createEventObject(b);a._APIClient.sendEventToServer(c);}else a.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent);},this.startTracking=function(b){function c(c){// prevents callback from being fired multiple times
a._Store.currentPosition={lat:c.coords.latitude,lng:c.coords.longitude},e(b,c),b=null,a._Store.isTracking=!0;}function d(){// prevents callback from being fired multiple times
e(b),b=null,a._Store.isTracking=!1;}function e(b,c){if(b)try{c?b(c):b();}catch(b){a.Logger.error("Error invoking the callback passed to startTrackingLocation."),a.Logger.error(b);}}if(!a._Store.isTracking)"geolocation"in navigator&&(a._Store.watchPositionId=navigator.geolocation.watchPosition(c,d));else{var f={coords:{latitude:a._Store.currentPosition.lat,longitude:a._Store.currentPosition.lng}};e(b,f);}},this.stopTracking=function(){a._Store.isTracking&&(navigator.geolocation.clearWatch(a._Store.watchPositionId),a._Store.currentPosition=null,a._Store.isTracking=!1);},this.logOptOut=function(){a.Logger.verbose(Messages$6.InformationMessages.StartingLogOptOut);var b=a._ServerModel.createEventObject({messageType:Types.MessageType.OptOut,eventType:Types.EventType.Other});a._APIClient.sendEventToServer(b);},this.logAST=function(){b.logEvent({messageType:Types.MessageType.AppStateTransition});},this.logCheckoutEvent=function(c,d,e,f){var g=a._Ecommerce.createCommerceEventObject(f);g&&(g.EventName+=a._Ecommerce.getProductActionEventName(Types.ProductActionType.Checkout),g.EventCategory=Types.CommerceEventType.ProductCheckout,g.ProductAction={ProductActionType:Types.ProductActionType.Checkout,CheckoutStep:c,CheckoutOptions:d,ProductList:g.ShoppingCart.ProductList},b.logCommerceEvent(g,e));},this.logProductActionEvent=function(c,d,e,f){var g=a._Ecommerce.createCommerceEventObject(f);g&&(g.EventCategory=a._Ecommerce.convertProductActionToEventType(c),g.EventName+=a._Ecommerce.getProductActionEventName(c),g.ProductAction={ProductActionType:c,ProductList:Array.isArray(d)?d:[d]},b.logCommerceEvent(g,e));},this.logPurchaseEvent=function(c,d,e,f){var g=a._Ecommerce.createCommerceEventObject(f);g&&(g.EventName+=a._Ecommerce.getProductActionEventName(Types.ProductActionType.Purchase),g.EventCategory=Types.CommerceEventType.ProductPurchase,g.ProductAction={ProductActionType:Types.ProductActionType.Purchase},g.ProductAction.ProductList=a._Ecommerce.buildProductList(g,d),a._Ecommerce.convertTransactionAttributesToProductAction(c,g.ProductAction),b.logCommerceEvent(g,e));},this.logRefundEvent=function(c,d,e,f){if(!c)return void a.Logger.error(Messages$6.ErrorMessages.TransactionRequired);var g=a._Ecommerce.createCommerceEventObject(f);g&&(g.EventName+=a._Ecommerce.getProductActionEventName(Types.ProductActionType.Refund),g.EventCategory=Types.CommerceEventType.ProductRefund,g.ProductAction={ProductActionType:Types.ProductActionType.Refund},g.ProductAction.ProductList=a._Ecommerce.buildProductList(g,d),a._Ecommerce.convertTransactionAttributesToProductAction(c,g.ProductAction),b.logCommerceEvent(g,e));},this.logPromotionEvent=function(c,d,e,f){var g=a._Ecommerce.createCommerceEventObject(f);g&&(g.EventName+=a._Ecommerce.getPromotionActionEventName(c),g.EventCategory=a._Ecommerce.convertPromotionActionToEventType(c),g.PromotionAction={PromotionActionType:c,PromotionList:[d]},b.logCommerceEvent(g,e));},this.logImpressionEvent=function(c,d,e){var f=a._Ecommerce.createCommerceEventObject(e);f&&(f.EventName+="Impression",f.EventCategory=Types.CommerceEventType.ProductImpression,!Array.isArray(c)&&(c=[c]),f.ProductImpressions=[],c.forEach(function(a){f.ProductImpressions.push({ProductImpressionList:a.Name,ProductList:Array.isArray(a.Product)?a.Product:[a.Product]});}),b.logCommerceEvent(f,d));},this.logCommerceEvent=function(b,c){a.Logger.verbose(Messages$6.InformationMessages.StartingLogCommerceEvent),c=a._Helpers.sanitizeAttributes(c),a._Helpers.canLog()?(a._Store.webviewBridgeEnabled&&(b.ShoppingCart={}),c&&(b.EventAttributes=c),a._APIClient.sendEventToServer(b),a._Persistence.update()):a.Logger.verbose(Messages$6.InformationMessages.AbandonLogEvent);},this.addEventHandler=function(c,d,f,g,h){var j,k,e=[],l=function(c){var d=function(){j.href?window.location.href=j.href:j.submit&&j.submit();};a.Logger.verbose("DOM event triggered, handling event"),b.logEvent({messageType:Types.MessageType.PageEvent,name:"function"==typeof f?f(j):f,data:"function"==typeof g?g(j):g,eventType:h||Types.EventType.Other}),(j.href&&"_blank"!==j.target||j.submit)&&(c.preventDefault?c.preventDefault():c.returnValue=!1,setTimeout(d,a._Store.SDKConfig.timeout));};if(!d)return void a.Logger.error("Can't bind event, selector is required");// Handle a css selector string or a dom element
if("string"==typeof d?e=document.querySelectorAll(d):d.nodeType&&(e=[d]),e.length)for(a.Logger.verbose("Found "+e.length+" element"+(1<e.length?"s":"")+", attaching event handlers"),k=0;k<e.length;k++)j=e[k],j.addEventListener?j.addEventListener(c,l,!1):j.attachEvent?j.attachEvent("on"+c,l):j["on"+c]=l;else a.Logger.verbose("No elements found");};}

var StorageNames$2=Constants.StorageNames,Base64$2=Polyfill.Base64,CookiesGlobalSettingsKeys={das:1},MPIDKeys={ui:1};function Migrations(a){function b(){var b,d,f,g,j,k,m=window.document.cookie.split("; ");for(a.Logger.verbose(Constants.Messages.InformationMessages.CookieSearch),d=0,f=m.length;d<f;d++){//most recent version needs no migration
if(g=m[d].split("="),j=a._Helpers.decoded(g.shift()),k=a._Helpers.decoded(g.join("=")),j===a._Store.storageName)return;if(j===StorageNames$2.cookieNameV4)return c(k,StorageNames$2.cookieNameV4),void(a._Store.isLocalStorageAvailable&&e());// migration path for SDKv1CookiesV3, doesn't need to be encoded
if(j===StorageNames$2.cookieNameV3){b=h.convertSDKv1CookiesV3ToSDKv2CookiesV4(k),c(b,StorageNames$2.cookieNameV3);break}}}function c(b,c){var d,e,f=new Date,g=a._Persistence.getCookieDomain();d=new Date(f.getTime()+1e3*(60*(60*(24*StorageNames$2.CookieExpiration)))).toGMTString(),e=""===g?"":";domain="+g,a.Logger.verbose(Constants.Messages.InformationMessages.CookieSet),window.document.cookie=encodeURIComponent(a._Store.storageName)+"="+b+";expires="+d+";path=/"+e,a._Persistence.expireCookies(c),a._Store.migratingToIDSyncCookies=!0;}function d(b){try{var c={gs:{csm:[]}};for(var d in b=JSON.parse(b),b)b.hasOwnProperty(d)&&(CookiesGlobalSettingsKeys[d]?c.gs[d]=b[d]:"mpid"===d?c.cu=b[d]:b.mpid&&(c[b.mpid]=c[b.mpid]||{},MPIDKeys[d]&&(c[b.mpid][d]=b[d])));return JSON.stringify(c)}catch(b){a.Logger.error("Failed to restructure previous cookie into most current cookie schema");}}function e(){var b=StorageNames$2.localStorageProductsV4,c=localStorage.getItem(StorageNames$2.localStorageProductsV4);localStorage.setItem(a._Store.prodStorageName,c),localStorage.removeItem(b);}function f(b,c){if(a._Store.isLocalStorageAvailable){var d={};if(d[c]={},b.cp){try{d[c].cp=JSON.parse(Base64$2.decode(b.cp));}catch(a){d[c].cp=b.cp;}Array.isArray(d[c].cp)||(d[c].cp=[]);}localStorage.setItem(a._Store.prodStorageName,Base64$2.encode(JSON.stringify(d)));}}function g(){function b(b,c){try{window.localStorage.setItem(encodeURIComponent(a._Store.storageName),b);}catch(b){a.Logger.error("Error with setting localStorage item.");}window.localStorage.removeItem(encodeURIComponent(c));}var c,d,g,i,j=StorageNames$2.localStorageNameV3,k=StorageNames$2.localStorageNameV4,l=window.localStorage.getItem(a._Store.storageName);if(!l){if(d=window.localStorage.getItem(k),d)return b(d,k),void e();if(g=window.localStorage.getItem(j),g){// localStorage may contain only products, or the full persistence
// when there is an MPID on the cookie, it is the full persistence
if(a._Store.migratingToIDSyncCookies=!0,i=g.slice(),g=JSON.parse(a._Persistence.replacePipesWithCommas(a._Persistence.replaceApostrophesWithQuotes(g))),g.mpid)return g=JSON.parse(h.convertSDKv1CookiesV3ToSDKv2CookiesV4(i)),void b(JSON.stringify(g),j);// if no MPID, it is only the products
if((g.cp||g.pb)&&!g.mpid)return c=a._Persistence.getCookie(),c?(f(g,c.cu),void localStorage.removeItem(StorageNames$2.localStorageNameV3)):void localStorage.removeItem(StorageNames$2.localStorageNameV3)}}}var h=this;//  if there is a cookie or localStorage:
//  1. determine which version it is ('mprtcl-api', 'mprtcl-v2', 'mprtcl-v3', 'mprtcl-v4')
//  2. return if 'mprtcl-v4', otherwise migrate to mprtclv4 schema
// 3. if 'mprtcl-api', could be JSSDKv2 or JSSDKv1. JSSDKv2 cookie has a 'globalSettings' key on it
this.migrate=function(){try{b();}catch(b){a._Persistence.expireCookies(StorageNames$2.cookieNameV3),a._Persistence.expireCookies(StorageNames$2.cookieNameV4),a.Logger.error("Error migrating cookie: "+b);}if(a._Store.isLocalStorageAvailable)try{g();}catch(b){localStorage.removeItem(StorageNames$2.localStorageNameV3),localStorage.removeItem(StorageNames$2.localStorageNameV4),a.Logger.error("Error migrating localStorage: "+b);}},this.convertSDKv1CookiesV3ToSDKv2CookiesV4=function(b){b=a._Persistence.replacePipesWithCommas(a._Persistence.replaceApostrophesWithQuotes(b));var c=JSON.parse(b),e=JSON.parse(d(b));return c.mpid&&(e.gs.csm.push(c.mpid),e.gs.csm=Base64$2.encode(JSON.stringify(e.gs.csm)),f(c,c.mpid)),JSON.stringify(e)};}

function filteredMparticleUser(a,b,c){var d=this;return {getUserIdentities:function getUserIdentities(){var d={},e=c._Persistence.getUserIdentities(a);for(var f in e)e.hasOwnProperty(f)&&(d[Types.IdentityType.getIdentityName(c._Helpers.parseNumber(f))]=e[f]);return d=c._Helpers.filterUserIdentitiesForForwarders(d,b.userIdentityFilters),{userIdentities:d}},getMPID:function getMPID(){return a},getUserAttributesLists:function getUserAttributesLists(a){var b,e={};for(var f in b=d.getAllUserAttributes(),b)b.hasOwnProperty(f)&&Array.isArray(b[f])&&(e[f]=b[f].slice());return e=c._Helpers.filterUserAttributes(e,a.userAttributeFilters),e},getAllUserAttributes:function getAllUserAttributes(){var d={},e=c._Persistence.getAllUserAttributes(a);if(e)for(var f in e)e.hasOwnProperty(f)&&(d[f]=Array.isArray(e[f])?e[f].slice():e[f]);return d=c._Helpers.filterUserAttributes(d,b.userAttributeFilters),d}}}

function Forwarders(a){var b=this;this.initForwarders=function(c,d){var e=a.Identity.getCurrentUser();!a._Store.webviewBridgeEnabled&&a._Store.configuredForwarders&&(a._Store.configuredForwarders.sort(function(a,b){return a.settings.PriorityValue=a.settings.PriorityValue||0,b.settings.PriorityValue=b.settings.PriorityValue||0,-1*(a.settings.PriorityValue-b.settings.PriorityValue)}),a._Store.activeForwarders=a._Store.configuredForwarders.filter(function(f){if(!b.isEnabledForUserConsent(f.filteringConsentRuleValues,e))return !1;if(!b.isEnabledForUserAttributes(f.filteringUserAttributeValue,e))return !1;if(!b.isEnabledForUnknownUser(f.excludeAnonymousUser,e))return !1;var g=a._Helpers.filterUserIdentities(c,f.userIdentityFilters),h=a._Helpers.filterUserAttributes(e?e.getAllUserAttributes():{},f.userAttributeFilters);return f.initialized||(f.init(f.settings,d,!1,null,h,g,a._Store.SDKConfig.appVersion,a._Store.SDKConfig.appName,a._Store.SDKConfig.customFlags,a._Store.clientId),f.initialized=!0),!0}));},this.isEnabledForUserConsent=function(b,c){if(!b||!b.values||!b.values.length)return !0;if(!c)return !1;var d={},e=c.getConsentState();if(e){// the server hashes consent purposes in the following way:
// GDPR - '1' + purpose name
// CCPA - '2data_sale_opt_out' (there is only 1 purpose of data_sale_opt_out for CCPA)
var f=e.getGDPRConsentState();if(f)for(var g in f)f.hasOwnProperty(g)&&(i=a._Helpers.generateHash("1"+g).toString(),d[i]=f[g].Consented);var h=e.getCCPAConsentState();if(h){var i=a._Helpers.generateHash("2"+"data_sale_opt_out").toString();d[i]=h.Consented;}}var j=!1;return b.values.forEach(function(a){if(!j){var b=a.consentPurpose,c=a.hasConsented;d.hasOwnProperty(b)&&d[b]===c&&(j=!0);}}),b.includeOnMatch===j},this.isEnabledForUserAttributes=function(b,c){if(!b||!a._Helpers.isObject(b)||!Object.keys(b).length)return !0;var d,e,f;if(!c)return !1;f=c.getAllUserAttributes();var g=!1;try{if(f&&a._Helpers.isObject(f)&&Object.keys(f).length)for(var h in f)if(f.hasOwnProperty(h)&&(d=a._Helpers.generateHash(h).toString(),e=a._Helpers.generateHash(f[h]).toString(),d===b.userAttributeName&&e===b.userAttributeValue)){g=!0;break}return !b||b.includeOnMatch===g}catch(a){// in any error scenario, err on side of returning true and forwarding event
return !0}},this.isEnabledForUnknownUser=function(a,b){return !!(b&&b.isLoggedIn()||!a)},this.applyToForwarders=function(b,c){a._Store.activeForwarders.length&&a._Store.activeForwarders.forEach(function(d){var e=d[b];if(e)try{var f=d[b](c);f&&a.Logger.verbose(f);}catch(b){a.Logger.verbose(b);}});},this.sendEventToForwarders=function(b){var c,d,e,f=function(b,c){b.UserIdentities&&b.UserIdentities.length&&b.UserIdentities.forEach(function(d,e){a._Helpers.inArray(c,d.Type)&&(b.UserIdentities.splice(e,1),0<e&&e--);});},g=function(b,c){var d;if(c)for(var e in b.EventAttributes)b.EventAttributes.hasOwnProperty(e)&&(d=a._Helpers.generateHash(b.EventCategory+b.EventName+e),a._Helpers.inArray(c,d)&&delete b.EventAttributes[e]);},h=function(b,c){return !!(b&&b.length&&a._Helpers.inArray(b,c))},j=[Types.MessageType.PageEvent,Types.MessageType.PageView,Types.MessageType.Commerce];if(!a._Store.webviewBridgeEnabled&&a._Store.activeForwarders){d=a._Helpers.generateHash(b.EventCategory+b.EventName),e=a._Helpers.generateHash(b.EventCategory);for(var k=0;k<a._Store.activeForwarders.length;k++){// Check attribute forwarding rule. This rule allows users to only forward an event if a
// specific attribute exists and has a specific value. Alternatively, they can specify
// that an event not be forwarded if the specified attribute name and value exists.
// The two cases are controlled by the "includeOnMatch" boolean value.
// Supported message types for attribute forwarding rules are defined in the forwardingRuleMessageTypes array
if(-1<j.indexOf(b.EventDataType)&&a._Store.activeForwarders[k].filteringEventAttributeValue&&a._Store.activeForwarders[k].filteringEventAttributeValue.eventAttributeName&&a._Store.activeForwarders[k].filteringEventAttributeValue.eventAttributeValue){var l=null;// Attempt to find the attribute in the collection of event attributes
if(b.EventAttributes)for(var m in b.EventAttributes){var n;if(n=a._Helpers.generateHash(m).toString(),n===a._Store.activeForwarders[k].filteringEventAttributeValue.eventAttributeName&&(l={name:n,value:a._Helpers.generateHash(b.EventAttributes[m]).toString()}),l)break}var o=null!==l&&l.value===a._Store.activeForwarders[k].filteringEventAttributeValue.eventAttributeValue,p=!0===a._Store.activeForwarders[k].filteringEventAttributeValue.includeOnMatch?o:!o;if(!p)continue}// Clone the event object, as we could be sending different attributes to each forwarder
// Check event filtering rules
if(c={},c=a._Helpers.extend(!0,c,b),b.EventDataType===Types.MessageType.PageEvent&&(h(a._Store.activeForwarders[k].eventNameFilters,d)||h(a._Store.activeForwarders[k].eventTypeFilters,e)))continue;else if(b.EventDataType===Types.MessageType.Commerce&&h(a._Store.activeForwarders[k].eventTypeFilters,e))continue;else if(b.EventDataType===Types.MessageType.PageView&&h(a._Store.activeForwarders[k].screenNameFilters,d))continue;// Check attribute filtering rules
if(c.EventAttributes&&(b.EventDataType===Types.MessageType.PageEvent?g(c,a._Store.activeForwarders[k].attributeFilters):b.EventDataType===Types.MessageType.PageView&&g(c,a._Store.activeForwarders[k].pageViewAttributeFilters)),f(c,a._Store.activeForwarders[k].userIdentityFilters),c.UserAttributes=a._Helpers.filterUserAttributes(c.UserAttributes,a._Store.activeForwarders[k].userAttributeFilters),a.Logger.verbose("Sending message to forwarder: "+a._Store.activeForwarders[k].name),a._Store.activeForwarders[k].process){var q=a._Store.activeForwarders[k].process(c);q&&a.Logger.verbose(q);}}}},this.callSetUserAttributeOnForwarders=function(b,c){a._Store.activeForwarders.length&&a._Store.activeForwarders.forEach(function(d){if(d.setUserAttribute&&d.userAttributeFilters&&!a._Helpers.inArray(d.userAttributeFilters,a._Helpers.generateHash(b)))try{var e=d.setUserAttribute(b,c);e&&a.Logger.verbose(e);}catch(b){a.Logger.error(b);}});},this.setForwarderUserIdentities=function(b){a._Store.activeForwarders.forEach(function(c){var d=a._Helpers.filterUserIdentities(b,c.userIdentityFilters);c.setUserIdentity&&d.forEach(function(b){var d=c.setUserIdentity(b.Identity,b.Type);d&&a.Logger.verbose(d);});});},this.setForwarderOnUserIdentified=function(b){a._Store.activeForwarders.forEach(function(c){var d=filteredMparticleUser(b.getMPID(),c,a);if(c.onUserIdentified){var e=c.onUserIdentified(d);e&&a.Logger.verbose(e);}});},this.setForwarderOnIdentityComplete=function(b,c){var d;a._Store.activeForwarders.forEach(function(e){var f=filteredMparticleUser(b.getMPID(),e,a);"identify"===c?e.onIdentifyComplete&&(d=e.onIdentifyComplete(f),d&&a.Logger.verbose(d)):"login"===c?e.onLoginComplete&&(d=e.onLoginComplete(f),d&&a.Logger.verbose(d)):"logout"===c?e.onLogoutComplete&&(d=e.onLogoutComplete(f),d&&a.Logger.verbose(d)):"modify"==c&&e.onModifyComplete&&(d=e.onModifyComplete(f),d&&a.Logger.verbose(d));});},this.getForwarderStatsQueue=function(){return a._Persistence.forwardingStatsBatches.forwardingStatsEventQueue},this.setForwarderStatsQueue=function(b){a._Persistence.forwardingStatsBatches.forwardingStatsEventQueue=b;},this.configureForwarder=function(b){var c=null,d=b,e={};// if there are kits inside of mpInstance._Store.SDKConfig.kits, then mParticle is self hosted
for(var f in a._Helpers.isObject(a._Store.SDKConfig.kits)&&0<Object.keys(a._Store.SDKConfig.kits).length?e=a._Store.SDKConfig.kits:0<a._preInit.forwarderConstructors.length&&a._preInit.forwarderConstructors.forEach(function(a){e[a.name]=a;}),e)if(f===d.name&&(d.isDebug===a._Store.SDKConfig.isDevelopmentMode||d.isSandbox===a._Store.SDKConfig.isDevelopmentMode)){c=new e[f].constructor,c.id=d.moduleId,c.isSandbox=d.isDebug||d.isSandbox,c.hasSandbox="true"===d.hasDebugString,c.isVisible=d.isVisible,c.settings=d.settings,c.eventNameFilters=d.eventNameFilters,c.eventTypeFilters=d.eventTypeFilters,c.attributeFilters=d.attributeFilters,c.screenNameFilters=d.screenNameFilters,c.screenNameFilters=d.screenNameFilters,c.pageViewAttributeFilters=d.pageViewAttributeFilters,c.userIdentityFilters=d.userIdentityFilters,c.userAttributeFilters=d.userAttributeFilters,c.filteringEventAttributeValue=d.filteringEventAttributeValue,c.filteringUserAttributeValue=d.filteringUserAttributeValue,c.eventSubscriptionId=d.eventSubscriptionId,c.filteringConsentRuleValues=d.filteringConsentRuleValues,c.excludeAnonymousUser=d.excludeAnonymousUser,a._Store.configuredForwarders.push(c);break}},this.configurePixel=function(b){(b.isDebug===a._Store.SDKConfig.isDevelopmentMode||b.isProduction!==a._Store.SDKConfig.isDevelopmentMode)&&a._Store.pixelConfigurations.push(b);},this.processForwarders=function(c,d){if(!c)a.Logger.warning("No config was passed. Cannot process forwarders");else try{Array.isArray(c.kitConfigs)&&c.kitConfigs.length&&c.kitConfigs.forEach(function(a){b.configureForwarder(a);}),Array.isArray(c.pixelConfigs)&&c.pixelConfigs.length&&c.pixelConfigs.forEach(function(a){b.configurePixel(a);}),b.initForwarders(a._Store.SDKConfig.identifyRequest.userIdentities,d);}catch(b){a.Logger.error("Config was not parsed propertly. Forwarders may not be initialized.");}};}

var MessageType$1=Types.MessageType,ApplicationTransitionType$1=Types.ApplicationTransitionType;function ServerModel(a){function b(a,b){var c=[];for(var d in b.flags={},a.CustomFlags)c=[],a.CustomFlags.hasOwnProperty(d)&&(Array.isArray(a.CustomFlags[d])?a.CustomFlags[d].forEach(function(a){("number"==typeof a||"string"==typeof a||"boolean"==typeof a)&&c.push(a.toString());}):("number"==typeof a.CustomFlags[d]||"string"==typeof a.CustomFlags[d]||"boolean"==typeof a.CustomFlags[d])&&c.push(a.CustomFlags[d].toString()),c.length&&(b.flags[d]=c));}function c(a){return a?a.map(function(a){return d(a)}):[]}function d(b){return {id:a._Helpers.parseStringOrNumber(b.Sku),nm:a._Helpers.parseStringOrNumber(b.Name),pr:a._Helpers.parseNumber(b.Price),qt:a._Helpers.parseNumber(b.Quantity),br:a._Helpers.parseStringOrNumber(b.Brand),va:a._Helpers.parseStringOrNumber(b.Variant),ca:a._Helpers.parseStringOrNumber(b.Category),ps:a._Helpers.parseNumber(b.Position),cc:a._Helpers.parseStringOrNumber(b.CouponCode),tpa:a._Helpers.parseNumber(b.TotalAmount),attrs:b.Attributes}}var e=this;this.appendUserInfo=function(b,c){if(c){if(!b)return c.MPID=null,c.ConsentState=null,c.UserAttributes=null,void(c.UserIdentities=null);if(!(c.MPID&&c.MPID===b.getMPID())){c.MPID=b.getMPID(),c.ConsentState=b.getConsentState(),c.UserAttributes=b.getAllUserAttributes();var d=b.getUserIdentities().userIdentities,e={};for(var f in d){var g=Types.IdentityType.getIdentityType(f);!1!==g&&(e[g]=d[f]);}var h=[];if(a._Helpers.isObject(e)&&Object.keys(e).length)for(var i in e){var j={};j.Identity=e[i],j.Type=a._Helpers.parseNumber(i),h.push(j);}c.UserIdentities=h;}}},this.convertToConsentStateDTO=function(a){if(!a)return null;var b={},c=a.getGDPRConsentState();if(c){var d={};for(var e in b.gdpr=d,c)if(c.hasOwnProperty(e)){var f=c[e];b.gdpr[e]={},"boolean"==typeof f.Consented&&(d[e].c=f.Consented),"number"==typeof f.Timestamp&&(d[e].ts=f.Timestamp),"string"==typeof f.ConsentDocument&&(d[e].d=f.ConsentDocument),"string"==typeof f.Location&&(d[e].l=f.Location),"string"==typeof f.HardwareId&&(d[e].h=f.HardwareId);}}var g=a.getCCPAConsentState();return g&&(b.ccpa={data_sale_opt_out:{c:g.Consented,ts:g.Timestamp,d:g.ConsentDocument,l:g.Location,h:g.HardwareId}}),b},this.createEventObject=function(b){var c={},d={},f=b.messageType===Types.MessageType.OptOut?!a._Store.isEnabled:null;if(a._Store.sessionId||b.messageType==Types.MessageType.OptOut||a._Store.webviewBridgeEnabled){d=b.hasOwnProperty("toEventAPIObject")?b.toEventAPIObject():{EventName:b.name||b.messageType,EventCategory:b.eventType,EventAttributes:a._Helpers.sanitizeAttributes(b.data),EventDataType:b.messageType,CustomFlags:b.customFlags||{},UserAttributeChanges:b.userAttributeChanges,UserIdentityChanges:b.userIdentityChanges},b.messageType!==Types.MessageType.SessionEnd&&(a._Store.dateLastEventSent=new Date),c={Store:a._Store.serverSettings,SDKVersion:Constants.sdkVersion,SessionId:a._Store.sessionId,SessionStartDate:a._Store.sessionStartDate?a._Store.sessionStartDate.getTime():null,Debug:a._Store.SDKConfig.isDevelopmentMode,Location:a._Store.currentPosition,OptOut:f,ExpandedEventCount:0,AppVersion:a.getAppVersion(),AppName:a.getAppName(),ClientGeneratedId:a._Store.clientId,DeviceId:a._Store.deviceId,IntegrationAttributes:a._Store.integrationAttributes,CurrencyCode:a._Store.currencyCode,DataPlan:a._Store.SDKConfig.dataPlan?a._Store.SDKConfig.dataPlan:{}},d.CurrencyCode=a._Store.currencyCode;var g=a.Identity.getCurrentUser();return e.appendUserInfo(g,d),b.messageType===Types.MessageType.SessionEnd&&(d.SessionLength=a._Store.dateLastEventSent.getTime()-a._Store.sessionStartDate.getTime(),d.currentSessionMPIDs=a._Store.currentSessionMPIDs,d.EventAttributes=a._Store.sessionAttributes,a._Store.currentSessionMPIDs=[],a._Store.sessionStartDate=null),c.Timestamp=a._Store.dateLastEventSent.getTime(),a._Helpers.extend({},d,c)}return null},this.convertEventToDTO=function(d,f){var g={n:d.EventName,et:d.EventCategory,ua:d.UserAttributes,ui:d.UserIdentities,ia:d.IntegrationAttributes,str:d.Store,attrs:d.EventAttributes,sdk:d.SDKVersion,sid:d.SessionId,sl:d.SessionLength,ssd:d.SessionStartDate,dt:d.EventDataType,dbg:d.Debug,ct:d.Timestamp,lc:d.Location,o:d.OptOut,eec:d.ExpandedEventCount,av:d.AppVersion,cgid:d.ClientGeneratedId,das:d.DeviceId,mpid:d.MPID,smpids:d.currentSessionMPIDs};d.DataPlan&&d.DataPlan.PlanId&&(g.dp_id=d.DataPlan.PlanId,d.DataPlan.PlanVersion&&(g.dp_v=d.DataPlan.PlanVersion));var h=e.convertToConsentStateDTO(d.ConsentState);return h&&(g.con=h),d.EventDataType===MessageType$1.AppStateTransition&&(g.fr=f,g.iu=!1,g.at=ApplicationTransitionType$1.AppInit,g.lr=window.location.href||null,g.attrs=null),d.CustomFlags&&b(d,g),d.EventDataType===MessageType$1.Commerce?(g.cu=d.CurrencyCode,d.ShoppingCart&&(g.sc={pl:c(d.ShoppingCart.ProductList)}),d.ProductAction?g.pd={an:d.ProductAction.ProductActionType,cs:a._Helpers.parseNumber(d.ProductAction.CheckoutStep),co:d.ProductAction.CheckoutOptions,pl:c(d.ProductAction.ProductList),ti:d.ProductAction.TransactionId,ta:d.ProductAction.Affiliation,tcc:d.ProductAction.CouponCode,tr:a._Helpers.parseNumber(d.ProductAction.TotalAmount),ts:a._Helpers.parseNumber(d.ProductAction.ShippingAmount),tt:a._Helpers.parseNumber(d.ProductAction.TaxAmount)}:d.PromotionAction?g.pm={an:d.PromotionAction.PromotionActionType,pl:d.PromotionAction.PromotionList.map(function(a){return {id:a.Id,nm:a.Name,cr:a.Creative,ps:a.Position?a.Position:0}})}:d.ProductImpressions&&(g.pi=d.ProductImpressions.map(function(a){return {pil:a.ProductImpressionList,pl:c(a.ProductList)}}))):d.EventDataType===MessageType$1.Profile&&(g.pet=d.ProfileMessageType),g};}

function forwardingStatsUploader(a){function b(){var b=a._Forwarders.getForwarderStatsQueue(),c=a._Persistence.forwardingStatsBatches.uploadsTable,d=Date.now();for(var e in b.length&&(c[d]={uploading:!1,data:b},a._Forwarders.setForwarderStatsQueue([])),c)(function(b){if(c.hasOwnProperty(b)&&!1===c[b].uploading){var d=function(){4===e.readyState&&(200===e.status||202===e.status?(a.Logger.verbose("Successfully sent  "+e.statusText+" from server"),delete c[b]):"4"===e.status.toString()[0]?429!==e.status&&delete c[b]:c[b].uploading=!1);},e=a._Helpers.createXHR(d),f=c[b].data;c[b].uploading=!0,a._APIClient.sendBatchForwardingStatsToServer(f,e);}})(e);}this.startForwardingStatsTimer=function(){mParticle._forwardingStatsTimer=setInterval(function(){b();},a._Store.SDKConfig.forwarderStatsTimeout);};}

var Messages$7=Constants.Messages,HTTPCodes$1=Constants.HTTPCodes;function Identity(t){var s=this;/**
     * Invoke these methods on the mParticle.Identity object.
     * Example: mParticle.Identity.getCurrentUser().
     * @class mParticle.Identity
     */ /**
     * Invoke these methods on the mParticle.Identity.getCurrentUser() object.
     * Example: mParticle.Identity.getCurrentUser().getAllUserAttributes()
     * @class mParticle.Identity.getCurrentUser()
     */ /**
     * Invoke these methods on the mParticle.Identity.getCurrentUser().getCart() object.
     * Example: mParticle.Identity.getCurrentUser().getCart().add(...);
     * @class mParticle.Identity.getCurrentUser().getCart()
     * @deprecated
     */ // send a user identity change request on identify, login, logout, modify when any values change.
// compare what identities exist vs what is previously was for the specific user if they were in memory before.
// if it's the first time the user is logging in, send a user identity change request with
this.checkIdentitySwap=function(e,s,r){if(e&&s&&e!==s){var i=t._Persistence.useLocalStorage()?t._Persistence.getLocalStorage():t._Persistence.getCookie();i.cu=s,i.gs.csm=r,t._Persistence.saveCookies(i);}},this.IdentityRequest={createKnownIdentities:function createKnownIdentities(e,s){var r={};if(e&&e.userIdentities&&t._Helpers.isObject(e.userIdentities))for(var i in e.userIdentities)r[i]=e.userIdentities[i];return r.device_application_stamp=s,r},preProcessIdentityRequest:function preProcessIdentityRequest(e,s,r){t.Logger.verbose(Messages$7.InformationMessages.StartingLogEvent+": "+r);var i=t._Helpers.Validators.validateIdentities(e,r);if(!i.valid)return t.Logger.error("ERROR: "+i.error),{valid:!1,error:i.error};if(s&&!t._Helpers.Validators.isFunction(s)){var n="The optional callback must be a function. You tried entering a(n) "+_typeof_1(s);return t.Logger.error(n),{valid:!1,error:n}}return {valid:!0}},createIdentityRequest:function createIdentityRequest(e,s,r,i,n,o,a){var d={client_sdk:{platform:s,sdk_vendor:r,sdk_version:i},context:o,environment:t._Store.SDKConfig.isDevelopmentMode?"development":"production",request_id:t._Helpers.generateUniqueId(),request_timestamp_ms:new Date().getTime(),previous_mpid:a||null,known_identities:this.createKnownIdentities(e,n)};return d},createModifyIdentityRequest:function createModifyIdentityRequest(e,s,r,i,n,o){return {client_sdk:{platform:r,sdk_vendor:i,sdk_version:n},context:o,environment:t._Store.SDKConfig.isDevelopmentMode?"development":"production",request_id:t._Helpers.generateUniqueId(),request_timestamp_ms:new Date().getTime(),identity_changes:this.createIdentityChanges(e,s)}},createIdentityChanges:function createIdentityChanges(e,s){var r,i=[];if(s&&t._Helpers.isObject(s)&&e&&t._Helpers.isObject(e))for(r in s)i.push({old_value:e[r]||null,new_value:s[r],identity_type:r});return i},modifyUserIdentities:function modifyUserIdentities(e,t){var s={};for(var r in t)s[Types.IdentityType.getIdentityType(r)]=t[r];for(r in e)s[r]||(s[r]=e[r]);return s},createAliasNetworkRequest:function createAliasNetworkRequest(e){return {request_id:t._Helpers.generateUniqueId(),request_type:"alias",environment:t._Store.SDKConfig.isDevelopmentMode?"development":"production",api_key:t._Store.devToken,data:{destination_mpid:e.destinationMpid,source_mpid:e.sourceMpid,start_unixtime_ms:e.startTime,end_unixtime_ms:e.endTime,device_application_stamp:t._Store.deviceId}}},convertAliasToNative:function convertAliasToNative(e){return {DestinationMpid:e.destinationMpid,SourceMpid:e.sourceMpid,StartUnixtimeMs:e.startTime,EndUnixtimeMs:e.endTime}},convertToNative:function convertToNative(e){var t=[];if(e&&e.userIdentities){for(var s in e.userIdentities)e.userIdentities.hasOwnProperty(s)&&t.push({Type:Types.IdentityType.getIdentityType(s),Identity:e.userIdentities[s]});return {UserIdentities:t}}}},this.IdentityAPI={HTTPCodes:HTTPCodes$1,/**
         * Initiate a logout request to the mParticle server
         * @method identify
         * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
         * @param {Function} [callback] A callback function that is called when the identify request completes
         */identify:function identify(e,r){var i,n=t.Identity.getCurrentUser(),o=t._Identity.IdentityRequest.preProcessIdentityRequest(e,r,"identify");if(n&&(i=n.getMPID()),o.valid){var a=t._Identity.IdentityRequest.createIdentityRequest(e,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,t._Store.deviceId,t._Store.context,i);t._Helpers.canLog()?t._Store.webviewBridgeEnabled?(t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Identify,JSON.stringify(t._Identity.IdentityRequest.convertToNative(e))),t._Helpers.invokeCallback(r,HTTPCodes$1.nativeIdentityRequest,"Identify request sent to native sdk")):t._APIClient.sendIdentityRequest(a,"identify",r,e,s.parseIdentityResponse,i):(t._Helpers.invokeCallback(r,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$7.InformationMessages.AbandonLogEvent),t.Logger.verbose(Messages$7.InformationMessages.AbandonLogEvent));}else t._Helpers.invokeCallback(r,HTTPCodes$1.validationIssue,o.error),t.Logger.verbose(o);},/**
         * Initiate a logout request to the mParticle server
         * @method logout
         * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
         * @param {Function} [callback] A callback function that is called when the logout request completes
         */logout:function logout(e,r){var i,n=t.Identity.getCurrentUser(),o=t._Identity.IdentityRequest.preProcessIdentityRequest(e,r,"logout");if(n&&(i=n.getMPID()),o.valid){var a,d=t._Identity.IdentityRequest.createIdentityRequest(e,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,t._Store.deviceId,t._Store.context,i);t._Helpers.canLog()?t._Store.webviewBridgeEnabled?(t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Logout,JSON.stringify(t._Identity.IdentityRequest.convertToNative(e))),t._Helpers.invokeCallback(r,HTTPCodes$1.nativeIdentityRequest,"Logout request sent to native sdk")):(t._APIClient.sendIdentityRequest(d,"logout",r,e,s.parseIdentityResponse,i),a=t._ServerModel.createEventObject({messageType:Types.MessageType.Profile}),a.ProfileMessageType=Types.ProfileMessageType.Logout,t._Store.activeForwarders.length&&t._Store.activeForwarders.forEach(function(e){e.logOut&&e.logOut(a);})):(t._Helpers.invokeCallback(r,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$7.InformationMessages.AbandonLogEvent),t.Logger.verbose(Messages$7.InformationMessages.AbandonLogEvent));}else t._Helpers.invokeCallback(r,HTTPCodes$1.validationIssue,o.error),t.Logger.verbose(o);},/**
         * Initiate a login request to the mParticle server
         * @method login
         * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
         * @param {Function} [callback] A callback function that is called when the login request completes
         */login:function login(e,r){var i,n=t.Identity.getCurrentUser(),o=t._Identity.IdentityRequest.preProcessIdentityRequest(e,r,"login");if(n&&(i=n.getMPID()),o.valid){var a=t._Identity.IdentityRequest.createIdentityRequest(e,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,t._Store.deviceId,t._Store.context,i);t._Helpers.canLog()?t._Store.webviewBridgeEnabled?(t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Login,JSON.stringify(t._Identity.IdentityRequest.convertToNative(e))),t._Helpers.invokeCallback(r,HTTPCodes$1.nativeIdentityRequest,"Login request sent to native sdk")):t._APIClient.sendIdentityRequest(a,"login",r,e,s.parseIdentityResponse,i):(t._Helpers.invokeCallback(r,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$7.InformationMessages.AbandonLogEvent),t.Logger.verbose(Messages$7.InformationMessages.AbandonLogEvent));}else t._Helpers.invokeCallback(r,HTTPCodes$1.validationIssue,o.error),t.Logger.verbose(o);},/**
         * Initiate a modify request to the mParticle server
         * @method modify
         * @param {Object} identityApiData The identityApiData object as indicated [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/README.md#1-customize-the-sdk)
         * @param {Function} [callback] A callback function that is called when the modify request completes
         */modify:function modify(e,r){var i,n=t.Identity.getCurrentUser(),o=t._Identity.IdentityRequest.preProcessIdentityRequest(e,r,"modify");n&&(i=n.getMPID());var a=e&&e.userIdentities?e.userIdentities:{};if(o.valid){var d=t._Identity.IdentityRequest.createModifyIdentityRequest(n?n.getUserIdentities().userIdentities:{},a,Constants.platform,Constants.sdkVendor,Constants.sdkVersion,t._Store.context);t._Helpers.canLog()?t._Store.webviewBridgeEnabled?(t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Modify,JSON.stringify(t._Identity.IdentityRequest.convertToNative(e))),t._Helpers.invokeCallback(r,HTTPCodes$1.nativeIdentityRequest,"Modify request sent to native sdk")):t._APIClient.sendIdentityRequest(d,"modify",r,e,s.parseIdentityResponse,i):(t._Helpers.invokeCallback(r,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$7.InformationMessages.AbandonLogEvent),t.Logger.verbose(Messages$7.InformationMessages.AbandonLogEvent));}else t._Helpers.invokeCallback(r,HTTPCodes$1.validationIssue,o.error),t.Logger.verbose(o);},/**
         * Returns a user object with methods to interact with the current user
         * @method getCurrentUser
         * @return {Object} the current user object
         */getCurrentUser:function getCurrentUser(){var e=t._Store.mpid;return e?(e=t._Store.mpid.slice(),s.mParticleUser(e,t._Store.isLoggedIn)):t._Store.webviewBridgeEnabled?s.mParticleUser():null},/**
         * Returns a the user object associated with the mpid parameter or 'null' if no such
         * user exists
         * @method getUser
         * @param {String} mpid of the desired user
         * @return {Object} the user for  mpid
         */getUser:function getUser(e){var r=t._Persistence.getPersistence();return r?r[e]&&!Constants.SDKv2NonMPIDCookieKeys.hasOwnProperty(e)?s.mParticleUser(e):null:null},/**
         * Returns all users, including the current user and all previous users that are stored on the device.
         * @method getUsers
         * @return {Array} array of users
         */getUsers:function getUsers(){var e=t._Persistence.getPersistence(),r=[];if(e)for(var i in e)Constants.SDKv2NonMPIDCookieKeys.hasOwnProperty(i)||r.push(s.mParticleUser(i));return r.sort(function(e,t){var s=e.getLastSeenTime()||0,r=t.getLastSeenTime()||0;return s>r?-1:1}),r},/**
         * Initiate an alias request to the mParticle server
         * @method aliasUsers
         * @param {Object} aliasRequest  object representing an AliasRequest
         * @param {Function} [callback] A callback function that is called when the aliasUsers request completes
         */aliasUsers:function aliasUsers(e,s){var r;if(e.destinationMpid&&e.sourceMpid||(r=Messages$7.ValidationMessages.AliasMissingMpid),e.destinationMpid===e.sourceMpid&&(r=Messages$7.ValidationMessages.AliasNonUniqueMpid),e.startTime&&e.endTime||(r=Messages$7.ValidationMessages.AliasMissingTime),e.startTime>e.endTime&&(r=Messages$7.ValidationMessages.AliasStartBeforeEndTime),r)return t.Logger.warning(r),void t._Helpers.invokeAliasCallback(s,HTTPCodes$1.validationIssue,r);if(!t._Helpers.canLog())t._Helpers.invokeAliasCallback(s,HTTPCodes$1.loggingDisabledOrMissingAPIKey,Messages$7.InformationMessages.AbandonAliasUsers),t.Logger.verbose(Messages$7.InformationMessages.AbandonAliasUsers);else if(t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.Alias,JSON.stringify(t._Identity.IdentityRequest.convertAliasToNative(e))),t._Helpers.invokeAliasCallback(s,HTTPCodes$1.nativeIdentityRequest,"Alias request sent to native sdk");else{t.Logger.verbose(Messages$7.InformationMessages.StartingAliasRequest+": "+e.sourceMpid+" -> "+e.destinationMpid);var i=t._Identity.IdentityRequest.createAliasNetworkRequest(e);t._APIClient.sendAliasRequest(i,s);}},/**
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
        */createAliasRequest:function createAliasRequest(e,s){try{if(!s||!e)return t.Logger.error("'destinationUser' and 'sourceUser' must both be present"),null;var r=e.getFirstSeenTime();r||t.Identity.getUsers().forEach(function(e){e.getFirstSeenTime()&&(!r||e.getFirstSeenTime()<r)&&(r=e.getFirstSeenTime());});var i=new Date().getTime()-1e3*(60*(60*(24*t._Store.SDKConfig.aliasMaxWindow))),n=e.getLastSeenTime()||new Date().getTime();return r<i&&(r=i,n<r&&t.Logger.warning("Source User has not been seen in the last "+t._Store.SDKConfig.maxAliasWindow+" days, Alias Request will likely fail")),{destinationMpid:s.getMPID(),sourceMpid:e.getMPID(),startTime:r,endTime:n}}catch(s){return t.Logger.error("There was a problem with creating an alias request: "+s),null}}},this.mParticleUser=function(e,s){var r=this;return {/**
             * Get user identities for current user
             * @method getUserIdentities
             * @return {Object} an object with userIdentities as its key
             */getUserIdentities:function getUserIdentities(){var s={},r=t._Persistence.getUserIdentities(e);for(var i in r)r.hasOwnProperty(i)&&(s[Types.IdentityType.getIdentityName(t._Helpers.parseNumber(i))]=r[i]);return {userIdentities:s}},/**
             * Get the MPID of the current user
             * @method getMPID
             * @return {String} the current user MPID as a string
             */getMPID:function getMPID(){return e},/**
             * Sets a user tag
             * @method setUserTag
             * @param {String} tagName
             */setUserTag:function setUserTag(e){return t._Helpers.Validators.isValidKeyValue(e)?void this.setUserAttribute(e,null):void t.Logger.error(Messages$7.ErrorMessages.BadKey)},/**
             * Removes a user tag
             * @method removeUserTag
             * @param {String} tagName
             */removeUserTag:function removeUserTag(e){return t._Helpers.Validators.isValidKeyValue(e)?void this.removeUserAttribute(e):void t.Logger.error(Messages$7.ErrorMessages.BadKey)},/**
             * Sets a user attribute
             * @method setUserAttribute
             * @param {String} key
             * @param {String} value
             */setUserAttribute:function setUserAttribute(s,i){var n,o,a,d;if(t._SessionManager.resetSessionTimer(),t._Helpers.canLog()){if(!t._Helpers.Validators.isValidAttributeValue(i))return void t.Logger.error(Messages$7.ErrorMessages.BadAttribute);if(!t._Helpers.Validators.isValidKeyValue(s))return void t.Logger.error(Messages$7.ErrorMessages.BadKey);if(t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetUserAttribute,JSON.stringify({key:s,value:i}));else{n=t._Persistence.getPersistence(),o=this.getAllUserAttributes();var g=t._Helpers.findKeyInObject(o,s);g?(d=!1,a=o[g],delete o[g]):d=!0,r.sendUserAttributeChangeEvent(s,i,a,d,!1),o[s]=i,n&&n[e]&&(n[e].ua=o,t._Persistence.saveCookies(n,e)),t._Forwarders.initForwarders(r.IdentityAPI.getCurrentUser().getUserIdentities(),t._APIClient.prepareForwardingStats),t._Forwarders.callSetUserAttributeOnForwarders(s,i);}}},/**
             * Set multiple user attributes
             * @method setUserAttributes
             * @param {Object} user attribute object with keys of the attribute type, and value of the attribute value
             */setUserAttributes:function setUserAttributes(e){if(t._SessionManager.resetSessionTimer(),!t._Helpers.isObject(e))t.Logger.error("Must pass an object into setUserAttributes. You passed a "+_typeof_1(e));else if(t._Helpers.canLog())for(var s in e)e.hasOwnProperty(s)&&this.setUserAttribute(s,e[s]);},/**
             * Removes a specific user attribute
             * @method removeUserAttribute
             * @param {String} key
             */removeUserAttribute:function removeUserAttribute(s){var i,n;if(t._SessionManager.resetSessionTimer(),!t._Helpers.Validators.isValidKeyValue(s))return void t.Logger.error(Messages$7.ErrorMessages.BadKey);if(t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveUserAttribute,JSON.stringify({key:s,value:null}));else{i=t._Persistence.getPersistence(),n=this.getAllUserAttributes(),r.sendUserAttributeChangeEvent(s,null,n[s],!1,!0);var o=t._Helpers.findKeyInObject(n,s);o&&(s=o),delete n[s],i&&i[e]&&(i[e].ua=n,t._Persistence.saveCookies(i,e)),t._Forwarders.initForwarders(r.IdentityAPI.getCurrentUser().getUserIdentities(),t._APIClient.prepareForwardingStats),t._Forwarders.applyToForwarders("removeUserAttribute",s);}},/**
             * Sets a list of user attributes
             * @method setUserAttributeList
             * @param {String} key
             * @param {Array} value an array of values
             */setUserAttributeList:function setUserAttributeList(s,n){var o,a,d,g,l;if(t._SessionManager.resetSessionTimer(),!t._Helpers.Validators.isValidKeyValue(s))return void t.Logger.error(Messages$7.ErrorMessages.BadKey);if(!Array.isArray(n))return void t.Logger.error("The value you passed in to setUserAttributeList must be an array. You passed in a "+("undefined"==typeof value?"undefined":_typeof_1(value)));var u=n.slice();if(t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetUserAttributeList,JSON.stringify({key:s,value:u}));else{o=t._Persistence.getPersistence(),a=this.getAllUserAttributes();var p=t._Helpers.findKeyInObject(a,s);if(p?(g=!1,d=a[p],delete a[p]):g=!0,t._APIClient.shouldEnableBatching()){// If the new attributeList length is different previous, then there is a change event.
// Loop through new attributes list, see if they are all in the same index as previous user attributes list
// If there are any changes, break, and immediately send a userAttributeChangeEvent with full array as a value
if(!d||!Array.isArray(d))l=!0;else if(n.length!==d.length)l=!0;else for(var c=0;c<n.length;c++)if(d[c]!==n[c]){l=!0;break}l&&r.sendUserAttributeChangeEvent(s,n,d,g,!1);}a[s]=u,o&&o[e]&&(o[e].ua=a,t._Persistence.saveCookies(o,e)),t._Forwarders.initForwarders(r.IdentityAPI.getCurrentUser().getUserIdentities(),t._APIClient.prepareForwardingStats),t._Forwarders.callSetUserAttributeOnForwarders(s,u);}},/**
             * Removes all user attributes
             * @method removeAllUserAttributes
             */removeAllUserAttributes:function removeAllUserAttributes(){var e;if(t._SessionManager.resetSessionTimer(),t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveAllUserAttributes);else if(e=this.getAllUserAttributes(),t._Forwarders.initForwarders(r.IdentityAPI.getCurrentUser().getUserIdentities(),t._APIClient.prepareForwardingStats),e)for(var s in e)e.hasOwnProperty(s)&&t._Forwarders.applyToForwarders("removeUserAttribute",s),this.removeUserAttribute(s);},/**
             * Returns all user attribute keys that have values that are arrays
             * @method getUserAttributesLists
             * @return {Object} an object of only keys with array values. Example: { attr1: [1, 2, 3], attr2: ['a', 'b', 'c'] }
             */getUserAttributesLists:function getUserAttributesLists(){var e,t={};for(var s in e=this.getAllUserAttributes(),e)e.hasOwnProperty(s)&&Array.isArray(e[s])&&(t[s]=e[s].slice());return t},/**
             * Returns all user attributes
             * @method getAllUserAttributes
             * @return {Object} an object of all user attributes. Example: { attr1: 'value1', attr2: ['a', 'b', 'c'] }
             */getAllUserAttributes:function getAllUserAttributes(){var s={},r=t._Persistence.getAllUserAttributes(e);if(r)for(var i in r)r.hasOwnProperty(i)&&(s[i]=Array.isArray(r[i])?r[i].slice():r[i]);return s},/**
             * Returns the cart object for the current user
             * @method getCart
             * @return a cart object
             */getCart:function getCart(){return t.Logger.warning("Deprecated function Identity.getCurrentUser().getCart() will be removed in future releases"),r.mParticleUserCart(e)},/**
             * Returns the Consent State stored locally for this user.
             * @method getConsentState
             * @return a ConsentState object
             */getConsentState:function getConsentState(){return t._Persistence.getConsentState(e)},/**
             * Sets the Consent State stored locally for this user.
             * @method setConsentState
             * @param {Object} consent state
             */setConsentState:function setConsentState(s){t._Persistence.saveUserConsentStateToCookies(e,s),t._Forwarders.initForwarders(this.getUserIdentities().userIdentities,t._APIClient.prepareForwardingStats);},isLoggedIn:function isLoggedIn(){return s},getLastSeenTime:function getLastSeenTime(){return t._Persistence.getLastSeenTime(e)},getFirstSeenTime:function getFirstSeenTime(){return t._Persistence.getFirstSeenTime(e)}}},this.mParticleUserCart=function(e){return {/**
             * Adds a cart product to the user cart
             * @method add
             * @param {Object} product the product
             * @param {Boolean} [logEvent] a boolean to log adding of the cart object. If blank, no logging occurs.
             * @deprecated
             */add:function add(s,r){t.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().add() will be removed in future releases");var i,n,o;if(o=Array.isArray(s)?s.slice():[s],o.forEach(function(e){e.Attributes=t._Helpers.sanitizeAttributes(e.Attributes);}),t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.AddToCart,JSON.stringify(o));else{t._SessionManager.resetSessionTimer(),n=t._Persistence.getUserProductsFromLS(e),n=n.concat(o),!0===r&&t._Events.logProductActionEvent(Types.ProductActionType.AddToCart,o);n.length>t._Store.SDKConfig.maxProducts&&(t.Logger.verbose("The cart contains "+n.length+" items. Only "+t._Store.SDKConfig.maxProducts+" can currently be saved in cookies."),n=n.slice(-t._Store.SDKConfig.maxProducts)),i=t._Persistence.getAllUserProductsFromLS(),i[e].cp=n,t._Persistence.setCartProducts(i);}},/**
             * Removes a cart product from the current user cart
             * @method remove
             * @param {Object} product the product
             * @param {Boolean} [logEvent] a boolean to log adding of the cart object. If blank, no logging occurs.
             * @deprecated
             */remove:function remove(s,r){t.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().remove() will be removed in future releases");var i,n,o=-1,a=null;if(t._Store.webviewBridgeEnabled)t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.RemoveFromCart,JSON.stringify(s));else{t._SessionManager.resetSessionTimer(),n=t._Persistence.getUserProductsFromLS(e),n&&(n.forEach(function(e,t){e.Sku===s.Sku&&(o=t,a=e);}),-1<o&&(n.splice(o,1),!0===r&&t._Events.logProductActionEvent(Types.ProductActionType.RemoveFromCart,a)));i=t._Persistence.getAllUserProductsFromLS(),i[e].cp=n,t._Persistence.setCartProducts(i);}},/**
             * Clears the user's cart
             * @method clear
             * @deprecated
             */clear:function clear(){t.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().clear() will be removed in future releases");var s;t._Store.webviewBridgeEnabled?t._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.ClearCart):(t._SessionManager.resetSessionTimer(),s=t._Persistence.getAllUserProductsFromLS(),s&&s[e]&&s[e].cp&&(s[e].cp=[],s[e].cp=[],t._Persistence.setCartProducts(s)));},/**
             * Returns all cart products
             * @method getCartProducts
             * @return {Array} array of cart products
             * @deprecated
             */getCartProducts:function getCartProducts(){return t.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().getCartProducts() will be removed in future releases"),t._Persistence.getCartProducts(e)}}},this.parseIdentityResponse=function(r,i,n,o,a){var d,g,l,u=t.Identity.getCurrentUser(),p={},c=u?u.getUserIdentities().userIdentities:{};for(var y in c)p[Types.IdentityType.getIdentityType(y)]=c[y];var I={};t._Store.identityCallInFlight=!1;try{if(t.Logger.verbose("Parsing \""+a+"\" identity response from server"),r.responseText&&(g=JSON.parse(r.responseText),s.sendUserIdentityChange(o,a,g.mpid),g.hasOwnProperty("is_logged_in")&&(t._Store.isLoggedIn=g.is_logged_in)),200===r.status){if("modify"===a)I=t._Identity.IdentityRequest.modifyUserIdentities(p,o.userIdentities),t._Persistence.saveUserIdentitiesToCookies(u.getMPID(),I);else{//if there is any previous migration data
if(g=JSON.parse(r.responseText),t.Logger.verbose("Successfully parsed Identity Response"),(!u||u.getMPID()&&g.mpid&&g.mpid!==u.getMPID())&&(t._Store.mpid=g.mpid,u&&t._Persistence.setLastSeenTime(i),t._Persistence.setFirstSeenTime(g.mpid)),"identify"==a&&u&&g.mpid===u.getMPID()&&t._Persistence.setFirstSeenTime(g.mpid),l=t._Store.currentSessionMPIDs.indexOf(g.mpid),t._Store.sessionId&&g.mpid&&i!==g.mpid&&0>l&&t._Store.currentSessionMPIDs.push(g.mpid),-1<l&&(t._Store.currentSessionMPIDs=t._Store.currentSessionMPIDs.slice(0,l).concat(t._Store.currentSessionMPIDs.slice(l+1,t._Store.currentSessionMPIDs.length)),t._Store.currentSessionMPIDs.push(g.mpid)),t._Persistence.saveUserIdentitiesToCookies(g.mpid,I),t._CookieSyncManager.attemptCookieSync(i,g.mpid),s.checkIdentitySwap(i,g.mpid,t._Store.currentSessionMPIDs),Object.keys(t._Store.migrationData).length){I=t._Store.migrationData.userIdentities||{};var _=t._Store.migrationData.userAttributes||{};t._Persistence.saveUserAttributesToCookies(g.mpid,_);}else o&&o.userIdentities&&Object.keys(o.userIdentities).length&&(I=t._Identity.IdentityRequest.modifyUserIdentities(p,o.userIdentities));t._Persistence.saveUserIdentitiesToCookies(g.mpid,I),t._Persistence.update(),t._Persistence.findPrevCookiesBasedOnUI(o),t._Store.context=g.context||t._Store.context;}if(d=t.Identity.getCurrentUser(),o&&o.onUserAlias&&t._Helpers.Validators.isFunction(o.onUserAlias))try{t.Logger.warning("Deprecated function onUserAlias will be removed in future releases"),o.onUserAlias(u,d);}catch(s){t.Logger.error("There was an error with your onUserAlias function - "+s);}var v=t._Persistence.getCookie()||t._Persistence.getLocalStorage();d&&(t._Persistence.storeDataInMemory(v,d.getMPID()),(!u||d.getMPID()!==u.getMPID()||u.isLoggedIn()!==d.isLoggedIn())&&t._Forwarders.initForwarders(d.getUserIdentities().userIdentities,t._APIClient.prepareForwardingStats),t._Forwarders.setForwarderUserIdentities(d.getUserIdentities().userIdentities),t._Forwarders.setForwarderOnIdentityComplete(d,a),t._Forwarders.setForwarderOnUserIdentified(d,a)),t._APIClient.processQueuedEvents();}n?0===r.status?t._Helpers.invokeCallback(n,HTTPCodes$1.noHttpCoverage,g||null,d):t._Helpers.invokeCallback(n,r.status,g||null,d):g&&g.errors&&g.errors.length&&t.Logger.error("Received HTTP response code of "+r.status+" - "+g.errors[0].message);}catch(s){n&&t._Helpers.invokeCallback(n,r.status,g||null),t.Logger.error("Error parsing JSON response from Identity server: "+s);}},this.sendUserIdentityChange=function(e,r,i){var n,o,a;if(t._APIClient.shouldEnableBatching()&&(i||"modify"===r)){n="modify"===r?this.IdentityAPI.getCurrentUser():this.IdentityAPI.getUser(i);var d=e.userIdentities;// if there is not a user in memory with this mpid, then it is a new user, and we send a user identity
// change for each identity on the identity api request
if(n)o=n.getUserIdentities()?n.getUserIdentities().userIdentities:{};else{for(var g in d)a=this.createUserIdentityChange(g,d[g],null,!0),t._APIClient.sendEventToServer(a);return}for(g in d)if(o[g]!==d[g]){var l=!o[g];a=s.createUserIdentityChange(g,d[g],o[g],l),t._APIClient.sendEventToServer(a);}}},this.createUserIdentityChange=function(e,s,r,i){var n;return n=t._ServerModel.createEventObject({messageType:Types.MessageType.UserIdentityChange,userIdentityChanges:{New:{IdentityType:e,Identity:s,CreatedThisBatch:i},Old:{IdentityType:e,Identity:r,CreatedThisBatch:!1}}}),n},this.sendUserAttributeChangeEvent=function(e,r,i,n,o){if(t._APIClient.shouldEnableBatching()){var a=s.createUserAttributeChange(e,r,i,n,o);a&&t._APIClient.sendEventToServer(a);}},this.createUserAttributeChange=function(e,s,r,i,n){r||(r=null);var o;return s!==r&&(o=t._ServerModel.createEventObject({messageType:Types.MessageType.UserAttributeChange,userAttributeChanges:{UserAttributeName:e,New:s,Old:r||null,Deleted:n,IsNewAttribute:i}})),o};}

function Consent(a){var b=this,c="data_sale_opt_out";this.createPrivacyConsent=function(b,c,d,e,f){return "boolean"==typeof b?c&&isNaN(c)?(a.Logger.error("Timestamp must be a valid number when constructing a Consent object."),null):d&&"string"!=typeof d?(a.Logger.error("Document must be a valid string when constructing a Consent object."),null):e&&"string"!=typeof e?(a.Logger.error("Location must be a valid string when constructing a Consent object."),null):f&&"string"!=typeof f?(a.Logger.error("Hardware ID must be a valid string when constructing a Consent object."),null):{Consented:b,Timestamp:c||Date.now(),ConsentDocument:d,Location:e,HardwareId:f}:(a.Logger.error("Consented boolean is required when constructing a Consent object."),null)},this.ConsentSerialization={toMinifiedJsonObject:function toMinifiedJsonObject(a){var b={};if(a){var d=a.getGDPRConsentState();if(d)for(var e in b.gdpr={},d)if(d.hasOwnProperty(e)){var f=d[e];b.gdpr[e]={},"boolean"==typeof f.Consented&&(b.gdpr[e].c=f.Consented),"number"==typeof f.Timestamp&&(b.gdpr[e].ts=f.Timestamp),"string"==typeof f.ConsentDocument&&(b.gdpr[e].d=f.ConsentDocument),"string"==typeof f.Location&&(b.gdpr[e].l=f.Location),"string"==typeof f.HardwareId&&(b.gdpr[e].h=f.HardwareId);}var g=a.getCCPAConsentState();g&&(b.ccpa={},b.ccpa[c]={},"boolean"==typeof g.Consented&&(b.ccpa[c].c=g.Consented),"number"==typeof g.Timestamp&&(b.ccpa[c].ts=g.Timestamp),"string"==typeof g.ConsentDocument&&(b.ccpa[c].d=g.ConsentDocument),"string"==typeof g.Location&&(b.ccpa[c].l=g.Location),"string"==typeof g.HardwareId&&(b.ccpa[c].h=g.HardwareId));}return b},fromMinifiedJsonObject:function fromMinifiedJsonObject(a){var d=b.createConsentState();if(a.gdpr)for(var e in a.gdpr)if(a.gdpr.hasOwnProperty(e)){var f=b.createPrivacyConsent(a.gdpr[e].c,a.gdpr[e].ts,a.gdpr[e].d,a.gdpr[e].l,a.gdpr[e].h);d.addGDPRConsentState(e,f);}if(a.ccpa&&a.ccpa.hasOwnProperty(c)){var g=b.createPrivacyConsent(a.ccpa[c].c,a.ccpa[c].ts,a.ccpa[c].d,a.ccpa[c].l,a.ccpa[c].h);d.setCCPAConsentState(g);}return d}},this.createConsentState=function(d){function e(a){if("string"!=typeof a)return null;var b=a.trim();return b.length?b.toLowerCase():null}function f(b){if(!b)k={};else if(a._Helpers.isObject(b))for(var c in k={},b)b.hasOwnProperty(c)&&g(c,b[c]);return this}function g(c,d){var f=e(c);if(!f)return a.Logger.error("Purpose must be a string."),this;if(!a._Helpers.isObject(d))return a.Logger.error("Invoked with a bad or empty consent object."),this;var g=b.createPrivacyConsent(d.Consented,d.Timestamp,d.ConsentDocument,d.Location,d.HardwareId);return g&&(k[f]=g),this}function h(a){var b=e(a);return b?(delete k[b],this):this}function i(){return a._Helpers.extend({},k)}function j(d){if(!a._Helpers.isObject(d))return a.Logger.error("Invoked with a bad or empty CCPA consent object."),this;var e=b.createPrivacyConsent(d.Consented,d.Timestamp,d.ConsentDocument,d.Location,d.HardwareId);return e&&(l[c]=e),this}var k={},l={};return d&&(f(d.getGDPRConsentState()),j(d.getCCPAConsentState())),{setGDPRConsentState:f,addGDPRConsentState:g,setCCPAConsentState:j,getCCPAConsentState:function(){return l[c]},getGDPRConsentState:i,removeGDPRConsentState:h,removeCCPAState:function(){return delete l[c],this}}};}

var Messages$8=Constants.Messages,HTTPCodes$2=Constants.HTTPCodes;/**
 * Invoke these methods on the mParticle object.
 * Example: mParticle.endSession()
 *
 * @class mParticleInstance
 */function mParticleInstance(a){var b=this;// These classes are for internal use only. Not documented for public consumption
// required for forwarders once they reference the mparticle instance
/**
     * Initializes the mParticle SDK
     *
     * @method init
     * @param {String} apiKey your mParticle assigned API key
     * @param {Object} [options] an options object for additional configuration
     */ /**
     * Returns the mParticle SDK version number
     * @method getVersion
     * @return {String} mParticle SDK version number
     */ /**
     * Sets the app version
     * @method setAppVersion
     * @param {String} version version number
     */ /**
     * Gets the app name
     * @method getAppName
     * @return {String} App name
     */ /**
     * Sets the app name
     * @method setAppName
     * @param {String} name App Name
     */ /**
     * Gets the app version
     * @method getAppVersion
     * @return {String} App version
     */ /**
     * Stops tracking the location of the user
     * @method stopTrackingLocation
     */ /**
     * Starts tracking the location of the user
     * @method startTrackingLocation
     * @param {Function} [callback] A callback function that is called when the location is either allowed or rejected by the user. A position object of schema {coords: {latitude: number, longitude: number}} is passed to the callback
     */ /**
     * Sets the position of the user
     * @method setPosition
     * @param {Number} lattitude lattitude digit
     * @param {Number} longitude longitude digit
     */ /**
     * Starts a new session
     * @method startNewSession
     */ /**
     * Ends the current session
     * @method endSession
     */ /**
     * Logs a Base Event to mParticle's servers
     * @param {Object} event Base Event Object
     */ /**
     * Logs an event to mParticle's servers
     * @method logEvent
     * @param {String} eventName The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/web/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     * @param {Object} [customFlags] Additional customFlags
     */ /**
     * Used to log custom errors
     *
     * @method logError
     * @param {String or Object} error The name of the error (string), or an object formed as follows {name: 'exampleName', message: 'exampleMessage', stack: 'exampleStack'}
     * @param {Object} [attrs] Custom attrs to be passed along with the error event; values must be string, number, or boolean
     */ /**
     * Logs `click` events
     * @method logLink
     * @param {String} selector The selector to add a 'click' event to (ex. #purchase-event)
     * @param {String} [eventName] The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/javascript/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     */ /**
     * Logs `submit` events
     * @method logForm
     * @param {String} selector The selector to add the event handler to (ex. #search-event)
     * @param {String} [eventName] The name of the event
     * @param {Number} [eventType] The eventType as seen [here](http://docs.mparticle.com/developers/sdk/javascript/event-tracking#event-type)
     * @param {Object} [eventInfo] Attributes for the event
     */ /**
     * Logs a page view
     * @method logPageView
     * @param {String} eventName The name of the event. Defaults to 'PageView'.
     * @param {Object} [attrs] Attributes for the event
     * @param {Object} [customFlags] Custom flags for the event
     */ /**
     * Invoke these methods on the mParticle.eCommerce object.
     * Example: mParticle.eCommerce.createImpresion(...)
     * @class mParticle.eCommerce
     */ /**
     * Sets a session attribute
     * @for mParticle
     * @method setSessionAttribute
     * @param {String} key key for session attribute
     * @param {String or Number} value value for session attribute
     */ /**
     * Set opt out of logging
     * @for mParticle
     * @method setOptOut
     * @param {Boolean} isOptingOut boolean to opt out or not. When set to true, opt out of logging.
     */ /**
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
     */ /**
     * Get integration attributes for a given integration ID.
     * @method getIntegrationAttributes
     * @param {Number} integrationId mParticle integration ID
     * @return {Object} an object map of the integrationId's attributes
     */this._instanceName=a,this._NativeSdkHelpers=new NativeSdkHelpers(this),this._Migrations=new Migrations(this),this._SessionManager=new SessionManager(this),this._Persistence=new _Persistence(this),this._Helpers=new Helpers(this),this._Forwarders=new Forwarders(this),this._APIClient=new APIClient(this),this._Events=new Events(this),this._CookieSyncManager=new cookieSyncManager(this),this._ServerModel=new ServerModel(this),this._Ecommerce=new Ecommerce(this),this._ForwardingStatsUploader=new forwardingStatsUploader(this),this._Consent=new Consent(this),this._preInit={readyQueue:[],integrationDelays:{},forwarderConstructors:[]},this.IdentityType=Types.IdentityType,this.EventType=Types.EventType,this.CommerceEventType=Types.CommerceEventType,this.PromotionType=Types.PromotionActionType,this.ProductActionType=Types.ProductActionType,this._Identity=new Identity(this),this.Identity=this._Identity.IdentityAPI,this.generateHash=this._Helpers.generateHash,this.getDeviceId=this._Persistence.getDeviceId,window.mParticle&&window.mParticle.config&&window.mParticle.config.hasOwnProperty("rq")&&(this._preInit.readyQueue=window.mParticle.config.rq),this.init=function(a,c){// config code - Fetch config when requestConfig = true, otherwise, proceed with SDKInitialization
// Since fetching the configuration is asynchronous, we must pass completeSDKInitialization
// to it for it to be run after fetched
return c||window.console.warn("You did not pass a config object to init(). mParticle will not initialize properly"),runPreConfigFetchInitialization(this,a,c),c?void(!c.hasOwnProperty("requestConfig")||c.requestConfig?b._APIClient.getSDKConfiguration(a,c,completeSDKInitialization,this):completeSDKInitialization(a,c,this)):void window.console.error("No config available on the window, please pass a config object to mParticle.init()")},this.setLogLevel=function(a){b.Logger.setLogLevel(a);},this.reset=function(a,b,c){c._Store&&delete c._Store,c._Store=new Store(a,c),c._Store.isLocalStorageAvailable=c._Persistence.determineLocalStorageAvailability(window.localStorage),c._Events.stopTracking(),b||c._Persistence.reset_Persistence(),c._Persistence.forwardingStatsBatches.uploadsTable={},c._Persistence.forwardingStatsBatches.forwardingStatsEventQueue=[],c._preInit={readyQueue:[],pixelConfigurations:[],integrationDelays:{},forwarderConstructors:[],isDevelopmentMode:!1};},this.ready=function(a){b._Store.isInitialized&&"function"==typeof a?a():b._preInit.readyQueue.push(a);},this.getVersion=function(){return Constants.sdkVersion},this.setAppVersion=function(a){b._Store.SDKConfig.appVersion=a,b._Persistence.update();},this.getAppName=function(){return b._Store.SDKConfig.appName},this.setAppName=function(a){b._Store.SDKConfig.appName=a;},this.getAppVersion=function(){return b._Store.SDKConfig.appVersion},this.stopTrackingLocation=function(){b._SessionManager.resetSessionTimer(),b._Events.stopTracking();},this.startTrackingLocation=function(a){b._Helpers.Validators.isFunction(a)||b.Logger.warning("Warning: Location tracking is triggered, but not including a callback into the `startTrackingLocation` may result in events logged too quickly and not being associated with a location."),b._SessionManager.resetSessionTimer(),b._Events.startTracking(a);},this.setPosition=function(a,c){b._SessionManager.resetSessionTimer(),"number"==typeof a&&"number"==typeof c?b._Store.currentPosition={lat:a,lng:c}:b.Logger.error("Position latitude and/or longitude must both be of type number");},this.startNewSession=function(){b._SessionManager.startNewSession();},this.endSession=function(){// Sends true as an over ride vs when endSession is called from the setInterval
b._SessionManager.endSession(!0);},this.logBaseEvent=function(a){return b._Store.isInitialized?(b._SessionManager.resetSessionTimer(),"string"!=typeof a.name)?void b.Logger.error(Messages$8.ErrorMessages.EventNameInvalidType):(a.eventType||(a.eventType=Types.EventType.Unknown),b._Helpers.canLog()?void b._Events.logEvent(a):void b.Logger.error(Messages$8.ErrorMessages.LoggingDisabled)):void b.ready(function(){b.logBaseEvent(a);})},this.logEvent=function(a,c,d,e){return b._Store.isInitialized?(b._SessionManager.resetSessionTimer(),"string"!=typeof a)?void b.Logger.error(Messages$8.ErrorMessages.EventNameInvalidType):(c||(c=Types.EventType.Unknown),b._Helpers.isEventType(c)?b._Helpers.canLog()?void b._Events.logEvent({messageType:Types.MessageType.PageEvent,name:a,data:d,eventType:c,customFlags:e}):void b.Logger.error(Messages$8.ErrorMessages.LoggingDisabled):void b.Logger.error("Invalid event type: "+c+", must be one of: \n"+JSON.stringify(Types.EventType))):void b.ready(function(){b.logEvent(a,c,d,e);})},this.logError=function(a,c){if(!b._Store.isInitialized)return void b.ready(function(){b.logError(a,c);});if(b._SessionManager.resetSessionTimer(),!!a){"string"==typeof a&&(a={message:a});var d={m:a.message?a.message:a,s:"Error",t:a.stack};if(c){var e=b._Helpers.sanitizeAttributes(c);for(var f in e)d[f]=e[f];}b._Events.logEvent({messageType:Types.MessageType.CrashReport,name:a.name?a.name:"Error",data:d,eventType:Types.EventType.Other});}},this.logLink=function(a,c,d,e){b._Events.addEventHandler("click",a,c,e,d);},this.logForm=function(a,c,d,e){b._Events.addEventHandler("submit",a,c,e,d);},this.logPageView=function(a,c,d){if(!b._Store.isInitialized)return void b.ready(function(){b.logPageView(a,c,d);});if(b._SessionManager.resetSessionTimer(),b._Helpers.canLog()){if(b._Helpers.Validators.isStringOrNumber(a)||(a="PageView"),!c)c={hostname:window.location.hostname,title:window.document.title};else if(!b._Helpers.isObject(c))return void b.Logger.error("The attributes argument must be an object. A "+_typeof_1(c)+" was entered. Please correct and retry.");if(d&&!b._Helpers.isObject(d))return void b.Logger.error("The customFlags argument must be an object. A "+_typeof_1(d)+" was entered. Please correct and retry.")}b._Events.logEvent({messageType:Types.MessageType.PageView,name:a,data:c,eventType:Types.EventType.Unknown,customFlags:d});},this.Consent={createCCPAConsent:b._Consent.createPrivacyConsent,createGDPRConsent:b._Consent.createPrivacyConsent,createConsentState:b._Consent.createConsentState},this.eCommerce={/**
         * Invoke these methods on the mParticle.eCommerce.Cart object.
         * Example: mParticle.eCommerce.Cart.add(...)
         * @class mParticle.eCommerce.Cart
         */Cart:{/**
             * Adds a product to the cart
             * @method add
             * @param {Object} product The product you want to add to the cart
             * @param {Boolean} [logEventBoolean] Option to log the event to mParticle's servers. If blank, no logging occurs.
             * @deprecated
             */add:function add(a,c){b.Logger.warning("Deprecated function eCommerce.Cart.add() will be removed in future releases");var d,e=b.Identity.getCurrentUser();e&&(d=e.getMPID()),b._Identity.mParticleUserCart(d).add(a,c);},/**
             * Removes a product from the cart
             * @method remove
             * @param {Object} product The product you want to add to the cart
             * @param {Boolean} [logEventBoolean] Option to log the event to mParticle's servers. If blank, no logging occurs.
             * @deprecated
             */remove:function remove(a,c){b.Logger.warning("Deprecated function eCommerce.Cart.remove() will be removed in future releases");var d,e=b.Identity.getCurrentUser();e&&(d=e.getMPID()),b._Identity.mParticleUserCart(d).remove(a,c);},/**
             * Clears the cart
             * @method clear
             * @deprecated
             */clear:function clear(){b.Logger.warning("Deprecated function eCommerce.Cart.clear() will be removed in future releases");var a,c=b.Identity.getCurrentUser();c&&(a=c.getMPID()),b._Identity.mParticleUserCart(a).clear();}},/**
         * Sets the currency code
         * @for mParticle.eCommerce
         * @method setCurrencyCode
         * @param {String} code The currency code
         */setCurrencyCode:function setCurrencyCode(a){return b._Store.isInitialized?"string"==typeof a?void(b._SessionManager.resetSessionTimer(),b._Store.currencyCode=a):void b.Logger.error("Code must be a string"):void b.ready(function(){b.setCurrencyCode(a);})},/**
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
         */createProduct:function createProduct(a,c,d,e,f,g,h,i,j,k){return b._Ecommerce.createProduct(a,c,d,e,f,g,h,i,j,k)},/**
         * Creates a promotion
         * @for mParticle.eCommerce
         * @method createPromotion
         * @param {String} id a unique promotion id
         * @param {String} [creative] promotion creative
         * @param {String} [name] promotion name
         * @param {Number} [position] promotion position
         */createPromotion:function createPromotion(a,c,d,e){return b._Ecommerce.createPromotion(a,c,d,e)},/**
         * Creates a product impression
         * @for mParticle.eCommerce
         * @method createImpression
         * @param {String} name impression name
         * @param {Object} product the product for which an impression is being created
         */createImpression:function createImpression(a,c){return b._Ecommerce.createImpression(a,c)},/**
         * Creates a transaction attributes object to be used with a checkout
         * @for mParticle.eCommerce
         * @method createTransactionAttributes
         * @param {String or Number} id a unique transaction id
         * @param {String} [affiliation] affilliation
         * @param {String} [couponCode] the coupon code for which you are creating transaction attributes
         * @param {Number} [revenue] total revenue for the product being purchased
         * @param {String} [shipping] the shipping method
         * @param {Number} [tax] the tax amount
         */createTransactionAttributes:function createTransactionAttributes(a,c,d,e,f,g){return b._Ecommerce.createTransactionAttributes(a,c,d,e,f,g)},/**
         * Logs a checkout action
         * @for mParticle.eCommerce
         * @method logCheckout
         * @param {Number} step checkout step number
         * @param {Object} options
         * @param {Object} attrs
         * @param {Object} [customFlags] Custom flags for the event
         */logCheckout:function logCheckout(a,c,d,e){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Events.logCheckoutEvent(a,c,d,e)):void b.ready(function(){b.eCommerce.logCheckout(a,c,d,e);})},/**
         * Logs a product action
         * @for mParticle.eCommerce
         * @method logProductAction
         * @param {Number} productActionType product action type as found [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/src/types.js#L206-L218)
         * @param {Object} product the product for which you are creating the product action
         * @param {Object} [attrs] attributes related to the product action
         * @param {Object} [customFlags] Custom flags for the event
         */logProductAction:function logProductAction(a,c,d,e){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Events.logProductActionEvent(a,c,d,e)):void b.ready(function(){b.eCommerce.logProductAction(a,c,d,e);})},/**
         * Logs a product purchase
         * @for mParticle.eCommerce
         * @method logPurchase
         * @param {Object} transactionAttributes transactionAttributes object
         * @param {Object} product the product being purchased
         * @param {Boolean} [clearCart] boolean to clear the cart after logging or not. Defaults to false
         * @param {Object} [attrs] other attributes related to the product purchase
         * @param {Object} [customFlags] Custom flags for the event
         */logPurchase:function logPurchase(a,c,d,e,f){return b._Store.isInitialized?a&&c?void(b._SessionManager.resetSessionTimer(),b._Events.logPurchaseEvent(a,c,e,f)):void b.Logger.error(Messages$8.ErrorMessages.BadLogPurchase):void b.ready(function(){b.eCommerce.logPurchase(a,c,d,e,f);})},/**
         * Logs a product promotion
         * @for mParticle.eCommerce
         * @method logPromotion
         * @param {Number} type the promotion type as found [here](https://github.com/mParticle/mparticle-sdk-javascript/blob/master-v2/src/types.js#L275-L279)
         * @param {Object} promotion promotion object
         * @param {Object} [attrs] boolean to clear the cart after logging or not
         * @param {Object} [customFlags] Custom flags for the event
         */logPromotion:function logPromotion(a,c,d,e){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Events.logPromotionEvent(a,c,d,e)):void b.ready(function(){b.eCommerce.logPromotion(a,c,d,e);})},/**
         * Logs a product impression
         * @for mParticle.eCommerce
         * @method logImpression
         * @param {Object} impression product impression object
         * @param {Object} attrs attributes related to the impression log
         * @param {Object} [customFlags] Custom flags for the event
         */logImpression:function logImpression(a,c,d){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Events.logImpressionEvent(a,c,d)):void b.ready(function(){b.eCommerce.logImpression(a,c,d);})},/**
         * Logs a refund
         * @for mParticle.eCommerce
         * @method logRefund
         * @param {Object} transactionAttributes transaction attributes related to the refund
         * @param {Object} product product being refunded
         * @param {Boolean} [clearCart] boolean to clear the cart after refund is logged. Defaults to false.
         * @param {Object} [attrs] attributes related to the refund
         * @param {Object} [customFlags] Custom flags for the event
         */logRefund:function logRefund(a,c,d,e,f){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Events.logRefundEvent(a,c,e,f)):void b.ready(function(){b.eCommerce.logRefund(a,c,d,e,f);})},expandCommerceEvent:function expandCommerceEvent(a){return b._Ecommerce.expandCommerceEvent(a)}},this.setSessionAttribute=function(a,c){if(!b._Store.isInitialized)return void b.ready(function(){b.setSessionAttribute(a,c);});// Logs to cookie
// And logs to in-memory object
// Example: mParticle.setSessionAttribute('location', '33431');
if(b._Helpers.canLog()){if(!b._Helpers.Validators.isValidAttributeValue(c))return void b.Logger.error(Messages$8.ErrorMessages.BadAttribute);if(!b._Helpers.Validators.isValidKeyValue(a))return void b.Logger.error(Messages$8.ErrorMessages.BadKey);if(b._Store.webviewBridgeEnabled)b._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:a,value:c}));else{var d=b._Helpers.findKeyInObject(b._Store.sessionAttributes,a);d&&(a=d),b._Store.sessionAttributes[a]=c,b._Persistence.update(),b._Forwarders.applyToForwarders("setSessionAttribute",[a,c]);}}},this.setOptOut=function(a){return b._Store.isInitialized?void(b._SessionManager.resetSessionTimer(),b._Store.isEnabled=!a,b._Events.logOptOut(),b._Persistence.update(),b._Store.activeForwarders.length&&b._Store.activeForwarders.forEach(function(c){if(c.setOptOut){var d=c.setOptOut(a);d&&b.Logger.verbose(d);}})):void b.ready(function(){b.setOptOut(a);})},this.setIntegrationAttribute=function(a,c){if(!b._Store.isInitialized)return void b.ready(function(){b.setIntegrationAttribute(a,c);});if("number"!=typeof a)return void b.Logger.error("integrationId must be a number");if(null===c)b._Store.integrationAttributes[a]={};else{if(!b._Helpers.isObject(c))return void b.Logger.error("Attrs must be an object with keys and values. You entered a "+_typeof_1(c));if(0===Object.keys(c).length)b._Store.integrationAttributes[a]={};else for(var d in c)if("string"!=typeof d){b.Logger.error("Keys must be strings, you entered a "+_typeof_1(d));continue}else if("string"==typeof c[d])b._Helpers.isObject(b._Store.integrationAttributes[a])?b._Store.integrationAttributes[a][d]=c[d]:(b._Store.integrationAttributes[a]={},b._Store.integrationAttributes[a][d]=c[d]);else{b.Logger.error("Values for integration attributes must be strings. You entered a "+_typeof_1(c[d]));continue}}b._Persistence.update();},this.getIntegrationAttributes=function(a){return b._Store.integrationAttributes[a]?b._Store.integrationAttributes[a]:{}},this.addForwarder=function(a){b._preInit.forwarderConstructors.push(a);},this.configurePixel=function(a){b._Forwarders.configurePixel(a);},this._getActiveForwarders=function(){return b._Store.activeForwarders},this._getIntegrationDelays=function(){return b._preInit.integrationDelays},this._setIntegrationDelay=function(a,c){b._preInit.integrationDelays[a]=c;};}function completeSDKInitialization(a,b,c){if(b.flags&&(b.flags.hasOwnProperty(Constants.FeatureFlags.EventsV3)&&(c._Store.SDKConfig.flags[Constants.FeatureFlags.EventsV3]=b.flags[Constants.FeatureFlags.EventsV3]),b.flags.hasOwnProperty(Constants.FeatureFlags.EventBatchingIntervalMillis)&&(c._Store.SDKConfig.flags[Constants.FeatureFlags.EventBatchingIntervalMillis]=b.flags[Constants.FeatureFlags.EventBatchingIntervalMillis])),c._Store.storageName=c._Helpers.createMainStorageName(b.workspaceToken),c._Store.prodStorageName=c._Helpers.createProductStorageName(b.workspaceToken),b.hasOwnProperty("workspaceToken")?c._Store.SDKConfig.workspaceToken=b.workspaceToken:c.Logger.warning("You should have a workspaceToken on your config object for security purposes."),b.hasOwnProperty("requiredWebviewBridgeName")?c._Store.SDKConfig.requiredWebviewBridgeName=b.requiredWebviewBridgeName:b.hasOwnProperty("workspaceToken")&&(c._Store.SDKConfig.requiredWebviewBridgeName=b.workspaceToken),c._Store.webviewBridgeEnabled=c._NativeSdkHelpers.isWebviewEnabled(c._Store.SDKConfig.requiredWebviewBridgeName,c._Store.SDKConfig.minWebviewBridgeVersion),c._Store.configurationLoaded=!0,c._Store.webviewBridgeEnabled||(c._Migrations.migrate(),c._Persistence.initializeStorage()),c._Store.webviewBridgeEnabled)c._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:"$src_env",value:"webview"})),a&&c._NativeSdkHelpers.sendToNative(Constants.NativeSdkPaths.SetSessionAttribute,JSON.stringify({key:"$src_key",value:a}));else{var d;// If no initialIdentityRequest is passed in, we set the user identities to what is currently in cookies for the identify request
if(c._Helpers.isObject(c._Store.SDKConfig.identifyRequest)&&c._Helpers.isObject(c._Store.SDKConfig.identifyRequest.userIdentities)&&0===Object.keys(c._Store.SDKConfig.identifyRequest.userIdentities).length||!c._Store.SDKConfig.identifyRequest){var e={};if(d=c.Identity.getCurrentUser(),d){var f=d.getUserIdentities().userIdentities||{};for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);}c._Store.SDKConfig.identifyRequest={userIdentities:e};}// If migrating from pre-IDSync to IDSync, a sessionID will exist and an identify request will not have been fired, so we need this check
c._Store.migratingToIDSyncCookies&&(c.Identity.identify(c._Store.SDKConfig.identifyRequest,c._Store.SDKConfig.identityCallback),c._Store.migratingToIDSyncCookies=!1),d=c.Identity.getCurrentUser(),c._Helpers.getFeatureFlag(Constants.FeatureFlags.ReportBatching)&&c._ForwardingStatsUploader.startForwardingStatsTimer(),c._Forwarders.processForwarders(b,c._APIClient.prepareForwardingStats),!c._Store.identifyCalled&&c._Store.SDKConfig.identityCallback&&d&&d.getMPID()&&c._Store.SDKConfig.identityCallback({httpCode:HTTPCodes$2.activeSession,getUser:function getUser(){return c._Identity.mParticleUser(d.getMPID())},getPreviousUser:function getPreviousUser(){var a=c.Identity.getUsers(),b=a.shift();return b&&d&&b.getMPID()===d.getMPID()&&(b=a.shift()),b||null},body:{mpid:d.getMPID(),is_logged_in:c._Store.isLoggedIn,matched_identities:d.getUserIdentities().userIdentities,context:null,is_ephemeral:!1}}),c._SessionManager.initialize(),c._Events.logAST();}c._Store.isInitialized=!0,c._preInit.readyQueue&&c._preInit.readyQueue.length&&(c._preInit.readyQueue.forEach(function(a){c._Helpers.Validators.isFunction(a)?a():Array.isArray(a)&&processPreloadedItem(a,c);}),c._preInit.readyQueue=[]),c._Store.isFirstRun&&(c._Store.isFirstRun=!1);}function runPreConfigFetchInitialization(a,b,c){a.Logger=new Logger(c),a._Store=new Store(c,a),window.mParticle.Store=a._Store,a._Store.devToken=b||null,a.Logger.verbose(Messages$8.InformationMessages.StartingInitialization);//check to see if localStorage is available for migrating purposes
try{a._Store.isLocalStorageAvailable=a._Persistence.determineLocalStorageAvailability(window.localStorage);}catch(b){a.Loger.warning("localStorage is not available, using cookies if avaialble"),a._Store.isLocalStorageAvailable=!1;}}function processPreloadedItem(a,b){var c=a,d=c.splice(0,1)[0];// if the first argument is a method on the base mParticle object, run it
if(mParticle[c[0]])mParticle[d].apply(this,c);else{var e=d.split(".");try{for(var f,g=mParticle,h=0;h<e.length;h++)f=e[h],g=g[f];g.apply(this,c);}catch(a){b.Logger.verbose("Unable to compute proper mParticle function "+a);}}}

var _BatchValidator = /*#__PURE__*/ function () {
    function a() { classCallCheck(this, a); }
    return createClass(a, [{ key: "getMPInstance", value: function getMPInstance() {
                return {
                    _Helpers: { sanitizeAttributes: window.mParticle.getInstance()._Helpers.sanitizeAttributes, generateUniqueId: function generateUniqueId() { return "mockId"; }, extend: window.mParticle.getInstance()._Helpers.extend }, _Store: { sessionId: "mockSessionId", SDKConfig: {} }, Identity: { getCurrentUser: function getCurrentUser() { return null; } }, getAppVersion: function getAppVersion() { return null; }, getAppName: function getAppName() { return null; }
                };
            } }, { key: "returnBatch", value: function returnBatch(a) { var b = this.getMPInstance(), c = new ServerModel(b).createEventObject(a), d = convertEvents("0", [c], b); return d; } }]), a;
}();

Array.prototype.forEach||(Array.prototype.forEach=Polyfill.forEach),Array.prototype.map||(Array.prototype.map=Polyfill.map),Array.prototype.filter||(Array.prototype.filter=Polyfill.filter),Array.isArray||(Array.prototype.isArray=Polyfill.isArray);function mParticle$1(){var a=this;// Only leaving this here in case any clients are trying to access mParticle.Store, to prevent from throwing
this.Store={},this._instances={},this.IdentityType=Types.IdentityType,this.EventType=Types.EventType,this.CommerceEventType=Types.CommerceEventType,this.PromotionType=Types.PromotionActionType,this.ProductActionType=Types.ProductActionType,this.isIOS=!!(window.mParticle&&window.mParticle.isIOS)&&window.mParticle.isIOS,this.config=window.mParticle&&window.mParticle.config?window.mParticle.config:{},this.init=function(b,c,d){!c&&window.mParticle&&window.mParticle.config&&(window.console.warn("You did not pass a config object to mParticle.init(). Attempting to use the window.mParticle.config if it exists. Please note that in a future release, this may not work and mParticle will not initialize properly"),c=window.mParticle?window.mParticle.config:{}),d=(d&&0!==d.length?d:Constants.DefaultInstance).toLowerCase();var e=a._instances[d];e===void 0&&(e=new mParticleInstance(b,c,d),a._instances[d]=e),e.init(b,c,d);},this.getInstance=function(b){var c;return b?(c=a._instances[b.toLowerCase()],c?c:(console.log("You tried to initialize an instance named "+b+". This instance does not exist. Check your instance name or initialize a new instance with this name before calling it."),null)):(b=Constants.DefaultInstance,c=a._instances[b],c||(c=new mParticleInstance(b),a._instances[Constants.DefaultInstance]=c),c)},this.getDeviceId=function(){return a.getInstance().getDeviceId()},this.startNewSession=function(){a.getInstance().startNewSession();},this.endSession=function(){a.getInstance().endSession();},this.setLogLevel=function(b){a.getInstance().setLogLevel(b);},this.ready=function(b){a.getInstance().ready(b);},this.setAppVersion=function(b){a.getInstance().setAppVersion(b);},this.getAppName=function(){return a.getInstance().getAppName()},this.setAppName=function(b){a.getInstance().setAppName(b);},this.getAppVersion=function(){return a.getInstance().getAppVersion()},this.stopTrackingLocation=function(){a.getInstance().stopTrackingLocation();},this.startTrackingLocation=function(b){a.getInstance().startTrackingLocation(b);},this.setPosition=function(b,c){a.getInstance().setPosition(b,c);},this.startNewSession=function(){a.getInstance().startNewSession();},this.endSession=function(){a.getInstance().endSession();},this.logBaseEvent=function(b){a.getInstance().logBaseEvent(b);},this.logEvent=function(b,c,d,e){a.getInstance().logEvent(b,c,d,e);},this.logError=function(b,c){a.getInstance().logError(b,c);},this.logLink=function(b,c,d,e){a.getInstance().logLink(b,c,d,e);},this.logForm=function(b,c,d,e){a.getInstance().logForm(b,c,d,e);},this.logPageView=function(b,c,d){a.getInstance().logPageView(b,c,d);},this.eCommerce={Cart:{add:function add(b,c){a.getInstance().eCommerce.Cart.add(b,c);},remove:function remove(b,c){a.getInstance().eCommerce.Cart.remove(b,c);},clear:function clear(){a.getInstance().eCommerce.Cart.clear();}},setCurrencyCode:function setCurrencyCode(b){a.getInstance().eCommerce.setCurrencyCode(b);},createProduct:function createProduct(b,c,d,e,f,g,h,i,j,k){return a.getInstance().eCommerce.createProduct(b,c,d,e,f,g,h,i,j,k)},createPromotion:function createPromotion(b,c,d,e){return a.getInstance().eCommerce.createPromotion(b,c,d,e)},createImpression:function createImpression(b,c){return a.getInstance().eCommerce.createImpression(b,c)},createTransactionAttributes:function createTransactionAttributes(b,c,d,e,f,g){return a.getInstance().eCommerce.createTransactionAttributes(b,c,d,e,f,g)},logCheckout:function logCheckout(b,c,d,e){a.getInstance().eCommerce.logCheckout(b,c,d,e);},logProductAction:function logProductAction(b,c,d,e){a.getInstance().eCommerce.logProductAction(b,c,d,e);},logPurchase:function logPurchase(b,c,d,e,f){a.getInstance().eCommerce.logPurchase(b,c,d,e,f);},logPromotion:function logPromotion(b,c,d,e){a.getInstance().eCommerce.logPromotion(b,c,d,e);},logImpression:function logImpression(b,c,d){a.getInstance().eCommerce.logImpression(b,c,d);},logRefund:function logRefund(b,c,d,e,f){a.getInstance().eCommerce.logRefund(b,c,d,e,f);},expandCommerceEvent:function expandCommerceEvent(b){return a.getInstance().eCommerce.expandCommerceEvent(b)}},this.setSessionAttribute=function(b,c){a.getInstance().setSessionAttribute(b,c);},this.setOptOut=function(b){a.getInstance().setOptOut(b);},this.setIntegrationAttribute=function(b,c){a.getInstance().setIntegrationAttribute(b,c);},this.getIntegrationAttributes=function(b){return a.getInstance().getIntegrationAttributes(b)},this.Identity={HTTPCodes:a.getInstance().Identity.HTTPCodes,aliasUsers:function aliasUsers(b,c){a.getInstance().Identity.aliasUsers(b,c);},createAliasRequest:function createAliasRequest(b,c){return a.getInstance().Identity.createAliasRequest(b,c)},getCurrentUser:function getCurrentUser(){return a.getInstance().Identity.getCurrentUser()},getUser:function getUser(b){return a.getInstance().Identity.getUser(b)},getUsers:function getUsers(){return a.getInstance().Identity.getUsers()},identify:function identify(b,c){a.getInstance().Identity.identify(b,c);},login:function login(b,c){a.getInstance().Identity.login(b,c);},logout:function logout(b,c){a.getInstance().Identity.logout(b,c);},modify:function modify(b,c){a.getInstance().Identity.modify(b,c);}},this.sessionManager={getSession:function getSession(){return a.getInstance()._SessionManager.getSession()}},this.Consent={createConsentState:function createConsentState(){return a.getInstance().Consent.createConsentState()},createGDPRConsent:function createGDPRConsent(b,c,d,e,f){return a.getInstance().Consent.createGDPRConsent(b,c,d,e,f)},createCCPAConsent:function createCCPAConsent(b,c,d,e,f){return a.getInstance().Consent.createGDPRConsent(b,c,d,e,f)}},this.reset=function(b,c){"boolean"==typeof c?a.getInstance().reset(b,c,a.getInstance()):a.getInstance().reset(b,!1,a.getInstance());},this.configurePixel=function(b){a.getInstance().configurePixel(b);},this._setIntegrationDelay=function(b,c){a.getInstance()._setIntegrationDelay(b,c);},this._getIntegrationDelays=function(){return a.getInstance()._getIntegrationDelays()},this.getVersion=function(){return a.getInstance().getVersion()},this.generateHash=function(b){return a.getInstance().generateHash(b)},this.addForwarder=function(b){a.getInstance().addForwarder(b);},this._getActiveForwarders=function(){return a.getInstance()._getActiveForwarders()};}var mparticleInstance=new mParticle$1;window.mParticle=mparticleInstance,window.mParticle._BatchValidator=new _BatchValidator;

/* harmony default export */ __webpack_exports__["a"] = (mparticleInstance);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
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
    var customAttributes = {};
    if (event && event.EventAttributes) {
        customAttributes = event.EventAttributes;
    }

    switch (event.EventCategory) {
        case MediaEventType.AdBreakStart:
            var adBreakObject = this.common.MediaHeartbeat.createAdBreakObject(
                event.AdBreak.title,
                event.AdBreak.placement || 0, // TODO: Ad Break Object doesn't support placement yet
                this.common.playheadPosition
            );

            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdBreakStart,
                adBreakObject,
                customAttributes
            );
            break;
        case MediaEventType.AdBreakEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdBreakComplete,
                {},
                customAttributes
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
                adObject,
                customAttributes
            );
            break;
        case MediaEventType.AdEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdComplete,
                {},
                customAttributes
            );
            break;
        case MediaEventType.AdSkip:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.AdSkip,
                {},
                customAttributes
            );
            break;
        case MediaEventType.AdClick:
            // This is not supported in Adobe Heartbeat
            console.warn('Ad Click is not a supported Adobe Heartbeat Event');
            break;
        case MediaEventType.BufferStart:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.BufferStart,
                {},
                customAttributes
            );
            break;
        case MediaEventType.BufferEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.BufferComplete,
                {},
                customAttributes
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

            this.common.mediaHeartbeat.trackSessionStart(
                adobeMediaObject,
                customAttributes
            );
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
                this.common.MediaHeartbeat.Event.SeekStart,
                {},
                customAttributes
            );
            break;
        case MediaEventType.SeekEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.SeekComplete,
                {},
                customAttributes
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
                chapterObject,
                customAttributes
            );
            break;
        case MediaEventType.SegmentEnd:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.ChapterComplete,
                {},
                customAttributes
            );
            break;
        case MediaEventType.SegmentSkip:
            this.common.mediaHeartbeat.trackEvent(
                this.common.MediaHeartbeat.Event.ChapterSkip,
                {},
                customAttributes
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
                qosObject,
                customAttributes
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
        common,
        initForwarderCallback
    ) {
        var self = this;
        if (!window.mParticle.isTestEnvironment || !window.ADB) {
            /* Load your Web SDK here using a variant of your snippet from your readme that your customers would generally put into their <head> tags
               Generally, our integrations create script tags and append them to the <head>. Please follow the following format as a guide:
            */
            var adobeHeartbeatSdk = document.createElement('script');
            adobeHeartbeatSdk.type = 'text/javascript';
            adobeHeartbeatSdk.async = true;
            adobeHeartbeatSdk.src =
                'https://static.mparticle.com/sdk/web/adobe/MediaSDK.min.js';
            (
                document.getElementsByTagName('head')[0] ||
                document.getElementsByTagName('body')[0]
            ).appendChild(adobeHeartbeatSdk);
            adobeHeartbeatSdk.onload = function() {
                if (ADB) {
                    self.initHeartbeat(
                        settings,
                        common,
                        ADB,
                        testMode,
                        initForwarderCallback
                    );
                    if (eventQueue.length > 0) {
                        // Process any events that may have been queued up while forwarder was being initialized.
                        for (var i = 0; i < eventQueue.length; i++) {
                            processEvent(eventQueue[i]);
                        }
                        // now that each queued event is processed, we empty the eventQueue
                        eventQueue = [];
                    }
                }
            };
        } else {
            // For testing, you should fill out this section in order to ensure any required initialization calls are made,
            // clientSDKObject.initialize(forwarderSettings.apiKey)
            self.initHeartbeat(
                settings,
                common,
                ADB,
                testMode,
                initForwarderCallback
            );
        }
    },
    initHeartbeat: function(
        settings,
        common,
        adobeSDK,
        testMode,
        initHeartbeatCallback
    ) {
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
        }

        initHeartbeatCallback();
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
        isAdobeMediaSDKInitialized = false,
        reportingService,
        eventQueue = [],
        name = 'AdobeHeartbeatKit';

    self.moduleId = initialization.moduleId;
    self.common = new common();

    var initForwarderCallback = function() {
        isAdobeMediaSDKInitialized = true;
    };

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
                self.common,
                initForwarderCallback
            );
            self.eventHandler = new eventHandler(self.common);
        } catch (e) {
            console.error('Failed to initialize ' + name, e);
        }
    }

    function processEvent(event) {
        var reportEvent = false;
        if (isAdobeMediaSDKInitialized) {
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
    window.mParticle.registerHBK({ constructor: constructor });
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

var name = 'Adobe',
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

var constructor$1 = function() {
    var self = this,
        //one or more instances of AppMeasurement returned from s_gi()
        appMeasurement,
        settings,
        timestampOption,
        isAdobeClientKitInitialized = false,
        reportingService,
        contextVariableMapping,
        productIncrementorMapping,
        productMerchandisingMapping,
        propsMapping,
        eVarsMapping,
        hiersMapping,
        eventsMapping;

    (self.adobeMediaSDK = new src_1()), (self.name = name);

    function initForwarder(forwarderSettings, service, testMode) {
        settings = forwarderSettings;
        reportingService = service;
        try {
            loadMappings();
            timestampOption =
                settings.timestampOption === 'optional' ||
                settings.timestampOption === 'required';
            finishAdobeInitialization();
            if (settings.mediaTrackingServer) {
                self.adobeMediaSDK.init(forwarderSettings, service, testMode);
            }
            isAdobeClientKitInitialized = true;

            return 'ClientSDK successfully loaded';
        } catch (e) {
            return 'Failed to initialize: ' + e;
        }
    }

    function loadMappings() {
        eVarsMapping = settings.evars
            ? JSON.parse(settings.evars.replace(/&quot;/g, '"'))
            : [];
        propsMapping = settings.props
            ? JSON.parse(settings.props.replace(/&quot;/g, '"'))
            : [];
        productIncrementorMapping = settings.productIncrementor
            ? JSON.parse(settings.productIncrementor.replace(/&quot;/g, '"'))
            : [];
        productMerchandisingMapping = settings.productMerchandising
            ? JSON.parse(settings.productMerchandising.replace(/&quot;/g, '"'))
            : [];
        hiersMapping = settings.hvars
            ? JSON.parse(settings.hvars.replace(/&quot;/g, '"'))
            : [];
        eventsMapping = settings.events
            ? JSON.parse(settings.events.replace(/&quot;/g, '"'))
            : [];
        contextVariableMapping = settings.contextVariables
            ? JSON.parse(settings.contextVariables.replace(/&quot;/g, '"'))
            : [];
    }

    function finishAdobeInitialization() {
        try {
            appMeasurement = s_gi(settings.reportSuiteIDs);
            if (settings.setGlobalObject === 'True') {
                window.s = appMeasurement;
            }
            appMeasurement.visitor = Visitor.getInstance(
                settings.organizationID
            );

            appMeasurement.trackingServer = settings.trackingServer;
            appMeasurement.trackingServerSecure =
                settings.trackingServerURLSecure;
            appMeasurement.trackDownloadLinks = true;
            appMeasurement.trackExternalLinks =
                settings.trackExternalLinks === 'True';
            appMeasurement.trackInlineStats = true;
            appMeasurement.linkDownloadFileTypes =
                'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
            appMeasurement.linkInternalFilters = 'javascript:';
            appMeasurement.linkLeaveQueryString = false;
            appMeasurement.linkTrackVars = 'None';
            appMeasurement.linkTrackEvents = 'None';
            appMeasurement.visitorNamespace = '';

            // On first load, adobe will call the callback correctly if no MCID exists
            // On subsequent loads, it does not, so we need to manually call setMCIDOnIntegrationAttributes
            var mcID = Visitor.getInstance(
                settings.organizationID
            ).getMarketingCloudVisitorID(setMarketingCloudId);
            if (mcID && mcID.length > 0) {
                setMCIDOnIntegrationAttributes(mcID);
            }

            return true;
        } catch (e) {
            return 'error initializing adobe: ' + e;
        }
    }

    function setMarketingCloudId(mcid) {
        setMCIDOnIntegrationAttributes(mcid);
    }

    function setMCIDOnIntegrationAttributes(mcid) {
        var adobeIntegrationAttributes = {};
        adobeIntegrationAttributes[MARKETINGCLOUDIDKEY] = mcid;
        mParticle.setIntegrationAttribute(
            ADOBEMODULENUMBER,
            adobeIntegrationAttributes
        );
        mParticle._setIntegrationDelay(ADOBEMODULENUMBER, false);
    }

    // Get the mapped value for custom events
    function getEventMappingValue(event) {
        var jsHash = calculateJSHash(
            event.EventDataType,
            event.EventCategory,
            event.EventName
        );
        return findValueInMapping(jsHash, eventsMapping);
    }

    function calculateJSHash(eventDataType, eventCategory, name) {
        var preHash =
            '' + eventDataType + ('' + eventCategory) + '' + (name || '');

        return mParticle.generateHash(preHash);
    }

    function findValueInMapping(jsHash, mapping) {
        if (mapping) {
            var filteredArray = mapping.filter(function(mappingEntry) {
                if (
                    mappingEntry.jsmap &&
                    mappingEntry.maptype &&
                    mappingEntry.value
                ) {
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
        appMeasurement.timestamp = timestampOption
            ? Math.floor(new Date().getTime() / 1000)
            : null;
        appMeasurement.events = '';

        if (isAdobeClientKitInitialized) {
            try {
                // First determine if an eventName is mapped, if so, log it as an event as opposed to a pageview or commerceview
                // ex. If a pageview is mapped to an event, we logEvent instead of logging it as a pageview
                var eventMapping = getEventMappingValue(event);

                if (
                    eventMapping &&
                    eventMapping.result &&
                    eventMapping.matches
                ) {
                    setMappings(event, true, linkTrackVars);
                    reportEvent = logEvent(
                        event,
                        linkTrackVars,
                        eventMapping.matches
                    );
                } else if (event.EventDataType === MessageType$1.PageView) {
                    setMappings(event, false);
                    reportEvent = logPageView(event);
                } else if (event.EventDataType === MessageType$1.Commerce) {
                    setMappings(event, true, linkTrackVars);
                    reportEvent = processCommerceTransaction(
                        event,
                        linkTrackVars
                    );
                } else if (event.EventDataType === MessageType$1.Media) {
                    self.adobeMediaSDK.process(event);
                } else {
                    return 'event name not mapped, aborting event logging';
                }

                if (
                    reportEvent === true &&
                    reportingService &&
                    event.EventDataType
                ) {
                    reportingService(self, event);
                    return 'Successfully sent to ' + name;
                }
            } catch (e) {
                return 'Failed to send to: ' + name + ' ' + e;
            }
        }

        return "Can't send to forwarder " + name + ', not initialized.';
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
        if (
            event.EventCategory === mParticle.CommerceEventType.ProductPurchase
        ) {
            appMeasurement.events = 'purchase';
            appMeasurement.purchaseID = event.ProductAction.TransactionId;
            appMeasurement.transactionID = event.ProductAction.TransactionId;
            linkTrackVars.push('purchaseID', 'transactionID');
        } else if (
            event.EventCategory ===
            mParticle.CommerceEventType.ProductViewDetail
        ) {
            appMeasurement.events = 'prodView';
        } else if (
            event.EventCategory === mParticle.CommerceEventType.ProductAddToCart
        ) {
            appMeasurement.events = 'scAdd';
        } else if (
            event.EventCategory ===
            mParticle.CommerceEventType.ProductRemoveFromCart
        ) {
            appMeasurement.events = 'scRemove';
        } else if (
            event.EventCategory === mParticle.CommerceEventType.ProductCheckout
        ) {
            appMeasurement.events = 'scCheckout';
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
                        if (
                            expandedEvt.EventAttributes.hasOwnProperty(
                                eventAttributeKey
                            )
                        ) {
                            var jsHash = calculateJSHash(
                                event.EventDataType,
                                event.EventCategory,
                                eventAttributeKey
                            );
                            var mapping = findValueInMapping(
                                jsHash,
                                eventsMapping
                            );
                            if (mapping && mapping.result && mapping.matches) {
                                mapping.matches.forEach(function(mapping) {
                                    if (mapping.value) {
                                        if (
                                            appMeasurement.events.indexOf(
                                                mapping.value
                                            ) < 0
                                        ) {
                                            appMeasurement.events +=
                                                ',' +
                                                mapping.value +
                                                '=' +
                                                expandedEvt.EventAttributes[
                                                    eventAttributeKey
                                                ];
                                        }
                                    }
                                });
                            }
                        }
                    }
                } else {
                    var productAttributes = expandedEvt.EventAttributes;
                    productDetails.push(
                        productAttributes.Category || '',
                        productAttributes.Name,
                        productAttributes.Id,
                        productAttributes.Quantity || 1,
                        productAttributes['Item Price'] || 0
                    );
                    for (var productAttributeKey in expandedEvt.EventAttributes) {
                        if (
                            expandedEvt.EventAttributes.hasOwnProperty(
                                productAttributeKey
                            )
                        ) {
                            productIncrementorMapping.forEach(function(
                                productIncrementorMap
                            ) {
                                if (
                                    productIncrementorMap.map ===
                                    productAttributeKey
                                ) {
                                    incrementor.push(
                                        productIncrementorMap.value +
                                            '=' +
                                            productAttributes[
                                                productAttributeKey
                                            ]
                                    );
                                    if (
                                        appMeasurement.events.indexOf(
                                            productIncrementorMap.value
                                        ) < 0
                                    ) {
                                        appMeasurement.events +=
                                            ',' + productIncrementorMap.value;
                                    }
                                }
                            });
                            productMerchandisingMapping.forEach(function(
                                productMerchandisingMap
                            ) {
                                if (
                                    productMerchandisingMap.map ===
                                    productAttributeKey
                                ) {
                                    merchandising.push(
                                        productMerchandisingMap.value +
                                            '=' +
                                            productAttributes[
                                                productAttributeKey
                                            ]
                                    );
                                }
                            });
                        }
                    }
                    productBuilder.push(
                        productDetails.join(';'),
                        incrementor.join('|'),
                        merchandising.join('|')
                    );
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
        } catch (e) {
            appMeasurement.clearVars();
            return { error: 'logPageView not called, error ' + e };
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
                appMeasurement.pageName =
                    event.EventName || window.document.title;
                linkTrackVars.push('events');
                setPageName(linkTrackVars);

                appMeasurement.linkTrackVars = linkTrackVars;
                appMeasurement.tl(true, 'o', event.EventName);
                appMeasurement.clearVars();
                return true;
            } else {
                appMeasurement.clearVars();
                window.console.log(
                    'event name not mapped, aborting event logging'
                );
            }
        } catch (e) {
            appMeasurement.clearVars();
            return { error: e };
        }
    }

    // .map is the attribute passed through, .value is the eVar value
    function setEvars(event, linkTrackVars) {
        var eventAttributes = event.EventAttributes;
        for (var eventAttributeKey in eventAttributes) {
            if (eventAttributes.hasOwnProperty(eventAttributeKey)) {
                eVarsMapping.forEach(function(eVarMap) {
                    if (eVarMap.map === eventAttributeKey) {
                        appMeasurement[eVarMap.value] =
                            eventAttributes[eventAttributeKey];
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
                        appMeasurement[propMap.value] =
                            eventAttributes[eventAttributeKey];
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
                var jsHash = calculateJSHash(
                    event.EventDataType,
                    event.EventCategory,
                    eventAttributeKey
                );
                var mapping = findValueInMapping(jsHash, hiersMapping);
                if (mapping && mapping.result && mapping.matches) {
                    mapping.matches.forEach(function(mapping) {
                        if (mapping.value) {
                            appMeasurement[mapping.value] =
                                eventAttributes[eventAttributeKey];
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
                        appMeasurement.contextData[contextVariableMap.value] =
                            eventAttributes[eventAttributeKey];
                        if (linkTrackVars) {
                            linkTrackVars.push(
                                'contextData.' + contextVariableMap.value
                            );
                        }
                    }
                });
            }
        }
    }

    function onUserIdentified(mpUserObject) {
        if (isAdobeClientKitInitialized) {
            var userIdentities = mpUserObject.getUserIdentities()
                .userIdentities;

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
        } else {
            return (
                "Can't call setUserIdentity on forwarder " +
                name +
                ', not initialized'
            );
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
        name: name,
        constructor: constructor$1,
        getId: getId
    });
}

function register(config) {
    if (!config) {
        window.console.log(
            'You must pass a config object to register the kit ' + name
        );
        return;
    }

    if (!isObject(config)) {
        window.console.log(
            "'config' must be an object. You passed in a " + typeof config
        );
        return;
    }

    if (isObject(config.kits)) {
        config.kits[name] = {
            constructor: constructor$1
        };
    } else {
        config.kits = {};
        config.kits[name] = {
            constructor: constructor$1
        };
    }
    window.console.log(
        'Successfully registered ' + name + ' to your mParticle configuration'
    );
}

function isObject(val) {
    return (
        val != null && typeof val === 'object' && Array.isArray(val) === false
    );
}

var AdobeClientSideKit_esm = {
    register: register
};

module.exports = AdobeClientSideKit_esm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mparticle_web_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _mparticle_web_media_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _mparticle_web_media_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mparticle_web_media_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mparticle_web_adobe_client_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _mparticle_web_adobe_client_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mparticle_web_adobe_client_kit__WEBPACK_IMPORTED_MODULE_2__);




const mParticleConfig = {
    isDevelopmentMode: true
};

var apiKey = 'us1-163fa0c573a70f489696978145cf8d53'; // YOUR API KEY HERE

_mparticle_web_adobe_client_kit__WEBPACK_IMPORTED_MODULE_2___default.a.register(mParticleConfig);

window.mediaSDK = new _mparticle_web_media_sdk__WEBPACK_IMPORTED_MODULE_1___default.a(
    _mparticle_web_sdk__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    '1234567',
    'My sweet sweet media',
    120000,
    'Video',
    'OnDemand',
    true,
    true
);

_mparticle_web_sdk__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].init(apiKey, mParticleConfig);


/***/ })
/******/ ]);