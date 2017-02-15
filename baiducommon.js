T.i18n.currentLocale = "zh-CN";
T.i18n.number.formatNumber = function(a) {
    if (a == null ) {
        return ""
    }
    if (a == "--") {
        return a
    }
    if (isNaN(parseFloat(a))) {
        return a
    }
    return T.i18n.number.format(a, T.i18n.currentLocale)
}
;
T.i18n.number.formatRatio = function(a) {
    if (a == null ) {
        return ""
    }
    if (a == "--") {
        return a
    }
    if (isNaN(parseFloat(a))) {
        if (!isNaN(parseFloat(a.val))) {
            a.val = T.i18n.number.format(a.val, T.i18n.currentLocale) + "%"
        } else {
            if (!isNaN(parseFloat(a.value))) {
                a.value = T.i18n.number.format(a.value, T.i18n.currentLocale) + "%"
            }
        }
        return a
    }
    return T.i18n.number.format(a, T.i18n.currentLocale) + "%"
}
;
T.i18n.number.formatTime = function(d, g) {
    var b, f, h, e, a;
    if (d == "--") {
        return d
    }
    if (g == 2) {
        h = d / 60 | 0;
        e = Math.round(d) - h * 60;
        var c = "";
        if (h) {
            c += h + "&#039;"
        }
        c += e + "&quot;";
        return c
    }
    b = d / (24 * 3600) | 0;
    d = Math.round(d) - b * 24 * 3600;
    f = d / 3600 | 0;
    d = Math.round(d) - f * 3600;
    h = d / 60 | 0;
    e = Math.round(d) - h * 60;
    if (Math.round(b) < 10) {
        b = b > 0 ? "0" + b : ""
    }
    if (Math.round(f) < 10) {
        f = "0" + f
    }
    if (Math.round(h) < 10) {
        h = "0" + h
    }
    if (Math.round(e) < 10) {
        e = "0" + e
    }
    if (b) {
        a = b + " " + f + ":" + h + ":" + e
    } else {
        a = f + ":" + h + ":" + e
    }
    return a
}
;
T.i18n.number.formatData = function(c, b) {
    if (c === "--") {
        return c
    }
    if (c === undefined || c == null ) {
        return "--"
    }
    var a;
    switch (b) {
    case "number":
        a = T.i18n.number.formatNumber(c);
        break;
    case "ratio":
        a = T.i18n.number.formatRatio(c);
        break;
    case "time":
        a = T.i18n.number.formatTime(c);
        break;
    default:
        a = T.i18n.number.formatNumber(c)
    }
    return a
}
;
T.config = T.config || {};
T.config.lineChartDayTimeMap = {
    "0": "00:00 - 00:59",
    "1": "01:00 - 01:59",
    "2": "02:00 - 02:59",
    "3": "03:00 - 03:59",
    "4": "04:00 - 04:59",
    "5": "05:00 - 05:59",
    "6": "06:00 - 06:59",
    "7": "07:00 - 07:59",
    "8": "08:00 - 08:59",
    "9": "09:00 - 09:59",
    "10": "10:00 - 10:59",
    "11": "11:00 - 11:59",
    "12": "12:00 - 12:59",
    "13": "13:00 - 13:59",
    "14": "14:00 - 14:59",
    "15": "15:00 - 15:59",
    "16": "16:00 - 16:59",
    "17": "17:00 - 17:59",
    "18": "18:00 - 18:59",
    "19": "19:00 - 19:59",
    "20": "20:00 - 20:59",
    "21": "21:00 - 21:59",
    "22": "22:00 - 22:59",
    "23": "23:00 - 23:59"
};
baidu.lang.Class.create = function(b, a) {
    return new b(a)
}
;
baidu.form.getValues = function(c, q) {
    c = T.g(c);
    q = q || {};
    var b = c.elements, j = b.length, e = q.replacer || function(r, i) {
        return r
    }
    , g = q.data || [], h, o, p, k, d, a, n, m, l;
    function f(i, r) {
        g.push({
            name: i,
            value: r
        })
    }
    for (h = 0; h < j; h++) {
        o = b[h];
        p = o.name;
        if (!o.disabled && p) {
            k = o.type;
            d = o.value;
            switch (k) {
            case "radio":
            case "checkbox":
                if (!o.checked) {
                    break
                }
            case "number":
            case "textarea":
            case "text":
            case "password":
            case "hidden":
            case "select-one":
                f(p, e(d, p));
                break;
            case "select-multiple":
                a = o.options;
                m = a.length;
                for (n = 0; n < m; n++) {
                    l = a[n];
                    if (l.selected) {
                        f(p, e(l.value, p))
                    }
                }
                break
            }
        }
    }
    return g
}
;
T.splat = function(a) {
    if (a == null ) {
        return []
    }
    if (Object.prototype.toString.call(a) == "[object Array]") {
        return a
    }
    return [a]
}
;
T.createClass = function(a) {
    return T.lang.createClass(function(b) {
        this.options = T.extend(T.object.clone(this.options), T.object.clone(b));
        this._init && this._init()
    }).extend(a)
}
;
T.createUI = function(a) {
    return T.ui.createUI(function(b) {
        this.uiType = this._type;
        this.classPrefix = this._type;
        this.options = T.extend(T.object.clone(this.options), T.object.clone(b));
        this._init && this._init()
    }).extend(a)
}
;
T.inlineTip = function(b) {
    var a = T.g(b);
    if (a) {
        if (T.trim(a.value) == a.defaultValue) {
            T.dom.addClass(a, "gray")
        }
        T.on(a, "focus", function() {
            if (T.trim(this.value) == this.defaultValue) {
                T.dom.removeClass(this, "gray");
                this.value = ""
            }
        });
        T.on(a, "blur", function() {
            if (T.trim(this.value) == "") {
                T.dom.addClass(this, "gray");
                this.value = this.defaultValue
            }
        })
    }
}
;
T.getCornerPosition = function(c, b, d) {
    var c = T.g(c);
    var a = T.dom.getPosition(c);
    switch (b) {
    case "br":
        a.left += c.offsetWidth;
        a.top += c.offsetHeight;
        break;
    case "tr":
        a.left += c.offsetWidth;
        break;
    case "bl":
        a.top += c.offsetHeight;
        break
    }
    if (d) {
        if (d.left) {
            a.left += d.left
        }
        if (d.top) {
            a.top += d.top
        }
    }
    return a
}
;
T.setRelatedPosition = function(b, c, a, d) {
    T.dom.setPosition(b, T.getCornerPosition(c, a, d))
}
;
T.expose = function(a) {
    T.setRelatedPosition(a, a, "tl");
    T.dom.addClass(a, "expose")
}
;
T.unexpose = function(a) {
    T.dom.removeClass(a, "expose")
}
;
baidu.event.ons = function(d, b, a, c) {
    baidu.each(d, function(e) {
        baidu.on(e, b, a, c)
    })
}
;
baidu.event.uns = function(c, b, a) {
    baidu.each(c, function(d) {
        baidu.un(d, b, a)
    })
}
;
baidu.truncat = function(b, a) {
    if (b == null ) {
        return b
    }
    if (b.length > a) {
        return b.substr(0, a - 2) + "..."
    } else {
        return b
    }
}
;
baidu.param = function(b) {
    var a = [];
    baidu.object.each(b, function(d, c) {
        if (d == null ) {
            return
        }
        if (baidu.lang.isArray(d)) {
            baidu.each(d, function(e) {
                a.push(encodeURIComponent(c + "[]") + "=" + encodeURIComponent(e))
            })
        } else {
            a.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        }
    });
    return a.join("&").replace(/%20/g, "+")
}
;
baidu.dragable = function(b, a) {
    var c = baidu.G(a.handler) || baidu.G(b);
    a.onbeforestart = a.onbeforestart || function() {}
    ;
    a.onstart = a.onafterstart || function() {}
    ;
    delete a.onafterstart;
    c.onmousedown = function(f) {
        a.onbeforestart();
        baidu.dragable.orgUpHandler = document.onmouseup;
        var d = baidu.dom.drag(b, window.event || f, a);
        document.onmouseup = function(g) {
            d.stop();
            document.onmouseup = baidu.dragable.orgUpHandler
        }
        ;
        return false
    }
    ;
    c.onselectstart = function(d) {
        return false
    }
}
;
(function() {
    var b = {};
    this.tmpl = function a(e, d) {
        var c = !/\W/.test(e) ? b[e] = b[e] || a(document.getElementById(e).innerHTML) : new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return d ? c(d) : c
    }
})();
(function() {
    var a = {};
    getUniqueId = function(c) {
        var d = c || 8;
        var e = "";
        while (d--) {
            e += b()
        }
        if (!a[e]) {
            a[e] = 1;
            return e
        } else {
            return getUniqueId(d)
        }
    }
    ;
    var b = function() {
        var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var c = d.length;
        return d.charAt(Math.floor(Math.random() * c))
    }
})();
var AceTemplate = AceTemplate || {};
(function() {
    var d = {
        log: function(h) {
            window.console && console.log(h)
        }
    };
    var f = {
        "#39": "'",
        quot: '"',
        lt: "<",
        gt: ">",
        amp: "&",
        nbsp: " "
    };
    var c = {
        "'": "#39",
        '"': "quot",
        "<": "lt",
        ">": "gt",
        "&": "amp",
        " ": "nbsp"
    };
    var g = {
        g: function(h) {
            if (typeof h != "string") {
                return h
            }
            return document.getElementById(h)
        },
        decodeHTML: function(h) {
            return String(h).replace(/&(#39|quot|lt|gt|amp|nbsp);/ig, function(j, i) {
                return f[i]
            }).replace(/&#u([a-f\d]{4});/ig, function(i, j) {
                return String.fromCharCode(parseInt("0x" + j))
            }).replace(/&#(\d+);/ig, function(i, j) {
                return String.fromCharCode(+j)
            })
        },
        encodeHTML: function(h) {
            return String(h).replace(/['"<>& ]/g, function(i) {
                return "&" + c[i] + ";"
            })
        },
        encodeAttr: function(h) {
            return String(h).replace(/['"]/g, function(i) {
                return "&" + c[i] + ";"
            })
        },
        elementText: function(h) {
            if (!h || !h.tagName) {
                return ""
            }
            if (/^(input|textarea)$/i.test(h.tagName)) {
                return h.value
            }
            return g.decodeHTML(h.innerHTML)
        }
    };
    var a = {};
    var e = false;
    function b(j) {
        var i = []
          , k = [];
        i.push("with(this){");
        i.push(j.replace(/[\r\n]+/g, "\n").replace(/^\n+|\s+$/mg, "").replace(/((^\s*[<>!#^&\u0000-\u0008\u007F-\uffff].*$|^.*[<>]\s*$|^(?!\s*(else|do|try|finally)\s*$)[^'":;,\[\]{}()\n\/]+$|^(\s*(([\w-]+\s*=\s*"[^"]*")|([\w-]+\s*=\s*'[^']*')))+\s*$|^\s*([.#][\w-.]+(:\w+)?(\s*|,))*(?!(else|do|while|try|return)\b)[.#]?[\w-.*]+(:\w+)?\s*\{.*$)\s?)+/mg, function(l) {
            l = ['"', l.replace(/&none;/g, "").replace(/["'\\]/g, "\\$&").replace(/\n/g, "\\n").replace(/(!?(#|@))\{(.*?)\}/g, function(q, n, m, p) {
                p = p.replace(/\\n/g, "\n").replace(/\\([\\'"])/g, "$1");
                var o = /^[a-z$][\w+$]+$/i.test(p) && !(/^(true|false|NaN|null|this)$/.test(p));
                return ['",', o ? ["typeof ", p, '=="undefined"?"":'].join("") : "", (n == "#" ? "_encode_" : ""), (m == "@" ? "_encodeAttr_" : ""), "(", p, '),"'].join("")
            }), '"'].join("").replace(/^"",|,""$/g, "");
            if (l) {
                return ["_output_.push(", l, ");"].join("")
            } else {
                return ""
            }
        }));
        i.push("}");
        var h = new Function("_output_","_encode_","_encodeAttr_","helper",i.join(""));
        return h
    }
    AceTemplate.format = function(m, l, k) {
        if (!m) {
            return ""
        }
        var h, j;
        if (typeof m == "object" && m.tagName) {
            j = m;
            m = j.getAttribute("id")
        }
        k = k || this;
        h = a[m];
        if (!h) {
            if (!/[^\w-]/.test(m)) {
                if (!j) {
                    j = g.g(m)
                }
                h = this.register(m, j)
            } else {
                h = b(m)
            }
        }
        var i = [];
        h.call(l || "", i, g.encodeHTML, g.encodeAttr, k);
        return i.join("")
    }
    ;
    AceTemplate.register = function(m, l) {
        if (!arguments.length && !e) {
            e = true;
            var h = document.getElementsByTagName("script");
            for (var k = 0; k < h.length; k++) {
                var j = h[k];
                if (/^(text\/template)$/i.test(j.getAttribute("type"))) {
                    var m = j.getAttribute("id");
                    m && arguments.callee.call(this, m, j)
                }
            }
        }
        if (!m) {
            return
        }
        if (a[m]) {
            return a[m]
        }
        if (typeof l != "string") {
            if (typeof l == "undefined") {
                l = g.g(m)
            }
            l = g.elementText(l)
        }
        return a[m] = b(l)
    }
    ;
    AceTemplate.unregister = function(h) {
        delete a[h]
    }
})();
function loadedCallback(a) {
    EventRouter.dispatch("onflashLoaded", a)
}
function createImageSuccess(a) {
    EventRouter.dispatch("onflashCreateImageSuccess", a)
}
function hasParent(d, e) {
    var c = arguments;
    if (typeof e === "string") {
        var b = T.dom.query(e);
        var a = false;
        T.element(e).each(function(f) {
            a = a || c.callee(d, f)
        });
        return a
    } else {
        if (d === e && d === document.body) {
            return true
        } else {
            do {
                if (d === e) {
                    return true
                } else {
                    if (d === document.body) {
                        return false
                    }
                }
            } while (d = d.parentNode)
        }
        return false
    }
}
T.lang.isUrl = T.lang.isUrl || function(a) {
    return /^((https|http|ftp|rtsp|mms)?:\/\/)?(([\w-]+\.)+[a-z]{2,6}|((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d))(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(a)
}
;
T.dom.one = function(c, b) {
    if (T.isString(b)) {
        b = T.g(b)
    }
    var a = T.dom.query(c, b);
    if (a.length > 0) {
        return a[0]
    } else {
        return null
    }
}
;
T.initShowLine = function(f, b) {
    if (!f) {
        return
    }
    var d = f.value.replace(/\r/gi, "");
    var e = d.split("\n").length;
    if (e > b) {
        T.dom.next(f).innerHTML = "您最多可输入" + b + "个";
        f.pass = false
    } else {
        f.pass = true;
        T.dom.next(f).innerHTML = ""
    }
    var a = "";
    for (var c = 1; c <= e; c++) {
        if (document.all) {
            a += c + "\r\n"
        } else {
            a += c + "\n"
        }
    }
    T.dom.prev(f).value = a;
    T.dom.prev(f).scrollTop = f.scrollTop;
    f.onscroll = function() {
        T.dom.prev(f).scrollTop = f.scrollTop
    }
}
;
T.getTipElement = function(a) {
    var b = T.dom.create("div", {
        style: "position: absolute;"
    });
    b.className = "tip-container";
    b.innerHTML = '<div style="position: relative;top:8px; left:-10px;" class="tip-div tip-theme title-theme"><div class="tip-arrow"></div><div class="tip-wrap">' + a + "</div></div>";
    return b
}
;
T.beforeUnloadAlert = function() {
    window.onbeforeunload = function() {
        return '您还没有保存刚才的设置。如需要保存设置，请点击"留在此页"，然后点击当前页面的"确定"'
    }
}
;
T.postBtnBind = function(d, b) {
    var c = T.g(d);
    var a = function() {
        setTimeout(function() {
            T.dom.removeClass(c, "disabled")
        }, 1000)
    }
    ;
    T.on(c, "click", function(f) {
        if (T.dom.hasClass(c, "disabled")) {
            T.event.stop(f)
        } else {
            T.dom.addClass(c, "disabled");
            b(f, a)
        }
    })
}
;
;
T.getAncestorOrSelfByClass = function(a, c) {
    var b = T.dom.getAncestorByClass(a, c);
    if (b) {
        return b
    } else {
        if (T.dom.hasClass(a, c)) {
            return a
        } else {
            return null
        }
    }
}
;
T.settingTableHover = function() {
    T.element(T.q("setting-table")).mouseover(function(c) {
        var b = T.event.getTarget(c);
        var a = T.getAncestorOrSelfByClass(b, "setting-table-tr");
        if (a) {
            T.dom.addClass(a, "tr-highlight")
        }
    });
    T.element(T.q("setting-table")).mouseout(function(c) {
        var b = T.event.getTarget(c);
        var a = T.getAncestorOrSelfByClass(b, "setting-table-tr");
        if (a) {
            T.dom.removeClass(a, "tr-highlight")
        }
    })
}
;
T.isIco = function() {
    return T.config.userInfo.roles.ico
}
;
T.isUnion = function() {
    return T.config.userInfo.roles.webmaster
}
;
T.isCustomer = function() {
    var a = /.*customer$/i, b;
    T.object.each(T.config.userInfo.roles, function(d, c) {
        if (a.test(c) && d) {
            b = true
        }
    });
    return b
}
;
T.auth = function(a) {
    return T.config.userInfo.auths[a]
}
;
T.lang.isEmail = T.lang.isEmail || (function(a) {
    return /^\w+([-\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*$/i.test(a)
}
);
(function() {
    var b = null ;
    var a = null ;
    T.on(document.body, "click", function(e) {
        var g = T.event.get(e).target;
        var f = null ;
        var d = null ;
        do {
            if (g != document) {
                if (T.dom.hasClass(g, "layer")) {
                    d = g
                }
                if (T.dom.hasAttr(g, "layer")) {
                    f = g
                }
            }
        } while (g = g.parentNode);var c = function(j, i) {
            if (i) {
                T.dom.addClass(j, "selected")
            } else {
                T.dom.removeClass(j, "selected")
            }
            T.each(T.q("arrow", j), function(k) {
                if (i) {
                    T.dom.addClass(k, "selected")
                } else {
                    T.dom.removeClass(k, "selected")
                }
            })
        }
        ;
        if (f == null ) {
            if (a != null && d != a) {
                T.hide(a);
                c(b, false);
                EventRouter.dispatch("onchangeToggleTarget", b);
                a = null ;
                b = null
            }
        } else {
            var h = T.dom.one(T.dom.getAttr(f, "layer"));
            if (h != null ) {
                if (a != null && h != a) {
                    T.hide(a);
                    c(b, false)
                }
                a = null ;
                b = null ;
                if (h.style.display == "none" || T.dom.hasClass(h, "shared-layer")) {
                    T.show(h);
                    c(f, true);
                    if (!T.dom.hasClass(h, "non-excludable")) {
                        a = h
                    }
                    b = f
                } else {
                    T.hide(h);
                    c(f, false)
                }
            }
        }
    })
})();
baidu.string.format = function(c, a) {
    c = String(c);
    var b = Array.prototype.slice.call(arguments, 1)
      , d = Object.prototype.toString;
    if (b.length) {
        b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a : b) : b;
        return c.replace(/(#|!)\{(.+?)(?:\s*,\s*(\d+?))*?\}/g, function(e, h, g, i) {
            var f = b[g];
            if ("[object Function]" == d.call(f)) {
                f = f(g)
            }
            if (i) {
                f = T.truncat(f, i)
            }
            if (h == "!") {
                f = T.string.encodeHTML(f)
            }
            return ( "undefined" == typeof f ? "" : f)
        })
    }
    return c
}
;
baidu.format = baidu.string.format;
;
(function(a) {
    a.fn.bgiframe = (a.browser.ie && /msie 6.0/i.test(navigator.userAgent) ? function(e, d) {
        d = a.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: true,
            src: "javascript:false;"
        }, d);
        var c = '<iframe class="bgiframe" frameborder="0" tabindex="-1" src="' + d.src + '"style="display:block;position:absolute;z-index:-1;' + (d.opacity !== false ? "filter:Alpha(Opacity='0');" : "") + "top:" + (d.top == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : b(d.top)) + ";left:" + (d.left == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : b(d.left)) + ";width:" + (d.width == "auto" ? "expression(this.parentNode.offsetWidth+'px')" : b(d.width)) + ";height:" + (d.height == "auto" ? "expression(this.parentNode.offsetHeight+'px')" : b(d.height)) + ';"/>';
        return T.array.each(e, function(f) {
            if (T.dom.query("iframe.bgiframe", f).length == 0) {
                f.insertBefore(T.dom.create(c), f.firstChild)
            }
        })
    }
    : function() {
        return this
    }
    );
    a.fn.bgIframe = a.fn.bgiframe;
    function b(c) {
        return c && c.constructor === Number ? c + "px" : c
    }
})(T);