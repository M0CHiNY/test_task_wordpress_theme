function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).jolty = t.jolty || {});
}(this, function (t) {
  "use strict";

  var _Ts, _xs, _mo, _wo, _Mo, _xo, _ko, _No, _Ho$data, _fs, _gs, _zo, _defineProperty2, _objectSpread2, _objectSpread3, _objectSpread4, _objectSpread5, _objectSpread7, _objectSpread8;
  var e = {};
  var s = function s() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return e[t] || (e[t] = t.replace(/-./g, function (t) {
      return t[1].toUpperCase();
    }));
  };
  var i = {};
  var o = function o() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return i[t] || (i[t] = t[0].toUpperCase() + t.slice(1));
  };
  var n = "ui",
    r = "ui-",
    a = ".ui",
    l = "--" + r,
    c = "_",
    h = "data-" + r,
    p = "active",
    u = r + p,
    d = "name",
    f = "mode",
    g = "px",
    m = "none",
    b = "width",
    v = "height",
    y = "top",
    w = "left",
    A = "right",
    T = "bottom",
    E = "center",
    k = "start",
    _ = "end",
    x = "up",
    O = "down",
    P = "title",
    S = "horizontal",
    C = "absolute",
    I = "fixed",
    L = "transition",
    F = "teleport",
    D = "button",
    $ = "class",
    M = "style",
    N = "role",
    H = "root",
    B = "confirm",
    q = "cancel",
    j = "before",
    W = "after",
    U = "mouse",
    z = "click",
    R = "hover",
    G = "focus",
    V = "scroll",
    K = "hide",
    J = "hidden",
    X = "show",
    Y = "shown",
    Z = "appear",
    Q = "target",
    tt = "awailable",
    et = tt + "-" + b,
    st = tt + "-" + v,
    it = "anchor",
    ot = "modal",
    nt = "content",
    rt = "item",
    at = "backdrop",
    lt = "popover",
    ct = "tooltip",
    ht = "toggler",
    pt = "trigger",
    ut = "dropdown",
    dt = "arrow",
    ft = "progress",
    gt = "dismiss",
    mt = "floating",
    bt = "dialog",
    vt = "flip",
    yt = "shrink",
    wt = "sticky",
    At = "placement",
    Tt = "padding",
    Et = "offset",
    kt = "boundary-" + Et,
    _t = "clip-path",
    xt = dt + "-" + Et,
    Ot = dt + "-" + Tt,
    Pt = dt + "-" + b,
    St = dt + "-" + v,
    Ct = "true",
    It = "false",
    Lt = document,
    Ft = Lt.body,
    Dt = "body",
    $t = "enter",
    Mt = "leave";
  o($t);
  var Nt = $t + o(p),
    Ht = $t + "From",
    Bt = $t + "To";
  o($t), o(Mt);
  var qt = Mt + o(p),
    jt = Mt + "From",
    Wt = Mt + "To";
  o(Mt);
  var Ut = K + o(f),
    zt = "duration";
  o($t), o(Mt);
  var Rt = "init",
    Gt = "destroy",
    Vt = "toggle",
    Kt = X,
    Jt = K,
    Xt = "remove",
    Yt = "update",
    Zt = "pause",
    Qt = "resume",
    te = "reset",
    ee = "on",
    se = "off",
    ie = "emit",
    oe = "once",
    ne = "inert",
    re = "autofocus",
    ae = "tabindex",
    le = "disabled",
    ce = "auto",
    he = h + mt,
    pe = "manual",
    ue = "placeholder",
    de = Rt,
    fe = j + o(de),
    ge = Gt,
    me = j + o(ge),
    be = j + o(X),
    ve = X,
    ye = Y,
    we = j + o(K),
    Ae = K,
    Te = J,
    Ee = Zt,
    ke = Qt,
    _e = te,
    xe = U + $t,
    Oe = U + Mt,
    Pe = U + O,
    Se = "change",
    Ce = z,
    Ie = "key" + O,
    Le = G,
    Fe = G + "in",
    De = G + "out",
    $e = "".concat(Ce, ".outside keyup.outside"),
    Me = V,
    Ne = "aria",
    He = Ne + "-controls",
    Be = Ne + "-expanded",
    qe = Ne + "-selected",
    je = Ne + "-" + J,
    We = Ne + "-labelledby",
    Ue = Ne + "-describedby",
    ze = Ne + "-orientation",
    Re = Ne + "-live",
    Ge = Ne + "-atomic",
    Ve = 13,
    Ke = 32,
    Je = 35,
    Xe = 36,
    Ye = 37,
    Ze = 38,
    Qe = 39,
    ts = 40,
    es = "a11y",
    ss = "group",
    is = "preventScroll",
    os = "hashNavigation";
  s(We);
  var ns = s(Ue);
  s(Be), s(qe), s(He);
  var rs = s(je),
    as = s(Re);
  s(Ge);
  var ls = "topLayer",
    cs = "moveToRoot",
    hs = mt + "Class",
    ps = ce + Gt,
    us = "ClassActive",
    ds = o(N),
    fs = "status",
    gs = "alert",
    ms = "region",
    bs = r + J,
    vs = r + Y,
    ys = $ + "-" + Y,
    ws = $ + "-" + J,
    As = {
      init: !0,
      destroy: !1,
      data: "",
      on: null,
      appear: null,
      eventDispatch: !0,
      eventBubble: !0,
      shown: null,
      a11y: !0,
      hideMode: J,
      keepPlace: !0,
      transition: !0,
      awaitAnimation: !1
    },
    Ts = (_Ts = {
      awaitAnimation: !1,
      placement: T,
      offset: 0,
      padding: 0,
      delay: 150,
      boundaryOffset: 0,
      shrink: !1,
      flip: !0,
      sticky: !0,
      escapeHide: !0,
      outsideHide: !0,
      focusTrap: !1,
      topLayer: !0,
      root: Dt,
      moveToRoot: !1,
      mode: !1
    }, _defineProperty(_Ts, hs, ""), _defineProperty(_Ts, "shown", !1), _defineProperty(_Ts, "arrow", null), _Ts),
    Es = "[".concat(le, "]"),
    ks = "[".concat(ne, "]"),
    _s = ":" + H,
    xs = (_xs = {}, _defineProperty(_xs, y, T), _defineProperty(_xs, T, y), _defineProperty(_xs, w, A), _defineProperty(_xs, A, w), _defineProperty(_xs, k, _), _defineProperty(_xs, _, k), _defineProperty(_xs, b, v), _defineProperty(_xs, v, b), _defineProperty(_xs, "x", "y"), _defineProperty(_xs, "y", "x"), _xs),
    Os = CSS.supports(_t + ":" + m) ? _t : "-webkit-" + _t,
    Ps = HTMLElement.prototype.hasOwnProperty(lt),
    Ss = ":is(:is(a,area)[href],:is(select,textarea,button,input:not([type=\"hidden\"])):not(disabled),details:not(:has(>summary)),iframe,:is(audio,video)[controls],[contenteditable],[tabindex]):not([inert],[inert] *,[tabindex^=\"-\"],[".concat(h, "focus-guard])"),
    Cs = "_cancelOnHide";
  var Is = Array.isArray,
    Ls = function Ls(t) {
      return t && !!t.getElementsByClassName;
    },
    Fs = function Fs(t) {
      return "function" == typeof t;
    },
    Ds = RegExp.prototype.test.bind(/(<([^>]+)>)/i),
    $s = function $s(t) {
      return "string" == typeof t;
    },
    Ms = function Ms(t) {
      return t && !!t[Symbol.iterator] && !$s(t);
    },
    Ns = function Ns(t) {
      return "number" == typeof t;
    },
    Hs = function Hs(t) {
      return t && t.constructor === Object;
    },
    Bs = function Bs(t) {
      return "DIALOG" === (t === null || t === void 0 ? void 0 : t.tagName);
    },
    qs = function qs() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " ";
      return t ? (Is(t) ? t : t.split(e)).filter(Boolean) : [];
    };
  function js(t, e, s) {
    var _s2, _t$classList;
    Is(e) && (e = e.filter(Boolean).join(" "));
    var i = qs(e);
    Ls(t) ? ((_s2 = s) !== null && _s2 !== void 0 ? _s2 : s = !t.classList.contains(i[0]), (_t$classList = t.classList)[s ? "add" : Xt].apply(_t$classList, _toConsumableArray(i))) : Ms(t) && t.forEach(function (t) {
      return js(t, i, s);
    });
  }
  var Ws = {};
  var Us = function Us() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return Ws[t] || (Ws[t] = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
  };
  function zs(t, e, s) {
    if (Ms(t)) t.forEach(function (t) {
      return zs(t, e, s);
    });else if (Hs(e)) for (var _s3 in e) zs(t, _s3, e[_s3]);else t.style.setProperty(Us(e), s);
  }
  var Rs = Array.from,
    Gs = function Gs(t, e) {
      return t === e || ($s(e) ? t.matches(e) : Ms(e) ? Rs(e).includes(t) : Fs(e) && e(t));
    },
    Vs = function Vs(t) {
      return void 0 !== t ? Ms(t) ? Rs(t) : [t] : [];
    },
    Ks = function Ks(t) {
      return t.length > 1 ? Rs(new Set(t)) : t;
    },
    Js = function Js(t, e) {
      var s = t;
      if ($s(t)) {
        var _i2 = new DOMParser().parseFromString(t, "text/html");
        if (e) return Rs(_i2.querySelectorAll(e));
        s = _i2.body.children;
      }
      return s ? s.length > 1 ? Rs(s) : s[0] : "";
    };
  function Xs(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Lt;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    if (Ls(t)) return [t];
    var i = t;
    return $s(e) && (e = Lt.querySelector(e)), Ls(e) && t ? ($s(t) ? i = "document" === (t = t.trim()) ? Lt : "window" === t ? window : Ds(t) ? Js(t) : e.querySelectorAll(t) : Ms(t) && (i = Rs(t, function (t) {
      return Xs(t, e);
    }).flat()), i = Vs(i), s && Gs(e, t) && i.unshift(e), Ks(i).filter(Boolean)) : [];
  }
  var Ys = function Ys(t, e) {
      return Xs(e).find(function (e) {
        return e === t || e.contains(t);
      });
    },
    Zs = function Zs(t, e, s, i) {
      var o = Fs(i);
      return (n = t, r = function r(t) {
        var n = [];
        for (; t;) if (t = t[e]) {
          if (i && (o ? i(t) : Gs(t, i))) break;
          n.push(t);
        }
        return function (t, e) {
          var s = Fs(e);
          return t = Rs(t), e ? t.filter(function (t, i, o) {
            return s ? e(t, i, o) : Gs(t, e);
          }) : t;
        }(n, s);
      }, Xs(n).map(r)).flat();
      var n, r;
    },
    Qs = function Qs(t, e) {
      return (t = Xs(t)).forEach(e), t;
    },
    ti = function ti(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        preventScroll: !0
      };
      return t && t.focus(e);
    },
    ei = function ei(t, e, s) {
      return Xs(t, e, s)[0];
    },
    si = function si(t) {
      return t && Ft.contains(t);
    },
    ii = function ii(t, e) {
      return function (t, e, s) {
        return Zs(t, "nextElementSibling", e, s);
      }(t, e)[0];
    },
    oi = function oi(t, e, s) {
      return Zs(t, "parentElement", e, s);
    },
    ni = function ni(t) {
      for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }
      Is(t) ? t.forEach(function (t) {
        return e.forEach(function (e) {
          return t && t.removeAttribute(e);
        });
      }) : e.forEach(function (e) {
        return t && t.removeAttribute(e);
      });
    },
    ri = function ri(t, e) {
      return js(t, e, !1);
    };
  function ai(t, e, s) {
    if (t) {
      if (Is(t)) return t.forEach(function (t) {
        return ai(t, e, s);
      });
      Fs(s) && (s = s(t.getAttribute(e))), null === s ? t.removeAttribute(e) : void 0 !== s && t.setAttribute(e, s);
    }
  }
  var li = function li(t) {
      return t.getBoundingClientRect().toJSON();
    },
    ci = function ci(t, e) {
      return t.getPropertyValue(e).trim();
    },
    hi = function hi(t) {
      for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }
      return Fs(t) ? t.apply(void 0, e) : t;
    },
    pi = function pi(t) {
      return location.hash.substring(1) === t;
    },
    ui = function ui() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
      var e = arguments.length > 1 ? arguments[1] : undefined;
      var i = Lt.createElement(t);
      for (var _len3 = arguments.length, s = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        s[_key3 - 2] = arguments[_key3];
      }
      return e && ($s(e) && (e = {
        class: e
      }), Object.entries(e).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          t = _ref2[0],
          e = _ref2[1];
        t === $ ? function (t, e) {
          js(t, e, !0);
        }(i, e) : t === M ? $s(e) ? i.style = e : zs(i, e) : ai(i, Us(t), e);
      })), s.forEach(function (t) {
        return t && i.append(t);
      }), i;
    },
    di = function di(t, e) {
      var s = 0,
        i = 0,
        o = 0,
        n = 0;
      return Ns(t) ? s = i = o = n = t : Is(t) ? 1 === t.length ? s = i = o = n = t[0] : 2 === t.length ? (s = o = t[0], i = n = t[1]) : 3 === t.length ? (s = t[0], i = n = t[1], o = t[2]) : (s = t[0], i = t[1], o = t[2], n = t[3]) : Hs(t) && (s = t.top || 0, i = t.right || 0, o = t.bottom || 0, n = t.left || 0), e ? [s, i, o, n] : {
        top: s,
        right: i,
        bottom: o,
        left: n
      };
    },
    fi = function fi() {
      for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        t[_key4] = arguments[_key4];
      }
      return "[".concat(h + t.join("-"), "]");
    };
  function gi(t, e, s) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Lt;
    for (var _len5 = arguments.length, o = new Array(_len5 > 4 ? _len5 - 4 : 0), _key5 = 4; _key5 < _len5; _key5++) {
      o[_key5 - 4] = arguments[_key5];
    }
    if (s) return s = hi.apply(void 0, [s, e].concat(o)), $s(s) && (s = i[t ? "querySelectorAll" : "querySelector"](s)), t ? Vs(s).filter(Boolean) : s;
  }
  var mi = function mi() {
      for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        t[_key6] = arguments[_key6];
      }
      return gi.apply(void 0, [!1].concat(t));
    },
    bi = function bi() {
      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }
      return gi.apply(void 0, [!0].concat(t));
    };
  var vi = Math.min,
    yi = Math.max;
  var wi = function wi(t) {
    var _getComputedStyle = getComputedStyle(t),
      e = _getComputedStyle.overflow,
      s = _getComputedStyle.overflowX,
      i = _getComputedStyle.overflowY,
      o = _getComputedStyle.display;
    return !/inline|contents/.test(o) && /auto|hidden|scroll|overlay|clip/.test(e + i + s);
  };
  var Ai = "".concat(Es, ",").concat(ks);
  var Ti = function Ti(t) {
    return t.matches(Ai);
  };
  function Ei() {
    var e = {};
    for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      t[_key8] = arguments[_key8];
    }
    var _iterator = _createForOfIteratorHelper(t.filter(Boolean)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _s4 = _step.value;
        for (var _i3 = 0, _Object$entries = Object.entries(_s4); _i3 < _Object$entries.length; _i3++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
            _t2 = _Object$entries$_i[0],
            _i4 = _Object$entries$_i[1];
          Hs(e[_t2]) ? e[_t2] = Hs(_i4) ? Ei(e[_t2], _i4) : _i4 : Is(e[_t2]) ? e[_t2] = Is(_i4) ? [].concat(_toConsumableArray(e[_t2]), _toConsumableArray(_i4)) : _i4 : void 0 !== _i4 && (e[_t2] = _i4);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return e;
  }
  var ki = function ki() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    return Hs(t) ? _objectSpread({
      animated: !0
    }, t) : {
      animated: t
    };
  };
  var _i = new ResizeObserver(function (t) {
    var _iterator2 = _createForOfIteratorHelper(t),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
          _e2 = _step2$value.borderBoxSize,
          _s5 = _step2$value.target;
        var _e2$ = _e2[0],
          _t3 = _e2$.blockSize,
          _i5 = _e2$.inlineSize;
        _s5.__resizeCallback__(_i5, _t3);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  var xi = function xi() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r;
      return t + Math.random().toString(36).substring(2, 12);
    },
    Oi = function Oi(t, _ref3, s, i) {
      var e = _ref3.dataset;
      return s.forEach(function (s) {
        var r = s,
          a = s;
        Is(s) && (r = s[0], a = s[1]);
        var l = e[n + o(a)];
        void 0 !== l && (i !== null && i !== void 0 && i.includes(r) ? l = "" === l || l === Ct || l !== It && void 0 : l && "{" === l[0] && (l = JSON.parse(l)), void 0 !== l && (t[r] = l));
      }), t;
    },
    Pi = function Pi(t) {
      return r + t + ":";
    },
    Si = function Si(t) {
      return r + (t ? t + "-" : "") + p;
    },
    Ci = function Ci(t, e) {
      return "[".concat(h + Vt).concat(e ? "~" : "", "=\"").concat(t, "\"],[href=\"#").concat(t, "\"]");
    };
  var Ii = CSS.registerProperty;
  var Li = function Li(_ref4) {
      var t = _ref4.value;
      return t.trim().split(" ").map(parseFloat);
    },
    Fi = function Fi(t, e) {
      return e === Xt ? si(t) : e === ws ? !t.classList.contains(bs) : e === ys ? t.classList.contains(vs) : !t.hasAttribute(e);
    },
    Di = function Di(t, e) {
      var s = t.getAttribute(h + e);
      return null === s ? s : s !== It;
    },
    $i = function $i(t, e, s) {
      var _t$getAttribute;
      var i = ((_t$getAttribute = t.getAttribute(h + e)) === null || _t$getAttribute === void 0 ? void 0 : _t$getAttribute.trim()) || "";
      var o = "{" === i[0];
      return i && (o ? i = JSON.parse(i) : s && (i = _defineProperty({}, s, i))), s ? i : [i, o];
    },
    Mi = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(t, e) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return t;
            case 2:
              e();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function Mi(_x, _x2) {
        return _ref5.apply(this, arguments);
      };
    }();
  var Ni = /*#__PURE__*/function () {
    function Ni() {
      _classCallCheck(this, Ni);
      this.eventsSet = new Set();
      for (var _i7 = 0, _arr = [ee, se, ie, oe]; _i7 < _arr.length; _i7++) {
        var _t4 = _arr[_i7];
        this[_t4] = this[_t4].bind(this);
      }
      this._id = 0;
    }
    _createClass(Ni, [{
      key: "getNamespaces",
      value: function getNamespaces(t) {
        var _s6;
        var _t$split = t.split(/\.(?![^([]*[\]])/),
          _t$split2 = _toArray(_t$split),
          e = _t$split2[0],
          s = _t$split2.slice(1);
        return s = (_s6 = s) === null || _s6 === void 0 ? void 0 : _s6.join("."), e = e.replace(/[[\]']+/g, ""), {
          eventFullName: t,
          event: e,
          namespace: s
        };
      }
    }, {
      key: "on",
      value: function on(t, e) {
        var _s7,
          _s8,
          _this = this;
        for (var _len9 = arguments.length, s = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
          s[_key9 - 2] = arguments[_key9];
        }
        var i,
          o = s[0],
          n = s[1];
        var r;
        return $s(o) && (_s7 = s, _s8 = _slicedToArray(_s7, 3), i = _s8[0], o = _s8[1], n = _s8[2], _s7), Hs(n) || (n = {
          capture: !!n
        }), r = o, o = function o(t) {
          r(t, t.detail);
        }, t = Qs(t, function (t) {
          (e = $s(e) ? qs(e) : Hs(e) ? [e] : e).forEach(function (e) {
            var s = _this._id++,
              r = _objectSpread({}, n);
            var a = o;
            var _ref6 = $s(e) ? _this.getNamespaces(e) : e,
              l = _ref6.event,
              c = _ref6.namespace;
            if (r.once && (a = function (t) {
              return function (e) {
                _this.offId(s), t(e);
              };
            }(a)), r.once = !1, i) {
              var _t5 = $s(i);
              a = function (e) {
                return function (s) {
                  s.deligateTarget = _t5 ? s.target.closest(i) : Ys(s.target, i), s.deligateTarget && e(s);
                };
              }(a);
            }
            t.addEventListener(l, a, r), _this.eventsSet.add({
              id: s,
              elem: t,
              eventFullName: e,
              event: l,
              namespace: c,
              handler: a,
              opts: r
            });
          });
        }), t;
      }
    }, {
      key: "once",
      value: function once() {
        return this.on.apply(this, _toConsumableArray(function (t, e) {
          t = Rs(t);
          var s = $s(t[2]) ? 4 : 3;
          var i = t[s];
          return i = Hs(i) ? i : {
            capture: !!i
          }, t[s] = _objectSpread(_objectSpread({}, i), e), t;
        }(arguments, {
          once: !0
        })));
      }
    }, {
      key: "offId",
      value: function offId(t) {
        this.removeSets([Rs(this.eventsSet).find(function (e) {
          return e.id === t;
        })]);
      }
    }, {
      key: "removeSets",
      value: function removeSets(t, e) {
        var _this2 = this;
        t.forEach(function (t) {
          t && (t.elem.removeEventListener(t.event, t.handler, e), _this2.eventsSet.delete(t));
        });
      }
    }, {
      key: "off",
      value: function off(t, e, s, i) {
        var _this3 = this;
        var o = this.eventsSet;
        if (arguments.length) return "*" === t && (t = Rs(o).map(function (t) {
          return t.elem;
        })), Qs(t, function (t) {
          e ? qs(e).forEach(function (e) {
            var _this3$getNamespaces = _this3.getNamespaces(e),
              n = _this3$getNamespaces.event,
              r = _this3$getNamespaces.namespace,
              a = Rs(o).filter(function (e) {
                return !(e.elem !== t || r && e.namespace !== r || n && e.event !== n || s && e.handler !== s);
              });
            _this3.removeSets(a, i);
          }) : _this3.removeSets(_toConsumableArray(o).filter(function (e) {
            return e.elem === t;
          }), i);
        });
        this.removeSets(o, i);
      }
    }, {
      key: "emit",
      value: function emit(t, e, s) {
        Qs(t, function (t) {
          qs(e).forEach(function (e) {
            t.dispatchEvent(new CustomEvent(e, s));
          });
        });
      }
    }]);
    return Ni;
  }();
  var Hi = /*#__PURE__*/function () {
    function Hi(t, e) {
      var _this4 = this;
      _classCallCheck(this, Hi);
      this._onResize = this._onResize.bind(this), t = Object.entries(t).sort(function (t, e) {
        return +t[0] - +e[0];
      }), this.mql = t.map(function (_ref7, i) {
        var _ref8 = _slicedToArray(_ref7, 2),
          e = _ref8[0],
          s = _ref8[1];
        var o;
        o = 0 === i ? "(max-width:".concat(t[1][0] - 1, "px)") : i === t.length - 1 ? "(min-width:".concat(e, "px)") : "(min-width:".concat(e, "px) and (max-width:").concat(t[i + 1][0] - 1, "px)");
        var n = window.matchMedia(o);
        return n.addEventListener(Se, _this4._onResize), {
          mq: n,
          width: +e,
          data: s
        };
      }), this.breakpoints = t, this.opts = e, this._onResize();
    }
    _createClass(Hi, [{
      key: "_onResize",
      value: function _onResize(t) {
        t && !t.matches || this.checkBreakpoints();
      }
    }, {
      key: "checkBreakpoints",
      value: function checkBreakpoints() {
        var t = this.opts,
          e = this.breakpoint,
          s = this.mql;
        var i,
          o = {};
        var _iterator3 = _createForOfIteratorHelper(s),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _step3.value,
              _t6 = _step3$value.width,
              _e3 = _step3$value.data,
              _n = _step3$value.mq;
            if (_t6 && !_n.matches) break;
            i = [_e3, _t6], o = Ei(o, _e3);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return e && e[1] === i[1] || (this.breakpoint = i, t.onUpdate && t.onUpdate(i, o)), this.breakpoint;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this5 = this;
        this.mql.forEach(function (_ref9) {
          var t = _ref9.mq;
          return t.removeEventListener(Se, _this5._onResize);
        });
      }
    }]);
    return Hi;
  }();
  function Bi(t, e, s) {
    var i = hi(t[e], s);
    return Hs(i) ? t[i.data] ? _objectSpread(_objectSpread({}, Bi(t, i.data, s)), i) : i : {};
  }
  Ps || document.documentElement.classList.add(r + "no-" + lt);
  var qi = /*#__PURE__*/function () {
    function qi(t, e) {
      var _e4,
        _t7,
        _e$template,
        _e5,
        _this6 = this;
      _classCallCheck(this, qi);
      Fs(e) && (e = e(t)), (_e4 = e) !== null && _e4 !== void 0 ? _e4 : e = {};
      var _this$constructor = this.constructor,
        s = _this$constructor.NAME,
        i = _this$constructor.BASE_NODE_NAME,
        o = _this$constructor.Default,
        n = _this$constructor._data,
        r = _this$constructor._templates,
        a = _this$constructor.allInstances;
      if ((_t7 = t) !== null && _t7 !== void 0 && _t7.id && Rs(a).find(function (e) {
        return e.base === t && e.constructor.NAME === s;
      })) return;
      qi.components[s] = this.constructor;
      var l = i !== null && i !== void 0 ? i : s;
      var c = e.data;
      if (null == t) e = Ei(o, Bi(n, c, t), e), t = $s(e.template) ? hi(r[e.template], e) : (_e$template = (_e5 = e).template) === null || _e$template === void 0 ? void 0 : _e$template.call(_e5, e), this._fromTemplate = !0;else if (t) {
        Ds(t) ? (t = Js(t), this._fromHTML = !0) : $s(t) && (t = Lt.querySelector(t));
        var _$i = $i(t, s),
          _$i2 = _slicedToArray(_$i, 2),
          _i8 = _$i2[0],
          _r = _$i2[1];
        if (c || (c = !_r && _i8), c && !n[c]) return;
        e = Ei(o, Bi(n, c, t), _r && _i8, e);
      }
      if (!(t = ei(t))) return;
      this[l] = t, this.baseOpts = this.opts = e, this.uuid = xi(), this.id = t.id || this.uuid;
      var h = new Ni();
      return [ee, se, oe].forEach(function (t) {
        _this6[t] = function () {
          return h[t].apply(h, arguments), _this6;
        };
      }), [Vt, Kt, Jt, Rt, Gt, Yt, ie].forEach(function (t) {
        var _this6$t;
        return _this6[t] = (_this6$t = _this6[t]) === null || _this6$t === void 0 ? void 0 : _this6$t.bind(_this6);
      }), this.baseOpts.breakpoints ? this._initBreakpoints() : this.init(), a.add(this), this;
    }
    _createClass(qi, [{
      key: "_initBreakpoints",
      value: function _initBreakpoints() {
        var _this7 = this;
        this.breakpoints = new Hi(_objectSpread({
          0: this.baseOpts
        }, this.baseOpts.breakpoints), {
          onUpdate: function onUpdate(t, e) {
            var _this7$_update;
            if (_this7.emit("breakpoint", t, _this7.breakpoint), t[0].data) {
              var _e6 = Bi(_this7.constructor._data, t[0].data);
              _e6 && (t[0] = _objectSpread(_objectSpread({}, t[0]), _e6));
            }
            _this7.opts = t[1] ? Ei(e, t[0]) : _objectSpread({}, e), delete _this7.opts.breakpoints, e.destroy ? _this7.destroy({
              keepInstance: !0
            }) : _this7.isInit ? (_this7$_update = _this7._update) === null || _this7$_update === void 0 ? void 0 : _this7$_update.call(_this7) : (qi.allInstances.forEach(function (t) {
              t.breakpoints && t.base === _this7.base && t !== _this7 && t.isInit && t.breakpoints.checkBreakpoints()[0].destroy && t.destroy({
                keepInstance: !0
              });
            }), _this7.init()), _this7.breakpoint = t;
          }
        });
      }
    }, {
      key: "emit",
      value: function emit(t) {
        for (var _len10 = arguments.length, e = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
          e[_key10 - 1] = arguments[_key10];
        }
        var s = this.opts,
          i = this.base,
          o = s.on,
          n = s.eventDispatch,
          r = s.eventBubble,
          a = s.eventPrefix;
        if (e = [this].concat(_toConsumableArray(e)), o && (o[t] && o[t].apply(o, _toConsumableArray(e)), o.any && o.any.apply(o, [t].concat(_toConsumableArray(e)))), Is(n) ? n.includes(t) : n) {
          var _s9 = Is(r) && r.includes(t) || !!r;
          i.dispatchEvent(new CustomEvent(a + t, {
            detail: e,
            bubbles: _s9
          }));
        }
        return this;
      }
    }, {
      key: "update",
      value: function update(t) {
        var _this$breakpoints, _this$_update;
        return t && (this.baseOpts = Ei(this.baseOpts, t), this.breakpoints || this.baseOpts.breakpoints ? ((_this$breakpoints = this.breakpoints) !== null && _this$breakpoints !== void 0 && _this$breakpoints.destroy(), this.breakpoints = !1, this._initBreakpoints()) : (_this$_update = this._update) === null || _this$_update === void 0 ? void 0 : _this$_update.call(this)), this;
      }
    }, {
      key: "base",
      get: function get() {
        var _this$constructor$BAS;
        return this[(_this$constructor$BAS = this.constructor.BASE_NODE_NAME) !== null && _this$constructor$BAS !== void 0 ? _this$constructor$BAS : this.constructor.NAME];
      }
    }, {
      key: "instances",
      get: function get() {
        return this.constructor.instances;
      }
    }, {
      key: "Default",
      get: function get() {
        return this.constructor.Default;
      }
    }], [{
      key: "get",
      value: function get(t) {
        if (void 0 === t) return _toConsumableArray(this.instances.values());
        var _iterator4 = _createForOfIteratorHelper(this.instances),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _slicedToArray(_step4.value, 2),
              _e7 = _step4$value[0],
              _s10 = _step4$value[1];
            if ([_e7, _s10.base].includes(t)) return _s10;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "getOrCreate",
      value: function getOrCreate(t, e) {
        return this.get(t, e) || new this(t, e);
      }
    }, {
      key: "initAll",
      value: function initAll() {
        var _this8 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Lt;
        return Rs(t.querySelectorAll(fi(this.NAME))).map(function (t) {
          return _this8.getOrCreate(t);
        });
      }
    }, {
      key: "updateDefault",
      value: function updateDefault(t) {
        return Ei(this.Default, t);
      }
    }, {
      key: "data",
      value: function data(t, e) {
        return e || (e = t, t = ""), e ? (this._data[t] = e, this) : this._data[t];
      }
    }, {
      key: "dispatchTopLayer",
      value: function dispatchTopLayer(t) {
        var e = this.components.toast;
        e && e.forceTopLayer(t);
      }
    }]);
    return qi;
  }();
  _defineProperty(qi, "allInstances", new Set());
  _defineProperty(qi, "components", {});
  var ji = function ji(t, e) {
    var _class2;
    return _class2 = /*#__PURE__*/function (_t8) {
      _inherits(_class2, _t8);
      var _super = _createSuper(_class2);
      function _class2() {
        _classCallCheck(this, _class2);
        return _super.apply(this, arguments);
      }
      _createClass(_class2, [{
        key: "isAnimating",
        get: function get() {
          var _this$transition;
          return (_this$transition = this.transition) === null || _this$transition === void 0 ? void 0 : _this$transition.isAnimating;
        }
      }, {
        key: "initialPlaceNode",
        get: function get() {
          var _ref10, _this$teleport$placeh, _this$teleport;
          return (_ref10 = (_this$teleport$placeh = (_this$teleport = this.teleport) === null || _this$teleport === void 0 ? void 0 : _this$teleport.placeholder) !== null && _this$teleport$placeh !== void 0 ? _this$teleport$placeh : this.placeholder) !== null && _ref10 !== void 0 ? _ref10 : this[this.constructor.NAME];
        }
      }, {
        key: "hide",
        value: function hide(t) {
          return this.toggle(!1, t);
        }
      }, {
        key: "show",
        value: function show(t) {
          return this.toggle(!0, t);
        }
      }], [{
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "toggle",
        value: function toggle(t, e, s) {
          var _this$instances$get;
          return (_this$instances$get = this.instances.get(t)) === null || _this$instances$get === void 0 ? void 0 : _this$instances$get.toggle(e, s);
        }
      }, {
        key: "show",
        value: function show(t, e) {
          var _this$instances$get2;
          return (_this$instances$get2 = this.instances.get(t)) === null || _this$instances$get2 === void 0 ? void 0 : _this$instances$get2.show(e);
        }
      }, {
        key: "hide",
        value: function hide(t, e) {
          var _this$instances$get3;
          return (_this$instances$get3 = this.instances.get(t)) === null || _this$instances$get3 === void 0 ? void 0 : _this$instances$get3.hide(e);
        }
      }]);
      return _class2;
    }(t), _defineProperty(_class2, "_data", {}), _defineProperty(_class2, "instances", new Map()), _class2;
  };
  var Wi = /*#__PURE__*/function () {
    function Wi(t, e, s) {
      _classCallCheck(this, Wi);
      this.elem = t, this.update(e, s), this.promises = [], this.isInit = !0;
    }
    _createClass(Wi, [{
      key: "update",
      value: function update(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return t = $s(t) ? {
          name: t
        } : t, t = _objectSpread(_objectSpread(_objectSpread({}, Wi.Default), e), t), this.opts = Oi(t, this.elem, [Nt, Ht, Bt, qt, jt, Wt, [d, L + "Name"]]), this;
      }
    }, {
      key: "toggleVariables",
      value: function toggleVariables(t) {
        var _this$elem = this.elem,
          e = _this$elem.offsetWidth,
          s = _this$elem.offsetHeight,
          i = _this$elem.style,
          o = [e, s];
        [b, v].forEach(function (e, s) {
          var n = l + L + "-" + e;
          t ? i.setProperty(n, o[s] + g) : i.removeProperty(n);
        });
      }
    }, {
      key: "toggleAnimationClasses",
      value: function toggleAnimationClasses(t) {
        return this.elem.style.transition = m, this.setClasses([t ? Ht : jt]), this.elem.offsetWidth, this.elem.style.transition = "", this.setClasses([t ? Nt : qt, t ? Bt : Wt]), this;
      }
    }, {
      key: "setClasses",
      value: function setClasses(t) {
        var e = this.elem,
          s = this.opts,
          i = ["", ""],
          o = [{}, {}];
        var n = !1,
          r = !1;
        [Nt, Ht, Bt, qt, jt, Wt].forEach(function (e) {
          var _s$e;
          var a = 0 | (t === null || t === void 0 ? void 0 : t.includes(e));
          Hs(s[e]) ? (n = !0, o[a] = _objectSpread(_objectSpread({}, o[a]), s[e])) : (r = !0, i[a] += ((_s$e = s[e]) !== null && _s$e !== void 0 ? _s$e : s.name ? s.name + "-" + Us(e) : "") + " ");
        }), r && i.forEach(function (t, s) {
          var _e$classList;
          return (_e$classList = e.classList)[s ? "add" : Xt].apply(_e$classList, _toConsumableArray(t.split(" ").filter(Boolean)));
        }), n && o.forEach(function (t, s) {
          Object.entries(t).forEach(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
              t = _ref12[0],
              i = _ref12[1];
            "-" !== t[0] && (t = Us(t)), s ? e.style.setProperty(t, i) : e.style.removeProperty(t);
          });
        });
      }
    }, {
      key: "collectPromises",
      value: function collectPromises(t) {
        var _i$duration$o, _i$duration;
        var e = this.elem,
          s = this.promises,
          i = this.opts,
          o = t ? $t : Mt,
          n = (_i$duration$o = (_i$duration = i.duration) === null || _i$duration === void 0 ? void 0 : _i$duration[o]) !== null && _i$duration$o !== void 0 ? _i$duration$o : i.duration;
        var r, a, l;
        if (s.length = 0, Fs(i[o]) && (r = new Promise(function (t) {
          return i[o](e, t);
        })), i.css && (l = e.getAnimations(), a = l.length && Promise.allSettled(l.map(function (_ref13) {
          var t = _ref13.finished;
          return t;
        }))), !n && !r && !a) return s;
        var c = isNaN(n) || null == n ? null : new Promise(function (t) {
          return setTimeout(t, n);
        });
        return c && s.push(c), r && s.push(r), a && s.push(a), this.animations = l, s;
      }
    }, {
      key: "isAnimating",
      get: function get() {
        return !!this.promises.length;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var _this$animations;
        return (_this$animations = this.animations) !== null && _this$animations !== void 0 && _this$animations.forEach(function (t) {
          return t.cancel();
        }), Promise.allSettled([this.getAwaitPromise()]);
      }
    }, {
      key: "getAwaitPromise",
      value: function getAwaitPromise() {
        return Promise.allSettled(this.promises);
      }
    }, {
      key: "run",
      value: function () {
        var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(t) {
          var e,
            s,
            i,
            _args2 = arguments;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                e = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : !0;
                s = this.elem, i = this.opts;
                _context2.t0 = s;
                if (!_context2.t0) {
                  _context2.next = 15;
                  break;
                }
                _context2.t1 = e;
                if (!_context2.t1) {
                  _context2.next = 13;
                  break;
                }
                i.css && (i.cssVariables && this.toggleVariables(!0), this.toggleAnimationClasses(t));
                this.collectPromises(t);
                _context2.t2 = this.promises.length;
                if (!_context2.t2) {
                  _context2.next = 12;
                  break;
                }
                _context2.next = 12;
                return this.getAwaitPromise();
              case 12:
                i.css && i.cssVariables && this.toggleVariables(!1);
              case 13:
                this.setClasses(null);
                this.promises.length = 0;
              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function run(_x3) {
          return _run.apply(this, arguments);
        }
        return run;
      }()
    }, {
      key: "destroy",
      value: function destroy() {
        this.setClasses(null), this.isInit = !1;
      }
    }], [{
      key: "createOrUpdate",
      value: function createOrUpdate(t, e, s, i) {
        if (s) return t ? t.update(s, i) : new Wi(e, s, i);
        t === null || t === void 0 || t.destroy();
      }
    }]);
    return Wi;
  }();
  _defineProperty(Wi, "Default", (_defineProperty2 = {
    name: n,
    css: !0,
    cssVariables: !1
  }, _defineProperty(_defineProperty2, $t, null), _defineProperty(_defineProperty2, Nt, null), _defineProperty(_defineProperty2, Ht, null), _defineProperty(_defineProperty2, Bt, null), _defineProperty(_defineProperty2, Mt, null), _defineProperty(_defineProperty2, jt, null), _defineProperty(_defineProperty2, qt, null), _defineProperty(_defineProperty2, Wt, null), _defineProperty(_defineProperty2, zt, null), _defineProperty2));
  var Ui = /*#__PURE__*/function () {
    function Ui(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 ? arguments[2] : undefined;
      _classCallCheck(this, Ui);
      this.elem = t, this.update(e, s);
    }
    _createClass(Ui, [{
      key: "update",
      value: function update(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return t = Hs(t) ? t : {
          to: t
        }, t = Ei(this.constructor.Default, e, t, $i(this.elem, F, "to")), this.opts = t, t.to ? this : this.destroy();
      }
    }, {
      key: "move",
      value: function move() {
        var e = this.opts,
          s = this.elem,
          i = e.position;
        for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          t[_key11] = arguments[_key11];
        }
        var o = hi.apply(void 0, [e.to].concat(t));
        if (o = $s(o) ? Lt.querySelector(o) : o, o) return this.placeholder = Lt.createComment(r + F + ":" + s.id), this.placeholder && s.before(this.placeholder), o.insertAdjacentElement(i, s), this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.reset();
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this$placeholder;
        return (_this$placeholder = this.placeholder) !== null && _this$placeholder !== void 0 && _this$placeholder.replaceWith(this.elem), this.placeholder = null, this;
      }
    }], [{
      key: "createOrUpdate",
      value: function createOrUpdate(t, e, s, i) {
        return t ? t.update(s, i) : !1 !== s || !s.disableAttributes && e.getAttribute(h + F) ? new Ui(e, s, i) : null;
      }
    }]);
    return Ui;
  }();
  _defineProperty(Ui, "Default", {
    to: !1,
    position: "beforeend",
    disableAttributes: !1
  });
  var zi = Ce + a + "-" + gt;
  function Ri(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.base;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.hide;
    t[c + gt] && (t.off(e, zi), t[c + gt] = !1), t.opts[gt] && (t.on(e, zi, $s(t.opts[gt]) ? t.opts[gt] : "[".concat(h + gt, "=\"\"],[").concat(h + gt, "=\"").concat(t.constructor.NAME, "\"]"), function (e) {
      e.preventDefault(), e.stopPropagation();
      var i = {
        event: e,
        trigger: e.deligateTarget
      };
      s(i), t.constructor[Cs] && t.emit(q, i);
    }), t[c + gt] = !0);
  }
  var Gi = Ie + ".escapeHide";
  function Vi(t, e, s) {
    e ? t.on(s, Gi, function (e) {
      var _t$opts$escapeHide$st;
      27 === e.keyCode && (((_t$opts$escapeHide$st = t.opts.escapeHide.stop) !== null && _t$opts$escapeHide$st !== void 0 ? _t$opts$escapeHide$st : 1) && e.stopPropagation(), t.hide({
        event: e
      }), t.constructor[Cs] && t.emit(q, {
        event: e
      }));
    }) : t.off(s, Gi);
  }
  var Ki = function Ki(t) {
      var _e$querySelector;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.base;
      var s = t.opts.autofocus;
      var i = mi(t, !0 === s ? "[".concat(re, "],[").concat(h + re, "=\"\"],[").concat(h + re, "=\"").concat(t.constructor.NAME, "\"]") : s, e);
      i || (i = e.contains(Lt.activeElement) && Lt.activeElement), i || !t.opts.focusTrap || Bs(e) || (i = (_e$querySelector = e.querySelector(Ss)) !== null && _e$querySelector !== void 0 ? _e$querySelector : e), ti(i);
    },
    Ji = function Ji(t) {
      var _t$ue;
      var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref14$remove = _ref14.remove,
        e = _ref14$remove === void 0 ? !1 : _ref14$remove,
        _ref14$keepInstance = _ref14.keepInstance,
        s = _ref14$keepInstance === void 0 ? !1 : _ref14$keepInstance,
        _ref14$keepState = _ref14.keepState,
        i = _ref14$keepState === void 0 ? !1 : _ref14$keepState;
      var o = t.base,
        n = t.off,
        r = t.emit,
        a = t.constructor,
        l = t[a.NAME];
      return (_t$ue = t[ue]) !== null && _t$ue !== void 0 && _t$ue.replaceWith(o), ["autohide", mt, L, F].forEach(function (e) {
        t[e] && (t[e].destroy(), t[e] = null);
      }), n(), s || uo(t), e ? o.remove() : i || (ri(l, [bs, vs]), ni(l, J, ne)), t.isInit = !1, r(ge), t;
    };
  var Xi = a + "-" + pt;
  var Yi = function Yi(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.toggler;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.base;
    var _t$opts = t.opts,
      i = _t$opts.trigger,
      o = _t$opts.delay,
      n = _t$opts.mode,
      r = t.toggle,
      a = t.on;
    if (t[c + pt] && (t.off("*", Xi), t[c + pt] = !1), !i) return;
    var l = i.includes(z),
      h = n !== ot && i.includes(R),
      p = n !== ot && i.includes(G),
      u = [];
    var d,
      f,
      g = !1;
    h && (o = Is(o) ? o : [o, o]), a(e, "pointerdown" + Xi, function (t) {
      f = t.pointerType;
    }), l && a(e, Ce + Xi, function (s) {
      f === U && h || t.isOpen && t.transition.isAnimating && t.floating.floatings.size ? f = null : r(null, {
        event: s,
        trigger: e
      });
    }), h && u.push(xe + Xi, Oe + Xi), p && (u.push(Fe + Xi, De + Xi), l && a(e, Pe, function () {
      g = !0, clearTimeout(d), requestAnimationFrame(function () {
        return g = !1;
      });
    })), (h || p) && a([e, s], u, function (t) {
      var i = t.type,
        n = i === Fe || i === De;
      if (i === Fe && g || i === De && h && s.matches(":" + R)) return;
      var a = h && i === xe || p && i === Fe,
        l = n ? 0 : o[a ? 0 : 1];
      clearTimeout(d), l ? d = setTimeout(function () {
        r(a, {
          trigger: e,
          event: t
        });
      }, l) : r(a, {
        event: t,
        trigger: t.target
      });
    }), t[c + pt] = !0;
  };
  var Zi = G + "-guard";
  var Qi = /*#__PURE__*/function () {
    function Qi(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Qi);
      this.target = t, this.opts = e, this.init();
    }
    _createClass(Qi, [{
      key: "init",
      value: function init() {
        var _this9 = this;
        var t = this.target,
          e = this.opts;
        this.onFocus = function (s) {
          var i = e.anchor,
            o = !1;
          var n = s.target.getAttribute(h + Zi) === j;
          if (e.focusAfterAnchor && i) {
            var _e$onFocusOut;
            if (!n) {
              var _t9 = _toConsumableArray(Lt.querySelectorAll(Ss));
              i = _t9[_t9.findIndex(function (t) {
                return t === i;
              }) + 1];
            }
            return (_e$onFocusOut = e.onFocusOut) !== null && _e$onFocusOut !== void 0 && _e$onFocusOut.call(e), ti(i);
          }
          s.relatedTarget === i && (o = !0), Rs(t.querySelectorAll(Ss)).at(!o && n ? -1 : 0).focus();
        }, this.focusGuards = [j, W].map(function (s) {
          var _e$strategy, _ui;
          var i = ui("span", (_ui = {}, _defineProperty(_ui, ae, 0), _defineProperty(_ui, h + Zi, s), _defineProperty(_ui, "style", "outline:none;opacity:0;position:".concat((_e$strategy = e.strategy) !== null && _e$strategy !== void 0 ? _e$strategy : I, ";pointer-events:none;")), _ui));
          return t[s](i), i.addEventListener(G, _this9.onFocus), i;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this10 = this;
        this.focusGuards.forEach(function (t) {
          t.remove(), t.removeEventListener(G, _this10.onFocus);
        });
      }
    }]);
    return Qi;
  }();
  (function () {
    var t = "";
    [ct, ut, lt].forEach(function (e) {
      var s = l + e + "-";
      [wt, vt, yt, At, Tt, Et, kt, xt, Ot, Pt, St].forEach(function (e) {
        Ii ? Ii({
          name: s + e,
          syntax: "*",
          inherits: !1
        }) : t += s + e + ":;";
      });
    }), Ii || Lt.head.appendChild(ui(M, !1, "*{".concat(t, "}")));
  })();
  var to = [vt, wt, yt, At, ls, cs];
  var eo = /*#__PURE__*/function () {
    function eo(_ref15) {
      var t = _ref15.target,
        e = _ref15.anchor,
        s = _ref15.arrow,
        i = _ref15.opts,
        _ref15$name = _ref15.name,
        o = _ref15$name === void 0 ? "" : _ref15$name,
        n = _ref15.base,
        r = _ref15.teleport,
        a = _ref15.instance;
      _classCallCheck(this, eo);
      var _Ni = new Ni(),
        l = _Ni.on,
        c = _Ni.off;
      Object.assign(this, {
        target: t,
        anchor: e,
        arrow: s,
        opts: i,
        name: o,
        on: l,
        off: c,
        base: n,
        teleport: r,
        instance: a,
        floatings: new Set()
      });
    }
    _createClass(eo, [{
      key: "init",
      value: function init() {
        var _this11 = this,
          _K,
          _ref19,
          _o$dt,
          _ref20,
          _o$dt2,
          _this$parentFloating;
        var t = this.target,
          e = this.anchor,
          i = this.arrow,
          o = this.opts,
          n = this.name,
          r = this.base,
          a = this.on,
          c = l + n + "-",
          p = oi(e, wi),
          u = getComputedStyle(e),
          d = getComputedStyle(t),
          m = {};
        to.map(function (t) {
          var e = Us(t);
          return m[t] = ci(u, c + e) || ci(d, c + e);
        }), [].concat(to, [f, hs]).forEach(function (t) {
          t === vt ? m[vt] = m[vt] ? m[vt].split(" ").map(function (t) {
            return t === Ct;
          }) : Vs(o[vt]) : m[t] = t === At || t === f || t === hs ? r.getAttribute(h + Us(t)) || m[t] || o[At] : m[t] === Ct || m[t] !== It && o[t], _this11[t] = m[t];
        });
        var x = this.shrink,
          O = this.sticky,
          P = this.topLayer,
          S = this.moveToRoot,
          C = this.flip,
          I = this.placement,
          L = this.mode,
          F = P && L !== ot && Ps,
          D = P && Ps || L === ot || S,
          $ = o.focusTrap && L !== ot || F && S,
          M = this.createWrapper(F);
        if (S && L !== ot && !o.focusTrap && a(e, Ie, function (e) {
          if (9 === e.keyCode && !e.shiftKey) {
            var _s11 = t.querySelector(Ss);
            _s11 && (e.preventDefault(), ti(_s11));
          }
        }), I === bt) return this;
        var N = M.style,
          _ref16 = function (t, e, i, o) {
            var n = [Tt, Et, kt, xt, Ot, Pt, St].map(function (s) {
                var _i9, _2, _i9$_;
                var i = ci(t, o + s) || ci(e, o + s);
                if (i) return i = i.split(" "), s === kt ? i = di(i, !0) : (_i9$_ = (_i9 = i)[_2 = 1]) !== null && _i9$_ !== void 0 ? _i9$_ : _i9[_2] = i[0], {
                  name: s,
                  value: i
                };
              }).filter(Boolean),
              r = n.map(function (_ref17) {
                var t = _ref17.name,
                  e = _ref17.value;
                if (t === kt) {
                  var _t10 = e.splice(2).join(" ");
                  return [e = e.join(" "), _t10].join(",");
                }
                return e.join(" ");
              }).join(",");
            i.style.setProperty(Os, "polygon(".concat(r, ")"));
            var a = getComputedStyle(i),
              l = a[Os].slice(8, -1).split(",").values(),
              c = {
                wrapperComputedStyle: a
              };
            return n.length && n.forEach(function (_ref18) {
              var t = _ref18.name;
              var e = Li(l.next());
              t === kt ? e = [].concat(_toConsumableArray(e), _toConsumableArray(Li(l.next()))) : t !== Et && t !== xt || (e = e[0]), c[s(t)] = e;
            }), n.length && i.style.removeProperty(Os), c;
          }(u, d, M, c),
          H = _ref16.padding,
          _ref16$offset = _ref16.offset,
          B = _ref16$offset === void 0 ? o.offset : _ref16$offset,
          _ref16$boundaryOffset = _ref16.boundaryOffset,
          q = _ref16$boundaryOffset === void 0 ? o.boundaryOffset : _ref16$boundaryOffset,
          j = _ref16.arrowOffset,
          W = _ref16.arrowPadding,
          U = _ref16.arrowWidth,
          z = _ref16.arrowHeight,
          R = _ref16.wrapperComputedStyle;
        var G = li(e);
        var V = {};
        var K;
        [b, v].forEach(function (t) {
          V[t] = parseFloat(R[t]), N.setProperty(c + t, V[t] + g), N.setProperty(c + it + "-" + t, G[t] + g);
        }), (i || U || z) && (K = (_K = {}, _defineProperty(_K, b, (U === null || U === void 0 ? void 0 : U[0]) || (i === null || i === void 0 ? void 0 : i.offsetWidth)), _defineProperty(_K, v, (z === null || z === void 0 ? void 0 : z[0]) || (i === null || i === void 0 ? void 0 : i.offsetHeight)), _K), K[Tt] = (_ref19 = W !== null && W !== void 0 ? W : (_o$dt = o[dt]) === null || _o$dt === void 0 ? void 0 : _o$dt.padding) !== null && _ref19 !== void 0 ? _ref19 : 0, K[Et] = (_ref20 = j !== null && j !== void 0 ? j : (_o$dt2 = o[dt]) === null || _o$dt2 === void 0 ? void 0 : _o$dt2.offset) !== null && _ref20 !== void 0 ? _ref20 : 0);
        var J = {
          anchorRect: G,
          targetRect: V,
          arrow: K,
          placement: I,
          inTopLayer: D,
          flip: C,
          sticky: O,
          shrink: x,
          offset: B,
          boundaryOffset: q,
          padding: H,
          minHeight: parseFloat(d.minHeight) || 0,
          minWidth: parseFloat(d.minWidth) || 0
        };
        var X = 0,
          Y = !1;
        var Z = function Z() {
          if (Y) return;
          Y = !0, G = li(e), D || (G.left = G.x = e.offsetLeft, G.top = G.y = e.offsetTop, G.right = e.offsetLeft + G.width, G.bottom = e.offsetTop + G.height);
          var t = function (_ref21, _c, _3, _c$_, _a, _4, _a$_, _P) {
            var t = _ref21.anchorRect,
              e = _ref21.targetRect,
              s = _ref21.arrow,
              i = _ref21.placement,
              o = _ref21.inTopLayer,
              _ref21$boundaryOffset = _ref21.boundaryOffset,
              n = _ref21$boundaryOffset === void 0 ? 0 : _ref21$boundaryOffset,
              _ref21$offset = _ref21.offset,
              r = _ref21$offset === void 0 ? 0 : _ref21$offset,
              _ref21$padding = _ref21.padding,
              a = _ref21$padding === void 0 ? 0 : _ref21$padding,
              _ref21$shrink = _ref21.shrink,
              l = _ref21$shrink === void 0 ? !1 : _ref21$shrink,
              _ref21$flip = _ref21.flip,
              c = _ref21$flip === void 0 ? !1 : _ref21$flip,
              _ref21$sticky = _ref21.sticky,
              h = _ref21$sticky === void 0 ? !1 : _ref21$sticky,
              _ref21$minWidth = _ref21.minWidth,
              p = _ref21$minWidth === void 0 ? 0 : _ref21$minWidth,
              _ref21$minHeight = _ref21.minHeight,
              u = _ref21$minHeight === void 0 ? 0 : _ref21$minHeight;
            n = di(n), c = Is(c) ? c : [c], (_c$_ = (_c = c)[_3 = 1]) !== null && _c$_ !== void 0 ? _c$_ : _c[_3] = c[0], a = Is(a) ? a : [a], (_a$_ = (_a = a)[_4 = 1]) !== null && _a$_ !== void 0 ? _a$_ : _a[_4] = a[0], o || (l = !1, c = !1, h = !1);
            var _i$split = i.split("-"),
              _i$split2 = _slicedToArray(_i$split, 2),
              d = _i$split2[0],
              _i$split2$ = _i$split2[1],
              f = _i$split2$ === void 0 ? E : _i$split2$,
              g = d === w || d === A,
              m = g ? b : v,
              x = g ? w : y,
              O = g ? y : w,
              P = (_P = {}, _defineProperty(_P, b, p), _defineProperty(_P, v, u), _P);
            var S = null,
              C = null;
            var I = visualViewport,
              L = 1 !== I.scale && Math.abs(window.innerWidth - I.width) > 2;
            return function o(_q, _U, _z, _ref22) {
              var p = S && xs[d] || d,
                u = C && xs[f] || f,
                F = u === k,
                D = u === _,
                $ = u === E,
                M = p === x,
                N = a[0] + a[1],
                H = xs[m],
                B = xs[O],
                q = (_q = {}, _defineProperty(_q, y, t[y]), _defineProperty(_q, w, t[w]), _defineProperty(_q, A, I[b] - t[w] - t[b]), _defineProperty(_q, T, I[v] - t[y] - t[v]), _q);
              L && (q[y] -= I.offsetTop, q[w] -= I.offsetLeft, q[A] += I.offsetLeft, q[T] += I.offsetTop);
              var j = L ? g ? I.offsetTop : I.offsetLeft : 0;
              var W;
              q[p] -= r + n[p], q[xs[p]] -= n[O] + n[B], h ? W = I[H] - N : (W = I[H] - t[H] / 2, F ? W = q[B] + t[H] - N : D && (W = q[O] + t[H] - N));
              var U = (_U = {}, _defineProperty(_U, m, yi(P[m], q[p])), _defineProperty(_U, H, yi(P[H], W)), _U),
                z = (_z = {}, _defineProperty(_z, m, l ? vi(e[m], U[m]) : e[m]), _defineProperty(_z, H, l ? vi(e[H], U[H]) : e[H]), _z);
              if ((c[0] || c[1]) && null === S && null === C && (c[0] && e[m] > q[p] && q[p] < q[xs[p]] && (S = !0), c[1] && q[B] < e[H] - t[H] + a[0] + n[B] && (C = !0), S || C)) return o();
              var R, G;
              R = M ? t[x] - z[m] - r : t[xs[x]] + r, G = F ? t[O] + a[0] : $ ? t[O] - (z[H] - t[H]) / 2 : t[B] - z[H] - a[1];
              var V = G;
              h && (G < n[O] + j ? F || (G = n[O] + j, t[O] - j < n[O] - a[0] && (G = t[O] + a[0])) : G + z[H] + n[B] > I[H] + j && (D || (G -= G + z[H] - I[H] - j + n[B], q[B] < -a[1] + n[B] && (G -= q[B] + a[1] - n[B]))));
              var K = V - G;
              var J,
                X = {};
              if (s) {
                var _e9, _5, _e9$_;
                var _t11,
                  _s$padding = s.padding,
                  _e8 = _s$padding === void 0 ? 0 : _s$padding,
                  _s$offset = s.offset,
                  _i10 = _s$offset === void 0 ? 0 : _s$offset;
                _e8 = Is(_e8) ? _e8 : [_e8], (_e9$_ = (_e9 = _e8)[_5 = 1]) !== null && _e9$_ !== void 0 ? _e9$_ : _e9[_5] = _e8[0], _t11 = F ? _e8[0] : $ ? z[H] / 2 - s[H] / 2 : z[H] - _e8[1] - s[H], _t11 += K + yi(0, -z[H] / 2);
                var _o2 = -s[H] / 2 + (M ? -_i10 : _i10);
                M && (_o2 += z[m]), X = g ? [_o2, _t11] : [_t11, _o2];
              }
              if (s) J = X;else {
                var _t12 = F ? a[0] : D ? z[H] - a[1] : z[xs[m]] / 2,
                  _e10 = M ? z[m] : 0;
                J = g ? [_e10, _t12] : [_t12, _e10];
              }
              return _ref22 = {}, _defineProperty(_ref22, x, R), _defineProperty(_ref22, O, G), _defineProperty(_ref22, et, U[b]), _defineProperty(_ref22, st, U[v]), _defineProperty(_ref22, "arrow", X), _defineProperty(_ref22, "placement", S ? xs[i] : i), _defineProperty(_ref22, "transformOrigin", J), _ref22;
            }();
          }(_objectSpread(_objectSpread({}, J), {}, {
            anchorRect: G
          }));
          if (D && (t.top += window.scrollY, t.left += window.scrollX), X && Math.abs(X - t.top) > 50) return X = t.top, requestAnimationFrame(function () {
            Y = !1;
          }), Z();
          X = t.top, ai(M, h + "current-" + At, t[At]), x && [et, st].forEach(function (e) {
            return N.setProperty(c + e, t[e] + g);
          }), K && [w, y].forEach(function (e, s) {
            return N.setProperty(c + dt + "-" + e, t.arrow[s] + g);
          }), N.setProperty(c + "transform-origin", "".concat(t.transformOrigin[0], "px ").concat(t.transformOrigin[1], "px")), N.translate = "".concat(t.left, "px ").concat(t.top, "px 0"), requestAnimationFrame(function () {
            Y = !1;
          });
        };
        return function (t, e) {
          t.__resizeCallback__ = e, _i.observe(t, {
            box: "border-box"
          });
        }(t, function (t, e) {
          V[b] = t, V[v] = e, Z();
        }), Z(), this._toggleApi($), a(p, Me, Z, {
          passive: !0
        }), a(visualViewport, [Me, "resize"], Z, {
          passive: !0
        }), a(window, Me, Z, {
          passive: !0
        }), this.updatePosition = Z.bind(this), eo.instances.add(this), this.parentFloating = Rs(eo.instances).find(function (t) {
          return t !== _this11 && e.closest("#" + t.base.id);
        }), (_this$parentFloating = this.parentFloating) !== null && _this$parentFloating !== void 0 && (_this$parentFloating = _this$parentFloating.floatings) !== null && _this$parentFloating !== void 0 && _this$parentFloating.add(this), this;
      }
    }, {
      key: "_toggleApi",
      value: function _toggleApi(t) {
        var e = this.wrapper,
          s = this.opts,
          i = this.mode,
          o = this.topLayer,
          n = this.anchor,
          r = this.target,
          l = this.instance,
          c = Bs(e),
          h = i === ot,
          p = o && Ps && e.popover,
          u = function u(t) {
            return l.constructor.dispatchTopLayer(t);
          };
        c ? (h ? (e.open && e.close(), e.showModal(), u === null || u === void 0 ? void 0 : u(ot)) : p ? (e.showPopover(), e.open = !0, u === null || u === void 0 ? void 0 : u(lt)) : e.show(), this.on(e, q + a, function (t) {
          return t.preventDefault();
        })) : p && (e.showPopover(), u === null || u === void 0 ? void 0 : u(lt)), t && (this.focusGuards = new Qi(r, {
          focusAfterAnchor: !s.focusTrap,
          anchor: n,
          topLayer: o,
          strategy: C,
          onFocusOut: function onFocusOut() {
            var _l$hide;
            c && ((_l$hide = l.hide) === null || _l$hide === void 0 ? void 0 : _l$hide.call(l));
          }
        }));
      }
    }, {
      key: "createWrapper",
      value: function createWrapper(t) {
        var _p, _ei;
        var e = this.target,
          s = this.name,
          i = this.anchor,
          o = this.opts,
          n = this.placement,
          r = this.mode,
          a = this.moveToRoot,
          c = {
            zIndex: "var(".concat(l, "floating-top-layer,999)"),
            margin: 0,
            padding: 0,
            background: m,
            maxWidth: m,
            maxHeight: m,
            overflow: "unset",
            pointerEvents: m,
            display: "flex",
            justifyContent: E,
            alignItems: E,
            willChange: "transform"
          };
        n === bt ? (c.position = I, c.inset = 0, c.height = ce, c.width = ce) : (c.position = C, c.inset = ce, c.left = 0, c.top = 0, c.height = c.width = "fit-" + nt, c.minWidth = "max-" + nt);
        var p = (_p = {
          style: c,
          class: this[hs]
        }, _defineProperty(_p, he, s), _defineProperty(_p, h + mt + "-" + f, r), _p);
        t && (p[lt] = pe), void 0 === o.interactive || o.interactive ? e.style.pointerEvents = ce : (p[ne] = "", p.style.pointerEvents = m);
        var u = this.wrapper = ui(r === ot || r === bt ? bt : "div", p);
        return this.teleport && (this.teleport.opts.to = u, this.teleport.move()), a ? (_ei = ei(o.root)) === null || _ei === void 0 ? void 0 : _ei.append(u) : i.after(u), u;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this$wrapper$close, _this$wrapper, _this$focusGuards, _this$parentFloating2;
        this.off(), _i.unobserve(this.target), (_this$wrapper$close = (_this$wrapper = this.wrapper).close) !== null && _this$wrapper$close !== void 0 && _this$wrapper$close.call(_this$wrapper), this.wrapper.popover && Ps && this.wrapper.hidePopover(), this.base.style.pointerEvents = "", (_this$focusGuards = this.focusGuards) !== null && _this$focusGuards !== void 0 && _this$focusGuards.destroy(), this.wrapper.remove(), this.teleport.reset(), eo.instances.delete(this), (_this$parentFloating2 = this.parentFloating) === null || _this$parentFloating2 === void 0 || (_this$parentFloating2 = _this$parentFloating2.floatings) === null || _this$parentFloating2 === void 0 ? void 0 : _this$parentFloating2.delete(this);
      }
    }]);
    return eo;
  }();
  _defineProperty(eo, "instances", new Set());
  var so = function so(t, e) {
      var _i$ue, _i$_floatingParent;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.base;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;
      var o = e.opts,
        n = o[Ut];
      if (n === Xt) {
        if (t) o.keepPlace ? ((_i$ue = i[ue]) !== null && _i$ue !== void 0 && _i$ue.replaceWith(s), i[ue] = null) : (_i$_floatingParent = i._floatingParent) === null || _i$_floatingParent === void 0 ? void 0 : _i$_floatingParent.append(s);else if (o.keepPlace) s.replaceWith(i[ue] || (i[ue] = Lt.createComment(r + ue + ":" + s.id)));else {
          var _t13 = s.parentElement;
          _t13 && (i._floatingParent = _t13.hasAttribute(he) ? _t13.parentElement : _t13, s.remove());
        }
      } else n !== ws && n !== ys && s.toggleAttribute(n, !t);
      s.classList.toggle(bs, !t && n === ws), s.classList.toggle(vs, t && n === ys), t && (s[J] = !1);
    },
    io = function io(t, _ref23) {
      var _t$mt;
      var e = _ref23.s,
        s = _ref23.animated,
        i = _ref23.silent,
        o = _ref23.eventParams;
      var n = t.transition,
        r = t.base,
        a = t.opts,
        l = t.toggler,
        c = t.emit,
        h = t.constructor,
        p = t.teleport,
        u = h.NAME,
        d = t[u],
        f = l !== null && l !== void 0 ? l : r;
      e && so(!0, t, d), e && (t[mt] = new eo({
        teleport: p,
        base: r,
        anchor: f,
        target: d,
        arrow: d.querySelector(fi(u, dt)),
        opts: a,
        name: u,
        instance: t
      }).init()), !i && c(e ? ve : Ae, o);
      var g = (_t$mt = t[mt]) === null || _t$mt === void 0 ? void 0 : _t$mt.wrapper;
      !e && (g === null || g === void 0 ? void 0 : g.matches(":" + ot)) && (g.close(), Ps ? (g.popover = pe, g.showPopover()) : s = !1);
      var m = n === null || n === void 0 ? void 0 : n.run(e, s);
      return e && a.outsideHide ? t.on(Lt, $e, function (e) {
        return !Ys(e.target, [l !== null && l !== void 0 ? l : r, d]) && t.hide({
          event: e
        });
      }) : t.off(Lt, $e), a.escapeHide && Vi(t, e, t.toggler ? [t.toggler, t.base] : Lt), e ? a.autofocus && Ki(t) : !e && d.contains(Lt.activeElement) && ti(l), _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _t$mt2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = e;
              if (_context3.t0) {
                _context3.next = 10;
                break;
              }
              _context3.t1 = s;
              if (!_context3.t1) {
                _context3.next = 6;
                break;
              }
              _context3.next = 6;
              return m;
            case 6:
              t.placeholder && g.replaceWith(t.placeholder);
              (_t$mt2 = t[mt]) !== null && _t$mt2 !== void 0 && _t$mt2.destroy();
              t[mt] = null;
              so(!1, t, d);
            case 10:
              c(e ? ye : Te, o);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))(), m;
    },
    oo = function oo(t) {
      var _hi, _ref25, _Di;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.base;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
      var i = t.opts,
        o = t.show,
        n = t.id;
      t.instances.set(n, t), t.isInit = !0, t.emit(de);
      return ((_hi = hi(i.hashNavigation && pi(n) || i.shown, t)) !== null && _hi !== void 0 ? _hi : Fi(s, i.hideMode)) ? o({
        animated: !!((_ref25 = (_Di = Di(e, Z)) !== null && _Di !== void 0 ? _Di : i.appear) !== null && _ref25 !== void 0 ? _ref25 : t._fromHTML),
        ignoreConditions: !0,
        ignoreAutofocus: !t._fromHTML,
        __initial: !0
      }) : so(!1, t, s), t;
    },
    no = function no(t, e) {
      t ? e.on(e.base, Ce + a, function (t) {
        if (e.opts[B]) {
          var _s12 = Ys(t.target, e.opts[B]);
          _s12 && e.emit(B, {
            event: t,
            trigger: _s12
          });
        }
      }) : e.off(e.base, Ce + a);
    };
  var ro = "hashchange" + a;
  var ao = function ao(t) {
    t.opts[os] ? (t[c + os] = !0, t.on(window, ro, function (e) {
      pi(t.id) && t.show({
        event: e
      });
    })) : t[c + os] && (t.off(window, ro), t[c + os] = !1);
  };
  var lo = o("default");
  var co = function co(_ref26, s) {
    var t = _ref26.opts,
      e = _ref26.constructor;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var n = arguments.length > 3 ? arguments[3] : undefined;
    var r = e[lo + o(s)];
    var a = t[s];
    return n && a && $s(a) && (a = n[a]), Hs(a) ? t[s] = _objectSpread(_objectSpread({}, r), a) : a && (t[s] = _objectSpread({}, r), i && (t[s][i] = a)), t;
  };
  var ho = ":is(:hover,:focus-within)";
  function po(t, e) {
    var s = t.floating;
    if (!s) return;
    var i = s.parentFloating;
    if (e) for (; i;) i.instance.show(), i = i.parentFloating;else {
      !i || i.base.matches(ho) || i.anchor.matches(ho) || i.instance.hide();
      var _e11 = Rs(s.floatings);
      for (; _e11.length;) {
        var _iterator5 = _createForOfIteratorHelper(_e11),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _s13 = _step5.value;
            if (_s13.base.matches(ho)) return t.isOpen = !0, !0;
            _e11 = Rs(_s13.floatings);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }
  var uo = function uo(t) {
    var _t$breakpoints;
    (_t$breakpoints = t.breakpoints) !== null && _t$breakpoints !== void 0 && _t$breakpoints.destroy(), t.instances.delete(t.id), qi.allInstances.delete(t);
  };
  var fo = "collapse";
  var go = /*#__PURE__*/function (_ji) {
    _inherits(go, _ji);
    var _super2 = _createSuper(go);
    function go(t, e) {
      _classCallCheck(this, go);
      return _super2.call(this, t, e);
    }
    _createClass(go, [{
      key: "init",
      value: function init() {
        if (!this.isInit) return this.base.id = this.id, this.emit(fe), this._update(), oo(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        var _Ui$createOrUpdate;
        var t = this.base,
          e = this.opts;
        Oi(e, t, [Ut, os, ps], [os, ps]), this[F] = (_Ui$createOrUpdate = Ui.createOrUpdate(this[F], t, e[F])) === null || _Ui$createOrUpdate === void 0 ? void 0 : _Ui$createOrUpdate.move(this), e[Ut] === Xt && t[J] && so(!1, this), this[L] = Wi.createOrUpdate(this[L], t, e[L], {
          cssVariables: !0
        }), this.updateTriggers(), Ri(this), ao(this);
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        var _this12 = this;
        var e = this.opts,
          s = this.togglers,
          i = this.base;
        if (this.isInit) {
          if (this.emit(me), e.a11y) {
            var _t14 = Rs(this.instances.values()).filter(function (t) {
              return t !== _this12;
            }).flatMap(function (t) {
              return t.togglers.filter(function (t) {
                return s.includes(t);
              });
            });
            _t14.length && (s = s.filter(function (e) {
              if (!_t14.includes(e)) return !0;
              ai(e, He, function (t) {
                return e = t, s = _this12.id, e.split(" ").filter(function (t) {
                  return t !== s;
                }).join(" ");
                var e, s;
              });
            }));
          }
          return e.a11y && ni(s, He, Be, N), ri(i, e[fo + us]), Ji(this, t), this;
        }
      }
    }, {
      key: "updateTriggers",
      value: function updateTriggers() {
        var _this13 = this;
        var t = this.opts,
          e = this.id;
        return this.togglers = bi(this, t[ht]).map(function (s) {
          var _this13$togglers;
          return (_this13$togglers = _this13.togglers) !== null && _this13$togglers !== void 0 && _this13$togglers.includes(s) || (t.a11y && (ai(s, He, function (t) {
            return t ? Ks(t.split(" ").concat(e)).join(" ") : e;
          }), s.tagName !== D.toLowerCase() && ai(s, N, D)), js(s, t[ht + us], !!_this13.isOpen), _this13.on(s, Ce, function (t) {
            t.preventDefault(), _this13.toggle(null, {
              trigger: s,
              event: t
            });
          })), s;
        });
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(t, e) {
          var _t15,
            _this$L,
            _this14 = this;
          var s, i, o, n, r, a, l, c, _ki, h, p, u, d, f, g, m;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                s = this.base, i = this.togglers, o = this.opts, n = this.emit, r = this.isOpen, a = this.isAnimating, l = o.awaitAnimation, c = o.a11y, _ki = ki(e), h = _ki.animated, p = _ki.silent, u = _ki.trigger, d = _ki.event, f = _ki.ignoreConditions;
                if (!((_t15 = t) !== null && _t15 !== void 0 ? _t15 : t = !r, !f && (l && a || t === r))) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                this.isOpen = t;
                _context4.t0 = a && !l;
                if (!_context4.t0) {
                  _context4.next = 8;
                  break;
                }
                _context4.next = 8;
                return this[L].cancel();
              case 8:
                g = {
                  trigger: u,
                  event: d
                };
                !p && n(t ? be : we, g), t && so(!0, this), !p && n(t ? ve : Ae, g);
                m = (_this$L = this[L]) === null || _this$L === void 0 ? void 0 : _this$L.run(t, h);
                c && ai(i, Be, !!t);
                js(i, o[ht + us], t);
                js(s, o[fo + us], t);
                Mi(m, function () {
                  !t && so(!1, _this14), !p && n(t ? ye : Te, g), !t && o[ps] && o[ps] && _this14.destroy({
                    remove: !0
                  });
                });
                _context4.t1 = h && l;
                if (!_context4.t1) {
                  _context4.next = 19;
                  break;
                }
                _context4.next = 19;
                return m;
              case 19:
                return _context4.abrupt("return", this);
              case 20:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function toggle(_x4, _x5) {
          return _toggle.apply(this, arguments);
        }
        return toggle;
      }()
    }]);
    return go;
  }(ji(qi, fo));
  _defineProperty(go, "Default", _objectSpread(_objectSpread({}, As), {}, (_objectSpread2 = {
    eventPrefix: Pi(fo)
  }, _defineProperty(_objectSpread2, os, !1), _defineProperty(_objectSpread2, "dismiss", !0), _defineProperty(_objectSpread2, ps, !1), _defineProperty(_objectSpread2, ht, function (_ref48) {
    var t = _ref48.id;
    return Ci(t, !0);
  }), _defineProperty(_objectSpread2, ht + us, u), _defineProperty(_objectSpread2, fo + us, u), _objectSpread2)));
  var mo = (_mo = {}, _defineProperty(_mo, Ye, w), _defineProperty(_mo, Ze, x), _defineProperty(_mo, Qe, A), _defineProperty(_mo, ts, O), _defineProperty(_mo, "x", [w, A]), _defineProperty(_mo, "y", [x, O]), _mo);
  var bo = /*#__PURE__*/function (_ji2) {
    _inherits(bo, _ji2);
    var _super3 = _createSuper(bo);
    function bo(t, e) {
      _classCallCheck(this, bo);
      return _super3.call(this, t, e);
    }
    _createClass(bo, [{
      key: "init",
      value: function init() {
        var _this15 = this;
        if (this.isInit) return;
        this.base.id = this.id, this._update();
        var t = this.toggler,
          e = this.base,
          s = this.show,
          i = this.on;
        return i(e, Ie, this._onKeydown.bind(this)), i(t, Ie, /*#__PURE__*/function () {
          var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
            var i, o, _this15$focusableElem;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  i = _this15.opts.arrowActivation;
                  o = e.keyCode;
                  mo[i] && (i = mo[i]);
                  if (!i.includes(mo[o])) {
                    _context5.next = 12;
                    break;
                  }
                  e.preventDefault();
                  _context5.t0 = _this15.isOpen;
                  if (_context5.t0) {
                    _context5.next = 9;
                    break;
                  }
                  _context5.next = 9;
                  return s({
                    event: e,
                    trigger: t
                  });
                case 9:
                  if (!(_this15.isAnimating && !_this15.isOpen)) {
                    _context5.next = 11;
                    break;
                  }
                  return _context5.abrupt("return");
                case 11:
                  (_this15$focusableElem = _this15.focusableElems.at(o === Ze || o === Ye ? -1 : 0)) === null || _this15$focusableElem === void 0 || _this15$focusableElem.focus();
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          return function (_x6) {
            return _ref27.apply(this, arguments);
          };
        }()), this[F] = new Ui(e, {
          disableAttributes: !0
        }), oo(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this16 = this;
        var t = this.base,
          e = this.opts,
          s = this.on,
          i = this.off,
          o = this.hide;
        Oi(e, t, [pt, Ut]), this[L] = Wi.createOrUpdate(this[L], t, e[L]), this.updateToggler(), e.itemClickHide ? s(t, Ce, /*#__PURE__*/function () {
          var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(t) {
            var s;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  s = Ys(t.target, _this16.focusableElems);
                  _context6.t0 = !s;
                  if (_context6.t0) {
                    _context6.next = 14;
                    break;
                  }
                  _context6.t1 = !0 !== e.itemClickHide;
                  if (!_context6.t1) {
                    _context6.next = 13;
                    break;
                  }
                  if (!Fs(e.itemClickHide)) {
                    _context6.next = 11;
                    break;
                  }
                  _context6.next = 8;
                  return !e.itemClickHide({
                    trigger: s,
                    dropdown: _this16,
                    event: t
                  });
                case 8:
                  _context6.t2 = _context6.sent;
                  _context6.next = 12;
                  break;
                case 11:
                  _context6.t2 = !Gs(s, e.itemClickHide);
                case 12:
                  _context6.t1 = _context6.t2;
                case 13:
                  _context6.t0 = _context6.t1;
                case 14:
                  _context6.t3 = _context6.t0;
                  if (_context6.t3) {
                    _context6.next = 17;
                    break;
                  }
                  o({
                    event: t,
                    trigger: s
                  });
                case 17:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          return function (_x7) {
            return _ref28.apply(this, arguments);
          };
        }()) : i(t, Ce), Yi(this), Ri(this, t);
      }
    }, {
      key: "updateToggler",
      value: function updateToggler() {
        var _t$toggler;
        var t = this.opts,
          e = this.id,
          s = this.toggler = mi(this, (_t$toggler = t.toggler) !== null && _t$toggler !== void 0 ? _t$toggler : Ci(e));
        if (s) return t.a11y && ai(s, He, e), this;
      }
    }, {
      key: "focusableElems",
      get: function get() {
        return bi(this, this.opts.items, this.dropdown).filter(function (t) {
          return !Ti(t);
        });
      }
    }, {
      key: "_onKeydown",
      value: function _onKeydown(t) {
        var _s$find;
        var e = [Ve, Ke, Je, Xe, Ye, Ze, Qe, ts].includes(t.keyCode),
          s = this.focusableElems,
          i = this.opts;
        if (!e && 9 !== t.keyCode) return void ((_s$find = s.find(function (e) {
          return e.textContent.toLowerCase().startsWith(t.key);
        })) === null || _s$find === void 0 ? void 0 : _s$find.focus());
        var o = s.length - 1,
          n = s.findIndex(function (t) {
            return t === Lt.activeElement;
          }),
          r = n + 1 > o ? 0 : n + 1,
          a = n > 0 ? n - 1 : o,
          l = i.horizontal ? Ye : Ze,
          c = i.horizontal ? Qe : ts;
        switch (e && (t.preventDefault(), t.stopPropagation()), t.keyCode) {
          case Ve:
          case Ke:
            s[n].click();
            break;
          case Je:
            s[o].focus();
            break;
          case Xe:
            s[0].focus();
            break;
          case l:
            s[a].focus();
            break;
          case c:
            s[r].focus();
        }
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        if (!this.isInit) return;
        var e = this.opts,
          s = this.toggler,
          i = this.base;
        return this.emit(me), e.a11y && ni(s, He, Be), ri(s, e[ht + us]), ri(i, e[ut + us]), Ji(this, t);
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(t, e) {
          var _t16;
          var s, i, o, n, r, a, l, c, _ki2, h, p, u, d, f, g, m;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                s = this.isOpen, i = this.isAnimating, o = this.toggler, n = this.base, r = this.opts, a = this.emit, l = r.awaitAnimation, c = r.a11y, _ki2 = ki(e), h = _ki2.animated, p = _ki2.silent, u = _ki2.trigger, d = _ki2.event, f = _ki2.ignoreConditions;
                if (!((_t16 = t) !== null && _t16 !== void 0 ? _t16 : t = !s, !f && (l && i || t === s))) {
                  _context7.next = 3;
                  break;
                }
                return _context7.abrupt("return");
              case 3:
                if (!(this.isOpen = t, po(this, t))) {
                  _context7.next = 5;
                  break;
                }
                return _context7.abrupt("return");
              case 5:
                _context7.t0 = i && !l;
                if (!_context7.t0) {
                  _context7.next = 9;
                  break;
                }
                _context7.next = 9;
                return this[L].cancel();
              case 9:
                g = {
                  event: d,
                  trigger: u
                };
                !p && a(t ? be : we, g), c && o.setAttribute(Be, !!t);
                m = io(this, {
                  s: t,
                  animated: h,
                  silent: p,
                  eventParams: g
                });
                js(o, r[ht + us], t);
                js(n, r[ut + us], t);
                _context7.t1 = h && l;
                if (!_context7.t1) {
                  _context7.next = 18;
                  break;
                }
                _context7.next = 18;
                return m;
              case 18:
                return _context7.abrupt("return", this);
              case 19:
              case "end":
                return _context7.stop();
            }
          }, _callee7, this);
        }));
        function toggle(_x8, _x9) {
          return _toggle2.apply(this, arguments);
        }
        return toggle;
      }()
    }]);
    return bo;
  }(ji(qi, ut));
  _defineProperty(bo, "Default", _objectSpread(_objectSpread(_objectSpread({}, As), Ts), {}, (_objectSpread3 = {
    eventPrefix: Pi(ut),
    itemClickHide: !0,
    arrowActivation: "y",
    autofocus: !0,
    items: fi(ut + "-" + rt),
    trigger: z
  }, _defineProperty(_objectSpread3, ht, null), _defineProperty(_objectSpread3, ht + us, u), _defineProperty(_objectSpread3, ut + us, u), _objectSpread3)));
  var vo = r + bt + "-prevent-" + V,
    yo = l + H + "-scrollbar-" + b,
    wo = (_wo = {}, _defineProperty(_wo, We, P), _defineProperty(_wo, Ue, "description"), _wo);
  var Ao = /*#__PURE__*/function (_ji3) {
    _inherits(Ao, _ji3);
    var _super4 = _createSuper(Ao);
    function Ao(t, e) {
      _classCallCheck(this, Ao);
      return _super4.call(this, t, e);
    }
    _createClass(Ao, [{
      key: "_update",
      value: function _update() {
        var _Ui$createOrUpdate2;
        var t = this.base,
          e = this.opts,
          s = this.id,
          i = this.on;
        var o;
        Oi(e, t, [ot, at, ls, is, os, Ut, ss, ps, cs], [ot, ls, cs, is, os, ps]), co(this, ss, d), $s(e[at]) && (o = ("#" === e[at][0] ? Lt : t).querySelector(e[at])), this[at] = o, this[nt] = mi(this, e[nt], t);
        var n = Bs(t);
        this[F] = (_Ui$createOrUpdate2 = Ui.createOrUpdate(this[F], t, !!e.moveToRoot && e.root, {
          disableAttributes: !0
        })) === null || _Ui$createOrUpdate2 === void 0 ? void 0 : _Ui$createOrUpdate2.move(this), e[Ut] === Xt && t[J] && so(!1, this), this[L] = Wi.createOrUpdate(this[L], this[nt], e[L]), this._togglers = !0 === e.toggler ? Ci(s) : e.toggler, n ? i(t, q + a, function (t) {
          return t.preventDefault();
        }) : e.a11y && (t[ae] = -1, ai(t, N, bt)), t.popover = !e.topLayer || n && e.modal || !Ps ? null : pe, ao(this), Ri(this);
      }
    }, {
      key: "init",
      value: function init() {
        var _t$backdropHide$right,
          _t$backdropHide,
          _this17 = this;
        var t = this.opts,
          e = this.isInit,
          s = this.base,
          i = this.on,
          o = this.emit,
          n = this.hide,
          r = this.toggle;
        if (!e) return this.base.id = this.id, o(fe), this._update(), this.updateAriaTargets(), i(s, [Ce, t.backdropHide && ((_t$backdropHide$right = (_t$backdropHide = t.backdropHide) === null || _t$backdropHide === void 0 ? void 0 : _t$backdropHide.rightClick) !== null && _t$backdropHide$right !== void 0 ? _t$backdropHide$right : !0) && "contextmenu"], function (t) {
          !_this17.opts.backdropHide || _this17[nt].contains(t.target) || _this17._mousedownTarget || (n({
            event: t
          }), o(q, {
            event: t
          })), _this17._mousedownTarget = null;
        }), i(Ft, Ce + a, function (t) {
          var e = _this17._togglers,
            s = $s(e) ? t.target.closest(e) : Ys(t.target, e);
          s && (t.preventDefault(), r(null, {
            trigger: s,
            event: t
          }));
        }), oo(this);
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        var _this18 = this,
          _this$focusGuards2,
          _this$placeholder2,
          _this$bt$hidePopover,
          _this$bt,
          _this$bt$close,
          _this$bt2;
        if (this.isInit) return ri(this._togglers, this.opts[ht + us]), [bt, nt, at].forEach(function (t) {
          return ri(_this18[t], _this18.opts[t + us]);
        }), (_this$focusGuards2 = this.focusGuards) !== null && _this$focusGuards2 !== void 0 && _this$focusGuards2.destroy(), this.focusGuards = null, (_this$placeholder2 = this.placeholder) !== null && _this$placeholder2 !== void 0 && _this$placeholder2.replaceWith(this.base), this.isOpen = !1, (_this$bt$hidePopover = (_this$bt = this[bt]).hidePopover) !== null && _this$bt$hidePopover !== void 0 && _this$bt$hidePopover.call(_this$bt), (_this$bt$close = (_this$bt2 = this[bt]).close) !== null && _this$bt$close !== void 0 && _this$bt$close.call(_this$bt2), this[bt].popover = null, this.preventScroll(!1), this.opts.a11y && ni(this.base, ae, N, We, Ue), Ji(this, t), this;
      }
    }, {
      key: "updateAriaTargets",
      value: function updateAriaTargets() {
        var t = this.base,
          e = this.opts;
        for (var _i11 = 0, _arr2 = [We, Ue]; _i11 < _arr2.length; _i11++) {
          var _o4;
          var _s14 = _arr2[_i11];
          var _i12 = wo[_s14];
          var _o3 = e[_i12];
          if ($s(_o3) && (_o3 = mi(this, _o3, t)), Ls(_o3) || (_o3 = null), this[_i12] = _o3, !_o3) return;
          ai(t, _s14, _o3 ? (_o4 = _o3).id || (_o4.id = xi()) : _o3);
        }
        return this;
      }
    }, {
      key: "preventScroll",
      value: function preventScroll(t) {
        var e = Ao.shownDialogs.filter(function (_ref29) {
          var t = _ref29.opts;
          return t[is];
        }).length;
        (t && e || !t && !e) && js(Ft, $s(this.opts[is]) ? this.opts[is] : vo, t);
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(t, e) {
          var _s$returnFocus$await,
            _s$returnFocus,
            _t17,
            _this$L2,
            _this19 = this,
            _this$L3;
          var s, i, o, n, r, l, c, h, p, u, _ki3, d, f, g, b, v, y, w, A, T, E, k, _t18, _;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                s = this.opts, i = this.isOpen, o = this.emit, n = this.on, r = this.off, l = this.isAnimating, c = this.base, h = this.content, p = this.backdrop;
                u = s.returnFocus && ((_s$returnFocus$await = (_s$returnFocus = s.returnFocus) === null || _s$returnFocus === void 0 ? void 0 : _s$returnFocus.await) !== null && _s$returnFocus$await !== void 0 ? _s$returnFocus$await : s.group.awaitPrevious);
                _ki3 = ki(e), d = _ki3.animated, f = _ki3.silent, g = _ki3.trigger, b = _ki3.event, v = _ki3.ignoreConditions, y = _ki3.ignoreAutofocus, w = _ki3.__initial;
                if (!(t = !!((_t17 = t) !== null && _t17 !== void 0 ? _t17 : !i), !v && (s.awaitAnimation && l || t === i))) {
                  _context8.next = 5;
                  break;
                }
                return _context8.abrupt("return");
              case 5:
                !t && s.group && (this.groupClosing = new Promise(function (t) {
                  A = t;
                }));
                _context8.t0 = l && !s.awaitAnimation;
                if (!_context8.t0) {
                  _context8.next = 10;
                  break;
                }
                _context8.next = 10;
                return (_this$L2 = this[L]) === null || _this$L2 === void 0 ? void 0 : _this$L2.cancel();
              case 10:
                T = {
                  trigger: g,
                  event: b
                };
                !f && o(t ? be : we, T);
                _context8.t1 = !t && s.preventHide;
                if (!_context8.t1) {
                  _context8.next = 22;
                  break;
                }
                if (!Fs(s.preventHide)) {
                  _context8.next = 20;
                  break;
                }
                _context8.next = 17;
                return s.preventHide(this, T);
              case 17:
                _context8.t2 = !_context8.sent;
                _context8.next = 21;
                break;
              case 20:
                _context8.t2 = s.preventHide;
              case 21:
                _context8.t1 = _context8.t2;
              case 22:
                if (!_context8.t1) {
                  _context8.next = 24;
                  break;
                }
                return _context8.abrupt("return", (this.groupClosing = !1, o("hidePrevented", T)));
              case 24:
                this.isOpen = t, no(t, this);
                E = Ao.shownDialogs.find(function (t) {
                  return t !== _this19 && t[at] === p;
                }), k = this.shownGroupDialogs;
                if (!t) {
                  _context8.next = 35;
                  break;
                }
                if (!(k.length > 1)) {
                  _context8.next = 33;
                  break;
                }
                _t18 = Promise.allSettled(k.filter(function (t) {
                  return t !== _this19;
                }).map(function (t) {
                  return !t.groupClosing && t.hide(), t.groupClosing;
                }));
                _context8.t3 = s.group.awaitPrevious;
                if (!_context8.t3) {
                  _context8.next = 33;
                  break;
                }
                _context8.next = 33;
                return _t18;
              case 33:
                _context8.next = 36;
                break;
              case 35:
                t || k.length || (u = !1);
              case 36:
                t && so(!0, this), !f && o(t ? ve : Ae, T);
                _ = (_this$L3 = this[L]) === null || _this$L3 === void 0 ? void 0 : _this$L3.run(t, d);
                t && (s.returnFocus && (this.returnFocusElem || (this.returnFocusElem = Lt.activeElement)), this._toggleApi(!0));
                js(Xs(this._togglers), s[ht + us], t);
                js(c, s[bt + us], t);
                js(h, s[nt + us], t);
                E || js(p, s[at + us], t);
                w && !d && p && (p.style.transition = m, p.offsetWidth, p.style.transition = "");
                this.preventScroll(t);
                t || u || (this._toggleApi(!1), this.returnFocus());
                s.escapeHide && Vi(this, t, c);
                t ? (!y && s.autofocus && Ki(this), n(h, Pe + a, function (t) {
                  _this19._mousedownTarget = t.target;
                })) : (this._mousedownTarget = null, r(h, Pe + a), this.returnFocusElem = null);
                Mi(_, function () {
                  var _A;
                  t || (u && (_this19._toggleApi(!1), _this19.returnFocus()), so(!1, _this19)), !f && o(t ? ye : Te, T), t || (s[ps] && _this19.destroy({
                    remove: !0
                  }), _this19.groupClosing = !1, (_A = A) === null || _A === void 0 ? void 0 : _A());
                });
                _context8.t4 = d && s.awaitAnimation;
                if (!_context8.t4) {
                  _context8.next = 53;
                  break;
                }
                _context8.next = 53;
                return _;
              case 53:
                return _context8.abrupt("return", this);
              case 54:
              case "end":
                return _context8.stop();
            }
          }, _callee8, this);
        }));
        function toggle(_x10, _x11) {
          return _toggle3.apply(this, arguments);
        }
        return toggle;
      }()
    }, {
      key: "_toggleApi",
      value: function _toggleApi(t) {
        var _e$close, _this$focusGuards3;
        var e = this.base,
          s = this.opts,
          i = Bs(e);
        if (t) {
          var _t19 = i && s.modal,
            _o5 = s.topLayer && Ps;
          i ? _t19 ? (e.open && e.close(), e.showModal(), Ao.dispatchTopLayer(ot)) : _o5 ? (e.showPopover(), e.open = !0, Ao.dispatchTopLayer(lt)) : e.show() : _o5 && (e.showPopover(), Ao.dispatchTopLayer(lt)), s.focusTrap && !_t19 && (this.focusGuards = new Qi(e));
        } else (_e$close = e.close) !== null && _e$close !== void 0 && _e$close.call(e), e.popover && e.hidePopover(), this.focusGuards && ((_this$focusGuards3 = this.focusGuards) !== null && _this$focusGuards3 !== void 0 && _this$focusGuards3.destroy(), this.focusGuards = null);
      }
    }, {
      key: "returnFocus",
      value: function returnFocus() {
        this.opts.returnFocus && ti(this.returnFocusElem);
      }
    }, {
      key: "groupDialogs",
      get: function get() {
        var _this20 = this;
        return Rs(this.instances.values()).filter(function (_ref30) {
          var _t$group, _this20$opts$group;
          var t = _ref30.opts;
          return ((_t$group = t.group) === null || _t$group === void 0 ? void 0 : _t$group.name) === ((_this20$opts$group = _this20.opts.group) === null || _this20$opts$group === void 0 ? void 0 : _this20$opts$group.name);
        });
      }
    }, {
      key: "shownGroupDialogs",
      get: function get() {
        return this.groupDialogs.filter(function (_ref31) {
          var t = _ref31.isOpen,
            e = _ref31.opts;
          return e.group && t;
        });
      }
    }], [{
      key: "shownDialogs",
      get: function get() {
        return Rs(this.instances.values()).filter(function (_ref32) {
          var t = _ref32.isOpen;
          return t;
        });
      }
    }, {
      key: "updateBodyScrollbarWidth",
      value: function updateBodyScrollbarWidth() {
        Lt.querySelector(_s).style.setProperty(yo, window.innerWidth - Lt.documentElement.clientWidth + g);
      }
    }]);
    return Ao;
  }(ji(qi, bt));
  _defineProperty(Ao, Cs, !0);
  _defineProperty(Ao, "DefaultGroup", {
    name: "",
    awaitPrevious: !0,
    hidePrevious: !0
  });
  _defineProperty(Ao, "Default", _objectSpread(_objectSpread({}, As), {}, (_objectSpread4 = {
    eventPrefix: Pi(bt),
    escapeHide: !0,
    backdropHide: !0
  }, _defineProperty(_objectSpread4, os, !1), _defineProperty(_objectSpread4, "returnFocus", !0), _defineProperty(_objectSpread4, "preventHide", !1), _defineProperty(_objectSpread4, "dismiss", !0), _defineProperty(_objectSpread4, "preventScroll", !0), _defineProperty(_objectSpread4, "confirm", "[".concat(h + B, "],[").concat(h + B, "=\"").concat(bt, "\"]")), _defineProperty(_objectSpread4, "title", fi(bt, wo[We])), _defineProperty(_objectSpread4, "description", fi(bt, wo[Ue])), _defineProperty(_objectSpread4, "group", ""), _defineProperty(_objectSpread4, "awaitAnimation", !1), _defineProperty(_objectSpread4, nt, fi(bt, nt)), _defineProperty(_objectSpread4, at, fi(bt, at)), _defineProperty(_objectSpread4, ht, !0), _defineProperty(_objectSpread4, ht + us, u), _defineProperty(_objectSpread4, bt + us, u), _defineProperty(_objectSpread4, nt + us, u), _defineProperty(_objectSpread4, at + us, u), _defineProperty(_objectSpread4, ps, !1), _defineProperty(_objectSpread4, "autofocus", !0), _defineProperty(_objectSpread4, "focusTrap", !0), _defineProperty(_objectSpread4, "modal", !0), _defineProperty(_objectSpread4, "topLayer", !0), _defineProperty(_objectSpread4, "root", Dt), _defineProperty(_objectSpread4, "moveToRoot", !0), _objectSpread4)));
  var To = "tablist",
    Eo = "tab",
    ko = "tabs",
    _o = "tabpanel",
    xo = "accordion",
    Oo = [rt, Eo, _o],
    Po = Eo + ds,
    So = _o + ds,
    Co = _o + o(ae),
    Io = s(ze),
    Lo = "stateAttribute",
    Fo = "alwaysExpanded",
    Do = "multiExpand",
    $o = ["getTab", "isTab", "initTab", "initTabs"],
    Mo = (_Mo = {}, _defineProperty(_Mo, Fo, !1), _defineProperty(_Mo, S, !1), _defineProperty(_Mo, "arrowActivation", !1), _defineProperty(_Mo, "awaitPrevious", !1), _defineProperty(_Mo, "a11y", xo), _Mo),
    No = (_No = {}, _defineProperty(_No, xo, (_xo = {}, _defineProperty(_xo, N, null), _defineProperty(_xo, Po, D), _defineProperty(_xo, So, ms), _defineProperty(_xo, Io, !1), _defineProperty(_xo, Lo, Be), _defineProperty(_xo, ae, !1), _defineProperty(_xo, Co, !1), _xo)), _defineProperty(_No, ko, (_ko = {}, _defineProperty(_ko, N, To), _defineProperty(_ko, Po, Eo), _defineProperty(_ko, So, _o), _defineProperty(_ko, Io, !0), _defineProperty(_ko, Lo, qe), _defineProperty(_ko, ae, !0), _defineProperty(_ko, Co, !0), _ko)), _No);
  var Ho = /*#__PURE__*/function (_qi) {
    _inherits(Ho, _qi);
    var _super5 = _createSuper(Ho);
    function Ho(t, e) {
      _classCallCheck(this, Ho);
      return _super5.call(this, t, e);
    }
    _createClass(Ho, [{
      key: "_update",
      value: function _update() {
        var _s$index,
          _this21 = this;
        var t = this.base,
          e = this.tabs,
          s = this.lastShownTab,
          i = this.opts,
          _co = co(this, es, !1, No),
          o = _co.a11y;
        Oi(i, t, [Ut, os, Fo, Do, S], [os, Fo, Do, S]), o && (ai(t, N, o[N]), o[Io] && ai(t, ze, i[S] ? S : "vertical"));
        var n = (_s$index = s === null || s === void 0 ? void 0 : s.index) !== null && _s$index !== void 0 ? _s$index : i.shown,
          r = e.map(function (t, e) {
            var _Ui$createOrUpdate3;
            var s = t.tab,
              r = t.tabpanel,
              a = t.item,
              l = t.teleport;
            var c;
            return o && (ni(s, qe, Be), ai(s, He, r.id), ai(s, N, o[Po]), ai(r, N, o[So]), ai(r, We, s.id), ai(a, N, m)), t.teleport = (_Ui$createOrUpdate3 = Ui.createOrUpdate(l, r, i.teleport)) === null || _Ui$createOrUpdate3 === void 0 ? void 0 : _Ui$createOrUpdate3.move(_this21, t), c = Fs(n) ? n(t) : Is(n) ? n.some(function (t) {
              return t === e || t === r.id;
            }) : null !== n ? r.id === n || e === n : Fi(r, i.hideMode), [c, t];
          }),
          a = r.find(function (_ref33) {
            var _ref34 = _slicedToArray(_ref33, 1),
              t = _ref34[0];
            return t;
          });
        i[Fo] && !a && (r[0][0] = !0), r.forEach(function (_ref35) {
          var _Di2;
          var _ref36 = _slicedToArray(_ref35, 2),
            t = _ref36[0],
            e = _ref36[1];
          e[L] = Wi.createOrUpdate(e[L], e[_o], i[L], {
            cssVariables: !0
          }), e.toggle(t, {
            animated: (_Di2 = Di(e[_o], Z)) !== null && _Di2 !== void 0 ? _Di2 : i.appear,
            silent: !t
          });
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this22 = this;
        var t = this.isInit,
          e = this.emit;
        if (!t) return this.base.id = this.id, $o.forEach(function (t) {
          return _this22[t] = _this22[t].bind(_this22);
        }), e(fe), this.tabs = [], this.initTabs(), this._updateTabIndex(), this._update(), this.isInit = !0, e(de);
      }
    }, {
      key: "destroy",
      value: function destroy(_ref37) {
        var _ref37$keepInstance = _ref37.keepInstance,
          t = _ref37$keepInstance === void 0 ? !1 : _ref37$keepInstance,
          _ref37$keepState = _ref37.keepState,
          e = _ref37$keepState === void 0 ? !1 : _ref37$keepState;
        var s = this.tablist,
          i = this.tabs,
          o = this.opts.a11y,
          n = this.isInit,
          r = this.off,
          a = this.emit;
        if (n) return a(me), r(i), o && ni(s, o[N] && N, o[Io] && ze), i.forEach(function (t) {
          return t.destroy({
            keepState: e
          });
        }), t || uo(this), this.isInit = !1, a(ge), this;
      }
    }, {
      key: "initTabs",
      value: function initTabs() {
        var _this23 = this;
        return bi(this, this.opts[Eo], this.tablist).map(function (t) {
          var _iterator6 = _createForOfIteratorHelper(oi(t, null, _this23.tablist)),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _e12 = _step6.value;
              if (_this23.getTab(_e12)) return;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          return _this23.initTab(t);
        }).filter(Boolean);
      }
    }, {
      key: "initTab",
      value: function initTab(t) {
        var _p2,
          _this24 = this;
        if (this.getTab(t)) return;
        var e = this.tabs,
          s = this.tablist,
          i = this.opts,
          o = this.shownTabs,
          n = this.on,
          r = this.off,
          a = e.length,
          l = $s(i[rt]) ? t.closest(i[rt]) : hi(i[rt], {
            tablist: s,
            tab: t,
            index: a
          }),
          c = t.getAttribute(h + To + "-" + Eo);
        var p;
        if (c ? p = Lt.getElementById(c) : $s(i[_o]) ? i.siblings && (p = ii(t, i[_o])) : Ms(i[_o]) ? p = i[_o][a] : Fs(i[_o]) && (p = i[_o]({
          tablist: s,
          tab: t,
          index: a
        })), !p) return;
        var u = xi(),
          d = (_p2 = p).id || (_p2.id = u);
        var f, g;
        t.id || (t.id = u), o.length && !i[Do] && (f = !1), i.hashNavigation && pi(d) && (f = !0), n(t, Le, function (t) {
          !g && _this24._onTabFocus(t);
        }), n(t, Ie, function (t) {
          return _this24._onTabKeydown(t);
        }), n(t, Pe, function () {
          g = !0, requestAnimationFrame(function () {
            return g = !1;
          });
        }), n(t, Ce, function (e) {
          e.preventDefault(), _this24.toggle(e.currentTarget, null, {
            event: e,
            trigger: t
          });
        });
        var m = [t, l, p],
          b = {
            id: d,
            uuid: u,
            tab: t,
            item: l,
            tabpanel: p,
            elems: m,
            index: a,
            transition: i[L] ? new Wi(p, i[L]) : void 0,
            destroy: function (_ref38) {
              var _b$L, _b$F;
              var _ref38$cleanStyles = _ref38.cleanStyles,
                e = _ref38$cleanStyles === void 0 ? !0 : _ref38$cleanStyles,
                _ref38$remove = _ref38.remove,
                s = _ref38$remove === void 0 ? !1 : _ref38$remove,
                _ref38$keepState = _ref38.keepState,
                i = _ref38$keepState === void 0 ? !1 : _ref38$keepState;
              var o = _this24.opts,
                n = o.a11y;
              n && (ni(t, N, n[ae] && ae, He, Be, n[Lo]), ni(p, N, n[Co] && ae, We, n[rs] && je, J, ne), ni(l, N)), r(m), _this24.tabs = function (t) {
                for (var _len12 = arguments.length, e = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
                  e[_key12 - 1] = arguments[_key12];
                }
                return Vs(t).filter(function (t) {
                  return !e.includes(t);
                });
              }(_this24.tabs, b), e && (Oo.forEach(function (t) {
                return ri(b[t], o[t + us]);
              }), (_b$L = b[L]) !== null && _b$L !== void 0 && _b$L.destroy(), (_b$F = b[F]) !== null && _b$F !== void 0 && _b$F.destroy()), m.forEach(function (t) {
                t && (s && t.remove(), i || (ri(t, [bs, vs]), ni(t, J, ne)));
              });
            }.bind(this),
            toggleDisabled: function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              var s = t.toggleAttribute(le, e);
              if (s && b.hide(!1), _this24.opts[Fo]) {
                var _t20 = _this24.shownTabs;
                (!_t20.length || 1 === _t20.length && _t20[0].isDisabled) && _this24.show(_this24.firstActiveTabIndex, !1);
              }
              return !s;
            }.bind(this),
            isOpen: f,
            get isDisabled() {
              return t.hasAttribute(le);
            },
            get initialPlaceNode() {
              var _ref39, _b$F$placeholder, _b$F2;
              return (_ref39 = (_b$F$placeholder = (_b$F2 = b[F]) === null || _b$F2 === void 0 ? void 0 : _b$F2.placeholder) !== null && _b$F$placeholder !== void 0 ? _b$F$placeholder : b.placeholder) !== null && _ref39 !== void 0 ? _ref39 : p;
            }
          };
        return [Jt, Kt, Vt].forEach(function (t) {
          return b[t] = _this24[t].bind(_this24, b);
        }), b.is = this.isTab.bind(this, b), Ri(this, p, b.hide), i[Ut] === Xt && p[J] && so(!1, this, p, b), e.push(b), b;
      }
    }, {
      key: "isTab",
      value: function isTab(t, e) {
        var s = !1;
        return t === e ? s = !0 : Ls(e) ? s = t.elems.includes(e) : $s(e) ? s = t.elems.some(function (t) {
          return t.matches(e);
        }) : Ns(e) && (s = t.index === e), s;
      }
    }, {
      key: "getTab",
      value: function getTab(t) {
        return this.tabs.find(function (e) {
          return e.is(t);
        });
      }
    }, {
      key: "_onTabFocus",
      value: function _onTabFocus(_ref40) {
        var t = _ref40.currentTarget;
        var e = this.getTab(t);
        e && this.focusFilter(e) && (this.opts.arrowActivation && !e.isOpen && e.show(), this.currentTabIndex = e.index);
      }
    }, {
      key: "_onTabKeydown",
      value: function _onTabKeydown(t) {
        var e = this.getTab(t.currentTarget),
          s = this.tabs.indexOf(e),
          _this$opts = this.opts,
          i = _this$opts.keyboard,
          o = _this$opts.rtl,
          n = _this$opts.horizontal,
          r = t.keyCode;
        if ([Ve, Ke].includes(r) && !/BUTTON|A/.test(e.tab.nodeName)) return e.toggle(null, {
          event: t,
          trigger: t.target
        });
        if (Je > r || ts < r || !i) return;
        t.preventDefault();
        var a = this.firstActiveTabIndex,
          l = this.lastActiveTabIndex,
          c = s + 1,
          h = s ? s - 1 : l;
        var p;
        r === Je ? p = o ? a : l : r === Xe ? p = o ? l : a : r === (n ? Ye : Ze) ? p = o ? c : h : r === (n ? Qe : ts) && (p = o ? h : c), null != p && this._switchTab(p);
      }
    }, {
      key: "_switchTab",
      value: function _switchTab(t) {
        var e = this.tabs;
        !e[t] || this.focusFilter(e[t]) ? (this.currentTabIndex = t < this.firstActiveTabIndex ? this.lastActiveTabIndex : t >= e.length ? this.firstActiveTabIndex : t, ti(e[this.currentTabIndex].tab)) : this._switchTab(t > this.currentTabIndex ? t + 1 : t - 1);
      }
    }, {
      key: "_updateTabIndex",
      value: function _updateTabIndex(t) {
        var _t21, _this$shownTabs$0$ind, _this$shownTabs$;
        var _this$opts2 = this.opts,
          e = _this$opts2.keyboard,
          s = _this$opts2.a11y;
        e && s && ((_t21 = t) !== null && _t21 !== void 0 ? _t21 : t = (_this$shownTabs$0$ind = (_this$shownTabs$ = this.shownTabs[0]) === null || _this$shownTabs$ === void 0 ? void 0 : _this$shownTabs$.index) !== null && _this$shownTabs$0$ind !== void 0 ? _this$shownTabs$0$ind : this.firstActiveTabIndex, s && this.tabs.forEach(function (_ref41, o) {
          var e = _ref41.tab,
            i = _ref41.tabpanel;
          return ai([s[ae] && e, s[Co] && i], ae, o === t ? 0 : -1);
        }));
      }
    }, {
      key: "focusFilter",
      value: function focusFilter(t) {
        return !Ti(t.tab) && (!Fs(this.opts.focusFilter) || this.opts.focusFilter(t));
      }
    }, {
      key: "shownTabs",
      get: function get() {
        return this.tabs.filter(function (_ref42) {
          var t = _ref42.isOpen;
          return t;
        });
      }
    }, {
      key: "firstActiveTabIndex",
      get: function get() {
        var _this$tabs$find,
          _this25 = this;
        return (_this$tabs$find = this.tabs.find(function (t) {
          return _this25.focusFilter(t);
        })) === null || _this$tabs$find === void 0 ? void 0 : _this$tabs$find.index;
      }
    }, {
      key: "lastActiveTabIndex",
      get: function get() {
        var _this$tabs$findLast,
          _this26 = this;
        return (_this$tabs$findLast = this.tabs.findLast(function (t) {
          return _this26.focusFilter(t);
        })) === null || _this$tabs$findLast === void 0 ? void 0 : _this$tabs$findLast.index;
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(t, e, s) {
          var _e13,
            _this$currentTabIndex,
            _this27 = this;
          var _ki4, i, o, n, r, a, l, c, h, p, u, d, f, g, m, b, v, _t22, _iterator7, _step7, _e14$transition, _e14, y;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _ki4 = ki(s), i = _ki4.animated, o = _ki4.silent, n = _ki4.event, r = _ki4.trigger, a = this.getTab(t);
                if (a) {
                  _context9.next = 3;
                  break;
                }
                return _context9.abrupt("return");
              case 3:
                l = this.opts, c = this.shownTabs, h = this.emit, p = l.a11y, u = l.awaitAnimation, d = a.tab, f = a.isOpen, g = a.transition, m = a.index, b = a.tabpanel;
                if (!((e = !!((_e13 = e) !== null && _e13 !== void 0 ? _e13 : !f)) && this._updateTabIndex(m), e === f || u && g.isAnimating && (c.length <= 1 && !l[Do] || l[Do]) || f && l[Fo] && !e && c.length < 2 || e && !this.focusFilter(a))) {
                  _context9.next = 6;
                  break;
                }
                return _context9.abrupt("return");
              case 6:
                _context9.t0 = g.isAnimating && !u;
                if (!_context9.t0) {
                  _context9.next = 10;
                  break;
                }
                _context9.next = 10;
                return g.cancel();
              case 10:
                v = {
                  event: n,
                  trigger: r
                };
                if (!(!o && h(e ? be : we, a, v), a.isOpen = e, !l[Do] && e)) {
                  _context9.next = 39;
                  break;
                }
                _t22 = this.tabs.filter(function (t) {
                  return t !== a && (t.transition.isAnimating || t.isOpen);
                });
                _iterator7 = _createForOfIteratorHelper(_t22);
                _context9.prev = 14;
                _iterator7.s();
              case 16:
                if ((_step7 = _iterator7.n()).done) {
                  _context9.next = 29;
                  break;
                }
                _e14 = _step7.value;
                if (!(_e14.isOpen && _e14.transition.isAnimating)) {
                  _context9.next = 22;
                  break;
                }
                _e14.hide(!1), _e14.transition.cancel();
                _context9.next = 27;
                break;
              case 22:
                _e14.hide(i);
                _context9.t1 = l.awaitPrevious;
                if (!_context9.t1) {
                  _context9.next = 27;
                  break;
                }
                _context9.next = 27;
                return (_e14$transition = _e14.transition) === null || _e14$transition === void 0 ? void 0 : _e14$transition.getAwaitPromise();
              case 27:
                _context9.next = 16;
                break;
              case 29:
                _context9.next = 34;
                break;
              case 31:
                _context9.prev = 31;
                _context9.t2 = _context9["catch"](14);
                _iterator7.e(_context9.t2);
              case 34:
                _context9.prev = 34;
                _iterator7.f();
                return _context9.finish(34);
              case 37:
                if (!(e !== a.isOpen)) {
                  _context9.next = 39;
                  break;
                }
                return _context9.abrupt("return");
              case 39:
                e && so(!0, this, b, a), !o && h(e ? ve : Ae, a, v);
                y = g === null || g === void 0 ? void 0 : g.run(e, i);
                Oo.forEach(function (t) {
                  return js(a[t], l[t + us], e);
                });
                p && p[Lo] && ai(d, p[Lo], !!e);
                e && (this.lastShownTab = a, (_this$currentTabIndex = this.currentTabIndex) !== null && _this$currentTabIndex !== void 0 ? _this$currentTabIndex : this.currentTabIndex = m);
                Mi(y, function () {
                  !e && so(!1, _this27, b, a), !o && h(e ? ye : Te, a, v);
                });
                _context9.t3 = i && l.awaitAnimation;
                if (!_context9.t3) {
                  _context9.next = 49;
                  break;
                }
                _context9.next = 49;
                return y;
              case 49:
                return _context9.abrupt("return", a);
              case 50:
              case "end":
                return _context9.stop();
            }
          }, _callee9, this, [[14, 31, 34, 37]]);
        }));
        function toggle(_x12, _x13, _x14) {
          return _toggle4.apply(this, arguments);
        }
        return toggle;
      }()
    }, {
      key: "show",
      value: function show(t, e) {
        return this.toggle(t, !0, e);
      }
    }, {
      key: "hide",
      value: function hide(t, e) {
        return this.toggle(t, !1, e);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return To;
      }
    }, {
      key: "show",
      value: function show(t, e) {
        return this.toggle(t, !0, e);
      }
    }, {
      key: "hide",
      value: function hide(t, e) {
        return this.toggle(t, !1, e);
      }
    }, {
      key: "toggle",
      value: function toggle(t, e, s) {
        var _iterator8 = _createForOfIteratorHelper(this.instances.values()),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _i13 = _step8.value;
            if (_i13.getTab(t)) {
              _i13.toggle(t, e, s);
              break;
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    }]);
    return Ho;
  }(qi);
  _defineProperty(Ho, "DefaultA11y", _objectSpread({}, No[xo]));
  _defineProperty(Ho, "Default", _objectSpread(_objectSpread({}, As), {}, (_objectSpread5 = {
    eventPrefix: Pi(To),
    siblings: !0
  }, _defineProperty(_objectSpread5, Do, !1), _defineProperty(_objectSpread5, "awaitAnimation", !1), _defineProperty(_objectSpread5, "keyboard", !0), _defineProperty(_objectSpread5, os, !0), _defineProperty(_objectSpread5, "rtl", !1), _defineProperty(_objectSpread5, "focusFilter", null), _defineProperty(_objectSpread5, "dismiss", !1), _defineProperty(_objectSpread5, Eo, fi(To, Eo)), _defineProperty(_objectSpread5, _o, fi(To, _o)), _defineProperty(_objectSpread5, rt, fi(To, rt)), _defineProperty(_objectSpread5, Eo + us, u), _defineProperty(_objectSpread5, rt + us, u), _defineProperty(_objectSpread5, _o + us, u), _objectSpread5), Mo));
  _defineProperty(Ho, "_data", {});
  _defineProperty(Ho, "instances", new Map());
  Ho.data(r + ko, (_Ho$data = {}, _defineProperty(_Ho$data, Fo, !0), _defineProperty(_Ho$data, "horizontal", !0), _defineProperty(_Ho$data, "arrowActivation", !0), _defineProperty(_Ho$data, "awaitPrevious", !0), _defineProperty(_Ho$data, "a11y", ko), _Ho$data)), Ho.data(r + xo, Mo);
  var Bo = /*#__PURE__*/function () {
    function Bo(t, e, s) {
      var _this28 = this;
      _classCallCheck(this, Bo);
      var i = this.constructor.Default;
      s = Ns(s) ? _objectSpread(_objectSpread({}, i), {}, {
        duration: s
      }) : Ei(i, s);
      var _Ni2 = new Ni(),
        o = _Ni2.on,
        n = _Ni2.off,
        r = _Ni2.emit;
      Object.assign(this, {
        elem: t,
        action: e,
        on: o,
        off: n,
        emit: r,
        opts: s
      }), ["checkTime", Zt, Qt, te, Vt].forEach(function (t) {
        return _this28[t] = _this28[t].bind(_this28);
      }), this.progressElem = gi(!1, s.progressElem, t), s.visibilityControl && o(Lt, "visibilitychange", function () {
        return _this28.toggle(!Lt.hidden);
      });
    }
    _createClass(Bo, [{
      key: "toggleInterections",
      value: function toggleInterections(t) {
        var e = this.opts,
          s = this.elem,
          i = this.on,
          o = this.off,
          n = this.resume,
          r = this.pause,
          a = this.reset,
          l = e.pauseOnMouse,
          c = e.resetOnMouse,
          h = e.pauseOnFocus,
          p = e.resetOnFocus;
        if (l || c || h || p) {
          if (t) {
            var _t23, _e15;
            a(), (h || p) && i(s, [Fe, De], function (_ref43) {
              var s = _ref43.type;
              _e15 = s === Fe, _e15 ? (p && a(), h && r()) : _t23 || h && n();
            }), (l || c) && i(s, [xe, Oe], function (_ref44) {
              var s = _ref44.type;
              _t23 = s === xe, _t23 ? (c && a(), l && r()) : _e15 || l && n();
            });
          } else o();
          return this;
        }
      }
    }, {
      key: "checkTime",
      value: function checkTime() {
        var t = this.opts,
          e = this.elem,
          s = this.progressElem,
          i = this.paused,
          o = this._prevProgress;
        if (i) return;
        var n = performance.now();
        this.timeCurrent = Math.round(n - this.timeBegin);
        var r = t.duration - this.timeCurrent,
          a = +Math.max(r / t.duration, 0).toFixed(t.decimal);
        if (this._prevProgress = a, a && a === o) return requestAnimationFrame(this.checkTime);
        t.cssVariable && s !== null && s !== void 0 && s.style.setProperty("--" + t.cssVariable, a), hi(t.durationUpdate, {
          elem: e,
          time: r,
          progress: a
        }), a <= 0 ? this.action() : requestAnimationFrame(this.checkTime);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.paused;
        return t ? this.resume() : this.pause();
      }
    }, {
      key: "pause",
      value: function pause() {
        return this.paused = !0, this.emit(Ee), this;
      }
    }, {
      key: "resume",
      value: function resume() {
        return this.paused = !1, this.timeBegin = performance.now() - this.timeCurrent, this.checkTime(), this.emit(ke), this;
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.paused = !1, this.timeBegin = performance.now(), this.checkTime(), this.emit(_e), this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.paused = !0, this.off();
      }
    }], [{
      key: "createOrUpdate",
      value: function createOrUpdate(t, e, s, i) {
        return t ? t.destroy() : !1 !== i ? new Bo(e, s, i) : void 0;
      }
    }]);
    return Bo;
  }();
  _defineProperty(Bo, "Default", {
    progressElem: fi(ft),
    duration: 5e3,
    decimal: 4,
    durationUpdate: null,
    pauseOnMouse: !0,
    resetOnMouse: !0,
    pauseOnFocus: !0,
    resetOnFocus: !0,
    visibilityControl: !1,
    cssVariable: r + ft
  });
  var qo = "toast",
    jo = {},
    Wo = new Map(),
    Uo = {},
    zo = (_zo = {}, _defineProperty(_zo, fs, (_fs = {}, _defineProperty(_fs, N, fs), _defineProperty(_fs, as, "polite"), _fs)), _defineProperty(_zo, gs, (_gs = {}, _defineProperty(_gs, N, gs), _defineProperty(_gs, as, "assertive"), _gs)), _zo);
  var Ro = /*#__PURE__*/function (_ji4) {
    _inherits(Ro, _ji4);
    var _super6 = _createSuper(Ro);
    function Ro(t, e) {
      var _this29;
      _classCallCheck(this, Ro);
      Hs(t) && (e = t, t = null), _this29 = _super6.call(this, t, e);
      return _this29;
    }
    _createClass(Ro, [{
      key: "_update",
      value: function _update() {
        var t = this.opts,
          e = this.base,
          s = this.autohide,
          i = this.hide,
          _co2 = co(this, es, !1, zo),
          o = _co2.a11y;
        !t.root && si(e) ? this.root = e.parentElement : this.root = t.root ? mi(this, t.root) : Ft, t[Ut] === Xt && e[J] && so(!1, this), this[L] = Wi.createOrUpdate(this[L], e, t[L]), this.autohide = Bo.createOrUpdate(s, e, i, t.autohide), o && (e.setAttribute(Ge, !0), e.setAttribute(N, o[N]), e.setAttribute(Re, o[as])), Ri(this);
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        if (this.isInit) return Ji(this, _objectSpread({
          remove: !0
        }, t)), this;
      }
    }, {
      key: "init",
      value: function init() {
        if (!this.isInit) return this.base.id = this.id, this._update(), oo(this);
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(t, e) {
          var _t24,
            _this30 = this,
            _find;
          var s, i, o, n, r, a, l, c, _ki5, h, p, u, d, f, g, m, b, v, y, w, _t25, _e16, _t26, _t27, _e17, A, T, E, k, _t28;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                s = this.transition, i = this.opts, o = this.autohide, n = this.base, r = this.root, a = this.instances, l = this.constructor, c = this.emit, _ki5 = ki(e), h = _ki5.animated, p = _ki5.silent, u = _ki5.event, d = _ki5.trigger, f = i.limit, g = i.position, m = i.container, b = i.topLayer, v = i.keepTopLayer, y = i.hideMode;
                if (!(h && s !== null && s !== void 0 && s.isAnimating)) {
                  _context10.next = 3;
                  break;
                }
                return _context10.abrupt("return");
              case 3:
                if ((_t24 = t) !== null && _t24 !== void 0 ? _t24 : t = !Fi(n, y), t) {
                  if (f) {
                    _t25 = Rs(a.values()).filter(function (t) {
                      return t !== _this30 && t.opts.position === g && t.root === r;
                    });
                    for (_e16 = 0; _e16 < _t25.length; _e16++) {
                      _e16 >= f - 1 && ((_t26 = _t25[_e16 - (f - 1)]) !== null && _t26 !== void 0 && _t26.hide(i.limitAnimateLeave), i.limitAnimateEnter || (w = !0));
                    }
                  }
                  if (r) {
                    _t27 = r;
                    if (g) {
                      _e17 = _t27 = l.getContainer({
                        position: g,
                        root: r,
                        container: m,
                        keepTopLayer: v
                      });
                      _e17[lt] = Ps && b ? pe : null, _e17 && _e17.parentElement !== r && r.append(_e17), Ps && b && (_e17.hidePopover(), _e17.showPopover());
                    }
                    _t27.append(n);
                  }
                }
                A = {
                  event: u,
                  trigger: d
                };
                !p && c(t ? be : we, A), o && o.toggleInterections(t), t && so(!0, this), !p && c(t ? ve : Ae, A);
                T = s === null || s === void 0 ? void 0 : s.run(t, h && !w);
                js(n, i[qo + us], t);
                Mi(T, function () {
                  !t && so(!1, _this30), !p && c(t ? ye : Te, A), !t && _this30.destroy({
                    remove: !0
                  });
                });
                _context10.t0 = h;
                if (!_context10.t0) {
                  _context10.next = 13;
                  break;
                }
                _context10.next = 13;
                return T;
              case 13:
                E = Wo.get(r), k = E && ((_find = _toConsumableArray(E).find(function (t) {
                  return t.position === g && t.container === m;
                })) === null || _find === void 0 ? void 0 : _find.wrapper);
                if (!t && k && !k.children.length) {
                  if (E) {
                    _t28 = _toConsumableArray(E).find(function (t) {
                      return t.wrapper === k;
                    });
                    _t28 && E.delete(_t28);
                  }
                  k.remove();
                }
                return _context10.abrupt("return", (this.container = k, this));
              case 16:
              case "end":
                return _context10.stop();
            }
          }, _callee10, this);
        }));
        function toggle(_x15, _x16) {
          return _toggle5.apply(this, arguments);
        }
        return toggle;
      }()
    }], [{
      key: "getContainer",
      value: function getContainer(_ref45) {
        var _Uo$s;
        var t = _ref45.position,
          _ref45$root = _ref45.root,
          e = _ref45$root === void 0 ? Ft : _ref45$root,
          _ref45$container = _ref45.container,
          s = _ref45$container === void 0 ? "" : _ref45$container,
          i = _ref45.keepTopLayer,
          o = _ref45.a11y;
        var n = Wo.get(e);
        if (n) {
          var _e18 = _toConsumableArray(n).find(function (e) {
            return e.position === t && e.container === s;
          });
          if (_e18) return _e18.wrapper;
        } else n = new Set(), Wo.set(e, n);
        var r = {
            name: s,
            position: t
          },
          a = Js($s(s) ? hi((_Uo$s = Uo[s]) !== null && _Uo$s !== void 0 ? _Uo$s : Uo[""], r) : s(r));
        return o && (a[ae] = -1, a.role = ms), n.add({
          wrapper: a,
          container: s,
          position: t,
          root: e,
          keepTopLayer: i
        }), a;
      }
    }, {
      key: "addPosition",
      value: function addPosition(t) {
        var _this31 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        jo[e] || (jo[e] = {}), Is(t) ? t.forEach(function (t) {
          return _this31.addPosition(t, e);
        }) : Hs(t) && (jo[e][t.name] = t);
      }
    }, {
      key: "template",
      value: function template(t, e) {
        return e || (e = t, t = ""), e ? (this._templates[t] = e, this) : this._templates[t];
      }
    }, {
      key: "container",
      value: function container(t, e) {
        return e || (e = t, t = ""), e ? (Uo[t] = e, this) : Uo[t];
      }
    }, {
      key: "forceTopLayer",
      value: function forceTopLayer() {
        _toConsumableArray(Wo.values()).forEach(function (t) {
          t.forEach(function (_ref46) {
            var t = _ref46.wrapper,
              e = _ref46.root,
              s = _ref46.keepTopLayer;
            s && Ps && t.popover && e.contains(t) && (t.hidePopover(), t.showPopover());
          });
        });
      }
    }]);
    return Ro;
  }(ji(qi, qo));
  _defineProperty(Ro, "_templates", {});
  _defineProperty(Ro, "DefaultA11y", _objectSpread({}, zo[fs]));
  _defineProperty(Ro, "Default", _objectSpread(_objectSpread({}, As), {}, _defineProperty({
    shown: !0,
    eventPrefix: Pi(qo),
    root: null,
    container: "",
    template: "",
    appear: !0,
    dismiss: !0,
    limit: !1,
    limitAnimateEnter: !0,
    limitAnimateLeave: !0,
    autohide: !1,
    topLayer: !0,
    keepTopLayer: !0,
    a11y: fs
  }, qo + us, u)));
  var Go = r + ct;
  var Vo = /*#__PURE__*/function (_ji5) {
    _inherits(Vo, _ji5);
    var _super7 = _createSuper(Vo);
    function Vo(t, e) {
      _classCallCheck(this, Vo);
      return _super7.call(this, t, e);
    }
    _createClass(Vo, [{
      key: "_update",
      value: function _update() {
        var t = this.tooltip,
          e = this.base,
          s = this.opts;
        this.transition = Wi.createOrUpdate(this[L], t, s[L]), Ri(this, t), Yi(this, e, t), s.a11y && ai(t, ct);
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        if (this.isInit) return;
        var e = this.anchor,
          s = this.tooltip,
          i = this.id,
          o = this._cache,
          n = this.emit,
          r = this.opts;
        return n(me), r.a11y && (ni(s, ct), ai(e, Ue, function (t) {
          return t === i + "-" + Q ? o[ns] : t;
        })), o[P] && (e[P] = o[P]), Ji(this, t);
      }
    }, {
      key: "init",
      value: function init() {
        var _ref47, _t$nt, _e$getAttribute;
        var t = this.opts,
          e = this.anchor,
          s = this.id,
          i = this.isInit,
          o = this.emit;
        if (i) return;
        e.id = s, o(fe), this._cache = _defineProperty({}, P, e[P]);
        var n = this.tooltip = ei(t.template((_ref47 = (_t$nt = t[nt]) !== null && _t$nt !== void 0 ? _t$nt : e.getAttribute(h + ct + "-" + nt)) !== null && _ref47 !== void 0 ? _ref47 : e[P], this));
        return n.id || (n.id = s + "-" + Q), e.removeAttribute(P), js(n, (_e$getAttribute = e.getAttribute(h + ct + "-" + $)) !== null && _e$getAttribute !== void 0 ? _e$getAttribute : t.tooltipClass, !0), this._update(), this.teleport = new Ui(n, {
          disableAttributes: !0
        }), oo(this, n);
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(t, e) {
          var _t29, _a$ns;
          var s, i, o, n, r, a, l, c, h, _ki6, p, u, d, f, g, m, b;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                s = this.anchor, i = this.tooltip, o = this.id, n = this.opts, r = this.emit, a = this._cache, l = this.isOpen, c = this.isAnimating, h = n.awaitAnimation, _ki6 = ki(e), p = _ki6.animated, u = _ki6.trigger, d = _ki6.silent, f = _ki6.event, g = _ki6.ignoreConditions;
                if (!((_t29 = t) !== null && _t29 !== void 0 ? _t29 : t = !l, !g && (h && c || t === l) || !t && !si(i))) {
                  _context11.next = 3;
                  break;
                }
                return _context11.abrupt("return");
              case 3:
                if (!(this.isOpen = t, n.interactive && po(this, t))) {
                  _context11.next = 5;
                  break;
                }
                return _context11.abrupt("return");
              case 5:
                _context11.t0 = c && !h;
                if (!_context11.t0) {
                  _context11.next = 9;
                  break;
                }
                _context11.next = 9;
                return this[L].cancel();
              case 9:
                m = {
                  event: f,
                  trigger: u
                };
                !d && r(t ? be : we, m);
                b = io(this, {
                  s: t,
                  animated: p,
                  silent: d,
                  eventParams: m
                });
                n.a11y && ai(s, Ue, t ? function (t) {
                  return t && (a[ns] = t), o + "-" + Q;
                } : (_a$ns = a[ns]) !== null && _a$ns !== void 0 ? _a$ns : null);
                js(s, n[it + us], t);
                js(i, n[ct + us], t);
                _context11.t1 = p && h;
                if (!_context11.t1) {
                  _context11.next = 19;
                  break;
                }
                _context11.next = 19;
                return b;
              case 19:
                return _context11.abrupt("return", this);
              case 20:
              case "end":
                return _context11.stop();
            }
          }, _callee11, this);
        }));
        function toggle(_x17, _x18) {
          return _toggle6.apply(this, arguments);
        }
        return toggle;
      }()
    }], [{
      key: "BASE_NODE_NAME",
      get: function get() {
        return it;
      }
    }]);
    return Vo;
  }(ji(qi, ct));
  _defineProperty(Vo, "Default", _objectSpread(_objectSpread(_objectSpread({}, As), Ts), {}, (_objectSpread7 = {
    delay: [150, 0],
    eventPrefix: Pi(ct),
    placement: y,
    template: function template(t) {
      return "<div class=\"".concat(Go, "\"><div class=\"").concat(Go, "-arrow\" data-").concat(Go, "-arrow></div><div class=\"").concat(Go, "-content\">").concat(t, "</div></div>");
    },
    interactive: !1,
    removeTitle: !0,
    tooltipClass: ""
  }, _defineProperty(_objectSpread7, it + us, Si(ct)), _defineProperty(_objectSpread7, ct + us, u), _defineProperty(_objectSpread7, "trigger", R + " " + G), _defineProperty(_objectSpread7, "content", null), _objectSpread7)));
  var Ko = /*#__PURE__*/function (_ji6) {
    _inherits(Ko, _ji6);
    var _super8 = _createSuper(Ko);
    function Ko(t, e) {
      _classCallCheck(this, Ko);
      return _super8.call(this, t, e);
    }
    _createClass(Ko, [{
      key: "init",
      value: function init() {
        if (!this.isInit) return this.base.id = this.id, this._update(), this.teleport = new Ui(this.base, {
          disableAttributes: !0
        }), oo(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        var t = this.base,
          e = this.opts;
        Oi(e, t, [pt, Ut]), this[L] = Wi.createOrUpdate(this[L], t, e[L]), this.updateToggler(), Ri(this), Yi(this);
      }
    }, {
      key: "updateToggler",
      value: function updateToggler() {
        var _t$toggler2;
        var t = this.opts,
          e = this.id,
          s = this.toggler = mi(this, (_t$toggler2 = t.toggler) !== null && _t$toggler2 !== void 0 ? _t$toggler2 : Ci(e));
        if (s) return t.a11y && ai(s, He, e), this;
      }
    }, {
      key: "destroy",
      value: function destroy(t) {
        if (!this.isInit) return;
        var e = this.opts,
          s = this.toggler,
          i = this.base;
        return this.emit(me), e.a11y && ni(s, He, Be), ri(s, e[ht + us]), ri(i, e[lt + us]), Ji(this, t);
      }
    }, {
      key: "toggle",
      value: function () {
        var _toggle7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(t, e) {
          var _t30;
          var s, i, o, n, r, a, l, c, _ki7, h, p, u, d, f, g, m;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                s = this.isOpen, i = this.isAnimating, o = this.toggler, n = this.base, r = this.opts, a = this.emit, l = r.awaitAnimation, c = r.a11y, _ki7 = ki(e), h = _ki7.animated, p = _ki7.silent, u = _ki7.trigger, d = _ki7.event, f = _ki7.ignoreConditions;
                if (!((_t30 = t) !== null && _t30 !== void 0 ? _t30 : t = !s, !f && (l && i || t === s))) {
                  _context12.next = 3;
                  break;
                }
                return _context12.abrupt("return");
              case 3:
                if (!(this.isOpen = t, r.interactive && po(this, t))) {
                  _context12.next = 5;
                  break;
                }
                return _context12.abrupt("return");
              case 5:
                _context12.t0 = i && !l;
                if (!_context12.t0) {
                  _context12.next = 9;
                  break;
                }
                _context12.next = 9;
                return this[L].cancel();
              case 9:
                g = {
                  event: d,
                  trigger: u
                };
                !p && a(t ? be : we, g), c && o.setAttribute(Be, !!t), no(t, this);
                m = io(this, {
                  s: t,
                  animated: h,
                  silent: p,
                  eventParams: g
                });
                js(o, r[ht + us], t);
                js(n, r[lt + us], t);
                _context12.t1 = h && l;
                if (!_context12.t1) {
                  _context12.next = 18;
                  break;
                }
                _context12.next = 18;
                return m;
              case 18:
                return _context12.abrupt("return", this);
              case 19:
              case "end":
                return _context12.stop();
            }
          }, _callee12, this);
        }));
        function toggle(_x19, _x20) {
          return _toggle7.apply(this, arguments);
        }
        return toggle;
      }()
    }]);
    return Ko;
  }(ji(qi, lt));
  _defineProperty(Ko, Cs, !0);
  _defineProperty(Ko, "Default", _objectSpread(_objectSpread(_objectSpread({}, As), Ts), {}, (_objectSpread8 = {
    eventPrefix: Pi(lt),
    dismiss: !0,
    autofocus: !0,
    interactive: !0,
    trigger: z
  }, _defineProperty(_objectSpread8, ht, null), _defineProperty(_objectSpread8, ht + us, u), _defineProperty(_objectSpread8, lt + us, u), _defineProperty(_objectSpread8, "confirm", "[".concat(h + B, "],[").concat(h + B, "=\"").concat(lt, "\"]")), _objectSpread8)));
  t.Collapse = go, t.Dialog = Ao, t.Dropdown = bo, t.Popover = Ko, t.Tablist = Ho, t.Toast = Ro, t.Tooltip = Vo, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});