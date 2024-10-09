!(function () {
  "use strict";
  var e,
    t = {
      8951: function (e, t, n) {
        var r = n(2541),
          i = (n(7441), n(5101), n(3080), n(2004), n(8407), n(6394), n(8288), n(5677), n(2129), n(4655), n(5466)),
          a = n(3074),
          l = n.n(a),
          o = n(3613),
          s = n(541),
          u = n(4234),
          c = n(5910),
          f = (n(288), n(4458), n(3675), n(8578));
        function d(e, t) {
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
                  l = !0,
                  o = !1;
                try {
                  for (n = n.call(e); !(l = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); l = !0);
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    l || null == n.return || n.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return a;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
              }
            })(e, t) ||
            (function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
          );
        }
        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var p = {
          state: [
            { id: "all", title: "All" },
            { id: "public", title: "Public" },
            { id: "private", title: "Private" },
            { id: "unlisted", title: "Unlisted" },
          ],
          media_type: [
            { id: "all", title: "All" },
            { id: "video", title: "Video" },
            { id: "audio", title: "Audio" },
            { id: "image", title: "Image" },
            { id: "pdf", title: "Pdf" },
          ],
          encoding_status: [
            { id: "all", title: "All" },
            { id: "success", title: "Success" },
            { id: "running", title: "Running" },
            { id: "pending", title: "Pending" },
            { id: "fail", title: "Fail" },
          ],
          reviewed: [
            { id: "all", title: "All" },
            { id: "true", title: "Yes" },
            { id: "false", title: "No" },
          ],
          featured: [
            { id: "all", title: "All" },
            { id: "true", title: "Yes" },
            { id: "false", title: "No" },
          ],
        };
        function g(e) {
          var t = d((0, i.useState)(e.hidden), 2),
            n = t[0],
            r = t[1],
            a = d((0, i.useState)("all"), 2),
            l = a[0],
            o = a[1],
            s = d((0, i.useState)("all"), 2),
            c = s[0],
            m = s[1],
            g = d((0, i.useState)("all"), 2),
            v = g[0],
            y = g[1],
            h = d((0, i.useState)("all"), 2),
            b = h[0],
            E = h[1],
            S = d((0, i.useState)("all"), 2),
            k = S[0],
            C = S[1],
            A = (0, i.useRef)(null),
            N = (0, i.useRef)(null);
          function O() {
            n || (A.current.style.height = 24 + N.current.offsetHeight + "px");
          }
          function P(t) {
            var n = { state: l, media_type: c, encoding_status: v, featured: b, is_reviewed: k };
            switch (t.currentTarget.getAttribute("filter")) {
              case "state":
                (n.state = t.currentTarget.getAttribute("value")), e.onFiltersUpdate(n), o(n.state);
                break;
              case "media_type":
                (n.media_type = t.currentTarget.getAttribute("value")), e.onFiltersUpdate(n), m(n.media_type);
                break;
              case "encoding_status":
                (n.encoding_status = t.currentTarget.getAttribute("value")), e.onFiltersUpdate(n), y(n.encoding_status);
                break;
              case "featured":
                (n.featured = t.currentTarget.getAttribute("value")), e.onFiltersUpdate(n), E(n.featured);
                break;
              case "reviewed":
                (n.is_reviewed = t.currentTarget.getAttribute("value")), e.onFiltersUpdate(n), C(n.is_reviewed);
            }
          }
          return (
            (0, i.useEffect)(
              function () {
                r(e.hidden), O();
              },
              [e.hidden]
            ),
            (0, i.useEffect)(function () {
              return (
                f.PageStore.on("window_resize", O),
                function () {
                  return f.PageStore.removeListener("window_resize", O);
                }
              );
            }, []),
            i.createElement(
              "div",
              { ref: A, className: "mi-filters-row" + (n ? " hidden" : "") },
              i.createElement(
                "div",
                { ref: N, className: "mi-filters-row-inner" },
                i.createElement(
                  "div",
                  { className: "mi-filter" },
                  i.createElement("div", { className: "mi-filter-title" }, "STATE"),
                  i.createElement("div", { className: "mi-filter-options" }, i.createElement(u.FilterOptions, { id: "state", options: p.state, selected: l, onSelect: P }))
                ),
                i.createElement(
                  "div",
                  { className: "mi-filter" },
                  i.createElement("div", { className: "mi-filter-title" }, "MEDIA TYPE"),
                  i.createElement("div", { className: "mi-filter-options" }, i.createElement(u.FilterOptions, { id: "media_type", options: p.media_type, selected: c, onSelect: P }))
                ),
                i.createElement(
                  "div",
                  { className: "mi-filter" },
                  i.createElement("div", { className: "mi-filter-title" }, "ENCODING STATUS"),
                  i.createElement("div", { className: "mi-filter-options" }, i.createElement(u.FilterOptions, { id: "encoding_status", options: p.encoding_status, selected: v, onSelect: P }))
                ),
                i.createElement(
                  "div",
                  { className: "mi-filter" },
                  i.createElement("div", { className: "mi-filter-title" }, "REVIEWED"),
                  i.createElement("div", { className: "mi-filter-options" }, i.createElement(u.FilterOptions, { id: "reviewed", options: p.reviewed, selected: k, onSelect: P }))
                ),
                i.createElement(
                  "div",
                  { className: "mi-filter" },
                  i.createElement("div", { className: "mi-filter-title" }, "FEATURED"),
                  i.createElement("div", { className: "mi-filter-options" }, i.createElement(u.FilterOptions, { id: "featured", options: p.featured, selected: b, onSelect: P }))
                )
              )
            )
          );
        }
        (g.propTypes = { hidden: l().bool }), (g.defaultProps = { hidden: !1 });
        var v = n(9700);
        function y(e) {
          return (y =
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
        function b(e, t) {
          return (b =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function E(e, t) {
          return !t || ("object" !== y(t) && "function" != typeof t) ? S(e) : t;
        }
        function S(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function k(e) {
          return (k = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function C(e, t, n, r) {
          return e + "?" + t + ("" === t ? "" : "&") + n + ("" === n ? "" : "&") + "page=" + r;
        }
        var A = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && b(e, t);
          })(f, e);
          var t,
            n,
            r,
            a,
            l =
              ((r = f),
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
                  t = k(r);
                if (a) {
                  var n = k(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return E(this, e);
              });
          function f(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, f),
              ((t = l.call(this, e, "manage-media")).state = {
                resultsCount: null,
                currentPage: 1,
                requestUrl: o.ApiUrlContext._currentValue.manage.media,
                pageTitle: e.title,
                hiddenFilters: !0,
                filterArgs: "",
                sortingArgs: "",
                sortBy: "add_date",
                ordering: "desc",
                refresh: 0,
              }),
              (t.getCountFunc = t.getCountFunc.bind(S(t))),
              (t.onTablePageChange = t.onTablePageChange.bind(S(t))),
              (t.onToggleFiltersClick = t.onToggleFiltersClick.bind(S(t))),
              (t.onFiltersUpdate = t.onFiltersUpdate.bind(S(t))),
              (t.onColumnSortClick = t.onColumnSortClick.bind(S(t))),
              (t.onItemsRemoval = t.onItemsRemoval.bind(S(t))),
              (t.onItemsRemovalFail = t.onItemsRemovalFail.bind(S(t))),
              t
            );
          }
          return (
            (t = f),
            (n = [
              {
                key: "onTablePageChange",
                value: function (e, t) {
                  this.setState({ currentPage: t, requestUrl: C(o.ApiUrlContext._currentValue.manage.media, this.state.filterArgs, this.state.sortingArgs, t) });
                },
              },
              {
                key: "onToggleFiltersClick",
                value: function () {
                  this.setState({ hiddenFilters: !this.state.hiddenFilters });
                },
              },
              {
                key: "getCountFunc",
                value: function (e) {
                  this.setState({ resultsCount: e, pageTitle: this.state.pageTitle });
                },
              },
              {
                key: "onFiltersUpdate",
                value: function (e) {
                  var t = [];
                  for (var n in e) null !== e[n] && "all" !== e[n] && t.push(n + "=" + e[n]);
                  this.setState({ filterArgs: t.join("&"), requestUrl: C(o.ApiUrlContext._currentValue.manage.media, t.join("&"), this.state.sortingArgs, this.state.currentPage) });
                },
              },
              {
                key: "onColumnSortClick",
                value: function (e, t) {
                  var n = "sort_by=" + e + "&ordering=" + t;
                  this.setState({ sortBy: e, ordering: t, sortingArgs: n, requestUrl: C(o.ApiUrlContext._currentValue.manage.media, this.state.filterArgs, n, this.state.currentPage) });
                },
              },
              {
                key: "onItemsRemoval",
                value: function (e) {
                  this.setState({ resultsCount: null, refresh: this.state.refresh + 1, requestUrl: o.ApiUrlContext._currentValue.manage.media }, function () {
                    s.PageActions.addNotification("The media deleted successfully.", "mediaRemovalSucceed");
                  });
                },
              },
              {
                key: "onItemsRemovalFail",
                value: function (e) {
                  s.PageActions.addNotification("The media removal failed. Please try again.", "mediaRemovalFailed");
                },
              },
              {
                key: "pageContent",
                value: function () {
                  return i.createElement(
                    c.MediaListWrapper,
                    { title: this.state.pageTitle + (null === this.state.resultsCount ? "" : " (" + this.state.resultsCount + ")"), className: "" },
                    i.createElement(u.FiltersToggleButton, { onClick: this.onToggleFiltersClick }),
                    i.createElement(g, { hidden: this.state.hiddenFilters, onFiltersUpdate: this.onFiltersUpdate }),
                    i.createElement(v.d, {
                      pageItems: 50,
                      manageType: "media",
                      key: this.state.requestUrl + "[" + this.state.refresh + "]",
                      requestUrl: this.state.requestUrl,
                      itemsCountCallback: this.getCountFunc,
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
            ]) && h(t.prototype, n),
            f
          );
        })(n(8204).T);
        (A.propTypes = { title: l().string.isRequired }), (A.defaultProps = { title: "Manage media" }), (0, r.X)("page-manage-media", A);
      },
      7714: function (e, t, n) {
        n.d(t, {
          M: function () {
            return o;
          },
        }),
          n(4517);
        var r = n(5466),
          i = n(3074),
          a = n.n(i);
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
        function o(e) {
          var t = r.createElement("span", null, r.createElement("span", null, e.children)),
            n = { tabIndex: e.tabIndex || null, title: e.title || null, className: "circle-icon-button" + (void 0 !== e.className ? " " + e.className : "") + (e.buttonShadow ? " button-shadow" : "") };
          return (
            void 0 !== e["data-page-id"] && (n["data-page-id"] = e["data-page-id"]),
            void 0 !== e["aria-label"] && (n["aria-label"] = e["aria-label"]),
            "link" === e.type
              ? r.createElement("a", l({}, n, { href: e.href || null, rel: e.rel || null }), t)
              : "span" === e.type
              ? r.createElement("span", l({}, n, { onClick: e.onClick || null }), t)
              : r.createElement("button", l({}, n, { onClick: e.onClick || null }), t)
          );
        }
        (o.propTypes = { type: a().oneOf(["button", "link", "span"]), buttonShadow: a().bool, className: a().string }), (o.defaultProps = { type: "button", buttonShadow: !1 });
      },
      7446: function (e, t, n) {
        n.d(t, {
          j: function () {
            return o;
          },
        }),
          n(2070);
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          l = n(2299);
        function o(e) {
          return e.options.map(function (t) {
            return r.createElement(
              "div",
              { key: t.id, className: t.id === e.selected ? "active" : "" },
              r.createElement("button", { onClick: e.onSelect, filter: e.id, value: t.id }, r.createElement("span", null, t.title), t.id === e.selected ? r.createElement(l.O, { type: "close" }) : null)
            );
          });
        }
        o.propTypes = { id: a().string.isRequired, selected: a().string.isRequired, onSelect: a().func.isRequired };
      },
      2915: function (e, t, n) {
        n.d(t, {
          _: function () {
            return s;
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
          i = n(3074),
          a = n.n(i),
          l = n(2299);
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function s(e) {
          var t,
            n,
            i =
              ((t = (0, r.useState)(e.active)),
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
                      l = !0,
                      o = !1;
                    try {
                      for (n = n.call(e); !(l = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); l = !0);
                    } catch (e) {
                      (o = !0), (i = e);
                    } finally {
                      try {
                        l || null == n.return || n.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return a;
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            a = i[0],
            s = i[1];
          return r.createElement(
            "div",
            { className: "mi-filters-toggle" },
            r.createElement(
              "button",
              {
                className: a ? "active" : "",
                "aria-label": "Filter",
                onClick: function () {
                  s(!a), void 0 !== e.onClick && e.onClick();
                },
              },
              r.createElement(l.O, { type: "filter_list" }),
              r.createElement("span", { className: "filter-button-label" }, r.createElement("span", { className: "filter-button-label-text" }, "FILTERS"))
            )
          );
        }
        (s.propTypes = { onClick: a().func, active: a().bool }), (s.defaultProps = { active: !1 });
      },
      4234: function (e, t, n) {
        n.d(t, {
          CircleIconButton: function () {
            return r.M;
          },
          FilterOptions: function () {
            return i.j;
          },
          FiltersToggleButton: function () {
            return a._;
          },
          MaterialIcon: function () {
            return l.O;
          },
          NavigationContentApp: function () {
            return o.o;
          },
          NavigationMenuList: function () {
            return s.S;
          },
          Notifications: function () {
            return u.T;
          },
          PopupMain: function () {
            return c.W8;
          },
          PopupTop: function () {
            return c.HF;
          },
          SpinnerLoader: function () {
            return f.i;
          },
          UserThumbnail: function () {
            return d.q;
          },
        });
        var r = n(7714),
          i = n(7446),
          a = n(2915),
          l = n(2299),
          o = n(2917),
          s = n(5671),
          u = n(2436),
          c = (n(5517), n(940)),
          f = n(6309),
          d = n(6142);
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
        n.d(t, {
          o: function () {
            return s;
          },
        }),
          n(3233),
          n(9751),
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
          i = n(6116),
          a = n(3074),
          l = n.n(a);
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function s(e) {
          var t,
            n,
            a = (0, r.useRef)(null),
            l =
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
                      l = !0,
                      o = !1;
                    try {
                      for (n = n.call(e); !(l = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); l = !0);
                    } catch (e) {
                      (o = !0), (i = e);
                    } finally {
                      try {
                        l || null == n.return || n.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return a;
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()),
            s = l[0],
            u = l[1],
            c = [];
          function f(t, n) {
            var r;
            n.preventDefault(), n.stopPropagation(), (r = c[t].id), void 0 !== e.pages[r] && u(r);
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
                  for (var e = 0; e < c.length; ) c[e].elem.removeEventListener("click", c[e].listener), (e += 1);
                  c = [];
                })(),
                  s &&
                    ((function () {
                      var t,
                        n,
                        r = (0, i.findDOMNode)(a.current),
                        l = r.querySelectorAll(e.pageChangeSelector);
                      if (l.length)
                        for (t = 0; t < l.length; )
                          (n = (n = l[t].getAttribute(e.pageIdSelectorAttr)) ? n.trim() : n) &&
                            ((c[t] = { id: n, elem: l[t] }),
                            (c[t].listener = (function (e) {
                              return function (t) {
                                return f(e, t);
                              };
                            })(t)),
                            c[t].elem.addEventListener("click", c[t].listener)),
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
        (s.propTypes = { initPage: l().string, pages: l().object.isRequired, pageChangeSelector: l().string.isRequired, pageIdSelectorAttr: l().string.isRequired, focusFirstItemOnPageChange: l().bool, pageChangeCallback: l().func }),
          (s.defaultProps = { focusFirstItemOnPageChange: !0 });
      },
      5671: function (e, t, n) {
        n.d(t, {
          S: function () {
            return u;
          },
        }),
          n(9808),
          n(3233),
          n(2070),
          n(4517);
        var r = n(5466),
          i = n(3074),
          a = n.n(i),
          l = n(2299);
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
        function s(e) {
          var t = [],
            n = e.itemAttr || {};
          void 0 === n.className ? (n.className = "") : n.className && (n.className += " ");
          var i = e.text ? (e.icon && "right" !== e.iconPos ? 1 : 0) : -1,
            a = e.icon ? (e.text && "right" === e.iconPos ? 1 : 0) : -1;
          switch (
            (-1 < i && (t[i] = r.createElement("span", { key: "Text" }, e.text)),
            -1 < a && (t[a] = r.createElement("span", { key: "Icon", className: "right" === e.iconPos ? "menu-item-icon-right" : "menu-item-icon" }, r.createElement(l.O, { type: e.icon }))),
            e.itemType)
          ) {
            case "link":
              (t = r.createElement("a", o({}, e.linkAttr || {}, { href: e.link, title: e.text || null }), t)), (n.className += "link-item" + (e.active ? " active" : ""));
              break;
            case "button":
            case "open-subpage":
              t = r.createElement("button", o({}, e.buttonAttr || {}, { key: "button" }), t);
              break;
            case "label":
              (t = r.createElement("button", o({}, e.buttonAttr || {}, { key: "button" }), r.createElement("span", null, e.text || null))), (n.className = "label-item");
              break;
            case "div":
              t = r.createElement("div", o({}, e.divAttr || {}, { key: "div" }), e.text || null);
          }
          return "" !== n.className && (n.className = " " + n.className), (n.className = n.className.trim()), r.createElement("li", n, t);
        }
        function u(e) {
          var t = e.items.map(function (e, t) {
            return r.createElement(s, o({ key: t }, e));
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
        n.d(t, {
          HF: function () {
            return a;
          },
          W8: function () {
            return l;
          },
        });
        var r = n(5466),
          i = r.forwardRef(function (e, t) {
            return void 0 !== e.children ? r.createElement("div", { ref: t, className: "popup" + (void 0 !== e.className ? " " + e.className : ""), style: e.style }, e.children) : null;
          });
        function a(e) {
          return void 0 !== e.children ? r.createElement("div", { className: "popup-top" + (void 0 !== e.className ? " " + e.className : ""), style: e.style }, e.children) : null;
        }
        function l(e) {
          return void 0 !== e.children ? r.createElement("div", { className: "popup-main" + (void 0 !== e.className ? " " + e.className : ""), style: e.style }, e.children) : null;
        }
        t.ZP = i;
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
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          (n = e[u][0]), (i = e[u][1]), (a = e[u][2]);
          for (var o = !0, s = 0; s < n.length; s++)
            (!1 & a || l >= a) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](n[s]);
            })
              ? n.splice(s--, 1)
              : ((o = !1), a < l && (l = a));
          o && (e.splice(u--, 1), (t = i()));
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
    (r.j = 441),
    (function () {
      var e = { 441: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var i,
            a,
            l = n[0],
            o = n[1],
            s = n[2],
            u = 0;
          for (i in o) r.o(o, i) && (r.m[i] = o[i]);
          if (s) var c = s(r);
          for (t && t(n); u < l.length; u++) (a = l[u]), r.o(e, a) && e[a] && e[a][0](), (e[l[u]] = 0);
          return r.O(c);
        },
        n = (self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = r.O(void 0, [431], function () {
    return r(8951);
  });
  i = r.O(i);
})();
