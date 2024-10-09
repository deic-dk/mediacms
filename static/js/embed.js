!(function () {
  "use strict";
  var e,
    t = {
      3170: function (e, t, n) {
        var r,
          i,
          a,
          o = n(5466),
          l = n(6116);
        n(1394), n(5063), n(4083), n(6191), (r = "page-embed"), (i = n(645).EmbedPage), (a = document.getElementById(r)) && i && l.render(o.createElement(i, null), a);
      },
      7714: function (e, t, n) {
        n.d(t, {
          M: function () {
            return l;
          },
        }),
          n(4517);
        var r = n(5466),
          i = n(3074),
          a = n.n(i);
        function o() {
          return (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function l(e) {
          var t = r.createElement("span", null, r.createElement("span", null, e.children)),
            n = { tabIndex: e.tabIndex || null, title: e.title || null, className: "circle-icon-button" + (void 0 !== e.className ? " " + e.className : "") + (e.buttonShadow ? " button-shadow" : "") };
          return (
            void 0 !== e["data-page-id"] && (n["data-page-id"] = e["data-page-id"]),
            void 0 !== e["aria-label"] && (n["aria-label"] = e["aria-label"]),
            "link" === e.type
              ? r.createElement("a", o({}, n, { href: e.href || null, rel: e.rel || null }), t)
              : "span" === e.type
              ? r.createElement("span", o({}, n, { onClick: e.onClick || null }), t)
              : r.createElement("button", o({}, n, { onClick: e.onClick || null }), t)
          );
        }
        (l.propTypes = { type: a().oneOf(["button", "link", "span"]), buttonShadow: a().bool, className: a().string }), (l.defaultProps = { type: "button", buttonShadow: !1 });
      },
      4234: function (e, t, n) {
        n.d(t, {
          CircleIconButton: function () {
            return r.M;
          },
        });
        var r = n(7714);
        n(7446), n(2915), n(2299), n(2917), n(5671), n(2436), n(5517), n(940), n(6309), n(6142);
      },
      2299: function (e, t, n) {
        n.d(t, {
          O: function () {
            return i;
          },
        });
        var r = n(5466),
          i = function (e) {
            var t = e.type;
            return t ? r.createElement("i", { className: "material-icons", "data-icon": t }) : null;
          };
      },
      2917: function (e, t, n) {
        n(3233), n(9751), n(2004), n(8407), n(6394), n(8288), n(5677), n(2129), n(4655), n(288), n(4458), n(3675);
        var r = n(5466),
          i = n(6116),
          a = n(3074),
          o = n.n(a);
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function s(e) {
          var t,
            n,
            a = (0, r.useRef)(null),
            o =
              ((t = (0, r.useState)(null)),
              (n = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, t) {
                  var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var r,
                      i,
                      a = [],
                      o = !0,
                      l = !1;
                    try {
                      for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
                    } catch (e) {
                      (l = !0), (i = e);
                    } finally {
                      try {
                        o || null == n.return || n.return();
                      } finally {
                        if (l) throw i;
                      }
                    }
                    return a;
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            s = o[0],
            u = o[1],
            d = [];
          function c(t, n) {
            var r;
            n.preventDefault(), n.stopPropagation(), (r = d[t].id), void 0 !== e.pages[r] && u(r);
          }
          return (
            (0, r.useEffect)(
              function () {
                void 0 !== e.pages[e.initPage] ? u(e.initPage) : Object.keys(e.pages).length ? u(Object.keys(e.pages)[0]) : u(null);
              },
              [e.initPage]
            ),
            (0, r.useEffect)(
              function () {
                !(function () {
                  for (var e = 0; e < d.length; ) d[e].elem.removeEventListener("click", d[e].listener), (e += 1);
                  d = [];
                })(),
                  s &&
                    ((function () {
                      var t,
                        n,
                        r = (0, i.findDOMNode)(a.current),
                        o = r.querySelectorAll(e.pageChangeSelector);
                      if (o.length)
                        for (t = 0; t < o.length; )
                          (n = (n = o[t].getAttribute(e.pageIdSelectorAttr)) ? n.trim() : n) &&
                            ((d[t] = { id: n, elem: o[t] }),
                            (d[t].listener = (function (e) {
                              return function (t) {
                                return c(e, t);
                              };
                            })(t)),
                            d[t].elem.addEventListener("click", d[t].listener)),
                            (t += 1);
                      e.focusFirstItemOnPageChange && r.focus();
                    })(),
                    "function" == typeof e.pageChangeCallback && e.pageChangeCallback(s));
              },
              [s]
            ),
            s ? r.createElement("div", { ref: a }, r.cloneElement(e.pages[s])) : null
          );
        }
        (s.propTypes = { initPage: o().string, pages: o().object.isRequired, pageChangeSelector: o().string.isRequired, pageIdSelectorAttr: o().string.isRequired, focusFirstItemOnPageChange: o().bool, pageChangeCallback: o().func }),
          (s.defaultProps = { focusFirstItemOnPageChange: !0 });
      },
      5671: function (e, t, n) {
        n(9808), n(3233), n(2070), n(4517);
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          o = n(2299);
        function l() {
          return (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function s(e) {
          var t = [],
            n = e.itemAttr || {};
          void 0 === n.className ? (n.className = "") : n.className && (n.className += " ");
          var i = e.text ? (e.icon && "right" !== e.iconPos ? 1 : 0) : -1,
            a = e.icon ? (e.text && "right" === e.iconPos ? 1 : 0) : -1;
          switch (
            (-1 < i && (t[i] = r.createElement("span", { key: "Text" }, e.text)),
            -1 < a && (t[a] = r.createElement("span", { key: "Icon", className: "right" === e.iconPos ? "menu-item-icon-right" : "menu-item-icon" }, r.createElement(o.O, { type: e.icon }))),
            e.itemType)
          ) {
            case "link":
              (t = r.createElement("a", l({}, e.linkAttr || {}, { href: e.link, title: e.text || null }), t)), (n.className += "link-item" + (e.active ? " active" : ""));
              break;
            case "button":
            case "open-subpage":
              t = r.createElement("button", l({}, e.buttonAttr || {}, { key: "button" }), t);
              break;
            case "label":
              (t = r.createElement("button", l({}, e.buttonAttr || {}, { key: "button" }), r.createElement("span", null, e.text || null))), (n.className = "label-item");
              break;
            case "div":
              t = r.createElement("div", l({}, e.divAttr || {}, { key: "div" }), e.text || null);
          }
          return "" !== n.className && (n.className = " " + n.className), (n.className = n.className.trim()), r.createElement("li", n, t);
        }
        function u(e) {
          var t = e.items.map(function (e, t) {
            return r.createElement(s, l({ key: t }, e));
          });
          return t.length ? r.createElement("div", { className: "nav-menu" + (e.removeVerticalPadding ? " pv0" : "") }, r.createElement("nav", null, r.createElement("ul", null, t))) : null;
        }
        (s.propTypes = {
          itemType: a().oneOf(["link", "open-subpage", "button", "label", "div"]),
          link: a().string,
          icon: a().string,
          iconPos: a().oneOf(["left", "right"]),
          text: a().string,
          active: a().bool,
          divAttr: a().object,
          buttonAttr: a().object,
          itemAttr: a().object,
          linkAttr: a().object,
        }),
          (s.defaultProps = { itemType: "link", iconPos: "left", active: !1 }),
          (u.propTypes = { removeVerticalPadding: a().bool, items: a().arrayOf(a().shape(s.propTypes)).isRequired }),
          (u.defaultProps = { removeVerticalPadding: !1 });
      },
      940: function (e, t, n) {
        var r = n(5466),
          i = r.forwardRef(function (e, t) {
            return void 0 !== e.children ? r.createElement("div", { ref: t, className: "popup" + (void 0 !== e.className ? " " + e.className : ""), style: e.style }, e.children) : null;
          });
        t.ZP = i;
      },
      6142: function (e, t, n) {
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          o = n(9747),
          l = n(7714),
          s = n(2299);
        function u(e) {
          var t = (0, o.useUser)().thumbnail,
            n = { "aria-label": "Account profile photo that opens list of options and settings pages links", className: "thumbnail" };
          switch ((e.isButton ? void 0 !== e.onClick && (n.onClick = e.onClick) : (n.type = "span"), e.size)) {
            case "small":
            case "large":
              n.className += " " + e.size + "-thumb";
          }
          return r.createElement(l.M, n, t ? r.createElement("img", { src: t, alt: "" }) : r.createElement(s.O, { type: "person" }));
        }
        (u.propTypes = { isButton: a().bool, size: a().oneOf(["small", "medium", "large"]), onClick: a().func }), (u.defaultProps = { isButton: !1, size: "medium" });
      },
      1505: function (e, t, n) {
        n.r(t),
          n.d(t, {
            default: function () {
              return w;
            },
          }),
          n(9751),
          n(2322),
          n(3296),
          n(5101),
          n(9268),
          n(9006),
          n(3080),
          n(2004),
          n(8407),
          n(6394),
          n(8288),
          n(5677),
          n(2129),
          n(4655);
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          o = n(541),
          l = n(3613),
          s = n(8578),
          u = n(473),
          d = n(9722),
          c = n(9905),
          p = n(8727),
          m = n(1283);
        function f(e) {
          return (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
        }
        function h(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function v(e, t) {
          return (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function y(e, t) {
          return !t || ("object" !== f(t) && "function" != typeof t) ? g(e) : t;
        }
        function g(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function b(e) {
          return (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var w = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && v(e, t);
          })(w, e);
          var t,
            n,
            i,
            a,
            f =
              ((i = w),
              (a = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = b(i);
                if (a) {
                  var n = b(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return y(this, e);
              });
          function w(e) {
            var t;
            if (
              ((function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, w),
              ((t = f.call(this, e)).state = { displayPlayer: !1 }),
              (t.videoSources = []),
              (function (e) {
                switch (e) {
                  case "running":
                    s.MediaPageStore.set("media-load-error-type", "encodingRunning"), s.MediaPageStore.set("media-load-error-message", "Media encoding is currently running. Try again in few minutes.");
                    break;
                  case "pending":
                    s.MediaPageStore.set("media-load-error-type", "encodingPending"), s.MediaPageStore.set("media-load-error-message", "Media encoding is pending");
                    break;
                  case "fail":
                    s.MediaPageStore.set("media-load-error-type", "encodingFailed"), s.MediaPageStore.set("media-load-error-message", "Media encoding failed");
                }
              })(t.props.data.encoding_status),
              null !== s.MediaPageStore.get("media-load-error-type"))
            )
              return (t.state.displayPlayer = !0), y(t);
            if (
              ("string" == typeof t.props.data.poster_url
                ? (t.videoPoster = (0, u.formatInnerLink)(t.props.data.poster_url, t.props.siteUrl))
                : "string" == typeof t.props.data.thumbnail_url && (t.videoPoster = (0, u.formatInnerLink)(t.props.data.thumbnail_url, t.props.siteUrl)),
              (t.videoInfo = (0, c.RA)(t.props.data.encodings_info, t.props.data.hls_info)),
              Object.keys(t.videoInfo).length)
            ) {
              var n = s.VideoViewerStore.get("video-quality");
              (null === n || ("Auto" === n && void 0 === t.videoInfo.Auto)) && (n = 720);
              var r = (0, c.$e)(n, t.videoInfo);
              "Auto" === n && void 0 !== t.videoInfo.Auto && t.videoSources.push({ src: t.videoInfo.Auto.url[0] });
              var i,
                a,
                o = (0, c.KC)();
              for (a = 0; a < t.videoInfo[r].format.length; ) {
                if ("hls" === t.videoInfo[r].format[a]) {
                  t.videoSources.push({ src: t.videoInfo[r].url[a] });
                  break;
                }
                a += 1;
              }
              for (a in t.props.data.encodings_info[r])
                t.props.data.encodings_info[r].hasOwnProperty(a) &&
                  o.support[a] &&
                  (i = t.props.data.encodings_info[r][a].url) &&
                  ((i = (0, u.formatInnerLink)(i, t.props.siteUrl)), t.videoSources.push({ src: i, encodings_status: t.props.data.encodings_info[r][a].status }));
            } else t.videoInfo = null;
            if (t.videoSources.length) {
              if (!t.props.inEmbed && 1 === t.videoSources.length && "running" === t.videoSources[0].encodings_status)
                return s.MediaPageStore.set("media-load-error-type", "encodingRunning"), s.MediaPageStore.set("media-load-error-message", "Media encoding is currently running. Try again in few minutes."), y(t);
            } else
              switch (s.MediaPageStore.get("media-load-error-type")) {
                case "encodingRunning":
                case "encodingPending":
                case "encodingFailed":
                  break;
                default:
                  m.warn("VIDEO DEBUG:", "Video files don't exist");
              }
            s.PageStore.on("switched_media_auto_play", t.onUpdateMediaAutoPlay.bind(g(t))), (t.browserCache = new d.BrowserCache(l.SiteContext._currentValue.id, 86400));
            var p = new d.MediaDurationInfo();
            return (
              p.update(t.props.data.duration),
              (t.durationISO8601 = p.ISO8601()),
              (t.playerElem = null),
              (t.playerInstance = null),
              (t.onPlayerInit = t.onPlayerInit.bind(g(t))),
              (t.onClickNext = t.onClickNext.bind(g(t))),
              (t.onClickPrevious = t.onClickPrevious.bind(g(t))),
              (t.onStateUpdate = t.onStateUpdate.bind(g(t))),
              (t.onVideoEnd = t.onVideoEnd.bind(g(t))),
              (t.onVideoRestart = t.onVideoRestart.bind(g(t))),
              t
            );
          }
          return (
            (t = w),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.videoSources.length) {
                    (this.recommendedMedia = this.props.data.related_media.length ? new d.PlayerRecommendedMedia(this.props.data.related_media, this.props.inEmbed, !s.PageStore.get("config-media-item").displayViews) : null),
                      (this.upNextLoaderView = !this.props.inEmbed && this.props.data.related_media.length ? new d.UpNextLoaderView(this.props.data.related_media[0]) : null);
                    var e = null;
                    if (this.props.inEmbed) {
                      var t = document.createElement("a"),
                        n = document.createElement("a");
                      (e = document.createElement("div")).setAttribute("class", "media-links-top-left"),
                        t && (t.setAttribute("class", "title-link"), t.setAttribute("href", this.props.data.url), t.setAttribute("title", this.props.data.title), t.setAttribute("target", "_blank"), (t.innerHTML = this.props.data.title)),
                        n &&
                          (n.setAttribute("class", "user-thumb-link"),
                          n.setAttribute("href", (0, u.formatInnerLink)(this.props.data.author_profile, this.props.siteUrl)),
                          n.setAttribute("title", this.props.data.author_name),
                          n.setAttribute("target", "_blank"),
                          n.setAttribute("style", "background-image:url(" + (0, u.formatInnerLink)(s.MediaPageStore.get("media-author-thumbnail-url"), this.props.siteUrl) + ")")),
                        e.appendChild(n),
                        e.appendChild(t);
                    }
                    var r = s.MediaPageStore.get("media-url"),
                      i = '<button class="share-video-btn"><i class="material-icons">share</i><span>Share</span></button>';
                    (i +=
                      '<div class="share-options-wrapper">\t\t\t\t\t\t\t\t\t<div class="share-options">\t\t\t\t\t\t\t\t\t\t<div class="share-options-inner">\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-email">\t\t\t\t\t\t\t\t\t\t\t\t<a href="mailto:?body=' +
                      r +
                      '" title=""><span><i class="material-icons">email</i></span><span>Email</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-fb">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.facebook.com/sharer.php?u=' +
                      r +
                      '" title="" target="_blank"><span></span><span>Facebook</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-tw">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://twitter.com/intent/tweet?url=' +
                      r +
                      '" title="" target="_blank"><span></span><span>Twitter</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-whatsapp">\t\t\t\t\t\t\t\t\t\t\t\t<a href="whatsapp://send?text=' +
                      r +
                      '" title="" target="_blank" data-action="share/whatsapp/share"><span></span><span>WhatsApp</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-telegram">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://t.me/share/url?url=' +
                      r +
                      "&amp;text=" +
                      this.props.data.title +
                      '" title="" target="_blank"><span></span><span>Telegram</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-linkedin">\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=' +
                      r +
                      '" title="" target="_blank"><span></span><span>LinkedIn</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-reddit">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://reddit.com/submit?url=' +
                      r +
                      "&amp;title=" +
                      this.props.data.title +
                      '" title="" target="_blank"><span></span><span>reddit</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-tumblr">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=' +
                      r +
                      "&amp;title=" +
                      this.props.data.title +
                      '" title="" target="_blank"><span></span><span>Tumblr</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-pinterest">\t\t\t\t\t\t\t\t\t\t\t\t<a href="http://pinterest.com/pin/create/link/?url=' +
                      r +
                      '" title="" target="_blank"><span></span><span>Pinterest</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-more">\t\t\t\t\t\t\t\t\t\t\t\t<a href="' +
                      r +
                      '" title="More" target="_blank"><span><i class="material-icons">more_horiz</i></span><span></span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>'),
                      (this.cornerLayers = {
                        topLeft: e,
                        topRight: this.upNextLoaderView ? this.upNextLoaderView.html() : null,
                        bottomLeft: this.recommendedMedia ? this.recommendedMedia.html() : null,
                        bottomRight: this.props.inEmbed ? i : null,
                      }),
                      this.setState({ displayPlayer: !0 }, function () {
                        setTimeout(function () {
                          var e = document.querySelector(".share-video-btn"),
                            t = document.querySelector(".share-options-wrapper"),
                            n = document.querySelector(".share-options-inner");
                          e &&
                            e.addEventListener("click", function (e) {
                              (0, u.addClassname)(document.querySelector(".video-js.vjs-mediacms"), "vjs-visible-share-options");
                            }),
                            t &&
                              t.addEventListener("click", function (e) {
                                (e.target !== n && e.target !== t) || (0, u.removeClassname)(document.querySelector(".video-js.vjs-mediacms"), "vjs-visible-share-options");
                              });
                        }, 1e3);
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.unsetRecommendedMedia();
                },
              },
              {
                key: "initRecommendedMedia",
                value: function () {
                  null !== this.recommendedMedia &&
                    (this.props.inEmbed || this.recommendedMedia.init(),
                    this.playerInstance.player.on("fullscreenchange", this.recommendedMedia.onResize),
                    s.PageStore.on("window_resize", this.recommendedMedia.onResize),
                    s.VideoViewerStore.on("changed_viewer_mode", this.recommendedMedia.onResize));
                },
              },
              {
                key: "unsetRecommendedMedia",
                value: function () {
                  null !== this.recommendedMedia &&
                    (this.playerInstance.player.off("fullscreenchange", this.recommendedMedia.onResize),
                    s.PageStore.removeListener("window_resize", this.recommendedMedia.onResize),
                    s.VideoViewerStore.removeListener("changed_viewer_mode", this.recommendedMedia.onResize),
                    this.recommendedMedia.destroy());
                },
              },
              {
                key: "onClickNext",
                value: function () {
                  var e;
                  s.MediaPageStore.get("playlist-id") ? null === (e = s.MediaPageStore.get("playlist-next-media-url")) && (e = this.props.data.related_media[0].url) : this.props.inEmbed || (e = this.props.data.related_media[0].url),
                    (window.location.href = e);
                },
              },
              {
                key: "onClickPrevious",
                value: function () {
                  var e;
                  s.MediaPageStore.get("playlist-id") ? null === (e = s.MediaPageStore.get("playlist-previous-media-url")) && (e = this.props.data.related_media[0].url) : this.props.inEmbed || (e = this.props.data.related_media[0].url),
                    (window.location.href = e);
                },
              },
              {
                key: "onStateUpdate",
                value: function (e) {
                  s.VideoViewerStore.get("in-theater-mode") !== e.theaterMode && o.VideoViewerActions.set_viewer_mode(e.theaterMode),
                    s.VideoViewerStore.get("player-volume") !== e.volume && o.VideoViewerActions.set_player_volume(e.volume),
                    s.VideoViewerStore.get("player-sound-muted") !== e.soundMuted && o.VideoViewerActions.set_player_sound_muted(e.soundMuted),
                    s.VideoViewerStore.get("video-quality") !== e.quality && o.VideoViewerActions.set_video_quality(e.quality),
                    s.VideoViewerStore.get("video-playback-speed") !== e.playbackSpeed && o.VideoViewerActions.set_video_playback_speed(e.playbackSpeed);
                },
              },
              {
                key: "onPlayerInit",
                value: function (e, t) {
                  (this.playerElem = t),
                    (this.playerInstance = e),
                    this.upNextLoaderView && (this.upNextLoaderView.setVideoJsPlayerElem(this.playerInstance.player.el_), this.onUpdateMediaAutoPlay()),
                    this.props.inEmbed || this.playerElem.parentNode.focus(),
                    null !== this.recommendedMedia &&
                      (this.recommendedMedia.initWrappers(this.playerElem.parentNode), this.props.inEmbed && (this.playerInstance.player.one("pause", this.recommendedMedia.init), this.initRecommendedMedia())),
                    this.playerInstance.player.one("ended", this.onVideoEnd);
                },
              },
              {
                key: "onVideoRestart",
                value: function () {
                  null !== this.recommendedMedia &&
                    (this.recommendedMedia.updateDisplayType("inline"), this.props.inEmbed && this.playerInstance.player.one("pause", this.recommendedMedia.init), this.playerInstance.player.one("ended", this.onVideoEnd));
                },
              },
              {
                key: "onVideoEnd",
                value: function () {
                  if (
                    (null !== this.recommendedMedia && (this.props.inEmbed || this.initRecommendedMedia(), this.recommendedMedia.updateDisplayType("full"), this.playerInstance.player.one("playing", this.onVideoRestart)),
                    !this.props.inEmbed && s.MediaPageStore.get("playlist-id"))
                  ) {
                    var e = document.querySelector(".video-player .more-media"),
                      t = document.querySelector(".video-player .vjs-actions-anim");
                    this.upNextLoaderView.cancelTimer();
                    var n = s.MediaPageStore.get("playlist-next-media-url");
                    return n && (e && (e.style.display = "none"), t && (t.style.display = "none"), (window.location.href = n)), void this.upNextLoaderView.hideTimerView();
                  }
                  this.upNextLoaderView &&
                    (s.PageStore.get("media-auto-play")
                      ? (this.upNextLoaderView.startTimer(),
                        this.playerInstance.player.one(
                          "play",
                          function () {
                            this.upNextLoaderView.cancelTimer();
                          }.bind(this)
                        ))
                      : this.upNextLoaderView.cancelTimer());
                },
              },
              {
                key: "onUpdateMediaAutoPlay",
                value: function () {
                  this.upNextLoaderView && (s.PageStore.get("media-auto-play") ? this.upNextLoaderView.showTimerView(this.playerInstance.isEnded()) : this.upNextLoaderView.hideTimerView());
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = null,
                    n = null;
                  !this.props.inEmbed && s.MediaPageStore.get("playlist-id")
                    ? ((t = s.MediaPageStore.get("playlist-next-media-url")), (n = s.MediaPageStore.get("playlist-previous-media-url")))
                    : (t = this.props.data.related_media.length && !this.props.inEmbed ? this.props.data.related_media[0].url : null);
                  var i = this.props.data.sprites_url ? { url: this.props.siteUrl + "/" + this.props.data.sprites_url.replace(/^\//g, ""), frame: { width: 160, height: 90, seconds: 10 } } : null;
                  return r.createElement(
                    "div",
                    { key: (this.props.inEmbed ? "embed-" : "") + "player-container", className: "player-container" + (this.videoSources.length ? "" : " player-container-error"), style: this.props.containerStyles, ref: "playerContainer" },
                    r.createElement(
                      "div",
                      { className: "player-container-inner", ref: "playerContainerInner", style: this.props.containerStyles },
                      this.state.displayPlayer && null !== s.MediaPageStore.get("media-load-error-type") ? r.createElement(p.hJ, { errorMessage: s.MediaPageStore.get("media-load-error-message") }) : null,
                      this.state.displayPlayer && null == s.MediaPageStore.get("media-load-error-type")
                        ? r.createElement(
                            "div",
                            { className: "video-player", ref: "videoPlayerWrapper", key: "videoPlayerWrapper" },
                            r.createElement(l.SiteConsumer, null, function (a) {
                              return r.createElement(p.Y7, {
                                playerVolume: e.browserCache.get("player-volume"),
                                playerSoundMuted: e.browserCache.get("player-sound-muted"),
                                videoQuality: e.browserCache.get("video-quality"),
                                videoPlaybackSpeed: parseInt(e.browserCache.get("video-playback-speed"), 10),
                                inTheaterMode: e.browserCache.get("in-theater-mode"),
                                siteId: a.id,
                                siteUrl: a.url,
                                info: e.videoInfo,
                                cornerLayers: e.cornerLayers,
                                sources: e.videoSources,
                                poster: e.videoPoster,
                                previewSprite: i,
                                subtitlesInfo: e.props.data.subtitles_info,
                                enableAutoplay: !e.props.inEmbed,
                                inEmbed: e.props.inEmbed,
                                hasTheaterMode: !e.props.inEmbed,
                                hasNextLink: !!t,
                                hasPreviousLink: !!n,
                                errorMessage: s.MediaPageStore.get("media-load-error-message"),
                                onClickNextCallback: e.onClickNext,
                                onClickPreviousCallback: e.onClickPrevious,
                                onStateUpdateCallback: e.onStateUpdate,
                                onPlayerInitCallback: e.onPlayerInit,
                              });
                            })
                          )
                        : null
                    )
                  );
                },
              },
            ]) && h(t.prototype, n),
            w
          );
        })(r.PureComponent);
        function S(e) {
          for (var t = null, n = [], r = location.search.substr(1).split("&"), i = 0; i < r.length; i++) (n = r[i].split("="))[0] === e && (t = decodeURIComponent(n[1]));
          return t;
        }
        (w.defaultProps = { inEmbed: !0, siteUrl: a().string.isRequired }),
          (w.propTypes = { inEmbed: a().bool }),
          new MutationObserver(function (e, t) {
            var n,
              r = document.querySelector(".video-js.vjs-mediacms video");
            if (r) return (n = videojs(r)).playsinline(!0), 1 == S("muted") && n.muted(!0), S("time") >= 0 && n.currentTime(S("time")), 1 == S("autoplay") && n.play(), void t.disconnect();
          }).observe(document, { childList: !0, subtree: !0 });
      },
      6006: function (e, t, n) {
        n(5466), n(8578), n(2546), n(473), n(6394), n(4669), n(3233), n(2322), n(9006), n(2004), n(8407), n(8288), n(5677), n(2129), n(4655), n(288), n(4458), n(3675), n(3613), n(541), n(4234), n(9808);
      },
      2947: function (e, t, n) {
        n(2004), n(8407), n(6394), n(8288), n(5677), n(2129), n(4655), n(288), n(4458), n(3675), n(5466), n(2546), n(8578), n(2322), n(3296), n(2070), n(9808), n(5090), n(137), n(3613), n(4234), n(3899);
      },
      6191: function (e, t, n) {
        n(6006), n(9198), n(2947), n(1542);
      },
      8727: function (e, t, n) {
        n.d(t, {
          hJ: function () {
            return d;
          },
          Y7: function () {
            return c;
          },
        }),
          n(2322),
          n(3296),
          n(6394),
          n(4669),
          n(717),
          n(5677),
          n(2129),
          n(4655),
          n(6453),
          n(9006);
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          o = n(137),
          l = n.n(o),
          s = n(8009),
          u = n.n(s);
        function d(e) {
          return r.createElement(
            "div",
            { className: "error-container" },
            r.createElement(
              "div",
              { className: "error-container-inner" },
              r.createElement("span", { className: "icon-wrap" }, r.createElement("i", { className: "material-icons" }, "error_outline")),
              r.createElement("span", { className: "msg-wrap" }, e.errorMessage)
            )
          );
        }
        function c(e) {
          var t = (0, r.useRef)(null),
            n = null,
            i = { playerVolume: e.playerVolume, playerSoundMuted: e.playerSoundMuted, videoQuality: e.videoQuality, videoPlaybackSpeed: e.videoPlaybackSpeed, inTheaterMode: e.inTheaterMode };
          function a() {
            void 0 !== e.onClickNextCallback && e.onClickNextCallback();
          }
          function o() {
            void 0 !== e.onClickPreviousCallback && e.onClickPreviousCallback();
          }
          function s(t) {
            i.playerVolume !== t.volume && (i.playerVolume = t.volume),
              i.playerSoundMuted !== t.soundMuted && (i.playerSoundMuted = t.soundMuted),
              i.videoQuality !== t.quality && (i.videoQuality = t.quality),
              i.videoPlaybackSpeed !== t.playbackSpeed && (i.videoPlaybackSpeed = t.playbackSpeed),
              i.inTheaterMode !== t.theaterMode && (i.inTheaterMode = t.theaterMode),
              void 0 !== e.onStateUpdateCallback && e.onStateUpdateCallback(t);
          }
          function d() {
            if (null === n && null === e.errorMessage && (e.inEmbed || (window.removeEventListener("focus", d), document.removeEventListener("visibilitychange", d)), t.current)) {
              e.inEmbed || t.current.focus();
              var r,
                c,
                p,
                m = { on: !1 };
              if (void 0 !== e.subtitlesInfo && null !== e.subtitlesInfo && e.subtitlesInfo.length) {
                m.languages = [];
                for (var f = 0; f < e.subtitlesInfo.length; )
                  void 0 !== e.subtitlesInfo[f].src &&
                    void 0 !== e.subtitlesInfo[f].srclang &&
                    void 0 !== e.subtitlesInfo[f].label &&
                    m.languages.push({
                      src: ((r = e.subtitlesInfo[f].src), (c = e.siteUrl), (p = void 0), (p = l()(r, {})), ("" !== p.origin && "null" !== p.origin && p.origin) || (p = l()(c + "/" + r.replace(/^\//g, ""), {})), p.toString()),
                      srclang: e.subtitlesInfo[f].srclang,
                      label: e.subtitlesInfo[f].label,
                    }),
                    (f += 1);
                m.languages.length && (m.on = !0);
              }
              (n = new (u())(
                t.current,
                {
                  enabledTouchControls: !0,
                  sources: e.sources,
                  poster: e.poster,
                  autoplay: e.enableAutoplay,
                  bigPlayButton: !0,
                  controlBar: { theaterMode: e.hasTheaterMode, pictureInPicture: !1, next: !!e.hasNextLink, previous: !!e.hasPreviousLink },
                  subtitles: m,
                  cornerLayers: e.cornerLayers,
                  videoPreviewThumb: e.previewSprite,
                },
                { volume: i.playerVolume, soundMuted: i.playerSoundMuted, theaterMode: i.inTheaterMode, theSelectedQuality: void 0, theSelectedPlaybackSpeed: i.videoPlaybackSpeed || 1 },
                e.info,
                [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                s,
                a,
                o
              )),
                void 0 !== e.onPlayerInitCallback && e.onPlayerInitCallback(n, t.current);
            }
          }
          return (
            (i.playerVolume = null === i.playerVolume ? 1 : Math.max(Math.min(Number(i.playerVolume), 1), 0)),
            (i.playerSoundMuted = null !== i.playerSoundMuted && i.playerSoundMuted),
            (i.videoQuality = null !== i.videoQuality ? i.videoQuality : "Auto"),
            (i.videoPlaybackSpeed = null !== i.videoPlaybackSpeed && i.videoPlaybackSpeed),
            (i.inTheaterMode = null !== i.inTheaterMode && i.inTheaterMode),
            (0, r.useEffect)(function () {
              return (
                e.inEmbed || document.hasFocus() || "visible" === document.visibilityState ? d() : (window.addEventListener("focus", d), document.addEventListener("visibilitychange", d)),
                n &&
                  n.player.one("loadedmetadata", function () {
                    var e = new URLSearchParams(window.location.search),
                      t = Number(e.get("t")),
                      r = isNaN(t) ? 0 : t;
                    n.player.currentTime(r);
                  }),
                function () {
                  null !== n && (videojs(t.current).dispose(), (n = null)), void 0 !== e.onUnmountCallback && e.onUnmountCallback();
                }
              );
            }, []),
            null === e.errorMessage
              ? r.createElement("video", { ref: t, className: "video-js vjs-mediacms native-dimensions" })
              : r.createElement(
                  "div",
                  { className: "error-container" },
                  r.createElement(
                    "div",
                    { className: "error-container-inner" },
                    r.createElement("span", { className: "icon-wrap" }, r.createElement("i", { className: "material-icons" }, "error_outline")),
                    r.createElement("span", { className: "msg-wrap" }, e.errorMessage)
                  )
                )
          );
        }
        (d.propTypes = { errorMessage: a().string.isRequired }),
          (c.propTypes = {
            playerVolume: a().string,
            playerSoundMuted: a().bool,
            videoQuality: a().string,
            videoPlaybackSpeed: a().number,
            inTheaterMode: a().bool,
            siteId: a().string.isRequired,
            siteUrl: a().string.isRequired,
            errorMessage: a().string,
            cornerLayers: a().object,
            subtitlesInfo: a().array.isRequired,
            inEmbed: a().bool.isRequired,
            sources: a().array.isRequired,
            info: a().object.isRequired,
            enableAutoplay: a().bool.isRequired,
            hasTheaterMode: a().bool.isRequired,
            hasNextLink: a().bool.isRequired,
            hasPreviousLink: a().bool.isRequired,
            poster: a().string,
            previewSprite: a().object,
            onClickPreviousCallback: a().func,
            onClickNextCallback: a().func,
            onPlayerInitCallback: a().func,
            onStateUpdateCallback: a().func,
            onUnmountCallback: a().func,
          }),
          (c.defaultProps = { errorMessage: null, cornerLayers: {} });
      },
      5063: function (e, t, n) {
        n.r(t),
          n.d(t, {
            LayoutContext: function () {
              return c;
            },
            LayoutProvider: function () {
              return p;
            },
            LayoutConsumer: function () {
              return m;
            },
          }),
          n(2004),
          n(8407),
          n(6394),
          n(8288),
          n(5677),
          n(2129),
          n(4655),
          n(288),
          n(4458),
          n(3675);
        var r,
          i = n(5466),
          a = n(9722),
          o = n(8578),
          l = n(473),
          s = n(1929);
        function u(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a = [],
                  o = !0,
                  l = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
                } catch (e) {
                  (l = !0), (i = e);
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (l) throw i;
                  }
                }
                return a;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
              }
            })(e, t) ||
            (function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
          );
        }
        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var c = (0, i.createContext)(),
          p = function (e) {
            var t = e.children,
              n = (0, i.useContext)(s.default),
              d = new a.BrowserCache("MediaCMS[" + n.id + "][layout]", 86400),
              p = !(!document.getElementById("app-sidebar") && !document.querySelector(".page-sidebar")),
              m = u((0, i.useState)(d.get("visible-sidebar")), 2),
              f = m[0],
              h = m[1],
              v = u((0, i.useState)(!1), 2),
              y = v[0],
              g = v[1];
            (0, i.useEffect)(
              function () {
                f ? (0, l.addClassname)(document.body, "visible-sidebar") : (0, l.removeClassname)(document.body, "visible-sidebar"), "media" !== o.PageStore.get("current-page") && 1023 < window.innerWidth && d.set("visible-sidebar", f);
              },
              [f]
            ),
              (0, i.useEffect)(function () {
                o.PageStore.once("page_init", function () {
                  "media" === o.PageStore.get("current-page") && (h(!1), (0, l.removeClassname)(document.body, "visible-sidebar"));
                }),
                  h("media" !== o.PageStore.get("current-page") && 1023 < window.innerWidth && (null === f || f));
              }, []);
            var b = {
              enabledSidebar: p,
              visibleSidebar: f,
              setVisibleSidebar: h,
              visibleMobileSearch: y,
              toggleMobileSearch: function () {
                g(!y);
              },
              toggleSidebar: function () {
                var e = !f;
                !(function (e) {
                  clearTimeout(r),
                    (0, l.addClassname)(document.body, "sliding-sidebar"),
                    (r = setTimeout(function () {
                      "media" === o.PageStore.get("current-page")
                        ? e
                          ? (0, l.addClassname)(document.body, "overflow-hidden")
                          : (0, l.removeClassname)(document.body, "overflow-hidden")
                        : !e || 767 < window.innerWidth
                        ? (0, l.removeClassname)(document.body, "overflow-hidden")
                        : (0, l.addClassname)(document.body, "overflow-hidden"),
                        e ? (0, l.addClassname)(document.body, "visible-sidebar") : (0, l.removeClassname)(document.body, "visible-sidebar"),
                        (r = setTimeout(function () {
                          (r = null), (0, l.removeClassname)(document.body, "sliding-sidebar");
                        }, 220));
                    }, 20));
                })(e),
                  h(e);
              },
            };
            return i.createElement(c.Provider, { value: b }, t);
          },
          m = c.Consumer;
      },
      1929: function (e, t, n) {
        n.r(t),
          n.d(t, {
            SiteContext: function () {
              return a;
            },
            SiteConsumer: function () {
              return o;
            },
          });
        var r = n(5466),
          i = n(9479),
          a = (0, r.createContext)((0, i.v)(window.MediaCMS).site),
          o = a.Consumer;
        t.default = a;
      },
      1394: function (e, t, n) {
        n.r(t),
          n.d(t, {
            ThemeContext: function () {
              return c;
            },
            ThemeProvider: function () {
              return p;
            },
            ThemeConsumer: function () {
              return m;
            },
          }),
          n(2004),
          n(8407),
          n(6394),
          n(8288),
          n(5677),
          n(2129),
          n(4655),
          n(288),
          n(4458),
          n(3675);
        var r = n(5466),
          i = n(9722),
          a = n(473),
          o = n(9479),
          l = n(1929);
        function s(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a = [],
                  o = !0,
                  l = !1;
                try {
                  for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
                } catch (e) {
                  (l = !0), (i = e);
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (l) throw i;
                  }
                }
                return a;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
              }
            })(e, t) ||
            (function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
          );
        }
        function u(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var d = (0, o.v)(window.MediaCMS),
          c = (0, r.createContext)(),
          p = function (e) {
            var t,
              n,
              o = e.children,
              u = (0, r.useContext)(l.default),
              p = new i.BrowserCache("MediaCMS[" + u.id + "][theme]", 86400),
              m = s((0, r.useState)(((t = p.get("mode")), (n = d.theme.mode), "light" === t || "dark" === t ? t : n)), 2),
              f = m[0],
              h = m[1],
              v = (function (e) {
                var t = null,
                  n = null;
                return (
                  void 0 !== e.darkMode && ((0, a.supportsSvgAsImg)() && void 0 !== e.darkMode.svg && "" !== e.darkMode.svg ? (n = e.darkMode.svg) : void 0 !== e.darkMode.img && "" !== e.darkMode.img && (n = e.darkMode.img)),
                  void 0 !== e.lightMode && ((0, a.supportsSvgAsImg)() && void 0 !== e.lightMode.svg && "" !== e.lightMode.svg ? (t = e.lightMode.svg) : void 0 !== e.lightMode.img && "" !== e.lightMode.img && (t = e.lightMode.img)),
                  (null === t && null === n) || (null === t ? (t = n) : null === n && (n = t)),
                  { light: t, dark: n }
                );
              })(d.theme.logo),
              y = s((0, r.useState)(v[f]), 2),
              g = y[0],
              b = y[1];
            (0, r.useEffect)(
              function () {
                "dark" === f ? (0, a.addClassname)(document.body, "dark_theme") : (0, a.removeClassname)(document.body, "dark_theme"), p.set("mode", f), b(v[f]);
              },
              [f]
            );
            var w = {
              logo: g,
              currentThemeMode: f,
              changeThemeMode: function () {
                h("light" === f ? "dark" : "light");
              },
              themeModeSwitcher: d.theme.switch,
            };
            return r.createElement(c.Provider, { value: w }, o);
          },
          m = c.Consumer;
      },
      4083: function (e, t, n) {
        n.r(t),
          n.d(t, {
            UserContext: function () {
              return a;
            },
            UserProvider: function () {
              return l;
            },
            UserConsumer: function () {
              return s;
            },
          });
        var r = n(5466),
          i = n(9479),
          a = (0, r.createContext)(),
          o = (0, i.v)(window.MediaCMS).member,
          l = function (e) {
            var t = e.children,
              n = { isAnonymous: o.is.anonymous, username: o.username, thumbnail: o.thumbnail, userCan: o.can, pages: o.pages };
            return r.createElement(a.Provider, { value: n }, t);
          },
          s = a.Consumer;
        t.default = a;
      },
      1454: function (e, t, n) {
        function r() {
          return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        }
        function i(e, t) {
          e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
        }
        function a(e, t) {
          e.classList ? e.classList.add(t) : (e.className += " " + t);
        }
        function o(e, t) {
          return e.className && new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className);
        }
        n.d(t, {
          Je: function () {
            return r;
          },
          dt: function () {
            return i;
          },
          Ec: function () {
            return a;
          },
          mO: function () {
            return o;
          },
          Wx: function () {
            return l;
          },
          U7: function () {
            return s;
          },
          Jj: function () {
            return u;
          },
        }),
          n(2322),
          n(3296),
          n(7390),
          n(4669),
          n(7441),
          n(9268),
          n(2070);
        var l = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
          s = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        function u() {
          var e = { document: { visibility: [] }, window: { resize: [], scroll: [] } };
          return (
            document.addEventListener("visibilitychange", function () {
              e.document.visibility.map(function (e) {
                return e();
              });
            }),
            window.addEventListener("resize", function () {
              e.window.resize.map(function (e) {
                return e();
              });
            }),
            window.addEventListener("scroll", function () {
              e.window.scroll.map(function (e) {
                return e();
              });
            }),
            {
              doc: function (t) {
                "function" == typeof t && e.document.visibility.push(t);
              },
              win: function (t, n) {
                "function" == typeof t && e.window.resize.push(t), "function" == typeof n && e.window.scroll.push(n);
              },
            }
          );
        }
      },
      473: function (e, t, n) {
        n.d(t, {
          BrowserEvents: function () {
            return r.Jj;
          },
          addClassname: function () {
            return r.Ec;
          },
          cancelAnimationFrame: function () {
            return r.Wx;
          },
          hasClassname: function () {
            return r.mO;
          },
          removeClassname: function () {
            return r.dt;
          },
          requestAnimationFrame: function () {
            return r.U7;
          },
          supportsSvgAsImg: function () {
            return r.Je;
          },
          logErrorAndReturnError: function () {
            return i.O;
          },
          logWarningAndReturnError: function () {
            return i.a;
          },
          exportStore: function () {
            return a.Z;
          },
          formatInnerLink: function () {
            return o.U;
          },
          formatViewsNumber: function () {
            return l.Z;
          },
          csrfToken: function () {
            return s.o;
          },
          greaterCommonDivision: function () {
            return u.$A;
          },
          isPositiveIntegerOrZero: function () {
            return u.ZU;
          },
          publishedOnDate: function () {
            return d.Z;
          },
          quickSort: function () {
            return c.U;
          },
          deleteRequest: function () {
            return p.Jl;
          },
          getRequest: function () {
            return p.A_;
          },
          postRequest: function () {
            return p.j0;
          },
          putRequest: function () {
            return p.GH;
          },
        });
        var r = n(1454),
          i = n(9039),
          a = n(9264),
          o = n(1397),
          l = n(705),
          s = n(1450),
          u = (n(2161), n(4646), n(408)),
          d = (n(5477), n(2276)),
          c = n(3803),
          p = n(447);
      },
      3899: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SidebarThemeSwitcher = void 0);
        var i = r(n(5466)),
          a = n(2546);
        t.SidebarThemeSwitcher = function () {
          var e = a.useTheme(),
            t = e.currentThemeMode,
            n = e.changeThemeMode,
            r = e.themeModeSwitcher;
          return (
            r.enabled &&
            "sidebar" === r.position &&
            i.default.createElement(
              "div",
              { className: "sidebar-theme-switcher" },
              i.default.createElement(
                "div",
                { className: "sidebar-theme-switcher-inner" },
                i.default.createElement("span", { className: "theme-icon" + ("dark" === t ? "" : " active") }, i.default.createElement("i", { className: "material-icons", "data-icon": "wb_sunny" })),
                i.default.createElement("span", null, i.default.createElement("span", { className: "checkbox-switcher" }, i.default.createElement("input", { type: "checkbox", checked: "dark" === t, onChange: n }))),
                i.default.createElement("span", { className: "theme-icon" + ("dark" === t ? " active" : "") }, i.default.createElement("i", { className: "material-icons", "data-icon": "brightness_3" }))
              )
            )
          );
        };
      },
      645: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
              return i(t, e), t;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EmbedPage = void 0);
        var l = a(n(5466)),
          s = n(3613),
          u = n(8578),
          d = n(541),
          c = o(n(1505)),
          p = { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "block" },
          m = { width: "100%", height: "100%" };
        t.EmbedPage = function () {
          var e = l.useState(!1),
            t = e[0],
            n = e[1],
            r = l.useState(!1),
            i = r[0],
            a = r[1],
            o = function () {
              n(!0);
            },
            f = function () {
              a(!0);
            };
          return (
            l.useEffect(function () {
              return (
                u.MediaPageStore.on("loaded_video_data", o),
                u.MediaPageStore.on("loaded_media_error", f),
                d.MediaPageActions.loadMediaData(),
                function () {
                  u.MediaPageStore.removeListener("loaded_video_data", o), u.MediaPageStore.removeListener("loaded_media_error", f);
                }
              );
            }, []),
            l.default.createElement(
              "div",
              { className: "embed-wrap", style: p },
              i &&
                l.default.createElement(
                  "div",
                  { className: "player-container player-container-error", style: m },
                  l.default.createElement(
                    "div",
                    { className: "player-container-inner", style: m },
                    l.default.createElement(
                      "div",
                      { className: "error-container" },
                      l.default.createElement(
                        "div",
                        { className: "error-container-inner" },
                        l.default.createElement("span", { className: "icon-wrap" }, l.default.createElement("i", { className: "material-icons" }, "error_outline")),
                        l.default.createElement("span", { className: "msg-wrap" }, u.MediaPageStore.get("media-load-error-message"))
                      )
                    )
                  )
                ),
              t &&
                l.default.createElement(s.SiteConsumer, null, function (e) {
                  return l.default.createElement(c.default, { data: u.MediaPageStore.get("media-data"), siteUrl: e.url, containerStyles: m });
                })
            )
          );
        };
      },
      541: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
              return i(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VideoViewerActions = t.SearchFieldActions = t.ProfilePageActions = t.PlaylistViewActions = t.PlaylistPageActions = t.PageActions = t.MediaPageActions = void 0),
          (t.MediaPageActions = a(n(979))),
          (t.PageActions = a(n(6613))),
          (t.PlaylistPageActions = a(n(5880))),
          (t.PlaylistViewActions = a(n(9660))),
          (t.ProfilePageActions = a(n(2472))),
          (t.SearchFieldActions = a(n(2600))),
          (t.VideoViewerActions = a(n(5464)));
      },
      9722: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), i(n(6123), t), i(n(2526), t), i(n(3039), t), i(n(8925), t);
      },
      3613: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), i(n(1853), t), i(n(2295), t), i(n(5063), t), i(n(6972), t), i(n(6626), t), i(n(5485), t), i(n(657), t), i(n(1744), t), i(n(1929), t), i(n(324), t), i(n(1394), t), i(n(4083), t);
      },
      8578: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.VideoViewerStore = t.SearchFieldStore = t.ProfilePageStore = t.PlaylistViewStore = t.PlaylistPageStore = t.PageStore = t.MediaPageStore = void 0);
        var i = r(n(337));
        t.MediaPageStore = i.default;
        var a = r(n(7959));
        t.PageStore = a.default;
        var o = r(n(1566));
        t.PlaylistPageStore = o.default;
        var l = r(n(1439));
        t.PlaylistViewStore = l.default;
        var s = r(n(8024));
        t.ProfilePageStore = s.default;
        var u = r(n(7359));
        t.SearchFieldStore = u.default;
        var d = r(n(5641));
        t.VideoViewerStore = d.default;
      },
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var a = (n[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = function (t, n, i, a) {
      if (!n) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          (n = e[u][0]), (i = e[u][1]), (a = e[u][2]);
          for (var l = !0, s = 0; s < n.length; s++)
            (!1 & a || o >= a) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](n[s]);
            })
              ? n.splice(s--, 1)
              : ((l = !1), a < o && (o = a));
          l && (e.splice(u--, 1), (t = i()));
        }
        return t;
      }
      a = a || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
      e[u] = [n, i, a];
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, { a: t }), t;
    }),
    (r.d = function (e, t) {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.j = 991),
    (function () {
      var e = { 991: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var i,
            a,
            o = n[0],
            l = n[1],
            s = n[2],
            u = 0;
          for (i in l) r.o(l, i) && (r.m[i] = l[i]);
          if (s) var d = s(r);
          for (t && t(n); u < o.length; u++) (a = o[u]), r.o(e, a) && e[a] && e[a][0](), (e[o[u]] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = r.O(void 0, [431], function () {
    return r(3170);
  });
  i = r.O(i);
})();
