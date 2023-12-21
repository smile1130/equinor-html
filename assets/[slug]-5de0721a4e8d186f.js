(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [434],
  {
    8287: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return O;
          },
          default: function () {
            return L;
          },
        });
      a(7476), a(5767), a(8837), a(4882), a(4336), a(8351), a(7470), a(8388);
      var r = a(930),
        i = a.n(r),
        n = (a(1822), a(3092)),
        c = a(4184),
        s = a.n(c),
        o = a(4298),
        l = a(7294),
        d = a(5682),
        u = a(1870),
        h = a(4824),
        g = a(8386),
        p = a(3227),
        f = a.n(p),
        _ = a(8361),
        j = a.n(_),
        x = "700px",
        m = ["resize", "orientationchange"],
        b = (function () {
          function e(t) {
            f()(this, e),
              i()(this, "containerID", void 0),
              (this.containerID = t),
              this.pageIsInfographic() &&
                (this.resize(97, 117, x), this.addResizeListeners());
          }
          return (
            j()(e, [
              {
                key: "resize",
                value: function (e, t, a) {
                  var r = document.querySelector(this.containerID);
                  r &&
                    ((document.body.style.overflow = "hidden"),
                    window.matchMedia("(max-width: ".concat(a, ")")).matches
                      ? (r.style.height = "".concat(
                          window.innerHeight - t,
                          "px"
                        ))
                      : (r.style.height = "".concat(
                          window.innerHeight - e,
                          "px"
                        )));
                },
              },
              {
                key: "pageIsInfographic",
                value: function () {
                  return (
                    !!document.querySelector(this.containerID) ||
                    ((document.body.style.overflow = "auto"), !1)
                  );
                },
              },
              {
                key: "addResizeListeners",
                value: function () {
                  var e = this;
                  m.forEach(function (t) {
                    window.addEventListener(t, function () {
                      e.resize(97, 117, x);
                    });
                  });
                },
              },
            ]),
            e
          );
        })(),
        w = a(9747),
        v = a.n(w),
        y = a(5893),
        D = function (e) {
          (0, l.useEffect)(function () {
            new b("#photo-essay");
          });
          var t = e.articleData.title;
          return (0, y.jsx)("div", {
            className: v().iframeContainer,
            children: (0, y.jsx)("iframe", {
              title: t,
              src: "https://equinor.alphagridinfographics.com/",
              className: v().iframe,
              id: "photo-essay",
            }),
          });
        },
        k = a(606),
        I = a.n(k),
        C = function (e) {
          var t = e.isLoaded,
            a = e.children;
          return (0, y.jsxs)("div", {
            className: I().infographicContainer,
            id: "infographic-container",
            children: [
              !t &&
                (0, y.jsx)("div", {
                  className: I().loading,
                  children: (0, y.jsx)("p", { children: "Loading.." }),
                }),
              (0, y.jsx)("div", {
                className: s()(I().infographicWrapper, t ? I().loaded : ""),
                children: a,
              }),
            ],
          });
        },
        N = a(4353),
        P = a(1183),
        q = a.n(P);
      function A(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(a), !0).forEach(function (t) {
                i()(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : A(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var O = !0,
        L = function (e) {
          var t = (0, l.useRef)(null),
            a = (0, l.useRef)(null);
          (0, l.useEffect)(function () {
            var e = setInterval(function () {
              ((t.current && t.current.childElementCount > 0) ||
                (a.current &&
                  a.current.querySelector("#___gatsby").childElementCount >
                    0)) &&
                (c(!0), clearInterval(e), window.scrollTo(0, 0));
            }, 100);
            return function () {
              clearInterval(e);
            };
          }, []),
            (0, l.useEffect)(
              function () {
                setTimeout(function () {
                  window.scrollTo(0, 0);
                }, 0);
              },
              [e]
            );
          var r = (0, l.useState)(!1),
            i = r[0],
            c = r[1],
            p = JSON.stringify(e),
            f = JSON.parse(p);
          C();
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(g.x, { isIframeContent: !0 }),
              (0, y.jsx)("p", {
                className: s()(q().articleDate, q().light),
                children: (0, h.p)(f.articleData.publishDate),
              }),
              (0, y.jsx)(C, {
                isLoaded: i,
                children: (0, y.jsx)("div", {
                  ref: t,
                  id: "ag-infographic",
                }),
              }),
              (0, y.jsx)(N.P, {
                articleData: f.articleData,
                relatedPosts: f.relatedPosts,
              }),
            ],
          });
        };
    },
    4824: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return r;
        },
      });
      var r = function (e) {
        var t = new Date(e),
          a = t.toLocaleString("en-US", { month: "long" }),
          r = t.getFullYear();
        return "".concat(a, " ").concat(r);
      };
    },
    8386: function (e, t, a) {
      "use strict";
      a.d(t, {
        x: function () {
          return l;
        },
      });
      var r = a(4184),
        i = a.n(r),
        n = a(1664),
        c = (a(7294), a(2008)),
        s = a.n(c),
        o = a(5893),
        l = function (e) {
          var t = e.title,
            a = e.isIframeContent;
          return (0, o.jsx)(n.default, {
            href: "/",
            children: (0, o.jsxs)("a", {
              className: i()(s().btn, s().backButton),
              onClick: function () {
                return a ? (document.body.style.overflow = "auto") : null;
              },
              children: [
                (0, o.jsx)("img", {
                  alt: "back button arrow",
                  className: s().backArrow,
                  width: "20",
                  height: "20",
                  src: "/images/shared/back-arrow-white.svg",
                }),
                (0, o.jsx)("p", {
                  "data-gadl": "Internal click|Click - Back to hub",
                  "data-trackable": "read-article",
                  "data-o-event":
                    "category:cta|action:click|button:back-to-hub-from-".concat(
                      t
                    ),
                  children: "Back to hub",
                }),
              ],
            }),
          });
        };
    },
    2351: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = a(930),
        i = a.n(r),
        n = a(4184),
        c = a.n(n),
        s = "(min-width: 576px)",
        o = a(7279),
        l = a(7292),
        d = a.n(l),
        u = a(5893),
        h = function (e) {
          var t = e.title,
            a = e.type,
            r = e.slug,
            n = e.previewImage,
            l = (e.currentArticle, e.fixedMargin);
          return (0, u.jsxs)("a", {
            href: "/".concat(a, "s/").concat(r),
            className: c()(d().card, i()({}, d().fixedMarginCard, l)),
            "data-gadl":
              "WIP-CARD Internal click|Click - Related Article - ".concat(t),
            children: [
              (0, u.jsx)("div", {
                className: d().card__imageContainer,
                children: (0, u.jsx)(o.f, {
                  className: d().card__image,
                  width: 640,
                  height: 374,
                  sizes: "".concat(s, " 50vw, 90vw"),
                  src: n,
                  alt: "Preview of article ".concat(
                    t || "on Equinor's projects."
                  ),
                  loading: "lazy",
                }),
              }),
              (0, u.jsxs)("div", {
                className: d().card__textContainer,
                "data-gadl": "Internal click|Click - Related Article - ".concat(
                  t
                ),
                children: [
                  (0, u.jsx)("h3", { className: d().card__title, children: t }),
                  (0, u.jsxs)("div", {
                    className: d().card__arrow,
                    children: [
                      (0, u.jsx)("div", {
                        className: c()(d().line, d().line1),
                      }),
                      (0, u.jsx)("div", {
                        className: c()(d().line, d().line2),
                      }),
                      (0, u.jsx)("div", {
                        className: c()(d().line, d().line3),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    7279: function (e, t, a) {
      "use strict";
      a.d(t, {
        f: function () {
          return l;
        },
      });
      var r = a(4184),
        i = a.n(r),
        n = a(5675),
        c = a(8658),
        s = a.n(c),
        o = a(5893),
        l = function (e) {
          var t = e.src,
            a = e.layout,
            r = void 0 === a ? "responsive" : a,
            c = e.width,
            l = e.height,
            d = e.sizes,
            u = e.className,
            h = e.alt,
            g = e.id,
            p = e.loading,
            f = e.priority;
          return (0, o.jsx)("div", {
            className: i()(s().imageWrapper, u),
            children: (0, o.jsx)(n.default, {
              className: u,
              src: t,
              layout: r,
              objectFit: "cover",
              width: c,
              height: l,
              sizes: d,
              alt: h,
              id: g,
              priority: f,
              loading: p,
            }),
          });
        };
    },
    4353: function (e, t, a) {
      "use strict";
      a.d(t, {
        P: function () {
          return s;
        },
      });
      a(8837), a(110), a(9371);
      var r = a(2351),
        i = a(8969),
        n = a.n(i),
        c = a(5893),
        s = function (e) {
          var t = e.articleData,
            a = e.relatedPosts;
          if (0 !== a.length) {
            return (0, c.jsx)("div", {
              className: n().relatedArticlesContainer,
              children: (0, c.jsxs)("div", {
                className: n().relatedArticlesContent,
                children: [
                  (0, c.jsx)("div", {
                    className: n().relatedArticlesTitleContainer,
                    children: (0, c.jsx)("h3", {
                      className: n().relatedArticlesTitle,
                      children: "Related Content",
                    }),
                  }),
                  (0, c.jsx)("div", {
                    className: n().relatedArticles,
                    children: (0, c.jsx)(c.Fragment, {
                      children: (function (e, t) {
                        var a = e.filter(function (e) {
                          return e.articleData.title !== t.title;
                        });
                        return 1 === a.length ? [a[0]] : [a[0], a[1]];
                      })(a, t).map(function (e) {
                        return (0,
                        c.jsx)(c.Fragment, { children: e ? (0, c.jsx)(r.Z, { currentArticle: e.articleData.title, title: ((t = e.articleData.title), (a = 55), t.length < a ? t : "".concat(t.slice(0, a), "...")), previewImage: e.articleData.previewImage, slug: e.articleData.slug, type: e.articleData.type }, "".concat(e.articleData.slug, "|").concat(e.articleData.type)) : null });
                        var t, a;
                      }),
                    }),
                  }),
                ],
              }),
            });
          }
        };
    },
    3209: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/infographics/[slug]",
        function () {
          return a(8287);
        },
      ]);
    },
    1183: function (e) {
      e.exports = {
        btn: "article-date_btn__Lv4pT",
        btn__withHighlightLine: "article-date_btn__withHighlightLine__0nSPU",
        disabled: "article-date_disabled__wngu5",
        wideHighlight: "article-date_wideHighlight__oL81g",
        backToTop: "article-date_backToTop__v22KH",
        upArrow: "article-date_upArrow__RaiSc",
        articleDate: "article-date_articleDate__gT_5O",
        light: "article-date_light__TVO4x",
      };
    },
    2008: function (e) {
      e.exports = {
        btn: "back-button_btn__CAI2z",
        btn__withHighlightLine: "back-button_btn__withHighlightLine__HC552",
        disabled: "back-button_disabled__Ie8_O",
        wideHighlight: "back-button_wideHighlight__eYT_U",
        backToTop: "back-button_backToTop__6_2Vi",
        upArrow: "back-button_upArrow__tqKsx",
        backButton: "back-button_backButton__gOXZQ",
        backArrow: "back-button_backArrow__G8FXg",
      };
    },
    7292: function (e) {
      e.exports = {
        card: "card_card__K4USc",
        fixedMarginCard: "card_fixedMarginCard__h3ipQ",
        card__imageContainer: "card_card__imageContainer__Ky4mw",
        card__image: "card_card__image__zxZdU",
        card__textContainer: "card_card__textContainer__HJM9e",
        card__title: "card_card__title__Pzp3d",
        card__arrow: "card_card__arrow__0kuSp",
        line: "card_line__wX3bn",
        line1: "card_line1__13HQS",
        line2: "card_line2__HkYA_",
        line3: "card_line3___PQox",
      };
    },
    8658: function (e) {
      e.exports = { imageWrapper: "image-wrapper_imageWrapper__Af4Zq" };
    },
    9747: function (e) {
      e.exports = {
        iframeContainer: "infographic-iframe_iframeContainer__k0A9u",
        iframe: "infographic-iframe_iframe__fMyYL",
      };
    },
    606: function (e) {
      e.exports = {
        infographicContainer: "infographic-loader_infographicContainer__YZqFm",
        loading: "infographic-loader_loading__Shjoa",
        infographicWrapper: "infographic-loader_infographicWrapper__tvsz2",
        loaded: "infographic-loader_loaded__Nhj_p",
      };
    },
    8969: function (e) {
      e.exports = {
        relatedArticlesContainer:
          "related-articles_relatedArticlesContainer__3asKD",
        relatedArticlesContent:
          "related-articles_relatedArticlesContent__gjP2Z",
        relatedArticles: "related-articles_relatedArticles__lroy1",
        relatedArticlesTitleContainer:
          "related-articles_relatedArticlesTitleContainer__727dl",
        relatedArticlesTitle: "related-articles_relatedArticlesTitle__KljYc",
      };
    },
  },
  function (e) {
    e.O(0, [61, 774, 888, 179], function () {
      return (t = 3209), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
