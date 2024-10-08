!(function () {
  "use strict";
  var e,
    t = {
      7487: function (e, t, r) {
        var n = r(2541),
          i = r(4538);
        (0, n.X)("page-latest", i.LatestMediaPage);
      },
      8982: function (e, t, r) {
        r.d(t, {
          ItemListAsync: function () {
            return v;
          },
        }),
          r(2070),
          r(2004),
          r(8407),
          r(6394),
          r(8288),
          r(5677),
          r(2129),
          r(4655),
          r(288),
          r(4458),
          r(3675),
          r(4517),
          r(9751),
          r(8833),
          r(815),
          r(5090),
          r(9174);
        var n = r(5466),
          i = r(3074),
          o = r.n(i),
          a = r(2546),
          l = r(7777),
          u = r(2832),
          c = r(3632),
          s = r(8986);
        function f(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(r), !0).forEach(function (t) {
                  d(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function d(e, t, r) {
          return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        function m() {
          return (m =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function y(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function v(e) {
          var t,
            r,
            i =
              ((t = (0, a.useItemListSync)(e)),
              (r = 11),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, t) {
                  var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != r) {
                    var n,
                      i,
                      o = [],
                      a = !0,
                      l = !1;
                    try {
                      for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                    } catch (e) {
                      (l = !0), (i = e);
                    } finally {
                      try {
                        a || null == r.return || r.return();
                      } finally {
                        if (l) throw i;
                      }
                    }
                    return o;
                  }
                })(t, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0;
                  }
                })(t, r) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            o = i[0],
            l = i[1],
            f = i[2],
            p = i[3],
            d = i[4],
            v = i[5],
            b = i[6],
            g = i[7],
            O = i[8],
            h = i[9],
            w = i[10];
          return (
            (0, n.useEffect)(function () {
              return (
                p(new s.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, g, O)),
                function () {
                  f && (f.cancelAll(), p(null));
                }
              );
            }, []),
            o
              ? l.length
                ? n.createElement(
                    "div",
                    { className: d.listOuter },
                    h(),
                    n.createElement(
                      "div",
                      { ref: v, className: "items-list-wrap" },
                      n.createElement(
                        "div",
                        { ref: b, className: d.list },
                        l.map(function (t, r) {
                          return n.createElement(c.H, m({ key: r }, (0, c.j)(e, t, r)));
                        })
                      )
                    ),
                    w()
                  )
                : null
              : n.createElement(u.K, { className: d.listOuter })
          );
        }
        (v.propTypes = p(p({}, l.s.propTypes), {}, { items: o().array, requestUrl: o().string.isRequired, firstItemRequestUrl: o().string })),
          (v.defaultProps = p(p({}, l.s.defaultProps), {}, { requestUrl: null, firstItemRequestUrl: null, pageItems: 24 }));
      },
      824: function (e, t, r) {
        r.r(t),
          r.d(t, {
            LazyLoadItemListAsync: function () {
              return y;
            },
          }),
          r(2070),
          r(2004),
          r(8407),
          r(6394),
          r(8288),
          r(5677),
          r(2129),
          r(4655),
          r(288),
          r(4458),
          r(3675),
          r(4517),
          r(9751),
          r(8833),
          r(815),
          r(5090),
          r(9174);
        var n = r(5466),
          i = r(8578),
          o = r(2546),
          a = r(8982),
          l = r(2832),
          u = r(3632),
          c = r(8986);
        function s(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(r), !0).forEach(function (t) {
                  p(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function p(e, t, r) {
          return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        function d() {
          return (d =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function y(e) {
          var t,
            r,
            a =
              ((t = (0, o.useItemListLazyLoad)(e)),
              (r = 13),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, t) {
                  var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != r) {
                    var n,
                      i,
                      o = [],
                      a = !0,
                      l = !1;
                    try {
                      for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                    } catch (e) {
                      (l = !0), (i = e);
                    } finally {
                      try {
                        a || null == r.return || r.return();
                      } finally {
                        if (l) throw i;
                      }
                    }
                    return o;
                  }
                })(t, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0;
                  }
                })(t, r) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            s = a[0],
            f = a[1],
            p = a[2],
            y = a[3],
            v = a[4],
            b = a[5],
            g = a[6],
            O = a[7],
            h = a[8],
            w = a[9],
            j = a[10],
            P = a[11],
            S = a[12];
          return (
            (0, n.useEffect)(function () {
              return (
                y(new c.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, b, g)),
                i.PageStore.on("window_scroll", O),
                i.PageStore.on("document_visibility_change", h),
                O(),
                function () {
                  i.PageStore.removeListener("window_scroll", O), i.PageStore.removeListener("document_visibility_change", h), p && (p.cancelAll(), y(null));
                }
              );
            }, []),
            f
              ? s.length
                ? n.createElement(
                    "div",
                    { className: v.listOuter },
                    P(),
                    n.createElement(
                      "div",
                      { ref: w, className: "items-list-wrap" },
                      n.createElement(
                        "div",
                        { ref: j, className: v.list },
                        s.map(function (t, r) {
                          return n.createElement(u.H, d({ key: r }, (0, u.j)(e, t, r)));
                        })
                      )
                    ),
                    S()
                  )
                : null
              : n.createElement(l.K, { className: v.listOuter })
          );
        }
        (y.propTypes = f({}, a.ItemListAsync.propTypes)), (y.defaultProps = f(f({}, a.ItemListAsync.defaultProps), {}, { pageItems: 2 }));
      },
      5910: function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MediaListWrapper = void 0);
        var i = n(r(5466)),
          o = r(7180);
        r(3804),
          (t.MediaListWrapper = function (e) {
            var t = e.title,
              r = e.viewAllLink,
              n = e.viewAllText,
              a = e.className,
              l = e.style,
              u = e.children;
            return i.default.createElement("div", { className: (a ? a + " " : "") + "media-list-wrapper", style: l }, i.default.createElement(o.MediaListRow, { title: t, viewAllLink: r, viewAllText: n }, u || null));
          });
      },
      4538: function (e, t, r) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.LatestMediaPage = void 0);
        var i = n(r(5466)),
          o = r(3613),
          a = r(8578),
          l = r(5910),
          u = r(824),
          c = r(7637);
        t.LatestMediaPage = function (e) {
          var t = e.id,
            r = void 0 === t ? "latest-media" : t,
            n = e.title,
            s = void 0 === n ? a.PageStore.get("config-enabled").pages.latest.title : n;
          return i.default.createElement(
            c.Page,
            { id: r },
            i.default.createElement(o.ApiUrlConsumer, null, function (e) {
              return i.default.createElement(
                l.MediaListWrapper,
                { title: s, className: "items-list-ver" },
                i.default.createElement(u.LazyLoadItemListAsync, {
                  requestUrl: e.media,
                  hideViews: !a.PageStore.get("config-media-item").displayViews,
                  hideAuthor: !a.PageStore.get("config-media-item").displayAuthor,
                  hideDate: !a.PageStore.get("config-media-item").displayPublishDate,
                })
              );
            })
          );
        };
      },
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = function (t, r, i, o) {
      if (!r) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          (r = e[c][0]), (i = e[c][1]), (o = e[c][2]);
          for (var l = !0, u = 0; u < r.length; u++)
            (!1 & o || a >= o) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](r[u]);
            })
              ? r.splice(u--, 1)
              : ((l = !1), o < a && (a = o));
          l && (e.splice(c--, 1), (t = i()));
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [r, i, o];
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.j = 131),
    (function () {
      var e = { 131: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, r) {
          var i,
            o,
            a = r[0],
            l = r[1],
            u = r[2],
            c = 0;
          for (i in l) n.o(l, i) && (n.m[i] = l[i]);
          if (u) var s = u(n);
          for (t && t(r); c < a.length; c++) (o = a[c]), n.o(e, o) && e[o] && e[o][0](), (e[a[c]] = 0);
          return n.O(s);
        },
        r = (self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = n.O(void 0, [431], function () {
    return n(7487);
  });
  i = n.O(i);
})();
