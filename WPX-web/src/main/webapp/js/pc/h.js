(function () {
    var h = {}, mt = {}, c = {
        id: "0d8c8e0c89f9c63e43a87823376c485e",
        dm: ["wbg.do1.com.cn"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '',
        ctrk: true,
        align: 1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 1,
        vcard: 5900542,
        qiao: 0,
        lxb: 0,
        conv: 0,
        comm: 0,
        apps: ''
    };
    var p = !0, q = null, r = !1;
    mt.h = {};
    mt.h.Aa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.h.cookieEnabled = navigator.cookieEnabled;
    mt.h.javaEnabled = navigator.javaEnabled();
    mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.h.Ca = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.h.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {};
    mt.cookie.set = function (a, b, e) {
        var d;
        e.G && (d = new Date, d.setTime(d.getTime() + e.G));
        document.cookie = a + "=" + b + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.Qa ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : q
    };
    mt.o = {};
    mt.o.ma = function (a) {
        return document.getElementById(a)
    };
    mt.o.na = function (a) {
        var b;
        for (b = "A"; (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == b)return a;
        return q
    };
    (mt.o.V = function () {
        function a() {
            if (!a.A) {
                a.A = p;
                for (var b = 0, e = d.length; b < e; b++)d[b]()
            }
        }

        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return
            }
            a()
        }

        var e = r, d = [], k;
        document.addEventListener ? k = function () {
            document.removeEventListener("DOMContentLoaded", k, r);
            a()
        } : document.attachEvent && (k = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", k), a())
        });
        (function () {
            if (!e)if (e = p, "complete" === document.readyState)a.A = p; else if (document.addEventListener)document.addEventListener("DOMContentLoaded",
                k, r), window.addEventListener("load", a, r); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", k);
                window.attachEvent("onload", a);
                var d = r;
                try {
                    d = window.frameElement == q
                } catch (n) {
                }
                document.documentElement.doScroll && d && b()
            }
        })();
        return function (b) {
            a.A ? b() : d.push(b)
        }
    }()).A = r;
    mt.event = {};
    mt.event.c = function (a, b, e) {
        a.attachEvent ? a.attachEvent("on" + b, function (d) {
            e.call(a, d)
        }) : a.addEventListener && a.addEventListener(b, e, r)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = r
    };
    mt.j = {};
    mt.j.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.j.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = e[a];
                if (d)return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var e = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return a(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === q)return "null";
                    if (d instanceof Array) {
                        var e = ["["], l = d.length, n, f, g;
                        for (f = 0; f < l; f++)switch (g = d[f], typeof g) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                n && e.push(","), e.push(mt.j.stringify(g)), n = 1
                        }
                        e.push("]");
                        return e.join("")
                    }
                    if (d instanceof Date)return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                    n = ["{"];
                    f = mt.j.stringify;
                    for (l in d)if (Object.prototype.hasOwnProperty.call(d, l))switch (g =
                        d[l], typeof g) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            e && n.push(","), e = 1, n.push(f(l) + ":" + f(g))
                    }
                    n.push("}");
                    return n.join("")
            }
        }
    }();
    mt.lang = {};
    mt.lang.e = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Na = function (a) {
        return mt.lang.e(a, "Number") && isFinite(a)
    };
    mt.lang.Pa = function (a) {
        return mt.lang.e(a, "String")
    };
    mt.localStorage = {};
    mt.localStorage.D = function () {
        if (!mt.localStorage.f)try {
            mt.localStorage.f = document.createElement("input"), mt.localStorage.f.type = "hidden", mt.localStorage.f.style.display = "none", mt.localStorage.f.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)
        } catch (a) {
            return r
        }
        return p
    };
    mt.localStorage.set = function (a, b, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (b = d.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.D() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname))
        } catch (k) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), e = a.substring(0, b) - 0;
                if (e && e > (new Date).getTime())return a.substring(b + 1)
            }
        } else if (mt.localStorage.D())try {
            return mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.getAttribute(a)
        } catch (d) {
        }
        return q
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage)window.localStorage.removeItem(a); else if (mt.localStorage.D())try {
            mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.removeAttribute(a), mt.localStorage.f.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        if (window.sessionStorage)try {
            window.sessionStorage.setItem(a, b)
        } catch (e) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : q
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.X = {};
    mt.X.log = function (a, b) {
        var e = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = e.onerror = e.onabort = function () {
            e.onload = e.onerror = e.onabort = q;
            e = window[d] = q;
            b && b(a)
        };
        e.src = a
    };
    mt.N = {};
    mt.N.ta = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {
        }
        return a
    };
    mt.N.Ia = function (a, b, e, d, k) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (k || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + e + '" height="' + d + '" src="' + b + '" flashvars="' + (k || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.i = function (a, b) {
        var e = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : q
    };
    mt.url.La = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : q
    };
    mt.url.qa = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : q
    };
    mt.url.R = function (a) {
        return (a = mt.url.qa(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ka = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : q
    };
    h.l = {
        Ma: "http://tongji.baidu.com/hm-web/welcome/ico",
        L: "hm.baidu.com/hm.gif",
        aa: "baidu.com",
        wa: "hmmd",
        xa: "hmpl",
        va: "hmkw",
        ua: "hmci",
        ya: "hmsr",
        q: 0,
        k: Math.round(+new Date / 1E3),
        protocol: "https:" == document.location.protocol ? "https:" : "http:",
        Oa: 0,
        fa: 6E5,
        ga: 10,
        O: 1024,
        ea: 1,
        r: 2147483647,
        Y: "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
    };
    (function () {
        var a = {
            m: {}, c: function (a, e) {
                this.m[a] = this.m[a] || [];
                this.m[a].push(e)
            }, w: function (a, e) {
                this.m[a] = this.m[a] || [];
                for (var d = this.m[a].length, k = 0; k < d; k++)this.m[a][k](e)
            }
        };
        return h.p = a
    })();
    (function () {
        function a(a, d) {
            var k = document.createElement("script");
            k.charset = "utf-8";
            b.e(d, "Function") && (k.readyState ? k.onreadystatechange = function () {
                if ("loaded" === k.readyState || "complete" === k.readyState)k.onreadystatechange = q, d()
            } : k.onload = function () {
                d()
            });
            k.src = a;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(k, l)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            var a = "";
            h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? e.set("Hm_from_" + c.id, a) : b.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? e.get("Hm_from_" + c.id) : b.get("Hm_from_" + c.id)) || "";
            return a
        }

        var b = mt.localStorage, e = mt.sessionStorage;
        return h.P = a
    })();
    (function () {
        var a = mt.o, b = mt.event, e = mt.h, d = h.l, k = [], l = {
            Z: function () {
                c.ctrk && (b.c(document, "mouseup", l.da()), b.c(window, "unload", function () {
                    l.B()
                }), setInterval(function () {
                    l.B()
                }, d.fa))
            }, da: function () {
                return function (a) {
                    a = l.oa(a);
                    if ("" !== a) {
                        var b = (d.protocol + "//" + d.L + "?" + h.b.W().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + a + "]"))).length;
                        b + (d.r + "").length > d.O || (b + encodeURIComponent(k.join(",") + (k.length ? "," : "")).length + (d.r + "").length > d.O && l.B(), k.push(a), (k.length >= d.ga || /t:a/.test(a)) && l.B())
                    }
                }
            },
            oa: function (b) {
                if (0 === d.ea) {
                    var f = b.target || b.srcElement, g = f.tagName.toLowerCase();
                    if ("embed" == g || "object" == g)return ""
                }
                e.Aa ? (f = Math.max(document.documentElement.scrollTop, document.body.scrollTop), g = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), g = b.clientX + g, f = b.clientY + f) : (g = b.pageX, f = b.pageY);
                var m = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        g -= m / 2;
                        break;
                    case 2:
                        g -= m
                }
                g = "{x:" + g + ",y:" + f + ",";
                f = b.target || b.srcElement;
                return g = (b = "a" == f.tagName.toLowerCase() ? f : a.na(f)) ? g + ("t:a,u:" + encodeURIComponent(b.href) + "}") : g + "t:b}"
            }, B: function () {
                0 !== k.length && (h.b.a.et = 2, h.b.a.ep = "[" + k.join(",") + "]", h.b.g(), k = [])
            }
        };
        h.p.c("pv-b", l.Z);
        return l
    })();
    (function () {
        var a = mt.o, b = h.l, e = h.load, d = h.P;
        h.p.c("pv-b", function () {
            c.rec && a.V(function () {
                for (var k = 0, l = c.rp.length; k < l; k++) {
                    var n = c.rp[k][0], f = c.rp[k][1], g = a.ma("hm_t_" + n);
                    if (f && !(2 == f && !g || g && "" !== g.innerHTML))g = "", g = Math.round(Math.random() * b.r), g = 4 == f ? "http://crs.baidu.com/hl.js?" + ["siteId=" + c.id, "planId=" + n, "rnd=" + g].join("&") : "http://crs.baidu.com/t.js?" + ["siteId=" + c.id, "planId=" + n, "from=" + d(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    g].join("&"), e(g)
                }
            })
        })
    })();
    (function () {
        var a = h.l, b = h.load, e = h.P;
        h.p.c("pv-b", function () {
            if (c.trust && c.vcard) {
                var d = a.protocol + "//trust.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + e(), "rnd=" + Math.round(Math.random() * a.r)].join("&");
                b(d)
            }
        })
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.F.ra() + "," + h.F.pa();
                h.b.g()
            }
        }

        function b() {
            clearTimeout(x);
            var a;
            w && (a = "visible" == document[w]);
            y && (a = !document[y]);
            f = "undefined" == typeof a ? p : a;
            if ((!n || !g) && f && m)u = p, t = +new Date; else if (n && g && (!f || !m))u = r, s += +new Date - t;
            n = f;
            g = m;
            x = setTimeout(b, 100)
        }

        function e(a) {
            var g = document, t = "";
            if (a in g)t = a; else for (var s = ["webkit", "ms", "moz", "o"], b = 0; b < s.length; b++) {
                var d = s[b] + a.charAt(0).toUpperCase() + a.slice(1);
                if (d in g) {
                    t =
                        d;
                    break
                }
            }
            return t
        }

        function d(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window))m = "focus" == a.type || "focusin" == a.type ? p : r, b()
        }

        var k = mt.event, l = h.p, n = p, f = p, g = p, m = p, v = +new Date, t = v, s = 0, u = p, w = e("visibilityState"), y = e("hidden"), x;
        b();
        (function () {
            var a = w.replace(/[vV]isibilityState/, "visibilitychange");
            k.c(document, a, b);
            k.c(window, "pageshow", b);
            k.c(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (k.c(document, "focusin", d), k.c(document, "focusout", d)) : (k.c(window, "focus", d),
                k.c(window, "blur", d))
        })();
        h.F = {
            ra: function () {
                return +new Date - v
            }, pa: function () {
                return u ? +new Date - t + s : s
            }
        };
        l.c("pv-b", function () {
            k.c(window, "unload", a())
        });
        return h.F
    })();
    (function () {
        var a = mt.lang, b = h.l, e = h.load, d = {
            za: function (d) {
                if ((void 0 === window._dxt || a.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var l = h.b.H();
                    e([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), d)
                }
            }, Ha: function (b) {
                if (a.e(b, "String") || a.e(b, "Number"))window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.ha = d
    })();
    (function () {
        function a(g) {
            for (var b in g)if ({}.hasOwnProperty.call(g, b)) {
                var d = g[b];
                e.e(d, "Object") || e.e(d, "Array") ? a(d) : g[b] = String(d)
            }
        }

        function b(a) {
            return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
        }

        var e = mt.lang, d = mt.j, k = h.l, l = h.p, n = h.ha, f = {
            S: q, s: [], C: 0, T: r, init: function () {
                f.d = 0;
                f.S = {
                    push: function () {
                        f.K.apply(f, arguments)
                    }
                };
                l.c("pv-b", function () {
                    f.ia();
                    f.ka()
                });
                l.c("pv-d", f.la);
                l.c("stag-b", function () {
                    h.b.a.api = f.d || f.C ? f.d + "_" + f.C : ""
                });
                l.c("stag-d", function () {
                    h.b.a.api =
                        0;
                    f.d = 0;
                    f.C = 0
                })
            }, ia: function () {
                var a = window._hmt;
                if (a && a.length)for (var b = 0; b < a.length; b++) {
                    var d = a[b];
                    switch (d[0]) {
                        case "_setAccount":
                            1 < d.length && /^[0-9a-z]{32}$/.test(d[1]) && (f.d |= 1, window._bdhm_account = d[1]);
                            break;
                        case "_setAutoPageview":
                            if (1 < d.length && (d = d[1], r === d || p === d))f.d |= 2, window._bdhm_autoPageview = d
                    }
                }
            }, ka: function () {
                if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                    window._bdhm_account = c.id;
                    var a = window._hmt;
                    if (a && a.length)for (var d = 0, b = a.length; d < b; d++)e.e(a[d],
                        "Array") && "_trackEvent" !== a[d][0] && "_trackRTEvent" !== a[d][0] ? f.K(a[d]) : f.s.push(a[d]);
                    window._hmt = f.S
                }
            }, la: function () {
                if (0 < f.s.length)for (var a = 0, d = f.s.length; a < d; a++)f.K(f.s[a]);
                f.s = q
            }, K: function (a) {
                if (e.e(a, "Array")) {
                    var d = a[0];
                    if (f.hasOwnProperty(d) && e.e(f[d], "Function"))f[d](a)
                }
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                    f.d |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.I ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.I = p;
                    var d = h.b.a.u, b = h.b.a.su;
                    h.b.a.u = k.protocol + "//" + document.location.host +
                    a[1];
                    f.T || (h.b.a.su = document.location.href);
                    h.b.g();
                    h.b.a.u = d;
                    h.b.a.su = b
                }
            }, _trackEvent: function (a) {
                2 < a.length && (f.d |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), h.b.g())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var d = a[1], e = a[4] || 3;
                    if (0 < d && 6 > d && 0 < e && 4 > e) {
                        f.C++;
                        for (var t = (h.b.a.cv || "*").split("!"), s = t.length; s < d - 1; s++)t.push("*");
                        t[d - 1] = e + "*" + b(a[2]) + "*" + b(a[3]);
                        h.b.a.cv = t.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g,
                            "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ba("Hm_cv_" + c.id)
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 < a.length && (h.b.a.su = a[1].charAt && "/" == a[1].charAt(0) ? k.protocol + "//" + window.location.host + a[1] : a[1], f.T = p)
            }, _trackOrder: function (b) {
                b = b[1];
                e.e(b, "Object") && (a(b), f.d |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.g())
            }, _trackMobConv: function (a) {
                if (a = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }[a[1]])f.d |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.g()
            }, _trackRTPageview: function (b) {
                b =
                    b[1];
                e.e(b, "Object") && (a(b), b = d.stringify(b), 512 >= encodeURIComponent(b).length && (f.d |= 64, h.b.a.rt = b))
            }, _trackRTEvent: function (b) {
                b = b[1];
                if (e.e(b, "Object")) {
                    a(b);
                    b = encodeURIComponent(d.stringify(b));
                    var m = function (a) {
                        var b = h.b.a.rt;
                        f.d |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.g();
                        h.b.a.rt = b
                    }, l = b.length;
                    if (900 >= l)m.call(this, b); else for (var l = Math.ceil(l / 900), t = "block|" + Math.round(Math.random() * k.r).toString(16) + "|" + l + "|", s = [], u = 0; u < l; u++)s.push(u), s.push(b.substring(900 * u, 900 * u + 900)), m.call(this, t + s.join("|")),
                        s = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                n.za();
                n.Ha(a)
            }
        };
        f.init();
        h.ba = f;
        return h.ba
    })();
    (function () {
        function a() {
            "undefined" == typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = p, this.a = {}, this.I = r, this.init())
        }

        var b = mt.url, e = mt.X, d = mt.N, k = mt.lang, l = mt.cookie, n = mt.h, f = mt.localStorage, g = mt.sessionStorage, m = h.l, v = h.p;
        a.prototype = {
            J: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length == a.length
            }, U: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, z: function (a) {
                for (var d = 0; d < c.dm.length; d++)if (-1 <
                    c.dm[d].indexOf("/")) {
                    if (this.U(a, c.dm[d]))return p
                } else {
                    var e = b.R(a);
                    if (e && this.J(e, c.dm[d]))return p
                }
                return r
            }, H: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)if (this.J(a, c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, Q: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.U(document.location.href, d))return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, sa: function () {
                if (!document.referrer)return m.k - m.q > c.vdur ? 1 : 4;
                var a =
                    r;
                this.z(document.referrer) && this.z(document.location.href) ? a = p : (a = b.R(document.referrer), a = this.J(a || "", document.location.hostname));
                return a ? m.k - m.q > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return l.get(a) || g.get(a) || f.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    l.set(a, b, {domain: this.H(), path: this.Q(), G: d}), d ? f.set(a, b, d) : g.set(a, b)
                } catch (e) {
                }
            }, Ba: function (a) {
                try {
                    l.set(a, "", {domain: this.H(), path: this.Q(), G: -1}), g.remove(a), f.remove(a)
                } catch (b) {
                }
            }, Fa: function () {
                var a, b, d, e, f;
                m.q = this.getData("Hm_lpvt_" +
                c.id) || 0;
                13 == m.q.length && (m.q = Math.round(m.q / 1E3));
                b = this.sa();
                a = 4 != b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--)13 == e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < m.k - e[0];)e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(m.k); 4 < e.length;)e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = m.k, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, m.k);
                d = m.k == this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.z(document.location.href) &&
                    ("" === document.referrer || this.z(document.referrer)))a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            }, W: function () {
                for (var a = [], b = 0, d = m.Y.length; b < d; b++) {
                    var e = m.Y[b], f = this.a[e];
                    "undefined" != typeof f && "" !== f && a.push(e + "=" + encodeURIComponent(f))
                }
                b = this.a.et;
                this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
                return a.join("&")
            }, Ga: function () {
                this.Fa();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = n.Ca;
                this.a.cl = n.colorDepth + "-bit";
                this.a.ln = n.language;
                this.a.ja = n.javaEnabled ? 1 : 0;
                this.a.ck = n.cookieEnabled ? 1 : 0;
                this.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
                this.a.fl = d.ta();
                this.a.v = "1.1.2";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                1 == this.a.nv && (this.a.tt = document.title || "");
                var a = document.location.href;
                this.a.cm = b.i(a, m.wa) || "";
                this.a.cp = b.i(a, m.xa) || "";
                this.a.cw = b.i(a, m.va) || "";
                this.a.ci = b.i(a, m.ua) || "";
                this.a.cf = b.i(a, m.ya) || ""
            }, init: function () {
                try {
                    this.Ga(), 0 === this.a.nv ? this.Ea() : this.M(".*"), h.b = this, this.ca(),
                        v.w("pv-b"), this.Da()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(m.protocol + "//" + m.L + "?" + b.join("&"))
                }
            }, Da: function () {
                function a() {
                    v.w("pv-d")
                }

                "undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === p ? (this.I = p, this.a.et = 0, this.a.ep = "", this.g(a)) : a()
            }, g: function (a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * m.r);
                v.w("stag-b");
                var d = m.protocol + "//" +
                    m.L + "?" + b.W();
                v.w("stag-d");
                b.$(d);
                e.log(d, function (d) {
                    b.M(d);
                    k.e(a, "Function") && a.call(b)
                })
            }, ca: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id), e = -1 < document.referrer.indexOf(m.aa) ? p : r, f = b.i(a, "jn"), k = /^heatlink$|^select$/.test(f);
                a && (d.test(a) && e && k) && (a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", m.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a,
                    f))
            }, $: function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "", d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href), b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                g.set("Hm_unsent_" + c.id, b)
            }, M: function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "";
                b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? g.set("Hm_unsent_" + c.id, b) : g.remove("Hm_unsent_" + c.id))
            }, Ea: function () {
                var a = this, b = g.get("Hm_unsent_" +
                c.id);
                if (b)for (var b = b.split(","), d = function (b) {
                    e.log(m.protocol + "//" + decodeURIComponent(b).replace(/^https?:\/\//, ""), function (b) {
                        a.M(b)
                    })
                }, f = 0, k = b.length; f < k; f++)d(b[f])
            }
        };
        return new a
    })();
    (function () {
        var a = mt.o, b = mt.event, e = mt.url, d = mt.j;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var k = +new Date, l = function (a) {
                    var b = performance.timing, d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {start: d, end: a, value: 0 < a - d ? a - d : 0}
                }, n = q;
                a.V(function () {
                    n = +new Date
                });
                var f = function () {
                    var a, b, f;
                    f = l("navigation");
                    b = l("request");
                    f = {
                        netAll: b.start - f.start,
                        netDns: l("domainLookup").value,
                        netTcp: l("connect").value,
                        srv: l("response").start - b.start,
                        dom: performance.timing.domInteractive -
                        performance.timing.fetchStart,
                        loadEvent: l("loadEvent").end - f.start
                    };
                    a = document.referrer;
                    var g = q;
                    b = q;
                    if ("www.baidu.com" === (a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [])[2])g = e.i(a, "qid"), b = e.i(a, "click_t");
                    a = g;
                    f.qid = a != q ? a : "";
                    b != q ? (f.bdDom = n ? n - b : 0, f.bdRun = k - b, f.bdDef = l("navigation").start - b) : (f.bdDom = 0, f.bdRun = 0, f.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = d.stringify(f);
                    h.b.g()
                };
                b.c(window, "load", function () {
                    setTimeout(f, 500)
                })
            }
        } catch (g) {
        }
    })();
    (function () {
        var a = h.l, b = {
            init: function () {
                try {
                    if ("http:" === a.protocol) {
                        var b = document.createElement("IFRAME");
                        b.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
                        b.style.display = "none";
                        b.style.width = "1";
                        b.style.height = "1";
                        b.Ja = "0";
                        document.body.appendChild(b)
                    }
                } catch (e) {
                }
            }
        }, e = navigator.userAgent.toLowerCase();
        -1 < e.indexOf("android") && -1 === e.indexOf("micromessenger") && b.init()
    })();
    (function () {
        var a = mt.lang, b = mt.event, e = mt.j;
        if (c.comm && "undefined" !== typeof h.b) {
            var d = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;)d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, k = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
                click: function () {
                    for (var a = [], b = d(document.getElementsByTagName("a")), b = [].concat.apply(b, d(document.getElementsByTagName("area"))), b = [].concat.apply(b, d(document.getElementsByTagName("img"))), e = 0, f = b.length; e < f; e++) {
                        var g = b[e],
                            l = g.getAttribute("onclick"), g = g.getAttribute("href");
                        (k.test(l) || k.test(g)) && a.push(b[e])
                    }
                    return a
                }
            }, n = function (a, b) {
                for (var d in a)if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === r)return r
            }, f = function (b, d) {
                var f = {n: "swt", t: "clk"};
                f.v = b;
                if (d) {
                    var g = d.getAttribute("href"), l = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : q, m = d.getAttribute("id") || "";
                    k.test(g) ? (f.sn = "mediate", f.snv = g) : a.e(l, "String") && k.test(l) && (f.sn = "wrap", f.snv = l);
                    f.id = m
                }
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(f);
                h.b.g();
                for (f = +new Date; 500 >=
                +new Date - f;);
            }, g, m = "/zoosnet" + (/\/$/.test("/zoosnet") ? "" : "/"), v = function (b, d) {
                if (g === d)return f(m + b, d), r;
                if (a.e(d, "Array") || a.e(d, "NodeList"))for (var e = 0, k = d.length; e < k; e++)if (g === d[e])return f(m + b + "/" + (e + 1), d[e]), r
            };
            b.c(document, "click", function (b) {
                b = b || window.event;
                g = b.target || b.srcElement;
                var d = {};
                for (n(l, function (b, e) {
                    d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
                }); g && g !== document && n(d, v) !== r;)g = g.parentNode
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.j;
        if (c.comm && "undefined" !== typeof h.b) {
            var e = +new Date, d = {n: "anti", sb: 0, kb: 0, clk: 0}, k = function () {
                h.b.a.et = 86;
                h.b.a.ep = b.stringify(d);
                h.b.g()
            };
            a.c(document, "click", function () {
                d.clk++
            });
            a.c(document, "keyup", function () {
                d.kb = 1
            });
            a.c(window, "scroll", function () {
                d.sb++
            });
            a.c(window, "unload", function () {
                d.t = +new Date - e;
                k()
            });
            a.c(window, "load", function () {
                setTimeout(k, 5E3)
            })
        }
    })();
})();
