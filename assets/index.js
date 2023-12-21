!(function () {
  var t = {
    347: function (t, e) {
      !(function (t) {
        "use strict";
        var e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
          r = Math.PI / 180,
          i = Math.sin,
          o = Math.cos,
          a = Math.abs,
          s = Math.sqrt,
          u = function (t) {
            return "number" == typeof t;
          },
          l = 1e5,
          c = function (t) {
            return Math.round(t * l) / l || 0;
          };
        function f(t, e, n, r, i, o, a) {
          for (var s, u, l, c, f, d = t.length; --d > -1;)
            for (u = (s = t[d]).length, l = 0; l < u; l += 2)
              (c = s[l]),
                (f = s[l + 1]),
                (s[l] = c * e + f * r + o),
                (s[l + 1] = c * n + f * i + a);
          return (t._dirty = 1), t;
        }
        function d(t, e, n, u, l, c, f, d, p) {
          if (t !== d || e !== p) {
            (n = a(n)), (u = a(u));
            var h = (l % 360) * r,
              g = o(h),
              m = i(h),
              v = Math.PI,
              y = 2 * v,
              b = (t - d) / 2,
              _ = (e - p) / 2,
              x = g * b + m * _,
              w = -m * b + g * _,
              T = x * x,
              E = w * w,
              S = T / (n * n) + E / (u * u);
            S > 1 && ((n = s(S) * n), (u = s(S) * u));
            var C = n * n,
              A = u * u,
              k = (C * A - C * E - A * T) / (C * E + A * T);
            k < 0 && (k = 0);
            var O = (c === f ? -1 : 1) * s(k),
              D = O * ((n * w) / u),
              M = O * ((-u * x) / n),
              L = (t + d) / 2 + (g * D - m * M),
              P = (e + p) / 2 + (m * D + g * M),
              N = (x - D) / n,
              q = (w - M) / u,
              R = (-x - D) / n,
              j = (-w - M) / u,
              I = N * N + q * q,
              H = (q < 0 ? -1 : 1) * Math.acos(N / s(I)),
              B =
                (N * j - q * R < 0 ? -1 : 1) *
                Math.acos((N * R + q * j) / s(I * (R * R + j * j)));
            isNaN(B) && (B = v),
              !f && B > 0 ? (B -= y) : f && B < 0 && (B += y),
              (H %= y),
              (B %= y);
            var F,
              z = Math.ceil(a(B) / (y / 4)),
              W = [],
              Y = B / z,
              X = ((4 / 3) * i(Y / 2)) / (1 + o(Y / 2)),
              $ = g * n,
              V = m * n,
              U = m * -u,
              G = g * u;
            for (F = 0; F < z; F++)
              (x = o((l = H + F * Y))),
                (w = i(l)),
                (N = o((l += Y))),
                (q = i(l)),
                W.push(x - X * w, w + X * x, N + X * q, q - X * N, N, q);
            for (F = 0; F < W.length; F += 2)
              (x = W[F]),
                (w = W[F + 1]),
                (W[F] = x * $ + w * U + L),
                (W[F + 1] = x * V + w * G + P);
            return (W[F - 2] = d), (W[F - 1] = p), W;
          }
        }
        function p(t) {
          var r,
            i,
            o,
            s,
            u,
            l,
            c,
            f,
            p,
            h,
            g,
            m,
            v,
            y,
            b,
            _ =
              (t + "")
                .replace(n, function (t) {
                  var e = +t;
                  return e < 1e-4 && e > -1e-4 ? 0 : e;
                })
                .match(e) || [],
            x = [],
            w = 0,
            T = 0,
            E = 2 / 3,
            S = _.length,
            C = 0,
            A = "ERROR: malformed path: " + t,
            k = function (t, e, n, r) {
              (h = (n - t) / 3),
                (g = (r - e) / 3),
                c.push(t + h, e + g, n - h, r - g, n, r);
            };
          if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(A), x;
          for (r = 0; r < S; r++)
            if (
              ((v = u),
                isNaN(_[r]) ? (l = (u = _[r].toUpperCase()) !== _[r]) : r--,
                (o = +_[r + 1]),
                (s = +_[r + 2]),
                l && ((o += w), (s += T)),
                r || ((f = o), (p = s)),
                "M" === u)
            )
              c && (c.length < 8 ? (x.length -= 1) : (C += c.length)),
                (w = f = o),
                (T = p = s),
                (c = [o, s]),
                x.push(c),
                (r += 2),
                (u = "L");
            else if ("C" === u)
              c || (c = [0, 0]),
                l || (w = T = 0),
                c.push(
                  o,
                  s,
                  w + 1 * _[r + 3],
                  T + 1 * _[r + 4],
                  (w += 1 * _[r + 5]),
                  (T += 1 * _[r + 6])
                ),
                (r += 6);
            else if ("S" === u)
              (h = w),
                (g = T),
                ("C" !== v && "S" !== v) ||
                ((h += w - c[c.length - 4]), (g += T - c[c.length - 3])),
                l || (w = T = 0),
                c.push(h, g, o, s, (w += 1 * _[r + 3]), (T += 1 * _[r + 4])),
                (r += 4);
            else if ("Q" === u)
              (h = w + (o - w) * E),
                (g = T + (s - T) * E),
                l || (w = T = 0),
                (w += 1 * _[r + 3]),
                (T += 1 * _[r + 4]),
                c.push(h, g, w + (o - w) * E, T + (s - T) * E, w, T),
                (r += 4);
            else if ("T" === u)
              (h = w - c[c.length - 4]),
                (g = T - c[c.length - 3]),
                c.push(
                  w + h,
                  T + g,
                  o + (w + 1.5 * h - o) * E,
                  s + (T + 1.5 * g - s) * E,
                  (w = o),
                  (T = s)
                ),
                (r += 2);
            else if ("H" === u) k(w, T, (w = o), T), (r += 1);
            else if ("V" === u)
              k(w, T, w, (T = o + (l ? T - w : 0))), (r += 1);
            else if ("L" === u || "Z" === u)
              "Z" === u && ((o = f), (s = p), (c.closed = !0)),
                ("L" === u || a(w - o) > 0.5 || a(T - s) > 0.5) &&
                (k(w, T, o, s), "L" === u && (r += 2)),
                (w = o),
                (T = s);
            else if ("A" === u) {
              if (
                ((y = _[r + 4]),
                  (b = _[r + 5]),
                  (h = _[r + 6]),
                  (g = _[r + 7]),
                  (i = 7),
                  y.length > 1 &&
                  (y.length < 3
                    ? ((g = h), (h = b), i--)
                    : ((g = b), (h = y.substr(2)), (i -= 2)),
                    (b = y.charAt(1)),
                    (y = y.charAt(0))),
                  (m = d(
                    w,
                    T,
                    +_[r + 1],
                    +_[r + 2],
                    +_[r + 3],
                    +y,
                    +b,
                    (l ? w : 0) + 1 * h,
                    (l ? T : 0) + 1 * g
                  )),
                  (r += i),
                  m)
              )
                for (i = 0; i < m.length; i++) c.push(m[i]);
              (w = c[c.length - 2]), (T = c[c.length - 1]);
            } else console.log(A);
          return (
            (r = c.length) < 6
              ? (x.pop(), (r = 0))
              : c[0] === c[r - 2] && c[1] === c[r - 1] && (c.closed = !0),
            (x.totalPoints = C + r),
            x
          );
        }
        function h(t) {
          u(t[0]) && (t = [t]);
          var e,
            n,
            r,
            i,
            o = "",
            a = t.length;
          for (n = 0; n < a; n++) {
            for (
              i = t[n],
              o += "M" + c(i[0]) + "," + c(i[1]) + " C",
              e = i.length,
              r = 2;
              r < e;
              r++
            )
              o +=
                c(i[r++]) +
                "," +
                c(i[r++]) +
                " " +
                c(i[r++]) +
                "," +
                c(i[r++]) +
                " " +
                c(i[r++]) +
                "," +
                c(i[r]) +
                " ";
            i.closed && (o += "z");
          }
          return o;
        }
        var g,
          m,
          v = function () {
            return (
              g ||
              ("undefined" != typeof window &&
                (g = window.gsap) &&
                g.registerPlugin &&
                g)
            );
          },
          y = function () {
            (g = v())
              ? (g.registerEase("_CE", C.create), (m = 1))
              : console.warn("Please gsap.registerPlugin(CustomEase)");
          },
          b = 1e20,
          _ = function (t) {
            return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
          },
          x = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          w = /[cLlsSaAhHvVtTqQ]/g,
          T = function (t) {
            var e,
              n = t.length,
              r = b;
            for (e = 1; e < n; e += 6) +t[e] < r && (r = +t[e]);
            return r;
          },
          E = function (t, e, n) {
            n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
            var r,
              i = -1 * +t[0],
              o = -n,
              a = t.length,
              s = 1 / (+t[a - 2] + i),
              u =
                -e ||
                (Math.abs(+t[a - 1] - +t[1]) < 0.01 * (+t[a - 2] - +t[0])
                  ? T(t) + o
                  : +t[a - 1] + o);
            for (u = u ? 1 / u : -s, r = 0; r < a; r += 2)
              (t[r] = (+t[r] + i) * s), (t[r + 1] = (+t[r + 1] + o) * u);
          },
          S = function t(e, n, r, i, o, a, s, u, l, c, f) {
            var d,
              p = (e + r) / 2,
              h = (n + i) / 2,
              g = (r + o) / 2,
              m = (i + a) / 2,
              v = (o + s) / 2,
              y = (a + u) / 2,
              b = (p + g) / 2,
              _ = (h + m) / 2,
              x = (g + v) / 2,
              w = (m + y) / 2,
              T = (b + x) / 2,
              E = (_ + w) / 2,
              S = s - e,
              C = u - n,
              A = Math.abs((r - s) * C - (i - u) * S),
              k = Math.abs((o - s) * C - (a - u) * S);
            return (
              c ||
              ((c = [
                { x: e, y: n },
                { x: s, y: u },
              ]),
                (f = 1)),
              c.splice(f || c.length - 1, 0, { x: T, y: E }),
              (A + k) * (A + k) > l * (S * S + C * C) &&
              ((d = c.length),
                t(e, n, p, h, b, _, T, E, l, c, f),
                t(T, E, x, w, v, y, s, u, l, c, f + 1 + (c.length - d))),
              c
            );
          },
          C = (function () {
            function t(t, e, n) {
              m || y(), (this.id = t), this.setData(e, n);
            }
            var e = t.prototype;
            return (
              (e.setData = function (t, e) {
                e = e || {};
                var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = (t = t || "0,0,1,1").match(x),
                  d = 1,
                  h = [],
                  m = [],
                  v = e.precision || 1,
                  y = v <= 1;
                if (
                  ((this.data = t),
                    (w.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
                    (f = p(t)[0]),
                    4 === (n = f.length))
                )
                  f.unshift(0, 0), f.push(1, 1), (n = 8);
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (
                  (0 == +f[0] && 1 == +f[n - 2]) || E(f, e.height, e.originY),
                  this.segment = f,
                  o = 2;
                  o < n;
                  o += 6
                )
                  (r = { x: +f[o - 2], y: +f[o - 1] }),
                    (i = { x: +f[o + 4], y: +f[o + 5] }),
                    h.push(r, i),
                    S(
                      r.x,
                      r.y,
                      +f[o],
                      +f[o + 1],
                      +f[o + 2],
                      +f[o + 3],
                      i.x,
                      i.y,
                      1 / (2e5 * v),
                      h,
                      h.length - 1
                    );
                for (n = h.length, o = 0; o < n; o++)
                  (u = h[o]),
                    (l = h[o - 1] || u),
                    (u.x > l.x || (l.y !== u.y && l.x === u.x) || u === l) &&
                      u.x <= 1
                      ? ((l.cx = u.x - l.x),
                        (l.cy = u.y - l.y),
                        (l.n = u),
                        (l.nx = u.x),
                        y &&
                        o > 1 &&
                        Math.abs(l.cy / l.cx - h[o - 2].cy / h[o - 2].cx) >
                        2 &&
                        (y = 0),
                        l.cx < d &&
                        (l.cx
                          ? (d = l.cx)
                          : ((l.cx = 0.001),
                            o === n - 1 &&
                            ((l.x -= 0.001),
                              (d = Math.min(d, 0.001)),
                              (y = 0)))))
                      : (h.splice(o--, 1), n--);
                if (
                  ((a = 1 / (n = (1 / d + 1) | 0)), (s = 0), (u = h[0]), y)
                ) {
                  for (o = 0; o < n; o++)
                    (c = o * a),
                      u.nx < c && (u = h[++s]),
                      (r = u.y + ((c - u.x) / u.cx) * u.cy),
                      (m[o] = { x: c, cx: a, y: r, cy: 0, nx: 9 }),
                      o && (m[o - 1].cy = r - m[o - 1].y);
                  m[n - 1].cy = h[h.length - 1].y - r;
                } else {
                  for (o = 0; o < n; o++)
                    u.nx < o * a && (u = h[++s]), (m[o] = u);
                  s < h.length - 1 && (m[o - 1] = h[h.length - 2]);
                }
                return (
                  (this.ease = function (t) {
                    var e = m[(t * n) | 0] || m[n - 1];
                    return (
                      e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy
                    );
                  }),
                  (this.ease.custom = this),
                  this.id && g && g.registerEase(this.id, this.ease),
                  this
                );
              }),
              (e.getSVGData = function (e) {
                return t.getSVGData(this, e);
              }),
              (t.create = function (e, n, r) {
                return new t(e, n, r).ease;
              }),
              (t.register = function (t) {
                (g = t), y();
              }),
              (t.get = function (t) {
                return g.parseEase(t);
              }),
              (t.getSVGData = function (e, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  d,
                  p,
                  m = (n = n || {}).width || 100,
                  v = n.height || 100,
                  y = n.x || 0,
                  b = (n.y || 0) + v,
                  x = g.utils.toArray(n.path)[0];
                if (
                  (n.invert && ((v = -v), (b = 0)),
                    "string" == typeof e && (e = g.parseEase(e)),
                    e.custom && (e = e.custom),
                    e instanceof t)
                )
                  r = h(f([e.segment], m, 0, 0, -v, y, b));
                else {
                  for (
                    r = [y, b],
                    a = 1 / (l = Math.max(5, 200 * (n.precision || 1))),
                    c = 5 / (l += 2),
                    d = _(y + a * m),
                    i = ((p = _(b + e(a) * -v)) - b) / (d - y),
                    o = 2;
                    o < l;
                    o++
                  )
                    (s = _(y + o * a * m)),
                      (u = _(b + e(o * a) * -v)),
                      (Math.abs((u - p) / (s - d) - i) > c || o === l - 1) &&
                      (r.push(d, p), (i = (u - p) / (s - d))),
                      (d = s),
                      (p = u);
                  r = "M" + r.join(",");
                }
                return x && x.setAttribute("d", r), r;
              }),
              t
            );
          })();
        v() && g.registerPlugin(C),
          (C.version = "3.11.5"),
          (t.CustomEase = C),
          (t.default = C),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    749: function (t, e) {
      !(function (t) {
        "use strict";
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = function () {
            return "undefined" != typeof window;
          },
          c = function () {
            return e || (l() && (e = window.gsap) && e.registerPlugin && e);
          },
          f = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          d = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"],
          },
          p = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          h = function (t) {
            return parseFloat(t) || 0;
          },
          g = function (t, e) {
            var n = h(t);
            return ~t.indexOf("%") ? (n / 100) * e : n;
          },
          m = function (t, e) {
            return h(t.getAttribute(e));
          },
          v = Math.sqrt,
          y = function (t, e, n, r, i, o) {
            return v(
              Math.pow((h(n) - h(t)) * i, 2) + Math.pow((h(r) - h(e)) * o, 2)
            );
          },
          b = function (t) {
            return console.warn(t);
          },
          _ = function (t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect");
          },
          x = 1,
          w = function (t, e, n) {
            var r,
              i,
              o = t.indexOf(" ");
            return (
              o < 0
                ? ((r = void 0 !== n ? n + "" : t), (i = t))
                : ((r = t.substr(0, o)), (i = t.substr(o + 1))),
              (r = g(r, e)) > (i = g(i, e)) ? [i, r] : [r, i]
            );
          },
          T = function (t) {
            if (!(t = n(t)[0])) return 0;
            var e,
              r,
              i,
              o,
              s,
              u,
              l,
              c = t.tagName.toLowerCase(),
              h = t.style,
              g = 1,
              x = 1;
            _(t) &&
              ((x = t.getScreenCTM()),
                (g = v(x.a * x.a + x.b * x.b)),
                (x = v(x.d * x.d + x.c * x.c)));
            try {
              r = t.getBBox();
            } catch (t) {
              b(
                "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
              );
            }
            var w = r || { x: 0, y: 0, width: 0, height: 0 },
              T = w.x,
              E = w.y,
              S = w.width,
              C = w.height;
            if (
              ((r && (S || C)) ||
                !d[c] ||
                ((S = m(t, d[c][0])),
                  (C = m(t, d[c][1])),
                  "rect" !== c && "line" !== c && ((S *= 2), (C *= 2)),
                  "line" === c &&
                  ((T = m(t, "x1")),
                    (E = m(t, "y1")),
                    (S = Math.abs(S - T)),
                    (C = Math.abs(C - E)))),
                "path" === c)
            )
              (o = h.strokeDasharray),
                (h.strokeDasharray = "none"),
                (e = t.getTotalLength() || 0),
                p(g) !== p(x) &&
                !a &&
                (a = 1) &&
                b(
                  "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                ),
                (e *= (g + x) / 2),
                (h.strokeDasharray = o);
            else if ("rect" === c) e = 2 * S * g + 2 * C * x;
            else if ("line" === c) e = y(T, E, T + S, E + C, g, x);
            else if ("polyline" === c || "polygon" === c)
              for (
                i = t.getAttribute("points").match(f) || [],
                "polygon" === c && i.push(i[0], i[1]),
                e = 0,
                s = 2;
                s < i.length;
                s += 2
              )
                e += y(i[s - 2], i[s - 1], i[s], i[s + 1], g, x) || 0;
            else
              ("circle" !== c && "ellipse" !== c) ||
                ((u = (S / 2) * g),
                  (l = (C / 2) * x),
                  (e = Math.PI * (3 * (u + l) - v((3 * u + l) * (u + 3 * l)))));
            return e || 0;
          },
          E = function (t, e) {
            if (!(t = n(t)[0])) return [0, 0];
            e || (e = T(t) + 1);
            var i = r.getComputedStyle(t),
              o = i.strokeDasharray || "",
              a = h(i.strokeDashoffset),
              s = o.indexOf(",");
            return (
              s < 0 && (s = o.indexOf(" ")),
              (o = s < 0 ? e : h(o.substr(0, s))) > e && (o = e),
              [-a || 0, o - a || 0]
            );
          },
          S = function () {
            l() &&
              ((r = window),
                (o = e = c()),
                (n = e.utils.toArray),
                (s = e.core.getStyleSaver),
                (u = e.core.reverting || function () { }),
                (i =
                  -1 !==
                  ((r.navigator || {}).userAgent || "").indexOf("Edge")));
          },
          C = {
            version: "3.11.3",
            name: "drawSVG",
            register: function (t) {
              (e = t), S();
            },
            init: function (t, e, n, a, u) {
              if (!t.getBBox) return !1;
              o || S();
              var l,
                c,
                f,
                d = T(t);
              return (
                (this.styles =
                  s &&
                  s(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
                (this.tween = n),
                (this._style = t.style),
                (this._target = t),
                e + "" == "true"
                  ? (e = "0 100%")
                  : e
                    ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                    : (e = "0 0"),
                (l = E(t, d)),
                (c = w(e, d, l[0])),
                (this._length = p(d)),
                (this._dash = p(l[1] - l[0])),
                (this._offset = p(-l[0])),
                (this._dashPT = this.add(
                  this,
                  "_dash",
                  this._dash,
                  p(c[1] - c[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  p(-c[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                i &&
                (f = r.getComputedStyle(t)).strokeLinecap !==
                f.strokeLinejoin &&
                ((c = h(f.strokeMiterlimit)),
                  this.add(t.style, "strokeMiterlimit", c, c + 0.01)),
                (this._live = _(t) || ~(e + "").indexOf("live")),
                (this._nowrap = ~(e + "").indexOf("nowrap")),
                this._props.push("drawSVG"),
                x
              );
            },
            render: function (t, e) {
              if (e.tween._time || !u()) {
                var n,
                  r,
                  i,
                  o,
                  a = e._pt,
                  s = e._style;
                if (a) {
                  for (
                    e._live &&
                    (n = T(e._target)) !== e._length &&
                    ((r = n / e._length),
                      (e._length = n),
                      e._offsetPT &&
                      ((e._offsetPT.s *= r), (e._offsetPT.c *= r)),
                      e._dashPT
                        ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
                        : (e._dash *= r));
                    a;

                  )
                    a.r(t, a.d), (a = a._next);
                  (i = e._dash || (t && 1 !== t && 1e-4) || 0),
                    (n = e._length - i + 0.1),
                    (o = e._offset),
                    i &&
                    o &&
                    i + Math.abs(o % e._length) > e._length - 0.2 &&
                    (o += o < 0 ? 0.1 : -0.1) &&
                    (n += 0.1),
                    (s.strokeDashoffset = i ? o : o + 0.001),
                    (s.strokeDasharray =
                      n < 0.2
                        ? "none"
                        : i
                          ? i + "px," + (e._nowrap ? 999999 : n) + "px"
                          : "0px, 999999px");
                }
              } else e.styles.revert();
            },
            getLength: T,
            getPosition: E,
          };
        c() && e.registerPlugin(C),
          (t.DrawSVGPlugin = C),
          (t.default = C),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    664: function (t, e) {
      !(function (t) {
        "use strict";
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = function () {
            return "undefined" != typeof window;
          },
          c = function () {
            return e || (l() && (e = window.gsap) && e.registerPlugin && e);
          },
          f = function (t) {
            return "string" == typeof t;
          },
          d = function (t) {
            return "function" == typeof t;
          },
          p = function (t, e) {
            var n = "x" === e ? "Width" : "Height",
              a = "scroll" + n,
              s = "client" + n;
            return t === r || t === i || t === o
              ? Math.max(i[a], o[a]) - (r["inner" + n] || i[s] || o[s])
              : t[a] - t["offset" + n];
          },
          h = function (t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return (
              t === r &&
              (null != t.pageXOffset
                ? (n = "page" + e.toUpperCase() + "Offset")
                : (t = null != i[n] ? i : o)),
              function () {
                return t[n];
              }
            );
          },
          g = function (t, e, n, r) {
            if ((d(t) && (t = t(e, n, r)), "object" != typeof t))
              return f(t) && "max" !== t && "=" !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t };
            if (t.nodeType) return { y: t, x: t };
            var i,
              o = {};
            for (i in t)
              o[i] = "onAutoKill" !== i && d(t[i]) ? t[i](e, n, r) : t[i];
            return o;
          },
          m = function (t, e) {
            if (!(t = a(t)[0]) || !t.getBoundingClientRect)
              return (
                console.warn("scrollTo target doesn't exist. Using 0") || {
                  x: 0,
                  y: 0,
                }
              );
            var n = t.getBoundingClientRect(),
              s = !e || e === r || e === o,
              u = s
                ? {
                  top:
                    i.clientTop -
                    (r.pageYOffset || i.scrollTop || o.scrollTop || 0),
                  left:
                    i.clientLeft -
                    (r.pageXOffset || i.scrollLeft || o.scrollLeft || 0),
                }
                : e.getBoundingClientRect(),
              l = { x: n.left - u.left, y: n.top - u.top };
            return !s && e && ((l.x += h(e, "x")()), (l.y += h(e, "y")())), l;
          },
          v = function (t, e, n, r, i) {
            return isNaN(t) || "object" == typeof t
              ? f(t) && "=" === t.charAt(1)
                ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) +
                r -
                i
                : "max" === t
                  ? p(e, n) - i
                  : Math.min(p(e, n), m(t, e)[n] - i)
              : parseFloat(t) - i;
          },
          y = function () {
            (e = c()),
              l() &&
              e &&
              "undefined" != typeof document &&
              document.body &&
              ((r = window),
                (o = document.body),
                (i = document.documentElement),
                (a = e.utils.toArray),
                e.config({ autoKillThreshold: 7 }),
                (s = e.config()),
                (n = 1));
          },
          b = {
            version: "3.11.5",
            name: "scrollTo",
            rawVars: 1,
            register: function (t) {
              (e = t), y();
            },
            init: function (t, i, o, a, s) {
              n || y();
              var l = this,
                c = e.getProperty(t, "scrollSnapType");
              (l.isWin = t === r),
                (l.target = t),
                (l.tween = o),
                (i = g(i, a, t, s)),
                (l.vars = i),
                (l.autoKill = !!i.autoKill),
                (l.getX = h(t, "x")),
                (l.getY = h(t, "y")),
                (l.x = l.xPrev = l.getX()),
                (l.y = l.yPrev = l.getY()),
                u || (u = e.core.globals().ScrollTrigger),
                "smooth" === e.getProperty(t, "scrollBehavior") &&
                e.set(t, { scrollBehavior: "auto" }),
                c &&
                "none" !== c &&
                ((l.snap = 1),
                  (l.snapInline = t.style.scrollSnapType),
                  (t.style.scrollSnapType = "none")),
                null != i.x
                  ? (l.add(
                    l,
                    "x",
                    l.x,
                    v(i.x, t, "x", l.x, i.offsetX || 0),
                    a,
                    s
                  ),
                    l._props.push("scrollTo_x"))
                  : (l.skipX = 1),
                null != i.y
                  ? (l.add(
                    l,
                    "y",
                    l.y,
                    v(i.y, t, "y", l.y, i.offsetY || 0),
                    a,
                    s
                  ),
                    l._props.push("scrollTo_y"))
                  : (l.skipY = 1);
            },
            render: function (t, e) {
              for (
                var n,
                i,
                o,
                a,
                l,
                c = e._pt,
                f = e.target,
                d = e.tween,
                h = e.autoKill,
                g = e.xPrev,
                m = e.yPrev,
                v = e.isWin,
                y = e.snap,
                b = e.snapInline;
                c;

              )
                c.r(t, c.d), (c = c._next);
              (n = v || !e.skipX ? e.getX() : g),
                (o = (i = v || !e.skipY ? e.getY() : m) - m),
                (a = n - g),
                (l = s.autoKillThreshold),
                e.x < 0 && (e.x = 0),
                e.y < 0 && (e.y = 0),
                h &&
                (!e.skipX &&
                  (a > l || a < -l) &&
                  n < p(f, "x") &&
                  (e.skipX = 1),
                  !e.skipY &&
                  (o > l || o < -l) &&
                  i < p(f, "y") &&
                  (e.skipY = 1),
                  e.skipX &&
                  e.skipY &&
                  (d.kill(),
                    e.vars.onAutoKill &&
                    e.vars.onAutoKill.apply(
                      d,
                      e.vars.onAutoKillParams || []
                    ))),
                v
                  ? r.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y)
                  : (e.skipY || (f.scrollTop = e.y),
                    e.skipX || (f.scrollLeft = e.x)),
                !y ||
                (1 !== t && 0 !== t) ||
                ((i = f.scrollTop),
                  (n = f.scrollLeft),
                  b
                    ? (f.style.scrollSnapType = b)
                    : f.style.removeProperty("scroll-snap-type"),
                  (f.scrollTop = i + 1),
                  (f.scrollLeft = n + 1),
                  (f.scrollTop = i),
                  (f.scrollLeft = n)),
                (e.xPrev = e.x),
                (e.yPrev = e.y),
                u && u.update();
            },
            kill: function (t) {
              var e = "scrollTo" === t;
              (e || "scrollTo_x" === t) && (this.skipX = 1),
                (e || "scrollTo_y" === t) && (this.skipY = 1);
            },
          };
        (b.max = p),
          (b.getOffset = m),
          (b.buildGetter = h),
          c() && e.registerPlugin(b),
          (t.ScrollToPlugin = b),
          (t.default = b),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    546: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function n(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        }
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m = function () {
            return (
              r ||
              ("undefined" != typeof window &&
                (r = window.gsap) &&
                r.registerPlugin &&
                r)
            );
          },
          v = 1,
          y = [],
          b = [],
          _ = [],
          x = Date.now,
          w = function (t, e) {
            return e;
          },
          T = function () {
            var t = f.core,
              e = t.bridge || {},
              n = t._scrollers,
              r = t._proxies;
            n.push.apply(n, b),
              r.push.apply(r, _),
              (b = n),
              (_ = r),
              (w = function (t, n) {
                return e[t](n);
              });
          },
          E = function (t, e) {
            return ~_.indexOf(t) && _[_.indexOf(t) + 1][e];
          },
          S = function (t) {
            return !!~d.indexOf(t);
          },
          C = function (t, e, n, r, i) {
            return t.addEventListener(e, n, { passive: !r, capture: !!i });
          },
          A = function (t, e, n, r) {
            return t.removeEventListener(e, n, !!r);
          },
          k = "scrollLeft",
          O = "scrollTop",
          D = function () {
            return (p && p.isPressed) || b.cache++;
          },
          M = function (t, e) {
            var n = function n(r) {
              if (r || 0 === r) {
                v && (o.history.scrollRestoration = "manual");
                var i = p && p.isPressed;
                (r = n.v = Math.round(r) || (p && p.iOS ? 1 : 0)),
                  t(r),
                  (n.cacheID = b.cache),
                  i && w("ss", r);
              } else
                (e || b.cache !== n.cacheID || w("ref")) &&
                  ((n.cacheID = b.cache), (n.v = t()));
              return n.v + n.offset;
            };
            return (n.offset = 0), t && n;
          },
          L = {
            s: k,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: M(function (t) {
              return arguments.length
                ? o.scrollTo(t, P.sc())
                : o.pageXOffset || a[k] || s[k] || u[k] || 0;
            }),
          },
          P = {
            s: O,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: L,
            sc: M(function (t) {
              return arguments.length
                ? o.scrollTo(L.sc(), t)
                : o.pageYOffset || a[O] || s[O] || u[O] || 0;
            }),
          },
          N = function (t) {
            return (
              r.utils.toArray(t)[0] ||
              ("string" == typeof t && !1 !== r.config().nullTargetWarn
                ? console.warn("Element not found:", t)
                : null)
            );
          },
          q = function (t, e) {
            var n = e.s,
              i = e.sc;
            S(t) && (t = a.scrollingElement || s);
            var o = b.indexOf(t),
              u = i === P.sc ? 1 : 2;
            !~o && (o = b.push(t) - 1),
              b[o + u] || t.addEventListener("scroll", D);
            var l = b[o + u],
              c =
                l ||
                (b[o + u] =
                  M(E(t, n), !0) ||
                  (S(t)
                    ? i
                    : M(function (e) {
                      return arguments.length ? (t[n] = e) : t[n];
                    })));
            return (
              (c.target = t),
              l ||
              (c.smooth = "smooth" === r.getProperty(t, "scrollBehavior")),
              c
            );
          },
          R = function (t, e, n) {
            var r = t,
              i = t,
              o = x(),
              a = o,
              s = e || 50,
              u = Math.max(500, 3 * s),
              l = function (t, e) {
                var u = x();
                e || u - o > s
                  ? ((i = r), (r = t), (a = o), (o = u))
                  : n
                    ? (r += t)
                    : (r = i + ((t - i) / (u - a)) * (o - a));
              },
              c = function (t) {
                var e = a,
                  s = i,
                  c = x();
                return (
                  (t || 0 === t) && t !== r && l(t),
                  o === a || c - a > u
                    ? 0
                    : ((r + (n ? s : -s)) / ((n ? c : o) - e)) * 1e3
                );
              };
            return {
              update: l,
              reset: function () {
                (i = r = n ? 0 : r), (a = o = 0);
              },
              getVelocity: c,
            };
          },
          j = function (t, e) {
            return (
              e && !t._gsapAllow && t.preventDefault(),
              t.changedTouches ? t.changedTouches[0] : t
            );
          },
          I = function (t) {
            var e = Math.max.apply(Math, t),
              n = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(n) ? e : n;
          },
          H = function () {
            (f = r.core.globals().ScrollTrigger) && f.core && T();
          },
          B = function (t) {
            return (
              (r = t || m()) &&
              "undefined" != typeof document &&
              document.body &&
              ((o = window),
                (a = document),
                (s = a.documentElement),
                (u = a.body),
                (d = [o, a, s, u]),
                r.utils.clamp,
                (g = r.core.context || function () { }),
                (c = "onpointerenter" in u ? "pointer" : "mouse"),
                (l = F.isTouch =
                  o.matchMedia &&
                    o.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in o ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                      ? 2
                      : 0),
                (h = F.eventTypes =
                  (
                    "ontouchstart" in s
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in s
                        ? "pointerdown,pointermove,pointercancel,pointerup"
                        : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (v = 0);
                }, 500),
                H(),
                (i = 1)),
              i
            );
          };
        (L.op = P), (b.cache = 0);
        var F = (function () {
          function t(t) {
            this.init(t);
          }
          return (
            (t.prototype.init = function (t) {
              i ||
                B(r) ||
                console.warn("Please gsap.registerPlugin(Observer)"),
                f || H();
              var e = t.tolerance,
                n = t.dragMinimum,
                d = t.type,
                m = t.target,
                v = t.lineHeight,
                b = t.debounce,
                _ = t.preventDefault,
                w = t.onStop,
                T = t.onStopDelay,
                E = t.ignore,
                k = t.wheelSpeed,
                O = t.event,
                M = t.onDragStart,
                F = t.onDragEnd,
                z = t.onDrag,
                W = t.onPress,
                Y = t.onRelease,
                X = t.onRight,
                $ = t.onLeft,
                V = t.onUp,
                U = t.onDown,
                G = t.onChangeX,
                K = t.onChangeY,
                Q = t.onChange,
                Z = t.onToggleX,
                J = t.onToggleY,
                tt = t.onHover,
                et = t.onHoverEnd,
                nt = t.onMove,
                rt = t.ignoreCheck,
                it = t.isNormalizer,
                ot = t.onGestureStart,
                at = t.onGestureEnd,
                st = t.onWheel,
                ut = t.onEnable,
                lt = t.onDisable,
                ct = t.onClick,
                ft = t.scrollSpeed,
                dt = t.capture,
                pt = t.allowClicks,
                ht = t.lockAxis,
                gt = t.onLockAxis;
              (this.target = m = N(m) || s),
                (this.vars = t),
                E && (E = r.utils.toArray(E)),
                (e = e || 1e-9),
                (n = n || 0),
                (k = k || 1),
                (ft = ft || 1),
                (d = d || "wheel,touch,pointer"),
                (b = !1 !== b),
                v || (v = parseFloat(o.getComputedStyle(u).lineHeight) || 22);
              var mt,
                vt,
                yt,
                bt,
                _t,
                xt,
                wt,
                Tt = this,
                Et = 0,
                St = 0,
                Ct = q(m, L),
                At = q(m, P),
                kt = Ct(),
                Ot = At(),
                Dt =
                  ~d.indexOf("touch") &&
                  !~d.indexOf("pointer") &&
                  "pointerdown" === h[0],
                Mt = S(m),
                Lt = m.ownerDocument || a,
                Pt = [0, 0, 0],
                Nt = [0, 0, 0],
                qt = 0,
                Rt = function () {
                  return (qt = x());
                },
                jt = function (t, e) {
                  return (
                    ((Tt.event = t) && E && ~E.indexOf(t.target)) ||
                    (e && Dt && "touch" !== t.pointerType) ||
                    (rt && rt(t, e))
                  );
                },
                It = function () {
                  Tt._vx.reset(), Tt._vy.reset(), vt.pause(), w && w(Tt);
                },
                Ht = function () {
                  var t = (Tt.deltaX = I(Pt)),
                    n = (Tt.deltaY = I(Nt)),
                    r = Math.abs(t) >= e,
                    i = Math.abs(n) >= e;
                  Q && (r || i) && Q(Tt, t, n, Pt, Nt),
                    r &&
                    (X && Tt.deltaX > 0 && X(Tt),
                      $ && Tt.deltaX < 0 && $(Tt),
                      G && G(Tt),
                      Z && Tt.deltaX < 0 != Et < 0 && Z(Tt),
                      (Et = Tt.deltaX),
                      (Pt[0] = Pt[1] = Pt[2] = 0)),
                    i &&
                    (U && Tt.deltaY > 0 && U(Tt),
                      V && Tt.deltaY < 0 && V(Tt),
                      K && K(Tt),
                      J && Tt.deltaY < 0 != St < 0 && J(Tt),
                      (St = Tt.deltaY),
                      (Nt[0] = Nt[1] = Nt[2] = 0)),
                    (bt || yt) &&
                    (nt && nt(Tt), yt && (z(Tt), (yt = !1)), (bt = !1)),
                    xt && !(xt = !1) && gt && gt(Tt),
                    _t && (st(Tt), (_t = !1)),
                    (mt = 0);
                },
                Bt = function (t, e, n) {
                  (Pt[n] += t),
                    (Nt[n] += e),
                    Tt._vx.update(t),
                    Tt._vy.update(e),
                    b ? mt || (mt = requestAnimationFrame(Ht)) : Ht();
                },
                Ft = function (t, e) {
                  ht &&
                    !wt &&
                    ((Tt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                      (xt = !0)),
                    "y" !== wt && ((Pt[2] += t), Tt._vx.update(t, !0)),
                    "x" !== wt && ((Nt[2] += e), Tt._vy.update(e, !0)),
                    b ? mt || (mt = requestAnimationFrame(Ht)) : Ht();
                },
                zt = function (t) {
                  if (!jt(t, 1)) {
                    var e = (t = j(t, _)).clientX,
                      r = t.clientY,
                      i = e - Tt.x,
                      o = r - Tt.y,
                      a = Tt.isDragging;
                    (Tt.x = e),
                      (Tt.y = r),
                      (a ||
                        Math.abs(Tt.startX - e) >= n ||
                        Math.abs(Tt.startY - r) >= n) &&
                      (z && (yt = !0),
                        a || (Tt.isDragging = !0),
                        Ft(i, o),
                        a || (M && M(Tt)));
                  }
                },
                Wt = (Tt.onPress = function (t) {
                  jt(t, 1) ||
                    (t && t.button) ||
                    ((Tt.axis = wt = null),
                      vt.pause(),
                      (Tt.isPressed = !0),
                      (t = j(t)),
                      (Et = St = 0),
                      (Tt.startX = Tt.x = t.clientX),
                      (Tt.startY = Tt.y = t.clientY),
                      Tt._vx.reset(),
                      Tt._vy.reset(),
                      C(it ? m : Lt, h[1], zt, _, !0),
                      (Tt.deltaX = Tt.deltaY = 0),
                      W && W(Tt));
                }),
                Yt = (Tt.onRelease = function (t) {
                  if (!jt(t, 1)) {
                    A(it ? m : Lt, h[1], zt, !0);
                    var e = !isNaN(Tt.y - Tt.startY),
                      n =
                        Tt.isDragging &&
                        (Math.abs(Tt.x - Tt.startX) > 3 ||
                          Math.abs(Tt.y - Tt.startY) > 3),
                      i = j(t);
                    !n &&
                      e &&
                      (Tt._vx.reset(),
                        Tt._vy.reset(),
                        _ &&
                        pt &&
                        r.delayedCall(0.08, function () {
                          if (x() - qt > 300 && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (Lt.createEvent) {
                              var e = Lt.createEvent("MouseEvents");
                              e.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                o,
                                1,
                                i.screenX,
                                i.screenY,
                                i.clientX,
                                i.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                t.target.dispatchEvent(e);
                            }
                        })),
                      (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
                      w && !it && vt.restart(!0),
                      F && n && F(Tt),
                      Y && Y(Tt, n);
                  }
                }),
                Xt = function (t) {
                  return (
                    t.touches &&
                    t.touches.length > 1 &&
                    (Tt.isGesturing = !0) &&
                    ot(t, Tt.isDragging)
                  );
                },
                $t = function () {
                  return (Tt.isGesturing = !1) || at(Tt);
                },
                Vt = function (t) {
                  if (!jt(t)) {
                    var e = Ct(),
                      n = At();
                    Bt((e - kt) * ft, (n - Ot) * ft, 1),
                      (kt = e),
                      (Ot = n),
                      w && vt.restart(!0);
                  }
                },
                Ut = function (t) {
                  if (!jt(t)) {
                    (t = j(t, _)), st && (_t = !0);
                    var e =
                      (1 === t.deltaMode
                        ? v
                        : 2 === t.deltaMode
                          ? o.innerHeight
                          : 1) * k;
                    Bt(t.deltaX * e, t.deltaY * e, 0),
                      w && !it && vt.restart(!0);
                  }
                },
                Gt = function (t) {
                  if (!jt(t)) {
                    var e = t.clientX,
                      n = t.clientY,
                      r = e - Tt.x,
                      i = n - Tt.y;
                    (Tt.x = e), (Tt.y = n), (bt = !0), (r || i) && Ft(r, i);
                  }
                },
                Kt = function (t) {
                  (Tt.event = t), tt(Tt);
                },
                Qt = function (t) {
                  (Tt.event = t), et(Tt);
                },
                Zt = function (t) {
                  return jt(t) || (j(t, _) && ct(Tt));
                };
              (vt = Tt._dc = r.delayedCall(T || 0.25, It).pause()),
                (Tt.deltaX = Tt.deltaY = 0),
                (Tt._vx = R(0, 50, !0)),
                (Tt._vy = R(0, 50, !0)),
                (Tt.scrollX = Ct),
                (Tt.scrollY = At),
                (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
                g(this),
                (Tt.enable = function (t) {
                  return (
                    Tt.isEnabled ||
                    (C(Mt ? Lt : m, "scroll", D),
                      d.indexOf("scroll") >= 0 &&
                      C(Mt ? Lt : m, "scroll", Vt, _, dt),
                      d.indexOf("wheel") >= 0 && C(m, "wheel", Ut, _, dt),
                      ((d.indexOf("touch") >= 0 && l) ||
                        d.indexOf("pointer") >= 0) &&
                      (C(m, h[0], Wt, _, dt),
                        C(Lt, h[2], Yt),
                        C(Lt, h[3], Yt),
                        pt && C(m, "click", Rt, !1, !0),
                        ct && C(m, "click", Zt),
                        ot && C(Lt, "gesturestart", Xt),
                        at && C(Lt, "gestureend", $t),
                        tt && C(m, c + "enter", Kt),
                        et && C(m, c + "leave", Qt),
                        nt && C(m, c + "move", Gt)),
                      (Tt.isEnabled = !0),
                      t && t.type && Wt(t),
                      ut && ut(Tt)),
                    Tt
                  );
                }),
                (Tt.disable = function () {
                  Tt.isEnabled &&
                    (y.filter(function (t) {
                      return t !== Tt && S(t.target);
                    }).length || A(Mt ? Lt : m, "scroll", D),
                      Tt.isPressed &&
                      (Tt._vx.reset(),
                        Tt._vy.reset(),
                        A(it ? m : Lt, h[1], zt, !0)),
                      A(Mt ? Lt : m, "scroll", Vt, dt),
                      A(m, "wheel", Ut, dt),
                      A(m, h[0], Wt, dt),
                      A(Lt, h[2], Yt),
                      A(Lt, h[3], Yt),
                      A(m, "click", Rt, !0),
                      A(m, "click", Zt),
                      A(Lt, "gesturestart", Xt),
                      A(Lt, "gestureend", $t),
                      A(m, c + "enter", Kt),
                      A(m, c + "leave", Qt),
                      A(m, c + "move", Gt),
                      (Tt.isEnabled = Tt.isPressed = Tt.isDragging = !1),
                      lt && lt(Tt));
                }),
                (Tt.kill = Tt.revert =
                  function () {
                    Tt.disable();
                    var t = y.indexOf(Tt);
                    t >= 0 && y.splice(t, 1), p === Tt && (p = 0);
                  }),
                y.push(Tt),
                it && S(m) && (p = Tt),
                Tt.enable(O);
            }),
            n(t, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            t
          );
        })();
        (F.version = "3.11.5"),
          (F.create = function (t) {
            return new F(t);
          }),
          (F.register = B),
          (F.getAll = function () {
            return y.slice();
          }),
          (F.getById = function (t) {
            return y.filter(function (e) {
              return e.vars.id === t;
            })[0];
          }),
          m() && r.registerPlugin(F);
        var z,
          W,
          Y,
          X,
          $,
          V,
          U,
          G,
          K,
          Q,
          Z,
          J,
          tt,
          et,
          nt,
          rt,
          it,
          ot,
          at,
          st,
          ut,
          lt,
          ct,
          ft,
          dt,
          pt,
          ht,
          gt,
          mt,
          vt,
          yt,
          bt,
          _t,
          xt,
          wt = 1,
          Tt = Date.now,
          Et = Tt(),
          St = 0,
          Ct = 0,
          At = function t() {
            return Ct && requestAnimationFrame(t);
          },
          kt = function () {
            return (et = 1);
          },
          Ot = function () {
            return (et = 0);
          },
          Dt = function (t) {
            return t;
          },
          Mt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          Lt = function () {
            return "undefined" != typeof window;
          },
          Pt = function () {
            return z || (Lt() && (z = window.gsap) && z.registerPlugin && z);
          },
          Nt = function (t) {
            return !!~U.indexOf(t);
          },
          qt = function (t) {
            return (
              E(t, "getBoundingClientRect") ||
              (Nt(t)
                ? function () {
                  return (
                    (en.width = Y.innerWidth),
                    (en.height = Y.innerHeight),
                    en
                  );
                }
                : function () {
                  return fe(t);
                })
            );
          },
          Rt = function (t, e, n) {
            var r = n.d,
              i = n.d2,
              o = n.a;
            return (o = E(t, "getBoundingClientRect"))
              ? function () {
                return o()[r];
              }
              : function () {
                return (e ? Y["inner" + i] : t["client" + i]) || 0;
              };
          },
          jt = function (t, e) {
            return !e || ~_.indexOf(t)
              ? qt(t)
              : function () {
                return en;
              };
          },
          It = function (t, e) {
            var n = e.s,
              r = e.d2,
              i = e.d,
              o = e.a;
            return Math.max(
              0,
              (n = "scroll" + r) && (o = E(t, n))
                ? o() - qt(t)()[i]
                : Nt(t)
                  ? ($[n] || V[n]) -
                  (Y["inner" + r] || $["client" + r] || V["client" + r])
                  : t[n] - t["offset" + r]
            );
          },
          Ht = function (t, e) {
            for (var n = 0; n < at.length; n += 3)
              (!e || ~e.indexOf(at[n + 1])) && t(at[n], at[n + 1], at[n + 2]);
          },
          Bt = function (t) {
            return "string" == typeof t;
          },
          Ft = function (t) {
            return "function" == typeof t;
          },
          zt = function (t) {
            return "number" == typeof t;
          },
          Wt = function (t) {
            return "object" == typeof t;
          },
          Yt = function (t, e, n) {
            return t && t.progress(e ? 0 : 1) && n && t.pause();
          },
          Xt = function (t, e) {
            if (t.enabled) {
              var n = e(t);
              n && n.totalTime && (t.callbackAnimation = n);
            }
          },
          $t = Math.abs,
          Vt = "left",
          Ut = "top",
          Gt = "right",
          Kt = "bottom",
          Qt = "width",
          Zt = "height",
          Jt = "Right",
          te = "Left",
          ee = "Top",
          ne = "Bottom",
          re = "padding",
          ie = "margin",
          oe = "Width",
          ae = "Height",
          se = "px",
          ue = function (t) {
            return Y.getComputedStyle(t);
          },
          le = function (t) {
            var e = ue(t).position;
            t.style.position =
              "absolute" === e || "fixed" === e ? e : "relative";
          },
          ce = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
          },
          fe = function (t, e) {
            var n =
              e &&
              "matrix(1, 0, 0, 1, 0, 0)" !== ue(t)[nt] &&
              z
                .to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
              r = t.getBoundingClientRect();
            return n && n.progress(0).kill(), r;
          },
          de = function (t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0;
          },
          pe = function (t) {
            var e,
              n = [],
              r = t.labels,
              i = t.duration();
            for (e in r) n.push(r[e] / i);
            return n;
          },
          he = function (t) {
            return function (e) {
              return z.utils.snap(pe(t), e);
            };
          },
          ge = function (t) {
            var e = z.utils.snap(t),
              n =
                Array.isArray(t) &&
                t.slice(0).sort(function (t, e) {
                  return t - e;
                });
            return n
              ? function (t, r, i) {
                var o;
                if ((void 0 === i && (i = 0.001), !r)) return e(t);
                if (r > 0) {
                  for (t -= i, o = 0; o < n.length; o++)
                    if (n[o] >= t) return n[o];
                  return n[o - 1];
                }
                for (o = n.length, t += i; o--;)
                  if (n[o] <= t) return n[o];
                return n[0];
              }
              : function (n, r, i) {
                void 0 === i && (i = 0.001);
                var o = e(n);
                return !r || Math.abs(o - n) < i || o - n < 0 == r < 0
                  ? o
                  : e(r < 0 ? n - t : n + t);
              };
          },
          me = function (t) {
            return function (e, n) {
              return ge(pe(t))(e, n.direction);
            };
          },
          ve = function (t, e, n, r) {
            return n.split(",").forEach(function (n) {
              return t(e, n, r);
            });
          },
          ye = function (t, e, n, r, i) {
            return t.addEventListener(e, n, { passive: !r, capture: !!i });
          },
          be = function (t, e, n, r) {
            return t.removeEventListener(e, n, !!r);
          },
          _e = function (t, e, n) {
            (n = n && n.wheelHandler) &&
              (t(e, "wheel", n), t(e, "touchmove", n));
          },
          xe = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          we = { toggleActions: "play", anticipatePin: 0 },
          Te = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          Ee = function (t, e) {
            if (Bt(t)) {
              var n = t.indexOf("="),
                r = ~n
                  ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1))
                  : 0;
              ~n &&
                (t.indexOf("%") > n && (r *= e / 100),
                  (t = t.substr(0, n - 1))),
                (t =
                  r +
                  (t in Te
                    ? Te[t] * e
                    : ~t.indexOf("%")
                      ? (parseFloat(t) * e) / 100
                      : parseFloat(t) || 0));
            }
            return t;
          },
          Se = function (t, e, n, r, i, o, a, s) {
            var u = i.startColor,
              l = i.endColor,
              c = i.fontSize,
              f = i.indent,
              d = i.fontWeight,
              p = X.createElement("div"),
              h = Nt(n) || "fixed" === E(n, "pinType"),
              g = -1 !== t.indexOf("scroller"),
              m = h ? V : n,
              v = -1 !== t.indexOf("start"),
              y = v ? u : l,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                c +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
              (g || s || !h) &&
              (b +=
                (r === P ? Gt : Kt) + ":" + (o + parseFloat(f)) + "px;"),
              a &&
              (b +=
                "box-sizing:border-box;text-align:left;width:" +
                a.offsetWidth +
                "px;"),
              (p._isStart = v),
              p.setAttribute(
                "class",
                "gsap-marker-" + t + (e ? " marker-" + e : "")
              ),
              (p.style.cssText = b),
              (p.innerText = e || 0 === e ? t + "-" + e : t),
              m.children[0]
                ? m.insertBefore(p, m.children[0])
                : m.appendChild(p),
              (p._offset = p["offset" + r.op.d2]),
              Ce(p, 0, r, v),
              p
            );
          },
          Ce = function (t, e, n, r) {
            var i = { display: "block" },
              o = n[r ? "os2" : "p2"],
              a = n[r ? "p2" : "os2"];
            (t._isFlipped = r),
              (i[n.a + "Percent"] = r ? -100 : 0),
              (i[n.a] = r ? "1px" : 0),
              (i["border" + o + oe] = 1),
              (i["border" + a + oe] = 0),
              (i[n.p] = e + "px"),
              z.set(t, i);
          },
          Ae = [],
          ke = {},
          Oe = function () {
            return Tt() - St > 34 && (yt || (yt = requestAnimationFrame($e)));
          },
          De = function () {
            (!ct || !ct.isPressed || ct.startX > V.clientWidth) &&
              (b.cache++,
                ct ? yt || (yt = requestAnimationFrame($e)) : $e(),
                St || Re("scrollStart"),
                (St = Tt()));
          },
          Me = function () {
            (pt = Y.innerWidth), (dt = Y.innerHeight);
          },
          Le = function () {
            b.cache++,
              !tt &&
              !lt &&
              !X.fullscreenElement &&
              !X.webkitFullscreenElement &&
              (!ft ||
                pt !== Y.innerWidth ||
                Math.abs(Y.innerHeight - dt) > 0.25 * Y.innerHeight) &&
              G.restart(!0);
          },
          Pe = {},
          Ne = [],
          qe = function t() {
            return be(un, "scrollEnd", t) || We(!0);
          },
          Re = function (t) {
            return (
              (Pe[t] &&
                Pe[t].map(function (t) {
                  return t();
                })) ||
              Ne
            );
          },
          je = [],
          Ie = function (t) {
            for (var e = 0; e < je.length; e += 5)
              (!t || (je[e + 4] && je[e + 4].query === t)) &&
                ((je[e].style.cssText = je[e + 1]),
                  je[e].getBBox &&
                  je[e].setAttribute("transform", je[e + 2] || ""),
                  (je[e + 3].uncache = 1));
          },
          He = function (t, e) {
            var n;
            for (rt = 0; rt < Ae.length; rt++)
              !(n = Ae[rt]) ||
                (e && n._ctx !== e) ||
                (t ? n.kill(1) : n.revert(!0, !0));
            e && Ie(e), e || Re("revert");
          },
          Be = function (t, e) {
            b.cache++,
              (e || !bt) &&
              b.forEach(function (t) {
                return Ft(t) && t.cacheID++ && (t.rec = 0);
              }),
              Bt(t) && (Y.history.scrollRestoration = mt = t);
          },
          Fe = 0,
          ze = function () {
            if (_t !== Fe) {
              var t = (_t = Fe);
              requestAnimationFrame(function () {
                return t === Fe && We(!0);
              });
            }
          },
          We = function (t, e) {
            if (!St || t) {
              (bt = un.isRefreshing = !0),
                b.forEach(function (t) {
                  return Ft(t) && t.cacheID++ && (t.rec = t());
                });
              var n = Re("refreshInit");
              st && un.sort(),
                e || He(),
                b.forEach(function (t) {
                  Ft(t) &&
                    (t.smooth && (t.target.style.scrollBehavior = "auto"),
                      t(0));
                }),
                Ae.slice(0).forEach(function (t) {
                  return t.refresh();
                }),
                Ae.forEach(function (t, e) {
                  if (t._subPinOffset && t.pin) {
                    var n = t.vars.horizontal
                      ? "offsetWidth"
                      : "offsetHeight",
                      r = t.pin[n];
                    t.revert(!0, 1),
                      t.adjustPinSpacing(t.pin[n] - r),
                      t.refresh();
                  }
                }),
                Ae.forEach(function (t) {
                  return (
                    "max" === t.vars.end &&
                    t.setPositions(
                      t.start,
                      Math.max(t.start + 1, It(t.scroller, t._dir))
                    )
                  );
                }),
                n.forEach(function (t) {
                  return t && t.render && t.render(-1);
                }),
                b.forEach(function (t) {
                  Ft(t) &&
                    (t.smooth &&
                      requestAnimationFrame(function () {
                        return (t.target.style.scrollBehavior = "smooth");
                      }),
                      t.rec && t(t.rec));
                }),
                Be(mt, 1),
                G.pause(),
                Fe++,
                (bt = 2),
                $e(2),
                Ae.forEach(function (t) {
                  return Ft(t.vars.onRefresh) && t.vars.onRefresh(t);
                }),
                (bt = un.isRefreshing = !1),
                Re("refresh");
            } else ye(un, "scrollEnd", qe);
          },
          Ye = 0,
          Xe = 1,
          $e = function (t) {
            if (!bt || 2 === t) {
              (un.isUpdating = !0), xt && xt.update(0);
              var e = Ae.length,
                n = Tt(),
                r = n - Et >= 50,
                i = e && Ae[0].scroll();
              if (
                ((Xe = Ye > i ? -1 : 1),
                  bt || (Ye = i),
                  r &&
                  (St && !et && n - St > 200 && ((St = 0), Re("scrollEnd")),
                    (Z = Et),
                    (Et = n)),
                  Xe < 0)
              ) {
                for (rt = e; rt-- > 0;) Ae[rt] && Ae[rt].update(0, r);
                Xe = 1;
              } else for (rt = 0; rt < e; rt++) Ae[rt] && Ae[rt].update(0, r);
              un.isUpdating = !1;
            }
            yt = 0;
          },
          Ve = [
            Vt,
            Ut,
            Kt,
            Gt,
            ie + ne,
            ie + Jt,
            ie + ee,
            ie + te,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          Ue = Ve.concat([
            Qt,
            Zt,
            "boxSizing",
            "max" + oe,
            "max" + ae,
            "position",
            ie,
            re,
            re + ee,
            re + Jt,
            re + ne,
            re + te,
          ]),
          Ge = function (t, e, n) {
            Ze(n);
            var r = t._gsap;
            if (r.spacerIsNative) Ze(r.spacerState);
            else if (t._gsap.swappedIn) {
              var i = e.parentNode;
              i && (i.insertBefore(t, e), i.removeChild(e));
            }
            t._gsap.swappedIn = !1;
          },
          Ke = function (t, e, n, r) {
            if (!t._gsap.swappedIn) {
              for (var i, o = Ve.length, a = e.style, s = t.style; o--;)
                a[(i = Ve[o])] = n[i];
              (a.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (a.display = "inline-block"),
                (s[Kt] = s[Gt] = "auto"),
                (a.flexBasis = n.flexBasis || "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[Qt] = de(t, L) + se),
                (a[Zt] = de(t, P) + se),
                (a[re] = s[ie] = s[Ut] = s[Vt] = "0"),
                Ze(r),
                (s[Qt] = s["max" + oe] = n[Qt]),
                (s[Zt] = s["max" + ae] = n[Zt]),
                (s[re] = n[re]),
                t.parentNode !== e &&
                (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                (t._gsap.swappedIn = !0);
            }
          },
          Qe = /([A-Z])/g,
          Ze = function (t) {
            if (t) {
              var e,
                n,
                r = t.t.style,
                i = t.length,
                o = 0;
              for (
                (t.t._gsap || z.core.getCache(t.t)).uncache = 1;
                o < i;
                o += 2
              )
                (n = t[o + 1]),
                  (e = t[o]),
                  n
                    ? (r[e] = n)
                    : r[e] &&
                    r.removeProperty(e.replace(Qe, "-$1").toLowerCase());
            }
          },
          Je = function (t) {
            for (var e = Ue.length, n = t.style, r = [], i = 0; i < e; i++)
              r.push(Ue[i], n[Ue[i]]);
            return (r.t = t), r;
          },
          tn = function (t, e, n) {
            for (var r, i = [], o = t.length, a = n ? 8 : 0; a < o; a += 2)
              (r = t[a]), i.push(r, r in e ? e[r] : t[a + 1]);
            return (i.t = t.t), i;
          },
          en = { left: 0, top: 0 },
          nn = function (t, e, n, r, i, o, a, s, u, l, c, f, d) {
            Ft(t) && (t = t(s)),
              Bt(t) &&
              "max" === t.substr(0, 3) &&
              (t =
                f + ("=" === t.charAt(4) ? Ee("0" + t.substr(3), n) : 0));
            var p,
              h,
              g,
              m = d ? d.time() : 0;
            if ((d && d.seek(0), zt(t)))
              d &&
                (t = z.utils.mapRange(
                  d.scrollTrigger.start,
                  d.scrollTrigger.end,
                  0,
                  f,
                  t
                )),
                a && Ce(a, n, r, !0);
            else {
              Ft(e) && (e = e(s));
              var v,
                y,
                b,
                _,
                x = (t || "0").split(" ");
              (g = N(e) || V),
                ((v = fe(g) || {}) && (v.left || v.top)) ||
                "none" !== ue(g).display ||
                ((_ = g.style.display),
                  (g.style.display = "block"),
                  (v = fe(g)),
                  _
                    ? (g.style.display = _)
                    : g.style.removeProperty("display")),
                (y = Ee(x[0], v[r.d])),
                (b = Ee(x[1] || "0", n)),
                (t = v[r.p] - u[r.p] - l + y + i - b),
                a && Ce(a, b, r, n - b < 20 || (a._isStart && b > 20)),
                (n -= n - b);
            }
            if (o) {
              var w = t + n,
                T = o._isStart;
              (p = "scroll" + r.d2),
                Ce(
                  o,
                  w,
                  r,
                  (T && w > 20) ||
                  (!T &&
                    (c ? Math.max(V[p], $[p]) : o.parentNode[p]) <= w + 1)
                ),
                c &&
                ((u = fe(a)),
                  c &&
                  (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + se));
            }
            return (
              d &&
              g &&
              ((p = fe(g)),
                d.seek(f),
                (h = fe(g)),
                (d._caScrollDist = p[r.p] - h[r.p]),
                (t = (t / d._caScrollDist) * f)),
              d && d.seek(m),
              d ? t : Math.round(t)
            );
          },
          rn = /(webkit|moz|length|cssText|inset)/i,
          on = function (t, e, n, r) {
            if (t.parentNode !== e) {
              var i,
                o,
                a = t.style;
              if (e === V) {
                for (i in ((t._stOrig = a.cssText), (o = ue(t))))
                  +i ||
                    rn.test(i) ||
                    !o[i] ||
                    "string" != typeof a[i] ||
                    "0" === i ||
                    (a[i] = o[i]);
                (a.top = n), (a.left = r);
              } else a.cssText = t._stOrig;
              (z.core.getCache(t).uncache = 1), e.appendChild(t);
            }
          },
          an = function (t, e, n) {
            var r = e,
              i = r;
            return function (e) {
              var o = Math.round(t());
              return (
                o !== r &&
                o !== i &&
                Math.abs(o - r) > 3 &&
                Math.abs(o - i) > 3 &&
                ((e = o), n && n()),
                (i = r),
                (r = e),
                e
              );
            };
          },
          sn = function (t, e) {
            var n = q(t, e),
              r = "_scroll" + e.p2,
              i = function e(i, o, a, s, u) {
                var l = e.tween,
                  c = o.onComplete,
                  f = {};
                a = a || n();
                var d = an(n, a, function () {
                  l.kill(), (e.tween = 0);
                });
                return (
                  (u = (s && u) || 0),
                  (s = s || i - a),
                  l && l.kill(),
                  (o[r] = i),
                  (o.modifiers = f),
                  (f[r] = function () {
                    return d(a + s * l.ratio + u * l.ratio * l.ratio);
                  }),
                  (o.onUpdate = function () {
                    b.cache++, $e();
                  }),
                  (o.onComplete = function () {
                    (e.tween = 0), c && c.call(l);
                  }),
                  (l = e.tween = z.to(t, o))
                );
              };
            return (
              (t[r] = n),
              (n.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0);
              }),
              ye(t, "wheel", n.wheelHandler),
              un.isTouch && ye(t, "touchmove", n.wheelHandler),
              i
            );
          },
          un = (function () {
            function t(e, n) {
              W ||
                t.register(z) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(e, n);
            }
            return (
              (t.prototype.init = function (e, n) {
                if (
                  ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    Ct)
                ) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    d,
                    p,
                    h,
                    g,
                    m,
                    v,
                    y,
                    x,
                    w,
                    T,
                    S,
                    C,
                    A,
                    k,
                    O,
                    D,
                    M,
                    R,
                    j,
                    I,
                    H,
                    B,
                    F,
                    W,
                    U,
                    G,
                    J,
                    nt,
                    it,
                    ot,
                    at = (e = ce(
                      Bt(e) || zt(e) || e.nodeType ? { trigger: e } : e,
                      we
                    )),
                    lt = at.onUpdate,
                    ct = at.toggleClass,
                    ft = at.id,
                    dt = at.onToggle,
                    pt = at.onRefresh,
                    ht = at.scrub,
                    mt = at.trigger,
                    yt = at.pin,
                    _t = at.pinSpacing,
                    Et = at.invalidateOnRefresh,
                    At = at.anticipatePin,
                    kt = at.onScrubComplete,
                    Ot = at.onSnapComplete,
                    Lt = at.once,
                    Pt = at.snap,
                    qt = at.pinReparent,
                    Ht = at.pinSpacer,
                    Vt = at.containerAnimation,
                    Ut = at.fastScrollEnd,
                    Gt = at.preventOverlaps,
                    Kt =
                      e.horizontal ||
                        (e.containerAnimation && !1 !== e.horizontal)
                        ? L
                        : P,
                    pe = !ht && 0 !== ht,
                    ve = N(e.scroller || Y),
                    _e = z.core.getCache(ve),
                    Te = Nt(ve),
                    Ce =
                      "fixed" ===
                      ("pinType" in e
                        ? e.pinType
                        : E(ve, "pinType") || (Te && "fixed")),
                    Oe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    Me = pe && e.toggleActions.split(" "),
                    Pe = "markers" in e ? e.markers : we.markers,
                    Ne = Te
                      ? 0
                      : parseFloat(ue(ve)["border" + Kt.p2 + oe]) || 0,
                    Re = this,
                    je =
                      e.onRefreshInit &&
                      function () {
                        return e.onRefreshInit(Re);
                      },
                    Ie = Rt(ve, Te, Kt),
                    He = jt(ve, Te),
                    Be = 0,
                    Fe = 0,
                    We = q(ve, Kt);
                  if (
                    (gt(Re),
                      (Re._dir = Kt),
                      (At *= 45),
                      (Re.scroller = ve),
                      (Re.scroll = Vt ? Vt.time.bind(Vt) : We),
                      (a = We()),
                      (Re.vars = e),
                      (n = n || e.animation),
                      "refreshPriority" in e &&
                      ((st = 1), -9999 === e.refreshPriority && (xt = Re)),
                      (_e.tweenScroll = _e.tweenScroll || {
                        top: sn(ve, P),
                        left: sn(ve, L),
                      }),
                      (Re.tweenTo = r = _e.tweenScroll[Kt.p]),
                      (Re.scrubDuration = function (t) {
                        (F = zt(t) && t)
                          ? B
                            ? B.duration(t)
                            : (B = z.to(n, {
                              ease: "expo",
                              totalProgress: "+=0.001",
                              duration: F,
                              paused: !0,
                              onComplete: function () {
                                return kt && kt(Re);
                              },
                            }))
                          : (B && B.progress(1).kill(), (B = 0));
                      }),
                      n &&
                      ((n.vars.lazy = !1),
                        n._initted ||
                        (!1 !== n.vars.immediateRender &&
                          !1 !== e.immediateRender &&
                          n.duration() &&
                          n.render(0, !0, !0)),
                        (Re.animation = n.pause()),
                        (n.scrollTrigger = Re),
                        Re.scrubDuration(ht),
                        B && B.resetTo && B.resetTo("totalProgress", 0),
                        (I = 0),
                        ft || (ft = n.vars.id)),
                      Ae.push(Re),
                      Pt &&
                      ((Wt(Pt) && !Pt.push) || (Pt = { snapTo: Pt }),
                        "scrollBehavior" in V.style &&
                        z.set(Te ? [V, $] : ve, { scrollBehavior: "auto" }),
                        b.forEach(function (t) {
                          return (
                            Ft(t) &&
                            t.target === (Te ? X.scrollingElement || $ : ve) &&
                            (t.smooth = !1)
                          );
                        }),
                        (o = Ft(Pt.snapTo)
                          ? Pt.snapTo
                          : "labels" === Pt.snapTo
                            ? he(n)
                            : "labelsDirectional" === Pt.snapTo
                              ? me(n)
                              : !1 !== Pt.directional
                                ? function (t, e) {
                                  return ge(Pt.snapTo)(
                                    t,
                                    Tt() - Fe < 500 ? 0 : e.direction
                                  );
                                }
                                : z.utils.snap(Pt.snapTo)),
                        (W = Pt.duration || { min: 0.1, max: 2 }),
                        (W = Wt(W) ? Q(W.min, W.max) : Q(W, W)),
                        (U = z
                          .delayedCall(Pt.delay || F / 2 || 0.1, function () {
                            var t = We(),
                              e = Tt() - Fe < 500,
                              i = r.tween;
                            if (
                              !(e || Math.abs(Re.getVelocity()) < 10) ||
                              i ||
                              et ||
                              Be === t
                            )
                              Re.isActive && Be !== t && U.restart(!0);
                            else {
                              var a = (t - u) / g,
                                s = n && !pe ? n.totalProgress() : a,
                                c = e ? 0 : ((s - H) / (Tt() - Z)) * 1e3 || 0,
                                f = z.utils.clamp(
                                  -a,
                                  1 - a,
                                  ($t(c / 2) * c) / 0.185
                                ),
                                d = a + (!1 === Pt.inertia ? 0 : f),
                                p = Q(0, 1, o(d, Re)),
                                h = Math.round(u + p * g),
                                m = Pt,
                                v = m.onStart,
                                y = m.onInterrupt,
                                b = m.onComplete;
                              if (t <= l && t >= u && h !== t) {
                                if (i && !i._initted && i.data <= $t(h - t))
                                  return;
                                !1 === Pt.inertia && (f = p - a),
                                  r(
                                    h,
                                    {
                                      duration: W(
                                        $t(
                                          (0.185 *
                                            Math.max($t(d - s), $t(p - s))) /
                                          c /
                                          0.05 || 0
                                        )
                                      ),
                                      ease: Pt.ease || "power3",
                                      data: $t(h - t),
                                      onInterrupt: function () {
                                        return U.restart(!0) && y && y(Re);
                                      },
                                      onComplete: function () {
                                        Re.update(),
                                          (Be = We()),
                                          (I = H =
                                            n && !pe
                                              ? n.totalProgress()
                                              : Re.progress),
                                          Ot && Ot(Re),
                                          b && b(Re);
                                      },
                                    },
                                    t,
                                    f * g,
                                    h - t - f * g
                                  ),
                                  v && v(Re, r.tween);
                              }
                            }
                          })
                          .pause())),
                      ft && (ke[ft] = Re),
                      (ot =
                        (mt = Re.trigger = N(mt || yt)) &&
                        mt._gsap &&
                        mt._gsap.stRevert) && (ot = ot(Re)),
                      (yt = !0 === yt ? mt : N(yt)),
                      Bt(ct) && (ct = { targets: mt, className: ct }),
                      yt &&
                      (!1 === _t ||
                        _t === ie ||
                        (_t =
                          !(
                            !_t &&
                            yt.parentNode &&
                            yt.parentNode.style &&
                            "flex" === ue(yt.parentNode).display
                          ) && re),
                        (Re.pin = yt),
                        (i = z.core.getCache(yt)).spacer
                          ? (m = i.pinState)
                          : (Ht &&
                            ((Ht = N(Ht)) &&
                              !Ht.nodeType &&
                              (Ht = Ht.current || Ht.nativeElement),
                              (i.spacerIsNative = !!Ht),
                              Ht && (i.spacerState = Je(Ht))),
                            (i.spacer = x = Ht || X.createElement("div")),
                            x.classList.add("pin-spacer"),
                            ft && x.classList.add("pin-spacer-" + ft),
                            (i.pinState = m = Je(yt))),
                        !1 !== e.force3D && z.set(yt, { force3D: !0 }),
                        (Re.spacer = x = i.spacer),
                        (j = ue(yt)),
                        (k = j[_t + Kt.os2]),
                        (T = z.getProperty(yt)),
                        (S = z.quickSetter(yt, Kt.a, se)),
                        Ke(yt, x, j),
                        (y = Je(yt))),
                      Pe)
                  ) {
                    (h = Wt(Pe) ? ce(Pe, xe) : xe),
                      (d = Se("scroller-start", ft, ve, Kt, h, 0)),
                      (p = Se("scroller-end", ft, ve, Kt, h, 0, d)),
                      (w = d["offset" + Kt.op.d2]);
                    var Ye = N(E(ve, "content") || ve);
                    (c = this.markerStart =
                      Se("start", ft, Ye, Kt, h, w, 0, Vt)),
                      (f = this.markerEnd =
                        Se("end", ft, Ye, Kt, h, w, 0, Vt)),
                      Vt && (it = z.quickSetter([c, f], Kt.a, se)),
                      Ce ||
                      (_.length && !0 === E(ve, "fixedMarkers")) ||
                      (le(Te ? V : ve),
                        z.set([d, p], { force3D: !0 }),
                        (D = z.quickSetter(d, Kt.a, se)),
                        (R = z.quickSetter(p, Kt.a, se)));
                  }
                  if (Vt) {
                    var $e = Vt.vars.onUpdate,
                      Ve = Vt.vars.onUpdateParams;
                    Vt.eventCallback("onUpdate", function () {
                      Re.update(0, 0, 1), $e && $e.apply(Vt, Ve || []);
                    });
                  }
                  (Re.previous = function () {
                    return Ae[Ae.indexOf(Re) - 1];
                  }),
                    (Re.next = function () {
                      return Ae[Ae.indexOf(Re) + 1];
                    }),
                    (Re.revert = function (t, e) {
                      if (!e) return Re.kill(!0);
                      var r = !1 !== t || !Re.enabled,
                        i = tt;
                      r !== Re.isReverted &&
                        (r &&
                          ((J = Math.max(We(), Re.scroll.rec || 0)),
                            (G = Re.progress),
                            (nt = n && n.progress())),
                          c &&
                          [c, f, d, p].forEach(function (t) {
                            return (t.style.display = r ? "none" : "block");
                          }),
                          r && ((tt = Re), Re.update(r)),
                          !yt ||
                          (qt && Re.isActive) ||
                          (r ? Ge(yt, x, m) : Ke(yt, x, ue(yt), O)),
                          r || Re.update(r),
                          (tt = i),
                          (Re.isReverted = r));
                    }),
                    (Re.refresh = function (i, o) {
                      if ((!tt && Re.enabled) || o)
                        if (yt && i && St) ye(t, "scrollEnd", qe);
                        else {
                          !bt && je && je(Re),
                            (tt = Re),
                            (Fe = Tt()),
                            r.tween && (r.tween.kill(), (r.tween = 0)),
                            B && B.pause(),
                            Et && n && n.revert({ kill: !1 }).invalidate(),
                            Re.isReverted || Re.revert(!0, !0),
                            (Re._subPinOffset = !1);
                          for (
                            var h,
                            b,
                            _,
                            w,
                            E,
                            S,
                            k,
                            D,
                            R,
                            j,
                            I,
                            H = Ie(),
                            F = He(),
                            W = Vt ? Vt.duration() : It(ve, Kt),
                            Y = g <= 0.01,
                            K = 0,
                            Q = 0,
                            Z = e.end,
                            et = e.endTrigger || mt,
                            rt =
                              e.start ||
                              (0 !== e.start && mt
                                ? yt
                                  ? "0 0"
                                  : "0 100%"
                                : 0),
                            it = (Re.pinnedContainer =
                              e.pinnedContainer && N(e.pinnedContainer)),
                            ot = (mt && Math.max(0, Ae.indexOf(Re))) || 0,
                            at = ot;
                            at--;

                          )
                            (S = Ae[at]).end || S.refresh(0, 1) || (tt = Re),
                              !(k = S.pin) ||
                              (k !== mt && k !== yt && k !== it) ||
                              S.isReverted ||
                              (j || (j = []),
                                j.unshift(S),
                                S.revert(!0, !0)),
                              S !== Ae[at] && (ot--, at--);
                          for (
                            Ft(rt) && (rt = rt(Re)),
                            u =
                            nn(
                              rt,
                              mt,
                              H,
                              Kt,
                              We(),
                              c,
                              d,
                              Re,
                              F,
                              Ne,
                              Ce,
                              W,
                              Vt
                            ) || (yt ? -0.001 : 0),
                            Ft(Z) && (Z = Z(Re)),
                            Bt(Z) &&
                            !Z.indexOf("+=") &&
                            (~Z.indexOf(" ")
                              ? (Z = (Bt(rt) ? rt.split(" ")[0] : "") + Z)
                              : ((K = Ee(Z.substr(2), H)),
                                (Z = Bt(rt)
                                  ? rt
                                  : (Vt
                                    ? z.utils.mapRange(
                                      0,
                                      Vt.duration(),
                                      Vt.scrollTrigger.start,
                                      Vt.scrollTrigger.end,
                                      u
                                    )
                                    : u) + K),
                                (et = mt))),
                            l =
                            Math.max(
                              u,
                              nn(
                                Z || (et ? "100% 0" : W),
                                et,
                                H,
                                Kt,
                                We() + K,
                                f,
                                p,
                                Re,
                                F,
                                Ne,
                                Ce,
                                W,
                                Vt
                              )
                            ) || -0.001,
                            g = l - u || ((u -= 0.01) && 0.001),
                            K = 0,
                            at = ot;
                            at--;

                          )
                            (k = (S = Ae[at]).pin) &&
                              S.start - S._pinPush <= u &&
                              !Vt &&
                              S.end > 0 &&
                              ((h = S.end - S.start),
                                ((k === mt && S.start - S._pinPush < u) ||
                                  k === it) &&
                                !zt(rt) &&
                                (K += h * (1 - S.progress)),
                                k === yt && (Q += h));
                          if (
                            ((u += K),
                              (l += K),
                              Y &&
                              (G = z.utils.clamp(
                                0,
                                1,
                                z.utils.normalize(u, l, J)
                              )),
                              (Re._pinPush = Q),
                              c &&
                              K &&
                              (((h = {})[Kt.a] = "+=" + K),
                                it && (h[Kt.p] = "-=" + We()),
                                z.set([c, f], h)),
                              yt)
                          )
                            (h = ue(yt)),
                              (w = Kt === P),
                              (_ = We()),
                              (C = parseFloat(T(Kt.a)) + Q),
                              !W &&
                              l > 1 &&
                              ((I = {
                                style: (I = (
                                  Te ? X.scrollingElement || $ : ve
                                ).style),
                                value: I["overflow" + Kt.a.toUpperCase()],
                              }).style["overflow" + Kt.a.toUpperCase()] =
                                "scroll"),
                              Ke(yt, x, h),
                              (y = Je(yt)),
                              (b = fe(yt, !0)),
                              (D = Ce && q(ve, w ? L : P)()),
                              _t &&
                              (((O = [_t + Kt.os2, g + Q + se]).t = x),
                                (at = _t === re ? de(yt, Kt) + g + Q : 0) &&
                                O.push(Kt.d, at + se),
                                Ze(O),
                                it &&
                                Ae.forEach(function (t) {
                                  t.pin === it &&
                                    !1 !== t.vars.pinSpacing &&
                                    (t._subPinOffset = !0);
                                }),
                                Ce && We(J)),
                              Ce &&
                              (((E = {
                                top: b.top + (w ? _ - u : D) + se,
                                left: b.left + (w ? D : _ - u) + se,
                                boxSizing: "border-box",
                                position: "fixed",
                              })[Qt] = E["max" + oe] =
                                Math.ceil(b.width) + se),
                                (E[Zt] = E["max" + ae] =
                                  Math.ceil(b.height) + se),
                                (E[ie] =
                                  E[ie + ee] =
                                  E[ie + Jt] =
                                  E[ie + ne] =
                                  E[ie + te] =
                                  "0"),
                                (E[re] = h[re]),
                                (E[re + ee] = h[re + ee]),
                                (E[re + Jt] = h[re + Jt]),
                                (E[re + ne] = h[re + ne]),
                                (E[re + te] = h[re + te]),
                                (v = tn(m, E, qt)),
                                bt && We(0)),
                              n
                                ? ((R = n._initted),
                                  ut(1),
                                  n.render(n.duration(), !0, !0),
                                  (A = T(Kt.a) - C + g + Q),
                                  (M = Math.abs(g - A) > 1),
                                  Ce && M && v.splice(v.length - 2, 2),
                                  n.render(0, !0, !0),
                                  R || n.invalidate(!0),
                                  n.parent || n.totalTime(n.totalTime()),
                                  ut(0))
                                : (A = g),
                              I &&
                              (I.value
                                ? (I.style[
                                  "overflow" + Kt.a.toUpperCase()
                                ] = I.value)
                                : I.style.removeProperty(
                                  "overflow-" + Kt.a
                                ));
                          else if (mt && We() && !Vt)
                            for (b = mt.parentNode; b && b !== V;)
                              b._pinOffset &&
                                ((u -= b._pinOffset), (l -= b._pinOffset)),
                                (b = b.parentNode);
                          j &&
                            j.forEach(function (t) {
                              return t.revert(!1, !0);
                            }),
                            (Re.start = u),
                            (Re.end = l),
                            (a = s = bt ? J : We()),
                            Vt || bt || (a < J && We(J), (Re.scroll.rec = 0)),
                            Re.revert(!1, !0),
                            U &&
                            ((Be = -1),
                              Re.isActive && We(u + g * G),
                              U.restart(!0)),
                            (tt = 0),
                            n &&
                            pe &&
                            (n._initted || nt) &&
                            n.progress() !== nt &&
                            n.progress(nt, !0).render(n.time(), !0, !0),
                            (Y || G !== Re.progress || Vt) &&
                            (n &&
                              !pe &&
                              n.totalProgress(
                                Vt && u < -0.001 && !G
                                  ? z.utils.normalize(u, l, 0)
                                  : G,
                                !0
                              ),
                              (Re.progress = (a - u) / g === G ? 0 : G)),
                            yt &&
                            _t &&
                            (x._pinOffset = Math.round(Re.progress * A)),
                            B && B.invalidate(),
                            pt && !bt && pt(Re);
                        }
                    }),
                    (Re.getVelocity = function () {
                      return ((We() - s) / (Tt() - Z)) * 1e3 || 0;
                    }),
                    (Re.endAnimation = function () {
                      Yt(Re.callbackAnimation),
                        n &&
                        (B
                          ? B.progress(1)
                          : n.paused()
                            ? pe || Yt(n, Re.direction < 0, 1)
                            : Yt(n, n.reversed()));
                    }),
                    (Re.labelToScroll = function (t) {
                      return (
                        (n &&
                          n.labels &&
                          (u || Re.refresh() || u) +
                          (n.labels[t] / n.duration()) * g) ||
                        0
                      );
                    }),
                    (Re.getTrailing = function (t) {
                      var e = Ae.indexOf(Re),
                        n =
                          Re.direction > 0
                            ? Ae.slice(0, e).reverse()
                            : Ae.slice(e + 1);
                      return (
                        Bt(t)
                          ? n.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                          : n
                      ).filter(function (t) {
                        return Re.direction > 0 ? t.end <= u : t.start >= l;
                      });
                    }),
                    (Re.update = function (t, e, i) {
                      if (!Vt || i || t) {
                        var o,
                          c,
                          f,
                          p,
                          h,
                          m,
                          b,
                          _ = !0 === bt ? J : Re.scroll(),
                          w = t ? 0 : (_ - u) / g,
                          T = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                          E = Re.progress;
                        if (
                          (e &&
                            ((s = a),
                              (a = Vt ? We() : _),
                              Pt &&
                              ((H = I),
                                (I = n && !pe ? n.totalProgress() : T))),
                            At &&
                            !T &&
                            yt &&
                            !tt &&
                            !wt &&
                            St &&
                            u < _ + ((_ - s) / (Tt() - Z)) * At &&
                            (T = 1e-4),
                            T !== E && Re.enabled)
                        ) {
                          if (
                            ((p =
                              (h =
                                (o = Re.isActive = !!T && T < 1) !=
                                (!!E && E < 1)) || !!T != !!E),
                              (Re.direction = T > E ? 1 : -1),
                              (Re.progress = T),
                              p &&
                              !tt &&
                              ((c =
                                T && !E ? 0 : 1 === T ? 1 : 1 === E ? 2 : 3),
                                pe &&
                                ((f =
                                  (!h && "none" !== Me[c + 1] && Me[c + 1]) ||
                                  Me[c]),
                                  (b =
                                    n &&
                                    ("complete" === f ||
                                      "reset" === f ||
                                      f in n)))),
                              Gt &&
                              (h || b) &&
                              (b || ht || !n) &&
                              (Ft(Gt)
                                ? Gt(Re)
                                : Re.getTrailing(Gt).forEach(function (t) {
                                  return t.endAnimation();
                                })),
                              pe ||
                              (!B || tt || wt
                                ? n && n.totalProgress(T, !!tt)
                                : (B._dp._time - B._start !== B._time &&
                                  B.render(B._dp._time - B._start),
                                  B.resetTo
                                    ? B.resetTo(
                                      "totalProgress",
                                      T,
                                      n._tTime / n._tDur
                                    )
                                    : ((B.vars.totalProgress = T),
                                      B.invalidate().restart()))),
                              yt)
                          )
                            if ((t && _t && (x.style[_t + Kt.os2] = k), Ce)) {
                              if (p) {
                                if (
                                  ((m =
                                    !t &&
                                    T > E &&
                                    l + 1 > _ &&
                                    _ + 1 >= It(ve, Kt)),
                                    qt)
                                )
                                  if (t || (!o && !m)) on(yt, x);
                                  else {
                                    var O = fe(yt, !0),
                                      L = _ - u;
                                    on(
                                      yt,
                                      V,
                                      O.top + (Kt === P ? L : 0) + se,
                                      O.left + (Kt === P ? 0 : L) + se
                                    );
                                  }
                                Ze(o || m ? v : y),
                                  (M && T < 1 && o) ||
                                  S(C + (1 !== T || m ? 0 : A));
                              }
                            } else S(Mt(C + A * T));
                          Pt && !r.tween && !tt && !wt && U.restart(!0),
                            ct &&
                            (h || (Lt && T && (T < 1 || !vt))) &&
                            K(ct.targets).forEach(function (t) {
                              return t.classList[
                                o || Lt ? "add" : "remove"
                              ](ct.className);
                            }),
                            lt && !pe && !t && lt(Re),
                            p && !tt
                              ? (pe &&
                                (b &&
                                  ("complete" === f
                                    ? n.pause().totalProgress(1)
                                    : "reset" === f
                                      ? n.restart(!0).pause()
                                      : "restart" === f
                                        ? n.restart(!0)
                                        : n[f]()),
                                  lt && lt(Re)),
                                (!h && vt) ||
                                (dt && h && Xt(Re, dt),
                                  Oe[c] && Xt(Re, Oe[c]),
                                  Lt &&
                                  (1 === T ? Re.kill(!1, 1) : (Oe[c] = 0)),
                                  h ||
                                  (Oe[(c = 1 === T ? 1 : 3)] &&
                                    Xt(Re, Oe[c]))),
                                Ut &&
                                !o &&
                                Math.abs(Re.getVelocity()) >
                                (zt(Ut) ? Ut : 2500) &&
                                (Yt(Re.callbackAnimation),
                                  B
                                    ? B.progress(1)
                                    : Yt(n, "reverse" === f ? 1 : !T, 1)))
                              : pe && lt && !tt && lt(Re);
                        }
                        if (R) {
                          var N = Vt
                            ? (_ / Vt.duration()) * (Vt._caScrollDist || 0)
                            : _;
                          D(N + (d._isFlipped ? 1 : 0)), R(N);
                        }
                        it &&
                          it((-_ / Vt.duration()) * (Vt._caScrollDist || 0));
                      }
                    }),
                    (Re.enable = function (e, n) {
                      Re.enabled ||
                        ((Re.enabled = !0),
                          ye(ve, "resize", Le),
                          ye(Te ? X : ve, "scroll", De),
                          je && ye(t, "refreshInit", je),
                          !1 !== e &&
                          ((Re.progress = G = 0), (a = s = Be = We())),
                          !1 !== n && Re.refresh());
                    }),
                    (Re.getTween = function (t) {
                      return t && r ? r.tween : B;
                    }),
                    (Re.setPositions = function (t, e) {
                      yt &&
                        ((C += t - u),
                          (A += e - t - g),
                          _t === re && Re.adjustPinSpacing(e - t - g)),
                        (Re.start = u = t),
                        (Re.end = l = e),
                        (g = e - t),
                        Re.update();
                    }),
                    (Re.adjustPinSpacing = function (t) {
                      if (O && t) {
                        var e = O.indexOf(Kt.d) + 1;
                        (O[e] = parseFloat(O[e]) + t + se),
                          (O[1] = parseFloat(O[1]) + t + se),
                          Ze(O);
                      }
                    }),
                    (Re.disable = function (e, n) {
                      if (
                        Re.enabled &&
                        (!1 !== e && Re.revert(!0, !0),
                          (Re.enabled = Re.isActive = !1),
                          n || (B && B.pause()),
                          (J = 0),
                          i && (i.uncache = 1),
                          je && be(t, "refreshInit", je),
                          U &&
                          (U.pause(),
                            r.tween && r.tween.kill() && (r.tween = 0)),
                          !Te)
                      ) {
                        for (var o = Ae.length; o--;)
                          if (Ae[o].scroller === ve && Ae[o] !== Re) return;
                        be(ve, "resize", Le), be(ve, "scroll", De);
                      }
                    }),
                    (Re.kill = function (t, r) {
                      Re.disable(t, r),
                        B && !r && B.kill(),
                        ft && delete ke[ft];
                      var o = Ae.indexOf(Re);
                      o >= 0 && Ae.splice(o, 1),
                        o === rt && Xe > 0 && rt--,
                        (o = 0),
                        Ae.forEach(function (t) {
                          return t.scroller === Re.scroller && (o = 1);
                        }),
                        o || bt || (Re.scroll.rec = 0),
                        n &&
                        ((n.scrollTrigger = null),
                          t && n.revert({ kill: !1 }),
                          r || n.kill()),
                        c &&
                        [c, f, d, p].forEach(function (t) {
                          return (
                            t.parentNode && t.parentNode.removeChild(t)
                          );
                        }),
                        xt === Re && (xt = 0),
                        yt &&
                        (i && (i.uncache = 1),
                          (o = 0),
                          Ae.forEach(function (t) {
                            return t.pin === yt && o++;
                          }),
                          o || (i.spacer = 0)),
                        e.onKill && e.onKill(Re);
                    }),
                    Re.enable(!1, !1),
                    ot && ot(Re),
                    n && n.add && !g
                      ? z.delayedCall(0.01, function () {
                        return u || l || Re.refresh();
                      }) &&
                      (g = 0.01) &&
                      (u = l = 0)
                      : Re.refresh(),
                    yt && ze();
                } else this.update = this.refresh = this.kill = Dt;
              }),
              (t.register = function (e) {
                return (
                  W ||
                  ((z = e || Pt()),
                    Lt() && window.document && t.enable(),
                    (W = Ct)),
                  W
                );
              }),
              (t.defaults = function (t) {
                if (t) for (var e in t) we[e] = t[e];
                return we;
              }),
              (t.disable = function (t, e) {
                (Ct = 0),
                  Ae.forEach(function (n) {
                    return n[e ? "kill" : "disable"](t);
                  }),
                  be(Y, "wheel", De),
                  be(X, "scroll", De),
                  clearInterval(J),
                  be(X, "touchcancel", Dt),
                  be(V, "touchstart", Dt),
                  ve(be, X, "pointerdown,touchstart,mousedown", kt),
                  ve(be, X, "pointerup,touchend,mouseup", Ot),
                  G.kill(),
                  Ht(be);
                for (var n = 0; n < b.length; n += 3)
                  _e(be, b[n], b[n + 1]), _e(be, b[n], b[n + 2]);
              }),
              (t.enable = function () {
                if (
                  ((Y = window),
                    (X = document),
                    ($ = X.documentElement),
                    (V = X.body),
                    z &&
                    ((K = z.utils.toArray),
                      (Q = z.utils.clamp),
                      (gt = z.core.context || Dt),
                      (ut = z.core.suppressOverwrites || Dt),
                      (mt = Y.history.scrollRestoration || "auto"),
                      (Ye = Y.pageYOffset),
                      z.core.globals("ScrollTrigger", t),
                      V))
                ) {
                  (Ct = 1),
                    At(),
                    F.register(z),
                    (t.isTouch = F.isTouch),
                    (ht =
                      F.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    ye(Y, "wheel", De),
                    (U = [Y, X, $, V]),
                    z.matchMedia
                      ? ((t.matchMedia = function (t) {
                        var e,
                          n = z.matchMedia();
                        for (e in t) n.add(e, t[e]);
                        return n;
                      }),
                        z.addEventListener("matchMediaInit", function () {
                          return He();
                        }),
                        z.addEventListener("matchMediaRevert", function () {
                          return Ie();
                        }),
                        z.addEventListener("matchMedia", function () {
                          We(0, 1), Re("matchMedia");
                        }),
                        z.matchMedia("(orientation: portrait)", function () {
                          return Me(), Me;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    Me(),
                    ye(X, "scroll", De);
                  var e,
                    n,
                    r = V.style,
                    i = r.borderTopStyle,
                    o = z.core.Animation.prototype;
                  for (
                    o.revert ||
                    Object.defineProperty(o, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    r.borderTopStyle = "solid",
                    e = fe(V),
                    P.m = Math.round(e.top + P.sc()) || 0,
                    L.m = Math.round(e.left + L.sc()) || 0,
                    i
                      ? (r.borderTopStyle = i)
                      : r.removeProperty("border-top-style"),
                    J = setInterval(Oe, 250),
                    z.delayedCall(0.5, function () {
                      return (wt = 0);
                    }),
                    ye(X, "touchcancel", Dt),
                    ye(V, "touchstart", Dt),
                    ve(ye, X, "pointerdown,touchstart,mousedown", kt),
                    ve(ye, X, "pointerup,touchend,mouseup", Ot),
                    nt = z.utils.checkPrefix("transform"),
                    Ue.push(nt),
                    W = Tt(),
                    G = z.delayedCall(0.2, We).pause(),
                    at = [
                      X,
                      "visibilitychange",
                      function () {
                        var t = Y.innerWidth,
                          e = Y.innerHeight;
                        X.hidden
                          ? ((it = t), (ot = e))
                          : (it === t && ot === e) || Le();
                      },
                      X,
                      "DOMContentLoaded",
                      We,
                      Y,
                      "load",
                      We,
                      Y,
                      "resize",
                      Le,
                    ],
                    Ht(ye),
                    Ae.forEach(function (t) {
                      return t.enable(0, 1);
                    }),
                    n = 0;
                    n < b.length;
                    n += 3
                  )
                    _e(be, b[n], b[n + 1]), _e(be, b[n], b[n + 2]);
                }
              }),
              (t.config = function (e) {
                "limitCallbacks" in e && (vt = !!e.limitCallbacks);
                var n = e.syncInterval;
                (n && clearInterval(J)) || ((J = n) && setInterval(Oe, n)),
                  "ignoreMobileResize" in e &&
                  (ft = 1 === t.isTouch && e.ignoreMobileResize),
                  "autoRefreshEvents" in e &&
                  (Ht(be) || Ht(ye, e.autoRefreshEvents || "none"),
                    (lt =
                      -1 === (e.autoRefreshEvents + "").indexOf("resize")));
              }),
              (t.scrollerProxy = function (t, e) {
                var n = N(t),
                  r = b.indexOf(n),
                  i = Nt(n);
                ~r && b.splice(r, i ? 6 : 2),
                  e && (i ? _.unshift(Y, e, V, e, $, e) : _.unshift(n, e));
              }),
              (t.clearMatchMedia = function (t) {
                Ae.forEach(function (e) {
                  return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                });
              }),
              (t.isInViewport = function (t, e, n) {
                var r = (Bt(t) ? N(t) : t).getBoundingClientRect(),
                  i = r[n ? Qt : Zt] * e || 0;
                return n
                  ? r.right - i > 0 && r.left + i < Y.innerWidth
                  : r.bottom - i > 0 && r.top + i < Y.innerHeight;
              }),
              (t.positionInViewport = function (t, e, n) {
                Bt(t) && (t = N(t));
                var r = t.getBoundingClientRect(),
                  i = r[n ? Qt : Zt],
                  o =
                    null == e
                      ? i / 2
                      : e in Te
                        ? Te[e] * i
                        : ~e.indexOf("%")
                          ? (parseFloat(e) * i) / 100
                          : parseFloat(e) || 0;
                return n
                  ? (r.left + o) / Y.innerWidth
                  : (r.top + o) / Y.innerHeight;
              }),
              (t.killAll = function (t) {
                if (
                  (Ae.slice(0).forEach(function (t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill();
                  }),
                    !0 !== t)
                ) {
                  var e = Pe.killAll || [];
                  (Pe = {}),
                    e.forEach(function (t) {
                      return t();
                    });
                }
              }),
              t
            );
          })();
        (un.version = "3.11.5"),
          (un.saveStyles = function (t) {
            return t
              ? K(t).forEach(function (t) {
                if (t && t.style) {
                  var e = je.indexOf(t);
                  e >= 0 && je.splice(e, 5),
                    je.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute("transform"),
                      z.core.getCache(t),
                      gt()
                    );
                }
              })
              : je;
          }),
          (un.revert = function (t, e) {
            return He(!t, e);
          }),
          (un.create = function (t, e) {
            return new un(t, e);
          }),
          (un.refresh = function (t) {
            return t ? Le() : (W || un.register()) && We(!0);
          }),
          (un.update = function (t) {
            return ++b.cache && $e(!0 === t ? 2 : 0);
          }),
          (un.clearScrollMemory = Be),
          (un.maxScroll = function (t, e) {
            return It(t, e ? L : P);
          }),
          (un.getScrollFunc = function (t, e) {
            return q(N(t), e ? L : P);
          }),
          (un.getById = function (t) {
            return ke[t];
          }),
          (un.getAll = function () {
            return Ae.filter(function (t) {
              return "ScrollSmoother" !== t.vars.id;
            });
          }),
          (un.isScrolling = function () {
            return !!St;
          }),
          (un.snapDirectional = ge),
          (un.addEventListener = function (t, e) {
            var n = Pe[t] || (Pe[t] = []);
            ~n.indexOf(e) || n.push(e);
          }),
          (un.removeEventListener = function (t, e) {
            var n = Pe[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          }),
          (un.batch = function (t, e) {
            var n,
              r = [],
              i = {},
              o = e.interval || 0.016,
              a = e.batchMax || 1e9,
              s = function (t, e) {
                var n = [],
                  r = [],
                  i = z
                    .delayedCall(o, function () {
                      e(n, r), (n = []), (r = []);
                    })
                    .pause();
                return function (t) {
                  n.length || i.restart(!0),
                    n.push(t.trigger),
                    r.push(t),
                    a <= n.length && i.progress(1);
                };
              };
            for (n in e)
              i[n] =
                "on" === n.substr(0, 2) && Ft(e[n]) && "onRefreshInit" !== n
                  ? s(n, e[n])
                  : e[n];
            return (
              Ft(a) &&
              ((a = a()),
                ye(un, "refresh", function () {
                  return (a = e.batchMax());
                })),
              K(t).forEach(function (t) {
                var e = {};
                for (n in i) e[n] = i[n];
                (e.trigger = t), r.push(un.create(e));
              }),
              r
            );
          });
        var ln,
          cn = function (t, e, n, r) {
            return (
              e > r ? t(r) : e < 0 && t(0),
              n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
            );
          },
          fn = function t(e, n) {
            !0 === n
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                !0 === n
                  ? "auto"
                  : n
                    ? "pan-" + n + (F.isTouch ? " pinch-zoom" : "")
                    : "none"),
              e === $ && t(V, n);
          },
          dn = { auto: 1, scroll: 1 },
          pn = function (t) {
            var e,
              n = t.event,
              r = t.target,
              i = t.axis,
              o = (n.changedTouches ? n.changedTouches[0] : n).target,
              a = o._gsap || z.core.getCache(o),
              s = Tt();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
              for (
                ;
                o &&
                o !== V &&
                ((o.scrollHeight <= o.clientHeight &&
                  o.scrollWidth <= o.clientWidth) ||
                  (!dn[(e = ue(o)).overflowY] && !dn[e.overflowX]));

              )
                o = o.parentNode;
              (a._isScroll =
                o &&
                o !== r &&
                !Nt(o) &&
                (dn[(e = ue(o)).overflowY] || dn[e.overflowX])),
                (a._isScrollT = s);
            }
            (a._isScroll || "x" === i) &&
              (n.stopPropagation(), (n._gsapAllow = !0));
          },
          hn = function (t, e, n, r) {
            return F.create({
              target: t,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: e,
              onWheel: (r = r && pn),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && ye(X, F.eventTypes[0], mn, !1, !0);
              },
              onDisable: function () {
                return be(X, F.eventTypes[0], mn, !0);
              },
            });
          },
          gn = /(input|label|select|textarea)/i,
          mn = function (t) {
            var e = gn.test(t.target.tagName);
            (e || ln) && ((t._gsapAllow = !0), (ln = e));
          },
          vn = function (t) {
            Wt(t) || (t = {}),
              (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
              t.type || (t.type = "wheel,touch"),
              (t.debounce = !!t.debounce),
              (t.id = t.id || "normalizer");
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = t,
              c = l.normalizeScrollX,
              f = l.momentum,
              d = l.allowNestedScroll,
              p = l.onRelease,
              h = N(t.target) || $,
              g = z.core.globals().ScrollSmoother,
              m = g && g.get(),
              v =
                ht &&
                ((t.content && N(t.content)) ||
                  (m && !1 !== t.content && !m.smooth() && m.content())),
              y = q(h, P),
              _ = q(h, L),
              x = 1,
              w =
                (F.isTouch && Y.visualViewport
                  ? Y.visualViewport.scale * Y.visualViewport.width
                  : Y.outerWidth) / Y.innerWidth,
              T = 0,
              E = Ft(f)
                ? function () {
                  return f(e);
                }
                : function () {
                  return f || 2.8;
                },
              S = hn(h, t.type, !0, d),
              C = function () {
                return (i = !1);
              },
              A = Dt,
              k = Dt,
              O = function () {
                (n = It(h, P)),
                  (k = Q(ht ? 1 : 0, n)),
                  c && (A = Q(0, It(h, L))),
                  (r = Fe);
              },
              D = function () {
                (v._gsap.y = Mt(parseFloat(v._gsap.y) + y.offset) + "px"),
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(v._gsap.y) +
                    ", 0, 1)"),
                  (y.offset = y.cacheID = 0);
              },
              M = function () {
                if (i) {
                  requestAnimationFrame(C);
                  var t = Mt(e.deltaY / 2),
                    n = k(y.v - t);
                  if (v && n !== y.v + y.offset) {
                    y.offset = n - y.v;
                    var r = Mt((parseFloat(v && v._gsap.y) || 0) - y.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (v._gsap.y = r + "px"),
                      (y.cacheID = b.cache),
                      $e();
                  }
                  return !0;
                }
                y.offset && D(), (i = !0);
              },
              R = function () {
                O(),
                  o.isActive() &&
                  o.vars.scrollY > n &&
                  (y() > n
                    ? o.progress(1) && y(n)
                    : o.resetTo("scrollY", n));
              };
            return (
              v && z.set(v, { y: "+=0" }),
              (t.ignoreCheck = function (t) {
                return (
                  (ht && "touchmove" === t.type && M()) ||
                  (x > 1.05 && "touchstart" !== t.type) ||
                  e.isGesturing ||
                  (t.touches && t.touches.length > 1)
                );
              }),
              (t.onPress = function () {
                i = !1;
                var t = x;
                (x = Mt(
                  ((Y.visualViewport && Y.visualViewport.scale) || 1) / w
                )),
                  o.pause(),
                  t !== x && fn(h, x > 1.01 || (!c && "x")),
                  (a = _()),
                  (s = y()),
                  O(),
                  (r = Fe);
              }),
              (t.onRelease = t.onGestureStart =
                function (t, e) {
                  if ((y.offset && D(), e)) {
                    b.cache++;
                    var r,
                      i,
                      a = E();
                    c &&
                      ((i = (r = _()) + (0.05 * a * -t.velocityX) / 0.227),
                        (a *= cn(_, r, i, It(h, L))),
                        (o.vars.scrollX = A(i))),
                      (i = (r = y()) + (0.05 * a * -t.velocityY) / 0.227),
                      (a *= cn(y, r, i, It(h, P))),
                      (o.vars.scrollY = k(i)),
                      o.invalidate().duration(a).play(0.01),
                      ((ht && o.vars.scrollY >= n) || r >= n - 1) &&
                      z.to({}, { onUpdate: R, duration: a });
                  } else u.restart(!0);
                  p && p(t);
                }),
              (t.onWheel = function () {
                o._ts && o.pause(), Tt() - T > 1e3 && ((r = 0), (T = Tt()));
              }),
              (t.onChange = function (t, e, n, i, o) {
                if (
                  (Fe !== r && O(),
                    e &&
                    c &&
                    _(A(i[2] === e ? a + (t.startX - t.x) : _() + e - i[1])),
                    n)
                ) {
                  y.offset && D();
                  var u = o[2] === n,
                    l = u ? s + t.startY - t.y : y() + n - o[1],
                    f = k(l);
                  u && l !== f && (s += f - l), y(f);
                }
                (n || e) && $e();
              }),
              (t.onEnable = function () {
                fn(h, !c && "x"),
                  un.addEventListener("refresh", R),
                  ye(Y, "resize", R),
                  y.smooth &&
                  ((y.target.style.scrollBehavior = "auto"),
                    (y.smooth = _.smooth = !1)),
                  S.enable();
              }),
              (t.onDisable = function () {
                fn(h, !0),
                  be(Y, "resize", R),
                  un.removeEventListener("refresh", R),
                  S.kill();
              }),
              (t.lockAxis = !1 !== t.lockAxis),
              ((e = new F(t)).iOS = ht),
              ht && !y() && y(1),
              ht && z.ticker.add(Dt),
              (u = e._dc),
              (o = z.to(e, {
                ease: "power4",
                paused: !0,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: an(y, y(), function () {
                    return o.pause();
                  }),
                },
                onUpdate: $e,
                onComplete: u.vars.onComplete,
              })),
              e
            );
          };
        (un.sort = function (t) {
          return Ae.sort(
            t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                t.start -
                (e.start + -1e6 * (e.vars.refreshPriority || 0))
              );
            }
          );
        }),
          (un.observe = function (t) {
            return new F(t);
          }),
          (un.normalizeScroll = function (t) {
            if (void 0 === t) return ct;
            if (!0 === t && ct) return ct.enable();
            if (!1 === t) return ct && ct.kill();
            var e = t instanceof F ? t : vn(t);
            return (
              ct && ct.target === e.target && ct.kill(),
              Nt(e.target) && (ct = e),
              e
            );
          }),
          (un.core = {
            _getVelocityProp: R,
            _inputObserver: hn,
            _scrollers: b,
            _proxies: _,
            bridge: {
              ss: function () {
                St || Re("scrollStart"), (St = Tt());
              },
              ref: function () {
                return tt;
              },
            },
          }),
          Pt() && z.registerPlugin(un),
          (t.ScrollTrigger = un),
          (t.default = un),
          "undefined" == typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete window.default;
      })(e);
    },
    521: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        function n(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          m,
          v,
          y,
          b,
          _ = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          x = { duration: 0.5, overwrite: !1, delay: 0 },
          w = 1e8,
          T = 1 / w,
          E = 2 * Math.PI,
          S = E / 4,
          C = 0,
          A = Math.sqrt,
          k = Math.cos,
          O = Math.sin,
          D = function (t) {
            return "string" == typeof t;
          },
          M = function (t) {
            return "function" == typeof t;
          },
          L = function (t) {
            return "number" == typeof t;
          },
          P = function (t) {
            return void 0 === t;
          },
          N = function (t) {
            return "object" == typeof t;
          },
          q = function (t) {
            return !1 !== t;
          },
          R = function () {
            return "undefined" != typeof window;
          },
          j = function (t) {
            return M(t) || D(t);
          },
          I =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () { },
          H = Array.isArray,
          B = /(?:-?\.?\d|\.)+/gi,
          F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          Y = /[+-]=-?[.\d]+/,
          X = /[^,'"\[\]\s]+/gi,
          $ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          V = {},
          U = {},
          G = function (t) {
            return (U = St(t, V)) && Wn;
          },
          K = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          Q = function (t, e) {
            return !e && console.warn(t);
          },
          Z = function (t, e) {
            return (t && (V[t] = e) && U && (U[t] = e)) || V;
          },
          J = function () {
            return 0;
          },
          tt = { suppressEvents: !0, isStart: !0, kill: !1 },
          et = { suppressEvents: !0, kill: !1 },
          nt = { suppressEvents: !0 },
          rt = {},
          it = [],
          ot = {},
          at = {},
          st = {},
          ut = 30,
          lt = [],
          ct = "",
          ft = function (t) {
            var e,
              n,
              r = t[0];
            if ((N(r) || M(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
              for (n = lt.length; n-- && !lt[n].targetTest(r););
              e = lt[n];
            }
            for (n = t.length; n--;)
              (t[n] && (t[n]._gsap || (t[n]._gsap = new Je(t[n], e)))) ||
                t.splice(n, 1);
            return t;
          },
          dt = function (t) {
            return t._gsap || ft(ue(t))[0]._gsap;
          },
          pt = function (t, e, n) {
            return (n = t[e]) && M(n)
              ? t[e]()
              : (P(n) && t.getAttribute && t.getAttribute(e)) || n;
          },
          ht = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          gt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          mt = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          vt = function (t, e) {
            var n = e.charAt(0),
              r = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === n
                ? t + r
                : "-" === n
                  ? t - r
                  : "*" === n
                    ? t * r
                    : t / r
            );
          },
          yt = function (t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n;
          },
          bt = function () {
            var t,
              e,
              n = it.length,
              r = it.slice(0);
            for (ot = {}, it.length = 0, t = 0; t < n; t++)
              (e = r[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          _t = function (t, e, n, r) {
            it.length && !i && bt(),
              t.render(e, n, r || (i && e < 0 && (t._initted || t._startAt))),
              it.length && !i && bt();
          },
          xt = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(X).length < 2
              ? e
              : D(t)
                ? t.trim()
                : t;
          },
          wt = function (t) {
            return t;
          },
          Tt = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
          },
          Et = function (t) {
            return function (e, n) {
              for (var r in n)
                r in e ||
                  ("duration" === r && t) ||
                  "ease" === r ||
                  (e[r] = n[r]);
            };
          },
          St = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          },
          Ct = function t(e, n) {
            for (var r in n)
              "__proto__" !== r &&
                "constructor" !== r &&
                "prototype" !== r &&
                (e[r] = N(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
            return e;
          },
          At = function (t, e) {
            var n,
              r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r;
          },
          kt = function (t) {
            var e = t.parent || a,
              n = t.keyframes ? Et(H(t.keyframes)) : Tt;
            if (q(t.inherit))
              for (; e;) n(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          Ot = function (t, e) {
            for (
              var n = t.length, r = n === e.length;
              r && n-- && t[n] === e[n];

            );
            return n < 0;
          },
          Dt = function (t, e, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var o,
              a = t[r];
            if (i) for (o = e[i]; a && a[i] > o;) a = a._prev;
            return (
              a
                ? ((e._next = a._next), (a._next = e))
                : ((e._next = t[n]), (t[n] = e)),
              e._next ? (e._next._prev = e) : (t[r] = e),
              (e._prev = a),
              (e.parent = e._dp = t),
              e
            );
          },
          Mt = function (t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
              o = e._next;
            i ? (i._next = o) : t[n] === e && (t[n] = o),
              o ? (o._prev = i) : t[r] === e && (t[r] = i),
              (e._next = e._prev = e.parent = null);
          },
          Lt = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove(t),
              (t._act = 0);
          },
          Pt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var n = t; n;) (n._dirty = 1), (n = n.parent);
            return t;
          },
          Nt = function (t) {
            for (var e = t.parent; e && e.parent;)
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          qt = function (t, e, n, r) {
            return (
              t._startAt &&
              (i
                ? t._startAt.revert(et)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
            );
          },
          Rt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          jt = function (t) {
            return t._repeat
              ? It(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          It = function (t, e) {
            var n = Math.floor((t /= e));
            return t && n === t ? n - 1 : n;
          },
          Ht = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Bt = function (t) {
            return (t._end = mt(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || T) || 0)
            ));
          },
          Ft = function (t, e) {
            var n = t._dp;
            return (
              n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = mt(
                n._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                  -t._ts)
              )),
                Bt(t),
                n._dirty || Pt(n, t)),
              t
            );
          },
          zt = function (t, e) {
            var n;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((n = Ht(t.rawTime(), e)),
                  (!e._dur || ne(0, e.totalDuration(), n) - e._tTime > T) &&
                  e.render(n, !0)),
                Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (n = t; n._dp;)
                  n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
              t._zTime = -T;
            }
          },
          Wt = function (t, e, n, r) {
            return (
              e.parent && Lt(e),
              (e._start = mt(
                (L(n) ? n : n || t !== a ? Jt(t, n, e) : t._time) + e._delay
              )),
              (e._end = mt(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              Dt(t, e, "_first", "_last", t._sort ? "_start" : 0),
              Vt(e) || (t._recent = e),
              r || zt(t, e),
              t._ts < 0 && Ft(t, t._tTime),
              t
            );
          },
          Yt = function (t, e) {
            return (
              (V.ScrollTrigger || K("scrollTrigger", e)) &&
              V.ScrollTrigger.create(e, t)
            );
          },
          Xt = function (t, e, n, r, o) {
            return (
              ln(t, e, o),
              t._initted
                ? !n &&
                  t._pt &&
                  !i &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  f !== Ie.frame
                  ? (it.push(t), (t._lazy = [o, r]), 1)
                  : void 0
                : 1
            );
          },
          $t = function t(e) {
            var n = e.parent;
            return (
              n &&
              n._ts &&
              n._initted &&
              !n._lock &&
              (n.rawTime() < 0 || t(n))
            );
          },
          Vt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          Ut = function (t, e, n, r) {
            var o,
              a,
              s,
              u = t.ratio,
              l =
                e < 0 ||
                  (!e &&
                    ((!t._start && $t(t) && (t._initted || !Vt(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                  ? 0
                  : 1,
              c = t._rDelay,
              f = 0;
            if (
              (c &&
                t._repeat &&
                ((f = ne(0, t._tDur, e)),
                  (a = It(f, c)),
                  t._yoyo && 1 & a && (l = 1 - l),
                  a !== It(t._tTime, c) &&
                  ((u = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== u || i || r || t._zTime === T || (!e && t._zTime))
            ) {
              if (!t._initted && Xt(t, e, r, n, f)) return;
              for (
                s = t._zTime,
                t._zTime = e || (n ? T : 0),
                n || (n = e && !s),
                t.ratio = l,
                t._from && (l = 1 - l),
                t._time = 0,
                t._tTime = f,
                o = t._pt;
                o;

              )
                o.r(l, o.d), (o = o._next);
              e < 0 && qt(t, e, n, !0),
                t._onUpdate && !n && Se(t, "onUpdate"),
                f && t._repeat && !n && t.parent && Se(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                t.ratio === l &&
                (l && Lt(t, 1),
                  n ||
                  i ||
                  (Se(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          },
          Gt = function (t, e, n) {
            var r;
            if (n > e)
              for (r = t._first; r && r._start <= n;) {
                if ("isPause" === r.data && r._start > e) return r;
                r = r._next;
              }
            else
              for (r = t._last; r && r._start >= n;) {
                if ("isPause" === r.data && r._start < e) return r;
                r = r._prev;
              }
          },
          Kt = function (t, e, n, r) {
            var i = t._repeat,
              o = mt(e) || 0,
              a = t._tTime / t._tDur;
            return (
              a && !r && (t._time *= o / t._dur),
              (t._dur = o),
              (t._tDur = i
                ? i < 0
                  ? 1e10
                  : mt(o * (i + 1) + t._rDelay * i)
                : o),
              a > 0 && !r && Ft(t, (t._tTime = t._tDur * a)),
              t.parent && Bt(t),
              n || Pt(t.parent, t),
              t
            );
          },
          Qt = function (t) {
            return t instanceof en ? Pt(t) : Kt(t, t._dur);
          },
          Zt = { _start: 0, endTime: J, totalDuration: J },
          Jt = function t(e, n, r) {
            var i,
              o,
              a,
              s = e.labels,
              u = e._recent || Zt,
              l = e.duration() >= w ? u.endTime(!1) : e._dur;
            return D(n) && (isNaN(n) || n in s)
              ? ((o = n.charAt(0)),
                (a = "%" === n.substr(-1)),
                (i = n.indexOf("=")),
                "<" === o || ">" === o
                  ? (i >= 0 && (n = n.replace(/=/, "")),
                    ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                    (a ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                  : i < 0
                    ? (n in s || (s[n] = l), s[n])
                    : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                      a &&
                      r &&
                      (o = (o / 100) * (H(r) ? r[0] : r).totalDuration()),
                      i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o))
              : null == n
                ? l
                : +n;
          },
          te = function (t, e, n) {
            var r,
              i,
              o = L(e[1]),
              a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
              s = e[a];
            if ((o && (s.duration = e[1]), (s.parent = n), t)) {
              for (r = s, i = n; i && !("immediateRender" in r);)
                (r = i.vars.defaults || {}),
                  (i = q(i.vars.inherit) && i.parent);
              (s.immediateRender = q(r.immediateRender)),
                t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
            }
            return new mn(e[0], s, e[a + 1]);
          },
          ee = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          ne = function (t, e, n) {
            return n < t ? t : n > e ? e : n;
          },
          re = function (t, e) {
            return D(t) && (e = $.exec(t)) ? e[1] : "";
          },
          ie = function (t, e, n) {
            return ee(n, function (n) {
              return ne(t, e, n);
            });
          },
          oe = [].slice,
          ae = function (t, e) {
            return (
              t &&
              N(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && N(t[0]))) &&
              !t.nodeType &&
              t !== s
            );
          },
          se = function (t, e, n) {
            return (
              void 0 === n && (n = []),
              t.forEach(function (t) {
                var r;
                return (D(t) && !e) || ae(t, 1)
                  ? (r = n).push.apply(r, ue(t))
                  : n.push(t);
              }) || n
            );
          },
          ue = function (t, e, n) {
            return o && !e && o.selector
              ? o.selector(t)
              : !D(t) || n || (!u && He())
                ? H(t)
                  ? se(t, n)
                  : ae(t)
                    ? oe.call(t, 0)
                    : t
                      ? [t]
                      : []
                : oe.call((e || l).querySelectorAll(t), 0);
          },
          le = function (t) {
            return (
              (t = ue(t)[0] || Q("Invalid scope") || {}),
              function (e) {
                var n = t.current || t.nativeElement || t;
                return ue(
                  e,
                  n.querySelectorAll
                    ? n
                    : n === t
                      ? Q("Invalid scope") || l.createElement("div")
                      : t
                );
              }
            );
          },
          ce = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          fe = function (t) {
            if (M(t)) return t;
            var e = N(t) ? t : { each: t },
              n = Ue(e.ease),
              r = e.from || 0,
              i = parseFloat(e.base) || 0,
              o = {},
              a = r > 0 && r < 1,
              s = isNaN(r) || a,
              u = e.axis,
              l = r,
              c = r;
            return (
              D(r)
                ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
                : !a && s && ((l = r[0]), (c = r[1])),
              function (t, a, f) {
                var d,
                  p,
                  h,
                  g,
                  m,
                  v,
                  y,
                  b,
                  _,
                  x = (f || e).length,
                  T = o[x];
                if (!T) {
                  if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
                    for (
                      y = -w;
                      y < (y = f[_++].getBoundingClientRect().left) && _ < x;

                    );
                    _--;
                  }
                  for (
                    T = o[x] = [],
                    d = s ? Math.min(_, x) * l - 0.5 : r % _,
                    p = _ === w ? 0 : s ? (x * c) / _ - 0.5 : (r / _) | 0,
                    y = 0,
                    b = w,
                    v = 0;
                    v < x;
                    v++
                  )
                    (h = (v % _) - d),
                      (g = p - ((v / _) | 0)),
                      (T[v] = m =
                        u ? Math.abs("y" === u ? g : h) : A(h * h + g * g)),
                      m > y && (y = m),
                      m < b && (b = m);
                  "random" === r && ce(T),
                    (T.max = y - b),
                    (T.min = b),
                    (T.v = x =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                        (_ > x
                          ? x - 1
                          : u
                            ? "y" === u
                              ? x / _
                              : _
                            : Math.max(_, x / _)) ||
                        0) * ("edges" === r ? -1 : 1)),
                    (T.b = x < 0 ? i - x : i),
                    (T.u = re(e.amount || e.each) || 0),
                    (n = n && x < 0 ? $e(n) : n);
                }
                return (
                  (x = (T[t] - T.min) / T.max || 0),
                  mt(T.b + (n ? n(x) : x) * T.v) + T.u
                );
              }
            );
          },
          de = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (n) {
              var r = mt(Math.round(parseFloat(n) / t) * t * e);
              return (r - (r % 1)) / e + (L(n) ? 0 : re(n));
            };
          },
          pe = function (t, e) {
            var n,
              r,
              i = H(t);
            return (
              !i &&
              N(t) &&
              ((n = i = t.radius || w),
                t.values
                  ? ((t = ue(t.values)), (r = !L(t[0])) && (n *= n))
                  : (t = de(t.increment))),
              ee(
                e,
                i
                  ? M(t)
                    ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                    : function (e) {
                      for (
                        var i,
                        o,
                        a = parseFloat(r ? e.x : e),
                        s = parseFloat(r ? e.y : 0),
                        u = w,
                        l = 0,
                        c = t.length;
                        c--;

                      )
                        (i = r
                          ? (i = t[c].x - a) * i + (o = t[c].y - s) * o
                          : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                      return (
                        (l = !n || u <= n ? t[l] : e),
                        r || l === e || L(e) ? l : l + re(e)
                      );
                    }
                  : de(t)
              )
            );
          },
          he = function (t, e, n, r) {
            return ee(H(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
              return H(t)
                ? t[~~(Math.random() * t.length)]
                : (n = n || 1e-5) &&
                (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                  ) *
                  n *
                  r
                ) / r;
            });
          },
          ge = function () {
            for (
              var t = arguments.length, e = new Array(t), n = 0;
              n < t;
              n++
            )
              e[n] = arguments[n];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          me = function (t, e) {
            return function (n) {
              return t(parseFloat(n)) + (e || re(n));
            };
          },
          ve = function (t, e, n) {
            return we(t, e, 0, 1, n);
          },
          ye = function (t, e, n) {
            return ee(n, function (n) {
              return t[~~e(n)];
            });
          },
          be = function t(e, n, r) {
            var i = n - e;
            return H(e)
              ? ye(e, t(0, e.length), n)
              : ee(r, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
          },
          _e = function t(e, n, r) {
            var i = n - e,
              o = 2 * i;
            return H(e)
              ? ye(e, t(0, e.length - 1), n)
              : ee(r, function (t) {
                return (
                  e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                );
              });
          },
          xe = function (t) {
            for (
              var e, n, r, i, o = 0, a = "";
              ~(e = t.indexOf("random(", o));

            )
              (r = t.indexOf(")", e)),
                (i = "[" === t.charAt(e + 7)),
                (n = t.substr(e + 7, r - e - 7).match(i ? X : B)),
                (a +=
                  t.substr(o, e - o) +
                  he(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
                (o = r + 1);
            return a + t.substr(o, t.length - o);
          },
          we = function (t, e, n, r, i) {
            var o = e - t,
              a = r - n;
            return ee(i, function (e) {
              return n + (((e - t) / o) * a || 0);
            });
          },
          Te = function t(e, n, r, i) {
            var o = isNaN(e + n)
              ? 0
              : function (t) {
                return (1 - t) * e + t * n;
              };
            if (!o) {
              var a,
                s,
                u,
                l,
                c,
                f = D(e),
                d = {};
              if ((!0 === r && (i = 1) && (r = null), f))
                (e = { p: e }), (n = { p: n });
              else if (H(e) && !H(n)) {
                for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++)
                  u.push(t(e[s - 1], e[s]));
                l--,
                  (o = function (t) {
                    t *= l;
                    var e = Math.min(c, ~~t);
                    return u[e](t - e);
                  }),
                  (r = n);
              } else i || (e = St(H(e) ? [] : {}, e));
              if (!u) {
                for (a in n) an.call(d, e, a, "get", n[a]);
                o = function (t) {
                  return Sn(t, d) || (f ? e.p : e);
                };
              }
            }
            return ee(r, o);
          },
          Ee = function (t, e, n) {
            var r,
              i,
              o,
              a = t.labels,
              s = w;
            for (r in a)
              (i = a[r] - e) < 0 == !!n &&
                i &&
                s > (i = Math.abs(i)) &&
                ((o = r), (s = i));
            return o;
          },
          Se = function (t, e, n) {
            var r,
              i,
              a,
              s = t.vars,
              u = s[e],
              l = o,
              c = t._ctx;
            if (u)
              return (
                (r = s[e + "Params"]),
                (i = s.callbackScope || t),
                n && it.length && bt(),
                c && (o = c),
                (a = r ? u.apply(i, r) : u.call(i)),
                (o = l),
                a
              );
          },
          Ce = function (t) {
            return (
              Lt(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!i),
              t.progress() < 1 && Se(t, "onInterrupt"),
              t
            );
          },
          Ae = [],
          ke = function (t) {
            if (R()) {
              var e = (t = (!t.name && t.default) || t).name,
                n = M(t),
                r =
                  e && !n && t.init
                    ? function () {
                      this._props = [];
                    }
                    : t,
                i = {
                  init: J,
                  render: Sn,
                  add: an,
                  kill: An,
                  modifier: Cn,
                  rawVars: 0,
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: xn,
                  aliases: {},
                  register: 0,
                };
              if ((He(), t !== r)) {
                if (at[e]) return;
                Tt(r, Tt(At(t, i), o)),
                  St(r.prototype, St(i, At(t, o))),
                  (at[(r.prop = e)] = r),
                  t.targetTest && (lt.push(r), (rt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              Z(e, r), t.register && t.register(Wn, r, Dn);
            } else Ae.push(t);
          },
          Oe = 255,
          De = {
            aqua: [0, Oe, Oe],
            lime: [0, Oe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Oe],
            navy: [0, 0, 128],
            white: [Oe, Oe, Oe],
            olive: [128, 128, 0],
            yellow: [Oe, Oe, 0],
            orange: [Oe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Oe, 0, 0],
            pink: [Oe, 192, 203],
            cyan: [0, Oe, Oe],
            transparent: [Oe, Oe, Oe, 0],
          },
          Me = function (t, e, n) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (n - e) * t * 6
                : t < 0.5
                  ? n
                  : 3 * t < 2
                    ? e + (n - e) * (2 / 3 - t) * 6
                    : e) *
                Oe +
                0.5) |
              0
            );
          },
          Le = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p = t
                ? L(t)
                  ? [t >> 16, (t >> 8) & Oe, t & Oe]
                  : 0
                : De.black;
            if (!p) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                  De[t])
              )
                p = De[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((r = t.charAt(1)),
                      (i = t.charAt(2)),
                      (o = t.charAt(3)),
                      (t =
                        "#" +
                        r +
                        r +
                        i +
                        i +
                        o +
                        o +
                        (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                    9 === t.length)
                )
                  return [
                    (p = parseInt(t.substr(1, 6), 16)) >> 16,
                    (p >> 8) & Oe,
                    p & Oe,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                p = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & Oe,
                  t & Oe,
                ];
              } else if ("hsl" === t.substr(0, 3))
                if (((p = d = t.match(B)), e)) {
                  if (~t.indexOf("="))
                    return (
                      (p = t.match(F)), n && p.length < 4 && (p[3] = 1), p
                    );
                } else
                  (a = (+p[0] % 360) / 360),
                    (s = +p[1] / 100),
                    (r =
                      2 * (u = +p[2] / 100) -
                      (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                    p.length > 3 && (p[3] *= 1),
                    (p[0] = Me(a + 1 / 3, r, i)),
                    (p[1] = Me(a, r, i)),
                    (p[2] = Me(a - 1 / 3, r, i));
              else p = t.match(B) || De.transparent;
              p = p.map(Number);
            }
            return (
              e &&
              !d &&
              ((r = p[0] / Oe),
                (i = p[1] / Oe),
                (o = p[2] / Oe),
                (u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
                l === c
                  ? (a = s = 0)
                  : ((f = l - c),
                    (s = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                    (a =
                      l === r
                        ? (i - o) / f + (i < o ? 6 : 0)
                        : l === i
                          ? (o - r) / f + 2
                          : (r - i) / f + 4),
                    (a *= 60)),
                (p[0] = ~~(a + 0.5)),
                (p[1] = ~~(100 * s + 0.5)),
                (p[2] = ~~(100 * u + 0.5))),
              n && p.length < 4 && (p[3] = 1),
              p
            );
          },
          Pe = function (t) {
            var e = [],
              n = [],
              r = -1;
            return (
              t.split(qe).forEach(function (t) {
                var i = t.match(z) || [];
                e.push.apply(e, i), n.push((r += i.length + 1));
              }),
              (e.c = n),
              e
            );
          },
          Ne = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s = "",
              u = (t + s).match(qe),
              l = e ? "hsla(" : "rgba(",
              c = 0;
            if (!u) return t;
            if (
              ((u = u.map(function (t) {
                return (
                  (t = Le(t, e, 1)) &&
                  l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
                );
              })),
                n && ((o = Pe(t)), (r = n.c).join(s) !== o.c.join(s)))
            )
              for (
                a = (i = t.replace(qe, "1").split(z)).length - 1;
                c < a;
                c++
              )
                s +=
                  i[c] +
                  (~r.indexOf(c)
                    ? u.shift() || l + "0,0,0,0)"
                    : (o.length ? o : u.length ? u : n).shift());
            if (!i)
              for (a = (i = t.split(qe)).length - 1; c < a; c++)
                s += i[c] + u[c];
            return s + i[a];
          },
          qe = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in De) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          Re = /hsl[a]?\(/,
          je = function (t) {
            var e,
              n = t.join(" ");
            if (((qe.lastIndex = 0), qe.test(n)))
              return (
                (e = Re.test(n)),
                (t[1] = Ne(t[1], e)),
                (t[0] = Ne(t[0], e, Pe(t[1]))),
                !0
              );
          },
          Ie = (function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              a = Date.now,
              f = 500,
              d = 33,
              h = a(),
              g = h,
              m = 1e3 / 240,
              v = m,
              y = [],
              b = function n(s) {
                var u,
                  l,
                  c,
                  p,
                  b = a() - g,
                  _ = !0 === s;
                if (
                  (b > f && (h += b - d),
                    ((u = (c = (g += b) - h) - v) > 0 || _) &&
                    ((p = ++r.frame),
                      (i = c - 1e3 * r.time),
                      (r.time = c /= 1e3),
                      (v += u + (u >= m ? 4 : m - u)),
                      (l = 1)),
                    _ || (t = e(n)),
                    l)
                )
                  for (o = 0; o < y.length; o++) y[o](c, i, p, s);
              };
            return (r = {
              time: 0,
              frame: 0,
              tick: function () {
                b(!0);
              },
              deltaRatio: function (t) {
                return i / (1e3 / (t || 60));
              },
              wake: function () {
                c &&
                  (!u &&
                    R() &&
                    ((s = u = window),
                      (l = s.document || {}),
                      (V.gsap = Wn),
                      (s.gsapVersions || (s.gsapVersions = [])).push(
                        Wn.version
                      ),
                      G(U || s.GreenSockGlobals || (!s.gsap && s) || {}),
                      (n = s.requestAnimationFrame),
                      Ae.forEach(ke)),
                    t && r.sleep(),
                    (e =
                      n ||
                      function (t) {
                        return setTimeout(t, (v - 1e3 * r.time + 1) | 0);
                      }),
                    (p = 1),
                    b(2));
              },
              sleep: function () {
                (n ? s.cancelAnimationFrame : clearTimeout)(t),
                  (p = 0),
                  (e = J);
              },
              lagSmoothing: function (t, e) {
                (f = t || 1 / 0), (d = Math.min(e || 33, f));
              },
              fps: function (t) {
                (m = 1e3 / (t || 240)), (v = 1e3 * r.time + m);
              },
              add: function (t, e, n) {
                var i = e
                  ? function (e, n, o, a) {
                    t(e, n, o, a), r.remove(i);
                  }
                  : t;
                return r.remove(t), y[n ? "unshift" : "push"](i), He(), i;
              },
              remove: function (t, e) {
                ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--;
              },
              _listeners: y,
            });
          })(),
          He = function () {
            return !p && Ie.wake();
          },
          Be = {},
          Fe = /^[\d.\-M][\d.\-,\s]/,
          ze = /["']/g,
          We = function (t) {
            for (
              var e,
              n,
              r,
              i = {},
              o = t.substr(1, t.length - 3).split(":"),
              a = o[0],
              s = 1,
              u = o.length;
              s < u;
              s++
            )
              (n = o[s]),
                (e = s !== u - 1 ? n.lastIndexOf(",") : n.length),
                (r = n.substr(0, e)),
                (i[a] = isNaN(r) ? r.replace(ze, "").trim() : +r),
                (a = n.substr(e + 1).trim());
            return i;
          },
          Ye = function (t) {
            var e = t.indexOf("(") + 1,
              n = t.indexOf(")"),
              r = t.indexOf("(", e);
            return t.substring(e, ~r && r < n ? t.indexOf(")", n + 1) : n);
          },
          Xe = function (t) {
            var e = (t + "").split("("),
              n = Be[e[0]];
            return n && e.length > 1 && n.config
              ? n.config.apply(
                null,
                ~t.indexOf("{") ? [We(e[1])] : Ye(t).split(",").map(xt)
              )
              : Be._CE && Fe.test(t)
                ? Be._CE("", t)
                : n;
          },
          $e = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          Ve = function t(e, n) {
            for (var r, i = e._first; i;)
              i instanceof en
                ? t(i, n)
                : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
                (i = i._next);
          },
          Ue = function (t, e) {
            return (t && (M(t) ? t : Be[t] || Xe(t))) || e;
          },
          Ge = function (t, e, n, r) {
            void 0 === n &&
              (n = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
            var i,
              o = { easeIn: e, easeOut: n, easeInOut: r };
            return (
              ht(t, function (t) {
                for (var e in ((Be[t] = V[t] = o),
                  (Be[(i = t.toLowerCase())] = n),
                  o))
                  Be[
                    i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = Be[t + "." + e] = o[e];
              }),
              o
            );
          },
          Ke = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Qe = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
              o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
              a = (o / E) * (Math.asin(1 / i) || 0),
              s = function (t) {
                return 1 === t
                  ? 1
                  : i * Math.pow(2, -10 * t) * O((t - a) * o) + 1;
              },
              u =
                "out" === e
                  ? s
                  : "in" === e
                    ? function (t) {
                      return 1 - s(1 - t);
                    }
                    : Ke(s);
            return (
              (o = E / o),
              (u.config = function (n, r) {
                return t(e, n, r);
              }),
              u
            );
          },
          Ze = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
              i =
                "out" === e
                  ? r
                  : "in" === e
                    ? function (t) {
                      return 1 - r(1 - t);
                    }
                    : Ke(r);
            return (
              (i.config = function (n) {
                return t(e, n);
              }),
              i
            );
          };
        ht("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var n = e < 5 ? e + 1 : e;
          Ge(
            t + ",Power" + (n - 1),
            e
              ? function (t) {
                return Math.pow(t, n);
              }
              : function (t) {
                return t;
              },
            function (t) {
              return 1 - Math.pow(1 - t, n);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, n) / 2
                : 1 - Math.pow(2 * (1 - t), n) / 2;
            }
          );
        }),
          (Be.Linear.easeNone = Be.none = Be.Linear.easeIn),
          Ge("Elastic", Qe("in"), Qe("out"), Qe()),
          (h = 7.5625),
          (v = 2 * (m = 1 / (g = 2.75))),
          (y = 2.5 * m),
          Ge(
            "Bounce",
            function (t) {
              return 1 - b(1 - t);
            },
            (b = function (t) {
              return t < m
                ? h * t * t
                : t < v
                  ? h * Math.pow(t - 1.5 / g, 2) + 0.75
                  : t < y
                    ? h * (t -= 2.25 / g) * t + 0.9375
                    : h * Math.pow(t - 2.625 / g, 2) + 0.984375;
            })
          ),
          Ge("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Ge("Circ", function (t) {
            return -(A(1 - t * t) - 1);
          }),
          Ge("Sine", function (t) {
            return 1 === t ? 1 : 1 - k(t * S);
          }),
          Ge("Back", Ze("in"), Ze("out"), Ze()),
          (Be.SteppedEase =
            Be.steps =
            V.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0,
                  o = 1 - T;
                return function (t) {
                  return (((r * ne(0, o, t)) | 0) + i) * n;
                };
              },
            }),
          (x.ease = Be["quad.out"]),
          ht(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (ct += t + "," + t + "Params,");
            }
          );
        var Je = function (t, e) {
          (this.id = C++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : pt),
            (this.set = e ? e.getSetter : xn);
        },
          tn = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                Kt(this, +t.duration, 1, 1),
                (this.data = t.data),
                o && ((this._ctx = o), o.data.push(this)),
                p || Ie.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                    this._repeat > 0
                      ? t + (t + this._rDelay) * this._repeat
                      : t
                  )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    Kt(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) /
                        (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((He(), !arguments.length)) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  for (
                    Ft(this, t), !n._dp || n.parent || zt(n, this);
                    n && n.parent;

                  )
                    n.parent._time !==
                      n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                      n.totalTime(n._tTime, !0),
                      (n = n.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    Wt(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== t ||
                    (!this._dur && !e) ||
                    (this._initted && Math.abs(this._zTime) === T) ||
                    (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), _t(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                    Math.min(this.totalDuration(), t + jt(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                    this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    jt(this),
                    e
                  )
                  : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio;
              }),
              (e.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * n, e)
                  : this._repeat
                    ? It(this._tTime, n) + 1
                    : 1;
              }),
              (e.timeScale = function (t) {
                if (!arguments.length)
                  return this._rts === -T ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                  this.parent && this._ts
                    ? Ht(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || t === -T ? 0 : this._rts),
                  this.totalTime(
                    ne(-Math.abs(this._delay), this._tDur, e),
                    !0
                  ),
                  Bt(this),
                  Nt(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                    ((this._ps = t),
                      t
                        ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (He(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                            Math.abs(this._zTime) !== T &&
                            (this._tTime -= T)
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                    (e._sort || !this.parent) &&
                    Wt(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (q(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat &&
                        this._time &&
                        this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                      ? Ht(e.rawTime(t), this)
                      : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = nt);
                var e = i;
                return (
                  (i = t),
                  (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (i = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (
                  var e = this, n = arguments.length ? t : e.rawTime();
                  e;

                )
                  (n = e._start + n / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1
                    : this._sat.globalTime(t)
                  : n;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), Qt(this))
                  : -2 === this._repeat
                    ? 1 / 0
                    : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (
                    (this._rDelay = t), Qt(this), e ? this.time(e) : this
                  );
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length
                  ? ((this._yoyo = t), this)
                  : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(Jt(this, t), q(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, q(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -T : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -T), this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  n = this._start;
                return !(
                  e &&
                  !(
                    this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= n &&
                    t < this.endTime(!0) - T
                  )
                );
              }),
              (e.eventCallback = function (t, e, n) {
                var r = this.vars;
                return arguments.length > 1
                  ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                    this)
                  : r[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (n) {
                  var r = M(t) ? t : wt,
                    i = function () {
                      var t = e.then;
                      (e.then = null),
                        M(r) &&
                        (r = r(e)) &&
                        (r.then || r === e) &&
                        (e.then = t),
                        n(r),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                    (!e._tTime && e._ts < 0)
                    ? i()
                    : (e._prom = i);
                });
              }),
              (e.kill = function () {
                Ce(this);
              }),
              t
            );
          })();
        Tt(tn.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -T,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var en = (function (t) {
          function r(e, r) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = t.call(this, e) || this).labels = {}),
              (i.smoothChildTiming = !!e.smoothChildTiming),
              (i.autoRemoveChildren = !!e.autoRemoveChildren),
              (i._sort = q(e.sortChildren)),
              a && Wt(e.parent || a, n(i), r),
              e.reversed && i.reverse(),
              e.paused && i.paused(!0),
              e.scrollTrigger && Yt(n(i), e.scrollTrigger),
              i
            );
          }
          e(r, t);
          var o = r.prototype;
          return (
            (o.to = function (t, e, n) {
              return te(0, arguments, this), this;
            }),
            (o.from = function (t, e, n) {
              return te(1, arguments, this), this;
            }),
            (o.fromTo = function (t, e, n, r) {
              return te(2, arguments, this), this;
            }),
            (o.set = function (t, e, n) {
              return (
                (e.duration = 0),
                (e.parent = this),
                kt(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new mn(t, e, Jt(this, n), 1),
                this
              );
            }),
            (o.call = function (t, e, n) {
              return Wt(this, mn.delayedCall(0, t, e), n);
            }),
            (o.staggerTo = function (t, e, n, r, i, o, a) {
              return (
                (n.duration = e),
                (n.stagger = n.stagger || r),
                (n.onComplete = o),
                (n.onCompleteParams = a),
                (n.parent = this),
                new mn(t, n, Jt(this, i)),
                this
              );
            }),
            (o.staggerFrom = function (t, e, n, r, i, o, a) {
              return (
                (n.runBackwards = 1),
                (kt(n).immediateRender = q(n.immediateRender)),
                this.staggerTo(t, e, n, r, i, o, a)
              );
            }),
            (o.staggerFromTo = function (t, e, n, r, i, o, a, s) {
              return (
                (r.startAt = n),
                (kt(r).immediateRender = q(r.immediateRender)),
                this.staggerTo(t, e, r, i, o, a, s)
              );
            }),
            (o.render = function (t, e, n) {
              var r,
                o,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m,
                v = this._time,
                y = this._dirty ? this.totalDuration() : this._tDur,
                b = this._dur,
                _ = t <= 0 ? 0 : mt(t),
                x = this._zTime < 0 != t < 0 && (this._initted || !b);
              if (
                (this !== a && _ > y && t >= 0 && (_ = y),
                  _ !== this._tTime || n || x)
              ) {
                if (
                  (v !== this._time &&
                    b &&
                    ((_ += this._time - v), (t += this._time - v)),
                    (r = _),
                    (p = this._start),
                    (c = !(d = this._ts)),
                    x &&
                    (b || (v = this._zTime), (t || !e) && (this._zTime = t)),
                    this._repeat)
                ) {
                  if (
                    ((g = this._yoyo),
                      (l = b + this._rDelay),
                      this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * l + t, e, n);
                  if (
                    ((r = mt(_ % l)),
                      _ === y
                        ? ((u = this._repeat), (r = b))
                        : ((u = ~~(_ / l)) && u === _ / l && ((r = b), u--),
                          r > b && (r = b)),
                      (h = It(this._tTime, l)),
                      !v &&
                      this._tTime &&
                      h !== u &&
                      this._tTime - h * l - this._dur <= 0 &&
                      (h = u),
                      g && 1 & u && ((r = b - r), (m = 1)),
                      u !== h && !this._lock)
                  ) {
                    var w = g && 1 & h,
                      E = w === (g && 1 & u);
                    if (
                      (u < h && (w = !w),
                        (v = w ? 0 : b),
                        (this._lock = 1),
                        (this.render(
                          v || (m ? 0 : mt(u * l)),
                          e,
                          !b
                        )._lock = 0),
                        (this._tTime = _),
                        !e && this.parent && Se(this, "onRepeat"),
                        this.vars.repeatRefresh &&
                        !m &&
                        (this.invalidate()._lock = 1),
                        (v && v !== this._time) ||
                        c !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((b = this._dur),
                        (y = this._tDur),
                        E &&
                        ((this._lock = 2),
                          (v = w ? b : -1e-4),
                          this.render(v, !0),
                          this.vars.repeatRefresh && !m && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !c)
                    )
                      return this;
                    Ve(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (f = Gt(this, mt(v), mt(r))) &&
                    (_ -= r - (r = f._start)),
                    (this._tTime = _),
                    (this._time = r),
                    (this._act = !d),
                    this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                      (this._initted = 1),
                      (this._zTime = t),
                      (v = 0)),
                    !v &&
                    r &&
                    !e &&
                    !u &&
                    (Se(this, "onStart"), this._tTime !== _))
                )
                  return this;
                if (r >= v && t >= 0)
                  for (o = this._first; o;) {
                    if (
                      ((s = o._next),
                        (o._act || r >= o._start) && o._ts && f !== o)
                    ) {
                      if (o.parent !== this) return this.render(t, e, n);
                      if (
                        (o.render(
                          o._ts > 0
                            ? (r - o._start) * o._ts
                            : (o._dirty ? o.totalDuration() : o._tDur) +
                            (r - o._start) * o._ts,
                          e,
                          n
                        ),
                          r !== this._time || (!this._ts && !c))
                      ) {
                        (f = 0), s && (_ += this._zTime = -T);
                        break;
                      }
                    }
                    o = s;
                  }
                else {
                  o = this._last;
                  for (var S = t < 0 ? t : r; o;) {
                    if (
                      ((s = o._prev),
                        (o._act || S <= o._end) && o._ts && f !== o)
                    ) {
                      if (o.parent !== this) return this.render(t, e, n);
                      if (
                        (o.render(
                          o._ts > 0
                            ? (S - o._start) * o._ts
                            : (o._dirty ? o.totalDuration() : o._tDur) +
                            (S - o._start) * o._ts,
                          e,
                          n || (i && (o._initted || o._startAt))
                        ),
                          r !== this._time || (!this._ts && !c))
                      ) {
                        (f = 0), s && (_ += this._zTime = S ? -T : T);
                        break;
                      }
                    }
                    o = s;
                  }
                }
                if (
                  f &&
                  !e &&
                  (this.pause(),
                    (f.render(r >= v ? 0 : -T)._zTime = r >= v ? 1 : -1),
                    this._ts)
                )
                  return (this._start = p), Bt(this), this.render(t, e, n);
                this._onUpdate && !e && Se(this, "onUpdate", !0),
                  ((_ === y && this._tTime >= this.totalDuration()) ||
                    (!_ && v)) &&
                  ((p !== this._start &&
                    Math.abs(d) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !b) &&
                      ((_ === y && this._ts > 0) || (!_ && this._ts < 0)) &&
                      Lt(this, 1),
                      e ||
                      (t < 0 && !v) ||
                      (!_ && !v && y) ||
                      (Se(
                        this,
                        _ === y && t >= 0
                          ? "onComplete"
                          : "onReverseComplete",
                        !0
                      ),
                        this._prom &&
                        !(_ < y && this.timeScale() > 0) &&
                        this._prom())));
              }
              return this;
            }),
            (o.add = function (t, e) {
              var n = this;
              if ((L(e) || (e = Jt(this, e, t)), !(t instanceof tn))) {
                if (H(t))
                  return (
                    t.forEach(function (t) {
                      return n.add(t, e);
                    }),
                    this
                  );
                if (D(t)) return this.addLabel(t, e);
                if (!M(t)) return this;
                t = mn.delayedCall(0, t);
              }
              return this !== t ? Wt(this, t, e) : this;
            }),
            (o.getChildren = function (t, e, n, r) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === n && (n = !0),
                void 0 === r && (r = -w);
              for (var i = [], o = this._first; o;)
                o._start >= r &&
                  (o instanceof mn
                    ? e && i.push(o)
                    : (n && i.push(o),
                      t && i.push.apply(i, o.getChildren(!0, e, n)))),
                  (o = o._next);
              return i;
            }),
            (o.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n];
            }),
            (o.remove = function (t) {
              return D(t)
                ? this.removeLabel(t)
                : M(t)
                  ? this.killTweensOf(t)
                  : (Mt(this, t),
                    t === this._recent && (this._recent = this._last),
                    Pt(this));
            }),
            (o.totalTime = function (e, n) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                  this._ts &&
                  (this._start = mt(
                    Ie.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                  )),
                  t.prototype.totalTime.call(this, e, n),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (o.addLabel = function (t, e) {
              return (this.labels[t] = Jt(this, e)), this;
            }),
            (o.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (o.addPause = function (t, e, n) {
              var r = mn.delayedCall(0, e || J, n);
              return (
                (r.data = "isPause"),
                (this._hasPause = 1),
                Wt(this, r, Jt(this, t))
              );
            }),
            (o.removePause = function (t) {
              var e = this._first;
              for (t = Jt(this, t); e;)
                e._start === t && "isPause" === e.data && Lt(e),
                  (e = e._next);
            }),
            (o.killTweensOf = function (t, e, n) {
              for (var r = this.getTweensOf(t, n), i = r.length; i--;)
                nn !== r[i] && r[i].kill(t, e);
              return this;
            }),
            (o.getTweensOf = function (t, e) {
              for (var n, r = [], i = ue(t), o = this._first, a = L(e); o;)
                o instanceof mn
                  ? yt(o._targets, i) &&
                  (a
                    ? (!nn || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  r.push(o)
                  : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                  (o = o._next);
              return r;
            }),
            (o.tweenTo = function (t, e) {
              e = e || {};
              var n,
                r = this,
                i = Jt(r, t),
                o = e,
                a = o.startAt,
                s = o.onStart,
                u = o.onStartParams,
                l = o.immediateRender,
                c = mn.to(
                  r,
                  Tt(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (i - (a && "time" in a ? a.time : r._time)) /
                          r.timeScale()
                        ) ||
                        T,
                      onStart: function () {
                        if ((r.pause(), !n)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (i - (a && "time" in a ? a.time : r._time)) /
                              r.timeScale()
                            );
                          c._dur !== t &&
                            Kt(c, t, 0, 1).render(c._time, !0, !0),
                            (n = 1);
                        }
                        s && s.apply(c, u || []);
                      },
                    },
                    e
                  )
                );
              return l ? c.render(0) : c;
            }),
            (o.tweenFromTo = function (t, e, n) {
              return this.tweenTo(
                e,
                Tt({ startAt: { time: Jt(this, t) } }, n)
              );
            }),
            (o.recent = function () {
              return this._recent;
            }),
            (o.nextLabel = function (t) {
              return void 0 === t && (t = this._time), Ee(this, Jt(this, t));
            }),
            (o.previousLabel = function (t) {
              return (
                void 0 === t && (t = this._time), Ee(this, Jt(this, t), 1)
              );
            }),
            (o.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + T);
            }),
            (o.shiftChildren = function (t, e, n) {
              void 0 === n && (n = 0);
              for (var r, i = this._first, o = this.labels; i;)
                i._start >= n && ((i._start += t), (i._end += t)),
                  (i = i._next);
              if (e) for (r in o) o[r] >= n && (o[r] += t);
              return Pt(this);
            }),
            (o.invalidate = function (e) {
              var n = this._first;
              for (this._lock = 0; n;) n.invalidate(e), (n = n._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (o.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, n = this._first; n;)
                (e = n._next), this.remove(n), (n = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                Pt(this)
              );
            }),
            (o.totalDuration = function (t) {
              var e,
                n,
                r,
                i = 0,
                o = this,
                s = o._last,
                u = w;
              if (arguments.length)
                return o.timeScale(
                  (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
                );
              if (o._dirty) {
                for (r = o.parent; s;)
                  (e = s._prev),
                    s._dirty && s.totalDuration(),
                    (n = s._start) > u && o._sort && s._ts && !o._lock
                      ? ((o._lock = 1), (Wt(o, s, n - s._delay, 1)._lock = 0))
                      : (u = n),
                    n < 0 &&
                    s._ts &&
                    ((i -= n),
                      ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                        (o._time -= n),
                        (o._tTime -= n)),
                      o.shiftChildren(-n, !1, -Infinity),
                      (u = 0)),
                    s._end > i && s._ts && (i = s._end),
                    (s = e);
                Kt(o, o === a && o._time > i ? o._time : i, 1, 1),
                  (o._dirty = 0);
              }
              return o._tDur;
            }),
            (r.updateRoot = function (t) {
              if (
                (a._ts && (_t(a, Ht(t, a)), (f = Ie.frame)), Ie.frame >= ut)
              ) {
                ut += _.autoSleep || 120;
                var e = a._first;
                if (
                  (!e || !e._ts) &&
                  _.autoSleep &&
                  Ie._listeners.length < 2
                ) {
                  for (; e && !e._ts;) e = e._next;
                  e || Ie.sleep();
                }
              }
            }),
            r
          );
        })(tn);
        Tt(en.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var nn,
          rn,
          on = function (t, e, n, r, i, o, a) {
            var s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g = new Dn(this._pt, t, e, 0, 1, En, null, i),
              m = 0,
              v = 0;
            for (
              g.b = n,
              g.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = xe(r)),
              o && (o((h = [n, r]), t, e), (n = h[0]), (r = h[1])),
              u = n.match(W) || [];
              (s = W.exec(r));

            )
              (c = s[0]),
                (f = r.substring(m, s.index)),
                l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
                c !== u[v++] &&
                ((d = parseFloat(u[v - 1]) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: f || 1 === v ? f : ",",
                    s: d,
                    c: "=" === c.charAt(1) ? vt(d, c) - d : parseFloat(c) - d,
                    m: l && l < 4 ? Math.round : 0,
                  }),
                  (m = W.lastIndex));
            return (
              (g.c = m < r.length ? r.substring(m, r.length) : ""),
              (g.fp = a),
              (Y.test(r) || p) && (g.e = 0),
              (this._pt = g),
              g
            );
          },
          an = function (t, e, n, r, i, o, a, s, u, l) {
            M(r) && (r = r(i || 0, t, o));
            var c,
              f = t[e],
              d =
                "get" !== n
                  ? n
                  : M(f)
                    ? u
                      ? t[
                        e.indexOf("set") || !M(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](u)
                      : t[e]()
                    : f,
              p = M(f) ? (u ? bn : yn) : vn;
            if (
              (D(r) &&
                (~r.indexOf("random(") && (r = xe(r)),
                  "=" === r.charAt(1) &&
                  ((c = vt(d, r) + (re(d) || 0)) || 0 === c) &&
                  (r = c)),
                !l || d !== r || rn)
            )
              return isNaN(d * r) || "" === r
                ? (!f && !(e in t) && K(e, r),
                  on.call(this, t, e, d, r, p, s || _.stringFilter, u))
                : ((c = new Dn(
                  this._pt,
                  t,
                  e,
                  +d || 0,
                  r - (d || 0),
                  "boolean" == typeof f ? Tn : wn,
                  0,
                  p
                )),
                  u && (c.fp = u),
                  a && c.modifier(a, this, t),
                  (this._pt = c));
          },
          sn = function (t, e, n, r, i) {
            if (
              (M(t) && (t = pn(t, i, e, n, r)),
                !N(t) || (t.style && t.nodeType) || H(t) || I(t))
            )
              return D(t) ? pn(t, i, e, n, r) : t;
            var o,
              a = {};
            for (o in t) a[o] = pn(t[o], i, e, n, r);
            return a;
          },
          un = function (t, e, n, r, i, o) {
            var a, s, u, l;
            if (
              at[t] &&
              !1 !==
              (a = new at[t]()).init(
                i,
                a.rawVars ? e[t] : sn(e[t], r, i, o, n),
                n,
                r,
                o
              ) &&
              ((n._pt = s =
                new Dn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
                n !== d)
            )
              for (
                u = n._ptLookup[n._targets.indexOf(i)], l = a._props.length;
                l--;

              )
                u[a._props[l]] = s;
            return a;
          },
          ln = function t(e, n, o) {
            var s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g,
              m,
              v,
              y,
              b,
              _ = e.vars,
              E = _.ease,
              S = _.startAt,
              C = _.immediateRender,
              A = _.lazy,
              k = _.onUpdate,
              O = _.onUpdateParams,
              D = _.callbackScope,
              M = _.runBackwards,
              L = _.yoyoEase,
              P = _.keyframes,
              N = _.autoRevert,
              R = e._dur,
              j = e._startAt,
              I = e._targets,
              H = e.parent,
              B = H && "nested" === H.data ? H.vars.targets : I,
              F = "auto" === e._overwrite && !r,
              z = e.timeline;
            if (
              (z && (!P || !E) && (E = "none"),
                (e._ease = Ue(E, x.ease)),
                (e._yEase = L ? $e(Ue(!0 === L ? E : L, x.ease)) : 0),
                L &&
                e._yoyo &&
                !e._repeat &&
                ((L = e._yEase), (e._yEase = e._ease), (e._ease = L)),
                (e._from = !z && !!_.runBackwards),
                !z || (P && !_.stagger))
            ) {
              if (
                ((y = (h = I[0] ? dt(I[0]).harness : 0) && _[h.prop]),
                  (s = At(_, rt)),
                  j &&
                  (j._zTime < 0 && j.progress(1),
                    n < 0 && M && C && !N
                      ? j.render(-1, !0)
                      : j.revert(M && R ? et : tt),
                    (j._lazy = 0)),
                  S)
              ) {
                if (
                  (Lt(
                    (e._startAt = mn.set(
                      I,
                      Tt(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: H,
                          immediateRender: !0,
                          lazy: !j && q(A),
                          startAt: null,
                          delay: 0,
                          onUpdate: k,
                          onUpdateParams: O,
                          callbackScope: D,
                          stagger: 0,
                        },
                        S
                      )
                    ))
                  ),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    n < 0 && (i || (!C && !N)) && e._startAt.revert(et),
                    C && R && n <= 0 && o <= 0)
                )
                  return void (n && (e._zTime = n));
              } else if (M && R && !j)
                if (
                  (n && (C = !1),
                    (l = Tt(
                      {
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: C && !j && q(A),
                        immediateRender: C,
                        stagger: 0,
                        parent: H,
                      },
                      s
                    )),
                    y && (l[h.prop] = y),
                    Lt((e._startAt = mn.set(I, l))),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    n < 0 &&
                    (i ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                    (e._zTime = n),
                    C)
                ) {
                  if (!n) return;
                } else t(e._startAt, T, T);
              for (
                e._pt = e._ptCache = 0, A = (R && q(A)) || (A && !R), u = 0;
                u < I.length;
                u++
              ) {
                if (
                  ((p = (f = I[u])._gsap || ft(I)[u]._gsap),
                    (e._ptLookup[u] = m = {}),
                    ot[p.id] && it.length && bt(),
                    (v = B === I ? u : B.indexOf(f)),
                    h &&
                    !1 !== (g = new h()).init(f, y || s, e, v, B) &&
                    ((e._pt = c =
                      new Dn(
                        e._pt,
                        f,
                        g.name,
                        0,
                        1,
                        g.render,
                        g,
                        0,
                        g.priority
                      )),
                      g._props.forEach(function (t) {
                        m[t] = c;
                      }),
                      g.priority && (d = 1)),
                    !h || y)
                )
                  for (l in s)
                    at[l] && (g = un(l, s, e, v, f, B))
                      ? g.priority && (d = 1)
                      : (m[l] = c =
                        an.call(
                          e,
                          f,
                          l,
                          "get",
                          s[l],
                          v,
                          B,
                          0,
                          _.stringFilter
                        ));
                e._op && e._op[u] && e.kill(f, e._op[u]),
                  F &&
                  e._pt &&
                  ((nn = e),
                    a.killTweensOf(f, m, e.globalTime(n)),
                    (b = !e.parent),
                    (nn = 0)),
                  e._pt && A && (ot[p.id] = 1);
              }
              d && On(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = k),
              (e._initted = (!e._op || e._pt) && !b),
              P && n <= 0 && z.render(w, !0, !0);
          },
          cn = function (t, e, n, r, i, o, a) {
            var s,
              u,
              l,
              c,
              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!f)
              for (
                f = t._ptCache[e] = [],
                l = t._ptLookup,
                c = t._targets.length;
                c--;

              ) {
                if ((s = l[c][e]) && s.d && s.d._pt)
                  for (s = s.d._pt; s && s.p !== e && s.fp !== e;)
                    s = s._next;
                if (!s)
                  return (rn = 1), (t.vars[e] = "+=0"), ln(t, a), (rn = 0), 1;
                f.push(s);
              }
            for (c = f.length; c--;)
              ((s = (u = f[c])._pt || u).s =
                (!r && 0 !== r) || i ? s.s + (r || 0) + o * s.c : r),
                (s.c = n - s.s),
                u.e && (u.e = gt(n) + re(u.e)),
                u.b && (u.b = s.s + re(u.b));
          },
          fn = function (t, e) {
            var n,
              r,
              i,
              o,
              a = t[0] ? dt(t[0]).harness : 0,
              s = a && a.aliases;
            if (!s) return e;
            for (r in ((n = St({}, e)), s))
              if (r in n)
                for (i = (o = s[r].split(",")).length; i--;) n[o[i]] = n[r];
            return n;
          },
          dn = function (t, e, n, r) {
            var i,
              o,
              a = e.ease || r || "power1.inOut";
            if (H(e))
              (o = n[t] || (n[t] = [])),
                e.forEach(function (t, n) {
                  return o.push({
                    t: (n / (e.length - 1)) * 100,
                    v: t,
                    e: a,
                  });
                });
            else
              for (i in e)
                (o = n[i] || (n[i] = [])),
                  "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: a });
          },
          pn = function (t, e, n, r, i) {
            return M(t)
              ? t.call(e, n, r, i)
              : D(t) && ~t.indexOf("random(")
                ? xe(t)
                : t;
          },
          hn =
            ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          gn = {};
        ht(
          hn + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (gn[t] = 1);
          }
        );
        var mn = (function (t) {
          function i(e, i, o, s) {
            var u;
            "number" == typeof i && ((o.duration = i), (i = o), (o = null));
            var l,
              c,
              f,
              d,
              p,
              h,
              g,
              m,
              v = (u = t.call(this, s ? i : kt(i)) || this).vars,
              y = v.duration,
              b = v.delay,
              x = v.immediateRender,
              w = v.stagger,
              E = v.overwrite,
              S = v.keyframes,
              C = v.defaults,
              A = v.scrollTrigger,
              k = v.yoyoEase,
              O = i.parent || a,
              D = (H(e) || I(e) ? L(e[0]) : "length" in i) ? [e] : ue(e);
            if (
              ((u._targets = D.length
                ? ft(D)
                : Q(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !_.nullTargetWarn
                ) || []),
                (u._ptLookup = []),
                (u._overwrite = E),
                S || w || j(y) || j(b))
            ) {
              if (
                ((i = u.vars),
                  (l = u.timeline =
                    new en({
                      data: "nested",
                      defaults: C || {},
                      targets: O && "nested" === O.data ? O.vars.targets : D,
                    })).kill(),
                  (l.parent = l._dp = n(u)),
                  (l._start = 0),
                  w || j(y) || j(b))
              ) {
                if (((d = D.length), (g = w && fe(w)), N(w)))
                  for (p in w)
                    ~hn.indexOf(p) && (m || (m = {}), (m[p] = w[p]));
                for (c = 0; c < d; c++)
                  ((f = At(i, gn)).stagger = 0),
                    k && (f.yoyoEase = k),
                    m && St(f, m),
                    (h = D[c]),
                    (f.duration = +pn(y, n(u), c, h, D)),
                    (f.delay = (+pn(b, n(u), c, h, D) || 0) - u._delay),
                    !w &&
                    1 === d &&
                    f.delay &&
                    ((u._delay = b = f.delay),
                      (u._start += b),
                      (f.delay = 0)),
                    l.to(h, f, g ? g(c, h, D) : 0),
                    (l._ease = Be.none);
                l.duration() ? (y = b = 0) : (u.timeline = 0);
              } else if (S) {
                kt(Tt(l.vars.defaults, { ease: "none" })),
                  (l._ease = Ue(S.ease || i.ease || "none"));
                var M,
                  P,
                  R,
                  B = 0;
                if (H(S))
                  S.forEach(function (t) {
                    return l.to(D, t, ">");
                  }),
                    l.duration();
                else {
                  for (p in ((f = {}), S))
                    "ease" === p ||
                      "easeEach" === p ||
                      dn(p, S[p], f, S.easeEach);
                  for (p in f)
                    for (
                      M = f[p].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                      B = 0,
                      c = 0;
                      c < M.length;
                      c++
                    )
                      ((R = {
                        ease: (P = M[c]).e,
                        duration: ((P.t - (c ? M[c - 1].t : 0)) / 100) * y,
                      })[p] = P.v),
                        l.to(D, R, B),
                        (B += R.duration);
                  l.duration() < y &&
                    l.to({}, { duration: y - l.duration() });
                }
              }
              y || u.duration((y = l.duration()));
            } else u.timeline = 0;
            return (
              !0 !== E || r || ((nn = n(u)), a.killTweensOf(D), (nn = 0)),
              Wt(O, n(u), o),
              i.reversed && u.reverse(),
              i.paused && u.paused(!0),
              (x ||
                (!y &&
                  !S &&
                  u._start === mt(O._time) &&
                  q(x) &&
                  Rt(n(u)) &&
                  "nested" !== O.data)) &&
              ((u._tTime = -T), u.render(Math.max(0, -b) || 0)),
              A && Yt(n(u), A),
              u
            );
          }
          e(i, t);
          var o = i.prototype;
          return (
            (o.render = function (t, e, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                d = this._time,
                p = this._tDur,
                h = this._dur,
                g = t < 0,
                m = t > p - T && !g ? p : t < T ? 0 : t;
              if (h) {
                if (
                  m !== this._tTime ||
                  !t ||
                  n ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== g)
                ) {
                  if (((r = m), (c = this.timeline), this._repeat)) {
                    if (((a = h + this._rDelay), this._repeat < -1 && g))
                      return this.totalTime(100 * a + t, e, n);
                    if (
                      ((r = mt(m % a)),
                        m === p
                          ? ((o = this._repeat), (r = h))
                          : ((o = ~~(m / a)) && o === m / a && ((r = h), o--),
                            r > h && (r = h)),
                        (u = this._yoyo && 1 & o) &&
                        ((f = this._yEase), (r = h - r)),
                        (s = It(this._tTime, a)),
                        r === d && !n && this._initted)
                    )
                      return (this._tTime = m), this;
                    o !== s &&
                      (c && this._yEase && Ve(c, u),
                        !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = n = 1),
                          (this.render(mt(a * o), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Xt(this, g ? t : r, n, e, m))
                      return (this._tTime = 0), this;
                    if (d !== this._time) return this;
                    if (h !== this._dur) return this.render(t, e, n);
                  }
                  if (
                    ((this._tTime = m),
                      (this._time = r),
                      !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                      (this.ratio = l = (f || this._ease)(r / h)),
                      this._from && (this.ratio = l = 1 - l),
                      r &&
                      !d &&
                      !e &&
                      !o &&
                      (Se(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (i = this._pt; i;) i.r(l, i.d), (i = i._next);
                  (c &&
                    c.render(
                      t < 0
                        ? t
                        : !r && u
                          ? -T
                          : c._dur * c._ease(r / this._dur),
                      e,
                      n
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                    !e &&
                    (g && qt(this, t, e, n), Se(this, "onUpdate")),
                    this._repeat &&
                    o !== s &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Se(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (g && !this._onUpdate && qt(this, t, !0, !0),
                      (t || !h) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      Lt(this, 1),
                      e ||
                      (g && !d) ||
                      !(m || d || u) ||
                      (Se(
                        this,
                        m === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                        this._prom &&
                        !(m < p && this.timeScale() > 0) &&
                        this._prom()));
                }
              } else Ut(this, t, e, n);
              return this;
            }),
            (o.targets = function () {
              return this._targets;
            }),
            (o.invalidate = function (e) {
              return (
                (!e || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                  0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (o.resetTo = function (t, e, n, r) {
              p || Ie.wake(), this._ts || this.play();
              var i,
                o = Math.min(
                  this._dur,
                  (this._dp._time - this._start) * this._ts
                );
              return (
                this._initted || ln(this, o),
                (i = this._ease(o / this._dur)),
                cn(this, t, e, n, r, i, o)
                  ? this.resetTo(t, e, n, r)
                  : (Ft(this, 0),
                    this.parent ||
                    Dt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                    this.render(0))
              );
            }),
            (o.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? Ce(this) : this
                );
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    nn && !0 !== nn.vars.overwrite
                  )._first || Ce(this),
                  this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Kt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                  this
                );
              }
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = this._targets,
                f = t ? ue(t) : c,
                d = this._ptLookup,
                p = this._pt;
              if ((!e || "all" === e) && Ot(c, f))
                return "all" === e && (this._pt = 0), Ce(this);
              for (
                r = this._op = this._op || [],
                "all" !== e &&
                (D(e) &&
                  ((s = {}),
                    ht(e, function (t) {
                      return (s[t] = 1);
                    }),
                    (e = s)),
                  (e = fn(c, e))),
                l = c.length;
                l--;

              )
                if (~f.indexOf(c[l]))
                  for (s in ((i = d[l]),
                    "all" === e
                      ? ((r[l] = e), (a = i), (o = {}))
                      : ((o = r[l] = r[l] || {}), (a = e)),
                    a))
                    (u = i && i[s]) &&
                      (("kill" in u.d && !0 !== u.d.kill(s)) ||
                        Mt(this, u, "_pt"),
                        delete i[s]),
                      "all" !== o && (o[s] = 1);
              return this._initted && !this._pt && p && Ce(this), this;
            }),
            (i.to = function (t, e) {
              return new i(t, e, arguments[2]);
            }),
            (i.from = function (t, e) {
              return te(1, arguments);
            }),
            (i.delayedCall = function (t, e, n, r) {
              return new i(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: r,
              });
            }),
            (i.fromTo = function (t, e, n) {
              return te(2, arguments);
            }),
            (i.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new i(t, e)
              );
            }),
            (i.killTweensOf = function (t, e, n) {
              return a.killTweensOf(t, e, n);
            }),
            i
          );
        })(tn);
        Tt(mn.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          ht("staggerTo,staggerFrom,staggerFromTo", function (t) {
            mn[t] = function () {
              var e = new en(),
                n = oe.call(arguments, 0);
              return (
                n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                e[t].apply(e, n)
              );
            };
          });
        var vn = function (t, e, n) {
          return (t[e] = n);
        },
          yn = function (t, e, n) {
            return t[e](n);
          },
          bn = function (t, e, n, r) {
            return t[e](r.fp, n);
          },
          _n = function (t, e, n) {
            return t.setAttribute(e, n);
          },
          xn = function (t, e) {
            return M(t[e]) ? yn : P(t[e]) && t.setAttribute ? _n : vn;
          },
          wn = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e6 * (e.s + e.c * t)) / 1e6,
              e
            );
          },
          Tn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          En = function (t, e) {
            var n = e._pt,
              r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
              for (; n;)
                (r =
                  n.p +
                  (n.m
                    ? n.m(n.s + n.c * t)
                    : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                  r),
                  (n = n._next);
              r += e.c;
            }
            e.set(e.t, e.p, r, e);
          },
          Sn = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), (n = n._next);
          },
          Cn = function (t, e, n, r) {
            for (var i, o = this._pt; o;)
              (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
          },
          An = function (t) {
            for (var e, n, r = this._pt; r;)
              (n = r._next),
                (r.p === t && !r.op) || r.op === t
                  ? Mt(this, r, "_pt")
                  : r.dep || (e = 1),
                (r = n);
            return !e;
          },
          kn = function (t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
          },
          On = function (t) {
            for (var e, n, r, i, o = t._pt; o;) {
              for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
              (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
                (o._next = n) ? (n._prev = o) : (i = o),
                (o = e);
            }
            t._pt = r;
          },
          Dn = (function () {
            function t(t, e, n, r, i, o, a, s, u) {
              (this.t = e),
                (this.s = r),
                (this.c = i),
                (this.p = n),
                (this.r = o || wn),
                (this.d = a || this),
                (this.set = s || vn),
                (this.pr = u || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, n) {
                (this.mSet = this.mSet || this.set),
                  (this.set = kn),
                  (this.m = t),
                  (this.mt = n),
                  (this.tween = e);
              }),
              t
            );
          })();
        ht(
          ct +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (rt[t] = 1);
          }
        ),
          (V.TweenMax = V.TweenLite = mn),
          (V.TimelineLite = V.TimelineMax = en),
          (a = new en({
            sortChildren: !1,
            defaults: x,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (_.stringFilter = je);
        var Mn = [],
          Ln = {},
          Pn = [],
          Nn = 0,
          qn = function (t) {
            return (Ln[t] || Pn).map(function (t) {
              return t();
            });
          },
          Rn = function () {
            var t = Date.now(),
              e = [];
            t - Nn > 2 &&
              (qn("matchMediaInit"),
                Mn.forEach(function (t) {
                  var n,
                    r,
                    i,
                    o,
                    a = t.queries,
                    u = t.conditions;
                  for (r in a)
                    (n = s.matchMedia(a[r]).matches) && (i = 1),
                      n !== u[r] && ((u[r] = n), (o = 1));
                  o && (t.revert(), i && e.push(t));
                }),
                qn("matchMediaRevert"),
                e.forEach(function (t) {
                  return t.onMatch(t);
                }),
                (Nn = t),
                qn("matchMedia"));
          },
          jn = (function () {
            function t(t, e) {
              (this.selector = e && le(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, n) {
                M(t) && ((n = e), (e = t), (t = M));
                var r = this,
                  i = function () {
                    var t,
                      i = o,
                      a = r.selector;
                    return (
                      i && i !== r && i.data.push(r),
                      n && (r.selector = le(n)),
                      (o = r),
                      (t = e.apply(r, arguments)),
                      M(t) && r._r.push(t),
                      (o = i),
                      (r.selector = a),
                      (r.isReverted = !1),
                      t
                    );
                  };
                return (r.last = i), t === M ? i(r) : t ? (r[t] = i) : i;
              }),
              (e.ignore = function (t) {
                var e = o;
                (o = null), t(this), (o = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (n) {
                    return n instanceof t
                      ? e.push.apply(e, n.getTweens())
                      : n instanceof mn &&
                      !(n.parent && "nested" === n.parent.data) &&
                      e.push(n);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var n = this;
                if (t) {
                  var r = this.getTweens();
                  this.data.forEach(function (t) {
                    "isFlip" === t.data &&
                      (t.revert(),
                        t.getChildren(!0, !0, !1).forEach(function (t) {
                          return r.splice(r.indexOf(t), 1);
                        }));
                  }),
                    r
                      .map(function (t) {
                        return { g: t.globalTime(0), t: t };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    this.data.forEach(function (e) {
                      return !(e instanceof tn) && e.revert && e.revert(t);
                    }),
                    this._r.forEach(function (e) {
                      return e(t, n);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  });
                if ((this.clear(), e)) {
                  var i = Mn.indexOf(this);
                  ~i && Mn.splice(i, 1);
                }
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          In = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, n) {
                N(t) || (t = { matches: t });
                var r,
                  i,
                  o,
                  a = new jn(0, n || this.scope),
                  u = (a.conditions = {});
                for (i in (this.contexts.push(a),
                  (e = a.add("onMatch", e)),
                  (a.queries = t),
                  t))
                  "all" === i
                    ? (o = 1)
                    : (r = s.matchMedia(t[i])) &&
                    (Mn.indexOf(a) < 0 && Mn.push(a),
                      (u[i] = r.matches) && (o = 1),
                      r.addListener
                        ? r.addListener(Rn)
                        : r.addEventListener("change", Rn));
                return o && e(a), this;
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          Hn = {
            registerPlugin: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              e.forEach(function (t) {
                return ke(t);
              });
            },
            timeline: function (t) {
              return new en(t);
            },
            getTweensOf: function (t, e) {
              return a.getTweensOf(t, e);
            },
            getProperty: function (t, e, n, r) {
              D(t) && (t = ue(t)[0]);
              var i = dt(t || {}).get,
                o = n ? wt : xt;
              return (
                "native" === n && (n = ""),
                t
                  ? e
                    ? o(((at[e] && at[e].get) || i)(t, e, n, r))
                    : function (e, n, r) {
                      return o(((at[e] && at[e].get) || i)(t, e, n, r));
                    }
                  : t
              );
            },
            quickSetter: function (t, e, n) {
              if ((t = ue(t)).length > 1) {
                var r = t.map(function (t) {
                  return Wn.quickSetter(t, e, n);
                }),
                  i = r.length;
                return function (t) {
                  for (var e = i; e--;) r[e](t);
                };
              }
              t = t[0] || {};
              var o = at[e],
                a = dt(t),
                s = (a.harness && (a.harness.aliases || {})[e]) || e,
                u = o
                  ? function (e) {
                    var r = new o();
                    (d._pt = 0),
                      r.init(t, n ? e + n : e, d, 0, [t]),
                      r.render(1, r),
                      d._pt && Sn(1, d);
                  }
                  : a.set(t, s);
              return o
                ? u
                : function (e) {
                  return u(t, s, n ? e + n : e, a, 1);
                };
            },
            quickTo: function (t, e, n) {
              var r,
                i = Wn.to(
                  t,
                  St((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})
                ),
                o = function (t, n, r) {
                  return i.resetTo(e, t, n, r);
                };
              return (o.tween = i), o;
            },
            isTweening: function (t) {
              return a.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = Ue(t.ease, x.ease)), Ct(x, t || {})
              );
            },
            config: function (t) {
              return Ct(_, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
              (r || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !at[t] &&
                  !V[t] &&
                  Q(e + " effect requires " + t + " plugin.")
                );
              }),
                (st[e] = function (t, e, r) {
                  return n(ue(t), Tt(e || {}, i), r);
                }),
                o &&
                (en.prototype[e] = function (t, n, r) {
                  return this.add(
                    st[e](t, N(n) ? n : (r = n) && {}, this),
                    r
                  );
                });
            },
            registerEase: function (t, e) {
              Be[t] = Ue(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? Ue(t, e) : Be;
            },
            getById: function (t) {
              return a.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var n,
                r,
                i = new en(t);
              for (
                i.smoothChildTiming = q(t.smoothChildTiming),
                a.remove(i),
                i._dp = 0,
                i._time = i._tTime = a._time,
                n = a._first;
                n;

              )
                (r = n._next),
                  (!e &&
                    !n._dur &&
                    n instanceof mn &&
                    n.vars.onComplete === n._targets[0]) ||
                  Wt(i, n, n._start - n._delay),
                  (n = r);
              return Wt(a, i, 0), i;
            },
            context: function (t, e) {
              return t ? new jn(t, e) : o;
            },
            matchMedia: function (t) {
              return new In(t);
            },
            matchMediaRefresh: function () {
              return (
                Mn.forEach(function (t) {
                  var e,
                    n,
                    r = t.conditions;
                  for (n in r) r[n] && ((r[n] = !1), (e = 1));
                  e && t.revert();
                }) || Rn()
              );
            },
            addEventListener: function (t, e) {
              var n = Ln[t] || (Ln[t] = []);
              ~n.indexOf(e) || n.push(e);
            },
            removeEventListener: function (t, e) {
              var n = Ln[t],
                r = n && n.indexOf(e);
              r >= 0 && n.splice(r, 1);
            },
            utils: {
              wrap: be,
              wrapYoyo: _e,
              distribute: fe,
              random: he,
              snap: pe,
              normalize: ve,
              getUnit: re,
              clamp: ie,
              splitColor: Le,
              toArray: ue,
              selector: le,
              mapRange: we,
              pipe: ge,
              unitize: me,
              interpolate: Te,
              shuffle: ce,
            },
            install: G,
            effects: st,
            ticker: Ie,
            updateRoot: en.updateRoot,
            plugins: at,
            globalTimeline: a,
            core: {
              PropTween: Dn,
              globals: Z,
              Tween: mn,
              Timeline: en,
              Animation: tn,
              getCache: dt,
              _removeLinkedListItem: Mt,
              reverting: function () {
                return i;
              },
              context: function (t) {
                return t && o && (o.data.push(t), (t._ctx = o)), o;
              },
              suppressOverwrites: function (t) {
                return (r = t);
              },
            },
          };
        ht("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (Hn[t] = mn[t]);
        }),
          Ie.add(en.updateRoot),
          (d = Hn.to({}, { duration: 0 }));
        var Bn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;)
            n = n._next;
          return n;
        },
          Fn = function (t, e) {
            var n,
              r,
              i,
              o = t._targets;
            for (n in e)
              for (r = o.length; r--;)
                (i = t._ptLookup[r][n]) &&
                  (i = i.d) &&
                  (i._pt && (i = Bn(i, n)),
                    i && i.modifier && i.modifier(e[n], t, o[r], n));
          },
          zn = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, n, r) {
                r._onInit = function (t) {
                  var r, i;
                  if (
                    (D(n) &&
                      ((r = {}),
                        ht(n, function (t) {
                          return (r[t] = 1);
                        }),
                        (n = r)),
                      e)
                  ) {
                    for (i in ((r = {}), n)) r[i] = e(n[i]);
                    n = r;
                  }
                  Fn(t, n);
                };
              },
            };
          },
          Wn =
            Hn.registerPlugin(
              {
                name: "attr",
                init: function (t, e, n, r, i) {
                  var o, a, s;
                  for (o in ((this.tween = n), e))
                    (s = t.getAttribute(o) || ""),
                      ((a = this.add(
                        t,
                        "setAttribute",
                        (s || 0) + "",
                        e[o],
                        r,
                        i,
                        0,
                        0,
                        o
                      )).op = o),
                      (a.b = s),
                      this._props.push(o);
                },
                render: function (t, e) {
                  for (var n = e._pt; n;)
                    i ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var n = e.length; n--;)
                    this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
                },
              },
              zn("roundProps", de),
              zn("modifiers"),
              zn("snap", pe)
            ) || Hn;
        (mn.version = en.version = Wn.version = "3.11.5"),
          (c = 1),
          R() && He();
        var Yn,
          Xn,
          $n,
          Vn,
          Un,
          Gn,
          Kn,
          Qn,
          Zn = Be.Power0,
          Jn = Be.Power1,
          tr = Be.Power2,
          er = Be.Power3,
          nr = Be.Power4,
          rr = Be.Linear,
          ir = Be.Quad,
          or = Be.Cubic,
          ar = Be.Quart,
          sr = Be.Quint,
          ur = Be.Strong,
          lr = Be.Elastic,
          cr = Be.Back,
          fr = Be.SteppedEase,
          dr = Be.Bounce,
          pr = Be.Sine,
          hr = Be.Expo,
          gr = Be.Circ,
          mr = function () {
            return "undefined" != typeof window;
          },
          vr = {},
          yr = 180 / Math.PI,
          br = Math.PI / 180,
          _r = Math.atan2,
          xr = 1e8,
          wr = /([A-Z])/g,
          Tr = /(left|right|width|margin|padding|x)/i,
          Er = /[\s,\(]\S/,
          Sr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          Cr = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          Ar = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          kr = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          Or = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          Dr = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          Mr = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          Lr = function (t, e, n) {
            return (t.style[e] = n);
          },
          Pr = function (t, e, n) {
            return t.style.setProperty(e, n);
          },
          Nr = function (t, e, n) {
            return (t._gsap[e] = n);
          },
          qr = function (t, e, n) {
            return (t._gsap.scaleX = t._gsap.scaleY = n);
          },
          Rr = function (t, e, n, r, i) {
            var o = t._gsap;
            (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
          },
          jr = function (t, e, n, r, i) {
            var o = t._gsap;
            (o[e] = n), o.renderTransform(i, o);
          },
          Ir = "transform",
          Hr = Ir + "Origin",
          Br = function t(e, n) {
            var r = this,
              i = this.target,
              o = i.style;
            if (e in vr) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return Sr.transform.split(",").forEach(function (e) {
                  return t.call(r, e, n);
                });
              if (
                (~(e = Sr[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                    return (r.tfm[t] = ii(i, t));
                  })
                  : (this.tfm[e] = i._gsap.x ? i._gsap[e] : ii(i, e)),
                  this.props.indexOf(Ir) >= 0)
              )
                return;
              i._gsap.svg &&
                ((this.svgo = i.getAttribute("data-svg-origin")),
                  this.props.push(Hr, n, "")),
                (e = Ir);
            }
            (o || n) && this.props.push(e, n, o[e]);
          },
          Fr = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
                t.removeProperty("scale"),
                t.removeProperty("rotate"));
          },
          zr = function () {
            var t,
              e,
              n = this.props,
              r = this.target,
              i = r.style,
              o = r._gsap;
            for (t = 0; t < n.length; t += 3)
              n[t + 1]
                ? (r[n[t]] = n[t + 2])
                : n[t + 2]
                  ? (i[n[t]] = n[t + 2])
                  : i.removeProperty(
                    "--" === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(wr, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (e in this.tfm) o[e] = this.tfm[e];
              o.svg &&
                (o.renderTransform(),
                  r.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = Kn()) && t.isStart) ||
                i[Ir] ||
                (Fr(i), (o.uncache = 1));
            }
          },
          Wr = function (t, e) {
            var n = { target: t, props: [], revert: zr, save: Br };
            return (
              t._gsap || Wn.core.getCache(t),
              e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
              n
            );
          },
          Yr = function (t, e) {
            var n = Xn.createElementNS
              ? Xn.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(
                  /^https/,
                  "http"
                ),
                t
              )
              : Xn.createElement(t);
            return n.style ? n : Xn.createElement(t);
          },
          Xr = function t(e, n, r) {
            var i = getComputedStyle(e);
            return (
              i[n] ||
              i.getPropertyValue(n.replace(wr, "-$1").toLowerCase()) ||
              i.getPropertyValue(n) ||
              (!r && t(e, Vr(n) || n, 1)) ||
              ""
            );
          },
          $r = "O,Moz,ms,Ms,Webkit".split(","),
          Vr = function (t, e, n) {
            var r = (e || Un).style,
              i = 5;
            if (t in r && !n) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              i-- && !($r[i] + t in r);

            );
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? $r[i] : "") + t;
          },
          Ur = function () {
            mr() &&
              window.document &&
              ((Yn = window),
                (Xn = Yn.document),
                ($n = Xn.documentElement),
                (Un = Yr("div") || { style: {} }),
                Yr("div"),
                (Ir = Vr(Ir)),
                (Hr = Ir + "Origin"),
                (Un.style.cssText =
                  "border-width:0;line-height:0;position:absolute;padding:0"),
                (Qn = !!Vr("perspective")),
                (Kn = Wn.core.reverting),
                (Vn = 1));
          },
          Gr = function t(e) {
            var n,
              r = Yr(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
              ),
              i = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if (
              ($n.appendChild(r),
                r.appendChild(this),
                (this.style.display = "block"),
                e)
            )
              try {
                (n = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) { }
            else this._gsapBBox && (n = this._gsapBBox());
            return (
              i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
              $n.removeChild(r),
              (this.style.cssText = a),
              n
            );
          },
          Kr = function (t, e) {
            for (var n = e.length; n--;)
              if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
          },
          Qr = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (n) {
              e = Gr.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
              t.getBBox === Gr ||
              (e = Gr.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                  x: +Kr(t, ["x", "cx", "x1"]) || 0,
                  y: +Kr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
            );
          },
          Zr = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !Qr(t)
            );
          },
          Jr = function (t, e) {
            if (e) {
              var n = t.style;
              e in vr && e !== Hr && (e = Ir),
                n.removeProperty
                  ? (("ms" !== e.substr(0, 2) &&
                    "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                    n.removeProperty(e.replace(wr, "-$1").toLowerCase()))
                  : n.removeAttribute(e);
            }
          },
          ti = function (t, e, n, r, i, o) {
            var a = new Dn(t._pt, e, n, 0, 1, o ? Mr : Dr);
            return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
          },
          ei = { deg: 1, rad: 1, turn: 1 },
          ni = { grid: 1, flex: 1 },
          ri = function t(e, n, r, i) {
            var o,
              a,
              s,
              u,
              l = parseFloat(r) || 0,
              c = (r + "").trim().substr((l + "").length) || "px",
              f = Un.style,
              d = Tr.test(n),
              p = "svg" === e.tagName.toLowerCase(),
              h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
              g = 100,
              m = "px" === i,
              v = "%" === i;
            return i === c || !l || ei[i] || ei[c]
              ? l
              : ("px" !== c && !m && (l = t(e, n, r, "px")),
                (u = e.getCTM && Zr(e)),
                (!v && "%" !== c) || (!vr[n] && !~n.indexOf("adius"))
                  ? ((f[d ? "width" : "height"] = g + (m ? c : i)),
                    (a =
                      ~n.indexOf("adius") ||
                        ("em" === i && e.appendChild && !p)
                        ? e
                        : e.parentNode),
                    u && (a = (e.ownerSVGElement || {}).parentNode),
                    (a && a !== Xn && a.appendChild) || (a = Xn.body),
                    (s = a._gsap) &&
                      v &&
                      s.width &&
                      d &&
                      s.time === Ie.time &&
                      !s.uncache
                      ? gt((l / s.width) * g)
                      : ((v || "%" === c) &&
                        !ni[Xr(a, "display")] &&
                        (f.position = Xr(e, "position")),
                        a === e && (f.position = "static"),
                        a.appendChild(Un),
                        (o = Un[h]),
                        a.removeChild(Un),
                        (f.position = "absolute"),
                        d &&
                        v &&
                        (((s = dt(a)).time = Ie.time), (s.width = a[h])),
                        gt(m ? (o * l) / g : o && l ? (g / o) * l : 0)))
                  : ((o = u ? e.getBBox()[d ? "width" : "height"] : e[h]),
                    gt(v ? (l / o) * g : (l / 100) * o)));
          },
          ii = function (t, e, n, r) {
            var i;
            return (
              Vn || Ur(),
              e in Sr &&
              "transform" !== e &&
              ~(e = Sr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
              vr[e] && "transform" !== e
                ? ((i = mi(t, r)),
                  (i =
                    "transformOrigin" !== e
                      ? i[e]
                      : i.svg
                        ? i.origin
                        : vi(Xr(t, Hr)) + " " + i.zOrigin + "px"))
                : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (li[e] && li[e](t, e, n)) ||
                  Xr(t, e) ||
                  pt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
              n && !~(i + "").trim().indexOf(" ") ? ri(t, e, i, n) + n : i
            );
          },
          oi = function (t, e, n, r) {
            if (!n || "none" === n) {
              var i = Vr(e, t, 1),
                o = i && Xr(t, i, 1);
              o && o !== n
                ? ((e = i), (n = o))
                : "borderColor" === e && (n = Xr(t, "borderTopColor"));
            }
            var a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g,
              m,
              v = new Dn(this._pt, t.style, e, 0, 1, En),
              y = 0,
              b = 0;
            if (
              ((v.b = n),
                (v.e = r),
                (n += ""),
                "auto" == (r += "") &&
                ((t.style[e] = r), (r = Xr(t, e) || r), (t.style[e] = n)),
                je((a = [n, r])),
                (n = a[0]),
                (r = a[1]),
                (u = n.match(z) || []),
                (r.match(z) || []).length)
            ) {
              for (; (s = z.exec(r));)
                (d = s[0]),
                  (h = r.substring(y, s.index)),
                  c
                    ? (c = (c + 1) % 5)
                    : ("rgba(" !== h.substr(-5) &&
                      "hsla(" !== h.substr(-5)) ||
                    (c = 1),
                  d !== (f = u[b++] || "") &&
                  ((l = parseFloat(f) || 0),
                    (m = f.substr((l + "").length)),
                    "=" === d.charAt(1) && (d = vt(l, d) + m),
                    (p = parseFloat(d)),
                    (g = d.substr((p + "").length)),
                    (y = z.lastIndex - g.length),
                    g ||
                    ((g = g || _.units[e] || m),
                      y === r.length && ((r += g), (v.e += g))),
                    m !== g && (l = ri(t, e, f, g) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: h || 1 === b ? h : ",",
                      s: l,
                      c: p - l,
                      m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              v.c = y < r.length ? r.substring(y, r.length) : "";
            } else v.r = "display" === e && "none" === r ? Mr : Dr;
            return Y.test(r) && (v.e = 0), (this._pt = v), v;
          },
          ai = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          si = function (t) {
            var e = t.split(" "),
              n = e[0],
              r = e[1] || "50%";
            return (
              ("top" !== n &&
                "bottom" !== n &&
                "left" !== r &&
                "right" !== r) ||
              ((t = n), (n = r), (r = t)),
              (e[0] = ai[n] || n),
              (e[1] = ai[r] || r),
              e.join(" ")
            );
          },
          ui = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var n,
                r,
                i,
                o = e.t,
                a = o.style,
                s = e.u,
                u = o._gsap;
              if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
              else
                for (i = (s = s.split(",")).length; --i > -1;)
                  (n = s[i]),
                    vr[n] &&
                    ((r = 1), (n = "transformOrigin" === n ? Hr : Ir)),
                    Jr(o, n);
              r &&
                (Jr(o, Ir),
                  u &&
                  (u.svg && o.removeAttribute("transform"),
                    mi(o, 1),
                    (u.uncache = 1),
                    Fr(a)));
            }
          },
          li = {
            clearProps: function (t, e, n, r, i) {
              if ("isFromStart" !== i.data) {
                var o = (t._pt = new Dn(t._pt, e, n, 0, 0, ui));
                return (
                  (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1
                );
              }
            },
          },
          ci = [1, 0, 0, 1, 0, 0],
          fi = {},
          di = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          pi = function (t) {
            var e = Xr(t, Ir);
            return di(e) ? ci : e.substr(7).match(F).map(gt);
          },
          hi = function (t, e) {
            var n,
              r,
              i,
              o,
              a = t._gsap || dt(t),
              s = t.style,
              u = pi(t);
            return a.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (u = [
                  (i = t.transform.baseVal.consolidate().matrix).a,
                  i.b,
                  i.c,
                  i.d,
                  i.e,
                  i.f,
                ]).join(",")
                ? ci
                : u
              : (u !== ci ||
                t.offsetParent ||
                t === $n ||
                a.svg ||
                ((i = s.display),
                  (s.display = "block"),
                  ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (r = t.nextElementSibling), $n.appendChild(t)),
                  (u = pi(t)),
                  i ? (s.display = i) : Jr(t, "display"),
                  o &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                      ? n.appendChild(t)
                      : $n.removeChild(t))),
                e && u.length > 6
                  ? [u[0], u[1], u[4], u[5], u[12], u[13]]
                  : u);
          },
          gi = function (t, e, n, r, i, o) {
            var a,
              s,
              u,
              l = t._gsap,
              c = i || hi(t, !0),
              f = l.xOrigin || 0,
              d = l.yOrigin || 0,
              p = l.xOffset || 0,
              h = l.yOffset || 0,
              g = c[0],
              m = c[1],
              v = c[2],
              y = c[3],
              b = c[4],
              _ = c[5],
              x = e.split(" "),
              w = parseFloat(x[0]) || 0,
              T = parseFloat(x[1]) || 0;
            n
              ? c !== ci &&
              (s = g * y - m * v) &&
              ((u = w * (-m / s) + T * (g / s) - (g * _ - m * b) / s),
                (w = w * (y / s) + T * (-v / s) + (v * _ - y * b) / s),
                (T = u))
              : ((w =
                (a = Qr(t)).x +
                (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
                (T =
                  a.y +
                  (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
              r || (!1 !== r && l.smooth)
                ? ((b = w - f),
                  (_ = T - d),
                  (l.xOffset = p + (b * g + _ * v) - b),
                  (l.yOffset = h + (b * m + _ * y) - _))
                : (l.xOffset = l.yOffset = 0),
              (l.xOrigin = w),
              (l.yOrigin = T),
              (l.smooth = !!r),
              (l.origin = e),
              (l.originIsAbsolute = !!n),
              (t.style[Hr] = "0px 0px"),
              o &&
              (ti(o, l, "xOrigin", f, w),
                ti(o, l, "yOrigin", d, T),
                ti(o, l, "xOffset", p, l.xOffset),
                ti(o, l, "yOffset", h, l.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + T);
          },
          mi = function (t, e) {
            var n = t._gsap || new Je(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g,
              m,
              v,
              y,
              b,
              x,
              w,
              T,
              E,
              S,
              C,
              A,
              k,
              O,
              D,
              M,
              L,
              P,
              N,
              q,
              R = t.style,
              j = n.scaleX < 0,
              I = "px",
              H = "deg",
              B = getComputedStyle(t),
              F = Xr(t, Hr) || "0";
            return (
              (r = i = o = u = l = c = f = d = p = 0),
              (a = s = 1),
              (n.svg = !(!t.getCTM || !Zr(t))),
              B.translate &&
              (("none" === B.translate &&
                "none" === B.scale &&
                "none" === B.rotate) ||
                (R[Ir] =
                  ("none" !== B.translate
                    ? "translate3d(" +
                    (B.translate + " 0 0")
                      .split(" ")
                      .slice(0, 3)
                      .join(", ") +
                    ") "
                    : "") +
                  ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                  ("none" !== B.scale
                    ? "scale(" + B.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== B[Ir] ? B[Ir] : "")),
                (R.scale = R.rotate = R.translate = "none")),
              (m = hi(t, n.svg)),
              n.svg &&
              (n.uncache
                ? ((k = t.getBBox()),
                  (F = n.xOrigin - k.x + "px " + (n.yOrigin - k.y) + "px"),
                  (A = ""))
                : (A = !e && t.getAttribute("data-svg-origin")),
                gi(t, A || F, !!A || n.originIsAbsolute, !1 !== n.smooth, m)),
              (h = n.xOrigin || 0),
              (g = n.yOrigin || 0),
              m !== ci &&
              ((x = m[0]),
                (w = m[1]),
                (T = m[2]),
                (E = m[3]),
                (r = S = m[4]),
                (i = C = m[5]),
                6 === m.length
                  ? ((a = Math.sqrt(x * x + w * w)),
                    (s = Math.sqrt(E * E + T * T)),
                    (u = x || w ? _r(w, x) * yr : 0),
                    (f = T || E ? _r(T, E) * yr + u : 0) &&
                    (s *= Math.abs(Math.cos(f * br))),
                    n.svg &&
                    ((r -= h - (h * x + g * T)),
                      (i -= g - (h * w + g * E))))
                  : ((q = m[6]),
                    (P = m[7]),
                    (D = m[8]),
                    (M = m[9]),
                    (L = m[10]),
                    (N = m[11]),
                    (r = m[12]),
                    (i = m[13]),
                    (o = m[14]),
                    (l = (v = _r(q, L)) * yr),
                    v &&
                    ((A = S * (y = Math.cos(-v)) + D * (b = Math.sin(-v))),
                      (k = C * y + M * b),
                      (O = q * y + L * b),
                      (D = S * -b + D * y),
                      (M = C * -b + M * y),
                      (L = q * -b + L * y),
                      (N = P * -b + N * y),
                      (S = A),
                      (C = k),
                      (q = O)),
                    (c = (v = _r(-T, L)) * yr),
                    v &&
                    ((y = Math.cos(-v)),
                      (N = E * (b = Math.sin(-v)) + N * y),
                      (x = A = x * y - D * b),
                      (w = k = w * y - M * b),
                      (T = O = T * y - L * b)),
                    (u = (v = _r(w, x)) * yr),
                    v &&
                    ((A = x * (y = Math.cos(v)) + w * (b = Math.sin(v))),
                      (k = S * y + C * b),
                      (w = w * y - x * b),
                      (C = C * y - S * b),
                      (x = A),
                      (S = k)),
                    l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                    (a = gt(Math.sqrt(x * x + w * w + T * T))),
                    (s = gt(Math.sqrt(C * C + q * q))),
                    (v = _r(S, C)),
                    (f = Math.abs(v) > 2e-4 ? v * yr : 0),
                    (p = N ? 1 / (N < 0 ? -N : N) : 0)),
                n.svg &&
                ((A = t.getAttribute("transform")),
                  (n.forceCSS =
                    t.setAttribute("transform", "") || !di(Xr(t, Ir))),
                  A && t.setAttribute("transform", A))),
              Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (j
                ? ((a *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
              (e = e || n.uncache),
              (n.x =
                r -
                ((n.xPercent =
                  r &&
                  ((!e && n.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-r)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * n.xPercent) / 100
                  : 0) +
                I),
              (n.y =
                i -
                ((n.yPercent =
                  i &&
                  ((!e && n.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * n.yPercent) / 100
                  : 0) +
                I),
              (n.z = o + I),
              (n.scaleX = gt(a)),
              (n.scaleY = gt(s)),
              (n.rotation = gt(u) + H),
              (n.rotationX = gt(l) + H),
              (n.rotationY = gt(c) + H),
              (n.skewX = f + H),
              (n.skewY = d + H),
              (n.transformPerspective = p + I),
              (n.zOrigin = parseFloat(F.split(" ")[2]) || 0) &&
              (R[Hr] = vi(F)),
              (n.xOffset = n.yOffset = 0),
              (n.force3D = _.force3D),
              (n.renderTransform = n.svg ? Ei : Qn ? Ti : bi),
              (n.uncache = 0),
              n
            );
          },
          vi = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          yi = function (t, e, n) {
            var r = re(e);
            return (
              gt(parseFloat(e) + parseFloat(ri(t, "x", n + "px", r))) + r
            );
          },
          bi = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              Ti(t, e);
          },
          _i = "0deg",
          xi = "0px",
          wi = ") ",
          Ti = function (t, e) {
            var n = e || this,
              r = n.xPercent,
              i = n.yPercent,
              o = n.x,
              a = n.y,
              s = n.z,
              u = n.rotation,
              l = n.rotationY,
              c = n.rotationX,
              f = n.skewX,
              d = n.skewY,
              p = n.scaleX,
              h = n.scaleY,
              g = n.transformPerspective,
              m = n.force3D,
              v = n.target,
              y = n.zOrigin,
              b = "",
              _ = ("auto" === m && t && 1 !== t) || !0 === m;
            if (y && (c !== _i || l !== _i)) {
              var x,
                w = parseFloat(l) * br,
                T = Math.sin(w),
                E = Math.cos(w);
              (w = parseFloat(c) * br),
                (x = Math.cos(w)),
                (o = yi(v, o, T * x * -y)),
                (a = yi(v, a, -Math.sin(w) * -y)),
                (s = yi(v, s, E * x * -y + y));
            }
            g !== xi && (b += "perspective(" + g + wi),
              (r || i) && (b += "translate(" + r + "%, " + i + "%) "),
              (_ || o !== xi || a !== xi || s !== xi) &&
              (b +=
                s !== xi || _
                  ? "translate3d(" + o + ", " + a + ", " + s + ") "
                  : "translate(" + o + ", " + a + wi),
              u !== _i && (b += "rotate(" + u + wi),
              l !== _i && (b += "rotateY(" + l + wi),
              c !== _i && (b += "rotateX(" + c + wi),
              (f === _i && d === _i) || (b += "skew(" + f + ", " + d + wi),
              (1 === p && 1 === h) || (b += "scale(" + p + ", " + h + wi),
              (v.style[Ir] = b || "translate(0, 0)");
          },
          Ei = function (t, e) {
            var n,
              r,
              i,
              o,
              a,
              s = e || this,
              u = s.xPercent,
              l = s.yPercent,
              c = s.x,
              f = s.y,
              d = s.rotation,
              p = s.skewX,
              h = s.skewY,
              g = s.scaleX,
              m = s.scaleY,
              v = s.target,
              y = s.xOrigin,
              b = s.yOrigin,
              _ = s.xOffset,
              x = s.yOffset,
              w = s.forceCSS,
              T = parseFloat(c),
              E = parseFloat(f);
            (d = parseFloat(d)),
              (p = parseFloat(p)),
              (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
              d || p
                ? ((d *= br),
                  (p *= br),
                  (n = Math.cos(d) * g),
                  (r = Math.sin(d) * g),
                  (i = Math.sin(d - p) * -m),
                  (o = Math.cos(d - p) * m),
                  p &&
                  ((h *= br),
                    (a = Math.tan(p - h)),
                    (i *= a = Math.sqrt(1 + a * a)),
                    (o *= a),
                    h &&
                    ((a = Math.tan(h)),
                      (n *= a = Math.sqrt(1 + a * a)),
                      (r *= a))),
                  (n = gt(n)),
                  (r = gt(r)),
                  (i = gt(i)),
                  (o = gt(o)))
                : ((n = g), (o = m), (r = i = 0)),
              ((T && !~(c + "").indexOf("px")) ||
                (E && !~(f + "").indexOf("px"))) &&
              ((T = ri(v, "x", c, "px")), (E = ri(v, "y", f, "px"))),
              (y || b || _ || x) &&
              ((T = gt(T + y - (y * n + b * i) + _)),
                (E = gt(E + b - (y * r + b * o) + x))),
              (u || l) &&
              ((a = v.getBBox()),
                (T = gt(T + (u / 100) * a.width)),
                (E = gt(E + (l / 100) * a.height))),
              (a =
                "matrix(" +
                n +
                "," +
                r +
                "," +
                i +
                "," +
                o +
                "," +
                T +
                "," +
                E +
                ")"),
              v.setAttribute("transform", a),
              w && (v.style[Ir] = a);
          },
          Si = function (t, e, n, r, i) {
            var o,
              a,
              s = 360,
              u = D(i),
              l = parseFloat(i) * (u && ~i.indexOf("rad") ? yr : 1) - r,
              c = r + l + "deg";
            return (
              u &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= s) != l % (s / 2) &&
                (l += l < 0 ? s : -s),
                "cw" === o && l < 0
                  ? (l = ((l + s * xr) % s) - ~~(l / s) * s)
                  : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - s * xr) % s) - ~~(l / s) * s)),
              (t._pt = a = new Dn(t._pt, e, n, r, l, Ar)),
              (a.e = c),
              (a.u = "deg"),
              t._props.push(n),
              a
            );
          },
          Ci = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          },
          Ai = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = Ci({}, n._gsap),
              f = "perspective,force3D,transformOrigin,svgOrigin",
              d = n.style;
            for (i in (c.svg
              ? ((o = n.getAttribute("transform")),
                n.setAttribute("transform", ""),
                (d[Ir] = e),
                (r = mi(n, 1)),
                Jr(n, Ir),
                n.setAttribute("transform", o))
              : ((o = getComputedStyle(n)[Ir]),
                (d[Ir] = e),
                (r = mi(n, 1)),
                (d[Ir] = o)),
              vr))
              (o = c[i]) !== (a = r[i]) &&
                f.indexOf(i) < 0 &&
                ((s = re(o) !== (l = re(a)) ? ri(n, i, o, l) : parseFloat(o)),
                  (u = parseFloat(a)),
                  (t._pt = new Dn(t._pt, r, i, s, u - s, Cr)),
                  (t._pt.u = l || 0),
                  t._props.push(i));
            Ci(r, c);
          };
        ht("padding,margin,Width,Radius", function (t, e) {
          var n = "Top",
            r = "Right",
            i = "Bottom",
            o = "Left",
            a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
              function (n) {
                return e < 2 ? t + n : "border" + n + t;
              }
            );
          li[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
            var o, s;
            if (arguments.length < 4)
              return (
                (o = a.map(function (e) {
                  return ii(t, e, n);
                })),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
              );
            (o = (r + "").split(" ")),
              (s = {}),
              a.forEach(function (t, e) {
                return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
              }),
              t.init(e, s, i);
          };
        });
        var ki,
          Oi,
          Di,
          Mi,
          Li = {
            name: "css",
            register: Ur,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m,
                v,
                y,
                b,
                x,
                w = this._props,
                T = t.style,
                E = n.vars.startAt;
              for (f in (Vn || Ur(),
                (this.styles = this.styles || Wr(t)),
                (x = this.styles.props),
                (this.tween = n),
                e))
                if (
                  "autoRound" !== f &&
                  ((a = e[f]), !at[f] || !un(f, e, n, r, t, i))
                )
                  if (
                    ((l = typeof a),
                      (c = li[f]),
                      "function" === l && (l = typeof (a = a.call(n, r, t, i))),
                      "string" === l && ~a.indexOf("random(") && (a = xe(a)),
                      c)
                  )
                    c(this, t, f, a, n) && (b = 1);
                  else if ("--" === f.substr(0, 2))
                    (o = (
                      getComputedStyle(t).getPropertyValue(f) + ""
                    ).trim()),
                      (a += ""),
                      (qe.lastIndex = 0),
                      qe.test(o) || ((d = re(o)), (p = re(a))),
                      p ? d !== p && (o = ri(t, f, o, p) + p) : d && (a += d),
                      this.add(T, "setProperty", o, a, r, i, 0, 0, f),
                      w.push(f),
                      x.push(f, 0, T[f]);
                  else if ("undefined" !== l) {
                    if (
                      (E && f in E
                        ? ((o =
                          "function" == typeof E[f]
                            ? E[f].call(n, r, t, i)
                            : E[f]),
                          D(o) && ~o.indexOf("random(") && (o = xe(o)),
                          re(o + "") ||
                          (o += _.units[f] || re(ii(t, f)) || ""),
                          "=" === (o + "").charAt(1) && (o = ii(t, f)))
                        : (o = ii(t, f)),
                        (u = parseFloat(o)),
                        (h =
                          "string" === l &&
                          "=" === a.charAt(1) &&
                          a.substr(0, 2)) && (a = a.substr(2)),
                        (s = parseFloat(a)),
                        f in Sr &&
                        ("autoAlpha" === f &&
                          (1 === u &&
                            "hidden" === ii(t, "visibility") &&
                            s &&
                            (u = 0),
                            x.push("visibility", 0, T.visibility),
                            ti(
                              this,
                              T,
                              "visibility",
                              u ? "inherit" : "hidden",
                              s ? "inherit" : "hidden",
                              !s
                            )),
                          "scale" !== f &&
                          "transform" !== f &&
                          ~(f = Sr[f]).indexOf(",") &&
                          (f = f.split(",")[0])),
                        (g = f in vr))
                    )
                      if (
                        (this.styles.save(f),
                          m ||
                          (((v = t._gsap).renderTransform &&
                            !e.parseTransform) ||
                            mi(t, e.parseTransform),
                            (y = !1 !== e.smoothOrigin && v.smooth),
                            ((m = this._pt =
                              new Dn(
                                this._pt,
                                T,
                                Ir,
                                0,
                                1,
                                v.renderTransform,
                                v,
                                0,
                                -1
                              )).dep = 1)),
                          "scale" === f)
                      )
                        (this._pt = new Dn(
                          this._pt,
                          v,
                          "scaleY",
                          v.scaleY,
                          (h ? vt(v.scaleY, h + s) : s) - v.scaleY || 0,
                          Cr
                        )),
                          (this._pt.u = 0),
                          w.push("scaleY", f),
                          (f += "X");
                      else {
                        if ("transformOrigin" === f) {
                          x.push(Hr, 0, T[Hr]),
                            (a = si(a)),
                            v.svg
                              ? gi(t, a, 0, y, 0, this)
                              : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                ti(this, v, "zOrigin", v.zOrigin, p),
                                ti(this, T, f, vi(o), vi(a)));
                          continue;
                        }
                        if ("svgOrigin" === f) {
                          gi(t, a, 1, y, 0, this);
                          continue;
                        }
                        if (f in fi) {
                          Si(this, v, f, u, h ? vt(u, h + a) : a);
                          continue;
                        }
                        if ("smoothOrigin" === f) {
                          ti(this, v, "smooth", v.smooth, a);
                          continue;
                        }
                        if ("force3D" === f) {
                          v[f] = a;
                          continue;
                        }
                        if ("transform" === f) {
                          Ai(this, a, t);
                          continue;
                        }
                      }
                    else f in T || (f = Vr(f) || f);
                    if (
                      g ||
                      ((s || 0 === s) &&
                        (u || 0 === u) &&
                        !Er.test(a) &&
                        f in T)
                    )
                      s || (s = 0),
                        (d = (o + "").substr((u + "").length)) !==
                        (p = re(a) || (f in _.units ? _.units[f] : d)) &&
                        (u = ri(t, f, o, p)),
                        (this._pt = new Dn(
                          this._pt,
                          g ? v : T,
                          f,
                          u,
                          (h ? vt(u, h + s) : s) - u,
                          g ||
                            ("px" !== p && "zIndex" !== f) ||
                            !1 === e.autoRound
                            ? Cr
                            : Or
                        )),
                        (this._pt.u = p || 0),
                        d !== p &&
                        "%" !== p &&
                        ((this._pt.b = o), (this._pt.r = kr));
                    else if (f in T) oi.call(this, t, f, o, h ? h + a : a);
                    else if (f in t)
                      this.add(t, f, o || t[f], h ? h + a : a, r, i);
                    else if ("parseTransform" !== f) {
                      K(f, a);
                      continue;
                    }
                    g ||
                      (f in T ? x.push(f, 0, T[f]) : x.push(f, 1, o || t[f])),
                      w.push(f);
                  }
              b && On(this);
            },
            render: function (t, e) {
              if (e.tween._time || !Kn())
                for (var n = e._pt; n;) n.r(t, n.d), (n = n._next);
              else e.styles.revert();
            },
            get: ii,
            aliases: Sr,
            getSetter: function (t, e, n) {
              var r = Sr[e];
              return (
                r && r.indexOf(",") < 0 && (e = r),
                e in vr && e !== Hr && (t._gsap.x || ii(t, "x"))
                  ? n && Gn === n
                    ? "scale" === e
                      ? qr
                      : Nr
                    : (Gn = n || {}) && ("scale" === e ? Rr : jr)
                  : t.style && !P(t.style[e])
                    ? Lr
                    : ~e.indexOf("-")
                      ? Pr
                      : xn(t, e)
              );
            },
            core: { _removeProperty: Jr, _getMatrix: hi },
          };
        (Wn.utils.checkPrefix = Vr),
          (Wn.core.getStyleSaver = Wr),
          (Di =
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
          (Mi = ht(
            (ki = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
            "," +
            (Oi = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              vr[t] = 1;
            }
          )),
          ht(Oi, function (t) {
            (_.units[t] = "deg"), (fi[t] = 1);
          }),
          (Sr[Mi[13]] = ki + "," + Oi),
          ht(Di, function (t) {
            var e = t.split(":");
            Sr[e[1]] = Mi[e[0]];
          }),
          ht(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              _.units[t] = "px";
            }
          ),
          Wn.registerPlugin(Li);
        var Pi = Wn.registerPlugin(Li) || Wn,
          Ni = Pi.core.Tween;
        (t.Back = cr),
          (t.Bounce = dr),
          (t.CSSPlugin = Li),
          (t.Circ = gr),
          (t.Cubic = or),
          (t.Elastic = lr),
          (t.Expo = hr),
          (t.Linear = rr),
          (t.Power0 = Zn),
          (t.Power1 = Jn),
          (t.Power2 = tr),
          (t.Power3 = er),
          (t.Power4 = nr),
          (t.Quad = ir),
          (t.Quart = ar),
          (t.Quint = sr),
          (t.Sine = pr),
          (t.SteppedEase = fr),
          (t.Strong = ur),
          (t.TimelineLite = en),
          (t.TimelineMax = en),
          (t.TweenLite = mn),
          (t.TweenMax = Ni),
          (t.default = Pi),
          (t.gsap = Pi),
          "undefined" == typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete window.default;
      })(e);
    },
    771: function (t) {
      "use strict";
      function e(t, e, n) {
        if (void 0 === n) return t && t.h5s && t.h5s.data && t.h5s.data[e];
        (t.h5s = t.h5s || {}),
          (t.h5s.data = t.h5s.data || {}),
          (t.h5s.data[e] = n);
      }
      var n = function (t, e) {
        if (
          !(
            t instanceof NodeList ||
            t instanceof HTMLCollection ||
            t instanceof Array
          )
        )
          throw new Error(
            "You must provide a nodeList/HTMLCollection/Array of elements to be filtered."
          );
        return "string" != typeof e
          ? Array.from(t)
          : Array.from(t).filter(function (t) {
            return 1 === t.nodeType && t.matches(e);
          });
      },
        r = new Map(),
        i = (function () {
          function t() {
            (this._config = new Map()),
              (this._placeholder = void 0),
              (this._data = new Map());
          }
          return (
            Object.defineProperty(t.prototype, "config", {
              get: function () {
                var t = {};
                return (
                  this._config.forEach(function (e, n) {
                    t[n] = e;
                  }),
                  t
                );
              },
              set: function (t) {
                if ("object" != typeof t)
                  throw new Error(
                    "You must provide a valid configuration object to the config setter."
                  );
                var e = Object.assign({}, t);
                this._config = new Map(Object.entries(e));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setConfig = function (t, e) {
              if (!this._config.has(t))
                throw new Error(
                  "Trying to set invalid configuration item: " + t
                );
              this._config.set(t, e);
            }),
            (t.prototype.getConfig = function (t) {
              if (!this._config.has(t))
                throw new Error("Invalid configuration item requested: " + t);
              return this._config.get(t);
            }),
            Object.defineProperty(t.prototype, "placeholder", {
              get: function () {
                return this._placeholder;
              },
              set: function (t) {
                if (!(t instanceof HTMLElement) && null !== t)
                  throw new Error(
                    "A placeholder must be an html element or null."
                  );
                this._placeholder = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setData = function (t, e) {
              if ("string" != typeof t)
                throw new Error("The key must be a string.");
              this._data.set(t, e);
            }),
            (t.prototype.getData = function (t) {
              if ("string" != typeof t)
                throw new Error("The key must be a string.");
              return this._data.get(t);
            }),
            (t.prototype.deleteData = function (t) {
              if ("string" != typeof t)
                throw new Error("The key must be a string.");
              return this._data.delete(t);
            }),
            t
          );
        })(),
        o = function (t) {
          if (!(t instanceof HTMLElement))
            throw new Error(
              "Please provide a sortable to the store function."
            );
          return r.has(t) || r.set(t, new i()), r.get(t);
        };
      function a(t, e, n) {
        if (t instanceof Array)
          for (var r = 0; r < t.length; ++r) a(t[r], e, n);
        else t.addEventListener(e, n), o(t).setData("event" + e, n);
      }
      function s(t, e) {
        if (t instanceof Array) for (var n = 0; n < t.length; ++n) s(t[n], e);
        else
          t.removeEventListener(e, o(t).getData("event" + e)),
            o(t).deleteData("event" + e);
      }
      function u(t, e, n) {
        if (t instanceof Array)
          for (var r = 0; r < t.length; ++r) u(t[r], e, n);
        else t.setAttribute(e, n);
      }
      function l(t, e) {
        if (t instanceof Array) for (var n = 0; n < t.length; ++n) l(t[n], e);
        else t.removeAttribute(e);
      }
      var c = function (t) {
        if (!t.parentElement || 0 === t.getClientRects().length)
          throw new Error("target element must be part of the dom");
        var e = t.getClientRects()[0];
        return {
          left: e.left + window.pageXOffset,
          right: e.right + window.pageXOffset,
          top: e.top + window.pageYOffset,
          bottom: e.bottom + window.pageYOffset,
        };
      },
        f = function (t, e) {
          var n;
          return (
            void 0 === e && (e = 0),
            function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              clearTimeout(n),
                (n = setTimeout(function () {
                  t.apply(void 0, r);
                }, e));
            }
          );
        },
        d = function (t, e) {
          if (
            !(
              t instanceof HTMLElement &&
              (e instanceof NodeList ||
                e instanceof HTMLCollection ||
                e instanceof Array)
            )
          )
            throw new Error(
              "You must provide an element and a list of elements."
            );
          return Array.from(e).indexOf(t);
        },
        p = function (t) {
          if (!(t instanceof HTMLElement))
            throw new Error("Element is not a node element.");
          return null !== t.parentNode;
        },
        h = function (t, e, n) {
          if (
            !(
              t instanceof HTMLElement &&
              t.parentElement instanceof HTMLElement
            )
          )
            throw new Error("target and element must be a node");
          t.parentElement.insertBefore(
            e,
            "before" === n ? t : t.nextElementSibling
          );
        },
        g = function (t, e) {
          return h(t, e, "before");
        },
        m = function (t, e) {
          return h(t, e, "after");
        },
        v = function (t, r, i) {
          if (
            (void 0 === r &&
              (r = function (t, e) {
                return t;
              }),
              void 0 === i &&
              (i = function (t) {
                return t;
              }),
              !(t instanceof HTMLElement) || !0 == !t.isSortable)
          )
            throw new Error(
              "You need to provide a sortableContainer to be serialized."
            );
          if ("function" != typeof r || "function" != typeof i)
            throw new Error(
              "You need to provide a valid serializer for items and the container."
            );
          var o = e(t, "opts").items,
            a = n(t.children, o),
            s = a.map(function (e) {
              return {
                parent: t,
                node: e,
                html: e.outerHTML,
                index: d(e, a),
              };
            });
          return {
            container: i({ node: t, itemCount: s.length }),
            items: s.map(function (e) {
              return r(e, t);
            }),
          };
        },
        y = function (t, e, n) {
          var r;
          if (
            (void 0 === n && (n = "sortable-placeholder"),
              !(t instanceof HTMLElement))
          )
            throw new Error(
              "You must provide a valid element as a sortable."
            );
          if (!(e instanceof HTMLElement) && void 0 !== e)
            throw new Error(
              "You must provide a valid element as a placeholder or set ot to undefined."
            );
          return (
            void 0 === e &&
            (["UL", "OL"].includes(t.tagName)
              ? (e = document.createElement("li"))
              : ["TABLE", "TBODY"].includes(t.tagName)
                ? ((e = document.createElement("tr")).innerHTML =
                  '<td colspan="100"></td>')
                : (e = document.createElement("div"))),
            "string" == typeof n &&
            (r = e.classList).add.apply(r, n.split(" ")),
            e
          );
        },
        b = function (t) {
          if (!(t instanceof HTMLElement))
            throw new Error("You must provide a valid dom element");
          var e = window.getComputedStyle(t);
          return "border-box" === e.getPropertyValue("box-sizing")
            ? parseInt(e.getPropertyValue("height"), 10)
            : ["height", "padding-top", "padding-bottom"]
              .map(function (t) {
                var n = parseInt(e.getPropertyValue(t), 10);
                return isNaN(n) ? 0 : n;
              })
              .reduce(function (t, e) {
                return t + e;
              });
        },
        _ = function (t) {
          if (!(t instanceof HTMLElement))
            throw new Error("You must provide a valid dom element");
          var e = window.getComputedStyle(t);
          return ["width", "padding-left", "padding-right"]
            .map(function (t) {
              var n = parseInt(e.getPropertyValue(t), 10);
              return isNaN(n) ? 0 : n;
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        x = function (t, e) {
          if (!(t instanceof Array))
            throw new Error(
              "You must provide a Array of HTMLElements to be filtered."
            );
          return "string" != typeof e
            ? t
            : t
              .filter(function (t) {
                return (
                  t.querySelector(e) instanceof HTMLElement ||
                  (t.shadowRoot &&
                    t.shadowRoot.querySelector(e) instanceof HTMLElement)
                );
              })
              .map(function (t) {
                return (
                  t.querySelector(e) ||
                  (t.shadowRoot && t.shadowRoot.querySelector(e))
                );
              });
        },
        w = function (t) {
          return (t.composedPath && t.composedPath()[0]) || t.target;
        },
        T = function (t, e, n) {
          return {
            element: t,
            posX: n.pageX - e.left,
            posY: n.pageY - e.top,
          };
        },
        E = function (t, e, n) {
          if (!(t instanceof Event))
            throw new Error(
              "setDragImage requires a DragEvent as the first argument."
            );
          if (!(e instanceof HTMLElement))
            throw new Error(
              "setDragImage requires the dragged element as the second argument."
            );
          if ((n || (n = T), t.dataTransfer && t.dataTransfer.setDragImage)) {
            var r = n(e, c(e), t);
            if (
              !(r.element instanceof HTMLElement) ||
              "number" != typeof r.posX ||
              "number" != typeof r.posY
            )
              throw new Error(
                "The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer]."
              );
            (t.dataTransfer.effectAllowed = "copyMove"),
              t.dataTransfer.setData("text/plain", w(t).id),
              t.dataTransfer.setDragImage(r.element, r.posX, r.posY);
          }
        },
        S = function (t, e) {
          if (!0 === t.isSortable) {
            var n = o(t).getConfig("acceptFrom");
            if (null !== n && !1 !== n && "string" != typeof n)
              throw new Error(
                'HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.'
              );
            if (null !== n)
              return (
                !1 !== n &&
                n.split(",").filter(function (t) {
                  return t.length > 0 && e.matches(t);
                }).length > 0
              );
            if (t === e) return !0;
            if (
              void 0 !== o(t).getConfig("connectWith") &&
              null !== o(t).getConfig("connectWith")
            )
              return (
                o(t).getConfig("connectWith") ===
                o(e).getConfig("connectWith")
              );
          }
          return !1;
        },
        C = {
          items: null,
          connectWith: null,
          disableIEFix: null,
          acceptFrom: null,
          copy: !1,
          placeholder: null,
          placeholderClass: "sortable-placeholder",
          draggingClass: "sortable-dragging",
          hoverClass: !1,
          dropTargetContainerClass: !1,
          debounce: 0,
          throttleTime: 100,
          maxItems: 0,
          itemSerializer: void 0,
          containerSerializer: void 0,
          customDragImage: null,
          orientation: "vertical",
        };
      var A,
        k,
        O,
        D,
        M,
        L,
        P,
        N,
        q,
        R = function (t, e) {
          if ("string" == typeof o(t).getConfig("hoverClass")) {
            var r = o(t).getConfig("hoverClass").split(" ");
            !0 === e
              ? (a(
                t,
                "mousemove",
                (function (t, e) {
                  var n = this;
                  if ((void 0 === e && (e = 250), "function" != typeof t))
                    throw new Error(
                      "You must provide a function as the first argument for throttle."
                    );
                  if ("number" != typeof e)
                    throw new Error(
                      "You must provide a number as the second argument for throttle."
                    );
                  var r = null;
                  return function () {
                    for (var i = [], o = 0; o < arguments.length; o++)
                      i[o] = arguments[o];
                    var a = Date.now();
                    (null === r || a - r >= e) && ((r = a), t.apply(n, i));
                  };
                })(function (e) {
                  0 === e.buttons &&
                    n(t.children, o(t).getConfig("items")).forEach(
                      function (t) {
                        var n, i;
                        t === e.target || t.contains(e.target)
                          ? (n = t.classList).add.apply(n, r)
                          : (i = t.classList).remove.apply(i, r);
                      }
                    );
                }, o(t).getConfig("throttleTime"))
              ),
                a(t, "mouseleave", function () {
                  n(t.children, o(t).getConfig("items")).forEach(function (
                    t
                  ) {
                    var e;
                    (e = t.classList).remove.apply(e, r);
                  });
                }))
              : (s(t, "mousemove"), s(t, "mouseleave"));
          }
        },
        j = function (t) {
          s(t, "dragstart"),
            s(t, "dragend"),
            s(t, "dragover"),
            s(t, "dragenter"),
            s(t, "drop"),
            s(t, "mouseenter"),
            s(t, "mouseleave");
        },
        I = function (t, e) {
          t && s(t, "dragleave"), e && e !== t && s(e, "dragleave");
        },
        H = function (t, e) {
          var n = t;
          return (
            !0 === o(e).getConfig("copy") &&
            (u((n = t.cloneNode(!0)), "aria-copied", "true"),
              t.parentElement.appendChild(n),
              (n.style.display = "none"),
              (n.oldDisplay = t.style.display)),
            n
          );
        },
        B = function (t) {
          var e;
          (e = t).h5s && delete e.h5s.data, l(t, "aria-dropeffect");
        },
        F = function (t) {
          l(t, "aria-grabbed"),
            l(t, "aria-copied"),
            l(t, "draggable"),
            l(t, "role");
        };
      function z(t, e) {
        if (e.composedPath)
          return e.composedPath().find(function (t) {
            return t.isSortable;
          });
        for (; !0 !== t.isSortable;) t = t.parentElement;
        return t;
      }
      function W(t, r) {
        var i = e(t, "opts"),
          o = n(t.children, i.items).filter(function (t) {
            return (
              t.contains(r) || (t.shadowRoot && t.shadowRoot.contains(r))
            );
          });
        return o.length > 0 ? o[0] : r;
      }
      var Y = function (t) {
        var r = e(t, "opts"),
          i = n(t.children, r.items),
          o = x(i, r.handle);
        (u(t, "aria-dropeffect", "move"),
          e(t, "_disabled", "false"),
          u(o, "draggable", "true"),
          R(t, !0),
          !1 === r.disableIEFix) &&
          "function" ==
          typeof (document || window.document).createElement("span")
            .dragDrop &&
          a(o, "mousedown", function () {
            if (-1 !== i.indexOf(this)) this.dragDrop();
            else {
              for (var t = this.parentElement; -1 === i.indexOf(t);)
                t = t.parentElement;
              t.dragDrop();
            }
          });
      },
        X = function (t) {
          var r = e(t, "opts"),
            i = n(t.children, r.items),
            o = x(i, r.handle);
          e(t, "_disabled", "false"),
            j(i),
            I(D, N),
            s(o, "mousedown"),
            s(t, "dragover"),
            s(t, "dragenter"),
            s(t, "drop");
        };
      function $(t, i) {
        var s = String(i);
        return (
          (i = i || {}),
          "string" == typeof t && (t = document.querySelectorAll(t)),
          t instanceof HTMLElement && (t = [t]),
          (t = Array.prototype.slice.call(t)),
          /serialize/.test(s)
            ? t.map(function (t) {
              var n = e(t, "opts");
              return v(t, n.itemSerializer, n.containerSerializer);
            })
            : (t.forEach(function (t) {
              if (/enable|disable|destroy/.test(s)) return $[s](t);
              ["connectWith", "disableIEFix"].forEach(function (t) {
                Object.prototype.hasOwnProperty.call(i, t) &&
                  null !== i[t] &&
                  console.warn(
                    'HTML5Sortable: You are using the deprecated configuration "' +
                    t +
                    '". This will be removed in an upcoming version, make sure to migrate to the new options when updating.'
                  );
              }),
                (i = Object.assign({}, C, o(t).config, i)),
                (o(t).config = i),
                e(t, "opts", i),
                (t.isSortable = !0),
                X(t);
              var l,
                h = n(t.children, i.items);
              if (null !== i.placeholder && void 0 !== i.placeholder) {
                var v = document.createElement(t.tagName);
                i.placeholder instanceof HTMLElement
                  ? v.appendChild(i.placeholder)
                  : (v.innerHTML = i.placeholder),
                  (l = v.children[0]);
              }
              (o(t).placeholder = y(t, l, i.placeholderClass)),
                e(t, "items", i.items),
                i.acceptFrom
                  ? e(t, "acceptFrom", i.acceptFrom)
                  : i.connectWith && e(t, "connectWith", i.connectWith),
                Y(t),
                u(h, "role", "option"),
                u(h, "aria-grabbed", "false"),
                a(t, "dragstart", function (t) {
                  var e = w(t);
                  if (
                    !0 !== e.isSortable &&
                    (t.stopImmediatePropagation(),
                      (!i.handle || e.matches(i.handle)) &&
                      "false" !== e.getAttribute("draggable"))
                  ) {
                    var r = z(e, t),
                      o = W(r, e);
                    (P = n(r.children, i.items)),
                      (M = P.indexOf(o)),
                      (L = d(o, r.children)),
                      (D = r),
                      E(t, o, i.customDragImage),
                      (k = b(o)),
                      (O = _(o)),
                      o.classList.add(i.draggingClass),
                      u((A = H(o, r)), "aria-grabbed", "true"),
                      r.dispatchEvent(
                        new CustomEvent("sortstart", {
                          detail: {
                            origin: {
                              elementIndex: L,
                              index: M,
                              container: D,
                            },
                            item: A,
                            originalTarget: e,
                          },
                        })
                      );
                  }
                }),
                a(t, "dragenter", function (r) {
                  var s = w(r),
                    u = z(s, r);
                  u &&
                    u !== N &&
                    ((q = n(u.children, e(u, "items")).filter(function (e) {
                      return e !== o(t).placeholder;
                    })),
                      i.dropTargetContainerClass &&
                      u.classList.add(i.dropTargetContainerClass),
                      u.dispatchEvent(
                        new CustomEvent("sortenter", {
                          detail: {
                            origin: {
                              elementIndex: L,
                              index: M,
                              container: D,
                            },
                            destination: {
                              container: u,
                              itemsBeforeUpdate: q,
                            },
                            item: A,
                            originalTarget: s,
                          },
                        })
                      ),
                      a(u, "dragleave", function (t) {
                        var e = t.relatedTarget || t.fromElement;
                        t.currentTarget.contains(e) ||
                          (i.dropTargetContainerClass &&
                            u.classList.remove(i.dropTargetContainerClass),
                            u.dispatchEvent(
                              new CustomEvent("sortleave", {
                                detail: {
                                  origin: {
                                    elementIndex: L,
                                    index: M,
                                    container: u,
                                  },
                                  item: A,
                                  originalTarget: s,
                                },
                              })
                            ));
                      })),
                    (N = u);
                }),
                a(t, "dragend", function (n) {
                  if (A) {
                    A.classList.remove(i.draggingClass),
                      u(A, "aria-grabbed", "false"),
                      "true" === A.getAttribute("aria-copied") &&
                      "true" !== e(A, "dropped") &&
                      A.remove(),
                      void 0 !== A.oldDisplay &&
                      ((A.style.display = A.oldDisplay),
                        delete A.oldDisplay);
                    var o = Array.from(r.values())
                      .map(function (t) {
                        return t.placeholder;
                      })
                      .filter(function (t) {
                        return t instanceof HTMLElement;
                      })
                      .filter(p)[0];
                    o && o.remove(),
                      t.dispatchEvent(
                        new CustomEvent("sortstop", {
                          detail: {
                            origin: {
                              elementIndex: L,
                              index: M,
                              container: D,
                            },
                            item: A,
                          },
                        })
                      ),
                      (N = null),
                      (A = null),
                      (k = null),
                      (O = null);
                  }
                }),
                a(t, "drop", function (a) {
                  if (S(t, A.parentElement)) {
                    a.preventDefault(),
                      a.stopPropagation(),
                      e(A, "dropped", "true");
                    var s = Array.from(r.values())
                      .map(function (t) {
                        return t.placeholder;
                      })
                      .filter(function (t) {
                        return t instanceof HTMLElement;
                      })
                      .filter(p)[0];
                    if (s) {
                      s.replaceWith(A),
                        void 0 !== A.oldDisplay &&
                        ((A.style.display = A.oldDisplay),
                          delete A.oldDisplay),
                        t.dispatchEvent(
                          new CustomEvent("sortstop", {
                            detail: {
                              origin: {
                                elementIndex: L,
                                index: M,
                                container: D,
                              },
                              item: A,
                            },
                          })
                        );
                      var u = o(t).placeholder,
                        l = n(D.children, i.items).filter(function (t) {
                          return t !== u;
                        }),
                        c =
                          !0 === this.isSortable
                            ? this
                            : this.parentElement,
                        f = n(c.children, e(c, "items")).filter(function (
                          t
                        ) {
                          return t !== u;
                        }),
                        h = d(
                          A,
                          Array.from(A.parentElement.children).filter(
                            function (t) {
                              return t !== u;
                            }
                          )
                        ),
                        g = d(A, f);
                      i.dropTargetContainerClass &&
                        c.classList.remove(i.dropTargetContainerClass),
                        (L === h && D === c) ||
                        t.dispatchEvent(
                          new CustomEvent("sortupdate", {
                            detail: {
                              origin: {
                                elementIndex: L,
                                index: M,
                                container: D,
                                itemsBeforeUpdate: P,
                                items: l,
                              },
                              destination: {
                                index: g,
                                elementIndex: h,
                                container: c,
                                itemsBeforeUpdate: q,
                                items: f,
                              },
                              item: A,
                            },
                          })
                        );
                    } else e(A, "dropped", "false");
                  }
                });
              var x = f(function (t, e, a, s) {
                if (A)
                  if (
                    (i.forcePlaceholderSize &&
                      ((o(t).placeholder.style.height = k + "px"),
                        (o(t).placeholder.style.width = O + "px")),
                      Array.from(t.children).indexOf(e) > -1)
                  ) {
                    var u = b(e),
                      l = _(e),
                      f = d(o(t).placeholder, e.parentElement.children),
                      p = d(e, e.parentElement.children);
                    if (u > k || l > O) {
                      var h = u - k,
                        v = l - O,
                        y = c(e).top,
                        x = c(e).left;
                      if (
                        f < p &&
                        (("vertical" === i.orientation && s < y) ||
                          ("horizontal" === i.orientation && a < x))
                      )
                        return;
                      if (
                        f > p &&
                        (("vertical" === i.orientation &&
                          s > y + u - h) ||
                          ("horizontal" === i.orientation &&
                            a > x + l - v))
                      )
                        return;
                    }
                    void 0 === A.oldDisplay &&
                      (A.oldDisplay = A.style.display),
                      "none" !== A.style.display &&
                      (A.style.display = "none");
                    var w = !1;
                    try {
                      var T = c(e).top + e.offsetHeight / 2,
                        E = c(e).left + e.offsetWidth / 2;
                      w =
                        ("vertical" === i.orientation && s >= T) ||
                        ("horizontal" === i.orientation && a >= E);
                    } catch (t) {
                      w = f < p;
                    }
                    w ? m(e, o(t).placeholder) : g(e, o(t).placeholder),
                      Array.from(r.values())
                        .filter(function (t) {
                          return void 0 !== t.placeholder;
                        })
                        .forEach(function (e) {
                          e.placeholder !== o(t).placeholder &&
                            e.placeholder.remove();
                        });
                  } else {
                    var S = Array.from(r.values())
                      .filter(function (t) {
                        return void 0 !== t.placeholder;
                      })
                      .map(function (t) {
                        return t.placeholder;
                      });
                    -1 !== S.indexOf(e) ||
                      t !== e ||
                      n(e.children, i.items).length ||
                      (S.forEach(function (t) {
                        return t.remove();
                      }),
                        e.appendChild(o(t).placeholder));
                  }
              }, i.debounce),
                T = function (t) {
                  var r = t.target,
                    i = !0 === r.isSortable ? r : z(r, t);
                  if (
                    ((r = W(i, r)),
                      A &&
                      S(i, A.parentElement) &&
                      "true" !== e(i, "_disabled"))
                  ) {
                    var a = e(i, "opts");
                    (parseInt(a.maxItems) &&
                      n(i.children, e(i, "items")).length >
                      parseInt(a.maxItems) &&
                      A.parentElement !== i) ||
                      (t.preventDefault(),
                        t.stopPropagation(),
                        (t.dataTransfer.dropEffect =
                          !0 === o(i).getConfig("copy") ? "copy" : "move"),
                        x(i, r, t.pageX, t.pageY));
                  }
                };
              a(h.concat(t), "dragover", T), a(h.concat(t), "dragenter", T);
            }),
              t)
        );
      }
      ($.destroy = function (t) {
        !(function (t) {
          var r = e(t, "opts") || {},
            i = n(t.children, r.items),
            o = x(i, r.handle);
          R(t, !1),
            s(t, "dragover"),
            s(t, "dragenter"),
            s(t, "dragstart"),
            s(t, "dragend"),
            s(t, "drop"),
            B(t),
            s(o, "mousedown"),
            j(i),
            F(i),
            I(D, N),
            (t.isSortable = !1);
        })(t);
      }),
        ($.enable = function (t) {
          Y(t);
        }),
        ($.disable = function (t) {
          !(function (t) {
            var r = e(t, "opts"),
              i = n(t.children, r.items),
              o = x(i, r.handle);
            u(t, "aria-dropeffect", "none"),
              e(t, "_disabled", "true"),
              u(o, "draggable", "false"),
              s(o, "mousedown"),
              R(t, !1);
          })(t);
        }),
        ($.__testing = {
          data: e,
          removeItemEvents: j,
          removeItemData: F,
          removeSortableData: B,
          removeContainerEvents: I,
        }),
        (t.exports = $);
    },
    755: function (t, e) {
      var n;
      !(function (e, n) {
        "use strict";
        "object" == typeof t.exports
          ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
              if (!t.document)
                throw new Error(
                  "jQuery requires a window with a document"
                );
              return n(t);
            })
          : n(e);
      })("undefined" != typeof window ? window : this, function (r, i) {
        "use strict";
        var o = [],
          a = Object.getPrototypeOf,
          s = o.slice,
          u = o.flat
            ? function (t) {
              return o.flat.call(t);
            }
            : function (t) {
              return o.concat.apply([], t);
            },
          l = o.push,
          c = o.indexOf,
          f = {},
          d = f.toString,
          p = f.hasOwnProperty,
          h = p.toString,
          g = h.call(Object),
          m = {},
          v = function (t) {
            return (
              "function" == typeof t &&
              "number" != typeof t.nodeType &&
              "function" != typeof t.item
            );
          },
          y = function (t) {
            return null != t && t === t.window;
          },
          b = r.document,
          _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function x(t, e, n) {
          var r,
            i,
            o = (n = n || b).createElement("script");
          if (((o.text = t), e))
            for (r in _)
              (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function w(t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
              ? f[d.call(t)] || "object"
              : typeof t;
        }
        var T = "3.6.3",
          E = function (t, e) {
            return new E.fn.init(t, e);
          };
        function S(t) {
          var e = !!t && "length" in t && t.length,
            n = w(t);
          return (
            !v(t) &&
            !y(t) &&
            ("array" === n ||
              0 === e ||
              ("number" == typeof e && e > 0 && e - 1 in t))
          );
        }
        (E.fn = E.prototype =
        {
          jquery: T,
          constructor: E,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (t) {
            return null == t
              ? s.call(this)
              : t < 0
                ? this[t + this.length]
                : this[t];
          },
          pushStack: function (t) {
            var e = E.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return E.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              E.map(this, function (e, n) {
                return t.call(e, n, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              E.grep(this, function (t, e) {
                return (e + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              E.grep(this, function (t, e) {
                return e % 2;
              })
            );
          },
          eq: function (t) {
            var e = this.length,
              n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: l,
          sort: o.sort,
          splice: o.splice,
        }),
          (E.extend = E.fn.extend =
            function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" == typeof a &&
                ((l = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || v(a) || (a = {}),
                s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (t = arguments[s]))
                  for (e in t)
                    (r = t[e]),
                      "__proto__" !== e &&
                      a !== r &&
                      (l &&
                        r &&
                        (E.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[e]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || E.isPlainObject(n)
                                ? n
                                : {}),
                          (i = !1),
                          (a[e] = E.extend(l, o, r)))
                        : void 0 !== r && (a[e] = r));
              return a;
            }),
          E.extend({
            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () { },
            isPlainObject: function (t) {
              var e, n;
              return (
                !(!t || "[object Object]" !== d.call(t)) &&
                (!(e = a(t)) ||
                  ("function" ==
                    typeof (n = p.call(e, "constructor") && e.constructor) &&
                    h.call(n) === g))
              );
            },
            isEmptyObject: function (t) {
              var e;
              for (e in t) return !1;
              return !0;
            },
            globalEval: function (t, e, n) {
              x(t, { nonce: e && e.nonce }, n);
            },
            each: function (t, e) {
              var n,
                r = 0;
              if (S(t))
                for (
                  n = t.length;
                  r < n && !1 !== e.call(t[r], r, t[r]);
                  r++
                );
              else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
              return t;
            },
            makeArray: function (t, e) {
              var n = e || [];
              return (
                null != t &&
                (S(Object(t))
                  ? E.merge(n, "string" == typeof t ? [t] : t)
                  : l.call(n, t)),
                n
              );
            },
            inArray: function (t, e, n) {
              return null == e ? -1 : c.call(e, t, n);
            },
            merge: function (t, e) {
              for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                t[i++] = e[r];
              return (t.length = i), t;
            },
            grep: function (t, e, n) {
              for (var r = [], i = 0, o = t.length, a = !n; i < o; i++)
                !e(t[i], i) !== a && r.push(t[i]);
              return r;
            },
            map: function (t, e, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (S(t))
                for (r = t.length; o < r; o++)
                  null != (i = e(t[o], o, n)) && a.push(i);
              else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
              return u(a);
            },
            guid: 1,
            support: m,
          }),
          "function" == typeof Symbol &&
          (E.fn[Symbol.iterator] = o[Symbol.iterator]),
          E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (t, e) {
              f["[object " + e + "]"] = e.toLowerCase();
            }
          );
        var C = (function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m,
            v,
            y,
            b,
            _ = "sizzle" + 1 * new Date(),
            x = t.document,
            w = 0,
            T = 0,
            E = ut(),
            S = ut(),
            C = ut(),
            A = ut(),
            k = function (t, e) {
              return t === e && (f = !0), 0;
            },
            O = {}.hasOwnProperty,
            D = [],
            M = D.pop,
            L = D.push,
            P = D.push,
            N = D.slice,
            q = function (t, e) {
              for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            I =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              j +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H =
              "\\[" +
              j +
              "*(" +
              I +
              ")(?:" +
              j +
              "*([*^$|!~]?=)" +
              j +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              j +
              "*\\]",
            B =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              H +
              ")*)|.*)\\)|)",
            F = new RegExp(j + "+", "g"),
            z = new RegExp(
              "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
              "g"
            ),
            W = new RegExp("^" + j + "*," + j + "*"),
            Y = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            X = new RegExp(j + "|>"),
            $ = new RegExp(B),
            V = new RegExp("^" + I + "$"),
            U = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + H),
              PSEUDO: new RegExp("^" + B),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                j +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                j +
                "*(?:([+-]|)" +
                j +
                "*(\\d+)|))" +
                j +
                "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                j +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                j +
                "*((?:-\\d)?\\d*)" +
                j +
                "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            nt = function (t, e) {
              var n = "0x" + t.slice(1) - 65536;
              return (
                e ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode(
                    (n >> 10) | 55296,
                    (1023 & n) | 56320
                  ))
              );
            },
            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
                : "\\" + t;
            },
            ot = function () {
              d();
            },
            at = _t(
              function (t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            P.apply((D = N.call(x.childNodes)), x.childNodes),
              D[x.childNodes.length].nodeType;
          } catch (t) {
            P = {
              apply: D.length
                ? function (t, e) {
                  L.apply(t, N.call(e));
                }
                : function (t, e) {
                  for (var n = t.length, r = 0; (t[n++] = e[r++]););
                  t.length = n - 1;
                },
            };
          }
          function st(t, e, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              v,
              y = e && e.ownerDocument,
              x = e ? e.nodeType : 9;
            if (
              ((r = r || []),
                "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
            )
              return r;
            if (!i && (d(e), (e = e || p), g)) {
              if (11 !== x && (f = J.exec(t)))
                if ((o = f[1])) {
                  if (9 === x) {
                    if (!(l = e.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    b(e, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return P.apply(r, e.getElementsByTagName(t)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return P.apply(r, e.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !A[t + " "] &&
                (!m || !m.test(t)) &&
                (1 !== x || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((v = t), (y = e), 1 === x && (X.test(t) || Y.test(t)))) {
                  for (
                    ((y = (tt.test(t) && vt(e.parentNode)) || e) === e &&
                      n.scope) ||
                    ((c = e.getAttribute("id"))
                      ? (c = c.replace(rt, it))
                      : e.setAttribute("id", (c = _))),
                    s = (h = a(t)).length;
                    s--;

                  )
                    h[s] = (c ? "#" + c : ":scope") + " " + bt(h[s]);
                  v = h.join(",");
                }
                try {
                  if (
                    n.cssSupportsSelector &&
                    !CSS.supports("selector(:is(" + v + "))")
                  )
                    throw new Error();
                  return P.apply(r, y.querySelectorAll(v)), r;
                } catch (e) {
                  A(t, !0);
                } finally {
                  c === _ && e.removeAttribute("id");
                }
              }
            }
            return u(t.replace(z, "$1"), e, r, i);
          }
          function ut() {
            var t = [];
            return function e(n, i) {
              return (
                t.push(n + " ") > r.cacheLength && delete e[t.shift()],
                (e[n + " "] = i)
              );
            };
          }
          function lt(t) {
            return (t[_] = !0), t;
          }
          function ct(t) {
            var e = p.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ft(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)
              r.attrHandle[n[i]] = e;
          }
          function dt(t, e) {
            var n = e && t,
              r =
                n &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling);) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function pt(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ht(t) {
            return function (e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t;
            };
          }
          function gt(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t ||
                    (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function mt(t) {
            return lt(function (e) {
              return (
                (e = +e),
                lt(function (n, r) {
                  for (var i, o = t([], n.length, e), a = o.length; a--;)
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((n = st.support = {}),
            (o = st.isXML =
              function (t) {
                var e = t && t.namespaceURI,
                  n = t && (t.ownerDocument || t).documentElement;
                return !G.test(e || (n && n.nodeName) || "HTML");
              }),
            (d = st.setDocument =
              function (t) {
                var e,
                  i,
                  a = t ? t.ownerDocument || t : x;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (g = !o(p)),
                    x != p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", ot, !1)
                      : i.attachEvent && i.attachEvent("onunload", ot)),
                    (n.scope = ct(function (t) {
                      return (
                        h.appendChild(t).appendChild(p.createElement("div")),
                        void 0 !== t.querySelectorAll &&
                        !t.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.cssSupportsSelector = ct(function () {
                      return (
                        CSS.supports("selector(*)") &&
                        p.querySelectorAll(":is(:jqfake)") &&
                        !CSS.supports("selector(:is(*,:jqfake))")
                      );
                    })),
                    (n.attributes = ct(function (t) {
                      return (t.className = "i"), !t.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ct(function (t) {
                      return (
                        t.appendChild(p.createComment("")),
                        !t.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Z.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ct(function (t) {
                      return (
                        (h.appendChild(t).id = _),
                        !p.getElementsByName || !p.getElementsByName(_).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                        (r.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                          var n =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        };
                      }),
                        (r.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && g) {
                            var n,
                              r,
                              i,
                              o = e.getElementById(t);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                              for (
                                i = e.getElementsByName(t), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === t
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : n.qsa
                            ? e.querySelectorAll(t)
                            : void 0;
                      }
                      : function (t, e) {
                        var n,
                          r = [],
                          i = 0,
                          o = e.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (n = o[i++]);)
                            1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (t, e) {
                        if (void 0 !== e.getElementsByClassName && g)
                          return e.getElementsByClassName(t);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = Z.test(p.querySelectorAll)) &&
                    (ct(function (t) {
                      var e;
                      (h.appendChild(t).innerHTML =
                        "<a id='" +
                        _ +
                        "'></a><select id='" +
                        _ +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + j + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                        m.push("\\[" + j + "*(?:value|" + R + ")"),
                        t.querySelectorAll("[id~=" + _ + "-]").length ||
                        m.push("~="),
                        (e = p.createElement("input")).setAttribute(
                          "name",
                          ""
                        ),
                        t.appendChild(e),
                        t.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" +
                          j +
                          "*name" +
                          j +
                          "*=" +
                          j +
                          "*(?:''|\"\")"
                        ),
                        t.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                        t.querySelectorAll("a#" + _ + "+*").length ||
                        m.push(".#.+[+~]"),
                        t.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]");
                    }),
                      ct(function (t) {
                        t.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"),
                          t.appendChild(e).setAttribute("name", "D"),
                          t.querySelectorAll("[name=d]").length &&
                          m.push("name" + j + "*[*^$|!~]?="),
                          2 !== t.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                          (h.appendChild(t).disabled = !0),
                          2 !== t.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                          t.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = Z.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                    ct(function (t) {
                      (n.disconnectedMatch = y.call(t, "*")),
                        y.call(t, "[s!='']:x"),
                        v.push("!=", B);
                    }),
                    n.cssSupportsSelector || m.push(":has"),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (e = Z.test(h.compareDocumentPosition)),
                    (b =
                      e || Z.test(h.contains)
                        ? function (t, e) {
                          var n =
                            (9 === t.nodeType && t.documentElement) || t,
                            r = e && e.parentNode;
                          return (
                            t === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(r))
                            )
                          );
                        }
                        : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode);)
                              if (e === t) return !0;
                          return !1;
                        }),
                    (k = e
                      ? function (t, e) {
                        if (t === e) return (f = !0), 0;
                        var r =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (t.ownerDocument || t) == (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1) ||
                            (!n.sortDetached &&
                              e.compareDocumentPosition(t) === r)
                            ? t == p || (t.ownerDocument == x && b(x, t))
                              ? -1
                              : e == p || (e.ownerDocument == x && b(x, e))
                                ? 1
                                : c
                                  ? q(c, t) - q(c, e)
                                  : 0
                            : 4 & r
                              ? -1
                              : 1)
                        );
                      }
                      : function (t, e) {
                        if (t === e) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = t.parentNode,
                          o = e.parentNode,
                          a = [t],
                          s = [e];
                        if (!i || !o)
                          return t == p
                            ? -1
                            : e == p
                              ? 1
                              : i
                                ? -1
                                : o
                                  ? 1
                                  : c
                                    ? q(c, t) - q(c, e)
                                    : 0;
                        if (i === o) return dt(t, e);
                        for (n = t; (n = n.parentNode);) a.unshift(n);
                        for (n = e; (n = n.parentNode);) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r
                          ? dt(a[r], s[r])
                          : a[r] == x
                            ? -1
                            : s[r] == x
                              ? 1
                              : 0;
                      }),
                    p)
                  : p;
              }),
            (st.matches = function (t, e) {
              return st(t, null, null, e);
            }),
            (st.matchesSelector = function (t, e) {
              if (
                (d(t),
                  n.matchesSelector &&
                  g &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (!m || !m.test(e)))
              )
                try {
                  var r = y.call(t, e);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return r;
                } catch (t) {
                  A(e, !0);
                }
              return st(e, p, null, [t]).length > 0;
            }),
            (st.contains = function (t, e) {
              return (t.ownerDocument || t) != p && d(t), b(t, e);
            }),
            (st.attr = function (t, e) {
              (t.ownerDocument || t) != p && d(t);
              var i = r.attrHandle[e.toLowerCase()],
                o =
                  i && O.call(r.attrHandle, e.toLowerCase())
                    ? i(t, e, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                  ? t.getAttribute(e)
                  : (o = t.getAttributeNode(e)) && o.specified
                    ? o.value
                    : null;
            }),
            (st.escape = function (t) {
              return (t + "").replace(rt, it);
            }),
            (st.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (st.uniqueSort = function (t) {
              var e,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                  (c = !n.sortStable && t.slice(0)),
                  t.sort(k),
                  f)
              ) {
                for (; (e = t[o++]);) e === t[o] && (i = r.push(o));
                for (; i--;) t.splice(r[i], 1);
              }
              return (c = null), t;
            }),
            (i = st.getText =
              function (t) {
                var e,
                  n = "",
                  r = 0,
                  o = t.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                  } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[r++]);) n += i(e);
                return n;
              }),
            (r = st.selectors =
            {
              cacheLength: 50,
              createPseudo: lt,
              match: U,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(et, nt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || st.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && st.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2];
                  return U.CHILD.test(t[0])
                    ? null
                    : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                      $.test(n) &&
                      (e = a(n, !0)) &&
                      (e = n.indexOf(")", n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(et, nt).toLowerCase();
                  return "*" === t
                    ? function () {
                      return !0;
                    }
                    : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function (t) {
                  var e = E[t + " "];
                  return (
                    e ||
                    ((e = new RegExp(
                      "(^|" + j + ")" + t + "(" + j + "|$)"
                    )) &&
                      E(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                        );
                      }))
                  );
                },
                ATTR: function (t, e, n) {
                  return function (r) {
                    var i = st.attr(r, t);
                    return null == i
                      ? "!=" === e
                      : !e ||
                      ((i += ""),
                        "=" === e
                          ? i === n
                          : "!=" === e
                            ? i !== n
                            : "^=" === e
                              ? n && 0 === i.indexOf(n)
                              : "*=" === e
                                ? n && i.indexOf(n) > -1
                                : "$=" === e
                                  ? n && i.slice(-n.length) === n
                                  : "~=" === e
                                    ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                                    : "|=" === e &&
                                    (i === n ||
                                      i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (t, e, n, r, i) {
                  var o = "nth" !== t.slice(0, 3),
                    a = "last" !== t.slice(-4),
                    s = "of-type" === e;
                  return 1 === r && 0 === i
                    ? function (t) {
                      return !!t.parentNode;
                    }
                    : function (e, n, u) {
                      var l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        g = o !== a ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = s && e.nodeName.toLowerCase(),
                        y = !u && !s,
                        b = !1;
                      if (m) {
                        if (o) {
                          for (; g;) {
                            for (d = e; (d = d[g]);)
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = g = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (
                          ((h = [a ? m.firstChild : m.lastChild]), a && y)
                        ) {
                          for (
                            b =
                            (p =
                              (l =
                                (c =
                                  (f = (d = m)[_] || (d[_] = {}))[
                                  d.uniqueID
                                  ] || (f[d.uniqueID] = {}))[t] ||
                                [])[0] === w && l[1]) && l[2],
                            d = p && m.childNodes[p];
                            (d =
                              (++p && d && d[g]) || (b = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++b && d === e) {
                              c[t] = [w, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (l =
                                (c =
                                  (f = (d = e)[_] || (d[_] = {}))[
                                  d.uniqueID
                                  ] || (f[d.uniqueID] = {}))[t] ||
                                [])[0] === w && l[1]),
                            !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[g]) ||
                              (b = p = 0) ||
                              h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[t] = [w, b]),
                                d !== e));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
                },
                PSEUDO: function (t, e) {
                  var n,
                    i =
                      r.pseudos[t] ||
                      r.setFilters[t.toLowerCase()] ||
                      st.error("unsupported pseudo: " + t);
                  return i[_]
                    ? i(e)
                    : i.length > 1
                      ? ((n = [t, t, "", e]),
                        r.setFilters.hasOwnProperty(t.toLowerCase())
                          ? lt(function (t, n) {
                            for (var r, o = i(t, e), a = o.length; a--;)
                              t[(r = q(t, o[a]))] = !(n[r] = o[a]);
                          })
                          : function (t) {
                            return i(t, 0, n);
                          })
                      : i;
                },
              },
              pseudos: {
                not: lt(function (t) {
                  var e = [],
                    n = [],
                    r = s(t.replace(z, "$1"));
                  return r[_]
                    ? lt(function (t, e, n, i) {
                      for (
                        var o, a = r(t, null, i, []), s = t.length;
                        s--;

                      )
                        (o = a[s]) && (t[s] = !(e[s] = o));
                    })
                    : function (t, i, o) {
                      return (
                        (e[0] = t),
                        r(e, null, o, n),
                        (e[0] = null),
                        !n.pop()
                      );
                    };
                }),
                has: lt(function (t) {
                  return function (e) {
                    return st(t, e).length > 0;
                  };
                }),
                contains: lt(function (t) {
                  return (
                    (t = t.replace(et, nt)),
                    function (e) {
                      return (e.textContent || i(e)).indexOf(t) > -1;
                    }
                  );
                }),
                lang: lt(function (t) {
                  return (
                    V.test(t || "") || st.error("unsupported lang: " + t),
                    (t = t.replace(et, nt).toLowerCase()),
                    function (e) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === t ||
                            0 === n.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id;
                },
                root: function (t) {
                  return t === h;
                },
                focus: function (t) {
                  return (
                    t === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: gt(!1),
                disabled: gt(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !r.pseudos.empty(t);
                },
                header: function (t) {
                  return Q.test(t.nodeName);
                },
                input: function (t) {
                  return K.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: mt(function () {
                  return [0];
                }),
                last: mt(function (t, e) {
                  return [e - 1];
                }),
                eq: mt(function (t, e, n) {
                  return [n < 0 ? n + e : n];
                }),
                even: mt(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t;
                }),
                odd: mt(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t;
                }),
                lt: mt(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0;)
                    t.push(r);
                  return t;
                }),
                gt: mt(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                  return t;
                }),
              },
            }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[e] = pt(e);
          for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e);
          function yt() { }
          function bt(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r;
          }
          function _t(t, e, n) {
            var r = e.dir,
              i = e.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = T++;
            return e.first
              ? function (e, n, i) {
                for (; (e = e[r]);)
                  if (1 === e.nodeType || a) return t(e, n, i);
                return !1;
              }
              : function (e, n, u) {
                var l,
                  c,
                  f,
                  d = [w, s];
                if (u) {
                  for (; (e = e[r]);)
                    if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
                } else
                  for (; (e = e[r]);)
                    if (1 === e.nodeType || a)
                      if (
                        ((c =
                          (f = e[_] || (e[_] = {}))[e.uniqueID] ||
                          (f[e.uniqueID] = {})),
                          i && i === e.nodeName.toLowerCase())
                      )
                        e = e[r] || e;
                      else {
                        if ((l = c[o]) && l[0] === w && l[1] === s)
                          return (d[2] = l[2]);
                        if (((c[o] = d), (d[2] = t(e, n, u)))) return !0;
                      }
                return !1;
              };
          }
          function xt(t) {
            return t.length > 1
              ? function (e, n, r) {
                for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                return !0;
              }
              : t[0];
          }
          function wt(t, e, n, r, i) {
            for (
              var o, a = [], s = 0, u = t.length, l = null != e;
              s < u;
              s++
            )
              (o = t[s]) &&
                ((n && !n(o, r, i)) || (a.push(o), l && e.push(s)));
            return a;
          }
          function Tt(t, e, n, r, i, o) {
            return (
              r && !r[_] && (r = Tt(r)),
              i && !i[_] && (i = Tt(i, o)),
              lt(function (o, a, s, u) {
                var l,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  g =
                    o ||
                    (function (t, e, n) {
                      for (var r = 0, i = e.length; r < i; r++)
                        st(t, e[r], n);
                      return n;
                    })(e || "*", s.nodeType ? [s] : s, []),
                  m = !t || (!o && e) ? g : wt(g, d, t, s, u),
                  v = n ? (i || (o ? t : h || r) ? [] : a) : m;
                if ((n && n(m, v, s, u), r))
                  for (l = wt(v, p), r(l, [], s, u), c = l.length; c--;)
                    (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (o) {
                  if (i || t) {
                    if (i) {
                      for (l = [], c = v.length; c--;)
                        (f = v[c]) && l.push((m[c] = f));
                      i(null, (v = []), l, u);
                    }
                    for (c = v.length; c--;)
                      (f = v[c]) &&
                        (l = i ? q(o, f) : d[c]) > -1 &&
                        (o[l] = !(a[l] = f));
                  }
                } else (v = wt(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : P.apply(a, v);
              })
            );
          }
          function Et(t) {
            for (
              var e,
              n,
              i,
              o = t.length,
              a = r.relative[t[0].type],
              s = a || r.relative[" "],
              u = a ? 1 : 0,
              c = _t(
                function (t) {
                  return t === e;
                },
                s,
                !0
              ),
              f = _t(
                function (t) {
                  return q(e, t) > -1;
                },
                s,
                !0
              ),
              d = [
                function (t, n, r) {
                  var i =
                    (!a && (r || n !== l)) ||
                    ((e = n).nodeType ? c(t, n, r) : f(t, n, r));
                  return (e = null), i;
                },
              ];
              u < o;
              u++
            )
              if ((n = r.relative[t[u].type])) d = [_t(xt(d), n)];
              else {
                if ((n = r.filter[t[u].type].apply(null, t[u].matches))[_]) {
                  for (i = ++u; i < o && !r.relative[t[i].type]; i++);
                  return Tt(
                    u > 1 && xt(d),
                    u > 1 &&
                    bt(
                      t
                        .slice(0, u - 1)
                        .concat({ value: " " === t[u - 2].type ? "*" : "" })
                    ).replace(z, "$1"),
                    n,
                    u < i && Et(t.slice(u, i)),
                    i < o && Et((t = t.slice(i))),
                    i < o && bt(t)
                  );
                }
                d.push(n);
              }
            return xt(d);
          }
          return (
            (yt.prototype = r.filters = r.pseudos),
            (r.setFilters = new yt()),
            (a = st.tokenize =
              function (t, e) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = S[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, u = [], l = r.preFilter; s;) {
                  for (a in ((n && !(i = W.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = Y.exec(s)) &&
                    ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(z, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                    !(i = U[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                  if (!n) break;
                }
                return e ? s.length : s ? st.error(t) : S(t, u).slice(0);
              }),
            (s = st.compile =
              function (t, e) {
                var n,
                  i = [],
                  o = [],
                  s = C[t + " "];
                if (!s) {
                  for (e || (e = a(t)), n = e.length; n--;)
                    (s = Et(e[n]))[_] ? i.push(s) : o.push(s);
                  (s = C(
                    t,
                    (function (t, e) {
                      var n = e.length > 0,
                        i = t.length > 0,
                        o = function (o, a, s, u, c) {
                          var f,
                            h,
                            m,
                            v = 0,
                            y = "0",
                            b = o && [],
                            _ = [],
                            x = l,
                            T = o || (i && r.find.TAG("*", c)),
                            E = (w += null == x ? 1 : Math.random() || 0.1),
                            S = T.length;
                          for (
                            c && (l = a == p || a || c);
                            y !== S && null != (f = T[y]);
                            y++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                a ||
                                f.ownerDocument == p ||
                                (d(f), (s = !g));
                                (m = t[h++]);

                              )
                                if (m(f, a || p, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (w = E);
                            }
                            n && ((f = !m && f) && v--, o && b.push(f));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (m = e[h++]);) m(b, _, a, s);
                            if (o) {
                              if (v > 0)
                                for (; y--;)
                                  b[y] || _[y] || (_[y] = M.call(u));
                              _ = wt(_);
                            }
                            P.apply(u, _),
                              c &&
                              !o &&
                              _.length > 0 &&
                              v + e.length > 1 &&
                              st.uniqueSort(u);
                          }
                          return c && ((w = E), (l = x)), b;
                        };
                      return n ? lt(o) : o;
                    })(o, i)
                  )),
                    (s.selector = t);
                }
                return s;
              }),
            (u = st.select =
              function (t, e, n, i) {
                var o,
                  u,
                  l,
                  c,
                  f,
                  d = "function" == typeof t && t,
                  p = !i && a((t = d.selector || t));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (u = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === e.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(e = (r.find.ID(l.matches[0].replace(et, nt), e) ||
                        [])[0])
                    )
                      return n;
                    d && (e = e.parentNode),
                      (t = t.slice(u.shift().value.length));
                  }
                  for (
                    o = U.needsContext.test(t) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(et, nt),
                        (tt.test(u[0].type) && vt(e.parentNode)) || e
                      ))
                    ) {
                      if ((u.splice(o, 1), !(t = i.length && bt(u))))
                        return P.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (d || s(t, p))(
                    i,
                    e,
                    !g,
                    n,
                    !e || (tt.test(t) && vt(e.parentNode)) || e
                  ),
                  n
                );
              }),
            (n.sortStable = _.split("").sort(k).join("") === _),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ct(function (t) {
              return (
                1 & t.compareDocumentPosition(p.createElement("fieldset"))
              );
            })),
            ct(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
            ft("type|href|height|width", function (t, e, n) {
              if (!n)
                return t.getAttribute(
                  e,
                  "type" === e.toLowerCase() ? 1 : 2
                );
            }),
            (n.attributes &&
              ct(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
            ft("value", function (t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
            ct(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
            ft(R, function (t, e, n) {
              var r;
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (r = t.getAttributeNode(e)) && r.specified
                    ? r.value
                    : null;
            }),
            st
          );
        })(r);
        (E.find = C),
          (E.expr = C.selectors),
          (E.expr[":"] = E.expr.pseudos),
          (E.uniqueSort = E.unique = C.uniqueSort),
          (E.text = C.getText),
          (E.isXMLDoc = C.isXML),
          (E.contains = C.contains),
          (E.escapeSelector = C.escape);
        var A = function (t, e, n) {
          for (
            var r = [], i = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;

          )
            if (1 === t.nodeType) {
              if (i && E(t).is(n)) break;
              r.push(t);
            }
          return r;
        },
          k = function (t, e) {
            for (var n = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && n.push(t);
            return n;
          },
          O = E.expr.match.needsContext;
        function D(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var M =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(t, e, n) {
          return v(e)
            ? E.grep(t, function (t, r) {
              return !!e.call(t, r, t) !== n;
            })
            : e.nodeType
              ? E.grep(t, function (t) {
                return (t === e) !== n;
              })
              : "string" != typeof e
                ? E.grep(t, function (t) {
                  return c.call(e, t) > -1 !== n;
                })
                : E.filter(e, t, n);
        }
        (E.filter = function (t, e, n) {
          var r = e[0];
          return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === r.nodeType
              ? E.find.matchesSelector(r, t)
                ? [r]
                : []
              : E.find.matches(
                t,
                E.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
          );
        }),
          E.fn.extend({
            find: function (t) {
              var e,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof t)
                return this.pushStack(
                  E(t).filter(function () {
                    for (e = 0; e < r; e++)
                      if (E.contains(i[e], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), e = 0; e < r; e++)
                E.find(t, i[e], n);
              return r > 1 ? E.uniqueSort(n) : n;
            },
            filter: function (t) {
              return this.pushStack(L(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(L(this, t || [], !0));
            },
            is: function (t) {
              return !!L(
                this,
                "string" == typeof t && O.test(t) ? E(t) : t || [],
                !1
              ).length;
            },
          });
        var P,
          N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((E.fn.init = function (t, e, n) {
          var r, i;
          if (!t) return this;
          if (((n = n || P), "string" == typeof t)) {
            if (
              !(r =
                "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : N.exec(t)) ||
              (!r[1] && e)
            )
              return !e || e.jquery
                ? (e || n).find(t)
                : this.constructor(e).find(t);
            if (r[1]) {
              if (
                ((e = e instanceof E ? e[0] : e),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      e && e.nodeType ? e.ownerDocument || e : b,
                      !0
                    )
                  ),
                  M.test(r[1]) && E.isPlainObject(e))
              )
                for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
              return this;
            }
            return (
              (i = b.getElementById(r[2])) &&
              ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : v(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(E)
              : E.makeArray(t, this);
        }).prototype = E.fn),
          (P = E(b));
        var q = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 };
        function j(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType;);
          return t;
        }
        E.fn.extend({
          has: function (t) {
            var e = E(t, this),
              n = e.length;
            return this.filter(function () {
              for (var t = 0; t < n; t++)
                if (E.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof t && E(t);
            if (!O.test(t))
              for (; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && E.find.matchesSelector(n, t))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? c.call(E(t), this[0])
                : c.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
          },
          add: function (t, e) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))));
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t)
            );
          },
        }),
          E.each(
            {
              parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function (t) {
                return A(t, "parentNode");
              },
              parentsUntil: function (t, e, n) {
                return A(t, "parentNode", n);
              },
              next: function (t) {
                return j(t, "nextSibling");
              },
              prev: function (t) {
                return j(t, "previousSibling");
              },
              nextAll: function (t) {
                return A(t, "nextSibling");
              },
              prevAll: function (t) {
                return A(t, "previousSibling");
              },
              nextUntil: function (t, e, n) {
                return A(t, "nextSibling", n);
              },
              prevUntil: function (t, e, n) {
                return A(t, "previousSibling", n);
              },
              siblings: function (t) {
                return k((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return k(t.firstChild);
              },
              contents: function (t) {
                return null != t.contentDocument && a(t.contentDocument)
                  ? t.contentDocument
                  : (D(t, "template") && (t = t.content || t),
                    E.merge([], t.childNodes));
              },
            },
            function (t, e) {
              E.fn[t] = function (n, r) {
                var i = E.map(this, e, n);
                return (
                  "Until" !== t.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = E.filter(r, i)),
                  this.length > 1 &&
                  (R[t] || E.uniqueSort(i), q.test(t) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var I = /[^\x20\t\r\n\f]+/g;
        function H(t) {
          return t;
        }
        function B(t) {
          throw t;
        }
        function F(t, e, n, r) {
          var i;
          try {
            t && v((i = t.promise))
              ? i.call(t).done(e).fail(n)
              : t && v((i = t.then))
                ? i.call(t, e, n)
                : e.apply(void 0, [t].slice(r));
          } catch (t) {
            n.apply(void 0, [t]);
          }
        }
        (E.Callbacks = function (t) {
          t =
            "string" == typeof t
              ? (function (t) {
                var e = {};
                return (
                  E.each(t.match(I) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
              : E.extend({}, t);
          var e,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
              for (i = i || t.once, r = e = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length;)
                  !1 === o[s].apply(n[0], n[1]) &&
                    t.stopOnFalse &&
                    ((s = o.length), (n = !1));
              t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                  (n && !e && ((s = o.length - 1), a.push(n)),
                    (function e(n) {
                      E.each(n, function (n, r) {
                        v(r)
                          ? (t.unique && l.has(r)) || o.push(r)
                          : r && r.length && "string" !== w(r) && e(r);
                      });
                    })(arguments),
                    n && !e && u()),
                  this
                );
              },
              remove: function () {
                return (
                  E.each(arguments, function (t, e) {
                    for (var n; (n = E.inArray(e, o, n)) > -1;)
                      o.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? E.inArray(t, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = a = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = a = []), n || e || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (t, n) {
                return (
                  i ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    e || u()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return l;
        }),
          E.extend({
            Deferred: function (t) {
              var e = [
                [
                  "notify",
                  "progress",
                  E.Callbacks("memory"),
                  E.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return i.then(null, t);
                  },
                  pipe: function () {
                    var t = arguments;
                    return E.Deferred(function (n) {
                      E.each(e, function (e, r) {
                        var i = v(t[r[4]]) && t[r[4]];
                        o[r[1]](function () {
                          var t = i && i.apply(this, arguments);
                          t && v(t.promise)
                            ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    }).promise();
                  },
                  then: function (t, n, i) {
                    var o = 0;
                    function a(t, e, n, i) {
                      return function () {
                        var s = this,
                          u = arguments,
                          l = function () {
                            var r, l;
                            if (!(t < o)) {
                              if ((r = n.apply(s, u)) === e.promise())
                                throw new TypeError(
                                  "Thenable self-resolution"
                                );
                              (l =
                                r &&
                                ("object" == typeof r ||
                                  "function" == typeof r) &&
                                r.then),
                                v(l)
                                  ? i
                                    ? l.call(r, a(o, e, H, i), a(o, e, B, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        a(o, e, H, i),
                                        a(o, e, B, i),
                                        a(o, e, H, e.notifyWith)
                                      ))
                                  : (n !== H && ((s = void 0), (u = [r])),
                                    (i || e.resolveWith)(s, u));
                            }
                          },
                          c = i
                            ? l
                            : function () {
                              try {
                                l();
                              } catch (r) {
                                E.Deferred.exceptionHook &&
                                  E.Deferred.exceptionHook(r, c.stackTrace),
                                  t + 1 >= o &&
                                  (n !== B && ((s = void 0), (u = [r])),
                                    e.rejectWith(s, u));
                              }
                            };
                        t
                          ? c()
                          : (E.Deferred.getStackHook &&
                            (c.stackTrace = E.Deferred.getStackHook()),
                            r.setTimeout(c));
                      };
                    }
                    return E.Deferred(function (r) {
                      e[0][3].add(a(0, r, v(i) ? i : H, r.notifyWith)),
                        e[1][3].add(a(0, r, v(t) ? t : H)),
                        e[2][3].add(a(0, r, v(n) ? n : B));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? E.extend(t, i) : i;
                  },
                },
                o = {};
              return (
                E.each(e, function (t, r) {
                  var a = r[2],
                    s = r[5];
                  (i[r[1]] = a.add),
                    s &&
                    a.add(
                      function () {
                        n = s;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                    a.add(r[3].fire),
                    (o[r[0]] = function () {
                      return (
                        o[r[0] + "With"](
                          this === o ? void 0 : this,
                          arguments
                        ),
                        this
                      );
                    }),
                    (o[r[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
              );
            },
            when: function (t) {
              var e = arguments.length,
                n = e,
                r = Array(n),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function (t) {
                  return function (n) {
                    (r[t] = this),
                      (i[t] = arguments.length > 1 ? s.call(arguments) : n),
                      --e || o.resolveWith(r, i);
                  };
                };
              if (
                e <= 1 &&
                (F(t, o.done(a(n)).resolve, o.reject, !e),
                  "pending" === o.state() || v(i[n] && i[n].then))
              )
                return o.then();
              for (; n--;) F(i[n], a(n), o.reject);
              return o.promise();
            },
          });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (E.Deferred.exceptionHook = function (t, e) {
          r.console &&
            r.console.warn &&
            t &&
            z.test(t.name) &&
            r.console.warn(
              "jQuery.Deferred exception: " + t.message,
              t.stack,
              e
            );
        }),
          (E.readyException = function (t) {
            r.setTimeout(function () {
              throw t;
            });
          });
        var W = E.Deferred();
        function Y() {
          b.removeEventListener("DOMContentLoaded", Y),
            r.removeEventListener("load", Y),
            E.ready();
        }
        (E.fn.ready = function (t) {
          return (
            W.then(t).catch(function (t) {
              E.readyException(t);
            }),
            this
          );
        }),
          E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --E.readyWait : E.isReady) ||
                ((E.isReady = !0),
                  (!0 !== t && --E.readyWait > 0) || W.resolveWith(b, [E]));
            },
          }),
          (E.ready.then = W.then),
          "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? r.setTimeout(E.ready)
            : (b.addEventListener("DOMContentLoaded", Y),
              r.addEventListener("load", Y));
        var X = function (t, e, n, r, i, o, a) {
          var s = 0,
            u = t.length,
            l = null == n;
          if ("object" === w(n))
            for (s in ((i = !0), n)) X(t, e, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
              v(r) || (a = !0),
              l &&
              (a
                ? (e.call(t, r), (e = null))
                : ((l = e),
                  (e = function (t, e, n) {
                    return l.call(E(t), n);
                  }))),
              e)
          )
            for (; s < u; s++)
              e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
          return i ? t : l ? e.call(t) : u ? e(t[0], n) : o;
        },
          $ = /^-ms-/,
          V = /-([a-z])/g;
        function U(t, e) {
          return e.toUpperCase();
        }
        function G(t) {
          return t.replace($, "ms-").replace(V, U);
        }
        var K = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function Q() {
          this.expando = E.expando + Q.uid++;
        }
        (Q.uid = 1),
          (Q.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                ((e = {}),
                  K(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                      value: e,
                      configurable: !0,
                    }))),
                e
              );
            },
            set: function (t, e, n) {
              var r,
                i = this.cache(t);
              if ("string" == typeof e) i[G(e)] = n;
              else for (r in e) i[G(r)] = e[r];
              return i;
            },
            get: function (t, e) {
              return void 0 === e
                ? this.cache(t)
                : t[this.expando] && t[this.expando][G(e)];
            },
            access: function (t, e, n) {
              return void 0 === e ||
                (e && "string" == typeof e && void 0 === n)
                ? this.get(t, e)
                : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
              var n,
                r = t[this.expando];
              if (void 0 !== r) {
                if (void 0 !== e) {
                  n = (e = Array.isArray(e)
                    ? e.map(G)
                    : (e = G(e)) in r
                      ? [e]
                      : e.match(I) || []).length;
                  for (; n--;) delete r[e[n]];
                }
                (void 0 === e || E.isEmptyObject(r)) &&
                  (t.nodeType
                    ? (t[this.expando] = void 0)
                    : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              var e = t[this.expando];
              return void 0 !== e && !E.isEmptyObject(e);
            },
          });
        var Z = new Q(),
          J = new Q(),
          tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          et = /[A-Z]/g;
        function nt(t, e, n) {
          var r;
          if (void 0 === n && 1 === t.nodeType)
            if (
              ((r = "data-" + e.replace(et, "-$&").toLowerCase()),
                "string" == typeof (n = t.getAttribute(r)))
            ) {
              try {
                n = (function (t) {
                  return (
                    "true" === t ||
                    ("false" !== t &&
                      ("null" === t
                        ? null
                        : t === +t + ""
                          ? +t
                          : tt.test(t)
                            ? JSON.parse(t)
                            : t))
                  );
                })(n);
              } catch (t) { }
              J.set(t, e, n);
            } else n = void 0;
          return n;
        }
        E.extend({
          hasData: function (t) {
            return J.hasData(t) || Z.hasData(t);
          },
          data: function (t, e, n) {
            return J.access(t, e, n);
          },
          removeData: function (t, e) {
            J.remove(t, e);
          },
          _data: function (t, e, n) {
            return Z.access(t, e, n);
          },
          _removeData: function (t, e) {
            Z.remove(t, e);
          },
        }),
          E.fn.extend({
            data: function (t, e) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === t) {
                if (
                  this.length &&
                  ((i = J.get(o)),
                    1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                ) {
                  for (n = a.length; n--;)
                    a[n] &&
                      0 === (r = a[n].name).indexOf("data-") &&
                      ((r = G(r.slice(5))), nt(o, r, i[r]));
                  Z.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof t
                ? this.each(function () {
                  J.set(this, t);
                })
                : X(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = J.get(o, t)) ||
                        void 0 !== (n = nt(o, t))
                        ? n
                        : void 0;
                    this.each(function () {
                      J.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
            },
            removeData: function (t) {
              return this.each(function () {
                J.remove(this, t);
              });
            },
          }),
          E.extend({
            queue: function (t, e, n) {
              var r;
              if (t)
                return (
                  (e = (e || "fx") + "queue"),
                  (r = Z.get(t, e)),
                  n &&
                  (!r || Array.isArray(n)
                    ? (r = Z.access(t, e, E.makeArray(n)))
                    : r.push(n)),
                  r || []
                );
            },
            dequeue: function (t, e) {
              e = e || "fx";
              var n = E.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(t, e);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                ("fx" === e && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    t,
                    function () {
                      E.dequeue(t, e);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (t, e) {
              var n = e + "queueHooks";
              return (
                Z.get(t, n) ||
                Z.access(t, n, {
                  empty: E.Callbacks("once memory").add(function () {
                    Z.remove(t, [e + "queue", n]);
                  }),
                })
              );
            },
          }),
          E.fn.extend({
            queue: function (t, e) {
              var n = 2;
              return (
                "string" != typeof t && ((e = t), (t = "fx"), n--),
                arguments.length < n
                  ? E.queue(this[0], t)
                  : void 0 === e
                    ? this
                    : this.each(function () {
                      var n = E.queue(this, t, e);
                      E._queueHooks(this, t),
                        "fx" === t &&
                        "inprogress" !== n[0] &&
                        E.dequeue(this, t);
                    })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                E.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
              var n,
                r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof t && ((e = t), (t = void 0)),
                t = t || "fx";
                a--;

              )
                (n = Z.get(o[a], t + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(s));
              return s(), i.promise(e);
            },
          });
        var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
          ot = ["Top", "Right", "Bottom", "Left"],
          at = b.documentElement,
          st = function (t) {
            return E.contains(t.ownerDocument, t);
          },
          ut = { composed: !0 };
        at.getRootNode &&
          (st = function (t) {
            return (
              E.contains(t.ownerDocument, t) ||
              t.getRootNode(ut) === t.ownerDocument
            );
          });
        var lt = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display &&
              st(t) &&
              "none" === E.css(t, "display"))
          );
        };
        function ct(t, e, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function () {
                return r.cur();
              }
              : function () {
                return E.css(t, e, "");
              },
            u = s(),
            l = (n && n[3]) || (E.cssNumber[e] ? "" : "px"),
            c =
              t.nodeType &&
              (E.cssNumber[e] || ("px" !== l && +u)) &&
              it.exec(E.css(t, e));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;)
              E.style(t, e, c + l),
                (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                (c /= o);
            (c *= 2), E.style(t, e, c + l), (n = n || []);
          }
          return (
            n &&
            ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var ft = {};
        function dt(t) {
          var e,
            n = t.ownerDocument,
            r = t.nodeName,
            i = ft[r];
          return (
            i ||
            ((e = n.body.appendChild(n.createElement(r))),
              (i = E.css(e, "display")),
              e.parentNode.removeChild(e),
              "none" === i && (i = "block"),
              (ft[r] = i),
              i)
          );
        }
        function pt(t, e) {
          for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
            (r = t[o]).style &&
              ((n = r.style.display),
                e
                  ? ("none" === n &&
                    ((i[o] = Z.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && lt(r) && (i[o] = dt(r)))
                  : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
          for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
          return t;
        }
        E.fn.extend({
          show: function () {
            return pt(this, !0);
          },
          hide: function () {
            return pt(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                lt(this) ? E(this).show() : E(this).hide();
              });
          },
        });
        var ht,
          gt,
          mt = /^(?:checkbox|radio)$/i,
          vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          yt = /^$|^module$|\/(?:java|ecma)script/i;
        (ht = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (gt = b.createElement("input")).setAttribute("type", "radio"),
          gt.setAttribute("checked", "checked"),
          gt.setAttribute("name", "t"),
          ht.appendChild(gt),
          (m.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ht.innerHTML = "<textarea>x</textarea>"),
          (m.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue),
          (ht.innerHTML = "<option></option>"),
          (m.option = !!ht.lastChild);
        var bt = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function _t(t, e) {
          var n;
          return (
            (n =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || "*")
                : void 0 !== t.querySelectorAll
                  ? t.querySelectorAll(e || "*")
                  : []),
            void 0 === e || (e && D(t, e)) ? E.merge([t], n) : n
          );
        }
        function xt(t, e) {
          for (var n = 0, r = t.length; n < r; n++)
            Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"));
        }
        (bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead),
          (bt.th = bt.td),
          m.option ||
          (bt.optgroup = bt.option =
            [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;
        function Tt(t, e, n, r, i) {
          for (
            var o,
            a,
            s,
            u,
            l,
            c,
            f = e.createDocumentFragment(),
            d = [],
            p = 0,
            h = t.length;
            p < h;
            p++
          )
            if ((o = t[p]) || 0 === o)
              if ("object" === w(o)) E.merge(d, o.nodeType ? [o] : o);
              else if (wt.test(o)) {
                for (
                  a = a || f.appendChild(e.createElement("div")),
                  s = (vt.exec(o) || ["", ""])[1].toLowerCase(),
                  u = bt[s] || bt._default,
                  a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                  c = u[0];
                  c--;

                )
                  a = a.lastChild;
                E.merge(d, a.childNodes),
                  ((a = f.firstChild).textContent = "");
              } else d.push(e.createTextNode(o));
          for (f.textContent = "", p = 0; (o = d[p++]);)
            if (r && E.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((l = st(o)),
                (a = _t(f.appendChild(o), "script")),
                l && xt(a),
                n)
            )
              for (c = 0; (o = a[c++]);) yt.test(o.type || "") && n.push(o);
          return f;
        }
        var Et = /^([^.]*)(?:\.(.+)|)/;
        function St() {
          return !0;
        }
        function Ct() {
          return !1;
        }
        function At(t, e) {
          return (
            (t ===
              (function () {
                try {
                  return b.activeElement;
                } catch (t) { }
              })()) ==
            ("focus" === e)
          );
        }
        function kt(t, e, n, r, i, o) {
          var a, s;
          if ("object" == typeof e) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              e))
              kt(t, s, n, r, e[s], o);
            return t;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
              !1 === i)
          )
            i = Ct;
          else if (!i) return t;
          return (
            1 === o &&
            ((a = i),
              (i = function (t) {
                return E().off(t), a.apply(this, arguments);
              }),
              (i.guid = a.guid || (a.guid = E.guid++))),
            t.each(function () {
              E.event.add(this, e, i, r, n);
            })
          );
        }
        function Ot(t, e, n) {
          n
            ? (Z.set(t, e, !1),
              E.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                  var r,
                    i,
                    o = Z.get(this, e);
                  if (1 & t.isTrigger && this[e]) {
                    if (o.length)
                      (E.event.special[e] || {}).delegateType &&
                        t.stopPropagation();
                    else if (
                      ((o = s.call(arguments)),
                        Z.set(this, e, o),
                        (r = n(this, e)),
                        this[e](),
                        o !== (i = Z.get(this, e)) || r
                          ? Z.set(this, e, !1)
                          : (i = {}),
                        o !== i)
                    )
                      return (
                        t.stopImmediatePropagation(),
                        t.preventDefault(),
                        i && i.value
                      );
                  } else
                    o.length &&
                      (Z.set(this, e, {
                        value: E.event.trigger(
                          E.extend(o[0], E.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                        t.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(t, e) && E.event.add(t, e, St);
        }
        (E.event = {
          global: {},
          add: function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g,
              m = Z.get(t);
            if (K(t))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && E.find.matchesSelector(at, i),
                n.guid || (n.guid = E.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (a = m.handle) ||
                (a = m.handle =
                  function (e) {
                    return void 0 !== E && E.event.triggered !== e.type
                      ? E.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                l = (e = (e || "").match(I) || [""]).length;
                l--;

              )
                (p = g = (s = Et.exec(e[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  p &&
                  ((f = E.event.special[p] || {}),
                    (p = (i ? f.delegateType : f.bindType) || p),
                    (f = E.event.special[p] || {}),
                    (c = E.extend(
                      {
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      o
                    )),
                    (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                      (t.addEventListener && t.addEventListener(p, a))),
                    f.add &&
                    (f.add.call(t, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    (E.event.global[p] = !0));
          },
          remove: function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              g,
              m = Z.hasData(t) && Z.get(t);
            if (m && (u = m.events)) {
              for (l = (e = (e || "").match(I) || [""]).length; l--;)
                if (
                  ((p = g = (s = Et.exec(e[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                ) {
                  for (
                    f = E.event.special[p] || {},
                    d =
                    u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s =
                    s[2] &&
                    new RegExp(
                      "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    ),
                    a = o = d.length;
                    o--;

                  )
                    (c = d[o]),
                      (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r &&
                        r !== c.selector &&
                        ("**" !== r || !c.selector)) ||
                      (d.splice(o, 1),
                        c.selector && d.delegateCount--,
                        f.remove && f.remove.call(t, c));
                  a &&
                    !d.length &&
                    ((f.teardown && !1 !== f.teardown.call(t, h, m.handle)) ||
                      E.removeEvent(t, p, m.handle),
                      delete u[p]);
                } else for (p in u) E.event.remove(t, p + e[l], n, r, !0);
              E.isEmptyObject(u) && Z.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s = new Array(arguments.length),
              u = E.event.fix(t),
              l =
                (Z.get(this, "events") || Object.create(null))[u.type] || [],
              c = E.event.special[u.type] || {};
            for (s[0] = u, e = 1; e < arguments.length; e++)
              s[e] = arguments[e];
            if (
              ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
              for (
                a = E.event.handlers.call(this, u, l), e = 0;
                (i = a[e++]) && !u.isPropagationStopped();

              )
                for (
                  u.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                )
                  (u.rnamespace &&
                    !1 !== o.namespace &&
                    !u.rnamespace.test(o.namespace)) ||
                    ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                      (r = (
                        (E.event.special[o.origType] || {}).handle ||
                        o.handler
                      ).apply(i.elem, s)) &&
                      !1 === (u.result = r) &&
                      (u.preventDefault(), u.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
          },
          handlers: function (t, e) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              u = e.delegateCount,
              l = t.target;
            if (u && l.nodeType && !("click" === t.type && t.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== t.type || !0 !== l.disabled)
                ) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    void 0 === a[(i = (r = e[n]).selector + " ")] &&
                      (a[i] = r.needsContext
                        ? E(i, this).index(l) > -1
                        : E.find(i, this, null, [l]).length),
                      a[i] && o.push(r);
                  o.length && s.push({ elem: l, handlers: o });
                }
            return (
              (l = this),
              u < e.length && s.push({ elem: l, handlers: e.slice(u) }),
              s
            );
          },
          addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: v(e)
                ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
                : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function (t) {
            return t[E.expando] ? t : new E.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (t) {
                var e = this || t;
                return (
                  mt.test(e.type) &&
                  e.click &&
                  D(e, "input") &&
                  Ot(e, "click", St),
                  !1
                );
              },
              trigger: function (t) {
                var e = this || t;
                return (
                  mt.test(e.type) &&
                  e.click &&
                  D(e, "input") &&
                  Ot(e, "click"),
                  !0
                );
              },
              _default: function (t) {
                var e = t.target;
                return (
                  (mt.test(e.type) &&
                    e.click &&
                    D(e, "input") &&
                    Z.get(e, "click")) ||
                  D(e, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
          (E.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }),
          (E.Event = function (t, e) {
            if (!(this instanceof E.Event)) return new E.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                    (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? St
                    : Ct),
                (this.target =
                  t.target && 3 === t.target.nodeType
                    ? t.target.parentNode
                    : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && E.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[E.expando] = !0);
          }),
          (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Ct,
            isPropagationStopped: Ct,
            isImmediatePropagationStopped: Ct,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = St),
                t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = St),
                t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = St),
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          E.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            E.event.addProp
          ),
          E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            E.event.special[t] = {
              setup: function () {
                return Ot(this, t, At), !1;
              },
              trigger: function () {
                return Ot(this, t), !0;
              },
              _default: function (e) {
                return Z.get(e.target, t);
              },
              delegateType: e,
            };
          }),
          E.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (t, e) {
              E.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                  var n,
                    r = t.relatedTarget,
                    i = t.handleObj;
                  return (
                    (r && (r === this || E.contains(this, r))) ||
                    ((t.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (t.type = e)),
                    n
                  );
                },
              };
            }
          ),
          E.fn.extend({
            on: function (t, e, n, r) {
              return kt(this, t, e, n, r);
            },
            one: function (t, e, n, r) {
              return kt(this, t, e, n, r, 1);
            },
            off: function (t, e, n) {
              var r, i;
              if (t && t.preventDefault && t.handleObj)
                return (
                  (r = t.handleObj),
                  E(t.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this;
              }
              return (
                (!1 !== e && "function" != typeof e) ||
                ((n = e), (e = void 0)),
                !1 === n && (n = Ct),
                this.each(function () {
                  E.event.remove(this, t, n, e);
                })
              );
            },
          });
        var Dt = /<script|<style|<link/i,
          Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Lt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Pt(t, e) {
          return (
            (D(t, "table") &&
              D(11 !== e.nodeType ? e : e.firstChild, "tr") &&
              E(t).children("tbody")[0]) ||
            t
          );
        }
        function Nt(t) {
          return (
            (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t
          );
        }
        function qt(t) {
          return (
            "true/" === (t.type || "").slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute("type"),
            t
          );
        }
        function Rt(t, e) {
          var n, r, i, o, a, s;
          if (1 === e.nodeType) {
            if (Z.hasData(t) && (s = Z.get(t).events))
              for (i in (Z.remove(e, "handle events"), s))
                for (n = 0, r = s[i].length; n < r; n++)
                  E.event.add(e, i, s[i][n]);
            J.hasData(t) &&
              ((o = J.access(t)), (a = E.extend({}, o)), J.set(e, a));
          }
        }
        function jt(t, e) {
          var n = e.nodeName.toLowerCase();
          "input" === n && mt.test(t.type)
            ? (e.checked = t.checked)
            : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
        }
        function It(t, e, n, r) {
          e = u(e);
          var i,
            o,
            a,
            s,
            l,
            c,
            f = 0,
            d = t.length,
            p = d - 1,
            h = e[0],
            g = v(h);
          if (
            g ||
            (d > 1 && "string" == typeof h && !m.checkClone && Mt.test(h))
          )
            return t.each(function (i) {
              var o = t.eq(i);
              g && (e[0] = h.call(this, i, o.html())), It(o, e, n, r);
            });
          if (
            d &&
            ((o = (i = Tt(e, t[0].ownerDocument, !1, t, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
          ) {
            for (s = (a = E.map(_t(i, "script"), Nt)).length; f < d; f++)
              (l = i),
                f !== p &&
                ((l = E.clone(l, !0, !0)),
                  s && E.merge(a, _t(l, "script"))),
                n.call(t[f], l, f);
            if (s)
              for (
                c = a[a.length - 1].ownerDocument, E.map(a, qt), f = 0;
                f < s;
                f++
              )
                (l = a[f]),
                  yt.test(l.type || "") &&
                  !Z.access(l, "globalEval") &&
                  E.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? E._evalUrl &&
                    !l.noModule &&
                    E._evalUrl(
                      l.src,
                      { nonce: l.nonce || l.getAttribute("nonce") },
                      c
                    )
                    : x(l.textContent.replace(Lt, ""), l, c));
          }
          return t;
        }
        function Ht(t, e, n) {
          for (
            var r, i = e ? E.filter(e, t) : t, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || E.cleanData(_t(r)),
              r.parentNode &&
              (n && st(r) && xt(_t(r, "script")),
                r.parentNode.removeChild(r));
          return t;
        }
        E.extend({
          htmlPrefilter: function (t) {
            return t;
          },
          clone: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s = t.cloneNode(!0),
              u = st(t);
            if (
              !(
                m.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                E.isXMLDoc(t)
              )
            )
              for (a = _t(s), r = 0, i = (o = _t(t)).length; r < i; r++)
                jt(o[r], a[r]);
            if (e)
              if (n)
                for (
                  o = o || _t(t), a = a || _t(s), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  Rt(o[r], a[r]);
              else Rt(t, s);
            return (
              (a = _t(s, "script")).length > 0 &&
              xt(a, !u && _t(t, "script")),
              s
            );
          },
          cleanData: function (t) {
            for (
              var e, n, r, i = E.event.special, o = 0;
              void 0 !== (n = t[o]);
              o++
            )
              if (K(n)) {
                if ((e = n[Z.expando])) {
                  if (e.events)
                    for (r in e.events)
                      i[r]
                        ? E.event.remove(n, r)
                        : E.removeEvent(n, r, e.handle);
                  n[Z.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
              }
          },
        }),
          E.fn.extend({
            detach: function (t) {
              return Ht(this, t, !0);
            },
            remove: function (t) {
              return Ht(this, t);
            },
            text: function (t) {
              return X(
                this,
                function (t) {
                  return void 0 === t
                    ? E.text(this)
                    : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
                },
                null,
                t,
                arguments.length
              );
            },
            append: function () {
              return It(this, arguments, function (t) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Pt(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return It(this, arguments, function (t) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var e = Pt(this, t);
                  e.insertBefore(t, e.firstChild);
                }
              });
            },
            before: function () {
              return It(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return It(this, arguments, function (t) {
                this.parentNode &&
                  this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType &&
                  (E.cleanData(_t(t, !1)), (t.textContent = ""));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return E.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return X(
                this,
                function (t) {
                  var e = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if (
                    "string" == typeof t &&
                    !Dt.test(t) &&
                    !bt[(vt.exec(t) || ["", ""])[1].toLowerCase()]
                  ) {
                    t = E.htmlPrefilter(t);
                    try {
                      for (; n < r; n++)
                        1 === (e = this[n] || {}).nodeType &&
                          (E.cleanData(_t(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) { }
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length
              );
            },
            replaceWith: function () {
              var t = [];
              return It(
                this,
                arguments,
                function (e) {
                  var n = this.parentNode;
                  E.inArray(this, t) < 0 &&
                    (E.cleanData(_t(this)), n && n.replaceChild(e, this));
                },
                t
              );
            },
          }),
          E.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (t, e) {
              E.fn[t] = function (t) {
                for (
                  var n, r = [], i = E(t), o = i.length - 1, a = 0;
                  a <= o;
                  a++
                )
                  (n = a === o ? this : this.clone(!0)),
                    E(i[a])[e](n),
                    l.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Bt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
          Ft = /^--/,
          zt = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = r), e.getComputedStyle(t);
          },
          Wt = function (t, e, n) {
            var r,
              i,
              o = {};
            for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
            for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
            return r;
          },
          Yt = new RegExp(ot.join("|"), "i"),
          Xt = "[\\x20\\t\\r\\n\\f]",
          $t = new RegExp(
            "^" + Xt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Xt + "+$",
            "g"
          );
        function Vt(t, e, n) {
          var r,
            i,
            o,
            a,
            s = Ft.test(e),
            u = t.style;
          return (
            (n = n || zt(t)) &&
            ((a = n.getPropertyValue(e) || n[e]),
              s && a && (a = a.replace($t, "$1") || void 0),
              "" !== a || st(t) || (a = E.style(t, e)),
              !m.pixelBoxStyles() &&
              Bt.test(a) &&
              Yt.test(e) &&
              ((r = u.width),
                (i = u.minWidth),
                (o = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = a),
                (a = n.width),
                (u.width = r),
                (u.minWidth = i),
                (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
          );
        }
        function Ut(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (c) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                at.appendChild(l).appendChild(c);
              var t = r.getComputedStyle(c);
              (n = "1%" !== t.top),
                (u = 12 === e(t.marginLeft)),
                (c.style.right = "60%"),
                (a = 36 === e(t.right)),
                (i = 36 === e(t.width)),
                (c.style.position = "absolute"),
                (o = 12 === e(c.offsetWidth / 3)),
                at.removeChild(l),
                (c = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var n,
            i,
            o,
            a,
            s,
            u,
            l = b.createElement("div"),
            c = b.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
              E.extend(m, {
                boxSizingReliable: function () {
                  return t(), i;
                },
                pixelBoxStyles: function () {
                  return t(), a;
                },
                pixelPosition: function () {
                  return t(), n;
                },
                reliableMarginLeft: function () {
                  return t(), u;
                },
                scrollboxSize: function () {
                  return t(), o;
                },
                reliableTrDimensions: function () {
                  var t, e, n, i;
                  return (
                    null == s &&
                    ((t = b.createElement("table")),
                      (e = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (t.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (e.style.cssText = "border:1px solid"),
                      (e.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      at.appendChild(t).appendChild(e).appendChild(n),
                      (i = r.getComputedStyle(e)),
                      (s =
                        parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                        e.offsetHeight),
                      at.removeChild(t)),
                    s
                  );
                },
              }));
        })();
        var Gt = ["Webkit", "Moz", "ms"],
          Kt = b.createElement("div").style,
          Qt = {};
        function Zt(t) {
          var e = E.cssProps[t] || Qt[t];
          return (
            e ||
            (t in Kt
              ? t
              : (Qt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = Gt.length;
                    n--;

                  )
                    if ((t = Gt[n] + e) in Kt) return t;
                })(t) || t))
          );
        }
        var Jt = /^(none|table(?!-c[ea]).+)/,
          te = {
            position: "absolute",
            visibility: "hidden",
            display: "block",
          },
          ee = { letterSpacing: "0", fontWeight: "400" };
        function ne(t, e, n) {
          var r = it.exec(e);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
        }
        function re(t, e, n, r, i, o) {
          var a = "width" === e ? 1 : 0,
            s = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (u += E.css(t, n + ot[a], !0, i)),
              r
                ? ("content" === n &&
                  (u -= E.css(t, "padding" + ot[a], !0, i)),
                  "margin" !== n &&
                  (u -= E.css(t, "border" + ot[a] + "Width", !0, i)))
                : ((u += E.css(t, "padding" + ot[a], !0, i)),
                  "padding" !== n
                    ? (u += E.css(t, "border" + ot[a] + "Width", !0, i))
                    : (s += E.css(t, "border" + ot[a] + "Width", !0, i)));
          return (
            !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                  o -
                  u -
                  s -
                  0.5
                )
              ) || 0),
            u
          );
        }
        function ie(t, e, n) {
          var r = zt(t),
            i =
              (!m.boxSizingReliable() || n) &&
              "border-box" === E.css(t, "boxSizing", !1, r),
            o = i,
            a = Vt(t, e, r),
            s = "offset" + e[0].toUpperCase() + e.slice(1);
          if (Bt.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!m.boxSizingReliable() && i) ||
              (!m.reliableTrDimensions() && D(t, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === E.css(t, "display", !1, r))) &&
            t.getClientRects().length &&
            ((i = "border-box" === E.css(t, "boxSizing", !1, r)),
              (o = s in t) && (a = t[s])),
            (a = parseFloat(a) || 0) +
            re(t, e, n || (i ? "border" : "content"), o, r, a) +
            "px"
          );
        }
        function oe(t, e, n, r, i) {
          return new oe.prototype.init(t, e, n, r, i);
        }
        E.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var n = Vt(t, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var i,
                o,
                a,
                s = G(e),
                u = Ft.test(e),
                l = t.style;
              if (
                (u || (e = Zt(s)),
                  (a = E.cssHooks[e] || E.cssHooks[s]),
                  void 0 === n)
              )
                return a && "get" in a && void 0 !== (i = a.get(t, !1, r))
                  ? i
                  : l[e];
              "string" === (o = typeof n) &&
                (i = it.exec(n)) &&
                i[1] &&
                ((n = ct(t, e, i)), (o = "number")),
                null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                  m.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
                  (u ? l.setProperty(e, n) : (l[e] = n)));
            }
          },
          css: function (t, e, n, r) {
            var i,
              o,
              a,
              s = G(e);
            return (
              Ft.test(e) || (e = Zt(s)),
              (a = E.cssHooks[e] || E.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(t, !0, n)),
              void 0 === i && (i = Vt(t, e, r)),
              "normal" === i && e in ee && (i = ee[e]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          E.each(["height", "width"], function (t, e) {
            E.cssHooks[e] = {
              get: function (t, n, r) {
                if (n)
                  return !Jt.test(E.css(t, "display")) ||
                    (t.getClientRects().length &&
                      t.getBoundingClientRect().width)
                    ? ie(t, e, r)
                    : Wt(t, te, function () {
                      return ie(t, e, r);
                    });
              },
              set: function (t, n, r) {
                var i,
                  o = zt(t),
                  a = !m.scrollboxSize() && "absolute" === o.position,
                  s =
                    (a || r) && "border-box" === E.css(t, "boxSizing", !1, o),
                  u = r ? re(t, e, r, s, o) : 0;
                return (
                  s &&
                  a &&
                  (u -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    parseFloat(o[e]) -
                    re(t, e, "border", !1, o) -
                    0.5
                  )),
                  u &&
                  (i = it.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((t.style[e] = n), (n = E.css(t, e))),
                  ne(0, n, u)
                );
              },
            };
          }),
          (E.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(Vt(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                  Wt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
              );
          })),
          E.each(
            { margin: "", padding: "", border: "Width" },
            function (t, e) {
              (E.cssHooks[t + e] = {
                expand: function (n) {
                  for (
                    var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[t + ot[r] + e] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                "margin" !== t && (E.cssHooks[t + e].set = ne);
            }
          ),
          E.fn.extend({
            css: function (t, e) {
              return X(
                this,
                function (t, e, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (Array.isArray(e)) {
                    for (r = zt(t), i = e.length; a < i; a++)
                      o[e[a]] = E.css(t, e[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? E.style(t, e, n) : E.css(t, e);
                },
                t,
                e,
                arguments.length > 1
              );
            },
          }),
          (E.Tween = oe),
          (oe.prototype = {
            constructor: oe,
            init: function (t, e, n, r, i, o) {
              (this.elem = t),
                (this.prop = n),
                (this.easing = i || E.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var t = oe.propHooks[this.prop];
              return t && t.get
                ? t.get(this)
                : oe.propHooks._default.get(this);
            },
            run: function (t) {
              var e,
                n = oe.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e =
                    E.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step &&
                this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : oe.propHooks._default.set(this),
                this
              );
            },
          }),
          (oe.prototype.init.prototype = oe.prototype),
          (oe.propHooks = {
            _default: {
              get: function (t) {
                var e;
                return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (e = E.css(t.elem, t.prop, "")) && "auto" !== e
                    ? e
                    : 0;
              },
              set: function (t) {
                E.fx.step[t.prop]
                  ? E.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType ||
                    (!E.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)])
                    ? (t.elem[t.prop] = t.now)
                    : E.style(t.elem, t.prop, t.now + t.unit);
              },
            },
          }),
          (oe.propHooks.scrollTop = oe.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType &&
                t.elem.parentNode &&
                (t.elem[t.prop] = t.now);
            },
          }),
          (E.easing = {
            linear: function (t) {
              return t;
            },
            swing: function (t) {
              return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (E.fx = oe.prototype.init),
          (E.fx.step = {});
        var ae,
          se,
          ue = /^(?:toggle|show|hide)$/,
          le = /queueHooks$/;
        function ce() {
          se &&
            (!1 === b.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(ce)
              : r.setTimeout(ce, E.fx.interval),
              E.fx.tick());
        }
        function fe() {
          return (
            r.setTimeout(function () {
              ae = void 0;
            }),
            (ae = Date.now())
          );
        }
        function de(t, e) {
          var n,
            r = 0,
            i = { height: t };
          for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = ot[r])] = i["padding" + n] = t;
          return e && (i.opacity = i.width = t), i;
        }
        function pe(t, e, n) {
          for (
            var r,
            i = (he.tweeners[e] || []).concat(he.tweeners["*"]),
            o = 0,
            a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, e, t))) return r;
        }
        function he(t, e, n) {
          var r,
            i,
            o = 0,
            a = he.prefilters.length,
            s = E.Deferred().always(function () {
              delete u.elem;
            }),
            u = function () {
              if (i) return !1;
              for (
                var e = ae || fe(),
                n = Math.max(0, l.startTime + l.duration - e),
                r = 1 - (n / l.duration || 0),
                o = 0,
                a = l.tweens.length;
                o < a;
                o++
              )
                l.tweens[o].run(r);
              return (
                s.notifyWith(t, [l, r, n]),
                r < 1 && a
                  ? n
                  : (a || s.notifyWith(t, [l, 1, 0]),
                    s.resolveWith(t, [l]),
                    !1)
              );
            },
            l = s.promise({
              elem: t,
              props: E.extend({}, e),
              opts: E.extend(
                !0,
                { specialEasing: {}, easing: E.easing._default },
                n
              ),
              originalProperties: e,
              originalOptions: n,
              startTime: ae || fe(),
              duration: n.duration,
              tweens: [],
              createTween: function (e, n) {
                var r = E.Tween(
                  t,
                  l.opts,
                  e,
                  n,
                  l.opts.specialEasing[e] || l.opts.easing
                );
                return l.tweens.push(r), r;
              },
              stop: function (e) {
                var n = 0,
                  r = e ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return (
                  e
                    ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e]))
                    : s.rejectWith(t, [l, e]),
                  this
                );
              },
            }),
            c = l.props;
          for (
            !(function (t, e) {
              var n, r, i, o, a;
              for (n in t)
                if (
                  ((i = e[(r = G(n))]),
                    (o = t[n]),
                    Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                    n !== r && ((t[r] = o), delete t[n]),
                    (a = E.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete t[r], o))
                    (n in t) || ((t[n] = o[n]), (e[n] = i));
                else e[r] = i;
            })(c, l.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = he.prefilters[o].call(l, t, c, l.opts)))
              return (
                v(r.stop) &&
                (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            E.map(c, pe, l),
            v(l.opts.start) && l.opts.start.call(t, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            E.fx.timer(
              E.extend(u, { elem: t, anim: l, queue: l.opts.queue })
            ),
            l
          );
        }
        (E.Animation = E.extend(he, {
          tweeners: {
            "*": [
              function (t, e) {
                var n = this.createTween(t, e);
                return ct(n.elem, t, it.exec(e), n), n;
              },
            ],
          },
          tweener: function (t, e) {
            v(t) ? ((e = t), (t = ["*"])) : (t = t.match(I));
            for (var n, r = 0, i = t.length; r < i; r++)
              (n = t[r]),
                (he.tweeners[n] = he.tweeners[n] || []),
                he.tweeners[n].unshift(e);
          },
          prefilters: [
            function (t, e, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = "width" in e || "height" in e,
                d = this,
                p = {},
                h = t.style,
                g = t.nodeType && lt(t),
                m = Z.get(t, "fxshow");
              for (r in (n.queue ||
                (null == (a = E._queueHooks(t, "fx")).unqueued &&
                  ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, E.queue(t, "fx").length || a.empty.fire();
                    });
                  })),
                e))
                if (((i = e[r]), ue.test(i))) {
                  if (
                    (delete e[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0;
                  }
                  p[r] = (m && m[r]) || E.style(t, r);
                }
              if ((u = !E.isEmptyObject(e)) || !E.isEmptyObject(p))
                for (r in (f &&
                  1 === t.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = m && m.display) && (l = Z.get(t, "display")),
                    "none" === (c = E.css(t, "display")) &&
                    (l
                      ? (c = l)
                      : (pt([t], !0),
                        (l = t.style.display || l),
                        (c = E.css(t, "display")),
                        pt([t]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === E.css(t, "float") &&
                    (u ||
                      (d.done(function () {
                        h.display = l;
                      }),
                        null == l &&
                        ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                  ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                  u ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = Z.access(t, "fxshow", { display: l })),
                      o && (m.hidden = !g),
                      g && pt([t], !0),
                      d.done(function () {
                        for (r in (g || pt([t]), Z.remove(t, "fxshow"), p))
                          E.style(t, r, p[r]);
                      })),
                    (u = pe(g ? m[r] : 0, r, d)),
                    r in m ||
                    ((m[r] = u.start),
                      g && ((u.end = u.start), (u.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? he.prefilters.unshift(t) : he.prefilters.push(t);
          },
        })),
          (E.speed = function (t, e, n) {
            var r =
              t && "object" == typeof t
                ? E.extend({}, t)
                : {
                  complete: n || (!n && e) || (v(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !v(e) && e),
                };
            return (
              E.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                (r.duration in E.fx.speeds
                  ? (r.duration = E.fx.speeds[r.duration])
                  : (r.duration = E.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                v(r.old) && r.old.call(this),
                  r.queue && E.dequeue(this, r.queue);
              }),
              r
            );
          }),
          E.fn.extend({
            fadeTo: function (t, e, n, r) {
              return this.filter(lt)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: e }, t, n, r);
            },
            animate: function (t, e, n, r) {
              var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                a = function () {
                  var e = he(this, E.extend({}, t), o);
                  (i || Z.get(this, "finish")) && e.stop(!0);
                };
              return (
                (a.finish = a),
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              );
            },
            stop: function (t, e, n) {
              var r = function (t) {
                var e = t.stop;
                delete t.stop, e(n);
              };
              return (
                "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                e && this.queue(t || "fx", []),
                this.each(function () {
                  var e = !0,
                    i = null != t && t + "queueHooks",
                    o = E.timers,
                    a = Z.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else
                    for (i in a) a[i] && a[i].stop && le.test(i) && r(a[i]);
                  for (i = o.length; i--;)
                    o[i].elem !== this ||
                      (null != t && o[i].queue !== t) ||
                      (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
                  (!e && n) || E.dequeue(this, t);
                })
              );
            },
            finish: function (t) {
              return (
                !1 !== t && (t = t || "fx"),
                this.each(function () {
                  var e,
                    n = Z.get(this),
                    r = n[t + "queue"],
                    i = n[t + "queueHooks"],
                    o = E.timers,
                    a = r ? r.length : 0;
                  for (
                    n.finish = !0,
                    E.queue(this, t, []),
                    i && i.stop && i.stop.call(this, !0),
                    e = o.length;
                    e--;

                  )
                    o[e].elem === this &&
                      o[e].queue === t &&
                      (o[e].anim.stop(!0), o.splice(e, 1));
                  for (e = 0; e < a; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          E.each(["toggle", "show", "hide"], function (t, e) {
            var n = E.fn[e];
            E.fn[e] = function (t, r, i) {
              return null == t || "boolean" == typeof t
                ? n.apply(this, arguments)
                : this.animate(de(e, !0), t, r, i);
            };
          }),
          E.each(
            {
              slideDown: de("show"),
              slideUp: de("hide"),
              slideToggle: de("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (t, e) {
              E.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r);
              };
            }
          ),
          (E.timers = []),
          (E.fx.tick = function () {
            var t,
              e = 0,
              n = E.timers;
            for (ae = Date.now(); e < n.length; e++)
              (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || E.fx.stop(), (ae = void 0);
          }),
          (E.fx.timer = function (t) {
            E.timers.push(t), E.fx.start();
          }),
          (E.fx.interval = 13),
          (E.fx.start = function () {
            se || ((se = !0), ce());
          }),
          (E.fx.stop = function () {
            se = null;
          }),
          (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (E.fn.delay = function (t, e) {
            return (
              (t = (E.fx && E.fx.speeds[t]) || t),
              (e = e || "fx"),
              this.queue(e, function (e, n) {
                var i = r.setTimeout(e, t);
                n.stop = function () {
                  r.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var t = b.createElement("input"),
              e = b
                .createElement("select")
                .appendChild(b.createElement("option"));
            (t.type = "checkbox"),
              (m.checkOn = "" !== t.value),
              (m.optSelected = e.selected),
              ((t = b.createElement("input")).value = "t"),
              (t.type = "radio"),
              (m.radioValue = "t" === t.value);
          })();
        var ge,
          me = E.expr.attrHandle;
        E.fn.extend({
          attr: function (t, e) {
            return X(this, E.attr, t, e, arguments.length > 1);
          },
          removeAttr: function (t) {
            return this.each(function () {
              E.removeAttr(this, t);
            });
          },
        }),
          E.extend({
            attr: function (t, e, n) {
              var r,
                i,
                o = t.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute
                  ? E.prop(t, e, n)
                  : ((1 === o && E.isXMLDoc(t)) ||
                    (i =
                      E.attrHooks[e.toLowerCase()] ||
                      (E.expr.match.bool.test(e) ? ge : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void E.removeAttr(t, e)
                        : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                          ? r
                          : (t.setAttribute(e, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(t, e))
                        ? r
                        : null == (r = E.find.attr(t, e))
                          ? void 0
                          : r);
            },
            attrHooks: {
              type: {
                set: function (t, e) {
                  if (!m.radioValue && "radio" === e && D(t, "input")) {
                    var n = t.value;
                    return t.setAttribute("type", e), n && (t.value = n), e;
                  }
                },
              },
            },
            removeAttr: function (t, e) {
              var n,
                r = 0,
                i = e && e.match(I);
              if (i && 1 === t.nodeType)
                for (; (n = i[r++]);) t.removeAttribute(n);
            },
          }),
          (ge = {
            set: function (t, e, n) {
              return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
          }),
          E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = me[e] || E.find.attr;
            me[e] = function (t, e, r) {
              var i,
                o,
                a = e.toLowerCase();
              return (
                r ||
                ((o = me[a]),
                  (me[a] = i),
                  (i = null != n(t, e, r) ? a : null),
                  (me[a] = o)),
                i
              );
            };
          });
        var ve = /^(?:input|select|textarea|button)$/i,
          ye = /^(?:a|area)$/i;
        function be(t) {
          return (t.match(I) || []).join(" ");
        }
        function _e(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function xe(t) {
          return Array.isArray(t)
            ? t
            : ("string" == typeof t && t.match(I)) || [];
        }
        E.fn.extend({
          prop: function (t, e) {
            return X(this, E.prop, t, e, arguments.length > 1);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[E.propFix[t] || t];
            });
          },
        }),
          E.extend({
            prop: function (t, e, n) {
              var r,
                i,
                o = t.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && E.isXMLDoc(t)) ||
                  ((e = E.propFix[e] || e), (i = E.propHooks[e])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                      ? r
                      : (t[e] = n)
                    : i && "get" in i && null !== (r = i.get(t, e))
                      ? r
                      : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = E.find.attr(t, "tabindex");
                  return e
                    ? parseInt(e, 10)
                    : ve.test(t.nodeName) || (ye.test(t.nodeName) && t.href)
                      ? 0
                      : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          m.optSelected ||
          (E.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex,
                  e.parentNode && e.parentNode.selectedIndex);
            },
          }),
          E.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              E.propFix[this.toLowerCase()] = this;
            }
          ),
          E.fn.extend({
            addClass: function (t) {
              var e, n, r, i, o, a;
              return v(t)
                ? this.each(function (e) {
                  E(this).addClass(t.call(this, e, _e(this)));
                })
                : (e = xe(t)).length
                  ? this.each(function () {
                    if (
                      ((r = _e(this)),
                        (n = 1 === this.nodeType && " " + be(r) + " "))
                    ) {
                      for (o = 0; o < e.length; o++)
                        (i = e[o]),
                          n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                      (a = be(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                  : this;
            },
            removeClass: function (t) {
              var e, n, r, i, o, a;
              return v(t)
                ? this.each(function (e) {
                  E(this).removeClass(t.call(this, e, _e(this)));
                })
                : arguments.length
                  ? (e = xe(t)).length
                    ? this.each(function () {
                      if (
                        ((r = _e(this)),
                          (n = 1 === this.nodeType && " " + be(r) + " "))
                      ) {
                        for (o = 0; o < e.length; o++)
                          for (i = e[o]; n.indexOf(" " + i + " ") > -1;)
                            n = n.replace(" " + i + " ", " ");
                        (a = be(n)), r !== a && this.setAttribute("class", a);
                      }
                    })
                    : this
                  : this.attr("class", "");
            },
            toggleClass: function (t, e) {
              var n,
                r,
                i,
                o,
                a = typeof t,
                s = "string" === a || Array.isArray(t);
              return v(t)
                ? this.each(function (n) {
                  E(this).toggleClass(t.call(this, n, _e(this), e), e);
                })
                : "boolean" == typeof e && s
                  ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                  : ((n = xe(t)),
                    this.each(function () {
                      if (s)
                        for (o = E(this), i = 0; i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== t && "boolean" !== a) ||
                          ((r = _e(this)) && Z.set(this, "__className__", r),
                            this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === t
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    }));
            },
            hasClass: function (t) {
              var e,
                n,
                r = 0;
              for (e = " " + t + " "; (n = this[r++]);)
                if (
                  1 === n.nodeType &&
                  (" " + be(_e(n)) + " ").indexOf(e) > -1
                )
                  return !0;
              return !1;
            },
          });
        var we = /\r/g;
        E.fn.extend({
          val: function (t) {
            var e,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = v(t)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? t.call(this, n, E(this).val()) : t)
                      ? (i = "")
                      : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                        (i = E.map(i, function (t) {
                          return null == t ? "" : t + "";
                        })),
                      ((e =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in e &&
                        void 0 !== e.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
                ? (e =
                  E.valHooks[i.type] ||
                  E.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in e &&
                  void 0 !== (n = e.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                    ? n.replace(we, "")
                    : null == n
                      ? ""
                      : n
                : void 0;
          },
        }),
          E.extend({
            valHooks: {
              option: {
                get: function (t) {
                  var e = E.find.attr(t, "value");
                  return null != e ? e : be(E.text(t));
                },
              },
              select: {
                get: function (t) {
                  var e,
                    n,
                    r,
                    i = t.options,
                    o = t.selectedIndex,
                    a = "select-one" === t.type,
                    s = a ? null : [],
                    u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                    ) {
                      if (((e = E(n).val()), a)) return e;
                      s.push(e);
                    }
                  return s;
                },
                set: function (t, e) {
                  for (
                    var n, r, i = t.options, o = E.makeArray(e), a = i.length;
                    a--;

                  )
                    ((r = i[a]).selected =
                      E.inArray(E.valHooks.option.get(r), o) > -1) &&
                      (n = !0);
                  return n || (t.selectedIndex = -1), o;
                },
              },
            },
          }),
          E.each(["radio", "checkbox"], function () {
            (E.valHooks[this] = {
              set: function (t, e) {
                if (Array.isArray(e))
                  return (t.checked = E.inArray(E(t).val(), e) > -1);
              },
            }),
              m.checkOn ||
              (E.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
          }),
          (m.focusin = "onfocusin" in r);
        var Te = /^(?:focusinfocus|focusoutblur)$/,
          Ee = function (t) {
            t.stopPropagation();
          };
        E.extend(E.event, {
          trigger: function (t, e, n, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              h = [n || b],
              g = p.call(t, "type") ? t.type : t,
              m = p.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((a = d = s = n = n || b),
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Te.test(g + E.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (l = g.indexOf(":") < 0 && "on" + g),
                  ((t = t[E.expando]
                    ? t
                    : new E.Event(g, "object" == typeof t && t)).isTrigger = i
                      ? 2
                      : 3),
                  (t.namespace = m.join(".")),
                  (t.rnamespace = t.namespace
                    ? new RegExp(
                      "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = n),
                  (e = null == e ? [t] : E.makeArray(e, [t])),
                  (f = E.event.special[g] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, e)))
            ) {
              if (!i && !f.noBubble && !y(n)) {
                for (
                  u = f.delegateType || g,
                  Te.test(u + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  h.push(a), (s = a);
                s === (n.ownerDocument || b) &&
                  h.push(s.defaultView || s.parentWindow || r);
              }
              for (o = 0; (a = h[o++]) && !t.isPropagationStopped();)
                (d = a),
                  (t.type = o > 1 ? u : f.bindType || g),
                  (c =
                    (Z.get(a, "events") || Object.create(null))[t.type] &&
                    Z.get(a, "handle")) && c.apply(a, e),
                  (c = l && a[l]) &&
                  c.apply &&
                  K(a) &&
                  ((t.result = c.apply(a, e)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = g),
                i ||
                t.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), e)) ||
                !K(n) ||
                (l &&
                  v(n[g]) &&
                  !y(n) &&
                  ((s = n[l]) && (n[l] = null),
                    (E.event.triggered = g),
                    t.isPropagationStopped() && d.addEventListener(g, Ee),
                    n[g](),
                    t.isPropagationStopped() && d.removeEventListener(g, Ee),
                    (E.event.triggered = void 0),
                    s && (n[l] = s))),
                t.result
              );
            }
          },
          simulate: function (t, e, n) {
            var r = E.extend(new E.Event(), n, { type: t, isSimulated: !0 });
            E.event.trigger(r, null, e);
          },
        }),
          E.fn.extend({
            trigger: function (t, e) {
              return this.each(function () {
                E.event.trigger(t, e, this);
              });
            },
            triggerHandler: function (t, e) {
              var n = this[0];
              if (n) return E.event.trigger(t, e, n, !0);
            },
          }),
          m.focusin ||
          E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
              E.event.simulate(e, t.target, E.event.fix(t));
            };
            E.event.special[e] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = Z.access(r, e);
                i || r.addEventListener(t, n, !0),
                  Z.access(r, e, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = Z.access(r, e) - 1;
                i
                  ? Z.access(r, e, i)
                  : (r.removeEventListener(t, n, !0), Z.remove(r, e));
              },
            };
          });
        var Se = r.location,
          Ce = { guid: Date.now() },
          Ae = /\?/;
        E.parseXML = function (t) {
          var e, n;
          if (!t || "string" != typeof t) return null;
          try {
            e = new r.DOMParser().parseFromString(t, "text/xml");
          } catch (t) { }
          return (
            (n = e && e.getElementsByTagName("parsererror")[0]),
            (e && !n) ||
            E.error(
              "Invalid XML: " +
              (n
                ? E.map(n.childNodes, function (t) {
                  return t.textContent;
                }).join("\n")
                : t)
            ),
            e
          );
        };
        var ke = /\[\]$/,
          Oe = /\r?\n/g,
          De = /^(?:submit|button|image|reset|file)$/i,
          Me = /^(?:input|select|textarea|keygen)/i;
        function Le(t, e, n, r) {
          var i;
          if (Array.isArray(e))
            E.each(e, function (e, i) {
              n || ke.test(t)
                ? r(t, i)
                : Le(
                  t +
                  "[" +
                  ("object" == typeof i && null != i ? e : "") +
                  "]",
                  i,
                  n,
                  r
                );
            });
          else if (n || "object" !== w(e)) r(t, e);
          else for (i in e) Le(t + "[" + i + "]", e[i], n, r);
        }
        (E.param = function (t, e) {
          var n,
            r = [],
            i = function (t, e) {
              var n = v(e) ? e() : e;
              r[r.length] =
                encodeURIComponent(t) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == t) return "";
          if (Array.isArray(t) || (t.jquery && !E.isPlainObject(t)))
            E.each(t, function () {
              i(this.name, this.value);
            });
          else for (n in t) Le(n, t[n], e, i);
          return r.join("&");
        }),
          E.fn.extend({
            serialize: function () {
              return E.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = E.prop(this, "elements");
                return t ? E.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return (
                    this.name &&
                    !E(this).is(":disabled") &&
                    Me.test(this.nodeName) &&
                    !De.test(t) &&
                    (this.checked || !mt.test(t))
                  );
                })
                .map(function (t, e) {
                  var n = E(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                      ? E.map(n, function (t) {
                        return { name: e.name, value: t.replace(Oe, "\r\n") };
                      })
                      : { name: e.name, value: n.replace(Oe, "\r\n") };
                })
                .get();
            },
          });
        var Pe = /%20/g,
          Ne = /#.*$/,
          qe = /([?&])_=[^&]*/,
          Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          je = /^(?:GET|HEAD)$/,
          Ie = /^\/\//,
          He = {},
          Be = {},
          Fe = "*/".concat("*"),
          ze = b.createElement("a");
        function We(t) {
          return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var r,
              i = 0,
              o = e.toLowerCase().match(I) || [];
            if (v(n))
              for (; (r = o[i++]);)
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                  : (t[r] = t[r] || []).push(n);
          };
        }
        function Ye(t, e, n, r) {
          var i = {},
            o = t === Be;
          function a(s) {
            var u;
            return (
              (i[s] = !0),
              E.each(t[s] || [], function (t, s) {
                var l = s(e, n, r);
                return "string" != typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (e.dataTypes.unshift(l), a(l), !1);
              }),
              u
            );
          }
          return a(e.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function Xe(t, e) {
          var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
          for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
          return r && E.extend(!0, t, r), t;
        }
        (ze.href = Se.href),
          E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Se.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Se.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
              return e ? Xe(Xe(t, E.ajaxSettings), e) : Xe(E.ajaxSettings, t);
            },
            ajaxPrefilter: We(He),
            ajaxTransport: We(Be),
            ajax: function (t, e) {
              "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
              var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p = E.ajaxSetup({}, e),
                h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                m = E.Deferred(),
                v = E.Callbacks("once memory"),
                y = p.statusCode || {},
                _ = {},
                x = {},
                w = "canceled",
                T = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (l) {
                      if (!a)
                        for (a = {}; (e = Re.exec(o));)
                          a[e[1].toLowerCase() + " "] = (
                            a[e[1].toLowerCase() + " "] || []
                          ).concat(e[2]);
                      e = a[t.toLowerCase() + " "];
                    }
                    return null == e ? null : e.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return l ? o : null;
                  },
                  setRequestHeader: function (t, e) {
                    return (
                      null == l &&
                      ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                        (_[t] = e)),
                      this
                    );
                  },
                  overrideMimeType: function (t) {
                    return null == l && (p.mimeType = t), this;
                  },
                  statusCode: function (t) {
                    var e;
                    if (t)
                      if (l) T.always(t[T.status]);
                      else for (e in t) y[e] = [y[e], t[e]];
                    return this;
                  },
                  abort: function (t) {
                    var e = t || w;
                    return n && n.abort(e), S(0, e), this;
                  },
                };
              if (
                (m.promise(T),
                  (p.url = ((t || p.url || Se.href) + "").replace(
                    Ie,
                    Se.protocol + "//"
                  )),
                  (p.type = e.method || e.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == p.crossDomain)
              ) {
                u = b.createElement("a");
                try {
                  (u.href = p.url),
                    (u.href = u.href),
                    (p.crossDomain =
                      ze.protocol + "//" + ze.host !=
                      u.protocol + "//" + u.host);
                } catch (t) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = E.param(p.data, p.traditional)),
                  Ye(He, p, e, T),
                  l)
              )
                return T;
              for (f in ((c = E.event && p.global) &&
                0 == E.active++ &&
                E.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !je.test(p.type)),
                (i = p.url.replace(Ne, "")),
                p.hasContent
                  ? p.data &&
                  p.processData &&
                  0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                  (p.data = p.data.replace(Pe, "+"))
                  : ((d = p.url.slice(i.length)),
                    p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((i += (Ae.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                    ((i = i.replace(qe, "$1")),
                      (d = (Ae.test(i) ? "&" : "?") + "_=" + Ce.guid++ + d)),
                    (p.url = i + d)),
                p.ifModified &&
                (E.lastModified[i] &&
                  T.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  e.contentType) &&
                T.setRequestHeader("Content-Type", p.contentType),
                T.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Fe + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                T.setRequestHeader(f, p.headers[f]);
              if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || l))
                return T.abort();
              if (
                ((w = "abort"),
                  v.add(p.complete),
                  T.done(p.success),
                  T.fail(p.error),
                  (n = Ye(Be, p, e, T)))
              ) {
                if (
                  ((T.readyState = 1), c && g.trigger("ajaxSend", [T, p]), l)
                )
                  return T;
                p.async &&
                  p.timeout > 0 &&
                  (s = r.setTimeout(function () {
                    T.abort("timeout");
                  }, p.timeout));
                try {
                  (l = !1), n.send(_, S);
                } catch (t) {
                  if (l) throw t;
                  S(-1, t);
                }
              } else S(-1, "No Transport");
              function S(t, e, a, u) {
                var f,
                  d,
                  b,
                  _,
                  x,
                  w = e;
                l ||
                  ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = u || ""),
                    (T.readyState = t > 0 ? 4 : 0),
                    (f = (t >= 200 && t < 300) || 304 === t),
                    a &&
                    (_ = (function (t, e, n) {
                      for (
                        var r, i, o, a, s = t.contents, u = t.dataTypes;
                        "*" === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                          (r =
                            t.mimeType ||
                            e.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in s)
                          if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                          }
                      if (u[0] in n) o = u[0];
                      else {
                        for (i in n) {
                          if (!u[0] || t.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                          }
                          a || (a = i);
                        }
                        o = o || a;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(p, T, a)),
                    !f &&
                    E.inArray("script", p.dataTypes) > -1 &&
                    E.inArray("json", p.dataTypes) < 0 &&
                    (p.converters["text script"] = function () { }),
                    (_ = (function (t, e, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = t.dataTypes.slice();
                      if (c[1])
                        for (a in t.converters)
                          l[a.toLowerCase()] = t.converters[a];
                      for (o = c.shift(); o;)
                        if (
                          (t.responseFields[o] && (n[t.responseFields[o]] = e),
                            !u &&
                            r &&
                            t.dataFilter &&
                            (e = t.dataFilter(e, t.dataType)),
                            (u = o),
                            (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                    ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && t.throws) e = a(e);
                              else
                                try {
                                  e = a(e);
                                } catch (t) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? t
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: e };
                    })(p, _, T, f)),
                    f
                      ? (p.ifModified &&
                        ((x = T.getResponseHeader("Last-Modified")) &&
                          (E.lastModified[i] = x),
                          (x = T.getResponseHeader("etag")) && (E.etag[i] = x)),
                        204 === t || "HEAD" === p.type
                          ? (w = "nocontent")
                          : 304 === t
                            ? (w = "notmodified")
                            : ((w = _.state), (d = _.data), (f = !(b = _.error))))
                      : ((b = w),
                        (!t && w) || ((w = "error"), t < 0 && (t = 0))),
                    (T.status = t),
                    (T.statusText = (e || w) + ""),
                    f
                      ? m.resolveWith(h, [d, w, T])
                      : m.rejectWith(h, [T, w, b]),
                    T.statusCode(y),
                    (y = void 0),
                    c &&
                    g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                      T,
                      p,
                      f ? d : b,
                    ]),
                    v.fireWith(h, [T, w]),
                    c &&
                    (g.trigger("ajaxComplete", [T, p]),
                      --E.active || E.event.trigger("ajaxStop")));
              }
              return T;
            },
            getJSON: function (t, e, n) {
              return E.get(t, e, n, "json");
            },
            getScript: function (t, e) {
              return E.get(t, void 0, e, "script");
            },
          }),
          E.each(["get", "post"], function (t, e) {
            E[e] = function (t, n, r, i) {
              return (
                v(n) && ((i = i || r), (r = n), (n = void 0)),
                E.ajax(
                  E.extend(
                    { url: t, type: e, dataType: i, data: n, success: r },
                    E.isPlainObject(t) && t
                  )
                )
              );
            };
          }),
          E.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers)
              "content-type" === e.toLowerCase() &&
                (t.contentType = t.headers[e] || "");
          }),
          (E._evalUrl = function (t, e, n) {
            return E.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () { } },
              dataFilter: function (t) {
                E.globalEval(t, e, n);
              },
            });
          }),
          E.fn.extend({
            wrapAll: function (t) {
              var e;
              return (
                this[0] &&
                (v(t) && (t = t.call(this[0])),
                  (e = E(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild;)
                        t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (t) {
              return v(t)
                ? this.each(function (e) {
                  E(this).wrapInner(t.call(this, e));
                })
                : this.each(function () {
                  var e = E(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
            },
            wrap: function (t) {
              var e = v(t);
              return this.each(function (n) {
                E(this).wrapAll(e ? t.call(this, n) : t);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not("body")
                  .each(function () {
                    E(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (E.expr.pseudos.hidden = function (t) {
            return !E.expr.pseudos.visible(t);
          }),
          (E.expr.pseudos.visible = function (t) {
            return !!(
              t.offsetWidth ||
              t.offsetHeight ||
              t.getClientRects().length
            );
          }),
          (E.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (t) { }
          });
        var $e = { 0: 200, 1223: 204 },
          Ve = E.ajaxSettings.xhr();
        (m.cors = !!Ve && "withCredentials" in Ve),
          (m.ajax = Ve = !!Ve),
          E.ajaxTransport(function (t) {
            var e, n;
            if (m.cors || (Ve && !t.crossDomain))
              return {
                send: function (i, o) {
                  var a,
                    s = t.xhr();
                  if (
                    (s.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                  )
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                  for (a in (t.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(t.mimeType),
                    t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                    s.setRequestHeader(a, i[a]);
                  (e = function (t) {
                    return function () {
                      e &&
                        ((e =
                          n =
                          s.onload =
                          s.onerror =
                          s.onabort =
                          s.ontimeout =
                          s.onreadystatechange =
                          null),
                          "abort" === t
                            ? s.abort()
                            : "error" === t
                              ? "number" != typeof s.status
                                ? o(0, "error")
                                : o(s.status, s.statusText)
                              : o(
                                $e[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                    };
                  }),
                    (s.onload = e()),
                    (n = s.onerror = s.ontimeout = e("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          r.setTimeout(function () {
                            e && n();
                          });
                      }),
                    (e = e("abort"));
                  try {
                    s.send((t.hasContent && t.data) || null);
                  } catch (t) {
                    if (e) throw t;
                  }
                },
                abort: function () {
                  e && e();
                },
              };
          }),
          E.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
          }),
          E.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (t) {
                return E.globalEval(t), t;
              },
            },
          }),
          E.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
              t.crossDomain && (t.type = "GET");
          }),
          E.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs)
              return {
                send: function (r, i) {
                  (e = E("<script>")
                    .attr(t.scriptAttrs || {})
                    .prop({ charset: t.scriptCharset, src: t.url })
                    .on(
                      "load error",
                      (n = function (t) {
                        e.remove(),
                          (n = null),
                          t && i("error" === t.type ? 404 : 200, t.type);
                      })
                    )),
                    b.head.appendChild(e[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Ue,
          Ge = [],
          Ke = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var t = Ge.pop() || E.expando + "_" + Ce.guid++;
            return (this[t] = !0), t;
          },
        }),
          E.ajaxPrefilter("json jsonp", function (t, e, n) {
            var i,
              o,
              a,
              s =
                !1 !== t.jsonp &&
                (Ke.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                  0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                  Ke.test(t.data) &&
                  "data");
            if (s || "jsonp" === t.dataTypes[0])
              return (
                (i = t.jsonpCallback =
                  v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                s
                  ? (t[s] = t[s].replace(Ke, "$1" + i))
                  : !1 !== t.jsonp &&
                  (t.url +=
                    (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                (t.converters["script json"] = function () {
                  return a || E.error(i + " was not called"), a[0];
                }),
                (t.dataTypes[0] = "json"),
                (o = r[i]),
                (r[i] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  void 0 === o ? E(r).removeProp(i) : (r[i] = o),
                    t[i] && ((t.jsonpCallback = e.jsonpCallback), Ge.push(i)),
                    a && v(o) && o(a[0]),
                    (a = o = void 0);
                }),
                "script"
              );
          }),
          (m.createHTMLDocument =
            (((Ue = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
              2 === Ue.childNodes.length)),
          (E.parseHTML = function (t, e, n) {
            return "string" != typeof t
              ? []
              : ("boolean" == typeof e && ((n = e), (e = !1)),
                e ||
                (m.createHTMLDocument
                  ? (((r = (e =
                    b.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = b.location.href),
                    e.head.appendChild(r))
                  : (e = b)),
                (o = !n && []),
                (i = M.exec(t))
                  ? [e.createElement(i[1])]
                  : ((i = Tt([t], e, o)),
                    o && o.length && E(o).remove(),
                    E.merge([], i.childNodes)));
            var r, i, o;
          }),
          (E.fn.load = function (t, e, n) {
            var r,
              i,
              o,
              a = this,
              s = t.indexOf(" ");
            return (
              s > -1 && ((r = be(t.slice(s))), (t = t.slice(0, s))),
              v(e)
                ? ((n = e), (e = void 0))
                : e && "object" == typeof e && (i = "POST"),
              a.length > 0 &&
              E.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e,
              })
                .done(function (t) {
                  (o = arguments),
                    a.html(
                      r ? E("<div>").append(E.parseHTML(t)).find(r) : t
                    );
                })
                .always(
                  n &&
                  function (t, e) {
                    a.each(function () {
                      n.apply(this, o || [t.responseText, e, t]);
                    });
                  }
                ),
              this
            );
          }),
          (E.expr.pseudos.animated = function (t) {
            return E.grep(E.timers, function (e) {
              return t === e.elem;
            }).length;
          }),
          (E.offset = {
            setOffset: function (t, e, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l = E.css(t, "position"),
                c = E(t),
                f = {};
              "static" === l && (t.style.position = "relative"),
                (s = c.offset()),
                (o = E.css(t, "top")),
                (u = E.css(t, "left")),
                ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                  ? ((a = (r = c.position()).top), (i = r.left))
                  : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                v(e) && (e = e.call(t, n, E.extend({}, s))),
                null != e.top && (f.top = e.top - s.top + a),
                null != e.left && (f.left = e.left - s.left + i),
                "using" in e ? e.using.call(t, f) : c.css(f);
            },
          }),
          E.fn.extend({
            offset: function (t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function (e) {
                    E.offset.setOffset(this, t, e);
                  });
              var e,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((e = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                  {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset,
                  })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var t,
                  e,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === E.css(r, "position"))
                  e = r.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                    n = r.ownerDocument,
                    t = r.offsetParent || n.documentElement;
                    t &&
                    (t === n.body || t === n.documentElement) &&
                    "static" === E.css(t, "position");

                  )
                    t = t.parentNode;
                  t &&
                    t !== r &&
                    1 === t.nodeType &&
                    (((i = E(t).offset()).top += E.css(
                      t,
                      "borderTopWidth",
                      !0
                    )),
                      (i.left += E.css(t, "borderLeftWidth", !0)));
                }
                return {
                  top: e.top - i.top - E.css(r, "marginTop", !0),
                  left: e.left - i.left - E.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var t = this.offsetParent;
                  t && "static" === E.css(t, "position");

                )
                  t = t.offsetParent;
                return t || at;
              });
            },
          }),
          E.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, e) {
              var n = "pageYOffset" === e;
              E.fn[t] = function (r) {
                return X(
                  this,
                  function (t, r, i) {
                    var o;
                    if (
                      (y(t)
                        ? (o = t)
                        : 9 === t.nodeType && (o = t.defaultView),
                        void 0 === i)
                    )
                      return o ? o[e] : t[r];
                    o
                      ? o.scrollTo(
                        n ? o.pageXOffset : i,
                        n ? i : o.pageYOffset
                      )
                      : (t[r] = i);
                  },
                  t,
                  r,
                  arguments.length
                );
              };
            }
          ),
          E.each(["top", "left"], function (t, e) {
            E.cssHooks[e] = Ut(m.pixelPosition, function (t, n) {
              if (n)
                return (
                  (n = Vt(t, e)), Bt.test(n) ? E(t).position()[e] + "px" : n
                );
            });
          }),
          E.each({ Height: "height", Width: "width" }, function (t, e) {
            E.each(
              { padding: "inner" + t, content: e, "": "outer" + t },
              function (n, r) {
                E.fn[r] = function (i, o) {
                  var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                  return X(
                    this,
                    function (e, n, i) {
                      var o;
                      return y(e)
                        ? 0 === r.indexOf("outer")
                          ? e["inner" + t]
                          : e.document.documentElement["client" + t]
                        : 9 === e.nodeType
                          ? ((o = e.documentElement),
                            Math.max(
                              e.body["scroll" + t],
                              o["scroll" + t],
                              e.body["offset" + t],
                              o["offset" + t],
                              o["client" + t]
                            ))
                          : void 0 === i
                            ? E.css(e, n, s)
                            : E.style(e, n, i, s);
                    },
                    e,
                    a ? i : void 0,
                    a
                  );
                };
              }
            );
          }),
          E.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (t, e) {
              E.fn[e] = function (t) {
                return this.on(e, t);
              };
            }
          ),
          E.fn.extend({
            bind: function (t, e, n) {
              return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
              return this.off(t, null, e);
            },
            delegate: function (t, e, n, r) {
              return this.on(e, t, n, r);
            },
            undelegate: function (t, e, n) {
              return 1 === arguments.length
                ? this.off(t, "**")
                : this.off(e, t || "**", n);
            },
            hover: function (t, e) {
              return this.mouseenter(t).mouseleave(e || t);
            },
          }),
          E.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (t, e) {
              E.fn[e] = function (t, n) {
                return arguments.length > 0
                  ? this.on(e, null, t, n)
                  : this.trigger(e);
              };
            }
          );
        var Qe = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (E.proxy = function (t, e) {
          var n, r, i;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
            return (
              (r = s.call(arguments, 2)),
              (i = function () {
                return t.apply(e || this, r.concat(s.call(arguments)));
              }),
              (i.guid = t.guid = t.guid || E.guid++),
              i
            );
        }),
          (E.holdReady = function (t) {
            t ? E.readyWait++ : E.ready(!0);
          }),
          (E.isArray = Array.isArray),
          (E.parseJSON = JSON.parse),
          (E.nodeName = D),
          (E.isFunction = v),
          (E.isWindow = y),
          (E.camelCase = G),
          (E.type = w),
          (E.now = Date.now),
          (E.isNumeric = function (t) {
            var e = E.type(t);
            return (
              ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            );
          }),
          (E.trim = function (t) {
            return null == t ? "" : (t + "").replace(Qe, "$1");
          }),
          void 0 ===
          (n = function () {
            return E;
          }.apply(e, [])) || (t.exports = n);
        var Ze = r.jQuery,
          Je = r.$;
        return (
          (E.noConflict = function (t) {
            return (
              r.$ === E && (r.$ = Je),
              t && r.jQuery === E && (r.jQuery = Ze),
              E
            );
          }),
          void 0 === i && (r.jQuery = r.$ = E),
          E
        );
      });
    },
    598: function () {
      var t;
      "undefined" != typeof window &&
        (function (t) {
          "use strict";
          var e = (function () {
            function t() {
              (this._dropEffect = "move"),
                (this._effectAllowed = "all"),
                (this._data = {});
            }
            return (
              Object.defineProperty(t.prototype, "dropEffect", {
                get: function () {
                  return this._dropEffect;
                },
                set: function (t) {
                  this._dropEffect = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "effectAllowed", {
                get: function () {
                  return this._effectAllowed;
                },
                set: function (t) {
                  this._effectAllowed = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "types", {
                get: function () {
                  return Object.keys(this._data);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.clearData = function (t) {
                null != t
                  ? delete this._data[t.toLowerCase()]
                  : (this._data = {});
              }),
              (t.prototype.getData = function (t) {
                return this._data[t.toLowerCase()] || "";
              }),
              (t.prototype.setData = function (t, e) {
                this._data[t.toLowerCase()] = e;
              }),
              (t.prototype.setDragImage = function (t, e, r) {
                var i = n._instance;
                (i._imgCustom = t), (i._imgOffset = { x: e, y: r });
              }),
              t
            );
          })();
          t.DataTransfer = e;
          var n = (function () {
            function t() {
              if (((this._lastClick = 0), t._instance))
                throw "DragDropTouch instance already created.";
              var e = !1;
              if (
                (document.addEventListener("test", function () { }, {
                  get passive() {
                    return (e = !0), !0;
                  },
                }),
                  navigator.maxTouchPoints)
              ) {
                var n = document,
                  r = this._touchstart.bind(this),
                  i = this._touchmove.bind(this),
                  o = this._touchend.bind(this),
                  a = !!e && { passive: !1, capture: !1 };
                n.addEventListener("touchstart", r, a),
                  n.addEventListener("touchmove", i, a),
                  n.addEventListener("touchend", o),
                  n.addEventListener("touchcancel", o);
              }
            }
            return (
              (t.getInstance = function () {
                return t._instance;
              }),
              (t.prototype._touchstart = function (e) {
                var n = this;
                if (this._shouldHandle(e)) {
                  if (
                    Date.now() - this._lastClick < t._DBLCLICK &&
                    this._dispatchEvent(e, "dblclick", e.target)
                  )
                    return e.preventDefault(), void this._reset();
                  this._reset();
                  var r = this._closestDraggable(e.target);
                  r &&
                    (this._dispatchEvent(e, "mousemove", e.target) ||
                      this._dispatchEvent(e, "mousedown", e.target) ||
                      ((this._dragSource = r),
                        (this._ptDown = this._getPoint(e)),
                        (this._lastTouch = e),
                        e.preventDefault(),
                        setTimeout(function () {
                          n._dragSource == r &&
                            null == n._img &&
                            n._dispatchEvent(e, "contextmenu", r) &&
                            n._reset();
                        }, t._CTXMENU),
                        t._ISPRESSHOLDMODE &&
                        (this._pressHoldInterval = setTimeout(function () {
                          (n._isDragEnabled = !0), n._touchmove(e);
                        }, t._PRESSHOLDAWAIT))));
                }
              }),
              (t.prototype._touchmove = function (t) {
                if (this._shouldCancelPressHoldMove(t)) this._reset();
                else if (
                  this._shouldHandleMove(t) ||
                  this._shouldHandlePressHoldMove(t)
                ) {
                  var e = this._getTarget(t);
                  if (this._dispatchEvent(t, "mousemove", e))
                    return (this._lastTouch = t), void t.preventDefault();
                  this._dragSource &&
                    !this._img &&
                    this._shouldStartDragging(t) &&
                    (this._dispatchEvent(t, "dragstart", this._dragSource),
                      this._createImage(t),
                      this._dispatchEvent(t, "dragenter", e)),
                    this._img &&
                    ((this._lastTouch = t),
                      t.preventDefault(),
                      this._dispatchEvent(t, "drag", this._dragSource),
                      e != this._lastTarget &&
                      (this._dispatchEvent(
                        this._lastTouch,
                        "dragleave",
                        this._lastTarget
                      ),
                        this._dispatchEvent(t, "dragenter", e),
                        (this._lastTarget = e)),
                      this._moveImage(t),
                      (this._isDropZone = this._dispatchEvent(
                        t,
                        "dragover",
                        e
                      )));
                }
              }),
              (t.prototype._touchend = function (t) {
                if (this._shouldHandle(t)) {
                  if (
                    this._dispatchEvent(this._lastTouch, "mouseup", t.target)
                  )
                    return void t.preventDefault();
                  this._img ||
                    ((this._dragSource = null),
                      this._dispatchEvent(this._lastTouch, "click", t.target),
                      (this._lastClick = Date.now())),
                    this._destroyImage(),
                    this._dragSource &&
                    (t.type.indexOf("cancel") < 0 &&
                      this._isDropZone &&
                      this._dispatchEvent(
                        this._lastTouch,
                        "drop",
                        this._lastTarget
                      ),
                      this._dispatchEvent(
                        this._lastTouch,
                        "dragend",
                        this._dragSource
                      ),
                      this._reset());
                }
              }),
              (t.prototype._shouldHandle = function (t) {
                return (
                  t &&
                  !t.defaultPrevented &&
                  t.touches &&
                  t.touches.length < 2
                );
              }),
              (t.prototype._shouldHandleMove = function (e) {
                return !t._ISPRESSHOLDMODE && this._shouldHandle(e);
              }),
              (t.prototype._shouldHandlePressHoldMove = function (e) {
                return (
                  t._ISPRESSHOLDMODE &&
                  this._isDragEnabled &&
                  e &&
                  e.touches &&
                  e.touches.length
                );
              }),
              (t.prototype._shouldCancelPressHoldMove = function (e) {
                return (
                  t._ISPRESSHOLDMODE &&
                  !this._isDragEnabled &&
                  this._getDelta(e) > t._PRESSHOLDMARGIN
                );
              }),
              (t.prototype._shouldStartDragging = function (e) {
                var n = this._getDelta(e);
                return (
                  n > t._THRESHOLD ||
                  (t._ISPRESSHOLDMODE && n >= t._PRESSHOLDTHRESHOLD)
                );
              }),
              (t.prototype._reset = function () {
                this._destroyImage(),
                  (this._dragSource = null),
                  (this._lastTouch = null),
                  (this._lastTarget = null),
                  (this._ptDown = null),
                  (this._isDragEnabled = !1),
                  (this._isDropZone = !1),
                  (this._dataTransfer = new e()),
                  clearInterval(this._pressHoldInterval);
              }),
              (t.prototype._getPoint = function (t, e) {
                return (
                  t && t.touches && (t = t.touches[0]),
                  { x: e ? t.pageX : t.clientX, y: e ? t.pageY : t.clientY }
                );
              }),
              (t.prototype._getDelta = function (e) {
                if (t._ISPRESSHOLDMODE && !this._ptDown) return 0;
                var n = this._getPoint(e);
                return (
                  Math.abs(n.x - this._ptDown.x) +
                  Math.abs(n.y - this._ptDown.y)
                );
              }),
              (t.prototype._getTarget = function (t) {
                for (
                  var e = this._getPoint(t),
                  n = document.elementFromPoint(e.x, e.y);
                  n && "none" == getComputedStyle(n).pointerEvents;

                )
                  n = n.parentElement;
                return n;
              }),
              (t.prototype._createImage = function (e) {
                this._img && this._destroyImage();
                var n = this._imgCustom || this._dragSource;
                if (
                  ((this._img = n.cloneNode(!0)),
                    this._copyStyle(n, this._img),
                    (this._img.style.top = this._img.style.left = "-9999px"),
                    !this._imgCustom)
                ) {
                  var r = n.getBoundingClientRect(),
                    i = this._getPoint(e);
                  (this._imgOffset = { x: i.x - r.left, y: i.y - r.top }),
                    (this._img.style.opacity = t._OPACITY.toString());
                }
                this._moveImage(e), document.body.appendChild(this._img);
              }),
              (t.prototype._destroyImage = function () {
                this._img &&
                  this._img.parentElement &&
                  this._img.parentElement.removeChild(this._img),
                  (this._img = null),
                  (this._imgCustom = null);
              }),
              (t.prototype._moveImage = function (t) {
                var e = this;
                requestAnimationFrame(function () {
                  if (e._img) {
                    var n = e._getPoint(t, !0),
                      r = e._img.style;
                    (r.position = "absolute"),
                      (r.pointerEvents = "none"),
                      (r.zIndex = "999999"),
                      (r.left = Math.round(n.x - e._imgOffset.x) + "px"),
                      (r.top = Math.round(n.y - e._imgOffset.y) + "px");
                  }
                });
              }),
              (t.prototype._copyProps = function (t, e, n) {
                for (var r = 0; r < n.length; r++) {
                  var i = n[r];
                  t[i] = e[i];
                }
              }),
              (t.prototype._copyStyle = function (e, n) {
                if (
                  (t._rmvAtts.forEach(function (t) {
                    n.removeAttribute(t);
                  }),
                    e instanceof HTMLCanvasElement)
                ) {
                  var r = e,
                    i = n;
                  (i.width = r.width),
                    (i.height = r.height),
                    i.getContext("2d").drawImage(r, 0, 0);
                }
                for (var o = getComputedStyle(e), a = 0; a < o.length; a++) {
                  var s = o[a];
                  s.indexOf("transition") < 0 && (n.style[s] = o[s]);
                }
                n.style.pointerEvents = "none";
                for (a = 0; a < e.children.length; a++)
                  this._copyStyle(e.children[a], n.children[a]);
              }),
              (t.prototype._dispatchEvent = function (e, n, r) {
                if (e && r) {
                  var i = document.createEvent("Event"),
                    o = e.touches ? e.touches[0] : e;
                  return (
                    i.initEvent(n, !0, !0),
                    (i.button = 0),
                    (i.which = i.buttons = 1),
                    this._copyProps(i, e, t._kbdProps),
                    this._copyProps(i, o, t._ptProps),
                    (i.dataTransfer = this._dataTransfer),
                    r.dispatchEvent(i),
                    i.defaultPrevented
                  );
                }
                return !1;
              }),
              (t.prototype._closestDraggable = function (t) {
                for (; t; t = t.parentElement)
                  if (t.hasAttribute("draggable") && t.draggable) return t;
                return null;
              }),
              t
            );
          })();
          (n._instance = new n()),
            (n._THRESHOLD = 5),
            (n._OPACITY = 0.5),
            (n._DBLCLICK = 500),
            (n._CTXMENU = 900),
            (n._ISPRESSHOLDMODE = !1),
            (n._PRESSHOLDAWAIT = 400),
            (n._PRESSHOLDMARGIN = 25),
            (n._PRESSHOLDTHRESHOLD = 0),
            (n._rmvAtts = "id,class,style,draggable".split(",")),
            (n._kbdProps = "altKey,ctrlKey,metaKey,shiftKey".split(",")),
            (n._ptProps =
              "pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY".split(
                ","
              )),
            (t.DragDropTouch = n);
        })(t || (t = {}));
    },
  },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
          return t.default;
        }
        : function () {
          return t;
        };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      "use strict";
      var t = n(521),
        e = n.n(t),
        r = n(546),
        i = n.n(r),
        o = n(664),
        a = n.n(o),
        s = n(749),
        u = n.n(s),
        l = (n(598), n(771)),
        c = n.n(l);
      function f(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function d(t) {
        return t instanceof f(t).Element || t instanceof Element;
      }
      function p(t) {
        return t instanceof f(t).HTMLElement || t instanceof HTMLElement;
      }
      function h(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof f(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      var g = Math.max,
        m = Math.min,
        v = Math.round;
      function y() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
            .map(function (t) {
              return t.brand + "/" + t.version;
            })
            .join(" ")
          : navigator.userAgent;
      }
      function b() {
        return !/^((?!chrome|android).)*safari/i.test(y());
      }
      function _(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var r = t.getBoundingClientRect(),
          i = 1,
          o = 1;
        e &&
          p(t) &&
          ((i = (t.offsetWidth > 0 && v(r.width) / t.offsetWidth) || 1),
            (o = (t.offsetHeight > 0 && v(r.height) / t.offsetHeight) || 1));
        var a = (d(t) ? f(t) : window).visualViewport,
          s = !b() && n,
          u = (r.left + (s && a ? a.offsetLeft : 0)) / i,
          l = (r.top + (s && a ? a.offsetTop : 0)) / o,
          c = r.width / i,
          h = r.height / o;
        return {
          width: c,
          height: h,
          top: l,
          right: u + c,
          bottom: l + h,
          left: u,
          x: u,
          y: l,
        };
      }
      function x(t) {
        var e = f(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function w(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function T(t) {
        return ((d(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function E(t) {
        return _(T(t)).left + x(t).scrollLeft;
      }
      function S(t) {
        return f(t).getComputedStyle(t);
      }
      function C(t) {
        var e = S(t),
          n = e.overflow,
          r = e.overflowX,
          i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r);
      }
      function A(t, e, n) {
        void 0 === n && (n = !1);
        var r,
          i,
          o = p(e),
          a =
            p(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                n = v(e.width) / t.offsetWidth || 1,
                r = v(e.height) / t.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(e),
          s = T(e),
          u = _(t, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (o || (!o && !n)) &&
          (("body" !== w(e) || C(s)) &&
            (l =
              (r = e) !== f(r) && p(r)
                ? { scrollLeft: (i = r).scrollLeft, scrollTop: i.scrollTop }
                : x(r)),
            p(e)
              ? (((c = _(e, !0)).x += e.clientLeft), (c.y += e.clientTop))
              : s && (c.x = E(s))),
          {
            x: u.left + l.scrollLeft - c.x,
            y: u.top + l.scrollTop - c.y,
            width: u.width,
            height: u.height,
          }
        );
      }
      function k(t) {
        var e = _(t),
          n = t.offsetWidth,
          r = t.offsetHeight;
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - r) <= 1 && (r = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
        );
      }
      function O(t) {
        return "html" === w(t)
          ? t
          : t.assignedSlot || t.parentNode || (h(t) ? t.host : null) || T(t);
      }
      function D(t) {
        return ["html", "body", "#document"].indexOf(w(t)) >= 0
          ? t.ownerDocument.body
          : p(t) && C(t)
            ? t
            : D(O(t));
      }
      function M(t, e) {
        var n;
        void 0 === e && (e = []);
        var r = D(t),
          i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
          o = f(r),
          a = i ? [o].concat(o.visualViewport || [], C(r) ? r : []) : r,
          s = e.concat(a);
        return i ? s : s.concat(M(O(a)));
      }
      function L(t) {
        return ["table", "td", "th"].indexOf(w(t)) >= 0;
      }
      function P(t) {
        return p(t) && "fixed" !== S(t).position ? t.offsetParent : null;
      }
      function N(t) {
        for (var e = f(t), n = P(t); n && L(n) && "static" === S(n).position;)
          n = P(n);
        return n &&
          ("html" === w(n) || ("body" === w(n) && "static" === S(n).position))
          ? e
          : n ||
          (function (t) {
            var e = /firefox/i.test(y());
            if (/Trident/i.test(y()) && p(t) && "fixed" === S(t).position)
              return null;
            var n = O(t);
            for (
              h(n) && (n = n.host);
              p(n) && ["html", "body"].indexOf(w(n)) < 0;

            ) {
              var r = S(n);
              if (
                "none" !== r.transform ||
                "none" !== r.perspective ||
                "paint" === r.contain ||
                -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                (e && "filter" === r.willChange) ||
                (e && r.filter && "none" !== r.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(t) ||
          e;
      }
      var q = "top",
        R = "bottom",
        j = "right",
        I = "left",
        H = "auto",
        B = [q, R, j, I],
        F = "start",
        z = "end",
        W = "clippingParents",
        Y = "viewport",
        X = "popper",
        $ = "reference",
        V = B.reduce(function (t, e) {
          return t.concat([e + "-" + F, e + "-" + z]);
        }, []),
        U = [].concat(B, [H]).reduce(function (t, e) {
          return t.concat([e, e + "-" + F, e + "-" + z]);
        }, []),
        G = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function K(t) {
        var e = new Map(),
          n = new Set(),
          r = [];
        function i(t) {
          n.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!n.has(t)) {
                  var r = e.get(t);
                  r && i(r);
                }
              }),
            r.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            n.has(t.name) || i(t);
          }),
          r
        );
      }
      var Q = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Z() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function J(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.defaultModifiers,
          r = void 0 === n ? [] : n,
          i = e.defaultOptions,
          o = void 0 === i ? Q : i;
        return function (t, e, n) {
          void 0 === n && (n = o);
          var i,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Q, o),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            u = [],
            l = !1,
            c = {
              state: s,
              setOptions: function (n) {
                var i = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, o, s.options, i)),
                  (s.scrollParents = {
                    reference: d(t)
                      ? M(t)
                      : t.contextElement
                        ? M(t.contextElement)
                        : [],
                    popper: M(e),
                  });
                var a = (function (t) {
                  var e = K(t);
                  return G.reduce(function (t, n) {
                    return t.concat(
                      e.filter(function (t) {
                        return t.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (t) {
                    var e = t.reduce(function (t, e) {
                      var n = t[e.name];
                      return (
                        (t[e.name] = n
                          ? Object.assign({}, n, e, {
                            options: Object.assign({}, n.options, e.options),
                            data: Object.assign({}, n.data, e.data),
                          })
                          : e),
                        t
                      );
                    }, {});
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  })([].concat(r, s.options.modifiers))
                );
                return (
                  (s.orderedModifiers = a.filter(function (t) {
                    return t.enabled;
                  })),
                  s.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      r = void 0 === n ? {} : n,
                      i = t.effect;
                    if ("function" == typeof i) {
                      var o = i({ state: s, name: e, instance: c, options: r }),
                        a = function () { };
                      u.push(o || a);
                    }
                  }),
                  c.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var t = s.elements,
                    e = t.reference,
                    n = t.popper;
                  if (Z(e, n)) {
                    (s.rects = {
                      reference: A(e, N(n), "fixed" === s.options.strategy),
                      popper: k(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (t) {
                        return (s.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var i = s.orderedModifiers[r],
                          o = i.fn,
                          a = i.options,
                          u = void 0 === a ? {} : a,
                          f = i.name;
                        "function" == typeof o &&
                          (s =
                            o({ state: s, options: u, name: f, instance: c }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((i = function () {
                  return new Promise(function (t) {
                    c.forceUpdate(), t(s);
                  });
                }),
                  function () {
                    return (
                      a ||
                      (a = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (a = void 0), t(i());
                        });
                      })),
                      a
                    );
                  }),
              destroy: function () {
                f(), (l = !0);
              },
            };
          if (!Z(t, e)) return c;
          function f() {
            u.forEach(function (t) {
              return t();
            }),
              (u = []);
          }
          return (
            c.setOptions(n).then(function (t) {
              !l && n.onFirstUpdate && n.onFirstUpdate(t);
            }),
            c
          );
        };
      }
      var tt = { passive: !0 };
      function et(t) {
        return t.split("-")[0];
      }
      function nt(t) {
        return t.split("-")[1];
      }
      function rt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function it(t) {
        var e,
          n = t.reference,
          r = t.element,
          i = t.placement,
          o = i ? et(i) : null,
          a = i ? nt(i) : null,
          s = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case q:
            e = { x: s, y: n.y - r.height };
            break;
          case R:
            e = { x: s, y: n.y + n.height };
            break;
          case j:
            e = { x: n.x + n.width, y: u };
            break;
          case I:
            e = { x: n.x - r.width, y: u };
            break;
          default:
            e = { x: n.x, y: n.y };
        }
        var l = o ? rt(o) : null;
        if (null != l) {
          var c = "y" === l ? "height" : "width";
          switch (a) {
            case F:
              e[l] = e[l] - (n[c] / 2 - r[c] / 2);
              break;
            case z:
              e[l] = e[l] + (n[c] / 2 - r[c] / 2);
          }
        }
        return e;
      }
      var ot = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function at(t) {
        var e,
          n = t.popper,
          r = t.popperRect,
          i = t.placement,
          o = t.variation,
          a = t.offsets,
          s = t.position,
          u = t.gpuAcceleration,
          l = t.adaptive,
          c = t.roundOffsets,
          d = t.isFixed,
          p = a.x,
          h = void 0 === p ? 0 : p,
          g = a.y,
          m = void 0 === g ? 0 : g,
          y = "function" == typeof c ? c({ x: h, y: m }) : { x: h, y: m };
        (h = y.x), (m = y.y);
        var b = a.hasOwnProperty("x"),
          _ = a.hasOwnProperty("y"),
          x = I,
          w = q,
          E = window;
        if (l) {
          var C = N(n),
            A = "clientHeight",
            k = "clientWidth";
          if (
            (C === f(n) &&
              "static" !== S((C = T(n))).position &&
              "absolute" === s &&
              ((A = "scrollHeight"), (k = "scrollWidth")),
              i === q || ((i === I || i === j) && o === z))
          )
            (w = R),
              (m -=
                (d && C === E && E.visualViewport
                  ? E.visualViewport.height
                  : C[A]) - r.height),
              (m *= u ? 1 : -1);
          if (i === I || ((i === q || i === R) && o === z))
            (x = j),
              (h -=
                (d && C === E && E.visualViewport
                  ? E.visualViewport.width
                  : C[k]) - r.width),
              (h *= u ? 1 : -1);
        }
        var O,
          D = Object.assign({ position: s }, l && ot),
          M =
            !0 === c
              ? (function (t, e) {
                var n = t.x,
                  r = t.y,
                  i = e.devicePixelRatio || 1;
                return { x: v(n * i) / i || 0, y: v(r * i) / i || 0 };
              })({ x: h, y: m }, f(n))
              : { x: h, y: m };
        return (
          (h = M.x),
          (m = M.y),
          u
            ? Object.assign(
              {},
              D,
              (((O = {})[w] = _ ? "0" : ""),
                (O[x] = b ? "0" : ""),
                (O.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + m + "px)"
                    : "translate3d(" + h + "px, " + m + "px, 0)"),
                O)
            )
            : Object.assign(
              {},
              D,
              (((e = {})[w] = _ ? m + "px" : ""),
                (e[x] = b ? h + "px" : ""),
                (e.transform = ""),
                e)
            )
        );
      }
      var st = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var n = e.styles[t] || {},
              r = e.attributes[t] || {},
              i = e.elements[t];
            p(i) &&
              w(i) &&
              (Object.assign(i.style, n),
                Object.keys(r).forEach(function (t) {
                  var e = r[t];
                  !1 === e
                    ? i.removeAttribute(t)
                    : i.setAttribute(t, !0 === e ? "" : e);
                }));
          });
        },
        effect: function (t) {
          var e = t.state,
            n = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, n.popper),
            (e.styles = n),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var r = e.elements[t],
                  i = e.attributes[t] || {},
                  o = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                  ).reduce(function (t, e) {
                    return (t[e] = ""), t;
                  }, {});
                p(r) &&
                  w(r) &&
                  (Object.assign(r.style, o),
                    Object.keys(i).forEach(function (t) {
                      r.removeAttribute(t);
                    }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      var ut = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            n = t.options,
            r = t.name,
            i = n.offset,
            o = void 0 === i ? [0, 0] : i,
            a = U.reduce(function (t, n) {
              return (
                (t[n] = (function (t, e, n) {
                  var r = et(t),
                    i = [I, q].indexOf(r) >= 0 ? -1 : 1,
                    o =
                      "function" == typeof n
                        ? n(Object.assign({}, e, { placement: t }))
                        : n,
                    a = o[0],
                    s = o[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * i),
                    [I, j].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, e.rects, o)),
                t
              );
            }, {}),
            s = a[e.placement],
            u = s.x,
            l = s.y;
          null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += u),
              (e.modifiersData.popperOffsets.y += l)),
            (e.modifiersData[r] = a);
        },
      },
        lt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ct(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return lt[t];
        });
      }
      var ft = { start: "end", end: "start" };
      function dt(t) {
        return t.replace(/start|end/g, function (t) {
          return ft[t];
        });
      }
      function pt(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && h(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ht(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function gt(t, e, n) {
        return e === Y
          ? ht(
            (function (t, e) {
              var n = f(t),
                r = T(t),
                i = n.visualViewport,
                o = r.clientWidth,
                a = r.clientHeight,
                s = 0,
                u = 0;
              if (i) {
                (o = i.width), (a = i.height);
                var l = b();
                (l || (!l && "fixed" === e)) &&
                  ((s = i.offsetLeft), (u = i.offsetTop));
              }
              return { width: o, height: a, x: s + E(t), y: u };
            })(t, n)
          )
          : d(e)
            ? (function (t, e) {
              var n = _(t, !1, "fixed" === e);
              return (
                (n.top = n.top + t.clientTop),
                (n.left = n.left + t.clientLeft),
                (n.bottom = n.top + t.clientHeight),
                (n.right = n.left + t.clientWidth),
                (n.width = t.clientWidth),
                (n.height = t.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(e, n)
            : ht(
              (function (t) {
                var e,
                  n = T(t),
                  r = x(t),
                  i = null == (e = t.ownerDocument) ? void 0 : e.body,
                  o = g(
                    n.scrollWidth,
                    n.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0
                  ),
                  a = g(
                    n.scrollHeight,
                    n.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0
                  ),
                  s = -r.scrollLeft + E(t),
                  u = -r.scrollTop;
                return (
                  "rtl" === S(i || n).direction &&
                  (s += g(n.clientWidth, i ? i.clientWidth : 0) - o),
                  { width: o, height: a, x: s, y: u }
                );
              })(T(t))
            );
      }
      function mt(t, e, n, r) {
        var i =
          "clippingParents" === e
            ? (function (t) {
              var e = M(O(t)),
                n =
                  ["absolute", "fixed"].indexOf(S(t).position) >= 0 && p(t)
                    ? N(t)
                    : t;
              return d(n)
                ? e.filter(function (t) {
                  return d(t) && pt(t, n) && "body" !== w(t);
                })
                : [];
            })(t)
            : [].concat(e),
          o = [].concat(i, [n]),
          a = o[0],
          s = o.reduce(function (e, n) {
            var i = gt(t, n, r);
            return (
              (e.top = g(i.top, e.top)),
              (e.right = m(i.right, e.right)),
              (e.bottom = m(i.bottom, e.bottom)),
              (e.left = g(i.left, e.left)),
              e
            );
          }, gt(t, a, r));
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function vt(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function yt(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e;
        }, {});
      }
      function bt(t, e) {
        void 0 === e && (e = {});
        var n = e,
          r = n.placement,
          i = void 0 === r ? t.placement : r,
          o = n.strategy,
          a = void 0 === o ? t.strategy : o,
          s = n.boundary,
          u = void 0 === s ? W : s,
          l = n.rootBoundary,
          c = void 0 === l ? Y : l,
          f = n.elementContext,
          p = void 0 === f ? X : f,
          h = n.altBoundary,
          g = void 0 !== h && h,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          y = vt("number" != typeof v ? v : yt(v, B)),
          b = p === X ? $ : X,
          x = t.rects.popper,
          w = t.elements[g ? b : p],
          E = mt(d(w) ? w : w.contextElement || T(t.elements.popper), u, c, a),
          S = _(t.elements.reference),
          C = it({
            reference: S,
            element: x,
            strategy: "absolute",
            placement: i,
          }),
          A = ht(Object.assign({}, x, C)),
          k = p === X ? A : S,
          O = {
            top: E.top - k.top + y.top,
            bottom: k.bottom - E.bottom + y.bottom,
            left: E.left - k.left + y.left,
            right: k.right - E.right + y.right,
          },
          D = t.modifiersData.offset;
        if (p === X && D) {
          var M = D[i];
          Object.keys(O).forEach(function (t) {
            var e = [j, R].indexOf(t) >= 0 ? 1 : -1,
              n = [q, R].indexOf(t) >= 0 ? "y" : "x";
            O[t] += M[n] * e;
          });
        }
        return O;
      }
      function _t(t, e, n) {
        return g(t, m(e, n));
      }
      var xt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            r = t.name,
            i = n.mainAxis,
            o = void 0 === i || i,
            a = n.altAxis,
            s = void 0 !== a && a,
            u = n.boundary,
            l = n.rootBoundary,
            c = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            h = n.tetherOffset,
            v = void 0 === h ? 0 : h,
            y = bt(e, {
              boundary: u,
              rootBoundary: l,
              padding: f,
              altBoundary: c,
            }),
            b = et(e.placement),
            _ = nt(e.placement),
            x = !_,
            w = rt(b),
            T = "x" === w ? "y" : "x",
            E = e.modifiersData.popperOffsets,
            S = e.rects.reference,
            C = e.rects.popper,
            A =
              "function" == typeof v
                ? v(Object.assign({}, e.rects, { placement: e.placement }))
                : v,
            O =
              "number" == typeof A
                ? { mainAxis: A, altAxis: A }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
            D = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            M = { x: 0, y: 0 };
          if (E) {
            if (o) {
              var L,
                P = "y" === w ? q : I,
                H = "y" === w ? R : j,
                B = "y" === w ? "height" : "width",
                z = E[w],
                W = z + y[P],
                Y = z - y[H],
                X = p ? -C[B] / 2 : 0,
                $ = _ === F ? S[B] : C[B],
                V = _ === F ? -C[B] : -S[B],
                U = e.elements.arrow,
                G = p && U ? k(U) : { width: 0, height: 0 },
                K = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Q = K[P],
                Z = K[H],
                J = _t(0, S[B], G[B]),
                tt = x
                  ? S[B] / 2 - X - J - Q - O.mainAxis
                  : $ - J - Q - O.mainAxis,
                it = x
                  ? -S[B] / 2 + X + J + Z + O.mainAxis
                  : V + J + Z + O.mainAxis,
                ot = e.elements.arrow && N(e.elements.arrow),
                at = ot
                  ? "y" === w
                    ? ot.clientTop || 0
                    : ot.clientLeft || 0
                  : 0,
                st = null != (L = null == D ? void 0 : D[w]) ? L : 0,
                ut = z + it - st,
                lt = _t(p ? m(W, z + tt - st - at) : W, z, p ? g(Y, ut) : Y);
              (E[w] = lt), (M[w] = lt - z);
            }
            if (s) {
              var ct,
                ft = "x" === w ? q : I,
                dt = "x" === w ? R : j,
                pt = E[T],
                ht = "y" === T ? "height" : "width",
                gt = pt + y[ft],
                mt = pt - y[dt],
                vt = -1 !== [q, I].indexOf(b),
                yt = null != (ct = null == D ? void 0 : D[T]) ? ct : 0,
                xt = vt ? gt : pt - S[ht] - C[ht] - yt + O.altAxis,
                wt = vt ? pt + S[ht] + C[ht] - yt - O.altAxis : mt,
                Tt =
                  p && vt
                    ? (function (t, e, n) {
                      var r = _t(t, e, n);
                      return r > n ? n : r;
                    })(xt, pt, wt)
                    : _t(p ? xt : gt, pt, p ? wt : mt);
              (E[T] = Tt), (M[T] = Tt - pt);
            }
            e.modifiersData[r] = M;
          }
        },
        requiresIfExists: ["offset"],
      },
        wt = function (t, e) {
          return vt(
            "number" !=
              typeof (t =
                "function" == typeof t
                  ? t(Object.assign({}, e.rects, { placement: e.placement }))
                  : t)
              ? t
              : yt(t, B)
          );
        };
      var Tt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n = t.state,
            r = t.name,
            i = t.options,
            o = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = et(n.placement),
            u = rt(s),
            l = [I, j].indexOf(s) >= 0 ? "height" : "width";
          if (o && a) {
            var c = wt(i.padding, n),
              f = k(o),
              d = "y" === u ? q : I,
              p = "y" === u ? R : j,
              h =
                n.rects.reference[l] +
                n.rects.reference[u] -
                a[u] -
                n.rects.popper[l],
              g = a[u] - n.rects.reference[u],
              m = N(o),
              v = m
                ? "y" === u
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = h / 2 - g / 2,
              b = c[d],
              _ = v - f[l] - c[p],
              x = v / 2 - f[l] / 2 + y,
              w = _t(b, x, _),
              T = u;
            n.modifiersData[r] =
              (((e = {})[T] = w), (e.centerOffset = w - x), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            n = t.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = e.elements.popper.querySelector(r))) &&
            pt(e.elements.popper, r) &&
            (e.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Et(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        );
      }
      function St(t) {
        return [q, j, R, I].some(function (e) {
          return t[e] >= 0;
        });
      }
      var Ct = J({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () { },
            effect: function (t) {
              var e = t.state,
                n = t.instance,
                r = t.options,
                i = r.scroll,
                o = void 0 === i || i,
                a = r.resize,
                s = void 0 === a || a,
                u = f(e.elements.popper),
                l = [].concat(
                  e.scrollParents.reference,
                  e.scrollParents.popper
                );
              return (
                o &&
                l.forEach(function (t) {
                  t.addEventListener("scroll", n.update, tt);
                }),
                s && u.addEventListener("resize", n.update, tt),
                function () {
                  o &&
                    l.forEach(function (t) {
                      t.removeEventListener("scroll", n.update, tt);
                    }),
                    s && u.removeEventListener("resize", n.update, tt);
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
              var e = t.state,
                n = t.name;
              e.modifiersData[n] = it({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
              var e = t.state,
                n = t.options,
                r = n.gpuAcceleration,
                i = void 0 === r || r,
                o = n.adaptive,
                a = void 0 === o || o,
                s = n.roundOffsets,
                u = void 0 === s || s,
                l = {
                  placement: et(e.placement),
                  variation: nt(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: i,
                  isFixed: "fixed" === e.options.strategy,
                };
              null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                  {},
                  e.styles.popper,
                  at(
                    Object.assign({}, l, {
                      offsets: e.modifiersData.popperOffsets,
                      position: e.options.strategy,
                      adaptive: a,
                      roundOffsets: u,
                    })
                  )
                )),
                null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  at(
                    Object.assign({}, l, {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: u,
                    })
                  )
                )),
                (e.attributes.popper = Object.assign(
                  {},
                  e.attributes.popper,
                  { "data-popper-placement": e.placement }
                ));
            },
            data: {},
          },
          st,
          ut,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (t) {
              var e = t.state,
                n = t.options,
                r = t.name;
              if (!e.modifiersData[r]._skip) {
                for (
                  var i = n.mainAxis,
                  o = void 0 === i || i,
                  a = n.altAxis,
                  s = void 0 === a || a,
                  u = n.fallbackPlacements,
                  l = n.padding,
                  c = n.boundary,
                  f = n.rootBoundary,
                  d = n.altBoundary,
                  p = n.flipVariations,
                  h = void 0 === p || p,
                  g = n.allowedAutoPlacements,
                  m = e.options.placement,
                  v = et(m),
                  y =
                    u ||
                    (v === m || !h
                      ? [ct(m)]
                      : (function (t) {
                        if (et(t) === H) return [];
                        var e = ct(t);
                        return [dt(t), e, dt(e)];
                      })(m)),
                  b = [m].concat(y).reduce(function (t, n) {
                    return t.concat(
                      et(n) === H
                        ? (function (t, e) {
                          void 0 === e && (e = {});
                          var n = e,
                            r = n.placement,
                            i = n.boundary,
                            o = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            u = n.allowedAutoPlacements,
                            l = void 0 === u ? U : u,
                            c = nt(r),
                            f = c
                              ? s
                                ? V
                                : V.filter(function (t) {
                                  return nt(t) === c;
                                })
                              : B,
                            d = f.filter(function (t) {
                              return l.indexOf(t) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (e, n) {
                            return (
                              (e[n] = bt(t, {
                                placement: n,
                                boundary: i,
                                rootBoundary: o,
                                padding: a,
                              })[et(n)]),
                              e
                            );
                          }, {});
                          return Object.keys(p).sort(function (t, e) {
                            return p[t] - p[e];
                          });
                        })(e, {
                          placement: n,
                          boundary: c,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: h,
                          allowedAutoPlacements: g,
                        })
                        : n
                    );
                  }, []),
                  _ = e.rects.reference,
                  x = e.rects.popper,
                  w = new Map(),
                  T = !0,
                  E = b[0],
                  S = 0;
                  S < b.length;
                  S++
                ) {
                  var C = b[S],
                    A = et(C),
                    k = nt(C) === F,
                    O = [q, R].indexOf(A) >= 0,
                    D = O ? "width" : "height",
                    M = bt(e, {
                      placement: C,
                      boundary: c,
                      rootBoundary: f,
                      altBoundary: d,
                      padding: l,
                    }),
                    L = O ? (k ? j : I) : k ? R : q;
                  _[D] > x[D] && (L = ct(L));
                  var P = ct(L),
                    N = [];
                  if (
                    (o && N.push(M[A] <= 0),
                      s && N.push(M[L] <= 0, M[P] <= 0),
                      N.every(function (t) {
                        return t;
                      }))
                  ) {
                    (E = C), (T = !1);
                    break;
                  }
                  w.set(C, N);
                }
                if (T)
                  for (
                    var z = function (t) {
                      var e = b.find(function (e) {
                        var n = w.get(e);
                        if (n)
                          return n.slice(0, t).every(function (t) {
                            return t;
                          });
                      });
                      if (e) return (E = e), "break";
                    },
                    W = h ? 3 : 1;
                    W > 0;
                    W--
                  ) {
                    if ("break" === z(W)) break;
                  }
                e.placement !== E &&
                  ((e.modifiersData[r]._skip = !0),
                    (e.placement = E),
                    (e.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          xt,
          Tt,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
              var e = t.state,
                n = t.name,
                r = e.rects.reference,
                i = e.rects.popper,
                o = e.modifiersData.preventOverflow,
                a = bt(e, { elementContext: "reference" }),
                s = bt(e, { altBoundary: !0 }),
                u = Et(a, r),
                l = Et(s, i, o),
                c = St(u),
                f = St(l);
              (e.modifiersData[n] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: l,
                isReferenceHidden: c,
                hasPopperEscaped: f,
              }),
                (e.attributes.popper = Object.assign(
                  {},
                  e.attributes.popper,
                  {
                    "data-popper-reference-hidden": c,
                    "data-popper-escaped": f,
                  }
                ));
            },
          },
        ],
      }),
        At = "tippy-box",
        kt = "tippy-content",
        Ot = "tippy-backdrop",
        Dt = "tippy-arrow",
        Mt = "tippy-svg-arrow",
        Lt = { passive: !0, capture: !0 },
        Pt = function () {
          return document.body;
        };
      function Nt(t, e, n) {
        if (Array.isArray(t)) {
          var r = t[e];
          return null == r ? (Array.isArray(n) ? n[e] : n) : r;
        }
        return t;
      }
      function qt(t, e) {
        var n = {}.toString.call(t);
        return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1;
      }
      function Rt(t, e) {
        return "function" == typeof t ? t.apply(void 0, e) : t;
      }
      function jt(t, e) {
        return 0 === e
          ? t
          : function (r) {
            clearTimeout(n),
              (n = setTimeout(function () {
                t(r);
              }, e));
          };
        var n;
      }
      function It(t) {
        return [].concat(t);
      }
      function Ht(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Bt(t) {
        return t.split("-")[0];
      }
      function Ft(t) {
        return [].slice.call(t);
      }
      function zt(t) {
        return Object.keys(t).reduce(function (e, n) {
          return void 0 !== t[n] && (e[n] = t[n]), e;
        }, {});
      }
      function Wt() {
        return document.createElement("div");
      }
      function Yt(t) {
        return ["Element", "Fragment"].some(function (e) {
          return qt(t, e);
        });
      }
      function Xt(t) {
        return qt(t, "MouseEvent");
      }
      function $t(t) {
        return !(!t || !t._tippy || t._tippy.reference !== t);
      }
      function Vt(t) {
        return Yt(t)
          ? [t]
          : (function (t) {
            return qt(t, "NodeList");
          })(t)
            ? Ft(t)
            : Array.isArray(t)
              ? t
              : Ft(document.querySelectorAll(t));
      }
      function Ut(t, e) {
        t.forEach(function (t) {
          t && (t.style.transitionDuration = e + "ms");
        });
      }
      function Gt(t, e) {
        t.forEach(function (t) {
          t && t.setAttribute("data-state", e);
        });
      }
      function Kt(t) {
        var e,
          n = It(t)[0];
        return null != n && null != (e = n.ownerDocument) && e.body
          ? n.ownerDocument
          : document;
      }
      function Qt(t, e, n) {
        var r = e + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t[r](e, n);
        });
      }
      function Zt(t, e) {
        for (var n = e; n;) {
          var r;
          if (t.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (r = n.getRootNode())
              ? void 0
              : r.host;
        }
        return !1;
      }
      var Jt = { isTouch: !1 },
        te = 0;
      function ee() {
        Jt.isTouch ||
          ((Jt.isTouch = !0),
            window.performance && document.addEventListener("mousemove", ne));
      }
      function ne() {
        var t = performance.now();
        t - te < 20 &&
          ((Jt.isTouch = !1), document.removeEventListener("mousemove", ne)),
          (te = t);
      }
      function re() {
        var t = document.activeElement;
        if ($t(t)) {
          var e = t._tippy;
          t.blur && !e.state.isVisible && t.blur();
        }
      }
      var ie =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var oe = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
        ae = Object.assign(
          {
            appendTo: Pt,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () { },
            onBeforeUpdate: function () { },
            onCreate: function () { },
            onDestroy: function () { },
            onHidden: function () { },
            onHide: function () { },
            onMount: function () { },
            onShow: function () { },
            onShown: function () { },
            onTrigger: function () { },
            onUntrigger: function () { },
            onClickOutside: function () { },
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          oe,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        se = Object.keys(ae);
      function ue(t) {
        var e = (t.plugins || []).reduce(function (e, n) {
          var r,
            i = n.name,
            o = n.defaultValue;
          i && (e[i] = void 0 !== t[i] ? t[i] : null != (r = ae[i]) ? r : o);
          return e;
        }, {});
        return Object.assign({}, t, e);
      }
      function le(t, e) {
        var n = Object.assign(
          {},
          e,
          { content: Rt(e.content, [t]) },
          e.ignoreAttributes
            ? {}
            : (function (t, e) {
              return (
                e
                  ? Object.keys(ue(Object.assign({}, ae, { plugins: e })))
                  : se
              ).reduce(function (e, n) {
                var r = (t.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return e;
                if ("content" === n) e[n] = r;
                else
                  try {
                    e[n] = JSON.parse(r);
                  } catch (t) {
                    e[n] = r;
                  }
                return e;
              }, {});
            })(t, e.plugins)
        );
        return (
          (n.aria = Object.assign({}, ae.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? e.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      var ce = function () {
        return "innerHTML";
      };
      function fe(t, e) {
        t[ce()] = e;
      }
      function de(t) {
        var e = Wt();
        return (
          !0 === t
            ? (e.className = Dt)
            : ((e.className = Mt), Yt(t) ? e.appendChild(t) : fe(e, t)),
          e
        );
      }
      function pe(t, e) {
        Yt(e.content)
          ? (fe(t, ""), t.appendChild(e.content))
          : "function" != typeof e.content &&
          (e.allowHTML ? fe(t, e.content) : (t.textContent = e.content));
      }
      function he(t) {
        var e = t.firstElementChild,
          n = Ft(e.children);
        return {
          box: e,
          content: n.find(function (t) {
            return t.classList.contains(kt);
          }),
          arrow: n.find(function (t) {
            return t.classList.contains(Dt) || t.classList.contains(Mt);
          }),
          backdrop: n.find(function (t) {
            return t.classList.contains(Ot);
          }),
        };
      }
      function ge(t) {
        var e = Wt(),
          n = Wt();
        (n.className = At),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var r = Wt();
        function i(n, r) {
          var i = he(e),
            o = i.box,
            a = i.content,
            s = i.arrow;
          r.theme
            ? o.setAttribute("data-theme", r.theme)
            : o.removeAttribute("data-theme"),
            "string" == typeof r.animation
              ? o.setAttribute("data-animation", r.animation)
              : o.removeAttribute("data-animation"),
            r.inertia
              ? o.setAttribute("data-inertia", "")
              : o.removeAttribute("data-inertia"),
            (o.style.maxWidth =
              "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) ||
            pe(a, t.props),
            r.arrow
              ? s
                ? n.arrow !== r.arrow &&
                (o.removeChild(s), o.appendChild(de(r.arrow)))
                : o.appendChild(de(r.arrow))
              : s && o.removeChild(s);
        }
        return (
          (r.className = kt),
          r.setAttribute("data-state", "hidden"),
          pe(r, t.props),
          e.appendChild(n),
          n.appendChild(r),
          i(t.props, t.props),
          { popper: e, onUpdate: i }
        );
      }
      ge.$$tippy = !0;
      var me = 1,
        ve = [],
        ye = [];
      function be(t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = le(t, Object.assign({}, ae, ue(zt(e)))),
          f = !1,
          d = !1,
          p = !1,
          h = !1,
          g = [],
          m = jt(V, c.interactiveDebounce),
          v = me++,
          y = (l = c.plugins).filter(function (t, e) {
            return l.indexOf(t) === e;
          }),
          b = {
            id: v,
            reference: t,
            popper: Wt(),
            popperInstance: null,
            props: c,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: y,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
            },
            setProps: function (e) {
              0;
              if (b.state.isDestroyed) return;
              P("onBeforeUpdate", [b, e]), X();
              var n = b.props,
                r = le(
                  t,
                  Object.assign({}, n, zt(e), { ignoreAttributes: !0 })
                );
              (b.props = r),
                Y(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                (R(), (m = jt(V, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? It(n.triggerTarget).forEach(function (t) {
                  t.removeAttribute("aria-expanded");
                })
                : r.triggerTarget && t.removeAttribute("aria-expanded");
              q(), L(), w && w(n, r);
              b.popperInstance &&
                (Q(),
                  J().forEach(function (t) {
                    requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
                  }));
              P("onAfterUpdate", [b, e]);
            },
            setContent: function (t) {
              b.setProps({ content: t });
            },
            show: function () {
              0;
              var t = b.state.isVisible,
                e = b.state.isDestroyed,
                n = !b.state.isEnabled,
                r = Jt.isTouch && !b.props.touch,
                i = Nt(b.props.duration, 0, ae.duration);
              if (t || e || n || r) return;
              if (k().hasAttribute("disabled")) return;
              if ((P("onShow", [b], !1), !1 === b.props.onShow(b))) return;
              (b.state.isVisible = !0), A() && (x.style.visibility = "visible");
              L(), B(), b.state.isMounted || (x.style.transition = "none");
              if (A()) {
                var o = D();
                Ut([o.box, o.content], 0);
              }
              (s = function () {
                var t;
                if (b.state.isVisible && !h) {
                  if (
                    ((h = !0),
                      x.offsetHeight,
                      (x.style.transition = b.props.moveTransition),
                      A() && b.props.animation)
                  ) {
                    var e = D(),
                      n = e.box,
                      r = e.content;
                    Ut([n, r], i), Gt([n, r], "visible");
                  }
                  N(),
                    q(),
                    Ht(ye, b),
                    null == (t = b.popperInstance) || t.forceUpdate(),
                    P("onMount", [b]),
                    b.props.animation &&
                    A() &&
                    (function (t, e) {
                      z(t, e);
                    })(i, function () {
                      (b.state.isShown = !0), P("onShown", [b]);
                    });
                }
              }),
                (function () {
                  var t,
                    e = b.props.appendTo,
                    n = k();
                  t =
                    (b.props.interactive && e === Pt) || "parent" === e
                      ? n.parentNode
                      : Rt(e, [n]);
                  t.contains(x) || t.appendChild(x);
                  (b.state.isMounted = !0), Q(), !1;
                })();
            },
            hide: function () {
              0;
              var t = !b.state.isVisible,
                e = b.state.isDestroyed,
                n = !b.state.isEnabled,
                r = Nt(b.props.duration, 1, ae.duration);
              if (t || e || n) return;
              if ((P("onHide", [b], !1), !1 === b.props.onHide(b))) return;
              (b.state.isVisible = !1),
                (b.state.isShown = !1),
                (h = !1),
                (f = !1),
                A() && (x.style.visibility = "hidden");
              if ((R(), F(), L(!0), A())) {
                var i = D(),
                  o = i.box,
                  a = i.content;
                b.props.animation && (Ut([o, a], r), Gt([o, a], "hidden"));
              }
              N(),
                q(),
                b.props.animation
                  ? A() &&
                  (function (t, e) {
                    z(t, function () {
                      !b.state.isVisible &&
                        x.parentNode &&
                        x.parentNode.contains(x) &&
                        e();
                    });
                  })(r, b.unmount)
                  : b.unmount();
            },
            hideWithInteractivity: function (t) {
              0;
              O().addEventListener("mousemove", m), Ht(ve, m), m(t);
            },
            enable: function () {
              b.state.isEnabled = !0;
            },
            disable: function () {
              b.hide(), (b.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              b.state.isVisible && b.hide();
              if (!b.state.isMounted) return;
              Z(),
                J().forEach(function (t) {
                  t._tippy.unmount();
                }),
                x.parentNode && x.parentNode.removeChild(x);
              (ye = ye.filter(function (t) {
                return t !== b;
              })),
                (b.state.isMounted = !1),
                P("onHidden", [b]);
            },
            destroy: function () {
              0;
              if (b.state.isDestroyed) return;
              b.clearDelayTimeouts(),
                b.unmount(),
                X(),
                delete t._tippy,
                (b.state.isDestroyed = !0),
                P("onDestroy", [b]);
            },
          };
        if (!c.render) return b;
        var _ = c.render(b),
          x = _.popper,
          w = _.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + b.id),
          (b.popper = x),
          (t._tippy = b),
          (x._tippy = b);
        var T = y.map(function (t) {
          return t.fn(b);
        }),
          E = t.hasAttribute("aria-expanded");
        return (
          Y(),
          q(),
          L(),
          P("onCreate", [b]),
          c.showOnCreate && tt(),
          x.addEventListener("mouseenter", function () {
            b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function () {
            b.props.interactive &&
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              O().addEventListener("mousemove", m);
          }),
          b
        );
        function S() {
          var t = b.props.touch;
          return Array.isArray(t) ? t : [t, 0];
        }
        function C() {
          return "hold" === S()[0];
        }
        function A() {
          var t;
          return !(null == (t = b.props.render) || !t.$$tippy);
        }
        function k() {
          return u || t;
        }
        function O() {
          var t = k().parentNode;
          return t ? Kt(t) : document;
        }
        function D() {
          return he(x);
        }
        function M(t) {
          return (b.state.isMounted && !b.state.isVisible) ||
            Jt.isTouch ||
            (o && "focus" === o.type)
            ? 0
            : Nt(b.props.delay, t ? 0 : 1, ae.delay);
        }
        function L(t) {
          void 0 === t && (t = !1),
            (x.style.pointerEvents = b.props.interactive && !t ? "" : "none"),
            (x.style.zIndex = "" + b.props.zIndex);
        }
        function P(t, e, n) {
          var r;
          (void 0 === n && (n = !0),
            T.forEach(function (n) {
              n[t] && n[t].apply(n, e);
            }),
            n) && (r = b.props)[t].apply(r, e);
        }
        function N() {
          var e = b.props.aria;
          if (e.content) {
            var n = "aria-" + e.content,
              r = x.id;
            It(b.props.triggerTarget || t).forEach(function (t) {
              var e = t.getAttribute(n);
              if (b.state.isVisible) t.setAttribute(n, e ? e + " " + r : r);
              else {
                var i = e && e.replace(r, "").trim();
                i ? t.setAttribute(n, i) : t.removeAttribute(n);
              }
            });
          }
        }
        function q() {
          !E &&
            b.props.aria.expanded &&
            It(b.props.triggerTarget || t).forEach(function (t) {
              b.props.interactive
                ? t.setAttribute(
                  "aria-expanded",
                  b.state.isVisible && t === k() ? "true" : "false"
                )
                : t.removeAttribute("aria-expanded");
            });
        }
        function R() {
          O().removeEventListener("mousemove", m),
            (ve = ve.filter(function (t) {
              return t !== m;
            }));
        }
        function j(e) {
          if (!Jt.isTouch || (!p && "mousedown" !== e.type)) {
            var n = (e.composedPath && e.composedPath()[0]) || e.target;
            if (!b.props.interactive || !Zt(x, n)) {
              if (
                It(b.props.triggerTarget || t).some(function (t) {
                  return Zt(t, n);
                })
              ) {
                if (Jt.isTouch) return;
                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                  return;
              } else P("onClickOutside", [b, e]);
              !0 === b.props.hideOnClick &&
                (b.clearDelayTimeouts(),
                  b.hide(),
                  (d = !0),
                  setTimeout(function () {
                    d = !1;
                  }),
                  b.state.isMounted || F());
            }
          }
        }
        function I() {
          p = !0;
        }
        function H() {
          p = !1;
        }
        function B() {
          var t = O();
          t.addEventListener("mousedown", j, !0),
            t.addEventListener("touchend", j, Lt),
            t.addEventListener("touchstart", H, Lt),
            t.addEventListener("touchmove", I, Lt);
        }
        function F() {
          var t = O();
          t.removeEventListener("mousedown", j, !0),
            t.removeEventListener("touchend", j, Lt),
            t.removeEventListener("touchstart", H, Lt),
            t.removeEventListener("touchmove", I, Lt);
        }
        function z(t, e) {
          var n = D().box;
          function r(t) {
            t.target === n && (Qt(n, "remove", r), e());
          }
          if (0 === t) return e();
          Qt(n, "remove", a), Qt(n, "add", r), (a = r);
        }
        function W(e, n, r) {
          void 0 === r && (r = !1),
            It(b.props.triggerTarget || t).forEach(function (t) {
              t.addEventListener(e, n, r),
                g.push({ node: t, eventType: e, handler: n, options: r });
            });
        }
        function Y() {
          var t;
          C() &&
            (W("touchstart", $, { passive: !0 }),
              W("touchend", U, { passive: !0 })),
            ((t = b.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
              function (t) {
                if ("manual" !== t)
                  switch ((W(t, $), t)) {
                    case "mouseenter":
                      W("mouseleave", U);
                      break;
                    case "focus":
                      W(ie ? "focusout" : "blur", G);
                      break;
                    case "focusin":
                      W("focusout", G);
                  }
              }
            );
        }
        function X() {
          g.forEach(function (t) {
            var e = t.node,
              n = t.eventType,
              r = t.handler,
              i = t.options;
            e.removeEventListener(n, r, i);
          }),
            (g = []);
        }
        function $(t) {
          var e,
            n = !1;
          if (b.state.isEnabled && !K(t) && !d) {
            var r = "focus" === (null == (e = o) ? void 0 : e.type);
            (o = t),
              (u = t.currentTarget),
              q(),
              !b.state.isVisible &&
              Xt(t) &&
              ve.forEach(function (e) {
                return e(t);
              }),
              "click" === t.type &&
                (b.props.trigger.indexOf("mouseenter") < 0 || f) &&
                !1 !== b.props.hideOnClick &&
                b.state.isVisible
                ? (n = !0)
                : tt(t),
              "click" === t.type && (f = !n),
              n && !r && et(t);
          }
        }
        function V(t) {
          var e = t.target,
            n = k().contains(e) || x.contains(e);
          if ("mousemove" !== t.type || !n) {
            var r = J()
              .concat(x)
              .map(function (t) {
                var e,
                  n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                return n
                  ? {
                    popperRect: t.getBoundingClientRect(),
                    popperState: n,
                    props: c,
                  }
                  : null;
              })
              .filter(Boolean);
            (function (t, e) {
              var n = e.clientX,
                r = e.clientY;
              return t.every(function (t) {
                var e = t.popperRect,
                  i = t.popperState,
                  o = t.props.interactiveBorder,
                  a = Bt(i.placement),
                  s = i.modifiersData.offset;
                if (!s) return !0;
                var u = "bottom" === a ? s.top.y : 0,
                  l = "top" === a ? s.bottom.y : 0,
                  c = "right" === a ? s.left.x : 0,
                  f = "left" === a ? s.right.x : 0,
                  d = e.top - r + u > o,
                  p = r - e.bottom - l > o,
                  h = e.left - n + c > o,
                  g = n - e.right - f > o;
                return d || p || h || g;
              });
            })(r, t) && (R(), et(t));
          }
        }
        function U(t) {
          K(t) ||
            (b.props.trigger.indexOf("click") >= 0 && f) ||
            (b.props.interactive ? b.hideWithInteractivity(t) : et(t));
        }
        function G(t) {
          (b.props.trigger.indexOf("focusin") < 0 && t.target !== k()) ||
            (b.props.interactive &&
              t.relatedTarget &&
              x.contains(t.relatedTarget)) ||
            et(t);
        }
        function K(t) {
          return !!Jt.isTouch && C() !== t.type.indexOf("touch") >= 0;
        }
        function Q() {
          Z();
          var e = b.props,
            n = e.popperOptions,
            r = e.placement,
            i = e.offset,
            o = e.getReferenceClientRect,
            a = e.moveTransition,
            u = A() ? he(x).arrow : null,
            l = o
              ? {
                getBoundingClientRect: o,
                contextElement: o.contextElement || k(),
              }
              : t,
            c = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (t) {
                var e = t.state;
                if (A()) {
                  var n = D().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (t) {
                      "placement" === t
                        ? n.setAttribute("data-placement", e.placement)
                        : e.attributes.popper["data-popper-" + t]
                          ? n.setAttribute("data-" + t, "")
                          : n.removeAttribute("data-" + t);
                    }
                  ),
                    (e.attributes.popper = {});
                }
              },
            },
            f = [
              { name: "offset", options: { offset: i } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !a } },
              c,
            ];
          A() &&
            u &&
            f.push({ name: "arrow", options: { element: u, padding: 3 } }),
            f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
            (b.popperInstance = Ct(
              l,
              x,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: s,
                modifiers: f,
              })
            ));
        }
        function Z() {
          b.popperInstance &&
            (b.popperInstance.destroy(), (b.popperInstance = null));
        }
        function J() {
          return Ft(x.querySelectorAll("[data-tippy-root]"));
        }
        function tt(t) {
          b.clearDelayTimeouts(), t && P("onTrigger", [b, t]), B();
          var e = M(!0),
            r = S(),
            i = r[0],
            o = r[1];
          Jt.isTouch && "hold" === i && o && (e = o),
            e
              ? (n = setTimeout(function () {
                b.show();
              }, e))
              : b.show();
        }
        function et(t) {
          if (
            (b.clearDelayTimeouts(),
              P("onUntrigger", [b, t]),
              b.state.isVisible)
          ) {
            if (
              !(
                b.props.trigger.indexOf("mouseenter") >= 0 &&
                b.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(t.type) >= 0 &&
                f
              )
            ) {
              var e = M(!1);
              e
                ? (r = setTimeout(function () {
                  b.state.isVisible && b.hide();
                }, e))
                : (i = requestAnimationFrame(function () {
                  b.hide();
                }));
            }
          } else F();
        }
      }
      function _e(t, e) {
        void 0 === e && (e = {});
        var n = ae.plugins.concat(e.plugins || []);
        document.addEventListener("touchstart", ee, Lt),
          window.addEventListener("blur", re);
        var r = Object.assign({}, e, { plugins: n }),
          i = Vt(t).reduce(function (t, e) {
            var n = e && be(e, r);
            return n && t.push(n), t;
          }, []);
        return Yt(t) ? i[0] : i;
      }
      (_e.defaultProps = ae),
        (_e.setDefaultProps = function (t) {
          Object.keys(t).forEach(function (e) {
            ae[e] = t[e];
          });
        }),
        (_e.currentInput = Jt);
      Object.assign({}, st, {
        effect: function (t) {
          var e = t.state,
            n = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(e.elements.popper.style, n.popper),
            (e.styles = n),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
        },
      });
      _e.setDefaultProps({ render: ge });
      var xe = _e,
        we = n(347),
        Te = n.n(we),
        Ee = n(755),
        Se = n.n(Ee),
        Ce = JSON.parse('{"u2":"equinor-energy-transitions-eu"}');
      e().registerPlugin(i()),
        e().registerPlugin(a()),
        e().registerPlugin(u()),
        e().registerPlugin(Te());
      let Ae,
        ke = e().matchMedia(),
        Oe = 0,
        De = 0;
      const Me = [
        "#15222C",
        "#CDE6F2",
        "#86B3C7",
        "#CDE6F2",
        "#15222C",
        "#CDE6F2",
      ],
        Le = "linear-gradient(90deg, #d2e0e5 0%, #f0f6f9 30%, #f0f6f9 100%)",
        Pe =
          "equinor-energy-transitions" === Ce.u2
            ? [1, [0, 3, 1, 2, 8, 7, 9, 6, 5, 4], [2, 0, 3, 1], 3, 3]
            : [0, [0, 3, 1, 2, 8, 7, 9, 6, 5, 4], [2, 0, 3, 1], 3, 3];
      let Ne = [0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 0], 0, 0],
        qe = { x: 0, y: 0 };
      const Re = 3,
        je = [
          "O processo tradicional de produção de hidrogênio cinza pode ser limpo com a captura e armazenamento de carbono, de modo que as emissões de gases de efeito estufa sejam bloqueadas em vez de serem liberadas no ambiente.",
          "Principal fonte de hidrogênio industrial atualmente, é uma forma de produção altamente poluente, na qual as ligações carbono-hidrogênio do metano no gás natural são quebradas e o carbono é liberado na atmosfera.",
          "A energia nuclear é uma fonte com baixo teor de carbono, que poderia ser usada para alimentar a eletrólise, forma de produção de hidrogênio livre de carbono. Sua produção depende da existência de energia nuclear abundante.",
          "A energia renovável pode ser usada para alimentar a eletrólise, forma de produção de hidrogênio livre de carbono. E ainda permite que fontes renováveis, como a energia eólica, armazenem eletricidade para uso posterior.",
        ];
      let Ie = !0,
        He = !0,
        Be = !0,
        Fe = "",
        ze = "";
      const We = Te().create(
        "custom",
        "M0,0,C0,0.25,0.402,0.404,0.496,0.496,0.602,0.599,1,0.752,1,1"
      ),
        Ye = Te().create(
          "custom",
          "M0,0,C0,0.25,0.402,0.404,0.496,0.496,0.602,0.599,1,0.752,1,1"
        ),
        Xe = [1.05, 0.95];
      (Ae = {
        init: function () {
          (this.navigations = document.querySelector(
            '[data-anim="navigations"]'
          )),
            (this.navigation = document.querySelectorAll(
              '[data-anim="navigation"]'
            )),
            (this.questions = document.querySelectorAll(
              '[data-anim="question"]'
            )),
            (this.answers = document.querySelectorAll('[data-anim="answer"]')),
            this.closeAll(),
            this.nav(),
            this.backgrounds(),
            this.radio(),
            this.sorted(),
            this.bezier(),
            this.tippy(),
            this.inview(),
            this.artAnimate(),
            this.controls(),
            setTimeout(function () {
              const t = document.getElementById("ag-infographic");
              t && t.classList.add("ag-inview"), i().refresh();
            }, 200);
        },
        controls: function () {
          const t = this,
            n = document.querySelector('[data-anim="introbtn"]'),
            r = document.querySelector('[data-anim="restartbtn"]'),
            o = document.querySelector('[data-anim="sharebtn"]');
          function a(n) {
            if (((Oe = n + 1), 4 === n)) {
              let n = "Não pegue pesado com você mesmo!";
              5 === De
                ? (n = "Bom trabalho! Você realmente entende do assunto!")
                : De > 3 && (n = "Not bad!");
              const r = document.querySelector('[data-anim="resultanswers"]'),
                i = document.querySelector('[data-anim="resulttext"]');
              (r.textContent =
                "Você acertou " + De + "/5 perguntas corretamente."),
                (i.textContent = n),
                (ze =
                  "Atingi " +
                  De +
                  "/5 no teste de transição energética. Quanto você consegue marcar?"),
                e().set('[data-anim="result"]', { display: "flex" });
              const o = document.querySelector(
                "[class*='relatedArticlesContainer']"
              );
              o && e().set(o, { display: "flex" }),
                e().set("footer", { display: "block" }),
                t.track("get result", "Resultado: " + De + "/5. " + n);
            } else
              t.track("Next - Question " + (n + 1), ""),
                t.navigation.forEach((t, n) => {
                  e().to(t, {
                    backgroundColor: n <= Oe ? "#EB384A" : "#B6D5E3",
                    duration: 1,
                    ease: "power2",
                  });
                }),
                e().set(t.questions[Oe], { display: "flex" });
            i().refresh(),
              t.scrollTo(
                4 !== n ? t.questions[n + 1] : '[data-anim="result"]',
                1
              );
          }
          n.addEventListener("click", function () {
            (n.disabled = !0), a(-1);
          }),
            t.questions.forEach((n, r) => {
              const o = n.querySelector('[class="ag-button"]');
              o.addEventListener("click", function () {
                (o.disabled = !0),
                  (function (n) {
                    let r = [
                      "Resposta Incorreta<img src='./assets/x-icon.png' style='width: 30px;margin-left:10px;margin-bottom:-3px' />",
                    ],
                      o = [
                        "EXCELENTE!<img src='./assets/check-icon.png' style='width: 32px;margin-left:10px;margin-bottom:-2px' />",
                        "BOM TRABALHO!<img src='./assets/check-icon.png' style='width: 32px;margin-left:10px;margin-bottom:-2px' />",
                      ];
                    if (a(Ne, Pe, n)) {
                      t.answers[n].style.backgroundImage = "none";
                      const screenWidth =
                        window.innerWidth ||
                        document.documentElement.clientWidth;

                      if (screenWidth > 640) {
                        const element1 =
                          t.answers[n].querySelector('[data-id="1-1"]');
                        const element2 =
                          t.answers[n].querySelector('[data-id="1-2"]');
                        if (element1) {
                          element1.style.paddingLeft = "200px";
                        }
                        if (element2) {
                          element2.style.paddingLeft = "200px";
                        }
                      }
                      console.log("adsfdasf");
                      let e = Math.floor(Math.random() * o.length);
                      (t.answers[n].querySelector(
                        '[data-anim="iscorrect"]'
                      ).innerHTML = o[e]),
                        De++;
                    } else {
                      let e = Math.floor(Math.random() * r.length);
                      t.answers[n].querySelector(
                        '[data-anim="iscorrect"]'
                      ).innerHTML = r[e];
                    }
                    function a(t, e, n) {
                      if (
                        t &&
                        e &&
                        t.length &&
                        e.length &&
                        n >= 0 &&
                        n < t.length &&
                        n < e.length
                      )
                        return Array.isArray(t[n]) && Array.isArray(e[n])
                          ? JSON.stringify(t[n]) === JSON.stringify(e[n])
                          : 5 != n
                            ? t[n] === e[n]
                            : e[n] - 5 <= t[n] && t[n] <= e[n] + 5;
                    }
                    const s = t.questions[n].querySelector(
                      '[data-anim="variants"]'
                    );
                    e().set(s, { pointerEvents: "none", opacity: 0.5 }),
                      e().set(t.answers[Oe], { display: "flex" }),
                      i().refresh(),
                      t.scrollTo(t.answers[n], 0),
                      t.track(
                        "Submit - Question " + (n + 1),
                        "Answer " + Ne[n]
                      );
                  })(r);
              });
            }),
            t.answers.forEach((t, e) => {
              const n = t.querySelector('[class="ag-button"]');
              (n.disabled = !0),
                n.addEventListener("click", function () {
                  (n.disabled = !0), a(e);
                });
            }),
            r.addEventListener("click", function () {
              t.navigations.classList.remove("ag-show-nav"),
                t.track("Restart", ""),
                t.scrollTo('[data-anim="intro"]', 2);
            }),
            o.addEventListener("click", function () {
              let e = window.location.href,
                n = ze;
              window.open(
                "http://twitter.com/share?url=" +
                encodeURIComponent(e) +
                "&text=" +
                encodeURIComponent(n),
                "",
                "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
              ),
                t.track("Share", "");
            });
        },
        scrollTo: function (t, n) {
          let r = this;
          const o = window.navigator.userAgent;
          let a = !(!o.match(/iPad/i) && !o.match(/iPhone/i));
          if (a) {
            var s = Se()("html, body");
            s.on(
              "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
              function () {
                s.off(
                  "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove"
                ),
                  s.stop(),
                  u();
              }
            ),
              Se()([document.documentElement, document.body]).animate(
                { scrollTop: Se()(t).offset().top },
                1500,
                "swing",
                function () {
                  s.off(
                    "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove"
                  ),
                    u();
                }
              );
          } else
            e().to(window, {
              duration: Re,
              ease: "power2.inOut",
              scrollTo: {
                y: t,
                autoKill: !a,
                onAutoKill: (t) => {
                  u();
                },
                offsetY: 0,
              },
              onComplete: (t) => {
                u();
              },
            });
          function u() {
            0 === n &&
              (e().set(r.questions[Oe], { filter: "grayscale(1)" }),
                (t.querySelector('[class="ag-button"]').disabled = !1)),
              1 === n && e().set(r.answers[Oe - 1], { filter: "grayscale(1)" }),
              2 === n && r.restart(),
              i().refresh();
          }
        },
        backgrounds: function () {
          const t = document.querySelectorAll('[data-anim="bgintro"]'),
            n = document.querySelector('[data-anim="bggradient"]'),
            r = document.querySelector('[data-anim="bggradient4"]'),
            o = document.querySelector('[data-anim="bgresult"]');
          e().set(n, { background: Le }),
            e().set(r, { autoAlpha: 0 }),
            e()
              .timeline({
                scrollTrigger: {
                  id: "bgintro",
                  trigger: '[data-anim="intro"]',
                  start: () => "center top",
                  end: () => "bottom top",
                  scrub: !0,
                },
              })
              .to(t, { opacity: 0, duration: 1, ease: "power2" }, 0),
            this.questions.forEach((t, n) => {
              ke.add("(min-width: 640px)", () => {
                const r = document.querySelectorAll(`[data-anim="q${n}_q"]`),
                  i = document.querySelectorAll(`[data-anim="q${n}_q_box"]`);
                e().set(i, { display: "none" }),
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `q${n}in`,
                        trigger: t,
                        start: () => "top center",
                        end: () => "bottom bottom",
                        scrub: He,
                        markers: !1,
                      },
                    })
                    .set(i, { display: "block", scale: Xe[0] }, 0)
                    .to(i, { scale: 1, duration: 1, ease: We }, 0)
                    .from(
                      r,
                      { drawSVG: "0% 0% live", duration: 1, ease: We },
                      0
                    ),
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `q${n}out`,
                        trigger: t,
                        start: () => "top top",
                        end: () => "bottom center",
                        scrub: Be,
                        markers: !1,
                      },
                    })
                    .to(
                      r,
                      { drawSVG: "100% 100% live", duration: 1, ease: Ye },
                      0
                    )
                    .to(i, { scale: Xe[1], duration: 1, ease: Ye }, 0)
                    .set(i, { display: "none" }, 1);
              }),
                ke.add("(max-width: 639px)", () => {
                  const r = t.querySelectorAll(`[data-anim="q${n}_q_m"]`);
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `q${n}_m`,
                        trigger: r,
                        start: () => "top bottom",
                        end: () => "top 200px",
                        scrub: Ie,
                        markers: !1,
                      },
                    })
                    .from(
                      r,
                      { drawSVG: "0% 0% live", duration: 1, ease: "power0.in" },
                      0
                    );
                });
            }),
            this.answers.forEach((t, o) => {
              const a = 0 !== o && 2 !== o && 4 !== o ? 1 : 0;
              ke.add("(min-width: 640px)", () => {
                const n = document.querySelectorAll(`[data-anim="q${o}_a"]`),
                  r = document.querySelectorAll(`[data-anim="q${o}_a_box"]`);
                e().set(r, { display: "none" }),
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `a${o}in`,
                        trigger: t,
                        start: () => "top center",
                        end: () => "bottom bottom",
                        scrub: He,
                      },
                    })
                    .set(r, { display: "block", scale: Xe[0] }, 0)
                    .to(r, { scale: 1, duration: 1, ease: We }, 0)
                    .from(
                      n,
                      { drawSVG: "0% 0% live", duration: 1, ease: We },
                      0
                    ),
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `a${o}out`,
                        trigger: t,
                        start: () => "top top",
                        end: () => "bottom center",
                        scrub: Be,
                      },
                    })
                    .to(
                      n,
                      { drawSVG: "100% 100% live", duration: 1, ease: Ye },
                      0
                    )
                    .to(r, { scale: Xe[1], duration: 1, ease: Ye }, 0)
                    .set(r, { display: "none" }, 1);
              }),
                ke.add("(max-width: 639px)", () => {
                  const n = t.querySelectorAll(`[data-anim="q${o}_a_m"]`);
                  e()
                    .timeline({
                      scrollTrigger: {
                        id: `a${o}_m`,
                        trigger: n,
                        start: () =>
                          (function (t) {
                            return 0 == t ||
                              1 == t ||
                              2 == t ||
                              3 == t ||
                              4 == t ||
                              5 == t
                              ? "top bottom"
                              : void 0;
                          })(o),
                        end: () =>
                          (function (t) {
                            return 0 == t || 1 == t
                              ? "bottom bottom"
                              : 2 == t
                                ? "bottom 200px"
                                : 3 == t
                                  ? "bottom 450px"
                                  : 4 == t || 5 == t
                                    ? "bottom bottom"
                                    : void 0;
                          })(o),
                        scrub: Ie,
                      },
                    })
                    .from(
                      n,
                      { drawSVG: "0% 0% live", duration: 1, ease: "power0.in" },
                      0
                    );
                }),
                i().create({
                  id: "bgchange" + o,
                  trigger: t,
                  start: () => "top+=25% bottom",
                  end: () => "bottom-=25% top",
                  scrub: !0,
                  onEnter: () => {
                    o <= Oe &&
                      (e().to(n, {
                        duration: 1,
                        background: `linear-gradient(90deg, ${Me[o]} 0%, ${Me[o]} 30%, ${Me[o]} 100%)`,
                      }),
                        e().set(r, { x: 300 }),
                        e().to(r, { autoAlpha: a, duration: 1 }));
                  },
                  onLeave: () => {
                    o <= Oe &&
                      (e().to(n, { duration: 1, background: Le }),
                        e().to(r, { duration: 1, autoAlpha: 0 }));
                  },
                  onEnterBack: () => {
                    o <= Oe &&
                      (e().to(n, {
                        duration: 1,
                        background: `linear-gradient(90deg, ${Me[o]} 0%, ${Me[o]} 30%, ${Me[o]} 100%)`,
                      }),
                        e().set(r, { x: 300 }),
                        e().to(r, { autoAlpha: a, duration: 1 }));
                  },
                  onLeaveBack: () => {
                    o <= Oe &&
                      (e().to(n, { duration: 1, background: Le }),
                        e().to(r, { duration: 1, autoAlpha: 0 }));
                  },
                });
            }),
            e()
              .timeline({
                scrollTrigger: {
                  id: "bgresult",
                  trigger: '[data-anim="result"]',
                  start: () => "20% bottom",
                  end: () => "bottom bottom",
                  scrub: !0,
                },
              })
              .to(o, { opacity: 1, duration: 1, ease: "power2" }, 0);
        },
        restart: function () {
          (Oe = 0), (De = 0);
          let t = Ne[4];
          (Ne = [0, 0, 0, [0, 1, 2, 3], t, 50]),
            e().set(this.questions, { filter: "grayscale(0)" }),
            e().set(this.answers, { filter: "grayscale(0)" });
          const n = document.querySelectorAll('[data-anim="variants"]');
          e().set(n, { pointerEvents: "auto", opacity: 1 }),
            document
              .querySelectorAll('[data-anim="ag-radio"]')
              .forEach((t, e) => {
                t.checked = !1;
              }),
            (document.querySelector(".ag-list").innerHTML = Fe);

          this.navigation.forEach((t, n) => {
            e().set(t, { backgroundColor: n <= Oe ? "#EB384A" : "#B6D5E3" });
          }),
            this.answers.forEach((t, e) => {
              (t.querySelector('[class="ag-button"]').disabled = !0),
                (function (t) {
                  let e = i().getById(`a${t}in`),
                    n = i().getById(`a${t}out`),
                    r = i().getById(`bgchange${t}`),
                    o = i().getById(`a${t}_m`);
                  e && e.enable(),
                    n && n.enable(),
                    r && r.enable(),
                    o && o.enable();
                })(e);
            }),
            this.questions.forEach((t, e) => {
              !(function (t) {
                let e = i().getById(`q${t}in`),
                  n = i().getById(`q${t}out`),
                  r = i().getById(`q${t}_m`);
                e && e.enable(), n && n.enable(), r && r.enable();
              })(e);
            }),
            (document.querySelector('[data-anim="introbtn"]').disabled = !1);
          let o = i().getById("bgintro"),
            a = i().getById("nav");
          o && o.enable(),
            a && a.enable(),
            e().set('[data-anim="intro"]', { display: "flex" }),
            e().to('[data-anim="bgintro"]', { opacity: 1, duration: 0.5 }),
            e().to('[data-anim="bgresult"]', { opacity: 0, duration: 0.5 }),
            this.closeAll(),
            i().refresh();
        },
        closeAll: function () {
          e().set(this.questions, { display: "none" }),
            e().set(this.questions[0], { display: "flex" }),
            e().set(this.answers, { display: "none" }),
            e().set('[data-anim="result"]', { display: "none" });
          const t = document.querySelector(
            "[class*='relatedArticlesContainer']"
          );
          t && e().set(t, { display: "none" }),
            e().set("footer", { display: "none" });
        },
        artAnimate: function () {
          ke.add("(min-width: 640px)", () => {
            const t = document.querySelector(
              '[data-id="0"][data-anim="answer"]'
            ),
              n = document.querySelector('[data-anim="art0anim"]');
            e()
              .timeline({
                scrollTrigger: {
                  trigger: t,
                  start: () => "top bottom",
                  end: () => "bottom bottom",
                  scrub: !0,
                  markers: !1,
                },
              })
              .from(
                n,
                { opacity: 1, x: 300, duration: 1, ease: "power0.in" },
                0
              );
            const r = document.querySelector(
              '[data-id="2"][data-anim="answer"]'
            ),
              i = document.querySelector('[data-anim="ag-small-map"]'),
              o =
                (document.querySelectorAll('[data-anim="ag-water"]'),
                  document.querySelectorAll('[data-anim="ag-water2"]'));
            e()
              .timeline({
                scrollTrigger: {
                  trigger: r,
                  start: () => "top bottom",
                  end: () => "bottom bottom",
                  scrub: !0,
                  markers: !1,
                },
              })
              .from(
                i,
                {
                  opacity: 1,
                  scale: 0.25,
                  transformOrigin: "center center",
                  duration: 1,
                  ease: "power0.in",
                },
                0
              ),
              e()
                .timeline({
                  scrollTrigger: {
                    trigger: r,
                    start: () => "top bottom",
                    end: () => "bottom top",
                    scrub: !0,
                    markers: !1,
                  },
                })
                .from(
                  o,
                  {
                    opacity: 1,
                    x: -100,
                    transformOrigin: "center center",
                    duration: 1,
                    ease: "power0.in",
                  },
                  0
                );
            const a = document.querySelector(
              '[data-id="4"][data-anim="answer"]'
            ),
              s = document.querySelector('[data-anim="art4anim"]');
            e()
              .timeline({
                scrollTrigger: {
                  trigger: a,
                  start: () => "top bottom",
                  end: () => "bottom bottom",
                  scrub: !0,
                  markers: !1,
                },
              })
              .from(
                s,
                { opacity: 1, x: 300, duration: 1, ease: "power0.in" },
                0
              );
            const u = document.querySelector(
              '[data-id="5"][data-anim="answer"]'
            ),
              l = document.querySelector('[data-anim="art5anim0"]'),
              c = document.querySelector('[data-anim="art5anim1"]');
            e()
              .timeline({
                scrollTrigger: {
                  trigger: u,
                  start: () => "top bottom",
                  end: () => "bottom bottom",
                  scrub: !0,
                  markers: !1,
                },
              })
              .from(
                l,
                {
                  opacity: 1,
                  x: 100,
                  scale: 0.7,
                  duration: 1,
                  ease: "power0.in",
                },
                0
              )
              .from(
                c,
                {
                  opacity: 1,
                  x: -100,
                  scale: 0.7,
                  duration: 1,
                  ease: "power0.in",
                },
                0
              );
          });
        },
        nav: function () {
          let t = this;
          i().create({
            id: "nav",
            trigger: '[data-anim="intro"]',
            start: () => "center top",
            end: () => "bottom top",
            scrub: !0,
            markers: !1,
            onLeave: () => {
              t.navigations.classList.add("ag-show-nav");
            },
            onEnterBack: () => {
              t.navigations.classList.remove("ag-show-nav");
            },
          }),
            this.navigation.forEach((t, n) => {
              e().set(t, { backgroundColor: n <= Oe ? "#EB384A" : "#B6D5E3" });
            });
        },
        tippy: function () {
          xe('[data-anim="ag-tip0"]', {
            content: je[0],
            arrow: !0,
            theme: "type0",
          }),
            xe('[data-anim="ag-tip1"]', {
              content: je[1],
              arrow: !0,
              theme: "type1",
            }),
            xe('[data-anim="ag-tip2"]', {
              content: je[2],
              arrow: !0,
              theme: "type2",
            }),
            xe('[data-anim="ag-tip3"]', {
              content: je[3],
              arrow: !0,
              theme: "type3",
            });
        },
        radio: function () {
          this.questions.forEach((t, e) => {
            const n = t.querySelector('[class="ag-button"]');
            t.querySelectorAll('input[type="radio"]').forEach((t) => {
              t.addEventListener("change", (t) => {
                n.disabled && (n.disabled = !1),
                  (Ne[e] = Number(t.target.value));
              });
            });
          });
        },
        sorted: function () {
          const t = this.questions[1].querySelector('[class="ag-button"]');
          (Fe = document.querySelector(".ag-list").innerHTML),
            c()(".ag-list", {
              forcePlaceholderSize: !0,
              dropTargetContainerClass: "is-drop-target",
              hoverClass: "is-drop-hovered",
            }),
            c()(".ag-list")[0].addEventListener("sortstart", function (e) {
              t.disabled && (t.disabled = !1),
                e.detail.item.classList.add("is-drop-dragging");
            }),
            c()(".ag-list")[0].addEventListener("sortstop", function (t) {
              t.detail.item.classList.remove("is-drop-dragging");
            }),
            c()(".ag-list")[0].addEventListener("sortupdate", function (t) {
              let e = t.detail.origin.items;
              e.forEach((t, n) => {
                (t.querySelector("span").innerHTML = n + 1),
                  (e[n] = Number(t.getAttribute("data-id")));
              }),
                (Ne[1] = e);
            });
        },
        bezier: function () {
          const t = this.questions[2].querySelector('[class="ag-button"]'),
            e = document
              .querySelector('[data-id="2"][data-anim="variants"]')
              .querySelector("svg"),
            n = e.querySelectorAll(".ag-draggable");
          let r,
            i,
            o = -1,
            a = Ne[2];
          function s(e) {
            e.target.classList.contains("ag-draggable") &&
              (t.disabled && (t.disabled = !1),
                (r = e.target),
                (i = c(e, "start")),
                (i.x -= parseFloat(r.getAttributeNS(null, "cx"))),
                (i.y -= parseFloat(r.getAttributeNS(null, "cy"))));
          }
          function u(t) {
            if (r) {
              t.preventDefault();
              let e = c(t, "drag");
              (qe = { x: e.x, y: e.y }),
                r.setAttributeNS(null, "cx", e.x - i.x),
                r.setAttributeNS(null, "cy", e.y - i.y),
                f(r);
            }
          }
          function l(t) {
            if (r) {
              let e = c(t, "end");
              n.forEach(function (t, n, i) {
                if (t != r) {
                  let r = {
                    x: t.getAttributeNS(null, "cx"),
                    y: t.getAttributeNS(null, "cy"),
                  };
                  Math.abs(r.x - e.x) < 50 &&
                    Math.abs(r.y - e.y) < 20 &&
                    (o = n);
                }
              });
              let i = {
                x: 111,
                y: 56 + 46 * Number(r.getAttribute("data-out")),
              };
              if (-1 != o) {
                let t = Number(r.getAttributeNS(null, "data-out")),
                  e = Number(r.getAttributeNS(null, "data-id")),
                  s = Number(n[o].getAttributeNS(null, "data-out"));
                r.setAttributeNS(null, "data-out", s),
                  r.setAttributeNS(null, "cx", n[o].getAttributeNS(null, "cx")),
                  r.setAttributeNS(null, "cy", n[o].getAttributeNS(null, "cy")),
                  f(r),
                  n[o].setAttributeNS(null, "data-out", t),
                  n[o].setAttributeNS(null, "cx", i.x),
                  n[o].setAttributeNS(null, "cy", i.y),
                  f(n[o]),
                  (a[e] = s),
                  (a[o] = t);
              } else
                r.setAttributeNS(null, "cx", i.x),
                  r.setAttributeNS(null, "cy", i.y),
                  f(r);
              (r = null), (Ne[2] = a);
            }
          }
          function c(t, n) {
            let r = e.getScreenCTM(),
              i = {};
            return (
              t.touches && (t = t.touches[0]),
              (i =
                "end" !== n
                  ? { x: (t.clientX - r.e) / r.a, y: (t.clientY - r.f) / r.d }
                  : { x: qe.x, y: qe.y }),
              i
            );
          }
          function f(t) {
            let n = { x: 6, y: 56 + 46 * Number(t.getAttribute("data-id")) },
              r = { x: t.getAttribute("cx"), y: t.getAttribute("cy") },
              i = (r.x - n.x) / 2 + 10,
              o = n.y,
              a = (r.x - n.x) / 2 - 10,
              s = r.y;
            e.querySelector(
              `path[data-id="${Number(t.getAttribute("data-id"))}"]`
            ).setAttribute(
              "d",
              `M${n.x},${n.y} C${i},${o} ${a},${s} ${r.x},${r.y}`
            );
          }
          e.addEventListener("mousedown", s),
            e.addEventListener("mousemove", u),
            e.addEventListener("mouseup", l),
            e.addEventListener("mouseleave", l),
            e.addEventListener("touchstart", s),
            e.addEventListener("touchmove", u),
            e.addEventListener("touchend", l),
            e.addEventListener("touchleave", l),
            e.addEventListener("touchcancel", l),
            n.forEach(function (t, e, n) {
              t.setAttributeNS(null, "data-out", a[e]),
                t.setAttributeNS(null, "cy", 56 + 46 * a[e]),
                f(t);
            });
        },
        inview: function () {
          document.querySelectorAll("[class*='ag-from']").forEach((t) => {
            i().create({
              trigger: t,
              id: "inview",
              start: () => "top bottom",
              onEnter: function () {
                t.classList.contains("ag-inview") ||
                  t.classList.add("ag-inview");
              },
            });
          }),
            document
              .querySelectorAll("[class*='ag-fromfade2']")
              .forEach((t) => {
                i().create({
                  trigger: t,
                  id: "inview",
                  start: () => "top bottom",
                  onEnter: function () {
                    t.classList.contains("ag-inview") ||
                      t.classList.add("ag-inview");
                  },
                  onLeaveBack: function () {
                    t.classList.contains("ag-inview") &&
                      t.classList.remove("ag-inview");
                  },
                });
              });
        },
        track: function (t, e) {
          try {
            window.dataLayer.push({
              event: "customEvent",
              category: "Quiz click",
              action: t,
              label: e,
            });
          } catch (t) {
            console.log("Error from the tracker dataLayer=> ", t);
          }
        },
      }),
        Ae.init();
    })();
})();
