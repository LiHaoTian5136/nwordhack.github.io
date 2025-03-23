function K0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function G0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var _f = {
        exports: {}
    },
    Ho = {},
    If = {
        exports: {}
    },
    z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi = Symbol.for("react.element"),
    Y0 = Symbol.for("react.portal"),
    Q0 = Symbol.for("react.fragment"),
    X0 = Symbol.for("react.strict_mode"),
    q0 = Symbol.for("react.profiler"),
    Z0 = Symbol.for("react.provider"),
    J0 = Symbol.for("react.context"),
    eg = Symbol.for("react.forward_ref"),
    tg = Symbol.for("react.suspense"),
    ng = Symbol.for("react.memo"),
    rg = Symbol.for("react.lazy"),
    Qu = Symbol.iterator;

function ig(e) {
    return e === null || typeof e != "object" ? null : (e = Qu && e[Qu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ff = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    zf = Object.assign,
    Bf = {};

function cr(e, t, n) {
    this.props = e, this.context = t, this.refs = Bf, this.updater = n || Ff
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
cr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Uf() {}
Uf.prototype = cr.prototype;

function yl(e, t, n) {
    this.props = e, this.context = t, this.refs = Bf, this.updater = n || Ff
}
var xl = yl.prototype = new Uf;
xl.constructor = yl;
zf(xl, cr.prototype);
xl.isPureReactComponent = !0;
var Xu = Array.isArray,
    $f = Object.prototype.hasOwnProperty,
    wl = {
        current: null
    },
    Wf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Hf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) $f.call(t, r) && !Wf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: mi,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: wl.current
    }
}

function og(e, t) {
    return {
        $$typeof: mi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Sl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === mi
}

function sg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var qu = /\/+/g;

function ys(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? sg("" + e.key) : t.toString(36)
}

function Qi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case mi:
                case Y0:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + ys(s, 0) : r, Xu(i) ? (n = "", e != null && (n = e.replace(qu, "$&/") + "/"), Qi(i, t, n, "", function(u) {
        return u
    })) : i != null && (Sl(i) && (i = og(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(qu, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Xu(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + ys(o, a);
            s += Qi(o, t, n, l, i)
        } else if (l = ig(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + ys(o, a++), s += Qi(o, t, n, l, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Ti(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Qi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function ag(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ce = {
        current: null
    },
    Xi = {
        transition: null
    },
    lg = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: Xi,
        ReactCurrentOwner: wl
    };

function Kf() {
    throw Error("act(...) is not supported in production builds of React.")
}
z.Children = {
    map: Ti,
    forEach: function(e, t, n) {
        Ti(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ti(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ti(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Sl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
z.Component = cr;
z.Fragment = Q0;
z.Profiler = q0;
z.PureComponent = yl;
z.StrictMode = X0;
z.Suspense = tg;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg;
z.act = Kf;
z.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = zf({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = wl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) $f.call(t, l) && !Wf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: mi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
z.createContext = function(e) {
    return e = {
        $$typeof: J0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Z0,
        _context: e
    }, e.Consumer = e
};
z.createElement = Hf;
z.createFactory = function(e) {
    var t = Hf.bind(null, e);
    return t.type = e, t
};
z.createRef = function() {
    return {
        current: null
    }
};
z.forwardRef = function(e) {
    return {
        $$typeof: eg,
        render: e
    }
};
z.isValidElement = Sl;
z.lazy = function(e) {
    return {
        $$typeof: rg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ag
    }
};
z.memo = function(e, t) {
    return {
        $$typeof: ng,
        type: e,
        compare: t === void 0 ? null : t
    }
};
z.startTransition = function(e) {
    var t = Xi.transition;
    Xi.transition = {};
    try {
        e()
    } finally {
        Xi.transition = t
    }
};
z.unstable_act = Kf;
z.useCallback = function(e, t) {
    return Ce.current.useCallback(e, t)
};
z.useContext = function(e) {
    return Ce.current.useContext(e)
};
z.useDebugValue = function() {};
z.useDeferredValue = function(e) {
    return Ce.current.useDeferredValue(e)
};
z.useEffect = function(e, t) {
    return Ce.current.useEffect(e, t)
};
z.useId = function() {
    return Ce.current.useId()
};
z.useImperativeHandle = function(e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n)
};
z.useInsertionEffect = function(e, t) {
    return Ce.current.useInsertionEffect(e, t)
};
z.useLayoutEffect = function(e, t) {
    return Ce.current.useLayoutEffect(e, t)
};
z.useMemo = function(e, t) {
    return Ce.current.useMemo(e, t)
};
z.useReducer = function(e, t, n) {
    return Ce.current.useReducer(e, t, n)
};
z.useRef = function(e) {
    return Ce.current.useRef(e)
};
z.useState = function(e) {
    return Ce.current.useState(e)
};
z.useSyncExternalStore = function(e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n)
};
z.useTransition = function() {
    return Ce.current.useTransition()
};
z.version = "18.3.1";
If.exports = z;
var w = If.exports;
const hn = G0(w),
    ug = K0({
        __proto__: null,
        default: hn
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cg = w,
    dg = Symbol.for("react.element"),
    fg = Symbol.for("react.fragment"),
    hg = Object.prototype.hasOwnProperty,
    pg = cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    mg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Gf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) hg.call(t, r) && !mg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: dg,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: pg.current
    }
}
Ho.Fragment = fg;
Ho.jsx = Gf;
Ho.jsxs = Gf;
_f.exports = Ho;
var d = _f.exports,
    Yf = {
        exports: {}
    },
    Fe = {},
    Qf = {
        exports: {}
    },
    Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, b) {
        var O = N.length;
        N.push(b);
        e: for (; 0 < O;) {
            var L = O - 1 >>> 1,
                I = N[L];
            if (0 < i(I, b)) N[L] = b, N[O] = I, O = L;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var b = N[0],
            O = N.pop();
        if (O !== b) {
            N[0] = O;
            e: for (var L = 0, I = N.length, le = I >>> 1; L < le;) {
                var Le = 2 * (L + 1) - 1,
                    ot = N[Le],
                    nn = Le + 1,
                    ji = N[nn];
                if (0 > i(ot, O)) nn < I && 0 > i(ji, ot) ? (N[L] = ji, N[nn] = O, L = nn) : (N[L] = ot, N[Le] = O, L = Le);
                else if (nn < I && 0 > i(ji, O)) N[L] = ji, N[nn] = O, L = nn;
                else break e
            }
        }
        return b
    }

    function i(N, b) {
        var O = N.sortIndex - b.sortIndex;
        return O !== 0 ? O : N.id - b.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        f = null,
        h = 3,
        y = !1,
        v = !1,
        x = !1,
        k = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(N) {
        for (var b = n(u); b !== null;) {
            if (b.callback === null) r(u);
            else if (b.startTime <= N) r(u), b.sortIndex = b.expirationTime, t(l, b);
            else break;
            b = n(u)
        }
    }

    function S(N) {
        if (x = !1, g(N), !v)
            if (n(l) !== null) v = !0, U(P);
            else {
                var b = n(u);
                b !== null && W(S, b.startTime - N)
            }
    }

    function P(N, b) {
        v = !1, x && (x = !1, m(T), T = -1), y = !0;
        var O = h;
        try {
            for (g(b), f = n(l); f !== null && (!(f.expirationTime > b) || N && !G());) {
                var L = f.callback;
                if (typeof L == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var I = L(f.expirationTime <= b);
                    b = e.unstable_now(), typeof I == "function" ? f.callback = I : f === n(l) && r(l), g(b)
                } else r(l);
                f = n(l)
            }
            if (f !== null) var le = !0;
            else {
                var Le = n(u);
                Le !== null && W(S, Le.startTime - b), le = !1
            }
            return le
        } finally {
            f = null, h = O, y = !1
        }
    }
    var C = !1,
        E = null,
        T = -1,
        V = 5,
        M = -1;

    function G() {
        return !(e.unstable_now() - M < V)
    }

    function Ae() {
        if (E !== null) {
            var N = e.unstable_now();
            M = N;
            var b = !0;
            try {
                b = E(!0, N)
            } finally {
                b ? Be() : (C = !1, E = null)
            }
        } else C = !1
    }
    var Be;
    if (typeof p == "function") Be = function() {
        p(Ae)
    };
    else if (typeof MessageChannel < "u") {
        var Xe = new MessageChannel,
            _ = Xe.port2;
        Xe.port1.onmessage = Ae, Be = function() {
            _.postMessage(null)
        }
    } else Be = function() {
        k(Ae, 0)
    };

    function U(N) {
        E = N, C || (C = !0, Be())
    }

    function W(N, b) {
        T = k(function() {
            N(e.unstable_now())
        }, b)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        v || y || (v = !0, U(P))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(N) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var b = 3;
                break;
            default:
                b = h
        }
        var O = h;
        h = b;
        try {
            return N()
        } finally {
            h = O
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, b) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var O = h;
        h = N;
        try {
            return b()
        } finally {
            h = O
        }
    }, e.unstable_scheduleCallback = function(N, b, O) {
        var L = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? L + O : L) : O = L, N) {
            case 1:
                var I = -1;
                break;
            case 2:
                I = 250;
                break;
            case 5:
                I = 1073741823;
                break;
            case 4:
                I = 1e4;
                break;
            default:
                I = 5e3
        }
        return I = O + I, N = {
            id: c++,
            callback: b,
            priorityLevel: N,
            startTime: O,
            expirationTime: I,
            sortIndex: -1
        }, O > L ? (N.sortIndex = O, t(u, N), n(l) === null && N === n(u) && (x ? (m(T), T = -1) : x = !0, W(S, O - L))) : (N.sortIndex = I, t(l, N), v || y || (v = !0, U(P))), N
    }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(N) {
        var b = h;
        return function() {
            var O = h;
            h = b;
            try {
                return N.apply(this, arguments)
            } finally {
                h = O
            }
        }
    }
})(Xf);
Qf.exports = Xf;
var gg = Qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg = w,
    _e = gg;

function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var qf = new Set,
    Hr = {};

function kn(e, t) {
    er(e, t), er(e + "Capture", t)
}

function er(e, t) {
    for (Hr[e] = t, e = 0; e < t.length; e++) qf.add(t[e])
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    aa = Object.prototype.hasOwnProperty,
    yg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Zu = {},
    Ju = {};

function xg(e) {
    return aa.call(Ju, e) ? !0 : aa.call(Zu, e) ? !1 : yg.test(e) ? Ju[e] = !0 : (Zu[e] = !0, !1)
}

function wg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Sg(e, t, n, r) {
    if (t === null || typeof t > "u" || wg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function je(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    pe[e] = new je(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    pe[t] = new je(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    pe[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    pe[e] = new je(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    pe[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    pe[e] = new je(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    pe[e] = new je(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    pe[e] = new je(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    pe[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var kl = /[\-:]([a-z])/g;

function Pl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(kl, Pl);
    pe[t] = new je(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(kl, Pl);
    pe[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(kl, Pl);
    pe[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
pe.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Cl(e, t, n, r) {
    var i = pe.hasOwnProperty(t) ? pe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sg(t, n, i, r) && (n = null), r || i === null ? xg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ei = Symbol.for("react.element"),
    Mn = Symbol.for("react.portal"),
    Rn = Symbol.for("react.fragment"),
    jl = Symbol.for("react.strict_mode"),
    la = Symbol.for("react.profiler"),
    Zf = Symbol.for("react.provider"),
    Jf = Symbol.for("react.context"),
    Tl = Symbol.for("react.forward_ref"),
    ua = Symbol.for("react.suspense"),
    ca = Symbol.for("react.suspense_list"),
    El = Symbol.for("react.memo"),
    Rt = Symbol.for("react.lazy"),
    eh = Symbol.for("react.offscreen"),
    ec = Symbol.iterator;

function mr(e) {
    return e === null || typeof e != "object" ? null : (e = ec && e[ec] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ee = Object.assign,
    xs;

function Cr(e) {
    if (xs === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xs = t && t[1] || ""
    }
    return `
` + xs + e
}
var ws = !1;

function Ss(e, t) {
    if (!e || ws) return "";
    ws = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        ws = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Cr(e) : ""
}

function kg(e) {
    switch (e.tag) {
        case 5:
            return Cr(e.type);
        case 16:
            return Cr("Lazy");
        case 13:
            return Cr("Suspense");
        case 19:
            return Cr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ss(e.type, !1), e;
        case 11:
            return e = Ss(e.type.render, !1), e;
        case 1:
            return e = Ss(e.type, !0), e;
        default:
            return ""
    }
}

function da(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Rn:
            return "Fragment";
        case Mn:
            return "Portal";
        case la:
            return "Profiler";
        case jl:
            return "StrictMode";
        case ua:
            return "Suspense";
        case ca:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Jf:
            return (e.displayName || "Context") + ".Consumer";
        case Zf:
            return (e._context.displayName || "Context") + ".Provider";
        case Tl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case El:
            return t = e.displayName || null, t !== null ? t : da(e.type) || "Memo";
        case Rt:
            t = e._payload, e = e._init;
            try {
                return da(e(t))
            } catch {}
    }
    return null
}

function Pg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return da(t);
        case 8:
            return t === jl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Gt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function th(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Cg(e) {
    var t = th(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ni(e) {
    e._valueTracker || (e._valueTracker = Cg(e))
}

function nh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = th(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function co(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function fa(e, t) {
    var n = t.checked;
    return ee({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function tc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Gt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function rh(e, t) {
    t = t.checked, t != null && Cl(e, "checked", t, !1)
}

function ha(e, t) {
    rh(e, t);
    var n = Gt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? pa(e, t.type, n) : t.hasOwnProperty("defaultValue") && pa(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function nc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function pa(e, t, n) {
    (t !== "number" || co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jr = Array.isArray;

function Yn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function ma(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return ee({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function rc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(j(92));
            if (jr(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Gt(n)
    }
}

function ih(e, t) {
    var n = Gt(t.value),
        r = Gt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ic(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function oh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ga(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? oh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Mi, sh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Mi = Mi || document.createElement("div"), Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Kr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ar = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    jg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ar).forEach(function(e) {
    jg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ar[t] = Ar[e]
    })
});

function ah(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px"
}

function lh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = ah(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Tg = ee({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function va(e, t) {
    if (t) {
        if (Tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62))
    }
}

function ya(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var xa = null;

function Nl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var wa = null,
    Qn = null,
    Xn = null;

function oc(e) {
    if (e = yi(e)) {
        if (typeof wa != "function") throw Error(j(280));
        var t = e.stateNode;
        t && (t = Xo(t), wa(e.stateNode, e.type, t))
    }
}

function uh(e) {
    Qn ? Xn ? Xn.push(e) : Xn = [e] : Qn = e
}

function ch() {
    if (Qn) {
        var e = Qn,
            t = Xn;
        if (Xn = Qn = null, oc(e), t)
            for (e = 0; e < t.length; e++) oc(t[e])
    }
}

function dh(e, t) {
    return e(t)
}

function fh() {}
var ks = !1;

function hh(e, t, n) {
    if (ks) return e(t, n);
    ks = !0;
    try {
        return dh(e, t, n)
    } finally {
        ks = !1, (Qn !== null || Xn !== null) && (fh(), ch())
    }
}

function Gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Xo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n
}
var Sa = !1;
if (Pt) try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
        get: function() {
            Sa = !0
        }
    }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr)
} catch {
    Sa = !1
}

function Eg(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Lr = !1,
    fo = null,
    ho = !1,
    ka = null,
    Ng = {
        onError: function(e) {
            Lr = !0, fo = e
        }
    };

function Mg(e, t, n, r, i, o, s, a, l) {
    Lr = !1, fo = null, Eg.apply(Ng, arguments)
}

function Rg(e, t, n, r, i, o, s, a, l) {
    if (Mg.apply(this, arguments), Lr) {
        if (Lr) {
            var u = fo;
            Lr = !1, fo = null
        } else throw Error(j(198));
        ho || (ho = !0, ka = u)
    }
}

function Pn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function ph(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function sc(e) {
    if (Pn(e) !== e) throw Error(j(188))
}

function Ag(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Pn(e), t === null) throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return sc(i), e;
                if (o === r) return sc(i), t;
                o = o.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(j(189))
            }
        }
        if (n.alternate !== r) throw Error(j(190))
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t
}

function mh(e) {
    return e = Ag(e), e !== null ? gh(e) : null
}

function gh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = gh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var vh = _e.unstable_scheduleCallback,
    ac = _e.unstable_cancelCallback,
    Lg = _e.unstable_shouldYield,
    bg = _e.unstable_requestPaint,
    re = _e.unstable_now,
    Vg = _e.unstable_getCurrentPriorityLevel,
    Ml = _e.unstable_ImmediatePriority,
    yh = _e.unstable_UserBlockingPriority,
    po = _e.unstable_NormalPriority,
    Dg = _e.unstable_LowPriority,
    xh = _e.unstable_IdlePriority,
    Ko = null,
    ut = null;

function Og(e) {
    if (ut && typeof ut.onCommitFiberRoot == "function") try {
        ut.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : Fg,
    _g = Math.log,
    Ig = Math.LN2;

function Fg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_g(e) / Ig | 0) | 0
}
var Ri = 64,
    Ai = 4194304;

function Tr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function mo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Tr(a) : (o &= s, o !== 0 && (r = Tr(o)))
    } else s = n & ~i, s !== 0 ? r = Tr(s) : o !== 0 && (r = Tr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - nt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function zg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Bg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - nt(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = zg(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Pa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wh() {
    var e = Ri;
    return Ri <<= 1, !(Ri & 4194240) && (Ri = 64), e
}

function Ps(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function gi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n
}

function Ug(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - nt(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - nt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var $ = 0;

function Sh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var kh, Al, Ph, Ch, jh, Ca = !1,
    Li = [],
    _t = null,
    It = null,
    Ft = null,
    Yr = new Map,
    Qr = new Map,
    Lt = [],
    $g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function lc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            _t = null;
            break;
        case "dragenter":
        case "dragleave":
            It = null;
            break;
        case "mouseover":
        case "mouseout":
            Ft = null;
            break;
        case "pointerover":
        case "pointerout":
            Yr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Qr.delete(t.pointerId)
    }
}

function vr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = yi(t), t !== null && Al(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Wg(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return _t = vr(_t, e, t, n, r, i), !0;
        case "dragenter":
            return It = vr(It, e, t, n, r, i), !0;
        case "mouseover":
            return Ft = vr(Ft, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Yr.set(o, vr(Yr.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Qr.set(o, vr(Qr.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Th(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = Pn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = ph(n), t !== null) {
                    e.blockedOn = t, jh(e.priority, function() {
                        Ph(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function qi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            xa = r, n.target.dispatchEvent(r), xa = null
        } else return t = yi(n), t !== null && Al(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function uc(e, t, n) {
    qi(e) && n.delete(t)
}

function Hg() {
    Ca = !1, _t !== null && qi(_t) && (_t = null), It !== null && qi(It) && (It = null), Ft !== null && qi(Ft) && (Ft = null), Yr.forEach(uc), Qr.forEach(uc)
}

function yr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ca || (Ca = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Hg)))
}

function Xr(e) {
    function t(i) {
        return yr(i, e)
    }
    if (0 < Li.length) {
        yr(Li[0], e);
        for (var n = 1; n < Li.length; n++) {
            var r = Li[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (_t !== null && yr(_t, e), It !== null && yr(It, e), Ft !== null && yr(Ft, e), Yr.forEach(t), Qr.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null);) Th(n), n.blockedOn === null && Lt.shift()
}
var qn = Et.ReactCurrentBatchConfig,
    go = !0;

function Kg(e, t, n, r) {
    var i = $,
        o = qn.transition;
    qn.transition = null;
    try {
        $ = 1, Ll(e, t, n, r)
    } finally {
        $ = i, qn.transition = o
    }
}

function Gg(e, t, n, r) {
    var i = $,
        o = qn.transition;
    qn.transition = null;
    try {
        $ = 4, Ll(e, t, n, r)
    } finally {
        $ = i, qn.transition = o
    }
}

function Ll(e, t, n, r) {
    if (go) {
        var i = ja(e, t, n, r);
        if (i === null) bs(e, t, r, vo, n), lc(e, r);
        else if (Wg(i, e, t, n, r)) r.stopPropagation();
        else if (lc(e, r), t & 4 && -1 < $g.indexOf(e)) {
            for (; i !== null;) {
                var o = yi(i);
                if (o !== null && kh(o), o = ja(e, t, n, r), o === null && bs(e, t, r, vo, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else bs(e, t, r, null, n)
    }
}
var vo = null;

function ja(e, t, n, r) {
    if (vo = null, e = Nl(r), e = un(e), e !== null)
        if (t = Pn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = ph(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return vo = e, null
}

function Eh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Vg()) {
                case Ml:
                    return 1;
                case yh:
                    return 4;
                case po:
                case Dg:
                    return 16;
                case xh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Vt = null,
    bl = null,
    Zi = null;

function Nh() {
    if (Zi) return Zi;
    var e, t = bl,
        n = t.length,
        r, i = "value" in Vt ? Vt.value : Vt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Zi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ji(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function bi() {
    return !0
}

function cc() {
    return !1
}

function ze(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? bi : cc, this.isPropagationStopped = cc, this
    }
    return ee(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bi)
        },
        persist: function() {},
        isPersistent: bi
    }), t
}
var dr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Vl = ze(dr),
    vi = ee({}, dr, {
        view: 0,
        detail: 0
    }),
    Yg = ze(vi),
    Cs, js, xr, Go = ee({}, vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Dl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Cs = e.screenX - xr.screenX, js = e.screenY - xr.screenY) : js = Cs = 0, xr = e), Cs)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : js
        }
    }),
    dc = ze(Go),
    Qg = ee({}, Go, {
        dataTransfer: 0
    }),
    Xg = ze(Qg),
    qg = ee({}, vi, {
        relatedTarget: 0
    }),
    Ts = ze(qg),
    Zg = ee({}, dr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Jg = ze(Zg),
    ev = ee({}, dr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    tv = ze(ev),
    nv = ee({}, dr, {
        data: 0
    }),
    fc = ze(nv),
    rv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    iv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    ov = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function sv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ov[e]) ? !!t[e] : !1
}

function Dl() {
    return sv
}
var av = ee({}, vi, {
        key: function(e) {
            if (e.key) {
                var t = rv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Dl,
        charCode: function(e) {
            return e.type === "keypress" ? Ji(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    lv = ze(av),
    uv = ee({}, Go, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    hc = ze(uv),
    cv = ee({}, vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Dl
    }),
    dv = ze(cv),
    fv = ee({}, dr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    hv = ze(fv),
    pv = ee({}, Go, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    mv = ze(pv),
    gv = [9, 13, 27, 32],
    Ol = Pt && "CompositionEvent" in window,
    br = null;
Pt && "documentMode" in document && (br = document.documentMode);
var vv = Pt && "TextEvent" in window && !br,
    Mh = Pt && (!Ol || br && 8 < br && 11 >= br),
    pc = " ",
    mc = !1;

function Rh(e, t) {
    switch (e) {
        case "keyup":
            return gv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ah(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var An = !1;

function yv(e, t) {
    switch (e) {
        case "compositionend":
            return Ah(t);
        case "keypress":
            return t.which !== 32 ? null : (mc = !0, pc);
        case "textInput":
            return e = t.data, e === pc && mc ? null : e;
        default:
            return null
    }
}

function xv(e, t) {
    if (An) return e === "compositionend" || !Ol && Rh(e, t) ? (e = Nh(), Zi = bl = Vt = null, An = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Mh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var wv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wv[e.type] : t === "textarea"
}

function Lh(e, t, n, r) {
    uh(r), t = yo(t, "onChange"), 0 < t.length && (n = new Vl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Vr = null,
    qr = null;

function Sv(e) {
    $h(e, 0)
}

function Yo(e) {
    var t = Vn(e);
    if (nh(t)) return e
}

function kv(e, t) {
    if (e === "change") return t
}
var bh = !1;
if (Pt) {
    var Es;
    if (Pt) {
        var Ns = "oninput" in document;
        if (!Ns) {
            var vc = document.createElement("div");
            vc.setAttribute("oninput", "return;"), Ns = typeof vc.oninput == "function"
        }
        Es = Ns
    } else Es = !1;
    bh = Es && (!document.documentMode || 9 < document.documentMode)
}

function yc() {
    Vr && (Vr.detachEvent("onpropertychange", Vh), qr = Vr = null)
}

function Vh(e) {
    if (e.propertyName === "value" && Yo(qr)) {
        var t = [];
        Lh(t, qr, e, Nl(e)), hh(Sv, t)
    }
}

function Pv(e, t, n) {
    e === "focusin" ? (yc(), Vr = t, qr = n, Vr.attachEvent("onpropertychange", Vh)) : e === "focusout" && yc()
}

function Cv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yo(qr)
}

function jv(e, t) {
    if (e === "click") return Yo(t)
}

function Tv(e, t) {
    if (e === "input" || e === "change") return Yo(t)
}

function Ev(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var it = typeof Object.is == "function" ? Object.is : Ev;

function Zr(e, t) {
    if (it(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!aa.call(t, i) || !it(e[i], t[i])) return !1
    }
    return !0
}

function xc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function wc(e, t) {
    var n = xc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = xc(n)
    }
}

function Dh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Oh() {
    for (var e = window, t = co(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = co(e.document)
    }
    return t
}

function _l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Nv(e) {
    var t = Oh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Dh(n.ownerDocument.documentElement, n)) {
        if (r !== null && _l(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = wc(n, o);
                var s = wc(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Mv = Pt && "documentMode" in document && 11 >= document.documentMode,
    Ln = null,
    Ta = null,
    Dr = null,
    Ea = !1;

function Sc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ea || Ln == null || Ln !== co(r) || (r = Ln, "selectionStart" in r && _l(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Dr && Zr(Dr, r) || (Dr = r, r = yo(Ta, "onSelect"), 0 < r.length && (t = new Vl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ln)))
}

function Vi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var bn = {
        animationend: Vi("Animation", "AnimationEnd"),
        animationiteration: Vi("Animation", "AnimationIteration"),
        animationstart: Vi("Animation", "AnimationStart"),
        transitionend: Vi("Transition", "TransitionEnd")
    },
    Ms = {},
    _h = {};
Pt && (_h = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);

function Qo(e) {
    if (Ms[e]) return Ms[e];
    if (!bn[e]) return e;
    var t = bn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in _h) return Ms[e] = t[n];
    return e
}
var Ih = Qo("animationend"),
    Fh = Qo("animationiteration"),
    zh = Qo("animationstart"),
    Bh = Qo("transitionend"),
    Uh = new Map,
    kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Zt(e, t) {
    Uh.set(e, t), kn(t, [e])
}
for (var Rs = 0; Rs < kc.length; Rs++) {
    var As = kc[Rs],
        Rv = As.toLowerCase(),
        Av = As[0].toUpperCase() + As.slice(1);
    Zt(Rv, "on" + Av)
}
Zt(Ih, "onAnimationEnd");
Zt(Fh, "onAnimationIteration");
Zt(zh, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Bh, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Lv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));

function Pc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Rg(r, t, void 0, e), e.currentTarget = null
}

function $h(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    Pc(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        Pc(i, a, u), o = l
                    }
        }
    }
    if (ho) throw e = ka, ho = !1, ka = null, e
}

function Y(e, t) {
    var n = t[La];
    n === void 0 && (n = t[La] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wh(t, e, 2, !1), n.add(r))
}

function Ls(e, t, n) {
    var r = 0;
    t && (r |= 4), Wh(n, e, r, t)
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);

function Jr(e) {
    if (!e[Di]) {
        e[Di] = !0, qf.forEach(function(n) {
            n !== "selectionchange" && (Lv.has(n) || Ls(n, !1, e), Ls(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Di] || (t[Di] = !0, Ls("selectionchange", !1, t))
    }
}

function Wh(e, t, n, r) {
    switch (Eh(t)) {
        case 1:
            var i = Kg;
            break;
        case 4:
            i = Gg;
            break;
        default:
            i = Ll
    }
    n = i.bind(null, t, n, e), i = void 0, !Sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function bs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = un(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    hh(function() {
        var u = o,
            c = Nl(n),
            f = [];
        e: {
            var h = Uh.get(e);
            if (h !== void 0) {
                var y = Vl,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (Ji(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = lv;
                        break;
                    case "focusin":
                        v = "focus", y = Ts;
                        break;
                    case "focusout":
                        v = "blur", y = Ts;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Ts;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = dc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Xg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = dv;
                        break;
                    case Ih:
                    case Fh:
                    case zh:
                        y = Jg;
                        break;
                    case Bh:
                        y = hv;
                        break;
                    case "scroll":
                        y = Yg;
                        break;
                    case "wheel":
                        y = mv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = tv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = hc
                }
                var x = (t & 4) !== 0,
                    k = !x && e === "scroll",
                    m = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S, m !== null && (S = Gr(p, m), S != null && x.push(ei(p, S, g)))), k) break;
                    p = p.return
                }
                0 < x.length && (h = new y(h, v, null, n, c), f.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== xa && (v = n.relatedTarget || n.fromElement) && (un(v) || v[Ct])) break e;
                if ((y || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? un(v) : null, v !== null && (k = Pn(v), v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
                    if (x = dc, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (x = hc, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), k = y == null ? h : Vn(y), g = v == null ? h : Vn(v), h = new x(S, p + "leave", y, n, c), h.target = k, h.relatedTarget = g, S = null, un(c) === u && (x = new x(m, p + "enter", v, n, c), x.target = g, x.relatedTarget = k, S = x), k = S, y && v) t: {
                        for (x = y, m = v, p = 0, g = x; g; g = Nn(g)) p++;
                        for (g = 0, S = m; S; S = Nn(S)) g++;
                        for (; 0 < p - g;) x = Nn(x),
                        p--;
                        for (; 0 < g - p;) m = Nn(m),
                        g--;
                        for (; p--;) {
                            if (x === m || m !== null && x === m.alternate) break t;
                            x = Nn(x), m = Nn(m)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && Cc(f, h, y, x, !1), v !== null && k !== null && Cc(f, k, v, x, !0)
                }
            }
            e: {
                if (h = u ? Vn(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var P = kv;
                else if (gc(h))
                    if (bh) P = Tv;
                    else {
                        P = Cv;
                        var C = Pv
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = jv);
                if (P && (P = P(e, u))) {
                    Lh(f, P, n, c);
                    break e
                }
                C && C(e, h, u),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && pa(h, "number", h.value)
            }
            switch (C = u ? Vn(u) : window, e) {
                case "focusin":
                    (gc(C) || C.contentEditable === "true") && (Ln = C, Ta = u, Dr = null);
                    break;
                case "focusout":
                    Dr = Ta = Ln = null;
                    break;
                case "mousedown":
                    Ea = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ea = !1, Sc(f, n, c);
                    break;
                case "selectionchange":
                    if (Mv) break;
                case "keydown":
                case "keyup":
                    Sc(f, n, c)
            }
            var E;
            if (Ol) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else An ? Rh(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (Mh && n.locale !== "ko" && (An || T !== "onCompositionStart" ? T === "onCompositionEnd" && An && (E = Nh()) : (Vt = c, bl = "value" in Vt ? Vt.value : Vt.textContent, An = !0)), C = yo(u, T), 0 < C.length && (T = new fc(T, e, null, n, c), f.push({
                event: T,
                listeners: C
            }), E ? T.data = E : (E = Ah(n), E !== null && (T.data = E)))),
            (E = vv ? yv(e, n) : xv(e, n)) && (u = yo(u, "onBeforeInput"), 0 < u.length && (c = new fc("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = E))
        }
        $h(f, t)
    })
}

function ei(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function yo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Gr(e, n), o != null && r.unshift(ei(e, o, i)), o = Gr(e, t), o != null && r.push(ei(e, o, i))), e = e.return
    }
    return r
}

function Nn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Cc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Gr(n, o), l != null && s.unshift(ei(n, l, a))) : i || (l = Gr(n, o), l != null && s.push(ei(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var bv = /\r\n?/g,
    Vv = /\u0000|\uFFFD/g;

function jc(e) {
    return (typeof e == "string" ? e : "" + e).replace(bv, `
`).replace(Vv, "")
}

function Oi(e, t, n) {
    if (t = jc(t), jc(e) !== t && n) throw Error(j(425))
}

function xo() {}
var Na = null,
    Ma = null;

function Ra(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Aa = typeof setTimeout == "function" ? setTimeout : void 0,
    Dv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tc = typeof Promise == "function" ? Promise : void 0,
    Ov = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tc < "u" ? function(e) {
        return Tc.resolve(null).then(e).catch(_v)
    } : Aa;

function _v(e) {
    setTimeout(function() {
        throw e
    })
}

function Vs(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Xr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Xr(t)
}

function zt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Ec(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fr = Math.random().toString(36).slice(2),
    lt = "__reactFiber$" + fr,
    ti = "__reactProps$" + fr,
    Ct = "__reactContainer$" + fr,
    La = "__reactEvents$" + fr,
    Iv = "__reactListeners$" + fr,
    Fv = "__reactHandles$" + fr;

function un(e) {
    var t = e[lt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ct] || n[lt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Ec(e); e !== null;) {
                    if (n = e[lt]) return n;
                    e = Ec(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function yi(e) {
    return e = e[lt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33))
}

function Xo(e) {
    return e[ti] || null
}
var ba = [],
    Dn = -1;

function Jt(e) {
    return {
        current: e
    }
}

function Q(e) {
    0 > Dn || (e.current = ba[Dn], ba[Dn] = null, Dn--)
}

function K(e, t) {
    Dn++, ba[Dn] = e.current, e.current = t
}
var Yt = {},
    Se = Jt(Yt),
    Ne = Jt(!1),
    vn = Yt;

function tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Me(e) {
    return e = e.childContextTypes, e != null
}

function wo() {
    Q(Ne), Q(Se)
}

function Nc(e, t, n) {
    if (Se.current !== Yt) throw Error(j(168));
    K(Se, t), K(Ne, n)
}

function Hh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(j(108, Pg(e) || "Unknown", i));
    return ee({}, n, r)
}

function So(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt, vn = Se.current, K(Se, e), K(Ne, Ne.current), !0
}

function Mc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n ? (e = Hh(e, t, vn), r.__reactInternalMemoizedMergedChildContext = e, Q(Ne), Q(Se), K(Se, e)) : Q(Ne), K(Ne, n)
}
var pt = null,
    qo = !1,
    Ds = !1;

function Kh(e) {
    pt === null ? pt = [e] : pt.push(e)
}

function zv(e) {
    qo = !0, Kh(e)
}

function en() {
    if (!Ds && pt !== null) {
        Ds = !0;
        var e = 0,
            t = $;
        try {
            var n = pt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            pt = null, qo = !1
        } catch (i) {
            throw pt !== null && (pt = pt.slice(e + 1)), vh(Ml, en), i
        } finally {
            $ = t, Ds = !1
        }
    }
    return null
}
var On = [],
    _n = 0,
    ko = null,
    Po = 0,
    We = [],
    He = 0,
    yn = null,
    mt = 1,
    gt = "";

function on(e, t) {
    On[_n++] = Po, On[_n++] = ko, ko = e, Po = t
}

function Gh(e, t, n) {
    We[He++] = mt, We[He++] = gt, We[He++] = yn, yn = e;
    var r = mt;
    e = gt;
    var i = 32 - nt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - nt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, mt = 1 << 32 - nt(t) + i | n << i | r, gt = o + e
    } else mt = 1 << o | n << i | r, gt = e
}

function Il(e) {
    e.return !== null && (on(e, 1), Gh(e, 1, 0))
}

function Fl(e) {
    for (; e === ko;) ko = On[--_n], On[_n] = null, Po = On[--_n], On[_n] = null;
    for (; e === yn;) yn = We[--He], We[He] = null, gt = We[--He], We[He] = null, mt = We[--He], We[He] = null
}
var Oe = null,
    De = null,
    X = !1,
    et = null;

function Yh(e, t) {
    var n = Ke(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Rc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, De = zt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, De = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yn !== null ? {
                id: mt,
                overflow: gt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, De = null, !0) : !1;
        default:
            return !1
    }
}

function Va(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Da(e) {
    if (X) {
        var t = De;
        if (t) {
            var n = t;
            if (!Rc(e, t)) {
                if (Va(e)) throw Error(j(418));
                t = zt(n.nextSibling);
                var r = Oe;
                t && Rc(e, t) ? Yh(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Oe = e)
            }
        } else {
            if (Va(e)) throw Error(j(418));
            e.flags = e.flags & -4097 | 2, X = !1, Oe = e
        }
    }
}

function Ac(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Oe = e
}

function _i(e) {
    if (e !== Oe) return !1;
    if (!X) return Ac(e), X = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ra(e.type, e.memoizedProps)), t && (t = De)) {
        if (Va(e)) throw Qh(), Error(j(418));
        for (; t;) Yh(e, t), t = zt(t.nextSibling)
    }
    if (Ac(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            De = zt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            De = null
        }
    } else De = Oe ? zt(e.stateNode.nextSibling) : null;
    return !0
}

function Qh() {
    for (var e = De; e;) e = zt(e.nextSibling)
}

function nr() {
    De = Oe = null, X = !1
}

function zl(e) {
    et === null ? et = [e] : et.push(e)
}
var Bv = Et.ReactCurrentBatchConfig;

function wr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode
            }
            if (!r) throw Error(j(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e))
    }
    return e
}

function Ii(e, t) {
    throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Lc(e) {
    var t = e._init;
    return t(e._payload)
}

function Xh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p], m.flags |= 16) : g.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function i(m, p) {
        return m = Wt(m, p), m.index = 0, m.sibling = null, m
    }

    function o(m, p, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < p ? (m.flags |= 2, p) : g) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, p, g, S) {
        return p === null || p.tag !== 6 ? (p = Us(g, m.mode, S), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function l(m, p, g, S) {
        var P = g.type;
        return P === Rn ? c(m, p, g.props.children, S, g.key) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rt && Lc(P) === p.type) ? (S = i(p, g.props), S.ref = wr(m, p, g), S.return = m, S) : (S = so(g.type, g.key, g.props, null, m.mode, S), S.ref = wr(m, p, g), S.return = m, S)
    }

    function u(m, p, g, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = $s(g, m.mode, S), p.return = m, p) : (p = i(p, g.children || []), p.return = m, p)
    }

    function c(m, p, g, S, P) {
        return p === null || p.tag !== 7 ? (p = mn(g, m.mode, S, P), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Us("" + p, m.mode, g), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Ei:
                    return g = so(p.type, p.key, p.props, null, m.mode, g), g.ref = wr(m, null, p), g.return = m, g;
                case Mn:
                    return p = $s(p, m.mode, g), p.return = m, p;
                case Rt:
                    var S = p._init;
                    return f(m, S(p._payload), g)
            }
            if (jr(p) || mr(p)) return p = mn(p, m.mode, g, null), p.return = m, p;
            Ii(m, p)
        }
        return null
    }

    function h(m, p, g, S) {
        var P = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return P !== null ? null : a(m, p, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ei:
                    return g.key === P ? l(m, p, g, S) : null;
                case Mn:
                    return g.key === P ? u(m, p, g, S) : null;
                case Rt:
                    return P = g._init, h(m, p, P(g._payload), S)
            }
            if (jr(g) || mr(g)) return P !== null ? null : c(m, p, g, S, null);
            Ii(m, g)
        }
        return null
    }

    function y(m, p, g, S, P) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(g) || null, a(p, m, "" + S, P);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ei:
                    return m = m.get(S.key === null ? g : S.key) || null, l(p, m, S, P);
                case Mn:
                    return m = m.get(S.key === null ? g : S.key) || null, u(p, m, S, P);
                case Rt:
                    var C = S._init;
                    return y(m, p, g, C(S._payload), P)
            }
            if (jr(S) || mr(S)) return m = m.get(g) || null, c(p, m, S, P, null);
            Ii(p, S)
        }
        return null
    }

    function v(m, p, g, S) {
        for (var P = null, C = null, E = p, T = p = 0, V = null; E !== null && T < g.length; T++) {
            E.index > T ? (V = E, E = null) : V = E.sibling;
            var M = h(m, E, g[T], S);
            if (M === null) {
                E === null && (E = V);
                break
            }
            e && E && M.alternate === null && t(m, E), p = o(M, p, T), C === null ? P = M : C.sibling = M, C = M, E = V
        }
        if (T === g.length) return n(m, E), X && on(m, T), P;
        if (E === null) {
            for (; T < g.length; T++) E = f(m, g[T], S), E !== null && (p = o(E, p, T), C === null ? P = E : C.sibling = E, C = E);
            return X && on(m, T), P
        }
        for (E = r(m, E); T < g.length; T++) V = y(E, m, T, g[T], S), V !== null && (e && V.alternate !== null && E.delete(V.key === null ? T : V.key), p = o(V, p, T), C === null ? P = V : C.sibling = V, C = V);
        return e && E.forEach(function(G) {
            return t(m, G)
        }), X && on(m, T), P
    }

    function x(m, p, g, S) {
        var P = mr(g);
        if (typeof P != "function") throw Error(j(150));
        if (g = P.call(g), g == null) throw Error(j(151));
        for (var C = P = null, E = p, T = p = 0, V = null, M = g.next(); E !== null && !M.done; T++, M = g.next()) {
            E.index > T ? (V = E, E = null) : V = E.sibling;
            var G = h(m, E, M.value, S);
            if (G === null) {
                E === null && (E = V);
                break
            }
            e && E && G.alternate === null && t(m, E), p = o(G, p, T), C === null ? P = G : C.sibling = G, C = G, E = V
        }
        if (M.done) return n(m, E), X && on(m, T), P;
        if (E === null) {
            for (; !M.done; T++, M = g.next()) M = f(m, M.value, S), M !== null && (p = o(M, p, T), C === null ? P = M : C.sibling = M, C = M);
            return X && on(m, T), P
        }
        for (E = r(m, E); !M.done; T++, M = g.next()) M = y(E, m, T, M.value, S), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), p = o(M, p, T), C === null ? P = M : C.sibling = M, C = M);
        return e && E.forEach(function(Ae) {
            return t(m, Ae)
        }), X && on(m, T), P
    }

    function k(m, p, g, S) {
        if (typeof g == "object" && g !== null && g.type === Rn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ei:
                    e: {
                        for (var P = g.key, C = p; C !== null;) {
                            if (C.key === P) {
                                if (P = g.type, P === Rn) {
                                    if (C.tag === 7) {
                                        n(m, C.sibling), p = i(C, g.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (C.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rt && Lc(P) === C.type) {
                                    n(m, C.sibling), p = i(C, g.props), p.ref = wr(m, C, g), p.return = m, m = p;
                                    break e
                                }
                                n(m, C);
                                break
                            } else t(m, C);
                            C = C.sibling
                        }
                        g.type === Rn ? (p = mn(g.props.children, m.mode, S, g.key), p.return = m, m = p) : (S = so(g.type, g.key, g.props, null, m.mode, S), S.ref = wr(m, p, g), S.return = m, m = S)
                    }
                    return s(m);
                case Mn:
                    e: {
                        for (C = g.key; p !== null;) {
                            if (p.key === C)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling), p = i(p, g.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = $s(g, m.mode, S),
                        p.return = m,
                        m = p
                    }
                    return s(m);
                case Rt:
                    return C = g._init, k(m, p, C(g._payload), S)
            }
            if (jr(g)) return v(m, p, g, S);
            if (mr(g)) return x(m, p, g, S);
            Ii(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(m, p.sibling), p = i(p, g), p.return = m, m = p) : (n(m, p), p = Us(g, m.mode, S), p.return = m, m = p), s(m)) : n(m, p)
    }
    return k
}
var rr = Xh(!0),
    qh = Xh(!1),
    Co = Jt(null),
    jo = null,
    In = null,
    Bl = null;

function Ul() {
    Bl = In = jo = null
}

function $l(e) {
    var t = Co.current;
    Q(Co), e._currentValue = t
}

function Oa(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Zn(e, t) {
    jo = e, Bl = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null)
}

function Ye(e) {
    var t = e._currentValue;
    if (Bl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, In === null) {
            if (jo === null) throw Error(j(308));
            In = e, jo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else In = In.next = e;
    return t
}
var cn = null;

function Wl(e) {
    cn === null ? cn = [e] : cn.push(e)
}

function Zh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Wl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r)
}

function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var At = !1;

function Hl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Jh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, B & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Wl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n)
}

function eo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n)
    }
}

function bc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function To(e, t, n, r) {
    var i = e.updateQueue;
    At = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0, c = u = l = null, a = o;
        do {
            var h = a.lane,
                y = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e,
                        x = a;
                    switch (h = t, y = n, x.tag) {
                        case 1:
                            if (v = x.payload, typeof v == "function") {
                                f = v.call(y, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = x.payload, h = typeof v == "function" ? v.call(y, f, h) : v, h == null) break e;
                            f = ee({}, f, h);
                            break e;
                        case 2:
                            At = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else y = {
                eventTime: y,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = y, l = f) : c = c.next = y, s |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        wn |= s, e.lanes = s, e.memoizedState = f
    }
}

function Vc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
                i.call(r)
            }
        }
}
var xi = {},
    ct = Jt(xi),
    ni = Jt(xi),
    ri = Jt(xi);

function dn(e) {
    if (e === xi) throw Error(j(174));
    return e
}

function Kl(e, t) {
    switch (K(ri, t), K(ni, e), K(ct, xi), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ga(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ga(t, e)
    }
    Q(ct), K(ct, t)
}

function ir() {
    Q(ct), Q(ni), Q(ri)
}

function ep(e) {
    dn(ri.current);
    var t = dn(ct.current),
        n = ga(t, e.type);
    t !== n && (K(ni, e), K(ct, n))
}

function Gl(e) {
    ni.current === e && (Q(ct), Q(ni))
}
var q = Jt(0);

function Eo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Os = [];

function Yl() {
    for (var e = 0; e < Os.length; e++) Os[e]._workInProgressVersionPrimary = null;
    Os.length = 0
}
var to = Et.ReactCurrentDispatcher,
    _s = Et.ReactCurrentBatchConfig,
    xn = 0,
    J = null,
    se = null,
    ue = null,
    No = !1,
    Or = !1,
    ii = 0,
    Uv = 0;

function me() {
    throw Error(j(321))
}

function Ql(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!it(e[n], t[n])) return !1;
    return !0
}

function Xl(e, t, n, r, i, o) {
    if (xn = o, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, to.current = e === null || e.memoizedState === null ? Kv : Gv, e = n(r, i), Or) {
        o = 0;
        do {
            if (Or = !1, ii = 0, 25 <= o) throw Error(j(301));
            o += 1, ue = se = null, t.updateQueue = null, to.current = Yv, e = n(r, i)
        } while (Or)
    }
    if (to.current = Mo, t = se !== null && se.next !== null, xn = 0, ue = se = J = null, No = !1, t) throw Error(j(300));
    return e
}

function ql() {
    var e = ii !== 0;
    return ii = 0, e
}

function at() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? J.memoizedState = ue = e : ue = ue.next = e, ue
}

function Qe() {
    if (se === null) {
        var e = J.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = se.next;
    var t = ue === null ? J.memoizedState : ue.next;
    if (t !== null) ue = t, se = e;
    else {
        if (e === null) throw Error(j(310));
        se = e, e = {
            memoizedState: se.memoizedState,
            baseState: se.baseState,
            baseQueue: se.baseQueue,
            queue: se.queue,
            next: null
        }, ue === null ? J.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}

function oi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Is(e) {
    var t = Qe(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = se,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((xn & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f, s = r) : l = l.next = f, J.lanes |= c, wn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, it(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, J.lanes |= o, wn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Fs(e) {
    var t = Qe(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        it(o, t.memoizedState) || (Ee = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function tp() {}

function np(e, t) {
    var n = J,
        r = Qe(),
        i = t(),
        o = !it(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ee = !0), r = r.queue, Zl(op.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048, si(9, ip.bind(null, n, r, i, t), void 0, null), ce === null) throw Error(j(349));
        xn & 30 || rp(n, t, i)
    }
    return i
}

function rp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ip(e, t, n, r) {
    t.value = n, t.getSnapshot = r, sp(t) && ap(e)
}

function op(e, t, n) {
    return n(function() {
        sp(t) && ap(e)
    })
}

function sp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !it(e, n)
    } catch {
        return !0
    }
}

function ap(e) {
    var t = jt(e, 1);
    t !== null && rt(t, e, 1, -1)
}

function Dc(e) {
    var t = at();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Hv.bind(null, J, e), [t.memoizedState, e]
}

function si(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function lp() {
    return Qe().memoizedState
}

function no(e, t, n, r) {
    var i = at();
    J.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r)
}

function Zo(e, t, n, r) {
    var i = Qe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (se !== null) {
        var s = se.memoizedState;
        if (o = s.destroy, r !== null && Ql(r, s.deps)) {
            i.memoizedState = si(t, n, o, r);
            return
        }
    }
    J.flags |= e, i.memoizedState = si(1 | t, n, o, r)
}

function Oc(e, t) {
    return no(8390656, 8, e, t)
}

function Zl(e, t) {
    return Zo(2048, 8, e, t)
}

function up(e, t) {
    return Zo(4, 2, e, t)
}

function cp(e, t) {
    return Zo(4, 4, e, t)
}

function dp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function fp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zo(4, 4, dp.bind(null, t, e), n)
}

function Jl() {}

function hp(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ql(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function pp(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ql(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function mp(e, t, n) {
    return xn & 21 ? (it(n, t) || (n = wh(), J.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n)
}

function $v(e, t) {
    var n = $;
    $ = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = _s.transition;
    _s.transition = {};
    try {
        e(!1), t()
    } finally {
        $ = n, _s.transition = r
    }
}

function gp() {
    return Qe().memoizedState
}

function Wv(e, t, n) {
    var r = $t(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, vp(e)) yp(t, n);
    else if (n = Zh(e, t, n, r), n !== null) {
        var i = Pe();
        rt(n, e, r, i), xp(n, t, r)
    }
}

function Hv(e, t, n) {
    var r = $t(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (vp(e)) yp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, it(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Wl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Zh(e, t, i, r), n !== null && (i = Pe(), rt(n, e, r, i), xp(n, t, r))
    }
}

function vp(e) {
    var t = e.alternate;
    return e === J || t !== null && t === J
}

function yp(e, t) {
    Or = No = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n)
    }
}
var Mo = {
        readContext: Ye,
        useCallback: me,
        useContext: me,
        useEffect: me,
        useImperativeHandle: me,
        useInsertionEffect: me,
        useLayoutEffect: me,
        useMemo: me,
        useReducer: me,
        useRef: me,
        useState: me,
        useDebugValue: me,
        useDeferredValue: me,
        useTransition: me,
        useMutableSource: me,
        useSyncExternalStore: me,
        useId: me,
        unstable_isNewReconciler: !1
    },
    Kv = {
        readContext: Ye,
        useCallback: function(e, t) {
            return at().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ye,
        useEffect: Oc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, no(4194308, 4, dp.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return no(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return no(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = at();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = at();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Wv.bind(null, J, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = at();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Dc,
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            return at().memoizedState = e
        },
        useTransition: function() {
            var e = Dc(!1),
                t = e[0];
            return e = $v.bind(null, e[1]), at().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = J,
                i = at();
            if (X) {
                if (n === void 0) throw Error(j(407));
                n = n()
            } else {
                if (n = t(), ce === null) throw Error(j(349));
                xn & 30 || rp(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Oc(op.bind(null, r, o, e), [e]), r.flags |= 2048, si(9, ip.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = at(),
                t = ce.identifierPrefix;
            if (X) {
                var n = gt,
                    r = mt;
                n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ii++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Uv++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Gv = {
        readContext: Ye,
        useCallback: hp,
        useContext: Ye,
        useEffect: Zl,
        useImperativeHandle: fp,
        useInsertionEffect: up,
        useLayoutEffect: cp,
        useMemo: pp,
        useReducer: Is,
        useRef: lp,
        useState: function() {
            return Is(oi)
        },
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            var t = Qe();
            return mp(t, se.memoizedState, e)
        },
        useTransition: function() {
            var e = Is(oi)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: tp,
        useSyncExternalStore: np,
        useId: gp,
        unstable_isNewReconciler: !1
    },
    Yv = {
        readContext: Ye,
        useCallback: hp,
        useContext: Ye,
        useEffect: Zl,
        useImperativeHandle: fp,
        useInsertionEffect: up,
        useLayoutEffect: cp,
        useMemo: pp,
        useReducer: Fs,
        useRef: lp,
        useState: function() {
            return Fs(oi)
        },
        useDebugValue: Jl,
        useDeferredValue: function(e) {
            var t = Qe();
            return se === null ? t.memoizedState = e : mp(t, se.memoizedState, e)
        },
        useTransition: function() {
            var e = Fs(oi)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: tp,
        useSyncExternalStore: np,
        useId: gp,
        unstable_isNewReconciler: !1
    };

function Ze(e, t) {
    if (e && e.defaultProps) {
        t = ee({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function _a(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Jo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Pn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe(),
            i = $t(e),
            o = yt(r, i);
        o.payload = t, n != null && (o.callback = n), t = Bt(e, o, i), t !== null && (rt(t, e, i, r), eo(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe(),
            i = $t(e),
            o = yt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Bt(e, o, i), t !== null && (rt(t, e, i, r), eo(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Pe(),
            r = $t(e),
            i = yt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Bt(e, i, r), t !== null && (rt(t, e, r, n), eo(t, e, r))
    }
};

function _c(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(i, o) : !0
}

function wp(e, t, n) {
    var r = !1,
        i = Yt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ye(o) : (i = Me(t) ? vn : Se.current, r = t.contextTypes, o = (r = r != null) ? tr(e, i) : Yt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Jo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ic(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Jo.enqueueReplaceState(t, t.state, null)
}

function Ia(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Hl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ye(o) : (o = Me(t) ? vn : Se.current, i.context = tr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (_a(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Jo.enqueueReplaceState(i, i.state, null), To(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function or(e, t) {
    try {
        var n = "",
            r = t;
        do n += kg(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function zs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Fa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Qv = typeof WeakMap == "function" ? WeakMap : Map;

function Sp(e, t, n) {
    n = yt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ao || (Ao = !0, Qa = r), Fa(e, t)
    }, n
}

function kp(e, t, n) {
    n = yt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Fa(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Fa(e, t), typeof r != "function" && (Ut === null ? Ut = new Set([this]) : Ut.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Fc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Qv;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = uy.bind(null, e, t, n), t.then(e, e))
}

function zc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Bc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e)
}
var Xv = Et.ReactCurrentOwner,
    Ee = !1;

function ke(e, t, n, r) {
    t.child = e === null ? qh(t, null, n, r) : rr(t, e.child, n, r)
}

function Uc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Zn(t, i), r = Xl(e, t, n, r, o, i), n = ql(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (X && n && Il(t), t.flags |= 1, ke(e, t, r, i), t.child)
}

function $c(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !au(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pp(e, t, o, r, i)) : (e = so(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zr, n(s, r) && e.ref === t.ref) return Tt(e, t, i)
    }
    return t.flags |= 1, e = Wt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Pp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Zr(o, r) && e.ref === t.ref)
            if (Ee = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ee = !0);
            else return t.lanes = e.lanes, Tt(e, t, i)
    }
    return za(e, t, n, r, i)
}

function Cp(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, K(zn, be), be |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, K(zn, be), be |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, K(zn, be), be |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, K(zn, be), be |= r;
    return ke(e, t, i, n), t.child
}

function jp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function za(e, t, n, r, i) {
    var o = Me(n) ? vn : Se.current;
    return o = tr(t, o), Zn(t, i), n = Xl(e, t, n, r, o, i), r = ql(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (X && r && Il(t), t.flags |= 1, ke(e, t, n, i), t.child)
}

function Wc(e, t, n, r, i) {
    if (Me(n)) {
        var o = !0;
        So(t)
    } else o = !1;
    if (Zn(t, i), t.stateNode === null) ro(e, t), wp(t, n, r), Ia(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Ye(u) : (u = Me(n) ? vn : Se.current, u = tr(t, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Ic(t, s, r, u), At = !1;
        var h = t.memoizedState;
        s.state = h, To(t, r, s, i), l = t.memoizedState, a !== r || h !== l || Ne.current || At ? (typeof c == "function" && (_a(t, n, c, r), l = t.memoizedState), (a = At || _c(t, n, a, r, h, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Jh(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ze(t.type, a), s.props = u, f = t.pendingProps, h = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ye(l) : (l = Me(n) ? vn : Se.current, l = tr(t, l));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || h !== l) && Ic(t, s, r, l), At = !1, h = t.memoizedState, s.state = h, To(t, r, s, i);
        var v = t.memoizedState;
        a !== f || h !== v || Ne.current || At ? (typeof y == "function" && (_a(t, n, y, r), v = t.memoizedState), (u = At || _c(t, n, u, r, h, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ba(e, t, n, r, o, i)
}

function Ba(e, t, n, r, i, o) {
    jp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Mc(t, n, !1), Tt(e, t, o);
    r = t.stateNode, Xv.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = rr(t, e.child, null, o), t.child = rr(t, null, a, o)) : ke(e, t, a, o), t.memoizedState = r.state, i && Mc(t, n, !0), t.child
}

function Tp(e) {
    var t = e.stateNode;
    t.pendingContext ? Nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nc(e, t.context, !1), Kl(e, t.containerInfo)
}

function Hc(e, t, n, r, i) {
    return nr(), zl(i), t.flags |= 256, ke(e, t, n, r), t.child
}
var Ua = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function $a(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ep(e, t, n) {
    var r = t.pendingProps,
        i = q.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), K(q, i & 1), e === null) return Da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = ns(s, r, 0, null), e = mn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $a(n), t.memoizedState = Ua, e) : eu(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return qv(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Wt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Wt(a, o) : (o = mn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? $a(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ua, r
    }
    return o = e.child, e = o.sibling, r = Wt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function eu(e, t) {
    return t = ns({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Fi(e, t, n, r) {
    return r !== null && zl(r), rr(t, e.child, null, n), e = eu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function qv(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = zs(Error(j(422))), Fi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = ns({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = mn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && rr(t, e.child, null, s), t.child.memoizedState = $a(s), t.memoizedState = Ua, o);
    if (!(t.mode & 1)) return Fi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(j(419)), r = zs(o, r, void 0), Fi(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, Ee || a) {
        if (r = ce, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, jt(e, i), rt(r, e, i, -1))
        }
        return su(), r = zs(Error(j(421))), Fi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cy.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, De = zt(i.nextSibling), Oe = t, X = !0, et = null, e !== null && (We[He++] = mt, We[He++] = gt, We[He++] = yn, mt = e.id, gt = e.overflow, yn = t), t = eu(t, r.children), t.flags |= 4096, t)
}

function Kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oa(e.return, t, n)
}

function Bs(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Np(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (ke(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Kc(e, n, t);
            else if (e.tag === 19) Kc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (K(q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Eo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Bs(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Eo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Bs(t, !0, n, null, o);
            break;
        case "together":
            Bs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ro(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Wt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Zv(e, t, n) {
    switch (t.tag) {
        case 3:
            Tp(t), nr();
            break;
        case 5:
            ep(t);
            break;
        case 1:
            Me(t.type) && So(t);
            break;
        case 4:
            Kl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            K(Co, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (K(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ep(e, t, n) : (K(q, q.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
            K(q, q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Np(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K(q, q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Cp(e, t, n)
    }
    return Tt(e, t, n)
}
var Mp, Wa, Rp, Ap;
Mp = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Wa = function() {};
Rp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, dn(ct.current);
        var o = null;
        switch (n) {
            case "input":
                i = fa(e, i), r = fa(e, r), o = [];
                break;
            case "select":
                i = ee({}, i, {
                    value: void 0
                }), r = ee({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = ma(e, i), r = ma(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xo)
        }
        va(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Hr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Hr.hasOwnProperty(u) ? (l != null && u === "onScroll" && Y("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ap = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Sr(e, t) {
    if (!X) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Jv(e, t, n) {
    var r = t.pendingProps;
    switch (Fl(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ge(t), null;
        case 1:
            return Me(t.type) && wo(), ge(t), null;
        case 3:
            return r = t.stateNode, ir(), Q(Ne), Q(Se), Yl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_i(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Za(et), et = null))), Wa(e, t), ge(t), null;
        case 5:
            Gl(t);
            var i = dn(ri.current);
            if (n = t.type, e !== null && t.stateNode != null) Rp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return ge(t), null
                }
                if (e = dn(ct.current), _i(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[lt] = t, r[ti] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Y("cancel", r), Y("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Y("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Er.length; i++) Y(Er[i], r);
                            break;
                        case "source":
                            Y("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Y("error", r), Y("load", r);
                            break;
                        case "details":
                            Y("toggle", r);
                            break;
                        case "input":
                            tc(r, o), Y("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, Y("invalid", r);
                            break;
                        case "textarea":
                            rc(r, o), Y("invalid", r)
                    }
                    va(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e), i = ["children", "" + a]) : Hr.hasOwnProperty(s) && a != null && s === "onScroll" && Y("scroll", r)
                        } switch (n) {
                        case "input":
                            Ni(r), nc(r, o, !0);
                            break;
                        case "textarea":
                            Ni(r), ic(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = xo)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = oh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[lt] = t, e[ti] = r, Mp(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = ya(n, r), n) {
                            case "dialog":
                                Y("cancel", e), Y("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Y("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Er.length; i++) Y(Er[i], e);
                                i = r;
                                break;
                            case "source":
                                Y("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Y("error", e), Y("load", e), i = r;
                                break;
                            case "details":
                                Y("toggle", e), i = r;
                                break;
                            case "input":
                                tc(e, r), i = fa(e, r), Y("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = ee({}, r, {
                                    value: void 0
                                }), Y("invalid", e);
                                break;
                            case "textarea":
                                rc(e, r), i = ma(e, r), Y("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        va(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? lh(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sh(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Kr(e, l) : typeof l == "number" && Kr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Hr.hasOwnProperty(o) ? l != null && o === "onScroll" && Y("scroll", e) : l != null && Cl(e, o, l, s))
                            } switch (n) {
                            case "input":
                                Ni(e), nc(e, r, !1);
                                break;
                            case "textarea":
                                Ni(e), ic(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Yn(e, !!r.multiple, o, !1) : r.defaultValue != null && Yn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = xo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ge(t), null;
        case 6:
            if (e && t.stateNode != null) Ap(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
                if (n = dn(ri.current), dn(ct.current), _i(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[lt] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
                        case 3:
                            Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Oi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[lt] = t, t.stateNode = r
            }
            return ge(t), null;
        case 13:
            if (Q(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (X && De !== null && t.mode & 1 && !(t.flags & 128)) Qh(), nr(), t.flags |= 98560, o = !1;
                else if (o = _i(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(j(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
                        o[lt] = t
                    } else nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ge(t), o = !1
                } else et !== null && (Za(et), et = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? ae === 0 && (ae = 3) : su())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
        case 4:
            return ir(), Wa(e, t), e === null && Jr(t.stateNode.containerInfo), ge(t), null;
        case 10:
            return $l(t.type._context), ge(t), null;
        case 17:
            return Me(t.type) && wo(), ge(t), null;
        case 19:
            if (Q(q), o = t.memoizedState, o === null) return ge(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) Sr(o, !1);
                else {
                    if (ae !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Eo(e), s !== null) {
                                for (t.flags |= 128, Sr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return K(q, q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && re() > sr && (t.flags |= 128, r = !0, Sr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Eo(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !X) return ge(t), null
                    } else 2 * re() - o.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Sr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = re(), t.sibling = null, n = q.current, K(q, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
        case 22:
        case 23:
            return ou(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(j(156, t.tag))
}

function ey(e, t) {
    switch (Fl(t), t.tag) {
        case 1:
            return Me(t.type) && wo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ir(), Q(Ne), Q(Se), Yl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Gl(t), null;
        case 13:
            if (Q(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(j(340));
                nr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Q(q), null;
        case 4:
            return ir(), null;
        case 10:
            return $l(t.type._context), null;
        case 22:
        case 23:
            return ou(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var zi = !1,
    ye = !1,
    ty = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;

function Fn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            te(e, t, r)
        } else n.current = null
}

function Ha(e, t, n) {
    try {
        n()
    } catch (r) {
        te(e, t, r)
    }
}
var Gc = !1;

function ny(e, t) {
    if (Na = go, e = Oh(), _l(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null;) h = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (h === n && ++u === i && (a = s), h === o && ++c === r && (l = s), (y = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = y
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ma = {
            focusedElem: e,
            selectionRange: n
        }, go = !1, R = t; R !== null;)
        if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
        else
            for (; R !== null;) {
                t = R;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps,
                                    k = v.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ze(t.type, x), k);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                    }
                } catch (S) {
                    te(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, R = e;
                    break
                }
                R = t.return
            }
    return v = Gc, Gc = !1, v
}

function _r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Ha(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function es(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ka(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Lp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[lt], delete t[ti], delete t[La], delete t[Iv], delete t[Fv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function bp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Yc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || bp(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ga(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xo));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ga(e, t, n), e = e.sibling; e !== null;) Ga(e, t, n), e = e.sibling
}

function Ya(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ya(e, t, n), e = e.sibling; e !== null;) Ya(e, t, n), e = e.sibling
}
var de = null,
    Je = !1;

function Nt(e, t, n) {
    for (n = n.child; n !== null;) Vp(e, t, n), n = n.sibling
}

function Vp(e, t, n) {
    if (ut && typeof ut.onCommitFiberUnmount == "function") try {
        ut.onCommitFiberUnmount(Ko, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ye || Fn(n, t);
        case 6:
            var r = de,
                i = Je;
            de = null, Nt(e, t, n), de = r, Je = i, de !== null && (Je ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
            break;
        case 18:
            de !== null && (Je ? (e = de, n = n.stateNode, e.nodeType === 8 ? Vs(e.parentNode, n) : e.nodeType === 1 && Vs(e, n), Xr(e)) : Vs(de, n.stateNode));
            break;
        case 4:
            r = de, i = Je, de = n.stateNode.containerInfo, Je = !0, Nt(e, t, n), de = r, Je = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ha(n, t, s), i = i.next
                } while (i !== r)
            }
            Nt(e, t, n);
            break;
        case 1:
            if (!ye && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                te(n, t, a)
            }
            Nt(e, t, n);
            break;
        case 21:
            Nt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, Nt(e, t, n), ye = r) : Nt(e, t, n);
            break;
        default:
            Nt(e, t, n)
    }
}

function Qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ty), t.forEach(function(r) {
            var i = dy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            de = a.stateNode, Je = !1;
                            break e;
                        case 3:
                            de = a.stateNode.containerInfo, Je = !0;
                            break e;
                        case 4:
                            de = a.stateNode.containerInfo, Je = !0;
                            break e
                    }
                    a = a.return
                }
                if (de === null) throw Error(j(160));
                Vp(o, s, i), de = null, Je = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                te(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Dp(t, e), t = t.sibling
}

function Dp(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (qe(t, e), st(e), r & 4) {
                try {
                    _r(3, e, e.return), es(3, e)
                } catch (x) {
                    te(e, e.return, x)
                }
                try {
                    _r(5, e, e.return)
                } catch (x) {
                    te(e, e.return, x)
                }
            }
            break;
        case 1:
            qe(t, e), st(e), r & 512 && n !== null && Fn(n, n.return);
            break;
        case 5:
            if (qe(t, e), st(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Kr(i, "")
                } catch (x) {
                    te(e, e.return, x)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && rh(i, o), ya(a, s);
                    var u = ya(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            f = l[s + 1];
                        c === "style" ? lh(i, f) : c === "dangerouslySetInnerHTML" ? sh(i, f) : c === "children" ? Kr(i, f) : Cl(i, c, f, u)
                    }
                    switch (a) {
                        case "input":
                            ha(i, o);
                            break;
                        case "textarea":
                            ih(i, o);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? Yn(i, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? Yn(i, !!o.multiple, o.defaultValue, !0) : Yn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[ti] = o
                } catch (x) {
                    te(e, e.return, x)
                }
            }
            break;
        case 6:
            if (qe(t, e), st(e), r & 4) {
                if (e.stateNode === null) throw Error(j(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (x) {
                    te(e, e.return, x)
                }
            }
            break;
        case 3:
            if (qe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Xr(t.containerInfo)
            } catch (x) {
                te(e, e.return, x)
            }
            break;
        case 4:
            qe(t, e), st(e);
            break;
        case 13:
            qe(t, e), st(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ru = re())), r & 4 && Qc(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || c, qe(t, e), ye = u) : qe(t, e), st(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (R = e, c = e.child; c !== null;) {
                        for (f = R = c; R !== null;) {
                            switch (h = R, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    _r(4, h, h.return);
                                    break;
                                case 1:
                                    Fn(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (x) {
                                            te(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Fn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        qc(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, R = y) : qc(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ah("display", s))
                            } catch (x) {
                                te(e, e.return, x)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            te(e, e.return, x)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            qe(t, e), st(e), r & 4 && Qc(e);
            break;
        case 21:
            break;
        default:
            qe(t, e), st(e)
    }
}

function st(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (bp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Kr(i, ""), r.flags &= -33);
                    var o = Yc(e);
                    Ya(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Yc(e);
                    Ga(e, a, s);
                    break;
                default:
                    throw Error(j(161))
            }
        }
        catch (l) {
            te(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ry(e, t, n) {
    R = e, Op(e)
}

function Op(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null;) {
        var i = R,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || zi;
            if (!s) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || ye;
                a = zi;
                var u = ye;
                if (zi = s, (ye = l) && !u)
                    for (R = i; R !== null;) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Zc(i) : l !== null ? (l.return = s, R = l) : Zc(i);
                for (; o !== null;) R = o, Op(o), o = o.sibling;
                R = i, zi = a, ye = u
            }
            Xc(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : Xc(e)
    }
}

function Xc(e) {
    for (; R !== null;) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || es(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && Vc(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Vc(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Xr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                }
                ye || t.flags & 512 && Ka(t)
            } catch (h) {
                te(t, t.return, h)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, R = n;
            break
        }
        R = t.return
    }
}

function qc(e) {
    for (; R !== null;) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, R = n;
            break
        }
        R = t.return
    }
}

function Zc(e) {
    for (; R !== null;) {
        var t = R;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        es(4, t)
                    } catch (l) {
                        te(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            te(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Ka(t)
                    } catch (l) {
                        te(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ka(t)
                    } catch (l) {
                        te(t, s, l)
                    }
            }
        } catch (l) {
            te(t, t.return, l)
        }
        if (t === e) {
            R = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, R = a;
            break
        }
        R = t.return
    }
}
var iy = Math.ceil,
    Ro = Et.ReactCurrentDispatcher,
    tu = Et.ReactCurrentOwner,
    Ge = Et.ReactCurrentBatchConfig,
    B = 0,
    ce = null,
    ie = null,
    he = 0,
    be = 0,
    zn = Jt(0),
    ae = 0,
    ai = null,
    wn = 0,
    ts = 0,
    nu = 0,
    Ir = null,
    Te = null,
    ru = 0,
    sr = 1 / 0,
    ht = null,
    Ao = !1,
    Qa = null,
    Ut = null,
    Bi = !1,
    Dt = null,
    Lo = 0,
    Fr = 0,
    Xa = null,
    io = -1,
    oo = 0;

function Pe() {
    return B & 6 ? re() : io !== -1 ? io : io = re()
}

function $t(e) {
    return e.mode & 1 ? B & 2 && he !== 0 ? he & -he : Bv.transition !== null ? (oo === 0 && (oo = wh()), oo) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Eh(e.type)), e) : 1
}

function rt(e, t, n, r) {
    if (50 < Fr) throw Fr = 0, Xa = null, Error(j(185));
    gi(e, n, r), (!(B & 2) || e !== ce) && (e === ce && (!(B & 2) && (ts |= n), ae === 4 && bt(e, he)), Re(e, r), n === 1 && B === 0 && !(t.mode & 1) && (sr = re() + 500, qo && en()))
}

function Re(e, t) {
    var n = e.callbackNode;
    Bg(e, t);
    var r = mo(e, e === ce ? he : 0);
    if (r === 0) n !== null && ac(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ac(n), t === 1) e.tag === 0 ? zv(Jc.bind(null, e)) : Kh(Jc.bind(null, e)), Ov(function() {
            !(B & 6) && en()
        }), n = null;
        else {
            switch (Sh(r)) {
                case 1:
                    n = Ml;
                    break;
                case 4:
                    n = yh;
                    break;
                case 16:
                    n = po;
                    break;
                case 536870912:
                    n = xh;
                    break;
                default:
                    n = po
            }
            n = Wp(n, _p.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function _p(e, t) {
    if (io = -1, oo = 0, B & 6) throw Error(j(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = mo(e, e === ce ? he : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = bo(e, r);
    else {
        t = r;
        var i = B;
        B |= 2;
        var o = Fp();
        (ce !== e || he !== t) && (ht = null, sr = re() + 500, pn(e, t));
        do try {
            ay();
            break
        } catch (a) {
            Ip(e, a)
        }
        while (!0);
        Ul(), Ro.current = o, B = i, ie !== null ? t = 0 : (ce = null, he = 0, t = ae)
    }
    if (t !== 0) {
        if (t === 2 && (i = Pa(e), i !== 0 && (r = i, t = qa(e, i))), t === 1) throw n = ai, pn(e, 0), bt(e, r), Re(e, re()), n;
        if (t === 6) bt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !oy(i) && (t = bo(e, r), t === 2 && (o = Pa(e), o !== 0 && (r = o, t = qa(e, o))), t === 1)) throw n = ai, pn(e, 0), bt(e, r), Re(e, re()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    sn(e, Te, ht);
                    break;
                case 3:
                    if (bt(e, r), (r & 130023424) === r && (t = ru + 500 - re(), 10 < t)) {
                        if (mo(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Pe(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Aa(sn.bind(null, e, Te, ht), t);
                        break
                    }
                    sn(e, Te, ht);
                    break;
                case 4:
                    if (bt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - nt(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iy(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Aa(sn.bind(null, e, Te, ht), r);
                        break
                    }
                    sn(e, Te, ht);
                    break;
                case 5:
                    sn(e, Te, ht);
                    break;
                default:
                    throw Error(j(329))
            }
        }
    }
    return Re(e, re()), e.callbackNode === n ? _p.bind(null, e) : null
}

function qa(e, t) {
    var n = Ir;
    return e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256), e = bo(e, t), e !== 2 && (t = Te, Te = n, t !== null && Za(t)), e
}

function Za(e) {
    Te === null ? Te = e : Te.push.apply(Te, e)
}

function oy(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!it(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function bt(e, t) {
    for (t &= ~nu, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - nt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Jc(e) {
    if (B & 6) throw Error(j(327));
    Jn();
    var t = mo(e, 0);
    if (!(t & 1)) return Re(e, re()), null;
    var n = bo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Pa(e);
        r !== 0 && (t = r, n = qa(e, r))
    }
    if (n === 1) throw n = ai, pn(e, 0), bt(e, t), Re(e, re()), n;
    if (n === 6) throw Error(j(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Te, ht), Re(e, re()), null
}

function iu(e, t) {
    var n = B;
    B |= 1;
    try {
        return e(t)
    } finally {
        B = n, B === 0 && (sr = re() + 500, qo && en())
    }
}

function Sn(e) {
    Dt !== null && Dt.tag === 0 && !(B & 6) && Jn();
    var t = B;
    B |= 1;
    var n = Ge.transition,
        r = $;
    try {
        if (Ge.transition = null, $ = 1, e) return e()
    } finally {
        $ = r, Ge.transition = n, B = t, !(B & 6) && en()
    }
}

function ou() {
    be = zn.current, Q(zn)
}

function pn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Dv(n)), ie !== null)
        for (n = ie.return; n !== null;) {
            var r = n;
            switch (Fl(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && wo();
                    break;
                case 3:
                    ir(), Q(Ne), Q(Se), Yl();
                    break;
                case 5:
                    Gl(r);
                    break;
                case 4:
                    ir();
                    break;
                case 13:
                    Q(q);
                    break;
                case 19:
                    Q(q);
                    break;
                case 10:
                    $l(r.type._context);
                    break;
                case 22:
                case 23:
                    ou()
            }
            n = n.return
        }
    if (ce = e, ie = e = Wt(e.current, null), he = be = t, ae = 0, ai = null, nu = ts = wn = 0, Te = Ir = null, cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            } cn = null
    }
    return e
}

function Ip(e, t) {
    do {
        var n = ie;
        try {
            if (Ul(), to.current = Mo, No) {
                for (var r = J.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                No = !1
            }
            if (xn = 0, ue = se = J = null, Or = !1, ii = 0, tu.current = null, n === null || n.return === null) {
                ae = 1, ai = t, ie = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = he, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var y = zc(s);
                    if (y !== null) {
                        y.flags &= -257, Bc(y, s, a, o, t), y.mode & 1 && Fc(o, u, t), t = y, l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(l), t.updateQueue = x
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Fc(o, u, t), su();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (X && a.mode & 1) {
                    var k = zc(s);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256), Bc(k, s, a, o, t), zl(or(l, a));
                        break e
                    }
                }
                o = l = or(l, a),
                ae !== 4 && (ae = 2),
                Ir === null ? Ir = [o] : Ir.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var m = Sp(o, l, t);
                            bc(o, m);
                            break e;
                        case 1:
                            a = l;
                            var p = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ut === null || !Ut.has(g)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var S = kp(o, a, t);
                                bc(o, S);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Bp(n)
        } catch (P) {
            t = P, ie === n && n !== null && (ie = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Fp() {
    var e = Ro.current;
    return Ro.current = Mo, e === null ? Mo : e
}

function su() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4), ce === null || !(wn & 268435455) && !(ts & 268435455) || bt(ce, he)
}

function bo(e, t) {
    var n = B;
    B |= 2;
    var r = Fp();
    (ce !== e || he !== t) && (ht = null, pn(e, t));
    do try {
        sy();
        break
    } catch (i) {
        Ip(e, i)
    }
    while (!0);
    if (Ul(), B = n, Ro.current = r, ie !== null) throw Error(j(261));
    return ce = null, he = 0, ae
}

function sy() {
    for (; ie !== null;) zp(ie)
}

function ay() {
    for (; ie !== null && !Lg();) zp(ie)
}

function zp(e) {
    var t = $p(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, t === null ? Bp(e) : ie = t, tu.current = null
}

function Bp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ey(n, t), n !== null) {
                n.flags &= 32767, ie = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ae = 6, ie = null;
                return
            }
        } else if (n = Jv(n, t, be), n !== null) {
            ie = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ie = t;
            return
        }
        ie = t = e
    } while (t !== null);
    ae === 0 && (ae = 5)
}

function sn(e, t, n) {
    var r = $,
        i = Ge.transition;
    try {
        Ge.transition = null, $ = 1, ly(e, t, n, r)
    } finally {
        Ge.transition = i, $ = r
    }
    return null
}

function ly(e, t, n, r) {
    do Jn(); while (Dt !== null);
    if (B & 6) throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Ug(e, o), e === ce && (ie = ce = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0, Wp(po, function() {
            return Jn(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ge.transition, Ge.transition = null;
        var s = $;
        $ = 1;
        var a = B;
        B |= 4, tu.current = null, ny(e, n), Dp(n, e), Nv(Ma), go = !!Na, Ma = Na = null, e.current = n, ry(n), bg(), B = a, $ = s, Ge.transition = o
    } else e.current = n;
    if (Bi && (Bi = !1, Dt = e, Lo = i), o = e.pendingLanes, o === 0 && (Ut = null), Og(n.stateNode), Re(e, re()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ao) throw Ao = !1, e = Qa, Qa = null, e;
    return Lo & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === Xa ? Fr++ : (Fr = 0, Xa = e) : Fr = 0, en(), null
}

function Jn() {
    if (Dt !== null) {
        var e = Sh(Lo),
            t = Ge.transition,
            n = $;
        try {
            if (Ge.transition = null, $ = 16 > e ? 16 : e, Dt === null) var r = !1;
            else {
                if (e = Dt, Dt = null, Lo = 0, B & 6) throw Error(j(331));
                var i = B;
                for (B |= 4, R = e.current; R !== null;) {
                    var o = R,
                        s = o.child;
                    if (R.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (R = u; R !== null;) {
                                    var c = R;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _r(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, R = f;
                                    else
                                        for (; R !== null;) {
                                            c = R;
                                            var h = c.sibling,
                                                y = c.return;
                                            if (Lp(c), c === u) {
                                                R = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, R = h;
                                                break
                                            }
                                            R = y
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var k = x.sibling;
                                        x.sibling = null, x = k
                                    } while (x !== null)
                                }
                            }
                            R = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, R = s;
                    else e: for (; R !== null;) {
                        if (o = R, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                _r(9, o, o.return)
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, R = m;
                            break e
                        }
                        R = o.return
                    }
                }
                var p = e.current;
                for (R = p; R !== null;) {
                    s = R;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, R = g;
                    else e: for (s = p; R !== null;) {
                        if (a = R, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    es(9, a)
                            }
                        } catch (P) {
                            te(a, a.return, P)
                        }
                        if (a === s) {
                            R = null;
                            break e
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, R = S;
                            break e
                        }
                        R = a.return
                    }
                }
                if (B = i, en(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
                    ut.onPostCommitFiberRoot(Ko, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            $ = n, Ge.transition = t
        }
    }
    return !1
}

function ed(e, t, n) {
    t = or(n, t), t = Sp(e, t, 1), e = Bt(e, t, 1), t = Pe(), e !== null && (gi(e, 1, t), Re(e, t))
}

function te(e, t, n) {
    if (e.tag === 3) ed(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                ed(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
                    e = or(n, e), e = kp(t, e, 1), t = Bt(t, e, 1), e = Pe(), t !== null && (gi(t, 1, e), Re(t, e));
                    break
                }
            }
            t = t.return
        }
}

function uy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (he & n) === n && (ae === 4 || ae === 3 && (he & 130023424) === he && 500 > re() - ru ? pn(e, 0) : nu |= n), Re(e, t)
}

function Up(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ai, Ai <<= 1, !(Ai & 130023424) && (Ai = 4194304)) : t = 1);
    var n = Pe();
    e = jt(e, t), e !== null && (gi(e, t, n), Re(e, n))
}

function cy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Up(e, n)
}

function dy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314))
    }
    r !== null && r.delete(t), Up(e, n)
}
var $p;
$p = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current) Ee = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ee = !1, Zv(e, t, n);
            Ee = !!(e.flags & 131072)
        }
    else Ee = !1, X && t.flags & 1048576 && Gh(t, Po, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ro(e, t), e = t.pendingProps;
            var i = tr(t, Se.current);
            Zn(t, n), i = Xl(null, t, r, e, i, n);
            var o = ql();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (o = !0, So(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Hl(t), i.updater = Jo, t.stateNode = i, i._reactInternals = t, Ia(t, r, e, n), t = Ba(null, t, r, !0, o, n)) : (t.tag = 0, X && o && Il(t), ke(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ro(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = hy(r), e = Ze(r, e), i) {
                    case 0:
                        t = za(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Wc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Uc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = $c(null, t, r, Ze(r.type, e), n);
                        break e
                }
                throw Error(j(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), za(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), Wc(e, t, r, i, n);
        case 3:
            e: {
                if (Tp(t), e === null) throw Error(j(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                Jh(e, t),
                To(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = or(Error(j(423)), t), t = Hc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = or(Error(j(424)), t), t = Hc(e, t, r, n, i);
                    break e
                } else
                    for (De = zt(t.stateNode.containerInfo.firstChild), Oe = t, X = !0, et = null, n = qh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (nr(), r === i) {
                        t = Tt(e, t, n);
                        break e
                    }
                    ke(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return ep(t), e === null && Da(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Ra(r, i) ? s = null : o !== null && Ra(r, o) && (t.flags |= 32), jp(e, t), ke(e, t, s, n), t.child;
        case 6:
            return e === null && Da(t), null;
        case 13:
            return Ep(e, t, n);
        case 4:
            return Kl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rr(t, null, r, n) : ke(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), Uc(e, t, r, i, n);
        case 7:
            return ke(e, t, t.pendingProps, n), t.child;
        case 8:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, K(Co, r._currentValue), r._currentValue = s, o !== null)
                    if (it(o.value, s)) {
                        if (o.children === i.children && !Ne.current) {
                            t = Tt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = yt(-1, n & -n), l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Oa(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(j(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Oa(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                ke(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Zn(t, n), i = Ye(i), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ze(r, t.pendingProps), i = Ze(r.type, i), $c(e, t, r, i, n);
        case 15:
            return Pp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), ro(e, t), t.tag = 1, Me(r) ? (e = !0, So(t)) : e = !1, Zn(t, n), wp(t, r, i), Ia(t, r, i, n), Ba(null, t, r, !0, e, n);
        case 19:
            return Np(e, t, n);
        case 22:
            return Cp(e, t, n)
    }
    throw Error(j(156, t.tag))
};

function Wp(e, t) {
    return vh(e, t)
}

function fy(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ke(e, t, n, r) {
    return new fy(e, t, n, r)
}

function au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function hy(e) {
    if (typeof e == "function") return au(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Tl) return 11;
        if (e === El) return 14
    }
    return 2
}

function Wt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function so(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") au(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Rn:
            return mn(n.children, i, o, t);
        case jl:
            s = 8, i |= 8;
            break;
        case la:
            return e = Ke(12, n, t, i | 2), e.elementType = la, e.lanes = o, e;
        case ua:
            return e = Ke(13, n, t, i), e.elementType = ua, e.lanes = o, e;
        case ca:
            return e = Ke(19, n, t, i), e.elementType = ca, e.lanes = o, e;
        case eh:
            return ns(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Zf:
                    s = 10;
                    break e;
                case Jf:
                    s = 9;
                    break e;
                case Tl:
                    s = 11;
                    break e;
                case El:
                    s = 14;
                    break e;
                case Rt:
                    s = 16, r = null;
                    break e
            }
            throw Error(j(130, e == null ? e : typeof e, ""))
    }
    return t = Ke(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function mn(e, t, n, r) {
    return e = Ke(7, e, r, t), e.lanes = n, e
}

function ns(e, t, n, r) {
    return e = Ke(22, e, r, t), e.elementType = eh, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Us(e, t, n) {
    return e = Ke(6, e, null, t), e.lanes = n, e
}

function $s(e, t, n) {
    return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function py(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ps(0), this.expirationTimes = Ps(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ps(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function lu(e, t, n, r, i, o, s, a, l) {
    return e = new py(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ke(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Hl(o), e
}

function my(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Mn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Hp(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
        if (Pn(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Me(n)) return Hh(e, n, t)
    }
    return t
}

function Kp(e, t, n, r, i, o, s, a, l) {
    return e = lu(n, r, !0, e, i, o, s, a, l), e.context = Hp(null), n = e.current, r = Pe(), i = $t(n), o = yt(r, i), o.callback = t ?? null, Bt(n, o, i), e.current.lanes = i, gi(e, i, r), Re(e, r), e
}

function rs(e, t, n, r) {
    var i = t.current,
        o = Pe(),
        s = $t(i);
    return n = Hp(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(i, t, s), e !== null && (rt(e, i, s, o), eo(e, i, s)), s
}

function Vo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function td(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function uu(e, t) {
    td(e, t), (e = e.alternate) && td(e, t)
}

function gy() {
    return null
}
var Gp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function cu(e) {
    this._internalRoot = e
}
is.prototype.render = cu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    rs(e, t, null, null)
};
is.prototype.unmount = cu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Sn(function() {
            rs(null, e, null, null)
        }), t[Ct] = null
    }
};

function is(e) {
    this._internalRoot = e
}
is.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ch();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
        Lt.splice(n, 0, e), n === 0 && Th(e)
    }
};

function du(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function os(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function nd() {}

function vy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Vo(s);
                o.call(u)
            }
        }
        var s = Kp(t, r, e, 0, null, !1, !1, "", nd);
        return e._reactRootContainer = s, e[Ct] = s.current, Jr(e.nodeType === 8 ? e.parentNode : e), Sn(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Vo(l);
            a.call(u)
        }
    }
    var l = lu(e, 0, !1, null, null, !1, !1, "", nd);
    return e._reactRootContainer = l, e[Ct] = l.current, Jr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
        rs(t, l, n, r)
    }), l
}

function ss(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Vo(s);
                a.call(l)
            }
        }
        rs(t, s, e, i)
    } else s = vy(n, t, e, i, r);
    return Vo(s)
}
kh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Tr(t.pendingLanes);
                n !== 0 && (Rl(t, n | 1), Re(t, re()), !(B & 6) && (sr = re() + 500, en()))
            }
            break;
        case 13:
            Sn(function() {
                var r = jt(e, 1);
                if (r !== null) {
                    var i = Pe();
                    rt(r, e, 1, i)
                }
            }), uu(e, 1)
    }
};
Al = function(e) {
    if (e.tag === 13) {
        var t = jt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            rt(t, e, 134217728, n)
        }
        uu(e, 134217728)
    }
};
Ph = function(e) {
    if (e.tag === 13) {
        var t = $t(e),
            n = jt(e, t);
        if (n !== null) {
            var r = Pe();
            rt(n, e, t, r)
        }
        uu(e, t)
    }
};
Ch = function() {
    return $
};
jh = function(e, t) {
    var n = $;
    try {
        return $ = e, t()
    } finally {
        $ = n
    }
};
wa = function(e, t, n) {
    switch (t) {
        case "input":
            if (ha(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Xo(r);
                        if (!i) throw Error(j(90));
                        nh(r), ha(r, i)
                    }
                }
            }
            break;
        case "textarea":
            ih(e, n);
            break;
        case "select":
            t = n.value, t != null && Yn(e, !!n.multiple, t, !1)
    }
};
dh = iu;
fh = Sn;
var yy = {
        usingClientEntryPoint: !1,
        Events: [yi, Vn, Xo, uh, ch, iu]
    },
    kr = {
        findFiberByHostInstance: un,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    xy = {
        bundleType: kr.bundleType,
        version: kr.version,
        rendererPackageName: kr.rendererPackageName,
        rendererConfig: kr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = mh(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: kr.findFiberByHostInstance || gy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ui.isDisabled && Ui.supportsFiber) try {
        Ko = Ui.inject(xy), ut = Ui
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy;
Fe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!du(t)) throw Error(j(200));
    return my(e, t, null, n)
};
Fe.createRoot = function(e, t) {
    if (!du(e)) throw Error(j(299));
    var n = !1,
        r = "",
        i = Gp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lu(e, 1, !1, null, null, n, !1, r, i), e[Ct] = t.current, Jr(e.nodeType === 8 ? e.parentNode : e), new cu(t)
};
Fe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
    return e = mh(t), e = e === null ? null : e.stateNode, e
};
Fe.flushSync = function(e) {
    return Sn(e)
};
Fe.hydrate = function(e, t, n) {
    if (!os(t)) throw Error(j(200));
    return ss(null, e, t, !0, n)
};
Fe.hydrateRoot = function(e, t, n) {
    if (!du(e)) throw Error(j(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = Gp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Kp(t, null, e, 1, n ?? null, i, !1, o, s), e[Ct] = t.current, Jr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new is(t)
};
Fe.render = function(e, t, n) {
    if (!os(t)) throw Error(j(200));
    return ss(null, e, t, !1, n)
};
Fe.unmountComponentAtNode = function(e) {
    if (!os(e)) throw Error(j(40));
    return e._reactRootContainer ? (Sn(function() {
        ss(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ct] = null
        })
    }), !0) : !1
};
Fe.unstable_batchedUpdates = iu;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!os(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return ss(e, t, n, !1, r)
};
Fe.version = "18.3.1-next-f1338f8080-20240426";

function Yp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)
    } catch (e) {
        console.error(e)
    }
}
Yp(), Yf.exports = Fe;
var wy = Yf.exports,
    Qp, rd = wy;
Qp = rd.createRoot, rd.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function li() {
    return li = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, li.apply(this, arguments)
}
var Ot;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Ot || (Ot = {}));
const id = "popstate";

function Sy(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: s,
            hash: a
        } = r.location;
        return Ja("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : Do(i)
    }
    return Py(t, n, null, e)
}

function oe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Xp(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function ky() {
    return Math.random().toString(36).substr(2, 8)
}

function od(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ja(e, t, n, r) {
    return n === void 0 && (n = null), li({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? hr(t) : t, {
        state: n,
        key: t && t.key || r || ky()
    })
}

function Do(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function hr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Py(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, s = i.history, a = Ot.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(li({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        a = Ot.Pop;
        let k = c(),
            m = k == null ? null : k - u;
        u = k, l && l({
            action: a,
            location: x.location,
            delta: m
        })
    }

    function h(k, m) {
        a = Ot.Push;
        let p = Ja(x.location, k, m);
        u = c() + 1;
        let g = od(p, u),
            S = x.createHref(p);
        try {
            s.pushState(g, "", S)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError") throw P;
            i.location.assign(S)
        }
        o && l && l({
            action: a,
            location: x.location,
            delta: 1
        })
    }

    function y(k, m) {
        a = Ot.Replace;
        let p = Ja(x.location, k, m);
        u = c();
        let g = od(p, u),
            S = x.createHref(p);
        s.replaceState(g, "", S), o && l && l({
            action: a,
            location: x.location,
            delta: 0
        })
    }

    function v(k) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
            p = typeof k == "string" ? k : Do(k);
        return p = p.replace(/ $/, "%20"), oe(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }
    let x = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(k) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(id, f), l = k, () => {
                i.removeEventListener(id, f), l = null
            }
        },
        createHref(k) {
            return t(i, k)
        },
        createURL: v,
        encodeLocation(k) {
            let m = v(k);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: y,
        go(k) {
            return s.go(k)
        }
    };
    return x
}
var sd;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(sd || (sd = {}));

function Cy(e, t, n) {
    return n === void 0 && (n = "/"), jy(e, t, n, !1)
}

function jy(e, t, n, r) {
    let i = typeof t == "string" ? hr(t) : t,
        o = fu(i.pathname || "/", n);
    if (o == null) return null;
    let s = qp(e);
    Ty(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = _y(o);
        a = Dy(s[l], u, r)
    }
    return a
}

function qp(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (oe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Ht([r, l.relativePath]),
            c = n.concat(l);
        o.children && o.children.length > 0 && (oe(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), qp(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: by(u, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
        else
            for (let l of Zp(o.path)) i(o, s, l)
    }), t
}

function Zp(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = Zp(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function Ty(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Vy(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Ey = /^:[\w-]+$/,
    Ny = 3,
    My = 2,
    Ry = 1,
    Ay = 10,
    Ly = -2,
    ad = e => e === "*";

function by(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(ad) && (r += Ly), t && (r += My), n.filter(i => !ad(i)).reduce((i, o) => i + (Ey.test(o) ? Ny : o === "" ? Ry : Ay), r)
}

function Vy(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Dy(e, t, n) {
    let {
        routesMeta: r
    } = e, i = {}, o = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = o === "/" ? t : t.slice(o.length) || "/",
            f = ld({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            h = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = ld({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !f) return null;
        Object.assign(i, f.params), s.push({
            params: i,
            pathname: Ht([o, f.pathname]),
            pathnameBase: By(Ht([o, f.pathnameBase])),
            route: h
        }), f.pathnameBase !== "/" && (o = Ht([o, f.pathnameBase]))
    }
    return s
}

function ld(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Oy(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            let {
                paramName: h,
                isOptional: y
            } = c;
            if (h === "*") {
                let x = a[f] || "";
                s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[f];
            return y && !v ? u[h] = void 0 : u[h] = (v || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}

function Oy(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Xp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function _y(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Xp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function fu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Iy(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? hr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Fy(n, t) : t,
        search: Uy(r),
        hash: $y(i)
    }
}

function Fy(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function Ws(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function zy(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Jp(e, t) {
    let n = zy(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function em(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = hr(e) : (i = li({}, e), oe(!i.pathname || !i.pathname.includes("?"), Ws("?", "pathname", "search", i)), oe(!i.pathname || !i.pathname.includes("#"), Ws("#", "pathname", "hash", i)), oe(!i.search || !i.search.includes("#"), Ws("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        s = o ? "/" : i.pathname,
        a;
    if (s == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";) h.shift(), f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = Iy(i, a),
        u = s && s !== "/" && s.endsWith("/"),
        c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}
const Ht = e => e.join("/").replace(/\/\/+/g, "/"),
    By = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Uy = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    $y = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Wy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const tm = ["post", "put", "patch", "delete"];
new Set(tm);
const Hy = ["get", ...tm];
new Set(Hy);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ui() {
    return ui = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ui.apply(this, arguments)
}
const hu = w.createContext(null),
    Ky = w.createContext(null),
    Cn = w.createContext(null),
    as = w.createContext(null),
    jn = w.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    nm = w.createContext(null);

function Gy(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    wi() || oe(!1);
    let {
        basename: r,
        navigator: i
    } = w.useContext(Cn), {
        hash: o,
        pathname: s,
        search: a
    } = im(e, {
        relative: n
    }), l = s;
    return r !== "/" && (l = s === "/" ? r : Ht([r, s])), i.createHref({
        pathname: l,
        search: a,
        hash: o
    })
}

function wi() {
    return w.useContext(as) != null
}

function Tn() {
    return wi() || oe(!1), w.useContext(as).location
}

function rm(e) {
    w.useContext(Cn).static || w.useLayoutEffect(e)
}

function pu() {
    let {
        isDataRoute: e
    } = w.useContext(jn);
    return e ? s1() : Yy()
}

function Yy() {
    wi() || oe(!1);
    let e = w.useContext(hu),
        {
            basename: t,
            future: n,
            navigator: r
        } = w.useContext(Cn),
        {
            matches: i
        } = w.useContext(jn),
        {
            pathname: o
        } = Tn(),
        s = JSON.stringify(Jp(i, n.v7_relativeSplatPath)),
        a = w.useRef(!1);
    return rm(() => {
        a.current = !0
    }), w.useCallback(function(u, c) {
        if (c === void 0 && (c = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = em(u, JSON.parse(s), o, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ht([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, s, o, e])
}

function im(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = w.useContext(Cn), {
        matches: i
    } = w.useContext(jn), {
        pathname: o
    } = Tn(), s = JSON.stringify(Jp(i, r.v7_relativeSplatPath));
    return w.useMemo(() => em(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}

function Qy(e, t) {
    return Xy(e, t)
}

function Xy(e, t, n, r) {
    wi() || oe(!1);
    let {
        navigator: i
    } = w.useContext(Cn), {
        matches: o
    } = w.useContext(jn), s = o[o.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Tn(),
        c;
    if (t) {
        var f;
        let k = typeof t == "string" ? hr(t) : t;
        l === "/" || (f = k.pathname) != null && f.startsWith(l) || oe(!1), c = k
    } else c = u;
    let h = c.pathname || "/",
        y = h;
    if (l !== "/") {
        let k = l.replace(/^\//, "").split("/");
        y = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/")
    }
    let v = Cy(e, {
            pathname: y
        }),
        x = t1(v && v.map(k => Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: Ht([l, i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname]),
            pathnameBase: k.pathnameBase === "/" ? l : Ht([l, i.encodeLocation ? i.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
        })), o, n, r);
    return t && x ? w.createElement(as.Provider, {
        value: {
            location: ui({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Ot.Pop
        }
    }, x) : x
}

function qy() {
    let e = o1(),
        t = Wy(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Zy = w.createElement(qy, null);
class Jy extends w.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(jn.Provider, {
            value: this.props.routeContext
        }, w.createElement(nm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function e1(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = w.useContext(hu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(jn.Provider, {
        value: t
    }, r)
}

function t1(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || oe(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let f = s[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
                let {
                    loaderData: h,
                    errors: y
                } = n, v = f.route.loader && h[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, f, h) => {
        let y, v = !1,
            x = null,
            k = null;
        n && (y = a && f.route.id ? a[f.route.id] : void 0, x = f.route.errorElement || Zy, l && (u < 0 && h === 0 ? (v = !0, k = null) : u === h && (v = !0, k = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, h + 1)),
            p = () => {
                let g;
                return y ? g = x : v ? g = k : f.route.Component ? g = w.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, w.createElement(e1, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? w.createElement(Jy, {
            location: n.location,
            revalidation: n.revalidation,
            component: x,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var om = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(om || {}),
    Oo = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Oo || {});

function n1(e) {
    let t = w.useContext(hu);
    return t || oe(!1), t
}

function r1(e) {
    let t = w.useContext(Ky);
    return t || oe(!1), t
}

function i1(e) {
    let t = w.useContext(jn);
    return t || oe(!1), t
}

function sm(e) {
    let t = i1(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || oe(!1), n.route.id
}

function o1() {
    var e;
    let t = w.useContext(nm),
        n = r1(Oo.UseRouteError),
        r = sm(Oo.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function s1() {
    let {
        router: e
    } = n1(om.UseNavigateStable), t = sm(Oo.UseNavigateStable), n = w.useRef(!1);
    return rm(() => {
        n.current = !0
    }), w.useCallback(function(i, o) {
        o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ui({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const ud = {};

function a1(e, t) {
    ud[t] || (ud[t] = !0, console.warn(t))
}
const cd = (e, t, n) => a1(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));

function l1(e, t) {
    e != null && e.v7_startTransition || cd("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), !(e != null && e.v7_relativeSplatPath) && !t && cd("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}

function tt(e) {
    oe(!1)
}

function u1(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Ot.Pop,
        navigator: o,
        static: s = !1,
        future: a
    } = e;
    wi() && oe(!1);
    let l = t.replace(/^\/*/, "/"),
        u = w.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s,
            future: ui({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, o, s]);
    typeof r == "string" && (r = hr(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: h = "",
        state: y = null,
        key: v = "default"
    } = r, x = w.useMemo(() => {
        let k = fu(c, l);
        return k == null ? null : {
            location: {
                pathname: k,
                search: f,
                hash: h,
                state: y,
                key: v
            },
            navigationType: i
        }
    }, [l, c, f, h, y, v, i]);
    return x == null ? null : w.createElement(Cn.Provider, {
        value: u
    }, w.createElement(as.Provider, {
        children: n,
        value: x
    }))
}

function am(e) {
    let {
        children: t,
        location: n
    } = e;
    return Qy(el(t), n)
}
new Promise(() => {});

function el(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r)) return;
        let o = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, el(r.props.children, o));
            return
        }
        r.type !== tt && oe(!1), !r.props.index || !r.props.children || oe(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = el(r.props.children, o)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tl() {
    return tl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, tl.apply(this, arguments)
}

function c1(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function d1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function f1(e, t) {
    return e.button === 0 && (!t || t === "_self") && !d1(e)
}
const h1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    p1 = "6";
try {
    window.__reactRouterVersion = p1
} catch {}
const m1 = "startTransition",
    dd = ug[m1];

function g1(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, o = w.useRef();
    o.current == null && (o.current = Sy({
        window: i,
        v5Compat: !0
    }));
    let s = o.current,
        [a, l] = w.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = w.useCallback(f => {
            u && dd ? dd(() => l(f)) : l(f)
        }, [l, u]);
    return w.useLayoutEffect(() => s.listen(c), [s, c]), w.useEffect(() => l1(r), [r]), w.createElement(u1, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
const v1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    y1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Bn = w.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: o,
            replace: s,
            state: a,
            target: l,
            to: u,
            preventScrollReset: c,
            viewTransition: f
        } = t, h = c1(t, h1), {
            basename: y
        } = w.useContext(Cn), v, x = !1;
        if (typeof u == "string" && y1.test(u) && (v = u, v1)) try {
            let g = new URL(window.location.href),
                S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
                P = fu(S.pathname, y);
            S.origin === g.origin && P != null ? u = P + S.search + S.hash : x = !0
        } catch {}
        let k = Gy(u, {
                relative: i
            }),
            m = x1(u, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: i,
                viewTransition: f
            });

        function p(g) {
            r && r(g), g.defaultPrevented || m(g)
        }
        return w.createElement("a", tl({}, h, {
            href: v || k,
            onClick: x || o ? r : p,
            ref: n,
            target: l
        }))
    });
var fd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(fd || (fd = {}));
var hd;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(hd || (hd = {}));

function x1(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: o,
        relative: s,
        viewTransition: a
    } = t === void 0 ? {} : t, l = pu(), u = Tn(), c = im(e, {
        relative: s
    });
    return w.useCallback(f => {
        if (f1(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : Do(u) === Do(c);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: o,
                relative: s,
                viewTransition: a
            })
        }
    }, [u, l, c, r, i, n, e, o, s, a])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    F = (e, t) => {
        const n = w.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: s,
            className: a = "",
            children: l,
            ...u
        }, c) => w.createElement("svg", {
            ref: c,
            ...w1,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? Number(o) * 24 / Number(i) : o,
            className: ["lucide", `lucide-${S1(e)}`, a].join(" "),
            ...u
        }, [...t.map(([f, h]) => w.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = F("Activity", [
    ["path", {
        d: "M22 12h-4l-3 9L9 3l-3 9H2",
        key: "d5dnw9"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = F("AlertTriangle", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = F("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = F("Ban", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m4.9 4.9 14.2 14.2",
        key: "1m5liu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = F("Bell", [
    ["path", {
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
        key: "1qo2s2"
    }],
    ["path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
        key: "qgo35s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = F("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = F("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = F("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = F("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = F("Code2", [
    ["path", {
        d: "m18 16 4-4-4-4",
        key: "1inbqp"
    }],
    ["path", {
        d: "m6 8-4 4 4 4",
        key: "15zrgr"
    }],
    ["path", {
        d: "m14.5 4-5 16",
        key: "e7oirm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = F("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = F("Crown", [
    ["path", {
        d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
        key: "zkxr6b"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = F("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = F("Eye", [
    ["path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = F("FileWarning", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = F("Flag", [
    ["path", {
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
        key: "i9b6wo"
    }],
    ["line", {
        x1: "4",
        x2: "4",
        y1: "22",
        y2: "15",
        key: "1cm3nv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = F("Gamepad2", [
    ["line", {
        x1: "6",
        x2: "10",
        y1: "11",
        y2: "11",
        key: "1gktln"
    }],
    ["line", {
        x1: "8",
        x2: "8",
        y1: "9",
        y2: "13",
        key: "qnk9ow"
    }],
    ["line", {
        x1: "15",
        x2: "15.01",
        y1: "12",
        y2: "12",
        key: "krot7o"
    }],
    ["line", {
        x1: "18",
        x2: "18.01",
        y1: "10",
        y2: "10",
        key: "1lcuu1"
    }],
    ["path", {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
        key: "mfqc10"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = F("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = F("Home", [
    ["path", {
        d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "y5dka4"
    }],
    ["polyline", {
        points: "9 22 9 12 15 12 15 22",
        key: "e2us08"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = F("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = F("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = F("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = F("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = F("MonitorX", [
    ["path", {
        d: "m14.5 12.5-5-5",
        key: "1jahn5"
    }],
    ["path", {
        d: "m9.5 12.5 5-5",
        key: "1k2t7b"
    }],
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "3",
        rx: "2",
        key: "48i651"
    }],
    ["path", {
        d: "M12 17v4",
        key: "1riwvh"
    }],
    ["path", {
        d: "M8 21h8",
        key: "1ev6f3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = F("Play", [
    ["polygon", {
        points: "5 3 19 12 5 21 5 3",
        key: "191637"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = F("Plus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W1 = F("Save", [
    ["path", {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        key: "1owoqh"
    }],
    ["polyline", {
        points: "17 21 17 13 7 13 7 21",
        key: "1md35c"
    }],
    ["polyline", {
        points: "7 3 7 8 15 8",
        key: "8nz8an"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = F("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = F("Server", [
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq"
    }],
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "6",
        y2: "6",
        key: "16zg32"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "18",
        y2: "18",
        key: "nzw8ys"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G1 = F("Settings", [
    ["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = F("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = F("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = F("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = F("TowerControl", [
    ["path", {
        d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
        key: "1pledb"
    }],
    ["path", {
        d: "M8 13v9",
        key: "hmv0ci"
    }],
    ["path", {
        d: "M16 22v-9",
        key: "ylnf1u"
    }],
    ["path", {
        d: "m9 6 1 7",
        key: "dpdgam"
    }],
    ["path", {
        d: "m15 6-1 7",
        key: "ls7zgu"
    }],
    ["path", {
        d: "M12 6V2",
        key: "1pj48d"
    }],
    ["path", {
        d: "M13 2h-2",
        key: "mj6ths"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X1 = F("Trash2", [
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
    }],
    ["path", {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "11",
        y2: "17",
        key: "1uufr5"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "11",
        y2: "17",
        key: "xtxkd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q1 = F("Twitter", [
    ["path", {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z1 = F("UserCheck", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["polyline", {
        points: "16 11 18 13 22 9",
        key: "1pwet4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = F("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = F("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J1 = F("Youtube", [
    ["path", {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4"
    }],
    ["path", {
        d: "m10 15 5-3-5-3z",
        key: "1jp15x"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = F("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]);

function ex(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}

function cs(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const nl = e => Array.isArray(e);

function dm(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function ci(e) {
    return typeof e == "string" || Array.isArray(e)
}

function gd(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function gu(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = gd(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, o] = gd(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function ds(e, t, n) {
    const r = e.getProps();
    return gu(r, t, n !== void 0 ? n : r.custom, e)
}
const vu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    yu = ["initial", ...vu],
    Si = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    En = new Set(Si),
    xt = e => e * 1e3,
    wt = e => e / 1e3,
    tx = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    nx = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    rx = {
        type: "keyframes",
        duration: .8
    },
    ix = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    ox = (e, {
        keyframes: t
    }) => t.length > 2 ? rx : En.has(e) ? e.startsWith("scale") ? nx(t[1]) : tx : ix;

function xu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const sx = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    ax = e => e !== null;

function fs(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(ax),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const we = e => e;

function lx(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        o.has(u) && (l.schedule(u), e()), u(s)
    }
    const l = {
        schedule: (u, c = !1, f = !1) => {
            const y = f && r ? t : n;
            return c && o.add(u), y.has(u) || y.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (s = u, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const $i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    ux = 40;

function fm(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        s = $i.reduce((m, p) => (m[p] = lx(o), m), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: f,
            postRender: h
        } = s,
        y = () => {
            const m = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, ux), 1), i.timestamp = m, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), f.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(y))
        },
        v = () => {
            n = !0, r = !0, i.isProcessing || e(y)
        };
    return {
        schedule: $i.reduce((m, p) => {
            const g = s[p];
            return m[p] = (S, P = !1, C = !1) => (n || v(), g.schedule(S, P, C)), m
        }, {}),
        cancel: m => {
            for (let p = 0; p < $i.length; p++) s[$i[p]].cancel(m)
        },
        state: i,
        steps: s
    }
}
const {
    schedule: H,
    cancel: Qt,
    state: fe,
    steps: Hs
} = fm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0), hm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, cx = 1e-7, dx = 12;

function fx(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = hm(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > cx && ++a < dx);
    return s
}

function ki(e, t, n, r) {
    if (e === t && n === r) return we;
    const i = o => fx(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : hm(i(o), t, r)
}
const pm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    mm = e => t => 1 - e(1 - t),
    gm = ki(.33, 1.53, .69, .99),
    wu = mm(gm),
    vm = pm(wu),
    ym = e => (e *= 2) < 1 ? .5 * wu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    Su = e => 1 - Math.sin(Math.acos(e)),
    xm = mm(Su),
    wm = pm(Su),
    Sm = e => /^0[^.\s]+$/u.test(e);

function hx(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sm(e) : !0
}
let rl = we;
const km = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Pm = e => t => typeof t == "string" && t.startsWith(e),
    Cm = Pm("--"),
    px = Pm("var(--"),
    ku = e => px(e) ? mx.test(e.split("/*")[0].trim()) : !1,
    mx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    gx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function vx(e) {
    const t = gx.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function jm(e, t, n = 1) {
    const [r, i] = vx(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return km(s) ? parseFloat(s) : s
    }
    return ku(i) ? jm(i, t, n + 1) : i
}
const Xt = (e, t, n) => n > t ? t : n < e ? e : n,
    pr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    di = {
        ...pr,
        transform: e => Xt(0, 1, e)
    },
    Wi = {
        ...pr,
        default: 1
    },
    Pi = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Mt = Pi("deg"),
    dt = Pi("%"),
    D = Pi("px"),
    yx = Pi("vh"),
    xx = Pi("vw"),
    vd = {
        ...dt,
        parse: e => dt.parse(e) / 100,
        transform: e => dt.transform(e * 100)
    },
    wx = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    yd = e => e === pr || e === D,
    xd = (e, t) => parseFloat(e.split(", ")[t]),
    wd = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return xd(i[1], t);
        {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? xd(o[1], e) : 0
        }
    },
    Sx = new Set(["x", "y", "z"]),
    kx = Si.filter(e => !Sx.has(e));

function Px(e) {
    const t = [];
    return kx.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const ar = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: wd(4, 13),
    y: wd(5, 14)
};
ar.translateX = ar.x;
ar.translateY = ar.y;
const Tm = e => t => t.test(e),
    Cx = {
        test: e => e === "auto",
        parse: e => e
    },
    Em = [pr, D, dt, Mt, xx, yx, Cx],
    Sd = e => Em.find(Tm(e)),
    gn = new Set;
let il = !1,
    ol = !1;

function Nm() {
    if (ol) {
        const e = Array.from(gn).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = Px(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    ol = !1, il = !1, gn.forEach(e => e.complete()), gn.clear()
}

function Mm() {
    gn.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (ol = !0)
    })
}

function jx() {
    Mm(), Nm()
}
class Pu {
    constructor(t, n, r, i, o, s = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (gn.add(this), il || (il = !0, H.read(Mm), H.resolveKeyframes(Nm))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get(),
                        a = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), gn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, gn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Br = e => Math.round(e * 1e5) / 1e5,
    Cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Tx(e) {
    return e == null
}
const Ex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    ju = (e, t) => n => !!(typeof n == "string" && Ex.test(n) && n.startsWith(e) || t && !Tx(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Rm = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, o, s, a] = r.match(Cu);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    Nx = e => Xt(0, 255, e),
    Ks = {
        ...pr,
        transform: e => Math.round(Nx(e))
    },
    fn = {
        test: ju("rgb", "red"),
        parse: Rm("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Ks.transform(e) + ", " + Ks.transform(t) + ", " + Ks.transform(n) + ", " + Br(di.transform(r)) + ")"
    };

function Mx(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const sl = {
        test: ju("#"),
        parse: Mx,
        transform: fn.transform
    },
    Un = {
        test: ju("hsl", "hue"),
        parse: Rm("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + dt.transform(Br(t)) + ", " + dt.transform(Br(n)) + ", " + Br(di.transform(r)) + ")"
    },
    ve = {
        test: e => fn.test(e) || sl.test(e) || Un.test(e),
        parse: e => fn.test(e) ? fn.parse(e) : Un.test(e) ? Un.parse(e) : sl.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? fn.transform(e) : Un.transform(e)
    },
    Rx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Ax(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Cu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Rx)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Am = "number",
    Lm = "color",
    Lx = "var",
    bx = "var(",
    kd = "${}",
    Vx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function fi(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const a = t.replace(Vx, l => (ve.test(l) ? (r.color.push(o), i.push(Lm), n.push(ve.parse(l))) : l.startsWith(bx) ? (r.var.push(o), i.push(Lx), n.push(l)) : (r.number.push(o), i.push(Am), n.push(parseFloat(l))), ++o, kd)).split(kd);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function bm(e) {
    return fi(e).values
}

function Vm(e) {
    const {
        split: t,
        types: n
    } = fi(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s], i[s] !== void 0) {
                const a = n[s];
                a === Am ? o += Br(i[s]) : a === Lm ? o += ve.transform(i[s]) : o += i[s]
            } return o
    }
}
const Dx = e => typeof e == "number" ? 0 : e;

function Ox(e) {
    const t = bm(e);
    return Vm(e)(t.map(Dx))
}
const qt = {
        test: Ax,
        parse: bm,
        createTransformer: Vm,
        getAnimatableNone: Ox
    },
    _x = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Ix(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Cu) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = _x.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const Fx = /\b([a-z-]*)\(.*?\)/gu,
    al = {
        ...qt,
        getAnimatableNone: e => {
            const t = e.match(Fx);
            return t ? t.map(Ix).join(" ") : e
        }
    },
    zx = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        backgroundPositionX: D,
        backgroundPositionY: D
    },
    Bx = {
        rotate: Mt,
        rotateX: Mt,
        rotateY: Mt,
        rotateZ: Mt,
        scale: Wi,
        scaleX: Wi,
        scaleY: Wi,
        scaleZ: Wi,
        skew: Mt,
        skewX: Mt,
        skewY: Mt,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: di,
        originX: vd,
        originY: vd,
        originZ: D
    },
    Pd = {
        ...pr,
        transform: Math.round
    },
    Tu = {
        ...zx,
        ...Bx,
        zIndex: Pd,
        size: D,
        fillOpacity: di,
        strokeOpacity: di,
        numOctaves: Pd
    },
    Ux = {
        ...Tu,
        color: ve,
        backgroundColor: ve,
        outlineColor: ve,
        fill: ve,
        stroke: ve,
        borderColor: ve,
        borderTopColor: ve,
        borderRightColor: ve,
        borderBottomColor: ve,
        borderLeftColor: ve,
        filter: al,
        WebkitFilter: al
    },
    Eu = e => Ux[e];

function Dm(e, t) {
    let n = Eu(e);
    return n !== al && (n = qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const $x = new Set(["auto", "none", "0"]);

function Wx(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !$x.has(o) && fi(o).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const o of t) e[o] = Dm(n, i)
}
class Om extends Pu {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), ku(u))) {
                const c = jm(u, n.current);
                c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !wx.has(r) || t.length !== 2) return;
        const [i, o] = t, s = Sd(i), a = Sd(o);
        if (s !== a)
            if (yd(s) && yd(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) hx(t[i]) && r.push(i);
        r.length && Wx(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ar[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1,
            a = i[s];
        i[s] = ar[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Nu(e) {
    return typeof e == "function"
}
let ao;

function Hx() {
    ao = void 0
}
const ft = {
        now: () => (ao === void 0 && ft.set(fe.isProcessing || sx.useManualTiming ? fe.timestamp : performance.now()), ao),
        set: e => {
            ao = e, queueMicrotask(Hx)
        }
    },
    Cd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (qt.test(e) || e === "0") && !e.startsWith("url("));

function Kx(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function Gx(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const o = e[e.length - 1],
        s = Cd(i, t),
        a = Cd(o, t);
    return !s || !a ? !1 : Kx(e) || (n === "spring" || Nu(n)) && r
}
const Yx = 40;
class _m {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ft.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Yx ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && jx(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = ft.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !Gx(t, r, i, o))
            if (s) this.options.duration = 0;
            else {
                l == null || l(fs(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            } const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function Im(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Qx = 5;

function Fm(e, t, n) {
    const r = Math.max(t - Qx, 0);
    return Im(n - e(r), t - r)
}
const Gs = .001,
    Xx = .01,
    qx = 10,
    Zx = .05,
    Jx = 1;

function ew({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, o, s = 1 - t;
    s = Xt(Zx, Jx, s), e = Xt(Xx, qx, wt(e)), s < 1 ? (i = u => {
        const c = u * s,
            f = c * e,
            h = c - n,
            y = ll(u, s),
            v = Math.exp(-f);
        return Gs - h / y * v
    }, o = u => {
        const f = u * s * e,
            h = f * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = ll(Math.pow(u, 2), s);
        return (-i(u) + Gs > 0 ? -1 : 1) * ((h - y) * v) / x
    }) : (i = u => {
        const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -Gs + c * f
    }, o = u => {
        const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return c * f
    });
    const a = 5 / e,
        l = nw(i, o, a);
    if (e = xt(e), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const tw = 12;

function nw(e, t, n) {
    let r = n;
    for (let i = 1; i < tw; i++) r = r - e(r) / t(r);
    return r
}

function ll(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const rw = ["duration", "bounce"],
    iw = ["stiffness", "damping", "mass"];

function jd(e, t) {
    return t.some(n => e[n] !== void 0)
}

function ow(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!jd(e, iw) && jd(e, rw)) {
        const n = ew(e);
        t = {
            ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function zm({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        o = e[e.length - 1],
        s = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: f,
            isResolvedFromDuration: h
        } = ow({
            ...r,
            velocity: -wt(r.velocity || 0)
        }),
        y = f || 0,
        v = l / (2 * Math.sqrt(a * u)),
        x = o - i,
        k = wt(Math.sqrt(a / u)),
        m = Math.abs(x) < 5;
    n || (n = m ? .01 : 2), t || (t = m ? .005 : .5);
    let p;
    if (v < 1) {
        const g = ll(k, v);
        p = S => {
            const P = Math.exp(-v * k * S);
            return o - P * ((y + v * k * x) / g * Math.sin(g * S) + x * Math.cos(g * S))
        }
    } else if (v === 1) p = g => o - Math.exp(-k * g) * (x + (y + k * x) * g);
    else {
        const g = k * Math.sqrt(v * v - 1);
        p = S => {
            const P = Math.exp(-v * k * S),
                C = Math.min(g * S, 300);
            return o - P * ((y + v * k * x) * Math.sinh(C) + g * x * Math.cosh(C)) / g
        }
    }
    return {
        calculatedDuration: h && c || null,
        next: g => {
            const S = p(g);
            if (h) s.done = g >= c;
            else {
                let P = 0;
                v < 1 && (P = g === 0 ? xt(y) : Fm(p, g, S));
                const C = Math.abs(P) <= n,
                    E = Math.abs(o - S) <= t;
                s.done = C && E
            }
            return s.value = s.done ? o : S, s
        }
    }
}

function Td({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const f = e[0],
        h = {
            done: !1,
            value: f
        },
        y = T => a !== void 0 && T < a || l !== void 0 && T > l,
        v = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
    let x = n * t;
    const k = f + x,
        m = s === void 0 ? k : s(k);
    m !== k && (x = m - f);
    const p = T => -x * Math.exp(-T / r),
        g = T => m + p(T),
        S = T => {
            const V = p(T),
                M = g(T);
            h.done = Math.abs(V) <= u, h.value = h.done ? m : M
        };
    let P, C;
    const E = T => {
        y(h.value) && (P = T, C = zm({
            keyframes: [h.value, v(h.value)],
            velocity: Fm(g, T, h.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return E(0), {
        calculatedDuration: null,
        next: T => {
            let V = !1;
            return !C && P === void 0 && (V = !0, S(T), E(T)), P !== void 0 && T >= P ? C.next(T - P) : (!V && S(T), h)
        }
    }
}
const sw = ki(.42, 0, 1, 1),
    aw = ki(0, 0, .58, 1),
    Bm = ki(.42, 0, .58, 1),
    lw = e => Array.isArray(e) && typeof e[0] != "number",
    Mu = e => Array.isArray(e) && typeof e[0] == "number",
    Ed = {
        linear: we,
        easeIn: sw,
        easeInOut: Bm,
        easeOut: aw,
        circIn: Su,
        circInOut: wm,
        circOut: xm,
        backIn: wu,
        backInOut: vm,
        backOut: gm,
        anticipate: ym
    },
    Nd = e => {
        if (Mu(e)) {
            rl(e.length === 4);
            const [t, n, r, i] = e;
            return ki(t, n, r, i)
        } else if (typeof e == "string") return rl(Ed[e] !== void 0), Ed[e];
        return e
    },
    uw = (e, t) => n => t(e(n)),
    St = (...e) => e.reduce(uw),
    lr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Z = (e, t, n) => e + (t - e) * n;

function Ys(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function cw({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = Ys(l, a, e + 1 / 3), o = Ys(l, a, e), s = Ys(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function _o(e, t) {
    return n => n > 0 ? t : e
}
const Qs = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    dw = [sl, fn, Un],
    fw = e => dw.find(t => t.test(e));

function Md(e) {
    const t = fw(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Un && (n = cw(n)), n
}
const Rd = (e, t) => {
        const n = Md(e),
            r = Md(t);
        if (!n || !r) return _o(e, t);
        const i = {
            ...n
        };
        return o => (i.red = Qs(n.red, r.red, o), i.green = Qs(n.green, r.green, o), i.blue = Qs(n.blue, r.blue, o), i.alpha = Z(n.alpha, r.alpha, o), fn.transform(i))
    },
    ul = new Set(["none", "hidden"]);

function hw(e, t) {
    return ul.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function pw(e, t) {
    return n => Z(e, t, n)
}

function Ru(e) {
    return typeof e == "number" ? pw : typeof e == "string" ? ku(e) ? _o : ve.test(e) ? Rd : vw : Array.isArray(e) ? Um : typeof e == "object" ? ve.test(e) ? Rd : mw : _o
}

function Um(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, s) => Ru(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function mw(e, t) {
    const n = {
            ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ru(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function gw(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            a = e.indexes[s][i[s]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}
const vw = (e, t) => {
    const n = qt.createTransformer(t),
        r = fi(e),
        i = fi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ul.has(e) && !i.values.length || ul.has(t) && !r.values.length ? hw(e, t) : St(Um(gw(r, i), i.values), n) : _o(e, t)
};

function $m(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Z(e, t, n) : Ru(e)(e, t)
}

function yw(e, t, n) {
    const r = [],
        i = n || $m,
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || we : t;
            a = St(l, a)
        }
        r.push(a)
    }
    return r
}

function xw(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (rl(o === t.length), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = yw(t, r, i),
        a = s.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const f = lr(e[c], e[c + 1], u);
            return s[c](f)
        };
    return n ? u => l(Xt(e[0], e[o - 1], u)) : l
}

function ww(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = lr(0, t, r);
        e.push(Z(n, 1, i))
    }
}

function Sw(e) {
    const t = [0];
    return ww(t, e.length - 1), t
}

function kw(e, t) {
    return e.map(n => n * t)
}

function Pw(e, t) {
    return e.map(() => t || Bm).splice(0, e.length - 1)
}

function Io({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = lw(r) ? r.map(Nd) : Nd(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = kw(n && n.length === t.length ? n : Sw(t), e),
        a = xw(s, t, {
            ease: Array.isArray(i) ? i : Pw(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l), o.done = l >= e, o)
    }
}
const Ad = 2e4;

function Cw(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ad;) t += n, r = e.next(t);
    return t >= Ad ? 1 / 0 : t
}
const jw = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => H.update(t, !0),
            stop: () => Qt(t),
            now: () => fe.isProcessing ? fe.timestamp : ft.now()
        }
    },
    Tw = {
        decay: Td,
        inertia: Td,
        tween: Io,
        keyframes: Io,
        spring: zm
    },
    Ew = e => e / 100;
class Au extends _m {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || Pu, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
        } = this.options, a = Nu(n) ? n : Tw[n] || Io;
        let l, u;
        a !== Io && typeof t[0] != "number" && (l = St(Ew, $m(t[0], t[1])), t = [0, 100]);
        const c = a({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })), c.calculatedDuration === null && (c.calculatedDuration = Cw(c));
        const {
            calculatedDuration: f
        } = c, h = f + i, y = h * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: T
            } = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: f
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: h,
            repeat: y,
            repeatType: v,
            repeatDelay: x,
            onUpdate: k
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            p = this.speed >= 0 ? m < 0 : m > c;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let g = this.currentTime,
            S = o;
        if (y) {
            const T = Math.min(this.currentTime, c) / f;
            let V = Math.floor(T),
                M = T % 1;
            !M && T >= 1 && (M = 1), M === 1 && V--, V = Math.min(V, y + 1), !!(V % 2) && (v === "reverse" ? (M = 1 - M, x && (M -= x / f)) : v === "mirror" && (S = s)), g = Xt(0, 1, M) * f
        }
        const P = p ? {
            done: !1,
            value: l[0]
        } : S.next(g);
        a && (P.value = a(P.value));
        let {
            done: C
        } = P;
        !p && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return E && i !== void 0 && (P.value = fs(l, this.options, i)), k && k(P.value), E && this.finish(), P
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? wt(t.calculatedDuration) : 0
    }
    get time() {
        return wt(this.currentTime)
    }
    set time(t) {
        t = xt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = wt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = jw,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const Nw = new Set(["opacity", "clipPath", "filter", "transform"]),
    Mw = 10,
    Rw = (e, t) => {
        let n = "";
        const r = Math.max(Math.round(t / Mw), 2);
        for (let i = 0; i < r; i++) n += e(lr(0, r - 1, i)) + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };

function Lu(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Aw = {
    linearEasing: void 0
};

function Lw(e, t) {
    const n = Lu(e);
    return () => {
        var r;
        return (r = Aw[t]) !== null && r !== void 0 ? r : n()
    }
}
const Fo = Lw(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function Wm(e) {
    return !!(typeof e == "function" && Fo() || !e || typeof e == "string" && (e in cl || Fo()) || Mu(e) || Array.isArray(e) && e.every(Wm))
}
const Nr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    cl = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Nr([0, .65, .55, 1]),
        circOut: Nr([.55, 0, 1, .45]),
        backIn: Nr([.31, .01, .66, -.59]),
        backOut: Nr([.33, 1.53, .69, .99])
    };

function Hm(e, t) {
    if (e) return typeof e == "function" && Fo() ? Rw(e, t) : Mu(e) ? Nr(e) : Array.isArray(e) ? e.map(n => Hm(n, t) || cl.easeOut) : cl[e]
}

function bw(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Hm(a, i);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function Ld(e, t) {
    e.timeline = t, e.onfinish = null
}
const Vw = Lu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    zo = 10,
    Dw = 2e4;

function Ow(e) {
    return Nu(e.type) || e.type === "spring" || !Wm(e.ease)
}

function _w(e, t) {
    const n = new Au({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < Dw;) r = n.sample(o), i.push(r.value), o += zo;
    return {
        times: void 0,
        keyframes: i,
        duration: o - zo,
        ease: "linear"
    }
}
const Km = {
    anticipate: ym,
    backInOut: vm,
    circInOut: wm
};

function Iw(e) {
    return e in Km
}
class bd extends _m {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new Om(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
        if (typeof s == "string" && Fo() && Iw(s) && (s = Km[s]), Ow(this.options)) {
            const {
                onComplete: h,
                onUpdate: y,
                motionValue: v,
                element: x,
                ...k
            } = this.options, m = _w(t, k);
            t = m.keyframes, t.length === 1 && (t[1] = t[0]), i = m.duration, o = m.times, s = m.ease, a = "keyframes"
        }
        const f = bw(l.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return f.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Ld(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
            const {
                onComplete: h
            } = this.options;
            l.set(fs(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: f,
            duration: i,
            times: o,
            type: a,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return wt(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return wt(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = xt(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return we;
            const {
                animation: r
            } = n;
            Ld(r, t)
        }
        return we
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: f,
                element: h,
                ...y
            } = this.options, v = new Au({
                ...y,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0
            }), x = xt(this.time);
            u.setWithVelocity(v.sample(x - zo).value, v.sample(x).value, zo)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: s,
            type: a
        } = t;
        return Vw() && r && Nw.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia"
    }
}
const Fw = Lu(() => window.ScrollTimeline !== void 0);
class zw {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => Fw() && i.attachTimeline ? i.attachTimeline(t) : n(i));
        return () => {
            r.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function Bw({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const bu = (e, t, n, r = {}, i, o) => s => {
        const a = xu(r, e) || {},
            l = a.delay || r.delay || 0;
        let {
            elapsed: u = 0
        } = r;
        u = u - xt(l);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: h => {
                t.set(h), a.onUpdate && a.onUpdate(h)
            },
            onComplete: () => {
                s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        Bw(a) || (c = {
            ...c,
            ...ox(e, c)
        }), c.duration && (c.duration = xt(c.duration)), c.repeatDelay && (c.repeatDelay = xt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let f = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
            const h = fs(c.keyframes, a);
            if (h !== void 0) return H.update(() => {
                c.onUpdate(h), c.onComplete()
            }), new zw([])
        }
        return !o && bd.supports(c) ? new bd(c) : new Au(c)
    },
    Uw = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    $w = e => nl(e) ? e[e.length - 1] || 0 : e;

function Vu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Du(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Ou {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Vu(this.subscriptions, t), () => Du(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Vd = 30,
    Ww = e => !isNaN(parseFloat(e));
class Hw {
    constructor(t, n = {}) {
        this.version = "11.11.17", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = ft.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = ft.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Ww(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Ou);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), H.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Vd) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Vd);
        return Im(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function hi(e, t) {
    return new Hw(e, t)
}

function Kw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hi(n))
}

function Gw(e, t) {
    const n = ds(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = $w(o[s]);
        Kw(e, s, a)
    }
}
const _u = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Yw = "framerAppearId",
    Gm = "data-" + _u(Yw);

function Ym(e) {
    return e.props[Gm]
}
const xe = e => !!(e && e.getVelocity);

function Qw(e) {
    return !!(xe(e) && e.add)
}

function dl(e, t) {
    const n = e.getValue("willChange");
    if (Qw(n)) return n.add(t)
}

function Xw({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function Qm(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const h = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null),
            y = l[f];
        if (y === void 0 || c && Xw(c, f)) continue;
        const v = {
            delay: n,
            ...xu(s || {}, f)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const m = Ym(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, f, H);
                p !== null && (v.startTime = p, x = !0)
            }
        }
        dl(e, f), h.start(bu(f, h, y, e.shouldReduceMotion && En.has(f) ? {
            type: !1
        } : v, e, x));
        const k = h.animation;
        k && u.push(k)
    }
    return a && Promise.all(u).then(() => {
        H.update(() => {
            a && Gw(e, a)
        })
    }), u
}

function fl(e, t, n = {}) {
    var r;
    const i = ds(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(Qm(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: f,
                staggerDirection: h
            } = o;
            return qw(e, t, c + u, f, h, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
        return u().then(() => c())
    } else return Promise.all([s(), a(n.delay)])
}

function qw(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(Zw).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(fl(u, t, {
            ...o,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function Zw(e, t) {
    return e.sortNodePosition(t)
}

function Jw(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => fl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = fl(e, t, n);
    else {
        const i = typeof t == "function" ? ds(e, t, n.custom) : t;
        r = Promise.all(Qm(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const e2 = yu.length;

function Xm(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Xm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < e2; n++) {
        const r = yu[n],
            i = e.props[r];
        (ci(i) || i === !1) && (t[r] = i)
    }
    return t
}
const t2 = [...vu].reverse(),
    n2 = vu.length;

function r2(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Jw(e, n, r)))
}

function i2(e) {
    let t = r2(e),
        n = Dd(),
        r = !0;
    const i = l => (u, c) => {
        var f;
        const h = ds(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (h) {
            const {
                transition: y,
                transitionEnd: v,
                ...x
            } = h;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        const {
            props: u
        } = e, c = Xm(e.parent) || {}, f = [], h = new Set;
        let y = {},
            v = 1 / 0;
        for (let k = 0; k < n2; k++) {
            const m = t2[k],
                p = n[m],
                g = u[m] !== void 0 ? u[m] : c[m],
                S = ci(g),
                P = m === l ? p.isActive : null;
            P === !1 && (v = k);
            let C = g === c[m] && g !== u[m] && S;
            if (C && r && e.manuallyAnimateOnMount && (C = !1), p.protectedKeys = {
                    ...y
                }, !p.isActive && P === null || !g && !p.prevProp || cs(g) || typeof g == "boolean") continue;
            const E = o2(p.prevProp, g);
            let T = E || m === l && p.isActive && !C && S || k > v && S,
                V = !1;
            const M = Array.isArray(g) ? g : [g];
            let G = M.reduce(i(m), {});
            P === !1 && (G = {});
            const {
                prevResolvedValues: Ae = {}
            } = p, Be = {
                ...Ae,
                ...G
            }, Xe = W => {
                T = !0, h.has(W) && (V = !0, h.delete(W)), p.needsAnimating[W] = !0;
                const N = e.getValue(W);
                N && (N.liveStyle = !1)
            };
            for (const W in Be) {
                const N = G[W],
                    b = Ae[W];
                if (y.hasOwnProperty(W)) continue;
                let O = !1;
                nl(N) && nl(b) ? O = !dm(N, b) : O = N !== b, O ? N != null ? Xe(W) : h.add(W) : N !== void 0 && h.has(W) ? Xe(W) : p.protectedKeys[W] = !0
            }
            p.prevProp = g, p.prevResolvedValues = G, p.isActive && (y = {
                ...y,
                ...G
            }), r && e.blockInitialAnimation && (T = !1), T && (!(C && E) || V) && f.push(...M.map(W => ({
                animation: W,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const k = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m),
                    g = e.getValue(m);
                g && (g.liveStyle = !0), k[m] = p ?? null
            }), f.push({
                animation: k
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u)
        }), n[l].isActive = u;
        const f = s(l);
        for (const h in n) n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Dd(), r = !0
        }
    }
}

function o2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !dm(t, e) : !1
}

function rn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Dd() {
    return {
        animate: rn(!0),
        whileInView: rn(),
        whileHover: rn(),
        whileTap: rn(),
        whileDrag: rn(),
        whileFocus: rn(),
        exit: rn()
    }
}
class tn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class s2 extends tn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = i2(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        cs(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let a2 = 0;
class l2 extends tn {
    constructor() {
        super(...arguments), this.id = a2++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const u2 = {
        animation: {
            Feature: s2
        },
        exit: {
            Feature: l2
        }
    },
    qm = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function hs(e, t = "page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const c2 = e => t => qm(t) && e(t, hs(t));

function vt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function kt(e, t, n, r) {
    return vt(e, t, c2(n), r)
}
const Od = (e, t) => Math.abs(e - t);

function d2(e, t) {
    const n = Od(e.x, t.x),
        r = Od(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Zm {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = qs(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    y = d2(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !y) return;
                const {
                    point: v
                } = f, {
                    timestamp: x
                } = fe;
                this.history.push({
                    ...v,
                    timestamp: x
                });
                const {
                    onStart: k,
                    onMove: m
                } = this.handlers;
                h || (k && k(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, h) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Xs(h, this.transformPagePoint), H.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, h) => {
                this.end();
                const {
                    onEnd: y,
                    onSessionEnd: v,
                    resumeAnimation: x
                } = this.handlers;
                if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const k = qs(f.type === "pointercancel" ? this.lastMoveEventInfo : Xs(h, this.transformPagePoint), this.history);
                this.startEvent && y && y(f, k), v && v(f, k)
            }, !qm(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const s = hs(t),
            a = Xs(s, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = fe;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, qs(a, this.history)), this.removeListeners = St(kt(this.contextWindow, "pointermove", this.handlePointerMove), kt(this.contextWindow, "pointerup", this.handlePointerUp), kt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Qt(this.updatePoint)
    }
}

function Xs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function _d(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function qs({
    point: e
}, t) {
    return {
        point: e,
        delta: _d(e, Jm(t)),
        offset: _d(e, f2(t)),
        velocity: h2(t, .1)
    }
}

function f2(e) {
    return e[0]
}

function Jm(e) {
    return e[e.length - 1]
}

function h2(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = Jm(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > xt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = wt(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function e0(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Id = e0("dragHorizontal"),
    Fd = e0("dragVertical");

function t0(e) {
    let t = !1;
    if (e === "y") t = Fd();
    else if (e === "x") t = Id();
    else {
        const n = Id(),
            r = Fd();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function n0() {
    const e = t0(!0);
    return e ? (e(), !1) : !0
}

function $n(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const r0 = 1e-4,
    p2 = 1 - r0,
    m2 = 1 + r0,
    i0 = .01,
    g2 = 0 - i0,
    v2 = 0 + i0;

function Ie(e) {
    return e.max - e.min
}

function y2(e, t, n) {
    return Math.abs(e - t) <= n
}

function zd(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Z(t.min, t.max, e.origin), e.scale = Ie(n) / Ie(t), e.translate = Z(n.min, n.max, e.origin) - e.originPoint, (e.scale >= p2 && e.scale <= m2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= g2 && e.translate <= v2 || isNaN(e.translate)) && (e.translate = 0)
}

function Ur(e, t, n, r) {
    zd(e.x, t.x, n.x, r ? r.originX : void 0), zd(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Bd(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Ie(t)
}

function x2(e, t, n) {
    Bd(e.x, t.x, n.x), Bd(e.y, t.y, n.y)
}

function Ud(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Ie(t)
}

function $r(e, t, n) {
    Ud(e.x, t.x, n.x), Ud(e.y, t.y, n.y)
}

function w2(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? Z(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)), e
}

function $d(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function S2(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: $d(e.x, n, i),
        y: $d(e.y, t, r)
    }
}

function Wd(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function k2(e, t) {
    return {
        x: Wd(e.x, t.x),
        y: Wd(e.y, t.y)
    }
}

function P2(e, t) {
    let n = .5;
    const r = Ie(e),
        i = Ie(t);
    return i > r ? n = lr(t.min, t.max - r, e.min) : r > i && (n = lr(e.min, e.max - i, t.min)), Xt(0, 1, n)
}

function C2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const hl = .35;

function j2(e = hl) {
    return e === !1 ? e = 0 : e === !0 && (e = hl), {
        x: Hd(e, "left", "right"),
        y: Hd(e, "top", "bottom")
    }
}

function Hd(e, t, n) {
    return {
        min: Kd(e, t),
        max: Kd(e, n)
    }
}

function Kd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Gd = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Wn = () => ({
        x: Gd(),
        y: Gd()
    }),
    Yd = () => ({
        min: 0,
        max: 0
    }),
    ne = () => ({
        x: Yd(),
        y: Yd()
    });

function $e(e) {
    return [e("x"), e("y")]
}

function o0({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function T2({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function E2(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Zs(e) {
    return e === void 0 || e === 1
}

function pl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Zs(e) || !Zs(t) || !Zs(n)
}

function an(e) {
    return pl(e) || s0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function s0(e) {
    return Qd(e.x) || Qd(e.y)
}

function Qd(e) {
    return e && e !== "0%"
}

function Bo(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function Xd(e, t, n, r, i) {
    return i !== void 0 && (e = Bo(e, i, r)), Bo(e, n, r) + t
}

function ml(e, t = 0, n = 1, r, i) {
    e.min = Xd(e.min, t, n, r, i), e.max = Xd(e.max, t, n, r, i)
}

function a0(e, {
    x: t,
    y: n
}) {
    ml(e.x, t.translate, t.scale, t.originPoint), ml(e.y, n.translate, n.scale, n.originPoint)
}
const qd = .999999999999,
    Zd = 1.0000000000001;

function N2(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Kn(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, a0(e, s)), r && an(o.latestValues) && Kn(e, o.latestValues))
    }
    t.x < Zd && t.x > qd && (t.x = 1), t.y < Zd && t.y > qd && (t.y = 1)
}

function Hn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Jd(e, t, n, r, i = .5) {
    const o = Z(e.min, e.max, i);
    ml(e, t, n, o, r)
}

function Kn(e, t) {
    Jd(e.x, t.x, t.scaleX, t.scale, t.originX), Jd(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function l0(e, t) {
    return o0(E2(e.getBoundingClientRect(), t))
}

function M2(e, t, n) {
    const r = l0(e, n),
        {
            scroll: i
        } = t;
    return i && (Hn(r.x, i.offset.x), Hn(r.y, i.offset.y)), r
}
const u0 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    R2 = new WeakMap;
class A2 {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ne(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(hs(c, "page").point)
            },
            o = (c, f) => {
                const {
                    drag: h,
                    dragPropagation: y,
                    onDragStart: v
                } = this.getProps();
                if (h && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = t0(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $e(k => {
                    let m = this.getAxisMotionValue(k).get() || 0;
                    if (dt.test(m)) {
                        const {
                            projection: p
                        } = this.visualElement;
                        if (p && p.layout) {
                            const g = p.layout.layoutBox[k];
                            g && (m = Ie(g) * (parseFloat(m) / 100))
                        }
                    }
                    this.originPoint[k] = m
                }), v && H.postRender(() => v(c, f)), dl(this.visualElement, "transform");
                const {
                    animationState: x
                } = this.visualElement;
                x && x.setActive("whileDrag", !0)
            },
            s = (c, f) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: y,
                    onDirectionLock: v,
                    onDrag: x
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: k
                } = f;
                if (y && this.currentDirection === null) {
                    this.currentDirection = L2(k), this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, k), this.updateAxis("y", f.point, k), this.visualElement.render(), x && x(c, f)
            },
            a = (c, f) => this.stop(c, f),
            l = () => $e(c => {
                var f;
                return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new Zm(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: u0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && H.postRender(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Hi(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = w2(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && $n(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = S2(i.layoutBox, n) : this.constraints = !1, this.elastic = j2(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $e(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = C2(i.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !$n(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = M2(r, i.root, this.visualElement.getTransformPagePoint());
        let s = k2(i.layout.layoutBox, o);
        if (n) {
            const a = n(T2(s));
            this.hasMutatedConstraints = !!a, a && (s = o0(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = $e(c => {
            if (!Hi(c, n, this.currentDirection)) return;
            let f = l && l[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                y = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: h,
                    bounceDamping: y,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(c, v)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return dl(this.visualElement, t), r.start(bu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        $e(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        $e(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        $e(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Hi(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(t[n] - Z(s, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!$n(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        $e(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = P2({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), $e(s => {
            if (!Hi(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(Z(l, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        R2.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = kt(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                $n(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), H.read(r);
        const s = vt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && ($e(c => {
                    const f = this.getAxisMotionValue(c);
                    f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = hl,
                dragMomentum: a = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function Hi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function L2(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class b2 extends tn {
    constructor(t) {
        super(t), this.removeGroupControls = we, this.removeListeners = we, this.controls = new A2(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || we
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const ef = e => (t, n) => {
    e && H.postRender(() => e(t, n))
};
class V2 extends tn {
    constructor() {
        super(...arguments), this.removePointerDownListener = we
    }
    onPointerDown(t) {
        this.session = new Zm(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: u0(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: ef(t),
            onStart: ef(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && H.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = kt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ps = w.createContext(null);

function D2() {
    const e = w.useContext(ps);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = w.useId();
    w.useEffect(() => r(i), []);
    const o = w.useCallback(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}
const Iu = w.createContext({}),
    c0 = w.createContext({}),
    lo = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function tf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Pr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (D.test(e)) e = parseFloat(e);
                else return e;
            const n = tf(e, t.target.x),
                r = tf(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    O2 = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = qt.parse(e);
            if (i.length > 5) return r;
            const o = qt.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + s] /= a, i[1 + s] /= l;
            const u = Z(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    },
    Uo = {};

function _2(e) {
    Object.assign(Uo, e)
}
const {
    schedule: Fu,
    cancel: YP
} = fm(queueMicrotask, !1);
class I2 extends w.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        _2(F2), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), lo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || H.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Fu.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function d0(e) {
    const [t, n] = D2(), r = w.useContext(Iu);
    return d.jsx(I2, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(c0),
        isPresent: t,
        safeToRemove: n
    })
}
const F2 = {
        borderRadius: {
            ...Pr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Pr,
        borderTopRightRadius: Pr,
        borderBottomLeftRadius: Pr,
        borderBottomRightRadius: Pr,
        boxShadow: O2
    },
    f0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    z2 = f0.length,
    nf = e => typeof e == "string" ? parseFloat(e) : e,
    rf = e => typeof e == "number" || D.test(e);

function B2(e, t, n, r, i, o) {
    i ? (e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, U2(r)), e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, $2(r))) : o && (e.opacity = Z(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < z2; s++) {
        const a = `border${f0[s]}Radius`;
        let l = of(t, a),
            u = of(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || rf(l) === rf(u) ? (e[a] = Math.max(Z(nf(l), nf(u), r), 0), (dt.test(u) || dt.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r))
}

function of(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const U2 = h0(0, .5, xm),
    $2 = h0(.5, .95, we);

function h0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(lr(e, t, r))
}

function sf(e, t) {
    e.min = t.min, e.max = t.max
}

function Ue(e, t) {
    sf(e.x, t.x), sf(e.y, t.y)
}

function af(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function lf(e, t, n, r, i) {
    return e -= t, e = Bo(e, 1 / n, r), i !== void 0 && (e = Bo(e, 1 / i, r)), e
}

function W2(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (dt.test(t) && (t = parseFloat(t), t = Z(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = Z(o.min, o.max, r);
    e === o && (a -= t), e.min = lf(e.min, t, n, a, i), e.max = lf(e.max, t, n, a, i)
}

function uf(e, t, [n, r, i], o, s) {
    W2(e, t[n], t[r], t[i], t.scale, o, s)
}
const H2 = ["x", "scaleX", "originX"],
    K2 = ["y", "scaleY", "originY"];

function cf(e, t, n, r) {
    uf(e.x, t, H2, n ? n.x : void 0, r ? r.x : void 0), uf(e.y, t, K2, n ? n.y : void 0, r ? r.y : void 0)
}

function df(e) {
    return e.translate === 0 && e.scale === 1
}

function p0(e) {
    return df(e.x) && df(e.y)
}

function ff(e, t) {
    return e.min === t.min && e.max === t.max
}

function G2(e, t) {
    return ff(e.x, t.x) && ff(e.y, t.y)
}

function hf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function m0(e, t) {
    return hf(e.x, t.x) && hf(e.y, t.y)
}

function pf(e) {
    return Ie(e.x) / Ie(e.y)
}

function mf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Y2 {
    constructor() {
        this.members = []
    }
    add(t) {
        Vu(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Du(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Q2(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: f,
            rotateY: h,
            skewX: y,
            skewY: v
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), y && (r += `skewX(${y}deg) `), v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const X2 = (e, t) => e.depth - t.depth;
class q2 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Vu(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Du(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(X2), this.isDirty = !1, this.children.forEach(t)
    }
}

function uo(e) {
    const t = xe(e) ? e.get() : e;
    return Uw(t) ? t.toValue() : t
}

function Z2(e, t) {
    const n = ft.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (Qt(r), e(o - t))
        };
    return H.read(r, !0), () => Qt(r)
}

function J2(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function eS(e, t, n) {
    const r = xe(e) ? e : hi(e);
    return r.start(bu("", r, t, n)), r.animation
}
const ln = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Mr = typeof window < "u" && window.MotionDebug !== void 0,
    Js = ["", "X", "Y", "Z"],
    tS = {
        visibility: "hidden"
    },
    gf = 1e3;
let nS = 0;

function ea(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function g0(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = Ym(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", H, !(i || o))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && g0(r)
}

function v0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = nS++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Mr && (ln.totalNodes = ln.resolvedTargetDeltas = ln.recalculatedProjection = 0), this.nodes.forEach(oS), this.nodes.forEach(cS), this.nodes.forEach(dS), this.nodes.forEach(sS), Mr && window.MotionDebug.record(ln)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new q2)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ou), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = J2(s), this.instance = s;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = Z2(h, 250), lo.hasAnimatedSinceResize && (lo.hasAnimatedSinceResize = !1, this.nodes.forEach(yf))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: y,
                layout: v
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || gS,
                    {
                        onLayoutAnimationStart: k,
                        onLayoutAnimationComplete: m
                    } = c.getProps(),
                    p = !this.targetLayout || !m0(this.targetLayout, v) || y,
                    g = !h && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
                    const S = {
                        ...xu(x, "layout"),
                        onPlay: k,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S)
                } else h || yf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Qt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(fS), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && g0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vf);
                return
            }
            this.isUpdating || this.nodes.forEach(lS), this.isUpdating = !1, this.nodes.forEach(uS), this.nodes.forEach(rS), this.nodes.forEach(iS), this.clearAllSnapshots();
            const a = ft.now();
            fe.delta = Xt(0, 1e3 / 60, a - fe.timestamp), fe.timestamp = a, fe.isProcessing = !0, Hs.update.process(fe), Hs.preRender.process(fe), Hs.render.process(fe), fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Fu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(aS), this.sharedNodes.forEach(hS)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, H.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            H.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !p0(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || an(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), vS(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {
                visualElement: a
            } = this.options;
            if (!a) return ne();
            const l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(yS))) {
                const {
                    scroll: c
                } = this.root;
                c && (Hn(l.x, c.offset.x), Hn(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(s) {
            var a;
            const l = ne();
            if (Ue(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: f,
                        options: h
                    } = c;
                c !== this.root && f && h.layoutScroll && (f.wasRoot && Ue(l, s), Hn(l.x, f.offset.x), Hn(l.y, f.offset.y))
            }
            return l
        }
        applyTransform(s, a = !1) {
            const l = ne();
            Ue(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Kn(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), an(c.latestValues) && Kn(l, c.latestValues)
            }
            return an(this.latestValues) && Kn(l, this.latestValues), l
        }
        removeTransform(s) {
            const a = ne();
            Ue(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !an(u.latestValues)) continue;
                pl(u.latestValues) && u.updateSnapshot();
                const c = ne(),
                    f = u.measurePageBox();
                Ue(c, f), cf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return an(this.latestValues) && cf(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: f,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = fe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), $r(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ne(), this.targetWithTransforms = ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), x2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), a0(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), $r(this.relativeTargetOrigin, this.target, y.target), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Mr && ln.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || pl(this.parent.latestValues) || s0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === fe.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
            Ue(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                y = this.treeScale.y;
            N2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ne());
            const {
                target: v
            } = a;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (af(this.prevProjectionDelta.x, this.projectionDelta.x), af(this.prevProjectionDelta.y, this.projectionDelta.y)), Ur(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== y || !mf(this.projectionDelta.x, this.prevProjectionDelta.x) || !mf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Mr && ln.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Wn(), this.projectionDelta = Wn(), this.projectionDeltaWithTransform = Wn()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = {
                    ...this.latestValues
                },
                f = Wn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = ne(),
                y = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                x = y !== v,
                k = this.getStack(),
                m = !k || k.members.length <= 1,
                p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(mS));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const P = S / 1e3;
                xf(f.x, s.x, P), xf(f.y, s.y, P), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && ($r(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), pS(this.relativeTarget, this.relativeTargetOrigin, h, P), g && G2(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = ne()), Ue(g, this.relativeTarget)), x && (this.animationValues = c, B2(c, u, this.latestValues, P, p, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = H.update(() => {
                lo.hasAnimatedSinceResize = !0, this.currentAnimation = eS(0, gf, {
                    ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gf), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && y0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ne();
                    const f = Ie(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + f;
                    const h = Ie(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + h
                }
                Ue(a, l), Kn(a, c), Ur(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Y2), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && ea("z", s, u, this.animationValues);
            for (let c = 0; c < Js.length; c++) ea(`rotate${Js[c]}`, s, u, this.animationValues), ea(`skew${Js[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tS;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = uo(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, x.pointerEvents = uo(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !an(this.latestValues) && (x.transform = c ? c({}, "") : "none", this.hasProjected = !1), x
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), u.transform = Q2(this.projectionDeltaWithTransform, this.treeScale, h), c && (u.transform = c(h, u.transform));
            const {
                x: y,
                y: v
            } = this.projectionDelta;
            u.transformOrigin = `${y.origin*100}% ${v.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const x in Uo) {
                if (h[x] === void 0) continue;
                const {
                    correct: k,
                    applyTo: m
                } = Uo[x], p = u.transform === "none" ? h[x] : k(h[x], f);
                if (m) {
                    const g = m.length;
                    for (let S = 0; S < g; S++) u[m[S]] = p
                } else u[x] = p
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? uo(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(vf), this.root.sharedNodes.clear()
        }
    }
}

function rS(e) {
    e.updateLayout()
}

function iS(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? $e(f => {
            const h = s ? n.measuredBox[f] : n.layoutBox[f],
                y = Ie(h);
            h.min = r[f].min, h.max = h.min + y
        }) : y0(o, n.layoutBox, r) && $e(f => {
            const h = s ? n.measuredBox[f] : n.layoutBox[f],
                y = Ie(r[f]);
            h.max = h.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        });
        const a = Wn();
        Ur(a, r, n.layoutBox);
        const l = Wn();
        s ? Ur(l, e.applyTransform(i, !0), n.measuredBox) : Ur(l, r, n.layoutBox);
        const u = !p0(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: y
                } = f;
                if (h && y) {
                    const v = ne();
                    $r(v, n.layoutBox, h.layoutBox);
                    const x = ne();
                    $r(x, r, y.layoutBox), m0(v, x) || (c = !0), f.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function oS(e) {
    Mr && ln.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function sS(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function aS(e) {
    e.clearSnapshot()
}

function vf(e) {
    e.clearMeasurements()
}

function lS(e) {
    e.isLayoutDirty = !1
}

function uS(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function yf(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function cS(e) {
    e.resolveTargetDelta()
}

function dS(e) {
    e.calcProjection()
}

function fS(e) {
    e.resetSkewAndRotation()
}

function hS(e) {
    e.removeLeadSnapshot()
}

function xf(e, t, n) {
    e.translate = Z(t.translate, 0, n), e.scale = Z(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function wf(e, t, n, r) {
    e.min = Z(t.min, n.min, r), e.max = Z(t.max, n.max, r)
}

function pS(e, t, n, r) {
    wf(e.x, t.x, n.x, r), wf(e.y, t.y, n.y, r)
}

function mS(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const gS = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Sf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    kf = Sf("applewebkit/") && !Sf("chrome/") ? Math.round : we;

function Pf(e) {
    e.min = kf(e.min), e.max = kf(e.max)
}

function vS(e) {
    Pf(e.x), Pf(e.y)
}

function y0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !y2(pf(t), pf(n), .2)
}

function yS(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const xS = v0({
        attachResizeListener: (e, t) => vt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    ta = {
        current: void 0
    },
    x0 = v0({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!ta.current) {
                const e = new xS({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), ta.current = e
            }
            return ta.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    wS = {
        pan: {
            Feature: V2
        },
        drag: {
            Feature: b2,
            ProjectionNode: x0,
            MeasureLayout: d0
        }
    };

function Cf(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        i = (o, s) => {
            if (o.pointerType === "touch" || n0()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
            const l = a[r];
            l && H.postRender(() => l(o, s))
        };
    return kt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class SS extends tn {
    mount() {
        this.unmount = St(Cf(this.node, !0), Cf(this.node, !1))
    }
    unmount() {}
}
class kS extends tn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = St(vt(this.node.current, "focus", () => this.onFocus()), vt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const w0 = (e, t) => t ? e === t ? !0 : w0(e, t.parentElement) : !1;

function na(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, hs(n))
}
class PS extends tn {
    constructor() {
        super(...arguments), this.removeStartListeners = we, this.removeEndListeners = we, this.removeAccessibleListeners = we, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                o = kt(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: f
                    } = this.node.getProps(), h = !f && !w0(this.node.current, a.target) ? c : u;
                    h && H.update(() => h(a, l))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = kt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = St(o, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || na("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && H.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = vt(this.node.current, "keyup", s), na("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = vt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && na("cancel", (o, s) => this.cancelPress(o, s))
                },
                i = vt(this.node.current, "blur", r);
            this.removeAccessibleListeners = St(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && H.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !n0()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && H.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = kt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = vt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = St(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const gl = new WeakMap,
    ra = new WeakMap,
    CS = e => {
        const t = gl.get(e.target);
        t && t(e)
    },
    jS = e => {
        e.forEach(CS)
    };

function TS({
    root: e,
    ...t
}) {
    const n = e || document;
    ra.has(n) || ra.set(n, {});
    const r = ra.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(jS, {
        root: e,
        ...t
    })), r[i]
}

function ES(e, t, n) {
    const r = TS(t);
    return gl.set(e, n), r.observe(e), () => {
        gl.delete(e), r.unobserve(e)
    }
}
const NS = {
    some: 0,
    all: 1
};
class MS extends tn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : NS[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: f
            } = this.node.getProps(), h = u ? c : f;
            h && h(l)
        };
        return ES(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(RS(t, n)) && this.startObserver()
    }
    unmount() {}
}

function RS({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const AS = {
        inView: {
            Feature: MS
        },
        tap: {
            Feature: PS
        },
        focus: {
            Feature: kS
        },
        hover: {
            Feature: SS
        }
    },
    LS = {
        layout: {
            ProjectionNode: x0,
            MeasureLayout: d0
        }
    },
    zu = w.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    ms = w.createContext({}),
    Bu = typeof window < "u",
    S0 = Bu ? w.useLayoutEffect : w.useEffect,
    k0 = w.createContext({
        strict: !1
    });

function bS(e, t, n, r, i) {
    var o, s;
    const {
        visualElement: a
    } = w.useContext(ms), l = w.useContext(k0), u = w.useContext(ps), c = w.useContext(zu).reducedMotion, f = w.useRef();
    r = r || l.renderer, !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const h = f.current,
        y = w.useContext(c0);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && VS(f.current, n, i, y);
    const v = w.useRef(!1);
    w.useInsertionEffect(() => {
        h && v.current && h.update(n, u)
    });
    const x = n[Gm],
        k = w.useRef(!!x && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, x)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, x)));
    return S0(() => {
        h && (v.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Fu.render(h.render), k.current && h.animationState && h.animationState.animateChanges())
    }), w.useEffect(() => {
        h && (!k.current && h.animationState && h.animationState.animateChanges(), k.current && (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, x)
        }), k.current = !1))
    }), h
}

function VS(e, t, n, r) {
    const {
        layoutId: i,
        layout: o,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : P0(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && $n(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}

function P0(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : P0(e.parent)
}

function DS(e, t, n) {
    return w.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : $n(n) && (n.current = r))
    }, [t])
}

function gs(e) {
    return cs(e.animate) || yu.some(t => ci(e[t]))
}

function C0(e) {
    return !!(gs(e) || e.variants)
}

function OS(e, t) {
    if (gs(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || ci(n) ? n : void 0,
            animate: ci(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function _S(e) {
    const {
        initial: t,
        animate: n
    } = OS(e, w.useContext(ms));
    return w.useMemo(() => ({
        initial: t,
        animate: n
    }), [jf(t), jf(n)])
}

function jf(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Tf = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ur = {};
for (const e in Tf) ur[e] = {
    isEnabled: t => Tf[e].some(n => !!t[n])
};

function IS(e) {
    for (const t in e) ur[t] = {
        ...ur[t],
        ...e[t]
    }
}
const FS = Symbol.for("motionComponentSymbol");

function zS({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && IS(e);

    function o(a, l) {
        let u;
        const c = {
                ...w.useContext(zu),
                ...a,
                layoutId: BS(a)
            },
            {
                isStatic: f
            } = c,
            h = _S(a),
            y = r(a, f);
        if (!f && Bu) {
            US();
            const v = $S(c);
            u = v.MeasureLayout, h.visualElement = bS(i, y, c, t, v.ProjectionNode)
        }
        return d.jsxs(ms.Provider, {
            value: h,
            children: [u && h.visualElement ? d.jsx(u, {
                visualElement: h.visualElement,
                ...c
            }) : null, n(i, a, DS(y, h.visualElement, l), y, f, h.visualElement)]
        })
    }
    const s = w.forwardRef(o);
    return s[FS] = i, s
}

function BS({
    layoutId: e
}) {
    const t = w.useContext(Iu).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function US(e, t) {
    w.useContext(k0).strict
}

function $S(e) {
    const {
        drag: t,
        layout: n
    } = ur;
    if (!t && !n) return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const WS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Uu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(WS.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function j0(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const T0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function E0(e, t, n, r) {
    j0(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(T0.has(i) ? i : _u(i), t.attrs[i])
}

function N0(e, {
    layout: t,
    layoutId: n
}) {
    return En.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Uo[e] || e === "opacity")
}

function $u(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const s in i)(xe(i[s]) || t.style && xe(t.style[s]) || N0(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}

function M0(e, t, n) {
    const r = $u(e, t, n);
    for (const i in e)
        if (xe(e[i]) || xe(t[i])) {
            const o = Si.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        } return r
}

function Wu(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current
}

function HS({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, o) {
    const s = {
        latestValues: KS(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)), s
}
const R0 = e => (t, n) => {
    const r = w.useContext(ms),
        i = w.useContext(ps),
        o = () => HS(e, t, r, i);
    return n ? o() : Wu(o)
};

function KS(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const h in o) i[h] = uo(o[h]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = gs(e),
        u = C0(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    if (f && typeof f != "boolean" && !cs(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let y = 0; y < h.length; y++) {
            const v = gu(e, h[y]);
            if (v) {
                const {
                    transitionEnd: x,
                    transition: k,
                    ...m
                } = v;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const S = c ? g.length - 1 : 0;
                        g = g[S]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in x) i[p] = x[p]
            }
        }
    }
    return i
}
const Hu = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    A0 = () => ({
        ...Hu(),
        attrs: {}
    }),
    L0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    GS = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    YS = Si.length;

function QS(e, t, n) {
    let r = "",
        i = !0;
    for (let o = 0; o < YS; o++) {
        const s = Si[o],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = L0(a, Tu[s]);
            if (!l) {
                i = !1;
                const c = GS[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Ku(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: o
    } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (En.has(l)) {
            s = !0;
            continue
        } else if (Cm(l)) {
            i[l] = u;
            continue
        } else {
            const c = L0(u, Tu[l]);
            l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = QS(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}

function Ef(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}

function XS(e, t, n) {
    const r = Ef(t, e.x, e.width),
        i = Ef(n, e.y, e.height);
    return `${r} ${i}`
}
const qS = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    ZS = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function JS(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? qS : ZS;
    e[o.offset] = D.transform(-r);
    const s = D.transform(t),
        a = D.transform(n);
    e[o.array] = `${s} ${a}`
}

function Gu(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, f) {
    if (Ku(e, u, f), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: h,
        style: y,
        dimensions: v
    } = e;
    h.transform && (v && (y.transform = h.transform), delete h.transform), v && (i !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = XS(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && JS(h, s, a, l, !1)
}
const Yu = e => typeof e == "string" && e.toLowerCase() === "svg",
    ek = {
        useVisualState: R0({
            scrapeMotionValuesFromProps: M0,
            createRenderState: A0,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                H.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), H.render(() => {
                    Gu(n, r, Yu(t.tagName), e.transformTemplate), E0(t, n)
                })
            }
        })
    },
    tk = {
        useVisualState: R0({
            scrapeMotionValuesFromProps: $u,
            createRenderState: Hu
        })
    };

function b0(e, t, n) {
    for (const r in t) !xe(t[r]) && !N0(r, n) && (e[r] = t[r])
}

function nk({
    transformTemplate: e
}, t) {
    return w.useMemo(() => {
        const n = Hu();
        return Ku(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function rk(e, t) {
    const n = e.style || {},
        r = {};
    return b0(r, n, e), Object.assign(r, nk(e, t)), r
}

function ik(e, t) {
    const n = {},
        r = rk(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const ok = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function $o(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ok.has(e)
}
let V0 = e => !$o(e);

function sk(e) {
    e && (V0 = t => t.startsWith("on") ? !$o(t) : e(t))
}
try {
    sk(require("@emotion/is-prop-valid").default)
} catch {}

function ak(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (V0(i) || n === !0 && $o(i) || !t && !$o(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function lk(e, t, n, r) {
    const i = w.useMemo(() => {
        const o = A0();
        return Gu(o, t, Yu(r), e.transformTemplate), {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        b0(o, e.style, e), i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}

function uk(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const l = (Uu(n) ? lk : ik)(r, o, s, n),
            u = ak(r, typeof n == "string", e),
            c = n !== w.Fragment ? {
                ...u,
                ...l,
                ref: i
            } : {},
            {
                children: f
            } = r,
            h = w.useMemo(() => xe(f) ? f.get() : f, [f]);
        return w.createElement(n, {
            ...c,
            children: h
        })
    }
}

function ck(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const s = {
            ...Uu(r) ? ek : tk,
            preloadedFeatures: e,
            useRender: uk(i),
            createVisualElement: t,
            Component: r
        };
        return zS(s)
    }
}
const vl = {
        current: null
    },
    D0 = {
        current: !1
    };

function dk() {
    if (D0.current = !0, !!Bu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => vl.current = e.matches;
            e.addListener(t), t()
        } else vl.current = !1
}

function fk(e, t, n) {
    for (const r in t) {
        const i = t[r],
            o = n[r];
        if (xe(i)) e.addValue(r, i);
        else if (xe(o)) e.addValue(r, hi(i, {
            owner: e
        }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, hi(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Nf = new WeakMap,
    hk = [...Em, ve, qt],
    pk = e => hk.find(Tm(e)),
    Mf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class mk {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: s
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Pu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = ft.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, H.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = s;
        this.latestValues = l, this.baseTarget = {
            ...l
        }, this.initialValues = n.initial ? {
            ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = gs(n), this.isVariantNode = C0(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const y = f[h];
            l[h] !== void 0 && xe(y) && y.set(l[h], !1)
        }
    }
    mount(t) {
        this.current = t, Nf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), D0.current || dk(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Nf.delete(this.current), this.projection && this.projection.unmount(), Qt(this.notifyUpdate), Qt(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = En.has(t),
            i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && H.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), o(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in ur) {
            const n = ur[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Mf.length; r++) {
            const i = Mf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = fk(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = hi(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (km(i) || Sm(i)) ? i = parseFloat(i) : !pk(i) && qt.test(n) && (i = Dm(t, n)), this.setBaseTarget(t, xe(i) ? i.get() : i)), xe(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = gu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !xe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Ou), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class O0 extends mk {
    constructor() {
        super(...arguments), this.KeyframeResolver = Om
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function gk(e) {
    return window.getComputedStyle(e)
}
class vk extends O0 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = j0
    }
    readValueFromInstance(t, n) {
        if (En.has(n)) {
            const r = Eu(n);
            return r && r.default || 0
        } else {
            const r = gk(t),
                i = (Cm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return l0(t, n)
    }
    build(t, n, r) {
        Ku(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return $u(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        xe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class yk extends O0 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ne
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (En.has(n)) {
            const r = Eu(n);
            return r && r.default || 0
        }
        return n = T0.has(n) ? n : _u(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return M0(t, n, r)
    }
    build(t, n, r) {
        Gu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        E0(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Yu(t.tagName), super.mount(t)
    }
}
const xk = (e, t) => Uu(e) ? new yk(t) : new vk(t, {
        allowProjection: e !== w.Fragment
    }),
    wk = ck({
        ...u2,
        ...AS,
        ...wS,
        ...LS
    }, xk),
    A = ex(wk);
class Sk extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function kk({
    children: e,
    isPresent: t
}) {
    const n = w.useId(),
        r = w.useRef(null),
        i = w.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: o
        } = w.useContext(zu);
    return w.useInsertionEffect(() => {
        const {
            width: s,
            height: a,
            top: l,
            left: u
        } = i.current;
        if (t || !r.current || !s || !a) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), d.jsx(Sk, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: w.cloneElement(e, {
            ref: r
        })
    })
}
const Pk = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: o,
    mode: s
}) => {
    const a = Wu(Ck),
        l = w.useId(),
        u = w.useCallback(f => {
            a.set(f, !0);
            for (const h of a.values())
                if (!h) return;
            r && r()
        }, [a, r]),
        c = w.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: u,
            register: f => (a.set(f, !1), () => a.delete(f))
        }), o ? [Math.random(), u] : [n, u]);
    return w.useMemo(() => {
        a.forEach((f, h) => a.set(h, !1))
    }, [n]), w.useEffect(() => {
        !n && !a.size && r && r()
    }, [n]), s === "popLayout" && (e = d.jsx(kk, {
        isPresent: n,
        children: e
    })), d.jsx(ps.Provider, {
        value: c,
        children: e
    })
};

function Ck() {
    return new Map
}
const Ki = e => e.key || "";

function Rf(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }), t
}
const _0 = ({
        children: e,
        exitBeforeEnter: t,
        custom: n,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: o = !0,
        mode: s = "sync"
    }) => {
        const a = w.useMemo(() => Rf(e), [e]),
            l = a.map(Ki),
            u = w.useRef(!0),
            c = w.useRef(a),
            f = Wu(() => new Map),
            [h, y] = w.useState(a),
            [v, x] = w.useState(a);
        S0(() => {
            u.current = !1, c.current = a;
            for (let p = 0; p < v.length; p++) {
                const g = Ki(v[p]);
                l.includes(g) ? f.delete(g) : f.get(g) !== !0 && f.set(g, !1)
            }
        }, [v, l.length, l.join("-")]);
        const k = [];
        if (a !== h) {
            let p = [...a];
            for (let g = 0; g < v.length; g++) {
                const S = v[g],
                    P = Ki(S);
                l.includes(P) || (p.splice(g, 0, S), k.push(S))
            }
            s === "wait" && k.length && (p = k), x(Rf(p)), y(a);
            return
        }
        const {
            forceRender: m
        } = w.useContext(Iu);
        return d.jsx(d.Fragment, {
            children: v.map(p => {
                const g = Ki(p),
                    S = a === v || l.includes(g),
                    P = () => {
                        if (f.has(g)) f.set(g, !0);
                        else return;
                        let C = !0;
                        f.forEach(E => {
                            E || (C = !1)
                        }), C && (m == null || m(), x(c.current), i && i())
                    };
                return d.jsx(Pk, {
                    isPresent: S,
                    initial: !u.current || r ? void 0 : !1,
                    custom: S ? void 0 : n,
                    presenceAffectsLayout: o,
                    mode: s,
                    onExitComplete: S ? void 0 : P,
                    children: p
                }, g)
            })
        })
    },
    jk = () => {
        const [e, t] = w.useState(!1), [n, r] = w.useState(!1), i = Tn();
        if (w.useEffect(() => {
                const a = () => {
                    r(window.scrollY > 20)
                };
                return window.addEventListener("scroll", a), () => window.removeEventListener("scroll", a)
            }, []), i.pathname.startsWith("/dashboard")) return null;
        const o = {
                initial: {
                    scale: 1
                },
                hover: {
                    scale: 1.1,
                    transition: {
                        duration: .2,
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                },
                tap: {
                    scale: .95
                }
            },
            s = {
                initial: {
                    y: -20,
                    opacity: 0
                },
                animate: a => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: a * .1,
                        duration: .3,
                        ease: "easeOut"
                    }
                }),
                hover: {
                    y: -2,
                    transition: {
                        duration: .2
                    }
                }
            };
return d.jsxs("nav", {
    className: `fixed w-full z-50 transition-all duration-300 ${n ? "bg-gradient-to-b from-[#0a0a0a]/95 to-[#1a0000]/95 backdrop-blur-lg shadow-lg shadow-red-500/5" : "bg-transparent"}`,
    children: [d.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: d.jsxs("div", {
            className: "flex justify-between h-16 items-center",
            children: [d.jsx(A.div, {
                initial: "initial",
                animate: "animate",
                whileHover: "hover",
                whileTap: "tap",
                variants: o,
                children: d.jsxs(Bn, {
                    to: "/",
                    className: "flex items-center group",
                    children: [d.jsx(A.img, {
                        src: "https://raw.githubusercontent.com/LiHaoTian5136/nwordhack.github.io/main/GRIM.png",
                        alt: "nigga hack",
                        className: "h-10 w-10 rounded-full",
                        whileHover: {
                            rotate: 360
                        },
                        transition: {
                            duration: .8,
                            ease: "easeInOut"
                        }
                    }), d.jsx(A.span, {
                        className: "ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700",
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: .2
                        },
                        children: "nigga hack"
                    })]
                })
            }), d.jsxs("div", {
                className: "hidden md:flex items-center space-x-8",
                children: [
                    ["Home", "Pricing", "Showcases"].map((a, l) => d.jsx(A.div, {
                        custom: l,
                        variants: s,
                        initial: "initial",
                        animate: "animate",
                        whileHover: "hover",
                        children: d.jsxs(Bn, {
                            to: a === "Home" ? "/" : `/${a.toLowerCase()}`,
                            className: "text-gray-300 hover:text-white transition-colors relative group",
                            children: [a, d.jsx("span", {
                                className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full"
                            })]
                        })
                    }, a)),
                    d.jsx(A.div, {
                        custom: 4,
                        variants: s,
                        initial: "initial",
                        animate: "animate",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: d.jsx("a", {
                            href: "https://discord.gg/serversidez",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg transition-all transform hover:shadow-red-500/25 hover:shadow-lg",
                            children: "Join Discord"
                        })
                    })
                ]
                    }), d.jsx(A.button, {
                        className: "md:hidden p-2",
                        onClick: () => t(!e),
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .9
                        },
                        children: e ? d.jsx(mu, {
                            className: "h-6 w-6"
                        }) : d.jsx(B1, {
                            className: "h-6 w-6"
                        })
                    })]
                })
            }), d.jsx(_0, {
                children: e && d.jsx(A.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-gradient-to-b from-[#0a0a0a]/95 to-[#1a0000]/95 backdrop-blur-lg border-b border-red-500/10",
                    children: d.jsxs("div", {
                        className: "px-4 pt-2 pb-3 space-y-1",
                        children: [
                            ["Home", "Pricing", "Showcases", "Sign In"].map((a, l) => d.jsx(A.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: l * .1
                                },
                                children: d.jsx(Bn, {
                                    to: a === "Home" ? "/" : a === "Sign In" ? "/dashboard" : `/${a.toLowerCase()}`,
                                    className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors",
                                    onClick: () => t(!1),
                                    children: a
                                })
                            }, a)), d.jsx(A.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: .4
                                },
                                children: d.jsx("a", {
                                    href: "https://discord.gg/RJR2ggXeKN",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block px-3 py-2 text-red-500 hover:text-red-400 transition-colors",
                                    onClick: () => t(!1),
                                    children: "Join Discord"
                                })
                            })
                        ]
                    })
                })
            })]
        })
    },
    Tk = () => {
        const [e, t] = w.useState(null), n = [{
            question: "wtf is nigga hack",
            answer: "nigga hack is good roblox script made by the ghetto"
        }, {
            question: "how to buy",
            answer: "uhh go to the /pricing thing then press the get started button and yeah"
        }, {
            question: "is this agaisnt the roblox tos",
            answer: "fuck yeah"
        }, {
            question: "is there any support",
            answer: "https://discord.gg/RJR2ggXeKN"
        }];
        return d.jsxs("div", {
            className: "py-20 px-4 relative overflow-hidden",
            children: [d.jsxs("div", {
                className: "max-w-3xl mx-auto relative z-10",
                children: [d.jsxs(A.h2, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-4xl font-bold text-center mb-12",
                    children: ["Frequently Asked ", d.jsx("span", {
                        className: "gradient-text",
                        children: "Questions"
                    })]
                }), d.jsx("div", {
                    className: "space-y-4",
                    children: n.map((r, i) => d.jsx(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * .1
                        },
                        className: "relative",
                        children: d.jsxs(A.div, {
                            whileHover: {
                                scale: 1.02
                            },
                            className: "border border-red-500/20 rounded-lg overflow-hidden backdrop-blur-lg",
                            children: [d.jsxs("button", {
                                className: "w-full px-6 py-4 flex justify-between items-center bg-[#1a1a1a]/80 hover:bg-[#1f1f1f] transition",
                                onClick: () => t(e === i ? null : i),
                                children: [d.jsx("span", {
                                    className: "font-medium text-left",
                                    children: r.question
                                }), d.jsx(A.div, {
                                    animate: {
                                        rotate: e === i ? 180 : 0
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: d.jsx(E1, {
                                        className: "h-5 w-5"
                                    })
                                })]
                            }), d.jsx(_0, {
                                children: e === i && d.jsx(A.div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: d.jsx("div", {
                                        className: "px-6 py-4 bg-[#1a1a1a]/50 text-gray-400",
                                        children: r.answer
                                    })
                                })
                            })]
                        })
                    }, i))
                })]
            }), d.jsxs("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [d.jsx("div", {
                    className: "absolute top-20 -left-20 w-60 h-60 bg-red-500/10 rounded-full filter blur-3xl"
                }), d.jsx("div", {
                    className: "absolute bottom-20 -right-20 w-60 h-60 bg-red-500/10 rounded-full filter blur-3xl"
                })]
            })]
        })
    },
    Ek = () => d.jsx("div", {
        className: "py-20 px-4",
        children: d.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: d.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [d.jsxs(A.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    children: [d.jsxs("h2", {
                        className: "text-4xl font-bold mb-4",
                        children: ["best freaky script,", d.jsx("br", {}), d.jsx("span", {
                            className: "gradient-text",
                            children: "developed by the best!"
                        })]
                    }), d.jsx("p", {
                        className: "text-gray-400 mb-8",
                        children: "yea uhh idk nigga hack on top idk"
                    }), d.jsxs("div", {
                        className: "grid grid-cols-2 gap-8",
                        children: [d.jsxs("div", {
                            children: [d.jsx("h3", {
                                className: "text-3xl font-bold gradient-text",
                                children: "55+"
                            }), d.jsx("p", {
                                className: "text-gray-400",
                                children: "games supported in nigga hack"
                            })]
                        }), d.jsxs("div", {
                            children: [d.jsx("h3", {
                                className: "text-3xl font-bold gradient-text",
                                children: "5"
                            }), d.jsx("p", {
                                className: "text-gray-400",
                                children: "freaky users and growing 💔💔"
                            })]
                        })]
                    })]
                }), d.jsx(A.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    className: "flex justify-center",
                    children: d.jsx("img", {
                        src: "https://i.pinimg.com/originals/d6/52/b1/d652b106a273b76b09dbac1c3f3420bf.png",
                        alt: "Roblox Character",
                        className: "w-[600px] max-w-none"
                    })
                })]
            })
        })
    }),
    Nk = () => {
        const e = pu(),
            t = [{
                icon: d.jsx(ls, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "its good",
                description: "yep vouch im the word"
            }, {
                icon: d.jsx(cm, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "made in china",
                description: "high quality"
            }, {
                icon: d.jsx(zr, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "ghetto approved",
                description: "says enough"
            }];
        return d.jsxs("div", {
            className: "min-h-screen",
            children: [d.jsx("div", {
                className: "pt-32 pb-20 px-4 relative overflow-hidden",
                children: d.jsxs("div", {
                    className: "max-w-7xl mx-auto text-center relative z-10",
                    children: [d.jsx("div", {
                        className: "inline-block mb-4 px-4 py-1 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-full",
                        children: d.jsx("span", {
                            className: "text-red-500 font-medium",
                            children: "the freakiest script"
                        })
                    }), d.jsxs("h1", {
                        className: "text-5xl md:text-7xl font-bold mb-6 leading-tight",
                        children: ["Unleash Your", d.jsx("br", {}), d.jsx("span", {
                            className: "gradient-text",
                            children: "Ultimate Power"
                        })]
                    }), d.jsx("p", {
                        className: "text-gray-400 text-lg mb-8 max-w-3xl mx-auto",
                        children: "nigga hack delivers unparalleled administrative capabilities with a sleek, modern interface. Take control of your gaming experience like never before."
                    }), d.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [d.jsxs("button", {
                            onClick: () => e("/pricing"),
                            className: "group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 red-glow",
                            children: ["Get Started", d.jsx(N1, {
                                className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                            })]
                        }), d.jsx("a", {
                            href: "https://discord.gg/RJR2ggXeKN",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 px-8 py-4 rounded-xl font-medium transition-all",
                            children: "Join Discord"
                        })]
                    })]
                })
            }), d.jsx(Ek, {}), d.jsxs("div", {
                className: "py-20 px-4 relative",
                children: [d.jsxs("h2", {
                    className: "text-4xl font-bold text-center mb-12",
                    children: ["Powerful ", d.jsx("span", {
                        className: "gradient-text",
                        children: "Features"
                    })]
                }), d.jsx("div", {
                    className: "max-w-7xl mx-auto",
                    children: d.jsx("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: t.map((n, r) => d.jsxs("div", {
                            className: "feature-card",
                            children: [d.jsx("div", {
                                className: "bg-gradient-to-br from-red-500/10 to-red-700/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6",
                                children: n.icon
                            }), d.jsx("h3", {
                                className: "text-xl font-bold mb-4",
                                children: n.title
                            }), d.jsx("p", {
                                className: "text-gray-400",
                                children: n.description
                            })]
                        }, r))
                    })
                })]
            }), d.jsx(Tk, {})]
        })
    },
    Mk = () => {
        const e = [{
            name: "Basic",
            price: "300 R$",
            features: ["Good and Clean UI", "Fast Execution", "Good Games", "Basic Support", "Regular Updates", "And More!"],
            icon: d.jsx(Y1, {
                className: "w-6 h-6"
            })
        }, {
            name: "Exclusive",
            price: "500 R$",
            popular: !0,
            features: ["Everything in Basic", "Priority Support", "Exclusive Games", "Early Access", "Special Commands", "And more!"],
            icon: d.jsx(A1, {
                className: "w-6 h-6"
            })
        }];
        return d.jsxs("div", {
            className: "py-20 px-4 relative overflow-hidden",
            children: [d.jsxs("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [d.jsx("div", {
                    className: "absolute top-1/4 left-0 w-72 h-72 bg-red-500/10 rounded-full filter blur-3xl"
                }), d.jsx("div", {
                    className: "absolute bottom-1/4 right-0 w-72 h-72 bg-red-500/10 rounded-full filter blur-3xl"
                })]
            }), d.jsx("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: d.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",
                    children: e.map((t, n) => d.jsxs(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: n * .2
                        },
                        className: `relative group ${t.popular?"bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20":"bg-[#1a1a1a]/60"} backdrop-blur-xl rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${t.popular?"border-red-500/50 hover:border-red-500":"border-red-500/20 hover:border-red-500/50"}`,
                        children: [t.popular && d.jsx("div", {
                            className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                            children: d.jsx("span", {
                                className: "bg-gradient-to-r from-red-500 to-red-700 text-sm px-4 py-1 rounded-full font-medium shadow-lg shadow-red-500/25",
                                children: "Most Popular"
                            })
                        }), d.jsxs("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [d.jsx("div", {
                                className: `p-3 rounded-xl ${t.popular?"bg-gradient-to-br from-red-500/20 to-red-700/20 text-red-500":"bg-red-500/10 text-red-500/80"}`,
                                children: t.icon
                            }), d.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: t.name
                            })]
                        }), d.jsxs("div", {
                            className: "text-4xl font-bold mb-6 flex items-end gap-2",
                            children: [t.price, d.jsx("span", {
                                className: "text-sm font-normal text-gray-400 mb-1",
                                children: "/lifetime"
                            })]
                        }), d.jsx("div", {
                            className: "space-y-4 mb-8",
                            children: t.features.map((r, i) => d.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [d.jsx("div", {
                                    className: `rounded-full p-1 ${t.popular?"bg-red-500/20 text-red-500":"bg-red-500/10 text-red-500/80"}`,
                                    children: d.jsx(T1, {
                                        className: "w-4 h-4"
                                    })
                                }), d.jsx("span", {
                                    className: "text-gray-300",
                                    children: r
                                })]
                            }, i))
                        }), d.jsx("a", {
                            href: "https://discord.gg/RJR2ggXeKN",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `block w-full py-3 rounded-xl font-medium text-center transition-all ${t.popular?"bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40":"bg-white/10 hover:bg-white/20 border border-red-500/20 hover:border-red-500/40"}`,
                            children: "Get Started"
                        })]
                    }, n))
                })
            })]
        })
    },
    Rk = () => d.jsxs("div", {
        className: "pt-32",
        children: [d.jsxs(A.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "text-center mb-16",
            children: [d.jsx("h1", {
                className: "text-5xl font-bold mb-4",
                children: "Pricing"
            }), d.jsx("p", {
                className: "text-gray-400 max-w-2xl mx-auto px-4",
                children: "Our various licenses have the cheapest prices for the highest amount of features. We offer the largest collection of games out of any other serverside on the market."
            })]
        }), d.jsx(Mk, {})]
    }),
    Ak = [{
        videoId: "NMsAYmJREDg",
        thumbnail: "https://img.youtube.com/vi/NMsAYmJREDg/maxresdefault.jpg"
    }, {
        videoId: "7Tnp0Tij2sM",
        thumbnail: "https://img.youtube.com/vi/7Tnp0Tij2sM/maxresdefault.jpg"
    }, {
        videoId: "7W8Ahh-0mcM",
        thumbnail: "https://img.youtube.com/vi/7W8Ahh-0mcM/maxresdefault.jpg"
    }, {
        videoId: "3Dn6sBMrmO0",
        thumbnail: "https://img.youtube.com/vi/3Dn6sBMrmO0/maxresdefault.jpg"
    }, {
        videoId: "jMd16hYrgtA",
        thumbnail: "https://img.youtube.com/vi/jMd16hYrgtA/maxresdefault.jpg"
    }, {
        videoId: "NMsAYmJREDg",
        thumbnail: "https://img.youtube.com/vi/NMsAYmJREDg/maxresdefault.jpg"
    }],
    Lk = () => {
        const [e, t] = w.useState(null);
        return d.jsxs("div", {
            className: "pt-32 pb-20",
            children: [d.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-center mb-16",
                children: [d.jsx("h1", {
                    className: "text-5xl font-bold mb-4",
                    children: "Showcases"
                }), d.jsxs("p", {
                    className: "text-gray-400 max-w-2xl mx-auto px-4",
                    children: ["More showcases of niggahack soon on our ", d.jsx("a", {
                        href: "https://www.youtube.com/@niggahack",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-red-500 hover:text-red-400",
                        children: "YouTube channel"
                    }), "."]
                })]
            }), e && d.jsx("div", {
                className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
                children: d.jsxs("div", {
                    className: "relative w-full max-w-6xl",
                    children: [d.jsx("button", {
                        onClick: () => t(null),
                        className: "absolute -top-12 right-0 text-white/80 hover:text-white",
                        children: d.jsx(mu, {
                            className: "w-8 h-8"
                        })
                    }), d.jsx("div", {
                        className: "relative pt-[56.25%]",
                        children: d.jsx("iframe", {
                            className: "absolute inset-0 w-full h-full rounded-xl",
                            src: `https://www.youtube.com/embed/${e}?autoplay=1`,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0
                        })
                    })]
                })
            }), d.jsx("div", {
                className: "max-w-7xl mx-auto px-4",
                children: d.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: Ak.map((n, r) => d.jsx(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: r * .1
                        },
                        className: "group relative",
                        children: d.jsxs("div", {
                            className: "relative aspect-video rounded-xl overflow-hidden bg-[#1a1a24] border border-red-500/20",
                            children: [d.jsx("img", {
                                src: n.thumbnail,
                                alt: "Showcase thumbnail",
                                className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            }), d.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                                children: d.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6",
                                    children: d.jsxs("button", {
                                        onClick: () => t(n.videoId),
                                        className: "w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors",
                                        children: [d.jsx(um, {
                                            className: "w-4 h-4"
                                        }), " Watch Now"]
                                    })
                                })
                            })]
                        })
                    }, r))
                })
            })]
        })
    },
    bk = () => {
        const e = [{
                icon: d.jsx(U1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "sharing",
                description: "dont leak your key pls"
            }, {
                icon: d.jsx(us, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "no patch or somethinbg smh",
                description: "dont tell owners if u see them that um this exists type shit cuz fyneshit will patch"
            }],
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .1
                    }
                }
            },
            n = {
                hidden: {
                    opacity: 0,
                    x: -20
                },
                visible: {
                    opacity: 1,
                    x: 0
                }
            };
        return d.jsxs("div", {
            className: "pt-32 pb-20 relative overflow-hidden",
            children: [d.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 relative z-10",
                children: [d.jsxs(A.div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-12",
                    children: [d.jsx("h1", {
                        className: "text-5xl font-bold mb-4",
                        children: "Terms of Service"
                    }), d.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "pls read this before using niggahack its short you can do it i believe in you"
                    })]
                }), d.jsx(A.div, {
                    variants: t,
                    initial: "hidden",
                    animate: "visible",
                    className: "grid md:grid-cols-2 gap-6",
                    children: e.map((r, i) => d.jsxs(A.div, {
                        variants: n,
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gradient-to-br from-[#1a1a24]/90 to-red-900/20 backdrop-blur-xl rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group",
                        children: [d.jsxs("div", {
                            className: "flex items-center gap-4 mb-4",
                            children: [d.jsx(A.div, {
                                className: "p-3 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-lg group-hover:from-red-500/20 group-hover:to-red-700/20 transition-all duration-300",
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: .8
                                },
                                children: r.icon
                            }), d.jsx("h3", {
                                className: "text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300",
                                children: r.title
                            })]
                        }), d.jsx("p", {
                            className: "text-gray-400 group-hover:text-gray-300 transition-colors duration-300",
                            children: r.description
                        })]
                    }, i))
                }), d.jsx(A.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .8
                    },
                    className: "mt-12 text-center",
                    children: d.jsxs("p", {
                        className: "text-gray-400",
                        children: ["Have questions about our Terms of Service?", " ", d.jsxs("a", {
                            href: "mailto:serverside@serverside.space",
                            className: "text-red-500 hover:text-red-400 inline-flex items-center gap-1 group",
                            children: ["Contact us", d.jsx(L1, {
                                className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            })]
                        })]
                    })
                })]
            }), d.jsxs("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [d.jsx("div", {
                    className: "absolute top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"
                }), d.jsx("div", {
                    className: "absolute bottom-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"
                })]
            })]
        })
    },
    Vk = () => {
        const e = [{
                icon: d.jsx(ls, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Information Collection",
                content: "We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support."
            }, {
                icon: d.jsx(K1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Data Storage",
                content: "Your data is securely stored on our protected servers with state-of-the-art encryption and security measures."
            }, {
                icon: d.jsx(b1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Information Usage",
                content: "We use the information we collect to provide, maintain, and improve our services, process your transactions, and communicate with you."
            }, {
                icon: d.jsx(Z1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "User Rights",
                content: "You have the right to access, modify, or delete your personal information at any time through your account settings."
            }, {
                icon: d.jsx(j1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Communications",
                content: "We may send you important updates about our services, and you can opt out of non-essential communications at any time."
            }, {
                icon: d.jsx(I1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Data Security",
                content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure."
            }, {
                icon: d.jsx(z1, {
                    className: "w-6 h-6 text-red-500"
                }),
                title: "Contact Us",
                content: "If you have any questions about our Privacy Policy, please contact us at serverside@serverside.space"
            }],
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .1
                    }
                }
            },
            n = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            };
        return d.jsxs("div", {
            className: "pt-32 pb-20 relative overflow-hidden",
            children: [d.jsxs("div", {
                className: "max-w-4xl mx-auto px-4 relative z-10",
                children: [d.jsxs(A.div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-12",
                    children: [d.jsx("h1", {
                        className: "text-5xl font-bold mb-4",
                        children: "Privacy Policy"
                    }), d.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "We take your privacy seriously. Learn how we collect, use, and protect your personal information."
                    })]
                }), d.jsx(A.div, {
                    variants: t,
                    initial: "hidden",
                    animate: "visible",
                    className: "grid gap-6",
                    children: e.map((r, i) => d.jsxs(A.div, {
                        variants: n,
                        whileHover: {
                            scale: 1.02,
                            translateX: 10
                        },
                        className: "bg-gradient-to-br from-[#1a1a24]/90 to-red-900/20 backdrop-blur-xl rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group",
                        children: [d.jsxs("div", {
                            className: "flex items-center gap-4 mb-4",
                            children: [d.jsx(A.div, {
                                className: "p-3 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-lg group-hover:from-red-500/20 group-hover:to-red-700/20 transition-all duration-300",
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: .8
                                },
                                children: r.icon
                            }), d.jsx("h2", {
                                className: "text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300",
                                children: r.title
                            })]
                        }), d.jsx("p", {
                            className: "text-gray-400 group-hover:text-gray-300 transition-colors duration-300",
                            children: r.content
                        })]
                    }, i))
                })]
            }), d.jsxs("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [d.jsx("div", {
                    className: "absolute top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"
                }), d.jsx("div", {
                    className: "absolute bottom-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"
                })]
            })]
        })
    },
    Dk = () => {
        const e = [{
            title: "Adopt Me",
            players: "2K Players",
            rating: "4.8"
        }, {
            title: "Blox Fruits",
            players: "1.5K Players",
            rating: "4.9"
        }, {
            title: "Pet Simulator X",
            players: "3K Players",
            rating: "4.7"
        }, {
            title: "Brookhaven",
            players: "800 Players",
            rating: "4.6"
        }];
        return d.jsx("div", {
            className: "p-8",
            children: d.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "max-w-6xl mx-auto",
                children: [d.jsxs("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [d.jsx("h1", {
                        className: "text-3xl font-bold",
                        children: "Games"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsx(H1, {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        }), d.jsx("input", {
                            type: "text",
                            placeholder: "Search games...",
                            className: "bg-gradient-to-r from-[#1a1a1a]/80 to-[#1a0000]/80 border border-red-500/20 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-red-500 transition-all"
                        })]
                    })]
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: e.map((t, n) => d.jsx(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: n * .1
                        },
                        whileHover: {
                            scale: 1.03
                        },
                        className: "game-card group",
                        children: d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsx("div", {
                                className: "flex items-center justify-center mb-4",
                                children: d.jsx("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                                    children: d.jsx(lm, {
                                        className: "w-8 h-8 text-red-500"
                                    })
                                })
                            }), d.jsx("h3", {
                                className: "text-xl font-semibold text-center mb-4",
                                children: t.title
                            }), d.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [d.jsxs("div", {
                                    className: "flex items-center gap-2 text-gray-400",
                                    children: [d.jsx(us, {
                                        className: "w-4 h-4"
                                    }), d.jsx("span", {
                                        className: "text-sm",
                                        children: t.players
                                    })]
                                }), d.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [d.jsx(Q1, {
                                        className: "w-4 h-4 text-yellow-500"
                                    }), d.jsx("span", {
                                        className: "text-sm text-gray-400",
                                        children: t.rating
                                    })]
                                })]
                            }), d.jsx(A.button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                className: "w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg transition-all transform opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
                                children: "Join Game"
                            })]
                        })
                    }, n))
                })]
            })
        })
    },
    Ok = () => {
        const e = [{
                icon: d.jsx(us, {
                    className: "w-5 h-5"
                }),
                label: "Total Users",
                value: "50,234"
            }, {
                icon: d.jsx(C1, {
                    className: "w-5 h-5"
                }),
                label: "Banned Users",
                value: "142"
            }, {
                icon: d.jsx(D1, {
                    className: "w-5 h-5"
                }),
                label: "Reports",
                value: "23"
            }, {
                icon: d.jsx(M1, {
                    className: "w-5 h-5"
                }),
                label: "Online Staff",
                value: "8"
            }],
            t = [{
                action: "Banned user",
                target: "User123",
                staff: "Admin1",
                time: "2 mins ago"
            }, {
                action: "Warned user",
                target: "Player456",
                staff: "Mod2",
                time: "5 mins ago"
            }, {
                action: "Kicked user",
                target: "Gamer789",
                staff: "Admin3",
                time: "10 mins ago"
            }];
        return d.jsx("div", {
            className: "p-8",
            children: d.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                children: [d.jsx("h1", {
                    className: "text-3xl font-bold mb-8",
                    children: "Staff Panel"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: e.map((n, r) => d.jsx(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: r * .1
                        },
                        className: "bg-[#1a1a1a]/80 backdrop-blur-lg rounded-xl p-6 border border-red-500/20",
                        children: d.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [d.jsx("div", {
                                className: "p-2 bg-red-500/10 rounded-lg text-red-500",
                                children: n.icon
                            }), d.jsxs("div", {
                                children: [d.jsx("p", {
                                    className: "text-sm text-gray-400",
                                    children: n.label
                                }), d.jsx("p", {
                                    className: "text-xl font-bold",
                                    children: n.value
                                })]
                            })]
                        })
                    }, r))
                }), d.jsxs("div", {
                    className: "bg-[#1a1a1a]/80 backdrop-blur-lg rounded-xl border border-red-500/20",
                    children: [d.jsx("div", {
                        className: "p-6 border-b border-red-500/20",
                        children: d.jsx("h2", {
                            className: "text-xl font-semibold",
                            children: "Recent Actions"
                        })
                    }), d.jsx("div", {
                        className: "p-6",
                        children: d.jsx("div", {
                            className: "space-y-4",
                            children: t.map((n, r) => d.jsxs(A.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: r * .1
                                },
                                className: "flex items-center justify-between",
                                children: [d.jsxs("div", {
                                    children: [d.jsxs("p", {
                                        className: "font-medium",
                                        children: [n.action, ": ", d.jsx("span", {
                                            className: "text-red-500",
                                            children: n.target
                                        })]
                                    }), d.jsxs("p", {
                                        className: "text-sm text-gray-400",
                                        children: ["by ", n.staff]
                                    })]
                                }), d.jsx("span", {
                                    className: "text-sm text-gray-400",
                                    children: n.time
                                })]
                            }, r))
                        })
                    })]
                })]
            })
        })
    };

function _k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Af(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Lf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Af(Object(n), !0).forEach(function(r) {
            _k(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Af(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Ik(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function Fk(e, t) {
    if (e == null) return {};
    var n = Ik(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function zk(e, t) {
    return Bk(e) || Uk(e, t) || $k(e, t) || Wk()
}

function Bk(e) {
    if (Array.isArray(e)) return e
}

function Uk(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var s = e[Symbol.iterator](), a; !(r = (a = s.next()).done) && (n.push(a.value), !(t && n.length === t)); r = !0);
        } catch (l) {
            i = !0, o = l
        } finally {
            try {
                !r && s.return != null && s.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}

function $k(e, t) {
    if (e) {
        if (typeof e == "string") return bf(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bf(e, t)
    }
}

function bf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function Wk() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Hk(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Vf(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Df(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Vf(Object(n), !0).forEach(function(r) {
            Hk(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vf(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Kk() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(r) {
        return t.reduceRight(function(i, o) {
            return o(i)
        }, r)
    }
}

function Rr(e) {
    return function t() {
        for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return i.length >= e.length ? e.apply(this, i) : function() {
            for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
            return t.apply(n, [].concat(i, a))
        }
    }
}

function Wo(e) {
    return {}.toString.call(e).includes("Object")
}

function Gk(e) {
    return !Object.keys(e).length
}

function pi(e) {
    return typeof e == "function"
}

function Yk(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function Qk(e, t) {
    return Wo(t) || Kt("changeType"), Object.keys(t).some(function(n) {
        return !Yk(e, n)
    }) && Kt("changeField"), t
}

function Xk(e) {
    pi(e) || Kt("selectorType")
}

function qk(e) {
    pi(e) || Wo(e) || Kt("handlerType"), Wo(e) && Object.values(e).some(function(t) {
        return !pi(t)
    }) && Kt("handlersType")
}

function Zk(e) {
    e || Kt("initialIsRequired"), Wo(e) || Kt("initialType"), Gk(e) && Kt("initialContent")
}

function Jk(e, t) {
    throw new Error(e[t] || e.default)
}
var eP = {
        initialIsRequired: "initial state is required",
        initialType: "initial state should be an object",
        initialContent: "initial state shouldn't be an empty object",
        handlerType: "handler should be an object or a function",
        handlersType: "all handlers should be a functions",
        selectorType: "selector should be a function",
        changeType: "provided value of changes should be an object",
        changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
        default: "an unknown error accured in `state-local` package"
    },
    Kt = Rr(Jk)(eP),
    Gi = {
        changes: Qk,
        selector: Xk,
        handler: qk,
        initial: Zk
    };

function tP(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Gi.initial(e), Gi.handler(t);
    var n = {
            current: e
        },
        r = Rr(iP)(n, t),
        i = Rr(rP)(n),
        o = Rr(Gi.changes)(e),
        s = Rr(nP)(n);

    function a() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
            return c
        };
        return Gi.selector(u), u(n.current)
    }

    function l(u) {
        Kk(r, i, o, s)(u)
    }
    return [a, l]
}

function nP(e, t) {
    return pi(t) ? t(e.current) : t
}

function rP(e, t) {
    return e.current = Df(Df({}, e.current), t), t
}

function iP(e, t, n) {
    return pi(t) ? t(e.current) : Object.keys(n).forEach(function(r) {
        var i;
        return (i = t[r]) === null || i === void 0 ? void 0 : i.call(t, e.current[r])
    }), n
}
var oP = {
        create: tP
    },
    sP = {
        paths: {
            vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
        }
    };

function aP(e) {
    return function t() {
        for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return i.length >= e.length ? e.apply(this, i) : function() {
            for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
            return t.apply(n, [].concat(i, a))
        }
    }
}

function lP(e) {
    return {}.toString.call(e).includes("Object")
}

function uP(e) {
    return e || Of("configIsRequired"), lP(e) || Of("configType"), e.urls ? (cP(), {
        paths: {
            vs: e.urls.monacoBase
        }
    }) : e
}

function cP() {
    console.warn(I0.deprecation)
}

function dP(e, t) {
    throw new Error(e[t] || e.default)
}
var I0 = {
        configIsRequired: "the configuration object is required",
        configType: "the configuration object should be an object",
        default: "an unknown error accured in `@monaco-editor/loader` package",
        deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
    },
    Of = aP(dP)(I0),
    fP = {
        config: uP
    },
    hP = function() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return function(i) {
            return n.reduceRight(function(o, s) {
                return s(o)
            }, i)
        }
    };

function F0(e, t) {
    return Object.keys(t).forEach(function(n) {
        t[n] instanceof Object && e[n] && Object.assign(t[n], F0(e[n], t[n]))
    }), Lf(Lf({}, e), t)
}
var pP = {
    type: "cancelation",
    msg: "operation is manually canceled"
};

function ia(e) {
    var t = !1,
        n = new Promise(function(r, i) {
            e.then(function(o) {
                return t ? i(pP) : r(o)
            }), e.catch(i)
        });
    return n.cancel = function() {
        return t = !0
    }, n
}
var mP = oP.create({
        config: sP,
        isInitialized: !1,
        resolve: null,
        reject: null,
        monaco: null
    }),
    z0 = zk(mP, 2),
    Ci = z0[0],
    vs = z0[1];

function gP(e) {
    var t = fP.config(e),
        n = t.monaco,
        r = Fk(t, ["monaco"]);
    vs(function(i) {
        return {
            config: F0(i.config, r),
            monaco: n
        }
    })
}

function vP() {
    var e = Ci(function(t) {
        var n = t.monaco,
            r = t.isInitialized,
            i = t.resolve;
        return {
            monaco: n,
            isInitialized: r,
            resolve: i
        }
    });
    if (!e.isInitialized) {
        if (vs({
                isInitialized: !0
            }), e.monaco) return e.resolve(e.monaco), ia(oa);
        if (window.monaco && window.monaco.editor) return B0(window.monaco), e.resolve(window.monaco), ia(oa);
        hP(yP, wP)(SP)
    }
    return ia(oa)
}

function yP(e) {
    return document.body.appendChild(e)
}

function xP(e) {
    var t = document.createElement("script");
    return e && (t.src = e), t
}

function wP(e) {
    var t = Ci(function(r) {
            var i = r.config,
                o = r.reject;
            return {
                config: i,
                reject: o
            }
        }),
        n = xP("".concat(t.config.paths.vs, "/loader.js"));
    return n.onload = function() {
        return e()
    }, n.onerror = t.reject, n
}

function SP() {
    var e = Ci(function(n) {
            var r = n.config,
                i = n.resolve,
                o = n.reject;
            return {
                config: r,
                resolve: i,
                reject: o
            }
        }),
        t = window.require;
    t.config(e.config), t(["vs/editor/editor.main"], function(n) {
        B0(n), e.resolve(n)
    }, function(n) {
        e.reject(n)
    })
}

function B0(e) {
    Ci().monaco || vs({
        monaco: e
    })
}

function kP() {
    return Ci(function(e) {
        var t = e.monaco;
        return t
    })
}
var oa = new Promise(function(e, t) {
        return vs({
            resolve: e,
            reject: t
        })
    }),
    U0 = {
        config: gP,
        init: vP,
        __getMonacoInstance: kP
    },
    PP = {
        wrapper: {
            display: "flex",
            position: "relative",
            textAlign: "initial"
        },
        fullWidth: {
            width: "100%"
        },
        hide: {
            display: "none"
        }
    },
    sa = PP,
    CP = {
        container: {
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    jP = CP;

function TP({
    children: e
}) {
    return hn.createElement("div", {
        style: jP.container
    }, e)
}
var EP = TP,
    NP = EP;

function MP({
    width: e,
    height: t,
    isEditorReady: n,
    loading: r,
    _ref: i,
    className: o,
    wrapperProps: s
}) {
    return hn.createElement("section", {
        style: {
            ...sa.wrapper,
            width: e,
            height: t
        },
        ...s
    }, !n && hn.createElement(NP, null, r), hn.createElement("div", {
        ref: i,
        style: {
            ...sa.fullWidth,
            ...!n && sa.hide
        },
        className: o
    }))
}
var RP = MP,
    $0 = w.memo(RP);

function AP(e) {
    w.useEffect(e, [])
}
var W0 = AP;

function LP(e, t, n = !0) {
    let r = w.useRef(!0);
    w.useEffect(r.current || !n ? () => {
        r.current = !1
    } : e, t)
}
var Ve = LP;

function Wr() {}

function Gn(e, t, n, r) {
    return bP(e, r) || VP(e, t, n, r)
}

function bP(e, t) {
    return e.editor.getModel(H0(e, t))
}

function VP(e, t, n, r) {
    return e.editor.createModel(t, n, r ? H0(e, r) : void 0)
}

function H0(e, t) {
    return e.Uri.parse(t)
}

function DP({
    original: e,
    modified: t,
    language: n,
    originalLanguage: r,
    modifiedLanguage: i,
    originalModelPath: o,
    modifiedModelPath: s,
    keepCurrentOriginalModel: a = !1,
    keepCurrentModifiedModel: l = !1,
    theme: u = "light",
    loading: c = "Loading...",
    options: f = {},
    height: h = "100%",
    width: y = "100%",
    className: v,
    wrapperProps: x = {},
    beforeMount: k = Wr,
    onMount: m = Wr
}) {
    let [p, g] = w.useState(!1), [S, P] = w.useState(!0), C = w.useRef(null), E = w.useRef(null), T = w.useRef(null), V = w.useRef(m), M = w.useRef(k), G = w.useRef(!1);
    W0(() => {
        let _ = U0.init();
        return _.then(U => (E.current = U) && P(!1)).catch(U => (U == null ? void 0 : U.type) !== "cancelation" && console.error("Monaco initialization: error:", U)), () => C.current ? Xe() : _.cancel()
    }), Ve(() => {
        if (C.current && E.current) {
            let _ = C.current.getOriginalEditor(),
                U = Gn(E.current, e || "", r || n || "text", o || "");
            U !== _.getModel() && _.setModel(U)
        }
    }, [o], p), Ve(() => {
        if (C.current && E.current) {
            let _ = C.current.getModifiedEditor(),
                U = Gn(E.current, t || "", i || n || "text", s || "");
            U !== _.getModel() && _.setModel(U)
        }
    }, [s], p), Ve(() => {
        let _ = C.current.getModifiedEditor();
        _.getOption(E.current.editor.EditorOption.readOnly) ? _.setValue(t || "") : t !== _.getValue() && (_.executeEdits("", [{
            range: _.getModel().getFullModelRange(),
            text: t || "",
            forceMoveMarkers: !0
        }]), _.pushUndoStop())
    }, [t], p), Ve(() => {
        var _, U;
        (U = (_ = C.current) == null ? void 0 : _.getModel()) == null || U.original.setValue(e || "")
    }, [e], p), Ve(() => {
        let {
            original: _,
            modified: U
        } = C.current.getModel();
        E.current.editor.setModelLanguage(_, r || n || "text"), E.current.editor.setModelLanguage(U, i || n || "text")
    }, [n, r, i], p), Ve(() => {
        var _;
        (_ = E.current) == null || _.editor.setTheme(u)
    }, [u], p), Ve(() => {
        var _;
        (_ = C.current) == null || _.updateOptions(f)
    }, [f], p);
    let Ae = w.useCallback(() => {
            var W;
            if (!E.current) return;
            M.current(E.current);
            let _ = Gn(E.current, e || "", r || n || "text", o || ""),
                U = Gn(E.current, t || "", i || n || "text", s || "");
            (W = C.current) == null || W.setModel({
                original: _,
                modified: U
            })
        }, [n, t, i, e, r, o, s]),
        Be = w.useCallback(() => {
            var _;
            !G.current && T.current && (C.current = E.current.editor.createDiffEditor(T.current, {
                automaticLayout: !0,
                ...f
            }), Ae(), (_ = E.current) == null || _.editor.setTheme(u), g(!0), G.current = !0)
        }, [f, u, Ae]);
    w.useEffect(() => {
        p && V.current(C.current, E.current)
    }, [p]), w.useEffect(() => {
        !S && !p && Be()
    }, [S, p, Be]);

    function Xe() {
        var U, W, N, b;
        let _ = (U = C.current) == null ? void 0 : U.getModel();
        a || ((W = _ == null ? void 0 : _.original) == null || W.dispose()), l || ((N = _ == null ? void 0 : _.modified) == null || N.dispose()), (b = C.current) == null || b.dispose()
    }
    return hn.createElement($0, {
        width: y,
        height: h,
        isEditorReady: p,
        loading: c,
        _ref: T,
        className: v,
        wrapperProps: x
    })
}
var OP = DP;
w.memo(OP);

function _P(e) {
    let t = w.useRef();
    return w.useEffect(() => {
        t.current = e
    }, [e]), t.current
}
var IP = _P,
    Yi = new Map;

function FP({
    defaultValue: e,
    defaultLanguage: t,
    defaultPath: n,
    value: r,
    language: i,
    path: o,
    theme: s = "light",
    line: a,
    loading: l = "Loading...",
    options: u = {},
    overrideServices: c = {},
    saveViewState: f = !0,
    keepCurrentModel: h = !1,
    width: y = "100%",
    height: v = "100%",
    className: x,
    wrapperProps: k = {},
    beforeMount: m = Wr,
    onMount: p = Wr,
    onChange: g,
    onValidate: S = Wr
}) {
    let [P, C] = w.useState(!1), [E, T] = w.useState(!0), V = w.useRef(null), M = w.useRef(null), G = w.useRef(null), Ae = w.useRef(p), Be = w.useRef(m), Xe = w.useRef(), _ = w.useRef(r), U = IP(o), W = w.useRef(!1), N = w.useRef(!1);
    W0(() => {
        let L = U0.init();
        return L.then(I => (V.current = I) && T(!1)).catch(I => (I == null ? void 0 : I.type) !== "cancelation" && console.error("Monaco initialization: error:", I)), () => M.current ? O() : L.cancel()
    }), Ve(() => {
        var I, le, Le, ot;
        let L = Gn(V.current, e || r || "", t || i || "", o || n || "");
        L !== ((I = M.current) == null ? void 0 : I.getModel()) && (f && Yi.set(U, (le = M.current) == null ? void 0 : le.saveViewState()), (Le = M.current) == null || Le.setModel(L), f && ((ot = M.current) == null || ot.restoreViewState(Yi.get(o))))
    }, [o], P), Ve(() => {
        var L;
        (L = M.current) == null || L.updateOptions(u)
    }, [u], P), Ve(() => {
        !M.current || r === void 0 || (M.current.getOption(V.current.editor.EditorOption.readOnly) ? M.current.setValue(r) : r !== M.current.getValue() && (N.current = !0, M.current.executeEdits("", [{
            range: M.current.getModel().getFullModelRange(),
            text: r,
            forceMoveMarkers: !0
        }]), M.current.pushUndoStop(), N.current = !1))
    }, [r], P), Ve(() => {
        var I, le;
        let L = (I = M.current) == null ? void 0 : I.getModel();
        L && i && ((le = V.current) == null || le.editor.setModelLanguage(L, i))
    }, [i], P), Ve(() => {
        var L;
        a !== void 0 && ((L = M.current) == null || L.revealLine(a))
    }, [a], P), Ve(() => {
        var L;
        (L = V.current) == null || L.editor.setTheme(s)
    }, [s], P);
    let b = w.useCallback(() => {
        var L;
        if (!(!G.current || !V.current) && !W.current) {
            Be.current(V.current);
            let I = o || n,
                le = Gn(V.current, r || e || "", t || i || "", I || "");
            M.current = (L = V.current) == null ? void 0 : L.editor.create(G.current, {
                model: le,
                automaticLayout: !0,
                ...u
            }, c), f && M.current.restoreViewState(Yi.get(I)), V.current.editor.setTheme(s), a !== void 0 && M.current.revealLine(a), C(!0), W.current = !0
        }
    }, [e, t, n, r, i, o, u, c, f, s, a]);
    w.useEffect(() => {
        P && Ae.current(M.current, V.current)
    }, [P]), w.useEffect(() => {
        !E && !P && b()
    }, [E, P, b]), _.current = r, w.useEffect(() => {
        var L, I;
        P && g && ((L = Xe.current) == null || L.dispose(), Xe.current = (I = M.current) == null ? void 0 : I.onDidChangeModelContent(le => {
            N.current || g(M.current.getValue(), le)
        }))
    }, [P, g]), w.useEffect(() => {
        if (P) {
            let L = V.current.editor.onDidChangeMarkers(I => {
                var Le;
                let le = (Le = M.current.getModel()) == null ? void 0 : Le.uri;
                if (le && I.find(ot => ot.path === le.path)) {
                    let ot = V.current.editor.getModelMarkers({
                        resource: le
                    });
                    S == null || S(ot)
                }
            });
            return () => {
                L == null || L.dispose()
            }
        }
        return () => {}
    }, [P, S]);

    function O() {
        var L, I;
        (L = Xe.current) == null || L.dispose(), h ? f && Yi.set(o, M.current.saveViewState()) : (I = M.current.getModel()) == null || I.dispose(), M.current.dispose()
    }
    return hn.createElement($0, {
        width: y,
        height: v,
        isEditorReady: P,
        loading: l,
        _ref: G,
        className: x,
        wrapperProps: k
    })
}
var zP = FP,
    BP = w.memo(zP),
    UP = BP;
const $P = () => {
        var y;
        const [e, t] = w.useState([{
            id: "1",
            name: "Script 1",
            code: 'print("nigga hack on top!")'
        }]), [n, r] = w.useState("1"), i = ((y = e.find(v => v.id === n)) == null ? void 0 : y.code) || "", o = () => {
            console.log("Executing code:", i)
        }, s = () => {
            t(e.map(v => v.id === n ? {
                ...v,
                code: ""
            } : v))
        }, a = () => {
            navigator.clipboard.writeText(i)
        }, l = () => {
            console.log("Saving script:", i)
        }, u = v => {
            t(e.map(x => x.id === n ? {
                ...x,
                code: v || ""
            } : x))
        }, c = () => {
            const v = e.map(k => parseInt(k.name.split(" ")[1]));
            let x = 1;
            for (; v.includes(x);) x++;
            return x
        }, f = () => {
            const v = c(),
                x = {
                    id: v.toString(),
                    name: `Script ${v}`,
                    code: ""
                };
            t([...e, x]), r(x.id)
        }, h = (v, x) => {
            if (x.stopPropagation(), e.length > 1) {
                const k = e.filter(m => m.id !== v);
                t(k), n === v && r(k[k.length - 1].id)
            }
        };
        return d.jsx("div", {
            className: "p-8",
            children: d.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "max-w-7xl mx-auto",
                children: [d.jsxs("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [d.jsxs("div", {
                        children: [d.jsx("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Script Executor"
                        }), d.jsx("p", {
                            className: "text-gray-400",
                            children: "Execute your favorite scripts with style"
                        })]
                    }), d.jsxs("div", {
                        className: "flex gap-3",
                        children: [d.jsxs(A.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            onClick: a,
                            className: "flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-red-500/20",
                            children: [d.jsx(R1, {
                                className: "w-4 h-4"
                            }), "Copy"]
                        }), d.jsxs(A.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            onClick: l,
                            className: "flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-red-500/20",
                            children: [d.jsx(W1, {
                                className: "w-4 h-4"
                            }), "Save"]
                        })]
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                    children: [d.jsx("div", {
                        className: "lg:col-span-1 space-y-4",
                        children: d.jsxs("div", {
                            className: "bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20 backdrop-blur-xl rounded-xl border border-red-500/20 p-6",
                            children: [d.jsx("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Quick Scripts"
                            }), d.jsx("div", {
                                className: "space-y-2",
                                children: ["Admin Commands", "Teleport", "ESP", "Aimbot"].map((v, x) => d.jsxs(A.button, {
                                    whileHover: {
                                        scale: 1.02,
                                        x: 5
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    className: "w-full text-left px-4 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-all border border-red-500/20 hover:border-red-500/40 flex items-center gap-3",
                                    children: [d.jsx(zr, {
                                        className: "w-4 h-4 text-red-500"
                                    }), v]
                                }, x))
                            })]
                        })
                    }), d.jsx("div", {
                        className: "lg:col-span-3",
                        children: d.jsxs(A.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "h-[600px] bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20 backdrop-blur-xl rounded-xl border border-red-500/20 overflow-hidden",
                            children: [d.jsxs("div", {
                                className: "border-b border-red-500/20",
                                children: [d.jsxs("div", {
                                    className: "flex items-center gap-1 px-2",
                                    children: [e.map(v => d.jsxs(A.button, {
                                        onClick: () => r(v.id),
                                        className: `group relative px-4 py-3 flex items-center gap-2 transition-all ${n===v.id?"bg-[#1a1a1a] text-white":"text-gray-400 hover:text-white"}`,
                                        children: [d.jsx(zr, {
                                            className: "w-4 h-4"
                                        }), v.name, e.length > 1 && d.jsx(mu, {
                                            className: "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                            onClick: x => h(v.id, x)
                                        }), n === v.id && d.jsx(A.div, {
                                            layoutId: "active-tab",
                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                                        })]
                                    }, v.id)), d.jsx(A.button, {
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        whileTap: {
                                            scale: .9
                                        },
                                        onClick: f,
                                        className: "p-2 text-gray-400 hover:text-white transition-colors",
                                        children: d.jsx($1, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                }), d.jsxs("div", {
                                    className: "border-t border-red-500/20 p-4 flex justify-between items-center",
                                    children: [d.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [d.jsx("div", {
                                            className: "p-2 rounded-lg bg-red-500/10",
                                            children: d.jsx(zr, {
                                                className: "w-5 h-5 text-red-500"
                                            })
                                        }), d.jsx("h2", {
                                            className: "text-xl font-semibold",
                                            children: "Editor"
                                        })]
                                    }), d.jsxs("div", {
                                        className: "flex gap-3",
                                        children: [d.jsxs(A.button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            onClick: s,
                                            className: "flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors",
                                            children: [d.jsx(X1, {
                                                className: "w-4 h-4"
                                            }), "Clear"]
                                        }), d.jsxs(A.button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            onClick: o,
                                            className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-colors",
                                            children: [d.jsx(um, {
                                                className: "w-4 h-4"
                                            }), "Execute"]
                                        })]
                                    })]
                                })]
                            }), d.jsx("div", {
                                className: "h-[calc(100%-121px)]",
                                children: d.jsx(UP, {
                                    height: "100%",
                                    defaultLanguage: "lua",
                                    theme: "vs-dark",
                                    value: i,
                                    onChange: u,
                                    options: {
                                        fontSize: 14,
                                        minimap: {
                                            enabled: !1
                                        },
                                        scrollBeyondLastLine: !1,
                                        fontFamily: "JetBrains Mono, monospace",
                                        padding: {
                                            top: 16
                                        },
                                        automaticLayout: !0
                                    },
                                    saveViewState: !1
                                })
                            })]
                        })
                    })]
                })]
            })
        })
    },
    WP = () => {
        const [e, t] = w.useState(() => localStorage.getItem("robloxUsername") || ""), n = Tn(), r = pu(), i = [{
            icon: d.jsx(_1, {
                size: 20
            }),
            text: "Dashboard",
            path: "/dsqdsqdsq"
        }, {
            icon: d.jsx(zr, {
                size: 20
            }),
            text: "Executor",
            path: "/dashboard/executor"
        }, {
            icon: d.jsx(md, {
                size: 20
            }),
            text: "Games",
            path: "/dashboard/games"
        }, {
            icon: d.jsx(ls, {
                size: 20
            }),
            text: "Staff Panel",
            path: "/dashboard/staff"
        }, {
            icon: d.jsx(G1, {
                size: 20
            }),
            text: "Settings",
            path: "/dashboard/settings"
        }], o = () => {
            r("/")
        }, s = c => {
            const f = c.target.value;
            t(f), localStorage.setItem("robloxUsername", f)
        }, a = c => {
            c.preventDefault(), localStorage.setItem("robloxUsername", e)
        }, l = [{
            icon: d.jsx(k1, {
                className: "w-5 h-5"
            }),
            label: "Uptime",
            value: "99.9%"
        }, {
            icon: d.jsx(cm, {
                className: "w-5 h-5"
            }),
            label: "Scripts Executed",
            value: "1,234"
        }, {
            icon: d.jsx(us, {
                className: "w-5 h-5"
            }),
            label: "Active Users",
            value: "50K+"
        }, {
            icon: d.jsx(md, {
                className: "w-5 h-5"
            }),
            label: "Games",
            value: "100+"
        }], u = () => d.jsx("div", {
            className: "p-8",
            children: d.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "max-w-7xl mx-auto",
                children: [d.jsxs(A.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .3
                    },
                    className: "mb-8",
                    children: [d.jsx("h1", {
                        className: "text-4xl font-bold mb-2",
                        children: "Welcome back!"
                    }), d.jsx("p", {
                        className: "text-gray-400",
                        children: "Here's what's happening with your account today."
                    })]
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: l.map((c, f) => d.jsx(A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: f * .1
                        },
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300",
                        children: d.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [d.jsx("div", {
                                className: "p-3 bg-red-500/10 rounded-xl text-red-500",
                                children: c.icon
                            }), d.jsxs("div", {
                                children: [d.jsx("p", {
                                    className: "text-sm text-gray-400",
                                    children: c.label
                                }), d.jsx("p", {
                                    className: "text-2xl font-bold",
                                    children: c.value
                                })]
                            })]
                        })
                    }, f))
                }), d.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [d.jsxs(A.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20",
                        children: [d.jsx("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Roblox Username"
                        }), d.jsxs("form", {
                            onSubmit: a,
                            className: "flex gap-4",
                            children: [d.jsx("input", {
                                type: "text",
                                value: e,
                                onChange: s,
                                placeholder: "Enter your Roblox username",
                                className: "flex-1 bg-[#0a0a0a] border border-red-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition-all"
                            }), d.jsx(A.button, {
                                type: "submit",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                className: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg transition-all",
                                children: "Save"
                            })]
                        })]
                    }), d.jsxs(A.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "bg-gradient-to-br from-[#1a1a1a]/80 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20",
                        children: [d.jsx("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "License Information"
                        }), d.jsxs("div", {
                            className: "space-y-4",
                            children: [d.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [d.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Type"
                                }), d.jsx("span", {
                                    className: "font-semibold text-red-500",
                                    children: "Premium"
                                })]
                            }), d.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [d.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Status"
                                }), d.jsx("span", {
                                    className: "px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-sm",
                                    children: "Active"
                                })]
                            }), d.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [d.jsx("span", {
                                    className: "text-gray-400",
                                    children: "Expiration"
                                }), d.jsx("span", {
                                    children: "Never"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        });
        return d.jsxs("div", {
            className: "min-h-screen bg-[#0a0a0a] flex",
            children: [d.jsxs(A.div, {
                initial: {
                    x: -200
                },
                animate: {
                    x: 0
                },
                className: "w-64 h-screen bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a0000]/80 to-[#1a1a1a]/70 backdrop-blur-xl border-r border-red-500/20 fixed left-0 top-0",
                children: [d.jsxs("div", {
                    className: "p-6",
                    children: [d.jsxs(A.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: .2
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        className: "flex items-center gap-3 mb-8 cursor-pointer",
                        onClick: () => r("/"),
                        children: [d.jsx(A.img, {
                            src: "https://cdn.discordapp.com/icons/1304868625001480372/365172bc8b171ce63cb63a84316fc049.webp?size=512&format=webp",
                            alt: "nigga hack logo",
                            className: "h-10 w-10 rounded-full",
                            whileHover: {
                                rotate: 360
                            },
                            transition: {
                                duration: .8
                            }
                        }), d.jsx("span", {
                            className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700",
                            children: "nigga hack"
                        })]
                    }), d.jsx("div", {
                        className: "space-y-2",
                        children: i.map((c, f) => d.jsx(A.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: f * .1
                            },
                            children: d.jsxs(Bn, {
                                to: c.path,
                                className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative overflow-hidden group ${n.pathname===c.path?"text-white":"text-gray-400 hover:text-white"}`,
                                children: [d.jsx("span", {
                                    className: "relative z-10 transition-transform group-hover:scale-110",
                                    children: c.icon
                                }), d.jsx("span", {
                                    className: "relative z-10",
                                    children: c.text
                                }), n.pathname === c.path ? d.jsx(A.div, {
                                    layoutId: "active-link",
                                    className: "absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-700/20 border border-red-500/40",
                                    transition: {
                                        type: "spring",
                                        bounce: .2
                                    }
                                }) : d.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent to-transparent hover:from-red-500/10 hover:to-red-700/10 transition-all duration-300"
                                })]
                            })
                        }, c.text))
                    })]
                }), d.jsx(A.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .5
                    },
                    className: "absolute bottom-0 w-full p-4 border-t border-red-500/20 bg-gradient-to-t from-[#1a0000]/50 to-transparent",
                    children: d.jsxs(A.button, {
                        onClick: o,
                        whileHover: {
                            x: 5
                        },
                        className: "flex items-center gap-2 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full group rounded-lg hover:bg-red-500/10",
                        children: [d.jsx(F1, {
                            size: 20,
                            className: "group-hover:translate-x-1 transition-transform"
                        }), d.jsx("span", {
                            children: "Logout"
                        })]
                    })
                })]
            }), d.jsx("div", {
                className: "ml-64 flex-1 bg-gradient-to-br from-black via-[#1a0000] to-black",
                children: d.jsxs(am, {
                    children: [d.jsx(tt, {
                        index: !0,
                        element: d.jsx(u, {})
                    }), d.jsx(tt, {
                        path: "executor",
                        element: d.jsx($P, {})
                    }), d.jsx(tt, {
                        path: "games",
                        element: d.jsx(Dk, {})
                    }), d.jsx(tt, {
                        path: "staff",
                        element: d.jsx(Ok, {})
                    })]
                })
            })]
        })
    },
    HP = () => {
        const e = [{
                icon: d.jsx(O1, {
                    className: "w-5 h-5"
                }),
                href: "#"
            }, {
                icon: d.jsx(q1, {
                    className: "w-5 h-5"
                }),
                href: "#"
            }, {
                icon: d.jsx(J1, {
                    className: "w-5 h-5"
                }),
                href: "https://www.youtube.com/@SaintAdminTeam"
            }],
            t = {
                "Quick Links": [{
                    name: "Home",
                    path: "/"
                }, {
                    name: "Pricing",
                    path: "/pricing"
                }, {
                    name: "Showcases",
                    path: "/showcases"
                }, {
                    name: "Discord",
                    href: "https://discord.gg/serversidez"
                }],
                Legal: [{
                    name: "Terms of Service",
                    path: "/terms"
                }, {
                    name: "Privacy Policy",
                    path: "/privacy"
                }]
            },
            n = {
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .1
                    }
                }
            },
            r = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                show: {
                    opacity: 1,
                    y: 0
                }
            };
        return d.jsxs("footer", {
            className: "relative overflow-hidden",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"
            }), d.jsx("div", {
                className: "relative bg-gradient-to-b from-[#0a0a0a]/90 to-[#1a0000]/90 backdrop-blur-xl border-t border-red-500/10 pt-16 pb-8",
                children: d.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [d.jsxs(A.div, {
                        variants: n,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        className: "grid grid-cols-1 md:grid-cols-4 gap-12",
                        children: [d.jsxs(A.div, {
                            variants: r,
                            className: "col-span-1 md:col-span-2",
                            children: [d.jsxs("div", {
                                className: "flex items-center mb-6",
                                children: [d.jsx("img", {
                                    src: "https://cdn.discordapp.com/icons/1304868625001480372/365172bc8b171ce63cb63a84316fc049.webp?size=512&format=webp",
                                    alt: "nigga hack Logo",
                                    className: "h-12 w-12 rounded-full"
                                }), d.jsx("span", {
                                    className: "ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700",
                                    children: "nigga hack"
                                })]
                            }), d.jsx("p", {
                                className: "text-gray-400 mb-6 max-w-md",
                                children: "The most powerful and user-friendly Roblox admin panel, providing you with ultimate control and seamless execution."
                            }), d.jsx("div", {
                                className: "flex space-x-4",
                                children: e.map((i, o) => d.jsx(A.a, {
                                    href: i.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    whileHover: {
                                        scale: 1.1,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "bg-gradient-to-br from-red-500/10 to-red-700/10 hover:from-red-500/20 hover:to-red-700/20 p-3 rounded-lg transition-all",
                                    children: i.icon
                                }, o))
                            })]
                        }), Object.entries(t).map(([i, o], s) => d.jsxs(A.div, {
                            variants: r,
                            children: [d.jsx("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: i
                            }), d.jsx(A.ul, {
                                variants: n,
                                initial: "hidden",
                                whileInView: "show",
                                className: "space-y-3",
                                children: o.map((a, l) => d.jsx(A.li, {
                                    variants: r,
                                    whileHover: {
                                        x: 5
                                    },
                                    children: a.path ? d.jsxs(Bn, {
                                        to: a.path,
                                        className: "text-gray-400 hover:text-white transition-colors relative group inline-flex items-center",
                                        children: [a.name, d.jsx(pd, {
                                            className: "w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all"
                                        })]
                                    }) : d.jsxs("a", {
                                        href: a.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-white transition-colors relative group inline-flex items-center",
                                        children: [a.name, d.jsx(pd, {
                                            className: "w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all"
                                        })]
                                    })
                                }, a.name))
                            })]
                        }, i))]
                    }), d.jsx(A.div, {
                        variants: r,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        className: "mt-12 pt-8 border-t border-red-500/10 text-center",
                        children: d.jsxs("p", {
                            className: "text-gray-400",
                            children: ["© ", new Date().getFullYear(), " nigga hack. All rights reserved."]
                        })
                    })]
                })
            }), d.jsxs("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [d.jsx("div", {
                    className: "absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"
                }), d.jsx("div", {
                    className: "absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"
                })]
            })]
        })
    },
    KP = () => {
        const t = !Tn().pathname.startsWith("/dashboard");
        return d.jsxs("div", {
            className: "min-h-screen bg-[#0a0a0a] starry-bg",
            children: [d.jsx(jk, {}), d.jsxs(am, {
                children: [d.jsx(tt, {
                    path: "/",
                    element: d.jsx(Nk, {})
                }), d.jsx(tt, {
                    path: "/pricing",
                    element: d.jsx(Rk, {})
                }), d.jsx(tt, {
                    path: "/showcases",
                    element: d.jsx(Lk, {})
                }), d.jsx(tt, {
                    path: "/terms",
                    element: d.jsx(bk, {})
                }), d.jsx(tt, {
                    path: "/privacy",
                    element: d.jsx(Vk, {})
                }), d.jsx(tt, {
                    path: "/dashboard/*",
                    element: d.jsx(WP, {})
                })]
            }), t && d.jsx(HP, {})]
        })
    };

function GP() {
    return d.jsx(g1, {
        children: d.jsx(KP, {})
    })
}
Qp(document.getElementById("root")).render(d.jsx(w.StrictMode, {
    children: d.jsx(GP, {})
}));
