	var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  e = {},
  i = {},
  r = t.parcelRequire5b73;
null == r &&
  (((r = function (t) {
    if (t in e) return e[t].exports;
    if (t in i) {
      var r = i[t];
      delete i[t];
      var n = { id: t, exports: {} };
      return (e[t] = n), r.call(n.exports, n, n.exports), n.exports;
    }
    var s = new Error("Cannot find module '" + t + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (t, e) {
    i[t] = e;
  }),
  (t.parcelRequire5b73 = r));
var n = {};
r.register("6lggo", function (t, e) {
  !(function (e, i) {
    "function" == typeof define && define.amd
      ? define(i)
      : t.exports
      ? (t.exports = i())
      : (e.EvEmitter = i());
  })("undefined" != typeof window ? window : t.exports, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            r = (i[t] = i[t] || []);
          return -1 == r.indexOf(e) && r.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var r = i.indexOf(e);
          return -1 != r && i.splice(r, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var r = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n];
            r && r[s] && (this.off(t, s), delete r[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  });
}),
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : n
      ? (n = e(t, r("6lggo")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : n, function (t, e) {
    var i = t.jQuery,
      r = t.console;
    function n(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var s = Array.prototype.slice;
    function a(t, e, o) {
      if (!(this instanceof a)) return new a(t, e, o);
      var u,
        h = t;
      ("string" == typeof t && (h = document.querySelectorAll(t)), h)
        ? ((this.elements =
            ((u = h),
            Array.isArray(u)
              ? u
              : "object" == typeof u && "number" == typeof u.length
              ? s.call(u)
              : [u])),
          (this.options = n({}, this.options)),
          "function" == typeof e ? (o = e) : n(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          i && (this.jqDeferred = new i.Deferred()),
          setTimeout(this.check.bind(this)))
        : r.error("Bad element for imagesLoaded " + (h || t));
    }
    (a.prototype = Object.create(e.prototype)),
      (a.prototype.options = {}),
      (a.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (a.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && o[e]) {
          for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
            var n = i[r];
            this.addImage(n);
          }
          if ("string" == typeof this.options.background) {
            var s = t.querySelectorAll(this.options.background);
            for (r = 0; r < s.length; r++) {
              var a = s[r];
              this.addElementBackgroundImages(a);
            }
          }
        }
      });
    var o = { 1: !0, 9: !0, 11: !0 };
    function u(t) {
      this.img = t;
    }
    function h(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (a.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage);
            null !== r;

          ) {
            var n = r && r[2];
            n && this.addBackground(n, t), (r = i.exec(e.backgroundImage));
          }
      }),
      (a.prototype.addImage = function (t) {
        var e = new u(t);
        this.images.push(e);
      }),
      (a.prototype.addBackground = function (t, e) {
        var i = new h(t, e);
        this.images.push(i);
      }),
      (a.prototype.check = function () {
        var t = this;
        function e(e, i, r) {
          setTimeout(function () {
            t.progress(e, i, r);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (a.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && r && r.log("progress: " + i, t, e);
      }),
      (a.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (u.prototype = Object.create(e.prototype)),
      (u.prototype.check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (u.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (u.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (u.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (u.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (u.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (h.prototype = Object.create(u.prototype)),
      (h.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (h.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (h.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (a.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((i = e).fn.imagesLoaded = function (t, e) {
            return new a(this, t, e).jqDeferred.promise(i(this));
          });
      }),
      a.makeJQueryPlugin(),
      a
    );
  });
function s(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function a(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.7.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var o,
  u,
  h,
  l,
  f,
  c,
  p,
  d,
  _,
  m,
  g,
  v,
  y,
  w,
  b,
  x,
  T,
  O,
  M,
  D,
  k,
  A,
  E,
  C,
  S,
  P,
  I,
  L,
  R = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" }
  },
  z = { duration: 0.5, overwrite: !1, delay: 0 },
  F = 2 * Math.PI,
  B = F / 4,
  q = 0,
  j = Math.sqrt,
  N = Math.cos,
  U = Math.sin,
  Y = function (t) {
    return "string" == typeof t;
  },
  X = function (t) {
    return "function" == typeof t;
  },
  W = function (t) {
    return "number" == typeof t;
  },
  V = function (t) {
    return void 0 === t;
  },
  Q = function (t) {
    return "object" == typeof t;
  },
  G = function (t) {
    return !1 !== t;
  },
  H = function () {
    return "undefined" != typeof window;
  },
  Z = function (t) {
    return X(t) || Y(t);
  },
  J =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  $ = Array.isArray,
  K = /(?:-?\.?\d|\.)+/gi,
  tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  rt = /[+-]=-?[.\d]+/,
  nt = /[^,'"\[\]\s]+/gi,
  st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
  at = {},
  ot = {},
  ut = function (t) {
    return (ot = It(t, at)) && vi;
  },
  ht = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  lt = function (t, e) {
    return !e && console.warn(t);
  },
  ft = function (t, e) {
    return (t && (at[t] = e) && ot && (ot[t] = e)) || at;
  },
  ct = function () {
    return 0;
  },
  pt = {},
  dt = [],
  _t = {},
  mt = {},
  gt = {},
  vt = 30,
  yt = [],
  wt = "",
  bt = function (t) {
    var e,
      i,
      r = t[0];
    if ((Q(r) || X(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
      for (i = yt.length; i-- && !yt[i].targetTest(r); );
      e = yt[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Ye(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  },
  xt = function (t) {
    return t._gsap || bt(he(t))[0]._gsap;
  },
  Tt = function (t, e, i) {
    return (i = t[e]) && X(i)
      ? t[e]()
      : (V(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  Ot = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  Mt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  Dt = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  kt = function () {
    var t,
      e,
      i = dt.length,
      r = dt.slice(0);
    for (_t = {}, dt.length = 0, t = 0; t < i; t++)
      (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  },
  At = function (t, e, i, r) {
    dt.length && kt(), t.render(e, i, r), dt.length && kt();
  },
  Et = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2
      ? e
      : Y(t)
      ? t.trim()
      : t;
  },
  Ct = function (t) {
    return t;
  },
  St = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Pt = function (t, e) {
    for (var i in e)
      i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
  },
  It = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Lt = function t(e, i) {
    for (var r in i)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (e[r] = Q(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
    return e;
  },
  Rt = function (t, e) {
    var i,
      r = {};
    for (i in t) i in e || (r[i] = t[i]);
    return r;
  },
  zt = function (t) {
    var e = t.parent || u,
      i = t.keyframes ? Pt : St;
    if (G(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Ft = function (t, e, i, r) {
    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  Bt = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  qt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  jt = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Nt = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Ut = function (t) {
    return t._repeat ? Yt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Yt = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  Xt = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Wt = function (t) {
    return (t._end = Mt(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
    ));
  },
  Vt = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = Mt(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Wt(t),
        i._dirty || qt(i, t)),
      t
    );
  },
  Qt = function (t, e) {
    var i;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((i = Xt(t.rawTime(), e)),
        (!e._dur || se(0, e.totalDuration(), i) - e._tTime > 1e-8) &&
          e.render(i, !0)),
      qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -1e-8;
    }
  },
  Gt = function (t, e, i, r) {
    return (
      e.parent && Bt(e),
      (e._start = Mt(
        (W(i) ? i : i || t !== u ? ie(t, i, e) : t._time) + e._delay
      )),
      (e._end = Mt(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function (t, e, i, r, n) {
        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
        var s,
          a = t[r];
        if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[i]), (t[i] = e)),
          e._next ? (e._next._prev = e) : (t[r] = e),
          (e._prev = a),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      $t(e) || (t._recent = e),
      r || Qt(t, e),
      t
    );
  },
  Ht = function (t, e) {
    return (
      (at.ScrollTrigger || ht("scrollTrigger", e)) &&
      at.ScrollTrigger.create(e, t)
    );
  },
  Zt = function (t, e, i, r) {
    return (
      Ze(t, e),
      t._initted
        ? !i &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          p !== Ce.frame
          ? (dt.push(t), (t._lazy = [e, r]), 1)
          : void 0
        : 1
    );
  },
  Jt = function t(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
  },
  $t = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
  Kt = function (t, e, i, r) {
    var n = t._repeat,
      s = Mt(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : Mt(s * (n + 1) + t._rDelay * n)) : s),
      a && !r ? Vt(t, (t._tTime = t._tDur * a)) : t.parent && Wt(t),
      i || qt(t.parent, t),
      t
    );
  },
  te = function (t) {
    return t instanceof We ? qt(t) : Kt(t, t._dur);
  },
  ee = { _start: 0, endTime: ct, totalDuration: ct },
  ie = function t(e, i, r) {
    var n,
      s,
      a,
      o = e.labels,
      u = e._recent || ee,
      h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
    return Y(i) && (isNaN(i) || i in o)
      ? ((s = i.charAt(0)),
        (a = "%" === i.substr(-1)),
        (n = i.indexOf("=")),
        "<" === s || ">" === s
          ? (n >= 0 && (i = i.replace(/=/, "")),
            ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (a ? (n < 0 ? u : r).totalDuration() / 100 : 1))
          : n < 0
          ? (i in o || (o[i] = h), o[i])
          : ((s = parseFloat(i.charAt(n - 1) + i.substr(n + 1))),
            a && r && (s = (s / 100) * ($(r) ? r[0] : r).totalDuration()),
            n > 1 ? t(e, i.substr(0, n - 1), r) + s : h + s))
      : null == i
      ? h
      : +i;
  },
  re = function (t, e, i) {
    var r,
      n,
      s = W(e[1]),
      a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
      o = e[a];
    if ((s && (o.duration = e[1]), (o.parent = i), t)) {
      for (r = o, n = i; n && !("immediateRender" in r); )
        (r = n.vars.defaults || {}), (n = G(n.vars.inherit) && n.parent);
      (o.immediateRender = G(r.immediateRender)),
        t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
    }
    return new ti(e[0], o, e[a + 1]);
  },
  ne = function (t, e) {
    return t || 0 === t ? e(t) : e;
  },
  se = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  ae = function (t) {
    if ("string" != typeof t) return "";
    var e = st.exec(t);
    return e ? t.substr(e.index + e[0].length) : "";
  },
  oe = [].slice,
  ue = function (t, e) {
    return (
      t &&
      Q(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && Q(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  },
  he = function (t, e, i) {
    return !Y(t) || i || (!l && Se())
      ? $(t)
        ? (function (t, e, i) {
            return (
              void 0 === i && (i = []),
              t.forEach(function (t) {
                var r;
                return (Y(t) && !e) || ue(t, 1)
                  ? (r = i).push.apply(r, he(t))
                  : i.push(t);
              }) || i
            );
          })(t, i)
        : ue(t)
        ? oe.call(t, 0)
        : t
        ? [t]
        : []
      : oe.call((e || f).querySelectorAll(t), 0);
  },
  le = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  fe = function (t) {
    if (X(t)) return t;
    var e = Q(t) ? t : { each: t },
      i = Be(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      o = isNaN(r) || a,
      u = e.axis,
      h = r,
      l = r;
    return (
      Y(r)
        ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && o && ((h = r[0]), (l = r[1])),
      function (t, a, f) {
        var c,
          p,
          d,
          _,
          m,
          g,
          v,
          y,
          w,
          b = (f || e).length,
          x = s[b];
        if (!x) {
          if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
            for (
              v = -1e8;
              v < (v = f[w++].getBoundingClientRect().left) && w < b;

            );
            w--;
          }
          for (
            x = s[b] = [],
              c = o ? Math.min(w, b) * h - 0.5 : r % w,
              p = o ? (b * l) / w - 0.5 : (r / w) | 0,
              v = 0,
              y = 1e8,
              g = 0;
            g < b;
            g++
          )
            (d = (g % w) - c),
              (_ = p - ((g / w) | 0)),
              (x[g] = m = u ? Math.abs("y" === u ? _ : d) : j(d * d + _ * _)),
              m > v && (v = m),
              m < y && (y = m);
          "random" === r && le(x),
            (x.max = v - y),
            (x.min = y),
            (x.v = b =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (w > b
                    ? b - 1
                    : u
                    ? "y" === u
                      ? b / w
                      : w
                    : Math.max(w, b / w)) ||
                0) * ("edges" === r ? -1 : 1)),
            (x.b = b < 0 ? n - b : n),
            (x.u = ae(e.amount || e.each) || 0),
            (i = i && b < 0 ? ze(i) : i);
        }
        return (
          (b = (x[t] - x.min) / x.max || 0),
          Mt(x.b + (i ? i(b) : b) * x.v) + x.u
        );
      }
    );
  },
  ce = function (t) {
    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
    return function (i) {
      var r = Math.round(parseFloat(i) / t) * t * e;
      return (r - (r % 1)) / e + (W(i) ? 0 : ae(i));
    };
  },
  pe = function (t, e) {
    var i,
      r,
      n = $(t);
    return (
      !n &&
        Q(t) &&
        ((i = n = t.radius || 1e8),
        t.values
          ? ((t = he(t.values)), (r = !W(t[0])) && (i *= i))
          : (t = ce(t.increment))),
      ne(
        e,
        n
          ? X(t)
            ? function (e) {
                return (r = t(e)), Math.abs(r - e) <= i ? r : e;
              }
            : function (e) {
                for (
                  var n,
                    s,
                    a = parseFloat(r ? e.x : e),
                    o = parseFloat(r ? e.y : 0),
                    u = 1e8,
                    h = 0,
                    l = t.length;
                  l--;

                )
                  (n = r
                    ? (n = t[l].x - a) * n + (s = t[l].y - o) * s
                    : Math.abs(t[l] - a)) < u && ((u = n), (h = l));
                return (
                  (h = !i || u <= i ? t[h] : e),
                  r || h === e || W(e) ? h : h + ae(e)
                );
              }
          : ce(t)
      )
    );
  },
  de = function (t, e, i, r) {
    return ne($(t) ? !e : !0 === i ? ((i = 0), !1) : !r, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (r = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) *
                i *
                r
            ) / r;
    });
  },
  _e = function (t, e, i) {
    return ne(i, function (i) {
      return t[~~e(i)];
    });
  },
  me = function (t) {
    for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
      (r = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (i = t.substr(e + 7, r - e - 7).match(n ? nt : K)),
        (a +=
          t.substr(s, e - s) + de(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
        (s = r + 1);
    return a + t.substr(s, t.length - s);
  },
  ge = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return ne(n, function (e) {
      return i + (((e - t) / s) * a || 0);
    });
  },
  ve = function (t, e, i) {
    var r,
      n,
      s,
      a = t.labels,
      o = 1e8;
    for (r in a)
      (n = a[r] - e) < 0 == !!i &&
        n &&
        o > (n = Math.abs(n)) &&
        ((s = r), (o = n));
    return s;
  },
  ye = function (t, e, i) {
    var r,
      n,
      s = t.vars,
      a = s[e];
    if (a)
      return (
        (r = s[e + "Params"]),
        (n = s.callbackScope || t),
        i && dt.length && kt(),
        r ? a.apply(n, r) : a.call(n)
      );
  },
  we = function (t) {
    return (
      Bt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && ye(t, "onInterrupt"),
      t
    );
  },
  be = function (t) {
    var e = (t = (!t.name && t.default) || t).name,
      i = X(t),
      r =
        e && !i && t.init
          ? function () {
              this._props = [];
            }
          : t,
      n = { init: ct, render: hi, add: Ge, kill: fi, modifier: li, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: si, aliases: {}, register: 0 };
    if ((Se(), t !== r)) {
      if (mt[e]) return;
      St(r, St(Rt(t, n), s)),
        It(r.prototype, It(n, Rt(t, s))),
        (mt[(r.prop = e)] = r),
        t.targetTest && (yt.push(r), (pt[e] = 1)),
        (e =
          ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    ft(e, r), t.register && t.register(vi, r, di);
  },
  xe = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  },
  Te = function (t, e, i) {
    return (
      (255 *
        (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) +
        0.5) |
      0
    );
  },
  Oe = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l,
      f,
      c,
      p = t ? (W(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : xe.black;
    if (!p) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xe[t]))
        p = xe[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            ((r = t.charAt(1)),
            (n = t.charAt(2)),
            (s = t.charAt(3)),
            (t =
              "#" +
              r +
              r +
              n +
              n +
              s +
              s +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
          9 === t.length)
        )
          return [
            (p = parseInt(t.substr(1, 6), 16)) >> 16,
            (p >> 8) & 255,
            255 & p,
            parseInt(t.substr(7), 16) / 255
          ];
        p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
      } else if ("hsl" === t.substr(0, 3))
        if (((p = c = t.match(K)), e)) {
          if (~t.indexOf("="))
            return (p = t.match(tt)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (a = (+p[0] % 360) / 360),
            (o = +p[1] / 100),
            (r =
              2 * (u = +p[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            p.length > 3 && (p[3] *= 1),
            (p[0] = Te(a + 1 / 3, r, n)),
            (p[1] = Te(a, r, n)),
            (p[2] = Te(a - 1 / 3, r, n));
      else p = t.match(K) || xe.transparent;
      p = p.map(Number);
    }
    return (
      e &&
        !c &&
        ((r = p[0] / 255),
        (n = p[1] / 255),
        (s = p[2] / 255),
        (u = ((h = Math.max(r, n, s)) + (l = Math.min(r, n, s))) / 2),
        h === l
          ? (a = o = 0)
          : ((f = h - l),
            (o = u > 0.5 ? f / (2 - h - l) : f / (h + l)),
            (a =
              h === r
                ? (n - s) / f + (n < s ? 6 : 0)
                : h === n
                ? (s - r) / f + 2
                : (r - n) / f + 4),
            (a *= 60)),
        (p[0] = ~~(a + 0.5)),
        (p[1] = ~~(100 * o + 0.5)),
        (p[2] = ~~(100 * u + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  },
  Me = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(ke).forEach(function (t) {
        var n = t.match(et) || [];
        e.push.apply(e, n), i.push((r += n.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  De = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o = "",
      u = (t + o).match(ke),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = Oe(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      i && ((s = Me(t)), (r = i.c).join(o) !== s.c.join(o)))
    )
      for (a = (n = t.replace(ke, "1").split(et)).length - 1; l < a; l++)
        o +=
          n[l] +
          (~r.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (s.length ? s : u.length ? u : i).shift());
    if (!n) for (a = (n = t.split(ke)).length - 1; l < a; l++) o += n[l] + u[l];
    return o + n[a];
  },
  ke = (function () {
    var t,
      e =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in xe) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Ae = /hsl[a]?\(/,
  Ee = function (t) {
    var e,
      i = t.join(" ");
    if (((ke.lastIndex = 0), ke.test(i)))
      return (
        (e = Ae.test(i)),
        (t[1] = De(t[1], e)),
        (t[0] = De(t[0], e, Me(t[1]))),
        !0
      );
  },
  Ce =
    ((x = Date.now),
    (T = 500),
    (O = 33),
    (M = x()),
    (D = M),
    (A = k = 1e3 / 240),
    (C = function t(e) {
      var i,
        r,
        n,
        s,
        a = x() - D,
        o = !0 === e;
      if (
        (a > T && (M += a - O),
        ((i = (n = (D += a) - M) - A) > 0 || o) &&
          ((s = ++y.frame),
          (w = n - 1e3 * y.time),
          (y.time = n /= 1e3),
          (A += i + (i >= k ? 4 : k - i)),
          (r = 1)),
        o || (m = g(t)),
        r)
      )
        for (b = 0; b < E.length; b++) E[b](n, w, s, e);
    }),
    (y = {
      time: 0,
      frame: 0,
      tick: function () {
        C(!0);
      },
      deltaRatio: function (t) {
        return w / (1e3 / (t || 60));
      },
      wake: function () {
        c &&
          (!l &&
            H() &&
            ((h = l = window),
            (f = h.document || {}),
            (at.gsap = vi),
            (h.gsapVersions || (h.gsapVersions = [])).push(vi.version),
            ut(ot || h.GreenSockGlobals || (!h.gsap && h) || {}),
            (v = h.requestAnimationFrame)),
          m && y.sleep(),
          (g =
            v ||
            function (t) {
              return setTimeout(t, (A - 1e3 * y.time + 1) | 0);
            }),
          (_ = 1),
          C(2));
      },
      sleep: function () {
        (v ? h.cancelAnimationFrame : clearTimeout)(m), (_ = 0), (g = ct);
      },
      lagSmoothing: function (t, e) {
        (T = t || 1 / 1e-8), (O = Math.min(e, T, 0));
      },
      fps: function (t) {
        (k = 1e3 / (t || 240)), (A = 1e3 * y.time + k);
      },
      add: function (t) {
        E.indexOf(t) < 0 && E.push(t), Se();
      },
      remove: function (t) {
        var e;
        ~(e = E.indexOf(t)) && E.splice(e, 1) && b >= e && b--;
      },
      _listeners: (E = [])
    })),
  Se = function () {
    return !_ && Ce.wake();
  },
  Pe = {},
  Ie = /^[\d.\-M][\d.\-,\s]/,
  Le = /["']/g,
  Re = function (t) {
    for (
      var e,
        i,
        r,
        n = {},
        s = t.substr(1, t.length - 3).split(":"),
        a = s[0],
        o = 1,
        u = s.length;
      o < u;
      o++
    )
      (i = s[o]),
        (e = o !== u - 1 ? i.lastIndexOf(",") : i.length),
        (r = i.substr(0, e)),
        (n[a] = isNaN(r) ? r.replace(Le, "").trim() : +r),
        (a = i.substr(e + 1).trim());
    return n;
  },
  ze = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Fe = function t(e, i) {
    for (var r, n = e._first; n; )
      n instanceof We
        ? t(n, i)
        : !n.vars.yoyoEase ||
          (n._yoyo && n._repeat) ||
          n._yoyo === i ||
          (n.timeline
            ? t(n.timeline, i)
            : ((r = n._ease),
              (n._ease = n._yEase),
              (n._yEase = r),
              (n._yoyo = i))),
        (n = n._next);
  },
  Be = function (t, e) {
    return (
      (t &&
        (X(t)
          ? t
          : Pe[t] ||
            (function (t) {
              var e,
                i,
                r,
                n,
                s = (t + "").split("("),
                a = Pe[s[0]];
              return a && s.length > 1 && a.config
                ? a.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [Re(s[1])]
                      : ((e = t),
                        (i = e.indexOf("(") + 1),
                        (r = e.indexOf(")")),
                        (n = e.indexOf("(", i)),
                        e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r))
                          .split(",")
                          .map(Et)
                  )
                : Pe._CE && Ie.test(t)
                ? Pe._CE("", t)
                : a;
            })(t))) ||
      e
    );
  },
  qe = function (t, e, i, r) {
    void 0 === i &&
      (i = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === r &&
        (r = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      s = { easeIn: e, easeOut: i, easeInOut: r };
    return (
      Ot(t, function (t) {
        for (var e in ((Pe[t] = at[t] = s), (Pe[(n = t.toLowerCase())] = i), s))
          Pe[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Pe[t + "." + e] = s[e];
      }),
      s
    );
  },
  je = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  },
  Ne = function t(e, i, r) {
    var n = i >= 1 ? i : 1,
      s = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      a = (s / F) * (Math.asin(1 / n) || 0),
      o = function (t) {
        return 1 === t ? 1 : n * Math.pow(2, -10 * t) * U((t - a) * s) + 1;
      },
      u =
        "out" === e
          ? o
          : "in" === e
          ? function (t) {
              return 1 - o(1 - t);
            }
          : je(o);
    return (
      (s = F / s),
      (u.config = function (i, r) {
        return t(e, i, r);
      }),
      u
    );
  },
  Ue = function t(e, i) {
    void 0 === i && (i = 1.70158);
    var r = function (t) {
        return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
      },
      n =
        "out" === e
          ? r
          : "in" === e
          ? function (t) {
              return 1 - r(1 - t);
            }
          : je(r);
    return (
      (n.config = function (i) {
        return t(e, i);
      }),
      n
    );
  };
Ot("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var i = e < 5 ? e + 1 : e;
  qe(
    t + ",Power" + (i - 1),
    e
      ? function (t) {
          return Math.pow(t, i);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, i);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(2 * t, i) / 2
        : 1 - Math.pow(2 * (1 - t), i) / 2;
    }
  );
}),
  (Pe.Linear.easeNone = Pe.none = Pe.Linear.easeIn),
  qe("Elastic", Ne("in"), Ne("out"), Ne()),
  (S = 7.5625),
  (I = 1 / (P = 2.75)),
  qe(
    "Bounce",
    function (t) {
      return 1 - L(1 - t);
    },
    (L = function (t) {
      return t < I
        ? S * t * t
        : t < 0.7272727272727273
        ? S * Math.pow(t - 1.5 / P, 2) + 0.75
        : t < 0.9090909090909092
        ? S * (t -= 2.25 / P) * t + 0.9375
        : S * Math.pow(t - 2.625 / P, 2) + 0.984375;
    })
  ),
  qe("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  qe("Circ", function (t) {
    return -(j(1 - t * t) - 1);
  }),
  qe("Sine", function (t) {
    return 1 === t ? 1 : 1 - N(t * B);
  }),
  qe("Back", Ue("in"), Ue("out"), Ue()),
  (Pe.SteppedEase = Pe.steps = at.SteppedEase = {
    config: function (t, e) {
      void 0 === t && (t = 1);
      var i = 1 / t,
        r = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return (((r * se(0, 0.99999999, t)) | 0) + n) * i;
      };
    }
  }),
  (z.ease = Pe["quad.out"]),
  Ot(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (wt += t + "," + t + "Params,");
    }
  );
var Ye = function (t, e) {
    (this.id = q++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Tt),
      (this.set = e ? e.getSetter : si);
  },
  Xe = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Kt(this, +t.duration, 1, 1),
        (this.data = t.data),
        _ || Ce.wake();
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
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
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
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Se(), !arguments.length)) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
          for (Vt(this, t), !i._dp || i.parent || Qt(i, this); i.parent; )
            i.parent._time !==
              i._start +
                (i._ts >= 0
                  ? i._tTime / i._ts
                  : (i.totalDuration() - i._tTime) / -i._ts) &&
              i.totalTime(i._tTime, !0),
              (i = i.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            Gt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && 1e-8 === Math.abs(this._zTime)) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), At(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ut(this)) %
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
                Ut(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * i, e)
          : this._repeat
          ? Yt(this._tTime, i) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
          jt(this.totalTime(se(-this._delay, this._tDur, e), !0))
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Se(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      1e-8 !== Math.abs(this._zTime) &&
                      (this._tTime -= 1e-8)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e && (e._sort || !this.parent) && Gt(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (G(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Xt(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
          (i = e._start + i / (e._ts || 1)), (e = e._dp);
        return i;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), te(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), te(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(ie(this, t), G(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, G(e));
      }),
      (e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
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
              this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          i = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < this.endTime(!0) - 1e-8
          )
        );
      }),
      (e.eventCallback = function (t, e, i) {
        var r = this.vars;
        return arguments.length > 1
          ? (e
              ? ((r[t] = e),
                i && (r[t + "Params"] = i),
                "onUpdate" === t && (this._onUpdate = e))
              : delete r[t],
            this)
          : r[t];
      }),
      (e.then = function (t) {
        var e = this;
        return new Promise(function (i) {
          var r = X(t) ? t : Ct,
            n = function () {
              var t = e.then;
              (e.then = null),
                X(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                i(r),
                (e.then = t);
            };
          (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
          (!e._tTime && e._ts < 0)
            ? n()
            : (e._prom = n);
        });
      }),
      (e.kill = function () {
        we(this);
      }),
      t
    );
  })();
St(Xe.prototype, {
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
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var We = (function (t) {
  function e(e, i) {
    var r;
    return (
      void 0 === e && (e = {}),
      ((r = t.call(this, e) || this).labels = {}),
      (r.smoothChildTiming = !!e.smoothChildTiming),
      (r.autoRemoveChildren = !!e.autoRemoveChildren),
      (r._sort = G(e.sortChildren)),
      u && Gt(e.parent || u, s(r), i),
      e.reversed && r.reverse(),
      e.paused && r.paused(!0),
      e.scrollTrigger && Ht(s(r), e.scrollTrigger),
      r
    );
  }
  a(e, t);
  var i = e.prototype;
  return (
    (i.to = function (t, e, i) {
      return re(0, arguments, this), this;
    }),
    (i.from = function (t, e, i) {
      return re(1, arguments, this), this;
    }),
    (i.fromTo = function (t, e, i, r) {
      return re(2, arguments, this), this;
    }),
    (i.set = function (t, e, i) {
      return (
        (e.duration = 0),
        (e.parent = this),
        zt(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new ti(t, e, ie(this, i), 1),
        this
      );
    }),
    (i.call = function (t, e, i) {
      return Gt(this, ti.delayedCall(0, t, e), i);
    }),
    (i.staggerTo = function (t, e, i, r, n, s, a) {
      return (
        (i.duration = e),
        (i.stagger = i.stagger || r),
        (i.onComplete = s),
        (i.onCompleteParams = a),
        (i.parent = this),
        new ti(t, i, ie(this, n)),
        this
      );
    }),
    (i.staggerFrom = function (t, e, i, r, n, s, a) {
      return (
        (i.runBackwards = 1),
        (zt(i).immediateRender = G(i.immediateRender)),
        this.staggerTo(t, e, i, r, n, s, a)
      );
    }),
    (i.staggerFromTo = function (t, e, i, r, n, s, a, o) {
      return (
        (r.startAt = i),
        (zt(r).immediateRender = G(r.immediateRender)),
        this.staggerTo(t, e, r, n, s, a, o)
      );
    }),
    (i.render = function (t, e, i) {
      var r,
        n,
        s,
        a,
        o,
        h,
        l,
        f,
        c,
        p,
        d,
        _,
        m = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        v = this._dur,
        y = this !== u && t > g - 1e-8 && t >= 0 ? g : t < 1e-8 ? 0 : t,
        w = this._zTime < 0 != t < 0 && (this._initted || !v);
      if (y !== this._tTime || i || w) {
        if (
          (m !== this._time &&
            v &&
            ((y += this._time - m), (t += this._time - m)),
          (r = y),
          (c = this._start),
          (h = !(f = this._ts)),
          w && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((d = this._yoyo),
            (o = v + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * o + t, e, i);
          if (
            ((r = Mt(y % o)),
            y === g
              ? ((a = this._repeat), (r = v))
              : ((a = ~~(y / o)) && a === y / o && ((r = v), a--),
                r > v && (r = v)),
            (p = Yt(this._tTime, o)),
            !m && this._tTime && p !== a && (p = a),
            d && 1 & a && ((r = v - r), (_ = 1)),
            a !== p && !this._lock)
          ) {
            var b = d && 1 & p,
              x = b === (d && 1 & a);
            if (
              (a < p && (b = !b),
              (m = b ? 0 : v),
              (this._lock = 1),
              (this.render(m || (_ ? 0 : Mt(a * o)), e, !v)._lock = 0),
              (this._tTime = y),
              !e && this.parent && ye(this, "onRepeat"),
              this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
              (m && m !== this._time) ||
                h !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((v = this._dur),
              (g = this._tDur),
              x &&
                ((this._lock = 2),
                (m = b ? v : -1e-4),
                this.render(m, !0),
                this.vars.repeatRefresh && !_ && this.invalidate()),
              (this._lock = 0),
              !this._ts && !h)
            )
              return this;
            Fe(this, _);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((l = (function (t, e, i) {
              var r;
              if (i > e)
                for (r = t._first; r && r._start <= i; ) {
                  if (!r._dur && "isPause" === r.data && r._start > e) return r;
                  r = r._next;
                }
              else
                for (r = t._last; r && r._start >= i; ) {
                  if (!r._dur && "isPause" === r.data && r._start < e) return r;
                  r = r._prev;
                }
            })(this, Mt(m), Mt(r))),
            l && (y -= r - (r = l._start))),
          (this._tTime = y),
          (this._time = r),
          (this._act = !f),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (m = 0)),
          !m && r && !e && (ye(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (r >= m && t >= 0)
          for (n = this._first; n; ) {
            if (
              ((s = n._next), (n._act || r >= n._start) && n._ts && l !== n)
            ) {
              if (n.parent !== this) return this.render(t, e, i);
              if (
                (n.render(
                  n._ts > 0
                    ? (r - n._start) * n._ts
                    : (n._dirty ? n.totalDuration() : n._tDur) +
                        (r - n._start) * n._ts,
                  e,
                  i
                ),
                r !== this._time || (!this._ts && !h))
              ) {
                (l = 0), s && (y += this._zTime = -1e-8);
                break;
              }
            }
            n = s;
          }
        else {
          n = this._last;
          for (var T = t < 0 ? t : r; n; ) {
            if (((s = n._prev), (n._act || T <= n._end) && n._ts && l !== n)) {
              if (n.parent !== this) return this.render(t, e, i);
              if (
                (n.render(
                  n._ts > 0
                    ? (T - n._start) * n._ts
                    : (n._dirty ? n.totalDuration() : n._tDur) +
                        (T - n._start) * n._ts,
                  e,
                  i
                ),
                r !== this._time || (!this._ts && !h))
              ) {
                (l = 0), s && (y += this._zTime = T ? -1e-8 : 1e-8);
                break;
              }
            }
            n = s;
          }
        }
        if (
          l &&
          !e &&
          (this.pause(),
          (l.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
          this._ts)
        )
          return (this._start = c), Wt(this), this.render(t, e, i);
        this._onUpdate && !e && ye(this, "onUpdate", !0),
          ((y === g && g >= this.totalDuration()) || (!y && m)) &&
            ((c !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !v) &&
                ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                Bt(this, 1),
              e ||
                (t < 0 && !m) ||
                (!y && !m && g) ||
                (ye(
                  this,
                  y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (i.add = function (t, e) {
      var i = this;
      if ((W(e) || (e = ie(this, e, t)), !(t instanceof Xe))) {
        if ($(t))
          return (
            t.forEach(function (t) {
              return i.add(t, e);
            }),
            this
          );
        if (Y(t)) return this.addLabel(t, e);
        if (!X(t)) return this;
        t = ti.delayedCall(0, t);
      }
      return this !== t ? Gt(this, t, e) : this;
    }),
    (i.getChildren = function (t, e, i, r) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === r && (r = -1e8);
      for (var n = [], s = this._first; s; )
        s._start >= r &&
          (s instanceof ti
            ? e && n.push(s)
            : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))),
          (s = s._next);
      return n;
    }),
    (i.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
        if (e[i].vars.id === t) return e[i];
    }),
    (i.remove = function (t) {
      return Y(t)
        ? this.removeLabel(t)
        : X(t)
        ? this.killTweensOf(t)
        : (Ft(this, t),
          t === this._recent && (this._recent = this._last),
          qt(this));
    }),
    (i.totalTime = function (e, i) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Mt(
              Ce.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts)
            )),
          t.prototype.totalTime.call(this, e, i),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (t, e) {
      return (this.labels[t] = ie(this, e)), this;
    }),
    (i.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (i.addPause = function (t, e, i) {
      var r = ti.delayedCall(0, e || ct, i);
      return (
        (r.data = "isPause"), (this._hasPause = 1), Gt(this, r, ie(this, t))
      );
    }),
    (i.removePause = function (t) {
      var e = this._first;
      for (t = ie(this, t); e; )
        e._start === t && "isPause" === e.data && Bt(e), (e = e._next);
    }),
    (i.killTweensOf = function (t, e, i) {
      for (var r = this.getTweensOf(t, i), n = r.length; n--; )
        Ve !== r[n] && r[n].kill(t, e);
      return this;
    }),
    (i.getTweensOf = function (t, e) {
      for (var i, r = [], n = he(t), s = this._first, a = W(e); s; )
        s instanceof ti
          ? Dt(s._targets, n) &&
            (a
              ? (!Ve || (s._initted && s._ts)) &&
                s.globalTime(0) <= e &&
                s.globalTime(s.totalDuration()) > e
              : !e || s.isActive()) &&
            r.push(s)
          : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
          (s = s._next);
      return r;
    }),
    (i.tweenTo = function (t, e) {
      e = e || {};
      var i,
        r = this,
        n = ie(r, t),
        s = e,
        a = s.startAt,
        o = s.onStart,
        u = s.onStartParams,
        h = s.immediateRender,
        l = ti.to(
          r,
          St(
            {
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (n - (a && "time" in a ? a.time : r._time)) / r.timeScale()
                ) ||
                1e-8,
              onStart: function () {
                if ((r.pause(), !i)) {
                  var t =
                    e.duration ||
                    Math.abs(
                      (n - (a && "time" in a ? a.time : r._time)) /
                        r.timeScale()
                    );
                  l._dur !== t && Kt(l, t, 0, 1).render(l._time, !0, !0),
                    (i = 1);
                }
                o && o.apply(l, u || []);
              }
            },
            e
          )
        );
      return h ? l.render(0) : l;
    }),
    (i.tweenFromTo = function (t, e, i) {
      return this.tweenTo(e, St({ startAt: { time: ie(this, t) } }, i));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (t) {
      return void 0 === t && (t = this._time), ve(this, ie(this, t));
    }),
    (i.previousLabel = function (t) {
      return void 0 === t && (t = this._time), ve(this, ie(this, t), 1);
    }),
    (i.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + 1e-8);
    }),
    (i.shiftChildren = function (t, e, i) {
      void 0 === i && (i = 0);
      for (var r, n = this._first, s = this.labels; n; )
        n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
      if (e) for (r in s) s[r] >= i && (s[r] += t);
      return qt(this);
    }),
    (i.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
      return t.prototype.invalidate.call(this);
    }),
    (i.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        qt(this)
      );
    }),
    (i.totalDuration = function (t) {
      var e,
        i,
        r,
        n = 0,
        s = this,
        a = s._last,
        o = 1e8;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -t : t)
        );
      if (s._dirty) {
        for (r = s.parent; a; )
          (e = a._prev),
            a._dirty && a.totalDuration(),
            (i = a._start) > o && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (Gt(s, a, i - a._delay, 1)._lock = 0))
              : (o = i),
            i < 0 &&
              a._ts &&
              ((n -= i),
              ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
              s.shiftChildren(-i, !1, -1 / 0),
              (o = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = e);
        Kt(s, s === u && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (t) {
      if ((u._ts && (At(u, Xt(t, u)), (p = Ce.frame)), Ce.frame >= vt)) {
        vt += R.autoSleep || 120;
        var e = u._first;
        if ((!e || !e._ts) && R.autoSleep && Ce._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || Ce.sleep();
        }
      }
    }),
    e
  );
})(Xe);
St(We.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Ve,
  Qe = function (t, e, i, r, n, s, a) {
    var o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _ = new di(this._pt, t, e, 0, 1, ui, null, n),
      m = 0,
      g = 0;
    for (
      _.b = i,
        _.e = r,
        i += "",
        (p = ~(r += "").indexOf("random(")) && (r = me(r)),
        s && (s((d = [i, r]), t, e), (i = d[0]), (r = d[1])),
        u = i.match(it) || [];
      (o = it.exec(r));

    )
      (l = o[0]),
        (f = r.substring(m, o.index)),
        h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
        l !== u[g++] &&
          ((c = parseFloat(u[g - 1]) || 0),
          (_._pt = {
            _next: _._pt,
            p: f || 1 === g ? f : ",",
            s: c,
            c:
              "=" === l.charAt(1)
                ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1)
                : parseFloat(l) - c,
            m: h && h < 4 ? Math.round : 0
          }),
          (m = it.lastIndex));
    return (
      (_.c = m < r.length ? r.substring(m, r.length) : ""),
      (_.fp = a),
      (rt.test(r) || p) && (_.e = 0),
      (this._pt = _),
      _
    );
  },
  Ge = function (t, e, i, r, n, s, a, o, u) {
    X(r) && (r = r(n || 0, t, s));
    var h,
      l = t[e],
      f =
        "get" !== i
          ? i
          : X(l)
          ? u
            ? t[
                e.indexOf("set") || !X(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : l,
      c = X(l) ? (u ? ri : ii) : ei;
    if (
      (Y(r) &&
        (~r.indexOf("random(") && (r = me(r)),
        "=" === r.charAt(1) &&
          ((h =
            parseFloat(f) +
            parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
            (ae(f) || 0)) ||
            0 === h) &&
          (r = h)),
      f !== r)
    )
      return isNaN(f * r) || "" === r
        ? (!l && !(e in t) && ht(e, r),
          Qe.call(this, t, e, f, r, c, o || R.stringFilter, u))
        : ((h = new di(
            this._pt,
            t,
            e,
            +f || 0,
            r - (f || 0),
            "boolean" == typeof l ? oi : ai,
            0,
            c
          )),
          u && (h.fp = u),
          a && h.modifier(a, this, t),
          (this._pt = h));
  },
  He = function (t, e, i, r, n, s) {
    var a, o, u, h;
    if (
      mt[t] &&
      !1 !==
        (a = new mt[t]()).init(
          n,
          a.rawVars
            ? e[t]
            : (function (t, e, i, r, n) {
                if (
                  (X(t) && (t = Je(t, n, e, i, r)),
                  !Q(t) || (t.style && t.nodeType) || $(t) || J(t))
                )
                  return Y(t) ? Je(t, n, e, i, r) : t;
                var s,
                  a = {};
                for (s in t) a[s] = Je(t[s], n, e, i, r);
                return a;
              })(e[t], r, n, s, i),
          i,
          r,
          s
        ) &&
      ((i._pt = o = new di(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      i !== d)
    )
      for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
        u[a._props[h]] = o;
    return a;
  },
  Ze = function t(e, i) {
    var r,
      n,
      s,
      a,
      h,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v = e.vars,
      y = v.ease,
      w = v.startAt,
      b = v.immediateRender,
      x = v.lazy,
      T = v.onUpdate,
      O = v.onUpdateParams,
      M = v.callbackScope,
      D = v.runBackwards,
      k = v.yoyoEase,
      A = v.keyframes,
      E = v.autoRevert,
      C = e._dur,
      S = e._startAt,
      P = e._targets,
      I = e.parent,
      L = I && "nested" === I.data ? I.parent._targets : P,
      R = "auto" === e._overwrite && !o,
      F = e.timeline;
    if (
      (F && (!A || !y) && (y = "none"),
      (e._ease = Be(y, z.ease)),
      (e._yEase = k ? ze(Be(!0 === k ? y : k, z.ease)) : 0),
      k &&
        e._yoyo &&
        !e._repeat &&
        ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
      (e._from = !F && !!v.runBackwards),
      !F)
    ) {
      if (
        ((m = (c = P[0] ? xt(P[0]).harness : 0) && v[c.prop]),
        (r = Rt(v, pt)),
        S && S.render(-1, !0).kill(),
        w)
      )
        if (
          (Bt(
            (e._startAt = ti.set(
              P,
              St(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: G(x),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: O,
                  callbackScope: M,
                  stagger: 0
                },
                w
              )
            ))
          ),
          i < 0 && !b && !E && e._startAt.render(-1, !0),
          b)
        ) {
          if ((i > 0 && !E && (e._startAt = 0), C && i <= 0))
            return void (i && (e._zTime = i));
        } else !1 === E && (e._startAt = 0);
      else if (D && C)
        if (S) !E && (e._startAt = 0);
        else if (
          (i && (b = !1),
          (s = St(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: b && G(x),
              immediateRender: b,
              stagger: 0,
              parent: I
            },
            r
          )),
          m && (s[c.prop] = m),
          Bt((e._startAt = ti.set(P, s))),
          i < 0 && e._startAt.render(-1, !0),
          b)
        ) {
          if (!i) return;
        } else t(e._startAt, 1e-8);
      for (e._pt = 0, x = (C && G(x)) || (x && !C), n = 0; n < P.length; n++) {
        if (
          ((f = (h = P[n])._gsap || bt(P)[n]._gsap),
          (e._ptLookup[n] = d = {}),
          _t[f.id] && dt.length && kt(),
          (_ = L === P ? n : L.indexOf(h)),
          c &&
            !1 !== (p = new c()).init(h, m || r, e, _, L) &&
            ((e._pt = a = new di(
              e._pt,
              h,
              p.name,
              0,
              1,
              p.render,
              p,
              0,
              p.priority
            )),
            p._props.forEach(function (t) {
              d[t] = a;
            }),
            p.priority && (l = 1)),
          !c || m)
        )
          for (s in r)
            mt[s] && (p = He(s, r, e, _, h, L))
              ? p.priority && (l = 1)
              : (d[s] = a = Ge.call(
                  e,
                  h,
                  s,
                  "get",
                  r[s],
                  _,
                  L,
                  0,
                  v.stringFilter
                ));
        e._op && e._op[n] && e.kill(h, e._op[n]),
          R &&
            e._pt &&
            ((Ve = e),
            u.killTweensOf(h, d, e.globalTime(0)),
            (g = !e.parent),
            (Ve = 0)),
          e._pt && x && (_t[f.id] = 1);
      }
      l && pi(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = T), (e._initted = (!e._op || e._pt) && !g);
  },
  Je = function (t, e, i, r, n) {
    return X(t)
      ? t.call(e, i, r, n)
      : Y(t) && ~t.indexOf("random(")
      ? me(t)
      : t;
  },
  $e = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
  Ke = ($e + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
  ti = (function (t) {
    function e(e, i, r, n) {
      var a;
      "number" == typeof i && ((r.duration = i), (i = r), (r = null));
      var h,
        l,
        f,
        c,
        p,
        d,
        _,
        m,
        g = (a = t.call(this, n ? i : zt(i)) || this).vars,
        v = g.duration,
        y = g.delay,
        w = g.immediateRender,
        b = g.stagger,
        x = g.overwrite,
        T = g.keyframes,
        O = g.defaults,
        M = g.scrollTrigger,
        D = g.yoyoEase,
        k = i.parent || u,
        A = ($(e) || J(e) ? W(e[0]) : "length" in i) ? [e] : he(e);
      if (
        ((a._targets = A.length
          ? bt(A)
          : lt(
              "GSAP target " + e + " not found. https://greensock.com",
              !R.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = x),
        T || b || Z(v) || Z(y))
      ) {
        if (
          ((i = a.vars),
          (h = a.timeline = new We({
            data: "nested",
            defaults: O || {}
          })).kill(),
          (h.parent = h._dp = s(a)),
          (h._start = 0),
          T)
        )
          St(h.vars.defaults, { ease: "none" }),
            b
              ? A.forEach(function (t, e) {
                  return T.forEach(function (i, r) {
                    return h.to(t, i, r ? ">" : e * b);
                  });
                })
              : T.forEach(function (t) {
                  return h.to(A, t, ">");
                });
        else {
          if (((c = A.length), (_ = b ? fe(b) : ct), Q(b)))
            for (p in b) ~$e.indexOf(p) && (m || (m = {}), (m[p] = b[p]));
          for (l = 0; l < c; l++) {
            for (p in ((f = {}), i)) Ke.indexOf(p) < 0 && (f[p] = i[p]);
            (f.stagger = 0),
              D && (f.yoyoEase = D),
              m && It(f, m),
              (d = A[l]),
              (f.duration = +Je(v, s(a), l, d, A)),
              (f.delay = (+Je(y, s(a), l, d, A) || 0) - a._delay),
              !b &&
                1 === c &&
                f.delay &&
                ((a._delay = y = f.delay), (a._start += y), (f.delay = 0)),
              h.to(d, f, _(l, d, A));
          }
          h.duration() ? (v = y = 0) : (a.timeline = 0);
        }
        v || a.duration((v = h.duration()));
      } else a.timeline = 0;
      return (
        !0 !== x || o || ((Ve = s(a)), u.killTweensOf(A), (Ve = 0)),
        Gt(k, s(a), r),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (w ||
          (!v &&
            !T &&
            a._start === Mt(k._time) &&
            G(w) &&
            Nt(s(a)) &&
            "nested" !== k.data)) &&
          ((a._tTime = -1e-8), a.render(Math.max(0, -y))),
        M && Ht(s(a), M),
        a
      );
    }
    a(e, t);
    var i = e.prototype;
    return (
      (i.render = function (t, e, i) {
        var r,
          n,
          s,
          a,
          o,
          u,
          h,
          l,
          f,
          c = this._time,
          p = this._tDur,
          d = this._dur,
          _ = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
        if (d) {
          if (
            _ !== this._tTime ||
            !t ||
            i ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != t < 0)
          ) {
            if (((r = _), (l = this.timeline), this._repeat)) {
              if (((a = d + this._rDelay), this._repeat < -1 && t < 0))
                return this.totalTime(100 * a + t, e, i);
              if (
                ((r = Mt(_ % a)),
                _ === p
                  ? ((s = this._repeat), (r = d))
                  : ((s = ~~(_ / a)) && s === _ / a && ((r = d), s--),
                    r > d && (r = d)),
                (u = this._yoyo && 1 & s) && ((f = this._yEase), (r = d - r)),
                (o = Yt(this._tTime, a)),
                r === c && !i && this._initted)
              )
                return this;
              s !== o &&
                (l && this._yEase && Fe(l, u),
                !this.vars.repeatRefresh ||
                  u ||
                  this._lock ||
                  ((this._lock = i = 1),
                  (this.render(Mt(a * s), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Zt(this, t < 0 ? t : r, i, e)) return (this._tTime = 0), this;
              if (d !== this._dur) return this.render(t, e, i);
            }
            if (
              ((this._tTime = _),
              (this._time = r),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(r / d)),
              this._from && (this.ratio = h = 1 - h),
              r && !c && !e && (ye(this, "onStart"), this._tTime !== _))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l && l.render(t < 0 ? t : !r && u ? -1e-8 : l._dur * h, e, i)) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                ye(this, "onUpdate")),
              this._repeat &&
                s !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                ye(this, "onRepeat"),
              (_ !== this._tDur && _) ||
                this._tTime !== _ ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startAt.render(t, !0, !0),
                (t || !d) &&
                  ((_ === this._tDur && this._ts > 0) ||
                    (!_ && this._ts < 0)) &&
                  Bt(this, 1),
                e ||
                  (t < 0 && !c) ||
                  (!_ && !c) ||
                  (ye(this, _ === p ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(_ < p && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, i, r) {
            var n,
              s,
              a,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start && Jt(t) && (t._initted || !$t(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !$t(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = se(0, t._tDur, e)),
                (s = Yt(l, h)),
                (a = Yt(t._tTime, h)),
                t._yoyo && 1 & s && (u = 1 - u),
                s !== a &&
                  ((o = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || r || 1e-8 === t._zTime || (!e && t._zTime))
            ) {
              if (!t._initted && Zt(t, e, r, i)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (i ? 1e-8 : 0),
                  i || (i = e && !a),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !i && ye(t, "onUpdate"),
                l && t._repeat && !i && t.parent && ye(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && Bt(t, 1),
                  i ||
                    (ye(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, i);
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function () {
        return (
          (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          t.prototype.invalidate.call(this)
        );
      }),
      (i.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? we(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)
              ._first || we(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Kt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var r,
          n,
          s,
          a,
          o,
          u,
          h,
          l = this._targets,
          f = t ? he(t) : l,
          c = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var i = t.length, r = i === e.length;
              r && i-- && t[i] === e[i];

            );
            return i < 0;
          })(l, f)
        )
          return "all" === e && (this._pt = 0), we(this);
        for (
          r = this._op = this._op || [],
            "all" !== e &&
              (Y(e) &&
                ((o = {}),
                Ot(e, function (t) {
                  return (o[t] = 1);
                }),
                (e = o)),
              (e = (function (t, e) {
                var i,
                  r,
                  n,
                  s,
                  a = t[0] ? xt(t[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return e;
                for (r in ((i = It({}, e)), o))
                  if ((r in i))
                    for (n = (s = o[r].split(",")).length; n--; )
                      i[s[n]] = i[r];
                return i;
              })(l, e))),
            h = l.length;
          h--;

        )
          if (~f.indexOf(l[h]))
            for (o in ((n = c[h]),
            "all" === e
              ? ((r[h] = e), (a = n), (s = {}))
              : ((s = r[h] = r[h] || {}), (a = e)),
            a))
              (u = n && n[o]) &&
                (("kill" in u.d && !0 !== u.d.kill(o)) || Ft(this, u, "_pt"),
                delete n[o]),
                "all" !== s && (s[o] = 1);
        return this._initted && !this._pt && p && we(this), this;
      }),
      (e.to = function (t, i) {
        return new e(t, i, arguments[2]);
      }),
      (e.from = function (t, e) {
        return re(1, arguments);
      }),
      (e.delayedCall = function (t, i, r, n) {
        return new e(i, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: i,
          onReverseComplete: i,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: n
        });
      }),
      (e.fromTo = function (t, e, i) {
        return re(2, arguments);
      }),
      (e.set = function (t, i) {
        return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
      }),
      (e.killTweensOf = function (t, e, i) {
        return u.killTweensOf(t, e, i);
      }),
      e
    );
  })(Xe);
St(ti.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Ot("staggerTo,staggerFrom,staggerFromTo", function (t) {
    ti[t] = function () {
      var e = new We(),
        i = oe.call(arguments, 0);
      return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
    };
  });
var ei = function (t, e, i) {
    return (t[e] = i);
  },
  ii = function (t, e, i) {
    return t[e](i);
  },
  ri = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  ni = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  si = function (t, e) {
    return X(t[e]) ? ii : V(t[e]) && t.setAttribute ? ni : ei;
  },
  ai = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
  oi = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  ui = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (1 === t && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  hi = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  li = function (t, e, i, r) {
    for (var n, s = this._pt; s; )
      (n = s._next), s.p === r && s.modifier(t, e, i), (s = n);
  },
  fi = function (t) {
    for (var e, i, r = this._pt; r; )
      (i = r._next),
        (r.p === t && !r.op) || r.op === t
          ? Ft(this, r, "_pt")
          : r.dep || (e = 1),
        (r = i);
    return !e;
  },
  ci = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  pi = function (t) {
    for (var e, i, r, n, s = t._pt; s; ) {
      for (e = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
      (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
        (s._next = i) ? (i._prev = s) : (n = s),
        (s = e);
    }
    t._pt = r;
  },
  di = (function () {
    function t(t, e, i, r, n, s, a, o, u) {
      (this.t = e),
        (this.s = r),
        (this.c = n),
        (this.p = i),
        (this.r = s || ai),
        (this.d = a || this),
        (this.set = o || ei),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, i) {
        (this.mSet = this.mSet || this.set),
          (this.set = ci),
          (this.m = t),
          (this.mt = i),
          (this.tween = e);
      }),
      t
    );
  })();
Ot(
  wt +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (pt[t] = 1);
  }
),
  (at.TweenMax = at.TweenLite = ti),
  (at.TimelineLite = at.TimelineMax = We),
  (u = new We({
    sortChildren: !1,
    defaults: z,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  })),
  (R.stringFilter = Ee);
var _i = {
  registerPlugin: function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function (t) {
      return be(t);
    });
  },
  timeline: function (t) {
    return new We(t);
  },
  getTweensOf: function (t, e) {
    return u.getTweensOf(t, e);
  },
  getProperty: function (t, e, i, r) {
    Y(t) && (t = he(t)[0]);
    var n = xt(t || {}).get,
      s = i ? Ct : Et;
    return (
      "native" === i && (i = ""),
      t
        ? e
          ? s(((mt[e] && mt[e].get) || n)(t, e, i, r))
          : function (e, i, r) {
              return s(((mt[e] && mt[e].get) || n)(t, e, i, r));
            }
        : t
    );
  },
  quickSetter: function (t, e, i) {
    if ((t = he(t)).length > 1) {
      var r = t.map(function (t) {
          return vi.quickSetter(t, e, i);
        }),
        n = r.length;
      return function (t) {
        for (var e = n; e--; ) r[e](t);
      };
    }
    t = t[0] || {};
    var s = mt[e],
      a = xt(t),
      o = (a.harness && (a.harness.aliases || {})[e]) || e,
      u = s
        ? function (e) {
            var r = new s();
            (d._pt = 0),
              r.init(t, i ? e + i : e, d, 0, [t]),
              r.render(1, r),
              d._pt && hi(1, d);
          }
        : a.set(t, o);
    return s
      ? u
      : function (e) {
          return u(t, o, i ? e + i : e, a, 1);
        };
  },
  isTweening: function (t) {
    return u.getTweensOf(t, !0).length > 0;
  },
  defaults: function (t) {
    return t && t.ease && (t.ease = Be(t.ease, z.ease)), Lt(z, t || {});
  },
  config: function (t) {
    return Lt(R, t || {});
  },
  registerEffect: function (t) {
    var e = t.name,
      i = t.effect,
      r = t.plugins,
      n = t.defaults,
      s = t.extendTimeline;
    (r || "").split(",").forEach(function (t) {
      return (
        t && !mt[t] && !at[t] && lt(e + " effect requires " + t + " plugin.")
      );
    }),
      (gt[e] = function (t, e, r) {
        return i(he(t), St(e || {}, n), r);
      }),
      s &&
        (We.prototype[e] = function (t, i, r) {
          return this.add(gt[e](t, Q(i) ? i : (r = i) && {}, this), r);
        });
  },
  registerEase: function (t, e) {
    Pe[t] = Be(e);
  },
  parseEase: function (t, e) {
    return arguments.length ? Be(t, e) : Pe;
  },
  getById: function (t) {
    return u.getById(t);
  },
  exportRoot: function (t, e) {
    void 0 === t && (t = {});
    var i,
      r,
      n = new We(t);
    for (
      n.smoothChildTiming = G(t.smoothChildTiming),
        u.remove(n),
        n._dp = 0,
        n._time = n._tTime = u._time,
        i = u._first;
      i;

    )
      (r = i._next),
        (!e &&
          !i._dur &&
          i instanceof ti &&
          i.vars.onComplete === i._targets[0]) ||
          Gt(n, i, i._start - i._delay),
        (i = r);
    return Gt(u, n, 0), n;
  },
  utils: {
    wrap: function t(e, i, r) {
      var n = i - e;
      return $(e)
        ? _e(e, t(0, e.length), i)
        : ne(r, function (t) {
            return ((n + ((t - e) % n)) % n) + e;
          });
    },
    wrapYoyo: function t(e, i, r) {
      var n = i - e,
        s = 2 * n;
      return $(e)
        ? _e(e, t(0, e.length - 1), i)
        : ne(r, function (t) {
            return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
          });
    },
    distribute: fe,
    random: de,
    snap: pe,
    normalize: function (t, e, i) {
      return ge(t, e, 0, 1, i);
    },
    getUnit: ae,
    clamp: function (t, e, i) {
      return ne(i, function (i) {
        return se(t, e, i);
      });
    },
    splitColor: Oe,
    toArray: he,
    selector: function (t) {
      return (
        (t = he(t)[0] || lt("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return he(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? lt("Invalid scope") || f.createElement("div")
              : t
          );
        }
      );
    },
    mapRange: ge,
    pipe: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (t) {
        return e.reduce(function (t, e) {
          return e(t);
        }, t);
      };
    },
    unitize: function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || ae(i));
      };
    },
    interpolate: function t(e, i, r, n) {
      var s = isNaN(e + i)
        ? 0
        : function (t) {
            return (1 - t) * e + t * i;
          };
      if (!s) {
        var a,
          o,
          u,
          h,
          l,
          f = Y(e),
          c = {};
        if ((!0 === r && (n = 1) && (r = null), f))
          (e = { p: e }), (i = { p: i });
        else if ($(e) && !$(i)) {
          for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
            u.push(t(e[o - 1], e[o]));
          h--,
            (s = function (t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }),
            (r = i);
        } else n || (e = It($(e) ? [] : {}, e));
        if (!u) {
          for (a in i) Ge.call(c, e, a, "get", i[a]);
          s = function (t) {
            return hi(t, c) || (f ? e.p : e);
          };
        }
      }
      return ne(r, s);
    },
    shuffle: le
  },
  install: ut,
  effects: gt,
  ticker: Ce,
  updateRoot: We.updateRoot,
  plugins: mt,
  globalTimeline: u,
  core: {
    PropTween: di,
    globals: ft,
    Tween: ti,
    Timeline: We,
    Animation: Xe,
    getCache: xt,
    _removeLinkedListItem: Ft,
    suppressOverwrites: function (t) {
      return (o = t);
    }
  }
};
Ot("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (_i[t] = ti[t]);
}),
  Ce.add(We.updateRoot),
  (d = _i.to({}, { duration: 0 }));
var mi = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  gi = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, i, r) {
        r._onInit = function (t) {
          var r, n;
          if (
            (Y(i) &&
              ((r = {}),
              Ot(i, function (t) {
                return (r[t] = 1);
              }),
              (i = r)),
            e)
          ) {
            for (n in ((r = {}), i)) r[n] = e(i[n]);
            i = r;
          }
          !(function (t, e) {
            var i,
              r,
              n,
              s = t._targets;
            for (i in e)
              for (r = s.length; r--; )
                (n = t._ptLookup[r][i]) &&
                  (n = n.d) &&
                  (n._pt && (n = mi(n, i)),
                  n && n.modifier && n.modifier(e[i], t, s[r], i));
          })(t, i);
        };
      }
    };
  },
  vi =
    _i.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a;
          for (s in e)
            (a = this.add(
              t,
              "setAttribute",
              (t.getAttribute(s) || 0) + "",
              e[s],
              r,
              n,
              0,
              0,
              s
            )) && (a.op = s),
              this._props.push(s);
        }
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
        }
      },
      gi("roundProps", ce),
      gi("modifiers"),
      gi("snap", pe)
    ) || _i;
(ti.version = We.version = vi.version = "3.7.1"), (c = 1), H() && Se();
Pe.Power0,
  Pe.Power1,
  Pe.Power2,
  Pe.Power3,
  Pe.Power4,
  Pe.Linear,
  Pe.Quad,
  Pe.Cubic,
  Pe.Quart,
  Pe.Quint,
  Pe.Strong,
  Pe.Elastic,
  Pe.Back,
  Pe.SteppedEase,
  Pe.Bounce,
  Pe.Sine,
  Pe.Expo,
  Pe.Circ;
var yi,
  wi,
  bi,
  xi,
  Ti,
  Oi,
  Mi,
  Di = {},
  ki = 180 / Math.PI,
  Ai = Math.PI / 180,
  Ei = Math.atan2,
  Ci = /([A-Z])/g,
  Si = /(?:left|right|width|margin|padding|x)/i,
  Pi = /[\s,\(]\S/,
  Ii = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  Li = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
  Ri = function (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  },
  zi = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  },
  Fi = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Bi = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  qi = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
  ji = function (t, e, i) {
    return (t.style[e] = i);
  },
  Ni = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  Ui = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  Yi = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Xi = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Wi = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  Vi = "transform",
  Qi = Vi + "Origin",
  Gi = function (t, e) {
    var i = wi.createElementNS
      ? wi.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : wi.createElement(t);
    return i.style ? i : wi.createElement(t);
  },
  Hi = function t(e, i, r) {
    var n = getComputedStyle(e);
    return (
      n[i] ||
      n.getPropertyValue(i.replace(Ci, "-$1").toLowerCase()) ||
      n.getPropertyValue(i) ||
      (!r && t(e, Ji(i) || i, 1)) ||
      ""
    );
  },
  Zi = "O,Moz,ms,Ms,Webkit".split(","),
  Ji = function (t, e, i) {
    var r = (e || Ti).style,
      n = 5;
    if (t in r && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      n-- && !(Zi[n] + t in r);

    );
    return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Zi[n] : "") + t;
  },
  $i = function () {
    "undefined" != typeof window &&
      window.document &&
      ((yi = window),
      (wi = yi.document),
      (bi = wi.documentElement),
      (Ti = Gi("div") || { style: {} }),
      Gi("div"),
      (Vi = Ji(Vi)),
      (Qi = Vi + "Origin"),
      (Ti.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Mi = !!Ji("perspective")),
      (xi = 1));
  },
  Ki = function t(e) {
    var i,
      r = Gi(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      s = this.nextSibling,
      a = this.style.cssText;
    if (
      (bi.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (i = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch (t) {}
    else this._gsapBBox && (i = this._gsapBBox());
    return (
      n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
      bi.removeChild(r),
      (this.style.cssText = a),
      i
    );
  },
  tr = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  er = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch (i) {
      e = Ki.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Ki || (e = Ki.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +tr(t, ["x", "cx", "x1"]) || 0,
            y: +tr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
    );
  },
  ir = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !er(t));
  },
  rr = function (t, e) {
    if (e) {
      var i = t.style;
      e in Di && e !== Qi && (e = Vi),
        i.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(e.replace(Ci, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  },
  nr = function (t, e, i, r, n, s) {
    var a = new di(t._pt, e, i, 0, 1, s ? qi : Bi);
    return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
  },
  sr = { deg: 1, rad: 1, turn: 1 },
  ar = function t(e, i, r, n) {
    var s,
      a,
      o,
      u,
      h = parseFloat(r) || 0,
      l = (r + "").trim().substr((h + "").length) || "px",
      f = Ti.style,
      c = Si.test(i),
      p = "svg" === e.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
      _ = 100,
      m = "px" === n,
      g = "%" === n;
    return n === l || !h || sr[n] || sr[l]
      ? h
      : ("px" !== l && !m && (h = t(e, i, r, "px")),
        (u = e.getCTM && ir(e)),
        (!g && "%" !== l) || (!Di[i] && !~i.indexOf("adius"))
          ? ((f[c ? "width" : "height"] = _ + (m ? l : n)),
            (a =
              ~i.indexOf("adius") || ("em" === n && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== wi && a.appendChild) || (a = wi.body),
            (o = a._gsap) && g && o.width && c && o.time === Ce.time
              ? Mt((h / o.width) * _)
              : ((g || "%" === l) && (f.position = Hi(e, "position")),
                a === e && (f.position = "static"),
                a.appendChild(Ti),
                (s = Ti[d]),
                a.removeChild(Ti),
                (f.position = "absolute"),
                c && g && (((o = xt(a)).time = Ce.time), (o.width = a[d])),
                Mt(m ? (s * h) / _ : s && h ? (_ / s) * h : 0)))
          : ((s = u ? e.getBBox()[c ? "width" : "height"] : e[d]),
            Mt(g ? (h / s) * _ : (h / 100) * s)));
  },
  or = function (t, e, i, r) {
    var n;
    return (
      xi || $i(),
      e in Ii &&
        "transform" !== e &&
        ~(e = Ii[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      Di[e] && "transform" !== e
        ? ((n = vr(t, r)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : n.svg
              ? n.origin
              : yr(Hi(t, Qi)) + " " + n.zOrigin + "px"))
        : (!(n = t.style[e]) ||
            "auto" === n ||
            r ||
            ~(n + "").indexOf("calc(")) &&
          (n =
            (fr[e] && fr[e](t, e, i)) ||
            Hi(t, e) ||
            Tt(t, e) ||
            ("opacity" === e ? 1 : 0)),
      i && !~(n + "").trim().indexOf(" ") ? ar(t, e, n, i) + i : n
    );
  },
  ur = function (t, e, i, r) {
    if (!i || "none" === i) {
      var n = Ji(e, t, 1),
        s = n && Hi(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : "borderColor" === e && (i = Hi(t, "borderTopColor"));
    }
    var a,
      o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v = new di(this._pt, t.style, e, 0, 1, ui),
      y = 0,
      w = 0;
    if (
      ((v.b = i),
      (v.e = r),
      (i += ""),
      "auto" === (r += "") &&
        ((t.style[e] = r), (r = Hi(t, e) || r), (t.style[e] = i)),
      Ee((a = [i, r])),
      (r = a[1]),
      (u = (i = a[0]).match(et) || []),
      (r.match(et) || []).length)
    ) {
      for (; (o = et.exec(r)); )
        (c = o[0]),
          (d = r.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) || (l = 1),
          c !== (f = u[w++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) &&
              (c = c.substr(2)),
            (p = parseFloat(c)),
            (_ = c.substr((p + "").length)),
            (y = et.lastIndex - _.length),
            _ ||
              ((_ = _ || R.units[e] || m),
              y === r.length && ((r += _), (v.e += _))),
            m !== _ && (h = ar(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: d || 1 === w ? d : ",",
              s: h,
              c: g ? g * p : p - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0
            }));
      v.c = y < r.length ? r.substring(y, r.length) : "";
    } else v.r = "display" === e && "none" === r ? qi : Bi;
    return rt.test(r) && (v.e = 0), (this._pt = v), v;
  },
  hr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  lr = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i,
        r,
        n,
        s = e.t,
        a = s.style,
        o = e.u,
        u = s._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (r = 1);
      else
        for (n = (o = o.split(",")).length; --n > -1; )
          (i = o[n]),
            Di[i] && ((r = 1), (i = "transformOrigin" === i ? Qi : Vi)),
            rr(s, i);
      r &&
        (rr(s, Vi),
        u &&
          (u.svg && s.removeAttribute("transform"), vr(s, 1), (u.uncache = 1)));
    }
  },
  fr = {
    clearProps: function (t, e, i, r, n) {
      if ("isFromStart" !== n.data) {
        var s = (t._pt = new di(t._pt, e, i, 0, 0, lr));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    }
  },
  cr = [1, 0, 0, 1, 0, 0],
  pr = {},
  dr = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
  _r = function (t) {
    var e = Hi(t, Vi);
    return dr(e) ? cr : e.substr(7).match(tt).map(Mt);
  },
  mr = function (t, e) {
    var i,
      r,
      n,
      s,
      a = t._gsap || xt(t),
      o = t.style,
      u = _r(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f
        ]).join(",")
        ? cr
        : u
      : (u !== cr ||
          t.offsetParent ||
          t === bi ||
          a.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((i = t.parentNode) && t.offsetParent) ||
            ((s = 1), (r = t.nextSibling), bi.appendChild(t)),
          (u = _r(t)),
          n ? (o.display = n) : rr(t, "display"),
          s &&
            (r
              ? i.insertBefore(t, r)
              : i
              ? i.appendChild(t)
              : bi.removeChild(t))),
        e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  },
  gr = function (t, e, i, r, n, s) {
    var a,
      o,
      u,
      h = t._gsap,
      l = n || mr(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      p = h.xOffset || 0,
      d = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      w = l[5],
      b = e.split(" "),
      x = parseFloat(b[0]) || 0,
      T = parseFloat(b[1]) || 0;
    i
      ? l !== cr &&
        (o = _ * v - m * g) &&
        ((u = x * (-m / o) + T * (_ / o) - (_ * w - m * y) / o),
        (x = x * (v / o) + T * (-g / o) + (g * w - v * y) / o),
        (T = u))
      : ((x = (a = er(t)).x + (~b[0].indexOf("%") ? (x / 100) * a.width : x)),
        (T = a.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * a.height : T))),
      r || (!1 !== r && h.smooth)
        ? ((y = x - f),
          (w = T - c),
          (h.xOffset = p + (y * _ + w * g) - y),
          (h.yOffset = d + (y * m + w * v) - w))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = x),
      (h.yOrigin = T),
      (h.smooth = !!r),
      (h.origin = e),
      (h.originIsAbsolute = !!i),
      (t.style[Qi] = "0px 0px"),
      s &&
        (nr(s, h, "xOrigin", f, x),
        nr(s, h, "yOrigin", c, T),
        nr(s, h, "xOffset", p, h.xOffset),
        nr(s, h, "yOffset", d, h.yOffset)),
      t.setAttribute("data-svg-origin", x + " " + T);
  },
  vr = function (t, e) {
    var i = t._gsap || new Ye(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l,
      f,
      c,
      p,
      d,
      _,
      m,
      g,
      v,
      y,
      w,
      b,
      x,
      T,
      O,
      M,
      D,
      k,
      A,
      E,
      C,
      S,
      P,
      I,
      L,
      z = t.style,
      F = i.scaleX < 0,
      B = "px",
      q = "deg",
      j = Hi(t, Qi) || "0";
    return (
      (r = n = s = u = h = l = f = c = p = 0),
      (a = o = 1),
      (i.svg = !(!t.getCTM || !ir(t))),
      (m = mr(t, i.svg)),
      i.svg &&
        ((D =
          (!i.uncache || "0px 0px" === j) &&
          !e &&
          t.getAttribute("data-svg-origin")),
        gr(t, D || j, !!D || i.originIsAbsolute, !1 !== i.smooth, m)),
      (d = i.xOrigin || 0),
      (_ = i.yOrigin || 0),
      m !== cr &&
        ((w = m[0]),
        (b = m[1]),
        (x = m[2]),
        (T = m[3]),
        (r = O = m[4]),
        (n = M = m[5]),
        6 === m.length
          ? ((a = Math.sqrt(w * w + b * b)),
            (o = Math.sqrt(T * T + x * x)),
            (u = w || b ? Ei(b, w) * ki : 0),
            (f = x || T ? Ei(x, T) * ki + u : 0) &&
              (o *= Math.abs(Math.cos(f * Ai))),
            i.svg && ((r -= d - (d * w + _ * x)), (n -= _ - (d * b + _ * T))))
          : ((L = m[6]),
            (P = m[7]),
            (E = m[8]),
            (C = m[9]),
            (S = m[10]),
            (I = m[11]),
            (r = m[12]),
            (n = m[13]),
            (s = m[14]),
            (h = (g = Ei(L, S)) * ki),
            g &&
              ((D = O * (v = Math.cos(-g)) + E * (y = Math.sin(-g))),
              (k = M * v + C * y),
              (A = L * v + S * y),
              (E = O * -y + E * v),
              (C = M * -y + C * v),
              (S = L * -y + S * v),
              (I = P * -y + I * v),
              (O = D),
              (M = k),
              (L = A)),
            (l = (g = Ei(-x, S)) * ki),
            g &&
              ((v = Math.cos(-g)),
              (I = T * (y = Math.sin(-g)) + I * v),
              (w = D = w * v - E * y),
              (b = k = b * v - C * y),
              (x = A = x * v - S * y)),
            (u = (g = Ei(b, w)) * ki),
            g &&
              ((D = w * (v = Math.cos(g)) + b * (y = Math.sin(g))),
              (k = O * v + M * y),
              (b = b * v - w * y),
              (M = M * v - O * y),
              (w = D),
              (O = k)),
            h &&
              Math.abs(h) + Math.abs(u) > 359.9 &&
              ((h = u = 0), (l = 180 - l)),
            (a = Mt(Math.sqrt(w * w + b * b + x * x))),
            (o = Mt(Math.sqrt(M * M + L * L))),
            (g = Ei(O, M)),
            (f = Math.abs(g) > 2e-4 ? g * ki : 0),
            (p = I ? 1 / (I < 0 ? -I : I) : 0)),
        i.svg &&
          ((D = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !dr(Hi(t, Vi))),
          D && t.setAttribute("transform", D))),
      Math.abs(f) > 90 &&
        Math.abs(f) < 270 &&
        (F
          ? ((a *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
          : ((o *= -1), (f += f <= 0 ? 180 : -180))),
      (i.x =
        r -
        ((i.xPercent =
          r &&
          (i.xPercent ||
            (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        B),
      (i.y =
        n -
        ((i.yPercent =
          n &&
          (i.yPercent ||
            (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        B),
      (i.z = s + B),
      (i.scaleX = Mt(a)),
      (i.scaleY = Mt(o)),
      (i.rotation = Mt(u) + q),
      (i.rotationX = Mt(h) + q),
      (i.rotationY = Mt(l) + q),
      (i.skewX = f + q),
      (i.skewY = c + q),
      (i.transformPerspective = p + B),
      (i.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (z[Qi] = yr(j)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = R.force3D),
      (i.renderTransform = i.svg ? Tr : Mi ? xr : br),
      (i.uncache = 0),
      i
    );
  },
  yr = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  wr = function (t, e, i) {
    var r = ae(e);
    return Mt(parseFloat(e) + parseFloat(ar(t, "x", i + "px", r))) + r;
  },
  br = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      xr(t, e);
  },
  xr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.z,
      u = i.rotation,
      h = i.rotationY,
      l = i.rotationX,
      f = i.skewX,
      c = i.skewY,
      p = i.scaleX,
      d = i.scaleY,
      _ = i.transformPerspective,
      m = i.force3D,
      g = i.target,
      v = i.zOrigin,
      y = "",
      w = ("auto" === m && t && 1 !== t) || !0 === m;
    if (v && ("0deg" !== l || "0deg" !== h)) {
      var b,
        x = parseFloat(h) * Ai,
        T = Math.sin(x),
        O = Math.cos(x);
      (x = parseFloat(l) * Ai),
        (b = Math.cos(x)),
        (s = wr(g, s, T * b * -v)),
        (a = wr(g, a, -Math.sin(x) * -v)),
        (o = wr(g, o, O * b * -v + v));
    }
    "0px" !== _ && (y += "perspective(" + _ + ") "),
      (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
      (w || "0px" !== s || "0px" !== a || "0px" !== o) &&
        (y +=
          "0px" !== o || w
            ? "translate3d(" + s + ", " + a + ", " + o + ") "
            : "translate(" + s + ", " + a + ") "),
      "0deg" !== u && (y += "rotate(" + u + ") "),
      "0deg" !== h && (y += "rotateY(" + h + ") "),
      "0deg" !== l && (y += "rotateX(" + l + ") "),
      ("0deg" === f && "0deg" === c) || (y += "skew(" + f + ", " + c + ") "),
      (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + ") "),
      (g.style[Vi] = y || "translate(0, 0)");
  },
  Tr = function (t, e) {
    var i,
      r,
      n,
      s,
      a,
      o = e || this,
      u = o.xPercent,
      h = o.yPercent,
      l = o.x,
      f = o.y,
      c = o.rotation,
      p = o.skewX,
      d = o.skewY,
      _ = o.scaleX,
      m = o.scaleY,
      g = o.target,
      v = o.xOrigin,
      y = o.yOrigin,
      w = o.xOffset,
      b = o.yOffset,
      x = o.forceCSS,
      T = parseFloat(l),
      O = parseFloat(f);
    (c = parseFloat(c)),
      (p = parseFloat(p)),
      (d = parseFloat(d)) && ((p += d = parseFloat(d)), (c += d)),
      c || p
        ? ((c *= Ai),
          (p *= Ai),
          (i = Math.cos(c) * _),
          (r = Math.sin(c) * _),
          (n = Math.sin(c - p) * -m),
          (s = Math.cos(c - p) * m),
          p &&
            ((d *= Ai),
            (a = Math.tan(p - d)),
            (n *= a = Math.sqrt(1 + a * a)),
            (s *= a),
            d &&
              ((a = Math.tan(d)), (i *= a = Math.sqrt(1 + a * a)), (r *= a))),
          (i = Mt(i)),
          (r = Mt(r)),
          (n = Mt(n)),
          (s = Mt(s)))
        : ((i = _), (s = m), (r = n = 0)),
      ((T && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
        ((T = ar(g, "x", l, "px")), (O = ar(g, "y", f, "px"))),
      (v || y || w || b) &&
        ((T = Mt(T + v - (v * i + y * n) + w)),
        (O = Mt(O + y - (v * r + y * s) + b))),
      (u || h) &&
        ((a = g.getBBox()),
        (T = Mt(T + (u / 100) * a.width)),
        (O = Mt(O + (h / 100) * a.height))),
      (a =
        "matrix(" + i + "," + r + "," + n + "," + s + "," + T + "," + O + ")"),
      g.setAttribute("transform", a),
      x && (g.style[Vi] = a);
  },
  Or = function (t, e, i, r, n, s) {
    var a,
      o,
      u = 360,
      h = Y(n),
      l = parseFloat(n) * (h && ~n.indexOf("rad") ? ki : 1),
      f = s ? l * s : l - r,
      c = r + f + "deg";
    return (
      h &&
        ("short" === (a = n.split("_")[1]) &&
          (f %= u) !== f % 180 &&
          (f += f < 0 ? u : -360),
        "cw" === a && f < 0
          ? (f = ((f + 36e9) % u) - ~~(f / u) * u)
          : "ccw" === a && f > 0 && (f = ((f - 36e9) % u) - ~~(f / u) * u)),
      (t._pt = o = new di(t._pt, e, i, r, f, Ri)),
      (o.e = c),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  },
  Mr = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Dr = function (t, e, i) {
    var r,
      n,
      s,
      a,
      o,
      u,
      h,
      l = Mr({}, i._gsap),
      f = i.style;
    for (n in (l.svg
      ? ((s = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (f[Vi] = e),
        (r = vr(i, 1)),
        rr(i, Vi),
        i.setAttribute("transform", s))
      : ((s = getComputedStyle(i)[Vi]),
        (f[Vi] = e),
        (r = vr(i, 1)),
        (f[Vi] = s)),
    Di))
      (s = l[n]) !== (a = r[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = ae(s) !== (h = ae(a)) ? ar(i, n, s, h) : parseFloat(s)),
        (u = parseFloat(a)),
        (t._pt = new di(t._pt, r, n, o, u - o, Li)),
        (t._pt.u = h || 0),
        t._props.push(n));
    Mr(r, l);
  };
Ot("padding,margin,Width,Radius", function (t, e) {
  var i = "Top",
    r = "Right",
    n = "Bottom",
    s = "Left",
    a = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (i) {
      return e < 2 ? t + i : "border" + i + t;
    });
  fr[e > 1 ? "border" + t : t] = function (t, e, i, r, n) {
    var s, o;
    if (arguments.length < 4)
      return (
        (s = a.map(function (e) {
          return or(t, e, i);
        })),
        5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
      );
    (s = (r + "").split(" ")),
      (o = {}),
      a.forEach(function (t, e) {
        return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
      }),
      t.init(e, o, n);
  };
});
var kr,
  Ar,
  Er,
  Cr = {
    name: "css",
    register: $i,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, n) {
      var s,
        a,
        o,
        u,
        h,
        l,
        f,
        c,
        p,
        d,
        _,
        m,
        g,
        v,
        y,
        w,
        b,
        x,
        T,
        O = this._props,
        M = t.style,
        D = i.vars.startAt;
      for (f in (xi || $i(), e))
        if ("autoRound" !== f && ((a = e[f]), !mt[f] || !He(f, e, i, r, t, n)))
          if (
            ((h = typeof a),
            (l = fr[f]),
            "function" === h && (h = typeof (a = a.call(i, r, t, n))),
            "string" === h && ~a.indexOf("random(") && (a = me(a)),
            l)
          )
            l(this, t, f, a, i) && (y = 1);
          else if ("--" === f.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (a += ""),
              (ke.lastIndex = 0),
              ke.test(s) || ((c = ae(s)), (p = ae(a))),
              p ? c !== p && (s = ar(t, f, s, p) + p) : c && (a += c),
              this.add(M, "setProperty", s, a, r, n, 0, 0, f),
              O.push(f);
          else if ("undefined" !== h) {
            if (
              (D && f in D
                ? ((s =
                    "function" == typeof D[f] ? D[f].call(i, r, t, n) : D[f]),
                  f in R.units && !ae(s) && (s += R.units[f]),
                  "=" === (s + "").charAt(1) && (s = or(t, f)))
                : (s = or(t, f)),
              (u = parseFloat(s)),
              (d =
                "string" === h && "=" === a.charAt(1)
                  ? +(a.charAt(0) + "1")
                  : 0) && (a = a.substr(2)),
              (o = parseFloat(a)),
              f in Ii &&
                ("autoAlpha" === f &&
                  (1 === u && "hidden" === or(t, "visibility") && o && (u = 0),
                  nr(
                    this,
                    M,
                    "visibility",
                    u ? "inherit" : "hidden",
                    o ? "inherit" : "hidden",
                    !o
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = Ii[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (_ = f in Di))
            )
              if (
                (m ||
                  (((g = t._gsap).renderTransform && !e.parseTransform) ||
                    vr(t, e.parseTransform),
                  (v = !1 !== e.smoothOrigin && g.smooth),
                  ((m = this._pt = new di(
                    this._pt,
                    M,
                    Vi,
                    0,
                    1,
                    g.renderTransform,
                    g,
                    0,
                    -1
                  )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new di(
                  this._pt,
                  g,
                  "scaleY",
                  g.scaleY,
                  (d ? d * o : o - g.scaleY) || 0
                )),
                  O.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  (b = void 0),
                    (x = void 0),
                    (T = void 0),
                    (b = (w = a).split(" ")),
                    (x = b[0]),
                    (T = b[1] || "50%"),
                    ("top" !== x &&
                      "bottom" !== x &&
                      "left" !== T &&
                      "right" !== T) ||
                      ((w = x), (x = T), (T = w)),
                    (b[0] = hr[x] || x),
                    (b[1] = hr[T] || T),
                    (a = b.join(" ")),
                    g.svg
                      ? gr(t, a, 0, v, 0, this)
                      : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin &&
                          nr(this, g, "zOrigin", g.zOrigin, p),
                        nr(this, M, f, yr(s), yr(a)));
                  continue;
                }
                if ("svgOrigin" === f) {
                  gr(t, a, 1, v, 0, this);
                  continue;
                }
                if (f in pr) {
                  Or(this, g, f, u, a, d);
                  continue;
                }
                if ("smoothOrigin" === f) {
                  nr(this, g, "smooth", g.smooth, a);
                  continue;
                }
                if ("force3D" === f) {
                  g[f] = a;
                  continue;
                }
                if ("transform" === f) {
                  Dr(this, a, t);
                  continue;
                }
              }
            else f in M || (f = Ji(f) || f);
            if (
              _ ||
              ((o || 0 === o) && (u || 0 === u) && !Pi.test(a) && f in M)
            )
              o || (o = 0),
                (c = (s + "").substr((u + "").length)) !==
                  (p = ae(a) || (f in R.units ? R.units[f] : c)) &&
                  (u = ar(t, f, s, p)),
                (this._pt = new di(
                  this._pt,
                  _ ? g : M,
                  f,
                  u,
                  d ? d * o : o - u,
                  _ || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                    ? Li
                    : Fi
                )),
                (this._pt.u = p || 0),
                c !== p && ((this._pt.b = s), (this._pt.r = zi));
            else if (f in M) ur.call(this, t, f, s, a);
            else {
              if (!(f in t)) {
                ht(f, a);
                continue;
              }
              this.add(t, f, s || t[f], a, r, n);
            }
            O.push(f);
          }
      y && pi(this);
    },
    get: or,
    aliases: Ii,
    getSetter: function (t, e, i) {
      var r = Ii[e];
      return (
        r && r.indexOf(",") < 0 && (e = r),
        e in Di && e !== Qi && (t._gsap.x || or(t, "x"))
          ? i && Oi === i
            ? "scale" === e
              ? Yi
              : Ui
            : ((Oi = i || {}), "scale" === e ? Xi : Wi)
          : t.style && !V(t.style[e])
          ? ji
          : ~e.indexOf("-")
          ? Ni
          : si(t, e)
      );
    },
    core: { _removeProperty: rr, _getMatrix: mr }
  };
(vi.utils.checkPrefix = Ji),
  (Er = Ot(
    (kr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (Ar = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (t) {
      Di[t] = 1;
    }
  )),
  Ot(Ar, function (t) {
    (R.units[t] = "deg"), (pr[t] = 1);
  }),
  (Ii[Er[13]] = kr + "," + Ar),
  Ot(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (t) {
      var e = t.split(":");
      Ii[e[1]] = Er[e[0]];
    }
  ),
  Ot(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      R.units[t] = "px";
    }
  ),
  vi.registerPlugin(Cr);
var Sr = vi.registerPlugin(Cr) || vi;
Sr.core.Tween;
const Pr = getComputedStyle(document.body).getPropertyValue(
  "--type-line-opacity"
);
class Ir {
  DOM = {
    el: null,
    imageWrap: null,
    image: null,
    number: null,
    title: null,
    intro: null,
    description: null
  };
  constructor(t) {
    (this.DOM.el = t),
      (this.DOM.imageWrap = this.DOM.el.querySelector(".article__img-wrap")),
      (this.DOM.image = this.DOM.el.querySelector(".article__img")),
      (this.DOM.number = this.DOM.el.querySelector(".article__number")),
      (this.DOM.title = this.DOM.el.querySelector(".article__title")),
      (this.DOM.intro = this.DOM.el.querySelector(".article__intro")),
      (this.DOM.description = this.DOM.el.querySelector(
        ".article__description"
      ));
  }
}
class Lr {
  DOM = {
    el: null,
    image: null,
    title: null,
    description: null,
    article: null
  };
  article;
  constructor(t) {
    (this.DOM.el = t),
      (this.DOM.image = this.DOM.el.querySelector(".item__img")),
      (this.DOM.title = this.DOM.el.querySelector(".item__caption-title")),
      (this.DOM.description = this.DOM.el.querySelector(
        ".item__caption-description"
      )),
      (this.DOM.article = document.getElementById(this.DOM.el.dataset.article)),
      (this.article = new Ir(this.DOM.article));
    const e = { duration: 1, ease: "expo" };
    this.DOM.el.addEventListener("mouseenter", () => {
      vi.timeline({ defaults: e }).to(
        [this.DOM.image, this.DOM.title, this.DOM.description],
        { y: (t) => 8 * t - 4 }
      );
    }),
      this.DOM.el.addEventListener("mouseleave", () => {
        vi.timeline({ defaults: e }).to(
          [this.DOM.image, this.DOM.title, this.DOM.description],
          { y: 0 }
        );
      });
  }
}
((t = "img") =>
  new Promise((e) => {
    n(document.querySelectorAll(t), { background: !0 }, e);
  }))(".item__img, .article__img").then(() =>
  document.body.classList.remove("loading")
);
const Rr = new (class {
  DOM = {};
  constructor(t) {
    (this.DOM.el = t),
      (this.DOM.lines = [...document.querySelectorAll(".type__line")]);
  }
  in() {
    return Sr.timeline({ paused: !0 })
      .to(this.DOM.el, {
        duration: 1.4,
        ease: "power2.inOut",
        scale: 2.7,
        rotate: -90
      })
      .to(
        this.DOM.lines,
        {
          keyframes: [
            { x: "20%", duration: 1, ease: "power1.inOut" },
            { x: "-200%", duration: 1.5, ease: "power1.in" }
          ],
          stagger: 0.04
        },
        0
      )
      .to(
        this.DOM.lines,
        {
          keyframes: [
            { opacity: 1, duration: 1, ease: "power1.in" },
            { opacity: 0, duration: 1.5, ease: "power1.in" }
          ]
        },
        0
      );
  }
  out() {
    return Sr.timeline({ paused: !0 })
      .to(
        this.DOM.el,
        { duration: 1.4, ease: "power2.inOut", scale: 1, rotate: 0 },
        1.2
      )
      .to(
        this.DOM.lines,
        { duration: 2.3, ease: "back", x: "0%", stagger: -0.04 },
        0
      )
      .to(
        this.DOM.lines,
        {
          keyframes: [
            { opacity: 1, duration: 1, ease: "power1.in" },
            { opacity: Pr, duration: 1.5, ease: "power1.in" }
          ]
        },
        0
      );
  }
})(document.querySelector("[data-type-transition]"));
let zr = !1;
const Fr = document.querySelector(".frame");
let Br = [],
  qr = -1;
const jr = document.querySelector(".item-wrap");
[...jr.querySelectorAll(".item")].forEach((t) => {
  const e = new Lr(t);
  Br.push(e), e.DOM.el.addEventListener("click", () => Nr(e));
});
const Nr = (t) => {
    if (zr) return;
    (zr = !0), (qr = Br.indexOf(t));
    const e = vi.timeline({ onComplete: () => (zr = !1) });
    e.addLabel("start", 0)
      .addLabel("typeTransition", 0.3)
      .addLabel(
        "articleOpening",
        0.75 * Rr.in().totalDuration() + e.labels.typeTransition
      )
      .to(
        Br.map((t) => t.DOM.el),
        {
          duration: 0.8,
          ease: "power2.inOut",
          opacity: 0,
          y: (t) => (t % 2 ? "25%" : "-25%")
        },
        "start"
      )
      .to(
        Fr,
        {
          duration: 0.8,
          ease: "power3",
          opacity: 0,
          onComplete: () => vi.set(Fr, { pointerEvents: "none" })
        },
        "start"
      )
      .add(Rr.in().play(), "typeTransition")
      .add(() => {
        vi.set(Ur, { pointerEvents: "auto" }),
          vi.set(jr, { pointerEvents: "none" }),
          Br[qr].DOM.article.classList.add("article--current");
      }, "articleOpening")
      .to(Ur, { duration: 0.7, opacity: 1 }, "articleOpening")
      .set(
        [
          t.article.DOM.title,
          t.article.DOM.number,
          t.article.DOM.intro,
          t.article.DOM.description
        ],
        { opacity: 0, y: "50%" },
        "articleOpening"
      )
      .set(t.article.DOM.imageWrap, { y: "100%" }, 2)
      .set(t.article.DOM.image, { y: "-100%" }, 2)
      .to(
        [
          t.article.DOM.title,
          t.article.DOM.number,
          t.article.DOM.intro,
          t.article.DOM.description
        ],
        { duration: 1, ease: "expo", opacity: 1, y: "0%", stagger: 0.04 },
        "articleOpening"
      )
      .to(
        [t.article.DOM.imageWrap, t.article.DOM.image],
        { duration: 1, ease: "expo", y: "0%" },
        "articleOpening"
      );
  },
  Ur = document.querySelector(".back");
Ur.addEventListener("click", () =>
  (() => {
    if (zr) return;
    zr = !0;
    const t = Br[qr],
      e = vi.timeline({ onComplete: () => (zr = !1) });
    e.addLabel("start", 0)
      .addLabel("typeTransition", 0.5)
      .addLabel(
        "showItems",
        0.7 * Rr.out().totalDuration() + e.labels.typeTransition
      )
      .to(Ur, { duration: 0.7, ease: "power1", opacity: 0 }, "start")
      .to(
        [
          t.article.DOM.title,
          t.article.DOM.number,
          t.article.DOM.intro,
          t.article.DOM.description
        ],
        {
          duration: 1,
          ease: "power4.in",
          opacity: 0,
          y: "50%",
          stagger: -0.04
        },
        "start"
      )
      .to(
        t.article.DOM.imageWrap,
        { duration: 1, ease: "power4.in", y: "100%" },
        "start"
      )
      .to(
        t.article.DOM.image,
        { duration: 1, ease: "power4.in", y: "-100%" },
        "start"
      )
      .add(() => {
        vi.set(Ur, { pointerEvents: "none" }),
          vi.set(jr, { pointerEvents: "auto" }),
          t.DOM.article.classList.remove("article--current");
      })
      .add(Rr.out().play(), "typeTransition")
      .to(
        Fr,
        {
          duration: 0.8,
          ease: "power3",
          opacity: 1,
          onStart: () => vi.set(Fr, { pointerEvents: "auto" })
        },
        "showItems"
      )
      .to(
        Br.map((t) => t.DOM.el),
        { duration: 1, ease: "power3.inOut", opacity: 1, y: "0%" },
        "showItems"
      );
  })()
);
