(function(h) {
    var d = "0.3.4", j = "hasOwnProperty", b = /[\.\/]/, a = "*", f = function() {}, e = function(m, l) {
        return m - l
    }, c, g, k = {
        n: {}
    };
    h.eve = function(m, C) {
        var v = k, s = g, w = Array.prototype.slice.call(arguments, 2), y = eve.listeners(m), x = 0, u = false, p, o = [], t = {}, q = [], n = c, A = [];
        c = m;
        g = 0;
        for (var r = 0, B = y.length; r < B; r++) {
            if ("zIndex"in y[r]) {
                o.push(y[r].zIndex);
                if (y[r].zIndex < 0) {
                    t[y[r].zIndex] = y[r]
                }
            }
        }
        o.sort(e);
        while (o[x] < 0) {
            p = t[o[x++]];
            q.push(p.apply(C, w));
            if (g) {
                g = s;
                return q
            }
        }
        for (r = 0; r < B; r++) {
            p = y[r];
            if ("zIndex"in p) {
                if (p.zIndex == o[x]) {
                    q.push(p.apply(C, w));
                    if (g) {
                        break
                    } 
                    do {
                        x++;
                        p = t[o[x]];
                        p && q.push(p.apply(C, w));
                        if (g) {
                            break
                        }
                    } while (p)
                } else {
                    t[p.zIndex] = p
                }
            } else {
                q.push(p.apply(C, w));
                if (g) {
                    break
                }
            }
        }
        g = s;
        c = n;
        return q.length ? q : null
    }
    ;
    eve.listeners = function(l) {
        var t = l.split(b), r = k, x, s, m, p, w, o, q, u, v = [r], n = [];
        for (p = 0,
        w = t.length; p < w; p++) {
            u = [];
            for (o = 0,
            q = v.length; o < q; o++) {
                r = v[o].n;
                s = [r[t[p]], r[a]];
                m = 2;
                while (m--) {
                    x = s[m];
                    if (x) {
                        u.push(x);
                        n = n.concat(x.f || [])
                    }
                }
            }
            v = u
        }
        return n
    }
    ;
    eve.on = function(l, o) {
        var q = l.split(b)
          , p = k;
        for (var m = 0, n = q.length; m < n; m++) {
            p = p.n;
            !p[q[m]] && (p[q[m]] = {
                n: {}
            });
            p = p[q[m]]
        }
        p.f = p.f || [];
        for (m = 0,
        n = p.f.length; m < n; m++) {
            if (p.f[m] == o) {
                return f
            }
        }
        p.f.push(o);
        return function(r) {
            if (+r == +r) {
                o.zIndex = +r
            }
        }
    }
    ;
    eve.stop = function() {
        g = 1
    }
    ;
    eve.nt = function(l) {
        if (l) {
            return new RegExp("(?:\\.|\\/|^)" + l + "(?:\\.|\\/|$)").test(c)
        }
        return c
    }
    ;
    eve.off = eve.unbind = function(m, r) {
        var t = m.split(b), s, v, n, p, w, o, q, u = [k];
        for (p = 0,
        w = t.length; p < w; p++) {
            for (o = 0; o < u.length; o += n.length - 2) {
                n = [o, 1];
                s = u[o].n;
                if (t[p] != a) {
                    if (s[t[p]]) {
                        n.push(s[t[p]])
                    }
                } else {
                    for (v in s) {
                        if (s[j](v)) {
                            n.push(s[v])
                        }
                    }
                }
                u.splice.apply(u, n)
            }
        }
        for (p = 0,
        w = u.length; p < w; p++) {
            s = u[p];
            while (s.n) {
                if (r) {
                    if (s.f) {
                        for (o = 0,
                        q = s.f.length; o < q; o++) {
                            if (s.f[o] == r) {
                                s.f.splice(o, 1);
                                break
                            }
                        }
                        !s.f.length && delete s.f
                    }
                    for (v in s.n) {
                        if (s.n[j](v) && s.n[v].f) {
                            var l = s.n[v].f;
                            for (o = 0,
                            q = l.length; o < q; o++) {
                                if (l[o] == r) {
                                    l.splice(o, 1);
                                    break
                                }
                            }
                            !l.length && delete s.n[v].f
                        }
                    }
                } else {
                    delete s.f;
                    for (v in s.n) {
                        if (s.n[j](v) && s.n[v].f) {
                            delete s.n[v].f
                        }
                    }
                }
                s = s.n
            }
        }
    }
    ;
    eve.once = function(l, m) {
        var n = function() {
            var o = m.apply(this, arguments);
            eve.unbind(l, n);
            return o
        };
        return eve.on(l, n)
    }
    ;
    eve.version = d;
    eve.toString = function() {
        return "You are running Eve " + d
    }
    ;
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define != "undefined" ? (define("eve", [], function() {
        return eve
    })) : (h.eve = eve))
})(this);
(function() {
    function aS(g) {
        if (aS.is(g, "function")) {
            return ap ? g() : eve.on("raphael.DOMload", g)
        } else {
            if (aS.is(g, be)) {
                return aS._engine.create[bH](aS, g.splice(0, 3 + aS.is(g[0], aM))).add(g)
            } else {
                var b = Array.prototype.slice.call(arguments, 0);
                if (aS.is(b[b.length - 1], "function")) {
                    var d = b.pop();
                    return ap ? d.call(aS._engine.create[bH](aS, b)) : eve.on("raphael.DOMload", function() {
                        d.call(aS._engine.create[bH](aS, b))
                    })
                } else {
                    return aS._engine.create[bH](aS, arguments)
                }
            }
        }
    }
    aS.version = "2.1.0";
    aS.eve = eve;
    var ap, a = /[, ]+/, bx = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, bs = /\{(\d+)\}/g, bK = "prototype", al = "hasOwnProperty", aB = {
        doc: document,
        win: window
    }, s = {
        was: Object.prototype[al].call(aB.win, "Raphael"),
        is: aB.win.Raphael
    }, bG = function() {
        this.ca = this.customAttributes = {
            piePath: function(d, bM, S, E, b) {
                var g = (b - E) > 180
                  , R = (b - E) / 360;
                E = (E % 360) * Math.PI / 180;
                b = (b % 360) * Math.PI / 180;
                return {
                    path: [["M", d, bM], ["l", S * Math.cos(E), S * Math.sin(E)], ["A", S, S, 0, +g, 1, d + S * Math.cos(b), bM + S * Math.sin(b)], ["z"]]
                }
            },
            "class": function(b) {
                if (!aS.svg) {
                    this.node && (this.node.className = this.node.className + " " + b)
                }
            }
        }
    }, a5, bp = "appendChild", bH = "apply", bF = "concat", aa = "createTouch"in aB.doc, aY = "", aR = " ", bI = String, F = "split", Q = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](aR), by = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, bL = bI.prototype.toLowerCase, av = Math, m = av.max, bn = av.min, ax = av.abs, bq = av.pow, aW = av.PI, aM = "number", ak = "string", be = "array", a6 = "toString", ba = "fill", a2 = Object.prototype.toString, bA = {}, j = "push", f = aS._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, A = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, aw = {
        "NaN": 1,
        "Infinity": 1,
        "-Infinity": 1
    }, c = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, ai = av.round, z = "setAttribute", ao = parseFloat, V = parseInt, bu = bI.prototype.toUpperCase, r = aS._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: "10px Arial",
        "font-family": "Arial",
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0,
        "class": ""
    }, at = aS._availableAnimAttrs = {
        blur: aM,
        "clip-rect": "csv",
        cx: aM,
        cy: aM,
        fill: "colour",
        "fill-opacity": aM,
        "font-size": aM,
        height: aM,
        opacity: aM,
        path: "path",
        r: aM,
        rx: aM,
        ry: aM,
        stroke: "colour",
        "stroke-opacity": aM,
        "stroke-width": aM,
        transform: "transform",
        width: aM,
        x: aM,
        y: aM
    }, ad = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g, bj = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, n = {
        hs: 1,
        rg: 1
    }, bh = /,?([achlmqrstvxz]),?/gi, a1 = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, aj = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, aQ = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig, aX = aS._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, aV = {}, br = function(g, d) {
        return g.key - d.key
    }, u = function(g, d) {
        return ao(g) - ao(d)
    }, I = function() {}, bC = function(b) {
        return b
    }, aA = aS._rectPath = function(b, R, d, g, E) {
        if (E) {
            return [["M", b + E, R], ["l", d - E * 2, 0], ["a", E, E, 0, 0, 1, E, E], ["l", 0, g - E * 2], ["a", E, E, 0, 0, 1, -E, E], ["l", E * 2 - d, 0], ["a", E, E, 0, 0, 1, -E, -E], ["l", 0, E * 2 - g], ["a", E, E, 0, 0, 1, E, -E], ["z"]]
        }
        return [["M", b, R], ["l", d, 0], ["l", 0, g], ["l", -d, 0], ["z"]]
    }
    , K = function(b, E, g, d) {
        if (d == null) {
            d = g
        }
        return [["M", b, E], ["m", 0, -d], ["a", g, d, 0, 1, 1, 0, 2 * d], ["a", g, d, 0, 1, 1, 0, -2 * d], ["z"]]
    }, N = aS._getPath = {
        path: function(b) {
            return b.attr("path")
        },
        circle: function(d) {
            var b = d.attrs;
            return K(b.cx, b.cy, b.r)
        },
        ellipse: function(d) {
            var b = d.attrs;
            return K(b.cx, b.cy, b.rx, b.ry)
        },
        rect: function(d) {
            var b = d.attrs;
            return aA(b.x, b.y, b.width, b.height, b.r)
        },
        image: function(d) {
            var b = d.attrs;
            return aA(b.x, b.y, b.width, b.height)
        },
        text: function(b) {
            var d = b._getBBox();
            return aA(d.x, d.y, d.width, d.height)
        }
    }, L = aS.mapPath = function(bO, S) {
        if (!S) {
            return bO
        }
        var bM, R, g, b, bN, E, d;
        bO = X(bO);
        for (g = 0,
        bN = bO.length; g < bN; g++) {
            d = bO[g];
            for (b = 1,
            E = d.length; b < E; b += 2) {
                bM = S.x(d[b], d[b + 1]);
                R = S.y(d[b], d[b + 1]);
                d[b] = bM;
                d[b + 1] = R
            }
        }
        return bO
    }
    ;
    aS._g = aB;
    aS.type = (aB.win.SVGAngle || aB.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
    if (aS.type == "VML") {
        var aF = aB.doc.createElement("div"), aI;
        aF.innerHTML = '<v:shape adj="1"/>';
        aI = aF.firstChild;
        aI.style.behavior = "url(#default#VML)";
        if (!(aI && typeof aI.adj == "object")) {
            return ( aS.type = aY)
        }
        aF = null
    }
    aS.svg = !(aS.vml = aS.type == "VML");
    aS._Paper = bG;
    aS.fn = a5 = bG.prototype = aS.prototype;
    aS._id = 0;
    aS._oid = 0;
    aS.is = function(d, b) {
        b = bL.call(b);
        if (b == "finite") {
            return !aw[al](+d)
        }
        if (b == "array") {
            return d instanceof Array
        }
        return (b == "null" && d === null) || (b == typeof d && d !== null) || (b == "object" && d === Object(d)) || (b == "array" && Array.isArray && Array.isArray(d)) || a2.call(d).slice(8, -1).toLowerCase() == b
    }
    ;
    function Y(g) {
        if (Object(g) !== g) {
            return g
        }
        var d = new g.constructor;
        for (var b in g) {
            if (g[al](b)) {
                d[b] = Y(g[b])
            }
        }
        return d
    }
    aS.angle = function(R, bM, g, S, d, E) {
        if (d == null) {
            var b = R - g
              , bN = bM - S;
            if (!b && !bN) {
                return 0
            }
            return (180 + av.atan2(-bN, -b) * 180 / aW + 360) % 360
        } else {
            return aS.angle(R, bM, d, E) - aS.angle(g, S, d, E)
        }
    }
    ;
    aS.rad = function(b) {
        return b % 360 * aW / 180
    }
    ;
    aS.deg = function(b) {
        return b * 180 / aW % 360
    }
    ;
    aS.snapTo = function(d, E, b) {
        b = aS.is(b, "finite") ? b : 10;
        if (aS.is(d, be)) {
            var g = d.length;
            while (g--) {
                if (ax(d[g] - E) <= b) {
                    return d[g]
                }
            }
        } else {
            d = +d;
            var R = E % d;
            if (R < b) {
                return E - R
            }
            if (R > d - b) {
                return E - R + d
            }
        }
        return E
    }
    ;
    var h = aS.createUUID = (function(b, d) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(b, d).toUpperCase()
        }
    })(/[xy]/g, function(g) {
        var d = av.random() * 16 | 0
          , b = g == "x" ? d : (d & 3 | 8);
        return b.toString(16)
    });
    aS.setWindow = function(b) {
        eve("raphael.setWindow", aS, aB.win, b);
        aB.win = b;
        aB.doc = aB.win.document;
        if (aS._engine.initWin) {
            aS._engine.initWin(aB.win)
        }
    }
    ;
    var bg = function(g) {
        if (aS.vml) {
            var b = /^\s+|\s+$/g;
            var R;
            try {
                var S = new ActiveXObject("htmlfile");
                S.write("<body>");
                S.close();
                R = S.body
            } catch (bM) {
                R = createPopup().document.body
            }
            var d = R.createTextRange();
            bg = aH(function(bN) {
                try {
                    R.style.color = bI(bN).replace(b, aY);
                    var bO = d.queryCommandValue("ForeColor");
                    bO = ((bO & 255) << 16) | (bO & 65280) | ((bO & 16711680) >>> 16);
                    return "#" + ("000000" + bO.toString(16)).slice(-6)
                } catch (bP) {
                    return "none"
                }
            })
        } else {
            var E = aB.doc.createElement("i");
            E.title = "Rapha\xebl Colour Picker";
            E.style.display = "none";
            aB.doc.body.appendChild(E);
            bg = aH(function(bN) {
                E.style.color = bN;
                return aB.doc.defaultView.getComputedStyle(E, aY).getPropertyValue("color")
            })
        }
        return bg(g)
    }
      , aJ = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }
      , M = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }
      , x = function() {
        return this.hex
    }
      , aZ = function(S, R, d) {
        if (R == null && aS.is(S, "object") && "r"in S && "g"in S && "b"in S) {
            d = S.b;
            R = S.g;
            S = S.r
        }
        if (R == null && aS.is(S, ak)) {
            var E = aS.getRGB(S);
            S = E.r;
            R = E.g;
            d = E.b
        }
        if (S > 1 || R > 1 || d > 1) {
            S /= 255;
            R /= 255;
            d /= 255
        }
        return [S, R, d]
    }
      , a3 = function(S, R, d, bM) {
        S *= 255;
        R *= 255;
        d *= 255;
        var E = {
            r: S,
            g: R,
            b: d,
            hex: aS.rgb(S, R, d),
            toString: x
        };
        aS.is(bM, "finite") && (E.opacity = bM);
        return E
    };
    aS.color = function(b) {
        var d;
        if (aS.is(b, "object") && "h"in b && "s"in b && "b"in b) {
            d = aS.hsb2rgb(b);
            b.r = d.r;
            b.g = d.g;
            b.b = d.b;
            b.hex = d.hex
        } else {
            if (aS.is(b, "object") && "h"in b && "s"in b && "l"in b) {
                d = aS.hsl2rgb(b);
                b.r = d.r;
                b.g = d.g;
                b.b = d.b;
                b.hex = d.hex
            } else {
                if (aS.is(b, "string")) {
                    b = aS.getRGB(b)
                }
                if (aS.is(b, "object") && "r"in b && "g"in b && "b"in b) {
                    d = aS.rgb2hsl(b);
                    b.h = d.h;
                    b.s = d.s;
                    b.l = d.l;
                    d = aS.rgb2hsb(b);
                    b.v = d.b
                } else {
                    b = {
                        hex: "none"
                    };
                    b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1
                }
            }
        }
        b.toString = x;
        return b
    }
    ;
    aS.hsb2rgb = function(bM, bP, bN, E) {
        if (this.is(bM, "object") && "h"in bM && "s"in bM && "b"in bM) {
            bN = bM.b;
            bP = bM.s;
            bM = bM.h;
            E = bM.o
        }
        bM *= 360;
        var S, bO, d, g, b;
        bM = (bM % 360) / 60;
        b = bN * bP;
        g = b * (1 - ax(bM % 2 - 1));
        S = bO = d = bN - b;
        bM = ~~bM;
        S += [b, g, 0, 0, g, b][bM];
        bO += [g, b, b, g, 0, 0][bM];
        d += [0, 0, g, b, b, g][bM];
        return a3(S, bO, d, E)
    }
    ;
    aS.hsl2rgb = function(bN, bP, S, E) {
        if (this.is(bN, "object") && "h"in bN && "s"in bN && "l"in bN) {
            S = bN.l;
            bP = bN.s;
            bN = bN.h
        }
        if (bN > 1 || bP > 1 || S > 1) {
            bN /= 360;
            bP /= 100;
            S /= 100
        }
        bN *= 360;
        var bM, bO, d, g, b;
        bN = (bN % 360) / 60;
        b = 2 * bP * (S < 0.5 ? S : 1 - S);
        g = b * (1 - ax(bN % 2 - 1));
        bM = bO = d = S - b / 2;
        bN = ~~bN;
        bM += [b, g, 0, 0, g, b][bN];
        bO += [g, b, b, g, 0, 0][bN];
        d += [0, 0, g, b, b, g][bN];
        return a3(bM, bO, d, E)
    }
    ;
    aS.rgb2hsb = function(bO, bN, d) {
        d = aZ(bO, bN, d);
        bO = d[0];
        bN = d[1];
        d = d[2];
        var bM, R, E, bP;
        E = m(bO, bN, d);
        bP = E - bn(bO, bN, d);
        bM = (bP == 0 ? null : E == bO ? (bN - d) / bP : E == bN ? (d - bO) / bP + 2 : (bO - bN) / bP + 4);
        bM = ((bM + 360) % 6) * 60 / 360;
        R = bP == 0 ? 0 : bP / E;
        return {
            h: bM,
            s: R,
            b: E,
            toString: aJ
        }
    }
    ;
    aS.rgb2hsl = function(d, bN, bQ) {
        bQ = aZ(d, bN, bQ);
        d = bQ[0];
        bN = bQ[1];
        bQ = bQ[2];
        var bR, bM, bP, bO, R, E;
        bO = m(d, bN, bQ);
        R = bn(d, bN, bQ);
        E = bO - R;
        bR = (E == 0 ? null : bO == d ? (bN - bQ) / E : bO == bN ? (bQ - d) / E + 2 : (d - bN) / E + 4);
        bR = ((bR + 360) % 6) * 60 / 360;
        bP = (bO + R) / 2;
        bM = (E == 0 ? 0 : bP < 0.5 ? E / (2 * bP) : E / (2 - 2 * bP));
        return {
            h: bR,
            s: bM,
            l: bP,
            toString: M
        }
    }
    ;
    aS._path2string = function() {
        return this.join(",").replace(bh, "$1")
    }
    ;
    function bl(E, g) {
        for (var b = 0, d = E.length; b < d; b++) {
            if (E[b] === g) {
                return E.push(E.splice(b, 1)[0])
            }
        }
    }
    function aH(E, d, b) {
        function g() {
            var R = Array.prototype.slice.call(arguments, 0)
              , bM = R.join("\u2400")
              , S = g.cache = g.cache || {}
              , bN = g.count = g.count || [];
            if (S[al](bM)) {
                bl(bN, bM);
                return b ? b(S[bM]) : S[bM]
            }
            bN.length >= 1000 && delete S[bN.shift()];
            bN.push(bM);
            S[bM] = E[bH](d, R);
            return b ? b(S[bM]) : S[bM]
        }
        return g
    }
    var bw = aS._preload = function(g, d) {
        var b = aB.doc.createElement("img");
        b.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        b.onload = function() {
            d.call(this);
            this.onload = null;
            aB.doc.body.removeChild(this)
        }
        ;
        b.onerror = function() {
            aB.doc.body.removeChild(this)
        }
        ;
        aB.doc.body.appendChild(b);
        b.src = g
    }
    ;
    function ar() {
        return this.hex
    }
    aS.getRGB = aH(function(b) {
        if (!b || !!((b = bI(b)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: ar
            }
        }
        if (b == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: ar
            }
        }
        !(n[al](b.toLowerCase().substring(0, 2)) || b.charAt() == "#") && (b = bg(b));
        var R, d, g, bM, E, bO, bN, S = b.match(A);
        if (S) {
            if (S[2]) {
                bM = V(S[2].substring(5), 16);
                g = V(S[2].substring(3, 5), 16);
                d = V(S[2].substring(1, 3), 16)
            }
            if (S[3]) {
                bM = V((bO = S[3].charAt(3)) + bO, 16);
                g = V((bO = S[3].charAt(2)) + bO, 16);
                d = V((bO = S[3].charAt(1)) + bO, 16)
            }
            if (S[4]) {
                bN = S[4][F](bj);
                d = ao(bN[0]);
                bN[0].slice(-1) == "%" && (d *= 2.55);
                g = ao(bN[1]);
                bN[1].slice(-1) == "%" && (g *= 2.55);
                bM = ao(bN[2]);
                bN[2].slice(-1) == "%" && (bM *= 2.55);
                S[1].toLowerCase().slice(0, 4) == "rgba" && (E = ao(bN[3]));
                bN[3] && bN[3].slice(-1) == "%" && (E /= 100)
            }
            if (S[5]) {
                bN = S[5][F](bj);
                d = ao(bN[0]);
                bN[0].slice(-1) == "%" && (d *= 2.55);
                g = ao(bN[1]);
                bN[1].slice(-1) == "%" && (g *= 2.55);
                bM = ao(bN[2]);
                bN[2].slice(-1) == "%" && (bM *= 2.55);
                (bN[0].slice(-3) == "deg" || bN[0].slice(-1) == "\xb0") && (d /= 360);
                S[1].toLowerCase().slice(0, 4) == "hsba" && (E = ao(bN[3]));
                bN[3] && bN[3].slice(-1) == "%" && (E /= 100);
                return aS.hsb2rgb(d, g, bM, E)
            }
            if (S[6]) {
                bN = S[6][F](bj);
                d = ao(bN[0]);
                bN[0].slice(-1) == "%" && (d *= 2.55);
                g = ao(bN[1]);
                bN[1].slice(-1) == "%" && (g *= 2.55);
                bM = ao(bN[2]);
                bN[2].slice(-1) == "%" && (bM *= 2.55);
                (bN[0].slice(-3) == "deg" || bN[0].slice(-1) == "\xb0") && (d /= 360);
                S[1].toLowerCase().slice(0, 4) == "hsla" && (E = ao(bN[3]));
                bN[3] && bN[3].slice(-1) == "%" && (E /= 100);
                return aS.hsl2rgb(d, g, bM, E)
            }
            S = {
                r: d,
                g: g,
                b: bM,
                toString: ar
            };
            S.hex = "#" + (16777216 | bM | (g << 8) | (d << 16)).toString(16).slice(1);
            aS.is(E, "finite") && (S.opacity = E);
            return S
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: ar
        }
    }, aS);
    aS.hsb = aH(function(E, g, d) {
        return aS.hsb2rgb(E, g, d).hex
    });
    aS.hsl = aH(function(g, d, b) {
        return aS.hsl2rgb(g, d, b).hex
    });
    aS.rgb = aH(function(R, E, d) {
        return "#" + (16777216 | d | (E << 8) | (R << 16)).toString(16).slice(1)
    });
    aS.getColor = function(d) {
        var g = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: d || 0.75
        }
          , b = this.hsb2rgb(g.h, g.s, g.b);
        g.h += 0.075;
        if (g.h > 1) {
            g.h = 0;
            g.s -= 0.2;
            g.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: g.b
            })
        }
        return b.hex
    }
    ;
    aS.getColor.reset = function() {
        delete this.start
    }
    ;
    function bc(E, bM) {
        var S = [];
        for (var g = 0, b = E.length; b - 2 * !bM > g; g += 2) {
            var R = [{
                x: +E[g - 2],
                y: +E[g - 1]
            }, {
                x: +E[g],
                y: +E[g + 1]
            }, {
                x: +E[g + 2],
                y: +E[g + 3]
            }, {
                x: +E[g + 4],
                y: +E[g + 5]
            }];
            if (bM) {
                if (!g) {
                    R[0] = {
                        x: +E[b - 2],
                        y: +E[b - 1]
                    }
                } else {
                    if (b - 4 == g) {
                        R[3] = {
                            x: +E[0],
                            y: +E[1]
                        }
                    } else {
                        if (b - 2 == g) {
                            R[2] = {
                                x: +E[0],
                                y: +E[1]
                            };
                            R[3] = {
                                x: +E[2],
                                y: +E[3]
                            }
                        }
                    }
                }
            } else {
                if (b - 4 == g) {
                    R[3] = R[2]
                } else {
                    if (!g) {
                        R[0] = {
                            x: +E[g],
                            y: +E[g + 1]
                        }
                    }
                }
            }
            S.push(["C", (-R[0].x + 6 * R[1].x + R[2].x) / 6, (-R[0].y + 6 * R[1].y + R[2].y) / 6, (R[1].x + 6 * R[2].x - R[3].x) / 6, (R[1].y + 6 * R[2].y - R[3].y) / 6, R[2].x, R[2].y])
        }
        return S
    }
    aS.parsePathString = function(b) {
        if (!b) {
            return null
        }
        var g = Z(b);
        if (g.arr) {
            return a0(g.arr)
        }
        var E = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }
          , d = [];
        if (aS.is(b, be) && aS.is(b[0], be)) {
            d = a0(b)
        }
        if (!d.length) {
            bI(b).replace(a1, function(S, R, bO) {
                var bN = []
                  , bM = R.toLowerCase();
                bO.replace(aQ, function(bQ, bP) {
                    bP && bN.push(+bP)
                });
                if (bM == "m" && bN.length > 2) {
                    d.push([R][bF](bN.splice(0, 2)));
                    bM = "l";
                    R = R == "m" ? "l" : "L"
                }
                if (bM == "r") {
                    d.push([R][bF](bN))
                } else {
                    while (bN.length >= E[bM]) {
                        d.push([R][bF](bN.splice(0, E[bM])));
                        if (!E[bM]) {
                            break
                        }
                    }
                }
            })
        }
        d.toString = aS._path2string;
        g.arr = a0(d);
        return d
    }
    ;
    aS.parseTransformString = aH(function(d) {
        if (!d) {
            return null
        }
        var g = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        }
          , b = [];
        if (aS.is(d, be) && aS.is(d[0], be)) {
            b = a0(d)
        }
        if (!b.length) {
            bI(d).replace(aj, function(R, E, bN) {
                var bM = []
                  , S = bL.call(E);
                bN.replace(aQ, function(bP, bO) {
                    bO && bM.push(+bO)
                });
                b.push([E][bF](bM))
            })
        }
        b.toString = aS._path2string;
        return b
    });
    var Z = function(d) {
        var b = Z.ps = Z.ps || {};
        if (b[d]) {
            b[d].sleep = 100
        } else {
            b[d] = {
                sleep: 100
            }
        }
        setTimeout(function() {
            for (var g in b) {
                if (b[al](g) && g != d) {
                    b[g].sleep--;
                    !b[g].sleep && delete b[g]
                }
            }
        });
        return b[d]
    };
    aS.findDotsAtSegment = function(d, b, b4, b2, bM, R, bP, bN, bX) {
        var bU = 1 - bX
          , bZ = bq(bU, 3)
          , b0 = bq(bU, 2)
          , bR = bX * bX
          , bO = bR * bX
          , bT = bZ * d + b0 * 3 * bX * b4 + bU * 3 * bX * bX * bM + bO * bP
          , bQ = bZ * b + b0 * 3 * bX * b2 + bU * 3 * bX * bX * R + bO * bN
          , bY = d + 2 * bX * (b4 - d) + bR * (bM - 2 * b4 + d)
          , bW = b + 2 * bX * (b2 - b) + bR * (R - 2 * b2 + b)
          , b3 = b4 + 2 * bX * (bM - b4) + bR * (bP - 2 * bM + b4)
          , b1 = b2 + 2 * bX * (R - b2) + bR * (bN - 2 * R + b2)
          , bV = bU * d + bX * b4
          , bS = bU * b + bX * b2
          , E = bU * bM + bX * bP
          , g = bU * R + bX * bN
          , S = (90 - av.atan2(bY - b3, bW - b1) * 180 / aW);
        (bY > b3 || bW < b1) && (S += 180);
        return {
            x: bT,
            y: bQ,
            m: {
                x: bY,
                y: bW
            },
            n: {
                x: b3,
                y: b1
            },
            start: {
                x: bV,
                y: bS
            },
            end: {
                x: E,
                y: g
            },
            alpha: S
        }
    }
    ;
    aS.bezierBBox = function(d, b, E, g, bO, bM, S, R) {
        if (!aS.is(d, "array")) {
            d = [d, b, E, g, bO, bM, S, R]
        }
        var bN = bb.apply(null, d);
        return {
            x: bN.min.x,
            y: bN.min.y,
            x2: bN.max.x,
            y2: bN.max.y,
            width: bN.max.x - bN.min.x,
            height: bN.max.y - bN.min.y
        }
    }
    ;
    aS.isPointInsideBBox = function(d, b, g) {
        return b >= d.x && b <= d.x2 && g >= d.y && g <= d.y2
    }
    ;
    aS.isBBoxIntersect = function(g, d) {
        var b = aS.isPointInsideBBox;
        return b(d, g.x, g.y) || b(d, g.x2, g.y) || b(d, g.x, g.y2) || b(d, g.x2, g.y2) || b(g, d.x, d.y) || b(g, d.x2, d.y) || b(g, d.x, d.y2) || b(g, d.x2, d.y2) || (g.x < d.x2 && g.x > d.x || d.x < g.x2 && d.x > g.x) && (g.y < d.y2 && g.y > d.y || d.y < g.y2 && d.y > g.y)
    }
    ;
    function bk(b, bM, S, R, E) {
        var g = -3 * bM + 9 * S - 9 * R + 3 * E
          , d = b * g + 6 * bM - 12 * S + 6 * R;
        return b * d - 3 * bM + 3 * S
    }
    function q(bX, R, bW, g, bV, d, bS, b, bP) {
        if (bP == null) {
            bP = 1
        }
        bP = bP > 1 ? 1 : bP < 0 ? 0 : bP;
        var bQ = bP / 2
          , bR = 12
          , bM = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816]
          , bU = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472]
          , E = 0;
        for (var bT = 0; bT < bR; bT++) {
            var bN = bQ * bM[bT] + bQ
              , bO = bk(bN, bX, bW, bV, bS)
              , bY = bk(bN, R, g, d, b)
              , S = bO * bO + bY * bY;
            E += bU[bT] * av.sqrt(S)
        }
        return bQ * E
    }
    function C(g, bR, d, bQ, b, bO, bT, bN, bP) {
        if (bP < 0 || q(g, bR, d, bQ, b, bO, bT, bN) < bP) {
            return
        }
        var bS = 1, E = bS / 2, S = bS - E, R, bM = 0.01;
        R = q(g, bR, d, bQ, b, bO, bT, bN, S);
        while (ax(R - bP) > bM) {
            E /= 2;
            S += (R < bP ? 1 : -1) * E;
            R = q(g, bR, d, bQ, b, bO, bT, bN, S)
        }
        return S
    }
    function O(E, bS, g, bQ, b, bP, bU, bO) {
        if (m(E, g) < bn(b, bU) || bn(E, g) > m(b, bU) || m(bS, bQ) < bn(bP, bO) || bn(bS, bQ) > m(bP, bO)) {
            return
        }
        var bN = (E * bQ - bS * g) * (b - bU) - (E - g) * (b * bO - bP * bU)
          , bM = (E * bQ - bS * g) * (bP - bO) - (bS - bQ) * (b * bO - bP * bU)
          , R = (E - g) * (bP - bO) - (bS - bQ) * (b - bU);
        if (!R) {
            return
        }
        var bT = bN / R
          , bR = bM / R
          , S = +bT.toFixed(2)
          , d = +bR.toFixed(2);
        if (S < +bn(E, g).toFixed(2) || S > +m(E, g).toFixed(2) || S < +bn(b, bU).toFixed(2) || S > +m(b, bU).toFixed(2) || d < +bn(bS, bQ).toFixed(2) || d > +m(bS, bQ).toFixed(2) || d < +bn(bP, bO).toFixed(2) || d > +m(bP, bO).toFixed(2)) {
            return
        }
        return {
            x: bT,
            y: bR
        }
    }
    function az(d, b) {
        return ag(d, b)
    }
    function t(d, b) {
        return ag(d, b, 1)
    }
    function ag(b3, b2, b1) {
        var E = aS.bezierBBox(b3)
          , d = aS.bezierBBox(b2);
        if (!aS.isBBoxIntersect(E, d)) {
            return b1 ? 0 : []
        }
        var bW = q.apply(0, b3)
          , bV = q.apply(0, b2)
          , bN = ~~(bW / 5)
          , bM = ~~(bV / 5)
          , bT = []
          , bS = []
          , g = {}
          , b4 = b1 ? 0 : [];
        for (var bY = 0; bY < bN + 1; bY++) {
            var bU = aS.findDotsAtSegment.apply(aS, b3.concat(bY / bN));
            bT.push({
                x: bU.x,
                y: bU.y,
                t: bY / bN
            })
        }
        for (bY = 0; bY < bM + 1; bY++) {
            bU = aS.findDotsAtSegment.apply(aS, b2.concat(bY / bM));
            bS.push({
                x: bU.x,
                y: bU.y,
                t: bY / bM
            })
        }
        for (bY = 0; bY < bN; bY++) {
            for (var bX = 0; bX < bM; bX++) {
                var b0 = bT[bY]
                  , b = bT[bY + 1]
                  , bZ = bS[bX]
                  , S = bS[bX + 1]
                  , bR = ax(b.x - b0.x) < 0.001 ? "y" : "x"
                  , bQ = ax(S.x - bZ.x) < 0.001 ? "y" : "x"
                  , R = O(b0.x, b0.y, b.x, b.y, bZ.x, bZ.y, S.x, S.y);
                if (R) {
                    if (g[R.x.toFixed(4)] == R.y.toFixed(4)) {
                        continue
                    }
                    g[R.x.toFixed(4)] = R.y.toFixed(4);
                    var bP = b0.t + ax((R[bR] - b0[bR]) / (b[bR] - b0[bR])) * (b.t - b0.t)
                      , bO = bZ.t + ax((R[bQ] - bZ[bQ]) / (S[bQ] - bZ[bQ])) * (S.t - bZ.t);
                    if (bP >= 0 && bP <= 1 && bO >= 0 && bO <= 1) {
                        if (b1) {
                            b4++
                        } else {
                            b4.push({
                                x: R.x,
                                y: R.y,
                                t1: bP,
                                t2: bO
                            })
                        }
                    }
                }
            }
        }
        return b4
    }
    aS.pathIntersection = function(d, b) {
        return D(d, b)
    }
    ;
    aS.pathIntersectionNumber = function(d, b) {
        return D(d, b, 1)
    }
    ;
    function D(g, b, bX) {
        g = aS._path2curve(g);
        b = aS._path2curve(b);
        var bV, S, bU, E, bS, bM, d, bP, b1, b0, b2 = bX ? 0 : [];
        for (var bT = 0, bN = g.length; bT < bN; bT++) {
            var bZ = g[bT];
            if (bZ[0] == "M") {
                bV = bS = bZ[1];
                S = bM = bZ[2]
            } else {
                if (bZ[0] == "C") {
                    b1 = [bV, S].concat(bZ.slice(1));
                    bV = b1[6];
                    S = b1[7]
                } else {
                    b1 = [bV, S, bV, S, bS, bM, bS, bM];
                    bV = bS;
                    S = bM
                }
                for (var bR = 0, bW = b.length; bR < bW; bR++) {
                    var bY = b[bR];
                    if (bY[0] == "M") {
                        bU = d = bY[1];
                        E = bP = bY[2]
                    } else {
                        if (bY[0] == "C") {
                            b0 = [bU, E].concat(bY.slice(1));
                            bU = b0[6];
                            E = b0[7]
                        } else {
                            b0 = [bU, E, bU, E, d, bP, d, bP];
                            bU = d;
                            E = bP
                        }
                        var bO = ag(b1, b0, bX);
                        if (bX) {
                            b2 += bO
                        } else {
                            for (var bQ = 0, R = bO.length; bQ < R; bQ++) {
                                bO[bQ].segment1 = bT;
                                bO[bQ].segment2 = bR;
                                bO[bQ].bez1 = b1;
                                bO[bQ].bez2 = b0
                            }
                            b2 = b2.concat(bO)
                        }
                    }
                }
            }
        }
        return b2
    }
    aS.isPointInsidePath = function(d, b, E) {
        var g = aS.pathBBox(d);
        return aS.isPointInsideBBox(g, b, E) && D(d, [["M", b, E], ["H", g.x2 + 10]], 1) % 2 == 1
    }
    ;
    aS._removedFactory = function(b) {
        return function() {
            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + b + "\u201d of removed object", b)
        }
    }
    ;
    var an = aS.pathBBox = function(bU) {
        var bO = Z(bU);
        if (bO.bbox) {
            return Y(bO.bbox)
        }
        if (!bU) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            }
        }
        bU = X(bU);
        var bR = 0, bQ = 0, R = [], d = [], g;
        for (var bM = 0, bT = bU.length; bM < bT; bM++) {
            g = bU[bM];
            if (g[0] == "M") {
                bR = g[1];
                bQ = g[2];
                R.push(bR);
                d.push(bQ)
            } else {
                var bN = bb(bR, bQ, g[1], g[2], g[3], g[4], g[5], g[6]);
                R = R[bF](bN.min.x, bN.max.x);
                d = d[bF](bN.min.y, bN.max.y);
                bR = g[5];
                bQ = g[6]
            }
        }
        var b = bn[bH](0, R)
          , bS = bn[bH](0, d)
          , S = m[bH](0, R)
          , E = m[bH](0, d)
          , bP = {
            x: b,
            y: bS,
            x2: S,
            y2: E,
            width: S - b,
            height: E - bS
        };
        bO.bbox = Y(bP);
        return bP
    }
      , a0 = function(d) {
        var b = Y(d);
        b.toString = aS._path2string;
        return b
    }
      , aD = aS._pathToRelative = function(E) {
        var bN = Z(E);
        if (bN.rel) {
            return a0(bN.rel)
        }
        if (!aS.is(E, be) || !aS.is(E && E[0], be)) {
            E = aS.parsePathString(E)
        }
        var bQ = []
          , bS = 0
          , bR = 0
          , bV = 0
          , bU = 0
          , g = 0;
        if (E[0][0] == "M") {
            bS = E[0][1];
            bR = E[0][2];
            bV = bS;
            bU = bR;
            g++;
            bQ.push(["M", bS, bR])
        }
        for (var bM = g, bW = E.length; bM < bW; bM++) {
            var b = bQ[bM] = []
              , bT = E[bM];
            if (bT[0] != bL.call(bT[0])) {
                b[0] = bL.call(bT[0]);
                switch (b[0]) {
                case "a":
                    b[1] = bT[1];
                    b[2] = bT[2];
                    b[3] = bT[3];
                    b[4] = bT[4];
                    b[5] = bT[5];
                    b[6] = +(bT[6] - bS).toFixed(3);
                    b[7] = +(bT[7] - bR).toFixed(3);
                    break;
                case "v":
                    b[1] = +(bT[1] - bR).toFixed(3);
                    break;
                case "m":
                    bV = bT[1];
                    bU = bT[2];
                default:
                    for (var S = 1, bO = bT.length; S < bO; S++) {
                        b[S] = +(bT[S] - ((S % 2) ? bS : bR)).toFixed(3)
                    }
                }
            } else {
                b = bQ[bM] = [];
                if (bT[0] == "m") {
                    bV = bT[1] + bS;
                    bU = bT[2] + bR
                }
                for (var R = 0, d = bT.length; R < d; R++) {
                    bQ[bM][R] = bT[R]
                }
            }
            var bP = bQ[bM].length;
            switch (bQ[bM][0]) {
            case "z":
                bS = bV;
                bR = bU;
                break;
            case "h":
                bS += +bQ[bM][bP - 1];
                break;
            case "v":
                bR += +bQ[bM][bP - 1];
                break;
            default:
                bS += +bQ[bM][bP - 2];
                bR += +bQ[bM][bP - 1]
            }
        }
        bQ.toString = aS._path2string;
        bN.rel = a0(bQ);
        return bQ
    }
      , w = aS._pathToAbsolute = function(bR) {
        var g = Z(bR);
        if (g.abs) {
            return a0(g.abs)
        }
        if (!aS.is(bR, be) || !aS.is(bR && bR[0], be)) {
            bR = aS.parsePathString(bR)
        }
        if (!bR || !bR.length) {
            return [["M", 0, 0]]
        }
        var bX = []
          , bM = 0
          , S = 0
          , bP = 0
          , bO = 0
          , E = 0;
        if (bR[0][0] == "M") {
            bM = +bR[0][1];
            S = +bR[0][2];
            bP = bM;
            bO = S;
            E++;
            bX[0] = ["M", bM, S]
        }
        var bW = bR.length == 3 && bR[0][0] == "M" && bR[1][0].toUpperCase() == "R" && bR[2][0].toUpperCase() == "Z";
        for (var bQ, b, bU = E, bN = bR.length; bU < bN; bU++) {
            bX.push(bQ = []);
            b = bR[bU];
            if (b[0] != bu.call(b[0])) {
                bQ[0] = bu.call(b[0]);
                switch (bQ[0]) {
                case "A":
                    bQ[1] = b[1];
                    bQ[2] = b[2];
                    bQ[3] = b[3];
                    bQ[4] = b[4];
                    bQ[5] = b[5];
                    bQ[6] = +(b[6] + bM);
                    bQ[7] = +(b[7] + S);
                    break;
                case "V":
                    bQ[1] = +b[1] + S;
                    break;
                case "H":
                    bQ[1] = +b[1] + bM;
                    break;
                case "R":
                    var R = [bM, S][bF](b.slice(1));
                    for (var bT = 2, bV = R.length; bT < bV; bT++) {
                        R[bT] = +R[bT] + bM;
                        R[++bT] = +R[bT] + S
                    }
                    bX.pop();
                    bX = bX[bF](bc(R, bW));
                    break;
                case "M":
                    bP = +b[1] + bM;
                    bO = +b[2] + S;
                default:
                    for (bT = 1,
                    bV = b.length; bT < bV; bT++) {
                        bQ[bT] = +b[bT] + ((bT % 2) ? bM : S)
                    }
                }
            } else {
                if (b[0] == "R") {
                    R = [bM, S][bF](b.slice(1));
                    bX.pop();
                    bX = bX[bF](bc(R, bW));
                    bQ = ["R"][bF](b.slice(-2))
                } else {
                    for (var bS = 0, d = b.length; bS < d; bS++) {
                        bQ[bS] = b[bS]
                    }
                }
            }
            switch (bQ[0]) {
            case "Z":
                bM = bP;
                S = bO;
                break;
            case "H":
                bM = bQ[1];
                break;
            case "V":
                S = bQ[1];
                break;
            case "M":
                bP = bQ[bQ.length - 2];
                bO = bQ[bQ.length - 1];
            default:
                bM = bQ[bQ.length - 2];
                S = bQ[bQ.length - 1]
            }
        }
        bX.toString = aS._path2string;
        g.abs = a0(bX);
        return bX
    }
      , bJ = function(d, E, b, g) {
        return [d, E, b, g, b, g]
    }
      , bo = function(d, E, bM, R, b, g) {
        var S = 1 / 3
          , bN = 2 / 3;
        return [S * d + bN * bM, S * E + bN * R, S * b + bN * bM, S * g + bN * R, b, g]
    }
      , af = function(bT, co, b2, b0, bU, bO, E, bS, cn, bV) {
        var bZ = aW * 120 / 180, b = aW / 180 * (+bU || 0), b6 = [], b3, ck = aH(function(cq, ct, cp) {
            var cs = cq * av.cos(cp) - ct * av.sin(cp)
              , cr = cq * av.sin(cp) + ct * av.cos(cp);
            return {
                x: cs,
                y: cr
            }
        });
        if (!bV) {
            b3 = ck(bT, co, -b);
            bT = b3.x;
            co = b3.y;
            b3 = ck(bS, cn, -b);
            bS = b3.x;
            cn = b3.y;
            var d = av.cos(aW / 180 * bU)
              , bQ = av.sin(aW / 180 * bU)
              , b8 = (bT - bS) / 2
              , b7 = (co - cn) / 2;
            var ci = (b8 * b8) / (b2 * b2) + (b7 * b7) / (b0 * b0);
            if (ci > 1) {
                ci = av.sqrt(ci);
                b2 = ci * b2;
                b0 = ci * b0
            }
            var g = b2 * b2
              , cb = b0 * b0
              , cd = (bO == E ? -1 : 1) * av.sqrt(ax((g * cb - g * b7 * b7 - cb * b8 * b8) / (g * b7 * b7 + cb * b8 * b8)))
              , bX = cd * b2 * b7 / b0 + (bT + bS) / 2
              , bW = cd * -b0 * b8 / b2 + (co + cn) / 2
              , bN = av.asin(((co - bW) / b0).toFixed(9))
              , bM = av.asin(((cn - bW) / b0).toFixed(9));
            bN = bT < bX ? aW - bN : bN;
            bM = bS < bX ? aW - bM : bM;
            bN < 0 && (bN = aW * 2 + bN);
            bM < 0 && (bM = aW * 2 + bM);
            if (E && bN > bM) {
                bN = bN - aW * 2
            }
            if (!E && bM > bN) {
                bM = bM - aW * 2
            }
        } else {
            bN = bV[0];
            bM = bV[1];
            bX = bV[2];
            bW = bV[3]
        }
        var bR = bM - bN;
        if (ax(bR) > bZ) {
            var bY = bM
              , b1 = bS
              , bP = cn;
            bM = bN + bZ * (E && bM > bN ? 1 : -1);
            bS = bX + b2 * av.cos(bM);
            cn = bW + b0 * av.sin(bM);
            b6 = af(bS, cn, b2, b0, bU, 0, E, b1, bP, [bM, bY, bX, bW])
        }
        bR = bM - bN;
        var S = av.cos(bN)
          , cm = av.sin(bN)
          , R = av.cos(bM)
          , cl = av.sin(bM)
          , b9 = av.tan(bR / 4)
          , cc = 4 / 3 * b2 * b9
          , ca = 4 / 3 * b0 * b9
          , cj = [bT, co]
          , ch = [bT + cc * cm, co - ca * S]
          , cg = [bS + cc * cl, cn - ca * R]
          , ce = [bS, cn];
        ch[0] = 2 * cj[0] - ch[0];
        ch[1] = 2 * cj[1] - ch[1];
        if (bV) {
            return [ch, cg, ce][bF](b6)
        } else {
            b6 = [ch, cg, ce][bF](b6).join()[F](",");
            var b4 = [];
            for (var cf = 0, b5 = b6.length; cf < b5; cf++) {
                b4[cf] = cf % 2 ? ck(b6[cf - 1], b6[cf], b).y : ck(b6[cf], b6[cf + 1], b).x
            }
            return b4
        }
    }
      , ah = function(d, b, E, g, bO, bN, bM, S, bP) {
        var R = 1 - bP;
        return {
            x: bq(R, 3) * d + bq(R, 2) * 3 * bP * E + R * 3 * bP * bP * bO + bq(bP, 3) * bM,
            y: bq(R, 3) * b + bq(R, 2) * 3 * bP * g + R * 3 * bP * bP * bN + bq(bP, 3) * S
        }
    }
      , bb = aH(function(E, d, S, R, bW, bV, bS, bP) {
        var bU = (bW - 2 * S + E) - (bS - 2 * bW + S), bR = 2 * (S - E) - 2 * (bW - S), bO = E - S, bN = (-bR + av.sqrt(bR * bR - 4 * bU * bO)) / 2 / bU, bM = (-bR - av.sqrt(bR * bR - 4 * bU * bO)) / 2 / bU, bQ = [d, bP], bT = [E, bS], g;
        ax(bN) > "1e12" && (bN = 0.5);
        ax(bM) > "1e12" && (bM = 0.5);
        if (bN > 0 && bN < 1) {
            g = ah(E, d, S, R, bW, bV, bS, bP, bN);
            bT.push(g.x);
            bQ.push(g.y)
        }
        if (bM > 0 && bM < 1) {
            g = ah(E, d, S, R, bW, bV, bS, bP, bM);
            bT.push(g.x);
            bQ.push(g.y)
        }
        bU = (bV - 2 * R + d) - (bP - 2 * bV + R);
        bR = 2 * (R - d) - 2 * (bV - R);
        bO = d - R;
        bN = (-bR + av.sqrt(bR * bR - 4 * bU * bO)) / 2 / bU;
        bM = (-bR - av.sqrt(bR * bR - 4 * bU * bO)) / 2 / bU;
        ax(bN) > "1e12" && (bN = 0.5);
        ax(bM) > "1e12" && (bM = 0.5);
        if (bN > 0 && bN < 1) {
            g = ah(E, d, S, R, bW, bV, bS, bP, bN);
            bT.push(g.x);
            bQ.push(g.y)
        }
        if (bM > 0 && bM < 1) {
            g = ah(E, d, S, R, bW, bV, bS, bP, bM);
            bT.push(g.x);
            bQ.push(g.y)
        }
        return {
            min: {
                x: bn[bH](0, bT),
                y: bn[bH](0, bQ)
            },
            max: {
                x: m[bH](0, bT),
                y: m[bH](0, bQ)
            }
        }
    })
      , X = aS._path2curve = aH(function(bV, bQ) {
        var bO = !bQ && Z(bV);
        if (!bQ && bO.curve) {
            return a0(bO.curve)
        }
        var E = w(bV)
          , bR = bQ && w(bQ)
          , bS = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }
          , d = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }
          , S = function(bX, bY) {
            var bW, bZ;
            if (!bX) {
                return ["C", bY.x, bY.y, bY.x, bY.y, bY.x, bY.y]
            }
            !(bX[0]in {
                T: 1,
                Q: 1
            }) && (bY.qx = bY.qy = null);
            switch (bX[0]) {
            case "M":
                bY.X = bX[1];
                bY.Y = bX[2];
                break;
            case "A":
                bX = ["C"][bF](af[bH](0, [bY.x, bY.y][bF](bX.slice(1))));
                break;
            case "S":
                bW = bY.x + (bY.x - (bY.bx || bY.x));
                bZ = bY.y + (bY.y - (bY.by || bY.y));
                bX = ["C", bW, bZ][bF](bX.slice(1));
                break;
            case "T":
                bY.qx = bY.x + (bY.x - (bY.qx || bY.x));
                bY.qy = bY.y + (bY.y - (bY.qy || bY.y));
                bX = ["C"][bF](bo(bY.x, bY.y, bY.qx, bY.qy, bX[1], bX[2]));
                break;
            case "Q":
                bY.qx = bX[1];
                bY.qy = bX[2];
                bX = ["C"][bF](bo(bY.x, bY.y, bX[1], bX[2], bX[3], bX[4]));
                break;
            case "L":
                bX = ["C"][bF](bJ(bY.x, bY.y, bX[1], bX[2]));
                break;
            case "H":
                bX = ["C"][bF](bJ(bY.x, bY.y, bX[1], bY.y));
                break;
            case "V":
                bX = ["C"][bF](bJ(bY.x, bY.y, bY.x, bX[1]));
                break;
            case "Z":
                bX = ["C"][bF](bJ(bY.x, bY.y, bY.X, bY.Y));
                break
            }
            return bX
        }
          , b = function(bW, bX) {
            if (bW[bX].length > 7) {
                bW[bX].shift();
                var bY = bW[bX];
                while (bY.length) {
                    bW.splice(bX++, 0, ["C"][bF](bY.splice(0, 6)))
                }
                bW.splice(bX, 1);
                bT = m(E.length, bR && bR.length || 0)
            }
        }
          , g = function(b0, bZ, bX, bW, bY) {
            if (b0 && bZ && b0[bY][0] == "M" && bZ[bY][0] != "M") {
                bZ.splice(bY, 0, ["M", bW.x, bW.y]);
                bX.bx = 0;
                bX.by = 0;
                bX.x = b0[bY][1];
                bX.y = b0[bY][2];
                bT = m(E.length, bR && bR.length || 0)
            }
        };
        for (var bN = 0, bT = m(E.length, bR && bR.length || 0); bN < bT; bN++) {
            E[bN] = S(E[bN], bS);
            b(E, bN);
            bR && (bR[bN] = S(bR[bN], d));
            bR && b(bR, bN);
            g(E, bR, bS, d, bN);
            g(bR, E, d, bS, bN);
            var bM = E[bN]
              , bU = bR && bR[bN]
              , R = bM.length
              , bP = bR && bU.length;
            bS.x = bM[R - 2];
            bS.y = bM[R - 1];
            bS.bx = ao(bM[R - 4]) || bS.x;
            bS.by = ao(bM[R - 3]) || bS.y;
            d.bx = bR && (ao(bU[bP - 4]) || d.x);
            d.by = bR && (ao(bU[bP - 3]) || d.y);
            d.x = bR && bU[bP - 2];
            d.y = bR && bU[bP - 1]
        }
        if (!bR) {
            bO.curve = a0(E)
        }
        return bR ? [E, bR] : E
    }, null, a0)
      , v = aS._parseDots = aH(function(bP) {
        var bO = [];
        for (var S = 0, bQ = bP.length; S < bQ; S++) {
            var b = {}
              , bN = bP[S].match(/^([^:]*):?([\d\.]*)/);
            b.color = aS.getRGB(bN[1]);
            if (b.color.error) {
                return null
            }
            b.color = b.color.hex;
            bN[2] && (b.offset = bN[2] + "%");
            bO.push(b)
        }
        for (S = 1,
        bQ = bO.length - 1; S < bQ; S++) {
            if (!bO[S].offset) {
                var g = ao(bO[S - 1].offset || 0)
                  , E = 0;
                for (var R = S + 1; R < bQ; R++) {
                    if (bO[R].offset) {
                        E = bO[R].offset;
                        break
                    }
                }
                if (!E) {
                    E = 100;
                    R = bQ
                }
                E = ao(E);
                var bM = (E - g) / (R - S + 1);
                for (; S < R; S++) {
                    g += bM;
                    bO[S].offset = g + "%"
                }
            }
        }
        return bO
    })
      , aL = aS._tear = function(b, d) {
        b == d.top && (d.top = b.prev);
        b == d.bottom && (d.bottom = b.next);
        b.next && (b.next.prev = b.prev);
        b.prev && (b.prev.next = b.next)
    }
      , aq = aS._tofront = function(b, d) {
        if (d.top === b) {
            return
        }
        aL(b, d);
        b.next = null;
        b.prev = d.top;
        d.top.next = b;
        d.top = b
    }
      , p = aS._toback = function(b, d) {
        if (d.bottom === b) {
            return
        }
        aL(b, d);
        b.next = d.bottom;
        b.prev = null;
        d.bottom.prev = b;
        d.bottom = b
    }
      , G = aS._insertafter = function(d, b, g) {
        aL(d, g);
        b == g.top && (g.top = d);
        b.next && (b.next.prev = d);
        d.next = b.next;
        d.prev = b;
        b.next = d
    }
      , aU = aS._insertbefore = function(d, b, g) {
        aL(d, g);
        b == g.bottom && (g.bottom = d);
        b.prev && (b.prev.next = d);
        d.prev = b.prev;
        b.prev = d;
        d.next = b
    }
      , bm = aS.toMatrix = function(g, b) {
        var E = an(g)
          , d = {
            _: {
                transform: aY
            },
            getBBox: function() {
                return E
            }
        };
        aP(d, b);
        return d.matrix
    }
      , U = aS.transformPath = function(d, b) {
        return L(d, bm(d, b))
    }
      , aP = aS._extractTransform = function(d, b0) {
        if (b0 == null) {
            return d._.transform
        }
        b0 = bI(b0).replace(/\.{3}|\u2026/g, d._.transform || aY);
        var bS = aS.parseTransformString(b0)
          , bQ = 0
          , bO = 0
          , bN = 0
          , bU = 1
          , bT = 1
          , b1 = d._
          , bV = new aG;
        b1.transform = bS || [];
        if (bS) {
            for (var bW = 0, bP = bS.length; bW < bP; bW++) {
                var bR = bS[bW], b = bR.length, R = bI(bR[0]).toLowerCase(), bZ = bR[0] != R, bM = bZ ? bV.invert() : 0, bY, E, bX, g, S;
                if (R == "t" && b == 3) {
                    if (bZ) {
                        bY = bM.x(0, 0);
                        E = bM.y(0, 0);
                        bX = bM.x(bR[1], bR[2]);
                        g = bM.y(bR[1], bR[2]);
                        bV.translate(bX - bY, g - E)
                    } else {
                        bV.translate(bR[1], bR[2])
                    }
                } else {
                    if (R == "r") {
                        if (b == 2) {
                            S = S || d.getBBox(1);
                            bV.rotate(bR[1], S.x + S.width / 2, S.y + S.height / 2);
                            bQ += bR[1]
                        } else {
                            if (b == 4) {
                                if (bZ) {
                                    bX = bM.x(bR[2], bR[3]);
                                    g = bM.y(bR[2], bR[3]);
                                    bV.rotate(bR[1], bX, g)
                                } else {
                                    bV.rotate(bR[1], bR[2], bR[3])
                                }
                                bQ += bR[1]
                            }
                        }
                    } else {
                        if (R == "s") {
                            if (b == 2 || b == 3) {
                                S = S || d.getBBox(1);
                                bV.scale(bR[1], bR[b - 1], S.x + S.width / 2, S.y + S.height / 2);
                                bU *= bR[1];
                                bT *= bR[b - 1]
                            } else {
                                if (b == 5) {
                                    if (bZ) {
                                        bX = bM.x(bR[3], bR[4]);
                                        g = bM.y(bR[3], bR[4]);
                                        bV.scale(bR[1], bR[2], bX, g)
                                    } else {
                                        bV.scale(bR[1], bR[2], bR[3], bR[4])
                                    }
                                    bU *= bR[1];
                                    bT *= bR[2]
                                }
                            }
                        } else {
                            if (R == "m" && b == 7) {
                                bV.add(bR[1], bR[2], bR[3], bR[4], bR[5], bR[6])
                            }
                        }
                    }
                }
                b1.dirtyT = 1;
                d.matrix = bV
            }
        }
        d.matrix = bV;
        b1.sx = bU;
        b1.sy = bT;
        b1.deg = bQ;
        b1.dx = bO = bV.e;
        b1.dy = bN = bV.f;
        if (bU == 1 && bT == 1 && !bQ && b1.bbox) {
            b1.bbox.x += +bO;
            b1.bbox.y += +bN
        } else {
            b1.dirtyT = 1
        }
    }
      , l = function(d) {
        var b = d[0];
        switch (b.toLowerCase()) {
        case "t":
            return [b, 0, 0];
        case "m":
            return [b, 1, 0, 0, 1, 0, 0];
        case "r":
            if (d.length == 4) {
                return [b, 0, d[2], d[3]]
            } else {
                return [b, 0]
            }
        case "s":
            if (d.length == 5) {
                return [b, 1, 1, d[3], d[4]]
            } else {
                if (d.length == 3) {
                    return [b, 1, 1]
                } else {
                    return [b, 1]
                }
            }
        }
    }
      , aC = aS._equaliseTransform = function(R, E) {
        E = bI(E).replace(/\.{3}|\u2026/g, R);
        R = aS.parseTransformString(R) || [];
        E = aS.parseTransformString(E) || [];
        var b = m(R.length, E.length), bO = [], bP = [], g = 0, d, S, bN, bM;
        for (; g < b; g++) {
            bN = R[g] || l(E[g]);
            bM = E[g] || l(bN);
            if ((bN[0] != bM[0]) || (bN[0].toLowerCase() == "r" && (bN[2] != bM[2] || bN[3] != bM[3])) || (bN[0].toLowerCase() == "s" && (bN[3] != bM[3] || bN[4] != bM[4]))) {
                return
            }
            bO[g] = [];
            bP[g] = [];
            for (d = 0,
            S = m(bN.length, bM.length); d < S; d++) {
                d in bN && (bO[g][d] = bN[d]);
                d in bM && (bP[g][d] = bM[d])
            }
        }
        return {
            from: bO,
            to: bP
        }
    }
    ;
    aS._getContainer = function(b, R, g, E) {
        var d;
        d = E == null && !aS.is(b, "object") ? aB.doc.getElementById(b) : b;
        if (d == null) {
            return
        }
        if (d.tagName) {
            if (R == null) {
                return {
                    container: d,
                    width: d.style.pixelWidth || d.offsetWidth,
                    height: d.style.pixelHeight || d.offsetHeight
                }
            } else {
                return {
                    container: d,
                    width: R,
                    height: g
                }
            }
        }
        return {
            container: 1,
            x: b,
            y: R,
            width: g,
            height: E
        }
    }
    ;
    aS.pathToRelative = aD;
    aS._engine = {};
    aS.path2curve = X;
    aS.matrix = function(E, g, bN, bM, S, R) {
        return new aG(E,g,bN,bM,S,R)
    }
    ;
    function aG(E, g, bN, bM, S, R) {
        if (E != null) {
            this.a = +E;
            this.b = +g;
            this.c = +bN;
            this.d = +bM;
            this.e = +S;
            this.f = +R
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0
        }
    }
    (function(g) {
        g.add = function(bV, bS, bQ, bO, bM, S) {
            var R = [[], [], []], E = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], bU = [[bV, bQ, bM], [bS, bO, S], [0, 0, 1]], bT, bR, bP, bN;
            if (bV && bV instanceof aG) {
                bU = [[bV.a, bV.c, bV.e], [bV.b, bV.d, bV.f], [0, 0, 1]]
            }
            for (bT = 0; bT < 3; bT++) {
                for (bR = 0; bR < 3; bR++) {
                    bN = 0;
                    for (bP = 0; bP < 3; bP++) {
                        bN += E[bT][bP] * bU[bP][bR]
                    }
                    R[bT][bR] = bN
                }
            }
            this.a = R[0][0];
            this.b = R[1][0];
            this.c = R[0][1];
            this.d = R[1][1];
            this.e = R[0][2];
            this.f = R[1][2]
        }
        ;
        g.invert = function() {
            var R = this
              , E = R.a * R.d - R.b * R.c;
            return new aG(R.d / E,-R.b / E,-R.c / E,R.a / E,(R.c * R.f - R.d * R.e) / E,(R.b * R.e - R.a * R.f) / E)
        }
        ;
        g.clone = function() {
            return new aG(this.a,this.b,this.c,this.d,this.e,this.f)
        }
        ;
        g.translate = function(E, R) {
            this.add(1, 0, 0, 1, E, R)
        }
        ;
        g.scale = function(R, bM, E, S) {
            bM == null && (bM = R);
            (E || S) && this.add(1, 0, 0, 1, E, S);
            this.add(R, 0, 0, bM, 0, 0);
            (E || S) && this.add(1, 0, 0, 1, -E, -S)
        }
        ;
        g.rotate = function(R, E, bN) {
            R = aS.rad(R);
            E = E || 0;
            bN = bN || 0;
            var bM = +av.cos(R).toFixed(9)
              , S = +av.sin(R).toFixed(9);
            this.add(bM, S, -S, bM, E, bN);
            this.add(1, 0, 0, 1, -E, -bN)
        }
        ;
        g.x = function(E, R) {
            return E * this.a + R * this.c + this.e
        }
        ;
        g.y = function(E, R) {
            return E * this.b + R * this.d + this.f
        }
        ;
        g.get = function(E) {
            return +this[bI.fromCharCode(97 + E)].toFixed(4)
        }
        ;
        g.toString = function() {
            return aS.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }
        ;
        g.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }
        ;
        g.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }
        ;
        function d(E) {
            return E[0] * E[0] + E[1] * E[1]
        }
        function b(E) {
            var R = av.sqrt(d(E));
            E[0] && (E[0] /= R);
            E[1] && (E[1] /= R)
        }
        g.split = function() {
            var R = {};
            R.dx = this.e;
            R.dy = this.f;
            var bM = [[this.a, this.c], [this.b, this.d]];
            R.scalex = av.sqrt(d(bM[0]));
            b(bM[0]);
            R.shear = bM[0][0] * bM[1][0] + bM[0][1] * bM[1][1];
            bM[1] = [bM[1][0] - bM[0][0] * R.shear, bM[1][1] - bM[0][1] * R.shear];
            R.scaley = av.sqrt(d(bM[1]));
            b(bM[1]);
            R.shear /= R.scaley;
            var E = -bM[0][1]
              , S = bM[1][1];
            if (S < 0) {
                R.rotate = aS.deg(av.acos(S));
                if (E < 0) {
                    R.rotate = 360 - R.rotate
                }
            } else {
                R.rotate = aS.deg(av.asin(E))
            }
            R.isSimple = !+R.shear.toFixed(9) && (R.scalex.toFixed(9) == R.scaley.toFixed(9) || !R.rotate);
            R.isSuperSimple = !+R.shear.toFixed(9) && R.scalex.toFixed(9) == R.scaley.toFixed(9) && !R.rotate;
            R.noRotation = !+R.shear.toFixed(9) && !R.rotate;
            return R
        }
        ;
        g.toTransformString = function(E) {
            var R = E || this[F]();
            if (R.isSimple) {
                R.scalex = +R.scalex.toFixed(4);
                R.scaley = +R.scaley.toFixed(4);
                R.rotate = +R.rotate.toFixed(4);
                return (R.dx || R.dy ? "t" + [R.dx, R.dy] : aY) + (R.scalex != 1 || R.scaley != 1 ? "s" + [R.scalex, R.scaley, 0, 0] : aY) + (R.rotate ? "r" + [R.rotate, 0, 0] : aY)
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }
    })(aG.prototype);
    var W = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    if ((navigator.vendor == "Apple Computer, Inc.") && (W && W[1] < 4 || navigator.platform.slice(0, 2) == "iP") || (navigator.vendor == "Google Inc." && W && W[1] < 8)) {
        a5.safari = function() {
            var b = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            setTimeout(function() {
                b.remove()
            })
        }
    } else {
        a5.safari = I
    }
    var P = function() {
        this.returnValue = false
    }
      , bE = function() {
        return this.originalEvent.preventDefault()
    }
      , a9 = function() {
        this.cancelBubble = true
    }
      , aK = function() {
        return this.originalEvent.stopPropagation()
    }
      , aE = (function() {
        if (aB.doc.addEventListener) {
            return function(S, E, g, d) {
                var b = aa && by[E] ? by[E] : E
                  , R = function(bR) {
                    var bQ = aB.doc.documentElement.scrollTop || aB.doc.body.scrollTop
                      , bS = aB.doc.documentElement.scrollLeft || aB.doc.body.scrollLeft
                      , bM = bR.clientX + bS
                      , bT = bR.clientY + bQ;
                    if (aa && by[al](E)) {
                        for (var bO = 0, bP = bR.targetTouches && bR.targetTouches.length; bO < bP; bO++) {
                            if (bR.targetTouches[bO].target == S) {
                                var bN = bR;
                                bR = bR.targetTouches[bO];
                                bR.originalEvent = bN;
                                bR.preventDefault = bE;
                                bR.stopPropagation = aK;
                                break
                            }
                        }
                    }
                    return g.call(d, bR, bM, bT)
                };
                S.addEventListener(b, R, false);
                return function() {
                    S.removeEventListener(b, R, false);
                    return true
                }
            }
        } else {
            if (aB.doc.attachEvent) {
                return function(S, E, g, d) {
                    var R = function(bO) {
                        bO = bO || aB.win.event;
                        var bN = aB.doc.documentElement.scrollTop || aB.doc.body.scrollTop
                          , bP = aB.doc.documentElement.scrollLeft || aB.doc.body.scrollLeft
                          , bM = bO.clientX + bP
                          , bQ = bO.clientY + bN;
                        bO.preventDefault = bO.preventDefault || P;
                        bO.stopPropagation = bO.stopPropagation || a9;
                        return g.call(d, bO, bM, bQ)
                    };
                    S.attachEvent("on" + E, R);
                    var b = function() {
                        S.detachEvent("on" + E, R);
                        return true
                    };
                    return b
                }
            }
        }
    })()
      , bf = []
      , bz = function(bN) {
        var bQ = bN.clientX, bP = bN.clientY, bS = aB.doc.documentElement.scrollTop || aB.doc.body.scrollTop, bT = aB.doc.documentElement.scrollLeft || aB.doc.body.scrollLeft, g, E = bf.length;
        while (E--) {
            g = bf[E];
            if (aa) {
                var S = bN.touches.length, R;
                while (S--) {
                    R = bN.touches[S];
                    if (R.identifier == g.el._drag.id) {
                        bQ = R.clientX;
                        bP = R.clientY;
                        (bN.originalEvent ? bN.originalEvent : bN).preventDefault();
                        break
                    }
                }
            } else {
                bN.preventDefault()
            }
            var d = g.el.node, b, bM = d.nextSibling, bR = d.parentNode, bO = d.style.display;
            aB.win.opera && bR.removeChild(d);
            d.style.display = "none";
            b = g.el.paper.getElementByPoint(bQ, bP);
            d.style.display = bO;
            aB.win.opera && (bM ? bR.insertBefore(d, bM) : bR.appendChild(d));
            b && eve("raphael.drag.over." + g.el.id, g.el, b);
            bQ += bT;
            bP += bS;
            eve("raphael.drag.move." + g.el.id, g.move_scope || g.el, bQ - g.el._drag.x, bP - g.el._drag.y, bQ, bP, bN)
        }
    }
      , e = function(g) {
        aS.unmousemove(bz).unmouseup(e);
        var d = bf.length, b;
        while (d--) {
            b = bf[d];
            b.el._drag = {};
            eve("raphael.drag.end." + b.el.id, b.end_scope || b.start_scope || b.move_scope || b.el, g)
        }
        bf = []
    }
      , bi = aS.el = {};
    for (var ay = Q.length; ay--; ) {
        (function(b) {
            aS[b] = bi[b] = function(g, d) {
                if (aS.is(g, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: b,
                        f: g,
                        unbind: aE(this.shape || this.node || aB.doc, b, g, d || this)
                    })
                }
                return this
            }
            ;
            aS["un" + b] = bi["un" + b] = function(E) {
                var g = this.events || []
                  , d = g.length;
                while (d--) {
                    if (g[d].name == b && g[d].f == E) {
                        g[d].unbind();
                        g.splice(d, 1);
                        !g.length && delete this.events;
                        return this
                    }
                }
                return this
            }
        })(Q[ay])
    }
    bi.data = function(d, E) {
        var g = aV[this.id] = aV[this.id] || {};
        if (arguments.length == 1) {
            if (aS.is(d, "object")) {
                for (var b in d) {
                    if (d[al](b)) {
                        this.data(b, d[b])
                    }
                }
                return this
            }
            eve("raphael.data.get." + this.id, this, g[d], d);
            return g[d]
        }
        g[d] = E;
        eve("raphael.data.set." + this.id, this, E, d);
        return this
    }
    ;
    bi.removeData = function(b) {
        if (b == null) {
            aV[this.id] = {}
        } else {
            aV[this.id] && delete aV[this.id][b]
        }
        return this
    }
    ;
    bi.hover = function(E, b, g, d) {
        return this.mouseover(E, g).mouseout(b, d || g)
    }
    ;
    bi.unhover = function(d, b) {
        return this.unmouseover(d).unmouseout(b)
    }
    ;
    var bv = [];
    bi.drag = function(d, S, R, b, g, E) {
        function bM(bO) {
            (bO.originalEvent || bO).preventDefault();
            var bN = aB.doc.documentElement.scrollTop || aB.doc.body.scrollTop
              , bP = aB.doc.documentElement.scrollLeft || aB.doc.body.scrollLeft;
            this._drag.x = bO.clientX + bP;
            this._drag.y = bO.clientY + bN;
            this._drag.id = bO.identifier;
            !bf.length && aS.mousemove(bz).mouseup(e);
            bf.push({
                el: this,
                move_scope: b,
                start_scope: g,
                end_scope: E
            });
            S && eve.on("raphael.drag.start." + this.id, S);
            d && eve.on("raphael.drag.move." + this.id, d);
            R && eve.on("raphael.drag.end." + this.id, R);
            eve("raphael.drag.start." + this.id, g || b || this, bO.clientX + bP, bO.clientY + bN, bO)
        }
        this._drag = {};
        bv.push({
            el: this,
            start: bM
        });
        this.mousedown(bM);
        return this
    }
    ;
    bi.onDragOver = function(b) {
        b ? eve.on("raphael.drag.over." + this.id, b) : eve.unbind("raphael.drag.over." + this.id)
    }
    ;
    bi.undrag = function() {
        var b = bv.length;
        while (b--) {
            if (bv[b].el == this) {
                this.unmousedown(bv[b].start);
                bv.splice(b, 1);
                eve.unbind("raphael.drag.*." + this.id)
            }
        }
        !bv.length && aS.unmousemove(bz).unmouseup(e)
    }
    ;
    a5.circle = function(b, E, g) {
        var d = aS._engine.circle(this, b || 0, E || 0, g || 0);
        this.__set__ && this.__set__.push(d);
        return d
    }
    ;
    a5.rect = function(b, S, d, E, R) {
        var g = aS._engine.rect(this, b || 0, S || 0, d || 0, E || 0, R || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }
    ;
    a5.ellipse = function(b, R, E, g) {
        var d = aS._engine.ellipse(this, b || 0, R || 0, E || 0, g || 0);
        this.__set__ && this.__set__.push(d);
        return d
    }
    ;
    a5.group = function(d) {
        var b = aS._engine.group(this);
        if (d !== undefined) {
            if (aS.svg) {
                b.attr("class", d)
            } else {
                b.node.className = d
            }
        }
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    a5.path = function(b) {
        b && !aS.is(b, ak) && !aS.is(b[0], be) && (b += aY);
        var d = aS._engine.path(aS.format[bH](aS, arguments), this);
        this.__set__ && this.__set__.push(d);
        return d
    }
    ;
    a5.image = function(R, b, S, d, E) {
        var g = aS._engine.image(this, R || "about:blank", b || 0, S || 0, d || 0, E || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }
    ;
    a5.text = function(b, E, g) {
        var d = aS._engine.text(this, b || 0, E || 0, bI(g));
        this.__set__ && this.__set__.push(d);
        return d
    }
    ;
    a5.set = function(d) {
        !aS.is(d, "array") && (d = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new am(d);
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    a5.setStart = function(b) {
        this.__set__ = b || this.set()
    }
    ;
    a5.setFinish = function(d) {
        var b = this.__set__;
        delete this.__set__;
        return b
    }
    ;
    a5.setSize = function(d, b) {
        return aS._engine.setSize.call(this, d, b)
    }
    ;
    a5.setViewBox = function(b, R, d, E, g) {
        return aS._engine.setViewBox.call(this, b, R, d, E, g)
    }
    ;
    a5.top = a5.bottom = null;
    a5.raphael = aS;
    var bt = function(g) {
        var R = g.getBoundingClientRect()
          , bO = g.ownerDocument
          , S = bO.body
          , b = bO.documentElement
          , E = b.clientTop || S.clientTop || 0
          , bM = b.clientLeft || S.clientLeft || 0
          , bN = R.top + (aB.win.pageYOffset || b.scrollTop || S.scrollTop) - E
          , d = R.left + (aB.win.pageXOffset || b.scrollLeft || S.scrollLeft) - bM;
        return {
            y: bN,
            x: d
        }
    };
    a5.getElementByPoint = function(d, bN) {
        var bM = this
          , g = bM.canvas
          , S = aB.doc.elementFromPoint(d, bN);
        if (aB.win.opera && S.tagName == "svg") {
            var R = bt(g)
              , E = g.createSVGRect();
            E.x = d - R.x;
            E.y = bN - R.y;
            E.width = E.height = 1;
            var b = g.getIntersectionList(E, null);
            if (b.length) {
                S = b[b.length - 1]
            }
        }
        if (!S) {
            return null
        }
        while (S.parentNode && S != g.parentNode && !S.raphael) {
            S = S.parentNode
        }
        S == bM.canvas.parentNode && (S = g);
        S = S && S.raphael ? bM.getById(S.raphaelid) : null;
        return S
    }
    ;
    a5.getById = function(d) {
        var b = this.bottom;
        while (b) {
            if (b.id == d) {
                return b
            }
            b = b.next
        }
        return null
    }
    ;
    a5.forEach = function(g, b) {
        var d = this.bottom;
        while (d) {
            if (g.call(b, d) === false) {
                return this
            }
            d = d.next
        }
        return this
    }
    ;
    a5.getElementsByPoint = function(b, g) {
        var d = this.set();
        this.forEach(function(E) {
            if (E.isPointInside(b, g)) {
                d.push(E)
            }
        });
        return d
    }
    ;
    function y() {
        return this.x + aR + this.y
    }
    function au() {
        return this.x + aR + this.y + aR + this.width + " \xd7 " + this.height
    }
    bi.isPointInside = function(b, g) {
        var d = this.realPath = this.realPath || N[this.type](this);
        return aS.isPointInsidePath(d, b, g)
    }
    ;
    bi.getBBox = function(d) {
        if (this.removed) {
            return {}
        }
        var b = this._;
        if (d) {
            if (b.dirty || !b.bboxwt) {
                this.realPath = N[this.type](this);
                b.bboxwt = an(this.realPath);
                b.bboxwt.toString = au;
                b.dirty = 0
            }
            return b.bboxwt
        }
        if (b.dirty || b.dirtyT || !b.bbox) {
            if (b.dirty || !this.realPath) {
                b.bboxwt = 0;
                this.realPath = N[this.type](this)
            }
            b.bbox = an(L(this.realPath, this.matrix));
            b.bbox.toString = au;
            b.dirty = b.dirtyT = 0
        }
        return b.bbox
    }
    ;
    bi.clone = function() {
        if (this.removed) {
            return null
        }
        var b = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    bi.glow = function(bM) {
        if (this.type == "text") {
            return null
        }
        bM = bM || {};
        var g = {
            width: (bM.width || 10) + (+this.attr("stroke-width") || 1),
            fill: bM.fill || false,
            opacity: bM.opacity || 0.5,
            offsetx: bM.offsetx || 0,
            offsety: bM.offsety || 0,
            color: bM.color || "#000"
        }
          , S = g.width / 2
          , E = this.paper
          , b = E.set()
          , R = this.realPath || N[this.type](this);
        R = this.matrix ? L(R, this.matrix) : R;
        for (var d = 1; d < S + 1; d++) {
            b.push(E.path(R).attr({
                stroke: g.color,
                fill: g.fill ? g.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(g.width / S * d).toFixed(3),
                opacity: +(g.opacity / S).toFixed(3)
            }))
        }
        return b.insertBefore(this).translate(g.offsetx, g.offsety)
    }
    ;
    var a8 = {}
      , k = function(d, b, R, E, bO, bN, bM, S, g) {
        if (g == null) {
            return q(d, b, R, E, bO, bN, bM, S)
        } else {
            return aS.findDotsAtSegment(d, b, R, E, bO, bN, bM, S, C(d, b, R, E, bO, bN, bM, S, g))
        }
    }
      , a7 = function(b, d) {
        return function(bU, R, S) {
            bU = X(bU);
            var bQ, bP, g, bM, E = "", bT = {}, bR, bO = 0;
            for (var bN = 0, bS = bU.length; bN < bS; bN++) {
                g = bU[bN];
                if (g[0] == "M") {
                    bQ = +g[1];
                    bP = +g[2]
                } else {
                    bM = k(bQ, bP, g[1], g[2], g[3], g[4], g[5], g[6]);
                    if (bO + bM > R) {
                        if (d && !bT.start) {
                            bR = k(bQ, bP, g[1], g[2], g[3], g[4], g[5], g[6], R - bO);
                            E += ["C" + bR.start.x, bR.start.y, bR.m.x, bR.m.y, bR.x, bR.y];
                            if (S) {
                                return E
                            }
                            bT.start = E;
                            E = ["M" + bR.x, bR.y + "C" + bR.n.x, bR.n.y, bR.end.x, bR.end.y, g[5], g[6]].join();
                            bO += bM;
                            bQ = +g[5];
                            bP = +g[6];
                            continue
                        }
                        if (!b && !d) {
                            bR = k(bQ, bP, g[1], g[2], g[3], g[4], g[5], g[6], R - bO);
                            return {
                                x: bR.x,
                                y: bR.y,
                                alpha: bR.alpha
                            }
                        }
                    }
                    bO += bM;
                    bQ = +g[5];
                    bP = +g[6]
                }
                E += g.shift() + g
            }
            bT.end = E;
            bR = b ? bO : d ? bT : aS.findDotsAtSegment(bQ, bP, g[0], g[1], g[2], g[3], g[4], g[5], 1);
            bR.alpha && (bR = {
                x: bR.x,
                y: bR.y,
                alpha: bR.alpha
            });
            return bR
        }
    };
    var aT = a7(1)
      , J = a7()
      , ae = a7(0, 1);
    aS.getTotalLength = aT;
    aS.getPointAtLength = J;
    aS.getSubpath = function(d, E, g) {
        if (this.getTotalLength(d) - g < 0.000001) {
            return ae(d, E).end
        }
        var b = ae(d, g, 1);
        return E ? ae(b, E).end : b
    }
    ;
    bi.getTotalLength = function() {
        if (this.type != "path") {
            return
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength()
        }
        return aT(this.attrs.path)
    }
    ;
    bi.getPointAtLength = function(b) {
        if (this.type != "path") {
            return
        }
        return J(this.attrs.path, b)
    }
    ;
    bi.getSubpath = function(d, b) {
        if (this.type != "path") {
            return
        }
        return aS.getSubpath(this.attrs.path, d, b)
    }
    ;
    var o = aS.easing_formulas = {
        linear: function(b) {
            return b
        },
        "<": function(b) {
            return bq(b, 1.7)
        },
        ">": function(b) {
            return bq(b, 0.48)
        },
        "<>": function(bN) {
            var E = 0.48 - bN / 1.04
              , g = av.sqrt(0.1734 + E * E)
              , b = g - E
              , bM = bq(ax(b), 1 / 3) * (b < 0 ? -1 : 1)
              , S = -g - E
              , R = bq(ax(S), 1 / 3) * (S < 0 ? -1 : 1)
              , d = bM + R + 0.5;
            return (1 - d) * 3 * d * d + d * d * d
        },
        backIn: function(d) {
            var b = 1.70158;
            return d * d * ((b + 1) * d - b)
        },
        backOut: function(d) {
            d = d - 1;
            var b = 1.70158;
            return d * d * ((b + 1) * d + b) + 1
        },
        elastic: function(b) {
            if (b == !!b) {
                return b
            }
            return bq(2, -10 * b) * av.sin((b - 0.075) * (2 * aW) / 0.3) + 1
        },
        bounce: function(E) {
            var d = 7.5625, g = 2.75, b;
            if (E < (1 / g)) {
                b = d * E * E
            } else {
                if (E < (2 / g)) {
                    E -= (1.5 / g);
                    b = d * E * E + 0.75
                } else {
                    if (E < (2.5 / g)) {
                        E -= (2.25 / g);
                        b = d * E * E + 0.9375
                    } else {
                        E -= (2.625 / g);
                        b = d * E * E + 0.984375
                    }
                }
            }
            return b
        }
    };
    o.easeIn = o["ease-in"] = o["<"];
    o.easeOut = o["ease-out"] = o[">"];
    o.easeInOut = o["ease-in-out"] = o["<>"];
    o["back-in"] = o.backIn;
    o["back-out"] = o.backOut;
    var ac = []
      , aO = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
        setTimeout(b, 16)
    }
      , bD = function() {
        var bM = +new Date
          , bU = 0;
        for (; bU < ac.length; bU++) {
            var b0 = ac[bU];
            if (b0.el.removed || b0.paused) {
                continue
            }
            var E = bM - b0.start, bS = b0.ms, bR = b0.easing, bV = b0.from, bP = b0.diff, d = b0.to, bO = b0.t, S = b0.el, bQ = {}, b, bY = {}, b2;
            if (b0.initstatus) {
                E = (b0.initstatus * b0.anim.top - b0.prev) / (b0.percent - b0.prev) * bS;
                b0.status = b0.initstatus;
                delete b0.initstatus;
                b0.stop && ac.splice(bU--, 1)
            } else {
                b0.status = (b0.prev + (b0.percent - b0.prev) * (E / bS)) / b0.anim.top
            }
            if (E < 0) {
                continue
            }
            if (E < bS) {
                var g = bR(E / bS);
                for (var bT in bV) {
                    if (bV[al](bT)) {
                        switch (at[bT]) {
                        case aM:
                            b = +bV[bT] + g * bS * bP[bT];
                            break;
                        case "colour":
                            b = "rgb(" + [H(ai(bV[bT].r + g * bS * bP[bT].r)), H(ai(bV[bT].g + g * bS * bP[bT].g)), H(ai(bV[bT].b + g * bS * bP[bT].b))].join(",") + ")";
                            break;
                        case "path":
                            b = [];
                            for (var bX = 0, bN = bV[bT].length; bX < bN; bX++) {
                                b[bX] = [bV[bT][bX][0]];
                                for (var bW = 1, bZ = bV[bT][bX].length; bW < bZ; bW++) {
                                    b[bX][bW] = +bV[bT][bX][bW] + g * bS * bP[bT][bX][bW]
                                }
                                b[bX] = b[bX].join(aR)
                            }
                            b = b.join(aR);
                            break;
                        case "transform":
                            if (bP[bT].real) {
                                b = [];
                                for (bX = 0,
                                bN = bV[bT].length; bX < bN; bX++) {
                                    b[bX] = [bV[bT][bX][0]];
                                    for (bW = 1,
                                    bZ = bV[bT][bX].length; bW < bZ; bW++) {
                                        b[bX][bW] = bV[bT][bX][bW] + g * bS * bP[bT][bX][bW]
                                    }
                                }
                            } else {
                                var b1 = function(b3) {
                                    return +bV[bT][b3] + g * bS * bP[bT][b3]
                                };
                                b = [["m", b1(0), b1(1), b1(2), b1(3), b1(4), b1(5)]]
                            }
                            break;
                        case "csv":
                            if (bT == "clip-rect") {
                                b = [];
                                bX = 4;
                                while (bX--) {
                                    b[bX] = +bV[bT][bX] + g * bS * bP[bT][bX]
                                }
                            }
                            break;
                        default:
                            var R = [][bF](bV[bT]);
                            b = [];
                            bX = S.paper.customAttributes[bT].length;
                            while (bX--) {
                                b[bX] = +R[bX] + g * bS * bP[bT][bX]
                            }
                            break
                        }
                        bQ[bT] = b
                    }
                }
                S.attr(bQ);
                (function(b5, b3, b4) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + b5, b3, b4)
                    })
                })(S.id, S, b0.anim)
            } else {
                (function(b5, b4, b3) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + b4.id, b4, b3);
                        eve("raphael.anim.finish." + b4.id, b4, b3);
                        aS.is(b5, "function") && b5.call(b4)
                    })
                })(b0.callback, S, b0.anim);
                S.attr(d);
                ac.splice(bU--, 1);
                if (b0.repeat > 1 && !b0.next) {
                    for (b2 in d) {
                        if (d[al](b2)) {
                            bY[b2] = b0.totalOrigin[b2]
                        }
                    }
                    b0.el.attr(bY);
                    aN(b0.anim, b0.el, b0.anim.percents[0], null, b0.totalOrigin, b0.repeat - 1)
                }
                if (b0.next && !b0.stop) {
                    aN(b0.anim, b0.el, b0.next, null, b0.totalOrigin, b0.repeat)
                }
            }
        }
        aS.svg && S && S.paper && S.paper.safari();
        ac.length && aO(bD)
    }
      , H = function(b) {
        return b > 255 ? 255 : b < 0 ? 0 : b
    };
    bi.animateWith = function(d, E, g, b, bM, bR) {
        var S = this;
        if (S.removed) {
            bR && bR.call(S);
            return S
        }
        var bP = g instanceof bB ? g : aS.animation(g, b, bM, bR), bO, bN;
        aN(bP, S, bP.percents[0], null, S.attr());
        for (var R = 0, bQ = ac.length; R < bQ; R++) {
            if (ac[R].anim == E && ac[R].el == d) {
                ac[bQ - 1].start = ac[R].start;
                break
            }
        }
        return S
    }
    ;
    function a4(bT, E, d, bS, bR, bN) {
        var bO = 3 * E
          , bQ = 3 * (bS - E) - bO
          , b = 1 - bO - bQ
          , bM = 3 * d
          , bP = 3 * (bR - d) - bM
          , bU = 1 - bM - bP;
        function S(bV) {
            return ((b * bV + bQ) * bV + bO) * bV
        }
        function g(bV, bX) {
            var bW = R(bV, bX);
            return ((bU * bW + bP) * bW + bM) * bW
        }
        function R(bV, b2) {
            var b1, b0, bY, bW, bZ, bX;
            for (bY = bV,
            bX = 0; bX < 8; bX++) {
                bW = S(bY) - bV;
                if (ax(bW) < b2) {
                    return bY
                }
                bZ = (3 * b * bY + 2 * bQ) * bY + bO;
                if (ax(bZ) < 0.000001) {
                    break
                }
                bY = bY - bW / bZ
            }
            b1 = 0;
            b0 = 1;
            bY = bV;
            if (bY < b1) {
                return b1
            }
            if (bY > b0) {
                return b0
            }
            while (b1 < b0) {
                bW = S(bY);
                if (ax(bW - bV) < b2) {
                    return bY
                }
                if (bV > bW) {
                    b1 = bY
                } else {
                    b0 = bY
                }
                bY = (b0 - b1) / 2 + b1
            }
            return bY
        }
        return g(bT, 1 / (200 * bN))
    }
    bi.onAnimation = function(b) {
        b ? eve.on("raphael.anim.frame." + this.id, b) : eve.unbind("raphael.anim.frame." + this.id);
        return this
    }
    ;
    function bB(R, g) {
        var d = []
          , E = {};
        this.ms = g;
        this.times = 1;
        if (R) {
            for (var b in R) {
                if (R[al](b)) {
                    E[ao(b)] = R[b];
                    d.push(ao(b))
                }
            }
            d.sort(u)
        }
        this.anim = E;
        this.top = d[d.length - 1];
        this.percents = d
    }
    bB.prototype.delay = function(d) {
        var b = new bB(this.anim,this.ms);
        b.times = this.times;
        b.del = +d || 0;
        return b
    }
    ;
    bB.prototype.repeat = function(d) {
        var b = new bB(this.anim,this.ms);
        b.del = this.del;
        b.times = av.floor(m(d, 0)) || 1;
        return b
    }
    ;
    function aN(b4, g, b, b2, bM, bQ) {
        b = ao(b);
        var cb, S, bP, cc = [], bW, bV, R, bY = b4.ms, b3 = {}, E = {}, bS = {};
        if (b2) {
            for (b7 = 0,
            bR = ac.length; b7 < bR; b7++) {
                var b9 = ac[b7];
                if (b9.el.id == g.id && b9.anim == b4) {
                    if (b9.percent != b) {
                        ac.splice(b7, 1);
                        bP = 1
                    } else {
                        S = b9
                    }
                    g.attr(b9.totalOrigin);
                    break
                }
            }
        } else {
            b2 = +E
        }
        for (var b7 = 0, bR = b4.percents.length; b7 < bR; b7++) {
            if (b4.percents[b7] == b || b4.percents[b7] > b2 * b4.top) {
                b = b4.percents[b7];
                bV = b4.percents[b7 - 1] || 0;
                bY = bY / b4.top * (b - bV);
                bW = b4.percents[b7 + 1];
                cb = b4.anim[b];
                break
            } else {
                if (b2) {
                    g.attr(b4.anim[b4.percents[b7]])
                }
            }
        }
        if (!cb) {
            return
        }
        if (!S) {
            for (var b0 in cb) {
                if (cb[al](b0)) {
                    if (at[al](b0) || g.paper.customAttributes[al](b0)) {
                        b3[b0] = g.attr(b0);
                        (b3[b0] == null) && (b3[b0] = r[b0]);
                        E[b0] = cb[b0];
                        switch (at[b0]) {
                        case aM:
                            bS[b0] = (E[b0] - b3[b0]) / bY;
                            break;
                        case "colour":
                            b3[b0] = aS.getRGB(b3[b0]);
                            var b1 = aS.getRGB(E[b0]);
                            bS[b0] = {
                                r: (b1.r - b3[b0].r) / bY,
                                g: (b1.g - b3[b0].g) / bY,
                                b: (b1.b - b3[b0].b) / bY
                            };
                            break;
                        case "path":
                            var bN = X(b3[b0], E[b0])
                              , bU = bN[1];
                            b3[b0] = bN[0];
                            bS[b0] = [];
                            for (b7 = 0,
                            bR = b3[b0].length; b7 < bR; b7++) {
                                bS[b0][b7] = [0];
                                for (var b6 = 1, b8 = b3[b0][b7].length; b6 < b8; b6++) {
                                    bS[b0][b7][b6] = (bU[b7][b6] - b3[b0][b7][b6]) / bY
                                }
                            }
                            break;
                        case "transform":
                            var ce = g._
                              , cd = aC(ce[b0], E[b0]);
                            if (cd) {
                                b3[b0] = cd.from;
                                E[b0] = cd.to;
                                bS[b0] = [];
                                bS[b0].real = true;
                                for (b7 = 0,
                                bR = b3[b0].length; b7 < bR; b7++) {
                                    bS[b0][b7] = [b3[b0][b7][0]];
                                    for (b6 = 1,
                                    b8 = b3[b0][b7].length; b6 < b8; b6++) {
                                        bS[b0][b7][b6] = (E[b0][b7][b6] - b3[b0][b7][b6]) / bY
                                    }
                                }
                            } else {
                                var bZ = (g.matrix || new aG)
                                  , ca = {
                                    _: {
                                        transform: ce.transform
                                    },
                                    getBBox: function() {
                                        return g.getBBox(1)
                                    }
                                };
                                b3[b0] = [bZ.a, bZ.b, bZ.c, bZ.d, bZ.e, bZ.f];
                                aP(ca, E[b0]);
                                E[b0] = ca._.transform;
                                bS[b0] = [(ca.matrix.a - bZ.a) / bY, (ca.matrix.b - bZ.b) / bY, (ca.matrix.c - bZ.c) / bY, (ca.matrix.d - bZ.d) / bY, (ca.matrix.e - bZ.e) / bY, (ca.matrix.f - bZ.f) / bY]
                            }
                            break;
                        case "csv":
                            var d = bI(cb[b0])[F](a)
                              , bO = bI(b3[b0])[F](a);
                            if (b0 == "clip-rect") {
                                b3[b0] = bO;
                                bS[b0] = [];
                                b7 = bO.length;
                                while (b7--) {
                                    bS[b0][b7] = (d[b7] - b3[b0][b7]) / bY
                                }
                            }
                            E[b0] = d;
                            break;
                        default:
                            d = [][bF](cb[b0]);
                            bO = [][bF](b3[b0]);
                            bS[b0] = [];
                            b7 = g.paper.customAttributes[b0].length;
                            while (b7--) {
                                bS[b0][b7] = ((d[b7] || 0) - (bO[b7] || 0)) / bY
                            }
                            break
                        }
                    }
                }
            }
            var bX = cb.easing
              , b5 = aS.easing_formulas[bX];
            if (!b5) {
                b5 = bI(bX).match(c);
                if (b5 && b5.length == 5) {
                    var bT = b5;
                    b5 = function(cf) {
                        return a4(cf, +bT[1], +bT[2], +bT[3], +bT[4], bY)
                    }
                } else {
                    b5 = bC
                }
            }
            R = cb.start || b4.start || +new Date;
            b9 = {
                anim: b4,
                percent: b,
                timestamp: R,
                start: R + (b4.del || 0),
                status: 0,
                initstatus: b2 || 0,
                stop: false,
                ms: bY,
                easing: b5,
                from: b3,
                diff: bS,
                to: E,
                el: g,
                callback: cb.callback,
                prev: bV,
                next: bW,
                repeat: bQ || b4.times,
                origin: g.attr(),
                totalOrigin: bM
            };
            ac.push(b9);
            if (b2 && !S && !bP) {
                b9.stop = true;
                b9.start = new Date - bY * b2;
                if (ac.length == 1) {
                    return bD()
                }
            }
            if (bP) {
                b9.start = new Date - b9.ms * b2
            }
            ac.length == 1 && aO(bD)
        } else {
            S.initstatus = b2;
            S.start = new Date - S.ms * b2
        }
        eve("raphael.anim.start." + g.id, g, b4)
    }
    aS.animation = function(R, d, bM, S) {
        if (R instanceof bB) {
            return R
        }
        if (aS.is(bM, "function") || !bM) {
            S = S || bM || null;
            bM = null
        }
        R = Object(R);
        d = +d || 0;
        var E = {}, g, b;
        for (b in R) {
            if (R[al](b) && ao(b) != b && ao(b) + "%" != b) {
                g = true;
                E[b] = R[b]
            }
        }
        if (!g) {
            return new bB(R,d)
        } else {
            bM && (E.easing = bM);
            S && (E.callback = S);
            return new bB({
                100: E
            },d)
        }
    }
    ;
    bi.animate = function(E, b, S, R) {
        var d = this;
        if (d.removed) {
            R && R.call(d);
            return d
        }
        var g = E instanceof bB ? E : aS.animation(E, b, S, R);
        aN(g, d, g.percents[0], null, d.attr());
        return d
    }
    ;
    bi.setTime = function(d, b) {
        if (d && b != null) {
            this.status(d, bn(b, d.ms) / d.ms)
        }
        return this
    }
    ;
    bi.status = function(R, E) {
        var d = [], g = 0, b, S;
        if (E != null) {
            aN(R, this, -1, bn(E, 1));
            return this
        } else {
            b = ac.length;
            for (; g < b; g++) {
                S = ac[g];
                if (S.el.id == this.id && (!R || S.anim == R)) {
                    if (R) {
                        return S.status
                    }
                    d.push({
                        anim: S.anim,
                        status: S.status
                    })
                }
            }
            if (R) {
                return 0
            }
            return d
        }
    }
    ;
    bi.pause = function(d) {
        for (var b = 0; b < ac.length; b++) {
            if (ac[b].el.id == this.id && (!d || ac[b].anim == d)) {
                if (eve("raphael.anim.pause." + this.id, this, ac[b].anim) !== false) {
                    ac[b].paused = true
                }
            }
        }
        return this
    }
    ;
    bi.resume = function(d) {
        for (var b = 0; b < ac.length; b++) {
            if (ac[b].el.id == this.id && (!d || ac[b].anim == d)) {
                var g = ac[b];
                if (eve("raphael.anim.resume." + this.id, this, g.anim) !== false) {
                    delete g.paused;
                    this.status(g.anim, g.status)
                }
            }
        }
        return this
    }
    ;
    bi.stop = function(d) {
        for (var b = 0; b < ac.length; b++) {
            if (ac[b].el.id == this.id && (!d || ac[b].anim == d)) {
                if (eve("raphael.anim.stop." + this.id, this, ac[b].anim) !== false) {
                    ac.splice(b--, 1)
                }
            }
        }
        return this
    }
    ;
    function ab(d) {
        for (var b = 0; b < ac.length; b++) {
            if (ac[b].el.paper == d) {
                ac.splice(b--, 1)
            }
        }
    }
    eve.on("raphael.remove", ab);
    eve.on("raphael.clear", ab);
    bi.toString = function() {
        return "Rapha\xebl\u2019s object"
    }
    ;
    var am = function(b) {
        this.items = [];
        this.length = 0;
        this.type = "set";
        if (b) {
            for (var d = 0, g = b.length; d < g; d++) {
                if (b[d] && (b[d].constructor == bi.constructor || b[d].constructor == am)) {
                    this[this.items.length] = this.items[this.items.length] = b[d];
                    this.length++
                }
            }
        }
    }
      , bd = am.prototype;
    bd.push = function() {
        var E, b;
        for (var d = 0, g = arguments.length; d < g; d++) {
            E = arguments[d];
            if (E && (E.constructor == bi.constructor || E.constructor == am)) {
                b = this.items.length;
                this[b] = this.items[b] = E;
                this.length++
            }
        }
        return this
    }
    ;
    bd.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop()
    }
    ;
    bd.forEach = function(E, b) {
        for (var d = 0, g = this.items.length; d < g; d++) {
            if (E.call(b, this.items[d], d) === false) {
                return this
            }
        }
        return this
    }
    ;
    for (var B in bi) {
        if (bi[al](B)) {
            bd[B] = (function(b) {
                return function() {
                    var d = arguments;
                    return this.forEach(function(g) {
                        g[b][bH](g, d)
                    })
                }
            })(B)
        }
    }
    bd.attr = function(d, S) {
        if (d && aS.is(d, be) && aS.is(d[0], "object")) {
            for (var b = 0, R = d.length; b < R; b++) {
                this.items[b].attr(d[b])
            }
        } else {
            for (var g = 0, E = this.items.length; g < E; g++) {
                this.items[g].attr(d, S)
            }
        }
        return this
    }
    ;
    bd.clear = function() {
        while (this.length) {
            this.pop()
        }
    }
    ;
    bd.splice = function(E, bM, bN) {
        E = E < 0 ? m(this.length + E, 0) : E;
        bM = m(0, bn(this.length - E, bM));
        var g = [], b = [], d = [], R;
        for (R = 2; R < arguments.length; R++) {
            d.push(arguments[R])
        }
        for (R = 0; R < bM; R++) {
            b.push(this[E + R])
        }
        for (; R < this.length - E; R++) {
            g.push(this[E + R])
        }
        var S = d.length;
        for (R = 0; R < S + g.length; R++) {
            this.items[E + R] = this[E + R] = R < S ? d[R] : g[R - S]
        }
        R = this.items.length = this.length -= bM - S;
        while (this[R]) {
            delete this[R++]
        }
        return new am(b)
    }
    ;
    bd.exclude = function(g) {
        for (var b = 0, d = this.length; b < d; b++) {
            if (this[b] == g) {
                this.splice(b, 1);
                return true
            }
        }
    }
    ;
    bd.animate = function(g, b, bM, bO) {
        (aS.is(bM, "function") || !bM) && (bO = bM || null);
        var S = this.items.length, E = S, bP, bN = this, R;
        if (!S) {
            return this
        }
        bO && (R = function() {
            !--S && bO.call(bN)
        }
        );
        bM = aS.is(bM, ak) ? bM : R;
        var d = aS.animation(g, b, bM, R);
        bP = this.items[--E].animate(d);
        while (E--) {
            this.items[E] && !this.items[E].removed && this.items[E].animateWith(bP, d, d)
        }
        return this
    }
    ;
    bd.insertAfter = function(d) {
        var b = this.items.length;
        while (b--) {
            this.items[b].insertAfter(d)
        }
        return this
    }
    ;
    bd.getBBox = function() {
        var b = []
          , S = []
          , d = []
          , E = [];
        for (var g = this.items.length; g--; ) {
            if (!this.items[g].removed) {
                var R = this.items[g].getBBox();
                b.push(R.x);
                S.push(R.y);
                d.push(R.x + R.width);
                E.push(R.y + R.height)
            }
        }
        b = bn[bH](0, b);
        S = bn[bH](0, S);
        d = m[bH](0, d);
        E = m[bH](0, E);
        return {
            x: b,
            y: S,
            x2: d,
            y2: E,
            width: d - b,
            height: E - S
        }
    }
    ;
    bd.clone = function(g) {
        g = new am;
        for (var b = 0, d = this.items.length; b < d; b++) {
            g.push(this.items[b].clone())
        }
        return g
    }
    ;
    bd.toString = function() {
        return "Rapha\xebl\u2018s set"
    }
    ;
    bd.glow = function(d) {
        var b = new am;
        this.forEach(function(E, R) {
            var S = E.glow(d);
            if (S != null) {
                S.forEach(function(g, bM) {
                    b.push(g)
                })
            }
        });
        return b
    }
    ;
    aS.registerFont = function(d) {
        if (!d.face) {
            return d
        }
        this.fonts = this.fonts || {};
        var E = {
            w: d.w,
            face: {},
            glyphs: {}
        }
          , g = d.face["font-family"];
        for (var bM in d.face) {
            if (d.face[al](bM)) {
                E.face[bM] = d.face[bM]
            }
        }
        if (this.fonts[g]) {
            this.fonts[g].push(E)
        } else {
            this.fonts[g] = [E]
        }
        if (!d.svg) {
            E.face["units-per-em"] = V(d.face["units-per-em"], 10);
            for (var R in d.glyphs) {
                if (d.glyphs[al](R)) {
                    var S = d.glyphs[R];
                    E.glyphs[R] = {
                        w: S.w,
                        k: {},
                        d: S.d && "M" + S.d.replace(/[mlcxtrv]/g, function(bN) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[bN] || "M"
                        }) + "z"
                    };
                    if (S.k) {
                        for (var b in S.k) {
                            if (S[al](b)) {
                                E.glyphs[R].k[b] = S.k[b]
                            }
                        }
                    }
                }
            }
        }
        return d
    }
    ;
    a5.getFont = function(bN, bO, d, E) {
        E = E || "normal";
        d = d || "normal";
        bO = +bO || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[bO] || 400;
        if (!aS.fonts) {
            return
        }
        var R = aS.fonts[bN];
        if (!R) {
            var g = new RegExp("(^|\\s)" + bN.replace(/[^\w\d\s+!~.:_-]/g, aY) + "(\\s|$)","i");
            for (var b in aS.fonts) {
                if (aS.fonts[al](b)) {
                    if (g.test(b)) {
                        R = aS.fonts[b];
                        break
                    }
                }
            }
        }
        var S;
        if (R) {
            for (var bM = 0, bP = R.length; bM < bP; bM++) {
                S = R[bM];
                if (S.face["font-weight"] == bO && (S.face["font-style"] == d || !S.face["font-style"]) && S.face["font-stretch"] == E) {
                    break
                }
            }
        }
        return S
    }
    ;
    a5.print = function(bM, S, b, bP, bQ, bZ, d) {
        bZ = bZ || "middle";
        d = m(bn(d || 0, 1), -1);
        var bY = bI(b)[F](aY), bV = 0, bX = 0, bT = aY, b0;
        aS.is(bP, b) && (bP = this.getFont(bP));
        if (bP) {
            b0 = (bQ || 16) / bP.face["units-per-em"];
            var E = bP.face.bbox[F](a)
              , bO = +E[0]
              , g = E[3] - E[1]
              , R = 0
              , bR = +E[1] + (bZ == "baseline" ? g + (+bP.face.descent) : g / 2);
            for (var bU = 0, bN = bY.length; bU < bN; bU++) {
                if (bY[bU] == "\n") {
                    bV = 0;
                    bW = 0;
                    bX = 0;
                    R += g
                } else {
                    var bS = bX && bP.glyphs[bY[bU - 1]] || {}
                      , bW = bP.glyphs[bY[bU]];
                    bV += bX ? (bS.w || bP.w) + (bS.k && bS.k[bY[bU]] || 0) + (bP.w * d) : 0;
                    bX = 1
                }
                if (bW && bW.d) {
                    bT += aS.transformPath(bW.d, ["t", bV * b0, R * b0, "s", b0, b0, bO, bR, "t", (bM - bO) / b0, (S - bR) / b0])
                }
            }
        }
        return this.path(bT).attr({
            fill: "#000",
            stroke: "none"
        })
    }
    ;
    a5.add = function(E) {
        if (aS.is(E, "array")) {
            var g = this.set(), d = 0, R = E.length, b;
            for (; d < R; d++) {
                b = E[d] || {};
                bx[al](b.type) && g.push(this[b.type]().attr(b))
            }
        }
        return g
    }
    ;
    aS.format = function(d, g) {
        var b = aS.is(g, be) ? [0][bF](g) : arguments;
        d && aS.is(d, ak) && b.length - 1 && (d = d.replace(bs, function(R, E) {
            return b[++E] == null ? aY : b[E]
        }));
        return d || aY
    }
    ;
    aS.fullfill = (function() {
        var g = /\{([^\}]+)\}/g
          , b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
          , d = function(S, R, bM) {
            var E = bM;
            R.replace(b, function(bP, bO, bN, bR, bQ) {
                bO = bO || bR;
                if (E) {
                    if (bO in E) {
                        E = E[bO]
                    }
                    typeof E == "function" && bQ && (E = E())
                }
            });
            E = (E == null || E == bM ? S : E) + "";
            return E
        };
        return function(R, E) {
            return String(R).replace(g, function(bM, S) {
                return d(bM, S, E)
            })
        }
    })();
    aS.ninja = function() {
        s.was ? (aB.win.Raphael = s.is) : delete Raphael;
        return aS
    }
    ;
    aS.st = bd;
    (function(E, d, g) {
        if (E.readyState == null && E.addEventListener) {
            E.addEventListener(d, g = function() {
                E.removeEventListener(d, g, false);
                E.readyState = "complete"
            }
            , false);
            E.readyState = "loading"
        }
        function b() {
            (/in/).test(E.readyState) ? setTimeout(b, 9) : aS.eve("raphael.DOMload")
        }
        b()
    })(document, "DOMContentLoaded");
    s.was ? (aB.win.Raphael = aS) : (Raphael = aS);
    eve.on("raphael.DOMload", function() {
        ap = true
    })
})();
window.Raphael.svg && function(m) {
    var d = "hasOwnProperty"
      , C = String
      , o = parseFloat
      , r = parseInt
      , f = Math
      , D = f.max
      , t = f.abs
      , h = f.pow
      , g = /[, ]+/
      , A = m.eve
      , s = ""
      , k = " ";
    var p = "http://www.w3.org/1999/xlink"
      , z = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }
      , v = {};
    m.toString = function() {
        return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
    }
    ;
    var j = function(G, E) {
        if (E) {
            if (typeof G == "string") {
                G = j(G)
            }
            for (var F in E) {
                if (E[d](F)) {
                    if (F.substring(0, 6) == "xlink:") {
                        G.setAttributeNS(p, F.substring(6), C(E[F]))
                    } else {
                        G.setAttribute(F, C(E[F]))
                    }
                }
            }
        } else {
            G = m._g.doc.createElementNS("http://www.w3.org/2000/svg", G);
            G.style && (G.style.webkitTapHighlightColor = "rgba(0,0,0,0)")
        }
        return G
    }
      , a = function(N, R) {
        var P = "linear"
          , F = N.id + R
          , L = 0.5
          , J = 0.5
          , H = N.node
          , E = N.paper
          , U = H.style
          , G = m._g.doc.getElementById(F);
        if (!G) {
            R = C(R).replace(m._radial_gradient, function(X, V, Y) {
                P = "radial";
                if (V && Y) {
                    L = o(V);
                    J = o(Y);
                    var W = ((J > 0.5) * 2 - 1);
                    h(L - 0.5, 2) + h(J - 0.5, 2) > 0.25 && (J = f.sqrt(0.25 - h(L - 0.5, 2)) * W + 0.5) && J != 0.5 && (J = J.toFixed(5) - 0.00001 * W)
                }
                return s
            });
            R = R.split(/\s*\-\s*/);
            if (P == "linear") {
                var K = R.shift();
                K = -o(K);
                if (isNaN(K)) {
                    return null
                }
                var I = [0, 0, f.cos(m.rad(K)), f.sin(m.rad(K))]
                  , Q = 1 / (D(t(I[2]), t(I[3])) || 1);
                I[2] *= Q;
                I[3] *= Q;
                if (I[2] < 0) {
                    I[0] = -I[2];
                    I[2] = 0
                }
                if (I[3] < 0) {
                    I[1] = -I[3];
                    I[3] = 0
                }
            }
            var O = m._parseDots(R);
            if (!O) {
                return null
            }
            F = F.replace(/[\(\)\s,\xb0#]/g, "_");
            if (N.gradient && F != N.gradient.id) {
                E.defs.removeChild(N.gradient);
                delete N.gradient
            }
            if (!N.gradient) {
                G = j(P + "Gradient", {
                    id: F
                });
                N.gradient = G;
                j(G, P == "radial" ? {
                    fx: L,
                    fy: J
                } : {
                    x1: I[0],
                    y1: I[1],
                    x2: I[2],
                    y2: I[3],
                    gradientTransform: N.matrix.invert()
                });
                E.defs.appendChild(G);
                for (var M = 0, S = O.length; M < S; M++) {
                    G.appendChild(j("stop", {
                        offset: O[M].offset ? O[M].offset : M ? "100%" : "0%",
                        "stop-color": O[M].color || "#fff"
                    }))
                }
            }
        }
        j(H, {
            fill: "url(#" + F + ")",
            opacity: 1,
            "fill-opacity": 1
        });
        U.fill = s;
        U.opacity = 1;
        U.fillOpacity = 1;
        return 1
    }
      , b = function(F) {
        var E = F.getBBox(1);
        j(F.pattern, {
            patternTransform: F.matrix.invert() + " translate(" + E.x + "," + E.y + ")"
        })
    }
      , c = function(P, R, K) {
        if (P.type == "path") {
            var E = C(R).toLowerCase().split("-"), O = P.paper, ad = K ? "end" : "start", U = P.node, Q = P.attrs, J = Q["stroke-width"], Y = E.length, H = "classic", X, G, M, V, S, L = 3, Z = 3, N = 5;
            while (Y--) {
                switch (E[Y]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    H = E[Y];
                    break;
                case "wide":
                    Z = 5;
                    break;
                case "narrow":
                    Z = 2;
                    break;
                case "long":
                    L = 5;
                    break;
                case "short":
                    L = 2;
                    break
                }
            }
            if (H == "open") {
                L += 2;
                Z += 2;
                N += 2;
                M = 1;
                V = K ? 4 : 1;
                S = {
                    fill: "none",
                    stroke: Q.stroke
                }
            } else {
                V = M = L / 2;
                S = {
                    fill: Q.stroke,
                    stroke: "none"
                }
            }
            if (P._.arrows) {
                if (K) {
                    P._.arrows.endPath && v[P._.arrows.endPath]--;
                    P._.arrows.endMarker && v[P._.arrows.endMarker]--
                } else {
                    P._.arrows.startPath && v[P._.arrows.startPath]--;
                    P._.arrows.startMarker && v[P._.arrows.startMarker]--
                }
            } else {
                P._.arrows = {}
            }
            if (H != "none") {
                var F = "raphael-marker-" + H
                  , ac = "raphael-marker-" + ad + H + L + Z;
                if (!m._g.doc.getElementById(F)) {
                    O.defs.appendChild(j(j("path"), {
                        "stroke-linecap": "round",
                        d: z[H],
                        id: F
                    }));
                    v[F] = 1
                } else {
                    v[F]++
                }
                var I = m._g.doc.getElementById(ac), W;
                if (!I) {
                    I = j(j("marker"), {
                        id: ac,
                        markerHeight: Z,
                        markerWidth: L,
                        orient: "auto",
                        refX: V,
                        refY: Z / 2
                    });
                    W = j(j("use"), {
                        "xlink:href": "#" + F,
                        transform: (K ? "rotate(180 " + L / 2 + " " + Z / 2 + ") " : s) + "scale(" + L / N + "," + Z / N + ")",
                        "stroke-width": (1 / ((L / N + Z / N) / 2)).toFixed(4)
                    });
                    I.appendChild(W);
                    O.defs.appendChild(I);
                    v[ac] = 1
                } else {
                    v[ac]++;
                    W = I.getElementsByTagName("use")[0]
                }
                j(W, S);
                var ab = M * (H != "diamond" && H != "oval");
                if (K) {
                    X = P._.arrows.startdx * J || 0;
                    G = m.getTotalLength(Q.path) - ab * J
                } else {
                    X = ab * J;
                    G = m.getTotalLength(Q.path) - (P._.arrows.enddx * J || 0)
                }
                S = {};
                S["marker-" + ad] = "url(#" + ac + ")";
                if (G || X) {
                    S.d = Raphael.getSubpath(Q.path, X, G)
                }
                j(U, S);
                P._.arrows[ad + "Path"] = F;
                P._.arrows[ad + "Marker"] = ac;
                P._.arrows[ad + "dx"] = ab;
                P._.arrows[ad + "Type"] = H;
                P._.arrows[ad + "String"] = R
            } else {
                if (K) {
                    X = P._.arrows.startdx * J || 0;
                    G = m.getTotalLength(Q.path) - X
                } else {
                    X = 0;
                    G = m.getTotalLength(Q.path) - (P._.arrows.enddx * J || 0)
                }
                P._.arrows[ad + "Path"] && j(U, {
                    d: Raphael.getSubpath(Q.path, X, G)
                });
                delete P._.arrows[ad + "Path"];
                delete P._.arrows[ad + "Marker"];
                delete P._.arrows[ad + "dx"];
                delete P._.arrows[ad + "Type"];
                delete P._.arrows[ad + "String"]
            }
            for (S in v) {
                if (v[d](S) && !v[S]) {
                    var aa = m._g.doc.getElementById(S);
                    aa && aa.parentNode.removeChild(aa)
                }
            }
        }
    }
      , w = {
        "": [0],
        none: [0],
        "-": [3, 1],
        ".": [1, 1],
        "-.": [3, 1, 1, 1],
        "-..": [3, 1, 1, 1, 1, 1],
        ". ": [1, 3],
        "- ": [4, 3],
        "--": [8, 3],
        "- .": [4, 3, 1, 3],
        "--.": [8, 3, 1, 3],
        "--..": [8, 3, 1, 3, 1, 3]
    }
      , l = function(K, I, J) {
        I = w[C(I).toLowerCase()];
        if (I) {
            var G = K.attrs["stroke-width"] || "1"
              , E = {
                round: G,
                square: G,
                butt: 0
            }[K.attrs["stroke-linecap"] || J["stroke-linecap"]] || 0
              , H = []
              , F = I.length;
            while (F--) {
                H[F] = I[F] * G + ((F % 2) ? 1 : -1) * E
            }
            j(K.node, {
                "stroke-dasharray": H.join(",")
            })
        }
    }
      , x = function(P, Y) {
        var U = P.node
          , Q = P.attrs
          , N = U.style.visibility;
        U.style.visibility = "hidden";
        for (var S in Y) {
            if (Y[d](S)) {
                if (!m._availableAttrs[d](S)) {
                    continue
                }
                var R = Y[S];
                Q[S] = R;
                switch (S) {
                case "blur":
                    P.blur(R);
                    break;
                case "href":
                case "title":
                case "target":
                    var W = U.parentNode;
                    if (W.tagName.toLowerCase() != "a") {
                        var I = j("a");
                        W.insertBefore(I, U);
                        I.appendChild(U);
                        W = I
                    }
                    if (S == "target") {
                        W.setAttributeNS(p, "show", R == "blank" ? "new" : R)
                    } else {
                        W.setAttributeNS(p, S, R)
                    }
                    break;
                case "cursor":
                    U.style.cursor = R;
                    break;
                case "transform":
                    P.transform(R);
                    break;
                case "arrow-start":
                    c(P, R);
                    break;
                case "arrow-end":
                    c(P, R, 1);
                    break;
                case "clip-rect":
                    var F = C(R).split(g);
                    if (F.length == 4) {
                        P.clip && P.clip.parentNode.parentNode.removeChild(P.clip.parentNode);
                        var G = j("clipPath")
                          , V = j("rect");
                        G.id = m.createUUID();
                        j(V, {
                            x: F[0],
                            y: F[1],
                            width: F[2],
                            height: F[3]
                        });
                        G.appendChild(V);
                        P.paper.defs.appendChild(G);
                        j(U, {
                            "clip-path": "url(#" + G.id + ")"
                        });
                        P.clip = V
                    }
                    if (!R) {
                        var O = U.getAttribute("clip-path");
                        if (O) {
                            var X = m._g.doc.getElementById(O.replace(/(^url\(#|\)$)/g, s));
                            X && X.parentNode.removeChild(X);
                            j(U, {
                                "clip-path": s
                            });
                            delete P.clip
                        }
                    }
                    break;
                case "path":
                    if (P.type == "path") {
                        j(U, {
                            d: R ? Q.path = m._pathToAbsolute(R) : "M0,0"
                        });
                        P._.dirty = 1;
                        if (P._.arrows) {
                            "startString"in P._.arrows && c(P, P._.arrows.startString);
                            "endString"in P._.arrows && c(P, P._.arrows.endString, 1)
                        }
                    }
                    break;
                case "width":
                    U.setAttribute(S, R);
                    P._.dirty = 1;
                    if (Q.fx) {
                        S = "x";
                        R = Q.x
                    } else {
                        break
                    }
                case "x":
                    if (Q.fx) {
                        R = -Q.x - (Q.width || 0)
                    }
                case "rx":
                    if (S == "rx" && P.type == "rect") {
                        break
                    }
                case "cx":
                    U.setAttribute(S, R);
                    P.pattern && b(P);
                    P._.dirty = 1;
                    break;
                case "height":
                    U.setAttribute(S, R);
                    P._.dirty = 1;
                    if (Q.fy) {
                        S = "y";
                        R = Q.y
                    } else {
                        break
                    }
                case "y":
                    if (Q.fy) {
                        R = -Q.y - (Q.height || 0)
                    }
                case "ry":
                    if (S == "ry" && P.type == "rect") {
                        break
                    }
                case "cy":
                    U.setAttribute(S, R);
                    P.pattern && b(P);
                    P._.dirty = 1;
                    break;
                case "r":
                    if (P.type == "rect") {
                        j(U, {
                            rx: R,
                            ry: R
                        })
                    } else {
                        U.setAttribute(S, R)
                    }
                    P._.dirty = 1;
                    break;
                case "src":
                    if (P.type == "image") {
                        U.setAttributeNS(p, "href", R)
                    }
                    break;
                case "stroke-width":
                    if (P._.sx != 1 || P._.sy != 1) {
                        R /= D(t(P._.sx), t(P._.sy)) || 1
                    }
                    if (P.paper._vbSize) {
                        R *= P.paper._vbSize
                    }
                    U.setAttribute(S, R);
                    if (Q["stroke-dasharray"]) {
                        l(P, Q["stroke-dasharray"], Y)
                    }
                    if (P._.arrows) {
                        "startString"in P._.arrows && c(P, P._.arrows.startString);
                        "endString"in P._.arrows && c(P, P._.arrows.endString, 1)
                    }
                    break;
                case "stroke-dasharray":
                    l(P, R, Y);
                    break;
                case "fill":
                    var J = C(R).match(m._ISURL);
                    if (J) {
                        G = j("pattern");
                        var M = j("image");
                        G.id = m.createUUID();
                        j(G, {
                            x: 0,
                            y: 0,
                            patternUnits: "userSpaceOnUse",
                            height: 1,
                            width: 1
                        });
                        j(M, {
                            x: 0,
                            y: 0,
                            "xlink:href": J[1]
                        });
                        G.appendChild(M);
                        (function(Z) {
                            m._preload(J[1], function() {
                                var aa = this.offsetWidth
                                  , ab = this.offsetHeight;
                                j(Z, {
                                    width: aa,
                                    height: ab
                                });
                                j(M, {
                                    width: aa,
                                    height: ab
                                });
                                P.paper.safari()
                            })
                        })(G);
                        P.paper.defs.appendChild(G);
                        j(U, {
                            fill: "url(#" + G.id + ")"
                        });
                        P.pattern = G;
                        P.pattern && b(P);
                        break
                    }
                    var H = m.getRGB(R);
                    if (!H.error) {
                        delete Y.gradient;
                        delete Q.gradient;
                        !m.is(Q.opacity, "undefined") && m.is(Y.opacity, "undefined") && j(U, {
                            opacity: Q.opacity
                        });
                        !m.is(Q["fill-opacity"], "undefined") && m.is(Y["fill-opacity"], "undefined") && j(U, {
                            "fill-opacity": Q["fill-opacity"]
                        })
                    } else {
                        if ((P.type == "circle" || P.type == "ellipse" || C(R).charAt() != "r") && a(P, R)) {
                            if ("opacity"in Q || "fill-opacity"in Q) {
                                var E = m._g.doc.getElementById(U.getAttribute("fill").replace(/^url\(#|\)$/g, s));
                                if (E) {
                                    var K = E.getElementsByTagName("stop");
                                    j(K[K.length - 1], {
                                        "stop-opacity": ("opacity"in Q ? Q.opacity : 1) * ("fill-opacity"in Q ? Q["fill-opacity"] : 1)
                                    })
                                }
                            }
                            Q.gradient = R;
                            Q.fill = "none";
                            break
                        }
                    }
                    H[d]("opacity") && j(U, {
                        "fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                    });
                case "stroke":
                    H = m.getRGB(R);
                    U.setAttribute(S, H.hex);
                    S == "stroke" && H[d]("opacity") && j(U, {
                        "stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                    });
                    if (S == "stroke" && P._.arrows) {
                        "startString"in P._.arrows && c(P, P._.arrows.startString);
                        "endString"in P._.arrows && c(P, P._.arrows.endString, 1)
                    }
                    break;
                case "gradient":
                    (P.type == "circle" || P.type == "ellipse" || C(R).charAt() != "r") && a(P, R);
                    break;
                case "opacity":
                    if (Q.gradient && !Q[d]("stroke-opacity")) {
                        j(U, {
                            "stroke-opacity": R > 1 ? R / 100 : R
                        })
                    }
                case "fill-opacity":
                    if (Q.gradient) {
                        E = m._g.doc.getElementById(U.getAttribute("fill").replace(/^url\(#|\)$/g, s));
                        if (E) {
                            K = E.getElementsByTagName("stop");
                            j(K[K.length - 1], {
                                "stop-opacity": R
                            })
                        }
                        break
                    }
                default:
                    S == "font-size" && (R = r(R, 10) + "px");
                    var L = S.replace(/(\-.)/g, function(Z) {
                        return Z.substring(1).toUpperCase()
                    });
                    U.style[L] = R;
                    P._.dirty = 1;
                    U.setAttribute(S, R);
                    break
                }
            }
        }
        q(P, Y);
        U.style.visibility = N
    }
      , B = 1.2
      , q = function(E, I) {
        if (E.type != "text" || !(I[d]("text") || I[d]("font") || I[d]("font-size") || I[d]("x") || I[d]("y"))) {
            return
        }
        var N = E.attrs
          , G = E.node
          , P = G.firstChild ? r(m._g.doc.defaultView.getComputedStyle(G.firstChild, s).getPropertyValue("font-size"), 10) : 10;
        if (I[d]("text")) {
            N.text = I.text;
            while (G.firstChild) {
                G.removeChild(G.firstChild)
            }
            var H = C(I.text).split("\n"), F = [], L;
            for (var J = 0, O = H.length; J < O; J++) {
                L = j("tspan");
                J && j(L, {
                    dy: P * B,
                    x: N.x
                });
                L.appendChild(m._g.doc.createTextNode(H[J]));
                G.appendChild(L);
                F[J] = L
            }
        } else {
            F = G.getElementsByTagName("tspan");
            for (J = 0,
            O = F.length; J < O; J++) {
                if (J) {
                    j(F[J], {
                        dy: P * B,
                        x: N.x
                    })
                } else {
                    j(F[0], {
                        dy: 0
                    })
                }
            }
        }
        j(G, {
            x: N.x,
            y: N.y
        });
        E._.dirty = 1;
        var K = E._getBBox()
          , M = N.y - (K.y + K.height / 2);
        M && m.is(M, "finite") && j(F[0], {
            dy: M
        })
    }
      , u = function(F, E) {
        var H = 0
          , G = 0;
        this[0] = this.node = F;
        F.raphael = true;
        this.id = m._oid++;
        F.raphaelid = this.id;
        this.matrix = m.matrix();
        this.realPath = null;
        this.paper = E;
        this.attrs = this.attrs || {};
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        };
        !E.bottom && (E.bottom = this);
        this.prev = E.top;
        E.top && (E.top.next = this);
        E.top = this;
        this.next = null
    }
      , n = m.el;
    u.prototype = n;
    n.constructor = u;
    m._engine.path = function(E, H) {
        var F = j("path");
        H.canvas && H.canvas.appendChild(F);
        var G = new u(F,H);
        G.type = "path";
        x(G, {
            fill: "none",
            stroke: "#000",
            path: E
        });
        return G
    }
    ;
    m._engine.group = function(G) {
        var E = j("g");
        G.canvas && G.canvas.appendChild(E);
        var F = new u(E,G);
        F.type = "group";
        F.children = G.set();
        F.push = function(H) {
            if (!H) {
                return
            }
            F.children.push(H);
            if (H.attrs && H.attrs.title) {
                E.appendChild(H[0].parentNode)
            } else {
                E.appendChild(H[0])
            }
        }
        ;
        F.remove = function() {
            F.clear();
            u.prototype.remove.call(F)
        }
        ;
        F.clear = function() {
            F.children.forEach(function(H) {
                H.remove()
            });
            return F
        }
        ;
        return F
    }
    ;
    n.rotate = function(F, E, H) {
        if (this.removed) {
            return this
        }
        F = C(F).split(g);
        if (F.length - 1) {
            E = o(F[1]);
            H = o(F[2])
        }
        F = o(F[0]);
        (H == null) && (E = H);
        if (E == null || H == null) {
            var G = this.getBBox(1);
            E = G.x + G.width / 2;
            H = G.y + G.height / 2
        }
        this.transform(this._.transform.concat([["r", F, E, H]]));
        return this
    }
    ;
    n.scale = function(I, G, E, H) {
        if (this.removed) {
            return this
        }
        I = C(I).split(g);
        if (I.length - 1) {
            G = o(I[1]);
            E = o(I[2]);
            H = o(I[3])
        }
        I = o(I[0]);
        (G == null) && (G = I);
        (H == null) && (E = H);
        if (E == null || H == null) {
            var F = this.getBBox(1)
        }
        E = E == null ? F.x + F.width / 2 : E;
        H = H == null ? F.y + F.height / 2 : H;
        this.transform(this._.transform.concat([["s", I, G, E, H]]));
        return this
    }
    ;
    n.translate = function(F, E) {
        if (this.removed) {
            return this
        }
        F = C(F).split(g);
        if (F.length - 1) {
            E = o(F[1])
        }
        F = o(F[0]) || 0;
        E = +E || 0;
        this.transform(this._.transform.concat([["t", F, E]]));
        return this
    }
    ;
    n.transform = function(F) {
        var G = this._;
        if (F == null) {
            return G.transform
        }
        m._extractTransform(this, F);
        this.clip && j(this.clip, {
            transform: this.matrix.invert()
        });
        this.pattern && b(this);
        this.node && j(this.node, {
            transform: this.matrix
        });
        if (G.sx != 1 || G.sy != 1) {
            var E = this.attrs[d]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": E
            })
        }
        return this
    }
    ;
    n.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    }
    ;
    n.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    }
    ;
    n.remove = function() {
        if (this.removed || !this.node.parentNode) {
            return
        }
        var F = this.paper;
        F.__set__ && F.__set__.exclude(this);
        A.unbind("raphael.*.*." + this.id);
        if (this.gradient) {
            F.defs.removeChild(this.gradient)
        }
        m._tear(this, F);
        if (this.node.parentNode.tagName.toLowerCase() == "a") {
            this.node.parentNode.parentNode.removeChild(this.node.parentNode)
        } else {
            this.node.parentNode.removeChild(this.node)
        }
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        this.removed = true
    }
    ;
    n._getBBox = function() {
        if (this.node.style.display == "none") {
            this.show();
            var E = true
        }
        var G = {};
        try {
            G = this.node.getBBox()
        } catch (F) {} finally {
            G = G || {}
        }
        E && this.hide();
        return G
    }
    ;
    n.attr = function(E, N) {
        if (this.removed) {
            return this
        }
        if (E == null) {
            var K = {};
            for (var M in this.attrs) {
                if (this.attrs[d](M)) {
                    K[M] = this.attrs[M]
                }
            }
            K.gradient && K.fill == "none" && (K.fill = K.gradient) && delete K.gradient;
            K.transform = this._.transform;
            return K
        }
        if (N == null && m.is(E, "string")) {
            if (this.nobr && E === "opacity") {
                return T.dom.getStyle(this.nobr, "opacity")
            }
            if (E == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            if (E == "transform") {
                return this._.transform
            }
            var L = E.split(g)
              , H = {};
            for (var I = 0, P = L.length; I < P; I++) {
                E = L[I];
                if (E in this.attrs) {
                    H[E] = this.attrs[E]
                } else {
                    if (m.is(this.paper.customAttributes[E], "function")) {
                        H[E] = this.paper.customAttributes[E].def
                    } else {
                        H[E] = m._availableAttrs[E]
                    }
                }
            }
            return P - 1 ? H : H[L[0]]
        }
        if (N == null && m.is(E, "array")) {
            H = {};
            for (I = 0,
            P = E.length; I < P; I++) {
                H[E[I]] = this.attr(E[I])
            }
            return H
        }
        if (N != null) {
            var F = {};
            F[E] = N
        } else {
            if (E != null && m.is(E, "object")) {
                F = E
            }
        }
        for (var O in F) {
            A("raphael.attr." + O + "." + this.id, this, F[O])
        }
        for (O in this.paper.customAttributes) {
            if (this.paper.customAttributes[d](O) && F[d](O) && m.is(this.paper.customAttributes[O], "function")) {
                var J = this.paper.customAttributes[O].apply(this, [].concat(F[O]));
                this.attrs[O] = F[O];
                for (var G in J) {
                    if (J[d](G)) {
                        F[G] = J[G]
                    }
                }
            }
        }
        x(this, F);
        return this
    }
    ;
    n.toFront = function() {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.tagName.toLowerCase() == "a") {
            this.node.parentNode.parentNode.appendChild(this.node.parentNode)
        } else {
            this.node.parentNode.appendChild(this.node)
        }
        var E = this.paper;
        E.top != this && m._tofront(this, E);
        return this
    }
    ;
    n.toBack = function() {
        if (this.removed) {
            return this
        }
        var F = this.node.parentNode;
        if (F.tagName.toLowerCase() == "a") {
            F.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild)
        } else {
            if (F.firstChild != this.node) {
                F.insertBefore(this.node, this.node.parentNode.firstChild)
            }
        }
        m._toback(this, this.paper);
        var E = this.paper;
        return this
    }
    ;
    n.insertAfter = function(E) {
        if (this.removed) {
            return this
        }
        var F = E.node || E[E.length - 1].node;
        if (F.nextSibling) {
            F.parentNode.insertBefore(this.node, F.nextSibling)
        } else {
            F.parentNode.appendChild(this.node)
        }
        m._insertafter(this, E, this.paper);
        return this
    }
    ;
    n.insertBefore = function(E) {
        if (this.removed) {
            return this
        }
        var F = E.node || E[0].node;
        F.parentNode.insertBefore(this.node, F);
        m._insertbefore(this, E, this.paper);
        return this
    }
    ;
    n.blur = function(F) {
        var E = this;
        if (+F !== 0) {
            var G = j("filter")
              , H = j("feGaussianBlur");
            E.attrs.blur = F;
            G.id = m.createUUID();
            j(H, {
                stdDeviation: +F || 1.5
            });
            G.appendChild(H);
            E.paper.defs.appendChild(G);
            E._blur = G;
            j(E.node, {
                filter: "url(#" + G.id + ")"
            })
        } else {
            if (E._blur) {
                E._blur.parentNode.removeChild(E._blur);
                delete E._blur;
                delete E.attrs.blur
            }
            E.node.removeAttribute("filter")
        }
    }
    ;
    m._engine.circle = function(F, E, J, I) {
        var H = j("circle");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H,F);
        G.attrs = {
            cx: E,
            cy: J,
            r: I,
            fill: "none",
            stroke: "#000"
        };
        G.type = "circle";
        j(H, G.attrs);
        return G
    }
    ;
    m._engine.rect = function(G, E, L, F, J, K) {
        var I = j("rect");
        G.canvas && G.canvas.appendChild(I);
        var H = new u(I,G);
        H.attrs = {
            x: E,
            y: L,
            width: F,
            height: J,
            r: K || 0,
            rx: K || 0,
            ry: K || 0,
            fill: "none",
            stroke: "#000"
        };
        H.type = "rect";
        j(I, H.attrs);
        return H
    }
    ;
    m._engine.ellipse = function(F, E, K, J, I) {
        var H = j("ellipse");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H,F);
        G.attrs = {
            cx: E,
            cy: K,
            rx: J,
            ry: I,
            fill: "none",
            stroke: "#000"
        };
        G.type = "ellipse";
        j(H, G.attrs);
        return G
    }
    ;
    m._engine.image = function(G, K, E, L, F, J) {
        var I = j("image");
        j(I, {
            x: E,
            y: L,
            width: F,
            height: J,
            preserveAspectRatio: "none"
        });
        I.setAttributeNS(p, "href", K);
        G.canvas && G.canvas.appendChild(I);
        var H = new u(I,G);
        H.attrs = {
            x: E,
            y: L,
            width: F,
            height: J,
            src: K
        };
        H.type = "image";
        return H
    }
    ;
    m._engine.text = function(F, E, J, I) {
        var H = j("text");
        F.canvas && F.canvas.appendChild(H);
        var G = new u(H,F);
        G.attrs = {
            x: E,
            y: J,
            "text-anchor": "middle",
            text: I,
            font: m._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        };
        G.type = "text";
        x(G, G.attrs);
        return G
    }
    ;
    m._engine.setSize = function(F, E) {
        this.width = F || this.width;
        this.height = E || this.height;
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
        if (this._viewBox) {
            this.setViewBox.apply(this, this._viewBox)
        }
        return this
    }
    ;
    m._engine.create = function() {
        var H = m._getContainer.apply(0, arguments)
          , F = H && H.container
          , L = H.x
          , K = H.y
          , G = H.width
          , M = H.height;
        if (!F) {
            throw new Error("SVG container not found.")
        }
        var E = j("svg"), J = "overflow:hidden;", I;
        L = L || 0;
        K = K || 0;
        G = G || 512;
        M = M || 342;
        j(E, {
            height: M,
            version: 1.1,
            width: G,
            xmlns: "http://www.w3.org/2000/svg"
        });
        if (F == 1) {
            E.style.cssText = J + "position:absolute;left:" + L + "px;top:" + K + "px";
            m._g.doc.body.appendChild(E);
            I = 1
        } else {
            E.style.cssText = J + "position:relative";
            if (F.firstChild) {
                F.insertBefore(E, F.firstChild)
            } else {
                F.appendChild(E)
            }
        }
        F = new m._Paper;
        F.width = G;
        F.height = M;
        F.canvas = E;
        F.clear();
        F._left = F._top = 0;
        I && (F.renderfix = function() {}
        );
        F.renderfix();
        return F
    }
    ;
    m._engine.setViewBox = function(J, H, L, E, F) {
        A("raphael.setViewBox", this, this._viewBox, [J, H, L, E, F]);
        var N = D(L / this.width, E / this.height), I = this.top, M = F ? "meet" : "xMinYMin", G, K;
        if (J == null) {
            if (this._vbSize) {
                N = 1
            }
            delete this._vbSize;
            G = "0 0 " + this.width + k + this.height
        } else {
            this._vbSize = N;
            G = J + k + H + k + L + k + E
        }
        j(this.canvas, {
            viewBox: G,
            preserveAspectRatio: M
        });
        while (N && I) {
            K = "stroke-width"in I.attrs ? I.attrs["stroke-width"] : 1;
            I.attr({
                "stroke-width": K
            });
            I._.dirty = 1;
            I._.dirtyT = 1;
            I = I.prev
        }
        this._viewBox = [J, H, L, E, !!F];
        return this
    }
    ;
    m.prototype.renderfix = function() {
        var J = this.canvas, E = J.style, I;
        try {
            I = J.getScreenCTM() || J.createSVGMatrix()
        } catch (H) {
            I = J.createSVGMatrix()
        }
        var G = -I.e % 1
          , F = -I.f % 1;
        if (G || F) {
            if (G) {
                this._left = (this._left + G) % 1;
                E.left = this._left + "px"
            }
            if (F) {
                this._top = (this._top + F) % 1;
                E.top = this._top + "px"
            }
        }
    }
    ;
    m.prototype.clear = function() {
        m.eve("raphael.clear", this);
        var E = this.canvas;
        while (E.firstChild) {
            E.removeChild(E.firstChild)
        }
        this.bottom = this.top = null;
        (this.desc = j("desc")).appendChild(m._g.doc.createTextNode("Created with Rapha\xebl " + m.version));
        E.appendChild(this.desc);
        E.appendChild(this.defs = j("defs"))
    }
    ;
    m.prototype.remove = function() {
        A("raphael.remove", this);
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
    }
    ;
    var y = m.st;
    for (var e in n) {
        if (n[d](e) && !y[d](e)) {
            y[e] = (function(E) {
                return function() {
                    var F = arguments;
                    return this.forEach(function(G) {
                        G[E].apply(G, F)
                    })
                }
            })(e)
        }
    }
}(window.Raphael);
window.Raphael.vml && function(m) {
    var e = "hasOwnProperty"
      , G = String
      , o = parseFloat
      , h = Math
      , C = h.round
      , J = h.max
      , D = h.min
      , t = h.abs
      , w = "fill"
      , j = /[, ]+/
      , B = m.eve
      , x = " progid:DXImageTransform.Microsoft"
      , l = " "
      , r = ""
      , F = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }
      , k = /([clmz]),?([^clmz]*)/gi
      , u = / progid:\S+Blur\([^\)]+\)/g
      , I = /-?[^,\s-]+/g
      , d = "position:absolute;left:0;top:0;width:1px;height:1px"
      , b = 21600
      , A = {
        path: 1,
        rect: 1,
        image: 1
    }
      , s = {
        circle: 1,
        ellipse: 1
    }
      , f = function(U) {
        var Q = /[ahqstv]/ig
          , L = m._pathToAbsolute;
        G(U).match(Q) && (L = m._path2curve);
        Q = /[clmz]/g;
        if (L == m._pathToAbsolute && !G(U).match(Q)) {
            var P = G(U).replace(k, function(Y, aa, W) {
                var Z = []
                  , V = aa.toLowerCase() == "m"
                  , X = F[aa];
                W.replace(I, function(ab) {
                    if (V && Z.length == 2) {
                        X += Z + F[aa == "m" ? "l" : "L"];
                        Z = []
                    }
                    Z.push(C(ab * b))
                });
                return X + Z
            });
            return P
        }
        var R = L(U), K, E;
        P = [];
        for (var N = 0, S = R.length; N < S; N++) {
            K = R[N];
            E = R[N][0].toLowerCase();
            E == "z" && (E = "x");
            for (var M = 1, O = K.length; M < O; M++) {
                E += C(K[M] * b) + (M != O - 1 ? "," : r)
            }
            P.push(E)
        }
        return P.join(l)
    }
      , p = function(M, L, K) {
        var E = m.matrix();
        E.rotate(-M, 0.5, 0.5);
        return {
            dx: E.x(L, K),
            dy: E.y(L, K)
        }
    }
      , q = function(S, R, Q, N, M, O) {
        var ab = S._, V = S.matrix, E = ab.fillpos, U = S.node, P = U.style, L = 1, K = "", X, Z = b / R, Y = b / Q;
        P.visibility = "hidden";
        if (!R || !Q) {
            return
        }
        U.coordsize = t(Z) + l + t(Y);
        P.rotation = O * (R * Q < 0 ? -1 : 1);
        if (O) {
            var aa = p(O, N, M);
            N = aa.dx;
            M = aa.dy
        }
        R < 0 && (K += "x");
        Q < 0 && (K += " y") && (L = -1);
        P.flip = K;
        U.coordorigin = (N * -Z) + l + (M * -Y);
        if (E || ab.fillsize) {
            var W = U.getElementsByTagName(w);
            W = W && W[0];
            U.removeChild(W);
            if (E) {
                aa = p(O, V.x(E[0], E[1]), V.y(E[0], E[1]));
                W.position = aa.dx * L + l + aa.dy * L
            }
            if (ab.fillsize) {
                W.size = ab.fillsize[0] * t(R) + l + ab.fillsize[1] * t(Q)
            }
            U.appendChild(W)
        }
        P.visibility = "visible"
    };
    m.toString = function() {
        return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
    }
    ;
    var c = function(E, P, K) {
        var R = G(P).toLowerCase().split("-")
          , N = K ? "end" : "start"
          , L = R.length
          , O = "classic"
          , Q = "medium"
          , M = "medium";
        while (L--) {
            switch (R[L]) {
            case "block":
            case "classic":
            case "oval":
            case "diamond":
            case "open":
            case "none":
                O = R[L];
                break;
            case "wide":
            case "narrow":
                M = R[L];
                break;
            case "long":
            case "short":
                Q = R[L];
                break
            }
        }
        var S = E.node.getElementsByTagName("stroke")[0];
        S[N + "arrow"] = O;
        S[N + "arrowlength"] = Q;
        S[N + "arrowwidth"] = M
    }
      , y = function(ap, K) {
        ap.attrs = ap.attrs || {};
        var ah = ap.node, av = ap.attrs, ao = ah.style, af, ai = A[ap.type] && (K.x != av.x || K.y != av.y || K.width != av.width || K.height != av.height || K.cx != av.cx || K.cy != av.cy || K.rx != av.rx || K.ry != av.ry || K.r != av.r), al = s[ap.type] && (av.cx != K.cx || av.cy != K.cy || av.r != K.r || av.rx != K.rx || av.ry != K.ry), aj = ap;
        for (var P in K) {
            if (K[e](P)) {
                av[P] = K[P]
            }
        }
        if (ai) {
            av.path = m._getPath[ap.type](ap);
            ap._.dirty = 1
        }
        K.href && (ah.href = K.href);
        K.title && (ah.title = K.title);
        K.target && (ah.target = K.target);
        K.cursor && (ao.cursor = K.cursor);
        "blur"in K && ap.blur(K.blur);
        if (K.path && ap.type == "path" || ai) {
            ah.path = f(~G(av.path).toLowerCase().indexOf("r") ? m._pathToAbsolute(av.path) : av.path);
            if (ap.type == "image") {
                ap._.fillpos = [av.x, av.y];
                ap._.fillsize = [av.width, av.height];
                q(ap, 1, 1, 0, 0, 0)
            }
        }
        "transform"in K && ap.transform(K.transform);
        if (al) {
            var aa = +av.cx
              , Y = +av.cy
              , ad = +av.rx || +av.r || 0
              , ac = +av.ry || +av.r || 0;
            ah.path = m.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", C((aa - ad) * b), C((Y - ac) * b), C((aa + ad) * b), C((Y + ac) * b), C(aa * b))
        }
        if ("clip-rect"in K) {
            var ag = G(K["clip-rect"]).split(j);
            if (ag.length == 4) {
                ag[2] = +ag[2] + (+ag[0]);
                ag[3] = +ag[3] + (+ag[1]);
                var at = ah.clipRect || m._g.doc.createElement("div")
                  , ab = at.style;
                ab.clip = m.format("rect({1}px {2}px {3}px {0}px)", ag);
                if (!ah.clipRect) {
                    ab.position = "absolute";
                    ab.top = 0;
                    ab.left = 0;
                    ab.width = ap.paper.width + "px";
                    ab.height = ap.paper.height + "px";
                    ah.parentNode.insertBefore(at, ah);
                    at.appendChild(ah);
                    ah.clipRect = at
                }
            }
            if (!K["clip-rect"]) {
                ah.clipRect && (ah.clipRect.style.clip = "auto")
            }
        }
        if (ap.textpath) {
            var M = ap.textpath.style;
            K.font && (M.font = K.font);
            K["font-family"] && (M.fontFamily = '"' + K["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, r) + '"');
            K["font-size"] && (M.fontSize = K["font-size"]);
            K["font-weight"] && (M.fontWeight = K["font-weight"]);
            K["font-style"] && (M.fontStyle = K["font-style"])
        }
        if ("arrow-start"in K) {
            c(aj, K["arrow-start"])
        }
        if ("arrow-end"in K) {
            c(aj, K["arrow-end"], 1)
        }
        if (K.opacity != null || K["stroke-width"] != null || K.fill != null || K.src != null || K.stroke != null || K["stroke-width"] != null || K["stroke-opacity"] != null || K["fill-opacity"] != null || K["stroke-dasharray"] != null || K["stroke-miterlimit"] != null || K["stroke-linejoin"] != null || K["stroke-linecap"] != null) {
            var U = ah.getElementsByTagName(w)
              , O = false;
            U = U && U[0];
            !U && (O = U = H(w));
            if (ap.type == "image" && K.src) {
                U.src = K.src
            }
            K.fill && (U.on = true);
            if (U.on == null || K.fill == "none" || K.fill === null) {
                U.on = false
            }
            if (U.on && K.fill) {
                var L = G(K.fill).match(m._ISURL);
                if (L) {
                    U.parentNode == ah && ah.removeChild(U);
                    U.rotate = true;
                    U.src = L[1];
                    U.type = "tile";
                    var X = ap.getBBox(1);
                    U.position = X.x + l + X.y;
                    ap._.fillpos = [X.x, X.y];
                    m._preload(L[1], function() {
                        ap._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else {
                    U.color = m.getRGB(K.fill).hex;
                    U.src = r;
                    U.type = "solid";
                    if (m.getRGB(K.fill).error && (aj.type in {
                        circle: 1,
                        ellipse: 1
                    } || G(K.fill).charAt() != "r") && a(aj, K.fill, U)) {
                        av.fill = "none";
                        av.gradient = K.fill;
                        U.rotate = false
                    }
                }
            }
            if ("fill-opacity"in K || "opacity"in K) {
                var ar = ((+av["fill-opacity"] + 1 || 2) - 1) * ((+av.opacity + 1 || 2) - 1) * ((+m.getRGB(K.fill).o + 1 || 2) - 1);
                ar = D(J(ar, 0), 1);
                U.opacity = ar;
                if (U.src) {
                    U.color = "none"
                }
            }
            ah.appendChild(U);
            var ae = (ah.getElementsByTagName("stroke") && ah.getElementsByTagName("stroke")[0])
              , ak = false;
            !ae && (ak = ae = H("stroke"));
            if ((K.stroke && K.stroke != "none") || K["stroke-width"] || K["stroke-opacity"] != null || K["stroke-dasharray"] || K["stroke-miterlimit"] || K["stroke-linejoin"] || K["stroke-linecap"]) {
                ae.on = true
            }
            (K.stroke == "none" || K.stroke === null || ae.on == null || K.stroke == 0 || K["stroke-width"] == 0) && (ae.on = false);
            var Q = m.getRGB(K.stroke);
            ae.on && K.stroke && (ae.color = Q.hex);
            ar = ((+av["stroke-opacity"] + 1 || 2) - 1) * ((+av.opacity + 1 || 2) - 1) * ((+Q.o + 1 || 2) - 1);
            var E = (o(K["stroke-width"]) || 1) * 0.75;
            ar = D(J(ar, 0), 1);
            K["stroke-width"] == null && (E = av["stroke-width"]);
            K["stroke-width"] && (ae.weight = E);
            E && E < 1 && (ar *= E) && (ae.weight = 1);
            ae.opacity = ar;
            K["stroke-linejoin"] && (ae.joinstyle = K["stroke-linejoin"] || "miter");
            ae.miterlimit = K["stroke-miterlimit"] || 8;
            K["stroke-linecap"] && (ae.endcap = K["stroke-linecap"] == "butt" ? "flat" : K["stroke-linecap"] == "square" ? "square" : "round");
            if (K["stroke-dasharray"]) {
                var R = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                ae.dashstyle = R[e](K["stroke-dasharray"]) ? R[K["stroke-dasharray"]] : r
            }
            ak && ah.appendChild(ae)
        }
        if (aj.type == "text") {
            aj.paper.canvas.style.display = r;
            var Z = aj.paper.span
              , aq = 100
              , V = av.font && av.font.match(/\d+(?:\.\d*)?(?=px)/);
            ao = Z.style;
            av.font && (ao.font = av.font);
            av["font-family"] && (ao.fontFamily = av["font-family"]);
            av["font-weight"] && (ao.fontWeight = av["font-weight"]);
            av["font-style"] && (ao.fontStyle = av["font-style"]);
            V = o(av["font-size"] || V && V[0]) || 10;
            ao.fontSize = V * aq + "px";
            aj.textpath.string && (Z.innerHTML = G(aj.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var an = Z.getBoundingClientRect();
            aj.W = av.w = (an.right - an.left) / aq;
            aj.H = av.h = (an.bottom - an.top) / aq;
            aj.X = av.x;
            aj.Y = av.y + aj.H / 2;
            ("x"in K || "y"in K) && (aj.path.v = m.format("m{0},{1}l{2},{1}", C(av.x * b), C(av.y * b), C(av.x * b) + 1));
            var W = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
            for (var au = 0, S = W.length; au < S; au++) {
                if (W[au]in K) {
                    aj._.dirty = 1;
                    break
                }
            }
            switch (av["text-anchor"]) {
            case "start":
                aj.textpath.style["v-text-align"] = "left";
                aj.bbx = aj.W / 2;
                break;
            case "end":
                aj.textpath.style["v-text-align"] = "right";
                aj.bbx = -aj.W / 2;
                break;
            default:
                aj.textpath.style["v-text-align"] = "center";
                aj.bbx = 0;
                break
            }
            aj.textpath.style["v-text-kern"] = true;
            var N = aj.nobr;
            if (N) {
                N.innerHTML = aj.textpath.string;
                var am = function(ay, aw, ax) {
                    ay.style[aw] = ax
                };
                K["font-weight"] && (am(N, "font-weight", K["font-weight"]));
                K.fill && (am(N, "color", K.fill));
                K["font-size"] && (am(N, "font-size", K["font-size"]));
                K.cursor && (am(N, "cursor", K.cursor));
                K["class"] && (am(N, "class", K["class"]));
                K.opacity && (am(N, "opacity", K.opacity))
            }
        }
    }
      , a = function(E, S, W) {
        E.attrs = E.attrs || {};
        var U = E.attrs, M = Math.pow, N, O, Q = "linear", R = ".5 .5";
        E.attrs.gradient = S;
        S = G(S).replace(m._radial_gradient, function(Z, aa, Y) {
            Q = "radial";
            if (aa && Y) {
                aa = o(aa);
                Y = o(Y);
                M(aa - 0.5, 2) + M(Y - 0.5, 2) > 0.25 && (Y = h.sqrt(0.25 - M(aa - 0.5, 2)) * ((Y > 0.5) * 2 - 1) + 0.5);
                R = aa + l + Y
            }
            return r
        });
        S = S.split(/\s*\-\s*/);
        if (Q == "linear") {
            var K = S.shift();
            K = -o(K);
            if (isNaN(K)) {
                return null
            }
        }
        var P = m._parseDots(S);
        if (!P) {
            return null
        }
        E = E.shape || E.node;
        if (P.length) {
            E.removeChild(W);
            W.on = true;
            W.method = "none";
            W.color = P[0].color;
            W.color2 = P[P.length - 1].color;
            var X = [];
            for (var L = 0, V = P.length; L < V; L++) {
                P[L].offset && X.push(P[L].offset + l + P[L].color)
            }
            W.colors = X.length ? X.join() : "0% " + W.color;
            if (Q == "radial") {
                W.type = "gradientTitle";
                W.focus = "100%";
                W.focussize = "0 0";
                W.focusposition = R;
                W.angle = 0
            } else {
                W.type = "gradient";
                W.angle = (270 - K) % 360
            }
            E.appendChild(W)
        }
        return 1
    }
      , v = function(K, E) {
        this[0] = this.node = K;
        K.raphael = true;
        this.id = m._oid++;
        K.raphaelid = this.id;
        this.X = 0;
        this.Y = 0;
        this.attrs = {};
        this.paper = E;
        this.matrix = m.matrix();
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        };
        !E.bottom && (E.bottom = this);
        this.prev = E.top;
        E.top && (E.top.next = this);
        E.top = this;
        this.next = null
    };
    var n = m.el;
    v.prototype = n;
    n.constructor = v;
    n.transform = function(N) {
        if (N == null) {
            return this._.transform
        }
        var P = this.paper._viewBoxShift, O = P ? "s" + [P.scale, P.scale] + "-1-1t" + [P.dx, P.dy] : r, S;
        if (P) {
            S = N = G(N).replace(/\.{3}|\u2026/g, this._.transform || r)
        }
        m._extractTransform(this, O + N);
        var U = this.matrix.clone(), W = this.skew, L = this.node, R, M = ~G(this.attrs.fill).indexOf("-"), E = !G(this.attrs.fill).indexOf("url(");
        U.translate(1, 1);
        if (E || M || this.type == "image") {
            W.matrix = "1 0 0 1";
            W.offset = "0 0";
            R = U.split();
            if ((M && R.noRotation) || !R.isSimple) {
                L.style.filter = U.toFilter();
                var Q = this.getBBox()
                  , K = this.getBBox(1)
                  , X = Q.x - K.x
                  , V = Q.y - K.y;
                L.coordorigin = (X * -b) + l + (V * -b);
                q(this, 1, 1, X, V, 0)
            } else {
                L.style.filter = r;
                q(this, R.scalex, R.scaley, R.dx, R.dy, R.rotate)
            }
        } else {
            L.style.filter = r;
            W.matrix = G(U);
            W.offset = U.offset()
        }
        S && (this._.transform = S);
        return this
    }
    ;
    n.rotate = function(K, E, M) {
        if (this.removed) {
            return this
        }
        if (K == null) {
            return
        }
        K = G(K).split(j);
        if (K.length - 1) {
            E = o(K[1]);
            M = o(K[2])
        }
        K = o(K[0]);
        (M == null) && (E = M);
        if (E == null || M == null) {
            var L = this.getBBox(1);
            E = L.x + L.width / 2;
            M = L.y + L.height / 2
        }
        this._.dirtyT = 1;
        this.transform(this._.transform.concat([["r", K, E, M]]));
        return this
    }
    ;
    n.translate = function(K, E) {
        if (this.removed) {
            return this
        }
        K = G(K).split(j);
        if (K.length - 1) {
            E = o(K[1])
        }
        K = o(K[0]) || 0;
        E = +E || 0;
        if (this._.bbox) {
            this._.bbox.x += K;
            this._.bbox.y += E
        }
        this.transform(this._.transform.concat([["t", K, E]]));
        return this
    }
    ;
    n.scale = function(N, L, E, M) {
        if (this.removed) {
            return this
        }
        N = G(N).split(j);
        if (N.length - 1) {
            L = o(N[1]);
            E = o(N[2]);
            M = o(N[3]);
            isNaN(E) && (E = null);
            isNaN(M) && (M = null)
        }
        N = o(N[0]);
        (L == null) && (L = N);
        (M == null) && (E = M);
        if (E == null || M == null) {
            var K = this.getBBox(1)
        }
        E = E == null ? K.x + K.width / 2 : E;
        M = M == null ? K.y + K.height / 2 : M;
        this.transform(this._.transform.concat([["s", N, L, E, M]]));
        this._.dirtyT = 1;
        return this
    }
    ;
    n.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this
    }
    ;
    n.show = function() {
        !this.removed && (this.node.style.display = r);
        return this
    }
    ;
    n._getBBox = function() {
        if (this.removed) {
            return {}
        }
        return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        }
    }
    ;
    n.remove = function() {
        if (this.removed || !this.node.parentNode) {
            return
        }
        this.paper.__set__ && this.paper.__set__.exclude(this);
        m.eve.unbind("raphael.*.*." + this.id);
        m._tear(this, this.paper);
        this.node.parentNode.removeChild(this.node);
        this.shape && this.shape.parentNode.removeChild(this.shape);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        this.removed = true
    }
    ;
    n.attr = function(E, S) {
        if (this.removed) {
            return this
        }
        if (E == null) {
            var P = {};
            for (var R in this.attrs) {
                if (this.attrs[e](R)) {
                    P[R] = this.attrs[R]
                }
            }
            P.gradient && P.fill == "none" && (P.fill = P.gradient) && delete P.gradient;
            P.transform = this._.transform;
            return P
        }
        if (S == null && m.is(E, "string")) {
            if (E == w && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            var Q = E.split(j)
              , M = {};
            for (var N = 0, V = Q.length; N < V; N++) {
                E = Q[N];
                if (E in this.attrs) {
                    M[E] = this.attrs[E]
                } else {
                    if (m.is(this.paper.customAttributes[E], "function")) {
                        M[E] = this.paper.customAttributes[E].def
                    } else {
                        M[E] = m._availableAttrs[E]
                    }
                }
            }
            return V - 1 ? M : M[Q[0]]
        }
        if (this.attrs && S == null && m.is(E, "array")) {
            M = {};
            for (N = 0,
            V = E.length; N < V; N++) {
                M[E[N]] = this.attr(E[N])
            }
            return M
        }
        var K;
        if (S != null) {
            K = {};
            K[E] = S
        }
        S == null && m.is(E, "object") && (K = E);
        for (var U in K) {
            B("raphael.attr." + U + "." + this.id, this, K[U])
        }
        if (K) {
            for (U in this.paper.customAttributes) {
                if (this.paper.customAttributes[e](U) && K[e](U) && m.is(this.paper.customAttributes[U], "function")) {
                    var O = this.paper.customAttributes[U].apply(this, [].concat(K[U]));
                    this.attrs[U] = K[U];
                    for (var L in O) {
                        if (O[e](L)) {
                            K[L] = O[L]
                        }
                    }
                }
            }
            if (K.text && this.type == "text") {
                this.textpath.string = K.text
            }
            y(this, K)
        }
        return this
    }
    ;
    n.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node);
        this.paper && this.paper.top != this && m._tofront(this, this.paper);
        return this
    }
    ;
    n.toBack = function() {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
            m._toback(this, this.paper)
        }
        return this
    }
    ;
    n.insertAfter = function(E) {
        if (this.removed) {
            return this
        }
        if (E.constructor == m.st.constructor) {
            E = E[E.length - 1]
        }
        if (E.node.nextSibling) {
            E.node.parentNode.insertBefore(this.node, E.node.nextSibling)
        } else {
            E.node.parentNode.appendChild(this.node)
        }
        m._insertafter(this, E, this.paper);
        return this
    }
    ;
    n.insertBefore = function(E) {
        if (this.removed) {
            return this
        }
        if (E.constructor == m.st.constructor) {
            E = E[0]
        }
        E.node.parentNode.insertBefore(this.node, E.node);
        m._insertbefore(this, E, this.paper);
        return this
    }
    ;
    n.blur = function(E) {
        var K = this.node.runtimeStyle
          , L = K.filter;
        L = L.replace(u, r);
        if (+E !== 0) {
            this.attrs.blur = E;
            K.filter = L + l + x + ".Blur(pixelradius=" + (+E || 1.5) + ")";
            K.margin = m.format("-{0}px 0 0 -{0}px", C(+E || 1.5))
        } else {
            K.filter = L;
            K.margin = 0;
            delete this.attrs.blur
        }
    }
    ;
    m._engine.group = function(E) {
        var K = document.createElement("div");
        K.style.cssText = d;
        K.coordsize = b + l + b;
        K.coordorigin = E.coordorigin;
        var L = new v(K,E);
        L.type = "group";
        E.canvas.appendChild(K);
        L.children = E.set();
        L.push = function(O) {
            if (!O) {
                return
            }
            if (window.VMLElement && O instanceof VMLElement) {
                if (!O[0] && O.group) {
                    O[0] = O.group[0].children[O.zIndex]
                }
                if (!O[0]) {
                    K.innerHTML += O.getEl();
                    O[0] = K.children[K.children.length - 1]
                } else {
                    K.appendChild(O[0])
                }
                var P = O.node = new v(O[0],E);
                P.attrs = O.attrs;
                P.type = O.type;
                var Q = ["skew", "fill", "stroke", "textpath", "path"];
                for (var N = 0; N < Q.length; N++) {
                    var M = Q[N];
                    P[M] = O[0].getElementsByTagName(M)[0]
                }
                L.children.push(O.node)
            } else {
                L.children.push(O);
                K.appendChild(O[0])
            }
        }
        ;
        L.transform = function(M) {
            var N = m.parseTransformString(M);
            while (N.length > 0) {
                M = N[0];
                if (M[0] == "t") {
                    K.style.left = Math.round(M[1]) + "px";
                    K.style.top = Math.round(M[2]) + "px"
                } else {
                    M = N.join();
                    L.children.forEach(function(O) {
                        O.transform(M)
                    });
                    break
                }
                N = N.slice(1)
            }
            return L
        }
        ;
        L.remove = function() {
            L.clear();
            v.prototype.remove.call(L)
        }
        ;
        L.clear = function() {
            L.children.forEach(function(M) {
                M.remove()
            });
            return L
        }
        ;
        return L
    }
    ;
    m._engine.path = function(M, K) {
        var N = H("shape");
        N.style.cssText = d;
        N.coordsize = b + l + b;
        N.coordorigin = K.coordorigin;
        var O = new v(N,K)
          , E = {
            fill: "none",
            stroke: "#000"
        };
        M && (E.path = M);
        O.type = "path";
        O.path = [];
        O.Path = r;
        y(O, E);
        K.canvas.appendChild(N);
        var L = H("skew");
        L.on = true;
        N.appendChild(L);
        O.skew = L;
        O.transform(r);
        return O
    }
    ;
    m._engine.rect = function(K, P, N, Q, L, E) {
        var R = m._rectPath(P, N, Q, L, E)
          , M = K.path(R)
          , O = M.attrs;
        M.X = O.x = P;
        M.Y = O.y = N;
        M.W = O.width = Q;
        M.H = O.height = L;
        O.r = E;
        O.path = R;
        M.type = "rect";
        return M
    }
    ;
    m._engine.ellipse = function(K, E, P, O, N) {
        var M = K.path()
          , L = M.attrs;
        M.X = E - O;
        M.Y = P - N;
        M.W = O * 2;
        M.H = N * 2;
        M.type = "ellipse";
        y(M, {
            cx: E,
            cy: P,
            rx: O,
            ry: N
        });
        return M
    }
    ;
    m._engine.circle = function(K, E, O, N) {
        var M = K.path()
          , L = M.attrs;
        M.X = E - N;
        M.Y = O - N;
        M.W = M.H = N * 2;
        M.type = "circle";
        y(M, {
            cx: E,
            cy: O,
            r: N
        });
        return M
    }
    ;
    m._engine.image = function(K, E, Q, O, R, M) {
        var U = m._rectPath(Q, O, R, M)
          , N = K.path(U).attr({
            stroke: "none"
        })
          , P = N.attrs
          , L = N.node
          , S = L.getElementsByTagName(w)[0];
        P.src = E;
        N.X = P.x = Q;
        N.Y = P.y = O;
        N.W = P.width = R;
        N.H = P.height = M;
        P.path = U;
        N.type = "image";
        S.parentNode == L && L.removeChild(S);
        S.rotate = true;
        S.src = E;
        S.type = "tile";
        N._.fillpos = [Q, O];
        N._.fillsize = [R, M];
        L.appendChild(S);
        q(N, 1, 1, 0, 0, 0);
        return N
    }
    ;
    m._engine.text = function(E, Q, P, R) {
        var M = H("shape")
          , U = H("path")
          , L = H("textpath");
        Q = Q || 0;
        P = P || 0;
        R = R || "";
        U.v = m.format("m{0},{1}l{2},{1}", C(Q * b), C(P * b), C(Q * b) + 1);
        U.textpathok = true;
        L.string = G(R);
        L.on = true;
        M.style.cssText = d;
        M.coordsize = b + l + b;
        M.coordorigin = "0 0";
        var K = new v(M,E)
          , O = {
            fill: "#000",
            stroke: "none",
            font: m._availableAttrs.font,
            text: R
        };
        K.shape = M;
        K.path = U;
        K.textpath = L;
        K.type = "text";
        K.attrs.text = G(R);
        K.attrs.x = Q;
        K.attrs.y = P;
        K.attrs.w = 1;
        K.attrs.h = 1;
        y(K, O);
        M.appendChild(L);
        M.appendChild(U);
        if (!Raphael.exportSVG) {
            K.attr({
                stroke: "#fff",
                opacity: 0,
                "fill-opacity": 0
            });
            var N = document.createElement("nobr");
            N.style["font-family"] = "Arial, 宋体";
            N.innerHTML = String(R);
            M.appendChild(N);
            K.nobr = N
        }
        E.canvas.appendChild(M);
        var S = H("skew");
        S.on = true;
        M.appendChild(S);
        K.skew = S;
        K.transform(r);
        return K
    }
    ;
    m._engine.setSize = function(L, E) {
        var K = this.canvas.style;
        this.width = L;
        this.height = E;
        L == +L && (L += "px");
        E == +E && (E += "px");
        K.width = L;
        K.height = E;
        K.clip = "rect(0 " + L + " " + E + " 0)";
        if (this._viewBox) {
            m._engine.setViewBox.apply(this, this._viewBox)
        }
        return this
    }
    ;
    m._engine.setViewBox = function(O, N, P, L, M) {
        m.eve("raphael.setViewBox", this, this._viewBox, [O, N, P, L, M]);
        var E = this.width, R = this.height, S = 1 / J(P / E, L / R), Q, K;
        if (M) {
            Q = R / L;
            K = E / P;
            if (P * Q < E) {
                O -= (E - P * Q) / 2 / Q
            }
            if (L * K < R) {
                N -= (R - L * K) / 2 / K
            }
        }
        this._viewBox = [O, N, P, L, !!M];
        this._viewBoxShift = {
            dx: -O,
            dy: -N,
            scale: S
        };
        this.forEach(function(U) {
            U.transform("...")
        });
        return this
    }
    ;
    var H;
    m._engine.initWin = function(L) {
        var K = L.document;
        K.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !K.namespaces.rvml && K.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            H = function(M) {
                return K.createElement("<rvml:" + M + ' class="rvml">')
            }
        } catch (E) {
            H = function(M) {
                return K.createElement("<" + M + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }
    ;
    m._engine.initWin(m._g.win);
    m._engine.create = function() {
        var L = m._getContainer.apply(0, arguments), E = L.container, R = L.height, S, K = L.width, Q = L.x, P = L.y;
        if (!E) {
            throw new Error("VML container not found.")
        }
        var N = new m._Paper
          , O = N.canvas = m._g.doc.createElement("div")
          , M = O.style;
        Q = Q || 0;
        P = P || 0;
        K = K || 512;
        R = R || 342;
        N.width = K;
        N.height = R;
        K == +K && (K += "px");
        R == +R && (R += "px");
        N.coordsize = b * 1000 + l + b * 1000;
        N.coordorigin = "0 0";
        N.span = m._g.doc.createElement("span");
        N.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
        O.appendChild(N.span);
        M.cssText = m.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", K, R);
        if (E == 1) {
            m._g.doc.body.appendChild(O);
            M.left = Q + "px";
            M.top = P + "px";
            M.position = "absolute"
        } else {
            if (E.firstChild) {
                E.insertBefore(O, E.firstChild)
            } else {
                E.appendChild(O)
            }
        }
        N.renderfix = function() {}
        ;
        return N
    }
    ;
    m.prototype.clear = function() {
        m.eve("raphael.clear", this);
        this.canvas.innerHTML = r;
        this.span = m._g.doc.createElement("span");
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
        this.canvas.appendChild(this.span);
        this.bottom = this.top = null
    }
    ;
    m.prototype.remove = function() {
        m.eve("raphael.remove", this);
        this.canvas.parentNode.removeChild(this.canvas);
        for (var E in this) {
            this[E] = typeof this[E] == "function" ? m._removedFactory(E) : null
        }
        return true
    }
    ;
    var z = m.st;
    for (var g in n) {
        if (n[e](g) && !z[e](g)) {
            z[g] = (function(E) {
                return function() {
                    var K = arguments;
                    return this.forEach(function(L) {
                        L[E].apply(L, K)
                    })
                }
            })(g)
        }
    }
}(window.Raphael);
T.charts = {};
T.charts.mixin = {};
T.createChart = function() {
    var a = arguments.length;
    var b = [T.charts.Chart].concat(Array.prototype.slice.call(arguments));
    return T.lang.createChart.apply(null, b)
}
;
T.lang.createChart = function() {
    return T.charts.Class.apply(null, arguments)
}
;
T.charts.Class = function() {
    var a = arguments.length;
    var d = arguments[0];
    var c = arguments[a - 1];
    var e = typeof c.initialize == "function" ? c.initialize : function() {
        d.prototype.initialize.apply(this, arguments)
    }
    ;
    if (a > 1) {
        var b = [e, d].concat(Array.prototype.slice.call(arguments).slice(1, a - 1), c);
        T.charts.inherit.apply(null, b)
    } else {
        e.prototype = c
    }
    e.extend = function(g) {
        if (!"[object Array]" == Object.prototype.toString.call(g)) {
            g = Array.prototype.concat.call(g)
        }
        var f = g.length;
        while (f--) {
            g[f].call(e.prototype)
        }
        return e
    }
    ;
    return e
}
;
T.charts.inherit = function(f, d) {
    var c = function() {};
    c.prototype = d.prototype;
    f.prototype = new c;
    var b, a, e;
    for (b = 2,
    a = arguments.length; b < a; b++) {
        e = arguments[b];
        if (typeof e === "function") {
            e = e.prototype
        }
        T.charts.Util.extend(f.prototype, e)
    }
}
;
T.charts.Util = T.charts.Util || {};
T.charts.Util.extend = function(a, e) {
    a = a || {};
    if (e) {
        for (var d in e) {
            var c = e[d];
            if (c !== undefined) {
                a[d] = c
            }
        }
        var b = typeof window.Event == "function" && e instanceof window.Event;
        if (!b && e.hasOwnProperty && e.hasOwnProperty("toString")) {
            a.toString = e.toString
        }
    }
    return a
}
;
T.charts.Util.blank = function() {}
;
(function() {
    var b = {
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
    var e = {
        encodeAttr: function(n) {
            return String(n).replace(/["']/g, function(o) {
                return "&" + c[o] + ";"
            })
        },
        encodeHTML: function(n) {
            return String(n).replace(/['"<>& ]/g, function(o) {
                return "&" + c[o] + ";"
            })
        },
        truncate: function(o, n) {
            if (o == null) {
                return o
            }
            var p = 1;
            if (/[^\x00-\xff]/.test(o)) {
                n = Math.floor(2 * n / 3);
                p = 2
            }
            if (o.length > n) {
                return o.substr(0, n - 2 / p) + "..."
            } else {
                return o
            }
        },
        format: function(p, n) {
            p = String(p);
            var o = Array.prototype.slice.call(arguments, 1)
              , q = Object.prototype.toString;
            if (o.length) {
                o = o.length == 1 ? (n !== null && (/\[object Array\]|\[object Object\]/.test(q.call(n))) ? n : o) : o;
                return p.replace(/(#|!)\{(.+?)(?:\s*[,:]\s*(\d+?))*?\}/g, function(r, u, t, v) {
                    var s = o[t];
                    if ("[object Function]" == q.call(s)) {
                        s = s(t)
                    }
                    if (v) {
                        s = e.truncate(s, v)
                    }
                    if (u == "!") {
                        s = e.encodeHTML(s)
                    }
                    return ( "undefined" == typeof s ? "" : s)
                })
            }
            return p
        }
    };
    function l(o, n) {
        return Object.prototype.hasOwnProperty.call(o, n)
    }
    function j(s, r, q) {
        if (s == null) {
            return
        }
        if (Array.prototype.forEach && s.forEach === Array.prototype.forEach) {
            s.forEach(r, q)
        } else {
            if (s.length === +s.length) {
                for (var p = 0, n = s.length; p < n; p++) {
                    if (p in s && r.call(q, s[p], p, s) === {}) {
                        return
                    }
                }
            } else {
                for (var o in s) {
                    if (l(s, o)) {
                        if (r.call(q, s[o], o, s) === {}) {
                            return
                        }
                    }
                }
            }
        }
    }
    function a(q, p, o) {
        var n = [];
        if (q == null) {
            return n
        }
        if (Array.prototype.map && q.map === Array.prototype.map) {
            return q.map(p, o)
        }
        j(q, function(t, r, s) {
            n[n.length] = p.call(o, t, r, s)
        });
        if (q.length === +q.length) {
            n.length = q.length
        }
        return n
    }
    function f(p, q, n) {
        for (var o in p) {
            if (p.hasOwnProperty(o)) {
                n = q.call(this, n, p[o], o)
            }
        }
        return n
    }
    function m(p, o, n, q) {
        if (typeof q === "undefined" || q === null) {
            q = ""
        }
        if (typeof o === "object") {
            o = a(o, function(s, r) {
                if (r === "transform") {
                    return
                }
                return r + '="' + e.encodeAttr(s) + '"'
            }).join(" ")
        }
        return e.format("<#{type}" + (n ? ' transform="#{matrix}"' : "") + " #{attrs}>#{content}</#{type}>", {
            type: p,
            matrix: String(n),
            attrs: o,
            content: q
        })
    }
    function h(n) {
        return {
            font: {
                family: n.attrs.font.replace(/^.*?"(\w+)".*$/, "$1"),
                size: typeof n.attrs["font-size"] === "undefined" ? null : parseInt(n.attrs["font-size"])
            }
        }
    }
    function k(n) {
        return "font: normal normal normal 10px/normal " + n.font.family + (n.font.size === null ? "" : "; font-size: " + n.font.size + "px")
    }
    function d(p, o, n) {
        if (p === null) {
            p = 10
        }
        return p * 4.5 / 13 * (o - 0.2 - n / 2) * 3.5
    }
    var g = {
        text: function(p) {
            style = h(p);
            var o = [];
            var n = p.attrs.text.toString().split("\n");
            a(n, function(s, q, r) {
                q = q || 0;
                o.push(m("text", f(p.attrs, function(u, v, t) {
                    if (t !== "text" && t !== "w" && t !== "h") {
                        if (t === "font-size") {
                            v = parseInt(v) + "px"
                        }
                        u[t] = e.encodeAttr(v)
                    }
                    return u
                }, {}), p.matrix, m("tspan", {
                    dy: d(style.font.size, q + 1, n.length)
                }, null, s)))
            });
            return o
        },
        path: function(o) {
            var n = (o.matrix.a === 1 && o.matrix.d === 1) ? {} : {
                transform: String(o.matrix)
            };
            return m("path", f(o.attrs, function(q, r, p) {
                if (p === "path") {
                    p = "d";
                    if (typeof r == "object") {
                        r = r.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")
                    }
                }
                q[p] = String(r);
                return q
            }, {}), o.matrix)
        }
    };
    Raphael.fn.toSVG = function() {
        var t = this
          , q = {
            svg: Raphael.svg,
            vml: Raphael.vml
        }
          , n = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + t.width + '" version="1.1" height="' + t.height + '">#{0}</svg>';
        Raphael.svg = true;
        Raphael.vml = false;
        var s = "";
        for (var r = t.bottom; r != null; r = r.next) {
            if (r.node.style.display === "none") {
                continue
            }
            var p = "";
            if (typeof g[r.type] === "function") {
                s += g[r.type](r);
                continue
            }
            switch (r.type) {
            case "image":
                p += ' preserveAspectRatio="none"';
                break
            }
            for (i in r.attrs) {
                var o = i;
                switch (i) {
                case "src":
                    o = "xlink:href";
                    break;
                case "transform":
                    o = "";
                    break
                }
                if (o) {
                    p += e.format(' #{name}="#{value}"', {
                        name: o,
                        value: e.encodeAttr(r.attrs[i])
                    })
                }
            }
            s += e.format('<#{type}  transform="#{matrix}" #{attrs}></#{type}>', {
                type: r.type,
                matrix: String(r.matrix),
                attrs: p
            })
        }
        Raphael.svg = q.svg;
        Raphael.vml = q.vml;
        return e.format(n, s)
    }
})();
(function() {
    var a = Math
      , b = T.charts.Util.extend;
    T.charts.mixin.ChartConvert = {
        getIndexes: function(j, f) {
            var g = j.length, e, d = [], h = function(k) {
                return (typeof k != "number" || isNaN(k)) && k != "--"
            };
            !f && (f = 1);
            if (h(j[2])) {
                var c = 1;
                for (e = 2; e < g; e++) {
                    if (h(j[e])) {
                        c++
                    } else {
                        break
                    }
                }
                for (e = 1; e < g; e += c) {
                    if (h(j[e])) {
                        break
                    }
                    if (f > 1 && (e + 1) / 2 > f) {
                        break
                    }
                    d.push({
                        index: e,
                        series: f == 1 ? 0 : (e - 1) / 2,
                        labelIndex: e + 1
                    })
                }
            } else {
                for (e = 2; e < g; e++) {
                    if (h(j[e])) {
                        break
                    }
                }
                for (g = e,
                e = 1; e < g; e++) {
                    if (f > 1 && e > f) {
                        break
                    }
                    d.push({
                        index: e,
                        series: f == 1 ? 0 : e - 1,
                        labelIndex: e + g
                    })
                }
            }
            return d
        },
        _raphaelData: function(f, t) {
            var h = T.object.clone(T.charts.mixin.ChartGrid.prototype.options);
            t = b(h, t);
            var n = f.items;
            if (f.units && f.units.length > 1) {
                if (t.yAxis[0].type != "category") {
                    t.yAxis[1] = T.object.clone(t.yAxis[0]);
                    t.yAxis[1].position = "right";
                    t.grid.right = t.grid.left
                }
                if (t.xAxis[0].type != "category") {
                    t.xAxis[1] = T.object.clone(t.xAxis[0]);
                    t.xAxis[1].position = "top"
                }
            }
            for (var g = 0; g < 2; g++) {
                if (t.yAxis[g] && t.yAxis[g].type != "category") {
                    t.yAxis[g].axisUnit = {
                        show: true,
                        data: f.units[g]
                    };
                    if (!t.yAxis[g].axisLabel) {
                        t.yAxis[g].axisLabel = {
                            margin: 10,
                            interval: "auto"
                        }
                    }
                    t.yAxis[g].axisLabel.formatter = this.axisFormat(f.units[g])
                }
                if (t.xAxis[g] && t.xAxis[g].type != "category") {
                    t.xAxis[g].axisUnit = {
                        show: true,
                        data: f.units[g]
                    };
                    if (!t.xAxis[g].axisLabel) {
                        t.xAxis[g].axisLabel = {
                            margin: 10,
                            interval: "auto"
                        }
                    }
                    t.xAxis[g].axisLabel.formatter = this.axisFormat(f.units[g])
                }
            }
            f.fields = T.array.filter(f.fields, function(u) {
                if (u && u.indexOf("SmallTip") != -1) {
                    return false
                }
                return true
            });
            var l = this.getIndexes(n[0], f.units.length);
            var k = []
              , j = []
              , r = t.legend;
            for (var g = 0; g < n.length; g++) {
                var s = n[g];
                k[g] = s[0];
                for (var m = 0; m < l.length; m++) {
                    var p = l[m]
                      , e = p.series
                      , q = s[p.index]
                      , o = s[p.labelIndex];
                    var c = t.yAxis[e] || {};
                    var d = t.xAxis[e] || {};
                    j[m] = j[m] || {
                        name: f.fields[m + 1] || "",
                        data: [],
                        yAxisIndex: c.type != "category" ? e : 0,
                        xAxisIndex: d.type != "category" ? e : 0
                    };
                    j[m].data.push({
                        value: q,
                        title: o,
                        formatter: this.axisFormat(f.units[e || 0])
                    });
                    (!g && r) && (r.data[m] = f.fields[m + 1])
                }
            }
            if (t.xAxis[0].type == "category") {
                t.xAxis[0].data = k
            }
            if (t.yAxis[0].type == "category") {
                t.yAxis[0].data = k
            }
            t.series = j;
            t.containerId = f.flashId;
            t.legend = r;
            return t
        },
        axisFormat: function(e) {
            var c = T.i18n.number.formatNumber
              , d = T.i18n.currency.format
              , f = T.i18n.number.formatRatio;
            switch (e) {
            case "百分比":
            case "%":
                return f;
            case "时长":
                return;
            case "元":
                return d;
            default:
                return c
            }
        },
        raphaelDataBar: function(e, d) {
            var c = T.object.clone(T.charts.Bar.prototype.options);
            d = b(c, d);
            d = this._raphaelData(e, d);
            return d
        },
        raphaelDataTrade: function(e, d) {
            var c = T.object.clone(T.charts.Trade.prototype.options);
            d = b(c, d);
            d = this.raphaelDataBar(e, d);
            return d
        },
        raphaelDataOldTrade: function(e, d) {
            var c = T.object.clone(T.charts.OldTrade.prototype.options);
            d = b(c, d);
            d = this.raphaelDataBar(e, d);
            return d
        },
        raphaelDataRowBar: function(e, d) {
            var c = T.object.clone(T.charts.RowBar.prototype.options);
            d = b(c, d);
            d = this.raphaelDataBar(e, d);
            return d
        },
        raphaelDataOldRowBar: function(e, d) {
            var c = T.object.clone(T.charts.OldRowBar.prototype.options);
            d = b(c, d);
            d = this.raphaelDataBar(e, d);
            return d
        },
        raphaelDataLine: function(e, d) {
            var c = T.object.clone(T.charts.Line.prototype.options);
            d = b(c, d);
            d = this._raphaelData(e, d);
            return d
        },
        raphaelData: function(c) {
            var d = this["raphaelData" + c.type];
            if (!d) {
                d = this._raphaelData
            }
            return d.call(this, c)
        },
        pathAttr: function(c) {
            c = T.object.clone(c);
            var e;
            if (c.type == "dashed") {
                e = ["- "]
            } else {
                if (c.type == "dotted") {
                    e = [". "]
                }
            }
            var d = {
                stroke: c.color,
                "stroke-width": c.width,
                "stroke-dasharray": e,
                fill: c.background
            };
            c.width = null;
            d = T.extend(c, d);
            d = this.clearNullAttrs(d);
            return d
        },
        textAttr: function(d) {
            d = T.object.clone(d);
            var c = "middle";
            if (d.align == "left") {
                c = "start"
            } else {
                if (d.align == "right") {
                    c = "end"
                }
            }
            var e = {
                fill: d.color,
                "font-size": d.fontSize || 12,
                "font-family": d.fontFamily,
                "font-weight": d.fontWeight,
                "text-anchor": c,
                "font-style": d.fontStyle
            };
            if (T.browser.ie < 9) {
                e["font-size"] += 1
            }
            e = T.extend(d, e);
            e = this.clearNullAttrs(e);
            return e
        },
        clearNullAttrs: function(c) {
            T.object.each(c, function(e, d) {
                if (c[d] !== null && c[d] !== undefined) {
                    return
                }
                delete c[d]
            });
            return c
        }
    }
})();
(function(a) {
    a.charts.mixin.FlowChart = a.createClass({
        opts: {
            getNextFlowData: function() {},
            onchangeSetting: function() {},
            onchangeMonitorPage: function() {},
            onSearchIpt:function(){
            },
            scrollContainer: a.g("CustomFlowContainer"),
            baseUri: null,
            webRoot: "/web",
            siteId: null,
            monitorPageList: null,
            maxPageNumberPerFlow: 10,
            maxDepth: 3,
            dislocation: 0.5,
            defaultHeight: 716,
            flow: {
                pipelineWidth: 3,
                pipelineOffset: 3,
                bigPipelineWidth: 10,
                bigPipelineHeight: 18,
                bezierWidth: 70,
                color: {
                    bezierColor: {
                        bounce: "#FFEFD7",
                        common: "#DAECFF"
                    },
                    pipelineColor: {
                        bounce: "#ECCB9A",
                        common: "#89B7E8"
                    }
                },
                width: 100,
                minOffset: 6
            },
            rect: {
                monitorPage: {
                    width: 200,
                    height: 170
                },
                viewDownPages: {
                    width: 26,
                    height: 60,
                    marginLeft: 2
                },
                width: 150,
                height: 80,
                tipHeight: 95,
                defaultColor: "#eee",
                color: ["rgba(208,231,255,0.75)", "rgba(208,231,255,0.65)", "rgba(208,231,255,0.5)", "rgba(208,231,255,0.35)", "rgba(208,231,255,0.25)", "rgba(208,231,255,0.2)", "rgba(208,231,255,0.2)", "rgba(208,231,255,0.2)", "rgba(208,231,255,0.2)", "rgba(208,231,255,0.2)", "rgba(208,231,255,0.2)"],
                marginBottom: 10,
                upPageDetailTemplate: '<div class="cf-page-detail-arrow"></div>                                     <div class="cf-up-page-info">                                         <span class="cf-page-title">#{0}</span><span class="cf-page-no" title="#{1}">#{2}</span>                                     </div>                                     <div class="cf-up-page-info">                                         <span class="cf-page-title">#{3}</span><span class="cf-page-no" title="#{4}">#{5}</span>                                     </div>',
                downPageDetailTemplate: '<div class="cf-page-detail-arrow"></div><div class="cf-down-page-info info-top"><span class="cf-page-title page-label">#{0}</span><span class="cf-page-no ellips page-label" title="#{1}">#{1}</span></div><div class="cf-down-page-info"><span class="cf-page-title page-label">#{2}</span><span class="cf-page-no ellips page-label" title="#{3}">#{3}</span></div><div class="cf-down-page-info"><span class="cf-page-title page-label">#{4}</span><span class="cf-page-no ellips page-label" title="#{5}">#{5}</span></div><div class="cf-down-page-info"><span class="cf-page-title page-label">#{6}</span><span class="cf-page-no ellips page-label" title="#{7}">#{7}</span></div>',
                exitAndOthersTemplate: '<div class="page-detail-fl"><div class="radio others">#{1}</div>                                        <div class="cf-exit-others">#{0}</div></div>',
                monitorPageTemplate: '<div class="monitor-page-url" title="!{6}"><a href="javascript:void(0)">!{1}</a></div><div class="monitor-page-pv"><span class="mp-pv-desc page-label">访问人数</span><span title="#{2}" class="mp-pv-no ellips page-label">#{2}</span> </div><div class="monitor-page-pv"><span class="mp-scale-desc page-label">浏览量</span><span title="#{3}" class="mp-pv-no ellips page-label">#{3}</span>                                      </div>                                      <div class="monitor-page-pv">                                          <span class="mp-exit-desc page-label">平均时长</span><span title="#{4}" class="mp-exit-no ellips page-label">#{4}</span>                                      </div>                                      <div class="mp-page-select"></div>                                      <div class="monitor-page-exit">                                          <span class="mp-exit-desc page-label">页面跳出率</span><span class="mp-exit-no ellips page-label">#{5}</span>                                      </div>',
                rectUrlTemplate: '<div class="page-detail-fl"><p class="radio #{1}">#{2}</p><p title="!{0}">!{0}</p></div><div class="page-detail-fr"><p class="uv">UV:</p><p title="#{3}">#{3}</p></div>',
                rectNoneUrlTemplate: '<span title="#{0}">#{1}</span>',
                settingTemplate: '<div title="设为根节点" class="fset"></div><div title="查看详情" class="fdetail"></div>'
            },
            tip: {
                width: 300,
                lineHeight: 20,
                paddingTop: 15,
                paddingLeft: 10
            },
            styles: {
                linksText: {
                    fill: "#000",
                    "font-size": "13",
                    "text-anchor": "start"
                }
            },
            monitorPageListTemplates: {
                listTemplate: "<ul><input type='text' class='search-ipt'>#{0}</ul>",
                liTemplate: '<li><a title="!{0}" data="{id:\'#{1}\',path_hierarchy:#{3}}">!{2}</a></li>'
            },
            noDataSettings: {
                rectColor: "#EEF5FC",
                pipeColor: "#F2F3F3",
                bigPipeHeight: 12,
                bigPipeWidth: 105,
                pipeWidth: 3,
                pipeHeight: 20,
                rectHeight: 70,
                rectWidth: 180,
                messageTemplate: '<div class="cf-no-data-message">暂无数据。</div>'
            }
        },
        _html: null,
        _actualMaxPageNumber: 0,
        _monitorPagePosition: {
            x: 0,
            y: 0
        },
        _scrollContainer: {
            width: 0,
            height: 0
        },
        _processBezierCurve: function(c, g, p, l, o) {
            var n = this.opts.flow.minOffset, h = (n + p / 100 * (this.opts.rect.height - n)) / 2, j = (h + this.opts.flow.pipelineOffset) > this.opts.rect.height / 2 ? this.opts.rect.height / 2 : h + this.opts.flow.pipelineOffset, d = c.x, b = c.y - j, f, e;
            var k = l ? this.opts.flow.color.pipelineColor.bounce : this.opts.flow.color.pipelineColor.common
              , m = l ? this.opts.flow.color.bezierColor.bounce : this.opts.flow.color.bezierColor.common;
            f = this._rectRaphael(d, b, this.opts.flow.pipelineWidth, 2 * j, {
                fill: k,
                stroke: "none"
            });
            o && (c.x = c.x + this.opts.flow.pipelineWidth);
            e = this._bezierFlow(c, g, p, {
                fill: m,
                "stroke-width": 0
            });
            e.data("isbounce", l);
            return {
                pipe: f,
                bezier: e
            }
        },
        _shapes: null,
        _initHtmlContainer: function() {
            this._html = a.dom.create("div", {
                "class": "html"
            });
            this.container.appendChild(this._html);
            if (typeof this.container.onselectstart != "undefined") {
                this.container.onselectstart = function() {
                    return false
                }
            } else {
                if (typeof this.container.style.MozUserSelect != "undefined") {
                    this.container.style.MozUserSelect = "none"
                }
            }
        },
        _initLocalVariables: function() {
            this._shapes = {
                lastWidth: null,
                lastHeight: null,
                currentWidth: null,
                currentHeight: null,
                tangram: {
                    monitorPageList: null
                },
                raphael: {
                    tip: {
                        upPageTip: null
                    }
                }
            };
            for (var b = 1; b <= this.opts.maxDepth; b++) {
                this._shapes.tangram["downPagesLevel" + b] = [];
                this._shapes.tangram["downPagesLevel" + b + "ActiveViewDownLink"] = null;
                this._shapes.tangram["downPagesLevel" + b + "ViewDownLink"] = [];
                this._shapes.tangram["downPagesLevel" + b + "Flow"] = [];
                this._shapes.tangram["downPagesLevel" + b + "Height"] = null;
                this._shapes.raphael["downFlow" + b] = [];
                this._shapes.raphael.tip["downPagesLevel" + b + "Tip"] = null
            }
            this._html = null;
            this._actualMaxPageNumber = 0;
            this._monitorPagePosition = {
                x: 0,
                y: 0
            };
            this._scrollContainer.width = parseInt(a.g(this.opts.scrollContainer).offsetWidth);
            this._scrollContainer.height = parseInt(a.g(this.opts.scrollContainer).offsetHeight)
        },
        _formateUrl: function(b) {
            return a.truncat(b, 45)
        },
        _formateNum: function(b) {
            return a.truncat(b, 12)
        },
        _rect: function(d, j, f, c, b, e) {
            var h = {
                width: f,
                height: c,
                left: d,
                top: j,
                position: "absolute"
            }
              , g = a.dom.create("div");
            a.dom.setAttrs(g, b);
            a.dom.setStyles(g, a.object.extend(h, e));
            this._html.appendChild(g);
            return g
        },
        _rectRaphael: function(c, g, e, b, d) {
            var f = ["M", c, g, "h", e, "v", b, "h", -e, "z"];
            return this.paper.path(f).attr(d)
        },
        _triangle: function(c, g, b, f, d) {
            var e, b = b || 10, f = f || "right";
            if (f === "right") {
                e = ["M", c, g, "l", b, -(b / 2), "m", -b, b / 2, "l", b, b / 2, "z"]
            } else {
                if (f === "bottom") {
                    e = ["M", c, g, "l", b / 2, b, "m", -(b / 2), -b, "l", -(b / 2), b, "z"]
                } else {
                    if (f === "left") {
                        e = ["M", c, g, "l", -b, -(b / 2), "m", b, b / 2, "l", -b, b / 2, "z"]
                    } else {
                        if (f === "top") {
                            e = ["M", c, g, "l", b / 2, -b, "m", -b / 2, b, "l", -b / 2, -b, "z"]
                        }
                    }
                }
            }
            return this.paper.path(e).attr(d)
        },
        _bezierFlow: function(d, f, o, q) {
            var h = this.opts.flow.minOffset;
            var e = d.x, n = d.y, c = f.x, l = f.y, b, j, m = {
                c1: {
                    x: 0,
                    y: 0
                },
                c2: {
                    x: 0,
                    y: 0
                }
            }, k = {
                c1: {
                    x: 0,
                    y: 0
                },
                c2: {
                    x: 0,
                    y: 0
                }
            }, g, p;
            g = (h + o / 100 * (this.opts.rect.height - h)) / 2;
            b = e;
            j = n + g;
            n = n - g;
            m.c1.x = (c - e) / 4 + e;
            m.c1.y = n;
            m.c2.x = (c - e) / 4 + e;
            m.c2.y = (n - l) / 10 + l;
            k.c1.x = (c - b) / 4 + b;
            k.c1.y = (j - l) / 10 + l;
            k.c2.x = (c - b) / 4 + b;
            k.c2.y = j;
            p = ["M", e, n, "C", m.c1.x, m.c1.y, m.c2.x, m.c2.y, c, l - 2, "v", 4, "C", k.c1.x, k.c1.y, k.c2.x, k.c2.y, b, j];
            return this.paper.path(p).attr(q)
        }
    })
})(baidu);
(function() {
    var a = Math
      , b = T.charts.mixin.ChartConvert;
    T.charts.mixin.ChartGrid = T.createClass({
        options: {
            tooltip: {},
            grid: {
                x: null,
                y: null,
                width: null,
                height: null,
                border: [false, true, false, true],
                margin: [30, 26, 84, 100]
            },
            xAxis: [{
                type: "category",
                position: "bottom",
                boundaryGap: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#4770A7"
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: "#999"
                    }
                },
                splitLine: {
                    show: true
                },
                data: [],
                axisLabel: {
                    show: true,
                    interval: "auto",
                    rotate: 0,
                    margin: 10,
                    formatter: null,
                    textStyle: null,
                    maxLength: 20
                }
            }],
            yAxis: [{
                type: "value",
                position: "left",
                axisUnit: {
                    show: true,
                    data: ""
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#4770A7"
                    }
                },
                precision: 0,
                splitNumber: 5
            }],
            textStyle: {
                color: "#777",
                align: "center",
                fontFamily: "Arial",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            lineStyle: {
                color: "#ddd",
                width: 1,
                type: "solid"
            },
            loading: {
                text: "正在加载，请稍候……",
                formatter: '<div class="chart-loading">                            <div class="loading">#{0}</div>                        </div>'
            },
            error: {
                formatter: '<div class="chart-error">                            <div class="error">#{0}</div>                        </div>'
            },
            GROUP: false,
            exportSVG: false,
            resizable: true
        },
        setOption: function(e) {
            if (T.object.isPlain(e)) {
                this.options = T.object.clone(this.options);
                this.options = T.charts.Util.extend(this.options, e)
            }
            if (!this.options.containerId || !T.g(this.options.containerId)) {
                return this
            }
            this.initChart();
            var d = (this.options.xAxis || []).concat(this.options.yAxis || []);
            var c = true;
            for (var f = 0; f < d.length; f++) {
                if (d[f].type != "category") {
                    continue
                }
                if (!d[f].data || d[f].data.length == 0) {
                    c = false
                }
            }
            if (!c) {
                return this
            }
            this.initGrid();
            if (this.options.series && this.options.series.length > 0) {
                this.paint()
            }
            return this
        },
        setSeries: function(c) {
            this.options.series = c;
            this._initialized && this.paint();
            return this
        },
        on: function() {},
        un: function() {},
        showLoading: function() {
            var d = T.g(this.options.containerId);
            var e = T.dom.query("> .chart-loading", d);
            if (!e || e.length == 0) {
                var c = this.options.loading || this.defaultOptions.loading;
                T.dom.insertHTML(d, "beforeend", T.format(c.formatter, c.text));
                e = T.dom.query("> .chart-loading", d)
            }
            T.array.each(e, function(f) {
                T.dom.show(f)
            });
            this.hideErrorTip()
        },
        hideLoading: function() {
            var c = T.g(this.options.containerId);
            var d = T.dom.query("> .chart-loading", c);
            T.array.each(d, function(e) {
                T.dom.hide(e)
            })
        },
        clear: function() {
            if (this.paper) {
                this.paper.clear()
            }
        },
        dispose: function() {},
        showErrorTip: function(d) {
            var c = T.g(this.options.containerId);
            var e = this.options.error || this.defaultOptions.error;
            T.dom.insertHTML(c, "beforeend", T.format(e.formatter, d))
        },
        hideErrorTip: function() {
            var c = T.g(this.options.containerId);
            var d = T.dom.query("> .chart-error", c);
            T.array.each(d, function(e) {
                T.dom.remove(e)
            })
        },
        _initialized: false,
        defaultOptions: null,
        _chart: null,
        _raphaelEls: null,
        _groups: null,
        initChart: function() {
            var d = this.getDefaultOptions()
              , f = this.options = T.charts.Util.extend(d, this.options)
              , c = T.g(f.containerId);
            if (!this.paper) {
                this.paper = Raphael(f.containerId, "100%", "100%")
            }
            this.clear();
            T.dom.setStyle(c, "overflow", "hidden");
            T.dom.setStyle(c, "position", "relative");
            if (f.xAxis.length > 1) {
                f.xAxis[0].position = "bottom";
                f.xAxis[1].position = "top"
            }
            if (f.yAxis.length > 1) {
                f.yAxis[0].position = "left";
                f.yAxis[1].position = "right"
            }
            this._chart = {};
            var g = T.extend(this._chart, f.grid);
            var e = g.margin || d.grid.margin;
            g.x = g.x === null || isNaN(g.x) ? e[3] : g.x;
            g.x = a.floor(g.x) + 0.5;
            g.y = g.y === null || isNaN(g.y) ? e[0] : g.y;
            g.y = a.floor(g.y) + 0.5;
            this._raphaelEls = {
                gridPanel: null,
                legend: [],
                series: [],
                frontPanel: [],
                axis: {
                    x: [],
                    y: []
                }
            };
            if (this.tip) {
                this.tip.remove();
                this.tip = null
            }
            g.initialWidth = g.chartWidth = c.offsetWidth;
            g.initialHeight = g.chartHeight = c.offsetHeight;
            g.width = g.width || g.chartWidth - g.x - g.margin[1];
            g.height = g.height || g.chartHeight - g.y - g.margin[2];
            g.ordinate = {
                x: [],
                y: []
            };
            g.XY = {
                x: [],
                y: []
            }
        },
        initGroups: function() {
            var j = this._chart
              , q = this._raphaelEls;
            var d = this._groups = []
              , r = this.options;
            j.baseGroups = ["grid", "left", "right"];
            var n = j.baseGroups.length;
            for (var g = 0; g < n; g++) {
                d[g] = this.getGroup({
                    tag: j.baseGroups[g]
                })
            }
            var o = 0
              , c = 1
              , h = 2;
            d[o].push(q.gridPanel);
            T.array.each(q.borders, function(s) {
                s && d[o].push(s)
            });
            var m = q.axis.x.concat(q.axis.y);
            T.array.each(q.axis.y, function(t) {
                if (!t.split) {
                    return
                }
                for (var s = 0; s < t.split.length; s++) {
                    d[o].push(t.split[s])
                }
            });
            T.array.each(q.axis.x, function(s) {
                s.tick && d[o].push(s.tick);
                s.axis && d[o].push(s.axis)
            });
            var f = {
                labels: []
            };
            if (r.yAxis.length > 1) {
                f = q.axis.y[0]
            } else {
                if (r.yAxis[0].position == "left") {
                    f = q.axis.y[0]
                }
            }
            T.array.each(f.labels, function(s) {
                d[c].push(s)
            });
            f.tick && d[c].push(f.tick);
            f.axis && d[c].push(f.axis);
            var k = {
                labels: []
            };
            if (r.yAxis.length > 1) {
                k = q.axis.y[1]
            } else {
                if (r.yAxis[0].position == "right") {
                    k = q.axis.y[0]
                }
            }
            T.array.each(k.labels, function(s) {
                d[h].push(s)
            });
            k.tick && d[h].push(k.tick);
            k.axis && d[h].push(k.axis);
            var l = this.initDataGroups();
            this.initLegendGroups();
            var p = d.length;
            d[p] = this.getGroup({
                tag: "grid"
            });
            if (l) {
                var e = q.axis.x[0] || {};
                e.axis && d[p].push(q.axis.x[0].axis)
            }
            for (var g = 0; g < q.frontPanel.length; g++) {
                d[p].push(q.frontPanel[g])
            }
        },
        initDataGroups: function() {
            var f = this._raphaelEls
              , d = f.series || []
              , c = this._groups
              , g = this._chart;
            var j = this
              , h = g.baseGroups.length;
            for (var e = 0; e < g.XY.x.length; e++) {
                T.array.each(g.XY.x[e], function(k, n) {
                    var p = c[n + h];
                    if (!p) {
                        p = c[n + h] = j.getGroup({
                            tag: "data",
                            x: k
                        })
                    }
                    var o = f.axis.x[e].split[n];
                    o && p.push(o);
                    var m = f.axis.x[e].labels[n];
                    m && p.push(m);
                    for (var l = 0; l < d.length; l++) {
                        T.array.each(d[l][n], function(q) {
                            if (q.nodeType) {
                                p.push([q])
                            } else {
                                p.push(q)
                            }
                        })
                    }
                })
            }
            return true
        },
        initLegendGroups: function() {
            var c = this._raphaelEls.legend || []
              , d = 2
              , e = this._groups[d];
            T.array.each(c, function(f) {
                T.array.each(f, function(g) {
                    if (g.nodeType) {
                        e.push([g])
                    } else {
                        e.push(g)
                    }
                })
            })
        },
        getGroup: function(c) {
            var e = this.options.exportSVG ? this.paper.set : this.paper.group;
            var d = e.apply(this.paper);
            d.cdata = T.object.clone(c);
            return d
        },
        getDefaultOptions: function() {
            var c = T.charts.mixin.ChartGrid.prototype.options;
            this.defaultOptions = T.object.clone(c);
            return this.defaultOptions
        },
        drawGrid: function(B, t, K, M) {
            var C = this.options
              , U = this._chart
              , f = this.paper
              , p = this._groups
              , D = this._raphaelEls;
            var H = t == "x"
              , d = H ? U.width : U.height
              , h = H ? U.height : U.width
              , W = H ? "V" : "H"
              , G = H ? "top" : "left"
              , c = B.position == G;
            var n = {
                x: null,
                y: null,
                gx: null,
                gy: null
            };
            n[K] = U[K] + h;
            n["g" + K] = U[K];
            var w = U.XY[t][M] = [];
            D.axis[t] = D.axis[t] || [];
            var o = D.axis[t][M] = {
                split: [],
                labels: [],
                axis: null,
                tick: null
            };
            var x = this, l, N, u;
            var S = function() {
                n["g" + t] = a.floor(n[t]) + 0.5;
                w[Q] = n["g" + t];
                s();
                I();
                E()
            };
            var F = B.splitLine || {};
            var r = F.lineStyle || C.lineStyle;
            var I = function() {
                if (F.show === false) {
                    return
                }
                var X = ["M", n.gx, n.gy, W, n[K]];
                var Y = f.path(X.join()).attr(b.pathAttr(r)).toBack();
                o.split[Q] = Y
            };
            var e = {
                x: null,
                y: null
            }
              , L = 7;
            e[K] = c ? U[K] : n[K];
            var j = B.axisTick || {};
            var A = j.lineStyle || C.lineStyle;
            var E = function() {
                if (j.show === false) {
                    return
                }
                e[t] = n["g" + t];
                var Y = ["M", e.x, e.y, W, e[K] - (c ? 1 : -1) * L];
                var X = f.path(Y).attr(b.pathAttr(A)).toBack();
                o.tick[Q] = X
            };
            var P = B.axisUnit || {};
            var z = B.axisLabel || {};
            var k = z.interval;
            var y = function() {
                if (k == "auto") {
                    k = Math.ceil(u / 10)
                } else {
                    if (k == null || isNaN(k)) {
                        k = 0
                    }
                }
            };
            var m = z.margin || 10;
            var s = function() {
                if (z.show === false) {
                    return
                }
                if (k > 1 && (Q % k) != 0) {
                    return
                }
                l = l || z.textStyle || C.textStyle;
                l = T.object.clone(l);
                if (!H) {
                    l.align = c ? "right" : "left"
                }
                var X = {
                    x: null,
                    y: null
                };
                X[t] = n[t];
                X[K] = c ? n["g" + K] - m : n[K] + m;
                N = x.getFormat(z.formatter, [N]) || N;
                if (Q == u - 1 && P.show === true && P.data) {
                    N += " / " + P.data
                }
                var Z;
                if (z.vertical) {
                    N = N.split("").join("\n");
                    Z = f.text(X.x, X.y, N)
                } else {
                    Z = f.text(X.x, X.y, T.format("#{0, 8}", N))
                }
                Z.attr({
                    title: N
                });
                Z.attr(b.textAttr(l));
                if (z.vertical) {
                    Z.translate(0, Z.getBBox().height / 2)
                }
                o.labels[Q] = Z;
                if (z.rotate) {
                    var Y = Z.getBBox().width / 2;
                    Z.transform(["t,-6,0r", z.rotate, "t", Y, 0].join())
                }
            };
            if (B.type == "value") {
                var v = d / B.splitNumber;
                u = B.splitNumber + 1;
                var O = U.ordinate[t][M] || [];
                y();
                for (var Q = 0; Q < u; Q++) {
                    n[t] = H ? U[t] + Q * v : U[t] + d - Q * v;
                    N = O[Q] || 0;
                    l = null;
                    S()
                }
            } else {
                u = B.data.length,
                v = d / (u - (+!B.boundaryGap));
                y();
                for (var Q = 0; Q < u; Q++) {
                    var R = (Q + (+!!B.boundaryGap) * 0.5) * v;
                    n[t] = H ? U[t] + R : U[t] + d - R;
                    N = B.data[Q];
                    var l = N.textStyle;
                    S()
                }
            }
            var q = B.axisLine || {};
            var V = q.lineStyle || C.lineStyle;
            if (q.show !== false) {
                var J = {
                    x: null,
                    y: null
                };
                J[t] = U[t];
                J[K] = c ? U[K] : U[K] + h;
                var g = f.path(["M", J.x, a.ceil(J.y) + 0.5, H ? "H" : "V", J[t] + d]);
                g.attr(b.pathAttr(V));
                o.axis = g
            }
        },
        initGrid: function() {
            var s = this.options
              , k = this._chart
              , d = this.paper
              , e = this._groups
              , r = this._raphaelEls;
            r.borders = [];
            var j = s.grid.border || this.defaultOptions.grid.border;
            var g, n = a.floor(k.x) + 0.5, m = a.floor(k.y) + 0.5, c = k.width, p = k.height;
            var f = d.rect(n, m, c, p);
            f.attr(b.pathAttr({
                color: "none",
                background: "#fff",
                opacity: 0
            }));
            f.toBack();
            r.gridPanel = f;
            var q = function(w) {
                var v = j[h];
                if (v) {
                    v = v || {};
                    var u = v.lineStyle || s.lineStyle;
                    var t = d.path(w.join());
                    t.attr(b.pathAttr(u));
                    r.borders[h] = t
                }
            };
            for (var h = 0; h < 4; h++) {
                switch (h) {
                case 0:
                    q(["M", n, m, "H", n + c]);
                    break;
                case 1:
                    q(["M", a.floor(n + c) + 0.5, m, "V", m + p]);
                    break;
                case 2:
                    q(["M", n, a.floor(m + p) + 0.5, "H", n + c]);
                    break;
                case 3:
                    q(["M", n, m, "V", m + p]);
                    break
                }
            }
            var l = this;
            var o = function(u, t, z) {
                for (var v = 0; v < u.length; v++) {
                    var w = u[v];
                    l.drawGrid(w, t, z, v)
                }
            };
            o(s.xAxis, "x", "y");
            o(s.yAxis, "y", "x")
        },
        paint: function() {
            this.initValueOrdinate();
            this.empty(this._raphaelEls.legend);
            this.empty(this._raphaelEls.series);
            var c = this.paintData();
            this.paintLegend();
            if (c) {
                var d = this._raphaelEls.axis.x[0] || {};
                d.axis && d.axis.toFront()
            }
            if (!this.options.exportSVG) {
                if (this.options.GROUP) {
                    this.initGroups()
                }
                this._bindEvents()
            }
        },
        paintData: function() {},
        paintLegend: function() {},
        initValueOrdinate: function() {
            var s = this.options
              , m = this._chart
              , o = this;
            var p = m.maxValues = {
                x: [],
                y: []
            }
              , e = m.minValues = {
                x: [],
                y: []
            };
            var r = function(v, t, u, j) {
                if (isNaN(j)) {
                    return
                }
                t[u] = t[u] || j;
                t[u] = v(t[u], j)
            };
            for (var k = 0; k < s.series.length; k++) {
                var l = s.series[k]
                  , h = l.data
                  , g = l.xAxisIndex || 0
                  , q = l.yAxisIndex || 0;
                for (var f = 0; f < h.length; f++) {
                    var d = T.object.isPlain(h[f]) ? h[f].value : h[f];
                    r(a.max, p.x, g, d);
                    r(a.max, p.y, q, d);
                    r(a.min, e.x, g, d);
                    r(a.min, e.y, q, d)
                }
            }
            var n = this._raphaelEls.axis;
            var c = function(t, j) {
                T.array.each(t, function(z, y) {
                    if (z.type != "value") {
                        return
                    }
                    m.ordinate[j][y] = o.computOrdinate(m.maxValues[j][y], 0, z.splitNumber);
                    var B = m.ordinate[j][y];
                    var u = n[j][y].labels;
                    var w = z.axisLabel || {};
                    var v = z.axisUnit || {};
                    for (var x = 0; x < u.length; x++) {
                        var A = B[x];
                        A = o.getFormat(w.formatter, [A]) || A;
                        if (x == u.length - 1 && v.show === true && v.data) {
                            A += " / " + v.data
                        }
                        u[x].attr({
                            text: T.format("#{0, 8}", A),
                            title: A
                        })
                    }
                })
            };
            c(s.xAxis, "x");
            c(s.yAxis, "y")
        },
        computOrdinate: function(m, j, g) {
            var c = 5
              , k = function(r, q) {
                var s = r.toExponential(1)
                  , t = s.substring(0, 1);
                return s.replace(/.*e/, t >= 5 ? "5e" : "0.5e") / q
            }
              , o = function(r, w) {
                var t = r.toExponential(1)
                  , v = w.toExponential(1);
                var s = t.match(/.*e(.*)$/)
                  , u = v.match(/.*e(.*)$/);
                s = Math.min(s[1], u[1]);
                if (s >= 0) {
                    return r + w
                }
                var q = Math.pow(10, -s);
                return (r * q + w * q) / q
            }
              , d = function(q, r) {
                return o(q, -r)
            };
            g = g || 5;
            m = isNaN(m) ? 5 : m;
            j = isNaN(j) ? 0 : j;
            if (m - j > 500) {
                c = k(m, 10)
            }
            var e = a.ceil(m / c) * c;
            var f = a.floor(j / c) * c;
            var l = d(e, f) / g;
            var n = f
              , p = [];
            p.push(n);
            for (var h = 0; h < g; h++) {
                n = o(n, l);
                p.push(n)
            }
            return p
        },
        showTip: function(e, c) {
            if (!this.tip) {
                var d = this._raphaelEls.gridPanel[0];
                this.tip = new T.charts.mixin.ChartTip({
                    region: d,
                    animate: true,
                    showAnimate: T.fx.fadeIn
                })
            }
            this.tip.setContent(c);
            this.tip.showTip(e)
        },
        hideTip: function() {
            if (this.tip) {
                this.tip.hideTip()
            }
        },
        empty: function(c) {
            var d = this;
            if (c && c.remove) {
                c.remove();
                return
            }
            if (!T.object.isPlain(c) && Object.prototype.toString.call(c) != "[object Array]") {
                return
            }
            T.object.each(c, function(f, e) {
                if (f) {
                    d.empty(f)
                }
            })
        },
        getFormat: function(c, d) {
            if (typeof c == "string") {
                return T.format.apply(null, [c].concat(d))
            } else {
                if (typeof c == "function") {
                    return c.apply(null, d)
                }
            }
            return null
        },
        _bindEvents: function() {
            if (this.options.resizable) {
                T.event.on(window, "resize", T.fn.bind(this.resizeHandle, this))
            }
        },
        resizeHandle: function() {
            var j = this
              , d = j.options
              , k = j.paper
              , h = j._chart;
            var g = T.g(d.containerId).offsetWidth;
            if (h.chartWidth == g) {
                return
            }
            h.chartWidth = g;
            var e, f = h.initialWidth - h.width, c = (g - h.initialWidth + h.width) / h.width;
            T.array.each(j._groups, function(m, l) {
                if (!m.cdata) {
                    return
                }
                switch (m.cdata.tag) {
                case "grid":
                    m.transform(["s", c, 1, h.x, "0"].join());
                    break;
                case "right":
                    e = g - h.initialWidth;
                    m.transform(["t", e, 0].join());
                    break;
                case "data":
                    e = m.cdata.x - h.x;
                    e = e * c - e;
                    m.transform(["t", e, 0].join());
                    break
                }
            })
        },
        contain: function(d, e) {
            if (typeof e != "string") {
                return false
            }
            e = e.split(".");
            var c = false
              , f = d;
            T.array.each(e, function(h, g) {
                if (h == "" && (g != 0 || g != e.length - 1)) {
                    return ( c = false)
                }
                if (h == "") {
                    return
                }
                if (f === undefined || f === null) {
                    return ( c = false)
                }
                f = f[h];
                if (f !== undefined && f !== null) {
                    c = true
                }
            });
            return c
        },
        isHoliday: function(g) {
            if (!g.match(/^(\d{4})[\/|-](0[1-9]|1[0-2])[\/|-](\d{2})$/)) {
                return null
            }
            g = g.replace(/-/g, "/");
            var f = T.config.holidays || {}
              , e = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var h = new Date(Date.parse(g)), c;
            T.object.each(f, function(d, j) {
                if (g.match(d)) {
                    c = j
                }
            });
            if (!c && (h.getDay() == 0 || h.getDay() == 6)) {
                c = e[h.getDay()]
            }
            return c
        },
        CLASS_NAME: "T.charts.mixin.ChartGrid"
    })
})();
(function() {
    var a = Math;
    T.charts.mixin.ChartTip = T.createClass({
        options: {
            order: ["left", "right", "bottom", "top"],
            region: document.body,
            target: null,
            content: null,
            extClass: "",
            arrowWidth: 14,
            arrowHeight: 6,
            animate: false,
            showAnimate: null,
            hideAnimate: null,
            arrowBorderColor: "#aeaeae",
            arrowBgColor: "#fff",
            arrowSvgTpl: '<svg style="overflow: hidden; position: relative;" height="#{0}" version="1.1" width="#{1}" xmlns="http://www.w3.org/2000/svg">                            <path fill="#{2}" stroke="#{3}" d="#{4}"></path>                        </svg>',
            arrowVmlTpl: '<?xml:namespace prefix=v ns="urn:schemas-microsoft-com:vml" />                        <v:shape style="POSITION: absolute; HEIGHT: 1px; WIDTH: 1px; behavior:url(#default#VML);" coordsize="1,1" filled="t" fillcolor="#{2}" stroked="t" strokecolor="#{3}" path = "#{4}E">                            <v:skew style="behavior:url(#default#VML);" on="t" matrix="1,0,0,1,0,0" offset="-.5,-.5"></v:skew>                        </v:shape>'
        },
        _refer: null,
        _defautArrowOpts: null,
        _init: function() {
            this._initRefer();
            this._buildTip()
        },
        _initRefer: function() {
            this._refer = {
                tip: null,
                top: null,
                bottom: null,
                left: null,
                right: null,
                inner: null
            }
        },
        _buildTip: function() {
            var g = this
              , f = g.options
              , e = g._refer;
            var h = e.tip = T.g(document.body).appendChild(document.createElement("div"));
            T.dom.setStyles(h, {
                position: "absolute"
            });
            var c = e.inner = document.createElement("div");
            
            T.dom.setStyles(c, {
                position: "relative"
            });
            h.appendChild(c);
            c.innerHTML = f.content || "";
            T.dom.addClass(c, "tip-inner");
            T.dom.addClass(h, f.extClass);
            var b = f.arrowWidth
              , d = f.arrowHeight;
            this._defautArrowOpts = {
                top: {
                    top: 1 - d,
                    left: "50%",
                    "margin-left": -b / 2
                },
                left: {
                    top: "50%",
                    left: 0,
                    "margin-left": 1 - d,
                    "margin-top": -b / 2
                },
                bottom: {
                    top: "100%",
                    left: "50%",
                    "margin-left": -b / 2,
                    "margin-top": -1
                },
                right: {
                    top: "50%",
                    left: "100%",
                    "margin-top": -b / 2,
                    "margin-left": -1
                }
            };
            e.top = g._createArrow("top");
            e.bottom = g._createArrow("bottom");
            e.left = g._createArrow("left");
            e.right = g._createArrow("right");
            T.fn.bgIframe([e.tip]);
            T.dom.hide(h)
        },
        _createArrow: function(d) {
            var j = this
              , b = j.options
              , l = j._refer;
            var f = b.arrowWidth
              , e = b.arrowHeight;
            var c = {
                display: "none",
                position: "absolute"
            };
            c = T.extend(c, b.arrow);
            c.borderColor = b.arrowBorderColor;
            c.bgColor = b.arrowBgColor;
            if (d == "right" || d == "left") {
                c.height = f;
                c.width = e
            } else {
                c.height = e;
                c.width = f
            }
            var g = this._defautArrowOpts;
            var k = document.createElement("div");
            l.tip.appendChild(k);
            T.dom.setStyles(k, T.extend(T.object.clone(g[d]), c));
            T.dom.addClass(k, "arrow");
            T.dom.addClass(k, "arrow-" + d);
            var h = T.browser.ie && T.browser.ie < 9 ? b.arrowVmlTpl : b.arrowSvgTpl;
            var m = j._createPath(d, c);
            k.innerHTML = T.format(h, c.height, c.width, c.bgColor, c.borderColor, m);
            return k
        },
        _createPath: function(d, c) {
            var f = ""
              , e = c.width
              , b = c.height;
            switch (d) {
            case "top":
                f = "M0," + b + "L" + e / 2 + ",0L" + e + "," + b;
                break;
            case "right":
                f = "M0,0L" + e + "," + b / 2 + "L0," + b;
                break;
            case "left":
                f = "M" + e + ",0L0," + b / 2 + "L" + e + "," + b;
                break;
            case "bottom":
                f = "M0,0L" + e / 2 + "," + b + "L" + e + ",0";
                break
            }
            return f
        },
        setContent: function(b) {
            T.dom.empty(this._refer.inner);
            this._refer.inner.innerHTML = b
        },
        setPosition: function(c, b) {
            T.dom.setStyles(this._refer.tip, {
                top: b,
                left: c
            });
            if (this.options.animate && typeof this.options.showAnimate == "function") {
                this.options.showAnimate.call(this, this._refer.tip)
            } else {
                T.dom.show(this._refer.tip)
            }
        },
        showTip: function() {
            var G = this
              , y = G._refer
              , o = G.options
              , e = o.region
              , B = o.arrowWidth
              , H = o.arrowHeight;
            var c, b, z, w, r = 0, n = 0, g = 0;
            if (arguments.length == 2) {
                z = arguments[0];
                w = arguments[1]
            } else {
                c = arguments[0] || o.target;
                b = G._getInfo(c);
                z = b.left;
                w = b.top;
                r = b.width;
                n = b.height
            }
            var k = G._getInfo(e)
              , u = k.left
              , t = k.top
              , j = k.width
              , m = k.height;
            T.dom.show(y.tip);
            var A = y.tip.offsetWidth
              , p = y.tip.offsetHeight;
            T.dom.hide(y.tip);
            var s, f, q;
            var l = {
                left: function() {
                    f = z + r + H - 1;
                    q = w + n / 2 - p / 2
                },
                right: function() {
                    f = z - A - H + 1;
                    q = w + n / 2 - p / 2
                },
                top: function() {
                    f = z + r / 2 - A / 2;
                    q = w + n + H - 1
                },
                bottom: function() {
                    f = z + r / 2 - A / 2;
                    q = w - p - H + 1
                }
            };
            var E = u + j
              , D = t + m;
            var h = w + n / 2 + p / 2
              , F = w + n / 2 - p / 2;
            var C = z + r / 2 - A / 2
              , v = z + r / 2 + A / 2
              , d = {};
            for (var x = 0; x < o.order.length; x++) {
                s = o.order[x];
                switch (s) {
                case "left":
                    if (z + r + A <= E) {
                        if (h <= D && F >= t) {
                            l.left()
                        } else {
                            d.left = [h - D, t - F]
                        }
                    }
                    break;
                case "right":
                    if (z - A >= u) {
                        if (h <= D && F >= t) {
                            l.right()
                        } else {
                            d.right = [h - D, t - F]
                        }
                    }
                    break;
                case "top":
                    if (w + n + p <= D) {
                        if (C >= u && v <= E) {
                            l.top()
                        } else {
                            d.top = [v - E, u - C]
                        }
                    }
                    break;
                case "bottom":
                    if (w - p >= t) {
                        if (C >= u && v <= E) {
                            l.bottom()
                        } else {
                            d.bottom = [v - E, u - C]
                        }
                    }
                    break
                }
                if (f !== undefined && q !== undefined) {
                    break
                }
            }
            if (f === undefined && q === undefined) {
                s = null;
                T.object.each(d, function(K, J) {
                    if (s != null) {
                        return
                    }
                    if (K[0] + K[1] <= 0) {
                        s = J;
                        l[s]();
                        g = K[0] > 0 ? -K[0] : K[1];
                        var I = A / 2;
                        if (s == "right" || s == "left") {
                            I = p / 2;
                            q += g
                        } else {
                            f += g
                        }
                        if (Math.abs(g) + B / 2 > I) {
                            s = null
                        }
                    }
                });
                if (s == null) {
                    s = o.order[0];
                    l[s]()
                }
            }
            G.setPosition(f, q);
            G._showArrow(s, g)
        },
        hideTip: function() {
            if (this.options.animate && typeof this.options.hideAnimate == "function") {
                this.options.hideAnimate.call(this, this._refer.tip)
            } else {
                T.dom.hide(this._refer.tip)
            }
        },
        isHide: function() {
            if (this._refer && this._refer.tip) {
                var b = T.dom.getStyle(this._refer.tip, "display");
                if (b && b == "none") {
                    return true
                }
            }
            return false
        },
        setRegion: function() {
            if (arguments.length == 0) {
                return
            }
            this.options.region = T.g(arguments[0])
        },
        remove: function() {
            T.dom.remove(this._refer.tip);
            this._initRefer()
        },
        _showArrow: function(b, d) {
            T.dom.hide(this._refer.top);
            T.dom.hide(this._refer.bottom);
            T.dom.hide(this._refer.left);
            T.dom.hide(this._refer.right);
            if (b) {
                T.dom.show(this._refer[b]);
                var c = T.object.clone(this._defautArrowOpts[b]);
                if (b == "right" || b == "left") {
                    c["margin-top"] -= d
                } else {
                    c["margin-left"] -= d
                }
                T.dom.setStyles(this._refer[b], c)
            }
        },
        _getInfo: function(d) {
            var c = Object.prototype.toString.call(d), b, f = T.dom.getPosition(d);
            if (c.toUpperCase().indexOf("SVG") != -1) {
                var e = d.getBoundingClientRect();
                f.width = e.width;
                f.height = e.height;
                return f
            }
            b = {
                left: f.left,
                top: f.top,
                height: d.offsetHeight,
                width: d.offsetWidth
            };
            return b
        }
    })
})();
T.charts.Chart = T.charts.Class({
    paper: null,
    container: null,
    _data: null,
    defaultOpts: {
        exportSVG: false,
        containerId: "ContainerId"
    },
    initialize: function(b, a) {
        var c = T.charts.Util.extend;
        this._data = T.object.clone(b);
        a = a || b || {};
        a = c(T.object.clone(this.defaultOpts), T.object.clone(a));
        this.options = c(T.object.clone(this.options), a);
        this.opts = c(T.object.clone(this.opts), a);
        Raphael.exportSVG = this.options.exportSVG;
        this.container = T.g(this.options.containerId);
        if (!this.container) {
            return
        }
        this.container.firstChild && this.container.removeChild(this.container.firstChild);
        this.paper = Raphael(a.containerId, "100%", "100%")
    },
    CLASS_NAME: "T.charts.Chart"
});
(function(a) {
    a.charts.AppFlow = a.createChart(a.charts.mixin.FlowChart, {
        opts: {
            getInfoData: function() {},
            maxHeight: 920,
            minHeight: 216,
            maxDepth: 4
        },
        initialize: function(c, b) {
            a.charts.Chart.prototype.initialize.apply(this, [c, b]);
            this.opts = a.extend(a.object.clone(a.charts.mixin.FlowChart.prototype.opts), this.opts);
            this._initLocalVariables();
            this._initHtmlContainer();
            a.dom.setStyle(this.container, "height", this.opts.minHeight);
            if (this._data.down_page && this._data.down_page.length > 0) {
                a.dom.show(a.dom.one(".page-flow-legend"));
                this._initMonitorPagePosition();
                this.draw()
            } else {
                a.dom.hide(a.dom.one(".page-flow-legend"));
                this._processNoDataRect(35, this.opts.rect.height + this.opts.rect.marginBottom, 0)
            }
            this.opts.onSearchIpt(this.opts.monitorPageList);
        },
        _initMonitorPagePosition: function() {
            var e = this.opts.rect
              , c = this.opts.flow;
            var b = this._data.down_page[0].items.length
              , d = this.opts.maxPageNumberPerFlow;
            b = b < 2 ? 2 : b;
            this._actualMaxPageNumber = b >= d ? d : b;
            this._monitorPagePosition.x = 35;
            this._monitorPagePosition.y = (this._actualMaxPageNumber * e.height + this._actualMaxPageNumber * e.marginBottom) / 2
        },
        draw: function() {
            this._updateDragEvent();
            var d = this._data.down_page;
            var e = this._processMonitorPages(); 
            this.drawDownFlowDetail(d[0], {
                target: e,
                level: 1
            });
            var b = this._shapes.tangram.downPagesLevel1;
            if (d[1] && b && b[0]) {
                var c;
                this._shapes.tangram.downPagesLevel1ActiveViewDownLink = b[0];
                if (d[0].items[0]) {
                    c = d[0].items[0][2]
                }
                this.drawDownFlowDetail(d[1], {
                    target: b[0],
                    level: 2,
                    ratio: c
                })
            }
            this._bindEvents()
        },
        destroy: function() {
            for (var b = 1; b <= this.opts.maxDepth; b++) {
                this._resetDownPageFolows(b)
            }
            if (this._shapes.tangram.monitorPageList) {
                this._shapes.tangram.monitorPageList.remove();
                this._shapes.tangram.monitorPageList = null
            }
            this._updateDragEvent(1, this.opts.minHeight);
            a.dom.removeStyle(this.container, "height");
            a.dom.removeStyle(this.container, "width");
            a.dom.removeStyle(this.container, "left")
        },
        _processNoDataRect: function(p, m, c) {
            var g = this.opts.noDataSettings
              , n = c != 0 ? true : false
              , d = n ? p + g.bigPipeWidth + g.pipeWidth : p
              , b = m - g.rectHeight / 2
              , j = n ? p + g.bigPipeWidth : p + g.rectWidth
              , h = m - g.pipeHeight / 2
              , f = n ? p : p + g.rectWidth + g.pipeWidth
              , e = m - g.bigPipeHeight / 2;
            var o = this._rect(j, h, g.pipeWidth, g.pipeHeight, {
                "class": ""
            }, {
                "background-color": g.rectColor
            })
              , l = this._rect(d, b, g.rectWidth, g.rectHeight, {
                "class": "custom-flow-no-data"
            }, {
                "background-color": g.rectColor
            })
              , q = a.format(g.messageTemplate, this.opts.baseUri, this.opts.siteId);
            l.innerHTML = q;
            if (n) {
                var k = this._rect(f, e, g.bigPipeWidth, g.bigPipeHeight, {
                    "class": ""
                }, {
                    "background-color": g.rectColor
                });
                this._shapes.tangram["downPagesLevel" + c].push(k);
                this._shapes.tangram["downPagesLevel" + c].push(o);
                this._shapes.tangram["downPagesLevel" + c].push(l)
            }
        },
        drawDownFlowDetail: function(O, o,callback) {
            var b = o.target, l = o.level, m = O.items, t = m[0], q = m[1], I = parseInt(a.dom.getStyle(b, "left").replace("px", "")), H = parseInt(a.dom.getStyle(b, "top").replace("px", "")), r = this.opts.flow, G, w = 100, J = false, n = m.length;
            if (o.ratio !== undefined) {
                w = o.ratio
            }
            if (n > 0 && m[n - 1][0].id == "0") {
                J = true
            }
            for (var M = this.opts.maxDepth; M >= l; M--) {
                this._resetDownPageFolows(M)
            }
            var N = this.opts.rect
              , r = this.opts.flow;
            if (l == 1) {
                H += N.monitorPage.height / 2;
                I += N.monitorPage.width
            } else {
                H += N.height / 2;
                I += this.opts.rect.width
            }
            this._shapes.tangram["downPagesLevel" + l + "Flow"] = [];
            G = this._rectRaphael(I, H - r.bigPipelineHeight / 2, r.bigPipelineWidth, r.bigPipelineHeight, {
                fill: "#89b7e8",
                stroke: "none"
            });
            this._shapes.raphael["downFlow" + l].push(G);
            if (n == 0) {
                this._processNoDataRect(I + r.bigPipelineWidth, H, l);
                var K = this.opts.noDataSettings
                  , e = I + K.bigPipeWidth + K.pipeWidth + K.rectWidth
                  , B = this.opts.minHeight;
                this._updateDragEvent(e, B);
                return
            }
            var h = n
              , F = n;
            if (n > this.opts.maxPageNumberPerFlow - 1) {
                h = this.opts.maxPageNumberPerFlow;
                F = this.opts.maxPageNumberPerFlow - 1
            }
            F = J ? F - 1 : F;
            var e = I + r.bigPipelineWidth + r.pipelineWidth + r.bezierWidth + N.width + N.viewDownPages.width + N.viewDownPages.marginLeft
              , B = (h * (N.height + N.marginBottom) - N.marginBottom) / 2;
            if (H < B) {
                B = 2 * B + N.tipHeight + 1
            } else {
                B += H + N.tipHeight + 1
            }
            var f = this._updateDragEvent(e, B);
            this._shapes.tangram["downPagesLevel" + l + "Height"] = B - f;
            for (var M = 0; M < n; M++) {
                var E = I + r.bigPipelineWidth + r.pipelineWidth + r.bezierWidth
                  , D = H - (h * (N.height + N.marginBottom) - N.marginBottom) / 2;
                D -= f;
                D < 0 && (D = 0);
                var k = m[M][0].proportionof, A, C, u, P;
                if (M <= F || (J && M == n - 1)) {
                    var d = E, c = D + (N.height + N.marginBottom) * M, p = {
                        x: E - r.pipelineWidth,
                        y: c + N.height / 2
                    }, s = {
                        x: I + r.bigPipelineWidth,
                        y: H
                    }, Q;
                    var L = M;
                    if (J && M == n - 1) {
                        c = D + (N.height + N.marginBottom) * (h - 1);
                        p = {
                            x: E - r.pipelineWidth,
                            y: c + N.height / 2
                        };
                        L = this.opts.maxPageNumberPerFlow - 1
                    }
                    A = this._rect(E, c, N.width, N.height, {
                        "class": "custom-flow-pages"
                    }, {
                        "background-color": N.color[L] ? N.color[L] : N.defaultColor
                    });
                    if (M < F) {
                        var g = M + 1 < F / 2 ? "topn" : "";
                        P = a.format(N.rectUrlTemplate, m[M][0].name, g, a.i18n.number.formatRatio( m[M][0].proportionof),m[M][0].uv);
                        A.innerHTML = P; 
                        if (m[M][0].id !== 0) {
                              var f1 = a.format(N.downPageDetailTemplate, "浏览量", a.i18n.number.formatNumber(m[M][0].pv), "平均时长", a.i18n.number.formatTime(m[M][0].average_stay_time), "页面跳出率", a.i18n.number.formatRatio(m[M][0].bounce_ratio),"页面跳出数", m[M][0].page_bounce_num);

                            C = this._rect(E, c + N.height, N.width - 2, N.tipHeight, {
                                "class": "custom-flow-page-detail"
                            }, {
                                display: "none"
                            });
                            C.innerHTML = f1; 
                            u = this._rect(E + N.width + N.viewDownPages.marginLeft, c, N.viewDownPages.width, N.viewDownPages.height, {
                                "class": "custom-flow-view-downpages"
                            }, {
                                display: "none"
                            });
                            u.innerHTML = N.settingTemplate;
                            a.dom.setAttr(u, "data", a.json.stringify({
                                id: m[M][0].id,
                                index: M,
                                ratio: m[M][0].ratio,
                                path_hierarchy:m[M][0].path_hierarchy

                            }));
                            this._shapes.tangram["downPagesLevel" + l + "ViewDownLink"].push(u);
                            a.dom.setAttr(A, "data", a.json.stringify({
                                id: m[M][0].id,
                                index: M,
                                ratio: m[M][0].ratio,
                                path_hierarchy:m[M][0].path_hierarchy
                            }));
                            Q = this._processBezierCurve(p, s, k, false)
                        }
                        w -= k
                    } else {
                        if (J && M == n - 1) {
                            P = a.format(N.exitAndOthersTemplate, "离开应用", a.i18n.number.formatRatio(m[M][0].proportionof));
                            A.innerHTML = P;
                            Q = this._processBezierCurve(p, s, k, true);
                            a.dom.addClass(A, "custom-flow-url-center");
                            a.dom.addClass(A, "cf-page-leave")
                        } else {
                            if (J) {
                                w -= m[n - 1][0].proportionof
                            }
                            w = w < 0 ? 0 : w;
                            P = a.format(N.exitAndOthersTemplate, "其它", a.i18n.number.formatRatio(w.toFixed(2)));
                            A.innerHTML = P;
                            a.dom.setAttr(A, "data", "downPagesLevel" + l + "Tip");
                            Q = this._processBezierCurve(p, s, w, false);
                            a.dom.addClass(A, "custom-flow-url-center");
                            a.dom.addClass(A, "cf-page-others");
                            var z = E + N.width / 2
                              , v = c + N.height
                              , j = this._processOthersLinks({
                                x: z,
                                y: v
                            }, m.slice(F), "bottom");
                            this._shapes.raphael.tip["downPagesLevel" + l + "Tip"] = j
                        }
                    }
                    this._shapes.raphael["downFlow" + l].push(Q.pipe);
                    this._shapes.raphael["downFlow" + l].push(Q.bezier);
                    this._shapes.tangram["downPagesLevel" + l].push(A);
                    this._shapes.tangram["downPagesLevel" + l + "Flow"].push(Q)
                }
            }
            if (l < this.opts.maxDepth) {
                a.event.ons(this._shapes.tangram["downPagesLevel" + l], "click", a.fn.bind(this._getDownFlowDetail, this, l + 1))
            }
            a.event.ons(this._shapes.tangram["downPagesLevel" + l + "ViewDownLink"], "click", a.fn.bind(this._getPageDetail, this, l + 1));
            a.event.ons(this._shapes.tangram["downPagesLevel" + l], "click", a.fn.bind(this._resetUpPageFlows, this, l + 1))
            callback && callback();
        },
        _processMonitorPages: function() {
            var h = this.opts.rect
              , b = this.opts.flow;
            var c = this._data.page, j, g = this._monitorPagePosition.x, f = this._monitorPagePosition.y - b.bigPipelineHeight / 2, l = g + b.bigPipelineWidth + h.monitorPage.width, k = f, e = g + b.bigPipelineWidth, d = this._monitorPagePosition.y - h.monitorPage.height / 2;
            j = this._rect(e, d, h.monitorPage.width, h.monitorPage.height, {
                "class": "active-monitor-page"
            });
            j.innerHTML = a.format(this.opts.rect.monitorPageTemplate, c.name, a.truncat(c.name, 26), a.i18n.number.formatNumber(c.uv),a.i18n.number.formatNumber(c.pv), a.i18n.number.formatTime(c.average_stay_time), a.i18n.number.formatRatio(c.bounce_ratio),c.page_path);
            return j
        },
        _bindEvents: function() {
            a.event.on(this.container, "mouseover", a.fn.bind(this._togglePageDetail, this));
            a.on(a.g("CustomFlowContainer"), "click", a.fn.bind(this._toggleTip, this));
            a.event.ons([a.dom.one(".mp-page-select"), a.dom.one(".monitor-page-url")], "click", a.fn.bind(this._toggleMonitorPageList, this));
            a.event.on(window, "resize", a.fn.bind(this._resizeWindow, this))
        },
        _showSlideBar: function(c, b) {
            if (c.offsetLeft < 0) {
                a.show("flowBarLeft")
            } else {
                a.hide("flowBarLeft")
            }
            if (c.offsetLeft > b) {
                a.show("flowBarRight")
            } else {
                a.hide("flowBarRight")
            }
        },
        _resizeWindow: function() {
            var b = parseInt(a.g(this.opts.scrollContainer).offsetWidth);
            if (this._scrollContainer.width == b) {
                return
            }
            this._scrollContainer.width = b;
            this._scrollContainer.height = parseInt(a.g(this.opts.scrollContainer).offsetHeight);
            this._updateDragEvent()
        },
        _updateDragEvent: function(h, c) {
            var b = 0;
            a.event.un(this.container, "mousedown", f);
            var g = this._scrollContainer.width;
            var d = this._scrollContainer.height;
            this._shapes.currentWidth = this._shapes.currentWidth || parseInt(this.container.offsetWidth);
            this._shapes.currentHeight = this._shapes.currentHeight || parseInt(this.container.offsetHeight);
            var l = this
              , j = [];
            a.dom.setStyle(this.container, "width", this._shapes.currentWidth);
            h = h ? h : this._shapes.lastWidth;
            if (h) {
                if (this._shapes.currentWidth < h) {
                    this._shapes.currentWidth = h
                } else {
                    this._shapes.currentWidth = h > g ? h : g
                }
                a.dom.setStyle(this.container, "width", this._shapes.currentWidth);
                this._shapes.lastWidth = h
            }
            if (c) {
                if (this._shapes.currentHeight < c) {
                    if (this.opts.maxHeight && c > this.opts.maxHeight) {
                        b = c - this.opts.maxHeight;
                        c = this.opts.maxHeight
                    }
                    a.dom.setStyle(this.container, "height", c);
                    this._shapes.currentHeight = c
                } else {
                    if (this._shapes.currentHeight > c) {
                        var n = c;
                        for (var e = 1; e <= this.opts.maxDepth; e++) {
                            var m = this._shapes.tangram["downPagesLevel" + e + "Height"];
                            if (m && m > c) {
                                n = m
                            }
                        }
                        if (n < this._shapes.currentHeight) {
                            a.dom.setStyle(this.container, "height", n);
                            this._shapes.currentHeight = n
                        }
                    }
                }
            }
            if (this._shapes.currentWidth == g) {
                a.dom.removeStyle(this.container, "width");
                a.dom.setStyles(l.container, {
                    left: 0
                })
            }
            j.push(0);
            j.push(this._shapes.currentWidth);
            j.push(this._shapes.currentHeight);
            j.push(g - this._shapes.currentWidth);
            var f = function(q) {
                var k = a.event.getTarget(q);
                if (!a.getAncestorOrSelfByClass(k, "mp-list-select")) {
                    a.event.preventDefault(q);
                    a.dom.drag(l.container, {
                        range: j,
                        ondrag: function(r, s) {
                            l._showSlideBar(r, s.range[3]);
                           // a.dom.setStyle(l.container, "cursor", "url(" + l.opts.webRoot + "/image/cursor/dragclose.cur), move")
                        },
                        ondragend: function(r, s) {
                         //   a.dom.setStyle(l.container, "cursor", "url(" + l.opts.webRoot + "/image/cursor/dragopen.cur), default")
                        }
                    })
                }
            };
            a.event.un(a.dom.one("div", a.g("flowBarLeft")), "click", o);
            a.event.un(a.dom.one("div", a.g("flowBarRight")), "click", p);
            l._showSlideBar(l.container, j[3]);
            var o = function(q) {
                var k = l.container.offsetLeft;
                k -= j[3] / 2;
                k = k < 0 ? k : 0;
                a.dom.setStyles(l.container, {
                    left: k
                });
                l._showSlideBar(l.container, j[3])
            };
            var p = function(q) {
                var k = l.container.offsetLeft;
                k += j[3] / 2;
                k = k > j[3] ? k : j[3];
                a.dom.setStyles(l.container, {
                    left: k
                });
                l._showSlideBar(l.container, j[3])
            };
            a.dom.removeStyle(this.container, "cursor");
            if (this._shapes.currentWidth > this._scrollContainer.width) {
                a.event.on(this.container, "mousedown", f);
                a.event.on(a.dom.one("div", a.g("flowBarLeft")), "click", o);
                a.event.on(a.dom.one("div", a.g("flowBarRight")), "click", p);
             //   a.dom.setStyle(this.container, "cursor", "url(" + this.opts.webRoot + "/image/cursor/dragopen.cur), default")
            }
            return b
        },
        _hidePageDetailTips: function() {
            a.array.each(a.dom.query(".custom-flow-page-detail", a.g(this.container)), function(b) {
                if (a.dom.getStyle(b, "display") != "none") {
                    a.dom.hide(b)
                }
            })
        },
        _toggleMonitorPageList: function(j) {
            a.event.stop(j);
            var k = this._shapes.tangram.monitorPageList;
            if (!k) {
                var g = this.opts.monitorPageListTemplates, b = this.opts.monitorPageList, c = [], f;
                for (var d = 0; d < b.length; d++) {
                    c.push(a.format(g.liTemplate, b[d].name, b[d].id, b[d].name,b[d].path_hierarchy))
                }
                var h = b.length > 10 ? "mp-list-select mp-list-select-scroll" : "mp-list-select";
                k = this._shapes.tangram.monitorPageList = new a.charts.mixin.ChartTip({
                    content: a.format(g.listTemplate, c.join("")),
                    order: ["top"],
                    target: a.dom.one(".monitor-page-url"),
                    arrowWidth: 30,
                    arrowHeight: 16,
                    extClass: h,
                    arrowBorderColor: "#e1e1e1",
                    animate: true,
                    hideAnimate: a.fx.fadeOut,
                    showAnimate: a.fx.fadeIn
                });

                a.event.ons(a.dom.query(".mp-list-select a"), "click", a.fn.bind(this._switchMonitorPage, this))
            }
            k.isHide() ? k.showTip() : k.hideTip()
        },
        _switchMonitorPage: function(c) {
            var b = a.event.getTarget(c);
            if (a.getAncestorOrSelfByClass(b, "mp-list-select") && b.tagName == "A") {
                this.opts.onchangeMonitorPage(a.json.parse( a.dom.getAttr(b, "data")))
            }
        },
        _getPageDetail: function(h, g) {
            var f = a.event.getTarget(g)
              , b = f.parentNode;
            var d = a.json.parse(a.dom.getAttr(b, "data"));
            a.event.stop(g);
            if (a.dom.hasClass(f, "fset")) {
                this.opts.onchangeMonitorPage(d)
            } else {
                this._hidePageDetailTips();
                d = a.extend(d, {
                    level: h - 1
                });
                var c = a.dom.prev(b);
                if (a.dom.getAttr(c, "data")) {
                    a.show(c)
                } else {
                    this.opts.getInfoData.call(this, d)
                }
            }
        },
        showPageTip: function( g) {
            // var f = a.format(this.opts.rect.downPageDetailTemplate, "浏览量", a.i18n.number.formatNumber(d.pv), "平均时长", a.i18n.number.formatTime(d.average_stay_time), "页面跳出率", a.i18n.number.formatRatio(d.bounce_ratio));
            var e = "downPagesLevel" + g.level;
            var c = this._shapes.tangram[e][g.index];
            var b = a.dom.next(c);
            // a.dom.setAttr(b, "data", "hasData");
            // b.innerHTML = f;
            a.dom.show(b)
        },
        _getDownFlowDetail: function(h, g) {
            var f = a.event.getTarget(g);
            while (!a.dom.hasClass(f, "custom-flow-pages")) { 
                f = f.parentNode
            }
            
            var d = a.dom.getAttr(f, "data");
            if (d == null || d.indexOf("{") != 0) {
                return
            }
            d = a.json.parse(d);
            if (d == null) {
                return
            }
            for (var c = this.opts.maxDepth; c >= h; c--) {
                this._resetDownPageFolows(c)
            }
            var b = "downPagesLevel" + (h - 1) + "ActiveViewDownLink";
            this._shapes.tangram[b] = f; 
            this.opts.getNextFlowData(d.id, d.ratio, {
                target: f,
                level: h,
                ratio: d.ratio,
                path_hierarchy:d.path_hierarchy,
                id:d.id
            })
        },
        _resetUpPageFlows: function(b, h) {
            var j = a.event.getTarget(h);
            if (!a.dom.hasClass(j, "custom-flow-pages")) {
                j = j.parentNode
            }
            var d = a.dom.getAttr(j, "data");
            if (d == null || d.indexOf("{") != 0) {
                return
            }
            d = a.json.parse(d);
            if (d == null) {
                return
            }
            var g = d.index;
            do {
                var l = "downPagesLevel" + (b - 1);
                var k = this._shapes.tangram[l + "Flow"];
                for (var f = 0; f < k.length; f++) {
                    if (f != g) {
                        k[f].bezier.attr({
                            fill: "#f1f1f1"
                        })
                    } else {
                        k[f].bezier.attr({
                            fill: this.opts.flow.color.bezierColor.common
                        })
                    }
                }
                b -= 1;
                var c = this._shapes.tangram["downPagesLevel" + (b - 1) + "ActiveViewDownLink"];
                if (c != null) {
                    var d = a.json.parse(a.dom.getAttr(c, "data"));
                    g = d.index
                }
            } while (b > 1)
        },
        _resetPageFlows: function() {
            for (var e = 1; e <= this.opts.maxDepth; e++) {
                var d = this._shapes.tangram["downPagesLevel" + e + "Flow"];
                if (!d) {
                    continue
                }
                for (var b = 0; b < d.length; b++) {
                    var c = d[b].bezier;
                    if (c.data("isbounce")) {
                        c.attr({
                            fill: this.opts.flow.color.bezierColor.bounce
                        })
                    } else {
                        c.attr({
                            fill: this.opts.flow.color.bezierColor.common
                        })
                    }
                }
            }
        },
        _resetDownPageFolows: function(c) {
            this._shapes.raphael.tip["downPagesLevel" + c + "Tip"] && this._shapes.raphael.tip["downPagesLevel" + c + "Tip"].remove();
            this._shapes.raphael.tip["downPagesLevel" + c + "Tip"] = null;
            a.element(this._shapes.tangram["downPagesLevel" + c + "ViewDownLink"]).each(function(d) {
                a.dom.remove(d)
            });
            this._shapes.tangram["downPagesLevel" + c + "ViewDownLink"] = [];
            this._shapes.tangram["downPagesLevel" + c + "Height"] = null;
            a.element(this._shapes.tangram["downPagesLevel" + c]).each(function(d) {
                a.dom.remove(d)
            });
            this._shapes.tangram["downPagesLevel" + c] = [];
            this._shapes.tangram["downPagesLevel" + c + "Flow"] = [];
            for (var b = 0; b < this._shapes.raphael["downFlow" + c].length; b++) {
                this._shapes.raphael["downFlow" + c][b].remove()
            }
            this._shapes.raphael["downFlow" + c] = []
        },
        _toggleTip: function(f) {
            var d = a.event.getTarget(f), b;
            this._hidePageDetailTips();
            if (!a.getAncestorOrSelfByClass(d, "custom-flow-pages")) {
                this._resetPageFlows()
            }
            if (!a.getAncestorOrSelfByClass(d, "others-tip") && !a.getAncestorOrSelfByClass(d, "cf-page-others")) {
                this._hideOtherTips()
            }
            var g = this._shapes.tangram.monitorPageList;
            if (!a.getAncestorOrSelfByClass(d, "mp-list-select") && !a.getAncestorOrSelfByClass(d, "mp-page-select") && g) {
                !g.isHide() && g.hideTip()
            }
            d = a.getAncestorOrSelfByClass(d, "cf-page-others");
            if (!d) {
                return
            }
            b = a.dom.getAttr(d, "data");
            this._hideOtherTips();
            var c = this._shapes.raphael.tip[b];
            if (c) {
                c.showTip(d)
            }
        },
        _hideOtherTips: function() {
            var b = this._shapes.raphael.tip;
            for (var c = 1; c <= this.opts.maxDepth; c++) {
                var d = b["downPagesLevel" + c + "Tip"];
                if (d && typeof d.hideTip == "function") {
                    d.hideTip()
                }
            }
        },
        _togglePageDetail: function(g) {
            var h = a.event.getTarget(g), j, b, l;
            j = a.getAncestorOrSelfByClass(h, "custom-flow-pages");
            b = a.getAncestorOrSelfByClass(h, "custom-flow-url-center");
            if (j && !b) {
                var k = a.dom.query(".custom-flow-view-downpages", a.g(this.container));
                var m = a.dom.query(".item-detial", a.g(this.container));
                a.array.each(k, function(e) {
                    if (a.dom.getStyle(e, "display") != "none") {
                        a.dom.hide(e)
                    }
                });
                 a.array.each(m, function(e) {
                    if (a.dom.getStyle(e, "display") != "none") {
                        a.dom.hide(e);
                    }
                });
                l = a.dom.next(j);
                var c = a.dom.next(l);
                var f = a.dom.hasClass(c, "custom-flow-view-downpages");
                var d = a.dom.hasClass(c, "custom-flow-view-downpages-active");
                if (c && f && !d) {
                    a.dom.show(a.dom.next(l))
                }
            }
        },
        _processOthersLinks: function(b, g, h) {
            var e = ""
              , c = '<div title="!{0}" class="urls"><span class="ratio" title="#{1}">#{1}</span><span class="txt"  title="!{0}">!{0}</span><span class="uv"  title="#{2}">#{2}</span></div>';
            for (var d = 0; d < g.length; d++) {
                if (g[d][0].id == "0") {
                    continue
                }
                e += a.format(c, g[d][0].name, a.i18n.number.formatRatio(g[d][0].bounce_ratio),g[d][0].uv)
            }
            e = a.format('<div class="others-tip">#{0}</div>', e);
            var f = new a.charts.mixin.ChartTip({
                region: this.opts.scrollContainer,
                extClass: g.length > 20 ? "others-tips-flow" : "",
                content: e,
                order: ["left", "right"]
            });
            return f
        }
    })
})(baidu);
(function() {
    var b = Math
      , a = T.i18n.number.formatNumber
      , c = T.charts.mixin.ChartConvert
      , d = T.charts.Util.extend;
    T.charts.Bar = T.createChart(T.charts.mixin.ChartGrid, {
        options: {
            type: "Bar",
            color: ["#48bee4", "#e3563a", "#19aa5f", "#a8c656", "#514e95", "#e25693", "#e9a840", "#bbb", "#9457e6", "#14c1c0", "#c5965a", "#2c73c6", "#388b2f", "#eca023", "#9bc646"],
            legend: {
                backgroundColor: "#fff",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                itemGap: 11,
                itemRenderer: null,
                itemStyle: {
                    color: "#d7dcea",
                    background: "#666"
                },
                textStyle: {
                    color: "#666",
                    align: "right",
                    fontFamily: "SimSun, Arial",
                    fontSize: 12
                },
                data: []
            },
            xAxis: [{
                type: "category",
                position: "bottom",
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#4770A7"
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true
                },
                data: [],
                axisLabel: {
                    show: true,
                    interval: "auto",
                    rotate: 43,
                    margin: 10
                }
            }],
            itemStyle: {
                color: "#fff",
                width: 1,
                type: "solid",
                barWidth: 16
            },
            tooltip: {
                trigger: "item",
                show: true,
                formatter: '<div class="chart-tip">                            <div class="chart-tip-title">#{2}</div>                            <div class="chart-tip-content">                            <p>#{1}<span>#{0}</span></p>                            </div>                        </div>',
                background: "#fff",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                textStyle: null
            },
            series: null,
            GROUP: true
        },
        extendDefs: '<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">                    <pattern id="rectImage" patternUnits="userSpaceOnUse"                         x="0" y="0" width="16" height="12">                        <path stroke="white" d="M0,0L16,12M16,0L16,0M0,                        -12L32,12M-16,0L16,24"></path>                    </pattern>                </defs>',
        initialize: function(f, e) {
            T.charts.Chart.prototype.initialize.apply(this, [f, e]);
            this.setOption(this.options)
        },
        getDefaultOptions: function() {
            T.charts.mixin.ChartGrid.prototype.getDefaultOptions.call(this);
            var e = T.charts.Bar.prototype.options;
            this.defaultOptions = d(this.defaultOptions, e);
            return this.defaultOptions
        },
        paintData: function() {
            var h = this.options
              , y = this._chart
              , v = this.paper
              , K = this._groups
              , F = this._raphaelEls.series;
            this.setExtendDefs();
            var k = h.itemStyle.barWidth || 16;
            var q = h.xAxis && h.xAxis[0] && h.xAxis[0].data.length || 0;
            var w = k * h.series.length;
            var j = 5;
            var J = this.defaultOptions;
            var s = h.color || J.color;
            if (typeof s == "string") {
                s = [s]
            }
            for (var n = 0; n < h.series.length; n++) {
                var u = h.series[n];
                F[n] = [];
                var l = u.xAxisIndex || 0
                  , z = u.yAxisIndex || 0;
                var B = y.ordinate.y[z];
                var I = B[B.length - 1];
                for (var H = 0; H < q; H++) {
                    var L = u.data[H] || {};
                    var x = isNaN(L) ? (L.value || 0) : L;
                    var C = isNaN(x) ? 0 : x;
                    var t = y.XY.x[l][H] - w / 2;
                    var g = t + n * k;
                    var D = y.height * C / I;
                    D = b.floor(D) > j ? D : j;
                    D = D < y.height ? D : y.height;
                    var f = y.y + y.height - D;
                    var p = L.itemStyle || u.itemStyle || J.itemStyle;
                    p = T.object.clone(p);
                    p.background = s[H % s.length];
                    if (n % 2 == 1) {
                        var E = p.background;
                        if (Raphael.vml && !h.exportSVG) {
                            p.background = "url(css/decorator/rectImage.png)"
                        } else {
                            p.background = "url(#rectImage)"
                        }
                        p.background += " " + E
                    }
                    var o = this._createRect(g, f, k, D, p, null, !h.exportSVG);
                    F[n][H] = o.concat([]);
                    if (h.exportSVG) {
                        continue
                    }
                    var m = h.tooltip || J.tooltip;
                    var G = m.formatter
                      , A = x;
                    var r = h.xAxis[l].data[H];
                    r = T.object.isPlain(r) ? r.value : r;
                    A = this.getFormat(G, [L.title || x, u.name, r]);
                    o.push(A);
                    var e = Raphael.svg ? this._setSVGHover : this._setDIVHover;
                    e.apply(this, o)
                }
            }
            return true
        },
        setExtendDefs: function() {
            var f = this.options
              , k = this.paper;
            if (f.exportSVG) {
                k.extendDefs = this.extendDefs
            } else {
                if (Raphael.svg) {
                    var g = "http://www.w3.org/2000/svg";
                    var e = Raphael._g.doc;
                    var h = e.createElementNS(g, "pattern");
                    T.dom.setAttrs(h, {
                        id: "rectImage",
                        patternUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 16,
                        height: 12
                    });
                    k.defs.appendChild(h);
                    var j = e.createElementNS(g, "path");
                    T.dom.setAttrs(j, {
                        stroke: "white",
                        d: "M0,0L16,12M16,0L16,0M0,-12L32,12M-16,0L16,24"
                    });
                    h.appendChild(j)
                }
            }
        },
        paintLegend: function() {
            var k = this.options
              , q = this._chart
              , o = this.paper
              , z = this._groups
              , u = this._raphaelEls.legend;
            var g = k.legend
              , j = 8
              , f = 10;
            if (!g.data || g.data.length < 2) {
                return
            }
            if (g.show === false) {
                return
            }
            for (var x = g.data.length - 1; x >= 0; x--) {
                var A = g.data[x];
                var p = T.object.isPlain(A) ? A.value : A;
                A = A || {};
                var l = A.textStyle || g.textStyle;
                l = c.textAttr(l);
                var y = o.text(-100, -100, T.format("#{0, 20}", p));
                y.attr(l);
                y.attr({
                    title: p
                });
                var h = y.getBBox().width;
                var e = y.getBBox().height;
                var t = q.x + q.width - j
                  , s = q.y - e;
                y.attr({
                    x: t,
                    y: s
                });
                var m = A.itemStyle || g.itemStyle;
                m = T.object.clone(m);
                var w = t - h - f - 6;
                var v = s - f / 2;
                var n = o.rect(t - h - f - 6, s - f / 2, f, f);
                n.attr(c.pathAttr(m));
                u[x] = [n];
                if (x % 2 == 1) {
                    var r = o.path(["M", w, v, "L", w + f, v + f]);
                    r.attr(c.pathAttr({
                        color: "#fff"
                    }));
                    u[x].push(r)
                }
                u[x].push(y);
                j += h + f + 6 + g.itemGap || 11
            }
        },
        _createRect: function(q, o, g, u, l, t, p) {
            var n = this
              , v = this.options
              , m = this._chart
              , j = this.paper
              , h = this._groups
              , s = [];
            var r, e;
            if (Raphael.svg || v.exportSVG) {
                r = e = j.rect(q, o, g, u);
                if (/^url/i.test(l.background)) {
                    var f = l.background;
                    f = f.split(" ");
                    l.background = f[0];
                    e = j.rect(q, o, g, u);
                    e.attr(c.pathAttr(l));
                    l.background = f[1];
                    if (!v.exportSVG) {
                        e[0].setAttribute("fill", f[0])
                    }
                    e.attrs.fill = f[0]
                }
                r.attr(c.pathAttr(l));
                return s.concat([r, e])
            } else {
                if (l.color == "none") {
                    l.width = 0
                }
                var u = b.ceil(u);
                if (p) {
                    o = m.y + m.height - u
                }
                var k = l.width === 0 ? "none" : l.color;
                if (k != "none") {
                    k = (l.width || 1) + "px " + (l.type || "solid") + " " + k
                }
                r = T.dom.create("div");
                T.dom.setStyles(r, {
                    position: "absolute",
                    width: g,
                    height: u,
                    top: o,
                    left: q,
                    background: l.background || "none",
                    border: k,
                    "font-size": 0
                });
                j.canvas.appendChild(r)
            }
            return s.concat([r])
        },
        _setSVGHover: function(g, h, f) {
            var e = this;
            (function(j, l, k) {
                l.hover(function() {
                    j.attr({
                        "fill-opacity": 0.7
                    });
                    e.showTip(j[0], k)
                }, function() {
                    j.attr({
                        "fill-opacity": 1
                    });
                    e.hideTip()
                })
            })(g, h, f)
        },
        _setDIVHover: function(g, f) {
            var e = this;
            (function(h) {
                T.event.on(g, "mouseover", function() {
                    T.dom.setStyles(this, {
                        "-moz-opacity": 0.7,
                        opacity: 0.7,
                        filter: "alpha(opacity = 70)"
                    });
                    e.showTip(g, h)
                });
                T.event.on(g, "mouseout", function() {
                    T.dom.setStyles(this, {
                        "-moz-opacity": 1,
                        opacity: 1,
                        filter: "alpha(opacity = 100)"
                    });
                    e.hideTip()
                })
            })(f)
        },
        CLASS_NAME: "T.charts.Bar"
    })
})();
(function() {
    var d = Math
      , a = T.i18n.number.formatNumber
      , b = T.i18n.currency.format
      , e = T.i18n.number.formatRatio
      , c = T.number.randomInt;
    T.charts.Bubble = T.createChart({
        opts: {
            maxRadius: 70,
            minRadius: 39,
            maxFontSize: 26,
            minFontSize: 12,
            maxImgWidth: 44,
            minImgWidth: 22,
            decay: 10,
            limit: 20,
            animate: true,
            exportSVG: false,
            TXT_ATTR: {
                fill: "#fff",
                "font-size": 22,
                "font-family": "SimHei"
            },
            backColors: ["90-#6d6bc8", "90-#e1b533", "90-#dc715c", "90-#f9ac49", "90-#c2dc4b", "90-#e885d9", "90-#8ac04a", "90-#6bc6e2", "90-#3395b9", "90-#de7484"],
            strokes: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            tipTpl: '<div class="chart-tip chart-bubble-tip"><div class="chart-tip-title">#{2}</div><div class="chart-tip-content"><p>#{1}</p></div></div>',
            onmouseout: function(f) {
                this.tip && this.tip.hideTip()
            }
        },
        _bar: null,
        _balls: null,
        _groups: null,
        initialize: function(g, f) {
            T.charts.Chart.prototype.initialize.apply(this, [g, f]);
            this.draw(g)
        },
        draw: function(f) {
            this.paper.clear();
            this._data = f;
            this._initBalls();
            this.drawCircle();
            if (!this.opts.exportSVG) {
                this._bindEvents()
            }
        },
        _initBalls: function() {
            var g = T.g(this.opts.containerId);
            var k = this._data && this._data.items && this._data.items[0] && this._data.items[0][1] || 0;
            this._bar = {
                width: g.offsetWidth,
                height: g.offsetHeight,
                totalDecay: 0,
                maxValue: k
            };
            this._groups = [];
            this._balls = [];
            if (!this._data || !this._data.items) {
                return
            }
            for (var h = 0; h < this._data.items.length; h++) {
                var j = this._data.items[h][1];
                if (j > this._bar.maxValue) {
                    this._bar.maxValue = j
                }
                var f = this.randomPosition(j);
                ball = T.extend(f, {
                    ratio: j
                });
                ball = this.relocation(ball, 1);
                this._balls.push(ball);
                this._groups.push(this.paper.set())
            }
        },
        drawCircle: function() {
            var l = this.paper
              , g = this.opts
              , r = this._bar
              , p = this._data
              , s = p.items
              , j = this._balls
              , m = this._groups
              , j = this._balls;
            r.totalDecay = 0;
            var k = 10
              , t = this;
            var f = function(x) {
                return function() {
                    var A = j[x];
                    var y = g["font-size"][x];
                    var B = (s[x][0] || "").substring(0, 2);
                    var z = l.text(A.cx, A.cy - y / 2, B);
                    z.attr(g.TXT_ATTR).attr({
                        "font-size": y
                    });
                    m[x].push(z)
                }
            };
            for (var o = 0; o < s.length; o++) {
                var n = j[o];
                var q = this.getRadius(n.ratio);
                var h = l.circle(n.cx, n.cy, q);
                h.attr({
                    stroke: g.strokes[o],
                    fill: g.backColors[o]
                });
                m[o].push(h);
                var w = this.getFontSize(n.ratio);
                var u = s[o][0];
                var v = l.text(n.cx, n.cy, u);
                v.attr(g.TXT_ATTR).attr({
                    "font-size": w
                });
                this._groups[o].push(v);
                if (!g.exportSVG) {
                    this._setHover(h, o)
                }
            }
        },
        randomPosition: function(g) {
            var j = this._bar
              , h = this.opts
              , f = this.getRadius(g, true);
            return {
                cx: c(f, j.width - f),
                cy: c(f, j.height - f)
            }
        },
        collided: function(k, j) {
            var h = k.cx - j.cx
              , g = k.cy - j.cy
              , f = d.pow(d.pow(h, 2) + d.pow(g, 2), 0.5)
              , l = this.getRadius(k.ratio) + this.getRadius(j.ratio) - f;
            if (l <= 0) {
                return false
            }
            return {
                x: -l * h / f,
                y: -l * g / f
            }
        },
        collidedAdge: function(h) {
            var g = this.getRadius(h.ratio);
            var f = 0
              , j = 0;
            if (h.cx - g < 0) {
                f = g - h.cx
            }
            if (h.cx + g > this._bar.width) {
                f = this._bar.width - h.cx - g
            }
            if (h.cy - g < 0) {
                j = g - h.cy
            }
            if (h.cy + g > this._bar.height) {
                j = this._bar.height - h.cy - g
            }
            return {
                x: f,
                y: j
            }
        },
        relocation: function(g, k, j) {
            var h = this._balls
              , j = j || this.flashStrategy;
            for (var f = 0; f < h.length; f++) {
                var l = this.collided(h[f], g);
                if (l) {
                    if (k > 5) {
                        this._bar.totalDecay += this.opts.decay;
                        k = 0
                    }
                    T.extend(g, this.randomPosition(g.ratio));
                    this.relocation(g, k + 1);
                    break
                }
            }
            return g
        },
        justify: function(g) {
            var f = this._groups
              , j = this._balls;
            for (var h = 0; h < f.length; h++) {
                if (f[h].length == 0) {
                    continue
                }
                if (h == g) {
                    continue
                }
                var k = this.collided(j[h], j[g]);
                if (k) {
                    this.simpleMove(h, g, k)
                }
            }
        },
        simpleMove: function(l, g, f) {
            var k = this._balls[l];
            var j = this._balls[g];
            var m = this;
            if (k == j) {
                return false
            }
            var h = this.collidedAdge({
                cx: k.cx - f.x / 2,
                cy: k.cy - f.y / 2,
                ratio: k.ratio
            });
            var o = h.x - f.x / 2;
            var n = h.y - f.y / 2;
            k.cx += o;
            k.cy += n;
            this._groups[l].animate({
                transform: ["...", "t", o, n].join()
            }, 200, (function(p) {
                return function() {
                    m.justify(p)
                }
            })(l));
            h = this.collidedAdge({
                cx: j.cx + f.x / 2,
                cy: j.cy + f.y / 2,
                ratio: j.ratio
            });
            o = h.x + f.x / 2;
            n = h.y + f.y / 2;
            j.cx += o;
            j.cy += n;
            this._groups[g].animate({
                transform: ["...", "t", o, n].join()
            }, 200, (function(p) {
                return function() {}
            })(g));
            return false
        },
        getRadius: function(h, g) {
            var l = this._bar
              , k = this.opts;
            var j = l.totalDecay;
            if (g) {
                j = 0
            }
            var f = (k.maxRadius - k.minRadius) * h / l.maxValue + k.minRadius - j;
            return f
        },
        getFontSize: function(g) {
            var j = this._bar
              , h = this.opts;
            var f = d.floor((h.maxFontSize - h.minFontSize) * g / j.maxValue) + h.minFontSize;
            return f
        },
        _bindEvents: function() {
            var f = this;
            T.event.on(window, "resize", function() {
                var g = T.g(f.opts.containerId).offsetWidth;
                if (f._bar.width == g) {
                    return
                }
                f._bar.width = g;
                f.draw(f._data)
            });
            T.event.on(this.paper.canvas, "mouseover", function(g) {
                f.opts.onmouseout.call(f)
            })
        },
        _setHover: function(h, f) {
            var g = this;
            (function(k, j) {
                var l = {
                    index: j,
                    jndex: 0,
                    target: k[0],
                    data: g._data.items[j],
                    label: g._data.items[j][0]
                };
                g._groups[j].hover(function(m) {
                    T.event.stop(m);
                    g._groups[j].forEach(function(n) {
                        n.toFront()
                    });
                    if (g.opts.onmouseover) {
                        g.opts.onmouseover.call(g, l)
                    }
                }, function() {
                    if (g.opts.onmouseout) {
                        g.opts.onmouseout.call(g, l)
                    }
                })
            })(h, f)
        },
        axisFormat: function(g, f) {
            switch (f) {
            case "百分比":
            case "%":
                return e(g);
            case "时长":
                return g;
            case "元":
                return b(g);
            default:
                return a(g)
            }
        },
        CLASS_NAME: "T.charts.Bubble"
    })
})();
(function() {
    var e = Math;
    var b = "M";
    var c = "A";
    var a = "Z";
    var f = "L";
    var d = "r";
    T.charts.Donut = T.createChart({
        opts: {
            radius: 100,
            strokeWidth: 26,
            animate: false,
            gap: 2,
            duration: 1000,
            noDataText: "暂无数据",
            textAttr: {
                "font-size": 12,
                "font-family": "Microsoft YaHei, Arial",
                fill: "#000"
            },
            valAttr: {
                "font-size": 18,
                "font-weight": "bold",
                "font-family": "Arial"
            },
            innerCircleAttr: {
                fill: "#fff",
                stroke: "#fff"
            },
            fill: ["90-#f46767", "90-#249cfa", "90-#2cb663", "90-#f4b329", "90-#d67bc7"],
            backColors: ["#fff", "#fff", "#fff", "#fff", "#fff"],
            strokes: ["#fff", "#fff", "#fff", "#fff", "#fff"],
            resizable: true
        },
        bar: null,
        lastAngles: null,
        startAngle: null,
        initialize: function(k, j) {
            var h = this;
            T.charts.Chart.prototype.initialize.apply(h, arguments);
            h.setBarPoint();
            var g = h.bar.point;
            h.paper.customAttributes.arcArea = function(o, m, l) {
                var n = {
                    fill: h.opts.fill[l],
                    stroke: h.opts.backColors[l],
                    path: h.createArcArea(g.cx, g.cy, h.opts.radius, o, m)
                };
                return n
            }
            ;
            h.draw(k);
            T.event.on(window, "resize", T.fn.bind(h.resizeHandle, h))
        },
        resizeHandle: function() {
            var g = this;
            g.setBarPoint();
            g.opts.animate = false;
            g.draw(g.data)
        },
        setBarPoint: function() {
            var k = this;
            var h = T.g(k.opts.containerId);
            var j = h.offsetWidth;
            var g = h.offsetHeight;
            k.bar = {
                point: {
                    cx: e.ceil(j / 2) + 0.5,
                    cy: e.ceil(g / 2) + 0.5
                }
            }
        },
        draw: function(g) {
            this.lastAngles = 0;
            this.startAngle = 0;
            this.paper.clear();
            this.data = g;
            this.drawCircle();
            this.drawText()
        },
        getAngle: function(h) {
            var j = this.data.items[h][1];
            var g = this.data.items.length;
            return (j === "--" ? parseFloat(100 / g) : j) * 360 / 100
        },
        animate: function(h) {
            if (h < 0) {
                return
            }
            var k = this;
            var l = k.getAngle(h);
            var g = k.bar.point;
            var m = k.opts.gap;
            if (l === 0) {
                k.animate(h - 1)
            } else {
                if (l === 360) {
                    k.drawBigCircle(h);
                    return
                }
            }
            k.lastAngles = !k.lastAngles ? 0 : k.lastAngles;
            k.lastAngles += l;
            var j = k.paper.path().attr({
                arcArea: [0, k.startAngle, h]
            }).animate({
                arcArea: [l - m, k.startAngle, h]
            }, k.opts.duration * l / 360, function() {
                j.animate({
                    transform: [d, 360 - k.lastAngles, g.cx, g.cy]
                }, k.opts.duration * (360 - k.lastAngles) / 360);
                k.animate(h - 1)
            })
        },
        drawBigCircle: function(j) {
            var l = this;
            var m = l.paper;
            var k = l.opts;
            var h = l.bar.point;
            var g = k.radius;
            var n = k.strokeWidth;
            m.circle(h.cx, h.cy, g + n / 2).attr({
                fill: k.fill[j],
                stroke: k.backColors[j]
            });
            m.circle(h.cx, h.cy, g - n / 2).attr(k.innerCircleAttr)
        },
        drawCircle: function() {
            var o = this;
            var g = o.opts;
            var r = o.data.items.length;
            if (r === 2) {
                o.startAngle = (180 - o.getAngle(0)) / 2
            }
            if (g.animate && r > 0) {
                o.animate(r - 1);
                return
            }
            var l = o.lastAngles;
            var h = o.paper;
            var p = g.gap;
            var q = o.bar.point;
            var n = g.radius;
            var k;
            var j;
            for (var m = 0; m < r; m++) {
                k = o.getAngle(m);
                if (k === 0) {
                    continue
                }
                if (m !== 0) {
                    o.startAngle = l || 0
                }
                if (k === 360) {
                    o.drawBigCircle(m);
                    return
                } else {
                    j = o.createArcArea(q.cx, q.cy, n, k - p, this.startAngle);
                    h.path(j).attr({
                        fill: g.fill[m],
                        stroke: g.backColors[m]
                    })
                }
                if (m === 0) {
                    l = o.startAngle
                }
                l += k;
                l = l % 360
            }
        },
        createArc: function(k, h, l, j, m, n) {
            var g = this.computePoint(k, h, l, m);
            var o = this.computePoint(k, h, l, j + m);
            var p = [[b, g.x, g.y], [c, l, l, 0, +(j > 180), 1, o.x, o.y]];
            if (n) {
                p = [[f, o.x, o.y], [c, l, l, 0, +(j > 180), 0, g.x, g.y]]
            }
            return p
        },
        computePoint: function(j, m, h, l) {
            var k = (90 - l) * e.PI / 180;
            var g = {
                x: j + h * e.cos(k),
                y: m - h * e.sin(k)
            };
            return g
        },
        createArcArea: function(h, o, g, n, j) {
            var k = this.opts.strokeWidth;
            var m = this.createArc(h, o, g + k / 2, n, j);
            var l = this.createArc(h, o, g - k / 2, n, j, true);
            l[0][0] = f;
            return m.concat(l).concat([a])
        },
        drawText: function() {
            var g = this.opts;
            var p = this.bar;
            var h = this.paper;
            var q = this.data.items;
            var s = q.length;
            var o = 0;
            for (var n = 0; n < 2; n++) {
                var r = Math.ceil(s / 2);
                r = n === 1 ? s - r : r;
                var m = p.point.cy - g.radius;
                for (var l = 0; l < r; l++) {
                    var k = h.text(n === 0 ? (3 * p.point.cx + g.radius) / 2 : (p.point.cx - g.radius) / 2, m + (0.5 + l) * 2 * g.radius / r + g.valAttr["font-size"] / 2, q[o][1] === "--" ? g.noDataText : q[o][1] + "%");
                    if (q[o][1] !== "--") {
                        k.attr(g.valAttr).attr({
                            fill: g.fill[o].slice(3)
                        })
                    } else {
                        k.attr({
                            fill: "#333"
                        })
                    }
                    h.text(n === 0 ? (3 * p.point.cx + g.radius) / 2 : (p.point.cx - g.radius) / 2, m + (0.5 + l) * 2 * g.radius / r - g.valAttr["font-size"] / 2, q[o][0]).attr(g.textAttr);
                    o++
                }
            }
        },
        CLASS_NAME: "T.charts.Donut"
    })
})();
(function() {
    T.charts.ForceLayout = T.createChart({
        options: {
            containerId: null,
            height: 400,
            width: 680,
            activeNodeIndex: null,
            radiusFactor: 43,
            compensation: 0,
            logBias: 1.3,
            colors: ["#5dc485", "#f5c162", "#58b1f9"],
            additionalColors: ["#eaf5fe", "#d4ecfe", "#a9d7fe", "#7fc4fc"],
            additionalRadiusFactor: 25,
            additionalCompensation: 8,
            additionalCount: 10,
            chargeFactor: 0.05,
            convergenceThreshold: 0.02,
            iterationStep: 0.99,
            fontWeight: 400,
            fontFamily: "Microsoft YaHei, SimSun, Arial",
            setClick: function() {},
            setHover: function() {}
        },
        initialize: function(z, y) {
            T.charts.Chart.prototype.initialize.apply(this, [z, y]);
            this.initForceLayout()
        },
        initForceLayout: function() {
            var D = this;
            var G = {};
            if (!Date.now) {
                Date.now = function() {
                    return +new Date()
                }
            }
            G.map = u;
            w(n, {
                get: function(J) {
                    return this.u[b(J)]
                },
                set: function(J, K) {
                    return this.u[b(J)] = K
                },
                keys: q,
                values: function() {
                    var J = [];
                    for (var K in this.u) {
                        if (this.u.hasOwnProperty(K)) {
                            J.push(this.u[K])
                        }
                    }
                    return J
                }
            });
            G.rebind = f;
            G.dispatch = v;
            t.prototype.on = j;
            G.event = null;
            G.functor = p;
            var A;
            var z;
            var I;
            var E;
            var B = this[r(this, "requestAnimationFrame")] || function(J) {
                setTimeout(J, 17)
            }
            ;
            G.timer = function() {
                C.apply(this, arguments)
            }
            ;
            function C(O, J, L) {
                var N = arguments.length;
                if (N < 2) {
                    J = 0
                }
                if (N < 3) {
                    L = Date.now()
                }
                var K = L + J;
                var M = {
                    c: O,
                    t: K,
                    n: null
                };
                if (z) {
                    z.n = M
                } else {
                    A = M
                }
                z = M;
                if (!I) {
                    E = clearTimeout(E);
                    I = 1;
                    B(F)
                }
                return M
            }
            function F() {
                var K = H();
                var J = y() - K;
                if (J > 24) {
                    if (isFinite(J)) {
                        clearTimeout(E);
                        E = setTimeout(F, J)
                    }
                    I = 0
                } else {
                    I = 1;
                    B(F)
                }
            }
            function H() {
                var J = Date.now();
                var K = A;
                while (K) {
                    if (J >= K.t && K.c(J - K.t)) {
                        K.c = null
                    }
                    K = K.n
                }
                return J
            }
            function y() {
                var K;
                var J = A;
                var L = Infinity;
                while (J) {
                    if (J.c) {
                        if (J.t < L) {
                            L = J.t
                        }
                        J = (K = J).n
                    } else {
                        J = K ? K.n = J.n : A = J.n
                    }
                }
                z = K;
                return L
            }
            G.geom = {};
            G.geom.quadtree = x;
            G.layout = {};
            G.layout.force = function() {
                var M = {};
                var K = G.dispatch("start", "tick", "end");
                var L;
                var W = [1, 1];
                var N;
                var O = 0.9;
                var R = -30;
                var P = Infinity;
                var V = 0.1;
                var Q = 0.64;
                var J = [];
                var U;
                function S(X) {
                    return function(ad, aa, ae, Z) {
                        if (ad.point !== X) {
                            var ag = ad.cx - X.x;
                            var af = ad.cy - X.y;
                            var Y = Z - aa;
                            var ac = ag * ag + af * af;
                            if (Y * Y / Q < ac) {
                                if (ac < P) {
                                    var ab = ad.charge / ac;
                                    X.px -= ag * ab;
                                    X.py -= af * ab
                                }
                                return true
                            }
                            if (ad.point && ac && ac < P) {
                                var ab = ad.pointCharge / ac;
                                X.px -= ag * ab;
                                X.py -= af * ab
                            }
                        }
                        return !ad.charge
                    }
                }
                M.tick = function() {
                    if ((N *= 0.99) < D.options.convergenceThreshold) {
                        L = null;
                        K.end({
                            type: "end",
                            alpha: N = 0
                        });
                        return true
                    }
                    var ad = J.length;
                    var aa;
                    var Z;
                    var ab;
                    var Y;
                    var X;
                    var ac;
                    if (Y = N * V) {
                        X = W[0] / 2;
                        ac = W[1] / 2;
                        Z = -1;
                        if (Y) {
                            while (++Z < ad) {
                                ab = J[Z];
                                ab.x += (X - ab.x) * Y;
                                ab.y += (ac - ab.y) * Y
                            }
                        }
                    }
                    if (R) {
                        a(aa = G.geom.quadtree(J), N, U);
                        Z = -1;
                        while (++Z < ad) {
                            if (!(ab = J[Z]).fixed) {
                                aa.visit(S(ab))
                            }
                        }
                    }
                    Z = -1;
                    while (++Z < ad) {
                        ab = J[Z];
                        if (ab.fixed) {
                            ab.x = ab.px;
                            ab.y = ab.py
                        } else {
                            ab.x -= (ab.px - (ab.px = ab.x)) * O;
                            ab.y -= (ab.py - (ab.py = ab.y)) * O
                        }
                    }
                    K.tick({
                        type: "tick",
                        alpha: N
                    })
                }
                ;
                M.nodes = function(X) {
                    if (!arguments.length) {
                        return J
                    }
                    J = X;
                    return M
                }
                ;
                M.size = function(X) {
                    if (!arguments.length) {
                        return W
                    }
                    W = X;
                    return M
                }
                ;
                M.charge = function(X) {
                    if (!arguments.length) {
                        return R
                    }
                    R = typeof X === "function" ? X : +X;
                    return M
                }
                ;
                M.alpha = function(X) {
                    if (!arguments.length) {
                        return N
                    }
                    X = +X;
                    if (N) {
                        if (X > 0) {
                            N = X
                        } else {
                            L.c = null;
                            L.t = NaN;
                            L = null;
                            K.end({
                                type: "end",
                                alpha: N = 0
                            })
                        }
                    } else {
                        if (X > 0) {
                            K.start({
                                type: "start",
                                alpha: N = X
                            });
                            L = C(M.tick)
                        }
                    }
                    return M
                }
                ;
                M.start = function() {
                    var aa;
                    var ad = J.length;
                    var Y = W[0];
                    var ab = W[1];
                    var Z;
                    var ac;
                    for (aa = 0; aa < ad; ++aa) {
                        (ac = J[aa]).index = aa;
                        ac.weight = 0
                    }
                    for (aa = 0; aa < ad; ++aa) {
                        ac = J[aa];
                        if (isNaN(ac.x)) {
                            ac.x = X("x", Y)
                        }
                        if (isNaN(ac.y)) {
                            ac.y = X("y", ab)
                        }
                        if (isNaN(ac.px)) {
                            ac.px = ac.x
                        }
                        if (isNaN(ac.py)) {
                            ac.py = ac.y
                        }
                    }
                    U = [];
                    if (typeof R === "function") {
                        for (aa = 0; aa < ad; ++aa) {
                            U[aa] = +R.call(this, J[aa], aa)
                        }
                    } else {
                        for (aa = 0; aa < ad; ++aa) {
                            U[aa] = R
                        }
                    }
                    function X(aj, ah) {
                        if (!Z) {
                            Z = new Array(ad);
                            for (ag = 0; ag < ad; ++ag) {
                                Z[ag] = []
                            }
                        }
                        var ai = Z[aa];
                        var ag = -1;
                        var af = ai.length;
                        var ae;
                        while (++ag < af) {
                            if (!isNaN(ae = ai[ag][aj])) {
                                return ae
                            }
                        }
                        return Math.random() * ah
                    }
                    return M.resume()
                }
                ;
                M.resume = function() {
                    return M.alpha(0.1)
                }
                ;
                M.stop = function() {
                    return M.alpha(0)
                }
                ;
                return G.rebind(M, K, "on")
            }
            ;
            this.forceLayout = G
        },
        drawData: function(W) {
            if (this.force !== undefined) {
                this.force.stop()
            }
            this.paper.clear();
            var S = this;
            var V = W.items;
            var U = V[0];
            var G = V[1];
            var O = [];
            var N = [];
            var D;
            var J = this.options.colors;
            var L = J.length;
            var F = Math.max.apply(Math, G);
            var E = this.options.radiusFactor;
            var I = this.options.compensation;
            var B = this.options.logBias;
            T.each(U, function(aa, Y) {
                O[Y] = {};
                O[Y].topX = Y + 1;
                O[Y].attributeId = aa.attributeId;
                O[Y].label = aa.name;
                O[Y].ratio = G[Y][0];
                var Z = 0;
                if (F !== 0) {
                    Z = Math.log2 ? Math.log2(O[Y].ratio / F + B) * E + I : Math.log(O[Y].ratio / F + B) / Math.log(2) * E + I
                } else {
                    Z = Math.log2 ? Math.log2(B) * E + I : Math.log(B) / Math.log(2) * E + I
                }
                O[Y].r = Math.round(Z);
                O[Y].size = Math.PI * O[Y].r * O[Y].r;
                O[Y].color = J[Y % L]
            });
            var A = this.options.additionalCount;
            var K = this.options.additionalColors;
            var z = K.length;
            var R = this.options.additionalRadiusFactor;
            var X = this.options.additionalCompensation;
            for (var Q = O.length, C = O.length + A; Q < C; Q++) {
                var H = Math.random() * R + X;
                O[Q] = {};
                O[Q].r = H;
                O[Q].size = Math.PI * O[Q].r * O[Q].r;
                O[Q].color = K[Q % z]
            }
            this.force = this.forceLayout.layout.force();
            var y = this.force;
            y = y.nodes(O);
            y = y.size([this.options.width, this.options.height]);
            y = y.charge(function(Y) {
                return -1 * Y.size * S.options.chargeFactor
            });
            y.on("tick", function() {
                for (var Y = O.length - 1; Y >= 0; Y--) {
                    var Z = O[Y];
                    var aa = N[Y];
                    if (Z.circleEl) {
                        Z.circleEl.translate((Z.x - aa.x), (Z.y - aa.y))
                    }
                    if (Z.txtEl) {
                        Z.txtEl.translate((Z.x - aa.x), (Z.y - aa.y))
                    }
                }
                S.updateOldNodesPosition(N, O)
            });
            y.start();
            this.updateOldNodesPosition(N, O);
            for (var Q = O.length - 1; Q >= 0; Q--) {
                var P = O[Q];
                var M = P.r;
                P.circleEl = this.paper.circle(P.x, P.y, M);
                if (this.options.activeNodeIndex === Q) {
                    P.circleEl.attr({
                        fill: "#f2686a",
                        stroke: "#f2686a",
                        "stroke-width": 5,
                        "stroke-opacity": 0.1
                    });
                    D = P
                } else {
                    P.circleEl.attr({
                        fill: P.color,
                        opacity: P.opacity || 1,
                        stroke: "none"
                    })
                }
                if (P.label) {
                    P.txtEl = this.paper.text(P.x, P.y, this.convertLabel(P.label)).attr({
                        "font-family": this.options.fontFamily,
                        "font-size": P.r / 2,
                        "font-weight": this.options.fontWeight,
                        fill: "#fff"
                    });
                    S.setNodeEvent(P)
                }
            }
            return D
        },
        setNodeEvent: function(A) {
            var y = this;
            var z = "pointer";
            if (T.browser.ie === undefined || T.browser.ie > 8) {
                A.circleEl[0].setAttribute("class", z);
                A.txtEl[0].setAttribute("class", z)
            }
            A.circleEl.click(function() {
                y.options.clickHandler(A)
            });
            A.circleEl.hover(function() {
                if (T.browser.ie && T.browser.ie < 9) {
                    A.circleEl[0].style.cursor = "pointer";
                    A.txtEl[0].style.cursor = "pointer"
                }
                y.options.hoverInHandler(A)
            }, function() {
                if (T.browser.ie && T.browser.ie < 9) {
                    A.circleEl[0].style.cursor = "auto";
                    A.txtEl[0].style.cursor = "auto"
                }
                y.options.hoverOutHandler(A)
            });
            A.txtEl.click(function() {
                y.options.clickHandler(A)
            });
            A.txtEl.hover(function() {
                y.options.hoverInHandler(A)
            }, function() {
                y.options.hoverOutHandler(A)
            })
        },
        updateOldNodesPosition: function(A, y) {
            for (var z = y.length - 1; z >= 0; z--) {
                A[z] = {};
                A[z].x = y[z].x;
                A[z].y = y[z].y
            }
        },
        convertLabel: function(y) {
            var z = y.split("");
            if (z.length < 4) {
                return y
            }
            switch (z.length) {
            case 4:
                z.splice(2, 0, "\n");
                break;
            case 5:
            case 6:
                z.splice(3, 0, "\n");
                break
            }
            y = z.join("");
            return y
        }
    });
    function w(A, z) {
        for (var y in z) {
            try {
                Object.defineProperty(A.prototype, y, {
                    value: z[y],
                    enumerable: false
                })
            } catch (B) {
                A.prototype[y] = z[y]
            }
        }
    }
    function l(y) {
        return y.x
    }
    function k(y) {
        return y.y
    }
    function s() {
        return {
            leaf: true,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }
    function h(C, B, z, G, y, E) {
        if (!C(B, z, G, y, E)) {
            var F = (z + y) * 0.5;
            var D = (G + E) * 0.5;
            var A = B.nodes;
            if (A[0]) {
                h(C, A[0], z, G, F, D)
            }
            if (A[1]) {
                h(C, A[1], F, G, y, D)
            }
            if (A[2]) {
                h(C, A[2], z, D, F, E)
            }
            if (A[3]) {
                h(C, A[3], F, D, y, E)
            }
        }
    }
    function o(F, H, E, B, I, z, D) {
        var G = Infinity;
        var A;
        (function C(N, K, U, J, S) {
            if (K > z || U > D || J < B || S < I) {
                return
            }
            if (N.point) {
                var W;
                var Z = H - N.x;
                var Y = E - N.y;
                var R = Z * Z + Y * Y;
                if (R < G) {
                    var y = Math.sqrt(G = R);
                    B = H - y;
                    I = E - y;
                    z = H + y;
                    D = E + y;
                    A = W
                }
            }
            var M = N.nodes;
            var Q = (K + J) * 0.5;
            var L = (U + S) * 0.5;
            var X = H >= Q;
            var V = E >= L;
            for (var P = V << 1 | X, O = P + 4; P < O; ++P) {
                if (N = M[P & 3]) {
                    switch (P & 3) {
                    case 0:
                        C(N, K, U, Q, L);
                        break;
                    case 1:
                        C(N, Q, U, J, L);
                        break;
                    case 2:
                        C(N, K, L, Q, S);
                        break;
                    case 3:
                        C(N, Q, L, J, S);
                        break
                    }
                }
            }
        })(F, B, I, z, D);
        return A
    }
    function d(y) {
        return y[0]
    }
    function c(y) {
        return y[1]
    }
    function u(y, B) {
        var C = new n();
        if (y instanceof n) {
            y.forEach(function(F, G) {
                C.set(F, G)
            })
        } else {
            if (Array.isArray(y)) {
                var A = -1;
                var E = y.length;
                var D;
                if (arguments.length === 1) {
                    while (++A < E) {
                        C.set(A, y[A])
                    }
                } else {
                    while (++A < E) {
                        C.set(B.call(y, D = y[A], A), D)
                    }
                }
            } else {
                for (var z in y) {
                    if (y.hasOwnProperty(z)) {
                        C.set(z, y[z])
                    }
                }
            }
        }
        return C
    }
    function b(A, z) {
        var y = "__proto__";
        return (A += "") === y || A[0] === z ? z + A : A
    }
    function g(z, y) {
        return (z += "")[0] === y ? z.slice(1) : z
    }
    function m(z, y, A) {
        return function() {
            var B = A.apply(y, arguments);
            return B === y ? z : B
        }
    }
    function q() {
        var z = [];
        for (var y in this.u) {
            if (this.u.hasOwnProperty(y)) {
                z.push(g(y))
            }
        }
        return z
    }
    function r(A, z) {
        var C = ["webkit", "ms", "moz", "Moz", "o", "O"];
        if (z in A) {
            return z
        }
        z = z.charAt(0).toUpperCase() + z.slice(1);
        for (var B = 0, D = C.length; B < D; ++B) {
            var y = C[B] + z;
            if (y in A) {
                return y
            }
        }
    }
    function f(A, z) {
        var y = 1;
        var C = arguments.length;
        var B;
        while (++y < C) {
            A[B = arguments[y]] = m(A, z, z[B])
        }
        return A
    }
    function n() {
        this.u = {}
    }
    function t() {}
    function v() {
        var y = new t();
        var z = -1;
        var A = arguments.length;
        while (++z < A) {
            y[arguments[z]] = e(y)
        }
        return y
    }
    function e(y) {
        var A = [];
        var z = new n();
        function B() {
            var E = A;
            var D = -1;
            var F = E.length;
            var C;
            while (++D < F) {
                if (C = E[D].on) {
                    C.apply(this, arguments)
                }
            }
            return y
        }
        B.on = function(D, F) {
            var C = z.get(D);
            var E;
            if (arguments.length < 2) {
                return C && C.on
            }
            if (C) {
                C.on = null;
                A = A.slice(0, E = A.indexOf(C)).concat(A.slice(E + 1));
                z.remove(D)
            }
            if (F) {
                A.push(z.set(D, {
                    on: F
                }))
            }
            return y
        }
        ;
        return B
    }
    function a(H, C, G) {
        var D = 0;
        var A = 0;
        H.charge = 0;
        if (!H.leaf) {
            var y = H.nodes;
            var z = y.length;
            var E = -1;
            var F;
            while (++E < z) {
                F = y[E];
                if (F == null) {
                    continue
                }
                a(F, C, G);
                H.charge += F.charge;
                D += F.charge * F.cx;
                A += F.charge * F.cy
            }
        }
        if (H.point) {
            if (!H.leaf) {
                H.point.x += Math.random() - 0.5;
                H.point.y += Math.random() - 0.5
            }
            var B = C * G[H.point.index];
            H.charge += H.pointCharge = B;
            D += B * H.point.x;
            A += B * H.point.y
        }
        H.cx = D / H.charge;
        H.cy = A / H.charge
    }
    function j(A, B) {
        var z = A.indexOf(".");
        var y = "";
        if (z >= 0) {
            y = A.slice(z + 1);
            A = A.slice(0, z)
        }
        if (A) {
            return arguments.length < 2 ? this[A].on(y) : this[A].on(y, B)
        }
        if (arguments.length === 2) {
            if (B === null) {
                for (A in this) {
                    if (this.hasOwnProperty(A)) {
                        this[A].on(y, null)
                    }
                }
            }
            return this
        }
    }
    function x(H, A, E, z, D) {
        var I = Math.abs;
        var F = d;
        var C = c;
        var G;
        if (G = arguments.length) {
            F = l;
            C = k;
            if (G === 3) {
                D = E;
                z = A;
                E = A = 0
            }
            return B(H)
        }
        function B(ab) {
            var Z;
            var M = p(F);
            var K = p(C);
            var P;
            var W;
            var X;
            var U;
            var N;
            var Y;
            var S;
            var L;
            if (A != null) {
                N = A;
                Y = E;
                S = z;
                L = D
            } else {
                S = L = -(N = Y = Infinity);
                P = [];
                W = [];
                U = ab.length;
                if (G) {
                    for (X = 0; X < U; ++X) {
                        Z = ab[X];
                        if (Z.x < N) {
                            N = Z.x
                        }
                        if (Z.y < Y) {
                            Y = Z.y
                        }
                        if (Z.x > S) {
                            S = Z.x
                        }
                        if (Z.y > L) {
                            L = Z.y
                        }
                        P.push(Z.x);
                        W.push(Z.y)
                    }
                } else {
                    for (X = 0; X < U; ++X) {
                        var y = +M(Z = ab[X], X);
                        var O = +K(Z, X);
                        if (y < N) {
                            N = y
                        }
                        if (O < Y) {
                            Y = O
                        }
                        if (y > S) {
                            S = y
                        }
                        if (O > L) {
                            L = O
                        }
                        P.push(y);
                        W.push(O)
                    }
                }
            }
            var R = S - N;
            var Q = L - Y;
            if (R > Q) {
                L = Y + R
            } else {
                S = N + Q
            }
            function J(ae, ai, am, aj, ad, al, ac, ak) {
                if (isNaN(am) || isNaN(aj)) {
                    return
                }
                if (ae.leaf) {
                    var ah = ae.x;
                    var ag = ae.y;
                    if (ah != null) {
                        if (I(ah - am) + I(ag - aj) < 0.01) {
                            aa(ae, ai, am, aj, ad, al, ac, ak)
                        } else {
                            var af = ae.point;
                            ae.x = ae.y = ae.point = null;
                            aa(ae, af, ah, ag, ad, al, ac, ak);
                            aa(ae, ai, am, aj, ad, al, ac, ak)
                        }
                    } else {
                        ae.x = am;
                        ae.y = aj;
                        ae.point = ai
                    }
                } else {
                    aa(ae, ai, am, aj, ad, al, ac, ak)
                }
            }
            function aa(af, ai, am, aj, ad, al, ac, ak) {
                var ah = (ad + ac) * 0.5;
                var ae = (al + ak) * 0.5;
                var ao = am >= ah;
                var an = aj >= ae;
                var ag = an << 1 | ao;
                af.leaf = false;
                af = af.nodes[ag] || (af.nodes[ag] = s());
                if (ao) {
                    ad = ah
                } else {
                    ac = ah
                }
                if (an) {
                    al = ae
                } else {
                    ak = ae
                }
                J(af, ai, am, aj, ad, al, ac, ak)
            }
            var V = s();
            V.add = function(ac) {
                J(V, ac, +M(ac, ++X), +K(ac, X), N, Y, S, L)
            }
            ;
            V.visit = function(ac) {
                h(ac, V, N, Y, S, L)
            }
            ;
            V.find = function(ac) {
                return o(V, ac[0], ac[1], N, Y, S, L)
            }
            ;
            X = -1;
            if (A === null) {
                while (++X < U) {
                    J(V, ab[X], P[X], W[X], N, Y, S, L)
                }
                --X
            } else {
                T.each(ab, V.add)
            }
            P = W = ab = Z = null;
            return V
        }
        B.x = function(y) {
            return arguments.length ? (F = y,
            B) : F
        }
        ;
        B.y = function(y) {
            return arguments.length ? (C = y,
            B) : C
        }
        ;
        B.extent = function(y) {
            if (!arguments.length) {
                return A === null ? null : [[A, E], [z, D]]
            }
            if (y === null) {
                A = E = z = D = null
            } else {
                A = +y[0][0];
                E = +y[0][1];
                z = +y[1][0];
                D = +y[1][1]
            }
            return B
        }
        ;
        B.size = function(y) {
            if (!arguments.length) {
                return A === null ? null : [z - A, D - E]
            }
            if (y === null) {
                A = E = z = D = null
            } else {
                A = E = 0;
                z = +y[0];
                D = +y[1]
            }
            return B
        }
        ;
        return B
    }
    function p(y) {
        return typeof y === "function" ? y : function() {
            return y
        }
    }
})();
(function() {
    var a = Math
      , b = T.charts.mixin.ChartConvert
      , c = T.charts.Util.extend;
    T.charts.RowBar = T.createChart(T.charts.Bar, {
        options: {
            GROUP: true,
            color: "90-#249cfa",
            grid: {
                margin: [3, 40, 3, 100],
                border: [false, false, false, false]
            },
            xAxis: [{
                type: "value",
                position: "bottom",
                axisUnit: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                data: [],
                splitNumber: 5
            }],
            yAxis: [{
                type: "category",
                position: "left",
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: "auto",
                    rotate: 0,
                    margin: 10,
                    formatter: null,
                    textStyle: {
                        fontFamily: "Microsoft YaHei, SimSun, Arial",
                        fontSize: 12,
                        color: "#666"
                    }
                }
            }],
            textStyle: {
                fontFamily: "Microsoft YaHei, SimSun, Arial",
                fontSize: 12,
                fontWeight: "bold",
                color: "#249cfa",
                align: "right",
                textAnchor: "end",
                rightMargin: 0
            },
            itemStyle: {
                color: "#52a2dc",
                rectHeight: 12
            }
        },
        initialize: function(e, d) {
            T.charts.Chart.prototype.initialize.apply(this, [e, d]);
            this.setOption(this.options)
        },
        getDefaultOptions: function() {
            T.charts.Bar.prototype.getDefaultOptions.call(this);
            var d = T.charts.RowBar.prototype.options;
            this.defaultOptions = c(this.defaultOptions, d);
            return this.defaultOptions
        },
        paintData: function() {
            var g = this.options
              , z = this._chart
              , w = this.paper
              , K = this._groups
              , G = this._raphaelEls.series;
            var F = g.itemStyle.rectHeight;
            var y = F * g.series.length;
            var p = g.yAxis && g.yAxis[0] && g.yAxis[0].data.length || 0;
            var L = 5;
            var r = T.charts.RowBar.prototype.options;
            var u = g.color || r.color;
            if (typeof u === "string") {
                u = [u]
            }
            for (var m = 0; m < g.series.length; m++) {
                var v = g.series[m];
                G[m] = [];
                var j = v.xAxisIndex || 0;
                var C = v.yAxisIndex || 0;
                for (var I = 0; I < p; I++) {
                    var M = v.data[I] || {};
                    var E = isNaN(M) ? (M.value || 0) : M;
                    var t = z.XY.y[C][I] - y / 2;
                    var e = t + m * F;
                    var h = z.width * E / 100;
                    h = a.floor(h) > L ? h : L;
                    var f = z.x;
                    var o = M.itemStyle || v.itemStyle || r.itemStyle;
                    o = T.object.clone(o);
                    o.background = u[I % u.length];
                    var d = w.rect(f, e, z.width, F);
                    d.attr(b.pathAttr({
                        color: "#eee",
                        background: "#eee"
                    }));
                    var s = w.rect(f, e, h, F);
                    s.attr(b.pathAttr(o));
                    if (E === "--") {
                        continue
                    }
                    var l = T.object.clone(g.textStyle);
                    var A = e + 5;
                    var B = z.chartWidth;
                    var x = isNaN(E) ? "--" : E.toFixed(0);
                    x = this.getFormat(M.formatter, [x]) || x;
                    var J = w.text(B - l.rightMargin, A, x);
                    J.attr(b.textAttr(l));
                    var n = [s, s];
                    G[m][I] = [d].concat([s, J]);
                    if (g.exportSVG) {
                        continue
                    }
                    var k = g.tooltip || T.charts.Bar.prototype.tooltip;
                    var H = k.formatter;
                    var D = this.getFormat(M.formatter, [E]) || E;
                    var q = g.yAxis[C].data[I];
                    D = this.getFormat(H, [D, q, v.name]);
                    n.push(D);
                    this._setSVGHover.apply(this, n)
                }
            }
        },
        initDataGroups: function() {
            var g = this._raphaelEls
              , m = 0
              , e = g.series || []
              , d = this._groups
              , h = this._chart;
            var l = this
              , k = h.baseGroups.length;
            for (var f = 0; f < e.length; f++) {
                T.array.each(e[f], function(o, n) {
                    d[m].push(o[0]);
                    d[m].push(o[1]);
                    var j = n * e.length + f;
                    var q = d[j + k];
                    if (!q) {
                        var p = {
                            tag: "right",
                            x: o[2].attr("x")
                        };
                        q = d[j + k] = l.getGroup(p)
                    }
                    q.push(o[2])
                })
            }
        },
        CLASS_NAME: "T.charts.RowBar"
    })
})();
(function() {
    var a = Math
      , b = T.charts.mixin.ChartConvert
      , c = T.charts.Util.extend;
    T.charts.Trade = T.createChart(T.charts.Bar, {
        options: {
            color: "90-#249cfa",
            grid: {
                margin: [43, 20, 170, 20],
                border: [false, false, false, false]
            },
            itemStyle: {
                color: "#52a2dc",
                rectWidth: 14
            },
            textStyle: {
                fontFamily: "Microsoft YaHei, SimSun, Arial",
                fontSize: 12,
                fontWeight: "bold",
                color: "#249cfa"
            },
            xAxis: [{
                type: "category",
                position: "bottom",
                axisUnit: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                data: [],
                splitNumber: 5,
                axisLabel: {
                    show: true,
                    interval: "auto",
                    rotate: 0,
                    margin: 10,
                    formatter: null,
                    vertical: true,
                    textStyle: {
                        fontFamily: "Microsoft YaHei, SimSun, Arial",
                        fontSize: 12,
                        color: "#666"
                    }
                }
            }],
            yAxis: [{
                type: "value",
                position: "left",
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            GROUP: true
        },
        initialize: function(e, d) {
            T.charts.Chart.prototype.initialize.apply(this, [e, d]);
            this.setOption(this.options)
        },
        getDefaultOptions: function() {
            T.charts.Bar.prototype.getDefaultOptions.call(this);
            var d = T.charts.Trade.prototype.options;
            this.defaultOptions = c(this.defaultOptions, d);
            return this.defaultOptions
        },
        paintData: function() {
            var g = this.options
              , A = this._chart
              , H = this._raphaelEls.series
              , x = this.paper;
            var j = g.itemStyle.rectWidth || 14;
            var q = g.xAxis && g.xAxis[0] && g.xAxis[0].data.length || 0;
            var y = j * g.series.length;
            var h = 5;
            var s = T.charts.Trade.prototype.options;
            var u = g.color || s.color;
            if (typeof u === "string") {
                u = [u]
            }
            for (var n = 0; n < g.series.length; n++) {
                var w = g.series[n];
                H[n] = [];
                var k = w.xAxisIndex || 0;
                var D = w.yAxisIndex || 0;
                for (var J = 0; J < q; J++) {
                    var L = w.data[J] || {};
                    var F = isNaN(L) ? (L.value || 0) : L;
                    var v = A.XY.x[k][J] - y / 2;
                    var f = v + n * j;
                    var G = A.height * F / 100;
                    G = a.floor(G) > h ? G : h;
                    var e = A.y + A.height - G;
                    var p = L.itemStyle || w.itemStyle || s.itemStyle;
                    p = T.object.clone(p);
                    p.background = u[J % u.length];
                    var d = x.rect(f, A.y, j, A.height);
                    d.attr(b.pathAttr({
                        color: "#eee",
                        background: "#eee"
                    }));
                    var t = x.rect(f, e, j, G);
                    t.attr(b.pathAttr(p));
                    if (F === "--") {
                        continue
                    }
                    var m = T.object.clone(g.textStyle);
                    var C = f + j / 2;
                    var B = A.y - 20;
                    var z = isNaN(F) ? "--" : F.toFixed(0);
                    z = this.getFormat(L.formatter, [z]) || z;
                    var K = x.text(C, B, z);
                    K.attr(b.textAttr(m));
                    var o = [t, t];
                    H[n][J] = [d].concat(o).concat([K]);
                    if (g.exportSVG) {
                        continue
                    }
                    var l = g.tooltip || T.charts.Bar.prototype.tooltip;
                    var I = l.formatter
                      , E = this.getFormat(L.formatter, [F]) || F;
                    var r = g.xAxis[k].data[J];
                    E = this.getFormat(I, [E, r, w.name]);
                    o.push(E);
                    this._setSVGHover.apply(this, o)
                }
            }
            return true
        },
        CLASS_NAME: "T.charts.Trade"
    })
})();
