!(function () {
  "use strict";
  var t,
    e = {
      5381: function (t, e, n) {
        var r = n(2541),
          o = (n(5101), n(3080), n(2004), n(8407), n(6394), n(8288), n(5677), n(2129), n(4655), n(5466)),
          i = n(3074),
          u = n.n(i),
          a = n(3613),
          c = n(541),
          l = n(5910),
          s = n(9700);
        function f(t) {
          return (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
        }
        function m(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function p(t, e) {
          return (p =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function y(t, e) {
          return !e || ("object" !== f(e) && "function" != typeof e) ? b(t) : e;
        }
        function b(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function d(t) {
          return (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function h(t, e, n) {
          return t + "?" + e + ("" === e ? "" : "&") + "page=" + n;
        }
        var g = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && p(t, e);
          })(f, t);
          var e,
            n,
            r,
            i,
            u =
              ((r = f),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = d(r);
                if (i) {
                  var n = d(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return y(this, t);
              });
          function f(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, f),
              ((e = u.call(this, t, "manage-comments")).state = { resultsCount: null, requestUrl: a.ApiUrlContext._currentValue.manage.comments, currentPage: 1, sortingArgs: "", sortBy: "add_date", ordering: "desc", refresh: 0 }),
              (e.getCountFunc = e.getCountFunc.bind(b(e))),
              (e.onTablePageChange = e.onTablePageChange.bind(b(e))),
              (e.onColumnSortClick = e.onColumnSortClick.bind(b(e))),
              (e.onItemsRemoval = e.onItemsRemoval.bind(b(e))),
              (e.onItemsRemovalFail = e.onItemsRemovalFail.bind(b(e))),
              e
            );
          }
          return (
            (e = f),
            (n = [
              {
                key: "onTablePageChange",
                value: function (t, e) {
                  this.setState({ currentPage: e, requestUrl: h(a.ApiUrlContext._currentValue.manage.comments, this.state.sortingArgs, e) });
                },
              },
              {
                key: "getCountFunc",
                value: function (t) {
                  this.setState({ resultsCount: t });
                },
              },
              {
                key: "onColumnSortClick",
                value: function (t, e) {
                  var n = "sort_by=" + t + "&ordering=" + e;
                  this.setState({ sortBy: t, ordering: e, sortingArgs: n, requestUrl: h(a.ApiUrlContext._currentValue.manage.comments, n, this.state.currentPage) });
                },
              },
              {
                key: "onItemsRemoval",
                value: function (t) {
                  this.setState({ resultsCount: null, refresh: this.state.refresh + 1, requestUrl: a.ApiUrlContext._currentValue.manage.comments }, function () {
                    t ? c.PageActions.addNotification("The comments deleted successfully.", "commentsRemovalSucceed") : c.PageActions.addNotification("The comment deleted successfully.", "commentRemovalSucceed");
                  });
                },
              },
              {
                key: "onItemsRemovalFail",
                value: function (t) {
                  t ? c.PageActions.addNotification("The comments removal failed. Please try again.", "commentsRemovalFailed") : c.PageActions.addNotification("The comment removal failed. Please try again.", "commentRemovalFailed");
                },
              },
              {
                key: "pageContent",
                value: function () {
                  return o.createElement(
                    l.MediaListWrapper,
                    { title: this.props.title + (null === this.state.resultsCount ? "" : " (" + this.state.resultsCount + ")"), className: "search-results-wrap items-list-hor" },
                    o.createElement(s.d, {
                      pageItems: 50,
                      manageType: "comments",
                      key: this.state.requestUrl + "[" + this.state.refresh + "]",
                      itemsCountCallback: this.getCountFunc,
                      requestUrl: this.state.requestUrl,
                      onPageChange: this.onTablePageChange,
                      sortBy: this.state.sortBy,
                      ordering: this.state.ordering,
                      onRowsDelete: this.onItemsRemoval,
                      onRowsDeleteFail: this.onItemsRemovalFail,
                      onClickColumnSort: this.onColumnSortClick,
                    })
                  );
                },
              },
            ]) && m(e.prototype, n),
            f
          );
        })(n(8204).T);
        (g.propTypes = { title: u().string.isRequired }), (g.defaultProps = { title: "Manage comments" }), (0, r.X)("page-manage-comments", g);
      },
      7446: function (t, e, n) {
        n(2070), n(5466);
        var r = n(3074),
          o = n.n(r);
        n(2299), o().string.isRequired, o().string.isRequired, o().func.isRequired;
      },
      2915: function (t, e, n) {
        n(2004), n(8407), n(6394), n(8288), n(5677), n(2129), n(4655), n(288), n(4458), n(3675);
        var r = n(5466),
          o = n(3074),
          i = n.n(o),
          u = n(2299);
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function c(t) {
          var e,
            n,
            o =
              ((e = (0, r.useState)(t.active)),
              (n = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(e) ||
                (function (t, e) {
                  var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      i = [],
                      u = !0,
                      a = !1;
                    try {
                      for (n = n.call(t); !(u = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); u = !0);
                    } catch (t) {
                      (a = !0), (o = t);
                    } finally {
                      try {
                        u || null == n.return || n.return();
                      } finally {
                        if (a) throw o;
                      }
                    }
                    return i;
                  }
                })(e, n) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
                  }
                })(e, n) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            i = o[0],
            c = o[1];
          return r.createElement(
            "div",
            { className: "mi-filters-toggle" },
            r.createElement(
              "button",
              {
                className: i ? "active" : "",
                "aria-label": "Filter",
                onClick: function () {
                  c(!i), void 0 !== t.onClick && t.onClick();
                },
              },
              r.createElement(u.O, { type: "filter_list" }),
              r.createElement("span", { className: "filter-button-label" }, r.createElement("span", { className: "filter-button-label-text" }, "FILTERS"))
            )
          );
        }
        (c.propTypes = { onClick: i().func, active: i().bool }), (c.defaultProps = { active: !1 });
      },
      4234: function (t, e, n) {
        n.d(e, {
          CircleIconButton: function () {
            return r.M;
          },
          MaterialIcon: function () {
            return o.O;
          },
          NavigationContentApp: function () {
            return i.o;
          },
          NavigationMenuList: function () {
            return u.S;
          },
          Notifications: function () {
            return a.T;
          },
          PopupMain: function () {
            return c.W8;
          },
          PopupTop: function () {
            return c.HF;
          },
          SpinnerLoader: function () {
            return l.i;
          },
          UserThumbnail: function () {
            return s.q;
          },
        });
        var r = n(7714),
          o = (n(7446), n(2915), n(2299)),
          i = n(2917),
          u = n(5671),
          a = n(2436),
          c = (n(5517), n(940)),
          l = n(6309),
          s = n(6142);
      },
      6191: function (t, e, n) {
        n.d(e, {
          PageHeader: function () {
            return r.m;
          },
          PageMain: function () {
            return o.r;
          },
          PageSidebar: function () {
            return i.$;
          },
        });
        var r = n(6006),
          o = n(9198),
          i = n(2947);
        n(1542);
      },
      8204: function (t, e, n) {
        n.d(e, {
          T: function () {
            return m;
          },
        }),
          n(5101),
          n(3080),
          n(2004),
          n(8407),
          n(6394),
          n(8288),
          n(5677),
          n(2129),
          n(4655);
        var r = n(5466),
          o = n(541),
          i = n(6191),
          u = n(4234);
        function a(t) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
        }
        function c(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function l(t, e) {
          return (l =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function s(t, e) {
          return !e || ("object" !== a(e) && "function" != typeof e)
            ? (function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              })(t)
            : e;
        }
        function f(t) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var m = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
          })(y, t);
          var e,
            n,
            a,
            m,
            p =
              ((a = y),
              (m = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = f(a);
                if (m) {
                  var n = f(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return s(this, t);
              });
          function y(t, e) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, y),
              (n = p.call(this, t)),
              void 0 !== e && o.PageActions.initPage(e),
              n
            );
          }
          return (
            (e = y),
            (n = [
              {
                key: "render",
                value: function () {
                  return r.createElement(r.Fragment, null, r.createElement(i.PageMain, null, this.pageContent()), r.createElement(u.Notifications, null));
                },
              },
            ]) && c(e.prototype, n),
            y
          );
        })(r.PureComponent);
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var i = (n[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.m = e),
    (t = []),
    (r.O = function (e, n, o, i) {
      if (!n) {
        var u = 1 / 0;
        for (l = 0; l < t.length; l++) {
          (n = t[l][0]), (o = t[l][1]), (i = t[l][2]);
          for (var a = !0, c = 0; c < n.length; c++)
            (!1 & i || u >= i) &&
            Object.keys(r.O).every(function (t) {
              return r.O[t](n[c]);
            })
              ? n.splice(c--, 1)
              : ((a = !1), i < u && (u = i));
          a && (t.splice(l--, 1), (e = o()));
        }
        return e;
      }
      i = i || 0;
      for (var l = t.length; l > 0 && t[l - 1][2] > i; l--) t[l] = t[l - 1];
      t[l] = [n, o, i];
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, { a: e }), e;
    }),
    (r.d = function (t, e) {
      for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.j = 800),
    (function () {
      var t = { 800: 0 };
      r.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, n) {
          var o,
            i,
            u = n[0],
            a = n[1],
            c = n[2],
            l = 0;
          for (o in a) r.o(a, o) && (r.m[o] = a[o]);
          if (c) var s = c(r);
          for (e && e(n); l < u.length; l++) (i = u[l]), r.o(t, i) && t[i] && t[i][0](), (t[u[l]] = 0);
          return r.O(s);
        },
        n = (self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [431], function () {
    return r(5381);
  });
  o = r.O(o);
})();
