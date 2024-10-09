/*! For license information please see video.cjs.js.LICENSE.txt */
"use strict";
var window$1=require("global/window"),
document=require("global/document"),
_extends=require("@babel/runtime/helpers/extends"),
keycode=require("keycode"),
_assertThisInitialized=require("@babel/runtime/helpers/assertThisInitialized"),
_inheritsLoose=require("@babel/runtime/helpers/inheritsLoose"),
safeParseTuple=require("safe-json-parse/tuple"),
XHR=require("@videojs/xhr"),
vtt=require("videojs-vtt.js"),
_construct=require("@babel/runtime/helpers/construct"),
_inherits=require("@babel/runtime/helpers/inherits"),
_resolveUrl=require("@videojs/vhs-utils/cjs/resolve-url.js"),
m3u8Parser=require("m3u8-parser"),
codecs_js=require("@videojs/vhs-utils/cjs/codecs.js"),
mediaTypes_js=require("@videojs/vhs-utils/cjs/media-types.js"),
byteHelpers=require("@videojs/vhs-utils/cjs/byte-helpers"),
mpdParser=require("mpd-parser"),
parseSidx=require("mux.js/lib/tools/parse-sidx"),
id3Helpers=require("@videojs/vhs-utils/cjs/id3-helpers"),
containers=require("@videojs/vhs-utils/cjs/containers"),
clock=require("mux.js/lib/utils/clock");

function _interopDefaultLegacy(e) {
    return e&&"object"==typeof e&&"default"in e?e: {
        default: e
    }
}

for(var browserApi, window__default=_interopDefaultLegacy(window$1), document__default=_interopDefaultLegacy(document), _extends__default=_interopDefaultLegacy(_extends), keycode__default=_interopDefaultLegacy(keycode), _assertThisInitialized__default=_interopDefaultLegacy(_assertThisInitialized), _inheritsLoose__default=_interopDefaultLegacy(_inheritsLoose), safeParseTuple__default=_interopDefaultLegacy(safeParseTuple), XHR__default=_interopDefaultLegacy(XHR), vtt__default=_interopDefaultLegacy(vtt), _construct__default=_interopDefaultLegacy(_construct), _inherits__default=_interopDefaultLegacy(_inherits), _resolveUrl__default=_interopDefaultLegacy(_resolveUrl), parseSidx__default=_interopDefaultLegacy(parseSidx), version$5="7.20.2", hooks_= {}

    , hooks=function(e, t) {
        return hooks_[e]=hooks_[e]||[], t&&(hooks_[e]=hooks_[e].concat(t)), hooks_[e]
    }

    , hook=function(e, t) {
        hooks(e, t)
    }

    , removeHook=function(e, t) {
        var i=hooks(e).indexOf(t); return !(i<=-1||(hooks_[e]=hooks_[e].slice(), hooks_[e].splice(i, 1), 0))
    }

    , hookOnce=function(e, t) {
        hooks(e, [].concat(t).map((function(t) {
                        return function i() {
                            return removeHook(e, i), t.apply(void 0, arguments)
                        }
                    }

                )))
    }

    , FullscreenApi= {
        prefixed: !0
    }

    , apiMap=[["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], specApi=apiMap[0], i=0; i<apiMap.length; i++)if(apiMap[i][1]in document__default.default) {
    browserApi=apiMap[i];
    break
}

if(browserApi) {
    for(var _i=0; _i<browserApi.length; _i++)FullscreenApi[specApi[_i]]=browserApi[_i];
    FullscreenApi.prefixed=browserApi[0] !==specApi[0]
}

var history=[],
LogByTypeFactory=function(e, t) {
    return function(i, n, r) {
        var a=t.levels[n],
        s=new RegExp("^("+a+")$");

        if("log" !==i&&r.unshift(i.toUpperCase()+":"), r.unshift(e+":"), history) {
            history.push([].concat(r));
            var o=history.length-1e3;
            history.splice(0, o>0?o:0)
        }

        if(window__default.default.console) {
            var l=window__default.default.console[i];
            l||"debug" !==i||(l=window__default.default.console.info||window__default.default.console.log),
            l&&a&&s.test(i)&&l[Array.isArray(r)?"apply": "call"](window__default.default.console, r)
        }
    }
}

;

function createLogger$1(e) {

    var t,
    i="info",
    n=function() {
        for(var e=arguments.length, n=new Array(e), r=0; r<e; r++)n[r]=arguments[r];
        t("log", i, n)
    }

    ;

    return t=LogByTypeFactory(e, n),
    n.createLogger=function(t) {
        return createLogger$1(e+": "+t)
    }

    ,
    n.levels= {
        all: "debug|log|warn|error", off:"", debug:"debug|log|warn|error", info:"log|warn|error", warn:"warn|error", error:"error", DEFAULT:i
    }

    ,
    n.level=function(e) {
        if("string"==typeof e) {
            if( !n.levels.hasOwnProperty(e))throw new Error('"'+e+'" in not a valid log level');
            i=e
        }

        return i
    }

    ,
    (n.history=function() {
            return history?[].concat(history):[]
        }

    ).filter=function(e) {
        return(history||[]).filter((function(t) {
                    return new RegExp(".*"+e+".*").test(t[0])
                }

            ))
    }

    ,
    n.history.clear=function() {
        history&&(history.length=0)
    }

    ,
    n.history.disable=function() {
        null !==history&&(history.length=0, history=null)
    }

    ,
    n.history.enable=function() {
        null===history&&(history=[])
    }

    ,
    n.error=function() {
        for(var e=arguments.length, n=new Array(e), r=0; r<e; r++)n[r]=arguments[r];
        return t("error", i, n)
    }

    ,
    n.warn=function() {
        for(var e=arguments.length, n=new Array(e), r=0; r<e; r++)n[r]=arguments[r];
        return t("warn", i, n)
    }

    ,
    n.debug=function() {
        for(var e=arguments.length, n=new Array(e), r=0; r<e; r++)n[r]=arguments[r];
        return t("debug", i, n)
    }

    ,
    n
}

var log$1=createLogger$1("VIDEOJS"),
createLogger=log$1.createLogger,
toString=Object.prototype.toString,
keys=function(e) {
    return isObject(e)?Object.keys(e): []
}

;

function each(e, t) {
    keys(e).forEach((function(i) {
                return t(e[i], i)
            }

        ))
}

function reduce(e, t, i) {

    return void 0===i&&(i=0),
    keys(e).reduce((function(i, n) {
                return t(i, e[n], n)
            }

        ), i)
}

function assign(e) {
    for(var t=arguments.length, i=new Array(t>1?t-1:0), n=1; n<t; n++)i[n-1]=arguments[n];

    return Object.assign?_extends__default.default.apply(void 0, [e].concat(i)):(i.forEach((function(t) {
                    t&&each(t, (function(t, i) {
                                e[i]=t
                            }

                        ))
                }

            )), e)
}

function isObject(e) {
    return ! !e&&"object"==typeof e
}

function isPlain(e) {
    return isObject(e)&&"[object Object]"===toString.call(e)&&e.constructor===Object
}

function computedStyle(e, t) {
    if( !e|| !t)return"";

    if("function"==typeof window__default.default.getComputedStyle) {
        var i;

        try {
            i=window__default.default.getComputedStyle(e)
        }

        catch(e) {
            return""
        }

        return i?i.getPropertyValue(t)||i[t]:""
    }

    return""
}

var USER_AGENT=window__default.default.navigator&&window__default.default.navigator.userAgent||"",
webkitVersionMap=/AppleWebKit\/([\d.]+)/i.exec(USER_AGENT),
appleWebkitVersion=webkitVersionMap?parseFloat(webkitVersionMap.pop()):null,
IS_IPOD=/iPod/i.test(USER_AGENT),
IOS_VERSION=function() {
    var e=USER_AGENT.match(/OS (\d+)_/i);
    return e&&e[1]?e[1]: null
}

(),
IS_ANDROID=/Android/i.test(USER_AGENT),
ANDROID_VERSION=function() {
    var e=USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if( !e)return null;
    var t=e[1]&&parseFloat(e[1]),
    i=e[2]&&parseFloat(e[2]);
    return t&&i?parseFloat(e[1]+"."+e[2]): t||null
}

(),
IS_NATIVE_ANDROID=IS_ANDROID&&ANDROID_VERSION<5&&appleWebkitVersion<537,
IS_FIREFOX=/Firefox/i.test(USER_AGENT),
IS_EDGE=/Edg/i.test(USER_AGENT),
IS_CHROME= !IS_EDGE&&(/Chrome/i.test(USER_AGENT)||/CriOS/i.test(USER_AGENT)),
CHROME_VERSION=function() {
    var e=USER_AGENT.match(/(Chrome|CriOS)\/(\d+)/);
    return e&&e[2]?parseFloat(e[2]): null
}

(),
IE_VERSION=function() {
    var e=/MSIE\s(\d+)\.\d/.exec(USER_AGENT),
    t=e&&parseFloat(e[1]);
    return !t&&/Trident\/7.0/i.test(USER_AGENT)&&/rv: 11.0/.test(USER_AGENT)&&(t=11), t
}

(),
IS_SAFARI=/Safari/i.test(USER_AGENT)&& !IS_CHROME&& !IS_ANDROID&& !IS_EDGE,
IS_WINDOWS=/Windows/i.test(USER_AGENT),
TOUCH_ENABLED=Boolean(isReal()&&("ontouchstart"in window__default.default||window__default.default.navigator.maxTouchPoints||window__default.default.DocumentTouch&&window__default.default.document instanceof window__default.default.DocumentTouch)),
IS_IPAD=/iPad/i.test(USER_AGENT)||IS_SAFARI&&TOUCH_ENABLED&& !/iPhone/i.test(USER_AGENT),
IS_IPHONE=/iPhone/i.test(USER_AGENT)&& !IS_IPAD,
IS_IOS=IS_IPHONE||IS_IPAD||IS_IPOD,
IS_ANY_SAFARI=(IS_SAFARI||IS_IOS)&& !IS_CHROME,
browser=Object.freeze( {
        __proto__:null, IS_IPOD:IS_IPOD, IOS_VERSION:IOS_VERSION, IS_ANDROID:IS_ANDROID, ANDROID_VERSION:ANDROID_VERSION, IS_NATIVE_ANDROID:IS_NATIVE_ANDROID, IS_FIREFOX:IS_FIREFOX, IS_EDGE:IS_EDGE, IS_CHROME:IS_CHROME, CHROME_VERSION:CHROME_VERSION, IE_VERSION:IE_VERSION, IS_SAFARI:IS_SAFARI, IS_WINDOWS:IS_WINDOWS, TOUCH_ENABLED:TOUCH_ENABLED, IS_IPAD:IS_IPAD, IS_IPHONE:IS_IPHONE, IS_IOS:IS_IOS, IS_ANY_SAFARI:IS_ANY_SAFARI
    }

);

function isNonBlankString(e) {
    return"string"==typeof e&&Boolean(e.trim())
}

function throwIfWhitespace(e) {
    if(e.indexOf(" ")>=0)throw new Error("class has illegal whitespace characters")
}

function classRegExp(e) {
    return new RegExp("(^|\\s)"+e+"($|\\s)")
}

function isReal() {
    return document__default.default===window__default.default.document
}

function isEl(e) {
    return isObject(e)&&1===e.nodeType
}

function isInFrame() {
    try {
        return window__default.default.parent !==window__default.default.self
    }

    catch(e) {
        return !0
    }
}

function createQuerier(e) {
    return function(t, i) {
        if( !isNonBlankString(t))return document__default.default[e](null);
        isNonBlankString(i)&&(i=document__default.default.querySelector(i));
        var n=isEl(i)?i: document__default.default;
        return n[e]&&n[e](t)
    }
}

function createEl(e, t, i, n) {

    void 0===e&&(e="div"),
    void 0===t&&(t= {}

    ),
    void 0===i&&(i= {}

    );
    var r=document__default.default.createElement(e);

    return Object.getOwnPropertyNames(t).forEach((function(e) {
                var i=t[e]; -1 !==e.indexOf("aria-")||"role"===e||"type"===e?(log$1.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set "+e+" to "+i+"."), r.setAttribute(e, i)):"textContent"===e?textContent(r, i):r[e]===i&&"tabIndex" !==e||(r[e]=i)
            }

        )),
    Object.getOwnPropertyNames(i).forEach((function(e) {
                r.setAttribute(e, i[e])
            }

        )),
    n&&appendContent(r, n),
    r
}

function textContent(e, t) {
    return void 0===e.textContent?e.innerText=t: e.textContent=t, e
}

function prependTo(e, t) {
    t.firstChild?t.insertBefore(e, t.firstChild): t.appendChild(e)
}

function hasClass(e, t) {
    return throwIfWhitespace(t),
    e.classList?e.classList.contains(t): classRegExp(t).test(e.className)
}

function addClass(e, t) {
    return e.classList?e.classList.add(t): hasClass(e, t)||(e.className=(e.className+" "+t).trim()), e
}

function removeClass(e, t) {
    return e?(e.classList?e.classList.remove(t):(throwIfWhitespace(t), e.className=e.className.split(/\s+/).filter((function(e) {
                        return e !==t
                    }

                )).join(" ")), e):(log$1.warn("removeClass was called with an element that doesn't exist"), null)
}

function toggleClass(e, t, i) {
    var n=hasClass(e, t);
    if("function"==typeof i&&(i=i(e, t)), "boolean" !=typeof i&&(i= !n), i !==n)return i?addClass(e, t): removeClass(e, t), e
}

function setAttributes(e, t) {
    Object.getOwnPropertyNames(t).forEach((function(i) {
                var n=t[i]; null==n|| !1===n?e.removeAttribute(i):e.setAttribute(i,  !0===n?"":n)
            }

        ))
}

function getAttributes(e) {
    var t= {}

    ;

    if(e&&e.attributes&&e.attributes.length>0)for(var i=e.attributes, n=i.length-1; n>=0; n--) {
        var r=i[n].name,
        a=i[n].value;
        "boolean" !=typeof e[r]&&-1===",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(","+r+",")||(a=null !==a),
        t[r]=a
    }

    return t
}

function getAttribute(e, t) {
    return e.getAttribute(t)
}

function setAttribute(e, t, i) {
    e.setAttribute(t, i)
}

function removeAttribute(e, t) {
    e.removeAttribute(t)
}

function blockTextSelection() {

    document__default.default.body.focus(),
    document__default.default.onselectstart=function() {
        return !1
    }
}

function unblockTextSelection() {
    document__default.default.onselectstart=function() {
        return !0
    }
}

function getBoundingClientRect(e) {
    if(e&&e.getBoundingClientRect&&e.parentNode) {

        var t=e.getBoundingClientRect(),
        i= {}

        ;

        return["bottom",
        "height",
        "left",
        "right",
        "top",
        "width"].forEach((function(e) {
                    void 0 !==t[e]&&(i[e]=t[e])
                }

            )),
        i.height||(i.height=parseFloat(computedStyle(e, "height"))),
        i.width||(i.width=parseFloat(computedStyle(e, "width"))),
        i
    }
}

function findPosition(e) {
    if( !e||e&& !e.offsetParent)return {
        left: 0, top:0, width:0, height:0
    }

    ;
    for(var t=e.offsetWidth, i=e.offsetHeight, n=0, r=0; e.offsetParent&&e !==document__default.default[FullscreenApi.fullscreenElement]; )n+=e.offsetLeft,
    r+=e.offsetTop,
    e=e.offsetParent;

    return {
        left: n, top:r, width:t, height:i
    }
}

function getPointerPosition(e, t) {
    var i= {
        x: 0, y:0
    }

    ;

    if(IS_IOS)for(var n=e; n&&"html" !==n.nodeName.toLowerCase(); ) {
        var r=computedStyle(n, "transform");

        if(/^matrix/.test(r)) {
            var a=r.slice(7, -1).split(/, \s/).map(Number);
            i.x+=a[4],
            i.y+=a[5]
        }

        else if(/^matrix3d/.test(r)) {
            var s=r.slice(9, -1).split(/, \s/).map(Number);
            i.x+=s[12],
            i.y+=s[13]
        }

        n=n.parentNode
    }

    var o= {}

    ,
    l=findPosition(t.target),
    u=findPosition(e),
    d=u.width,
    c=u.height,
    h=t.offsetY-(u.top-l.top),
    p=t.offsetX-(u.left-l.left);
    return t.changedTouches&&(p=t.changedTouches[0].pageX-u.left, h=t.changedTouches[0].pageY+u.top, IS_IOS&&(p-=i.x, h-=i.y)),
    o.y=1-Math.max(0, Math.min(1, h/c)),
    o.x=Math.max(0, Math.min(1, p/d)),
    o
}

function isTextNode(e) {
    return isObject(e)&&3===e.nodeType
}

function emptyEl(e) {
    for(; e.firstChild; )e.removeChild(e.firstChild);
    return e
}

function normalizeContent(e) {

    return"function"==typeof e&&(e=e()),
    (Array.isArray(e)?e:[e]).map((function(e) {
                return"function"==typeof e&&(e=e()), isEl(e)||isTextNode(e)?e:"string"==typeof e&&/\S/.test(e)?document__default.default.createTextNode(e):void 0
            }

        )).filter((function(e) {
                return e
            }

        ))
}

function appendContent(e, t) {
    return normalizeContent(t).forEach((function(t) {
                return e.appendChild(t)
            }

        )),
    e
}

function insertContent(e, t) {
    return appendContent(emptyEl(e), t)
}

function isSingleLeftClick(e) {
    return void 0===e.button&&void 0===e.buttons||0===e.button&&void 0===e.buttons||"mouseup"===e.type&&0===e.button&&0===e.buttons||0===e.button&&1===e.buttons
}

var videojs$1,
$=createQuerier("querySelector"),
$$=createQuerier("querySelectorAll"),
Dom=Object.freeze( {
        __proto__:null, isReal:isReal, isEl:isEl, isInFrame:isInFrame, createEl:createEl, textContent:textContent, prependTo:prependTo, hasClass:hasClass, addClass:addClass, removeClass:removeClass, toggleClass:toggleClass, setAttributes:setAttributes, getAttributes:getAttributes, getAttribute:getAttribute, setAttribute:setAttribute, removeAttribute:removeAttribute, blockTextSelection:blockTextSelection, unblockTextSelection:unblockTextSelection, getBoundingClientRect:getBoundingClientRect, findPosition:findPosition, getPointerPosition:getPointerPosition, isTextNode:isTextNode, emptyEl:emptyEl, normalizeContent:normalizeContent, appendContent:appendContent, insertContent:insertContent, isSingleLeftClick:isSingleLeftClick, $:$, $$:$$
    }

),
_windowLoaded= !1,
autoSetup=function() {
    if( !1 !==videojs$1.options.autoSetup) {
        var e=Array.prototype.slice.call(document__default.default.getElementsByTagName("video")),
        t=Array.prototype.slice.call(document__default.default.getElementsByTagName("audio")),
        i=Array.prototype.slice.call(document__default.default.getElementsByTagName("video-js")),
        n=e.concat(t, i);

        if(n&&n.length>0)for(var r=0, a=n.length; r<a; r++) {
            var s=n[r];

            if( !s|| !s.getAttribute) {
                autoSetupTimeout(1);
                break
            }

            void 0===s.player&&null !==s.getAttribute("data-setup")&&videojs$1(s)
        }

        else _windowLoaded||autoSetupTimeout(1)
    }
}

;

function autoSetupTimeout(e, t) {
    isReal()&&(t&&(videojs$1=t), window__default.default.setTimeout(autoSetup, e))
}

function setWindowLoaded() {
    _windowLoaded= !0,
    window__default.default.removeEventListener("load", setWindowLoaded)
}

isReal()&&("complete"===document__default.default.readyState?setWindowLoaded():window__default.default.addEventListener("load", setWindowLoaded));

var FakeWeakMap,
createStyleElement=function(e) {
    var t=document__default.default.createElement("style");
    return t.className=e,
    t
}

,
setTextContent=function(e, t) {
    e.styleSheet?e.styleSheet.cssText=t: e.textContent=t
}

,
_initialGuid=3,
_guid=_initialGuid;

function newGUID() {
    return _guid++
}

window__default.default.WeakMap||(FakeWeakMap=function() {
        function e() {
            this.vdata="vdata"+Math.floor(window__default.default.performance&&window__default.default.performance.now()||Date.now()), this.data= {}
        }

        var t=e.prototype; return t.set=function(e, t) {
            var i=e[this.vdata]||newGUID(); return e[this.vdata]||(e[this.vdata]=i), this.data[i]=t, this
        }

        , t.get=function(e) {
            var t=e[this.vdata]; if(t)return this.data[t]; log$1("We have no data for this element", e)
        }

        , t.has=function(e) {
            return e[this.vdata]in this.data
        }

        , t.delete=function(e) {
            var t=e[this.vdata]; t&&(delete this.data[t], delete e[this.vdata])
        }

        , e
    }

    ());
var _supportsPassive,
DomData=window__default.default.WeakMap?new WeakMap:new FakeWeakMap;

function _cleanUpEvents(e, t) {
    if(DomData.has(e)) {
        var i=DomData.get(e);
        0===i.handlers[t].length&&(delete i.handlers[t], e.removeEventListener?e.removeEventListener(t, i.dispatcher,  !1):e.detachEvent&&e.detachEvent("on"+t, i.dispatcher)),
        Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers, delete i.dispatcher, delete i.disabled),
        0===Object.getOwnPropertyNames(i).length&&DomData.delete(e)
    }
}

function _handleMultipleEvents(e, t, i, n) {
    i.forEach((function(i) {
                e(t, i, n)
            }

        ))
}

function fixEvent(e) {
    if(e.fixed_)return e;

    function t() {
        return !0
    }

    function i() {
        return !1
    }

    if( !e|| !e.isPropagationStopped|| !e.isImmediatePropagationStopped) {
        var n=e||window__default.default.event;

        for(var r in e= {}

            , n)"layerX" !==r&&"layerY" !==r&&"keyLocation" !==r&&"webkitMovementX" !==r&&"webkitMovementY" !==r&&"path" !==r&&("returnValue"===r&&n.preventDefault||(e[r]=n[r]));

        if(e.target||(e.target=e.srcElement||document__default.default), e.relatedTarget||(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement), e.preventDefault=function() {
                n.preventDefault&&n.preventDefault(), e.returnValue= !1, n.returnValue= !1, e.defaultPrevented= !0
            }

            , e.defaultPrevented= !1, e.stopPropagation=function() {
                n.stopPropagation&&n.stopPropagation(), e.cancelBubble= !0, n.cancelBubble= !0, e.isPropagationStopped=t
            }

            , e.isPropagationStopped=i, e.stopImmediatePropagation=function() {
                n.stopImmediatePropagation&&n.stopImmediatePropagation(), e.isImmediatePropagationStopped=t, e.stopPropagation()
            }

            , e.isImmediatePropagationStopped=i, null !==e.clientX&&void 0 !==e.clientX) {
            var a=document__default.default.documentElement,
            s=document__default.default.body;
            e.pageX=e.clientX+(a&&a.scrollLeft||s&&s.scrollLeft||0)-(a&&a.clientLeft||s&&s.clientLeft||0),
            e.pageY=e.clientY+(a&&a.scrollTop||s&&s.scrollTop||0)-(a&&a.clientTop||s&&s.clientTop||0)
        }

        e.which=e.charCode||e.keyCode,
        null !==e.button&&void 0 !==e.button&&(e.button=1&e.button?0:4&e.button?1:2&e.button?2:0)
    }

    return e.fixed_= !0,
    e
}

var supportsPassive=function() {
    if("boolean" !=typeof _supportsPassive) {
        _supportsPassive= !1;

        try {
            var e=Object.defineProperty( {}

                , "passive", {
                    get:function() {
                        _supportsPassive= !0
                    }
                }

            );
            window__default.default.addEventListener("test", null, e),
            window__default.default.removeEventListener("test", null, e)
        }

        catch(e) {}
    }

    return _supportsPassive
}

,
passiveEvents=["touchstart",
"touchmove"];

function on(e, t, i) {
    if(Array.isArray(t))return _handleMultipleEvents(on, e, t, i);

    DomData.has(e)||DomData.set(e, {}

    );
    var n=DomData.get(e);

    if(n.handlers||(n.handlers= {}

        ), n.handlers[t]||(n.handlers[t]=[]), i.guid||(i.guid=newGUID()), n.handlers[t].push(i), n.dispatcher||(n.disabled= !1, n.dispatcher=function(t, i) {
                if( !n.disabled) {
                    t=fixEvent(t); var r=n.handlers[t.type]; if(r)for(var a=r.slice(0), s=0, o=a.length; s<o&& !t.isImmediatePropagationStopped(); s++)try {
                        a[s].call(e, t, i)
                    }

                    catch(e) {
                        log$1.error(e)
                    }
                }
            }

        ), 1===n.handlers[t].length)if(e.addEventListener) {
        var r= !1;

        supportsPassive()&&passiveEvents.indexOf(t)>-1&&(r= {
                passive: !0
            }

        ),
        e.addEventListener(t, n.dispatcher, r)
    }

    else e.attachEvent&&e.attachEvent("on"+t, n.dispatcher)
}

function off(e, t, i) {
    if(DomData.has(e)) {
        var n=DomData.get(e);

        if(n.handlers) {
            if(Array.isArray(t))return _handleMultipleEvents(off, e, t, i);

            var r=function(e, t) {
                n.handlers[t]=[],
                _cleanUpEvents(e, t)
            }

            ;

            if(void 0 !==t) {
                var a=n.handlers[t];

                if(a)if(i) {
                    if(i.guid)for(var s=0; s<a.length; s++)a[s].guid===i.guid&&a.splice(s--, 1);
                    _cleanUpEvents(e, t)
                }

                else r(e, t)
            }

            else for(var o in n.handlers)Object.prototype.hasOwnProperty.call(n.handlers|| {}

                , o)&&r(e, o)
        }
    }
}

function trigger(e, t, i) {
    var n=DomData.has(e)?DomData.get(e): {}

    ,
    r=e.parentNode||e.ownerDocument;

    if("string"==typeof t?t= {
            type:t, target:e
        }

        :t.target||(t.target=e), t=fixEvent(t), n.dispatcher&&n.dispatcher.call(e, t, i), r&& !t.isPropagationStopped()&& !0===t.bubbles)trigger.call(null, r, t, i);

    else if( !r&& !t.defaultPrevented&&t.target&&t.target[t.type]) {
        DomData.has(t.target)||DomData.set(t.target, {}

        );
        var a=DomData.get(t.target);
        t.target[t.type]&&(a.disabled= !0, "function"==typeof t.target[t.type]&&t.target[t.type](), a.disabled= !1)
    }

    return !t.defaultPrevented
}

function one(e, t, i) {
    if(Array.isArray(t))return _handleMultipleEvents(one, e, t, i);

    var n=function n() {
        off(e, t, n),
        i.apply(this, arguments)
    }

    ;
    n.guid=i.guid=i.guid||newGUID(),
    on(e, t, n)
}

function any(e, t, i) {
    var n=function n() {
        off(e, t, n),
        i.apply(this, arguments)
    }

    ;
    n.guid=i.guid=i.guid||newGUID(),
    on(e, t, n)
}

var EVENT_MAP,
Events=Object.freeze( {
        __proto__:null, fixEvent:fixEvent, on:on, off:off, trigger:trigger, one:one, any:any
    }

),
UPDATE_REFRESH_INTERVAL=30,
bind=function(e, t, i) {
    t.guid||(t.guid=newGUID());
    var n=t.bind(e);
    return n.guid=i?i+"_"+t.guid: t.guid, n
}

,
throttle=function(e, t) {
    var i=window__default.default.performance.now();

    return function() {
        var n=window__default.default.performance.now();
        n-i>=t&&(e.apply(void 0, arguments), i=n)
    }
}

,
debounce=function(e, t, i, n) {
    var r;
    void 0===n&&(n=window__default.default);

    var a=function() {

        var a=this,
        s=arguments,
        o=function() {
            r=null,
            o=null,
            i||e.apply(a, s)
        }

        ;
         !r&&i&&e.apply(a, s),
        n.clearTimeout(r),
        r=n.setTimeout(o, t)
    }

    ;

    return a.cancel=function() {
        n.clearTimeout(r),
        r=null
    }

    ,
    a
}

,
EventTarget$2=function() {}

;

EventTarget$2.prototype.allowedEvents_= {}

,
EventTarget$2.prototype.on=function(e, t) {
    var i=this.addEventListener;

    this.addEventListener=function() {}

    ,
    on(this, e, t),
    this.addEventListener=i
}

,
EventTarget$2.prototype.addEventListener=EventTarget$2.prototype.on,
EventTarget$2.prototype.off=function(e, t) {
    off(this, e, t)
}

,
EventTarget$2.prototype.removeEventListener=EventTarget$2.prototype.off,
EventTarget$2.prototype.one=function(e, t) {
    var i=this.addEventListener;

    this.addEventListener=function() {}

    ,
    one(this, e, t),
    this.addEventListener=i
}

,
EventTarget$2.prototype.any=function(e, t) {
    var i=this.addEventListener;

    this.addEventListener=function() {}

    ,
    any(this, e, t),
    this.addEventListener=i
}

,
EventTarget$2.prototype.trigger=function(e) {
    var t=e.type||e;

    "string"==typeof e&&(e= {
            type:t
        }

    ),
    e=fixEvent(e),
    this.allowedEvents_[t]&&this["on"+t]&&this["on"+t](e),
    trigger(this, e)
}

,
EventTarget$2.prototype.dispatchEvent=EventTarget$2.prototype.trigger,
EventTarget$2.prototype.queueTrigger=function(e) {
    var t=this;
    EVENT_MAP||(EVENT_MAP=new Map);
    var i=e.type||e,
    n=EVENT_MAP.get(this);
    n||(n=new Map, EVENT_MAP.set(this, n));
    var r=n.get(i);
    n.delete(i),
    window__default.default.clearTimeout(r);

    var a=window__default.default.setTimeout((function() {
                0===n.size&&(n=null, EVENT_MAP.delete(t)), t.trigger(e)
            }

        ), 0);
    n.set(i, a)
}

;

var objName=function(e) {
    return"function"==typeof e.name?e.name(): "string"==typeof e.name?e.name:e.name_?e.name_:e.constructor&&e.constructor.name?e.constructor.name:typeof e
}

,
isEvented=function(e) {

    return e instanceof EventTarget$2|| ! !e.eventBusEl_&&["on",
    "one",
    "off",
    "trigger"].every((function(t) {
                return"function"==typeof e[t]
            }

        ))
}

,
addEventedCallback=function(e, t) {
    isEvented(e)?t(): (e.eventedCallbacks||(e.eventedCallbacks=[]), e.eventedCallbacks.push(t))
}

,
isValidEventType=function(e) {
    return"string"==typeof e&&/\S/.test(e)||Array.isArray(e)&& ! !e.length
}

,
validateTarget=function(e, t, i) {
    if( !e|| !e.nodeName&& !isEvented(e))throw new Error("Invalid target for "+objName(t)+"#"+i+"; must be a DOM node or evented object.")
}

,
validateEventType=function(e, t, i) {
    if( !isValidEventType(e))throw new Error("Invalid event type for "+objName(t)+"#"+i+"; must be a non-empty string or array.")
}

,
validateListener=function(e, t, i) {
    if("function" !=typeof e)throw new Error("Invalid listener for "+objName(t)+"#"+i+"; must be a function.")
}

,
normalizeListenArgs=function(e, t, i) {
    var n,
    r,
    a,
    s=t.length<3||t[0]===e||t[0]===e.eventBusEl_;

    return s?(n=e.eventBusEl_, t.length>=3&&t.shift(), r=t[0], a=t[1]): (n=t[0], r=t[1], a=t[2]), validateTarget(n, e, i), validateEventType(r, e, i), validateListener(a, e, i), {
        isTargetingSelf: s, target:n, type:r, listener:a=bind(e, a)
    }
}

,
listen=function(e, t, i, n) {
    validateTarget(e, e, t),
    e.nodeName?Events[t](e, i, n): e[t](i, n)
}

,
EventedMixin= {
    on:function() {
        for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n];
        var r=normalizeListenArgs(this, i, "on"),
        a=r.isTargetingSelf,
        s=r.target,
        o=r.type,
        l=r.listener;

        if(listen(s, "on", o, l),  !a) {
            var u=function() {
                return e.off(s, o, l)
            }

            ;
            u.guid=l.guid;

            var d=function() {
                return e.off("dispose", u)
            }

            ;
            d.guid=l.guid,
            listen(this, "on", "dispose", u),
            listen(s, "on", "dispose", d)
        }
    }

    ,
    one:function() {
        for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n];
        var r=normalizeListenArgs(this, i, "one"),
        a=r.isTargetingSelf,
        s=r.target,
        o=r.type,
        l=r.listener;
        if(a)listen(s, "one", o, l);

        else {
            var u=function t() {
                e.off(s, o, t);
                for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r];
                l.apply(null, n)
            }

            ;
            u.guid=l.guid,
            listen(s, "one", o, u)
        }
    }

    ,
    any:function() {
        for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n];
        var r=normalizeListenArgs(this, i, "any"),
        a=r.isTargetingSelf,
        s=r.target,
        o=r.type,
        l=r.listener;
        if(a)listen(s, "any", o, l);

        else {
            var u=function t() {
                e.off(s, o, t);
                for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r];
                l.apply(null, n)
            }

            ;
            u.guid=l.guid,
            listen(s, "any", o, u)
        }
    }

    ,
    off:function(e, t, i) {
        if( !e||isValidEventType(e))off(this.eventBusEl_, e, t);

        else {
            var n=e,
            r=t;
            validateTarget(n, this, "off"),
            validateEventType(r, this, "off"),
            validateListener(i, this, "off"),
            i=bind(this, i),
            this.off("dispose", i),
            n.nodeName?(off(n, r, i), off(n, "dispose", i)): isEvented(n)&&(n.off(r, i), n.off("dispose", i))
        }
    }

    ,
    trigger:function(e, t) {
        validateTarget(this.eventBusEl_, this, "trigger");
        var i=e&&"string" !=typeof e?e.type: e;

        if( !isValidEventType(i)) {
            var n="Invalid event type for "+objName(this)+"#trigger; must be a non-empty string or object with a type key that has a non-empty value.";
            if( !e)throw new Error(n);
            (this.log||log$1).error(n)
        }

        return trigger(this.eventBusEl_, e, t)
    }
}

;

function evented(e, t) {
    void 0===t&&(t= {}

    );
    var i=t.eventBusKey;

    if(i) {
        if( !e[i].nodeName)throw new Error('The eventBusKey "'+i+'" does not refer to an element.');
        e.eventBusEl_=e[i]
    }

    else e.eventBusEl_=createEl("span", {
            className:"vjs-event-bus"
        }

    );

    return assign(e, EventedMixin),
    e.eventedCallbacks&&e.eventedCallbacks.forEach((function(e) {
                e()
            }

        )),
    e.on("dispose", (function() {
                e.off(), [e, e.el_, e.eventBusEl_].forEach((function(e) {
                            e&&DomData.has(e)&&DomData.delete(e)
                        }

                    )), window__default.default.setTimeout((function() {
                            e.eventBusEl_=null
                        }

                    ), 0)
            }

        )),
    e
}

var StatefulMixin= {
    state: {}

    ,
    setState:function(e) {
        var t,
        i=this;

        return"function"==typeof e&&(e=e()),
        each(e, (function(e, n) {
                    i.state[n] !==e&&((t=t|| {}

                        )[n]= {
                            from:i.state[n], to:e
                        }

                    ), i.state[n]=e
                }

            )),
        t&&isEvented(this)&&this.trigger( {
                changes:t, type:"statechanged"
            }

        ),
        t
    }
}

;

function stateful(e, t) {

    return assign(e, StatefulMixin),
    e.state=assign( {}

        , e.state, t),
    "function"==typeof e.handleStateChanged&&isEvented(e)&&e.on("statechanged", e.handleStateChanged),
    e
}

var toLowerCase=function(e) {
    return"string" !=typeof e?e:e.replace(/./, (function(e) {
                return e.toLowerCase()
            }

        ))
}

,
toTitleCase$1=function(e) {
    return"string" !=typeof e?e:e.replace(/./, (function(e) {
                return e.toUpperCase()
            }

        ))
}

,
titleCaseEquals=function(e, t) {
    return toTitleCase$1(e)===toTitleCase$1(t)
}

;

function mergeOptions$3() {
    for(var e= {}

        , t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n];

    return i.forEach((function(t) {
                t&&each(t, (function(t, i) {
                            isPlain(t)?(isPlain(e[i])||(e[i]= {}

                                ), e[i]=mergeOptions$3(e[i], t)):e[i]=t
                        }

                    ))
            }

        )),
    e
}

var MapSham=function() {
    function e() {
        this.map_= {}
    }

    var t=e.prototype;

    return t.has=function(e) {
        return e in this.map_
    }

    ,
    t.delete=function(e) {
        var t=this.has(e);
        return delete this.map_[e],
        t
    }

    ,
    t.set=function(e, t) {
        return this.map_[e]=t,
        this
    }

    ,
    t.forEach=function(e, t) {
        for(var i in this.map_)e.call(t, this.map_[i], i, this)
    }

    ,
    e
}

(),
Map$1=window__default.default.Map?window__default.default.Map:MapSham,
SetSham=function() {
    function e() {
        this.set_= {}
    }

    var t=e.prototype;

    return t.has=function(e) {
        return e in this.set_
    }

    ,
    t.delete=function(e) {
        var t=this.has(e);
        return delete this.set_[e],
        t
    }

    ,
    t.add=function(e) {
        return this.set_[e]=1,
        this
    }

    ,
    t.forEach=function(e, t) {
        for(var i in this.set_)e.call(t, i, i, this)
    }

    ,
    e
}

(),
Set$1=window__default.default.Set?window__default.default.Set:SetSham,
Component$1=function() {
    function e(e, t, i) {
        var n=this;

        if( !e&&this.play?this.player_=e=this:this.player_=e, this.isDisposed_= !1, this.parentComponent_=null, this.options_=mergeOptions$3( {}

                , this.options_), t=this.options_=mergeOptions$3(this.options_, t), this.id_=t.id||t.el&&t.el.id,  !this.id_) {
            var r=e&&e.id&&e.id()||"no_player";
            this.id_=r+"_component_"+newGUID()
        }

        this.name_=t.name||null,
        t.el?this.el_=t.el: !1 !==t.createEl&&(this.el_=this.createEl()),
        t.className&&this.el_&&t.className.split(" ").forEach((function(e) {
                    return n.addClass(e)
                }

            )),
         !1 !==t.evented&&(evented(this, {
                    eventBusKey:this.el_?"el_":null
                }

            ), this.handleLanguagechange=this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)),
        stateful(this, this.constructor.defaultState),
        this.children_=[],
        this.childIndex_= {}

        ,
        this.childNameIndex_= {}

        ,
        this.setTimeoutIds_=new Set$1,
        this.setIntervalIds_=new Set$1,
        this.rafIds_=new Set$1,
        this.namedRafs_=new Map$1,
        this.clearingTimersOnDispose_= !1,
         !1 !==t.initChildren&&this.initChildren(),
        this.ready(i),
         !1 !==t.reportTouchActivity&&this.enableTouchActivity()
    }

    var t=e.prototype;

    return t.dispose=function(e) {
        if(void 0===e&&(e= {}

            ),  !this.isDisposed_) {
            if(this.readyQueue_&&(this.readyQueue_.length=0), this.trigger( {
                        type:"dispose", bubbles: !1
                    }

                ), this.isDisposed_= !0, this.children_)for(var t=this.children_.length-1; t>=0; t--)this.children_[t].dispose&&this.children_[t].dispose();
            this.children_=null,
            this.childIndex_=null,
            this.childNameIndex_=null,
            this.parentComponent_=null,
            this.el_&&(this.el_.parentNode&&(e.restoreEl?this.el_.parentNode.replaceChild(e.restoreEl, this.el_):this.el_.parentNode.removeChild(this.el_)), this.el_=null),
            this.player_=null
        }
    }

    ,
    t.isDisposed=function() {
        return Boolean(this.isDisposed_)
    }

    ,
    t.player=function() {
        return this.player_
    }

    ,
    t.options=function(e) {
        return e?(this.options_=mergeOptions$3(this.options_, e), this.options_): this.options_
    }

    ,
    t.el=function() {
        return this.el_
    }

    ,
    t.createEl=function(e, t, i) {
        return createEl(e, t, i)
    }

    ,
    t.localize=function(e, t, i) {
        void 0===i&&(i=e);
        var n=this.player_.language&&this.player_.language(),
        r=this.player_.languages&&this.player_.languages(),
        a=r&&r[n],
        s=n&&n.split("-")[0],
        o=r&&r[s],
        l=i;

        return a&&a[e]?l=a[e]:o&&o[e]&&(l=o[e]),
        t&&(l=l.replace(/\{(\d+)\}/g, (function(e, i) {
                        var n=t[i-1], r=n; return void 0===n&&(r=e), r
                    }

                ))),
        l
    }

    ,
    t.handleLanguagechange=function() {}

    ,
    t.contentEl=function() {
        return this.contentEl_||this.el_
    }

    ,
    t.id=function() {
        return this.id_
    }

    ,
    t.name=function() {
        return this.name_
    }

    ,
    t.children=function() {
        return this.children_
    }

    ,
    t.getChildById=function(e) {
        return this.childIndex_[e]
    }

    ,
    t.getChild=function(e) {
        if(e)return this.childNameIndex_[e]
    }

    ,
    t.getDescendant=function() {
        for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i];

        t=t.reduce((function(e, t) {
                    return e.concat(t)
                }

            ), []);
        for(var n=this, r=0; r<t.length; r++)if( !(n=n.getChild(t[r]))|| !n.getChild)return;
        return n
    }

    ,
    t.addChild=function(t, i, n) {
        var r,
        a;

        if(void 0===i&&(i= {}

            ), void 0===n&&(n=this.children_.length), "string"==typeof t) {
            a=toTitleCase$1(t);
            var s=i.componentClass||a;
            i.name=a;
            var o=e.getComponent(s);
            if( !o)throw new Error("Component "+s+" does not exist");
            if("function" !=typeof o)return null;
            r=new o(this.player_||this, i)
        }

        else r=t;

        if(r.parentComponent_&&r.parentComponent_.removeChild(r), this.children_.splice(n, 0, r), r.parentComponent_=this, "function"==typeof r.id&&(this.childIndex_[r.id()]=r), (a=a||r.name&&toTitleCase$1(r.name()))&&(this.childNameIndex_[a]=r, this.childNameIndex_[toLowerCase(a)]=r), "function"==typeof r.el&&r.el()) {
            var l=null;
            this.children_[n+1]&&(this.children_[n+1].el_?l=this.children_[n+1].el_:isEl(this.children_[n+1])&&(l=this.children_[n+1])),
            this.contentEl().insertBefore(r.el(), l)
        }

        return r
    }

    ,
    t.removeChild=function(e) {
        if("string"==typeof e&&(e=this.getChild(e)), e&&this.children_) {
            for(var t= !1, i=this.children_.length-1; i>=0; i--)if(this.children_[i]===e) {
                t= !0,
                this.children_.splice(i, 1);
                break
            }

            if(t) {
                e.parentComponent_=null,
                this.childIndex_[e.id()]=null,
                this.childNameIndex_[toTitleCase$1(e.name())]=null,
                this.childNameIndex_[toLowerCase(e.name())]=null;
                var n=e.el();
                n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(e.el())
            }
        }
    }

    ,
    t.initChildren=function() {
        var t=this,
        i=this.options_.children;

        if(i) {
            var n,
            r=this.options_,
            a=e.getComponent("Tech");

            (n=Array.isArray(i)?i:Object.keys(i)).concat(Object.keys(this.options_).filter((function(e) {
                            return !n.some((function(t) {
                                        return"string"==typeof t?e===t:e===t.name
                                    }

                                ))
                        }

                    ))).map((function(e) {
                        var n, r; return"string"==typeof e?r=i[n=e]||t.options_[n]|| {}

                        :(n=e.name, r=e), {
                            name:n, opts:r
                        }
                    }

                )).filter((function(t) {
                        var i=e.getComponent(t.opts.componentClass||toTitleCase$1(t.name)); return i&& !a.isTech(i)
                    }

                )).forEach((function(e) {
                        var i=e.name, n=e.opts; if(void 0 !==r[i]&&(n=r[i]),  !1 !==n) {
                             !0===n&&(n= {}

                            ), n.playerOptions=t.options_.playerOptions; var a=t.addChild(i, n); a&&(t[i]=a)
                        }
                    }

                ))
        }
    }

    ,
    t.buildCSSClass=function() {
        return""
    }

    ,
    t.ready=function(e, t) {
        if(void 0===t&&(t= !1), e)return this.isReady_?void(t?e.call(this):this.setTimeout(e, 1)): (this.readyQueue_=this.readyQueue_||[], void this.readyQueue_.push(e))
    }

    ,
    t.triggerReady=function() {

        this.isReady_= !0,
        this.setTimeout((function() {
                    var e=this.readyQueue_; this.readyQueue_=[], e&&e.length>0&&e.forEach((function(e) {
                                e.call(this)
                            }

                        ), this), this.trigger("ready")
                }

            ), 1)
    }

    ,
    t.$=function(e, t) {
        return $(e, t||this.contentEl())
    }

    ,
    t.$$=function(e, t) {
        return $$(e, t||this.contentEl())
    }

    ,
    t.hasClass=function(e) {
        return hasClass(this.el_, e)
    }

    ,
    t.addClass=function(e) {
        addClass(this.el_, e)
    }

    ,
    t.removeClass=function(e) {
        removeClass(this.el_, e)
    }

    ,
    t.toggleClass=function(e, t) {
        toggleClass(this.el_, e, t)
    }

    ,
    t.show=function() {
        this.removeClass("vjs-hidden")
    }

    ,
    t.hide=function() {
        this.addClass("vjs-hidden")
    }

    ,
    t.lockShowing=function() {
        this.addClass("vjs-lock-showing")
    }

    ,
    t.unlockShowing=function() {
        this.removeClass("vjs-lock-showing")
    }

    ,
    t.getAttribute=function(e) {
        return getAttribute(this.el_, e)
    }

    ,
    t.setAttribute=function(e, t) {
        setAttribute(this.el_, e, t)
    }

    ,
    t.removeAttribute=function(e) {
        removeAttribute(this.el_, e)
    }

    ,
    t.width=function(e, t) {
        return this.dimension("width", e, t)
    }

    ,
    t.height=function(e, t) {
        return this.dimension("height", e, t)
    }

    ,
    t.dimensions=function(e, t) {
        this.width(e,  !0),
        this.height(t)
    }

    ,
    t.dimension=function(e, t, i) {
        if(void 0 !==t)return null !==t&&t==t||(t=0),
        -1 !==(""+t).indexOf("%")||-1 !==(""+t).indexOf("px")?this.el_.style[e]=t: this.el_.style[e]="auto"===t?"":t+"px", void(i||this.trigger("componentresize"));
        if( !this.el_)return 0;
        var n=this.el_.style[e],
        r=n.indexOf("px");
        return-1 !==r?parseInt(n.slice(0, r), 10): parseInt(this.el_["offset"+toTitleCase$1(e)], 10)
    }

    ,
    t.currentDimension=function(e) {
        var t=0;
        if("width" !==e&&"height" !==e)throw new Error("currentDimension only accepts width or height value");

        if(t=computedStyle(this.el_, e), 0===(t=parseFloat(t))||isNaN(t)) {
            var i="offset"+toTitleCase$1(e);
            t=this.el_[i]
        }

        return t
    }

    ,
    t.currentDimensions=function() {
        return {
            width: this.currentDimension("width"), height:this.currentDimension("height")
        }
    }

    ,
    t.currentWidth=function() {
        return this.currentDimension("width")
    }

    ,
    t.currentHeight=function() {
        return this.currentDimension("height")
    }

    ,
    t.focus=function() {
        this.el_.focus()
    }

    ,
    t.blur=function() {
        this.el_.blur()
    }

    ,
    t.handleKeyDown=function(e) {
        this.player_&&(keycode__default.default.isEventKey(e, "Tab")||e.stopPropagation(), this.player_.handleKeyDown(e))
    }

    ,
    t.handleKeyPress=function(e) {
        this.handleKeyDown(e)
    }

    ,
    t.emitTapEvents=function() {
        var e,
        t=0,
        i=null;

        this.on("touchstart", (function(n) {
                    1===n.touches.length&&(i= {
                            pageX:n.touches[0].pageX, pageY:n.touches[0].pageY
                        }

                        , t=window__default.default.performance.now(), e= !0)
                }

            )),
        this.on("touchmove", (function(t) {
                    if(t.touches.length>1)e= !1; else if(i) {
                        var n=t.touches[0].pageX-i.pageX, r=t.touches[0].pageY-i.pageY; Math.sqrt(n*n+r*r)>10&&(e= !1)
                    }
                }

            ));

        var n=function() {
            e= !1
        }

        ;

        this.on("touchleave", n),
        this.on("touchcancel", n),
        this.on("touchend", (function(n) {
                    i=null,  !0===e&&window__default.default.performance.now()-t<200&&(n.preventDefault(), this.trigger("tap"))
                }

            ))
    }

    ,
    t.enableTouchActivity=function() {
        if(this.player()&&this.player().reportUserActivity) {
            var e,
            t=bind(this.player(), this.player().reportUserActivity);

            this.on("touchstart", (function() {
                        t(), this.clearInterval(e), e=this.setInterval(t, 250)
                    }

                ));

            var i=function(i) {
                t(),
                this.clearInterval(e)
            }

            ;
            this.on("touchmove", t),
            this.on("touchend", i),
            this.on("touchcancel", i)
        }
    }

    ,
    t.setTimeout=function(e, t) {
        var i,
        n=this;

        return e=bind(this, e),
        this.clearTimersOnDispose_(),
        i=window__default.default.setTimeout((function() {
                    n.setTimeoutIds_.has(i)&&n.setTimeoutIds_.delete(i), e()
                }

            ), t),
        this.setTimeoutIds_.add(i),
        i
    }

    ,
    t.clearTimeout=function(e) {
        return this.setTimeoutIds_.has(e)&&(this.setTimeoutIds_.delete(e), window__default.default.clearTimeout(e)),
        e
    }

    ,
    t.setInterval=function(e, t) {
        e=bind(this, e),
        this.clearTimersOnDispose_();
        var i=window__default.default.setInterval(e, t);
        return this.setIntervalIds_.add(i),
        i
    }

    ,
    t.clearInterval=function(e) {
        return this.setIntervalIds_.has(e)&&(this.setIntervalIds_.delete(e), window__default.default.clearInterval(e)),
        e
    }

    ,
    t.requestAnimationFrame=function(e) {
        var t,
        i=this;

        return this.supportsRaf_?(this.clearTimersOnDispose_(), e=bind(this, e), t=window__default.default.requestAnimationFrame((function() {
                        i.rafIds_.has(t)&&i.rafIds_.delete(t), e()
                    }

                )), this.rafIds_.add(t), t):this.setTimeout(e, 1e3/60)
    }

    ,
    t.requestNamedAnimationFrame=function(e, t) {
        var i=this;

        if( !this.namedRafs_.has(e)) {
            this.clearTimersOnDispose_(),
            t=bind(this, t);

            var n=this.requestAnimationFrame((function() {
                        t(), i.namedRafs_.has(e)&&i.namedRafs_.delete(e)
                    }

                ));
            return this.namedRafs_.set(e, n),
            e
        }
    }

    ,
    t.cancelNamedAnimationFrame=function(e) {
        this.namedRafs_.has(e)&&(this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
    }

    ,
    t.cancelAnimationFrame=function(e) {
        return this.supportsRaf_?(this.rafIds_.has(e)&&(this.rafIds_.delete(e), window__default.default.cancelAnimationFrame(e)), e): this.clearTimeout(e)
    }

    ,
    t.clearTimersOnDispose_=function() {
        var e=this;

        this.clearingTimersOnDispose_||(this.clearingTimersOnDispose_= !0, this.one("dispose", (function() {
                        [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach((function(t) {
                                    var i=t[0], n=t[1]; e[i].forEach((function(t, i) {
                                                return e[n](i)
                                            }

                                        ))
                                }

                            )), e.clearingTimersOnDispose_= !1
                    }

                )))
    }

    ,
    e.registerComponent=function(t, i) {
        if("string" !=typeof t|| !t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');
        var n=e.getComponent("Tech"),
        r=n&&n.isTech(i),
        a=e===i||e.prototype.isPrototypeOf(i.prototype);
        if(r|| !a)throw new Error('Illegal component, "'+t+'"; '+(r?"techs must be registered using Tech.registerTech()":"must be a Component subclass")+".");

        t=toTitleCase$1(t),
        e.components_||(e.components_= {}

        );
        var s=e.getComponent("Player");

        if("Player"===t&&s&&s.players) {
            var o=s.players,
            l=Object.keys(o);

            if(o&&l.length>0&&l.map((function(e) {
                            return o[e]
                        }

                    )).every(Boolean))throw new Error("Can not register Player component after player has been created.")
        }

        return e.components_[t]=i,
        e.components_[toLowerCase(t)]=i,
        i
    }

    ,
    e.getComponent=function(t) {
        if(t&&e.components_)return e.components_[t]
    }

    ,
    e
}

();

function rangeCheck(e, t, i) {
    if("number" !=typeof t||t<0||t>i)throw new Error("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+t+") is non-numeric or out of bounds (0-"+i+").")
}

function getRange(e, t, i, n) {
    return rangeCheck(e, n, i.length-1),
    i[n][t]
}

function createTimeRangesObj(e) {
    var t;

    return t=void 0===e||0===e.length? {

        length:0,
        start:function() {
            throw new Error("This TimeRanges object is empty")
        }

        ,
        end:function() {
            throw new Error("This TimeRanges object is empty")
        }
    }

    : {
        length: e.length, start:getRange.bind(null, "start", 0, e), end:getRange.bind(null, "end", 1, e)
    }

    ,
    window__default.default.Symbol&&window__default.default.Symbol.iterator&&(t[window__default.default.Symbol.iterator]=function() {
            return(e||[]).values()
        }

    ),
    t
}

function createTimeRanges(e, t) {
    return Array.isArray(e)?createTimeRangesObj(e): void 0===e||void 0===t?createTimeRangesObj():createTimeRangesObj([[e, t]])
}

function bufferedPercent(e, t) {
    var i,
    n,
    r=0;
    if( !t)return 0;
    e&&e.length||(e=createTimeRanges(0, 0));
    for(var a=0; a<e.length; a++)i=e.start(a),
    (n=e.end(a))>t&&(n=t),
    r+=n-i;
    return r/t
}

function MediaError(e) {
    if(e instanceof MediaError)return e;
    "number"==typeof e?this.code=e: "string"==typeof e?this.message=e:isObject(e)&&("number"==typeof e.code&&(this.code=e.code), assign(this, e)), this.message||(this.message=MediaError.defaultMessages[this.code]||"")
}

Component$1.prototype.supportsRaf_="function"==typeof window__default.default.requestAnimationFrame&&"function"==typeof window__default.default.cancelAnimationFrame,
Component$1.registerComponent("Component", Component$1),
MediaError.prototype.code=0,
MediaError.prototype.message="",
MediaError.prototype.status=null,
MediaError.errorTypes=["MEDIA_ERR_CUSTOM",
"MEDIA_ERR_ABORTED",
"MEDIA_ERR_NETWORK",
"MEDIA_ERR_DECODE",
"MEDIA_ERR_SRC_NOT_SUPPORTED",
"MEDIA_ERR_ENCRYPTED"],
MediaError.defaultMessages= {
    1: "You aborted the media playback", 2:"A network error caused the media download to fail part-way.", 3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4:"The media could not be loaded, either because the server or network failed or because the format is not supported.", 5:"The media is encrypted and we do not have the keys to decrypt it."
}

;
for(var errNum=0; errNum<MediaError.errorTypes.length; errNum++)MediaError[MediaError.errorTypes[errNum]]=errNum,
MediaError.prototype[MediaError.errorTypes[errNum]]=errNum;

function isPromise(e) {
    return null !=e&&"function"==typeof e.then
}

function silencePromise(e) {
    isPromise(e)&&e.then(null, (function(e) {}

        ))
}

var trackToJson_=function(e) {

    return["kind",
    "label",
    "language",
    "id",
    "inBandMetadataTrackDispatchType",
    "mode",
    "src"].reduce((function(t, i, n) {
                return e[i]&&(t[i]=e[i]), t
            }

        ), {
            cues:e.cues&&Array.prototype.map.call(e.cues, (function(e) {
                        return {
                            startTime:e.startTime, endTime:e.endTime, text:e.text, id:e.id
                        }
                    }

                ))
        }

    )
}

,
textTracksToJson=function(e) {

    var t=e.$$("track"),
    i=Array.prototype.map.call(t, (function(e) {
                return e.track
            }

        ));

    return Array.prototype.map.call(t, (function(e) {
                var t=trackToJson_(e.track); return e.src&&(t.src=e.src), t
            }

        )).concat(Array.prototype.filter.call(e.textTracks(), (function(e) {
                    return-1===i.indexOf(e)
                }

            )).map(trackToJson_))
}

,
jsonToTextTracks=function(e, t) {
    return e.forEach((function(e) {
                var i=t.addRemoteTextTrack(e).track;  !e.src&&e.cues&&e.cues.forEach((function(e) {
                            return i.addCue(e)
                        }

                    ))
            }

        )),
    t.textTracks()
}

,
textTrackConverter= {
    textTracksToJson: textTracksToJson, jsonToTextTracks:jsonToTextTracks, trackToJson_:trackToJson_
}

,
MODAL_CLASS_NAME="vjs-modal-dialog",
ModalDialog=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).handleKeyDown_=function(e) {
            return n.handleKeyDown(e)
        }

        ,
        n.close_=function(e) {
            return n.close(e)
        }

        ,
        n.opened_=n.hasBeenOpened_=n.hasBeenFilled_= !1,
        n.closeable( !n.options_.uncloseable),
        n.content(n.options_.content),
        n.contentEl_=createEl("div", {
                className:MODAL_CLASS_NAME+"-content"
            }

            , {
                role:"document"
            }

        ),
        n.descEl_=createEl("p", {
                className:MODAL_CLASS_NAME+"-description vjs-control-text", id:n.el().getAttribute("aria-describedby")
            }

        ),
        textContent(n.descEl_, n.description()),
        n.el_.appendChild(n.descEl_),
        n.el_.appendChild(n.contentEl_),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:this.buildCSSClass(), tabIndex:-1
            }

            , {
                "aria-describedby":this.id()+"_description", "aria-hidden":"true", "aria-label":this.label(), role:"dialog"
            }

        )
    }

    ,
    i.dispose=function() {
        this.contentEl_=null,
        this.descEl_=null,
        this.previouslyActiveEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.buildCSSClass=function() {
        return MODAL_CLASS_NAME+" vjs-hidden "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.label=function() {
        return this.localize(this.options_.label||"Modal Window")
    }

    ,
    i.description=function() {
        var e=this.options_.description||this.localize("This is a modal window.");
        return this.closeable()&&(e+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
        e
    }

    ,
    i.open=function() {
        if( !this.opened_) {
            var e=this.player();
            this.trigger("beforemodalopen"),
            this.opened_= !0,
            (this.options_.fillAlways|| !this.hasBeenOpened_&& !this.hasBeenFilled_)&&this.fill(),
            this.wasPlaying_= !e.paused(),
            this.options_.pauseOnOpen&&this.wasPlaying_&&e.pause(),
            this.on("keydown", this.handleKeyDown_),
            this.hadControls_=e.controls(),
            e.controls( !1),
            this.show(),
            this.conditionalFocus_(),
            this.el().setAttribute("aria-hidden", "false"),
            this.trigger("modalopen"),
            this.hasBeenOpened_= !0
        }
    }

    ,
    i.opened=function(e) {
        return"boolean"==typeof e&&this[e?"open": "close"](), this.opened_
    }

    ,
    i.close=function() {
        if(this.opened_) {
            var e=this.player();
            this.trigger("beforemodalclose"),
            this.opened_= !1,
            this.wasPlaying_&&this.options_.pauseOnOpen&&e.play(),
            this.off("keydown", this.handleKeyDown_),
            this.hadControls_&&e.controls( !0),
            this.hide(),
            this.el().setAttribute("aria-hidden", "true"),
            this.trigger("modalclose"),
            this.conditionalBlur_(),
            this.options_.temporary&&this.dispose()
        }
    }

    ,
    i.closeable=function(e) {
        if("boolean"==typeof e) {
            var t=this.closeable_= ! !e,
            i=this.getChild("closeButton");

            if(t&& !i) {
                var n=this.contentEl_;

                this.contentEl_=this.el_,
                i=this.addChild("closeButton", {
                        controlText:"Close Modal Dialog"
                    }

                ),
                this.contentEl_=n,
                this.on(i, "close", this.close_)
            }

             !t&&i&&(this.off(i, "close", this.close_), this.removeChild(i), i.dispose())
        }

        return this.closeable_
    }

    ,
    i.fill=function() {
        this.fillWith(this.content())
    }

    ,
    i.fillWith=function(e) {
        var t=this.contentEl(),
        i=t.parentNode,
        n=t.nextSibling;
        this.trigger("beforemodalfill"),
        this.hasBeenFilled_= !0,
        i.removeChild(t),
        this.empty(),
        insertContent(t, e),
        this.trigger("modalfill"),
        n?i.insertBefore(t, n): i.appendChild(t);
        var r=this.getChild("closeButton");
        r&&i.appendChild(r.el_)
    }

    ,
    i.empty=function() {
        this.trigger("beforemodalempty"),
        emptyEl(this.contentEl()),
        this.trigger("modalempty")
    }

    ,
    i.content=function(e) {
        return void 0 !==e&&(this.content_=e),
        this.content_
    }

    ,
    i.conditionalFocus_=function() {
        var e=document__default.default.activeElement,
        t=this.player_.el_;
        this.previouslyActiveEl_=null,
        (t.contains(e)||t===e)&&(this.previouslyActiveEl_=e, this.focus())
    }

    ,
    i.conditionalBlur_=function() {
        this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(), this.previouslyActiveEl_=null)
    }

    ,
    i.handleKeyDown=function(e) {
        if(e.stopPropagation(), keycode__default.default.isEventKey(e, "Escape")&&this.closeable())return e.preventDefault(),
        void this.close();

        if(keycode__default.default.isEventKey(e, "Tab")) {
            for(var t, i=this.focusableEls_(), n=this.el_.querySelector(":focus"), r=0; r<i.length; r++)if(n===i[r]) {
                t=r;
                break
            }

            document__default.default.activeElement===this.el_&&(t=0),
            e.shiftKey&&0===t?(i[i.length-1].focus(), e.preventDefault()):e.shiftKey||t !==i.length-1||(i[0].focus(), e.preventDefault())
        }
    }

    ,
    i.focusableEls_=function() {
        var e=this.el_.querySelectorAll("*");

        return Array.prototype.filter.call(e, (function(e) {
                    return(e instanceof window__default.default.HTMLAnchorElement||e instanceof window__default.default.HTMLAreaElement)&&e.hasAttribute("href")||(e instanceof window__default.default.HTMLInputElement||e instanceof window__default.default.HTMLSelectElement||e instanceof window__default.default.HTMLTextAreaElement||e instanceof window__default.default.HTMLButtonElement)&& !e.hasAttribute("disabled")||e instanceof window__default.default.HTMLIFrameElement||e instanceof window__default.default.HTMLObjectElement||e instanceof window__default.default.HTMLEmbedElement||e.hasAttribute("tabindex")&&-1 !==e.getAttribute("tabindex")||e.hasAttribute("contenteditable")
                }

            ))
    }

    ,
    t
}

(Component$1);

ModalDialog.prototype.options_= {
    pauseOnOpen:  !0, temporary: !0
}

,
Component$1.registerComponent("ModalDialog", ModalDialog);

var TrackList=function(e) {
    function t(t) {
        var i;

        void 0===t&&(t=[]),
        (i=e.call(this)||this).tracks_=[],
        Object.defineProperty(_assertThisInitialized__default.default(i), "length", {
                get:function() {
                    return this.tracks_.length
                }
            }

        );
        for(var n=0; n<t.length; n++)i.addTrack(t[n]);
        return i
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.addTrack=function(e) {
        var t=this,
        i=this.tracks_.length;

        ""+i in this||Object.defineProperty(this, i, {
                get:function() {
                    return this.tracks_[i]
                }
            }

        ),
        -1===this.tracks_.indexOf(e)&&(this.tracks_.push(e), this.trigger( {
                    track:e, type:"addtrack", target:this
                }

            )),
        e.labelchange_=function() {
            t.trigger( {
                    track:e, type:"labelchange", target:t
                }

            )
        }

        ,
        isEvented(e)&&e.addEventListener("labelchange", e.labelchange_)
    }

    ,
    i.removeTrack=function(e) {
        for(var t, i=0, n=this.length; i<n; i++)if(this[i]===e) {
            (t=this[i]).off&&t.off(),
            this.tracks_.splice(i, 1);
            break
        }

        t&&this.trigger( {
                track:t, type:"removetrack", target:this
            }

        )
    }

    ,
    i.getTrackById=function(e) {
        for(var t=null, i=0, n=this.length; i<n; i++) {
            var r=this[i];

            if(r.id===e) {
                t=r;
                break
            }
        }

        return t
    }

    ,
    t
}

(EventTarget$2);

for(var event in TrackList.prototype.allowedEvents_= {
        change:"change", addtrack:"addtrack", removetrack:"removetrack", labelchange:"labelchange"
    }

    , TrackList.prototype.allowedEvents_)TrackList.prototype["on"+event]=null;

var disableOthers$1=function(e, t) {
    for(var i=0; i<e.length; i++)Object.keys(e[i]).length&&t.id !==e[i].id&&(e[i].enabled= !1)
}

,
AudioTrackList=function(e) {
    function t(t) {
        var i;
        void 0===t&&(t=[]);

        for(var n=t.length-1; n>=0; n--)if(t[n].enabled) {
            disableOthers$1(t, t[n]);
            break
        }

        return(i=e.call(this, t)||this).changing_= !1,
        i
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.addTrack=function(t) {
        var i=this;

        t.enabled&&disableOthers$1(this, t),
        e.prototype.addTrack.call(this, t),
        t.addEventListener&&(t.enabledChange_=function() {
                i.changing_||(i.changing_= !0, disableOthers$1(i, t), i.changing_= !1, i.trigger("change"))
            }

            , t.addEventListener("enabledchange", t.enabledChange_))
    }

    ,
    i.removeTrack=function(t) {
        e.prototype.removeTrack.call(this, t),
        t.removeEventListener&&t.enabledChange_&&(t.removeEventListener("enabledchange", t.enabledChange_), t.enabledChange_=null)
    }

    ,
    t
}

(TrackList),
disableOthers=function(e, t) {
    for(var i=0; i<e.length; i++)Object.keys(e[i]).length&&t.id !==e[i].id&&(e[i].selected= !1)
}

,
VideoTrackList=function(e) {
    function t(t) {
        var i;
        void 0===t&&(t=[]);

        for(var n=t.length-1; n>=0; n--)if(t[n].selected) {
            disableOthers(t, t[n]);
            break
        }

        return(i=e.call(this, t)||this).changing_= !1,
        Object.defineProperty(_assertThisInitialized__default.default(i), "selectedIndex", {
                get:function() {
                    for(var e=0; e<this.length; e++)if(this[e].selected)return e; return-1
                }

                , set:function() {}
            }

        ),
        i
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.addTrack=function(t) {
        var i=this;

        t.selected&&disableOthers(this, t),
        e.prototype.addTrack.call(this, t),
        t.addEventListener&&(t.selectedChange_=function() {
                i.changing_||(i.changing_= !0, disableOthers(i, t), i.changing_= !1, i.trigger("change"))
            }

            , t.addEventListener("selectedchange", t.selectedChange_))
    }

    ,
    i.removeTrack=function(t) {
        e.prototype.removeTrack.call(this, t),
        t.removeEventListener&&t.selectedChange_&&(t.removeEventListener("selectedchange", t.selectedChange_), t.selectedChange_=null)
    }

    ,
    t
}

(TrackList),
TextTrackList=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.addTrack=function(t) {
        var i=this;

        e.prototype.addTrack.call(this, t),
        this.queueChange_||(this.queueChange_=function() {
                return i.queueTrigger("change")
            }

        ),
        this.triggerSelectedlanguagechange||(this.triggerSelectedlanguagechange_=function() {
                return i.trigger("selectedlanguagechange")
            }

        ),
        t.addEventListener("modechange", this.queueChange_),
        -1===["metadata",
        "chapters"].indexOf(t.kind)&&t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
    }

    ,
    i.removeTrack=function(t) {
        e.prototype.removeTrack.call(this, t),
        t.removeEventListener&&(this.queueChange_&&t.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_&&t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
    }

    ,
    t
}

(TrackList),
HtmlTrackElementList=function() {
    function e(e) {

        void 0===e&&(e=[]),
        this.trackElements_=[],
        Object.defineProperty(this, "length", {
                get:function() {
                    return this.trackElements_.length
                }
            }

        );
        for(var t=0, i=e.length; t<i; t++)this.addTrackElement_(e[t])
    }

    var t=e.prototype;

    return t.addTrackElement_=function(e) {
        var t=this.trackElements_.length;

        ""+t in this||Object.defineProperty(this, t, {
                get:function() {
                    return this.trackElements_[t]
                }
            }

        ),
        -1===this.trackElements_.indexOf(e)&&this.trackElements_.push(e)
    }

    ,
    t.getTrackElementByTrack_=function(e) {
        for(var t, i=0, n=this.trackElements_.length; i<n; i++)if(e===this.trackElements_[i].track) {
            t=this.trackElements_[i];
            break
        }

        return t
    }

    ,
    t.removeTrackElement_=function(e) {
        for(var t=0, i=this.trackElements_.length; t<i; t++)if(e===this.trackElements_[t]) {
            this.trackElements_[t].track&&"function"==typeof this.trackElements_[t].track.off&&this.trackElements_[t].track.off(),
            "function"==typeof this.trackElements_[t].off&&this.trackElements_[t].off(),
            this.trackElements_.splice(t, 1);
            break
        }
    }

    ,
    e
}

(),
TextTrackCueList=function() {
    function e(t) {

        e.prototype.setCues_.call(this, t),
        Object.defineProperty(this, "length", {
                get:function() {
                    return this.length_
                }
            }

        )
    }

    var t=e.prototype;

    return t.setCues_=function(e) {
        var t=this.length||0,
        i=0,
        n=e.length;
        this.cues_=e,
        this.length_=e.length;

        var r=function(e) {
            ""+e in this||Object.defineProperty(this, ""+e, {
                    get:function() {
                        return this.cues_[e]
                    }
                }

            )
        }

        ;
        if(t<n)for(i=t; i<n; i++)r.call(this, i)
    }

    ,
    t.getCueById=function(e) {
        for(var t=null, i=0, n=this.length; i<n; i++) {
            var r=this[i];

            if(r.id===e) {
                t=r;
                break
            }
        }

        return t
    }

    ,
    e
}

(),
VideoTrackKind= {
    alternative: "alternative", captions:"captions", main:"main", sign:"sign", subtitles:"subtitles", commentary:"commentary"
}

,
AudioTrackKind= {
    alternative: "alternative", descriptions:"descriptions", main:"main", "main-desc":"main-desc", translation:"translation", commentary:"commentary"
}

,
TextTrackKind= {
    subtitles: "subtitles", captions:"captions", descriptions:"descriptions", chapters:"chapters", metadata:"metadata"
}

,
TextTrackMode= {
    disabled: "disabled", hidden:"hidden", showing:"showing"
}

,
Track=function(e) {
    function t(t) {
        var i;

        void 0===t&&(t= {}

        ),
        i=e.call(this)||this;

        var n= {
            id: t.id||"vjs_track_"+newGUID(), kind:t.kind||"", language:t.language||""
        }

        ,
        r=t.label||"",
        a=function(e) {
            Object.defineProperty(_assertThisInitialized__default.default(i), e, {
                    get:function() {
                        return n[e]
                    }

                    , set:function() {}
                }

            )
        }

        ;
        for(var s in n)a(s);

        return Object.defineProperty(_assertThisInitialized__default.default(i), "label", {
                get:function() {
                    return r
                }

                , set:function(e) {
                    e !==r&&(r=e, this.trigger("labelchange"))
                }
            }

        ),
        i
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(EventTarget$2),
parseUrl=function(e) {
    var t=["protocol",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash",
    "host"],
    i=document__default.default.createElement("a");
    i.href=e;

    for(var n= {}

        , r=0; r<t.length; r++)n[t[r]]=i[t[r]];
    return"http:"===n.protocol&&(n.host=n.host.replace(/:80$/, "")),
    "https:"===n.protocol&&(n.host=n.host.replace(/:443$/, "")),
    n.protocol||(n.protocol=window__default.default.location.protocol),
    n.host||(n.host=window__default.default.location.host),
    n
}

,
getAbsoluteURL=function(e) {
    if( !e.match(/^https?:\/\//)) {
        var t=document__default.default.createElement("a");
        t.href=e,
        e=t.href
    }

    return e
}

,
getFileExtension=function(e) {
    if("string"==typeof e) {
        var t=/^(\/?)([\s\S]*?)((?:\. {
                    1, 2
                }

                |[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
        if(t)return t.pop().toLowerCase()
    }

    return""
}

,
isCrossOrigin=function(e, t) {
    void 0===t&&(t=window__default.default.location);
    var i=parseUrl(e);
    return(":"===i.protocol?t.protocol:i.protocol)+i.host !==t.protocol+t.host
}

,
Url=Object.freeze( {
        __proto__:null, parseUrl:parseUrl, getAbsoluteURL:getAbsoluteURL, getFileExtension:getFileExtension, isCrossOrigin:isCrossOrigin
    }

),
parseCues=function(e, t) {
    var i=new window__default.default.WebVTT.Parser(window__default.default, window__default.default.vttjs, window__default.default.WebVTT.StringDecoder()),
    n=[];

    i.oncue=function(e) {
        t.addCue(e)
    }

    ,
    i.onparsingerror=function(e) {
        n.push(e)
    }

    ,
    i.onflush=function() {
        t.trigger( {
                type:"loadeddata", target:t
            }

        )
    }

    ,
    i.parse(e),
    n.length>0&&(window__default.default.console&&window__default.default.console.groupCollapsed&&window__default.default.console.groupCollapsed("Text Track parsing errors for "+t.src), n.forEach((function(e) {
                    return log$1.error(e)
                }

            )), window__default.default.console&&window__default.default.console.groupEnd&&window__default.default.console.groupEnd()),
    i.flush()
}

,
loadTrack=function(e, t) {
    var i= {
        uri: e
    }

    ,
    n=isCrossOrigin(e);
    n&&(i.cors=n);
    var r="use-credentials"===t.tech_.crossOrigin();

    r&&(i.withCredentials=r),
    XHR__default.default(i, bind(this, (function(e, i, n) {
                    if(e)return log$1.error(e, i); t.loaded_= !0, "function" !=typeof window__default.default.WebVTT?t.tech_&&t.tech_.any(["vttjsloaded", "vttjserror"], (function(e) {
                                if("vttjserror" !==e.type)return parseCues(n, t); log$1.error("vttjs failed to load, stopping trying to process "+t.src)
                            }

                        )):parseCues(n, t)
                }

            )))
}

,
TextTrack=function(e) {
    function t(t) {
        var i;

        if(void 0===t&&(t= {}

            ),  !t.tech)throw new Error("A tech was not provided.");

        var n=mergeOptions$3(t, {
                kind:TextTrackKind[t.kind]||"subtitles", language:t.language||t.srclang||""
            }

        ),
        r=TextTrackMode[n.mode]||"disabled",
        a=n.default;
        "metadata" !==n.kind&&"chapters" !==n.kind||(r="hidden"),
        (i=e.call(this, n)||this).tech_=n.tech,
        i.cues_=[],
        i.activeCues_=[],
        i.preload_= !1 !==i.tech_.preloadTextTracks;
        var s=new TextTrackCueList(i.cues_),
        o=new TextTrackCueList(i.activeCues_),
        l= !1;

        return i.timeupdateHandler=bind(_assertThisInitialized__default.default(i), (function() {
                    this.tech_.isDisposed()||(this.tech_.isReady_?(this.activeCues=this.activeCues, l&&(this.trigger("cuechange"), l= !1), this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler)):this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler))
                }

            )),
        i.tech_.one("dispose", (function() {
                    i.stopTracking()
                }

            )),
        "disabled" !==r&&i.startTracking(),
        Object.defineProperties(_assertThisInitialized__default.default(i), {
                default: {
                    get:function() {
                        return a
                    }

                    , set:function() {}
                }

                , mode: {
                    get:function() {
                        return r
                    }

                    , set:function(e) {
                        TextTrackMode[e]&&r !==e&&(r=e, this.preload_||"disabled"===r||0 !==this.cues.length||loadTrack(this.src, this), this.stopTracking(), "disabled" !==r&&this.startTracking(), this.trigger("modechange"))
                    }
                }

                , cues: {
                    get:function() {
                        return this.loaded_?s:null
                    }

                    , set:function() {}
                }

                , activeCues: {
                    get:function() {
                        if( !this.loaded_)return null; if(0===this.cues.length)return o; for(var e=this.tech_.currentTime(), t=[], i=0, n=this.cues.length; i<n; i++) {
                            var r=this.cues[i]; (r.startTime<=e&&r.endTime>=e||r.startTime===r.endTime&&r.startTime<=e&&r.startTime+.5>=e)&&t.push(r)
                        }

                        if(l= !1, t.length !==this.activeCues_.length)l= !0; else for(var a=0; a<t.length; a++)-1===this.activeCues_.indexOf(t[a])&&(l= !0); return this.activeCues_=t, o.setCues_(this.activeCues_), o
                    }

                    , set:function() {}
                }
            }

        ),
        n.src?(i.src=n.src, i.preload_||(i.loaded_= !0), (i.preload_||"subtitles" !==n.kind&&"captions" !==n.kind)&&loadTrack(i.src, _assertThisInitialized__default.default(i))):i.loaded_= !0,
        i
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.startTracking=function() {
        this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler)
    }

    ,
    i.stopTracking=function() {
        this.rvf_&&(this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_=void 0)
    }

    ,
    i.addCue=function(e) {
        var t=e;

        if(window__default.default.vttjs&& !(e instanceof window__default.default.vttjs.VTTCue)) {
            for(var i in t=new window__default.default.vttjs.VTTCue(e.startTime, e.endTime, e.text), e)i in t||(t[i]=e[i]);
            t.id=e.id,
            t.originalCue_=e
        }

        for(var n=this.tech_.textTracks(), r=0; r<n.length; r++)n[r] !==this&&n[r].removeCue(t);
        this.cues_.push(t),
        this.cues.setCues_(this.cues_)
    }

    ,
    i.removeCue=function(e) {
        for(var t=this.cues_.length; t--; ) {
            var i=this.cues_[t];

            if(i===e||i.originalCue_&&i.originalCue_===e) {
                this.cues_.splice(t, 1),
                this.cues.setCues_(this.cues_);
                break
            }
        }
    }

    ,
    t
}

(Track);

TextTrack.prototype.allowedEvents_= {
    cuechange: "cuechange"
}

;

var AudioTrack=function(e) {
    function t(t) {
        var i;

        void 0===t&&(t= {}

        );

        var n=mergeOptions$3(t, {
                kind:AudioTrackKind[t.kind]||""
            }

        );
        i=e.call(this, n)||this;
        var r= !1;

        return Object.defineProperty(_assertThisInitialized__default.default(i), "enabled", {
                get:function() {
                    return r
                }

                , set:function(e) {
                    "boolean"==typeof e&&e !==r&&(r=e, this.trigger("enabledchange"))
                }
            }

        ),
        n.enabled&&(i.enabled=n.enabled),
        i.loaded_= !0,
        i
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(Track),
VideoTrack=function(e) {
    function t(t) {
        var i;

        void 0===t&&(t= {}

        );

        var n=mergeOptions$3(t, {
                kind:VideoTrackKind[t.kind]||""
            }

        );
        i=e.call(this, n)||this;
        var r= !1;

        return Object.defineProperty(_assertThisInitialized__default.default(i), "selected", {
                get:function() {
                    return r
                }

                , set:function(e) {
                    "boolean"==typeof e&&e !==r&&(r=e, this.trigger("selectedchange"))
                }
            }

        ),
        n.selected&&(i.selected=n.selected),
        i
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(Track),
NONE=0,
LOADING=1,
LOADED=2,
ERROR=3,
HTMLTrackElement=function(e) {
    function t(t) {
        var i,
        n;

        void 0===t&&(t= {}

        ),
        i=e.call(this)||this;
        var r=new TextTrack(t);

        return i.kind=r.kind,
        i.src=r.src,
        i.srclang=r.language,
        i.label=r.label,
        i.default=r.default,
        Object.defineProperties(_assertThisInitialized__default.default(i), {
                readyState: {
                    get:function() {
                        return n
                    }
                }

                , track: {
                    get:function() {
                        return r
                    }
                }
            }

        ),
        n=NONE,
        r.addEventListener("loadeddata", (function() {
                    n=LOADED, i.trigger( {
                            type:"load", target:_assertThisInitialized__default.default(i)
                        }

                    )
                }

            )),
        i
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(EventTarget$2);

HTMLTrackElement.prototype.allowedEvents_= {
    load: "load"
}

,
HTMLTrackElement.NONE=NONE,
HTMLTrackElement.LOADING=LOADING,
HTMLTrackElement.LOADED=LOADED,
HTMLTrackElement.ERROR=ERROR;

var NORMAL= {
    audio: {
        ListClass: AudioTrackList, TrackClass:AudioTrack, capitalName:"Audio"
    }

    ,
    video: {
        ListClass: VideoTrackList, TrackClass:VideoTrack, capitalName:"Video"
    }

    ,
    text: {
        ListClass: TextTrackList, TrackClass:TextTrack, capitalName:"Text"
    }
}

;

Object.keys(NORMAL).forEach((function(e) {
            NORMAL[e].getterName=e+"Tracks", NORMAL[e].privateName=e+"Tracks_"
        }

    ));

var REMOTE= {
    remoteText: {
        ListClass: TextTrackList, TrackClass:TextTrack, capitalName:"RemoteText", getterName:"remoteTextTracks", privateName:"remoteTextTracks_"
    }

    ,
    remoteTextEl: {
        ListClass: HtmlTrackElementList, TrackClass:HTMLTrackElement, capitalName:"RemoteTextTrackEls", getterName:"remoteTextTrackEls", privateName:"remoteTextTrackEls_"
    }
}

,
ALL=_extends__default.default( {}

    , NORMAL, REMOTE);

function createTrackHelper(e, t, i, n, r) {
    void 0===r&&(r= {}

    );
    var a=e.textTracks();
    r.kind=t,
    i&&(r.label=i),
    n&&(r.language=n),
    r.tech=e;
    var s=new ALL.text.TrackClass(r);
    return a.addTrack(s),
    s
}

REMOTE.names=Object.keys(REMOTE),
NORMAL.names=Object.keys(NORMAL),
ALL.names=[].concat(REMOTE.names).concat(NORMAL.names);

var Tech=function(e) {
    function t(t, i) {
        var n;

        return void 0===t&&(t= {}

        ),
        void 0===i&&(i=function() {}

        ),
        t.reportTouchActivity= !1,
        (n=e.call(this, null, t, i)||this).onDurationChange_=function(e) {
            return n.onDurationChange(e)
        }

        ,
        n.trackProgress_=function(e) {
            return n.trackProgress(e)
        }

        ,
        n.trackCurrentTime_=function(e) {
            return n.trackCurrentTime(e)
        }

        ,
        n.stopTrackingCurrentTime_=function(e) {
            return n.stopTrackingCurrentTime(e)
        }

        ,
        n.disposeSourceHandler_=function(e) {
            return n.disposeSourceHandler(e)
        }

        ,
        n.queuedHanders_=new Set,
        n.hasStarted_= !1,
        n.on("playing", (function() {
                    this.hasStarted_= !0
                }

            )),
        n.on("loadstart", (function() {
                    this.hasStarted_= !1
                }

            )),
        ALL.names.forEach((function(e) {
                    var i=ALL[e]; t&&t[i.getterName]&&(n[i.privateName]=t[i.getterName])
                }

            )),
        n.featuresProgressEvents||n.manualProgressOn(),
        n.featuresTimeupdateEvents||n.manualTimeUpdatesOn(),
        ["Text",
        "Audio",
        "Video"].forEach((function(e) {
                     !1===t["native"+e+"Tracks"]&&(n["featuresNative"+e+"Tracks"]= !1)
                }

            )),
         !1===t.nativeCaptions|| !1===t.nativeTextTracks?n.featuresNativeTextTracks= !1: !0 !==t.nativeCaptions&& !0 !==t.nativeTextTracks||(n.featuresNativeTextTracks= !0),
        n.featuresNativeTextTracks||n.emulateTextTracks(),
        n.preloadTextTracks= !1 !==t.preloadTextTracks,
        n.autoRemoteTextTracks_=new ALL.text.ListClass,
        n.initTrackListeners(),
        t.nativeControlsForTouch||n.emitTapEvents(),
        n.constructor&&(n.name_=n.constructor.name||"Unknown Tech"),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.triggerSourceset=function(e) {
        var t=this;

        this.isReady_||this.one("ready", (function() {
                    return t.setTimeout((function() {
                                return t.triggerSourceset(e)
                            }

                        ), 1)
                }

            )),
        this.trigger( {
                src:e, type:"sourceset"
            }

        )
    }

    ,
    i.manualProgressOn=function() {
        this.on("durationchange", this.onDurationChange_),
        this.manualProgress= !0,
        this.one("ready", this.trackProgress_)
    }

    ,
    i.manualProgressOff=function() {
        this.manualProgress= !1,
        this.stopTrackingProgress(),
        this.off("durationchange", this.onDurationChange_)
    }

    ,
    i.trackProgress=function(e) {

        this.stopTrackingProgress(),
        this.progressInterval=this.setInterval(bind(this, (function() {
                        var e=this.bufferedPercent(); this.bufferedPercent_ !==e&&this.trigger("progress"), this.bufferedPercent_=e, 1===e&&this.stopTrackingProgress()
                    }

                )), 500)
    }

    ,
    i.onDurationChange=function(e) {
        this.duration_=this.duration()
    }

    ,
    i.buffered=function() {
        return createTimeRanges(0, 0)
    }

    ,
    i.bufferedPercent=function() {
        return bufferedPercent(this.buffered(), this.duration_)
    }

    ,
    i.stopTrackingProgress=function() {
        this.clearInterval(this.progressInterval)
    }

    ,
    i.manualTimeUpdatesOn=function() {
        this.manualTimeUpdates= !0,
        this.on("play", this.trackCurrentTime_),
        this.on("pause", this.stopTrackingCurrentTime_)
    }

    ,
    i.manualTimeUpdatesOff=function() {
        this.manualTimeUpdates= !1,
        this.stopTrackingCurrentTime(),
        this.off("play", this.trackCurrentTime_),
        this.off("pause", this.stopTrackingCurrentTime_)
    }

    ,
    i.trackCurrentTime=function() {

        this.currentTimeInterval&&this.stopTrackingCurrentTime(),
        this.currentTimeInterval=this.setInterval((function() {
                    this.trigger( {
                            type:"timeupdate", target:this, manuallyTriggered: !0
                        }

                    )
                }

            ), 250)
    }

    ,
    i.stopTrackingCurrentTime=function() {

        this.clearInterval(this.currentTimeInterval),
        this.trigger( {
                type:"timeupdate", target:this, manuallyTriggered: !0
            }

        )
    }

    ,
    i.dispose=function() {
        this.clearTracks(NORMAL.names),
        this.manualProgress&&this.manualProgressOff(),
        this.manualTimeUpdates&&this.manualTimeUpdatesOff(),
        e.prototype.dispose.call(this)
    }

    ,
    i.clearTracks=function(e) {
        var t=this;

        (e=[].concat(e)).forEach((function(e) {
                    for(var i=t[e+"Tracks"]()||[], n=i.length; n--; ) {
                        var r=i[n]; "text"===e&&t.removeRemoteTextTrack(r), i.removeTrack(r)
                    }
                }

            ))
    }

    ,
    i.cleanupAutoTextTracks=function() {
        for(var e=this.autoRemoteTextTracks_||[], t=e.length; t--; ) {
            var i=e[t];
            this.removeRemoteTextTrack(i)
        }
    }

    ,
    i.reset=function() {}

    ,
    i.crossOrigin=function() {}

    ,
    i.setCrossOrigin=function() {}

    ,
    i.error=function(e) {
        return void 0 !==e&&(this.error_=new MediaError(e), this.trigger("error")),
        this.error_
    }

    ,
    i.played=function() {
        return this.hasStarted_?createTimeRanges(0, 0): createTimeRanges()
    }

    ,
    i.play=function() {}

    ,
    i.setScrubbing=function() {}

    ,
    i.scrubbing=function() {}

    ,
    i.setCurrentTime=function() {
        this.manualTimeUpdates&&this.trigger( {
                type:"timeupdate", target:this, manuallyTriggered: !0
            }

        )
    }

    ,
    i.initTrackListeners=function() {
        var e=this;

        NORMAL.names.forEach((function(t) {
                    var i=NORMAL[t], n=function() {
                        e.trigger(t+"trackchange")
                    }

                    , r=e[i.getterName](); r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", (function() {
                                r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                            }

                        ))
                }

            ))
    }

    ,
    i.addWebVttScript_=function() {
        var e=this;

        if( !window__default.default.WebVTT)if(document__default.default.body.contains(this.el())) {
            if( !this.options_["vtt.js"]&&isPlain(vtt__default.default)&&Object.keys(vtt__default.default).length>0)return void this.trigger("vttjsloaded");
            var t=document__default.default.createElement("script");

            t.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",
            t.onload=function() {
                e.trigger("vttjsloaded")
            }

            ,
            t.onerror=function() {
                e.trigger("vttjserror")
            }

            ,
            this.on("dispose", (function() {
                        t.onload=null, t.onerror=null
                    }

                )),
            window__default.default.WebVTT= !0,
            this.el().parentNode.appendChild(t)
        }

        else this.ready(this.addWebVttScript_)
    }

    ,
    i.emulateTextTracks=function() {

        var e=this,
        t=this.textTracks(),
        i=this.remoteTextTracks(),
        n=function(e) {
            return t.addTrack(e.track)
        }

        ,
        r=function(e) {
            return t.removeTrack(e.track)
        }

        ;
        i.on("addtrack", n),
        i.on("removetrack", r),
        this.addWebVttScript_();

        var a=function() {
            return e.trigger("texttrackchange")
        }

        ,
        s=function() {
            a();

            for(var e=0; e<t.length; e++) {
                var i=t[e];
                i.removeEventListener("cuechange", a),
                "showing"===i.mode&&i.addEventListener("cuechange", a)
            }
        }

        ;

        s(),
        t.addEventListener("change", s),
        t.addEventListener("addtrack", s),
        t.addEventListener("removetrack", s),
        this.on("dispose", (function() {
                    i.off("addtrack", n), i.off("removetrack", r), t.removeEventListener("change", s), t.removeEventListener("addtrack", s), t.removeEventListener("removetrack", s); for(var e=0; e<t.length; e++)t[e].removeEventListener("cuechange", a)
                }

            ))
    }

    ,
    i.addTextTrack=function(e, t, i) {
        if( !e)throw new Error("TextTrack kind is required but was not provided");
        return createTrackHelper(this, e, t, i)
    }

    ,
    i.createRemoteTextTrack=function(e) {
        var t=mergeOptions$3(e, {
                tech:this
            }

        );
        return new REMOTE.remoteTextEl.TrackClass(t)
    }

    ,
    i.addRemoteTextTrack=function(e, t) {
        var i=this;

        void 0===e&&(e= {}

        );
        var n=this.createRemoteTextTrack(e);

        return !0 !==t&& !1 !==t&&(log$1.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t= !0),
        this.remoteTextTrackEls().addTrackElement_(n),
        this.remoteTextTracks().addTrack(n.track),
         !0 !==t&&this.ready((function() {
                    return i.autoRemoteTextTracks_.addTrack(n.track)
                }

            )),
        n
    }

    ,
    i.removeRemoteTextTrack=function(e) {
        var t=this.remoteTextTrackEls().getTrackElementByTrack_(e);
        this.remoteTextTrackEls().removeTrackElement_(t),
        this.remoteTextTracks().removeTrack(e),
        this.autoRemoteTextTracks_.removeTrack(e)
    }

    ,
    i.getVideoPlaybackQuality=function() {
        return {}
    }

    ,
    i.requestPictureInPicture=function() {
        var e=this.options_.Promise||window__default.default.Promise;
        if(e)return e.reject()
    }

    ,
    i.disablePictureInPicture=function() {
        return !0
    }

    ,
    i.setDisablePictureInPicture=function() {}

    ,
    i.requestVideoFrameCallback=function(e) {
        var t=this,
        i=newGUID();

        return this.paused()?(this.queuedHanders_.add(i), this.one("playing", (function() {
                        t.queuedHanders_.has(i)&&(t.queuedHanders_.delete(i), e())
                    }

                ))):this.requestNamedAnimationFrame(i, e),
        i
    }

    ,
    i.cancelVideoFrameCallback=function(e) {
        this.queuedHanders_.has(e)?this.queuedHanders_.delete(e): this.cancelNamedAnimationFrame(e)
    }

    ,
    i.setPoster=function() {}

    ,
    i.playsinline=function() {}

    ,
    i.setPlaysinline=function() {}

    ,
    i.overrideNativeAudioTracks=function() {}

    ,
    i.overrideNativeVideoTracks=function() {}

    ,
    i.canPlayType=function() {
        return""
    }

    ,
    t.canPlayType=function() {
        return""
    }

    ,
    t.canPlaySource=function(e, i) {
        return t.canPlayType(e.type)
    }

    ,
    t.isTech=function(e) {
        return e.prototype instanceof t||e instanceof t||e===t
    }

    ,
    t.registerTech=function(e, i) {
        if(t.techs_||(t.techs_= {}

            ),  !t.isTech(i))throw new Error("Tech "+e+" must be a Tech");
        if( !t.canPlayType)throw new Error("Techs must have a static canPlayType method on them");
        if( !t.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");
        return e=toTitleCase$1(e),
        t.techs_[e]=i,
        t.techs_[toLowerCase(e)]=i,
        "Tech" !==e&&t.defaultTechOrder_.push(e),
        i
    }

    ,
    t.getTech=function(e) {
        if(e)return t.techs_&&t.techs_[e]?t.techs_[e]: (e=toTitleCase$1(e), window__default.default&&window__default.default.videojs&&window__default.default.videojs[e]?(log$1.warn("The "+e+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), window__default.default.videojs[e]):void 0)
    }

    ,
    t
}

(Component$1);

ALL.names.forEach((function(e) {
            var t=ALL[e]; Tech.prototype[t.getterName]=function() {
                return this[t.privateName]=this[t.privateName]||new t.ListClass, this[t.privateName]
            }
        }

    )),
Tech.prototype.featuresVolumeControl= !0,
Tech.prototype.featuresMuteControl= !0,
Tech.prototype.featuresFullscreenResize= !1,
Tech.prototype.featuresPlaybackRate= !1,
Tech.prototype.featuresProgressEvents= !1,
Tech.prototype.featuresSourceset= !1,
Tech.prototype.featuresTimeupdateEvents= !1,
Tech.prototype.featuresNativeTextTracks= !1,
Tech.prototype.featuresVideoFrameCallback= !1,
Tech.withSourceHandlers=function(e) {
    e.registerSourceHandler=function(t, i) {
        var n=e.sourceHandlers;
        n||(n=e.sourceHandlers=[]),
        void 0===i&&(i=n.length),
        n.splice(i, 0, t)
    }

    ,
    e.canPlayType=function(t) {
        for(var i, n=e.sourceHandlers||[], r=0; r<n.length; r++)if(i=n[r].canPlayType(t))return i;
        return""
    }

    ,
    e.selectSourceHandler=function(t, i) {
        for(var n=e.sourceHandlers||[], r=0; r<n.length; r++)if(n[r].canHandleSource(t, i))return n[r];
        return null
    }

    ,
    e.canPlaySource=function(t, i) {
        var n=e.selectSourceHandler(t, i);
        return n?n.canHandleSource(t, i): ""
    }

    ,
    ["seekable",
    "seeking",
    "duration"].forEach((function(e) {
                var t=this[e]; "function"==typeof t&&(this[e]=function() {
                        return this.sourceHandler_&&this.sourceHandler_[e]?this.sourceHandler_[e].apply(this.sourceHandler_, arguments):t.apply(this, arguments)
                    }

                )
            }

        ), e.prototype),
    e.prototype.setSource=function(t) {
        var i=e.selectSourceHandler(t, this.options_);
        i||(e.nativeSourceHandler?i=e.nativeSourceHandler:log$1.error("No source handler found for the current source.")),
        this.disposeSourceHandler(),
        this.off("dispose", this.disposeSourceHandler_),
        i !==e.nativeSourceHandler&&(this.currentSource_=t),
        this.sourceHandler_=i.handleSource(t, this, this.options_),
        this.one("dispose", this.disposeSourceHandler_)
    }

    ,
    e.prototype.disposeSourceHandler=function() {
        this.currentSource_&&(this.clearTracks(["audio", "video"]), this.currentSource_=null),
        this.cleanupAutoTextTracks(),
        this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(), this.sourceHandler_=null)
    }
}

,
Component$1.registerComponent("Tech", Tech),
Tech.registerTech("Tech", Tech),
Tech.defaultTechOrder_=[];

var middlewares= {}

,
middlewareInstances= {}

,
TERMINATOR= {}

;

function use(e, t) {
    middlewares[e]=middlewares[e]||[],
    middlewares[e].push(t)
}

function setSource(e, t, i) {
    e.setTimeout((function() {
                return setSourceHelper(t, middlewares[t.type], i, e)
            }

        ), 1)
}

function setTech(e, t) {
    e.forEach((function(e) {
                return e.setTech&&e.setTech(t)
            }

        ))
}

function get(e, t, i) {
    return e.reduceRight(middlewareIterator(i), t[i]())
}

function set(e, t, i, n) {
    return t[i](e.reduce(middlewareIterator(i), n))
}

function mediate(e, t, i, n) {
    void 0===n&&(n=null);
    var r="call"+toTitleCase$1(i),
    a=e.reduce(middlewareIterator(r), n),
    s=a===TERMINATOR,
    o=s?null: t[i](a);
    return executeRight(e, i, o, s),
    o
}

var allowedGetters= {
    buffered: 1, currentTime:1, duration:1, muted:1, played:1, paused:1, seekable:1, volume:1, ended:1
}

,
allowedSetters= {
    setCurrentTime: 1, setMuted:1, setVolume:1
}

,
allowedMediators= {
    play: 1, pause:1
}

;

function middlewareIterator(e) {
    return function(t, i) {
        return t===TERMINATOR?TERMINATOR: i[e]?i[e](t):t
    }
}

function executeRight(e, t, i, n) {
    for(var r=e.length-1; r>=0; r--) {
        var a=e[r];
        a[t]&&a[t](n, i)
    }
}

function clearCacheForPlayer(e) {
    middlewareInstances[e.id()]=null
}

function getOrCreateFactory(e, t) {
    var i=middlewareInstances[e.id()],
    n=null;
    if(null==i)return n=t(e),
    middlewareInstances[e.id()]=[[t,
    n]],
    n;

    for(var r=0; r<i.length; r++) {
        var a=i[r],
        s=a[0],
        o=a[1];
        s===t&&(n=o)
    }

    return null===n&&(n=t(e), i.push([t, n])),
    n
}

function setSourceHelper(e, t, i, n, r, a) {
    void 0===e&&(e= {}

    ),
    void 0===t&&(t=[]),
    void 0===r&&(r=[]),
    void 0===a&&(a= !1);
    var s=t,
    o=s[0],
    l=s.slice(1);
    if("string"==typeof o)setSourceHelper(e, middlewares[o], i, n, r, a);

    else if(o) {
        var u=getOrCreateFactory(n, o);
        if( !u.setSource)return r.push(u),
        setSourceHelper(e, l, i, n, r, a);

        u.setSource(assign( {}

                , e), (function(t, s) {
                    if(t)return setSourceHelper(e, l, i, n, r, a); r.push(u), setSourceHelper(s, e.type===s.type?l:middlewares[s.type], i, n, r, a)
                }

            ))
    }

    else l.length?setSourceHelper(e, l, i, n, r, a):a?i(e, r):setSourceHelper(e, middlewares["*"], i, n, r,  !0)
}

var MimetypesKind= {
    opus: "video/ogg", ogv:"video/ogg", mp4:"video/mp4", mov:"video/mp4", m4v:"video/mp4", mkv:"video/x-matroska", m4a:"audio/mp4", mp3:"audio/mpeg", aac:"audio/aac", caf:"audio/x-caf", flac:"audio/flac", oga:"audio/ogg", wav:"audio/wav", m3u8:"application/x-mpegURL", mpd:"application/dash+xml", jpg:"image/jpeg", jpeg:"image/jpeg", gif:"image/gif", png:"image/png", svg:"image/svg+xml", webp:"image/webp"
}

,
getMimetype=function(e) {
    void 0===e&&(e="");
    var t=getFileExtension(e);
    return MimetypesKind[t.toLowerCase()]||""
}

,
findMimetype=function(e, t) {
    if( !t)return"";
    if(e.cache_.source.src===t&&e.cache_.source.type)return e.cache_.source.type;

    var i=e.cache_.sources.filter((function(e) {
                return e.src===t
            }

        ));
    if(i.length)return i[0].type;

    for(var n=e.$$("source"), r=0; r<n.length; r++) {
        var a=n[r];
        if(a.type&&a.src&&a.src===t)return a.type
    }

    return getMimetype(t)
}

,
filterSource=function e(t) {
    if(Array.isArray(t)) {
        var i=[];

        t.forEach((function(t) {
                    t=e(t), Array.isArray(t)?i=i.concat(t):isObject(t)&&i.push(t)
                }

            )),
        t=i
    }

    else t="string"==typeof t&&t.trim()?[fixSource( {
            src:t
        }

    )]:isObject(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[fixSource(t)]:[];
    return t
}

;

function fixSource(e) {
    if( !e.type) {
        var t=getMimetype(e.src);
        t&&(e.type=t)
    }

    return e
}

var MediaLoader=function(e) {
    function t(t, i, n) {

        var r,
        a=mergeOptions$3( {
                createEl: !1
            }

            , i);
        if(r=e.call(this, t, a, n)||this, i.playerOptions.sources&&0 !==i.playerOptions.sources.length)t.src(i.playerOptions.sources);

        else for(var s=0, o=i.playerOptions.techOrder; s<o.length; s++) {
            var l=toTitleCase$1(o[s]),
            u=Tech.getTech(l);

            if(l||(u=Component$1.getComponent(l)), u&&u.isSupported()) {
                t.loadTech_(l);
                break
            }
        }

        return r
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(Component$1);
Component$1.registerComponent("MediaLoader", MediaLoader);

var ClickableComponent=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).options_.controlText&&n.controlText(n.options_.controlText),
        n.handleMouseOver_=function(e) {
            return n.handleMouseOver(e)
        }

        ,
        n.handleMouseOut_=function(e) {
            return n.handleMouseOut(e)
        }

        ,
        n.handleClick_=function(e) {
            return n.handleClick(e)
        }

        ,
        n.handleKeyDown_=function(e) {
            return n.handleKeyDown(e)
        }

        ,
        n.emitTapEvents(),
        n.enable(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function(e, t, i) {

        void 0===e&&(e="div"),
        void 0===t&&(t= {}

        ),
        void 0===i&&(i= {}

        ),
        t=assign( {
                className:this.buildCSSClass(), tabIndex:0
            }

            , t),
        "button"===e&&log$1.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),
        i=assign( {
                role:"button"
            }

            , i),
        this.tabIndex_=t.tabIndex;
        var n=createEl(e, t, i);

        return n.appendChild(createEl("span", {
                    className:"vjs-icon-placeholder"
                }

                , {
                    "aria-hidden": !0
                }

            )),
        this.createControlTextEl(n),
        n
    }

    ,
    i.dispose=function() {
        this.controlTextEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.createControlTextEl=function(e) {
        return this.controlTextEl_=createEl("span", {
                className:"vjs-control-text"
            }

            , {
                "aria-live":"polite"
            }

        ),
        e&&e.appendChild(this.controlTextEl_),
        this.controlText(this.controlText_, e),
        this.controlTextEl_
    }

    ,
    i.controlText=function(e, t) {
        if(void 0===t&&(t=this.el()), void 0===e)return this.controlText_||"Need Text";
        var i=this.localize(e);
        this.controlText_=e,
        textContent(this.controlTextEl_, i),
        this.nonIconControl||this.player_.options_.noUITitleAttributes||t.setAttribute("title", i)
    }

    ,
    i.buildCSSClass=function() {
        return"vjs-control vjs-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.enable=function() {
        this.enabled_||(this.enabled_= !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !==this.tabIndex_&&this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_))
    }

    ,
    i.disable=function() {
        this.enabled_= !1,
        this.addClass("vjs-disabled"),
        this.el_.setAttribute("aria-disabled", "true"),
        void 0 !==this.tabIndex_&&this.el_.removeAttribute("tabIndex"),
        this.off("mouseover", this.handleMouseOver_),
        this.off("mouseout", this.handleMouseOut_),
        this.off(["tap", "click"], this.handleClick_),
        this.off("keydown", this.handleKeyDown_)
    }

    ,
    i.handleLanguagechange=function() {
        this.controlText(this.controlText_)
    }

    ,
    i.handleClick=function(e) {
        this.options_.clickHandler&&this.options_.clickHandler.call(this, arguments)
    }

    ,
    i.handleKeyDown=function(t) {
        keycode__default.default.isEventKey(t, "Space")||keycode__default.default.isEventKey(t, "Enter")?(t.preventDefault(), t.stopPropagation(), this.trigger("click")): e.prototype.handleKeyDown.call(this, t)
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("ClickableComponent", ClickableComponent);

var PosterImage=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).update(),
        n.update_=function(e) {
            return n.update(e)
        }

        ,
        t.on("posterchange", n.update_),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.dispose=function() {
        this.player().off("posterchange", this.update_),
        e.prototype.dispose.call(this)
    }

    ,
    i.createEl=function() {
        return createEl("div", {
                className:"vjs-poster", tabIndex:-1
            }

        )
    }

    ,
    i.update=function(e) {
        var t=this.player().poster();
        this.setSrc(t),
        t?this.show(): this.hide()
    }

    ,
    i.setSrc=function(e) {
        var t="";
        e&&(t='url("'+e+'")'),
        this.el_.style.backgroundImage=t
    }

    ,
    i.handleClick=function(e) {
        if(this.player_.controls()) {
            var t=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0;
             !this.player_.tech( !0)||(IE_VERSION||IS_EDGE)&&t||this.player_.tech( !0).focus(),
            this.player_.paused()?silencePromise(this.player_.play()): this.player_.pause()
        }
    }

    ,
    t
}

(ClickableComponent);
Component$1.registerComponent("PosterImage", PosterImage);

var darkGray="#222",
lightGray="#ccc",
fontMap= {
    monospace: "monospace", sansSerif:"sans-serif", serif:"serif", monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace', monospaceSerif:'"Courier New", monospace', proportionalSansSerif:"sans-serif", proportionalSerif:"serif", casual:'"Comic Sans MS", Impact, fantasy', script:'"Monotype Corsiva", cursive', smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'
}

;

function constructColor(e, t) {
    var i;
    if(4===e.length)i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3];

    else {
        if(7 !==e.length)throw new Error("Invalid color code provided, "+e+"; must be formatted as e.g. #f0e or #f604e2.");
        i=e.slice(1)
    }

    return"rgba("+parseInt(i.slice(0, 2), 16)+","+parseInt(i.slice(2, 4), 16)+","+parseInt(i.slice(4, 6), 16)+","+t+")"
}

function tryUpdateStyle(e, t, i) {
    try {
        e.style[t]=i
    }

    catch(e) {
        return
    }
}

var TextTrackDisplay=function(e) {
    function t(t, i, n) {
        var r;
        r=e.call(this, t, i, n)||this;

        var a=function(e) {
            return r.updateDisplay(e)
        }

        ;

        return t.on("loadstart", (function(e) {
                    return r.toggleDisplay(e)
                }

            )),
        t.on("texttrackchange", a),
        t.on("loadedmetadata", (function(e) {
                    return r.preselectTrack(e)
                }

            )),
        t.ready(bind(_assertThisInitialized__default.default(r), (function() {
                        if(t.tech_&&t.tech_.featuresNativeTextTracks)this.hide(); else {
                            t.on("fullscreenchange", a), t.on("playerresize", a), window__default.default.addEventListener("orientationchange", a), t.on("dispose", (function() {
                                        return window__default.default.removeEventListener("orientationchange", a)
                                    }

                                )); for(var e=this.options_.playerOptions.tracks||[], i=0; i<e.length; i++)this.player_.addRemoteTextTrack(e[i],  !0); this.preselectTrack()
                        }
                    }

                ))),
        r
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.preselectTrack=function() {
        for(var e, t, i, n= {
                captions:1, subtitles:1
            }

            , r=this.player_.textTracks(), a=this.player_.cache_.selectedLanguage, s=0; s<r.length; s++) {
            var o=r[s];
            a&&a.enabled&&a.language&&a.language===o.language&&o.kind in n?o.kind===a.kind?i=o: i||(i=o):a&& !a.enabled?(i=null, e=null, t=null):o.default&&("descriptions" !==o.kind||e?o.kind in n&& !t&&(t=o):e=o)
        }

        i?i.mode="showing":t?t.mode="showing":e&&(e.mode="showing")
    }

    ,
    i.toggleDisplay=function() {
        this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide(): this.show()
    }

    ,
    i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-text-track-display"
            }

            , {
                translate:"yes", "aria-live":"off", "aria-atomic":"true"
            }

        )
    }

    ,
    i.clearDisplay=function() {
        "function"==typeof window__default.default.WebVTT&&window__default.default.WebVTT.processCues(window__default.default, [], this.el_)
    }

    ,
    i.updateDisplay=function() {
        var e=this.player_.textTracks(),
        t=this.options_.allowMultipleShowingTracks;

        if(this.clearDisplay(), t) {
            for(var i=[], n=0; n<e.length; ++n) {
                var r=e[n];
                "showing"===r.mode&&i.push(r)
            }

            this.updateForTrack(i)
        }

        else {
            for(var a=null, s=null, o=e.length; o--; ) {
                var l=e[o];
                "showing"===l.mode&&("descriptions"===l.kind?a=l:s=l)
            }

            s?("off" !==this.getAttribute("aria-live")&&this.setAttribute("aria-live", "off"), this.updateForTrack(s)):a&&("assertive" !==this.getAttribute("aria-live")&&this.setAttribute("aria-live", "assertive"), this.updateForTrack(a))
        }
    }

    ,
    i.updateDisplayState=function(e) {
        for(var t=this.player_.textTrackSettings.getValues(), i=e.activeCues, n=i.length; n--; ) {
            var r=i[n];

            if(r) {
                var a=r.displayState;

                if(t.color&&(a.firstChild.style.color=t.color), t.textOpacity&&tryUpdateStyle(a.firstChild, "color", constructColor(t.color||"#fff", t.textOpacity)), t.backgroundColor&&(a.firstChild.style.backgroundColor=t.backgroundColor), t.backgroundOpacity&&tryUpdateStyle(a.firstChild, "backgroundColor", constructColor(t.backgroundColor||"#000", t.backgroundOpacity)), t.windowColor&&(t.windowOpacity?tryUpdateStyle(a, "backgroundColor", constructColor(t.windowColor, t.windowOpacity)):a.style.backgroundColor=t.windowColor), t.edgeStyle&&("dropshadow"===t.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px "+darkGray+", 2px 2px 4px "+darkGray+", 2px 2px 5px "+darkGray:"raised"===t.edgeStyle?a.firstChild.style.textShadow="1px 1px "+darkGray+", 2px 2px "+darkGray+", 3px 3px "+darkGray:"depressed"===t.edgeStyle?a.firstChild.style.textShadow="1px 1px "+lightGray+", 0 1px "+lightGray+", -1px -1px "+darkGray+", 0 -1px "+darkGray:"uniform"===t.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px "+darkGray+", 0 0 4px "+darkGray+", 0 0 4px "+darkGray+", 0 0 4px "+darkGray)), t.fontPercent&&1 !==t.fontPercent) {
                    var s=window__default.default.parseFloat(a.style.fontSize);
                    a.style.fontSize=s*t.fontPercent+"px",
                    a.style.height="auto",
                    a.style.top="auto"
                }

                t.fontFamily&&"default" !==t.fontFamily&&("small-caps"===t.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=fontMap[t.fontFamily])
            }
        }
    }

    ,
    i.updateForTrack=function(e) {
        if(Array.isArray(e)||(e=[e]), "function"==typeof window__default.default.WebVTT&& !e.every((function(e) {
                        return !e.activeCues
                    }

                ))) {
            for(var t=[], i=0; i<e.length; ++i)for(var n=e[i], r=0; r<n.activeCues.length; ++r)t.push(n.activeCues[r]);
            window__default.default.WebVTT.processCues(window__default.default, t, this.el_);

            for(var a=0; a<e.length; ++a) {
                for(var s=e[a], o=0; o<s.activeCues.length; ++o) {
                    var l=s.activeCues[o].displayState;
                    addClass(l, "vjs-text-track-cue"),
                    addClass(l, "vjs-text-track-cue-"+(s.language?s.language:a)),
                    s.language&&setAttribute(l, "lang", s.language)
                }

                this.player_.textTrackSettings&&this.updateDisplayState(s)
            }
        }
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("TextTrackDisplay", TextTrackDisplay);

var LoadingSpinner=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createEl=function() {

        var t=this.player_.isAudio(),
        i=this.localize(t?"Audio Player":"Video Player"),
        n=createEl("span", {
                className:"vjs-control-text", textContent:this.localize("{1} is loading.", [i])
            }

        ),
        r=e.prototype.createEl.call(this, "div", {
                className:"vjs-loading-spinner", dir:"ltr"
            }

        );
        return r.appendChild(n),
        r
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("LoadingSpinner", LoadingSpinner);

var Button=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function(e, t, i) {
        void 0===t&&(t= {}

        ),
        void 0===i&&(i= {}

        );

        var n=createEl("button", t=assign( {
                    className:this.buildCSSClass()
                }

                , t), i=assign( {
                    type:"button"
                }

                , i));

        return n.appendChild(createEl("span", {
                    className:"vjs-icon-placeholder"
                }

                , {
                    "aria-hidden": !0
                }

            )),
        this.createControlTextEl(n),
        n
    }

    ,
    i.addChild=function(e, t) {
        void 0===t&&(t= {}

        );
        var i=this.constructor.name;
        return log$1.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),
        Component$1.prototype.addChild.call(this, e, t)
    }

    ,
    i.enable=function() {
        e.prototype.enable.call(this),
        this.el_.removeAttribute("disabled")
    }

    ,
    i.disable=function() {
        e.prototype.disable.call(this),
        this.el_.setAttribute("disabled", "disabled")
    }

    ,
    i.handleKeyDown=function(t) {
        keycode__default.default.isEventKey(t, "Space")||keycode__default.default.isEventKey(t, "Enter")?t.stopPropagation(): e.prototype.handleKeyDown.call(this, t)
    }

    ,
    t
}

(ClickableComponent);
Component$1.registerComponent("Button", Button);

var BigPlayButton=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).mouseused_= !1,
        n.on("mousedown", (function(e) {
                    return n.handleMouseDown(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-big-play-button"
    }

    ,
    i.handleClick=function(e) {
        var t=this.player_.play();

        if(this.mouseused_&&e.clientX&&e.clientY) {
            var i=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0;
            return silencePromise(t),
            void( !this.player_.tech( !0)||(IE_VERSION||IS_EDGE)&&i||this.player_.tech( !0).focus())
        }

        var n=this.player_.getChild("controlBar"),
        r=n&&n.getChild("playToggle");

        if(r) {
            var a=function() {
                return r.focus()
            }

            ;

            isPromise(t)?t.then(a, (function() {}

                )):this.setTimeout(a, 1)
        }

        else this.player_.tech( !0).focus()
    }

    ,
    i.handleKeyDown=function(t) {
        this.mouseused_= !1,
        e.prototype.handleKeyDown.call(this, t)
    }

    ,
    i.handleMouseDown=function(e) {
        this.mouseused_= !0
    }

    ,
    t
}

(Button);
BigPlayButton.prototype.controlText_="Play Video",
Component$1.registerComponent("BigPlayButton", BigPlayButton);

var CloseButton=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).controlText(i&&i.controlText||n.localize("Close")),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-close-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.handleClick=function(e) {
        this.trigger( {
                type:"close", bubbles: !1
            }

        )
    }

    ,
    i.handleKeyDown=function(t) {
        keycode__default.default.isEventKey(t, "Esc")?(t.preventDefault(), t.stopPropagation(), this.trigger("click")): e.prototype.handleKeyDown.call(this, t)
    }

    ,
    t
}

(Button);
Component$1.registerComponent("CloseButton", CloseButton);

var PlayToggle=function(e) {
    function t(t, i) {
        var n;

        return void 0===i&&(i= {}

        ),
        n=e.call(this, t, i)||this,
        i.replay=void 0===i.replay||i.replay,
        n.on(t, "play", (function(e) {
                    return n.handlePlay(e)
                }

            )),
        n.on(t, "pause", (function(e) {
                    return n.handlePause(e)
                }

            )),
        i.replay&&n.on(t, "ended", (function(e) {
                    return n.handleEnded(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-play-control "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.handleClick=function(e) {
        this.player_.paused()?silencePromise(this.player_.play()): this.player_.pause()
    }

    ,
    i.handleSeeked=function(e) {
        this.removeClass("vjs-ended"),
        this.player_.paused()?this.handlePause(e): this.handlePlay(e)
    }

    ,
    i.handlePlay=function(e) {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-paused"),
        this.addClass("vjs-playing"),
        this.controlText("Pause")
    }

    ,
    i.handlePause=function(e) {
        this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.controlText("Play")
    }

    ,
    i.handleEnded=function(e) {
        var t=this;

        this.removeClass("vjs-playing"),
        this.addClass("vjs-ended"),
        this.controlText("Replay"),
        this.one(this.player_, "seeked", (function(e) {
                    return t.handleSeeked(e)
                }

            ))
    }

    ,
    t
}

(Button);
PlayToggle.prototype.controlText_="Play",
Component$1.registerComponent("PlayToggle", PlayToggle);

var defaultImplementation=function(e, t) {
    e=e<0?0: e;
    var i=Math.floor(e%60),
    n=Math.floor(e/60%60),
    r=Math.floor(e/3600),
    a=Math.floor(t/60%60),
    s=Math.floor(t/3600);
    return(isNaN(e)||e===1/0)&&(r=n=i="-"),
    (r=r>0||s>0?r+":":"")+(n=((r||a>=10)&&n<10?"0"+n:n)+":")+(i<10?"0"+i:i)
}

,
implementation=defaultImplementation;

function setFormatTime(e) {
    implementation=e
}

function resetFormatTime() {
    implementation=defaultImplementation
}

function formatTime(e, t) {
    return void 0===t&&(t=e),
    implementation(e, t)
}

var TimeDisplay=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on(t, ["timeupdate", "ended"], (function(e) {
                    return n.updateContent(e)
                }

            )),
        n.updateTextNode_(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {

        var t=this.buildCSSClass(),
        i=e.prototype.createEl.call(this, "div", {
                className:t+" vjs-time-control vjs-control"
            }

        ),
        n=createEl("span", {
                className:"vjs-control-text", textContent:this.localize(this.labelText_)+" "
            }

            , {
                role:"presentation"
            }

        );

        return i.appendChild(n),
        this.contentEl_=createEl("span", {
                className:t+"-display"
            }

            , {
                "aria-live":"off", role:"presentation"
            }

        ),
        i.appendChild(this.contentEl_),
        i
    }

    ,
    i.dispose=function() {
        this.contentEl_=null,
        this.textNode_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.updateTextNode_=function(e) {
        var t=this;

        void 0===e&&(e=0),
        e=formatTime(e),
        this.formattedTime_ !==e&&(this.formattedTime_=e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", (function() {
                        if(t.contentEl_) {
                            var e=t.textNode_; e&&t.contentEl_.firstChild !==e&&(e=null, log$1.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), t.textNode_=document__default.default.createTextNode(t.formattedTime_), t.textNode_&&(e?t.contentEl_.replaceChild(t.textNode_, e):t.contentEl_.appendChild(t.textNode_))
                        }
                    }

                )))
    }

    ,
    i.updateContent=function(e) {}

    ,
    t
}

(Component$1);
TimeDisplay.prototype.labelText_="Time",
TimeDisplay.prototype.controlText_="Time",
Component$1.registerComponent("TimeDisplay", TimeDisplay);

var CurrentTimeDisplay=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-current-time"
    }

    ,
    i.updateContent=function(e) {
        var t;
        t=this.player_.ended()?this.player_.duration(): this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(), this.updateTextNode_(t)
    }

    ,
    t
}

(TimeDisplay);
CurrentTimeDisplay.prototype.labelText_="Current Time",
CurrentTimeDisplay.prototype.controlText_="Current Time",
Component$1.registerComponent("CurrentTimeDisplay", CurrentTimeDisplay);

var DurationDisplay=function(e) {
    function t(t, i) {

        var n,
        r=function(e) {
            return n.updateContent(e)
        }

        ;
        return(n=e.call(this, t, i)||this).on(t, "durationchange", r),
        n.on(t, "loadstart", r),
        n.on(t, "loadedmetadata", r),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-duration"
    }

    ,
    i.updateContent=function(e) {
        var t=this.player_.duration();
        this.updateTextNode_(t)
    }

    ,
    t
}

(TimeDisplay);
DurationDisplay.prototype.labelText_="Duration",
DurationDisplay.prototype.controlText_="Duration",
Component$1.registerComponent("DurationDisplay", DurationDisplay);

var TimeDivider=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createEl=function() {
        var t=e.prototype.createEl.call(this, "div", {
                className:"vjs-time-control vjs-time-divider"
            }

            , {
                "aria-hidden": !0
            }

        ),
        i=e.prototype.createEl.call(this, "div"),
        n=e.prototype.createEl.call(this, "span", {
                textContent:"/"
            }

        );
        return i.appendChild(n),
        t.appendChild(i),
        t
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("TimeDivider", TimeDivider);

var RemainingTimeDisplay=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on(t, "durationchange", (function(e) {
                    return n.updateContent(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-remaining-time"
    }

    ,
    i.createEl=function() {
        var t=e.prototype.createEl.call(this);

        return !1 !==this.options_.displayNegative&&t.insertBefore(createEl("span", {}

                , {
                    "aria-hidden": !0
                }

                , "-"), this.contentEl_),
        t
    }

    ,
    i.updateContent=function(e) {
        var t;
        "number"==typeof this.player_.duration()&&(t=this.player_.ended()?0:this.player_.remainingTimeDisplay?this.player_.remainingTimeDisplay():this.player_.remainingTime(), this.updateTextNode_(t))
    }

    ,
    t
}

(TimeDisplay);
RemainingTimeDisplay.prototype.labelText_="Remaining Time",
RemainingTimeDisplay.prototype.controlText_="Remaining Time",
Component$1.registerComponent("RemainingTimeDisplay", RemainingTimeDisplay);

var LiveDisplay=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).updateShowing(),
        n.on(n.player(), "durationchange", (function(e) {
                    return n.updateShowing(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        var t=e.prototype.createEl.call(this, "div", {
                className:"vjs-live-control vjs-control"
            }

        );

        return this.contentEl_=createEl("div", {
                className:"vjs-live-display"
            }

            , {
                "aria-live":"off"
            }

        ),
        this.contentEl_.appendChild(createEl("span", {
                    className:"vjs-control-text", textContent:this.localize("Stream Type")+" "
                }

            )),
        this.contentEl_.appendChild(document__default.default.createTextNode(this.localize("LIVE"))),
        t.appendChild(this.contentEl_),
        t
    }

    ,
    i.dispose=function() {
        this.contentEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.updateShowing=function(e) {
        this.player().duration()===1/0?this.show(): this.hide()
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("LiveDisplay", LiveDisplay);

var SeekToLive=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).updateLiveEdgeStatus(),
        n.player_.liveTracker&&(n.updateLiveEdgeStatusHandler_=function(e) {
                return n.updateLiveEdgeStatus(e)
            }

            , n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatusHandler_)),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        var t=e.prototype.createEl.call(this, "button", {
                className:"vjs-seek-to-live-control vjs-control"
            }

        );

        return this.textEl_=createEl("span", {
                className:"vjs-seek-to-live-text", textContent:this.localize("LIVE")
            }

            , {
                "aria-hidden":"true"
            }

        ),
        t.appendChild(this.textEl_),
        t
    }

    ,
    i.updateLiveEdgeStatus=function() {
         !this.player_.liveTracker||this.player_.liveTracker.atLiveEdge()?(this.setAttribute("aria-disabled",  !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")): (this.setAttribute("aria-disabled",  !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
    }

    ,
    i.handleClick=function() {
        this.player_.liveTracker.seekToLiveEdge()
    }

    ,
    i.dispose=function() {
        this.player_.liveTracker&&this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_),
        this.textEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    t
}

(Button);
SeekToLive.prototype.controlText_="Seek to live, currently playing live",
Component$1.registerComponent("SeekToLive", SeekToLive);

var clamp=function(e, t, i) {
    return e=Number(e),
    Math.min(i, Math.max(t, isNaN(e)?t:e))
}

,
Slider=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).handleMouseDown_=function(e) {
            return n.handleMouseDown(e)
        }

        ,
        n.handleMouseUp_=function(e) {
            return n.handleMouseUp(e)
        }

        ,
        n.handleKeyDown_=function(e) {
            return n.handleKeyDown(e)
        }

        ,
        n.handleClick_=function(e) {
            return n.handleClick(e)
        }

        ,
        n.handleMouseMove_=function(e) {
            return n.handleMouseMove(e)
        }

        ,
        n.update_=function(e) {
            return n.update(e)
        }

        ,
        n.bar=n.getChild(n.options_.barName),
        n.vertical( ! !n.options_.vertical),
        n.enable(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.enabled=function() {
        return this.enabled_
    }

    ,
    i.enable=function() {
        this.enabled()||(this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent&&this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_= !0)
    }

    ,
    i.disable=function() {
        if(this.enabled()) {
            var e=this.bar.el_.ownerDocument;
            this.off("mousedown", this.handleMouseDown_),
            this.off("touchstart", this.handleMouseDown_),
            this.off("keydown", this.handleKeyDown_),
            this.off("click", this.handleClick_),
            this.off(this.player_, "controlsvisible", this.update_),
            this.off(e, "mousemove", this.handleMouseMove_),
            this.off(e, "mouseup", this.handleMouseUp_),
            this.off(e, "touchmove", this.handleMouseMove_),
            this.off(e, "touchend", this.handleMouseUp_),
            this.removeAttribute("tabindex"),
            this.addClass("disabled"),
            this.playerEvent&&this.off(this.player_, this.playerEvent, this.update),
            this.enabled_= !1
        }
    }

    ,
    i.createEl=function(t, i, n) {
        return void 0===i&&(i= {}

        ),
        void 0===n&&(n= {}

        ),
        i.className=i.className+" vjs-slider",
        i=assign( {
                tabIndex:0
            }

            , i),
        n=assign( {
                role:"slider", "aria-valuenow":0, "aria-valuemin":0, "aria-valuemax":100, tabIndex:0
            }

            , n),
        e.prototype.createEl.call(this, t, i, n)
    }

    ,
    i.handleMouseDown=function(e) {
        var t=this.bar.el_.ownerDocument;
        "mousedown"===e.type&&e.preventDefault(),
        "touchstart" !==e.type||IS_CHROME||e.preventDefault(),
        blockTextSelection(),
        this.addClass("vjs-sliding"),
        this.trigger("slideractive"),
        this.on(t, "mousemove", this.handleMouseMove_),
        this.on(t, "mouseup", this.handleMouseUp_),
        this.on(t, "touchmove", this.handleMouseMove_),
        this.on(t, "touchend", this.handleMouseUp_),
        this.handleMouseMove(e,  !0)
    }

    ,
    i.handleMouseMove=function(e) {}

    ,
    i.handleMouseUp=function() {
        var e=this.bar.el_.ownerDocument;
        unblockTextSelection(),
        this.removeClass("vjs-sliding"),
        this.trigger("sliderinactive"),
        this.off(e, "mousemove", this.handleMouseMove_),
        this.off(e, "mouseup", this.handleMouseUp_),
        this.off(e, "touchmove", this.handleMouseMove_),
        this.off(e, "touchend", this.handleMouseUp_),
        this.update()
    }

    ,
    i.update=function() {
        var e=this;

        if(this.el_&&this.bar) {
            var t=this.getProgress();

            return t===this.progress_||(this.progress_=t, this.requestNamedAnimationFrame("Slider#update", (function() {
                            var i=e.vertical()?"height":"width"; e.bar.el().style[i]=(100*t).toFixed(2)+"%"
                        }

                    ))),
            t
        }
    }

    ,
    i.getProgress=function() {
        return Number(clamp(this.getPercent(), 0, 1).toFixed(4))
    }

    ,
    i.calculateDistance=function(e) {
        var t=getPointerPosition(this.el_, e);
        return this.vertical()?t.y: t.x
    }

    ,
    i.handleKeyDown=function(t) {
        keycode__default.default.isEventKey(t, "Left")||keycode__default.default.isEventKey(t, "Down")?(t.preventDefault(), t.stopPropagation(), this.stepBack()): keycode__default.default.isEventKey(t, "Right")||keycode__default.default.isEventKey(t, "Up")?(t.preventDefault(), t.stopPropagation(), this.stepForward()):e.prototype.handleKeyDown.call(this, t)
    }

    ,
    i.handleClick=function(e) {
        e.stopPropagation(),
        e.preventDefault()
    }

    ,
    i.vertical=function(e) {
        if(void 0===e)return this.vertical_|| !1;
        this.vertical_= ! !e,
        this.vertical_?this.addClass("vjs-slider-vertical"): this.addClass("vjs-slider-horizontal")
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("Slider", Slider);

var percentify=function(e, t) {
    return clamp(e/t*100, 0, 100).toFixed(2)+"%"
}

,
LoadProgressBar=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).partEls_=[],
        n.on(t, "progress", (function(e) {
                    return n.update(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        var t=e.prototype.createEl.call(this, "div", {
                className:"vjs-load-progress"
            }

        ),
        i=createEl("span", {
                className:"vjs-control-text"
            }

        ),
        n=createEl("span", {
                textContent:this.localize("Loaded")
            }

        ),
        r=document__default.default.createTextNode(": ");

        return this.percentageEl_=createEl("span", {
                className:"vjs-control-text-loaded-percentage", textContent:"0%"
            }

        ),
        t.appendChild(i),
        i.appendChild(n),
        i.appendChild(r),
        i.appendChild(this.percentageEl_),
        t
    }

    ,
    i.dispose=function() {
        this.partEls_=null,
        this.percentageEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.update=function(e) {
        var t=this;

        this.requestNamedAnimationFrame("LoadProgressBar#update", (function() {
                    var e=t.player_.liveTracker, i=t.player_.buffered(), n=e&&e.isLive()?e.seekableEnd():t.player_.duration(), r=t.player_.bufferedEnd(), a=t.partEls_, s=percentify(r, n); t.percent_ !==s&&(t.el_.style.width=s, textContent(t.percentageEl_, s), t.percent_=s); for(var o=0; o<i.length; o++) {
                        var l=i.start(o), u=i.end(o), d=a[o]; d||(d=t.el_.appendChild(createEl()), a[o]=d), d.dataset.start===l&&d.dataset.end===u||(d.dataset.start=l, d.dataset.end=u, d.style.left=percentify(l, r), d.style.width=percentify(u-l, r))
                    }

                    for(var c=a.length; c>i.length; c--)t.el_.removeChild(a[c-1]); a.length=i.length
                }

            ))
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("LoadProgressBar", LoadProgressBar);

var TimeTooltip=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).update=throttle(bind(_assertThisInitialized__default.default(n), n.update), UPDATE_REFRESH_INTERVAL),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-time-tooltip"
            }

            , {
                "aria-hidden":"true"
            }

        )
    }

    ,
    i.update=function(e, t, i) {
        var n=findPosition(this.el_),
        r=getBoundingClientRect(this.player_.el()),
        a=e.width*t;

        if(r&&n) {
            var s=e.left-r.left+a,
            o=e.width-a+(r.right-e.right),
            l=n.width/2;
            s<l?l+=l-s: o<l&&(l=o), l<0?l=0:l>n.width&&(l=n.width), l=Math.round(l), this.el_.style.right="-"+l+"px", this.write(i)
        }
    }

    ,
    i.write=function(e) {
        textContent(this.el_, e)
    }

    ,
    i.updateTime=function(e, t, i, n) {
        var r=this;

        this.requestNamedAnimationFrame("TimeTooltip#updateTime", (function() {
                    var a, s=r.player_.duration(); if(r.player_.liveTracker&&r.player_.liveTracker.isLive()) {
                        var o=r.player_.liveTracker.liveWindow(), l=o-t*o; a=(l<1?"":"-")+formatTime(l, o)
                    }

                    else a=formatTime(i, s); r.update(e, t, a), n&&n()
                }

            ))
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("TimeTooltip", TimeTooltip);

var PlayProgressBar=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).update=throttle(bind(_assertThisInitialized__default.default(n), n.update), UPDATE_REFRESH_INTERVAL),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-play-progress vjs-slider-bar"
            }

            , {
                "aria-hidden":"true"
            }

        )
    }

    ,
    i.update=function(e, t) {
        var i=this.getChild("timeTooltip");

        if(i) {
            var n=this.player_.scrubbing()?this.player_.getCache().currentTime: this.player_.currentTime();
            i.updateTime(e, t, n)
        }
    }

    ,
    t
}

(Component$1);

PlayProgressBar.prototype.options_= {
    children: []
}

,
IS_IOS||IS_ANDROID||PlayProgressBar.prototype.options_.children.push("timeTooltip"),
Component$1.registerComponent("PlayProgressBar", PlayProgressBar);

var MouseTimeDisplay=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).update=throttle(bind(_assertThisInitialized__default.default(n), n.update), UPDATE_REFRESH_INTERVAL),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-mouse-display"
            }

        )
    }

    ,
    i.update=function(e, t) {
        var i=this,
        n=t*this.player_.duration();

        this.getChild("timeTooltip").updateTime(e, t, n, (function() {
                    i.el_.style.left=e.width*t+"px"
                }

            ))
    }

    ,
    t
}

(Component$1);

MouseTimeDisplay.prototype.options_= {
    children: ["timeTooltip"]
}

,
Component$1.registerComponent("MouseTimeDisplay", MouseTimeDisplay);

var STEP_SECONDS=5,
PAGE_KEY_MULTIPLIER=12,
SeekBar=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).setEventHandlers_(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.setEventHandlers_=function() {
        var e=this;

        this.update_=bind(this, this.update),
        this.update=throttle(this.update_, UPDATE_REFRESH_INTERVAL),
        this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
        this.player_.liveTracker&&this.on(this.player_.liveTracker, "liveedgechange", this.update),
        this.updateInterval=null,
        this.enableIntervalHandler_=function(t) {
            return e.enableInterval_(t)
        }

        ,
        this.disableIntervalHandler_=function(t) {
            return e.disableInterval_(t)
        }

        ,
        this.on(this.player_, ["playing"], this.enableIntervalHandler_),
        this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_),
        "hidden"in document__default.default&&"visibilityState"in document__default.default&&this.on(document__default.default, "visibilitychange", this.toggleVisibility_)
    }

    ,
    i.toggleVisibility_=function(e) {
        "hidden"===document__default.default.visibilityState?(this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)): (this.player_.ended()||this.player_.paused()||this.enableInterval_(), this.update())
    }

    ,
    i.enableInterval_=function() {
        this.updateInterval||(this.updateInterval=this.setInterval(this.update, UPDATE_REFRESH_INTERVAL))
    }

    ,
    i.disableInterval_=function(e) {
        this.player_.liveTracker&&this.player_.liveTracker.isLive()&&e&&"ended" !==e.type||this.updateInterval&&(this.clearInterval(this.updateInterval), this.updateInterval=null)
    }

    ,
    i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-progress-holder"
            }

            , {
                "aria-label":this.localize("Progress Bar")
            }

        )
    }

    ,
    i.update=function(t) {
        var i=this;

        if("hidden" !==document__default.default.visibilityState) {
            var n=e.prototype.update.call(this);

            return this.requestNamedAnimationFrame("SeekBar#update", (function() {
                        var e=i.player_.ended()?i.player_.duration():i.getCurrentTime_(), t=i.player_.liveTracker, r=i.player_.duration(); t&&t.isLive()&&(r=i.player_.liveTracker.liveCurrentTime()), i.percent_ !==n&&(i.el_.setAttribute("aria-valuenow", (100*n).toFixed(2)), i.percent_=n), i.currentTime_===e&&i.duration_===r||(i.el_.setAttribute("aria-valuetext", i.localize("progress bar timing: currentTime={1} duration={2}", [formatTime(e, r), formatTime(r, r)], "{1} of {2}")), i.currentTime_=e, i.duration_=r), i.bar&&i.bar.update(getBoundingClientRect(i.el()), i.getProgress())
                    }

                )),
            n
        }
    }

    ,
    i.userSeek_=function(e) {
        this.player_.liveTracker&&this.player_.liveTracker.isLive()&&this.player_.liveTracker.nextSeekedFromUser(),
        this.player_.currentTime(e)
    }

    ,
    i.getCurrentTime_=function() {
        return this.player_.scrubbing()?this.player_.getCache().currentTime: this.player_.currentTime()
    }

    ,
    i.getPercent=function() {
        var e,
        t=this.getCurrentTime_(),
        i=this.player_.liveTracker;
        return i&&i.isLive()?(e=(t-i.seekableStart())/i.liveWindow(), i.atLiveEdge()&&(e=1)): e=t/this.player_.duration(), e
    }

    ,
    i.handleMouseDown=function(t) {
        isSingleLeftClick(t)&&(t.stopPropagation(), this.videoWasPlaying= !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
    }

    ,
    i.handleMouseMove=function(e, t) {
        if(void 0===t&&(t= !1), isSingleLeftClick(e)) {
            var i;
            t||this.player_.scrubbing()||this.player_.scrubbing( !0);
            var n=this.calculateDistance(e),
            r=this.player_.liveTracker;

            if(r&&r.isLive()) {
                if(n>=.99)return void r.seekToLiveEdge();
                var a=r.seekableStart(),
                s=r.liveCurrentTime();
                if((i=a+n*r.liveWindow())>=s&&(i=s), i<=a&&(i=a+.1), i===1/0)return
            }

            else(i=n*this.player_.duration())===this.player_.duration()&&(i-=.1);
            this.userSeek_(i)
        }
    }

    ,
    i.enable=function() {
        e.prototype.enable.call(this);
        var t=this.getChild("mouseTimeDisplay");
        t&&t.show()
    }

    ,
    i.disable=function() {
        e.prototype.disable.call(this);
        var t=this.getChild("mouseTimeDisplay");
        t&&t.hide()
    }

    ,
    i.handleMouseUp=function(t) {

        e.prototype.handleMouseUp.call(this, t),
        t&&t.stopPropagation(),
        this.player_.scrubbing( !1),
        this.player_.trigger( {
                type:"timeupdate", target:this, manuallyTriggered: !0
            }

        ),
        this.videoWasPlaying?silencePromise(this.player_.play()):this.update_()
    }

    ,
    i.stepForward=function() {
        this.userSeek_(this.player_.currentTime()+STEP_SECONDS)
    }

    ,
    i.stepBack=function() {
        this.userSeek_(this.player_.currentTime()-STEP_SECONDS)
    }

    ,
    i.handleAction=function(e) {
        this.player_.paused()?this.player_.play(): this.player_.pause()
    }

    ,
    i.handleKeyDown=function(t) {
        var i=this.player_.liveTracker;
        if(keycode__default.default.isEventKey(t, "Space")||keycode__default.default.isEventKey(t, "Enter"))t.preventDefault(),
        t.stopPropagation(),
        this.handleAction(t);
        else if(keycode__default.default.isEventKey(t, "Home"))t.preventDefault(),
        t.stopPropagation(),
        this.userSeek_(0);
        else if(keycode__default.default.isEventKey(t, "End"))t.preventDefault(),
        t.stopPropagation(),
        i&&i.isLive()?this.userSeek_(i.liveCurrentTime()): this.userSeek_(this.player_.duration());

        else if(/^[0-9]$/.test(keycode__default.default(t))) {
            t.preventDefault(),
            t.stopPropagation();
            var n=10*(keycode__default.default.codes[keycode__default.default(t)]-keycode__default.default.codes[0])/100;
            i&&i.isLive()?this.userSeek_(i.seekableStart()+i.liveWindow()*n): this.userSeek_(this.player_.duration()*n)
        }

        else keycode__default.default.isEventKey(t, "PgDn")?(t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime()-STEP_SECONDS*PAGE_KEY_MULTIPLIER)):keycode__default.default.isEventKey(t, "PgUp")?(t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime()+STEP_SECONDS*PAGE_KEY_MULTIPLIER)):e.prototype.handleKeyDown.call(this, t)
    }

    ,
    i.dispose=function() {
        this.disableInterval_(),
        this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
        this.player_.liveTracker&&this.off(this.player_.liveTracker, "liveedgechange", this.update),
        this.off(this.player_, ["playing"], this.enableIntervalHandler_),
        this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_),
        "hidden"in document__default.default&&"visibilityState"in document__default.default&&this.off(document__default.default, "visibilitychange", this.toggleVisibility_),
        e.prototype.dispose.call(this)
    }

    ,
    t
}

(Slider);

SeekBar.prototype.options_= {
    children: ["loadProgressBar", "playProgressBar"], barName:"playProgressBar"
}

,
IS_IOS||IS_ANDROID||SeekBar.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
Component$1.registerComponent("SeekBar", SeekBar);

var ProgressControl=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).handleMouseMove=throttle(bind(_assertThisInitialized__default.default(n), n.handleMouseMove), UPDATE_REFRESH_INTERVAL),
        n.throttledHandleMouseSeek=throttle(bind(_assertThisInitialized__default.default(n), n.handleMouseSeek), UPDATE_REFRESH_INTERVAL),
        n.handleMouseUpHandler_=function(e) {
            return n.handleMouseUp(e)
        }

        ,
        n.handleMouseDownHandler_=function(e) {
            return n.handleMouseDown(e)
        }

        ,
        n.enable(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-progress-control vjs-control"
            }

        )
    }

    ,
    i.handleMouseMove=function(e) {
        var t=this.getChild("seekBar");

        if(t) {
            var i=t.getChild("playProgressBar"),
            n=t.getChild("mouseTimeDisplay");

            if(i||n) {
                var r=t.el(),
                a=findPosition(r),
                s=getPointerPosition(r, e).x;
                s=clamp(s, 0, 1),
                n&&n.update(a, s),
                i&&i.update(a, t.getProgress())
            }
        }
    }

    ,
    i.handleMouseSeek=function(e) {
        var t=this.getChild("seekBar");
        t&&t.handleMouseMove(e)
    }

    ,
    i.enabled=function() {
        return this.enabled_
    }

    ,
    i.disable=function() {
        if(this.children().forEach((function(e) {
                        return e.disable&&e.disable()
                    }

                )), this.enabled()&&(this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_= !1, this.player_.scrubbing())) {
            var e=this.getChild("seekBar");
            this.player_.scrubbing( !1),
            e.videoWasPlaying&&silencePromise(this.player_.play())
        }
    }

    ,
    i.enable=function() {
        this.children().forEach((function(e) {
                    return e.enable&&e.enable()
                }

            )),
        this.enabled()||(this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_= !0)
    }

    ,
    i.removeListenersAddedOnMousedownAndTouchstart=function() {
        var e=this.el_.ownerDocument;
        this.off(e, "mousemove", this.throttledHandleMouseSeek),
        this.off(e, "touchmove", this.throttledHandleMouseSeek),
        this.off(e, "mouseup", this.handleMouseUpHandler_),
        this.off(e, "touchend", this.handleMouseUpHandler_)
    }

    ,
    i.handleMouseDown=function(e) {
        var t=this.el_.ownerDocument,
        i=this.getChild("seekBar");
        i&&i.handleMouseDown(e),
        this.on(t, "mousemove", this.throttledHandleMouseSeek),
        this.on(t, "touchmove", this.throttledHandleMouseSeek),
        this.on(t, "mouseup", this.handleMouseUpHandler_),
        this.on(t, "touchend", this.handleMouseUpHandler_)
    }

    ,
    i.handleMouseUp=function(e) {
        var t=this.getChild("seekBar");
        t&&t.handleMouseUp(e),
        this.removeListenersAddedOnMousedownAndTouchstart()
    }

    ,
    t
}

(Component$1);

ProgressControl.prototype.options_= {
    children: ["seekBar"]
}

,
Component$1.registerComponent("ProgressControl", ProgressControl);

var PictureInPictureToggle=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on(t, ["enterpictureinpicture", "leavepictureinpicture"], (function(e) {
                    return n.handlePictureInPictureChange(e)
                }

            )),
        n.on(t, ["disablepictureinpicturechanged", "loadedmetadata"], (function(e) {
                    return n.handlePictureInPictureEnabledChange(e)
                }

            )),
        n.on(t, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], (function() {
                    "audio"===t.currentType().substring(0, 5)||t.audioPosterMode()||t.audioOnlyMode()?(t.isInPictureInPicture()&&t.exitPictureInPicture(), n.hide()):n.show()
                }

            )),
        n.disable(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-picture-in-picture-control "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.handlePictureInPictureEnabledChange=function() {
        document__default.default.pictureInPictureEnabled&& !1===this.player_.disablePictureInPicture()?this.enable(): this.disable()
    }

    ,
    i.handlePictureInPictureChange=function(e) {
        this.player_.isInPictureInPicture()?this.controlText("Exit Picture-in-Picture"): this.controlText("Picture-in-Picture"), this.handlePictureInPictureEnabledChange()
    }

    ,
    i.handleClick=function(e) {
        this.player_.isInPictureInPicture()?this.player_.exitPictureInPicture(): this.player_.requestPictureInPicture()
    }

    ,
    t
}

(Button);
PictureInPictureToggle.prototype.controlText_="Picture-in-Picture",
Component$1.registerComponent("PictureInPictureToggle", PictureInPictureToggle);

var FullscreenToggle=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on(t, "fullscreenchange", (function(e) {
                    return n.handleFullscreenChange(e)
                }

            )),
         !1===document__default.default[t.fsApi_.fullscreenEnabled]&&n.disable(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-fullscreen-control "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.handleFullscreenChange=function(e) {
        this.player_.isFullscreen()?this.controlText("Non-Fullscreen"): this.controlText("Fullscreen")
    }

    ,
    i.handleClick=function(e) {
        this.player_.isFullscreen()?this.player_.exitFullscreen(): this.player_.requestFullscreen()
    }

    ,
    t
}

(Button);
FullscreenToggle.prototype.controlText_="Fullscreen",
Component$1.registerComponent("FullscreenToggle", FullscreenToggle);

var checkVolumeSupport=function(e, t) {

    t.tech_&& !t.tech_.featuresVolumeControl&&e.addClass("vjs-hidden"),
    e.on(t, "loadstart", (function() {
                t.tech_.featuresVolumeControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")
            }

        ))
}

,
VolumeLevel=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createEl=function() {
        var t=e.prototype.createEl.call(this, "div", {
                className:"vjs-volume-level"
            }

        );

        return t.appendChild(e.prototype.createEl.call(this, "span", {
                    className:"vjs-control-text"
                }

            )),
        t
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("VolumeLevel", VolumeLevel);

var VolumeLevelTooltip=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).update=throttle(bind(_assertThisInitialized__default.default(n), n.update), UPDATE_REFRESH_INTERVAL),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-volume-tooltip"
            }

            , {
                "aria-hidden":"true"
            }

        )
    }

    ,
    i.update=function(e, t, i, n) {
        if( !i) {
            var r=getBoundingClientRect(this.el_),
            a=getBoundingClientRect(this.player_.el()),
            s=e.width*t;
            if( !a|| !r)return;
            var o=e.left-a.left+s,
            l=e.width-s+(a.right-e.right),
            u=r.width/2;
            o<u?u+=u-o: l<u&&(u=l), u<0?u=0:u>r.width&&(u=r.width), this.el_.style.right="-"+u+"px"
        }

        this.write(n+"%")
    }

    ,
    i.write=function(e) {
        textContent(this.el_, e)
    }

    ,
    i.updateVolume=function(e, t, i, n, r) {
        var a=this;

        this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", (function() {
                    a.update(e, t, i, n.toFixed(0)), r&&r()
                }

            ))
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("VolumeLevelTooltip", VolumeLevelTooltip);

var MouseVolumeLevelDisplay=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).update=throttle(bind(_assertThisInitialized__default.default(n), n.update), UPDATE_REFRESH_INTERVAL),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-mouse-display"
            }

        )
    }

    ,
    i.update=function(e, t, i) {
        var n=this,
        r=100*t;

        this.getChild("volumeLevelTooltip").updateVolume(e, t, i, r, (function() {
                    i?n.el_.style.bottom=e.height*t+"px":n.el_.style.left=e.width*t+"px"
                }

            ))
    }

    ,
    t
}

(Component$1);

MouseVolumeLevelDisplay.prototype.options_= {
    children: ["volumeLevelTooltip"]
}

,
Component$1.registerComponent("MouseVolumeLevelDisplay", MouseVolumeLevelDisplay);

var VolumeBar=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on("slideractive", (function(e) {
                    return n.updateLastVolume_(e)
                }

            )),
        n.on(t, "volumechange", (function(e) {
                    return n.updateARIAAttributes(e)
                }

            )),
        t.ready((function() {
                    return n.updateARIAAttributes()
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-volume-bar vjs-slider-bar"
            }

            , {
                "aria-label":this.localize("Volume Level"), "aria-live":"polite"
            }

        )
    }

    ,
    i.handleMouseDown=function(t) {
        isSingleLeftClick(t)&&e.prototype.handleMouseDown.call(this, t)
    }

    ,
    i.handleMouseMove=function(e) {
        var t=this.getChild("mouseVolumeLevelDisplay");

        if(t) {
            var i=this.el(),
            n=getBoundingClientRect(i),
            r=this.vertical(),
            a=getPointerPosition(i, e);
            a=r?a.y: a.x, a=clamp(a, 0, 1), t.update(n, a, r)
        }

        isSingleLeftClick(e)&&(this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
    }

    ,
    i.checkMuted=function() {
        this.player_.muted()&&this.player_.muted( !1)
    }

    ,
    i.getPercent=function() {
        return this.player_.muted()?0: this.player_.volume()
    }

    ,
    i.stepForward=function() {
        this.checkMuted(),
        this.player_.volume(this.player_.volume()+.1)
    }

    ,
    i.stepBack=function() {
        this.checkMuted(),
        this.player_.volume(this.player_.volume()-.1)
    }

    ,
    i.updateARIAAttributes=function(e) {
        var t=this.player_.muted()?0: this.volumeAsPercentage_();
        this.el_.setAttribute("aria-valuenow", t),
        this.el_.setAttribute("aria-valuetext", t+"%")
    }

    ,
    i.volumeAsPercentage_=function() {
        return Math.round(100*this.player_.volume())
    }

    ,
    i.updateLastVolume_=function() {
        var e=this,
        t=this.player_.volume();

        this.one("sliderinactive", (function() {
                    0===e.player_.volume()&&e.player_.lastVolume_(t)
                }

            ))
    }

    ,
    t
}

(Slider);

VolumeBar.prototype.options_= {
    children: ["volumeLevel"], barName:"volumeLevel"
}

,
IS_IOS||IS_ANDROID||VolumeBar.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"),
VolumeBar.prototype.playerEvent="volumechange",
Component$1.registerComponent("VolumeBar", VolumeBar);

var VolumeControl=function(e) {
    function t(t, i) {
        var n;

        return void 0===i&&(i= {}

        ),
        i.vertical=i.vertical|| !1,
        (void 0===i.volumeBar||isPlain(i.volumeBar))&&(i.volumeBar=i.volumeBar|| {}

            , i.volumeBar.vertical=i.vertical),
        n=e.call(this, t, i)||this,
        checkVolumeSupport(_assertThisInitialized__default.default(n), t),
        n.throttledHandleMouseMove=throttle(bind(_assertThisInitialized__default.default(n), n.handleMouseMove), UPDATE_REFRESH_INTERVAL),
        n.handleMouseUpHandler_=function(e) {
            return n.handleMouseUp(e)
        }

        ,
        n.on("mousedown", (function(e) {
                    return n.handleMouseDown(e)
                }

            )),
        n.on("touchstart", (function(e) {
                    return n.handleMouseDown(e)
                }

            )),
        n.on("mousemove", (function(e) {
                    return n.handleMouseMove(e)
                }

            )),
        n.on(n.volumeBar, ["focus", "slideractive"], (function() {
                    n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive")
                }

            )),
        n.on(n.volumeBar, ["blur", "sliderinactive"], (function() {
                    n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), n.trigger("sliderinactive")
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        var t="vjs-volume-horizontal";

        return this.options_.vertical&&(t="vjs-volume-vertical"),
        e.prototype.createEl.call(this, "div", {
                className:"vjs-volume-control vjs-control "+t
            }

        )
    }

    ,
    i.handleMouseDown=function(e) {
        var t=this.el_.ownerDocument;
        this.on(t, "mousemove", this.throttledHandleMouseMove),
        this.on(t, "touchmove", this.throttledHandleMouseMove),
        this.on(t, "mouseup", this.handleMouseUpHandler_),
        this.on(t, "touchend", this.handleMouseUpHandler_)
    }

    ,
    i.handleMouseUp=function(e) {
        var t=this.el_.ownerDocument;
        this.off(t, "mousemove", this.throttledHandleMouseMove),
        this.off(t, "touchmove", this.throttledHandleMouseMove),
        this.off(t, "mouseup", this.handleMouseUpHandler_),
        this.off(t, "touchend", this.handleMouseUpHandler_)
    }

    ,
    i.handleMouseMove=function(e) {
        this.volumeBar.handleMouseMove(e)
    }

    ,
    t
}

(Component$1);

VolumeControl.prototype.options_= {
    children: ["volumeBar"]
}

,
Component$1.registerComponent("VolumeControl", VolumeControl);

var checkMuteSupport=function(e, t) {

    t.tech_&& !t.tech_.featuresMuteControl&&e.addClass("vjs-hidden"),
    e.on(t, "loadstart", (function() {
                t.tech_.featuresMuteControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")
            }

        ))
}

,
MuteToggle=function(e) {
    function t(t, i) {
        var n;

        return n=e.call(this, t, i)||this,
        checkMuteSupport(_assertThisInitialized__default.default(n), t),
        n.on(t, ["loadstart", "volumechange"], (function(e) {
                    return n.update(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-mute-control "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.handleClick=function(e) {
        var t=this.player_.volume(),
        i=this.player_.lastVolume_();

        if(0===t) {
            var n=i<.1?.1: i;
            this.player_.volume(n),
            this.player_.muted( !1)
        }

        else this.player_.muted( !this.player_.muted())
    }

    ,
    i.update=function(e) {
        this.updateIcon_(),
        this.updateControlText_()
    }

    ,
    i.updateIcon_=function() {
        var e=this.player_.volume(),
        t=3;
        IS_IOS&&this.player_.tech_&&this.player_.tech_.el_&&this.player_.muted(this.player_.tech_.el_.muted),
        0===e||this.player_.muted()?t=0: e<.33?t=1:e<.67&&(t=2);
        for(var i=0; i<4; i++)removeClass(this.el_, "vjs-vol-"+i);
        addClass(this.el_, "vjs-vol-"+t)
    }

    ,
    i.updateControlText_=function() {
        var e=this.player_.muted()||0===this.player_.volume()?"Unmute": "Mute";
        this.controlText() !==e&&this.controlText(e)
    }

    ,
    t
}

(Button);
MuteToggle.prototype.controlText_="Mute",
Component$1.registerComponent("MuteToggle", MuteToggle);

var VolumePanel=function(e) {
    function t(t, i) {
        var n;

        return void 0===i&&(i= {}

        ),
        void 0 !==i.inline?i.inline=i.inline:i.inline= !0,
        (void 0===i.volumeControl||isPlain(i.volumeControl))&&(i.volumeControl=i.volumeControl|| {}

            , i.volumeControl.vertical= !i.inline),
        (n=e.call(this, t, i)||this).handleKeyPressHandler_=function(e) {
            return n.handleKeyPress(e)
        }

        ,
        n.on(t, ["loadstart"], (function(e) {
                    return n.volumePanelState_(e)
                }

            )),
        n.on(n.muteToggle, "keyup", (function(e) {
                    return n.handleKeyPress(e)
                }

            )),
        n.on(n.volumeControl, "keyup", (function(e) {
                    return n.handleVolumeControlKeyUp(e)
                }

            )),
        n.on("keydown", (function(e) {
                    return n.handleKeyPress(e)
                }

            )),
        n.on("mouseover", (function(e) {
                    return n.handleMouseOver(e)
                }

            )),
        n.on("mouseout", (function(e) {
                    return n.handleMouseOut(e)
                }

            )),
        n.on(n.volumeControl, ["slideractive"], n.sliderActive_),
        n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.sliderActive_=function() {
        this.addClass("vjs-slider-active")
    }

    ,
    i.sliderInactive_=function() {
        this.removeClass("vjs-slider-active")
    }

    ,
    i.volumePanelState_=function() {
        this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden"),
        this.volumeControl.hasClass("vjs-hidden")&& !this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")
    }

    ,
    i.createEl=function() {
        var t="vjs-volume-panel-horizontal";

        return this.options_.inline||(t="vjs-volume-panel-vertical"),
        e.prototype.createEl.call(this, "div", {
                className:"vjs-volume-panel vjs-control "+t
            }

        )
    }

    ,
    i.dispose=function() {
        this.handleMouseOut(),
        e.prototype.dispose.call(this)
    }

    ,
    i.handleVolumeControlKeyUp=function(e) {
        keycode__default.default.isEventKey(e, "Esc")&&this.muteToggle.focus()
    }

    ,
    i.handleMouseOver=function(e) {
        this.addClass("vjs-hover"),
        on(document__default.default, "keyup", this.handleKeyPressHandler_)
    }

    ,
    i.handleMouseOut=function(e) {
        this.removeClass("vjs-hover"),
        off(document__default.default, "keyup", this.handleKeyPressHandler_)
    }

    ,
    i.handleKeyPress=function(e) {
        keycode__default.default.isEventKey(e, "Esc")&&this.handleMouseOut()
    }

    ,
    t
}

(Component$1);

VolumePanel.prototype.options_= {
    children: ["muteToggle", "volumeControl"]
}

,
Component$1.registerComponent("VolumePanel", VolumePanel);

var Menu=function(e) {
    function t(t, i) {
        var n;

        return n=e.call(this, t, i)||this,
        i&&(n.menuButton_=i.menuButton),
        n.focusedChild_=-1,
        n.on("keydown", (function(e) {
                    return n.handleKeyDown(e)
                }

            )),
        n.boundHandleBlur_=function(e) {
            return n.handleBlur(e)
        }

        ,
        n.boundHandleTapClick_=function(e) {
            return n.handleTapClick(e)
        }

        ,
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.addEventListenerForItem=function(e) {
        e instanceof Component$1&&(this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
    }

    ,
    i.removeEventListenerForItem=function(e) {
        e instanceof Component$1&&(this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
    }

    ,
    i.removeChild=function(t) {
        "string"==typeof t&&(t=this.getChild(t)),
        this.removeEventListenerForItem(t),
        e.prototype.removeChild.call(this, t)
    }

    ,
    i.addItem=function(e) {
        var t=this.addChild(e);
        t&&this.addEventListenerForItem(t)
    }

    ,
    i.createEl=function() {
        var t=this.options_.contentElType||"ul";

        this.contentEl_=createEl(t, {
                className:"vjs-menu-content"
            }

        ),
        this.contentEl_.setAttribute("role", "menu");

        var i=e.prototype.createEl.call(this, "div", {
                append:this.contentEl_, className:"vjs-menu"
            }

        );

        return i.appendChild(this.contentEl_),
        on(i, "click", (function(e) {
                    e.preventDefault(), e.stopImmediatePropagation()
                }

            )),
        i
    }

    ,
    i.dispose=function() {
        this.contentEl_=null,
        this.boundHandleBlur_=null,
        this.boundHandleTapClick_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.handleBlur=function(e) {
        var t=e.relatedTarget||document__default.default.activeElement;

        if( !this.children().some((function(e) {
                        return e.el()===t
                    }

                ))) {
            var i=this.menuButton_;
            i&&i.buttonPressed_&&t !==i.el().firstChild&&i.unpressButton()
        }
    }

    ,
    i.handleTapClick=function(e) {
        if(this.menuButton_) {
            this.menuButton_.unpressButton();
            var t=this.children();
            if( !Array.isArray(t))return;

            var i=t.filter((function(t) {
                        return t.el()===e.target
                    }

                ))[0];
            if( !i)return;
            "CaptionSettingsMenuItem" !==i.name()&&this.menuButton_.focus()
        }
    }

    ,
    i.handleKeyDown=function(e) {
        keycode__default.default.isEventKey(e, "Left")||keycode__default.default.isEventKey(e, "Down")?(e.preventDefault(), e.stopPropagation(), this.stepForward()): (keycode__default.default.isEventKey(e, "Right")||keycode__default.default.isEventKey(e, "Up"))&&(e.preventDefault(), e.stopPropagation(), this.stepBack())
    }

    ,
    i.stepForward=function() {
        var e=0;
        void 0 !==this.focusedChild_&&(e=this.focusedChild_+1),
        this.focus(e)
    }

    ,
    i.stepBack=function() {
        var e=0;
        void 0 !==this.focusedChild_&&(e=this.focusedChild_-1),
        this.focus(e)
    }

    ,
    i.focus=function(e) {
        void 0===e&&(e=0);
        var t=this.children().slice();
        t.length&&t[0].hasClass("vjs-menu-title")&&t.shift(),
        t.length>0&&(e<0?e=0:e>=t.length&&(e=t.length-1), this.focusedChild_=e, t[e].el_.focus())
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("Menu", Menu);

var MenuButton=function(e) {
    function t(t, i) {
        var n;

        void 0===i&&(i= {}

        ),
        (n=e.call(this, t, i)||this).menuButton_=new Button(t, i),
        n.menuButton_.controlText(n.controlText_),
        n.menuButton_.el_.setAttribute("aria-haspopup", "true");
        var r=Button.prototype.buildCSSClass();
        n.menuButton_.el_.className=n.buildCSSClass()+" "+r,
        n.menuButton_.removeClass("vjs-control"),
        n.addChild(n.menuButton_),
        n.update(),
        n.enabled_= !0;

        var a=function(e) {
            return n.handleClick(e)
        }

        ;

        return n.handleMenuKeyUp_=function(e) {
            return n.handleMenuKeyUp(e)
        }

        ,
        n.on(n.menuButton_, "tap", a),
        n.on(n.menuButton_, "click", a),
        n.on(n.menuButton_, "keydown", (function(e) {
                    return n.handleKeyDown(e)
                }

            )),
        n.on(n.menuButton_, "mouseenter", (function() {
                    n.addClass("vjs-hover"), n.menu.show(), on(document__default.default, "keyup", n.handleMenuKeyUp_)
                }

            )),
        n.on("mouseleave", (function(e) {
                    return n.handleMouseLeave(e)
                }

            )),
        n.on("keydown", (function(e) {
                    return n.handleSubmenuKeyDown(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.update=function() {
        var e=this.createMenu();
        this.menu&&(this.menu.dispose(), this.removeChild(this.menu)),
        this.menu=e,
        this.addChild(e),
        this.buttonPressed_= !1,
        this.menuButton_.el_.setAttribute("aria-expanded", "false"),
        this.items&&this.items.length<=this.hideThreshold_?(this.hide(), this.menu.contentEl_.removeAttribute("role")): (this.show(), this.menu.contentEl_.setAttribute("role", "menu"))
    }

    ,
    i.createMenu=function() {
        var e=new Menu(this.player_, {
                menuButton:this
            }

        );

        if(this.hideThreshold_=0, this.options_.title) {
            var t=createEl("li", {
                    className:"vjs-menu-title", textContent:toTitleCase$1(this.options_.title), tabIndex:-1
                }

            ),
            i=new Component$1(this.player_, {
                    el:t
                }

            );
            e.addItem(i)
        }

        if(this.items=this.createItems(), this.items)for(var n=0; n<this.items.length; n++)e.addItem(this.items[n]);
        return e
    }

    ,
    i.createItems=function() {}

    ,
    i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:this.buildWrapperCSSClass()
            }

            , {}

        )
    }

    ,
    i.buildWrapperCSSClass=function() {
        var t="vjs-menu-button";
        return !0===this.options_.inline?t+="-inline": t+="-popup", "vjs-menu-button "+t+" "+Button.prototype.buildCSSClass()+" "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildCSSClass=function() {
        var t="vjs-menu-button";
        return !0===this.options_.inline?t+="-inline": t+="-popup", "vjs-menu-button "+t+" "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.controlText=function(e, t) {
        return void 0===t&&(t=this.menuButton_.el()),
        this.menuButton_.controlText(e, t)
    }

    ,
    i.dispose=function() {
        this.handleMouseLeave(),
        e.prototype.dispose.call(this)
    }

    ,
    i.handleClick=function(e) {
        this.buttonPressed_?this.unpressButton(): this.pressButton()
    }

    ,
    i.handleMouseLeave=function(e) {
        this.removeClass("vjs-hover"),
        off(document__default.default, "keyup", this.handleMenuKeyUp_)
    }

    ,
    i.focus=function() {
        this.menuButton_.focus()
    }

    ,
    i.blur=function() {
        this.menuButton_.blur()
    }

    ,
    i.handleKeyDown=function(e) {
        keycode__default.default.isEventKey(e, "Esc")||keycode__default.default.isEventKey(e, "Tab")?(this.buttonPressed_&&this.unpressButton(), keycode__default.default.isEventKey(e, "Tab")||(e.preventDefault(), this.menuButton_.focus())): (keycode__default.default.isEventKey(e, "Up")||keycode__default.default.isEventKey(e, "Down"))&&(this.buttonPressed_||(e.preventDefault(), this.pressButton()))
    }

    ,
    i.handleMenuKeyUp=function(e) {
        (keycode__default.default.isEventKey(e, "Esc")||keycode__default.default.isEventKey(e, "Tab"))&&this.removeClass("vjs-hover")
    }

    ,
    i.handleSubmenuKeyPress=function(e) {
        this.handleSubmenuKeyDown(e)
    }

    ,
    i.handleSubmenuKeyDown=function(e) {
        (keycode__default.default.isEventKey(e, "Esc")||keycode__default.default.isEventKey(e, "Tab"))&&(this.buttonPressed_&&this.unpressButton(), keycode__default.default.isEventKey(e, "Tab")||(e.preventDefault(), this.menuButton_.focus()))
    }

    ,
    i.pressButton=function() {
        if(this.enabled_) {
            if(this.buttonPressed_= !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), IS_IOS&&isInFrame())return;
            this.menu.focus()
        }
    }

    ,
    i.unpressButton=function() {
        this.enabled_&&(this.buttonPressed_= !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
    }

    ,
    i.disable=function() {
        this.unpressButton(),
        this.enabled_= !1,
        this.addClass("vjs-disabled"),
        this.menuButton_.disable()
    }

    ,
    i.enable=function() {
        this.enabled_= !0,
        this.removeClass("vjs-disabled"),
        this.menuButton_.enable()
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("MenuButton", MenuButton);

var TrackButton=function(e) {
    function t(t, i) {
        var n,
        r=i.tracks;
        if((n=e.call(this, t, i)||this).items.length<=1&&n.hide(),  !r)return _assertThisInitialized__default.default(n);
        var a=bind(_assertThisInitialized__default.default(n), n.update);

        return r.addEventListener("removetrack", a),
        r.addEventListener("addtrack", a),
        r.addEventListener("labelchange", a),
        n.player_.on("ready", a),
        n.player_.on("dispose", (function() {
                    r.removeEventListener("removetrack", a), r.removeEventListener("addtrack", a), r.removeEventListener("labelchange", a)
                }

            )),
        n
    }

    return _inheritsLoose__default.default(t, e),
    t
}

(MenuButton);
Component$1.registerComponent("TrackButton", TrackButton);

var MenuKeys=["Tab",
"Esc",
"Up",
"Down",
"Right",
"Left"],
MenuItem=function(e) {
    function t(t, i) {
        var n;
        return(n=e.call(this, t, i)||this).selectable=i.selectable,
        n.isSelected_=i.selected|| !1,
        n.multiSelectable=i.multiSelectable,
        n.selected(n.isSelected_),
        n.selectable?n.multiSelectable?n.el_.setAttribute("role", "menuitemcheckbox"): n.el_.setAttribute("role", "menuitemradio"):n.el_.setAttribute("role", "menuitem"), n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function(t, i, n) {
        this.nonIconControl= !0;

        var r=e.prototype.createEl.call(this, "li", assign( {
                    className:"vjs-menu-item", tabIndex:-1
                }

                , i), n);

        return r.replaceChild(createEl("span", {
                    className:"vjs-menu-item-text", textContent:this.localize(this.options_.label)
                }

            ), r.querySelector(".vjs-icon-placeholder")),
        r
    }

    ,
    i.handleKeyDown=function(t) {
        MenuKeys.some((function(e) {
                    return keycode__default.default.isEventKey(t, e)
                }

            ))||e.prototype.handleKeyDown.call(this, t)
    }

    ,
    i.handleClick=function(e) {
        this.selected( !0)
    }

    ,
    i.selected=function(e) {
        this.selectable&&(e?(this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_= !0):(this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_= !1))
    }

    ,
    t
}

(ClickableComponent);
Component$1.registerComponent("MenuItem", MenuItem);

var TextTrackMenuItem=function(e) {
    function t(t, i) {
        var n,
        r=i.track,
        a=t.textTracks();
        i.label=r.label||r.language||"Unknown",
        i.selected="showing"===r.mode,
        (n=e.call(this, t, i)||this).track=r,
        n.kinds=(i.kinds||[i.kind||n.track.kind]).filter(Boolean);

        var s,
        o=function() {
            for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i];
            n.handleTracksChange.apply(_assertThisInitialized__default.default(n), t)
        }

        ,
        l=function() {
            for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i];
            n.handleSelectedLanguageChange.apply(_assertThisInitialized__default.default(n), t)
        }

        ;

        return t.on(["loadstart", "texttrackchange"], o),
        a.addEventListener("change", o),
        a.addEventListener("selectedlanguagechange", l),
        n.on("dispose", (function() {
                    t.off(["loadstart", "texttrackchange"], o), a.removeEventListener("change", o), a.removeEventListener("selectedlanguagechange", l)
                }

            )),
        void 0===a.onchange&&n.on(["tap", "click"], (function() {
                    if("object" !=typeof window__default.default.Event)try {
                        s=new window__default.default.Event("change")
                    }

                    catch(e) {}

                    s||(s=document__default.default.createEvent("Event")).initEvent("change",  !0,  !0), a.dispatchEvent(s)
                }

            )),
        n.handleTracksChange(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleClick=function(t) {
        var i=this.track,
        n=this.player_.textTracks();

        if(e.prototype.handleClick.call(this, t), n)for(var r=0; r<n.length; r++) {
            var a=n[r];
            -1 !==this.kinds.indexOf(a.kind)&&(a===i?"showing" !==a.mode&&(a.mode="showing"):"disabled" !==a.mode&&(a.mode="disabled"))
        }
    }

    ,
    i.handleTracksChange=function(e) {
        var t="showing"===this.track.mode;
        t !==this.isSelected_&&this.selected(t)
    }

    ,
    i.handleSelectedLanguageChange=function(e) {
        if("showing"===this.track.mode) {
            var t=this.player_.cache_.selectedLanguage;
            if(t&&t.enabled&&t.language===this.track.language&&t.kind !==this.track.kind)return;

            this.player_.cache_.selectedLanguage= {
                enabled:  !0, language:this.track.language, kind:this.track.kind
            }
        }
    }

    ,
    i.dispose=function() {
        this.track=null,
        e.prototype.dispose.call(this)
    }

    ,
    t
}

(MenuItem);
Component$1.registerComponent("TextTrackMenuItem", TextTrackMenuItem);

var OffTextTrackMenuItem=function(e) {
    function t(t, i) {
        return i.track= {
            player: t, kind:i.kind, kinds:i.kinds, default: !1, mode:"disabled"
        }

        ,
        i.kinds||(i.kinds=[i.kind]),
        i.label?i.track.label=i.label:i.track.label=i.kinds.join(" and ")+" off",
        i.selectable= !0,
        i.multiSelectable= !1,
        e.call(this, t, i)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleTracksChange=function(e) {
        for(var t=this.player().textTracks(), i= !0, n=0, r=t.length; n<r; n++) {
            var a=t[n];

            if(this.options_.kinds.indexOf(a.kind)>-1&&"showing"===a.mode) {
                i= !1;
                break
            }
        }

        i !==this.isSelected_&&this.selected(i)
    }

    ,
    i.handleSelectedLanguageChange=function(e) {
        for(var t=this.player().textTracks(), i= !0, n=0, r=t.length; n<r; n++) {
            var a=t[n];

            if(["captions", "descriptions", "subtitles"].indexOf(a.kind)>-1&&"showing"===a.mode) {
                i= !1;
                break
            }
        }

        i&&(this.player_.cache_.selectedLanguage= {
                enabled: !1
            }

        )
    }

    ,
    t
}

(TextTrackMenuItem);
Component$1.registerComponent("OffTextTrackMenuItem", OffTextTrackMenuItem);

var TextTrackButton=function(e) {
    function t(t, i) {
        return void 0===i&&(i= {}

        ),
        i.tracks=t.textTracks(),
        e.call(this, t, i)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createItems=function(e, t) {
        var i;

        void 0===e&&(e=[]),
        void 0===t&&(t=TextTrackMenuItem),
        this.label_&&(i=this.label_+" off"),
        e.push(new OffTextTrackMenuItem(this.player_, {
                    kinds:this.kinds_, kind:this.kind_, label:i
                }

            )),
        this.hideThreshold_+=1;
        var n=this.player_.textTracks();
        Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);

        for(var r=0; r<n.length; r++) {
            var a=n[r];

            if(this.kinds_.indexOf(a.kind)>-1) {
                var s=new t(this.player_, {
                        track:a, kinds:this.kinds_, kind:this.kind_, selectable: !0, multiSelectable: !1
                    }

                );
                s.addClass("vjs-"+a.kind+"-menu-item"),
                e.push(s)
            }
        }

        return e
    }

    ,
    t
}

(TrackButton);
Component$1.registerComponent("TextTrackButton", TextTrackButton);

var ChaptersTrackMenuItem=function(e) {
    function t(t, i) {
        var n,
        r=i.track,
        a=i.cue,
        s=t.currentTime();
        return i.selectable= !0,
        i.multiSelectable= !1,
        i.label=a.text,
        i.selected=a.startTime<=s&&s<a.endTime,
        (n=e.call(this, t, i)||this).track=r,
        n.cue=a,
        n
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.handleClick=function(t) {
        e.prototype.handleClick.call(this),
        this.player_.currentTime(this.cue.startTime)
    }

    ,
    t
}

(MenuItem);
Component$1.registerComponent("ChaptersTrackMenuItem", ChaptersTrackMenuItem);

var ChaptersButton=function(e) {
    function t(t, i, n) {
        var r;

        return(r=e.call(this, t, i, n)||this).selectCurrentItem_=function() {
            r.items.forEach((function(e) {
                        e.selected(r.track_.activeCues[0]===e.cue)
                    }

                ))
        }

        ,
        r
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-chapters-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-chapters-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    i.update=function(t) {
        if( !t|| !t.track||"chapters"===t.track.kind) {
            var i=this.findChaptersTrack();
            i !==this.track_?(this.setTrack(i), e.prototype.update.call(this)): ( !this.items||i&&i.cues&&i.cues.length !==this.items.length)&&e.prototype.update.call(this)
        }
    }

    ,
    i.setTrack=function(e) {
        if(this.track_ !==e) {
            if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)), this.track_) {
                var t=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                t&&t.removeEventListener("load", this.updateHandler_),
                this.track_.removeEventListener("cuechange", this.selectCurrentItem_),
                this.track_=null
            }

            if(this.track_=e, this.track_) {
                this.track_.mode="hidden";
                var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                i&&i.addEventListener("load", this.updateHandler_),
                this.track_.addEventListener("cuechange", this.selectCurrentItem_)
            }
        }
    }

    ,
    i.findChaptersTrack=function() {
        for(var e=this.player_.textTracks()||[], t=e.length-1; t>=0; t--) {
            var i=e[t];
            if(i.kind===this.kind_)return i
        }
    }

    ,
    i.getMenuCaption=function() {
        return this.track_&&this.track_.label?this.track_.label: this.localize(toTitleCase$1(this.kind_))
    }

    ,
    i.createMenu=function() {
        return this.options_.title=this.getMenuCaption(),
        e.prototype.createMenu.call(this)
    }

    ,
    i.createItems=function() {
        var e=[];
        if( !this.track_)return e;
        var t=this.track_.cues;
        if( !t)return e;

        for(var i=0, n=t.length; i<n; i++) {

            var r=t[i],
            a=new ChaptersTrackMenuItem(this.player_, {
                    track:this.track_, cue:r
                }

            );
            e.push(a)
        }

        return e
    }

    ,
    t
}

(TextTrackButton);
ChaptersButton.prototype.kind_="chapters",
ChaptersButton.prototype.controlText_="Chapters",
Component$1.registerComponent("ChaptersButton", ChaptersButton);

var DescriptionsButton=function(e) {
    function t(t, i, n) {
        var r;
        r=e.call(this, t, i, n)||this;
        var a=t.textTracks(),
        s=bind(_assertThisInitialized__default.default(r), r.handleTracksChange);

        return a.addEventListener("change", s),
        r.on("dispose", (function() {
                    a.removeEventListener("change", s)
                }

            )),
        r
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleTracksChange=function(e) {
        for(var t=this.player().textTracks(), i= !1, n=0, r=t.length; n<r; n++) {
            var a=t[n];

            if(a.kind !==this.kind_&&"showing"===a.mode) {
                i= !0;
                break
            }
        }

        i?this.disable():this.enable()
    }

    ,
    i.buildCSSClass=function() {
        return"vjs-descriptions-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-descriptions-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    t
}

(TextTrackButton);
DescriptionsButton.prototype.kind_="descriptions",
DescriptionsButton.prototype.controlText_="Descriptions",
Component$1.registerComponent("DescriptionsButton", DescriptionsButton);

var SubtitlesButton=function(e) {
    function t(t, i, n) {
        return e.call(this, t, i, n)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-subtitles-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-subtitles-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    t
}

(TextTrackButton);
SubtitlesButton.prototype.kind_="subtitles",
SubtitlesButton.prototype.controlText_="Subtitles",
Component$1.registerComponent("SubtitlesButton", SubtitlesButton);

var CaptionSettingsMenuItem=function(e) {
    function t(t, i) {
        var n;

        return i.track= {
            player: t, kind:i.kind, label:i.kind+" settings", selectable: !1, default: !1, mode:"disabled"
        }

        ,
        i.selectable= !1,
        i.name="CaptionSettingsMenuItem",
        (n=e.call(this, t, i)||this).addClass("vjs-texttrack-settings"),
        n.controlText(", opens "+i.kind+" settings dialog"),
        n
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.handleClick=function(e) {
        this.player().getChild("textTrackSettings").open()
    }

    ,
    t
}

(TextTrackMenuItem);
Component$1.registerComponent("CaptionSettingsMenuItem", CaptionSettingsMenuItem);

var CaptionsButton=function(e) {
    function t(t, i, n) {
        return e.call(this, t, i, n)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-captions-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-captions-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    i.createItems=function() {
        var t=[];

        return this.player().tech_&&this.player().tech_.featuresNativeTextTracks|| !this.player().getChild("textTrackSettings")||(t.push(new CaptionSettingsMenuItem(this.player_, {
                        kind:this.kind_
                    }

                )), this.hideThreshold_+=1),
        e.prototype.createItems.call(this, t)
    }

    ,
    t
}

(TextTrackButton);
CaptionsButton.prototype.kind_="captions",
CaptionsButton.prototype.controlText_="Captions",
Component$1.registerComponent("CaptionsButton", CaptionsButton);

var SubsCapsMenuItem=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createEl=function(t, i, n) {
        var r=e.prototype.createEl.call(this, t, i, n),
        a=r.querySelector(".vjs-menu-item-text");

        return"captions"===this.options_.track.kind&&(a.appendChild(createEl("span", {
                        className:"vjs-icon-placeholder"
                    }

                    , {
                        "aria-hidden": !0
                    }

                )), a.appendChild(createEl("span", {
                        className:"vjs-control-text", textContent:" "+this.localize("Captions")
                    }

                ))),
        r
    }

    ,
    t
}

(TextTrackMenuItem);
Component$1.registerComponent("SubsCapsMenuItem", SubsCapsMenuItem);

var SubsCapsButton=function(e) {
    function t(t, i) {
        var n;

        return void 0===i&&(i= {}

        ),
        (n=e.call(this, t, i)||this).label_="subtitles",
        ["en",
        "en-us",
        "en-ca",
        "fr-ca"].indexOf(n.player_.language_)>-1&&(n.label_="captions"),
        n.menuButton_.controlText(toTitleCase$1(n.label_)),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-subs-caps-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-subs-caps-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    i.createItems=function() {
        var t=[];

        return this.player().tech_&&this.player().tech_.featuresNativeTextTracks|| !this.player().getChild("textTrackSettings")||(t.push(new CaptionSettingsMenuItem(this.player_, {
                        kind:this.label_
                    }

                )), this.hideThreshold_+=1),
        e.prototype.createItems.call(this, t, SubsCapsMenuItem)
    }

    ,
    t
}

(TextTrackButton);
SubsCapsButton.prototype.kinds_=["captions",
"subtitles"],
SubsCapsButton.prototype.controlText_="Subtitles",
Component$1.registerComponent("SubsCapsButton", SubsCapsButton);

var AudioTrackMenuItem=function(e) {
    function t(t, i) {
        var n,
        r=i.track,
        a=t.audioTracks();
        i.label=r.label||r.language||"Unknown",
        i.selected=r.enabled,
        (n=e.call(this, t, i)||this).track=r,
        n.addClass("vjs-"+r.kind+"-menu-item");

        var s=function() {
            for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i];
            n.handleTracksChange.apply(_assertThisInitialized__default.default(n), t)
        }

        ;

        return a.addEventListener("change", s),
        n.on("dispose", (function() {
                    a.removeEventListener("change", s)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function(t, i, n) {
        var r=e.prototype.createEl.call(this, t, i, n),
        a=r.querySelector(".vjs-menu-item-text");

        return"main-desc"===this.options_.track.kind&&(a.appendChild(createEl("span", {
                        className:"vjs-icon-placeholder"
                    }

                    , {
                        "aria-hidden": !0
                    }

                )), a.appendChild(createEl("span", {
                        className:"vjs-control-text", textContent:" "+this.localize("Descriptions")
                    }

                ))),
        r
    }

    ,
    i.handleClick=function(t) {
        if(e.prototype.handleClick.call(this, t), this.track.enabled= !0, this.player_.tech_.featuresNativeAudioTracks)for(var i=this.player_.audioTracks(), n=0; n<i.length; n++) {
            var r=i[n];
            r !==this.track&&(r.enabled=r===this.track)
        }
    }

    ,
    i.handleTracksChange=function(e) {
        this.selected(this.track.enabled)
    }

    ,
    t
}

(MenuItem);
Component$1.registerComponent("AudioTrackMenuItem", AudioTrackMenuItem);

var AudioTrackButton=function(e) {
    function t(t, i) {
        return void 0===i&&(i= {}

        ),
        i.tracks=t.audioTracks(),
        e.call(this, t, i)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-audio-button "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-audio-button "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    i.createItems=function(e) {
        void 0===e&&(e=[]),
        this.hideThreshold_=1;

        for(var t=this.player_.audioTracks(), i=0; i<t.length; i++) {
            var n=t[i];

            e.push(new AudioTrackMenuItem(this.player_, {
                        track:n, selectable: !0, multiSelectable: !1
                    }

                ))
        }

        return e
    }

    ,
    t
}

(TrackButton);
AudioTrackButton.prototype.controlText_="Audio Track",
Component$1.registerComponent("AudioTrackButton", AudioTrackButton);

var PlaybackRateMenuItem=function(e) {
    function t(t, i) {
        var n,
        r=i.rate,
        a=parseFloat(r, 10);

        return i.label=r,
        i.selected=a===t.playbackRate(),
        i.selectable= !0,
        i.multiSelectable= !1,
        (n=e.call(this, t, i)||this).label=r,
        n.rate=a,
        n.on(t, "ratechange", (function(e) {
                    return n.update(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleClick=function(t) {
        e.prototype.handleClick.call(this),
        this.player().playbackRate(this.rate)
    }

    ,
    i.update=function(e) {
        this.selected(this.player().playbackRate()===this.rate)
    }

    ,
    t
}

(MenuItem);
PlaybackRateMenuItem.prototype.contentElType="button",
Component$1.registerComponent("PlaybackRateMenuItem", PlaybackRateMenuItem);

var PlaybackRateMenuButton=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).menuButton_.el_.setAttribute("aria-describedby", n.labelElId_),
        n.updateVisibility(),
        n.updateLabel(),
        n.on(t, "loadstart", (function(e) {
                    return n.updateVisibility(e)
                }

            )),
        n.on(t, "ratechange", (function(e) {
                    return n.updateLabel(e)
                }

            )),
        n.on(t, "playbackrateschange", (function(e) {
                    return n.handlePlaybackRateschange(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        var t=e.prototype.createEl.call(this);

        return this.labelElId_="vjs-playback-rate-value-label-"+this.id_,
        this.labelEl_=createEl("div", {
                className:"vjs-playback-rate-value", id:this.labelElId_, textContent:"1x"
            }

        ),
        t.appendChild(this.labelEl_),
        t
    }

    ,
    i.dispose=function() {
        this.labelEl_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.buildCSSClass=function() {
        return"vjs-playback-rate "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.buildWrapperCSSClass=function() {
        return"vjs-playback-rate "+e.prototype.buildWrapperCSSClass.call(this)
    }

    ,
    i.createItems=function() {
        for(var e=this.playbackRates(), t=[], i=e.length-1; i>=0; i--)t.push(new PlaybackRateMenuItem(this.player(), {
                    rate:e[i]+"x"
                }

            ));
        return t
    }

    ,
    i.updateARIAAttributes=function() {
        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
    }

    ,
    i.handleClick=function(e) {
        var t=this.player().playbackRate(),
        i=this.playbackRates(),
        n=(i.indexOf(t)+1)%i.length;
        this.player().playbackRate(i[n])
    }

    ,
    i.handlePlaybackRateschange=function(e) {
        this.update()
    }

    ,
    i.playbackRates=function() {
        var e=this.player();
        return e.playbackRates&&e.playbackRates()||[]
    }

    ,
    i.playbackRateSupported=function() {
        return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0
    }

    ,
    i.updateVisibility=function(e) {
        this.playbackRateSupported()?this.removeClass("vjs-hidden"): this.addClass("vjs-hidden")
    }

    ,
    i.updateLabel=function(e) {
        this.playbackRateSupported()&&(this.labelEl_.textContent=this.player().playbackRate()+"x")
    }

    ,
    t
}

(MenuButton);
PlaybackRateMenuButton.prototype.controlText_="Playback Rate",
Component$1.registerComponent("PlaybackRateMenuButton", PlaybackRateMenuButton);

var Spacer=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-spacer "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.createEl=function(t, i, n) {

        return void 0===t&&(t="div"),
        void 0===i&&(i= {}

        ),
        void 0===n&&(n= {}

        ),
        i.className||(i.className=this.buildCSSClass()),
        e.prototype.createEl.call(this, t, i, n)
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("Spacer", Spacer);

var CustomControlSpacer=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:this.buildCSSClass(), textContent:" "
            }

        )
    }

    ,
    t
}

(Spacer);
Component$1.registerComponent("CustomControlSpacer", CustomControlSpacer);

var ControlBar=function(e) {
    function t() {
        return e.apply(this, arguments)||this
    }

    return _inheritsLoose__default.default(t, e),
    t.prototype.createEl=function() {
        return e.prototype.createEl.call(this, "div", {
                className:"vjs-control-bar", dir:"ltr"
            }

        )
    }

    ,
    t
}

(Component$1);

ControlBar.prototype.options_= {
    children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
}

,
"exitPictureInPicture"in document__default.default&&ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length-1, 0, "pictureInPictureToggle"),
Component$1.registerComponent("ControlBar", ControlBar);

var ErrorDisplay=function(e) {
    function t(t, i) {
        var n;

        return(n=e.call(this, t, i)||this).on(t, "error", (function(e) {
                    return n.open(e)
                }

            )),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.buildCSSClass=function() {
        return"vjs-error-display "+e.prototype.buildCSSClass.call(this)
    }

    ,
    i.content=function() {
        var e=this.player().error();
        return e?this.localize(e.message): ""
    }

    ,
    t
}

(ModalDialog);

ErrorDisplay.prototype.options_=_extends__default.default( {}

    , ModalDialog.prototype.options_, {
        pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0
    }

),
Component$1.registerComponent("ErrorDisplay", ErrorDisplay);

var LOCAL_STORAGE_KEY$1="vjs-text-track-settings",
COLOR_BLACK=["#000",
"Black"],
COLOR_BLUE=["#00F",
"Blue"],
COLOR_CYAN=["#0FF",
"Cyan"],
COLOR_GREEN=["#0F0",
"Green"],
COLOR_MAGENTA=["#F0F",
"Magenta"],
COLOR_RED=["#F00",
"Red"],
COLOR_WHITE=["#FFF",
"White"],
COLOR_YELLOW=["#FF0",
"Yellow"],
OPACITY_OPAQUE=["1",
"Opaque"],
OPACITY_SEMI=["0.5",
"Semi-Transparent"],
OPACITY_TRANS=["0",
"Transparent"],
selectConfigs= {
    backgroundColor: {
        selector: ".vjs-bg-color > select", id:"captions-background-color-%s", label:"Color", options:[COLOR_BLACK, COLOR_WHITE, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
    }

    ,
    backgroundOpacity: {
        selector: ".vjs-bg-opacity > select", id:"captions-background-opacity-%s", label:"Transparency", options:[OPACITY_OPAQUE, OPACITY_SEMI, OPACITY_TRANS]
    }

    ,
    color: {
        selector: ".vjs-fg-color > select", id:"captions-foreground-color-%s", label:"Color", options:[COLOR_WHITE, COLOR_BLACK, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
    }

    ,
    edgeStyle: {
        selector: ".vjs-edge-style > select", id:"%s", label:"Text Edge Style", options:[["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
    }

    ,
    fontFamily: {
        selector: ".vjs-font-family > select", id:"captions-font-family-%s", label:"Font Family", options:[["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
    }

    ,
    fontPercent: {

        selector:".vjs-font-percent > select",
        id:"captions-font-size-%s",
        label:"Font Size",
        options:[["0.50",
        "50%"],
        ["0.75",
        "75%"],
        ["1.00",
        "100%"],
        ["1.25",
        "125%"],
        ["1.50",
        "150%"],
        ["1.75",
        "175%"],
        ["2.00",
        "200%"],
        ["3.00",
        "300%"],
        ["4.00",
        "400%"]],
        default:2,
        parser:function(e) {
            return"1.00"===e?null: Number(e)
        }
    }

    ,
    textOpacity: {
        selector: ".vjs-text-opacity > select", id:"captions-foreground-opacity-%s", label:"Transparency", options:[OPACITY_OPAQUE, OPACITY_SEMI]
    }

    ,
    windowColor: {
        selector: ".vjs-window-color > select", id:"captions-window-color-%s", label:"Color"
    }

    ,
    windowOpacity: {
        selector: ".vjs-window-opacity > select", id:"captions-window-opacity-%s", label:"Transparency", options:[OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE]
    }
}

;

function parseOptionValue(e, t) {
    if(t&&(e=t(e)), e&&"none" !==e)return e
}

function getSelectedOptionValue(e, t) {
    return parseOptionValue(e.options[e.options.selectedIndex].value, t)
}

function setSelectedOption(e, t, i) {
    if(t)for(var n=0; n<e.options.length; n++)if(parseOptionValue(e.options[n].value, i)===t) {
        e.selectedIndex=n;
        break
    }
}

selectConfigs.windowColor.options=selectConfigs.backgroundColor.options;

var TextTrackSettings=function(e) {
    function t(t, i) {
        var n;

        return i.temporary= !1,
        (n=e.call(this, t, i)||this).updateDisplay=n.updateDisplay.bind(_assertThisInitialized__default.default(n)),
        n.fill(),
        n.hasBeenOpened_=n.hasBeenFilled_= !0,
        n.endDialog=createEl("p", {
                className:"vjs-control-text", textContent:n.localize("End of dialog window.")
            }

        ),
        n.el().appendChild(n.endDialog),
        n.setDefaults(),
        void 0===i.persistTextTrackSettings&&(n.options_.persistTextTrackSettings=n.options_.playerOptions.persistTextTrackSettings),
        n.on(n.$(".vjs-done-button"), "click", (function() {
                    n.saveSettings(), n.close()
                }

            )),
        n.on(n.$(".vjs-default-button"), "click", (function() {
                    n.setDefaults(), n.updateDisplay()
                }

            )),
        each(selectConfigs, (function(e) {
                    n.on(n.$(e.selector), "change", n.updateDisplay)
                }

            )),
        n.options_.persistTextTrackSettings&&n.restoreSettings(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.dispose=function() {
        this.endDialog=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.createElSelect_=function(e, t, i) {
        var n=this;
        void 0===t&&(t=""),
        void 0===i&&(i="label");
        var r=selectConfigs[e],
        a=r.id.replace("%s", this.id_),
        s=[t,
        a].join(" ").trim();

        return["<"+i+' id="'+a+'" class="'+("label"===i?"vjs-label":"")+'">',
        this.localize(r.label),
        "</"+i+">",
        '<select aria-labelledby="'+s+'">'].concat(r.options.map((function(e) {
                        var t=a+"-"+e[1].replace(/\W+/g, ""); return['<option id="'+t+'" value="'+e[0]+'" ', 'aria-labelledby="'+s+" "+t+'">', n.localize(e[1]), "</option>"].join("")
                    }

                ))).concat("</select>").join("")
    }

    ,
    i.createElFgColor_=function() {
        var e="captions-text-legend-"+this.id_;
        return['<fieldset class="vjs-fg-color vjs-track-setting">',
        '<legend id="'+e+'">',
        this.localize("Text"),
        "</legend>",
        this.createElSelect_("color", e),
        '<span class="vjs-text-opacity vjs-opacity">',
        this.createElSelect_("textOpacity", e),
        "</span>",
        "</fieldset>"].join("")
    }

    ,
    i.createElBgColor_=function() {
        var e="captions-background-"+this.id_;
        return['<fieldset class="vjs-bg-color vjs-track-setting">',
        '<legend id="'+e+'">',
        this.localize("Background"),
        "</legend>",
        this.createElSelect_("backgroundColor", e),
        '<span class="vjs-bg-opacity vjs-opacity">',
        this.createElSelect_("backgroundOpacity", e),
        "</span>",
        "</fieldset>"].join("")
    }

    ,
    i.createElWinColor_=function() {
        var e="captions-window-"+this.id_;
        return['<fieldset class="vjs-window-color vjs-track-setting">',
        '<legend id="'+e+'">',
        this.localize("Window"),
        "</legend>",
        this.createElSelect_("windowColor", e),
        '<span class="vjs-window-opacity vjs-opacity">',
        this.createElSelect_("windowOpacity", e),
        "</span>",
        "</fieldset>"].join("")
    }

    ,
    i.createElColors_=function() {
        return createEl("div", {
                className:"vjs-track-settings-colors", innerHTML:[this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            }

        )
    }

    ,
    i.createElFont_=function() {
        return createEl("div", {
                className:"vjs-track-settings-font", innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            }

        )
    }

    ,
    i.createElControls_=function() {
        var e=this.localize("restore all settings to the default values");

        return createEl("div", {
                className:"vjs-track-settings-controls", innerHTML:['<button type="button" class="vjs-default-button" title="'+e+'">', this.localize("Reset"), '<span class="vjs-control-text"> '+e+"</span>", "</button>", '<button type="button" class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")
            }

        )
    }

    ,
    i.content=function() {
        return[this.createElColors_(),
        this.createElFont_(),
        this.createElControls_()]
    }

    ,
    i.label=function() {
        return this.localize("Caption Settings Dialog")
    }

    ,
    i.description=function() {
        return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
    }

    ,
    i.buildCSSClass=function() {
        return e.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"
    }

    ,
    i.getValues=function() {
        var e=this;

        return reduce(selectConfigs, (function(t, i, n) {
                    var r=getSelectedOptionValue(e.$(i.selector), i.parser); return void 0 !==r&&(t[n]=r), t
                }

            ), {}

        )
    }

    ,
    i.setValues=function(e) {
        var t=this;

        each(selectConfigs, (function(i, n) {
                    setSelectedOption(t.$(i.selector), e[n], i.parser)
                }

            ))
    }

    ,
    i.setDefaults=function() {
        var e=this;

        each(selectConfigs, (function(t) {
                    var i=t.hasOwnProperty("default")?t.default:0; e.$(t.selector).selectedIndex=i
                }

            ))
    }

    ,
    i.restoreSettings=function() {
        var e;

        try {
            e=JSON.parse(window__default.default.localStorage.getItem(LOCAL_STORAGE_KEY$1))
        }

        catch(e) {
            log$1.warn(e)
        }

        e&&this.setValues(e)
    }

    ,
    i.saveSettings=function() {
        if(this.options_.persistTextTrackSettings) {
            var e=this.getValues();

            try {
                Object.keys(e).length?window__default.default.localStorage.setItem(LOCAL_STORAGE_KEY$1, JSON.stringify(e)): window__default.default.localStorage.removeItem(LOCAL_STORAGE_KEY$1)
            }

            catch(e) {
                log$1.warn(e)
            }
        }
    }

    ,
    i.updateDisplay=function() {
        var e=this.player_.getChild("textTrackDisplay");
        e&&e.updateDisplay()
    }

    ,
    i.conditionalBlur_=function() {
        this.previouslyActiveEl_=null;
        var e=this.player_.controlBar,
        t=e&&e.subsCapsButton,
        i=e&&e.captionsButton;
        t?t.focus(): i&&i.focus()
    }

    ,
    t
}

(ModalDialog);
Component$1.registerComponent("TextTrackSettings", TextTrackSettings);

var ResizeManager=function(e) {
    function t(t, i) {
        var n,
        r=i.ResizeObserver||window__default.default.ResizeObserver;
        null===i.ResizeObserver&&(r= !1);

        var a=mergeOptions$3( {
                createEl: !r, reportTouchActivity: !1
            }

            , i);

        return(n=e.call(this, t, a)||this).ResizeObserver=i.ResizeObserver||window__default.default.ResizeObserver,
        n.loadListener_=null,
        n.resizeObserver_=null,
        n.debouncedHandler_=debounce((function() {
                    n.resizeHandler()
                }

            ), 100,  !1, _assertThisInitialized__default.default(n)),
        r?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_), n.resizeObserver_.observe(t.el())):(n.loadListener_=function() {
                if(n.el_&&n.el_.contentWindow) {
                    var e=n.debouncedHandler_, t=n.unloadListener_=function() {
                        off(this, "resize", e), off(this, "unload", t), t=null
                    }

                    ; on(n.el_.contentWindow, "unload", t), on(n.el_.contentWindow, "resize", e)
                }
            }

            , n.one("load", n.loadListener_)),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.createEl=function() {
        return e.prototype.createEl.call(this, "iframe", {
                className:"vjs-resize-manager", tabIndex:-1, title:this.localize("No content")
            }

            , {
                "aria-hidden":"true"
            }

        )
    }

    ,
    i.resizeHandler=function() {
        this.player_&&this.player_.trigger&&this.player_.trigger("playerresize")
    }

    ,
    i.dispose=function() {
        this.debouncedHandler_&&this.debouncedHandler_.cancel(),
        this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()),
        this.loadListener_&&this.off("load", this.loadListener_),
        this.el_&&this.el_.contentWindow&&this.unloadListener_&&this.unloadListener_.call(this.el_.contentWindow),
        this.ResizeObserver=null,
        this.resizeObserver=null,
        this.debouncedHandler_=null,
        this.loadListener_=null,
        e.prototype.dispose.call(this)
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("ResizeManager", ResizeManager);

var defaults= {
    trackingThreshold: 20, liveTolerance:15
}

,
LiveTracker=function(e) {
    function t(t, i) {

        var n,
        r=mergeOptions$3(defaults, i, {
                createEl: !1
            }

        );

        return(n=e.call(this, t, r)||this).handleVisibilityChange_=function(e) {
            return n.handleVisibilityChange(e)
        }

        ,
        n.trackLiveHandler_=function() {
            return n.trackLive_()
        }

        ,
        n.handlePlay_=function(e) {
            return n.handlePlay(e)
        }

        ,
        n.handleFirstTimeupdate_=function(e) {
            return n.handleFirstTimeupdate(e)
        }

        ,
        n.handleSeeked_=function(e) {
            return n.handleSeeked(e)
        }

        ,
        n.seekToLiveEdge_=function(e) {
            return n.seekToLiveEdge(e)
        }

        ,
        n.reset_(),
        n.on(n.player_, "durationchange", (function(e) {
                    return n.handleDurationchange(e)
                }

            )),
        n.on(n.player_, "canplay", (function() {
                    return n.toggleTracking()
                }

            )),
        IE_VERSION&&"hidden"in document__default.default&&"visibilityState"in document__default.default&&n.on(document__default.default, "visibilitychange", n.handleVisibilityChange_),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleVisibilityChange=function() {
        this.player_.duration()===1/0&&(document__default.default.hidden?this.stopTracking():this.startTracking())
    }

    ,
    i.trackLive_=function() {
        var e=this.player_.seekable();

        if(e&&e.length) {
            var t=Number(window__default.default.performance.now().toFixed(4)),
            i=-1===this.lastTime_?0: (t-this.lastTime_)/1e3;
            this.lastTime_=t,
            this.pastSeekEnd_=this.pastSeekEnd()+i;
            var n=this.liveCurrentTime(),
            r=this.player_.currentTime(),
            a=this.player_.paused()||this.seekedBehindLive_||Math.abs(n-r)>this.options_.liveTolerance;
            this.timeupdateSeen_&&n !==1/0||(a= !1),
            a !==this.behindLiveEdge_&&(this.behindLiveEdge_=a, this.trigger("liveedgechange"))
        }
    }

    ,
    i.handleDurationchange=function() {
        this.toggleTracking()
    }

    ,
    i.toggleTracking=function() {
        this.player_.duration()===1/0&&this.liveWindow()>=this.options_.trackingThreshold?(this.player_.options_.liveui&&this.player_.addClass("vjs-liveui"), this.startTracking()): (this.player_.removeClass("vjs-liveui"), this.stopTracking())
    }

    ,
    i.startTracking=function() {
        this.isTracking()||(this.timeupdateSeen_||(this.timeupdateSeen_=this.player_.hasStarted()), this.trackingInterval_=this.setInterval(this.trackLiveHandler_, UPDATE_REFRESH_INTERVAL), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_?this.on(this.player_, "seeked", this.handleSeeked_):(this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)))
    }

    ,
    i.handleFirstTimeupdate=function() {
        this.timeupdateSeen_= !0,
        this.on(this.player_, "seeked", this.handleSeeked_)
    }

    ,
    i.handleSeeked=function() {
        var e=Math.abs(this.liveCurrentTime()-this.player_.currentTime());
        this.seekedBehindLive_=this.nextSeekedFromUser_&&e>2,
        this.nextSeekedFromUser_= !1,
        this.trackLive_()
    }

    ,
    i.handlePlay=function() {
        this.one(this.player_, "timeupdate", this.seekToLiveEdge_)
    }

    ,
    i.reset_=function() {
        this.lastTime_=-1,
        this.pastSeekEnd_=0,
        this.lastSeekEnd_=-1,
        this.behindLiveEdge_= !0,
        this.timeupdateSeen_= !1,
        this.seekedBehindLive_= !1,
        this.nextSeekedFromUser_= !1,
        this.clearInterval(this.trackingInterval_),
        this.trackingInterval_=null,
        this.off(this.player_, ["play", "pause"], this.trackLiveHandler_),
        this.off(this.player_, "seeked", this.handleSeeked_),
        this.off(this.player_, "play", this.handlePlay_),
        this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_),
        this.off(this.player_, "timeupdate", this.seekToLiveEdge_)
    }

    ,
    i.nextSeekedFromUser=function() {
        this.nextSeekedFromUser_= !0
    }

    ,
    i.stopTracking=function() {
        this.isTracking()&&(this.reset_(), this.trigger("liveedgechange"))
    }

    ,
    i.seekableEnd=function() {
        for(var e=this.player_.seekable(), t=[], i=e?e.length:0; i--; )t.push(e.end(i));
        return t.length?t.sort()[t.length-1]: 1/0
    }

    ,
    i.seekableStart=function() {
        for(var e=this.player_.seekable(), t=[], i=e?e.length:0; i--; )t.push(e.start(i));
        return t.length?t.sort()[0]: 0
    }

    ,
    i.liveWindow=function() {
        var e=this.liveCurrentTime();
        return e===1/0?0: e-this.seekableStart()
    }

    ,
    i.isLive=function() {
        return this.isTracking()
    }

    ,
    i.atLiveEdge=function() {
        return !this.behindLiveEdge()
    }

    ,
    i.liveCurrentTime=function() {
        return this.pastSeekEnd()+this.seekableEnd()
    }

    ,
    i.pastSeekEnd=function() {
        var e=this.seekableEnd();
        return-1 !==this.lastSeekEnd_&&e !==this.lastSeekEnd_&&(this.pastSeekEnd_=0),
        this.lastSeekEnd_=e,
        this.pastSeekEnd_
    }

    ,
    i.behindLiveEdge=function() {
        return this.behindLiveEdge_
    }

    ,
    i.isTracking=function() {
        return"number"==typeof this.trackingInterval_
    }

    ,
    i.seekToLiveEdge=function() {
        this.seekedBehindLive_= !1,
        this.atLiveEdge()||(this.nextSeekedFromUser_= !1, this.player_.currentTime(this.liveCurrentTime()))
    }

    ,
    i.dispose=function() {
        this.off(document__default.default, "visibilitychange", this.handleVisibilityChange_),
        this.stopTracking(),
        e.prototype.dispose.call(this)
    }

    ,
    t
}

(Component$1);
Component$1.registerComponent("LiveTracker", LiveTracker);

var canPlayType,
sourcesetLoad=function(e) {
    var t=e.el();
    if(t.hasAttribute("src"))return e.triggerSourceset(t.src),
     !0;
    var i=e.$$("source"),
    n=[],
    r="";
    if( !i.length)return !1;

    for(var a=0; a<i.length; a++) {
        var s=i[a].src;
        s&&-1===n.indexOf(s)&&n.push(s)
    }

    return ! !n.length&&(1===n.length&&(r=n[0]), e.triggerSourceset(r),  !0)
}

,
innerHTMLDescriptorPolyfill=Object.defineProperty( {}

    , "innerHTML", {
        get:function() {
            return this.cloneNode( !0).innerHTML
        }

        , set:function(e) {
            var t=document__default.default.createElement(this.nodeName.toLowerCase()); t.innerHTML=e; for(var i=document__default.default.createDocumentFragment(); t.childNodes.length; )i.appendChild(t.childNodes[0]); return this.innerText="", window__default.default.Element.prototype.appendChild.call(this, i), this.innerHTML
        }
    }

),
getDescriptor=function(e, t) {
    for(var i= {}

        , n=0; n<e.length&& !((i=Object.getOwnPropertyDescriptor(e[n], t))&&i.set&&i.get); n++);
    return i.enumerable= !0,
    i.configurable= !0,
    i
}

,
getInnerHTMLDescriptor=function(e) {
    return getDescriptor([e.el(), window__default.default.HTMLMediaElement.prototype, window__default.default.Element.prototype, innerHTMLDescriptorPolyfill], "innerHTML")
}

,
firstSourceWatch=function(e) {
    var t=e.el();

    if( !t.resetSourceWatch_) {
        var i= {}

        ,
        n=getInnerHTMLDescriptor(e),
        r=function(i) {
            return function() {
                for(var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a];
                var s=i.apply(t, r);
                return sourcesetLoad(e),
                s
            }
        }

        ;

        ["append",
        "appendChild",
        "insertAdjacentHTML"].forEach((function(e) {
                    t[e]&&(i[e]=t[e], t[e]=r(i[e]))
                }

            )),
        Object.defineProperty(t, "innerHTML", mergeOptions$3(n, {
                    set:r(n.set)
                }

            )),
        t.resetSourceWatch_=function() {

            t.resetSourceWatch_=null,
            Object.keys(i).forEach((function(e) {
                        t[e]=i[e]
                    }

                )),
            Object.defineProperty(t, "innerHTML", n)
        }

        ,
        e.one("sourceset", t.resetSourceWatch_)
    }
}

,
srcDescriptorPolyfill=Object.defineProperty( {}

    , "src", {
        get:function() {
            return this.hasAttribute("src")?getAbsoluteURL(window__default.default.Element.prototype.getAttribute.call(this,"src")): ""
    }

    ,
    set:function(e) {
        return window__default.default.Element.prototype.setAttribute.call(this, "src", e),
        e
    }
}

),
getSrcDescriptor=function(e) {
    return getDescriptor([e.el(), window__default.default.HTMLMediaElement.prototype, srcDescriptorPolyfill], "src")
}

,
setupSourceset=function(e) {
    if(e.featuresSourceset) {
        var t=e.el();

        if( !t.resetSourceset_) {
            var i=getSrcDescriptor(e),
            n=t.setAttribute,
            r=t.load;

            Object.defineProperty(t, "src", mergeOptions$3(i, {
                        set:function(n) {
                            var r=i.set.call(t, n); return e.triggerSourceset(t.src), r
                        }
                    }

                )),
            t.setAttribute=function(i, r) {
                var a=n.call(t, i, r);
                return/src/i.test(i)&&e.triggerSourceset(t.src),
                a
            }

            ,
            t.load=function() {
                var i=r.call(t);
                return sourcesetLoad(e)||(e.triggerSourceset(""), firstSourceWatch(e)),
                i
            }

            ,
            t.currentSrc?e.triggerSourceset(t.currentSrc):sourcesetLoad(e)||firstSourceWatch(e),
            t.resetSourceset_=function() {
                t.resetSourceset_=null,
                t.load=r,
                t.setAttribute=n,
                Object.defineProperty(t, "src", i),
                t.resetSourceWatch_&&t.resetSourceWatch_()
            }
        }
    }
}

,
defineLazyProperty=function(e, t, i, n) {
    void 0===n&&(n= !0);

    var r=function(i) {
        return Object.defineProperty(e, t, {
                value:i, enumerable: !0, writable: !0
            }

        )
    }

    ,
    a= {

        configurable: !0,
        enumerable: !0,
        get:function() {
            var e=i();
            return r(e),
            e
        }
    }

    ;
    return n&&(a.set=r),
    Object.defineProperty(e, t, a)
}

,
Html5=function(e) {
    function t(t, i) {
        var n;
        n=e.call(this, t, i)||this;
        var r=t.source,
        a= !1;

        if(n.featuresVideoFrameCallback=n.featuresVideoFrameCallback&&"VIDEO"===n.el_.tagName, r&&(n.el_.currentSrc !==r.src||t.tag&&3===t.tag.initNetworkState_)?n.setSource(r):n.handleLateInit_(n.el_), t.enableSourceset&&n.setupSourcesetHandling_(), n.isScrubbing_= !1, n.el_.hasChildNodes()) {
            for(var s=n.el_.childNodes, o=s.length, l=[]; o--; ) {
                var u=s[o];
                "track"===u.nodeName.toLowerCase()&&(n.featuresNativeTextTracks?(n.remoteTextTrackEls().addTrackElement_(u), n.remoteTextTracks().addTrack(u.track), n.textTracks().addTrack(u.track), a||n.el_.hasAttribute("crossorigin")|| !isCrossOrigin(u.src)||(a= !0)):l.push(u))
            }

            for(var d=0; d<l.length; d++)n.el_.removeChild(l[d])
        }

        return n.proxyNativeTracks_(),
        n.featuresNativeTextTracks&&a&&log$1.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."),
        n.restoreMetadataTracksInIOSNativePlayer_(),
        (TOUCH_ENABLED||IS_IPHONE||IS_NATIVE_ANDROID)&& !0===t.nativeControlsForTouch&&n.setControls( !0),
        n.proxyWebkitFullscreen_(),
        n.triggerReady(),
        n
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.dispose=function() {
        this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),
        t.disposeMediaElement(this.el_),
        this.options_=null,
        e.prototype.dispose.call(this)
    }

    ,
    i.setupSourcesetHandling_=function() {
        setupSourceset(this)
    }

    ,
    i.restoreMetadataTracksInIOSNativePlayer_=function() {

        var e,
        t=this.textTracks(),
        i=function() {
            e=[];

            for(var i=0; i<t.length; i++) {
                var n=t[i];

                "metadata"===n.kind&&e.push( {
                        track:n, storedMode:n.mode
                    }

                )
            }
        }

        ;

        i(),
        t.addEventListener("change", i),
        this.on("dispose", (function() {
                    return t.removeEventListener("change", i)
                }

            ));

        var n=function i() {
            for(var n=0; n<e.length; n++) {
                var r=e[n];
                "disabled"===r.track.mode&&r.track.mode !==r.storedMode&&(r.track.mode=r.storedMode)
            }

            t.removeEventListener("change", i)
        }

        ;

        this.on("webkitbeginfullscreen", (function() {
                    t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n)
                }

            )),
        this.on("webkitendfullscreen", (function() {
                    t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n)
                }

            ))
    }

    ,
    i.overrideNative_=function(e, t) {
        var i=this;

        if(t===this["featuresNative"+e+"Tracks"]) {
            var n=e.toLowerCase();

            this[n+"TracksListeners_"]&&Object.keys(this[n+"TracksListeners_"]).forEach((function(e) {
                        i.el()[n+"Tracks"].removeEventListener(e, i[n+"TracksListeners_"][e])
                    }

                )),
            this["featuresNative"+e+"Tracks"]= !t,
            this[n+"TracksListeners_"]=null,
            this.proxyNativeTracksForType_(n)
        }
    }

    ,
    i.overrideNativeAudioTracks=function(e) {
        this.overrideNative_("Audio", e)
    }

    ,
    i.overrideNativeVideoTracks=function(e) {
        this.overrideNative_("Video", e)
    }

    ,
    i.proxyNativeTracksForType_=function(e) {
        var t=this,
        i=NORMAL[e],
        n=this.el()[i.getterName],
        r=this[i.getterName]();

        if(this["featuresNative"+i.capitalName+"Tracks"]&&n&&n.addEventListener) {
            var a= {
                change:function(i) {
                    var n= {
                        type: "change", target:r, currentTarget:r, srcElement:r
                    }

                    ;
                    r.trigger(n),
                    "text"===e&&t[REMOTE.remoteText.getterName]().trigger(n)
                }

                ,
                addtrack:function(e) {
                    r.addTrack(e.track)
                }

                ,
                removetrack:function(e) {
                    r.removeTrack(e.track)
                }
            }

            ,
            s=function() {
                for(var e=[], t=0; t<r.length; t++) {
                    for(var i= !1, a=0; a<n.length; a++)if(n[a]===r[t]) {
                        i= !0;
                        break
                    }

                    i||e.push(r[t])
                }

                for(; e.length; )r.removeTrack(e.shift())
            }

            ;

            this[i.getterName+"Listeners_"]=a,
            Object.keys(a).forEach((function(e) {
                        var i=a[e]; n.addEventListener(e, i), t.on("dispose", (function(t) {
                                    return n.removeEventListener(e, i)
                                }

                            ))
                    }

                )),
            this.on("loadstart", s),
            this.on("dispose", (function(e) {
                        return t.off("loadstart", s)
                    }

                ))
        }
    }

    ,
    i.proxyNativeTracks_=function() {
        var e=this;

        NORMAL.names.forEach((function(t) {
                    e.proxyNativeTracksForType_(t)
                }

            ))
    }

    ,
    i.createEl=function() {
        var e=this.options_.tag;

        if( !e|| !this.options_.playerElIngest&& !this.movingMediaElementInDOM) {
            if(e) {
                var i=e.cloneNode( !0);
                e.parentNode&&e.parentNode.insertBefore(i, e),
                t.disposeMediaElement(e),
                e=i
            }

            else {
                e=document__default.default.createElement("video");

                var n=mergeOptions$3( {}

                    , this.options_.tag&&getAttributes(this.options_.tag));

                TOUCH_ENABLED&& !0===this.options_.nativeControlsForTouch||delete n.controls,
                setAttributes(e, assign(n, {
                            id:this.options_.techId, class:"vjs-tech"
                        }

                    ))
            }

            e.playerId=this.options_.playerId
        }

        void 0 !==this.options_.preload&&setAttribute(e, "preload", this.options_.preload),
        void 0 !==this.options_.disablePictureInPicture&&(e.disablePictureInPicture=this.options_.disablePictureInPicture);

        for(var r=["loop", "muted", "playsinline", "autoplay"], a=0; a<r.length; a++) {
            var s=r[a],
            o=this.options_[s];
            void 0 !==o&&(o?setAttribute(e, s, s):removeAttribute(e, s), e[s]=o)
        }

        return e
    }

    ,
    i.handleLateInit_=function(e) {
        if(0 !==e.networkState&&3 !==e.networkState) {
            if(0===e.readyState) {

                var t= !1,
                i=function() {
                    t= !0
                }

                ;
                this.on("loadstart", i);

                var n=function() {
                    t||this.trigger("loadstart")
                }

                ;

                return this.on("loadedmetadata", n),
                void this.ready((function() {
                            this.off("loadstart", i), this.off("loadedmetadata", n), t||this.trigger("loadstart")
                        }

                    ))
            }

            var r=["loadstart"];

            r.push("loadedmetadata"),
            e.readyState>=2&&r.push("loadeddata"),
            e.readyState>=3&&r.push("canplay"),
            e.readyState>=4&&r.push("canplaythrough"),
            this.ready((function() {
                        r.forEach((function(e) {
                                    this.trigger(e)
                                }

                            ), this)
                    }

                ))
        }
    }

    ,
    i.setScrubbing=function(e) {
        this.isScrubbing_=e
    }

    ,
    i.scrubbing=function() {
        return this.isScrubbing_
    }

    ,
    i.setCurrentTime=function(e) {
        try {
            this.isScrubbing_&&this.el_.fastSeek&&IS_ANY_SAFARI?this.el_.fastSeek(e): this.el_.currentTime=e
        }

        catch(e) {
            log$1(e, "Video is not ready. (Video.js)")
        }
    }

    ,
    i.duration=function() {
        var e=this;

        return this.el_.duration===1/0&&IS_ANDROID&&IS_CHROME&&0===this.el_.currentTime?(this.on("timeupdate", (function t() {
                        e.el_.currentTime>0&&(e.el_.duration===1/0&&e.trigger("durationchange"), e.off("timeupdate", t))
                    }

                )), NaN):this.el_.duration||NaN
    }

    ,
    i.width=function() {
        return this.el_.offsetWidth
    }

    ,
    i.height=function() {
        return this.el_.offsetHeight
    }

    ,
    i.proxyWebkitFullscreen_=function() {
        var e=this;

        if("webkitDisplayingFullscreen"in this.el_) {
            var t=function() {
                this.trigger("fullscreenchange", {
                        isFullscreen: !1
                    }

                ),
                this.el_.controls&& !this.options_.nativeControlsForTouch&&this.controls()&&(this.el_.controls= !1)
            }

            ,
            i=function() {
                "webkitPresentationMode"in this.el_&&"picture-in-picture" !==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                            isFullscreen: !0, nativeIOSFullscreen: !0
                        }

                    ))
            }

            ;

            this.on("webkitbeginfullscreen", i),
            this.on("dispose", (function() {
                        e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                    }

                ))
        }
    }

    ,
    i.supportsFullScreen=function() {
        if("function"==typeof this.el_.webkitEnterFullScreen) {
            var e=window__default.default.navigator&&window__default.default.navigator.userAgent||"";
            if(/Android/.test(e)|| !/Chrome|Mac OS X 10.5/.test(e))return !0
        }

        return !1
    }

    ,
    i.enterFullScreen=function() {
        var e=this.el_;

        if(e.paused&&e.networkState<=e.HAVE_METADATA)silencePromise(this.el_.play()),
        this.setTimeout((function() {
                    e.pause(); try {
                        e.webkitEnterFullScreen()
                    }

                    catch(e) {
                        this.trigger("fullscreenerror", e)
                    }
                }

            ), 0);

        else try {
            e.webkitEnterFullScreen()
        }

        catch(e) {
            this.trigger("fullscreenerror", e)
        }
    }

    ,
    i.exitFullScreen=function() {
        this.el_.webkitDisplayingFullscreen?this.el_.webkitExitFullScreen(): this.trigger("fullscreenerror", new Error("The video is not fullscreen"))
    }

    ,
    i.requestPictureInPicture=function() {
        return this.el_.requestPictureInPicture()
    }

    ,
    i.requestVideoFrameCallback=function(t) {
        return this.featuresVideoFrameCallback&& !this.el_.webkitKeys?this.el_.requestVideoFrameCallback(t): e.prototype.requestVideoFrameCallback.call(this, t)
    }

    ,
    i.cancelVideoFrameCallback=function(t) {
        this.featuresVideoFrameCallback&& !this.el_.webkitKeys?this.el_.cancelVideoFrameCallback(t): e.prototype.cancelVideoFrameCallback.call(this, t)
    }

    ,
    i.src=function(e) {
        if(void 0===e)return this.el_.src;
        this.setSrc(e)
    }

    ,
    i.reset=function() {
        t.resetMediaElement(this.el_)
    }

    ,
    i.currentSrc=function() {
        return this.currentSource_?this.currentSource_.src: this.el_.currentSrc
    }

    ,
    i.setControls=function(e) {
        this.el_.controls= ! !e
    }

    ,
    i.addTextTrack=function(t, i, n) {
        return this.featuresNativeTextTracks?this.el_.addTextTrack(t, i, n): e.prototype.addTextTrack.call(this, t, i, n)
    }

    ,
    i.createRemoteTextTrack=function(t) {
        if( !this.featuresNativeTextTracks)return e.prototype.createRemoteTextTrack.call(this, t);
        var i=document__default.default.createElement("track");
        return t.kind&&(i.kind=t.kind),
        t.label&&(i.label=t.label),
        (t.language||t.srclang)&&(i.srclang=t.language||t.srclang),
        t.default&&(i.default=t.default),
        t.id&&(i.id=t.id),
        t.src&&(i.src=t.src),
        i
    }

    ,
    i.addRemoteTextTrack=function(t, i) {
        var n=e.prototype.addRemoteTextTrack.call(this, t, i);
        return this.featuresNativeTextTracks&&this.el().appendChild(n),
        n
    }

    ,
    i.removeRemoteTextTrack=function(t) {
        if(e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)for(var i=this.$$("track"), n=i.length; n--; )t !==i[n]&&t !==i[n].track||this.el().removeChild(i[n])
    }

    ,
    i.getVideoPlaybackQuality=function() {
        if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();

        var e= {}

        ;
        return void 0 !==this.el().webkitDroppedFrameCount&&void 0 !==this.el().webkitDecodedFrameCount&&(e.droppedVideoFrames=this.el().webkitDroppedFrameCount, e.totalVideoFrames=this.el().webkitDecodedFrameCount),
        window__default.default.performance&&"function"==typeof window__default.default.performance.now?e.creationTime=window__default.default.performance.now():window__default.default.performance&&window__default.default.performance.timing&&"number"==typeof window__default.default.performance.timing.navigationStart&&(e.creationTime=window__default.default.Date.now()-window__default.default.performance.timing.navigationStart),
        e
    }

    ,
    t
}

(Tech);

defineLazyProperty(Html5, "TEST_VID", (function() {
            if(isReal()) {
                var e=document__default.default.createElement("video"), t=document__default.default.createElement("track"); return t.kind="captions", t.srclang="en", t.label="English", e.appendChild(t), e
            }
        }

    )),
Html5.isSupported=function() {
    try {
        Html5.TEST_VID.volume=.5
    }

    catch(e) {
        return !1
    }

    return !( !Html5.TEST_VID|| !Html5.TEST_VID.canPlayType)
}

,
Html5.canPlayType=function(e) {
    return Html5.TEST_VID.canPlayType(e)
}

,
Html5.canPlaySource=function(e, t) {
    return Html5.canPlayType(e.type)
}

,
Html5.canControlVolume=function() {
    try {
        var e=Html5.TEST_VID.volume;
        Html5.TEST_VID.volume=e/2+.1;
        var t=e !==Html5.TEST_VID.volume;

        return t&&IS_IOS?(window__default.default.setTimeout((function() {
                        Html5&&Html5.prototype&&(Html5.prototype.featuresVolumeControl=e !==Html5.TEST_VID.volume)
                    }

                )),  !1):t
    }

    catch(e) {
        return !1
    }
}

,
Html5.canMuteVolume=function() {
    try {
        var e=Html5.TEST_VID.muted;
        return Html5.TEST_VID.muted= !e,
        Html5.TEST_VID.muted?setAttribute(Html5.TEST_VID, "muted", "muted"): removeAttribute(Html5.TEST_VID, "muted", "muted"), e !==Html5.TEST_VID.muted
    }

    catch(e) {
        return !1
    }
}

,
Html5.canControlPlaybackRate=function() {
    if(IS_ANDROID&&IS_CHROME&&CHROME_VERSION<58)return !1;

    try {
        var e=Html5.TEST_VID.playbackRate;
        return Html5.TEST_VID.playbackRate=e/2+.1,
        e !==Html5.TEST_VID.playbackRate
    }

    catch(e) {
        return !1
    }
}

,
Html5.canOverrideAttributes=function() {
    try {
        var e=function() {}

        ;

        Object.defineProperty(document__default.default.createElement("video"), "src", {
                get:e, set:e
            }

        ),
        Object.defineProperty(document__default.default.createElement("audio"), "src", {
                get:e, set:e
            }

        ),
        Object.defineProperty(document__default.default.createElement("video"), "innerHTML", {
                get:e, set:e
            }

        ),
        Object.defineProperty(document__default.default.createElement("audio"), "innerHTML", {
                get:e, set:e
            }

        )
    }

    catch(e) {
        return !1
    }

    return !0
}

,
Html5.supportsNativeTextTracks=function() {
    return IS_ANY_SAFARI||IS_IOS&&IS_CHROME
}

,
Html5.supportsNativeVideoTracks=function() {
    return !( !Html5.TEST_VID|| !Html5.TEST_VID.videoTracks)
}

,
Html5.supportsNativeAudioTracks=function() {
    return !( !Html5.TEST_VID|| !Html5.TEST_VID.audioTracks)
}

,
Html5.Events=["loadstart",
"suspend",
"abort",
"error",
"emptied",
"stalled",
"loadedmetadata",
"loadeddata",
"canplay",
"canplaythrough",
"playing",
"waiting",
"seeking",
"seeked",
"ended",
"durationchange",
"timeupdate",
"progress",
"play",
"pause",
"ratechange",
"resize",
"volumechange"],
[["featuresMuteControl",
"canMuteVolume"],
["featuresPlaybackRate",
"canControlPlaybackRate"],
["featuresSourceset",
"canOverrideAttributes"],
["featuresNativeTextTracks",
"supportsNativeTextTracks"],
["featuresNativeVideoTracks",
"supportsNativeVideoTracks"],
["featuresNativeAudioTracks",
"supportsNativeAudioTracks"]].forEach((function(e) {
            var t=e[0], i=e[1]; defineLazyProperty(Html5.prototype, t, (function() {
                        return Html5[i]()
                    }

                ),  !0)
        }

    )),
Html5.prototype.featuresVolumeControl=Html5.canControlVolume(),
Html5.prototype.movingMediaElementInDOM= !IS_IOS,
Html5.prototype.featuresFullscreenResize= !0,
Html5.prototype.featuresProgressEvents= !0,
Html5.prototype.featuresTimeupdateEvents= !0,
Html5.prototype.featuresVideoFrameCallback= !( !Html5.TEST_VID|| !Html5.TEST_VID.requestVideoFrameCallback),
Html5.patchCanPlayType=function() {
    ANDROID_VERSION>=4&& !IS_FIREFOX&& !IS_CHROME&&(canPlayType=Html5.TEST_VID&&Html5.TEST_VID.constructor.prototype.canPlayType, Html5.TEST_VID.constructor.prototype.canPlayType=function(e) {
            return e&&/^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e)?"maybe":canPlayType.call(this, e)
        }

    )
}

,
Html5.unpatchCanPlayType=function() {
    var e=Html5.TEST_VID.constructor.prototype.canPlayType;
    return canPlayType&&(Html5.TEST_VID.constructor.prototype.canPlayType=canPlayType),
    e
}

,
Html5.patchCanPlayType(),
Html5.disposeMediaElement=function(e) {
    if(e) {
        for(e.parentNode&&e.parentNode.removeChild(e); e.hasChildNodes(); )e.removeChild(e.firstChild);

        e.removeAttribute("src"),
        "function"==typeof e.load&&function() {
            try {
                e.load()
            }

            catch(e) {}
        }

        ()
    }
}

,
Html5.resetMediaElement=function(e) {
    if(e) {
        for(var t=e.querySelectorAll("source"), i=t.length; i--; )e.removeChild(t[i]);

        e.removeAttribute("src"),
        "function"==typeof e.load&&function() {
            try {
                e.load()
            }

            catch(e) {}
        }

        ()
    }
}

,
["muted",
"defaultMuted",
"autoplay",
"controls",
"loop",
"playsinline"].forEach((function(e) {
            Html5.prototype[e]=function() {
                return this.el_[e]||this.el_.hasAttribute(e)
            }
        }

    )),
["muted",
"defaultMuted",
"autoplay",
"loop",
"playsinline"].forEach((function(e) {
            Html5.prototype["set"+toTitleCase$1(e)]=function(t) {
                this.el_[e]=t, t?this.el_.setAttribute(e, e):this.el_.removeAttribute(e)
            }
        }

    )),
["paused",
"currentTime",
"buffered",
"volume",
"poster",
"preload",
"error",
"seeking",
"seekable",
"ended",
"playbackRate",
"defaultPlaybackRate",
"disablePictureInPicture",
"played",
"networkState",
"readyState",
"videoWidth",
"videoHeight",
"crossOrigin"].forEach((function(e) {
            Html5.prototype[e]=function() {
                return this.el_[e]
            }
        }

    )),
["volume",
"src",
"poster",
"preload",
"playbackRate",
"defaultPlaybackRate",
"disablePictureInPicture",
"crossOrigin"].forEach((function(e) {
            Html5.prototype["set"+toTitleCase$1(e)]=function(t) {
                this.el_[e]=t
            }
        }

    )),
["pause",
"load",
"play"].forEach((function(e) {
            Html5.prototype[e]=function() {
                return this.el_[e]()
            }
        }

    )),
Tech.withSourceHandlers(Html5),
Html5.nativeSourceHandler= {}

,
Html5.nativeSourceHandler.canPlayType=function(e) {
    try {
        return Html5.TEST_VID.canPlayType(e)
    }

    catch(e) {
        return""
    }
}

,
Html5.nativeSourceHandler.canHandleSource=function(e, t) {
    if(e.type)return Html5.nativeSourceHandler.canPlayType(e.type);

    if(e.src) {
        var i=getFileExtension(e.src);
        return Html5.nativeSourceHandler.canPlayType("video/"+i)
    }

    return""
}

,
Html5.nativeSourceHandler.handleSource=function(e, t, i) {
    t.setSrc(e.src)
}

,
Html5.nativeSourceHandler.dispose=function() {}

,
Html5.registerSourceHandler(Html5.nativeSourceHandler),
Tech.registerTech("Html5", Html5);

var TECH_EVENTS_RETRIGGER=["progress",
"abort",
"suspend",
"emptied",
"stalled",
"loadedmetadata",
"loadeddata",
"timeupdate",
"resize",
"volumechange",
"texttrackchange"],
TECH_EVENTS_QUEUE= {
    canplay: "CanPlay", canplaythrough:"CanPlayThrough", playing:"Playing", seeked:"Seeked"
}

,
BREAKPOINT_ORDER=["tiny",
"xsmall",
"small",
"medium",
"large",
"xlarge",
"huge"],
BREAKPOINT_CLASSES= {}

;

BREAKPOINT_ORDER.forEach((function(e) {
            var t="x"===e.charAt(0)?"x-"+e.substring(1):e; BREAKPOINT_CLASSES[e]="vjs-layout-"+t
        }

    ));

var DEFAULT_BREAKPOINTS= {
    tiny: 210, xsmall:320, small:425, medium:768, large:1440, xlarge:2560, huge:1/0
}

,
Player=function(e) {
    function t(i, n, r) {
        var a;

        if(i.id=i.id||n.id||"vjs_video_"+newGUID(), (n=assign(t.getTagSettings(i), n)).initChildren= !1, n.createEl= !1, n.evented= !1, n.reportTouchActivity= !1,  !n.language)if("function"==typeof i.closest) {
            var s=i.closest("[lang]");
            s&&s.getAttribute&&(n.language=s.getAttribute("lang"))
        }

        else for(var o=i; o&&1===o.nodeType; ) {
            if(getAttributes(o).hasOwnProperty("lang")) {
                n.language=o.getAttribute("lang");
                break
            }

            o=o.parentNode
        }

        if((a=e.call(this, null, n, r)||this).boundDocumentFullscreenChange_=function(e) {
                return a.documentFullscreenChange_(e)
            }

            , a.boundFullWindowOnEscKey_=function(e) {
                return a.fullWindowOnEscKey(e)
            }

            , a.boundUpdateStyleEl_=function(e) {
                return a.updateStyleEl_(e)
            }

            , a.boundApplyInitTime_=function(e) {
                return a.applyInitTime_(e)
            }

            , a.boundUpdateCurrentBreakpoint_=function(e) {
                return a.updateCurrentBreakpoint_(e)
            }

            , a.boundHandleTechClick_=function(e) {
                return a.handleTechClick_(e)
            }

            , a.boundHandleTechDoubleClick_=function(e) {
                return a.handleTechDoubleClick_(e)
            }

            , a.boundHandleTechTouchStart_=function(e) {
                return a.handleTechTouchStart_(e)
            }

            , a.boundHandleTechTouchMove_=function(e) {
                return a.handleTechTouchMove_(e)
            }

            , a.boundHandleTechTouchEnd_=function(e) {
                return a.handleTechTouchEnd_(e)
            }

            , a.boundHandleTechTap_=function(e) {
                return a.handleTechTap_(e)
            }

            , a.isFullscreen_= !1, a.log=createLogger(a.id_), a.fsApi_=FullscreenApi, a.isPosterFromTech_= !1, a.queuedCallbacks_=[], a.isReady_= !1, a.hasStarted_= !1, a.userActive_= !1, a.debugEnabled_= !1, a.audioOnlyMode_= !1, a.audioPosterMode_= !1, a.audioOnlyCache_= {
                playerHeight:null, hiddenChildren:[]
            }

            ,  !a.options_|| !a.options_.techOrder|| !a.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");

        if(a.tag=i, a.tagAttributes=i&&getAttributes(i), a.language(a.options_.language), n.languages) {
            var l= {}

            ;

            Object.getOwnPropertyNames(n.languages).forEach((function(e) {
                        l[e.toLowerCase()]=n.languages[e]
                    }

                )),
            a.languages_=l
        }

        else a.languages_=t.prototype.options_.languages;

        a.resetCache_(),
        a.poster_=n.poster||"",
        a.controls_= ! !n.controls,
        i.controls= !1,
        i.removeAttribute("controls"),
        a.changingSrc_= !1,
        a.playCallbacks_=[],
        a.playTerminatedQueue_=[],
        i.hasAttribute("autoplay")?a.autoplay( !0):a.autoplay(a.options_.autoplay),
        n.plugins&&Object.keys(n.plugins).forEach((function(e) {
                    if("function" !=typeof a[e])throw new Error('plugin "'+e+'" does not exist')
                }

            )),
        a.scrubbing_= !1,
        a.el_=a.createEl(),
        evented(_assertThisInitialized__default.default(a), {
                eventBusKey:"el_"
            }

        ),
        a.fsApi_.requestFullscreen&&(on(document__default.default, a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_), a.on(a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_)),
        a.fluid_&&a.on(["playerreset", "resize"], a.boundUpdateStyleEl_);
        var u=mergeOptions$3(a.options_);

        n.plugins&&Object.keys(n.plugins).forEach((function(e) {
                    a[e](n.plugins[e])
                }

            )),
        n.debug&&a.debug( !0),
        a.options_.playerOptions=u,
        a.middleware_=[],
        a.playbackRates(n.playbackRates),
        a.initChildren(),
        a.isAudio("audio"===i.nodeName.toLowerCase()),
        a.controls()?a.addClass("vjs-controls-enabled"):a.addClass("vjs-controls-disabled"),
        a.el_.setAttribute("role", "region"),
        a.isAudio()?a.el_.setAttribute("aria-label", a.localize("Audio Player")):a.el_.setAttribute("aria-label", a.localize("Video Player")),
        a.isAudio()&&a.addClass("vjs-audio"),
        a.flexNotSupported_()&&a.addClass("vjs-no-flex"),
        TOUCH_ENABLED&&a.addClass("vjs-touch-enabled"),
        IS_IOS||a.addClass("vjs-workinghover"),
        t.players[a.id_]=_assertThisInitialized__default.default(a);
        var d=version$5.split(".")[0];

        return a.addClass("vjs-v"+d),
        a.userActive( !0),
        a.reportUserActivity(),
        a.one("play", (function(e) {
                    return a.listenForUserActivity_(e)
                }

            )),
        a.on("stageclick", (function(e) {
                    return a.handleStageClick_(e)
                }

            )),
        a.on("keydown", (function(e) {
                    return a.handleKeyDown(e)
                }

            )),
        a.on("languagechange", (function(e) {
                    return a.handleLanguagechange(e)
                }

            )),
        a.breakpoints(a.options_.breakpoints),
        a.responsive(a.options_.responsive),
        a.on("ready", (function() {
                    a.audioPosterMode(a.options_.audioPosterMode), a.audioOnlyMode(a.options_.audioOnlyMode)
                }

            )),
        a
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.dispose=function() {
        var i=this;

        this.trigger("dispose"),
        this.off("dispose"),
        off(document__default.default, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
        off(document__default.default, "keydown", this.boundFullWindowOnEscKey_),
        this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_=null),
        t.players[this.id_]=null,
        this.tag&&this.tag.player&&(this.tag.player=null),
        this.el_&&this.el_.player&&(this.el_.player=null),
        this.tech_&&(this.tech_.dispose(), this.isPosterFromTech_= !1, this.poster_=""),
        this.playerElIngest_&&(this.playerElIngest_=null),
        this.tag&&(this.tag=null),
        clearCacheForPlayer(this),
        ALL.names.forEach((function(e) {
                    var t=ALL[e], n=i[t.getterName](); n&&n.off&&n.off()
                }

            )),
        e.prototype.dispose.call(this, {
                restoreEl:this.options_.restoreEl
            }

        )
    }

    ,
    i.createEl=function() {
        var t,
        i=this.tag,
        n=this.playerElIngest_=i.parentNode&&i.parentNode.hasAttribute&&i.parentNode.hasAttribute("data-vjs-player"),
        r="video-js"===this.tag.tagName.toLowerCase();
        n?t=this.el_=i.parentNode: r||(t=this.el_=e.prototype.createEl.call(this, "div"));
        var a=getAttributes(i);

        if(r) {
            for(t=this.el_=i, i=this.tag=document__default.default.createElement("video"); t.children.length; )i.appendChild(t.firstChild);

            hasClass(t, "video-js")||addClass(t, "video-js"),
            t.appendChild(i),
            n=this.playerElIngest_=t,
            Object.keys(t).forEach((function(e) {
                        try {
                            i[e]=t[e]
                        }

                        catch(e) {}
                    }

                ))
        }

        if(i.setAttribute("tabindex", "-1"), a.tabindex="-1", (IE_VERSION||IS_CHROME&&IS_WINDOWS)&&(i.setAttribute("role", "application"), a.role="application"), i.removeAttribute("width"), i.removeAttribute("height"), "width"in a&&delete a.width, "height"in a&&delete a.height, Object.getOwnPropertyNames(a).forEach((function(e) {
                        r&&"class"===e||t.setAttribute(e, a[e]), r&&i.setAttribute(e, a[e])
                    }

                )), i.playerId=i.id, i.id+="_html5_api", i.className="vjs-tech", i.player=t.player=this, this.addClass("vjs-paused"),  !0 !==window__default.default.VIDEOJS_NO_DYNAMIC_STYLE) {
            this.styleEl_=createStyleElement("vjs-styles-dimensions");
            var s=$(".vjs-styles-defaults"),
            o=$("head");
            o.insertBefore(this.styleEl_, s?s.nextSibling:o.firstChild)
        }

        this.fill_= !1,
        this.fluid_= !1,
        this.width(this.options_.width),
        this.height(this.options_.height),
        this.fill(this.options_.fill),
        this.fluid(this.options_.fluid),
        this.aspectRatio(this.options_.aspectRatio),
        this.crossOrigin(this.options_.crossOrigin||this.options_.crossorigin);

        for(var l=i.getElementsByTagName("a"), u=0; u<l.length; u++) {
            var d=l.item(u);
            addClass(d, "vjs-hidden"),
            d.setAttribute("hidden", "hidden")
        }

        return i.initNetworkState_=i.networkState,
        i.parentNode&& !n&&i.parentNode.insertBefore(t, i),
        prependTo(i, t),
        this.children_.unshift(i),
        this.el_.setAttribute("lang", this.language_),
        this.el_.setAttribute("translate", "no"),
        this.el_=t,
        t
    }

    ,
    i.crossOrigin=function(e) {
        if( !e)return this.techGet_("crossOrigin");
        "anonymous"===e||"use-credentials"===e?this.techCall_("setCrossOrigin", e): log$1.warn('crossOrigin must be "anonymous" or "use-credentials", given "'+e+'"')
    }

    ,
    i.width=function(e) {
        return this.dimension("width", e)
    }

    ,
    i.height=function(e) {
        return this.dimension("height", e)
    }

    ,
    i.dimension=function(e, t) {
        var i=e+"_";
        if(void 0===t)return this[i]||0;
        if(""===t||"auto"===t)return this[i]=void 0,
        void this.updateStyleEl_();
        var n=parseFloat(t);
        isNaN(n)?log$1.error('Improper value "'+t+'" supplied for for '+e): (this[i]=n, this.updateStyleEl_())
    }

    ,
    i.fluid=function(e) {
        var t=this;
        if(void 0===e)return ! !this.fluid_;

        this.fluid_= ! !e,
        isEvented(this)&&this.off(["playerreset", "resize"], this.boundUpdateStyleEl_),
        e?(this.addClass("vjs-fluid"), this.fill( !1), addEventedCallback(this, (function() {
                        t.on(["playerreset", "resize"], t.boundUpdateStyleEl_)
                    }

                ))):this.removeClass("vjs-fluid"),
        this.updateStyleEl_()
    }

    ,
    i.fill=function(e) {
        if(void 0===e)return ! !this.fill_;
        this.fill_= ! !e,
        e?(this.addClass("vjs-fill"), this.fluid( !1)): this.removeClass("vjs-fill")
    }

    ,
    i.aspectRatio=function(e) {
        if(void 0===e)return this.aspectRatio_;
        if( !/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
        this.aspectRatio_=e,
        this.fluid( !0),
        this.updateStyleEl_()
    }

    ,
    i.updateStyleEl_=function() {
        if( !0 !==window__default.default.VIDEOJS_NO_DYNAMIC_STYLE) {
            var e,
            t,
            i,
            n=(void 0 !==this.aspectRatio_&&"auto" !==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),
            r=n[1]/n[0];
            e=void 0 !==this.width_?this.width_:void 0 !==this.height_?this.height_/r:this.videoWidth()||300,
            t=void 0 !==this.height_?this.height_:e*r,
            i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",
            this.addClass(i),
            setTextContent(this.styleEl_, "\n      ."+i+" {\n        width: "+e+"px;\n        height: "+t+"px;\n      }\n\n      ."+i+".vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: "+100*r+"%;\n      }\n    ")
        }

        else {
            var a="number"==typeof this.width_?this.width_: this.options_.width, s="number"==typeof this.height_?this.height_:this.options_.height, o=this.tech_&&this.tech_.el();
            o&&(a>=0&&(o.width=a), s>=0&&(o.height=s))
        }
    }

    ,
    i.loadTech_=function(e, t) {
        var i=this;
        this.tech_&&this.unloadTech_();
        var n=toTitleCase$1(e),
        r=e.charAt(0).toLowerCase()+e.slice(1);
        "Html5" !==n&&this.tag&&(Tech.getTech("Html5").disposeMediaElement(this.tag), this.tag.player=null, this.tag=null),
        this.techName_=n,
        this.isReady_= !1;
        var a=this.autoplay();
        ("string"==typeof this.autoplay()|| !0===this.autoplay()&&this.options_.normalizeAutoplay)&&(a= !1);

        var s= {
            source: t, autoplay:a, nativeControlsForTouch:this.options_.nativeControlsForTouch, playerId:this.id(), techId:this.id()+"_"+r+"_api", playsinline:this.options_.playsinline, preload:this.options_.preload, loop:this.options_.loop, disablePictureInPicture:this.options_.disablePictureInPicture, muted:this.options_.muted, poster:this.poster(), language:this.language(), playerElIngest:this.playerElIngest_|| !1, "vtt.js":this.options_["vtt.js"], canOverridePoster: ! !this.options_.techCanOverridePoster, enableSourceset:this.options_.enableSourceset, Promise:this.options_.Promise
        }

        ;

        ALL.names.forEach((function(e) {
                    var t=ALL[e]; s[t.getterName]=i[t.privateName]
                }

            )),
        assign(s, this.options_[n]),
        assign(s, this.options_[r]),
        assign(s, this.options_[e.toLowerCase()]),
        this.tag&&(s.tag=this.tag),
        t&&t.src===this.cache_.src&&this.cache_.currentTime>0&&(s.startTime=this.cache_.currentTime);
        var o=Tech.getTech(e);
        if( !o)throw new Error("No Tech named '"+n+"' exists! '"+n+"' should be registered using videojs.registerTech()'");

        this.tech_=new o(s),
        this.tech_.ready(bind(this, this.handleTechReady_),  !0),
        textTrackConverter.jsonToTextTracks(this.textTracksJson_||[], this.tech_),
        TECH_EVENTS_RETRIGGER.forEach((function(e) {
                    i.on(i.tech_, e, (function(t) {
                                return i["handleTech"+toTitleCase$1(e)+"_"](t)
                            }

                        ))
                }

            )),
        Object.keys(TECH_EVENTS_QUEUE).forEach((function(e) {
                    i.on(i.tech_, e, (function(t) {
                                0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push( {
                                        callback:i["handleTech"+TECH_EVENTS_QUEUE[e]+"_"].bind(i), event:t
                                    }

                                ):i["handleTech"+TECH_EVENTS_QUEUE[e]+"_"](t)
                            }

                        ))
                }

            )),
        this.on(this.tech_, "loadstart", (function(e) {
                    return i.handleTechLoadStart_(e)
                }

            )),
        this.on(this.tech_, "sourceset", (function(e) {
                    return i.handleTechSourceset_(e)
                }

            )),
        this.on(this.tech_, "waiting", (function(e) {
                    return i.handleTechWaiting_(e)
                }

            )),
        this.on(this.tech_, "ended", (function(e) {
                    return i.handleTechEnded_(e)
                }

            )),
        this.on(this.tech_, "seeking", (function(e) {
                    return i.handleTechSeeking_(e)
                }

            )),
        this.on(this.tech_, "play", (function(e) {
                    return i.handleTechPlay_(e)
                }

            )),
        this.on(this.tech_, "firstplay", (function(e) {
                    return i.handleTechFirstPlay_(e)
                }

            )),
        this.on(this.tech_, "pause", (function(e) {
                    return i.handleTechPause_(e)
                }

            )),
        this.on(this.tech_, "durationchange", (function(e) {
                    return i.handleTechDurationChange_(e)
                }

            )),
        this.on(this.tech_, "fullscreenchange", (function(e, t) {
                    return i.handleTechFullscreenChange_(e, t)
                }

            )),
        this.on(this.tech_, "fullscreenerror", (function(e, t) {
                    return i.handleTechFullscreenError_(e, t)
                }

            )),
        this.on(this.tech_, "enterpictureinpicture", (function(e) {
                    return i.handleTechEnterPictureInPicture_(e)
                }

            )),
        this.on(this.tech_, "leavepictureinpicture", (function(e) {
                    return i.handleTechLeavePictureInPicture_(e)
                }

            )),
        this.on(this.tech_, "error", (function(e) {
                    return i.handleTechError_(e)
                }

            )),
        this.on(this.tech_, "posterchange", (function(e) {
                    return i.handleTechPosterChange_(e)
                }

            )),
        this.on(this.tech_, "textdata", (function(e) {
                    return i.handleTechTextData_(e)
                }

            )),
        this.on(this.tech_, "ratechange", (function(e) {
                    return i.handleTechRateChange_(e)
                }

            )),
        this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_),
        this.usingNativeControls(this.techGet_("controls")),
        this.controls()&& !this.usingNativeControls()&&this.addTechControlsListeners_(),
        this.tech_.el().parentNode===this.el()||"Html5"===n&&this.tag||prependTo(this.tech_.el(), this.el()),
        this.tag&&(this.tag.player=null, this.tag=null)
    }

    ,
    i.unloadTech_=function() {
        var e=this;

        ALL.names.forEach((function(t) {
                    var i=ALL[t]; e[i.privateName]=e[i.getterName]()
                }

            )),
        this.textTracksJson_=textTrackConverter.textTracksToJson(this.tech_),
        this.isReady_= !1,
        this.tech_.dispose(),
        this.tech_= !1,
        this.isPosterFromTech_&&(this.poster_="", this.trigger("posterchange")),
        this.isPosterFromTech_= !1
    }

    ,
    i.tech=function(e) {
        return void 0===e&&log$1.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"),
        this.tech_
    }

    ,
    i.addTechControlsListeners_=function() {
        this.removeTechControlsListeners_(),
        this.on(this.tech_, "click", this.boundHandleTechClick_),
        this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_),
        this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.on(this.tech_, "tap", this.boundHandleTechTap_)
    }

    ,
    i.removeTechControlsListeners_=function() {
        this.off(this.tech_, "tap", this.boundHandleTechTap_),
        this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.off(this.tech_, "click", this.boundHandleTechClick_),
        this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_)
    }

    ,
    i.handleTechReady_=function() {
        this.triggerReady(),
        this.cache_.volume&&this.techCall_("setVolume", this.cache_.volume),
        this.handleTechPosterChange_(),
        this.handleTechDurationChange_()
    }

    ,
    i.handleTechLoadStart_=function() {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-seeking"),
        this.error(null),
        this.handleTechDurationChange_(),
        this.paused()?(this.hasStarted( !1), this.trigger("loadstart")): (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_( !0===this.autoplay()&&this.options_.normalizeAutoplay?"play":this.autoplay())
    }

    ,
    i.manualAutoplay_=function(e) {
        var t=this;

        if(this.tech_&&"string"==typeof e) {

            var i,
            n=function() {
                var e=t.muted();
                t.muted( !0);

                var i=function() {
                    t.muted(e)
                }

                ;
                t.playTerminatedQueue_.push(i);
                var n=t.play();

                if(isPromise(n))return n.catch((function(e) {
                            throw i(), new Error("Rejection at manualAutoplay. Restoring muted value. "+(e||""))
                        }

                    ))
            }

            ;

            if("any" !==e||this.muted()?i="muted" !==e||this.muted()?this.play():n():isPromise(i=this.play())&&(i=i.catch(n)), isPromise(i))return i.then((function() {
                        t.trigger( {
                                type:"autoplay-success", autoplay:e
                            }

                        )
                    }

                )).catch((function() {
                        t.trigger( {
                                type:"autoplay-failure", autoplay:e
                            }

                        )
                    }

                ))
        }
    }

    ,
    i.updateSourceCaches_=function(e) {
        void 0===e&&(e="");
        var t=e,
        i="";

        "string" !=typeof t&&(t=e.src, i=e.type),
        this.cache_.source=this.cache_.source|| {}

        ,
        this.cache_.sources=this.cache_.sources||[],
        t&& !i&&(i=findMimetype(this, t)),
        this.cache_.source=mergeOptions$3( {}

            , e, {
                src:t, type:i
            }

        );

        for(var n=this.cache_.sources.filter((function(e) {
                        return e.src&&e.src===t
                    }

                )), r=[], a=this.$$("source"), s=[], o=0; o<a.length; o++) {
            var l=getAttributes(a[o]);
            r.push(l),
            l.src&&l.src===t&&s.push(l.src)
        }

        s.length&& !n.length?this.cache_.sources=r:n.length||(this.cache_.sources=[this.cache_.source]),
        this.cache_.src=t
    }

    ,
    i.handleTechSourceset_=function(e) {
        var t=this;

        if( !this.changingSrc_) {
            var i=function(e) {
                return t.updateSourceCaches_(e)
            }

            ,
            n=this.currentSource().src,
            r=e.src;

            n&& !/^blob:/.test(n)&&/^blob:/.test(r)&&( !this.lastSource_||this.lastSource_.tech !==r&&this.lastSource_.player !==n)&&(i=function() {}

            ),
            i(r),
            e.src||this.tech_.any(["sourceset", "loadstart"], (function(e) {
                        if("sourceset" !==e.type) {
                            var i=t.techGet("currentSrc"); t.lastSource_.tech=i, t.updateSourceCaches_(i)
                        }
                    }

                ))
        }

        this.lastSource_= {
            player: this.currentSource().src, tech:e.src
        }

        ,
        this.trigger( {
                src:e.src, type:"sourceset"
            }

        )
    }

    ,
    i.hasStarted=function(e) {
        if(void 0===e)return this.hasStarted_;
        e !==this.hasStarted_&&(this.hasStarted_=e, this.hasStarted_?(this.addClass("vjs-has-started"), this.trigger("firstplay")):this.removeClass("vjs-has-started"))
    }

    ,
    i.handleTechPlay_=function() {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-paused"),
        this.addClass("vjs-playing"),
        this.hasStarted( !0),
        this.trigger("play")
    }

    ,
    i.handleTechRateChange_=function() {
        this.tech_.playbackRate()>0&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach((function(e) {
                        return e.callback(e.event)
                    }

                )), this.queuedCallbacks_=[]),
        this.cache_.lastPlaybackRate=this.tech_.playbackRate(),
        this.trigger("ratechange")
    }

    ,
    i.handleTechWaiting_=function() {
        var e=this;
        this.addClass("vjs-waiting"),
        this.trigger("waiting");
        var t=this.currentTime();

        this.on("timeupdate", (function i() {
                    t !==e.currentTime()&&(e.removeClass("vjs-waiting"), e.off("timeupdate", i))
                }

            ))
    }

    ,
    i.handleTechCanPlay_=function() {
        this.removeClass("vjs-waiting"),
        this.trigger("canplay")
    }

    ,
    i.handleTechCanPlayThrough_=function() {
        this.removeClass("vjs-waiting"),
        this.trigger("canplaythrough")
    }

    ,
    i.handleTechPlaying_=function() {
        this.removeClass("vjs-waiting"),
        this.trigger("playing")
    }

    ,
    i.handleTechSeeking_=function() {
        this.addClass("vjs-seeking"),
        this.trigger("seeking")
    }

    ,
    i.handleTechSeeked_=function() {
        this.removeClass("vjs-seeking"),
        this.removeClass("vjs-ended"),
        this.trigger("seeked")
    }

    ,
    i.handleTechFirstPlay_=function() {
        this.options_.starttime&&(log$1.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)),
        this.addClass("vjs-has-started"),
        this.trigger("firstplay")
    }

    ,
    i.handleTechPause_=function() {
        this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.trigger("pause")
    }

    ,
    i.handleTechEnded_=function() {
        this.addClass("vjs-ended"),
        this.removeClass("vjs-waiting"),
        this.options_.loop?(this.currentTime(0), this.play()): this.paused()||this.pause(), this.trigger("ended")
    }

    ,
    i.handleTechDurationChange_=function() {
        this.duration(this.techGet_("duration"))
    }

    ,
    i.handleTechClick_=function(e) {
        this.controls_&&(void 0 !==this.options_&&void 0 !==this.options_.userActions&&void 0 !==this.options_.userActions.click&& !1===this.options_.userActions.click||(void 0 !==this.options_&&void 0 !==this.options_.userActions&&"function"==typeof this.options_.userActions.click?this.options_.userActions.click.call(this, e):this.paused()?silencePromise(this.play()):this.pause()))
    }

    ,
    i.handleTechDoubleClick_=function(e) {
        this.controls_&&(Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (function(t) {
                        return t.contains(e.target)
                    }

                ))||void 0 !==this.options_&&void 0 !==this.options_.userActions&&void 0 !==this.options_.userActions.doubleClick&& !1===this.options_.userActions.doubleClick||(void 0 !==this.options_&&void 0 !==this.options_.userActions&&"function"==typeof this.options_.userActions.doubleClick?this.options_.userActions.doubleClick.call(this, e):this.isFullscreen()?this.exitFullscreen():this.requestFullscreen()))
    }

    ,
    i.handleTechTap_=function() {
        this.userActive( !this.userActive())
    }

    ,
    i.handleTechTouchStart_=function() {
        this.userWasActive=this.userActive()
    }

    ,
    i.handleTechTouchMove_=function() {
        this.userWasActive&&this.reportUserActivity()
    }

    ,
    i.handleTechTouchEnd_=function(e) {
        e.cancelable&&e.preventDefault()
    }

    ,
    i.handleStageClick_=function() {
        this.reportUserActivity()
    }

    ,
    i.toggleFullscreenClass_=function() {
        this.isFullscreen()?this.addClass("vjs-fullscreen"): this.removeClass("vjs-fullscreen")
    }

    ,
    i.documentFullscreenChange_=function(e) {
        var t=e.target.player;

        if( !t||t===this) {
            var i=this.el(),
            n=document__default.default[this.fsApi_.fullscreenElement]===i;
             !n&&i.matches?n=i.matches(":"+this.fsApi_.fullscreen):  !n&&i.msMatchesSelector&&(n=i.msMatchesSelector(":"+this.fsApi_.fullscreen)), this.isFullscreen(n)
        }
    }

    ,
    i.handleTechFullscreenChange_=function(e, t) {
        var i=this;

        t&&(t.nativeIOSFullscreen&&(this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", (function() {
                            i.removeClass("vjs-ios-native-fs")
                        }

                    ))), this.isFullscreen(t.isFullscreen))
    }

    ,
    i.handleTechFullscreenError_=function(e, t) {
        this.trigger("fullscreenerror", t)
    }

    ,
    i.togglePictureInPictureClass_=function() {
        this.isInPictureInPicture()?this.addClass("vjs-picture-in-picture"): this.removeClass("vjs-picture-in-picture")
    }

    ,
    i.handleTechEnterPictureInPicture_=function(e) {
        this.isInPictureInPicture( !0)
    }

    ,
    i.handleTechLeavePictureInPicture_=function(e) {
        this.isInPictureInPicture( !1)
    }

    ,
    i.handleTechError_=function() {
        var e=this.tech_.error();
        this.error(e)
    }

    ,
    i.handleTechTextData_=function() {
        var e=null;
        arguments.length>1&&(e=arguments[1]),
        this.trigger("textdata", e)
    }

    ,
    i.getCache=function() {
        return this.cache_
    }

    ,
    i.resetCache_=function() {
        this.cache_= {

            currentTime:0,
            initTime:0,
            inactivityTimeout:this.options_.inactivityTimeout,
            duration:NaN,
            lastVolume:1,
            lastPlaybackRate:this.defaultPlaybackRate(),
            media:null,
            src:"",
            source: {}

            ,
            sources:[],
            playbackRates:[],
            volume:1
        }
    }

    ,
    i.techCall_=function(e, t) {
        this.ready((function() {
                    if(e in allowedSetters)return set(this.middleware_, this.tech_, e, t); if(e in allowedMediators)return mediate(this.middleware_, this.tech_, e, t); try {
                        this.tech_&&this.tech_[e](t)
                    }

                    catch(e) {
                        throw log$1(e), e
                    }
                }

            ),  !0)
    }

    ,
    i.techGet_=function(e) {
        if(this.tech_&&this.tech_.isReady_) {
            if(e in allowedGetters)return get(this.middleware_, this.tech_, e);
            if(e in allowedMediators)return mediate(this.middleware_, this.tech_, e);

            try {
                return this.tech_[e]()
            }

            catch(t) {
                if(void 0===this.tech_[e])throw log$1("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.", t),
                t;
                if("TypeError"===t.name)throw log$1("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.", t),
                this.tech_.isReady_= !1,
                t;
                throw log$1(t),
                t
            }
        }
    }

    ,
    i.play=function() {
        var e=this,
        t=this.options_.Promise||window__default.default.Promise;

        return t?new t((function(t) {
                    e.play_(t)
                }

            )):this.play_()
    }

    ,
    i.play_=function(e) {
        var t=this;
        void 0===e&&(e=silencePromise),
        this.playCallbacks_.push(e);
        var i=Boolean( !this.changingSrc_&&(this.src()||this.currentSrc()));

        if(this.waitToPlay_&&(this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_=null),  !this.isReady_|| !i)return this.waitToPlay_=function(e) {
            t.play_()
        }

        ,
        this.one(["ready", "loadstart"], this.waitToPlay_),
        void(i|| !IS_ANY_SAFARI&& !IS_IOS||this.load());
        var n=this.techGet_("play");
        null===n?this.runPlayTerminatedQueue_():this.runPlayCallbacks_(n)
    }

    ,
    i.runPlayTerminatedQueue_=function() {
        var e=this.playTerminatedQueue_.slice(0);

        this.playTerminatedQueue_=[],
        e.forEach((function(e) {
                    e()
                }

            ))
    }

    ,
    i.runPlayCallbacks_=function(e) {
        var t=this.playCallbacks_.slice(0);

        this.playCallbacks_=[],
        this.playTerminatedQueue_=[],
        t.forEach((function(t) {
                    t(e)
                }

            ))
    }

    ,
    i.pause=function() {
        this.techCall_("pause")
    }

    ,
    i.paused=function() {
        return !1 !==this.techGet_("paused")
    }

    ,
    i.played=function() {
        return this.techGet_("played")||createTimeRanges(0, 0)
    }

    ,
    i.scrubbing=function(e) {
        if(void 0===e)return this.scrubbing_;
        this.scrubbing_= ! !e,
        this.techCall_("setScrubbing", this.scrubbing_),
        e?this.addClass("vjs-scrubbing"): this.removeClass("vjs-scrubbing")
    }

    ,
    i.currentTime=function(e) {
        return void 0 !==e?(e<0&&(e=0), this.isReady_&& !this.changingSrc_&&this.tech_&&this.tech_.isReady_?(this.techCall_("setCurrentTime", e), void(this.cache_.initTime=0)):(this.cache_.initTime=e, this.off("canplay", this.boundApplyInitTime_), void this.one("canplay", this.boundApplyInitTime_))): (this.cache_.currentTime=this.techGet_("currentTime")||0, this.cache_.currentTime)
    }

    ,
    i.applyInitTime_=function() {
        this.currentTime(this.cache_.initTime)
    }

    ,
    i.duration=function(e) {
        if(void 0===e)return void 0 !==this.cache_.duration?this.cache_.duration: NaN;
        (e=parseFloat(e))<0&&(e=1/0),
        e !==this.cache_.duration&&(this.cache_.duration=e, e===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"), isNaN(e)||this.trigger("durationchange"))
    }

    ,
    i.remainingTime=function() {
        return this.duration()-this.currentTime()
    }

    ,
    i.remainingTimeDisplay=function() {
        return Math.floor(this.duration())-Math.floor(this.currentTime())
    }

    ,
    i.buffered=function() {
        var e=this.techGet_("buffered");
        return e&&e.length||(e=createTimeRanges(0, 0)),
        e
    }

    ,
    i.bufferedPercent=function() {
        return bufferedPercent(this.buffered(), this.duration())
    }

    ,
    i.bufferedEnd=function() {
        var e=this.buffered(),
        t=this.duration(),
        i=e.end(e.length-1);
        return i>t&&(i=t),
        i
    }

    ,
    i.volume=function(e) {
        var t;
        return void 0 !==e?(t=Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume=t, this.techCall_("setVolume", t), void(t>0&&this.lastVolume_(t))): (t=parseFloat(this.techGet_("volume")), isNaN(t)?1:t)
    }

    ,
    i.muted=function(e) {
        if(void 0===e)return this.techGet_("muted")|| !1;
        this.techCall_("setMuted", e)
    }

    ,
    i.defaultMuted=function(e) {
        return void 0 !==e?this.techCall_("setDefaultMuted", e): this.techGet_("defaultMuted")|| !1
    }

    ,
    i.lastVolume_=function(e) {
        if(void 0===e||0===e)return this.cache_.lastVolume;
        this.cache_.lastVolume=e
    }

    ,
    i.supportsFullScreen=function() {
        return this.techGet_("supportsFullScreen")|| !1
    }

    ,
    i.isFullscreen=function(e) {
        if(void 0 !==e) {
            var t=this.isFullscreen_;
            return this.isFullscreen_=Boolean(e),
            this.isFullscreen_ !==t&&this.fsApi_.prefixed&&this.trigger("fullscreenchange"),
            void this.toggleFullscreenClass_()
        }

        return this.isFullscreen_
    }

    ,
    i.requestFullscreen=function(e) {
        var t=this.options_.Promise||window__default.default.Promise;

        if(t) {
            var i=this;

            return new t((function(t, n) {
                        function r() {
                            i.off("fullscreenerror", s), i.off("fullscreenchange", a)
                        }

                        function a() {
                            r(), t()
                        }

                        function s(e, t) {
                            r(), n(t)
                        }

                        i.one("fullscreenchange", a), i.one("fullscreenerror", s); var o=i.requestFullscreenHelper_(e); o&&(o.then(r, r), o.then(t, n))
                    }

                ))
        }

        return this.requestFullscreenHelper_()
    }

    ,
    i.requestFullscreenHelper_=function(e) {
        var t,
        i=this;

        if(this.fsApi_.prefixed||(t=this.options_.fullscreen&&this.options_.fullscreen.options|| {}

                , void 0 !==e&&(t=e)), this.fsApi_.requestFullscreen) {
            var n=this.el_[this.fsApi_.requestFullscreen](t);

            return n&&n.then((function() {
                        return i.isFullscreen( !0)
                    }

                ), (function() {
                        return i.isFullscreen( !1)
                    }

                )),
            n
        }

        this.tech_.supportsFullScreen()&&1== !this.options_.preferFullWindow?this.techCall_("enterFullScreen"):this.enterFullWindow()
    }

    ,
    i.exitFullscreen=function() {
        var e=this.options_.Promise||window__default.default.Promise;

        if(e) {
            var t=this;

            return new e((function(e, i) {
                        function n() {
                            t.off("fullscreenerror", a), t.off("fullscreenchange", r)
                        }

                        function r() {
                            n(), e()
                        }

                        function a(e, t) {
                            n(), i(t)
                        }

                        t.one("fullscreenchange", r), t.one("fullscreenerror", a); var s=t.exitFullscreenHelper_(); s&&(s.then(n, n), s.then(e, i))
                    }

                ))
        }

        return this.exitFullscreenHelper_()
    }

    ,
    i.exitFullscreenHelper_=function() {
        var e=this;

        if(this.fsApi_.requestFullscreen) {
            var t=document__default.default[this.fsApi_.exitFullscreen]();

            return t&&silencePromise(t.then((function() {
                            return e.isFullscreen( !1)
                        }

                    ))),
            t
        }

        this.tech_.supportsFullScreen()&&1== !this.options_.preferFullWindow?this.techCall_("exitFullScreen"):this.exitFullWindow()
    }

    ,
    i.enterFullWindow=function() {
        this.isFullscreen( !0),
        this.isFullWindow= !0,
        this.docOrigOverflow=document__default.default.documentElement.style.overflow,
        on(document__default.default, "keydown", this.boundFullWindowOnEscKey_),
        document__default.default.documentElement.style.overflow="hidden",
        addClass(document__default.default.body, "vjs-full-window"),
        this.trigger("enterFullWindow")
    }

    ,
    i.fullWindowOnEscKey=function(e) {
        keycode__default.default.isEventKey(e, "Esc")&& !0===this.isFullscreen()&&(this.isFullWindow?this.exitFullWindow():this.exitFullscreen())
    }

    ,
    i.exitFullWindow=function() {
        this.isFullscreen( !1),
        this.isFullWindow= !1,
        off(document__default.default, "keydown", this.boundFullWindowOnEscKey_),
        document__default.default.documentElement.style.overflow=this.docOrigOverflow,
        removeClass(document__default.default.body, "vjs-full-window"),
        this.trigger("exitFullWindow")
    }

    ,
    i.disablePictureInPicture=function(e) {
        if(void 0===e)return this.techGet_("disablePictureInPicture");
        this.techCall_("setDisablePictureInPicture", e),
        this.options_.disablePictureInPicture=e,
        this.trigger("disablepictureinpicturechanged")
    }

    ,
    i.isInPictureInPicture=function(e) {
        return void 0 !==e?(this.isInPictureInPicture_= ! !e, void this.togglePictureInPictureClass_()):  ! !this.isInPictureInPicture_
    }

    ,
    i.requestPictureInPicture=function() {
        if("pictureInPictureEnabled"in document__default.default&& !1===this.disablePictureInPicture())return this.techGet_("requestPictureInPicture")
    }

    ,
    i.exitPictureInPicture=function() {
        if("pictureInPictureEnabled"in document__default.default)return document__default.default.exitPictureInPicture()
    }

    ,
    i.handleKeyDown=function(e) {
        var t,
        i,
        n=this.options_.userActions;
        n&&n.hotkeys&&(t=this.el_.ownerDocument.activeElement, i=t.tagName.toLowerCase(), t.isContentEditable||("input"===i?-1===["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(t.type):-1 !==["textarea"].indexOf(i))||("function"==typeof n.hotkeys?n.hotkeys.call(this, e):this.handleHotkeys(e)))
    }

    ,
    i.handleHotkeys=function(e) {
        var t=this.options_.userActions?this.options_.userActions.hotkeys: {}

        ,
        i=t.fullscreenKey,
        n=void 0===i?function(e) {
            return keycode__default.default.isEventKey(e, "f")
        }

        :i,
        r=t.muteKey,
        a=void 0===r?function(e) {
            return keycode__default.default.isEventKey(e, "m")
        }

        :r,
        s=t.playPauseKey,
        o=void 0===s?function(e) {
            return keycode__default.default.isEventKey(e, "k")||keycode__default.default.isEventKey(e, "Space")
        }

        :s;

        if(n.call(this, e)) {
            e.preventDefault(),
            e.stopPropagation();
            var l=Component$1.getComponent("FullscreenToggle");
             !1 !==document__default.default[this.fsApi_.fullscreenEnabled]&&l.prototype.handleClick.call(this, e)
        }

        else a.call(this, e)?(e.preventDefault(), e.stopPropagation(), Component$1.getComponent("MuteToggle").prototype.handleClick.call(this, e)):o.call(this, e)&&(e.preventDefault(), e.stopPropagation(), Component$1.getComponent("PlayToggle").prototype.handleClick.call(this, e))
    }

    ,
    i.canPlayType=function(e) {
        for(var t, i=0, n=this.options_.techOrder; i<n.length; i++) {
            var r=n[i],
            a=Tech.getTech(r);

            if(a||(a=Component$1.getComponent(r)), a) {
                if(a.isSupported()&&(t=a.canPlayType(e)))return t
            }

            else log$1.error('The "'+r+'" tech is undefined. Skipped browser support check for that tech.')
        }

        return""
    }

    ,
    i.selectSource=function(e) {

        var t,
        i=this,
        n=this.options_.techOrder.map((function(e) {
                    return[e, Tech.getTech(e)]
                }

            )).filter((function(e) {
                    var t=e[0], i=e[1]; return i?i.isSupported():(log$1.error('The "'+t+'" tech is undefined. Skipped browser support check for that tech.'),  !1)
                }

            )),
        r=function(e, t, i) {
            var n;

            return e.some((function(e) {
                        return t.some((function(t) {
                                    if(n=i(e, t))return !0
                                }

                            ))
                    }

                )),
            n
        }

        ,
        a=function(e, t) {
            var n=e[0];

            if(e[1].canPlaySource(t, i.options_[n.toLowerCase()]))return {
                source: t, tech:n
            }
        }

        ;

        return(this.options_.sourceOrder?r(e, n, (t=a, function(e, i) {
                        return t(i, e)
                    }

                )):r(n, e, a))|| !1
    }

    ,
    i.handleSrc_=function(e, t) {
        var i=this;
        if(void 0===e)return this.cache_.src||"";
        this.resetRetryOnError_&&this.resetRetryOnError_();
        var n=filterSource(e);

        if(n.length) {
            if(this.changingSrc_= !0, t||(this.cache_.sources=n), this.updateSourceCaches_(n[0]), setSource(this, n[0], (function(e, r) {
                            if(i.middleware_=r, t||(i.cache_.sources=n), i.updateSourceCaches_(e), i.src_(e))return n.length>1?i.handleSrc_(n.slice(1)):(i.changingSrc_= !1, i.setTimeout((function() {
                                            this.error( {
                                                    code:4, message:this.options_.notSupportedMessage
                                                }

                                            )
                                        }

                                    ), 0), void i.triggerReady()); setTech(r, i.tech_)
                        }

                    )), this.options_.retryOnError&&n.length>1) {
                var r=function() {
                    i.error(null),
                    i.handleSrc_(n.slice(1),  !0)
                }

                ,
                a=function() {
                    i.off("error", r)
                }

                ;

                this.one("error", r),
                this.one("playing", a),
                this.resetRetryOnError_=function() {
                    i.off("error", r),
                    i.off("playing", a)
                }
            }
        }

        else this.setTimeout((function() {
                    this.error( {
                            code:4, message:this.options_.notSupportedMessage
                        }

                    )
                }

            ), 0)
    }

    ,
    i.src=function(e) {
        return this.handleSrc_(e,  !1)
    }

    ,
    i.src_=function(e) {
        var t=this,
        i=this.selectSource([e]);

        return !i||(titleCaseEquals(i.tech, this.techName_)?(this.ready((function() {
                            this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource", e):this.techCall_("src", e.src), this.changingSrc_= !1
                        }

                    ),  !0),  !1):(this.changingSrc_= !0, this.loadTech_(i.tech, i.source), this.tech_.ready((function() {
                            t.changingSrc_= !1
                        }

                    )),  !1))
    }

    ,
    i.load=function() {
        this.techCall_("load")
    }

    ,
    i.reset=function() {
        var e=this,
        t=this.options_.Promise||window__default.default.Promise;

        this.paused()|| !t?this.doReset_():silencePromise(this.play().then((function() {
                        return e.doReset_()
                    }

                )))
    }

    ,
    i.doReset_=function() {
        this.tech_&&this.tech_.clearTracks("text"),
        this.resetCache_(),
        this.poster(""),
        this.loadTech_(this.options_.techOrder[0], null),
        this.techCall_("reset"),
        this.resetControlBarUI_(),
        isEvented(this)&&this.trigger("playerreset")
    }

    ,
    i.resetControlBarUI_=function() {
        this.resetProgressBar_(),
        this.resetPlaybackRate_(),
        this.resetVolumeBar_()
    }

    ,
    i.resetProgressBar_=function() {
        this.currentTime(0);

        var e=this.controlBar|| {}

        ,
        t=e.durationDisplay,
        i=e.remainingTimeDisplay;
        t&&t.updateContent(),
        i&&i.updateContent()
    }

    ,
    i.resetPlaybackRate_=function() {
        this.playbackRate(this.defaultPlaybackRate()),
        this.handleTechRateChange_()
    }

    ,
    i.resetVolumeBar_=function() {
        this.volume(1),
        this.trigger("volumechange")
    }

    ,
    i.currentSources=function() {
        var e=this.currentSource(),
        t=[];
        return 0 !==Object.keys(e).length&&t.push(e),
        this.cache_.sources||t
    }

    ,
    i.currentSource=function() {
        return this.cache_.source|| {}
    }

    ,
    i.currentSrc=function() {
        return this.currentSource()&&this.currentSource().src||""
    }

    ,
    i.currentType=function() {
        return this.currentSource()&&this.currentSource().type||""
    }

    ,
    i.preload=function(e) {
        return void 0 !==e?(this.techCall_("setPreload", e), void(this.options_.preload=e)): this.techGet_("preload")
    }

    ,
    i.autoplay=function(e) {
        if(void 0===e)return this.options_.autoplay|| !1;
        var t;
        "string"==typeof e&&/(any|play|muted)/.test(e)|| !0===e&&this.options_.normalizeAutoplay?(this.options_.autoplay=e, this.manualAutoplay_("string"==typeof e?e:"play"), t= !1): this.options_.autoplay= ! !e, t=void 0===t?this.options_.autoplay:t, this.tech_&&this.techCall_("setAutoplay", t)
    }

    ,
    i.playsinline=function(e) {
        return void 0 !==e?(this.techCall_("setPlaysinline", e), this.options_.playsinline=e, this): this.techGet_("playsinline")
    }

    ,
    i.loop=function(e) {
        return void 0 !==e?(this.techCall_("setLoop", e), void(this.options_.loop=e)): this.techGet_("loop")
    }

    ,
    i.poster=function(e) {
        if(void 0===e)return this.poster_;
        e||(e=""),
        e !==this.poster_&&(this.poster_=e, this.techCall_("setPoster", e), this.isPosterFromTech_= !1, this.trigger("posterchange"))
    }

    ,
    i.handleTechPosterChange_=function() {
        if(( !this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster) {
            var e=this.tech_.poster()||"";
            e !==this.poster_&&(this.poster_=e, this.isPosterFromTech_= !0, this.trigger("posterchange"))
        }
    }

    ,
    i.controls=function(e) {
        if(void 0===e)return ! !this.controls_;
        e= ! !e,
        this.controls_ !==e&&(this.controls_=e, this.usingNativeControls()&&this.techCall_("setControls", e), this.controls_?(this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls()||this.removeTechControlsListeners_()))
    }

    ,
    i.usingNativeControls=function(e) {
        if(void 0===e)return ! !this.usingNativeControls_;
        e= ! !e,
        this.usingNativeControls_ !==e&&(this.usingNativeControls_=e, this.usingNativeControls_?(this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
    }

    ,
    i.error=function(e) {
        var t=this;
        if(void 0===e)return this.error_||null;

        if(hooks("beforeerror").forEach((function(i) {
                        var n=i(t, e); isObject(n)&& !Array.isArray(n)||"string"==typeof n||"number"==typeof n||null===n?e=n:t.log.error("please return a value that MediaError expects in beforeerror hooks")
                    }

                )), this.options_.suppressNotSupportedError&&e&&4===e.code) {
            var i=function() {
                this.error(e)
            }

            ;

            return this.options_.suppressNotSupportedError= !1,
            this.any(["click", "touchstart"], i),
            void this.one("loadstart", (function() {
                        this.off(["click", "touchstart"], i)
                    }

                ))
        }

        if(null===e)return this.error_=e,
        this.removeClass("vjs-error"),
        void(this.errorDisplay&&this.errorDisplay.close());

        this.error_=new MediaError(e),
        this.addClass("vjs-error"),
        log$1.error("(CODE:"+this.error_.code+" "+MediaError.errorTypes[this.error_.code]+")", this.error_.message, this.error_),
        this.trigger("error"),
        hooks("error").forEach((function(e) {
                    return e(t, t.error_)
                }

            ))
    }

    ,
    i.reportUserActivity=function(e) {
        this.userActivity_= !0
    }

    ,
    i.userActive=function(e) {
        if(void 0===e)return this.userActive_;

        if((e= ! !e) !==this.userActive_) {
            if(this.userActive_=e, this.userActive_)return this.userActivity_= !0,
            this.removeClass("vjs-user-inactive"),
            this.addClass("vjs-user-active"),
            void this.trigger("useractive");

            this.tech_&&this.tech_.one("mousemove", (function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }

                )),
            this.userActivity_= !1,
            this.removeClass("vjs-user-active"),
            this.addClass("vjs-user-inactive"),
            this.trigger("userinactive")
        }
    }

    ,
    i.listenForUserActivity_=function() {

        var e,
        t,
        i,
        n=bind(this, this.reportUserActivity),
        r=function(t) {
            n(),
            this.clearInterval(e)
        }

        ;

        this.on("mousedown", (function() {
                    n(), this.clearInterval(e), e=this.setInterval(n, 250)
                }

            )),
        this.on("mousemove", (function(e) {
                    e.screenX===t&&e.screenY===i||(t=e.screenX, i=e.screenY, n())
                }

            )),
        this.on("mouseup", r),
        this.on("mouseleave", r);
        var a,
        s=this.getChild("controlBar");

         !s||IS_IOS||IS_ANDROID||(s.on("mouseenter", (function(e) {
                        0 !==this.player().options_.inactivityTimeout&&(this.player().cache_.inactivityTimeout=this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout=0
                    }

                )), s.on("mouseleave", (function(e) {
                        this.player().options_.inactivityTimeout=this.player().cache_.inactivityTimeout
                    }

                ))),
        this.on("keydown", n),
        this.on("keyup", n),
        this.setInterval((function() {
                    if(this.userActivity_) {
                        this.userActivity_= !1, this.userActive( !0), this.clearTimeout(a); var e=this.options_.inactivityTimeout; e<=0||(a=this.setTimeout((function() {
                                        this.userActivity_||this.userActive( !1)
                                    }

                                ), e))
                    }
                }

            ), 250)
    }

    ,
    i.playbackRate=function(e) {
        if(void 0===e)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"): 1;
        this.techCall_("setPlaybackRate", e)
    }

    ,
    i.defaultPlaybackRate=function(e) {
        return void 0 !==e?this.techCall_("setDefaultPlaybackRate", e): this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1
    }

    ,
    i.isAudio=function(e) {
        if(void 0===e)return ! !this.isAudio_;
        this.isAudio_= ! !e
    }

    ,
    i.enableAudioOnlyUI_=function() {
        var e=this;
        this.addClass("vjs-audio-only-mode");
        var t=this.children(),
        i=this.getChild("ControlBar"),
        n=i&&i.currentHeight();

        t.forEach((function(t) {
                    t !==i&&t.el_&& !t.hasClass("vjs-hidden")&&(t.hide(), e.audioOnlyCache_.hiddenChildren.push(t))
                }

            )),
        this.audioOnlyCache_.playerHeight=this.currentHeight(),
        this.height(n),
        this.trigger("audioonlymodechange")
    }

    ,
    i.disableAudioOnlyUI_=function() {

        this.removeClass("vjs-audio-only-mode"),
        this.audioOnlyCache_.hiddenChildren.forEach((function(e) {
                    return e.show()
                }

            )),
        this.height(this.audioOnlyCache_.playerHeight),
        this.trigger("audioonlymodechange")
    }

    ,
    i.audioOnlyMode=function(e) {
        var t=this;
        if("boolean" !=typeof e||e===this.audioOnlyMode_)return this.audioOnlyMode_;
        this.audioOnlyMode_=e;
        var i=this.options_.Promise||window__default.default.Promise;

        if(i) {
            if(e) {
                var n=[];

                return this.isInPictureInPicture()&&n.push(this.exitPictureInPicture()),
                this.isFullscreen()&&n.push(this.exitFullscreen()),
                this.audioPosterMode()&&n.push(this.audioPosterMode( !1)),
                i.all(n).then((function() {
                            return t.enableAudioOnlyUI_()
                        }

                    ))
            }

            return i.resolve().then((function() {
                        return t.disableAudioOnlyUI_()
                    }

                ))
        }

        e?(this.isInPictureInPicture()&&this.exitPictureInPicture(), this.isFullscreen()&&this.exitFullscreen(), this.enableAudioOnlyUI_()):this.disableAudioOnlyUI_()
    }

    ,
    i.enablePosterModeUI_=function() {
        (this.tech_&&this.tech_).hide(),
        this.addClass("vjs-audio-poster-mode"),
        this.trigger("audiopostermodechange")
    }

    ,
    i.disablePosterModeUI_=function() {
        (this.tech_&&this.tech_).show(),
        this.removeClass("vjs-audio-poster-mode"),
        this.trigger("audiopostermodechange")
    }

    ,
    i.audioPosterMode=function(e) {
        var t=this;
        if("boolean" !=typeof e||e===this.audioPosterMode_)return this.audioPosterMode_;
        this.audioPosterMode_=e;
        var i=this.options_.Promise||window__default.default.Promise;

        return i?e?this.audioOnlyMode()?this.audioOnlyMode( !1).then((function() {
                    t.enablePosterModeUI_()
                }

            )):i.resolve().then((function() {
                    t.enablePosterModeUI_()
                }

            )):i.resolve().then((function() {
                    t.disablePosterModeUI_()
                }

            )):e?(this.audioOnlyMode()&&this.audioOnlyMode( !1), void this.enablePosterModeUI_()):void this.disablePosterModeUI_()
    }

    ,
    i.addTextTrack=function(e, t, i) {
        if(this.tech_)return this.tech_.addTextTrack(e, t, i)
    }

    ,
    i.addRemoteTextTrack=function(e, t) {
        if(this.tech_)return this.tech_.addRemoteTextTrack(e, t)
    }

    ,
    i.removeRemoteTextTrack=function(e) {
        void 0===e&&(e= {}

        );
        var t=e.track;
        if(t||(t=e), this.tech_)return this.tech_.removeRemoteTextTrack(t)
    }

    ,
    i.getVideoPlaybackQuality=function() {
        return this.techGet_("getVideoPlaybackQuality")
    }

    ,
    i.videoWidth=function() {
        return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0
    }

    ,
    i.videoHeight=function() {
        return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0
    }

    ,
    i.language=function(e) {
        if(void 0===e)return this.language_;
        this.language_ !==String(e).toLowerCase()&&(this.language_=String(e).toLowerCase(), isEvented(this)&&this.trigger("languagechange"))
    }

    ,
    i.languages=function() {
        return mergeOptions$3(t.prototype.options_.languages, this.languages_)
    }

    ,
    i.toJSON=function() {
        var e=mergeOptions$3(this.options_),
        t=e.tracks;
        e.tracks=[];

        for(var i=0; i<t.length; i++) {
            var n=t[i];
            (n=mergeOptions$3(n)).player=void 0,
            e.tracks[i]=n
        }

        return e
    }

    ,
    i.createModal=function(e, t) {
        var i=this;

        (t=t|| {}

        ).content=e||"";
        var n=new ModalDialog(this, t);

        return this.addChild(n),
        n.on("dispose", (function() {
                    i.removeChild(n)
                }

            )),
        n.open(),
        n
    }

    ,
    i.updateCurrentBreakpoint_=function() {
        if(this.responsive())for(var e=this.currentBreakpoint(), t=this.currentWidth(), i=0; i<BREAKPOINT_ORDER.length; i++) {
            var n=BREAKPOINT_ORDER[i];

            if(t<=this.breakpoints_[n]) {
                if(e===n)return;
                e&&this.removeClass(BREAKPOINT_CLASSES[e]),
                this.addClass(BREAKPOINT_CLASSES[n]),
                this.breakpoint_=n;
                break
            }
        }
    }

    ,
    i.removeCurrentBreakpoint_=function() {
        var e=this.currentBreakpointClass();
        this.breakpoint_="",
        e&&this.removeClass(e)
    }

    ,
    i.breakpoints=function(e) {
        return void 0===e||(this.breakpoint_="", this.breakpoints_=assign( {}

                , DEFAULT_BREAKPOINTS, e), this.updateCurrentBreakpoint_()),
        assign(this.breakpoints_)
    }

    ,
    i.responsive=function(e) {
        return void 0===e?this.responsive_: (e=Boolean(e)) !==this.responsive_?(this.responsive_=e, e?(this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()):(this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e):void 0
    }

    ,
    i.currentBreakpoint=function() {
        return this.breakpoint_
    }

    ,
    i.currentBreakpointClass=function() {
        return BREAKPOINT_CLASSES[this.breakpoint_]||""
    }

    ,
    i.loadMedia=function(e, t) {
        var i=this;

        if(e&&"object"==typeof e) {
            this.reset(),
            this.cache_.media=mergeOptions$3(e);
            var n=this.cache_.media,
            r=n.artwork,
            a=n.poster,
            s=n.src,
            o=n.textTracks;

             !r&&a&&(this.cache_.media.artwork=[ {
                    src:a, type:getMimetype(a)
                }

                ]),
            s&&this.src(s),
            a&&this.poster(a),
            Array.isArray(o)&&o.forEach((function(e) {
                        return i.addRemoteTextTrack(e,  !1)
                    }

                )),
            this.ready(t)
        }
    }

    ,
    i.getMedia=function() {
        if( !this.cache_.media) {

            var e=this.poster(),
            t= {

                src:this.currentSources(),
                textTracks:Array.prototype.map.call(this.remoteTextTracks(), (function(e) {
                            return {
                                kind:e.kind, label:e.label, language:e.language, src:e.src
                            }
                        }

                    ))
            }

            ;

            return e&&(t.poster=e, t.artwork=[ {
                    src:t.poster, type:getMimetype(t.poster)
                }

                ]),
            t
        }

        return mergeOptions$3(this.cache_.media)
    }

    ,
    t.getTagSettings=function(e) {
        var t= {
            sources: [], tracks:[]
        }

        ,
        i=getAttributes(e),
        n=i["data-setup"];

        if(hasClass(e, "vjs-fill")&&(i.fill= !0), hasClass(e, "vjs-fluid")&&(i.fluid= !0), null !==n) {
            var r=safeParseTuple__default.default(n||"{}"),
            a=r[0],
            s=r[1];
            a&&log$1.error(a),
            assign(i, s)
        }

        if(assign(t, i), e.hasChildNodes())for(var o=e.childNodes, l=0, u=o.length; l<u; l++) {
            var d=o[l],
            c=d.nodeName.toLowerCase();
            "source"===c?t.sources.push(getAttributes(d)): "track"===c&&t.tracks.push(getAttributes(d))
        }

        return t
    }

    ,
    i.flexNotSupported_=function() {
        var e=document__default.default.createElement("i");
        return !("flexBasis"in e.style||"webkitFlexBasis"in e.style||"mozFlexBasis"in e.style||"msFlexBasis"in e.style||"msFlexOrder"in e.style)
    }

    ,
    i.debug=function(e) {
        if(void 0===e)return this.debugEnabled_;
        e?(this.trigger("debugon"), this.previousLogLevel_=this.log.level, this.log.level("debug"), this.debugEnabled_= !0): (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_=void 0, this.debugEnabled_= !1)
    }

    ,
    i.playbackRates=function(e) {
        if(void 0===e)return this.cache_.playbackRates;

        Array.isArray(e)&&e.every((function(e) {
                    return"number"==typeof e
                }

            ))&&(this.cache_.playbackRates=e, this.trigger("playbackrateschange"))
    }

    ,
    t
}

(Component$1);

ALL.names.forEach((function(e) {
            var t=ALL[e]; Player.prototype[t.getterName]=function() {
                return this.tech_?this.tech_[t.getterName]():(this[t.privateName]=this[t.privateName]||new t.ListClass, this[t.privateName])
            }
        }

    )),
Player.prototype.crossorigin=Player.prototype.crossOrigin,
Player.players= {}

;
var navigator=window__default.default.navigator;

Player.prototype.options_= {

    techOrder:Tech.defaultTechOrder_,
    html5: {}

    ,
    inactivityTimeout:2e3,
    playbackRates:[],
    liveui: !1,
    children:["mediaLoader",
    "posterImage",
    "textTrackDisplay",
    "loadingSpinner",
    "bigPlayButton",
    "liveTracker",
    "controlBar",
    "errorDisplay",
    "textTrackSettings",
    "resizeManager"],
    language:navigator&&(navigator.languages&&navigator.languages[0]||navigator.userLanguage||navigator.language)||"en",
    languages: {}

    ,
    notSupportedMessage:"No compatible source was found for this media.",
    normalizeAutoplay: !1,
    fullscreen: {
        options: {
            navigationUI: "hide"
        }
    }

    ,
    breakpoints: {}

    ,
    responsive: !1,
    audioOnlyMode: !1,
    audioPosterMode: !1
}

,
["ended",
"seeking",
"seekable",
"networkState",
"readyState"].forEach((function(e) {
            Player.prototype[e]=function() {
                return this.techGet_(e)
            }
        }

    )),
TECH_EVENTS_RETRIGGER.forEach((function(e) {
            Player.prototype["handleTech"+toTitleCase$1(e)+"_"]=function() {
                return this.trigger(e)
            }
        }

    )),
Component$1.registerComponent("Player", Player);

var BASE_PLUGIN_NAME="plugin",
PLUGIN_CACHE_KEY="activePlugins_",
pluginStorage= {}

,
pluginExists=function(e) {
    return pluginStorage.hasOwnProperty(e)
}

,
getPlugin=function(e) {
    return pluginExists(e)?pluginStorage[e]: void 0
}

,
markPluginAsActive=function(e, t) {
    e[PLUGIN_CACHE_KEY]=e[PLUGIN_CACHE_KEY]|| {}

    ,
    e[PLUGIN_CACHE_KEY][t]= !0
}

,
triggerSetupEvent=function(e, t, i) {
    var n=(i?"before":"")+"pluginsetup";
    e.trigger(n, t),
    e.trigger(n+":"+t.name, t)
}

,
createBasicPlugin=function(e, t) {
    var i=function() {
        triggerSetupEvent(this, {
                name:e, plugin:t, instance:null
            }

            ,  !0);
        var i=t.apply(this, arguments);

        return markPluginAsActive(this, e),
        triggerSetupEvent(this, {
                name:e, plugin:t, instance:i
            }

        ),
        i
    }

    ;

    return Object.keys(t).forEach((function(e) {
                i[e]=t[e]
            }

        )),
    i
}

,
createPluginFactory=function(e, t) {

    return t.prototype.name=e,
    function() {
        triggerSetupEvent(this, {
                name:e, plugin:t, instance:null
            }

            ,  !0);
        for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r];
        var a=_construct__default.default(t, [this].concat(n));

        return this[e]=function() {
            return a
        }

        ,
        triggerSetupEvent(this, a.getEventHash()),
        a
    }
}

,
Plugin=function() {
    function e(t) {
        if(this.constructor===e)throw new Error("Plugin must be sub-classed; not directly instantiated.");
        this.player=t,
        this.log||(this.log=this.player.log.createLogger(this.name)),
        evented(this),
        delete this.trigger,
        stateful(this, this.constructor.defaultState),
        markPluginAsActive(t, this.name),
        this.dispose=this.dispose.bind(this),
        t.on("dispose", this.dispose)
    }

    var t=e.prototype;

    return t.version=function() {
        return this.constructor.VERSION
    }

    ,
    t.getEventHash=function(e) {
        return void 0===e&&(e= {}

        ),
        e.name=this.name,
        e.plugin=this.constructor,
        e.instance=this,
        e
    }

    ,
    t.trigger=function(e, t) {
        return void 0===t&&(t= {}

        ),
        trigger(this.eventBusEl_, e, this.getEventHash(t))
    }

    ,
    t.handleStateChanged=function(e) {}

    ,
    t.dispose=function() {
        var e=this.name,
        t=this.player;
        this.trigger("dispose"),
        this.off(),
        t.off("dispose", this.dispose),
        t[PLUGIN_CACHE_KEY][e]= !1,
        this.player=this.state=null,
        t[e]=createPluginFactory(e, pluginStorage[e])
    }

    ,
    e.isBasic=function(t) {
        var i="string"==typeof t?getPlugin(t): t;
        return"function"==typeof i&& !e.prototype.isPrototypeOf(i.prototype)
    }

    ,
    e.registerPlugin=function(t, i) {
        if("string" !=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+typeof t+".");
        if(pluginExists(t))log$1.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');
        else if(Player.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');
        if("function" !=typeof i)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+typeof i+".");
        return pluginStorage[t]=i,
        t !==BASE_PLUGIN_NAME&&(e.isBasic(i)?Player.prototype[t]=createBasicPlugin(t, i):Player.prototype[t]=createPluginFactory(t, i)),
        i
    }

    ,
    e.deregisterPlugin=function(e) {
        if(e===BASE_PLUGIN_NAME)throw new Error("Cannot de-register base plugin.");
        pluginExists(e)&&(delete pluginStorage[e], delete Player.prototype[e])
    }

    ,
    e.getPlugins=function(e) {
        var t;

        return void 0===e&&(e=Object.keys(pluginStorage)),
        e.forEach((function(e) {
                    var i=getPlugin(e); i&&((t=t|| {}

                        )[e]=i)
                }

            )),
        t
    }

    ,
    e.getPluginVersion=function(e) {
        var t=getPlugin(e);
        return t&&t.VERSION||""
    }

    ,
    e
}

();

Plugin.getPlugin=getPlugin,
Plugin.BASE_PLUGIN_NAME=BASE_PLUGIN_NAME,
Plugin.registerPlugin(BASE_PLUGIN_NAME, Plugin),
Player.prototype.usingPlugin=function(e) {
    return ! !this[PLUGIN_CACHE_KEY]&& !0===this[PLUGIN_CACHE_KEY][e]
}

,
Player.prototype.hasPlugin=function(e) {
    return ! !pluginExists(e)
}

;

var extend=function(e, t) {
    void 0===t&&(t= {}

    );

    var i=function() {
        e.apply(this, arguments)
    }

    ,
    n= {}

    ;
    for(var r in"object"==typeof t?(t.constructor !==Object.prototype.constructor&&(i=t.constructor), n=t):"function"==typeof t&&(i=t), _inherits__default.default(i, e), e&&(i.super_=e), n)n.hasOwnProperty(r)&&(i.prototype[r]=n[r]);
    return i
}

,
normalizeId=function(e) {
    return 0===e.indexOf("#")?e.slice(1): e
}

;

function videojs(e, t, i) {
    var n=videojs.getPlayer(e);
    if(n)return t&&log$1.warn('Player "'+e+'" is already initialised. Options will not be applied.'),
    i&&n.ready(i),
    n;
    var r="string"==typeof e?$("#"+normalizeId(e)): e;
    if( !isEl(r))throw new TypeError("The element or ID supplied is not valid. (videojs)");

    r.ownerDocument.defaultView&&r.ownerDocument.body.contains(r)||log$1.warn("The element supplied is not included in the DOM"),
     !0===(t=t|| {}

    ).restoreEl&&(t.restoreEl=(r.parentNode&&r.parentNode.hasAttribute("data-vjs-player")?r.parentNode:r).cloneNode( !0)),
    hooks("beforesetup").forEach((function(e) {
                var i=e(r, mergeOptions$3(t)); isObject(i)&& !Array.isArray(i)?t=mergeOptions$3(t, i):log$1.error("please return an object in beforesetup hooks")
            }

        ));
    var a=Component$1.getComponent("Player");

    return n=new a(r, t, i),
    hooks("setup").forEach((function(e) {
                return e(n)
            }

        )),
    n
}

if(videojs.hooks_=hooks_, videojs.hooks=hooks, videojs.hook=hook, videojs.hookOnce=hookOnce, videojs.removeHook=removeHook,  !0 !==window__default.default.VIDEOJS_NO_DYNAMIC_STYLE&&isReal()) {
    var style=$(".vjs-styles-defaults");

    if( !style) {
        style=createStyleElement("vjs-styles-defaults");
        var head=$("head");
        head&&head.insertBefore(style, head.firstChild),
        setTextContent(style, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: 56.25%\n      }\n    ")
    }
}

autoSetupTimeout(1, videojs),
videojs.VERSION=version$5,
videojs.options=Player.prototype.options_,
videojs.getPlayers=function() {
    return Player.players
}

,
videojs.getPlayer=function(e) {
    var t,
    i=Player.players;

    if("string"==typeof e) {
        var n=normalizeId(e),
        r=i[n];
        if(r)return r;
        t=$("#"+n)
    }

    else t=e;

    if(isEl(t)) {
        var a=t,
        s=a.player,
        o=a.playerId;
        if(s||i[o])return s||i[o]
    }
}

,
videojs.getAllPlayers=function() {
    return Object.keys(Player.players).map((function(e) {
                return Player.players[e]
            }

        )).filter(Boolean)
}

,
videojs.players=Player.players,
videojs.getComponent=Component$1.getComponent,
videojs.registerComponent=function(e, t) {
    Tech.isTech(t)&&log$1.warn("The "+e+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
    Component$1.registerComponent.call(Component$1, e, t)
}

,
videojs.getTech=Tech.getTech,
videojs.registerTech=Tech.registerTech,
videojs.use=use,
Object.defineProperty(videojs, "middleware", {
        value: {}

        , writeable: !1, enumerable: !0
    }

),
Object.defineProperty(videojs.middleware, "TERMINATOR", {
        value:TERMINATOR, writeable: !1, enumerable: !0
    }

),
videojs.browser=browser,
videojs.TOUCH_ENABLED=TOUCH_ENABLED,
videojs.extend=extend,
videojs.mergeOptions=mergeOptions$3,
videojs.bind=bind,
videojs.registerPlugin=Plugin.registerPlugin,
videojs.deregisterPlugin=Plugin.deregisterPlugin,
videojs.plugin=function(e, t) {
    return log$1.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
    Plugin.registerPlugin(e, t)
}

,
videojs.getPlugins=Plugin.getPlugins,
videojs.getPlugin=Plugin.getPlugin,
videojs.getPluginVersion=Plugin.getPluginVersion,
videojs.addLanguage=function(e, t) {
    var i;

    return e=(""+e).toLowerCase(),
    videojs.options.languages=mergeOptions$3(videojs.options.languages, ((i= {}

            )[e]=t, i)),
    videojs.options.languages[e]
}

,
videojs.log=log$1,
videojs.createLogger=createLogger,
videojs.createTimeRange=videojs.createTimeRanges=createTimeRanges,
videojs.formatTime=formatTime,
videojs.setFormatTime=setFormatTime,
videojs.resetFormatTime=resetFormatTime,
videojs.parseUrl=parseUrl,
videojs.isCrossOrigin=isCrossOrigin,
videojs.EventTarget=EventTarget$2,
videojs.on=on,
videojs.one=one,
videojs.off=off,
videojs.trigger=trigger,
videojs.xhr=XHR__default.default,
videojs.TextTrack=TextTrack,
videojs.AudioTrack=AudioTrack,
videojs.VideoTrack=VideoTrack,
["isEl",
"isTextNode",
"createEl",
"hasClass",
"addClass",
"removeClass",
"toggleClass",
"setAttributes",
"getAttributes",
"emptyEl",
"appendContent",
"insertContent"].forEach((function(e) {
            videojs[e]=function() {
                return log$1.warn("videojs."+e+"() is deprecated; use videojs.dom."+e+"() instead"), Dom[e].apply(null, arguments)
            }
        }

    )),
videojs.computedStyle=computedStyle,
videojs.dom=Dom,
videojs.url=Url,
videojs.defineLazyProperty=defineLazyProperty,
videojs.addLanguage("en", {
        "Non-Fullscreen":"Exit Fullscreen"
    }

);

var resolveUrl=_resolveUrl__default.default,
resolveManifestRedirect=function(e, t, i) {
    return e&&i&&i.responseURL&&t !==i.responseURL?i.responseURL: t
}

,
logger=function(e) {
    return videojs.log.debug?videojs.log.debug.bind(videojs, "VHS:", e+" >"):function() {}
}

,
TIME_FUDGE_FACTOR=1/30,
SAFE_TIME_DELTA=3*TIME_FUDGE_FACTOR,
filterRanges=function(e, t) {
    var i,
    n=[];
    if(e&&e.length)for(i=0; i<e.length; i++)t(e.start(i), e.end(i))&&n.push([e.start(i), e.end(i)]);
    return videojs.createTimeRanges(n)
}

,
findRange=function(e, t) {
    return filterRanges(e, (function(e, i) {
                return e-SAFE_TIME_DELTA<=t&&i+SAFE_TIME_DELTA>=t
            }

        ))
}

,
findNextRange=function(e, t) {
    return filterRanges(e, (function(e) {
                return e-TIME_FUDGE_FACTOR>=t
            }

        ))
}

,
findGaps=function(e) {
    if(e.length<2)return videojs.createTimeRanges();

    for(var t=[], i=1; i<e.length; i++) {
        var n=e.end(i-1),
        r=e.start(i);
        t.push([n, r])
    }

    return videojs.createTimeRanges(t)
}

,
bufferIntersection=function(e, t) {
    var i=null,
    n=null,
    r=0,
    a=[],
    s=[];
    if( !(e&&e.length&&t&&t.length))return videojs.createTimeRange();

    for(var o=e.length; o--; )a.push( {
            time:e.start(o), type:"start"
        }

    ),
    a.push( {
            time:e.end(o), type:"end"
        }

    );

    for(o=t.length; o--; )a.push( {
            time:t.start(o), type:"start"
        }

    ),
    a.push( {
            time:t.end(o), type:"end"
        }

    );

    for(a.sort((function(e, t) {
                    return e.time-t.time
                }

            )), o=0; o<a.length; o++)"start"===a[o].type?2==++r&&(i=a[o].time):"end"===a[o].type&&1==--r&&(n=a[o].time),
    null !==i&&null !==n&&(s.push([i, n]), i=null, n=null);
    return videojs.createTimeRanges(s)
}

,
printableRange=function(e) {
    var t=[];
    if( !e|| !e.length)return"";
    for(var i=0; i<e.length; i++)t.push(e.start(i)+" => "+e.end(i));
    return t.join(", ")
}

,
timeUntilRebuffer=function(e, t, i) {
    return void 0===i&&(i=1),
    ((e.length?e.end(e.length-1):0)-t)/i
}

,
timeRangesToArray=function(e) {
    for(var t=[], i=0; i<e.length; i++)t.push( {
            start:e.start(i), end:e.end(i)
        }

    );
    return t
}

,
isRangeDifferent=function(e, t) {
    if(e===t)return !1;
    if( !e&&t|| !t&&e)return !0;
    if(e.length !==t.length)return !0;
    for(var i=0; i<e.length; i++)if(e.start(i) !==t.start(i)||e.end(i) !==t.end(i))return !0;
    return !1
}

,
lastBufferedEnd=function(e) {
    if(e&&e.length&&e.end)return e.end(e.length-1)
}

,
timeAheadOf=function(e, t) {
    var i=0;
    if( !e|| !e.length)return i;

    for(var n=0; n<e.length; n++) {
        var r=e.start(n),
        a=e.end(n);
        t>a||(i+=t>r&&t<=a?a-t:a-r)
    }

    return i
}

,
createTimeRange=videojs.createTimeRange,
segmentDurationWithParts=function(e, t) {
    if( !t.preload)return t.duration;
    var i=0;

    return(t.parts||[]).forEach((function(e) {
                i+=e.duration
            }

        )),
    (t.preloadHints||[]).forEach((function(t) {
                "PART"===t.type&&(i+=e.partTargetDuration)
            }

        )),
    i
}

,
getPartsAndSegments=function(e) {
    return(e.segments||[]).reduce((function(e, t, i) {
                return t.parts?t.parts.forEach((function(n, r) {
                            e.push( {
                                    duration:n.duration, segmentIndex:i, partIndex:r, part:n, segment:t
                                }

                            )
                        }

                    )):e.push( {
                        duration:t.duration, segmentIndex:i, partIndex:null, segment:t, part:null
                    }

                ), e
            }

        ), [])
}

,
getLastParts=function(e) {
    var t=e.segments&&e.segments.length&&e.segments[e.segments.length-1];
    return t&&t.parts||[]
}

,
getKnownPartCount=function(e) {
    var t=e.preloadSegment;

    if(t) {
        var i=t.parts;

        return(t.preloadHints||[]).reduce((function(e, t) {
                    return e+("PART"===t.type?1:0)
                }

            ), 0)+(i&&i.length?i.length:0)
    }
}

,
liveEdgeDelay=function(e, t) {
    if(t.endList)return 0;
    if(e&&e.suggestedPresentationDelay)return e.suggestedPresentationDelay;
    var i=getLastParts(t).length>0;
    return i&&t.serverControl&&t.serverControl.partHoldBack?t.serverControl.partHoldBack: i&&t.partTargetDuration?3*t.partTargetDuration:t.serverControl&&t.serverControl.holdBack?t.serverControl.holdBack:t.targetDuration?3*t.targetDuration:0
}

,
backwardDuration=function(e, t) {
    var i=0,
    n=t-e.mediaSequence,
    r=e.segments[n];

    if(r) {
        if(void 0 !==r.start)return {
            result: r.start, precise: !0
        }

        ;

        if(void 0 !==r.end)return {
            result: r.end-r.duration, precise: !0
        }
    }

    for(; n--; ) {
        if(void 0 !==(r=e.segments[n]).end)return {
            result: i+r.end, precise: !0
        }

        ;

        if(i+=segmentDurationWithParts(e, r), void 0 !==r.start)return {
            result: i+r.start, precise: !0
        }
    }

    return {
        result: i, precise: !1
    }
}

,
forwardDuration=function(e, t) {
    for(var i, n=0, r=t-e.mediaSequence; r<e.segments.length; r++) {
        if(void 0 !==(i=e.segments[r]).start)return {
            result: i.start-n, precise: !0
        }

        ;

        if(n+=segmentDurationWithParts(e, i), void 0 !==i.end)return {
            result: i.end-n, precise: !0
        }
    }

    return {
        result: -1, precise: !1
    }
}

,
intervalDuration=function(e, t, i) {
    if(void 0===t&&(t=e.mediaSequence+e.segments.length), t<e.mediaSequence)return 0;
    var n=backwardDuration(e, t);
    if(n.precise)return n.result;
    var r=forwardDuration(e, t);
    return r.precise?r.result: n.result+i
}

,
duration=function(e, t, i) {
    if( !e)return 0;

    if("number" !=typeof i&&(i=0), void 0===t) {
        if(e.totalDuration)return e.totalDuration;
        if( !e.endList)return window__default.default.Infinity
    }

    return intervalDuration(e, t, i)
}

,
sumDurations=function(e) {
    var t=e.defaultDuration,
    i=e.durationList,
    n=e.startIndex,
    r=e.endIndex,
    a=0;

    if(n>r) {
        var s=[r,
        n];
        n=s[0],
        r=s[1]
    }

    if(n<0) {
        for(var o=n; o<Math.min(0, r); o++)a+=t;
        n=0
    }

    for(var l=n; l<r; l++)a+=i[l].duration;
    return a
}

,
playlistEnd=function(e, t, i, n) {
    if( !e|| !e.segments)return null;
    if(e.endList)return duration(e);
    if(null===t)return null;
    t=t||0;
    var r=intervalDuration(e, e.mediaSequence+e.segments.length, t);
    return i&&(r-=n="number"==typeof n?n:liveEdgeDelay(null, e)),
    Math.max(0, r)
}

,
seekable=function(e, t, i) {
    var n=t||0,
    r=playlistEnd(e, t,  !0, i);
    return null===r?createTimeRange(): createTimeRange(n, r)
}

,
getMediaInfoForTime=function(e) {
    for(var t=e.playlist, i=e.currentTime, n=e.startingSegmentIndex, r=e.startingPartIndex, a=e.startTime, s=e.experimentalExactManifestTimings, o=i-a, l=getPartsAndSegments(t), u=0, d=0; d<l.length; d++) {
        var c=l[d];

        if(n===c.segmentIndex&&("number" !=typeof r||"number" !=typeof c.partIndex||r===c.partIndex)) {
            u=d;
            break
        }
    }

    if(o<0) {
        if(u>0)for(var h=u-1; h>=0; h--) {
            var p=l[h];

            if(o+=p.duration, s) {
                if(o<0)continue
            }

            else if(o+TIME_FUDGE_FACTOR<=0)continue;

            return {

                partIndex:p.partIndex,
                segmentIndex:p.segmentIndex,
                startTime:a-sumDurations( {
                        defaultDuration:t.targetDuration, durationList:l, startIndex:u, endIndex:h
                    }

                )
            }
        }

        return {
            partIndex: l[0]&&l[0].partIndex||null, segmentIndex:l[0]&&l[0].segmentIndex||0, startTime:i
        }
    }

    if(u<0) {
        for(var f=u; f<0; f++)if((o-=t.targetDuration)<0)return {
            partIndex: l[0]&&l[0].partIndex||null, segmentIndex:l[0]&&l[0].segmentIndex||0, startTime:i
        }

        ;
        u=0
    }

    for(var m=u; m<l.length; m++) {
        var g=l[m];

        if(o-=g.duration, s) {
            if(o>0)continue
        }

        else if(o-TIME_FUDGE_FACTOR>=0)continue;

        return {

            partIndex:g.partIndex,
            segmentIndex:g.segmentIndex,
            startTime:a+sumDurations( {
                    defaultDuration:t.targetDuration, durationList:l, startIndex:u, endIndex:m
                }

            )
        }
    }

    return {
        segmentIndex: l[l.length-1].segmentIndex, partIndex:l[l.length-1].partIndex, startTime:i
    }
}

,
isBlacklisted=function(e) {
    return e.excludeUntil&&e.excludeUntil>Date.now()
}

,
isIncompatible=function(e) {
    return e.excludeUntil&&e.excludeUntil===1/0
}

,
isEnabled=function(e) {
    var t=isBlacklisted(e);
    return !e.disabled&& !t
}

,
isDisabled=function(e) {
    return e.disabled
}

,
isAes=function(e) {
    for(var t=0; t<e.segments.length; t++)if(e.segments[t].key)return !0;
    return !1
}

,
hasAttribute=function(e, t) {
    return t.attributes&&t.attributes[e]
}

,
estimateSegmentRequestTime=function(e, t, i, n) {
    return void 0===n&&(n=0),
    hasAttribute("BANDWIDTH", i)?(e*i.attributes.BANDWIDTH-8*n)/t: NaN
}

,
isLowestEnabledRendition=function(e, t) {
    if(1===e.playlists.length)return !0;
    var i=t.attributes.BANDWIDTH||Number.MAX_VALUE;

    return 0===e.playlists.filter((function(e) {
                return ! !isEnabled(e)&&(e.attributes.BANDWIDTH||0)<i
            }

        )).length
}

,
playlistMatch=function(e, t) {
    return !( !e&& !t|| !e&&t||e&& !t||e !==t&&( !e.id|| !t.id||e.id !==t.id)&&( !e.resolvedUri|| !t.resolvedUri||e.resolvedUri !==t.resolvedUri)&&( !e.uri|| !t.uri||e.uri !==t.uri))
}

,
someAudioVariant=function(e, t) {
    var i=e&&e.mediaGroups&&e.mediaGroups.AUDIO|| {}

    ,
    n= !1;

    for(var r in i) {
        for(var a in i[r])if(n=t(i[r][a]))break;
        if(n)break
    }

    return ! !n
}

,
isAudioOnly=function(e) {
    if( !e|| !e.playlists|| !e.playlists.length)return someAudioVariant(e, (function(e) {
                return e.playlists&&e.playlists.length||e.uri
            }

        ));

    for(var t=function(t) {
            var i=e.playlists[t], n=i.attributes&&i.attributes.CODECS; return n&&n.split(",").every((function(e) {
                        return codecs_js.isAudioCodec(e)
                    }

                ))||someAudioVariant(e, (function(e) {
                        return playlistMatch(i, e)
                    }

                ))?"continue": {
                v: !1
            }
        }

        , i=0; i<e.playlists.length; i++) {
        var n=t(i);
        if("continue" !==n&&"object"==typeof n)return n.v
    }

    return !0
}

,
Playlist= {
    liveEdgeDelay: liveEdgeDelay, duration:duration, seekable:seekable, getMediaInfoForTime:getMediaInfoForTime, isEnabled:isEnabled, isDisabled:isDisabled, isBlacklisted:isBlacklisted, isIncompatible:isIncompatible, playlistEnd:playlistEnd, isAes:isAes, hasAttribute:hasAttribute, estimateSegmentRequestTime:estimateSegmentRequestTime, isLowestEnabledRendition:isLowestEnabledRendition, isAudioOnly:isAudioOnly, playlistMatch:playlistMatch, segmentDurationWithParts:segmentDurationWithParts
}

,
log=videojs.log,
createPlaylistID=function(e, t) {
    return e+"-"+t
}

,
parseManifest=function(e) {
    var t=e.onwarn,
    i=e.oninfo,
    n=e.manifestString,
    r=e.customTagParsers,
    a=void 0===r?[]: r, s=e.customTagMappers, o=void 0===s?[]:s, l=e.experimentalLLHLS, u=new m3u8Parser.Parser;

    t&&u.on("warn", t),
    i&&u.on("info", i),
    a.forEach((function(e) {
                return u.addParser(e)
            }

        )),
    o.forEach((function(e) {
                return u.addTagMapper(e)
            }

        )),
    u.push(n),
    u.end();
    var d=u.manifest;

    if(l||(["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach((function(e) {
                        d.hasOwnProperty(e)&&delete d[e]
                    }

                )), d.segments&&d.segments.forEach((function(e) {
                        ["parts", "preloadHints"].forEach((function(t) {
                                    e.hasOwnProperty(t)&&delete e[t]
                                }

                            ))
                    }

                ))),  !d.targetDuration) {
        var c=10;

        d.segments&&d.segments.length&&(c=d.segments.reduce((function(e, t) {
                        return Math.max(e, t.duration)
                    }

                ), 0)),
        t&&t("manifest has no targetDuration defaulting to "+c),
        d.targetDuration=c
    }

    var h=getLastParts(d);

    if(h.length&& !d.partTargetDuration) {
        var p=h.reduce((function(e, t) {
                    return Math.max(e, t.duration)
                }

            ), 0);
        t&&(t("manifest has no partTargetDuration defaulting to "+p), log.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")),
        d.partTargetDuration=p
    }

    return d
}

,
forEachMediaGroup=function(e, t) {

    e.mediaGroups&&["AUDIO",
    "SUBTITLES"].forEach((function(i) {
                if(e.mediaGroups[i])for(var n in e.mediaGroups[i])for(var r in e.mediaGroups[i][n]) {
                    var a=e.mediaGroups[i][n][r]; t(a, i, n, r)
                }
            }

        ))
}

,
setupMediaPlaylist=function(e) {
    var t=e.playlist,
    i=e.uri,
    n=e.id;

    t.id=n,
    t.playlistErrors_=0,
    i&&(t.uri=i),
    t.attributes=t.attributes|| {}
}

,
setupMediaPlaylists=function(e) {
    for(var t=e.playlists.length; t--; ) {
        var i=e.playlists[t];

        setupMediaPlaylist( {
                playlist:i, id:createPlaylistID(t, i.uri)
            }

        ),
        i.resolvedUri=resolveUrl(e.uri,i.uri),
        e.playlists[i.id]=i,
        e.playlists[i.uri]=i,
        i.attributes.BANDWIDTH||log.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")
    }
}

,
resolveMediaGroupUris=function(e) {
    forEachMediaGroup(e, (function(t) {
                t.uri&&(t.resolvedUri=resolveUrl(e.uri,t.uri))
            }

        ))
}

,
masterForMedia=function(e, t) {

    var i=createPlaylistID(0, t),
    n= {
        mediaGroups: {
            AUDIO: {}

            ,
            VIDEO: {}

            ,
            "CLOSED-CAPTIONS": {}

            ,
            SUBTITLES: {}
        }

        ,
        uri:window__default.default.location.href,
        resolvedUri:window__default.default.location.href,
        playlists:[ {

            uri:t,
            id:i,
            resolvedUri:t,
            attributes: {}
        }

        ]
    }

    ;
    return n.playlists[i]=n.playlists[0],
    n.playlists[t]=n.playlists[0],
    n
}

,
addPropertiesToMaster=function(e, t) {
    e.uri=t;

    for(var i=0; i<e.playlists.length; i++)if( !e.playlists[i].uri) {
        var n="placeholder-uri-"+i;
        e.playlists[i].uri=n
    }

    var r=isAudioOnly(e);

    forEachMediaGroup(e, (function(t, i, n, a) {
                var s="placeholder-uri-"+i+"-"+n+"-"+a; if( !t.playlists|| !t.playlists.length) {
                    if(r&&"AUDIO"===i&& !t.uri)for(var o=0; o<e.playlists.length; o++) {
                        var l=e.playlists[o]; if(l.attributes&&l.attributes.AUDIO&&l.attributes.AUDIO===n)return
                    }

                    t.playlists=[_extends__default.default( {}

                        , t)]
                }

                t.playlists.forEach((function(t, i) {
                            var n=createPlaylistID(i, s); t.uri?t.resolvedUri=t.resolvedUri||resolveUrl(e.uri,t.uri):(t.uri=0===i?s:n, t.resolvedUri=t.uri), t.id=t.id||n, t.attributes=t.attributes|| {}

                            , e.playlists[t.id]=t, e.playlists[t.uri]=t
                        }

                    ))
            }

        )),
    setupMediaPlaylists(e),
    resolveMediaGroupUris(e)
}

,
mergeOptions$2=videojs.mergeOptions,
EventTarget$1=videojs.EventTarget,
addLLHLSQueryDirectives=function(e, t) {
    if(t.endList|| !t.serverControl)return e;

    var i= {}

    ;

    if(t.serverControl.canBlockReload) {
        var n=t.preloadSegment,
        r=t.mediaSequence+t.segments.length;

        if(n) {
            var a=n.parts||[],
            s=getKnownPartCount(t)-1;
            s>-1&&s !==a.length-1&&(i._HLS_part=s),
            (s>-1||a.length)&&r--
        }

        i._HLS_msn=r
    }

    if(t.serverControl&&t.serverControl.canSkipUntil&&(i._HLS_skip=t.serverControl.canSkipDateranges?"v2":"YES"), Object.keys(i).length) {
        var o=new window__default.default.URL(e);

        ["_HLS_skip",
        "_HLS_msn",
        "_HLS_part"].forEach((function(e) {
                    i.hasOwnProperty(e)&&o.searchParams.set(e, i[e])
                }

            )),
        e=o.toString()
    }

    return e
}

,
updateSegment=function(e, t) {
    if( !e)return t;
    var i=mergeOptions$2(e, t);
    if(e.preloadHints&& !t.preloadHints&&delete i.preloadHints, e.parts&& !t.parts)delete i.parts;
    else if(e.parts&&t.parts)for(var n=0; n<t.parts.length; n++)e.parts&&e.parts[n]&&(i.parts[n]=mergeOptions$2(e.parts[n], t.parts[n]));
    return !e.skipped&&t.skipped&&(i.skipped= !1),
    e.preload&& !t.preload&&(i.preload= !1),
    i
}

,
updateSegments=function(e, t, i) {
    var n=e.slice(),
    r=t.slice();
    i=i||0;

    for(var a, s=[], o=0; o<r.length; o++) {
        var l=n[o+i],
        u=r[o];
        l?(a=l.map||a, s.push(updateSegment(l, u))): (a&& !u.map&&(u.map=a), s.push(u))
    }

    return s
}

,
resolveSegmentUris=function(e, t) {

     !e.resolvedUri&&e.uri&&(e.resolvedUri=resolveUrl(t,e.uri)),
    e.key&& !e.key.resolvedUri&&(e.key.resolvedUri=resolveUrl(t,e.key.uri)),
    e.map&& !e.map.resolvedUri&&(e.map.resolvedUri=resolveUrl(t,e.map.uri)),
    e.map&&e.map.key&& !e.map.key.resolvedUri&&(e.map.key.resolvedUri=resolveUrl(t,e.map.key.uri)),
    e.parts&&e.parts.length&&e.parts.forEach((function(e) {
                e.resolvedUri||(e.resolvedUri=resolveUrl(t,e.uri))
            }

        )),
    e.preloadHints&&e.preloadHints.length&&e.preloadHints.forEach((function(e) {
                e.resolvedUri||(e.resolvedUri=resolveUrl(t,e.uri))
            }

        ))
}

,
getAllSegments=function(e) {
    var t=e.segments||[],
    i=e.preloadSegment;

    if(i&&i.parts&&i.parts.length) {
        if(i.preloadHints)for(var n=0; n<i.preloadHints.length; n++)if("MAP"===i.preloadHints[n].type)return t;
        i.duration=e.targetDuration,
        i.preload= !0,
        t.push(i)
    }

    return t
}

,
isPlaylistUnchanged=function(e, t) {
    return e===t||e.segments&&t.segments&&e.segments.length===t.segments.length&&e.endList===t.endList&&e.mediaSequence===t.mediaSequence&&e.preloadSegment===t.preloadSegment
}

,
updateMaster$1=function(e, t, i) {
    void 0===i&&(i=isPlaylistUnchanged);

    var n=mergeOptions$2(e, {}

    ),
    r=n.playlists[t.id];
    if( !r)return null;
    if(i(r, t))return null;
    t.segments=getAllSegments(t);
    var a=mergeOptions$2(r, t);

    if(a.preloadSegment&& !t.preloadSegment&&delete a.preloadSegment, r.segments) {
        if(t.skip) {
            t.segments=t.segments||[];

            for(var s=0; s<t.skip.skippedSegments; s++)t.segments.unshift( {
                    skipped: !0
                }

            )
        }

        a.segments=updateSegments(r.segments, t.segments, t.mediaSequence-r.mediaSequence)
    }

    a.segments.forEach((function(e) {
                resolveSegmentUris(e, a.resolvedUri)
            }

        ));
    for(var o=0; o<n.playlists.length; o++)n.playlists[o].id===t.id&&(n.playlists[o]=a);

    return n.playlists[t.id]=a,
    n.playlists[t.uri]=a,
    forEachMediaGroup(e, (function(e, i, n, r) {
                if(e.playlists)for(var s=0; s<e.playlists.length; s++)t.id===e.playlists[s].id&&(e.playlists[s]=a)
            }

        )),
    n
}

,
refreshDelay=function(e, t) {
    var i=e.segments||[],
    n=i[i.length-1],
    r=n&&n.parts&&n.parts[n.parts.length-1],
    a=r&&r.duration||n&&n.duration;
    return t&&a?1e3*a: 500*(e.partTargetDuration||e.targetDuration||10)
}

,
PlaylistLoader=function(e) {
    function t(t, i, n) {
        var r;

        if(void 0===n&&(n= {}

            ), r=e.call(this)||this,  !t)throw new Error("A non-empty playlist URL or object is required");
        r.logger_=logger("PlaylistLoader");
        var a=n,
        s=a.withCredentials,
        o=void 0 !==s&&s,
        l=a.handleManifestRedirects,
        u=void 0 !==l&&l;
        r.src=t,
        r.vhs_=i,
        r.withCredentials=o,
        r.handleManifestRedirects=u;
        var d=i.options_;
        return r.customTagParsers=d&&d.customTagParsers||[],
        r.customTagMappers=d&&d.customTagMappers||[],
        r.experimentalLLHLS=d&&d.experimentalLLHLS|| !1,
        videojs.browser.IE_VERSION&&(r.experimentalLLHLS= !1),
        r.state="HAVE_NOTHING",
        r.handleMediaupdatetimeout_=r.handleMediaupdatetimeout_.bind(_assertThisInitialized__default.default(r)),
        r.on("mediaupdatetimeout", r.handleMediaupdatetimeout_),
        r
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.handleMediaupdatetimeout_=function() {
        var e=this;

        if("HAVE_METADATA"===this.state) {
            var t=this.media(),
            i=resolveUrl(this.master.uri,t.uri);

            this.experimentalLLHLS&&(i=addLLHLSQueryDirectives(i, t)),
            this.state="HAVE_CURRENT_METADATA",
            this.request=this.vhs_.xhr( {
                    uri:i, withCredentials:this.withCredentials
                }

                , (function(t, i) {
                        if(e.request)return t?e.playlistRequestError(e.request, e.media(), "HAVE_METADATA"):void e.haveMetadata( {
                                playlistString:e.request.responseText, url:e.media().uri, id:e.media().id
                            }

                        )
                    }

                ))
        }
    }

    ,
    i.playlistRequestError=function(e, t, i) {
        var n=t.uri,
        r=t.id;

        this.request=null,
        i&&(this.state=i),
        this.error= {
            playlist: this.master.playlists[r], status:e.status, message:"HLS playlist request error at URL: "+n+".", responseText:e.responseText, code:e.status>=500?4:2
        }

        ,
        this.trigger("error")
    }

    ,
    i.parseManifest_=function(e) {
        var t=this,
        i=e.url,
        n=e.manifestString;

        return parseManifest( {
                onwarn:function(e) {
                    var n=e.message; return t.logger_("m3u8-parser warn for "+i+": "+n)
                }

                , oninfo:function(e) {
                    var n=e.message; return t.logger_("m3u8-parser info for "+i+": "+n)
                }

                , manifestString:n, customTagParsers:this.customTagParsers, customTagMappers:this.customTagMappers, experimentalLLHLS:this.experimentalLLHLS
            }

        )
    }

    ,
    i.haveMetadata=function(e) {
        var t=e.playlistString,
        i=e.playlistObject,
        n=e.url,
        r=e.id;
        this.request=null,
        this.state="HAVE_METADATA";

        var a=i||this.parseManifest_( {
                url:n, manifestString:t
            }

        );

        a.lastRequest=Date.now(),
        setupMediaPlaylist( {
                playlist:a, uri:n, id:r
            }

        );
        var s=updateMaster$1(this.master, a);
        this.targetDuration=a.partTargetDuration||a.targetDuration,
        this.pendingMedia_=null,
        s?(this.master=s, this.media_=this.master.playlists[r]):this.trigger("playlistunchanged"),
        this.updateMediaUpdateTimeout_(refreshDelay(this.media(),  ! !s)),
        this.trigger("loadedplaylist")
    }

    ,
    i.dispose=function() {
        this.trigger("dispose"),
        this.stopRequest(),
        window__default.default.clearTimeout(this.mediaUpdateTimeout),
        window__default.default.clearTimeout(this.finalRenditionTimeout),
        this.off()
    }

    ,
    i.stopRequest=function() {
        if(this.request) {
            var e=this.request;
            this.request=null,
            e.onreadystatechange=null,
            e.abort()
        }
    }

    ,
    i.media=function(e, t) {
        var i=this;
        if( !e)return this.media_;
        if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);

        if("string"==typeof e) {
            if( !this.master.playlists[e])throw new Error("Unknown playlist URI: "+e);
            e=this.master.playlists[e]
        }

        if(window__default.default.clearTimeout(this.finalRenditionTimeout), t) {
            var n=(e.partTargetDuration||e.targetDuration)/2*1e3||5e3;
            this.finalRenditionTimeout=window__default.default.setTimeout(this.media.bind(this, e,  !1), n)
        }

        else {
            var r=this.state,
            a= !this.media_||e.id !==this.media_.id,
            s=this.master.playlists[e.id];
            if(s&&s.endList||e.endList&&e.segments.length)return this.request&&(this.request.onreadystatechange=null, this.request.abort(), this.request=null),
            this.state="HAVE_METADATA",
            this.media_=e,
            void(a&&(this.trigger("mediachanging"), "HAVE_MASTER"===r?this.trigger("loadedmetadata"):this.trigger("mediachange")));

            if(this.updateMediaUpdateTimeout_(refreshDelay(e,  !0)), a) {
                if(this.state="SWITCHING_MEDIA", this.request) {
                    if(e.resolvedUri===this.request.url)return;
                    this.request.onreadystatechange=null,
                    this.request.abort(),
                    this.request=null
                }

                this.media_&&this.trigger("mediachanging"),
                this.pendingMedia_=e,
                this.request=this.vhs_.xhr( {
                        uri:e.resolvedUri, withCredentials:this.withCredentials
                    }

                    , (function(t, n) {
                            if(i.request) {
                                if(e.lastRequest=Date.now(), e.resolvedUri=resolveManifestRedirect(i.handleManifestRedirects, e.resolvedUri, n), t)return i.playlistRequestError(i.request, e, r); i.haveMetadata( {
                                        playlistString:n.responseText, url:e.uri, id:e.id
                                    }

                                ), "HAVE_MASTER"===r?i.trigger("loadedmetadata"):i.trigger("mediachange")
                            }
                        }

                    ))
            }
        }
    }

    ,
    i.pause=function() {
        this.mediaUpdateTimeout&&(window__default.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout=null),
        this.stopRequest(),
        "HAVE_NOTHING"===this.state&&(this.started= !1),
        "SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA": this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")
    }

    ,
    i.load=function(e) {
        var t=this;
        this.mediaUpdateTimeout&&(window__default.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout=null);
        var i=this.media();

        if(e) {
            var n=i?(i.partTargetDuration||i.targetDuration)/2*1e3: 5e3;

            this.mediaUpdateTimeout=window__default.default.setTimeout((function() {
                        t.mediaUpdateTimeout=null, t.load()
                    }

                ), n)
        }

        else this.started?i&& !i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()
    }

    ,
    i.updateMediaUpdateTimeout_=function(e) {
        var t=this;

        this.mediaUpdateTimeout&&(window__default.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout=null),
        this.media()&& !this.media().endList&&(this.mediaUpdateTimeout=window__default.default.setTimeout((function() {
                        t.mediaUpdateTimeout=null, t.trigger("mediaupdatetimeout"), t.updateMediaUpdateTimeout_(e)
                    }

                ), e))
    }

    ,
    i.start=function() {
        var e=this;

        if(this.started= !0, "object"==typeof this.src)return this.src.uri||(this.src.uri=window__default.default.location.href),
        this.src.resolvedUri=this.src.uri,
        void setTimeout((function() {
                    e.setupInitialPlaylist(e.src)
                }

            ), 0);

        this.request=this.vhs_.xhr( {
                uri:this.src, withCredentials:this.withCredentials
            }

            , (function(t, i) {
                    if(e.request) {
                        if(e.request=null, t)return e.error= {
                            status:i.status, message:"HLS playlist request error at URL: "+e.src+".", responseText:i.responseText, code:2
                        }

                        , "HAVE_NOTHING"===e.state&&(e.started= !1), e.trigger("error"); e.src=resolveManifestRedirect(e.handleManifestRedirects, e.src, i); var n=e.parseManifest_( {
                                manifestString:i.responseText, url:e.src
                            }

                        ); e.setupInitialPlaylist(n)
                    }
                }

            ))
    }

    ,
    i.srcUri=function() {
        return"string"==typeof this.src?this.src: this.src.uri
    }

    ,
    i.setupInitialPlaylist=function(e) {

        if(this.state="HAVE_MASTER", e.playlists)return this.master=e,
        addPropertiesToMaster(this.master, this.srcUri()),
        e.playlists.forEach((function(e) {
                    e.segments=getAllSegments(e), e.segments.forEach((function(t) {
                                resolveSegmentUris(t, e.resolvedUri)
                            }

                        ))
                }

            )),
        this.trigger("loadedplaylist"),
        void(this.request||this.media(this.master.playlists[0]));
        var t=this.srcUri()||window__default.default.location.href;

        this.master=masterForMedia(e, t),
        this.haveMetadata( {
                playlistObject:e, url:t, id:this.master.playlists[0].id
            }

        ),
        this.trigger("loadedmetadata")
    }

    ,
    t
}

(EventTarget$1),
videojsXHR=videojs.xhr,
mergeOptions$1=videojs.mergeOptions,
callbackWrapper=function(e, t, i, n) {
    var r="arraybuffer"===e.responseType?e.response: e.responseText;
     !t&&r&&(e.responseTime=Date.now(), e.roundTripTime=e.responseTime-e.requestTime, e.bytesReceived=r.byteLength||r.length, e.bandwidth||(e.bandwidth=Math.floor(e.bytesReceived/e.roundTripTime*8*1e3))),
    i.headers&&(e.responseHeaders=i.headers),
    t&&"ETIMEDOUT"===t.code&&(e.timedout= !0),
    t||e.aborted||200===i.statusCode||206===i.statusCode||0===i.statusCode||(t=new Error("XHR Failed with a response of: "+(e&&(r||e.responseText)))),
    n(t, e)
}

,
xhrFactory=function() {
    var e=function e(t, i) {
        t=mergeOptions$1( {
                timeout:45e3
            }

            , t);
        var n=e.beforeRequest||videojs.Vhs.xhr.beforeRequest;

        if(n&&"function"==typeof n) {
            var r=n(t);
            r&&(t=r)
        }

        var a=( !0===videojs.Vhs.xhr.original?videojsXHR:videojs.Vhs.xhr)(t, (function(e, t) {
                    return callbackWrapper(a, e, t, i)
                }

            )),
        s=a.abort;

        return a.abort=function() {
            return a.aborted= !0,
            s.apply(a, arguments)
        }

        ,
        a.uri=t.uri,
        a.requestTime=Date.now(),
        a
    }

    ;
    return e.original= !0,
    e
}

,
byterangeStr=function(e) {
    return"bytes="+e.offset+"-"+("bigint"==typeof e.offset||"bigint"==typeof e.length?window__default.default.BigInt(e.offset)+window__default.default.BigInt(e.length)-window__default.default.BigInt(1):e.offset+e.length-1)
}

,
segmentXhrHeaders=function(e) {
    var t= {}

    ;
    return e.byterange&&(t.Range=byterangeStr(e.byterange)),
    t
}

,
textRange=function(e, t) {
    return e.start(t)+"-"+e.end(t)
}

,
formatHexString=function(e, t) {
    var i=e.toString(16);
    return"00".substring(0, 2-i.length)+i+(t%2?" ":"")
}

,
formatAsciiString=function(e) {
    return e>=32&&e<126?String.fromCharCode(e): "."
}

,
createTransferableMessage=function(e) {
    var t= {}

    ;

    return Object.keys(e).forEach((function(i) {
                var n=e[i]; byteHelpers.isArrayBufferView(n)?t[i]= {
                    bytes:n.buffer, byteOffset:n.byteOffset, byteLength:n.byteLength
                }

                :t[i]=n
            }

        )),
    t
}

,
initSegmentId=function(e) {
    var t=e.byterange|| {
        length: 1/0, offset:0
    }

    ;
    return[t.length,
    t.offset,
    e.resolvedUri].join(",")
}

,
segmentKeyId=function(e) {
    return e.resolvedUri
}

,
hexDump=function(e) {
    for(var t=Array.prototype.slice.call(e), i=16, n="", r=0; r<t.length/i; r++)n+=t.slice(r*i, r*i+i).map(formatHexString).join("")+" "+t.slice(r*i, r*i+i).map(formatAsciiString).join("")+"\n";
    return n
}

,
tagDump=function(e) {
    var t=e.bytes;
    return hexDump(t)
}

,
textRanges=function(e) {
    var t,
    i="";
    for(t=0; t<e.length; t++)i+=textRange(e, t)+" ";
    return i
}

,
utils=Object.freeze( {
        __proto__:null, createTransferableMessage:createTransferableMessage, initSegmentId:initSegmentId, segmentKeyId:segmentKeyId, hexDump:hexDump, tagDump:tagDump, textRanges:textRanges
    }

),
SEGMENT_END_FUDGE_PERCENT=.25,
playerTimeToProgramTime=function(e, t) {
    if( !t.dateTimeObject)return null;
    var i=t.videoTimingInfo.transmuxerPrependedSeconds,
    n=e-(t.videoTimingInfo.transmuxedPresentationStart+i);
    return new Date(t.dateTimeObject.getTime()+1e3*n)
}

,
originalSegmentVideoDuration=function(e) {
    return e.transmuxedPresentationEnd-e.transmuxedPresentationStart-e.transmuxerPrependedSeconds
}

,
findSegmentForProgramTime=function(e, t) {
    var i;

    try {
        i=new Date(e)
    }

    catch(e) {
        return null
    }

    if( !t|| !t.segments||0===t.segments.length)return null;
    var n=t.segments[0];
    if(i<n.dateTimeObject)return null;
    for(var r=0; r<t.segments.length-1&&(n=t.segments[r],  !(i<t.segments[r+1].dateTimeObject)); r++);
    var a=t.segments[t.segments.length-1],
    s=a.dateTimeObject,
    o=a.videoTimingInfo?originalSegmentVideoDuration(a.videoTimingInfo):a.duration+a.duration*SEGMENT_END_FUDGE_PERCENT;

    return i>new Date(s.getTime()+1e3*o)?null:(i>s&&(n=a), {
            segment:n, estimatedStart:n.videoTimingInfo?n.videoTimingInfo.transmuxedPresentationStart:Playlist.duration(t, t.mediaSequence+t.segments.indexOf(n)), type:n.videoTimingInfo?"accurate":"estimate"
        }

    )
}

,
findSegmentForPlayerTime=function(e, t) {
    if( !t|| !t.segments||0===t.segments.length)return null;
    for(var i, n=0, r=0; r<t.segments.length&& !(e<=(n=(i=t.segments[r]).videoTimingInfo?i.videoTimingInfo.transmuxedPresentationEnd:n+i.duration)); r++);
    var a=t.segments[t.segments.length-1];
    if(a.videoTimingInfo&&a.videoTimingInfo.transmuxedPresentationEnd<e)return null;

    if(e>n) {
        if(e>n+a.duration*SEGMENT_END_FUDGE_PERCENT)return null;
        i=a
    }

    return {
        segment: i, estimatedStart:i.videoTimingInfo?i.videoTimingInfo.transmuxedPresentationStart:n-i.duration, type:i.videoTimingInfo?"accurate":"estimate"
    }
}

,
getOffsetFromTimestamp=function(e, t) {
    var i,
    n;

    try {
        i=new Date(e),
        n=new Date(t)
    }

    catch(e) {}

    var r=i.getTime();
    return(n.getTime()-r)/1e3
}

,
verifyProgramDateTimeTags=function(e) {
    if( !e.segments||0===e.segments.length)return !1;
    for(var t=0; t<e.segments.length; t++)if( !e.segments[t].dateTimeObject)return !1;
    return !0
}

,
getProgramTime=function(e) {
    var t=e.playlist,
    i=e.time,
    n=void 0===i?void 0: i, r=e.callback;
    if( !r)throw new Error("getProgramTime: callback must be provided");

    if( !t||void 0===n)return r( {
            message:"getProgramTime: playlist and time must be provided"
        }

    );
    var a=findSegmentForPlayerTime(n, t);

    if( !a)return r( {
            message:"valid programTime was not found"
        }

    );

    if("estimate"===a.type)return r( {
            message:"Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime:a.estimatedStart
        }

    );

    var s= {
        mediaSeconds: n
    }

    ,
    o=playerTimeToProgramTime(n, a.segment);
    return o&&(s.programDateTime=o.toISOString()),
    r(null, s)
}

,
seekToProgramTime=function e(t) {
    var i=t.programTime,
    n=t.playlist,
    r=t.retryCount,
    a=void 0===r?2: r, s=t.seekTo, o=t.pauseAfterSeek, l=void 0===o||o, u=t.tech, d=t.callback;
    if( !d)throw new Error("seekToProgramTime: callback must be provided");

    if(void 0===i|| !n|| !s)return d( {
            message:"seekToProgramTime: programTime, seekTo and playlist must be provided"
        }

    );

    if( !n.endList&& !u.hasStarted_)return d( {
            message:"player must be playing a live stream to start buffering"
        }

    );

    if( !verifyProgramDateTimeTags(n))return d( {
            message:"programDateTime tags must be provided in the manifest "+n.resolvedUri
        }

    );
    var c=findSegmentForProgramTime(i, n);

    if( !c)return d( {
            message:i+" was not found in the stream"
        }

    );
    var h=c.segment,
    p=getOffsetFromTimestamp(h.dateTimeObject, i);

    if("estimate"===c.type)return 0===a?d( {
            message:i+" is not buffered yet. Try again"
        }

    ):(s(c.estimatedStart+p), void u.one("seeked", (function() {
                    e( {
                            programTime:i, playlist:n, retryCount:a-1, seekTo:s, pauseAfterSeek:l, tech:u, callback:d
                        }

                    )
                }

            )));
    var f=h.start+p;

    u.one("seeked", (function() {
                return d(null, u.currentTime())
            }

        )),
    l&&u.pause(),
    s(f)
}

,
callbackOnCompleted=function(e, t) {
    if(4===e.readyState)return t()
}

,
containerRequest=function(e, t, i) {

    var n,
    r=[],
    a= !1,
    s=function(e, t, n, r) {
        return t.abort(),
        a= !0,
        i(e, t, n, r)
    }

    ,
    o=function(e, t) {
        if( !a) {
            if(e)return s(e, t, "", r);
            var i=t.responseText.substring(r&&r.byteLength||0, t.responseText.length);

            if(r=byteHelpers.concatTypedArrays(r, byteHelpers.stringToBytes(i,  !0)), n=n||id3Helpers.getId3Offset(r), r.length<10||n&&r.length<n+2)return callbackOnCompleted(t, (function() {
                        return s(e, t, "", r)
                    }

                ));
            var o=containers.detectContainerForBytes(r);

            return"ts"===o&&r.length<188|| !o&&r.length<376?callbackOnCompleted(t, (function() {
                        return s(e, t, "", r)
                    }

                )):s(null, t, o, r)
        }
    }

    ,
    l=t( {
            uri:e, beforeSend:function(e) {
                e.overrideMimeType("text/plain; charset=x-user-defined"), e.addEventListener("progress", (function(t) {
                            return t.total, t.loaded, callbackWrapper(e, null, {
                                    statusCode:e.status
                                }

                                , o)
                        }

                    ))
            }
        }

        , (function(e, t) {
                return callbackWrapper(l, e, t, o)
            }

        ));
    return l
}

,
EventTarget=videojs.EventTarget,
mergeOptions=videojs.mergeOptions,
dashPlaylistUnchanged=function(e, t) {
    if( !isPlaylistUnchanged(e, t))return !1;
    if(e.sidx&&t.sidx&&(e.sidx.offset !==t.sidx.offset||e.sidx.length !==t.sidx.length))return !1;
    if( !e.sidx&&t.sidx||e.sidx&& !t.sidx)return !1;
    if(e.segments&& !t.segments|| !e.segments&&t.segments)return !1;
    if( !e.segments&& !t.segments)return !0;

    for(var i=0; i<e.segments.length; i++) {
        var n=e.segments[i],
        r=t.segments[i];
        if(n.uri !==r.uri)return !1;

        if(n.byterange||r.byterange) {
            var a=n.byterange,
            s=r.byterange;
            if(a&& !s|| !a&&s)return !1;
            if(a.offset !==s.offset||a.length !==s.length)return !1
        }
    }

    return !0
}

,
parseMasterXml=function(e) {

    var t=e.masterXml,
    i=e.srcUrl,
    n=e.clientOffset,
    r=e.sidxMapping,
    a=e.previousManifest,
    s=mpdParser.parse(t, {
            manifestUri:i, clientOffset:n, sidxMapping:r, previousManifest:a
        }

    );
    return addPropertiesToMaster(s, i),
    s
}

,
updateMaster=function(e, t, i) {
    for(var n= !0, r=mergeOptions(e, {
                duration:t.duration, minimumUpdatePeriod:t.minimumUpdatePeriod, timelineStarts:t.timelineStarts
            }

        ), a=0; a<t.playlists.length; a++) {
        var s=t.playlists[a];

        if(s.sidx) {
            var o=mpdParser.generateSidxKey(s.sidx);
            i&&i[o]&&i[o].sidx&&mpdParser.addSidxSegmentsToPlaylist(s, i[o].sidx, s.sidx.resolvedUri)
        }

        var l=updateMaster$1(r, s, dashPlaylistUnchanged);
        l&&(r=l, n= !1)
    }

    return forEachMediaGroup(t, (function(e, t, i, a) {
                if(e.playlists&&e.playlists.length) {
                    var s=e.playlists[0].id, o=updateMaster$1(r, e.playlists[0], dashPlaylistUnchanged); o&&((r=o).mediaGroups[t][i][a].playlists[0]=r.playlists[s], n= !1)
                }
            }

        )),
    t.minimumUpdatePeriod !==e.minimumUpdatePeriod&&(n= !1),
    n?null:r
}

,
equivalentSidx=function(e, t) {
    return(Boolean( !e.map&& !t.map)||Boolean(e.map&&t.map&&e.map.byterange.offset===t.map.byterange.offset&&e.map.byterange.length===t.map.byterange.length))&&e.uri===t.uri&&e.byterange.offset===t.byterange.offset&&e.byterange.length===t.byterange.length
}

,
compareSidxEntry=function(e, t) {
    var i= {}

    ;

    for(var n in e) {
        var r=e[n].sidx;

        if(r) {
            var a=mpdParser.generateSidxKey(r);
            if( !t[a])break;
            var s=t[a].sidxInfo;
            equivalentSidx(s, r)&&(i[a]=t[a])
        }
    }

    return i
}

,
filterChangedSidxMappings=function(e, t) {
    var i=compareSidxEntry(e.playlists, t);

    return forEachMediaGroup(e, (function(e, n, r, a) {
                if(e.playlists&&e.playlists.length) {
                    var s=e.playlists; i=mergeOptions(i, compareSidxEntry(s, t))
                }
            }

        )),
    i
}

,
DashPlaylistLoader=function(e) {
    function t(t, i, n, r) {
        var a;

        void 0===n&&(n= {}

        ),
        (a=e.call(this)||this).masterPlaylistLoader_=r||_assertThisInitialized__default.default(a),
        r||(a.isMaster_= !0);
        var s=n,
        o=s.withCredentials,
        l=void 0 !==o&&o,
        u=s.handleManifestRedirects,
        d=void 0 !==u&&u;
        if(a.vhs_=i, a.withCredentials=l, a.handleManifestRedirects=d,  !t)throw new Error("A non-empty playlist URL or object is required");

        return a.on("minimumUpdatePeriod", (function() {
                    a.refreshXml_()
                }

            )),
        a.on("mediaupdatetimeout", (function() {
                    a.refreshMedia_(a.media().id)
                }

            )),
        a.state="HAVE_NOTHING",
        a.loadedPlaylists_= {}

        ,
        a.logger_=logger("DashPlaylistLoader"),
        a.isMaster_?(a.masterPlaylistLoader_.srcUrl=t, a.masterPlaylistLoader_.sidxMapping_= {}

        ):a.childPlaylist_=t,
        a
    }

    _inheritsLoose__default.default(t, e);
    var i=t.prototype;

    return i.requestErrored_=function(e, t, i) {
        return !this.request||(this.request=null, e?(this.error="object" !=typeof e||e instanceof Error? {
                    status:t.status, message:"DASH request error at URL: "+t.uri, response:t.response, code:2
                }

                :e, i&&(this.state=i), this.trigger("error"),  !0):void 0)
    }

    ,
    i.addSidxSegments_=function(e, t, i) {
        var n=this,
        r=e.sidx&&mpdParser.generateSidxKey(e.sidx);

        if(e.sidx&&r&& !this.masterPlaylistLoader_.sidxMapping_[r]) {

            var a=resolveManifestRedirect(this.handleManifestRedirects, e.sidx.resolvedUri),
            s=function(a, s) {
                if( !n.requestErrored_(a, s, t)) {
                    var o,
                    l=n.masterPlaylistLoader_.sidxMapping_;

                    try {
                        o=parseSidx__default.default(byteHelpers.toUint8(s.response).subarray(8))
                    }

                    catch(e) {
                        return void n.requestErrored_(e, s, t)
                    }

                    return l[r]= {
                        sidxInfo: e.sidx, sidx:o
                    }

                    ,
                    mpdParser.addSidxSegmentsToPlaylist(e, o, e.sidx.resolvedUri),
                    i( !0)
                }
            }

            ;

            this.request=containerRequest(a, this.vhs_.xhr, (function(t, i, r, o) {
                        if(t)return s(t, i); if( !r||"mp4" !==r)return s( {
                                status:i.status, message:"Unsupported "+(r||"unknown")+" container type for sidx segment at URL: "+a, response:"", playlist:e, internal: !0, blacklistDuration:1/0, code:2
                            }

                            , i); var l=e.sidx.byterange, u=l.offset, d=l.length; if(o.length>=d+u)return s(t, {
                                response:o.subarray(u, u+d), status:i.status, uri:i.uri
                            }

                        ); n.request=n.vhs_.xhr( {
                                uri:a, responseType:"arraybuffer", headers:segmentXhrHeaders( {
                                        byterange:e.sidx.byterange
                                    }

                                )
                            }

                            , s)
                    }

                ))
        }

        else this.mediaRequest_=window__default.default.setTimeout((function() {
                    return i( !1)
                }

            ), 0)
    }

    ,
    i.dispose=function() {

        this.trigger("dispose"),
        this.stopRequest(),
        this.loadedPlaylists_= {}

        ,
        window__default.default.clearTimeout(this.minimumUpdatePeriodTimeout_),
        window__default.default.clearTimeout(this.mediaRequest_),
        window__default.default.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout=null,
        this.mediaRequest_=null,
        this.minimumUpdatePeriodTimeout_=null,
        this.masterPlaylistLoader_.createMupOnMedia_&&(this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_), this.masterPlaylistLoader_.createMupOnMedia_=null),
        this.off()
    }

    ,
    i.hasPendingRequest=function() {
        return this.request||this.mediaRequest_
    }

    ,
    i.stopRequest=function() {
        if(this.request) {
            var e=this.request;
            this.request=null,
            e.onreadystatechange=null,
            e.abort()
        }
    }

    ,
    i.media=function(e) {
        var t=this;
        if( !e)return this.media_;
        if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);
        var i=this.state;

        if("string"==typeof e) {
            if( !this.masterPlaylistLoader_.master.playlists[e])throw new Error("Unknown playlist URI: "+e);
            e=this.masterPlaylistLoader_.master.playlists[e]
        }

        var n= !this.media_||e.id !==this.media_.id;
        if(n&&this.loadedPlaylists_[e.id]&&this.loadedPlaylists_[e.id].endList)return this.state="HAVE_METADATA",
        this.media_=e,
        void(n&&(this.trigger("mediachanging"), this.trigger("mediachange")));

        n&&(this.media_&&this.trigger("mediachanging"), this.addSidxSegments_(e, i, (function(n) {
                        t.haveMetadata( {
                                startingState:i, playlist:e
                            }

                        )
                    }

                )))
    }

    ,
    i.haveMetadata=function(e) {
        var t=e.startingState,
        i=e.playlist;
        this.state="HAVE_METADATA",
        this.loadedPlaylists_[i.id]=i,
        this.mediaRequest_=null,
        this.refreshMedia_(i.id),
        "HAVE_MASTER"===t?this.trigger("loadedmetadata"): this.trigger("mediachange")
    }

    ,
    i.pause=function() {
        this.masterPlaylistLoader_.createMupOnMedia_&&(this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_), this.masterPlaylistLoader_.createMupOnMedia_=null),
        this.stopRequest(),
        window__default.default.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout=null,
        this.isMaster_&&(window__default.default.clearTimeout(this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_), this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_=null),
        "HAVE_NOTHING"===this.state&&(this.started= !1)
    }

    ,
    i.load=function(e) {
        var t=this;
        window__default.default.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout=null;
        var i=this.media();

        if(e) {
            var n=i?i.targetDuration/2*1e3: 5e3;

            this.mediaUpdateTimeout=window__default.default.setTimeout((function() {
                        return t.load()
                    }

                ), n)
        }

        else this.started?i&& !i.endList?(this.isMaster_&& !this.minimumUpdatePeriodTimeout_&&(this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")):this.trigger("loadedplaylist"):this.start()
    }

    ,
    i.start=function() {
        var e=this;

        this.started= !0,
        this.isMaster_?this.requestMaster_((function(t, i) {
                    e.haveMaster_(), e.hasPendingRequest()||e.media_||e.media(e.masterPlaylistLoader_.master.playlists[0])
                }

            )):this.mediaRequest_=window__default.default.setTimeout((function() {
                    return e.haveMaster_()
                }

            ), 0)
    }

    ,
    i.requestMaster_=function(e) {
        var t=this;

        this.request=this.vhs_.xhr( {
                uri:this.masterPlaylistLoader_.srcUrl, withCredentials:this.withCredentials
            }

            , (function(i, n) {
                    if( !t.requestErrored_(i, n)) {
                        var r=n.responseText !==t.masterPlaylistLoader_.masterXml_; return t.masterPlaylistLoader_.masterXml_=n.responseText, n.responseHeaders&&n.responseHeaders.date?t.masterLoaded_=Date.parse(n.responseHeaders.date):t.masterLoaded_=Date.now(), t.masterPlaylistLoader_.srcUrl=resolveManifestRedirect(t.handleManifestRedirects, t.masterPlaylistLoader_.srcUrl, n), r?(t.handleMaster_(), void t.syncClientServerClock_((function() {
                                        return e(n, r)
                                    }

                                ))):e(n, r)
                    }

                    "HAVE_NOTHING"===t.state&&(t.started= !1)
                }

            ))
    }

    ,
    i.syncClientServerClock_=function(e) {
        var t=this,
        i=mpdParser.parseUTCTiming(this.masterPlaylistLoader_.masterXml_);

        return null===i?(this.masterPlaylistLoader_.clientOffset_=this.masterLoaded_-Date.now(), e()):"DIRECT"===i.method?(this.masterPlaylistLoader_.clientOffset_=i.value-Date.now(), e()):void(this.request=this.vhs_.xhr( {
                    uri:resolveUrl(this.masterPlaylistLoader_.srcUrl,i.value), method:i.method, withCredentials:this.withCredentials
                }

                , (function(n, r) {
                        if(t.request) {
                            if(n)return t.masterPlaylistLoader_.clientOffset_=t.masterLoaded_-Date.now(), e(); var a; a="HEAD"===i.method?r.responseHeaders&&r.responseHeaders.date?Date.parse(r.responseHeaders.date):t.masterLoaded_:Date.parse(r.responseText), t.masterPlaylistLoader_.clientOffset_=a-Date.now(), e()
                        }
                    }

                )))
    }

    ,
    i.haveMaster_=function() {
        this.state="HAVE_MASTER",
        this.isMaster_?this.trigger("loadedplaylist"): this.media_||this.media(this.childPlaylist_)
    }

    ,
    i.handleMaster_=function() {
        this.mediaRequest_=null;

        var e=this.masterPlaylistLoader_.master,
        t=parseMasterXml( {
                masterXml:this.masterPlaylistLoader_.masterXml_, srcUrl:this.masterPlaylistLoader_.srcUrl, clientOffset:this.masterPlaylistLoader_.clientOffset_, sidxMapping:this.masterPlaylistLoader_.sidxMapping_, previousManifest:e
            }

        );
        e&&(t=updateMaster(e, t, this.masterPlaylistLoader_.sidxMapping_)),
        this.masterPlaylistLoader_.master=t||e;
        var i=this.masterPlaylistLoader_.master.locations&&this.masterPlaylistLoader_.master.locations[0];
        return i&&i !==this.masterPlaylistLoader_.srcUrl&&(this.masterPlaylistLoader_.srcUrl=i),
        ( !e||t&&t.minimumUpdatePeriod !==e.minimumUpdatePeriod)&&this.updateMinimumUpdatePeriodTimeout_(),
        Boolean(t)
    }

    ,
    i.updateMinimumUpdatePeriodTimeout_=function() {
        var e=this.masterPlaylistLoader_;
        e.createMupOnMedia_&&(e.off("loadedmetadata", e.createMupOnMedia_), e.createMupOnMedia_=null),
        e.minimumUpdatePeriodTimeout_&&(window__default.default.clearTimeout(e.minimumUpdatePeriodTimeout_), e.minimumUpdatePeriodTimeout_=null);
        var t=e.master&&e.master.minimumUpdatePeriod;
        0===t&&(e.media()?t=1e3*e.media().targetDuration:(e.createMupOnMedia_=e.updateMinimumUpdatePeriodTimeout_, e.one("loadedmetadata", e.createMupOnMedia_))),
        "number" !=typeof t||t<=0?t<0&&this.logger_("found invalid minimumUpdatePeriod of "+t+", not setting a timeout"): this.createMUPTimeout_(t)
    }

    ,
    i.createMUPTimeout_=function(e) {
        var t=this.masterPlaylistLoader_;

        t.minimumUpdatePeriodTimeout_=window__default.default.setTimeout((function() {
                    t.minimumUpdatePeriodTimeout_=null, t.trigger("minimumUpdatePeriod"), t.createMUPTimeout_(e)
                }

            ), e)
    }

    ,
    i.refreshXml_=function() {
        var e=this;

        this.requestMaster_((function(t, i) {
                    i&&(e.media_&&(e.media_=e.masterPlaylistLoader_.master.playlists[e.media_.id]), e.masterPlaylistLoader_.sidxMapping_=filterChangedSidxMappings(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.sidxMapping_), e.addSidxSegments_(e.media(), e.state, (function(t) {
                                    e.refreshMedia_(e.media().id)
                                }

                            )))
                }

            ))
    }

    ,
    i.refreshMedia_=function(e) {
        var t=this;
        if( !e)throw new Error("refreshMedia_ must take a media id");
        this.media_&&this.isMaster_&&this.handleMaster_();
        var i=this.masterPlaylistLoader_.master.playlists,
        n= !this.media_||this.media_ !==i[e];

        n?this.media_=i[e]:this.trigger("playlistunchanged"),
        this.mediaUpdateTimeout||function e() {
            t.media().endList||(t.mediaUpdateTimeout=window__default.default.setTimeout((function() {
                            t.trigger("mediaupdatetimeout"), e()
                        }

                    ), refreshDelay(t.media(), Boolean(n))))
        }

        (),
        this.trigger("loadedplaylist")
    }

    ,
    t
}

(EventTarget),
Config= {
    GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH:60, BACK_BUFFER_LENGTH:30, GOAL_BUFFER_LENGTH_RATE:1, INITIAL_BANDWIDTH:4194304, BANDWIDTH_VARIANCE:1.2, BUFFER_LOW_WATER_LINE:0, MAX_BUFFER_LOW_WATER_LINE:30, EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:16, BUFFER_LOW_WATER_LINE_RATE:1, BUFFER_HIGH_WATER_LINE:30
}

,
stringToArrayBuffer=function(e) {
    for(var t=new Uint8Array(new ArrayBuffer(e.length)), i=0; i<e.length; i++)t[i]=e.charCodeAt(i);
    return t.buffer
}

,
browserWorkerPolyFill=function(e) {
    return e.on=e.addEventListener,
    e.off=e.removeEventListener,
    e
}

,
createObjectURL=function(e) {
    try {
        return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))
    }

    catch(i) {
        var t=new BlobBuilder;
        return t.append(e),
        URL.createObjectURL(t.getBlob())
    }
}

,
factory=function(e) {
    return function() {
        var t=createObjectURL(e),
        i=browserWorkerPolyFill(new Worker(t));
        i.objURL=t;
        var n=i.terminate;

        return i.on=i.addEventListener,
        i.off=i.removeEventListener,
        i.terminate=function() {
            return URL.revokeObjectURL(t),
            n.call(this)
        }

        ,
        i
    }
}

,
transform=function(e) {
    return"var browserWorkerPolyFill = "+browserWorkerPolyFill.toString()+";\nbrowserWorkerPolyFill(self);\n"+e
}

,
getWorkerString=function(e) {
    return e.toString().replace(/^function.+? {
            /, "").slice(0, -1)
    }

    ,
    workerCode$1=transform(getWorkerString((function() {
                    var e=function() {
                        this.init=function() {
                            var e= {}

                            ; this.on=function(t, i) {
                                e[t]||(e[t]=[]), e[t]=e[t].concat(i)
                            }

                            , this.off=function(t, i) {
                                var n; return ! !e[t]&&(n=e[t].indexOf(i), e[t]=e[t].slice(), e[t].splice(n, 1), n>-1)
                            }

                            , this.trigger=function(t) {
                                var i, n, r, a; if(i=e[t])if(2===arguments.length)for(r=i.length, n=0; n<r; ++n)i[n].call(this, arguments[1]); else {
                                    for(a=[], n=arguments.length, n=1; n<arguments.length; ++n)a.push(arguments[n]); for(r=i.length, n=0; n<r; ++n)i[n].apply(this, a)
                                }
                            }

                            , this.dispose=function() {
                                e= {}
                            }
                        }
                    }

                    ; e.prototype.pipe=function(e) {
                        return this.on("data", (function(t) {
                                    e.push(t)
                                }

                            )), this.on("done", (function(t) {
                                    e.flush(t)
                                }

                            )), this.on("partialdone", (function(t) {
                                    e.partialFlush(t)
                                }

                            )), this.on("endedtimeline", (function(t) {
                                    e.endTimeline(t)
                                }

                            )), this.on("reset", (function(t) {
                                    e.reset(t)
                                }

                            )), e
                    }

                    , e.prototype.push=function(e) {
                        this.trigger("data", e)
                    }

                    , e.prototype.flush=function(e) {
                        this.trigger("done", e)
                    }

                    , e.prototype.partialFlush=function(e) {
                        this.trigger("partialdone", e)
                    }

                    , e.prototype.endTimeline=function(e) {
                        this.trigger("endedtimeline", e)
                    }

                    , e.prototype.reset=function(e) {
                        this.trigger("reset", e)
                    }

                    ; var t, i, n, r, a, s, o, l, u, d, c, h, p, f, m, g, _, v, y, T, b, S, E, C, k, w, I, A, P, L, x, O, D, R, M, U, N, B, F, j, H=e, V=Math.pow(2, 32), q= {
                        getUint64:function(e) {
                            var t, i=new DataView(e.buffer, e.byteOffset, e.byteLength); return i.getBigUint64?(t=i.getBigUint64(0))<Number.MAX_SAFE_INTEGER?Number(t):t:i.getUint32(0)*V+i.getUint32(4)
                        }

                        , MAX_UINT32:V
                    }

                    , W=q.MAX_UINT32;  !function() {
                        var e; if(S= {
                                avc1:[], avcC:[], btrt:[], dinf:[], dref:[], esds:[], ftyp:[], hdlr:[], mdat:[], mdhd:[], mdia:[], mfhd:[], minf:[], moof:[], moov:[], mp4a:[], mvex:[], mvhd:[], pasp:[], sdtp:[], smhd:[], stbl:[], stco:[], stsc:[], stsd:[], stsz:[], stts:[], styp:[], tfdt:[], tfhd:[], traf:[], trak:[], trun:[], trex:[], tkhd:[], vmhd:[]
                            }

                            , "undefined" !=typeof Uint8Array) {
                            for(e in S)S.hasOwnProperty(e)&&(S[e]=[e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]); E=new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), k=new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), C=new Uint8Array([0, 0, 0, 1]), w=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), I=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), A= {
                                video:w, audio:I
                            }

                            , x=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), L=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), O=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), D=O, R=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), M=O, P=new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                        }
                    }

                    (), t=function(e) {
                        var t, i, n=[], r=0; for(t=1; t<arguments.length; t++)n.push(arguments[t]); for(t=n.length; t--; )r+=n[t].byteLength; for(i=new Uint8Array(r+8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t=0, r=8; t<n.length; t++)i.set(n[t], r), r+=n[t].byteLength; return i
                    }

                    , i=function() {
                        return t(S.dinf, t(S.dref, x))
                    }

                    , n=function(e) {
                        return t(S.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype<<3|e.samplingfrequencyindex>>>1, e.samplingfrequencyindex<<7|e.channelcount<<3, 6, 1, 2]))
                    }

                    , m=function(e) {
                        return t(S.hdlr, A[e])
                    }

                    , f=function(e) {
                        var i=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration>>>24&255, e.duration>>>16&255, e.duration>>>8&255, 255&e.duration, 85, 196, 0, 0]); return e.samplerate&&(i[12]=e.samplerate>>>24&255, i[13]=e.samplerate>>>16&255, i[14]=e.samplerate>>>8&255, i[15]=255&e.samplerate), t(S.mdhd, i)
                    }

                    , p=function(e) {
                        return t(S.mdia, f(e), m(e.type), s(e))
                    }

                    , a=function(e) {
                        return t(S.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080&e)>>24, (16711680&e)>>16, (65280&e)>>8, 255&e]))
                    }

                    , s=function(e) {
                        return t(S.minf, "video"===e.type?t(S.vmhd, P):t(S.smhd, L), i(), _(e))
                    }

                    , o=function(e, i) {
                        for(var n=[], r=i.length; r--; )n[r]=y(i[r]); return t.apply(null, [S.moof, a(e)].concat(n))
                    }

                    , l=function(e) {
                        for(var i=e.length, n=[]; i--; )n[i]=c(e[i]); return t.apply(null, [S.moov, d(4294967295)].concat(n).concat(u(e)))
                    }

                    , u=function(e) {
                        for(var i=e.length, n=[]; i--; )n[i]=T(e[i]); return t.apply(null, [S.mvex].concat(n))
                    }

                    , d=function(e) {
                        var i=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080&e)>>24, (16711680&e)>>16, (65280&e)>>8, 255&e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return t(S.mvhd, i)
                    }

                    , g=function(e) {
                        var i, n, r=e.samples||[], a=new Uint8Array(4+r.length); for(n=0; n<r.length; n++)i=r[n].flags, a[n+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy; return t(S.sdtp, a)
                    }

                    , _=function(e) {
                        return t(S.stbl, v(e), t(S.stts, M), t(S.stsc, D), t(S.stsz, R), t(S.stco, O))
                    }

                    , v=function(e) {
                        return t(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video"===e.type?U(e):N(e))
                    }

                    , U=function(e) {
                        var i, n, r=e.sps||[], a=e.pps||[], s=[], o=[]; for(i=0; i<r.length; i++)s.push((65280&r[i].byteLength)>>>8), s.push(255&r[i].byteLength), s=s.concat(Array.prototype.slice.call(r[i])); for(i=0; i<a.length; i++)o.push((65280&a[i].byteLength)>>>8), o.push(255&a[i].byteLength), o=o.concat(Array.prototype.slice.call(a[i])); if(n=[S.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280&e.width)>>8, 255&e.width, (65280&e.height)>>8, 255&e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), t(S.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([r.length], s, [a.length], o))), t(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio) {
                            var l=e.sarRatio[0], u=e.sarRatio[1]; n.push(t(S.pasp, new Uint8Array([(4278190080&l)>>24, (16711680&l)>>16, (65280&l)>>8, 255&l, (4278190080&u)>>24, (16711680&u)>>16, (65280&u)>>8, 255&u])))
                        }

                        return t.apply(null, n)
                    }

                    , N=function(e) {
                        return t(S.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280&e.channelcount)>>8, 255&e.channelcount, (65280&e.samplesize)>>8, 255&e.samplesize, 0, 0, 0, 0, (65280&e.samplerate)>>8, 255&e.samplerate, 0, 0]), n(e))
                    }

                    , h=function(e) {
                        var i=new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080&e.id)>>24, (16711680&e.id)>>16, (65280&e.id)>>8, 255&e.id, 0, 0, 0, 0, (4278190080&e.duration)>>24, (16711680&e.duration)>>16, (65280&e.duration)>>8, 255&e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280&e.width)>>8, 255&e.width, 0, 0, (65280&e.height)>>8, 255&e.height, 0, 0]); return t(S.tkhd, i)
                    }

                    , y=function(e) {
                        var i, n, r, a, s, o; return i=t(S.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080&e.id)>>24, (16711680&e.id)>>16, (65280&e.id)>>8, 255&e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), s=Math.floor(e.baseMediaDecodeTime/W), o=Math.floor(e.baseMediaDecodeTime%W), n=t(S.tfdt, new Uint8Array([1, 0, 0, 0, s>>>24&255, s>>>16&255, s>>>8&255, 255&s, o>>>24&255, o>>>16&255, o>>>8&255, 255&o])), "audio"===e.type?(r=b(e, 92), t(S.traf, i, n, r)):(a=g(e), r=b(e, a.length+92), t(S.traf, i, n, r, a))
                    }

                    , c=function(e) {
                        return e.duration=e.duration||4294967295, t(S.trak, h(e), p(e))
                    }

                    , T=function(e) {
                        var i=new Uint8Array([0, 0, 0, 0, (4278190080&e.id)>>24, (16711680&e.id)>>16, (65280&e.id)>>8, 255&e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]); return"video" !==e.type&&(i[i.length-1]=0), t(S.trex, i)
                    }

                    , j=function(e, t) {
                        var i=0, n=0, r=0, a=0; return e.length&&(void 0 !==e[0].duration&&(i=1), void 0 !==e[0].size&&(n=2), void 0 !==e[0].flags&&(r=4), void 0 !==e[0].compositionTimeOffset&&(a=8)), [0, 0, i|n|r|a, 1, (4278190080&e.length)>>>24, (16711680&e.length)>>>16, (65280&e.length)>>>8, 255&e.length, (4278190080&t)>>>24, (16711680&t)>>>16, (65280&t)>>>8, 255&t]
                    }

                    , F=function(e, i) {
                        var n, r, a, s, o, l; for(i+=20+16*(s=e.samples||[]).length, a=j(s, i), (r=new Uint8Array(a.length+16*s.length)).set(a), n=a.length, l=0; l<s.length; l++)o=s[l], r[n++]=(4278190080&o.duration)>>>24, r[n++]=(16711680&o.duration)>>>16, r[n++]=(65280&o.duration)>>>8, r[n++]=255&o.duration, r[n++]=(4278190080&o.size)>>>24, r[n++]=(16711680&o.size)>>>16, r[n++]=(65280&o.size)>>>8, r[n++]=255&o.size, r[n++]=o.flags.isLeading<<2|o.flags.dependsOn, r[n++]=o.flags.isDependedOn<<6|o.flags.hasRedundancy<<4|o.flags.paddingValue<<1|o.flags.isNonSyncSample, r[n++]=61440&o.flags.degradationPriority, r[n++]=15&o.flags.degradationPriority, r[n++]=(4278190080&o.compositionTimeOffset)>>>24, r[n++]=(16711680&o.compositionTimeOffset)>>>16, r[n++]=(65280&o.compositionTimeOffset)>>>8, r[n++]=255&o.compositionTimeOffset; return t(S.trun, r)
                    }

                    , B=function(e, i) {
                        var n, r, a, s, o, l; for(i+=20+8*(s=e.samples||[]).length, a=j(s, i), (n=new Uint8Array(a.length+8*s.length)).set(a), r=a.length, l=0; l<s.length; l++)o=s[l], n[r++]=(4278190080&o.duration)>>>24, n[r++]=(16711680&o.duration)>>>16, n[r++]=(65280&o.duration)>>>8, n[r++]=255&o.duration, n[r++]=(4278190080&o.size)>>>24, n[r++]=(16711680&o.size)>>>16, n[r++]=(65280&o.size)>>>8, n[r++]=255&o.size; return t(S.trun, n)
                    }

                    , b=function(e, t) {
                        return"audio"===e.type?B(e, t):F(e, t)
                    }

                    , r=function() {
                        return t(S.ftyp, E, C, E, k)
                    }

                    ; var $, G, z, K, Q, Y, X, J, Z=function(e) {
                        return t(S.mdat, e)
                    }

                    , ee=o, te=function(e, t) {
                        var i= {
                            size:0, flags: {
                                isLeading:0, dependsOn:1, isDependedOn:0, hasRedundancy:0, degradationPriority:0, isNonSyncSample:1
                            }
                        }

                        ; return i.dataOffset=t, i.compositionTimeOffset=e.pts-e.dts, i.duration=e.duration, i.size=4*e.length, i.size+=e.byteLength, e.keyFrame&&(i.flags.dependsOn=2, i.flags.isNonSyncSample=0), i
                    }

                    , ie=[33, 16, 5, 32, 164, 27], ne=[33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], re=function(e) {
                        for(var t=[]; e--; )t.push(0); return t
                    }

                    , ae=9e4; Y=function(e, t) {
                        return G(Q(e, t))
                    }

                    , X=function(e, t) {
                        return z(K(e), t)
                    }

                    , J=function(e, t, i) {
                        return K(i?e:e-t)
                    }

                    ; var se=ae, oe=G=function(e) {
                        return e*ae
                    }

                    , le=(z=function(e, t) {
                            return e*t
                        }

                        , K=function(e) {
                            return e/ae
                        }

                    ), ue=(Q=function(e, t) {
                            return e/t
                        }

                        , Y), de=X, ce=J, he=function(e, t, i, n) {
                        var r, a, s, o, l, u=0, d=0, c=0; if(t.length&&(r=ue(e.baseMediaDecodeTime, e.samplerate), a=Math.ceil(se/(e.samplerate/1024)), i&&n&&(u=r-Math.max(i, n), c=(d=Math.floor(u/a))*a),  !(d<1||c>45e3))) {
                            for((s=function() {
                                        if( !$) {
                                            var e= {
                                                96e3:[ie, [227, 64], re(154), [56]], 88200:[ie, [231], re(170), [56]], 64e3:[ie, [248, 192], re(240), [56]], 48e3:[ie, [255, 192], re(268), [55, 148, 128], re(54), [112]], 44100:[ie, [255, 192], re(268), [55, 163, 128], re(84), [112]], 32e3:[ie, [255, 192], re(268), [55, 234], re(226), [112]], 24e3:[ie, [255, 192], re(268), [55, 255, 128], re(268), [111, 112], re(126), [224]], 16e3:[ie, [255, 192], re(268), [55, 255, 128], re(268), [111, 255], re(269), [223, 108], re(195), [1, 192]], 12e3:[ne, re(268), [3, 127, 248], re(268), [6, 255, 240], re(268), [13, 255, 224], re(268), [27, 253, 128], re(259), [56]], 11025:[ne, re(268), [3, 127, 248], re(268), [6, 255, 240], re(268), [13, 255, 224], re(268), [27, 255, 192], re(268), [55, 175, 128], re(108), [112]], 8e3:[ne, re(268), [3, 121, 16], re(47), [7]]
                                            }

                                            ; t=e, $=Object.keys(t).reduce((function(e, i) {
                                                        return e[i]=new Uint8Array(t[i].reduce((function(e, t) {
                                                                        return e.concat(t)
                                                                    }

                                                                ), [])), e
                                                    }

                                                ), {}

                                            )
                                        }

                                        var t; return $
                                    }

                                    ()[e.samplerate])||(s=t[0].data), o=0; o<d; o++)l=t[0], t.splice(0, 0, {
                                    data:s, dts:l.dts-a, pts:l.pts-a
                                }

                            ); return e.baseMediaDecodeTime-=Math.floor(de(c, e.samplerate)), c
                        }
                    }

                    , pe=function(e) {
                        delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                    }

                    , fe=function(e, t) {
                        var i, n=e.minSegmentDts; return t||(n-=e.timelineStartInfo.dts), i=e.timelineStartInfo.baseMediaDecodeTime, i+=n, i=Math.max(0, i), "audio"===e.type&&(i*=e.samplerate/9e4, i=Math.floor(i)), i
                    }

                    , me=function(e, t) {
                        "number"==typeof t.pts&&(void 0===e.timelineStartInfo.pts&&(e.timelineStartInfo.pts=t.pts), void 0===e.minSegmentPts?e.minSegmentPts=t.pts:e.minSegmentPts=Math.min(e.minSegmentPts, t.pts), void 0===e.maxSegmentPts?e.maxSegmentPts=t.pts:e.maxSegmentPts=Math.max(e.maxSegmentPts, t.pts)), "number"==typeof t.dts&&(void 0===e.timelineStartInfo.dts&&(e.timelineStartInfo.dts=t.dts), void 0===e.minSegmentDts?e.minSegmentDts=t.dts:e.minSegmentDts=Math.min(e.minSegmentDts, t.dts), void 0===e.maxSegmentDts?e.maxSegmentDts=t.dts:e.maxSegmentDts=Math.max(e.maxSegmentDts, t.dts))
                    }

                    , ge=function e(t) {
                        t=t|| {}

                        , e.prototype.init.call(this), this.parse708captions_="boolean" !=typeof t.parse708captions||t.parse708captions, this.captionPackets_=[], this.ccStreams_=[new we(0, 0), new we(0, 1), new we(1, 0), new we(1, 1)], this.parse708captions_&&(this.cc708Stream_=new be( {
                                    captionServices:t.captionServices
                                }

                            )), this.reset(), this.ccStreams_.forEach((function(e) {
                                    e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"))
                                }

                            ), this), this.parse708captions_&&(this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")))
                    }

                    ; (ge.prototype=new H).push=function(e) {
                        var t, i, n; if("sei_rbsp"===e.nalUnitType&&(t=function(e) {
                                    for(var t=0, i= {
                                            payloadType:-1, payloadSize:0
                                        }

                                        , n=0, r=0; t<e.byteLength&&128 !==e[t]; ) {
                                        for(; 255===e[t]; )n+=255, t++; for(n+=e[t++]; 255===e[t]; )r+=255, t++; if(r+=e[t++],  !i.payload&&4===n) {
                                            if("GA94"===String.fromCharCode(e[t+3], e[t+4], e[t+5], e[t+6])) {
                                                i.payloadType=n, i.payloadSize=r, i.payload=e.subarray(t, t+r); break
                                            }

                                            i.payload=void 0
                                        }

                                        t+=r, n=0, r=0
                                    }

                                    return i
                                }

                                (e.escapedRBSP)).payload&&4===t.payloadType&&(i=function(e) {
                                    return 181 !==e.payload[0]||49 !=(e.payload[1]<<8|e.payload[2])||"GA94" !==String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6])||3 !==e.payload[7]?null:e.payload.subarray(8, e.payload.length-1)
                                }

                                (t)))if(e.dts<this.latestDts_)this.ignoreNextEqualDts_= !0; else {
                            if(e.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--, void(this.numSameDts_||(this.ignoreNextEqualDts_= !1)); n=function(e, t) {
                                var i, n, r, a, s=[]; if( !(64&t[0]))return s; for(n=31&t[0], i=0; i<n; i++)a= {
                                    type:3&t[2+(r=3*i)], pts:e
                                }

                                , 4&t[r+2]&&(a.ccData=t[r+3]<<8|t[r+4], s.push(a)); return s
                            }

                            (e.pts, i), this.captionPackets_=this.captionPackets_.concat(n), this.latestDts_ !==e.dts&&(this.numSameDts_=0), this.numSameDts_++, this.latestDts_=e.dts
                        }
                    }

                    , ge.prototype.flushCCStreams=function(e) {
                        this.ccStreams_.forEach((function(t) {
                                    return"flush"===e?t.flush():t.partialFlush()
                                }

                            ), this)
                    }

                    , ge.prototype.flushStream=function(e) {
                        this.captionPackets_.length?(this.captionPackets_.forEach((function(e, t) {
                                        e.presortIndex=t
                                    }

                                )), this.captionPackets_.sort((function(e, t) {
                                        return e.pts===t.pts?e.presortIndex-t.presortIndex:e.pts-t.pts
                                    }

                                )), this.captionPackets_.forEach((function(e) {
                                        e.type<2?this.dispatchCea608Packet(e):this.dispatchCea708Packet(e)
                                    }

                                ), this), this.captionPackets_.length=0, this.flushCCStreams(e)):this.flushCCStreams(e)
                    }

                    , ge.prototype.flush=function() {
                        return this.flushStream("flush")
                    }

                    , ge.prototype.partialFlush=function() {
                        return this.flushStream("partialFlush")
                    }

                    , ge.prototype.reset=function() {
                        this.latestDts_=null, this.ignoreNextEqualDts_= !1, this.numSameDts_=0, this.activeCea608Channel_=[null, null], this.ccStreams_.forEach((function(e) {
                                    e.reset()
                                }

                            ))
                    }

                    , ge.prototype.dispatchCea608Packet=function(e) {
                        this.setsTextOrXDSActive(e)?this.activeCea608Channel_[e.type]=null:this.setsChannel1Active(e)?this.activeCea608Channel_[e.type]=0:this.setsChannel2Active(e)&&(this.activeCea608Channel_[e.type]=1), null !==this.activeCea608Channel_[e.type]&&this.ccStreams_[(e.type<<1)+this.activeCea608Channel_[e.type]].push(e)
                    }

                    , ge.prototype.setsChannel1Active=function(e) {
                        return 4096==(30720&e.ccData)
                    }

                    , ge.prototype.setsChannel2Active=function(e) {
                        return 6144==(30720&e.ccData)
                    }

                    , ge.prototype.setsTextOrXDSActive=function(e) {
                        return 256==(28928&e.ccData)||4138==(30974&e.ccData)||6186==(30974&e.ccData)
                    }

                    , ge.prototype.dispatchCea708Packet=function(e) {
                        this.parse708captions_&&this.cc708Stream_.push(e)
                    }

                    ; var _e= {
                        127:9834, 4128:32, 4129:160, 4133:8230, 4138:352, 4140:338, 4144:9608, 4145:8216, 4146:8217, 4147:8220, 4148:8221, 4149:8226, 4153:8482, 4154:353, 4156:339, 4157:8480, 4159:376, 4214:8539, 4215:8540, 4216:8541, 4217:8542, 4218:9168, 4219:9124, 4220:9123, 4221:9135, 4222:9126, 4223:9121, 4256:12600
                    }

                    , ve=function(e) {
                        return 32<=e&&e<=127||160<=e&&e<=255
                    }

                    , ye=function(e) {
                        this.windowNum=e, this.reset()
                    }

                    ; ye.prototype.reset=function() {
                        this.clearText(), this.pendingNewLine= !1, this.winAttr= {}

                        , this.penAttr= {}

                        , this.penLoc= {}

                        , this.penColor= {}

                        , this.visible=0, this.rowLock=0, this.columnLock=0, this.priority=0, this.relativePositioning=0, this.anchorVertical=0, this.anchorHorizontal=0, this.anchorPoint=0, this.rowCount=1, this.virtualRowCount=this.rowCount+1, this.columnCount=41, this.windowStyle=0, this.penStyle=0
                    }

                    , ye.prototype.getText=function() {
                        return this.rows.join("\n")
                    }

                    , ye.prototype.clearText=function() {
                        this.rows=[""], this.rowIdx=0
                    }

                    , ye.prototype.newLine=function(e) {
                        for(this.rows.length>=this.virtualRowCount&&"function"==typeof this.beforeRowOverflow&&this.beforeRowOverflow(e), this.rows.length>0&&(this.rows.push(""), this.rowIdx++); this.rows.length>this.virtualRowCount; )this.rows.shift(), this.rowIdx--
                    }

                    , ye.prototype.isEmpty=function() {
                        return 0===this.rows.length||1===this.rows.length&&""===this.rows[0]
                    }

                    , ye.prototype.addText=function(e) {
                        this.rows[this.rowIdx]+=e
                    }

                    , ye.prototype.backspace=function() {
                        if( !this.isEmpty()) {
                            var e=this.rows[this.rowIdx]; this.rows[this.rowIdx]=e.substr(0, e.length-1)
                        }
                    }

                    ; var Te=function(e, t, i) {
                        this.serviceNum=e, this.text="", this.currentWindow=new ye(-1), this.windows=[], this.stream=i, "string"==typeof t&&this.createTextDecoder(t)
                    }

                    ; Te.prototype.init=function(e, t) {
                        this.startPts=e; for(var i=0; i<8; i++)this.windows[i]=new ye(i), "function"==typeof t&&(this.windows[i].beforeRowOverflow=t)
                    }

                    , Te.prototype.setCurrentWindow=function(e) {
                        this.currentWindow=this.windows[e]
                    }

                    , Te.prototype.createTextDecoder=function(e) {
                        if("undefined"==typeof TextDecoder)this.stream.trigger("log", {
                                level:"warn", message:"The `encoding` option is unsupported without TextDecoder support"
                            }

                        ); else try {
                            this.textDecoder_=new TextDecoder(e)
                        }

                        catch(t) {
                            this.stream.trigger("log", {
                                    level:"warn", message:"TextDecoder could not be created with "+e+" encoding. "+t
                                }

                            )
                        }
                    }

                    ; var be=function e(t) {
                        t=t|| {}

                        , e.prototype.init.call(this); var i, n=this, r=t.captionServices|| {}

                        , a= {}

                        ; Object.keys(r).forEach((function(e) {
                                    i=r[e], /^SERVICE/.test(e)&&(a[e]=i.encoding)
                                }

                            )), this.serviceEncodings=a, this.current708Packet=null, this.services= {}

                        , this.push=function(e) {
                            3===e.type?(n.new708Packet(), n.add708Bytes(e)):(null===n.current708Packet&&n.new708Packet(), n.add708Bytes(e))
                        }
                    }

                    ; be.prototype=new H, be.prototype.new708Packet=function() {
                        null !==this.current708Packet&&this.push708Packet(), this.current708Packet= {
                            data:[], ptsVals:[]
                        }
                    }

                    , be.prototype.add708Bytes=function(e) {
                        var t=e.ccData, i=t>>>8, n=255&t; this.current708Packet.ptsVals.push(e.pts), this.current708Packet.data.push(i), this.current708Packet.data.push(n)
                    }

                    , be.prototype.push708Packet=function() {
                        var e=this.current708Packet, t=e.data, i=null, n=null, r=0, a=t[r++]; for(e.seq=a>>6, e.sizeCode=63&a; r<t.length; r++)n=31&(a=t[r++]), 7==(i=a>>5)&&n>0&&(i=a=t[r++]), this.pushServiceBlock(i, r, n), n>0&&(r+=n-1)
                    }

                    , be.prototype.pushServiceBlock=function(e, t, i) {
                        var n, r=t, a=this.current708Packet.data, s=this.services[e]; for(s||(s=this.initService(e, r)); r<t+i&&r<a.length; r++)n=a[r], ve(n)?r=this.handleText(r, s):24===n?r=this.multiByteCharacter(r, s):16===n?r=this.extendedCommands(r, s):128<=n&&n<=135?r=this.setCurrentWindow(r, s):152<=n&&n<=159?r=this.defineWindow(r, s):136===n?r=this.clearWindows(r, s):140===n?r=this.deleteWindows(r, s):137===n?r=this.displayWindows(r, s):138===n?r=this.hideWindows(r, s):139===n?r=this.toggleWindows(r, s):151===n?r=this.setWindowAttributes(r, s):144===n?r=this.setPenAttributes(r, s):145===n?r=this.setPenColor(r, s):146===n?r=this.setPenLocation(r, s):143===n?s=this.reset(r, s):8===n?s.currentWindow.backspace():12===n?s.currentWindow.clearText():13===n?s.currentWindow.pendingNewLine= !0:14===n?s.currentWindow.clearText():141===n&&r++
                    }

                    , be.prototype.extendedCommands=function(e, t) {
                        var i=this.current708Packet.data[++e]; return ve(i)&&(e=this.handleText(e, t, {
                                    isExtended: !0
                                }

                            )), e
                    }

                    , be.prototype.getPts=function(e) {
                        return this.current708Packet.ptsVals[Math.floor(e/2)]
                    }

                    , be.prototype.initService=function(e, t) {
                        var i, n, r=this; return(i="SERVICE"+e)in this.serviceEncodings&&(n=this.serviceEncodings[i]), this.services[e]=new Te(e, n, r), this.services[e].init(this.getPts(t), (function(t) {
                                    r.flushDisplayed(t, r.services[e])
                                }

                            )), this.services[e]
                    }

                    , be.prototype.handleText=function(e, t, i) {
                        var n, r, a, s, o=i&&i.isExtended, l=i&&i.isMultiByte, u=this.current708Packet.data, d=o?4096:0, c=u[e], h=u[e+1], p=t.currentWindow; return t.textDecoder_&& !o?(l?(r=[c, h], e++):r=[c], n=t.textDecoder_.decode(new Uint8Array(r))):(s=_e[a=d|c]||a, n=4096&a&&a===s?"":String.fromCharCode(s)), p.pendingNewLine&& !p.isEmpty()&&p.newLine(this.getPts(e)), p.pendingNewLine= !1, p.addText(n), e
                    }

                    , be.prototype.multiByteCharacter=function(e, t) {
                        var i=this.current708Packet.data, n=i[e+1], r=i[e+2]; return ve(n)&&ve(r)&&(e=this.handleText(++e, t, {
                                    isMultiByte: !0
                                }

                            )), e
                    }

                    , be.prototype.setCurrentWindow=function(e, t) {
                        var i=7&this.current708Packet.data[e]; return t.setCurrentWindow(i), e
                    }

                    , be.prototype.defineWindow=function(e, t) {
                        var i=this.current708Packet.data, n=i[e], r=7&n; t.setCurrentWindow(r); var a=t.currentWindow; return n=i[++e], a.visible=(32&n)>>5, a.rowLock=(16&n)>>4, a.columnLock=(8&n)>>3, a.priority=7&n, n=i[++e], a.relativePositioning=(128&n)>>7, a.anchorVertical=127&n, n=i[++e], a.anchorHorizontal=n, n=i[++e], a.anchorPoint=(240&n)>>4, a.rowCount=15&n, n=i[++e], a.columnCount=63&n, n=i[++e], a.windowStyle=(56&n)>>3, a.penStyle=7&n, a.virtualRowCount=a.rowCount+1, e
                    }

                    , be.prototype.setWindowAttributes=function(e, t) {
                        var i=this.current708Packet.data, n=i[e], r=t.currentWindow.winAttr; return n=i[++e], r.fillOpacity=(192&n)>>6, r.fillRed=(48&n)>>4, r.fillGreen=(12&n)>>2, r.fillBlue=3&n, n=i[++e], r.borderType=(192&n)>>6, r.borderRed=(48&n)>>4, r.borderGreen=(12&n)>>2, r.borderBlue=3&n, n=i[++e], r.borderType+=(128&n)>>5, r.wordWrap=(64&n)>>6, r.printDirection=(48&n)>>4, r.scrollDirection=(12&n)>>2, r.justify=3&n, n=i[++e], r.effectSpeed=(240&n)>>4, r.effectDirection=(12&n)>>2, r.displayEffect=3&n, e
                    }

                    , be.prototype.flushDisplayed=function(e, t) {
                        for(var i=[], n=0; n<8; n++)t.windows[n].visible&& !t.windows[n].isEmpty()&&i.push(t.windows[n].getText()); t.endPts=e, t.text=i.join("\n\n"), this.pushCaption(t), t.startPts=e
                    }

                    , be.prototype.pushCaption=function(e) {
                        "" !==e.text&&(this.trigger("data", {
                                    startPts:e.startPts, endPts:e.endPts, text:e.text, stream:"cc708_"+e.serviceNum
                                }

                            ), e.text="", e.startPts=e.endPts)
                    }

                    , be.prototype.displayWindows=function(e, t) {
                        var i=this.current708Packet.data[++e], n=this.getPts(e); this.flushDisplayed(n, t); for(var r=0; r<8; r++)i&1<<r&&(t.windows[r].visible=1); return e
                    }

                    , be.prototype.hideWindows=function(e, t) {
                        var i=this.current708Packet.data[++e], n=this.getPts(e); this.flushDisplayed(n, t); for(var r=0; r<8; r++)i&1<<r&&(t.windows[r].visible=0); return e
                    }

                    , be.prototype.toggleWindows=function(e, t) {
                        var i=this.current708Packet.data[++e], n=this.getPts(e); this.flushDisplayed(n, t); for(var r=0; r<8; r++)i&1<<r&&(t.windows[r].visible^=1); return e
                    }

                    , be.prototype.clearWindows=function(e, t) {
                        var i=this.current708Packet.data[++e], n=this.getPts(e); this.flushDisplayed(n, t); for(var r=0; r<8; r++)i&1<<r&&t.windows[r].clearText(); return e
                    }

                    , be.prototype.deleteWindows=function(e, t) {
                        var i=this.current708Packet.data[++e], n=this.getPts(e); this.flushDisplayed(n, t); for(var r=0; r<8; r++)i&1<<r&&t.windows[r].reset(); return e
                    }

                    , be.prototype.setPenAttributes=function(e, t) {
                        var i=this.current708Packet.data, n=i[e], r=t.currentWindow.penAttr; return n=i[++e], r.textTag=(240&n)>>4, r.offset=(12&n)>>2, r.penSize=3&n, n=i[++e], r.italics=(128&n)>>7, r.underline=(64&n)>>6, r.edgeType=(56&n)>>3, r.fontStyle=7&n, e
                    }

                    , be.prototype.setPenColor=function(e, t) {
                        var i=this.current708Packet.data, n=i[e], r=t.currentWindow.penColor; return n=i[++e], r.fgOpacity=(192&n)>>6, r.fgRed=(48&n)>>4, r.fgGreen=(12&n)>>2, r.fgBlue=3&n, n=i[++e], r.bgOpacity=(192&n)>>6, r.bgRed=(48&n)>>4, r.bgGreen=(12&n)>>2, r.bgBlue=3&n, n=i[++e], r.edgeRed=(48&n)>>4, r.edgeGreen=(12&n)>>2, r.edgeBlue=3&n, e
                    }

                    , be.prototype.setPenLocation=function(e, t) {
                        var i=this.current708Packet.data, n=i[e], r=t.currentWindow.penLoc; return t.currentWindow.pendingNewLine= !0, n=i[++e], r.row=15&n, n=i[++e], r.column=63&n, e
                    }

                    , be.prototype.reset=function(e, t) {
                        var i=this.getPts(e); return this.flushDisplayed(i, t), this.initService(t.serviceNum, e)
                    }

                    ; var Se= {
                        42:225, 92:233, 94:237, 95:243, 96:250, 123:231, 124:247, 125:209, 126:241, 127:9608, 304:174, 305:176, 306:189, 307:191, 308:8482, 309:162, 310:163, 311:9834, 312:224, 313:160, 314:232, 315:226, 316:234, 317:238, 318:244, 319:251, 544:193, 545:201, 546:211, 547:218, 548:220, 549:252, 550:8216, 551:161, 552:42, 553:39, 554:8212, 555:169, 556:8480, 557:8226, 558:8220, 559:8221, 560:192, 561:194, 562:199, 563:200, 564:202, 565:203, 566:235, 567:206, 568:207, 569:239, 570:212, 571:217, 572:249, 573:219, 574:171, 575:187, 800:195, 801:227, 802:205, 803:204, 804:236, 805:210, 806:242, 807:213, 808:245, 809:123, 810:125, 811:92, 812:94, 813:95, 814:124, 815:126, 816:196, 817:228, 818:214, 819:246, 820:223, 821:165, 822:164, 823:9474, 824:197, 825:229, 826:216, 827:248, 828:9484, 829:9488, 830:9492, 831:9496
                    }

                    , Ee=function(e) {
                        return null===e?"":(e=Se[e]||e, String.fromCharCode(e))
                    }

                    , Ce=[4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], ke=function() {
                        for(var e=[], t=15; t--; )e.push(""); return e
                    }

                    , we=function e(t, i) {
                        e.prototype.init.call(this), this.field_=t||0, this.dataChannel_=i||0, this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)), this.setConstants(), this.reset(), this.push=function(e) {
                            var t, i, n, r, a; if((t=32639&e.ccData) !==this.lastControlCode_) {
                                if(4096==(61440&t)?this.lastControlCode_=t:t !==this.PADDING_&&(this.lastControlCode_=null), n=t>>>8, r=255&t, t !==this.PADDING_)if(t===this.RESUME_CAPTION_LOADING_)this.mode_="popOn"; else if(t===this.END_OF_CAPTION_)this.mode_="popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i=this.displayed_, this.displayed_=this.nonDisplayed_, this.nonDisplayed_=i, this.startPts_=e.pts; else if(t===this.ROLL_UP_2_ROWS_)this.rollUpRows_=2, this.setRollUp(e.pts); else if(t===this.ROLL_UP_3_ROWS_)this.rollUpRows_=3, this.setRollUp(e.pts); else if(t===this.ROLL_UP_4_ROWS_)this.rollUpRows_=4, this.setRollUp(e.pts); else if(t===this.CARRIAGE_RETURN_)this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_=e.pts; else if(t===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0, -1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0, -1); else if(t===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(e.pts), this.displayed_=ke(); else if(t===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=ke(); else if(t===this.RESUME_DIRECT_CAPTIONING_)"paintOn" !==this.mode_&&(this.flushDisplayed(e.pts), this.displayed_=ke()), this.mode_="paintOn", this.startPts_=e.pts; else if(this.isSpecialCharacter(n, r))a=Ee((n=(3&n)<<8)|r), this[this.mode_](e.pts, a), this.column_++; else if(this.isExtCharacter(n, r))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0, -1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0, -1), a=Ee((n=(3&n)<<8)|r), this[this.mode_](e.pts, a), this.column_++; else if(this.isMidRowCode(n, r))this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14==(14&r)&&this.addFormatting(e.pts, ["i"]), 1==(1&r)&&this.addFormatting(e.pts, ["u"]); else if(this.isOffsetControlCode(n, r))this.column_+=3&r; else if(this.isPAC(n, r)) {
                                    var s=Ce.indexOf(7968&t); "rollUp"===this.mode_&&(s-this.rollUpRows_+1<0&&(s=this.rollUpRows_-1), this.setRollUp(e.pts, s)), s !==this.row_&&(this.clearFormatting(e.pts), this.row_=s), 1&r&&-1===this.formatting_.indexOf("u")&&this.addFormatting(e.pts, ["u"]), 16==(16&t)&&(this.column_=4*((14&t)>>1)), this.isColorPAC(r)&&14==(14&r)&&this.addFormatting(e.pts, ["i"])
                                }

                                else this.isNormalChar(n)&&(0===r&&(r=null), a=Ee(n), a+=Ee(r), this[this.mode_](e.pts, a), this.column_+=a.length)
                            }

                            else this.lastControlCode_=null
                        }
                    }

                    ; we.prototype=new H, we.prototype.flushDisplayed=function(e) {
                        var t=this.displayed_.map((function(e, t) {
                                    try {
                                        return e.trim()
                                    }

                                    catch(e) {
                                        return this.trigger("log", {
                                                level:"warn", message:"Skipping a malformed 608 caption at index "+t+"."
                                            }

                                        ), ""
                                    }
                                }

                            ), this).join("\n").replace(/^\n+|\n+$/g, ""); t.length&&this.trigger("data", {
                                startPts:this.startPts_, endPts:e, text:t, stream:this.name_
                            }

                        )
                    }

                    , we.prototype.reset=function() {
                        this.mode_="popOn", this.topRow_=0, this.startPts_=0, this.displayed_=ke(), this.nonDisplayed_=ke(), this.lastControlCode_=null, this.column_=0, this.row_=14, this.rollUpRows_=2, this.formatting_=[]
                    }

                    , we.prototype.setConstants=function() {
                        0===this.dataChannel_?(this.BASE_=16, this.EXT_=17, this.CONTROL_=(20|this.field_)<<8, this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24, this.EXT_=25, this.CONTROL_=(28|this.field_)<<8, this.OFFSET_=31), this.PADDING_=0, this.RESUME_CAPTION_LOADING_=32|this.CONTROL_, this.END_OF_CAPTION_=47|this.CONTROL_, this.ROLL_UP_2_ROWS_=37|this.CONTROL_, this.ROLL_UP_3_ROWS_=38|this.CONTROL_, this.ROLL_UP_4_ROWS_=39|this.CONTROL_, this.CARRIAGE_RETURN_=45|this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_, this.BACKSPACE_=33|this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_
                    }

                    , we.prototype.isSpecialCharacter=function(e, t) {
                        return e===this.EXT_&&t>=48&&t<=63
                    }

                    , we.prototype.isExtCharacter=function(e, t) {
                        return(e===this.EXT_+1||e===this.EXT_+2)&&t>=32&&t<=63
                    }

                    , we.prototype.isMidRowCode=function(e, t) {
                        return e===this.EXT_&&t>=32&&t<=47
                    }

                    , we.prototype.isOffsetControlCode=function(e, t) {
                        return e===this.OFFSET_&&t>=33&&t<=35
                    }

                    , we.prototype.isPAC=function(e, t) {
                        return e>=this.BASE_&&e<this.BASE_+8&&t>=64&&t<=127
                    }

                    , we.prototype.isColorPAC=function(e) {
                        return e>=64&&e<=79||e>=96&&e<=127
                    }

                    , we.prototype.isNormalChar=function(e) {
                        return e>=32&&e<=127
                    }

                    , we.prototype.setRollUp=function(e, t) {
                        if("rollUp" !==this.mode_&&(this.row_=14, this.mode_="rollUp", this.flushDisplayed(e), this.nonDisplayed_=ke(), this.displayed_=ke()), void 0 !==t&&t !==this.row_)for(var i=0; i<this.rollUpRows_; i++)this.displayed_[t-i]=this.displayed_[this.row_-i], this.displayed_[this.row_-i]=""; void 0===t&&(t=this.row_), this.topRow_=t-this.rollUpRows_+1
                    }

                    , we.prototype.addFormatting=function(e, t) {
                        this.formatting_=this.formatting_.concat(t); var i=t.reduce((function(e, t) {
                                    return e+"<"+t+">"
                                }

                            ), ""); this[this.mode_](e, i)
                    }

                    , we.prototype.clearFormatting=function(e) {
                        if(this.formatting_.length) {
                            var t=this.formatting_.reverse().reduce((function(e, t) {
                                        return e+"</"+t+">"
                                    }

                                ), ""); this.formatting_=[], this[this.mode_](e, t)
                        }
                    }

                    , we.prototype.popOn=function(e, t) {
                        var i=this.nonDisplayed_[this.row_]; i+=t, this.nonDisplayed_[this.row_]=i
                    }

                    , we.prototype.rollUp=function(e, t) {
                        var i=this.displayed_[this.row_]; i+=t, this.displayed_[this.row_]=i
                    }

                    , we.prototype.shiftRowsUp_=function() {
                        var e; for(e=0; e<this.topRow_; e++)this.displayed_[e]=""; for(e=this.row_+1; e<15; e++)this.displayed_[e]=""; for(e=this.topRow_; e<this.row_; e++)this.displayed_[e]=this.displayed_[e+1]; this.displayed_[this.row_]=""
                    }

                    , we.prototype.paintOn=function(e, t) {
                        var i=this.displayed_[this.row_]; i+=t, this.displayed_[this.row_]=i
                    }

                    ; var Ie= {
                        CaptionStream:ge, Cea608Stream:we, Cea708Stream:be
                    }

                    , Ae= {
                        H264_STREAM_TYPE:27, ADTS_STREAM_TYPE:15, METADATA_STREAM_TYPE:21
                    }

                    , Pe="shared", Le=function(e, t) {
                        var i=1; for(e>t&&(i=-1); Math.abs(t-e)>4294967296; )e+=8589934592*i; return e
                    }

                    , xe=function e(t) {
                        var i, n; e.prototype.init.call(this), this.type_=t||Pe, this.push=function(e) {
                            this.type_ !==Pe&&e.type !==this.type_||(void 0===n&&(n=e.dts), e.dts=Le(e.dts, n), e.pts=Le(e.pts, n), i=e.dts, this.trigger("data", e))
                        }

                        , this.flush=function() {
                            n=i, this.trigger("done")
                        }

                        , this.endTimeline=function() {
                            this.flush(), this.trigger("endedtimeline")
                        }

                        , this.discontinuity=function() {
                            n=void 0, i=void 0
                        }

                        , this.reset=function() {
                            this.discontinuity(), this.trigger("reset")
                        }
                    }

                    ; xe.prototype=new H; var Oe, De=xe, Re=Le, Me=function(e, t, i) {
                        var n, r=""; for(n=t; n<i; n++)r+="%"+("00"+e[n].toString(16)).slice(-2); return r
                    }

                    , Ue=function(e, t, i) {
                        return decodeURIComponent(Me(e, t, i))
                    }

                    , Ne=function(e) {
                        return e[0]<<21|e[1]<<14|e[2]<<7|e[3]
                    }

                    , Be= {
                        TXXX:function(e) {
                            var t; if(3===e.data[0]) {
                                for(t=1; t<e.data.length; t++)if(0===e.data[t]) {
                                    e.description=Ue(e.data, 1, t), e.value=Ue(e.data, t+1, e.data.length).replace(/\0*$/, ""); break
                                }

                                e.data=e.value
                            }
                        }

                        , WXXX:function(e) {
                            var t; if(3===e.data[0])for(t=1; t<e.data.length; t++)if(0===e.data[t]) {
                                e.description=Ue(e.data, 1, t), e.url=Ue(e.data, t+1, e.data.length); break
                            }
                        }

                        , PRIV:function(e) {
                            var t, i; for(t=0; t<e.data.length; t++)if(0===e.data[t]) {
                                e.owner=(i=e.data, unescape(Me(i, 0, t))); break
                            }

                            e.privateData=e.data.subarray(t+1), e.data=e.privateData
                        }
                    }

                    ; (Oe=function(e) {
                            var t, i= {
                                descriptor:e&&e.descriptor
                            }

                            , n=0, r=[], a=0; if(Oe.prototype.init.call(this), this.dispatchType=Ae.METADATA_STREAM_TYPE.toString(16), i.descriptor)for(t=0; t<i.descriptor.length; t++)this.dispatchType+=("00"+i.descriptor[t].toString(16)).slice(-2); this.push=function(e) {
                                var t, i, s, o, l; if("timed-metadata"===e.type)if(e.dataAlignmentIndicator&&(a=0, r.length=0), 0===r.length&&(e.data.length<10||e.data[0] !=="I".charCodeAt(0)||e.data[1] !=="D".charCodeAt(0)||e.data[2] !=="3".charCodeAt(0)))this.trigger("log", {
                                        level:"warn", message:"Skipping unrecognized metadata packet"
                                    }

                                ); else if(r.push(e), a+=e.data.byteLength, 1===r.length&&(n=Ne(e.data.subarray(6, 10)), n+=10),  !(a<n)) {
                                    for(t= {
                                            data:new Uint8Array(n), frames:[], pts:r[0].pts, dts:r[0].dts
                                        }

                                        , l=0; l<n; )t.data.set(r[0].data.subarray(0, n-l), l), l+=r[0].data.byteLength, a-=r[0].data.byteLength, r.shift(); i=10, 64&t.data[5]&&(i+=4, i+=Ne(t.data.subarray(10, 14)), n-=Ne(t.data.subarray(16, 20))); do {
                                        if((s=Ne(t.data.subarray(i+4, i+8)))<1)return void this.trigger("log", {
                                                level:"warn", message:"Malformed ID3 frame encountered. Skipping metadata parsing."
                                            }

                                        ); if((o= {
                                                    id:String.fromCharCode(t.data[i], t.data[i+1], t.data[i+2], t.data[i+3]), data:t.data.subarray(i+10, i+s+10)
                                                }

                                            ).key=o.id, Be[o.id]&&(Be[o.id](o), "com.apple.streaming.transportStreamTimestamp"===o.owner)) {
                                            var u=o.data, d=(1&u[3])<<30|u[4]<<22|u[5]<<14|u[6]<<6|u[7]>>>2; d*=4, d+=3&u[7], o.timeStamp=d, void 0===t.pts&&void 0===t.dts&&(t.pts=o.timeStamp, t.dts=o.timeStamp), this.trigger("timestamp", o)
                                        }

                                        t.frames.push(o), i+=10, i+=s
                                    }

                                    while(i<n); this.trigger("data", t)
                                }
                            }
                        }

                    ).prototype=new H; var Fe, je, He, Ve=Oe, qe=De, We=188; (Fe=function() {
                            var e=new Uint8Array(We), t=0; Fe.prototype.init.call(this), this.push=function(i) {
                                var n, r=0, a=We; for(t?((n=new Uint8Array(i.byteLength+t)).set(e.subarray(0, t)), n.set(i, t), t=0):n=i; a<n.byteLength; )71 !==n[r]||71 !==n[a]?(r++, a++):(this.trigger("data", n.subarray(r, a)), r+=We, a+=We); r<n.byteLength&&(e.set(n.subarray(r), 0), t=n.byteLength-r)
                            }

                            , this.flush=function() {
                                t===We&&71===e[0]&&(this.trigger("data", e), t=0), this.trigger("done")
                            }

                            , this.endTimeline=function() {
                                this.flush(), this.trigger("endedtimeline")
                            }

                            , this.reset=function() {
                                t=0, this.trigger("reset")
                            }
                        }

                    ).prototype=new H, (je=function() {
                            var e, t, i, n; je.prototype.init.call(this), n=this, this.packetsWaitingForPmt=[], this.programMapTable=void 0, e=function(e, n) {
                                var r=0; n.payloadUnitStartIndicator&&(r+=e[r]+1), "pat"===n.type?t(e.subarray(r), n):i(e.subarray(r), n)
                            }

                            , t=function(e, t) {
                                t.section_number=e[7], t.last_section_number=e[8], n.pmtPid=(31&e[10])<<8|e[11], t.pmtPid=n.pmtPid
                            }

                            , i=function(e, t) {
                                var i, r; if(1&e[5]) {
                                    for(n.programMapTable= {
                                            video:null, audio:null, "timed-metadata": {}
                                        }

                                        , i=3+((15&e[1])<<8|e[2])-4, r=12+((15&e[10])<<8|e[11]); r<i; ) {
                                        var a=e[r], s=(31&e[r+1])<<8|e[r+2]; a===Ae.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:a===Ae.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:a===Ae.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=a), r+=5+((15&e[r+3])<<8|e[r+4])
                                    }

                                    t.programMapTable=n.programMapTable
                                }
                            }

                            , this.push=function(t) {
                                var i= {}

                                , n=4; if(i.payloadUnitStartIndicator= ! !(64&t[1]), i.pid=31&t[1], i.pid<<=8, i.pid|=t[2], (48&t[3])>>>4>1&&(n+=t[n]+1), 0===i.pid)i.type="pat", e(t.subarray(n), i), this.trigger("data", i); else if(i.pid===this.pmtPid)for(i.type="pmt", e(t.subarray(n), i), this.trigger("data", i); this.packetsWaitingForPmt.length; )this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t, n, i]):this.processPes_(t, n, i)
                            }

                            , this.processPes_=function(e, t, i) {
                                i.pid===this.programMapTable.video?i.streamType=Ae.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Ae.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid], i.type="pes", i.data=e.subarray(t), this.trigger("data", i)
                            }
                        }

                    ).prototype=new H, je.STREAM_TYPES= {
                        h264:27, adts:15
                    }

                    , (He=function() {
                            var e, t=this, i= !1, n= {
                                data:[], size:0
                            }

                            , r= {
                                data:[], size:0
                            }

                            , a= {
                                data:[], size:0
                            }

                            , s=function(e, i, n) {
                                var r, a, s=new Uint8Array(e.size), o= {
                                    type:i
                                }

                                , l=0, u=0; if(e.data.length&& !(e.size<9)) {
                                    for(o.trackId=e.data[0].pid, l=0; l<e.data.length; l++)a=e.data[l], s.set(a.data, u), u+=a.data.byteLength; var d, c, h, p; c=o, p=(d=s)[0]<<16|d[1]<<8|d[2], c.data=new Uint8Array, 1===p&&(c.packetLength=6+(d[4]<<8|d[5]), c.dataAlignmentIndicator=0 !=(4&d[6]), 192&(h=d[7])&&(c.pts=(14&d[9])<<27|(255&d[10])<<20|(254&d[11])<<12|(255&d[12])<<5|(254&d[13])>>>3, c.pts*=4, c.pts+=(6&d[13])>>>1, c.dts=c.pts, 64&h&&(c.dts=(14&d[14])<<27|(255&d[15])<<20|(254&d[16])<<12|(255&d[17])<<5|(254&d[18])>>>3, c.dts*=4, c.dts+=(6&d[18])>>>1)), c.data=d.subarray(9+d[8])), r="video"===i||o.packetLength<=e.size, (n||r)&&(e.size=0, e.data.length=0), r&&t.trigger("data", o)
                                }
                            }

                            ; He.prototype.init.call(this), this.push=function(o) {
                                ( {
                                        pat:function() {}

                                        , pes:function() {
                                            var e, t; switch(o.streamType) {
                                                case Ae.H264_STREAM_TYPE:e=n, t="video"; break; case Ae.ADTS_STREAM_TYPE:e=r, t="audio"; break; case Ae.METADATA_STREAM_TYPE:e=a, t="timed-metadata"; break; default:return
                                            }

                                            o.payloadUnitStartIndicator&&s(e, t,  !0), e.data.push(o), e.size+=o.data.byteLength
                                        }

                                        , pmt:function() {
                                            var n= {
                                                type:"metadata", tracks:[]
                                            }

                                            ; null !==(e=o.programMapTable).video&&n.tracks.push( {
                                                    timelineStartInfo: {
                                                        baseMediaDecodeTime:0
                                                    }

                                                    , id:+e.video, codec:"avc", type:"video"
                                                }

                                            ), null !==e.audio&&n.tracks.push( {
                                                    timelineStartInfo: {
                                                        baseMediaDecodeTime:0
                                                    }

                                                    , id:+e.audio, codec:"adts", type:"audio"
                                                }

                                            ), i= !0, t.trigger("data", n)
                                        }
                                    }

                                )[o.type]()
                            }

                            , this.reset=function() {
                                n.size=0, n.data.length=0, r.size=0, r.data.length=0, this.trigger("reset")
                            }

                            , this.flushStreams_=function() {
                                s(n, "video"), s(r, "audio"), s(a, "timed-metadata")
                            }

                            , this.flush=function() {
                                if( !i&&e) {
                                    var n= {
                                        type:"metadata", tracks:[]
                                    }

                                    ; null !==e.video&&n.tracks.push( {
                                            timelineStartInfo: {
                                                baseMediaDecodeTime:0
                                            }

                                            , id:+e.video, codec:"avc", type:"video"
                                        }

                                    ), null !==e.audio&&n.tracks.push( {
                                            timelineStartInfo: {
                                                baseMediaDecodeTime:0
                                            }

                                            , id:+e.audio, codec:"adts", type:"audio"
                                        }

                                    ), t.trigger("data", n)
                                }

                                i= !1, this.flushStreams_(), this.trigger("done")
                            }
                        }

                    ).prototype=new H; var $e= {
                        PAT_PID:0, MP2T_PACKET_LENGTH:We, TransportPacketStream:Fe, TransportParseStream:je, ElementaryStream:He, TimestampRolloverStream:qe, CaptionStream:Ie.CaptionStream, Cea608Stream:Ie.Cea608Stream, Cea708Stream:Ie.Cea708Stream, MetadataStream:Ve
                    }

                    ; for(var Ge in Ae)Ae.hasOwnProperty(Ge)&&($e[Ge]=Ae[Ge]); var ze, Ke=$e, Qe=[96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]; (ze=function(e) {
                            var t, i=0; ze.prototype.init.call(this), this.skipWarn_=function(e, t) {
                                this.trigger("log", {
                                        level:"warn", message:"adts skiping bytes "+e+" to "+t+" in frame "+i+" outside syncword"
                                    }

                                )
                            }

                            , this.push=function(n) {
                                var r, a, s, o, l, u=0; if(e||(i=0), "audio"===n.type) {
                                    var d; for(t&&t.length?(s=t, (t=new Uint8Array(s.byteLength+n.data.byteLength)).set(s), t.set(n.data, s.byteLength)):t=n.data; u+7<t.length; )if(255===t[u]&&240==(246&t[u+1])) {
                                        if("number"==typeof d&&(this.skipWarn_(d, u), d=null), a=2*(1&~t[u+1]), r=(3&t[u+3])<<11|t[u+4]<<3|(224&t[u+5])>>5, l=9e4*(o=1024*(1+(3&t[u+6])))/Qe[(60&t[u+2])>>>2], t.byteLength-u<r)break; this.trigger("data", {
                                                pts:n.pts+i*l, dts:n.dts+i*l, sampleCount:o, audioobjecttype:1+(t[u+2]>>>6&3), channelcount:(1&t[u+2])<<2|(192&t[u+3])>>>6, samplerate:Qe[(60&t[u+2])>>>2], samplingfrequencyindex:(60&t[u+2])>>>2, samplesize:16, data:t.subarray(u+7+a, u+r)
                                            }

                                        ), i++, u+=r
                                    }

                                    else"number" !=typeof d&&(d=u), u++; "number"==typeof d&&(this.skipWarn_(d, u), d=null), t=t.subarray(u)
                                }
                            }

                            , this.flush=function() {
                                i=0, this.trigger("done")
                            }

                            , this.reset=function() {
                                t=void 0, this.trigger("reset")
                            }

                            , this.endTimeline=function() {
                                t=void 0, this.trigger("endedtimeline")
                            }
                        }

                    ).prototype=new H; var Ye, Xe, Je, Ze=ze, et=function(e) {
                        var t=e.byteLength, i=0, n=0; this.length=function() {
                            return 8*t
                        }

                        , this.bitsAvailable=function() {
                            return 8*t+n
                        }

                        , this.loadWord=function() {
                            var r=e.byteLength-t, a=new Uint8Array(4), s=Math.min(4, t); if(0===s)throw new Error("no bytes available"); a.set(e.subarray(r, r+s)), i=new DataView(a.buffer).getUint32(0), n=8*s, t-=s
                        }

                        , this.skipBits=function(e) {
                            var r; n>e?(i<<=e, n-=e):(e-=n, e-=8*(r=Math.floor(e/8)), t-=r, this.loadWord(), i<<=e, n-=e)
                        }

                        , this.readBits=function(e) {
                            var r=Math.min(n, e), a=i>>>32-r; return(n-=r)>0?i<<=r:t>0&&this.loadWord(), (r=e-r)>0?a<<r|this.readBits(r):a
                        }

                        , this.skipLeadingZeros=function() {
                            var e; for(e=0; e<n; ++e)if(0 !=(i&2147483648>>>e))return i<<=e, n-=e, e; return this.loadWord(), e+this.skipLeadingZeros()
                        }

                        , this.skipUnsignedExpGolomb=function() {
                            this.skipBits(1+this.skipLeadingZeros())
                        }

                        , this.skipExpGolomb=function() {
                            this.skipBits(1+this.skipLeadingZeros())
                        }

                        , this.readUnsignedExpGolomb=function() {
                            var e=this.skipLeadingZeros(); return this.readBits(e+1)-1
                        }

                        , this.readExpGolomb=function() {
                            var e=this.readUnsignedExpGolomb(); return 1&e?1+e>>>1:-1*(e>>>1)
                        }

                        , this.readBoolean=function() {
                            return 1===this.readBits(1)
                        }

                        , this.readUnsignedByte=function() {
                            return this.readBits(8)
                        }

                        , this.loadWord()
                    }

                    ; (Xe=function() {
                            var e, t, i=0; Xe.prototype.init.call(this), this.push=function(n) {
                                var r; t?((r=new Uint8Array(t.byteLength+n.data.byteLength)).set(t), r.set(n.data, t.byteLength), t=r):t=n.data; for(var a=t.byteLength; i<a-3; i++)if(1===t[i+2]) {
                                    e=i+5; break
                                }

                                for(; e<a; )switch(t[e]) {
                                    case 0:if(0 !==t[e-1]) {
                                        e+=2; break
                                    }

                                    if(0 !==t[e-2]) {
                                        e++; break
                                    }

                                    i+3 !==e-2&&this.trigger("data", t.subarray(i+3, e-2)); do {
                                        e++
                                    }

                                    while(1 !==t[e]&&e<a); i=e-2, e+=3; break; case 1:if(0 !==t[e-1]||0 !==t[e-2]) {
                                        e+=3; break
                                    }

                                    this.trigger("data", t.subarray(i+3, e-2)), i=e-2, e+=3; break; default:e+=3
                                }

                                t=t.subarray(i), e-=i, i=0
                            }

                            , this.reset=function() {
                                t=null, i=0, this.trigger("reset")
                            }

                            , this.flush=function() {
                                t&&t.byteLength>3&&this.trigger("data", t.subarray(i+3)), t=null, i=0, this.trigger("done")
                            }

                            , this.endTimeline=function() {
                                this.flush(), this.trigger("endedtimeline")
                            }
                        }

                    ).prototype=new H, Je= {
                        100: !0, 110: !0, 122: !0, 244: !0, 44: !0, 83: !0, 86: !0, 118: !0, 128: !0, 138: !0, 139: !0, 134: !0
                    }

                    , (Ye=function() {
                            var e, t, i, n, r, a, s, o=new Xe; Ye.prototype.init.call(this), e=this, this.push=function(e) {
                                "video"===e.type&&(t=e.trackId, i=e.pts, n=e.dts, o.push(e))
                            }

                            , o.on("data", (function(s) {
                                        var o= {
                                            trackId:t, pts:i, dts:n, data:s, nalUnitTypeCode:31&s[0]
                                        }

                                        ; switch(o.nalUnitTypeCode) {
                                            case 5:o.nalUnitType="slice_layer_without_partitioning_rbsp_idr"; break; case 6:o.nalUnitType="sei_rbsp", o.escapedRBSP=r(s.subarray(1)); break; case 7:o.nalUnitType="seq_parameter_set_rbsp", o.escapedRBSP=r(s.subarray(1)), o.config=a(o.escapedRBSP); break; case 8:o.nalUnitType="pic_parameter_set_rbsp"; break; case 9:o.nalUnitType="access_unit_delimiter_rbsp"
                                        }

                                        e.trigger("data", o)
                                    }

                                )), o.on("done", (function() {
                                        e.trigger("done")
                                    }

                                )), o.on("partialdone", (function() {
                                        e.trigger("partialdone")
                                    }

                                )), o.on("reset", (function() {
                                        e.trigger("reset")
                                    }

                                )), o.on("endedtimeline", (function() {
                                        e.trigger("endedtimeline")
                                    }

                                )), this.flush=function() {
                                o.flush()
                            }

                            , this.partialFlush=function() {
                                o.partialFlush()
                            }

                            , this.reset=function() {
                                o.reset()
                            }

                            , this.endTimeline=function() {
                                o.endTimeline()
                            }

                            , s=function(e, t) {
                                var i, n=8, r=8; for(i=0; i<e; i++)0 !==r&&(r=(n+t.readExpGolomb()+256)%256), n=0===r?n:r
                            }

                            , r=function(e) {
                                for(var t, i, n=e.byteLength, r=[], a=1; a<n-2; )0===e[a]&&0===e[a+1]&&3===e[a+2]?(r.push(a+2), a+=2):a++; if(0===r.length)return e; t=n-r.length, i=new Uint8Array(t); var s=0; for(a=0; a<t; s++, a++)s===r[0]&&(s++, r.shift()), i[a]=e[s]; return i
                            }

                            , a=function(e) {
                                var t, i, n, r, a, o, l, u, d, c, h, p, f=0, m=0, g=0, _=0, v=[1, 1]; if(i=(t=new et(e)).readUnsignedByte(), r=t.readUnsignedByte(), n=t.readUnsignedByte(), t.skipUnsignedExpGolomb(), Je[i]&&(3===(a=t.readUnsignedExpGolomb())&&t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))for(h=3 !==a?8:12, p=0; p<h; p++)t.readBoolean()&&s(p<6?16:64, t); if(t.skipUnsignedExpGolomb(), 0===(o=t.readUnsignedExpGolomb()))t.readUnsignedExpGolomb(); else if(1===o)for(t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), l=t.readUnsignedExpGolomb(), p=0; p<l; p++)t.skipExpGolomb(); if(t.skipUnsignedExpGolomb(), t.skipBits(1), u=t.readUnsignedExpGolomb(), d=t.readUnsignedExpGolomb(), 0===(c=t.readBits(1))&&t.skipBits(1), t.skipBits(1), t.readBoolean()&&(f=t.readUnsignedExpGolomb(), m=t.readUnsignedExpGolomb(), g=t.readUnsignedExpGolomb(), _=t.readUnsignedExpGolomb()), t.readBoolean()&&t.readBoolean()) {
                                    switch(t.readUnsignedByte()) {
                                        case 1:v=[1, 1]; break; case 2:v=[12, 11]; break; case 3:v=[10, 11]; break; case 4:v=[16, 11]; break; case 5:v=[40, 33]; break; case 6:v=[24, 11]; break; case 7:v=[20, 11]; break; case 8:v=[32, 11]; break; case 9:v=[80, 33]; break; case 10:v=[18, 11]; break; case 11:v=[15, 11]; break; case 12:v=[64, 33]; break; case 13:v=[160, 99]; break; case 14:v=[4, 3]; break; case 15:v=[3, 2]; break; case 16:v=[2, 1]; break; case 255:v=[t.readUnsignedByte()<<8|t.readUnsignedByte(), t.readUnsignedByte()<<8|t.readUnsignedByte()]
                                    }

                                    v&&(v[0], v[1])
                                }

                                return {
                                    profileIdc:i, levelIdc:n, profileCompatibility:r, width:16*(u+1)-2*f-2*m, height:(2-c)*(d+1)*16-2*g-2*_, sarRatio:v
                                }
                            }
                        }

                    ).prototype=new H; var tt, it= {
                        H264Stream:Ye, NalByteStream:Xe
                    }

                    , nt=[96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], rt=function(e, t) {
                        var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9]; return i=i>=0?i:0, (16&e[t+5])>>4?i+20:i+10
                    }

                    , at=function e(t, i) {
                        return t.length-i<10||t[i] !=="I".charCodeAt(0)||t[i+1] !=="D".charCodeAt(0)||t[i+2] !=="3".charCodeAt(0)?i:e(t, i+=rt(t, i))
                    }

                    , st=function(e) {
                        return e[0]<<21|e[1]<<14|e[2]<<7|e[3]
                    }

                    , ot= {
                        isLikelyAacData:function(e) {
                            var t=at(e, 0); return e.length>=t+2&&255==(255&e[t])&&240==(240&e[t+1])&&16==(22&e[t+1])
                        }

                        , parseId3TagSize:rt, parseAdtsSize:function(e, t) {
                            var i=(224&e[t+5])>>5, n=e[t+4]<<3; return 6144&e[t+3]|n|i
                        }

                        , parseType:function(e, t) {
                            return e[t]==="I".charCodeAt(0)&&e[t+1]==="D".charCodeAt(0)&&e[t+2]==="3".charCodeAt(0)?"timed-metadata": !0&e[t]&&240==(240&e[t+1])?"audio":null
                        }

                        , parseSampleRate:function(e) {
                            for(var t=0; t+5<e.length; ) {
                                if(255===e[t]&&240==(246&e[t+1]))return nt[(60&e[t+2])>>>2]; t++
                            }

                            return null
                        }

                        , parseAacTimestamp:function(e) {
                            var t, i, n; t=10, 64&e[5]&&(t+=4, t+=st(e.subarray(10, 14))); do {
                                if((i=st(e.subarray(t+4, t+8)))<1)return null; if("PRIV"===String.fromCharCode(e[t], e[t+1], e[t+2], e[t+3])) {
                                    n=e.subarray(t+10, t+i+10); for(var r=0; r<n.byteLength; r++)if(0===n[r]) {
                                        if("com.apple.streaming.transportStreamTimestamp"===unescape(function(e, t, i) {
                                                    var n, r=""; for(n=0; n<i; n++)r+="%"+("00"+e[n].toString(16)).slice(-2); return r
                                                }

                                                (n, 0, r))) {
                                            var a=n.subarray(r+1), s=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2; return(s*=4)+(3&a[7])
                                        }

                                        break
                                    }
                                }

                                t+=10, t+=i
                            }

                            while(t<e.byteLength); return null
                        }
                    }

                    ; (tt=function() {
                            var e=new Uint8Array, t=0; tt.prototype.init.call(this), this.setTimestamp=function(e) {
                                t=e
                            }

                            , this.push=function(i) {
                                var n, r, a, s, o=0, l=0; for(e.length?(s=e.length, (e=new Uint8Array(i.byteLength+s)).set(e.subarray(0, s)), e.set(i, s)):e=i; e.length-l>=3; )if(e[l] !=="I".charCodeAt(0)||e[l+1] !=="D".charCodeAt(0)||e[l+2] !=="3".charCodeAt(0))if(255 !=(255&e[l])||240 !=(240&e[l+1]))l++; else {
                                    if(e.length-l<7)break; if(l+(o=ot.parseAdtsSize(e, l))>e.length)break; a= {
                                        type:"audio", data:e.subarray(l, l+o), pts:t, dts:t
                                    }

                                    , this.trigger("data", a), l+=o
                                }

                                else {
                                    if(e.length-l<10)break; if(l+(o=ot.parseId3TagSize(e, l))>e.length)break; r= {
                                        type:"timed-metadata", data:e.subarray(l, l+o)
                                    }

                                    , this.trigger("data", r), l+=o
                                }

                                n=e.length-l, e=n>0?e.subarray(l):new Uint8Array
                            }

                            , this.reset=function() {
                                e=new Uint8Array, this.trigger("reset")
                            }

                            , this.endTimeline=function() {
                                e=new Uint8Array, this.trigger("endedtimeline")
                            }
                        }

                    ).prototype=new H; var lt, ut, dt, ct, ht=tt, pt=["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], ft=["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], mt=it.H264Stream, gt=ot.isLikelyAacData, _t=function(e, t) {
                        t.stream=e, this.trigger("log", t)
                    }

                    , vt=function(e, t) {
                        for(var i=Object.keys(t), n=0; n<i.length; n++) {
                            var r=i[n]; "headOfPipeline" !==r&&t[r].on&&t[r].on("log", _t.bind(e, r))
                        }
                    }

                    , yt=function(e, t) {
                        var i; if(e.length !==t.length)return !1; for(i=0; i<e.length; i++)if(e[i] !==t[i])return !1; return !0
                    }

                    , Tt=function(e, t, i, n, r, a) {
                        return {
                            start: {
                                dts:e, pts:e+(i-t)
                            }

                            , end: {
                                dts:e+(n-t), pts:e+(r-i)
                            }

                            , prependedContentDuration:a, baseMediaDecodeTime:e
                        }
                    }

                    ; (ut=function(e, t) {
                            var i, n=[], r=0, a=0, s=1/0; i=(t=t|| {}

                            ).firstSequenceNumber||0, ut.prototype.init.call(this), this.push=function(t) {
                                me(e, t), e&&pt.forEach((function(i) {
                                            e[i]=t[i]
                                        }

                                    )), n.push(t)
                            }

                            , this.setEarliestDts=function(e) {
                                r=e
                            }

                            , this.setVideoBaseMediaDecodeTime=function(e) {
                                s=e
                            }

                            , this.setAudioAppendStart=function(e) {
                                a=e
                            }

                            , this.flush=function() {
                                var o, l, u, d, c, h, p; 0 !==n.length?(o=function(e, t, i) {
                                        return t.minSegmentDts>=i?e:(t.minSegmentDts=1/0, e.filter((function(e) {
                                                        return e.dts>=i&&(t.minSegmentDts=Math.min(t.minSegmentDts, e.dts), t.minSegmentPts=t.minSegmentDts,  !0)
                                                    }

                                                )))
                                    }

                                    (n, e, r), e.baseMediaDecodeTime=fe(e, t.keepOriginalTimestamps), p=he(e, o, a, s), e.samples=function(e) {
                                        var t, i, n=[]; for(t=0; t<e.length; t++)i=e[t], n.push( {
                                                size:i.data.byteLength, duration:1024
                                            }

                                        ); return n
                                    }

                                    (o), u=Z(function(e) {
                                            var t, i, n=0, r=new Uint8Array(function(e) {
                                                    var t, i=0; for(t=0; t<e.length; t++)i+=e[t].data.byteLength; return i
                                                }

                                                (e)); for(t=0; t<e.length; t++)i=e[t], r.set(i.data, n), n+=i.data.byteLength; return r
                                        }

                                        (o)), n=[], l=ee(i, [e]), d=new Uint8Array(l.byteLength+u.byteLength), i++, d.set(l), d.set(u, l.byteLength), pe(e), c=Math.ceil(9216e4/e.samplerate), o.length&&(h=o.length*c, this.trigger("segmentTimingInfo", Tt(ue(e.baseMediaDecodeTime, e.samplerate), o[0].dts, o[0].pts, o[0].dts+h, o[0].pts+h, p||0)), this.trigger("timingInfo", {
                                                start:o[0].pts, end:o[0].pts+h
                                            }

                                        )), this.trigger("data", {
                                            track:e, boxes:d
                                        }

                                    ), this.trigger("done", "AudioSegmentStream")):this.trigger("done", "AudioSegmentStream")
                            }

                            , this.reset=function() {
                                pe(e), n=[], this.trigger("reset")
                            }
                        }

                    ).prototype=new H, (lt=function(e, t) {
                            var i, n, r, a=[], s=[]; i=(t=t|| {}

                            ).firstSequenceNumber||0, lt.prototype.init.call(this), delete e.minPTS, this.gopCache_=[], this.push=function(t) {
                                me(e, t), "seq_parameter_set_rbsp" !==t.nalUnitType||n||(n=t.config, e.sps=[t.data], ft.forEach((function(t) {
                                                e[t]=n[t]
                                            }

                                        ), this)), "pic_parameter_set_rbsp" !==t.nalUnitType||r||(r=t.data, e.pps=[t.data]), a.push(t)
                            }

                            , this.flush=function() {
                                for(var n, r, o, l, u, d, c, h=0; a.length&&"access_unit_delimiter_rbsp" !==a[0].nalUnitType; )a.shift(); if(0===a.length)return this.resetStream_(), void this.trigger("done", "VideoSegmentStream"); if((r=function(e) {
                                            var t, i, n=[], r=[]; for(n.byteLength=0, n.nalCount=0, n.duration=0, n.pts=e[0].pts, n.dts=e[0].dts, r.byteLength=0, r.nalCount=0, r.duration=0, r.pts=e[0].pts, r.dts=e[0].dts, t=0; t<e.length; t++)(i=e[t]).keyFrame?(n.length&&(r.push(n), r.byteLength+=n.byteLength, r.nalCount+=n.nalCount, r.duration+=n.duration), (n=[i]).nalCount=i.length, n.byteLength=i.byteLength, n.pts=i.pts, n.dts=i.dts, n.duration=i.duration):(n.duration+=i.duration, n.nalCount+=i.length, n.byteLength+=i.byteLength, n.push(i)); return r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration), r.byteLength+=n.byteLength, r.nalCount+=n.nalCount, r.duration+=n.duration, r.push(n), r
                                        }

                                        (function(e) {
                                                var t, i, n=[], r=[]; for(r.byteLength=0, r.nalCount=0, r.duration=0, n.byteLength=0, t=0; t<e.length; t++)"access_unit_delimiter_rbsp"===(i=e[t]).nalUnitType?(n.length&&(n.duration=i.dts-n.dts, r.byteLength+=n.byteLength, r.nalCount+=n.length, r.duration+=n.duration, r.push(n)), (n=[i]).byteLength=i.data.byteLength, n.pts=i.pts, n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame= !0), n.duration=i.dts-n.dts, n.byteLength+=i.data.byteLength, n.push(i)); return r.length&&( !n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration), r.byteLength+=n.byteLength, r.nalCount+=n.length, r.duration+=n.duration, r.push(n), r
                                            }

                                            (a)))[0][0].keyFrame||((n=this.getGopForFusion_(a[0], e))?(h=n.duration, r.unshift(n), r.byteLength+=n.byteLength, r.nalCount+=n.nalCount, r.pts=n.pts, r.dts=n.dts, r.duration+=n.duration):r=function(e) {
                                            var t; return !e[0][0].keyFrame&&e.length>1&&(t=e.shift(), e.byteLength-=t.byteLength, e.nalCount-=t.nalCount, e[0][0].dts=t.dts, e[0][0].pts=t.pts, e[0][0].duration+=t.duration), e
                                        }

                                        (r)), s.length) {
                                    var p; if( !(p=t.alignGopsAtEnd?this.alignGopsAtEnd_(r):this.alignGopsAtStart_(r)))return this.gopCache_.unshift( {
                                            gop:r.pop(), pps:e.pps, sps:e.sps
                                        }

                                    ), this.gopCache_.length=Math.min(6, this.gopCache_.length), a=[], this.resetStream_(), void this.trigger("done", "VideoSegmentStream"); pe(e), r=p
                                }

                                me(e, r), e.samples=function(e, t) {
                                    var i, n, r, a, s, o=t||0, l=[]; for(i=0; i<e.length; i++)for(a=e[i], n=0; n<a.length; n++)s=a[n], o+=(r=te(s, o)).size, l.push(r); return l
                                }

                                (r), l=Z(function(e) {
                                        var t, i, n, r, a, s, o=0, l=e.byteLength, u=e.nalCount, d=new Uint8Array(l+4*u), c=new DataView(d.buffer); for(t=0; t<e.length; t++)for(r=e[t], i=0; i<r.length; i++)for(a=r[i], n=0; n<a.length; n++)s=a[n], c.setUint32(o, s.data.byteLength), o+=4, d.set(s.data, o), o+=s.data.byteLength; return d
                                    }

                                    (r)), e.baseMediaDecodeTime=fe(e, t.keepOriginalTimestamps), this.trigger("processedGopsInfo", r.map((function(e) {
                                                return {
                                                    pts:e.pts, dts:e.dts, byteLength:e.byteLength
                                                }
                                            }

                                        ))), d=r[0], c=r[r.length-1], this.trigger("segmentTimingInfo", Tt(e.baseMediaDecodeTime, d.dts, d.pts, c.dts+c.duration, c.pts+c.duration, h)), this.trigger("timingInfo", {
                                        start:r[0].pts, end:r[r.length-1].pts+r[r.length-1].duration
                                    }

                                ), this.gopCache_.unshift( {
                                        gop:r.pop(), pps:e.pps, sps:e.sps
                                    }

                                ), this.gopCache_.length=Math.min(6, this.gopCache_.length), a=[], this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), this.trigger("timelineStartInfo", e.timelineStartInfo), o=ee(i, [e]), u=new Uint8Array(o.byteLength+l.byteLength), i++, u.set(o), u.set(l, o.byteLength), this.trigger("data", {
                                        track:e, boxes:u
                                    }

                                ), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                            }

                            , this.reset=function() {
                                this.resetStream_(), a=[], this.gopCache_.length=0, s.length=0, this.trigger("reset")
                            }

                            , this.resetStream_=function() {
                                pe(e), n=void 0, r=void 0
                            }

                            , this.getGopForFusion_=function(t) {
                                var i, n, r, a, s, o=1/0; for(s=0; s<this.gopCache_.length; s++)r=(a=this.gopCache_[s]).gop, e.pps&&yt(e.pps[0], a.pps[0])&&e.sps&&yt(e.sps[0], a.sps[0])&&(r.dts<e.timelineStartInfo.dts||(i=t.dts-r.dts-r.duration)>=-1e4&&i<=45e3&&( !n||o>i)&&(n=a, o=i)); return n?n.gop:null
                            }

                            , this.alignGopsAtStart_=function(e) {
                                var t, i, n, r, a, o, l, u; for(a=e.byteLength, o=e.nalCount, l=e.duration, t=i=0; t<s.length&&i<e.length&&(n=s[t], r=e[i], n.pts !==r.pts); )r.pts>n.pts?t++:(i++, a-=r.byteLength, o-=r.nalCount, l-=r.duration); return 0===i?e:i===e.length?null:((u=e.slice(i)).byteLength=a, u.duration=l, u.nalCount=o, u.pts=u[0].pts, u.dts=u[0].dts, u)
                            }

                            , this.alignGopsAtEnd_=function(e) {
                                var t, i, n, r, a, o, l; for(t=s.length-1, i=e.length-1, a=null, o= !1; t>=0&&i>=0; ) {
                                    if(n=s[t], r=e[i], n.pts===r.pts) {
                                        o= !0; break
                                    }

                                    n.pts>r.pts?t--:(t===s.length-1&&(a=i), i--)
                                }

                                if( !o&&null===a)return null; if(0===(l=o?i:a))return e; var u=e.slice(l), d=u.reduce((function(e, t) {
                                            return e.byteLength+=t.byteLength, e.duration+=t.duration, e.nalCount+=t.nalCount, e
                                        }

                                    ), {
                                        byteLength:0, duration:0, nalCount:0
                                    }

                                ); return u.byteLength=d.byteLength, u.duration=d.duration, u.nalCount=d.nalCount, u.pts=u[0].pts, u.dts=u[0].dts, u
                            }

                            , this.alignGopsWith=function(e) {
                                s=e
                            }
                        }

                    ).prototype=new H, (ct=function(e, t) {
                            this.numberOfTracks=0, this.metadataStream=t, void 0 !==(e=e|| {}

                            ).remux?this.remuxTracks= ! !e.remux:this.remuxTracks= !0, "boolean"==typeof e.keepOriginalTimestamps?this.keepOriginalTimestamps=e.keepOriginalTimestamps:this.keepOriginalTimestamps= !1, this.pendingTracks=[], this.videoTrack=null, this.pendingBoxes=[], this.pendingCaptions=[], this.pendingMetadata=[], this.pendingBytes=0, this.emittedTracks=0, ct.prototype.init.call(this), this.push=function(e) {
                                return e.text?this.pendingCaptions.push(e):e.frames?this.pendingMetadata.push(e):(this.pendingTracks.push(e.track), this.pendingBytes+=e.boxes.byteLength, "video"===e.track.type&&(this.videoTrack=e.track, this.pendingBoxes.push(e.boxes)), void("audio"===e.track.type&&(this.audioTrack=e.track, this.pendingBoxes.unshift(e.boxes))))
                            }
                        }

                    ).prototype=new H, ct.prototype.flush=function(e) {
                        var t, i, n, a, s, o, u, d, c=0, h= {
                            captions:[], captionStreams: {}

                            , metadata:[], info: {}
                        }

                        , p=0; if(this.pendingTracks.length<this.numberOfTracks) {
                            if("VideoSegmentStream" !==e&&"AudioSegmentStream" !==e)return; if(this.remuxTracks)return; if(0===this.pendingTracks.length)return this.emittedTracks++, void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"), this.emittedTracks=0))
                        }

                        if(this.videoTrack?(p=this.videoTrack.timelineStartInfo.pts, ft.forEach((function(e) {
                                            h.info[e]=this.videoTrack[e]
                                        }

                                    ), this)):this.audioTrack&&(p=this.audioTrack.timelineStartInfo.pts, pt.forEach((function(e) {
                                            h.info[e]=this.audioTrack[e]
                                        }

                                    ), this)), this.videoTrack||this.audioTrack) {
                            for(1===this.pendingTracks.length?h.type=this.pendingTracks[0].type:h.type="combined", this.emittedTracks+=this.pendingTracks.length, s=this.pendingTracks, o=void 0, u=void 0, d=void 0, u=r(), d=l(s), (o=new Uint8Array(u.byteLength+d.byteLength)).set(u), o.set(d, u.byteLength), n=o, h.initSegment=new Uint8Array(n.byteLength), h.initSegment.set(n), h.data=new Uint8Array(this.pendingBytes), a=0; a<this.pendingBoxes.length; a++)h.data.set(this.pendingBoxes[a], c), c+=this.pendingBoxes[a].byteLength; for(a=0; a<this.pendingCaptions.length; a++)(t=this.pendingCaptions[a]).startTime=ce(t.startPts, p, this.keepOriginalTimestamps), t.endTime=ce(t.endPts, p, this.keepOriginalTimestamps), h.captionStreams[t.stream]= !0, h.captions.push(t); for(a=0; a<this.pendingMetadata.length; a++)(i=this.pendingMetadata[a]).cueTime=ce(i.pts, p, this.keepOriginalTimestamps), h.metadata.push(i); for(h.metadata.dispatchType=this.metadataStream.dispatchType, this.pendingTracks.length=0, this.videoTrack=null, this.pendingBoxes.length=0, this.pendingCaptions.length=0, this.pendingBytes=0, this.pendingMetadata.length=0, this.trigger("data", h), a=0; a<h.captions.length; a++)t=h.captions[a], this.trigger("caption", t); for(a=0; a<h.metadata.length; a++)i=h.metadata[a], this.trigger("id3Frame", i)
                        }

                        this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"), this.emittedTracks=0)
                    }

                    , ct.prototype.setRemux=function(e) {
                        this.remuxTracks=e
                    }

                    , (dt=function(e) {
                            var t, i, n=this, r= !0; dt.prototype.init.call(this), e=e|| {}

                            , this.baseMediaDecodeTime=e.baseMediaDecodeTime||0, this.transmuxPipeline_= {}

                            , this.setupAacPipeline=function() {
                                var r= {}

                                ; this.transmuxPipeline_=r, r.type="aac", r.metadataStream=new Ke.MetadataStream, r.aacStream=new ht, r.audioTimestampRolloverStream=new Ke.TimestampRolloverStream("audio"), r.timedMetadataTimestampRolloverStream=new Ke.TimestampRolloverStream("timed-metadata"), r.adtsStream=new Ze, r.coalesceStream=new ct(e, r.metadataStream), r.headOfPipeline=r.aacStream, r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream), r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream), r.metadataStream.on("timestamp", (function(e) {
                                            r.aacStream.setTimestamp(e.timeStamp)
                                        }

                                    )), r.aacStream.on("data", (function(a) {
                                            "timed-metadata" !==a.type&&"audio" !==a.type||r.audioSegmentStream||(i=i|| {
                                                    timelineStartInfo: {
                                                        baseMediaDecodeTime:n.baseMediaDecodeTime
                                                    }

                                                    , codec:"adts", type:"audio"
                                                }

                                                , r.coalesceStream.numberOfTracks++, r.audioSegmentStream=new ut(i, e), r.audioSegmentStream.on("log", n.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream), n.trigger("trackinfo", {
                                                        hasAudio: ! !i, hasVideo: ! !t
                                                    }

                                                ))
                                        }

                                    )), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("done", this.trigger.bind(this, "done")), vt(this, r)
                            }

                            , this.setupTsPipeline=function() {
                                var r= {}

                                ; this.transmuxPipeline_=r, r.type="ts", r.metadataStream=new Ke.MetadataStream, r.packetStream=new Ke.TransportPacketStream, r.parseStream=new Ke.TransportParseStream, r.elementaryStream=new Ke.ElementaryStream, r.timestampRolloverStream=new Ke.TimestampRolloverStream, r.adtsStream=new Ze, r.h264Stream=new mt, r.captionStream=new Ke.CaptionStream(e), r.coalesceStream=new ct(e, r.metadataStream), r.headOfPipeline=r.packetStream, r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream), r.timestampRolloverStream.pipe(r.h264Stream), r.timestampRolloverStream.pipe(r.adtsStream), r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream), r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream), r.elementaryStream.on("data", (function(a) {
                                            var s; if("metadata"===a.type) {
                                                for(s=a.tracks.length; s--; )t||"video" !==a.tracks[s].type?i||"audio" !==a.tracks[s].type||((i=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime):(t=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime; t&& !r.videoSegmentStream&&(r.coalesceStream.numberOfTracks++, r.videoSegmentStream=new lt(t, e), r.videoSegmentStream.on("log", n.getLogTrigger_("videoSegmentStream")), r.videoSegmentStream.on("timelineStartInfo", (function(t) {
                                                                i&& !e.keepOriginalTimestamps&&(i.timelineStartInfo=t, r.audioSegmentStream.setEarliestDts(t.dts-n.baseMediaDecodeTime))
                                                            }

                                                        )), r.videoSegmentStream.on("processedGopsInfo", n.trigger.bind(n, "gopInfo")), r.videoSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "videoSegmentTimingInfo")), r.videoSegmentStream.on("baseMediaDecodeTime", (function(e) {
                                                                i&&r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                                                            }

                                                        )), r.videoSegmentStream.on("timingInfo", n.trigger.bind(n, "videoTimingInfo")), r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)), i&& !r.audioSegmentStream&&(r.coalesceStream.numberOfTracks++, r.audioSegmentStream=new ut(i, e), r.audioSegmentStream.on("log", n.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), r.audioSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "audioSegmentTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)), n.trigger("trackinfo", {
                                                        hasAudio: ! !i, hasVideo: ! !t
                                                    }

                                                )
                                            }
                                        }

                                    )), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("id3Frame", (function(e) {
                                            e.dispatchType=r.metadataStream.dispatchType, n.trigger("id3Frame", e)
                                        }

                                    )), r.coalesceStream.on("caption", this.trigger.bind(this, "caption")), r.coalesceStream.on("done", this.trigger.bind(this, "done")), vt(this, r)
                            }

                            , this.setBaseMediaDecodeTime=function(n) {
                                var r=this.transmuxPipeline_; e.keepOriginalTimestamps||(this.baseMediaDecodeTime=n), i&&(i.timelineStartInfo.dts=void 0, i.timelineStartInfo.pts=void 0, pe(i), r.audioTimestampRolloverStream&&r.audioTimestampRolloverStream.discontinuity()), t&&(r.videoSegmentStream&&(r.videoSegmentStream.gopCache_=[]), t.timelineStartInfo.dts=void 0, t.timelineStartInfo.pts=void 0, pe(t), r.captionStream.reset()), r.timestampRolloverStream&&r.timestampRolloverStream.discontinuity()
                            }

                            , this.setAudioAppendStart=function(e) {
                                i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                            }

                            , this.setRemux=function(t) {
                                var i=this.transmuxPipeline_; e.remux=t, i&&i.coalesceStream&&i.coalesceStream.setRemux(t)
                            }

                            , this.alignGopsWith=function(e) {
                                t&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                            }

                            , this.getLogTrigger_=function(e) {
                                var t=this; return function(i) {
                                    i.stream=e, t.trigger("log", i)
                                }
                            }

                            , this.push=function(e) {
                                if(r) {
                                    var t=gt(e); t&&"aac" !==this.transmuxPipeline_.type?this.setupAacPipeline():t||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(), r= !1
                                }

                                this.transmuxPipeline_.headOfPipeline.push(e)
                            }

                            , this.flush=function() {
                                r= !0, this.transmuxPipeline_.headOfPipeline.flush()
                            }

                            , this.endTimeline=function() {
                                this.transmuxPipeline_.headOfPipeline.endTimeline()
                            }

                            , this.reset=function() {
                                this.transmuxPipeline_.headOfPipeline&&this.transmuxPipeline_.headOfPipeline.reset()
                            }

                            , this.resetCaptions=function() {
                                this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()
                            }
                        }

                    ).prototype=new H; var bt, St= {
                        Transmuxer:dt, VideoSegmentStream:lt, AudioSegmentStream:ut, AUDIO_PROPERTIES:pt, VIDEO_PROPERTIES:ft, generateSegmentTimingInfo:Tt
                    }

                    , Et=function(e) {
                        return e>>>0
                    }

                    , Ct=function(e) {
                        var t=""; return t+=String.fromCharCode(e[0]), t+=String.fromCharCode(e[1]), (t+=String.fromCharCode(e[2]))+String.fromCharCode(e[3])
                    }

                    , kt=Et, wt=function e(t, i) {
                        var n, r, a, s, o, l=[]; if( !i.length)return null; for(n=0; n<t.byteLength; )r=kt(t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3]), a=Ct(t.subarray(n+4, n+8)), s=r>1?n+r:t.byteLength, a===i[0]&&(1===i.length?l.push(t.subarray(n+8, s)):(o=e(t.subarray(n+8, s), i.slice(1))).length&&(l=l.concat(o))), n=s; return l
                    }

                    , It=Et, At=q.getUint64, Pt=function(e) {
                        return {
                            isLeading:(12&e[0])>>>2, dependsOn:3&e[0], isDependedOn:(192&e[1])>>>6, hasRedundancy:(48&e[1])>>>4, paddingValue:(14&e[1])>>>1, isNonSyncSample:1&e[1], degradationPriority:e[2]<<8|e[3]
                        }
                    }

                    , Lt="undefined" !=typeof globalThis?globalThis:"undefined" !=typeof window?window:"undefined" !=typeof global?global:"undefined" !=typeof self?self: {}

                    , xt="undefined" !=typeof window?window:void 0 !==Lt?Lt:"undefined" !=typeof self?self: {}

                    , Ot=function(e) {
                        for(var t, i, n=e.byteLength, r=[], a=1; a<n-2; )0===e[a]&&0===e[a+1]&&3===e[a+2]?(r.push(a+2), a+=2):a++; if(0===r.length)return e; t=n-r.length, i=new Uint8Array(t); var s=0; for(a=0; a<t; s++, a++)s===r[0]&&(s++, r.shift()), i[a]=e[s]; return i
                    }

                    , Dt=Ie.CaptionStream, Rt=function(e, t) {
                        for(var i=e, n=0; n<t.length; n++) {
                            var r=t[n]; if(i<r.size)return r; i-=r.size
                        }

                        return null
                    }

                    , Mt=function(e, t) {
                        var i=wt(e, ["moof", "traf"]), n=wt(e, ["mdat"]), r= {}

                        , a=[]; return n.forEach((function(e, t) {
                                    var n=i[t]; a.push( {
                                            mdat:e, traf:n
                                        }

                                    )
                                }

                            )), a.forEach((function(e) {
                                    var i, n=e.mdat, a=e.traf, s=function(e) {
                                        var t, i=new DataView(e.buffer, e.byteOffset, e.byteLength), n= {
                                            version:e[0], flags:new Uint8Array(e.subarray(1, 4)), trackId:i.getUint32(4)
                                        }

                                        , r=1&n.flags[2], a=2&n.flags[2], s=8&n.flags[2], o=16&n.flags[2], l=32&n.flags[2], u=65536&n.flags[0], d=131072&n.flags[0]; return t=8, r&&(t+=4, n.baseDataOffset=i.getUint32(12), t+=4), a&&(n.sampleDescriptionIndex=i.getUint32(t), t+=4), s&&(n.defaultSampleDuration=i.getUint32(t), t+=4), o&&(n.defaultSampleSize=i.getUint32(t), t+=4), l&&(n.defaultSampleFlags=i.getUint32(t)), u&&(n.durationIsEmpty= !0),  !r&&d&&(n.baseDataOffsetIsMoof= !0), n
                                    }

                                    (wt(a, ["tfhd"])[0]), o=s.trackId, l=wt(a, ["tfdt"]), u=l.length>0?function(e) {
                                        var t= {
                                            version:e[0], flags:new Uint8Array(e.subarray(1, 4))
                                        }

                                        ; return 1===t.version?t.baseMediaDecodeTime=At(e.subarray(4)):t.baseMediaDecodeTime=It(e[4]<<24|e[5]<<16|e[6]<<8|e[7]), t
                                    }

                                    (l[0]).baseMediaDecodeTime:0, d=wt(a, ["trun"]); t===o&&d.length>0&&(i=function(e, t, i) {
                                            var n, r, a, s, o=new DataView(e.buffer, e.byteOffset, e.byteLength), l= {
                                                logs:[], seiNals:[]
                                            }

                                            ; for(r=0; r+4<e.length; r+=a)if(a=o.getUint32(r), r+=4,  !(a<=0))switch(31&e[r]) {
                                                case 6:var u=e.subarray(r+1, r+1+a), d=Rt(r, t); if(n= {
                                                        nalUnitType:"sei_rbsp", size:a, data:u, escapedRBSP:Ot(u), trackId:i
                                                    }

                                                    , d)n.pts=d.pts, n.dts=d.dts, s=d; else {
                                                    if( !s) {
                                                        l.logs.push( {
                                                                level:"warn", message:"We've encountered a nal unit without data at "+r+" for trackId "+i+". See mux.js#223."
                                                            }

                                                        ); break
                                                    }

                                                    n.pts=s.pts, n.dts=s.dts
                                                }

                                                l.seiNals.push(n)
                                            }

                                            return l
                                        }

                                        (n, function(e, t, i) {
                                                var n=t, r=i.defaultSampleDuration||0, a=i.defaultSampleSize||0, s=i.trackId, o=[]; return e.forEach((function(e) {
                                                            var t=function(e) {
                                                                var t, i= {
                                                                    version:e[0], flags:new Uint8Array(e.subarray(1, 4)), samples:[]
                                                                }

                                                                , n=new DataView(e.buffer, e.byteOffset, e.byteLength), r=1&i.flags[2], a=4&i.flags[2], s=1&i.flags[1], o=2&i.flags[1], l=4&i.flags[1], u=8&i.flags[1], d=n.getUint32(4), c=8; for(r&&(i.dataOffset=n.getInt32(c), c+=4), a&&d&&(t= {
                                                                            flags:Pt(e.subarray(c, c+4))
                                                                        }

                                                                        , c+=4, s&&(t.duration=n.getUint32(c), c+=4), o&&(t.size=n.getUint32(c), c+=4), u&&(1===i.version?t.compositionTimeOffset=n.getInt32(c):t.compositionTimeOffset=n.getUint32(c), c+=4), i.samples.push(t), d--); d--; )t= {}

                                                                , s&&(t.duration=n.getUint32(c), c+=4), o&&(t.size=n.getUint32(c), c+=4), l&&(t.flags=Pt(e.subarray(c, c+4)), c+=4), u&&(1===i.version?t.compositionTimeOffset=n.getInt32(c):t.compositionTimeOffset=n.getUint32(c), c+=4), i.samples.push(t); return i
                                                            }

                                                            (e).samples; t.forEach((function(e) {
                                                                        void 0===e.duration&&(e.duration=r), void 0===e.size&&(e.size=a), e.trackId=s, e.dts=n, void 0===e.compositionTimeOffset&&(e.compositionTimeOffset=0), "bigint"==typeof n?(e.pts=n+xt.BigInt(e.compositionTimeOffset), n+=xt.BigInt(e.duration)):(e.pts=n+e.compositionTimeOffset, n+=e.duration)
                                                                    }

                                                                )), o=o.concat(t)
                                                        }

                                                    )), o
                                            }

                                            (d, u, s), o), r[o]||(r[o]= {
                                                seiNals:[], logs:[]
                                            }

                                        ), r[o].seiNals=r[o].seiNals.concat(i.seiNals), r[o].logs=r[o].logs.concat(i.logs))
                                }

                            )), r
                    }

                    , Ut=function() {
                        var e, t, i, n, r, a, s= !1; this.isInitialized=function() {
                            return s
                        }

                        , this.init=function(t) {
                            e=new Dt, s= !0, a= ! !t&&t.isPartial, e.on("data", (function(e) {
                                        e.startTime=e.startPts/n, e.endTime=e.endPts/n, r.captions.push(e), r.captionStreams[e.stream]= !0
                                    }

                                )), e.on("log", (function(e) {
                                        r.logs.push(e)
                                    }

                                ))
                        }

                        , this.isNewInit=function(e, t) {
                            return !(e&&0===e.length||t&&"object"==typeof t&&0===Object.keys(t).length||i===e[0]&&n===t[i])
                        }

                        , this.parse=function(e, a, s) {
                            var o; if( !this.isInitialized())return null; if( !a|| !s)return null; if(this.isNewInit(a, s))i=a[0], n=s[i]; else if(null===i|| !n)return t.push(e), null; for(; t.length>0; ) {
                                var l=t.shift(); this.parse(l, a, s)
                            }

                            return(o=function(e, t, i) {
                                    if(null===t)return null; var n=Mt(e, t)[t]|| {}

                                    ; return {
                                        seiNals:n.seiNals, logs:n.logs, timescale:i
                                    }
                                }

                                (e, i, n))&&o.logs&&(r.logs=r.logs.concat(o.logs)), null !==o&&o.seiNals?(this.pushNals(o.seiNals), this.flushStream(), r):r.logs.length? {
                                logs:r.logs, captions:[], captionStreams:[]
                            }

                            :null
                        }

                        , this.pushNals=function(t) {
                            if( !this.isInitialized()|| !t||0===t.length)return null; t.forEach((function(t) {
                                        e.push(t)
                                    }

                                ))
                        }

                        , this.flushStream=function() {
                            if( !this.isInitialized())return null; a?e.partialFlush():e.flush()
                        }

                        , this.clearParsedCaptions=function() {
                            r.captions=[], r.captionStreams= {}

                            , r.logs=[]
                        }

                        , this.resetCaptionStream=function() {
                            if( !this.isInitialized())return null; e.reset()
                        }

                        , this.clearAllCaptions=function() {
                            this.clearParsedCaptions(), this.resetCaptionStream()
                        }

                        , this.reset=function() {
                            t=[], i=null, n=null, r?this.clearParsedCaptions():r= {
                                captions:[], captionStreams: {}

                                , logs:[]
                            }

                            , this.resetCaptionStream()
                        }

                        , this.reset()
                    }

                    , Nt=Et, Bt=function(e) {
                        return("00"+e.toString(16)).slice(-2)
                    }

                    , Ft=q.getUint64, jt=function(e, t) {
                        var i=wt(t, ["moof", "traf"]).reduce((function(t, i) {
                                    var n, r, a=wt(i, ["tfhd"])[0], s=Nt(a[4]<<24|a[5]<<16|a[6]<<8|a[7]), o=e[s]||9e4, l=wt(i, ["tfdt"])[0], u=new DataView(l.buffer, l.byteOffset, l.byteLength); return"bigint"==typeof(n=1===l[0]?Ft(l.subarray(4, 12)):u.getUint32(4))?r=n/xt.BigInt(o):"number" !=typeof n||isNaN(n)||(r=n/o), r<Number.MAX_SAFE_INTEGER&&(r=Number(r)), r<t&&(t=r), t
                                }

                            ), 1/0); return"bigint"==typeof i||isFinite(i)?i:0
                    }

                    , Ht=function(e) {
                        var t=wt(e, ["moov", "trak"]), i=[]; return t.forEach((function(e) {
                                    var t, n, r= {}

                                    , a=wt(e, ["tkhd"])[0]; a&&(n=(t=new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0), r.id=0===n?t.getUint32(12):t.getUint32(20)); var s=wt(e, ["mdia", "hdlr"])[0]; if(s) {
                                        var o=Ct(s.subarray(8, 12)); r.type="vide"===o?"video":"soun"===o?"audio":o
                                    }

                                    var l=wt(e, ["mdia", "minf", "stbl", "stsd"])[0]; if(l) {
                                        var u=l.subarray(8); r.codec=Ct(u.subarray(4, 8)); var d, c=wt(u, [r.codec])[0]; c&&(/^[asm]vc[1-9]$/i.test(r.codec)?(d=c.subarray(78), "avcC"===Ct(d.subarray(4, 8))&&d.length>11?(r.codec+=".", r.codec+=Bt(d[9]), r.codec+=Bt(d[10]), r.codec+=Bt(d[11])):r.codec="avc1.4d400d"):/^mp4[a, v]$/i.test(r.codec)?(d=c.subarray(28), "esds"===Ct(d.subarray(4, 8))&&d.length>20&&0 !==d[19]?(r.codec+="."+Bt(d[19]), r.codec+="."+Bt(d[20]>>>2&63).replace(/^0/, "")):r.codec="mp4a.40.2"):r.codec=r.codec.toLowerCase())
                                    }

                                    var h=wt(e, ["mdia", "mdhd"])[0]; h&&(r.timescale=bt(h)), i.push(r)
                                }

                            )), i
                    }

                    , Vt=(bt=function(e) {
                            var t=0===e[0]?12:20; return Nt(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])
                        }

                        , function(e) {
                            var t=31&e[1]; return(t<<=8)|e[2]
                        }

                    ), qt=function(e) {
                        return ! !(64&e[1])
                    }

                    , Wt=function(e) {
                        var t=0; return(48&e[3])>>>4>1&&(t+=e[4]+1), t
                    }

                    , $t=function(e) {
                        switch(e) {
                            case 5:return"slice_layer_without_partitioning_rbsp_idr"; case 6:return"sei_rbsp"; case 7:return"seq_parameter_set_rbsp"; case 8:return"pic_parameter_set_rbsp"; case 9:return"access_unit_delimiter_rbsp"; default:return null
                        }
                    }

                    , Gt= {
                        parseType:function(e, t) {
                            var i=Vt(e); return 0===i?"pat":i===t?"pmt":t?"pes":null
                        }

                        , parsePat:function(e) {
                            var t=qt(e), i=4+Wt(e); return t&&(i+=e[i]+1), (31&e[i+10])<<8|e[i+11]
                        }

                        , parsePmt:function(e) {
                            var t= {}

                            , i=qt(e), n=4+Wt(e); if(i&&(n+=e[n]+1), 1&e[n+5]) {
                                var r; r=3+((15&e[n+1])<<8|e[n+2])-4; for(var a=12+((15&e[n+10])<<8|e[n+11]); a<r; ) {
                                    var s=n+a; t[(31&e[s+1])<<8|e[s+2]]=e[s], a+=5+((15&e[s+3])<<8|e[s+4])
                                }

                                return t
                            }
                        }

                        , parsePayloadUnitStartIndicator:qt, parsePesType:function(e, t) {
                            switch(t[Vt(e)]) {
                                case Ae.H264_STREAM_TYPE:return"video"; case Ae.ADTS_STREAM_TYPE:return"audio"; case Ae.METADATA_STREAM_TYPE:return"timed-metadata"; default:return null
                            }
                        }

                        , parsePesTime:function(e) {
                            if( !qt(e))return null; var t=4+Wt(e); if(t>=e.byteLength)return null; var i, n=null; return 192&(i=e[t+7])&&((n= {}

                                ).pts=(14&e[t+9])<<27|(255&e[t+10])<<20|(254&e[t+11])<<12|(255&e[t+12])<<5|(254&e[t+13])>>>3, n.pts*=4, n.pts+=(6&e[t+13])>>>1, n.dts=n.pts, 64&i&&(n.dts=(14&e[t+14])<<27|(255&e[t+15])<<20|(254&e[t+16])<<12|(255&e[t+17])<<5|(254&e[t+18])>>>3, n.dts*=4, n.dts+=(6&e[t+18])>>>1)), n
                        }

                        , videoPacketContainsKeyFrame:function(e) {
                            for(var t=4+Wt(e), i=e.subarray(t), n=0, r=0, a= !1; r<i.byteLength-3; r++)if(1===i[r+2]) {
                                n=r+5; break
                            }

                            for(; n<i.byteLength; )switch(i[n]) {
                                case 0:if(0 !==i[n-1]) {
                                    n+=2; break
                                }

                                if(0 !==i[n-2]) {
                                    n++; break
                                }

                                r+3 !==n-2&&"slice_layer_without_partitioning_rbsp_idr"===$t(31&i[r+3])&&(a= !0); do {
                                    n++
                                }

                                while(1 !==i[n]&&n<i.length); r=n-2, n+=3; break; case 1:if(0 !==i[n-1]||0 !==i[n-2]) {
                                    n+=3; break
                                }

                                "slice_layer_without_partitioning_rbsp_idr"===$t(31&i[r+3])&&(a= !0), r=n-2, n+=3; break; default:n+=3
                            }

                            return i=i.subarray(r), n-=r, r=0, i&&i.byteLength>3&&"slice_layer_without_partitioning_rbsp_idr"===$t(31&i[r+3])&&(a= !0), a
                        }
                    }

                    , zt=Re, Kt= {}

                    ; Kt.ts=Gt, Kt.aac=ot; var Qt=se, Yt=188, Xt=71, Jt=function(e, t, i) {
                        for(var n, r, a, s, o=0, l=Yt, u= !1; l<=e.byteLength; )if(e[o] !==Xt||e[l] !==Xt&&l !==e.byteLength)o++, l++; else {
                            switch(n=e.subarray(o, l), Kt.ts.parseType(n, t.pid)) {
                                case"pes":r=Kt.ts.parsePesType(n, t.table), a=Kt.ts.parsePayloadUnitStartIndicator(n), "audio"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="audio", i.audio.push(s), u= !0)
                            }

                            if(u)break; o+=Yt, l+=Yt
                        }

                        for(o=(l=e.byteLength)-Yt, u= !1; o>=0; )if(e[o] !==Xt||e[l] !==Xt&&l !==e.byteLength)o--, l--; else {
                            switch(n=e.subarray(o, l), Kt.ts.parseType(n, t.pid)) {
                                case"pes":r=Kt.ts.parsePesType(n, t.table), a=Kt.ts.parsePayloadUnitStartIndicator(n), "audio"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="audio", i.audio.push(s), u= !0)
                            }

                            if(u)break; o-=Yt, l-=Yt
                        }
                    }

                    , Zt=function(e, t, i) {
                        for(var n, r, a, s, o, l, u, d=0, c=Yt, h= !1, p= {
                                data:[], size:0
                            }

                            ; c<e.byteLength; )if(e[d] !==Xt||e[c] !==Xt)d++, c++; else {
                            switch(n=e.subarray(d, c), Kt.ts.parseType(n, t.pid)) {
                                case"pes":if(r=Kt.ts.parsePesType(n, t.table), a=Kt.ts.parsePayloadUnitStartIndicator(n), "video"===r&&(a&& !h&&(s=Kt.ts.parsePesTime(n))&&(s.type="video", i.video.push(s), h= !0),  !i.firstKeyFrame)) {
                                    if(a&&0 !==p.size) {
                                        for(o=new Uint8Array(p.size), l=0; p.data.length; )u=p.data.shift(), o.set(u, l), l+=u.byteLength; if(Kt.ts.videoPacketContainsKeyFrame(o)) {
                                            var f=Kt.ts.parsePesTime(o); f?(i.firstKeyFrame=f, i.firstKeyFrame.type="video"):console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")
                                        }

                                        p.size=0
                                    }

                                    p.data.push(n), p.size+=n.byteLength
                                }
                            }

                            if(h&&i.firstKeyFrame)break; d+=Yt, c+=Yt
                        }

                        for(d=(c=e.byteLength)-Yt, h= !1; d>=0; )if(e[d] !==Xt||e[c] !==Xt)d--, c--; else {
                            switch(n=e.subarray(d, c), Kt.ts.parseType(n, t.pid)) {
                                case"pes":r=Kt.ts.parsePesType(n, t.table), a=Kt.ts.parsePayloadUnitStartIndicator(n), "video"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="video", i.video.push(s), h= !0)
                            }

                            if(h)break; d-=Yt, c-=Yt
                        }
                    }

                    , ei=function(e, t) {
                        var i; return(i=Kt.aac.isLikelyAacData(e)?function(e) {
                                for(var t, i= !1, n=0, r=null, a=null, s=0, o=0; e.length-o>=3; ) {
                                    switch(Kt.aac.parseType(e, o)) {
                                        case"timed-metadata":if(e.length-o<10) {
                                            i= !0; break
                                        }

                                        if((s=Kt.aac.parseId3TagSize(e, o))>e.length) {
                                            i= !0; break
                                        }

                                        null===a&&(t=e.subarray(o, o+s), a=Kt.aac.parseAacTimestamp(t)), o+=s; break; case"audio":if(e.length-o<7) {
                                            i= !0; break
                                        }

                                        if((s=Kt.aac.parseAdtsSize(e, o))>e.length) {
                                            i= !0; break
                                        }

                                        null===r&&(t=e.subarray(o, o+s), r=Kt.aac.parseSampleRate(t)), n++, o+=s; break; default:o++
                                    }

                                    if(i)return null
                                }

                                if(null===r||null===a)return null; var l=Qt/r; return {
                                    audio:[ {
                                        type:"audio", dts:a, pts:a
                                    }

                                    , {
                                        type:"audio", dts:a+1024*n*l, pts:a+1024*n*l
                                    }

                                    ]
                                }
                            }

                            (e):function(e) {
                                var t= {
                                    pid:null, table:null
                                }

                                , i= {}

                                ; for(var n in function(e, t) {
                                        for(var i, n=0, r=Yt; r<e.byteLength; )if(e[n] !==Xt||e[r] !==Xt)n++, r++; else {
                                            switch(i=e.subarray(n, r), Kt.ts.parseType(i, t.pid)) {
                                                case"pat":t.pid=Kt.ts.parsePat(i); break; case"pmt":var a=Kt.ts.parsePmt(i); t.table=t.table|| {}

                                                , Object.keys(a).forEach((function(e) {
                                                            t.table[e]=a[e]
                                                        }

                                                    ))
                                            }

                                            n+=Yt, r+=Yt
                                        }
                                    }

                                    (e, t), t.table)if(t.table.hasOwnProperty(n))switch(t.table[n]) {
                                    case Ae.H264_STREAM_TYPE:i.video=[], Zt(e, t, i), 0===i.video.length&&delete i.video; break; case Ae.ADTS_STREAM_TYPE:i.audio=[], Jt(e, t, i), 0===i.audio.length&&delete i.audio
                                }

                                return i
                            }

                            (e))&&(i.audio||i.video)?(function(e, t) {
                                if(e.audio&&e.audio.length) {
                                    var i=t; (void 0===i||isNaN(i))&&(i=e.audio[0].dts), e.audio.forEach((function(e) {
                                                e.dts=zt(e.dts, i), e.pts=zt(e.pts, i), e.dtsTime=e.dts/Qt, e.ptsTime=e.pts/Qt
                                            }

                                        ))
                                }

                                if(e.video&&e.video.length) {
                                    var n=t; if((void 0===n||isNaN(n))&&(n=e.video[0].dts), e.video.forEach((function(e) {
                                                    e.dts=zt(e.dts, n), e.pts=zt(e.pts, n), e.dtsTime=e.dts/Qt, e.ptsTime=e.pts/Qt
                                                }

                                            )), e.firstKeyFrame) {
                                        var r=e.firstKeyFrame; r.dts=zt(r.dts, n), r.pts=zt(r.pts, n), r.dtsTime=r.dts/Qt, r.ptsTime=r.pts/Qt
                                    }
                                }
                            }

                            (i, t), i):null
                    }

                    , ti=function() {
                        function e(e, t) {
                            this.options=t|| {}

                            , this.self=e, this.init()
                        }

                        var t=e.prototype; return t.init=function() {
                            this.transmuxer&&this.transmuxer.dispose(), this.transmuxer=new St.Transmuxer(this.options), function(e, t) {
                                t.on("data", (function(t) {
                                            var i=t.initSegment; t.initSegment= {
                                                data:i.buffer, byteOffset:i.byteOffset, byteLength:i.byteLength
                                            }

                                            ; var n=t.data; t.data=n.buffer, e.postMessage( {
                                                    action:"data", segment:t, byteOffset:n.byteOffset, byteLength:n.byteLength
                                                }

                                                , [t.data])
                                        }

                                    )), t.on("done", (function(t) {
                                            e.postMessage( {
                                                    action:"done"
                                                }

                                            )
                                        }

                                    )), t.on("gopInfo", (function(t) {
                                            e.postMessage( {
                                                    action:"gopInfo", gopInfo:t
                                                }

                                            )
                                        }

                                    )), t.on("videoSegmentTimingInfo", (function(t) {
                                            var i= {
                                                start: {
                                                    decode:le(t.start.dts), presentation:le(t.start.pts)
                                                }

                                                , end: {
                                                    decode:le(t.end.dts), presentation:le(t.end.pts)
                                                }

                                                , baseMediaDecodeTime:le(t.baseMediaDecodeTime)
                                            }

                                            ; t.prependedContentDuration&&(i.prependedContentDuration=le(t.prependedContentDuration)), e.postMessage( {
                                                    action:"videoSegmentTimingInfo", videoSegmentTimingInfo:i
                                                }

                                            )
                                        }

                                    )), t.on("audioSegmentTimingInfo", (function(t) {
                                            var i= {
                                                start: {
                                                    decode:le(t.start.dts), presentation:le(t.start.pts)
                                                }

                                                , end: {
                                                    decode:le(t.end.dts), presentation:le(t.end.pts)
                                                }

                                                , baseMediaDecodeTime:le(t.baseMediaDecodeTime)
                                            }

                                            ; t.prependedContentDuration&&(i.prependedContentDuration=le(t.prependedContentDuration)), e.postMessage( {
                                                    action:"audioSegmentTimingInfo", audioSegmentTimingInfo:i
                                                }

                                            )
                                        }

                                    )), t.on("id3Frame", (function(t) {
                                            e.postMessage( {
                                                    action:"id3Frame", id3Frame:t
                                                }

                                            )
                                        }

                                    )), t.on("caption", (function(t) {
                                            e.postMessage( {
                                                    action:"caption", caption:t
                                                }

                                            )
                                        }

                                    )), t.on("trackinfo", (function(t) {
                                            e.postMessage( {
                                                    action:"trackinfo", trackInfo:t
                                                }

                                            )
                                        }

                                    )), t.on("audioTimingInfo", (function(t) {
                                            e.postMessage( {
                                                    action:"audioTimingInfo", audioTimingInfo: {
                                                        start:le(t.start), end:le(t.end)
                                                    }
                                                }

                                            )
                                        }

                                    )), t.on("videoTimingInfo", (function(t) {
                                            e.postMessage( {
                                                    action:"videoTimingInfo", videoTimingInfo: {
                                                        start:le(t.start), end:le(t.end)
                                                    }
                                                }

                                            )
                                        }

                                    )), t.on("log", (function(t) {
                                            e.postMessage( {
                                                    action:"log", log:t
                                                }

                                            )
                                        }

                                    ))
                            }

                            (this.self, this.transmuxer)
                        }

                        , t.pushMp4Captions=function(e) {
                            this.captionParser||(this.captionParser=new Ut, this.captionParser.init()); var t=new Uint8Array(e.data, e.byteOffset, e.byteLength), i=this.captionParser.parse(t, e.trackIds, e.timescales); this.self.postMessage( {
                                    action:"mp4Captions", captions:i&&i.captions||[], logs:i&&i.logs||[], data:t.buffer
                                }

                                , [t.buffer])
                        }

                        , t.probeMp4StartTime=function(e) {
                            var t=e.timescales, i=e.data, n=jt(t, i); this.self.postMessage( {
                                    action:"probeMp4StartTime", startTime:n, data:i
                                }

                                , [i.buffer])
                        }

                        , t.probeMp4Tracks=function(e) {
                            var t=e.data, i=Ht(t); this.self.postMessage( {
                                    action:"probeMp4Tracks", tracks:i, data:t
                                }

                                , [t.buffer])
                        }

                        , t.probeTs=function(e) {
                            var t=e.data, i=e.baseStartTime, n="number" !=typeof i||isNaN(i)?void 0:i*se, r=ei(t, n), a=null; r&&((a= {
                                        hasVideo:r.video&&2===r.video.length|| !1, hasAudio:r.audio&&2===r.audio.length|| !1
                                    }

                                ).hasVideo&&(a.videoStart=r.video[0].ptsTime), a.hasAudio&&(a.audioStart=r.audio[0].ptsTime)), this.self.postMessage( {
                                    action:"probeTs", result:a, data:t
                                }

                                , [t.buffer])
                        }

                        , t.clearAllMp4Captions=function() {
                            this.captionParser&&this.captionParser.clearAllCaptions()
                        }

                        , t.clearParsedMp4Captions=function() {
                            this.captionParser&&this.captionParser.clearParsedCaptions()
                        }

                        , t.push=function(e) {
                            var t=new Uint8Array(e.data, e.byteOffset, e.byteLength); this.transmuxer.push(t)
                        }

                        , t.reset=function() {
                            this.transmuxer.reset()
                        }

                        , t.setTimestampOffset=function(e) {
                            var t=e.timestampOffset||0; this.transmuxer.setBaseMediaDecodeTime(Math.round(oe(t)))
                        }

                        , t.setAudioAppendStart=function(e) {
                            this.transmuxer.setAudioAppendStart(Math.ceil(oe(e.appendStart)))
                        }

                        , t.setRemux=function(e) {
                            this.transmuxer.setRemux(e.remux)
                        }

                        , t.flush=function(e) {
                            this.transmuxer.flush(), self.postMessage( {
                                    action:"done", type:"transmuxed"
                                }

                            )
                        }

                        , t.endTimeline=function() {
                            this.transmuxer.endTimeline(), self.postMessage( {
                                    action:"endedtimeline", type:"transmuxed"
                                }

                            )
                        }

                        , t.alignGopsWith=function(e) {
                            this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                        }

                        , e
                    }

                    (); self.onmessage=function(e) {
                        "init"===e.data.action&&e.data.options?this.messageHandlers=new ti(self, e.data.options):(this.messageHandlers||(this.messageHandlers=new ti(self)), e.data&&e.data.action&&"init" !==e.data.action&&this.messageHandlers[e.data.action]&&this.messageHandlers[e.data.action](e.data))
                    }
                }

            ))),
    TransmuxWorker=factory(workerCode$1),
    handleData_=function(e, t, i) {
        var n=e.data.segment,
        r=n.type,
        a=n.initSegment,
        s=n.captions,
        o=n.captionStreams,
        l=n.metadata,
        u=n.videoFrameDtsTime,
        d=n.videoFramePtsTime;

        t.buffer.push( {
                captions:s, captionStreams:o, metadata:l
            }

        );

        var c=e.data.segment.boxes|| {
            data: e.data.segment.data
        }

        ,
        h= {
            type: r, data:new Uint8Array(c.data, c.data.byteOffset, c.data.byteLength), initSegment:new Uint8Array(a.data, a.byteOffset, a.byteLength)
        }

        ;
        void 0 !==u&&(h.videoFrameDtsTime=u),
        void 0 !==d&&(h.videoFramePtsTime=d),
        i(h)
    }

    ,
    handleDone_=function(e) {
        var t=e.transmuxedData,
        i=e.callback;
        t.buffer=[],
        i(t)
    }

    ,
    handleGopInfo_=function(e, t) {
        t.gopInfo=e.data.gopInfo
    }

    ,
    processTransmux=function(e) {

        var t=e.transmuxer,
        i=e.bytes,
        n=e.audioAppendStart,
        r=e.gopsToAlignWith,
        a=e.remux,
        s=e.onData,
        o=e.onTrackInfo,
        l=e.onAudioTimingInfo,
        u=e.onVideoTimingInfo,
        d=e.onVideoSegmentTimingInfo,
        c=e.onAudioSegmentTimingInfo,
        h=e.onId3,
        p=e.onCaptions,
        f=e.onDone,
        m=e.onEndedTimeline,
        g=e.onTransmuxerLog,
        _=e.isEndOfTimeline,
        v= {
            buffer: []
        }

        ,
        y=_;

        if(t.onmessage=function(i) {
                t.currentTransmux===e&&("data"===i.data.action&&handleData_(i, v, s), "trackinfo"===i.data.action&&o(i.data.trackInfo), "gopInfo"===i.data.action&&handleGopInfo_(i, v), "audioTimingInfo"===i.data.action&&l(i.data.audioTimingInfo), "videoTimingInfo"===i.data.action&&u(i.data.videoTimingInfo), "videoSegmentTimingInfo"===i.data.action&&d(i.data.videoSegmentTimingInfo), "audioSegmentTimingInfo"===i.data.action&&c(i.data.audioSegmentTimingInfo), "id3Frame"===i.data.action&&h([i.data.id3Frame], i.data.id3Frame.dispatchType), "caption"===i.data.action&&p(i.data.caption), "endedtimeline"===i.data.action&&(y= !1, m()), "log"===i.data.action&&g(i.data.log), "transmuxed"===i.data.type&&(y||(t.onmessage=null, handleDone_( {
                                    transmuxedData:v, callback:f
                                }

                            ), dequeue(t))))
            }

            , n&&t.postMessage( {
                    action:"setAudioAppendStart", appendStart:n
                }

            ), Array.isArray(r)&&t.postMessage( {
                    action:"alignGopsWith", gopsToAlignWith:r
                }

            ), void 0 !==a&&t.postMessage( {
                    action:"setRemux", remux:a
                }

            ), i.byteLength) {
            var T=i instanceof ArrayBuffer?i: i.buffer, b=i instanceof ArrayBuffer?0:i.byteOffset;

            t.postMessage( {
                    action:"push", data:T, byteOffset:b, byteLength:i.byteLength
                }

                , [T])
        }

        _&&t.postMessage( {
                action:"endTimeline"
            }

        ),
        t.postMessage( {
                action:"flush"
            }

        )
    }

    ,
    dequeue=function(e) {
        e.currentTransmux=null,
        e.transmuxQueue.length&&(e.currentTransmux=e.transmuxQueue.shift(), "function"==typeof e.currentTransmux?e.currentTransmux():processTransmux(e.currentTransmux))
    }

    ,
    processAction=function(e, t) {
        e.postMessage( {
                action:t
            }

        ),
        dequeue(e)
    }

    ,
    enqueueAction=function(e, t) {
        if( !t.currentTransmux)return t.currentTransmux=e,
        void processAction(t, e);
        t.transmuxQueue.push(processAction.bind(null, t, e))
    }

    ,
    reset=function(e) {
        enqueueAction("reset", e)
    }

    ,
    endTimeline=function(e) {
        enqueueAction("endTimeline", e)
    }

    ,
    transmux=function(e) {
        if( !e.transmuxer.currentTransmux)return e.transmuxer.currentTransmux=e,
        void processTransmux(e);
        e.transmuxer.transmuxQueue.push(e)
    }

    ,
    createTransmuxer=function(e) {
        var t=new TransmuxWorker;
        t.currentTransmux=null,
        t.transmuxQueue=[];
        var i=t.terminate;

        return t.terminate=function() {
            return t.currentTransmux=null,
            t.transmuxQueue.length=0,
            i.call(t)
        }

        ,
        t.postMessage( {
                action:"init", options:e
            }

        ),
        t
    }

    ,
    segmentTransmuxer= {
        reset: reset, endTimeline:endTimeline, transmux:transmux, createTransmuxer:createTransmuxer
    }

    ,
    workerCallback=function(e) {

        var t=e.transmuxer,
        i=e.endAction||e.action,
        n=e.callback,
        r=_extends__default.default( {}

            , e, {
                endAction:null, transmuxer:null, callback:null
            }

        );

        if(t.addEventListener("message", (function r(a) {
                        a.data.action===i&&(t.removeEventListener("message", r), a.data.data&&(a.data.data=new Uint8Array(a.data.data, e.byteOffset||0, e.byteLength||a.data.data.byteLength), e.data&&(e.data=a.data.data)), n(a.data))
                    }

                )), e.data) {
            var a=e.data instanceof ArrayBuffer;
            r.byteOffset=a?0: e.data.byteOffset, r.byteLength=e.data.byteLength;
            var s=[a?e.data: e.data.buffer];
            t.postMessage(r, s)
        }

        else t.postMessage(r)
    }

    ,
    REQUEST_ERRORS= {
        FAILURE: 2, TIMEOUT:-101, ABORTED:-102
    }

    ,
    abortAll=function(e) {
        e.forEach((function(e) {
                    e.abort()
                }

            ))
    }

    ,
    getRequestStats=function(e) {
        return {
            bandwidth: e.bandwidth, bytesReceived:e.bytesReceived||0, roundTripTime:e.roundTripTime||0
        }
    }

    ,
    getProgressStats=function(e) {

        var t=e.target,
        i= {
            bandwidth: 1/0, bytesReceived:0, roundTripTime:Date.now()-t.requestTime||0
        }

        ;
        return i.bytesReceived=e.loaded,
        i.bandwidth=Math.floor(i.bytesReceived/i.roundTripTime*8*1e3),
        i
    }

    ,
    handleErrors=function(e, t) {
        return t.timedout? {
            status: t.status, message:"HLS request timed-out at URL: "+t.uri, code:REQUEST_ERRORS.TIMEOUT, xhr:t
        }

        :t.aborted? {
            status: t.status, message:"HLS request aborted at URL: "+t.uri, code:REQUEST_ERRORS.ABORTED, xhr:t
        }

        :e? {
            status: t.status, message:"HLS request errored at URL: "+t.uri, code:REQUEST_ERRORS.FAILURE, xhr:t
        }

        :"arraybuffer"===t.responseType&&0===t.response.byteLength? {
            status: t.status, message:"Empty HLS response at URL: "+t.uri, code:REQUEST_ERRORS.FAILURE, xhr:t
        }

        :null
    }

    ,
    handleKeyResponse=function(e, t, i) {
        return function(n, r) {
            var a=r.response,
            s=handleErrors(n, r);
            if(s)return i(s, e);

            if(16 !==a.byteLength)return i( {
                    status:r.status, message:"Invalid HLS key at URL: "+r.uri, code:REQUEST_ERRORS.FAILURE, xhr:r
                }

                , e);
            for(var o=new DataView(a), l=new Uint32Array([o.getUint32(0), o.getUint32(4), o.getUint32(8), o.getUint32(12)]), u=0; u<t.length; u++)t[u].bytes=l;
            return i(null, e)
        }
    }

    ,
    parseInitSegment=function(e, t) {
        var i=containers.detectContainerForBytes(e.map.bytes);

        if("mp4" !==i) {
            var n=e.map.resolvedUri||e.map.uri;

            return t( {
                    internal: !0, message:"Found unsupported "+(i||"unknown")+" container for initialization segment at URL: "+n, code:REQUEST_ERRORS.FAILURE
                }

            )
        }

        workerCallback( {
                action:"probeMp4Tracks", data:e.map.bytes, transmuxer:e.transmuxer, callback:function(i) {
                    var n=i.tracks, r=i.data; return e.map.bytes=r, n.forEach((function(t) {
                                e.map.tracks=e.map.tracks|| {}

                                , e.map.tracks[t.type]||(e.map.tracks[t.type]=t, "number"==typeof t.id&&t.timescale&&(e.map.timescales=e.map.timescales|| {}

                                        , e.map.timescales[t.id]=t.timescale))
                            }

                        )), t(null)
                }
            }

        )
    }

    ,
    handleInitSegmentResponse=function(e) {
        var t=e.segment,
        i=e.finishProcessingFn;

        return function(e, n) {
            var r=handleErrors(e, n);
            if(r)return i(r, t);
            var a=new Uint8Array(n.response);
            if(t.map.key)return t.map.encryptedBytes=a,
            i(null, t);

            t.map.bytes=a,
            parseInitSegment(t, (function(e) {
                        if(e)return e.xhr=n, e.status=n.status, i(e, t); i(null, t)
                    }

                ))
        }
    }

    ,
    handleSegmentResponse=function(e) {
        var t=e.segment,
        i=e.finishProcessingFn,
        n=e.responseType;

        return function(e, r) {
            var a=handleErrors(e, r);
            if(a)return i(a, t);
            var s="arraybuffer" !==n&&r.responseText?stringToArrayBuffer(r.responseText.substring(t.lastReachedChar||0)): r.response;
            return t.stats=getRequestStats(r),
            t.key?t.encryptedBytes=new Uint8Array(s): t.bytes=new Uint8Array(s), i(null, t)
        }
    }

    ,
    transmuxAndNotify=function(e) {

        var t=e.segment,
        i=e.bytes,
        n=e.trackInfoFn,
        r=e.timingInfoFn,
        a=e.videoSegmentTimingInfoFn,
        s=e.audioSegmentTimingInfoFn,
        o=e.id3Fn,
        l=e.captionsFn,
        u=e.isEndOfTimeline,
        d=e.endedTimelineFn,
        c=e.dataFn,
        h=e.doneFn,
        p=e.onTransmuxerLog,
        f=t.map&&t.map.tracks|| {}

        ,
        m=Boolean(f.audio&&f.video),
        g=r.bind(null, t, "audio", "start"),
        _=r.bind(null, t, "audio", "end"),
        v=r.bind(null, t, "video", "start"),
        y=r.bind(null, t, "video", "end");

        workerCallback( {
                action:"probeTs", transmuxer:t.transmuxer, data:i, baseStartTime:t.baseStartTime, callback:function(e) {
                    t.bytes=i=e.data; var r=e.result; r&&(n(t, {
                                hasAudio:r.hasAudio, hasVideo:r.hasVideo, isMuxed:m
                            }

                        ), n=null, r.hasAudio&& !m&&g(r.audioStart), r.hasVideo&&v(r.videoStart), g=null, v=null), transmux( {
                            bytes:i, transmuxer:t.transmuxer, audioAppendStart:t.audioAppendStart, gopsToAlignWith:t.gopsToAlignWith, remux:m, onData:function(e) {
                                e.type="combined"===e.type?"video":e.type, c(t, e)
                            }

                            , onTrackInfo:function(e) {
                                n&&(m&&(e.isMuxed= !0), n(t, e))
                            }

                            , onAudioTimingInfo:function(e) {
                                g&&void 0 !==e.start&&(g(e.start), g=null), _&&void 0 !==e.end&&_(e.end)
                            }

                            , onVideoTimingInfo:function(e) {
                                v&&void 0 !==e.start&&(v(e.start), v=null), y&&void 0 !==e.end&&y(e.end)
                            }

                            , onVideoSegmentTimingInfo:function(e) {
                                a(e)
                            }

                            , onAudioSegmentTimingInfo:function(e) {
                                s(e)
                            }

                            , onId3:function(e, i) {
                                o(t, e, i)
                            }

                            , onCaptions:function(e) {
                                l(t, [e])
                            }

                            , isEndOfTimeline:u, onEndedTimeline:function() {
                                d()
                            }

                            , onTransmuxerLog:p, onDone:function(e) {
                                h&&(e.type="combined"===e.type?"video":e.type, h(null, t, e))
                            }
                        }

                    )
                }
            }

        )
    }

    ,
    handleSegmentBytes=function(e) {
        var t=e.segment,
        i=e.bytes,
        n=e.trackInfoFn,
        r=e.timingInfoFn,
        a=e.videoSegmentTimingInfoFn,
        s=e.audioSegmentTimingInfoFn,
        o=e.id3Fn,
        l=e.captionsFn,
        u=e.isEndOfTimeline,
        d=e.endedTimelineFn,
        c=e.dataFn,
        h=e.doneFn,
        p=e.onTransmuxerLog,
        f=new Uint8Array(i);

        if(containers.isLikelyFmp4MediaSegment(f)) {
            t.isFmp4= !0;

            var m=t.map.tracks,
            g= {
                isFmp4:  !0, hasVideo: ! !m.video, hasAudio: ! !m.audio
            }

            ;
            m.audio&&m.audio.codec&&"enca" !==m.audio.codec&&(g.audioCodec=m.audio.codec),
            m.video&&m.video.codec&&"encv" !==m.video.codec&&(g.videoCodec=m.video.codec),
            m.video&&m.audio&&(g.isMuxed= !0),
            n(t, g);

            var _=function(e) {
                c(t, {
                        data:f, type:g.hasAudio&& !g.isMuxed?"audio":"video"
                    }

                ),
                e&&e.length&&l(t, e),
                h(null, t, {}

                )
            }

            ;

            workerCallback( {
                    action:"probeMp4StartTime", timescales:t.map.timescales, data:f, transmuxer:t.transmuxer, callback:function(e) {
                        var n=e.data, a=e.startTime; i=n.buffer, t.bytes=f=n, g.hasAudio&& !g.isMuxed&&r(t, "audio", "start", a), g.hasVideo&&r(t, "video", "start", a), m.video&&n.byteLength&&t.transmuxer?workerCallback( {
                                action:"pushMp4Captions", endAction:"mp4Captions", transmuxer:t.transmuxer, data:f, timescales:t.map.timescales, trackIds:[m.video.id], callback:function(e) {
                                    i=e.data.buffer, t.bytes=f=e.data, e.logs.forEach((function(e) {
                                                p(videojs.mergeOptions(e, {
                                                            stream:"mp4CaptionParser"
                                                        }

                                                    ))
                                            }

                                        )), _(e.captions)
                                }
                            }

                        ):_()
                    }
                }

            )
        }

        else if(t.transmuxer) {
            if(void 0===t.container&&(t.container=containers.detectContainerForBytes(f)), "ts" !==t.container&&"aac" !==t.container)return n(t, {
                    hasAudio: !1, hasVideo: !1
                }

            ),
            void h(null, t, {}

            );

            transmuxAndNotify( {
                    segment:t, bytes:i, trackInfoFn:n, timingInfoFn:r, videoSegmentTimingInfoFn:a, audioSegmentTimingInfoFn:s, id3Fn:o, captionsFn:l, isEndOfTimeline:u, endedTimelineFn:d, dataFn:c, doneFn:h, onTransmuxerLog:p
                }

            )
        }

        else h(null, t, {}

        )
    }

    ,
    decrypt=function(e, t) {
        var i,
        n=e.id,
        r=e.key,
        a=e.encryptedBytes,
        s=e.decryptionWorker;

        s.addEventListener("message", (function e(i) {
                    if(i.data.source===n) {
                        s.removeEventListener("message", e); var r=i.data.decrypted; t(new Uint8Array(r.bytes, r.byteOffset, r.byteLength))
                    }
                }

            )),
        i=r.bytes.slice?r.bytes.slice():new Uint32Array(Array.prototype.slice.call(r.bytes)),
        s.postMessage(createTransferableMessage( {
                    source:n, encrypted:a, key:i, iv:r.iv
                }

            ), [a.buffer, i.buffer])
    }

    ,
    decryptSegment=function(e) {
        var t=e.decryptionWorker,
        i=e.segment,
        n=e.trackInfoFn,
        r=e.timingInfoFn,
        a=e.videoSegmentTimingInfoFn,
        s=e.audioSegmentTimingInfoFn,
        o=e.id3Fn,
        l=e.captionsFn,
        u=e.isEndOfTimeline,
        d=e.endedTimelineFn,
        c=e.dataFn,
        h=e.doneFn,
        p=e.onTransmuxerLog;

        decrypt( {
                id:i.requestId, key:i.key, encryptedBytes:i.encryptedBytes, decryptionWorker:t
            }

            , (function(e) {
                    i.bytes=e, handleSegmentBytes( {
                            segment:i, bytes:i.bytes, trackInfoFn:n, timingInfoFn:r, videoSegmentTimingInfoFn:a, audioSegmentTimingInfoFn:s, id3Fn:o, captionsFn:l, isEndOfTimeline:u, endedTimelineFn:d, dataFn:c, doneFn:h, onTransmuxerLog:p
                        }

                    )
                }

            ))
    }

    ,
    waitForCompletion=function(e) {
        var t=e.activeXhrs,
        i=e.decryptionWorker,
        n=e.trackInfoFn,
        r=e.timingInfoFn,
        a=e.videoSegmentTimingInfoFn,
        s=e.audioSegmentTimingInfoFn,
        o=e.id3Fn,
        l=e.captionsFn,
        u=e.isEndOfTimeline,
        d=e.endedTimelineFn,
        c=e.dataFn,
        h=e.doneFn,
        p=e.onTransmuxerLog,
        f=0,
        m= !1;

        return function(e, g) {
            if( !m) {
                if(e)return m= !0,
                abortAll(t),
                h(e, g);

                if((f+=1)===t.length) {
                    var _=function() {
                        if(g.encryptedBytes)return decryptSegment( {
                                decryptionWorker:i, segment:g, trackInfoFn:n, timingInfoFn:r, videoSegmentTimingInfoFn:a, audioSegmentTimingInfoFn:s, id3Fn:o, captionsFn:l, isEndOfTimeline:u, endedTimelineFn:d, dataFn:c, doneFn:h, onTransmuxerLog:p
                            }

                        );

                        handleSegmentBytes( {
                                segment:g, bytes:g.bytes, trackInfoFn:n, timingInfoFn:r, videoSegmentTimingInfoFn:a, audioSegmentTimingInfoFn:s, id3Fn:o, captionsFn:l, isEndOfTimeline:u, endedTimelineFn:d, dataFn:c, doneFn:h, onTransmuxerLog:p
                            }

                        )
                    }

                    ;

                    if(g.endOfAllRequests=Date.now(), g.map&&g.map.encryptedBytes&& !g.map.bytes)return decrypt( {
                            decryptionWorker:i, id:g.requestId+"-init", encryptedBytes:g.map.encryptedBytes, key:g.map.key
                        }

                        , (function(e) {
                                g.map.bytes=e, parseInitSegment(g, (function(e) {
                                            if(e)return abortAll(t), h(e, g); _()
                                        }

                                    ))
                            }

                        ));
                    _()
                }
            }
        }
    }

    ,
    handleLoadEnd=function(e) {
        var t=e.loadendState,
        i=e.abortFn;

        return function(e) {
            e.target.aborted&&i&& !t.calledAbortFn&&(i(), t.calledAbortFn= !0)
        }
    }

    ,
    handleProgress=function(e) {
        var t=e.segment,
        i=e.progressFn;

        return e.trackInfoFn,
        e.timingInfoFn,
        e.videoSegmentTimingInfoFn,
        e.audioSegmentTimingInfoFn,
        e.id3Fn,
        e.captionsFn,
        e.isEndOfTimeline,
        e.endedTimelineFn,
        e.dataFn,
        function(e) {
            if( !e.target.aborted)return t.stats=videojs.mergeOptions(t.stats, getProgressStats(e)),
             !t.stats.firstBytesReceivedAt&&t.stats.bytesReceived&&(t.stats.firstBytesReceivedAt=Date.now()),
            i(e, t)
        }
    }

    ,
    mediaSegmentRequest=function(e) {

        var t=e.xhr,
        i=e.xhrOptions,
        n=e.decryptionWorker,
        r=e.segment,
        a=e.abortFn,
        s=e.progressFn,
        o=e.trackInfoFn,
        l=e.timingInfoFn,
        u=e.videoSegmentTimingInfoFn,
        d=e.audioSegmentTimingInfoFn,
        c=e.id3Fn,
        h=e.captionsFn,
        p=e.isEndOfTimeline,
        f=e.endedTimelineFn,
        m=e.dataFn,
        g=e.doneFn,
        _=e.onTransmuxerLog,
        v=[],
        y=waitForCompletion( {
                activeXhrs:v, decryptionWorker:n, trackInfoFn:o, timingInfoFn:l, videoSegmentTimingInfoFn:u, audioSegmentTimingInfoFn:d, id3Fn:c, captionsFn:h, isEndOfTimeline:p, endedTimelineFn:f, dataFn:m, doneFn:g, onTransmuxerLog:_
            }

        );

        if(r.key&& !r.key.bytes) {
            var T=[r.key];
            r.map&& !r.map.bytes&&r.map.key&&r.map.key.resolvedUri===r.key.resolvedUri&&T.push(r.map.key);

            var b=t(videojs.mergeOptions(i, {
                        uri:r.key.resolvedUri, responseType:"arraybuffer"
                    }

                ), handleKeyResponse(r, T, y));
            v.push(b)
        }

        if(r.map&& !r.map.bytes) {
            if(r.map.key&&( !r.key||r.key.resolvedUri !==r.map.key.resolvedUri)) {
                var S=t(videojs.mergeOptions(i, {
                            uri:r.map.key.resolvedUri, responseType:"arraybuffer"
                        }

                    ), handleKeyResponse(r, [r.map.key], y));
                v.push(S)
            }

            var E=t(videojs.mergeOptions(i, {
                        uri:r.map.resolvedUri, responseType:"arraybuffer", headers:segmentXhrHeaders(r.map)
                    }

                ), handleInitSegmentResponse( {
                        segment:r, finishProcessingFn:y
                    }

                ));
            v.push(E)
        }

        var C=videojs.mergeOptions(i, {
                uri:r.part&&r.part.resolvedUri||r.resolvedUri, responseType:"arraybuffer", headers:segmentXhrHeaders(r)
            }

        ),
        k=t(C, handleSegmentResponse( {
                    segment:r, finishProcessingFn:y, responseType:C.responseType
                }

            ));

        k.addEventListener("progress", handleProgress( {
                    segment:r, progressFn:s, trackInfoFn:o, timingInfoFn:l, videoSegmentTimingInfoFn:u, audioSegmentTimingInfoFn:d, id3Fn:c, captionsFn:h, isEndOfTimeline:p, endedTimelineFn:f, dataFn:m
                }

            )),
        v.push(k);

        var w= {}

        ;

        return v.forEach((function(e) {
                    e.addEventListener("loadend", handleLoadEnd( {
                                loadendState:w, abortFn:a
                            }

                        ))
                }

            )),
        function() {
            return abortAll(v)
        }
    }

    ,
    logFn$1=logger("CodecUtils"),
    getCodecs=function(e) {
        var t=e.attributes|| {}

        ;
        if(t.CODECS)return codecs_js.parseCodecs(t.CODECS)
    }

    ,
    isMaat=function(e, t) {
        var i=t.attributes|| {}

        ;
        return e&&e.mediaGroups&&e.mediaGroups.AUDIO&&i.AUDIO&&e.mediaGroups.AUDIO[i.AUDIO]
    }

    ,
    isMuxed=function(e, t) {
        if( !isMaat(e, t))return !0;

        var i=t.attributes|| {}

        ,
        n=e.mediaGroups.AUDIO[i.AUDIO];
        for(var r in n)if( !n[r].uri&& !n[r].playlists)return !0;
        return !1
    }

    ,
    unwrapCodecList=function(e) {
        var t= {}

        ;

        return e.forEach((function(e) {
                    var i=e.mediaType, n=e.type, r=e.details; t[i]=t[i]||[], t[i].push(codecs_js.translateLegacyCodec(""+n+r))
                }

            )),
        Object.keys(t).forEach((function(e) {
                    if(t[e].length>1)return logFn$1("multiple "+e+" codecs found as attributes: "+t[e].join(", ")+". Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs."), void(t[e]=null); t[e]=t[e][0]
                }

            )),
        t
    }

    ,
    codecCount=function(e) {
        var t=0;
        return e.audio&&t++,
        e.video&&t++,
        t
    }

    ,
    codecsForPlaylist=function(e, t) {
        var i=t.attributes|| {}

        ,
        n=unwrapCodecList(getCodecs(t)||[]);

        if(isMaat(e, t)&& !n.audio&& !isMuxed(e, t)) {
            var r=unwrapCodecList(codecs_js.codecsFromDefault(e, i.AUDIO)||[]);
            r.audio&&(n.audio=r.audio)
        }

        return n
    }

    ,
    logFn=logger("PlaylistSelector"),
    representationToString=function(e) {
        if(e&&e.playlist) {
            var t=e.playlist;

            return JSON.stringify( {
                    id:t.id, bandwidth:e.bandwidth, width:e.width, height:e.height, codecs:t.attributes&&t.attributes.CODECS||""
                }

            )
        }
    }

    ,
    safeGetComputedStyle=function(e, t) {
        if( !e)return"";
        var i=window__default.default.getComputedStyle(e);
        return i?i[t]: ""
    }

    ,
    stableSort=function(e, t) {
        var i=e.slice();

        e.sort((function(e, n) {
                    var r=t(e, n); return 0===r?i.indexOf(e)-i.indexOf(n):r
                }

            ))
    }

    ,
    comparePlaylistBandwidth=function(e, t) {
        var i,
        n;
        return e.attributes.BANDWIDTH&&(i=e.attributes.BANDWIDTH),
        i=i||window__default.default.Number.MAX_VALUE,
        t.attributes.BANDWIDTH&&(n=t.attributes.BANDWIDTH),
        i-(n||window__default.default.Number.MAX_VALUE)
    }

    ,
    comparePlaylistResolution=function(e, t) {
        var i,
        n;
        return e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(i=e.attributes.RESOLUTION.width),
        i=i||window__default.default.Number.MAX_VALUE,
        t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(n=t.attributes.RESOLUTION.width),
        i===(n=n||window__default.default.Number.MAX_VALUE)&&e.attributes.BANDWIDTH&&t.attributes.BANDWIDTH?e.attributes.BANDWIDTH-t.attributes.BANDWIDTH: i-n
    }

    ,
    simpleSelector=function(e, t, i, n, r, a) {
        if(e) {
            var s= {
                bandwidth: t, width:i, height:n, limitRenditionByPlayerDimensions:r
            }

            ,
            o=e.playlists;
            Playlist.isAudioOnly(e)&&(o=a.getAudioTrackPlaylists_(), s.audioOnly= !0);

            var l=o.map((function(e) {
                        var t=e.attributes&&e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width, i=e.attributes&&e.attributes.RESOLUTION&&e.attributes.RESOLUTION.height; return {
                            bandwidth:e.attributes&&e.attributes.BANDWIDTH||window__default.default.Number.MAX_VALUE, width:t, height:i, playlist:e
                        }
                    }

                ));

            stableSort(l, (function(e, t) {
                        return e.bandwidth-t.bandwidth
                    }

                ));

            var u=(l=l.filter((function(e) {
                            return !Playlist.isIncompatible(e.playlist)
                        }

                    ))).filter((function(e) {
                        return Playlist.isEnabled(e.playlist)
                    }

                ));

            u.length||(u=l.filter((function(e) {
                            return !Playlist.isDisabled(e.playlist)
                        }

                    )));

            var d=u.filter((function(e) {
                        return e.bandwidth*Config.BANDWIDTH_VARIANCE<t
                    }

                )),
            c=d[d.length-1],
            h=d.filter((function(e) {
                        return e.bandwidth===c.bandwidth
                    }

                ))[0];

            if( !1===r) {
                var p=h||u[0]||l[0];

                if(p&&p.playlist) {
                    var f="sortedPlaylistReps";
                    return h&&(f="bandwidthBestRep"),
                    u[0]&&(f="enabledPlaylistReps"),
                    logFn("choosing "+representationToString(p)+" using "+f+" with options", s),
                    p.playlist
                }

                return logFn("could not choose a playlist with options", s),
                null
            }

            var m=d.filter((function(e) {
                        return e.width&&e.height
                    }

                ));

            stableSort(m, (function(e, t) {
                        return e.width-t.width
                    }

                ));

            var g=m.filter((function(e) {
                        return e.width===i&&e.height===n
                    }

                ));
            c=g[g.length-1];

            var _,
            v,
            y,
            T,
            b=g.filter((function(e) {
                        return e.bandwidth===c.bandwidth
                    }

                ))[0];

            if(b||(v=(_=m.filter((function(e) {
                                    return e.width>i||e.height>n
                                }

                            ))).filter((function(e) {
                                return e.width===_[0].width&&e.height===_[0].height
                            }

                        )), c=v[v.length-1], y=v.filter((function(e) {
                                return e.bandwidth===c.bandwidth
                            }

                        ))[0]), a.experimentalLeastPixelDiffSelector) {
                var S=m.map((function(e) {
                            return e.pixelDiff=Math.abs(e.width-i)+Math.abs(e.height-n), e
                        }

                    ));

                stableSort(S, (function(e, t) {
                            return e.pixelDiff===t.pixelDiff?t.bandwidth-e.bandwidth:e.pixelDiff-t.pixelDiff
                        }

                    )),
                T=S[0]
            }

            var E=T||y||b||h||u[0]||l[0];

            if(E&&E.playlist) {
                var C="sortedPlaylistReps";
                return T?C="leastPixelDiffRep": y?C="resolutionPlusOneRep":b?C="resolutionBestRep":h?C="bandwidthBestRep":u[0]&&(C="enabledPlaylistReps"), logFn("choosing "+representationToString(E)+" using "+C+" with options", s), E.playlist
            }

            return logFn("could not choose a playlist with options", s),
            null
        }
    }

    ,
    lastBandwidthSelector=function() {
        var e=this.useDevicePixelRatio&&window__default.default.devicePixelRatio||1;
        return simpleSelector(this.playlists.master, this.systemBandwidth, parseInt(safeGetComputedStyle(this.tech_.el(), "width"), 10)*e, parseInt(safeGetComputedStyle(this.tech_.el(), "height"), 10)*e, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_)
    }

    ,
    movingAverageBandwidthSelector=function(e) {
        var t=-1,
        i=-1;
        if(e<0||e>1)throw new Error("Moving average bandwidth decay must be between 0 and 1.");

        return function() {
            var n=this.useDevicePixelRatio&&window__default.default.devicePixelRatio||1;
            return t<0&&(t=this.systemBandwidth, i=this.systemBandwidth),
            this.systemBandwidth>0&&this.systemBandwidth !==i&&(t=e*this.systemBandwidth+(1-e)*t, i=this.systemBandwidth),
            simpleSelector(this.playlists.master, t, parseInt(safeGetComputedStyle(this.tech_.el(), "width"), 10)*n, parseInt(safeGetComputedStyle(this.tech_.el(), "height"), 10)*n, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_)
        }
    }

    ,
    minRebufferMaxBandwidthSelector=function(e) {

        var t=e.master,
        i=e.currentTime,
        n=e.bandwidth,
        r=e.duration,
        a=e.segmentDuration,
        s=e.timeUntilRebuffer,
        o=e.currentTimeline,
        l=e.syncController,
        u=t.playlists.filter((function(e) {
                    return !Playlist.isIncompatible(e)
                }

            )),
        d=u.filter(Playlist.isEnabled);

        d.length||(d=u.filter((function(e) {
                        return !Playlist.isDisabled(e)
                    }

                )));

        var c=d.filter(Playlist.hasAttribute.bind(null, "BANDWIDTH")).map((function(e) {
                    var t=l.getSyncPoint(e, r, o, i)?1:2; return {
                        playlist:e, rebufferingImpact:Playlist.estimateSegmentRequestTime(a, n, e)*t-s
                    }
                }

            )),
        h=c.filter((function(e) {
                    return e.rebufferingImpact<=0
                }

            ));

        return stableSort(h, (function(e, t) {
                    return comparePlaylistBandwidth(t.playlist, e.playlist)
                }

            )),
        h.length?h[0]:(stableSort(c, (function(e, t) {
                        return e.rebufferingImpact-t.rebufferingImpact
                    }

                )), c[0]||null)
    }

    ,
    lowestBitrateCompatibleVariantSelector=function() {
        var e=this,
        t=this.playlists.master.playlists.filter(Playlist.isEnabled);

        return stableSort(t, (function(e, t) {
                    return comparePlaylistBandwidth(e, t)
                }

            )),
        t.filter((function(t) {
                    return ! !codecsForPlaylist(e.playlists.master, t).video
                }

            ))[0]||null
    }

    ,
    concatSegments=function(e) {
        var t,
        i=0;

        return e.bytes&&(t=new Uint8Array(e.bytes), e.segments.forEach((function(e) {
                        t.set(e, i), i+=e.byteLength
                    }

                ))),
        t
    }

    ,
    createCaptionsTrackIfNotExists=function(e, t, i) {
        if( !e[i]) {
            t.trigger( {
                    type:"usage", name:"vhs-608"
                }

            ),
            t.trigger( {
                    type:"usage", name:"hls-608"
                }

            );
            var n=i;/^cc708_/.test(i)&&(n="SERVICE"+i.split("_")[1]);
            var r=t.textTracks().getTrackById(n);
            if(r)e[i]=r;

            else {

                var a=i,
                s=i,
                o= !1,
                l=(t.options_.vhs&&t.options_.vhs.captionServices|| {}

                )[n];

                l&&(a=l.label, s=l.language, o=l.default),
                e[i]=t.addRemoteTextTrack( {
                        kind:"captions", id:n, default:o, label:a, language:s
                    }

                    ,  !1).track
            }
        }
    }

    ,
    addCaptionData=function(e) {
        var t=e.inbandTextTracks,
        i=e.captionArray,
        n=e.timestampOffset;

        if(i) {
            var r=window__default.default.WebKitDataCue||window__default.default.VTTCue;

            i.forEach((function(e) {
                        var i=e.stream; t[i].addCue(new r(e.startTime+n, e.endTime+n, e.text))
                    }

                ))
        }
    }

    ,
    deprecateOldCue=function(e) {
        Object.defineProperties(e.frame, {
                id: {
                    get:function() {
                        return videojs.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key
                    }
                }

                , value: {
                    get:function() {
                        return videojs.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data
                    }
                }

                , privateData: {
                    get:function() {
                        return videojs.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data
                    }
                }
            }

        )
    }

    ,
    addMetadata=function(e) {
        var t=e.inbandTextTracks,
        i=e.metadataArray,
        n=e.timestampOffset,
        r=e.videoDuration;

        if(i) {
            var a=window__default.default.WebKitDataCue||window__default.default.VTTCue,
            s=t.metadataTrack_;

            if(s&&(i.forEach((function(e) {
                                var t=e.cueTime+n;  !("number" !=typeof t||window__default.default.isNaN(t)||t<0)&&t<1/0&&e.frames.forEach((function(e) {
                                            var i=new a(t, t, e.value||e.url||e.data||""); i.frame=e, i.value=e, deprecateOldCue(i), s.addCue(i)
                                        }

                                    ))
                            }

                        )), s.cues&&s.cues.length)) {
                for(var o=s.cues, l=[], u=0; u<o.length; u++)o[u]&&l.push(o[u]);

                var d=l.reduce((function(e, t) {
                            var i=e[t.startTime]||[]; return i.push(t), e[t.startTime]=i, e
                        }

                    ), {}

                ),
                c=Object.keys(d).sort((function(e, t) {
                            return Number(e)-Number(t)
                        }

                    ));

                c.forEach((function(e, t) {
                            var i=d[e], n=Number(c[t+1])||r; i.forEach((function(e) {
                                        e.endTime=n
                                    }

                                ))
                        }

                    ))
            }
        }
    }

    ,
    createMetadataTrackIfNotExists=function(e, t, i) {
        e.metadataTrack_||(e.metadataTrack_=i.addRemoteTextTrack( {
                    kind:"metadata", label:"Timed Metadata"
                }

                ,  !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType=t)
    }

    ,
    removeCuesFromTrack=function(e, t, i) {
        var n,
        r;
        if(i&&i.cues)for(n=i.cues.length; n--; )(r=i.cues[n]).startTime>=e&&r.endTime<=t&&i.removeCue(r)
    }

    ,
    removeDuplicateCuesFromTrack=function(e) {
        var t=e.cues;

        if(t)for(var i=0; i<t.length; i++) {
            for(var n=[], r=0, a=0; a<t.length; a++)t[i].startTime===t[a].startTime&&t[i].endTime===t[a].endTime&&t[i].text===t[a].text&&++r>1&&n.push(t[a]);

            n.length&&n.forEach((function(t) {
                        return e.removeCue(t)
                    }

                ))
        }
    }

    ,
    gopsSafeToAlignWith=function(e, t, i) {
        if(null==t|| !e.length)return[];
        var n,
        r=Math.ceil((t-i+3)*clock.ONE_SECOND_IN_TS);
        for(n=0; n<e.length&& !(e[n].pts>r); n++);
        return e.slice(n)
    }

    ,
    updateGopBuffer=function(e, t, i) {
        if( !t.length)return e;
        if(i)return t.slice();
        for(var n=t[0].pts, r=0; r<e.length&& !(e[r].pts>=n); r++);
        return e.slice(0, r).concat(t)
    }

    ,
    removeGopBuffer=function(e, t, i, n) {
        for(var r=Math.ceil((t-n)*clock.ONE_SECOND_IN_TS), a=Math.ceil((i-n)*clock.ONE_SECOND_IN_TS), s=e.slice(), o=e.length; o--&& !(e[o].pts<=a); );
        if(-1===o)return s;
        for(var l=o+1; l--&& !(e[l].pts<=r); );
        return l=Math.max(l, 0),
        s.splice(l, o-l+1),
        s
    }

    ,
    shallowEqual=function(e, t) {
        if( !e&& !t|| !e&&t||e&& !t)return !1;
        if(e===t)return !0;
        var i=Object.keys(e).sort(),
        n=Object.keys(t).sort();
        if(i.length !==n.length)return !1;

        for(var r=0; r<i.length; r++) {
            var a=i[r];
            if(a !==n[r])return !1;
            if(e[a] !==t[a])return !1
        }

        return !0
    }

    ,
    QUOTA_EXCEEDED_ERR=22,
    getSyncSegmentCandidate=function(e, t, i) {
        t=t||[];

        for(var n=[], r=0, a=0; a<t.length; a++) {
            var s=t[a];
            if(e===s.timeline&&(n.push(a), (r+=s.duration)>i))return a
        }

        return 0===n.length?0:n[n.length-1]
    }

    ,
    MIN_BACK_BUFFER=1,
    CHECK_BUFFER_DELAY=500,
    finite=function(e) {
        return"number"==typeof e&&isFinite(e)
    }

    ,
    MIN_SEGMENT_DURATION_TO_SAVE_STATS=1/60,
    illegalMediaSwitch=function(e, t, i) {
        return"main"===e&&t&&i?i.hasAudio||i.hasVideo?t.hasVideo&& !i.hasVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":  !t.hasVideo&&i.hasVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null
    }

    ,
    safeBackBufferTrimTime=function(e, t, i) {
        var n=t-Config.BACK_BUFFER_LENGTH;
        e.length&&(n=Math.max(n, e.start(0)));
        var r=t-i;
        return Math.min(r, n)
    }

    ,
    segmentInfoString=function(e) {
        var t=e.startOfSegment,
        i=e.duration,
        n=e.segment,
        r=e.part,
        a=e.playlist,
        s=a.mediaSequence,
        o=a.id,
        l=a.segments,
        u=void 0===l?[]: l, d=e.mediaIndex, c=e.partIndex, h=e.timeline, p=u.length-1, f="mediaIndex/partIndex increment";
        e.getMediaInfoForTime?f="getMediaInfoForTime ("+e.getMediaInfoForTime+")": e.isSyncRequest&&(f="getSyncSegmentCandidate (isSyncRequest)"), e.independent&&(f+=" with independent "+e.independent);

        var m="number"==typeof c,
        g=e.segment.uri?"segment":"pre-segment",
        _=m?getKnownPartCount( {
                preloadSegment:n
            }

        )-1:0;
        return g+" ["+(s+d)+"/"+(s+p)+"]"+(m?" part ["+c+"/"+_+"]":"")+" segment start/end ["+n.start+" => "+n.end+"]"+(m?" part start/end ["+r.start+" => "+r.end+"]":"")+" startOfSegment ["+t+"] duration ["+i+"] timeline ["+h+"] selected by ["+f+"] playlist ["+o+"]"
    }

    ,
    timingInfoPropertyForMedia=function(e) {
        return e+"TimingInfo"
    }

    ,
    timestampOffsetForSegment=function(e) {
        var t=e.segmentTimeline,
        i=e.currentTimeline,
        n=e.startOfSegment,
        r=e.buffered;
        return e.overrideCheck||t !==i?t<i?n: r.length?r.end(r.length-1):n:null
    }

    ,
    shouldWaitForTimelineChange=function(e) {
        var t=e.timelineChangeController,
        i=e.currentTimeline,
        n=e.segmentTimeline,
        r=e.loaderType,
        a=e.audioDisabled;
        if(i===n)return !1;

        if("audio"===r) {
            var s=t.lastTimelineChange( {
                    type:"main"
                }

            );
            return !s||s.to !==n
        }

        if("main"===r&&a) {
            var o=t.pendingTimelineChange( {
                    type:"audio"
                }

            );
            return !o||o.to !==n
        }

        return !1
    }

    ,
    mediaDuration=function(e) {
        var t=0;

        return["video",
        "audio"].forEach((function(i) {
                    var n=e[i+"TimingInfo"]; if(n) {
                        var r, a=n.start, s=n.end; "bigint"==typeof a||"bigint"==typeof s?r=window__default.default.BigInt(s)-window__default.default.BigInt(a):"number"==typeof a&&"number"==typeof s&&(r=s-a), void 0 !==r&&r>t&&(t=r)
                    }
                }

            )),
        "bigint"==typeof t&&t<Number.MAX_SAFE_INTEGER&&(t=Number(t)),
        t
    }

    ,
    segmentTooLong=function(e) {
        var t=e.segmentDuration,
        i=e.maxDuration;
        return ! !t&&Math.round(t)>i+TIME_FUDGE_FACTOR
    }

    ,
    getTroublesomeSegmentDurationMessage=function(e, t) {
        if("hls" !==t)return null;

        var i=mediaDuration( {
                audioTimingInfo:e.audioTimingInfo, videoTimingInfo:e.videoTimingInfo
            }

        );
        if( !i)return null;

        var n=e.playlist.targetDuration,
        r=segmentTooLong( {
                segmentDuration:i, maxDuration:2*n
            }

        ),
        a=segmentTooLong( {
                segmentDuration:i, maxDuration:n
            }

        ),
        s="Segment with index "+e.mediaIndex+" from playlist "+e.playlist.id+" has a duration of "+i+" when the reported duration is "+e.duration+" and the target duration is "+n+". For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1";

        return r||a? {
            severity: r?"warn":"info", message:s
        }

        :null
    }

    ,
    SegmentLoader=function(e) {
        function t(t, i) {
            var n;
            if(n=e.call(this)||this,  !t)throw new TypeError("Initialization settings are required");
            if("function" !=typeof t.currentTime)throw new TypeError("No currentTime getter specified");
            if( !t.mediaSource)throw new TypeError("No MediaSource specified");

            return n.bandwidth=t.bandwidth,
            n.throughput= {
                rate: 0, count:0
            }

            ,
            n.roundTrip=NaN,
            n.resetStats_(),
            n.mediaIndex=null,
            n.partIndex=null,
            n.hasPlayed_=t.hasPlayed,
            n.currentTime_=t.currentTime,
            n.seekable_=t.seekable,
            n.seeking_=t.seeking,
            n.duration_=t.duration,
            n.mediaSource_=t.mediaSource,
            n.vhs_=t.vhs,
            n.loaderType_=t.loaderType,
            n.currentMediaInfo_=void 0,
            n.startingMediaInfo_=void 0,
            n.segmentMetadataTrack_=t.segmentMetadataTrack,
            n.goalBufferLength_=t.goalBufferLength,
            n.sourceType_=t.sourceType,
            n.sourceUpdater_=t.sourceUpdater,
            n.inbandTextTracks_=t.inbandTextTracks,
            n.state_="INIT",
            n.timelineChangeController_=t.timelineChangeController,
            n.shouldSaveSegmentTimingInfo_= !0,
            n.parse708captions_=t.parse708captions,
            n.useDtsForTimestampOffset_=t.useDtsForTimestampOffset,
            n.captionServices_=t.captionServices,
            n.experimentalExactManifestTimings=t.experimentalExactManifestTimings,
            n.checkBufferTimeout_=null,
            n.error_=void 0,
            n.currentTimeline_=-1,
            n.pendingSegment_=null,
            n.xhrOptions_=null,
            n.pendingSegments_=[],
            n.audioDisabled_= !1,
            n.isPendingTimestampOffset_= !1,
            n.gopBuffer_=[],
            n.timeMapping_=0,
            n.safeAppend_=videojs.browser.IE_VERSION>=11,
            n.appendInitSegment_= {
                audio:  !0, video: !0
            }

            ,
            n.playlistOfLastInitSegment_= {
                audio: null, video:null
            }

            ,
            n.callQueue_=[],
            n.loadQueue_=[],
            n.metadataQueue_= {
                id3: [], caption:[]
            }

            ,
            n.waitingOnRemove_= !1,
            n.quotaExceededErrorRetryTimeout_=null,
            n.activeInitSegmentId_=null,
            n.initSegments_= {}

            ,
            n.cacheEncryptionKeys_=t.cacheEncryptionKeys,
            n.keyCache_= {}

            ,
            n.decrypter_=t.decrypter,
            n.syncController_=t.syncController,
            n.syncPoint_= {
                segmentIndex: 0, time:0
            }

            ,
            n.transmuxer_=n.createTransmuxer_(),
            n.triggerSyncInfoUpdate_=function() {
                return n.trigger("syncinfoupdate")
            }

            ,
            n.syncController_.on("syncinfoupdate", n.triggerSyncInfoUpdate_),
            n.mediaSource_.addEventListener("sourceopen", (function() {
                        n.isEndOfStream_()||(n.ended_= !1)
                    }

                )),
            n.fetchAtBuffer_= !1,
            n.logger_=logger("SegmentLoader["+n.loaderType_+"]"),
            Object.defineProperty(_assertThisInitialized__default.default(n), "state", {
                    get:function() {
                        return this.state_
                    }

                    , set:function(e) {
                        e !==this.state_&&(this.logger_(this.state_+" -> "+e), this.state_=e, this.trigger("statechange"))
                    }
                }

            ),
            n.sourceUpdater_.on("ready", (function() {
                        n.hasEnoughInfoToAppend_()&&n.processCallQueue_()
                    }

                )),
            "main"===n.loaderType_&&n.timelineChangeController_.on("pendingtimelinechange", (function() {
                        n.hasEnoughInfoToAppend_()&&n.processCallQueue_()
                    }

                )),
            "audio"===n.loaderType_&&n.timelineChangeController_.on("timelinechange", (function() {
                        n.hasEnoughInfoToLoad_()&&n.processLoadQueue_(), n.hasEnoughInfoToAppend_()&&n.processCallQueue_()
                    }

                )),
            n
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.createTransmuxer_=function() {
            return segmentTransmuxer.createTransmuxer( {
                    remux: !1, alignGopsAtEnd:this.safeAppend_, keepOriginalTimestamps: !0, parse708captions:this.parse708captions_, captionServices:this.captionServices_
                }

            )
        }

        ,
        i.resetStats_=function() {
            this.mediaBytesTransferred=0,
            this.mediaRequests=0,
            this.mediaRequestsAborted=0,
            this.mediaRequestsTimedout=0,
            this.mediaRequestsErrored=0,
            this.mediaTransferDuration=0,
            this.mediaSecondsLoaded=0,
            this.mediaAppends=0
        }

        ,
        i.dispose=function() {
            this.trigger("dispose"),
            this.state="DISPOSED",
            this.pause(),
            this.abort_(),
            this.transmuxer_&&this.transmuxer_.terminate(),
            this.resetStats_(),
            this.checkBufferTimeout_&&window__default.default.clearTimeout(this.checkBufferTimeout_),
            this.syncController_&&this.triggerSyncInfoUpdate_&&this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_),
            this.off()
        }

        ,
        i.setAudio=function(e) {
            this.audioDisabled_= !e,
            e?this.appendInitSegment_.audio= !0: this.sourceUpdater_.removeAudio(0, this.duration_())
        }

        ,
        i.abort=function() {
            "WAITING"===this.state?(this.abort_(), this.state="READY", this.paused()||this.monitorBuffer_()): this.pendingSegment_&&(this.pendingSegment_=null)
        }

        ,
        i.abort_=function() {
            this.pendingSegment_&&this.pendingSegment_.abortRequests&&this.pendingSegment_.abortRequests(),
            this.pendingSegment_=null,
            this.callQueue_=[],
            this.loadQueue_=[],
            this.metadataQueue_.id3=[],
            this.metadataQueue_.caption=[],
            this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_),
            this.waitingOnRemove_= !1,
            window__default.default.clearTimeout(this.quotaExceededErrorRetryTimeout_),
            this.quotaExceededErrorRetryTimeout_=null
        }

        ,
        i.checkForAbort_=function(e) {
            return"APPENDING" !==this.state||this.pendingSegment_? !this.pendingSegment_||this.pendingSegment_.requestId !==e: (this.state="READY",  !0)
        }

        ,
        i.error=function(e) {
            return void 0 !==e&&(this.logger_("error occurred:", e), this.error_=e),
            this.pendingSegment_=null,
            this.error_
        }

        ,
        i.endOfStream=function() {
            this.ended_= !0,
            this.transmuxer_&&segmentTransmuxer.reset(this.transmuxer_),
            this.gopBuffer_.length=0,
            this.pause(),
            this.trigger("ended")
        }

        ,
        i.buffered_=function() {
            var e=this.getMediaInfo_();
            if( !this.sourceUpdater_|| !e)return videojs.createTimeRanges();

            if("main"===this.loaderType_) {
                var t=e.hasAudio,
                i=e.hasVideo,
                n=e.isMuxed;
                if(i&&t&& !this.audioDisabled_&& !n)return this.sourceUpdater_.buffered();
                if(i)return this.sourceUpdater_.videoBuffered()
            }

            return this.sourceUpdater_.audioBuffered()
        }

        ,
        i.initSegmentForMap=function(e, t) {
            if(void 0===t&&(t= !1),  !e)return null;
            var i=initSegmentId(e),
            n=this.initSegments_[i];

            return t&& !n&&e.bytes&&(this.initSegments_[i]=n= {
                    resolvedUri:e.resolvedUri, byterange:e.byterange, bytes:e.bytes, tracks:e.tracks, timescales:e.timescales
                }

            ),
            n||e
        }

        ,
        i.segmentKey=function(e, t) {
            if(void 0===t&&(t= !1),  !e)return null;
            var i=segmentKeyId(e),
            n=this.keyCache_[i];

            this.cacheEncryptionKeys_&&t&& !n&&e.bytes&&(this.keyCache_[i]=n= {
                    resolvedUri:e.resolvedUri, bytes:e.bytes
                }

            );

            var r= {
                resolvedUri: (n||e).resolvedUri
            }

            ;
            return n&&(r.bytes=n.bytes),
            r
        }

        ,
        i.couldBeginLoading_=function() {
            return this.playlist_&& !this.paused()
        }

        ,
        i.load=function() {
            if(this.monitorBuffer_(), this.playlist_)return"INIT"===this.state&&this.couldBeginLoading_()?this.init_(): void( !this.couldBeginLoading_()||"READY" !==this.state&&"INIT" !==this.state||(this.state="READY"))
        }

        ,
        i.init_=function() {
            return this.state="READY",
            this.resetEverything(),
            this.monitorBuffer_()
        }

        ,
        i.playlist=function(e, t) {
            if(void 0===t&&(t= {}

                ), e) {
                var i=this.playlist_,
                n=this.pendingSegment_;

                this.playlist_=e,
                this.xhrOptions_=t,
                "INIT"===this.state&&(e.syncInfo= {
                        mediaSequence:e.mediaSequence, time:0
                    }

                    , "main"===this.loaderType_&&this.syncController_.setDateTimeMappingForStart(e));
                var r=null;
                if(i&&(i.id?r=i.id:i.uri&&(r=i.uri)), this.logger_("playlist update ["+r+" => "+(e.id||e.uri)+"]"), this.trigger("syncinfoupdate"), "INIT"===this.state&&this.couldBeginLoading_())return this.init_();
                if( !i||i.uri !==e.uri)return null !==this.mediaIndex&&(e.endList?this.resyncLoader():this.resetLoader()),
                this.currentMediaInfo_=void 0,
                void this.trigger("playlistupdate");
                var a=e.mediaSequence-i.mediaSequence;
                if(this.logger_("live window shift ["+a+"]"), null !==this.mediaIndex)if(this.mediaIndex-=a, this.mediaIndex<0)this.mediaIndex=null,
                this.partIndex=null;

                else {
                    var s=this.playlist_.segments[this.mediaIndex];

                    if(this.partIndex&&( !s.parts|| !s.parts.length|| !s.parts[this.partIndex])) {
                        var o=this.mediaIndex;
                        this.logger_("currently processing part (index "+this.partIndex+") no longer exists."),
                        this.resetLoader(),
                        this.mediaIndex=o
                    }
                }

                n&&(n.mediaIndex-=a, n.mediaIndex<0?(n.mediaIndex=null, n.partIndex=null):(n.mediaIndex>=0&&(n.segment=e.segments[n.mediaIndex]), n.partIndex>=0&&n.segment.parts&&(n.part=n.segment.parts[n.partIndex]))),
                this.syncController_.saveExpiredSegmentInfo(i, e)
            }
        }

        ,
        i.pause=function() {
            this.checkBufferTimeout_&&(window__default.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_=null)
        }

        ,
        i.paused=function() {
            return null===this.checkBufferTimeout_
        }

        ,
        i.resetEverything=function(e) {

            this.ended_= !1,
            this.appendInitSegment_= {
                audio:  !0, video: !0
            }

            ,
            this.resetLoader(),
            this.remove(0, 1/0, e),
            this.transmuxer_&&(this.transmuxer_.postMessage( {
                        action:"clearAllMp4Captions"
                    }

                ), this.transmuxer_.postMessage( {
                        action:"reset"
                    }

                ))
        }

        ,
        i.resetLoader=function() {
            this.fetchAtBuffer_= !1,
            this.resyncLoader()
        }

        ,
        i.resyncLoader=function() {

            this.transmuxer_&&segmentTransmuxer.reset(this.transmuxer_),
            this.mediaIndex=null,
            this.partIndex=null,
            this.syncPoint_=null,
            this.isPendingTimestampOffset_= !1,
            this.callQueue_=[],
            this.loadQueue_=[],
            this.metadataQueue_.id3=[],
            this.metadataQueue_.caption=[],
            this.abort(),
            this.transmuxer_&&this.transmuxer_.postMessage( {
                    action:"clearParsedMp4Captions"
                }

            )
        }

        ,
        i.remove=function(e, t, i, n) {
            if(void 0===i&&(i=function() {}

                ), void 0===n&&(n= !1), t===1/0&&(t=this.duration_()), t<=e)this.logger_("skipping remove because end ${end} is <= start ${start}");

            else if(this.sourceUpdater_&&this.getMediaInfo_()) {

                var r=1,
                a=function() {
                    0==--r&&i()
                }

                ;
                for(var s in !n&&this.audioDisabled_||(r++, this.sourceUpdater_.removeAudio(e, t, a)), (n||"main"===this.loaderType_)&&(this.gopBuffer_=removeGopBuffer(this.gopBuffer_, e, t, this.timeMapping_), r++, this.sourceUpdater_.removeVideo(e, t, a)), this.inbandTextTracks_)removeCuesFromTrack(e, t, this.inbandTextTracks_[s]);
                removeCuesFromTrack(e, t, this.segmentMetadataTrack_),
                a()
            }

            else this.logger_("skipping remove because no source updater or starting media info")
        }

        ,
        i.monitorBuffer_=function() {
            this.checkBufferTimeout_&&window__default.default.clearTimeout(this.checkBufferTimeout_),
            this.checkBufferTimeout_=window__default.default.setTimeout(this.monitorBufferTick_.bind(this), 1)
        }

        ,
        i.monitorBufferTick_=function() {
            "READY"===this.state&&this.fillBuffer_(),
            this.checkBufferTimeout_&&window__default.default.clearTimeout(this.checkBufferTimeout_),
            this.checkBufferTimeout_=window__default.default.setTimeout(this.monitorBufferTick_.bind(this), CHECK_BUFFER_DELAY)
        }

        ,
        i.fillBuffer_=function() {
            if( !this.sourceUpdater_.updating()) {
                var e=this.chooseNextRequest_();

                e&&("number"==typeof e.timestampOffset&&(this.isPendingTimestampOffset_= !1, this.timelineChangeController_.pendingTimelineChange( {
                                type:this.loaderType_, from:this.currentTimeline_, to:e.timeline
                            }

                        )), this.loadSegment_(e))
            }
        }

        ,
        i.isEndOfStream_=function(e, t, i) {
            if(void 0===e&&(e=this.mediaIndex), void 0===t&&(t=this.playlist_), void 0===i&&(i=this.partIndex),  !t|| !this.mediaSource_)return !1;
            var n="number"==typeof e&&t.segments[e],
            r=e+1===t.segments.length,
            a= !n|| !n.parts||i+1===n.parts.length;
            return t.endList&&"open"===this.mediaSource_.readyState&&r&&a
        }

        ,
        i.chooseNextRequest_=function() {
            var e=this.buffered_(),
            t=lastBufferedEnd(e)||0,
            i=timeAheadOf(e, this.currentTime_()),
            n= !this.hasPlayed_()&&i>=1,
            r=i>=this.goalBufferLength_(),
            a=this.playlist_.segments;
            if( !a.length||n||r)return null;
            this.syncPoint_=this.syncPoint_||this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());

            var s= {
                partIndex: null, mediaIndex:null, startOfSegment:null, playlist:this.playlist_, isSyncRequest:Boolean( !this.syncPoint_)
            }

            ;
            if(s.isSyncRequest)s.mediaIndex=getSyncSegmentCandidate(this.currentTimeline_, a, t);

            else if(null !==this.mediaIndex) {
                var o=a[this.mediaIndex],
                l="number"==typeof this.partIndex?this.partIndex: -1;
                s.startOfSegment=o.end?o.end: t, o.parts&&o.parts[l+1]?(s.mediaIndex=this.mediaIndex, s.partIndex=l+1):s.mediaIndex=this.mediaIndex+1
            }

            else {
                var u=Playlist.getMediaInfoForTime( {
                        experimentalExactManifestTimings:this.experimentalExactManifestTimings, playlist:this.playlist_, currentTime:this.fetchAtBuffer_?t:this.currentTime_(), startingPartIndex:this.syncPoint_.partIndex, startingSegmentIndex:this.syncPoint_.segmentIndex, startTime:this.syncPoint_.time
                    }

                ),
                d=u.segmentIndex,
                c=u.startTime,
                h=u.partIndex;
                s.getMediaInfoForTime=this.fetchAtBuffer_?"bufferedEnd "+t:"currentTime "+this.currentTime_(),
                s.mediaIndex=d,
                s.startOfSegment=c,
                s.partIndex=h
            }

            var p=a[s.mediaIndex],
            f=p&&"number"==typeof s.partIndex&&p.parts&&p.parts[s.partIndex];
            if( !p||"number"==typeof s.partIndex&& !f)return null;

            if("number" !=typeof s.partIndex&&p.parts&&(s.partIndex=0, f=p.parts[0]),  !i&&f&& !f.independent)if(0===s.partIndex) {
                var m=a[s.mediaIndex-1],
                g=m.parts&&m.parts.length&&m.parts[m.parts.length-1];
                g&&g.independent&&(s.mediaIndex-=1, s.partIndex=m.parts.length-1, s.independent="previous segment")
            }

            else p.parts[s.partIndex-1].independent&&(s.partIndex-=1, s.independent="previous part");
            var _=this.mediaSource_&&"ended"===this.mediaSource_.readyState;
            return s.mediaIndex>=a.length-1&&_&& !this.seeking_()?null:this.generateSegmentInfo_(s)
        }

        ,
        i.generateSegmentInfo_=function(e) {

            var t=e.independent,
            i=e.playlist,
            n=e.mediaIndex,
            r=e.startOfSegment,
            a=e.isSyncRequest,
            s=e.partIndex,
            o=e.forceTimestampOffset,
            l=e.getMediaInfoForTime,
            u=i.segments[n],
            d="number"==typeof s&&u.parts[s],
            c= {
                requestId: "segment-loader-"+Math.random(), uri:d&&d.resolvedUri||u.resolvedUri, mediaIndex:n, partIndex:d?s:null, isSyncRequest:a, startOfSegment:r, playlist:i, bytes:null, encryptedBytes:null, timestampOffset:null, timeline:u.timeline, duration:d&&d.duration||u.duration, segment:u, part:d, byteLength:0, transmuxer:this.transmuxer_, getMediaInfoForTime:l, independent:t
            }

            ,
            h=void 0 !==o?o:this.isPendingTimestampOffset_;

            c.timestampOffset=this.timestampOffsetForSegment_( {
                    segmentTimeline:u.timeline, currentTimeline:this.currentTimeline_, startOfSegment:r, buffered:this.buffered_(), overrideCheck:h
                }

            );
            var p=lastBufferedEnd(this.sourceUpdater_.audioBuffered());
            return"number"==typeof p&&(c.audioAppendStart=p-this.sourceUpdater_.audioTimestampOffset()),
            this.sourceUpdater_.videoBuffered().length&&(c.gopsToAlignWith=gopsSafeToAlignWith(this.gopBuffer_, this.currentTime_()-this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)),
            c
        }

        ,
        i.timestampOffsetForSegment_=function(e) {
            return timestampOffsetForSegment(e)
        }

        ,
        i.earlyAbortWhenNeeded_=function(e) {
            if( !this.vhs_.tech_.paused()&&this.xhrOptions_.timeout&&this.playlist_.attributes.BANDWIDTH&& !(Date.now()-(e.firstBytesReceivedAt||Date.now())<1e3)) {
                var t=this.currentTime_(),
                i=e.bandwidth,
                n=this.pendingSegment_.duration,
                r=Playlist.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
                a=timeUntilRebuffer(this.buffered_(), t, this.vhs_.tech_.playbackRate())-1;

                if( !(r<=a)) {
                    var s=minRebufferMaxBandwidthSelector( {
                            master:this.vhs_.playlists.master, currentTime:t, bandwidth:i, duration:this.duration_(), segmentDuration:n, timeUntilRebuffer:a, currentTimeline:this.currentTimeline_, syncController:this.syncController_
                        }

                    );

                    if(s) {
                        var o=r-a-s.rebufferingImpact,
                        l=.5;
                        a<=TIME_FUDGE_FACTOR&&(l=1),
                         !s.playlist||s.playlist.uri===this.playlist_.uri||o<l||(this.bandwidth=s.playlist.attributes.BANDWIDTH*Config.BANDWIDTH_VARIANCE+1, this.trigger("earlyabort"))
                    }
                }
            }
        }

        ,
        i.handleAbort_=function(e) {
            this.logger_("Aborting "+segmentInfoString(e)),
            this.mediaRequestsAborted+=1
        }

        ,
        i.handleProgress_=function(e, t) {
            this.earlyAbortWhenNeeded_(t.stats),
            this.checkForAbort_(t.requestId)||this.trigger("progress")
        }

        ,
        i.handleTrackInfo_=function(e, t) {

            this.earlyAbortWhenNeeded_(e.stats),
            this.checkForAbort_(e.requestId)||this.checkForIllegalMediaSwitch(t)||(t=t|| {}

                , shallowEqual(this.currentMediaInfo_, t)||(this.appendInitSegment_= {
                        audio: !0, video: !0
                    }

                    , this.startingMediaInfo_=t, this.currentMediaInfo_=t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), this.checkForAbort_(e.requestId)||(this.pendingSegment_.trackInfo=t, this.hasEnoughInfoToAppend_()&&this.processCallQueue_()))
        }

        ,
        i.handleTimingInfo_=function(e, t, i, n) {
            if(this.earlyAbortWhenNeeded_(e.stats),  !this.checkForAbort_(e.requestId)) {
                var r=this.pendingSegment_,
                a=timingInfoPropertyForMedia(t);

                r[a]=r[a]|| {}

                ,
                r[a][i]=n,
                this.logger_("timinginfo: "+t+" - "+i+" - "+n),
                this.hasEnoughInfoToAppend_()&&this.processCallQueue_()
            }
        }

        ,
        i.handleCaptions_=function(e, t) {
            var i=this;

            if(this.earlyAbortWhenNeeded_(e.stats),  !this.checkForAbort_(e.requestId))if(0 !==t.length)if(this.pendingSegment_.hasAppendedData_) {

                var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset():this.sourceUpdater_.videoTimestampOffset(),
                r= {}

                ;

                t.forEach((function(e) {
                            r[e.stream]=r[e.stream]|| {
                                startTime:1/0, captions:[], endTime:0
                            }

                            ; var t=r[e.stream]; t.startTime=Math.min(t.startTime, e.startTime+n), t.endTime=Math.max(t.endTime, e.endTime+n), t.captions.push(e)
                        }

                    )),
                Object.keys(r).forEach((function(e) {
                            var t=r[e], a=t.startTime, s=t.endTime, o=t.captions, l=i.inbandTextTracks_; i.logger_("adding cues from "+a+" -> "+s+" for "+e), createCaptionsTrackIfNotExists(l, i.vhs_.tech_, e), removeCuesFromTrack(a, s, l[e]), addCaptionData( {
                                    captionArray:o, inbandTextTracks:l, timestampOffset:n
                                }

                            )
                        }

                    )),
                this.transmuxer_&&this.transmuxer_.postMessage( {
                        action:"clearParsedMp4Captions"
                    }

                )
            }

            else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
            else this.logger_("SegmentLoader received no captions from a caption event")
        }

        ,
        i.handleId3_=function(e, t, i) {
            if(this.earlyAbortWhenNeeded_(e.stats),  !this.checkForAbort_(e.requestId))if(this.pendingSegment_.hasAppendedData_) {
                var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset(): this.sourceUpdater_.videoTimestampOffset();

                createMetadataTrackIfNotExists(this.inbandTextTracks_, i, this.vhs_.tech_),
                addMetadata( {
                        inbandTextTracks:this.inbandTextTracks_, metadataArray:t, timestampOffset:n, videoDuration:this.duration_()
                    }

                )
            }

            else this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i))
        }

        ,
        i.processMetadataQueue_=function() {
            this.metadataQueue_.id3.forEach((function(e) {
                        return e()
                    }

                )),
            this.metadataQueue_.caption.forEach((function(e) {
                        return e()
                    }

                )),
            this.metadataQueue_.id3=[],
            this.metadataQueue_.caption=[]
        }

        ,
        i.processCallQueue_=function() {
            var e=this.callQueue_;

            this.callQueue_=[],
            e.forEach((function(e) {
                        return e()
                    }

                ))
        }

        ,
        i.processLoadQueue_=function() {
            var e=this.loadQueue_;

            this.loadQueue_=[],
            e.forEach((function(e) {
                        return e()
                    }

                ))
        }

        ,
        i.hasEnoughInfoToLoad_=function() {
            if("audio" !==this.loaderType_)return !0;
            var e=this.pendingSegment_;

            return !( !e||this.getCurrentMediaInfo_()&&shouldWaitForTimelineChange( {
                        timelineChangeController:this.timelineChangeController_, currentTimeline:this.currentTimeline_, segmentTimeline:e.timeline, loaderType:this.loaderType_, audioDisabled:this.audioDisabled_
                    }

                ))
        }

        ,
        i.getCurrentMediaInfo_=function(e) {
            return void 0===e&&(e=this.pendingSegment_),
            e&&e.trackInfo||this.currentMediaInfo_
        }

        ,
        i.getMediaInfo_=function(e) {
            return void 0===e&&(e=this.pendingSegment_),
            this.getCurrentMediaInfo_(e)||this.startingMediaInfo_
        }

        ,
        i.hasEnoughInfoToAppend_=function() {
            if( !this.sourceUpdater_.ready())return !1;
            if(this.waitingOnRemove_||this.quotaExceededErrorRetryTimeout_)return !1;
            var e=this.pendingSegment_,
            t=this.getCurrentMediaInfo_();
            if( !e|| !t)return !1;
            var i=t.hasAudio,
            n=t.hasVideo,
            r=t.isMuxed;

            return !(n&& !e.videoTimingInfo||i&& !this.audioDisabled_&& !r&& !e.audioTimingInfo||shouldWaitForTimelineChange( {
                        timelineChangeController:this.timelineChangeController_, currentTimeline:this.currentTimeline_, segmentTimeline:e.timeline, loaderType:this.loaderType_, audioDisabled:this.audioDisabled_
                    }

                ))
        }

        ,
        i.handleData_=function(e, t) {
            if(this.earlyAbortWhenNeeded_(e.stats),  !this.checkForAbort_(e.requestId))if( !this.callQueue_.length&&this.hasEnoughInfoToAppend_()) {
                var i=this.pendingSegment_;

                if(this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.part||i.segment), "closed" !==this.mediaSource_.readyState) {
                    if(e.map&&(e.map=this.initSegmentForMap(e.map,  !0), i.segment.map=e.map), e.key&&this.segmentKey(e.key,  !0), i.isFmp4=e.isFmp4, i.timingInfo=i.timingInfo|| {}

                        , i.isFmp4)this.trigger("fmp4"),
                    i.timingInfo.start=i[timingInfoPropertyForMedia(t.type)].start;

                    else {
                        var n,
                        r=this.getCurrentMediaInfo_(),
                        a="main"===this.loaderType_&&r&&r.hasVideo;

                        a&&(n=i.videoTimingInfo.start),
                        i.timingInfo.start=this.trueSegmentStart_( {
                                currentStart:i.timingInfo.start, playlist:i.playlist, mediaIndex:i.mediaIndex, currentVideoTimestampOffset:this.sourceUpdater_.videoTimestampOffset(), useVideoTimingInfo:a, firstVideoFrameTimeForData:n, videoTimingInfo:i.videoTimingInfo, audioTimingInfo:i.audioTimingInfo
                            }

                        )
                    }

                    if(this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), i.isSyncRequest) {

                        this.updateTimingInfoEnd_(i),
                        this.syncController_.saveSegmentTimingInfo( {
                                segmentInfo:i, shouldSaveTimelineMapping:"main"===this.loaderType_
                            }

                        );
                        var s=this.chooseNextRequest_();
                        if(s.mediaIndex !==i.mediaIndex||s.partIndex !==i.partIndex)return void this.logger_("sync segment was incorrect, not appending");
                        this.logger_("sync segment was correct, appending")
                    }

                    i.hasAppendedData_= !0,
                    this.processMetadataQueue_(),
                    this.appendData_(i, t)
                }
            }

            else this.callQueue_.push(this.handleData_.bind(this, e, t))
        }

        ,
        i.updateAppendInitSegmentStatus=function(e, t) {
            "main" !==this.loaderType_||"number" !=typeof e.timestampOffset||e.changedTimestampOffset||(this.appendInitSegment_= {
                    audio: !0, video: !0
                }

            ),
            this.playlistOfLastInitSegment_[t] !==e.playlist&&(this.appendInitSegment_[t]= !0)
        }

        ,
        i.getInitSegmentAndUpdateState_=function(e) {
            var t=e.type,
            i=e.initSegment,
            n=e.map,
            r=e.playlist;

            if(n) {
                var a=initSegmentId(n);
                if(this.activeInitSegmentId_===a)return null;
                i=this.initSegmentForMap(n,  !0).bytes,
                this.activeInitSegmentId_=a
            }

            return i&&this.appendInitSegment_[t]?(this.playlistOfLastInitSegment_[t]=r, this.appendInitSegment_[t]= !1, this.activeInitSegmentId_=null, i):null
        }

        ,
        i.handleQuotaExceededError_=function(e, t) {
            var i=this,
            n=e.segmentInfo,
            r=e.type,
            a=e.bytes,
            s=this.sourceUpdater_.audioBuffered(),
            o=this.sourceUpdater_.videoBuffered();
            s.length>1&&this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: "+timeRangesToArray(s).join(", ")),
            o.length>1&&this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: "+timeRangesToArray(o).join(", "));
            var l=s.length?s.start(0): 0, u=s.length?s.end(s.length-1):0, d=o.length?o.start(0):0, c=o.length?o.end(o.length-1):0;

            if(u-l<=MIN_BACK_BUFFER&&c-d<=MIN_BACK_BUFFER)return this.logger_("On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: "+a.byteLength+", audio buffer: "+timeRangesToArray(s).join(", ")+", video buffer: "+timeRangesToArray(o).join(", ")+", "),
            this.error( {
                    message:"Quota exceeded error with append of a single segment of content", excludeUntil:1/0
                }

            ),
            void this.trigger("error");

            this.waitingOnRemove_= !0,
            this.callQueue_.push(this.appendToSourceBuffer_.bind(this, {
                        segmentInfo:n, type:r, bytes:a
                    }

                ));
            var h=this.currentTime_()-MIN_BACK_BUFFER;

            this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to "+h),
            this.remove(0, h, (function() {
                        i.logger_("On QUOTA_EXCEEDED_ERR, retrying append in "+MIN_BACK_BUFFER+"s"), i.waitingOnRemove_= !1, i.quotaExceededErrorRetryTimeout_=window__default.default.setTimeout((function() {
                                    i.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), i.quotaExceededErrorRetryTimeout_=null, i.processCallQueue_()
                                }

                            ), 1e3*MIN_BACK_BUFFER)
                    }

                ),  !0)
        }

        ,
        i.handleAppendError_=function(e, t) {
            var i=e.segmentInfo,
            n=e.type,
            r=e.bytes;

            t&&(t.code !==QUOTA_EXCEEDED_ERR?(this.logger_("Received non QUOTA_EXCEEDED_ERR on append", t), this.error(n+" append of "+r.length+"b failed for segment #"+i.mediaIndex+" in playlist "+i.playlist.id), this.trigger("appenderror")):this.handleQuotaExceededError_( {
                        segmentInfo:i, type:n, bytes:r
                    }

                ))
        }

        ,
        i.appendToSourceBuffer_=function(e) {
            var t=e.segmentInfo,
            i=e.type,
            n=e.initSegment,
            r=e.data,
            a=e.bytes;

            if( !a) {
                var s=[r],
                o=r.byteLength;

                n&&(s.unshift(n), o+=n.byteLength),
                a=concatSegments( {
                        bytes:o, segments:s
                    }

                )
            }

            this.sourceUpdater_.appendBuffer( {
                    segmentInfo:t, type:i, bytes:a
                }

                , this.handleAppendError_.bind(this, {
                        segmentInfo:t, type:i, bytes:a
                    }

                ))
        }

        ,
        i.handleSegmentTimingInfo_=function(e, t, i) {
            if(this.pendingSegment_&&t===this.pendingSegment_.requestId) {
                var n=this.pendingSegment_.segment,
                r=e+"TimingInfo";

                n[r]||(n[r]= {}

                ),
                n[r].transmuxerPrependedSeconds=i.prependedContentDuration||0,
                n[r].transmuxedPresentationStart=i.start.presentation,
                n[r].transmuxedDecodeStart=i.start.decode,
                n[r].transmuxedPresentationEnd=i.end.presentation,
                n[r].transmuxedDecodeEnd=i.end.decode,
                n[r].baseMediaDecodeTime=i.baseMediaDecodeTime
            }
        }

        ,
        i.appendData_=function(e, t) {
            var i=t.type,
            n=t.data;

            if(n&&n.byteLength&&("audio" !==i|| !this.audioDisabled_)) {
                var r=this.getInitSegmentAndUpdateState_( {
                        type:i, initSegment:t.initSegment, playlist:e.playlist, map:e.isFmp4?e.segment.map:null
                    }

                );

                this.appendToSourceBuffer_( {
                        segmentInfo:e, type:i, initSegment:r, data:n
                    }

                )
            }
        }

        ,
        i.loadSegment_=function(e) {
            var t=this;

            this.state="WAITING",
            this.pendingSegment_=e,
            this.trimBackBuffer_(e),
            "number"==typeof e.timestampOffset&&this.transmuxer_&&this.transmuxer_.postMessage( {
                    action:"clearAllMp4Captions"
                }

            ),
            this.hasEnoughInfoToLoad_()?this.updateTransmuxerAndRequestSegment_(e):this.loadQueue_.push((function() {
                        var i=_extends__default.default( {}

                            , e, {
                                forceTimestampOffset: !0
                            }

                        ); _extends__default.default(e, t.generateSegmentInfo_(i)), t.isPendingTimestampOffset_= !1, t.updateTransmuxerAndRequestSegment_(e)
                    }

                ))
        }

        ,
        i.updateTransmuxerAndRequestSegment_=function(e) {
            var t=this;

            this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset)&&(this.gopBuffer_.length=0, e.gopsToAlignWith=[], this.timeMapping_=0, this.transmuxer_.postMessage( {
                        action:"reset"
                    }

                ), this.transmuxer_.postMessage( {
                        action:"setTimestampOffset", timestampOffset:e.timestampOffset
                    }

                ));
            var i=this.createSimplifiedSegmentObj_(e),
            n=this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex),
            r=null !==this.mediaIndex,
            a=e.timeline !==this.currentTimeline_&&e.timeline>0,
            s=n||r&&a;

            this.logger_("Requesting "+segmentInfoString(e)),
            i.map&& !i.map.bytes&&(this.logger_("going to request init segment."), this.appendInitSegment_= {
                    video: !0, audio: !0
                }

            ),
            e.abortRequests=mediaSegmentRequest( {
                    xhr:this.vhs_.xhr, xhrOptions:this.xhrOptions_, decryptionWorker:this.decrypter_, segment:i, abortFn:this.handleAbort_.bind(this, e), progressFn:this.handleProgress_.bind(this), trackInfoFn:this.handleTrackInfo_.bind(this), timingInfoFn:this.handleTimingInfo_.bind(this), videoSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this, "video", e.requestId), audioSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId), captionsFn:this.handleCaptions_.bind(this), isEndOfTimeline:s, endedTimelineFn:function() {
                        t.logger_("received endedtimeline callback")
                    }

                    , id3Fn:this.handleId3_.bind(this), dataFn:this.handleData_.bind(this), doneFn:this.segmentRequestFinished_.bind(this), onTransmuxerLog:function(i) {
                        var n=i.message, r=i.level, a=i.stream; t.logger_(segmentInfoString(e)+" logged from transmuxer stream "+a+" as a "+r+": "+n)
                    }
                }

            )
        }

        ,
        i.trimBackBuffer_=function(e) {
            var t=safeBackBufferTrimTime(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration||10);
            t>0&&this.remove(0, t)
        }

        ,
        i.createSimplifiedSegmentObj_=function(e) {

            var t=e.segment,
            i=e.part,
            n= {
                resolvedUri: i?i.resolvedUri:t.resolvedUri, byterange:i?i.byterange:t.byterange, requestId:e.requestId, transmuxer:e.transmuxer, audioAppendStart:e.audioAppendStart, gopsToAlignWith:e.gopsToAlignWith, part:e.part
            }

            ,
            r=e.playlist.segments[e.mediaIndex-1];

            if(r&&r.timeline===t.timeline&&(r.videoTimingInfo?n.baseStartTime=r.videoTimingInfo.transmuxedDecodeEnd:r.audioTimingInfo&&(n.baseStartTime=r.audioTimingInfo.transmuxedDecodeEnd)), t.key) {
                var a=t.key.iv||new Uint32Array([0, 0, 0, e.mediaIndex+e.playlist.mediaSequence]);
                n.key=this.segmentKey(t.key),
                n.key.iv=a
            }

            return t.map&&(n.map=this.initSegmentForMap(t.map)),
            n
        }

        ,
        i.saveTransferStats_=function(e) {
            this.mediaRequests+=1,
            e&&(this.mediaBytesTransferred+=e.bytesReceived, this.mediaTransferDuration+=e.roundTripTime)
        }

        ,
        i.saveBandwidthRelatedStats_=function(e, t) {
            this.pendingSegment_.byteLength=t.bytesReceived,
            e<MIN_SEGMENT_DURATION_TO_SAVE_STATS?this.logger_("Ignoring segment's bandwidth because its duration of "+e+" is less than the min to record "+MIN_SEGMENT_DURATION_TO_SAVE_STATS): (this.bandwidth=t.bandwidth, this.roundTrip=t.roundTripTime)
        }

        ,
        i.handleTimeout_=function() {
            this.mediaRequestsTimedout+=1,
            this.bandwidth=1,
            this.roundTrip=NaN,
            this.trigger("bandwidthupdate")
        }

        ,
        i.segmentRequestFinished_=function(e, t, i) {
            if(this.callQueue_.length)this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));

            else if(this.saveTransferStats_(t.stats), this.pendingSegment_&&t.requestId===this.pendingSegment_.requestId) {
                if(e) {
                    if(this.pendingSegment_=null, this.state="READY", e.code===REQUEST_ERRORS.ABORTED)return;
                    return this.pause(),
                    e.code===REQUEST_ERRORS.TIMEOUT?void this.handleTimeout_(): (this.mediaRequestsErrored+=1, this.error(e), void this.trigger("error"))
                }

                var n=this.pendingSegment_;
                this.saveBandwidthRelatedStats_(n.duration, t.stats),
                n.endOfAllRequests=t.endOfAllRequests,
                i.gopInfo&&(this.gopBuffer_=updateGopBuffer(this.gopBuffer_, i.gopInfo, this.safeAppend_)),
                this.state="APPENDING",
                this.trigger("appending"),
                this.waitForAppendsToComplete_(n)
            }
        }

        ,
        i.setTimeMapping_=function(e) {
            var t=this.syncController_.mappingForTimeline(e);
            null !==t&&(this.timeMapping_=t)
        }

        ,
        i.updateMediaSecondsLoaded_=function(e) {
            "number"==typeof e.start&&"number"==typeof e.end?this.mediaSecondsLoaded+=e.end-e.start: this.mediaSecondsLoaded+=e.duration
        }

        ,
        i.shouldUpdateTransmuxerTimestampOffset_=function(e) {
            return null !==e&&("main"===this.loaderType_&&e !==this.sourceUpdater_.videoTimestampOffset()|| !this.audioDisabled_&&e !==this.sourceUpdater_.audioTimestampOffset())
        }

        ,
        i.trueSegmentStart_=function(e) {
            var t=e.currentStart,
            i=e.playlist,
            n=e.mediaIndex,
            r=e.firstVideoFrameTimeForData,
            a=e.currentVideoTimestampOffset,
            s=e.useVideoTimingInfo,
            o=e.videoTimingInfo,
            l=e.audioTimingInfo;
            if(void 0 !==t)return t;
            if( !s)return l.start;
            var u=i.segments[n-1];
            return 0 !==n&&u&&void 0 !==u.start&&u.end===r+a?o.start: r
        }

        ,
        i.waitForAppendsToComplete_=function(e) {
            var t=this.getCurrentMediaInfo_(e);

            if( !t)return this.error( {
                    message:"No starting media returned, likely due to an unsupported media format.", blacklistDuration:1/0
                }

            ),
            void this.trigger("error");
            var i=t.hasAudio,
            n=t.hasVideo,
            r=t.isMuxed,
            a="main"===this.loaderType_&&n,
            s= !this.audioDisabled_&&i&& !r;

            if(e.waitingOnAppends=0,  !e.hasAppendedData_)return e.timingInfo||"number" !=typeof e.timestampOffset||(this.isPendingTimestampOffset_= !0),
            e.timingInfo= {
                start: 0
            }

            ,
            e.waitingOnAppends++,
            this.isPendingTimestampOffset_||(this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()),
            void this.checkAppendsDone_(e);
            a&&e.waitingOnAppends++,
            s&&e.waitingOnAppends++,
            a&&this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)),
            s&&this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))
        }

        ,
        i.checkAppendsDone_=function(e) {
            this.checkForAbort_(e.requestId)||(e.waitingOnAppends--, 0===e.waitingOnAppends&&this.handleAppendsDone_())
        }

        ,
        i.checkForIllegalMediaSwitch=function(e) {
            var t=illegalMediaSwitch(this.loaderType_, this.getCurrentMediaInfo_(), e);

            return ! !t&&(this.error( {
                        message:t, blacklistDuration:1/0
                    }

                ), this.trigger("error"),  !0)
        }

        ,
        i.updateSourceBufferTimestampOffset_=function(e) {
            if(null !==e.timestampOffset&&"number"==typeof e.timingInfo.start&& !e.changedTimestampOffset&&"main"===this.loaderType_) {
                var t= !1;

                e.timestampOffset-=this.getSegmentStartTimeForTimestampOffsetCalculation_( {
                        videoTimingInfo:e.segment.videoTimingInfo, audioTimingInfo:e.segment.audioTimingInfo, timingInfo:e.timingInfo
                    }

                ),
                e.changedTimestampOffset= !0,
                e.timestampOffset !==this.sourceUpdater_.videoTimestampOffset()&&(this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), t= !0),
                e.timestampOffset !==this.sourceUpdater_.audioTimestampOffset()&&(this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), t= !0),
                t&&this.trigger("timestampoffset")
            }
        }

        ,
        i.getSegmentStartTimeForTimestampOffsetCalculation_=function(e) {
            var t=e.videoTimingInfo,
            i=e.audioTimingInfo,
            n=e.timingInfo;
            return this.useDtsForTimestampOffset_?t&&"number"==typeof t.transmuxedDecodeStart?t.transmuxedDecodeStart: i&&"number"==typeof i.transmuxedDecodeStart?i.transmuxedDecodeStart:n.start:n.start
        }

        ,
        i.updateTimingInfoEnd_=function(e) {
            e.timingInfo=e.timingInfo|| {}

            ;
            var t=this.getMediaInfo_(),
            i="main"===this.loaderType_&&t&&t.hasVideo&&e.videoTimingInfo?e.videoTimingInfo:e.audioTimingInfo;
            i&&(e.timingInfo.end="number"==typeof i.end?i.end:i.start+e.duration)
        }

        ,
        i.handleAppendsDone_=function() {
            if(this.pendingSegment_&&this.trigger("appendsdone"),  !this.pendingSegment_)return this.state="READY",
            void(this.paused()||this.monitorBuffer_());
            var e=this.pendingSegment_;

            this.updateTimingInfoEnd_(e),
            this.shouldSaveSegmentTimingInfo_&&this.syncController_.saveSegmentTimingInfo( {
                    segmentInfo:e, shouldSaveTimelineMapping:"main"===this.loaderType_
                }

            );
            var t=getTroublesomeSegmentDurationMessage(e, this.sourceType_);

            if(t&&("warn"===t.severity?videojs.log.warn(t.message):this.logger_(t.message)), this.recordThroughput_(e), this.pendingSegment_=null, this.state="READY",  !e.isSyncRequest||(this.trigger("syncinfoupdate"), e.hasAppendedData_)) {

                this.logger_("Appended "+segmentInfoString(e)),
                this.addSegmentMetadataCue_(e),
                this.fetchAtBuffer_= !0,
                this.currentTimeline_ !==e.timeline&&(this.timelineChangeController_.lastTimelineChange( {
                            type:this.loaderType_, from:this.currentTimeline_, to:e.timeline
                        }

                    ), "main" !==this.loaderType_||this.audioDisabled_||this.timelineChangeController_.lastTimelineChange( {
                            type:"audio", from:this.currentTimeline_, to:e.timeline
                        }

                    )),
                this.currentTimeline_=e.timeline,
                this.trigger("syncinfoupdate");
                var i=e.segment,
                n=e.part,
                r=i.end&&this.currentTime_()-i.end>3*e.playlist.targetDuration,
                a=n&&n.end&&this.currentTime_()-n.end>3*e.playlist.partTargetDuration;
                if(r||a)return this.logger_("bad "+(r?"segment":"part")+" "+segmentInfoString(e)),
                void this.resetEverything();
                null !==this.mediaIndex&&this.trigger("bandwidthupdate"),
                this.trigger("progress"),
                this.mediaIndex=e.mediaIndex,
                this.partIndex=e.partIndex,
                this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex)&&this.endOfStream(),
                this.trigger("appended"),
                e.hasAppendedData_&&this.mediaAppends++,
                this.paused()||this.monitorBuffer_()
            }

            else this.logger_("Throwing away un-appended sync request "+segmentInfoString(e))
        }

        ,
        i.recordThroughput_=function(e) {
            if(e.duration<MIN_SEGMENT_DURATION_TO_SAVE_STATS)this.logger_("Ignoring segment's throughput because its duration of "+e.duration+" is less than the min to record "+MIN_SEGMENT_DURATION_TO_SAVE_STATS);

            else {
                var t=this.throughput.rate,
                i=Date.now()-e.endOfAllRequests+1,
                n=Math.floor(e.byteLength/i*8*1e3);
                this.throughput.rate+=(n-t)/++this.throughput.count
            }
        }

        ,
        i.addSegmentMetadataCue_=function(e) {
            if(this.segmentMetadataTrack_) {
                var t=e.segment,
                i=t.start,
                n=t.end;

                if(finite(i)&&finite(n)) {
                    removeCuesFromTrack(i, n, this.segmentMetadataTrack_);

                    var r=window__default.default.WebKitDataCue||window__default.default.VTTCue,
                    a= {
                        custom: t.custom, dateTimeObject:t.dateTimeObject, dateTimeString:t.dateTimeString, bandwidth:e.playlist.attributes.BANDWIDTH, resolution:e.playlist.attributes.RESOLUTION, codecs:e.playlist.attributes.CODECS, byteLength:e.byteLength, uri:e.uri, timeline:e.timeline, playlist:e.playlist.id, start:i, end:n
                    }

                    ,
                    s=new r(i, n, JSON.stringify(a));
                    s.value=a,
                    this.segmentMetadataTrack_.addCue(s)
                }
            }
        }

        ,
        t
    }

    (videojs.EventTarget);

    function noop() {}

    var Vhs$1,
    toTitleCase=function(e) {
        return"string" !=typeof e?e:e.replace(/./, (function(e) {
                    return e.toUpperCase()
                }

            ))
    }

    ,
    bufferTypes=["video",
    "audio"],
    _updating=function(e, t) {
        var i=t[e+"Buffer"];
        return i&&i.updating||t.queuePending[e]
    }

    ,
    nextQueueIndexOfType=function(e, t) {
        for(var i=0; i<t.length; i++) {
            var n=t[i];
            if("mediaSource"===n.type)return null;
            if(n.type===e)return i
        }

        return null
    }

    ,
    shiftQueue=function e(t, i) {
        if(0 !==i.queue.length) {
            var n=0,
            r=i.queue[n];

            if("mediaSource" !==r.type) {
                if("mediaSource" !==t&&i.ready()&&"closed" !==i.mediaSource.readyState&& !_updating(t, i)) {
                    if(r.type !==t) {
                        if(null===(n=nextQueueIndexOfType(t, i.queue)))return;
                        r=i.queue[n]
                    }

                    return i.queue.splice(n, 1),
                    i.queuePending[t]=r,
                    r.action(t, i),
                    r.doneFn?void 0:(i.queuePending[t]=null, void e(t, i))
                }
            }

            else i.updating()||"closed"===i.mediaSource.readyState||(i.queue.shift(), r.action(i), r.doneFn&&r.doneFn(), e("audio", i), e("video", i))
        }
    }

    ,
    cleanupBuffer=function(e, t) {
        var i=t[e+"Buffer"],
        n=toTitleCase(e);
        i&&(i.removeEventListener("updateend", t["on"+n+"UpdateEnd_"]), i.removeEventListener("error", t["on"+n+"Error_"]), t.codecs[e]=null, t[e+"Buffer"]=null)
    }

    ,
    inSourceBuffers=function(e, t) {
        return e&&t&&-1 !==Array.prototype.indexOf.call(e.sourceBuffers, t)
    }

    ,
    actions= {
        appendBuffer:function(e, t, i) {
            return function(n, r) {
                var a=r[n+"Buffer"];

                if(inSourceBuffers(r.mediaSource, a)) {
                    r.logger_("Appending segment "+t.mediaIndex+"'s "+e.length+" bytes to "+n+"Buffer");

                    try {
                        a.appendBuffer(e)
                    }

                    catch(e) {
                        r.logger_("Error with code "+e.code+" "+(e.code===QUOTA_EXCEEDED_ERR?"(QUOTA_EXCEEDED_ERR) ":"")+"when appending segment "+t.mediaIndex+" to "+n+"Buffer"),
                        r.queuePending[n]=null,
                        i(e)
                    }
                }
            }
        }

        ,
        remove:function(e, t) {
            return function(i, n) {
                var r=n[i+"Buffer"];

                if(inSourceBuffers(n.mediaSource, r)) {
                    n.logger_("Removing "+e+" to "+t+" from "+i+"Buffer");

                    try {
                        r.remove(e, t)
                    }

                    catch(r) {
                        n.logger_("Remove "+e+" to "+t+" from "+i+"Buffer failed")
                    }
                }
            }
        }

        ,
        timestampOffset:function(e) {
            return function(t, i) {
                var n=i[t+"Buffer"];
                inSourceBuffers(i.mediaSource, n)&&(i.logger_("Setting "+t+"timestampOffset to "+e), n.timestampOffset=e)
            }
        }

        ,
        callback:function(e) {
            return function(t, i) {
                e()
            }
        }

        ,
        endOfStream:function(e) {
            return function(t) {
                if("open"===t.mediaSource.readyState) {
                    t.logger_("Calling mediaSource endOfStream("+(e||"")+")");

                    try {
                        t.mediaSource.endOfStream(e)
                    }

                    catch(e) {
                        videojs.log.warn("Failed to call media source endOfStream", e)
                    }
                }
            }
        }

        ,
        duration:function(e) {
            return function(t) {
                t.logger_("Setting mediaSource duration to "+e);

                try {
                    t.mediaSource.duration=e
                }

                catch(e) {
                    videojs.log.warn("Failed to set media source duration", e)
                }
            }
        }

        ,
        abort:function() {
            return function(e, t) {
                if("open"===t.mediaSource.readyState) {
                    var i=t[e+"Buffer"];

                    if(inSourceBuffers(t.mediaSource, i)) {
                        t.logger_("calling abort on "+e+"Buffer");

                        try {
                            i.abort()
                        }

                        catch(t) {
                            videojs.log.warn("Failed to abort on "+e+"Buffer", t)
                        }
                    }
                }
            }
        }

        ,
        addSourceBuffer:function(e, t) {
            return function(i) {
                var n=toTitleCase(e),
                r=codecs_js.getMimeForCodec(t);
                i.logger_("Adding "+e+"Buffer with codec "+t+" to mediaSource");
                var a=i.mediaSource.addSourceBuffer(r);
                a.addEventListener("updateend", i["on"+n+"UpdateEnd_"]),
                a.addEventListener("error", i["on"+n+"Error_"]),
                i.codecs[e]=t,
                i[e+"Buffer"]=a
            }
        }

        ,
        removeSourceBuffer:function(e) {
            return function(t) {
                var i=t[e+"Buffer"];

                if(cleanupBuffer(e, t), inSourceBuffers(t.mediaSource, i)) {
                    t.logger_("Removing "+e+"Buffer with codec "+t.codecs[e]+" from mediaSource");

                    try {
                        t.mediaSource.removeSourceBuffer(i)
                    }

                    catch(t) {
                        videojs.log.warn("Failed to removeSourceBuffer "+e+"Buffer", t)
                    }
                }
            }
        }

        ,
        changeType:function(e) {
            return function(t, i) {
                var n=i[t+"Buffer"],
                r=codecs_js.getMimeForCodec(e);
                inSourceBuffers(i.mediaSource, n)&&i.codecs[t] !==e&&(i.logger_("changing "+t+"Buffer codec from "+i.codecs[t]+" to "+e), n.changeType(r), i.codecs[t]=e)
            }
        }
    }

    ,
    pushQueue=function(e) {
        var t=e.type,
        i=e.sourceUpdater,
        n=e.action,
        r=e.doneFn,
        a=e.name;

        i.queue.push( {
                type:t, action:n, doneFn:r, name:a
            }

        ),
        shiftQueue(t, i)
    }

    ,
    onUpdateend=function(e, t) {
        return function(i) {
            if(t.queuePending[e]) {
                var n=t.queuePending[e].doneFn;
                t.queuePending[e]=null,
                n&&n(t[e+"Error_"])
            }

            shiftQueue(e, t)
        }
    }

    ,
    SourceUpdater=function(e) {
        function t(t) {
            var i;

            return(i=e.call(this)||this).mediaSource=t,
            i.sourceopenListener_=function() {
                return shiftQueue("mediaSource", _assertThisInitialized__default.default(i))
            }

            ,
            i.mediaSource.addEventListener("sourceopen", i.sourceopenListener_),
            i.logger_=logger("SourceUpdater"),
            i.audioTimestampOffset_=0,
            i.videoTimestampOffset_=0,
            i.queue=[],
            i.queuePending= {
                audio: null, video:null
            }

            ,
            i.delayedAudioAppendQueue_=[],
            i.videoAppendQueued_= !1,
            i.codecs= {}

            ,
            i.onVideoUpdateEnd_=onUpdateend("video", _assertThisInitialized__default.default(i)),
            i.onAudioUpdateEnd_=onUpdateend("audio", _assertThisInitialized__default.default(i)),
            i.onVideoError_=function(e) {
                i.videoError_=e
            }

            ,
            i.onAudioError_=function(e) {
                i.audioError_=e
            }

            ,
            i.createdSourceBuffers_= !1,
            i.initializedEme_= !1,
            i.triggeredReady_= !1,
            i
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.initializedEme=function() {
            this.initializedEme_= !0,
            this.triggerReady()
        }

        ,
        i.hasCreatedSourceBuffers=function() {
            return this.createdSourceBuffers_
        }

        ,
        i.hasInitializedAnyEme=function() {
            return this.initializedEme_
        }

        ,
        i.ready=function() {
            return this.hasCreatedSourceBuffers()&&this.hasInitializedAnyEme()
        }

        ,
        i.createSourceBuffers=function(e) {
            this.hasCreatedSourceBuffers()||(this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_= !0, this.trigger("createdsourcebuffers"), this.triggerReady())
        }

        ,
        i.triggerReady=function() {
            this.ready()&& !this.triggeredReady_&&(this.triggeredReady_= !0, this.trigger("ready"))
        }

        ,
        i.addSourceBuffer=function(e, t) {
            pushQueue( {
                    type:"mediaSource", sourceUpdater:this, action:actions.addSourceBuffer(e, t), name:"addSourceBuffer"
                }

            )
        }

        ,
        i.abort=function(e) {
            pushQueue( {
                    type:e, sourceUpdater:this, action:actions.abort(e), name:"abort"
                }

            )
        }

        ,
        i.removeSourceBuffer=function(e) {
            this.canRemoveSourceBuffer()?pushQueue( {
                    type:"mediaSource", sourceUpdater:this, action:actions.removeSourceBuffer(e), name:"removeSourceBuffer"
                }

            ):videojs.log.error("removeSourceBuffer is not supported!")
        }

        ,
        i.canRemoveSourceBuffer=function() {
            return !videojs.browser.IE_VERSION&& !videojs.browser.IS_FIREFOX&&window__default.default.MediaSource&&window__default.default.MediaSource.prototype&&"function"==typeof window__default.default.MediaSource.prototype.removeSourceBuffer
        }

        ,
        t.canChangeType=function() {
            return window__default.default.SourceBuffer&&window__default.default.SourceBuffer.prototype&&"function"==typeof window__default.default.SourceBuffer.prototype.changeType
        }

        ,
        i.canChangeType=function() {
            return this.constructor.canChangeType()
        }

        ,
        i.changeType=function(e, t) {
            this.canChangeType()?pushQueue( {
                    type:e, sourceUpdater:this, action:actions.changeType(t), name:"changeType"
                }

            ):videojs.log.error("changeType is not supported!")
        }

        ,
        i.addOrChangeSourceBuffers=function(e) {
            var t=this;
            if( !e||"object" !=typeof e||0===Object.keys(e).length)throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");

            Object.keys(e).forEach((function(i) {
                        var n=e[i]; if( !t.hasCreatedSourceBuffers())return t.addSourceBuffer(i, n); t.canChangeType()&&t.changeType(i, n)
                    }

                ))
        }

        ,
        i.appendBuffer=function(e, t) {
            var i=this,
            n=e.segmentInfo,
            r=e.type,
            a=e.bytes;
            if(this.processedAppend_= !0, "audio"===r&&this.videoBuffer&& !this.videoAppendQueued_)return this.delayedAudioAppendQueue_.push([e, t]),
            void this.logger_("delayed audio append of "+a.length+" until video append");
            var s=t;

            if(pushQueue( {
                        type:r, sourceUpdater:this, action:actions.appendBuffer(a, n|| {
                                mediaIndex:-1
                            }

                            , s), doneFn:t, name:"appendBuffer"
                    }

                ), "video"===r) {
                if(this.videoAppendQueued_= !0,  !this.delayedAudioAppendQueue_.length)return;
                var o=this.delayedAudioAppendQueue_.slice();

                this.logger_("queuing delayed audio "+o.length+" appendBuffers"),
                this.delayedAudioAppendQueue_.length=0,
                o.forEach((function(e) {
                            i.appendBuffer.apply(i, e)
                        }

                    ))
            }
        }

        ,
        i.audioBuffered=function() {
            return inSourceBuffers(this.mediaSource, this.audioBuffer)&&this.audioBuffer.buffered?this.audioBuffer.buffered: videojs.createTimeRange()
        }

        ,
        i.videoBuffered=function() {
            return inSourceBuffers(this.mediaSource, this.videoBuffer)&&this.videoBuffer.buffered?this.videoBuffer.buffered: videojs.createTimeRange()
        }

        ,
        i.buffered=function() {
            var e=inSourceBuffers(this.mediaSource, this.videoBuffer)?this.videoBuffer: null, t=inSourceBuffers(this.mediaSource, this.audioBuffer)?this.audioBuffer:null;
            return t&& !e?this.audioBuffered(): e&& !t?this.videoBuffered():bufferIntersection(this.audioBuffered(), this.videoBuffered())
        }

        ,
        i.setDuration=function(e, t) {

            void 0===t&&(t=noop),
            pushQueue( {
                    type:"mediaSource", sourceUpdater:this, action:actions.duration(e), name:"duration", doneFn:t
                }

            )
        }

        ,
        i.endOfStream=function(e, t) {

            void 0===e&&(e=null),
            void 0===t&&(t=noop),
            "string" !=typeof e&&(e=void 0),
            pushQueue( {
                    type:"mediaSource", sourceUpdater:this, action:actions.endOfStream(e), name:"endOfStream", doneFn:t
                }

            )
        }

        ,
        i.removeAudio=function(e, t, i) {

            void 0===i&&(i=noop),
            this.audioBuffered().length&&0 !==this.audioBuffered().end(0)?pushQueue( {
                    type:"audio", sourceUpdater:this, action:actions.remove(e, t), doneFn:i, name:"remove"
                }

            ):i()
        }

        ,
        i.removeVideo=function(e, t, i) {

            void 0===i&&(i=noop),
            this.videoBuffered().length&&0 !==this.videoBuffered().end(0)?pushQueue( {
                    type:"video", sourceUpdater:this, action:actions.remove(e, t), doneFn:i, name:"remove"
                }

            ):i()
        }

        ,
        i.updating=function() {
            return !( !_updating("audio", this)&& !_updating("video", this))
        }

        ,
        i.audioTimestampOffset=function(e) {
            return void 0 !==e&&this.audioBuffer&&this.audioTimestampOffset_ !==e&&(pushQueue( {
                        type:"audio", sourceUpdater:this, action:actions.timestampOffset(e), name:"timestampOffset"
                    }

                ), this.audioTimestampOffset_=e),
            this.audioTimestampOffset_
        }

        ,
        i.videoTimestampOffset=function(e) {
            return void 0 !==e&&this.videoBuffer&&this.videoTimestampOffset !==e&&(pushQueue( {
                        type:"video", sourceUpdater:this, action:actions.timestampOffset(e), name:"timestampOffset"
                    }

                ), this.videoTimestampOffset_=e),
            this.videoTimestampOffset_
        }

        ,
        i.audioQueueCallback=function(e) {
            this.audioBuffer&&pushQueue( {
                    type:"audio", sourceUpdater:this, action:actions.callback(e), name:"callback"
                }

            )
        }

        ,
        i.videoQueueCallback=function(e) {
            this.videoBuffer&&pushQueue( {
                    type:"video", sourceUpdater:this, action:actions.callback(e), name:"callback"
                }

            )
        }

        ,
        i.dispose=function() {
            var e=this;

            this.trigger("dispose"),
            bufferTypes.forEach((function(t) {
                        e.abort(t), e.canRemoveSourceBuffer()?e.removeSourceBuffer(t):e[t+"QueueCallback"]((function() {
                                    return cleanupBuffer(t, e)
                                }

                            ))
                    }

                )),
            this.videoAppendQueued_= !1,
            this.delayedAudioAppendQueue_.length=0,
            this.sourceopenListener_&&this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_),
            this.off()
        }

        ,
        t
    }

    (videojs.EventTarget),
    uint8ToUtf8=function(e) {
        return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
    }

    ,
    VTT_LINE_TERMINATORS=new Uint8Array("\n\n".split("").map((function(e) {
                    return e.charCodeAt(0)
                }

            ))),
    VTTSegmentLoader=function(e) {
        function t(t, i) {
            var n;

            return void 0===i&&(i= {}

            ),
            (n=e.call(this, t, i)||this).mediaSource_=null,
            n.subtitlesTrack_=null,
            n.loaderType_="subtitle",
            n.featuresNativeTextTracks_=t.featuresNativeTextTracks,
            n.shouldSaveSegmentTimingInfo_= !1,
            n
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.createTransmuxer_=function() {
            return null
        }

        ,
        i.buffered_=function() {
            if( !this.subtitlesTrack_|| !this.subtitlesTrack_.cues|| !this.subtitlesTrack_.cues.length)return videojs.createTimeRanges();
            var e=this.subtitlesTrack_.cues,
            t=e[0].startTime,
            i=e[e.length-1].startTime;
            return videojs.createTimeRanges([[t, i]])
        }

        ,
        i.initSegmentForMap=function(e, t) {
            if(void 0===t&&(t= !1),  !e)return null;
            var i=initSegmentId(e),
            n=this.initSegments_[i];

            if(t&& !n&&e.bytes) {
                var r=VTT_LINE_TERMINATORS.byteLength+e.bytes.byteLength,
                a=new Uint8Array(r);

                a.set(e.bytes),
                a.set(VTT_LINE_TERMINATORS, e.bytes.byteLength),
                this.initSegments_[i]=n= {
                    resolvedUri: e.resolvedUri, byterange:e.byterange, bytes:a
                }
            }

            return n||e
        }

        ,
        i.couldBeginLoading_=function() {
            return this.playlist_&&this.subtitlesTrack_&& !this.paused()
        }

        ,
        i.init_=function() {
            return this.state="READY",
            this.resetEverything(),
            this.monitorBuffer_()
        }

        ,
        i.track=function(e) {
            return void 0===e||(this.subtitlesTrack_=e, "INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),
            this.subtitlesTrack_
        }

        ,
        i.remove=function(e, t) {
            removeCuesFromTrack(e, t, this.subtitlesTrack_)
        }

        ,
        i.fillBuffer_=function() {
            var e=this,
            t=this.chooseNextRequest_();

            if(t) {
                if(null===this.syncController_.timestampOffsetForTimeline(t.timeline))return this.syncController_.one("timestampoffset", (function() {
                            e.state="READY", e.paused()||e.monitorBuffer_()
                        }

                    )),
                void(this.state="WAITING_ON_TIMELINE");
                this.loadSegment_(t)
            }
        }

        ,
        i.timestampOffsetForSegment_=function() {
            return null
        }

        ,
        i.chooseNextRequest_=function() {
            return this.skipEmptySegments_(e.prototype.chooseNextRequest_.call(this))
        }

        ,
        i.skipEmptySegments_=function(e) {
            for(; e&&e.segment.empty; ) {
                if(e.mediaIndex+1>=e.playlist.segments.length) {
                    e=null;
                    break
                }

                e=this.generateSegmentInfo_( {
                        playlist:e.playlist, mediaIndex:e.mediaIndex+1, startOfSegment:e.startOfSegment+e.duration, isSyncRequest:e.isSyncRequest
                    }

                )
            }

            return e
        }

        ,
        i.stopForError=function(e) {
            this.error(e),
            this.state="READY",
            this.pause(),
            this.trigger("error")
        }

        ,
        i.segmentRequestFinished_=function(e, t, i) {
            var n=this;

            if(this.subtitlesTrack_) {
                if(this.saveTransferStats_(t.stats),  !this.pendingSegment_)return this.state="READY",
                void(this.mediaRequestsAborted+=1);
                if(e)return e.code===REQUEST_ERRORS.TIMEOUT&&this.handleTimeout_(),
                e.code===REQUEST_ERRORS.ABORTED?this.mediaRequestsAborted+=1: this.mediaRequestsErrored+=1, void this.stopForError(e);
                var r=this.pendingSegment_;
                this.saveBandwidthRelatedStats_(r.duration, t.stats),
                this.state="APPENDING",
                this.trigger("appending");
                var a=r.segment;

                if(a.map&&(a.map.bytes=t.map.bytes), r.bytes=t.bytes, "function" !=typeof window__default.default.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_) {

                    var s,
                    o=function() {

                        n.subtitlesTrack_.tech_.off("vttjsloaded", s),
                        n.stopForError( {
                                message:"Error loading vtt.js"
                            }

                        )
                    }

                    ;

                    return s=function() {
                        n.subtitlesTrack_.tech_.off("vttjserror", o),
                        n.segmentRequestFinished_(e, t, i)
                    }

                    ,
                    this.state="WAITING_ON_VTTJS",
                    this.subtitlesTrack_.tech_.one("vttjsloaded", s),
                    void this.subtitlesTrack_.tech_.one("vttjserror", o)
                }

                a.requested= !0;

                try {
                    this.parseVTTCues_(r)
                }

                catch(e) {
                    return void this.stopForError( {
                            message:e.message
                        }

                    )
                }

                if(this.updateTimeMapping_(r, this.syncController_.timelines[r.timeline], this.playlist_), r.cues.length?r.timingInfo= {
                        start:r.cues[0].startTime, end:r.cues[r.cues.length-1].endTime
                    }

                    :r.timingInfo= {
                        start:r.startOfSegment, end:r.startOfSegment+r.duration
                    }

                    , r.isSyncRequest)return this.trigger("syncinfoupdate"),
                this.pendingSegment_=null,
                void(this.state="READY");

                r.byteLength=r.bytes.byteLength,
                this.mediaSecondsLoaded+=a.duration,
                r.cues.forEach((function(e) {
                            n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_?new window__default.default.VTTCue(e.startTime, e.endTime, e.text):e)
                        }

                    )),
                removeDuplicateCuesFromTrack(this.subtitlesTrack_),
                this.handleAppendsDone_()
            }

            else this.state="READY"
        }

        ,
        i.handleData_=function() {}

        ,
        i.updateTimingInfoEnd_=function() {}

        ,
        i.parseVTTCues_=function(e) {
            var t,
            i= !1;
            "function"==typeof window__default.default.TextDecoder?t=new window__default.default.TextDecoder("utf8"): (t=window__default.default.WebVTT.StringDecoder(), i= !0);
            var n=new window__default.default.WebVTT.Parser(window__default.default, window__default.default.vttjs, t);

            if(e.cues=[], e.timestampmap= {
                    MPEGTS:0, LOCAL:0
                }

                , n.oncue=e.cues.push.bind(e.cues), n.ontimestampmap=function(t) {
                    e.timestampmap=t
                }

                , n.onparsingerror=function(e) {
                    videojs.log.warn("Error encountered when parsing cues: "+e.message)
                }

                , e.segment.map) {
                var r=e.segment.map.bytes;
                i&&(r=uint8ToUtf8(r)),
                n.parse(r)
            }

            var a=e.bytes;
            i&&(a=uint8ToUtf8(a)),
            n.parse(a),
            n.flush()
        }

        ,
        i.updateTimeMapping_=function(e, t, i) {
            var n=e.segment;

            if(t)if(e.cues.length) {
                var r=e.timestampmap,
                a=r.MPEGTS/clock.ONE_SECOND_IN_TS-r.LOCAL+t.mapping;

                if(e.cues.forEach((function(e) {
                                e.startTime+=a, e.endTime+=a
                            }

                        )),  !i.syncInfo) {
                    var s=e.cues[0].startTime,
                    o=e.cues[e.cues.length-1].startTime;

                    i.syncInfo= {
                        mediaSequence: i.mediaSequence+e.mediaIndex, time:Math.min(s, o-n.duration)
                    }
                }
            }

            else n.empty= !0
        }

        ,
        t
    }

    (SegmentLoader),
    findAdCue=function(e, t) {
        for(var i=e.cues, n=0; n<i.length; n++) {
            var r=i[n];
            if(t>=r.adStartTime&&t<=r.adEndTime)return r
        }

        return null
    }

    ,
    updateAdCues=function(e, t, i) {
        if(void 0===i&&(i=0), e.segments)for(var n, r=i, a=0; a<e.segments.length; a++) {
            var s=e.segments[a];

            if(n||(n=findAdCue(t, r+s.duration/2)), n) {
                if("cueIn"in s) {
                    n.endTime=r,
                    n.adEndTime=r,
                    r+=s.duration,
                    n=null;
                    continue
                }

                if(r<n.endTime) {
                    r+=s.duration;
                    continue
                }

                n.endTime+=s.duration
            }

            else if("cueOut"in s&&((n=new window__default.default.VTTCue(r, r+s.duration, s.cueOut)).adStartTime=r, n.adEndTime=r+parseFloat(s.cueOut), t.addCue(n)), "cueOutCont"in s) {
                var o=s.cueOutCont.split("/").map(parseFloat),
                l=o[0],
                u=o[1];
                (n=new window__default.default.VTTCue(r, r+s.duration, "")).adStartTime=r-l,
                n.adEndTime=n.adStartTime+u,
                t.addCue(n)
            }

            r+=s.duration
        }
    }

    ,
    MAX_MEDIA_SEQUENCE_DIFF_FOR_SYNC=86400,
    syncPointStrategies=[ {

        name:"VOD",
        run:function(e, t, i, n, r) {
            return i !==1/0? {
                time: 0, segmentIndex:0, partIndex:null
            }

            :null
        }
    }

    ,
        {

        name:"ProgramDateTime",
        run:function(e, t, i, n, r) {
            if( !Object.keys(e.timelineToDatetimeMappings).length)return null;
            var a=null,
            s=null,
            o=getPartsAndSegments(t);
            r=r||0;

            for(var l=0; l<o.length; l++) {
                var u=o[t.endList||0===r?l: o.length-(l+1)], d=u.segment, c=e.timelineToDatetimeMappings[d.timeline];

                if(c&&d.dateTimeObject) {
                    var h=d.dateTimeObject.getTime()/1e3+c;
                    if(d.parts&&"number"==typeof u.partIndex)for(var p=0; p<u.partIndex; p++)h+=d.parts[p].duration;
                    var f=Math.abs(r-h);
                    if(null !==s&&(0===f||s<f))break;

                    s=f,
                    a= {
                        time: h, segmentIndex:u.segmentIndex, partIndex:u.partIndex
                    }
                }
            }

            return a
        }
    }

    ,
        {

        name:"Segment",
        run:function(e, t, i, n, r) {
            var a=null,
            s=null;
            r=r||0;

            for(var o=getPartsAndSegments(t), l=0; l<o.length; l++) {
                var u=o[t.endList||0===r?l: o.length-(l+1)], d=u.segment, c=u.part&&u.part.start||d&&d.start;

                if(d.timeline===n&&void 0 !==c) {
                    var h=Math.abs(r-c);
                    if(null !==s&&s<h)break;

                    ( !a||null===s||s>=h)&&(s=h, a= {
                            time:c, segmentIndex:u.segmentIndex, partIndex:u.partIndex
                        }

                    )
                }
            }

            return a
        }
    }

    ,
        {

        name:"Discontinuity",
        run:function(e, t, i, n, r) {
            var a=null;

            if(r=r||0, t.discontinuityStarts&&t.discontinuityStarts.length)for(var s=null, o=0; o<t.discontinuityStarts.length; o++) {
                var l=t.discontinuityStarts[o],
                u=t.discontinuitySequence+o+1,
                d=e.discontinuities[u];

                if(d) {
                    var c=Math.abs(r-d.time);
                    if(null !==s&&s<c)break;

                    ( !a||null===s||s>=c)&&(s=c, a= {
                            time:d.time, segmentIndex:l, partIndex:null
                        }

                    )
                }
            }

            return a
        }
    }

    ,
        {

        name:"Playlist",
        run:function(e, t, i, n, r) {
            return t.syncInfo? {
                time: t.syncInfo.time, segmentIndex:t.syncInfo.mediaSequence-t.mediaSequence, partIndex:null
            }

            :null
        }
    }

    ],
    SyncController=function(e) {
        function t(t) {
            var i;

            return(i=e.call(this)||this).timelines=[],
            i.discontinuities=[],
            i.timelineToDatetimeMappings= {}

            ,
            i.logger_=logger("SyncController"),
            i
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.getSyncPoint=function(e, t, i, n) {
            var r=this.runStrategies_(e, t, i, n);

            return r.length?this.selectSyncPoint_(r, {
                    key:"time", value:n
                }

            ):null
        }

        ,
        i.getExpiredTime=function(e, t) {
            if( !e|| !e.segments)return null;
            var i=this.runStrategies_(e, t, e.discontinuitySequence, 0);
            if( !i.length)return null;

            var n=this.selectSyncPoint_(i, {
                    key:"segmentIndex", value:0
                }

            );

            return n.segmentIndex>0&&(n.time*=-1),
            Math.abs(n.time+sumDurations( {
                        defaultDuration:e.targetDuration, durationList:e.segments, startIndex:n.segmentIndex, endIndex:0
                    }

                ))
        }

        ,
        i.runStrategies_=function(e, t, i, n) {
            for(var r=[], a=0; a<syncPointStrategies.length; a++) {
                var s=syncPointStrategies[a],
                o=s.run(this, e, t, i, n);

                o&&(o.strategy=s.name, r.push( {
                            strategy:s.name, syncPoint:o
                        }

                    ))
            }

            return r
        }

        ,
        i.selectSyncPoint_=function(e, t) {
            for(var i=e[0].syncPoint, n=Math.abs(e[0].syncPoint[t.key]-t.value), r=e[0].strategy, a=1; a<e.length; a++) {
                var s=Math.abs(e[a].syncPoint[t.key]-t.value);
                s<n&&(n=s, i=e[a].syncPoint, r=e[a].strategy)
            }

            return this.logger_("syncPoint for ["+t.key+": "+t.value+"] chosen with strategy ["+r+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+("number"==typeof i.partIndex?",partIndex:"+i.partIndex:"")+"]"),
            i
        }

        ,
        i.saveExpiredSegmentInfo=function(e, t) {
            var i=t.mediaSequence-e.mediaSequence;
            if(i>MAX_MEDIA_SEQUENCE_DIFF_FOR_SYNC)videojs.log.warn("Not saving expired segment info. Media sequence gap "+i+" is too large.");

            else for(var n=i-1; n>=0; n--) {
                var r=e.segments[n];

                if(r&&void 0 !==r.start) {
                    t.syncInfo= {
                        mediaSequence: e.mediaSequence+n, time:r.start
                    }

                    ,
                    this.logger_("playlist refresh sync: [time:"+t.syncInfo.time+", mediaSequence: "+t.syncInfo.mediaSequence+"]"),
                    this.trigger("syncinfoupdate");
                    break
                }
            }
        }

        ,
        i.setDateTimeMappingForStart=function(e) {
            if(this.timelineToDatetimeMappings= {}

                , e.segments&&e.segments.length&&e.segments[0].dateTimeObject) {
                var t=e.segments[0],
                i=t.dateTimeObject.getTime()/1e3;
                this.timelineToDatetimeMappings[t.timeline]=-i
            }
        }

        ,
        i.saveSegmentTimingInfo=function(e) {
            var t=e.segmentInfo,
            i=e.shouldSaveTimelineMapping,
            n=this.calculateSegmentTimeMapping_(t, t.timingInfo, i),
            r=t.segment;

            n&&(this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo||(t.playlist.syncInfo= {
                        mediaSequence:t.playlist.mediaSequence+t.mediaIndex, time:r.start
                    }

                ));
            var a=r.dateTimeObject;
            r.discontinuity&&i&&a&&(this.timelineToDatetimeMappings[r.timeline]=-a.getTime()/1e3)
        }

        ,
        i.timestampOffsetForTimeline=function(e) {
            return void 0===this.timelines[e]?null: this.timelines[e].time
        }

        ,
        i.mappingForTimeline=function(e) {
            return void 0===this.timelines[e]?null: this.timelines[e].mapping
        }

        ,
        i.calculateSegmentTimeMapping_=function(e, t, i) {
            var n,
            r,
            a=e.segment,
            s=e.part,
            o=this.timelines[e.timeline];

            if("number"==typeof e.timestampOffset)o= {
                time: e.startOfSegment, mapping:e.startOfSegment-t.start
            }

            ,
            i&&(this.timelines[e.timeline]=o, this.trigger("timestampoffset"), this.logger_("time mapping for timeline "+e.timeline+": [time: "+o.time+"] [mapping: "+o.mapping+"]")),
            n=e.startOfSegment,
            r=t.end+o.mapping;

            else {
                if( !o)return !1;
                n=t.start+o.mapping,
                r=t.end+o.mapping
            }

            return s&&(s.start=n, s.end=r),
            ( !a.start||n<a.start)&&(a.start=n),
            a.end=r,
             !0
        }

        ,
        i.saveDiscontinuitySyncInfo_=function(e) {
            var t=e.playlist,
            i=e.segment;

            if(i.discontinuity)this.discontinuities[i.timeline]= {
                time: i.start, accuracy:0
            }

            ;

            else if(t.discontinuityStarts&&t.discontinuityStarts.length)for(var n=0; n<t.discontinuityStarts.length; n++) {
                var r=t.discontinuityStarts[n],
                a=t.discontinuitySequence+n+1,
                s=r-e.mediaIndex,
                o=Math.abs(s);

                if( !this.discontinuities[a]||this.discontinuities[a].accuracy>o) {
                    var l;

                    l=s<0?i.start-sumDurations( {
                            defaultDuration:t.targetDuration, durationList:t.segments, startIndex:e.mediaIndex, endIndex:r
                        }

                    ):i.end+sumDurations( {
                            defaultDuration:t.targetDuration, durationList:t.segments, startIndex:e.mediaIndex+1, endIndex:r
                        }

                    ),
                    this.discontinuities[a]= {
                        time: l, accuracy:o
                    }
                }
            }
        }

        ,
        i.dispose=function() {
            this.trigger("dispose"),
            this.off()
        }

        ,
        t
    }

    (videojs.EventTarget),
    TimelineChangeController=function(e) {
        function t() {
            var t;

            return(t=e.call(this)||this).pendingTimelineChanges_= {}

            ,
            t.lastTimelineChanges_= {}

            ,
            t
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.clearPendingTimelineChange=function(e) {
            this.pendingTimelineChanges_[e]=null,
            this.trigger("pendingtimelinechange")
        }

        ,
        i.pendingTimelineChange=function(e) {
            var t=e.type,
            i=e.from,
            n=e.to;

            return"number"==typeof i&&"number"==typeof n&&(this.pendingTimelineChanges_[t]= {
                    type:t, from:i, to:n
                }

                , this.trigger("pendingtimelinechange")),
            this.pendingTimelineChanges_[t]
        }

        ,
        i.lastTimelineChange=function(e) {
            var t=e.type,
            i=e.from,
            n=e.to;

            return"number"==typeof i&&"number"==typeof n&&(this.lastTimelineChanges_[t]= {
                    type:t, from:i, to:n
                }

                , delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")),
            this.lastTimelineChanges_[t]
        }

        ,
        i.dispose=function() {

            this.trigger("dispose"),
            this.pendingTimelineChanges_= {}

            ,
            this.lastTimelineChanges_= {}

            ,
            this.off()
        }

        ,
        t
    }

    (videojs.EventTarget),
    workerCode=transform(getWorkerString((function() {
                    var e="undefined" !=typeof globalThis?globalThis:"undefined" !=typeof window?window:"undefined" !=typeof global?global:"undefined" !=typeof self?self: {}

                    ; function t(e, t, i) {
                        return e(i= {
                                path:t, exports: {}

                                , require:function(e, t) {
                                    return function() {
                                        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                                    }

                                    (null==t&&i.path)
                                }
                            }

                            , i.exports), i.exports
                    }

                    var i=t((function(e) {
                                function t(e, t) {
                                    for(var i=0; i<t.length; i++) {
                                        var n=t[i]; n.enumerable=n.enumerable|| !1, n.configurable= !0, "value"in n&&(n.writable= !0), Object.defineProperty(e, n.key, n)
                                    }
                                }

                                e.exports=function(e, i, n) {
                                    return i&&t(e.prototype, i), n&&t(e, n), e
                                }

                                , e.exports.default=e.exports, e.exports.__esModule= !0
                            }

                        )), n=t((function(e) {
                                function t(i, n) {
                                    return e.exports=t=Object.setPrototypeOf||function(e, t) {
                                        return e.__proto__=t, e
                                    }

                                    , e.exports.default=e.exports, e.exports.__esModule= !0, t(i, n)
                                }

                                e.exports=t, e.exports.default=e.exports, e.exports.__esModule= !0
                            }

                        )), r=t((function(e) {
                                e.exports=function(e, t) {
                                    e.prototype=Object.create(t.prototype), e.prototype.constructor=e, n(e, t)
                                }

                                , e.exports.default=e.exports, e.exports.__esModule= !0
                            }

                        )), a=function() {
                        function e() {
                            this.listeners= {}
                        }

                        var t=e.prototype; return t.on=function(e, t) {
                            this.listeners[e]||(this.listeners[e]=[]), this.listeners[e].push(t)
                        }

                        , t.off=function(e, t) {
                            if( !this.listeners[e])return !1; var i=this.listeners[e].indexOf(t); return this.listeners[e]=this.listeners[e].slice(0), this.listeners[e].splice(i, 1), i>-1
                        }

                        , t.trigger=function(e) {
                            var t=this.listeners[e]; if(t)if(2===arguments.length)for(var i=t.length, n=0; n<i; ++n)t[n].call(this, arguments[1]); else for(var r=Array.prototype.slice.call(arguments, 1), a=t.length, s=0; s<a; ++s)t[s].apply(this, r)
                        }

                        , t.dispose=function() {
                            this.listeners= {}
                        }

                        , t.pipe=function(e) {
                            this.on("data", (function(t) {
                                        e.push(t)
                                    }

                                ))
                        }

                        , e
                    }

                    (), s=null, o=function() {
                        function e(e) {
                            var t, i, n; s||(s=function() {
                                    var e, t, i, n, r, a, s, o, l=[[[], [], [], [], []], [[], [], [], [], []]], u=l[0], d=l[1], c=u[4], h=d[4], p=[], f=[]; for(e=0; e<256; e++)f[(p[e]=e<<1^283*(e>>7))^e]=e; for(t=i=0;  !c[t]; t^=n||1, i=f[i]||1)for(a=(a=i^i<<1^i<<2^i<<3^i<<4)>>8^255&a^99, c[t]=a, h[a]=t, o=16843009*p[r=p[n=p[t]]]^65537*r^257*n^16843008*t, s=257*p[a]^16843008*a, e=0; e<4; e++)u[e][t]=s=s<<24^s>>>8, d[e][a]=o=o<<24^o>>>8; for(e=0; e<5; e++)u[e]=u[e].slice(0), d[e]=d[e].slice(0); return l
                                }

                                ()), this._tables=[[s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()], [s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]]; var r=this._tables[0][4], a=this._tables[1], o=e.length, l=1; if(4 !==o&&6 !==o&&8 !==o)throw new Error("Invalid aes key size"); var u=e.slice(0), d=[]; for(this._key=[u, d], t=o; t<4*o+28; t++)n=u[t-1], (t%o==0||8===o&&t%o==4)&&(n=r[n>>>24]<<24^r[n>>16&255]<<16^r[n>>8&255]<<8^r[255&n], t%o==0&&(n=n<<8^n>>>24^l<<24, l=l<<1^283*(l>>7))), u[t]=u[t-o]^n; for(i=0; t; i++, t--)n=u[3&i?t:t-4], d[i]=t<=4||i<4?n:a[0][r[n>>>24]]^a[1][r[n>>16&255]]^a[2][r[n>>8&255]]^a[3][r[255&n]]
                        }

                        return e.prototype.decrypt=function(e, t, i, n, r, a) {
                            var s, o, l, u, d=this._key[1], c=e^d[0], h=n^d[1], p=i^d[2], f=t^d[3], m=d.length/4-2, g=4, _=this._tables[1], v=_[0], y=_[1], T=_[2], b=_[3], S=_[4]; for(u=0; u<m; u++)s=v[c>>>24]^y[h>>16&255]^T[p>>8&255]^b[255&f]^d[g], o=v[h>>>24]^y[p>>16&255]^T[f>>8&255]^b[255&c]^d[g+1], l=v[p>>>24]^y[f>>16&255]^T[c>>8&255]^b[255&h]^d[g+2], f=v[f>>>24]^y[c>>16&255]^T[h>>8&255]^b[255&p]^d[g+3], g+=4, c=s, h=o, p=l; for(u=0; u<4; u++)r[(3&-u)+a]=S[c>>>24]<<24^S[h>>16&255]<<16^S[p>>8&255]<<8^S[255&f]^d[g++], s=c, c=h, h=p, p=f, f=s
                        }

                        , e
                    }

                    (), l=function(e) {
                        function t() {
                            var t; return(t=e.call(this, a)||this).jobs=[], t.delay=1, t.timeout_=null, t
                        }

                        r(t, e); var i=t.prototype; return i.processJob_=function() {
                            this.jobs.shift()(), this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this), this.delay):this.timeout_=null
                        }

                        , i.push=function(e) {
                            this.jobs.push(e), this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this), this.delay))
                        }

                        , t
                    }

                    (a), u=function(e) {
                        return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24
                    }

                    , d=function() {
                        function e(t, i, n, r) {
                            var a=e.STEP, s=new Int32Array(t.buffer), o=new Uint8Array(t.byteLength), d=0; for(this.asyncStream_=new l, this.asyncStream_.push(this.decryptChunk_(s.subarray(d, d+a), i, n, o)), d=a; d<s.length; d+=a)n=new Uint32Array([u(s[d-4]), u(s[d-3]), u(s[d-2]), u(s[d-1])]), this.asyncStream_.push(this.decryptChunk_(s.subarray(d, d+a), i, n, o)); this.asyncStream_.push((function() {
                                        var e; r(null, (e=o).subarray(0, e.byteLength-e[e.byteLength-1]))
                                    }

                                ))
                        }

                        return e.prototype.decryptChunk_=function(e, t, i, n) {
                            return function() {
                                var r=function(e, t, i) {
                                    var n, r, a, s, l, d, c, h, p, f=new Int32Array(e.buffer, e.byteOffset, e.byteLength>>2), m=new o(Array.prototype.slice.call(t)), g=new Uint8Array(e.byteLength), _=new Int32Array(g.buffer); for(n=i[0], r=i[1], a=i[2], s=i[3], p=0; p<f.length; p+=4)l=u(f[p]), d=u(f[p+1]), c=u(f[p+2]), h=u(f[p+3]), m.decrypt(l, d, c, h, _, p), _[p]=u(_[p]^n), _[p+1]=u(_[p+1]^r), _[p+2]=u(_[p+2]^a), _[p+3]=u(_[p+3]^s), n=l, r=d, a=c, s=h; return g
                                }

                                (e, t, i); n.set(r, e.byteOffset)
                            }
                        }

                        , i(e, null, [ {
                                key:"STEP", get:function() {
                                    return 32e3
                                }
                            }

                            ]), e
                    }

                    (), c=("undefined" !=typeof window?window:void 0 !==e?e:"undefined" !=typeof self?self: {}

                    ).BigInt||Number; c("0x1"), c("0x100"), c("0x10000"), c("0x1000000"), c("0x100000000"), c("0x10000000000"), c("0x1000000000000"), c("0x100000000000000"), c("0x10000000000000000"); self.onmessage=function(e) {
                        var t=e.data, i=new Uint8Array(t.encrypted.bytes, t.encrypted.byteOffset, t.encrypted.byteLength), n=new Uint32Array(t.key.bytes, t.key.byteOffset, t.key.byteLength/4), r=new Uint32Array(t.iv.bytes, t.iv.byteOffset, t.iv.byteLength/4); new d(i, n, r, (function(e, i) {
                                    var n, r; self.postMessage((n= {
                                                source:t.source, decrypted:i
                                            }

                                            , r= {}

                                            , Object.keys(n).forEach((function(e) {
                                                        var t, i=n[e]; t=i, ("function"===ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer)?r[e]= {
                                                            bytes:i.buffer, byteOffset:i.byteOffset, byteLength:i.byteLength
                                                        }

                                                        :r[e]=i
                                                    }

                                                )), r), [i.buffer])
                                }

                            ))
                    }
                }

            ))),
    Decrypter=factory(workerCode),
    audioTrackKind_=function(e) {
        var t=e.default?"main": "alternative";
        return e.characteristics&&e.characteristics.indexOf("public.accessibility.describes-video")>=0&&(t="main-desc"),
        t
    }

    ,
    stopLoaders=function(e, t) {
        e.abort(),
        e.pause(),
        t&&t.activePlaylistLoader&&(t.activePlaylistLoader.pause(), t.activePlaylistLoader=null)
    }

    ,
    startLoaders=function(e, t) {
        t.activePlaylistLoader=e,
        e.load()
    }

    ,
    onGroupChanged=function(e, t) {
        return function() {
            var i=t.segmentLoaders,
            n=i[e],
            r=i.main,
            a=t.mediaTypes[e],
            s=a.activeTrack(),
            o=a.getActiveGroup(),
            l=a.activePlaylistLoader,
            u=a.lastGroup_;
            o&&u&&o.id===u.id||(a.lastGroup_=o, a.lastTrack_=s, stopLoaders(n, a), o&& !o.isMasterPlaylist&&(o.playlistLoader?(n.resyncLoader(), startLoaders(o.playlistLoader, a)):l&&r.resetEverything()))
        }
    }

    ,
    onGroupChanging=function(e, t) {
        return function() {
            var i=t.segmentLoaders[e];
            t.mediaTypes[e].lastGroup_=null,
            i.abort(),
            i.pause()
        }
    }

    ,
    onTrackChanged=function(e, t) {
        return function() {
            var i=t.masterPlaylistLoader,
            n=t.segmentLoaders,
            r=n[e],
            a=n.main,
            s=t.mediaTypes[e],
            o=s.activeTrack(),
            l=s.getActiveGroup(),
            u=s.activePlaylistLoader,
            d=s.lastTrack_;

            if(( !d|| !o||d.id !==o.id)&&(s.lastGroup_=l, s.lastTrack_=o, stopLoaders(r, s), l)) {
                if(l.isMasterPlaylist) {
                    if( !o|| !d||o.id===d.id)return;
                    var c=t.vhs.masterPlaylistController_,
                    h=c.selectPlaylist();
                    if(c.media()===h)return;
                    return s.logger_("track change. Switching master audio from "+d.id+" to "+o.id),
                    i.pause(),
                    a.resetEverything(),
                    void c.fastQualityChange_(h)
                }

                if("AUDIO"===e) {
                    if( !l.playlistLoader)return a.setAudio( !0),
                    void a.resetEverything();
                    r.setAudio( !0),
                    a.setAudio( !1)
                }

                u !==l.playlistLoader?(r.track&&r.track(o), r.resetEverything(), startLoaders(l.playlistLoader, s)):startLoaders(l.playlistLoader, s)
            }
        }
    }

    ,
    onError= {
        AUDIO:function(e, t) {
            return function() {
                var i=t.segmentLoaders[e],
                n=t.mediaTypes[e],
                r=t.blacklistCurrentPlaylist;
                stopLoaders(i, n);

                var a=n.activeTrack(),
                s=n.activeGroup(),
                o=(s.filter((function(e) {
                                return e.default
                            }

                        ))[0]||s[0]).id,
                l=n.tracks[o];

                if(a !==l) {
                    for(var u in videojs.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), n.tracks)n.tracks[u].enabled=n.tracks[u]===l;
                    n.onTrackChanged()
                }

                else r( {
                        message:"Problem encountered loading the default audio track."
                    }

                )
            }
        }

        ,
        SUBTITLES:function(e, t) {
            return function() {
                var i=t.segmentLoaders[e],
                n=t.mediaTypes[e];
                videojs.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
                stopLoaders(i, n);
                var r=n.activeTrack();
                r&&(r.mode="disabled"),
                n.onTrackChanged()
            }
        }
    }

    ,
    setupListeners= {
        AUDIO:function(e, t, i) {
            if(t) {
                var n=i.tech,
                r=i.requestOptions,
                a=i.segmentLoaders[e];

                t.on("loadedmetadata", (function() {
                            var e=t.media(); a.playlist(e, r), ( !n.paused()||e.endList&&"none" !==n.preload())&&a.load()
                        }

                    )),
                t.on("loadedplaylist", (function() {
                            a.playlist(t.media(), r), n.paused()||a.load()
                        }

                    )),
                t.on("error", onError[e](e, i))
            }
        }

        ,
        SUBTITLES:function(e, t, i) {
            var n=i.tech,
            r=i.requestOptions,
            a=i.segmentLoaders[e],
            s=i.mediaTypes[e];

            t.on("loadedmetadata", (function() {
                        var e=t.media(); a.playlist(e, r), a.track(s.activeTrack()), ( !n.paused()||e.endList&&"none" !==n.preload())&&a.load()
                    }

                )),
            t.on("loadedplaylist", (function() {
                        a.playlist(t.media(), r), n.paused()||a.load()
                    }

                )),
            t.on("error", onError[e](e, i))
        }
    }

    ,
    initialize= {
        AUDIO:function(e, t) {
            var i=t.vhs,
            n=t.sourceType,
            r=t.segmentLoaders[e],
            a=t.requestOptions,
            s=t.master.mediaGroups,
            o=t.mediaTypes[e],
            l=o.groups,
            u=o.tracks,
            d=o.logger_,
            c=t.masterPlaylistLoader,
            h=isAudioOnly(c.master);

            for(var p in s[e]&&0 !==Object.keys(s[e]).length||(s[e]= {
                        main: {
                            default: {
                                default: !0
                            }
                        }
                    }

                    , h&&(s[e].main.default.playlists=c.master.playlists)), s[e])for(var f in l[p]||(l[p]=[]), s[e][p]) {
                var m=s[e][p][f],
                g=void 0;

                if(h?(d("AUDIO group '"+p+"' label '"+f+"' is a master playlist"), m.isMasterPlaylist= !0, g=null):g="vhs-json"===n&&m.playlists?new PlaylistLoader(m.playlists[0], i, a):m.resolvedUri?new PlaylistLoader(m.resolvedUri, i, a):m.playlists&&"dash"===n?new DashPlaylistLoader(m.playlists[0], i, a, c):null, m=videojs.mergeOptions( {
                            id:f, playlistLoader:g
                        }

                        , m), setupListeners[e](e, m.playlistLoader, t), l[p].push(m), void 0===u[f]) {
                    var _=new videojs.AudioTrack( {
                            id:f, kind:audioTrackKind_(m), enabled: !1, language:m.language, default:m.default, label:f
                        }

                    );
                    u[f]=_
                }
            }

            r.on("error", onError[e](e, t))
        }

        ,
        SUBTITLES:function(e, t) {
            var i=t.tech,
            n=t.vhs,
            r=t.sourceType,
            a=t.segmentLoaders[e],
            s=t.requestOptions,
            o=t.master.mediaGroups,
            l=t.mediaTypes[e],
            u=l.groups,
            d=l.tracks,
            c=t.masterPlaylistLoader;

            for(var h in o[e])for(var p in u[h]||(u[h]=[]), o[e][h])if( !o[e][h][p].forced) {
                var f=o[e][h][p],
                m=void 0;
                if("hls"===r)m=new PlaylistLoader(f.resolvedUri, n, s);

                else if("dash"===r) {
                    if( !f.playlists.filter((function(e) {
                                    return e.excludeUntil !==1/0
                                }

                            )).length)return;
                    m=new DashPlaylistLoader(f.playlists[0], n, s, c)
                }

                else"vhs-json"===r&&(m=new PlaylistLoader(f.playlists?f.playlists[0]:f.resolvedUri, n, s));

                if(f=videojs.mergeOptions( {
                            id:p, playlistLoader:m
                        }

                        , f), setupListeners[e](e, f.playlistLoader, t), u[h].push(f), void 0===d[p]) {
                    var g=i.addRemoteTextTrack( {
                            id:p, kind:"subtitles", default:f.default&&f.autoselect, language:f.language, label:p
                        }

                        ,  !1).track;
                    d[p]=g
                }
            }

            a.on("error", onError[e](e, t))
        }

        ,
        "CLOSED-CAPTIONS":function(e, t) {
            var i=t.tech,
            n=t.master.mediaGroups,
            r=t.mediaTypes[e],
            a=r.groups,
            s=r.tracks;

            for(var o in n[e])for(var l in a[o]||(a[o]=[]), n[e][o]) {
                var u=n[e][o][l];

                if(/^(?:CC|SERVICE)/.test(u.instreamId)) {
                    var d=i.options_.vhs&&i.options_.vhs.captionServices|| {}

                    ,
                    c= {
                        label: l, language:u.language, instreamId:u.instreamId, default:u.default&&u.autoselect
                    }

                    ;

                    if(d[c.instreamId]&&(c=videojs.mergeOptions(c, d[c.instreamId])), void 0===c.default&&delete c.default, a[o].push(videojs.mergeOptions( {
                                    id:l
                                }

                                , u)), void 0===s[l]) {
                        var h=i.addRemoteTextTrack( {
                                id:c.instreamId, kind:"captions", default:c.default, language:c.language, label:c.label
                            }

                            ,  !1).track;
                        s[l]=h
                    }
                }
            }
        }
    }

    ,
    groupMatch=function e(t, i) {
        for(var n=0; n<t.length; n++) {
            if(playlistMatch(i, t[n]))return !0;
            if(t[n].playlists&&e(t[n].playlists, i))return !0
        }

        return !1
    }

    ,
    activeGroup=function(e, t) {
        return function(i) {
            var n=t.masterPlaylistLoader,
            r=t.mediaTypes[e].groups,
            a=n.media();
            if( !a)return null;
            var s=null;
            a.attributes[e]&&(s=r[a.attributes[e]]);
            var o=Object.keys(r);

            if( !s)if("AUDIO"===e&&o.length>1&&isAudioOnly(t.master))for(var l=0; l<o.length; l++) {
                var u=r[o[l]];

                if(groupMatch(u, a)) {
                    s=u;
                    break
                }
            }

            else r.main?s=r.main:1===o.length&&(s=r[o[0]]);

            return void 0===i?s:null !==i&&s&&s.filter((function(e) {
                        return e.id===i.id
                    }

                ))[0]||null
        }
    }

    ,
    activeTrack= {
        AUDIO:function(e, t) {
            return function() {
                var i=t.mediaTypes[e].tracks;
                for(var n in i)if(i[n].enabled)return i[n];
                return null
            }
        }

        ,
        SUBTITLES:function(e, t) {
            return function() {
                var i=t.mediaTypes[e].tracks;
                for(var n in i)if("showing"===i[n].mode||"hidden"===i[n].mode)return i[n];
                return null
            }
        }
    }

    ,
    getActiveGroup=function(e, t) {
        var i=t.mediaTypes;

        return function() {
            var t=i[e].activeTrack();
            return t?i[e].activeGroup(t): null
        }
    }

    ,
    setupMediaGroups=function(e) {

        ["AUDIO",
        "SUBTITLES",
        "CLOSED-CAPTIONS"].forEach((function(t) {
                    initialize[t](t, e)
                }

            ));
        var t=e.mediaTypes,
        i=e.masterPlaylistLoader,
        n=e.tech,
        r=e.vhs,
        a=e.segmentLoaders,
        s=a.AUDIO,
        o=a.main;

        ["AUDIO",
        "SUBTITLES"].forEach((function(i) {
                    t[i].activeGroup=activeGroup(i, e), t[i].activeTrack=activeTrack[i](i, e), t[i].onGroupChanged=onGroupChanged(i, e), t[i].onGroupChanging=onGroupChanging(i, e), t[i].onTrackChanged=onTrackChanged(i, e), t[i].getActiveGroup=getActiveGroup(i, e)
                }

            ));
        var l=t.AUDIO.activeGroup();

        if(l) {
            var u=(l.filter((function(e) {
                            return e.default
                        }

                    ))[0]||l[0]).id;
            t.AUDIO.tracks[u].enabled= !0,
            t.AUDIO.onGroupChanged(),
            t.AUDIO.onTrackChanged(),
            t.AUDIO.getActiveGroup().playlistLoader?(o.setAudio( !1), s.setAudio( !0)):o.setAudio( !0)
        }

        i.on("mediachange", (function() {
                    ["AUDIO", "SUBTITLES"].forEach((function(e) {
                                return t[e].onGroupChanged()
                            }

                        ))
                }

            )),
        i.on("mediachanging", (function() {
                    ["AUDIO", "SUBTITLES"].forEach((function(e) {
                                return t[e].onGroupChanging()
                            }

                        ))
                }

            ));

        var d=function() {

            t.AUDIO.onTrackChanged(),
            n.trigger( {
                    type:"usage", name:"vhs-audio-change"
                }

            ),
            n.trigger( {
                    type:"usage", name:"hls-audio-change"
                }

            )
        }

        ;

        for(var c in n.audioTracks().addEventListener("change", d), n.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged), r.on("dispose", (function() {
                        n.audioTracks().removeEventListener("change", d), n.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged)
                    }

                )), n.clearTracks("audio"), t.AUDIO.tracks)n.audioTracks().addTrack(t.AUDIO.tracks[c])
    }

    ,
    createMediaTypes=function() {
        var e= {}

        ;

        return["AUDIO",
        "SUBTITLES",
        "CLOSED-CAPTIONS"].forEach((function(t) {
                    e[t]= {
                        groups: {}

                        , tracks: {}

                        , activePlaylistLoader:null, activeGroup:noop, activeTrack:noop, getActiveGroup:noop, onGroupChanged:noop, onTrackChanged:noop, lastTrack_:null, logger_:logger("MediaGroups["+t+"]")
                    }
                }

            )),
        e
    }

    ,
    ABORT_EARLY_BLACKLIST_SECONDS=120,
    loaderStats=["mediaRequests",
    "mediaRequestsAborted",
    "mediaRequestsTimedout",
    "mediaRequestsErrored",
    "mediaTransferDuration",
    "mediaBytesTransferred",
    "mediaAppends"],
    sumLoaderStat=function(e) {
        return this.audioSegmentLoader_[e]+this.mainSegmentLoader_[e]
    }

    ,
    shouldSwitchToMedia=function(e) {
        var t=e.currentPlaylist,
        i=e.buffered,
        n=e.currentTime,
        r=e.nextPlaylist,
        a=e.bufferLowWaterLine,
        s=e.bufferHighWaterLine,
        o=e.duration,
        l=e.experimentalBufferBasedABR,
        u=e.log;
        if( !r)return videojs.log.warn("We received no playlist to switch to. Please check your stream."),
         !1;
        var d="allowing switch "+(t&&t.id||"null")+" -> "+r.id;
        if( !t)return u(d+" as current playlist is not set"),
         !0;
        if(r.id===t.id)return !1;
        var c=Boolean(findRange(i, n).length);
        if( !t.endList)return c||"number" !=typeof t.partTargetDuration?(u(d+" as current playlist is live"),  !0): (u("not "+d+" as current playlist is live llhls, but currentTime isn't in buffered."),  !1);
        var h=timeAheadOf(i, n),
        p=l?Config.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: Config.MAX_BUFFER_LOW_WATER_LINE;
        if(o<p)return u(d+" as duration < max low water line ("+o+" < "+p+")"),
         !0;
        var f=r.attributes.BANDWIDTH,
        m=t.attributes.BANDWIDTH;

        if(f<m&&( !l||h<s)) {
            var g=d+" as next bandwidth < current bandwidth ("+f+" < "+m+")";
            return l&&(g+=" and forwardBuffer < bufferHighWaterLine ("+h+" < "+s+")"),
            u(g),
             !0
        }

        if(( !l||f>m)&&h>=a) {
            var _=d+" as forwardBuffer >= bufferLowWaterLine ("+h+" >= "+a+")";
            return l&&(_+=" and next bandwidth > current bandwidth ("+f+" > "+m+")"),
            u(_),
             !0
        }

        return u("not "+d+" as no switching criteria met"),
         !1
    }

    ,
    MasterPlaylistController=function(e) {
        function t(t) {
            var i;
            i=e.call(this)||this;
            var n=t.src,
            r=t.handleManifestRedirects,
            a=t.withCredentials,
            s=t.tech,
            o=t.bandwidth,
            l=t.externVhs,
            u=t.useCueTags,
            d=t.blacklistDuration,
            c=t.enableLowInitialPlaylist,
            h=t.sourceType,
            p=t.cacheEncryptionKeys,
            f=t.experimentalBufferBasedABR,
            m=t.experimentalLeastPixelDiffSelector,
            g=t.captionServices;
            if( !n)throw new Error("A non-empty playlist URL or JSON manifest string is required");
            var _=t.maxPlaylistRetries;

            null==_&&(_=1/0),
            Vhs$1=l,
            i.experimentalBufferBasedABR=Boolean(f),
            i.experimentalLeastPixelDiffSelector=Boolean(m),
            i.withCredentials=a,
            i.tech_=s,
            i.vhs_=s.vhs,
            i.sourceType_=h,
            i.useCueTags_=u,
            i.blacklistDuration=d,
            i.maxPlaylistRetries=_,
            i.enableLowInitialPlaylist=c,
            i.useCueTags_&&(i.cueTagsTrack_=i.tech_.addTextTrack("metadata", "ad-cues"), i.cueTagsTrack_.inBandMetadataTrackDispatchType=""),
            i.requestOptions_= {
                withCredentials: a, handleManifestRedirects:r, maxPlaylistRetries:_, timeout:null
            }

            ,
            i.on("error", i.pauseLoading),
            i.mediaTypes_=createMediaTypes(),
            i.mediaSource=new window__default.default.MediaSource,
            i.handleDurationChange_=i.handleDurationChange_.bind(_assertThisInitialized__default.default(i)),
            i.handleSourceOpen_=i.handleSourceOpen_.bind(_assertThisInitialized__default.default(i)),
            i.handleSourceEnded_=i.handleSourceEnded_.bind(_assertThisInitialized__default.default(i)),
            i.mediaSource.addEventListener("durationchange", i.handleDurationChange_),
            i.mediaSource.addEventListener("sourceopen", i.handleSourceOpen_),
            i.mediaSource.addEventListener("sourceended", i.handleSourceEnded_),
            i.seekable_=videojs.createTimeRanges(),
            i.hasPlayed_= !1,
            i.syncController_=new SyncController(t),
            i.segmentMetadataTrack_=s.addRemoteTextTrack( {
                    kind:"metadata", label:"segment-metadata"
                }

                ,  !1).track,
            i.decrypter_=new Decrypter,
            i.sourceUpdater_=new SourceUpdater(i.mediaSource),
            i.inbandTextTracks_= {}

            ,
            i.timelineChangeController_=new TimelineChangeController;

            var v= {

                vhs:i.vhs_,
                parse708captions:t.parse708captions,
                useDtsForTimestampOffset:t.useDtsForTimestampOffset,
                captionServices:g,
                mediaSource:i.mediaSource,
                currentTime:i.tech_.currentTime.bind(i.tech_),
                seekable:function() {
                    return i.seekable()
                }

                ,
                seeking:function() {
                    return i.tech_.seeking()
                }

                ,
                duration:function() {
                    return i.duration()
                }

                ,
                hasPlayed:function() {
                    return i.hasPlayed_
                }

                ,
                goalBufferLength:function() {
                    return i.goalBufferLength()
                }

                ,
                bandwidth:o,
                syncController:i.syncController_,
                decrypter:i.decrypter_,
                sourceType:i.sourceType_,
                inbandTextTracks:i.inbandTextTracks_,
                cacheEncryptionKeys:p,
                sourceUpdater:i.sourceUpdater_,
                timelineChangeController:i.timelineChangeController_,
                experimentalExactManifestTimings:t.experimentalExactManifestTimings
            }

            ;

            i.masterPlaylistLoader_="dash"===i.sourceType_?new DashPlaylistLoader(n, i.vhs_, i.requestOptions_):new PlaylistLoader(n, i.vhs_, i.requestOptions_),
            i.setupMasterPlaylistLoaderListeners_(),
            i.mainSegmentLoader_=new SegmentLoader(videojs.mergeOptions(v, {
                        segmentMetadataTrack:i.segmentMetadataTrack_, loaderType:"main"
                    }

                ), t),
            i.audioSegmentLoader_=new SegmentLoader(videojs.mergeOptions(v, {
                        loaderType:"audio"
                    }

                ), t),
            i.subtitleSegmentLoader_=new VTTSegmentLoader(videojs.mergeOptions(v, {
                        loaderType:"vtt", featuresNativeTextTracks:i.tech_.featuresNativeTextTracks
                    }

                ), t),
            i.setupSegmentLoaderListeners_(),
            i.experimentalBufferBasedABR&&(i.masterPlaylistLoader_.one("loadedplaylist", (function() {
                            return i.startABRTimer_()
                        }

                    )), i.tech_.on("pause", (function() {
                            return i.stopABRTimer_()
                        }

                    )), i.tech_.on("play", (function() {
                            return i.startABRTimer_()
                        }

                    ))),
            loaderStats.forEach((function(e) {
                        i[e+"_"]=sumLoaderStat.bind(_assertThisInitialized__default.default(i), e)
                    }

                )),
            i.logger_=logger("MPC"),
            i.triggeredFmp4Usage= !1,
            "none"===i.tech_.preload()?(i.loadOnPlay_=function() {
                    i.loadOnPlay_=null, i.masterPlaylistLoader_.load()
                }

                , i.tech_.one("play", i.loadOnPlay_)):i.masterPlaylistLoader_.load(),
            i.timeToLoadedData__=-1,
            i.mainAppendsToLoadedData__=-1,
            i.audioAppendsToLoadedData__=-1;
            var y="none"===i.tech_.preload()?"play":"loadstart";

            return i.tech_.one(y, (function() {
                        var e=Date.now(); i.tech_.one("loadeddata", (function() {
                                    i.timeToLoadedData__=Date.now()-e, i.mainAppendsToLoadedData__=i.mainSegmentLoader_.mediaAppends, i.audioAppendsToLoadedData__=i.audioSegmentLoader_.mediaAppends
                                }

                            ))
                    }

                )),
            i
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.mainAppendsToLoadedData_=function() {
            return this.mainAppendsToLoadedData__
        }

        ,
        i.audioAppendsToLoadedData_=function() {
            return this.audioAppendsToLoadedData__
        }

        ,
        i.appendsToLoadedData_=function() {
            var e=this.mainAppendsToLoadedData_(),
            t=this.audioAppendsToLoadedData_();
            return-1===e||-1===t?-1: e+t
        }

        ,
        i.timeToLoadedData_=function() {
            return this.timeToLoadedData__
        }

        ,
        i.checkABR_=function() {
            var e=this.selectPlaylist();
            e&&this.shouldSwitchToMedia_(e)&&this.switchMedia_(e, "abr")
        }

        ,
        i.switchMedia_=function(e, t, i) {
            var n=this.media(),
            r=n&&(n.id||n.uri),
            a=e.id||e.uri;

            r&&r !==a&&(this.logger_("switch media "+r+" -> "+a+" from "+t), this.tech_.trigger( {
                        type:"usage", name:"vhs-rendition-change-"+t
                    }

                )),
            this.masterPlaylistLoader_.media(e, i)
        }

        ,
        i.startABRTimer_=function() {
            var e=this;

            this.stopABRTimer_(),
            this.abrTimer_=window__default.default.setInterval((function() {
                        return e.checkABR_()
                    }

                ), 250)
        }

        ,
        i.stopABRTimer_=function() {
            this.tech_.scrubbing&&this.tech_.scrubbing()||(window__default.default.clearInterval(this.abrTimer_), this.abrTimer_=null)
        }

        ,
        i.getAudioTrackPlaylists_=function() {
            var e=this.master(),
            t=e&&e.playlists||[];
            if( !e|| !e.mediaGroups|| !e.mediaGroups.AUDIO)return t;
            var i,
            n=e.mediaGroups.AUDIO,
            r=Object.keys(n);
            if(Object.keys(this.mediaTypes_.AUDIO.groups).length)i=this.mediaTypes_.AUDIO.activeTrack();

            else {
                var a=n.main||r.length&&n[r[0]];

                for(var s in a)if(a[s].default) {
                    i= {
                        label: s
                    }

                    ;
                    break
                }
            }

            if( !i)return t;
            var o=[];

            for(var l in n)if(n[l][i.label]) {
                var u=n[l][i.label];
                if(u.playlists&&u.playlists.length)o.push.apply(o, u.playlists);
                else if(u.uri)o.push(u);

                else if(e.playlists.length)for(var d=0; d<e.playlists.length; d++) {
                    var c=e.playlists[d];
                    c.attributes&&c.attributes.AUDIO&&c.attributes.AUDIO===l&&o.push(c)
                }
            }

            return o.length?o:t
        }

        ,
        i.setupMasterPlaylistLoaderListeners_=function() {
            var e=this;

            this.masterPlaylistLoader_.on("loadedmetadata", (function() {
                        var t=e.masterPlaylistLoader_.media(), i=1.5*t.targetDuration*1e3; isLowestEnabledRendition(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i, t.endList&&"none" !==e.tech_.preload()&&(e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load()), setupMediaGroups( {
                                sourceType:e.sourceType_, segmentLoaders: {
                                    AUDIO:e.audioSegmentLoader_, SUBTITLES:e.subtitleSegmentLoader_, main:e.mainSegmentLoader_
                                }

                                , tech:e.tech_, requestOptions:e.requestOptions_, masterPlaylistLoader:e.masterPlaylistLoader_, vhs:e.vhs_, master:e.master(), mediaTypes:e.mediaTypes_, blacklistCurrentPlaylist:e.blacklistCurrentPlaylist.bind(e)
                            }

                        ), e.triggerPresenceUsage_(e.master(), t), e.setupFirstPlay(),  !e.mediaTypes_.AUDIO.activePlaylistLoader||e.mediaTypes_.AUDIO.activePlaylistLoader.media()?e.trigger("selectedinitialmedia"):e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", (function() {
                                    e.trigger("selectedinitialmedia")
                                }

                            ))
                    }

                )),
            this.masterPlaylistLoader_.on("loadedplaylist", (function() {
                        e.loadOnPlay_&&e.tech_.off("play", e.loadOnPlay_); var t=e.masterPlaylistLoader_.media(); if( !t) {
                            var i; if(e.excludeUnsupportedVariants_(), e.enableLowInitialPlaylist&&(i=e.selectInitialPlaylist()), i||(i=e.selectPlaylist()),  !i|| !e.shouldSwitchToMedia_(i))return; if(e.initialMedia_=i, e.switchMedia_(e.initialMedia_, "initial"), "vhs-json" !==e.sourceType_|| !e.initialMedia_.segments)return; t=e.initialMedia_
                        }

                        e.handleUpdatedMediaPlaylist(t)
                    }

                )),
            this.masterPlaylistLoader_.on("error", (function() {
                        e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
                    }

                )),
            this.masterPlaylistLoader_.on("mediachanging", (function() {
                        e.mainSegmentLoader_.abort(), e.mainSegmentLoader_.pause()
                    }

                )),
            this.masterPlaylistLoader_.on("mediachange", (function() {
                        var t=e.masterPlaylistLoader_.media(), i=1.5*t.targetDuration*1e3; isLowestEnabledRendition(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i, e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load(), e.tech_.trigger( {
                                type:"mediachange", bubbles: !0
                            }

                        )
                    }

                )),
            this.masterPlaylistLoader_.on("playlistunchanged", (function() {
                        var t=e.masterPlaylistLoader_.media(); "playlist-unchanged" !==t.lastExcludeReason_&&e.stuckAtPlaylistEnd_(t)&&(e.blacklistCurrentPlaylist( {
                                    message:"Playlist no longer updating.", reason:"playlist-unchanged"
                                }

                            ), e.tech_.trigger("playliststuck"))
                    }

                )),
            this.masterPlaylistLoader_.on("renditiondisabled", (function() {
                        e.tech_.trigger( {
                                type:"usage", name:"vhs-rendition-disabled"
                            }

                        ), e.tech_.trigger( {
                                type:"usage", name:"hls-rendition-disabled"
                            }

                        )
                    }

                )),
            this.masterPlaylistLoader_.on("renditionenabled", (function() {
                        e.tech_.trigger( {
                                type:"usage", name:"vhs-rendition-enabled"
                            }

                        ), e.tech_.trigger( {
                                type:"usage", name:"hls-rendition-enabled"
                            }

                        )
                    }

                ))
        }

        ,
        i.handleUpdatedMediaPlaylist=function(e) {
            this.useCueTags_&&this.updateAdCues_(e),
            this.mainSegmentLoader_.playlist(e, this.requestOptions_),
            this.updateDuration( !e.endList),
            this.tech_.paused()||(this.mainSegmentLoader_.load(), this.audioSegmentLoader_&&this.audioSegmentLoader_.load())
        }

        ,
        i.triggerPresenceUsage_=function(e, t) {
            var i=e.mediaGroups|| {}

            ,
            n= !0,
            r=Object.keys(i.AUDIO);
            for(var a in i.AUDIO)for(var s in i.AUDIO[a])i.AUDIO[a][s].uri||(n= !1);

            n&&(this.tech_.trigger( {
                        type:"usage", name:"vhs-demuxed"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-demuxed"
                    }

                )),
            Object.keys(i.SUBTITLES).length&&(this.tech_.trigger( {
                        type:"usage", name:"vhs-webvtt"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-webvtt"
                    }

                )),
            Vhs$1.Playlist.isAes(t)&&(this.tech_.trigger( {
                        type:"usage", name:"vhs-aes"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-aes"
                    }

                )),
            r.length&&Object.keys(i.AUDIO[r[0]]).length>1&&(this.tech_.trigger( {
                        type:"usage", name:"vhs-alternate-audio"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-alternate-audio"
                    }

                )),
            this.useCueTags_&&(this.tech_.trigger( {
                        type:"usage", name:"vhs-playlist-cue-tags"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-playlist-cue-tags"
                    }

                ))
        }

        ,
        i.shouldSwitchToMedia_=function(e) {
            var t=this.masterPlaylistLoader_.media()||this.masterPlaylistLoader_.pendingMedia_,
            i=this.tech_.currentTime(),
            n=this.bufferLowWaterLine(),
            r=this.bufferHighWaterLine(),
            a=this.tech_.buffered();

            return shouldSwitchToMedia( {
                    buffered:a, currentTime:i, currentPlaylist:t, nextPlaylist:e, bufferLowWaterLine:n, bufferHighWaterLine:r, duration:this.duration(), experimentalBufferBasedABR:this.experimentalBufferBasedABR, log:this.logger_
                }

            )
        }

        ,
        i.setupSegmentLoaderListeners_=function() {
            var e=this;

            this.experimentalBufferBasedABR||(this.mainSegmentLoader_.on("bandwidthupdate", (function() {
                            var t=e.selectPlaylist(); e.shouldSwitchToMedia_(t)&&e.switchMedia_(t, "bandwidthupdate"), e.tech_.trigger("bandwidthupdate")
                        }

                    )), this.mainSegmentLoader_.on("progress", (function() {
                            e.trigger("progress")
                        }

                    ))),
            this.mainSegmentLoader_.on("error", (function() {
                        e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
                    }

                )),
            this.mainSegmentLoader_.on("appenderror", (function() {
                        e.error=e.mainSegmentLoader_.error_, e.trigger("error")
                    }

                )),
            this.mainSegmentLoader_.on("syncinfoupdate", (function() {
                        e.onSyncInfoUpdate_()
                    }

                )),
            this.mainSegmentLoader_.on("timestampoffset", (function() {
                        e.tech_.trigger( {
                                type:"usage", name:"vhs-timestamp-offset"
                            }

                        ), e.tech_.trigger( {
                                type:"usage", name:"hls-timestamp-offset"
                            }

                        )
                    }

                )),
            this.audioSegmentLoader_.on("syncinfoupdate", (function() {
                        e.onSyncInfoUpdate_()
                    }

                )),
            this.audioSegmentLoader_.on("appenderror", (function() {
                        e.error=e.audioSegmentLoader_.error_, e.trigger("error")
                    }

                )),
            this.mainSegmentLoader_.on("ended", (function() {
                        e.logger_("main segment loader ended"), e.onEndOfStream()
                    }

                )),
            this.mainSegmentLoader_.on("earlyabort", (function(t) {
                        e.experimentalBufferBasedABR||(e.delegateLoaders_("all", ["abort"]), e.blacklistCurrentPlaylist( {
                                    message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                                }

                                , ABORT_EARLY_BLACKLIST_SECONDS))
                    }

                ));

            var t=function() {
                if( !e.sourceUpdater_.hasCreatedSourceBuffers())return e.tryToCreateSourceBuffers_();
                var t=e.getCodecsOrExclude_();
                t&&e.sourceUpdater_.addOrChangeSourceBuffers(t)
            }

            ;

            this.mainSegmentLoader_.on("trackinfo", t),
            this.audioSegmentLoader_.on("trackinfo", t),
            this.mainSegmentLoader_.on("fmp4", (function() {
                        e.triggeredFmp4Usage||(e.tech_.trigger( {
                                    type:"usage", name:"vhs-fmp4"
                                }

                            ), e.tech_.trigger( {
                                    type:"usage", name:"hls-fmp4"
                                }

                            ), e.triggeredFmp4Usage= !0)
                    }

                )),
            this.audioSegmentLoader_.on("fmp4", (function() {
                        e.triggeredFmp4Usage||(e.tech_.trigger( {
                                    type:"usage", name:"vhs-fmp4"
                                }

                            ), e.tech_.trigger( {
                                    type:"usage", name:"hls-fmp4"
                                }

                            ), e.triggeredFmp4Usage= !0)
                    }

                )),
            this.audioSegmentLoader_.on("ended", (function() {
                        e.logger_("audioSegmentLoader ended"), e.onEndOfStream()
                    }

                ))
        }

        ,
        i.mediaSecondsLoaded_=function() {
            return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)
        }

        ,
        i.load=function() {
            this.mainSegmentLoader_.load(),
            this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),
            this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()
        }

        ,
        i.smoothQualityChange_=function(e) {
            void 0===e&&(e=this.selectPlaylist()),
            this.fastQualityChange_(e)
        }

        ,
        i.fastQualityChange_=function(e) {
            var t=this;

            void 0===e&&(e=this.selectPlaylist()),
            e !==this.masterPlaylistLoader_.media()?(this.switchMedia_(e, "fast-quality"), this.mainSegmentLoader_.resetEverything((function() {
                            videojs.browser.IE_VERSION||videojs.browser.IS_EDGE?t.tech_.setCurrentTime(t.tech_.currentTime()+.04):t.tech_.setCurrentTime(t.tech_.currentTime())
                        }

                    ))):this.logger_("skipping fastQualityChange because new media is same as old")
        }

        ,
        i.play=function() {
            if( !this.setupFirstPlay()) {
                this.tech_.ended()&&this.tech_.setCurrentTime(0),
                this.hasPlayed_&&this.load();
                var e=this.tech_.seekable();
                return this.tech_.duration()===1/0&&this.tech_.currentTime()<e.start(0)?this.tech_.setCurrentTime(e.end(e.length-1)): void 0
            }
        }

        ,
        i.setupFirstPlay=function() {
            var e=this,
            t=this.masterPlaylistLoader_.media();
            if( !t||this.tech_.paused()||this.hasPlayed_)return !1;

            if( !t.endList) {
                var i=this.seekable();
                if( !i.length)return !1;

                if(videojs.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata", (function() {
                            e.trigger("firstplay"), e.tech_.setCurrentTime(i.end(0)), e.hasPlayed_= !0
                        }

                    )),
                 !1;
                this.trigger("firstplay"),
                this.tech_.setCurrentTime(i.end(0))
            }

            return this.hasPlayed_= !0,
            this.load(),
             !0
        }

        ,
        i.handleSourceOpen_=function() {
            if(this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
                var e=this.tech_.play();

                void 0 !==e&&"function"==typeof e.then&&e.then(null, (function(e) {}

                    ))
            }

            this.trigger("sourceopen")
        }

        ,
        i.handleSourceEnded_=function() {
            if(this.inbandTextTracks_.metadataTrack_) {
                var e=this.inbandTextTracks_.metadataTrack_.cues;

                if(e&&e.length) {
                    var t=this.duration();
                    e[e.length-1].endTime=isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE: t
                }
            }
        }

        ,
        i.handleDurationChange_=function() {
            this.tech_.trigger("durationchange")
        }

        ,
        i.onEndOfStream=function() {
            var e=this.mainSegmentLoader_.ended_;

            if(this.mediaTypes_.AUDIO.activePlaylistLoader) {
                var t=this.mainSegmentLoader_.getCurrentMediaInfo_();
                e= !t||t.hasVideo?e&&this.audioSegmentLoader_.ended_: this.audioSegmentLoader_.ended_
            }

            e&&(this.stopABRTimer_(), this.sourceUpdater_.endOfStream())
        }

        ,
        i.stuckAtPlaylistEnd_=function(e) {
            if( !this.seekable().length)return !1;
            var t=this.syncController_.getExpiredTime(e, this.duration());
            if(null===t)return !1;
            var i=Vhs$1.Playlist.playlistEnd(e, t),
            n=this.tech_.currentTime(),
            r=this.tech_.buffered();
            if( !r.length)return i-n<=SAFE_TIME_DELTA;
            var a=r.end(r.length-1);
            return a-n<=SAFE_TIME_DELTA&&i-a<=SAFE_TIME_DELTA
        }

        ,
        i.blacklistCurrentPlaylist=function(e, t) {
            void 0===e&&(e= {}

            );
            var i=e.playlist||this.masterPlaylistLoader_.media();
            if(t=t||e.blacklistDuration||this.blacklistDuration,  !i)return this.error=e,
            void("open" !==this.mediaSource.readyState?this.trigger("error"):this.sourceUpdater_.endOfStream("network"));
            i.playlistErrors_++;
            var n,
            r=this.masterPlaylistLoader_.master.playlists,
            a=r.filter(isEnabled),
            s=1===a.length&&a[0]===i;
            if(1===r.length&&t !==1/0)return videojs.log.warn("Problem encountered with playlist "+i.id+". Trying again since it is the only playlist."),
            this.tech_.trigger("retryplaylist"),
            this.masterPlaylistLoader_.load(s);

            if(s) {
                var o= !1;

                r.forEach((function(e) {
                            if(e !==i) {
                                var t=e.excludeUntil; void 0 !==t&&t !==1/0&&(o= !0, delete e.excludeUntil)
                            }
                        }

                    )),
                o&&(videojs.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"))
            }

            n=i.playlistErrors_>this.maxPlaylistRetries?1/0:Date.now()+1e3*t,
            i.excludeUntil=n,
            e.reason&&(i.lastExcludeReason_=e.reason),
            this.tech_.trigger("blacklistplaylist"),
            this.tech_.trigger( {
                    type:"usage", name:"vhs-rendition-blacklisted"
                }

            ),
            this.tech_.trigger( {
                    type:"usage", name:"hls-rendition-blacklisted"
                }

            );
            var l=this.selectPlaylist();
            if( !l)return this.error="Playback cannot continue. No available working or supported playlists.",
            void this.trigger("error");
            var u=e.internal?this.logger_:videojs.log.warn,
            d=e.message?" "+e.message:"";
            u((e.internal?"Internal problem":"Problem")+" encountered with playlist "+i.id+"."+d+" Switching to playlist "+l.id+"."),
            l.attributes.AUDIO !==i.attributes.AUDIO&&this.delegateLoaders_("audio", ["abort", "pause"]),
            l.attributes.SUBTITLES !==i.attributes.SUBTITLES&&this.delegateLoaders_("subtitle", ["abort", "pause"]),
            this.delegateLoaders_("main", ["abort", "pause"]);
            var c=l.targetDuration/2*1e3||5e3,
            h="number"==typeof l.lastRequest&&Date.now()-l.lastRequest<=c;
            return this.switchMedia_(l, "exclude", s||h)
        }

        ,
        i.pauseLoading=function() {
            this.delegateLoaders_("all", ["abort", "pause"]),
            this.stopABRTimer_()
        }

        ,
        i.delegateLoaders_=function(e, t) {
            var i=this,
            n=[],
            r="all"===e;
            (r||"main"===e)&&n.push(this.masterPlaylistLoader_);
            var a=[];

            (r||"audio"===e)&&a.push("AUDIO"),
            (r||"subtitle"===e)&&(a.push("CLOSED-CAPTIONS"), a.push("SUBTITLES")),
            a.forEach((function(e) {
                        var t=i.mediaTypes_[e]&&i.mediaTypes_[e].activePlaylistLoader; t&&n.push(t)
                    }

                )),
            ["main",
            "audio",
            "subtitle"].forEach((function(t) {
                        var r=i[t+"SegmentLoader_"];  !r||e !==t&&"all" !==e||n.push(r)
                    }

                )),
            n.forEach((function(e) {
                        return t.forEach((function(t) {
                                    "function"==typeof e[t]&&e[t]()
                                }

                            ))
                    }

                ))
        }

        ,
        i.setCurrentTime=function(e) {
            var t=findRange(this.tech_.buffered(), e);
            return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?t&&t.length?e: (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()):0
        }

        ,
        i.duration=function() {
            if( !this.masterPlaylistLoader_)return 0;
            var e=this.masterPlaylistLoader_.media();
            return e?e.endList?this.mediaSource?this.mediaSource.duration: Vhs$1.Playlist.duration(e):1/0:0
        }

        ,
        i.seekable=function() {
            return this.seekable_
        }

        ,
        i.onSyncInfoUpdate_=function() {
            var e;

            if(this.masterPlaylistLoader_) {
                var t=this.masterPlaylistLoader_.media();

                if(t) {
                    var i=this.syncController_.getExpiredTime(t, this.duration());

                    if(null !==i) {
                        var n=this.masterPlaylistLoader_.master,
                        r=Vhs$1.Playlist.seekable(t, i, Vhs$1.Playlist.liveEdgeDelay(n, t));

                        if(0 !==r.length) {
                            if(this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                if(t=this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null===(i=this.syncController_.getExpiredTime(t, this.duration())))return;
                                if(0===(e=Vhs$1.Playlist.seekable(t, i, Vhs$1.Playlist.liveEdgeDelay(n, t))).length)return
                            }

                            var a,
                            s;
                            this.seekable_&&this.seekable_.length&&(a=this.seekable_.end(0), s=this.seekable_.start(0)),
                            e?e.start(0)>r.end(0)||r.start(0)>e.end(0)?this.seekable_=r:this.seekable_=videojs.createTimeRanges([[e.start(0)>r.start(0)?e.start(0):r.start(0), e.end(0)<r.end(0)?e.end(0):r.end(0)]]):this.seekable_=r,
                            this.seekable_&&this.seekable_.length&&this.seekable_.end(0)===a&&this.seekable_.start(0)===s||(this.logger_("seekable updated ["+printableRange(this.seekable_)+"]"), this.tech_.trigger("seekablechanged"))
                        }
                    }
                }
            }
        }

        ,
        i.updateDuration=function(e) {
            if(this.updateDuration_&&(this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_=null), "open" !==this.mediaSource.readyState)return this.updateDuration_=this.updateDuration.bind(this, e),
            void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);

            if(e) {
                var t=this.seekable();
                if( !t.length)return;
                (isNaN(this.mediaSource.duration)||this.mediaSource.duration<t.end(t.length-1))&&this.sourceUpdater_.setDuration(t.end(t.length-1))
            }

            else {
                var i=this.tech_.buffered(),
                n=Vhs$1.Playlist.duration(this.masterPlaylistLoader_.media());
                i.length>0&&(n=Math.max(n, i.end(i.length-1))),
                this.mediaSource.duration !==n&&this.sourceUpdater_.setDuration(n)
            }
        }

        ,
        i.dispose=function() {
            var e=this;

            this.trigger("dispose"),
            this.decrypter_.terminate(),
            this.masterPlaylistLoader_.dispose(),
            this.mainSegmentLoader_.dispose(),
            this.loadOnPlay_&&this.tech_.off("play", this.loadOnPlay_),
            ["AUDIO",
            "SUBTITLES"].forEach((function(t) {
                        var i=e.mediaTypes_[t].groups; for(var n in i)i[n].forEach((function(e) {
                                    e.playlistLoader&&e.playlistLoader.dispose()
                                }

                            ))
                    }

                )),
            this.audioSegmentLoader_.dispose(),
            this.subtitleSegmentLoader_.dispose(),
            this.sourceUpdater_.dispose(),
            this.timelineChangeController_.dispose(),
            this.stopABRTimer_(),
            this.updateDuration_&&this.mediaSource.removeEventListener("sourceopen", this.updateDuration_),
            this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_),
            this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_),
            this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_),
            this.off()
        }

        ,
        i.master=function() {
            return this.masterPlaylistLoader_.master
        }

        ,
        i.media=function() {
            return this.masterPlaylistLoader_.media()||this.initialMedia_
        }

        ,
        i.areMediaTypesKnown_=function() {
            var e= ! !this.mediaTypes_.AUDIO.activePlaylistLoader,
            t= ! !this.mainSegmentLoader_.getCurrentMediaInfo_(),
            i= !e|| ! !this.audioSegmentLoader_.getCurrentMediaInfo_();
            return !( !t|| !i)
        }

        ,
        i.getCodecsOrExclude_=function() {

            var e=this,
            t= {
                main:this.mainSegmentLoader_.getCurrentMediaInfo_()|| {}

                ,
                audio:this.audioSegmentLoader_.getCurrentMediaInfo_()|| {}
            }

            ;
            t.video=t.main;

            var i=codecsForPlaylist(this.master(), this.media()),
            n= {}

            ,
            r= ! !this.mediaTypes_.AUDIO.activePlaylistLoader;

            if(t.main.hasVideo&&(n.video=i.video||t.main.videoCodec||codecs_js.DEFAULT_VIDEO_CODEC), t.main.isMuxed&&(n.video+=","+(i.audio||t.main.audioCodec||codecs_js.DEFAULT_AUDIO_CODEC)), (t.main.hasAudio&& !t.main.isMuxed||t.audio.hasAudio||r)&&(n.audio=i.audio||t.main.audioCodec||t.audio.audioCodec||codecs_js.DEFAULT_AUDIO_CODEC, t.audio.isFmp4=t.main.hasAudio&& !t.main.isMuxed?t.main.isFmp4:t.audio.isFmp4), n.audio||n.video) {

                var a,
                s= {}

                ;

                if(["video", "audio"].forEach((function(e) {
                                if(n.hasOwnProperty(e)&&(r=t[e].isFmp4, o=n[e],  !(r?codecs_js.browserSupportsCodec(o):codecs_js.muxerSupportsCodec(o)))) {
                                    var i=t[e].isFmp4?"browser":"muxer"; s[i]=s[i]||[], s[i].push(n[e]), "audio"===e&&(a=i)
                                }

                                var r, o
                            }

                        )), r&&a&&this.media().attributes.AUDIO) {
                    var o=this.media().attributes.AUDIO;

                    this.master().playlists.forEach((function(t) {
                                (t.attributes&&t.attributes.AUDIO)===o&&t !==e.media()&&(t.excludeUntil=1/0)
                            }

                        )),
                    this.logger_("excluding audio group "+o+" as "+a+' does not support codec(s): "'+n.audio+'"')
                }

                if( !Object.keys(s).length) {
                    if(this.sourceUpdater_.hasCreatedSourceBuffers()&& !this.sourceUpdater_.canChangeType()) {
                        var l=[];

                        if(["video", "audio"].forEach((function(t) {
                                        var i=(codecs_js.parseCodecs(e.sourceUpdater_.codecs[t]||"")[0]|| {}

                                        ).type, r=(codecs_js.parseCodecs(n[t]||"")[0]|| {}

                                        ).type; i&&r&&i.toLowerCase() !==r.toLowerCase()&&l.push('"'+e.sourceUpdater_.codecs[t]+'" -> "'+n[t]+'"')
                                    }

                                )), l.length)return void this.blacklistCurrentPlaylist( {
                                playlist:this.media(), message:"Codec switching not supported: "+l.join(", ")+".", blacklistDuration:1/0, internal: !0
                            }

                        )
                    }

                    return n
                }

                var u=Object.keys(s).reduce((function(e, t) {
                            return e&&(e+=", "), e+(t+' does not support codec(s): "')+s[t].join(",")+'"'
                        }

                    ), "")+".";

                this.blacklistCurrentPlaylist( {
                        playlist:this.media(), internal: !0, message:u, blacklistDuration:1/0
                    }

                )
            }

            else this.blacklistCurrentPlaylist( {
                    playlist:this.media(), message:"Could not determine codecs for playlist.", blacklistDuration:1/0
                }

            )
        }

        ,
        i.tryToCreateSourceBuffers_=function() {
            if("open"===this.mediaSource.readyState&& !this.sourceUpdater_.hasCreatedSourceBuffers()&&this.areMediaTypesKnown_()) {
                var e=this.getCodecsOrExclude_();

                if(e) {
                    this.sourceUpdater_.createSourceBuffers(e);
                    var t=[e.video,
                    e.audio].filter(Boolean).join(",");
                    this.excludeIncompatibleVariants_(t)
                }
            }
        }

        ,
        i.excludeUnsupportedVariants_=function() {
            var e=this,
            t=this.master().playlists,
            i=[];

            Object.keys(t).forEach((function(n) {
                        var r=t[n]; if(-1===i.indexOf(r.id)) {
                            i.push(r.id); var a=codecsForPlaylist(e.master, r), s=[];  !a.audio||codecs_js.muxerSupportsCodec(a.audio)||codecs_js.browserSupportsCodec(a.audio)||s.push("audio codec "+a.audio),  !a.video||codecs_js.muxerSupportsCodec(a.video)||codecs_js.browserSupportsCodec(a.video)||s.push("video codec "+a.video), a.text&&"stpp.ttml.im1t"===a.text&&s.push("text codec "+a.text), s.length&&(r.excludeUntil=1/0, e.logger_("excluding "+r.id+" for unsupported: "+s.join(", ")))
                        }
                    }

                ))
        }

        ,
        i.excludeIncompatibleVariants_=function(e) {
            var t=this,
            i=[],
            n=this.master().playlists,
            r=unwrapCodecList(codecs_js.parseCodecs(e)),
            a=codecCount(r),
            s=r.video&&codecs_js.parseCodecs(r.video)[0]||null,
            o=r.audio&&codecs_js.parseCodecs(r.audio)[0]||null;

            Object.keys(n).forEach((function(e) {
                        var r=n[e]; if(-1===i.indexOf(r.id)&&r.excludeUntil !==1/0) {
                            i.push(r.id); var l=[], u=codecsForPlaylist(t.masterPlaylistLoader_.master, r), d=codecCount(u); if(u.audio||u.video) {
                                if(d !==a&&l.push('codec count "'+d+'" !== "'+a+'"'),  !t.sourceUpdater_.canChangeType()) {
                                    var c=u.video&&codecs_js.parseCodecs(u.video)[0]||null, h=u.audio&&codecs_js.parseCodecs(u.audio)[0]||null; c&&s&&c.type.toLowerCase() !==s.type.toLowerCase()&&l.push('video codec "'+c.type+'" !== "'+s.type+'"'), h&&o&&h.type.toLowerCase() !==o.type.toLowerCase()&&l.push('audio codec "'+h.type+'" !== "'+o.type+'"')
                                }

                                l.length&&(r.excludeUntil=1/0, t.logger_("blacklisting "+r.id+": "+l.join(" && ")))
                            }
                        }
                    }

                ))
        }

        ,
        i.updateAdCues_=function(e) {
            var t=0,
            i=this.seekable();
            i.length&&(t=i.start(0)),
            updateAdCues(e, this.cueTagsTrack_, t)
        }

        ,
        i.goalBufferLength=function() {
            var e=this.tech_.currentTime(),
            t=Config.GOAL_BUFFER_LENGTH,
            i=Config.GOAL_BUFFER_LENGTH_RATE,
            n=Math.max(t, Config.MAX_GOAL_BUFFER_LENGTH);
            return Math.min(t+e*i, n)
        }

        ,
        i.bufferLowWaterLine=function() {
            var e=this.tech_.currentTime(),
            t=Config.BUFFER_LOW_WATER_LINE,
            i=Config.BUFFER_LOW_WATER_LINE_RATE,
            n=Math.max(t, Config.MAX_BUFFER_LOW_WATER_LINE),
            r=Math.max(t, Config.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
            return Math.min(t+e*i, this.experimentalBufferBasedABR?r:n)
        }

        ,
        i.bufferHighWaterLine=function() {
            return Config.BUFFER_HIGH_WATER_LINE
        }

        ,
        t
    }

    (videojs.EventTarget),
    enableFunction=function(e, t, i) {
        return function(n) {
            var r=e.master.playlists[t],
            a=isIncompatible(r),
            s=isEnabled(r);
            return void 0===n?s: (n?delete r.disabled:r.disabled= !0, n===s||a||(i(), n?e.trigger("renditionenabled"):e.trigger("renditiondisabled")), n)
        }
    }

    ,
    Representation=function(e, t, i) {
        var n=e.masterPlaylistController_,
        r=n[(e.options_.smoothQualityChange?"smooth":"fast")+"QualityChange_"].bind(n);

        if(t.attributes) {
            var a=t.attributes.RESOLUTION;
            this.width=a&&a.width,
            this.height=a&&a.height,
            this.bandwidth=t.attributes.BANDWIDTH
        }

        this.codecs=codecsForPlaylist(n.master(), t),
        this.playlist=t,
        this.id=i,
        this.enabled=enableFunction(e.playlists, t.id, r)
    }

    ,
    renditionSelectionMixin=function(e) {
        e.representations=function() {
            var t=e.masterPlaylistController_.master(),
            i=isAudioOnly(t)?e.masterPlaylistController_.getAudioTrackPlaylists_(): t.playlists;

            return i?i.filter((function(e) {
                        return !isIncompatible(e)
                    }

                )).map((function(t, i) {
                        return new Representation(e, t, t.id)
                    }

                )):[]
        }
    }

    ,
    timerCancelEvents=["seeking",
    "seeked",
    "pause",
    "playing",
    "error"],
    PlaybackWatcher=function() {
        function e(e) {
            var t=this;
            this.masterPlaylistController_=e.masterPlaylistController,
            this.tech_=e.tech,
            this.seekable=e.seekable,
            this.allowSeeksWithinUnsafeLiveWindow=e.allowSeeksWithinUnsafeLiveWindow,
            this.liveRangeSafeTimeDelta=e.liveRangeSafeTimeDelta,
            this.media=e.media,
            this.consecutiveUpdates=0,
            this.lastRecordedTime=null,
            this.timer_=null,
            this.checkCurrentTimeTimeout_=null,
            this.logger_=logger("PlaybackWatcher"),
            this.logger_("initialize");

            var i=function() {
                return t.monitorCurrentTime_()
            }

            ,
            n=function() {
                return t.monitorCurrentTime_()
            }

            ,
            r=function() {
                return t.techWaiting_()
            }

            ,
            a=function() {
                return t.cancelTimer_()
            }

            ,
            s=this.masterPlaylistController_,
            o=["main",
            "subtitle",
            "audio"],
            l= {}

            ;

            o.forEach((function(e) {
                        l[e]= {
                            reset:function() {
                                return t.resetSegmentDownloads_(e)
                            }

                            , updateend:function() {
                                return t.checkSegmentDownloads_(e)
                            }
                        }

                        , s[e+"SegmentLoader_"].on("appendsdone", l[e].updateend), s[e+"SegmentLoader_"].on("playlistupdate", l[e].reset), t.tech_.on(["seeked", "seeking"], l[e].reset)
                    }

                ));

            var u=function(e) {

                ["main",
                "audio"].forEach((function(i) {
                            s[i+"SegmentLoader_"][e]("appended", t.seekingAppendCheck_)
                        }

                    ))
            }

            ;

            this.seekingAppendCheck_=function() {
                t.fixesBadSeeks_()&&(t.consecutiveUpdates=0, t.lastRecordedTime=t.tech_.currentTime(), u("off"))
            }

            ,
            this.clearSeekingAppendCheck_=function() {
                return u("off")
            }

            ,
            this.watchForBadSeeking_=function() {
                t.clearSeekingAppendCheck_(),
                u("on")
            }

            ,
            this.tech_.on("seeked", this.clearSeekingAppendCheck_),
            this.tech_.on("seeking", this.watchForBadSeeking_),
            this.tech_.on("waiting", r),
            this.tech_.on(timerCancelEvents, a),
            this.tech_.on("canplay", n),
            this.tech_.one("play", i),
            this.dispose=function() {

                t.clearSeekingAppendCheck_(),
                t.logger_("dispose"),
                t.tech_.off("waiting", r),
                t.tech_.off(timerCancelEvents, a),
                t.tech_.off("canplay", n),
                t.tech_.off("play", i),
                t.tech_.off("seeking", t.watchForBadSeeking_),
                t.tech_.off("seeked", t.clearSeekingAppendCheck_),
                o.forEach((function(e) {
                            s[e+"SegmentLoader_"].off("appendsdone", l[e].updateend), s[e+"SegmentLoader_"].off("playlistupdate", l[e].reset), t.tech_.off(["seeked", "seeking"], l[e].reset)
                        }

                    )),
                t.checkCurrentTimeTimeout_&&window__default.default.clearTimeout(t.checkCurrentTimeTimeout_),
                t.cancelTimer_()
            }
        }

        var t=e.prototype;

        return t.monitorCurrentTime_=function() {
            this.checkCurrentTime_(),
            this.checkCurrentTimeTimeout_&&window__default.default.clearTimeout(this.checkCurrentTimeTimeout_),
            this.checkCurrentTimeTimeout_=window__default.default.setTimeout(this.monitorCurrentTime_.bind(this), 250)
        }

        ,
        t.resetSegmentDownloads_=function(e) {
            var t=this.masterPlaylistController_[e+"SegmentLoader_"];
            this[e+"StalledDownloads_"]>0&&this.logger_("resetting possible stalled download count for "+e+" loader"),
            this[e+"StalledDownloads_"]=0,
            this[e+"Buffered_"]=t.buffered_()
        }

        ,
        t.checkSegmentDownloads_=function(e) {
            var t=this.masterPlaylistController_,
            i=t[e+"SegmentLoader_"],
            n=i.buffered_(),
            r=isRangeDifferent(this[e+"Buffered_"], n);

            this[e+"Buffered_"]=n,
            r?this.resetSegmentDownloads_(e):(this[e+"StalledDownloads_"]++, this.logger_("found #"+this[e+"StalledDownloads_"]+" "+e+" appends that did not increase buffer (possible stalled download)", {
                        playlistId:i.playlist_&&i.playlist_.id, buffered:timeRangesToArray(n)
                    }

                ), this[e+"StalledDownloads_"]<10||(this.logger_(e+" loader stalled download exclusion"), this.resetSegmentDownloads_(e), this.tech_.trigger( {
                            type:"usage", name:"vhs-"+e+"-download-exclusion"
                        }

                    ), "subtitle" !==e&&t.blacklistCurrentPlaylist( {
                            message:"Excessive "+e+" segment downloading detected."
                        }

                        , 1/0)))
        }

        ,
        t.checkCurrentTime_=function() {
            if( !this.tech_.paused()&& !this.tech_.seeking()) {
                var e=this.tech_.currentTime(),
                t=this.tech_.buffered();
                if(this.lastRecordedTime===e&&( !t.length||e+SAFE_TIME_DELTA>=t.end(t.length-1)))return this.techWaiting_();
                this.consecutiveUpdates>=5&&e===this.lastRecordedTime?(this.consecutiveUpdates++, this.waiting_()): e===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0, this.lastRecordedTime=e)
            }
        }

        ,
        t.cancelTimer_=function() {
            this.consecutiveUpdates=0,
            this.timer_&&(this.logger_("cancelTimer_"), clearTimeout(this.timer_)),
            this.timer_=null
        }

        ,
        t.fixesBadSeeks_=function() {
            if( !this.tech_.seeking())return !1;
            var e,
            t=this.seekable(),
            i=this.tech_.currentTime();

            if(this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow)&&(e=t.end(t.length-1)), this.beforeSeekableWindow_(t, i)) {
                var n=t.start(0);
                e=n+(n===t.end(0)?0:SAFE_TIME_DELTA)
            }

            if(void 0 !==e)return this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+printableRange(t)+". Seeking to "+e+"."),
            this.tech_.setCurrentTime(e),
             !0;
            for(var r=this.masterPlaylistController_.sourceUpdater_, a=this.tech_.buffered(), s=r.audioBuffer?r.audioBuffered():null, o=r.videoBuffer?r.videoBuffered():null, l=this.media(), u=l.partTargetDuration?l.partTargetDuration:2*(l.targetDuration-TIME_FUDGE_FACTOR), d=[s, o], c=0; c<d.length; c++)if(d[c]&&timeAheadOf(d[c], i)<u)return !1;
            var h=findNextRange(a, i);
            return 0 !==h.length&&(e=h.start(0)+SAFE_TIME_DELTA, this.logger_("Buffered region starts ("+h.start(0)+")  just beyond seek point ("+i+"). Seeking to "+e+"."), this.tech_.setCurrentTime(e),  !0)
        }

        ,
        t.waiting_=function() {
            if( !this.techWaiting_()) {
                var e=this.tech_.currentTime(),
                t=this.tech_.buffered(),
                i=findRange(t, e);

                return i.length&&e+3<=i.end(0)?(this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_("Stopped at "+e+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."), this.tech_.trigger( {
                            type:"usage", name:"vhs-unknown-waiting"
                        }

                    ), void this.tech_.trigger( {
                            type:"usage", name:"hls-unknown-waiting"
                        }

                    )):void 0
            }
        }

        ,
        t.techWaiting_=function() {
            var e=this.seekable(),
            t=this.tech_.currentTime();
            if(this.tech_.seeking()||null !==this.timer_)return !0;

            if(this.beforeSeekableWindow_(e, t)) {
                var i=e.end(e.length-1);

                return this.logger_("Fell out of live window at time "+t+". Seeking to live point (seekable end) "+i),
                this.cancelTimer_(),
                this.tech_.setCurrentTime(i),
                this.tech_.trigger( {
                        type:"usage", name:"vhs-live-resync"
                    }

                ),
                this.tech_.trigger( {
                        type:"usage", name:"hls-live-resync"
                    }

                ),
                 !0
            }

            var n=this.tech_.vhs.masterPlaylistController_.sourceUpdater_,
            r=this.tech_.buffered();

            if(this.videoUnderflow_( {
                        audioBuffered:n.audioBuffered(), videoBuffered:n.videoBuffered(), currentTime:t
                    }

                ))return this.cancelTimer_(),
            this.tech_.setCurrentTime(t),
            this.tech_.trigger( {
                    type:"usage", name:"vhs-video-underflow"
                }

            ),
            this.tech_.trigger( {
                    type:"usage", name:"hls-video-underflow"
                }

            ),
             !0;
            var a=findNextRange(r, t);

            if(a.length>0) {
                var s=a.start(0)-t;
                return this.logger_("Stopped at "+t+", setting timer for "+s+", seeking to "+a.start(0)),
                this.cancelTimer_(),
                this.timer_=setTimeout(this.skipTheGap_.bind(this), 1e3*s, t),
                 !0
            }

            return !1
        }

        ,
        t.afterSeekableWindow_=function(e, t, i, n) {
            if(void 0===n&&(n= !1),  !e.length)return !1;
            var r=e.end(e.length-1)+SAFE_TIME_DELTA;
            return !i.endList&&n&&(r=e.end(e.length-1)+3*i.targetDuration),
            t>r
        }

        ,
        t.beforeSeekableWindow_=function(e, t) {
            return ! !(e.length&&e.start(0)>0&&t<e.start(0)-this.liveRangeSafeTimeDelta)
        }

        ,
        t.videoUnderflow_=function(e) {
            var t=e.videoBuffered,
            i=e.audioBuffered,
            n=e.currentTime;

            if(t) {
                var r;

                if(t.length&&i.length) {
                    var a=findRange(t, n-3),
                    s=findRange(t, n),
                    o=findRange(i, n);

                    o.length&& !s.length&&a.length&&(r= {
                            start:a.end(0), end:o.end(0)
                        }

                    )
                }

                else findNextRange(t, n).length||(r=this.gapFromVideoUnderflow_(t, n));
                return ! !r&&(this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+n),  !0)
            }
        }

        ,
        t.skipTheGap_=function(e) {
            var t=this.tech_.buffered(),
            i=this.tech_.currentTime(),
            n=findNextRange(t, i);

            this.cancelTimer_(),
            0 !==n.length&&i===e&&(this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), this.tech_.setCurrentTime(n.start(0)+TIME_FUDGE_FACTOR), this.tech_.trigger( {
                        type:"usage", name:"vhs-gap-skip"
                    }

                ), this.tech_.trigger( {
                        type:"usage", name:"hls-gap-skip"
                    }

                ))
        }

        ,
        t.gapFromVideoUnderflow_=function(e, t) {
            for(var i=findGaps(e), n=0; n<i.length; n++) {
                var r=i.start(n),
                a=i.end(n);

                if(t-r<4&&t-r>2)return {
                    start: r, end:a
                }
            }

            return null
        }

        ,
        e
    }

    (),
    defaultOptions= {

        errorInterval:30,
        getSource:function(e) {
            return e(this.tech( {
                        IWillNotUseThisInPlugins: !0
                    }

                ).currentSource_||this.currentSource())
        }
    }

    ,
    initPlugin=function e(t, i) {
        var n=0,
        r=0,
        a=videojs.mergeOptions(defaultOptions, i);

        t.ready((function() {
                    t.trigger( {
                            type:"usage", name:"vhs-error-reload-initialized"
                        }

                    ), t.trigger( {
                            type:"usage", name:"hls-error-reload-initialized"
                        }

                    )
                }

            ));

        var s=function() {
            r&&t.currentTime(r)
        }

        ,
        o=function(e) {
            null !=e&&(r=t.duration() !==1/0&&t.currentTime()||0, t.one("loadedmetadata", s), t.src(e), t.trigger( {
                        type:"usage", name:"vhs-error-reload"
                    }

                ), t.trigger( {
                        type:"usage", name:"hls-error-reload"
                    }

                ), t.play())
        }

        ,
        l=function() {
            return Date.now()-n<1e3*a.errorInterval?(t.trigger( {
                        type:"usage", name:"vhs-error-reload-canceled"
                    }

                ), void t.trigger( {
                        type:"usage", name:"hls-error-reload-canceled"
                    }

                )):a.getSource&&"function"==typeof a.getSource?(n=Date.now(), a.getSource.call(t, o)):void videojs.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
        }

        ,
        u=function e() {
            t.off("loadedmetadata", s),
            t.off("error", l),
            t.off("dispose", e)
        }

        ;

        t.on("error", l),
        t.on("dispose", u),
        t.reloadSourceOnError=function(i) {
            u(),
            e(t, i)
        }
    }

    ,
    reloadSourceOnError=function(e) {
        initPlugin(this, e)
    }

    ,
    version$4="2.14.2",
    version$3="6.0.1",
    version$2="0.21.1",
    version$1="4.7.1",
    version="3.1.3",
    Vhs= {
        PlaylistLoader: PlaylistLoader, Playlist:Playlist, utils:utils, STANDARD_PLAYLIST_SELECTOR:lastBandwidthSelector, INITIAL_PLAYLIST_SELECTOR:lowestBitrateCompatibleVariantSelector, lastBandwidthSelector:lastBandwidthSelector, movingAverageBandwidthSelector:movingAverageBandwidthSelector, comparePlaylistBandwidth:comparePlaylistBandwidth, comparePlaylistResolution:comparePlaylistResolution, xhr:xhrFactory()
    }

    ;

    Object.keys(Config).forEach((function(e) {
                Object.defineProperty(Vhs, e, {
                        get:function() {
                            return videojs.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing"), Config[e]
                        }

                        , set:function(t) {
                            videojs.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing"), "number" !=typeof t||t<0?videojs.log.warn("value of Vhs."+e+" must be greater than or equal to 0"):Config[e]=t
                        }
                    }

                )
            }

        ));

    var LOCAL_STORAGE_KEY="videojs-vhs",
    handleVhsMediaChange=function(e, t) {
        for(var i=t.media(), n=-1, r=0; r<e.length; r++)if(e[r].id===i.id) {
            n=r;
            break
        }

        e.selectedIndex_=n,
        e.trigger( {
                selectedIndex:n, type:"change"
            }

        )
    }

    ,
    handleVhsLoadedMetadata=function(e, t) {
        t.representations().forEach((function(t) {
                    e.addQualityLevel(t)
                }

            )),
        handleVhsMediaChange(e, t.playlists)
    }

    ;

    Vhs.canPlaySource=function() {
        return videojs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    }

    ;

    var emeKeySystems=function(e, t, i) {
        if( !e)return e;

        var n= {}

        ;
        t&&t.attributes&&t.attributes.CODECS&&(n=unwrapCodecList(codecs_js.parseCodecs(t.attributes.CODECS))),
        i&&i.attributes&&i.attributes.CODECS&&(n.audio=i.attributes.CODECS);

        var r=codecs_js.getMimeForCodec(n.video),
        a=codecs_js.getMimeForCodec(n.audio),
        s= {}

        ;

        for(var o in e)s[o]= {}

        ,
        a&&(s[o].audioContentType=a),
        r&&(s[o].videoContentType=r),
        t.contentProtection&&t.contentProtection[o]&&t.contentProtection[o].pssh&&(s[o].pssh=t.contentProtection[o].pssh),
        "string"==typeof e[o]&&(s[o].url=e[o]);
        return videojs.mergeOptions(e, s)
    }

    ,
    getAllPsshKeySystemsOptions=function(e, t) {
        return e.reduce((function(e, i) {
                    if( !i.contentProtection)return e; var n=t.reduce((function(e, t) {
                                var n=i.contentProtection[t]; return n&&n.pssh&&(e[t]= {
                                        pssh:n.pssh
                                    }

                                ), e
                            }

                        ), {}

                    ); return Object.keys(n).length&&e.push(n), e
                }

            ), [])
    }

    ,
    waitForKeySessionCreation=function(e) {
        var t=e.player,
        i=e.sourceKeySystems,
        n=e.audioMedia,
        r=e.mainPlaylists;
        if( !t.eme.initializeMediaKeys)return Promise.resolve();
        var a=n?r.concat([n]): r, s=getAllPsshKeySystemsOptions(a, Object.keys(i)), o=[], l=[];

        return s.forEach((function(e) {
                    l.push(new Promise((function(e, i) {
                                    t.tech_.one("keysessioncreated", e)
                                }

                            ))), o.push(new Promise((function(i, n) {
                                    t.eme.initializeMediaKeys( {
                                            keySystems:e
                                        }

                                        , (function(e) {
                                                e?n(e):i()
                                            }

                                        ))
                                }

                            )))
                }

            )),
        Promise.race([Promise.all(o), Promise.race(l)])
    }

    ,
    setupEmeOptions=function(e) {
        var t=e.player,
        i=e.sourceKeySystems,
        n=e.media,
        r=e.audioMedia,
        a=emeKeySystems(i, n, r);
        return !( !a||(t.currentSource().keySystems=a, a&& !t.eme&&(videojs.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), 1)))
    }

    ,
    getVhsLocalStorage=function() {
        if( !window__default.default.localStorage)return null;
        var e=window__default.default.localStorage.getItem(LOCAL_STORAGE_KEY);
        if( !e)return null;

        try {
            return JSON.parse(e)
        }

        catch(e) {
            return null
        }
    }

    ,
    updateVhsLocalStorage=function(e) {
        if( !window__default.default.localStorage)return !1;
        var t=getVhsLocalStorage();
        t=t?videojs.mergeOptions(t, e): e;

        try {
            window__default.default.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(t))
        }

        catch(e) {
            return !1
        }

        return t
    }

    ,
    expandDataUri=function(e) {
        return 0===e.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,")?JSON.parse(e.substring(e.indexOf(",")+1)): e
    }

    ;

    Vhs.supportsNativeHls=function() {
        if( !document__default.default|| !document__default.default.createElement)return !1;
        var e=document__default.default.createElement("video");

        return ! !videojs.getTech("Html5").isSupported()&&["application/vnd.apple.mpegurl",
        "audio/mpegurl",
        "audio/x-mpegurl",
        "application/x-mpegurl",
        "video/x-mpegurl",
        "video/mpegurl",
        "application/mpegurl"].some((function(t) {
                    return/maybe|probably/i.test(e.canPlayType(t))
                }

            ))
    }

    (),
    Vhs.supportsNativeDash= ! !(document__default.default&&document__default.default.createElement&&videojs.getTech("Html5").isSupported())&&/maybe|probably/i.test(document__default.default.createElement("video").canPlayType("application/dash+xml")),
    Vhs.supportsTypeNatively=function(e) {
        return"hls"===e?Vhs.supportsNativeHls: "dash"===e&&Vhs.supportsNativeDash
    }

    ,
    Vhs.isSupported=function() {
        return videojs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    }

    ;

    var Component=videojs.getComponent("Component"),
    VhsHandler=function(e) {
        function t(t, i, n) {
            var r;

            if(r=e.call(this, i, videojs.mergeOptions(n.hls, n.vhs))||this, n.hls&&Object.keys(n.hls).length&&videojs.log.warn("Using hls options is deprecated. Please rename `hls` to `vhs` in your options object."), "number"==typeof n.initialBandwidth&&(r.options_.bandwidth=n.initialBandwidth), r.logger_=logger("VhsHandler"), i.options_&&i.options_.playerId) {
                var a=videojs(i.options_.playerId);

                a.hasOwnProperty("hls")||Object.defineProperty(a, "hls", {
                        get:function() {
                            return videojs.log.warn("player.hls is deprecated. Use player.tech().vhs instead."), i.trigger( {
                                    type:"usage", name:"hls-player-access"
                                }

                            ), _assertThisInitialized__default.default(r)
                        }

                        , configurable: !0
                    }

                ),
                a.hasOwnProperty("vhs")||Object.defineProperty(a, "vhs", {
                        get:function() {
                            return videojs.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."), i.trigger( {
                                    type:"usage", name:"vhs-player-access"
                                }

                            ), _assertThisInitialized__default.default(r)
                        }

                        , configurable: !0
                    }

                ),
                a.hasOwnProperty("dash")||Object.defineProperty(a, "dash", {
                        get:function() {
                            return videojs.log.warn("player.dash is deprecated. Use player.tech().vhs instead."), _assertThisInitialized__default.default(r)
                        }

                        , configurable: !0
                    }

                ),
                r.player_=a
            }

            if(r.tech_=i, r.source_=t, r.stats= {}

                , r.ignoreNextSeekingEvent_= !1, r.setOptions_(), r.options_.overrideNative&&i.overrideNativeAudioTracks&&i.overrideNativeVideoTracks)i.overrideNativeAudioTracks( !0),
            i.overrideNativeVideoTracks( !0);
            else if(r.options_.overrideNative&&(i.featuresNativeVideoTracks||i.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");

            return r.on(document__default.default, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (function(e) {
                        var t=document__default.default.fullscreenElement||document__default.default.webkitFullscreenElement||document__default.default.mozFullScreenElement||document__default.default.msFullscreenElement; t&&t.contains(r.tech_.el())?r.masterPlaylistController_.fastQualityChange_():r.masterPlaylistController_.checkABR_()
                    }

                )),
            r.on(r.tech_, "seeking", (function() {
                        this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_= !1:this.setCurrentTime(this.tech_.currentTime())
                    }

                )),
            r.on(r.tech_, "error", (function() {
                        this.tech_.error()&&this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()
                    }

                )),
            r.on(r.tech_, "play", r.play),
            r
        }

        _inheritsLoose__default.default(t, e);
        var i=t.prototype;

        return i.setOptions_=function() {
            var e=this;

            if(this.options_.withCredentials=this.options_.withCredentials|| !1, this.options_.handleManifestRedirects= !1 !==this.options_.handleManifestRedirects, this.options_.limitRenditionByPlayerDimensions= !1 !==this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio=this.options_.useDevicePixelRatio|| !1, this.options_.smoothQualityChange=this.options_.smoothQualityChange|| !1, this.options_.useBandwidthFromLocalStorage=void 0 !==this.source_.useBandwidthFromLocalStorage?this.source_.useBandwidthFromLocalStorage:this.options_.useBandwidthFromLocalStorage|| !1, this.options_.useNetworkInformationApi=this.options_.useNetworkInformationApi|| !1, this.options_.useDtsForTimestampOffset=this.options_.useDtsForTimestampOffset|| !1, this.options_.customTagParsers=this.options_.customTagParsers||[], this.options_.customTagMappers=this.options_.customTagMappers||[], this.options_.cacheEncryptionKeys=this.options_.cacheEncryptionKeys|| !1, "number" !=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300), "number" !=typeof this.options_.bandwidth&&this.options_.useBandwidthFromLocalStorage) {
                var t=getVhsLocalStorage();

                t&&t.bandwidth&&(this.options_.bandwidth=t.bandwidth, this.tech_.trigger( {
                            type:"usage", name:"vhs-bandwidth-from-local-storage"
                        }

                    ), this.tech_.trigger( {
                            type:"usage", name:"hls-bandwidth-from-local-storage"
                        }

                    )),
                t&&t.throughput&&(this.options_.throughput=t.throughput, this.tech_.trigger( {
                            type:"usage", name:"vhs-throughput-from-local-storage"
                        }

                    ), this.tech_.trigger( {
                            type:"usage", name:"hls-throughput-from-local-storage"
                        }

                    ))
            }

            "number" !=typeof this.options_.bandwidth&&(this.options_.bandwidth=Config.INITIAL_BANDWIDTH),
            this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&this.options_.bandwidth===Config.INITIAL_BANDWIDTH,
            ["withCredentials",
            "useDevicePixelRatio",
            "limitRenditionByPlayerDimensions",
            "bandwidth",
            "smoothQualityChange",
            "customTagParsers",
            "customTagMappers",
            "handleManifestRedirects",
            "cacheEncryptionKeys",
            "playlistSelector",
            "initialPlaylistSelector",
            "experimentalBufferBasedABR",
            "liveRangeSafeTimeDelta",
            "experimentalLLHLS",
            "useNetworkInformationApi",
            "useDtsForTimestampOffset",
            "experimentalExactManifestTimings",
            "experimentalLeastPixelDiffSelector"].forEach((function(t) {
                        void 0 !==e.source_[t]&&(e.options_[t]=e.source_[t])
                    }

                )),
            this.limitRenditionByPlayerDimensions=this.options_.limitRenditionByPlayerDimensions,
            this.useDevicePixelRatio=this.options_.useDevicePixelRatio
        }

        ,
        i.src=function(e, t) {
            var i=this;

            if(e) {

                this.setOptions_(),
                this.options_.src=expandDataUri(this.source_.src),
                this.options_.tech=this.tech_,
                this.options_.externVhs=Vhs,
                this.options_.sourceType=mediaTypes_js.simpleTypeFromSourceType(t),
                this.options_.seekTo=function(e) {
                    i.tech_.setCurrentTime(e)
                }

                ,
                this.options_.smoothQualityChange&&videojs.log.warn("smoothQualityChange is deprecated and will be removed in the next major version"),
                this.masterPlaylistController_=new MasterPlaylistController(this.options_);

                var n=videojs.mergeOptions( {
                        liveRangeSafeTimeDelta:SAFE_TIME_DELTA
                    }

                    , this.options_, {
                        seekable:function() {
                            return i.seekable()
                        }

                        , media:function() {
                            return i.masterPlaylistController_.media()
                        }

                        , masterPlaylistController:this.masterPlaylistController_
                    }

                );

                this.playbackWatcher_=new PlaybackWatcher(n),
                this.masterPlaylistController_.on("error", (function() {
                            var e=videojs.players[i.tech_.options_.playerId], t=i.masterPlaylistController_.error; "object" !=typeof t||t.code?"string"==typeof t&&(t= {
                                    message:t, code:3
                                }

                            ):t.code=3, e.error(t)
                        }

                    ));
                var r=this.options_.experimentalBufferBasedABR?Vhs.movingAverageBandwidthSelector(.55):Vhs.STANDARD_PLAYLIST_SELECTOR;

                this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):r.bind(this),
                this.masterPlaylistController_.selectInitialPlaylist=Vhs.INITIAL_PLAYLIST_SELECTOR.bind(this),
                this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,
                this.mediaSource=this.masterPlaylistController_.mediaSource,
                Object.defineProperties(this, {
                        selectPlaylist: {
                            get:function() {
                                return this.masterPlaylistController_.selectPlaylist
                            }

                            , set:function(e) {
                                this.masterPlaylistController_.selectPlaylist=e.bind(this)
                            }
                        }

                        , throughput: {
                            get:function() {
                                return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                            }

                            , set:function(e) {
                                this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1
                            }
                        }

                        , bandwidth: {
                            get:function() {
                                var e=this.masterPlaylistController_.mainSegmentLoader_.bandwidth, t=window__default.default.navigator.connection||window__default.default.navigator.mozConnection||window__default.default.navigator.webkitConnection, i=1e7; if(this.options_.useNetworkInformationApi&&t) {
                                    var n=1e3*t.downlink*1e3; e=n>=i&&e>=i?Math.max(e, n):n
                                }

                                return e
                            }

                            , set:function(e) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth=e, this.masterPlaylistController_.mainSegmentLoader_.throughput= {
                                    rate:0, count:0
                                }
                            }
                        }

                        , systemBandwidth: {
                            get:function() {
                                var e, t=1/(this.bandwidth||1); return e=this.throughput>0?1/this.throughput:0, Math.floor(1/(t+e))
                            }

                            , set:function() {
                                videojs.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }

                ),
                this.options_.bandwidth&&(this.bandwidth=this.options_.bandwidth),
                this.options_.throughput&&(this.throughput=this.options_.throughput),
                Object.defineProperties(this.stats, {
                        bandwidth: {
                            get:function() {
                                return i.bandwidth||0
                            }

                            , enumerable: !0
                        }

                        , mediaRequests: {
                            get:function() {
                                return i.masterPlaylistController_.mediaRequests_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaRequestsAborted: {
                            get:function() {
                                return i.masterPlaylistController_.mediaRequestsAborted_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaRequestsTimedout: {
                            get:function() {
                                return i.masterPlaylistController_.mediaRequestsTimedout_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaRequestsErrored: {
                            get:function() {
                                return i.masterPlaylistController_.mediaRequestsErrored_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaTransferDuration: {
                            get:function() {
                                return i.masterPlaylistController_.mediaTransferDuration_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaBytesTransferred: {
                            get:function() {
                                return i.masterPlaylistController_.mediaBytesTransferred_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaSecondsLoaded: {
                            get:function() {
                                return i.masterPlaylistController_.mediaSecondsLoaded_()||0
                            }

                            , enumerable: !0
                        }

                        , mediaAppends: {
                            get:function() {
                                return i.masterPlaylistController_.mediaAppends_()||0
                            }

                            , enumerable: !0
                        }

                        , mainAppendsToLoadedData: {
                            get:function() {
                                return i.masterPlaylistController_.mainAppendsToLoadedData_()||0
                            }

                            , enumerable: !0
                        }

                        , audioAppendsToLoadedData: {
                            get:function() {
                                return i.masterPlaylistController_.audioAppendsToLoadedData_()||0
                            }

                            , enumerable: !0
                        }

                        , appendsToLoadedData: {
                            get:function() {
                                return i.masterPlaylistController_.appendsToLoadedData_()||0
                            }

                            , enumerable: !0
                        }

                        , timeToLoadedData: {
                            get:function() {
                                return i.masterPlaylistController_.timeToLoadedData_()||0
                            }

                            , enumerable: !0
                        }

                        , buffered: {
                            get:function() {
                                return timeRangesToArray(i.tech_.buffered())
                            }

                            , enumerable: !0
                        }

                        , currentTime: {
                            get:function() {
                                return i.tech_.currentTime()
                            }

                            , enumerable: !0
                        }

                        , currentSource: {
                            get:function() {
                                return i.tech_.currentSource_
                            }

                            , enumerable: !0
                        }

                        , currentTech: {
                            get:function() {
                                return i.tech_.name_
                            }

                            , enumerable: !0
                        }

                        , duration: {
                            get:function() {
                                return i.tech_.duration()
                            }

                            , enumerable: !0
                        }

                        , master: {
                            get:function() {
                                return i.playlists.master
                            }

                            , enumerable: !0
                        }

                        , playerDimensions: {
                            get:function() {
                                return i.tech_.currentDimensions()
                            }

                            , enumerable: !0
                        }

                        , seekable: {
                            get:function() {
                                return timeRangesToArray(i.tech_.seekable())
                            }

                            , enumerable: !0
                        }

                        , timestamp: {
                            get:function() {
                                return Date.now()
                            }

                            , enumerable: !0
                        }

                        , videoPlaybackQuality: {
                            get:function() {
                                return i.tech_.getVideoPlaybackQuality()
                            }

                            , enumerable: !0
                        }
                    }

                ),
                this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
                this.tech_.on("bandwidthupdate", (function() {
                            i.options_.useBandwidthFromLocalStorage&&updateVhsLocalStorage( {
                                    bandwidth:i.bandwidth, throughput:Math.round(i.throughput)
                                }

                            )
                        }

                    )),
                this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                            renditionSelectionMixin(i)
                        }

                    )),
                this.masterPlaylistController_.sourceUpdater_.on("createdsourcebuffers", (function() {
                            i.setupEme_()
                        }

                    )),
                this.on(this.masterPlaylistController_, "progress", (function() {
                            this.tech_.trigger("progress")
                        }

                    )),
                this.on(this.masterPlaylistController_, "firstplay", (function() {
                            this.ignoreNextSeekingEvent_= !0
                        }

                    )),
                this.setupQualityLevels_(),
                this.tech_.el()&&(this.mediaSourceUrl_=window__default.default.URL.createObjectURL(this.masterPlaylistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_))
            }
        }

        ,
        i.createKeySessions_=function() {
            var e=this,
            t=this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader;

            this.logger_("waiting for EME key session creation"),
            waitForKeySessionCreation( {
                    player:this.player_, sourceKeySystems:this.source_.keySystems, audioMedia:t&&t.media(), mainPlaylists:this.playlists.master.playlists
                }

            ).then((function() {
                        e.logger_("created EME key session"), e.masterPlaylistController_.sourceUpdater_.initializedEme()
                    }

                )).catch((function(t) {
                        e.logger_("error while creating EME key session", t), e.player_.error( {
                                message:"Failed to initialize media keys for EME", code:3
                            }

                        )
                    }

                ))
        }

        ,
        i.handleWaitingForKey_=function() {
            this.logger_("waitingforkey fired, attempting to create any new key sessions"),
            this.createKeySessions_()
        }

        ,
        i.setupEme_=function() {

            var e=this,
            t=this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader,
            i=setupEmeOptions( {
                    player:this.player_, sourceKeySystems:this.source_.keySystems, media:this.playlists.media(), audioMedia:t&&t.media()
                }

            );

            this.player_.tech_.on("keystatuschange", (function(t) {
                        "output-restricted"===t.status&&e.masterPlaylistController_.blacklistCurrentPlaylist( {
                                playlist:e.masterPlaylistController_.media(), message:"DRM keystatus changed to "+t.status+". Playlist will fail to play. Check for HDCP content.", blacklistDuration:1/0
                            }

                        )
                    }

                )),
            this.handleWaitingForKey_=this.handleWaitingForKey_.bind(this),
            this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_),
            11 !==videojs.browser.IE_VERSION&&i?this.createKeySessions_():this.masterPlaylistController_.sourceUpdater_.initializedEme()
        }

        ,
        i.setupQualityLevels_=function() {
            var e=this,
            t=videojs.players[this.tech_.options_.playerId];

            t&&t.qualityLevels&& !this.qualityLevels_&&(this.qualityLevels_=t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                            handleVhsLoadedMetadata(e.qualityLevels_, e)
                        }

                    )), this.playlists.on("mediachange", (function() {
                            handleVhsMediaChange(e.qualityLevels_, e.playlists)
                        }

                    )))
        }

        ,
        t.version=function() {
            return {
                "@videojs/http-streaming": version$4, "mux.js":version$3, "mpd-parser":version$2, "m3u8-parser":version$1, "aes-decrypter":version
            }
        }

        ,
        i.version=function() {
            return this.constructor.version()
        }

        ,
        i.canChangeType=function() {
            return SourceUpdater.canChangeType()
        }

        ,
        i.play=function() {
            this.masterPlaylistController_.play()
        }

        ,
        i.setCurrentTime=function(e) {
            this.masterPlaylistController_.setCurrentTime(e)
        }

        ,
        i.duration=function() {
            return this.masterPlaylistController_.duration()
        }

        ,
        i.seekable=function() {
            return this.masterPlaylistController_.seekable()
        }

        ,
        i.dispose=function() {
            this.playbackWatcher_&&this.playbackWatcher_.dispose(),
            this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),
            this.qualityLevels_&&this.qualityLevels_.dispose(),
            this.player_&&(delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls),
            this.tech_&&this.tech_.vhs&&delete this.tech_.vhs,
            this.tech_&&delete this.tech_.hls,
            this.mediaSourceUrl_&&window__default.default.URL.revokeObjectURL&&(window__default.default.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_=null),
            this.tech_&&this.tech_.off("waitingforkey", this.handleWaitingForKey_),
            e.prototype.dispose.call(this)
        }

        ,
        i.convertToProgramTime=function(e, t) {
            return getProgramTime( {
                    playlist:this.masterPlaylistController_.media(), time:e, callback:t
                }

            )
        }

        ,
        i.seekToProgramTime=function(e, t, i, n) {

            return void 0===i&&(i= !0),
            void 0===n&&(n=2),
            seekToProgramTime( {
                    programTime:e, playlist:this.masterPlaylistController_.media(), retryCount:n, pauseAfterSeek:i, seekTo:this.options_.seekTo, tech:this.options_.tech, callback:t
                }

            )
        }

        ,
        t
    }

    (Component),
    VhsSourceHandler= {

        name:"videojs-http-streaming",
        VERSION:version$4,
        canHandleSource:function(e, t) {
            void 0===t&&(t= {}

            );
            var i=videojs.mergeOptions(videojs.options, t);
            return VhsSourceHandler.canPlayType(e.type, i)
        }

        ,
        handleSource:function(e, t, i) {
            void 0===i&&(i= {}

            );
            var n=videojs.mergeOptions(videojs.options, i);

            return t.vhs=new VhsHandler(e, t, n),
            videojs.hasOwnProperty("hls")||Object.defineProperty(t, "hls", {
                    get:function() {
                        return videojs.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."), t.vhs
                    }

                    , configurable: !0
                }

            ),
            t.vhs.xhr=xhrFactory(),
            t.vhs.src(e.src, e.type),
            t.vhs
        }

        ,
        canPlayType:function(e, t) {
            void 0===t&&(t= {}

            );

            var i=videojs.mergeOptions(videojs.options, t),
            n=i.vhs,
            r=(n=void 0===n? {}

                :n).overrideNative,
            a=void 0===r? !videojs.browser.IS_ANY_SAFARI:r,
            s=i.hls,
            o=(s=void 0===s? {}

                :s).overrideNative,
            l=void 0 !==o&&o,
            u=mediaTypes_js.simpleTypeFromSourceType(e);
            return u&&( !Vhs.supportsTypeNatively(u)||l||a)?"maybe":""
        }
    }

    ,
    supportsNativeMediaSources=function() {
        return codecs_js.browserSupportsCodec("avc1.4d400d,mp4a.40.2")
    }

    ;

    if(supportsNativeMediaSources()&&videojs.getTech("Html5").registerSourceHandler(VhsSourceHandler, 0), videojs.VhsHandler=VhsHandler, Object.defineProperty(videojs, "HlsHandler", {
                get:function() {
                    return videojs.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."), VhsHandler
                }

                , configurable: !0
            }

        ), videojs.VhsSourceHandler=VhsSourceHandler, Object.defineProperty(videojs, "HlsSourceHandler", {
                get:function() {
                    return videojs.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."), VhsSourceHandler
                }

                , configurable: !0
            }

        ), videojs.Vhs=Vhs, Object.defineProperty(videojs, "Hls", {
                get:function() {
                    return videojs.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."), Vhs
                }

                , configurable: !0
            }

        ), videojs.use||(videojs.registerComponent("Hls", Vhs), videojs.registerComponent("Vhs", Vhs)), videojs.options.vhs=videojs.options.vhs|| {}

        , videojs.options.hls=videojs.options.hls|| {}

        ,  !videojs.getPlugin|| !videojs.getPlugin("reloadSourceOnError")) {
        var registerPlugin=videojs.registerPlugin||videojs.plugin;
        registerPlugin("reloadSourceOnError", reloadSourceOnError)
    }

    module.exports=videojs;