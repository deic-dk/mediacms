/*! For license information please see video.js.LICENSE.txt */
 !function(e, t) {
    "object"==typeof exports&&"undefined" !=typeof module?module.exports=t(): "function"==typeof define&&define.amd?define(t):(e="undefined" !=typeof globalThis?globalThis:e||self).videojs=t()
}

(this, (function() {
            "use strict"; for(var e, t="7.20.2", i= {}

                , n=function(e, t) {
                    return i[e]=i[e]||[], t&&(i[e]=i[e].concat(t)), i[e]
                }

                , r=function(e, t) {
                    var r=n(e).indexOf(t); return !(r<=-1||(i[e]=i[e].slice(), i[e].splice(r, 1), 0))
                }

                , a= {
                    prefixed: !0
                }

                , s=[["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], o=s[0], u=0; u<s.length; u++)if(s[u][1]in document) {
                e=s[u]; break
            }

            if(e) {
                for(var l=0; l<e.length; l++)a[o[l]]=e[l]; a.prefixed=e[0] !==o[0]
            }

            var c=[], d=function e(t) {
                var i, n="info", r=function() {
                    for(var e=arguments.length, t=new Array(e), r=0; r<e; r++)t[r]=arguments[r]; i("log", n, t)
                }

                ; return i=function(e, t) {
                    return function(i, n, r) {
                        var a=t.levels[n], s=new RegExp("^("+a+")$"); if("log" !==i&&r.unshift(i.toUpperCase()+":"), r.unshift(e+":"), c) {
                            c.push([].concat(r)); var o=c.length-1e3; c.splice(0, o>0?o:0)
                        }

                        if(window.console) {
                            var u=window.console[i]; u||"debug" !==i||(u=window.console.info||window.console.log), u&&a&&s.test(i)&&u[Array.isArray(r)?"apply":"call"](window.console, r)
                        }
                    }
                }

                (t, r), r.createLogger=function(i) {
                    return e(t+": "+i)
                }

                , r.levels= {
                    all:"debug|log|warn|error", off:"", debug:"debug|log|warn|error", info:"log|warn|error", warn:"warn|error", error:"error", DEFAULT:n
                }

                , r.level=function(e) {
                    if("string"==typeof e) {
                        if( !r.levels.hasOwnProperty(e))throw new Error('"'+e+'" in not a valid log level'); n=e
                    }

                    return n
                }

                , (r.history=function() {
                        return c?[].concat(c):[]
                    }

                ).filter=function(e) {
                    return(c||[]).filter((function(t) {
                                return new RegExp(".*"+e+".*").test(t[0])
                            }

                        ))
                }

                , r.history.clear=function() {
                    c&&(c.length=0)
                }

                , r.history.disable=function() {
                    null !==c&&(c.length=0, c=null)
                }

                , r.history.enable=function() {
                    null===c&&(c=[])
                }

                , r.error=function() {
                    for(var e=arguments.length, t=new Array(e), r=0; r<e; r++)t[r]=arguments[r]; return i("error", n, t)
                }

                , r.warn=function() {
                    for(var e=arguments.length, t=new Array(e), r=0; r<e; r++)t[r]=arguments[r]; return i("warn", n, t)
                }

                , r.debug=function() {
                    for(var e=arguments.length, t=new Array(e), r=0; r<e; r++)t[r]=arguments[r]; return i("debug", n, t)
                }

                , r
            }

            ("VIDEOJS"), h=d.createLogger, p="undefined" !=typeof globalThis?globalThis:"undefined" !=typeof window?window:"undefined" !=typeof global?global:"undefined" !=typeof self?self: {}

            ; function f(e, t) {
                return e(t= {
                        exports: {}
                    }

                    , t.exports), t.exports
            }

            var m=f((function(e) {
                        function t() {
                            return e.exports=t=Object.assign||function(e) {
                                for(var t=1; t<arguments.length; t++) {
                                    var i=arguments[t]; for(var n in i)Object.prototype.hasOwnProperty.call(i, n)&&(e[n]=i[n])
                                }

                                return e
                            }

                            , t.apply(this, arguments)
                        }

                        e.exports=t
                    }

                )), g=Object.prototype.toString, v=function(e) {
                return b(e)?Object.keys(e):[]
            }

            ; function y(e, t) {
                v(e).forEach((function(i) {
                            return t(e[i], i)
                        }

                    ))
            }

            function _(e) {
                for(var t=arguments.length, i=new Array(t>1?t-1:0), n=1; n<t; n++)i[n-1]=arguments[n]; return Object.assign?m.apply(void 0, [e].concat(i)):(i.forEach((function(t) {
                                t&&y(t, (function(t, i) {
                                            e[i]=t
                                        }

                                    ))
                            }

                        )), e)
            }

            function b(e) {
                return ! !e&&"object"==typeof e
            }

            function T(e) {
                return b(e)&&"[object Object]"===g.call(e)&&e.constructor===Object
            }

            function w(e, t) {
                if( !e|| !t)return""; if("function"==typeof window.getComputedStyle) {
                    var i; try {
                        i=window.getComputedStyle(e)
                    }

                    catch(e) {
                        return""
                    }

                    return i?i.getPropertyValue(t)||i[t]:""
                }

                return""
            }

            var S, E, k, C=window.navigator&&window.navigator.userAgent||"", I=/AppleWebKit\/([\d.]+)/i.exec(C), x=I?parseFloat(I.pop()):null, A=/iPod/i.test(C), P=(S=C.match(/OS (\d+)_/i))&&S[1]?S[1]:null, L=/Android/i.test(C), D=function() {
                var e=C.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if( !e)return null; var t=e[1]&&parseFloat(e[1]), i=e[2]&&parseFloat(e[2]); return t&&i?parseFloat(e[1]+"."+e[2]):t||null
            }

            (), O=L&&D<5&&x<537, M=/Firefox/i.test(C), R=/Edg/i.test(C), N= !R&&(/Chrome/i.test(C)||/CriOS/i.test(C)), U=function() {
                var e=C.match(/(Chrome|CriOS)\/(\d+)/); return e&&e[2]?parseFloat(e[2]):null
            }

            (), B=(E=/MSIE\s(\d+)\.\d/.exec(C),  !(k=E&&parseFloat(E[1]))&&/Trident\/7.0/i.test(C)&&/rv:11.0/.test(C)&&(k=11), k), F=/Safari/i.test(C)&& !N&& !L&& !R, j=/Windows/i.test(C), H=Boolean(Y()&&("ontouchstart"in window||window.navigator.maxTouchPoints||window.DocumentTouch&&window.document instanceof window.DocumentTouch)), q=/iPad/i.test(C)||F&&H&& !/iPhone/i.test(C), V=/iPhone/i.test(C)&& !q, W=V||q||A, G=(F||W)&& !N, z=Object.freeze( {
                    __proto__:null, IS_IPOD:A, IOS_VERSION:P, IS_ANDROID:L, ANDROID_VERSION:D, IS_NATIVE_ANDROID:O, IS_FIREFOX:M, IS_EDGE:R, IS_CHROME:N, CHROME_VERSION:U, IE_VERSION:B, IS_SAFARI:F, IS_WINDOWS:j, TOUCH_ENABLED:H, IS_IPAD:q, IS_IPHONE:V, IS_IOS:W, IS_ANY_SAFARI:G
                }

            ); function X(e) {
                return"string"==typeof e&&Boolean(e.trim())
            }

            function K(e) {
                if(e.indexOf(" ")>=0)throw new Error("class has illegal whitespace characters")
            }

            function Y() {
                return document===window.document
            }

            function Q(e) {
                return b(e)&&1===e.nodeType
            }

            function $() {
                try {
                    return window.parent !==window.self
                }

                catch(e) {
                    return !0
                }
            }

            function J(e) {
                return function(t, i) {
                    if( !X(t))return document[e](null); X(i)&&(i=document.querySelector(i)); var n=Q(i)?i:document; return n[e]&&n[e](t)
                }
            }

            function Z(e, t, i, n) {
                void 0===e&&(e="div"), void 0===t&&(t= {}

                ), void 0===i&&(i= {}

                ); var r=document.createElement(e); return Object.getOwnPropertyNames(t).forEach((function(e) {
                            var i=t[e]; -1 !==e.indexOf("aria-")||"role"===e||"type"===e?(d.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set "+e+" to "+i+"."), r.setAttribute(e, i)):"textContent"===e?ee(r, i):r[e]===i&&"tabIndex" !==e||(r[e]=i)
                        }

                    )), Object.getOwnPropertyNames(i).forEach((function(e) {
                            r.setAttribute(e, i[e])
                        }

                    )), n&&_e(r, n), r
            }

            function ee(e, t) {
                return void 0===e.textContent?e.innerText=t:e.textContent=t, e
            }

            function te(e, t) {
                t.firstChild?t.insertBefore(e, t.firstChild):t.appendChild(e)
            }

            function ie(e, t) {
                return K(t), e.classList?e.classList.contains(t):(i=t, new RegExp("(^|\\s)"+i+"($|\\s)")).test(e.className); var i
            }

            function ne(e, t) {
                return e.classList?e.classList.add(t):ie(e, t)||(e.className=(e.className+" "+t).trim()), e
            }

            function re(e, t) {
                return e?(e.classList?e.classList.remove(t):(K(t), e.className=e.className.split(/\s+/).filter((function(e) {
                                    return e !==t
                                }

                            )).join(" ")), e):(d.warn("removeClass was called with an element that doesn't exist"), null)
            }

            function ae(e, t, i) {
                var n=ie(e, t); if("function"==typeof i&&(i=i(e, t)), "boolean" !=typeof i&&(i= !n), i !==n)return i?ne(e, t):re(e, t), e
            }

            function se(e, t) {
                Object.getOwnPropertyNames(t).forEach((function(i) {
                            var n=t[i]; null==n|| !1===n?e.removeAttribute(i):e.setAttribute(i,  !0===n?"":n)
                        }

                    ))
            }

            function oe(e) {
                var t= {}

                ; if(e&&e.attributes&&e.attributes.length>0)for(var i=e.attributes, n=i.length-1; n>=0; n--) {
                    var r=i[n].name, a=i[n].value; "boolean" !=typeof e[r]&&-1===",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(","+r+",")||(a=null !==a), t[r]=a
                }

                return t
            }

            function ue(e, t) {
                return e.getAttribute(t)
            }

            function le(e, t, i) {
                e.setAttribute(t, i)
            }

            function ce(e, t) {
                e.removeAttribute(t)
            }

            function de() {
                document.body.focus(), document.onselectstart=function() {
                    return !1
                }
            }

            function he() {
                document.onselectstart=function() {
                    return !0
                }
            }

            function pe(e) {
                if(e&&e.getBoundingClientRect&&e.parentNode) {
                    var t=e.getBoundingClientRect(), i= {}

                    ; return["bottom", "height", "left", "right", "top", "width"].forEach((function(e) {
                                void 0 !==t[e]&&(i[e]=t[e])
                            }

                        )), i.height||(i.height=parseFloat(w(e, "height"))), i.width||(i.width=parseFloat(w(e, "width"))), i
                }
            }

            function fe(e) {
                if( !e||e&& !e.offsetParent)return {
                    left:0, top:0, width:0, height:0
                }

                ; for(var t=e.offsetWidth, i=e.offsetHeight, n=0, r=0; e.offsetParent&&e !==document[a.fullscreenElement]; )n+=e.offsetLeft, r+=e.offsetTop, e=e.offsetParent; return {
                    left:n, top:r, width:t, height:i
                }
            }

            function me(e, t) {
                var i= {
                    x:0, y:0
                }

                ; if(W)for(var n=e; n&&"html" !==n.nodeName.toLowerCase(); ) {
                    var r=w(n, "transform"); if(/^matrix/.test(r)) {
                        var a=r.slice(7, -1).split(/, \s/).map(Number); i.x+=a[4], i.y+=a[5]
                    }

                    else if(/^matrix3d/.test(r)) {
                        var s=r.slice(9, -1).split(/, \s/).map(Number); i.x+=s[12], i.y+=s[13]
                    }

                    n=n.parentNode
                }

                var o= {}

                , u=fe(t.target), l=fe(e), c=l.width, d=l.height, h=t.offsetY-(l.top-u.top), p=t.offsetX-(l.left-u.left); return t.changedTouches&&(p=t.changedTouches[0].pageX-l.left, h=t.changedTouches[0].pageY+l.top, W&&(p-=i.x, h-=i.y)), o.y=1-Math.max(0, Math.min(1, h/d)), o.x=Math.max(0, Math.min(1, p/c)), o
            }

            function ge(e) {
                return b(e)&&3===e.nodeType
            }

            function ve(e) {
                for(; e.firstChild; )e.removeChild(e.firstChild); return e
            }

            function ye(e) {
                return"function"==typeof e&&(e=e()), (Array.isArray(e)?e:[e]).map((function(e) {
                            return"function"==typeof e&&(e=e()), Q(e)||ge(e)?e:"string"==typeof e&&/\S/.test(e)?document.createTextNode(e):void 0
                        }

                    )).filter((function(e) {
                            return e
                        }

                    ))
            }

            function _e(e, t) {
                return ye(t).forEach((function(t) {
                            return e.appendChild(t)
                        }

                    )), e
            }

            function be(e, t) {
                return _e(ve(e), t)
            }

            function Te(e) {
                return void 0===e.button&&void 0===e.buttons||0===e.button&&void 0===e.buttons||"mouseup"===e.type&&0===e.button&&0===e.buttons||0===e.button&&1===e.buttons
            }

            var we, Se=J("querySelector"), Ee=J("querySelectorAll"), ke=Object.freeze( {
                    __proto__:null, isReal:Y, isEl:Q, isInFrame:$, createEl:Z, textContent:ee, prependTo:te, hasClass:ie, addClass:ne, removeClass:re, toggleClass:ae, setAttributes:se, getAttributes:oe, getAttribute:ue, setAttribute:le, removeAttribute:ce, blockTextSelection:de, unblockTextSelection:he, getBoundingClientRect:pe, findPosition:fe, getPointerPosition:me, isTextNode:ge, emptyEl:ve, normalizeContent:ye, appendContent:_e, insertContent:be, isSingleLeftClick:Te, $:Se, $$:Ee
                }

            ), Ce= !1, Ie=function() {
                if( !1 !==we.options.autoSetup) {
                    var e=Array.prototype.slice.call(document.getElementsByTagName("video")), t=Array.prototype.slice.call(document.getElementsByTagName("audio")), i=Array.prototype.slice.call(document.getElementsByTagName("video-js")), n=e.concat(t, i); if(n&&n.length>0)for(var r=0, a=n.length; r<a; r++) {
                        var s=n[r]; if( !s|| !s.getAttribute) {
                            xe(1); break
                        }

                        void 0===s.player&&null !==s.getAttribute("data-setup")&&we(s)
                    }

                    else Ce||xe(1)
                }
            }

            ; function xe(e, t) {
                Y()&&(t&&(we=t), window.setTimeout(Ie, e))
            }

            function Ae() {
                Ce= !0, window.removeEventListener("load", Ae)
            }

            Y()&&("complete"===document.readyState?Ae():window.addEventListener("load", Ae)); var Pe, Le=function(e) {
                var t=document.createElement("style"); return t.className=e, t
            }

            , De=function(e, t) {
                e.styleSheet?e.styleSheet.cssText=t:e.textContent=t
            }

            , Oe=3; function Me() {
                return Oe++
            }

            window.WeakMap||(Pe=function() {
                    function e() {
                        this.vdata="vdata"+Math.floor(window.performance&&window.performance.now()||Date.now()), this.data= {}
                    }

                    var t=e.prototype; return t.set=function(e, t) {
                        var i=e[this.vdata]||Me(); return e[this.vdata]||(e[this.vdata]=i), this.data[i]=t, this
                    }

                    , t.get=function(e) {
                        var t=e[this.vdata]; if(t)return this.data[t]; d("We have no data for this element", e)
                    }

                    , t.has=function(e) {
                        return e[this.vdata]in this.data
                    }

                    , t.delete=function(e) {
                        var t=e[this.vdata]; t&&(delete this.data[t], delete e[this.vdata])
                    }

                    , e
                }

                ()); var Re, Ne=window.WeakMap?new WeakMap:new Pe; function Ue(e, t) {
                if(Ne.has(e)) {
                    var i=Ne.get(e); 0===i.handlers[t].length&&(delete i.handlers[t], e.removeEventListener?e.removeEventListener(t, i.dispatcher,  !1):e.detachEvent&&e.detachEvent("on"+t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers, delete i.dispatcher, delete i.disabled), 0===Object.getOwnPropertyNames(i).length&&Ne.delete(e)
                }
            }

            function Be(e, t, i, n) {
                i.forEach((function(i) {
                            e(t, i, n)
                        }

                    ))
            }

            function Fe(e) {
                if(e.fixed_)return e; function t() {
                    return !0
                }

                function i() {
                    return !1
                }

                if( !e|| !e.isPropagationStopped|| !e.isImmediatePropagationStopped) {
                    var n=e||window.event; for(var r in e= {}

                        , n)"layerX" !==r&&"layerY" !==r&&"keyLocation" !==r&&"webkitMovementX" !==r&&"webkitMovementY" !==r&&"path" !==r&&("returnValue"===r&&n.preventDefault||(e[r]=n[r])); if(e.target||(e.target=e.srcElement||document), e.relatedTarget||(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement), e.preventDefault=function() {
                            n.preventDefault&&n.preventDefault(), e.returnValue= !1, n.returnValue= !1, e.defaultPrevented= !0
                        }

                        , e.defaultPrevented= !1, e.stopPropagation=function() {
                            n.stopPropagation&&n.stopPropagation(), e.cancelBubble= !0, n.cancelBubble= !0, e.isPropagationStopped=t
                        }

                        , e.isPropagationStopped=i, e.stopImmediatePropagation=function() {
                            n.stopImmediatePropagation&&n.stopImmediatePropagation(), e.isImmediatePropagationStopped=t, e.stopPropagation()
                        }

                        , e.isImmediatePropagationStopped=i, null !==e.clientX&&void 0 !==e.clientX) {
                        var a=document.documentElement, s=document.body; e.pageX=e.clientX+(a&&a.scrollLeft||s&&s.scrollLeft||0)-(a&&a.clientLeft||s&&s.clientLeft||0), e.pageY=e.clientY+(a&&a.scrollTop||s&&s.scrollTop||0)-(a&&a.clientTop||s&&s.clientTop||0)
                    }

                    e.which=e.charCode||e.keyCode, null !==e.button&&void 0 !==e.button&&(e.button=1&e.button?0:4&e.button?1:2&e.button?2:0)
                }

                return e.fixed_= !0, e
            }

            var je=["touchstart", "touchmove"]; function He(e, t, i) {
                if(Array.isArray(t))return Be(He, e, t, i); Ne.has(e)||Ne.set(e, {}

                ); var n=Ne.get(e); if(n.handlers||(n.handlers= {}

                    ), n.handlers[t]||(n.handlers[t]=[]), i.guid||(i.guid=Me()), n.handlers[t].push(i), n.dispatcher||(n.disabled= !1, n.dispatcher=function(t, i) {
                            if( !n.disabled) {
                                t=Fe(t); var r=n.handlers[t.type]; if(r)for(var a=r.slice(0), s=0, o=a.length; s<o&& !t.isImmediatePropagationStopped(); s++)try {
                                    a[s].call(e, t, i)
                                }

                                catch(e) {
                                    d.error(e)
                                }
                            }
                        }

                    ), 1===n.handlers[t].length)if(e.addEventListener) {
                    var r= !1; (function() {
                            if("boolean" !=typeof Re) {
                                Re= !1; try {
                                    var e=Object.defineProperty( {}

                                        , "passive", {
                                            get:function() {
                                                Re= !0
                                            }
                                        }

                                    ); window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                                }

                                catch(e) {}
                            }

                            return Re
                        }

                    )()&&je.indexOf(t)>-1&&(r= {
                            passive: !0
                        }

                    ), e.addEventListener(t, n.dispatcher, r)
                }

                else e.attachEvent&&e.attachEvent("on"+t, n.dispatcher)
            }

            function qe(e, t, i) {
                if(Ne.has(e)) {
                    var n=Ne.get(e); if(n.handlers) {
                        if(Array.isArray(t))return Be(qe, e, t, i); var r=function(e, t) {
                            n.handlers[t]=[], Ue(e, t)
                        }

                        ; if(void 0 !==t) {
                            var a=n.handlers[t]; if(a)if(i) {
                                if(i.guid)for(var s=0; s<a.length; s++)a[s].guid===i.guid&&a.splice(s--, 1); Ue(e, t)
                            }

                            else r(e, t)
                        }

                        else for(var o in n.handlers)Object.prototype.hasOwnProperty.call(n.handlers|| {}

                            , o)&&r(e, o)
                    }
                }
            }

            function Ve(e, t, i) {
                var n=Ne.has(e)?Ne.get(e): {}

                , r=e.parentNode||e.ownerDocument; if("string"==typeof t?t= {
                        type:t, target:e
                    }

                    :t.target||(t.target=e), t=Fe(t), n.dispatcher&&n.dispatcher.call(e, t, i), r&& !t.isPropagationStopped()&& !0===t.bubbles)Ve.call(null, r, t, i); else if( !r&& !t.defaultPrevented&&t.target&&t.target[t.type]) {
                    Ne.has(t.target)||Ne.set(t.target, {}

                    ); var a=Ne.get(t.target); t.target[t.type]&&(a.disabled= !0, "function"==typeof t.target[t.type]&&t.target[t.type](), a.disabled= !1)
                }

                return !t.defaultPrevented
            }

            function We(e, t, i) {
                if(Array.isArray(t))return Be(We, e, t, i); var n=function n() {
                    qe(e, t, n), i.apply(this, arguments)
                }

                ; n.guid=i.guid=i.guid||Me(), He(e, t, n)
            }

            function Ge(e, t, i) {
                var n=function n() {
                    qe(e, t, n), i.apply(this, arguments)
                }

                ; n.guid=i.guid=i.guid||Me(), He(e, t, n)
            }

            var ze, Xe=Object.freeze( {
                    __proto__:null, fixEvent:Fe, on:He, off:qe, trigger:Ve, one:We, any:Ge
                }

            ), Ke=30, Ye=function(e, t, i) {
                t.guid||(t.guid=Me()); var n=t.bind(e); return n.guid=i?i+"_"+t.guid:t.guid, n
            }

            , Qe=function(e, t) {
                var i=window.performance.now(); return function() {
                    var n=window.performance.now(); n-i>=t&&(e.apply(void 0, arguments), i=n)
                }
            }

            , $e=function() {}

            ; $e.prototype.allowedEvents_= {}

            , $e.prototype.on=function(e, t) {
                var i=this.addEventListener; this.addEventListener=function() {}

                , He(this, e, t), this.addEventListener=i
            }

            , $e.prototype.addEventListener=$e.prototype.on, $e.prototype.off=function(e, t) {
                qe(this, e, t)
            }

            , $e.prototype.removeEventListener=$e.prototype.off, $e.prototype.one=function(e, t) {
                var i=this.addEventListener; this.addEventListener=function() {}

                , We(this, e, t), this.addEventListener=i
            }

            , $e.prototype.any=function(e, t) {
                var i=this.addEventListener; this.addEventListener=function() {}

                , Ge(this, e, t), this.addEventListener=i
            }

            , $e.prototype.trigger=function(e) {
                var t=e.type||e; "string"==typeof e&&(e= {
                        type:t
                    }

                ), e=Fe(e), this.allowedEvents_[t]&&this["on"+t]&&this["on"+t](e), Ve(this, e)
            }

            , $e.prototype.dispatchEvent=$e.prototype.trigger, $e.prototype.queueTrigger=function(e) {
                var t=this; ze||(ze=new Map); var i=e.type||e, n=ze.get(this); n||(n=new Map, ze.set(this, n)); var r=n.get(i); n.delete(i), window.clearTimeout(r); var a=window.setTimeout((function() {
                            0===n.size&&(n=null, ze.delete(t)), t.trigger(e)
                        }

                    ), 0); n.set(i, a)
            }

            ; var Je=function(e) {
                return"function"==typeof e.name?e.name():"string"==typeof e.name?e.name:e.name_?e.name_:e.constructor&&e.constructor.name?e.constructor.name:typeof e
            }

            , Ze=function(e) {
                return e instanceof $e|| ! !e.eventBusEl_&&["on", "one", "off", "trigger"].every((function(t) {
                            return"function"==typeof e[t]
                        }

                    ))
            }

            , et=function(e) {
                return"string"==typeof e&&/\S/.test(e)||Array.isArray(e)&& ! !e.length
            }

            , tt=function(e, t, i) {
                if( !e|| !e.nodeName&& !Ze(e))throw new Error("Invalid target for "+Je(t)+"#"+i+"; must be a DOM node or evented object.")
            }

            , it=function(e, t, i) {
                if( !et(e))throw new Error("Invalid event type for "+Je(t)+"#"+i+"; must be a non-empty string or array.")
            }

            , nt=function(e, t, i) {
                if("function" !=typeof e)throw new Error("Invalid listener for "+Je(t)+"#"+i+"; must be a function.")
            }

            , rt=function(e, t, i) {
                var n, r, a, s=t.length<3||t[0]===e||t[0]===e.eventBusEl_; return s?(n=e.eventBusEl_, t.length>=3&&t.shift(), r=t[0], a=t[1]):(n=t[0], r=t[1], a=t[2]), tt(n, e, i), it(r, e, i), nt(a, e, i), {
                    isTargetingSelf:s, target:n, type:r, listener:a=Ye(e, a)
                }
            }

            , at=function(e, t, i, n) {
                tt(e, e, t), e.nodeName?Xe[t](e, i, n):e[t](i, n)
            }

            , st= {
                on:function() {
                    for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n]; var r=rt(this, i, "on"), a=r.isTargetingSelf, s=r.target, o=r.type, u=r.listener; if(at(s, "on", o, u),  !a) {
                        var l=function() {
                            return e.off(s, o, u)
                        }

                        ; l.guid=u.guid; var c=function() {
                            return e.off("dispose", l)
                        }

                        ; c.guid=u.guid, at(this, "on", "dispose", l), at(s, "on", "dispose", c)
                    }
                }

                , one:function() {
                    for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n]; var r=rt(this, i, "one"), a=r.isTargetingSelf, s=r.target, o=r.type, u=r.listener; if(a)at(s, "one", o, u); else {
                        var l=function t() {
                            e.off(s, o, t); for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r]; u.apply(null, n)
                        }

                        ; l.guid=u.guid, at(s, "one", o, l)
                    }
                }

                , any:function() {
                    for(var e=this, t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n]; var r=rt(this, i, "any"), a=r.isTargetingSelf, s=r.target, o=r.type, u=r.listener; if(a)at(s, "any", o, u); else {
                        var l=function t() {
                            e.off(s, o, t); for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r]; u.apply(null, n)
                        }

                        ; l.guid=u.guid, at(s, "any", o, l)
                    }
                }

                , off:function(e, t, i) {
                    if( !e||et(e))qe(this.eventBusEl_, e, t); else {
                        var n=e, r=t; tt(n, this, "off"), it(r, this, "off"), nt(i, this, "off"), i=Ye(this, i), this.off("dispose", i), n.nodeName?(qe(n, r, i), qe(n, "dispose", i)):Ze(n)&&(n.off(r, i), n.off("dispose", i))
                    }
                }

                , trigger:function(e, t) {
                    tt(this.eventBusEl_, this, "trigger"); var i=e&&"string" !=typeof e?e.type:e; if( !et(i)) {
                        var n="Invalid event type for "+Je(this)+"#trigger; must be a non-empty string or object with a type key that has a non-empty value."; if( !e)throw new Error(n); (this.log||d).error(n)
                    }

                    return Ve(this.eventBusEl_, e, t)
                }
            }

            ; function ot(e, t) {
                void 0===t&&(t= {}

                ); var i=t.eventBusKey; if(i) {
                    if( !e[i].nodeName)throw new Error('The eventBusKey "'+i+'" does not refer to an element.'); e.eventBusEl_=e[i]
                }

                else e.eventBusEl_=Z("span", {
                        className:"vjs-event-bus"
                    }

                ); return _(e, st), e.eventedCallbacks&&e.eventedCallbacks.forEach((function(e) {
                            e()
                        }

                    )), e.on("dispose", (function() {
                            e.off(), [e, e.el_, e.eventBusEl_].forEach((function(e) {
                                        e&&Ne.has(e)&&Ne.delete(e)
                                    }

                                )), window.setTimeout((function() {
                                        e.eventBusEl_=null
                                    }

                                ), 0)
                        }

                    )), e
            }

            var ut= {
                state: {}

                , setState:function(e) {
                    var t, i=this; return"function"==typeof e&&(e=e()), y(e, (function(e, n) {
                                i.state[n] !==e&&((t=t|| {}

                                    )[n]= {
                                        from:i.state[n], to:e
                                    }

                                ), i.state[n]=e
                            }

                        )), t&&Ze(this)&&this.trigger( {
                            changes:t, type:"statechanged"
                        }

                    ), t
                }
            }

            ; function lt(e, t) {
                return _(e, ut), e.state=_( {}

                    , e.state, t), "function"==typeof e.handleStateChanged&&Ze(e)&&e.on("statechanged", e.handleStateChanged), e
            }

            var ct=function(e) {
                return"string" !=typeof e?e:e.replace(/./, (function(e) {
                            return e.toLowerCase()
                        }

                    ))
            }

            , dt=function(e) {
                return"string" !=typeof e?e:e.replace(/./, (function(e) {
                            return e.toUpperCase()
                        }

                    ))
            }

            ; function ht() {
                for(var e= {}

                    , t=arguments.length, i=new Array(t), n=0; n<t; n++)i[n]=arguments[n]; return i.forEach((function(t) {
                            t&&y(t, (function(t, i) {
                                        T(t)?(T(e[i])||(e[i]= {}

                                            ), e[i]=ht(e[i], t)):e[i]=t
                                    }

                                ))
                        }

                    )), e
            }

            var pt=function() {
                function e() {
                    this.map_= {}
                }

                var t=e.prototype; return t.has=function(e) {
                    return e in this.map_
                }

                , t.delete=function(e) {
                    var t=this.has(e); return delete this.map_[e], t
                }

                , t.set=function(e, t) {
                    return this.map_[e]=t, this
                }

                , t.forEach=function(e, t) {
                    for(var i in this.map_)e.call(t, this.map_[i], i, this)
                }

                , e
            }

            (), ft=window.Map?window.Map:pt, mt=function() {
                function e() {
                    this.set_= {}
                }

                var t=e.prototype; return t.has=function(e) {
                    return e in this.set_
                }

                , t.delete=function(e) {
                    var t=this.has(e); return delete this.set_[e], t
                }

                , t.add=function(e) {
                    return this.set_[e]=1, this
                }

                , t.forEach=function(e, t) {
                    for(var i in this.set_)e.call(t, i, i, this)
                }

                , e
            }

            (), gt=window.Set?window.Set:mt, vt=f((function(e, t) {
                        function i(e) {
                            if(e&&"object"==typeof e) {
                                var t=e.which||e.keyCode||e.charCode; t&&(e=t)
                            }

                            if("number"==typeof e)return s[e]; var i, a=String(e); return(i=n[a.toLowerCase()])?i:(i=r[a.toLowerCase()])||(1===a.length?a.charCodeAt(0):void 0)
                        }

                        i.isEventKey=function(e, t) {
                            if(e&&"object"==typeof e) {
                                var i=e.which||e.keyCode||e.charCode; if(null==i)return !1; if("string"==typeof t) {
                                    var a; if(a=n[t.toLowerCase()])return a===i; if(a=r[t.toLowerCase()])return a===i
                                }

                                else if("number"==typeof t)return t===i; return !1
                            }
                        }

                        ; var n=(t=e.exports=i).code=t.codes= {
                            backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, "pause/break":19, "caps lock":20, esc:27, space:32, "page up":33, "page down":34, end:35, home:36, left:37, up:38, right:39, down:40, insert:45, delete:46, command:91, "left command":91, "right command":93, "numpad *":106, "numpad +":107, "numpad -":109, "numpad .":110, "numpad /":111, "num lock":144, "scroll lock":145, "my computer":182, "my calculator":183, ";":186, "=":187, ",":188, "-":189, ".":190, "/":191, "`":192, "[":219, "\\":220, "]":221, "'":222
                        }

                        , r=t.aliases= {
                            windows:91, "⇧":16, "⌥":18, "⌃":17, "⌘":91, ctl:17, control:17, option:18, pause:19, break:19, caps:20, return:13, escape:27, spc:32, spacebar:32, pgup:33, pgdn:34, ins:45, del:46, cmd:91
                        }

                        ; for(a=97; a<123; a++)n[String.fromCharCode(a)]=a-32; for(var a=48; a<58; a++)n[a-48]=a; for(a=1; a<13; a++)n["f"+a]=a+111; for(a=0; a<10; a++)n["numpad "+a]=a+96; var s=t.names=t.title= {}

                        ; for(a in n)s[n[a]]=a; for(var o in r)n[o]=r[o]
                    }

                )); vt.code, vt.codes, vt.aliases, vt.names, vt.title; var yt=function() {
                function e(e, t, i) {
                    var n=this; if( !e&&this.play?this.player_=e=this:this.player_=e, this.isDisposed_= !1, this.parentComponent_=null, this.options_=ht( {}

                            , this.options_), t=this.options_=ht(this.options_, t), this.id_=t.id||t.el&&t.el.id,  !this.id_) {
                        var r=e&&e.id&&e.id()||"no_player"; this.id_=r+"_component_"+Me()
                    }

                    this.name_=t.name||null, t.el?this.el_=t.el: !1 !==t.createEl&&(this.el_=this.createEl()), t.className&&this.el_&&t.className.split(" ").forEach((function(e) {
                                return n.addClass(e)
                            }

                        )),  !1 !==t.evented&&(ot(this, {
                                eventBusKey:this.el_?"el_":null
                            }

                        ), this.handleLanguagechange=this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), lt(this, this.constructor.defaultState), this.children_=[], this.childIndex_= {}

                    , this.childNameIndex_= {}

                    , this.setTimeoutIds_=new gt, this.setIntervalIds_=new gt, this.rafIds_=new gt, this.namedRafs_=new ft, this.clearingTimersOnDispose_= !1,  !1 !==t.initChildren&&this.initChildren(), this.ready(i),  !1 !==t.reportTouchActivity&&this.enableTouchActivity()
                }

                var t=e.prototype; return t.dispose=function(e) {
                    if(void 0===e&&(e= {}

                        ),  !this.isDisposed_) {
                        if(this.readyQueue_&&(this.readyQueue_.length=0), this.trigger( {
                                    type:"dispose", bubbles: !1
                                }

                            ), this.isDisposed_= !0, this.children_)for(var t=this.children_.length-1; t>=0; t--)this.children_[t].dispose&&this.children_[t].dispose(); this.children_=null, this.childIndex_=null, this.childNameIndex_=null, this.parentComponent_=null, this.el_&&(this.el_.parentNode&&(e.restoreEl?this.el_.parentNode.replaceChild(e.restoreEl, this.el_):this.el_.parentNode.removeChild(this.el_)), this.el_=null), this.player_=null
                    }
                }

                , t.isDisposed=function() {
                    return Boolean(this.isDisposed_)
                }

                , t.player=function() {
                    return this.player_
                }

                , t.options=function(e) {
                    return e?(this.options_=ht(this.options_, e), this.options_):this.options_
                }

                , t.el=function() {
                    return this.el_
                }

                , t.createEl=function(e, t, i) {
                    return Z(e, t, i)
                }

                , t.localize=function(e, t, i) {
                    void 0===i&&(i=e); var n=this.player_.language&&this.player_.language(), r=this.player_.languages&&this.player_.languages(), a=r&&r[n], s=n&&n.split("-")[0], o=r&&r[s], u=i; return a&&a[e]?u=a[e]:o&&o[e]&&(u=o[e]), t&&(u=u.replace(/\{(\d+)\}/g, (function(e, i) {
                                    var n=t[i-1], r=n; return void 0===n&&(r=e), r
                                }

                            ))), u
                }

                , t.handleLanguagechange=function() {}

                , t.contentEl=function() {
                    return this.contentEl_||this.el_
                }

                , t.id=function() {
                    return this.id_
                }

                , t.name=function() {
                    return this.name_
                }

                , t.children=function() {
                    return this.children_
                }

                , t.getChildById=function(e) {
                    return this.childIndex_[e]
                }

                , t.getChild=function(e) {
                    if(e)return this.childNameIndex_[e]
                }

                , t.getDescendant=function() {
                    for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i]; t=t.reduce((function(e, t) {
                                return e.concat(t)
                            }

                        ), []); for(var n=this, r=0; r<t.length; r++)if( !(n=n.getChild(t[r]))|| !n.getChild)return; return n
                }

                , t.addChild=function(t, i, n) {
                    var r, a; if(void 0===i&&(i= {}

                        ), void 0===n&&(n=this.children_.length), "string"==typeof t) {
                        a=dt(t); var s=i.componentClass||a; i.name=a; var o=e.getComponent(s); if( !o)throw new Error("Component "+s+" does not exist"); if("function" !=typeof o)return null; r=new o(this.player_||this, i)
                    }

                    else r=t; if(r.parentComponent_&&r.parentComponent_.removeChild(r), this.children_.splice(n, 0, r), r.parentComponent_=this, "function"==typeof r.id&&(this.childIndex_[r.id()]=r), (a=a||r.name&&dt(r.name()))&&(this.childNameIndex_[a]=r, this.childNameIndex_[ct(a)]=r), "function"==typeof r.el&&r.el()) {
                        var u=null; this.children_[n+1]&&(this.children_[n+1].el_?u=this.children_[n+1].el_:Q(this.children_[n+1])&&(u=this.children_[n+1])), this.contentEl().insertBefore(r.el(), u)
                    }

                    return r
                }

                , t.removeChild=function(e) {
                    if("string"==typeof e&&(e=this.getChild(e)), e&&this.children_) {
                        for(var t= !1, i=this.children_.length-1; i>=0; i--)if(this.children_[i]===e) {
                            t= !0, this.children_.splice(i, 1); break
                        }

                        if(t) {
                            e.parentComponent_=null, this.childIndex_[e.id()]=null, this.childNameIndex_[dt(e.name())]=null, this.childNameIndex_[ct(e.name())]=null; var n=e.el(); n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(e.el())
                        }
                    }
                }

                , t.initChildren=function() {
                    var t=this, i=this.options_.children; if(i) {
                        var n, r=this.options_, a=e.getComponent("Tech"); (n=Array.isArray(i)?i:Object.keys(i)).concat(Object.keys(this.options_).filter((function(e) {
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
                                    var i=e.getComponent(t.opts.componentClass||dt(t.name)); return i&& !a.isTech(i)
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

                , t.buildCSSClass=function() {
                    return""
                }

                , t.ready=function(e, t) {
                    if(void 0===t&&(t= !1), e)return this.isReady_?void(t?e.call(this):this.setTimeout(e, 1)):(this.readyQueue_=this.readyQueue_||[], void this.readyQueue_.push(e))
                }

                , t.triggerReady=function() {
                    this.isReady_= !0, this.setTimeout((function() {
                                var e=this.readyQueue_; this.readyQueue_=[], e&&e.length>0&&e.forEach((function(e) {
                                            e.call(this)
                                        }

                                    ), this), this.trigger("ready")
                            }

                        ), 1)
                }

                , t.$=function(e, t) {
                    return Se(e, t||this.contentEl())
                }

                , t.$$=function(e, t) {
                    return Ee(e, t||this.contentEl())
                }

                , t.hasClass=function(e) {
                    return ie(this.el_, e)
                }

                , t.addClass=function(e) {
                    ne(this.el_, e)
                }

                , t.removeClass=function(e) {
                    re(this.el_, e)
                }

                , t.toggleClass=function(e, t) {
                    ae(this.el_, e, t)
                }

                , t.show=function() {
                    this.removeClass("vjs-hidden")
                }

                , t.hide=function() {
                    this.addClass("vjs-hidden")
                }

                , t.lockShowing=function() {
                    this.addClass("vjs-lock-showing")
                }

                , t.unlockShowing=function() {
                    this.removeClass("vjs-lock-showing")
                }

                , t.getAttribute=function(e) {
                    return ue(this.el_, e)
                }

                , t.setAttribute=function(e, t) {
                    le(this.el_, e, t)
                }

                , t.removeAttribute=function(e) {
                    ce(this.el_, e)
                }

                , t.width=function(e, t) {
                    return this.dimension("width", e, t)
                }

                , t.height=function(e, t) {
                    return this.dimension("height", e, t)
                }

                , t.dimensions=function(e, t) {
                    this.width(e,  !0), this.height(t)
                }

                , t.dimension=function(e, t, i) {
                    if(void 0 !==t)return null !==t&&t==t||(t=0), -1 !==(""+t).indexOf("%")||-1 !==(""+t).indexOf("px")?this.el_.style[e]=t:this.el_.style[e]="auto"===t?"":t+"px", void(i||this.trigger("componentresize")); if( !this.el_)return 0; var n=this.el_.style[e], r=n.indexOf("px"); return-1 !==r?parseInt(n.slice(0, r), 10):parseInt(this.el_["offset"+dt(e)], 10)
                }

                , t.currentDimension=function(e) {
                    var t=0; if("width" !==e&&"height" !==e)throw new Error("currentDimension only accepts width or height value"); if(t=w(this.el_, e), 0===(t=parseFloat(t))||isNaN(t)) {
                        var i="offset"+dt(e); t=this.el_[i]
                    }

                    return t
                }

                , t.currentDimensions=function() {
                    return {
                        width:this.currentDimension("width"), height:this.currentDimension("height")
                    }
                }

                , t.currentWidth=function() {
                    return this.currentDimension("width")
                }

                , t.currentHeight=function() {
                    return this.currentDimension("height")
                }

                , t.focus=function() {
                    this.el_.focus()
                }

                , t.blur=function() {
                    this.el_.blur()
                }

                , t.handleKeyDown=function(e) {
                    this.player_&&(vt.isEventKey(e, "Tab")||e.stopPropagation(), this.player_.handleKeyDown(e))
                }

                , t.handleKeyPress=function(e) {
                    this.handleKeyDown(e)
                }

                , t.emitTapEvents=function() {
                    var e, t=0, i=null; this.on("touchstart", (function(n) {
                                1===n.touches.length&&(i= {
                                        pageX:n.touches[0].pageX, pageY:n.touches[0].pageY
                                    }

                                    , t=window.performance.now(), e= !0)
                            }

                        )), this.on("touchmove", (function(t) {
                                if(t.touches.length>1)e= !1; else if(i) {
                                    var n=t.touches[0].pageX-i.pageX, r=t.touches[0].pageY-i.pageY; Math.sqrt(n*n+r*r)>10&&(e= !1)
                                }
                            }

                        )); var n=function() {
                        e= !1
                    }

                    ; this.on("touchleave", n), this.on("touchcancel", n), this.on("touchend", (function(n) {
                                i=null,  !0===e&&window.performance.now()-t<200&&(n.preventDefault(), this.trigger("tap"))
                            }

                        ))
                }

                , t.enableTouchActivity=function() {
                    if(this.player()&&this.player().reportUserActivity) {
                        var e, t=Ye(this.player(), this.player().reportUserActivity); this.on("touchstart", (function() {
                                    t(), this.clearInterval(e), e=this.setInterval(t, 250)
                                }

                            )); var i=function(i) {
                            t(), this.clearInterval(e)
                        }

                        ; this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
                    }
                }

                , t.setTimeout=function(e, t) {
                    var i, n=this; return e=Ye(this, e), this.clearTimersOnDispose_(), i=window.setTimeout((function() {
                                n.setTimeoutIds_.has(i)&&n.setTimeoutIds_.delete(i), e()
                            }

                        ), t), this.setTimeoutIds_.add(i), i
                }

                , t.clearTimeout=function(e) {
                    return this.setTimeoutIds_.has(e)&&(this.setTimeoutIds_.delete(e), window.clearTimeout(e)), e
                }

                , t.setInterval=function(e, t) {
                    e=Ye(this, e), this.clearTimersOnDispose_(); var i=window.setInterval(e, t); return this.setIntervalIds_.add(i), i
                }

                , t.clearInterval=function(e) {
                    return this.setIntervalIds_.has(e)&&(this.setIntervalIds_.delete(e), window.clearInterval(e)), e
                }

                , t.requestAnimationFrame=function(e) {
                    var t, i=this; return this.supportsRaf_?(this.clearTimersOnDispose_(), e=Ye(this, e), t=window.requestAnimationFrame((function() {
                                    i.rafIds_.has(t)&&i.rafIds_.delete(t), e()
                                }

                            )), this.rafIds_.add(t), t):this.setTimeout(e, 1e3/60)
                }

                , t.requestNamedAnimationFrame=function(e, t) {
                    var i=this; if( !this.namedRafs_.has(e)) {
                        this.clearTimersOnDispose_(), t=Ye(this, t); var n=this.requestAnimationFrame((function() {
                                    t(), i.namedRafs_.has(e)&&i.namedRafs_.delete(e)
                                }

                            )); return this.namedRafs_.set(e, n), e
                    }
                }

                , t.cancelNamedAnimationFrame=function(e) {
                    this.namedRafs_.has(e)&&(this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
                }

                , t.cancelAnimationFrame=function(e) {
                    return this.supportsRaf_?(this.rafIds_.has(e)&&(this.rafIds_.delete(e), window.cancelAnimationFrame(e)), e):this.clearTimeout(e)
                }

                , t.clearTimersOnDispose_=function() {
                    var e=this; this.clearingTimersOnDispose_||(this.clearingTimersOnDispose_= !0, this.one("dispose", (function() {
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

                , e.registerComponent=function(t, i) {
                    if("string" !=typeof t|| !t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.'); var n=e.getComponent("Tech"), r=n&&n.isTech(i), a=e===i||e.prototype.isPrototypeOf(i.prototype); if(r|| !a)throw new Error('Illegal component, "'+t+'"; '+(r?"techs must be registered using Tech.registerTech()":"must be a Component subclass")+"."); t=dt(t), e.components_||(e.components_= {}

                    ); var s=e.getComponent("Player"); if("Player"===t&&s&&s.players) {
                        var o=s.players, u=Object.keys(o); if(o&&u.length>0&&u.map((function(e) {
                                        return o[e]
                                    }

                                )).every(Boolean))throw new Error("Can not register Player component after player has been created.")
                    }

                    return e.components_[t]=i, e.components_[ct(t)]=i, i
                }

                , e.getComponent=function(t) {
                    if(t&&e.components_)return e.components_[t]
                }

                , e
            }

            (); yt.prototype.supportsRaf_="function"==typeof window.requestAnimationFrame&&"function"==typeof window.cancelAnimationFrame, yt.registerComponent("Component", yt); var _t=function(e) {
                if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e
            }

            , bt=function(e, t) {
                e.prototype=Object.create(t.prototype), e.prototype.constructor=e, e.__proto__=t
            }

            ; function Tt(e, t, i, n) {
                return function(e, t, i) {
                    if("number" !=typeof t||t<0||t>i)throw new Error("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+t+") is non-numeric or out of bounds (0-"+i+").")
                }

                (e, n, i.length-1), i[n][t]
            }

            function wt(e) {
                var t; return t=void 0===e||0===e.length? {
                    length:0, start:function() {
                        throw new Error("This TimeRanges object is empty")
                    }

                    , end:function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                }

                : {
                    length:e.length, start:Tt.bind(null, "start", 0, e), end:Tt.bind(null, "end", 1, e)
                }

                , window.Symbol&&window.Symbol.iterator&&(t[window.Symbol.iterator]=function() {
                        return(e||[]).values()
                    }

                ), t
            }

            function St(e, t) {
                return Array.isArray(e)?wt(e):void 0===e||void 0===t?wt():wt([[e, t]])
            }

            function Et(e, t) {
                var i, n, r=0; if( !t)return 0; e&&e.length||(e=St(0, 0)); for(var a=0; a<e.length; a++)i=e.start(a), (n=e.end(a))>t&&(n=t), r+=n-i; return r/t
            }

            function kt(e) {
                if(e instanceof kt)return e; "number"==typeof e?this.code=e:"string"==typeof e?this.message=e:b(e)&&("number"==typeof e.code&&(this.code=e.code), _(this, e)), this.message||(this.message=kt.defaultMessages[this.code]||"")
            }

            kt.prototype.code=0, kt.prototype.message="", kt.prototype.status=null, kt.errorTypes=["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], kt.defaultMessages= {
                1:"You aborted the media playback", 2:"A network error caused the media download to fail part-way.", 3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4:"The media could not be loaded, either because the server or network failed or because the format is not supported.", 5:"The media is encrypted and we do not have the keys to decrypt it."
            }

            ; for(var Ct=0; Ct<kt.errorTypes.length; Ct++)kt[kt.errorTypes[Ct]]=Ct, kt.prototype[kt.errorTypes[Ct]]=Ct; function It(e) {
                return null !=e&&"function"==typeof e.then
            }

            function xt(e) {
                It(e)&&e.then(null, (function(e) {}

                    ))
            }

            var At=function(e) {
                return["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((function(t, i, n) {
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

            , Pt=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).handleKeyDown_=function(e) {
                        return n.handleKeyDown(e)
                    }

                    , n.close_=function(e) {
                        return n.close(e)
                    }

                    , n.opened_=n.hasBeenOpened_=n.hasBeenFilled_= !1, n.closeable( !n.options_.uncloseable), n.content(n.options_.content), n.contentEl_=Z("div", {
                            className:"vjs-modal-dialog-content"
                        }

                        , {
                            role:"document"
                        }

                    ), n.descEl_=Z("p", {
                            className:"vjs-modal-dialog-description vjs-control-text", id:n.el().getAttribute("aria-describedby")
                        }

                    ), ee(n.descEl_, n.description()), n.el_.appendChild(n.descEl_), n.el_.appendChild(n.contentEl_), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:this.buildCSSClass(), tabIndex:-1
                        }

                        , {
                            "aria-describedby":this.id()+"_description", "aria-hidden":"true", "aria-label":this.label(), role:"dialog"
                        }

                    )
                }

                , i.dispose=function() {
                    this.contentEl_=null, this.descEl_=null, this.previouslyActiveEl_=null, e.prototype.dispose.call(this)
                }

                , i.buildCSSClass=function() {
                    return"vjs-modal-dialog vjs-hidden "+e.prototype.buildCSSClass.call(this)
                }

                , i.label=function() {
                    return this.localize(this.options_.label||"Modal Window")
                }

                , i.description=function() {
                    var e=this.options_.description||this.localize("This is a modal window."); return this.closeable()&&(e+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
                }

                , i.open=function() {
                    if( !this.opened_) {
                        var e=this.player(); this.trigger("beforemodalopen"), this.opened_= !0, (this.options_.fillAlways|| !this.hasBeenOpened_&& !this.hasBeenFilled_)&&this.fill(), this.wasPlaying_= !e.paused(), this.options_.pauseOnOpen&&this.wasPlaying_&&e.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_=e.controls(), e.controls( !1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_= !0
                    }
                }

                , i.opened=function(e) {
                    return"boolean"==typeof e&&this[e?"open":"close"](), this.opened_
                }

                , i.close=function() {
                    if(this.opened_) {
                        var e=this.player(); this.trigger("beforemodalclose"), this.opened_= !1, this.wasPlaying_&&this.options_.pauseOnOpen&&e.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_&&e.controls( !0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary&&this.dispose()
                    }
                }

                , i.closeable=function(e) {
                    if("boolean"==typeof e) {
                        var t=this.closeable_= ! !e, i=this.getChild("closeButton"); if(t&& !i) {
                            var n=this.contentEl_; this.contentEl_=this.el_, i=this.addChild("closeButton", {
                                    controlText:"Close Modal Dialog"
                                }

                            ), this.contentEl_=n, this.on(i, "close", this.close_)
                        }

                         !t&&i&&(this.off(i, "close", this.close_), this.removeChild(i), i.dispose())
                    }

                    return this.closeable_
                }

                , i.fill=function() {
                    this.fillWith(this.content())
                }

                , i.fillWith=function(e) {
                    var t=this.contentEl(), i=t.parentNode, n=t.nextSibling; this.trigger("beforemodalfill"), this.hasBeenFilled_= !0, i.removeChild(t), this.empty(), be(t, e), this.trigger("modalfill"), n?i.insertBefore(t, n):i.appendChild(t); var r=this.getChild("closeButton"); r&&i.appendChild(r.el_)
                }

                , i.empty=function() {
                    this.trigger("beforemodalempty"), ve(this.contentEl()), this.trigger("modalempty")
                }

                , i.content=function(e) {
                    return void 0 !==e&&(this.content_=e), this.content_
                }

                , i.conditionalFocus_=function() {
                    var e=document.activeElement, t=this.player_.el_; this.previouslyActiveEl_=null, (t.contains(e)||t===e)&&(this.previouslyActiveEl_=e, this.focus())
                }

                , i.conditionalBlur_=function() {
                    this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(), this.previouslyActiveEl_=null)
                }

                , i.handleKeyDown=function(e) {
                    if(e.stopPropagation(), vt.isEventKey(e, "Escape")&&this.closeable())return e.preventDefault(), void this.close(); if(vt.isEventKey(e, "Tab")) {
                        for(var t, i=this.focusableEls_(), n=this.el_.querySelector(":focus"), r=0; r<i.length; r++)if(n===i[r]) {
                            t=r; break
                        }

                        document.activeElement===this.el_&&(t=0), e.shiftKey&&0===t?(i[i.length-1].focus(), e.preventDefault()):e.shiftKey||t !==i.length-1||(i[0].focus(), e.preventDefault())
                    }
                }

                , i.focusableEls_=function() {
                    var e=this.el_.querySelectorAll("*"); return Array.prototype.filter.call(e, (function(e) {
                                return(e instanceof window.HTMLAnchorElement||e instanceof window.HTMLAreaElement)&&e.hasAttribute("href")||(e instanceof window.HTMLInputElement||e instanceof window.HTMLSelectElement||e instanceof window.HTMLTextAreaElement||e instanceof window.HTMLButtonElement)&& !e.hasAttribute("disabled")||e instanceof window.HTMLIFrameElement||e instanceof window.HTMLObjectElement||e instanceof window.HTMLEmbedElement||e.hasAttribute("tabindex")&&-1 !==e.getAttribute("tabindex")||e.hasAttribute("contenteditable")
                            }

                        ))
                }

                , t
            }

            (yt); Pt.prototype.options_= {
                pauseOnOpen: !0, temporary: !0
            }

            , yt.registerComponent("ModalDialog", Pt); var Lt=function(e) {
                function t(t) {
                    var i; void 0===t&&(t=[]), (i=e.call(this)||this).tracks_=[], Object.defineProperty(_t(i), "length", {
                            get:function() {
                                return this.tracks_.length
                            }
                        }

                    ); for(var n=0; n<t.length; n++)i.addTrack(t[n]); return i
                }

                bt(t, e); var i=t.prototype; return i.addTrack=function(e) {
                    var t=this, i=this.tracks_.length; ""+i in this||Object.defineProperty(this, i, {
                            get:function() {
                                return this.tracks_[i]
                            }
                        }

                    ), -1===this.tracks_.indexOf(e)&&(this.tracks_.push(e), this.trigger( {
                                track:e, type:"addtrack", target:this
                            }

                        )), e.labelchange_=function() {
                        t.trigger( {
                                track:e, type:"labelchange", target:t
                            }

                        )
                    }

                    , Ze(e)&&e.addEventListener("labelchange", e.labelchange_)
                }

                , i.removeTrack=function(e) {
                    for(var t, i=0, n=this.length; i<n; i++)if(this[i]===e) {
                        (t=this[i]).off&&t.off(), this.tracks_.splice(i, 1); break
                    }

                    t&&this.trigger( {
                            track:t, type:"removetrack", target:this
                        }

                    )
                }

                , i.getTrackById=function(e) {
                    for(var t=null, i=0, n=this.length; i<n; i++) {
                        var r=this[i]; if(r.id===e) {
                            t=r; break
                        }
                    }

                    return t
                }

                , t
            }

            ($e); for(var Dt in Lt.prototype.allowedEvents_= {
                    change:"change", addtrack:"addtrack", removetrack:"removetrack", labelchange:"labelchange"
                }

                , Lt.prototype.allowedEvents_)Lt.prototype["on"+Dt]=null; var Ot=function(e, t) {
                for(var i=0; i<e.length; i++)Object.keys(e[i]).length&&t.id !==e[i].id&&(e[i].enabled= !1)
            }

            , Mt=function(e) {
                function t(t) {
                    var i; void 0===t&&(t=[]); for(var n=t.length-1; n>=0; n--)if(t[n].enabled) {
                        Ot(t, t[n]); break
                    }

                    return(i=e.call(this, t)||this).changing_= !1, i
                }

                bt(t, e); var i=t.prototype; return i.addTrack=function(t) {
                    var i=this; t.enabled&&Ot(this, t), e.prototype.addTrack.call(this, t), t.addEventListener&&(t.enabledChange_=function() {
                            i.changing_||(i.changing_= !0, Ot(i, t), i.changing_= !1, i.trigger("change"))
                        }

                        , t.addEventListener("enabledchange", t.enabledChange_))
                }

                , i.removeTrack=function(t) {
                    e.prototype.removeTrack.call(this, t), t.removeEventListener&&t.enabledChange_&&(t.removeEventListener("enabledchange", t.enabledChange_), t.enabledChange_=null)
                }

                , t
            }

            (Lt), Rt=function(e, t) {
                for(var i=0; i<e.length; i++)Object.keys(e[i]).length&&t.id !==e[i].id&&(e[i].selected= !1)
            }

            , Nt=function(e) {
                function t(t) {
                    var i; void 0===t&&(t=[]); for(var n=t.length-1; n>=0; n--)if(t[n].selected) {
                        Rt(t, t[n]); break
                    }

                    return(i=e.call(this, t)||this).changing_= !1, Object.defineProperty(_t(i), "selectedIndex", {
                            get:function() {
                                for(var e=0; e<this.length; e++)if(this[e].selected)return e; return-1
                            }

                            , set:function() {}
                        }

                    ), i
                }

                bt(t, e); var i=t.prototype; return i.addTrack=function(t) {
                    var i=this; t.selected&&Rt(this, t), e.prototype.addTrack.call(this, t), t.addEventListener&&(t.selectedChange_=function() {
                            i.changing_||(i.changing_= !0, Rt(i, t), i.changing_= !1, i.trigger("change"))
                        }

                        , t.addEventListener("selectedchange", t.selectedChange_))
                }

                , i.removeTrack=function(t) {
                    e.prototype.removeTrack.call(this, t), t.removeEventListener&&t.selectedChange_&&(t.removeEventListener("selectedchange", t.selectedChange_), t.selectedChange_=null)
                }

                , t
            }

            (Lt), Ut=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                bt(t, e); var i=t.prototype; return i.addTrack=function(t) {
                    var i=this; e.prototype.addTrack.call(this, t), this.queueChange_||(this.queueChange_=function() {
                            return i.queueTrigger("change")
                        }

                    ), this.triggerSelectedlanguagechange||(this.triggerSelectedlanguagechange_=function() {
                            return i.trigger("selectedlanguagechange")
                        }

                    ), t.addEventListener("modechange", this.queueChange_), -1===["metadata", "chapters"].indexOf(t.kind)&&t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
                }

                , i.removeTrack=function(t) {
                    e.prototype.removeTrack.call(this, t), t.removeEventListener&&(this.queueChange_&&t.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_&&t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
                }

                , t
            }

            (Lt), Bt=function() {
                function e(e) {
                    void 0===e&&(e=[]), this.trackElements_=[], Object.defineProperty(this, "length", {
                            get:function() {
                                return this.trackElements_.length
                            }
                        }

                    ); for(var t=0, i=e.length; t<i; t++)this.addTrackElement_(e[t])
                }

                var t=e.prototype; return t.addTrackElement_=function(e) {
                    var t=this.trackElements_.length; ""+t in this||Object.defineProperty(this, t, {
                            get:function() {
                                return this.trackElements_[t]
                            }
                        }

                    ), -1===this.trackElements_.indexOf(e)&&this.trackElements_.push(e)
                }

                , t.getTrackElementByTrack_=function(e) {
                    for(var t, i=0, n=this.trackElements_.length; i<n; i++)if(e===this.trackElements_[i].track) {
                        t=this.trackElements_[i]; break
                    }

                    return t
                }

                , t.removeTrackElement_=function(e) {
                    for(var t=0, i=this.trackElements_.length; t<i; t++)if(e===this.trackElements_[t]) {
                        this.trackElements_[t].track&&"function"==typeof this.trackElements_[t].track.off&&this.trackElements_[t].track.off(), "function"==typeof this.trackElements_[t].off&&this.trackElements_[t].off(), this.trackElements_.splice(t, 1); break
                    }
                }

                , e
            }

            (), Ft=function() {
                function e(t) {
                    e.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", {
                            get:function() {
                                return this.length_
                            }
                        }

                    )
                }

                var t=e.prototype; return t.setCues_=function(e) {
                    var t=this.length||0, i=0, n=e.length; this.cues_=e, this.length_=e.length; var r=function(e) {
                        ""+e in this||Object.defineProperty(this, ""+e, {
                                get:function() {
                                    return this.cues_[e]
                                }
                            }

                        )
                    }

                    ; if(t<n)for(i=t; i<n; i++)r.call(this, i)
                }

                , t.getCueById=function(e) {
                    for(var t=null, i=0, n=this.length; i<n; i++) {
                        var r=this[i]; if(r.id===e) {
                            t=r; break
                        }
                    }

                    return t
                }

                , e
            }

            (), jt= {
                alternative:"alternative", captions:"captions", main:"main", sign:"sign", subtitles:"subtitles", commentary:"commentary"
            }

            , Ht= {
                alternative:"alternative", descriptions:"descriptions", main:"main", "main-desc":"main-desc", translation:"translation", commentary:"commentary"
            }

            , qt= {
                subtitles:"subtitles", captions:"captions", descriptions:"descriptions", chapters:"chapters", metadata:"metadata"
            }

            , Vt= {
                disabled:"disabled", hidden:"hidden", showing:"showing"
            }

            , Wt=function(e) {
                function t(t) {
                    var i; void 0===t&&(t= {}

                    ), i=e.call(this)||this; var n= {
                        id:t.id||"vjs_track_"+Me(), kind:t.kind||"", language:t.language||""
                    }

                    , r=t.label||"", a=function(e) {
                        Object.defineProperty(_t(i), e, {
                                get:function() {
                                    return n[e]
                                }

                                , set:function() {}
                            }

                        )
                    }

                    ; for(var s in n)a(s); return Object.defineProperty(_t(i), "label", {
                            get:function() {
                                return r
                            }

                            , set:function(e) {
                                e !==r&&(r=e, this.trigger("labelchange"))
                            }
                        }

                    ), i
                }

                return bt(t, e), t
            }

            ($e), Gt=function(e) {
                var t=["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i=document.createElement("a"); i.href=e; for(var n= {}

                    , r=0; r<t.length; r++)n[t[r]]=i[t[r]]; return"http:"===n.protocol&&(n.host=n.host.replace(/:80$/, "")), "https:"===n.protocol&&(n.host=n.host.replace(/:443$/, "")), n.protocol||(n.protocol=window.location.protocol), n.host||(n.host=window.location.host), n
            }

            , zt=function(e) {
                if( !e.match(/^https?:\/\//)) {
                    var t=document.createElement("a"); t.href=e, e=t.href
                }

                return e
            }

            , Xt=function(e) {
                if("string"==typeof e) {
                    var t=/^(\/?)([\s\S]*?)((?:\. {
                                1, 2
                            }

                            |[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e); if(t)return t.pop().toLowerCase()
                }

                return""
            }

            , Kt=function(e, t) {
                void 0===t&&(t=window.location); var i=Gt(e); return(":"===i.protocol?t.protocol:i.protocol)+i.host !==t.protocol+t.host
            }

            , Yt=Object.freeze( {
                    __proto__:null, parseUrl:Gt, getAbsoluteURL:zt, getFileExtension:Xt, isCrossOrigin:Kt
                }

            ), Qt="undefined" !=typeof window?window:void 0 !==p?p:"undefined" !=typeof self?self: {}

            , $t=Object.prototype.toString; ti.httpHandler=function(e, t) {
                return void 0===t&&(t= !1), function(i, n, r) {
                    if(i)e(i); else if(n.statusCode>=400&&n.statusCode<=599) {
                        var a=r; if(t)if(Qt.TextDecoder) {
                            var s=(void 0===(o=n.headers&&n.headers["content-type"])&&(o=""), o.toLowerCase().split(";").reduce((function(e, t) {
                                            var i=t.split("="), n=i[0], r=i[1]; return"charset"===n.trim()?r.trim():e
                                        }

                                    ), "utf-8")); try {
                                a=new TextDecoder(s).decode(r)
                            }

                            catch(e) {}
                        }

                        else a=String.fromCharCode.apply(null, new Uint8Array(r)); e( {
                                cause:a
                            }

                        )
                    }

                    else e(null, r); var o
                }
            }

            ; var Jt=ti, Zt=ti; function ei(e, t, i) {
                var n=e; return function(e) {
                    if( !e)return !1; var t=$t.call(e); return"[object Function]"===t||"function"==typeof e&&"[object RegExp]" !==t||"undefined" !=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)
                }

                (t)?(i=t, "string"==typeof e&&(n= {
                            uri:e
                        }

                    )):n=m( {}

                    , t, {
                        uri:e
                    }

                ), n.callback=i, n
            }

            function ti(e, t, i) {
                return ii(t=ei(e, t, i))
            }

            function ii(e) {
                if(void 0===e.callback)throw new Error("callback argument missing"); var t= !1, i=function(i, n, r) {
                    t||(t= !0, e.callback(i, n, r))
                }

                ; function n() {
                    var e=void 0; if(e=u.response?u.response:u.responseText||function(e) {
                            try {
                                if("document"===e.responseType)return e.responseXML; var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName; if(""===e.responseType&& !t)return e.responseXML
                            }

                            catch(e) {}

                            return null
                        }

                        (u), m)try {
                        e=JSON.parse(e)
                    }

                    catch(e) {}

                    return e
                }

                function r(e) {
                    return clearTimeout(l), e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))), e.statusCode=0, i(e, g)
                }

                function a() {
                    if( !o) {
                        var t; clearTimeout(l), t=e.useXDR&&void 0===u.status?200:1223===u.status?204:u.status; var r=g, a=null; return 0 !==t?(r= {
                                body:n(), statusCode:t, method:d, headers: {}

                                , url:c, rawRequest:u
                            }

                            , u.getAllResponseHeaders&&(r.headers=function(e) {
                                    var t= {}

                                    ; return e?(e.trim().split("\n").forEach((function(e) {
                                                    var i=e.indexOf(":"), n=e.slice(0, i).trim().toLowerCase(), r=e.slice(i+1).trim(); void 0===t[n]?t[n]=r:Array.isArray(t[n])?t[n].push(r):t[n]=[t[n], r]
                                                }

                                            )), t):t
                                }

                                (u.getAllResponseHeaders()))):a=new Error("Internal XMLHttpRequest Error"), i(a, r, r.body)
                    }
                }

                var s, o, u=e.xhr||null; u||(u=e.cors||e.useXDR?new ti.XDomainRequest:new ti.XMLHttpRequest); var l, c=u.url=e.uri||e.url, d=u.method=e.method||"GET", h=e.body||e.data, p=u.headers=e.headers|| {}

                , f= ! !e.sync, m= !1, g= {
                    body:void 0, headers: {}

                    , statusCode:0, method:d, url:c, rawRequest:u
                }

                ; if("json"in e&& !1 !==e.json&&(m= !0, p.accept||p.Accept||(p.Accept="application/json"), "GET" !==d&&"HEAD" !==d&&(p["content-type"]||p["Content-Type"]||(p["Content-Type"]="application/json"), h=JSON.stringify( !0===e.json?h:e.json))), u.onreadystatechange=function() {
                        4===u.readyState&&setTimeout(a, 0)
                    }

                    , u.onload=a, u.onerror=r, u.onprogress=function() {}

                    , u.onabort=function() {
                        o= !0
                    }

                    , u.ontimeout=r, u.open(d, c,  !f, e.username, e.password), f||(u.withCredentials= ! !e.withCredentials),  !f&&e.timeout>0&&(l=setTimeout((function() {
                                    if( !o) {
                                        o= !0, u.abort("timeout"); var e=new Error("XMLHttpRequest timeout"); e.code="ETIMEDOUT", r(e)
                                    }
                                }

                            ), e.timeout)), u.setRequestHeader)for(s in p)p.hasOwnProperty(s)&&u.setRequestHeader(s, p[s]); else if(e.headers&& !function(e) {
                        for(var t in e)if(e.hasOwnProperty(t))return !1; return !0
                    }

                    (e.headers))throw new Error("Headers cannot be set on an XDomainRequest object"); return"responseType"in e&&(u.responseType=e.responseType), "beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(u), u.send(h||null), u
            }

            ti.XMLHttpRequest=Qt.XMLHttpRequest||function() {}

            , ti.XDomainRequest="withCredentials"in new ti.XMLHttpRequest?ti.XMLHttpRequest:Qt.XDomainRequest, function(e, t) {
                for(var i=0; i<e.length; i++)t(e[i])
            }

            (["get", "put", "post", "patch", "head", "delete"], (function(e) {
                        ti["delete"===e?"del":e]=function(t, i, n) {
                            return(i=ei(t, i, n)).method=e.toUpperCase(), ii(i)
                        }
                    }

                )), Jt.default=Zt; var ni=function(e, t) {
                var i=new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder()), n=[]; i.oncue=function(e) {
                    t.addCue(e)
                }

                , i.onparsingerror=function(e) {
                    n.push(e)
                }

                , i.onflush=function() {
                    t.trigger( {
                            type:"loadeddata", target:t
                        }

                    )
                }

                , i.parse(e), n.length>0&&(window.console&&window.console.groupCollapsed&&window.console.groupCollapsed("Text Track parsing errors for "+t.src), n.forEach((function(e) {
                                return d.error(e)
                            }

                        )), window.console&&window.console.groupEnd&&window.console.groupEnd()), i.flush()
            }

            , ri=function(e, t) {
                var i= {
                    uri:e
                }

                , n=Kt(e); n&&(i.cors=n); var r="use-credentials"===t.tech_.crossOrigin(); r&&(i.withCredentials=r), Jt(i, Ye(this, (function(e, i, n) {
                                if(e)return d.error(e, i); t.loaded_= !0, "function" !=typeof window.WebVTT?t.tech_&&t.tech_.any(["vttjsloaded", "vttjserror"], (function(e) {
                                            if("vttjserror" !==e.type)return ni(n, t); d.error("vttjs failed to load, stopping trying to process "+t.src)
                                        }

                                    )):ni(n, t)
                            }

                        )))
            }

            , ai=function(e) {
                function t(t) {
                    var i; if(void 0===t&&(t= {}

                        ),  !t.tech)throw new Error("A tech was not provided."); var n=ht(t, {
                            kind:qt[t.kind]||"subtitles", language:t.language||t.srclang||""
                        }

                    ), r=Vt[n.mode]||"disabled", a=n.default; "metadata" !==n.kind&&"chapters" !==n.kind||(r="hidden"), (i=e.call(this, n)||this).tech_=n.tech, i.cues_=[], i.activeCues_=[], i.preload_= !1 !==i.tech_.preloadTextTracks; var s=new Ft(i.cues_), o=new Ft(i.activeCues_), u= !1; return i.timeupdateHandler=Ye(_t(i), (function() {
                                this.tech_.isDisposed()||(this.tech_.isReady_?(this.activeCues=this.activeCues, u&&(this.trigger("cuechange"), u= !1), this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler)):this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler))
                            }

                        )), i.tech_.one("dispose", (function() {
                                i.stopTracking()
                            }

                        )), "disabled" !==r&&i.startTracking(), Object.defineProperties(_t(i), {
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
                                    Vt[e]&&r !==e&&(r=e, this.preload_||"disabled"===r||0 !==this.cues.length||ri(this.src, this), this.stopTracking(), "disabled" !==r&&this.startTracking(), this.trigger("modechange"))
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

                                    if(u= !1, t.length !==this.activeCues_.length)u= !0; else for(var a=0; a<t.length; a++)-1===this.activeCues_.indexOf(t[a])&&(u= !0); return this.activeCues_=t, o.setCues_(this.activeCues_), o
                                }

                                , set:function() {}
                            }
                        }

                    ), n.src?(i.src=n.src, i.preload_||(i.loaded_= !0), (i.preload_||"subtitles" !==n.kind&&"captions" !==n.kind)&&ri(i.src, _t(i))):i.loaded_= !0, i
                }

                bt(t, e); var i=t.prototype; return i.startTracking=function() {
                    this.rvf_=this.tech_.requestVideoFrameCallback(this.timeupdateHandler)
                }

                , i.stopTracking=function() {
                    this.rvf_&&(this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_=void 0)
                }

                , i.addCue=function(e) {
                    var t=e; if(window.vttjs&& !(e instanceof window.vttjs.VTTCue)) {
                        for(var i in t=new window.vttjs.VTTCue(e.startTime, e.endTime, e.text), e)i in t||(t[i]=e[i]); t.id=e.id, t.originalCue_=e
                    }

                    for(var n=this.tech_.textTracks(), r=0; r<n.length; r++)n[r] !==this&&n[r].removeCue(t); this.cues_.push(t), this.cues.setCues_(this.cues_)
                }

                , i.removeCue=function(e) {
                    for(var t=this.cues_.length; t--; ) {
                        var i=this.cues_[t]; if(i===e||i.originalCue_&&i.originalCue_===e) {
                            this.cues_.splice(t, 1), this.cues.setCues_(this.cues_); break
                        }
                    }
                }

                , t
            }

            (Wt); ai.prototype.allowedEvents_= {
                cuechange:"cuechange"
            }

            ; var si=function(e) {
                function t(t) {
                    var i; void 0===t&&(t= {}

                    ); var n=ht(t, {
                            kind:Ht[t.kind]||""
                        }

                    ); i=e.call(this, n)||this; var r= !1; return Object.defineProperty(_t(i), "enabled", {
                            get:function() {
                                return r
                            }

                            , set:function(e) {
                                "boolean"==typeof e&&e !==r&&(r=e, this.trigger("enabledchange"))
                            }
                        }

                    ), n.enabled&&(i.enabled=n.enabled), i.loaded_= !0, i
                }

                return bt(t, e), t
            }

            (Wt), oi=function(e) {
                function t(t) {
                    var i; void 0===t&&(t= {}

                    ); var n=ht(t, {
                            kind:jt[t.kind]||""
                        }

                    ); i=e.call(this, n)||this; var r= !1; return Object.defineProperty(_t(i), "selected", {
                            get:function() {
                                return r
                            }

                            , set:function(e) {
                                "boolean"==typeof e&&e !==r&&(r=e, this.trigger("selectedchange"))
                            }
                        }

                    ), n.selected&&(i.selected=n.selected), i
                }

                return bt(t, e), t
            }

            (Wt), ui=function(e) {
                function t(t) {
                    var i, n; void 0===t&&(t= {}

                    ), i=e.call(this)||this; var r=new ai(t); return i.kind=r.kind, i.src=r.src, i.srclang=r.language, i.label=r.label, i.default=r.default, Object.defineProperties(_t(i), {
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

                    ), n=0, r.addEventListener("loadeddata", (function() {
                                n=2, i.trigger( {
                                        type:"load", target:_t(i)
                                    }

                                )
                            }

                        )), i
                }

                return bt(t, e), t
            }

            ($e); ui.prototype.allowedEvents_= {
                load:"load"
            }

            , ui.NONE=0, ui.LOADING=1, ui.LOADED=2, ui.ERROR=3; var li= {
                audio: {
                    ListClass:Mt, TrackClass:si, capitalName:"Audio"
                }

                , video: {
                    ListClass:Nt, TrackClass:oi, capitalName:"Video"
                }

                , text: {
                    ListClass:Ut, TrackClass:ai, capitalName:"Text"
                }
            }

            ; Object.keys(li).forEach((function(e) {
                        li[e].getterName=e+"Tracks", li[e].privateName=e+"Tracks_"
                    }

                )); var ci= {
                remoteText: {
                    ListClass:Ut, TrackClass:ai, capitalName:"RemoteText", getterName:"remoteTextTracks", privateName:"remoteTextTracks_"
                }

                , remoteTextEl: {
                    ListClass:Bt, TrackClass:ui, capitalName:"RemoteTextTrackEls", getterName:"remoteTextTrackEls", privateName:"remoteTextTrackEls_"
                }
            }

            , di=m( {}

                , li, ci); ci.names=Object.keys(ci), li.names=Object.keys(li), di.names=[].concat(ci.names).concat(li.names); var hi, pi=void 0 !==p?p:"undefined" !=typeof window?window: {}

            ; "undefined" !=typeof document?hi=document:(hi=pi["__GLOBAL_DOCUMENT_CACHE@4"])||(hi=pi["__GLOBAL_DOCUMENT_CACHE@4"]= {}

            ); var fi=hi, mi=Object.create||function() {
                function e() {}

                return function(t) {
                    if(1 !==arguments.length)throw new Error("Object.create shim only accepts one parameter."); return e.prototype=t, new e
                }
            }

            (); function gi(e, t) {
                this.name="ParsingError", this.code=e.code, this.message=t||e.message
            }

            function vi(e) {
                function t(e, t, i, n) {
                    return 3600*(0|e)+60*(0|t)+(0|i)+(0|n)/1e3
                }

                var i=e.match(/^(\d+):(\d {
                            1, 2
                        }

                    )(:\d {
                            1, 2
                        }

                    )?\.(\d {
                            3
                        }

                    )/); return i?i[3]?t(i[1], i[2], i[3].replace(":", ""), i[4]):i[1]>59?t(i[1], i[2], 0, i[4]):t(0, i[1], i[2], i[4]):null
            }

            function yi() {
                this.values=mi(null)
            }

            function _i(e, t, i, n) {
                var r=n?e.split(n):[e]; for(var a in r)if("string"==typeof r[a]) {
                    var s=r[a].split(i); 2===s.length&&t(s[0], s[1])
                }
            }

            function bi(e, t, i) {
                var n=e; function r() {
                    var t=vi(e); if(null===t)throw new gi(gi.Errors.BadTimeStamp, "Malformed timestamp: "+n); return e=e.replace(/^[^\sa-zA-Z-]+/, ""), t
                }

                function a() {
                    e=e.replace(/^\s+/, "")
                }

                if(a(), t.startTime=r(), a(), "--\x3e" !==e.substr(0, 3))throw new gi(gi.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): "+n); e=e.substr(3), a(), t.endTime=r(), a(), function(e, t) {
                    var n=new yi; _i(e, (function(e, t) {
                                switch(e) {
                                    case"region":for(var r=i.length-1; r>=0; r--)if(i[r].id===t) {
                                        n.set(e, i[r].region); break
                                    }

                                    break; case"vertical":n.alt(e, t, ["rl", "lr"]); break; case"line":var a=t.split(","), s=a[0]; n.integer(e, s), n.percent(e, s)&&n.set("snapToLines",  !1), n.alt(e, s, ["auto"]), 2===a.length&&n.alt("lineAlign", a[1], ["start", "center", "end"]); break; case"position":a=t.split(","), n.percent(e, a[0]), 2===a.length&&n.alt("positionAlign", a[1], ["start", "center", "end"]); break; case"size":n.percent(e, t); break; case"align":n.alt(e, t, ["start", "center", "end", "left", "right"])
                                }
                            }

                        ), /:/, /\s/), t.region=n.get("region", null), t.vertical=n.get("vertical", ""); try {
                        t.line=n.get("line", "auto")
                    }

                    catch(e) {}

                    t.lineAlign=n.get("lineAlign", "start"), t.snapToLines=n.get("snapToLines",  !0), t.size=n.get("size", 100); try {
                        t.align=n.get("align", "center")
                    }

                    catch(e) {
                        t.align=n.get("align", "middle")
                    }

                    try {
                        t.position=n.get("position", "auto")
                    }

                    catch(e) {
                        t.position=n.get("position", {
                                start:0, left:0, center:50, middle:50, end:100, right:100
                            }

                            , t.align)
                    }

                    t.positionAlign=n.get("positionAlign", {
                            start:"start", left:"start", center:"center", middle:"center", end:"end", right:"end"
                        }

                        , t.align)
                }

                (e, t)
            }

            gi.prototype=mi(Error.prototype), gi.prototype.constructor=gi, gi.Errors= {
                BadSignature: {
                    code:0, message:"Malformed WebVTT signature."
                }

                , BadTimeStamp: {
                    code:1, message:"Malformed time stamp."
                }
            }

            , yi.prototype= {
                set:function(e, t) {
                    this.get(e)||""===t||(this.values[e]=t)
                }

                , get:function(e, t, i) {
                    return i?this.has(e)?this.values[e]:t[i]:this.has(e)?this.values[e]:t
                }

                , has:function(e) {
                    return e in this.values
                }

                , alt:function(e, t, i) {
                    for(var n=0; n<i.length; ++n)if(t===i[n]) {
                        this.set(e, t); break
                    }
                }

                , integer:function(e, t) {
                    /^-?\d+$/.test(t)&&this.set(e, parseInt(t, 10))
                }

                , percent:function(e, t) {
                    return ! !(t.match(/^([\d] {
                                    1, 3
                                }

                            )(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e, t),  !0)
                }
            }

            ; var Ti=fi.createElement&&fi.createElement("textarea"), wi= {
                c:"span", i:"i", b:"b", u:"u", ruby:"ruby", rt:"rt", v:"span", lang:"span"
            }

            , Si= {
                white:"rgba(255,255,255,1)", lime:"rgba(0,255,0,1)", cyan:"rgba(0,255,255,1)", red:"rgba(255,0,0,1)", yellow:"rgba(255,255,0,1)", magenta:"rgba(255,0,255,1)", blue:"rgba(0,0,255,1)", black:"rgba(0,0,0,1)"
            }

            , Ei= {
                v:"title", lang:"lang"
            }

            , ki= {
                rt:"ruby"
            }

            ; function Ci(e, t) {
                function i() {
                    if( !t)return null; var e, i=t.match(/^([^<]*)(<[^>]*>?)?/); return e=i[1]?i[1]:i[2], t=t.substr(e.length), e
                }

                function n(e, t) {
                    return !ki[t.localName]||ki[t.localName]===e.localName
                }

                function r(t, i) {
                    var n=wi[t]; if( !n)return null; var r=e.document.createElement(n), a=Ei[t]; return a&&i&&(r[a]=i.trim()), r
                }

                for(var a, s, o=e.document.createElement("div"), u=o, l=[]; null !==(a=i()); )if("<" !==a[0])u.appendChild(e.document.createTextNode((s=a, Ti.innerHTML=s, s=Ti.textContent, Ti.textContent="", s))); else {
                    if("/"===a[1]) {
                        l.length&&l[l.length-1]===a.substr(2).replace(">", "")&&(l.pop(), u=u.parentNode); continue
                    }

                    var c, d=vi(a.substr(1, a.length-2)); if(d) {
                        c=e.document.createProcessingInstruction("timestamp", d), u.appendChild(c); continue
                    }

                    var h=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); if( !h)continue; if( !(c=r(h[1], h[3])))continue; if( !n(u, c))continue; if(h[2]) {
                        var p=h[2].split("."); p.forEach((function(e) {
                                    var t=/^bg_/.test(e), i=t?e.slice(3):e; if(Si.hasOwnProperty(i)) {
                                        var n=t?"background-color":"color", r=Si[i]; c.style[n]=r
                                    }
                                }

                            )), c.className=p.join(" ")
                    }

                    l.push(h[1]), u.appendChild(c), u=c
                }

                return o
            }

            var Ii=[[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]]; function xi(e) {
                for(var t=0; t<Ii.length; t++) {
                    var i=Ii[t]; if(e>=i[0]&&e<=i[1])return !0
                }

                return !1
            }

            function Ai(e) {
                var t=[], i=""; if( !e|| !e.childNodes)return"ltr"; function n(e, t) {
                    for(var i=t.childNodes.length-1; i>=0; i--)e.push(t.childNodes[i])
                }

                function r(e) {
                    if( !e|| !e.length)return null; var t=e.pop(), i=t.textContent||t.innerText; if(i) {
                        var a=i.match(/^.*(\n|\r)/); return a?(e.length=0, a[0]):i
                    }

                    return"ruby"===t.tagName?r(e):t.childNodes?(n(e, t), r(e)):void 0
                }

                for(n(t, e); i=r(t); )for(var a=0; a<i.length; a++)if(xi(i.charCodeAt(a)))return"rtl"; return"ltr"
            }

            function Pi() {}

            function Li(e, t, i) {
                Pi.call(this), this.cue=t, this.cueDiv=Ci(e, t.text); var n= {
                    color:"rgba(255, 255, 255, 1)", backgroundColor:"rgba(0, 0, 0, 0.8)", position:"relative", left:0, right:0, top:0, bottom:0, display:"inline", writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl", unicodeBidi:"plaintext"
                }

                ; this.applyStyles(n, this.cueDiv), this.div=e.document.createElement("div"), n= {
                    direction:Ai(this.cueDiv), writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl", unicodeBidi:"plaintext", textAlign:"middle"===t.align?"center":t.align, font:i.font, whiteSpace:"pre-line", position:"absolute"
                }

                , this.applyStyles(n), this.div.appendChild(this.cueDiv); var r=0; switch(t.positionAlign) {
                    case"start":r=t.position; break; case"center":r=t.position-t.size/2; break; case"end":r=t.position-t.size
                }

                ""===t.vertical?this.applyStyles( {
                        left:this.formatStyle(r, "%"), width:this.formatStyle(t.size, "%")
                    }

                ):this.applyStyles( {
                        top:this.formatStyle(r, "%"), height:this.formatStyle(t.size, "%")
                    }

                ), this.move=function(e) {
                    this.applyStyles( {
                            top:this.formatStyle(e.top, "px"), bottom:this.formatStyle(e.bottom, "px"), left:this.formatStyle(e.left, "px"), right:this.formatStyle(e.right, "px"), height:this.formatStyle(e.height, "px"), width:this.formatStyle(e.width, "px")
                        }

                    )
                }
            }

            function Di(e) {
                var t, i, n, r; if(e.div) {
                    i=e.div.offsetHeight, n=e.div.offsetWidth, r=e.div.offsetTop; var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects(); e=e.div.getBoundingClientRect(), t=a?Math.max(a[0]&&a[0].height||0, e.height/a.length):0
                }

                this.left=e.left, this.right=e.right, this.top=e.top||r, this.height=e.height||i, this.bottom=e.bottom||r+(e.height||i), this.width=e.width||n, this.lineHeight=void 0 !==t?t:e.lineHeight
            }

            function Oi(e, t, i, n) {
                var r=new Di(t), a=t.cue, s=function(e) {
                    if("number"==typeof e.line&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line; if( !e.track|| !e.track.textTrackList|| !e.track.textTrackList.mediaElement)return-1; for(var t=e.track, i=t.textTrackList, n=0, r=0; r<i.length&&i[r] !==t; r++)"showing"===i[r].mode&&n++; return-1*++n
                }

                (a), o=[]; if(a.snapToLines) {
                    var u; switch(a.vertical) {
                        case"":o=["+y", "-y"], u="height"; break; case"rl":o=["+x", "-x"], u="width"; break; case"lr":o=["-x", "+x"], u="width"
                    }

                    var l=r.lineHeight, c=l*Math.round(s), d=i[u]+l, h=o[0]; Math.abs(c)>d&&(c=c<0?-1:1, c*=Math.ceil(d/l)*l), s<0&&(c+=""===a.vertical?i.height:i.width, o=o.reverse()), r.move(h, c)
                }

                else {
                    var p=r.lineHeight/i.height*100; switch(a.lineAlign) {
                        case"center":s-=p/2; break; case"end":s-=p
                    }

                    switch(a.vertical) {
                        case"":t.applyStyles( {
                                top:t.formatStyle(s, "%")
                            }

                        ); break; case"rl":t.applyStyles( {
                                left:t.formatStyle(s, "%")
                            }

                        ); break; case"lr":t.applyStyles( {
                                right:t.formatStyle(s, "%")
                            }

                        )
                    }

                    o=["+y", "-x", "+x", "-y"], r=new Di(t)
                }

                var f=function(e, t) {
                    for(var r, a=new Di(e), s=1, o=0; o<t.length; o++) {
                        for(; e.overlapsOppositeAxis(i, t[o])||e.within(i)&&e.overlapsAny(n); )e.move(t[o]); if(e.within(i))return e; var u=e.intersectPercentage(i); s>u&&(r=new Di(e), s=u), e=new Di(a)
                    }

                    return r||a
                }

                (r, o); t.move(f.toCSSCompatValues(i))
            }

            function Mi() {}

            Pi.prototype.applyStyles=function(e, t) {
                for(var i in t=t||this.div, e)e.hasOwnProperty(i)&&(t.style[i]=e[i])
            }

            , Pi.prototype.formatStyle=function(e, t) {
                return 0===e?0:e+t
            }

            , Li.prototype=mi(Pi.prototype), Li.prototype.constructor=Li, Di.prototype.move=function(e, t) {
                switch(t=void 0 !==t?t:this.lineHeight, e) {
                    case"+x":this.left+=t, this.right+=t; break; case"-x":this.left-=t, this.right-=t; break; case"+y":this.top+=t, this.bottom+=t; break; case"-y":this.top-=t, this.bottom-=t
                }
            }

            , Di.prototype.overlaps=function(e) {
                return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top
            }

            , Di.prototype.overlapsAny=function(e) {
                for(var t=0; t<e.length; t++)if(this.overlaps(e[t]))return !0; return !1
            }

            , Di.prototype.within=function(e) {
                return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right
            }

            , Di.prototype.overlapsOppositeAxis=function(e, t) {
                switch(t) {
                    case"+x":return this.left<e.left; case"-x":return this.right>e.right; case"+y":return this.top<e.top; case"-y":return this.bottom>e.bottom
                }
            }

            , Di.prototype.intersectPercentage=function(e) {
                return Math.max(0, Math.min(this.right, e.right)-Math.max(this.left, e.left))*Math.max(0, Math.min(this.bottom, e.bottom)-Math.max(this.top, e.top))/(this.height*this.width)
            }

            , Di.prototype.toCSSCompatValues=function(e) {
                return {
                    top:this.top-e.top, bottom:e.bottom-this.bottom, left:this.left-e.left, right:e.right-this.right, height:this.height, width:this.width
                }
            }

            , Di.getSimpleBoxPosition=function(e) {
                var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0, i=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0, n=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0; return {
                    left:(e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e).left, right:e.right, top:e.top||n, height:e.height||t, bottom:e.bottom||n+(e.height||t), width:e.width||i
                }
            }

            , Mi.StringDecoder=function() {
                return {
                    decode:function(e) {
                        if( !e)return""; if("string" !=typeof e)throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e))
                    }
                }
            }

            , Mi.convertCueToDOMTree=function(e, t) {
                return e&&t?Ci(e, t):null
            }

            , Mi.processCues=function(e, t, i) {
                if( !e|| !t|| !i)return null; for(; i.firstChild; )i.removeChild(i.firstChild); var n=e.document.createElement("div"); if(n.style.position="absolute", n.style.left="0", n.style.right="0", n.style.top="0", n.style.bottom="0", n.style.margin="1.5%", i.appendChild(n), function(e) {
                        for(var t=0; t<e.length; t++)if(e[t].hasBeenReset|| !e[t].displayState)return !0; return !1
                    }

                    (t)) {
                    var r=[], a=Di.getSimpleBoxPosition(n), s= {
                        font:Math.round(.05*a.height*100)/100+"px sans-serif"
                    }

                    ;  !function() {
                        for(var i, o, u=0; u<t.length; u++)o=t[u], i=new Li(e, o, s), n.appendChild(i.div), Oi(0, i, a, r), o.displayState=i.div, r.push(Di.getSimpleBoxPosition(i))
                    }

                    ()
                }

                else for(var o=0; o<t.length; o++)n.appendChild(t[o].displayState)
            }

            , Mi.Parser=function(e, t, i) {
                i||(i=t, t= {}

                ), t||(t= {}

                ), this.window=e, this.vttjs=t, this.state="INITIAL", this.buffer="", this.decoder=i||new TextDecoder("utf8"), this.regionList=[]
            }

            , Mi.Parser.prototype= {
                reportOrThrowError:function(e) {
                    if( !(e instanceof gi))throw e; this.onparsingerror&&this.onparsingerror(e)
                }

                , parse:function(e) {
                    var t, i=this; function n() {
                        for(var e=i.buffer, t=0; t<e.length&&"\r" !==e[t]&&"\n" !==e[t]; )++t; var n=e.substr(0, t); return"\r"===e[t]&&++t, "\n"===e[t]&&++t, i.buffer=e.substr(t), n
                    }

                    e&&(i.buffer+=i.decoder.decode(e, {
                                stream: !0
                            }

                        )); try {
                        var r; if("INITIAL"===i.state) {
                            if( !/\r\n|\n/.test(i.buffer))return this; var a=(r=n()).match(/^WEBVTT([ \t].*)?$/); if( !a|| !a[0])throw new gi(gi.Errors.BadSignature); i.state="HEADER"
                        }

                        for(var s= !1; i.buffer; ) {
                            if( !/\r\n|\n/.test(i.buffer))return this; switch(s?s= !1:r=n(), i.state) {
                                case"HEADER":/:/.test(r)?(t=r).match(/X-TIMESTAMP-MAP/)?_i(t, (function(e, t) {
                                            switch(e) {
                                                case"X-TIMESTAMP-MAP": !function(e) {
                                                    var t=new yi; _i(e, (function(e, i) {
                                                                switch(e) {
                                                                    case"MPEGT":t.integer(e+"S", i); break; case"LOCA":t.set(e+"L", vi(i))
                                                                }
                                                            }

                                                        ), /[^\d]:/, /, /), i.ontimestampmap&&i.ontimestampmap( {
                                                            MPEGTS:t.get("MPEGTS"), LOCAL:t.get("LOCAL")
                                                        }

                                                    )
                                                }

                                                (t)
                                            }
                                        }

                                    ), /=/):_i(t, (function(e, t) {
                                            switch(e) {
                                                case"Region": !function(e) {
                                                    var t=new yi; if(_i(e, (function(e, i) {
                                                                    switch(e) {
                                                                        case"id":t.set(e, i); break; case"width":t.percent(e, i); break; case"lines":t.integer(e, i); break; case"regionanchor":case"viewportanchor":var n=i.split(","); if(2 !==n.length)break; var r=new yi; if(r.percent("x", n[0]), r.percent("y", n[1]),  !r.has("x")|| !r.has("y"))break; t.set(e+"X", r.get("x")), t.set(e+"Y", r.get("y")); break; case"scroll":t.alt(e, i, ["up"])
                                                                    }
                                                                }

                                                            ), /=/, /\s/), t.has("id")) {
                                                        var n=new(i.vttjs.VTTRegion||i.window.VTTRegion); n.width=t.get("width", 100), n.lines=t.get("lines", 3), n.regionAnchorX=t.get("regionanchorX", 0), n.regionAnchorY=t.get("regionanchorY", 100), n.viewportAnchorX=t.get("viewportanchorX", 0), n.viewportAnchorY=t.get("viewportanchorY", 100), n.scroll=t.get("scroll", ""), i.onregion&&i.onregion(n), i.regionList.push( {
                                                                id:t.get("id"), region:n
                                                            }

                                                        )
                                                    }
                                                }

                                                (t)
                                            }
                                        }

                                    ), /:/):r||(i.state="ID"); continue; case"NOTE":r||(i.state="ID"); continue; case"ID":if(/^NOTE($|[ \t])/.test(r)) {
                                    i.state="NOTE"; break
                                }

                                if( !r)continue; i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0, 0, ""); try {
                                    i.cue.align="center"
                                }

                                catch(e) {
                                    i.cue.align="middle"
                                }

                                if(i.state="CUE", -1===r.indexOf("--\x3e")) {
                                    i.cue.id=r; continue
                                }

                                case"CUE":try {
                                    bi(r, i.cue, i.regionList)
                                }

                                catch(e) {
                                    i.reportOrThrowError(e), i.cue=null, i.state="BADCUE"; continue
                                }

                                i.state="CUETEXT"; continue; case"CUETEXT":var o=-1 !==r.indexOf("--\x3e"); if( !r||o&&(s= !0)) {
                                    i.oncue&&i.oncue(i.cue), i.cue=null, i.state="ID"; continue
                                }

                                i.cue.text&&(i.cue.text+="\n"), i.cue.text+=r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n"); continue; case"BADCUE":r||(i.state="ID"); continue
                            }
                        }
                    }

                    catch(e) {
                        i.reportOrThrowError(e), "CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue), i.cue=null, i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"
                    }

                    return this
                }

                , flush:function() {
                    var e=this; try {
                        if(e.buffer+=e.decoder.decode(), (e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n", e.parse()), "INITIAL"===e.state)throw new gi(gi.Errors.BadSignature)
                    }

                    catch(t) {
                        e.reportOrThrowError(t)
                    }

                    return e.onflush&&e.onflush(), this
                }
            }

            ; var Ri=Mi, Ni= {
                "":1, lr:1, rl:1
            }

            , Ui= {
                start:1, center:1, end:1, left:1, right:1, auto:1, "line-left":1, "line-right":1
            }

            ; function Bi(e) {
                return"string"==typeof e&& ! !Ui[e.toLowerCase()]&&e.toLowerCase()
            }

            function Fi(e, t, i) {
                this.hasBeenReset= !1; var n="", r= !1, a=e, s=t, o=i, u=null, l="", c= !0, d="auto", h="start", p="auto", f="auto", m=100, g="center"; Object.defineProperties(this, {
                        id: {
                            enumerable: !0, get:function() {
                                return n
                            }

                            , set:function(e) {
                                n=""+e
                            }
                        }

                        , pauseOnExit: {
                            enumerable: !0, get:function() {
                                return r
                            }

                            , set:function(e) {
                                r= ! !e
                            }
                        }

                        , startTime: {
                            enumerable: !0, get:function() {
                                return a
                            }

                            , set:function(e) {
                                if("number" !=typeof e)throw new TypeError("Start time must be set to a number."); a=e, this.hasBeenReset= !0
                            }
                        }

                        , endTime: {
                            enumerable: !0, get:function() {
                                return s
                            }

                            , set:function(e) {
                                if("number" !=typeof e)throw new TypeError("End time must be set to a number."); s=e, this.hasBeenReset= !0
                            }
                        }

                        , text: {
                            enumerable: !0, get:function() {
                                return o
                            }

                            , set:function(e) {
                                o=""+e, this.hasBeenReset= !0
                            }
                        }

                        , region: {
                            enumerable: !0, get:function() {
                                return u
                            }

                            , set:function(e) {
                                u=e, this.hasBeenReset= !0
                            }
                        }

                        , vertical: {
                            enumerable: !0, get:function() {
                                return l
                            }

                            , set:function(e) {
                                var t=function(e) {
                                    return"string"==typeof e&& ! !Ni[e.toLowerCase()]&&e.toLowerCase()
                                }

                                (e); if( !1===t)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified."); l=t, this.hasBeenReset= !0
                            }
                        }

                        , snapToLines: {
                            enumerable: !0, get:function() {
                                return c
                            }

                            , set:function(e) {
                                c= ! !e, this.hasBeenReset= !0
                            }
                        }

                        , line: {
                            enumerable: !0, get:function() {
                                return d
                            }

                            , set:function(e) {
                                if("number" !=typeof e&&"auto" !==e)throw new SyntaxError("Line: an invalid number or illegal string was specified."); d=e, this.hasBeenReset= !0
                            }
                        }

                        , lineAlign: {
                            enumerable: !0, get:function() {
                                return h
                            }

                            , set:function(e) {
                                var t=Bi(e); t?(h=t, this.hasBeenReset= !0):console.warn("lineAlign: an invalid or illegal string was specified.")
                            }
                        }

                        , position: {
                            enumerable: !0, get:function() {
                                return p
                            }

                            , set:function(e) {
                                if(e<0||e>100)throw new Error("Position must be between 0 and 100."); p=e, this.hasBeenReset= !0
                            }
                        }

                        , positionAlign: {
                            enumerable: !0, get:function() {
                                return f
                            }

                            , set:function(e) {
                                var t=Bi(e); t?(f=t, this.hasBeenReset= !0):console.warn("positionAlign: an invalid or illegal string was specified.")
                            }
                        }

                        , size: {
                            enumerable: !0, get:function() {
                                return m
                            }

                            , set:function(e) {
                                if(e<0||e>100)throw new Error("Size must be between 0 and 100."); m=e, this.hasBeenReset= !0
                            }
                        }

                        , align: {
                            enumerable: !0, get:function() {
                                return g
                            }

                            , set:function(e) {
                                var t=Bi(e); if( !t)throw new SyntaxError("align: an invalid or illegal alignment string was specified."); g=t, this.hasBeenReset= !0
                            }
                        }
                    }

                ), this.displayState=void 0
            }

            Fi.prototype.getCueAsHTML=function() {
                return WebVTT.convertCueToDOMTree(window, this.text)
            }

            ; var ji=Fi, Hi= {
                "": !0, up: !0
            }

            ; function qi(e) {
                return"number"==typeof e&&e>=0&&e<=100
            }

            var Vi=function() {
                var e=100, t=3, i=0, n=100, r=0, a=100, s=""; Object.defineProperties(this, {
                        width: {
                            enumerable: !0, get:function() {
                                return e
                            }

                            , set:function(t) {
                                if( !qi(t))throw new Error("Width must be between 0 and 100."); e=t
                            }
                        }

                        , lines: {
                            enumerable: !0, get:function() {
                                return t
                            }

                            , set:function(e) {
                                if("number" !=typeof e)throw new TypeError("Lines must be set to a number."); t=e
                            }
                        }

                        , regionAnchorY: {
                            enumerable: !0, get:function() {
                                return n
                            }

                            , set:function(e) {
                                if( !qi(e))throw new Error("RegionAnchorX must be between 0 and 100."); n=e
                            }
                        }

                        , regionAnchorX: {
                            enumerable: !0, get:function() {
                                return i
                            }

                            , set:function(e) {
                                if( !qi(e))throw new Error("RegionAnchorY must be between 0 and 100."); i=e
                            }
                        }

                        , viewportAnchorY: {
                            enumerable: !0, get:function() {
                                return a
                            }

                            , set:function(e) {
                                if( !qi(e))throw new Error("ViewportAnchorY must be between 0 and 100."); a=e
                            }
                        }

                        , viewportAnchorX: {
                            enumerable: !0, get:function() {
                                return r
                            }

                            , set:function(e) {
                                if( !qi(e))throw new Error("ViewportAnchorX must be between 0 and 100."); r=e
                            }
                        }

                        , scroll: {
                            enumerable: !0, get:function() {
                                return s
                            }

                            , set:function(e) {
                                var t=function(e) {
                                    return"string"==typeof e&& ! !Hi[e.toLowerCase()]&&e.toLowerCase()
                                }

                                (e);  !1===t?console.warn("Scroll: an invalid or illegal string was specified."):s=t
                            }
                        }
                    }

                )
            }

            , Wi=f((function(e) {
                        var t=e.exports= {
                            WebVTT:Ri, VTTCue:ji, VTTRegion:Vi
                        }

                        ; Qt.vttjs=t, Qt.WebVTT=t.WebVTT; var i=t.VTTCue, n=t.VTTRegion, r=Qt.VTTCue, a=Qt.VTTRegion; t.shim=function() {
                            Qt.VTTCue=i, Qt.VTTRegion=n
                        }

                        , t.restore=function() {
                            Qt.VTTCue=r, Qt.VTTRegion=a
                        }

                        , Qt.VTTCue||t.shim()
                    }

                )); Wi.WebVTT, Wi.VTTCue, Wi.VTTRegion; var Gi=function(e) {
                function t(t, i) {
                    var n; return void 0===t&&(t= {}

                    ), void 0===i&&(i=function() {}

                    ), t.reportTouchActivity= !1, (n=e.call(this, null, t, i)||this).onDurationChange_=function(e) {
                        return n.onDurationChange(e)
                    }

                    , n.trackProgress_=function(e) {
                        return n.trackProgress(e)
                    }

                    , n.trackCurrentTime_=function(e) {
                        return n.trackCurrentTime(e)
                    }

                    , n.stopTrackingCurrentTime_=function(e) {
                        return n.stopTrackingCurrentTime(e)
                    }

                    , n.disposeSourceHandler_=function(e) {
                        return n.disposeSourceHandler(e)
                    }

                    , n.queuedHanders_=new Set, n.hasStarted_= !1, n.on("playing", (function() {
                                this.hasStarted_= !0
                            }

                        )), n.on("loadstart", (function() {
                                this.hasStarted_= !1
                            }

                        )), di.names.forEach((function(e) {
                                var i=di[e]; t&&t[i.getterName]&&(n[i.privateName]=t[i.getterName])
                            }

                        )), n.featuresProgressEvents||n.manualProgressOn(), n.featuresTimeupdateEvents||n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((function(e) {
                                 !1===t["native"+e+"Tracks"]&&(n["featuresNative"+e+"Tracks"]= !1)
                            }

                        )),  !1===t.nativeCaptions|| !1===t.nativeTextTracks?n.featuresNativeTextTracks= !1: !0 !==t.nativeCaptions&& !0 !==t.nativeTextTracks||(n.featuresNativeTextTracks= !0), n.featuresNativeTextTracks||n.emulateTextTracks(), n.preloadTextTracks= !1 !==t.preloadTextTracks, n.autoRemoteTextTracks_=new di.text.ListClass, n.initTrackListeners(), t.nativeControlsForTouch||n.emitTapEvents(), n.constructor&&(n.name_=n.constructor.name||"Unknown Tech"), n
                }

                bt(t, e); var i=t.prototype; return i.triggerSourceset=function(e) {
                    var t=this; this.isReady_||this.one("ready", (function() {
                                return t.setTimeout((function() {
                                            return t.triggerSourceset(e)
                                        }

                                    ), 1)
                            }

                        )), this.trigger( {
                            src:e, type:"sourceset"
                        }

                    )
                }

                , i.manualProgressOn=function() {
                    this.on("durationchange", this.onDurationChange_), this.manualProgress= !0, this.one("ready", this.trackProgress_)
                }

                , i.manualProgressOff=function() {
                    this.manualProgress= !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_)
                }

                , i.trackProgress=function(e) {
                    this.stopTrackingProgress(), this.progressInterval=this.setInterval(Ye(this, (function() {
                                    var e=this.bufferedPercent(); this.bufferedPercent_ !==e&&this.trigger("progress"), this.bufferedPercent_=e, 1===e&&this.stopTrackingProgress()
                                }

                            )), 500)
                }

                , i.onDurationChange=function(e) {
                    this.duration_=this.duration()
                }

                , i.buffered=function() {
                    return St(0, 0)
                }

                , i.bufferedPercent=function() {
                    return Et(this.buffered(), this.duration_)
                }

                , i.stopTrackingProgress=function() {
                    this.clearInterval(this.progressInterval)
                }

                , i.manualTimeUpdatesOn=function() {
                    this.manualTimeUpdates= !0, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_)
                }

                , i.manualTimeUpdatesOff=function() {
                    this.manualTimeUpdates= !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_)
                }

                , i.trackCurrentTime=function() {
                    this.currentTimeInterval&&this.stopTrackingCurrentTime(), this.currentTimeInterval=this.setInterval((function() {
                                this.trigger( {
                                        type:"timeupdate", target:this, manuallyTriggered: !0
                                    }

                                )
                            }

                        ), 250)
                }

                , i.stopTrackingCurrentTime=function() {
                    this.clearInterval(this.currentTimeInterval), this.trigger( {
                            type:"timeupdate", target:this, manuallyTriggered: !0
                        }

                    )
                }

                , i.dispose=function() {
                    this.clearTracks(li.names), this.manualProgress&&this.manualProgressOff(), this.manualTimeUpdates&&this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
                }

                , i.clearTracks=function(e) {
                    var t=this; (e=[].concat(e)).forEach((function(e) {
                                for(var i=t[e+"Tracks"]()||[], n=i.length; n--; ) {
                                    var r=i[n]; "text"===e&&t.removeRemoteTextTrack(r), i.removeTrack(r)
                                }
                            }

                        ))
                }

                , i.cleanupAutoTextTracks=function() {
                    for(var e=this.autoRemoteTextTracks_||[], t=e.length; t--; ) {
                        var i=e[t]; this.removeRemoteTextTrack(i)
                    }
                }

                , i.reset=function() {}

                , i.crossOrigin=function() {}

                , i.setCrossOrigin=function() {}

                , i.error=function(e) {
                    return void 0 !==e&&(this.error_=new kt(e), this.trigger("error")), this.error_
                }

                , i.played=function() {
                    return this.hasStarted_?St(0, 0):St()
                }

                , i.play=function() {}

                , i.setScrubbing=function() {}

                , i.scrubbing=function() {}

                , i.setCurrentTime=function() {
                    this.manualTimeUpdates&&this.trigger( {
                            type:"timeupdate", target:this, manuallyTriggered: !0
                        }

                    )
                }

                , i.initTrackListeners=function() {
                    var e=this; li.names.forEach((function(t) {
                                var i=li[t], n=function() {
                                    e.trigger(t+"trackchange")
                                }

                                , r=e[i.getterName](); r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", (function() {
                                            r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                                        }

                                    ))
                            }

                        ))
                }

                , i.addWebVttScript_=function() {
                    var e=this; if( !window.WebVTT)if(document.body.contains(this.el())) {
                        if( !this.options_["vtt.js"]&&T(Wi)&&Object.keys(Wi).length>0)return void this.trigger("vttjsloaded"); var t=document.createElement("script"); t.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload=function() {
                            e.trigger("vttjsloaded")
                        }

                        , t.onerror=function() {
                            e.trigger("vttjserror")
                        }

                        , this.on("dispose", (function() {
                                    t.onload=null, t.onerror=null
                                }

                            )), window.WebVTT= !0, this.el().parentNode.appendChild(t)
                    }

                    else this.ready(this.addWebVttScript_)
                }

                , i.emulateTextTracks=function() {
                    var e=this, t=this.textTracks(), i=this.remoteTextTracks(), n=function(e) {
                        return t.addTrack(e.track)
                    }

                    , r=function(e) {
                        return t.removeTrack(e.track)
                    }

                    ; i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_(); var a=function() {
                        return e.trigger("texttrackchange")
                    }

                    , s=function() {
                        a(); for(var e=0; e<t.length; e++) {
                            var i=t[e]; i.removeEventListener("cuechange", a), "showing"===i.mode&&i.addEventListener("cuechange", a)
                        }
                    }

                    ; s(), t.addEventListener("change", s), t.addEventListener("addtrack", s), t.addEventListener("removetrack", s), this.on("dispose", (function() {
                                i.off("addtrack", n), i.off("removetrack", r), t.removeEventListener("change", s), t.removeEventListener("addtrack", s), t.removeEventListener("removetrack", s); for(var e=0; e<t.length; e++)t[e].removeEventListener("cuechange", a)
                            }

                        ))
                }

                , i.addTextTrack=function(e, t, i) {
                    if( !e)throw new Error("TextTrack kind is required but was not provided"); return function(e, t, i, n, r) {
                        void 0===r&&(r= {}

                        ); var a=e.textTracks(); r.kind=t, i&&(r.label=i), n&&(r.language=n), r.tech=e; var s=new di.text.TrackClass(r); return a.addTrack(s), s
                    }

                    (this, e, t, i)
                }

                , i.createRemoteTextTrack=function(e) {
                    var t=ht(e, {
                            tech:this
                        }

                    ); return new ci.remoteTextEl.TrackClass(t)
                }

                , i.addRemoteTextTrack=function(e, t) {
                    var i=this; void 0===e&&(e= {}

                    ); var n=this.createRemoteTextTrack(e); return !0 !==t&& !1 !==t&&(d.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t= !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track),  !0 !==t&&this.ready((function() {
                                return i.autoRemoteTextTracks_.addTrack(n.track)
                            }

                        )), n
                }

                , i.removeRemoteTextTrack=function(e) {
                    var t=this.remoteTextTrackEls().getTrackElementByTrack_(e); this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
                }

                , i.getVideoPlaybackQuality=function() {
                    return {}
                }

                , i.requestPictureInPicture=function() {
                    var e=this.options_.Promise||window.Promise; if(e)return e.reject()
                }

                , i.disablePictureInPicture=function() {
                    return !0
                }

                , i.setDisablePictureInPicture=function() {}

                , i.requestVideoFrameCallback=function(e) {
                    var t=this, i=Me(); return this.paused()?(this.queuedHanders_.add(i), this.one("playing", (function() {
                                    t.queuedHanders_.has(i)&&(t.queuedHanders_.delete(i), e())
                                }

                            ))):this.requestNamedAnimationFrame(i, e), i
                }

                , i.cancelVideoFrameCallback=function(e) {
                    this.queuedHanders_.has(e)?this.queuedHanders_.delete(e):this.cancelNamedAnimationFrame(e)
                }

                , i.setPoster=function() {}

                , i.playsinline=function() {}

                , i.setPlaysinline=function() {}

                , i.overrideNativeAudioTracks=function() {}

                , i.overrideNativeVideoTracks=function() {}

                , i.canPlayType=function() {
                    return""
                }

                , t.canPlayType=function() {
                    return""
                }

                , t.canPlaySource=function(e, i) {
                    return t.canPlayType(e.type)
                }

                , t.isTech=function(e) {
                    return e.prototype instanceof t||e instanceof t||e===t
                }

                , t.registerTech=function(e, i) {
                    if(t.techs_||(t.techs_= {}

                        ),  !t.isTech(i))throw new Error("Tech "+e+" must be a Tech"); if( !t.canPlayType)throw new Error("Techs must have a static canPlayType method on them"); if( !t.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them"); return e=dt(e), t.techs_[e]=i, t.techs_[ct(e)]=i, "Tech" !==e&&t.defaultTechOrder_.push(e), i
                }

                , t.getTech=function(e) {
                    if(e)return t.techs_&&t.techs_[e]?t.techs_[e]:(e=dt(e), window&&window.videojs&&window.videojs[e]?(d.warn("The "+e+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), window.videojs[e]):void 0)
                }

                , t
            }

            (yt); di.names.forEach((function(e) {
                        var t=di[e]; Gi.prototype[t.getterName]=function() {
                            return this[t.privateName]=this[t.privateName]||new t.ListClass, this[t.privateName]
                        }
                    }

                )), Gi.prototype.featuresVolumeControl= !0, Gi.prototype.featuresMuteControl= !0, Gi.prototype.featuresFullscreenResize= !1, Gi.prototype.featuresPlaybackRate= !1, Gi.prototype.featuresProgressEvents= !1, Gi.prototype.featuresSourceset= !1, Gi.prototype.featuresTimeupdateEvents= !1, Gi.prototype.featuresNativeTextTracks= !1, Gi.prototype.featuresVideoFrameCallback= !1, Gi.withSourceHandlers=function(e) {
                e.registerSourceHandler=function(t, i) {
                    var n=e.sourceHandlers; n||(n=e.sourceHandlers=[]), void 0===i&&(i=n.length), n.splice(i, 0, t)
                }

                , e.canPlayType=function(t) {
                    for(var i, n=e.sourceHandlers||[], r=0; r<n.length; r++)if(i=n[r].canPlayType(t))return i; return""
                }

                , e.selectSourceHandler=function(t, i) {
                    for(var n=e.sourceHandlers||[], r=0; r<n.length; r++)if(n[r].canHandleSource(t, i))return n[r]; return null
                }

                , e.canPlaySource=function(t, i) {
                    var n=e.selectSourceHandler(t, i); return n?n.canHandleSource(t, i):""
                }

                , ["seekable", "seeking", "duration"].forEach((function(e) {
                            var t=this[e]; "function"==typeof t&&(this[e]=function() {
                                    return this.sourceHandler_&&this.sourceHandler_[e]?this.sourceHandler_[e].apply(this.sourceHandler_, arguments):t.apply(this, arguments)
                                }

                            )
                        }

                    ), e.prototype), e.prototype.setSource=function(t) {
                    var i=e.selectSourceHandler(t, this.options_); i||(e.nativeSourceHandler?i=e.nativeSourceHandler:d.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), i !==e.nativeSourceHandler&&(this.currentSource_=t), this.sourceHandler_=i.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler_)
                }

                , e.prototype.disposeSourceHandler=function() {
                    this.currentSource_&&(this.clearTracks(["audio", "video"]), this.currentSource_=null), this.cleanupAutoTextTracks(), this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(), this.sourceHandler_=null)
                }
            }

            , yt.registerComponent("Tech", Gi), Gi.registerTech("Tech", Gi), Gi.defaultTechOrder_=[]; var zi= {}

            , Xi= {}

            , Ki= {}

            ; function Yi(e, t, i) {
                e.setTimeout((function() {
                            return tn(t, zi[t.type], i, e)
                        }

                    ), 1)
            }

            function Qi(e, t, i, n) {
                void 0===n&&(n=null); var r="call"+dt(i), a=e.reduce(en(r), n), s=a===Ki, o=s?null:t[i](a); return function(e, t, i, n) {
                    for(var r=e.length-1; r>=0; r--) {
                        var a=e[r]; a[t]&&a[t](n, i)
                    }
                }

                (e, i, o, s), o
            }

            var $i= {
                buffered:1, currentTime:1, duration:1, muted:1, played:1, paused:1, seekable:1, volume:1, ended:1
            }

            , Ji= {
                setCurrentTime:1, setMuted:1, setVolume:1
            }

            , Zi= {
                play:1, pause:1
            }

            ; function en(e) {
                return function(t, i) {
                    return t===Ki?Ki:i[e]?i[e](t):t
                }
            }

            function tn(e, t, i, n, r, a) {
                void 0===e&&(e= {}

                ), void 0===t&&(t=[]), void 0===r&&(r=[]), void 0===a&&(a= !1); var s=t, o=s[0], u=s.slice(1); if("string"==typeof o)tn(e, zi[o], i, n, r, a); else if(o) {
                    var l=function(e, t) {
                        var i=Xi[e.id()], n=null; if(null==i)return n=t(e), Xi[e.id()]=[[t, n]], n; for(var r=0; r<i.length; r++) {
                            var a=i[r], s=a[0], o=a[1]; s===t&&(n=o)
                        }

                        return null===n&&(n=t(e), i.push([t, n])), n
                    }

                    (n, o); if( !l.setSource)return r.push(l), tn(e, u, i, n, r, a); l.setSource(_( {}

                            , e), (function(t, s) {
                                if(t)return tn(e, u, i, n, r, a); r.push(l), tn(s, e.type===s.type?u:zi[s.type], i, n, r, a)
                            }

                        ))
                }

                else u.length?tn(e, u, i, n, r, a):a?i(e, r):tn(e, zi["*"], i, n, r,  !0)
            }

            var nn= {
                opus:"video/ogg", ogv:"video/ogg", mp4:"video/mp4", mov:"video/mp4", m4v:"video/mp4", mkv:"video/x-matroska", m4a:"audio/mp4", mp3:"audio/mpeg", aac:"audio/aac", caf:"audio/x-caf", flac:"audio/flac", oga:"audio/ogg", wav:"audio/wav", m3u8:"application/x-mpegURL", mpd:"application/dash+xml", jpg:"image/jpeg", jpeg:"image/jpeg", gif:"image/gif", png:"image/png", svg:"image/svg+xml", webp:"image/webp"
            }

            , rn=function(e) {
                void 0===e&&(e=""); var t=Xt(e); return nn[t.toLowerCase()]||""
            }

            , an=function e(t) {
                if(Array.isArray(t)) {
                    var i=[]; t.forEach((function(t) {
                                t=e(t), Array.isArray(t)?i=i.concat(t):b(t)&&i.push(t)
                            }

                        )), t=i
                }

                else t="string"==typeof t&&t.trim()?[sn( {
                        src:t
                    }

                )]:b(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[sn(t)]:[]; return t
            }

            ; function sn(e) {
                if( !e.type) {
                    var t=rn(e.src); t&&(e.type=t)
                }

                return e
            }

            var on=function(e) {
                function t(t, i, n) {
                    var r, a=ht( {
                            createEl: !1
                        }

                        , i); if(r=e.call(this, t, a, n)||this, i.playerOptions.sources&&0 !==i.playerOptions.sources.length)t.src(i.playerOptions.sources); else for(var s=0, o=i.playerOptions.techOrder; s<o.length; s++) {
                        var u=dt(o[s]), l=Gi.getTech(u); if(u||(l=yt.getComponent(u)), l&&l.isSupported()) {
                            t.loadTech_(u); break
                        }
                    }

                    return r
                }

                return bt(t, e), t
            }

            (yt); yt.registerComponent("MediaLoader", on); var un=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).options_.controlText&&n.controlText(n.options_.controlText), n.handleMouseOver_=function(e) {
                        return n.handleMouseOver(e)
                    }

                    , n.handleMouseOut_=function(e) {
                        return n.handleMouseOut(e)
                    }

                    , n.handleClick_=function(e) {
                        return n.handleClick(e)
                    }

                    , n.handleKeyDown_=function(e) {
                        return n.handleKeyDown(e)
                    }

                    , n.emitTapEvents(), n.enable(), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function(e, t, i) {
                    void 0===e&&(e="div"), void 0===t&&(t= {}

                    ), void 0===i&&(i= {}

                    ), t=_( {
                            className:this.buildCSSClass(), tabIndex:0
                        }

                        , t), "button"===e&&d.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."), i=_( {
                            role:"button"
                        }

                        , i), this.tabIndex_=t.tabIndex; var n=Z(e, t, i); return n.appendChild(Z("span", {
                                className:"vjs-icon-placeholder"
                            }

                            , {
                                "aria-hidden": !0
                            }

                        )), this.createControlTextEl(n), n
                }

                , i.dispose=function() {
                    this.controlTextEl_=null, e.prototype.dispose.call(this)
                }

                , i.createControlTextEl=function(e) {
                    return this.controlTextEl_=Z("span", {
                            className:"vjs-control-text"
                        }

                        , {
                            "aria-live":"polite"
                        }

                    ), e&&e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
                }

                , i.controlText=function(e, t) {
                    if(void 0===t&&(t=this.el()), void 0===e)return this.controlText_||"Need Text"; var i=this.localize(e); this.controlText_=e, ee(this.controlTextEl_, i), this.nonIconControl||this.player_.options_.noUITitleAttributes||t.setAttribute("title", i)
                }

                , i.buildCSSClass=function() {
                    return"vjs-control vjs-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.enable=function() {
                    this.enabled_||(this.enabled_= !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !==this.tabIndex_&&this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_))
                }

                , i.disable=function() {
                    this.enabled_= !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !==this.tabIndex_&&this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_)
                }

                , i.handleLanguagechange=function() {
                    this.controlText(this.controlText_)
                }

                , i.handleClick=function(e) {
                    this.options_.clickHandler&&this.options_.clickHandler.call(this, arguments)
                }

                , i.handleKeyDown=function(t) {
                    vt.isEventKey(t, "Space")||vt.isEventKey(t, "Enter")?(t.preventDefault(), t.stopPropagation(), this.trigger("click")):e.prototype.handleKeyDown.call(this, t)
                }

                , t
            }

            (yt); yt.registerComponent("ClickableComponent", un); var ln=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update(), n.update_=function(e) {
                        return n.update(e)
                    }

                    , t.on("posterchange", n.update_), n
                }

                bt(t, e); var i=t.prototype; return i.dispose=function() {
                    this.player().off("posterchange", this.update_), e.prototype.dispose.call(this)
                }

                , i.createEl=function() {
                    return Z("div", {
                            className:"vjs-poster", tabIndex:-1
                        }

                    )
                }

                , i.update=function(e) {
                    var t=this.player().poster(); this.setSrc(t), t?this.show():this.hide()
                }

                , i.setSrc=function(e) {
                    var t=""; e&&(t='url("'+e+'")'), this.el_.style.backgroundImage=t
                }

                , i.handleClick=function(e) {
                    if(this.player_.controls()) {
                        var t=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0;  !this.player_.tech( !0)||(B||R)&&t||this.player_.tech( !0).focus(), this.player_.paused()?xt(this.player_.play()):this.player_.pause()
                    }
                }

                , t
            }

            (un); yt.registerComponent("PosterImage", ln); var cn= {
                monospace:"monospace", sansSerif:"sans-serif", serif:"serif", monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace', monospaceSerif:'"Courier New", monospace', proportionalSansSerif:"sans-serif", proportionalSerif:"serif", casual:'"Comic Sans MS", Impact, fantasy', script:'"Monotype Corsiva", cursive', smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'
            }

            ; function dn(e, t) {
                var i; if(4===e.length)i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]; else {
                    if(7 !==e.length)throw new Error("Invalid color code provided, "+e+"; must be formatted as e.g. #f0e or #f604e2."); i=e.slice(1)
                }

                return"rgba("+parseInt(i.slice(0, 2), 16)+","+parseInt(i.slice(2, 4), 16)+","+parseInt(i.slice(4, 6), 16)+","+t+")"
            }

            function hn(e, t, i) {
                try {
                    e.style[t]=i
                }

                catch(e) {
                    return
                }
            }

            var pn=function(e) {
                function t(t, i, n) {
                    var r; r=e.call(this, t, i, n)||this; var a=function(e) {
                        return r.updateDisplay(e)
                    }

                    ; return t.on("loadstart", (function(e) {
                                return r.toggleDisplay(e)
                            }

                        )), t.on("texttrackchange", a), t.on("loadedmetadata", (function(e) {
                                return r.preselectTrack(e)
                            }

                        )), t.ready(Ye(_t(r), (function() {
                                    if(t.tech_&&t.tech_.featuresNativeTextTracks)this.hide(); else {
                                        t.on("fullscreenchange", a), t.on("playerresize", a), window.addEventListener("orientationchange", a), t.on("dispose", (function() {
                                                    return window.removeEventListener("orientationchange", a)
                                                }

                                            )); for(var e=this.options_.playerOptions.tracks||[], i=0; i<e.length; i++)this.player_.addRemoteTextTrack(e[i],  !0); this.preselectTrack()
                                    }
                                }

                            ))), r
                }

                bt(t, e); var i=t.prototype; return i.preselectTrack=function() {
                    for(var e, t, i, n= {
                            captions:1, subtitles:1
                        }

                        , r=this.player_.textTracks(), a=this.player_.cache_.selectedLanguage, s=0; s<r.length; s++) {
                        var o=r[s]; a&&a.enabled&&a.language&&a.language===o.language&&o.kind in n?o.kind===a.kind?i=o:i||(i=o):a&& !a.enabled?(i=null, e=null, t=null):o.default&&("descriptions" !==o.kind||e?o.kind in n&& !t&&(t=o):e=o)
                    }

                    i?i.mode="showing":t?t.mode="showing":e&&(e.mode="showing")
                }

                , i.toggleDisplay=function() {
                    this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()
                }

                , i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-text-track-display"
                        }

                        , {
                            translate:"yes", "aria-live":"off", "aria-atomic":"true"
                        }

                    )
                }

                , i.clearDisplay=function() {
                    "function"==typeof window.WebVTT&&window.WebVTT.processCues(window, [], this.el_)
                }

                , i.updateDisplay=function() {
                    var e=this.player_.textTracks(), t=this.options_.allowMultipleShowingTracks; if(this.clearDisplay(), t) {
                        for(var i=[], n=0; n<e.length; ++n) {
                            var r=e[n]; "showing"===r.mode&&i.push(r)
                        }

                        this.updateForTrack(i)
                    }

                    else {
                        for(var a=null, s=null, o=e.length; o--; ) {
                            var u=e[o]; "showing"===u.mode&&("descriptions"===u.kind?a=u:s=u)
                        }

                        s?("off" !==this.getAttribute("aria-live")&&this.setAttribute("aria-live", "off"), this.updateForTrack(s)):a&&("assertive" !==this.getAttribute("aria-live")&&this.setAttribute("aria-live", "assertive"), this.updateForTrack(a))
                    }
                }

                , i.updateDisplayState=function(e) {
                    for(var t=this.player_.textTrackSettings.getValues(), i=e.activeCues, n=i.length; n--; ) {
                        var r=i[n]; if(r) {
                            var a=r.displayState; if(t.color&&(a.firstChild.style.color=t.color), t.textOpacity&&hn(a.firstChild, "color", dn(t.color||"#fff", t.textOpacity)), t.backgroundColor&&(a.firstChild.style.backgroundColor=t.backgroundColor), t.backgroundOpacity&&hn(a.firstChild, "backgroundColor", dn(t.backgroundColor||"#000", t.backgroundOpacity)), t.windowColor&&(t.windowOpacity?hn(a, "backgroundColor", dn(t.windowColor, t.windowOpacity)):a.style.backgroundColor=t.windowColor), t.edgeStyle&&("dropshadow"===t.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===t.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===t.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===t.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), t.fontPercent&&1 !==t.fontPercent) {
                                var s=window.parseFloat(a.style.fontSize); a.style.fontSize=s*t.fontPercent+"px", a.style.height="auto", a.style.top="auto"
                            }

                            t.fontFamily&&"default" !==t.fontFamily&&("small-caps"===t.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=cn[t.fontFamily])
                        }
                    }
                }

                , i.updateForTrack=function(e) {
                    if(Array.isArray(e)||(e=[e]), "function"==typeof window.WebVTT&& !e.every((function(e) {
                                    return !e.activeCues
                                }

                            ))) {
                        for(var t=[], i=0; i<e.length; ++i)for(var n=e[i], r=0; r<n.activeCues.length; ++r)t.push(n.activeCues[r]); window.WebVTT.processCues(window, t, this.el_); for(var a=0; a<e.length; ++a) {
                            for(var s=e[a], o=0; o<s.activeCues.length; ++o) {
                                var u=s.activeCues[o].displayState; ne(u, "vjs-text-track-cue"), ne(u, "vjs-text-track-cue-"+(s.language?s.language:a)), s.language&&le(u, "lang", s.language)
                            }

                            this.player_.textTrackSettings&&this.updateDisplayState(s)
                        }
                    }
                }

                , t
            }

            (yt); yt.registerComponent("TextTrackDisplay", pn); var fn=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                return bt(t, e), t.prototype.createEl=function() {
                    var t=this.player_.isAudio(), i=this.localize(t?"Audio Player":"Video Player"), n=Z("span", {
                            className:"vjs-control-text", textContent:this.localize("{1} is loading.", [i])
                        }

                    ), r=e.prototype.createEl.call(this, "div", {
                            className:"vjs-loading-spinner", dir:"ltr"
                        }

                    ); return r.appendChild(n), r
                }

                , t
            }

            (yt); yt.registerComponent("LoadingSpinner", fn); var mn=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                bt(t, e); var i=t.prototype; return i.createEl=function(e, t, i) {
                    void 0===t&&(t= {}

                    ), void 0===i&&(i= {}

                    ); var n=Z("button", t=_( {
                                className:this.buildCSSClass()
                            }

                            , t), i=_( {
                                type:"button"
                            }

                            , i)); return n.appendChild(Z("span", {
                                className:"vjs-icon-placeholder"
                            }

                            , {
                                "aria-hidden": !0
                            }

                        )), this.createControlTextEl(n), n
                }

                , i.addChild=function(e, t) {
                    void 0===t&&(t= {}

                    ); var i=this.constructor.name; return d.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."), yt.prototype.addChild.call(this, e, t)
                }

                , i.enable=function() {
                    e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                }

                , i.disable=function() {
                    e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                }

                , i.handleKeyDown=function(t) {
                    vt.isEventKey(t, "Space")||vt.isEventKey(t, "Enter")?t.stopPropagation():e.prototype.handleKeyDown.call(this, t)
                }

                , t
            }

            (un); yt.registerComponent("Button", mn); var gn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).mouseused_= !1, n.on("mousedown", (function(e) {
                                return n.handleMouseDown(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-big-play-button"
                }

                , i.handleClick=function(e) {
                    var t=this.player_.play(); if(this.mouseused_&&e.clientX&&e.clientY) {
                        var i=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0; return xt(t), void( !this.player_.tech( !0)||(B||R)&&i||this.player_.tech( !0).focus())
                    }

                    var n=this.player_.getChild("controlBar"), r=n&&n.getChild("playToggle"); if(r) {
                        var a=function() {
                            return r.focus()
                        }

                        ; It(t)?t.then(a, (function() {}

                            )):this.setTimeout(a, 1)
                    }

                    else this.player_.tech( !0).focus()
                }

                , i.handleKeyDown=function(t) {
                    this.mouseused_= !1, e.prototype.handleKeyDown.call(this, t)
                }

                , i.handleMouseDown=function(e) {
                    this.mouseused_= !0
                }

                , t
            }

            (mn); gn.prototype.controlText_="Play Video", yt.registerComponent("BigPlayButton", gn); var vn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).controlText(i&&i.controlText||n.localize("Close")), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-close-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.handleClick=function(e) {
                    this.trigger( {
                            type:"close", bubbles: !1
                        }

                    )
                }

                , i.handleKeyDown=function(t) {
                    vt.isEventKey(t, "Esc")?(t.preventDefault(), t.stopPropagation(), this.trigger("click")):e.prototype.handleKeyDown.call(this, t)
                }

                , t
            }

            (mn); yt.registerComponent("CloseButton", vn); var yn=function(e) {
                function t(t, i) {
                    var n; return void 0===i&&(i= {}

                    ), n=e.call(this, t, i)||this, i.replay=void 0===i.replay||i.replay, n.on(t, "play", (function(e) {
                                return n.handlePlay(e)
                            }

                        )), n.on(t, "pause", (function(e) {
                                return n.handlePause(e)
                            }

                        )), i.replay&&n.on(t, "ended", (function(e) {
                                return n.handleEnded(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-play-control "+e.prototype.buildCSSClass.call(this)
                }

                , i.handleClick=function(e) {
                    this.player_.paused()?xt(this.player_.play()):this.player_.pause()
                }

                , i.handleSeeked=function(e) {
                    this.removeClass("vjs-ended"), this.player_.paused()?this.handlePause(e):this.handlePlay(e)
                }

                , i.handlePlay=function(e) {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                }

                , i.handlePause=function(e) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                }

                , i.handleEnded=function(e) {
                    var t=this; this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", (function(e) {
                                return t.handleSeeked(e)
                            }

                        ))
                }

                , t
            }

            (mn); yn.prototype.controlText_="Play", yt.registerComponent("PlayToggle", yn); var _n=function(e, t) {
                e=e<0?0:e; var i=Math.floor(e%60), n=Math.floor(e/60%60), r=Math.floor(e/3600), a=Math.floor(t/60%60), s=Math.floor(t/3600); return(isNaN(e)||e===1/0)&&(r=n=i="-"), (r=r>0||s>0?r+":":"")+(n=((r||a>=10)&&n<10?"0"+n:n)+":")+(i<10?"0"+i:i)
            }

            , bn=_n; function Tn(e, t) {
                return void 0===t&&(t=e), bn(e, t)
            }

            var wn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on(t, ["timeupdate", "ended"], (function(e) {
                                return n.updateContent(e)
                            }

                        )), n.updateTextNode_(), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t=this.buildCSSClass(), i=e.prototype.createEl.call(this, "div", {
                            className:t+" vjs-time-control vjs-control"
                        }

                    ), n=Z("span", {
                            className:"vjs-control-text", textContent:this.localize(this.labelText_)+" "
                        }

                        , {
                            role:"presentation"
                        }

                    ); return i.appendChild(n), this.contentEl_=Z("span", {
                            className:t+"-display"
                        }

                        , {
                            "aria-live":"off", role:"presentation"
                        }

                    ), i.appendChild(this.contentEl_), i
                }

                , i.dispose=function() {
                    this.contentEl_=null, this.textNode_=null, e.prototype.dispose.call(this)
                }

                , i.updateTextNode_=function(e) {
                    var t=this; void 0===e&&(e=0), e=Tn(e), this.formattedTime_ !==e&&(this.formattedTime_=e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", (function() {
                                    if(t.contentEl_) {
                                        var e=t.textNode_; e&&t.contentEl_.firstChild !==e&&(e=null, d.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), t.textNode_=document.createTextNode(t.formattedTime_), t.textNode_&&(e?t.contentEl_.replaceChild(t.textNode_, e):t.contentEl_.appendChild(t.textNode_))
                                    }
                                }

                            )))
                }

                , i.updateContent=function(e) {}

                , t
            }

            (yt); wn.prototype.labelText_="Time", wn.prototype.controlText_="Time", yt.registerComponent("TimeDisplay", wn); var Sn=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-current-time"
                }

                , i.updateContent=function(e) {
                    var t; t=this.player_.ended()?this.player_.duration():this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(), this.updateTextNode_(t)
                }

                , t
            }

            (wn); Sn.prototype.labelText_="Current Time", Sn.prototype.controlText_="Current Time", yt.registerComponent("CurrentTimeDisplay", Sn); var En=function(e) {
                function t(t, i) {
                    var n, r=function(e) {
                        return n.updateContent(e)
                    }

                    ; return(n=e.call(this, t, i)||this).on(t, "durationchange", r), n.on(t, "loadstart", r), n.on(t, "loadedmetadata", r), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-duration"
                }

                , i.updateContent=function(e) {
                    var t=this.player_.duration(); this.updateTextNode_(t)
                }

                , t
            }

            (wn); En.prototype.labelText_="Duration", En.prototype.controlText_="Duration", yt.registerComponent("DurationDisplay", En); var kn=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                return bt(t, e), t.prototype.createEl=function() {
                    var t=e.prototype.createEl.call(this, "div", {
                            className:"vjs-time-control vjs-time-divider"
                        }

                        , {
                            "aria-hidden": !0
                        }

                    ), i=e.prototype.createEl.call(this, "div"), n=e.prototype.createEl.call(this, "span", {
                            textContent:"/"
                        }

                    ); return i.appendChild(n), t.appendChild(i), t
                }

                , t
            }

            (yt); yt.registerComponent("TimeDivider", kn); var Cn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on(t, "durationchange", (function(e) {
                                return n.updateContent(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-remaining-time"
                }

                , i.createEl=function() {
                    var t=e.prototype.createEl.call(this); return !1 !==this.options_.displayNegative&&t.insertBefore(Z("span", {}

                            , {
                                "aria-hidden": !0
                            }

                            , "-"), this.contentEl_), t
                }

                , i.updateContent=function(e) {
                    var t; "number"==typeof this.player_.duration()&&(t=this.player_.ended()?0:this.player_.remainingTimeDisplay?this.player_.remainingTimeDisplay():this.player_.remainingTime(), this.updateTextNode_(t))
                }

                , t
            }

            (wn); Cn.prototype.labelText_="Remaining Time", Cn.prototype.controlText_="Remaining Time", yt.registerComponent("RemainingTimeDisplay", Cn); var In=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).updateShowing(), n.on(n.player(), "durationchange", (function(e) {
                                return n.updateShowing(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t=e.prototype.createEl.call(this, "div", {
                            className:"vjs-live-control vjs-control"
                        }

                    ); return this.contentEl_=Z("div", {
                            className:"vjs-live-display"
                        }

                        , {
                            "aria-live":"off"
                        }

                    ), this.contentEl_.appendChild(Z("span", {
                                className:"vjs-control-text", textContent:this.localize("Stream Type")+" "
                            }

                        )), this.contentEl_.appendChild(document.createTextNode(this.localize("LIVE"))), t.appendChild(this.contentEl_), t
                }

                , i.dispose=function() {
                    this.contentEl_=null, e.prototype.dispose.call(this)
                }

                , i.updateShowing=function(e) {
                    this.player().duration()===1/0?this.show():this.hide()
                }

                , t
            }

            (yt); yt.registerComponent("LiveDisplay", In); var xn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).updateLiveEdgeStatus(), n.player_.liveTracker&&(n.updateLiveEdgeStatusHandler_=function(e) {
                            return n.updateLiveEdgeStatus(e)
                        }

                        , n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatusHandler_)), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t=e.prototype.createEl.call(this, "button", {
                            className:"vjs-seek-to-live-control vjs-control"
                        }

                    ); return this.textEl_=Z("span", {
                            className:"vjs-seek-to-live-text", textContent:this.localize("LIVE")
                        }

                        , {
                            "aria-hidden":"true"
                        }

                    ), t.appendChild(this.textEl_), t
                }

                , i.updateLiveEdgeStatus=function() {
                     !this.player_.liveTracker||this.player_.liveTracker.atLiveEdge()?(this.setAttribute("aria-disabled",  !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")):(this.setAttribute("aria-disabled",  !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
                }

                , i.handleClick=function() {
                    this.player_.liveTracker.seekToLiveEdge()
                }

                , i.dispose=function() {
                    this.player_.liveTracker&&this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_=null, e.prototype.dispose.call(this)
                }

                , t
            }

            (mn); xn.prototype.controlText_="Seek to live, currently playing live", yt.registerComponent("SeekToLive", xn); var An=function(e, t, i) {
                return e=Number(e), Math.min(i, Math.max(t, isNaN(e)?t:e))
            }

            , Pn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).handleMouseDown_=function(e) {
                        return n.handleMouseDown(e)
                    }

                    , n.handleMouseUp_=function(e) {
                        return n.handleMouseUp(e)
                    }

                    , n.handleKeyDown_=function(e) {
                        return n.handleKeyDown(e)
                    }

                    , n.handleClick_=function(e) {
                        return n.handleClick(e)
                    }

                    , n.handleMouseMove_=function(e) {
                        return n.handleMouseMove(e)
                    }

                    , n.update_=function(e) {
                        return n.update(e)
                    }

                    , n.bar=n.getChild(n.options_.barName), n.vertical( ! !n.options_.vertical), n.enable(), n
                }

                bt(t, e); var i=t.prototype; return i.enabled=function() {
                    return this.enabled_
                }

                , i.enable=function() {
                    this.enabled()||(this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent&&this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_= !0)
                }

                , i.disable=function() {
                    if(this.enabled()) {
                        var e=this.bar.el_.ownerDocument; this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent&&this.off(this.player_, this.playerEvent, this.update), this.enabled_= !1
                    }
                }

                , i.createEl=function(t, i, n) {
                    return void 0===i&&(i= {}

                    ), void 0===n&&(n= {}

                    ), i.className=i.className+" vjs-slider", i=_( {
                            tabIndex:0
                        }

                        , i), n=_( {
                            role:"slider", "aria-valuenow":0, "aria-valuemin":0, "aria-valuemax":100, tabIndex:0
                        }

                        , n), e.prototype.createEl.call(this, t, i, n)
                }

                , i.handleMouseDown=function(e) {
                    var t=this.bar.el_.ownerDocument; "mousedown"===e.type&&e.preventDefault(), "touchstart" !==e.type||N||e.preventDefault(), de(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove_), this.on(t, "mouseup", this.handleMouseUp_), this.on(t, "touchmove", this.handleMouseMove_), this.on(t, "touchend", this.handleMouseUp_), this.handleMouseMove(e,  !0)
                }

                , i.handleMouseMove=function(e) {}

                , i.handleMouseUp=function() {
                    var e=this.bar.el_.ownerDocument; he(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.update()
                }

                , i.update=function() {
                    var e=this; if(this.el_&&this.bar) {
                        var t=this.getProgress(); return t===this.progress_||(this.progress_=t, this.requestNamedAnimationFrame("Slider#update", (function() {
                                        var i=e.vertical()?"height":"width"; e.bar.el().style[i]=(100*t).toFixed(2)+"%"
                                    }

                                ))), t
                    }
                }

                , i.getProgress=function() {
                    return Number(An(this.getPercent(), 0, 1).toFixed(4))
                }

                , i.calculateDistance=function(e) {
                    var t=me(this.el_, e); return this.vertical()?t.y:t.x
                }

                , i.handleKeyDown=function(t) {
                    vt.isEventKey(t, "Left")||vt.isEventKey(t, "Down")?(t.preventDefault(), t.stopPropagation(), this.stepBack()):vt.isEventKey(t, "Right")||vt.isEventKey(t, "Up")?(t.preventDefault(), t.stopPropagation(), this.stepForward()):e.prototype.handleKeyDown.call(this, t)
                }

                , i.handleClick=function(e) {
                    e.stopPropagation(), e.preventDefault()
                }

                , i.vertical=function(e) {
                    if(void 0===e)return this.vertical_|| !1; this.vertical_= ! !e, this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")
                }

                , t
            }

            (yt); yt.registerComponent("Slider", Pn); var Ln=function(e, t) {
                return An(e/t*100, 0, 100).toFixed(2)+"%"
            }

            , Dn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).partEls_=[], n.on(t, "progress", (function(e) {
                                return n.update(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t=e.prototype.createEl.call(this, "div", {
                            className:"vjs-load-progress"
                        }

                    ), i=Z("span", {
                            className:"vjs-control-text"
                        }

                    ), n=Z("span", {
                            textContent:this.localize("Loaded")
                        }

                    ), r=document.createTextNode(": "); return this.percentageEl_=Z("span", {
                            className:"vjs-control-text-loaded-percentage", textContent:"0%"
                        }

                    ), t.appendChild(i), i.appendChild(n), i.appendChild(r), i.appendChild(this.percentageEl_), t
                }

                , i.dispose=function() {
                    this.partEls_=null, this.percentageEl_=null, e.prototype.dispose.call(this)
                }

                , i.update=function(e) {
                    var t=this; this.requestNamedAnimationFrame("LoadProgressBar#update", (function() {
                                var e=t.player_.liveTracker, i=t.player_.buffered(), n=e&&e.isLive()?e.seekableEnd():t.player_.duration(), r=t.player_.bufferedEnd(), a=t.partEls_, s=Ln(r, n); t.percent_ !==s&&(t.el_.style.width=s, ee(t.percentageEl_, s), t.percent_=s); for(var o=0; o<i.length; o++) {
                                    var u=i.start(o), l=i.end(o), c=a[o]; c||(c=t.el_.appendChild(Z()), a[o]=c), c.dataset.start===u&&c.dataset.end===l||(c.dataset.start=u, c.dataset.end=l, c.style.left=Ln(u, r), c.style.width=Ln(l-u, r))
                                }

                                for(var d=a.length; d>i.length; d--)t.el_.removeChild(a[d-1]); a.length=i.length
                            }

                        ))
                }

                , t
            }

            (yt); yt.registerComponent("LoadProgressBar", Dn); var On=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update=Qe(Ye(_t(n), n.update), Ke), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-time-tooltip"
                        }

                        , {
                            "aria-hidden":"true"
                        }

                    )
                }

                , i.update=function(e, t, i) {
                    var n=fe(this.el_), r=pe(this.player_.el()), a=e.width*t; if(r&&n) {
                        var s=e.left-r.left+a, o=e.width-a+(r.right-e.right), u=n.width/2; s<u?u+=u-s:o<u&&(u=o), u<0?u=0:u>n.width&&(u=n.width), u=Math.round(u), this.el_.style.right="-"+u+"px", this.write(i)
                    }
                }

                , i.write=function(e) {
                    ee(this.el_, e)
                }

                , i.updateTime=function(e, t, i, n) {
                    var r=this; this.requestNamedAnimationFrame("TimeTooltip#updateTime", (function() {
                                var a, s=r.player_.duration(); if(r.player_.liveTracker&&r.player_.liveTracker.isLive()) {
                                    var o=r.player_.liveTracker.liveWindow(), u=o-t*o; a=(u<1?"":"-")+Tn(u, o)
                                }

                                else a=Tn(i, s); r.update(e, t, a), n&&n()
                            }

                        ))
                }

                , t
            }

            (yt); yt.registerComponent("TimeTooltip", On); var Mn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update=Qe(Ye(_t(n), n.update), Ke), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-play-progress vjs-slider-bar"
                        }

                        , {
                            "aria-hidden":"true"
                        }

                    )
                }

                , i.update=function(e, t) {
                    var i=this.getChild("timeTooltip"); if(i) {
                        var n=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime(); i.updateTime(e, t, n)
                    }
                }

                , t
            }

            (yt); Mn.prototype.options_= {
                children:[]
            }

            , W||L||Mn.prototype.options_.children.push("timeTooltip"), yt.registerComponent("PlayProgressBar", Mn); var Rn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update=Qe(Ye(_t(n), n.update), Ke), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-mouse-display"
                        }

                    )
                }

                , i.update=function(e, t) {
                    var i=this, n=t*this.player_.duration(); this.getChild("timeTooltip").updateTime(e, t, n, (function() {
                                i.el_.style.left=e.width*t+"px"
                            }

                        ))
                }

                , t
            }

            (yt); Rn.prototype.options_= {
                children:["timeTooltip"]
            }

            , yt.registerComponent("MouseTimeDisplay", Rn); var Nn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).setEventHandlers_(), n
                }

                bt(t, e); var i=t.prototype; return i.setEventHandlers_=function() {
                    var e=this; this.update_=Ye(this, this.update), this.update=Qe(this.update_, Ke), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker&&this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval=null, this.enableIntervalHandler_=function(t) {
                        return e.enableInterval_(t)
                    }

                    , this.disableIntervalHandler_=function(t) {
                        return e.disableInterval_(t)
                    }

                    , this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden"in document&&"visibilityState"in document&&this.on(document, "visibilitychange", this.toggleVisibility_)
                }

                , i.toggleVisibility_=function(e) {
                    "hidden"===document.visibilityState?(this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)):(this.player_.ended()||this.player_.paused()||this.enableInterval_(), this.update())
                }

                , i.enableInterval_=function() {
                    this.updateInterval||(this.updateInterval=this.setInterval(this.update, Ke))
                }

                , i.disableInterval_=function(e) {
                    this.player_.liveTracker&&this.player_.liveTracker.isLive()&&e&&"ended" !==e.type||this.updateInterval&&(this.clearInterval(this.updateInterval), this.updateInterval=null)
                }

                , i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-progress-holder"
                        }

                        , {
                            "aria-label":this.localize("Progress Bar")
                        }

                    )
                }

                , i.update=function(t) {
                    var i=this; if("hidden" !==document.visibilityState) {
                        var n=e.prototype.update.call(this); return this.requestNamedAnimationFrame("SeekBar#update", (function() {
                                    var e=i.player_.ended()?i.player_.duration():i.getCurrentTime_(), t=i.player_.liveTracker, r=i.player_.duration(); t&&t.isLive()&&(r=i.player_.liveTracker.liveCurrentTime()), i.percent_ !==n&&(i.el_.setAttribute("aria-valuenow", (100*n).toFixed(2)), i.percent_=n), i.currentTime_===e&&i.duration_===r||(i.el_.setAttribute("aria-valuetext", i.localize("progress bar timing: currentTime={1} duration={2}", [Tn(e, r), Tn(r, r)], "{1} of {2}")), i.currentTime_=e, i.duration_=r), i.bar&&i.bar.update(pe(i.el()), i.getProgress())
                                }

                            )), n
                    }
                }

                , i.userSeek_=function(e) {
                    this.player_.liveTracker&&this.player_.liveTracker.isLive()&&this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e)
                }

                , i.getCurrentTime_=function() {
                    return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()
                }

                , i.getPercent=function() {
                    var e, t=this.getCurrentTime_(), i=this.player_.liveTracker; return i&&i.isLive()?(e=(t-i.seekableStart())/i.liveWindow(), i.atLiveEdge()&&(e=1)):e=t/this.player_.duration(), e
                }

                , i.handleMouseDown=function(t) {
                    Te(t)&&(t.stopPropagation(), this.videoWasPlaying= !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
                }

                , i.handleMouseMove=function(e, t) {
                    if(void 0===t&&(t= !1), Te(e)) {
                        var i; t||this.player_.scrubbing()||this.player_.scrubbing( !0); var n=this.calculateDistance(e), r=this.player_.liveTracker; if(r&&r.isLive()) {
                            if(n>=.99)return void r.seekToLiveEdge(); var a=r.seekableStart(), s=r.liveCurrentTime(); if((i=a+n*r.liveWindow())>=s&&(i=s), i<=a&&(i=a+.1), i===1/0)return
                        }

                        else(i=n*this.player_.duration())===this.player_.duration()&&(i-=.1); this.userSeek_(i)
                    }
                }

                , i.enable=function() {
                    e.prototype.enable.call(this); var t=this.getChild("mouseTimeDisplay"); t&&t.show()
                }

                , i.disable=function() {
                    e.prototype.disable.call(this); var t=this.getChild("mouseTimeDisplay"); t&&t.hide()
                }

                , i.handleMouseUp=function(t) {
                    e.prototype.handleMouseUp.call(this, t), t&&t.stopPropagation(), this.player_.scrubbing( !1), this.player_.trigger( {
                            type:"timeupdate", target:this, manuallyTriggered: !0
                        }

                    ), this.videoWasPlaying?xt(this.player_.play()):this.update_()
                }

                , i.stepForward=function() {
                    this.userSeek_(this.player_.currentTime()+5)
                }

                , i.stepBack=function() {
                    this.userSeek_(this.player_.currentTime()-5)
                }

                , i.handleAction=function(e) {
                    this.player_.paused()?this.player_.play():this.player_.pause()
                }

                , i.handleKeyDown=function(t) {
                    var i=this.player_.liveTracker; if(vt.isEventKey(t, "Space")||vt.isEventKey(t, "Enter"))t.preventDefault(), t.stopPropagation(), this.handleAction(t); else if(vt.isEventKey(t, "Home"))t.preventDefault(), t.stopPropagation(), this.userSeek_(0); else if(vt.isEventKey(t, "End"))t.preventDefault(), t.stopPropagation(), i&&i.isLive()?this.userSeek_(i.liveCurrentTime()):this.userSeek_(this.player_.duration()); else if(/^[0-9]$/.test(vt(t))) {
                        t.preventDefault(), t.stopPropagation(); var n=10*(vt.codes[vt(t)]-vt.codes[0])/100; i&&i.isLive()?this.userSeek_(i.seekableStart()+i.liveWindow()*n):this.userSeek_(this.player_.duration()*n)
                    }

                    else vt.isEventKey(t, "PgDn")?(t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime()-60)):vt.isEventKey(t, "PgUp")?(t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime()+60)):e.prototype.handleKeyDown.call(this, t)
                }

                , i.dispose=function() {
                    this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker&&this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden"in document&&"visibilityState"in document&&this.off(document, "visibilitychange", this.toggleVisibility_), e.prototype.dispose.call(this)
                }

                , t
            }

            (Pn); Nn.prototype.options_= {
                children:["loadProgressBar", "playProgressBar"], barName:"playProgressBar"
            }

            , W||L||Nn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), yt.registerComponent("SeekBar", Nn); var Un=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).handleMouseMove=Qe(Ye(_t(n), n.handleMouseMove), Ke), n.throttledHandleMouseSeek=Qe(Ye(_t(n), n.handleMouseSeek), Ke), n.handleMouseUpHandler_=function(e) {
                        return n.handleMouseUp(e)
                    }

                    , n.handleMouseDownHandler_=function(e) {
                        return n.handleMouseDown(e)
                    }

                    , n.enable(), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-progress-control vjs-control"
                        }

                    )
                }

                , i.handleMouseMove=function(e) {
                    var t=this.getChild("seekBar"); if(t) {
                        var i=t.getChild("playProgressBar"), n=t.getChild("mouseTimeDisplay"); if(i||n) {
                            var r=t.el(), a=fe(r), s=me(r, e).x; s=An(s, 0, 1), n&&n.update(a, s), i&&i.update(a, t.getProgress())
                        }
                    }
                }

                , i.handleMouseSeek=function(e) {
                    var t=this.getChild("seekBar"); t&&t.handleMouseMove(e)
                }

                , i.enabled=function() {
                    return this.enabled_
                }

                , i.disable=function() {
                    if(this.children().forEach((function(e) {
                                    return e.disable&&e.disable()
                                }

                            )), this.enabled()&&(this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_= !1, this.player_.scrubbing())) {
                        var e=this.getChild("seekBar"); this.player_.scrubbing( !1), e.videoWasPlaying&&xt(this.player_.play())
                    }
                }

                , i.enable=function() {
                    this.children().forEach((function(e) {
                                return e.enable&&e.enable()
                            }

                        )), this.enabled()||(this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_= !0)
                }

                , i.removeListenersAddedOnMousedownAndTouchstart=function() {
                    var e=this.el_.ownerDocument; this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUpHandler_), this.off(e, "touchend", this.handleMouseUpHandler_)
                }

                , i.handleMouseDown=function(e) {
                    var t=this.el_.ownerDocument, i=this.getChild("seekBar"); i&&i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
                }

                , i.handleMouseUp=function(e) {
                    var t=this.getChild("seekBar"); t&&t.handleMouseUp(e), this.removeListenersAddedOnMousedownAndTouchstart()
                }

                , t
            }

            (yt); Un.prototype.options_= {
                children:["seekBar"]
            }

            , yt.registerComponent("ProgressControl", Un); var Bn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on(t, ["enterpictureinpicture", "leavepictureinpicture"], (function(e) {
                                return n.handlePictureInPictureChange(e)
                            }

                        )), n.on(t, ["disablepictureinpicturechanged", "loadedmetadata"], (function(e) {
                                return n.handlePictureInPictureEnabledChange(e)
                            }

                        )), n.on(t, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], (function() {
                                "audio"===t.currentType().substring(0, 5)||t.audioPosterMode()||t.audioOnlyMode()?(t.isInPictureInPicture()&&t.exitPictureInPicture(), n.hide()):n.show()
                            }

                        )), n.disable(), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-picture-in-picture-control "+e.prototype.buildCSSClass.call(this)
                }

                , i.handlePictureInPictureEnabledChange=function() {
                    document.pictureInPictureEnabled&& !1===this.player_.disablePictureInPicture()?this.enable():this.disable()
                }

                , i.handlePictureInPictureChange=function(e) {
                    this.player_.isInPictureInPicture()?this.controlText("Exit Picture-in-Picture"):this.controlText("Picture-in-Picture"), this.handlePictureInPictureEnabledChange()
                }

                , i.handleClick=function(e) {
                    this.player_.isInPictureInPicture()?this.player_.exitPictureInPicture():this.player_.requestPictureInPicture()
                }

                , t
            }

            (mn); Bn.prototype.controlText_="Picture-in-Picture", yt.registerComponent("PictureInPictureToggle", Bn); var Fn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on(t, "fullscreenchange", (function(e) {
                                return n.handleFullscreenChange(e)
                            }

                        )),  !1===document[t.fsApi_.fullscreenEnabled]&&n.disable(), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-fullscreen-control "+e.prototype.buildCSSClass.call(this)
                }

                , i.handleFullscreenChange=function(e) {
                    this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")
                }

                , i.handleClick=function(e) {
                    this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()
                }

                , t
            }

            (mn); Fn.prototype.controlText_="Fullscreen", yt.registerComponent("FullscreenToggle", Fn); var jn=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                return bt(t, e), t.prototype.createEl=function() {
                    var t=e.prototype.createEl.call(this, "div", {
                            className:"vjs-volume-level"
                        }

                    ); return t.appendChild(e.prototype.createEl.call(this, "span", {
                                className:"vjs-control-text"
                            }

                        )), t
                }

                , t
            }

            (yt); yt.registerComponent("VolumeLevel", jn); var Hn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update=Qe(Ye(_t(n), n.update), Ke), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-volume-tooltip"
                        }

                        , {
                            "aria-hidden":"true"
                        }

                    )
                }

                , i.update=function(e, t, i, n) {
                    if( !i) {
                        var r=pe(this.el_), a=pe(this.player_.el()), s=e.width*t; if( !a|| !r)return; var o=e.left-a.left+s, u=e.width-s+(a.right-e.right), l=r.width/2; o<l?l+=l-o:u<l&&(l=u), l<0?l=0:l>r.width&&(l=r.width), this.el_.style.right="-"+l+"px"
                    }

                    this.write(n+"%")
                }

                , i.write=function(e) {
                    ee(this.el_, e)
                }

                , i.updateVolume=function(e, t, i, n, r) {
                    var a=this; this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", (function() {
                                a.update(e, t, i, n.toFixed(0)), r&&r()
                            }

                        ))
                }

                , t
            }

            (yt); yt.registerComponent("VolumeLevelTooltip", Hn); var qn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).update=Qe(Ye(_t(n), n.update), Ke), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-mouse-display"
                        }

                    )
                }

                , i.update=function(e, t, i) {
                    var n=this, r=100*t; this.getChild("volumeLevelTooltip").updateVolume(e, t, i, r, (function() {
                                i?n.el_.style.bottom=e.height*t+"px":n.el_.style.left=e.width*t+"px"
                            }

                        ))
                }

                , t
            }

            (yt); qn.prototype.options_= {
                children:["volumeLevelTooltip"]
            }

            , yt.registerComponent("MouseVolumeLevelDisplay", qn); var Vn=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on("slideractive", (function(e) {
                                return n.updateLastVolume_(e)
                            }

                        )), n.on(t, "volumechange", (function(e) {
                                return n.updateARIAAttributes(e)
                            }

                        )), t.ready((function() {
                                return n.updateARIAAttributes()
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-volume-bar vjs-slider-bar"
                        }

                        , {
                            "aria-label":this.localize("Volume Level"), "aria-live":"polite"
                        }

                    )
                }

                , i.handleMouseDown=function(t) {
                    Te(t)&&e.prototype.handleMouseDown.call(this, t)
                }

                , i.handleMouseMove=function(e) {
                    var t=this.getChild("mouseVolumeLevelDisplay"); if(t) {
                        var i=this.el(), n=pe(i), r=this.vertical(), a=me(i, e); a=r?a.y:a.x, a=An(a, 0, 1), t.update(n, a, r)
                    }

                    Te(e)&&(this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
                }

                , i.checkMuted=function() {
                    this.player_.muted()&&this.player_.muted( !1)
                }

                , i.getPercent=function() {
                    return this.player_.muted()?0:this.player_.volume()
                }

                , i.stepForward=function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume()+.1)
                }

                , i.stepBack=function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume()-.1)
                }

                , i.updateARIAAttributes=function(e) {
                    var t=this.player_.muted()?0:this.volumeAsPercentage_(); this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t+"%")
                }

                , i.volumeAsPercentage_=function() {
                    return Math.round(100*this.player_.volume())
                }

                , i.updateLastVolume_=function() {
                    var e=this, t=this.player_.volume(); this.one("sliderinactive", (function() {
                                0===e.player_.volume()&&e.player_.lastVolume_(t)
                            }

                        ))
                }

                , t
            }

            (Pn); Vn.prototype.options_= {
                children:["volumeLevel"], barName:"volumeLevel"
            }

            , W||L||Vn.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"), Vn.prototype.playerEvent="volumechange", yt.registerComponent("VolumeBar", Vn); var Wn=function(e) {
                function t(t, i) {
                    var n; return void 0===i&&(i= {}

                    ), i.vertical=i.vertical|| !1, (void 0===i.volumeBar||T(i.volumeBar))&&(i.volumeBar=i.volumeBar|| {}

                        , i.volumeBar.vertical=i.vertical), n=e.call(this, t, i)||this, function(e, t) {
                        t.tech_&& !t.tech_.featuresVolumeControl&&e.addClass("vjs-hidden"), e.on(t, "loadstart", (function() {
                                    t.tech_.featuresVolumeControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")
                                }

                            ))
                    }

                    (_t(n), t), n.throttledHandleMouseMove=Qe(Ye(_t(n), n.handleMouseMove), Ke), n.handleMouseUpHandler_=function(e) {
                        return n.handleMouseUp(e)
                    }

                    , n.on("mousedown", (function(e) {
                                return n.handleMouseDown(e)
                            }

                        )), n.on("touchstart", (function(e) {
                                return n.handleMouseDown(e)
                            }

                        )), n.on("mousemove", (function(e) {
                                return n.handleMouseMove(e)
                            }

                        )), n.on(n.volumeBar, ["focus", "slideractive"], (function() {
                                n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive")
                            }

                        )), n.on(n.volumeBar, ["blur", "sliderinactive"], (function() {
                                n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), n.trigger("sliderinactive")
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t="vjs-volume-horizontal"; return this.options_.vertical&&(t="vjs-volume-vertical"), e.prototype.createEl.call(this, "div", {
                            className:"vjs-volume-control vjs-control "+t
                        }

                    )
                }

                , i.handleMouseDown=function(e) {
                    var t=this.el_.ownerDocument; this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
                }

                , i.handleMouseUp=function(e) {
                    var t=this.el_.ownerDocument; this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUpHandler_), this.off(t, "touchend", this.handleMouseUpHandler_)
                }

                , i.handleMouseMove=function(e) {
                    this.volumeBar.handleMouseMove(e)
                }

                , t
            }

            (yt); Wn.prototype.options_= {
                children:["volumeBar"]
            }

            , yt.registerComponent("VolumeControl", Wn); var Gn=function(e) {
                function t(t, i) {
                    var n; return n=e.call(this, t, i)||this, function(e, t) {
                        t.tech_&& !t.tech_.featuresMuteControl&&e.addClass("vjs-hidden"), e.on(t, "loadstart", (function() {
                                    t.tech_.featuresMuteControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")
                                }

                            ))
                    }

                    (_t(n), t), n.on(t, ["loadstart", "volumechange"], (function(e) {
                                return n.update(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-mute-control "+e.prototype.buildCSSClass.call(this)
                }

                , i.handleClick=function(e) {
                    var t=this.player_.volume(), i=this.player_.lastVolume_(); if(0===t) {
                        var n=i<.1?.1:i; this.player_.volume(n), this.player_.muted( !1)
                    }

                    else this.player_.muted( !this.player_.muted())
                }

                , i.update=function(e) {
                    this.updateIcon_(), this.updateControlText_()
                }

                , i.updateIcon_=function() {
                    var e=this.player_.volume(), t=3; W&&this.player_.tech_&&this.player_.tech_.el_&&this.player_.muted(this.player_.tech_.el_.muted), 0===e||this.player_.muted()?t=0:e<.33?t=1:e<.67&&(t=2); for(var i=0; i<4; i++)re(this.el_, "vjs-vol-"+i); ne(this.el_, "vjs-vol-"+t)
                }

                , i.updateControlText_=function() {
                    var e=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute"; this.controlText() !==e&&this.controlText(e)
                }

                , t
            }

            (mn); Gn.prototype.controlText_="Mute", yt.registerComponent("MuteToggle", Gn); var zn=function(e) {
                function t(t, i) {
                    var n; return void 0===i&&(i= {}

                    ), void 0 !==i.inline?i.inline=i.inline:i.inline= !0, (void 0===i.volumeControl||T(i.volumeControl))&&(i.volumeControl=i.volumeControl|| {}

                        , i.volumeControl.vertical= !i.inline), (n=e.call(this, t, i)||this).handleKeyPressHandler_=function(e) {
                        return n.handleKeyPress(e)
                    }

                    , n.on(t, ["loadstart"], (function(e) {
                                return n.volumePanelState_(e)
                            }

                        )), n.on(n.muteToggle, "keyup", (function(e) {
                                return n.handleKeyPress(e)
                            }

                        )), n.on(n.volumeControl, "keyup", (function(e) {
                                return n.handleVolumeControlKeyUp(e)
                            }

                        )), n.on("keydown", (function(e) {
                                return n.handleKeyPress(e)
                            }

                        )), n.on("mouseover", (function(e) {
                                return n.handleMouseOver(e)
                            }

                        )), n.on("mouseout", (function(e) {
                                return n.handleMouseOut(e)
                            }

                        )), n.on(n.volumeControl, ["slideractive"], n.sliderActive_), n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_), n
                }

                bt(t, e); var i=t.prototype; return i.sliderActive_=function() {
                    this.addClass("vjs-slider-active")
                }

                , i.sliderInactive_=function() {
                    this.removeClass("vjs-slider-active")
                }

                , i.volumePanelState_=function() {
                    this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden")&& !this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")
                }

                , i.createEl=function() {
                    var t="vjs-volume-panel-horizontal"; return this.options_.inline||(t="vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", {
                            className:"vjs-volume-panel vjs-control "+t
                        }

                    )
                }

                , i.dispose=function() {
                    this.handleMouseOut(), e.prototype.dispose.call(this)
                }

                , i.handleVolumeControlKeyUp=function(e) {
                    vt.isEventKey(e, "Esc")&&this.muteToggle.focus()
                }

                , i.handleMouseOver=function(e) {
                    this.addClass("vjs-hover"), He(document, "keyup", this.handleKeyPressHandler_)
                }

                , i.handleMouseOut=function(e) {
                    this.removeClass("vjs-hover"), qe(document, "keyup", this.handleKeyPressHandler_)
                }

                , i.handleKeyPress=function(e) {
                    vt.isEventKey(e, "Esc")&&this.handleMouseOut()
                }

                , t
            }

            (yt); zn.prototype.options_= {
                children:["muteToggle", "volumeControl"]
            }

            , yt.registerComponent("VolumePanel", zn); var Xn=function(e) {
                function t(t, i) {
                    var n; return n=e.call(this, t, i)||this, i&&(n.menuButton_=i.menuButton), n.focusedChild_=-1, n.on("keydown", (function(e) {
                                return n.handleKeyDown(e)
                            }

                        )), n.boundHandleBlur_=function(e) {
                        return n.handleBlur(e)
                    }

                    , n.boundHandleTapClick_=function(e) {
                        return n.handleTapClick(e)
                    }

                    , n
                }

                bt(t, e); var i=t.prototype; return i.addEventListenerForItem=function(e) {
                    e instanceof yt&&(this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
                }

                , i.removeEventListenerForItem=function(e) {
                    e instanceof yt&&(this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
                }

                , i.removeChild=function(t) {
                    "string"==typeof t&&(t=this.getChild(t)), this.removeEventListenerForItem(t), e.prototype.removeChild.call(this, t)
                }

                , i.addItem=function(e) {
                    var t=this.addChild(e); t&&this.addEventListenerForItem(t)
                }

                , i.createEl=function() {
                    var t=this.options_.contentElType||"ul"; this.contentEl_=Z(t, {
                            className:"vjs-menu-content"
                        }

                    ), this.contentEl_.setAttribute("role", "menu"); var i=e.prototype.createEl.call(this, "div", {
                            append:this.contentEl_, className:"vjs-menu"
                        }

                    ); return i.appendChild(this.contentEl_), He(i, "click", (function(e) {
                                e.preventDefault(), e.stopImmediatePropagation()
                            }

                        )), i
                }

                , i.dispose=function() {
                    this.contentEl_=null, this.boundHandleBlur_=null, this.boundHandleTapClick_=null, e.prototype.dispose.call(this)
                }

                , i.handleBlur=function(e) {
                    var t=e.relatedTarget||document.activeElement; if( !this.children().some((function(e) {
                                    return e.el()===t
                                }

                            ))) {
                        var i=this.menuButton_; i&&i.buttonPressed_&&t !==i.el().firstChild&&i.unpressButton()
                    }
                }

                , i.handleTapClick=function(e) {
                    if(this.menuButton_) {
                        this.menuButton_.unpressButton(); var t=this.children(); if( !Array.isArray(t))return; var i=t.filter((function(t) {
                                    return t.el()===e.target
                                }

                            ))[0]; if( !i)return; "CaptionSettingsMenuItem" !==i.name()&&this.menuButton_.focus()
                    }
                }

                , i.handleKeyDown=function(e) {
                    vt.isEventKey(e, "Left")||vt.isEventKey(e, "Down")?(e.preventDefault(), e.stopPropagation(), this.stepForward()):(vt.isEventKey(e, "Right")||vt.isEventKey(e, "Up"))&&(e.preventDefault(), e.stopPropagation(), this.stepBack())
                }

                , i.stepForward=function() {
                    var e=0; void 0 !==this.focusedChild_&&(e=this.focusedChild_+1), this.focus(e)
                }

                , i.stepBack=function() {
                    var e=0; void 0 !==this.focusedChild_&&(e=this.focusedChild_-1), this.focus(e)
                }

                , i.focus=function(e) {
                    void 0===e&&(e=0); var t=this.children().slice(); t.length&&t[0].hasClass("vjs-menu-title")&&t.shift(), t.length>0&&(e<0?e=0:e>=t.length&&(e=t.length-1), this.focusedChild_=e, t[e].el_.focus())
                }

                , t
            }

            (yt); yt.registerComponent("Menu", Xn); var Kn=function(e) {
                function t(t, i) {
                    var n; void 0===i&&(i= {}

                    ), (n=e.call(this, t, i)||this).menuButton_=new mn(t, i), n.menuButton_.controlText(n.controlText_), n.menuButton_.el_.setAttribute("aria-haspopup", "true"); var r=mn.prototype.buildCSSClass(); n.menuButton_.el_.className=n.buildCSSClass()+" "+r, n.menuButton_.removeClass("vjs-control"), n.addChild(n.menuButton_), n.update(), n.enabled_= !0; var a=function(e) {
                        return n.handleClick(e)
                    }

                    ; return n.handleMenuKeyUp_=function(e) {
                        return n.handleMenuKeyUp(e)
                    }

                    , n.on(n.menuButton_, "tap", a), n.on(n.menuButton_, "click", a), n.on(n.menuButton_, "keydown", (function(e) {
                                return n.handleKeyDown(e)
                            }

                        )), n.on(n.menuButton_, "mouseenter", (function() {
                                n.addClass("vjs-hover"), n.menu.show(), He(document, "keyup", n.handleMenuKeyUp_)
                            }

                        )), n.on("mouseleave", (function(e) {
                                return n.handleMouseLeave(e)
                            }

                        )), n.on("keydown", (function(e) {
                                return n.handleSubmenuKeyDown(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.update=function() {
                    var e=this.createMenu(); this.menu&&(this.menu.dispose(), this.removeChild(this.menu)), this.menu=e, this.addChild(e), this.buttonPressed_= !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items&&this.items.length<=this.hideThreshold_?(this.hide(), this.menu.contentEl_.removeAttribute("role")):(this.show(), this.menu.contentEl_.setAttribute("role", "menu"))
                }

                , i.createMenu=function() {
                    var e=new Xn(this.player_, {
                            menuButton:this
                        }

                    ); if(this.hideThreshold_=0, this.options_.title) {
                        var t=Z("li", {
                                className:"vjs-menu-title", textContent:dt(this.options_.title), tabIndex:-1
                            }

                        ), i=new yt(this.player_, {
                                el:t
                            }

                        ); e.addItem(i)
                    }

                    if(this.items=this.createItems(), this.items)for(var n=0; n<this.items.length; n++)e.addItem(this.items[n]); return e
                }

                , i.createItems=function() {}

                , i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:this.buildWrapperCSSClass()
                        }

                        , {}

                    )
                }

                , i.buildWrapperCSSClass=function() {
                    var t="vjs-menu-button"; return !0===this.options_.inline?t+="-inline":t+="-popup", "vjs-menu-button "+t+" "+mn.prototype.buildCSSClass()+" "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildCSSClass=function() {
                    var t="vjs-menu-button"; return !0===this.options_.inline?t+="-inline":t+="-popup", "vjs-menu-button "+t+" "+e.prototype.buildCSSClass.call(this)
                }

                , i.controlText=function(e, t) {
                    return void 0===t&&(t=this.menuButton_.el()), this.menuButton_.controlText(e, t)
                }

                , i.dispose=function() {
                    this.handleMouseLeave(), e.prototype.dispose.call(this)
                }

                , i.handleClick=function(e) {
                    this.buttonPressed_?this.unpressButton():this.pressButton()
                }

                , i.handleMouseLeave=function(e) {
                    this.removeClass("vjs-hover"), qe(document, "keyup", this.handleMenuKeyUp_)
                }

                , i.focus=function() {
                    this.menuButton_.focus()
                }

                , i.blur=function() {
                    this.menuButton_.blur()
                }

                , i.handleKeyDown=function(e) {
                    vt.isEventKey(e, "Esc")||vt.isEventKey(e, "Tab")?(this.buttonPressed_&&this.unpressButton(), vt.isEventKey(e, "Tab")||(e.preventDefault(), this.menuButton_.focus())):(vt.isEventKey(e, "Up")||vt.isEventKey(e, "Down"))&&(this.buttonPressed_||(e.preventDefault(), this.pressButton()))
                }

                , i.handleMenuKeyUp=function(e) {
                    (vt.isEventKey(e, "Esc")||vt.isEventKey(e, "Tab"))&&this.removeClass("vjs-hover")
                }

                , i.handleSubmenuKeyPress=function(e) {
                    this.handleSubmenuKeyDown(e)
                }

                , i.handleSubmenuKeyDown=function(e) {
                    (vt.isEventKey(e, "Esc")||vt.isEventKey(e, "Tab"))&&(this.buttonPressed_&&this.unpressButton(), vt.isEventKey(e, "Tab")||(e.preventDefault(), this.menuButton_.focus()))
                }

                , i.pressButton=function() {
                    if(this.enabled_) {
                        if(this.buttonPressed_= !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), W&&$())return; this.menu.focus()
                    }
                }

                , i.unpressButton=function() {
                    this.enabled_&&(this.buttonPressed_= !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                }

                , i.disable=function() {
                    this.unpressButton(), this.enabled_= !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                }

                , i.enable=function() {
                    this.enabled_= !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                }

                , t
            }

            (yt); yt.registerComponent("MenuButton", Kn); var Yn=function(e) {
                function t(t, i) {
                    var n, r=i.tracks; if((n=e.call(this, t, i)||this).items.length<=1&&n.hide(),  !r)return _t(n); var a=Ye(_t(n), n.update); return r.addEventListener("removetrack", a), r.addEventListener("addtrack", a), r.addEventListener("labelchange", a), n.player_.on("ready", a), n.player_.on("dispose", (function() {
                                r.removeEventListener("removetrack", a), r.removeEventListener("addtrack", a), r.removeEventListener("labelchange", a)
                            }

                        )), n
                }

                return bt(t, e), t
            }

            (Kn); yt.registerComponent("TrackButton", Yn); var Qn=["Tab", "Esc", "Up", "Down", "Right", "Left"], $n=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).selectable=i.selectable, n.isSelected_=i.selected|| !1, n.multiSelectable=i.multiSelectable, n.selected(n.isSelected_), n.selectable?n.multiSelectable?n.el_.setAttribute("role", "menuitemcheckbox"):n.el_.setAttribute("role", "menuitemradio"):n.el_.setAttribute("role", "menuitem"), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function(t, i, n) {
                    this.nonIconControl= !0; var r=e.prototype.createEl.call(this, "li", _( {
                                className:"vjs-menu-item", tabIndex:-1
                            }

                            , i), n); return r.replaceChild(Z("span", {
                                className:"vjs-menu-item-text", textContent:this.localize(this.options_.label)
                            }

                        ), r.querySelector(".vjs-icon-placeholder")), r
                }

                , i.handleKeyDown=function(t) {
                    Qn.some((function(e) {
                                return vt.isEventKey(t, e)
                            }

                        ))||e.prototype.handleKeyDown.call(this, t)
                }

                , i.handleClick=function(e) {
                    this.selected( !0)
                }

                , i.selected=function(e) {
                    this.selectable&&(e?(this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_= !0):(this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_= !1))
                }

                , t
            }

            (un); yt.registerComponent("MenuItem", $n); var Jn=function(e) {
                function t(t, i) {
                    var n, r=i.track, a=t.textTracks(); i.label=r.label||r.language||"Unknown", i.selected="showing"===r.mode, (n=e.call(this, t, i)||this).track=r, n.kinds=(i.kinds||[i.kind||n.track.kind]).filter(Boolean); var s, o=function() {
                        for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i]; n.handleTracksChange.apply(_t(n), t)
                    }

                    , u=function() {
                        for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i]; n.handleSelectedLanguageChange.apply(_t(n), t)
                    }

                    ; return t.on(["loadstart", "texttrackchange"], o), a.addEventListener("change", o), a.addEventListener("selectedlanguagechange", u), n.on("dispose", (function() {
                                t.off(["loadstart", "texttrackchange"], o), a.removeEventListener("change", o), a.removeEventListener("selectedlanguagechange", u)
                            }

                        )), void 0===a.onchange&&n.on(["tap", "click"], (function() {
                                if("object" !=typeof window.Event)try {
                                    s=new window.Event("change")
                                }

                                catch(e) {}

                                s||(s=document.createEvent("Event")).initEvent("change",  !0,  !0), a.dispatchEvent(s)
                            }

                        )), n.handleTracksChange(), n
                }

                bt(t, e); var i=t.prototype; return i.handleClick=function(t) {
                    var i=this.track, n=this.player_.textTracks(); if(e.prototype.handleClick.call(this, t), n)for(var r=0; r<n.length; r++) {
                        var a=n[r]; -1 !==this.kinds.indexOf(a.kind)&&(a===i?"showing" !==a.mode&&(a.mode="showing"):"disabled" !==a.mode&&(a.mode="disabled"))
                    }
                }

                , i.handleTracksChange=function(e) {
                    var t="showing"===this.track.mode; t !==this.isSelected_&&this.selected(t)
                }

                , i.handleSelectedLanguageChange=function(e) {
                    if("showing"===this.track.mode) {
                        var t=this.player_.cache_.selectedLanguage; if(t&&t.enabled&&t.language===this.track.language&&t.kind !==this.track.kind)return; this.player_.cache_.selectedLanguage= {
                            enabled: !0, language:this.track.language, kind:this.track.kind
                        }
                    }
                }

                , i.dispose=function() {
                    this.track=null, e.prototype.dispose.call(this)
                }

                , t
            }

            ($n); yt.registerComponent("TextTrackMenuItem", Jn); var Zn=function(e) {
                function t(t, i) {
                    return i.track= {
                        player:t, kind:i.kind, kinds:i.kinds, default: !1, mode:"disabled"
                    }

                    , i.kinds||(i.kinds=[i.kind]), i.label?i.track.label=i.label:i.track.label=i.kinds.join(" and ")+" off", i.selectable= !0, i.multiSelectable= !1, e.call(this, t, i)||this
                }

                bt(t, e); var i=t.prototype; return i.handleTracksChange=function(e) {
                    for(var t=this.player().textTracks(), i= !0, n=0, r=t.length; n<r; n++) {
                        var a=t[n]; if(this.options_.kinds.indexOf(a.kind)>-1&&"showing"===a.mode) {
                            i= !1; break
                        }
                    }

                    i !==this.isSelected_&&this.selected(i)
                }

                , i.handleSelectedLanguageChange=function(e) {
                    for(var t=this.player().textTracks(), i= !0, n=0, r=t.length; n<r; n++) {
                        var a=t[n]; if(["captions", "descriptions", "subtitles"].indexOf(a.kind)>-1&&"showing"===a.mode) {
                            i= !1; break
                        }
                    }

                    i&&(this.player_.cache_.selectedLanguage= {
                            enabled: !1
                        }

                    )
                }

                , t
            }

            (Jn); yt.registerComponent("OffTextTrackMenuItem", Zn); var er=function(e) {
                function t(t, i) {
                    return void 0===i&&(i= {}

                    ), i.tracks=t.textTracks(), e.call(this, t, i)||this
                }

                return bt(t, e), t.prototype.createItems=function(e, t) {
                    var i; void 0===e&&(e=[]), void 0===t&&(t=Jn), this.label_&&(i=this.label_+" off"), e.push(new Zn(this.player_, {
                                kinds:this.kinds_, kind:this.kind_, label:i
                            }

                        )), this.hideThreshold_+=1; var n=this.player_.textTracks(); Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]); for(var r=0; r<n.length; r++) {
                        var a=n[r]; if(this.kinds_.indexOf(a.kind)>-1) {
                            var s=new t(this.player_, {
                                    track:a, kinds:this.kinds_, kind:this.kind_, selectable: !0, multiSelectable: !1
                                }

                            ); s.addClass("vjs-"+a.kind+"-menu-item"), e.push(s)
                        }
                    }

                    return e
                }

                , t
            }

            (Yn); yt.registerComponent("TextTrackButton", er); var tr=function(e) {
                function t(t, i) {
                    var n, r=i.track, a=i.cue, s=t.currentTime(); return i.selectable= !0, i.multiSelectable= !1, i.label=a.text, i.selected=a.startTime<=s&&s<a.endTime, (n=e.call(this, t, i)||this).track=r, n.cue=a, n
                }

                return bt(t, e), t.prototype.handleClick=function(t) {
                    e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime)
                }

                , t
            }

            ($n); yt.registerComponent("ChaptersTrackMenuItem", tr); var ir=function(e) {
                function t(t, i, n) {
                    var r; return(r=e.call(this, t, i, n)||this).selectCurrentItem_=function() {
                        r.items.forEach((function(e) {
                                    e.selected(r.track_.activeCues[0]===e.cue)
                                }

                            ))
                    }

                    , r
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-chapters-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-chapters-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , i.update=function(t) {
                    if( !t|| !t.track||"chapters"===t.track.kind) {
                        var i=this.findChaptersTrack(); i !==this.track_?(this.setTrack(i), e.prototype.update.call(this)):( !this.items||i&&i.cues&&i.cues.length !==this.items.length)&&e.prototype.update.call(this)
                    }
                }

                , i.setTrack=function(e) {
                    if(this.track_ !==e) {
                        if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)), this.track_) {
                            var t=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); t&&t.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_=null
                        }

                        if(this.track_=e, this.track_) {
                            this.track_.mode="hidden"; var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); i&&i.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_)
                        }
                    }
                }

                , i.findChaptersTrack=function() {
                    for(var e=this.player_.textTracks()||[], t=e.length-1; t>=0; t--) {
                        var i=e[t]; if(i.kind===this.kind_)return i
                    }
                }

                , i.getMenuCaption=function() {
                    return this.track_&&this.track_.label?this.track_.label:this.localize(dt(this.kind_))
                }

                , i.createMenu=function() {
                    return this.options_.title=this.getMenuCaption(), e.prototype.createMenu.call(this)
                }

                , i.createItems=function() {
                    var e=[]; if( !this.track_)return e; var t=this.track_.cues; if( !t)return e; for(var i=0, n=t.length; i<n; i++) {
                        var r=t[i], a=new tr(this.player_, {
                                track:this.track_, cue:r
                            }

                        ); e.push(a)
                    }

                    return e
                }

                , t
            }

            (er); ir.prototype.kind_="chapters", ir.prototype.controlText_="Chapters", yt.registerComponent("ChaptersButton", ir); var nr=function(e) {
                function t(t, i, n) {
                    var r; r=e.call(this, t, i, n)||this; var a=t.textTracks(), s=Ye(_t(r), r.handleTracksChange); return a.addEventListener("change", s), r.on("dispose", (function() {
                                a.removeEventListener("change", s)
                            }

                        )), r
                }

                bt(t, e); var i=t.prototype; return i.handleTracksChange=function(e) {
                    for(var t=this.player().textTracks(), i= !1, n=0, r=t.length; n<r; n++) {
                        var a=t[n]; if(a.kind !==this.kind_&&"showing"===a.mode) {
                            i= !0; break
                        }
                    }

                    i?this.disable():this.enable()
                }

                , i.buildCSSClass=function() {
                    return"vjs-descriptions-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-descriptions-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , t
            }

            (er); nr.prototype.kind_="descriptions", nr.prototype.controlText_="Descriptions", yt.registerComponent("DescriptionsButton", nr); var rr=function(e) {
                function t(t, i, n) {
                    return e.call(this, t, i, n)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-subtitles-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-subtitles-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , t
            }

            (er); rr.prototype.kind_="subtitles", rr.prototype.controlText_="Subtitles", yt.registerComponent("SubtitlesButton", rr); var ar=function(e) {
                function t(t, i) {
                    var n; return i.track= {
                        player:t, kind:i.kind, label:i.kind+" settings", selectable: !1, default: !1, mode:"disabled"
                    }

                    , i.selectable= !1, i.name="CaptionSettingsMenuItem", (n=e.call(this, t, i)||this).addClass("vjs-texttrack-settings"), n.controlText(", opens "+i.kind+" settings dialog"), n
                }

                return bt(t, e), t.prototype.handleClick=function(e) {
                    this.player().getChild("textTrackSettings").open()
                }

                , t
            }

            (Jn); yt.registerComponent("CaptionSettingsMenuItem", ar); var sr=function(e) {
                function t(t, i, n) {
                    return e.call(this, t, i, n)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-captions-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-captions-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , i.createItems=function() {
                    var t=[]; return this.player().tech_&&this.player().tech_.featuresNativeTextTracks|| !this.player().getChild("textTrackSettings")||(t.push(new ar(this.player_, {
                                    kind:this.kind_
                                }

                            )), this.hideThreshold_+=1), e.prototype.createItems.call(this, t)
                }

                , t
            }

            (er); sr.prototype.kind_="captions", sr.prototype.controlText_="Captions", yt.registerComponent("CaptionsButton", sr); var or=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                return bt(t, e), t.prototype.createEl=function(t, i, n) {
                    var r=e.prototype.createEl.call(this, t, i, n), a=r.querySelector(".vjs-menu-item-text"); return"captions"===this.options_.track.kind&&(a.appendChild(Z("span", {
                                    className:"vjs-icon-placeholder"
                                }

                                , {
                                    "aria-hidden": !0
                                }

                            )), a.appendChild(Z("span", {
                                    className:"vjs-control-text", textContent:" "+this.localize("Captions")
                                }

                            ))), r
                }

                , t
            }

            (Jn); yt.registerComponent("SubsCapsMenuItem", or); var ur=function(e) {
                function t(t, i) {
                    var n; return void 0===i&&(i= {}

                    ), (n=e.call(this, t, i)||this).label_="subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_)>-1&&(n.label_="captions"), n.menuButton_.controlText(dt(n.label_)), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-subs-caps-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-subs-caps-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , i.createItems=function() {
                    var t=[]; return this.player().tech_&&this.player().tech_.featuresNativeTextTracks|| !this.player().getChild("textTrackSettings")||(t.push(new ar(this.player_, {
                                    kind:this.label_
                                }

                            )), this.hideThreshold_+=1), e.prototype.createItems.call(this, t, or)
                }

                , t
            }

            (er); ur.prototype.kinds_=["captions", "subtitles"], ur.prototype.controlText_="Subtitles", yt.registerComponent("SubsCapsButton", ur); var lr=function(e) {
                function t(t, i) {
                    var n, r=i.track, a=t.audioTracks(); i.label=r.label||r.language||"Unknown", i.selected=r.enabled, (n=e.call(this, t, i)||this).track=r, n.addClass("vjs-"+r.kind+"-menu-item"); var s=function() {
                        for(var e=arguments.length, t=new Array(e), i=0; i<e; i++)t[i]=arguments[i]; n.handleTracksChange.apply(_t(n), t)
                    }

                    ; return a.addEventListener("change", s), n.on("dispose", (function() {
                                a.removeEventListener("change", s)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function(t, i, n) {
                    var r=e.prototype.createEl.call(this, t, i, n), a=r.querySelector(".vjs-menu-item-text"); return"main-desc"===this.options_.track.kind&&(a.appendChild(Z("span", {
                                    className:"vjs-icon-placeholder"
                                }

                                , {
                                    "aria-hidden": !0
                                }

                            )), a.appendChild(Z("span", {
                                    className:"vjs-control-text", textContent:" "+this.localize("Descriptions")
                                }

                            ))), r
                }

                , i.handleClick=function(t) {
                    if(e.prototype.handleClick.call(this, t), this.track.enabled= !0, this.player_.tech_.featuresNativeAudioTracks)for(var i=this.player_.audioTracks(), n=0; n<i.length; n++) {
                        var r=i[n]; r !==this.track&&(r.enabled=r===this.track)
                    }
                }

                , i.handleTracksChange=function(e) {
                    this.selected(this.track.enabled)
                }

                , t
            }

            ($n); yt.registerComponent("AudioTrackMenuItem", lr); var cr=function(e) {
                function t(t, i) {
                    return void 0===i&&(i= {}

                    ), i.tracks=t.audioTracks(), e.call(this, t, i)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-audio-button "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-audio-button "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , i.createItems=function(e) {
                    void 0===e&&(e=[]), this.hideThreshold_=1; for(var t=this.player_.audioTracks(), i=0; i<t.length; i++) {
                        var n=t[i]; e.push(new lr(this.player_, {
                                    track:n, selectable: !0, multiSelectable: !1
                                }

                            ))
                    }

                    return e
                }

                , t
            }

            (Yn); cr.prototype.controlText_="Audio Track", yt.registerComponent("AudioTrackButton", cr); var dr=function(e) {
                function t(t, i) {
                    var n, r=i.rate, a=parseFloat(r, 10); return i.label=r, i.selected=a===t.playbackRate(), i.selectable= !0, i.multiSelectable= !1, (n=e.call(this, t, i)||this).label=r, n.rate=a, n.on(t, "ratechange", (function(e) {
                                return n.update(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.handleClick=function(t) {
                    e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                }

                , i.update=function(e) {
                    this.selected(this.player().playbackRate()===this.rate)
                }

                , t
            }

            ($n); dr.prototype.contentElType="button", yt.registerComponent("PlaybackRateMenuItem", dr); var hr=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).menuButton_.el_.setAttribute("aria-describedby", n.labelElId_), n.updateVisibility(), n.updateLabel(), n.on(t, "loadstart", (function(e) {
                                return n.updateVisibility(e)
                            }

                        )), n.on(t, "ratechange", (function(e) {
                                return n.updateLabel(e)
                            }

                        )), n.on(t, "playbackrateschange", (function(e) {
                                return n.handlePlaybackRateschange(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    var t=e.prototype.createEl.call(this); return this.labelElId_="vjs-playback-rate-value-label-"+this.id_, this.labelEl_=Z("div", {
                            className:"vjs-playback-rate-value", id:this.labelElId_, textContent:"1x"
                        }

                    ), t.appendChild(this.labelEl_), t
                }

                , i.dispose=function() {
                    this.labelEl_=null, e.prototype.dispose.call(this)
                }

                , i.buildCSSClass=function() {
                    return"vjs-playback-rate "+e.prototype.buildCSSClass.call(this)
                }

                , i.buildWrapperCSSClass=function() {
                    return"vjs-playback-rate "+e.prototype.buildWrapperCSSClass.call(this)
                }

                , i.createItems=function() {
                    for(var e=this.playbackRates(), t=[], i=e.length-1; i>=0; i--)t.push(new dr(this.player(), {
                                rate:e[i]+"x"
                            }

                        )); return t
                }

                , i.updateARIAAttributes=function() {
                    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                }

                , i.handleClick=function(e) {
                    var t=this.player().playbackRate(), i=this.playbackRates(), n=(i.indexOf(t)+1)%i.length; this.player().playbackRate(i[n])
                }

                , i.handlePlaybackRateschange=function(e) {
                    this.update()
                }

                , i.playbackRates=function() {
                    var e=this.player(); return e.playbackRates&&e.playbackRates()||[]
                }

                , i.playbackRateSupported=function() {
                    return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0
                }

                , i.updateVisibility=function(e) {
                    this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")
                }

                , i.updateLabel=function(e) {
                    this.playbackRateSupported()&&(this.labelEl_.textContent=this.player().playbackRate()+"x")
                }

                , t
            }

            (Kn); hr.prototype.controlText_="Playback Rate", yt.registerComponent("PlaybackRateMenuButton", hr); var pr=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-spacer "+e.prototype.buildCSSClass.call(this)
                }

                , i.createEl=function(t, i, n) {
                    return void 0===t&&(t="div"), void 0===i&&(i= {}

                    ), void 0===n&&(n= {}

                    ), i.className||(i.className=this.buildCSSClass()), e.prototype.createEl.call(this, t, i, n)
                }

                , t
            }

            (yt); yt.registerComponent("Spacer", pr); var fr=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)
                }

                , i.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:this.buildCSSClass(), textContent:" "
                        }

                    )
                }

                , t
            }

            (pr); yt.registerComponent("CustomControlSpacer", fr); var mr=function(e) {
                function t() {
                    return e.apply(this, arguments)||this
                }

                return bt(t, e), t.prototype.createEl=function() {
                    return e.prototype.createEl.call(this, "div", {
                            className:"vjs-control-bar", dir:"ltr"
                        }

                    )
                }

                , t
            }

            (yt); mr.prototype.options_= {
                children:["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
            }

            , "exitPictureInPicture"in document&&mr.prototype.options_.children.splice(mr.prototype.options_.children.length-1, 0, "pictureInPictureToggle"), yt.registerComponent("ControlBar", mr); var gr=function(e) {
                function t(t, i) {
                    var n; return(n=e.call(this, t, i)||this).on(t, "error", (function(e) {
                                return n.open(e)
                            }

                        )), n
                }

                bt(t, e); var i=t.prototype; return i.buildCSSClass=function() {
                    return"vjs-error-display "+e.prototype.buildCSSClass.call(this)
                }

                , i.content=function() {
                    var e=this.player().error(); return e?this.localize(e.message):""
                }

                , t
            }

            (Pt); gr.prototype.options_=m( {}

                , Pt.prototype.options_, {
                    pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0
                }

            ), yt.registerComponent("ErrorDisplay", gr); var vr="vjs-text-track-settings", yr=["#000", "Black"], _r=["#00F", "Blue"], br=["#0FF", "Cyan"], Tr=["#0F0", "Green"], wr=["#F0F", "Magenta"], Sr=["#F00", "Red"], Er=["#FFF", "White"], kr=["#FF0", "Yellow"], Cr=["1", "Opaque"], Ir=["0.5", "Semi-Transparent"], xr=["0", "Transparent"], Ar= {
                backgroundColor: {
                    selector:".vjs-bg-color > select", id:"captions-background-color-%s", label:"Color", options:[yr, Er, Sr, Tr, _r, kr, wr, br]
                }

                , backgroundOpacity: {
                    selector:".vjs-bg-opacity > select", id:"captions-background-opacity-%s", label:"Transparency", options:[Cr, Ir, xr]
                }

                , color: {
                    selector:".vjs-fg-color > select", id:"captions-foreground-color-%s", label:"Color", options:[Er, yr, Sr, Tr, _r, kr, wr, br]
                }

                , edgeStyle: {
                    selector:".vjs-edge-style > select", id:"%s", label:"Text Edge Style", options:[["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                }

                , fontFamily: {
                    selector:".vjs-font-family > select", id:"captions-font-family-%s", label:"Font Family", options:[["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
                }

                , fontPercent: {
                    selector:".vjs-font-percent > select", id:"captions-font-size-%s", label:"Font Size", options:[["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], default:2, parser:function(e) {
                        return"1.00"===e?null:Number(e)
                    }
                }

                , textOpacity: {
                    selector:".vjs-text-opacity > select", id:"captions-foreground-opacity-%s", label:"Transparency", options:[Cr, Ir]
                }

                , windowColor: {
                    selector:".vjs-window-color > select", id:"captions-window-color-%s", label:"Color"
                }

                , windowOpacity: {
                    selector:".vjs-window-opacity > select", id:"captions-window-opacity-%s", label:"Transparency", options:[xr, Ir, Cr]
                }
            }

            ; function Pr(e, t) {
                if(t&&(e=t(e)), e&&"none" !==e)return e
            }

            Ar.windowColor.options=Ar.backgroundColor.options; var Lr=function(e) {
                function t(t, i) {
                    var n; return i.temporary= !1, (n=e.call(this, t, i)||this).updateDisplay=n.updateDisplay.bind(_t(n)), n.fill(), n.hasBeenOpened_=n.hasBeenFilled_= !0, n.endDialog=Z("p", {
                            className:"vjs-control-text", textContent:n.localize("End of dialog window.")
                        }

                    ), n.el().appendChild(n.endDialog), n.setDefaults(), void 0===i.persistTextTrackSettings&&(n.options_.persistTextTrackSettings=n.options_.playerOptions.persistTextTrackSettings), n.on(n.$(".vjs-done-button"), "click", (function() {
                                n.saveSettings(), n.close()
                            }

                        )), n.on(n.$(".vjs-default-button"), "click", (function() {
                                n.setDefaults(), n.updateDisplay()
                            }

                        )), y(Ar, (function(e) {
                                n.on(n.$(e.selector), "change", n.updateDisplay)
                            }

                        )), n.options_.persistTextTrackSettings&&n.restoreSettings(), n
                }

                bt(t, e); var i=t.prototype; return i.dispose=function() {
                    this.endDialog=null, e.prototype.dispose.call(this)
                }

                , i.createElSelect_=function(e, t, i) {
                    var n=this; void 0===t&&(t=""), void 0===i&&(i="label"); var r=Ar[e], a=r.id.replace("%s", this.id_), s=[t, a].join(" ").trim(); return["<"+i+' id="'+a+'" class="'+("label"===i?"vjs-label":"")+'">', this.localize(r.label), "</"+i+">", '<select aria-labelledby="'+s+'">'].concat(r.options.map((function(e) {
                                    var t=a+"-"+e[1].replace(/\W+/g, ""); return['<option id="'+t+'" value="'+e[0]+'" ', 'aria-labelledby="'+s+" "+t+'">', n.localize(e[1]), "</option>"].join("")
                                }

                            ))).concat("</select>").join("")
                }

                , i.createElFgColor_=function() {
                    var e="captions-text-legend-"+this.id_; return['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="'+e+'">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
                }

                , i.createElBgColor_=function() {
                    var e="captions-background-"+this.id_; return['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="'+e+'">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
                }

                , i.createElWinColor_=function() {
                    var e="captions-window-"+this.id_; return['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="'+e+'">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
                }

                , i.createElColors_=function() {
                    return Z("div", {
                            className:"vjs-track-settings-colors", innerHTML:[this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                        }

                    )
                }

                , i.createElFont_=function() {
                    return Z("div", {
                            className:"vjs-track-settings-font", innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                        }

                    )
                }

                , i.createElControls_=function() {
                    var e=this.localize("restore all settings to the default values"); return Z("div", {
                            className:"vjs-track-settings-controls", innerHTML:['<button type="button" class="vjs-default-button" title="'+e+'">', this.localize("Reset"), '<span class="vjs-control-text"> '+e+"</span>", "</button>", '<button type="button" class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")
                        }

                    )
                }

                , i.content=function() {
                    return[this.createElColors_(), this.createElFont_(), this.createElControls_()]
                }

                , i.label=function() {
                    return this.localize("Caption Settings Dialog")
                }

                , i.description=function() {
                    return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                }

                , i.buildCSSClass=function() {
                    return e.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"
                }

                , i.getValues=function() {
                    var e, t, i, n=this; return t=function(e, t, i) {
                        var r, a, s=(r=n.$(t.selector), a=t.parser, Pr(r.options[r.options.selectedIndex].value, a)); return void 0 !==s&&(e[i]=s), e
                    }

                    , void 0===(i= {}

                    )&&(i=0), v(e=Ar).reduce((function(i, n) {
                                return t(i, e[n], n)
                            }

                        ), i)
                }

                , i.setValues=function(e) {
                    var t=this; y(Ar, (function(i, n) {
                                 !function(e, t, i) {
                                    if(t)for(var n=0; n<e.options.length; n++)if(Pr(e.options[n].value, i)===t) {
                                        e.selectedIndex=n; break
                                    }
                                }

                                (t.$(i.selector), e[n], i.parser)
                            }

                        ))
                }

                , i.setDefaults=function() {
                    var e=this; y(Ar, (function(t) {
                                var i=t.hasOwnProperty("default")?t.default:0; e.$(t.selector).selectedIndex=i
                            }

                        ))
                }

                , i.restoreSettings=function() {
                    var e; try {
                        e=JSON.parse(window.localStorage.getItem(vr))
                    }

                    catch(e) {
                        d.warn(e)
                    }

                    e&&this.setValues(e)
                }

                , i.saveSettings=function() {
                    if(this.options_.persistTextTrackSettings) {
                        var e=this.getValues(); try {
                            Object.keys(e).length?window.localStorage.setItem(vr, JSON.stringify(e)):window.localStorage.removeItem(vr)
                        }

                        catch(e) {
                            d.warn(e)
                        }
                    }
                }

                , i.updateDisplay=function() {
                    var e=this.player_.getChild("textTrackDisplay"); e&&e.updateDisplay()
                }

                , i.conditionalBlur_=function() {
                    this.previouslyActiveEl_=null; var e=this.player_.controlBar, t=e&&e.subsCapsButton, i=e&&e.captionsButton; t?t.focus():i&&i.focus()
                }

                , t
            }

            (Pt); yt.registerComponent("TextTrackSettings", Lr); var Dr=function(e) {
                function t(t, i) {
                    var n, r=i.ResizeObserver||window.ResizeObserver; null===i.ResizeObserver&&(r= !1); var a=ht( {
                            createEl: !r, reportTouchActivity: !1
                        }

                        , i); return(n=e.call(this, t, a)||this).ResizeObserver=i.ResizeObserver||window.ResizeObserver, n.loadListener_=null, n.resizeObserver_=null, n.debouncedHandler_=function(e, t, i, n) {
                        var r; void 0===n&&(n=window); var a=function() {
                            var t=this, i=arguments, a=function() {
                                r=null, a=null, e.apply(t, i)
                            }

                            ; n.clearTimeout(r), r=n.setTimeout(a, 100)
                        }

                        ; return a.cancel=function() {
                            n.clearTimeout(r), r=null
                        }

                        , a
                    }

                    ((function() {
                                n.resizeHandler()
                            }

                        ), 0, 0, _t(n)), r?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_), n.resizeObserver_.observe(t.el())):(n.loadListener_=function() {
                            if(n.el_&&n.el_.contentWindow) {
                                var e=n.debouncedHandler_, t=n.unloadListener_=function() {
                                    qe(this, "resize", e), qe(this, "unload", t), t=null
                                }

                                ; He(n.el_.contentWindow, "unload", t), He(n.el_.contentWindow, "resize", e)
                            }
                        }

                        , n.one("load", n.loadListener_)), n
                }

                bt(t, e); var i=t.prototype; return i.createEl=function() {
                    return e.prototype.createEl.call(this, "iframe", {
                            className:"vjs-resize-manager", tabIndex:-1, title:this.localize("No content")
                        }

                        , {
                            "aria-hidden":"true"
                        }

                    )
                }

                , i.resizeHandler=function() {
                    this.player_&&this.player_.trigger&&this.player_.trigger("playerresize")
                }

                , i.dispose=function() {
                    this.debouncedHandler_&&this.debouncedHandler_.cancel(), this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_&&this.off("load", this.loadListener_), this.el_&&this.el_.contentWindow&&this.unloadListener_&&this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver=null, this.resizeObserver=null, this.debouncedHandler_=null, this.loadListener_=null, e.prototype.dispose.call(this)
                }

                , t
            }

            (yt); yt.registerComponent("ResizeManager", Dr); var Or= {
                trackingThreshold:20, liveTolerance:15
            }

            , Mr=function(e) {
                function t(t, i) {
                    var n, r=ht(Or, i, {
                            createEl: !1
                        }

                    ); return(n=e.call(this, t, r)||this).handleVisibilityChange_=function(e) {
                        return n.handleVisibilityChange(e)
                    }

                    , n.trackLiveHandler_=function() {
                        return n.trackLive_()
                    }

                    , n.handlePlay_=function(e) {
                        return n.handlePlay(e)
                    }

                    , n.handleFirstTimeupdate_=function(e) {
                        return n.handleFirstTimeupdate(e)
                    }

                    , n.handleSeeked_=function(e) {
                        return n.handleSeeked(e)
                    }

                    , n.seekToLiveEdge_=function(e) {
                        return n.seekToLiveEdge(e)
                    }

                    , n.reset_(), n.on(n.player_, "durationchange", (function(e) {
                                return n.handleDurationchange(e)
                            }

                        )), n.on(n.player_, "canplay", (function() {
                                return n.toggleTracking()
                            }

                        )), B&&"hidden"in document&&"visibilityState"in document&&n.on(document, "visibilitychange", n.handleVisibilityChange_), n
                }

                bt(t, e); var i=t.prototype; return i.handleVisibilityChange=function() {
                    this.player_.duration()===1/0&&(document.hidden?this.stopTracking():this.startTracking())
                }

                , i.trackLive_=function() {
                    var e=this.player_.seekable(); if(e&&e.length) {
                        var t=Number(window.performance.now().toFixed(4)), i=-1===this.lastTime_?0:(t-this.lastTime_)/1e3; this.lastTime_=t, this.pastSeekEnd_=this.pastSeekEnd()+i; var n=this.liveCurrentTime(), r=this.player_.currentTime(), a=this.player_.paused()||this.seekedBehindLive_||Math.abs(n-r)>this.options_.liveTolerance; this.timeupdateSeen_&&n !==1/0||(a= !1), a !==this.behindLiveEdge_&&(this.behindLiveEdge_=a, this.trigger("liveedgechange"))
                    }
                }

                , i.handleDurationchange=function() {
                    this.toggleTracking()
                }

                , i.toggleTracking=function() {
                    this.player_.duration()===1/0&&this.liveWindow()>=this.options_.trackingThreshold?(this.player_.options_.liveui&&this.player_.addClass("vjs-liveui"), this.startTracking()):(this.player_.removeClass("vjs-liveui"), this.stopTracking())
                }

                , i.startTracking=function() {
                    this.isTracking()||(this.timeupdateSeen_||(this.timeupdateSeen_=this.player_.hasStarted()), this.trackingInterval_=this.setInterval(this.trackLiveHandler_, Ke), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_?this.on(this.player_, "seeked", this.handleSeeked_):(this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)))
                }

                , i.handleFirstTimeupdate=function() {
                    this.timeupdateSeen_= !0, this.on(this.player_, "seeked", this.handleSeeked_)
                }

                , i.handleSeeked=function() {
                    var e=Math.abs(this.liveCurrentTime()-this.player_.currentTime()); this.seekedBehindLive_=this.nextSeekedFromUser_&&e>2, this.nextSeekedFromUser_= !1, this.trackLive_()
                }

                , i.handlePlay=function() {
                    this.one(this.player_, "timeupdate", this.seekToLiveEdge_)
                }

                , i.reset_=function() {
                    this.lastTime_=-1, this.pastSeekEnd_=0, this.lastSeekEnd_=-1, this.behindLiveEdge_= !0, this.timeupdateSeen_= !1, this.seekedBehindLive_= !1, this.nextSeekedFromUser_= !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_=null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_)
                }

                , i.nextSeekedFromUser=function() {
                    this.nextSeekedFromUser_= !0
                }

                , i.stopTracking=function() {
                    this.isTracking()&&(this.reset_(), this.trigger("liveedgechange"))
                }

                , i.seekableEnd=function() {
                    for(var e=this.player_.seekable(), t=[], i=e?e.length:0; i--; )t.push(e.end(i)); return t.length?t.sort()[t.length-1]:1/0
                }

                , i.seekableStart=function() {
                    for(var e=this.player_.seekable(), t=[], i=e?e.length:0; i--; )t.push(e.start(i)); return t.length?t.sort()[0]:0
                }

                , i.liveWindow=function() {
                    var e=this.liveCurrentTime(); return e===1/0?0:e-this.seekableStart()
                }

                , i.isLive=function() {
                    return this.isTracking()
                }

                , i.atLiveEdge=function() {
                    return !this.behindLiveEdge()
                }

                , i.liveCurrentTime=function() {
                    return this.pastSeekEnd()+this.seekableEnd()
                }

                , i.pastSeekEnd=function() {
                    var e=this.seekableEnd(); return-1 !==this.lastSeekEnd_&&e !==this.lastSeekEnd_&&(this.pastSeekEnd_=0), this.lastSeekEnd_=e, this.pastSeekEnd_
                }

                , i.behindLiveEdge=function() {
                    return this.behindLiveEdge_
                }

                , i.isTracking=function() {
                    return"number"==typeof this.trackingInterval_
                }

                , i.seekToLiveEdge=function() {
                    this.seekedBehindLive_= !1, this.atLiveEdge()||(this.nextSeekedFromUser_= !1, this.player_.currentTime(this.liveCurrentTime()))
                }

                , i.dispose=function() {
                    this.off(document, "visibilitychange", this.handleVisibilityChange_), this.stopTracking(), e.prototype.dispose.call(this)
                }

                , t
            }

            (yt); yt.registerComponent("LiveTracker", Mr); var Rr, Nr=function(e) {
                var t=e.el(); if(t.hasAttribute("src"))return e.triggerSourceset(t.src),  !0; var i=e.$$("source"), n=[], r=""; if( !i.length)return !1; for(var a=0; a<i.length; a++) {
                    var s=i[a].src; s&&-1===n.indexOf(s)&&n.push(s)
                }

                return ! !n.length&&(1===n.length&&(r=n[0]), e.triggerSourceset(r),  !0)
            }

            , Ur=Object.defineProperty( {}

                , "innerHTML", {
                    get:function() {
                        return this.cloneNode( !0).innerHTML
                    }

                    , set:function(e) {
                        var t=document.createElement(this.nodeName.toLowerCase()); t.innerHTML=e; for(var i=document.createDocumentFragment(); t.childNodes.length; )i.appendChild(t.childNodes[0]); return this.innerText="", window.Element.prototype.appendChild.call(this, i), this.innerHTML
                    }
                }

            ), Br=function(e, t) {
                for(var i= {}

                    , n=0; n<e.length&& !((i=Object.getOwnPropertyDescriptor(e[n], t))&&i.set&&i.get); n++); return i.enumerable= !0, i.configurable= !0, i
            }

            , Fr=function(e) {
                var t=e.el(); if( !t.resetSourceWatch_) {
                    var i= {}

                    , n=function(e) {
                        return Br([e.el(), window.HTMLMediaElement.prototype, window.Element.prototype, Ur], "innerHTML")
                    }

                    (e), r=function(i) {
                        return function() {
                            for(var n=arguments.length, r=new Array(n), a=0; a<n; a++)r[a]=arguments[a]; var s=i.apply(t, r); return Nr(e), s
                        }
                    }

                    ; ["append", "appendChild", "insertAdjacentHTML"].forEach((function(e) {
                                t[e]&&(i[e]=t[e], t[e]=r(i[e]))
                            }

                        )), Object.defineProperty(t, "innerHTML", ht(n, {
                                set:r(n.set)
                            }

                        )), t.resetSourceWatch_=function() {
                        t.resetSourceWatch_=null, Object.keys(i).forEach((function(e) {
                                    t[e]=i[e]
                                }

                            )), Object.defineProperty(t, "innerHTML", n)
                    }

                    , e.one("sourceset", t.resetSourceWatch_)
                }
            }

            , jr=Object.defineProperty( {}

                , "src", {
                    get:function() {
                        return this.hasAttribute("src")?zt(window.Element.prototype.getAttribute.call(this, "src")):""
                    }

                    , set:function(e) {
                        return window.Element.prototype.setAttribute.call(this, "src", e), e
                    }
                }

            ), Hr=function(e, t, i, n) {
                void 0===n&&(n= !0); var r=function(i) {
                    return Object.defineProperty(e, t, {
                            value:i, enumerable: !0, writable: !0
                        }

                    )
                }

                , a= {
                    configurable: !0, enumerable: !0, get:function() {
                        var e=i(); return r(e), e
                    }
                }

                ; return n&&(a.set=r), Object.defineProperty(e, t, a)
            }

            , qr=function(e) {
                function t(t, i) {
                    var n; n=e.call(this, t, i)||this; var r=t.source, a= !1; if(n.featuresVideoFrameCallback=n.featuresVideoFrameCallback&&"VIDEO"===n.el_.tagName, r&&(n.el_.currentSrc !==r.src||t.tag&&3===t.tag.initNetworkState_)?n.setSource(r):n.handleLateInit_(n.el_), t.enableSourceset&&n.setupSourcesetHandling_(), n.isScrubbing_= !1, n.el_.hasChildNodes()) {
                        for(var s=n.el_.childNodes, o=s.length, u=[]; o--; ) {
                            var l=s[o]; "track"===l.nodeName.toLowerCase()&&(n.featuresNativeTextTracks?(n.remoteTextTrackEls().addTrackElement_(l), n.remoteTextTracks().addTrack(l.track), n.textTracks().addTrack(l.track), a||n.el_.hasAttribute("crossorigin")|| !Kt(l.src)||(a= !0)):u.push(l))
                        }

                        for(var c=0; c<u.length; c++)n.el_.removeChild(u[c])
                    }

                    return n.proxyNativeTracks_(), n.featuresNativeTextTracks&&a&&d.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), n.restoreMetadataTracksInIOSNativePlayer_(), (H||V||O)&& !0===t.nativeControlsForTouch&&n.setControls( !0), n.proxyWebkitFullscreen_(), n.triggerReady(), n
                }

                bt(t, e); var i=t.prototype; return i.dispose=function() {
                    this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(), t.disposeMediaElement(this.el_), this.options_=null, e.prototype.dispose.call(this)
                }

                , i.setupSourcesetHandling_=function() {
                     !function(e) {
                        if(e.featuresSourceset) {
                            var t=e.el(); if( !t.resetSourceset_) {
                                var i=function(e) {
                                    return Br([e.el(), window.HTMLMediaElement.prototype, jr], "src")
                                }

                                (e), n=t.setAttribute, r=t.load; Object.defineProperty(t, "src", ht(i, {
                                            set:function(n) {
                                                var r=i.set.call(t, n); return e.triggerSourceset(t.src), r
                                            }
                                        }

                                    )), t.setAttribute=function(i, r) {
                                    var a=n.call(t, i, r); return/src/i.test(i)&&e.triggerSourceset(t.src), a
                                }

                                , t.load=function() {
                                    var i=r.call(t); return Nr(e)||(e.triggerSourceset(""), Fr(e)), i
                                }

                                , t.currentSrc?e.triggerSourceset(t.currentSrc):Nr(e)||Fr(e), t.resetSourceset_=function() {
                                    t.resetSourceset_=null, t.load=r, t.setAttribute=n, Object.defineProperty(t, "src", i), t.resetSourceWatch_&&t.resetSourceWatch_()
                                }
                            }
                        }
                    }

                    (this)
                }

                , i.restoreMetadataTracksInIOSNativePlayer_=function() {
                    var e, t=this.textTracks(), i=function() {
                        e=[]; for(var i=0; i<t.length; i++) {
                            var n=t[i]; "metadata"===n.kind&&e.push( {
                                    track:n, storedMode:n.mode
                                }

                            )
                        }
                    }

                    ; i(), t.addEventListener("change", i), this.on("dispose", (function() {
                                return t.removeEventListener("change", i)
                            }

                        )); var n=function i() {
                        for(var n=0; n<e.length; n++) {
                            var r=e[n]; "disabled"===r.track.mode&&r.track.mode !==r.storedMode&&(r.track.mode=r.storedMode)
                        }

                        t.removeEventListener("change", i)
                    }

                    ; this.on("webkitbeginfullscreen", (function() {
                                t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n)
                            }

                        )), this.on("webkitendfullscreen", (function() {
                                t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n)
                            }

                        ))
                }

                , i.overrideNative_=function(e, t) {
                    var i=this; if(t===this["featuresNative"+e+"Tracks"]) {
                        var n=e.toLowerCase(); this[n+"TracksListeners_"]&&Object.keys(this[n+"TracksListeners_"]).forEach((function(e) {
                                    i.el()[n+"Tracks"].removeEventListener(e, i[n+"TracksListeners_"][e])
                                }

                            )), this["featuresNative"+e+"Tracks"]= !t, this[n+"TracksListeners_"]=null, this.proxyNativeTracksForType_(n)
                    }
                }

                , i.overrideNativeAudioTracks=function(e) {
                    this.overrideNative_("Audio", e)
                }

                , i.overrideNativeVideoTracks=function(e) {
                    this.overrideNative_("Video", e)
                }

                , i.proxyNativeTracksForType_=function(e) {
                    var t=this, i=li[e], n=this.el()[i.getterName], r=this[i.getterName](); if(this["featuresNative"+i.capitalName+"Tracks"]&&n&&n.addEventListener) {
                        var a= {
                            change:function(i) {
                                var n= {
                                    type:"change", target:r, currentTarget:r, srcElement:r
                                }

                                ; r.trigger(n), "text"===e&&t[ci.remoteText.getterName]().trigger(n)
                            }

                            , addtrack:function(e) {
                                r.addTrack(e.track)
                            }

                            , removetrack:function(e) {
                                r.removeTrack(e.track)
                            }
                        }

                        , s=function() {
                            for(var e=[], t=0; t<r.length; t++) {
                                for(var i= !1, a=0; a<n.length; a++)if(n[a]===r[t]) {
                                    i= !0; break
                                }

                                i||e.push(r[t])
                            }

                            for(; e.length; )r.removeTrack(e.shift())
                        }

                        ; this[i.getterName+"Listeners_"]=a, Object.keys(a).forEach((function(e) {
                                    var i=a[e]; n.addEventListener(e, i), t.on("dispose", (function(t) {
                                                return n.removeEventListener(e, i)
                                            }

                                        ))
                                }

                            )), this.on("loadstart", s), this.on("dispose", (function(e) {
                                    return t.off("loadstart", s)
                                }

                            ))
                    }
                }

                , i.proxyNativeTracks_=function() {
                    var e=this; li.names.forEach((function(t) {
                                e.proxyNativeTracksForType_(t)
                            }

                        ))
                }

                , i.createEl=function() {
                    var e=this.options_.tag; if( !e|| !this.options_.playerElIngest&& !this.movingMediaElementInDOM) {
                        if(e) {
                            var i=e.cloneNode( !0); e.parentNode&&e.parentNode.insertBefore(i, e), t.disposeMediaElement(e), e=i
                        }

                        else {
                            e=document.createElement("video"); var n=ht( {}

                                , this.options_.tag&&oe(this.options_.tag)); H&& !0===this.options_.nativeControlsForTouch||delete n.controls, se(e, _(n, {
                                        id:this.options_.techId, class:"vjs-tech"
                                    }

                                ))
                        }

                        e.playerId=this.options_.playerId
                    }

                    void 0 !==this.options_.preload&&le(e, "preload", this.options_.preload), void 0 !==this.options_.disablePictureInPicture&&(e.disablePictureInPicture=this.options_.disablePictureInPicture); for(var r=["loop", "muted", "playsinline", "autoplay"], a=0; a<r.length; a++) {
                        var s=r[a], o=this.options_[s]; void 0 !==o&&(o?le(e, s, s):ce(e, s), e[s]=o)
                    }

                    return e
                }

                , i.handleLateInit_=function(e) {
                    if(0 !==e.networkState&&3 !==e.networkState) {
                        if(0===e.readyState) {
                            var t= !1, i=function() {
                                t= !0
                            }

                            ; this.on("loadstart", i); var n=function() {
                                t||this.trigger("loadstart")
                            }

                            ; return this.on("loadedmetadata", n), void this.ready((function() {
                                        this.off("loadstart", i), this.off("loadedmetadata", n), t||this.trigger("loadstart")
                                    }

                                ))
                        }

                        var r=["loadstart"]; r.push("loadedmetadata"), e.readyState>=2&&r.push("loadeddata"), e.readyState>=3&&r.push("canplay"), e.readyState>=4&&r.push("canplaythrough"), this.ready((function() {
                                    r.forEach((function(e) {
                                                this.trigger(e)
                                            }

                                        ), this)
                                }

                            ))
                    }
                }

                , i.setScrubbing=function(e) {
                    this.isScrubbing_=e
                }

                , i.scrubbing=function() {
                    return this.isScrubbing_
                }

                , i.setCurrentTime=function(e) {
                    try {
                        this.isScrubbing_&&this.el_.fastSeek&&G?this.el_.fastSeek(e):this.el_.currentTime=e
                    }

                    catch(e) {
                        d(e, "Video is not ready. (Video.js)")
                    }
                }

                , i.duration=function() {
                    var e=this; return this.el_.duration===1/0&&L&&N&&0===this.el_.currentTime?(this.on("timeupdate", (function t() {
                                    e.el_.currentTime>0&&(e.el_.duration===1/0&&e.trigger("durationchange"), e.off("timeupdate", t))
                                }

                            )), NaN):this.el_.duration||NaN
                }

                , i.width=function() {
                    return this.el_.offsetWidth
                }

                , i.height=function() {
                    return this.el_.offsetHeight
                }

                , i.proxyWebkitFullscreen_=function() {
                    var e=this; if("webkitDisplayingFullscreen"in this.el_) {
                        var t=function() {
                            this.trigger("fullscreenchange", {
                                    isFullscreen: !1
                                }

                            ), this.el_.controls&& !this.options_.nativeControlsForTouch&&this.controls()&&(this.el_.controls= !1)
                        }

                        , i=function() {
                            "webkitPresentationMode"in this.el_&&"picture-in-picture" !==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                                        isFullscreen: !0, nativeIOSFullscreen: !0
                                    }

                                ))
                        }

                        ; this.on("webkitbeginfullscreen", i), this.on("dispose", (function() {
                                    e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                                }

                            ))
                    }
                }

                , i.supportsFullScreen=function() {
                    if("function"==typeof this.el_.webkitEnterFullScreen) {
                        var e=window.navigator&&window.navigator.userAgent||""; if(/Android/.test(e)|| !/Chrome|Mac OS X 10.5/.test(e))return !0
                    }

                    return !1
                }

                , i.enterFullScreen=function() {
                    var e=this.el_; if(e.paused&&e.networkState<=e.HAVE_METADATA)xt(this.el_.play()), this.setTimeout((function() {
                                e.pause(); try {
                                    e.webkitEnterFullScreen()
                                }

                                catch(e) {
                                    this.trigger("fullscreenerror", e)
                                }
                            }

                        ), 0); else try {
                        e.webkitEnterFullScreen()
                    }

                    catch(e) {
                        this.trigger("fullscreenerror", e)
                    }
                }

                , i.exitFullScreen=function() {
                    this.el_.webkitDisplayingFullscreen?this.el_.webkitExitFullScreen():this.trigger("fullscreenerror", new Error("The video is not fullscreen"))
                }

                , i.requestPictureInPicture=function() {
                    return this.el_.requestPictureInPicture()
                }

                , i.requestVideoFrameCallback=function(t) {
                    return this.featuresVideoFrameCallback&& !this.el_.webkitKeys?this.el_.requestVideoFrameCallback(t):e.prototype.requestVideoFrameCallback.call(this, t)
                }

                , i.cancelVideoFrameCallback=function(t) {
                    this.featuresVideoFrameCallback&& !this.el_.webkitKeys?this.el_.cancelVideoFrameCallback(t):e.prototype.cancelVideoFrameCallback.call(this, t)
                }

                , i.src=function(e) {
                    if(void 0===e)return this.el_.src; this.setSrc(e)
                }

                , i.reset=function() {
                    t.resetMediaElement(this.el_)
                }

                , i.currentSrc=function() {
                    return this.currentSource_?this.currentSource_.src:this.el_.currentSrc
                }

                , i.setControls=function(e) {
                    this.el_.controls= ! !e
                }

                , i.addTextTrack=function(t, i, n) {
                    return this.featuresNativeTextTracks?this.el_.addTextTrack(t, i, n):e.prototype.addTextTrack.call(this, t, i, n)
                }

                , i.createRemoteTextTrack=function(t) {
                    if( !this.featuresNativeTextTracks)return e.prototype.createRemoteTextTrack.call(this, t); var i=document.createElement("track"); return t.kind&&(i.kind=t.kind), t.label&&(i.label=t.label), (t.language||t.srclang)&&(i.srclang=t.language||t.srclang), t.default&&(i.default=t.default), t.id&&(i.id=t.id), t.src&&(i.src=t.src), i
                }

                , i.addRemoteTextTrack=function(t, i) {
                    var n=e.prototype.addRemoteTextTrack.call(this, t, i); return this.featuresNativeTextTracks&&this.el().appendChild(n), n
                }

                , i.removeRemoteTextTrack=function(t) {
                    if(e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)for(var i=this.$$("track"), n=i.length; n--; )t !==i[n]&&t !==i[n].track||this.el().removeChild(i[n])
                }

                , i.getVideoPlaybackQuality=function() {
                    if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality(); var e= {}

                    ; return void 0 !==this.el().webkitDroppedFrameCount&&void 0 !==this.el().webkitDecodedFrameCount&&(e.droppedVideoFrames=this.el().webkitDroppedFrameCount, e.totalVideoFrames=this.el().webkitDecodedFrameCount), window.performance&&"function"==typeof window.performance.now?e.creationTime=window.performance.now():window.performance&&window.performance.timing&&"number"==typeof window.performance.timing.navigationStart&&(e.creationTime=window.Date.now()-window.performance.timing.navigationStart), e
                }

                , t
            }

            (Gi); Hr(qr, "TEST_VID", (function() {
                        if(Y()) {
                            var e=document.createElement("video"), t=document.createElement("track"); return t.kind="captions", t.srclang="en", t.label="English", e.appendChild(t), e
                        }
                    }

                )), qr.isSupported=function() {
                try {
                    qr.TEST_VID.volume=.5
                }

                catch(e) {
                    return !1
                }

                return !( !qr.TEST_VID|| !qr.TEST_VID.canPlayType)
            }

            , qr.canPlayType=function(e) {
                return qr.TEST_VID.canPlayType(e)
            }

            , qr.canPlaySource=function(e, t) {
                return qr.canPlayType(e.type)
            }

            , qr.canControlVolume=function() {
                try {
                    var e=qr.TEST_VID.volume; qr.TEST_VID.volume=e/2+.1; var t=e !==qr.TEST_VID.volume; return t&&W?(window.setTimeout((function() {
                                    qr&&qr.prototype&&(qr.prototype.featuresVolumeControl=e !==qr.TEST_VID.volume)
                                }

                            )),  !1):t
                }

                catch(e) {
                    return !1
                }
            }

            , qr.canMuteVolume=function() {
                try {
                    var e=qr.TEST_VID.muted; return qr.TEST_VID.muted= !e, qr.TEST_VID.muted?le(qr.TEST_VID, "muted", "muted"):ce(qr.TEST_VID, "muted"), e !==qr.TEST_VID.muted
                }

                catch(e) {
                    return !1
                }
            }

            , qr.canControlPlaybackRate=function() {
                if(L&&N&&U<58)return !1; try {
                    var e=qr.TEST_VID.playbackRate; return qr.TEST_VID.playbackRate=e/2+.1, e !==qr.TEST_VID.playbackRate
                }

                catch(e) {
                    return !1
                }
            }

            , qr.canOverrideAttributes=function() {
                try {
                    var e=function() {}

                    ; Object.defineProperty(document.createElement("video"), "src", {
                            get:e, set:e
                        }

                    ), Object.defineProperty(document.createElement("audio"), "src", {
                            get:e, set:e
                        }

                    ), Object.defineProperty(document.createElement("video"), "innerHTML", {
                            get:e, set:e
                        }

                    ), Object.defineProperty(document.createElement("audio"), "innerHTML", {
                            get:e, set:e
                        }

                    )
                }

                catch(e) {
                    return !1
                }

                return !0
            }

            , qr.supportsNativeTextTracks=function() {
                return G||W&&N
            }

            , qr.supportsNativeVideoTracks=function() {
                return !( !qr.TEST_VID|| !qr.TEST_VID.videoTracks)
            }

            , qr.supportsNativeAudioTracks=function() {
                return !( !qr.TEST_VID|| !qr.TEST_VID.audioTracks)
            }

            , qr.Events=["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach((function(e) {
                        var t=e[0], i=e[1]; Hr(qr.prototype, t, (function() {
                                    return qr[i]()
                                }

                            ),  !0)
                    }

                )), qr.prototype.featuresVolumeControl=qr.canControlVolume(), qr.prototype.movingMediaElementInDOM= !W, qr.prototype.featuresFullscreenResize= !0, qr.prototype.featuresProgressEvents= !0, qr.prototype.featuresTimeupdateEvents= !0, qr.prototype.featuresVideoFrameCallback= !( !qr.TEST_VID|| !qr.TEST_VID.requestVideoFrameCallback), qr.patchCanPlayType=function() {
                D>=4&& !M&& !N&&(Rr=qr.TEST_VID&&qr.TEST_VID.constructor.prototype.canPlayType, qr.TEST_VID.constructor.prototype.canPlayType=function(e) {
                        return e&&/^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e)?"maybe":Rr.call(this, e)
                    }

                )
            }

            , qr.unpatchCanPlayType=function() {
                var e=qr.TEST_VID.constructor.prototype.canPlayType; return Rr&&(qr.TEST_VID.constructor.prototype.canPlayType=Rr), e
            }

            , qr.patchCanPlayType(), qr.disposeMediaElement=function(e) {
                if(e) {
                    for(e.parentNode&&e.parentNode.removeChild(e); e.hasChildNodes(); )e.removeChild(e.firstChild); e.removeAttribute("src"), "function"==typeof e.load&&function() {
                        try {
                            e.load()
                        }

                        catch(e) {}
                    }

                    ()
                }
            }

            , qr.resetMediaElement=function(e) {
                if(e) {
                    for(var t=e.querySelectorAll("source"), i=t.length; i--; )e.removeChild(t[i]); e.removeAttribute("src"), "function"==typeof e.load&&function() {
                        try {
                            e.load()
                        }

                        catch(e) {}
                    }

                    ()
                }
            }

            , ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach((function(e) {
                        qr.prototype[e]=function() {
                            return this.el_[e]||this.el_.hasAttribute(e)
                        }
                    }

                )), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach((function(e) {
                        qr.prototype["set"+dt(e)]=function(t) {
                            this.el_[e]=t, t?this.el_.setAttribute(e, e):this.el_.removeAttribute(e)
                        }
                    }

                )), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach((function(e) {
                        qr.prototype[e]=function() {
                            return this.el_[e]
                        }
                    }

                )), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach((function(e) {
                        qr.prototype["set"+dt(e)]=function(t) {
                            this.el_[e]=t
                        }
                    }

                )), ["pause", "load", "play"].forEach((function(e) {
                        qr.prototype[e]=function() {
                            return this.el_[e]()
                        }
                    }

                )), Gi.withSourceHandlers(qr), qr.nativeSourceHandler= {}

            , qr.nativeSourceHandler.canPlayType=function(e) {
                try {
                    return qr.TEST_VID.canPlayType(e)
                }

                catch(e) {
                    return""
                }
            }

            , qr.nativeSourceHandler.canHandleSource=function(e, t) {
                if(e.type)return qr.nativeSourceHandler.canPlayType(e.type); if(e.src) {
                    var i=Xt(e.src); return qr.nativeSourceHandler.canPlayType("video/"+i)
                }

                return""
            }

            , qr.nativeSourceHandler.handleSource=function(e, t, i) {
                t.setSrc(e.src)
            }

            , qr.nativeSourceHandler.dispose=function() {}

            , qr.registerSourceHandler(qr.nativeSourceHandler), Gi.registerTech("Html5", qr); var Vr=["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"], Wr= {
                canplay:"CanPlay", canplaythrough:"CanPlayThrough", playing:"Playing", seeked:"Seeked"
            }

            , Gr=["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], zr= {}

            ; Gr.forEach((function(e) {
                        var t="x"===e.charAt(0)?"x-"+e.substring(1):e; zr[e]="vjs-layout-"+t
                    }

                )); var Xr= {
                tiny:210, xsmall:320, small:425, medium:768, large:1440, xlarge:2560, huge:1/0
            }

            , Kr=function(e) {
                function i(n, r, s) {
                    var o; if(n.id=n.id||r.id||"vjs_video_"+Me(), (r=_(i.getTagSettings(n), r)).initChildren= !1, r.createEl= !1, r.evented= !1, r.reportTouchActivity= !1,  !r.language)if("function"==typeof n.closest) {
                        var u=n.closest("[lang]"); u&&u.getAttribute&&(r.language=u.getAttribute("lang"))
                    }

                    else for(var l=n; l&&1===l.nodeType; ) {
                        if(oe(l).hasOwnProperty("lang")) {
                            r.language=l.getAttribute("lang"); break
                        }

                        l=l.parentNode
                    }

                    if((o=e.call(this, null, r, s)||this).boundDocumentFullscreenChange_=function(e) {
                            return o.documentFullscreenChange_(e)
                        }

                        , o.boundFullWindowOnEscKey_=function(e) {
                            return o.fullWindowOnEscKey(e)
                        }

                        , o.boundUpdateStyleEl_=function(e) {
                            return o.updateStyleEl_(e)
                        }

                        , o.boundApplyInitTime_=function(e) {
                            return o.applyInitTime_(e)
                        }

                        , o.boundUpdateCurrentBreakpoint_=function(e) {
                            return o.updateCurrentBreakpoint_(e)
                        }

                        , o.boundHandleTechClick_=function(e) {
                            return o.handleTechClick_(e)
                        }

                        , o.boundHandleTechDoubleClick_=function(e) {
                            return o.handleTechDoubleClick_(e)
                        }

                        , o.boundHandleTechTouchStart_=function(e) {
                            return o.handleTechTouchStart_(e)
                        }

                        , o.boundHandleTechTouchMove_=function(e) {
                            return o.handleTechTouchMove_(e)
                        }

                        , o.boundHandleTechTouchEnd_=function(e) {
                            return o.handleTechTouchEnd_(e)
                        }

                        , o.boundHandleTechTap_=function(e) {
                            return o.handleTechTap_(e)
                        }

                        , o.isFullscreen_= !1, o.log=h(o.id_), o.fsApi_=a, o.isPosterFromTech_= !1, o.queuedCallbacks_=[], o.isReady_= !1, o.hasStarted_= !1, o.userActive_= !1, o.debugEnabled_= !1, o.audioOnlyMode_= !1, o.audioPosterMode_= !1, o.audioOnlyCache_= {
                            playerHeight:null, hiddenChildren:[]
                        }

                        ,  !o.options_|| !o.options_.techOrder|| !o.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"); if(o.tag=n, o.tagAttributes=n&&oe(n), o.language(o.options_.language), r.languages) {
                        var c= {}

                        ; Object.getOwnPropertyNames(r.languages).forEach((function(e) {
                                    c[e.toLowerCase()]=r.languages[e]
                                }

                            )), o.languages_=c
                    }

                    else o.languages_=i.prototype.options_.languages; o.resetCache_(), o.poster_=r.poster||"", o.controls_= ! !r.controls, n.controls= !1, n.removeAttribute("controls"), o.changingSrc_= !1, o.playCallbacks_=[], o.playTerminatedQueue_=[], n.hasAttribute("autoplay")?o.autoplay( !0):o.autoplay(o.options_.autoplay), r.plugins&&Object.keys(r.plugins).forEach((function(e) {
                                if("function" !=typeof o[e])throw new Error('plugin "'+e+'" does not exist')
                            }

                        )), o.scrubbing_= !1, o.el_=o.createEl(), ot(_t(o), {
                            eventBusKey:"el_"
                        }

                    ), o.fsApi_.requestFullscreen&&(He(document, o.fsApi_.fullscreenchange, o.boundDocumentFullscreenChange_), o.on(o.fsApi_.fullscreenchange, o.boundDocumentFullscreenChange_)), o.fluid_&&o.on(["playerreset", "resize"], o.boundUpdateStyleEl_); var d=ht(o.options_); r.plugins&&Object.keys(r.plugins).forEach((function(e) {
                                o[e](r.plugins[e])
                            }

                        )), r.debug&&o.debug( !0), o.options_.playerOptions=d, o.middleware_=[], o.playbackRates(r.playbackRates), o.initChildren(), o.isAudio("audio"===n.nodeName.toLowerCase()), o.controls()?o.addClass("vjs-controls-enabled"):o.addClass("vjs-controls-disabled"), o.el_.setAttribute("role", "region"), o.isAudio()?o.el_.setAttribute("aria-label", o.localize("Audio Player")):o.el_.setAttribute("aria-label", o.localize("Video Player")), o.isAudio()&&o.addClass("vjs-audio"), o.flexNotSupported_()&&o.addClass("vjs-no-flex"), H&&o.addClass("vjs-touch-enabled"), W||o.addClass("vjs-workinghover"), i.players[o.id_]=_t(o); var p=t.split(".")[0]; return o.addClass("vjs-v"+p), o.userActive( !0), o.reportUserActivity(), o.one("play", (function(e) {
                                return o.listenForUserActivity_(e)
                            }

                        )), o.on("stageclick", (function(e) {
                                return o.handleStageClick_(e)
                            }

                        )), o.on("keydown", (function(e) {
                                return o.handleKeyDown(e)
                            }

                        )), o.on("languagechange", (function(e) {
                                return o.handleLanguagechange(e)
                            }

                        )), o.breakpoints(o.options_.breakpoints), o.responsive(o.options_.responsive), o.on("ready", (function() {
                                o.audioPosterMode(o.options_.audioPosterMode), o.audioOnlyMode(o.options_.audioOnlyMode)
                            }

                        )), o
                }

                bt(i, e); var r=i.prototype; return r.dispose=function() {
                    var t=this; this.trigger("dispose"), this.off("dispose"), qe(document, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), qe(document, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_=null), i.players[this.id_]=null, this.tag&&this.tag.player&&(this.tag.player=null), this.el_&&this.el_.player&&(this.el_.player=null), this.tech_&&(this.tech_.dispose(), this.isPosterFromTech_= !1, this.poster_=""), this.playerElIngest_&&(this.playerElIngest_=null), this.tag&&(this.tag=null), Xi[this.id()]=null, di.names.forEach((function(e) {
                                var i=di[e], n=t[i.getterName](); n&&n.off&&n.off()
                            }

                        )), e.prototype.dispose.call(this, {
                            restoreEl:this.options_.restoreEl
                        }

                    )
                }

                , r.createEl=function() {
                    var t, i=this.tag, n=this.playerElIngest_=i.parentNode&&i.parentNode.hasAttribute&&i.parentNode.hasAttribute("data-vjs-player"), r="video-js"===this.tag.tagName.toLowerCase(); n?t=this.el_=i.parentNode:r||(t=this.el_=e.prototype.createEl.call(this, "div")); var a=oe(i); if(r) {
                        for(t=this.el_=i, i=this.tag=document.createElement("video"); t.children.length; )i.appendChild(t.firstChild); ie(t, "video-js")||ne(t, "video-js"), t.appendChild(i), n=this.playerElIngest_=t, Object.keys(t).forEach((function(e) {
                                    try {
                                        i[e]=t[e]
                                    }

                                    catch(e) {}
                                }

                            ))
                    }

                    if(i.setAttribute("tabindex", "-1"), a.tabindex="-1", (B||N&&j)&&(i.setAttribute("role", "application"), a.role="application"), i.removeAttribute("width"), i.removeAttribute("height"), "width"in a&&delete a.width, "height"in a&&delete a.height, Object.getOwnPropertyNames(a).forEach((function(e) {
                                    r&&"class"===e||t.setAttribute(e, a[e]), r&&i.setAttribute(e, a[e])
                                }

                            )), i.playerId=i.id, i.id+="_html5_api", i.className="vjs-tech", i.player=t.player=this, this.addClass("vjs-paused"),  !0 !==window.VIDEOJS_NO_DYNAMIC_STYLE) {
                        this.styleEl_=Le("vjs-styles-dimensions"); var s=Se(".vjs-styles-defaults"), o=Se("head"); o.insertBefore(this.styleEl_, s?s.nextSibling:o.firstChild)
                    }

                    this.fill_= !1, this.fluid_= !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin||this.options_.crossorigin); for(var u=i.getElementsByTagName("a"), l=0; l<u.length; l++) {
                        var c=u.item(l); ne(c, "vjs-hidden"), c.setAttribute("hidden", "hidden")
                    }

                    return i.initNetworkState_=i.networkState, i.parentNode&& !n&&i.parentNode.insertBefore(t, i), te(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_=t, t
                }

                , r.crossOrigin=function(e) {
                    if( !e)return this.techGet_("crossOrigin"); "anonymous"===e||"use-credentials"===e?this.techCall_("setCrossOrigin", e):d.warn('crossOrigin must be "anonymous" or "use-credentials", given "'+e+'"')
                }

                , r.width=function(e) {
                    return this.dimension("width", e)
                }

                , r.height=function(e) {
                    return this.dimension("height", e)
                }

                , r.dimension=function(e, t) {
                    var i=e+"_"; if(void 0===t)return this[i]||0; if(""===t||"auto"===t)return this[i]=void 0, void this.updateStyleEl_(); var n=parseFloat(t); isNaN(n)?d.error('Improper value "'+t+'" supplied for for '+e):(this[i]=n, this.updateStyleEl_())
                }

                , r.fluid=function(e) {
                    var t, i, n=this; if(void 0===e)return ! !this.fluid_; this.fluid_= ! !e, Ze(this)&&this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), e?(this.addClass("vjs-fluid"), this.fill( !1), i=function() {
                            n.on(["playerreset", "resize"], n.boundUpdateStyleEl_)
                        }

                        , Ze(t=this)?i():(t.eventedCallbacks||(t.eventedCallbacks=[]), t.eventedCallbacks.push(i))):this.removeClass("vjs-fluid"), this.updateStyleEl_()
                }

                , r.fill=function(e) {
                    if(void 0===e)return ! !this.fill_; this.fill_= ! !e, e?(this.addClass("vjs-fill"), this.fluid( !1)):this.removeClass("vjs-fill")
                }

                , r.aspectRatio=function(e) {
                    if(void 0===e)return this.aspectRatio_; if( !/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9."); this.aspectRatio_=e, this.fluid( !0), this.updateStyleEl_()
                }

                , r.updateStyleEl_=function() {
                    if( !0 !==window.VIDEOJS_NO_DYNAMIC_STYLE) {
                        var e, t, i, n=(void 0 !==this.aspectRatio_&&"auto" !==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"), r=n[1]/n[0]; e=void 0 !==this.width_?this.width_:void 0 !==this.height_?this.height_/r:this.videoWidth()||300, t=void 0 !==this.height_?this.height_:e*r, i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions", this.addClass(i), De(this.styleEl_, "\n      ."+i+" {\n        width: "+e+"px;\n        height: "+t+"px;\n      }\n\n      ."+i+".vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: "+100*r+"%;\n      }\n    ")
                    }

                    else {
                        var a="number"==typeof this.width_?this.width_:this.options_.width, s="number"==typeof this.height_?this.height_:this.options_.height, o=this.tech_&&this.tech_.el(); o&&(a>=0&&(o.width=a), s>=0&&(o.height=s))
                    }
                }

                , r.loadTech_=function(e, t) {
                    var i=this; this.tech_&&this.unloadTech_(); var n=dt(e), r=e.charAt(0).toLowerCase()+e.slice(1); "Html5" !==n&&this.tag&&(Gi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player=null, this.tag=null), this.techName_=n, this.isReady_= !1; var a=this.autoplay(); ("string"==typeof this.autoplay()|| !0===this.autoplay()&&this.options_.normalizeAutoplay)&&(a= !1); var s= {
                        source:t, autoplay:a, nativeControlsForTouch:this.options_.nativeControlsForTouch, playerId:this.id(), techId:this.id()+"_"+r+"_api", playsinline:this.options_.playsinline, preload:this.options_.preload, loop:this.options_.loop, disablePictureInPicture:this.options_.disablePictureInPicture, muted:this.options_.muted, poster:this.poster(), language:this.language(), playerElIngest:this.playerElIngest_|| !1, "vtt.js":this.options_["vtt.js"], canOverridePoster: ! !this.options_.techCanOverridePoster, enableSourceset:this.options_.enableSourceset, Promise:this.options_.Promise
                    }

                    ; di.names.forEach((function(e) {
                                var t=di[e]; s[t.getterName]=i[t.privateName]
                            }

                        )), _(s, this.options_[n]), _(s, this.options_[r]), _(s, this.options_[e.toLowerCase()]), this.tag&&(s.tag=this.tag), t&&t.src===this.cache_.src&&this.cache_.currentTime>0&&(s.startTime=this.cache_.currentTime); var o, u, l=Gi.getTech(e); if( !l)throw new Error("No Tech named '"+n+"' exists! '"+n+"' should be registered using videojs.registerTech()'"); this.tech_=new l(s), this.tech_.ready(Ye(this, this.handleTechReady_),  !0), o=this.textTracksJson_||[], u=this.tech_, o.forEach((function(e) {
                                var t=u.addRemoteTextTrack(e).track;  !e.src&&e.cues&&e.cues.forEach((function(e) {
                                            return t.addCue(e)
                                        }

                                    ))
                            }

                        )), u.textTracks(), Vr.forEach((function(e) {
                                i.on(i.tech_, e, (function(t) {
                                            return i["handleTech"+dt(e)+"_"](t)
                                        }

                                    ))
                            }

                        )), Object.keys(Wr).forEach((function(e) {
                                i.on(i.tech_, e, (function(t) {
                                            0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push( {
                                                    callback:i["handleTech"+Wr[e]+"_"].bind(i), event:t
                                                }

                                            ):i["handleTech"+Wr[e]+"_"](t)
                                        }

                                    ))
                            }

                        )), this.on(this.tech_, "loadstart", (function(e) {
                                return i.handleTechLoadStart_(e)
                            }

                        )), this.on(this.tech_, "sourceset", (function(e) {
                                return i.handleTechSourceset_(e)
                            }

                        )), this.on(this.tech_, "waiting", (function(e) {
                                return i.handleTechWaiting_(e)
                            }

                        )), this.on(this.tech_, "ended", (function(e) {
                                return i.handleTechEnded_(e)
                            }

                        )), this.on(this.tech_, "seeking", (function(e) {
                                return i.handleTechSeeking_(e)
                            }

                        )), this.on(this.tech_, "play", (function(e) {
                                return i.handleTechPlay_(e)
                            }

                        )), this.on(this.tech_, "firstplay", (function(e) {
                                return i.handleTechFirstPlay_(e)
                            }

                        )), this.on(this.tech_, "pause", (function(e) {
                                return i.handleTechPause_(e)
                            }

                        )), this.on(this.tech_, "durationchange", (function(e) {
                                return i.handleTechDurationChange_(e)
                            }

                        )), this.on(this.tech_, "fullscreenchange", (function(e, t) {
                                return i.handleTechFullscreenChange_(e, t)
                            }

                        )), this.on(this.tech_, "fullscreenerror", (function(e, t) {
                                return i.handleTechFullscreenError_(e, t)
                            }

                        )), this.on(this.tech_, "enterpictureinpicture", (function(e) {
                                return i.handleTechEnterPictureInPicture_(e)
                            }

                        )), this.on(this.tech_, "leavepictureinpicture", (function(e) {
                                return i.handleTechLeavePictureInPicture_(e)
                            }

                        )), this.on(this.tech_, "error", (function(e) {
                                return i.handleTechError_(e)
                            }

                        )), this.on(this.tech_, "posterchange", (function(e) {
                                return i.handleTechPosterChange_(e)
                            }

                        )), this.on(this.tech_, "textdata", (function(e) {
                                return i.handleTechTextData_(e)
                            }

                        )), this.on(this.tech_, "ratechange", (function(e) {
                                return i.handleTechRateChange_(e)
                            }

                        )), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls()&& !this.usingNativeControls()&&this.addTechControlsListeners_(), this.tech_.el().parentNode===this.el()||"Html5"===n&&this.tag||te(this.tech_.el(), this.el()), this.tag&&(this.tag.player=null, this.tag=null)
                }

                , r.unloadTech_=function() {
                    var e, t, i, n=this; di.names.forEach((function(e) {
                                var t=di[e]; n[t.privateName]=n[t.getterName]()
                            }

                        )), this.textTracksJson_=(e=this.tech_, t=e.$$("track"), i=Array.prototype.map.call(t, (function(e) {
                                    return e.track
                                }

                            )), Array.prototype.map.call(t, (function(e) {
                                    var t=At(e.track); return e.src&&(t.src=e.src), t
                                }

                            )).concat(Array.prototype.filter.call(e.textTracks(), (function(e) {
                                        return-1===i.indexOf(e)
                                    }

                                )).map(At))), this.isReady_= !1, this.tech_.dispose(), this.tech_= !1, this.isPosterFromTech_&&(this.poster_="", this.trigger("posterchange")), this.isPosterFromTech_= !1
                }

                , r.tech=function(e) {
                    return void 0===e&&d.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_
                }

                , r.addTechControlsListeners_=function() {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_)
                }

                , r.removeTechControlsListeners_=function() {
                    this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_)
                }

                , r.handleTechReady_=function() {
                    this.triggerReady(), this.cache_.volume&&this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
                }

                , r.handleTechLoadStart_=function() {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused()?(this.hasStarted( !1), this.trigger("loadstart")):(this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_( !0===this.autoplay()&&this.options_.normalizeAutoplay?"play":this.autoplay())
                }

                , r.manualAutoplay_=function(e) {
                    var t=this; if(this.tech_&&"string"==typeof e) {
                        var i, n=function() {
                            var e=t.muted(); t.muted( !0); var i=function() {
                                t.muted(e)
                            }

                            ; t.playTerminatedQueue_.push(i); var n=t.play(); if(It(n))return n.catch((function(e) {
                                        throw i(), new Error("Rejection at manualAutoplay. Restoring muted value. "+(e||""))
                                    }

                                ))
                        }

                        ; if("any" !==e||this.muted()?i="muted" !==e||this.muted()?this.play():n():It(i=this.play())&&(i=i.catch(n)), It(i))return i.then((function() {
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

                , r.updateSourceCaches_=function(e) {
                    void 0===e&&(e=""); var t=e, i=""; "string" !=typeof t&&(t=e.src, i=e.type), this.cache_.source=this.cache_.source|| {}

                    , this.cache_.sources=this.cache_.sources||[], t&& !i&&(i=function(e, t) {
                            if( !t)return""; if(e.cache_.source.src===t&&e.cache_.source.type)return e.cache_.source.type; var i=e.cache_.sources.filter((function(e) {
                                        return e.src===t
                                    }

                                )); if(i.length)return i[0].type; for(var n=e.$$("source"), r=0; r<n.length; r++) {
                                var a=n[r]; if(a.type&&a.src&&a.src===t)return a.type
                            }

                            return rn(t)
                        }

                        (this, t)), this.cache_.source=ht( {}

                        , e, {
                            src:t, type:i
                        }

                    ); for(var n=this.cache_.sources.filter((function(e) {
                                    return e.src&&e.src===t
                                }

                            )), r=[], a=this.$$("source"), s=[], o=0; o<a.length; o++) {
                        var u=oe(a[o]); r.push(u), u.src&&u.src===t&&s.push(u.src)
                    }

                    s.length&& !n.length?this.cache_.sources=r:n.length||(this.cache_.sources=[this.cache_.source]), this.cache_.src=t
                }

                , r.handleTechSourceset_=function(e) {
                    var t=this; if( !this.changingSrc_) {
                        var i=function(e) {
                            return t.updateSourceCaches_(e)
                        }

                        , n=this.currentSource().src, r=e.src; n&& !/^blob:/.test(n)&&/^blob:/.test(r)&&( !this.lastSource_||this.lastSource_.tech !==r&&this.lastSource_.player !==n)&&(i=function() {}

                        ), i(r), e.src||this.tech_.any(["sourceset", "loadstart"], (function(e) {
                                    if("sourceset" !==e.type) {
                                        var i=t.techGet("currentSrc"); t.lastSource_.tech=i, t.updateSourceCaches_(i)
                                    }
                                }

                            ))
                    }

                    this.lastSource_= {
                        player:this.currentSource().src, tech:e.src
                    }

                    , this.trigger( {
                            src:e.src, type:"sourceset"
                        }

                    )
                }

                , r.hasStarted=function(e) {
                    if(void 0===e)return this.hasStarted_; e !==this.hasStarted_&&(this.hasStarted_=e, this.hasStarted_?(this.addClass("vjs-has-started"), this.trigger("firstplay")):this.removeClass("vjs-has-started"))
                }

                , r.handleTechPlay_=function() {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted( !0), this.trigger("play")
                }

                , r.handleTechRateChange_=function() {
                    this.tech_.playbackRate()>0&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach((function(e) {
                                    return e.callback(e.event)
                                }

                            )), this.queuedCallbacks_=[]), this.cache_.lastPlaybackRate=this.tech_.playbackRate(), this.trigger("ratechange")
                }

                , r.handleTechWaiting_=function() {
                    var e=this; this.addClass("vjs-waiting"), this.trigger("waiting"); var t=this.currentTime(); this.on("timeupdate", (function i() {
                                t !==e.currentTime()&&(e.removeClass("vjs-waiting"), e.off("timeupdate", i))
                            }

                        ))
                }

                , r.handleTechCanPlay_=function() {
                    this.removeClass("vjs-waiting"), this.trigger("canplay")
                }

                , r.handleTechCanPlayThrough_=function() {
                    this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                }

                , r.handleTechPlaying_=function() {
                    this.removeClass("vjs-waiting"), this.trigger("playing")
                }

                , r.handleTechSeeking_=function() {
                    this.addClass("vjs-seeking"), this.trigger("seeking")
                }

                , r.handleTechSeeked_=function() {
                    this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked")
                }

                , r.handleTechFirstPlay_=function() {
                    this.options_.starttime&&(d.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                }

                , r.handleTechPause_=function() {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                }

                , r.handleTechEnded_=function() {
                    this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop?(this.currentTime(0), this.play()):this.paused()||this.pause(), this.trigger("ended")
                }

                , r.handleTechDurationChange_=function() {
                    this.duration(this.techGet_("duration"))
                }

                , r.handleTechClick_=function(e) {
                    this.controls_&&(void 0 !==this.options_&&void 0 !==this.options_.userActions&&void 0 !==this.options_.userActions.click&& !1===this.options_.userActions.click||(void 0 !==this.options_&&void 0 !==this.options_.userActions&&"function"==typeof this.options_.userActions.click?this.options_.userActions.click.call(this, e):this.paused()?xt(this.play()):this.pause()))
                }

                , r.handleTechDoubleClick_=function(e) {
                    this.controls_&&(Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (function(t) {
                                    return t.contains(e.target)
                                }

                            ))||void 0 !==this.options_&&void 0 !==this.options_.userActions&&void 0 !==this.options_.userActions.doubleClick&& !1===this.options_.userActions.doubleClick||(void 0 !==this.options_&&void 0 !==this.options_.userActions&&"function"==typeof this.options_.userActions.doubleClick?this.options_.userActions.doubleClick.call(this, e):this.isFullscreen()?this.exitFullscreen():this.requestFullscreen()))
                }

                , r.handleTechTap_=function() {
                    this.userActive( !this.userActive())
                }

                , r.handleTechTouchStart_=function() {
                    this.userWasActive=this.userActive()
                }

                , r.handleTechTouchMove_=function() {
                    this.userWasActive&&this.reportUserActivity()
                }

                , r.handleTechTouchEnd_=function(e) {
                    e.cancelable&&e.preventDefault()
                }

                , r.handleStageClick_=function() {
                    this.reportUserActivity()
                }

                , r.toggleFullscreenClass_=function() {
                    this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")
                }

                , r.documentFullscreenChange_=function(e) {
                    var t=e.target.player; if( !t||t===this) {
                        var i=this.el(), n=document[this.fsApi_.fullscreenElement]===i;  !n&&i.matches?n=i.matches(":"+this.fsApi_.fullscreen): !n&&i.msMatchesSelector&&(n=i.msMatchesSelector(":"+this.fsApi_.fullscreen)), this.isFullscreen(n)
                    }
                }

                , r.handleTechFullscreenChange_=function(e, t) {
                    var i=this; t&&(t.nativeIOSFullscreen&&(this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", (function() {
                                        i.removeClass("vjs-ios-native-fs")
                                    }

                                ))), this.isFullscreen(t.isFullscreen))
                }

                , r.handleTechFullscreenError_=function(e, t) {
                    this.trigger("fullscreenerror", t)
                }

                , r.togglePictureInPictureClass_=function() {
                    this.isInPictureInPicture()?this.addClass("vjs-picture-in-picture"):this.removeClass("vjs-picture-in-picture")
                }

                , r.handleTechEnterPictureInPicture_=function(e) {
                    this.isInPictureInPicture( !0)
                }

                , r.handleTechLeavePictureInPicture_=function(e) {
                    this.isInPictureInPicture( !1)
                }

                , r.handleTechError_=function() {
                    var e=this.tech_.error(); this.error(e)
                }

                , r.handleTechTextData_=function() {
                    var e=null; arguments.length>1&&(e=arguments[1]), this.trigger("textdata", e)
                }

                , r.getCache=function() {
                    return this.cache_
                }

                , r.resetCache_=function() {
                    this.cache_= {
                        currentTime:0, initTime:0, inactivityTimeout:this.options_.inactivityTimeout, duration:NaN, lastVolume:1, lastPlaybackRate:this.defaultPlaybackRate(), media:null, src:"", source: {}

                        , sources:[], playbackRates:[], volume:1
                    }
                }

                , r.techCall_=function(e, t) {
                    this.ready((function() {
                                if(e in Ji)return function(e, t, i, n) {
                                    return t[i](e.reduce(en(i), n))
                                }

                                (this.middleware_, this.tech_, e, t); if(e in Zi)return Qi(this.middleware_, this.tech_, e, t); try {
                                    this.tech_&&this.tech_[e](t)
                                }

                                catch(e) {
                                    throw d(e), e
                                }
                            }

                        ),  !0)
                }

                , r.techGet_=function(e) {
                    if(this.tech_&&this.tech_.isReady_) {
                        if(e in $i)return function(e, t, i) {
                            return e.reduceRight(en(i), t[i]())
                        }

                        (this.middleware_, this.tech_, e); if(e in Zi)return Qi(this.middleware_, this.tech_, e); try {
                            return this.tech_[e]()
                        }

                        catch(t) {
                            if(void 0===this.tech_[e])throw d("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.", t), t; if("TypeError"===t.name)throw d("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.", t), this.tech_.isReady_= !1, t; throw d(t), t
                        }
                    }
                }

                , r.play=function() {
                    var e=this, t=this.options_.Promise||window.Promise; return t?new t((function(t) {
                                e.play_(t)
                            }

                        )):this.play_()
                }

                , r.play_=function(e) {
                    var t=this; void 0===e&&(e=xt), this.playCallbacks_.push(e); var i=Boolean( !this.changingSrc_&&(this.src()||this.currentSrc())); if(this.waitToPlay_&&(this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_=null),  !this.isReady_|| !i)return this.waitToPlay_=function(e) {
                        t.play_()
                    }

                    , this.one(["ready", "loadstart"], this.waitToPlay_), void(i|| !G&& !W||this.load()); var n=this.techGet_("play"); null===n?this.runPlayTerminatedQueue_():this.runPlayCallbacks_(n)
                }

                , r.runPlayTerminatedQueue_=function() {
                    var e=this.playTerminatedQueue_.slice(0); this.playTerminatedQueue_=[], e.forEach((function(e) {
                                e()
                            }

                        ))
                }

                , r.runPlayCallbacks_=function(e) {
                    var t=this.playCallbacks_.slice(0); this.playCallbacks_=[], this.playTerminatedQueue_=[], t.forEach((function(t) {
                                t(e)
                            }

                        ))
                }

                , r.pause=function() {
                    this.techCall_("pause")
                }

                , r.paused=function() {
                    return !1 !==this.techGet_("paused")
                }

                , r.played=function() {
                    return this.techGet_("played")||St(0, 0)
                }

                , r.scrubbing=function(e) {
                    if(void 0===e)return this.scrubbing_; this.scrubbing_= ! !e, this.techCall_("setScrubbing", this.scrubbing_), e?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")
                }

                , r.currentTime=function(e) {
                    return void 0 !==e?(e<0&&(e=0), this.isReady_&& !this.changingSrc_&&this.tech_&&this.tech_.isReady_?(this.techCall_("setCurrentTime", e), void(this.cache_.initTime=0)):(this.cache_.initTime=e, this.off("canplay", this.boundApplyInitTime_), void this.one("canplay", this.boundApplyInitTime_))):(this.cache_.currentTime=this.techGet_("currentTime")||0, this.cache_.currentTime)
                }

                , r.applyInitTime_=function() {
                    this.currentTime(this.cache_.initTime)
                }

                , r.duration=function(e) {
                    if(void 0===e)return void 0 !==this.cache_.duration?this.cache_.duration:NaN; (e=parseFloat(e))<0&&(e=1/0), e !==this.cache_.duration&&(this.cache_.duration=e, e===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"), isNaN(e)||this.trigger("durationchange"))
                }

                , r.remainingTime=function() {
                    return this.duration()-this.currentTime()
                }

                , r.remainingTimeDisplay=function() {
                    return Math.floor(this.duration())-Math.floor(this.currentTime())
                }

                , r.buffered=function() {
                    var e=this.techGet_("buffered"); return e&&e.length||(e=St(0, 0)), e
                }

                , r.bufferedPercent=function() {
                    return Et(this.buffered(), this.duration())
                }

                , r.bufferedEnd=function() {
                    var e=this.buffered(), t=this.duration(), i=e.end(e.length-1); return i>t&&(i=t), i
                }

                , r.volume=function(e) {
                    var t; return void 0 !==e?(t=Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume=t, this.techCall_("setVolume", t), void(t>0&&this.lastVolume_(t))):(t=parseFloat(this.techGet_("volume")), isNaN(t)?1:t)
                }

                , r.muted=function(e) {
                    if(void 0===e)return this.techGet_("muted")|| !1; this.techCall_("setMuted", e)
                }

                , r.defaultMuted=function(e) {
                    return void 0 !==e?this.techCall_("setDefaultMuted", e):this.techGet_("defaultMuted")|| !1
                }

                , r.lastVolume_=function(e) {
                    if(void 0===e||0===e)return this.cache_.lastVolume; this.cache_.lastVolume=e
                }

                , r.supportsFullScreen=function() {
                    return this.techGet_("supportsFullScreen")|| !1
                }

                , r.isFullscreen=function(e) {
                    if(void 0 !==e) {
                        var t=this.isFullscreen_; return this.isFullscreen_=Boolean(e), this.isFullscreen_ !==t&&this.fsApi_.prefixed&&this.trigger("fullscreenchange"), void this.toggleFullscreenClass_()
                    }

                    return this.isFullscreen_
                }

                , r.requestFullscreen=function(e) {
                    var t=this.options_.Promise||window.Promise; if(t) {
                        var i=this; return new t((function(t, n) {
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

                , r.requestFullscreenHelper_=function(e) {
                    var t, i=this; if(this.fsApi_.prefixed||(t=this.options_.fullscreen&&this.options_.fullscreen.options|| {}

                            , void 0 !==e&&(t=e)), this.fsApi_.requestFullscreen) {
                        var n=this.el_[this.fsApi_.requestFullscreen](t); return n&&n.then((function() {
                                    return i.isFullscreen( !0)
                                }

                            ), (function() {
                                    return i.isFullscreen( !1)
                                }

                            )), n
                    }

                    this.tech_.supportsFullScreen()&&1== !this.options_.preferFullWindow?this.techCall_("enterFullScreen"):this.enterFullWindow()
                }

                , r.exitFullscreen=function() {
                    var e=this.options_.Promise||window.Promise; if(e) {
                        var t=this; return new e((function(e, i) {
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

                , r.exitFullscreenHelper_=function() {
                    var e=this; if(this.fsApi_.requestFullscreen) {
                        var t=document[this.fsApi_.exitFullscreen](); return t&&xt(t.then((function() {
                                        return e.isFullscreen( !1)
                                    }

                                ))), t
                    }

                    this.tech_.supportsFullScreen()&&1== !this.options_.preferFullWindow?this.techCall_("exitFullScreen"):this.exitFullWindow()
                }

                , r.enterFullWindow=function() {
                    this.isFullscreen( !0), this.isFullWindow= !0, this.docOrigOverflow=document.documentElement.style.overflow, He(document, "keydown", this.boundFullWindowOnEscKey_), document.documentElement.style.overflow="hidden", ne(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
                }

                , r.fullWindowOnEscKey=function(e) {
                    vt.isEventKey(e, "Esc")&& !0===this.isFullscreen()&&(this.isFullWindow?this.exitFullWindow():this.exitFullscreen())
                }

                , r.exitFullWindow=function() {
                    this.isFullscreen( !1), this.isFullWindow= !1, qe(document, "keydown", this.boundFullWindowOnEscKey_), document.documentElement.style.overflow=this.docOrigOverflow, re(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
                }

                , r.disablePictureInPicture=function(e) {
                    if(void 0===e)return this.techGet_("disablePictureInPicture"); this.techCall_("setDisablePictureInPicture", e), this.options_.disablePictureInPicture=e, this.trigger("disablepictureinpicturechanged")
                }

                , r.isInPictureInPicture=function(e) {
                    return void 0 !==e?(this.isInPictureInPicture_= ! !e, void this.togglePictureInPictureClass_()): ! !this.isInPictureInPicture_
                }

                , r.requestPictureInPicture=function() {
                    if("pictureInPictureEnabled"in document&& !1===this.disablePictureInPicture())return this.techGet_("requestPictureInPicture")
                }

                , r.exitPictureInPicture=function() {
                    if("pictureInPictureEnabled"in document)return document.exitPictureInPicture()
                }

                , r.handleKeyDown=function(e) {
                    var t, i, n=this.options_.userActions; n&&n.hotkeys&&(t=this.el_.ownerDocument.activeElement, i=t.tagName.toLowerCase(), t.isContentEditable||("input"===i?-1===["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(t.type):-1 !==["textarea"].indexOf(i))||("function"==typeof n.hotkeys?n.hotkeys.call(this, e):this.handleHotkeys(e)))
                }

                , r.handleHotkeys=function(e) {
                    var t=this.options_.userActions?this.options_.userActions.hotkeys: {}

                    , i=t.fullscreenKey, n=void 0===i?function(e) {
                        return vt.isEventKey(e, "f")
                    }

                    :i, r=t.muteKey, a=void 0===r?function(e) {
                        return vt.isEventKey(e, "m")
                    }

                    :r, s=t.playPauseKey, o=void 0===s?function(e) {
                        return vt.isEventKey(e, "k")||vt.isEventKey(e, "Space")
                    }

                    :s; if(n.call(this, e)) {
                        e.preventDefault(), e.stopPropagation(); var u=yt.getComponent("FullscreenToggle");  !1 !==document[this.fsApi_.fullscreenEnabled]&&u.prototype.handleClick.call(this, e)
                    }

                    else a.call(this, e)?(e.preventDefault(), e.stopPropagation(), yt.getComponent("MuteToggle").prototype.handleClick.call(this, e)):o.call(this, e)&&(e.preventDefault(), e.stopPropagation(), yt.getComponent("PlayToggle").prototype.handleClick.call(this, e))
                }

                , r.canPlayType=function(e) {
                    for(var t, i=0, n=this.options_.techOrder; i<n.length; i++) {
                        var r=n[i], a=Gi.getTech(r); if(a||(a=yt.getComponent(r)), a) {
                            if(a.isSupported()&&(t=a.canPlayType(e)))return t
                        }

                        else d.error('The "'+r+'" tech is undefined. Skipped browser support check for that tech.')
                    }

                    return""
                }

                , r.selectSource=function(e) {
                    var t, i=this, n=this.options_.techOrder.map((function(e) {
                                return[e, Gi.getTech(e)]
                            }

                        )).filter((function(e) {
                                var t=e[0], i=e[1]; return i?i.isSupported():(d.error('The "'+t+'" tech is undefined. Skipped browser support check for that tech.'),  !1)
                            }

                        )), r=function(e, t, i) {
                        var n; return e.some((function(e) {
                                    return t.some((function(t) {
                                                if(n=i(e, t))return !0
                                            }

                                        ))
                                }

                            )), n
                    }

                    , a=function(e, t) {
                        var n=e[0]; if(e[1].canPlaySource(t, i.options_[n.toLowerCase()]))return {
                            source:t, tech:n
                        }
                    }

                    ; return(this.options_.sourceOrder?r(e, n, (t=a, function(e, i) {
                                    return t(i, e)
                                }

                            )):r(n, e, a))|| !1
                }

                , r.handleSrc_=function(e, t) {
                    var i=this; if(void 0===e)return this.cache_.src||""; this.resetRetryOnError_&&this.resetRetryOnError_(); var n=an(e); if(n.length) {
                        if(this.changingSrc_= !0, t||(this.cache_.sources=n), this.updateSourceCaches_(n[0]), Yi(this, n[0], (function(e, r) {
                                        var a, s; if(i.middleware_=r, t||(i.cache_.sources=n), i.updateSourceCaches_(e), i.src_(e))return n.length>1?i.handleSrc_(n.slice(1)):(i.changingSrc_= !1, i.setTimeout((function() {
                                                        this.error( {
                                                                code:4, message:this.options_.notSupportedMessage
                                                            }

                                                        )
                                                    }

                                                ), 0), void i.triggerReady()); a=r, s=i.tech_, a.forEach((function(e) {
                                                    return e.setTech&&e.setTech(s)
                                                }

                                            ))
                                    }

                                )), this.options_.retryOnError&&n.length>1) {
                            var r=function() {
                                i.error(null), i.handleSrc_(n.slice(1),  !0)
                            }

                            , a=function() {
                                i.off("error", r)
                            }

                            ; this.one("error", r), this.one("playing", a), this.resetRetryOnError_=function() {
                                i.off("error", r), i.off("playing", a)
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

                , r.src=function(e) {
                    return this.handleSrc_(e,  !1)
                }

                , r.src_=function(e) {
                    var t, i, n=this, r=this.selectSource([e]); return !r||(t=r.tech, i=this.techName_, dt(t) !==dt(i)?(this.changingSrc_= !0, this.loadTech_(r.tech, r.source), this.tech_.ready((function() {
                                        n.changingSrc_= !1
                                    }

                                )),  !1):(this.ready((function() {
                                        this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource", e):this.techCall_("src", e.src), this.changingSrc_= !1
                                    }

                                ),  !0),  !1))
                }

                , r.load=function() {
                    this.techCall_("load")
                }

                , r.reset=function() {
                    var e=this, t=this.options_.Promise||window.Promise; this.paused()|| !t?this.doReset_():xt(this.play().then((function() {
                                    return e.doReset_()
                                }

                            )))
                }

                , r.doReset_=function() {
                    this.tech_&&this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), Ze(this)&&this.trigger("playerreset")
                }

                , r.resetControlBarUI_=function() {
                    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
                }

                , r.resetProgressBar_=function() {
                    this.currentTime(0); var e=this.controlBar|| {}

                    , t=e.durationDisplay, i=e.remainingTimeDisplay; t&&t.updateContent(), i&&i.updateContent()
                }

                , r.resetPlaybackRate_=function() {
                    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
                }

                , r.resetVolumeBar_=function() {
                    this.volume(1), this.trigger("volumechange")
                }

                , r.currentSources=function() {
                    var e=this.currentSource(), t=[]; return 0 !==Object.keys(e).length&&t.push(e), this.cache_.sources||t
                }

                , r.currentSource=function() {
                    return this.cache_.source|| {}
                }

                , r.currentSrc=function() {
                    return this.currentSource()&&this.currentSource().src||""
                }

                , r.currentType=function() {
                    return this.currentSource()&&this.currentSource().type||""
                }

                , r.preload=function(e) {
                    return void 0 !==e?(this.techCall_("setPreload", e), void(this.options_.preload=e)):this.techGet_("preload")
                }

                , r.autoplay=function(e) {
                    if(void 0===e)return this.options_.autoplay|| !1; var t; "string"==typeof e&&/(any|play|muted)/.test(e)|| !0===e&&this.options_.normalizeAutoplay?(this.options_.autoplay=e, this.manualAutoplay_("string"==typeof e?e:"play"), t= !1):this.options_.autoplay= ! !e, t=void 0===t?this.options_.autoplay:t, this.tech_&&this.techCall_("setAutoplay", t)
                }

                , r.playsinline=function(e) {
                    return void 0 !==e?(this.techCall_("setPlaysinline", e), this.options_.playsinline=e, this):this.techGet_("playsinline")
                }

                , r.loop=function(e) {
                    return void 0 !==e?(this.techCall_("setLoop", e), void(this.options_.loop=e)):this.techGet_("loop")
                }

                , r.poster=function(e) {
                    if(void 0===e)return this.poster_; e||(e=""), e !==this.poster_&&(this.poster_=e, this.techCall_("setPoster", e), this.isPosterFromTech_= !1, this.trigger("posterchange"))
                }

                , r.handleTechPosterChange_=function() {
                    if(( !this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster) {
                        var e=this.tech_.poster()||""; e !==this.poster_&&(this.poster_=e, this.isPosterFromTech_= !0, this.trigger("posterchange"))
                    }
                }

                , r.controls=function(e) {
                    if(void 0===e)return ! !this.controls_; e= ! !e, this.controls_ !==e&&(this.controls_=e, this.usingNativeControls()&&this.techCall_("setControls", e), this.controls_?(this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls()||this.removeTechControlsListeners_()))
                }

                , r.usingNativeControls=function(e) {
                    if(void 0===e)return ! !this.usingNativeControls_; e= ! !e, this.usingNativeControls_ !==e&&(this.usingNativeControls_=e, this.usingNativeControls_?(this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                }

                , r.error=function(e) {
                    var t=this; if(void 0===e)return this.error_||null; if(n("beforeerror").forEach((function(i) {
                                    var n=i(t, e); b(n)&& !Array.isArray(n)||"string"==typeof n||"number"==typeof n||null===n?e=n:t.log.error("please return a value that MediaError expects in beforeerror hooks")
                                }

                            )), this.options_.suppressNotSupportedError&&e&&4===e.code) {
                        var i=function() {
                            this.error(e)
                        }

                        ; return this.options_.suppressNotSupportedError= !1, this.any(["click", "touchstart"], i), void this.one("loadstart", (function() {
                                    this.off(["click", "touchstart"], i)
                                }

                            ))
                    }

                    if(null===e)return this.error_=e, this.removeClass("vjs-error"), void(this.errorDisplay&&this.errorDisplay.close()); this.error_=new kt(e), this.addClass("vjs-error"), d.error("(CODE:"+this.error_.code+" "+kt.errorTypes[this.error_.code]+")", this.error_.message, this.error_), this.trigger("error"), n("error").forEach((function(e) {
                                return e(t, t.error_)
                            }

                        ))
                }

                , r.reportUserActivity=function(e) {
                    this.userActivity_= !0
                }

                , r.userActive=function(e) {
                    if(void 0===e)return this.userActive_; if((e= ! !e) !==this.userActive_) {
                        if(this.userActive_=e, this.userActive_)return this.userActivity_= !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive"); this.tech_&&this.tech_.one("mousemove", (function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                }

                            )), this.userActivity_= !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                    }
                }

                , r.listenForUserActivity_=function() {
                    var e, t, i, n=Ye(this, this.reportUserActivity), r=function(t) {
                        n(), this.clearInterval(e)
                    }

                    ; this.on("mousedown", (function() {
                                n(), this.clearInterval(e), e=this.setInterval(n, 250)
                            }

                        )), this.on("mousemove", (function(e) {
                                e.screenX===t&&e.screenY===i||(t=e.screenX, i=e.screenY, n())
                            }

                        )), this.on("mouseup", r), this.on("mouseleave", r); var a, s=this.getChild("controlBar");  !s||W||L||(s.on("mouseenter", (function(e) {
                                    0 !==this.player().options_.inactivityTimeout&&(this.player().cache_.inactivityTimeout=this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout=0
                                }

                            )), s.on("mouseleave", (function(e) {
                                    this.player().options_.inactivityTimeout=this.player().cache_.inactivityTimeout
                                }

                            ))), this.on("keydown", n), this.on("keyup", n), this.setInterval((function() {
                                if(this.userActivity_) {
                                    this.userActivity_= !1, this.userActive( !0), this.clearTimeout(a); var e=this.options_.inactivityTimeout; e<=0||(a=this.setTimeout((function() {
                                                    this.userActivity_||this.userActive( !1)
                                                }

                                            ), e))
                                }
                            }

                        ), 250)
                }

                , r.playbackRate=function(e) {
                    if(void 0===e)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1; this.techCall_("setPlaybackRate", e)
                }

                , r.defaultPlaybackRate=function(e) {
                    return void 0 !==e?this.techCall_("setDefaultPlaybackRate", e):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1
                }

                , r.isAudio=function(e) {
                    if(void 0===e)return ! !this.isAudio_; this.isAudio_= ! !e
                }

                , r.enableAudioOnlyUI_=function() {
                    var e=this; this.addClass("vjs-audio-only-mode"); var t=this.children(), i=this.getChild("ControlBar"), n=i&&i.currentHeight(); t.forEach((function(t) {
                                t !==i&&t.el_&& !t.hasClass("vjs-hidden")&&(t.hide(), e.audioOnlyCache_.hiddenChildren.push(t))
                            }

                        )), this.audioOnlyCache_.playerHeight=this.currentHeight(), this.height(n), this.trigger("audioonlymodechange")
                }

                , r.disableAudioOnlyUI_=function() {
                    this.removeClass("vjs-audio-only-mode"), this.audioOnlyCache_.hiddenChildren.forEach((function(e) {
                                return e.show()
                            }

                        )), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange")
                }

                , r.audioOnlyMode=function(e) {
                    var t=this; if("boolean" !=typeof e||e===this.audioOnlyMode_)return this.audioOnlyMode_; this.audioOnlyMode_=e; var i=this.options_.Promise||window.Promise; if(i) {
                        if(e) {
                            var n=[]; return this.isInPictureInPicture()&&n.push(this.exitPictureInPicture()), this.isFullscreen()&&n.push(this.exitFullscreen()), this.audioPosterMode()&&n.push(this.audioPosterMode( !1)), i.all(n).then((function() {
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

                , r.enablePosterModeUI_=function() {
                    (this.tech_&&this.tech_).hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
                }

                , r.disablePosterModeUI_=function() {
                    (this.tech_&&this.tech_).show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
                }

                , r.audioPosterMode=function(e) {
                    var t=this; if("boolean" !=typeof e||e===this.audioPosterMode_)return this.audioPosterMode_; this.audioPosterMode_=e; var i=this.options_.Promise||window.Promise; return i?e?this.audioOnlyMode()?this.audioOnlyMode( !1).then((function() {
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

                , r.addTextTrack=function(e, t, i) {
                    if(this.tech_)return this.tech_.addTextTrack(e, t, i)
                }

                , r.addRemoteTextTrack=function(e, t) {
                    if(this.tech_)return this.tech_.addRemoteTextTrack(e, t)
                }

                , r.removeRemoteTextTrack=function(e) {
                    void 0===e&&(e= {}

                    ); var t=e.track; if(t||(t=e), this.tech_)return this.tech_.removeRemoteTextTrack(t)
                }

                , r.getVideoPlaybackQuality=function() {
                    return this.techGet_("getVideoPlaybackQuality")
                }

                , r.videoWidth=function() {
                    return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0
                }

                , r.videoHeight=function() {
                    return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0
                }

                , r.language=function(e) {
                    if(void 0===e)return this.language_; this.language_ !==String(e).toLowerCase()&&(this.language_=String(e).toLowerCase(), Ze(this)&&this.trigger("languagechange"))
                }

                , r.languages=function() {
                    return ht(i.prototype.options_.languages, this.languages_)
                }

                , r.toJSON=function() {
                    var e=ht(this.options_), t=e.tracks; e.tracks=[]; for(var i=0; i<t.length; i++) {
                        var n=t[i]; (n=ht(n)).player=void 0, e.tracks[i]=n
                    }

                    return e
                }

                , r.createModal=function(e, t) {
                    var i=this; (t=t|| {}

                    ).content=e||""; var n=new Pt(this, t); return this.addChild(n), n.on("dispose", (function() {
                                i.removeChild(n)
                            }

                        )), n.open(), n
                }

                , r.updateCurrentBreakpoint_=function() {
                    if(this.responsive())for(var e=this.currentBreakpoint(), t=this.currentWidth(), i=0; i<Gr.length; i++) {
                        var n=Gr[i]; if(t<=this.breakpoints_[n]) {
                            if(e===n)return; e&&this.removeClass(zr[e]), this.addClass(zr[n]), this.breakpoint_=n; break
                        }
                    }
                }

                , r.removeCurrentBreakpoint_=function() {
                    var e=this.currentBreakpointClass(); this.breakpoint_="", e&&this.removeClass(e)
                }

                , r.breakpoints=function(e) {
                    return void 0===e||(this.breakpoint_="", this.breakpoints_=_( {}

                            , Xr, e), this.updateCurrentBreakpoint_()), _(this.breakpoints_)
                }

                , r.responsive=function(e) {
                    return void 0===e?this.responsive_:(e=Boolean(e)) !==this.responsive_?(this.responsive_=e, e?(this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()):(this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e):void 0
                }

                , r.currentBreakpoint=function() {
                    return this.breakpoint_
                }

                , r.currentBreakpointClass=function() {
                    return zr[this.breakpoint_]||""
                }

                , r.loadMedia=function(e, t) {
                    var i=this; if(e&&"object"==typeof e) {
                        this.reset(), this.cache_.media=ht(e); var n=this.cache_.media, r=n.artwork, a=n.poster, s=n.src, o=n.textTracks;  !r&&a&&(this.cache_.media.artwork=[ {
                                src:a, type:rn(a)
                            }

                            ]), s&&this.src(s), a&&this.poster(a), Array.isArray(o)&&o.forEach((function(e) {
                                    return i.addRemoteTextTrack(e,  !1)
                                }

                            )), this.ready(t)
                    }
                }

                , r.getMedia=function() {
                    if( !this.cache_.media) {
                        var e=this.poster(), t= {
                            src:this.currentSources(), textTracks:Array.prototype.map.call(this.remoteTextTracks(), (function(e) {
                                        return {
                                            kind:e.kind, label:e.label, language:e.language, src:e.src
                                        }
                                    }

                                ))
                        }

                        ; return e&&(t.poster=e, t.artwork=[ {
                                src:t.poster, type:rn(t.poster)
                            }

                            ]), t
                    }

                    return ht(this.cache_.media)
                }

                , i.getTagSettings=function(e) {
                    var t= {
                        sources:[], tracks:[]
                    }

                    , i=oe(e), n=i["data-setup"]; if(ie(e, "vjs-fill")&&(i.fill= !0), ie(e, "vjs-fluid")&&(i.fluid= !0), null !==n) {
                        var r=function(e, t) {
                            var i, n=null; try {
                                i=JSON.parse(e, t)
                            }

                            catch(e) {
                                n=e
                            }

                            return[n, i]
                        }

                        (n||"{}"), a=r[0], s=r[1]; a&&d.error(a), _(i, s)
                    }

                    if(_(t, i), e.hasChildNodes())for(var o=e.childNodes, u=0, l=o.length; u<l; u++) {
                        var c=o[u], h=c.nodeName.toLowerCase(); "source"===h?t.sources.push(oe(c)):"track"===h&&t.tracks.push(oe(c))
                    }

                    return t
                }

                , r.flexNotSupported_=function() {
                    var e=document.createElement("i"); return !("flexBasis"in e.style||"webkitFlexBasis"in e.style||"mozFlexBasis"in e.style||"msFlexBasis"in e.style||"msFlexOrder"in e.style)
                }

                , r.debug=function(e) {
                    if(void 0===e)return this.debugEnabled_; e?(this.trigger("debugon"), this.previousLogLevel_=this.log.level, this.log.level("debug"), this.debugEnabled_= !0):(this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_=void 0, this.debugEnabled_= !1)
                }

                , r.playbackRates=function(e) {
                    if(void 0===e)return this.cache_.playbackRates; Array.isArray(e)&&e.every((function(e) {
                                return"number"==typeof e
                            }

                        ))&&(this.cache_.playbackRates=e, this.trigger("playbackrateschange"))
                }

                , i
            }

            (yt); di.names.forEach((function(e) {
                        var t=di[e]; Kr.prototype[t.getterName]=function() {
                            return this.tech_?this.tech_[t.getterName]():(this[t.privateName]=this[t.privateName]||new t.ListClass, this[t.privateName])
                        }
                    }

                )), Kr.prototype.crossorigin=Kr.prototype.crossOrigin, Kr.players= {}

            ; var Yr=window.navigator; Kr.prototype.options_= {
                techOrder:Gi.defaultTechOrder_, html5: {}

                , inactivityTimeout:2e3, playbackRates:[], liveui: !1, children:["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"], language:Yr&&(Yr.languages&&Yr.languages[0]||Yr.userLanguage||Yr.language)||"en", languages: {}

                , notSupportedMessage:"No compatible source was found for this media.", normalizeAutoplay: !1, fullscreen: {
                    options: {
                        navigationUI:"hide"
                    }
                }

                , breakpoints: {}

                , responsive: !1, audioOnlyMode: !1, audioPosterMode: !1
            }

            , ["ended", "seeking", "seekable", "networkState", "readyState"].forEach((function(e) {
                        Kr.prototype[e]=function() {
                            return this.techGet_(e)
                        }
                    }

                )), Vr.forEach((function(e) {
                        Kr.prototype["handleTech"+dt(e)+"_"]=function() {
                            return this.trigger(e)
                        }
                    }

                )), yt.registerComponent("Player", Kr); var Qr=f((function(e) {
                        function t(i, n) {
                            return e.exports=t=Object.setPrototypeOf||function(e, t) {
                                return e.__proto__=t, e
                            }

                            , t(i, n)
                        }

                        e.exports=t
                    }

                )), $r=function() {
                if("undefined"==typeof Reflect|| !Reflect.construct)return !1; if(Reflect.construct.sham)return !1; if("function"==typeof Proxy)return !0; try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}

                            ))),  !0
                }

                catch(e) {
                    return !1
                }
            }

            , Jr=f((function(e) {
                        function t(i, n, r) {
                            return $r()?e.exports=t=Reflect.construct:e.exports=t=function(e, t, i) {
                                var n=[null]; n.push.apply(n, t); var r=new(Function.bind.apply(e, n)); return i&&Qr(r, i.prototype), r
                            }

                            , t.apply(null, arguments)
                        }

                        e.exports=t
                    }

                )), Zr="plugin", ea= {}

            , ta=function(e) {
                return ea.hasOwnProperty(e)
            }

            , ia=function(e) {
                return ta(e)?ea[e]:void 0
            }

            , na=function(e, t) {
                e.activePlugins_=e.activePlugins_|| {}

                , e.activePlugins_[t]= !0
            }

            , ra=function(e, t, i) {
                var n=(i?"before":"")+"pluginsetup"; e.trigger(n, t), e.trigger(n+":"+t.name, t)
            }

            , aa=function(e, t) {
                return t.prototype.name=e, function() {
                    ra(this, {
                            name:e, plugin:t, instance:null
                        }

                        ,  !0); for(var i=arguments.length, n=new Array(i), r=0; r<i; r++)n[r]=arguments[r]; var a=Jr(t, [this].concat(n)); return this[e]=function() {
                        return a
                    }

                    , ra(this, a.getEventHash()), a
                }
            }

            , sa=function() {
                function e(t) {
                    if(this.constructor===e)throw new Error("Plugin must be sub-classed; not directly instantiated."); this.player=t, this.log||(this.log=this.player.log.createLogger(this.name)), ot(this), delete this.trigger, lt(this, this.constructor.defaultState), na(t, this.name), this.dispose=this.dispose.bind(this), t.on("dispose", this.dispose)
                }

                var t=e.prototype; return t.version=function() {
                    return this.constructor.VERSION
                }

                , t.getEventHash=function(e) {
                    return void 0===e&&(e= {}

                    ), e.name=this.name, e.plugin=this.constructor, e.instance=this, e
                }

                , t.trigger=function(e, t) {
                    return void 0===t&&(t= {}

                    ), Ve(this.eventBusEl_, e, this.getEventHash(t))
                }

                , t.handleStateChanged=function(e) {}

                , t.dispose=function() {
                    var e=this.name, t=this.player; this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t.activePlugins_[e]= !1, this.player=this.state=null, t[e]=aa(e, ea[e])
                }

                , e.isBasic=function(t) {
                    var i="string"==typeof t?ia(t):t; return"function"==typeof i&& !e.prototype.isPrototypeOf(i.prototype)
                }

                , e.registerPlugin=function(t, i) {
                    if("string" !=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+typeof t+"."); if(ta(t))d.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!'); else if(Kr.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!'); if("function" !=typeof i)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+typeof i+"."); return ea[t]=i, t !==Zr&&(e.isBasic(i)?Kr.prototype[t]=function(e, t) {
                            var i=function() {
                                ra(this, {
                                        name:e, plugin:t, instance:null
                                    }

                                    ,  !0); var i=t.apply(this, arguments); return na(this, e), ra(this, {
                                        name:e, plugin:t, instance:i
                                    }

                                ), i
                            }

                            ; return Object.keys(t).forEach((function(e) {
                                        i[e]=t[e]
                                    }

                                )), i
                        }

                        (t, i):Kr.prototype[t]=aa(t, i)), i
                }

                , e.deregisterPlugin=function(e) {
                    if(e===Zr)throw new Error("Cannot de-register base plugin."); ta(e)&&(delete ea[e], delete Kr.prototype[e])
                }

                , e.getPlugins=function(e) {
                    var t; return void 0===e&&(e=Object.keys(ea)), e.forEach((function(e) {
                                var i=ia(e); i&&((t=t|| {}

                                    )[e]=i)
                            }

                        )), t
                }

                , e.getPluginVersion=function(e) {
                    var t=ia(e); return t&&t.VERSION||""
                }

                , e
            }

            (); sa.getPlugin=ia, sa.BASE_PLUGIN_NAME=Zr, sa.registerPlugin(Zr, sa), Kr.prototype.usingPlugin=function(e) {
                return ! !this.activePlugins_&& !0===this.activePlugins_[e]
            }

            , Kr.prototype.hasPlugin=function(e) {
                return ! !ta(e)
            }

            ; var oa=function(e) {
                return 0===e.indexOf("#")?e.slice(1):e
            }

            ; function ua(e, t, i) {
                var r=ua.getPlayer(e); if(r)return t&&d.warn('Player "'+e+'" is already initialised. Options will not be applied.'), i&&r.ready(i), r; var a="string"==typeof e?Se("#"+oa(e)):e; if( !Q(a))throw new TypeError("The element or ID supplied is not valid. (videojs)"); a.ownerDocument.defaultView&&a.ownerDocument.body.contains(a)||d.warn("The element supplied is not included in the DOM"),  !0===(t=t|| {}

                ).restoreEl&&(t.restoreEl=(a.parentNode&&a.parentNode.hasAttribute("data-vjs-player")?a.parentNode:a).cloneNode( !0)), n("beforesetup").forEach((function(e) {
                            var i=e(a, ht(t)); b(i)&& !Array.isArray(i)?t=ht(t, i):d.error("please return an object in beforesetup hooks")
                        }

                    )); var s=yt.getComponent("Player"); return r=new s(a, t, i), n("setup").forEach((function(e) {
                            return e(r)
                        }

                    )), r
            }

            if(ua.hooks_=i, ua.hooks=n, ua.hook=function(e, t) {
                    n(e, t)
                }

                , ua.hookOnce=function(e, t) {
                    n(e, [].concat(t).map((function(t) {
                                    return function i() {
                                        return r(e, i), t.apply(void 0, arguments)
                                    }
                                }

                            )))
                }

                , ua.removeHook=r,  !0 !==window.VIDEOJS_NO_DYNAMIC_STYLE&&Y()) {
                var la=Se(".vjs-styles-defaults"); if( !la) {
                    la=Le("vjs-styles-defaults"); var ca=Se("head"); ca&&ca.insertBefore(la, ca.firstChild), De(la, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: 56.25%\n      }\n    ")
                }
            }

            xe(1, ua), ua.VERSION=t, ua.options=Kr.prototype.options_, ua.getPlayers=function() {
                return Kr.players
            }

            , ua.getPlayer=function(e) {
                var t, i=Kr.players; if("string"==typeof e) {
                    var n=oa(e), r=i[n]; if(r)return r; t=Se("#"+n)
                }

                else t=e; if(Q(t)) {
                    var a=t, s=a.player, o=a.playerId; if(s||i[o])return s||i[o]
                }
            }

            , ua.getAllPlayers=function() {
                return Object.keys(Kr.players).map((function(e) {
                            return Kr.players[e]
                        }

                    )).filter(Boolean)
            }

            , ua.players=Kr.players, ua.getComponent=yt.getComponent, ua.registerComponent=function(e, t) {
                Gi.isTech(t)&&d.warn("The "+e+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), yt.registerComponent.call(yt, e, t)
            }

            , ua.getTech=Gi.getTech, ua.registerTech=Gi.registerTech, ua.use=function(e, t) {
                zi[e]=zi[e]||[], zi[e].push(t)
            }

            , Object.defineProperty(ua, "middleware", {
                    value: {}

                    , writeable: !1, enumerable: !0
                }

            ), Object.defineProperty(ua.middleware, "TERMINATOR", {
                    value:Ki, writeable: !1, enumerable: !0
                }

            ), ua.browser=z, ua.TOUCH_ENABLED=H, ua.extend=function(e, t) {
                void 0===t&&(t= {}

                ); var i=function() {
                    e.apply(this, arguments)
                }

                , n= {}

                ; for(var r in"object"==typeof t?(t.constructor !==Object.prototype.constructor&&(i=t.constructor), n=t):"function"==typeof t&&(i=t), function(e, t) {
                        if("function" !=typeof t&&null !==t)throw new TypeError("Super expression must either be null or a function"); e.prototype=Object.create(t&&t.prototype, {
                                constructor: {
                                    value:e, writable: !0, configurable: !0
                                }
                            }

                        ), t&&Qr(e, t)
                    }

                    (i, e), e&&(i.super_=e), n)n.hasOwnProperty(r)&&(i.prototype[r]=n[r]); return i
            }

            , ua.mergeOptions=ht, ua.bind=Ye, ua.registerPlugin=sa.registerPlugin, ua.deregisterPlugin=sa.deregisterPlugin, ua.plugin=function(e, t) {
                return d.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), sa.registerPlugin(e, t)
            }

            , ua.getPlugins=sa.getPlugins, ua.getPlugin=sa.getPlugin, ua.getPluginVersion=sa.getPluginVersion, ua.addLanguage=function(e, t) {
                var i; return e=(""+e).toLowerCase(), ua.options.languages=ht(ua.options.languages, ((i= {}

                        )[e]=t, i)), ua.options.languages[e]
            }

            , ua.log=d, ua.createLogger=h, ua.createTimeRange=ua.createTimeRanges=St, ua.formatTime=Tn, ua.setFormatTime=function(e) {
                bn=e
            }

            , ua.resetFormatTime=function() {
                bn=_n
            }

            , ua.parseUrl=Gt, ua.isCrossOrigin=Kt, ua.EventTarget=$e, ua.on=He, ua.one=We, ua.off=qe, ua.trigger=Ve, ua.xhr=Jt, ua.TextTrack=ai, ua.AudioTrack=si, ua.VideoTrack=oi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((function(e) {
                        ua[e]=function() {
                            return d.warn("videojs."+e+"() is deprecated; use videojs.dom."+e+"() instead"), ke[e].apply(null, arguments)
                        }
                    }

                )), ua.computedStyle=w, ua.dom=ke, ua.url=Yt, ua.defineLazyProperty=Hr, ua.addLanguage("en", {
                    "Non-Fullscreen":"Exit Fullscreen"
                }

            ); var da=f((function(e, t) {
                        var i, n, r, a, s; i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^; ?#]*)?(; [^?#]*)?(\?[^#]*)?(#[^]*)?$/, n=/^([^\/?#]*)([^]*)$/, r=/(?:\/|^)\.(?=\/)/g, a=/(?:\/|^)\.\.\/(? !\.\.\/)[^\/]*(?=\/)/g, s= {
                            buildAbsoluteURL:function(e, t, i) {
                                if(i=i|| {}

                                    , e=e.trim(),  !(t=t.trim())) {
                                    if( !i.alwaysNormalize)return e; var r=s.parseURL(e); if( !r)throw new Error("Error trying to parse base URL."); return r.path=s.normalizePath(r.path), s.buildURLFromParts(r)
                                }

                                var a=s.parseURL(t); if( !a)throw new Error("Error trying to parse relative URL."); if(a.scheme)return i.alwaysNormalize?(a.path=s.normalizePath(a.path), s.buildURLFromParts(a)):t; var o=s.parseURL(e); if( !o)throw new Error("Error trying to parse base URL."); if( !o.netLoc&&o.path&&"/" !==o.path[0]) {
                                    var u=n.exec(o.path); o.netLoc=u[1], o.path=u[2]
                                }

                                o.netLoc&& !o.path&&(o.path="/"); var l= {
                                    scheme:o.scheme, netLoc:a.netLoc, path:null, params:a.params, query:a.query, fragment:a.fragment
                                }

                                ; if( !a.netLoc&&(l.netLoc=o.netLoc, "/" !==a.path[0]))if(a.path) {
                                    var c=o.path, d=c.substring(0, c.lastIndexOf("/")+1)+a.path; l.path=s.normalizePath(d)
                                }

                                else l.path=o.path, a.params||(l.params=o.params, a.query||(l.query=o.query)); return null===l.path&&(l.path=i.alwaysNormalize?s.normalizePath(a.path):a.path), s.buildURLFromParts(l)
                            }

                            , parseURL:function(e) {
                                var t=i.exec(e); return t? {
                                    scheme:t[1]||"", netLoc:t[2]||"", path:t[3]||"", params:t[4]||"", query:t[5]||"", fragment:t[6]||""
                                }

                                :null
                            }

                            , normalizePath:function(e) {
                                for(e=e.split("").reverse().join("").replace(r, ""); e.length !==(e=e.replace(a, "")).length; ); return e.split("").reverse().join("")
                            }

                            , buildURLFromParts:function(e) {
                                return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment
                            }
                        }

                        , e.exports=s
                    }

                )), ha="http://example.com", pa=function(e, t) {
                if(/^[a-z]+:/i.test(t))return t; /^data:/.test(e)&&(e=window.location&&window.location.href||""); var i="function"==typeof window.URL, n=/^\/\//.test(e), r= !window.location&& !/\/\//i.test(e); if(i?e=new window.URL(e,window.location||ha):/\/\//i.test(e)||(e=da.buildAbsoluteURL(window.location&&window.location.href||"",e)), i) {
                    var a=new URL(t,e); return r?a.href.slice(ha.length):n?a.href.slice(a.protocol.length):a.href
                }

                return da.buildAbsoluteURL(e,t)
            }

            , fa=function() {
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

            (); function ma(e) {
                for(var t, i=(t=e, window.atob?window.atob(t):Buffer.from(t, "base64").toString("binary")), n=new Uint8Array(i.length), r=0; r<i.length; r++)n[r]=i.charCodeAt(r); return n
            }

            var ga=function(e) {
                function t() {
                    var t; return(t=e.call(this)||this).buffer="", t
                }

                return bt(t, e), t.prototype.push=function(e) {
                    var t; for(this.buffer+=e, t=this.buffer.indexOf("\n"); t>-1; t=this.buffer.indexOf("\n"))this.trigger("data", this.buffer.substring(0, t)), this.buffer=this.buffer.substring(t+1)
                }

                , t
            }

            (fa), va=String.fromCharCode(9), ya=function(e) {
                var t=/([0-9.]*)?@?([0-9.]*)?/.exec(e||""), i= {}

                ; return t[1]&&(i.length=parseInt(t[1], 10)), t[2]&&(i.offset=parseInt(t[2], 10)), i
            }

            , _a=function(e) {
                for(var t, i=e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n= {}

                    , r=i.length; r--; )"" !==i[r]&&((t=/([^=]*)=(.*)/.exec(i[r]).slice(1))[0]=t[0].replace(/^\s+|\s+$/g, ""), t[1]=t[1].replace(/^\s+|\s+$/g, ""), t[1]=t[1].replace(/^['"](.*)['"]$/g,"$1"),n[t[0]]=t[1]);return n},ba=function(e){function t(){var t;return(t=e.call(this)||this).customParsers=[],t.tagMappers=[],t}bt(t,e);var i=t.prototype;return i.push=function(e){var t,i,n=this;0!==(e=e.trim()).length&&("#"===e[0]?this.tagMappers.reduce((function(t,i){var n=i(e);return n===e?t:t.concat([n])}),[e]).forEach((function(e){for(var r=0;r<n.customParsers.length;r++)if(n.customParsers[r].call(n,e))return;if(0===e.indexOf("#EXT"))if(e=e.replace("\r",""),t=/^#EXTM3U/.exec(e))n.trigger("data",{type:"tag",tagType:"m3u"});else{if(t=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e))return i={type:"tag",tagType:"inf"},t[1]&&(i.duration=parseFloat(t[1])),t[2]&&(i.title=t[2]),void n.trigger("data",i);if(t=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"targetduration"},t[1]&&(i.duration=parseInt(t[1],10)),void n.trigger("data",i);if(t=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"version"},t[1]&&(i.version=parseInt(t[1],10)),void n.trigger("data",i);if(t=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))return i={type:"tag",tagType:"media-sequence"},t[1]&&(i.number=parseInt(t[1],10)),void n.trigger("data",i);if(t=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))return i={type:"tag",tagType:"discontinuity-sequence"},t[1]&&(i.number=parseInt(t[1],10)),void n.trigger("data",i);if(t=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e))return i={type:"tag",tagType:"playlist-type"},t[1]&&(i.playlistType=t[1]),void n.trigger("data",i);if(t=/^#EXT-X-BYTERANGE:?(.*)?$/.exec(e))return i=m(ya(t[1]),{type:"tag",tagType:"byterange"}),void n.trigger("data",i);if(t=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e))return i={type:"tag",tagType:"allow-cache"},t[1]&&(i.allowed=!/NO/.test(t[1])),void n.trigger("data",i);if(t=/^#EXT-X-MAP:?(.*)$/.exec(e)){if(i={type:"tag",tagType:"map"},t[1]){var a=_a(t[1]);a.URI&&(i.uri=a.URI),a.BYTERANGE&&(i.byterange=ya(a.BYTERANGE))}n.trigger("data",i)}else if(t=/^#EXT-X-STREAM-INF:?(.*)$/.exec(e)){if(i={type:"tag",tagType:"stream-inf"},t[1]){if(i.attributes=_a(t[1]),i.attributes.RESOLUTION){var s=i.attributes.RESOLUTION.split("x"),o={};s[0]&&(o.width=parseInt(s[0],10)),s[1]&&(o.height=parseInt(s[1],10)),i.attributes.RESOLUTION=o}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}n.trigger("data",i)}else{if(t=/^#EXT-X-MEDIA:?(.*)$/.exec(e))return i={type:"tag",tagType:"media"},t[1]&&(i.attributes=_a(t[1])),void n.trigger("data",i);if(t=/^#EXT-X-ENDLIST/.exec(e))n.trigger("data",{type:"tag",tagType:"endlist"});else if(t=/^#EXT-X-DISCONTINUITY/.exec(e))n.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(t=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e))return i={type:"tag",tagType:"program-date-time"},t[1]&&(i.dateTimeString=t[1],i.dateTimeObject=new Date(t[1])),void n.trigger("data",i);if(t=/^#EXT-X-KEY:?(.*)$/.exec(e))return i={type:"tag",tagType:"key"},t[1]&&(i.attributes=_a(t[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void n.trigger("data",i);if(t=/^#EXT-X-START:?(.*)$/.exec(e))return i={type:"tag",tagType:"start"},t[1]&&(i.attributes=_a(t[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void n.trigger("data",i);if(t=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-out-cont"},t[1]?i.data=t[1]:i.data="",void n.trigger("data",i);if(t=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-out"},t[1]?i.data=t[1]:i.data="",void n.trigger("data",i);if(t=/^#EXT-X-CUE-IN:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-in"},t[1]?i.data=t[1]:i.data="",void n.trigger("data",i);if((t=/^#EXT-X-SKIP:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"skip"}).attributes=_a(t[1]),i.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(i.attributes["SKIPPED-SEGMENTS"]=parseInt(i.attributes["SKIPPED-SEGMENTS"],10)),i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(i.attributes["RECENTLY-REMOVED-DATERANGES"]=i.attributes["RECENTLY-REMOVED-DATERANGES"].split(va)),void n.trigger("data",i);if((t=/^#EXT-X-PART:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"part"}).attributes=_a(t[1]),["DURATION"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=parseFloat(i.attributes[e]))})),["INDEPENDENT","GAP"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=/YES/.test(i.attributes[e]))})),i.attributes.hasOwnProperty("BYTERANGE")&&(i.attributes.byterange=ya(i.attributes.BYTERANGE)),void n.trigger("data",i);if((t=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"server-control"}).attributes=_a(t[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=parseFloat(i.attributes[e]))})),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=/YES/.test(i.attributes[e]))})),void n.trigger("data",i);if((t=/^#EXT-X-PART-INF:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"part-inf"}).attributes=_a(t[1]),["PART-TARGET"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=parseFloat(i.attributes[e]))})),void n.trigger("data",i);if((t=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"preload-hint"}).attributes=_a(t[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach((function(e){if(i.attributes.hasOwnProperty(e)){i.attributes[e]=parseInt(i.attributes[e],10);var t="BYTERANGE-LENGTH"===e?"length":"offset";i.attributes.byterange=i.attributes.byterange||{},i.attributes.byterange[t]=i.attributes[e],delete i.attributes[e]}})),void n.trigger("data",i);if((t=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(e))&&t[1])return(i={type:"tag",tagType:"rendition-report"}).attributes=_a(t[1]),["LAST-MSN","LAST-PART"].forEach((function(e){i.attributes.hasOwnProperty(e)&&(i.attributes[e]=parseInt(i.attributes[e],10))})),void n.trigger("data",i);n.trigger("data",{type:"tag",data:e.slice(4)})}}}else n.trigger("data",{type:"comment",text:e.slice(1)})})):this.trigger("data",{type:"uri",uri:e}))},i.addParser=function(e){var t=this,i=e.expression,n=e.customType,r=e.dataParser,a=e.segment;"function"!=typeof r&&(r=function(e){return e}),this.customParsers.push((function(e){if(i.exec(e))return t.trigger("data",{type:"custom",data:r(e),customType:n,segment:a}),!0}))},i.addTagMapper=function(e){var t=e.expression,i=e.map;this.tagMappers.push((function(e){return t.test(e)?i(e):e}))},t}(fa),Ta=function(e){var t={};return Object.keys(e).forEach((function(i){var n;t[(n=i,n.toLowerCase().replace(/-(\w)/g,(function(e){return e[1].toUpperCase()})))]=e[i]})),t},wa=function(e){var t=e.serverControl,i=e.targetDuration,n=e.partTargetDuration;if(t){var r="#EXT-X-SERVER-CONTROL",a="holdBack",s="partHoldBack",o=i&&3*i,u=n&&2*n;i&&!t.hasOwnProperty(a)&&(t[a]=o,this.trigger("info",{message:r+"defaulting HOLD-BACK to targetDuration * 3 ("+o+")."})),o&&t[a]<o&&(this.trigger("warn",{message:r+"clamping HOLD-BACK ("+t[a]+") to targetDuration * 3 ("+o+")"}),t[a]=o),n&&!t.hasOwnProperty(s)&&(t[s]=3*n,this.trigger("info",{message:r+"defaulting PART-HOLD-BACK to partTargetDuration * 3 ("+t[s]+")."})),n&&t[s]<u&&(this.trigger("warn",{message:r+"clamping PART-HOLD-BACK ("+t[s]+") to partTargetDuration * 2 ("+u+")."}),t[s]=u)}},Sa=function(e){function t(){var t;(t=e.call(this)||this).lineStream=new ga,t.parseStream=new ba,t.lineStream.pipe(t.parseStream);var i,n,r=_t(t),a=[],s={},o=!1,u=function(){},l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};var d=0,h=0;return t.on("end",(function(){s.uri||!s.parts&&!s.preloadHints||(!s.map&&i&&(s.map=i),!s.key&&n&&(s.key=n),s.timeline||"number"!=typeof c||(s.timeline=c),t.manifest.preloadSegment=s)})),t.parseStream.on("data",(function(e){var t,p;({tag:function(){({version:function(){e.version&&(this.manifest.version=e.version)},"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&(s.byterange=t,t.length=e.length,"offset"in e||(e.offset=d)),"offset"in e&&(s.byterange=t,t.offset=e.offset),d=t.offset+t.length},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),e.duration>0&&(s.duration=e.duration),0===e.duration&&(s.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=a},key:function(){if(e.attributes)if("NONE"!==e.attributes.METHOD)if(e.attributes.URI){if("com.apple.streamingkeydelivery"===e.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:e.attributes});if("com.microsoft.playready"===e.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.microsoft.playready"]={uri:e.attributes.URI});if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"===e.attributes.KEYFORMAT)return-1===["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(e.attributes.METHOD)?void this.trigger("warn",{message:"invalid key method provided for Widevine"}):("SAMPLE-AES-CENC"===e.attributes.METHOD&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),"data:text/plain; base64, "!==e.attributes.URI.substring(0,23)?void this.trigger("warn",{message:"invalid key URI provided for Widevine"}):e.attributes.KEYID&&"0x"===e.attributes.KEYID.substring(0,2)?(this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:e.attributes.KEYFORMAT,keyId:e.attributes.KEYID.substring(2)},pssh:ma(e.attributes.URI.split(", ")[1])})):void this.trigger("warn",{message:"invalid key ID provided for Widevine"}));e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),n={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},void 0!==e.attributes.IV&&(n.iv=e.attributes.IV)}else this.trigger("warn",{message:"ignoring key declaration without URI"});else n=null;else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){i={},e.uri&&(i.uri=e.uri),e.byterange&&(i.byterange=e.byterange),n&&(i.key=n)},"stream-inf":function(){this.manifest.playlists=a,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(s.attributes||(s.attributes={}),m(s.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var i=this.manifest.mediaGroups[e.attributes.TYPE];i[e.attributes["GROUP-ID"]]=i[e.attributes["GROUP-ID"]]||{},t=i[e.attributes["GROUP-ID"]],(p={default:/yes/i.test(e.attributes.DEFAULT)}).default?p.autoselect=!0:p.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(p.language=e.attributes.LANGUAGE),e.attributes.URI&&(p.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(p.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(p.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(p.forced=/yes/i.test(e.attributes.FORCED)),t[e.attributes.NAME]=p}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,s.discontinuity=!0,this.manifest.discontinuityStarts.push(a.length)},"program-date-time":function(){void 0===this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),s.dateTimeString=e.dateTimeString,s.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):(this.manifest.targetDuration=e.duration,wa.call(this,this.manifest))},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){s.cueOut=e.data},"cue-out-cont":function(){s.cueOutCont=e.data},"cue-in":function(){s.cueIn=e.data},skip:function(){this.manifest.skip=Ta(e.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",e.attributes,["SKIPPED-SEGMENTS"])},part:function(){var t=this;o=!0;var i=this.manifest.segments.length,n=Ta(e.attributes);s.parts=s.parts||[],s.parts.push(n),n.byterange&&(n.byterange.hasOwnProperty("offset")||(n.byterange.offset=h),h=n.byterange.offset+n.byterange.length);var r=s.parts.length-1;this.warnOnMissingAttributes_("#EXT-X-PART #"+r+"for segment #"+i,e.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach((function(e,i){e.hasOwnProperty("lastPart")||t.trigger("warn",{message:"#EXT-X-RENDITION-REPORT #"+i+"lacks required attribute(s): LAST-PART"})}))},"server-control":function(){var t=this.manifest.serverControl=Ta(e.attributes);t.hasOwnProperty("canBlockReload")||(t.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),wa.call(this,this.manifest),t.canSkipDateranges&&!t.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint":function(){var t=this.manifest.segments.length,i=Ta(e.attributes),n=i.type&&"PART"===i.type;s.preloadHints=s.preloadHints||[],s.preloadHints.push(i),i.byterange&&(i.byterange.hasOwnProperty("offset")||(i.byterange.offset=n?h:0,n&&(h=i.byterange.offset+i.byterange.length)));var r=s.preloadHints.length-1;if(this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #"+r+"for segment #"+t,e.attributes,["TYPE","URI"]),i.type)for(var a=0;a<s.preloadHints.length-1;a++){var o=s.preloadHints[a];o.type&&o.type===i.type&&this.trigger("warn",{message:"#EXT-X-PRELOAD-HINT #"+r+"for segment #"+t+"has the same TYPE "+i.type+"as preload hint #"+a})}},"rendition-report":function(){var t=Ta(e.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(t);var i=this.manifest.renditionReports.length-1,n=["LAST-MSN","URI"];o&&n.push("LAST-PART"),this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #"+i,e.attributes,n)},"part-inf":function(){this.manifest.partInf=Ta(e.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",e.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),wa.call(this,this.manifest)}}[e.tagType]||u).call(r)},uri:function(){s.uri=e.uri,a.push(s),this.manifest.targetDuration&&!("duration"in s)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),s.duration=this.manifest.targetDuration),n&&(s.key=n),s.timeline=c,i&&(s.map=i),h=0,s={}},comment:function(){},custom:function(){e.segment?(s.custom=s.custom||{},s.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(r)})),t}bt(t,e);var i=t.prototype;return i.warnOnMissingAttributes_=function(e,t,i){var n=[];i.forEach((function(e){t.hasOwnProperty(e)||n.push(e)})),n.length&&this.trigger("warn",{message:e+"lacks required attribute(s): "+n.join(", ")})},i.push=function(e){this.lineStream.push(e)},i.end=function(){this.lineStream.push("\n"),this.trigger("end")},i.addParser=function(e){this.parseStream.addParser(e)},i.addTagMapper=function(e){this.parseStream.addTagMapper(e)},t}(fa),Ea={mp4:/^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,webm:/^(vp0?[89]|av0?1|opus|vorbis)/,ogg:/^(vp0?[89]|theora|flac|opus|vorbis)/,video:/^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,audio:/^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,text:/^(stpp.ttml.im1t)/,muxerVideo:/^(avc0?1)/,muxerAudio:/^(mp4a)/,muxerText:/a^/},ka=["video","audio","text"],Ca=["Video","Audio","Text"],Ia=function(e){return e?e.replace(/avc1\.(\d+)\.(\d+)/i,(function(e,t,i){return"avc1."+("00"+Number(t).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})):e},xa=function(e){void 0===e&&(e="");var t=e.split(", "),i=[];return t.forEach((function(e){var t;e=e.trim(),ka.forEach((function(n){var r=Ea[n].exec(e.toLowerCase());if(r&&!(r.length<=1)){t=n;var a=e.substring(0,r[1].length),s=e.replace(a,"");i.push({type:a,details:s,mediaType:n})}})),t||i.push({type:e,details:"",mediaType:"unknown"})})),i},Aa=function(e){return void 0===e&&(e=""),Ea.audio.test(e.trim().toLowerCase())},Pa=function(e){if(e&&"string"==typeof e){var t,i=e.toLowerCase().split(", ").map((function(e){return Ia(e.trim())})),n="video";1===i.length&&Aa(i[0])?n="audio":1===i.length&&(void 0===(t=i[0])&&(t=""),Ea.text.test(t.trim().toLowerCase()))&&(n="application");var r="mp4";return i.every((function(e){return Ea.mp4.test(e)}))?r="mp4":i.every((function(e){return Ea.webm.test(e)}))?r="webm":i.every((function(e){return Ea.ogg.test(e)}))&&(r="ogg"),n+"/"+r+';codecs="'+e+'"'}},La=function(e){return void 0===e&&(e=""),window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported(Pa(e))||!1},Da=function(e){return void 0===e&&(e=""),e.toLowerCase().split(", ").every((function(e){e=e.trim();for(var t=0;t<Ca.length;t++)if(Ea["muxer"+Ca[t]].test(e))return!0;return!1}))},Oa="mp4a.40.2",Ma=/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,Ra=/^application\/dash\+xml/i,Na=function(e){return Ma.test(e)?"hls":Ra.test(e)?"dash":"application/vnd.videojs.vhs+json"===e?"vhs-json":null},Ua=function(e){return"function"===ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer},Ba=function(e){return e instanceof Uint8Array?e:(Array.isArray(e)||Ua(e)||e instanceof ArrayBuffer||(e="number"!=typeof e||"number"==typeof e&&e!=e?0:[e]),new Uint8Array(e&&e.buffer||e,e&&e.byteOffset||0,e&&e.byteLength||0))},Fa=window.BigInt||Number,ja=[Fa("0x1"),Fa("0x100"),Fa("0x10000"),Fa("0x1000000"),Fa("0x100000000"),Fa("0x10000000000"),Fa("0x1000000000000"),Fa("0x100000000000000"),Fa("0x10000000000000000")],Ha=function(e,t){var i=void 0===t?{}:t,n=i.signed,r=void 0!==n&&n,a=i.le,s=void 0!==a&&a;e=Ba(e);var o=s?"reduce":"reduceRight",u=(e[o]?e[o]:Array.prototype[o]).call(e,(function(t,i,n){var r=s?n:Math.abs(n+1-e.length);return t+Fa(i)*ja[r]}),Fa(0));if(r){var l=ja[e.length]/Fa(2)-Fa(1);(u=Fa(u))>l&&(u-=l,u-=l,u-=Fa(2))}return Number(u)},qa=function(e,t){if("string"!=typeof e&&e&&"function"==typeof e.toString&&(e=e.toString()),"string"!=typeof e)return new Uint8Array;t||(e=unescape(encodeURIComponent(e)));for(var i=new Uint8Array(e.length),n=0;n<e.length;n++)i[n]=e.charCodeAt(n);return i},Va=function(e,t,i){var n=void 0===i?{}:i,r=n.offset,a=void 0===r?0:r,s=n.mask,o=void 0===s?[]:s;e=Ba(e);var u=(t=Ba(t)).every?t.every:Array.prototype.every;return t.length&&e.length-a>=t.length&&u.call(t,(function(t,i){return t===(o[i]?o[i]&e[a+i]:e[a+i])}))};function Wa(e,t){return void 0===t&&(t=Object),t&&"function"==typeof t.freeze?t.freeze(e):e}var Ga=Wa({HTML:"text/html",isHTML:function(e){return e===Ga.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),za=Wa({HTML:"http: //www.w3.org/1999/xhtml",isHTML:function(e){return e===za.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"}),Xa={freeze:Wa,MIME_TYPE:Ga,NAMESPACE:za},Ka=Xa.NAMESPACE;function Ya(e){return""!==e}function Qa(e,t){return e.hasOwnProperty(t)||(e[t]=!0),e}function $a(e){if(!e)return[];var t=function(e){return e?e.split(/[\t\n\f\r ]+/).filter(Ya):[]}(e);return Object.keys(t.reduce(Qa,{}))}function Ja(e,t){for(var i in e)t[i]=e[i]}function Za(e,t){var i=e.prototype;if(!(i instanceof t)){var n=function(){};n.prototype=t.prototype,Ja(i,n=new n),e.prototype=i=n}i.constructor!=e&&("function"!=typeof e&&console.error("unknown Class:"+e),i.constructor=e)}var es={},ts=es.ELEMENT_NODE=1,is=es.ATTRIBUTE_NODE=2,ns=es.TEXT_NODE=3,rs=es.CDATA_SECTION_NODE=4,as=es.ENTITY_REFERENCE_NODE=5,ss=es.ENTITY_NODE=6,os=es.PROCESSING_INSTRUCTION_NODE=7,us=es.COMMENT_NODE=8,ls=es.DOCUMENT_NODE=9,cs=es.DOCUMENT_TYPE_NODE=10,ds=es.DOCUMENT_FRAGMENT_NODE=11,hs=es.NOTATION_NODE=12,ps={},fs={};ps.INDEX_SIZE_ERR=(fs[1]="Index size error",1),ps.DOMSTRING_SIZE_ERR=(fs[2]="DOMString size error",2);var ms=ps.HIERARCHY_REQUEST_ERR=(fs[3]="Hierarchy request error",3);ps.WRONG_DOCUMENT_ERR=(fs[4]="Wrong document",4),ps.INVALID_CHARACTER_ERR=(fs[5]="Invalid character",5),ps.NO_DATA_ALLOWED_ERR=(fs[6]="No data allowed",6),ps.NO_MODIFICATION_ALLOWED_ERR=(fs[7]="No modification allowed",7);var gs=ps.NOT_FOUND_ERR=(fs[8]="Not found",8);ps.NOT_SUPPORTED_ERR=(fs[9]="Not supported",9);var vs=ps.INUSE_ATTRIBUTE_ERR=(fs[10]="Attribute in use",10);function ys(e,t){if(t instanceof Error)var i=t;else i=this,Error.call(this,fs[e]),this.message=fs[e],Error.captureStackTrace&&Error.captureStackTrace(this,ys);return i.code=e,t&&(this.message=this.message+": "+t),i}function _s(){}function bs(e,t){this._node=e,this._refresh=t,Ts(this)}function Ts(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var i=e._refresh(e._node);eo(e,"length",i.length),Ja(i,e),e._inc=t}}function ws(){}function Ss(e,t){for(var i=e.length;i--;)if(e[i]===t)return i}function Es(e,t,i,n){if(n?t[Ss(t,n)]=i:t[t.length++]=i,e){i.ownerElement=e;var r=e.ownerDocument;r&&(n&&Ls(r,e,n),function(e,t,i){e&&e._inc++,i.namespaceURI===Ka.XMLNS&&(t._nsMap[i.prefix?i.localName:""]=i.value)}(r,e,i))}}function ks(e,t,i){var n=Ss(t,i);if(!(n>=0))throw ys(gs,new Error(e.tagName+"@"+i));for(var r=t.length-1;n<r;)t[n]=t[++n];if(t.length=r,e){var a=e.ownerDocument;a&&(Ls(a,e,i),i.ownerElement=null)}}function Cs(){}function Is(){}function xs(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function As(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(As(e,t))return!0}while(e=e.nextSibling)}function Ps(){}function Ls(e,t,i,n){e&&e._inc++,i.namespaceURI===Ka.XMLNS&&delete t._nsMap[i.prefix?i.localName:""]}function Ds(e,t,i){if(e&&e._inc){e._inc++;var n=t.childNodes;if(i)n[n.length++]=i;else{for(var r=t.firstChild,a=0;r;)n[a++]=r,r=r.nextSibling;n.length=a}}}function Os(e,t){var i=t.previousSibling,n=t.nextSibling;return i?i.nextSibling=n:e.firstChild=n,n?n.previousSibling=i:e.lastChild=i,Ds(e.ownerDocument,e),t}function Ms(e,t,i){var n=t.parentNode;if(n&&n.removeChild(t),t.nodeType===ds){var r=t.firstChild;if(null==r)return t;var a=t.lastChild}else r=a=t;var s=i?i.previousSibling:e.lastChild;r.previousSibling=s,a.nextSibling=i,s?s.nextSibling=r:e.firstChild=r,null==i?e.lastChild=a:i.previousSibling=a;do{r.parentNode=e}while(r!==a&&(r=r.nextSibling));return Ds(e.ownerDocument||e,e),t.nodeType==ds&&(t.firstChild=t.lastChild=null),t}function Rs(){this._nsMap={}}function Ns(){}function Us(){}function Bs(){}function Fs(){}function js(){}function Hs(){}function qs(){}function Vs(){}function Ws(){}function Gs(){}function zs(){}function Xs(){}function Ks(e,t){var i=[],n=9==this.nodeType&&this.documentElement||this,r=n.prefix,a=n.namespaceURI;if(a&&null==r&&null==(r=n.lookupPrefix(a)))var s=[{namespace:a,prefix:null}];return $s(this,i,e,t,s),i.join("")}function Ys(e,t,i){var n=e.prefix||"",r=e.namespaceURI;if(!r)return!1;if("xml"===n&&r===Ka.XML||r===Ka.XMLNS)return!1;for(var a=i.length;a--;){var s=i[a];if(s.prefix===n)return s.namespace!==r}return!0}function Qs(e,t,i){e.push(" ",t,'="',i.replace(/[<&"]/g,xs),'"')}function $s(e,t,i,n,r){if(r||(r=[]),n){if(!(e=n(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case ts:var a=e.attributes,s=a.length,o=e.firstChild,u=e.tagName,l=u;if(!(i=Ka.isHTML(e.namespaceURI)||i)&&!e.prefix&&e.namespaceURI){for(var c,d=0;d<a.length;d++)if("xmlns"===a.item(d).name){c=a.item(d).value;break}if(!c)for(var h=r.length-1;h>=0;h--)if(""===(p=r[h]).prefix&&p.namespace===e.namespaceURI){c=p.namespace;break}if(c!==e.namespaceURI)for(h=r.length-1;h>=0;h--){var p;if((p=r[h]).namespace===e.namespaceURI){p.prefix&&(l=p.prefix+":"+u);break}}}t.push("<",l);for(var f=0;f<s;f++)"xmlns"==(m=a.item(f)).prefix?r.push({prefix:m.localName,namespace:m.value}):"xmlns"==m.nodeName&&r.push({prefix:"",namespace:m.value});for(f=0;f<s;f++){var m,g,v;Ys(m=a.item(f),0,r)&&(Qs(t,(g=m.prefix||"")?"xmlns:"+g:"xmlns",v=m.namespaceURI),r.push({prefix:g,namespace:v})),$s(m,t,i,n,r)}if(u===l&&Ys(e,0,r)&&(Qs(t,(g=e.prefix||"")?"xmlns:"+g:"xmlns",v=e.namespaceURI),r.push({prefix:g,namespace:v})),o||i&&!/^(?:meta|link|img|br|hr|input)$/i.test(u)){if(t.push(">"),i&&/^script$/i.test(u))for(;o;)o.data?t.push(o.data):$s(o,t,i,n,r.slice()),o=o.nextSibling;else for(;o;)$s(o,t,i,n,r.slice()),o=o.nextSibling;t.push("</",l,">")}else t.push("/>");return;case ls:case ds:for(o=e.firstChild;o;)$s(o,t,i,n,r.slice()),o=o.nextSibling;return;case is:return Qs(t,e.name,e.value);case ns:return t.push(e.data.replace(/[<&]/g,xs).replace(/]]>/g,"]]&gt;"));case rs:return t.push("<![CDATA[",e.data,"]]>");case us:return t.push("\x3c!--",e.data,"--\x3e");case cs:var y=e.publicId,_=e.systemId;if(t.push("<!DOCTYPE ",e.name),y)t.push(" PUBLIC ",y),_&&"."!=_&&t.push(" ",_),t.push(">");else if(_&&"."!=_)t.push(" SYSTEM ",_,">");else{var b=e.internalSubset;b&&t.push(" [",b,"]"),t.push(">")}return;case os:return t.push("<?",e.target," ",e.data,"?>");case as:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function Js(e,t,i){var n;switch(t.nodeType){case ts:(n=t.cloneNode(!1)).ownerDocument=e;case ds:break;case is:i=!0}if(n||(n=t.cloneNode(!1)),n.ownerDocument=e,n.parentNode=null,i)for(var r=t.firstChild;r;)n.appendChild(Js(e,r,i)),r=r.nextSibling;return n}function Zs(e,t,i){var n=new t.constructor;for(var r in t){var a=t[r];"object"!=typeof a&&a!=n[r]&&(n[r]=a)}switch(t.childNodes&&(n.childNodes=new _s),n.ownerDocument=e,n.nodeType){case ts:var s=t.attributes,o=n.attributes=new ws,u=s.length;o._ownerElement=n;for(var l=0;l<u;l++)n.setAttributeNode(Zs(e,s.item(l),!0));break;case is:i=!0}if(i)for(var c=t.firstChild;c;)n.appendChild(Zs(e,c,i)),c=c.nextSibling;return n}function eo(e,t,i){e[t]=i}ps.INVALID_STATE_ERR=(fs[11]="Invalid state",11),ps.SYNTAX_ERR=(fs[12]="Syntax error",12),ps.INVALID_MODIFICATION_ERR=(fs[13]="Invalid modification",13),ps.NAMESPACE_ERR=(fs[14]="Invalid namespace",14),ps.INVALID_ACCESS_ERR=(fs[15]="Invalid access",15),ys.prototype=Error.prototype,Ja(ps,ys),_s.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var i=[],n=0;n<this.length;n++)$s(this[n],i,e,t);return i.join("")}},bs.prototype.item=function(e){return Ts(this),this[e]},Za(bs,_s),ws.prototype={length:0,item:_s.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var i=this[t];if(i.nodeName==e)return i}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new ys(vs);var i=this.getNamedItem(e.nodeName);return Es(this._ownerElement,this,e,i),i},setNamedItemNS:function(e){var t,i=e.ownerElement;if(i&&i!=this._ownerElement)throw new ys(vs);return t=this.getNamedItemNS(e.namespaceURI,e.localName),Es(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return ks(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var i=this.getNamedItemNS(e,t);return ks(this._ownerElement,this,i),i},getNamedItemNS:function(e,t){for(var i=this.length;i--;){var n=this[i];if(n.localName==t&&n.namespaceURI==e)return n}return null}},Cs.prototype={hasFeature:function(e,t){return!0},createDocument:function(e,t,i){var n=new Ps;if(n.implementation=this,n.childNodes=new _s,n.doctype=i||null,i&&n.appendChild(i),t){var r=n.createElementNS(e,t);n.appendChild(r)}return n},createDocumentType:function(e,t,i){var n=new Hs;return n.name=e,n.nodeName=e,n.publicId=t||"",n.systemId=i||"",n}},Is.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return Ms(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return Os(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return Zs(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==ns&&e.nodeType==ns?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var i=t._nsMap;if(i)for(var n in i)if(i[n]==e)return n;t=t.nodeType==is?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var i=t._nsMap;if(i&&e in i)return i[e];t=t.nodeType==is?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},Ja(es,Is),Ja(es,Is.prototype),Ps.prototype={nodeName:"#document",nodeType:ls,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==ds){for(var i=e.firstChild;i;){var n=i.nextSibling;this.insertBefore(i,t),i=n}return e}return null==this.documentElement&&e.nodeType==ts&&(this.documentElement=e),Ms(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),Os(this,e)},importNode:function(e,t){return Js(this,e,t)},getElementById:function(e){var t=null;return As(this.documentElement,(function(i){if(i.nodeType==ts&&i.getAttribute("id")==e)return t=i,!0})),t},getElementsByClassName:function(e){var t=$a(e);return new bs(this,(function(i){var n=[];return t.length>0&&As(i.documentElement,(function(r){if(r!==i&&r.nodeType===ts){var a=r.getAttribute("class");if(a){var s=e===a;if(!s){var o=$a(a);s=t.every((u=o,function(e){return u&&-1!==u.indexOf(e)}))}s&&n.push(r)}}var u})),n}))},createElement:function(e){var t=new Rs;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.localName=e,t.childNodes=new _s,(t.attributes=new ws)._ownerElement=t,t},createDocumentFragment:function(){var e=new Gs;return e.ownerDocument=this,e.childNodes=new _s,e},createTextNode:function(e){var t=new Bs;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new Fs;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new js;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var i=new zs;return i.ownerDocument=this,i.tagName=i.target=e,i.nodeValue=i.data=t,i},createAttribute:function(e){var t=new Ns;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Ws;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var i=new Rs,n=t.split(":"),r=i.attributes=new ws;return i.childNodes=new _s,i.ownerDocument=this,i.nodeName=t,i.tagName=t,i.namespaceURI=e,2==n.length?(i.prefix=n[0],i.localName=n[1]):i.localName=t,r._ownerElement=i,i},createAttributeNS:function(e,t){var i=new Ns,n=t.split(":");return i.ownerDocument=this,i.nodeName=t,i.name=t,i.namespaceURI=e,i.specified=!0,2==n.length?(i.prefix=n[0],i.localName=n[1]):i.localName=t,i}},Za(Ps,Is),Rs.prototype={nodeType:ts,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var i=this.ownerDocument.createAttribute(e);i.value=i.nodeValue=""+t,this.setAttributeNode(i)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===ds?this.insertBefore(e,null):function(e,t){var i=t.parentNode;if(i){var n=e.lastChild;i.removeChild(t),n=e.lastChild}return n=e.lastChild,t.parentNode=e,t.previousSibling=n,t.nextSibling=null,n?n.nextSibling=t:e.firstChild=t,e.lastChild=t,Ds(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var i=this.getAttributeNodeNS(e,t);i&&this.removeAttributeNode(i)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var i=this.getAttributeNodeNS(e,t);return i&&i.value||""},setAttributeNS:function(e,t,i){var n=this.ownerDocument.createAttributeNS(e,t);n.value=n.nodeValue=""+i,this.setAttributeNode(n)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new bs(this,(function(t){var i=[];return As(t,(function(n){n===t||n.nodeType!=ts||"*"!==e&&n.tagName!=e||i.push(n)})),i}))},getElementsByTagNameNS:function(e,t){return new bs(this,(function(i){var n=[];return As(i,(function(r){r===i||r.nodeType!==ts||"*"!==e&&r.namespaceURI!==e||"*"!==t&&r.localName!=t||n.push(r)})),n}))}},Ps.prototype.getElementsByTagName=Rs.prototype.getElementsByTagName,Ps.prototype.getElementsByTagNameNS=Rs.prototype.getElementsByTagNameNS,Za(Rs,Is),Ns.prototype.nodeType=is,Za(Ns,Is),Us.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(fs[ms])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,i){i=this.data.substring(0,e)+i+this.data.substring(e+t),this.nodeValue=this.data=i,this.length=i.length}},Za(Us,Is),Bs.prototype={nodeName:"#text",nodeType:ns,splitText:function(e){var t=this.data,i=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var n=this.ownerDocument.createTextNode(i);return this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling),n}},Za(Bs,Us),Fs.prototype={nodeName:"#comment",nodeType:us},Za(Fs,Us),js.prototype={nodeName:"#cdata-section",nodeType:rs},Za(js,Us),Hs.prototype.nodeType=cs,Za(Hs,Is),qs.prototype.nodeType=hs,Za(qs,Is),Vs.prototype.nodeType=ss,Za(Vs,Is),Ws.prototype.nodeType=as,Za(Ws,Is),Gs.prototype.nodeName="#document-fragment",Gs.prototype.nodeType=ds,Za(Gs,Is),zs.prototype.nodeType=os,Za(zs,Is),Xs.prototype.serializeToString=function(e,t,i){return Ks.call(e,t,i)},Is.prototype.toString=Ks;try{if(Object.defineProperty){var to=function e(t){switch(t.nodeType){case ts:case ds:var i=[];for(t=t.firstChild;t;)7!==t.nodeType&&8!==t.nodeType&&i.push(e(t)),t=t.nextSibling;return i.join("");default:return t.nodeValue}};Object.defineProperty(bs.prototype,"length",{get:function(){return Ts(this),this.$$length}}),Object.defineProperty(Is.prototype,"textContent",{get:function(){return to(this)},set:function(e){switch(this.nodeType){case ts:case ds:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),eo=function(e,t,i){e["$$"+t]=i}}}catch(e){}var io=Cs,no=Xs,ro=f((function(e,t){var i=Xa.freeze;t.XML_ENTITIES=i({amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}),t.HTML_ENTITIES=i({lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}),t.entityMap=t.HTML_ENTITIES}));ro.XML_ENTITIES,ro.HTML_ENTITIES,ro.entityMap;var ao=Xa.NAMESPACE,so=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,oo=new RegExp("[\\-\\.0-9"+so.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),uo=new RegExp("^"+so.source+oo.source+"*(?::"+so.source+oo.source+"*)?$");function lo(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,lo)}function co(){}function ho(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function po(e,t,i,n,r,a){function s(e,t,n){i.attributeNames.hasOwnProperty(e)&&a.fatalError("Attribute "+e+" redefined"),i.addValue(e,t,n)}for(var o,u=++t,l=0;;){var c=e.charAt(u);switch(c){case"=":if(1===l)o=e.slice(t,u),l=3;else{if(2!==l)throw new Error("attribute equal must after attrName");l=3}break;case"'":case'"':if(3===l||1===l){if(1===l&&(a.warning('attribute value must after "="'),o=e.slice(t,u)),t=u+1,!((u=e.indexOf(c,t))>0))throw new Error("attribute value no end '"+c+"' match");s(o,d=e.slice(t,u).replace(/&#?\w+;/g,r),t-1),l=5}else{if(4!=l)throw new Error('attribute value must after "="');s(o,d=e.slice(t,u).replace(/&#?\w+;/g,r),t),a.warning('attribute "'+o+'" missed start quot('+c+")!!"),t=u+1,l=5}break;case"/":switch(l){case 0:i.setTagName(e.slice(t,u));case 5:case 6:case 7:l=7,i.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return a.error("unexpected end of input"),0==l&&i.setTagName(e.slice(t,u)),u;case">":switch(l){case 0:i.setTagName(e.slice(t,u));case 5:case 6:case 7:break;case 4:case 1:"/"===(d=e.slice(t,u)).slice(-1)&&(i.closed=!0,d=d.slice(0,-1));case 2:2===l&&(d=o),4==l?(a.warning('attribute "'+d+'" missed quot(")!'),s(o,d.replace(/&#?\w+;/g,r),t)):(ao.isHTML(n[""])&&d.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+d+'" missed value!! "'+d+'" instead!!'),s(d,d,t));break;case 3:throw new Error("attribute value missed!!")}return u;case"":c=" ";default:if(c<=" ")switch(l){case 0:i.setTagName(e.slice(t,u)),l=6;break;case 1:o=e.slice(t,u),l=2;break;case 4:var d=e.slice(t,u).replace(/&#?\w+;/g,r);a.warning('attribute "'+d+'" missed quot(")!!'),s(o,d,t);case 5:l=6}else switch(l){case 2:i.tagName,ao.isHTML(n[""])&&o.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+o+'" missed value!! "'+o+'" instead2!!'),s(o,o,t),t=u,l=1;break;case 5:a.warning('attribute space is required"'+o+'"!!');case 6:l=1,t=u;break;case 3:l=4,t=u;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}u++}}function fo(e,t,i){for(var n=e.tagName,r=null,a=e.length;a--;){var s=e[a],o=s.qName,u=s.value;if((h=o.indexOf(":"))>0)var l=s.prefix=o.slice(0,h),c=o.slice(h+1),d="xmlns"===l&&c;else c=o,l=null,d="xmlns"===o&&"";s.localName=c,!1!==d&&(null==r&&(r={},vo(i,i={})),i[d]=r[d]=u,s.uri=ao.XMLNS,t.startPrefixMapping(d,u))}for(a=e.length;a--;)(l=(s=e[a]).prefix)&&("xml"===l&&(s.uri=ao.XML),"xmlns"!==l&&(s.uri=i[l||""]));var h;(h=n.indexOf(":"))>0?(l=e.prefix=n.slice(0,h),c=e.localName=n.slice(h+1)):(l=null,c=e.localName=n);var p=e.uri=i[l||""];if(t.startElement(p,c,n,e),!e.closed)return e.currentNSMap=i,e.localNSMap=r,!0;if(t.endElement(p,c,n),r)for(l in r)t.endPrefixMapping(l)}function mo(e,t,i,n,r){if(/^(?:script|textarea)$/i.test(i)){var a=e.indexOf("</"+i+">",t),s=e.substring(t+1,a);if(/[&<]/.test(s))return/^script$/i.test(i)?(r.characters(s,0,s.length),a):(s=s.replace(/&#?\w+;/g,n),r.characters(s,0,s.length),a)}return t+1}function go(e,t,i,n){var r=n[i];return null==r&&((r=e.lastIndexOf("</"+i+">"))<t&&(r=e.lastIndexOf("</"+i)),n[i]=r),r<t}function vo(e,t){for(var i in e)t[i]=e[i]}function yo(e,t,i,n){switch(e.charAt(t+2)){case"-":return"-"===e.charAt(t+3)?(r=e.indexOf("--\x3e",t+4))>t?(i.comment(e,t+4,r-t-4),r+3):(n.error("Unclosed comment"),-1):-1;default:if("CDATA["==e.substr(t+3,6)){var r=e.indexOf("]]>",t+9);return i.startCDATA(),i.characters(e,t+9,r-t-9),i.endCDATA(),r+3}var a=function(e,t){var i,n=[],r=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(r.lastIndex=t,r.exec(e);i=r.exec(e);)if(n.push(i),i[1])return n}(e,t),s=a.length;if(s>1&&/!doctype/i.test(a[0][0])){var o=a[1][0],u=!1,l=!1;s>3&&(/^public$/i.test(a[2][0])?(u=a[3][0],l=s>4&&a[4][0]):/^system$/i.test(a[2][0])&&(l=a[3][0]));var c=a[s-1];return i.startDTD(o,u,l),i.endDTD(),c.index+c[0].length}}return-1}function _o(e,t,i){var n=e.indexOf("?>",t);if(n){var r=e.substring(t,n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return r?(r[0].length,i.processingInstruction(r[1],r[2]),n+2):-1}return-1}function bo(){this.attributeNames={}}lo.prototype=new Error,lo.prototype.name=lo.name,co.prototype={parse:function(e,t,i){var n=this.domBuilder;n.startDocument(),vo(t,t={}),function(e,t,i,n,r){function a(e){var t=e.slice(1,-1);return t in i?i[t]:"#"===t.charAt(0)?function(e){if(e>65535){var t=55296+((e-=65536)>>10),i=56320+(1023&e);return String.fromCharCode(t,i)}return String.fromCharCode(e)}(parseInt(t.substr(1).replace("x","0x"))):(r.error("entity not found:"+e),e)}function s(t){if(t>f){var i=e.substring(f,t).replace(/&#?\w+;/g,a);d&&o(f),n.characters(i,0,t-f),f=t}}function o(t,i){for(;t>=l&&(i=c.exec(e));)u=i.index,l=u+i[0].length,d.lineNumber++;d.columnNumber=t-u+1}for(var u=0,l=0,c=/.*(?:\r\n?|\n)|.*$/g,d=n.locator,h=[{currentNSMap:t}],p={},f=0;;){try{var m=e.indexOf("<",f);if(m<0){if(!e.substr(f).match(/^\s*$/)){var g=n.doc,v=g.createTextNode(e.substr(f));g.appendChild(v),n.currentElement=v}return}switch(m>f&&s(m),e.charAt(m+1)){case"/":var y=e.indexOf(">",m+3),_=e.substring(m+2,y).replace(/[ \t\n\r]+$/g,""),b=h.pop();y<0?(_=e.substring(m+2).replace(/[\s<].*/,""),r.error("end tag name: "+_+" is not complete:"+b.tagName),y=m+1+_.length):_.match(/\s</)&&(_=_.replace(/[\s<].*/,""),r.error("end tag name: "+_+" maybe not complete"),y=m+1+_.length);var T=b.localNSMap,w=b.tagName==_;if(w||b.tagName&&b.tagName.toLowerCase()==_.toLowerCase()){if(n.endElement(b.uri,b.localName,_),T)for(var S in T)n.endPrefixMapping(S);w||r.fatalError("end tag name: "+_+" is not match the current start tagName:"+b.tagName)}else h.push(b);y++;break;case"?":d&&o(m),y=_o(e,m,n);break;case"!":d&&o(m),y=yo(e,m,n,r);break;default:d&&o(m);var E=new bo,k=h[h.length-1].currentNSMap,C=(y=po(e,m,E,k,a,r),E.length);if(!E.closed&&go(e,y,E.tagName,p)&&(E.closed=!0,i.nbsp||r.warning("unclosed xml attribute")),d&&C){for(var I=ho(d,{}),x=0;x<C;x++){var A=E[x];o(A.offset),A.locator=ho(d,{})}n.locator=I,fo(E,n,k)&&h.push(E),n.locator=d}else fo(E,n,k)&&h.push(E);ao.isHTML(E.uri)&&!E.closed?y=mo(e,y,E.tagName,a,n):y++}}catch(e){if(e instanceof lo)throw e;r.error("element parse error: "+e),y=-1}y>f?f=y:s(Math.max(m,f)+1)}}(e,t,i,n,this.errorHandler),n.endDocument()}},bo.prototype={setTagName:function(e){if(!uo.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,i){if(!uo.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:i}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}};var To=io,wo=Xa.NAMESPACE,So=lo,Eo=co;function ko(e){this.options=e||{locator:{}}}function Co(){this.cdata=!1}function Io(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function xo(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function Ao(e,t,i){return"string"==typeof e?e.substr(t,i):e.length>=t+i||t?new java.lang.String(e,t,i)+"":e}function Po(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}ko.prototype.parseFromString=function(e,t){var i=this.options,n=new Eo,r=i.domBuilder||new Co,a=i.errorHandler,s=i.locator,o=i.xmlns||{},u=/\/x?html?$/.test(t),l=u?ro.HTML_ENTITIES:ro.XML_ENTITIES;return s&&r.setDocumentLocator(s),n.errorHandler=function(e,t,i){if(!e){if(t instanceof Co)return t;e=t}var n={},r=e instanceof Function;function a(t){var a=e[t];!a&&r&&(a=2==e.length?function(i){e(t,i)}:e),n[t]=a&&function(e){a("[xmldom "+t+"]\t"+e+xo(i))}||function(){}}return i=i||{},a("warning"),a("error"),a("fatalError"),n}(a,r,s),n.domBuilder=i.domBuilder||r,u&&(o[""]=wo.HTML),o.xml=o.xml||wo.XML,e&&"string"==typeof e?n.parse(e,o,l):n.errorHandler.error("invalid doc source"),r.doc},Co.prototype={startDocument:function(){this.doc=(new To).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,i,n){var r=this.doc,a=r.createElementNS(e,i||t),s=n.length;Po(this,a),this.currentElement=a,this.locator&&Io(this.locator,a);for(var o=0;o<s;o++){e=n.getURI(o);var u=n.getValue(o),l=(i=n.getQName(o),r.createAttributeNS(e,i));this.locator&&Io(n.getLocator(o),l),l.value=l.nodeValue=u,a.setAttributeNode(l)}},endElement:function(e,t,i){var n=this.currentElement;n.tagName,this.currentElement=n.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var i=this.doc.createProcessingInstruction(e,t);this.locator&&Io(this.locator,i),Po(this,i)},ignorableWhitespace:function(e,t,i){},characters:function(e,t,i){if(e=Ao.apply(this,arguments)){if(this.cdata)var n=this.doc.createCDATASection(e);else n=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n),this.locator&&Io(this.locator,n)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,i){e=Ao.apply(this,arguments);var n=this.doc.createComment(e);this.locator&&Io(this.locator,n),Po(this,n)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,i){var n=this.doc.implementation;if(n&&n.createDocumentType){var r=n.createDocumentType(e,t,i);this.locator&&Io(this.locator,r),Po(this,r),this.doc.doctype=r}},warning:function(e){console.warn("[xmldom warning]\t"+e,xo(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,xo(this.locator))},fatalError:function(e){throw new So(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){Co.prototype[e]=function(){return null}}));var Lo={__DOMHandler:Co,DOMParser:ko,DOMImplementation:io,XMLSerializer:no}.DOMParser,Do=function(e){return!!e&&"object"==typeof e},Oo=function e(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return i.reduce((function(t,i){return"object"!=typeof i||Object.keys(i).forEach((function(n){Array.isArray(t[n])&&Array.isArray(i[n])?t[n]=t[n].concat(i[n]):Do(t[n])&&Do(i[n])?t[n]=e(t[n],i[n]):t[n]=i[n]})),t}),{})},Mo=function(e){return Object.keys(e).map((function(t){return e[t]}))},Ro=function(e){return e.reduce((function(e,t){return e.concat(t)}),[])},No=function(e){if(!e.length)return[];for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},Uo=function(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return i;return-1},Bo=function(e){var t=e.baseUrl,i=void 0===t?"":t,n=e.source,r=void 0===n?"":n,a=e.range,s=void 0===a?"":a,o=e.indexRange,u=void 0===o?"":o,l={uri:r,resolvedUri:pa(i||"",r)};if(s||u){var c,d=(s||u).split("-"),h=window.BigInt?window.BigInt(d[0]):parseInt(d[0],10),p=window.BigInt?window.BigInt(d[1]):parseInt(d[1],10);h<Number.MAX_SAFE_INTEGER&&"bigint"==typeof h&&(h=Number(h)),p<Number.MAX_SAFE_INTEGER&&"bigint"==typeof p&&(p=Number(p)),"bigint"==typeof(c="bigint"==typeof p||"bigint"==typeof h?window.BigInt(p)-window.BigInt(h)+window.BigInt(1):p-h+1)&&c<Number.MAX_SAFE_INTEGER&&(c=Number(c)),l.byterange={length:c,offset:h}}return l},Fo=function(e){return e&&"number"!=typeof e&&(e=parseInt(e,10)),isNaN(e)?null:e},jo={static:function(e){var t=e.duration,i=e.timescale,n=void 0===i?1:i,r=e.sourceDuration,a=e.periodDuration,s=Fo(e.endNumber),o=t/n;return"number"==typeof s?{start:0,end:s}:"number"==typeof a?{start:0,end:a/o}:{start:0,end:r/o}},dynamic:function(e){var t=e.NOW,i=e.clientOffset,n=e.availabilityStartTime,r=e.timescale,a=void 0===r?1:r,s=e.duration,o=e.periodStart,u=void 0===o?0:o,l=e.minimumUpdatePeriod,c=void 0===l?0:l,d=e.timeShiftBufferDepth,h=void 0===d?1/0:d,p=Fo(e.endNumber),f=(t+i)/1e3,m=n+u,g=f+c-m,v=Math.ceil(g*a/s),y=Math.floor((f-m-h)*a/s),_=Math.floor((f-m)*a/s);return{start:Math.max(0,y),end:"number"==typeof p?p:Math.min(v,_)}}},Ho=function(e){var t=e.type,i=e.duration,n=e.timescale,r=void 0===n?1:n,a=e.periodDuration,s=e.sourceDuration,o=jo[t](e),u=function(e,t){for(var i=[],n=e;n<t;n++)i.push(n);return i}(o.start,o.end).map(function(e){return function(t){var i=e.duration,n=e.timescale,r=void 0===n?1:n,a=e.periodStart,s=e.startNumber;return{number:(void 0===s?1:s)+t,duration:i/r,timeline:a,time:t*i}}}(e));if("static"===t){var l=u.length-1,c="number"==typeof a?a:s;u[l].duration=c-i/r*l}return u},qo=function(e){var t=e.baseUrl,i=e.initialization,n=void 0===i?{}:i,r=e.sourceDuration,a=e.indexRange,s=void 0===a?"":a,o=e.periodStart,u=e.presentationTime,l=e.number,c=void 0===l?0:l,d=e.duration;if(!t)throw new Error("NO_BASE_URL");var h=Bo({baseUrl:t,source:n.sourceURL,range:n.range}),p=Bo({baseUrl:t,source:t,indexRange:s});if(p.map=h,d){var f=Ho(e);f.length&&(p.duration=f[0].duration,p.timeline=f[0].timeline)}else r&&(p.duration=r,p.timeline=o);return p.presentationTime=u||o,p.number=c,[p]},Vo=function(e,t,i){var n,r=e.sidx.map?e.sidx.map:null,a=e.sidx.duration,s=e.timeline||0,o=e.sidx.byterange,u=o.offset+o.length,l=t.timescale,c=t.references.filter((function(e){return 1!==e.referenceType})),d=[],h=e.endList?"static":"dynamic",p=e.sidx.timeline,f=p,m=e.mediaSequence||0;n="bigint"==typeof t.firstOffset?window.BigInt(u)+t.firstOffset:u+t.firstOffset;for(var g=0;g<c.length;g++){var v,y=t.references[g],_=y.referencedSize,b=y.subsegmentDuration;v="bigint"==typeof n?n+window.BigInt(_)-window.BigInt(1):n+_-1;var T=qo({baseUrl:i,timescale:l,timeline:s,periodStart:p,presentationTime:f,number:m,duration:b,sourceDuration:a,indexRange:n+"-"+v,type:h})[0];r&&(T.map=r),d.push(T),n+="bigint"==typeof n?window.BigInt(_):_,f+=b/l,m++}return e.segments=d,e},Wo=["AUDIO","SUBTITLES"],Go=function(e){return(t=e,i=function(e){return e.timeline},Mo(t.reduce((function(e,t){return t.forEach((function(t){e[i(t)]=t})),e}),{}))).sort((function(e,t){return e.timeline>t.timeline?1:-1}));var t,i},zo=function(e){var t,i,n=[];return t=e,i=function(e,t,i,r){n=n.concat(e.playlists||[])},Wo.forEach((function(e){for(var n in t.mediaGroups[e])for(var r in t.mediaGroups[e][n]){var a=t.mediaGroups[e][n][r];i(a)}})),n},Xo=function(e){var t=e.playlist,i=e.mediaSequence;t.mediaSequence=i,t.segments.forEach((function(e,i){e.number=t.mediaSequence+i}))},Ko=function(e){return e&&e.uri+"-"+(i="bigint"==typeof(t=e.byterange).offset||"bigint"==typeof t.length?window.BigInt(t.offset)+window.BigInt(t.length)-window.BigInt(1):t.offset+t.length-1,t.offset+"-"+i);var t,i},Yo=function(e){return Mo(e.reduce((function(e,t){var i,n=t.attributes.id+(t.attributes.lang||"");e[n]?(t.segments&&(t.segments[0]&&(t.segments[0].discontinuity=!0),(i=e[n].segments).push.apply(i,t.segments)),t.attributes.contentProtection&&(e[n].attributes.contentProtection=t.attributes.contentProtection)):(e[n]=t,e[n].attributes.timelineStarts=[]);return e[n].attributes.timelineStarts.push({start:t.attributes.periodStart,timeline:t.attributes.periodStart}),e}),{})).map((function(e){var t;return e.discontinuityStarts=(t=e.segments||[],"discontinuity",t.reduce((function(e,t,i){return t.discontinuity&&e.push(i),e}),[])),e}))},Qo=function(e,t){var i=Ko(e.sidx),n=i&&t[i]&&t[i].sidx;return n&&Vo(e,n,e.sidx.resolvedUri),e},$o=function(e,t){if(void 0===t&&(t={}),!Object.keys(t).length)return e;for(var i in e)e[i]=Qo(e[i],t);return e},Jo=function(e){var t,i=e.attributes,n=e.segments,r=e.sidx,a=e.discontinuityStarts,s={attributes:(t={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},t["PROGRAM-ID"]=1,t),uri:"",endList:"static"===i.type,timeline:i.periodStart,resolvedUri:"",targetDuration:i.duration,discontinuityStarts:a,timelineStarts:i.timelineStarts,segments:n};return i.contentProtection&&(s.contentProtection=i.contentProtection),r&&(s.sidx=r),s},Zo=function(e){var t=e.attributes;return"video/mp4"===t.mimeType||"video/webm"===t.mimeType||"video"===t.contentType},eu=function(e){var t=e.attributes;return"audio/mp4"===t.mimeType||"audio/webm"===t.mimeType||"audio"===t.contentType},tu=function(e){var t=e.attributes;return"text/vtt"===t.mimeType||"text"===t.contentType},iu=function(e){return e?Object.keys(e).reduce((function(t,i){var n=e[i];return t.concat(n.playlists)}),[]):[]},nu=function(e){var t,i=e.dashPlaylists,n=e.locations,r=e.sidxMapping,a=void 0===r?{}:r,s=e.previousManifest;if(!i.length)return{};var o=i[0].attributes,u=o.sourceDuration,l=o.type,c=o.suggestedPresentationDelay,d=o.minimumUpdatePeriod,h=Yo(i.filter(Zo)).map(Jo),p=Yo(i.filter(eu)),f=Yo(i.filter(tu)),m=i.map((function(e){return e.attributes.captionServices})).filter(Boolean),g={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(t={AUDIO:{},VIDEO:{}},t["CLOSED-CAPTIONS"]={},t.SUBTITLES={},t),uri:"",duration:u,playlists:$o(h,a)};d>=0&&(g.minimumUpdatePeriod=1e3*d),n&&(g.locations=n),"dynamic"===l&&(g.suggestedPresentationDelay=c);var v,y,_,b,T,w,S,E=0===g.playlists.length,k=p.length?function(e,t,i){var n;void 0===t&&(t={}),void 0===i&&(i=!1);var r=e.reduce((function(e,r){var a=r.attributes.role&&r.attributes.role.value||"",s=r.attributes.lang||"",o=r.attributes.label||"main";if(s&&!r.attributes.label){var u=a?" ("+a+")":"";o=""+r.attributes.lang+u}e[o]||(e[o]={language:s,autoselect:!0,default:"main"===a,playlists:[],uri:""});var l=Qo(function(e,t){var i,n=e.attributes,r=e.segments,a=e.sidx,s=e.mediaSequence,o=e.discontinuitySequence,u=e.discontinuityStarts,l={attributes:(i={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},i["PROGRAM-ID"]=1,i),uri:"",endList:"static"===n.type,timeline:n.periodStart,resolvedUri:"",targetDuration:n.duration,discontinuitySequence:o,discontinuityStarts:u,timelineStarts:n.timelineStarts,mediaSequence:s,segments:r};return n.contentProtection&&(l.contentProtection=n.contentProtection),a&&(l.sidx=a),t&&(l.attributes.AUDIO="audio",l.attributes.SUBTITLES="subs"),l}(r,i),t);return e[o].playlists.push(l),void 0===n&&"main"===a&&((n=r).default=!0),e}),{});return n||(r[Object.keys(r)[0]].default=!0),r}(p,a,E):null,C=f.length?function(e,t){return void 0===t&&(t={}),e.reduce((function(e,i){var n=i.attributes.lang||"text";return e[n]||(e[n]={language:n,default:!1,autoselect:!1,playlists:[],uri:""}),e[n].playlists.push(Qo(function(e){var t,i=e.attributes,n=e.segments,r=e.mediaSequence,a=e.discontinuityStarts,s=e.discontinuitySequence;void 0===n&&(n=[{uri:i.baseUrl,timeline:i.periodStart,resolvedUri:i.baseUrl||"",duration:i.sourceDuration,number:0}],i.duration=i.sourceDuration);var o=((t={NAME:i.id,BANDWIDTH:i.bandwidth})["PROGRAM-ID"]=1,t);return i.codecs&&(o.CODECS=i.codecs),{attributes:o,uri:"",endList:"static"===i.type,timeline:i.periodStart,resolvedUri:i.baseUrl||"",targetDuration:i.duration,timelineStarts:i.timelineStarts,discontinuityStarts:a,discontinuitySequence:s,mediaSequence:r,segments:n}}(i),t)),e}),{})}(f,a):null,I=h.concat(iu(k),iu(C)),x=I.map((function(e){return e.timelineStarts}));return g.timelineStarts=Go(x),v=I,y=g.timelineStarts,v.forEach((function(e){e.mediaSequence=0,e.discontinuitySequence=Uo(y,(function(t){return t.timeline===e.timeline})),e.segments&&e.segments.forEach((function(e,t){e.number=t}))})),k&&(g.mediaGroups.AUDIO.audio=k),C&&(g.mediaGroups.SUBTITLES.subs=C),m.length&&(g.mediaGroups["CLOSED-CAPTIONS"].cc=m.reduce((function(e,t){return t?(t.forEach((function(t){var i=t.channel,n=t.language;e[n]={autoselect:!1,default:!1,instreamId:i,language:n},t.hasOwnProperty("aspectRatio")&&(e[n].aspectRatio=t.aspectRatio),t.hasOwnProperty("easyReader")&&(e[n].easyReader=t.easyReader),t.hasOwnProperty("3D")&&(e[n]["3D"]=t["3D"])})),e):e}),{})),s?(b=(_={oldManifest:s,newManifest:g}).oldManifest,T=_.newManifest,w=b.playlists.concat(zo(b)),S=T.playlists.concat(zo(T)),T.timelineStarts=Go([b.timelineStarts,T.timelineStarts]),function(e){var t=e.oldPlaylists,i=e.timelineStarts;e.newPlaylists.forEach((function(e){e.discontinuitySequence=Uo(i,(function(t){return t.timeline===e.timeline}));var n=function(e,t){for(var i=0;i<e.length;i++)if(e[i].attributes.NAME===t)return e[i];return null}(t,e.attributes.NAME);if(n&&!e.sidx){var r=e.segments[0],a=Uo(n.segments,(function(e){return Math.abs(e.presentationTime-r.presentationTime)<.016666666666666666}));if(-1===a)return Xo({playlist:e,mediaSequence:n.mediaSequence+n.segments.length}),e.segments[0].discontinuity=!0,e.discontinuityStarts.unshift(0),void((!n.segments.length&&e.timeline>n.timeline||n.segments.length&&e.timeline>n.segments[n.segments.length-1].timeline)&&e.discontinuitySequence--);n.segments[a].discontinuity&&!r.discontinuity&&(r.discontinuity=!0,e.discontinuityStarts.unshift(0),e.discontinuitySequence--),Xo({playlist:e,mediaSequence:n.segments[a].number})}}))}({oldPlaylists:w,newPlaylists:S,timelineStarts:T.timelineStarts}),T):g},ru=function(e,t,i){var n=e.NOW,r=e.clientOffset,a=e.availabilityStartTime,s=e.timescale,o=void 0===s?1:s,u=e.periodStart,l=void 0===u?0:u,c=e.minimumUpdatePeriod,d=(n+r)/1e3+(void 0===c?0:c)-(a+l);return Math.ceil((d*o-t)/i)},au=function(e,t){for(var i=e.type,n=e.minimumUpdatePeriod,r=void 0===n?0:n,a=e.media,s=void 0===a?"":a,o=e.sourceDuration,u=e.timescale,l=void 0===u?1:u,c=e.startNumber,d=void 0===c?1:c,h=e.periodStart,p=[],f=-1,m=0;m<t.length;m++){var g=t[m],v=g.d,y=g.r||0,_=g.t||0;f<0&&(f=_),_&&_>f&&(f=_);var b=void 0;if(y<0){var T=m+1;b=T===t.length?"dynamic"===i&&r>0&&s.indexOf("$Number$")>0?ru(e,f,v):(o*l-f)/v:(t[T].t-f)/v}else b=y+1;for(var w=d+p.length+b,S=d+p.length;S<w;)p.push({number:S,duration:v/l,time:f,timeline:h}),f+=v,S++}return p},su=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,ou=function(e,t){return e.replace(su,function(e){return function(t,i,n,r){if("$$"===t)return"$";if(void 0===e[i])return t;var a=""+e[i];return"RepresentationID"===i?a:(r=n?parseInt(r,10):1,a.length>=r?a:""+new Array(r-a.length+1).join("0")+a)}}(t))},uu=function(e,t){var i={RepresentationID:e.id,Bandwidth:e.bandwidth||0},n=e.initialization,r=void 0===n?{sourceURL:"",range:""}:n,a=Bo({baseUrl:e.baseUrl,source:ou(r.sourceURL,i),range:r.range});return function(e,t){return e.duration||t?e.duration?Ho(e):au(e,t):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodStart}]}(e,t).map((function(t){i.Number=t.number,i.Time=t.time;var n=ou(e.media||"",i),r=e.timescale||1,s=e.presentationTimeOffset||0,o=e.periodStart+(t.time-s)/r;return{uri:n,timeline:t.timeline,duration:t.duration,resolvedUri:pa(e.baseUrl||"",n),map:a,number:t.number,presentationTime:o}}))},lu=function(e,t){var i=e.duration,n=e.segmentUrls,r=void 0===n?[]:n,a=e.periodStart;if(!i&&!t||i&&t)throw new Error("SEGMENT_TIME_UNSPECIFIED");var s,o=r.map((function(t){return function(e,t){var i=e.baseUrl,n=e.initialization,r=void 0===n?{}:n,a=Bo({baseUrl:i,source:r.sourceURL,range:r.range}),s=Bo({baseUrl:i,source:t.media,range:t.mediaRange});return s.map=a,s}(e,t)}));return i&&(s=Ho(e)),t&&(s=au(e,t)),s.map((function(t,i){if(o[i]){var n=o[i],r=e.timescale||1,s=e.presentationTimeOffset||0;return n.timeline=t.timeline,n.duration=t.duration,n.number=t.number,n.presentationTime=a+(t.time-s)/r,n}})).filter((function(e){return e}))},cu=function(e){var t,i,n=e.attributes,r=e.segmentInfo;r.template?(i=uu,t=Oo(n,r.template)):r.base?(i=qo,t=Oo(n,r.base)):r.list&&(i=lu,t=Oo(n,r.list));var a={attributes:n};if(!i)return a;var s=i(t,r.segmentTimeline);if(t.duration){var o=t,u=o.duration,l=o.timescale,c=void 0===l?1:l;t.duration=u/c}else s.length?t.duration=s.reduce((function(e,t){return Math.max(e,Math.ceil(t.duration))}),0):t.duration=0;return a.attributes=t,a.segments=s,r.base&&t.indexRange&&(a.sidx=s[0],a.segments=[]),a},du=function(e,t){return No(e.childNodes).filter((function(e){return e.tagName===t}))},hu=function(e){return e.textContent.trim()},pu=function(e){var t=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);if(!t)return 0;var i=t.slice(1),n=i[0],r=i[1],a=i[2],s=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(n||0)+2592e3*parseFloat(r||0)+86400*parseFloat(a||0)+3600*parseFloat(s||0)+60*parseFloat(o||0)+parseFloat(u||0)},fu={mediaPresentationDuration:function(e){return pu(e)},availabilityStartTime:function(e){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t=e)&&(t+="Z"),Date.parse(t)/1e3;var t},minimumUpdatePeriod:function(e){return pu(e)},suggestedPresentationDelay:function(e){return pu(e)},type:function(e){return e},timeShiftBufferDepth:function(e){return pu(e)},start:function(e){return pu(e)},width:function(e){return parseInt(e,10)},height:function(e){return parseInt(e,10)},bandwidth:function(e){return parseInt(e,10)},startNumber:function(e){return parseInt(e,10)},timescale:function(e){return parseInt(e,10)},presentationTimeOffset:function(e){return parseInt(e,10)},duration:function(e){var t=parseInt(e,10);return isNaN(t)?pu(e):t},d:function(e){return parseInt(e,10)},t:function(e){return parseInt(e,10)},r:function(e){return parseInt(e,10)},DEFAULT:function(e){return e}},mu=function(e){return e&&e.attributes?No(e.attributes).reduce((function(e,t){var i=fu[t.name]||fu.DEFAULT;return e[t.name]=i(t.value),e}),{}):{}},gu={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},vu=function(e,t){return t.length?Ro(e.map((function(e){return t.map((function(t){return pa(e,hu(t))}))}))):e},yu=function(e){var t=du(e,"SegmentTemplate")[0],i=du(e,"SegmentList")[0],n=i&&du(i,"SegmentURL").map((function(e){return Oo({tag:"SegmentURL"},mu(e))})),r=du(e,"SegmentBase")[0],a=i||t,s=a&&du(a,"SegmentTimeline")[0],o=i||r||t,u=o&&du(o,"Initialization")[0],l=t&&mu(t);l&&u?l.initialization=u&&mu(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,segmentTimeline:s&&du(s,"S").map((function(e){return mu(e)})),list:i&&Oo(mu(i),{segmentUrls:n,initialization:mu(u)}),base:r&&Oo(mu(r),{initialization:mu(u)})};return Object.keys(c).forEach((function(e){c[e]||delete c[e]})),c},_u=function(e,t){return function(i,n){var r=vu(t,du(i.node,"BaseURL")),a=Oo(e,{periodStart:i.attributes.start});"number"==typeof i.attributes.duration&&(a.periodDuration=i.attributes.duration);var s=du(i.node,"AdaptationSet"),o=yu(i.node);return Ro(s.map(function(e,t,i){return function(n){var r,a=mu(n),s=vu(t,du(n,"BaseURL")),o=du(n,"Role")[0],u={role:mu(o)},l=Oo(e,a,u),c=du(n,"Accessibility")[0],d="urn:scte:dash:cc:cea-608:2015"===(r=mu(c)).schemeIdUri?("string"!=typeof r.value?[]:r.value.split(";")).map((function(e){var t,i;if(i=e,/^CC\d=/.test(e)){var n=e.split("=");t=n[0],i=n[1]}else/^CC\d$/.test(e)&&(t=e);return{channel:t,language:i}})):"urn:scte:dash:cc:cea-708:2015"===r.schemeIdUri?("string"!=typeof r.value?[]:r.value.split(";")).map((function(e){var t={channel:void 0,language:void 0,aspectRatio:1,easyReader:0,"3D":0};if(/=/.test(e)){var i=e.split("="),n=i[0],r=i[1],a=void 0===r?"":r;t.channel=n,t.language=e,a.split(",").forEach((function(e){var i=e.split(":"),n=i[0],r=i[1];"lang"===n?t.language=r:"er"===n?t.easyReader=Number(r):"war"===n?t.aspectRatio=Number(r):"3D"===n&&(t["3D"]=Number(r))}))}else t.language=e;return t.channel&&(t.channel="SERVICE"+t.channel),t})):void 0;d&&(l=Oo(l,{captionServices:d}));var h=du(n,"Label")[0];if(h&&h.childNodes.length){var p=h.childNodes[0].nodeValue.trim();l=Oo(l,{label:p})}var f=du(n,"ContentProtection").reduce((function(e,t){var i=mu(t);i.schemeIdUri&&(i.schemeIdUri=i.schemeIdUri.toLowerCase());var n=gu[i.schemeIdUri];if(n){e[n]={attributes:i};var r=du(t,"cenc:pssh")[0];if(r){var a=hu(r);e[n].pssh=a&&ma(a)}}return e}),{});Object.keys(f).length&&(l=Oo(l,{contentProtection:f}));var m=yu(n),g=du(n,"Representation"),v=Oo(i,m);return Ro(g.map(function(e,t,i){return function(n){var r=du(n,"BaseURL"),a=vu(t,r),s=Oo(e,mu(n)),o=yu(n);return a.map((function(e){return{segmentInfo:Oo(i,o),attributes:Oo(s,{baseUrl:e})}}))}}(l,s,v)))}}(a,r,o)))}},bu=function(e){if(""===e)throw new Error("DASH_EMPTY_MANIFEST");var t,i,n=new Lo;try{i=(t=n.parseFromString(e,"application/xml"))&&"MPD"===t.documentElement.tagName?t.documentElement:null}catch(e){}if(!i||i&&i.getElementsByTagName("parsererror").length>0)throw new Error("DASH_INVALID_XML");return i},Tu=Math.pow(2,32),wu=function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength);return i.getBigUint64?(t=i.getBigUint64(0))<Number.MAX_SAFE_INTEGER?Number(t):t:i.getUint32(0)*Tu+i.getUint32(4)},Su=Ba([73,68,51]),Eu=function e(t,i){return void 0===i&&(i=0),(t=Ba(t)).length-i<10||!Va(t,Su,{offset:i})?i:(i+=function(e,t){void 0===t&&(t=0);var i=(e=Ba(e))[t+5],n=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9];return(16&i)>>4?n+20:n+10}(t,i),e(t,i))},ku=function(e){return"string"==typeof e?qa(e):e},Cu=function e(t,i,n){void 0===n&&(n=!1),i=function(e){return Array.isArray(e)?e.map((function(e){return ku(e)})):[ku(e)]}(i),t=Ba(t);var r=[];if(!i.length)return r;for(var a=0;a<t.length;){var s=(t[a]<<24|t[a+1]<<16|t[a+2]<<8|t[a+3])>>>0,o=t.subarray(a+4,a+8);if(0===s)break;var u=a+s;if(u>t.length){if(n)break;u=t.length}var l=t.subarray(a+8,u);Va(o,i[0])&&(1===i.length?r.push(l):r.push.apply(r,e(l,i.slice(1),n))),a=u}return r},Iu={EBML:Ba([26,69,223,163]),DocType:Ba([66,130]),Segment:Ba([24,83,128,103]),SegmentInfo:Ba([21,73,169,102]),Tracks:Ba([22,84,174,107]),Track:Ba([174]),TrackNumber:Ba([215]),DefaultDuration:Ba([35,227,131]),TrackEntry:Ba([174]),TrackType:Ba([131]),FlagDefault:Ba([136]),CodecID:Ba([134]),CodecPrivate:Ba([99,162]),VideoTrack:Ba([224]),AudioTrack:Ba([225]),Cluster:Ba([31,67,182,117]),Timestamp:Ba([231]),TimestampScale:Ba([42,215,177]),BlockGroup:Ba([160]),BlockDuration:Ba([155]),Block:Ba([161]),SimpleBlock:Ba([163])},xu=[128,64,32,16,8,4,2,1],Au=function(e,t,i,n){void 0===i&&(i=!0),void 0===n&&(n=!1);var r=function(e){for(var t=1,i=0;i<xu.length&&!(e&xu[i]);i++)t++;return t}(e[t]),a=e.subarray(t,t+r);return i&&((a=Array.prototype.slice.call(e,t,t+r))[0]^=xu[r-1]),{length:r,value:Ha(a,{signed:n}),bytes:a}},Pu=function e(t){return"string"==typeof t?t.match(/.{1,2}/g).map((function(t){return e(t)})):"number"==typeof t?function(e,t){var i=(void 0===t?{}:t).le,n=void 0!==i&&i;("bigint"!=typeof e&&"number"!=typeof e||"number"==typeof e&&e!=e)&&(e=0);for(var r,a=(r=e=Fa(e),Math.ceil(function(e){return e.toString(2).length}(r)/8)),s=new Uint8Array(new ArrayBuffer(a)),o=0;o<a;o++){var u=n?o:Math.abs(o+1-s.length);s[u]=Number(e/ja[o]&Fa(255)),e<0&&(s[u]=Math.abs(~s[u]),s[u]-=0===o?1:2)}return s}(t):t},Lu=function e(t,i,n){if(n>=i.length)return i.length;var r=Au(i,n,!1);if(Va(t.bytes,r.bytes))return n;var a=Au(i,n+r.length);return e(t,i,n+a.length+a.value+r.length)},Du=function e(t,i){i=function(e){return Array.isArray(e)?e.map((function(e){return Pu(e)})):[Pu(e)]}(i),t=Ba(t);var n=[];if(!i.length)return n;for(var r=0;r<t.length;){var a=Au(t,r,!1),s=Au(t,r+a.length),o=r+a.length+s.length;127===s.value&&(s.value=Lu(a,t,o),s.value!==t.length&&(s.value-=o));var u=o+s.value>t.length?t.length:o+s.value,l=t.subarray(o,u);Va(i[0],a.bytes)&&(1===i.length?n.push(l):n=n.concat(e(l,i.slice(1)))),r+=a.length+s.length+l.length}return n},Ou=Ba([0,0,0,1]),Mu=Ba([0,0,1]),Ru=Ba([0,0,3]),Nu=function(e){for(var t=[],i=1;i<e.length-2;)Va(e.subarray(i,i+3),Ru)&&(t.push(i+2),i++),i++;if(0===t.length)return e;var n=e.length-t.length,r=new Uint8Array(n),a=0;for(i=0;i<n;a++,i++)a===t[0]&&(a++,t.shift()),r[i]=e[a];return r},Uu=function(e,t,i,n){void 0===n&&(n=1/0),e=Ba(e),i=[].concat(i);for(var r,a=0,s=0;a<e.length&&(s<n||r);){var o=void 0;if(Va(e.subarray(a),Ou)?o=4:Va(e.subarray(a),Mu)&&(o=3),o){if(s++,r)return Nu(e.subarray(r,a));var u=void 0;"h264"===t?u=31&e[a+o]:"h265"===t&&(u=e[a+o]>>1&63),-1!==i.indexOf(u)&&(r=a+o),a+=o+("h264"===t?1:2)}else a++}return e.subarray(0,0)},Bu={webm:Ba([119,101,98,109]),matroska:Ba([109,97,116,114,111,115,107,97]),flac:Ba([102,76,97,67]),ogg:Ba([79,103,103,83]),ac3:Ba([11,119]),riff:Ba([82,73,70,70]),avi:Ba([65,86,73]),wav:Ba([87,65,86,69]),"3gp":Ba([102,116,121,112,51,103]),mp4:Ba([102,116,121,112]),fmp4:Ba([115,116,121,112]),mov:Ba([102,116,121,112,113,116]),moov:Ba([109,111,111,118]),moof:Ba([109,111,111,102])},Fu={aac:function(e){var t=Eu(e);return Va(e,[255,16],{offset:t,mask:[255,22]})},mp3:function(e){var t=Eu(e);return Va(e,[255,2],{offset:t,mask:[255,6]})},webm:function(e){var t=Du(e,[Iu.EBML,Iu.DocType])[0];return Va(t,Bu.webm)},mkv:function(e){var t=Du(e,[Iu.EBML,Iu.DocType])[0];return Va(t,Bu.matroska)},mp4:function(e){return!Fu["3gp"](e)&&!Fu.mov(e)&&(!(!Va(e,Bu.mp4,{offset:4})&&!Va(e,Bu.fmp4,{offset:4}))||!(!Va(e,Bu.moof,{offset:4})&&!Va(e,Bu.moov,{offset:4}))||void 0)},mov:function(e){return Va(e,Bu.mov,{offset:4})},"3gp":function(e){return Va(e,Bu["3gp"],{offset:4})},ac3:function(e){var t=Eu(e);return Va(e,Bu.ac3,{offset:t})},ts:function(e){if(e.length<189&&e.length>=1)return 71===e[0];for(var t=0;t+188<e.length&&t<188;){if(71===e[t]&&71===e[t+188])return!0;t+=1}return!1},flac:function(e){var t=Eu(e);return Va(e,Bu.flac,{offset:t})},ogg:function(e){return Va(e,Bu.ogg)},avi:function(e){return Va(e,Bu.riff)&&Va(e,Bu.avi,{offset:8})},wav:function(e){return Va(e,Bu.riff)&&Va(e,Bu.wav,{offset:8})},h264:function(e){return function(e,t,i){return Uu(e,"h264",7,3)}(e).length},h265:function(e){return function(e,t,i){return Uu(e,"h265",[32,33],3)}(e).length}},ju=Object.keys(Fu).filter((function(e){return"ts"!==e&&"h264"!==e&&"h265"!==e})).concat(["ts","h264","h265"]);ju.forEach((function(e){var t=Fu[e];Fu[e]=function(e){return t(Ba(e))}}));var Hu=Fu,qu=function(e){e=Ba(e);for(var t=0;t<ju.length;t++){var i=ju[t];if(Hu[i](e))return i}return""},Vu=9e4;var Wu=Vu,Gu=pa,zu=function(e,t,i){return e&&i&&i.responseURL&&t!==i.responseURL?i.responseURL:t},Xu=function(e){return ua.log.debug?ua.log.debug.bind(ua,"VHS:",e+" >"):function(){}},Ku=1/30,Yu=.1,Qu=function(e,t){var i,n=[];if(e&&e.length)for(i=0;i<e.length;i++)t(e.start(i),e.end(i))&&n.push([e.start(i),e.end(i)]);return ua.createTimeRanges(n)},$u=function(e,t){return Qu(e,(function(e,i){return e-Yu<=t&&i+Yu>=t}))},Ju=function(e,t){return Qu(e,(function(e){return e-Ku>=t}))},Zu=function(e){var t=[];if(!e||!e.length)return"";for(var i=0;i<e.length;i++)t.push(e.start(i)+" => "+e.end(i));return t.join(", ")},el=function(e){for(var t=[],i=0;i<e.length;i++)t.push({start:e.start(i),end:e.end(i)});return t},tl=function(e){if(e&&e.length&&e.end)return e.end(e.length-1)},il=function(e,t){var i=0;if(!e||!e.length)return i;for(var n=0;n<e.length;n++){var r=e.start(n),a=e.end(n);t>a||(i+=t>r&&t<=a?a-t:a-r)}return i},nl=ua.createTimeRange,rl=function(e,t){if(!t.preload)return t.duration;var i=0;return(t.parts||[]).forEach((function(e){i+=e.duration})),(t.preloadHints||[]).forEach((function(t){"PART"===t.type&&(i+=e.partTargetDuration)})),i},al=function(e){return(e.segments||[]).reduce((function(e,t,i){return t.parts?t.parts.forEach((function(n,r){e.push({duration:n.duration,segmentIndex:i,partIndex:r,part:n,segment:t})})):e.push({duration:t.duration,segmentIndex:i,partIndex:null,segment:t,part:null}),e}),[])},sl=function(e){var t=e.segments&&e.segments.length&&e.segments[e.segments.length-1];return t&&t.parts||[]},ol=function(e){var t=e.preloadSegment;if(t){var i=t.parts;return(t.preloadHints||[]).reduce((function(e,t){return e+("PART"===t.type?1:0)}),0)+(i&&i.length?i.length:0)}},ul=function(e,t){if(t.endList)return 0;if(e&&e.suggestedPresentationDelay)return e.suggestedPresentationDelay;var i=sl(t).length>0;return i&&t.serverControl&&t.serverControl.partHoldBack?t.serverControl.partHoldBack:i&&t.partTargetDuration?3*t.partTargetDuration:t.serverControl&&t.serverControl.holdBack?t.serverControl.holdBack:t.targetDuration?3*t.targetDuration:0},ll=function(e,t,i){if(void 0===t&&(t=e.mediaSequence+e.segments.length),t<e.mediaSequence)return 0;var n=function(e,t){var i=0,n=t-e.mediaSequence,r=e.segments[n];if(r){if(void 0!==r.start)return{result:r.start,precise:!0};if(void 0!==r.end)return{result:r.end-r.duration,precise:!0}}for(;n--;){if(void 0!==(r=e.segments[n]).end)return{result:i+r.end,precise:!0};if(i+=rl(e,r),void 0!==r.start)return{result:i+r.start,precise:!0}}return{result:i,precise:!1}}(e,t);if(n.precise)return n.result;var r=function(e,t){for(var i,n=0,r=t-e.mediaSequence;r<e.segments.length;r++){if(void 0!==(i=e.segments[r]).start)return{result:i.start-n,precise:!0};if(n+=rl(e,i),void 0!==i.end)return{result:i.end-n,precise:!0}}return{result:-1,precise:!1}}(e,t);return r.precise?r.result:n.result+i},cl=function(e,t,i){if(!e)return 0;if("number"!=typeof i&&(i=0),void 0===t){if(e.totalDuration)return e.totalDuration;if(!e.endList)return window.Infinity}return ll(e,t,i)},dl=function(e){var t=e.defaultDuration,i=e.durationList,n=e.startIndex,r=e.endIndex,a=0;if(n>r){var s=[r,n];n=s[0],r=s[1]}if(n<0){for(var o=n;o<Math.min(0,r);o++)a+=t;n=0}for(var u=n;u<r;u++)a+=i[u].duration;return a},hl=function(e,t,i,n){if(!e||!e.segments)return null;if(e.endList)return cl(e);if(null===t)return null;t=t||0;var r=ll(e,e.mediaSequence+e.segments.length,t);return i&&(r-=n="number"==typeof n?n:ul(null,e)),Math.max(0,r)},pl=function(e){return e.excludeUntil&&e.excludeUntil>Date.now()},fl=function(e){return e.excludeUntil&&e.excludeUntil===1/0},ml=function(e){var t=pl(e);return!e.disabled&&!t},gl=function(e,t){return t.attributes&&t.attributes[e]},vl=function(e,t){if(1===e.playlists.length)return!0;var i=t.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===e.playlists.filter((function(e){return!!ml(e)&&(e.attributes.BANDWIDTH||0)<i})).length},yl=function(e,t){return!(!e&&!t||!e&&t||e&&!t||e!==t&&(!e.id||!t.id||e.id!==t.id)&&(!e.resolvedUri||!t.resolvedUri||e.resolvedUri!==t.resolvedUri)&&(!e.uri||!t.uri||e.uri!==t.uri))},_l=function(e,t){var i=e&&e.mediaGroups&&e.mediaGroups.AUDIO||{},n=!1;for(var r in i){for(var a in i[r])if(n=t(i[r][a]))break;if(n)break}return!!n},bl=function(e){if(!e||!e.playlists||!e.playlists.length)return _l(e,(function(e){return e.playlists&&e.playlists.length||e.uri}));for(var t=function(t){var i=e.playlists[t],n=i.attributes&&i.attributes.CODECS;return n&&n.split(",").every((function(e){return Aa(e)}))||_l(e,(function(e){return yl(i,e)}))?"continue":{v:!1}},i=0;i<e.playlists.length;i++){var n=t(i);if("continue"!==n&&"object"==typeof n)return n.v}return!0},Tl={liveEdgeDelay:ul,duration:cl,seekable:function(e,t,i){var n=t||0,r=hl(e,t,!0,i);return null===r?nl():nl(n,r)},getMediaInfoForTime:function(e){for(var t=e.playlist,i=e.currentTime,n=e.startingSegmentIndex,r=e.startingPartIndex,a=e.startTime,s=e.experimentalExactManifestTimings,o=i-a,u=al(t),l=0,c=0;c<u.length;c++){var d=u[c];if(n===d.segmentIndex&&("number"!=typeof r||"number"!=typeof d.partIndex||r===d.partIndex)){l=c;break}}if(o<0){if(l>0)for(var h=l-1;h>=0;h--){var p=u[h];if(o+=p.duration,s){if(o<0)continue}else if(o+Ku<=0)continue;return{partIndex:p.partIndex,segmentIndex:p.segmentIndex,startTime:a-dl({defaultDuration:t.targetDuration,durationList:u,startIndex:l,endIndex:h})}}return{partIndex:u[0]&&u[0].partIndex||null,segmentIndex:u[0]&&u[0].segmentIndex||0,startTime:i}}if(l<0){for(var f=l;f<0;f++)if((o-=t.targetDuration)<0)return{partIndex:u[0]&&u[0].partIndex||null,segmentIndex:u[0]&&u[0].segmentIndex||0,startTime:i};l=0}for(var m=l;m<u.length;m++){var g=u[m];if(o-=g.duration,s){if(o>0)continue}else if(o-Ku>=0)continue;return{partIndex:g.partIndex,segmentIndex:g.segmentIndex,startTime:a+dl({defaultDuration:t.targetDuration,durationList:u,startIndex:l,endIndex:m})}}return{segmentIndex:u[u.length-1].segmentIndex,partIndex:u[u.length-1].partIndex,startTime:i}},isEnabled:ml,isDisabled:function(e){return e.disabled},isBlacklisted:pl,isIncompatible:fl,playlistEnd:hl,isAes:function(e){for(var t=0;t<e.segments.length;t++)if(e.segments[t].key)return!0;return!1},hasAttribute:gl,estimateSegmentRequestTime:function(e,t,i,n){return void 0===n&&(n=0),gl("BANDWIDTH",i)?(e*i.attributes.BANDWIDTH-8*n)/t:NaN},isLowestEnabledRendition:vl,isAudioOnly:bl,playlistMatch:yl,segmentDurationWithParts:rl},wl=ua.log,Sl=function(e,t){return e+"-"+t},El=function(e,t){e.mediaGroups&&["AUDIO","SUBTITLES"].forEach((function(i){if(e.mediaGroups[i])for(var n in e.mediaGroups[i])for(var r in e.mediaGroups[i][n]){var a=e.mediaGroups[i][n][r];t(a,i,n,r)}}))},kl=function(e){var t=e.playlist,i=e.uri,n=e.id;t.id=n,t.playlistErrors_=0,i&&(t.uri=i),t.attributes=t.attributes||{}},Cl=function(e,t){e.uri=t;for(var i=0;i<e.playlists.length;i++)if(!e.playlists[i].uri){var n="placeholder-uri-"+i;e.playlists[i].uri=n}var r=bl(e);El(e,(function(t,i,n,a){var s="placeholder-uri-"+i+"-"+n+"-"+a;if(!t.playlists||!t.playlists.length){if(r&&"AUDIO"===i&&!t.uri)for(var o=0;o<e.playlists.length;o++){var u=e.playlists[o];if(u.attributes&&u.attributes.AUDIO&&u.attributes.AUDIO===n)return}t.playlists=[m({},t)]}t.playlists.forEach((function(t,i){var n=Sl(i,s);t.uri?t.resolvedUri=t.resolvedUri||Gu(e.uri,t.uri):(t.uri=0===i?s:n,t.resolvedUri=t.uri),t.id=t.id||n,t.attributes=t.attributes||{},e.playlists[t.id]=t,e.playlists[t.uri]=t}))})),function(e){for(var t=e.playlists.length;t--;){var i=e.playlists[t];kl({playlist:i,id:Sl(t,i.uri)}),i.resolvedUri=Gu(e.uri,i.uri),e.playlists[i.id]=i,e.playlists[i.uri]=i,i.attributes.BANDWIDTH||wl.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")}}(e),function(e){El(e,(function(t){t.uri&&(t.resolvedUri=Gu(e.uri,t.uri))}))}(e)},Il=ua.mergeOptions,xl=ua.EventTarget,Al=function(e,t){if(!e)return t;var i=Il(e,t);if(e.preloadHints&&!t.preloadHints&&delete i.preloadHints,e.parts&&!t.parts)delete i.parts;else if(e.parts&&t.parts)for(var n=0;n<t.parts.length;n++)e.parts&&e.parts[n]&&(i.parts[n]=Il(e.parts[n],t.parts[n]));return!e.skipped&&t.skipped&&(i.skipped=!1),e.preload&&!t.preload&&(i.preload=!1),i},Pl=function(e,t){!e.resolvedUri&&e.uri&&(e.resolvedUri=Gu(t,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Gu(t,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Gu(t,e.map.uri)),e.map&&e.map.key&&!e.map.key.resolvedUri&&(e.map.key.resolvedUri=Gu(t,e.map.key.uri)),e.parts&&e.parts.length&&e.parts.forEach((function(e){e.resolvedUri||(e.resolvedUri=Gu(t,e.uri))})),e.preloadHints&&e.preloadHints.length&&e.preloadHints.forEach((function(e){e.resolvedUri||(e.resolvedUri=Gu(t,e.uri))}))},Ll=function(e){var t=e.segments||[],i=e.preloadSegment;if(i&&i.parts&&i.parts.length){if(i.preloadHints)for(var n=0;n<i.preloadHints.length;n++)if("MAP"===i.preloadHints[n].type)return t;i.duration=e.targetDuration,i.preload=!0,t.push(i)}return t},Dl=function(e,t){return e===t||e.segments&&t.segments&&e.segments.length===t.segments.length&&e.endList===t.endList&&e.mediaSequence===t.mediaSequence&&e.preloadSegment===t.preloadSegment},Ol=function(e,t,i){void 0===i&&(i=Dl);var n=Il(e,{}),r=n.playlists[t.id];if(!r)return null;if(i(r,t))return null;t.segments=Ll(t);var a=Il(r,t);if(a.preloadSegment&&!t.preloadSegment&&delete a.preloadSegment,r.segments){if(t.skip){t.segments=t.segments||[];for(var s=0;s<t.skip.skippedSegments;s++)t.segments.unshift({skipped:!0})}a.segments=function(e,t,i){var n=e.slice(),r=t.slice();i=i||0;for(var a,s=[],o=0;o<r.length;o++){var u=n[o+i],l=r[o];u?(a=u.map||a,s.push(Al(u,l))):(a&&!l.map&&(l.map=a),s.push(l))}return s}(r.segments,t.segments,t.mediaSequence-r.mediaSequence)}a.segments.forEach((function(e){Pl(e,a.resolvedUri)}));for(var o=0;o<n.playlists.length;o++)n.playlists[o].id===t.id&&(n.playlists[o]=a);return n.playlists[t.id]=a,n.playlists[t.uri]=a,El(e,(function(e,i,n,r){if(e.playlists)for(var s=0;s<e.playlists.length;s++)t.id===e.playlists[s].id&&(e.playlists[s]=a)})),n},Ml=function(e,t){var i=e.segments||[],n=i[i.length-1],r=n&&n.parts&&n.parts[n.parts.length-1],a=r&&r.duration||n&&n.duration;return t&&a?1e3*a:500*(e.partTargetDuration||e.targetDuration||10)},Rl=function(e){function t(t,i,n){var r;if(void 0===n&&(n={}),r=e.call(this)||this,!t)throw new Error("A non-empty playlist URL or object is required");r.logger_=Xu("PlaylistLoader");var a=n,s=a.withCredentials,o=void 0!==s&&s,u=a.handleManifestRedirects,l=void 0!==u&&u;r.src=t,r.vhs_=i,r.withCredentials=o,r.handleManifestRedirects=l;var c=i.options_;return r.customTagParsers=c&&c.customTagParsers||[],r.customTagMappers=c&&c.customTagMappers||[],r.experimentalLLHLS=c&&c.experimentalLLHLS||!1,ua.browser.IE_VERSION&&(r.experimentalLLHLS=!1),r.state="HAVE_NOTHING",r.handleMediaupdatetimeout_=r.handleMediaupdatetimeout_.bind(_t(r)),r.on("mediaupdatetimeout",r.handleMediaupdatetimeout_),r}bt(t,e);var i=t.prototype;return i.handleMediaupdatetimeout_=function(){var e=this;if("HAVE_METADATA"===this.state){var t=this.media(),i=Gu(this.master.uri,t.uri);this.experimentalLLHLS&&(i=function(e,t){if(t.endList||!t.serverControl)return e;var i={};if(t.serverControl.canBlockReload){var n=t.preloadSegment,r=t.mediaSequence+t.segments.length;if(n){var a=n.parts||[],s=ol(t)-1;s>-1&&s!==a.length-1&&(i._HLS_part=s),(s>-1||a.length)&&r--}i._HLS_msn=r}if(t.serverControl&&t.serverControl.canSkipUntil&&(i._HLS_skip=t.serverControl.canSkipDateranges?"v2":"YES"),Object.keys(i).length){var o=new window.URL(e);["_HLS_skip","_HLS_msn","_HLS_part"].forEach((function(e){i.hasOwnProperty(e)&&o.searchParams.set(e,i[e])})),e=o.toString()}return e}(i,t)),this.state="HAVE_CURRENT_METADATA",this.request=this.vhs_.xhr({uri:i,withCredentials:this.withCredentials},(function(t,i){if(e.request)return t?e.playlistRequestError(e.request,e.media(),"HAVE_METADATA"):void e.haveMetadata({playlistString:e.request.responseText,url:e.media().uri,id:e.media().id})}))}},i.playlistRequestError=function(e,t,i){var n=t.uri,r=t.id;this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[r],status:e.status,message:"HLS playlist request error at URL: "+n+".",responseText:e.responseText,code:e.status>=500?4:2},this.trigger("error")},i.parseManifest_=function(e){var t=this,i=e.url;return function(e){var t=e.onwarn,i=e.oninfo,n=e.manifestString,r=e.customTagParsers,a=void 0===r?[]:r,s=e.customTagMappers,o=void 0===s?[]:s,u=e.experimentalLLHLS,l=new Sa;t&&l.on("warn",t),i&&l.on("info",i),a.forEach((function(e){return l.addParser(e)})),o.forEach((function(e){return l.addTagMapper(e)})),l.push(n),l.end();var c=l.manifest;if(u||(["preloadSegment","skip","serverControl","renditionReports","partInf","partTargetDuration"].forEach((function(e){c.hasOwnProperty(e)&&delete c[e]})),c.segments&&c.segments.forEach((function(e){["parts","preloadHints"].forEach((function(t){e.hasOwnProperty(t)&&delete e[t]}))}))),!c.targetDuration){var d=10;c.segments&&c.segments.length&&(d=c.segments.reduce((function(e,t){return Math.max(e,t.duration)}),0)),t&&t("manifest has no targetDuration defaulting to "+d),c.targetDuration=d}var h=sl(c);if(h.length&&!c.partTargetDuration){var p=h.reduce((function(e,t){return Math.max(e,t.duration)}),0);t&&(t("manifest has no partTargetDuration defaulting to "+p),wl.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")),c.partTargetDuration=p}return c}({onwarn:function(e){var n=e.message;return t.logger_("m3u8-parser warn for "+i+": "+n)},oninfo:function(e){var n=e.message;return t.logger_("m3u8-parser info for "+i+": "+n)},manifestString:e.manifestString,customTagParsers:this.customTagParsers,customTagMappers:this.customTagMappers,experimentalLLHLS:this.experimentalLLHLS})},i.haveMetadata=function(e){var t=e.playlistString,i=e.playlistObject,n=e.url,r=e.id;this.request=null,this.state="HAVE_METADATA";var a=i||this.parseManifest_({url:n,manifestString:t});a.lastRequest=Date.now(),kl({playlist:a,uri:n,id:r});var s=Ol(this.master,a);this.targetDuration=a.partTargetDuration||a.targetDuration,this.pendingMedia_=null,s?(this.master=s,this.media_=this.master.playlists[r]):this.trigger("playlistunchanged"),this.updateMediaUpdateTimeout_(Ml(this.media(),!!s)),this.trigger("loadedplaylist")},i.dispose=function(){this.trigger("dispose"),this.stopRequest(),window.clearTimeout(this.mediaUpdateTimeout),window.clearTimeout(this.finalRenditionTimeout),this.off()},i.stopRequest=function(){if(this.request){var e=this.request;this.request=null,e.onreadystatechange=null,e.abort()}},i.media=function(e,t){var i=this;if(!e)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);if("string"==typeof e){if(!this.master.playlists[e])throw new Error("Unknown playlist URI: "+e);e=this.master.playlists[e]}if(window.clearTimeout(this.finalRenditionTimeout),t){var n=(e.partTargetDuration||e.targetDuration)/2*1e3||5e3;this.finalRenditionTimeout=window.setTimeout(this.media.bind(this,e,!1),n)}else{var r=this.state,a=!this.media_||e.id!==this.media_.id,s=this.master.playlists[e.id];if(s&&s.endList||e.endList&&e.segments.length)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=e,void(a&&(this.trigger("mediachanging"),"HAVE_MASTER"===r?this.trigger("loadedmetadata"):this.trigger("mediachange")));if(this.updateMediaUpdateTimeout_(Ml(e,!0)),a){if(this.state="SWITCHING_MEDIA",this.request){if(e.resolvedUri===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.pendingMedia_=e,this.request=this.vhs_.xhr({uri:e.resolvedUri,withCredentials:this.withCredentials},(function(t,n){if(i.request){if(e.lastRequest=Date.now(),e.resolvedUri=zu(i.handleManifestRedirects,e.resolvedUri,n),t)return i.playlistRequestError(i.request,e,r);i.haveMetadata({playlistString:n.responseText,url:e.uri,id:e.id}),"HAVE_MASTER"===r?i.trigger("loadedmetadata"):i.trigger("mediachange")}}))}}},i.pause=function(){this.mediaUpdateTimeout&&(window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null),this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},i.load=function(e){var t=this;this.mediaUpdateTimeout&&(window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null);var i=this.media();if(e){var n=i?(i.partTargetDuration||i.targetDuration)/2*1e3:5e3;this.mediaUpdateTimeout=window.setTimeout((function(){t.mediaUpdateTimeout=null,t.load()}),n)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},i.updateMediaUpdateTimeout_=function(e){var t=this;this.mediaUpdateTimeout&&(window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null),this.media()&&!this.media().endList&&(this.mediaUpdateTimeout=window.setTimeout((function(){t.mediaUpdateTimeout=null,t.trigger("mediaupdatetimeout"),t.updateMediaUpdateTimeout_(e)}),e))},i.start=function(){var e=this;if(this.started=!0,"object"==typeof this.src)return this.src.uri||(this.src.uri=window.location.href),this.src.resolvedUri=this.src.uri,void setTimeout((function(){e.setupInitialPlaylist(e.src)}),0);this.request=this.vhs_.xhr({uri:this.src,withCredentials:this.withCredentials},(function(t,i){if(e.request){if(e.request=null,t)return e.error={status:i.status,message:"HLS playlist request error at URL: "+e.src+".",responseText:i.responseText,code:2},"HAVE_NOTHING"===e.state&&(e.started=!1),e.trigger("error");e.src=zu(e.handleManifestRedirects,e.src,i);var n=e.parseManifest_({manifestString:i.responseText,url:e.src});e.setupInitialPlaylist(n)}}))},i.srcUri=function(){return"string"==typeof this.src?this.src:this.src.uri},i.setupInitialPlaylist=function(e){if(this.state="HAVE_MASTER",e.playlists)return this.master=e,Cl(this.master,this.srcUri()),e.playlists.forEach((function(e){e.segments=Ll(e),e.segments.forEach((function(t){Pl(t,e.resolvedUri)}))})),this.trigger("loadedplaylist"),void(this.request||this.media(this.master.playlists[0]));var t=this.srcUri()||window.location.href;this.master=function(e,t){var i=Sl(0,t),n={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:window.location.href,resolvedUri:window.location.href,playlists:[{uri:t,id:i,resolvedUri:t,attributes:{}}]};return n.playlists[i]=n.playlists[0],n.playlists[t]=n.playlists[0],n}(0,t),this.haveMetadata({playlistObject:e,url:t,id:this.master.playlists[0].id}),this.trigger("loadedmetadata")},t}(xl),Nl=ua.xhr,Ul=ua.mergeOptions,Bl=function(e,t,i,n){var r="arraybuffer"===e.responseType?e.response:e.responseText;!t&&r&&(e.responseTime=Date.now(),e.roundTripTime=e.responseTime-e.requestTime,e.bytesReceived=r.byteLength||r.length,e.bandwidth||(e.bandwidth=Math.floor(e.bytesReceived/e.roundTripTime*8*1e3))),i.headers&&(e.responseHeaders=i.headers),t&&"ETIMEDOUT"===t.code&&(e.timedout=!0),t||e.aborted||200===i.statusCode||206===i.statusCode||0===i.statusCode||(t=new Error("XHR Failed with a response of: "+(e&&(r||e.responseText)))),n(t,e)},Fl=function(){var e=function e(t,i){t=Ul({timeout:45e3},t);var n=e.beforeRequest||ua.Vhs.xhr.beforeRequest;if(n&&"function"==typeof n){var r=n(t);r&&(t=r)}var a=(!0===ua.Vhs.xhr.original?Nl:ua.Vhs.xhr)(t,(function(e,t){return Bl(a,e,t,i)})),s=a.abort;return a.abort=function(){return a.aborted=!0,s.apply(a,arguments)},a.uri=t.uri,a.requestTime=Date.now(),a};return e.original=!0,e},jl=function(e){var t,i={};return e.byterange&&(i.Range="bytes="+(t=e.byterange).offset+"-"+("bigint"==typeof t.offset||"bigint"==typeof t.length?window.BigInt(t.offset)+window.BigInt(t.length)-window.BigInt(1):t.offset+t.length-1)),i},Hl=function(e,t){return e.start(t)+"-"+e.end(t)},ql=function(e,t){var i=e.toString(16);return"00".substring(0,2-i.length)+i+(t%2?" ":"")},Vl=function(e){return e>=32&&e<126?String.fromCharCode(e):"."},Wl=function(e){var t={};return Object.keys(e).forEach((function(i){var n=e[i];Ua(n)?t[i]={bytes:n.buffer,byteOffset:n.byteOffset,byteLength:n.byteLength}:t[i]=n})),t},Gl=function(e){var t=e.byterange||{length:1/0,offset:0};return[t.length,t.offset,e.resolvedUri].join(",")},zl=function(e){return e.resolvedUri},Xl=function(e){for(var t=Array.prototype.slice.call(e),i=16,n="",r=0;r<t.length/i;r++)n+=t.slice(r*i,r*i+i).map(ql).join("")+" "+t.slice(r*i,r*i+i).map(Vl).join("")+"\n";return n},Kl=Object.freeze({__proto__:null,createTransferableMessage:Wl,initSegmentId:Gl,segmentKeyId:zl,hexDump:Xl,tagDump:function(e){var t=e.bytes;return Xl(t)},textRanges:function(e){var t,i="";for(t=0;t<e.length;t++)i+=Hl(e,t)+" ";return i}}),Yl=function e(t){var i=t.programTime,n=t.playlist,r=t.retryCount,a=void 0===r?2:r,s=t.seekTo,o=t.pauseAfterSeek,u=void 0===o||o,l=t.tech,c=t.callback;if(!c)throw new Error("seekToProgramTime: callback must be provided");if(void 0===i||!n||!s)return c({message:"seekToProgramTime: programTime, seekTo and playlist must be provided"});if(!n.endList&&!l.hasStarted_)return c({message:"player must be playing a live stream to start buffering"});if(!function(e){if(!e.segments||0===e.segments.length)return!1;for(var t=0;t<e.segments.length;t++)if(!e.segments[t].dateTimeObject)return!1;return!0}(n))return c({message:"programDateTime tags must be provided in the manifest "+n.resolvedUri});var d=function(e,t){var i;try{i=new Date(e)}catch(e){return null}if(!t||!t.segments||0===t.segments.length)return null;var n=t.segments[0];if(i<n.dateTimeObject)return null;for(var r=0;r<t.segments.length-1&&(n=t.segments[r],!(i<t.segments[r+1].dateTimeObject));r++);var a,s=t.segments[t.segments.length-1],o=s.dateTimeObject,u=s.videoTimingInfo?(a=s.videoTimingInfo).transmuxedPresentationEnd-a.transmuxedPresentationStart-a.transmuxerPrependedSeconds:s.duration+.25*s.duration;return i>new Date(o.getTime()+1e3*u)?null:(i>o&&(n=s),{segment:n,estimatedStart:n.videoTimingInfo?n.videoTimingInfo.transmuxedPresentationStart:Tl.duration(t,t.mediaSequence+t.segments.indexOf(n)),type:n.videoTimingInfo?"accurate":"estimate"})}(i,n);if(!d)return c({message:i+" was not found in the stream"});var h=d.segment,p=function(e,t){var i,n;try{i=new Date(e),n=new Date(t)}catch(e){}var r=i.getTime();return(n.getTime()-r)/1e3}(h.dateTimeObject,i);if("estimate"===d.type)return 0===a?c({message:i+" is not buffered yet. Try again"}):(s(d.estimatedStart+p),void l.one("seeked",(function(){e({programTime:i,playlist:n,retryCount:a-1,seekTo:s,pauseAfterSeek:u,tech:l,callback:c})})));var f=h.start+p;l.one("seeked",(function(){return c(null,l.currentTime())})),u&&l.pause(),s(f)},Ql=function(e,t){if(4===e.readyState)return t()},$l=ua.EventTarget,Jl=ua.mergeOptions,Zl=function(e,t){if(!Dl(e,t))return!1;if(e.sidx&&t.sidx&&(e.sidx.offset!==t.sidx.offset||e.sidx.length!==t.sidx.length))return!1;if(!e.sidx&&t.sidx||e.sidx&&!t.sidx)return!1;if(e.segments&&!t.segments||!e.segments&&t.segments)return!1;if(!e.segments&&!t.segments)return!0;for(var i=0;i<e.segments.length;i++){var n=e.segments[i],r=t.segments[i];if(n.uri!==r.uri)return!1;if(n.byterange||r.byterange){var a=n.byterange,s=r.byterange;if(a&&!s||!a&&s)return!1;if(a.offset!==s.offset||a.length!==s.length)return!1}}return!0},ec=function(e,t){var i,n,r={};for(var a in e){var s=e[a].sidx;if(s){var o=Ko(s);if(!t[o])break;i=t[o].sidxInfo,n=s,(Boolean(!i.map&&!n.map)||Boolean(i.map&&n.map&&i.map.byterange.offset===n.map.byterange.offset&&i.map.byterange.length===n.map.byterange.length))&&i.uri===n.uri&&i.byterange.offset===n.byterange.offset&&i.byterange.length===n.byterange.length&&(r[o]=t[o])}}return r},tc=function(e){function t(t,i,n,r){var a;void 0===n&&(n={}),(a=e.call(this)||this).masterPlaylistLoader_=r||_t(a),r||(a.isMaster_=!0);var s=n,o=s.withCredentials,u=void 0!==o&&o,l=s.handleManifestRedirects,c=void 0!==l&&l;if(a.vhs_=i,a.withCredentials=u,a.handleManifestRedirects=c,!t)throw new Error("A non-empty playlist URL or object is required");return a.on("minimumUpdatePeriod",(function(){a.refreshXml_()})),a.on("mediaupdatetimeout",(function(){a.refreshMedia_(a.media().id)})),a.state="HAVE_NOTHING",a.loadedPlaylists_={},a.logger_=Xu("DashPlaylistLoader"),a.isMaster_?(a.masterPlaylistLoader_.srcUrl=t,a.masterPlaylistLoader_.sidxMapping_={}):a.childPlaylist_=t,a}bt(t,e);var i=t.prototype;return i.requestErrored_=function(e,t,i){return!this.request||(this.request=null,e?(this.error="object"!=typeof e||e instanceof Error?{status:t.status,message:"DASH request error at URL: "+t.uri,response:t.response,code:2}:e,i&&(this.state=i),this.trigger("error"),!0):void 0)},i.addSidxSegments_=function(e,t,i){var n=this,r=e.sidx&&Ko(e.sidx);if(e.sidx&&r&&!this.masterPlaylistLoader_.sidxMapping_[r]){var a=zu(this.handleManifestRedirects,e.sidx.resolvedUri),s=function(a,s){if(!n.requestErrored_(a,s,t)){var o,u=n.masterPlaylistLoader_.sidxMapping_;try{o=function(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength),i={version:e[0],flags:new Uint8Array(e.subarray(1,4)),references:[],referenceId:t.getUint32(4),timescale:t.getUint32(8)},n=12;0===i.version?(i.earliestPresentationTime=t.getUint32(n),i.firstOffset=t.getUint32(n+4),n+=8):(i.earliestPresentationTime=wu(e.subarray(n)),i.firstOffset=wu(e.subarray(n+8)),n+=16),n+=2;var r=t.getUint16(n);for(n+=2;r>0;n+=12,r--)i.references.push({referenceType:(128&e[n])>>>7,referencedSize:2147483647&t.getUint32(n),subsegmentDuration:t.getUint32(n+4),startsWithSap:!!(128&e[n+8]),sapType:(112&e[n+8])>>>4,sapDeltaTime:268435455&t.getUint32(n+8)});return i}(Ba(s.response).subarray(8))}catch(e){return void n.requestErrored_(e,s,t)}return u[r]={sidxInfo:e.sidx,sidx:o},Vo(e,o,e.sidx.resolvedUri),i(!0)}};this.request=function(e,t,i){var n,r=[],a=!1,s=function(e,t,n,r){return t.abort(),a=!0,i(e,t,n,r)},o=function(e,t){if(!a){if(e)return s(e,t,"",r);var i=t.responseText.substring(r&&r.byteLength||0,t.responseText.length);if(r=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];if((t=t.filter((function(e){return e&&(e.byteLength||e.length)&&"string"!=typeof e}))).length<=1)return Ba(t[0]);var n=t.reduce((function(e,t,i){return e+(t.byteLength||t.length)}),0),r=new Uint8Array(n),a=0;return t.forEach((function(e){e=Ba(e),r.set(e,a),a+=e.byteLength})),r}(r,qa(i,!0)),n=n||Eu(r),r.length<10||n&&r.length<n+2)return Ql(t,(function(){return s(e,t,"",r)}));var o=qu(r);return"ts"===o&&r.length<188||!o&&r.length<376?Ql(t,(function(){return s(e,t,"",r)})):s(null,t,o,r)}},u=t({uri:e,beforeSend:function(e){e.overrideMimeType("text/plain; charset=x-user-defined"),e.addEventListener("progress",(function(t){return t.total,t.loaded,Bl(e,null,{statusCode:e.status},o)}))}},(function(e,t){return Bl(u,e,t,o)}));return u}(a,this.vhs_.xhr,(function(t,i,r,o){if(t)return s(t,i);if(!r||"mp4"!==r)return s({status:i.status,message:"Unsupported "+(r||"unknown")+" container type for sidx segment at URL: "+a,response:"",playlist:e,internal:!0,blacklistDuration:1/0,code:2},i);var u=e.sidx.byterange,l=u.offset,c=u.length;if(o.length>=c+l)return s(t,{response:o.subarray(l,l+c),status:i.status,uri:i.uri});n.request=n.vhs_.xhr({uri:a,responseType:"arraybuffer",headers:jl({byterange:e.sidx.byterange})},s)}))}else this.mediaRequest_=window.setTimeout((function(){return i(!1)}),0)},i.dispose=function(){this.trigger("dispose"),this.stopRequest(),this.loadedPlaylists_={},window.clearTimeout(this.minimumUpdatePeriodTimeout_),window.clearTimeout(this.mediaRequest_),window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null,this.mediaRequest_=null,this.minimumUpdatePeriodTimeout_=null,this.masterPlaylistLoader_.createMupOnMedia_&&(this.off("loadedmetadata",this.masterPlaylistLoader_.createMupOnMedia_),this.masterPlaylistLoader_.createMupOnMedia_=null),this.off()},i.hasPendingRequest=function(){return this.request||this.mediaRequest_},i.stopRequest=function(){if(this.request){var e=this.request;this.request=null,e.onreadystatechange=null,e.abort()}},i.media=function(e){var t=this;if(!e)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var i=this.state;if("string"==typeof e){if(!this.masterPlaylistLoader_.master.playlists[e])throw new Error("Unknown playlist URI: "+e);e=this.masterPlaylistLoader_.master.playlists[e]}var n=!this.media_||e.id!==this.media_.id;if(n&&this.loadedPlaylists_[e.id]&&this.loadedPlaylists_[e.id].endList)return this.state="HAVE_METADATA",this.media_=e,void(n&&(this.trigger("mediachanging"),this.trigger("mediachange")));n&&(this.media_&&this.trigger("mediachanging"),this.addSidxSegments_(e,i,(function(n){t.haveMetadata({startingState:i,playlist:e})})))},i.haveMetadata=function(e){var t=e.startingState,i=e.playlist;this.state="HAVE_METADATA",this.loadedPlaylists_[i.id]=i,this.mediaRequest_=null,this.refreshMedia_(i.id),"HAVE_MASTER"===t?this.trigger("loadedmetadata"):this.trigger("mediachange")},i.pause=function(){this.masterPlaylistLoader_.createMupOnMedia_&&(this.off("loadedmetadata",this.masterPlaylistLoader_.createMupOnMedia_),this.masterPlaylistLoader_.createMupOnMedia_=null),this.stopRequest(),window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null,this.isMaster_&&(window.clearTimeout(this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_),this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_=null),"HAVE_NOTHING"===this.state&&(this.started=!1)},i.load=function(e){var t=this;window.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=null;var i=this.media();if(e){var n=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=window.setTimeout((function(){return t.load()}),n)}else this.started?i&&!i.endList?(this.isMaster_&&!this.minimumUpdatePeriodTimeout_&&(this.trigger("minimumUpdatePeriod"),this.updateMinimumUpdatePeriodTimeout_()),this.trigger("mediaupdatetimeout")):this.trigger("loadedplaylist"):this.start()},i.start=function(){var e=this;this.started=!0,this.isMaster_?this.requestMaster_((function(t,i){e.haveMaster_(),e.hasPendingRequest()||e.media_||e.media(e.masterPlaylistLoader_.master.playlists[0])})):this.mediaRequest_=window.setTimeout((function(){return e.haveMaster_()}),0)},i.requestMaster_=function(e){var t=this;this.request=this.vhs_.xhr({uri:this.masterPlaylistLoader_.srcUrl,withCredentials:this.withCredentials},(function(i,n){if(!t.requestErrored_(i,n)){var r=n.responseText!==t.masterPlaylistLoader_.masterXml_;return t.masterPlaylistLoader_.masterXml_=n.responseText,n.responseHeaders&&n.responseHeaders.date?t.masterLoaded_=Date.parse(n.responseHeaders.date):t.masterLoaded_=Date.now(),t.masterPlaylistLoader_.srcUrl=zu(t.handleManifestRedirects,t.masterPlaylistLoader_.srcUrl,n),r?(t.handleMaster_(),void t.syncClientServerClock_((function(){return e(n,r)}))):e(n,r)}"HAVE_NOTHING"===t.state&&(t.started=!1)}))},i.syncClientServerClock_=function(e){var t,i=this,n=(t=this.masterPlaylistLoader_.masterXml_,function(e){var t=du(e,"UTCTiming")[0];if(!t)return null;var i=mu(t);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error("UNSUPPORTED_UTC_TIMING_SCHEME")}return i}(bu(t)));return null===n?(this.masterPlaylistLoader_.clientOffset_=this.masterLoaded_-Date.now(),e()):"DIRECT"===n.method?(this.masterPlaylistLoader_.clientOffset_=n.value-Date.now(),e()):void(this.request=this.vhs_.xhr({uri:Gu(this.masterPlaylistLoader_.srcUrl,n.value),method:n.method,withCredentials:this.withCredentials},(function(t,r){if(i.request){if(t)return i.masterPlaylistLoader_.clientOffset_=i.masterLoaded_-Date.now(),e();var a;a="HEAD"===n.method?r.responseHeaders&&r.responseHeaders.date?Date.parse(r.responseHeaders.date):i.masterLoaded_:Date.parse(r.responseText),i.masterPlaylistLoader_.clientOffset_=a-Date.now(),e()}})))},i.haveMaster_=function(){this.state="HAVE_MASTER",this.isMaster_?this.trigger("loadedplaylist"):this.media_||this.media(this.childPlaylist_)},i.handleMaster_=function(){this.mediaRequest_=null;var e,t,i,n=this.masterPlaylistLoader_.master,r=(i=function(e,t){void 0===t&&(t={});var i=function(e,t){void 0===t&&(t={});var i=t,n=i.manifestUri,r=void 0===n?"":n,a=i.NOW,s=void 0===a?Date.now():a,o=i.clientOffset,u=void 0===o?0:o,l=du(e,"Period");if(!l.length)throw new Error("INVALID_NUMBER_OF_PERIOD");var c=du(e,"Location"),d=mu(e),h=vu([r],du(e,"BaseURL"));d.type=d.type||"static",d.sourceDuration=d.mediaPresentationDuration||0,d.NOW=s,d.clientOffset=u,c.length&&(d.locations=c.map(hu));var p=[];return l.forEach((function(e,t){var i=mu(e),n=p[t-1];i.start=function(e){var t=e.attributes,i=e.priorPeriodAttributes,n=e.mpdType;return"number"==typeof t.start?t.start:i&&"number"==typeof i.start&&"number"==typeof i.duration?i.start+i.duration:i||"static"!==n?null:0}({attributes:i,priorPeriodAttributes:n?n.attributes:null,mpdType:d.type}),p.push({node:e,attributes:i})})),{locations:d.locations,representationInfo:Ro(p.map(_u(d,h)))}}(bu(e),t),n=i.representationInfo.map(cu);return nu({dashPlaylists:n,locations:i.locations,sidxMapping:t.sidxMapping,previousManifest:t.previousManifest})}((e={masterXml:this.masterPlaylistLoader_.masterXml_,srcUrl:this.masterPlaylistLoader_.srcUrl,clientOffset:this.masterPlaylistLoader_.clientOffset_,sidxMapping:this.masterPlaylistLoader_.sidxMapping_,previousManifest:n}).masterXml,{manifestUri:t=e.srcUrl,clientOffset:e.clientOffset,sidxMapping:e.sidxMapping,previousManifest:e.previousManifest}),Cl(i,t),i);n&&(r=function(e,t,i){for(var n=!0,r=Jl(e,{duration:t.duration,minimumUpdatePeriod:t.minimumUpdatePeriod,timelineStarts:t.timelineStarts}),a=0;a<t.playlists.length;a++){var s=t.playlists[a];if(s.sidx){var o=Ko(s.sidx);i&&i[o]&&i[o].sidx&&Vo(s,i[o].sidx,s.sidx.resolvedUri)}var u=Ol(r,s,Zl);u&&(r=u,n=!1)}return El(t,(function(e,t,i,a){if(e.playlists&&e.playlists.length){var s=e.playlists[0].id,o=Ol(r,e.playlists[0],Zl);o&&((r=o).mediaGroups[t][i][a].playlists[0]=r.playlists[s],n=!1)}})),t.minimumUpdatePeriod!==e.minimumUpdatePeriod&&(n=!1),n?null:r}(n,r,this.masterPlaylistLoader_.sidxMapping_)),this.masterPlaylistLoader_.master=r||n;var a=this.masterPlaylistLoader_.master.locations&&this.masterPlaylistLoader_.master.locations[0];return a&&a!==this.masterPlaylistLoader_.srcUrl&&(this.masterPlaylistLoader_.srcUrl=a),(!n||r&&r.minimumUpdatePeriod!==n.minimumUpdatePeriod)&&this.updateMinimumUpdatePeriodTimeout_(),Boolean(r)},i.updateMinimumUpdatePeriodTimeout_=function(){var e=this.masterPlaylistLoader_;e.createMupOnMedia_&&(e.off("loadedmetadata",e.createMupOnMedia_),e.createMupOnMedia_=null),e.minimumUpdatePeriodTimeout_&&(window.clearTimeout(e.minimumUpdatePeriodTimeout_),e.minimumUpdatePeriodTimeout_=null);var t=e.master&&e.master.minimumUpdatePeriod;0===t&&(e.media()?t=1e3*e.media().targetDuration:(e.createMupOnMedia_=e.updateMinimumUpdatePeriodTimeout_,e.one("loadedmetadata",e.createMupOnMedia_))),"number"!=typeof t||t<=0?t<0&&this.logger_("found invalid minimumUpdatePeriod of "+t+", not setting a timeout"):this.createMUPTimeout_(t)},i.createMUPTimeout_=function(e){var t=this.masterPlaylistLoader_;t.minimumUpdatePeriodTimeout_=window.setTimeout((function(){t.minimumUpdatePeriodTimeout_=null,t.trigger("minimumUpdatePeriod"),t.createMUPTimeout_(e)}),e)},i.refreshXml_=function(){var e=this;this.requestMaster_((function(t,i){var n,r,a;i&&(e.media_&&(e.media_=e.masterPlaylistLoader_.master.playlists[e.media_.id]),e.masterPlaylistLoader_.sidxMapping_=(n=e.masterPlaylistLoader_.master,r=e.masterPlaylistLoader_.sidxMapping_,a=ec(n.playlists,r),El(n,(function(e,t,i,n){if(e.playlists&&e.playlists.length){var s=e.playlists;a=Jl(a,ec(s,r))}})),a),e.addSidxSegments_(e.media(),e.state,(function(t){e.refreshMedia_(e.media().id)})))}))},i.refreshMedia_=function(e){var t=this;if(!e)throw new Error("refreshMedia_ must take a media id");this.media_&&this.isMaster_&&this.handleMaster_();var i=this.masterPlaylistLoader_.master.playlists,n=!this.media_||this.media_!==i[e];n?this.media_=i[e]:this.trigger("playlistunchanged"),this.mediaUpdateTimeout||function e(){t.media().endList||(t.mediaUpdateTimeout=window.setTimeout((function(){t.trigger("mediaupdatetimeout"),e()}),Ml(t.media(),Boolean(n))))}(),this.trigger("loadedplaylist")},t}($l),ic={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,BACK_BUFFER_LENGTH:30,GOAL_BUFFER_LENGTH_RATE:1,INITIAL_BANDWIDTH:4194304,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:16,BUFFER_LOW_WATER_LINE_RATE:1,BUFFER_HIGH_WATER_LINE:30},nc=function(e){return e.on=e.addEventListener,e.off=e.removeEventListener,e},rc=function(e){return function(){var t=function(e){try{return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}catch(i){var t=new BlobBuilder;return t.append(e),URL.createObjectURL(t.getBlob())}}(e),i=nc(new Worker(t));i.objURL=t;var n=i.terminate;return i.on=i.addEventListener,i.off=i.removeEventListener,i.terminate=function(){return URL.revokeObjectURL(t),n.call(this)},i}},ac=function(e){return"var browserWorkerPolyFill = "+nc.toString()+";\nbrowserWorkerPolyFill(self);\n"+e},sc=function(e){return e.toString().replace(/^function.+?{/,"").slice(0,-1)},oc=rc(ac(sc((function(){var e=function(){this.init=function(){var e={};this.on=function(t,i){e[t]||(e[t]=[]),e[t]=e[t].concat(i)},this.off=function(t,i){var n;return!!e[t]&&(n=e[t].indexOf(i),e[t]=e[t].slice(),e[t].splice(n,1),n>-1)},this.trigger=function(t){var i,n,r,a;if(i=e[t])if(2===arguments.length)for(r=i.length,n=0;n<r;++n)i[n].call(this,arguments[1]);else{for(a=[],n=arguments.length,n=1;n<arguments.length;++n)a.push(arguments[n]);for(r=i.length,n=0;n<r;++n)i[n].apply(this,a)}},this.dispose=function(){e={}}}};e.prototype.pipe=function(e){return this.on("data",(function(t){e.push(t)})),this.on("done",(function(t){e.flush(t)})),this.on("partialdone",(function(t){e.partialFlush(t)})),this.on("endedtimeline",(function(t){e.endTimeline(t)})),this.on("reset",(function(t){e.reset(t)})),e},e.prototype.push=function(e){this.trigger("data",e)},e.prototype.flush=function(e){this.trigger("done",e)},e.prototype.partialFlush=function(e){this.trigger("partialdone",e)},e.prototype.endTimeline=function(e){this.trigger("endedtimeline",e)},e.prototype.reset=function(e){this.trigger("reset",e)};var t,i,n,r,a,s,o,u,l,c,d,h,p,f,m,g,v,y,_,b,T,w,S,E,k,C,I,x,A,P,L,D,O,M,R,N,U,B,F,j,H=e,q=Math.pow(2,32),V={getUint64:function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength);return i.getBigUint64?(t=i.getBigUint64(0))<Number.MAX_SAFE_INTEGER?Number(t):t:i.getUint32(0)*q+i.getUint32(4)},MAX_UINT32:q},W=V.MAX_UINT32;!function(){var e;if(w={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],pasp:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(e in w)w.hasOwnProperty(e)&&(w[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),k=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),E=new Uint8Array([0,0,0,1]),C=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),I=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),x={video:C,audio:I},L=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),D=new Uint8Array([0,0,0,0,0,0,0,0]),O=D,M=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=D,A=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),t=function(e){var t,i,n=[],r=0;for(t=1;t<arguments.length;t++)n.push(arguments[t]);for(t=n.length;t--;)r+=n[t].byteLength;for(i=new Uint8Array(r+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(e,4),t=0,r=8;t<n.length;t++)i.set(n[t],r),r+=n[t].byteLength;return i},i=function(){return t(w.dinf,t(w.dref,L))},n=function(e){return t(w.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,e.audioobjecttype<<3|e.samplingfrequencyindex>>>1,e.samplingfrequencyindex<<7|e.channelcount<<3,6,1,2]))},m=function(e){return t(w.hdlr,x[e])},f=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,e.duration>>>24&255,e.duration>>>16&255,e.duration>>>8&255,255&e.duration,85,196,0,0]);return e.samplerate&&(i[12]=e.samplerate>>>24&255,i[13]=e.samplerate>>>16&255,i[14]=e.samplerate>>>8&255,i[15]=255&e.samplerate),t(w.mdhd,i)},p=function(e){return t(w.mdia,f(e),m(e.type),s(e))},a=function(e){return t(w.mfhd,new Uint8Array([0,0,0,0,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e]))},s=function(e){return t(w.minf,"video"===e.type?t(w.vmhd,A):t(w.smhd,P),i(),v(e))},o=function(e,i){for(var n=[],r=i.length;r--;)n[r]=_(i[r]);return t.apply(null,[w.moof,a(e)].concat(n))},u=function(e){for(var i=e.length,n=[];i--;)n[i]=d(e[i]);return t.apply(null,[w.moov,c(4294967295)].concat(n).concat(l(e)))},l=function(e){for(var i=e.length,n=[];i--;)n[i]=b(e[i]);return t.apply(null,[w.mvex].concat(n))},c=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t(w.mvhd,i)},g=function(e){var i,n,r=e.samples||[],a=new Uint8Array(4+r.length);for(n=0;n<r.length;n++)i=r[n].flags,a[n+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t(w.sdtp,a)},v=function(e){return t(w.stbl,y(e),t(w.stts,R),t(w.stsc,O),t(w.stsz,M),t(w.stco,D))},y=function(e){return t(w.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===e.type?N(e):U(e))},N=function(e){var i,n,r=e.sps||[],a=e.pps||[],s=[],o=[];for(i=0;i<r.length;i++)s.push((65280&r[i].byteLength)>>>8),s.push(255&r[i].byteLength),s=s.concat(Array.prototype.slice.call(r[i]));for(i=0;i<a.length;i++)o.push((65280&a[i].byteLength)>>>8),o.push(255&a[i].byteLength),o=o.concat(Array.prototype.slice.call(a[i]));if(n=[w.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&e.width)>>8,255&e.width,(65280&e.height)>>8,255&e.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),t(w.avcC,new Uint8Array([1,e.profileIdc,e.profileCompatibility,e.levelIdc,255].concat([r.length],s,[a.length],o))),t(w.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192]))],e.sarRatio){var u=e.sarRatio[0],l=e.sarRatio[1];n.push(t(w.pasp,new Uint8Array([(4278190080&u)>>24,(16711680&u)>>16,(65280&u)>>8,255&u,(4278190080&l)>>24,(16711680&l)>>16,(65280&l)>>8,255&l])))}return t.apply(null,n)},U=function(e){return t(w.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&e.channelcount)>>8,255&e.channelcount,(65280&e.samplesize)>>8,255&e.samplesize,0,0,0,0,(65280&e.samplerate)>>8,255&e.samplerate,0,0]),n(e))},h=function(e){var i=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,0,(4278190080&e.duration)>>24,(16711680&e.duration)>>16,(65280&e.duration)>>8,255&e.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&e.width)>>8,255&e.width,0,0,(65280&e.height)>>8,255&e.height,0,0]);return t(w.tkhd,i)},_=function(e){var i,n,r,a,s,o;return i=t(w.tfhd,new Uint8Array([0,0,0,58,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(e.baseMediaDecodeTime/W),o=Math.floor(e.baseMediaDecodeTime%W),n=t(w.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o])),"audio"===e.type?(r=T(e,92),t(w.traf,i,n,r)):(a=g(e),r=T(e,a.length+92),t(w.traf,i,n,r,a))},d=function(e){return e.duration=e.duration||4294967295,t(w.trak,h(e),p(e))},b=function(e){var i=new Uint8Array([0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==e.type&&(i[i.length-1]=0),t(w.trex,i)},j=function(e,t){var i=0,n=0,r=0,a=0;return e.length&&(void 0!==e[0].duration&&(i=1),void 0!==e[0].size&&(n=2),void 0!==e[0].flags&&(r=4),void 0!==e[0].compositionTimeOffset&&(a=8)),[0,0,i|n|r|a,1,(4278190080&e.length)>>>24,(16711680&e.length)>>>16,(65280&e.length)>>>8,255&e.length,(4278190080&t)>>>24,(16711680&t)>>>16,(65280&t)>>>8,255&t]},F=function(e,i){var n,r,a,s,o,u;for(i+=20+16*(s=e.samples||[]).length,a=j(s,i),(r=new Uint8Array(a.length+16*s.length)).set(a),n=a.length,u=0;u<s.length;u++)o=s[u],r[n++]=(4278190080&o.duration)>>>24,r[n++]=(16711680&o.duration)>>>16,r[n++]=(65280&o.duration)>>>8,r[n++]=255&o.duration,r[n++]=(4278190080&o.size)>>>24,r[n++]=(16711680&o.size)>>>16,r[n++]=(65280&o.size)>>>8,r[n++]=255&o.size,r[n++]=o.flags.isLeading<<2|o.flags.dependsOn,r[n++]=o.flags.isDependedOn<<6|o.flags.hasRedundancy<<4|o.flags.paddingValue<<1|o.flags.isNonSyncSample,r[n++]=61440&o.flags.degradationPriority,r[n++]=15&o.flags.degradationPriority,r[n++]=(4278190080&o.compositionTimeOffset)>>>24,r[n++]=(16711680&o.compositionTimeOffset)>>>16,r[n++]=(65280&o.compositionTimeOffset)>>>8,r[n++]=255&o.compositionTimeOffset;return t(w.trun,r)},B=function(e,i){var n,r,a,s,o,u;for(i+=20+8*(s=e.samples||[]).length,a=j(s,i),(n=new Uint8Array(a.length+8*s.length)).set(a),r=a.length,u=0;u<s.length;u++)o=s[u],n[r++]=(4278190080&o.duration)>>>24,n[r++]=(16711680&o.duration)>>>16,n[r++]=(65280&o.duration)>>>8,n[r++]=255&o.duration,n[r++]=(4278190080&o.size)>>>24,n[r++]=(16711680&o.size)>>>16,n[r++]=(65280&o.size)>>>8,n[r++]=255&o.size;return t(w.trun,n)},T=function(e,t){return"audio"===e.type?B(e,t):F(e,t)},r=function(){return t(w.ftyp,S,E,S,k)};var G,z,X,K,Y,Q,$,J,Z=function(e){return t(w.mdat,e)},ee=o,te=function(e,t){var i={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0,isNonSyncSample:1}};return i.dataOffset=t,i.compositionTimeOffset=e.pts-e.dts,i.duration=e.duration,i.size=4*e.length,i.size+=e.byteLength,e.keyFrame&&(i.flags.dependsOn=2,i.flags.isNonSyncSample=0),i},ie=[33,16,5,32,164,27],ne=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],re=function(e){for(var t=[];e--;)t.push(0);return t},ae=9e4;Q=function(e,t){return z(Y(e,t))},$=function(e,t){return X(K(e),t)},J=function(e,t,i){return K(i?e:e-t)};var se=ae,oe=z=function(e){return e*ae},ue=(X=function(e,t){return e*t},K=function(e){return e/ae}),le=(Y=function(e,t){return e/t},Q),ce=$,de=J,he=function(e,t,i,n){var r,a,s,o,u,l=0,c=0,d=0;if(t.length&&(r=le(e.baseMediaDecodeTime,e.samplerate),a=Math.ceil(se/(e.samplerate/1024)),i&&n&&(l=r-Math.max(i,n),d=(c=Math.floor(l/a))*a),!(c<1||d>45e3))){for((s=function(){if(!G){var e={96e3:[ie,[227,64],re(154),[56]],88200:[ie,[231],re(170),[56]],64e3:[ie,[248,192],re(240),[56]],48e3:[ie,[255,192],re(268),[55,148,128],re(54),[112]],44100:[ie,[255,192],re(268),[55,163,128],re(84),[112]],32e3:[ie,[255,192],re(268),[55,234],re(226),[112]],24e3:[ie,[255,192],re(268),[55,255,128],re(268),[111,112],re(126),[224]],16e3:[ie,[255,192],re(268),[55,255,128],re(268),[111,255],re(269),[223,108],re(195),[1,192]],12e3:[ne,re(268),[3,127,248],re(268),[6,255,240],re(268),[13,255,224],re(268),[27,253,128],re(259),[56]],11025:[ne,re(268),[3,127,248],re(268),[6,255,240],re(268),[13,255,224],re(268),[27,255,192],re(268),[55,175,128],re(108),[112]],8e3:[ne,re(268),[3,121,16],re(47),[7]]};t=e,G=Object.keys(t).reduce((function(e,i){return e[i]=new Uint8Array(t[i].reduce((function(e,t){return e.concat(t)}),[])),e}),{})}var t;return G}()[e.samplerate])||(s=t[0].data),o=0;o<c;o++)u=t[0],t.splice(0,0,{data:s,dts:u.dts-a,pts:u.pts-a});return e.baseMediaDecodeTime-=Math.floor(ce(d,e.samplerate)),d}},pe=function(e){delete e.minSegmentDts,delete e.maxSegmentDts,delete e.minSegmentPts,delete e.maxSegmentPts},fe=function(e,t){var i,n=e.minSegmentDts;return t||(n-=e.timelineStartInfo.dts),i=e.timelineStartInfo.baseMediaDecodeTime,i+=n,i=Math.max(0,i),"audio"===e.type&&(i*=e.samplerate/9e4,i=Math.floor(i)),i},me=function(e,t){"number"==typeof t.pts&&(void 0===e.timelineStartInfo.pts&&(e.timelineStartInfo.pts=t.pts),void 0===e.minSegmentPts?e.minSegmentPts=t.pts:e.minSegmentPts=Math.min(e.minSegmentPts,t.pts),void 0===e.maxSegmentPts?e.maxSegmentPts=t.pts:e.maxSegmentPts=Math.max(e.maxSegmentPts,t.pts)),"number"==typeof t.dts&&(void 0===e.timelineStartInfo.dts&&(e.timelineStartInfo.dts=t.dts),void 0===e.minSegmentDts?e.minSegmentDts=t.dts:e.minSegmentDts=Math.min(e.minSegmentDts,t.dts),void 0===e.maxSegmentDts?e.maxSegmentDts=t.dts:e.maxSegmentDts=Math.max(e.maxSegmentDts,t.dts))},ge=function e(t){t=t||{},e.prototype.init.call(this),this.parse708captions_="boolean"!=typeof t.parse708captions||t.parse708captions,this.captionPackets_=[],this.ccStreams_=[new Ce(0,0),new Ce(0,1),new Ce(1,0),new Ce(1,1)],this.parse708captions_&&(this.cc708Stream_=new Te({captionServices:t.captionServices})),this.reset(),this.ccStreams_.forEach((function(e){e.on("data",this.trigger.bind(this,"data")),e.on("partialdone",this.trigger.bind(this,"partialdone")),e.on("done",this.trigger.bind(this,"done"))}),this),this.parse708captions_&&(this.cc708Stream_.on("data",this.trigger.bind(this,"data")),this.cc708Stream_.on("partialdone",this.trigger.bind(this,"partialdone")),this.cc708Stream_.on("done",this.trigger.bind(this,"done")))};(ge.prototype=new H).push=function(e){var t,i,n;if("sei_rbsp"===e.nalUnitType&&(t=function(e){for(var t=0,i={payloadType:-1,payloadSize:0},n=0,r=0;t<e.byteLength&&128!==e[t];){for(;255===e[t];)n+=255,t++;for(n+=e[t++];255===e[t];)r+=255,t++;if(r+=e[t++],!i.payload&&4===n){if("GA94"===String.fromCharCode(e[t+3],e[t+4],e[t+5],e[t+6])){i.payloadType=n,i.payloadSize=r,i.payload=e.subarray(t,t+r);break}i.payload=void 0}t+=r,n=0,r=0}return i}(e.escapedRBSP)).payload&&4===t.payloadType&&(i=function(e){return 181!==e.payload[0]||49!=(e.payload[1]<<8|e.payload[2])||"GA94"!==String.fromCharCode(e.payload[3],e.payload[4],e.payload[5],e.payload[6])||3!==e.payload[7]?null:e.payload.subarray(8,e.payload.length-1)}(t)))if(e.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(e.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));n=function(e,t){var i,n,r,a,s=[];if(!(64&t[0]))return s;for(n=31&t[0],i=0;i<n;i++)a={type:3&t[2+(r=3*i)],pts:e},4&t[r+2]&&(a.ccData=t[r+3]<<8|t[r+4],s.push(a));return s}(e.pts,i),this.captionPackets_=this.captionPackets_.concat(n),this.latestDts_!==e.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=e.dts}},ge.prototype.flushCCStreams=function(e){this.ccStreams_.forEach((function(t){return"flush"===e?t.flush():t.partialFlush()}),this)},ge.prototype.flushStream=function(e){this.captionPackets_.length?(this.captionPackets_.forEach((function(e,t){e.presortIndex=t})),this.captionPackets_.sort((function(e,t){return e.pts===t.pts?e.presortIndex-t.presortIndex:e.pts-t.pts})),this.captionPackets_.forEach((function(e){e.type<2?this.dispatchCea608Packet(e):this.dispatchCea708Packet(e)}),this),this.captionPackets_.length=0,this.flushCCStreams(e)):this.flushCCStreams(e)},ge.prototype.flush=function(){return this.flushStream("flush")},ge.prototype.partialFlush=function(){return this.flushStream("partialFlush")},ge.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach((function(e){e.reset()}))},ge.prototype.dispatchCea608Packet=function(e){this.setsTextOrXDSActive(e)?this.activeCea608Channel_[e.type]=null:this.setsChannel1Active(e)?this.activeCea608Channel_[e.type]=0:this.setsChannel2Active(e)&&(this.activeCea608Channel_[e.type]=1),null!==this.activeCea608Channel_[e.type]&&this.ccStreams_[(e.type<<1)+this.activeCea608Channel_[e.type]].push(e)},ge.prototype.setsChannel1Active=function(e){return 4096==(30720&e.ccData)},ge.prototype.setsChannel2Active=function(e){return 6144==(30720&e.ccData)},ge.prototype.setsTextOrXDSActive=function(e){return 256==(28928&e.ccData)||4138==(30974&e.ccData)||6186==(30974&e.ccData)},ge.prototype.dispatchCea708Packet=function(e){this.parse708captions_&&this.cc708Stream_.push(e)};var ve={127:9834,4128:32,4129:160,4133:8230,4138:352,4140:338,4144:9608,4145:8216,4146:8217,4147:8220,4148:8221,4149:8226,4153:8482,4154:353,4156:339,4157:8480,4159:376,4214:8539,4215:8540,4216:8541,4217:8542,4218:9168,4219:9124,4220:9123,4221:9135,4222:9126,4223:9121,4256:12600},ye=function(e){return 32<=e&&e<=127||160<=e&&e<=255},_e=function(e){this.windowNum=e,this.reset()};_e.prototype.reset=function(){this.clearText(),this.pendingNewLine=!1,this.winAttr={},this.penAttr={},this.penLoc={},this.penColor={},this.visible=0,this.rowLock=0,this.columnLock=0,this.priority=0,this.relativePositioning=0,this.anchorVertical=0,this.anchorHorizontal=0,this.anchorPoint=0,this.rowCount=1,this.virtualRowCount=this.rowCount+1,this.columnCount=41,this.windowStyle=0,this.penStyle=0},_e.prototype.getText=function(){return this.rows.join("\n")},_e.prototype.clearText=function(){this.rows=[""],this.rowIdx=0},_e.prototype.newLine=function(e){for(this.rows.length>=this.virtualRowCount&&"function"==typeof this.beforeRowOverflow&&this.beforeRowOverflow(e),this.rows.length>0&&(this.rows.push(""),this.rowIdx++);this.rows.length>this.virtualRowCount;)this.rows.shift(),this.rowIdx--},_e.prototype.isEmpty=function(){return 0===this.rows.length||1===this.rows.length&&""===this.rows[0]},_e.prototype.addText=function(e){this.rows[this.rowIdx]+=e},_e.prototype.backspace=function(){if(!this.isEmpty()){var e=this.rows[this.rowIdx];this.rows[this.rowIdx]=e.substr(0,e.length-1)}};var be=function(e,t,i){this.serviceNum=e,this.text="",this.currentWindow=new _e(-1),this.windows=[],this.stream=i,"string"==typeof t&&this.createTextDecoder(t)};be.prototype.init=function(e,t){this.startPts=e;for(var i=0;i<8;i++)this.windows[i]=new _e(i),"function"==typeof t&&(this.windows[i].beforeRowOverflow=t)},be.prototype.setCurrentWindow=function(e){this.currentWindow=this.windows[e]},be.prototype.createTextDecoder=function(e){if("undefined"==typeof TextDecoder)this.stream.trigger("log",{level:"warn",message:"The `encoding` option is unsupported without TextDecoder support"});else try{this.textDecoder_=new TextDecoder(e)}catch(t){this.stream.trigger("log",{level:"warn",message:"TextDecoder could not be created with "+e+" encoding. "+t})}};var Te=function e(t){t=t||{},e.prototype.init.call(this);var i,n=this,r=t.captionServices||{},a={};Object.keys(r).forEach((function(e){i=r[e],/^SERVICE/.test(e)&&(a[e]=i.encoding)})),this.serviceEncodings=a,this.current708Packet=null,this.services={},this.push=function(e){3===e.type?(n.new708Packet(),n.add708Bytes(e)):(null===n.current708Packet&&n.new708Packet(),n.add708Bytes(e))}};Te.prototype=new H,Te.prototype.new708Packet=function(){null!==this.current708Packet&&this.push708Packet(),this.current708Packet={data:[],ptsVals:[]}},Te.prototype.add708Bytes=function(e){var t=e.ccData,i=t>>>8,n=255&t;this.current708Packet.ptsVals.push(e.pts),this.current708Packet.data.push(i),this.current708Packet.data.push(n)},Te.prototype.push708Packet=function(){var e=this.current708Packet,t=e.data,i=null,n=null,r=0,a=t[r++];for(e.seq=a>>6,e.sizeCode=63&a;r<t.length;r++)n=31&(a=t[r++]),7==(i=a>>5)&&n>0&&(i=a=t[r++]),this.pushServiceBlock(i,r,n),n>0&&(r+=n-1)},Te.prototype.pushServiceBlock=function(e,t,i){var n,r=t,a=this.current708Packet.data,s=this.services[e];for(s||(s=this.initService(e,r));r<t+i&&r<a.length;r++)n=a[r],ye(n)?r=this.handleText(r,s):24===n?r=this.multiByteCharacter(r,s):16===n?r=this.extendedCommands(r,s):128<=n&&n<=135?r=this.setCurrentWindow(r,s):152<=n&&n<=159?r=this.defineWindow(r,s):136===n?r=this.clearWindows(r,s):140===n?r=this.deleteWindows(r,s):137===n?r=this.displayWindows(r,s):138===n?r=this.hideWindows(r,s):139===n?r=this.toggleWindows(r,s):151===n?r=this.setWindowAttributes(r,s):144===n?r=this.setPenAttributes(r,s):145===n?r=this.setPenColor(r,s):146===n?r=this.setPenLocation(r,s):143===n?s=this.reset(r,s):8===n?s.currentWindow.backspace():12===n?s.currentWindow.clearText():13===n?s.currentWindow.pendingNewLine=!0:14===n?s.currentWindow.clearText():141===n&&r++},Te.prototype.extendedCommands=function(e,t){var i=this.current708Packet.data[++e];return ye(i)&&(e=this.handleText(e,t,{isExtended:!0})),e},Te.prototype.getPts=function(e){return this.current708Packet.ptsVals[Math.floor(e/2)]},Te.prototype.initService=function(e,t){var i,n,r=this;return(i="SERVICE"+e)in this.serviceEncodings&&(n=this.serviceEncodings[i]),this.services[e]=new be(e,n,r),this.services[e].init(this.getPts(t),(function(t){r.flushDisplayed(t,r.services[e])})),this.services[e]},Te.prototype.handleText=function(e,t,i){var n,r,a,s,o=i&&i.isExtended,u=i&&i.isMultiByte,l=this.current708Packet.data,c=o?4096:0,d=l[e],h=l[e+1],p=t.currentWindow;return t.textDecoder_&&!o?(u?(r=[d,h],e++):r=[d],n=t.textDecoder_.decode(new Uint8Array(r))):(s=ve[a=c|d]||a,n=4096&a&&a===s?"":String.fromCharCode(s)),p.pendingNewLine&&!p.isEmpty()&&p.newLine(this.getPts(e)),p.pendingNewLine=!1,p.addText(n),e},Te.prototype.multiByteCharacter=function(e,t){var i=this.current708Packet.data,n=i[e+1],r=i[e+2];return ye(n)&&ye(r)&&(e=this.handleText(++e,t,{isMultiByte:!0})),e},Te.prototype.setCurrentWindow=function(e,t){var i=7&this.current708Packet.data[e];return t.setCurrentWindow(i),e},Te.prototype.defineWindow=function(e,t){var i=this.current708Packet.data,n=i[e],r=7&n;t.setCurrentWindow(r);var a=t.currentWindow;return n=i[++e],a.visible=(32&n)>>5,a.rowLock=(16&n)>>4,a.columnLock=(8&n)>>3,a.priority=7&n,n=i[++e],a.relativePositioning=(128&n)>>7,a.anchorVertical=127&n,n=i[++e],a.anchorHorizontal=n,n=i[++e],a.anchorPoint=(240&n)>>4,a.rowCount=15&n,n=i[++e],a.columnCount=63&n,n=i[++e],a.windowStyle=(56&n)>>3,a.penStyle=7&n,a.virtualRowCount=a.rowCount+1,e},Te.prototype.setWindowAttributes=function(e,t){var i=this.current708Packet.data,n=i[e],r=t.currentWindow.winAttr;return n=i[++e],r.fillOpacity=(192&n)>>6,r.fillRed=(48&n)>>4,r.fillGreen=(12&n)>>2,r.fillBlue=3&n,n=i[++e],r.borderType=(192&n)>>6,r.borderRed=(48&n)>>4,r.borderGreen=(12&n)>>2,r.borderBlue=3&n,n=i[++e],r.borderType+=(128&n)>>5,r.wordWrap=(64&n)>>6,r.printDirection=(48&n)>>4,r.scrollDirection=(12&n)>>2,r.justify=3&n,n=i[++e],r.effectSpeed=(240&n)>>4,r.effectDirection=(12&n)>>2,r.displayEffect=3&n,e},Te.prototype.flushDisplayed=function(e,t){for(var i=[],n=0;n<8;n++)t.windows[n].visible&&!t.windows[n].isEmpty()&&i.push(t.windows[n].getText());t.endPts=e,t.text=i.join("\n\n"),this.pushCaption(t),t.startPts=e},Te.prototype.pushCaption=function(e){""!==e.text&&(this.trigger("data",{startPts:e.startPts,endPts:e.endPts,text:e.text,stream:"cc708_"+e.serviceNum}),e.text="",e.startPts=e.endPts)},Te.prototype.displayWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&(t.windows[r].visible=1);return e},Te.prototype.hideWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&(t.windows[r].visible=0);return e},Te.prototype.toggleWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&(t.windows[r].visible^=1);return e},Te.prototype.clearWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&t.windows[r].clearText();return e},Te.prototype.deleteWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&t.windows[r].reset();return e},Te.prototype.setPenAttributes=function(e,t){var i=this.current708Packet.data,n=i[e],r=t.currentWindow.penAttr;return n=i[++e],r.textTag=(240&n)>>4,r.offset=(12&n)>>2,r.penSize=3&n,n=i[++e],r.italics=(128&n)>>7,r.underline=(64&n)>>6,r.edgeType=(56&n)>>3,r.fontStyle=7&n,e},Te.prototype.setPenColor=function(e,t){var i=this.current708Packet.data,n=i[e],r=t.currentWindow.penColor;return n=i[++e],r.fgOpacity=(192&n)>>6,r.fgRed=(48&n)>>4,r.fgGreen=(12&n)>>2,r.fgBlue=3&n,n=i[++e],r.bgOpacity=(192&n)>>6,r.bgRed=(48&n)>>4,r.bgGreen=(12&n)>>2,r.bgBlue=3&n,n=i[++e],r.edgeRed=(48&n)>>4,r.edgeGreen=(12&n)>>2,r.edgeBlue=3&n,e},Te.prototype.setPenLocation=function(e,t){var i=this.current708Packet.data,n=i[e],r=t.currentWindow.penLoc;return t.currentWindow.pendingNewLine=!0,n=i[++e],r.row=15&n,n=i[++e],r.column=63&n,e},Te.prototype.reset=function(e,t){var i=this.getPts(e);return this.flushDisplayed(i,t),this.initService(t.serviceNum,e)};var we={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Se=function(e){return null===e?"":(e=we[e]||e,String.fromCharCode(e))},Ee=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],ke=function(){for(var e=[],t=15;t--;)e.push("");return e},Ce=function e(t,i){e.prototype.init.call(this),this.field_=t||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(e){var t,i,n,r,a;if((t=32639&e.ccData)!==this.lastControlCode_){if(4096==(61440&t)?this.lastControlCode_=t:t!==this.PADDING_&&(this.lastControlCode_=null),n=t>>>8,r=255&t,t!==this.PADDING_)if(t===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(t===this.END_OF_CAPTION_)this.mode_="popOn",this.clearFormatting(e.pts),this.flushDisplayed(e.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=e.pts;else if(t===this.ROLL_UP_2_ROWS_)this.rollUpRows_=2,this.setRollUp(e.pts);else if(t===this.ROLL_UP_3_ROWS_)this.rollUpRows_=3,this.setRollUp(e.pts);else if(t===this.ROLL_UP_4_ROWS_)this.rollUpRows_=4,this.setRollUp(e.pts);else if(t===this.CARRIAGE_RETURN_)this.clearFormatting(e.pts),this.flushDisplayed(e.pts),this.shiftRowsUp_(),this.startPts_=e.pts;else if(t===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1);else if(t===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(e.pts),this.displayed_=ke();else if(t===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=ke();else if(t===this.RESUME_DIRECT_CAPTIONING_)"paintOn"!==this.mode_&&(this.flushDisplayed(e.pts),this.displayed_=ke()),this.mode_="paintOn",this.startPts_=e.pts;else if(this.isSpecialCharacter(n,r))a=Se((n=(3&n)<<8)|r),this[this.mode_](e.pts,a),this.column_++;else if(this.isExtCharacter(n,r))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1),a=Se((n=(3&n)<<8)|r),this[this.mode_](e.pts,a),this.column_++;else if(this.isMidRowCode(n,r))this.clearFormatting(e.pts),this[this.mode_](e.pts," "),this.column_++,14==(14&r)&&this.addFormatting(e.pts,["i"]),1==(1&r)&&this.addFormatting(e.pts,["u"]);else if(this.isOffsetControlCode(n,r))this.column_+=3&r;else if(this.isPAC(n,r)){var s=Ee.indexOf(7968&t);"rollUp"===this.mode_&&(s-this.rollUpRows_+1<0&&(s=this.rollUpRows_-1),this.setRollUp(e.pts,s)),s!==this.row_&&(this.clearFormatting(e.pts),this.row_=s),1&r&&-1===this.formatting_.indexOf("u")&&this.addFormatting(e.pts,["u"]),16==(16&t)&&(this.column_=4*((14&t)>>1)),this.isColorPAC(r)&&14==(14&r)&&this.addFormatting(e.pts,["i"])}else this.isNormalChar(n)&&(0===r&&(r=null),a=Se(n),a+=Se(r),this[this.mode_](e.pts,a),this.column_+=a.length)}else this.lastControlCode_=null}};Ce.prototype=new H,Ce.prototype.flushDisplayed=function(e){var t=this.displayed_.map((function(e,t){try{return e.trim()}catch(e){return this.trigger("log",{level:"warn",message:"Skipping a malformed 608 caption at index "+t+"."}),""}}),this).join("\n").replace(/^\n+|\n+$/g,"");t.length&&this.trigger("data",{startPts:this.startPts_,endPts:e,text:t,stream:this.name_})},Ce.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=ke(),this.nonDisplayed_=ke(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.rollUpRows_=2,this.formatting_=[]},Ce.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Ce.prototype.isSpecialCharacter=function(e,t){return e===this.EXT_&&t>=48&&t<=63},Ce.prototype.isExtCharacter=function(e,t){return(e===this.EXT_+1||e===this.EXT_+2)&&t>=32&&t<=63},Ce.prototype.isMidRowCode=function(e,t){return e===this.EXT_&&t>=32&&t<=47},Ce.prototype.isOffsetControlCode=function(e,t){return e===this.OFFSET_&&t>=33&&t<=35},Ce.prototype.isPAC=function(e,t){return e>=this.BASE_&&e<this.BASE_+8&&t>=64&&t<=127},Ce.prototype.isColorPAC=function(e){return e>=64&&e<=79||e>=96&&e<=127},Ce.prototype.isNormalChar=function(e){return e>=32&&e<=127},Ce.prototype.setRollUp=function(e,t){if("rollUp"!==this.mode_&&(this.row_=14,this.mode_="rollUp",this.flushDisplayed(e),this.nonDisplayed_=ke(),this.displayed_=ke()),void 0!==t&&t!==this.row_)for(var i=0;i<this.rollUpRows_;i++)this.displayed_[t-i]=this.displayed_[this.row_-i],this.displayed_[this.row_-i]="";void 0===t&&(t=this.row_),this.topRow_=t-this.rollUpRows_+1},Ce.prototype.addFormatting=function(e,t){this.formatting_=this.formatting_.concat(t);var i=t.reduce((function(e,t){return e+"<"+t+">"}),"");this[this.mode_](e,i)},Ce.prototype.clearFormatting=function(e){if(this.formatting_.length){var t=this.formatting_.reverse().reduce((function(e,t){return e+"</"+t+">"}),"");this.formatting_=[],this[this.mode_](e,t)}},Ce.prototype.popOn=function(e,t){var i=this.nonDisplayed_[this.row_];i+=t,this.nonDisplayed_[this.row_]=i},Ce.prototype.rollUp=function(e,t){var i=this.displayed_[this.row_];i+=t,this.displayed_[this.row_]=i},Ce.prototype.shiftRowsUp_=function(){var e;for(e=0;e<this.topRow_;e++)this.displayed_[e]="";for(e=this.row_+1;e<15;e++)this.displayed_[e]="";for(e=this.topRow_;e<this.row_;e++)this.displayed_[e]=this.displayed_[e+1];this.displayed_[this.row_]=""},Ce.prototype.paintOn=function(e,t){var i=this.displayed_[this.row_];i+=t,this.displayed_[this.row_]=i};var Ie={CaptionStream:ge,Cea608Stream:Ce,Cea708Stream:Te},xe={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},Ae="shared",Pe=function(e,t){var i=1;for(e>t&&(i=-1);Math.abs(t-e)>4294967296;)e+=8589934592*i;return e},Le=function e(t){var i,n;e.prototype.init.call(this),this.type_=t||Ae,this.push=function(e){this.type_!==Ae&&e.type!==this.type_||(void 0===n&&(n=e.dts),e.dts=Pe(e.dts,n),e.pts=Pe(e.pts,n),i=e.dts,this.trigger("data",e))},this.flush=function(){n=i,this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")},this.discontinuity=function(){n=void 0,i=void 0},this.reset=function(){this.discontinuity(),this.trigger("reset")}};Le.prototype=new H;var De,Oe=Le,Me=Pe,Re=function(e,t,i){var n,r="";for(n=t;n<i;n++)r+="%"+("00"+e[n].toString(16)).slice(-2);return r},Ne=function(e,t,i){return decodeURIComponent(Re(e,t,i))},Ue=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},Be={TXXX:function(e){var t;if(3===e.data[0]){for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=Ne(e.data,1,t),e.value=Ne(e.data,t+1,e.data.length).replace(/\0*$/,"");break}e.data=e.value}},WXXX:function(e){var t;if(3===e.data[0])for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=Ne(e.data,1,t),e.url=Ne(e.data,t+1,e.data.length);break}},PRIV:function(e){var t,i;for(t=0;t<e.data.length;t++)if(0===e.data[t]){e.owner=(i=e.data,unescape(Re(i,0,t)));break}e.privateData=e.data.subarray(t+1),e.data=e.privateData}};(De=function(e){var t,i={descriptor:e&&e.descriptor},n=0,r=[],a=0;if(De.prototype.init.call(this),this.dispatchType=xe.METADATA_STREAM_TYPE.toString(16),i.descriptor)for(t=0;t<i.descriptor.length;t++)this.dispatchType+=("00"+i.descriptor[t].toString(16)).slice(-2);this.push=function(e){var t,i,s,o,u;if("timed-metadata"===e.type)if(e.dataAlignmentIndicator&&(a=0,r.length=0),0===r.length&&(e.data.length<10||e.data[0]!=="I".charCodeAt(0)||e.data[1]!=="D".charCodeAt(0)||e.data[2]!=="3".charCodeAt(0)))this.trigger("log",{level:"warn",message:"Skipping unrecognized metadata packet"});else if(r.push(e),a+=e.data.byteLength,1===r.length&&(n=Ue(e.data.subarray(6,10)),n+=10),!(a<n)){for(t={data:new Uint8Array(n),frames:[],pts:r[0].pts,dts:r[0].dts},u=0;u<n;)t.data.set(r[0].data.subarray(0,n-u),u),u+=r[0].data.byteLength,a-=r[0].data.byteLength,r.shift();i=10,64&t.data[5]&&(i+=4,i+=Ue(t.data.subarray(10,14)),n-=Ue(t.data.subarray(16,20)));do{if((s=Ue(t.data.subarray(i+4,i+8)))<1)return void this.trigger("log",{level:"warn",message:"Malformed ID3 frame encountered. Skipping metadata parsing."});if((o={id:String.fromCharCode(t.data[i],t.data[i+1],t.data[i+2],t.data[i+3]),data:t.data.subarray(i+10,i+s+10)}).key=o.id,Be[o.id]&&(Be[o.id](o),"com.apple.streaming.transportStreamTimestamp"===o.owner)){var l=o.data,c=(1&l[3])<<30|l[4]<<22|l[5]<<14|l[6]<<6|l[7]>>>2;c*=4,c+=3&l[7],o.timeStamp=c,void 0===t.pts&&void 0===t.dts&&(t.pts=o.timeStamp,t.dts=o.timeStamp),this.trigger("timestamp",o)}t.frames.push(o),i+=10,i+=s}while(i<n);this.trigger("data",t)}}}).prototype=new H;var Fe,je,He,qe=De,Ve=Oe,We=188;(Fe=function(){var e=new Uint8Array(We),t=0;Fe.prototype.init.call(this),this.push=function(i){var n,r=0,a=We;for(t?((n=new Uint8Array(i.byteLength+t)).set(e.subarray(0,t)),n.set(i,t),t=0):n=i;a<n.byteLength;)71!==n[r]||71!==n[a]?(r++,a++):(this.trigger("data",n.subarray(r,a)),r+=We,a+=We);r<n.byteLength&&(e.set(n.subarray(r),0),t=n.byteLength-r)},this.flush=function(){t===We&&71===e[0]&&(this.trigger("data",e),t=0),this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")},this.reset=function(){t=0,this.trigger("reset")}}).prototype=new H,(je=function(){var e,t,i,n;je.prototype.init.call(this),n=this,this.packetsWaitingForPmt=[],this.programMapTable=void 0,e=function(e,n){var r=0;n.payloadUnitStartIndicator&&(r+=e[r]+1),"pat"===n.type?t(e.subarray(r),n):i(e.subarray(r),n)},t=function(e,t){t.section_number=e[7],t.last_section_number=e[8],n.pmtPid=(31&e[10])<<8|e[11],t.pmtPid=n.pmtPid},i=function(e,t){var i,r;if(1&e[5]){for(n.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&e[1])<<8|e[2])-4,r=12+((15&e[10])<<8|e[11]);r<i;){var a=e[r],s=(31&e[r+1])<<8|e[r+2];a===xe.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:a===xe.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:a===xe.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=a),r+=5+((15&e[r+3])<<8|e[r+4])}t.programMapTable=n.programMapTable}},this.push=function(t){var i={},n=4;if(i.payloadUnitStartIndicator=!!(64&t[1]),i.pid=31&t[1],i.pid<<=8,i.pid|=t[2],(48&t[3])>>>4>1&&(n+=t[n]+1),0===i.pid)i.type="pat",e(t.subarray(n),i),this.trigger("data",i);else if(i.pid===this.pmtPid)for(i.type="pmt",e(t.subarray(n),i),this.trigger("data",i);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,n,i]):this.processPes_(t,n,i)},this.processPes_=function(e,t,i){i.pid===this.programMapTable.video?i.streamType=xe.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=xe.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=e.subarray(t),this.trigger("data",i)}}).prototype=new H,je.STREAM_TYPES={h264:27,adts:15},(He=function(){var e,t=this,i=!1,n={data:[],size:0},r={data:[],size:0},a={data:[],size:0},s=function(e,i,n){var r,a,s=new Uint8Array(e.size),o={type:i},u=0,l=0;if(e.data.length&&!(e.size<9)){for(o.trackId=e.data[0].pid,u=0;u<e.data.length;u++)a=e.data[u],s.set(a.data,l),l+=a.data.byteLength;var c,d,h,p;d=o,p=(c=s)[0]<<16|c[1]<<8|c[2],d.data=new Uint8Array,1===p&&(d.packetLength=6+(c[4]<<8|c[5]),d.dataAlignmentIndicator=0!=(4&c[6]),192&(h=c[7])&&(d.pts=(14&c[9])<<27|(255&c[10])<<20|(254&c[11])<<12|(255&c[12])<<5|(254&c[13])>>>3,d.pts*=4,d.pts+=(6&c[13])>>>1,d.dts=d.pts,64&h&&(d.dts=(14&c[14])<<27|(255&c[15])<<20|(254&c[16])<<12|(255&c[17])<<5|(254&c[18])>>>3,d.dts*=4,d.dts+=(6&c[18])>>>1)),d.data=c.subarray(9+c[8])),r="video"===i||o.packetLength<=e.size,(n||r)&&(e.size=0,e.data.length=0),r&&t.trigger("data",o)}};He.prototype.init.call(this),this.push=function(o){({pat:function(){},pes:function(){var e,t;switch(o.streamType){case xe.H264_STREAM_TYPE:e=n,t="video";break;case xe.ADTS_STREAM_TYPE:e=r,t="audio";break;case xe.METADATA_STREAM_TYPE:e=a,t="timed-metadata";break;default:return}o.payloadUnitStartIndicator&&s(e,t,!0),e.data.push(o),e.size+=o.data.byteLength},pmt:function(){var n={type:"metadata",tracks:[]};null!==(e=o.programMapTable).video&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),i=!0,t.trigger("data",n)}})[o.type]()},this.reset=function(){n.size=0,n.data.length=0,r.size=0,r.data.length=0,this.trigger("reset")},this.flushStreams_=function(){s(n,"video"),s(r,"audio"),s(a,"timed-metadata")},this.flush=function(){if(!i&&e){var n={type:"metadata",tracks:[]};null!==e.video&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&n.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),t.trigger("data",n)}i=!1,this.flushStreams_(),this.trigger("done")}}).prototype=new H;var Ge={PAT_PID:0,MP2T_PACKET_LENGTH:We,TransportPacketStream:Fe,TransportParseStream:je,ElementaryStream:He,TimestampRolloverStream:Ve,CaptionStream:Ie.CaptionStream,Cea608Stream:Ie.Cea608Stream,Cea708Stream:Ie.Cea708Stream,MetadataStream:qe};for(var ze in xe)xe.hasOwnProperty(ze)&&(Ge[ze]=xe[ze]);var Xe,Ke=Ge,Ye=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(Xe=function(e){var t,i=0;Xe.prototype.init.call(this),this.skipWarn_=function(e,t){this.trigger("log",{level:"warn",message:"adts skiping bytes "+e+" to "+t+" in frame "+i+" outside syncword"})},this.push=function(n){var r,a,s,o,u,l=0;if(e||(i=0),"audio"===n.type){var c;for(t&&t.length?(s=t,(t=new Uint8Array(s.byteLength+n.data.byteLength)).set(s),t.set(n.data,s.byteLength)):t=n.data;l+7<t.length;)if(255===t[l]&&240==(246&t[l+1])){if("number"==typeof c&&(this.skipWarn_(c,l),c=null),a=2*(1&~t[l+1]),r=(3&t[l+3])<<11|t[l+4]<<3|(224&t[l+5])>>5,u=9e4*(o=1024*(1+(3&t[l+6])))/Ye[(60&t[l+2])>>>2],t.byteLength-l<r)break;this.trigger("data",{pts:n.pts+i*u,dts:n.dts+i*u,sampleCount:o,audioobjecttype:1+(t[l+2]>>>6&3),channelcount:(1&t[l+2])<<2|(192&t[l+3])>>>6,samplerate:Ye[(60&t[l+2])>>>2],samplingfrequencyindex:(60&t[l+2])>>>2,samplesize:16,data:t.subarray(l+7+a,l+r)}),i++,l+=r}else"number"!=typeof c&&(c=l),l++;"number"==typeof c&&(this.skipWarn_(c,l),c=null),t=t.subarray(l)}},this.flush=function(){i=0,this.trigger("done")},this.reset=function(){t=void 0,this.trigger("reset")},this.endTimeline=function(){t=void 0,this.trigger("endedtimeline")}}).prototype=new H;var Qe,$e,Je,Ze=Xe,et=function(e){var t=e.byteLength,i=0,n=0;this.length=function(){return 8*t},this.bitsAvailable=function(){return 8*t+n},this.loadWord=function(){var r=e.byteLength-t,a=new Uint8Array(4),s=Math.min(4,t);if(0===s)throw new Error("no bytes available");a.set(e.subarray(r,r+s)),i=new DataView(a.buffer).getUint32(0),n=8*s,t-=s},this.skipBits=function(e){var r;n>e?(i<<=e,n-=e):(e-=n,e-=8*(r=Math.floor(e/8)),t-=r,this.loadWord(),i<<=e,n-=e)},this.readBits=function(e){var r=Math.min(n,e),a=i>>>32-r;return(n-=r)>0?i<<=r:t>0&&this.loadWord(),(r=e-r)>0?a<<r|this.readBits(r):a},this.skipLeadingZeros=function(){var e;for(e=0;e<n;++e)if(0!=(i&2147483648>>>e))return i<<=e,n-=e,e;return this.loadWord(),e+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var e=this.skipLeadingZeros();return this.readBits(e+1)-1},this.readExpGolomb=function(){var e=this.readUnsignedExpGolomb();return 1&e?1+e>>>1:-1*(e>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};($e=function(){var e,t,i=0;$e.prototype.init.call(this),this.push=function(n){var r;t?((r=new Uint8Array(t.byteLength+n.data.byteLength)).set(t),r.set(n.data,t.byteLength),t=r):t=n.data;for(var a=t.byteLength;i<a-3;i++)if(1===t[i+2]){e=i+5;break}for(;e<a;)switch(t[e]){case 0:if(0!==t[e-1]){e+=2;break}if(0!==t[e-2]){e++;break}i+3!==e-2&&this.trigger("data",t.subarray(i+3,e-2));do{e++}while(1!==t[e]&&e<a);i=e-2,e+=3;break;case 1:if(0!==t[e-1]||0!==t[e-2]){e+=3;break}this.trigger("data",t.subarray(i+3,e-2)),i=e-2,e+=3;break;default:e+=3}t=t.subarray(i),e-=i,i=0},this.reset=function(){t=null,i=0,this.trigger("reset")},this.flush=function(){t&&t.byteLength>3&&this.trigger("data",t.subarray(i+3)),t=null,i=0,this.trigger("done")},this.endTimeline=function(){this.flush(),this.trigger("endedtimeline")}}).prototype=new H,Je={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(Qe=function(){var e,t,i,n,r,a,s,o=new $e;Qe.prototype.init.call(this),e=this,this.push=function(e){"video"===e.type&&(t=e.trackId,i=e.pts,n=e.dts,o.push(e))},o.on("data",(function(s){var o={trackId:t,pts:i,dts:n,data:s,nalUnitTypeCode:31&s[0]};switch(o.nalUnitTypeCode){case 5:o.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:o.nalUnitType="sei_rbsp",o.escapedRBSP=r(s.subarray(1));break;case 7:o.nalUnitType="seq_parameter_set_rbsp",o.escapedRBSP=r(s.subarray(1)),o.config=a(o.escapedRBSP);break;case 8:o.nalUnitType="pic_parameter_set_rbsp";break;case 9:o.nalUnitType="access_unit_delimiter_rbsp"}e.trigger("data",o)})),o.on("done",(function(){e.trigger("done")})),o.on("partialdone",(function(){e.trigger("partialdone")})),o.on("reset",(function(){e.trigger("reset")})),o.on("endedtimeline",(function(){e.trigger("endedtimeline")})),this.flush=function(){o.flush()},this.partialFlush=function(){o.partialFlush()},this.reset=function(){o.reset()},this.endTimeline=function(){o.endTimeline()},s=function(e,t){var i,n=8,r=8;for(i=0;i<e;i++)0!==r&&(r=(n+t.readExpGolomb()+256)%256),n=0===r?n:r},r=function(e){for(var t,i,n=e.byteLength,r=[],a=1;a<n-2;)0===e[a]&&0===e[a+1]&&3===e[a+2]?(r.push(a+2),a+=2):a++;if(0===r.length)return e;t=n-r.length,i=new Uint8Array(t);var s=0;for(a=0;a<t;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=e[s];return i},a=function(e){var t,i,n,r,a,o,u,l,c,d,h,p,f=0,m=0,g=0,v=0,y=[1,1];if(i=(t=new et(e)).readUnsignedByte(),r=t.readUnsignedByte(),n=t.readUnsignedByte(),t.skipUnsignedExpGolomb(),Je[i]&&(3===(a=t.readUnsignedExpGolomb())&&t.skipBits(1),t.skipUnsignedExpGolomb(),t.skipUnsignedExpGolomb(),t.skipBits(1),t.readBoolean()))for(h=3!==a?8:12,p=0;p<h;p++)t.readBoolean()&&s(p<6?16:64,t);if(t.skipUnsignedExpGolomb(),0===(o=t.readUnsignedExpGolomb()))t.readUnsignedExpGolomb();else if(1===o)for(t.skipBits(1),t.skipExpGolomb(),t.skipExpGolomb(),u=t.readUnsignedExpGolomb(),p=0;p<u;p++)t.skipExpGolomb();if(t.skipUnsignedExpGolomb(),t.skipBits(1),l=t.readUnsignedExpGolomb(),c=t.readUnsignedExpGolomb(),0===(d=t.readBits(1))&&t.skipBits(1),t.skipBits(1),t.readBoolean()&&(f=t.readUnsignedExpGolomb(),m=t.readUnsignedExpGolomb(),g=t.readUnsignedExpGolomb(),v=t.readUnsignedExpGolomb()),t.readBoolean()&&t.readBoolean()){switch(t.readUnsignedByte()){case 1:y=[1,1];break;case 2:y=[12,11];break;case 3:y=[10,11];break;case 4:y=[16,11];break;case 5:y=[40,33];break;case 6:y=[24,11];break;case 7:y=[20,11];break;case 8:y=[32,11];break;case 9:y=[80,33];break;case 10:y=[18,11];break;case 11:y=[15,11];break;case 12:y=[64,33];break;case 13:y=[160,99];break;case 14:y=[4,3];break;case 15:y=[3,2];break;case 16:y=[2,1];break;case 255:y=[t.readUnsignedByte()<<8|t.readUnsignedByte(),t.readUnsignedByte()<<8|t.readUnsignedByte()]}y&&(y[0],y[1])}return{profileIdc:i,levelIdc:n,profileCompatibility:r,width:16*(l+1)-2*f-2*m,height:(2-d)*(c+1)*16-2*g-2*v,sarRatio:y}}}).prototype=new H;var tt,it={H264Stream:Qe,NalByteStream:$e},nt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],rt=function(e,t){var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9];return i=i>=0?i:0,(16&e[t+5])>>4?i+20:i+10},at=function e(t,i){return t.length-i<10||t[i]!=="I".charCodeAt(0)||t[i+1]!=="D".charCodeAt(0)||t[i+2]!=="3".charCodeAt(0)?i:e(t,i+=rt(t,i))},st=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},ot={isLikelyAacData:function(e){var t=at(e,0);return e.length>=t+2&&255==(255&e[t])&&240==(240&e[t+1])&&16==(22&e[t+1])},parseId3TagSize:rt,parseAdtsSize:function(e,t){var i=(224&e[t+5])>>5,n=e[t+4]<<3;return 6144&e[t+3]|n|i},parseType:function(e,t){return e[t]==="I".charCodeAt(0)&&e[t+1]==="D".charCodeAt(0)&&e[t+2]==="3".charCodeAt(0)?"timed-metadata":!0&e[t]&&240==(240&e[t+1])?"audio":null},parseSampleRate:function(e){for(var t=0;t+5<e.length;){if(255===e[t]&&240==(246&e[t+1]))return nt[(60&e[t+2])>>>2];t++}return null},parseAacTimestamp:function(e){var t,i,n;t=10,64&e[5]&&(t+=4,t+=st(e.subarray(10,14)));do{if((i=st(e.subarray(t+4,t+8)))<1)return null;if("PRIV"===String.fromCharCode(e[t],e[t+1],e[t+2],e[t+3])){n=e.subarray(t+10,t+i+10);for(var r=0;r<n.byteLength;r++)if(0===n[r]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(e,t,i){var n,r="";for(n=0;n<i;n++)r+="%"+("00"+e[n].toString(16)).slice(-2);return r}(n,0,r))){var a=n.subarray(r+1),s=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;return(s*=4)+(3&a[7])}break}}t+=10,t+=i}while(t<e.byteLength);return null}};(tt=function(){var e=new Uint8Array,t=0;tt.prototype.init.call(this),this.setTimestamp=function(e){t=e},this.push=function(i){var n,r,a,s,o=0,u=0;for(e.length?(s=e.length,(e=new Uint8Array(i.byteLength+s)).set(e.subarray(0,s)),e.set(i,s)):e=i;e.length-u>=3;)if(e[u]!=="I".charCodeAt(0)||e[u+1]!=="D".charCodeAt(0)||e[u+2]!=="3".charCodeAt(0))if(255!=(255&e[u])||240!=(240&e[u+1]))u++;else{if(e.length-u<7)break;if(u+(o=ot.parseAdtsSize(e,u))>e.length)break;a={type:"audio",data:e.subarray(u,u+o),pts:t,dts:t},this.trigger("data",a),u+=o}else{if(e.length-u<10)break;if(u+(o=ot.parseId3TagSize(e,u))>e.length)break;r={type:"timed-metadata",data:e.subarray(u,u+o)},this.trigger("data",r),u+=o}n=e.length-u,e=n>0?e.subarray(u):new Uint8Array},this.reset=function(){e=new Uint8Array,this.trigger("reset")},this.endTimeline=function(){e=new Uint8Array,this.trigger("endedtimeline")}}).prototype=new H;var ut,lt,ct,dt,ht=tt,pt=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],ft=["width","height","profileIdc","levelIdc","profileCompatibility","sarRatio"],mt=it.H264Stream,gt=ot.isLikelyAacData,vt=function(e,t){t.stream=e,this.trigger("log",t)},yt=function(e,t){for(var i=Object.keys(t),n=0;n<i.length;n++){var r=i[n];"headOfPipeline"!==r&&t[r].on&&t[r].on("log",vt.bind(e,r))}},_t=function(e,t){var i;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0},bt=function(e,t,i,n,r,a){return{start:{dts:e,pts:e+(i-t)},end:{dts:e+(n-t),pts:e+(r-i)},prependedContentDuration:a,baseMediaDecodeTime:e}};(lt=function(e,t){var i,n=[],r=0,a=0,s=1/0;i=(t=t||{}).firstSequenceNumber||0,lt.prototype.init.call(this),this.push=function(t){me(e,t),e&&pt.forEach((function(i){e[i]=t[i]})),n.push(t)},this.setEarliestDts=function(e){r=e},this.setVideoBaseMediaDecodeTime=function(e){s=e},this.setAudioAppendStart=function(e){a=e},this.flush=function(){var o,u,l,c,d,h,p;0!==n.length?(o=function(e,t,i){return t.minSegmentDts>=i?e:(t.minSegmentDts=1/0,e.filter((function(e){return e.dts>=i&&(t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),t.minSegmentPts=t.minSegmentDts,!0)})))}(n,e,r),e.baseMediaDecodeTime=fe(e,t.keepOriginalTimestamps),p=he(e,o,a,s),e.samples=function(e){var t,i,n=[];for(t=0;t<e.length;t++)i=e[t],n.push({size:i.data.byteLength,duration:1024});return n}(o),l=Z(function(e){var t,i,n=0,r=new Uint8Array(function(e){var t,i=0;for(t=0;t<e.length;t++)i+=e[t].data.byteLength;return i}(e));for(t=0;t<e.length;t++)i=e[t],r.set(i.data,n),n+=i.data.byteLength;return r}(o)),n=[],u=ee(i,[e]),c=new Uint8Array(u.byteLength+l.byteLength),i++,c.set(u),c.set(l,u.byteLength),pe(e),d=Math.ceil(9216e4/e.samplerate),o.length&&(h=o.length*d,this.trigger("segmentTimingInfo",bt(le(e.baseMediaDecodeTime,e.samplerate),o[0].dts,o[0].pts,o[0].dts+h,o[0].pts+h,p||0)),this.trigger("timingInfo",{start:o[0].pts,end:o[0].pts+h})),this.trigger("data",{track:e,boxes:c}),this.trigger("done","AudioSegmentStream")):this.trigger("done","AudioSegmentStream")},this.reset=function(){pe(e),n=[],this.trigger("reset")}}).prototype=new H,(ut=function(e,t){var i,n,r,a=[],s=[];i=(t=t||{}).firstSequenceNumber||0,ut.prototype.init.call(this),delete e.minPTS,this.gopCache_=[],this.push=function(t){me(e,t),"seq_parameter_set_rbsp"!==t.nalUnitType||n||(n=t.config,e.sps=[t.data],ft.forEach((function(t){e[t]=n[t]}),this)),"pic_parameter_set_rbsp"!==t.nalUnitType||r||(r=t.data,e.pps=[t.data]),a.push(t)},this.flush=function(){for(var n,r,o,u,l,c,d,h=0;a.length&&"access_unit_delimiter_rbsp"!==a[0].nalUnitType;)a.shift();if(0===a.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if((r=function(e){var t,i,n=[],r=[];for(n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=e[0].pts,n.dts=e[0].dts,r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=e[0].pts,r.dts=e[0].dts,t=0;t<e.length;t++)(i=e[t]).keyFrame?(n.length&&(r.push(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration),(n=[i]).nalCount=i.length,n.byteLength=i.byteLength,n.pts=i.pts,n.dts=i.dts,n.duration=i.duration):(n.duration+=i.duration,n.nalCount+=i.length,n.byteLength+=i.byteLength,n.push(i));return r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration,r.push(n),r}(function(e){var t,i,n=[],r=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,n.byteLength=0,t=0;t<e.length;t++)"access_unit_delimiter_rbsp"===(i=e[t]).nalUnitType?(n.length&&(n.duration=i.dts-n.dts,r.byteLength+=n.byteLength,r.nalCount+=n.length,r.duration+=n.duration,r.push(n)),(n=[i]).byteLength=i.data.byteLength,n.pts=i.pts,n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0),n.duration=i.dts-n.dts,n.byteLength+=i.data.byteLength,n.push(i));return r.length&&(!n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration),r.byteLength+=n.byteLength,r.nalCount+=n.length,r.duration+=n.duration,r.push(n),r}(a)))[0][0].keyFrame||((n=this.getGopForFusion_(a[0],e))?(h=n.duration,r.unshift(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.pts=n.pts,r.dts=n.dts,r.duration+=n.duration):r=function(e){var t;return!e[0][0].keyFrame&&e.length>1&&(t=e.shift(),e.byteLength-=t.byteLength,e.nalCount-=t.nalCount,e[0][0].dts=t.dts,e[0][0].pts=t.pts,e[0][0].duration+=t.duration),e}(r)),s.length){var p;if(!(p=t.alignGopsAtEnd?this.alignGopsAtEnd_(r):this.alignGopsAtStart_(r)))return this.gopCache_.unshift({gop:r.pop(),pps:e.pps,sps:e.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),a=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");pe(e),r=p}me(e,r),e.samples=function(e,t){var i,n,r,a,s,o=t||0,u=[];for(i=0;i<e.length;i++)for(a=e[i],n=0;n<a.length;n++)s=a[n],o+=(r=te(s,o)).size,u.push(r);return u}(r),u=Z(function(e){var t,i,n,r,a,s,o=0,u=e.byteLength,l=e.nalCount,c=new Uint8Array(u+4*l),d=new DataView(c.buffer);for(t=0;t<e.length;t++)for(r=e[t],i=0;i<r.length;i++)for(a=r[i],n=0;n<a.length;n++)s=a[n],d.setUint32(o,s.data.byteLength),o+=4,c.set(s.data,o),o+=s.data.byteLength;return c}(r)),e.baseMediaDecodeTime=fe(e,t.keepOriginalTimestamps),this.trigger("processedGopsInfo",r.map((function(e){return{pts:e.pts,dts:e.dts,byteLength:e.byteLength}}))),c=r[0],d=r[r.length-1],this.trigger("segmentTimingInfo",bt(e.baseMediaDecodeTime,c.dts,c.pts,d.dts+d.duration,d.pts+d.duration,h)),this.trigger("timingInfo",{start:r[0].pts,end:r[r.length-1].pts+r[r.length-1].duration}),this.gopCache_.unshift({gop:r.pop(),pps:e.pps,sps:e.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),a=[],this.trigger("baseMediaDecodeTime",e.baseMediaDecodeTime),this.trigger("timelineStartInfo",e.timelineStartInfo),o=ee(i,[e]),l=new Uint8Array(o.byteLength+u.byteLength),i++,l.set(o),l.set(u,o.byteLength),this.trigger("data",{track:e,boxes:l}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.reset=function(){this.resetStream_(),a=[],this.gopCache_.length=0,s.length=0,this.trigger("reset")},this.resetStream_=function(){pe(e),n=void 0,r=void 0},this.getGopForFusion_=function(t){var i,n,r,a,s,o=1/0;for(s=0;s<this.gopCache_.length;s++)r=(a=this.gopCache_[s]).gop,e.pps&&_t(e.pps[0],a.pps[0])&&e.sps&&_t(e.sps[0],a.sps[0])&&(r.dts<e.timelineStartInfo.dts||(i=t.dts-r.dts-r.duration)>=-1e4&&i<=45e3&&(!n||o>i)&&(n=a,o=i));return n?n.gop:null},this.alignGopsAtStart_=function(e){var t,i,n,r,a,o,u,l;for(a=e.byteLength,o=e.nalCount,u=e.duration,t=i=0;t<s.length&&i<e.length&&(n=s[t],r=e[i],n.pts!==r.pts);)r.pts>n.pts?t++:(i++,a-=r.byteLength,o-=r.nalCount,u-=r.duration);return 0===i?e:i===e.length?null:((l=e.slice(i)).byteLength=a,l.duration=u,l.nalCount=o,l.pts=l[0].pts,l.dts=l[0].dts,l)},this.alignGopsAtEnd_=function(e){var t,i,n,r,a,o,u;for(t=s.length-1,i=e.length-1,a=null,o=!1;t>=0&&i>=0;){if(n=s[t],r=e[i],n.pts===r.pts){o=!0;break}n.pts>r.pts?t--:(t===s.length-1&&(a=i),i--)}if(!o&&null===a)return null;if(0===(u=o?i:a))return e;var l=e.slice(u),c=l.reduce((function(e,t){return e.byteLength+=t.byteLength,e.duration+=t.duration,e.nalCount+=t.nalCount,e}),{byteLength:0,duration:0,nalCount:0});return l.byteLength=c.byteLength,l.duration=c.duration,l.nalCount=c.nalCount,l.pts=l[0].pts,l.dts=l[0].dts,l},this.alignGopsWith=function(e){s=e}}).prototype=new H,(dt=function(e,t){this.numberOfTracks=0,this.metadataStream=t,void 0!==(e=e||{}).remux?this.remuxTracks=!!e.remux:this.remuxTracks=!0,"boolean"==typeof e.keepOriginalTimestamps?this.keepOriginalTimestamps=e.keepOriginalTimestamps:this.keepOriginalTimestamps=!1,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,dt.prototype.init.call(this),this.push=function(e){return e.text?this.pendingCaptions.push(e):e.frames?this.pendingMetadata.push(e):(this.pendingTracks.push(e.track),this.pendingBytes+=e.boxes.byteLength,"video"===e.track.type&&(this.videoTrack=e.track,this.pendingBoxes.push(e.boxes)),void("audio"===e.track.type&&(this.audioTrack=e.track,this.pendingBoxes.unshift(e.boxes))))}}).prototype=new H,dt.prototype.flush=function(e){var t,i,n,a,s=0,o={captions:[],captionStreams:{},metadata:[],info:{}},l=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==e&&"AudioSegmentStream"!==e)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}if(this.videoTrack?(l=this.videoTrack.timelineStartInfo.pts,ft.forEach((function(e){o.info[e]=this.videoTrack[e]}),this)):this.audioTrack&&(l=this.audioTrack.timelineStartInfo.pts,pt.forEach((function(e){o.info[e]=this.audioTrack[e]}),this)),this.videoTrack||this.audioTrack){for(1===this.pendingTracks.length?o.type=this.pendingTracks[0].type:o.type="combined",this.emittedTracks+=this.pendingTracks.length,n=function(e){var t,i=r(),n=u(e);return(t=new Uint8Array(i.byteLength+n.byteLength)).set(i),t.set(n,i.byteLength),t}(this.pendingTracks),o.initSegment=new Uint8Array(n.byteLength),o.initSegment.set(n),o.data=new Uint8Array(this.pendingBytes),a=0;a<this.pendingBoxes.length;a++)o.data.set(this.pendingBoxes[a],s),s+=this.pendingBoxes[a].byteLength;for(a=0;a<this.pendingCaptions.length;a++)(t=this.pendingCaptions[a]).startTime=de(t.startPts,l,this.keepOriginalTimestamps),t.endTime=de(t.endPts,l,this.keepOriginalTimestamps),o.captionStreams[t.stream]=!0,o.captions.push(t);for(a=0;a<this.pendingMetadata.length;a++)(i=this.pendingMetadata[a]).cueTime=de(i.pts,l,this.keepOriginalTimestamps),o.metadata.push(i);for(o.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",o),a=0;a<o.captions.length;a++)t=o.captions[a],this.trigger("caption",t);for(a=0;a<o.metadata.length;a++)i=o.metadata[a],this.trigger("id3Frame",i)}this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},dt.prototype.setRemux=function(e){this.remuxTracks=e},(ct=function(e){var t,i,n=this,r=!0;ct.prototype.init.call(this),e=e||{},this.baseMediaDecodeTime=e.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var r={};this.transmuxPipeline_=r,r.type="aac",r.metadataStream=new Ke.MetadataStream,r.aacStream=new ht,r.audioTimestampRolloverStream=new Ke.TimestampRolloverStream("audio"),r.timedMetadataTimestampRolloverStream=new Ke.TimestampRolloverStream("timed-metadata"),r.adtsStream=new Ze,r.coalesceStream=new dt(e,r.metadataStream),r.headOfPipeline=r.aacStream,r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream),r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream),r.metadataStream.on("timestamp",(function(e){r.aacStream.setTimestamp(e.timeStamp)})),r.aacStream.on("data",(function(a){"timed-metadata"!==a.type&&"audio"!==a.type||r.audioSegmentStream||(i=i||{timelineStartInfo:{baseMediaDecodeTime:n.baseMediaDecodeTime},codec:"adts",type:"audio"},r.coalesceStream.numberOfTracks++,r.audioSegmentStream=new lt(i,e),r.audioSegmentStream.on("log",n.getLogTrigger_("audioSegmentStream")),r.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo")),r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream),n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!t}))})),r.coalesceStream.on("data",this.trigger.bind(this,"data")),r.coalesceStream.on("done",this.trigger.bind(this,"done")),yt(this,r)},this.setupTsPipeline=function(){var r={};this.transmuxPipeline_=r,r.type="ts",r.metadataStream=new Ke.MetadataStream,r.packetStream=new Ke.TransportPacketStream,r.parseStream=new Ke.TransportParseStream,r.elementaryStream=new Ke.ElementaryStream,r.timestampRolloverStream=new Ke.TimestampRolloverStream,r.adtsStream=new Ze,r.h264Stream=new mt,r.captionStream=new Ke.CaptionStream(e),r.coalesceStream=new dt(e,r.metadataStream),r.headOfPipeline=r.packetStream,r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream),r.timestampRolloverStream.pipe(r.h264Stream),r.timestampRolloverStream.pipe(r.adtsStream),r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream),r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream),r.elementaryStream.on("data",(function(a){var s;if("metadata"===a.type){for(s=a.tracks.length;s--;)t||"video"!==a.tracks[s].type?i||"audio"!==a.tracks[s].type||((i=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime):(t=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime;t&&!r.videoSegmentStream&&(r.coalesceStream.numberOfTracks++,r.videoSegmentStream=new ut(t,e),r.videoSegmentStream.on("log",n.getLogTrigger_("videoSegmentStream")),r.videoSegmentStream.on("timelineStartInfo",(function(t){i&&!e.keepOriginalTimestamps&&(i.timelineStartInfo=t,r.audioSegmentStream.setEarliestDts(t.dts-n.baseMediaDecodeTime))})),r.videoSegmentStream.on("processedGopsInfo",n.trigger.bind(n,"gopInfo")),r.videoSegmentStream.on("segmentTimingInfo",n.trigger.bind(n,"videoSegmentTimingInfo")),r.videoSegmentStream.on("baseMediaDecodeTime",(function(e){i&&r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)})),r.videoSegmentStream.on("timingInfo",n.trigger.bind(n,"videoTimingInfo")),r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)),i&&!r.audioSegmentStream&&(r.coalesceStream.numberOfTracks++,r.audioSegmentStream=new lt(i,e),r.audioSegmentStream.on("log",n.getLogTrigger_("audioSegmentStream")),r.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo")),r.audioSegmentStream.on("segmentTimingInfo",n.trigger.bind(n,"audioSegmentTimingInfo")),r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)),n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!t})}})),r.coalesceStream.on("data",this.trigger.bind(this,"data")),r.coalesceStream.on("id3Frame",(function(e){e.dispatchType=r.metadataStream.dispatchType,n.trigger("id3Frame",e)})),r.coalesceStream.on("caption",this.trigger.bind(this,"caption")),r.coalesceStream.on("done",this.trigger.bind(this,"done")),yt(this,r)},this.setBaseMediaDecodeTime=function(n){var r=this.transmuxPipeline_;e.keepOriginalTimestamps||(this.baseMediaDecodeTime=n),i&&(i.timelineStartInfo.dts=void 0,i.timelineStartInfo.pts=void 0,pe(i),r.audioTimestampRolloverStream&&r.audioTimestampRolloverStream.discontinuity()),t&&(r.videoSegmentStream&&(r.videoSegmentStream.gopCache_=[]),t.timelineStartInfo.dts=void 0,t.timelineStartInfo.pts=void 0,pe(t),r.captionStream.reset()),r.timestampRolloverStream&&r.timestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(e){i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)},this.setRemux=function(t){var i=this.transmuxPipeline_;e.remux=t,i&&i.coalesceStream&&i.coalesceStream.setRemux(t)},this.alignGopsWith=function(e){t&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)},this.getLogTrigger_=function(e){var t=this;return function(i){i.stream=e,t.trigger("log",i)}},this.push=function(e){if(r){var t=gt(e);t&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():t||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),r=!1}this.transmuxPipeline_.headOfPipeline.push(e)},this.flush=function(){r=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.endTimeline=function(){this.transmuxPipeline_.headOfPipeline.endTimeline()},this.reset=function(){this.transmuxPipeline_.headOfPipeline&&this.transmuxPipeline_.headOfPipeline.reset()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new H;var Tt,wt={Transmuxer:ct,VideoSegmentStream:ut,AudioSegmentStream:lt,AUDIO_PROPERTIES:pt,VIDEO_PROPERTIES:ft,generateSegmentTimingInfo:bt},St=function(e){return e>>>0},Et=function(e){var t="";return t+=String.fromCharCode(e[0]),t+=String.fromCharCode(e[1]),(t+=String.fromCharCode(e[2]))+String.fromCharCode(e[3])},kt=St,Ct=function e(t,i){var n,r,a,s,o,u=[];if(!i.length)return null;for(n=0;n<t.byteLength;)r=kt(t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3]),a=Et(t.subarray(n+4,n+8)),s=r>1?n+r:t.byteLength,a===i[0]&&(1===i.length?u.push(t.subarray(n+8,s)):(o=e(t.subarray(n+8,s),i.slice(1))).length&&(u=u.concat(o))),n=s;return u},It=St,xt=V.getUint64,At=function(e){return{isLeading:(12&e[0])>>>2,dependsOn:3&e[0],isDependedOn:(192&e[1])>>>6,hasRedundancy:(48&e[1])>>>4,paddingValue:(14&e[1])>>>1,isNonSyncSample:1&e[1],degradationPriority:e[2]<<8|e[3]}},Pt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Lt="undefined"!=typeof window?window:void 0!==Pt?Pt:"undefined"!=typeof self?self:{},Dt=function(e){for(var t,i,n=e.byteLength,r=[],a=1;a<n-2;)0===e[a]&&0===e[a+1]&&3===e[a+2]?(r.push(a+2),a+=2):a++;if(0===r.length)return e;t=n-r.length,i=new Uint8Array(t);var s=0;for(a=0;a<t;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=e[s];return i},Ot=Ie.CaptionStream,Mt=function(e,t){for(var i=e,n=0;n<t.length;n++){var r=t[n];if(i<r.size)return r;i-=r.size}return null},Rt=function(e,t){var i=Ct(e,["moof","traf"]),n=Ct(e,["mdat"]),r={},a=[];return n.forEach((function(e,t){var n=i[t];a.push({mdat:e,traf:n})})),a.forEach((function(e){var i,n=e.mdat,a=e.traf,s=function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength),n={version:e[0],flags:new Uint8Array(e.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],u=32&n.flags[2],l=65536&n.flags[0],c=131072&n.flags[0];return t=8,r&&(t+=4,n.baseDataOffset=i.getUint32(12),t+=4),a&&(n.sampleDescriptionIndex=i.getUint32(t),t+=4),s&&(n.defaultSampleDuration=i.getUint32(t),t+=4),o&&(n.defaultSampleSize=i.getUint32(t),t+=4),u&&(n.defaultSampleFlags=i.getUint32(t)),l&&(n.durationIsEmpty=!0),!r&&c&&(n.baseDataOffsetIsMoof=!0),n}(Ct(a,["tfhd"])[0]),o=s.trackId,u=Ct(a,["tfdt"]),l=u.length>0?function(e){var t={version:e[0],flags:new Uint8Array(e.subarray(1,4))};return 1===t.version?t.baseMediaDecodeTime=xt(e.subarray(4)):t.baseMediaDecodeTime=It(e[4]<<24|e[5]<<16|e[6]<<8|e[7]),t}(u[0]).baseMediaDecodeTime:0,c=Ct(a,["trun"]);t===o&&c.length>0&&(i=function(e,t,i){var n,r,a,s,o=new DataView(e.buffer,e.byteOffset,e.byteLength),u={logs:[],seiNals:[]};for(r=0;r+4<e.length;r+=a)if(a=o.getUint32(r),r+=4,!(a<=0))switch(31&e[r]){case 6:var l=e.subarray(r+1,r+1+a),c=Mt(r,t);if(n={nalUnitType:"sei_rbsp",size:a,data:l,escapedRBSP:Dt(l),trackId:i},c)n.pts=c.pts,n.dts=c.dts,s=c;else{if(!s){u.logs.push({level:"warn",message:"We've encountered a nal unit without data at "+r+" for trackId "+i+". See mux.js#223."});break}n.pts=s.pts,n.dts=s.dts}u.seiNals.push(n)}return u}(n,function(e,t,i){var n=t,r=i.defaultSampleDuration||0,a=i.defaultSampleSize||0,s=i.trackId,o=[];return e.forEach((function(e){var t=function(e){var t,i={version:e[0],flags:new Uint8Array(e.subarray(1,4)),samples:[]},n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=1&i.flags[2],a=4&i.flags[2],s=1&i.flags[1],o=2&i.flags[1],u=4&i.flags[1],l=8&i.flags[1],c=n.getUint32(4),d=8;for(r&&(i.dataOffset=n.getInt32(d),d+=4),a&&c&&(t={flags:At(e.subarray(d,d+4))},d+=4,s&&(t.duration=n.getUint32(d),d+=4),o&&(t.size=n.getUint32(d),d+=4),l&&(1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d),d+=4),i.samples.push(t),c--);c--;)t={},s&&(t.duration=n.getUint32(d),d+=4),o&&(t.size=n.getUint32(d),d+=4),u&&(t.flags=At(e.subarray(d,d+4)),d+=4),l&&(1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d),d+=4),i.samples.push(t);return i}(e).samples;t.forEach((function(e){void 0===e.duration&&(e.duration=r),void 0===e.size&&(e.size=a),e.trackId=s,e.dts=n,void 0===e.compositionTimeOffset&&(e.compositionTimeOffset=0),"bigint"==typeof n?(e.pts=n+Lt.BigInt(e.compositionTimeOffset),n+=Lt.BigInt(e.duration)):(e.pts=n+e.compositionTimeOffset,n+=e.duration)})),o=o.concat(t)})),o}(c,l,s),o),r[o]||(r[o]={seiNals:[],logs:[]}),r[o].seiNals=r[o].seiNals.concat(i.seiNals),r[o].logs=r[o].logs.concat(i.logs))})),r},Nt=function(){var e,t,i,n,r,a,s=!1;this.isInitialized=function(){return s},this.init=function(t){e=new Ot,s=!0,a=!!t&&t.isPartial,e.on("data",(function(e){e.startTime=e.startPts/n,e.endTime=e.endPts/n,r.captions.push(e),r.captionStreams[e.stream]=!0})),e.on("log",(function(e){r.logs.push(e)}))},this.isNewInit=function(e,t){return!(e&&0===e.length||t&&"object"==typeof t&&0===Object.keys(t).length||i===e[0]&&n===t[i])},this.parse=function(e,a,s){var o;if(!this.isInitialized())return null;if(!a||!s)return null;if(this.isNewInit(a,s))i=a[0],n=s[i];else if(null===i||!n)return t.push(e),null;for(;t.length>0;){var u=t.shift();this.parse(u,a,s)}return(o=function(e,t,i){if(null===t)return null;var n=Rt(e,t)[t]||{};return{seiNals:n.seiNals,logs:n.logs,timescale:i}}(e,i,n))&&o.logs&&(r.logs=r.logs.concat(o.logs)),null!==o&&o.seiNals?(this.pushNals(o.seiNals),this.flushStream(),r):r.logs.length?{logs:r.logs,captions:[],captionStreams:[]}:null},this.pushNals=function(t){if(!this.isInitialized()||!t||0===t.length)return null;t.forEach((function(t){e.push(t)}))},this.flushStream=function(){if(!this.isInitialized())return null;a?e.partialFlush():e.flush()},this.clearParsedCaptions=function(){r.captions=[],r.captionStreams={},r.logs=[]},this.resetCaptionStream=function(){if(!this.isInitialized())return null;e.reset()},this.clearAllCaptions=function(){this.clearParsedCaptions(),this.resetCaptionStream()},this.reset=function(){t=[],i=null,n=null,r?this.clearParsedCaptions():r={captions:[],captionStreams:{},logs:[]},this.resetCaptionStream()},this.reset()},Ut=St,Bt=function(e){return("00"+e.toString(16)).slice(-2)},Ft=V.getUint64,jt=function(e,t){var i=Ct(t,["moof","traf"]).reduce((function(t,i){var n,r,a=Ct(i,["tfhd"])[0],s=Ut(a[4]<<24|a[5]<<16|a[6]<<8|a[7]),o=e[s]||9e4,u=Ct(i,["tfdt"])[0],l=new DataView(u.buffer,u.byteOffset,u.byteLength);return"bigint"==typeof(n=1===u[0]?Ft(u.subarray(4,12)):l.getUint32(4))?r=n/Lt.BigInt(o):"number"!=typeof n||isNaN(n)||(r=n/o),r<Number.MAX_SAFE_INTEGER&&(r=Number(r)),r<t&&(t=r),t}),1/0);return"bigint"==typeof i||isFinite(i)?i:0},Ht=function(e){var t=Ct(e,["moov","trak"]),i=[];return t.forEach((function(e){var t,n,r={},a=Ct(e,["tkhd"])[0];a&&(n=(t=new DataView(a.buffer,a.byteOffset,a.byteLength)).getUint8(0),r.id=0===n?t.getUint32(12):t.getUint32(20));var s=Ct(e,["mdia","hdlr"])[0];if(s){var o=Et(s.subarray(8,12));r.type="vide"===o?"video":"soun"===o?"audio":o}var u=Ct(e,["mdia","minf","stbl","stsd"])[0];if(u){var l=u.subarray(8);r.codec=Et(l.subarray(4,8));var c,d=Ct(l,[r.codec])[0];d&&(/^[asm]vc[1-9]$/i.test(r.codec)?(c=d.subarray(78),"avcC"===Et(c.subarray(4,8))&&c.length>11?(r.codec+=".",r.codec+=Bt(c[9]),r.codec+=Bt(c[10]),r.codec+=Bt(c[11])):r.codec="avc1.4d400d"):/^mp4[a,v]$/i.test(r.codec)?(c=d.subarray(28),"esds"===Et(c.subarray(4,8))&&c.length>20&&0!==c[19]?(r.codec+="."+Bt(c[19]),r.codec+="."+Bt(c[20]>>>2&63).replace(/^0/,"")):r.codec="mp4a.40.2"):r.codec=r.codec.toLowerCase())}var h=Ct(e,["mdia","mdhd"])[0];h&&(r.timescale=Tt(h)),i.push(r)})),i},qt=(Tt=function(e){var t=0===e[0]?12:20;return Ut(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])},function(e){var t=31&e[1];return(t<<=8)|e[2]}),Vt=function(e){return!!(64&e[1])},Wt=function(e){var t=0;return(48&e[3])>>>4>1&&(t+=e[4]+1),t},Gt=function(e){switch(e){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},zt={parseType:function(e,t){var i=qt(e);return 0===i?"pat":i===t?"pmt":t?"pes":null},parsePat:function(e){var t=Vt(e),i=4+Wt(e);return t&&(i+=e[i]+1),(31&e[i+10])<<8|e[i+11]},parsePmt:function(e){var t={},i=Vt(e),n=4+Wt(e);if(i&&(n+=e[n]+1),1&e[n+5]){var r;r=3+((15&e[n+1])<<8|e[n+2])-4;for(var a=12+((15&e[n+10])<<8|e[n+11]);a<r;){var s=n+a;t[(31&e[s+1])<<8|e[s+2]]=e[s],a+=5+((15&e[s+3])<<8|e[s+4])}return t}},parsePayloadUnitStartIndicator:Vt,parsePesType:function(e,t){switch(t[qt(e)]){case xe.H264_STREAM_TYPE:return"video";case xe.ADTS_STREAM_TYPE:return"audio";case xe.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(e){if(!Vt(e))return null;var t=4+Wt(e);if(t>=e.byteLength)return null;var i,n=null;return 192&(i=e[t+7])&&((n={}).pts=(14&e[t+9])<<27|(255&e[t+10])<<20|(254&e[t+11])<<12|(255&e[t+12])<<5|(254&e[t+13])>>>3,n.pts*=4,n.pts+=(6&e[t+13])>>>1,n.dts=n.pts,64&i&&(n.dts=(14&e[t+14])<<27|(255&e[t+15])<<20|(254&e[t+16])<<12|(255&e[t+17])<<5|(254&e[t+18])>>>3,n.dts*=4,n.dts+=(6&e[t+18])>>>1)),n},videoPacketContainsKeyFrame:function(e){for(var t=4+Wt(e),i=e.subarray(t),n=0,r=0,a=!1;r<i.byteLength-3;r++)if(1===i[r+2]){n=r+5;break}for(;n<i.byteLength;)switch(i[n]){case 0:if(0!==i[n-1]){n+=2;break}if(0!==i[n-2]){n++;break}r+3!==n-2&&"slice_layer_without_partitioning_rbsp_idr"===Gt(31&i[r+3])&&(a=!0);do{n++}while(1!==i[n]&&n<i.length);r=n-2,n+=3;break;case 1:if(0!==i[n-1]||0!==i[n-2]){n+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Gt(31&i[r+3])&&(a=!0),r=n-2,n+=3;break;default:n+=3}return i=i.subarray(r),n-=r,r=0,i&&i.byteLength>3&&"slice_layer_without_partitioning_rbsp_idr"===Gt(31&i[r+3])&&(a=!0),a}},Xt=Me,Kt={};Kt.ts=zt,Kt.aac=ot;var Yt=se,Qt=188,$t=71,Jt=function(e,t,i){for(var n,r,a,s,o=0,u=Qt,l=!1;u<=e.byteLength;)if(e[o]!==$t||e[u]!==$t&&u!==e.byteLength)o++,u++;else{switch(n=e.subarray(o,u),Kt.ts.parseType(n,t.pid)){case"pes":r=Kt.ts.parsePesType(n,t.table),a=Kt.ts.parsePayloadUnitStartIndicator(n),"audio"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="audio",i.audio.push(s),l=!0)}if(l)break;o+=Qt,u+=Qt}for(o=(u=e.byteLength)-Qt,l=!1;o>=0;)if(e[o]!==$t||e[u]!==$t&&u!==e.byteLength)o--,u--;else{switch(n=e.subarray(o,u),Kt.ts.parseType(n,t.pid)){case"pes":r=Kt.ts.parsePesType(n,t.table),a=Kt.ts.parsePayloadUnitStartIndicator(n),"audio"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="audio",i.audio.push(s),l=!0)}if(l)break;o-=Qt,u-=Qt}},Zt=function(e,t,i){for(var n,r,a,s,o,u,l,c=0,d=Qt,h=!1,p={data:[],size:0};d<e.byteLength;)if(e[c]!==$t||e[d]!==$t)c++,d++;else{switch(n=e.subarray(c,d),Kt.ts.parseType(n,t.pid)){case"pes":if(r=Kt.ts.parsePesType(n,t.table),a=Kt.ts.parsePayloadUnitStartIndicator(n),"video"===r&&(a&&!h&&(s=Kt.ts.parsePesTime(n))&&(s.type="video",i.video.push(s),h=!0),!i.firstKeyFrame)){if(a&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;if(Kt.ts.videoPacketContainsKeyFrame(o)){var f=Kt.ts.parsePesTime(o);f?(i.firstKeyFrame=f,i.firstKeyFrame.type="video"):console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")}p.size=0}p.data.push(n),p.size+=n.byteLength}}if(h&&i.firstKeyFrame)break;c+=Qt,d+=Qt}for(c=(d=e.byteLength)-Qt,h=!1;c>=0;)if(e[c]!==$t||e[d]!==$t)c--,d--;else{switch(n=e.subarray(c,d),Kt.ts.parseType(n,t.pid)){case"pes":r=Kt.ts.parsePesType(n,t.table),a=Kt.ts.parsePayloadUnitStartIndicator(n),"video"===r&&a&&(s=Kt.ts.parsePesTime(n))&&(s.type="video",i.video.push(s),h=!0)}if(h)break;c-=Qt,d-=Qt}},ei=function(e,t){var i;return(i=Kt.aac.isLikelyAacData(e)?function(e){for(var t,i=!1,n=0,r=null,a=null,s=0,o=0;e.length-o>=3;){switch(Kt.aac.parseType(e,o)){case"timed-metadata":if(e.length-o<10){i=!0;break}if((s=Kt.aac.parseId3TagSize(e,o))>e.length){i=!0;break}null===a&&(t=e.subarray(o,o+s),a=Kt.aac.parseAacTimestamp(t)),o+=s;break;case"audio":if(e.length-o<7){i=!0;break}if((s=Kt.aac.parseAdtsSize(e,o))>e.length){i=!0;break}null===r&&(t=e.subarray(o,o+s),r=Kt.aac.parseSampleRate(t)),n++,o+=s;break;default:o++}if(i)return null}if(null===r||null===a)return null;var u=Yt/r;return{audio:[{type:"audio",dts:a,pts:a},{type:"audio",dts:a+1024*n*u,pts:a+1024*n*u}]}}(e):function(e){var t={pid:null,table:null},i={};for(var n in function(e,t){for(var i,n=0,r=Qt;r<e.byteLength;)if(e[n]!==$t||e[r]!==$t)n++,r++;else{switch(i=e.subarray(n,r),Kt.ts.parseType(i,t.pid)){case"pat":t.pid=Kt.ts.parsePat(i);break;case"pmt":var a=Kt.ts.parsePmt(i);t.table=t.table||{},Object.keys(a).forEach((function(e){t.table[e]=a[e]}))}n+=Qt,r+=Qt}}(e,t),t.table)if(t.table.hasOwnProperty(n))switch(t.table[n]){case xe.H264_STREAM_TYPE:i.video=[],Zt(e,t,i),0===i.video.length&&delete i.video;break;case xe.ADTS_STREAM_TYPE:i.audio=[],Jt(e,t,i),0===i.audio.length&&delete i.audio}return i}(e))&&(i.audio||i.video)?(function(e,t){if(e.audio&&e.audio.length){var i=t;(void 0===i||isNaN(i))&&(i=e.audio[0].dts),e.audio.forEach((function(e){e.dts=Xt(e.dts,i),e.pts=Xt(e.pts,i),e.dtsTime=e.dts/Yt,e.ptsTime=e.pts/Yt}))}if(e.video&&e.video.length){var n=t;if((void 0===n||isNaN(n))&&(n=e.video[0].dts),e.video.forEach((function(e){e.dts=Xt(e.dts,n),e.pts=Xt(e.pts,n),e.dtsTime=e.dts/Yt,e.ptsTime=e.pts/Yt})),e.firstKeyFrame){var r=e.firstKeyFrame;r.dts=Xt(r.dts,n),r.pts=Xt(r.pts,n),r.dtsTime=r.dts/Yt,r.ptsTime=r.pts/Yt}}}(i,t),i):null},ti=function(){function e(e,t){this.options=t||{},this.self=e,this.init()}var t=e.prototype;return t.init=function(){this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new wt.Transmuxer(this.options),function(e,t){t.on("data",(function(t){var i=t.initSegment;t.initSegment={data:i.buffer,byteOffset:i.byteOffset,byteLength:i.byteLength};var n=t.data;t.data=n.buffer,e.postMessage({action:"data",segment:t,byteOffset:n.byteOffset,byteLength:n.byteLength},[t.data])})),t.on("done",(function(t){e.postMessage({action:"done"})})),t.on("gopInfo",(function(t){e.postMessage({action:"gopInfo",gopInfo:t})})),t.on("videoSegmentTimingInfo",(function(t){var i={start:{decode:ue(t.start.dts),presentation:ue(t.start.pts)},end:{decode:ue(t.end.dts),presentation:ue(t.end.pts)},baseMediaDecodeTime:ue(t.baseMediaDecodeTime)};t.prependedContentDuration&&(i.prependedContentDuration=ue(t.prependedContentDuration)),e.postMessage({action:"videoSegmentTimingInfo",videoSegmentTimingInfo:i})})),t.on("audioSegmentTimingInfo",(function(t){var i={start:{decode:ue(t.start.dts),presentation:ue(t.start.pts)},end:{decode:ue(t.end.dts),presentation:ue(t.end.pts)},baseMediaDecodeTime:ue(t.baseMediaDecodeTime)};t.prependedContentDuration&&(i.prependedContentDuration=ue(t.prependedContentDuration)),e.postMessage({action:"audioSegmentTimingInfo",audioSegmentTimingInfo:i})})),t.on("id3Frame",(function(t){e.postMessage({action:"id3Frame",id3Frame:t})})),t.on("caption",(function(t){e.postMessage({action:"caption",caption:t})})),t.on("trackinfo",(function(t){e.postMessage({action:"trackinfo",trackInfo:t})})),t.on("audioTimingInfo",(function(t){e.postMessage({action:"audioTimingInfo",audioTimingInfo:{start:ue(t.start),end:ue(t.end)}})})),t.on("videoTimingInfo",(function(t){e.postMessage({action:"videoTimingInfo",videoTimingInfo:{start:ue(t.start),end:ue(t.end)}})})),t.on("log",(function(t){e.postMessage({action:"log",log:t})}))}(this.self,this.transmuxer)},t.pushMp4Captions=function(e){this.captionParser||(this.captionParser=new Nt,this.captionParser.init());var t=new Uint8Array(e.data,e.byteOffset,e.byteLength),i=this.captionParser.parse(t,e.trackIds,e.timescales);this.self.postMessage({action:"mp4Captions",captions:i&&i.captions||[],logs:i&&i.logs||[],data:t.buffer},[t.buffer])},t.probeMp4StartTime=function(e){var t=e.timescales,i=e.data,n=jt(t,i);this.self.postMessage({action:"probeMp4StartTime",startTime:n,data:i},[i.buffer])},t.probeMp4Tracks=function(e){var t=e.data,i=Ht(t);this.self.postMessage({action:"probeMp4Tracks",tracks:i,data:t},[t.buffer])},t.probeTs=function(e){var t=e.data,i=e.baseStartTime,n="number"!=typeof i||isNaN(i)?void 0:i*se,r=ei(t,n),a=null;r&&((a={hasVideo:r.video&&2===r.video.length||!1,hasAudio:r.audio&&2===r.audio.length||!1}).hasVideo&&(a.videoStart=r.video[0].ptsTime),a.hasAudio&&(a.audioStart=r.audio[0].ptsTime)),this.self.postMessage({action:"probeTs",result:a,data:t},[t.buffer])},t.clearAllMp4Captions=function(){this.captionParser&&this.captionParser.clearAllCaptions()},t.clearParsedMp4Captions=function(){this.captionParser&&this.captionParser.clearParsedCaptions()},t.push=function(e){var t=new Uint8Array(e.data,e.byteOffset,e.byteLength);this.transmuxer.push(t)},t.reset=function(){this.transmuxer.reset()},t.setTimestampOffset=function(e){var t=e.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(oe(t)))},t.setAudioAppendStart=function(e){this.transmuxer.setAudioAppendStart(Math.ceil(oe(e.appendStart)))},t.setRemux=function(e){this.transmuxer.setRemux(e.remux)},t.flush=function(e){this.transmuxer.flush(),self.postMessage({action:"done",type:"transmuxed"})},t.endTimeline=function(){this.transmuxer.endTimeline(),self.postMessage({action:"endedtimeline",type:"transmuxed"})},t.alignGopsWith=function(e){this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())},e}();self.onmessage=function(e){"init"===e.data.action&&e.data.options?this.messageHandlers=new ti(self,e.data.options):(this.messageHandlers||(this.messageHandlers=new ti(self)),e.data&&e.data.action&&"init"!==e.data.action&&this.messageHandlers[e.data.action]&&this.messageHandlers[e.data.action](e.data))}})))),uc=function(e){var t=e.transmuxer,i=e.bytes,n=e.audioAppendStart,r=e.gopsToAlignWith,a=e.remux,s=e.onData,o=e.onTrackInfo,u=e.onAudioTimingInfo,l=e.onVideoTimingInfo,c=e.onVideoSegmentTimingInfo,d=e.onAudioSegmentTimingInfo,h=e.onId3,p=e.onCaptions,f=e.onDone,m=e.onEndedTimeline,g=e.onTransmuxerLog,v=e.isEndOfTimeline,y={buffer:[]},_=v;if(t.onmessage=function(i){t.currentTransmux===e&&("data"===i.data.action&&function(e,t,i){var n=e.data.segment,r=n.type,a=n.initSegment,s=n.captions,o=n.captionStreams,u=n.metadata,l=n.videoFrameDtsTime,c=n.videoFramePtsTime;t.buffer.push({captions:s,captionStreams:o,metadata:u});var d=e.data.segment.boxes||{data:e.data.segment.data},h={type:r,data:new Uint8Array(d.data,d.data.byteOffset,d.data.byteLength),initSegment:new Uint8Array(a.data,a.byteOffset,a.byteLength)};void 0!==l&&(h.videoFrameDtsTime=l),void 0!==c&&(h.videoFramePtsTime=c),i(h)}(i,y,s),"trackinfo"===i.data.action&&o(i.data.trackInfo),"gopInfo"===i.data.action&&function(e,t){t.gopInfo=e.data.gopInfo}(i,y),"audioTimingInfo"===i.data.action&&u(i.data.audioTimingInfo),"videoTimingInfo"===i.data.action&&l(i.data.videoTimingInfo),"videoSegmentTimingInfo"===i.data.action&&c(i.data.videoSegmentTimingInfo),"audioSegmentTimingInfo"===i.data.action&&d(i.data.audioSegmentTimingInfo),"id3Frame"===i.data.action&&h([i.data.id3Frame],i.data.id3Frame.dispatchType),"caption"===i.data.action&&p(i.data.caption),"endedtimeline"===i.data.action&&(_=!1,m()),"log"===i.data.action&&g(i.data.log),"transmuxed"===i.data.type&&(_||(t.onmessage=null,function(e){var t=e.transmuxedData,i=e.callback;t.buffer=[],i(t)}({transmuxedData:y,callback:f}),lc(t))))},n&&t.postMessage({action:"setAudioAppendStart",appendStart:n}),Array.isArray(r)&&t.postMessage({action:"alignGopsWith",gopsToAlignWith:r}),void 0!==a&&t.postMessage({action:"setRemux",remux:a}),i.byteLength){var b=i instanceof ArrayBuffer?i:i.buffer,T=i instanceof ArrayBuffer?0:i.byteOffset;t.postMessage({action:"push",data:b,byteOffset:T,byteLength:i.byteLength},[b])}v&&t.postMessage({action:"endTimeline"}),t.postMessage({action:"flush"})},lc=function(e){e.currentTransmux=null,e.transmuxQueue.length&&(e.currentTransmux=e.transmuxQueue.shift(),"function"==typeof e.currentTransmux?e.currentTransmux():uc(e.currentTransmux))},cc=function(e,t){e.postMessage({action:t}),lc(e)},dc=function(e){!function(e,t){if(!t.currentTransmux)return t.currentTransmux=e,void cc(t,e);t.transmuxQueue.push(cc.bind(null,t,e))}("reset",e)},hc=function(e){var t=e.transmuxer,i=e.endAction||e.action,n=e.callback,r=m({},e,{endAction:null,transmuxer:null,callback:null});if(t.addEventListener("message",(function r(a){a.data.action===i&&(t.removeEventListener("message",r),a.data.data&&(a.data.data=new Uint8Array(a.data.data,e.byteOffset||0,e.byteLength||a.data.data.byteLength),e.data&&(e.data=a.data.data)),n(a.data))})),e.data){var a=e.data instanceof ArrayBuffer;r.byteOffset=a?0:e.data.byteOffset,r.byteLength=e.data.byteLength;var s=[a?e.data:e.data.buffer];t.postMessage(r,s)}else t.postMessage(r)},pc=-101,fc=-102,mc=function(e){e.forEach((function(e){e.abort()}))},gc=function(e,t){return t.timedout?{status:t.status,message:"HLS request timed-out at URL: "+t.uri,code:pc,xhr:t}:t.aborted?{status:t.status,message:"HLS request aborted at URL: "+t.uri,code:fc,xhr:t}:e?{status:t.status,message:"HLS request errored at URL: "+t.uri,code:2,xhr:t}:"arraybuffer"===t.responseType&&0===t.response.byteLength?{status:t.status,message:"Empty HLS response at URL: "+t.uri,code:2,xhr:t}:null},vc=function(e,t,i){return function(n,r){var a=r.response,s=gc(n,r);if(s)return i(s,e);if(16!==a.byteLength)return i({status:r.status,message:"Invalid HLS key at URL: "+r.uri,code:2,xhr:r},e);for(var o=new DataView(a),u=new Uint32Array([o.getUint32(0),o.getUint32(4),o.getUint32(8),o.getUint32(12)]),l=0;l<t.length;l++)t[l].bytes=u;return i(null,e)}},yc=function(e,t){var i=qu(e.map.bytes);if("mp4"!==i){var n=e.map.resolvedUri||e.map.uri;return t({internal:!0,message:"Found unsupported "+(i||"unknown")+" container for initialization segment at URL: "+n,code:2})}hc({action:"probeMp4Tracks",data:e.map.bytes,transmuxer:e.transmuxer,callback:function(i){var n=i.tracks,r=i.data;return e.map.bytes=r,n.forEach((function(t){e.map.tracks=e.map.tracks||{},e.map.tracks[t.type]||(e.map.tracks[t.type]=t,"number"==typeof t.id&&t.timescale&&(e.map.timescales=e.map.timescales||{},e.map.timescales[t.id]=t.timescale))})),t(null)}})},_c=function(e){var t=e.segment,i=e.bytes,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.audioSegmentTimingInfoFn,o=e.id3Fn,u=e.captionsFn,l=e.isEndOfTimeline,c=e.endedTimelineFn,d=e.dataFn,h=e.doneFn,p=e.onTransmuxerLog,f=t.map&&t.map.tracks||{},m=Boolean(f.audio&&f.video),g=r.bind(null,t,"audio","start"),v=r.bind(null,t,"audio","end"),y=r.bind(null,t,"video","start"),_=r.bind(null,t,"video","end");hc({action:"probeTs",transmuxer:t.transmuxer,data:i,baseStartTime:t.baseStartTime,callback:function(e){t.bytes=i=e.data;var r=e.result;r&&(n(t,{hasAudio:r.hasAudio,hasVideo:r.hasVideo,isMuxed:m}),n=null,r.hasAudio&&!m&&g(r.audioStart),r.hasVideo&&y(r.videoStart),g=null,y=null),function(e){if(!e.transmuxer.currentTransmux)return e.transmuxer.currentTransmux=e,void uc(e);e.transmuxer.transmuxQueue.push(e)}({bytes:i,transmuxer:t.transmuxer,audioAppendStart:t.audioAppendStart,gopsToAlignWith:t.gopsToAlignWith,remux:m,onData:function(e){e.type="combined"===e.type?"video":e.type,d(t,e)},onTrackInfo:function(e){n&&(m&&(e.isMuxed=!0),n(t,e))},onAudioTimingInfo:function(e){g&&void 0!==e.start&&(g(e.start),g=null),v&&void 0!==e.end&&v(e.end)},onVideoTimingInfo:function(e){y&&void 0!==e.start&&(y(e.start),y=null),_&&void 0!==e.end&&_(e.end)},onVideoSegmentTimingInfo:function(e){a(e)},onAudioSegmentTimingInfo:function(e){s(e)},onId3:function(e,i){o(t,e,i)},onCaptions:function(e){u(t,[e])},isEndOfTimeline:l,onEndedTimeline:function(){c()},onTransmuxerLog:p,onDone:function(e){h&&(e.type="combined"===e.type?"video":e.type,h(null,t,e))}})}})},bc=function(e){var t=e.segment,i=e.bytes,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.audioSegmentTimingInfoFn,o=e.id3Fn,u=e.captionsFn,l=e.isEndOfTimeline,c=e.endedTimelineFn,d=e.dataFn,h=e.doneFn,p=e.onTransmuxerLog,f=new Uint8Array(i);if(function(e){return Cu(e,["moof"]).length>0}(f)){t.isFmp4=!0;var m=t.map.tracks,g={isFmp4:!0,hasVideo:!!m.video,hasAudio:!!m.audio};m.audio&&m.audio.codec&&"enca"!==m.audio.codec&&(g.audioCodec=m.audio.codec),m.video&&m.video.codec&&"encv"!==m.video.codec&&(g.videoCodec=m.video.codec),m.video&&m.audio&&(g.isMuxed=!0),n(t,g);var v=function(e){d(t,{data:f,type:g.hasAudio&&!g.isMuxed?"audio":"video"}),e&&e.length&&u(t,e),h(null,t,{})};hc({action:"probeMp4StartTime",timescales:t.map.timescales,data:f,transmuxer:t.transmuxer,callback:function(e){var n=e.data,a=e.startTime;i=n.buffer,t.bytes=f=n,g.hasAudio&&!g.isMuxed&&r(t,"audio","start",a),g.hasVideo&&r(t,"video","start",a),m.video&&n.byteLength&&t.transmuxer?hc({action:"pushMp4Captions",endAction:"mp4Captions",transmuxer:t.transmuxer,data:f,timescales:t.map.timescales,trackIds:[m.video.id],callback:function(e){i=e.data.buffer,t.bytes=f=e.data,e.logs.forEach((function(e){p(ua.mergeOptions(e,{stream:"mp4CaptionParser"}))})),v(e.captions)}}):v()}})}else if(t.transmuxer){if(void 0===t.container&&(t.container=qu(f)),"ts"!==t.container&&"aac"!==t.container)return n(t,{hasAudio:!1,hasVideo:!1}),void h(null,t,{});_c({segment:t,bytes:i,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,audioSegmentTimingInfoFn:s,id3Fn:o,captionsFn:u,isEndOfTimeline:l,endedTimelineFn:c,dataFn:d,doneFn:h,onTransmuxerLog:p})}else h(null,t,{})},Tc=function(e,t){var i,n=e.id,r=e.key,a=e.encryptedBytes,s=e.decryptionWorker;s.addEventListener("message",(function e(i){if(i.data.source===n){s.removeEventListener("message",e);var r=i.data.decrypted;t(new Uint8Array(r.bytes,r.byteOffset,r.byteLength))}})),i=r.bytes.slice?r.bytes.slice():new Uint32Array(Array.prototype.slice.call(r.bytes)),s.postMessage(Wl({source:n,encrypted:a,key:i,iv:r.iv}),[a.buffer,i.buffer])},wc=function(e){var t=e.xhr,i=e.xhrOptions,n=e.decryptionWorker,r=e.segment,a=e.abortFn,s=e.progressFn,o=e.trackInfoFn,u=e.timingInfoFn,l=e.videoSegmentTimingInfoFn,c=e.audioSegmentTimingInfoFn,d=e.id3Fn,h=e.captionsFn,p=e.isEndOfTimeline,f=e.endedTimelineFn,m=e.dataFn,g=e.doneFn,v=e.onTransmuxerLog,y=[],_=function(e){var t=e.activeXhrs,i=e.decryptionWorker,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.audioSegmentTimingInfoFn,o=e.id3Fn,u=e.captionsFn,l=e.isEndOfTimeline,c=e.endedTimelineFn,d=e.dataFn,h=e.doneFn,p=e.onTransmuxerLog,f=0,m=!1;return function(e,g){if(!m){if(e)return m=!0,mc(t),h(e,g);if((f+=1)===t.length){var v=function(){if(g.encryptedBytes)return function(e){var t=e.decryptionWorker,i=e.segment,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.audioSegmentTimingInfoFn,o=e.id3Fn,u=e.captionsFn,l=e.isEndOfTimeline,c=e.endedTimelineFn,d=e.dataFn,h=e.doneFn,p=e.onTransmuxerLog;Tc({id:i.requestId,key:i.key,encryptedBytes:i.encryptedBytes,decryptionWorker:t},(function(e){i.bytes=e,bc({segment:i,bytes:i.bytes,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,audioSegmentTimingInfoFn:s,id3Fn:o,captionsFn:u,isEndOfTimeline:l,endedTimelineFn:c,dataFn:d,doneFn:h,onTransmuxerLog:p})}))}({decryptionWorker:i,segment:g,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,audioSegmentTimingInfoFn:s,id3Fn:o,captionsFn:u,isEndOfTimeline:l,endedTimelineFn:c,dataFn:d,doneFn:h,onTransmuxerLog:p});bc({segment:g,bytes:g.bytes,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,audioSegmentTimingInfoFn:s,id3Fn:o,captionsFn:u,isEndOfTimeline:l,endedTimelineFn:c,dataFn:d,doneFn:h,onTransmuxerLog:p})};if(g.endOfAllRequests=Date.now(),g.map&&g.map.encryptedBytes&&!g.map.bytes)return Tc({decryptionWorker:i,id:g.requestId+"-init",encryptedBytes:g.map.encryptedBytes,key:g.map.key},(function(e){g.map.bytes=e,yc(g,(function(e){if(e)return mc(t),h(e,g);v()}))}));v()}}}}({activeXhrs:y,decryptionWorker:n,trackInfoFn:o,timingInfoFn:u,videoSegmentTimingInfoFn:l,audioSegmentTimingInfoFn:c,id3Fn:d,captionsFn:h,isEndOfTimeline:p,endedTimelineFn:f,dataFn:m,doneFn:g,onTransmuxerLog:v});if(r.key&&!r.key.bytes){var b=[r.key];r.map&&!r.map.bytes&&r.map.key&&r.map.key.resolvedUri===r.key.resolvedUri&&b.push(r.map.key);var T=t(ua.mergeOptions(i,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),vc(r,b,_));y.push(T)}if(r.map&&!r.map.bytes){if(r.map.key&&(!r.key||r.key.resolvedUri!==r.map.key.resolvedUri)){var w=t(ua.mergeOptions(i,{uri:r.map.key.resolvedUri,responseType:"arraybuffer"}),vc(r,[r.map.key],_));y.push(w)}var S=t(ua.mergeOptions(i,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:jl(r.map)}),function(e){var t=e.segment,i=e.finishProcessingFn;return function(e,n){var r=gc(e,n);if(r)return i(r,t);var a=new Uint8Array(n.response);if(t.map.key)return t.map.encryptedBytes=a,i(null,t);t.map.bytes=a,yc(t,(function(e){if(e)return e.xhr=n,e.status=n.status,i(e,t);i(null,t)}))}}({segment:r,finishProcessingFn:_}));y.push(S)}var E=ua.mergeOptions(i,{uri:r.part&&r.part.resolvedUri||r.resolvedUri,responseType:"arraybuffer",headers:jl(r)}),k=t(E,function(e){var t=e.segment,i=e.finishProcessingFn,n=e.responseType;return function(e,r){var a=gc(e,r);if(a)return i(a,t);var s="arraybuffer"!==n&&r.responseText?function(e){for(var t=new Uint8Array(new ArrayBuffer(e.length)),i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}(r.responseText.substring(t.lastReachedChar||0)):r.response;return t.stats=function(e){return{bandwidth:e.bandwidth,bytesReceived:e.bytesReceived||0,roundTripTime:e.roundTripTime||0}}(r),t.key?t.encryptedBytes=new Uint8Array(s):t.bytes=new Uint8Array(s),i(null,t)}}({segment:r,finishProcessingFn:_,responseType:E.responseType}));k.addEventListener("progress",function(e){var t=e.segment,i=e.progressFn;return e.trackInfoFn,e.timingInfoFn,e.videoSegmentTimingInfoFn,e.audioSegmentTimingInfoFn,e.id3Fn,e.captionsFn,e.isEndOfTimeline,e.endedTimelineFn,e.dataFn,function(e){if(!e.target.aborted)return t.stats=ua.mergeOptions(t.stats,(r=(n=e).target,(a={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-r.requestTime||0}).bytesReceived=n.loaded,a.bandwidth=Math.floor(a.bytesReceived/a.roundTripTime*8*1e3),a)),!t.stats.firstBytesReceivedAt&&t.stats.bytesReceived&&(t.stats.firstBytesReceivedAt=Date.now()),i(e,t);var n,r,a}}({segment:r,progressFn:s,trackInfoFn:o,timingInfoFn:u,videoSegmentTimingInfoFn:l,audioSegmentTimingInfoFn:c,id3Fn:d,captionsFn:h,isEndOfTimeline:p,endedTimelineFn:f,dataFn:m})),y.push(k);var C={};return y.forEach((function(e){e.addEventListener("loadend",function(e){var t=e.loadendState,i=e.abortFn;return function(e){e.target.aborted&&i&&!t.calledAbortFn&&(i(),t.calledAbortFn=!0)}}({loadendState:C,abortFn:a}))})),function(){return mc(y)}},Sc=Xu("CodecUtils"),Ec=function(e,t){var i=t.attributes||{};return e&&e.mediaGroups&&e.mediaGroups.AUDIO&&i.AUDIO&&e.mediaGroups.AUDIO[i.AUDIO]},kc=function(e){var t={};return e.forEach((function(e){var i=e.mediaType,n=e.type,r=e.details;t[i]=t[i]||[],t[i].push(Ia(""+n+r))})),Object.keys(t).forEach((function(e){if(t[e].length>1)return Sc("multiple "+e+" codecs found as attributes: "+t[e].join(", ")+". Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs."),void(t[e]=null);t[e]=t[e][0]})),t},Cc=function(e){var t=0;return e.audio&&t++,e.video&&t++,t},Ic=function(e,t){var i=t.attributes||{},n=kc(function(e){var t=e.attributes||{};if(t.CODECS)return xa(t.CODECS)}(t)||[]);if(Ec(e,t)&&!n.audio&&!function(e,t){if(!Ec(e,t))return!0;var i=t.attributes||{},n=e.mediaGroups.AUDIO[i.AUDIO];for(var r in n)if(!n[r].uri&&!n[r].playlists)return!0;return!1}(e,t)){var r=kc(function(e,t){if(!e.mediaGroups.AUDIO||!t)return null;var i=e.mediaGroups.AUDIO[t];if(!i)return null;for(var n in i){var r=i[n];if(r.default&&r.playlists)return xa(r.playlists[0].attributes.CODECS)}return null}(e,i.AUDIO)||[]);r.audio&&(n.audio=r.audio)}return n},xc=Xu("PlaylistSelector"),Ac=function(e){if(e&&e.playlist){var t=e.playlist;return JSON.stringify({id:t.id,bandwidth:e.bandwidth,width:e.width,height:e.height,codecs:t.attributes&&t.attributes.CODECS||""})}},Pc=function(e,t){if(!e)return"";var i=window.getComputedStyle(e);return i?i[t]:""},Lc=function(e,t){var i=e.slice();e.sort((function(e,n){var r=t(e,n);return 0===r?i.indexOf(e)-i.indexOf(n):r}))},Dc=function(e,t){var i,n;return e.attributes.BANDWIDTH&&(i=e.attributes.BANDWIDTH),i=i||window.Number.MAX_VALUE,t.attributes.BANDWIDTH&&(n=t.attributes.BANDWIDTH),i-(n||window.Number.MAX_VALUE)},Oc=function(e,t,i,n,r,a){if(e){var s={bandwidth:t,width:i,height:n,limitRenditionByPlayerDimensions:r},o=e.playlists;Tl.isAudioOnly(e)&&(o=a.getAudioTrackPlaylists_(),s.audioOnly=!0);var u=o.map((function(e){var t=e.attributes&&e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width,i=e.attributes&&e.attributes.RESOLUTION&&e.attributes.RESOLUTION.height;return{bandwidth:e.attributes&&e.attributes.BANDWIDTH||window.Number.MAX_VALUE,width:t,height:i,playlist:e}}));Lc(u,(function(e,t){return e.bandwidth-t.bandwidth}));var l=(u=u.filter((function(e){return!Tl.isIncompatible(e.playlist)}))).filter((function(e){return Tl.isEnabled(e.playlist)}));l.length||(l=u.filter((function(e){return!Tl.isDisabled(e.playlist)})));var c=l.filter((function(e){return e.bandwidth*ic.BANDWIDTH_VARIANCE<t})),d=c[c.length-1],h=c.filter((function(e){return e.bandwidth===d.bandwidth}))[0];if(!1===r){var p=h||l[0]||u[0];if(p&&p.playlist){var f="sortedPlaylistReps";return h&&(f="bandwidthBestRep"),l[0]&&(f="enabledPlaylistReps"),xc("choosing "+Ac(p)+" using "+f+" with options",s),p.playlist}return xc("could not choose a playlist with options",s),null}var m=c.filter((function(e){return e.width&&e.height}));Lc(m,(function(e,t){return e.width-t.width}));var g=m.filter((function(e){return e.width===i&&e.height===n}));d=g[g.length-1];var v,y,_,b,T=g.filter((function(e){return e.bandwidth===d.bandwidth}))[0];if(T||(y=(v=m.filter((function(e){return e.width>i||e.height>n}))).filter((function(e){return e.width===v[0].width&&e.height===v[0].height})),d=y[y.length-1],_=y.filter((function(e){return e.bandwidth===d.bandwidth}))[0]),a.experimentalLeastPixelDiffSelector){var w=m.map((function(e){return e.pixelDiff=Math.abs(e.width-i)+Math.abs(e.height-n),e}));Lc(w,(function(e,t){return e.pixelDiff===t.pixelDiff?t.bandwidth-e.bandwidth:e.pixelDiff-t.pixelDiff})),b=w[0]}var S=b||_||T||h||l[0]||u[0];if(S&&S.playlist){var E="sortedPlaylistReps";return b?E="leastPixelDiffRep":_?E="resolutionPlusOneRep":T?E="resolutionBestRep":h?E="bandwidthBestRep":l[0]&&(E="enabledPlaylistReps"),xc("choosing "+Ac(S)+" using "+E+" with options",s),S.playlist}return xc("could not choose a playlist with options",s),null}},Mc=function(){var e=this.useDevicePixelRatio&&window.devicePixelRatio||1;return Oc(this.playlists.master,this.systemBandwidth,parseInt(Pc(this.tech_.el(),"width"),10)*e,parseInt(Pc(this.tech_.el(),"height"),10)*e,this.limitRenditionByPlayerDimensions,this.masterPlaylistController_)},Rc=function(e,t,i){var n,r;if(i&&i.cues)for(n=i.cues.length;n--;)(r=i.cues[n]).startTime>=e&&r.endTime<=t&&i.removeCue(r)},Nc=function(e){return"number"==typeof e&&isFinite(e)},Uc=1/60,Bc=function(e){var t=e.startOfSegment,i=e.duration,n=e.segment,r=e.part,a=e.playlist,s=a.mediaSequence,o=a.id,u=a.segments,l=void 0===u?[]:u,c=e.mediaIndex,d=e.partIndex,h=e.timeline,p=l.length-1,f="mediaIndex/partIndex increment";e.getMediaInfoForTime?f="getMediaInfoForTime ("+e.getMediaInfoForTime+")":e.isSyncRequest&&(f="getSyncSegmentCandidate (isSyncRequest)"),e.independent&&(f+=" with independent "+e.independent);var m="number"==typeof d,g=e.segment.uri?"segment":"pre-segment",v=m?ol({preloadSegment:n})-1:0;return g+" ["+(s+c)+"/"+(s+p)+"]"+(m?" part ["+d+"/"+v+"]":"")+" segment start/end ["+n.start+" => "+n.end+"]"+(m?" part start/end ["+r.start+" => "+r.end+"]":"")+" startOfSegment ["+t+"] duration ["+i+"] timeline ["+h+"] selected by ["+f+"] playlist ["+o+"]"},Fc=function(e){return e+"TimingInfo"},jc=function(e){var t=e.timelineChangeController,i=e.currentTimeline,n=e.segmentTimeline,r=e.loaderType,a=e.audioDisabled;if(i===n)return!1;if("audio"===r){var s=t.lastTimelineChange({type:"main"});return!s||s.to!==n}if("main"===r&&a){var o=t.pendingTimelineChange({type:"audio"});return!o||o.to!==n}return!1},Hc=function(e){var t=e.segmentDuration,i=e.maxDuration;return!!t&&Math.round(t)>i+Ku},qc=function(e){function t(t,i){var n;if(n=e.call(this)||this,!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return n.bandwidth=t.bandwidth,n.throughput={rate:0,count:0},n.roundTrip=NaN,n.resetStats_(),n.mediaIndex=null,n.partIndex=null,n.hasPlayed_=t.hasPlayed,n.currentTime_=t.currentTime,n.seekable_=t.seekable,n.seeking_=t.seeking,n.duration_=t.duration,n.mediaSource_=t.mediaSource,n.vhs_=t.vhs,n.loaderType_=t.loaderType,n.currentMediaInfo_=void 0,n.startingMediaInfo_=void 0,n.segmentMetadataTrack_=t.segmentMetadataTrack,n.goalBufferLength_=t.goalBufferLength,n.sourceType_=t.sourceType,n.sourceUpdater_=t.sourceUpdater,n.inbandTextTracks_=t.inbandTextTracks,n.state_="INIT",n.timelineChangeController_=t.timelineChangeController,n.shouldSaveSegmentTimingInfo_=!0,n.parse708captions_=t.parse708captions,n.useDtsForTimestampOffset_=t.useDtsForTimestampOffset,n.captionServices_=t.captionServices,n.experimentalExactManifestTimings=t.experimentalExactManifestTimings,n.checkBufferTimeout_=null,n.error_=void 0,n.currentTimeline_=-1,n.pendingSegment_=null,n.xhrOptions_=null,n.pendingSegments_=[],n.audioDisabled_=!1,n.isPendingTimestampOffset_=!1,n.gopBuffer_=[],n.timeMapping_=0,n.safeAppend_=ua.browser.IE_VERSION>=11,n.appendInitSegment_={audio:!0,video:!0},n.playlistOfLastInitSegment_={audio:null,video:null},n.callQueue_=[],n.loadQueue_=[],n.metadataQueue_={id3:[],caption:[]},n.waitingOnRemove_=!1,n.quotaExceededErrorRetryTimeout_=null,n.activeInitSegmentId_=null,n.initSegments_={},n.cacheEncryptionKeys_=t.cacheEncryptionKeys,n.keyCache_={},n.decrypter_=t.decrypter,n.syncController_=t.syncController,n.syncPoint_={segmentIndex:0,time:0},n.transmuxer_=n.createTransmuxer_(),n.triggerSyncInfoUpdate_=function(){return n.trigger("syncinfoupdate")},n.syncController_.on("syncinfoupdate",n.triggerSyncInfoUpdate_),n.mediaSource_.addEventListener("sourceopen",(function(){n.isEndOfStream_()||(n.ended_=!1)})),n.fetchAtBuffer_=!1,n.logger_=Xu("SegmentLoader["+n.loaderType_+"]"),Object.defineProperty(_t(n),"state",{get:function(){return this.state_},set:function(e){e!==this.state_&&(this.logger_(this.state_+" -> "+e),this.state_=e,this.trigger("statechange"))}}),n.sourceUpdater_.on("ready",(function(){n.hasEnoughInfoToAppend_()&&n.processCallQueue_()})),"main"===n.loaderType_&&n.timelineChangeController_.on("pendingtimelinechange",(function(){n.hasEnoughInfoToAppend_()&&n.processCallQueue_()})),"audio"===n.loaderType_&&n.timelineChangeController_.on("timelinechange",(function(){n.hasEnoughInfoToLoad_()&&n.processLoadQueue_(),n.hasEnoughInfoToAppend_()&&n.processCallQueue_()})),n}bt(t,e);var i=t.prototype;return i.createTransmuxer_=function(){return function(e){var t=new oc;t.currentTransmux=null,t.transmuxQueue=[];var i=t.terminate;return t.terminate=function(){return t.currentTransmux=null,t.transmuxQueue.length=0,i.call(t)},t.postMessage({action:"init",options:e}),t}({remux:!1,alignGopsAtEnd:this.safeAppend_,keepOriginalTimestamps:!0,parse708captions:this.parse708captions_,captionServices:this.captionServices_})},i.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0,this.mediaAppends=0},i.dispose=function(){this.trigger("dispose"),this.state="DISPOSED",this.pause(),this.abort_(),this.transmuxer_&&this.transmuxer_.terminate(),this.resetStats_(),this.checkBufferTimeout_&&window.clearTimeout(this.checkBufferTimeout_),this.syncController_&&this.triggerSyncInfoUpdate_&&this.syncController_.off("syncinfoupdate",this.triggerSyncInfoUpdate_),this.off()},i.setAudio=function(e){this.audioDisabled_=!e,e?this.appendInitSegment_.audio=!0:this.sourceUpdater_.removeAudio(0,this.duration_())},i.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},i.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null,this.callQueue_=[],this.loadQueue_=[],this.metadataQueue_.id3=[],this.metadataQueue_.caption=[],this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_),this.waitingOnRemove_=!1,window.clearTimeout(this.quotaExceededErrorRetryTimeout_),this.quotaExceededErrorRetryTimeout_=null},i.checkForAbort_=function(e){return"APPENDING"!==this.state||this.pendingSegment_?!this.pendingSegment_||this.pendingSegment_.requestId!==e:(this.state="READY",!0)},i.error=function(e){return void 0!==e&&(this.logger_("error occurred:",e),this.error_=e),this.pendingSegment_=null,this.error_},i.endOfStream=function(){this.ended_=!0,this.transmuxer_&&dc(this.transmuxer_),this.gopBuffer_.length=0,this.pause(),this.trigger("ended")},i.buffered_=function(){var e=this.getMediaInfo_();if(!this.sourceUpdater_||!e)return ua.createTimeRanges();if("main"===this.loaderType_){var t=e.hasAudio,i=e.hasVideo,n=e.isMuxed;if(i&&t&&!this.audioDisabled_&&!n)return this.sourceUpdater_.buffered();if(i)return this.sourceUpdater_.videoBuffered()}return this.sourceUpdater_.audioBuffered()},i.initSegmentForMap=function(e,t){if(void 0===t&&(t=!1),!e)return null;var i=Gl(e),n=this.initSegments_[i];return t&&!n&&e.bytes&&(this.initSegments_[i]=n={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:e.bytes,tracks:e.tracks,timescales:e.timescales}),n||e},i.segmentKey=function(e,t){if(void 0===t&&(t=!1),!e)return null;var i=zl(e),n=this.keyCache_[i];this.cacheEncryptionKeys_&&t&&!n&&e.bytes&&(this.keyCache_[i]=n={resolvedUri:e.resolvedUri,bytes:e.bytes});var r={resolvedUri:(n||e).resolvedUri};return n&&(r.bytes=n.bytes),r},i.couldBeginLoading_=function(){return this.playlist_&&!this.paused()},i.load=function(){if(this.monitorBuffer_(),this.playlist_)return"INIT"===this.state&&this.couldBeginLoading_()?this.init_():void(!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY"))},i.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},i.playlist=function(e,t){if(void 0===t&&(t={}),e){var i=this.playlist_,n=this.pendingSegment_;this.playlist_=e,this.xhrOptions_=t,"INIT"===this.state&&(e.syncInfo={mediaSequence:e.mediaSequence,time:0},"main"===this.loaderType_&&this.syncController_.setDateTimeMappingForStart(e));var r=null;if(i&&(i.id?r=i.id:i.uri&&(r=i.uri)),this.logger_("playlist update ["+r+" => "+(e.id||e.uri)+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(!i||i.uri!==e.uri)return null!==this.mediaIndex&&(e.endList?this.resyncLoader():this.resetLoader()),this.currentMediaInfo_=void 0,void this.trigger("playlistupdate");var a=e.mediaSequence-i.mediaSequence;if(this.logger_("live window shift ["+a+"]"),null!==this.mediaIndex)if(this.mediaIndex-=a,this.mediaIndex<0)this.mediaIndex=null,this.partIndex=null;else{var s=this.playlist_.segments[this.mediaIndex];if(this.partIndex&&(!s.parts||!s.parts.length||!s.parts[this.partIndex])){var o=this.mediaIndex;this.logger_("currently processing part (index "+this.partIndex+") no longer exists."),this.resetLoader(),this.mediaIndex=o}}n&&(n.mediaIndex-=a,n.mediaIndex<0?(n.mediaIndex=null,n.partIndex=null):(n.mediaIndex>=0&&(n.segment=e.segments[n.mediaIndex]),n.partIndex>=0&&n.segment.parts&&(n.part=n.segment.parts[n.partIndex]))),this.syncController_.saveExpiredSegmentInfo(i,e)}},i.pause=function(){this.checkBufferTimeout_&&(window.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},i.paused=function(){return null===this.checkBufferTimeout_},i.resetEverything=function(e){this.ended_=!1,this.appendInitSegment_={audio:!0,video:!0},this.resetLoader(),this.remove(0,1/0,e),this.transmuxer_&&(this.transmuxer_.postMessage({action:"clearAllMp4Captions"}),this.transmuxer_.postMessage({action:"reset"}))},i.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},i.resyncLoader=function(){this.transmuxer_&&dc(this.transmuxer_),this.mediaIndex=null,this.partIndex=null,this.syncPoint_=null,this.isPendingTimestampOffset_=!1,this.callQueue_=[],this.loadQueue_=[],this.metadataQueue_.id3=[],this.metadataQueue_.caption=[],this.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"clearParsedMp4Captions"})},i.remove=function(e,t,i,n){if(void 0===i&&(i=function(){}),void 0===n&&(n=!1),t===1/0&&(t=this.duration_()),t<=e)this.logger_("skipping remove because end ${end} is <= start ${start}");else if(this.sourceUpdater_&&this.getMediaInfo_()){var r=1,a=function(){0==--r&&i()};for(var s in!n&&this.audioDisabled_||(r++,this.sourceUpdater_.removeAudio(e,t,a)),(n||"main"===this.loaderType_)&&(this.gopBuffer_=function(e,t,i,n){for(var r=Math.ceil((t-n)*Wu),a=Math.ceil((i-n)*Wu),s=e.slice(),o=e.length;o--&&!(e[o].pts<=a););if(-1===o)return s;for(var u=o+1;u--&&!(e[u].pts<=r););return u=Math.max(u,0),s.splice(u,o-u+1),s}(this.gopBuffer_,e,t,this.timeMapping_),r++,this.sourceUpdater_.removeVideo(e,t,a)),this.inbandTextTracks_)Rc(e,t,this.inbandTextTracks_[s]);Rc(e,t,this.segmentMetadataTrack_),a()}else this.logger_("skipping remove because no source updater or starting media info")},i.monitorBuffer_=function(){this.checkBufferTimeout_&&window.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=window.setTimeout(this.monitorBufferTick_.bind(this),1)},i.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&window.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=window.setTimeout(this.monitorBufferTick_.bind(this),500)},i.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){var e=this.chooseNextRequest_();e&&("number"==typeof e.timestampOffset&&(this.isPendingTimestampOffset_=!1,this.timelineChangeController_.pendingTimelineChange({type:this.loaderType_,from:this.currentTimeline_,to:e.timeline})),this.loadSegment_(e))}},i.isEndOfStream_=function(e,t,i){if(void 0===e&&(e=this.mediaIndex),void 0===t&&(t=this.playlist_),void 0===i&&(i=this.partIndex),!t||!this.mediaSource_)return!1;var n="number"==typeof e&&t.segments[e],r=e+1===t.segments.length,a=!n||!n.parts||i+1===n.parts.length;return t.endList&&"open"===this.mediaSource_.readyState&&r&&a},i.chooseNextRequest_=function(){var e=this.buffered_(),t=tl(e)||0,i=il(e,this.currentTime_()),n=!this.hasPlayed_()&&i>=1,r=i>=this.goalBufferLength_(),a=this.playlist_.segments;if(!a.length||n||r)return null;this.syncPoint_=this.syncPoint_||this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_());var s={partIndex:null,mediaIndex:null,startOfSegment:null,playlist:this.playlist_,isSyncRequest:Boolean(!this.syncPoint_)};if(s.isSyncRequest)s.mediaIndex=function(e,t,i){t=t||[];for(var n=[],r=0,a=0;a<t.length;a++){var s=t[a];if(e===s.timeline&&(n.push(a),(r+=s.duration)>i))return a}return 0===n.length?0:n[n.length-1]}(this.currentTimeline_,a,t);else if(null!==this.mediaIndex){var o=a[this.mediaIndex],u="number"==typeof this.partIndex?this.partIndex:-1;s.startOfSegment=o.end?o.end:t,o.parts&&o.parts[u+1]?(s.mediaIndex=this.mediaIndex,s.partIndex=u+1):s.mediaIndex=this.mediaIndex+1}else{var l=Tl.getMediaInfoForTime({experimentalExactManifestTimings:this.experimentalExactManifestTimings,playlist:this.playlist_,currentTime:this.fetchAtBuffer_?t:this.currentTime_(),startingPartIndex:this.syncPoint_.partIndex,startingSegmentIndex:this.syncPoint_.segmentIndex,startTime:this.syncPoint_.time}),c=l.segmentIndex,d=l.startTime,h=l.partIndex;s.getMediaInfoForTime=this.fetchAtBuffer_?"bufferedEnd "+t:"currentTime "+this.currentTime_(),s.mediaIndex=c,s.startOfSegment=d,s.partIndex=h}var p=a[s.mediaIndex],f=p&&"number"==typeof s.partIndex&&p.parts&&p.parts[s.partIndex];if(!p||"number"==typeof s.partIndex&&!f)return null;if("number"!=typeof s.partIndex&&p.parts&&(s.partIndex=0,f=p.parts[0]),!i&&f&&!f.independent)if(0===s.partIndex){var m=a[s.mediaIndex-1],g=m.parts&&m.parts.length&&m.parts[m.parts.length-1];g&&g.independent&&(s.mediaIndex-=1,s.partIndex=m.parts.length-1,s.independent="previous segment")}else p.parts[s.partIndex-1].independent&&(s.partIndex-=1,s.independent="previous part");var v=this.mediaSource_&&"ended"===this.mediaSource_.readyState;return s.mediaIndex>=a.length-1&&v&&!this.seeking_()?null:this.generateSegmentInfo_(s)},i.generateSegmentInfo_=function(e){var t=e.independent,i=e.playlist,n=e.mediaIndex,r=e.startOfSegment,a=e.isSyncRequest,s=e.partIndex,o=e.forceTimestampOffset,u=e.getMediaInfoForTime,l=i.segments[n],c="number"==typeof s&&l.parts[s],d={requestId:"segment-loader-"+Math.random(),uri:c&&c.resolvedUri||l.resolvedUri,mediaIndex:n,partIndex:c?s:null,isSyncRequest:a,startOfSegment:r,playlist:i,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:l.timeline,duration:c&&c.duration||l.duration,segment:l,part:c,byteLength:0,transmuxer:this.transmuxer_,getMediaInfoForTime:u,independent:t},h=void 0!==o?o:this.isPendingTimestampOffset_;d.timestampOffset=this.timestampOffsetForSegment_({segmentTimeline:l.timeline,currentTimeline:this.currentTimeline_,startOfSegment:r,buffered:this.buffered_(),overrideCheck:h});var p=tl(this.sourceUpdater_.audioBuffered());return"number"==typeof p&&(d.audioAppendStart=p-this.sourceUpdater_.audioTimestampOffset()),this.sourceUpdater_.videoBuffered().length&&(d.gopsToAlignWith=function(e,t,i){if(null==t||!e.length)return[];var n,r=Math.ceil((t-i+3)*Wu);for(n=0;n<e.length&&!(e[n].pts>r);n++);return e.slice(n)}(this.gopBuffer_,this.currentTime_()-this.sourceUpdater_.videoTimestampOffset(),this.timeMapping_)),d},i.timestampOffsetForSegment_=function(e){return i=(t=e).segmentTimeline,n=t.currentTimeline,r=t.startOfSegment,a=t.buffered,t.overrideCheck||i!==n?i<n?r:a.length?a.end(a.length-1):r:null;var t,i,n,r,a},i.earlyAbortWhenNeeded_=function(e){if(!this.vhs_.tech_.paused()&&this.xhrOptions_.timeout&&this.playlist_.attributes.BANDWIDTH&&!(Date.now()-(e.firstBytesReceivedAt||Date.now())<1e3)){var t=this.currentTime_(),i=e.bandwidth,n=this.pendingSegment_.duration,r=Tl.estimateSegmentRequestTime(n,i,this.playlist_,e.bytesReceived),a=function(e,t,i){return void 0===i&&(i=1),((e.length?e.end(e.length-1):0)-t)/i}(this.buffered_(),t,this.vhs_.tech_.playbackRate())-1;if(!(r<=a)){var s=function(e){var t=e.currentTime,i=e.bandwidth,n=e.duration,r=e.segmentDuration,a=e.timeUntilRebuffer,s=e.currentTimeline,o=e.syncController,u=e.master.playlists.filter((function(e){return!Tl.isIncompatible(e)})),l=u.filter(Tl.isEnabled);l.length||(l=u.filter((function(e){return!Tl.isDisabled(e)})));var c=l.filter(Tl.hasAttribute.bind(null,"BANDWIDTH")).map((function(e){var u=o.getSyncPoint(e,n,s,t)?1:2;return{playlist:e,rebufferingImpact:Tl.estimateSegmentRequestTime(r,i,e)*u-a}})),d=c.filter((function(e){return e.rebufferingImpact<=0}));return Lc(d,(function(e,t){return Dc(t.playlist,e.playlist)})),d.length?d[0]:(Lc(c,(function(e,t){return e.rebufferingImpact-t.rebufferingImpact})),c[0]||null)}({master:this.vhs_.playlists.master,currentTime:t,bandwidth:i,duration:this.duration_(),segmentDuration:n,timeUntilRebuffer:a,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(s){var o=r-a-s.rebufferingImpact,u=.5;a<=Ku&&(u=1),!s.playlist||s.playlist.uri===this.playlist_.uri||o<u||(this.bandwidth=s.playlist.attributes.BANDWIDTH*ic.BANDWIDTH_VARIANCE+1,this.trigger("earlyabort"))}}}},i.handleAbort_=function(e){this.logger_("Aborting "+Bc(e)),this.mediaRequestsAborted+=1},i.handleProgress_=function(e,t){this.earlyAbortWhenNeeded_(t.stats),this.checkForAbort_(t.requestId)||this.trigger("progress")},i.handleTrackInfo_=function(e,t){this.earlyAbortWhenNeeded_(e.stats),this.checkForAbort_(e.requestId)||this.checkForIllegalMediaSwitch(t)||(t=t||{},function(e,t){if(!e&&!t||!e&&t||e&&!t)return!1;if(e===t)return!0;var i=Object.keys(e).sort(),n=Object.keys(t).sort();if(i.length!==n.length)return!1;for(var r=0;r<i.length;r++){var a=i[r];if(a!==n[r])return!1;if(e[a]!==t[a])return!1}return!0}(this.currentMediaInfo_,t)||(this.appendInitSegment_={audio:!0,video:!0},this.startingMediaInfo_=t,this.currentMediaInfo_=t,this.logger_("trackinfo update",t),this.trigger("trackinfo")),this.checkForAbort_(e.requestId)||(this.pendingSegment_.trackInfo=t,this.hasEnoughInfoToAppend_()&&this.processCallQueue_()))},i.handleTimingInfo_=function(e,t,i,n){if(this.earlyAbortWhenNeeded_(e.stats),!this.checkForAbort_(e.requestId)){var r=this.pendingSegment_,a=Fc(t);r[a]=r[a]||{},r[a][i]=n,this.logger_("timinginfo: "+t+" - "+i+" - "+n),this.hasEnoughInfoToAppend_()&&this.processCallQueue_()}},i.handleCaptions_=function(e,t){var i=this;if(this.earlyAbortWhenNeeded_(e.stats),!this.checkForAbort_(e.requestId))if(0!==t.length)if(this.pendingSegment_.hasAppendedData_){var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset():this.sourceUpdater_.videoTimestampOffset(),r={};t.forEach((function(e){r[e.stream]=r[e.stream]||{startTime:1/0,captions:[],endTime:0};var t=r[e.stream];t.startTime=Math.min(t.startTime,e.startTime+n),t.endTime=Math.max(t.endTime,e.endTime+n),t.captions.push(e)})),Object.keys(r).forEach((function(e){var t=r[e],a=t.startTime,s=t.endTime,o=t.captions,u=i.inbandTextTracks_;i.logger_("adding cues from "+a+" -> "+s+" for "+e),function(e,t,i){if(!e[i]){t.trigger({type:"usage",name:"vhs-608"}),t.trigger({type:"usage",name:"hls-608"});var n=i;/^cc708_/.test(i)&&(n="SERVICE"+i.split("_")[1]);var r=t.textTracks().getTrackById(n);if(r)e[i]=r;else{var a=i,s=i,o=!1,u=(t.options_.vhs&&t.options_.vhs.captionServices||{})[n];u&&(a=u.label,s=u.language,o=u.default),e[i]=t.addRemoteTextTrack({kind:"captions",id:n,default:o,label:a,language:s},!1).track}}}(u,i.vhs_.tech_,e),Rc(a,s,u[e]),function(e){var t=e.inbandTextTracks,i=e.captionArray,n=e.timestampOffset;if(i){var r=window.WebKitDataCue||window.VTTCue;i.forEach((function(e){var i=e.stream;t[i].addCue(new r(e.startTime+n,e.endTime+n,e.text))}))}}({captionArray:o,inbandTextTracks:u,timestampOffset:n})})),this.transmuxer_&&this.transmuxer_.postMessage({action:"clearParsedMp4Captions"})}else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this,e,t));else this.logger_("SegmentLoader received no captions from a caption event")},i.handleId3_=function(e,t,i){if(this.earlyAbortWhenNeeded_(e.stats),!this.checkForAbort_(e.requestId))if(this.pendingSegment_.hasAppendedData_){var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset():this.sourceUpdater_.videoTimestampOffset();!function(e,t,i){e.metadataTrack_||(e.metadataTrack_=i.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,e.metadataTrack_.inBandMetadataTrackDispatchType=t)}(this.inbandTextTracks_,i,this.vhs_.tech_),function(e){var t=e.inbandTextTracks,i=e.metadataArray,n=e.timestampOffset,r=e.videoDuration;if(i){var a=window.WebKitDataCue||window.VTTCue,s=t.metadataTrack_;if(s&&(i.forEach((function(e){var t=e.cueTime+n;!("number"!=typeof t||window.isNaN(t)||t<0)&&t<1/0&&e.frames.forEach((function(e){var i=new a(t,t,e.value||e.url||e.data||"");i.frame=e,i.value=e,function(e){Object.defineProperties(e.frame,{id:{get:function(){return ua.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return ua.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return ua.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}})}(i),s.addCue(i)}))})),s.cues&&s.cues.length)){for(var o=s.cues,u=[],l=0;l<o.length;l++)o[l]&&u.push(o[l]);var c=u.reduce((function(e,t){var i=e[t.startTime]||[];return i.push(t),e[t.startTime]=i,e}),{}),d=Object.keys(c).sort((function(e,t){return Number(e)-Number(t)}));d.forEach((function(e,t){var i=c[e],n=Number(d[t+1])||r;i.forEach((function(e){e.endTime=n}))}))}}}({inbandTextTracks:this.inbandTextTracks_,metadataArray:t,timestampOffset:n,videoDuration:this.duration_()})}else this.metadataQueue_.id3.push(this.handleId3_.bind(this,e,t,i))},i.processMetadataQueue_=function(){this.metadataQueue_.id3.forEach((function(e){return e()})),this.metadataQueue_.caption.forEach((function(e){return e()})),this.metadataQueue_.id3=[],this.metadataQueue_.caption=[]},i.processCallQueue_=function(){var e=this.callQueue_;this.callQueue_=[],e.forEach((function(e){return e()}))},i.processLoadQueue_=function(){var e=this.loadQueue_;this.loadQueue_=[],e.forEach((function(e){return e()}))},i.hasEnoughInfoToLoad_=function(){if("audio"!==this.loaderType_)return!0;var e=this.pendingSegment_;return!(!e||this.getCurrentMediaInfo_()&&jc({timelineChangeController:this.timelineChangeController_,currentTimeline:this.currentTimeline_,segmentTimeline:e.timeline,loaderType:this.loaderType_,audioDisabled:this.audioDisabled_}))},i.getCurrentMediaInfo_=function(e){return void 0===e&&(e=this.pendingSegment_),e&&e.trackInfo||this.currentMediaInfo_},i.getMediaInfo_=function(e){return void 0===e&&(e=this.pendingSegment_),this.getCurrentMediaInfo_(e)||this.startingMediaInfo_},i.hasEnoughInfoToAppend_=function(){if(!this.sourceUpdater_.ready())return!1;if(this.waitingOnRemove_||this.quotaExceededErrorRetryTimeout_)return!1;var e=this.pendingSegment_,t=this.getCurrentMediaInfo_();if(!e||!t)return!1;var i=t.hasAudio,n=t.hasVideo,r=t.isMuxed;return!(n&&!e.videoTimingInfo||i&&!this.audioDisabled_&&!r&&!e.audioTimingInfo||jc({timelineChangeController:this.timelineChangeController_,currentTimeline:this.currentTimeline_,segmentTimeline:e.timeline,loaderType:this.loaderType_,audioDisabled:this.audioDisabled_}))},i.handleData_=function(e,t){if(this.earlyAbortWhenNeeded_(e.stats),!this.checkForAbort_(e.requestId))if(!this.callQueue_.length&&this.hasEnoughInfoToAppend_()){var i=this.pendingSegment_;if(this.setTimeMapping_(i.timeline),this.updateMediaSecondsLoaded_(i.part||i.segment),"closed"!==this.mediaSource_.readyState){if(e.map&&(e.map=this.initSegmentForMap(e.map,!0),i.segment.map=e.map),e.key&&this.segmentKey(e.key,!0),i.isFmp4=e.isFmp4,i.timingInfo=i.timingInfo||{},i.isFmp4)this.trigger("fmp4"),i.timingInfo.start=i[Fc(t.type)].start;else{var n,r=this.getCurrentMediaInfo_(),a="main"===this.loaderType_&&r&&r.hasVideo;a&&(n=i.videoTimingInfo.start),i.timingInfo.start=this.trueSegmentStart_({currentStart:i.timingInfo.start,playlist:i.playlist,mediaIndex:i.mediaIndex,currentVideoTimestampOffset:this.sourceUpdater_.videoTimestampOffset(),useVideoTimingInfo:a,firstVideoFrameTimeForData:n,videoTimingInfo:i.videoTimingInfo,audioTimingInfo:i.audioTimingInfo})}if(this.updateAppendInitSegmentStatus(i,t.type),this.updateSourceBufferTimestampOffset_(i),i.isSyncRequest){this.updateTimingInfoEnd_(i),this.syncController_.saveSegmentTimingInfo({segmentInfo:i,shouldSaveTimelineMapping:"main"===this.loaderType_});var s=this.chooseNextRequest_();if(s.mediaIndex!==i.mediaIndex||s.partIndex!==i.partIndex)return void this.logger_("sync segment was incorrect, not appending");this.logger_("sync segment was correct, appending")}i.hasAppendedData_=!0,this.processMetadataQueue_(),this.appendData_(i,t)}}else this.callQueue_.push(this.handleData_.bind(this,e,t))},i.updateAppendInitSegmentStatus=function(e,t){"main"!==this.loaderType_||"number"!=typeof e.timestampOffset||e.changedTimestampOffset||(this.appendInitSegment_={audio:!0,video:!0}),this.playlistOfLastInitSegment_[t]!==e.playlist&&(this.appendInitSegment_[t]=!0)},i.getInitSegmentAndUpdateState_=function(e){var t=e.type,i=e.initSegment,n=e.map,r=e.playlist;if(n){var a=Gl(n);if(this.activeInitSegmentId_===a)return null;i=this.initSegmentForMap(n,!0).bytes,this.activeInitSegmentId_=a}return i&&this.appendInitSegment_[t]?(this.playlistOfLastInitSegment_[t]=r,this.appendInitSegment_[t]=!1,this.activeInitSegmentId_=null,i):null},i.handleQuotaExceededError_=function(e,t){var i=this,n=e.segmentInfo,r=e.type,a=e.bytes,s=this.sourceUpdater_.audioBuffered(),o=this.sourceUpdater_.videoBuffered();s.length>1&&this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: "+el(s).join(", ")),o.length>1&&this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: "+el(o).join(", "));var u=s.length?s.start(0):0,l=s.length?s.end(s.length-1):0,c=o.length?o.start(0):0,d=o.length?o.end(o.length-1):0;if(l-u<=1&&d-c<=1)return this.logger_("On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: "+a.byteLength+", audio buffer: "+el(s).join(", ")+", video buffer: "+el(o).join(", ")+", "),this.error({message:"Quota exceeded error with append of a single segment of content",excludeUntil:1/0}),void this.trigger("error");this.waitingOnRemove_=!0,this.callQueue_.push(this.appendToSourceBuffer_.bind(this,{segmentInfo:n,type:r,bytes:a}));var h=this.currentTime_()-1;this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to "+h),this.remove(0,h,(function(){i.logger_("On QUOTA_EXCEEDED_ERR, retrying append in 1s"),i.waitingOnRemove_=!1,i.quotaExceededErrorRetryTimeout_=window.setTimeout((function(){i.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"),i.quotaExceededErrorRetryTimeout_=null,i.processCallQueue_()}),1e3)}),!0)},i.handleAppendError_=function(e,t){var i=e.segmentInfo,n=e.type,r=e.bytes;t&&(22!==t.code?(this.logger_("Received non QUOTA_EXCEEDED_ERR on append",t),this.error(n+" append of "+r.length+"b failed for segment #"+i.mediaIndex+" in playlist "+i.playlist.id),this.trigger("appenderror")):this.handleQuotaExceededError_({segmentInfo:i,type:n,bytes:r}))},i.appendToSourceBuffer_=function(e){var t,i,n,r=e.segmentInfo,a=e.type,s=e.initSegment,o=e.data,u=e.bytes;if(!u){var l=[o],c=o.byteLength;s&&(l.unshift(s),c+=s.byteLength),n=0,(t={bytes:c,segments:l}).bytes&&(i=new Uint8Array(t.bytes),t.segments.forEach((function(e){i.set(e,n),n+=e.byteLength}))),u=i}this.sourceUpdater_.appendBuffer({segmentInfo:r,type:a,bytes:u},this.handleAppendError_.bind(this,{segmentInfo:r,type:a,bytes:u}))},i.handleSegmentTimingInfo_=function(e,t,i){if(this.pendingSegment_&&t===this.pendingSegment_.requestId){var n=this.pendingSegment_.segment,r=e+"TimingInfo";n[r]||(n[r]={}),n[r].transmuxerPrependedSeconds=i.prependedContentDuration||0,n[r].transmuxedPresentationStart=i.start.presentation,n[r].transmuxedDecodeStart=i.start.decode,n[r].transmuxedPresentationEnd=i.end.presentation,n[r].transmuxedDecodeEnd=i.end.decode,n[r].baseMediaDecodeTime=i.baseMediaDecodeTime}},i.appendData_=function(e,t){var i=t.type,n=t.data;if(n&&n.byteLength&&("audio"!==i||!this.audioDisabled_)){var r=this.getInitSegmentAndUpdateState_({type:i,initSegment:t.initSegment,playlist:e.playlist,map:e.isFmp4?e.segment.map:null});this.appendToSourceBuffer_({segmentInfo:e,type:i,initSegment:r,data:n})}},i.loadSegment_=function(e){var t=this;this.state="WAITING",this.pendingSegment_=e,this.trimBackBuffer_(e),"number"==typeof e.timestampOffset&&this.transmuxer_&&this.transmuxer_.postMessage({action:"clearAllMp4Captions"}),this.hasEnoughInfoToLoad_()?this.updateTransmuxerAndRequestSegment_(e):this.loadQueue_.push((function(){var i=m({},e,{forceTimestampOffset:!0});m(e,t.generateSegmentInfo_(i)),t.isPendingTimestampOffset_=!1,t.updateTransmuxerAndRequestSegment_(e)}))},i.updateTransmuxerAndRequestSegment_=function(e){var t=this;this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset)&&(this.gopBuffer_.length=0,e.gopsToAlignWith=[],this.timeMapping_=0,this.transmuxer_.postMessage({action:"reset"}),this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:e.timestampOffset}));var i=this.createSimplifiedSegmentObj_(e),n=this.isEndOfStream_(e.mediaIndex,e.playlist,e.partIndex),r=null!==this.mediaIndex,a=e.timeline!==this.currentTimeline_&&e.timeline>0,s=n||r&&a;this.logger_("Requesting "+Bc(e)),i.map&&!i.map.bytes&&(this.logger_("going to request init segment."),this.appendInitSegment_={video:!0,audio:!0}),e.abortRequests=wc({xhr:this.vhs_.xhr,xhrOptions:this.xhrOptions_,decryptionWorker:this.decrypter_,segment:i,abortFn:this.handleAbort_.bind(this,e),progressFn:this.handleProgress_.bind(this),trackInfoFn:this.handleTrackInfo_.bind(this),timingInfoFn:this.handleTimingInfo_.bind(this),videoSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this,"video",e.requestId),audioSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this,"audio",e.requestId),captionsFn:this.handleCaptions_.bind(this),isEndOfTimeline:s,endedTimelineFn:function(){t.logger_("received endedtimeline callback")},id3Fn:this.handleId3_.bind(this),dataFn:this.handleData_.bind(this),doneFn:this.segmentRequestFinished_.bind(this),onTransmuxerLog:function(i){var n=i.message,r=i.level,a=i.stream;t.logger_(Bc(e)+" logged from transmuxer stream "+a+" as a "+r+": "+n)}})},i.trimBackBuffer_=function(e){var t=function(e,t,i){var n=t-ic.BACK_BUFFER_LENGTH;e.length&&(n=Math.max(n,e.start(0)));var r=t-i;return Math.min(r,n)}(this.seekable_(),this.currentTime_(),this.playlist_.targetDuration||10);t>0&&this.remove(0,t)},i.createSimplifiedSegmentObj_=function(e){var t=e.segment,i=e.part,n={resolvedUri:i?i.resolvedUri:t.resolvedUri,byterange:i?i.byterange:t.byterange,requestId:e.requestId,transmuxer:e.transmuxer,audioAppendStart:e.audioAppendStart,gopsToAlignWith:e.gopsToAlignWith,part:e.part},r=e.playlist.segments[e.mediaIndex-1];if(r&&r.timeline===t.timeline&&(r.videoTimingInfo?n.baseStartTime=r.videoTimingInfo.transmuxedDecodeEnd:r.audioTimingInfo&&(n.baseStartTime=r.audioTimingInfo.transmuxedDecodeEnd)),t.key){var a=t.key.iv||new Uint32Array([0,0,0,e.mediaIndex+e.playlist.mediaSequence]);n.key=this.segmentKey(t.key),n.key.iv=a}return t.map&&(n.map=this.initSegmentForMap(t.map)),n},i.saveTransferStats_=function(e){this.mediaRequests+=1,e&&(this.mediaBytesTransferred+=e.bytesReceived,this.mediaTransferDuration+=e.roundTripTime)},i.saveBandwidthRelatedStats_=function(e,t){this.pendingSegment_.byteLength=t.bytesReceived,e<Uc?this.logger_("Ignoring segment's bandwidth because its duration of "+e+" is less than the min to record 0.016666666666666666"):(this.bandwidth=t.bandwidth,this.roundTrip=t.roundTripTime)},i.handleTimeout_=function(){this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,this.trigger("bandwidthupdate")},i.segmentRequestFinished_=function(e,t,i){if(this.callQueue_.length)this.callQueue_.push(this.segmentRequestFinished_.bind(this,e,t,i));else if(this.saveTransferStats_(t.stats),this.pendingSegment_&&t.requestId===this.pendingSegment_.requestId){if(e){if(this.pendingSegment_=null,this.state="READY",e.code===fc)return;return this.pause(),e.code===pc?void this.handleTimeout_():(this.mediaRequestsErrored+=1,this.error(e),void this.trigger("error"))}var n=this.pendingSegment_;this.saveBandwidthRelatedStats_(n.duration,t.stats),n.endOfAllRequests=t.endOfAllRequests,i.gopInfo&&(this.gopBuffer_=function(e,t,i){if(!t.length)return e;if(i)return t.slice();for(var n=t[0].pts,r=0;r<e.length&&!(e[r].pts>=n);r++);return e.slice(0,r).concat(t)}(this.gopBuffer_,i.gopInfo,this.safeAppend_)),this.state="APPENDING",this.trigger("appending"),this.waitForAppendsToComplete_(n)}},i.setTimeMapping_=function(e){var t=this.syncController_.mappingForTimeline(e);null!==t&&(this.timeMapping_=t)},i.updateMediaSecondsLoaded_=function(e){"number"==typeof e.start&&"number"==typeof e.end?this.mediaSecondsLoaded+=e.end-e.start:this.mediaSecondsLoaded+=e.duration},i.shouldUpdateTransmuxerTimestampOffset_=function(e){return null!==e&&("main"===this.loaderType_&&e!==this.sourceUpdater_.videoTimestampOffset()||!this.audioDisabled_&&e!==this.sourceUpdater_.audioTimestampOffset())},i.trueSegmentStart_=function(e){var t=e.currentStart,i=e.playlist,n=e.mediaIndex,r=e.firstVideoFrameTimeForData,a=e.currentVideoTimestampOffset,s=e.useVideoTimingInfo,o=e.videoTimingInfo,u=e.audioTimingInfo;if(void 0!==t)return t;if(!s)return u.start;var l=i.segments[n-1];return 0!==n&&l&&void 0!==l.start&&l.end===r+a?o.start:r},i.waitForAppendsToComplete_=function(e){var t=this.getCurrentMediaInfo_(e);if(!t)return this.error({message:"No starting media returned, likely due to an unsupported media format.",blacklistDuration:1/0}),void this.trigger("error");var i=t.hasAudio,n=t.hasVideo,r=t.isMuxed,a="main"===this.loaderType_&&n,s=!this.audioDisabled_&&i&&!r;if(e.waitingOnAppends=0,!e.hasAppendedData_)return e.timingInfo||"number"!=typeof e.timestampOffset||(this.isPendingTimestampOffset_=!0),e.timingInfo={start:0},e.waitingOnAppends++,this.isPendingTimestampOffset_||(this.updateSourceBufferTimestampOffset_(e),this.processMetadataQueue_()),void this.checkAppendsDone_(e);a&&e.waitingOnAppends++,s&&e.waitingOnAppends++,a&&this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this,e)),s&&this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this,e))},i.checkAppendsDone_=function(e){this.checkForAbort_(e.requestId)||(e.waitingOnAppends--,0===e.waitingOnAppends&&this.handleAppendsDone_())},i.checkForIllegalMediaSwitch=function(e){var t=function(e,t,i){return"main"===e&&t&&i?i.hasAudio||i.hasVideo?t.hasVideo&&!i.hasVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!t.hasVideo&&i.hasVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null}(this.loaderType_,this.getCurrentMediaInfo_(),e);return!!t&&(this.error({message:t,blacklistDuration:1/0}),this.trigger("error"),!0)},i.updateSourceBufferTimestampOffset_=function(e){if(null!==e.timestampOffset&&"number"==typeof e.timingInfo.start&&!e.changedTimestampOffset&&"main"===this.loaderType_){var t=!1;e.timestampOffset-=this.getSegmentStartTimeForTimestampOffsetCalculation_({videoTimingInfo:e.segment.videoTimingInfo,audioTimingInfo:e.segment.audioTimingInfo,timingInfo:e.timingInfo}),e.changedTimestampOffset=!0,e.timestampOffset!==this.sourceUpdater_.videoTimestampOffset()&&(this.sourceUpdater_.videoTimestampOffset(e.timestampOffset),t=!0),e.timestampOffset!==this.sourceUpdater_.audioTimestampOffset()&&(this.sourceUpdater_.audioTimestampOffset(e.timestampOffset),t=!0),t&&this.trigger("timestampoffset")}},i.getSegmentStartTimeForTimestampOffsetCalculation_=function(e){var t=e.videoTimingInfo,i=e.audioTimingInfo,n=e.timingInfo;return this.useDtsForTimestampOffset_?t&&"number"==typeof t.transmuxedDecodeStart?t.transmuxedDecodeStart:i&&"number"==typeof i.transmuxedDecodeStart?i.transmuxedDecodeStart:n.start:n.start},i.updateTimingInfoEnd_=function(e){e.timingInfo=e.timingInfo||{};var t=this.getMediaInfo_(),i="main"===this.loaderType_&&t&&t.hasVideo&&e.videoTimingInfo?e.videoTimingInfo:e.audioTimingInfo;i&&(e.timingInfo.end="number"==typeof i.end?i.end:i.start+e.duration)},i.handleAppendsDone_=function(){if(this.pendingSegment_&&this.trigger("appendsdone"),!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var e=this.pendingSegment_;this.updateTimingInfoEnd_(e),this.shouldSaveSegmentTimingInfo_&&this.syncController_.saveSegmentTimingInfo({segmentInfo:e,shouldSaveTimelineMapping:"main"===this.loaderType_});var t=function(e,t){if("hls"!==t)return null;var i,n,r=(i={audioTimingInfo:e.audioTimingInfo,videoTimingInfo:e.videoTimingInfo},n=0,["video","audio"].forEach((function(e){var t=i[e+"TimingInfo"];if(t){var r,a=t.start,s=t.end;"bigint"==typeof a||"bigint"==typeof s?r=window.BigInt(s)-window.BigInt(a):"number"==typeof a&&"number"==typeof s&&(r=s-a),void 0!==r&&r>n&&(n=r)}})),"bigint"==typeof n&&n<Number.MAX_SAFE_INTEGER&&(n=Number(n)),n);if(!r)return null;var a=e.playlist.targetDuration,s=Hc({segmentDuration:r,maxDuration:2*a}),o=Hc({segmentDuration:r,maxDuration:a}),u="Segment with index "+e.mediaIndex+" from playlist "+e.playlist.id+" has a duration of "+r+" when the reported duration is "+e.duration+" and the target duration is "+a+". For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1";return s||o?{severity:s?"warn":"info",message:u}:null}(e,this.sourceType_);if(t&&("warn"===t.severity?ua.log.warn(t.message):this.logger_(t.message)),this.recordThroughput_(e),this.pendingSegment_=null,this.state="READY",!e.isSyncRequest||(this.trigger("syncinfoupdate"),e.hasAppendedData_)){this.logger_("Appended "+Bc(e)),this.addSegmentMetadataCue_(e),this.fetchAtBuffer_=!0,this.currentTimeline_!==e.timeline&&(this.timelineChangeController_.lastTimelineChange({type:this.loaderType_,from:this.currentTimeline_,to:e.timeline}),"main"!==this.loaderType_||this.audioDisabled_||this.timelineChangeController_.lastTimelineChange({type:"audio",from:this.currentTimeline_,to:e.timeline})),this.currentTimeline_=e.timeline,this.trigger("syncinfoupdate");var i=e.segment,n=e.part,r=i.end&&this.currentTime_()-i.end>3*e.playlist.targetDuration,a=n&&n.end&&this.currentTime_()-n.end>3*e.playlist.partTargetDuration;if(r||a)return this.logger_("bad "+(r?"segment":"part")+" "+Bc(e)),void this.resetEverything();null!==this.mediaIndex&&this.trigger("bandwidthupdate"),this.trigger("progress"),this.mediaIndex=e.mediaIndex,this.partIndex=e.partIndex,this.isEndOfStream_(e.mediaIndex,e.playlist,e.partIndex)&&this.endOfStream(),this.trigger("appended"),e.hasAppendedData_&&this.mediaAppends++,this.paused()||this.monitorBuffer_()}else this.logger_("Throwing away un-appended sync request "+Bc(e))},i.recordThroughput_=function(e){if(e.duration<Uc)this.logger_("Ignoring segment's throughput because its duration of "+e.duration+" is less than the min to record 0.016666666666666666");else{var t=this.throughput.rate,i=Date.now()-e.endOfAllRequests+1,n=Math.floor(e.byteLength/i*8*1e3);this.throughput.rate+=(n-t)/++this.throughput.count}},i.addSegmentMetadataCue_=function(e){if(this.segmentMetadataTrack_){var t=e.segment,i=t.start,n=t.end;if(Nc(i)&&Nc(n)){Rc(i,n,this.segmentMetadataTrack_);var r=window.WebKitDataCue||window.VTTCue,a={custom:t.custom,dateTimeObject:t.dateTimeObject,dateTimeString:t.dateTimeString,bandwidth:e.playlist.attributes.BANDWIDTH,resolution:e.playlist.attributes.RESOLUTION,codecs:e.playlist.attributes.CODECS,byteLength:e.byteLength,uri:e.uri,timeline:e.timeline,playlist:e.playlist.id,start:i,end:n},s=new r(i,n,JSON.stringify(a));s.value=a,this.segmentMetadataTrack_.addCue(s)}}},t}(ua.EventTarget);function Vc(){}var Wc,Gc=function(e){return"string"!=typeof e?e:e.replace(/./,(function(e){return e.toUpperCase()}))},zc=["video","audio"],Xc=function(e,t){var i=t[e+"Buffer"];return i&&i.updating||t.queuePending[e]},Kc=function e(t,i){if(0!==i.queue.length){var n=0,r=i.queue[n];if("mediaSource"!==r.type){if("mediaSource"!==t&&i.ready()&&"closed"!==i.mediaSource.readyState&&!Xc(t,i)){if(r.type!==t){if(null===(n=function(e,t){for(var i=0;i<t.length;i++){var n=t[i];if("mediaSource"===n.type)return null;if(n.type===e)return i}return null}(t,i.queue)))return;r=i.queue[n]}return i.queue.splice(n,1),i.queuePending[t]=r,r.action(t,i),r.doneFn?void 0:(i.queuePending[t]=null,void e(t,i))}}else i.updating()||"closed"===i.mediaSource.readyState||(i.queue.shift(),r.action(i),r.doneFn&&r.doneFn(),e("audio",i),e("video",i))}},Yc=function(e,t){var i=t[e+"Buffer"],n=Gc(e);i&&(i.removeEventListener("updateend",t["on"+n+"UpdateEnd_"]),i.removeEventListener("error",t["on"+n+"Error_"]),t.codecs[e]=null,t[e+"Buffer"]=null)},Qc=function(e,t){return e&&t&&-1!==Array.prototype.indexOf.call(e.sourceBuffers,t)},$c=function(e,t,i){return function(n,r){var a=r[n+"Buffer"];if(Qc(r.mediaSource,a)){r.logger_("Appending segment "+t.mediaIndex+"'s "+e.length+" bytes to "+n+"Buffer");try{a.appendBuffer(e)}catch(e){r.logger_("Error with code "+e.code+" "+(22===e.code?"(QUOTA_EXCEEDED_ERR) ":"")+"when appending segment "+t.mediaIndex+" to "+n+"Buffer"),r.queuePending[n]=null,i(e)}}}},Jc=function(e,t){return function(i,n){var r=n[i+"Buffer"];if(Qc(n.mediaSource,r)){n.logger_("Removing "+e+" to "+t+" from "+i+"Buffer");try{r.remove(e,t)}catch(r){n.logger_("Remove "+e+" to "+t+" from "+i+"Buffer failed")}}}},Zc=function(e){return function(t,i){var n=i[t+"Buffer"];Qc(i.mediaSource,n)&&(i.logger_("Setting "+t+"timestampOffset to "+e),n.timestampOffset=e)}},ed=function(e){return function(t,i){e()}},td=function(e){return function(t){if("open"===t.mediaSource.readyState){t.logger_("Calling mediaSource endOfStream("+(e||"")+")");try{t.mediaSource.endOfStream(e)}catch(e){ua.log.warn("Failed to call media source endOfStream",e)}}}},id=function(e,t){return function(i){var n=Gc(e),r=Pa(t);i.logger_("Adding "+e+"Buffer with codec "+t+" to mediaSource");var a=i.mediaSource.addSourceBuffer(r);a.addEventListener("updateend",i["on"+n+"UpdateEnd_"]),a.addEventListener("error",i["on"+n+"Error_"]),i.codecs[e]=t,i[e+"Buffer"]=a}},nd=function(e){return function(t){var i=t[e+"Buffer"];if(Yc(e,t),Qc(t.mediaSource,i)){t.logger_("Removing "+e+"Buffer with codec "+t.codecs[e]+" from mediaSource");try{t.mediaSource.removeSourceBuffer(i)}catch(t){ua.log.warn("Failed to removeSourceBuffer "+e+"Buffer",t)}}}},rd=function(e){return function(t,i){var n=i[t+"Buffer"],r=Pa(e);Qc(i.mediaSource,n)&&i.codecs[t]!==e&&(i.logger_("changing "+t+"Buffer codec from "+i.codecs[t]+" to "+e),n.changeType(r),i.codecs[t]=e)}},ad=function(e){var t=e.type,i=e.sourceUpdater,n=e.action,r=e.doneFn,a=e.name;i.queue.push({type:t,action:n,doneFn:r,name:a}),Kc(t,i)},sd=function(e,t){return function(i){if(t.queuePending[e]){var n=t.queuePending[e].doneFn;t.queuePending[e]=null,n&&n(t[e+"Error_"])}Kc(e,t)}},od=function(e){function t(t){var i;return(i=e.call(this)||this).mediaSource=t,i.sourceopenListener_=function(){return Kc("mediaSource",_t(i))},i.mediaSource.addEventListener("sourceopen",i.sourceopenListener_),i.logger_=Xu("SourceUpdater"),i.audioTimestampOffset_=0,i.videoTimestampOffset_=0,i.queue=[],i.queuePending={audio:null,video:null},i.delayedAudioAppendQueue_=[],i.videoAppendQueued_=!1,i.codecs={},i.onVideoUpdateEnd_=sd("video",_t(i)),i.onAudioUpdateEnd_=sd("audio",_t(i)),i.onVideoError_=function(e){i.videoError_=e},i.onAudioError_=function(e){i.audioError_=e},i.createdSourceBuffers_=!1,i.initializedEme_=!1,i.triggeredReady_=!1,i}bt(t,e);var i=t.prototype;return i.initializedEme=function(){this.initializedEme_=!0,this.triggerReady()},i.hasCreatedSourceBuffers=function(){return this.createdSourceBuffers_},i.hasInitializedAnyEme=function(){return this.initializedEme_},i.ready=function(){return this.hasCreatedSourceBuffers()&&this.hasInitializedAnyEme()},i.createSourceBuffers=function(e){this.hasCreatedSourceBuffers()||(this.addOrChangeSourceBuffers(e),this.createdSourceBuffers_=!0,this.trigger("createdsourcebuffers"),this.triggerReady())},i.triggerReady=function(){this.ready()&&!this.triggeredReady_&&(this.triggeredReady_=!0,this.trigger("ready"))},i.addSourceBuffer=function(e,t){ad({type:"mediaSource",sourceUpdater:this,action:id(e,t),name:"addSourceBuffer"})},i.abort=function(e){ad({type:e,sourceUpdater:this,action:function(e,t){if("open"===t.mediaSource.readyState){var i=t[e+"Buffer"];if(Qc(t.mediaSource,i)){t.logger_("calling abort on "+e+"Buffer");try{i.abort()}catch(t){ua.log.warn("Failed to abort on "+e+"Buffer",t)}}}},name:"abort"})},i.removeSourceBuffer=function(e){this.canRemoveSourceBuffer()?ad({type:"mediaSource",sourceUpdater:this,action:nd(e),name:"removeSourceBuffer"}):ua.log.error("removeSourceBuffer is not supported!")},i.canRemoveSourceBuffer=function(){return!ua.browser.IE_VERSION&&!ua.browser.IS_FIREFOX&&window.MediaSource&&window.MediaSource.prototype&&"function"==typeof window.MediaSource.prototype.removeSourceBuffer},t.canChangeType=function(){return window.SourceBuffer&&window.SourceBuffer.prototype&&"function"==typeof window.SourceBuffer.prototype.changeType},i.canChangeType=function(){return this.constructor.canChangeType()},i.changeType=function(e,t){this.canChangeType()?ad({type:e,sourceUpdater:this,action:rd(t),name:"changeType"}):ua.log.error("changeType is not supported!")},i.addOrChangeSourceBuffers=function(e){var t=this;if(!e||"object"!=typeof e||0===Object.keys(e).length)throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");Object.keys(e).forEach((function(i){var n=e[i];if(!t.hasCreatedSourceBuffers())return t.addSourceBuffer(i,n);t.canChangeType()&&t.changeType(i,n)}))},i.appendBuffer=function(e,t){var i=this,n=e.segmentInfo,r=e.type,a=e.bytes;if(this.processedAppend_=!0,"audio"===r&&this.videoBuffer&&!this.videoAppendQueued_)return this.delayedAudioAppendQueue_.push([e,t]),void this.logger_("delayed audio append of "+a.length+" until video append");if(ad({type:r,sourceUpdater:this,action:$c(a,n||{mediaIndex:-1},t),doneFn:t,name:"appendBuffer"}),"video"===r){if(this.videoAppendQueued_=!0,!this.delayedAudioAppendQueue_.length)return;var s=this.delayedAudioAppendQueue_.slice();this.logger_("queuing delayed audio "+s.length+" appendBuffers"),this.delayedAudioAppendQueue_.length=0,s.forEach((function(e){i.appendBuffer.apply(i,e)}))}},i.audioBuffered=function(){return Qc(this.mediaSource,this.audioBuffer)&&this.audioBuffer.buffered?this.audioBuffer.buffered:ua.createTimeRange()},i.videoBuffered=function(){return Qc(this.mediaSource,this.videoBuffer)&&this.videoBuffer.buffered?this.videoBuffer.buffered:ua.createTimeRange()},i.buffered=function(){var e=Qc(this.mediaSource,this.videoBuffer)?this.videoBuffer:null,t=Qc(this.mediaSource,this.audioBuffer)?this.audioBuffer:null;return t&&!e?this.audioBuffered():e&&!t?this.videoBuffered():function(e,t){var i=null,n=null,r=0,a=[],s=[];if(!(e&&e.length&&t&&t.length))return ua.createTimeRange();for(var o=e.length;o--;)a.push({time:e.start(o),type:"start"}),a.push({time:e.end(o),type:"end"});for(o=t.length;o--;)a.push({time:t.start(o),type:"start"}),a.push({time:t.end(o),type:"end"});for(a.sort((function(e,t){return e.time-t.time})),o=0;o<a.length;o++)"start"===a[o].type?2==++r&&(i=a[o].time):"end"===a[o].type&&1==--r&&(n=a[o].time),null!==i&&null!==n&&(s.push([i,n]),i=null,n=null);return ua.createTimeRanges(s)}(this.audioBuffered(),this.videoBuffered())},i.setDuration=function(e,t){var i;void 0===t&&(t=Vc),ad({type:"mediaSource",sourceUpdater:this,action:(i=e,function(e){e.logger_("Setting mediaSource duration to "+i);try{e.mediaSource.duration=i}catch(e){ua.log.warn("Failed to set media source duration",e)}}),name:"duration",doneFn:t})},i.endOfStream=function(e,t){void 0===e&&(e=null),void 0===t&&(t=Vc),"string"!=typeof e&&(e=void 0),ad({type:"mediaSource",sourceUpdater:this,action:td(e),name:"endOfStream",doneFn:t})},i.removeAudio=function(e,t,i){void 0===i&&(i=Vc),this.audioBuffered().length&&0!==this.audioBuffered().end(0)?ad({type:"audio",sourceUpdater:this,action:Jc(e,t),doneFn:i,name:"remove"}):i()},i.removeVideo=function(e,t,i){void 0===i&&(i=Vc),this.videoBuffered().length&&0!==this.videoBuffered().end(0)?ad({type:"video",sourceUpdater:this,action:Jc(e,t),doneFn:i,name:"remove"}):i()},i.updating=function(){return!(!Xc("audio",this)&&!Xc("video",this))},i.audioTimestampOffset=function(e){return void 0!==e&&this.audioBuffer&&this.audioTimestampOffset_!==e&&(ad({type:"audio",sourceUpdater:this,action:Zc(e),name:"timestampOffset"}),this.audioTimestampOffset_=e),this.audioTimestampOffset_},i.videoTimestampOffset=function(e){return void 0!==e&&this.videoBuffer&&this.videoTimestampOffset!==e&&(ad({type:"video",sourceUpdater:this,action:Zc(e),name:"timestampOffset"}),this.videoTimestampOffset_=e),this.videoTimestampOffset_},i.audioQueueCallback=function(e){this.audioBuffer&&ad({type:"audio",sourceUpdater:this,action:ed(e),name:"callback"})},i.videoQueueCallback=function(e){this.videoBuffer&&ad({type:"video",sourceUpdater:this,action:ed(e),name:"callback"})},i.dispose=function(){var e=this;this.trigger("dispose"),zc.forEach((function(t){e.abort(t),e.canRemoveSourceBuffer()?e.removeSourceBuffer(t):e[t+"QueueCallback"]((function(){return Yc(t,e)}))})),this.videoAppendQueued_=!1,this.delayedAudioAppendQueue_.length=0,this.sourceopenListener_&&this.mediaSource.removeEventListener("sourceopen",this.sourceopenListener_),this.off()},t}(ua.EventTarget),ud=function(e){return decodeURIComponent(escape(String.fromCharCode.apply(null,e)))},ld=new Uint8Array("\n\n".split("").map((function(e){return e.charCodeAt(0)}))),cd=function(e){function t(t,i){var n;return void 0===i&&(i={}),(n=e.call(this,t,i)||this).mediaSource_=null,n.subtitlesTrack_=null,n.loaderType_="subtitle",n.featuresNativeTextTracks_=t.featuresNativeTextTracks,n.shouldSaveSegmentTimingInfo_=!1,n}bt(t,e);var i=t.prototype;return i.createTransmuxer_=function(){return null},i.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues||!this.subtitlesTrack_.cues.length)return ua.createTimeRanges();var e=this.subtitlesTrack_.cues,t=e[0].startTime,i=e[e.length-1].startTime;return ua.createTimeRanges([[t,i]])},i.initSegmentForMap=function(e,t){if(void 0===t&&(t=!1),!e)return null;var i=Gl(e),n=this.initSegments_[i];if(t&&!n&&e.bytes){var r=ld.byteLength+e.bytes.byteLength,a=new Uint8Array(r);a.set(e.bytes),a.set(ld,e.bytes.byteLength),this.initSegments_[i]=n={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:a}}return n||e},i.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},i.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},i.track=function(e){return void 0===e||(this.subtitlesTrack_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},i.remove=function(e,t){Rc(e,t,this.subtitlesTrack_)},i.fillBuffer_=function(){var e=this,t=this.chooseNextRequest_();if(t){if(null===this.syncController_.timestampOffsetForTimeline(t.timeline))return this.syncController_.one("timestampoffset",(function(){e.state="READY",e.paused()||e.monitorBuffer_()})),void(this.state="WAITING_ON_TIMELINE");this.loadSegment_(t)}},i.timestampOffsetForSegment_=function(){return null},i.chooseNextRequest_=function(){return this.skipEmptySegments_(e.prototype.chooseNextRequest_.call(this))},i.skipEmptySegments_=function(e){for(;e&&e.segment.empty;){if(e.mediaIndex+1>=e.playlist.segments.length){e=null;break}e=this.generateSegmentInfo_({playlist:e.playlist,mediaIndex:e.mediaIndex+1,startOfSegment:e.startOfSegment+e.duration,isSyncRequest:e.isSyncRequest})}return e},i.stopForError=function(e){this.error(e),this.state="READY",this.pause(),this.trigger("error")},i.segmentRequestFinished_=function(e,t,i){var n=this;if(this.subtitlesTrack_){if(this.saveTransferStats_(t.stats),!this.pendingSegment_)return this.state="READY",void(this.mediaRequestsAborted+=1);if(e)return e.code===pc&&this.handleTimeout_(),e.code===fc?this.mediaRequestsAborted+=1:this.mediaRequestsErrored+=1,void this.stopForError(e);var r=this.pendingSegment_;this.saveBandwidthRelatedStats_(r.duration,t.stats),this.state="APPENDING",this.trigger("appending");var a=r.segment;if(a.map&&(a.map.bytes=t.map.bytes),r.bytes=t.bytes,"function"!=typeof window.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var s,o=function(){n.subtitlesTrack_.tech_.off("vttjsloaded",s),n.stopForError({message:"Error loading vtt.js"})};return s=function(){n.subtitlesTrack_.tech_.off("vttjserror",o),n.segmentRequestFinished_(e,t,i)},this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",s),void this.subtitlesTrack_.tech_.one("vttjserror",o)}a.requested=!0;try{this.parseVTTCues_(r)}catch(e){return void this.stopForError({message:e.message})}if(this.updateTimeMapping_(r,this.syncController_.timelines[r.timeline],this.playlist_),r.cues.length?r.timingInfo={start:r.cues[0].startTime,end:r.cues[r.cues.length-1].endTime}:r.timingInfo={start:r.startOfSegment,end:r.startOfSegment+r.duration},r.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");r.byteLength=r.bytes.byteLength,this.mediaSecondsLoaded+=a.duration,r.cues.forEach((function(e){n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_?new window.VTTCue(e.startTime,e.endTime,e.text):e)})),function(e){var t=e.cues;if(t)for(var i=0;i<t.length;i++){for(var n=[],r=0,a=0;a<t.length;a++)t[i].startTime===t[a].startTime&&t[i].endTime===t[a].endTime&&t[i].text===t[a].text&&++r>1&&n.push(t[a]);n.length&&n.forEach((function(t){return e.removeCue(t)}))}}(this.subtitlesTrack_),this.handleAppendsDone_()}else this.state="READY"},i.handleData_=function(){},i.updateTimingInfoEnd_=function(){},i.parseVTTCues_=function(e){var t,i=!1;"function"==typeof window.TextDecoder?t=new window.TextDecoder("utf8"):(t=window.WebVTT.StringDecoder(),i=!0);var n=new window.WebVTT.Parser(window,window.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},n.oncue=e.cues.push.bind(e.cues),n.ontimestampmap=function(t){e.timestampmap=t},n.onparsingerror=function(e){ua.log.warn("Error encountered when parsing cues: "+e.message)},e.segment.map){var r=e.segment.map.bytes;i&&(r=ud(r)),n.parse(r)}var a=e.bytes;i&&(a=ud(a)),n.parse(a),n.flush()},i.updateTimeMapping_=function(e,t,i){var n=e.segment;if(t)if(e.cues.length){var r=e.timestampmap,a=r.MPEGTS/Wu-r.LOCAL+t.mapping;if(e.cues.forEach((function(e){e.startTime+=a,e.endTime+=a})),!i.syncInfo){var s=e.cues[0].startTime,o=e.cues[e.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+e.mediaIndex,time:Math.min(s,o-n.duration)}}}else n.empty=!0},t}(qc),dd=function(e,t){for(var i=e.cues,n=0;n<i.length;n++){var r=i[n];if(t>=r.adStartTime&&t<=r.adEndTime)return r}return null},hd=[{name:"VOD",run:function(e,t,i,n,r){return i!==1/0?{time:0,segmentIndex:0,partIndex:null}:null}},{name:"ProgramDateTime",run:function(e,t,i,n,r){if(!Object.keys(e.timelineToDatetimeMappings).length)return null;var a=null,s=null,o=al(t);r=r||0;for(var u=0;u<o.length;u++){var l=o[t.endList||0===r?u:o.length-(u+1)],c=l.segment,d=e.timelineToDatetimeMappings[c.timeline];if(d&&c.dateTimeObject){var h=c.dateTimeObject.getTime()/1e3+d;if(c.parts&&"number"==typeof l.partIndex)for(var p=0;p<l.partIndex;p++)h+=c.parts[p].duration;var f=Math.abs(r-h);if(null!==s&&(0===f||s<f))break;s=f,a={time:h,segmentIndex:l.segmentIndex,partIndex:l.partIndex}}}return a}},{name:"Segment",run:function(e,t,i,n,r){var a=null,s=null;r=r||0;for(var o=al(t),u=0;u<o.length;u++){var l=o[t.endList||0===r?u:o.length-(u+1)],c=l.segment,d=l.part&&l.part.start||c&&c.start;if(c.timeline===n&&void 0!==d){var h=Math.abs(r-d);if(null!==s&&s<h)break;(!a||null===s||s>=h)&&(s=h,a={time:d,segmentIndex:l.segmentIndex,partIndex:l.partIndex})}}return a}},{name:"Discontinuity",run:function(e,t,i,n,r){var a=null;if(r=r||0,t.discontinuityStarts&&t.discontinuityStarts.length)for(var s=null,o=0;o<t.discontinuityStarts.length;o++){var u=t.discontinuityStarts[o],l=t.discontinuitySequence+o+1,c=e.discontinuities[l];if(c){var d=Math.abs(r-c.time);if(null!==s&&s<d)break;(!a||null===s||s>=d)&&(s=d,a={time:c.time,segmentIndex:u,partIndex:null})}}return a}},{name:"Playlist",run:function(e,t,i,n,r){return t.syncInfo?{time:t.syncInfo.time,segmentIndex:t.syncInfo.mediaSequence-t.mediaSequence,partIndex:null}:null}}],pd=function(e){function t(t){var i;return(i=e.call(this)||this).timelines=[],i.discontinuities=[],i.timelineToDatetimeMappings={},i.logger_=Xu("SyncController"),i}bt(t,e);var i=t.prototype;return i.getSyncPoint=function(e,t,i,n){var r=this.runStrategies_(e,t,i,n);return r.length?this.selectSyncPoint_(r,{key:"time",value:n}):null},i.getExpiredTime=function(e,t){if(!e||!e.segments)return null;var i=this.runStrategies_(e,t,e.discontinuitySequence,0);if(!i.length)return null;var n=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return n.segmentIndex>0&&(n.time*=-1),Math.abs(n.time+dl({defaultDuration:e.targetDuration,durationList:e.segments,startIndex:n.segmentIndex,endIndex:0}))},i.runStrategies_=function(e,t,i,n){for(var r=[],a=0;a<hd.length;a++){var s=hd[a],o=s.run(this,e,t,i,n);o&&(o.strategy=s.name,r.push({strategy:s.name,syncPoint:o}))}return r},i.selectSyncPoint_=function(e,t){for(var i=e[0].syncPoint,n=Math.abs(e[0].syncPoint[t.key]-t.value),r=e[0].strategy,a=1;a<e.length;a++){var s=Math.abs(e[a].syncPoint[t.key]-t.value);s<n&&(n=s,i=e[a].syncPoint,r=e[a].strategy)}return this.logger_("syncPoint for ["+t.key+": "+t.value+"] chosen with strategy ["+r+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+("number"==typeof i.partIndex?",partIndex:"+i.partIndex:"")+"]"),i},i.saveExpiredSegmentInfo=function(e,t){var i=t.mediaSequence-e.mediaSequence;if(i>86400)ua.log.warn("Not saving expired segment info. Media sequence gap "+i+" is too large.");else for(var n=i-1;n>=0;n--){var r=e.segments[n];if(r&&void 0!==r.start){t.syncInfo={mediaSequence:e.mediaSequence+n,time:r.start},this.logger_("playlist refresh sync: [time:"+t.syncInfo.time+", mediaSequence: "+t.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.setDateTimeMappingForStart=function(e){if(this.timelineToDatetimeMappings={},e.segments&&e.segments.length&&e.segments[0].dateTimeObject){var t=e.segments[0],i=t.dateTimeObject.getTime()/1e3;this.timelineToDatetimeMappings[t.timeline]=-i}},i.saveSegmentTimingInfo=function(e){var t=e.segmentInfo,i=e.shouldSaveTimelineMapping,n=this.calculateSegmentTimeMapping_(t,t.timingInfo,i),r=t.segment;n&&(this.saveDiscontinuitySyncInfo_(t),t.playlist.syncInfo||(t.playlist.syncInfo={mediaSequence:t.playlist.mediaSequence+t.mediaIndex,time:r.start}));var a=r.dateTimeObject;r.discontinuity&&i&&a&&(this.timelineToDatetimeMappings[r.timeline]=-a.getTime()/1e3)},i.timestampOffsetForTimeline=function(e){return void 0===this.timelines[e]?null:this.timelines[e].time},i.mappingForTimeline=function(e){return void 0===this.timelines[e]?null:this.timelines[e].mapping},i.calculateSegmentTimeMapping_=function(e,t,i){var n,r,a=e.segment,s=e.part,o=this.timelines[e.timeline];if("number"==typeof e.timestampOffset)o={time:e.startOfSegment,mapping:e.startOfSegment-t.start},i&&(this.timelines[e.timeline]=o,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+e.timeline+": [time: "+o.time+"] [mapping: "+o.mapping+"]")),n=e.startOfSegment,r=t.end+o.mapping;else{if(!o)return!1;n=t.start+o.mapping,r=t.end+o.mapping}return s&&(s.start=n,s.end=r),(!a.start||n<a.start)&&(a.start=n),a.end=r,!0},i.saveDiscontinuitySyncInfo_=function(e){var t=e.playlist,i=e.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(t.discontinuityStarts&&t.discontinuityStarts.length)for(var n=0;n<t.discontinuityStarts.length;n++){var r=t.discontinuityStarts[n],a=t.discontinuitySequence+n+1,s=r-e.mediaIndex,o=Math.abs(s);if(!this.discontinuities[a]||this.discontinuities[a].accuracy>o){var u;u=s<0?i.start-dl({defaultDuration:t.targetDuration,durationList:t.segments,startIndex:e.mediaIndex,endIndex:r}):i.end+dl({defaultDuration:t.targetDuration,durationList:t.segments,startIndex:e.mediaIndex+1,endIndex:r}),this.discontinuities[a]={time:u,accuracy:o}}}},i.dispose=function(){this.trigger("dispose"),this.off()},t}(ua.EventTarget),fd=function(e){function t(){var t;return(t=e.call(this)||this).pendingTimelineChanges_={},t.lastTimelineChanges_={},t}bt(t,e);var i=t.prototype;return i.clearPendingTimelineChange=function(e){this.pendingTimelineChanges_[e]=null,this.trigger("pendingtimelinechange")},i.pendingTimelineChange=function(e){var t=e.type,i=e.from,n=e.to;return"number"==typeof i&&"number"==typeof n&&(this.pendingTimelineChanges_[t]={type:t,from:i,to:n},this.trigger("pendingtimelinechange")),this.pendingTimelineChanges_[t]},i.lastTimelineChange=function(e){var t=e.type,i=e.from,n=e.to;return"number"==typeof i&&"number"==typeof n&&(this.lastTimelineChanges_[t]={type:t,from:i,to:n},delete this.pendingTimelineChanges_[t],this.trigger("timelinechange")),this.lastTimelineChanges_[t]},i.dispose=function(){this.trigger("dispose"),this.pendingTimelineChanges_={},this.lastTimelineChanges_={},this.off()},t}(ua.EventTarget),md=rc(ac(sc((function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&i.path)}},i.exports),i.exports}var i=t((function(e){function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0})),n=t((function(e){function t(i,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(i,n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0})),r=t((function(e){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0})),a=function(){function e(){this.listeners={}}var t=e.prototype;return t.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},t.off=function(e,t){if(!this.listeners[e])return!1;var i=this.listeners[e].indexOf(t);return this.listeners[e]=this.listeners[e].slice(0),this.listeners[e].splice(i,1),i>-1},t.trigger=function(e){var t=this.listeners[e];if(t)if(2===arguments.length)for(var i=t.length,n=0;n<i;++n)t[n].call(this,arguments[1]);else for(var r=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,r)},t.dispose=function(){this.listeners={}},t.pipe=function(e){this.on("data",(function(t){e.push(t)}))},e}(),s=null,o=function(){function e(e){var t,i,n;s||(s=function(){var e,t,i,n,r,a,s,o,u=[[[],[],[],[],[]],[[],[],[],[],[]]],l=u[0],c=u[1],d=l[4],h=c[4],p=[],f=[];for(e=0;e<256;e++)f[(p[e]=e<<1^283*(e>>7))^e]=e;for(t=i=0;!d[t];t^=n||1,i=f[i]||1)for(a=(a=i^i<<1^i<<2^i<<3^i<<4)>>8^255&a^99,d[t]=a,h[a]=t,o=16843009*p[r=p[n=p[t]]]^65537*r^257*n^16843008*t,s=257*p[a]^16843008*a,e=0;e<4;e++)l[e][t]=s=s<<24^s>>>8,c[e][a]=o=o<<24^o>>>8;for(e=0;e<5;e++)l[e]=l[e].slice(0),c[e]=c[e].slice(0);return u}()),this._tables=[[s[0][0].slice(),s[0][1].slice(),s[0][2].slice(),s[0][3].slice(),s[0][4].slice()],[s[1][0].slice(),s[1][1].slice(),s[1][2].slice(),s[1][3].slice(),s[1][4].slice()]];var r=this._tables[0][4],a=this._tables[1],o=e.length,u=1;if(4!==o&&6!==o&&8!==o)throw new Error("Invalid aes key size");var l=e.slice(0),c=[];for(this._key=[l,c],t=o;t<4*o+28;t++)n=l[t-1],(t%o==0||8===o&&t%o==4)&&(n=r[n>>>24]<<24^r[n>>16&255]<<16^r[n>>8&255]<<8^r[255&n],t%o==0&&(n=n<<8^n>>>24^u<<24,u=u<<1^283*(u>>7))),l[t]=l[t-o]^n;for(i=0;t;i++,t--)n=l[3&i?t:t-4],c[i]=t<=4||i<4?n:a[0][r[n>>>24]]^a[1][r[n>>16&255]]^a[2][r[n>>8&255]]^a[3][r[255&n]]}return e.prototype.decrypt=function(e,t,i,n,r,a){var s,o,u,l,c=this._key[1],d=e^c[0],h=n^c[1],p=i^c[2],f=t^c[3],m=c.length/4-2,g=4,v=this._tables[1],y=v[0],_=v[1],b=v[2],T=v[3],w=v[4];for(l=0;l<m;l++)s=y[d>>>24]^_[h>>16&255]^b[p>>8&255]^T[255&f]^c[g],o=y[h>>>24]^_[p>>16&255]^b[f>>8&255]^T[255&d]^c[g+1],u=y[p>>>24]^_[f>>16&255]^b[d>>8&255]^T[255&h]^c[g+2],f=y[f>>>24]^_[d>>16&255]^b[h>>8&255]^T[255&p]^c[g+3],g+=4,d=s,h=o,p=u;for(l=0;l<4;l++)r[(3&-l)+a]=w[d>>>24]<<24^w[h>>16&255]<<16^w[p>>8&255]<<8^w[255&f]^c[g++],s=d,d=h,h=p,p=f,f=s},e}(),u=function(e){function t(){var t;return(t=e.call(this,a)||this).jobs=[],t.delay=1,t.timeout_=null,t}r(t,e);var i=t.prototype;return i.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.push=function(e){this.jobs.push(e),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},t}(a),l=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},c=function(){function e(t,i,n,r){var a=e.STEP,s=new Int32Array(t.buffer),o=new Uint8Array(t.byteLength),c=0;for(this.asyncStream_=new u,this.asyncStream_.push(this.decryptChunk_(s.subarray(c,c+a),i,n,o)),c=a;c<s.length;c+=a)n=new Uint32Array([l(s[c-4]),l(s[c-3]),l(s[c-2]),l(s[c-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(c,c+a),i,n,o));this.asyncStream_.push((function(){var e;r(null,(e=o).subarray(0,e.byteLength-e[e.byteLength-1]))}))}return e.prototype.decryptChunk_=function(e,t,i,n){return function(){var r=function(e,t,i){var n,r,a,s,u,c,d,h,p,f=new Int32Array(e.buffer,e.byteOffset,e.byteLength>>2),m=new o(Array.prototype.slice.call(t)),g=new Uint8Array(e.byteLength),v=new Int32Array(g.buffer);for(n=i[0],r=i[1],a=i[2],s=i[3],p=0;p<f.length;p+=4)u=l(f[p]),c=l(f[p+1]),d=l(f[p+2]),h=l(f[p+3]),m.decrypt(u,c,d,h,v,p),v[p]=l(v[p]^n),v[p+1]=l(v[p+1]^r),v[p+2]=l(v[p+2]^a),v[p+3]=l(v[p+3]^s),n=u,r=c,a=d,s=h;return g}(e,t,i);n.set(r,e.byteOffset)}},i(e,null,[{key:"STEP",get:function(){return 32e3}}]),e}(),d=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).BigInt||Number;d("0x1"),d("0x100"),d("0x10000"),d("0x1000000"),d("0x100000000"),d("0x10000000000"),d("0x1000000000000"),d("0x100000000000000"),d("0x10000000000000000");self.onmessage=function(e){var t=e.data,i=new Uint8Array(t.encrypted.bytes,t.encrypted.byteOffset,t.encrypted.byteLength),n=new Uint32Array(t.key.bytes,t.key.byteOffset,t.key.byteLength/4),r=new Uint32Array(t.iv.bytes,t.iv.byteOffset,t.iv.byteLength/4);new c(i,n,r,(function(e,i){var n,r;self.postMessage((n={source:t.source,decrypted:i},r={},Object.keys(n).forEach((function(e){var t,i=n[e];t=i,("function"===ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer)?r[e]={bytes:i.buffer,byteOffset:i.byteOffset,byteLength:i.byteLength}:r[e]=i})),r),[i.buffer])}))}})))),gd=function(e){var t=e.default?"main":"alternative";return e.characteristics&&e.characteristics.indexOf("public.accessibility.describes-video")>=0&&(t="main-desc"),t},vd=function(e,t){e.abort(),e.pause(),t&&t.activePlaylistLoader&&(t.activePlaylistLoader.pause(),t.activePlaylistLoader=null)},yd=function(e,t){t.activePlaylistLoader=e,e.load()},_d={AUDIO:function(e,t){return function(){var i=t.segmentLoaders[e],n=t.mediaTypes[e],r=t.blacklistCurrentPlaylist;vd(i,n);var a=n.activeTrack(),s=n.activeGroup(),o=(s.filter((function(e){return e.default}))[0]||s[0]).id,u=n.tracks[o];if(a!==u){for(var l in ua.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),n.tracks)n.tracks[l].enabled=n.tracks[l]===u;n.onTrackChanged()}else r({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(e,t){return function(){var i=t.segmentLoaders[e],n=t.mediaTypes[e];ua.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),vd(i,n);var r=n.activeTrack();r&&(r.mode="disabled"),n.onTrackChanged()}}},bd={AUDIO:function(e,t,i){if(t){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[e];t.on("loadedmetadata",(function(){var e=t.media();a.playlist(e,r),(!n.paused()||e.endList&&"none"!==n.preload())&&a.load()})),t.on("loadedplaylist",(function(){a.playlist(t.media(),r),n.paused()||a.load()})),t.on("error",_d[e](e,i))}},SUBTITLES:function(e,t,i){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[e],s=i.mediaTypes[e];t.on("loadedmetadata",(function(){var e=t.media();a.playlist(e,r),a.track(s.activeTrack()),(!n.paused()||e.endList&&"none"!==n.preload())&&a.load()})),t.on("loadedplaylist",(function(){a.playlist(t.media(),r),n.paused()||a.load()})),t.on("error",_d[e](e,i))}},Td={AUDIO:function(e,t){var i=t.vhs,n=t.sourceType,r=t.segmentLoaders[e],a=t.requestOptions,s=t.master.mediaGroups,o=t.mediaTypes[e],u=o.groups,l=o.tracks,c=o.logger_,d=t.masterPlaylistLoader,h=bl(d.master);for(var p in s[e]&&0!==Object.keys(s[e]).length||(s[e]={main:{default:{default:!0}}},h&&(s[e].main.default.playlists=d.master.playlists)),s[e])for(var f in u[p]||(u[p]=[]),s[e][p]){var m=s[e][p][f],g=void 0;if(h?(c("AUDIO group '"+p+"' label '"+f+"' is a master playlist"),m.isMasterPlaylist=!0,g=null):g="vhs-json"===n&&m.playlists?new Rl(m.playlists[0],i,a):m.resolvedUri?new Rl(m.resolvedUri,i,a):m.playlists&&"dash"===n?new tc(m.playlists[0],i,a,d):null,m=ua.mergeOptions({id:f,playlistLoader:g},m),bd[e](e,m.playlistLoader,t),u[p].push(m),void 0===l[f]){var v=new ua.AudioTrack({id:f,kind:gd(m),enabled:!1,language:m.language,default:m.default,label:f});l[f]=v}}r.on("error",_d[e](e,t))},SUBTITLES:function(e,t){var i=t.tech,n=t.vhs,r=t.sourceType,a=t.segmentLoaders[e],s=t.requestOptions,o=t.master.mediaGroups,u=t.mediaTypes[e],l=u.groups,c=u.tracks,d=t.masterPlaylistLoader;for(var h in o[e])for(var p in l[h]||(l[h]=[]),o[e][h])if(!o[e][h][p].forced){var f=o[e][h][p],m=void 0;if("hls"===r)m=new Rl(f.resolvedUri,n,s);else if("dash"===r){if(!f.playlists.filter((function(e){return e.excludeUntil!==1/0})).length)return;m=new tc(f.playlists[0],n,s,d)}else"vhs-json"===r&&(m=new Rl(f.playlists?f.playlists[0]:f.resolvedUri,n,s));if(f=ua.mergeOptions({id:p,playlistLoader:m},f),bd[e](e,f.playlistLoader,t),l[h].push(f),void 0===c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",default:f.default&&f.autoselect,language:f.language,label:p},!1).track;c[p]=g}}a.on("error",_d[e](e,t))},"CLOSED-CAPTIONS":function(e,t){var i=t.tech,n=t.master.mediaGroups,r=t.mediaTypes[e],a=r.groups,s=r.tracks;for(var o in n[e])for(var u in a[o]||(a[o]=[]),n[e][o]){var l=n[e][o][u];if(/^(?:CC|SERVICE)/.test(l.instreamId)){var c=i.options_.vhs&&i.options_.vhs.captionServices||{},d={label:u,language:l.language,instreamId:l.instreamId,default:l.default&&l.autoselect};if(c[d.instreamId]&&(d=ua.mergeOptions(d,c[d.instreamId])),void 0===d.default&&delete d.default,a[o].push(ua.mergeOptions({id:u},l)),void 0===s[u]){var h=i.addRemoteTextTrack({id:d.instreamId,kind:"captions",default:d.default,language:d.language,label:d.label},!1).track;s[u]=h}}}}},wd=function e(t,i){for(var n=0;n<t.length;n++){if(yl(i,t[n]))return!0;if(t[n].playlists&&e(t[n].playlists,i))return!0}return!1},Sd={AUDIO:function(e,t){return function(){var i=t.mediaTypes[e].tracks;for(var n in i)if(i[n].enabled)return i[n];return null}},SUBTITLES:function(e,t){return function(){var i=t.mediaTypes[e].tracks;for(var n in i)if("showing"===i[n].mode||"hidden"===i[n].mode)return i[n];return null}}},Ed=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred","mediaAppends"],kd=function(e){return this.audioSegmentLoader_[e]+this.mainSegmentLoader_[e]},Cd=function(e){function t(t){var i;i=e.call(this)||this;var n=t.src,r=t.handleManifestRedirects,a=t.withCredentials,s=t.tech,o=t.bandwidth,u=t.externVhs,l=t.useCueTags,c=t.blacklistDuration,d=t.enableLowInitialPlaylist,h=t.sourceType,p=t.cacheEncryptionKeys,f=t.experimentalBufferBasedABR,m=t.experimentalLeastPixelDiffSelector,g=t.captionServices;if(!n)throw new Error("A non-empty playlist URL or JSON manifest string is required");var v=t.maxPlaylistRetries;null==v&&(v=1/0),Wc=u,i.experimentalBufferBasedABR=Boolean(f),i.experimentalLeastPixelDiffSelector=Boolean(m),i.withCredentials=a,i.tech_=s,i.vhs_=s.vhs,i.sourceType_=h,i.useCueTags_=l,i.blacklistDuration=c,i.maxPlaylistRetries=v,i.enableLowInitialPlaylist=d,i.useCueTags_&&(i.cueTagsTrack_=i.tech_.addTextTrack("metadata","ad-cues"),i.cueTagsTrack_.inBandMetadataTrackDispatchType=""),i.requestOptions_={withCredentials:a,handleManifestRedirects:r,maxPlaylistRetries:v,timeout:null},i.on("error",i.pauseLoading),i.mediaTypes_=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach((function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:Vc,activeTrack:Vc,getActiveGroup:Vc,onGroupChanged:Vc,onTrackChanged:Vc,lastTrack_:null,logger_:Xu("MediaGroups["+t+"]")}})),e}(),i.mediaSource=new window.MediaSource,i.handleDurationChange_=i.handleDurationChange_.bind(_t(i)),i.handleSourceOpen_=i.handleSourceOpen_.bind(_t(i)),i.handleSourceEnded_=i.handleSourceEnded_.bind(_t(i)),i.mediaSource.addEventListener("durationchange",i.handleDurationChange_),i.mediaSource.addEventListener("sourceopen",i.handleSourceOpen_),i.mediaSource.addEventListener("sourceended",i.handleSourceEnded_),i.seekable_=ua.createTimeRanges(),i.hasPlayed_=!1,i.syncController_=new pd(t),i.segmentMetadataTrack_=s.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,i.decrypter_=new md,i.sourceUpdater_=new od(i.mediaSource),i.inbandTextTracks_={},i.timelineChangeController_=new fd;var y={vhs:i.vhs_,parse708captions:t.parse708captions,useDtsForTimestampOffset:t.useDtsForTimestampOffset,captionServices:g,mediaSource:i.mediaSource,currentTime:i.tech_.currentTime.bind(i.tech_),seekable:function(){return i.seekable()},seeking:function(){return i.tech_.seeking()},duration:function(){return i.duration()},hasPlayed:function(){return i.hasPlayed_},goalBufferLength:function(){return i.goalBufferLength()},bandwidth:o,syncController:i.syncController_,decrypter:i.decrypter_,sourceType:i.sourceType_,inbandTextTracks:i.inbandTextTracks_,cacheEncryptionKeys:p,sourceUpdater:i.sourceUpdater_,timelineChangeController:i.timelineChangeController_,experimentalExactManifestTimings:t.experimentalExactManifestTimings};i.masterPlaylistLoader_="dash"===i.sourceType_?new tc(n,i.vhs_,i.requestOptions_):new Rl(n,i.vhs_,i.requestOptions_),i.setupMasterPlaylistLoaderListeners_(),i.mainSegmentLoader_=new qc(ua.mergeOptions(y,{segmentMetadataTrack:i.segmentMetadataTrack_,loaderType:"main"}),t),i.audioSegmentLoader_=new qc(ua.mergeOptions(y,{loaderType:"audio"}),t),i.subtitleSegmentLoader_=new cd(ua.mergeOptions(y,{loaderType:"vtt",featuresNativeTextTracks:i.tech_.featuresNativeTextTracks}),t),i.setupSegmentLoaderListeners_(),i.experimentalBufferBasedABR&&(i.masterPlaylistLoader_.one("loadedplaylist",(function(){return i.startABRTimer_()})),i.tech_.on("pause",(function(){return i.stopABRTimer_()})),i.tech_.on("play",(function(){return i.startABRTimer_()}))),Ed.forEach((function(e){i[e+"_"]=kd.bind(_t(i),e)})),i.logger_=Xu("MPC"),i.triggeredFmp4Usage=!1,"none"===i.tech_.preload()?(i.loadOnPlay_=function(){i.loadOnPlay_=null,i.masterPlaylistLoader_.load()},i.tech_.one("play",i.loadOnPlay_)):i.masterPlaylistLoader_.load(),i.timeToLoadedData__=-1,i.mainAppendsToLoadedData__=-1,i.audioAppendsToLoadedData__=-1;var _="none"===i.tech_.preload()?"play":"loadstart";return i.tech_.one(_,(function(){var e=Date.now();i.tech_.one("loadeddata",(function(){i.timeToLoadedData__=Date.now()-e,i.mainAppendsToLoadedData__=i.mainSegmentLoader_.mediaAppends,i.audioAppendsToLoadedData__=i.audioSegmentLoader_.mediaAppends}))})),i}bt(t,e);var i=t.prototype;return i.mainAppendsToLoadedData_=function(){return this.mainAppendsToLoadedData__},i.audioAppendsToLoadedData_=function(){return this.audioAppendsToLoadedData__},i.appendsToLoadedData_=function(){var e=this.mainAppendsToLoadedData_(),t=this.audioAppendsToLoadedData_();return-1===e||-1===t?-1:e+t},i.timeToLoadedData_=function(){return this.timeToLoadedData__},i.checkABR_=function(){var e=this.selectPlaylist();e&&this.shouldSwitchToMedia_(e)&&this.switchMedia_(e,"abr")},i.switchMedia_=function(e,t,i){var n=this.media(),r=n&&(n.id||n.uri),a=e.id||e.uri;r&&r!==a&&(this.logger_("switch media "+r+" -> "+a+" from "+t),this.tech_.trigger({type:"usage",name:"vhs-rendition-change-"+t})),this.masterPlaylistLoader_.media(e,i)},i.startABRTimer_=function(){var e=this;this.stopABRTimer_(),this.abrTimer_=window.setInterval((function(){return e.checkABR_()}),250)},i.stopABRTimer_=function(){this.tech_.scrubbing&&this.tech_.scrubbing()||(window.clearInterval(this.abrTimer_),this.abrTimer_=null)},i.getAudioTrackPlaylists_=function(){var e=this.master(),t=e&&e.playlists||[];if(!e||!e.mediaGroups||!e.mediaGroups.AUDIO)return t;var i,n=e.mediaGroups.AUDIO,r=Object.keys(n);if(Object.keys(this.mediaTypes_.AUDIO.groups).length)i=this.mediaTypes_.AUDIO.activeTrack();else{var a=n.main||r.length&&n[r[0]];for(var s in a)if(a[s].default){i={label:s};break}}if(!i)return t;var o=[];for(var u in n)if(n[u][i.label]){var l=n[u][i.label];if(l.playlists&&l.playlists.length)o.push.apply(o,l.playlists);else if(l.uri)o.push(l);else if(e.playlists.length)for(var c=0;c<e.playlists.length;c++){var d=e.playlists[c];d.attributes&&d.attributes.AUDIO&&d.attributes.AUDIO===u&&o.push(d)}}return o.length?o:t},i.setupMasterPlaylistLoaderListeners_=function(){var e=this;this.masterPlaylistLoader_.on("loadedmetadata",(function(){var t=e.masterPlaylistLoader_.media(),i=1.5*t.targetDuration*1e3;vl(e.masterPlaylistLoader_.master,e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i,t.endList&&"none"!==e.tech_.preload()&&(e.mainSegmentLoader_.playlist(t,e.requestOptions_),e.mainSegmentLoader_.load()),function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach((function(t){Td[t](t,e)}));var t=e.mediaTypes,i=e.masterPlaylistLoader,n=e.tech,r=e.vhs,a=e.segmentLoaders,s=a.AUDIO,o=a.main;["AUDIO","SUBTITLES"].forEach((function(i){t[i].activeGroup=function(e,t){return function(i){var n=t.masterPlaylistLoader,r=t.mediaTypes[e].groups,a=n.media();if(!a)return null;var s=null;a.attributes[e]&&(s=r[a.attributes[e]]);var o=Object.keys(r);if(!s)if("AUDIO"===e&&o.length>1&&bl(t.master))for(var u=0;u<o.length;u++){var l=r[o[u]];if(wd(l,a)){s=l;break}}else r.main?s=r.main:1===o.length&&(s=r[o[0]]);return void 0===i?s:null!==i&&s&&s.filter((function(e){return e.id===i.id}))[0]||null}}(i,e),t[i].activeTrack=Sd[i](i,e),t[i].onGroupChanged=function(e,t){return function(){var i=t.segmentLoaders,n=i[e],r=i.main,a=t.mediaTypes[e],s=a.activeTrack(),o=a.getActiveGroup(),u=a.activePlaylistLoader,l=a.lastGroup_;o&&l&&o.id===l.id||(a.lastGroup_=o,a.lastTrack_=s,vd(n,a),o&&!o.isMasterPlaylist&&(o.playlistLoader?(n.resyncLoader(),yd(o.playlistLoader,a)):u&&r.resetEverything()))}}(i,e),t[i].onGroupChanging=function(e,t){return function(){var i=t.segmentLoaders[e];t.mediaTypes[e].lastGroup_=null,i.abort(),i.pause()}}(i,e),t[i].onTrackChanged=function(e,t){return function(){var i=t.masterPlaylistLoader,n=t.segmentLoaders,r=n[e],a=n.main,s=t.mediaTypes[e],o=s.activeTrack(),u=s.getActiveGroup(),l=s.activePlaylistLoader,c=s.lastTrack_;if((!c||!o||c.id!==o.id)&&(s.lastGroup_=u,s.lastTrack_=o,vd(r,s),u)){if(u.isMasterPlaylist){if(!o||!c||o.id===c.id)return;var d=t.vhs.masterPlaylistController_,h=d.selectPlaylist();if(d.media()===h)return;return s.logger_("track change. Switching master audio from "+c.id+" to "+o.id),i.pause(),a.resetEverything(),void d.fastQualityChange_(h)}if("AUDIO"===e){if(!u.playlistLoader)return a.setAudio(!0),void a.resetEverything();r.setAudio(!0),a.setAudio(!1)}l!==u.playlistLoader?(r.track&&r.track(o),r.resetEverything(),yd(u.playlistLoader,s)):yd(u.playlistLoader,s)}}}(i,e),t[i].getActiveGroup=function(e,t){var i=t.mediaTypes;return function(){var t=i[e].activeTrack();return t?i[e].activeGroup(t):null}}(i,e)}));var u=t.AUDIO.activeGroup();if(u){var l=(u.filter((function(e){return e.default}))[0]||u[0]).id;t.AUDIO.tracks[l].enabled=!0,t.AUDIO.onGroupChanged(),t.AUDIO.onTrackChanged(),t.AUDIO.getActiveGroup().playlistLoader?(o.setAudio(!1),s.setAudio(!0)):o.setAudio(!0)}i.on("mediachange",(function(){["AUDIO","SUBTITLES"].forEach((function(e){return t[e].onGroupChanged()}))})),i.on("mediachanging",(function(){["AUDIO","SUBTITLES"].forEach((function(e){return t[e].onGroupChanging()}))}));var c=function(){t.AUDIO.onTrackChanged(),n.trigger({type:"usage",name:"vhs-audio-change"}),n.trigger({type:"usage",name:"hls-audio-change"})};for(var d in n.audioTracks().addEventListener("change",c),n.remoteTextTracks().addEventListener("change",t.SUBTITLES.onTrackChanged),r.on("dispose",(function(){n.audioTracks().removeEventListener("change",c),n.remoteTextTracks().removeEventListener("change",t.SUBTITLES.onTrackChanged)})),n.clearTracks("audio"),t.AUDIO.tracks)n.audioTracks().addTrack(t.AUDIO.tracks[d])}({sourceType:e.sourceType_,segmentLoaders:{AUDIO:e.audioSegmentLoader_,SUBTITLES:e.subtitleSegmentLoader_,main:e.mainSegmentLoader_},tech:e.tech_,requestOptions:e.requestOptions_,masterPlaylistLoader:e.masterPlaylistLoader_,vhs:e.vhs_,master:e.master(),mediaTypes:e.mediaTypes_,blacklistCurrentPlaylist:e.blacklistCurrentPlaylist.bind(e)}),e.triggerPresenceUsage_(e.master(),t),e.setupFirstPlay(),!e.mediaTypes_.AUDIO.activePlaylistLoader||e.mediaTypes_.AUDIO.activePlaylistLoader.media()?e.trigger("selectedinitialmedia"):e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata",(function(){e.trigger("selectedinitialmedia")}))})),this.masterPlaylistLoader_.on("loadedplaylist",(function(){e.loadOnPlay_&&e.tech_.off("play",e.loadOnPlay_);var t=e.masterPlaylistLoader_.media();if(!t){var i;if(e.excludeUnsupportedVariants_(),e.enableLowInitialPlaylist&&(i=e.selectInitialPlaylist()),i||(i=e.selectPlaylist()),!i||!e.shouldSwitchToMedia_(i))return;if(e.initialMedia_=i,e.switchMedia_(e.initialMedia_,"initial"),"vhs-json"!==e.sourceType_||!e.initialMedia_.segments)return;t=e.initialMedia_}e.handleUpdatedMediaPlaylist(t)})),this.masterPlaylistLoader_.on("error",(function(){e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)})),this.masterPlaylistLoader_.on("mediachanging",(function(){e.mainSegmentLoader_.abort(),e.mainSegmentLoader_.pause()})),this.masterPlaylistLoader_.on("mediachange",(function(){var t=e.masterPlaylistLoader_.media(),i=1.5*t.targetDuration*1e3;vl(e.masterPlaylistLoader_.master,e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i,e.mainSegmentLoader_.playlist(t,e.requestOptions_),e.mainSegmentLoader_.load(),e.tech_.trigger({type:"mediachange",bubbles:!0})})),this.masterPlaylistLoader_.on("playlistunchanged",(function(){var t=e.masterPlaylistLoader_.media();"playlist-unchanged"!==t.lastExcludeReason_&&e.stuckAtPlaylistEnd_(t)&&(e.blacklistCurrentPlaylist({message:"Playlist no longer updating.",reason:"playlist-unchanged"}),e.tech_.trigger("playliststuck"))})),this.masterPlaylistLoader_.on("renditiondisabled",(function(){e.tech_.trigger({type:"usage",name:"vhs-rendition-disabled"}),e.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})})),this.masterPlaylistLoader_.on("renditionenabled",(function(){e.tech_.trigger({type:"usage",name:"vhs-rendition-enabled"}),e.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})}))},i.handleUpdatedMediaPlaylist=function(e){this.useCueTags_&&this.updateAdCues_(e),this.mainSegmentLoader_.playlist(e,this.requestOptions_),this.updateDuration(!e.endList),this.tech_.paused()||(this.mainSegmentLoader_.load(),this.audioSegmentLoader_&&this.audioSegmentLoader_.load())},i.triggerPresenceUsage_=function(e,t){var i=e.mediaGroups||{},n=!0,r=Object.keys(i.AUDIO);for(var a in i.AUDIO)for(var s in i.AUDIO[a])i.AUDIO[a][s].uri||(n=!1);n&&(this.tech_.trigger({type:"usage",name:"vhs-demuxed"}),this.tech_.trigger({type:"usage",name:"hls-demuxed"})),Object.keys(i.SUBTITLES).length&&(this.tech_.trigger({type:"usage",name:"vhs-webvtt"}),this.tech_.trigger({type:"usage",name:"hls-webvtt"})),Wc.Playlist.isAes(t)&&(this.tech_.trigger({type:"usage",name:"vhs-aes"}),this.tech_.trigger({type:"usage",name:"hls-aes"})),r.length&&Object.keys(i.AUDIO[r[0]]).length>1&&(this.tech_.trigger({type:"usage",name:"vhs-alternate-audio"}),this.tech_.trigger({type:"usage",name:"hls-alternate-audio"})),this.useCueTags_&&(this.tech_.trigger({type:"usage",name:"vhs-playlist-cue-tags"}),this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"}))},i.shouldSwitchToMedia_=function(e){var t=this.masterPlaylistLoader_.media()||this.masterPlaylistLoader_.pendingMedia_,i=this.tech_.currentTime(),n=this.bufferLowWaterLine(),r=this.bufferHighWaterLine();return function(e){var t=e.currentPlaylist,i=e.buffered,n=e.currentTime,r=e.nextPlaylist,a=e.bufferLowWaterLine,s=e.bufferHighWaterLine,o=e.duration,u=e.experimentalBufferBasedABR,l=e.log;if(!r)return ua.log.warn("We received no playlist to switch to. Please check your stream."),!1;var c="allowing switch "+(t&&t.id||"null")+" -> "+r.id;if(!t)return l(c+" as current playlist is not set"),!0;if(r.id===t.id)return!1;var d=Boolean($u(i,n).length);if(!t.endList)return d||"number"!=typeof t.partTargetDuration?(l(c+" as current playlist is live"),!0):(l("not "+c+" as current playlist is live llhls, but currentTime isn't in buffered."),!1);var h=il(i,n),p=u?ic.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:ic.MAX_BUFFER_LOW_WATER_LINE;if(o<p)return l(c+" as duration < max low water line ("+o+" < "+p+")"),!0;var f=r.attributes.BANDWIDTH,m=t.attributes.BANDWIDTH;if(f<m&&(!u||h<s)){var g=c+" as next bandwidth < current bandwidth ("+f+" < "+m+")";return u&&(g+=" and forwardBuffer < bufferHighWaterLine ("+h+" < "+s+")"),l(g),!0}if((!u||f>m)&&h>=a){var v=c+" as forwardBuffer >= bufferLowWaterLine ("+h+" >= "+a+")";return u&&(v+=" and next bandwidth > current bandwidth ("+f+" > "+m+")"),l(v),!0}return l("not "+c+" as no switching criteria met"),!1}({buffered:this.tech_.buffered(),currentTime:i,currentPlaylist:t,nextPlaylist:e,bufferLowWaterLine:n,bufferHighWaterLine:r,duration:this.duration(),experimentalBufferBasedABR:this.experimentalBufferBasedABR,log:this.logger_})},i.setupSegmentLoaderListeners_=function(){var e=this;this.experimentalBufferBasedABR||(this.mainSegmentLoader_.on("bandwidthupdate",(function(){var t=e.selectPlaylist();e.shouldSwitchToMedia_(t)&&e.switchMedia_(t,"bandwidthupdate"),e.tech_.trigger("bandwidthupdate")})),this.mainSegmentLoader_.on("progress",(function(){e.trigger("progress")}))),this.mainSegmentLoader_.on("error",(function(){e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())})),this.mainSegmentLoader_.on("appenderror",(function(){e.error=e.mainSegmentLoader_.error_,e.trigger("error")})),this.mainSegmentLoader_.on("syncinfoupdate",(function(){e.onSyncInfoUpdate_()})),this.mainSegmentLoader_.on("timestampoffset",(function(){e.tech_.trigger({type:"usage",name:"vhs-timestamp-offset"}),e.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})})),this.audioSegmentLoader_.on("syncinfoupdate",(function(){e.onSyncInfoUpdate_()})),this.audioSegmentLoader_.on("appenderror",(function(){e.error=e.audioSegmentLoader_.error_,e.trigger("error")})),this.mainSegmentLoader_.on("ended",(function(){e.logger_("main segment loader ended"),e.onEndOfStream()})),this.mainSegmentLoader_.on("earlyabort",(function(t){e.experimentalBufferBasedABR||(e.delegateLoaders_("all",["abort"]),e.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120))}));var t=function(){if(!e.sourceUpdater_.hasCreatedSourceBuffers())return e.tryToCreateSourceBuffers_();var t=e.getCodecsOrExclude_();t&&e.sourceUpdater_.addOrChangeSourceBuffers(t)};this.mainSegmentLoader_.on("trackinfo",t),this.audioSegmentLoader_.on("trackinfo",t),this.mainSegmentLoader_.on("fmp4",(function(){e.triggeredFmp4Usage||(e.tech_.trigger({type:"usage",name:"vhs-fmp4"}),e.tech_.trigger({type:"usage",name:"hls-fmp4"}),e.triggeredFmp4Usage=!0)})),this.audioSegmentLoader_.on("fmp4",(function(){e.triggeredFmp4Usage||(e.tech_.trigger({type:"usage",name:"vhs-fmp4"}),e.tech_.trigger({type:"usage",name:"hls-fmp4"}),e.triggeredFmp4Usage=!0)})),this.audioSegmentLoader_.on("ended",(function(){e.logger_("audioSegmentLoader ended"),e.onEndOfStream()}))},i.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},i.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},i.smoothQualityChange_=function(e){void 0===e&&(e=this.selectPlaylist()),this.fastQualityChange_(e)},i.fastQualityChange_=function(e){var t=this;void 0===e&&(e=this.selectPlaylist()),e!==this.masterPlaylistLoader_.media()?(this.switchMedia_(e,"fast-quality"),this.mainSegmentLoader_.resetEverything((function(){ua.browser.IE_VERSION||ua.browser.IS_EDGE?t.tech_.setCurrentTime(t.tech_.currentTime()+.04):t.tech_.setCurrentTime(t.tech_.currentTime())}))):this.logger_("skipping fastQualityChange because new media is same as old")},i.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_&&this.load();var e=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<e.start(0)?this.tech_.setCurrentTime(e.end(e.length-1)):void 0}},i.setupFirstPlay=function(){var e=this,t=this.masterPlaylistLoader_.media();if(!t||this.tech_.paused()||this.hasPlayed_)return!1;if(!t.endList){var i=this.seekable();if(!i.length)return!1;if(ua.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",(function(){e.trigger("firstplay"),e.tech_.setCurrentTime(i.end(0)),e.hasPlayed_=!0})),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=!0,this.load(),!0},i.handleSourceOpen_=function(){if(this.tryToCreateSourceBuffers_(),this.tech_.autoplay()){var e=this.tech_.play();void 0!==e&&"function"==typeof e.then&&e.then(null,(function(e){}))}this.trigger("sourceopen")},i.handleSourceEnded_=function(){if(this.inbandTextTracks_.metadataTrack_){var e=this.inbandTextTracks_.metadataTrack_.cues;if(e&&e.length){var t=this.duration();e[e.length-1].endTime=isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t}}},i.handleDurationChange_=function(){this.tech_.trigger("durationchange")},i.onEndOfStream=function(){var e=this.mainSegmentLoader_.ended_;if(this.mediaTypes_.AUDIO.activePlaylistLoader){var t=this.mainSegmentLoader_.getCurrentMediaInfo_();e=!t||t.hasVideo?e&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_}e&&(this.stopABRTimer_(),this.sourceUpdater_.endOfStream())},i.stuckAtPlaylistEnd_=function(e){if(!this.seekable().length)return!1;var t=this.syncController_.getExpiredTime(e,this.duration());if(null===t)return!1;var i=Wc.Playlist.playlistEnd(e,t),n=this.tech_.currentTime(),r=this.tech_.buffered();if(!r.length)return i-n<=Yu;var a=r.end(r.length-1);return a-n<=Yu&&i-a<=Yu},i.blacklistCurrentPlaylist=function(e,t){void 0===e&&(e={});var i=e.playlist||this.masterPlaylistLoader_.media();if(t=t||e.blacklistDuration||this.blacklistDuration,!i)return this.error=e,void("open"!==this.mediaSource.readyState?this.trigger("error"):this.sourceUpdater_.endOfStream("network"));i.playlistErrors_++;var n,r=this.masterPlaylistLoader_.master.playlists,a=r.filter(ml),s=1===a.length&&a[0]===i;if(1===r.length&&t!==1/0)return ua.log.warn("Problem encountered with playlist "+i.id+". Trying again since it is the only playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(s);if(s){var o=!1;r.forEach((function(e){if(e!==i){var t=e.excludeUntil;void 0!==t&&t!==1/0&&(o=!0,delete e.excludeUntil)}})),o&&(ua.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."),this.tech_.trigger("retryplaylist"))}n=i.playlistErrors_>this.maxPlaylistRetries?1/0:Date.now()+1e3*t,i.excludeUntil=n,e.reason&&(i.lastExcludeReason_=e.reason),this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"vhs-rendition-blacklisted"}),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"});var u=this.selectPlaylist();if(!u)return this.error="Playback cannot continue. No available working or supported playlists.",void this.trigger("error");var l=e.internal?this.logger_:ua.log.warn,c=e.message?" "+e.message:"";l((e.internal?"Internal problem":"Problem")+" encountered with playlist "+i.id+"."+c+" Switching to playlist "+u.id+"."),u.attributes.AUDIO!==i.attributes.AUDIO&&this.delegateLoaders_("audio",["abort","pause"]),u.attributes.SUBTITLES!==i.attributes.SUBTITLES&&this.delegateLoaders_("subtitle",["abort","pause"]),this.delegateLoaders_("main",["abort","pause"]);var d=u.targetDuration/2*1e3||5e3,h="number"==typeof u.lastRequest&&Date.now()-u.lastRequest<=d;return this.switchMedia_(u,"exclude",s||h)},i.pauseLoading=function(){this.delegateLoaders_("all",["abort","pause"]),this.stopABRTimer_()},i.delegateLoaders_=function(e,t){var i=this,n=[],r="all"===e;(r||"main"===e)&&n.push(this.masterPlaylistLoader_);var a=[];(r||"audio"===e)&&a.push("AUDIO"),(r||"subtitle"===e)&&(a.push("CLOSED-CAPTIONS"),a.push("SUBTITLES")),a.forEach((function(e){var t=i.mediaTypes_[e]&&i.mediaTypes_[e].activePlaylistLoader;t&&n.push(t)})),["main","audio","subtitle"].forEach((function(t){var r=i[t+"SegmentLoader_"];!r||e!==t&&"all"!==e||n.push(r)})),n.forEach((function(e){return t.forEach((function(t){"function"==typeof e[t]&&e[t]()}))}))},i.setCurrentTime=function(e){var t=$u(this.tech_.buffered(),e);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?t&&t.length?e:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},i.duration=function(){if(!this.masterPlaylistLoader_)return 0;var e=this.masterPlaylistLoader_.media();return e?e.endList?this.mediaSource?this.mediaSource.duration:Wc.Playlist.duration(e):1/0:0},i.seekable=function(){return this.seekable_},i.onSyncInfoUpdate_=function(){var e;if(this.masterPlaylistLoader_){var t=this.masterPlaylistLoader_.media();if(t){var i=this.syncController_.getExpiredTime(t,this.duration());if(null!==i){var n=this.masterPlaylistLoader_.master,r=Wc.Playlist.seekable(t,i,Wc.Playlist.liveEdgeDelay(n,t));if(0!==r.length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(t=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(i=this.syncController_.getExpiredTime(t,this.duration())))return;if(0===(e=Wc.Playlist.seekable(t,i,Wc.Playlist.liveEdgeDelay(n,t))).length)return}var a,s;this.seekable_&&this.seekable_.length&&(a=this.seekable_.end(0),s=this.seekable_.start(0)),e?e.start(0)>r.end(0)||r.start(0)>e.end(0)?this.seekable_=r:this.seekable_=ua.createTimeRanges([[e.start(0)>r.start(0)?e.start(0):r.start(0),e.end(0)<r.end(0)?e.end(0):r.end(0)]]):this.seekable_=r,this.seekable_&&this.seekable_.length&&this.seekable_.end(0)===a&&this.seekable_.start(0)===s||(this.logger_("seekable updated ["+Zu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged"))}}}}},i.updateDuration=function(e){if(this.updateDuration_&&(this.mediaSource.removeEventListener("sourceopen",this.updateDuration_),this.updateDuration_=null),"open"!==this.mediaSource.readyState)return this.updateDuration_=this.updateDuration.bind(this,e),void this.mediaSource.addEventListener("sourceopen",this.updateDuration_);if(e){var t=this.seekable();if(!t.length)return;(isNaN(this.mediaSource.duration)||this.mediaSource.duration<t.end(t.length-1))&&this.sourceUpdater_.setDuration(t.end(t.length-1))}else{var i=this.tech_.buffered(),n=Wc.Playlist.duration(this.masterPlaylistLoader_.media());i.length>0&&(n=Math.max(n,i.end(i.length-1))),this.mediaSource.duration!==n&&this.sourceUpdater_.setDuration(n)}},i.dispose=function(){var e=this;this.trigger("dispose"),this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),this.loadOnPlay_&&this.tech_.off("play",this.loadOnPlay_),["AUDIO","SUBTITLES"].forEach((function(t){var i=e.mediaTypes_[t].groups;for(var n in i)i[n].forEach((function(e){e.playlistLoader&&e.playlistLoader.dispose()}))})),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose(),this.sourceUpdater_.dispose(),this.timelineChangeController_.dispose(),this.stopABRTimer_(),this.updateDuration_&&this.mediaSource.removeEventListener("sourceopen",this.updateDuration_),this.mediaSource.removeEventListener("durationchange",this.handleDurationChange_),this.mediaSource.removeEventListener("sourceopen",this.handleSourceOpen_),this.mediaSource.removeEventListener("sourceended",this.handleSourceEnded_),this.off()},i.master=function(){return this.masterPlaylistLoader_.master},i.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},i.areMediaTypesKnown_=function(){var e=!!this.mediaTypes_.AUDIO.activePlaylistLoader,t=!!this.mainSegmentLoader_.getCurrentMediaInfo_(),i=!e||!!this.audioSegmentLoader_.getCurrentMediaInfo_();return!(!t||!i)},i.getCodecsOrExclude_=function(){var e=this,t={main:this.mainSegmentLoader_.getCurrentMediaInfo_()||{},audio:this.audioSegmentLoader_.getCurrentMediaInfo_()||{}};t.video=t.main;var i=Ic(this.master(),this.media()),n={},r=!!this.mediaTypes_.AUDIO.activePlaylistLoader;if(t.main.hasVideo&&(n.video=i.video||t.main.videoCodec||"avc1.4d400d"),t.main.isMuxed&&(n.video+=","+(i.audio||t.main.audioCodec||Oa)),(t.main.hasAudio&&!t.main.isMuxed||t.audio.hasAudio||r)&&(n.audio=i.audio||t.main.audioCodec||t.audio.audioCodec||Oa,t.audio.isFmp4=t.main.hasAudio&&!t.main.isMuxed?t.main.isFmp4:t.audio.isFmp4),n.audio||n.video){var a,s={};if(["video","audio"].forEach((function(e){if(n.hasOwnProperty(e)&&(r=t[e].isFmp4,o=n[e],!(r?La(o):Da(o)))){var i=t[e].isFmp4?"browser":"muxer";s[i]=s[i]||[],s[i].push(n[e]),"audio"===e&&(a=i)}var r,o})),r&&a&&this.media().attributes.AUDIO){var o=this.media().attributes.AUDIO;this.master().playlists.forEach((function(t){(t.attributes&&t.attributes.AUDIO)===o&&t!==e.media()&&(t.excludeUntil=1/0)})),this.logger_("excluding audio group "+o+" as "+a+' does not support codec(s): "'+n.audio+'"')}if(!Object.keys(s).length){if(this.sourceUpdater_.hasCreatedSourceBuffers()&&!this.sourceUpdater_.canChangeType()){var u=[];if(["video","audio"].forEach((function(t){var i=(xa(e.sourceUpdater_.codecs[t]||"")[0]||{}).type,r=(xa(n[t]||"")[0]||{}).type;i&&r&&i.toLowerCase()!==r.toLowerCase()&&u.push('"'+e.sourceUpdater_.codecs[t]+'" -> "'+n[t]+'"')})),u.length)return void this.blacklistCurrentPlaylist({playlist:this.media(),message:"Codec switching not supported: "+u.join(", ")+".",blacklistDuration:1/0,internal:!0})}return n}var l=Object.keys(s).reduce((function(e,t){return e&&(e+=", "),e+(t+' does not support codec(s): "')+s[t].join(",")+'"'}),"")+".";this.blacklistCurrentPlaylist({playlist:this.media(),internal:!0,message:l,blacklistDuration:1/0})}else this.blacklistCurrentPlaylist({playlist:this.media(),message:"Could not determine codecs for playlist.",blacklistDuration:1/0})},i.tryToCreateSourceBuffers_=function(){if("open"===this.mediaSource.readyState&&!this.sourceUpdater_.hasCreatedSourceBuffers()&&this.areMediaTypesKnown_()){var e=this.getCodecsOrExclude_();if(e){this.sourceUpdater_.createSourceBuffers(e);var t=[e.video,e.audio].filter(Boolean).join(",");this.excludeIncompatibleVariants_(t)}}},i.excludeUnsupportedVariants_=function(){var e=this,t=this.master().playlists,i=[];Object.keys(t).forEach((function(n){var r=t[n];if(-1===i.indexOf(r.id)){i.push(r.id);var a=Ic(e.master,r),s=[];!a.audio||Da(a.audio)||La(a.audio)||s.push("audio codec "+a.audio),!a.video||Da(a.video)||La(a.video)||s.push("video codec "+a.video),a.text&&"stpp.ttml.im1t"===a.text&&s.push("text codec "+a.text),s.length&&(r.excludeUntil=1/0,e.logger_("excluding "+r.id+" for unsupported: "+s.join(", ")))}}))},i.excludeIncompatibleVariants_=function(e){var t=this,i=[],n=this.master().playlists,r=kc(xa(e)),a=Cc(r),s=r.video&&xa(r.video)[0]||null,o=r.audio&&xa(r.audio)[0]||null;Object.keys(n).forEach((function(e){var r=n[e];if(-1===i.indexOf(r.id)&&r.excludeUntil!==1/0){i.push(r.id);var u=[],l=Ic(t.masterPlaylistLoader_.master,r),c=Cc(l);if(l.audio||l.video){if(c!==a&&u.push('codec count "'+c+'" !== "'+a+'"'),!t.sourceUpdater_.canChangeType()){var d=l.video&&xa(l.video)[0]||null,h=l.audio&&xa(l.audio)[0]||null;d&&s&&d.type.toLowerCase()!==s.type.toLowerCase()&&u.push('video codec "'+d.type+'" !== "'+s.type+'"'),h&&o&&h.type.toLowerCase()!==o.type.toLowerCase()&&u.push('audio codec "'+h.type+'" !== "'+o.type+'"')}u.length&&(r.excludeUntil=1/0,t.logger_("blacklisting "+r.id+": "+u.join(" && ")))}}}))},i.updateAdCues_=function(e){var t=0,i=this.seekable();i.length&&(t=i.start(0)),function(e,t,i){if(void 0===i&&(i=0),e.segments)for(var n,r=i,a=0;a<e.segments.length;a++){var s=e.segments[a];if(n||(n=dd(t,r+s.duration/2)),n){if("cueIn"in s){n.endTime=r,n.adEndTime=r,r+=s.duration,n=null;continue}if(r<n.endTime){r+=s.duration;continue}n.endTime+=s.duration}else if("cueOut"in s&&((n=new window.VTTCue(r,r+s.duration,s.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(s.cueOut),t.addCue(n)),"cueOutCont"in s){var o=s.cueOutCont.split("/").map(parseFloat),u=o[0],l=o[1];(n=new window.VTTCue(r,r+s.duration,"")).adStartTime=r-u,n.adEndTime=n.adStartTime+l,t.addCue(n)}r+=s.duration}}(e,this.cueTagsTrack_,t)},i.goalBufferLength=function(){var e=this.tech_.currentTime(),t=ic.GOAL_BUFFER_LENGTH,i=ic.GOAL_BUFFER_LENGTH_RATE,n=Math.max(t,ic.MAX_GOAL_BUFFER_LENGTH);return Math.min(t+e*i,n)},i.bufferLowWaterLine=function(){var e=this.tech_.currentTime(),t=ic.BUFFER_LOW_WATER_LINE,i=ic.BUFFER_LOW_WATER_LINE_RATE,n=Math.max(t,ic.MAX_BUFFER_LOW_WATER_LINE),r=Math.max(t,ic.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);return Math.min(t+e*i,this.experimentalBufferBasedABR?r:n)},i.bufferHighWaterLine=function(){return ic.BUFFER_HIGH_WATER_LINE},t}(ua.EventTarget),Id=function(e,t,i){var n,r,a,s=e.masterPlaylistController_,o=s[(e.options_.smoothQualityChange?"smooth":"fast")+"QualityChange_"].bind(s);if(t.attributes){var u=t.attributes.RESOLUTION;this.width=u&&u.width,this.height=u&&u.height,this.bandwidth=t.attributes.BANDWIDTH}this.codecs=Ic(s.master(),t),this.playlist=t,this.id=i,this.enabled=(n=e.playlists,r=t.id,a=o,function(e){var t=n.master.playlists[r],i=fl(t),s=ml(t);return void 0===e?s:(e?delete t.disabled:t.disabled=!0,e===s||i||(a(),e?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),e)})},xd=["seeking","seeked","pause","playing","error"],Ad=function(){function e(e){var t=this;this.masterPlaylistController_=e.masterPlaylistController,this.tech_=e.tech,this.seekable=e.seekable,this.allowSeeksWithinUnsafeLiveWindow=e.allowSeeksWithinUnsafeLiveWindow,this.liveRangeSafeTimeDelta=e.liveRangeSafeTimeDelta,this.media=e.media,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=Xu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return t.monitorCurrentTime_()},n=function(){return t.monitorCurrentTime_()},r=function(){return t.techWaiting_()},a=function(){return t.cancelTimer_()},s=this.masterPlaylistController_,o=["main","subtitle","audio"],u={};o.forEach((function(e){u[e]={reset:function(){return t.resetSegmentDownloads_(e)},updateend:function(){return t.checkSegmentDownloads_(e)}},s[e+"SegmentLoader_"].on("appendsdone",u[e].updateend),s[e+"SegmentLoader_"].on("playlistupdate",u[e].reset),t.tech_.on(["seeked","seeking"],u[e].reset)}));var l=function(e){["main","audio"].forEach((function(i){s[i+"SegmentLoader_"][e]("appended",t.seekingAppendCheck_)}))};this.seekingAppendCheck_=function(){t.fixesBadSeeks_()&&(t.consecutiveUpdates=0,t.lastRecordedTime=t.tech_.currentTime(),l("off"))},this.clearSeekingAppendCheck_=function(){return l("off")},this.watchForBadSeeking_=function(){t.clearSeekingAppendCheck_(),l("on")},this.tech_.on("seeked",this.clearSeekingAppendCheck_),this.tech_.on("seeking",this.watchForBadSeeking_),this.tech_.on("waiting",r),this.tech_.on(xd,a),this.tech_.on("canplay",n),this.tech_.one("play",i),this.dispose=function(){t.clearSeekingAppendCheck_(),t.logger_("dispose"),t.tech_.off("waiting",r),t.tech_.off(xd,a),t.tech_.off("canplay",n),t.tech_.off("play",i),t.tech_.off("seeking",t.watchForBadSeeking_),t.tech_.off("seeked",t.clearSeekingAppendCheck_),o.forEach((function(e){s[e+"SegmentLoader_"].off("appendsdone",u[e].updateend),s[e+"SegmentLoader_"].off("playlistupdate",u[e].reset),t.tech_.off(["seeked","seeking"],u[e].reset)})),t.checkCurrentTimeTimeout_&&window.clearTimeout(t.checkCurrentTimeTimeout_),t.cancelTimer_()}}var t=e.prototype;return t.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&window.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=window.setTimeout(this.monitorCurrentTime_.bind(this),250)},t.resetSegmentDownloads_=function(e){var t=this.masterPlaylistController_[e+"SegmentLoader_"];this[e+"StalledDownloads_"]>0&&this.logger_("resetting possible stalled download count for "+e+" loader"),this[e+"StalledDownloads_"]=0,this[e+"Buffered_"]=t.buffered_()},t.checkSegmentDownloads_=function(e){var t=this.masterPlaylistController_,i=t[e+"SegmentLoader_"],n=i.buffered_(),r=function(e,t){if(e===t)return!1;if(!e&&t||!t&&e)return!0;if(e.length!==t.length)return!0;for(var i=0;i<e.length;i++)if(e.start(i)!==t.start(i)||e.end(i)!==t.end(i))return!0;return!1}(this[e+"Buffered_"],n);this[e+"Buffered_"]=n,r?this.resetSegmentDownloads_(e):(this[e+"StalledDownloads_"]++,this.logger_("found #"+this[e+"StalledDownloads_"]+" "+e+" appends that did not increase buffer (possible stalled download)",{playlistId:i.playlist_&&i.playlist_.id,buffered:el(n)}),this[e+"StalledDownloads_"]<10||(this.logger_(e+" loader stalled download exclusion"),this.resetSegmentDownloads_(e),this.tech_.trigger({type:"usage",name:"vhs-"+e+"-download-exclusion"}),"subtitle"!==e&&t.blacklistCurrentPlaylist({message:"Excessive "+e+" segment downloading detected."},1/0)))},t.checkCurrentTime_=function(){if(!this.tech_.paused()&&!this.tech_.seeking()){var e=this.tech_.currentTime(),t=this.tech_.buffered();if(this.lastRecordedTime===e&&(!t.length||e+Yu>=t.end(t.length-1)))return this.techWaiting_();this.consecutiveUpdates>=5&&e===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):e===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=e)}},t.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},t.fixesBadSeeks_=function(){if(!this.tech_.seeking())return!1;var e,t=this.seekable(),i=this.tech_.currentTime();if(this.afterSeekableWindow_(t,i,this.media(),this.allowSeeksWithinUnsafeLiveWindow)&&(e=t.end(t.length-1)),this.beforeSeekableWindow_(t,i)){var n=t.start(0);e=n+(n===t.end(0)?0:Yu)}if(void 0!==e)return this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+Zu(t)+". Seeking to "+e+"."),this.tech_.setCurrentTime(e),!0;for(var r=this.masterPlaylistController_.sourceUpdater_,a=this.tech_.buffered(),s=r.audioBuffer?r.audioBuffered():null,o=r.videoBuffer?r.videoBuffered():null,u=this.media(),l=u.partTargetDuration?u.partTargetDuration:2*(u.targetDuration-Ku),c=[s,o],d=0;d<c.length;d++)if(c[d]&&il(c[d],i)<l)return!1;var h=Ju(a,i);return 0!==h.length&&(e=h.start(0)+Yu,this.logger_("Buffered region starts ("+h.start(0)+")  just beyond seek point ("+i+"). Seeking to "+e+"."),this.tech_.setCurrentTime(e),!0)},t.waiting_=function(){if(!this.techWaiting_()){var e=this.tech_.currentTime(),t=this.tech_.buffered(),i=$u(t,e);return i.length&&e+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(e),this.logger_("Stopped at "+e+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),this.tech_.trigger({type:"usage",name:"vhs-unknown-waiting"}),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},t.techWaiting_=function(){var e=this.seekable(),t=this.tech_.currentTime();if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(e,t)){var i=e.end(e.length-1);return this.logger_("Fell out of live window at time "+t+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"vhs-live-resync"}),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var n=this.tech_.vhs.masterPlaylistController_.sourceUpdater_,r=this.tech_.buffered();if(this.videoUnderflow_({audioBuffered:n.audioBuffered(),videoBuffered:n.videoBuffered(),currentTime:t}))return this.cancelTimer_(),this.tech_.setCurrentTime(t),this.tech_.trigger({type:"usage",name:"vhs-video-underflow"}),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;var a=Ju(r,t);if(a.length>0){var s=a.start(0)-t;return this.logger_("Stopped at "+t+", setting timer for "+s+", seeking to "+a.start(0)),this.cancelTimer_(),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,t),!0}return!1},t.afterSeekableWindow_=function(e,t,i,n){if(void 0===n&&(n=!1),!e.length)return!1;var r=e.end(e.length-1)+Yu;return!i.endList&&n&&(r=e.end(e.length-1)+3*i.targetDuration),t>r},t.beforeSeekableWindow_=function(e,t){return!!(e.length&&e.start(0)>0&&t<e.start(0)-this.liveRangeSafeTimeDelta)},t.videoUnderflow_=function(e){var t=e.videoBuffered,i=e.audioBuffered,n=e.currentTime;if(t){var r;if(t.length&&i.length){var a=$u(t,n-3),s=$u(t,n),o=$u(i,n);o.length&&!s.length&&a.length&&(r={start:a.end(0),end:o.end(0)})}else Ju(t,n).length||(r=this.gapFromVideoUnderflow_(t,n));return!!r&&(this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+n),!0)}},t.skipTheGap_=function(e){var t=this.tech_.buffered(),i=this.tech_.currentTime(),n=Ju(t,i);this.cancelTimer_(),0!==n.length&&i===e&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",e,"nextRange start:",n.start(0)),this.tech_.setCurrentTime(n.start(0)+Ku),this.tech_.trigger({type:"usage",name:"vhs-gap-skip"}),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},t.gapFromVideoUnderflow_=function(e,t){for(var i=function(e){if(e.length<2)return ua.createTimeRanges();for(var t=[],i=1;i<e.length;i++){var n=e.end(i-1),r=e.start(i);t.push([n,r])}return ua.createTimeRanges(t)}(e),n=0;n<i.length;n++){var r=i.start(n),a=i.end(n);if(t-r<4&&t-r>2)return{start:r,end:a}}return null},e}(),Pd={errorInterval:30,getSource:function(e){return e(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_||this.currentSource())}},Ld=function e(t,i){var n=0,r=0,a=ua.mergeOptions(Pd,i);t.ready((function(){t.trigger({type:"usage",name:"vhs-error-reload-initialized"}),t.trigger({type:"usage",name:"hls-error-reload-initialized"})}));var s=function(){r&&t.currentTime(r)},o=function(e){null!=e&&(r=t.duration()!==1/0&&t.currentTime()||0,t.one("loadedmetadata",s),t.src(e),t.trigger({type:"usage",name:"vhs-error-reload"}),t.trigger({type:"usage",name:"hls-error-reload"}),t.play())},u=function(){return Date.now()-n<1e3*a.errorInterval?(t.trigger({type:"usage",name:"vhs-error-reload-canceled"}),void t.trigger({type:"usage",name:"hls-error-reload-canceled"})):a.getSource&&"function"==typeof a.getSource?(n=Date.now(),a.getSource.call(t,o)):void ua.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")},l=function e(){t.off("loadedmetadata",s),t.off("error",u),t.off("dispose",e)};t.on("error",u),t.on("dispose",l),t.reloadSourceOnError=function(i){l(),e(t,i)}},Dd="2.14.2",Od={PlaylistLoader:Rl,Playlist:Tl,utils:Kl,STANDARD_PLAYLIST_SELECTOR:Mc,INITIAL_PLAYLIST_SELECTOR:function(){var e=this,t=this.playlists.master.playlists.filter(Tl.isEnabled);return Lc(t,(function(e,t){return Dc(e,t)})),t.filter((function(t){return!!Ic(e.playlists.master,t).video}))[0]||null},lastBandwidthSelector:Mc,movingAverageBandwidthSelector:function(e){var t=-1,i=-1;if(e<0||e>1)throw new Error("Moving average bandwidth decay must be between 0 and 1.");return function(){var n=this.useDevicePixelRatio&&window.devicePixelRatio||1;return t<0&&(t=this.systemBandwidth,i=this.systemBandwidth),this.systemBandwidth>0&&this.systemBandwidth!==i&&(t=e*this.systemBandwidth+(1-e)*t,i=this.systemBandwidth),Oc(this.playlists.master,t,parseInt(Pc(this.tech_.el(),"width"),10)*n,parseInt(Pc(this.tech_.el(),"height"),10)*n,this.limitRenditionByPlayerDimensions,this.masterPlaylistController_)}},comparePlaylistBandwidth:Dc,comparePlaylistResolution:function(e,t){var i,n;return e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(i=e.attributes.RESOLUTION.width),i=i||window.Number.MAX_VALUE,t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(n=t.attributes.RESOLUTION.width),i===(n=n||window.Number.MAX_VALUE)&&e.attributes.BANDWIDTH&&t.attributes.BANDWIDTH?e.attributes.BANDWIDTH-t.attributes.BANDWIDTH:i-n},xhr:Fl()};Object.keys(ic).forEach((function(e){Object.defineProperty(Od,e,{get:function(){return ua.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing"),ic[e]},set:function(t){ua.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?ua.log.warn("value of Vhs."+e+" must be greater than or equal to 0"):ic[e]=t}})}));var Md="videojs-vhs",Rd=function(e,t){for(var i=t.media(),n=-1,r=0;r<e.length;r++)if(e[r].id===i.id){n=r;break}e.selectedIndex_=n,e.trigger({selectedIndex:n,type:"change"})};Od.canPlaySource=function(){return ua.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Nd=function(){if(!window.localStorage)return null;var e=window.localStorage.getItem(Md);if(!e)return null;try{return JSON.parse(e)}catch(e){return null}};Od.supportsNativeHls=function(){if(!document||!document.createElement)return!1;var e=document.createElement("video");return!!ua.getTech("Html5").isSupported()&&["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some((function(t){return/maybe|probably/i.test(e.canPlayType(t))}))}(),Od.supportsNativeDash=!!(document&&document.createElement&&ua.getTech("Html5").isSupported())&&/maybe|probably/i.test(document.createElement("video").canPlayType("application/dash+xml")),Od.supportsTypeNatively=function(e){return"hls"===e?Od.supportsNativeHls:"dash"===e&&Od.supportsNativeDash},Od.isSupported=function(){return ua.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Ud=function(e){function t(t,i,n){var r;if(r=e.call(this,i,ua.mergeOptions(n.hls,n.vhs))||this,n.hls&&Object.keys(n.hls).length&&ua.log.warn("Using hls options is deprecated. Please rename `hls` to `vhs` in your options object."),"number"==typeof n.initialBandwidth&&(r.options_.bandwidth=n.initialBandwidth),r.logger_=Xu("VhsHandler"),i.options_&&i.options_.playerId){var a=ua(i.options_.playerId);a.hasOwnProperty("hls")||Object.defineProperty(a,"hls",{get:function(){return ua.log.warn("player.hls is deprecated. Use player.tech().vhs instead."),i.trigger({type:"usage",name:"hls-player-access"}),_t(r)},configurable:!0}),a.hasOwnProperty("vhs")||Object.defineProperty(a,"vhs",{get:function(){return ua.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."),i.trigger({type:"usage",name:"vhs-player-access"}),_t(r)},configurable:!0}),a.hasOwnProperty("dash")||Object.defineProperty(a,"dash",{get:function(){return ua.log.warn("player.dash is deprecated. Use player.tech().vhs instead."),_t(r)},configurable:!0}),r.player_=a}if(r.tech_=i,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&i.overrideNativeAudioTracks&&i.overrideNativeVideoTracks)i.overrideNativeAudioTracks(!0),i.overrideNativeVideoTracks(!0);else if(r.options_.overrideNative&&(i.featuresNativeVideoTracks||i.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(document,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],(function(e){var t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;t&&t.contains(r.tech_.el())?r.masterPlaylistController_.fastQualityChange_():r.masterPlaylistController_.checkABR_()})),r.on(r.tech_,"seeking",(function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())})),r.on(r.tech_,"error",(function(){this.tech_.error()&&this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()})),r.on(r.tech_,"play",r.play),r}bt(t,e);var i=t.prototype;return i.setOptions_=function(){var e=this;if(this.options_.withCredentials=this.options_.withCredentials||!1,this.options_.handleManifestRedirects=!1!==this.options_.handleManifestRedirects,this.options_.limitRenditionByPlayerDimensions=!1!==this.options_.limitRenditionByPlayerDimensions,this.options_.useDevicePixelRatio=this.options_.useDevicePixelRatio||!1,this.options_.smoothQualityChange=this.options_.smoothQualityChange||!1,this.options_.useBandwidthFromLocalStorage=void 0!==this.source_.useBandwidthFromLocalStorage?this.source_.useBandwidthFromLocalStorage:this.options_.useBandwidthFromLocalStorage||!1,this.options_.useNetworkInformationApi=this.options_.useNetworkInformationApi||!1,this.options_.useDtsForTimestampOffset=this.options_.useDtsForTimestampOffset||!1,this.options_.customTagParsers=this.options_.customTagParsers||[],this.options_.customTagMappers=this.options_.customTagMappers||[],this.options_.cacheEncryptionKeys=this.options_.cacheEncryptionKeys||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&this.options_.useBandwidthFromLocalStorage){var t=Nd();t&&t.bandwidth&&(this.options_.bandwidth=t.bandwidth,this.tech_.trigger({type:"usage",name:"vhs-bandwidth-from-local-storage"}),this.tech_.trigger({type:"usage",name:"hls-bandwidth-from-local-storage"})),t&&t.throughput&&(this.options_.throughput=t.throughput,this.tech_.trigger({type:"usage",name:"vhs-throughput-from-local-storage"}),this.tech_.trigger({type:"usage",name:"hls-throughput-from-local-storage"}))}"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=ic.INITIAL_BANDWIDTH),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&this.options_.bandwidth===ic.INITIAL_BANDWIDTH,["withCredentials","useDevicePixelRatio","limitRenditionByPlayerDimensions","bandwidth","smoothQualityChange","customTagParsers","customTagMappers","handleManifestRedirects","cacheEncryptionKeys","playlistSelector","initialPlaylistSelector","experimentalBufferBasedABR","liveRangeSafeTimeDelta","experimentalLLHLS","useNetworkInformationApi","useDtsForTimestampOffset","experimentalExactManifestTimings","experimentalLeastPixelDiffSelector"].forEach((function(t){void 0!==e.source_[t]&&(e.options_[t]=e.source_[t])})),this.limitRenditionByPlayerDimensions=this.options_.limitRenditionByPlayerDimensions,this.useDevicePixelRatio=this.options_.useDevicePixelRatio},i.src=function(e,t){var i=this;if(e){var n;this.setOptions_(),this.options_.src=0===(n=this.source_.src).toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,")?JSON.parse(n.substring(n.indexOf(",")+1)):n,this.options_.tech=this.tech_,this.options_.externVhs=Od,this.options_.sourceType=Na(t),this.options_.seekTo=function(e){i.tech_.setCurrentTime(e)},this.options_.smoothQualityChange&&ua.log.warn("smoothQualityChange is deprecated and will be removed in the next major version"),this.masterPlaylistController_=new Cd(this.options_);var r=ua.mergeOptions({liveRangeSafeTimeDelta:Yu},this.options_,{seekable:function(){return i.seekable()},media:function(){return i.masterPlaylistController_.media()},masterPlaylistController:this.masterPlaylistController_});this.playbackWatcher_=new Ad(r),this.masterPlaylistController_.on("error",(function(){var e=ua.players[i.tech_.options_.playerId],t=i.masterPlaylistController_.error;"object"!=typeof t||t.code?"string"==typeof t&&(t={message:t,code:3}):t.code=3,e.error(t)}));var a=this.options_.experimentalBufferBasedABR?Od.movingAverageBandwidthSelector(.55):Od.STANDARD_PLAYLIST_SELECTOR;this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):a.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Od.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(e){this.masterPlaylistController_.selectPlaylist=e.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=e,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){var e=this.masterPlaylistController_.mainSegmentLoader_.bandwidth,t=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,i=1e7;if(this.options_.useNetworkInformationApi&&t){var n=1e3*t.downlink*1e3;e=n>=i&&e>=i?Math.max(e,n):n}return e},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=e,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var e,t=1/(this.bandwidth||1);return e=this.throughput>0?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){ua.log.error('The "systemBandwidth" property is read-only')}}}),this.options_.bandwidth&&(this.bandwidth=this.options_.bandwidth),this.options_.throughput&&(this.throughput=this.options_.throughput),Object.defineProperties(this.stats,{bandwidth:{get:function(){return i.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return i.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return i.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return i.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return i.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return i.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return i.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return i.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},mediaAppends:{get:function(){return i.masterPlaylistController_.mediaAppends_()||0},enumerable:!0},mainAppendsToLoadedData:{get:function(){return i.masterPlaylistController_.mainAppendsToLoadedData_()||0},enumerable:!0},audioAppendsToLoadedData:{get:function(){return i.masterPlaylistController_.audioAppendsToLoadedData_()||0},enumerable:!0},appendsToLoadedData:{get:function(){return i.masterPlaylistController_.appendsToLoadedData_()||0},enumerable:!0},timeToLoadedData:{get:function(){return i.masterPlaylistController_.timeToLoadedData_()||0},enumerable:!0},buffered:{get:function(){return el(i.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return i.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return i.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return i.tech_.name_},enumerable:!0},duration:{get:function(){return i.tech_.duration()},enumerable:!0},master:{get:function(){return i.playlists.master},enumerable:!0},playerDimensions:{get:function(){return i.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return el(i.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return i.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.tech_.on("bandwidthupdate",(function(){i.options_.useBandwidthFromLocalStorage&&function(e){if(!window.localStorage)return!1;var t=Nd();t=t?ua.mergeOptions(t,e):e;try{window.localStorage.setItem(Md,JSON.stringify(t))}catch(e){return!1}}({bandwidth:i.bandwidth,throughput:Math.round(i.throughput)})})),this.masterPlaylistController_.on("selectedinitialmedia",(function(){var e;(e=i).representations=function(){var t=e.masterPlaylistController_.master(),i=bl(t)?e.masterPlaylistController_.getAudioTrackPlaylists_():t.playlists;return i?i.filter((function(e){return!fl(e)})).map((function(t,i){return new Id(e,t,t.id)})):[]}})),this.masterPlaylistController_.sourceUpdater_.on("createdsourcebuffers",(function(){i.setupEme_()})),this.on(this.masterPlaylistController_,"progress",(function(){this.tech_.trigger("progress")})),this.on(this.masterPlaylistController_,"firstplay",(function(){this.ignoreNextSeekingEvent_=!0})),this.setupQualityLevels_(),this.tech_.el()&&(this.mediaSourceUrl_=window.URL.createObjectURL(this.masterPlaylistController_.mediaSource),this.tech_.src(this.mediaSourceUrl_))}},i.createKeySessions_=function(){var e=this,t=this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader;this.logger_("waiting for EME key session creation"),function(e){var t=e.player,i=e.sourceKeySystems,n=e.audioMedia,r=e.mainPlaylists;if(!t.eme.initializeMediaKeys)return Promise.resolve();var a,s,o=(a=n?r.concat([n]):r,s=Object.keys(i),a.reduce((function(e,t){if(!t.contentProtection)return e;var i=s.reduce((function(e,i){var n=t.contentProtection[i];return n&&n.pssh&&(e[i]={pssh:n.pssh}),e}),{});return Object.keys(i).length&&e.push(i),e}),[])),u=[],l=[];return o.forEach((function(e){l.push(new Promise((function(e,i){t.tech_.one("keysessioncreated",e)}))),u.push(new Promise((function(i,n){t.eme.initializeMediaKeys({keySystems:e},(function(e){e?n(e):i()}))})))})),Promise.race([Promise.all(u),Promise.race(l)])}({player:this.player_,sourceKeySystems:this.source_.keySystems,audioMedia:t&&t.media(),mainPlaylists:this.playlists.master.playlists}).then((function(){e.logger_("created EME key session"),e.masterPlaylistController_.sourceUpdater_.initializedEme()})).catch((function(t){e.logger_("error while creating EME key session",t),e.player_.error({message:"Failed to initialize media keys for EME",code:3})}))},i.handleWaitingForKey_=function(){this.logger_("waitingforkey fired, attempting to create any new key sessions"),this.createKeySessions_()},i.setupEme_=function(){var e,t,i,n=this,r=this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader,a=(e={player:this.player_,sourceKeySystems:this.source_.keySystems,media:this.playlists.media(),audioMedia:r&&r.media()},t=e.player,!(!(i=function(e,t,i){if(!e)return e;var n={};t&&t.attributes&&t.attributes.CODECS&&(n=kc(xa(t.attributes.CODECS))),i&&i.attributes&&i.attributes.CODECS&&(n.audio=i.attributes.CODECS);var r=Pa(n.video),a=Pa(n.audio),s={};for(var o in e)s[o]={},a&&(s[o].audioContentType=a),r&&(s[o].videoContentType=r),t.contentProtection&&t.contentProtection[o]&&t.contentProtection[o].pssh&&(s[o].pssh=t.contentProtection[o].pssh),"string"==typeof e[o]&&(s[o].url=e[o]);return ua.mergeOptions(e,s)}(e.sourceKeySystems,e.media,e.audioMedia))||(t.currentSource().keySystems=i,i&&!t.eme&&(ua.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"),1))));this.player_.tech_.on("keystatuschange",(function(e){"output-restricted"===e.status&&n.masterPlaylistController_.blacklistCurrentPlaylist({playlist:n.masterPlaylistController_.media(),message:"DRM keystatus changed to "+e.status+". Playlist will fail to play. Check for HDCP content.",blacklistDuration:1/0})})),this.handleWaitingForKey_=this.handleWaitingForKey_.bind(this),this.player_.tech_.on("waitingforkey",this.handleWaitingForKey_),11!==ua.browser.IE_VERSION&&a?this.createKeySessions_():this.masterPlaylistController_.sourceUpdater_.initializedEme()},i.setupQualityLevels_=function(){var e=this,t=ua.players[this.tech_.options_.playerId];t&&t.qualityLevels&&!this.qualityLevels_&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",(function(){var t,i;t=e.qualityLevels_,(i=e).representations().forEach((function(e){t.addQualityLevel(e)})),Rd(t,i.playlists)})),this.playlists.on("mediachange",(function(){Rd(e.qualityLevels_,e.playlists)})))},t.version=function(){return{"@videojs/http-streaming":Dd,"mux.js":"6.0.1","mpd-parser":"0.21.1","m3u8-parser":"4.7.1","aes-decrypter":"3.1.3"}},i.version=function(){return this.constructor.version()},i.canChangeType=function(){return od.canChangeType()},i.play=function(){this.masterPlaylistController_.play()},i.setCurrentTime=function(e){this.masterPlaylistController_.setCurrentTime(e)},i.duration=function(){return this.masterPlaylistController_.duration()},i.seekable=function(){return this.masterPlaylistController_.seekable()},i.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),this.player_&&(delete this.player_.vhs,delete this.player_.dash,delete this.player_.hls),this.tech_&&this.tech_.vhs&&delete this.tech_.vhs,this.tech_&&delete this.tech_.hls,this.mediaSourceUrl_&&window.URL.revokeObjectURL&&(window.URL.revokeObjectURL(this.mediaSourceUrl_),this.mediaSourceUrl_=null),this.tech_&&this.tech_.off("waitingforkey",this.handleWaitingForKey_),e.prototype.dispose.call(this)},i.convertToProgramTime=function(e,t){return function(e){var t=e.playlist,i=e.time,n=void 0===i?void 0:i,r=e.callback;if(!r)throw new Error("getProgramTime: callback must be provided");if(!t||void 0===n)return r({message:"getProgramTime: playlist and time must be provided"});var a=function(e,t){if(!t||!t.segments||0===t.segments.length)return null;for(var i,n=0,r=0;r<t.segments.length&&!(e<=(n=(i=t.segments[r]).videoTimingInfo?i.videoTimingInfo.transmuxedPresentationEnd:n+i.duration));r++);var a=t.segments[t.segments.length-1];if(a.videoTimingInfo&&a.videoTimingInfo.transmuxedPresentationEnd<e)return null;if(e>n){if(e>n+.25*a.duration)return null;i=a}return{segment:i,estimatedStart:i.videoTimingInfo?i.videoTimingInfo.transmuxedPresentationStart:n-i.duration,type:i.videoTimingInfo?"accurate":"estimate"}}(n,t);if(!a)return r({message:"valid programTime was not found"});if("estimate"===a.type)return r({message:"Accurate programTime could not be determined. Please seek to e.seekTime and try again",seekTime:a.estimatedStart});var s={mediaSeconds:n},o=function(e,t){if(!t.dateTimeObject)return null;var i=t.videoTimingInfo.transmuxerPrependedSeconds,n=e-(t.videoTimingInfo.transmuxedPresentationStart+i);return new Date(t.dateTimeObject.getTime()+1e3*n)}(n,a.segment);return o&&(s.programDateTime=o.toISOString()),r(null,s)}({playlist:this.masterPlaylistController_.media(),time:e,callback:t})},i.seekToProgramTime=function(e,t,i,n){return void 0===i&&(i=!0),void 0===n&&(n=2),Yl({programTime:e,playlist:this.masterPlaylistController_.media(),retryCount:n,pauseAfterSeek:i,seekTo:this.options_.seekTo,tech:this.options_.tech,callback:t})},t}(ua.getComponent("Component")),Bd={name:"videojs-http-streaming",VERSION:Dd,canHandleSource:function(e,t){void 0===t&&(t={});var i=ua.mergeOptions(ua.options,t);return Bd.canPlayType(e.type,i)},handleSource:function(e,t,i){void 0===i&&(i={});var n=ua.mergeOptions(ua.options,i);return t.vhs=new Ud(e,t,n),ua.hasOwnProperty("hls")||Object.defineProperty(t,"hls",{get:function(){return ua.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."),t.vhs},configurable:!0}),t.vhs.xhr=Fl(),t.vhs.src(e.src,e.type),t.vhs},canPlayType:function(e,t){void 0===t&&(t={});var i=ua.mergeOptions(ua.options,t),n=i.vhs,r=(n=void 0===n?{}:n).overrideNative,a=void 0===r?!ua.browser.IS_ANY_SAFARI:r,s=i.hls,o=(s=void 0===s?{}:s).overrideNative,u=void 0!==o&&o,l=Na(e);return l&&(!Od.supportsTypeNatively(l)||u||a)?"maybe":""}};return La("avc1.4d400d,mp4a.40.2")&&ua.getTech("Html5").registerSourceHandler(Bd,0),ua.VhsHandler=Ud,Object.defineProperty(ua,"HlsHandler",{get:function(){return ua.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."),Ud},configurable:!0}),ua.VhsSourceHandler=Bd,Object.defineProperty(ua,"HlsSourceHandler",{get:function(){return ua.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."),Bd},configurable:!0}),ua.Vhs=Od,Object.defineProperty(ua,"Hls",{get:function(){return ua.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."),Od},configurable:!0}),ua.use||(ua.registerComponent("Hls",Od),ua.registerComponent("Vhs",Od)),ua.options.vhs=ua.options.vhs||{},ua.options.hls=ua.options.hls||{},ua.getPlugin&&ua.getPlugin("reloadSourceOnError")||(ua.registerPlugin||ua.plugin)("reloadSourceOnError",(function(e){Ld(this,e)})),ua}));