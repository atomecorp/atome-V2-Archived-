// ZIM - Interactive Media framework at https://zimjs.com - code creativity!
// Also see https://zimjs.com/distill to minify only the functions in your app
// (c) 2019 Dan Zen - free to use - donations welcome! https://zimjs.com/donate

var zimDefaultFrame;
if (void 0 === zon) var zon = !0;
if (void 0 === zns) var zns = !1;
var zog = zon ? console.log.bind(console) : function() {};

function zid(e) {
	return z_d("1"), document.getElementById(e)
}

function zss(e) {
	if (z_d("2"), document.getElementById(e)) return document.getElementById(e).style;
	zon && zog("zim wrap - zss(): id not found")
}

function zgo(e, t, o, n, r, i) {
	if (z_d("3"), !(zot(t) && "" != t || "_self" == t)) {
		var a = "";
		return o && (a += "width=" + o + ","), n && (a += "height=" + n + ","), r && (a += "fullscreen=yes,"), i && (a += "modal=yes,alwaysRaised=yes"), window.open(e, t, a)
	}
	window.location.href = e
}

function zum(e) {
	if (z_d("4"), !zot(e)) return Number(String(e).replace(/[^\d\.\-]/g, ""))
}

function zot(e) {
	return null == e
}

function zop(e) {
	z_d("5"), zot(e) || (e.stopImmediatePropagation && e.stopImmediatePropagation(), window.event && (window.event.cancelBubble = !0))
}

function zil() {
	z_d("6");

	function e(e) {
		// (e = e || event).keyCode && 32 <= e.keyCode && e.keyCode <= 40 && e.preventDefault()
	}

	function t(e) {
		(e = e || event).preventDefault()
	}
	var o = t;
	return window.addEventListener("keydown", e, {
		passive: !1
	}), window.addEventListener("wheel", t, {
		passive: !1
	}), window.addEventListener("DOMMouseScroll", o, {
		passive: !1
	}), [e, t, o]
}

function zet(r) {
	return z_d("6.1"), new function() {
		var a = this;
		this.on = function(e, t) {
			if (!(zot(r) || zot(e) || zot(t)))
				for (var o = a.tags, n = 0; n < o.length; n++) o[n].addEventListener(e, t)
		}, this.off = function(e, t) {
			if (!(zot(r) || zot(e) || zot(t)))
				for (var o = a.tags, n = 0; n < o.length; n++) o[n].removeEventListener(e, t)
		}, Object.defineProperty(a, "tags", {
			get: function() {
				return zot(r) ? [] : "string" == typeof r || r instanceof String ? document.querySelectorAll(r) : "string" == typeof r.innerHTML ? [r] : []
			},
			set: function(e) {}
		}), this.css = function(e, t) {
			for (var o = a.tags, n = 0; n < o.length; n++)
				if (1 == arguments.length && e.constructor === {}.constructor)
					for (var r in e) o[n].style[r] = e[r];
				else {
					if (1 == arguments.length) return a.tags[0].style[e];
					o[n].style[e] = t
				}
		}, this.prop = function(e, t) {
			if (!zot(e)) {
				for (var o = a.tags, n = [], r = 0; r < o.length; r++)
					if (zot(t))
						if (e.constructor === {}.constructor)
							for (var i in e) o[r][i] = e[i];
						else n.push(o[r][e]);
				else o[r][e] = t;
				return zot(t) ? n : void 0
			}
		}
	}
}

function isDUO(e) {
	return 1 == e.length && null != e[0] && e[0].constructor === {}.constructor
}

function zob(e, t, o, n) {
	var r = zim && (zim.ZIMONON || window.ZIMONON);
	if (isDUO(t)) {
		z_d("7");
		var i, a, l, s = t[0],
			c = zot(o) ? e.toString().split(/\n/, 1)[0].match(/\((.*)\)/)[1].replace(/\s+/g, "").split(",") : o.replace(/\s+/g, "").split(","),
			u = [];
		for (i = 0; i < c.length; i++) a = c[i].split("=")[0], c[i] = a, u.push(s[a]);
		for (i in s) c.indexOf(i) < 0 && zon && zog(e, "bad argument " + i);
		return !(l = e.prototype.isPrototypeOf(n) ? new(e.bind.apply(e, [null].concat(u))) : e.apply(null, u)) || (r && !l.arguments && (l.arguments = [s]), l)
	}
	r && n && t && zot(n.arguments) && (n.arguments = Array.prototype.slice.call(t))
}

function zik(e) {
	if (z_d("7.5"), z_d("17.6"), !zot(e)) return zim.Pick.choose(e)
}
var ignore, zta = console.table && zon ? console.table.bind(console) : function() {},
	zim = function(oo) {
		function u(e, t, o, n, r) {
			var i = e * e;
			return t + (3 * -t + e * (3 * t - t * e)) * e + (3 * o + e * (-6 * o + 3 * o * e)) * e + (3 * n - 3 * n * e) * i + r * (i * e)
		}
		if (oo.shuffle = function(e) {
				if (z_d("8"), !zot(e)) {
					var t, o, n = e.length;
					if (0 == n) return e;
					for (; --n;) t = Math.floor(Math.random() * (n + 1)), o = e[n], e[n] = e[t], e[t] = o;
					return e
				}
			}, oo.rand = function(e, t, o, n) {
				return z_d("9"), zot(e) && zot(t) ? Math.random() : ((zot(e) || isNaN(e)) && (e = 0), (zot(t) || isNaN(t)) && (t = 0), e % 1 == 0 && t % 1 == 0 || (o = !1), zot(o) && (o = !0), n && .5 < Math.random() && (e *= -1, t *= -1), o && (t < e ? e++ : e < t && t++), 0 == e && 0 == t ? 0 : (r = 0 == t ? Math.random() * e : Math.min(e, t) + Math.random() * (Math.max(e, t) - Math.min(e, t)), o ? Math.floor(r) : r));
				var r
			}, oo.series = function() {
				var e;
				if (z_d("13.61"), 0 == arguments.length) return function() {};
				e = 1 == arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments;

				function t() {
					return e[o++ % e.length]
				}
				var o = 0;
				return t.array = e, t.type = "series", t
			}, oo.makeSeries = function(e) {
				if (z_d("13.6"), zot(e)) return function() {};

				function t() {
					return e[o++ % e.length]
				}
				var o = 0;
				return t.array = e, t
			}, oo.loop = function(e, t, o, n, r, i) {
				var a;
				if (a = zob(oo.loop, arguments, "obj, call, reverse, step, start, end")) return a;
				if (z_d("9.5"), !zot(e) && !zot(t)) {
					zot(o) && (o = !1), (zot(n) || n <= 0) && (n = 1);
					var l = "number" == typeof e ? "number" : e.constructor === Array ? "array" : e.constructor === {}.constructor ? "object" : e instanceof NodeList ? "nodelist" : e instanceof HTMLCollection ? "htmlcollection" : "invalid";
					if ("invalid" != l)
						if ("number" == l || "array" == l || "nodelist" == l || "htmlcollection" == l) {
							if (0 == (u = g((d = "number" == l ? e : e.length) - 1))) return;
							if (o)
								for (var s = r; i <= s; s -= n) {
									if ("number" == l) var c = t(s, u, r, i, e);
									else if ("array" == l) c = t(e[s], s, u, r, i, e);
									else c = t(e.item(s), s, u, r, i, e);
									if (void 0 !== c) return c
								} else
									for (s = r; s <= i; s += n) {
										if ("number" == l) c = t(s, u, r, i, e);
										else if ("array" == l) c = t(e[s], s, u, r, i, e);
										else c = t(e.item(s), s, u, r, i, e);
										if (void 0 !== c) return c
									}
						} else if ("object" == l) {
						var u, d = 0,
							h = [];
						for (var s in e) d++, h.push(s);
						if (0 == (u = g(d - 1))) return;
						if (o)
							for (s = r; i <= s; s -= n) {
								if (void 0 !== (c = t(h[s], e[h[s]], s, u, r, i, e))) return c
							} else
								for (s = r; s <= i; s += n) {
									if (void 0 !== (c = t(h[s], e[h[s]], s, u, r, i, e))) return c
								}
					}
				}

				function g(e) {
					return zot(r) && (r = o ? e : 0), zot(i) && (i = o ? 0 : e), o && r < i || !o && i < r ? 0 : (r < 0 && i) < 0 || e < r && e < i ? 0 : (r = Math.max(0, Math.min(r, e)), i = Math.max(0, Math.min(i, e)), Math.floor((o ? r - i : i - r) / n) + 1)
				}
			}, oo.timeout = function(t, o) {
				if (z_d("9.7"), !zot(o) && "function" == typeof o) {
					zot(t) && (t = 1e3), t = oo.Pick.choose(t);
					var n = {
							startTime: Date.now(),
							time: 0,
							paused: !1,
							done: !1
						},
						r = n.startTime;
					return n.pause = function(e, t, o) {
						zot(e) && (e = !0), e ? cancelAnimationFrame(n.rid) : (t ? r = 0 : o ? (r = Date.now(), n.time = 0) : r = Date.now(), i()), n.paused = e
					}, n.clear = function() {
						for (var e in n && cancelAnimationFrame(n.rid), n) delete n[e];
						n.pause = function() {}, n.clear = function() {}
					}, i(), n
				}

				function i() {
					var e = Date.now();
					if (n.time += e - r, r = e, n.time >= t) return n.done = !0, o(n), void n.clear();
					n.rid = requestAnimationFrame(i)
				}
			}, oo.interval = function(e, n, t, o) {
				if (z_d("9.8"), !zot(n) && "function" == typeof n && (zot(e) && (e = 1e3), zot(o) && (o = !1), zot(t) || !(isNaN(t) || t <= 0))) {
					zot(t) && (t = -1);
					var r, i = {
						count: 0,
						total: t,
						paused: !1,
						time: e,
						active: !0
					};
					return o && setTimeout(function() {
						n(i), l()
					}, 10), i.pause = function(e, t, o) {
						zot(e) && (e = !0), e ? (clearTimeout(r), clearTimeout(i.id), cancelAnimationFrame(i.rid), i.pauseTimeLeft = i.interval - (Date.now() - i.startTime)) : (i.paused || i.pause(!0), r = setTimeout(function() {
							i.count++, n(i), a(), l()
						}, t ? 0 : o ? i.interval : i.pauseTimeLeft), i.pauseTimeLeft = null), i.paused = e
					}, i.clear = function() {
						i.active = !1, clearTimeout(r), cancelAnimationFrame(i.rid), clearTimeout(i.id);
						var e = i.count;
						for (var t in i) delete i[t];
						i.active = !1, i.count = e, i.pause = function() {}, i.clear = function() {}
					}, a(), i
				}

				function a() {
					i.startTime = Date.now(), i.interval = oo.Pick.choose(i.time), i.id = setTimeout(function() {
						i.paused || i.active && (i.rid = requestAnimationFrame(a), i.count++, n(i), l())
					}, i.interval)
				}

				function l() {
					-1 != t && i.count >= (o ? i.total - 1 : i.total) && i.clear()
				}
			}, oo.async = function(e, t) {
				if (z_d("29"), !zot(e)) {
					var o, n = document.createElement("script");
					if (t) {
						var r = t.toString().split(/\n/, 1)[0].match(/^function\s?([^\s(]*)/)[1];
						oo.async[r] = (o = n, function(e) {
							o && o.parentNode.removeChild(o), o = null, t(e)
						})
					} else oo.async.z_s && oo.async.z_s.parentNode && oo.async.z_s.parentNode.removeChild(oo.async.z_s), oo.async.z_s = n;
					e.match(/\?/) || (e += "?"), n.setAttribute("src", e + "&r=" + Math.random()), document.getElementsByTagName("head")[0].appendChild(n)
				}
			}, oo.convertColorCheck = !1, oo.convertColor = function(e, o, n) {
				if (oo.convertColorCheck || (z_d("27.5"), oo.convertColorCheck = !0), zot(o) && (o = "hex"), !zot(e)) {
					var t, r = ["black", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
						i = ["000000", "f0f8ff", "faebd7", "00ffff", "7fffd4", "f0ffff", "f5f5dc", "ffe4c4", "ffebcd", "0000ff", "8a2be2", "a52a2a", "deb887", "5f9ea0", "7fff00", "d2691e", "ff7f50", "6495ed", "fff8dc", "dc143c", "00ffff", "00008b", "008b8b", "b8860b", "a9a9a9", "a9a9a9", "006400", "bdb76b", "8b008b", "556b2f", "ff8c00", "9932cc", "8b0000", "e9967a", "8fbc8f", "483d8b", "2f4f4f", "2f4f4f", "00ced1", "9400d3", "ff1493", "00bfff", "696969", "696969", "1e90ff", "b22222", "fffaf0", "228b22", "ff00ff", "dcdcdc", "f8f8ff", "ffd700", "daa520", "808080", "808080", "008000", "adff2f", "f0fff0", "ff69b4", "cd5c5c", "4b0082", "fffff0", "f0e68c", "e6e6fa", "fff0f5", "7cfc00", "fffacd", "add8e6", "f08080", "e0ffff", "fafad2", "d3d3d3", "d3d3d3", "90ee90", "ffb6c1", "ffa07a", "20b2aa", "87cefa", "778899", "778899", "b0c4de", "ffffe0", "00ff00", "32cd32", "faf0e6", "ff00ff", "800000", "66cdaa", "0000cd", "ba55d3", "9370db", "3cb371", "7b68ee", "00fa9a", "48d1cc", "c71585", "191970", "f5fffa", "ffe4e1", "ffe4b5", "ffdead", "000080", "fdf5e6", "808000", "6b8e23", "ffa500", "ff4500", "da70d6", "eee8aa", "98fb98", "afeeee", "db7093", "ffefd5", "ffdab9", "cd853f", "ffc0cb", "dda0dd", "b0e0e6", "800080", "663399", "ff0000", "bc8f8f", "4169e1", "8b4513", "fa8072", "f4a460", "2e8b57", "fff5ee", "a0522d", "c0c0c0", "87ceeb", "6a5acd", "708090", "708090", "fffafa", "00ff7f", "4682b4", "d2b48c", "008080", "d8bfd8", "ff6347", "40e0d0", "ee82ee", "f5deb3", "ffffff", "f5f5f5", "ffff00", "9acd32"];
					if (t = e.match(/rgba\((.*)\)/)) {
						if (!zot(n)) return (a = e.split(","))[3] = n + ")", a.join(",");
						e = "rgb(" + t[1] + ")"
					}
					if (zot(n), t = e.match(/rgb\((.*)\)/)) {
						var a;
						if ("rgba" == o) return (a = e.split(")"))[0] + "," + n + a[1];
						if ("hex" == o) return "#" + (r = u(t[1]))[0] + r[1] + r[2];
						if ("string" != o) return e;
						var l;
						e = u(t[1]).join("").toLowerCase();
						return -1 == (l = i.indexOf(e)) ? "#" + e : r[l]
					}
					if ("rgb" == o || "rgba" == o) {
						function s(e) {
							var t;
							return /^#([A-Fa-f0-9]{3}){1,2}$/.test(e) ? (3 == (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), t = "0x" + t.join(""), "rgb" == o ? "rgb(" + [t >> 16 & 255, t >> 8 & 255, 255 & t] + ")" : "rgba(" + [t >> 16 & 255, t >> 8 & 255, 255 & t].join(",") + "," + n + ")") : "rgb" == o ? "rgb(0,0,0)" : "rgba(0,0,0,1)"
						}
						return "#" == e.charAt(0) ? s(e) : s(oo.convertColor(e))
					}
					if ("hex" == o) {
						if ("#" == e.charAt(0)) return e
					} else "#" == e.charAt(0) && 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2));
					return "string" != o ? "#" + i[-1 != r.indexOf(e.toLowerCase()) ? r.indexOf(e) : 0] : -1 == (l = i.indexOf(e)) ? "#" + e : r[l]
				}

				function c(e) {
					var t = Number(e).toString(16);
					return t.length < 2 && (t = "0" + t), t
				}

				function u(e) {
					var t = e.split(",");
					return [c(t[0]), c(t[1]), c(t[2])]
				}
			}, oo.colorRangeCheck = !1, oo.colorRange = function(e, t, o) {
				o = Math.max(0, Math.min(1, o)), oo.colorRangeCheck || (z_d("27.6"), oo.colorRangeCheck = !0), zot(e) && (e = "white"), zot(t) && (t = "black");
				for (var n, r, i = oo.convertColor(e, "rgb"), a = oo.convertColor(t, "rgb"), l = (e = i.substring(4, i.length - 1).split(","), t = a.substring(4, a.length - 1).split(","), "#"), s = 0; s < e.length; s++) n = t[s] - e[s], (r = Math.floor(parseInt(e[s], 10) + n * o).toString(16)).length < 2 && (r = "0" + r), l += r;
				return l
			}, oo.pointAlongCurve = function(e, t, o) {
				if (z_d("27.7"), e && e[0] && e[1] && e[2] && e[3]) {
					var n = u(t, e[0].x, e[1].x, e[2].x, e[3].x),
						r = u(t, e[0].y, e[1].y, e[2].y, e[3].y);
					if (o) {
						var i = t + .05;
						if (1 < i) {
							i -= .05;
							var a = u(t -= .05, e[0].x, e[1].x, e[2].x, e[3].x),
								l = u(t, e[0].y, e[1].y, e[2].y, e[3].y)
						} else a = n, l = r;
						var s = u(i, e[0].x, e[1].x, e[2].x, e[3].x),
							c = u(i, e[0].y, e[1].y, e[2].y, e[3].y);
						return {
							x: n,
							y: r,
							angle: oo.angle(a, l, s, c)
						}
					}
					return {
						x: n,
						y: r
					}
				}
			}, oo.distanceAlongCurve = function(e) {
				return z_d("27.8"), (oo.dist(e[0], e[3]) + (oo.dist(e[0], e[1]) + oo.dist(e[1], e[2]) + oo.dist(e[2], e[3]))) / 2
			}, oo.closestPointAlongCurve = function(a, e, t, o, n) {
				z_d("27.9");
				var l, s = 1e7,
					c = 0,
					u = 0;
				return zot(t) && (t = 10), oo.loop(e, function(r, i, e) {
					oo.loop(t, function(e, t) {
						var o = oo.pointAlongCurve(r, e / t),
							n = oo.dist(a, o);
						n < s && (s = n, l = o, c = i, u = e)
					})
				}), n ? (c * t + u) / (e.length * t) * 100 : o ? l : c
			}, oo.transformPoints = function(e, t, o, n, r) {
				if (z_d("27.95"), !zot(e) && Array.isArray(e)) {
					zot(n) && (n = 0), zot(r) && (r = 0);
					e = oo.copy(e);
					var i, a = n,
						l = r;
					"rotation" == t && (0 != n && (e = oo.transformPoints(e, "x", -a)), 0 != r && (e = oo.transformPoints(e, "y", -l)));
					for (var s = 0; s < e.length; s++)
						if (i = e[s], Array.isArray(i))
							if ("x" == t) i[0] += o;
							else if ("y" == t) i[1] += o;
					else if ("scaleX" == t) i[0] = (i[0] - n) * o + n, i[4] = i[4] * o, i[6] = i[6] * o;
					else if ("scaleY" == t) i[1] = (i[1] - r) * o + r, i[5] = i[5] * o, i[7] = i[7] * o;
					else if ("scale" == t) i[0] = (i[0] - n) * o + n, i[4] = i[4] * o, i[6] = i[6] * o, i[1] = (i[1] - r) * o + r, i[5] = i[5] * o, i[7] = i[7] * o;
					else if ("rotation" == t) {
						var c = o * Math.PI / 180,
							u = i[0],
							d = i[1];
						i[0] = u * Math.cos(c) - d * Math.sin(c), i[1] = d * Math.cos(c) + u * Math.sin(c), u = i[4], d = i[5], i[4] = u * Math.cos(c) - d * Math.sin(c), i[5] = d * Math.cos(c) + u * Math.sin(c), u = i[6], d = i[7], i[6] = u * Math.cos(c) - d * Math.sin(c), i[7] = d * Math.cos(c) + u * Math.sin(c)
					}
					return "rotation" == t && (0 != n && (e = oo.transformPoints(e, "x", a)), 0 != r && (e = oo.transformPoints(e, "y", l))), e
				}
			}, oo.makeID = function(e, t, o) {
				var n;
				z_d("13.5"), zot(e) && (e = "mixed"), zot(t) && (t = 5), zot(o) && (o = "uppercase");
				var r = [2, 3, 4, 5, 6, 7, 8, 9],
					i = "abcdefghjkmnpqrstuvwxyz".split("");
				n = e.constructor === Array ? e : "numbers" == e ? r : "letters" == e ? i : r.concat(i);
				for (var a, l, s = "", c = 0; c < t; c++) a = n[Math.floor(Math.random() * n.length)], l = Math.random(), "uppercase" == o || "mixed" == o && .5 < l ? a.toUpperCase && (a = a.toUpperCase()) : a.toLowerCase && (a = a.toLowerCase()), s += String(a);
				return s
			}, oo.swapProperties = function(e, t, o) {
				if (z_d("17.1"), zot(t) || zot(o) || zot(t[e]) || zot(o[e])) return !1;
				var n = o[e];
				return o[e] = t[e], t[e] = n, !0
			}, oo.mobile = function(e) {
				return z_d("28"), zot(e) && (e = !0), /ip(hone|od|ad)/i.test(navigator.userAgent) ? "ios" : /android|nexus/i.test(navigator.userAgent) ? "android" : /blackberry/i.test(navigator.userAgent) ? "blackberry" : /nokia|phone|mobile/i.test(navigator.userAgent) ? "windows" : /opera mini|webos/i.test(navigator.userAgent) ? "other" : !(!e || void 0 === window.orientation) && (!/safari/i.test(navigator.userAgent) || "ios")
			}, oo.vee = function(e) {
				return z_d("28.5"), !zot(e) && ("Pick" == e.type || Array.isArray(e) || e.constructor == {}.constructor && (!zot(e.max) || !zot(e.noPick)) || "function" == typeof e)
			}, oo.extend = function(e, t, o, n, r) {
				var i;
				if (i = zob(oo.extend, arguments, "subclass, superclass, override, prefix, prototype")) return i;
				if (!zot(e) && !zot(t)) {
					zot(n) && (n = "super"), zot(o) && (o = []), Array.isArray(o) || (o = [o]), zot(r) && (r = !0);
					var a = {};
					for (var l in e.prototype) Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(e.prototype, l));
					for (l in h.prototype = t.prototype, e.prototype = new h, a) Object.defineProperty(e.prototype, l, Object.getOwnPropertyDescriptor(a, l));
					var s = e.prototype,
						c = Object.getPrototypeOf && Object.getPrototypeOf(s) || s.__proto__;
					if (c) {
						var u;
						s[(n += "_") + "constructor"] = c.constructor;
						for (var d = 0; d < o.length; d++) "function" == typeof c[u = o[d]] && (s[n + u] = c[u]);
						if (r)
							for (u in c) s.hasOwnProperty(u) && "function" == typeof c[u] && (s[n + u] = c[u])
					}
					return e
				}

				function h() {
					this.constructor = e
				}
				zon && e != oo.StageGL && zog("zim.extend() - please supply a class and its superclass")
			}, oo.copyCheck = !1, oo.copy = function(e, t, o) {
				if (oo.copyCheck || (z_d("10"), oo.copyCheck = !0), zot(t) && (t = !1), zot(o) && (o = !0), null == e || !(e instanceof Array || e.constructor == {}.constructor)) return t && null != e && e.clone && e.type && ("Container" != e.type && "Stage" != e.type && "StageGL" != e.type || o) ? e.clone() : e;
				if (e instanceof Array) {
					for (var n = [], r = 0; r < e.length; r++) n[r] = oo.copy(e[r], t, o);
					return n
				}
				if (e.constructor == {}.constructor) {
					var i = {};
					for (var a in e) {
						var l = oo.copy(e[a], t, o);
						e.hasOwnProperty(a) && (i[a] = l)
					}
					return i
				}
			}, oo.mergeCheck = !1, oo.merge = function() {
				oo.mergeCheck || (z_d("12"), oo.mergeCheck = !0);
				var e, t, o = {};
				for (e = 0; e < arguments.length; e++)
					for (t in arguments[e]) arguments[e].hasOwnProperty(t) && (o[t] = arguments[e][t]);
				return o
			}, oo.arraysEqual = function(e, t, o) {
				if (z_d("11"), zot(e) || zot(t)) return !1;
				if (zot(o) && (o = !0), e.length != t.length) return !1;
				for (var n = 0; n < e.length; n++)
					if (e[n] instanceof Array && t[n] instanceof Array) {
						if (!oo.arraysEqual(e[n], t[n], o)) return !1
					} else {
						if (o && e[n] != t[n]) return !1;
						if (!o) return oo.arraysEqual(e.sort(), t.sort(), !0)
					}
				return !0
			}, oo.isEmpty = function(e) {
				if (z_d("11.5"), !zot(e)) {
					var t = 0;
					for (var o in e) {
						t++;
						break
					}
					return 0 == t
				}
			}, oo.isJSON = function(e) {
				z_d("11.6");
				try {
					return JSON.parse(e).constructor == {}.constructor
				} catch (e) {
					return !1
				}
			}, oo.zut = function(e) {
				if (zot(e) || "object" == typeof e) return !0
			}, oo.zimDecimalCheck = !1, oo.decimals = function(e, t, o, n, r, i, a) {
				if (oo.zimDecimalCheck || z_d("13"), oo.zimDecimalCheck = !0, zot(e)) return 0;
				zot(t) && (t = 1), zot(o) && (o = 0), zot(n) && (n = 0), zot(n) && (n = 0), zot(r) && (r = !0), zot(i) && (i = !1);
				var l = Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
				if (i) {
					var s = l - Math.floor(l);
					l = oo.decimals(Math.floor(l) + 60 * s / 100, 2)
				}
				var c = oo.sign(l);
				if (0 < o) {
					var u = String(l).indexOf("."),
						d = String(l).length;
					u < 0 && (u = d++, l += ".");
					for (var h = 0; h < o - (d - u - 1); h++) l += "0"
				}
				if (0 < n) {
					-1 == c && (l = l.substr(1, l.length - 1));
					u = String(l).indexOf("."), d = String(l).length;
					var g = u < 0 ? d : u;
					for (h = 0; h < n - g; h++) l = "0" + l; - 1 == c && (l = "-" + l)
				}
				return 0 < o + n && !r && 0 == Number(l) && (l = 0), i && (l = String(l).replace(".", ":")), oo.zut(a) ? l : null
			}, oo.zimSignCheck = !1, oo.sign = function(e) {
				return oo.zimSignCheck || z_d("13.1"), oo.zimSignCheck = !0, e ? e < 0 ? -1 : 1 : 0
			}, oo.constrain = function(e, t, o, n) {
				if (z_d("13.2"), !zot(e)) return zot(t) && (t = 0), zot(o) && (o = Number.MAX_VALUE), o < t && (o = max2 = t, t = max2), zot(n) && (n = !1), n && e < 0 ? Math.max(-o, Math.min(e, -t)) : Math.max(t, Math.min(e, o))
			}, oo.zimDistCheck = !1, oo.dist = function(e, t, o, n) {
				if (oo.zimDistCheck || z_d("13.3"), oo.zimDistCheck = !0, !zot(e) && !zot(t)) return zot(e.x) || zot(t.x) ? (zot(o) && (o = 0), zot(n) && (n = 0)) : (n = t.y, o = t.x, t = e.y, e = e.x), Math.sqrt(Math.pow(o - e, 2) + Math.pow(n - t, 2))
			}, oo.zimRectIntersectCheck = !1, oo.rectIntersect = function(e, t, o) {
				return oo.zimRectIntersectCheck || z_d("13.32"), oo.zimRectIntersectCheck = !0, zot(o) && (o = 0), !(e.x >= t.x + t.width + o || e.x + e.width + o <= t.x || e.y >= t.y + t.height + o || e.y + e.height + o <= t.y)
			}, oo.zimBoundsAroundPointsCheck = !1, oo.boundsAroundPoints = function(e) {
				oo.zimBoundsAroundPointsCheck || z_d("13.34"), oo.zimBoundsAroundPointsCheck = !0;
				for (var t = 1e4, o = 1e4, n = -1e4, r = -1e4, i = 0; i < e.length; i++) {
					var a = e[i];
					a.x < t && (t = a.x), a.x > n && (n = a.x), a.y < o && (o = a.y), a.y > r && (r = a.y)
				}
				return {
					x: t,
					y: o,
					width: n - t,
					height: r - o
				}
			}, oo.angle = function(e, t, o, n) {
				if (z_d("13.4"), !zot(e) && !zot(t)) return zot(o) && (o = e, e = 0), zot(n) && (n = t, t = 0), (180 * Math.atan2(n - t, o - e) / Math.PI + 360) % 360
			}, oo.TAU = 2 * Math.PI, oo.DEG = 180 / Math.PI, oo.RAD = Math.PI / 180, oo.smoothStep = function(e, t, o) {
				z_d("13.7");
				var n = oo.constrain((e - t) / (o - t), 0, 1);
				return n * n * n * (n * (6 * n - 15) + 10)
			}, oo.Noise = function(e) {
				"use strict";
				z_d("13.9"), zot(e) && (e = 1e6 * Math.random());
				var t = e;
				this.seed = e;
				var F = this,
					G = {};

				function o(e) {
					var t = new Uint32Array(1);
					return t[0] = 1664525 * e[0] + 1013904223, t
				}

				function n(e, t, o) {
					this.dx = -t - e * G.SQUISH_2D, this.dy = -o - e * G.SQUISH_2D, this.xsb = t, this.ysb = o
				}

				function r(e, t, o, n) {
					this.dx = -t - e * G.SQUISH_3D, this.dy = -o - e * G.SQUISH_3D, this.dz = -n - e * G.SQUISH_3D, this.xsb = t, this.ysb = o, this.zsb = n
				}

				function i(e, t, o, n, r) {
					this.dx = -t - e * G.SQUISH_4D, this.dy = -o - e * G.SQUISH_4D, this.dz = -n - e * G.SQUISH_4D, this.dw = -r - e * G.SQUISH_4D, this.xsb = t, this.ysb = o, this.zsb = n, this.wsb = r
				}
				G.NORM_2D = 1 / 47, G.NORM_3D = 1 / 103, G.NORM_4D = 1 / 30, G.SQUISH_2D = (Math.sqrt(3) - 1) / 2, G.SQUISH_3D = (Math.sqrt(4) - 1) / 3, G.SQUISH_4D = (Math.sqrt(5) - 1) / 4, G.STRETCH_2D = (1 / Math.sqrt(3) - 1) / 2, G.STRETCH_3D = (1 / Math.sqrt(4) - 1) / 3, G.STRETCH_4D = (1 / Math.sqrt(5) - 1) / 4, G.base2D = [
					[1, 1, 0, 1, 0, 1, 0, 0, 0],
					[1, 1, 0, 1, 0, 1, 2, 1, 1]
				], G.base3D = [
					[0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
					[2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 3, 1, 1, 1],
					[1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1]
				], G.base4D = [
					[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
					[3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1, 1, 1, 1],
					[1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1],
					[3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1]
				], G.gradients2D = [5, 2, 2, 5, -5, 2, -2, 5, 5, -2, 2, -5, -5, -2, -2, -5], G.gradients3D = [-11, 4, 4, -4, 11, 4, -4, 4, 11, 11, 4, 4, 4, 11, 4, 4, 4, 11, -11, -4, 4, -4, -11, 4, -4, -4, 11, 11, -4, 4, 4, -11, 4, 4, -4, 11, -11, 4, -4, -4, 11, -4, -4, 4, -11, 11, 4, -4, 4, 11, -4, 4, 4, -11, -11, -4, -4, -4, -11, -4, -4, -4, -11, 11, -4, -4, 4, -11, -4, 4, -4, -11], G.gradients4D = [3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3], G.lookupPairs2D = [0, 1, 1, 0, 4, 1, 17, 0, 20, 2, 21, 2, 22, 5, 23, 5, 26, 4, 39, 3, 42, 4, 43, 3], G.lookupPairs3D = [0, 2, 1, 1, 2, 2, 5, 1, 6, 0, 7, 0, 32, 2, 34, 2, 129, 1, 133, 1, 160, 5, 161, 5, 518, 0, 519, 0, 546, 4, 550, 4, 645, 3, 647, 3, 672, 5, 673, 5, 674, 4, 677, 3, 678, 4, 679, 3, 680, 13, 681, 13, 682, 12, 685, 14, 686, 12, 687, 14, 712, 20, 714, 18, 809, 21, 813, 23, 840, 20, 841, 21, 1198, 19, 1199, 22, 1226, 18, 1230, 19, 1325, 23, 1327, 22, 1352, 15, 1353, 17, 1354, 15, 1357, 17, 1358, 16, 1359, 16, 1360, 11, 1361, 10, 1362, 11, 1365, 10, 1366, 9, 1367, 9, 1392, 11, 1394, 11, 1489, 10, 1493, 10, 1520, 8, 1521, 8, 1878, 9, 1879, 9, 1906, 7, 1910, 7, 2005, 6, 2007, 6, 2032, 8, 2033, 8, 2034, 7, 2037, 6, 2038, 7, 2039, 6], G.lookupPairs4D = [0, 3, 1, 2, 2, 3, 5, 2, 6, 1, 7, 1, 8, 3, 9, 2, 10, 3, 13, 2, 16, 3, 18, 3, 22, 1, 23, 1, 24, 3, 26, 3, 33, 2, 37, 2, 38, 1, 39, 1, 41, 2, 45, 2, 54, 1, 55, 1, 56, 0, 57, 0, 58, 0, 59, 0, 60, 0, 61, 0, 62, 0, 63, 0, 256, 3, 258, 3, 264, 3, 266, 3, 272, 3, 274, 3, 280, 3, 282, 3, 2049, 2, 2053, 2, 2057, 2, 2061, 2, 2081, 2, 2085, 2, 2089, 2, 2093, 2, 2304, 9, 2305, 9, 2312, 9, 2313, 9, 16390, 1, 16391, 1, 16406, 1, 16407, 1, 16422, 1, 16423, 1, 16438, 1, 16439, 1, 16642, 8, 16646, 8, 16658, 8, 16662, 8, 18437, 6, 18439, 6, 18469, 6, 18471, 6, 18688, 9, 18689, 9, 18690, 8, 18693, 6, 18694, 8, 18695, 6, 18696, 9, 18697, 9, 18706, 8, 18710, 8, 18725, 6, 18727, 6, 131128, 0, 131129, 0, 131130, 0, 131131, 0, 131132, 0, 131133, 0, 131134, 0, 131135, 0, 131352, 7, 131354, 7, 131384, 7, 131386, 7, 133161, 5, 133165, 5, 133177, 5, 133181, 5, 133376, 9, 133377, 9, 133384, 9, 133385, 9, 133400, 7, 133402, 7, 133417, 5, 133421, 5, 133432, 7, 133433, 5, 133434, 7, 133437, 5, 147510, 4, 147511, 4, 147518, 4, 147519, 4, 147714, 8, 147718, 8, 147730, 8, 147734, 8, 147736, 7, 147738, 7, 147766, 4, 147767, 4, 147768, 7, 147770, 7, 147774, 4, 147775, 4, 149509, 6, 149511, 6, 149541, 6, 149543, 6, 149545, 5, 149549, 5, 149558, 4, 149559, 4, 149561, 5, 149565, 5, 149566, 4, 149567, 4, 149760, 9, 149761, 9, 149762, 8, 149765, 6, 149766, 8, 149767, 6, 149768, 9, 149769, 9, 149778, 8, 149782, 8, 149784, 7, 149786, 7, 149797, 6, 149799, 6, 149801, 5, 149805, 5, 149814, 4, 149815, 4, 149816, 7, 149817, 5, 149818, 7, 149821, 5, 149822, 4, 149823, 4, 149824, 37, 149825, 37, 149826, 36, 149829, 34, 149830, 36, 149831, 34, 149832, 37, 149833, 37, 149842, 36, 149846, 36, 149848, 35, 149850, 35, 149861, 34, 149863, 34, 149865, 33, 149869, 33, 149878, 32, 149879, 32, 149880, 35, 149881, 33, 149882, 35, 149885, 33, 149886, 32, 149887, 32, 150080, 49, 150082, 48, 150088, 49, 150098, 48, 150104, 47, 150106, 47, 151873, 46, 151877, 45, 151881, 46, 151909, 45, 151913, 44, 151917, 44, 152128, 49, 152129, 46, 152136, 49, 152137, 46, 166214, 43, 166215, 42, 166230, 43, 166247, 42, 166262, 41, 166263, 41, 166466, 48, 166470, 43, 166482, 48, 166486, 43, 168261, 45, 168263, 42, 168293, 45, 168295, 42, 168512, 31, 168513, 28, 168514, 31, 168517, 28, 168518, 25, 168519, 25, 280952, 40, 280953, 39, 280954, 40, 280957, 39, 280958, 38, 280959, 38, 281176, 47, 281178, 47, 281208, 40, 281210, 40, 282985, 44, 282989, 44, 283001, 39, 283005, 39, 283208, 30, 283209, 27, 283224, 30, 283241, 27, 283256, 22, 283257, 22, 297334, 41, 297335, 41, 297342, 38, 297343, 38, 297554, 29, 297558, 24, 297562, 29, 297590, 24, 297594, 21, 297598, 21, 299365, 26, 299367, 23, 299373, 26, 299383, 23, 299389, 20, 299391, 20, 299584, 31, 299585, 28, 299586, 31, 299589, 28, 299590, 25, 299591, 25, 299592, 30, 299593, 27, 299602, 29, 299606, 24, 299608, 30, 299610, 29, 299621, 26, 299623, 23, 299625, 27, 299629, 26, 299638, 24, 299639, 23, 299640, 22, 299641, 22, 299642, 21, 299645, 20, 299646, 21, 299647, 20, 299648, 61, 299649, 60, 299650, 61, 299653, 60, 299654, 59, 299655, 59, 299656, 58, 299657, 57, 299666, 55, 299670, 54, 299672, 58, 299674, 55, 299685, 52, 299687, 51, 299689, 57, 299693, 52, 299702, 54, 299703, 51, 299704, 56, 299705, 56, 299706, 53, 299709, 50, 299710, 53, 299711, 50, 299904, 61, 299906, 61, 299912, 58, 299922, 55, 299928, 58, 299930, 55, 301697, 60, 301701, 60, 301705, 57, 301733, 52, 301737, 57, 301741, 52, 301952, 79, 301953, 79, 301960, 76, 301961, 76, 316038, 59, 316039, 59, 316054, 54, 316071, 51, 316086, 54, 316087, 51, 316290, 78, 316294, 78, 316306, 73, 316310, 73, 318085, 77, 318087, 77, 318117, 70, 318119, 70, 318336, 79, 318337, 79, 318338, 78, 318341, 77, 318342, 78, 318343, 77, 430776, 56, 430777, 56, 430778, 53, 430781, 50, 430782, 53, 430783, 50, 431e3, 75, 431002, 72, 431032, 75, 431034, 72, 432809, 74, 432813, 69, 432825, 74, 432829, 69, 433032, 76, 433033, 76, 433048, 75, 433065, 74, 433080, 75, 433081, 74, 447158, 71, 447159, 68, 447166, 71, 447167, 68, 447378, 73, 447382, 73, 447386, 72, 447414, 71, 447418, 72, 447422, 71, 449189, 70, 449191, 70, 449197, 69, 449207, 68, 449213, 69, 449215, 68, 449408, 67, 449409, 67, 449410, 66, 449413, 64, 449414, 66, 449415, 64, 449416, 67, 449417, 67, 449426, 66, 449430, 66, 449432, 65, 449434, 65, 449445, 64, 449447, 64, 449449, 63, 449453, 63, 449462, 62, 449463, 62, 449464, 65, 449465, 63, 449466, 65, 449469, 63, 449470, 62, 449471, 62, 449472, 19, 449473, 19, 449474, 18, 449477, 16, 449478, 18, 449479, 16, 449480, 19, 449481, 19, 449490, 18, 449494, 18, 449496, 17, 449498, 17, 449509, 16, 449511, 16, 449513, 15, 449517, 15, 449526, 14, 449527, 14, 449528, 17, 449529, 15, 449530, 17, 449533, 15, 449534, 14, 449535, 14, 449728, 19, 449729, 19, 449730, 18, 449734, 18, 449736, 19, 449737, 19, 449746, 18, 449750, 18, 449752, 17, 449754, 17, 449784, 17, 449786, 17, 451520, 19, 451521, 19, 451525, 16, 451527, 16, 451528, 19, 451529, 19, 451557, 16, 451559, 16, 451561, 15, 451565, 15, 451577, 15, 451581, 15, 451776, 19, 451777, 19, 451784, 19, 451785, 19, 465858, 18, 465861, 16, 465862, 18, 465863, 16, 465874, 18, 465878, 18, 465893, 16, 465895, 16, 465910, 14, 465911, 14, 465918, 14, 465919, 14, 466114, 18, 466118, 18, 466130, 18, 466134, 18, 467909, 16, 467911, 16, 467941, 16, 467943, 16, 468160, 13, 468161, 13, 468162, 13, 468163, 13, 468164, 13, 468165, 13, 468166, 13, 468167, 13, 580568, 17, 580570, 17, 580585, 15, 580589, 15, 580598, 14, 580599, 14, 580600, 17, 580601, 15, 580602, 17, 580605, 15, 580606, 14, 580607, 14, 580824, 17, 580826, 17, 580856, 17, 580858, 17, 582633, 15, 582637, 15, 582649, 15, 582653, 15, 582856, 12, 582857, 12, 582872, 12, 582873, 12, 582888, 12, 582889, 12, 582904, 12, 582905, 12, 596982, 14, 596983, 14, 596990, 14, 596991, 14, 597202, 11, 597206, 11, 597210, 11, 597214, 11, 597234, 11, 597238, 11, 597242, 11, 597246, 11, 599013, 10, 599015, 10, 599021, 10, 599023, 10, 599029, 10, 599031, 10, 599037, 10, 599039, 10, 599232, 13, 599233, 13, 599234, 13, 599235, 13, 599236, 13, 599237, 13, 599238, 13, 599239, 13, 599240, 12, 599241, 12, 599250, 11, 599254, 11, 599256, 12, 599257, 12, 599258, 11, 599262, 11, 599269, 10, 599271, 10, 599272, 12, 599273, 12, 599277, 10, 599279, 10, 599282, 11, 599285, 10, 599286, 11, 599287, 10, 599288, 12, 599289, 12, 599290, 11, 599293, 10, 599294, 11, 599295, 10], G.p2D = [0, 0, 1, -1, 0, 0, -1, 1, 0, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 2, 1, 0, 0, 0], G.p3D = [0, 0, 1, -1, 0, 0, 1, 0, -1, 0, 0, -1, 1, 0, 0, 0, 1, -1, 0, 0, -1, 0, 1, 0, 0, -1, 1, 0, 2, 1, 1, 0, 1, 1, 1, -1, 0, 2, 1, 0, 1, 1, 1, -1, 1, 0, 2, 0, 1, 1, 1, -1, 1, 1, 1, 3, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 3, 1, 0, 2, 1, 3, 0, 2, 1, 3, 0, 1, 2, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, -1, 1, 2, 0, 0, 0, 0, 1, -1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, -1, 2, 3, 1, 1, 1, 2, 0, 0, 2, 2, 3, 1, 1, 1, 2, 2, 0, 0, 2, 3, 1, 1, 1, 2, 0, 2, 0, 2, 1, 1, -1, 1, 2, 0, 0, 2, 2, 1, 1, -1, 1, 2, 2, 0, 0, 2, 1, -1, 1, 1, 2, 0, 0, 2, 2, 1, -1, 1, 1, 2, 0, 2, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0], G.p4D = [0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 2, 1, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 2, 1, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 2, 0, 1, 1, 0, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 2, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 2, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 2, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 1, 4, 2, 1, 1, 0, 4, 1, 2, 1, 0, 4, 1, 1, 2, 0, 1, 4, 2, 1, 0, 1, 4, 1, 2, 0, 1, 4, 1, 1, 0, 2, 1, 4, 2, 0, 1, 1, 4, 1, 0, 2, 1, 4, 1, 0, 1, 2, 1, 4, 0, 2, 1, 1, 4, 0, 1, 2, 1, 4, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1, 2, 0, 1, 1, 0, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 1, 2, 1, 0, 0, 1, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 1, 2, 0, 1, 0, 1, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 1, 2, 0, 0, 1, 1, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 2, 0, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 0, 2, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 0, 0, 2, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 0, 2, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 0, 2, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 2, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 0, 2, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, -1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, -1, 1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, -1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 4, 1, 1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, 1, -1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, 1, 1, -1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, 1, 1, 1, -1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, -1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, 1, -1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, 1, 1, -1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, -1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, -1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 1, -1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, -1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, -1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, -1, 1, 1, 1];
				for (var a = [], l = 0; l < G.p2D.length; l += 4) {
					for (var s = G.base2D[G.p2D[l]], c = null, u = null, d = 0; d < s.length; d += 3) u = new n(s[d], s[d + 1], s[d + 2]), null === c ? a[l / 4] = u : c.next = u, c = u;
					u.next = new n(G.p2D[l + 1], G.p2D[l + 2], G.p2D[l + 3])
				}
				this.lookup2D = [];
				for (l = 0; l < G.lookupPairs2D.length; l += 2) this.lookup2D[G.lookupPairs2D[l]] = a[G.lookupPairs2D[l + 1]];
				var h = [];
				for (l = 0; l < G.p3D.length; l += 9) {
					for (s = G.base3D[G.p3D[l]], c = null, u = null, d = 0; d < s.length; d += 4) u = new r(s[d], s[d + 1], s[d + 2], s[d + 3]), null === c ? h[l / 9] = u : c.next = u, c = u;
					u.next = new r(G.p3D[l + 1], G.p3D[l + 2], G.p3D[l + 3], G.p3D[l + 4]), u.next.next = new r(G.p3D[l + 5], G.p3D[l + 6], G.p3D[l + 7], G.p3D[l + 8])
				}
				this.lookup3D = [];
				for (l = 0; l < G.lookupPairs3D.length; l += 2) this.lookup3D[G.lookupPairs3D[l]] = h[G.lookupPairs3D[l + 1]];
				var g = [];
				for (l = 0; l < G.p4D.length; l += 16) {
					for (s = G.base4D[G.p4D[l]], c = null, u = null, d = 0; d < s.length; d += 5) u = new i(s[d], s[d + 1], s[d + 2], s[d + 3], s[d + 4]), null === c ? g[l / 16] = u : c.next = u, c = u;
					u.next = new i(G.p4D[l + 1], G.p4D[l + 2], G.p4D[l + 3], G.p4D[l + 4], G.p4D[l + 5]), u.next.next = new i(G.p4D[l + 6], G.p4D[l + 7], G.p4D[l + 8], G.p4D[l + 9], G.p4D[l + 10]), u.next.next.next = new i(G.p4D[l + 11], G.p4D[l + 12], G.p4D[l + 13], G.p4D[l + 14], G.p4D[l + 15])
				}
				this.lookup4D = [];
				for (l = 0; l < G.lookupPairs4D.length; l += 2) this.lookup4D[G.lookupPairs4D[l]] = g[G.lookupPairs4D[l + 1]];
				this.perm = new Uint8Array(256), this.perm2D = new Uint8Array(256), this.perm3D = new Uint8Array(256), this.perm4D = new Uint8Array(256);
				var p = new Uint8Array(256);
				for (l = 0; l < 256; l++) p[l] = l;
				(e = new Uint32Array(1))[0] = t, e = o(o(o(e)));
				for (l = 255; 0 <= l; l--) {
					e = o(e);
					var f = new Uint32Array(1);
					f[0] = (e[0] + 31) % (l + 1), f[0] < 0 && (f[0] += l + 1), this.perm[l] = p[f[0]], this.perm2D[l] = 14 & this.perm[l], this.perm3D[l] = this.perm[l] % 24 * 3, this.perm4D[l] = 252 & this.perm[l], p[f[0]] = p[l]
				}
				this.simplex1D = function(e) {
					return F.simplex2D(e, 1)
				}, this.simplex2D = function(e, t) {
					var o = (e + t) * G.STRETCH_2D,
						n = [e + o, t + o],
						r = n[0],
						i = n[1],
						a = [Math.floor(r), Math.floor(i)],
						l = a[0],
						s = a[1],
						c = (l + s) * G.SQUISH_2D,
						u = [e - (l + c), t - (s + c)],
						d = u[0],
						h = u[1],
						g = [r - l, i - s],
						p = g[0],
						f = g[1],
						m = p + f,
						z = new Uint32Array(4);
					z[0] = p - f + 1, z[1] = m, z[2] = m + f, z[3] = m + p;
					for (var v = z[0] | z[1] << 1 | z[2] << 2 | z[3] << 4, b = F.lookup2D[v], y = 0; void 0 !== b;) {
						var w = [d + b.dx, h + b.dy],
							C = w[0],
							x = w[1],
							k = 2 - C * C - x * x;
						if (0 < k) {
							var T = [l + b.xsb, s + b.ysb],
								A = T[0],
								P = T[1],
								B = F.perm2D[F.perm[255 & A] + P & 255];
							y += (k *= k) * k * (G.gradients2D[B] * C + G.gradients2D[B + 1] * x)
						}
						b = b.next
					}
					return y * G.NORM_2D
				}, this.simplex3D = function(e, t, o) {
					var n = (e + t + o) * G.STRETCH_3D,
						r = [e + n, t + n, o + n],
						i = r[0],
						a = r[1],
						l = r[2],
						s = [Math.floor(i), Math.floor(a), Math.floor(l)],
						c = s[0],
						u = s[1],
						d = s[2],
						h = (c + u + d) * G.SQUISH_3D,
						g = [e - (c + h), t - (u + h), o - (d + h)],
						p = g[0],
						f = g[1],
						m = g[2],
						z = [i - c, a - u, l - d],
						v = z[0],
						b = z[1],
						y = z[2],
						w = v + b + y,
						C = new Uint32Array(7);
					C[0] = b - y + 1, C[1] = v - b + 1, C[2] = v - y + 1, C[3] = w, C[4] = w + y, C[5] = w + b, C[6] = w + v;
					for (var x = C[0] | C[1] << 1 | C[2] << 2 | C[3] << 3 | C[4] << 5 | C[5] << 7 | C[6] << 9, k = F.lookup3D[x], T = 0; void 0 !== k;) {
						var A = [p + k.dx, f + k.dy, m + k.dz],
							P = A[0],
							B = A[1],
							I = A[2],
							S = 2 - P * P - B * B - I * I;
						if (0 < S) {
							var M = [c + k.xsb, u + k.ysb, d + k.zsb],
								E = M[0],
								O = M[1],
								j = M[2],
								L = F.perm3D[F.perm[F.perm[255 & E] + O & 255] + j & 255];
							T += (S *= S) * S * (G.gradients3D[L] * P + G.gradients3D[L + 1] * B + G.gradients3D[L + 2] * I)
						}
						k = k.next
					}
					return T * G.NORM_3D
				}, this.simplex4D = function(e, t, o, n) {
					var r = (e + t + o + n) * G.STRETCH_4D,
						i = [e + r, t + r, o + r, n + r],
						a = i[0],
						l = i[1],
						s = i[2],
						c = i[3],
						u = [Math.floor(a), Math.floor(l), Math.floor(s), Math.floor(c)],
						d = u[0],
						h = u[1],
						g = u[2],
						p = u[3],
						f = (d + h + g + p) * G.SQUISH_4D,
						m = e - (d + f),
						z = t - (h + f),
						v = o - (g + f),
						b = n - (p + f),
						y = [a - d, l - h, s - g, c - p],
						w = y[0],
						C = y[1],
						x = y[2],
						k = y[3],
						T = w + C + x + k,
						A = new Uint32Array(11);
					A[0] = x - k + 1, A[1] = C - x + 1, A[2] = C - k + 1, A[3] = w - C + 1, A[4] = w - x + 1, A[5] = w - k + 1, A[6] = T << 6, A[7] = T + k, A[8] = T + x, A[9] = T + C, A[10] = T + w;
					for (var P = A[0] | A[1] << 1 | A[2] << 2 | A[3] << 3 | A[4] << 4 | A[5] << 5 | A[6] << 6 | A[7] << 8 | A[8] << 11 | A[9] << 14 | A[10] << 17, B = F.lookup4D[P], I = 0; void 0 !== B;) {
						var S = [m + B.dx, z + B.dy, v + B.dz, b + B.dw],
							M = S[0],
							E = S[1],
							O = S[2],
							j = S[3],
							L = 2 - M * M - E * E - O * O - j * j;
						if (0 < L) {
							var D = [d + B.xsb, h + B.ysb, g + B.zsb, p + B.wsb],
								Y = D[0],
								X = D[1],
								R = D[2],
								_ = D[3],
								W = F.perm4D[F.perm[F.perm[F.perm[255 & Y] + X & 255] + R & 255] + _ & 255];
							I += (L *= L) * L * (G.gradients4D[W] * M + G.gradients4D[W + 1] * E + G.gradients4D[W + 2] * O + G.gradients4D[W + 3] * j)
						}
						B = B.next
					}
					return I * G.NORM_4D
				}
			}, oo.Point = function(e, t, o, n, r, i, a, l, s, c) {
				z_d("13.45"), zot(e) && (e = 0), zot(t) && (t = 0), zot(o) && (o = 0), zot(n) && (n = 0), zot(r) && (r = 0), zot(i) && (i = 0), zot(a) && (a = 0), zot(l) && (l = 0), zot(s) && (s = 0), zot(c) && (c = 0), this.x = e, this.y = t, this.z = o, this.q = n, this.r = r, this.s = i, this.t = a, this.u = l, this.v = s, this.w = c
			}, oo.Boundary = function(e, t, o, n) {
				z_d("13.46"), zot(e) || zot(t) || zot(o) || zot(n) || (this.x = e, this.y = t, this.width = o, this.height = n, this.contract = function(e, t, o, n) {
					return zot(e) || (zot(t) && (t = e), zot(o) ? o = 2 * e : o += e, zot(n) ? n = 2 * t : n += t, this.x += e, this.y += t, this.width -= o, this.height -= n), this
				})
			}, oo.Damp = function(e, t) {
				z_d("14");
				var o;
				if (o = zob(oo.Damp, arguments, "startValue, damp", this)) return o;
				this.lastValue = zot(e) ? 0 : e, this.damp = zot(t) ? .1 : t
			}, oo.Damp.prototype.convert = function(e) {
				return this.lastValue = this.lastValue + (e - this.lastValue) * this.damp
			}, oo.Damp.prototype.immediate = function(e) {
				return this.lastValue = e, this
			}, oo.Proportion = function(t, o, n, r, i, a, l) {
				var e, s, c;
				if (e = zob(oo.Proportion, arguments, "baseMin, baseMax, targetMin, targetMax, factor, targetRound, clamp", this)) return e;
				z_d("15"), zot(n) && (n = 0), zot(r) && (r = 1), zot(i) && (i = 1), zot(a) && (a = !1), zot(l) && (l = !0), this.convert = function(e) {
					if (!isNaN(e) && o - t != 0) return l && (e = Math.max(e, t), e = Math.min(e, o)), s = (e - t) / (o - t), c = 0 < i ? n + (r - n) * s : r - (r - n) * s, a && (c = Math.round(c)), c
				}
			}, oo.ProportionDamp = function(e, t, o, n, r, i, a, l) {
				var s;
				if (s = zob(oo.ProportionDamp, arguments, "baseMin, baseMax, targetMin, targetMax, damp, factor, targetRound, clamp", this)) return s;
				z_d("16"), zot(o) && (o = 0), zot(n) && (n = 1), zot(r) && (r = .1), zot(i) && (i = 1), zot(a) && (a = !1), zot(l) && (l = !0), this.damp = r;
				var c, u, d, h, g = this,
					p = 0;
				c = e, p = o;
				var f = setInterval(m, 20);

				function m() {
					isNaN(c) || t - e == 0 || (l && (c = Math.max(c, e), c = Math.min(c, t)), u = (c - e) / (t - e), d = n - o, p += ((h = 0 < i ? o + d * u : n - d * u) - p) * g.damp)
				}
				this.immediate = function(e) {
					return g.convert(e), m(), p = h, a && (p = Math.round(p)), g
				}, this.convert = function(e) {
					return c = e, a ? Math.round(p) : p
				}, this.dispose = function() {
					return clearInterval(f), !0
				}
			}, oo.Dictionary = function(e) {
				z_d("17"), this.length = 0, this.unique = e;
				var o = this.objects = [],
					n = this.values = [];
				this.add = function(e, t) {
					zot(e) || (zot(t) && (t = !0), this.unique && this.remove(e), o.push(e), n.push(t), this.length++)
				}, this.at = function(e) {
					if (!zot(e)) {
						var t = o.indexOf(e);
						return -1 < t ? n[t] : null
					}
				}, this.remove = function(e) {
					if (zot(e)) return !1;
					var t = o.indexOf(e);
					return -1 < t && (o.splice(t, 1), n.splice(t, 1), this.length--, !0)
				}, this.clear = function() {
					return o = this.objects = [], n = this.values = [], this.length = null, this
				}, this.dispose = function() {
					return n = o = null, !(this.length = null)
				}
			}, oo.Hierarchy = function(o, s) {
				z_d("17.5");
				var n, t = this;
				zot(o) || (zot(s) && (s = !1), t.processSimple = function(e) {
					var l = 0,
						t = {};
					return function r(e, i, a, o) {
						var t;
						e.constructor == {}.constructor ? (e.list && (e = (t = e).list), o && t && oo.loop(t, function(e, t) {
							"list" != e && (o[e] = t)
						}), oo.loop(e, function(e, t) {
							var o = {},
								n = i["id" + l] = {
									obj: e,
									level: a,
									open: s,
									opened: !1,
									list: o
								};
							l++, r(t, o, a + 1, n)
						})) : Array.isArray(e) && oo.loop(e, function(e) {
							i["id" + l] = {
								obj: e
							}, l++
						})
					}(o, t, 0), n = l, t
				}, t.processComplex = function(e) {
					var r = 0;
					return function o(e, n) {
						oo.loop(e, function(e, t) {
							t.level = n, zot(t.open) && (t.open = s), zot(t.opened) && (t.opened = !1), t.list && o(t.list, n + 1), r++
						})
					}(e, 0), n = r, e
				}, zot(o.id0) ? t.data = t.processSimple(o) : t.data = t.processComplex(o), t.getLinearList = function(e) {
					return zot(e) && (e = t.data), r(e)[0]
				}, t.getLinearIDs = function(e) {
					return zot(e) && (e = t.data), r(e)[1]
				}, t.getData = function(n) {
					var r;
					return function o(e) {
						oo.loop(e, function(e, t) {
							if (e == n) return r = t;
							o(t.list)
						})
					}(t.data), r
				}, t.getNextSibling = function(n) {
					var r, i;
					return function o(e) {
						oo.loop(e, function(e, t) {
							if (!i && r) return i = e;
							e == n ? r = t : o(t.list)
						})
					}(t.data), i
				}, t.getPrevSibling = function(r) {
					var i = [];
					return function o(e, n) {
						oo.loop(e, function(e, t) {
							if (e == r) return i[n] || i[n - 1];
							i[n] = e, o(t.list, n + 1)
						})
					}(t.data, 0), answer
				}, Object.defineProperty(t, "length", {
					get: function() {
						return n
					},
					set: function(e) {
						zon && zog("Hierarchy.length is read only")
					}
				}));

				function r(e) {
					var r = [],
						i = [];
					return function o(e, n) {
						oo.loop(e, function(e, t) {
							r.push(t.obj), i.push(e), t.open && o(t.list, n + 1)
						})
					}(e, 0), [r, i]
				}
			}, oo.pickCheck = !1, oo.Pick = function(e) {
				oo.pickCheck || (z_d("17.6"), oo.pickCheck = !0), this.choices = e, this.num = function(e) {
					for (var t = [], o = 0; o < e; o++) t.push(oo.Pick.choose(this));
					return this.choices = oo.Pick.series(t), this
				};
				var r = this;
				this.loop = function(e, t) {
					for (var o, n = 0; n < e; n++)
						if (void 0 !== (o = t(oo.Pick.choose(r), n, e))) return o
				}
			}, oo.Pick.prototype.type = "Pick", oo.Pick.series = function() {
				return oo.pickCheck || (z_d("17.6"), oo.pickCheck = !0), oo.series.apply(null, arguments)
			}, oo.Pick.rand = function(e, t, o, n) {
				return oo.pickCheck || (z_d("17.6"), oo.pickCheck = !0), oo.rand(e, t, o, n)
			}, oo.Pick.choose = function(e, t, o) {
				if (oo.pickCheck || (z_d("17.6"), oo.pickCheck = !0), null == t && (t = !0), null == e) return e;
				if ("Pick" == e.type || t) {
					var n = e.choices || e;
					if (Array.isArray(n)) {
						var r = n[Math.floor(Math.random() * n.length)];
						return oo.Pick.choose(r)
					}
					return n.constructor === {}.constructor ? zot(n.noPick) ? zot(n.max) ? n : (zot(n.integer) && (n.integer = !1), r = oo.Pick.rand(n.min, n.max, n.integer, n.negative)) : n.noPick : "function" == typeof n ? oo.Pick.choose(n(o)) : e
				}
				return e
			}, oo.scrollX = function(e, t) {
				return z_d("18"), oo.abstractScroll("X", "Left", e, t)
			}, oo.scrollY = function(e, t) {
				return z_d("19"), oo.abstractScroll("Y", "Top", e, t)
			}, oo.abstractScroll = function(e, t, o, n) {
				z_d("20");
				var r = "X" == e ? "Y" : "X";
				if (zot(o)) {
					var i = navigator.applicationName;
					if (-1 != navigator.userAgent.indexOf("Safari") || "Safari" == i);
					return document.documentElement && document.documentElement["scroll" + t] || document.body["scroll" + t]
				}
				if (zot(n)) window.scrollTo(oo["scroll" + r](), o);
				else {
					n < 50 && (n = 50);
					var a = n / 50,
						l = oo["scroll" + e](),
						s = (o - l) / a,
						c = 0,
						u = setInterval(function() {
							c++, l += s, window.scrollTo(oo["scroll" + r](), l), a <= c && (window.scrollTo(oo["scroll" + r](), o), clearInterval(u))
						}, 50)
				}
				return o
			}, oo.windowWidth = function() {
				z_d("21");
				var e = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth,
					t = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
				if (oo.mobile() && !zot(window.orientation) && (t < e && 90 != Math.abs(window.orientation) || e < t && 90 == Math.abs(window.orientation))) {
					var o = e;
					e = t, t = o
				}
				return void 0 !== zimDefaultFrame && zimDefaultFrame.swapRotation ? t : e
			}, oo.windowHeight = function() {
				z_d("22");
				var e = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth,
					t = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
				if (oo.mobile() && !zot(window.orientation) && (t < e && 90 != Math.abs(window.orientation) || e < t && 90 == Math.abs(window.orientation))) {
					var o = e;
					e = t, t = o
				}
				return void 0 !== zimDefaultFrame && zimDefaultFrame.swapRotation ? e : t
			}, oo.getQueryString = function(e) {
				if (z_d("22.5"), zot(e) && (e = location.search.replace("?", "")), "" != e) {
					for (var t = e.split("&"), o = {}, n = 0; n < t.length; n++) {
						var r = t[n].split("=");
						void 0 === o[r[0]] ? o[r[0]] = decodeURIComponent((r[1] + "").replace(/\+/g, "%20")) : "string" == typeof o[r[0]] ? o[r[0]] = [o[r[0]], decodeURIComponent((r[1] + "").replace(/\+/g, "%20"))] : o[r[0]].push(decodeURIComponent((r[1] + "").replace(/\+/g, "%20")))
					}
					return o
				}
			}, oo.swapHTML = function(e, t) {
				return z_d("17.2"), oo.swapProperties("innerHTML", zid(e), zid(t))
			}, oo.urlEncode = function(e) {
				z_d("23");
				e = (e + "").toString();
				return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
			}, oo.urlDecode = function(e) {
				return z_d("24"), decodeURIComponent((e + "").replace(/\+/g, "%20"))
			}, oo.setCookie = function(e, t, o) {
				if (z_d("25"), !zot(e) && !zot(t)) {
					if (o) {
						var n = new Date;
						n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
						var r = "; expires=" + n.toGMTString()
					} else r = "";
					return document.cookie = e + "=" + escape(t) + r + "; path=/", !0
				}
			}, oo.getCookie = function(e) {
				z_d("26");
				var t, o = document.cookie.split(/;\s*/),
					n = new Array;
				for (l = 0; l < o.length; l++) n[(t = o[l].split("="))[0]] = t[1];
				if (void 0 !== n[e]) return unescape(n[e])
			}, oo.deleteCookie = function(e) {
				return z_d("27"), !zot(oo.getCookie(e)) && (oo.setCookie(e, "", -1), !0)
			}, "undefined" == typeof createjs) return zon && zog("ZIM >= 4.3.0 requires createjs namespace to be loaded (import createjs before zim)"), oo;

		function Ee(e, t) {
			t ? (e.mouseChildren = !0, e.mouseEnabled = !0, e._enabled = !0) : (e.mouseChildren = !1, e.mouseEnabled = !1, e._enabled = !1)
		}
		oo.coordinatesCheck = !1, oo.localToGlobal = function(e, t, o, n) {
			if (oo.coordinatesCheck || (z_d("50.43"), oo.coordinatesCheck = !0), null != e && null != t) {
				var r = n.call(o, e, t),
					i = o.stage;
				if (void 0 === zimDefaultFrame) {
					if (!i) return r;
					zimDefaultFrame = {
						stage: i,
						canvas: i.canvas
					}
				}
				return i = i || zimDefaultFrame.stage, r.x /= i && i.scaleX ? i.scaleX : 1, r.y /= i && i.scaleY ? i.scaleY : 1, r
			}
		}, oo.globalToLocal = function(e, t, o, n) {
			if (oo.coordinatesCheck || (z_d("50.43"), oo.coordinatesCheck = !0), null != e && null != t) {
				var r = o.stage;
				if (void 0 === zimDefaultFrame) {
					if (!r) return n.call(o, e, t);
					zimDefaultFrame = {
						stage: r,
						canvas: r.canvas
					}
				}
				return e *= (r = r || zimDefaultFrame.stage).scaleX, t *= r.scaleY, n.call(o, e, t)
			}
		}, oo.localToLocal = function(e, t, o, n) {
			if (oo.coordinatesCheck || (z_d("50.43"), oo.coordinatesCheck = !0), null != e && null != t && null != o) {
				var r = n.localToGlobal(e, t),
					i = n.stage;
				if (void 0 === zimDefaultFrame) {
					if (!i) return o.globalToLocal(r.x, r.y);
					zimDefaultFrame = {
						stage: i,
						canvas: i.canvas
					}
				}
				return o == (i = i || zimDefaultFrame.stage) ? r : r ? o.globalToLocal(r.x, r.y) : void 0
			}
		}, oo.Stage = function(e) {
			if (z_d("50.44"), !zot(e)) {
				var t = "CANVAS" == e.tagName ? e : zid(e);
				zot(t) || (this.cjsStage_constructor(e), this.setBounds(0, 0, t.width, t.height), this.type = "Stage", this.cache = function(e, t, o, n, r, i) {
					if (zot(o))
						if (zot(e)) {
							var a = this.getBounds();
							if (!zot(a)) {
								var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
								e = a.x - l, t = a.y - l, o = a.width + 2 * l, n = a.height + 2 * l
							}
						} else o = e, n = t, t = e = 0;
					return this.cjsStage_cache(e, t, o, n, r, i), this
				}, this.loop = function(e, t, o, n, r) {
					return oo.loop(this, e, t, o, n, r)
				}, this.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, u, d) {
					return oo.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, u, d)
				}, this.localToGlobal = function(e, t) {
					return oo.localToGlobal(e, t, this, this.cjsStage_localToGlobal)
				}, this.globalToLocal = function(e, t) {
					return oo.globalToLocal(e, t, this, this.cjsStage_globalToLocal)
				}, this.localToLocal = function(e, t, o) {
					return oo.localToLocal(e, t, o, this)
				})
			}
		}, oo.extend(oo.Stage, createjs.Stage, ["cache", "localToLocal", "localToGlobal", "globalToLocal"], "cjsStage", !1), oo.StageGL = function(e, t) {
			if (z_d("50.45"), !zot(e)) {
				var o = "CANVAS" == e.tagName ? e : zid(e);
				zot(o) || (this.cjsStageGL_constructor(e, t), this.setBounds(0, 0, o.width, o.height), this.type = "StageGL", this.cache = function(e, t, o, n, r, i) {
					if (zot(o))
						if (zot(e)) {
							var a = this.getBounds();
							if (!zot(a)) {
								var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
								e = a.x - l, t = a.y - l, o = a.width + 2 * l, n = a.height + 2 * l
							}
						} else o = e, n = t, t = e = 0;
					return this.cjsStageGL_cache(e, t, o, n, r, i), this
				}, this.loop = function(e, t, o, n, r) {
					return oo.loop(this, e, t, o, n, r)
				}, this.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, u, d) {
					return oo.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, u, d)
				}, this.localToGlobal = function(e, t) {
					return oo.localToGlobal(e, t, this, this.cjsStageGL_localToGlobal)
				}, this.globalToLocal = function(e, t) {
					return oo.globalToLocal(e, t, this, this.cjsStageGL_globalToLocal)
				}, this.localToLocal = function(e, t, o) {
					return oo.localToLocal(e, t, o, this)
				})
			}
		}, oo.extend(oo.StageGL, createjs.StageGL, ["cache", "localToLocal", "localToGlobal", "globalToLocal"], "cjsStageGL", !1), oo.containerCheck = !1, oo.Container = function(e, t, o, n, r, i, a) {
			var l;
			if (l = zob(oo.Container, arguments, "a, b, c, d, style, group, inherit", this)) return l;
			oo.containerCheck || (z_d("50.5"), oo.containerCheck = !0), this.cjsContainer_constructor(), this.type = "Container", this.group = i;
			var u = this,
				s = !1 === r ? {} : oo.getStyle(this.type, this.group, a);
			zot(e) && (e = null != s.a ? s.a : null), zot(t) && (t = null != s.b ? s.b : null), zot(o) && (o = null != s.c ? s.c : null), zot(n) && (n = null != s.d ? s.d : null);
			var c = d(e, t, o, n);

			function d(e, t, o, n) {
				var r = [];
				return zot(e) ? r = [e, t, o, n] : zot(o) ? (r[0] = 0, r[2] = e, r[1] = 0, r[3] = t) : (r[0] = e, r[2] = o, r[1] = t, r[3] = n), zot(r[3]) && (r[3] = r[2]), r
			}
			zot(e) || this.setBounds(c[0], c[1], c[2], c[3]), this.cache = function(e, t, o, n, r, i, a) {
				var l;
				if (l = zob(u.cache, arguments, "a,b,c,d,scale,options,margin")) return l;
				var s = u.getBounds();
				if (zot(o))
					if (zot(e)) {
						if (!zot(s)) {
							var c = 0 < u.borderWidth ? u.borderWidth / 2 : 0;
							e = s.x - c, t = s.y - c, o = s.width + 2 * c, n = s.height + 2 * c
						}
					} else o = e, n = t, t = e = 0;
				return "Triangle" == u.type && (e -= u.borderWidth ? u.borderWidth : 0, o += u.borderWidth ? 2 * u.borderWidth : 0, t -= u.borderWidth ? u.borderWidth : 0, n += u.borderWidth ? 2 * u.borderWidth : 0), zot(a) && (a = 0), u.cjsContainer_cache(e - a, t - a, o + 2 * a, n + 2 * a, r, i), s && u.setBounds(s.x, s.y, s.width, s.height), u
			}, this.localToGlobal = function(e, t) {
				return oo.localToGlobal(e, t, this, this.cjsContainer_localToGlobal)
			}, this.globalToLocal = function(e, t) {
				return oo.globalToLocal(e, t, this, this.cjsContainer_globalToLocal)
			}, this.localToLocal = function(e, t, o) {
				return oo.localToLocal(e, t, o, this)
			}, !(this.setBounds = function(e, t, o, n) {
				var r = d(e, t, o, n);
				return this.cjsContainer_setBounds(r[0], r[1], r[2], r[3]), this
			}) !== r && De(this, s), this.clone = function() {
				var e = this.getBounds();
				return zot(e) && (e = {
					x: null,
					y: null,
					width: null,
					height: null
				}), this.cloneChildren(this.cloneProps(new oo.Container(e.x, e.y, e.width, e.height, r, this.group, a)))
			}, this.hasProp = function(e) {
				return !zot(this[e]) || this.hasOwnProperty(e)
			}
		}, oo.Container.prototype.dispose = function() {
			return function e(t) {
				t.removeAllEventListeners();
				if (t.numChildren)
					for (var o = t.numChildren - 1; 0 <= o; o--) e(t.getChildAt(o));
				t.parent && t.parent.removeChild(t)
			}(this), !0
		}, zimify(oo.Container.prototype), oo.extend(oo.Container, createjs.Container, ["cache", "setBounds", "clone", "localToLocal", "localToGlobal", "globalToLocal"], "cjsContainer", !1), oo.Shape = function(e, t, o, n, r, i, a, l, s) {
			var c;
			if (c = zob(oo.Shape, arguments, "a, b, c, d, graphics, optimize, style, group, inherit", this)) return c;
			z_d("50.6"), this.cjsShape_constructor(r), this.type = "Shape", this.group = l;
			var u = !1 === a ? {} : oo.getStyle(this.type, this.group, s),
				d = this;
			zot(e) && (e = null != u.a ? u.a : null), zot(t) && (t = null != u.b ? u.b : null), zot(o) && (o = null != u.c ? u.c : null), zot(n) && (n = null != u.d ? u.d : null), zot(r) && (r = null != u.graphics ? u.graphics : null), zot(i) && (i = null != u.optimize && u.optimize);
			var h = g(e, t, o, n);

			function g(e, t, o, n) {
				var r = [];
				return zot(o) ? (r[0] = 0, r[2] = e, r[1] = 0, r[3] = t) : (r[0] = e, r[2] = o, r[1] = t, r[3] = n), zot(r[3]) && (r[3] = r[2]), r
			}
			if (zot(e) || this.setBounds(h[0], h[1], h[2], h[3]), !i)
				for (var p = ["mt", "lt", "a", "at", "bt", "qt", "cp", "c", "f", "lf", "rf", "bf", "ef", "ss", "sd", "s", "ls", "rs", "bs", "es", "dr", "rr", "rc", "dc", "de", "dp", "p"], f = 0; f < p.length; f++) ! function() {
					var e = f;
					d[p[e]] = function() {
						return d.graphics[p[e]].apply(d.graphics, arguments), d
					}
				}();
			Object.defineProperty(d, "command", {
				get: function() {
					return d.graphics.command
				},
				set: function(e) {}
			}), this.cache = function(e, t, o, n, r, i, a) {
				var l;
				if (l = zob(d.cache, arguments, "a,b,c,d,scale,options,margin")) return l;
				var s = d.getBounds();
				if (zot(o))
					if (zot(e)) {
						if (!zot(s)) {
							var c = 0 < d.borderWidth ? d.borderWidth / 2 : 0;
							e = s.x - c, t = s.y - c, o = s.width + 2 * c, n = s.height + 2 * c
						}
					} else o = e, n = t, t = e = 0;
				return zot(a) && (a = 0), d.cjsShape_cache(e - a, t - a, o + 2 * a, n + 2 * a, r, i), d
			}, !(this.setBounds = function(e, t, o, n) {
				var r = g(e, t, o, n);
				return this.cjsShape_setBounds(r[0], r[1], r[2], r[3]), this
			}) !== a && De(this, u), this.clone = function(e) {
				zot(e) && (e = !0);
				var t = this.getBounds();
				zot(t) && (t = {
					x: null,
					y: null,
					width: null,
					height: null
				});
				var o = d.cloneProps(new oo.Shape(t.x, t.y, t.width, t.height, r, a, l, s));
				return o.graphics = e ? d.graphics.clone() : d.graphics, o
			}, this.localToGlobal = function(e, t) {
				return oo.localToGlobal(e, t, this, this.cjsShape_localToGlobal)
			}, this.globalToLocal = function(e, t) {
				return oo.globalToLocal(e, t, this, this.cjsShape_globalToLocal)
			}, this.localToLocal = function(e, t, o) {
				return oo.localToLocal(e, t, o, this)
			}, this.hasProp = function(e) {
				return !zot(this[e]) || this.hasOwnProperty(e)
			}, this.dispose = function() {
				this.graphics.c(), this.removeAllEventListeners(), this.parent && this.parent.removeChild(this)
			}
		}, oo.extend(oo.Shape, createjs.Shape, ["cache", "clone", "setBounds", "localToLocal", "localToGlobal", "globalToLocal"], "cjsShape", !1), zimify(oo.Shape.prototype), oo.Bitmap = function(l, s, c, e, t, o, n) {
			var r;
			if (r = zob(oo.Bitmap, arguments, "image, width, height, id, style, group, inherit", this)) return r;
			z_d("50.7"), this.cjsBitmap_constructor(l);
			var u = this;
			this.type = "Bitmap", this.group = o;
			var i, a = !1 === t ? {} : oo.getStyle(this.type, this.group, n);
			this.id = u.fileID = null != a.id ? a.id : e, zot(s) && (s = null != a.width ? a.width : null), zot(c) && (c = null != a.height ? a.height : null), zot(s) || zot(c) || u.setBounds(0, 0, s, c), zot(s) && (s = 100), zot(c) && (c = 100), zimDefaultFrame && (zimDefaultFrame.canvas.getContext("2d") ? this.imageData = zimDefaultFrame.canvas.getContext("2d").createImageData(s, c) : this.imageData = document.createElement("canvas").getContext("2d").createImageData(s, c), this.drawImageData = function(e, t, o, n, r, i) {
				if (zot(e) && (e = 0), zot(t) && (t = 0), zot(o) && (o = 0), zot(n) && (n = 0), zot(r) && (r = s), zot(i) && (i = c), !u.proxyCanvas) {
					var a = u.proxyCanvas = document.createElement("canvas");
					a.setAttribute("width", s), a.setAttribute("height", c), u.proxyContext = a.getContext("2d"), l = u.image = a
				}
				u.proxyContext && u.proxyContext.putImageData(u.imageData, e, t, o, n, r, i)
			}, zot(l) && u.drawImageData(), l.match && l.match(/data:image/i) && setTimeout(function() {
				u.stage && u.stage.update(), setTimeout(function() {
					u.stage && u.stage.update()
				}, 50)
			}, 50)), !(this.cache = function(e, t, o, n, r, i) {
				if (zot(o))
					if (zot(e)) {
						if (!zot(l = this.getBounds())) {
							var a = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
							e = l.x - a, t = l.y - a, o = l.width + 2 * a, n = l.height + 2 * a
						}
					} else o = e, n = t, t = e = 0;
				var l = this.getBounds();
				return this.cjsBitmap_cache(e, t, o, n, r, i), this.setBounds(l.x, l.y, l.width, l.height), this
			}) !== t && De(this, a), this.clone = function() {
				return this.cloneProps(new oo.Bitmap(l, null, null, u.fileID, t, this.group, n))
			}, this.localToGlobal = function(e, t) {
				return oo.localToGlobal(e, t, this, this.cjsBitmap_localToGlobal)
			}, this.globalToLocal = function(e, t) {
				return oo.globalToLocal(e, t, this, this.cjsBitmap_globalToLocal)
			}, this.localToLocal = function(e, t, o) {
				return oo.localToLocal(e, t, o, this)
			}, this.hasProp = function(e) {
				return !zot(this[e]) || this.hasOwnProperty(e)
			}, this.getColorAt = function(e, t) {
				i || (u.cache(), i = u.cacheCanvas.getContext("2d"), u.uncache());
				var o = i.getImageData(e, t, 1, 1).data;
				return "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + o[3] + ")"
			}, this.dispose = function() {
				this.removeAllEventListeners(), this.parent && this.parent.removeChild(this)
			}
		}, oo.Bitmap.fromData = function(e, t) {
			var o = new oo.Bitmap(e);
			setTimeout(function() {
				t(o)
			}, 50)
		}, oo.extend(oo.Bitmap, createjs.Bitmap, ["cache", "clone", "localToLocal", "localToGlobal", "globalToLocal"], "cjsBitmap", !1), zimify(oo.Bitmap.prototype), oo.Sprite = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v) {
			var b;
			if (b = zob(oo.Sprite, arguments, "image, cols, rows, count, offsetX, offsetY, spacingX, spacingY, width, height, animations, json, id, globalControl, spriteSheet, label, style, group, inherit", this)) return b;
			z_d("50.8"), this.type = "Sprite", this.group = z;
			var y, w = !1 === m ? {} : oo.getStyle(this.type, this.group, v),
				j = this;
			if (zot(d) && !zot(e)) {
				zot(t) && (t = null != w.cols ? w.cols : 1), zot(o) && (o = null != w.rows ? w.rows : 1), zot(n) && (n = null != w.count ? w.count : t * o), zot(r) && (r = null != w.offsetX ? w.offsetX : 0), zot(i) && (i = null != w.offsetY ? w.offsetY : 0), zot(a) && (a = null != w.spacingX ? w.spacingX : 0), zot(l) && (l = null != w.spacingY ? w.spacingY : 0), zot(s) && (s = null != w.width ? w.width : e.width), zot(c) && (c = null != w.height ? w.height : e.height);
				var C = (s - r + a) / t - a,
					x = (c - i + l) / o - l,
					k = [],
					T = 0;
				e: for (var A = 0; A < o; A++)
					for (var P = 0; P < t; P++) {
						if (++T > n) break e;
						k.push([r + P * (C + a), i + A * (x + l), C, x])
					}
				S(e, k, u)
			} else if (p) u = (y = p).animations;
			else {
				if (!d) return;
				if (k = d.frames, u = d.animations, zot(e)) {
					var B = d.images ? d.images[0] : null;
					if (B.split) {
						var I = B.split("/").pop();
						if ("EmptyAsset" != frame.asset(I).type) S(frame.asset(I), k, u);
						else if ("EmptyAsset" != frame.asset(B).type) {
							frame.asset(B);
							S(frame.asset(B), k, u)
						} else y = new createjs.SpriteSheet(d)
					} else y = new createjs.SpriteSheet(d)
				} else S(e, k, u)
			}

			function S(e, t, o) {
				var n = {
					images: [e.image],
					frames: t,
					animations: o || []
				};
				y = new createjs.SpriteSheet(n)
			}
			this.animations = u, this.cjsSprite_constructor(y, f), zot(f) || this.stop(), zot(h) && (h = oo.makeID()), this.id = h, zot(g) && (g = !0), j.globalControl = g;
			var L, D = 0;
			this.parseFrames = function(e, t, o, n) {
				var i = [],
					a = Number.MAX_VALUE,
					l = 0;
				if (zot(e)) zot(t) && (t = 0), zot(o) && (o = j.totalFrames - 1), s(t, o);
				else {
					if (zot(j.animations) || zot(j.animations[e])) return [];
					r(j.animations[e])
				}

				function r(e) {
					Array.isArray(e) ? function(e) {
						s(e[0], e[1], e[3]), e[2] && !zot(j.animations[e[2]]) && r(j.animations[e[2]])
					}(e) : e.constructor == {}.constructor ? function(e) {
						if (zot(e.frames)) return;
						zot(e.speed) && (e.speed = 1);
						for (var t = 0; t < e.frames.length; t++) e.speed < a && (a = e.speed), e.speed > l && (l = e.speed), i.push({
							f: e.frames[t],
							s: e.speed
						});
						e.next && !zot(j.animations[e.next]) && r(j.animations[e.next])
					}(e) : isNaN(e) || i.push({
						f: Math.floor(e),
						s: 1
					})
				}

				function s(e, t, o) {
					if (zot(o) && (o = 1), e < t)
						for (var n = e; n <= t; n++) r(n);
					else
						for (n = t; n <= e; n++) r(e - (n - t));

					function r(e) {
						o < a && (a = o), l < o && (l = o), i.push({
							f: e,
							s: o
						})
					}
				}
				if (n) return i;
				a = oo.constrain(oo.decimals(a), .1), l = oo.constrain(oo.decimals(l), .1);
				for (var c, u = [], d = a != l, h = 0; h < i.length; h++)
					if (c = i[h], d)
						for (var g = 0; g < oo.constrain(Math.round(a < 1 ? c.s / a : c.s), .1); g++) u.push(c.f);
					else u.push(c.f);
				return u
			}, this.run = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k) {
				var T, A;
				if (T = zob(this.run, arguments, "time, label, call, params, wait, waitedCall, waitedParams, loop, loopCount, loopWait, loopCall, loopParams, loopWaitCall, loopWaitParams, rewind, rewindWait, rewindCall, rewindParams, rewindWaitCall, rewindWaitParams, startFrame, endFrame, tweek, id, globalControl")) return T;
				if (zot(C) && (C = 1), zot(x) || (j.id = x), zot(k) || (j.globalControl = k), Array.isArray(t)) {
					var P, B;
					A = [];
					for (var I, S = 0, M = 0; M < t.length; M++) {
						(P = t[M]).lookup = j.parseFrames(P.label, P.startFrame, P.endFrame), 0 == M && (I = P.lookup[0]), delete P.startFrame, delete P.endFrame, P.obj = oo.merge(P.obj, {
							normalizedFrame: P.lookup.length - 1
						}), P.set = oo.merge(P.set, {
							normalizedFrames: {
								noPick: P.lookup
							},
							normalizedFrame: 0
						}), zot(P.wait) && (P.wait = S * C), B = P.label, delete P.label, A.push(P), S = 0;
						var E = zot(P.time) ? e : P.time;
						0 < w - y && (S = E / (w - y) / 2)
					}
					if (0 == A.length) return this;
					1 == A.length ? (e = A[0].time, t = B, O()) : j.gotoAndStop(I)
				} else O();

				function O() {
					L = j.parseFrames(t, y, w), D = 0, j.gotoAndStop(L[D]), y = w = null, A = {
						normalizedFrame: L.length - 1
					}
				}
				if (zot(e) && (e = 1e3), j.running && j.stopAnimate(j.id), j.running = !0, !Array.isArray(A)) {
					S = 0;
					0 < w - y && (S = e / Math.abs(w - y) / 2), L && 0 < L.length && (S = e / L.length / 2), zot(c) && (c = S * C), zot(f) && (f = S * C)
				}
				return oo.animate({
					target: j,
					obj: A,
					time: e,
					ease: "linear",
					call: function() {
						o && "function" == typeof o && o(n || j), j.running = !1, j.stop()
					},
					params: n,
					wait: r,
					waitedCall: i,
					waitedParams: a,
					loop: l,
					loopCount: s,
					loopWait: c,
					loopCall: u,
					loopParams: d,
					loopWaitCall: h,
					loopWaitParams: g,
					rewind: p,
					rewindWait: f,
					rewindCall: m,
					rewindParams: z,
					rewindWaitCall: v,
					rewindWaitParams: b,
					override: !1,
					id: j.id
				}), j.runPaused = !1, j
			}, this.runPaused = !0, this.pauseRun = function(e) {
				return zot(e) && (e = !0), j.runPaused = e, j.globalControl ? oo.pauseAnimate(e, j.id) : j.pauseAnimate(e, j.id), j
			}, this.stopRun = function() {
				return j.runPaused = !0, j.running = !1, j.globalControl ? oo.stopAnimate(j.id) : j.stopAnimate(j.id), j
			}, Object.defineProperty(this, "frame", {
				get: function() {
					return this.currentFrame
				},
				set: function(e) {
					e = Math.round(e), this.paused ? this.gotoAndStop(e) : this.gotoAndPlay(e)
				}
			}), Object.defineProperty(this, "normalizedFrame", {
				get: function() {
					return D
				},
				set: function(e) {
					D = Math.round(e), this.gotoAndStop(L[D])
				}
			}), Object.defineProperty(this, "normalizedFrames", {
				get: function() {
					return L
				},
				set: function(e) {
					L = e
				}
			}), Object.defineProperty(this, "totalFrames", {
				get: function() {
					return y.getNumFrames()
				},
				set: function(e) {
					zog("zim.Sprite - totalFrames is read only")
				}
			}), !1 !== m && De(this, w), this.clone = function() {
				return this.cloneProps(new oo.Sprite(e, t, o, n, r, i, a, l, s, c, u, d, null, g, p, m, this.group, v))
			}, this.localToGlobal = function(e, t) {
				return oo.localToGlobal(e, t, this, this.cjsSprite_localToGlobal)
			}, this.globalToLocal = function(e, t) {
				return oo.globalToLocal(e, t, this, this.cjsSprite_globalToLocal)
			}, this.localToLocal = function(e, t, o) {
				return oo.localToLocal(e, t, o, this)
			}, this.hasProp = function(e) {
				return !zot(this[e]) || this.hasOwnProperty(e)
			}, this.dispose = function() {
				this.removeAllEventListeners(), this.parent && this.parent.removeChild(this)
			}
		}, oo.extend(oo.Sprite, createjs.Sprite, ["clone", "localToLocal", "localToGlobal", "globalToLocal"], "cjsSprite", !1), zimify(oo.Sprite.prototype), oo.MovieClip = function(e, t, o, n, r, i, a) {
			var l;
			if (l = zob(oo.MovieClip, arguments, "mode, startPosition, loop, labels, style, group, inherit", this)) return l;
			z_d("50.9"), this.type = "MovieClip", this.group = i;
			var s = !1 === r ? {} : oo.getStyle(this.type, this.group, a);
			zot(e) && (e = null != s.mode ? s.mode : null), zot(t) && (t = null != s.startPosition ? s.startPosition : null), zot(o) && (o = null != s.loop ? s.loop : null), zot(n) && (n = null != s.labels ? s.labels : null), this.cjsMovieClip_constructor(e, t, o, n), !1 !== r && De(this, s), this.clone = function() {
				return this.cloneProps(new oo.MovieClip(e, t, o, n, r, this.group, a))
			}, this.hasProp = function(e) {
				return !zot(this[e]) || this.hasOwnProperty(e)
			}, this.localToGlobal = function(e, t) {
				return oo.localToGlobal(e, t, this, this.cjsMovieClip_localToGlobal)
			}, this.globalToLocal = function(e, t) {
				return oo.globalToLocal(e, t, this, this.cjsMovieClip_globalToLocal)
			}, this.localToLocal = function(e, t, o) {
				return oo.localToLocal(e, t, o, this)
			}, this.dispose = function() {
				this.removeAllEventListeners(), this.parent && this.parent.removeChild(this)
			}
		}, oo.extend(oo.MovieClip, createjs.MovieClip, ["clone", "localToLocal", "localToGlobal", "globalToLocal"], "cjsMovieClip", !1), zimify(oo.MovieClip.prototype), oo.SVGContainer = function(e, P, w, B, I, t, o, n) {
			var r;
			if (r = zob(oo.SVGContainer, arguments, "svg, splitTypes, geometric, showControls, interactive, style, group, inherit", this)) return r;
			z_d("50.95"), this.group = o;
			var i = !1 === t ? {} : oo.getStyle("SVGContainer", this.group, n),
				S = this,
				M = new oo.Point(0, 0);
			if (zot(P) && (P = !1), zot(w) && (w = !0), !zot(e)) {
				if (zot(e.draggable)) {
					if (!e.getAttribute) {
						a = new DOMParser;
						e = a.parseFromString(e, "image/svg+xml").documentElement
					}
					s = this.svg = e
				} else var a = new DOMParser,
					l = (e = e.innerHTML ? a.parseFromString(e.innerHTML, "text/xml") : e).getElementsByTagName("svg"),
					s = this.svg = l ? e.getElementsByTagName("svg")[0] : null;
				if (!zot(s)) var c = s.getAttribute("width"),
					u = s.getAttribute("height");
				if (c = c && Number(c.trim()), u = u && Number(u.trim()), this.zimContainer_constructor(c, u), this.type = "SVGContainer", zot(s)) return;
				var E, d = oo.black,
					h = oo.black,
					g = oo.black,
					p = oo.black,
					f = 2,
					m = 2,
					z = 1,
					v = 1,
					b = 1,
					y = 1;
				var C = e.getElementsByTagName("svg");

				function x(e) {
					var r, i, a, l, s, t = e.split(";");
					return loop(t, function(e) {
						var t = (e = e.replace(/,/g, "")).split(":"),
							o = t[0].trim().toLowerCase(),
							n = t[1].trim().toLowerCase().replace("px", "");
						"fill" == o && (r = n), "stroke" == o && (i = n), "stroke-width" == o && (a = n), "opacity" == o && (s = l = n), "fill-opacity" == o && (l = n), "stroke-opacity" == o && (s = n)
					}), [r, i, a, l, s]
				}

				function k(e, t) {
					var o, n = j(t),
						r = n[0],
						i = n[1],
						a = n[2],
						l = (n[3], n[4], n[5]),
						s = n[6];
					if ("circle" == e) {
						var c = Number(t.getAttribute("r").trim()),
							u = .5523 * c;
						o = w ? new oo.Circle(Number(t.getAttribute("r")), r, i, a) : new oo.Bloob(r, i, a, 4, c, u, "mirror", null, B, null, null, null, null, null, null, null, null, null, null, I)
					} else if ("rect" == e)
						if (w) o = new oo.Rectangle(Number(t.getAttribute("width")), Number(t.getAttribute("height")), r, i, a, Number(t.getAttribute("rx")));
						else {
							var d = Number(t.getAttribute("width")),
								h = Number(t.getAttribute("height")),
								g = Number(t.getAttribute("rx")),
								p = Number(t.getAttribute("ry"));
							if (g && p) {
								var f = .5523 * g,
									m = .5523 * p;
								o = new oo.Bloob(r, i, a, [
									[g, 0, 0, 0, -f, 0, 0, 0, "free"],
									[d - g, 0, 0, 0, 0, 0, f, 0, "free"],
									[d, p, 0, 0, 0, -m, 0, 0, "free"],
									[d, h - p, 0, 0, 0, 0, 0, m, "free"],
									[d - g, h, 0, 0, f, 0, 0, 0, "free"],
									[g, h, 0, 0, 0, 0, -f, 0, "free"],
									[0, h - p, 0, 0, 0, m, 0, 0, "free"],
									[0, p, 0, 0, 0, 0, 0, -m, "free"]
								], null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I)
							} else o = new oo.Bloob(r, i, a, [
								[0, 0],
								[d, 0],
								[d, h],
								[0, h]
							], null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I)
						}
					else if ("line" == e) o = new oo.Squiggle(i, a, [
						[Number(t.getAttribute("x1")), Number(t.getAttribute("y1"))],
						[Number(t.getAttribute("x2")), Number(t.getAttribute("y2"))]
					], null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I);
					else if ("polygon" == e || "polyline" == e) {
						var z = t.getAttribute("points");
						z = (z = z.replace(/-/g, " -")).replace(/\s+/g, " ");
						var v, b = [];
						if (-1 != z.indexOf(",")) loop(z.split(" "), function(e) {
							var t = e.split(",");
							b.push([Number(t[0].trim()), Number(t[1].trim())])
						});
						else loop(z.split(" "), function(e, t) {
							(t + 1) % 2 == 0 && b.push([v, e.trim()]), v = e.trim()
						});
						o = "polygon" == e ? new Bloob(r, i, a, b) : new oo.Squiggle(i, a, b, null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I)
					} else "ellipse" == e && (o = new oo.Bloob(r, i, a, function(e, t, o, n) {
						var r = .5522848 * o,
							i = .5522848 * n,
							a = e + o,
							l = t + n;
						return [
							[e - o, t, 0, 0, e, l + i - n, e, t - i, "mirror"],
							[e, t - n, 0, 0, e - r, t, a + r - o, t, "mirror"],
							[a, t, 0, 0, e, t - i, e + r - r, l + i - n, "mirror"],
							[e, l, 0, 0, a - o + r, t, e - r, t, "mirror"]
						]
					}(0, 0, Number(t.getAttribute("rx")), Number(t.getAttribute("ry"))), null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I));
					o.loc(l, s, S);
					var y = t.getAttribute("transform");
					(y || E) && O(o, y || E), !I || "Rectangle" != o.type && "Circle" != o.type || o.transform({
						showReg: !1,
						visible: B
					})
				}

				function O(l, e) {
					var t = e.split(")");
					loop(t, function(e) {
						if ("" != e) {
							var t = e.trim().split("("),
								o = t[0].trim().toLowerCase(),
								n = t[1].trim().toLowerCase().replace("px", "").replace("deg", "");
							if ("translate" == o) {
								var r = n.split(",");
								l.mov(Number(r[0].trim()), r[1] ? Number(r[1].trim()) : 0)
							}
							if ("scale" == o) {
								var i = n.split(",");
								"Bloob" == l.type || "Squiggle" == l.type ? 1 == i.length ? l.transformPoints("scale", Number(i[0].trim())) : 2 == i.length && (l.transformPoints("scaleX", Number(i[0].trim())), l.transformPoints("scaleY", Number(i[1].trim()))) : 1 == i.length ? l.sca(Number(i[0].trim())) : 2 == i.length && l.sca(Number(i[0].trim()), Number(i[1].trim()))
							}
							if ("rotate" == o) {
								var a = n.split(",");
								1 == a.length ? a.push(0, 0) : 2 == a.length && a.push(0), l.rot(Number(a[0].trim()), Number(a[1].trim()), Number(a[2].trim()))
							}
							"skewX" == o && (l.skewX = n), "skewY" == o && (l.skewY = n)
						}
					})
				}
				0 == C.length && (C = [e]),
					function c(e) {
						oo.loop(e, function(e) {
							var t = e.tagName.toLowerCase();
							if ("path" == t && T(e), "circle" == t && k("circle", e), "rect" == t && k("rect", e), "ellipse" == t && k("ellipse", e), "line" == t && k("line", e), "polygon" == t && k("polygon", e), "polyline" == t && k("polyline", e), "g" == t) {
								var o, n, r, i, a, l = e.getAttribute("style");
								if (l) {
									var s = x(l);
									o = s[0], n = s[1], r = s[2], i = s[3], a = s[4]
								}
								E = e.getAttribute("transform"), h = e.getAttribute("fill") ? e.getAttribute("fill") : zot(o) ? d : o, p = e.getAttribute("stroke") ? e.getAttribute("stroke") : zot(n) ? g : n, m = e.getAttribute("stroke-width") ? e.getAttribute("stroke-width") : zot(r) ? f : r, v = e.getAttribute("fill-opacity") ? e.getAttribute("fill-opacity") : zot(i) ? z : i, y = e.getAttribute("stroke-opacity") ? e.getAttribute("stroke-opacity") : zot(a) ? b : a
							}
							c(e.children), "g" == e.tagName.toLowerCase() && (h = d, p = g, m = f, v = z, y = b, E = null)
						})
					}(C)
			}

			function j(e) {
				var t, o, n, r, i, a = e.getAttribute("style");
				if (a) {
					var l = x(a);
					t = l[0], o = l[1], n = l[2], r = l[3], i = l[4]
				}
				t = e.getAttribute("fill") ? e.getAttribute("fill") : zot(t) ? h : t, o = e.getAttribute("stroke") ? e.getAttribute("stroke") : zot(o) ? p : o, n = e.getAttribute("stroke-width") ? e.getAttribute("stroke-width") : zot(n) ? m : n, r = e.getAttribute("fill-opacity") ? e.getAttribute("fill-opacity") : zot(r) ? v : r, i = e.getAttribute("stroke-opacity") ? e.getAttribute("stroke-opacity") : zot(i) ? y : i;
				var s = e.getAttribute("x") ? e.getAttribute("x") : 0;
				s = e.getAttribute("cx") ? e.getAttribute("cx") : s;
				var c = e.getAttribute("y") ? e.getAttribute("y") : 0;
				return c = e.getAttribute("cy") ? e.getAttribute("cy") : c, zot(r) || zot(t) || (t = oo.convertColor(t, "rgba", Number(r))), zot(i) || zot(o) || (o = oo.convertColor(o, "rgba", Number(i))), [t, o, Number(n), Number(r), Number(i), Number(s), Number(c)]
			}

			function T(t, e) {
				zot(e) && (e = !0);
				var o, n, r = ["M", "m", "L", "l", "H", "h", "V", "v", "C", "c", "S", "s", "Q", "q", "T", "t", "A", "a", "z", "Z"],
					i = ["m", "l", "h", "v", "c", "s", "q", "t", "a", "z"],
					a = new oo.Point(0, 0);
				if (zot(t.getAttribute)) var l = t;
				else t.getAttribute("id"), l = t.getAttribute("d");
				if (l = (l = (l = (l = l.replace(/,/g, " ")).replace(/([a-zA-Z])/g, " $1 ")).replace(/-/g, " -")).replace(/\s+/g, " "), e) {
					var s = j(t),
						c = s[0],
						u = s[1],
						d = s[2];
					s[3], s[4]
				}
				var h, g = [],
					p = [0, 0],
					f = new oo.Point(0, 0),
					m = new oo.Point(0, 0, 0, 0),
					z = new oo.Point(0, 0, 0, 0, 0, 0),
					v = (new oo.Point(0, 0, 0, 0, 0, 0, 0), l.split(" ")),
					b = v.slice(1, v.length),
					y = [],
					w = !1,
					C = "",
					x = !1,
					k = "squiggle",
					T = null;

				function A() {
					C = y[y.length - 1], 2 <= g.length && ("z" != C && "Z" != C || (k = "blob")), (o = "squiggle" == k ? new oo.Squiggle(u, d, g, null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I) : new oo.Bloob(c, u, d, g, null, null, null, null, B, null, null, null, null, null, null, null, null, null, null, I)).loc(0, 0, S), C = y[y.length - 1], y[y.length - 2], 0 <= i.indexOf(C) ? (p[0] = g[g.length - 1][0], p[1] = g[g.length - 1][1], M.x = g[g.length - 1][0], M.y = g[g.length - 1][1], (g = []).push([p[0], p[1]])) : (p = [0, 0], g = [
						[0, 0]
					]), y = [], "z" != C && "Z" != C && y.push(C), a.x = 0, a.y = 0;
					var e = t.getAttribute("transform");
					(e || E) && O(o, e || E)
				}
				return oo.loop(b, function(e, t) {
					if (0 == t && (M.x = 0, M.y = 0, p = [0, 0], C = ""), -1 == r.indexOf(e)) {
						if ("lxo" == h && (h = "lx", y.push("l"), w = !0), "lyo" == h && (h = "ly", w = !0), "Lxo" == h && (h = "Lx", y.push("L"), w = !0), "Lyo" == h && (h = "Ly", w = !0), n = Number(e), n = Math.round(100 * n) / 100, "X" == h ? (M.x = n, h = "Y") : "Y" == h ? (M.y = n, h = "Lxo", g.push([M.x, M.y])) : "x" == h ? (M.x = M.x + n, h = "y") : "y" == h && (M.y = M.y + n, h = "lxo", g.push([M.x, M.y])), "H" == h || "h" == h ? (a.x = g[g.length - 1][0], a.y = g[g.length - 1][1], a.x = a.x + ("h" == h ? n : n - M.x), g.push([a.x, a.y]), h = "Lx") : "V" != h && "v" != h || (a.x = g[g.length - 1][0], a.y = g[g.length - 1][1], a.y = a.y + ("v" == h ? n : n - M.y), g.push([a.x, a.y]), h = "lx"), "Lx" == h ? (f.x = n, h = "Ly") : "Ly" == h ? (f.y = n, a.x = f.x, a.y = f.y, g.push([a.x, a.y]), h = "Lx") : "lx" == h ? (0 < y.length && (0 != a.x && 0 != a.y ? (M.x = a.x, M.y = a.y) : (M.x = a.x + M.x, M.y = a.y + M.y)), f.x = M.x + n, h = w ? "lyo" : "ly") : "ly" == h && (f.y = M.y + n, a.x = f.x, a.y = f.y, g.push([a.x, a.y]), h = "lx"), "qx" == h || "Qx" == h) 0 < g.length ? (M.x = g[g.length - 1][0], M.y = g[g.length - 1][1]) : (M.x = 0, M.y = 0), m.x = "qx" == h ? M.x + n : n, h = "qx" == h ? "qy" : "Qy";
						else if ("qy" == h || "Qy" == h) {
							if (m.y = "qy" == h ? M.y + n : n, h = "qy" == h ? "qz" : "Qz", x) x = !1, (o = g[g.length - 1])[6] = -o[4], o[7] = -o[5], o[8] = "mirror", a.x = m.x, a.y = m.y, g[g.length] = [a.x, a.y, 0, 0, -o[6], o[7], 0, 0, "free"], h = "qy" == h ? "qx" : "Qx"
						} else if ("qz" == h || "Qz" == h) m.z = "qz" == h ? M.x + n : n, h = "qz" == h ? "qq" : "Qq";
						else if ("qq" == h || "Qq" == h) {
							m.w = "qq" == h ? M.y + n : n;
							var o = g[g.length - 1];
							a.x = o[0], a.y = o[1], 1 == g.length ? (o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 0, o[6] = 2 / 3 * (m.x - a.x), o[7] = 2 / 3 * (m.y - a.y), o[8] = "free") : g[g.length] = [a.x, a.y, 0, 0, 0, 0, 2 / 3 * (m.x - a.x), 2 / 3 * (m.y - a.y), "free"], a.x = m.z, a.y = m.w, g[g.length] = [a.x, a.y, 0, 0, 2 / 3 * (m.x - a.x), 2 / 3 * (m.y - a.y), 0, 0, "free"], h = "qq" == h ? "qx" : "Qx"
						}
						if ("cx" == h || "Cx" == h) 0 < g.length ? (M.x = g[g.length - 1][0], M.y = g[g.length - 1][1]) : (M.x = 0, M.y = 0), z.x = "cx" == h ? M.x + n : n, h = "cx" == h ? "cy" : "Cy";
						else if ("cy" == h || "Cy" == h) z.y = "cy" == h ? M.y + n : n, h = "cy" == h ? "cz" : "Cz";
						else if ("cz" == h || "Cz" == h) z.z = "cz" == h ? M.x + n : n, h = "cz" == h ? "cq" : "Cq";
						else if ("cq" == h || "Cq" == h) {
							if (z.q = "cq" == h ? M.y + n : n, h = "cq" == h ? "cr" : "Cr", x) "s" == C ? "s" : "S", (o = g[g.length - 1])[2] = 0, o[3] = 0, zot(o[4]) && (o[4] = 0), zot(o[5]) && (o[5] = 0), o[6] = -o[4], o[7] = -o[5], o[8] = "mirror", a.x = z.z, a.y = z.q, g[g.length] = [a.x, a.y, 0, 0, z.x - a.x, z.y - a.y, 0, 0, "free"], h = "cr" == h ? "cx" : "Cx"
						} else if ("cr" == h || "Cr" == h) z.r = "cr" == h ? M.x + n : n, h = "cr" == h ? "cs" : "Cs";
						else if ("cs" == h || "Cs" == h) {
							z.s = "cs" == h ? M.y + n : n;
							o = g[g.length - 1];
							1 == g.length && (o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 0), o[6] = z.x - o[0], o[7] = z.y - o[1], o[8] = "free", a.x = z.r, a.y = z.s, g[g.length] = [a.x, a.y, 0, 0, z.z - a.x, z.q - a.y, 0, 0, "free"], h = "cs" == h ? "cx" : "Cx"
						}
					} else y.push(e), "s" != e && (x = !1), 1 < y.length && ("M" != e && "m" != e || (A(y), "M" == e ? (M.x = 0, M.y = 0) : (M.x = g[g.length - 1][0], M.y = g[g.length - 1][1]), g = [], (y = []).push(e))), "M" == e ? h = "X" : "m" == e ? h = "x" : "L" == e ? (h = "Lx", P && T && "l" != T && A(y), T = "l") : "l" == e ? (h = "lx", P && T && "l" != T && A(y), T = "l") : "H" == e ? (h = "H", P && T && "l" != T && A(y), T = "l") : "h" == e ? (h = "h", P && T && "l" != T && A(y), T = "l") : "V" == e ? (h = "V", P && T && "l" != T && A(y), T = "l") : "v" == e ? (h = "v", P && T && "l" != T && A(y), T = "l") : "C" == e ? (h = "Cx", P && T && "c" != T && A(y), T = "c") : "c" == e ? (h = "cx", P && T && "c" != T && A(y), T = "c") : "S" == e ? (x = !0, h = "Cx", P && T && "c" != T && A(y), T = "c") : "s" == e ? (x = !0, h = "cx", P && T && "c" != T && A(y), T = "c") : "Q" == e ? (h = "Qx", P && T && "q" != T && A(y), T = "q") : "q" == e ? (h = "qx", P && T && "q" != T && A(y), T = "q") : "T" == e ? (x = !0, h = "Qx", P && T && "q" != T && A(y), T = "q") : "t" == e ? (x = !0, h = "qx", P && T && "q" != T && A(y), T = "q") : "A" == e ? k = null : "z" != e && "Z" != e || (k = "blob")
				}), e && A(), g
			}!(S.processPath = function(e) {
				return T(e, !1)
			}) !== t && De(this, i), this.clone = function() {
				return S.cloneProps(new oo.SVGContainer(e, P, w, B, I, t, this.group, n))
			}
		}, oo.extend(oo.SVGContainer, oo.Container, "clone", "zimContainer", !1), oo.Circle = function(e, t, o, n, r, i, a, l, s, c) {
			var u;
			if (u = zob(oo.Circle, arguments, "radius, color, borderColor, borderWidth, dashed, percent, strokeObj, style, group, inherit", this)) return u;
			z_d("51"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Circle", this.group = s;
			var d = !1 === l ? {} : oo.getStyle(this.type, this.group, c);
			zot(e) && (e = null != d.radius ? d.radius : 50), zot(r) && (r = null != d.dashed && d.dashed), zot(o) && (o = null != d.borderColor ? d.borderColor : null), zot(n) && (n = null != d.borderWidth ? d.borderWidth : null), o < 0 || n < 0 ? o = n = null : null != o && null == n && (n = 1), zot(t) && (t = null != d.color ? d.color : 0 < n ? "rgba(0,0,0,0)" : "black"), zot(i) && (i = null != d.percent ? d.percent : 100), zot(a) && (a = null != d.strokeObj ? d.strokeObj : {});
			var h = function() {
				return arguments
			}(e, t, o, n, i);
			e = oo.Pick.choose(e), t = oo.Pick.choose(t), o = oo.Pick.choose(o), n = oo.Pick.choose(n), i = oo.Pick.choose(i);
			var g = this,
				p = e,
				f = t,
				m = o,
				z = n;
			this.mouseChildren = !1;
			var v = this.shape = new createjs.Shape;
			this.addChild(v);
			var b, y, w, C, x, k, T = v.graphics;

			function A() {
				T.c(), g.colorCommand = b = T.f(f).command, (zot(z) || 0 < z) && (zot(m) && zot(z) || (zot(m) && (m = "black"), g.borderColorCommand = y = T.s(m).command, g.borderWidthCommand = w = T.ss(z, a.caps, a.joints, a.miterLimit, a.ignoreScale).command, r && (g.borderDashedCommand = C = T.sd([10, 10], 5).command)));
				var e = 2 * p;
				if ("number" == typeof i && 0 <= i && i < 100) {
					var t = 360 * i / 100 / 2;
					T.arc(0, 0, p, (-t - 90) * Math.PI / 180, (t - 90) * Math.PI / 180, !1).cp(), e = p - Math.cos(t * Math.PI / 180) * p
				} else T.dc(0, 0, p);
				g.setBounds(-p, -p, 2 * p, e)
			}
			A(), Object.defineProperty(g, "color", {
				get: function() {
					return f
				},
				set: function(e) {
					zot(e) && (e = "black"), f = e, b.style = f
				}
			}), this.setColorRange = function(e, t) {
				return k = zot(t) ? (x = g.color, e) : (x = zot(e) ? g.color : e, t), g
			};
			var P = 0;
			Object.defineProperty(g, "colorRange", {
				get: function() {
					return P
				},
				set: function(e) {
					P = e, zot(x) || zot(k) || (g.color = oo.colorRange(x, k, e))
				}
			}), Object.defineProperty(g, "borderColor", {
				get: function() {
					return m
				},
				set: function(e) {
					m = e, y ? y.style = m : A()
				}
			}), Object.defineProperty(g, "borderWidth", {
				get: function() {
					return z
				},
				set: function(e) {
					0 < e || (e = 0), z = e, w && 0 != z ? (w.width = z, r && (C.segments = [20, 10], C.offset = 5)) : A()
				}
			}), Object.defineProperty(g, "radius", {
				get: function() {
					return p
				},
				set: function(e) {
					p = e, A()
				}
			}), !1 !== l && De(this, d), this.linearGradient = function(e, t, o, n, r, i) {
				return this.linearGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.linearGradient(e, t, o, n, r, i), this
			}, this.radialGradient = function(e, t, o, n, r, i, a, l) {
				return this.radialGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.radialGradient(e, t, o, n, r, i, a, l), this
			}, this.clone = function(e) {
				var t = g.cloneProps(e ? new oo.Circle(g.radius, g.color, g.borderColor, g.borderWidth, r, i, a, l, this.group, c) : new oo.Circle(h[0], h[1], h[2], h[3], r, h[4], l, this.group, c));
				return g.linearGradientParams && t.linearGradient.apply(t, g.linearGradientParams), g.radialGradientParams && t.radialGradient.apply(t, g.linearGradientParams), t
			}
		}, oo.extend(oo.Circle, oo.Container, "clone", "zimContainer", !1), oo.Rectangle = function(o, n, e, t, r, i, a, l, s, c, u) {
			var d;
			if (d = zob(oo.Rectangle, arguments, "width, height, color, borderColor, borderWidth, corner, dashed, strokeObj, style, group, inherit", this)) return d;
			z_d("52"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Rectangle", this.group = c;
			var h = !1 === s ? {} : oo.getStyle(this.type, this.group, u);
			zot(o) && (o = null != h.width ? h.width : null), zot(n) && (n = null != h.height ? h.height : zot(o) ? 100 : o), zot(o) && (o = n), zot(i) && (i = null != h.corner ? h.corner : 0), zot(a) && (a = null != h.dashed && h.dashed), zot(t) && (t = null != h.borderColor ? h.borderColor : null), zot(r) && (r = null != h.borderWidth ? h.borderWidth : null), t < 0 || r < 0 ? t = r = null : null != t && null == r && (r = 1), zot(e) && (e = null != h.color ? h.color : 0 < r ? "rgba(0,0,0,0)" : "black"), zot(l) && (l = null != h.strokeObj ? h.strokeObj : {});
			var g = function() {
				return arguments
			}(o, n, e, t, r);
			o = oo.Pick.choose(o), n = oo.Pick.choose(n), e = oo.Pick.choose(e), t = oo.Pick.choose(t), r = oo.Pick.choose(r);
			var p = this,
				f = e,
				m = t,
				z = r;
			this.mouseChildren = !1;
			var v = this.shape = new createjs.Shape;
			this.addChild(v);
			var b, y, w, C, x, k = v.graphics;

			function T() {
				k.c(), p.colorCommand = b = k.f(f).command, (zot(z) || 0 < z) && (zot(m) && zot(z) || (zot(m) && (m = "black"), p.borderColorCommand = y = k.s(m).command, p.borderWidthCommand = w = k.ss(z, l.caps, l.joints, l.miterLimit, l.ignoreScale).command, a && (p.borderDashedCommand = borderDashedObj = k.sd([10, 10], 5).command))), Array.isArray(i) ? k.rc(0, 0, o, n, i[0], i[1], i[2], i[3]) : 0 < i ? k.rr(0, 0, o, n, i) : k.r(0, 0, o, n), p.setBounds(0, 0, o, n)
			}
			T(), Object.defineProperty(p, "color", {
				get: function() {
					return f
				},
				set: function(e) {
					zot(e) && (e = "black"), f = e, b.style = f
				}
			}), this.setColorRange = function(e, t) {
				return x = zot(t) ? (C = p.color, e) : (C = zot(e) ? p.color : e, t), p
			};
			var A = 0;
			Object.defineProperty(p, "colorRange", {
				get: function() {
					return A
				},
				set: function(e) {
					A = e, zot(C) || zot(x) || (p.color = oo.colorRange(C, x, e))
				}
			}), Object.defineProperty(p, "borderColor", {
				get: function() {
					return m
				},
				set: function(e) {
					m = e, y ? y.style = m : T()
				}
			}), Object.defineProperty(p, "borderWidth", {
				get: function() {
					return z
				},
				set: function(e) {
					0 < e || (e = 0), z = e, w && 0 != z ? (w.width = z, a && (borderDashedObj.segments = [20, 10], borderDashedObj.offset = 5)) : T()
				}
			}), Object.defineProperty(p, "corner", {
				get: function() {
					return i
				},
				set: function(e) {
					i = e, T()
				}
			}), this.linearGradient = function(e, t, o, n, r, i) {
				return this.linearGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.linearGradient(e, t, o, n, r, i), this
			}, !(this.radialGradient = function(e, t, o, n, r, i, a, l) {
				return this.radialGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.radialGradient(e, t, o, n, r, i, a, l), this
			}) !== s && De(this, h), this.clone = function(e) {
				var t = p.cloneProps(e ? new oo.Rectangle(o, n, p.color, p.borderColor, p.borderWidth, i, a, l, s, this.group, u) : new oo.Rectangle(g[0], g[1], g[2], g[3], g[4], i, a, l, s, this.group, u));
				return p.linearGradientParams && t.linearGradient.apply(t, p.linearGradientParams), p.radialGradientParams && t.radialGradient.apply(t, p.linearGradientParams), t
			}
		}, oo.extend(oo.Rectangle, oo.Container, "clone", "zimContainer", !1), oo.Triangle = function(s, c, o, e, t, n, u, d, h, g, r, i, a) {
			var l;
			if (l = zob(oo.Triangle, arguments, "a, b, c, color, borderColor, borderWidth, center, adjust, dashed, strokeObj, style, group, inherit", this)) return l;
			z_d("53"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Triangle", this.group = i;
			var p = !1 === r ? {} : oo.getStyle(this.type, this.group, a);
			zot(s) && (s = null != p.a ? p.a : 100), zot(c) && (c = null != p.b ? p.b : s), zot(o) && (o = null != p.c ? p.c : c), -1 == o && (o = Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2))), zot(u) && (u = null == p.center || p.center), zot(d) && (d = null != p.adjust ? p.adjust : 0), zot(t) && (t = null != p.borderColor ? p.borderColor : null), zot(n) && (n = null != p.borderWidth ? p.borderWidth : null), t < 0 || n < 0 ? t = n = null : null != t && null == n && (n = 1), zot(e) && (e = null != p.color ? p.color : 0 < n ? "rgba(0,0,0,0)" : "black"), zot(d) && (d = null != p.adjust ? p.adjust : 0), zot(g) && (g = null != p.strokeObj ? p.strokeObj : {});
			var f = function() {
				return arguments
			}(s, c, o, e, t, n);
			s = oo.Pick.choose(s), c = oo.Pick.choose(c), o = oo.Pick.choose(o), this.a = s, this.b = c, this.c = o, e = oo.Pick.choose(e), t = oo.Pick.choose(t), n = oo.Pick.choose(n);
			var m = this,
				z = e,
				v = t,
				b = n;
			this.mouseChildren = !1;
			var y = [s, c, o];
			y.sort(function(e, t) {
				return t - e
			});
			var w = y[0],
				C = y[1],
				x = y[2],
				k = [y.indexOf(s), y.indexOf(c), y.indexOf(o)];
			if (C + x < w) zog("zim display - Triangle(): invalid triangle lengths");
			else {
				var T = this.shape = new createjs.Shape;
				this.adjusted = d, this.addChild(T);
				var A, P, B, I, S, M = T.graphics;
				O(), Object.defineProperty(m, "color", {
					get: function() {
						return z
					},
					set: function(e) {
						zot(e) && (e = "black"), z = e, A.style = z
					}
				}), this.setColorRange = function(e, t) {
					return S = zot(t) ? (I = m.color, e) : (I = zot(e) ? m.color : e, t), m
				};
				var E = 0;
				Object.defineProperty(m, "colorRange", {
					get: function() {
						return E
					},
					set: function(e) {
						E = e, zot(I) || zot(S) || (m.color = oo.colorRange(I, S, e))
					}
				}), Object.defineProperty(m, "borderColor", {
					get: function() {
						return v
					},
					set: function(e) {
						v = e, P ? P.style = v : O()
					}
				}), Object.defineProperty(m, "borderWidth", {
					get: function() {
						return b
					},
					set: function(e) {
						0 < e || (e = 0), b = e, B && 0 != b ? (B.width = b, h && (borderDashedObj.segments = [20, 10], borderDashedObj.offset = 5)) : O()
					}
				}), this.linearGradient = function(e, t, o, n, r, i) {
					return this.linearGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.linearGradient(e, t, o, n, r, i), this
				}, !(this.radialGradient = function(e, t, o, n, r, i, a, l) {
					return this.radialGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.radialGradient(e, t, o, n, r, i, a, l), this
				}) !== r && De(this, p), this.clone = function(e) {
					var t = m.cloneProps(e ? new oo.Triangle(s, c, o, m.color, m.borderColor, m.borderWidth, u, d, h, g, r, this.group, a) : new oo.Triangle(f[0], f[1], f[2], f[3], f[4], f[5], u, d, h, g, r, this.group, a));
					return m.linearGradientParams && t.linearGradient.apply(t, m.linearGradientParams), m.radialGradientParams && t.radialGradient.apply(t, m.linearGradientParams), t
				}
			}

			function O() {
				M.c(), m.colorCommand = A = M.f(z).command, (zot(b) || 0 < b) && (zot(v) && zot(b) || (zot(v) && (v = "black"), m.borderColorCommand = P = M.s(v).command, m.borderWidthCommand = B = M.ss(b, g.caps, g.joints, g.miterLimit, g.ignoreScale).command, h && (m.borderDashedCommand = borderDashedObj = M.sd([10, 10], 5).command))), M.mt(0, 0), m.one = {
					x: 0,
					y: 0
				}, M.lt(s, 0), m.two = {
					x: s,
					y: 0
				};
				var e = 180 * Math.acos((Math.pow(C, 2) + Math.pow(x, 2) - Math.pow(w, 2)) / (2 * C * x)) / Math.PI,
					t = 180 * Math.asin(C * Math.sin(e * Math.PI / 180) / w) / Math.PI,
					o = [e, t, 180 - e - t];
				m.angles = [o[k[1]], o[k[2]], o[k[0]]];
				var n = m.angles[1],
					r = Math.cos(n * Math.PI / 180) * c,
					i = Math.sin(n * Math.PI / 180) * c,
					a = Math.max(s, s - r),
					l = i;
				m.setBounds(0, d, a, l), T.y = l, M.lt(s - r, 0 - i), m.three = {
					x: s - r,
					y: 0 - i
				}, M.cp(), u && (m.regX = a / 2, m.regY = l / 2), d && (m.shape.y += d)
			}
		}, oo.extend(oo.Triangle, oo.Container, "clone", "zimContainer"), oo.Squiggle = function(e, T, A, P, B, I, S, M, E, O, t, j, L, D, Y, X, R, o, _, W, F, n, G) {
			var r;
			if (r = zob(oo.Squiggle, arguments, "color, thickness, points, length, controlLength, controlType, lockControlType, showControls, lockControls, handleSize, allowToggle, move, dashed, onTop, stickColor, selectColor, selectPoints, editPoints, interactive, strokeObj, style, group, inherit", this)) return r;
			z_d("53.2"), this.group = n;
			var H = !1 === F ? {} : oo.getStyle("Squiggle", this.group, G);
			if (zot(T) && (T = null != H.thickness ? H.thickness : 6), zot(P) && (P = null != H.length ? H.length : 300), zot(A) && (A = null != H.points ? H.points : 5), "string" == typeof A) {
				var i = new oo.SVGContainer;
				A = i.processPath(A)
			}
			var N = "number" == typeof A ? A : A.length;
			if (0 != N) {
				zot(B) && (B = null != H.controlLength ? H.controlLength : P / N), this.zimContainer_constructor(P, B, null, null, !1), this.type = "Squiggle", zot(L) && (L = null != H.dashed && H.dashed), zot(e) && (e = null != H.color ? H.color : oo.blue), e.style && (this.colorCommand = e, e = "black"), zot(I) && (I = null != H.controlType ? H.controlType : null);
				var a = I;
				zot(I) && (I = "mirror"), zot(S) && (S = null != H.lockControlType && H.lockControlType), zot(_) && (_ = null == H.interactive || H.interactive), zot(M) && (M = null != H.showControls ? H.showControls : _);
				var V = M;
				zot(E) && (E = null != H.lockControls ? H.lockControls : !_), zot(O) && (O = null != H.handleSize ? H.handleSize : oo.mobile() ? 20 : 10), zot(t) && (t = null != H.allowToggle ? H.allowToggle : _), zot(j) && (j = null != H.move ? H.move : _), zot(Y) && (Y = null != H.stickColor ? H.stickColor : "#111"), zot(X) && (X = null != H.selectColor ? H.selectColor : "#fff"), zot(R) && (R = null != H.selectPoints ? H.selectPoints : _), this.stickColor = Y, zot(D) && (D = null == H.onTop || H.onTop), zot(o) && (o = null != H.editPoints ? H.editPoints : _), zot(W) && (W = null != H.strokeObj ? H.strokeObj : {});
				var q, K, U, Z = this;
				this.types = ["mirror", "straight", "free", "none"];
				this.interactive = _, this.num = N, this.onTop = D, this.move = j, this.editPoints = o, this.allowToggle = t, this.lockControlType = S, this.selectPoints = R, this.lockControls = E;
				var Q, J, $, ee, te, oe, ne, re, ie, ae, le, se = e,
					ce = T,
					l = Z.move,
					ue = 2;
				a && "number" != typeof A && loop(A, function(e) {
					"none" == (e[8] = a) && (e[4] = e[5] = e[6] = e[7] = 0)
				}), h(), Z.selectionManager.on("keydown", function(e) {
					if (Z.selectPoints && Z.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
						var t = de();
						if (0 < t.length) {
							for (var o = 0; o < t.length; o++) {
								var n = t[o];
								37 == e.keyCode ? n.x -= Z.selectionManager.shiftKey ? 10 : 1 : 39 == e.keyCode ? n.x += Z.selectionManager.shiftKey ? 10 : 1 : 38 == e.keyCode ? n.y -= Z.selectionManager.shiftKey ? 10 : 1 : 40 == e.keyCode && (n.y += Z.selectionManager.shiftKey ? 10 : 1), ie(n)
							}
							ae(), Z.stage && Z.stage.update()
						}
					}
				}), Z.selectionManager.on("keyup", function(e) {
					if (Z.selectPoints && Z.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
						var t = de();
						if (0 < t.length)
							for (var o = 0; o < t.length; o++) he(t[o])
					}
				}), Z.selectionManager.on("undo", function() {
					if (Z.selectPoints && Z.keyFocus && Z.lastPoints) {
						var e = oo.copy(Z.lastPoints);
						Z.lastPoints = oo.copy(Z.points), Z.points = e, Z.stage && Z.stage.update()
					}
				}), ie = function(e) {
					if (!Z.lockControls)
						if (e.rect1) {
							var t = (n = e).x - n.startX,
								o = n.y - n.startY;
							n.rect1.x = n.rect1.startX + t, n.rect1.y = n.rect1.startY + o, n.rect2.x = n.rect2.startX + t, n.rect2.y = n.rect2.startY + o
						} else {
							var n, r = e,
								i = r.other,
								a = (n = r.ball).index,
								l = I;
							if (zot(q[a][4]) || (l = q[a][4]), "straight" == l || "mirror" == l) {
								var s = r.x - n.x,
									c = r.y - n.y;
								if ("mirror" == l) i.x = n.x - s, i.y = n.y - c;
								else {
									var u = Math.atan2(c, s),
										d = -i.stickLength * Math.cos(u + Math.PI),
										h = -i.stickLength * Math.sin(u + Math.PI);
									i.x = n.x - d, i.y = n.y - h
								}
							}
						}
				}, Object.defineProperty(Z, "move", {
					get: function() {
						return j
					},
					set: function(e) {
						j != e && ((j = e) ? ge() : pe())
					}
				}), Object.defineProperty(Z, "interactive", {
					get: function() {
						return _
					},
					set: function(e) {
						_ = e, Z.showControls = _, Z.allowToggle = _, Z.editPoints = _, Z.lockControls = !_, Z.selectPoints = _, Z.move = _, Z.points = Z.points
					}
				}), Object.defineProperty(Z, "allowToggle", {
					get: function() {
						return t
					},
					set: function(e) {
						t != e && ((t = e) ? Z.move && ge() : !V && Z.move && pe())
					}
				});
				var s, c, u = E;
				Object.defineProperty(Z, "lockControls", {
					get: function() {
						return u
					},
					set: function(e) {
						(u = e) ? (Z.controls.mouseChildren = !1, Z.controls.mouseEnabled = !1) : (Z.controls.mouseChildren = !0, Z.controls.mouseEnabled = !0)
					}
				}), Z.lockControls = u, Object.defineProperty(Z, "controlsVisible", {
					get: function() {
						return V
					},
					set: function(e) {
						(V = e) ? Z.showControls(): Z.hideControls()
					}
				}), Object.defineProperty(Z, "color", {
					get: function() {
						return se
					},
					set: function(e) {
						zot(e) && (e = "black"), se = e, Q.style = se
					}
				}), this.setColorRange = function(e, t) {
					return c = zot(t) ? (s = Z.color, e) : (s = zot(e) ? Z.color : e, t), Z
				};
				var d = 0;
				Object.defineProperty(Z, "colorRange", {
					get: function() {
						return d
					},
					set: function(e) {
						d = e, zot(s) || zot(c) || (Z.color = oo.colorRange(s, c, e))
					}
				}), Object.defineProperty(Z, "thickness", {
					get: function() {
						return ce
					},
					set: function(e) {
						0 < e || (e = 0), ce = e, J && 0 != ce ? (J.width = ce, L && ($.segments = [20, 10], $.offset = 5)) : ae()
					}
				}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
					get: function() {
						return oo.KEYFOCUS == Z
					},
					set: function(e) {
						oo.KEYFOCUS = Z
					}
				}), oo.KEYFOCUS || function() {
					if (!Z.selectPoints) return;
					Z.keyFocus = !0;
					var e = document.activeElement;
					e && e.blur()
				}(), Object.defineProperty(Z, "points", {
					get: function() {
						for (var e, t, o = [], n = 0; n < q.length; n++) t = q[n], e = [oo.decimals(t[0].x), oo.decimals(t[0].y), oo.decimals(t[1].x), oo.decimals(t[1].y), oo.decimals(t[2].x), oo.decimals(t[2].y), oo.decimals(t[3].x), oo.decimals(t[3].y)], t[4] && "mirror" !== t[4] && e.push(t[4]), o.push(e);
						return o
					},
					set: function(e) {
						Z.dispose(!0), A = e, Z.shape && (Z.shape.graphics.clear(), Z.sticks.graphics.clear(), Z.controls.noDrag(), Z.removeAllChildren(), delete Z.shape, delete Z.sticks, delete Z.controls), h(), Z.lockControls = u
					}
				}), Object.defineProperty(Z, "pointsAdjusted", {
					get: function() {
						var r, i, a = [],
							l = Z.pointObjects;
						return oo.loop(l.length, function(e, t) {
							if (po = l[e], i = q[e], 0 == po[0].rotation && 0 == po[0].scaleX && 0 == po[0].scaleY) r = [oo.decimals(i[0].x), oo.decimals(i[0].y), oo.decimals(i[1].x), oo.decimals(i[1].y), oo.decimals(i[2].x), oo.decimals(i[2].y), oo.decimals(i[3].x), oo.decimals(i[3].y)];
							else {
								var o = po[0].localToLocal(po[2].x, po[2].y, po[0].parent),
									n = po[0].localToLocal(po[3].x, po[3].y, po[0].parent);
								r = [oo.decimals(i[0].x), oo.decimals(i[0].y), oo.decimals(i[1].x), oo.decimals(i[1].y), oo.decimals(o.x - i[0].x), oo.decimals(o.y - i[0].y), oo.decimals(n.x - i[0].x), oo.decimals(n.y - i[0].y)]
							}
							i[4] && "mirror" !== i[4] && r.push(i[4]), a.push(r)
						}), a
					},
					set: function(e) {
						zon && zog("Squiggle() - pointsAdjusted is read only")
					}
				}), Object.defineProperty(Z, "pointObjects", {
					get: function() {
						return q
					},
					set: function(e) {
						zon && zog("Squiggle() - pointObjects is read only - but its contents can be manipulated - use squiggle.update() after changes")
					}
				}), Object.defineProperty(Z, "pointControls", {
					get: function() {
						return U
					},
					set: function(e) {
						zon && zog("Squiggle() - pointControls is read only - but its contents can be manipulated - use blob.update() after changes")
					}
				}), Object.defineProperty(Z, "pointCircles", {
					get: function() {
						return K
					},
					set: function(e) {
						zon && zog("Squiggle() - pointCircles is read only - but its contents can be manipulated - use blob.update() after changes")
					}
				}), Object.defineProperty(Z, "segmentPoints", {
					get: function() {
						var n = [],
							r = Z.pointsAdjusted;
						return oo.loop(r.length - 1, function(e, t) {
							var o = Z.getSegmentPoint(r[e], r[e + 1]);
							n.push(o)
						}), n
					},
					set: function(e) {
						zon && zog("Squiggle() - segmentPoints is read only")
					}
				}), Object.defineProperty(Z, "segmentRatios", {
					get: function() {
						var o = [],
							n = 0;
						oo.loop(Z.segmentPoints, function(e) {
							var t = oo.distanceAlongCurve(e);
							o.push(t), n += t
						});
						var t = [],
							r = 0;
						return oo.loop(o, function(e) {
							r += e / n, t.push(r)
						}), t
					},
					set: function(e) {
						zon && zog("Squiggle() - segmentRatios is read only")
					}
				}), Z.getPointAngle = function(e) {
					var t = Z.pointObjects[e][0],
						o = Z.pointObjects[e][2],
						n = Z.pointObjects[e][3];
					if (t == Z.stage) var r = new oo.Point(o.x, o.y),
						i = new oo.Point(n.x, n.y);
					else r = t.localToGlobal(o.x, o.y), i = t.localToGlobal(n.x, n.y);
					return oo.angle(r.x, r.y, i.x, i.y)
				}, Z.getSegmentPoint = function(e, t) {
					if (!zot(e) && !zot(t)) {
						0 == e[2] && 0 == e[3] || (e[4] -= e[2], e[5] -= e[3], e[6] -= e[2], e[7] -= e[3], e[0] += e[2], e[1] += e[3], e[2] = 0, e[3] = 0), 0 == t[2] && 0 == t[3] || (t[4] -= t[2], t[5] -= t[3], t[6] -= t[2], t[7] -= t[3], t[0] += t[2], t[1] += t[3], t[2] = 0, t[3] = 0);
						var o = {
								x: e[0],
								y: e[1]
							},
							n = {
								x: e[0] + e[6],
								y: e[1] + e[7]
							},
							r = {
								x: t[0] + t[4],
								y: t[1] + t[5]
							},
							i = {
								x: t[0],
								y: t[1]
							};
						return 0 == le.x && 0 == le.y || (o.x += le.x, n.x += le.x, r.x += le.x, i.x += le.x, o.y += le.y, n.y += le.y, r.y += le.y, i.y += le.y), [o, n, r, i]
					}
				}, Z.getAdjacentSegmentData = function(e) {
					zot(e) && (e = 0);
					var t = Z.pointsAdjusted;
					return 2 == Z.num ? [
						[Z.getSegmentPoint(t[0], t[1])],
						[0]
					] : 0 == e ? [
						[Z.getSegmentPoint(t[0], t[1]), Z.getSegmentPoint(t[1], t[2])],
						[0, 1]
					] : e >= Z.num - 2 ? [
						[Z.getSegmentPoint(t[Z.num - 3], t[Z.num - 2]), Z.getSegmentPoint(t[Z.num - 2], t[Z.num - 1])],
						[Z.num - 3, Z.num - 2]
					] : [
						[Z.getSegmentPoint(t[e - 1], t[e]), Z.getSegmentPoint(t[e], t[e + 1]), Z.getSegmentPoint(t[e + 1], t[e + 2])],
						[e - 1, e, e + 1]
					]
				}, Z.getCurvePoint = function(o, e, t, n) {
					(zot(o) || isNaN(o)) && (o = 0), zot(e) && (e = Z.segmentRatios), zot(t) && (t = Z.segmentPoints), zot(n) && (n = !1);
					var r = e,
						i = t,
						a = oo.loop(r, function(e, t) {
							if (o <= e) return t
						}),
						l = 0 < a ? r[a - 1] : 0,
						s = 0 < a ? r[a] - r[a - 1] : r[a];
					if (s) {
						var c = (o - l) / s,
							u = oo.pointAlongCurve(i[a], c, n),
							d = Z.localToGlobal(u.x, u.y);
						return d.angle = u.angle, d.z = a, zot(d) ? void 0 : d
					}
				}, this.addPoint = function(e, t) {
					zot(e) && (e = 100);
					var o = Z.points,
						n = Z.segmentRatios;
					return g(o, Z.pointControls, n, e, t), Z.points = o, Z.num = o.length, Z
				}, this.addPoints = function(i, a, l, t, s, c) {
					zot(c) && (c = oo.copy(Z.points));
					var e = oo.copy(Z.segmentRatios),
						u = 0;
					if (s && (Z.interpolatedPoints = []), t) var d = e.length * i;
					return oo.loop(e, function(o, n) {
						s && g(c, Z.pointControls, Z.segmentRatios, 100 * u, a, !zot(l) && n != l, s);
						var e = t ? Math.round(d * (o - u)) : i,
							r = 1 / (e + 1);
						oo.loop(e, function(e) {
							var t = u + (o - u) * r * (e + 1);
							g(c, Z.pointControls, Z.segmentRatios, 100 * t, a, !zot(l) && n != l, s), !s && 0 < i && (Z.points = c)
						}), u = o
					}), s && "Squiggle" == Z.type && g(c, Z.pointControls, Z.segmentRatios, 100, a, null, s), Z.stage && Z.stage.update(), Z.num = c.length, Z
				}, this.interpolate = function(e, t, o, n) {
					return zot(e) && (e = 1), Z.addPoints(e, "none", t, o, !0, n), Z.interpolatedPoints
				}, this.linearGradient = function(e, t, o, n, r, i) {
					return this.linearGradientParams = Array.prototype.slice.call(arguments), this.thicknessCommand.linearGradient(e, t, o, n, r, i), this
				}, this.radialGradient = function(e, t, o, n, r, i, a, l) {
					return this.radialGradientParams = Array.prototype.slice.call(arguments), this.thicknessCommand.radialGradient(e, t, o, n, r, i, a, l), this
				}, this.dispose = function(e) {
					if (Z.shape) {
						Z.shape.cursor = "default";
						for (var t = 0; t < Z.points.length; t++) Z.pointObjects[t][1].removeAllEventListeners();
						for (t = 0; t < K.length; t++) K[t].removeAllEventListeners();
						Z.sticks.removeFrom(Z), Z.controls.removeFrom(Z), Z.shape.removeAllEventListeners(), Z.controls.removeAllEventListeners(), Z.off("mousedown", Z.toggleEvent), Z.off("click", Z.clickEvent), Z.toggleStageEvent && Z.stage.off("stagemousedown", Z.toggleStageEvent), !e && Z.selectPoints && Z.selectionManager.removeAllEventListeners()
					}
				}
			}

			function h() {
				le && le.removeAllEventListeners(), Z.num = N = "number" == typeof A ? A : A.length, N = Math.max(2, N), B = P / N, ee = Z.shape = new oo.Shape({
					style: !1
				}).addTo(Z);
				var n = Z.sticks = new oo.Shape({
					style: !1
				}).addTo(Z);
				O <= 0 && n.removeFrom();
				var m = ee.graphics;
				m.c();
				var z = n.graphics;
				z.c();
				var e = O / 10 * 8,
					t = O;
				Z.selectPoints ? (Z.selectedBalls = new oo.SelectionSet, Z.selectedRect1s = new oo.SelectionSet, Z.selectedRect2s = new oo.SelectionSet, Z.selectionManager = new oo.SelectionManager([Z.selectedBalls, Z.selectedRect1s, Z.selectedRect2s], "ctrl", !1)) : Z.selectionManager = new oo.SelectionManager(null, "ctrl");
				var o, r, i, a, l, s, c, u, d = oo.mobile();
				le = Z.controls = new oo.Container({
					style: !1
				}).addTo(Z), Z.interactive && le.drag({
					onTop: !d
				}), q = [], U = [], K = [];
				for (var h = 0; h < N; h++) {
					if ((i = new oo.Container({
							style: !1
						}).addTo(le)).num = h, "number" == typeof A) {
						var g = oo.Pick.choose(B);
						r = new oo.Container(g, T, null, null, !1).addTo(Z).loc({
							x: h * P / (N - 1) - g / 2,
							y: h % 2 * g
						}), s = new oo.Circle(e, Z.selectPoints && Z.selectedBalls.isSelected(h) ? X : oo.light, oo.dark, 2, null, null, null, !1).centerReg(r).loc({
							x: g / 2,
							y: 0
						}), a = new oo.Rectangle(t, t, Z.selectPoints && Z.selectedRect1s.isSelected(h) ? X : x(I), 0 == O ? null : oo.dark, 0 == O ? null : 2, null, null, null, !1).centerReg(r).loc({
							x: 0,
							y: 0
						}), l = new oo.Rectangle(t, t, Z.selectPoints && Z.selectedRect2s.isSelected(h) ? X : x(I), 0 == O ? null : oo.dark, 0 == O ? null : 2, null, null, null, !1).centerReg(r).loc({
							x: g,
							y: 0
						});
						var p = r.localToLocal(s.x, s.y, le);
						s.x = p.x, s.y = p.y, s.addTo(i, null, !1);
						var f = r.localToLocal(a.x, a.y, le);
						a.x = "none" == I ? 0 : f.x - s.x, a.y = "none" == I ? 0 : f.y - s.y, a.addTo(i, null, !1);
						var v = r.localToLocal(l.x, l.y, le);
						l.x = "none" == I ? 0 : v.x - s.x, l.y = "none" == I ? 0 : v.y - s.y, l.addTo(i, null, !1), i.x = s.x, i.y = s.y, s.x = 0, s.y = 0, "none" == I && s.addTo(i, null, !1)
					} else c = (u = A[h])[8] ? u[8] : I, i.loc({
						x: u[0],
						y: u[1]
					}), s = new oo.Circle(e, oo.light, oo.dark, 2, null, null, null, !1).centerReg({
						add: !1
					}).addTo(i).loc({
						x: u[2],
						y: u[3]
					}), a = new oo.Rectangle(t, t, x(c), 0 == O ? null : oo.dark, 0 == O ? null : 2, null, null, null, !1).centerReg({
						add: !1
					}).addTo(i, 0).loc({
						x: u[4],
						y: u[5]
					}), l = new oo.Rectangle(t, t, x(c), 0 == O ? null : oo.dark, 0 == O ? null : 2, null, null, null, !1).centerReg({
						add: !1
					}).addTo(i, 0).loc({
						x: u[6],
						y: u[7]
					});
					s.mySet = i, s.rect1 = a, s.rect2 = l, s.index = h, d ? s.on("mousedown", w) : s.on("dblclick", C), a.ball = s, (a.other = l).ball = s, l.other = a, 0 == O && (s.expand(10), a.expand(10), l.expand(10)), d && (s.expand(), a.expand(), l.expand()), o = [i, s, a, l, u ? u[8] : I], q.push(o), K.push(s), U.push(i)
				}
				var b, y = !1;

				function w(e) {
					y ? (e.preventDefault(), C(e)) : (y = !0, setTimeout(function() {
						y = !1
					}, 300))
				}

				function C(e) {
					if (!Z.lockControlType) {
						var t = e.target,
							o = q[t.index][4] ? q[t.index][4] : I;
						Math.abs(t.rect1.x) <= 2 && Math.abs(t.rect1.y) <= 2 && Math.abs(t.rect2.x) <= 2 && Math.abs(t.rect2.y) <= 2 && (o = "none"), "none" == o && t.parent.addChildAt(t, 0), "none" == (o = Z.types[(Z.types.indexOf(o) + (Z.shiftKey ? -1 : 1) + Z.types.length) % Z.types.length]) && (t.rect1.x = t.rect1.y = t.rect2.x = t.rect2.y = 0, t.parent.addChild(t), e.stopImmediatePropagation()), q[t.index][4] = o, t.rect1.color = x(o), t.rect2.color = x(o), ae();
						var n = new createjs.Event("change");
						n.controlType = "bezierSwitch", Z.dispatchEvent(n), t.stage.update()
					}
				}

				function x(e) {
					var t = {
						straight: oo.pink,
						free: oo.yellow,
						none: oo.blue
					};
					return t[e] ? t[e] : oo.purple
				}

				function k(e) {
					if ("Circle" == e.target.type) {
						var t = Z.lastSelectedIndex = Z.controls.getChildIndex(e.target.parent);
						if (Z.controls.numChildren <= 2) return;
						var o = Z.points;
						Z.selectPoints && (Z.lastPoints = oo.copy(o)), o.splice(t, 1), Z.points = o, Z.stage.update(), Z.lastSelected = Z.lastSelectedIndex = null
					}
				}(ae = function() {
					m.c();
					var e = oo.mobile() ? 10 : 6;
					if (T < e) {
						m.s("rgba(0,0,0,.01)").ss(e);
						var t = (i = q[0][0]).localToLocal(q[0][1].x, q[0][1].y, ee);
						m.mt(t.x, t.y);
						for (var o = 0; o < q.length; o++) {
							var n = o,
								r = (o + 1) % q.length,
								i = q[n][0],
								a = q[n][1],
								l = q[n][2],
								s = q[n][3],
								c = q[r][0],
								u = q[r][1],
								d = q[r][2],
								h = (q[r][3], i.localToLocal(s.x, s.y, ee)),
								g = c.localToLocal(d.x, d.y, ee),
								p = c.localToLocal(u.x, u.y, ee);
							o != q.length - 1 && m.bt(h.x, h.y, g.x, g.y, p.x, p.y)
						}
					}
					Z.colorCommand || (Z.colorCommand = Q = m.s(se).command), Z.thicknessCommand || (Z.thicknessCommand = J = m.ss(ce, W.caps, W.joints, W.miterLimit, W.ignoreScale).command), L && (Z.dashedCommand || (Z.dashedCommand = $ = m.sd([10, 10], 5).command)), t = (i = q[0][0]).localToLocal(q[0][1].x, q[0][1].y, ee), m.mt(t.x, t.y), z.c().s(Z.stickColor).ss(1);
					for (o = 0; o < q.length; o++) {
						n = o, r = (o + 1) % q.length, i = q[n][0], a = q[n][1], l = q[n][2], s = q[n][3], c = q[r][0], u = q[r][1], d = q[r][2], q[r][3], h = i.localToLocal(s.x, s.y, ee), g = c.localToLocal(d.x, d.y, ee), p = c.localToLocal(u.x, u.y, ee);
						o != q.length - 1 && m.bt(h.x, h.y, g.x, g.y, p.x, p.y);
						t = i.localToLocal(a.x, a.y, ee);
						var f = i.localToLocal(l.x, l.y, ee);
						0 == o && (l.visible = 0), 0 != o && z.mt(t.x, t.y).lt(f.x, f.y), o != q.length - 1 && z.mt(t.x, t.y).lt(h.x, h.y), o == q.length - 1 && (s.visible = 0)
					}
					L && m.append(Z.dashedCommand), m.append(Z.thicknessCommand), m.append(Z.colorCommand)
				})(), le.on("mousedown", function(e) {
					if (re = e.target.stage, !Z.lockControls) {
						if (Z.selectPoints && (Z.keyFocus = !0), b = {
								x: e.target.x,
								y: e.target.y
							}, e.target.rect1) {
							(o = e.target).startX = o.x, o.startY = o.y, o.rect1.startX = o.rect1.x, o.rect1.startY = o.rect1.y, o.rect2.startX = o.rect2.x, o.rect2.startY = o.rect2.y
						} else {
							var t = e.target;
							t.startX = t.x, t.startY = t.y;
							var o, n = (o = t.ball).index,
								r = I;
							if (zot(q[n][4]) || (r = q[n][4]), "straight" == r) {
								var i = t.other,
									a = i.x - o.x,
									l = i.y - o.y;
								i.stickLength = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
							}
						}
						if (Z.selectPoints) {
							var s = Z.selectionManager.currentSet;
							if (s && s.selections && 0 < s.selections.length)
								for (var c = 0; c < s.selections.length; c++) {
									var u = Z.pointObjects[s.selections[c]];
									u[1].startX = u[1].x, u[1].startY = u[1].y, u[2].startX = u[2].x, u[2].startY = u[2].y, u[3].startX = u[3].x, u[3].startY = u[3].y
								}
						}
					}
				}), Z.selectPoints && le.tap(function(e) {
					if (e.target.rect1) {
						var t = e.target;
						Z.selectedBalls.toggle(t.parent.num)
					} else {
						var o = e.target;
						o.color = "white", (t = o.ball).rect1 == o ? Z.selectedRect1s.toggle(t.parent.num) : Z.selectedRect2s.toggle(t.parent.num)
					}
					for (var n = 0; n < Z.pointObjects.length; n++) {
						var r = Z.pointObjects[n];
						r[1].color = Z.selectedBalls.isSelected(n) ? oo.white : oo.light, r[2].color = Z.selectedRect1s.isSelected(n) ? oo.white : x(r[4]), r[3].color = Z.selectedRect2s.isSelected(n) ? oo.white : x(r[4])
					}
					re.update()
				}), le.on("pressmove", function(e) {
					if (!Z.lockControls)
						if (Z.selectPoints) {
							var t = de();
							if (-1 == t.indexOf(e.target)) ie(e.target), ae();
							else if (0 < t.length) {
								diffX = e.target.x - e.target.startX, diffY = e.target.y - e.target.startY;
								for (var o = 0; o < t.length; o++) {
									var n = t[o];
									n.x = n.startX + diffX, n.y = n.startY + diffY, ie(n)
								}
								ae()
							}
						} else ie(e.target), ae()
				}), le.on("pressup", function(e) {
					if (!Z.lockControls) {
						var t = e.target.x != b.x || e.target.y != b.y,
							o = new createjs.Event("change");
						e.target.rect1 ? (o.controlType = "bezierPoint", function(e) {
							if (Z.selectPoints) {
								var t = de();
								if (t && -1 == t.indexOf(e)) he(e);
								else if (t && 0 < t.length)
									for (var o = 0; o < t.length; o++) he(t[o]);
								else he(e)
							} else he(e)
						}(e.target)) : o.controlType = "bezierHandle", t && Z.dispatchEvent(o)
					}
				}), Z.changeControl = function(e, t, o, n, r, i, a, l, s) {
					var c;
					if (c = zob(Z.changeControl, arguments, "index, type, rect1X, rect1Y, rect2X, rect2Y, circleX, circleY, update")) return c;
					if (zot(e))
						for (var u = 0; u < q.length; u++) Z.changeControl(u, t, o, n, r, i, a, l);
					else {
						var d = q[e];
						"none" == (d[4] = t) ? (zot(a) || (d[2].x = a), zot(l) || (d[2].y = l), d[2].x = d[1].x, d[2].y = d[1].y, d[3].x = d[1].x, d[3].y = d[1].y, d[1].parent.addChild(d[1])) : (zot(o) || (d[2].x = o), zot(n) || (d[2].y = n), zot(r) || (d[3].x = r), zot(i) || (d[3].y = i), zot(a) || (d[1].x = a), zot(l) || (d[1].y = l), d[1].parent.addChildAt(d[1], 0)), s && (Z.update(), Z.stage && Z.stage.update())
					}
				}, Z.transformPoints = function(e, t, o, n) {
					return Z.points = oo.transformPoints(Z.points, e, t, o, n), Z
				}, Z.traverse = function(o, e, t, n) {
					var r = oo.copy(Z.segmentRatios);
					r.unshift(0), zot(t) && (t = e + 1);
					var i = e < t;
					if (i) var a = 100 * r[e],
						l = 100 * r[t];
					else a = 50 + (100 - 100 * r[e]) / 2, l = 50 + (100 - 100 * r[t]) / 2;
					return o.percentComplete = a, o.animate({
						ease: "linear",
						props: {
							path: Z
						},
						rewind: !i,
						time: n,
						events: !0
					}), o.on("animation", function(e) {
						if (o.percentComplete > l || 0 == o.percentComplete) {
							o.stopAnimate(), e.remove();
							var t = new createjs.Event("traversed");
							t.obj = o, Z.dispatchEvent(t)
						}
					}), Z
				}, Z.update = function(e) {
					return e ? Z.points = Z.pointsAdjusted : ae(), Z.zimAnimateChanged = !0, Z
				}, Z.interactive && (j && ee.drag({
					onTop: !1
				}), te = ee.on("mousedown", function(e) {
					re = e.target.stage, b = {
							x: ee.x,
							y: ee.y
						}, Z.selectPoints && (Z.keyFocus = !0),
						function() {
							if (Z.onTop) {
								var e = Z.parent.numChildren - 1;
								"Keyboard" == Z.parent.getChildAt(e).type && e--, Z.parent.setChildIndex(Z, e)
							}
						}()
				}), oe = ee.on("pressmove", function() {
					le.x = ee.x, le.y = ee.y, n.x = ee.x, n.y = ee.y
				}), ne = ee.on("pressup", function() {
					var e = ee.x != b.x || ee.y != b.y,
						t = ee.localToLocal(0, 0, Z.parent);
					if (Z.x = t.x, Z.y = t.y, le.x = le.y = n.x = n.y = ee.x = ee.y = 0, e) {
						var o = new createjs.Event("change");
						o.controlType = "move", Z.dispatchEvent(o)
					}
					re.update()
				}), Z.move || pe(!0)), Z.toggleEvent = Z.on("mousedown", function() {
					Z.allowToggle && (V || (Z.showControls(), Z.dispatchEvent("controlsshow")))
				}), Z.added(function() {
					Z.toggleStageEvent = Z.stage.on("stagemousedown", function(e) {
						Z.allowToggle && Z.stage && V && !Z.hitTestPoint(e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY, !1) && (Z.hideControls(), Z.dispatchEvent("controlshide"))
					})
				}), Z.clickEvent = Z.on("click", function() {
					Z.ctrlKey && setTimeout(function() {
						Z.clone(!0).addTo(Z.stage).mov(0, 100), Z.allowToggle && (Z.hideControls(), Z.dispatchEvent("controlshide"));
						var e = new createjs.Event("change");
						e.controlType = "move", Z.dispatchEvent(e), Z.stage.update()
					}, 50)
				}), Z.hideControls = function() {
					return Z.toggled = !1, le.visible = !1, n.visible = !1, V = !1, Z.stage && Z.stage.update(), !Z.allowToggle && Z.move && pe(), Z
				}, M || Z.hideControls(), Z.showControls = function() {
					return Z.toggled = !0, le.visible = !0, n.visible = !0, V = !0, le.x = ee.x, le.y = ee.y, n.x = ee.x, n.y = ee.y, Z.addChildAt(ee, 0), Z.move && !Z.allowToggle && ge(), Z.stage && Z.stage.update(), Z
				}, Z.toggle = function(e) {
					return !0 === e ? Z.showControls() : !1 === e ? Z.hideControls() : V ? Z.hideControls() : Z.showControls(), Z
				}, Z.recordData = function(e) {
					zot(e) && (e = !1);
					var t = {
						type: "Bloob",
						index: Z.parent ? Z.parent.getChildIndex(Z) : -1,
						x: Z.x,
						y: Z.y,
						points: Z.recordPoints(),
						color: Z.color,
						thickness: Z.thickness,
						move: Z.move,
						toggle: Z.allowToggle,
						controlsVisible: V
					};
					return e ? JSON.stringify(t) : t
				}, Z.setData = function(e, t) {
					if (!zot(e)) {
						if (t) try {
							e = JSON.parse(e)
						} catch (e) {
							return
						}
						var o = e.index;
						zot(o) && (o = -1), delete e.index;
						var n = e.points;
						for (var r in zot(n) || Z.setPoints(n), delete e.points, Z.num = n.length, e) Z[r] = e[r];
						return Z.parent && Z.parent.setChildIndex(Z, o), Z.update(), Z
					}
				}, Z.recordPoints = function(e) {
					zot(e) && (e = !1);
					var t = Z.points;
					if (e) {
						if (!Z.pane) {
							var o = Z.pane = new oo.Pane({
								container: Z.stage,
								width: Math.min(500, Z.stage.width - 20),
								height: Math.min(500, Z.stage.height - 20),
								draggable: !0
							});
							(Z.textArea = new oo.TextArea(Math.min(400, Z.stage.width - 70), Math.min(400, Z.stage.height - 70))).centerReg(o)
						}
						Z.textArea.text = JSON.stringify(t), Z.pane.show()
					}
					return t
				}, !(Z.setPoints = function(e) {
					for (var t, o, n = 0; n < e.length; n++) t = q[n], o = e[n], zot(t) || (t[0].x = o[0], t[0].y = o[1], t[1].x = o[2], t[1].y = o[3], t[2].x = o[4], t[2].y = o[5], t[3].x = o[6], t[3].y = o[7], t[4] = o[8]);
					return Z.update(), Z
				}) !== F && De(Z, H), Z.clone = function(e) {
					e ? Z.colorCommand : Z.color, e ? Z.colorCommand : Z.color;
					var t = Z.cloneProps(new oo.Squiggle(e ? Z.colorCommand : Z.color, Z.thickness, Z.recordPoints(), P, B, I, S, le.visible, E, O, Z.allowToggle, Z.move, L, D, Y, X, R, Z.editPoints, _, W, F, Z.group, G));
					return Z.linearGradientParams && t.linearGradient.apply(t, Z.linearGradientParams), Z.radialGradientParams && t.radialGradient.apply(t, Z.linearGradientParams), t
				}, Z.shape.on("mousedown", function(e) {
					re = e.target.stage, Z.editPoints && (Z.controlsVisible ? (Z.pressX = e.stageX / re.scaleX, Z.pressY = e.stageY / re.scaleX) : (Z.pressX = null, Z.pressY = null))
				}), Z.addPointFactor = 20, Z.addMinDistance = 15, Z.shape.on("pressup", function(e) {
					if (Z.editPoints && Z.pressX && Math.abs(Z.pressX - e.stageX / re.scaleX) < ue && Math.abs(Z.pressY - e.stageY / re.scaleY) < ue) {
						Z.selectPoints && (Z.lastPoints = oo.copy(Z.points));
						var t = Z.points,
							n = Z.globalToLocal(e.stageX / re.scaleX, e.stageY / re.scaleY),
							o = oo.closestPointAlongCurve(n, Z.segmentPoints);
						if ("anywhere" == Z.editPoints) t.splice(o + 1, 0, [n.x, n.y, 0, 0, 0, 0, 0, 0]), Z.points = t, Z.changeControl({
							index: o + 1,
							type: "mirror",
							update: !0
						});
						else {
							var r, i = Z.pointsAdjusted,
								a = Z.getSegmentPoint(i[o], i[(o + 1) % i.length]),
								l = oo.distanceAlongCurve(a),
								s = Math.round(l / Z.addPointFactor),
								c = Z.interpolate(s, o, t),
								u = 1e4;
							if (oo.loop(c, function(e, t) {
									if (0 != t) {
										var o = oo.dist(e, n);
										o < u && (u = o, r = t, e)
									}
								}), u < Z.addMinDistance) {
								var d = Z.segmentRatios,
									h = d[o],
									g = 0 < o ? d[o - 1] : 0;
								Z.addPoint(100 * (g + r / s * (h - g)))
							}
						}
						Z.lastSelectedIndex = o + 1, Z.lastSelected = Z.controls.getChildAt(Z.lastSelectedIndex), Z.stage.update()
					}
				}), Z.controls.on("click", function(e) {
					Z.lastSelected = e.target.parent;
					Z.lastSelectedIndex = Z.controls.getChildIndex(e.target.parent);
					Z.editPoints && Z.selectionManager.shiftKey && k(e)
				}), Z.controls.hold(k), V || Z.hideControls(), Z.dispatchEvent("update")
			}

			function de() {
				var e = [],
					t = Z.selectionManager.currentSet;
				if (t && t.selections && 0 < t.selections.length)
					for (var o = 0; o < t.selections.length; o++) {
						var n = Z.pointObjects[t.selections[o]];
						if (t == Z.selectedBalls) e.push(n[1]);
						else if (t == Z.selectedRect1s) e.push(n[2]);
						else {
							if (t != Z.selectedRect2s) continue;
							e.push(n[3])
						}
					}
				return e
			}

			function he(e) {
				if ("Circle" == e.type) {
					var t = e,
						o = t.mySet,
						n = t.rect1,
						r = t.rect2;
					n.x -= t.x, n.y -= t.y, r.x -= t.x, r.y -= t.y, o.x += t.x, o.y += t.y, t.x = 0, t.y = 0
				}
			}

			function ge() {
				"always" != Z.move && (l || (l = !0, ee.drag({
					onTop: !1
				}), te = ee.on("mousedown", te), oe = ee.on("pressmove", oe), ne = ee.on("pressup", ne)))
			}

			function pe(e) {
				"always" != Z.move && (e || l) && (l = !1, ee.noDrag(), ee.off("mousedown", te), ee.off("pressmove", oe), ee.off("pressup", ne))
			}

			function w(e, t, o) {
				return {
					x: e.x + (t.x - e.x) * o,
					y: e.y + (t.y - e.y) * o
				}
			}

			function g(e, t, o, n, r, i, a) {
				var l = e.length - 1,
					s = 0,
					c = 0;
				100 == n && "Squiggle" == Z.type && (n = 99.99), n = (n + 1e5) % 100, oo.loop(o, function(e, t) {
					if (n / 100 < e) return l = t, c = e, !0;
					s = e
				});
				var u = Z.segmentPoints[l],
					d = 0 < c ? (n / 100 - s) / (c - s) : 0,
					h = oo.pointAlongCurve(u, d),
					g = [h.x, h.y, 0, 0];
				if (!i)
					if (a) Z.interpolatedPoints.push({
						x: h.x,
						y: h.y,
						r: n / 100
					});
					else {
						if ("none" != r) {
							var p = w(u[0], u[1], d),
								f = w(u[1], u[2], d),
								m = w(u[2], u[3], d),
								z = w(p, f, d),
								v = w(f, m, d);
							g[4] = z.x - h.x, g[5] = z.y - h.y, g[6] = v.x - h.x, g[7] = v.y - h.y;
							var b = Z.localToLocal(p.x, p.y, t[l]);
							e[l][6] = b.x, e[l][7] = b.y;
							var y = Z.localToLocal(m.x, m.y, t[(l + 1) % e.length]);
							e[(l + 1) % e.length][4] = y.x, e[(l + 1) % e.length][5] = y.y
						}
						r && (g[8] = r), e.splice(l + 1, 0, g)
					}
			}
		}, oo.extend(oo.Squiggle, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Bloob = function(e, t, o, T, A, P, B, I, n, S, M, r, E, O, j, L, D, Y, i, X, R, _, a, W) {
			var l;
			if (l = zob(oo.Bloob, arguments, "color, borderColor, borderWidth, points, radius, controlLength, controlType, lockControlType, showControls, lockControls, handleSize, allowToggle, move, dashed, onTop, stickColor, selectColor, selectPoints, editPoints, interactive, strokeObj, style, group, inherit", this)) return l;
			z_d("53.5"), this.group = a;
			var F = !1 === _ ? {} : oo.getStyle("Bloob", this.group, W);
			zot(A) && (A = null != F.radius ? F.radius : 100), this.zimContainer_constructor(-A, -A, 2 * A, 2 * A, !1), this.type = "Bloob", zot(O) && (O = null != F.dashed && F.dashed), zot(t) && (t = null != F.borderColor ? F.borderColor : null), zot(o) && (o = null != F.borderWidth ? F.borderWidth : null), t < 0 || o < 0 ? t = o = null : null != t && null == o && (o = 1), zot(e) && (e = null != F.color ? F.color : 0 < o ? "rgba(0,0,0,0)" : oo.green), e.style && (this.colorCommand = e, e = "black"), t && t.style && (this.borderColorCommand = t, t = "black"), zot(T) && (T = null != F.points ? F.points : 4);
			var G = "number" == typeof T ? T : T.length,
				H = P;
			zot(P) && (P = null != F.controlLength ? F.controlLength : 4 * A / G), zot(B) && (B = null != F.controlType ? F.controlType : null);
			var s = B;
			zot(B) && (B = "straight"), zot(I) && (I = null != F.lockControlType && F.lockControlType), zot(X) && (X = null == F.interactive || F.interactive), zot(n) && (n = null != F.showControls ? F.showControls : X);
			var N = n;
			zot(S) && (S = null != F.lockControls ? F.lockControls : !X), zot(M) && (M = null != F.handleSize ? F.handleSize : oo.mobile() ? 20 : 10), zot(r) && (r = null != F.allowToggle ? F.allowToggle : X), zot(E) && (E = null != F.move ? F.move : X), zot(L) && (L = null != F.stickColor ? F.stickColor : "#111"), zot(D) && (D = null != F.selectColor ? F.selectColor : "#fff"), zot(Y) && (Y = null != F.selectPoints ? F.selectPoints : X), this.stickColor = L, zot(j) && (j = null == F.onTop || F.onTop), zot(i) && (i = null != F.editPoints ? F.editPoints : X), zot(R) && (R = null != F.strokeObj ? F.strokeObj : {});
			var V = this;
			this.interactive = X, this.num = G, this.editPoints = i, this.selectPoints = Y, this.lockControls = S, this.onTop = j, this.move = E, this.allowToggle = r, this.lockControlType = I;
			this.types = ["mirror", "straight", "free", "none"];
			var q, K, U, Z, Q, J, $, ee, te, oe, ne, re, ie, ae, le, se = e,
				ce = t,
				ue = o,
				c = V.move,
				de = 2;

			function u(e) {
				var t;
				if ("circle" != e && "rectangle" != e && "triangle" != e || ("circle" == e && (e = new Circle(A)), "rectangle" == e && (e = new Rectangle(2 * A, 2 * A).centerReg({
						add: !1
					})), "triangle" == e && (e = new Triangle(2 * A, 2 * A, 2 * A))), "Circle" != e.type && "Rectangle" != e.type && "Triangle" != e.type) return e;
				var o = e.getBounds();
				return "Circle" == e.type ? (t = 4, H = P = 2 * A * .5523) : "Rectangle" == e.type ? (e.centerReg({
					add: !1
				}), t = [
					[o.x - o.width / 2, o.y - o.height / 2],
					[o.x + o.width / 2, o.y - o.height / 2],
					[o.x + o.width / 2, o.y + o.height / 2],
					[o.x - o.width / 2, o.y + o.height / 2]
				], V.setBounds(o.x - o.width / 2, o.y - o.height / 2, o.width, o.height), V.regX = e.regX - o.width / 2, V.regY = e.regY - o.height / 2) : "Triangle" == e.type && (t = [
					[e.three.x - e.width / 2, e.three.y + e.height / 2 + e.adjusted],
					[e.two.x - e.width / 2, e.two.y + e.height / 2 + e.adjusted],
					[e.one.x - e.width / 2, e.one.y + e.height / 2 + e.adjusted]
				], V.setBounds(o.x - o.width / 2, o.y - o.height / 2, o.width, o.height)), t
			}
			if ("string" == typeof(T = u(T))) {
				var d = new oo.SVGContainer;
				T = d.processPath(T)
			}

			function h() {
				if (le && le.removeAllEventListeners(), V.selectPoints ? (V.selectedBalls = new oo.SelectionSet, V.selectedRect1s = new oo.SelectionSet, V.selectedRect2s = new oo.SelectionSet, V.selectionManager = new oo.SelectionManager([V.selectedBalls, V.selectedRect1s, V.selectedRect2s], "ctrl", !1)) : V.selectionManager = new oo.SelectionManager(null, "ctrl"), !((G = "number" == typeof T ? T : T.length) <= 0)) {
					zot(H) && (P = 4 * A / G), ee = V.shape = new oo.Shape({
						style: !1
					}).addTo(V);
					var n = V.sticks = new oo.Shape({
						style: !1
					}).addTo(V);
					M <= 0 && n.removeFrom();
					var f = ee.graphics;
					f.c();
					var m = n.graphics;
					m.c();
					var e, t, o, r, i, a, l, s, c = M / 10 * 8,
						u = M,
						d = oo.mobile();
					le = V.controls = new oo.Container({
						style: !1
					}).addTo(V), V.interactive && le.drag({
						onTop: !d
					}), q = [], U = [], K = [];
					for (var h = 0; h < G; h++) {
						if ((o = new oo.Container({
								style: !1
							}).addTo(le)).num = h, "number" == typeof T) {
							var g = oo.Pick.choose(P);
							(t = new oo.Container(g, A, null, null, !1).reg(g / 2, A).addTo(V)).rotation = h / G * 360, a = new oo.Circle(c, V.selectPoints && V.selectedBalls.isSelected(h) ? D : oo.light, oo.dark, 2, null, null, null, !1).centerReg(t).loc({
								x: g / 2,
								y: 0
							}), r = new oo.Rectangle(u, u, V.selectPoints && V.selectedRect1s.isSelected(h) ? D : x(B), 0 == M ? null : oo.dark, 0 == M ? null : 2, null, null, null, !1).centerReg(t).loc({
								x: 0,
								y: 0
							}), i = new oo.Rectangle(u, u, V.selectPoints && V.selectedRect2s.isSelected(h) ? D : x(B), 0 == M ? null : oo.dark, 0 == M ? null : 2, null, null, null, !1).centerReg(t).loc({
								x: g,
								y: 0
							});
							var p = t.localToLocal(a.x, a.y, le);
							a.x = p.x, a.y = p.y, a.addTo(o, null, !1);
							var z = t.localToLocal(r.x, r.y, le);
							r.x = "none" == B ? 0 : z.x - a.x, r.y = "none" == B ? 0 : z.y - a.y, r.addTo(o, null, !1);
							var v = t.localToLocal(i.x, i.y, le);
							i.x = "none" == B ? 0 : v.x - a.x, i.y = "none" == B ? 0 : v.y - a.y, i.addTo(o, null, !1), o.x = a.x, o.y = a.y, a.x = 0, a.y = 0, "none" == B && a.addTo(o, null, !1)
						} else l = (s = T[h])[8] ? s[8] : B, o.loc({
							x: s[0],
							y: s[1]
						}), a = new oo.Circle(c, oo.light, oo.dark, 2, null, null, null, !1).centerReg({
							add: !1
						}).addTo(o).loc({
							x: s[2],
							y: s[3]
						}), r = new oo.Rectangle(u, u, x(l), 0 == M ? null : oo.dark, 0 == M ? null : 2, null, null, null, !1).centerReg({
							add: !1
						}).addTo(o, 0).loc({
							x: s[4],
							y: s[5]
						}), i = new oo.Rectangle(u, u, x(l), 0 == M ? null : oo.dark, 0 == M ? null : 2, null, null, null, !1).centerReg({
							add: !1
						}).addTo(o, 0).loc({
							x: s[6],
							y: s[7]
						});
						a.mySet = o, a.rect1 = r, a.rect2 = i, a.index = h, 0 == M && (a.expand(10), r.expand(10), i.expand(10)), d ? a.on("mousedown", w) : a.on("dblclick", C), r.ball = a, (r.other = i).ball = a, i.other = r, d && (a.expand(), r.expand(), i.expand()), e = [o, a, r, i, s ? s[8] : B], q.push(e), K.push(a), U.push(o)
					}
					var b, y = !1;
					(ae = function() {
						f.c(), V.colorCommand || (V.colorCommand = Z = f.f(se).command), (zot(ue) || 0 < ue) && (zot(ce) && zot(ue) || (zot(ce) && (ce = "black"), V.borderColorCommand || (V.borderColorCommand = Q = f.s(ce).command), V.borderWidthCommand || (V.borderWidthCommand = J = f.ss(ue, R.caps, R.joints, R.miterLimit, R.ignoreScale).command), O && (V.borderDashedCommand || (V.borderDashedCommand = $ = f.sd([10, 10], 5).command))));
						var e = (r = q[0][0]).localToLocal(q[0][1].x, q[0][1].y, ee);
						f.mt(e.x, e.y), m.c().s(V.stickColor).ss(1);
						for (var t = 0; t < q.length; t++) {
							var o = t,
								n = (t + 1) % q.length,
								r = q[o][0],
								i = q[o][1],
								a = q[o][2],
								l = q[o][3],
								s = q[n][0],
								c = q[n][1],
								u = q[n][2],
								d = (q[n][3], r.localToLocal(l.x, l.y, ee)),
								h = s.localToLocal(u.x, u.y, ee),
								g = s.localToLocal(c.x, c.y, ee);
							f.bt(d.x, d.y, h.x, h.y, g.x, g.y);
							e = r.localToLocal(i.x, i.y, ee);
							var p = r.localToLocal(a.x, a.y, ee);
							m.mt(e.x, e.y).lt(p.x, p.y), m.mt(e.x, e.y).lt(d.x, d.y)
						}
						f.cp(), f.append(V.colorCommand), O && f.append(V.borderDashedCommand), V.borderWidthCommand && f.append(V.borderWidthCommand), V.borderColorCommand && f.append(V.borderColorCommand)
					})(), le.on("mousedown", function(e) {
						if (!V.lockControls) {
							if (V.selectPoints && (V.keyFocus = !0), b = {
									x: e.target.x,
									y: e.target.y
								}, e.target.rect1) {
								(o = e.target).startX = o.x, o.startY = o.y, o.rect1.startX = o.rect1.x, o.rect1.startY = o.rect1.y, o.rect2.startX = o.rect2.x, o.rect2.startY = o.rect2.y
							} else {
								var t = e.target;
								t.startX = t.x, t.startY = t.y;
								var o, n = (o = t.ball).index,
									r = B;
								if (zot(q[n][4]) || (r = q[n][4]), "straight" == r) {
									var i = t.other,
										a = i.x - o.x,
										l = i.y - o.y;
									i.stickLength = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
								}
							}
							if (V.selectPoints) {
								var s = V.selectionManager.currentSet;
								if (s && s.selections && 0 < s.selections.length)
									for (var c = 0; c < s.selections.length; c++) {
										var u = V.pointObjects[s.selections[c]];
										u[1].startX = u[1].x, u[1].startY = u[1].y, u[2].startX = u[2].x, u[2].startY = u[2].y, u[3].startX = u[3].x, u[3].startY = u[3].y
									}
							}
						}
					}), V.selectPoints && le.tap(function(e) {
						if (e.target.rect1) {
							var t = e.target;
							V.selectedBalls.toggle(t.parent.num)
						} else {
							var o = e.target;
							o.color = "white", (t = o.ball).rect1 == o ? V.selectedRect1s.toggle(t.parent.num) : V.selectedRect2s.toggle(t.parent.num)
						}
						for (var n = 0; n < V.pointObjects.length; n++) {
							var r = V.pointObjects[n];
							r[1].color = V.selectedBalls.isSelected(n) ? oo.white : oo.light, r[2].color = V.selectedRect1s.isSelected(n) ? oo.white : x(r[4]), r[3].color = V.selectedRect2s.isSelected(n) ? oo.white : x(r[4])
						}
						e.target.stage.update()
					}), le.on("pressmove", function(e) {
						if (!V.lockControls)
							if (V.selectPoints) {
								var t = he();
								if (-1 == t.indexOf(e.target)) ie(e.target), ae();
								else if (0 < t.length) {
									diffX = e.target.x - e.target.startX, diffY = e.target.y - e.target.startY;
									for (var o = 0; o < t.length; o++) {
										var n = t[o];
										n.x = n.startX + diffX, n.y = n.startY + diffY, ie(n)
									}
									ae()
								}
							} else ie(e.target), ae()
					}), le.on("pressup", function(e) {
						if (!V.lockControls) {
							var t = e.target.x != b.x || e.target.y != b.y,
								o = new createjs.Event("change");
							e.target.rect1 ? (o.controlType = "bezierPoint", function(e) {
								if (V.selectPoints) {
									var t = he();
									if (t && -1 == t.indexOf(e)) ge(e);
									else if (t && 0 < t.length)
										for (var o = 0; o < t.length; o++) ge(t[o]);
									else ge(e)
								} else ge(e)
							}(e.target)) : o.controlType = "bezierHandle", t && V.dispatchEvent(o)
						}
					}), V.changeControl = function(e, t, o, n, r, i, a, l, s) {
						var c;
						if (c = zob(V.changeControl, arguments, "index, type, rect1X, rect1Y, rect2X, rect2Y, circleX, circleY, update")) return c;
						if (zot(e)) {
							for (var u = 0; u < q.length; u++) V.changeControl(u, t, o, n, r, i, a, l);
							return V
						}
						var d = q[e];
						return "none" == (d[4] = t) ? (zot(a) || (d[1].x = a), zot(l) || (d[1].y = l), d[2].x = d[1].x, d[2].y = d[1].y, d[3].x = d[1].x, d[3].y = d[1].y, d[1].parent.addChild(d[1])) : (zot(a) || (d[1].x = a), zot(l) || (d[1].y = l), zot(o) || (d[2].x = o), zot(n) || (d[2].y = n), zot(r) || (d[3].x = r), zot(i) || (d[3].y = i), d[1].parent.addChildAt(d[1], 0)), d[2].color = x(t), d[3].color = x(t), s && (V.update(), V.stage && V.stage.update()), V
					}, V.transformPoints = function(e, t, o, n) {
						return V.points = oo.transformPoints(V.points, e, t, o, n), V
					}, V.traverse = function(o, e, t, n) {
						var r = oo.copy(V.segmentRatios);
						r.unshift(0), zot(t) && (t = e + 1);
						var i = e < t;
						if (i) var a = 100 * r[e],
							l = 100 * r[t];
						else a = 50 + (100 - 100 * r[e]) / 2, l = 50 + (100 - 100 * r[t]) / 2;
						return o.percentComplete = a, o.animate({
							ease: "linear",
							props: {
								path: V
							},
							rewind: !i,
							time: n,
							events: !0
						}), o.on("animation", function(e) {
							if (o.percentComplete > l || 0 == o.percentComplete) {
								o.stopAnimate(), e.remove();
								var t = new createjs.Event("traversed");
								t.obj = o, V.dispatchEvent(t)
							}
						}), V
					}, V.update = function(e) {
						return e ? V.points = V.pointsAdjusted : ae(), V.zimAnimateChanged = !0, V
					}, V.move && V.interactive && ee.drag({
						onTop: !1
					}), te = ee.on("mousedown", function() {
						b = {
								x: ee.x,
								y: ee.y
							}, V.selectPoints && (V.keyFocus = !0),
							function() {
								if (V.onTop) {
									var e = V.parent.numChildren - 1;
									"Keyboard" == V.parent.getChildAt(e).type && e--, V.parent.setChildIndex(V, e)
								}
							}()
					}), oe = ee.on("pressmove", function() {
						le.x = ee.x, le.y = ee.y, n.x = ee.x, n.y = ee.y
					}), ne = ee.on("pressup", function() {
						var e = ee.x != b.x || ee.y != b.y,
							t = ee.localToLocal(0, 0, V.parent);
						if (V.x = t.x, V.y = t.y, le.x = le.y = n.x = n.y = ee.x = ee.y = 0, e) {
							var o = new createjs.Event("change");
							o.controlType = "move", V.dispatchEvent(o)
						}
						V.stage.update()
					}), E || fe(!0), V.toggleEvent = V.on("mousedown", function() {
						V.allowToggle && (N || (V.showControls(), V.dispatchEvent("controlsshow")))
					}), V.added(function() {
						V.toggleStageEvent = V.stage.on("stagemousedown", function(e) {
							V.allowToggle && V.stage && N && !V.hitTestPoint(e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY, !1) && (V.hideControls(), V.dispatchEvent("controlshide"))
						})
					}), V.clickEvent = V.on("click", function() {
						V.ctrlKey && setTimeout(function() {
							V.clone(!0).addTo(V.stage).mov(100), V.allowToggle && (V.hideControls(), V.dispatchEvent("controlshide"));
							var e = new createjs.Event("change");
							e.controlType = "move", V.dispatchEvent(e), V.stage.update()
						}, 50)
					}), V.hideControls = function() {
						return V.toggled = !1, le.visible = !1, n.visible = !1, N = !1, V.stage && V.stage.update(), !V.allowToggle && V.move && fe(), V
					}, N || V.hideControls(), V.showControls = function() {
						return V.toggled = !0, le.visible = !0, n.visible = !0, N = !0, le.x = ee.x, le.y = ee.y, n.x = ee.x, n.y = ee.y, V.addChildAt(ee, 0), V.move && !V.allowToggle && pe(), V.stage && V.stage.update(), V
					}, V.toggle = function(e) {
						return !0 === e ? V.showControls() : !1 === e ? V.hideControls() : N ? V.hideControls() : V.showControls(), V
					}, V.recordData = function(e) {
						zot(e) && (e = !1);
						var t = {
							type: "Bloob",
							index: V.parent ? V.parent.getChildIndex(V) : -1,
							x: V.x,
							y: V.y,
							points: V.recordPoints(),
							color: V.color,
							borderColor: V.borderColor,
							borderWidth: V.borderWidth,
							move: V.move,
							toggle: V.allowToggle,
							controlsVisible: N
						};
						return e ? JSON.stringify(t) : t
					}, V.setData = function(e, t) {
						if (!zot(e)) {
							if (t) try {
								e = JSON.parse(e)
							} catch (e) {
								return
							}
							var o = e.index;
							zot(o) && (o = -1), delete e.index;
							var n = e.points;
							for (var r in zot(n) || V.setPoints(n), delete e.points, this.num = n.length, e) V[r] = e[r];
							return V.parent && V.parent.setChildIndex(V, o), V
						}
					}, V.recordPoints = function(e) {
						zot(e) && (e = !1);
						var t = V.points;
						if (e) {
							if (!o) {
								var o = V.pane = new oo.Pane({
										displayClose: !1,
										container: V.stage,
										width: Math.min(500, V.stage.width - 20),
										height: Math.min(500, V.stage.height - 20),
										draggable: !0
									}),
									n = V.textArea = new oo.TextArea(Math.min(400, V.stage.width - 70), Math.min(400, V.stage.height - 70));
								n.centerReg(o)
							}
							n.text = JSON.stringify(t), o.show()
						}
						return t
					}, !(V.setPoints = function(e) {
						for (var t, o, n = 0; n < e.length; n++) t = q[n], o = e[n], zot(t) || (t[0].x = o[0], t[0].y = o[1], t[1].x = o[2], t[1].y = o[3], t[2].x = o[4], t[2].y = o[5], t[3].x = o[6], t[3].y = o[7], t[4] = o[8], t[2].color = x(t[4]), t[3].color = x(t[4]));
						return V.update(), V
					}) !== _ && De(V, F), V.clone = function(e) {
						e ? V.colorCommand : V.color, e ? V.colorCommand : V.color;
						var t = V.cloneProps(new oo.Bloob(e ? V.colorCommand : V.color, e ? V.borderColorCommand : V.borderColor, V.borderWidth, V.recordPoints(), A, P, B, I, le.visible, S, M, V.allowToggle, V.move, O, j, L, D, Y, V.editPoints, X, R, _, V.group, W));
						return V.linearGradientParams && t.linearGradient.apply(t, V.linearGradientParams), V.radialGradientParams && t.radialGradient.apply(t, V.linearGradientParams), t
					}, V.shapeMousedownEvent = V.shape.on("mousedown", function(e) {
						re = e.target.stage, V.editPoints && (V.controlsVisible ? (V.pressX = e.stageX / re.scaleX, V.pressY = e.stageY / re.scaleY) : (V.pressX = null, V.pressY = null))
					}), V.addPointFactor = 20, V.addMinDistance = 15, V.shapePressupEvent = V.shape.on("pressup", function(e) {
						if (V.editPoints && V.pressX && Math.abs(V.pressX - e.stageX / re.scaleX) < de && Math.abs(V.pressY - e.stageY / re.scaleY) < de) {
							V.selectPoints && (V.lastPoints = oo.copy(V.points));
							var t = V.points,
								n = V.globalToLocal(e.stageX / re.scaleX, e.stageY / re.scaleY),
								o = oo.closestPointAlongCurve(n, V.segmentPoints);
							if ("anywhere" == V.editPoints) t.splice(o + 1, 0, [n.x, n.y, 0, 0, 0, 0, 0, 0]), V.points = t, V.changeControl({
								index: o + 1,
								type: "mirror",
								update: !0
							});
							else {
								var r, i = V.pointsAdjusted,
									a = V.getSegmentPoint(i[o], i[(o + 1) % i.length]),
									l = oo.distanceAlongCurve(a),
									s = Math.round(l / V.addPointFactor),
									c = V.interpolate(s, o, !1, t),
									u = 1e4;
								if (oo.loop(c, function(e, t) {
										if (0 != t) {
											var o = oo.dist(e, n);
											o < u && (u = o, r = t, e)
										}
									}), u < V.addMinDistance) {
									var d = V.segmentRatios,
										h = d[o],
										g = 0 < o ? d[o - 1] : 0;
									V.addPoint(100 * (g + r / s * (h - g)))
								}
							}
							V.lastSelectedIndex = o + 1, V.lastSelected = V.controls.getChildAt(V.lastSelectedIndex), V.stage.update()
						}
					}), V.controlsClickEvent = V.controls.on("click", function(e) {
						V.lastSelected = e.target.parent;
						V.lastSelectedIndex = V.controls.getChildIndex(e.target.parent);
						V.editPoints && V.selectionManager.shiftKey && k(e)
					}), V.controls.hold(k), N || V.hideControls(), V.dispatchEvent("update")
				}

				function w(e) {
					y ? (e.preventDefault(), C(e)) : (y = !0, setTimeout(function() {
						y = !1
					}, 300))
				}

				function C(e) {
					if (!V.lockControlType) {
						var t = e.target,
							o = q[t.index][4] ? q[t.index][4] : B;
						Math.abs(t.rect1.x) <= 2 && Math.abs(t.rect1.y) <= 2 && Math.abs(t.rect2.x) <= 2 && Math.abs(t.rect2.y) <= 2 && (o = "none"), "none" == o && t.parent.addChildAt(t, 0), "none" == (o = V.types[(V.types.indexOf(o) + (V.shiftKey ? -1 : 1) + V.types.length) % V.types.length]) && (t.rect1.x = t.rect1.y = t.rect2.x = t.rect2.y = 0, t.parent.addChild(t), e.stopImmediatePropagation()), q[t.index][4] = o, t.rect1.color = x(o), t.rect2.color = x(o), ae();
						var n = new createjs.Event("change");
						n.controlType = "bezierSwitch", V.dispatchEvent(n), t.stage.update()
					}
				}

				function x(e) {
					var t = {
						mirror: oo.purple,
						free: oo.yellow,
						none: oo.blue
					};
					return t[e] ? t[e] : oo.pink
				}

				function k(e) {
					if ("Circle" == e.target.type) {
						var t = V.lastSelectedIndex = V.controls.getChildIndex(e.target.parent);
						if (V.controls.numChildren <= 2) return;
						var o = V.points;
						V.selectPoints && (V.lastPoints = oo.copy(o)), o.splice(t, 1), V.points = o, V.stage.update(), V.lastSelected = V.lastSelectedIndex = null
					}
				}
			}

			function he() {
				var e = [],
					t = V.selectionManager.currentSet;
				if (t && t.selections && 0 < t.selections.length)
					for (var o = 0; o < t.selections.length; o++) {
						var n = V.pointObjects[t.selections[o]];
						if (t == V.selectedBalls) e.push(n[1]);
						else if (t == V.selectedRect1s) e.push(n[2]);
						else {
							if (t != V.selectedRect2s) continue;
							e.push(n[3])
						}
					}
				return e
			}

			function ge(e) {
				if (V.selectPoints && "Circle" == e.type) {
					var t = e,
						o = t.mySet,
						n = t.rect1,
						r = t.rect2;
					n.x -= t.x, n.y -= t.y, r.x -= t.x, r.y -= t.y, o.x += t.x, o.y += t.y, t.x = 0, t.y = 0
				}
			}

			function pe() {
				"always" != V.move && (c || (c = !0, ee.drag({
					onTop: !1
				}), te = ee.on("mousedown", te), oe = ee.on("pressmove", oe), ne = ee.on("pressup", ne)))
			}

			function fe(e) {
				"always" != V.move && (e || c) && (c = !1, ee.noDrag(), ee.off("mousedown", te), ee.off("pressmove", oe), ee.off("pressup", ne))
			}
			s && "number" != typeof T && loop(T, function(e) {
				"none" == (e[8] = s) && (e[4] = e[5] = e[6] = e[7] = 0)
			}), h(), V.selectionManager.on("keydown", function(e) {
				if (V.selectPoints && V.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
					var t = he();
					if (0 < t.length) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							37 == e.keyCode ? n.x -= V.selectionManager.shiftKey ? 10 : 1 : 39 == e.keyCode ? n.x += V.selectionManager.shiftKey ? 10 : 1 : 38 == e.keyCode ? n.y -= V.selectionManager.shiftKey ? 10 : 1 : 40 == e.keyCode && (n.y += V.selectionManager.shiftKey ? 10 : 1), ie(n)
						}
						ae(), V.stage && V.stage.update()
					}
				}
			}), V.selectionManager.on("keyup", function(e) {
				if (V.selectPoints && V.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
					var t = he();
					if (0 < t.length)
						for (var o = 0; o < t.length; o++) ge(t[o])
				}
			}), V.selectionManager.on("undo", function() {
				if (V.selectPoints && V.keyFocus && V.lastPoints) {
					var e = oo.copy(V.lastPoints);
					V.lastPoints = oo.copy(V.points), V.points = e, V.stage && V.stage.update()
				}
			}), ie = function(e) {
				if (!V.lockControls)
					if (e.rect1) {
						var t = (n = e).x - n.startX,
							o = n.y - n.startY;
						n.rect1.x = n.rect1.startX + t, n.rect1.y = n.rect1.startY + o, n.rect2.x = n.rect2.startX + t, n.rect2.y = n.rect2.startY + o
					} else {
						var n, r = e,
							i = r.other,
							a = (n = r.ball).index,
							l = B;
						if (zot(q[a][4]) || (l = q[a][4]), "straight" == l || "mirror" == l) {
							var s = r.x - n.x,
								c = r.y - n.y;
							if ("mirror" == l) i.x = n.x - s, i.y = n.y - c;
							else {
								var u = Math.atan2(c, s),
									d = -i.stickLength * Math.cos(u + Math.PI),
									h = -i.stickLength * Math.sin(u + Math.PI);
								i.x = n.x - d, i.y = n.y - h
							}
						}
					}
			}, Object.defineProperty(V, "move", {
				get: function() {
					return E
				},
				set: function(e) {
					E != e && ((E = e) ? pe() : fe())
				}
			}), Object.defineProperty(V, "interactive", {
				get: function() {
					return X
				},
				set: function(e) {
					X = e, V.showControls = X, V.allowToggle = X, V.editPoints = X, V.lockControls = !X, V.selectPoints = X, V.move = X, V.points = V.points
				}
			}), Object.defineProperty(V, "allowToggle", {
				get: function() {
					return r
				},
				set: function(e) {
					r != e && ((r = e) ? V.move && pe() : !N && V.move && fe())
				}
			}), Object.defineProperty(V, "controlsVisible", {
				get: function() {
					return N
				},
				set: function(e) {
					(N = e) ? V.showControls(): V.hideControls()
				}
			});
			var g, p, f = S;
			Object.defineProperty(V, "lockControls", {
				get: function() {
					return f
				},
				set: function(e) {
					(f = e) ? (V.controls.mouseChildren = !1, V.controls.mouseEnabled = !1) : (V.controls.mouseChildren = !0, V.controls.mouseEnabled = !0)
				}
			}), V.lockControls = f, Object.defineProperty(V, "color", {
				get: function() {
					return se
				},
				set: function(e) {
					zot(e) && (e = "black"), se = e, Z.style = se
				}
			}), this.setColorRange = function(e, t) {
				return p = zot(t) ? (g = V.color, e) : (g = zot(e) ? V.color : e, t), V
			};
			var m = 0;

			function w(e, t, o) {
				return {
					x: e.x + (t.x - e.x) * o,
					y: e.y + (t.y - e.y) * o
				}
			}

			function z(e, t, o, n, r, i, a) {
				var l = e.length - 1,
					s = 0,
					c = 0;
				100 == n && "Squiggle" == V.type && (n = 99.99), n = (n + 1e5) % 100, oo.loop(o, function(e, t) {
					if (n / 100 < e) return l = t, c = e, !0;
					s = e
				});
				var u = V.segmentPoints[l],
					d = 0 < c ? (n / 100 - s) / (c - s) : 0,
					h = oo.pointAlongCurve(u, d),
					g = [h.x, h.y, 0, 0];
				if (!i)
					if (a) V.interpolatedPoints.push({
						x: h.x,
						y: h.y,
						r: n / 100
					});
					else {
						if ("none" != r) {
							var p = w(u[0], u[1], d),
								f = w(u[1], u[2], d),
								m = w(u[2], u[3], d),
								z = w(p, f, d),
								v = w(f, m, d);
							g[4] = z.x - h.x, g[5] = z.y - h.y, g[6] = v.x - h.x, g[7] = v.y - h.y;
							var b = V.localToLocal(p.x, p.y, t[l]);
							e[l][6] = b.x, e[l][7] = b.y;
							var y = V.localToLocal(m.x, m.y, t[(l + 1) % e.length]);
							e[(l + 1) % e.length][4] = y.x, e[(l + 1) % e.length][5] = y.y
						}
						r && (g[8] = r), e.splice(l + 1, 0, g)
					}
			}
			Object.defineProperty(V, "colorRange", {
				get: function() {
					return m
				},
				set: function(e) {
					m = e, zot(g) || zot(p) || (V.color = oo.colorRange(g, p, e))
				}
			}), Object.defineProperty(V, "borderColor", {
				get: function() {
					return ce
				},
				set: function(e) {
					zot(e) || (ce = e, Q ? Q.style = ce : ae())
				}
			}), Object.defineProperty(V, "borderWidth", {
				get: function() {
					return ue
				},
				set: function(e) {
					zot(e) || (0 < e || (e = 0), ue = e, J && 0 != ue ? (J.width = ue, O && ($.segments = [20, 10], $.offset = 5)) : ae())
				}
			}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
				get: function() {
					return oo.KEYFOCUS == V
				},
				set: function(e) {
					oo.KEYFOCUS = V
				}
			}), V.selectPoints && !oo.KEYFOCUS && function() {
				V.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}(), Object.defineProperty(V, "points", {
				get: function() {
					for (var e, t, o = [], n = 0; n < q.length; n++) t = q[n], e = [oo.decimals(t[0].x), oo.decimals(t[0].y), oo.decimals(t[1].x), oo.decimals(t[1].y), oo.decimals(t[2].x), oo.decimals(t[2].y), oo.decimals(t[3].x), oo.decimals(t[3].y)], t[4] && "straight" !== t[4] && e.push(t[4]), o.push(e);
					return o
				},
				set: function(e) {
					V.dispose(!0), T = u(e), V.shape && (V.shape.graphics.clear(), V.sticks.graphics.clear(), V.controls.noDrag(), V.removeAllChildren(), delete V.shape, delete V.sticks, delete V.controls), h(), V.lockControls = f
				}
			}), Object.defineProperty(V, "pointsAdjusted", {
				get: function() {
					var r, i, a = [],
						l = V.pointObjects;
					return oo.loop(l.length, function(e, t) {
						if (po = l[e], i = q[e], 0 == po[0].rotation && 0 == po[0].scaleX && 0 == po[0].scaleY) r = [oo.decimals(i[0].x), oo.decimals(i[0].y), oo.decimals(i[1].x), oo.decimals(i[1].y), oo.decimals(i[2].x), oo.decimals(i[2].y), oo.decimals(i[3].x), oo.decimals(i[3].y)];
						else {
							var o = po[0].localToLocal(po[2].x, po[2].y, po[0].parent),
								n = po[0].localToLocal(po[3].x, po[3].y, po[0].parent);
							r = [oo.decimals(i[0].x), oo.decimals(i[0].y), oo.decimals(i[1].x), oo.decimals(i[1].y), oo.decimals(o.x - i[0].x), oo.decimals(o.y - i[0].y), oo.decimals(n.x - i[0].x), oo.decimals(n.y - i[0].y)]
						}
						i[4] && "mirror" !== i[4] && r.push(i[4]), a.push(r)
					}), a
				},
				set: function(e) {
					zon && zog("Bloob() - pointsAdjusted is read only")
				}
			}), Object.defineProperty(V, "pointObjects", {
				get: function() {
					return q
				},
				set: function(e) {
					zon && zog("Bloob() - pointObjects is read only - but its contents can be manipulated - use blob.update() after changes")
				}
			}), Object.defineProperty(V, "pointControls", {
				get: function() {
					return U
				},
				set: function(e) {
					zon && zog("Bloob() - pointControls is read only - but its contents can be manipulated - use blob.update() after changes")
				}
			}), Object.defineProperty(V, "pointCircles", {
				get: function() {
					return K
				},
				set: function(e) {
					zon && zog("Bloob() - pointCircles is read only - but its contents can be manipulated - use blob.update() after changes")
				}
			}), Object.defineProperty(V, "segmentPoints", {
				get: function() {
					var n = V.pointsAdjusted,
						r = [];
					return oo.loop(n.length, function(e, t) {
						var o = V.getSegmentPoint(n[e], n[e < t - 1 ? e + 1 : 0]);
						r.push(o)
					}), r
				},
				set: function(e) {
					zon && zog("Bloob() - segmentPoints is read only")
				}
			}), Object.defineProperty(V, "segmentRatios", {
				get: function() {
					var o = [],
						n = 0;
					oo.loop(V.segmentPoints, function(e) {
						var t = oo.distanceAlongCurve(e);
						o.push(t), n += t
					});
					var t = [],
						r = 0;
					return oo.loop(o, function(e) {
						r += e / n, t.push(r)
					}), t
				},
				set: function(e) {
					zon && zog("Bloob() - segmentRatios is read only")
				}
			}), V.getPointAngle = function(e) {
				var t = V.pointObjects[e][0],
					o = V.pointObjects[e][2],
					n = V.pointObjects[e][3];
				if (t == V.stage) var r = new oo.Point(o.x, o.y),
					i = new oo.Point(n.x, n.y);
				else r = t.localToGlobal(o.x, o.y), i = t.localToGlobal(n.x, n.y);
				return oo.angle(r.x, r.y, i.x, i.y)
			}, V.getSegmentPoint = function(e, t) {
				if (!zot(e) && !zot(t)) {
					0 == e[2] && 0 == e[3] || (e[4] -= e[2], e[5] -= e[3], e[6] -= e[2], e[7] -= e[3], e[0] += e[2], e[1] += e[3], e[2] = 0, e[3] = 0), 0 == t[2] && 0 == t[3] || (t[4] -= t[2], t[5] -= t[3], t[6] -= t[2], t[7] -= t[3], t[0] += t[2], t[1] += t[3], t[2] = 0, t[3] = 0);
					var o = {
							x: e[0],
							y: e[1]
						},
						n = {
							x: e[0] + e[6],
							y: e[1] + e[7]
						},
						r = {
							x: t[0] + t[4],
							y: t[1] + t[5]
						},
						i = {
							x: t[0],
							y: t[1]
						};
					return 0 == le.x && 0 == le.y || (o.x += le.x, n.x += le.x, r.x += le.x, i.x += le.x, o.y += le.y, n.y += le.y, r.y += le.y, i.y += le.y), [o, n, r, i]
				}
			}, V.getAdjacentSegmentData = function(e) {
				zot(e) && (e = 0);
				var t = V.pointsAdjusted;
				if (2 == V.num) return [
					[V.getSegmentPoint(t[0], t[1]), V.getSegmentPoint(t[1], t[0])],
					[0, 1]
				];
				if (0 == e) return [
					[V.getSegmentPoint(t[V.num - 1], t[0]), V.getSegmentPoint(t[0], t[1]), V.getSegmentPoint(t[1], t[2])],
					[V.num - 1, 0, 1]
				];
				if (e >= V.num - 1) return [
					[V.getSegmentPoint(t[V.num - 2], t[V.num - 1]), V.getSegmentPoint(t[V.num - 1], t[0]), V.getSegmentPoint(t[0], t[1])],
					[V.num - 2, V.num - 1, 0]
				];
				var o = e + 2 >= V.num ? 0 : e + 2;
				return [
					[V.getSegmentPoint(t[e - 1], t[e]), V.getSegmentPoint(t[e], t[e + 1]), V.getSegmentPoint(t[e + 1], t[o])],
					[e - 1, e, e + 1]
				]
			}, V.getCurvePoint = function(o, e, t, n) {
				zot(e) && (e = V.segmentRatios), zot(t) && (t = V.segmentPoints), zot(n) && (n = !1);
				var r = e,
					i = t,
					a = oo.loop(r, function(e, t) {
						if (o <= e) return t
					}),
					l = 0 < a ? r[a - 1] : 0,
					s = 0 < a ? r[a] - r[a - 1] : r[a],
					c = (o - l) / s,
					u = oo.pointAlongCurve(i[a], c, n);
				if (!zot(u)) {
					var d = V.localToGlobal(u.x, u.y);
					return d.angle = u.angle, d.z = a, zot(d) ? void 0 : d
				}
			}, this.addPoint = function(e, t) {
				zot(e) && (e = 100);
				var o = V.points,
					n = V.segmentRatios;
				return z(o, V.pointControls, n, e, t), V.points = o, V.num = o.length, V
			}, this.addPoints = function(i, a, l, t, s, c) {
				zot(c) && (c = oo.copy(V.points));
				var e = oo.copy(V.segmentRatios),
					u = 0;
				if (s && (V.interpolatedPoints = []), t) var d = e.length * i;
				return oo.loop(e, function(o, n) {
					s && z(c, V.pointControls, V.segmentRatios, 100 * u, a, !zot(l) && n != l, s);
					var e = t ? Math.round(d * (o - u)) : i,
						r = 1 / (e + 1);
					oo.loop(e, function(e) {
						var t = u + (o - u) * r * (e + 1);
						z(c, V.pointControls, V.segmentRatios, 100 * t, a, !zot(l) && n != l, s), !s && 0 < i && (V.points = c)
					}), u = o
				}), s && "Squiggle" == V.type && z(c, V.pointControls, V.segmentRatios, 100, a, null, s), V.stage && V.stage.update(), V.num = c.length, V
			}, this.interpolate = function(e, t, o, n) {
				return zot(e) && (e = 1), V.addPoints(e, "none", t, o, !0, n), V.interpolatedPoints
			}, this.linearGradient = function(e, t, o, n, r, i) {
				return this.linearGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.linearGradient(e, t, o, n, r, i), this
			}, this.radialGradient = function(e, t, o, n, r, i, a, l) {
				return this.radialGradientParams = Array.prototype.slice.call(arguments), this.colorCommand.radialGradient(e, t, o, n, r, i, a, l), this
			}, this.dispose = function(e) {
				if (V.shape) {
					V.shape.cursor = "default";
					for (var t = 0; t < V.pointObjects.length; t++) V.pointObjects[t][1].removeAllEventListeners();
					for (t = 0; t < K.length; t++) K[t].removeAllEventListeners();
					return V.sticks.removeFrom(V), V.controls.removeFrom(V), V.shape.removeAllEventListeners(), V.controls.removeAllEventListeners(), V.off("mousedown", V.toggleEvent), V.off("click", V.clickEvent), V.toggleStageEvent && V.stage.off("stagemousedown", V.toggleStageEvent), !e && V.selectPoints && V.selectionManager.removeAllEventListeners(), !0
				}
			}
		}, oo.extend(oo.Bloob, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Label = function(e, n, t, o, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M) {
			var E;
			if (E = zob(oo.Label, arguments, "text, size, font, color, rollColor, shadowColor, shadowBlur, align, valign, lineWidth, lineHeight, fontOptions, backing, outlineColor, outlineWidth, backgroundColor, backgroundBorderColor, backgroundBorderWidth, corner, backgroundDashed, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, rollPersist, labelWidth, labelHeight, maxSize, style, group, inherit", this)) return E;
			z_d("54"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Label", this.group = S;
			var O = !1 === I ? {} : oo.getStyle(this.type, this.group, M);
			zot(e) && (e = null != O.text ? O.text : "LABEL");
			var j = e;
			e = oo.Pick.choose(e);
			var L = !1;
			"" === e && (e = " ", L = !0), zot(n) && (n = null != O.size ? O.size : 36), zot(t) && (t = null != O.font ? O.font : "arial"), zot(o) && (o = null != O.color ? O.color : "black"), zot(r) && (r = null != O.rollColor ? O.rollColor : o), !zot(i) && "ignore" != i || (i = null != O.shadowColor && "ignore" != i ? O.shadowColor : -1), !zot(a) && "ignore" != a || (a = null != O.shadowBlur && "ignore" != a ? O.shadowBlur : 14), zot(l) && (l = null != O.align ? O.align : "left"), zot(s) && (s = null != O.valign ? O.valign : "top"), zot(d) && (d = null != O.fontOptions ? O.fontOptions : ""), zot(g) && zot(O.outlineColor) || !zot(p) || (p = null != O.outlineWidth ? O.outlineWidth : Math.round(.2 * n)), zot(p) && zot(O.outlineWidth) || !zot(g) || (g = null != O.outlineColor ? O.outlineColor : "#000000"), zot(p) && (p = null != O.outlineWidth ? O.outlineWidth : 0), !zot(f) && "ignore" != f || (f = null != O.backgroundColor && "ignore" != f ? O.backgroundColor : null), !zot(y) && "ignore" != y || (y = null != O.padding && "ignore" != y ? O.padding : 10), zot(w) && (w = null != O.paddingHorizontal ? O.paddingHorizontal : y), zot(C) && (C = null != O.paddingVertical ? O.paddingVertical : y), zot(x) && (x = null != O.shiftHorizontal ? O.shiftHorizontal : 0), zot(k) && (k = null != O.shiftVertical ? O.shiftVertical : 0), zot(c) && (c = null != O.lineWidth ? O.lineWidth : null), zot(u) && (u = null != O.lineHeight ? O.lineHeight : null), !zot(h) && "ignore" != h || (h = null != O.backing && "ignore" != h ? O.backing.clone() : null), zot(T) && null != O.rollPersist && O.rollPersist, null != O.labelWidth && (c = O.labelWidth), zot(A) || (c = A), "middle" == l && (l = "center"), zot(B) && null != O.maxSize && O.maxSize, n = B ? Math.min(n, B) : n;
			var D = void 0 !== zimDefaultFrame && zimDefaultFrame.retina,
				Y = this;
			this.mouseChildren = !1, this.paddingVertical = C, this.paddingHorizontal = w;
			var X = this.label = new createjs.Text(String(e), d + " " + n + "px " + t, o);
			if (X.textAlign = l, X.lineWidth = c, X.lineHeight = u, X.textBaseline = "alphabetic", 0 < p) {
				var R = this.outlineLabel = X.clone();
				R.color = g, R.outline = p
			} - 1 != i && 0 < a && (X.shadow = new createjs.Shadow(i, 3, 3, a)), this.addChild(X);
			var _, W, F = !1;
			if (zot(h) && zot(f)) {
				var G = new createjs.Shape;
				Y.hitArea = G
			}

			function H() {
				var e, t = X.getBounds();
				"baseline" == s ? e = t.y : "top" == s ? (X.y = n - n / 6, !D && R && (R.y = n - n / 6), e = 0) : "center" == s || "middle" == s ? (e = -t.height / 2, X.y = .3 * n, !D && R && (R.y = .3 * n)) : e = -t.height, Y.setBounds(t.x, e, O.width ? O.width - 2 * y : t.width, O.height ? O.height - 2 * y : t.height), Y.hitArea && Y.hitArea.graphics.c().f("black").r(Y.getBounds().x, Y.getBounds().y, Y.getBounds().width, Y.getBounds().height), "center" != s && "middle" != s || (oo.pos(X, null, 0), oo.mov(X, 0, 1)), h ? F && V() : zot(f) || (Y.removeChild(Y.background), Y.background = new oo.Rectangle(Y.getBounds().width + 2 * w, Y.getBounds().height + 2 * C, f, m, z, v, b, null, !1), oo.center(Y.background, Y, 0), Y.setBounds(Y.background.x, Y.background.y, Y.background.width, Y.background.height)), "baseline" == s || D || (X.y += n / 32), R && (D ? Y.added(function(e) {
					var t = R.getBounds();
					R.visible = !0;
					var o = new oo.Container(t.x, t.y, t.width, t.height);
					o.addTo(Y), o.addChild(R), o.center(Y, Y.numChildren - 2), "baseline" != s && (o.y += n / 16), o.x += x, o.y += k, e.update()
				}) : (Y.addChild(R), oo.center(R, Y, Y.numChildren - 2), "baseline" != s && (R.y += n / 32), R.x += x, R.y += k, R.visible = !0)), q()
			}
			if (H(), !zot(h)) {
				if ("Pattern" == h.type) {
					if (Y.backing = new oo.Container(Y.width, Y.height, null, null, !1).centerReg(null, null, !1), -1 != i && 0 < a) new oo.Rectangle(Y.width - 2, Y.height - 2, "#666", null, null, v, null, null, !1).center(Y.backing).shadow = new createjs.Shadow(i, 3, 3, a);
					var N = new oo.Rectangle(Y.width, Y.height, f, null, null, v, null, null, !1).addTo(Y.backing);
					h.centerReg(N), h.setMask(N), Y.backing.pattern = h
				} else Y.backing = h;
				Y.backing.center(Y, 0), h = Y.backing, V(), F = !0
			}

			function V() {
				var e = h.boundsToGlobal(),
					t = Y.boundsToGlobal(e, !0);
				Y.setBounds(t.x, t.y, t.width, t.height)
			}

			function q() {
				oo.pos(X, "left" == l || "right" == l ? h || Y.background ? w : 0 : null, "top" == s || "baseline" == s || "bottom" == s ? h || Y.background ? C : 0 : null, "right" == l, "bottom" == s), X.x += x, X.y += k
			}
			q(), Object.defineProperty(Y, "text", {
				get: function() {
					return " " == X.text && L ? "" : X.text
				},
				set: function(e) {
					L = !1, "" === e && (e = " ", L = !0), X.text = String(e), R && (R.text = String(e)), H(), zot(c) || zot(P) || U()
				}
			}), Object.defineProperty(Y, "size", {
				get: function() {
					return n
				},
				set: function(e) {
					n = B ? Math.min(e, B) : e;
					var t = this.label.font.match(/^(.*\s)(\d*\.?\d*)+px(.*)$/i);
					t && (this.label.font = t[1] + e + "px" + t[3], R && (R.font = t[1] + e + "px" + t[3]), H())
				}
			}), Object.defineProperty(Y, "color", {
				get: function() {
					return o
				},
				set: function(e) {
					r == o && (r = e), o = e, X.color = o, oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), this.setColorRange = function(e, t) {
				return W = zot(t) ? (_ = Y.color, e) : (_ = zot(e) ? Y.color : e, t), Y
			};
			var K = 0;

			function U() {
				for (Y.size = 200; u < P / 2 && (Y.height > P || Y.width > c);) Y.size = Y.size / 2;
				for (var e = 0; Y.height <= P && Y.width <= c && (e++, Y.size = Math.ceil(Y.size + 1), !(50 < e)););
				Y.size = Y.size - 1
			}
			Object.defineProperty(Y, "colorRange", {
				get: function() {
					return K
				},
				set: function(e) {
					K = e, zot(_) || zot(W) || (Y.color = oo.colorRange(_, W, e))
				}
			}), Object.defineProperty(Y, "backgroundColor", {
				get: function() {
					return f
				},
				set: function(e) {
					f = e, Y.background ? Y.background.color = e : Y.backing ? Y.backing.color = e : setBackground(), oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), Object.defineProperty(Y, "outlineColor", {
				get: function() {
					return g
				},
				set: function(e) {
					g = e, R && (R.color = g), oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), Object.defineProperty(Y, "rollColor", {
				get: function() {
					return r
				},
				set: function(e) {
					r = e
				}
			}), this._enabled = !0, Object.defineProperty(Y, "enabled", {
				get: function() {
					return Y._enabled
				},
				set: function(e) {
					Ee(Y, e), X.color = o, Y.mouseChildren = !1, oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), this.showRollColor = function(e) {
				return zot(e) && (e = !0), X.color = e ? r : o, Y.stage && Y.stage.update(), Y
			}, this.mouseoverEvent = this.on("mouseover", function(e) {
				Y.showRollColor && Y.showRollColor()
			}), this.mouseoutEvent = this.on("mouseout", function(e) {
				Y.rollPersist || Y.showRollColor(!1)
			}), this.pressupEvent = this.on("pressup", function(e) {
				Y.rollPersist && Y.showRollColor(!1)
			}), Object.defineProperty(Y, "labelWidth", {
				get: function() {
					return c
				},
				set: function(e) {
					0 < e && (c = e, Y.label.lineWidth = e), P && U(), oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), Object.defineProperty(Y, "labelHeight", {
				get: function() {
					return P
				},
				set: function(e) {
					0 < e && (P = e), c && U(), oo.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
				}
			}), zot(c) || zot(P) || U(), De(this, O), this.clone = function(e) {
				return Y.cloneProps(new oo.Label(e ? Y.text : j, n, t, o, r, i, a, l, s, c, u, d, zot(h) ? null : h.clone(), g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, this.group, M))
			}
		}, oo.extend(oo.Label, oo.Container, "clone", "zimContainer"), oo.LabelOnPath = function(o, i, a, l, e, t, n, r, s, c, u) {
			var d;
			if (d = zob(oo.LabelOnPath, arguments, "label, path, percentAngle, percents, showPath, allowToggle, interactive, onTop, style, group, inherit", this)) return d;
			z_d("54.5"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "LabelOnPath", this.group = c;
			var h = !1 === s ? {} : oo.getStyle(this.type, this.group, u);
			zot(o) && (o = null != h.label ? h.label : new oo.Label("Label on Path")), zot(i) && (i = null != h.path ? h.path : new oo.Squiggle({
				points: [
					[0, 0, 0, 0, -86, 57, 86, -57],
					[300, 150, 0, 0, -133, 21, 133, -21]
				]
			})), zot(a) && (a = null != h.percentAngle ? h.percentAngle : 100), zot(l) && (l = null != h.percents ? h.percents : null), zot(e) && (e = null == h.showPath || h.showPath), zot(t) && (t = null == h.allowToggle || h.allowToggle), zot(n) && (n = null == h.interactive || h.interactive), zot(r) && (r = null != h.onTop && h.onTop), i.addTo(this);
			var g = this;
			this.path = i, this.allowToggle = t, i.interactive = n, "string" == typeof o && (o = new oo.Label(o));
			var p = i.alpha;
			e || i.alp(0), i.onTop = r;
			var f = this.letters = (new oo.Container).addTo(this);
			if (!l) {
				l = [];
				for (var m = 0; m < o.text.length; m++) l.push(oo.decimals(1 / (o.text.length - ("Bloob" == i.type ? 0 : 1)) * 100 * m))
			}

			function z() {
				for (var e = f.numChildren - 1; 0 <= e; e--) f.getChildAt(e).dispose();
				g.numLetters = o.text.length;
				for (e = 0; e < g.numLetters; e++) {
					var t = o.clone();
					t.text = o.text[e], t.centerReg(f).reg(null, t.height), "" != t.text && " " != t.text && t.expand(0), g.allowToggle && (t.cursor = "pointer"), t.on("mousedown", function() {
						g.allowToggle && g.toggle()
					})
				}
				g.resize()
			}
			this.percents = l, this.resize = function() {
				for (var e = i.segmentRatios, t = i.segmentPoints, o = 0; o < this.numLetters; o++) {
					var n = i.getCurvePoint(l[o] / 100, e, t, !0);
					if (n) {
						var r = this.globalToLocal(n.x, n.y);
						r && f.getChildAt(o).loc(r).rot((180 < n.angle ? n.angle - 360 : n.angle) * a / 100)
					}
				}
				return this
			}, z(), this.showPath = function(e) {
				return this.toggle(!0), i.toggle(e), this
			}, this.hidePath = function() {
				return this.toggle(!1), this
			}, Object.defineProperty(g, "text", {
				get: function() {
					return o.text
				},
				set: function(e) {
					o.text = e, l = [];
					for (var t = 0; t < o.text.length; t++) l.push(oo.decimals(1 / (o.text.length - ("Bloob" == i.type ? 0 : 1)) * 100 * t));
					z()
				}
			}), Object.defineProperty(this, "color", {
				get: function() {
					return color
				},
				set: function(e) {
					color = e;
					for (var t = 0; t < g.letters.numChildren; t++) g.letters.getChildAt(t).color = color;
					g.stage && g.stage.update()
				}
			}), Object.defineProperty(g, "interactive", {
				get: function() {
					return n
				},
				set: function(e) {
					n = e, i.interactive = e, this.ticker && oo.Ticker.remove(this.ticker), n && (this.ticker = oo.Ticker.add(function() {
						g.resize()
					}))
				}
			}), this.interactive && (this.ticker = oo.Ticker.add(function() {
				g.resize()
			}));
			var v = g.toggled = e;
			this.toggle = function(e) {
				if (this.allowToggle) return (v = zot(e) ? !v : !!e) ? (i.alp(p), this.interactive && (i.showControls(), f.mouseEnabled = !1, f.mouseChildren = !1, f.cursor = "default", this.controlHideEvent && i.off("controlshide", this.controlHideEvent), this.controlHideEvent = i.on("controlshide", function() {
					f.mouseEnabled = !0, f.mouseChildren = !0, f.cursor = "pointer", p = i.alpha, i.alp(0), v = !1, g.toggled = v
				}, null, !0))) : (p = i.alpha, i.alp(0), f.mouseEnabled = !0, f.mouseChildren = !0, f.cursor = "pointer"), g.toggled = v, g.stage.update(), g
			}, De(this, h), this.clone = function() {
				return g.cloneProps(new oo.LabelOnPath(g.label.clone(), g.path.clone(), a, oo.copy(l), e, t, n, r, s, this.group, u))
			}, this.dispose = function() {
				return this.ticker && oo.Ticker.remove(this.ticker), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.LabelOnPath, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.LabelOnArc = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f) {
			var m;
			if (m = zob(oo.LabelOnArc, arguments, "label, size, font, color, radius, flip, spacing, letterSpacing, angles, showCircle, arcColor, arcBorderColor, arcBorderWidth, style, group, inherit", this)) return m;
			z_d("54.55"), this.group = p;
			var z = !1 === g ? {} : oo.getStyle("LabelOnArc", this.group, f);
			zot(t) && (t = null != z.size ? z.size : 30), zot(e) && (e = null != z.label ? z.label : new oo.Label("Label on Arc", t)), zot(o) && (o = null != z.font ? z.font : "verdana"), zot(n) && (n = null != z.color ? z.color : "white"), zot(r) && (r = null != z.radius ? z.radius : 100), zot(i) && (i = null != z.flip && z.flip), zot(a) && (a = null != z.spacing ? z.spacing : 0), zot(l) && (l = null != z.letterSpacing ? z.letterSpacing : 5), zot(s) && (s = null != z.angles ? z.angles : null), zot(c) && (c = null != z.showCircle && z.showCircle), zot(u) && (u = null != z.arcColor ? z.arcColor : null), zot(d) && (d = null != z.arcBorderColor ? z.arcBorderColor : null), zot(h) && (h = null != z.arcBorderWidth ? z.arcBorderWidth : null);
			var v = this.outerRadius = r + a + e.height;
			this.innerRadius = r + a, this.zimContainer_constructor(-v, -v, 2 * v, 2 * v, !1), this.type = "LabelOnArc";
			var b = this;
			if ("Label" != e.type && (e = new oo.Label(e, t, o, n)), b.text = e.text, i) {
				var y = e.text.split("").reverse().join("");
				e.text = y
			}
			var w = b.letters = new oo.Container(this.width, this.height).centerReg(this),
				C = 0,
				x = [0];
			b.numLetters = e.text.length;
			for (var k = b.labels = [], T = 0; T < b.numLetters; T++) {
				var A = e.clone();
				k.push(A), A.text = e.text[T];
				var P = 180 * Math.atan((A.width + l) / 2 / (r + a)) / Math.PI * 2;
				x.push(P), C += P;
				var B = new Container(A.width, A.height);
				A.centerReg(B).rot(i ? 180 : 0), B.centerReg(w).reg(null, r + a + A.height + (i ? .13 * A.height : 0))
			}
			if (s) {
				for (T = C = 0; T < s.length; T++) C += s[T];
				C += s[s.length - 1] / 2
			} else {
				s = [];
				for (var T = 0; T < x.length - 1; T++) s[T] = Math.round((x[T] + x[T + 1]) / 2 * 100) / 100
			}
			this.letterHeight = e.height, this.angles = s;
			var I = this.startAngle = -C / 2,
				S = I;
			for (T = 0; T < w.numChildren; T++) {
				A = w.getChildAt(T), s[T];
				S = A.rotation = S + s[T]
			}
			var M = this.circle = new oo.Circle(r);
			c && M.addTo(this);
			var E = this.arc = (new oo.Shape).addTo(this);
			(u || d || h) && (0 < h && zot(d) ? d = "#000000" : zot(h) && !zot(d) && (h = 2), E.graphics.f(null).s(d).ss(h).arc(0, 0, r, (I - 90) * Math.PI / 180, (I - 90 + C) * Math.PI / 180)), Object.defineProperty(this, "color", {
				get: function() {
					return n
				},
				set: function(e) {
					n = e;
					for (var t = 0; t < b.labels.length; t++) b.labels[t].color = n;
					b.stage && b.stage.update()
				}
			}), De(this, z), this.clone = function() {
				return b.cloneProps(new oo.LabelOnArc(e, t, o, n, r, i, a, l, s, c, u, d, h, g, this.group, f))
			}
		}, oo.extend(oo.LabelOnArc, oo.Container, "clone", "zimContainer", !1), oo.LabelLetters = function(e, t, o, n, r, i, a, l) {
			var s;
			if (s = zob(oo.LabelLetters, arguments, "label, align, valign, letterSpacing, spacings, style, group, inherit", this)) return s;
			z_d("54.57"), this.group = a;
			var c = !1 === i ? {} : oo.getStyle("LabelOnArc", this.group, l);
			zot(e) && (e = null != c.label ? c.label : new oo.Label("Label Letters")), zot(t) && (t = null != c.align ? c.align : "center"), zot(o) && (o = null != c.valign ? c.valign : "center"), zot(n) && (n = null != c.letterSpacing ? c.letterSpacing : 5), zot(r) && (r = null == c.spacings || c.spacings), this.zimContainer_constructor(null, null, null, null, !1), this.type = "LabelLetters";
			var u = this;
			if ("Label" != e.type && (e = new oo.Label(e)), u.text = e.text, u.numLetters = e.text.length, !r || !Array.isArray(r)) {
				r = [];
				for (var d = 0; d < u.numLetters - 1; d++) r.push(n)
			}
			u.spacings = r, u.labels = [];
			for (d = 0; d < u.numLetters; d++) {
				var h = e.clone();
				u.labels.push(h), h.text = e.text[d], h.regX = "left" == t ? 0 : "right" == t ? h.width : h.width / 2, h.regY = "top" == o ? 0 : "bottom" == o ? h.height : h.height / 2, h.pos(-h.width, 0, !0, !1, this), 0 < d && h.mov(r[d - 1] ? r[d - 1] : 0)
			}
			this.regX = this.getBounds().x, this.regY = this.getBounds().y, Object.defineProperty(this, "color", {
				get: function() {
					return color
				},
				set: function(e) {
					color = e;
					for (var t = 0; t < u.numChildren; t++) u.getChildAt(t).color = color;
					u.stage && u.stage.update()
				}
			}), De(this, c), this.clone = function() {
				return u.cloneProps(new oo.LabelLetters(e, t, o, n, r, i, this.group, l))
			}
		}, oo.extend(oo.LabelLetters, oo.Container, "clone", "zimContainer", !1), oo.Button = function(n, r, t, i, a, o, l, s, c, e, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H, N, V, q) {
			var K;
			if (K = zob(oo.Button, arguments, "width, height, label, backgroundColor, rollBackgroundColor, color, rollColor, borderColor, borderRollColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, dashed, backing, rollBacking, rollPersist, icon, rollIcon, toggle, toggleBacking, rollToggleBacking, toggleIcon, rollToggleIcon, toggleEvent, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, waitBacking, rollWaitBacking, waitIcon, rollWaitIcon, align, valign, indent, indentHorizontal, indentVertical, style, group, inherit", this)) return K;
			z_d("55"), this.group = V;
			var U = !1 === N ? {} : oo.getStyle("Button", V, q);
			zot(n) && (n = null != U.width ? U.width : 200), zot(r) && (r = null != U.height ? U.height : 60), this.zimContainer_constructor(n, r, null, null, !1), this.type = "Button", zot(i) && (i = null != U.backgroundColor ? U.backgroundColor : "#C60"), i = zik(i), zot(a) && (a = null != U.rollBackgroundColor ? U.rollBackgroundColor : "#F93"), a = zik(a), zot(o) && (o = null != U.color ? U.color : "white"), zik(o), zot(l) && (l = null != U.rollColor ? U.rollColor : "white"), zik(l), zot(S) && (S = null != U.waitBackgroundColor ? U.waitBackgroundColor : i), zot(M) && (M = null != U.rollWaitBackgroundColor ? U.rollWaitBackgroundColor : a);
			var Z = s,
				Q = e;
			zot(s) && (s = null != U.borderColor ? U.borderColor : null), zot(e) && (e = null != U.borderWidth ? U.borderWidth : null), s < 0 || e < 0 ? s = e = null : null != s && null == e && (e = 1), zot(c) && (c = null != U.borderRollColor ? U.borderRollColor : s), zot(u) && (u = null != U.corner ? U.corner : 20), zot(d) && (d = null != U.shadowColor ? U.shadowColor : "rgba(0,0,0,.3)"), zot(h) && (h = null != U.shadowBlur ? U.shadowBlur : 14), zot(g) && (g = null != U.hitPadding ? U.hitPadding : 0), zot(_) && (_ = null != U.align ? U.align : "center"), zot(W) && (W = null != U.valign ? U.valign : "center"), zot(F) && (F = null != U.indent ? U.indent : 10), zot(G) && (G = null != U.indentHorizontal ? U.indentHorizontal : F), zot(H) && (H = null != U.indentVertical ? U.indentVertical : F), zot(p) && (p = null != U.gradient ? U.gradient : 0), zot(f) && (f = null != U.gloss ? U.gloss : 0), zot(t) && (t = zot(y) ? null != U.label ? U.label : "PRESS" : "");
			var J = (!zot(C) || !zot(x) || !zot(k) || !zot(T) || !zot(A)) && zot(B) && zot(D) && zot(Y);
			J && zot(P) && (P = oo.mobile() ? "mousedown" : "click"), "string" != typeof t && "number" != typeof t || (t = new oo.Label({
				text: t,
				size: null != U.size ? U.size : 36,
				font: null != U.font ? U.font : "arial",
				color: null != U.color ? U.color : o,
				rollColor: null != U.rollColor ? U.rollColor : l,
				align: _,
				valign: W,
				rollPersist: null != U.rollPersist && U.rollPersist,
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				shiftVertical: null != U.shiftVertical ? U.shiftVertical : 0,
				shiftHorizontal: null != U.shiftHorizontal ? U.shiftHorizontal : 0,
				style: !1,
				group: this.group
			})), zot(b) && (b = null != U.rollPersist && U.rollPersist), this.rollPersist = b, zot(m) && (m = null != U.dashed && U.dashed), zot(C) || "Label" != C.type || zon && zog("ZIM Button() - do not pass Label to toggle parameter - just pass a String");
			var $ = this;
			this.mouseChildren = !1, this.cursor = "pointer", $.focus = !1, $.rolled = !1, zot(z) && (z = null != U.backing ? U.backing.clone() : null), zot(z) ? $.backing = new oo.Rectangle(n, r, i, null, null, u, m, null, !1).centerReg(null, null, !1) : $.backing = z, $.rollBacking = zot(v) ? null != U.rollBacking ? U.rollBacking.clone() : null : v, $.waitBacking = zot(D) ? null != U.waitBacking ? U.waitBacking.clone() : null : D, $.rollWaitBacking = zot(Y) ? null != U.rollWaitBacking ? U.rollWaitBacking.clone() : null : Y, $.toggleBacking = zot(x) ? null != U.toggleBacking ? U.toggleBacking.clone() : null : x, $.rollToggleBacking = zot(k) ? null != U.rollToggleBacking ? U.rollToggleBacking.clone() : null : k;
			for (var ee, te, oe = ["backing", "rollBacking", "toggleBacking", "rollToggleBacking", "waitBacking", "rollWaitBacking"], ne = 0; ne < oe.length; ne++) ee = oe[ne], (te = $[ee]) && ("Pattern" == te.type ? te = re(ee, te) : -1 != d && 0 < h && (te.shadow = new createjs.Shadow(d, 3, 3, h)), te.x = n / 2, te.y = r / 2);

			function re(e, t) {
				$[e] = new oo.Container(n, r, null, null, !1).centerReg(null, null, !1), -1 != d && 0 < h && (new oo.Rectangle(n - 2, r - 2, "#666", null, null, u, null, null, !1).center($[e]).shadow = new createjs.Shadow(d, 3, 3, h));
				var o = $[e].mask = new oo.Rectangle(n, r, 0 <= e.indexOf("roll") ? a : i, null, null, u, null, null, !1).addTo($[e]);
				return t.centerReg(o), t.setMask(o.shape), $[e].pattern = t, $[e]
			}
			$.addChild($.backing), e && ($.border = new oo.Rectangle(n, r, "rgba(0,0,0,0)", s, e, u, m, null, !1), $.addChild($.border)), $.icon = zot(y) ? null != U.icon ? U.icon.clone() : null : y, $.rollIcon = zot(w) ? null != U.rollIcon ? U.rollIcon.clone() : null : w, $.waitIcon = zot(X) ? null != U.waitIcon ? U.waitIcon.clone() : null : X, $.rollWaitIcon = zot(R) ? null != U.rollWaitIcon ? U.rollWaitIcon.clone() : null : R, $.toggleIcon = zot(T) ? null != U.toggleIcon ? U.toggleIcon.clone() : null : T, $.rollToggleIcon = zot(A) ? null != U.rollToggleIcon ? U.rollToggleIcon.clone() : null : A;
			var ie, ae, le = ["icon", "rollIcon", "toggleIcon", "rollToggleIcon", "waitIcon", "rollWaitIcon"];
			for (ne = 0; ne < le.length; ne++) {
				var se = le[ne],
					ce = $[se];
				ce && (ce.x = n / 2, ce.y = r / 2)
			}
			if ($.icon && $.addChild($.icon), Array.isArray(u) || (u = [u, u, u, u]), 0 < p) {
				var ue = new createjs.Shape;
				ue.graphics.lf(["rgba(255,255,255," + p + ")", "rgba(0,0,0," + p + ")"], [0, 1], 0, 0, 0, r - e), ue.graphics.rc(e / 2, e / 2, n - e, r - e, u[0], u[1], u[2], u[3]), this.addChild(ue)
			}
			if (0 < f) {
				var de = new createjs.Shape;
				de.graphics.f("rgba(255,255,255," + f + ")"), de.graphics.rc(e / 2, e / 2, n - e, (r - e) / 2, u[0], u[1], 0, 0), de.graphics.f("rgba(0,0,0," + f + ")"), de.graphics.rc(e / 2, r / 2, n - e, (r - e) / 2, 0, 0, u[2], u[3]), this.addChild(de)
			}

			function he() {
				(ae = new createjs.Shape).graphics.f("#000").r(-g, -g, n + 2 * g, r + 2 * g), $.hitArea = ie = ae
			}
			if (0 < g && he(), this.addChild(t), t.center(this), t.y += 1, this.label = t, oo.pos(t, "left" == _ || "right" == _ ? G : null, "top" == W || "bottom" == W ? H : null, "right" == _, "bottom" == W), this.toggled = !1, J) {
				var ge = t.text;
				this.on(P, function() {
					$.toggled = !$.toggled, pe()
				})
			}

			function pe() {
				$.toggled ? (zot(C) || ($.text = C), $.rolled ? ($.rollToggleBacking ? Ae("rollToggleBacking", $.rollToggleBacking) : $.toggleBacking && Ae("toggleBacking", $.toggleBacking), $.rollToggleIcon ? Ae("rollToggleIcon", $.rollToggleIcon) : $.toggleIcon && Ae("toggleIcon", $.toggleIcon)) : ($.toggleBacking && Ae("toggleBacking", $.toggleBacking), $.toggleIcon && Ae("toggleIcon", $.toggleIcon))) : ($.text = ge, fe()), $.stage && $.stage.update()
			}

			function fe() {
				$.rolled ? (zot(z) && !$.rollBacking && ($.backing.color = a), $.rollBacking ? Ae("rollBacking", $.rollBacking) : $.backing && Ae("backing", $.backing), $.rollIcon ? Ae("rollIcon", $.rollIcon) : $.icon ? Ae("icon", $.icon) : Ae("icon", null)) : (zot(z) && ($.backing.color = i), $.backing && Ae("backing", $.backing), $.icon ? Ae("icon", $.icon) : Ae("icon", null))
			}
			var me, ze, ve, be, ye = !(this.toggle = function(e) {
					return J ? (zot(e) ? $.toggled = !$.toggled : $.toggled = e, pe()) : zon && zog("zim.Button() - can't toggle with wait parameters provided"), $
				}),
				we = $.waiting = !1,
				Ce = $.label.color,
				xe = $.label.rollColor,
				ke = this.on("mousedown", function() {
					ye = !0, Te()
				});

			function Te() {
				zot(B) && zot(D) && zot(Y) || $.waiting || (we = !0, zot(L) && (L = !0), j && (be = $.stage.on("stagemousedown", function(e) {
					$.hitTestPoint(e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY) || $.clearWait()
				}, null, !0)), setTimeout(function() {
					$.waiting = !0
				}, 50), ze = t.text, zot(E) || ($.label.color = E), zot(O) || ($.label.rollColor = O), ve = $.enabled, !L && $.enabled && ($.enabled = !1), zot(B) || ($.text = B), $.rolled ? (zot(z) && !$.rollWaitBacking && ($.backing.color = M), $.rollWaitBacking ? Ae("rollWaitBacking", $.rollWaitBacking) : $.waitBacking && Ae("waitBacking", $.waitBacking), $.rollWaitIcon ? Ae("rollWaitIcon", $.rollWaitIcon) : $.waitIcon && Ae("waitIcon", $.waitIcon)) : (zot(z) && !$.waitBacking && ($.backing.color = S), $.waitBacking && Ae("waitBacking", $.waitBacking), $.waitIcon && Ae("waitIcon", $.waitIcon)), zot(I) && (I = 3e4), me && me.clear(), me = oo.timeout(I, function() {
					$.enabled || ($.enabled = ve), $.clearWait(), $.dispatchEvent("waited")
				}), $.stage && $.stage.update())
			}

			function Ae(e) {
				if (0 <= e.indexOf("con")) {
					for (var t = 0; t < le.length; t++) {
						var o = le[t],
							n = $[o];
						$.removeChild(n)
					}
					$[e] && $.addChildAt($[e], 1)
				} else {
					if (!$[e]) return;
					for (t = 0; t < oe.length; t++) {
						var r = oe[t],
							i = $[r];
						$.removeChild(i)
					}
					$[e] && $.addChildAt($[e], 0)
				}
			}
			this.wait = function() {
				Te()
			}, this.clearWait = function() {
				return me && (be && $.stage.off("stagemousedown", be), me.clear(), $.text = ze, fe(), $.label.color = Ce, $.label.rollColor = xe, setTimeout(function() {
					$.waiting = !1
				}, 55), we = !1, $.stage && $.stage.update()), $
			}, this.removeWait = function() {
				return $.clearWait(), B = null, $.waitBacking = null, $.rollWaitBacking = null, $.off("mousedown", ke), $
			}, this.on("pressup", function() {
				ye = !1, $.rollPersist && !Pe && Be()
			});
			var Pe = !1;

			function Be() {
				$.rolled = !1, we || $.waiting ? (zot(z) && zot($.waitBacking) && ($.backing.color = zot(S) ? i : S), $.waitBacking ? Ae("waitBacking", $.waitBacking) : Ae("backing", $.backing), $.waitIcon ? Ae("waitIcon", $.waitIcon) : $.icon ? Ae("icon", $.icon) : Ae("icon")) : $.toggled && J ? (zot(z) && zot($.toggleBacking) && ($.backing.color = i), $.toggleBacking ? Ae("toggleBacking", $.toggleBacking) : Ae("backing", $.backing), $.toggleIcon ? Ae("toggleIcon", $.toggleIcon) : $.icon ? Ae("icon", $.icon) : Ae("icon")) : (zot(z) ? $.backing.color = i : zot(z.mask) || ($.backing.mask.color = i), Ae("backing", $.backing), $.icon ? Ae("icon", $.icon) : Ae("icon")), $.border && ($.border.borderColor = s), $.label.showRollColor && $.label.showRollColor(!1), $.stage && $.stage.update()
			}

			function Ie(e, t) {
				return zot(e) || ($.contains($[e]) && ($.removeChild($[e]), t && $.addChildAt(t, 0 <= e.indexOf("con") ? $.numChildren - 1 : 0), $.stage && $.stage.update()), t ? (zot(z) && "backing" == e && (z = t), "Pattern" == t.type && (t = re(e, t)), $[e] = t, $[e].x = n / 2, $[e].y = r / 2) : $[e] = null), $
			}
			this.on("mouseover", function(e) {
				$.rolled = !0, Pe = !0, we ? (zot(z) && zot($.rollWaitBacking) && ($.backing.color = zot(M) ? a : M), Ae("rollWaitBacking", $.rollWaitBacking), $.rollWaitIcon && Ae("rollWaitIcon", $.rollWaitIcon)) : J && $.toggled ? (zot(z) && zot($.rollToggleBacking) && ($.backing.color = a), Ae("rollToggleBacking", $.rollToggleBacking), $.rollToggleIcon && Ae("rollToggleIcon", $.rollToggleIcon)) : (zot(z) ? $.backing.color = a : zot(z.mask) || ($.backing.mask.color = a), Ae("rollBacking", $.rollBacking), $.rollIcon && Ae("rollIcon", $.rollIcon));
				$.border && ($.border.borderColor = c);
				$.label.showRollColor && $.label.showRollColor();
				$.stage && $.stage.update()
			}), this.on("mouseout", function e(t) {
				Pe = !1;
				$.off("mouseout", e);
				$.rollPersist && ye || Be()
			}), Object.defineProperty($, "text", {
				get: function() {
					return " " == t.text ? "" : t.text
				},
				set: function(e) {
					t.text = e, t.center(this), t.y += 1
				}
			}), Object.defineProperty($, "color", {
				get: function() {
					return o
				},
				set: function(e) {
					o = e, $.label && !zot($.label.color) && ($.label.color = o), oo.OPTIMIZE || !zns && OPTIMIZE || !$.stage || $.stage.update()
				}
			}), Object.defineProperty($, "rollColor", {
				get: function() {
					return l
				},
				set: function(e) {
					l = e, $.label && ($.label.rollColor = l)
				}
			}), Object.defineProperty($, "backgroundColor", {
				get: function() {
					return i
				},
				set: function(e) {
					i = e, $.backing.color ? $.backing.color = i : $.backing.mask && ($.backing.mask.color = i), oo.OPTIMIZE || !zns && OPTIMIZE || !$.stage || $.stage.update()
				}
			}), Object.defineProperty($, "rollBackgroundColor", {
				get: function() {
					return a
				},
				set: function(e) {
					a = e, $.rollBacking && $.rollBacking.color ? $.rollBacking.color = a : $.rollBacking && $.rollBacking.mask && ($.rollBacking.mask.color = a)
				}
			}), Object.defineProperty($, "borderColor", {
				get: function() {
					return s
				},
				set: function(e) {
					s = e, $.rolled || ($.backing && $.backing.borderColor && ($.backing.borderColor = e), $.border && ($.border.borderColor = e))
				}
			}), Object.defineProperty($, "borderRollColor", {
				get: function() {
					return c
				},
				set: function(e) {
					c = e, $.rolled && ($.backing && $.backing.borderColor && ($.backing.borderColor = e), $.border && ($.border.borderColor = e))
				}
			}), Object.defineProperty($, "hitPadding", {
				get: function() {
					return g
				},
				set: function(e) {
					0 == (g = e) ? ie && (this.hitArea = null) : he()
				}
			}), this._enabled = !0, this.startMouseChildren = this.mouseChildren, Object.defineProperty($, "enabled", {
				get: function() {
					return $._enabled
				},
				set: function(e) {
					$._enabled && ($.startMouseChildren = $.mouseChildren), e ? (Ee($, e), $.mouseChildren = $.startMouseChildren) : (Be(), Ee($, e)), t.color = t.color, oo.OPTIMIZE || !zns && OPTIMIZE || !$.stage || $.stage.update()
				}
			}), this.setBacking = function(e, t) {
				Ie(e, t)
			}, !(this.setIcon = function(e, t) {
				Ie(e, t)
			}) !== N && !1 !== N && De(this, U), this.clone = function() {
				var e = new oo.Button(n, r, t.clone(), i, a, o, l, Z, c, Q, u, d, h, g, p, f, m, zot(z) ? null : $.backing.clone(), zot(v) ? null : $.rollBacking.clone(), b, zot(y) ? null : y.clone(), zot(w) ? null : w.clone(), C, zot(x) ? null : x.clone(), zot(k) ? null : k.clone(), zot(T) ? null : T.clone(), zot(A) ? null : A.clone(), P, B, I, S, M, E, O, j, L, zot(D) ? null : D.clone(), zot(Y) ? null : Y.clone(), zot(X) ? null : X.clone(), zot(R) ? null : R.clone(), _, W, F, G, H, N, this.group);
				return $.cloneProps(e)
			}
		}, oo.extend(oo.Button, oo.Container, "clone", "zimContainer", !1), oo.CheckBox = function(t, o, e, n, r, i, a, l, s, c, u, d, h, p, f) {
			var m;
			if (m = zob(oo.CheckBox, arguments, "size, label, startChecked, color, backgroundColor, borderColor, borderWidth, corner, margin, indicatorType, indicatorColor, tap, style, group, inherit", this)) return m;
			z_d("56"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "CheckBox", this.group = p;
			var z = !1 === h ? {} : oo.getStyle(this.type, this.group, f);
			zot(t) && (t = null != z.size ? z.size : 60), zot(o) && (o = null != z.label ? z.label : null), zot(e) && (e = null != z.startChecked && z.startChecked);
			var v = e;
			zot(n) && (n = null != z.color ? z.color : "#111"), zot(r) && (r = null != z.backgroundColor ? z.backgroundColor : "rgba(255,255,255,.8)"), zot(i) && (i = null != z.borderColor ? z.borderColor : "#111"), zot(a) && (a = null != z.borderWidth ? z.borderWidth : t / 10), i < 0 || a < 0 ? i = a = null : null != i && null == a && (a = t / 10), zot(l) && (l = null != z.corner ? z.corner : 0), "string" != typeof o && "number" != typeof o || (o = new oo.Label({
				text: o,
				size: 5 * t / 6,
				color: n,
				valign: "center",
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			})), zot(s) && (s = null != z.margin ? z.margin : t / 5), "box" != c && "square" != c && "x" != c && (c = null != z.indicatorType ? z.indicatorType : "check"), zot(u) && (u = null != z.indicatorColor ? z.indicatorColor : 0 < a ? i : "black"), this.setBounds(-s, -s, t + 2 * s, t + 2 * s), zot(d) && (d = null != z.tap && z.tap);
			var b = this;
			this.cursor = "pointer";
			var y = new oo.Rectangle(t, t, r, null, null, l),
				w = new oo.Rectangle(5 * t / 7, 5 * t / 7, "rgba(0,0,0,0)", i, a, l);
			w.x = t / 7, w.y = t / 7, this.addChild(y, w);
			var C = t;
			o && (o.center(b), o.x = b.getBounds().width, this.label = o, this.setBounds(-s, -s, t + 3 * s + o.getBounds().width, Math.max(t + 2 * s, o.getBounds().height)), C = o.x + o.width);
			var x = new oo.Shape({
				style: !1
			});
			g = x.graphics, g.f("rgba(0,0,0,.01)").r(this.getBounds().x, this.getBounds().y, C + 2 * s, this.getBounds().height), this.hitArea = x;
			var k = new oo.Shape({
					style: !1
				}),
				T = k.graphics;
			"check" == c ? T.f(u).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg") : "box" == c || "square" == c ? T.f(u).dr(-35, -35, 70, 70) : T.f(u).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg");
			k.setBounds(-47.5, -47.5, 95, 95);
			var A = t / 161;

			function P(e) {
				v = !v, b.setChecked(v), b.dispatchEvent("change")
			}
			k.scaleX = k.scaleY = A, k.alpha = .9, k.x = t / 2, k.y = t / 2, v && this.addChild(k), d ? this.tap(P) : this.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", P), Object.defineProperty(b, "checked", {
				get: function() {
					return v
				},
				set: function(e) {
					b.setChecked(e)
				}
			}), this.toggle = function(e) {
				zot(e) && (e = !v), b.setChecked(e)
			}, Object.defineProperty(b, "toggled", {
				get: function() {
					return v
				},
				set: function(e) {
					b.setChecked(e)
				}
			}), Object.defineProperty(b, "text", {
				get: function() {
					if (o) return o.text
				},
				set: function(e) {
					o && (o.text = e, oo.OPTIMIZE || !zns && OPTIMIZE || !b.stage || b.stage.update())
				}
			}), Object.defineProperty(k, "indicatorColor", {
				get: function() {
					return u
				},
				set: function(e) {
					v && b.removeChild(k), k = new createjs.Shape, T = k.graphics, u = e, T.f(u).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg"), k.scaleX = k.scaleY = A, k.alpha = .9, k.x = t / 2, k.y = t / 2, v && b.addChild(k), oo.OPTIMIZE || !zns && OPTIMIZE || !b.stage || b.stage.update()
				}
			}), Object.defineProperty(b, "indicator", {
				get: function() {
					return k
				},
				set: function(e) {
					zog("ZIM CheckBox - check is read only")
				}
			}), this._enabled = !0, Object.defineProperty(b, "enabled", {
				get: function() {
					return b._enabled
				},
				set: function(e) {
					Ee(b, e)
				}
			}), !(this.setChecked = function(e) {
				return zot(e) && (e = !0), (v = e) ? b.addChild(k) : b.removeChild(k), oo.OPTIMIZE || !zns && OPTIMIZE || !b.stage || b.stage.update(), b
			}) !== h && De(this, z), this.clone = function() {
				return b.cloneProps(new oo.CheckBox(t, o ? o.clone() : "", e, n, r, i, a, l, s, c, u, d, h, this.group, f))
			}
		}, oo.extend(oo.CheckBox, oo.Container, "clone", "zimContainer", !1), oo.RadioButtons = function(s, a, l, c, u, d, h, g, p, o, f, n, e, r) {
			var t;
			if (t = zob(oo.RadioButtons, arguments, "size, buttons, vertical, color, backgroundColor, borderColor, borderWidth, spacing, margin, always, indicatorColor, style, group, inherit", this)) return t;
			z_d("57"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "RadioButtons", this.group = e;
			var m = !1 === n ? {} : oo.getStyle(this.type, this.group, r);
			zot(s) && (s = null != m.size ? m.size : 60), s = Math.max(5, s), zot(a) && (a = null != m.buttons ? m.buttons : ["A", "B", "C"]), zot(l) && (l = null == m.vertical || m.vertical), zot(c) && (c = null != m.color ? m.color : "#111"), zot(u) && (u = null != m.backgroundColor ? m.backgroundColor : "rgba(255,255,255,.8)"), zot(d) && (d = null != m.borderColor ? m.borderColor : "#111"), zot(h) && (h = null != m.borderWidth ? m.borderWidth : s / 9), d < 0 || h < 0 ? d = h = null : null != d && null == h && (h = s / 10), zot(g) && (g = l ? null != m.spacing ? m.spacing : .2 * s : null != m.spacing ? m.spacing : s), zot(p) && (p = null != m.margin ? m.margin : s / 5), zot(f) && (f = null != m.indicatorColor ? m.indicatorColor : 0 < h ? d : "black");
			var z, v = this;
			if (this.cursor = "pointer", this.labels = [], this.indicators = [], "string" == typeof a) {
				var i = a;
				a = [];
				for (var b = 0; b < i.length; b++) a.push({
					label: i[b]
				})
			}
			var y = new oo.Container({
				style: !1
			});

			function w(e) {
				var t = y.getChildIndex(e.target);
				o && v.selectedIndex == t || (v.setSelected(t), v.dispatchEvent("change"))
			}
			this.addChild(y),
				function() {
					for (var e, t, o = !1, n = a.length - 1; 0 <= n; n--)(e = a[n]).selected && !0 === e.selected && (o ? e.selected = "false" : (o = !0, v.id = e.id));
					y.removeAllChildren(), v.buttons = [];
					var r = 0;
					for (n = 0; n < a.length; n++) {
						if ("string" == typeof(e = a[n]) || "number" == typeof e) {
							var i = {
								selected: !1,
								label: new oo.Label({
									text: e,
									size: 5 * s / 6,
									color: null != m.color ? m.color : c,
									valign: "center",
									backing: "ignore",
									shadowColor: "ignore",
									shadowBlur: "ignore",
									padding: "ignore",
									backgroundColor: "ignore",
									group: v.group
								})
							};
							e = i
						}(e.label && "string" == typeof e.label || "number" == typeof e.label) && (e.label = new oo.Label({
							text: e.label,
							size: null != m.size ? m.size : 5 * s / 6,
							color: null != m.color ? m.color : c,
							valign: "center"
						})), v.labels.push(e.label), e.index = n, a[n] = e, (t = x(e.selected, e.label)).type = "RadioButton", (t.obj = e).selected && (z = t.obj), y.addChild(t), l ? (t.y = r, r += t.getBounds().height + g) : (t.x = r, r += t.getBounds().width + g)
					}
				}();
			for (var C = 0; C < y.numChildren; C++) y.getChildAt(C).on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", w);

			function x(e, t) {
				var o = new oo.Container({
					style: !1
				});
				v.buttons.push(o), o.mouseChildren = !1, o.setBounds(-p, -p, s + 2 * p, s + 2 * p);
				var n = new oo.Shape({
						style: !1
					}),
					r = n.graphics;
				r.f(u).dc(s / 2, s / 2, s / 1.85), r.s(d).ss(h).dc(s / 2, s / 2, s / 2 - s / 2 / 5), o.addChild(n);
				var i = o.check = new oo.Circle(s / 5.2, f, null, null, null, null, null, !1);
				v.indicators.push(i), i.mouseEnabled = !1, i.alpha = .95, i.regX = i.regY = -s / 2;
				var a = s;
				t && (o.addChild(t), t.x = o.getBounds().width, t.y = s / 2, o.setBounds(-p, -p, s + 2 * p + t.getBounds().width, Math.max(s + 2 * p, t.getBounds().height)), a = t.x + t.width, o.text = t.text), e && (o.addChild(i), v.label = t, v.label && (v.text = t.text));
				var l = new oo.Shape({
					style: !1
				});
				return (r = l.graphics).f("rgba(0,0,0,.01)").r(o.getBounds().x, o.getBounds().y, a + 2 * p, o.getBounds().height), o.hitArea = l, o
			}
			this.getBounds() || this.setBounds(0, 0, s, s), this.setBounds(-p, -p, this.getBounds().width + 2 * p, this.getBounds().height), this.setSelected = function(e) {
				if (zot(e) && (e = -1), -1 == e || y.getChildAt(e)) {
					for (var t, o = 0; o < y.numChildren; o++)(t = y.getChildAt(o)).removeChild(t.check);
					if (0 <= e) {
						t = y.getChildAt(e);
						var n = -2;
						z && (n = z.index), z = t.obj
					}
					return -1 == e || n == z.index ? (z = null, v.id = null, v.label = null, v.text = "") : (t.addChild(t.check), v.id = z.id, v.label = z.label, v.label && (v.text = v.label.text)), oo.OPTIMIZE || !zns && OPTIMIZE || !v.stage || v.stage.update(), v
				}
			}, Object.defineProperty(v, "selected", {
				get: function() {
					return z
				},
				set: function(e) {
					zog("ZIM RadioButton - selected is read only")
				}
			}), Object.defineProperty(v, "selectedIndex", {
				get: function() {
					return z ? z.index : -1
				},
				set: function(e) {
					var t = e;
					o && v.selectedIndex == t || v.setSelected(t)
				}
			}), this._enabled = !0, Object.defineProperty(v, "enabled", {
				get: function() {
					return v._enabled
				},
				set: function(e) {
					Ee(v, e)
				}
			}), De(this, m), this.clone = function() {
				for (var e = oo.copy(a), t = 0; t < e.length; t++) e[t].label = e[t].label.clone();
				return v.cloneProps(new oo.RadioButtons(s, e, l, c, u, d, h, g, p, o, f, n, this.group, r))
			}
		}, oo.extend(oo.RadioButtons, oo.Container, "clone", "zimContainer", !1), oo.Toggle = function(o, r, e, t, i, n, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w) {
			var C;
			if (C = zob(oo.Toggle, arguments, "width, height, label, startToggled, backgroundColor, margin, indicatorType, indicatorColor, tap, toggleBackgroundColor, color, borderColor, borderWidth, corner, indicatorCorner, shadowColor, shadowBlur, time, labelLeft, style, group, inherit", this)) return C;
			z_d("57.5"), this.group = y;
			var x = !1 === b ? {} : oo.getStyle("Toggle", this.group, w);
			zot(o) && (o = null != x.width ? x.width : 80), zot(r) && (r = null != x.height ? x.height : 50), this.zimContainer_constructor(o, r, null, null, !1), this.type = "Toggle", zot(i) && (i = null != x.backgroundColor ? x.backgroundColor : "#C60"), zot(n) && (n = null != x.margin ? x.margin : 10), zot(a) && (a = null != x.indicatorType ? x.indicatorType : "circle"), zot(l) && (l = null != x.indicatorColor ? x.indicatorColor : "#fff"), zot(c) && (c = null != x.toggleBackgroundColor ? x.toggleBackgroundColor : "#F93"), zot(u) && (u = null != x.color ? x.color : "#111"), zot(d) && (d = null != x.borderColor ? x.borderColor : null), zot(h) && (h = null != x.borderWidth ? x.borderWidth : null), d < 0 || h < 0 ? d = h = null : null != d && null == h && (h = 1), zot(g) && (g = null != x.corner ? x.corner : "circle" != a ? 0 : 25), zot(p) && (p = null != x.indicatorCorner ? x.indicatorCorner : 0), zot(f) && (f = null != x.shadowColor ? x.shadowColor : "rgba(0,0,0,.3)"), zot(m) && (m = null != x.shadowBlur ? x.shadowBlur : 14), zot(t) && (t = null != x.startToggled && x.startToggled), zot(z) && (z = null != x.time ? x.time : 100);
			var k = this;

			function T(e) {
				var t = k.indicator.x,
					o = z;
				if (!0 === e && (o = 0), "rectangle" == a || "square" == a ? k.indicator.pos(.2 * r, null, k.toggled) : k.indicator.pos(.175 * r, null, k.toggled), 0 < z && k.indicator.animate({
						props: {
							x: t
						},
						from: !0,
						time: o
					}), k.background.color = k.toggled ? c : i, k.text = k.toggled ? k.label ? k.label.text : "on" : k.labelLeft ? k.labelLeft.text : "off", k.zimAccessibility) {
					var n = "Toggle set to " + (k.toggled ? k.label ? k.label.text + "." : "on." : k.labelLeft ? k.labelLeft.text + "." : "off.");
					setTimeout(function() {
						k.zimAccessibility.talk(n)
					}, 50)
				}
			}
			k.cursor = "pointer", "string" != typeof e && "number" != typeof e || (e = this.label = new oo.Label({
				text: e,
				size: 5 * r / 6,
				color: u,
				valign: "center",
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			})), "string" != typeof v && "number" != typeof v || (v = this.labelLeft = new oo.Label({
				text: v,
				size: 5 * r / 6,
				color: u,
				valign: "center",
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			})), this.background = new oo.Rectangle(o, r, i, d, h, g).addTo(this), this.indicator = "rectangle" == a || "square" == a ? new oo.Rectangle(.65 * r, .65 * r, l, null, null, p).center(this.background).pos(.2 * r, null, t) : new oo.Circle(.35 * r, l).center(this.background).pos(.175 * r, null, t), this.toggled = t, k.background.color = k.toggled ? c : i, -1 != f && 0 < m && (this.background.shadow = new createjs.Shadow(f, 3, 3, m)), e && (this.addChild(e), e.x = o + 2 + n + h, e.y = r / 2, this.label = e, this.setBounds(-n, -n, o + 3 * n + h + e.getBounds().width, Math.max(r + 2 * n, e.getBounds().height))), v && (this.addChild(v), v.x = 0, k.background.x += v.width + 3 + n + h, k.label.x += v.width + 3 + n + h, v.y = r / 2, this.labelLeft = v, this.setBounds(-n, -n, k.getBounds().width + v.width + 3 + n + h, k.getBounds().height)), this.expand(oo.mobile() ? 20 : 10), this.tap(function(e) {
				if (v) {
					var t = k.localToGlobal(v.width + 3 + n + h + o / 2, 0);
					if (e.stageX / k.stage.scaleX < t.x - o / 2 && !k.toggled || e.stageX / k.stage.scaleX >= t.x + o / 2 && k.toggled) return
				}
				k.toggled = !k.toggled, T(), k.dispatchEvent("change")
			}, oo.mobile() ? 20 : 10), new oo.Swipe(this, 20, 200).on("swipe", function(e) {
				0 != e.swipeX && (1 == e.swipeX && k.toggled || -1 == e.swipeX && !k.toggled || (k.toggled = !k.toggled, T(), k.dispatchEvent("change")))
			}), Object.defineProperty(k, "textLeft", {
				get: function() {
					if (v) return v.text
				},
				set: function(e) {
					v && (v.text = e, oo.OPTIMIZE || !zns && OPTIMIZE || !k.stage || k.stage.update())
				}
			}), k.toggle = function(e, t) {
				var o = k.toggled;
				return zot(e) && (e = !0), k.toggled = e, o != k.toggled && T(t), k
			}, k.text = k.toggled ? k.label ? k.label.text : "on" : k.labelLeft ? k.labelLeft.text : "off", this._enabled = !0, Object.defineProperty(k, "enabled", {
				get: function() {
					return k._enabled
				},
				set: function(e) {
					Ee(k, e)
				}
			}), !1 !== b && De(this, x), this.clone = function() {
				return k.cloneProps(new oo.Toggle(o, r, e ? e.clone() : "", t, i, n, a, l, s, c, u, d, h, g, p, f, m, z, v ? v.clone() : "", b, this.group, w))
			}
		}, oo.extend(oo.Toggle, oo.Container, "clone", "zimContainer", !1), oo.Tip = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X) {
			var R;
			if (R = zob(oo.Tip, arguments, "text, align, valign, margin, marginH, marginV, outside, target, size, font, color, rollColor, shadowColor, shadowBlur, textAlign, textValign, lineWidth, lineHeight, fontOptions, backing, outlineColor, outlineWidth, backgroundColor, backgroundBorderColor, backgroundBorderWidth, corner, backgroundDashed, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, rollPersist, labelWidth, labelHeight, maxSize, style, group, inherit", this)) return R;
			z_d("57.6"), this.group = Y;
			var _ = !1 === D ? {} : oo.getStyle("Tip", this.group, X);
			zot(e) && (e = null != _.text ? _.text : "Here's a tip!"), zot(n) && (n = null != _.margin ? _.margin : 40), zot(r) && (r = null != _.marginH ? _.marginH : n), zot(i) && (i = null != _.marginV ? _.marginV : n), zot(t) && (t = null != _.align ? _.align : "right"), zot(o) && (o = null != _.valign ? _.valign : "bottom"), zot(a) && (a = null != _.outside && _.outside), zot(C) && (C = null != _.backgroundColor ? _.backgroundColor : blue), zot(u) && (u = null != _.color ? _.color : white), zot(T) && (T = null != _.corner ? _.corner : 25), zot(T) && (T = null != _.corner ? _.corner : 25), zot(T) && (T = null != _.corner ? _.corner : 25), zot(B) && (B = null != _.paddingHorizontal ? _.paddingHorizontal : 14 + (Array.isArray(T) ? T[0] : T)), !zot(h) && "ignore" != h || (h = null != _.shadowColor && "ignore" != h ? _.shadowColor : "rgba(0,0,0,.3)"), !zot(g) && "ignore" != g || (g = null != _.shadowBlur && "ignore" != g ? _.shadowBlur : 1), this.zimLabel_constructor(e, s, c, u, d, null, null, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, _), this.type = "Tip", a && (r = -r, i = -i);
			var W = this;
			W.align = t, W.valign = o, this.background.sha(h, 3, 5, g), this.show = function(e, o) {
				zot(e) && (e = null != _.delay ? _.delay : 0), zot(o) && (o = null != _.time ? _.time : 2e3);
				if (zot(l)) {
					if (!zimDefaultFrame) return W;
					l = zimDefaultFrame.stage
				} else {
					if (!l.getBounds) return W;
					if (zot(l.stage)) return zog("zim display - Waiter(): The container must have a stage property"), W
				}

				function t() {
					if (l.boundsToGlobal) var e = l.boundsToGlobal();
					else e = l.getBounds();
					var t = new Container(e.x, e.y, e.width, e.height);
					t.zimTemp = !0, t.loc(0, 0, l.stage), "center" != W.align && "middle" != W.align && "center" != W.valign && "middle" != W.valign || W.center(t), W.pos("center" == W.align || "middle" == W.align ? null : r, "center" == W.valign || "middle" == W.valign ? null : i, "right" == W.align, "bottom" == W.valign, t), a && ("right" == W.align ? W.x += W.width : "left" == W.align && (W.x -= W.width), "bottom" == W.valign ? W.y += W.height : "top" == W.valign && (W.y -= W.height)), W.addTo(t.stage), t.zimTemp && t.removeFrom && (t.removeFrom(), t = null), t = W.stage, W.timeoutID && W.timeoutID.clear(), W.timeoutID = oo.timeout(o, function() {
						W.hide(), t.stage.update()
					}), W.upID && t.stage.off("stagemouseup", W.upID), W.upID = t.stage.on("stagemouseup", function() {
						W.hide(), t.stage && t.stage.update()
					}), t.stage && t.stage.update()
				}
				return 0 < e ? W.showID = oo.timeout(e, t) : t(), W
			}, this.hide = function() {
				return this.removeFrom(), this.timeoutID && this.timeoutID.clear(), this.upID && l.stage && l.stage.off("stagemouseup", this.downID), W
			}, !(this.clear = function() {
				W.showID && W.showID.clear(), W.hide()
			}) !== D && De(this, _), this.clone = function() {
				return W.cloneProps(new oo.Tip(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, this.group, X))
			}
		}, oo.extend(oo.Tip, oo.Label, "clone", "zimLabel", !1), oo.Panel = function(e, t, o, l, s, n, c, u, r, i, a, d, h, g, p, f, m, z, v, b) {
			var y;
			if (y = zob(oo.Panel, arguments, "width, height, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, backgroundColor, borderColor, borderWidth, corner, arrow, align, shadowColor, shadowBlur, draggable, boundary, extraButton, style, group, inherit", this)) return y;
			z_d("57.7"), this.group = v;
			var w = !1 === z ? {} : oo.getStyle("Panel", this.group, b);
			zot(e) && (e = null != w.width ? w.width : 250), zot(t) && (t = null != w.height ? w.height : 300), this.zimContainer_constructor(e, t, null, null, !1), this.type = "Panel", zot(o) && (o = null != w.titleBar ? w.titleBar : "PANEL"), zot(l) && (l = null != w.titleBarColor ? w.titleBarColor : "#fff"), zot(s) && (s = null != w.titleBarBackgroundColor ? w.titleBarBackgroundColor : "#555"), zot(n) && (n = null != w.titleBarHeight ? w.titleBarHeight : 30), zot(c) && (c = null != w.backgroundColor ? w.backgroundColor : "#eee"), zot(u) && (u = null != w.borderColor ? w.borderColor : "#888"), zot(r) && (r = null != w.borderWidth ? w.borderWidth : null), u < 0 || r < 0 ? u = r = null : null != u && null == r && (r = 1), zot(i) && (i = null != w.corner ? w.corner : 5), zot(d) && (d = null != w.align ? w.align : "left"), zot(h) && (h = null != w.shadowColor ? w.shadowColor : "rgba(0,0,0,.3)"), zot(g) && (g = null != w.shadowBlur ? w.shadowBlur : 14), zot(p) && (p = null != w.draggable && w.draggable), zot(f) && (f = null != w.boundary ? w.boundary : null), zot(a) && (a = null != w.arrow ? w.arrow : oo.vee(o)), Array.isArray(i) || (i = [i, i, i, i]);
			var C = this;
			this.background = new oo.Rectangle(e, t, c, u, r, i).addTo(this); - 1 != h && 0 < g && (this.background.shadow = new createjs.Shadow(h, 3, 3, g));
			var x = o,
				k = oo.Pick.choose(x),
				T = oo.Pick.choose(l),
				A = oo.Pick.choose(s);
			oo.Pick.choose(c), oo.Pick.choose(u);
			"string" == typeof k && (k = new oo.Label({
				text: k,
				color: T,
				size: null != w.size ? w.size : 20,
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			}));
			var P = C.titleBarLabel = k;
			zot(A) && (A = "rgba(0,0,0,.2)"), C.titleBar = o = new oo.Container(e, n, null, null, !1).loc(0, 0, C);
			var B = C.titleBar.backing = new oo.Rectangle(e + r, n, A, null, null, [.95 * i[0], .95 * i[1], 0, 0], !0, null, !1).center(o);

			function I() {
				"right" == d ? P.center(o).pos(Math.max(i[0] / 2, 10), null, !0) : "center" == d || "middle" == d ? P.center(o) : P.center(o).loc(Math.max(i[0] / 2, 10))
			}
			if (I(), C.label = k, C.text = k.text, this.nextPanel = function(e, t) {
					var o = zot(e) || zot(x.array) ? oo.Pick.choose(x) : x.array[e],
						n = zot(e) || zot(l.array) ? oo.Pick.choose(l) : l.array[e],
						r = zot(e) || zot(s.array) ? oo.Pick.choose(s) : s.array[e],
						i = zot(e) || zot(c.array) ? oo.Pick.choose(c) : c.array[e],
						a = zot(e) || zot(u.array) ? oo.Pick.choose(u) : u.array[e];
					"string" == typeof o && (o = new oo.Label({
						text: o,
						color: n,
						size: null != w.size ? w.size : 20,
						backing: "ignore",
						shadowColor: "ignore",
						shadowBlur: "ignore",
						padding: "ignore",
						backgroundColor: "ignore",
						group: this.group
					})), C.label = o, C.text = o.text, P.removeFrom(), P = C.titleBarLabel = o, I(), B.color = r, C.background.color = i, C.background.borderColor = a, t && C.dispatchEvent("change"), !OPTIMIZE && C.stage && C.stage.update()
				}, p && (o.cursor = "pointer", o.on("mousedown", function() {
					C.drag({
						rect: f,
						currentTarget: !0
					})
				}), o.on("pressup", function() {
					C.noDrag()
				})), 0 < a) {
				var S = C.arrow = new oo.Shape(-20, -20, 40, 40, null, !1);
				S.graphics.f(l).p("AiJieIETCeIkTCfg"), S.centerReg(o).scaleTo(o, null, 70).alp(.8).hov(1).expand(), "right" == d ? S.pos(Math.max(i[1] / 2, 10)) : S.pos(Math.max(i[1] / 2, 10), null, !0), S.cursor = "pointer", S.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
					C.nextPanel(), C.dispatchEvent("change")
				})
			}
			if (!zot(m)) {
				m = C.extraButton = new oo.Button({
					label: "R",
					width: 50,
					height: 50,
					group: "PanelExtra"
				}).scaleTo(o, null, 70).centerReg(o).expand();
				"left" == d ? m.pos(0 < a ? S.x - S.width - 15 : Math.max(i[1] / 2, 10)) : m.pos(0 < a && "center" != d ? S.x + S.width : Math.max(i[1] / 2, 10))
			}
			C.overlay = new oo.Rectangle(e, t).alp(.7);
			this._enabled = !0, Object.defineProperty(C, "enabled", {
				get: function() {
					return C._enabled
				},
				set: function(e) {
					Ee(C, e), e ? C.overlay.removeFrom() : C.overlay.addTo(C), !OPTIMIZE && C.stage && C.stage.update()
				}
			}), !1 !== z && De(this, w), this.clone = function() {
				return C.cloneProps(new oo.Toggle(e, t, o ? o.clone() : "", l, s, n, c, u, r, i, a, d, h, g, p, f, m, z, this.group, b))
			}
		}, oo.extend(oo.Panel, oo.Container, "clone", "zimContainer", !1), oo.Pane = function(r, i, n, a, l, s, c, u, d, h, g, p, f, m, z, v, b, e, y, w, C, x, k, T, A, t, P) {
			var o;
			if (o = zob(oo.Pane, arguments, "width, height, label, backgroundColor, color, draggable, resets, modal, corner, backdropColor, shadowColor, shadowBlur, center, displayClose, backdropClose, backing, fadeTime, container, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, close, closeColor, style, group, inherit", this)) return o;
			z_d("58"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Pane";
			var B = "zim display - Pane(): Please pass in a reference to a container with bounds set as first parameter";
			if (zot(e)) {
				if (!zimDefaultFrame) return void zog(B);
				e = zimDefaultFrame.stage
			} else {
				if (!e.getBounds) return void zog(B);
				if (zot(e.getStage)) return void zog("zim display - Pane(): The container must have a stage property")
			}
			this.group = t;
			var I = !1 === A ? {} : oo.getStyle(this.type, this.group, P);
			zot(r) && (r = null != I.width ? I.width : 200), zot(i) && (i = null != I.height ? I.height : 200), zot(n) && (n = null != I.label ? I.label : null), "string" != typeof n && "number" != typeof n || (n = new oo.Label({
				text: n,
				size: null != I.size ? I.size : 40,
				align: null != I.align ? I.align : "center",
				valign: null != I.valign ? I.valign : "center",
				color: null != I.color ? I.color : l,
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			})), zot(a) && (a = null != I.backgroundColor ? I.backgroundColor : "white"), zot(s) && (s = null != I.draggable && I.draggable), zot(c) && (c = null == I.resets || I.resets), zot(u) && (u = null == I.modal || I.modal), zot(d) && (d = null != I.corner ? I.corner : 20), zot(y) && (y = null != I.titleBar ? I.titleBar : null), zot(w) && (w = null != I.titleBarColor ? I.titleBarColor : null), zot(C) && (C = null != I.titleBarBackgroundColor ? I.titleBarBackgroundColor : null), zot(x) && (x = null != I.titleBarHeight ? I.titleBarHeight : null), zot(h) && (h = null != I.backdropColor ? I.backdropColor : "rgba(0,0,0,.2)"), zot(g) && (g = null != I.shadowColor ? I.shadowColor : "rgba(0,0,0,.3)"), zot(p) && (p = null != I.shadowBlur ? I.shadowBlur : 20), zot(f) && (f = null == I.center || I.center), zot(m) && (m = null == I.displayClose || I.displayClose), s && (m = !1), zot(z) && (z = null == I.backdropClose || I.backdropClose), zot(b) && (b = null != I.fadeTime ? I.fadeTime : 0), zot(k) && (k = null != I.close && I.close), zot(T) && (T = null != I.closeColor ? I.closeColor : "#555");
			var S = this.backdrop = new oo.Shape({
				style: !1
			});
			S.type = "CreateJS_Shape";
			var M = S.graphics;
			M.f(h), M.drawRect(-5e3, -5e3, 1e4, 1e4), this.setBounds(-r / 2, -i / 2, r, i);
			var E = this;
			E.container = e, S.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", z ? R : function(e) {
				e.stopImmediatePropagation()
			});
			var O, j, L, D, Y, X = new oo.Dictionary(!0);

			function R(e) {
				W(), E.container.stage.update(), E.dispatchEvent("close"), e.stopImmediatePropagation()
			}
			if (S.on("mousedown", function(e) {
					e.stopImmediatePropagation()
				}), u && this.addChild(S), zot(v)) O = this.backing = this.display = new oo.Rectangle({
				width: r,
				height: i,
				color: a,
				corner: d,
				style: !1
			});
			else {
				if ("Pattern" == v.type) {
					var _ = v;
					O = new oo.Rectangle(r, i, a, null, null, d, null, null, !1), _.centerReg(O), _.setMask(O.shape)
				} else O = v;
				E.display = E.backing = O
			}
			m && (O.cursor = "pointer", O.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", R)), -1 != g && 0 < p && (O.shadow = new createjs.Shadow(g, 8, 8, p)), O.on("click", function(e) {
				e.stopImmediatePropagation()
			}), this.resetX, this.resetY, s && (O.cursor = "pointer", O.on("mousedown", function(e) {
				D = e.target.stage, isNaN(E.resetX) && (E.resetX = E.x), isNaN(E.resetY) && (E.resetY = E.y), j = e.stageX / D.scaleX - E.x, L = e.stageY / D.scaleY - E.y, O.cursor = "pointer"
			}), O.on("pressmove", function(e) {
				var t, o = function(e, t) {
					return e = Math.max(r / 2, Math.min(E.container.getBounds().width - r / 2, e)), t = Math.max(i / 2, Math.min(E.container.getBounds().height - i / 2, t)), {
						x: e,
						y: t
					}
				}(e.stageX / D.scaleX - j, e.stageY / D.scaleY - L);
				E.x = o.x, E.y = o.y;
				for (var n = 0; n < E.numChildren; n++) "TextArea" != (t = E.getChildAt(n)).type && "Loader" != t.type && "Tag" != t.type || t.resize();
				D.update()
			}), this.on("pressup", function(e) {
				O.cursor = "pointer", E.stage && E.stage.update()
			}));
			if (O.centerReg(this), n && (this.addChild(n), oo.center(n, this), this.label = n, this.text = n.text, n.mouseEnabled = !1), !zot(y)) {
				"string" == typeof y && (y = new oo.Label(y, null, null, w)), titleBarLabel = E.titleBarLabel = y, zot(x) && (x = 1.5 * titleBarLabel.height), zot(w) && (w = "black"), zot(C) && (C = "rgba(0,0,0,.2)"), E.titleBar = y = new oo.Container(r, x, null, null, !1).centerReg(E).mov(0, -i / 2 + x / 2), y.mouseEnabled = !1, y.mouseChildren = !1;
				E.titleBar.backing = new oo.Rectangle(r, x, C, null, null, [.95 * d, .95 * d, 0, 0], null, null, !1).addTo(y);
				titleBarLabel.center(y).pos({
					x: Math.max(d / 2, 10),
					reg: !0
				})
			}
			k && ((k = E.close = new oo.Shape(-40, -40, 80, 80, null, !1)).graphics.f(T).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"), y ? k.addTo(E).scaleTo(y, null, 50).mov(r / 2 - Math.max(d / 2, 10) - k.width / 2, -i / 2 + x / 2).expand(40) : k.addTo(E).sca(.3).mov(r / 2 - k.width - 3, -i / 2 + k.height).expand(40), k.cursor = "pointer", k.expand(), k.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", R));

			function W() {
				function e() {
					var e;
					E.container.removeChild(E);
					for (var t = 0; t < E.numChildren; t++)
						if ("TextArea" == (e = E.getChildAt(t)).type || "Loader" == e.type || "Tag" == e.type) {
							var o = {
								obj: e,
								depth: E.getChildIndex(e)
							};
							X.add(e, o)
						}
					for (t = E.numChildren - 1; 0 <= t; t--) "TextArea" != (e = E.getChildAt(t)).type && "Loader" != e.type && "Tag" != e.type || E.removeChild(e);
					if (oo.OPTIMIZE || !zns && OPTIMIZE || E.container.stage.update(), c && (isNaN(E.resetX) || (E.x = E.resetX), isNaN(E.resetY) || (E.y = E.resetY)), E.zimAccessibility) {
						var n = E.zimAccessibility;
						n.resize(E), Y ? Y.focus() : E.zimTabTag.nextSibling.focus(), setTimeout(function() {
							n.talk("Pane has been closed.")
						}, 50)
					}
				}
				0 < b ? E.animate({
					obj: {
						alpha: 0
					},
					time: b,
					call: e
				}) : e()
			}
			Object.defineProperty(E, "text", {
				get: function() {
					return " " == n.text ? "" : n.text
				},
				set: function(e) {
					n.text = e
				}
			}), this._enabled = !0, Object.defineProperty(E, "enabled", {
				get: function() {
					return E._enabled
				},
				set: function(e) {
					Ee(E, e)
				}
			}), this.hide = function(e) {
				return W(), E.toggled = !1, e && E.dispatchEvent("close"), E
			}, this.show = function() {
				f && isNaN(E.resetX) && (E.x = E.container.getBounds().width / 2, E.y = E.container.getBounds().height / 2), E.container.addChild(E);
				for (var e = 0; e < X.length; e++) E.addChildAt(X.values[e].obj, X.values[e].depth);
				if (0 < b ? (E.alpha = 0, E.animate({
						alpha: 1
					}, b)) : E.container.stage && E.container.stage.update(), E.zimAccessibility) {
					var t = E.zimAccessibility;
					setTimeout(function() {
						t.activatedObject && (Y = t.activatedObject.zimTabTag)
					}, 50), t.resize(E), t.tabIndex = E.zimTabIndex
				}
				return E.toggled = !0, E
			}, !(this.toggle = function(e) {
				return !0 === e ? E.show() : !1 === e ? E.hide() : E.container.contains(E) ? E.hide() : E.show(), E
			}) !== A && De(this, I), this.clone = function() {
				var e = n.x,
					t = n.y,
					o = E.cloneProps(new oo.Pane(r, i, n.clone(), a, l, s, c, u, d, h, g, p, f, m, z, zot(v) ? v.clone() : null, b, E.container, y, w, C, x, k, T, A, this.group, P));
				return o.label.x = e, o.label.y = t, o
			}
		}, oo.extend(oo.Pane, oo.Container, "clone", "zimContainer", !1), oo.Window = function(u, d, o, e, h, n, g, p, f, m, t, r, i, z, v, a, l, s, b, c, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y) {
			var X;
			if (X = zob(oo.Window, arguments, "width, height, backgroundColor, borderColor, borderWidth, padding, corner, swipe, scrollBarActive, scrollBarDrag, scrollBarColor, scrollBarAlpha, scrollBarFade, scrollBarH, scrollBarV, slide, slideDamp, slideSnap, interactive, shadowColor, shadowBlur, paddingHorizontal, paddingVertical, scrollWheel, damp, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, draggable, boundary, onTop, close, closeColor, cancelCurrentDrag, style, group, inherit", this)) return X;
			z_d("58.1"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Window", this.group = D;
			var R = !1 === L ? {} : oo.getStyle(this.type, this.group, Y);
			zot(u) && (u = null != R.width ? R.width : 300), zot(d) && (d = null != R.height ? R.height : 200), zot(o) && (o = null != R.backgroundColor ? R.backgroundColor : "#333");
			var _ = e,
				W = h;
			zot(e) && (e = null != R.borderColor ? R.borderColor : "#999"), zot(h) && (h = null != R.borderWidth ? R.borderWidth : 1), zot(n) && (n = null != R.padding ? R.padding : 0), zot(g) && (g = null != R.corner ? R.corner : 0), zot(p) && (p = null == R.swipe || R.swipe), zot(f) && (f = null == R.scrollBarActive || R.scrollBarActive), zot(m) && (m = null != R.scrollBarDrag && R.scrollBarDrag), zot(t) && (t = null != R.scrollBarColor ? R.scrollBarColor : e), zot(r) && (r = null != R.scrollBarAlpha ? R.scrollBarAlpha : .3), zot(i) && (i = null == R.scrollBarFade || R.scrollBarFade), zot(z) && (z = null == R.scrollBarH || R.scrollBarH), zot(v) && (v = null == R.scrollBarV || R.scrollBarV), m && (i = null != R.scrollBarFade && R.scrollBarFade), zot(a) && (a = null == R.slide || R.slide), zot(l) && (l = null != R.slideDamp ? R.slideDamp : .6), zot(s) && (s = null != R.slideSnap ? R.slideSnap : "vertical"), zot(b) && (b = null == R.interactive || R.interactive), zot(c) && (c = null != R.shadowColor ? R.shadowColor : "rgba(0,0,0,.3)"), zot(y) && (y = null != R.shadowBlur ? R.shadowBlur : 20), zot(C) && (C = null != R.paddingVertical ? R.paddingVertical : n), zot(w) && (w = null != R.paddingHorizontal ? R.paddingHorizontal : n), zot(x) && (x = null == R.scrollWheel || R.scrollWheel), zot(T) && (T = null != R.titleBar ? R.titleBar : null), zot(A) && (A = null != R.titleBarColor ? R.titleBarColor : null), zot(P) && (P = null != R.titleBarBackgroundColor ? R.titleBarBackgroundColor : null), zot(B) && (B = null != R.titleBarHeight ? R.titleBarHeight : null), zot(I) && (I = null != R.draggable ? R.draggable : null), zot(S) && (S = null != R.boundary ? R.boundary : null), zot(M) && (M = null != R.onTop ? R.onTop : null), zot(E) && (E = null != R.close ? R.close : null), zot(O) && (O = null != R.closeColor ? R.closeColor : null), zot(j) && (j = null != R.cancelCurrentDrag && R.cancelCurrentDrag), !1 === T && (T = null), zot(T) || (zot(B) && (B = 30), d -= B);
			var F = this;
			this.scrollX = this.scrollY = this.scrollXMax = this.scrollYMax = 0;
			var G = this.backing = new oo.Shape({
				style: !1
			});
			this.addChild(G);
			var H = new createjs.Shape;
			H.type = "WindowBacking";
			var N = H.graphics;
			this.addChild(H);
			var V, q = this.content = new oo.Container({
				style: !1
			});
			if (this.addChild(q), q.mask = H, !b) var K = new createjs.Shape;
			if (0 < h) {
				var U = new createjs.Shape;
				this.addChild(U)
			}
			var Z = T ? 0 : g;

			function Q() {
				F.setBounds(0, 0, u, d), G.graphics.c().f(o).rc(0, 0, u, d, Z, Z, g, g), -1 != c && 0 < y && (G.shadow = new createjs.Shadow(c, 4, 4, y)), 0 < h && (g ? U.graphics.c().s(e).ss(h, "square", "miter").rc(0, 0, u, d, Z, Z, g, g) : U.graphics.c().s(e).ss(h, "square", "miter").dr(0, 0, u, d))
			}
			Q();
			var J, $, ee, te, oe, ne, re, ie, ae, le = this.scrollBar = {};
			if (le.color = t, le.size = 6, le.minSize = 2 * le.size, le.spacing = 3.5 + h / 2, le.margin = 0, le.corner = le.size / 2, le.showTime = 500, le.fadeTime = 3e3, f) {
				var se = le.horizontal = new oo.Shape({
						style: !1
					}),
					ce = se.graphics;
				se.alpha = r, this.addChild(se), m && se.drag({
					localBounds: !0
				});
				var ue = le.vertical = new oo.Shape({
						style: !1
					}),
					de = ue.graphics;
				ue.alpha = r, this.addChild(ue), m && ue.drag({
					localBounds: !0
				})
			}
			if (this.update = function() {
					f && (ce.clear(), de.clear()), oe = f ? le.size + 2 * le.spacing : 0, ne = q.getBounds() ? q.getBounds().width : 0, re = q.getBounds() ? q.getBounds().height : 0, ee = z && u - w < ne && (f || !0 === p || "auto" == p || "horizontal" == p), te = v && d - C < re && (f || !0 === p || "auto" == p || "vertical" == p), F.scrollXMax = ne + 2 * w - u + (te ? oe + le.margin : 0), F.scrollYMax = re + 2 * C - d + (ee ? oe + le.margin : 0), N.clear();
					var e = h / 2,
						t = h / 2,
						o = u - (te && f ? le.size + 2 * le.spacing : 0) - (te ? 0 : h),
						n = d - (ee && f ? le.size + 2 * le.spacing : 0) - (ee ? 0 : h);
					N.f("rgba(0,0,0,0)").rc(e, t, o, n, Z, Z, te && f ? 0 : g, ee && f ? 0 : g), H.setBounds(F.getBounds().x, F.getBounds().y, F.getBounds().width, F.getBounds().height), oo.expand(H, 0), b || (K.graphics.c().f("red").dr(e, t, o, n), q.hitArea = K);
					var r = Math.max(g, Math.min(le.corner, le.spacing)),
						i = r + h / 2,
						a = r + (te ? oe : 0) + h / 2,
						l = r + h / 2,
						s = r + (ee ? oe : 0) + h / 2;
					if (ee && f && (scrollBarLength = Math.max(le.minSize, (u - i - a) * (u - i - a) / (ne + w + le.margin)), ce.f(le.color).rr(0, 0, scrollBarLength, le.size, le.corner), se.x = i, se.y = d - le.size - le.spacing, J = new oo.Proportion(-F.scrollXMax, 0, i, u - scrollBarLength - a, -1), m)) {
						se.setBounds(0, 0, scrollBarLength, le.size);
						var c = new createjs.Rectangle(i, se.y, u - scrollBarLength - i - a, 0);
						se.dragBoundary(c), se.proportion = new oo.Proportion(c.x, c.x + c.width, 0, -F.scrollXMax), se.off("pressmove", ie), ie = se.on("pressmove", function() {
							F.dispatchEvent("scrolling"), q.x = se.proportion.convert(se.x)
						})
					}
					if (te && f && (scrollBarLength = Math.max(le.minSize, (d - l - s) * (d - l - s) / (re + C + le.margin)), de.f(le.color).rr(0, 0, le.size, scrollBarLength, le.corner), ue.x = u - le.size - le.spacing, ue.y = l, $ = new oo.Proportion(-F.scrollYMax, 0, l, d - scrollBarLength - s, -1), m)) {
						ue.setBounds(0, 0, le.size, scrollBarLength);
						c = new createjs.Rectangle(ue.x, l, 0, d - scrollBarLength - l - s);
						ue.dragBoundary(c), ue.proportion = new oo.Proportion(c.y, c.y + c.height, 0, -F.scrollYMax), ue.off("pressmove", ae), ae = ue.on("pressmove", function() {
							F.dispatchEvent("scrolling"), Me = q.y = ue.proportion.convert(ue.y)
						})
					}
					ve(), clearTimeout(F.d2Timeout), F.d2Timeout = setTimeout(function() {
						se && se.proportion && (q.x = se.proportion.convert(se.x)), ue && ue.proportion && (q.y = ue.proportion.convert(ue.y))
					}, 50), clearTimeout(F.dTimeout), F.dTimeout = setTimeout(function() {
						he()
					}, 300)
				}, this.resize = function(e, t) {
					return zot(e) && (e = u), zot(t) && (t = d), u = e, d = t, Q(), F.update(), Me = q.y, k && Oe.immediate(Me), F
				}, !zot(T)) {
				zot(I) && (I = !0), "string" == typeof T && (T = new oo.Label({
					text: T,
					color: A,
					size: null != R.size ? R.size : 20,
					backing: "ignore",
					shadowColor: "ignore",
					shadowBlur: "ignore",
					padding: "ignore",
					backgroundColor: "ignore",
					group: this.group
				})), titleBarLabel = F.titleBarLabel = T, zot(P) && (P = "rgba(0,0,0,.2)"), F.titleBar = T = new oo.Container(u, B, null, null, !1).centerReg(F).mov(0, -d / 2 - B / 2);
				F.titleBar.backing = new oo.Rectangle(u + h, B, P, null, null, [.95 * g, .95 * g, 0, 0], !0, null, !1).center(T);
				titleBarLabel.center(T).pos({
					x: Math.max(g / 2, Math.max(10, n)),
					reg: !0
				}), F.regX = 0, F.regY = -B, F.setBounds(0, -B, u, d + B), I ? (T.cursor = "pointer", T.on("mousedown", function() {
					F.drag({
						rect: S,
						currentTarget: !0,
						onTop: M
					})
				}), T.on("pressup", function() {
					F.noDrag()
				})) : T.on("mousedown", function() {})
			}
			E && (zot(O) && (O = "#555"), (E = F.close = new oo.Shape(-40, -40, 80, 80, null, !1)).graphics.f(O).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"), T ? E.centerReg(F).scaleTo(T, null, 50).pos({
				x: u - Math.max(g / 2, Math.max(10, n)) - E.width / 2,
				y: B / 2,
				reg: !0
			}).expand(40) : E.sca(.3).pos(Math.max(g / 2, Math.max(10, n)) / 2, E.height / 2, !0, !1, F).expand(40), E.cursor = "pointer", E.expand(), E.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
				F.removeFrom(), F.dispatchEvent("close")
			}));

			function he() {
				oo.dragBoundary(q, new createjs.Rectangle(0, 0, ee ? -F.scrollXMax : 0, te ? -F.scrollYMax : 0))
			}
			this.add = function(e, t) {
				if (Le(e), e.getBounds()) return t && F.removeAll(), q.addChild(e), 0 == e.x && (e.x = w), 0 == e.y && (e.y = C), F.update(), F;
				zog("SwipeBox.add() - please add content with bounds set")
			}, this.remove = function(e) {
				return q.removeChild(e), F.update(), F
			};
			var ge, pe, fe, me = !(this.removeAll = function() {
				return q.removeAllChildren(), F.update(), F
			});

			function ze() {
				Me = q.y, k && Oe.immediate(Me), f && ve()
			}

			function ve() {
				F.dispatchEvent("scrolling"), K && (K.x = -q.x, K.y = -q.y), ee && f && (se.x = J.convert(q.x)), te && f && (ue.y = $.convert(q.y))
			}

			function be(e) {
				oo.Ticker.remove(ze), me = !1, ee && i && oo.animate(se, {
					alpha: 0
				}, le.fadeTime), te && i && oo.animate(ue, {
					alpha: 0
				}, le.fadeTime)
			}
			if (p && q.on("mousedown", function() {
					me || oo.Ticker.add(ze, q.stage), me = !0, ee && f && i && oo.animate(se, {
						alpha: r
					}, le.showTime), te && f && i && oo.animate(ue, {
						alpha: r
					}, le.showTime)
				}), this.on("added", function() {
					if (Le(F), !p) return;
					oo.drag({
						obj: q,
						currentTarget: !0,
						localBounds: !0,
						slide: a,
						slideDamp: l,
						slideSnap: !((!z || !0 !== p && "auto" != p && "horizontal" != p) && (!v || !0 !== p && "auto" != p && "vertical" != p)) && s
					}), q.getBounds() && 0 < q.getBounds().width && setTimeout(function() {
						he()
					}, 300)
				}, null, !0), this.cancelCurrentDrag = function() {
					F.content.noDrag(), oo.drag({
						obj: q,
						currentTarget: !0,
						localBounds: !0,
						slide: a,
						slideDamp: l,
						slideSnap: !((!z || !0 !== p && "auto" != p && "horizontal" != p) && (!v || !0 !== p && "auto" != p && "vertical" != p)) && s
					}), q.getBounds() && 0 < q.getBounds().width && setTimeout(function() {
						he()
					}, 300)
				}, this.added(function(t) {
					t.on("stagemousemove", function(e) {
						F.windowMouseX = e.stageX / t.scaleX, F.windowMouseY = e.stageY / t.scaleY
					})
				}), a ? q.on("slidestop", be) : q.on("mousedown", function() {
					q.stage.on("stagemouseup", be, null, !0)
				}), j && (F.blurEvent = document.window.addEventListener("blur", function() {
					F.cancelCurrentDrag(), be()
				})), b) {
				var ye, we, Ce;
				q.on("mousedown", function(e) {
					V = e.target.stage, ye = e.stageX / V.scaleX, we = Date.now()
				}), q.on("click", function(e) {
					Date.now() - we < 600 && Math.abs(e.stageX / V.scaleX - ye) < 5 && (F.contentMouse = q.globalToLocal(e.stageX / V.scaleX, e.stageY / V.scaleY), F.dispatchEvent("select"))
				}), q.on("mouseover", function() {
					Ce = Date.now(), oo.Ticker.add(Se, q.stage)
				}), q.on("mouseout", function() {
					Ie || (F.dispatchEvent("hoverout"), Ie = !0);
					oo.Ticker.remove(Se)
				});
				var xe = 0,
					ke = 0,
					Te = 0,
					Ae = 0,
					Pe = 300,
					Be = 2,
					Ie = !1;

				function Se() {
					if (!q.stage) return Ie || (F.dispatchEvent("hoverout"), Ie = !0), void oo.Ticker.remove(Se);
					Math.abs(xe - F.windowMouseX) > Be || Math.abs(ke - F.windowMouseY) > Be ? (Ie || (F.dispatchEvent("hoverout"), Ie = !0), Ce = Date.now(), xe = F.windowMouseX, ke = F.windowMouseY) : Date.now() - Ce > Pe && ((Math.abs(Te - F.windowMouseX) > Be || Math.abs(Ae - F.windowMouseY) > Be) && (F.contentMouse = q.globalToLocal(F.windowMouseX, F.windowMouseY), F.dispatchEvent("hoverover"), Te = F.windowMouseX, Ae = F.windowMouseY, Ie = !1), Ce = Date.now())
				}
			}
			var Me = F.scrollY;
			if (x) {
				function Ee(e) {
					if (te && F.stage && F.hitTestPoint(F.windowMouseX, F.windowMouseY) && F.contains(F.stage.getObjectUnderPoint(F.windowMouseX * F.stage.scaleX, F.windowMouseY * F.stage.scaleY))) {
						zot(e) && (e = event);
						var t = e.detail ? -19 * e.detail : e.wheelDelta;
						zot(t) && (t = -19 * e.deltaY), Me += t, Me = Math.max(-F.scrollYMax, Math.min(0, Me)), k || (F.scrollY = Me, q.stage.update())
					}
				}
				ge = window.addEventListener("mousewheel", Ee), pe = window.addEventListener("wheel", Ee), fe = window.addEventListener("DOMMouseScroll", Ee)
			}
			var Oe, je = !1;

			function Le(e) {
				k && !je && e.stage && (je = !0, Oe = new oo.Damp(F.scrollY, k), oo.Ticker.add(function() {
					me || zot(Me) || (F.scrollY = Oe.convert(Me))
				}, e.stage))
			}
			Object.defineProperty(F, "scrollX", {
				get: function() {
					return q.x
				},
				set: function(e) {
					q.x = e, q.zimDragImmediate && q.zimDragImmediate(q.x, q.y), ve()
				}
			}), Object.defineProperty(F, "scrollY", {
				get: function() {
					return q.y
				},
				set: function(e) {
					q.y = e, q.zimDragImmediate && q.zimDragImmediate(q.x, q.y), ve()
				}
			}), !1 !== L && De(this, R), this.clone = function(e) {
				zot(e) && (e = !0);
				var t = F.cloneProps(new oo.Window(u, d, o, _, W, n, g, p, f, m, le.color, r, i, z, v, a, l, s, b, c, y, w, C, T, A, P, B, I, S, M, E, O, j, L, D, Y));
				return e && (F.content.cloneChildren(t.content), t.update()), t
			}, this.dispose = function() {
				return x && (window.removeEventListener("mousewheel", ge), window.removeEventListener("wheel", pe), window.removeEventListener("DOMMouseScroll", fe)), F.blurEvent && document.window.removeEventListener("blur", F.blurEvent), zot(Se) || oo.Ticker.remove(Se), zot(ze) || oo.Ticker.remove(ze), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Window, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Layer = function(e, t, o, s, c, u, n, r, d, h, i, a, g, l, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B) {
			var I;
			if (I = zob(oo.Layer, arguments, "width, height, titleBar, titleBarContainer, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, color, rollColor, selectedColor, selectedRollColor, borderWidth, borderColor, dashed, transformObject, titleBarWidth, titleBarHeight, titleBarX, titleBarY, titleBarDraggable, close, closeColor, closeBackgroundColor, closeIndicatorColor, anchor, style, group, inherit", this)) return I;
			z_d("58.5"), this.group = P;
			var S = !1 === A ? {} : oo.getStyle("Layer", this.group, B);
			zot(e) && (e = null != S.width ? S.width : 500), zot(t) && (t = null != S.height ? S.height : 500), this.zimContainer_constructor(0, 0, e, t, !1), this.type = "Layer";
			var M = this;
			M.distX = 40, M.distY = 0, zot(o) && (o = null != S.titleBar ? S.titleBar : "LAYER");
			var E = o,
				O = o,
				j = !0;
			zot(c) && (c = null != S.backgroundColor ? S.backgroundColor : "#eee"), zot(u) && (u = null != S.rollBackgroundColor ? S.rollBackgroundColor : "#fff"), zot(n) && (n = null != S.selectedBackgroundColor ? S.selectedBackgroundColor : "#666"), zot(d) && (d = null != S.color ? S.color : "#666"), zot(h) && (h = null != S.rollColor ? S.rollColor : "#666"), zot(i) && (i = null != S.selectedColor ? S.selectedColor : "#ddd"), zot(g) && (g = null != S.borderWidth ? S.borderWidth : 1), zot(l) && (l = null != S.borderColor ? S.borderColor : c), (l < 0 || g < 0) && (l = g = null), zot(p) && (p = null == S.dashed || S.dashed), zot(f) && (f = null != S.titleBar ? S.titleBar : null), zot(m) && (m = null != S.titleBarWidth ? S.titleBarWidth : 100);
			var L = m;
			if (zot(z) && (z = null != S.titleBarHeight ? S.titleBarHeight : 40), zot(v) && (v = null != S.titleBarX ? S.titleBarX : null), zot(b) && (b = null != S.titleBarY ? S.titleBarY : null), zot(y) && (y = null == S.titleBarDraggable || S.titleBarDraggable), zot(w) && (w = null == S.close || S.close), zot(C) && (C = null != S.closeColor ? S.closeColor : n), zot(x) && (x = null != S.closeBackgroundColor ? S.closeBackgroundColor : n), zot(k) && (k = null != S.closeIndicatorColor ? S.closeIndicatorColor : i), zot(T) && (T = null == S.anchor || S.anchor), y || (T = !1), M.anchor = T, w && (m += 30), f = oo.merge({
					borderColor: n
				}, f, {
					events: !0,
					visible: !1,
					ghostColor: l,
					ghostWidth: g,
					ghostDashed: p,
					ghostHidden: !0
				}), zot(s) && (s = null != S.titleBarContainer ? S.titleBarContainer : null), zot(s)) {
				if (!zimDefaultFrame) return void zog("zim Layer(): Please pass in a reference to a container with bounds set.");
				s = zimDefaultFrame.stage
			}
			var D;
			M.active = !1, M.turnOff = function(e, t) {
				M.active = !1, w && (M.checkBox.visible = !1), M.transformControls.remove(), M.mouseChildren = !0, M.button.backgroundColor = c, M.button.rollBackgroundColor = u, M.button.color = d, M.button.rollColor = d, M.transformControls.allowToggleOff(), M.resizeChildren && M.resizeChildren()
			}, M.turnOn = function() {
				M.active = !0, w && (M.checkBox.visible = !0, M.checkBox.checked = !0), M.button.backgroundColor = n, M.button.rollBackgroundColor = n, M.button.color = i, M.button.rollColor = i, M.mouseChildren = !1, M.transformControls.add(), M.transformControls.allowToggleOn()
			}, M.titleBarPos = function(e, t) {
				if (M.titleBar) return M.titleBar.pos ? (M.titleBar.pos(e, t, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]), D.update()) : (M.distX = e, M.distY = t), j = !1, M
			};
			var Y = M.visible;
			M.visible = !1, this.added(function(l) {
				M.transform(f), 0 <= g && M.transformControls.hideGhost(), oo.timeout(50, function() {
					M.visible = Y, 0 <= g && oo.timeout(100, function() {
						M.transformControls.showGhost(), D.update()
					}), D = l;
					var r = M.titleBar = new oo.Container(m, z).reg(0, z).loc(M, null, s).mov(M.distX, M.distY);

					function t(e) {
						if (j && y) {
							var t = s.localToLocal(r.x - M.distX, r.y - M.distY, M.parent),
								o = M.localToLocal(M.regX, M.regY, M.parent),
								n = M.localToLocal(0, 0, M.parent);
							M.x = t.x + (o.x - n.x), M.y = t.y + (o.y - n.y), M.transformControls.resize(e), i(M)
						}
					}

					function i(e) {
						e.loop(function(e) {
							"Layer" == e.type && (M.titleBarDraggable && e.move(), e.transformControls.ghost && e.transformControls.resize(), i(e))
						})
					}

					function o() {
						return 0 == r.x || (r.y == r.height || (r.x == s.width - r.width || (r.y == s.height || void 0)))
					}
					if (y && r.drag({
							all: !0,
							boundary: new oo.Boundary(0, z, s.width - m, s.height - z),
							localBounds: !0
						}), 40 == M.distX && 0 == M.distY || r.pos(M.distX, M.distY), w && (M.checkBox = new oo.CheckBox({
							borderColor: C,
							backgroundColor: x,
							indicatorColor: k,
							size: 20,
							startChecked: !0
						}).center(r).pos(0, null, !0).change(function() {
							M.turnOff(!0, !0)
						}), M.checkBox.visible = !1), r.mouseChildren = !0, (r.layer = M).resetTitleBar = function() {
							M.distX = 40, M.distY = 0, j = !0, M.move(!0), D.update()
						}, "string" != typeof O && "number" != typeof O || (O = new oo.Label({
							text: O,
							color: d,
							rollColor: h,
							size: null != S.size ? S.size : 18,
							group: this.group
						})), M.label = O, M.label.center(r), M.button = new oo.Button({
							shadowBlur: -1,
							width: L,
							height: z - 1,
							label: M.label,
							color: d,
							rollColor: h,
							backgroundColor: c,
							rollBackgroundColor: u,
							corner: null != S.corner ? S.corner : 0,
							inherit: S
						}).addTo(r), M.button.on("mousedown", function() {
							!0, s.loop(function(e) {
								e && e != r && e.layer && e.layer.turnOff && e.layer.active && e.layer.turnOff(!0, !0)
							}), M.active || M.turnOn(), r.top()
						}), M.button.on("pressmove", function() {
							t()
						}), M.button.on("pressup", function() {
							t(!0);
							var e = M.localToLocal(0, 0, s);
							if (M.distX = r.x - e.x, M.distY = r.y - e.y, r.top(), !1, !o() && y) {
								e = M.localToGlobal(0, 0);
								M.button.hitTestPoint(e.x, e.y) && M.resetTitleBar()
							}
						}), M.button.on("dblclick", function() {
							y && M.resetTitleBar()
						}), M.turnOff(), M.on("transformed", function(e) {
							"move" != e.transformType && "size" != e.transformType && "stretch" != e.transformType && "rotate" != e.transformType || (y && M.move(), i(M))
						}), M.move = function(e) {
							!e && !j && M.anchor && o() || (r.loc(M.localToLocal(0, 0, s)).mov(M.distX, M.distY), r.x < 0 && (j = !1, r.x = 0), r.y < r.height && (j = !1, r.y = r.height), r.x > s.width - r.width && (j = !1, r.x = s.width - r.width), r.y > s.height && (j = !1, r.y = s.height), M.anchor || (j = !0))
						}, M.on("transformhide", function() {
							M.turnOff(!0, !0), s.loop(function(e) {
								e && e != r && e.layer && e.layer.turnOff && e.layer.active && e.layer.turnOff()
							})
						}), M.resizeChildren = function(e) {
							M.transformControls.resize(e), M.loop(function(e) {
								e.transformControls && (e.transformControls.visible && e.transformControls.hide(), "Layer" == e.type ? e.resizeChildren() : e.transformControls.resize())
							})
						}, M.resize = function(e) {
							return M.move(), M.resizeChildren(e), M
						}, M.toggled = !1, M.toggle = function(e) {
							return zot(e) ? M.toggled = !M.toggled : M.toggled = e, M.toggled ? (s.loop(function(e) {
								e && e != r && e.layer && e.layer.turnOff && e.layer.active && e.layer.turnOff()
							}), M.turnOn()) : (r.top(), M.turnOff(), s.loop(function(e) {
								e && e != r && e.layer && e.layer.turnOff && e.layer.active && e.layer.turnOff()
							})), M.stage && M.stage.update(), M
						}, Object.defineProperty(M, "titleBarDraggable", {
							get: function() {
								return y
							},
							set: function(e) {
								(y = e) ? r.drag({
									all: !0,
									boundary: oo.Boundary(0, 40, s.width - m, s.height - z),
									localBounds: !0
								}): r.noDrag()
							}
						}), D.on("stagemouseup", function() {
							M.transformControls.visible && r.top()
						}), !zot(v) || !zot(b)) {
						j = !1;
						var e = zot(v) ? r.x : v,
							n = zot(b) ? r.y - z : b;
						M.titleBarStartX = v, M.titleBarStartY = b, M.titleBarPos(e, n);
						var a = M.parent.localToLocal(M.x, M.y, s);
						M.distX = r.x - a.x, M.distY = r.y - a.y
					}
				})
			}), !1 !== A && De(this, S), this.clone = function() {
				return M.cloneProps(new oo.Layer(e, t, E, s, c, u, n, r, d, h, i, a, g, l, p, f, L, z, v, b, y, w, C, x, k, T, A, this.group, B))
			}, this.dispose = function() {
				return M.transformControls.remove(), M.transformControls.disable(), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Layer, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Waiter = function(i, a, e, t, o, n, r, l, s, c, u) {
			var d;
			if (d = zob(oo.Waiter, arguments, "container, speed, foregroundColor, backgroundColor, corner, shadowColor, shadowBlur, fadeTime, style, group, inherit", this)) return d;
			z_d("59"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Waiter", this.group = c;
			var h = !1 === s ? {} : oo.getStyle(this.type, this.group, u);
			zot(a) && (a = null != h.speed ? h.speed : 600), zot(e) && (e = null != h.foregroundColor ? h.foregroundColor : "white"), zot(t) && (t = null != h.backgroundColor ? h.backgroundColor : "orange"), zot(o) && (o = null != h.corner ? h.corner : 16), zot(n) && (n = null != h.shadowColor ? h.shadowColor : "rgba(0,0,0,.3)"), zot(r) && (r = null != h.shadowBlur ? h.shadowBlur : 14), zot(l) && (l = null != h.fadeTime ? h.fadeTime : 0);
			this.setBounds(-52, -20, 104, 40);
			var g = this,
				p = this.display = new oo.Shape({
					style: !1
				});
			this.addChild(p), p.setBounds(0, 0, 104, 40), p.regX = 52, p.regY = 20;
			var f = p.graphics;
			f.f(t);
			var m = o;
			Array.isArray(m) || (m = [o, o, o, o]), f.rc(0, 0, 104, 40, m[0], m[1], m[2], m[3]), -1 != n && 0 < r && (p.shadow = new createjs.Shadow(n, 3, 3, r)), p.on("click", function(e) {
				e.stopImmediatePropagation()
			});
			var z, v, b = new oo.Container({
				style: !1
			});
			this.addChild(b);
			for (var y = 0; y < 3; y++)(z = new createjs.Shape).graphics.f(e).dc(0, 0, 12), z.x = 32 * (y - 1), b.addChild(z), z.cache(-12, -12, 24, 24), z.alpha = 0;
			this.hide = function() {
				function e() {
					g.parent && g.parent.removeChild(g);
					var e = g.stage;
					if (e && e.update(), g.zimAccessibility) {
						var t = g.zimAccessibility;
						t.resize(g), v ? v.focus() : g.zimTabTag.nextSibling.focus(), setTimeout(function() {
							t.talk("Waiter has finished.")
						}, 50)
					}
				}
				return 0 < l ? g.animate({
					obj: {
						alpha: 0
					},
					time: l,
					call: e
				}) : e(), g.toggled = !1, g
			};
			var w = [];
			this.show = function() {
				var e, t = "zim display - Waiter(): Please pass in a reference to a container with bounds set as first parameter to Waiter";
				if (zot(i)) {
					if (!zimDefaultFrame) return void zog(t);
					i = zimDefaultFrame.stage
				} else {
					if (!i.getBounds) return void zog(t);
					if (zot(i.stage)) return void zog("zim display - Waiter(): The container must have a stage property")
				}
				for (var o = 0, n = 0; n < b.numChildren; n++) b && w.push(setTimeout(function() {
					e = b.getChildAt(o), createjs.Tween.get(e, {
						loop: !0
					}).to({
						alpha: 1
					}, a / 3 / 2).wait(a / 3).to({
						alpha: 0
					}, a / 3).wait(a - a / 3 - a / 3 / 2), o++
				}, n * a / 3));
				if (g.ticker = createjs.Ticker.on("tick", function() {
						i.stage.update()
					}), g.x = i.getBounds().width / 2, g.y = i.getBounds().height / 2, i.addChild(g), 0 < l && (g.alpha = 0, g.animate({
						alpha: 1
					}, l)), g.zimAccessibility) {
					var r = g.zimAccessibility;
					setTimeout(function() {
						r.activatedObject && (v = r.activatedObject.zimTabTag)
					}, 50), r.resize(g), r.talk(g.zimTabTag.getAttribute("aria-label"))
				}
				return g.toggled = !0, g
			}, !(g.toggle = function(e) {
				return !0 === e ? g.show() : !1 === e ? g.hide() : g.parent ? g.hide() : g.show(), g
			}) !== s && De(this, h), this.clone = function() {
				return g.cloneProps(new oo.Waiter(i, a, e, t, o, n, r, l, s, this.group, u))
			}, this.dispose = function() {
				g.ticker && createjs.Ticker.off("tick", g.ticker), createjs.Tween.removeTweens(g), g.removeFrom();
				for (var e = 0; e < b.numChildren; e++) {
					var t = b.getChildAt(e);
					clearInterval(w[e]), createjs.Tween.removeTweens(t)
				}
				return this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Waiter, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.ProgressBar = function(t, o, n, r, i, a, l, e, s, c, u, d, h, g, p, f, m, z, v, b, y) {
			var w;
			if (w = zob(oo.ProgressBar, arguments, "barType, foregroundColor, backgroundColor, borderColor, borderWidth, padding, label, color, labelPosition, percentage, corner, shadowColor, shadowBlur, backing, delay, fastClose, container, autoHide, style, group, inherit", this)) return w;
			z_d("59.5"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "ProgressBar", this.group = b;
			var C = !1 === v ? {} : oo.getStyle(this.type, this.group, y);
			zot(o) && (o = null != C.foregroundColor ? C.foregroundColor : "#acd241"), zot(n) && (n = null != C.backgroundColor ? C.backgroundColor : "#444"), zot(r) && (r = null != C.borderColor ? C.borderColor : n), zot(i) && (i = null != C.borderWidth ? C.borderWidth : null), zot(s) && (s = null != C.labelPosition ? C.labelPosition : "bottom"), zot(t) && (t = null != C.barType ? C.barType : "circle"), zot(a) && (a = null != C.padding ? C.padding : "circle" == t ? 2 : -.5), zot(u) && (u = null != C.corner ? C.corner : 15), zot(d) && (d = null != C.shadowColor ? C.shadowColor : "rgba(0,0,0,.3)"), zot(h) && (h = null != C.shadowBlur ? C.shadowBlur : 14), zot(g) && (g = null != C.backing ? C.backing.clone() : null), zot(f) && (f = null == C.fastClose || C.fastClose), r < 0 || i < 0 ? r = i = null : null != r && null == i && (i = "circle" == t ? 10 : 2), zot(p) && (p = null != C.delay ? C.delay : 100), zot(z) && (z = null == C.autoHide || C.autoHide), zot(l) && (l = null != C.label ? C.label : null), zot(e) && (e = null != C.color ? C.color : o), "string" != typeof l && "number" != typeof l || (l = new oo.Label({
				text: l,
				color: e,
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			}));
			l && l.text, !zot(c) && zot(l) && (l = new oo.Label("")), this.label = l;
			var x, k = 30,
				T = this,
				A = 0;
			if (T.visible = !1, setTimeout(function() {
					T.visible = !0, T.stage && T.stage.update()
				}, p), "circle" == t) var P = 20,
				B = (g = this.backing = new oo.Circle(P, "rgba(0,0,0,0)", n, i, null, null, null, !1).addTo(this), this.bar = new oo.Shape({
					style: !1
				}).addTo(T).pos({
					x: g.x,
					y: g.y,
					reg: !0
				}).rot(-90));
			else {
				P = 200;
				if (-1 != d && 0 < h) new oo.Rectangle(P - 2, k - 2, n, null, null, u, null, null, !1).addTo(this).shadow = new createjs.Shadow(d, 3, 3, h);
				g = E(g);
				var I = u;
				Array.isArray(I) || (I = [u, u, u, u]);
				var S = 1.2 * (a + i / 2),
					M = (B = this.bar = new oo.Rectangle(P - 1.8 * (a + i / 2), k - 1.8 * (a + i / 2), o, null, null, [I[0] - S, I[1] - S, I[2] - S, I[3] - S], null, null, !1).center(this), this.mask = new oo.Rectangle(P - 1.8 * (a + i / 2), k - 1.8 * (a + i / 2), null, null, null, null, null, null, !1).center(this).alp(0).sca(0, 1));
				B.setMask(M)
			}

			function E(e) {
				if (T.backing) {
					var t = T.getChildIndex(T.backing);
					T.removeChild(T.backing)
				} else t = T.numChildren;
				if (T.border && T.removeChild(T.border), zot(e) || "Pattern" != e.type) e = T.backing = zot(e) ? new oo.Rectangle(P, k, n, r, i, u, null, null, !1).addTo(T, t) : g.addTo(T, t);
				else {
					var o = e;
					((e = T.backing = new oo.Rectangle(P, k, n, null, null, u, null, null, !1).addTo(T, t)).pattern = o).center(e);
					e.getBounds();
					if (o.setMask(e.shape), i) T.border = new oo.Rectangle(P, k, "rgba(0,0,0,0)", r, i, u, null, null, !1).addTo(T, t + 1)
				}
				return e
			}

			function O(e) {
				"circle" == t ? B.graphics.c().mt(0, 0).s(o).ss(i - 2 * a + .5).a(0, 0, P, 0, 360 * e / 100 * Math.PI / 180) : (M.sca(e / 100, 1), B.setMask(M)), zot(c) || (l.text = l.startText + " " + Math.min(Math.round(e), 100) + "%"), z && f && 100 <= Math.round(e) && (T.timeOut = setTimeout(function() {
					T.hide()
				}, 200)), T.stage && T.stage.update()
			}
			T.setBacking = function(e) {
				E(e), T.stage && T.stage.update()
			}, g.on("click", function(e) {
				e.stopImmediatePropagation()
			}), zot(l) || (l.scaleX = l.scaleY = .8, l.startText = l.text, zot(c) || (l.text = l.startText + "  0%"), l.center(T), "above" == s ? l.y -= 60 : l.y += 60, l.alpha = .8), this.hide = function() {
				var e = T.stage;
				if (T.parent && T.parent.removeChild(T), "Pattern" == T.backing.type && T.backing.pauseInterval && T.backing.pauseInterval(), e && e.update(), T.zimAccessibility) {
					var t = T.zimAccessibility;
					t.resize(T), x ? x.focus() : T.zimTabTag.nextSibling.focus(), setTimeout(function() {
						t.talk("Progress Bar has finished.")
					}, 50)
				}
				return T.toggled = !1, T
			}, this.show = function() {
				var e = "zim display - ProgressBar(): Please pass in a reference to a container with bounds set as first parameter of the ProgressBar";
				if (zot(m)) {
					if (!zimDefaultFrame) return void zog(e);
					m = zimDefaultFrame.stage
				} else {
					if (!m.getBounds) return void zog(e);
					if (zot(m.stage)) return void zog("zim display - Waiter(): The container must have a stage property")
				}
				if (T.timeOut && clearTimeout(T.timeOut), O(0), T.zimActiveLoader && T.zimActiveLoader.on("progress", function(e) {
						O(A = 100 * e.progress)
					}), T.center(m), "Pattern" == T.backing.type && T.backing.pauseInterval && T.backing.pauseInterval(!1), T.zimAccessibility) {
					var t = T.zimAccessibility;
					setTimeout(function() {
						t.activatedObject && (x = t.activatedObject.zimTabTag)
					}, 50), t.resize(T), t.talk(T.zimTabTag.getAttribute("aria-label"))
				}
				return T.toggled = !0, T
			}, T.toggle = function(e) {
				return !0 === e ? T.show() : !1 === e ? T.hide() : T.parent ? T.hide() : T.show(), T
			}, Object.defineProperty(T, "percent", {
				get: function() {
					return A
				},
				set: function(e) {
					O(A = e)
				}
			}), !1 !== v && De(this, C), this.clone = function() {
				return T.cloneProps(new oo.ProgressBar(t, o, n, r, i, a, l, e, s, c, u, d, h, g, p, f, m, z, v, this.group, y))
			}, this.dispose = function() {
				return "Pattern" == T.backing.type && T.backing.clearInterval && T.backing.clearInterval(), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.ProgressBar, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Indicator = function(e, t, n, r, i, o, a, l, s, c, u, d, h, g, p, f, m, z, v) {
			var b;
			if (b = zob(oo.Indicator, arguments, "width, height, num, foregroundColor, backgroundColor, borderColor, borderWidth, backdropColor, corner, indicatorType, fill, scale, lightScale, interactive, shadowColor, shadowBlur, style, group, inherit", this)) return b;
			z_d("60"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Indicator", this.group = z;
			var y = !1 === m ? {} : oo.getStyle(this.type, this.group, v);
			zot(e) && (e = null != y.width ? y.width : 300), zot(t) && (t = null != y.height ? y.height : 50), zot(n) && (n = null != y.num ? y.num : 6), zot(r) && (r = null != y.foregroundColor ? y.foregroundColor : "#f58e25"), zot(i) && (i = null != y.backgroundColor ? y.backgroundColor : "#666"), i < 0 && (i = null != y.backgroundColor ? y.backgroundColor : "rgba(0,0,0,.01)"), zot(o) && (o = null != y.borderColor ? y.borderColor : null), zot(a) && (a = null != y.borderWidth ? y.borderWidth : null), o < 0 || a < 0 ? o = a = null : null != o && null == a && (a = 1), zot(l) && (l = null != y.backdropColor ? y.backdropColor : -1), zot(s) && (s = null != y.corner ? y.corner : 0), zot(c) && (c = null != y.indicatorType ? y.indicatorType : "dot"), zot(u) && (u = null != y.fill && y.fill), zot(d) && (d = null != y.scale ? y.scale : 1), zot(h) && (h = null != y.lightScale ? y.lightScale : 1), zot(g) && (g = null != y.interactive && y.interactive), zot(p) && (p = null != y.shadowColor ? y.shadowColor : "rgba(0,0,0,.3)"), zot(f) && (f = null != y.shadowBlur ? y.shadowBlur : 5);
			var w, C = (zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click",
				x = this;
			this.lights = [];
			new oo.Container({
				style: !1
			});
			if (-1 != l) {
				var k = x.backdrop = new oo.Rectangle(e, t, l, o, a, s, null, null, !1);
				this.addChild(k)
			}
			var T, A = this.lightsContainer = new oo.Container({
				style: !1
			});
			this.addChild(A);
			var P = .5 * t,
				B = e / (n + 1),
				I = new createjs.Shape;
			"square" == c || "box" == c ? I.graphics.f("black").dr(-B / 2 / h + P / 2, -t / 2 + P / 2, B / h, t) : I.graphics.f("black").dr(-B / 2 / h, -t / 2, B / h, t);
			for (var S = 0; S < n; S++) "square" == c || "box" == c ? ((T = new oo.Rectangle(P, P, i, o, a, null, null, null, !1)).regX = T.width / 2, T.regY = T.height / 2) : T = new oo.Circle(P / 2, i, o, a, null, null, null, !1), this.lights.push(T), T.znum = S, T.scaleX = T.scaleY = h, T.hitArea = I, T.x = B + B * S, T.y = t / 2, A.addChild(T);
			if (A.setBounds(0, 0, e, t), A.regX = A.x = e / 2, A.regY = A.y = t / 2, this.addChild(A), -1 != p && 0 < f && (A.shadow = new createjs.Shadow(p, 2, 2, f)), g) {
				A.cursor = "pointer";
				A.on(C, function(e) {
					w != e.target.znum && (M(w = e.target.znum), x.dispatchEvent("change"))
				})
			}

			function M(e) {
				var t;
				n <= e && (e = -1);
				for (var o = 0; o < n; o++) t = u && o < e ? r : i, o == e && (t = r), A.getChildAt(o).color = t;
				x.zimAccessibility && x.zimAccessibility.changeTitle(x), oo.OPTIMIZE || !zns && OPTIMIZE || !x.stage || x.stage.update()
			}
			A.scaleX = A.scaleY = d, Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return w
				},
				set: function(e) {
					w = Math.floor(e), M(w = oo.constrain(w, -1, n - 1))
				}
			}), Object.defineProperty(this, "num", {
				get: function() {
					return n
				},
				set: function(e) {
					zon && zog("num is read only")
				}
			}), this._enabled = !0, Object.defineProperty(x, "enabled", {
				get: function() {
					return x._enabled
				},
				set: function(e) {
					Ee(x, e)
				}
			}), !1 !== m && De(this, y), this.clone = function() {
				return x.cloneProps(new oo.Indicator(e, t, n, r, i, o, a, l, s, c, u, d, h, g, p, f, m, this.group, v))
			}
		}, oo.extend(oo.Indicator, oo.Container, "clone", "zimContainer", !1), oo.List = function(r, n, o, e, i, t, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H, N, V, q, K, U, Z, Q, J, $, ee, te, oe, ne, re, ie, ae, le, se, ce) {
			var ue;
			if (ue = zob(oo.List, arguments, "width, height, list, viewNum, vertical, currentSelected, align, valign, labelAlign, labelValign, labelIndent, labelIndentHorizontal, labelIndentVertical, indent, spacing, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, backdropColor, color, selectedColor, rollColor, selectedRollColor, borderColor, borderWidth, padding, corner, swipe, scrollBarActive, scrollBarDrag, scrollBarColor, scrollBarAlpha, scrollBarFade, scrollBarH, scrollBarV, scrollBarOverlay, slide, slideDamp, slideSnap, shadowColor, shadowBlur, paddingHorizontal, paddingVertical, scrollWheel, damp, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, draggable, boundary, onTop, close, closeColor, excludeCustomTap, organizer, checkBox, pulldown, clone, cancelCurrentDrag, style, group, inherit", this)) return ue;
			z_d("60.5"), this.group = se;
			var de = !1 === le ? {} : oo.getStyle("List", this.group, ce);
			zot(r) && (r = null != de.width ? de.width : 300), zot(n) && (n = null != de.height ? de.height : zot(oe) ? 200 : 200 + oe.height), zot(o) && (o = o = null != de.list ? de.list : ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"]), 0 == o.length && (o = ["%-&"]), this.originalList = o, zot(e) && (e = null != de.viewNum ? de.viewNum : 5), zot(i) && (i = null == de.vertical || de.vertical), zot(t) && (t = null == de.currentSelected || de.currentSelected);
			var he = !zot(a) || !zot(s);
			zot(ne) && (ne = null != de.checkBox && de.checkBox), zot(a) && (a = null != de.align ? de.align : ne ? "left" : "center"), zot(l) && (l = null != de.valign ? de.valign : "center"), zot(s) && (s = null != de.labelAlign ? de.labelAlign : a), zot(c) && (c = null != de.labelValign ? de.labelValign : l), zot(g) && (g = null != de.indent ? de.indent : ne ? 0 : 10), zot(u) && (u = null != de.labelIndent ? de.labelIndent : g), zot(d) && (d = null != de.labelIndentHorizontal ? de.labelIndentHorizontal : u), zot(h) && (h = null != de.labelIndentVertical ? de.labelIndentVertical : u), zot(p) && (p = null != de.spacing ? de.spacing : 2), zot(b) && (b = null != de.backdropColor ? de.backdropColor : "#333"), zot(f) && (f = null != de.backgroundColor ? de.backgroundColor : "#777"), zot(m) && (m = null != de.rollBackgroundColor ? de.rollBackgroundColor : "#555"), zot(z) && (z = null != de.selectedBackgroundColor ? de.selectedBackgroundColor : "#444"), zot(v) && (v = null != de.selectedRollBackgroundColor ? de.selectedRollBackgroundColor : "#555"), zot(y) && (y = null != de.color ? de.color : "white"), zot(C) && (C = null != de.rollColor ? de.rollColor : y), zot(w) && (w = null != de.selectedColor ? de.selectedColor : y), zot(x) && (x = null != de.selectedRollColor ? de.selectedRollColor : C), zot(b) && (b = null != de.backdropColor ? de.backdropColor : b);
			var ge = k,
				pe = T;
			zot(k) && (k = null != de.borderColor ? de.borderColor : "#999"), zot(T) && (T = null != de.borderWidth ? de.borderWidth : 1), zot(A) && (A = null != de.padding ? de.padding : p), zot(P) && (P = null != de.corner ? de.corner : 0), zot(B) && (B = null == de.swipe || de.swipe), zot(I) && (I = null == de.scrollBarActive || de.scrollBarActive), zot(S) && (S = null == de.scrollBarDrag || de.scrollBarDrag), zot(M) && (M = null != de.scrollBarColor ? de.scrollBarColor : k), zot(E) && (E = null != de.scrollBarAlpha ? de.scrollBarAlpha : .3), zot(O) && (O = null == de.scrollBarFade || de.scrollBarFade), zot(j) && (j = null != de.scrollBarH ? de.scrollBarH : !i), zot(L) && (L = null != de.scrollBarV ? de.scrollBarV : i), S && (O = null != de.scrollBarFade && de.scrollBarFade), zot(D) && (D = null == de.scrollBarOverlay || de.scrollBarOverlay), zot(Y) && (Y = null == de.slide || de.slide), zot(X) && (X = null != de.slideDamp ? de.slideDamp : .6), zot(R) && (R = null != de.slideSnap ? de.slideSnap : i ? "vertical" : "horizontal"), zot(_) && (_ = null != de.shadowColor ? de.shadowColor : "rgba(0,0,0,.3)"), zot(W) && (W = null != de.shadowBlur ? de.shadowBlur : 20), zot(G) && (G = null != de.paddingVertical ? de.paddingVertical : A), zot(F) && (F = null != de.paddingHorizontal ? de.paddingHorizontal : A), zot(H) && (H = null == de.scrollWheel || de.scrollWheel), zot(V) && (V = null != de.titleBar ? de.titleBar : null), zot(q) && (q = null != de.titleBarColor ? de.titleBarColor : null), zot(K) && (K = null != de.titleBarBackgroundColor ? de.titleBarBackgroundColor : null), zot(U) && (U = null != de.titleBarHeight ? de.titleBarHeight : 35), zot(Z) && (Z = null != de.draggable ? de.draggable : null), zot(Q) && (Q = null != de.boundary ? de.boundary : null), zot(J) && (J = null != de.onTop ? de.onTop : null), zot($) && ($ = null != de.close ? de.close : null), zot(ee) && (ee = null != de.closeColor ? de.closeColor : null), zot(te) && (te = null != de.excludeCustomTap && de.excludeCustomTap), zot(ne) && (ne = null != de.checkBox && de.checkBox), zot(re) && (re = null != de.pulldown && de.pulldown), zot(ie) && (ie = null != de.clone && de.clone), !1 === V && (V = null), this.vertical = i;
			var fe, me, ze, ve, be = this,
				ye = n;
			if (ne && oo.loop(o, function(e, t) {
					o[t] = oo.List.checkItem(e, null, r, "left", 10, 10, p, y, C, w, x, f, m, z, v)
				}), o.constructor == {}.constructor) {
				var we = zot(o.shade) ? zot(de.shade) ? .2 : de.shade : o.shade,
					Ce = zot(o.dim) ? zot(de.dim) ? .1 : de.dim : o.dim,
					xe = zot(o.shift) ? zot(de.shift) ? 15 : de.shift : o.shift,
					ke = zot(o.bloom) ? !zot(de.bloom) && de.bloom : o.bloom,
					Te = zot(o.whither) ? !zot(de.whither) && de.whither : o.whither,
					Ae = zot(o.open) ? !zot(de.open) && de.open : o.open;
				!0 === ke && (ke = 10), !0 === Te && (Te = 10), !0 === xe && (xe = 15), !0 === we && (we = .2), !0 === Ce && (Ce = .1);
				var Pe = zot(o.subStyles) ? zot(de.subStyles) ? {} : de.subStyles : o.subStyles;
				zot(o.menu) || (o = o.menu), fe = new oo.Hierarchy(o, Ae), Ae && fe.data && fe.data.id0 && (fe.data.id0.open = !1), o = fe.getLinearList(), he || (a = s = "left")
			}
			if (re && (e = zot(fe) ? o.length : fe.length, n = e * r / 620 * 100 + (e + 1) * p + (zot(V) ? 0 : U), T = 0, z = f, b = oo.clear, B = !1), oo.loop(o, function(e) {
					"ListItem" == e.type && (e.width = r - 2 * p)
				}), this.align = a, this.valign = l, this.indent = g, zot(oe) || (n -= oe.height, oe.list = be, oe.setButtons(), U += oe.height), this.zimWindow_constructor(r, n, b, k, T, A, P, B, I, S, M, E, O, j, L, Y, X, R, !0, _, W, F, G, H, N, V, q, K, U, Z, Q, J, $, ee, ae, le, se, de), this.type = "List", zot(V) || (n -= U), zot(oe) || oe.addTo(be).loc(0, -oe.height), be.itemWidth = i ? r - 2 * F - (I ? D ? 0 : 6 : 0) : (r - 2 * F) / e, be.itemHeight = i ? (n - 2 * G) / e : n - 2 * G - (I ? D ? 0 : 6 : 0), ze = oo.copy(o, ie), me = be.tabs = new oo.Tabs({
					width: i ? be.itemWidth : be.itemWidth * o.length,
					height: i ? be.itemHeight * o.length : be.itemHeight,
					tabs: ze,
					spacing: p,
					vertical: i,
					backgroundColor: f,
					rollBackgroundColor: m,
					selectedBackgroundColor: z,
					selectedRollBackgroundColor: v,
					color: y,
					rollColor: C,
					selectedColor: w,
					selectedRollColor: x,
					backdropColor: b,
					currentEnabled: !0,
					currentSelected: t,
					align: a,
					valign: l,
					labelAlign: s,
					labelValign: c,
					labelIndent: u,
					labelIndentHorizontal: d,
					labelIndentVertical: h,
					indent: g,
					useTap: !0,
					excludeCustomTap: te,
					style: le,
					group: se,
					inherit: de
				}).mov(i ? 0 : F, i ? G : 0), be.add(me), fe) {
				var Be = fe.getLinearIDs();

				function Ie(e, t, o) {
					e.listZID = t, e.label && (we && new Rectangle(xe * (o.level + 1), e.height).alp(we).pos(0, 0, "right" == be.align, !1, e), Ce && new Rectangle(e.width, e.height).alp((o.level + 1) * Ce).addTo(e).bot().ord(1), xe && "center" != be.align && (e.label.x += ("right" == be.align ? -1 : 1) * xe * (o.level + 1)));
					var n = fe.getData(t);
					n.obj = e, n.list && !isEmpty(n.list) && (e.accordion = new Label({
						text: n.open ? "-" : "+",
						align: "center",
						color: convertColor(y, "rgba", .6)
					}).center(e).alp(.7).pos(15, null, "right" != be.align).mov(0, n.open ? -3 : 0))
				}

				function Se() {
					if (be.selected.accordion) {
						var o = fe.getData(be.selected.listZID);
						if (o.open) {
							be.selected.accordion && (be.selected.accordion.text = "+", be.selected.accordion.mov(0, 3)), o.open = !1;
							var n = fe.getNextSibling(be.selected.listZID);
							if (zot(n)) var t = be.items.length - 1;
							else t = oo.loop(be.items, function(e, t) {
								if (e.listZID == n) return t - 1
							});
							if (Te) {
								var r = 0;
								be.enabled = !1, interval(Te, function(e) {
									be.removeAt(1, be.selectedIndex + t - be.selectedIndex - r), r++, e.total == e.count + 1 && (be.enabled = !0)
								}, t - be.selectedIndex, !0)
							} else be.removeAt(t - be.selectedIndex, be.selectedIndex + 1)
						} else {
							o.open = !0, be.selected.accordion && (be.selected.accordion.text = "-", be.selected.accordion.mov(0, -3));
							var i = fe.getLinearList(o.list),
								a = fe.getLinearIDs(o.list);
							if (o.opened) {
								if (Array.isArray(i))
									if (ke) {
										r = 0;
										be.enabled = !1, interval(ke, function(e) {
											be.addAt(i[r], be.selectedIndex + 1 + r), e.total == e.count + 1 && (be.enabled = !0), r++
										}, i.length, !0)
									} else be.addAt(i, be.selectedIndex + 1)
							} else {
								o.opened = !0;
								var l = Pe[o.level];
								if (zot(l) && (l = {}), Array.isArray(i))
									if (ke) {
										var r = 0;
										be.enabled = !1, interval(ke, function(e) {
											be.addAt(i[r], be.selectedIndex + 1 + r, {
												backgroundColor: l.backgroundColor,
												color: l.color,
												rollBackgroundColor: l.rollBackgroundColor,
												rollColor: l.rollColor,
												selectedBackgroundColor: l.selectedBackgroundColor,
												selectedColor: l.selectedColor,
												selectedRollBackgroundColor: l.selectedRollBackgroundColor,
												selectedRollColor: l.selectedRollColor
											});
											var t = a[r];
											Ie(be.items[be.selectedIndex + 1 + r], t, o), e.total == e.count + 1 && (be.enabled = !0), r++, be.stage && be.stage.update()
										}, i.length, !0)
									} else be.addAt(i, be.selectedIndex + 1, {
										backgroundColor: l.backgroundColor,
										color: l.color,
										rollBackgroundColor: l.rollBackgroundColor,
										rollColor: l.rollColor,
										selectedBackgroundColor: l.selectedBackgroundColor,
										selectedColor: l.selectedColor,
										selectedRollBackgroundColor: l.selectedRollBackgroundColor,
										selectedRollColor: l.selectedRollColor
									}), loop(a, function(e, t) {
										Ie(be.items[be.selectedIndex + 1 + t], e, o)
									})
							}
						}
					}
				}
				loop(Be, function(e, t) {
					be.tabs.buttons[t].listZID = e
				}), loop(be.tabs.buttons, function(e) {
					var t = fe.getData(e.listZID);
					isEmpty(t.list) || (e.accordion = new Label({
						text: "+",
						align: "center",
						color: convertColor(y, "rgba", .6)
					}).center(e).alp(.7).pos(15, null, "right" != be.align))
				}), be.tap(Se)
			}

			function Me(e) {
				if (i) {
					var t = -(be.itemHeight + p) * e + n / 2 - be.itemHeight / 2;
					return (be.itemHeight + p) * be.length < n && (t = 0), 0 < t && (t = 0), (be.itemHeight + p) * be.length > n && t < -be.tabs.height + n - 2 * G && (t = -be.tabs.height + n - 2 * G), t
				}
				var o = -(be.itemWidth + p) * e + r / 2 - be.itemWidth / 2;
				return (be.itemWidth + p) * be.length < r && (o = 0), 0 < o && (o = 0), (be.itemWidth + p) * be.length > r && o < -be.tabs.width + r - 2 * F && (o = -be.tabs.width + r - 2 * F), o
			}
			me.tap(function(e) {
				e.target.selectedIndex != be.selectedIndex && (be.selectedIndex = me.selectedIndex, be.dispatchEvent("change"), e.preventDefault())
			}), this.getItemIndex = function(e) {
				return be.items.indexOf(e)
			}, this.animateTo = function(e, t) {
				zot(e) && (e = 0), zot(t) && (t = 50);
				var o = Me(be.selectedIndex = e);
				if (i) {
					var n = Math.abs(be.scrollY - o) / be.itemHeight;
					be.animate({
						scrollY: o
					}, n * t)
				} else {
					n = Math.abs(be.scrollX - o) / be.itemWidth;
					be.animate({
						scrollX: o
					}, n * t)
				}
				return be
			}, this.addAt = function(e, t, o, n) {
				return "ListItem" == e.type ? e.width = r - 2 * p : Array.isArray(e) && oo.loop(e, function(e) {
					"ListItem" == e.type && (e.width = r - 2 * p)
				}), be.tabs.addAt(copy(e, n), t, o), be.content.x = 0, be.content.y = 0, be.update(), be
			}, this.removeAt = function(e, t) {
				be.tabs.removeAt(e, t);
				var o = me.getBounds();
				return me.setBounds(0, 0, o.width, o.height), be.content.x = 0, be.content.y = 0, be.update(), be
			}, "%-&" == o[0] && 1 == o.length && be.removeAt(1, 0), this.clear = function() {
				return be.tabs.removeAt(be.length, 0), be.content.x = 0, be.content.y = 0, be.update(), be
			}, this.setCheck = function(e, t) {
				zot(e) && (e = 0), zot(t) && (t = !0), be.items[e].checkBox.checked = t, be.items[e].content.zimOut()
			}, this.getCheck = function(e) {
				return zot(e) && (e = 0), be.items[e].checkBox.checked
			}, this.setChecks = function(t) {
				return oo.loop(be.items, function(e) {
					e.checkBox.checked = t, e.content.zimOut()
				}), be
			}, Object.defineProperty(be, "items", {
				get: function() {
					return be.tabs.buttons
				},
				set: function(e) {
					zon && zog("List() - items is read only - use addAt() and removeAt() to change")
				}
			}), Object.defineProperty(be, "list", {
				get: function() {
					return be.tabs.buttons
				},
				set: function(e) {
					zon && zog("List() - list is read only - use addAt() and removeAt() to change")
				}
			}), Object.defineProperty(be, "length", {
				get: function() {
					return be.tabs.buttons.length
				},
				set: function(e) {
					zon && zog("List() - length is read only")
				}
			}), Object.defineProperty(be, "selectedIndex", {
				get: function() {
					return ve
				},
				set: function(e) {
					me.selectedIndex = e, be.label = me.label, be.selected = me.selected, ve = e, oo.OPTIMIZE || !zns && OPTIMIZE || !be.stage || be.stage.update()
				}
			}), t && (be.selectedIndex = 0), Object.defineProperty(be, "selectedIndexPlusPosition", {
				get: function() {
					return ve
				},
				set: function(e) {
					be.selectedIndex = e, ve = e, i ? be.scrollY = Me(e) : be.scrollX = Me(e), oo.OPTIMIZE || !zns && OPTIMIZE || !be.stage || be.stage.update()
				}
			}), Object.defineProperty(be, "text", {
				get: function() {
					if (be.label) return be.label.text
				},
				set: function(e) {
					be.label && (be.label.text = e)
				}
			}), Object.defineProperty(be, "itemDown", {
				get: function() {
					return be.tabs.buttonDown
				},
				set: function(e) {}
			}), Object.defineProperty(be, "itemsText", {
				get: function() {
					for (var e = [], t = 0; t < be.tabs.buttons.length; t++) {
						var o = be.tabs.buttons[t].label;
						o && !zot(o.text) ? e.push(o.text) : e.push(null)
					}
					return e
				},
				set: function(e) {
					zon && zog("List() - itemsText is read only")
				}
			}), t && (be.selectedIndex = 0), Object.defineProperty(be, "checkBoxes", {
				get: function() {
					for (var e = [], t = 0; t < be.tabs.buttons.length; t++) {
						var o = be.tabs.buttons[t].checkBox;
						e.push(o)
					}
					return e
				},
				set: function(e) {
					zon && zog("List() - checkBoxes is read only")
				}
			}), Object.defineProperty(be, "accordionIndex", {
				get: function() {
					var e = be.selected.listZID;
					if (e) return Number(e.split("id")[1])
				},
				set: function(e) {
					zon && zog("ZIM List() - accordionIndex is read only")
				}
			}), this._enabled = !0, Object.defineProperty(be, "enabled", {
				get: function() {
					return be._enabled
				},
				set: function(e) {
					Ee(be, e)
				}
			}), this.last = function() {
				return this.selectedIndexPlusPosition = this.length - 1, this
			}, this.first = function() {
				return this.selectedIndexPlusPosition = 0, this
			}, Ae && Se && (be.selected = be.items[0], Se()), !1 !== le && De(this, de), this.clone = function() {
				return be.cloneProps(new oo.List(r, ye, oo.copy(be.originalList, !0), e, i, t, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, ge, pe, A, oo.copy(P), B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H, N, V, q, K, U, Z, Q, J, $, ee, te, oe, ne, re, ie, ae, le, this.group, ce))
			}
		}, oo.extend(oo.List, oo.Window, "clone", "zimWindow", !1), oo.List.makeBase = function(e, t, o) {
			e.backing = new oo.Rectangle(e.width, e.height, dark).center(e), "Label" == t.type ? e.label = t : e.label = new oo.Label(t, null, null, white), e.label.center(e).loc(o)
		}, oo.List.slider = function(e, t, o, n, r, i, a, l, s, c) {
			var u;
			if (u = zob(oo.List.slider, arguments, "label, min, max, val, call, step, obj, property, paddingLeft, paddingRight")) return u;
			var d = new oo.Container(620, 100);
			return d.type = "ListItem", d.listItem = "Slider", zot(s) && (s = 20), zot(c) && (c = 30), oo.List.makeBase(d, e, s), d.slider = new oo.Slider({
				inside: !0,
				barWidth: 40,
				barLength: 150,
				barColor: blue,
				min: t,
				max: o,
				step: i
			}).sca(1.5).center(d).mov(20).change(function() {
				d.stepper.currentValue = Math.round(d.slider.currentValue), a && l && (a[l] = d.slider.currentValue), r && "function" == typeof r && r(d.slider.currentValue), d.slider.stage && d.slider.stage.update()
			}), zot(n) || (d.slider.currentValue = n), d.stepper = new oo.Stepper({
				corner: 0,
				arrows: !1,
				stepperType: "number",
				min: t,
				max: o
			}).sca(.5).center(d).pos(c, null, !0).change(function() {
				d.slider.currentValue = d.stepper.currentValue, a && l && (a[l] = d.stepper.currentValue), r && "function" == typeof r && r(d.stepper.currentValue), d.stepper.stage && d.stepper.stage.update()
			}), zot(n) || (d.stepper.currentValue = n), d
		}, oo.List.checkBox = function(e, t, o, n, r, i, a) {
			var l;
			if (l = zob(oo.List.checkBox, arguments, "label, checked, call, obj, property, paddingLeft, paddingRight")) return l;
			var s = new Container(620, 100);
			return s.type = "ListItem", s.listItem = "CheckBox", zot(i) && (i = 20), zot(a) && (a = 30), oo.List.makeBase(s, e, i), s.checkBox = new CheckBox({
				startChecked: t,
				label: ""
			}).sca(1.2).center(s).pos(256 + a, null, !0).change(function() {
				n && r && (n[r] = s.checkBox.checked), o && "function" == typeof o && o(s.checkBox.checked), s.checkBox.stage && s.checkBox.stage.update()
			}), s
		}, oo.List.colorPicker = function(e, t, o, n, r, i, a, l) {
			var s;
			if (s = zob(oo.List.colorPicker, arguments, "label, color, picker, call, obj, property, paddingLeft, paddingRight")) return s;
			var c = new Container(620, 100);
			return c.type = "ListItem", c.listItem = "ColorPicker", zot(a) && (a = 20), zot(l) && (l = 30), oo.List.makeBase(c, e, a), zot(t) && (t = oo.pink), c.colorPicker = o || new oo.ColorPicker({
				alphaPicker: !1
			}), c.swatch = new oo.Rectangle(132, 66, t, oo.lighter, 5).center(c).pos(270, null, !0).cur(), c.swatch.on("mousedown", function() {
				c.colorPicker.selectedColor = c.swatch.color, c.colorPicker.show()
			}), c.colorLabel = new oo.Label(c.swatch.color.toUpperCase(), 40, null, oo.light).center(c).pos(l, null, !0), c.colorPicker.on("close", function() {
				var e = c.colorPicker.stage;
				c.colorPicker.hide(), e && e.update()
			}), c.colorPicker.on("change", function() {
				var e = c.colorPicker.stage;
				c.swatch.color = c.colorPicker.selectedColor, c.colorLabel.text = c.swatch.color.toUpperCase(), c.colorPicker.hide(), r && i && (r[i] = c.colorPicker.selectedColor), n && "function" == typeof n && n(c.colorPicker.selectedColor), e && e.update()
			}), c
		}, oo.List.checkItem = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m) {
			var z;
			if (z = zob(oo.List.checkItem, arguments, "label, size, width, align, paddingHorizontal, paddingVertical, spacing, color, rollColor, selectedColor, selectedRollColor, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, group, inherit")) return z;
			var v = oo.getStyle("CheckBox", f, m);
			zot(t) && (t = null != v.size ? v.size : 20);
			v = oo.getStyle("List", f, m);
			zot(o) && (o = 300), zot(r) && (r = 10), zot(i) && (i = 10), zot(n) && (n = null != v.align ? v.align : "center"), zot(a) && (a = null != v.spacing ? v.spacing : 2), zot(d) && (d = null != v.backgroundColor ? v.backgroundColor : "#777"), zot(h) && (h = null != v.rollBackgroundColor ? v.rollBackgroundColor : "#555"), zot(g) && (g = null != v.selectedBackgroundColor ? v.selectedBackgroundColor : "#444"), zot(p) && (p = null != v.selectedRollBackgroundColor ? v.selectedRollBackgroundColor : "#555"), zot(l) && (l = null != v.color ? v.color : "white"), zot(s) && (s = null != v.rollColor ? v.rollColor : l), zot(c) && (c = null != v.selectedColor ? v.selectedColor : l), zot(u) && (u = null != v.selectedRollColor ? v.selectedRollColor : s);
			var b = new Container;
			return b.type = "CheckItem", b.checkBox = new CheckBox({
				size: t,
				label: e,
				color: l,
				tap: !0
			}), b.backing = new Rectangle(o - 2 * a, b.checkBox.height + 2 * i, d).addTo(b), b.checkBox.center(b), "center" != n && "middle" != n && b.checkBox.pos(r, null, "right" == n), b.backing.tap(function() {
				b.checkBox.toggle(), b.zimOut()
			}), b.checkBox.change(function() {
				b.zimOut()
			}), b.zimOver = function() {
				b.backing.color = b.checkBox.checked ? p : h, b.checkBox.label.color = b.checkBox.checked ? u : s, b.stage && b.stage.update()
			}, b.zimOut = function() {
				b.backing.color = b.checkBox.checked ? g : d, b.checkBox.label.color = b.checkBox.checked ? c : l, b.stage && b.stage.update()
			}, b.backing.on("mouseover", b.zimOver), b.checkBox.on("mouseover", b.zimOver), b.backing.on("mouseout", b.zimOut), b.checkBox.on("mouseout", b.zimOut), b
		}, oo.Stepper = function(n, e, o, t, r, l, i, s, a, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j) {
			var L;
			if (L = zob(oo.Stepper, arguments, "list, width, backgroundColor, borderColor, borderWidth, label, color, vertical, arrows, corner, shadowColor, shadowBlur, continuous, display, press, hold, holdDelay, holdSpeed, draggable, dragSensitivity, dragRange, stepperType, min, max, step, step2, arrows2, arrows2Scale, keyEnabled, keyArrows, rightForward, downForward, style, group, inherit", this)) return L;
			z_d("61"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Stepper", this.group = O;
			var D = !1 === E ? {} : oo.getStyle(this.type, this.group, j);
			zot(n) && (n = null != D.list ? D.list : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), zot(e) && (e = null != D.width ? D.width : 200), zot(o) && (o = null != D.backgroundColor ? D.backgroundColor : "white"), zot(t) && (t = null != D.borderColor ? D.borderColor : null), zot(r) && (r = null != D.borderWidth ? D.borderWidth : null), t < 0 || r < 0 ? t = r = null : null != t && null == r && (r = 1), zot(i) && (i = null != D.color ? D.color : "#555"), zot(l) && (l = null != D.label ? D.label : ""), "string" != typeof l && "number" != typeof l || (l = new oo.Label({
				text: l,
				size: null != D.size ? 2 * D.size : 64,
				color: i,
				align: null != D.align ? D.align : "center",
				valign: null != D.valign ? D.valign : "center",
				backing: "ignore",
				shadowColor: "ignore",
				shadowBlur: "ignore",
				padding: "ignore",
				backgroundColor: "ignore",
				group: this.group
			})), zot(s) && (s = null != D.vertical && D.vertical), zot(a) && (a = null == D.arrows || D.arrows), zot(c) && (c = null != D.corner ? D.corner : 16), zot(u) && (u = null != D.shadowColor ? D.shadowColor : "rgba(0,0,0,.3)"), zot(d) && (d = null != D.shadowBlur ? D.shadowBlur : 14), zot(h) && (h = null != D.continuous && D.continuous), zot(g) && (g = null == D.display || D.display), zot(p) && (p = null == D.press || D.press), zot(f) && (f = null == D.hold || D.hold), zot(m) && (m = null != D.holdDelay ? D.holdDelay : 400), zot(z) && (z = null != D.holdSpeed ? D.holdSpeed : 200), zot(v) && (v = null == D.draggable || D.draggable), (zot(b) || b <= 0) && (b = null != D.dragSensitivity ? D.dragSensitivity : .1), zot(y) && (y = null != D.dragRange ? D.dragRange : 200), zot(w) && (w = null != D.stepperType ? D.stepperType : "list"), zot(C) && (C = null != D.min ? D.min : 0), zot(x) && (x = null != D.max ? D.max : 100), zot(k) && (k = null != D.step ? D.step : 1), zot(T) && (T = null != D.step2 ? D.step2 : k), zot(A) && T != k && "number" == w && (A = null == D.arrows2 || D.arrows2), zot(P) && (P = null != D.arrows2Scale ? D.arrows2Scale : .5), zot(B) && (B = null == D.keyEnabled || D.keyEnabled), zot(I) && (I = null == D.keyArrows || D.keyArrows), zot(S) && (S = null == D.rightForward || D.rightForward), zot(M) && (M = null != D.downForward ? D.downForward : "number" != w);
			var Y, X, R, _, W = this,
				F = 100,
				G = k,
				H = 1;
			if ("number" == w) {
				if (C = Number(C), x = Number(x), NaN == C && (C = 0), NaN == x && (x = 100), x < C) {
					H = -1;
					var N = x;
					x = C, C = N, X = x
				} else X = C;
				this.min = C, this.max = x, C < 0 && 0 < x && (X = 0), k = Math.abs(k), R = Math.max(K(k), K(T))
			} else if ("letter" == w) {
				n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "string" != typeof C && (C = "A"), "string" != typeof x && (x = "Z"), C = C.substr(0, 1).toUpperCase(), x = x.substr(0, 1).toUpperCase();
				var V = n.indexOf(C);
				V < 0 && (C = "A", V = 0);
				var q = n.indexOf(x);
				q < 0 && (x = "Z", q = n.length), q < V && (n.reverse(), V = n.length - 1 - V, q = n.length - 1 - q), n = n.splice(V, q - V + 1)
			} else w = "list";

			function K(e) {
				var t = String(e).split(".")[1];
				return t = t ? t.length : 0
			}
			var U = 0,
				Z = 0;
			v && this.on("mousedown", function(e) {
				W.zimAccessibility && W.zimAccessibility.aria || (this.stage.mouseMoveOutside = !0, U = e.rawX / e.target.stage.scaleX, Z = e.rawY / e.target.stage.scaleY, _ = this.stage.on("stagemousemove", function(e) {
					U = e.rawX / e.target.stage.scaleX, Z = e.rawY / e.target.stage.scaleY
				}))
			}, null, !0), (this.label = l).mouseChildren = !1;
			l.mouseEnabled = !1;
			var Q, J, $, ee, te, oe, ne, re, ie, ae, le, se, ce, ue = !1;
			if (a || A) {
				var de = new createjs.Shape;
				de.graphics.ss(t).s(r).f("rgba(255,255,255,.11)").r(0, 0, 150, 150), de.regX = 75, de.regY = 87.5
			}
			if (a && (ee = this.containerPrev = new oo.Container({
					style: !1
				}), this.addChild(ee), ee.hitArea = de, te = this.arrowPrev = new oo.Triangle(F, 80, 80, o, null, null, null, null, null, null, !1), -1 != u && 0 < d && (ee.shadow = new createjs.Shadow(u, 3, 3, d)), ee.addChild(te), ee.cursor = "pointer", ee.on("mousedown", function(e) {
					if (!W.zimAccessibility || !W.zimAccessibility.aria) {
						G = k;
						var t = s ? M ? 1 : -1 : S ? -1 : 1;
						ze(t), fe(t, null, null, e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY)
					}
				}), f && ee.on("pressup", me), s ? (ee.rotation = 180, ee.x = e / 2, ee.y = g ? ee.height + 25 + F + ee.height / 2 + 25 : 2 * ee.height) : (ee.rotation = -90, ee.x = ee.height / 2, ee.y = ee.width / 2)), g) {
				var he = this.textBox = new oo.Shape({
					style: !1
				});
				he.cursor = "pointer", this.addChild(he), he.setBounds(0, 0, e, F), null != t && he.graphics.s(t).ss(r);
				var ge, pe = c;
				Array.isArray(pe) || (pe = [c, c, c, c]), he.graphics.f(o).rc(0, 0, e, F, pe[0], pe[1], pe[2], pe[3]), -1 != u && 0 < d && (he.shadow = new createjs.Shadow(u, 3, 3, d)), a && (s ? a && (he.y = te.height + 25) : a && (he.x = te.height + 25)), this.addChild(l), 0 < n.length && (Y = 0, l.text = n[Y]), l.center(W), he.on("mousedown", function(e) {
					W.zimAccessibility && W.zimAccessibility.aria || (ge = W.currentValue, p && ze(1), fe(1, !0, null, e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY), "number" == w && (clearTimeout($), ue = !0, $ = setTimeout(function() {
						ue = !1
					}, 200)))
				}), he.on("pressup", function() {
					W.zimAccessibility && W.zimAccessibility.aria || ue && (be(X = Math.round(X), X), W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue)
				})
			} else 0 < n.length && (Y = 0);

			function fe(r, i, a, e, t) {
				if (f) {
					holdY = t, 0 == (se = e) && (se = 1), 0 == holdY && (holdY = 1), v || (b = 1), ce = new oo.Proportion(0, y, z, z * b);
					var l = z;
					Q = setTimeout(function() {
						!0,
						function n() {
							J = setTimeout(function() {
								var e = r;
								if (v) {
									var t = Math.abs(U - se),
										o = Math.abs(Z - holdY);
									s ? (i || a || (t = 0), a && (o = 0)) : (i || a || (o = 0), a && (t = 0)), (10 <= t || 10 <= o) && (l = o < t ? (G = s ? T : k, e = 0 < U - se ? 1 : -1, ce.convert(Math.abs(se - U))) : (G = s ? k : T, e = 0 < Z - holdY ? 1 : -1, "number" != w && M || (e *= -1), ce.convert(Math.abs(holdY - Z))))
								}
								ze(e), n()
							}, l)
						}()
					}, m)
				}
			}

			function me() {
				W.zimAccessibility && W.zimAccessibility.aria || (!1, clearTimeout(Q), clearTimeout(J))
			}

			function ze(e) {
				var t;
				if ("number" == w) {
					var o = X;
					X += G * e * H, X = oo.decimals(X, R), h ? X > W.max ? X = W.min : X < W.min && (X = W.max) : (X > W.max ? (X = 1 == k ? W.max : o, g && (he.cursor = "default")) : g && (he.cursor = "pointer"), X < W.min && (X = 1 == k ? W.min : o))
				} else {
					if (t = Y + e, h) t > n.length - 1 && (t = 0), t < 0 && (t = n.length - 1);
					else {
						if (t > n.length - 1) return void(g && (he.cursor = "default"));
						if (g && (he.cursor = "pointer"), t < 0) return
					}
					Y = t
				}
				be("number" == w ? X : n[Y], "number" == w ? X : Y), W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue
			}

			function ve() {
				W.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}

			function be(e, t) {
				Y = t, g && ("number" == w && 0 != e && 0 < R && (e = oo.decimals(e, R, !0)), l.text = e, l.center(W)), a && (ee.alpha = 1, te.color = o, ee.cursor = "pointer", oe.alpha = 1, ne.color = o, oe.cursor = "pointer", h || ("number" == w ? (Y == W.min && (0 < H ? ye() : we()), Y == W.max && (0 < H ? we() : ye())) : (0 == Y && (s ? we() : ye()), Y == n.length - 1 && (s ? ye() : we())))), !oe || oo.OPTIMIZE || !zns && OPTIMIZE || !oe.stage ? !l || oo.OPTIMIZE || !zns && OPTIMIZE || !l.stage || l.stage.update() : oe.stage.update(), W.zimAccessibility && W.zimAccessibility.changeTitle(W, null, !0)
			}

			function ye() {
				a && (ee.alpha = .8, te.color = "#aaa", ee.cursor = "default")
			}

			function we() {
				a && (oe.alpha = .8, ne.color = "#aaa", oe.cursor = "default")
			}
			a && (oe = this.containerNext = new oo.Container({
				style: !1
			}), this.addChild(oe), oe.hitArea = de.clone(), ne = this.arrowNext = new oo.Triangle(F, 80, 80, o, null, null, null, null, null, null, !1), -1 != u && 0 < d && (oe.shadow = new createjs.Shadow(u, 3, 3, d)), oe.addChild(ne), oe.cursor = "pointer", oe.on("mousedown", function(e) {
				if (!W.zimAccessibility || !W.zimAccessibility.aria) {
					G = k;
					var t = s ? M ? -1 : 1 : S ? 1 : -1;
					ze(t), fe(t, null, null, e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY)
				}
			}), f && oe.on("pressup", me), s ? (oe.rotation = 0, oe.x = e / 2, oe.y = oe.getBounds().height / 2) : (oe.rotation = 90, oe.x = g ? he.x + he.getBounds().width + oe.getBounds().height / 2 + 25 : ee.x + ee.getBounds().width, oe.y = oe.getBounds().width / 2)), f && g && he.on("pressup", me), A && ((re = this.prev2 = new oo.Container({
				style: !1
			})).hitArea = de.clone(), ie = this.arrowPrev2 = new oo.Triangle(F, 80, 80, "rgba(0,0,0,.2)", o, 2, null, null, null, null, !1), re.addChild(ie), re.cursor = "pointer", re.sca(P), re.alpha = .5, re.on("mousedown", function(e) {
				if (!W.zimAccessibility || !W.zimAccessibility.aria) {
					G = T;
					var t = s ? S ? -1 : 1 : M ? 1 : -1;
					ze(t), fe(t, null, !0, e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY)
				}
			}), f && re.on("pressup", me), (ae = this.next2 = new oo.Container({
				style: !1
			})).hitArea = de.clone(), le = this.arrowNext2 = new oo.Triangle(F, 80, 80, "rgba(0,0,0,.2)", o, 2, null, null, null, null, !1), ae.addChild(le), ae.cursor = "pointer", ae.sca(P), ae.alpha = .5, ae.on("mousedown", function(e) {
				if (!W.zimAccessibility || !W.zimAccessibility.aria) {
					G = T;
					var t = s ? S ? 1 : -1 : M ? -1 : 1;
					ze(t), fe(t, null, !0, e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY)
				}
			}), f && ae.on("pressup", me), s ? (re.y = this.height / 2, re.x = -re.width / 2 - 25 * Math.max(.2, Math.min(1, P)), re.rotation = 270, ae.y = this.height / 2, ae.x = this.width + ae.width / 2 + 25 * Math.max(.2, Math.min(1, P)), ae.rotation = 90) : (ae.x = this.width / 2, ae.y = -ae.height / 2 - 25 * Math.max(.2, Math.min(1, P)), ae.rotation = 0, re.x = this.width / 2, re.y = this.height + re.height / 2 + 25 * Math.max(.2, Math.min(1, P)), re.rotation = 180), this.addChild(re, ae)), Object.defineProperty(this, "stepperArray", {
				get: function() {
					if ("number" == w) {
						n = [];
						for (var e = W.min; e <= W.max; e += Math.min(k, T)) n.push(oo.decimals(e, R, null, !1))
					}
					return n
				},
				set: function(e) {
					n = e, W.selectedIndex = W.selectedIndex
				}
			}), Object.defineProperty(this, "min", {
				get: function() {
					return C
				},
				set: function(e) {
					"number" == w ? (W.currentValue < e && (W.currentValue = e), C = e, W.selectedIndex = W.selectedIndex) : C = e
				}
			}), Object.defineProperty(this, "max", {
				get: function() {
					return x
				},
				set: function(e) {
					"number" == w ? (W.currentValue > e && (W.currentValue = e), x = e, W.selectedIndex = W.selectedIndex) : x = e
				}
			}), be("number" == w ? X : n[Y], "number" == w ? X : Y), Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return "number" == w ? W.stepperArray.indexOf(W.currentValue) : Y
				},
				set: function(e) {
					zot(e) || ("number" == w ? (Y = Math.min(W.stepperArray.length - 1, Math.max(0, e)), be(X = W.stepperArray[Y], X)) : (e = Math.min(n.length - 1, Math.max(0, e)), be(n[Y = e], Y)))
				}
			}), Object.defineProperty(this, "currentValue", {
				get: function() {
					return "number" == w ? X : n[Y]
				},
				set: function(e) {
					if (!zot(e))
						if ("number" == w) {
							if (e = Number(e), W.max > W.min) {
								if (e > W.max || e < W.min) return
							} else if (e < W.max || e > W.min) return;
							if (newIndex = W.stepperArray.indexOf(e), newIndex < 0) return;
							Y = newIndex, be(X = W.stepperArray[Y], X)
						} else {
							if (!(-1 < n.indexOf(e))) return;
							if ((e = n.indexOf(e)) == W.selectedIndex) return;
							be(n[Y = e], Y)
						}
				}
			}), Object.defineProperty(this, "currentValueEvent", {
				get: function() {
					return W.currentValue
				},
				set: function(e) {
					String(e) != String(W.currentValue) && (W.currentValue = e, W.dispatchEvent("change"))
				}
			}), Object.defineProperty(this, "continuous", {
				get: function() {
					return h
				},
				set: function(e) {
					h = e, "number" == w ? be(X, X) : be(n[W.selectedIndex], W.selectedIndex)
				}
			}), this._enabled = !0, Object.defineProperty(W, "enabled", {
				get: function() {
					return W._enabled
				},
				set: function(e) {
					Ee(W, e), e ? ("number" == w ? be(X, X) : be(n[W.selectedIndex], W.selectedIndex), window.addEventListener("keydown", W.keyDownEvent)) : (ye(), we(), window.removeEventListener("keydown", W.keyDownEvent), g && (l.mouseChildren = !1), g && (l.mouseEnabled = !1)), !oe || oo.OPTIMIZE || !zns && OPTIMIZE || !oe.stage ? !l || oo.OPTIMIZE || !zns && OPTIMIZE || !l.stage || l.stage.update() : oe.stage.update()
				}
			}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
				get: function() {
					return oo.KEYFOCUS == W
				},
				set: function(e) {
					oo.KEYFOCUS = W
				}
			}), oo.KEYFOCUS || ve(), this.on("mousedown", function() {
				ve()
			});
			var Ce = !1,
				xe = !1,
				ke = !1;
			this.on("mousedown", function() {
				W.zimAccessibility && W.zimAccessibility.aria || (W.focus = !0, ke = xe = !(Ce = !0))
			}), this.keyDownEvent = function(e) {
				if (W.stage && (W.zimAccessibility && W.focus || !W.zimAccessibility && W.keyFocus)) {
					var t, o = (e = e || event).keyCode;
					if (I && 37 <= o && o <= 40) {
						var n = M ? 40 : 38,
							r = S ? 39 : 37,
							i = M ? 38 : 40,
							a = S ? 37 : 39;
						o == n || o == r ? (G = s && o == n || !s && o == r ? k : T, ze(1)) : o != i && o != a || (G = s && o == i || !s && o == a ? k : T, ze(-1))
					}
					if (B)
						if ("number" == w) !e.shiftKey && 48 <= o && o <= 57 ? t = o - 48 : 96 <= o && o <= 105 ? t = o - 96 : 190 == o ? xe = !0 : 173 == o || 189 == o ? (W.currentValue = -1 * W.currentValue, W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue, ke = !ke) : 46 == o && (xe = !(Ce = !0)), Ce && !zot(t) ? (xe && (t /= 10), ke && (t *= -1), W.currentValue = t, Ce = !1, W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue) : zot(t) || (xe && (t = String(t / 10).substr(1)), W.currentValue = Number(Math.floor(Number(l.text)) + String(t)), W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue);
						else W.currentValue = String.fromCharCode(e.keyCode), W.currentValue != ge && W.dispatchEvent("change"), ge = W.currentValue
				}
			}, window.addEventListener("keydown", this.keyDownEvent), this.next = function() {
				ze(1)
			}, !(this.prev = function() {
				ze(-1)
			}) !== E && De(this, D), this.clone = function() {
				return W.cloneProps(new oo.Stepper(n, e, o, t, r, l.clone(), i, s, a, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, this.group, j))
			}, this.dispose = function() {
				return window.removeEventListener("keydown", W.keyDownEvent), W.stage && W.stage.off(_), this.zimContainer_dispose(), !0
			}
		}, oo.zut = function(e) {
			if (zot(e) || !e.key) return !0;
			oo.async("https://zimjs.com/gamdata.php?id=" + e.key + "&player=" + e.player + "&score=" + e.score + "&reverse=" + e.info.reverse + "&total=" + e.info.total + "&allowZero=" + e.info.allowZero, e.info.type)
		}, oo.extend(oo.Stepper, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Slider = function(n, r, t, i, e, o, a, l, s, c, u, d, h, g, p, f, m, z) {
			var v;
			if (v = zob(oo.Slider, arguments, "min, max, step, button, barLength, barWidth, barColor, vertical, useTicks, inside, keyArrows, keyArrowsStep, keyArrowsH, keyArrowsV, damp, style, group, inherit", this)) return v;
			z_d("62"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Slider", this.group = m;
			var b = !1 === f ? {} : oo.getStyle(this.type, this.group, z);
			if (zot(n) && (n = null != b.min ? b.min : 0), zot(r) && (r = null != b.max ? b.max : 10), r - n != 0) {
				var y;
				zot(t) && (t = null != b.step ? b.step : 0), zot(e) && (e = null != b.barLength ? b.barLength : 300), zot(o) && (o = null != b.barWidth ? b.barWidth : 3), zot(a) && (a = null != b.barColor ? b.barColor : "#666"), zot(l) && (l = null != b.vertical && b.vertical), zot(s) && (s = null != b.useTicks && b.useTicks), zot(c) && (c = null != b.inside && b.inside), zot(u) && (u = null == b.keyArrows || b.keyArrows), zot(h) && (h = null == b.keyArrowsH || b.keyArrowsH), zot(g) && (g = null == b.keyArrowsV || b.keyArrowsV), zot(d) && (d = null != b.keyArrowsStep ? b.keyArrowsStep : (r - n) / 100), zot(p) && (p = null != b.damp && b.damp);
				var w, C, x = !(!zot(b.backing) && "Pattern" != b.backing.type);
				if (zot(i)) {
					var k = 30,
						T = 40;
					l && (k = 50, T = 40), i = null != b.button ? b.button : new oo.Button({
						width: null != b.width ? b.width : k,
						height: null != b.height ? b.height : T,
						label: "",
						backgroundColor: null != b.backgroundColor ? b.backgroundColor : "#fff",
						rollBackgroundColor: null != b.rollBackgroundColor ? b.rollBackgroundColor : "#ddd",
						borderColor: null != b.borderColor ? b.borderColor : x ? "#666" : null,
						borderWidth: null != b.borderWidth ? b.borderWidth : x ? 1 : null,
						corner: null != b.corner ? b.corner : 0,
						backing: null != b.backing ? b.backing.clone() : null,
						rollBacking: null != b.rollBacking ? b.rollBacking.clone() : null,
						shadowColor: null != b.shadowColor ? b.shadowColor : null,
						shadowBlur: null != b.shadowBlur ? b.shadowBlur : null,
						hitPadding: 30,
						style: !1
					})
				}
				i.rollPersist = !0, l ? (w = i.width, c ? (C = e, this.setBounds(0, 0, w, C)) : (C = e + i.height, this.setBounds(-i.width / 2, -i.height / 2, w, C))) : (C = Math.max(i.height, o), c ? (w = e, this.setBounds(0, 0, w, C)) : (w = e + i.width, this.setBounds(-i.width / 2, -i.height / 2, w, C)));
				var A, P, B, I, S, M, E, O, j, L = this,
					D = n,
					Y = 0;
				if (this.button = i, this.cursor = "pointer", s && 0 != t) {
					I = this.ticks = new oo.Shape({
						style: !1
					}), this.addChild(I), (S = I.graphics).ss(1).s(a);
					var X = Math.round((r - n) / t),
						R = (r - n) / X;
					if (R != t && zon && zog("zim.Slider() : non-divisible step (" + t + ") adjusted"), t = R, c) var _ = (e - (l ? i.height : i.width)) / Math.abs(X);
					else _ = e / Math.abs(X)
				}
				if (l) {
					var W = c ? i.height / 2 : 0;
					if ((A = this.bar = new oo.Rectangle(o, e, a, null, null, null, null, null, !1)).expand(20, 0), A.centerReg(this), i.centerReg(this), B = A.getBounds(), P = new createjs.Rectangle(A.x, B.y + W, 0, B.height - 2 * W), s && 0 != t) {
						for (var F = 0; F <= Math.abs(X); F++) S.mt(0, W + _ * F).lt(20, W + _ * F);
						I.x = A.x + 15
					}
				} else {
					W = c ? i.width / 2 : 0;
					if ((A = this.bar = new oo.Rectangle(e, o, a, null, null, null, null, null, !1)).expand(0, 20), A.centerReg(this), i.centerReg(this), B = A.getBounds(), P = new createjs.Rectangle(B.x + W, A.y, B.width - 2 * W, 0), s && 0 != t) {
						for (F = 0; F <= Math.abs(X); F++) S.mt(W + _ * F, 0).lt(W + _ * F, -20);
						I.y = A.y - 10
					}
				}
				i.x = P.x, i.y = P.y, i.on("mousedown", function(e) {
					y = e.target.stage, L.focus = !0;
					var t = L.globalToLocal(e.stageX / y.scaleX, e.stageY / y.scaleY);
					M = t.x - i.x, E = t.y - i.y, L.stage && (L.stage.mouseMoveOutside = !0)
				}), i.on("pressmove", function(e) {
					K(e)
				}), A.on("mousedown", function(e) {
					y = e.target.stage, E = M = 0, L.zimAccessibility && L.zimAccessibility.aria || K(e)
				}), p && (O = n, j = new oo.Damp(O, p), L.ticker = oo.Ticker.add(function() {
					O = j.convert(D)
				})), Object.defineProperty(this, "currentValue", {
					get: function() {
						return p ? O : D
					},
					set: function(e) {
						zot(e) || (n < r ? (e < n && (e = n), r < e && (e = r)) : (n < e && (e = n), e < r && (e = r)), D = e = q(e), j && j.immediate(D), Y = l ? (i.y = (e - r) / (n - r) * P.height + W, i.y) : (i.x = (e - n) / (r - n) * P.width + W, i.x), Z(), oo.OPTIMIZE || !zns && OPTIMIZE || !L.stage || L.stage.update())
					}
				}), Object.defineProperty(this, "currentValueEvent", {
					get: function() {
						return p ? O : D
					},
					set: function(e) {
						e != L.currentValue && (L.currentValue = e, L.dispatchEvent("change"))
					}
				}), Object.defineProperty(this, "min", {
					get: function() {
						return n
					},
					set: function(e) {
						zon && zog("min is read only")
					}
				}), Object.defineProperty(this, "max", {
					get: function() {
						return r
					},
					set: function(e) {
						zon && zog("max is read only")
					}
				}), Object.defineProperty(this, "step", {
					get: function() {
						return t
					},
					set: function(e) {
						zon && zog("step is read only")
					}
				}), Object.defineProperty(this, "keyArrowsH", {
					get: function() {
						return h
					},
					set: function(e) {
						h = e
					}
				}), Object.defineProperty(this, "keyArrowsV", {
					get: function() {
						return g
					},
					set: function(e) {
						g = e
					}
				}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
					get: function() {
						return oo.KEYFOCUS == L
					},
					set: function(e) {
						oo.KEYFOCUS = L
					}
				}), u && !oo.KEYFOCUS && Q(), this.on("mousedown", function() {
					u && Q()
				});
				var G = !1,
					H = !1,
					N = !1,
					V = !1;
				this.keyDownEvent = function(e) {
					L.stage && (L.zimAccessibility && L.focus || !L.zimAccessibility && L.keyFocus) && (37 == e.keyCode && h ? G = !0 : 40 == e.keyCode && g ? H = !0 : 39 == e.keyCode && h ? N = !0 : 38 == e.keyCode && g && (V = !0), null == L.keyInterval && (G || H || N || V) && (J(), L.keyTimeout = setTimeout(function() {
						null == L.keyInterval && (G || H || N || V) && (L.keyInterval = setInterval(J, 40))
					}, 140)))
				}, window.addEventListener("keydown", this.keyDownEvent), L.keyUpEvent = function(e) {
					37 == e.keyCode ? G = !1 : 40 == e.keyCode ? H = !1 : 39 == e.keyCode ? N = !1 : 38 == e.keyCode && (V = !1), null == L.keyInterval || G || H || N || V || (clearInterval(L.keyInterval), L.keyInterval = null)
				}, window.addEventListener("keyup", this.keyUpEvent), this._enabled = !0, Object.defineProperty(L, "enabled", {
					get: function() {
						return L._enabled
					},
					set: function(e) {
						Ee(L, e), e ? (window.addEventListener("keydown", L.keyDownEvent), window.addEventListener("keyup", L.keyUpEvent)) : (window.removeEventListener("keydown", L.keyDownEvent), window.removeEventListener("keyup", L.keyUpEvent))
					}
				}), !1 !== f && De(this, b), this.clone = function() {
					return L.cloneProps(new oo.Slider(n, r, t, i.clone(), e, o, a, l, s, c, u, d, h, g, p, f, this.group, z))
				}, this.dispose = function() {
					return window.removeEventListener("keydown", L.keyDownEvent), window.removeEventListener("keyup", L.keyUpEvent), this.zimContainer_dispose(), !0
				}
			} else zog("ZIM Slider range must not be 0");

			function q(e) {
				return 0 == t ? e : Math.round(e / t) * t
			}

			function K(e) {
				var t = L.globalToLocal(e.stageX / y.scaleX, e.stageY / y.scaleY),
					o = function(e, t, o) {
						return e = Math.max(o.x, Math.min(o.x + o.width, e)), t = Math.max(o.y, Math.min(o.y + o.height, t)), {
							x: e,
							y: t
						}
					}(t.x - M, t.y - E, P);
				Y = l ? (i.x = o.x, D = q((o.y - P.y) / P.height * (n - r)), i.y = P.y + D * P.height / (n - r), D += r, i.y != Y && L.dispatchEvent("change"), i.y) : (D = q((o.x - P.x) / P.width * (r - n)), i.x = P.x + D * P.width / (r - n), D += n, i.y = o.y, i.x != Y && L.dispatchEvent("change"), i.x), Z(), oo.OPTIMIZE || !zns && OPTIMIZE || !L.stage || L.stage.update()
			}

			function U(e) {
				return 0 < e ? 1 : -1
			}

			function Z() {
				L.zimAccessibility && L.zimAccessibility.changeTitle(L, null, !0)
			}

			function Q() {
				L.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}

			function J() {
				(G || H) && (L.currentValueEvent -= 0 < t ? t * U(r - n) : d * U(r - n)), (N || V) && (L.currentValueEvent += 0 < t ? t * U(r - n) : d * U(r - n))
			}
		}, oo.extend(oo.Slider, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Dial = function(n, r, i, e, t, o, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k) {
			var T;
			if (T = zob(oo.Dial, arguments, "min, max, step, width, backgroundColor, indicatorColor, indicatorScale, indicatorType, innerCircle, innerScale, useTicks, innerTicks, tickColor, limit, keyArrows, keyArrowsStep, keyArrowsH, keyArrowsV, continuous, continuousMin, continuousMax, damp, style, group, inherit", this)) return T;
			z_d("63"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Dial", this.group = x;
			var A = !1 === C ? {} : oo.getStyle(this.type, this.group, k);
			if (zot(n) && (n = null != A.min ? A.min : 0), zot(r) && (r = null != A.max ? A.max : 10), r - n != 0) {
				var P;
				zot(i) && (i = null != A.step ? A.step : 1), zot(e) && (e = null != A.width ? A.width : 100), zot(t) && (t = null != A.backgroundColor ? A.backgroundColor : "#666"), zot(o) && (o = null != A.indicatorColor ? A.indicatorColor : "#222"), zot(a) && (a = null != A.indicatorScale ? A.indicatorScale : 1), zot(l) && (l = null != A.indicatorType ? A.indicatorType : "arrow"), zot(s) && (s = null == A.innerCircle || A.innerCircle), zot(c) && (c = null != A.innerScale ? A.innerScale : .5), zot(u) && (u = null == A.useTicks || A.useTicks), zot(d) && (d = null != A.innerTicks && A.innerTicksinnerTicks), zot(h) && (h = null != A.tickColor ? A.tickColor : o), zot(g) && (g = null == A.limit || A.limit), zot(p) && (p = null == A.keyArrows || A.keyArrows), zot(f) && (f = null != A.keyArrowsStep ? A.keyArrowsStep : (r - n) / 100), zot(m) && (m = null == A.keyArrowsH || A.keyArrowsH), zot(z) && (z = null == A.keyArrowsV || A.keyArrowsV), zot(v) && (v = null != A.continuous && A.continuous), v && (g = null != A.limit && A.limit), zot(w) && (w = null != A.damp && A.damp), 0 == g && (w = null);
				var B = this;
				this.cursor = "pointer";
				var I = e / 2,
					S = n,
					M = 0,
					E = this.backing = new oo.Circle(I, t, null, null, null, null, null, !1);
				if (this.addChild(E), s) {
					var O = d ? "rgba(0,0,0,.2)" : "rgba(0,0,0,.1)";
					"black" != t && "#000" != t && "#000000" != t && "#111" != t && "#111111" != t || (O = "#222");
					var j = this.inner = new oo.Circle(I * c, O, null, null, null, null, null, !1);
					if (this.addChild(j), !d) {
						var L = this.inner2 = new oo.Circle(I * (c - .1), "rgba(0,0,0,.1)", null, null, null, null, null, !1);
						this.addChild(L)
					}
				}
				var D, Y, X, R, _ = Math.abs(r - n) / i;
				if (u && 0 != i) {
					var W = this.ticks = new oo.Container({
						style: !1
					});
					this.addChild(W);
					for (var F = 0; F < (v ? _ : _ + 1); F++) {
						var G;
						(G = new oo.Rectangle(1, .2 * I, h, null, null, null, null, null, !1)).regY = I * (d ? c - .05 : 1.28), G.regX = .5, G.rotation = 360 / (v ? _ : _ + 1) * F, W.addChild(G)
					}
				}
				if (this.setBounds(-I, -I, e, e), "dot" == l || "circle" == l) {
					var H = this.indicator = new oo.Container({
							style: !1
						}),
						N = this.indicatorShape = new oo.Circle(.19 * I, o, null, null, null, null, null, !1);
					H.addChild(N), oo.sca(H, a), H.regY = I - H.getBounds().width * a / 2 - .07 * I
				} else if ("line" == l || "rectangle" == l) {
					H = this.indicator = new oo.Container({
						style: !1
					}), N = this.indicatorShape = new oo.Rectangle(.1 * I, .3 * I, o, null, null, null, null, null, null, !1);
					H.addChild(N), oo.sca(H, a), H.regY = I - H.getBounds().width * a / 2 - .07 * I, H.regX = .05 * I
				} else {
					H = this.indicator = new oo.Container({
						style: !1
					}), N = this.indicatorShape = new oo.Triangle(.4 * I, .4 * I, .4 * I, o, null, null, null, null, null, null, !1);
					H.addChild(N), oo.sca(H, a), H.regY = I - H.getBounds().height * a * (d ? .85 : .75), d && (N.rotation = 180)
				}
				H.regY /= a, this.addChild(H);
				var V, q, K = 0;
				if (v) var U = 0,
					Z = 0,
					Q = 0,
					J = !1,
					$ = !0;
				else n;
				this.on("mousedown", function(e) {
					if (P = e.target.stage, !B.zimAccessibility || !B.zimAccessibility.aria) {
						D = H.rotation;
						var t = B.parent.globalToLocal(e.stageX / P.scaleX, e.stageY / P.scaleY);
						t.x;
						var o = t.x - B.x,
							n = B.y - t.y;
						Y = 180 * Math.atan2(o, n) / Math.PI;
						var r = (new Date).getTime();
						X = B.on("pressmove", function(e) {
							if (J) {
								var t = B.parent.globalToLocal(e.stageX / P.scaleX, e.stageY / P.scaleY),
									o = t.x - B.x,
									n = B.y - t.y;
								Y = 180 * Math.atan2(o, n) / Math.PI, D = H.rotation
							}
							o = (t = B.parent.globalToLocal(e.stageX / P.scaleX, e.stageY / P.scaleY)).x - B.x, n = B.y - t.y;
							var r = 180 * Math.atan2(o, n) / Math.PI,
								i = D + r - Y;
							i = (i + 36e5) % 360, g && (180 < i - K ? i = 0 : i - K < -180 && (i = 359)), le(i), K = i, t.x
						}), R = this.on("pressup", function(e) {
							(new Date).getTime() - r < 200 && (t = B.parent.globalToLocal(e.stageX / P.scaleX, e.stageY / P.scaleY), o = t.x - B.x, n = B.y - t.y, le(180 * Math.atan2(o, n) / Math.PI));
							D = H.rotation, B.off("pressmove", X), B.off("pressup", R)
						})
					}
				}), w && (V = n, q = new oo.Damp(V, w), B.ticker = oo.Ticker.add(function() {
					V = q.convert(S)
				})), Object.defineProperty(this, "currentValue", {
					get: function() {
						return w ? V : S
					},
					set: function(e) {
						zot(e) || (v ? (J = !1, zot(b) || zot(y) ? zot(b) ? zot(y) || y < e && (e = y, J = !0) : e < b && (e = b, J = !0) : b < y ? (e < b && (e = b, J = !0), y < e && (e = y, J = !0)) : (b < e && (e = b, J = !0), e < y && (e = y, J = !0)), $ && (!0, Q = 360 * Math.floor(e / (r - n)))) : n < r ? (e < n && (e = g ? n : r), r < e && (e = g ? r : n)) : (n < e && (e = g ? n : r), e < r && (e = g ? r : n)), e = re(S = e), w && w.immediate(S), H.rotation = 360 * (e - n) / (r - n + (v ? 0 : ie(r - n) * i)), H.rotation = (H.rotation + 36e5) % 360, M = e - n, K = H.rotation, ae(), oo.OPTIMIZE || !zns && OPTIMIZE || !B.stage || B.stage.update())
					}
				}), Object.defineProperty(this, "currentValueEvent", {
					get: function() {
						return w ? V : S
					},
					set: function(e) {
						e != B.currentValue && (B.currentValue = e, B.dispatchEvent("change"))
					}
				}), Object.defineProperty(this, "min", {
					get: function() {
						return n
					},
					set: function(e) {
						v ? n = e : zon && zog("min is read only")
					}
				}), Object.defineProperty(this, "max", {
					get: function() {
						return r
					},
					set: function(e) {
						v ? r = e : zon && zog("max is read only")
					}
				}), Object.defineProperty(this, "continuous", {
					get: function() {
						return v
					},
					set: function(e) {
						zon && zog("continuous is read only")
					}
				}), Object.defineProperty(this, "continuousMin", {
					get: function() {
						return b
					},
					set: function(e) {
						b = e, B.currentValue < b && (B.currentValue = b)
					}
				}), Object.defineProperty(this, "continuousMax", {
					get: function() {
						return y
					},
					set: function(e) {
						y = e, B.currentValue > y && (B.currentValue = y)
					}
				}), Object.defineProperty(this, "step", {
					get: function() {
						return i
					},
					set: function(e) {
						zon && zog("step is read only")
					}
				}), Object.defineProperty(this, "keyArrowsH", {
					get: function() {
						return m
					},
					set: function(e) {
						m = e
					}
				}), Object.defineProperty(this, "keyArrowsV", {
					get: function() {
						return z
					},
					set: function(e) {
						z = e
					}
				}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
					get: function() {
						return oo.KEYFOCUS == B
					},
					set: function(e) {
						oo.KEYFOCUS = B
					}
				}), p && !oo.KEYFOCUS && se(), this.on("mousedown", function() {
					p && se()
				});
				var ee = !1,
					te = !1,
					oe = !1,
					ne = !1;
				this.keyDownEvent = function(e) {
					B.stage && (B.zimAccessibility && B.focus || !B.zimAccessibility && B.keyFocus) && (37 == e.keyCode && m ? ee = !0 : 40 == e.keyCode && z ? te = !0 : 39 == e.keyCode && m ? oe = !0 : 38 == e.keyCode && z && (ne = !0), null == B.keyInterval && (ee || te || oe || ne) && (ce(), B.keyTimeout = setTimeout(function() {
						null == B.keyInterval && (ee || te || oe || ne) && (B.keyInterval = setInterval(ce, 40))
					}, 140)))
				}, window.addEventListener("keydown", this.keyDownEvent), B.keyUpEvent = function(e) {
					37 == e.keyCode ? ee = !1 : 40 == e.keyCode ? te = !1 : 39 == e.keyCode ? oe = !1 : 38 == e.keyCode && (ne = !1), null == B.keyInterval || ee || te || oe || ne || (clearInterval(B.keyInterval), B.keyInterval = null)
				}, window.addEventListener("keyup", this.keyUpEvent), this._enabled = !0, Object.defineProperty(B, "enabled", {
					get: function() {
						return B._enabled
					},
					set: function(e) {
						Ee(B, e), e ? (B.keyDownEvent = window.addEventListener("keydown", B.keyDownEvent), B.keyUpEvent = window.addEventListener("keyup", B.keyUpEvent)) : (window.removeEventListener("keydown", B.keyDownEvent), window.removeEventListener("keyup", B.keyUpEvent))
					}
				}), !1 !== C && De(this, A), this.clone = function() {
					return B.cloneProps(new oo.Dial(n, r, i, e, t, o, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, this.group, k))
				}, this.dispose = function() {
					return window.removeEventListener("keydown", B.keyDownEvent), window.removeEventListener("keyup", B.keyUpEvent), this.zimContainer_dispose(), !0
				}
			} else zog("ZIM Dial range must not be 0");

			function re(e) {
				return 0 == i ? e : Math.round(e / i) * i
			}

			function ie(e) {
				return 0 < e ? 1 : -1
			}

			function ae() {
				B.zimAccessibility && B.zimAccessibility.changeTitle(B, null, !0)
			}

			function le(e) {
				if (v) {
					!1, U + 180 < e ? Q -= 360 : e < U - 180 && (Q += 360), Z = Q + e, $ = !1;
					var t = B.currentValue;
					return B.currentValue = re(Z * (r - n) / 360), t != B.currentValue && B.dispatchEvent("change"), U = e, $ = !0
				}
				var o;
				e < 0 && (e += 360), e %= 360, 0 != i ? (o = re((e = Math.min(e, 360 - 360 / (_ + 1))) / (360 - 360 / (_ + 1)) * (r - n)), H.rotation = o * (360 - 360 / (_ + 1)) / (r - n)) : o = (H.rotation = e) / 360 * (r - n), o != M && (S = (M = o) + n, B.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !B.stage || B.stage.update()), ae()
			}

			function se() {
				B.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}

			function ce() {
				(ee || te) && (B.currentValueEvent -= 0 < i ? i * ie(r - n) : f * ie(r - n)), (oe || ne) && (B.currentValueEvent += 0 < i ? i * ie(r - n) : f * ie(r - n))
			}
		}, oo.extend(oo.Dial, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Tabs = function(i, a, o, l, s, c, u, d, g, p, f, m, r, z, v, b, n, y, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H, N, e, V) {
			var t;
			if (t = zob(oo.Tabs, arguments, "width, height, tabs, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, color, rollColor, selectedColor, selectedRollColor, vertical, spacing, currentEnabled, currentSelected, corner, base, keyEnabled, gradient, gloss, backing, rollBacking, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, backdropColor, align, valign, labelAlign, labelValign, labelIndent, labelIndentHorizontal, labelIndentVertical, indent, useTap, excludeCustomTap, style, group, inherit", this)) return t;
			z_d("65");
			var q = !1 === N ? {} : oo.getStyle("Tabs", this.group, V);
			zot(m) && (m = null != q.vertical && q.vertical);
			var K = !zot(i);
			if (zot(i) && (i = null != q.width ? q.width : m ? 60 : 240), zot(a) && (a = null != q.height ? q.height : m ? 240 : 60), this.zimContainer_constructor(null, null, null, null, !0), this.type = "Tabs", this.group = e, (zot(o) || o.length <= 0) && (o = null != q.tabs ? q.tabs : [1, 2, 3, 4]), zot(l) && (l = null != q.backgroundColor ? q.backgroundColor : "#777"), zot(s) && (s = null != q.rollBackgroundColor ? q.rollBackgroundColor : "#555"), zot(c) && (c = null != q.selectedBackgroundColor ? q.selectedBackgroundColor : "#333"), zot(u) && (u = null != q.selectedRollBackgroundColor ? q.selectedRollBackgroundColor : s), zot(d) && (d = null != q.color ? q.color : "white"), zot(g) && (g = null != q.rollColor ? q.rollColor : d), zot(p) && (p = null != q.selectedColor ? q.selectedColor : d), zot(f) && (f = null != q.selectedRollColor ? q.selectedRollColor : g), zot(k) && (k = null != q.backing ? q.backing.clone() : null), zot(T) && (T = null != q.rollBacking ? q.rollBacking.clone() : null), zot(L) && (L = null != q.align ? q.align : "center"), zot(D) && (D = null != q.valign ? q.valign : "center"), zot(Y) && (Y = null != q.labelAlign ? q.labelAlign : L), zot(X) && (X = null != q.labelValign ? q.labelValign : D), zot(F) && (F = null != q.indent ? q.indent : 10), zot(R) && (R = null != q.labelIndent ? q.labelIndent : F), zot(_) && (_ = null != q.labelIndentHorizontal ? q.labelIndentHorizontal : R), zot(W) && (W = null != q.labelIndentVertical ? q.labelIndentVertical : R), zot(z) && (z = null != q.currentEnabled && q.currentEnabled), zot(v) && (v = null == q.currentSelected || q.currentSelected), v || (z = !0), zot(r) && (r = null != q.spacing ? q.spacing : 1), zot(b) && (b = null != q.corner ? q.corner : 0), zot(C) && (C = null != q.gradient ? q.gradient : null), zot(x) && (x = null != q.gloss ? q.gloss : null), zot(n) && (n = null != q.base ? q.base : 0 != b || Array.isArray(b) ? m ? "left" : "bottom" : "none"), zot(y) && (y = null == q.keyEnabled || q.keyEnabled), zot(G) && (G = null != q.useTap && q.useTap), zot(H) && (H = null != q.excludeCustomTap && q.excludeCustomTap), zot(j) && (j = null != q.backdropColor ? q.backdropColor : null), "none" == n || 0 == b || Array.isArray(b)) Array.isArray(b) || (b = [b, b, b, b]);
			else switch (n) {
				case "bottom":
					b = [b, b, 0, 0];
					break;
				case "left":
					b = [0, b, b, 0];
					break;
				case "top":
					b = [0, 0, b, b];
					break;
				case "right":
					b = [b, 0, 0, b]
			}
			var U = this;
			this.keyEnabled = y;
			var Z, Q = 0,
				J = [],
				$ = [],
				ee = o.length,
				te = (i - r * (ee - 1)) / ee,
				oe = (a - r * (ee - 1) - 2) / ee;
			if (!zot(j)) {
				var ne = this.backdrop = new oo.Rectangle(i, a, j, null, null, null, null, null, !1);
				this.addChild(ne)
			}
			var re, ie = !1;

			function ae(e) {
				for (var t = 0; t < e.length; t++) {
					var o = e[t];
					o.constructor !== {}.constructor ? re = "string" == typeof o || "number" == typeof o || "Label" == o.type ? (e[t] = {
						type: "TabObject",
						label: String(null != o) || "Label" == o.type ? o : "1"
					}, re && "TabObject" != re && (ie = !0), "TabObject") : (re && "TabObject" == re && (ie = !0), "Other") : (re && "TabObject" != re && (ie = !0), re = "TabObject", o.type = "TabObject")
				}
			}
			ae(o);
			for (var le, se, ce = 0, ue = 0, de = 0; de < o.length; de++) le = o[de], m ? K && (le.width = le.width ? le.width : i) : (zot(le.width) && ue++, ce += zot(le.width) ? te : le.width);
			if (!m)
				if (i - r * (ee - 1) < ce)
					for (de = 0; de < o.length; de++)(le = o[de]).width = (i - r * (ee - 1)) / ce * (zot(le.width) ? te : le.width);
				else if (Math.round(ce) < Math.round(i - r * (ee - 1)) && 0 < ue)
				for (se = (ee * te - (ce - ue * te)) / ue, de = 0; de < o.length; de++)(le = o[de]).width = zot(le.width) ? se : le.width;

			function he(e, t) {
				for (de = 0; de < e.length; de++) "" != (le = e[de]) && "TabObject" == le.type && (zot(le.label) && (le.label = " "), "string" != typeof le.label && "number" != typeof le.label || (le.label = new oo.Label({
					text: le.label,
					size: null != q.size ? q.size : m ? oe / 2 : a / 2,
					font: null != q.font ? q.font : null,
					style: !1,
					valign: X,
					inherit: t
				})))
			}
			he(o);
			var ge = 0;
			for (de = 0; de < o.length; de++) !(le = o[de]).width && m && le.label.width > ge && (ge = le.label.width);
			var pe = 0;

			function fe(e, t) {
				var o = [],
					n = [];
				for (de = 0; de < e.length; de++) {
					if ("TabObject" == (le = e[de]).type) {
						var r = {
							color: zot(le.color) ? d : le.color,
							rollColor: zot(le.rollColor) ? g : le.rollColor,
							selectedColor: zot(le.selectedColor) ? p : le.selectedColor,
							selectedRollColor: zot(le.selectedRollColor) ? f : le.selectedRollColor,
							backgroundColor: zot(le.backgroundColor) ? l : le.backgroundColor,
							rollBackgroundColor: zot(le.rollBackgroundColor) ? s : le.rollBackgroundColor,
							selectedBackgroundColor: zot(le.selectedBackgroundColor) ? c : le.selectedBackgroundColor,
							selectedRollBackgroundColor: zot(le.selectedRollBackgroundColor) ? u : le.selectedRollBackgroundColor,
							wait: zot(le.wait) ? A : le.wait
						};
						if (t)
							for (aStyle in t) zot(t[aStyle]) || (r[aStyle] = t[aStyle]);
						(Z = new oo.Button({
							width: m ? zot(le.width) ? K ? i : ge + oe / 2 + b[0] / 2 : le.width : zot(le.width) ? te : le.width,
							height: m ? oe : a,
							label: le.label,
							borderColor: null != q.borderColor ? q.borderColor : null,
							borderWidth: null != q.borderWidth ? q.borderWidth : null,
							backgroundColor: r.backgroundColor,
							rollBackgroundColor: r.rollBackgroundColor,
							corner: b,
							shadowColor: -1,
							gradient: C,
							gloss: x,
							backing: k ? k.clone() : null,
							rollBacking: T ? T.clone() : null,
							wait: r.wait,
							waitTime: zot(le.waitTime) ? P : le.waitTime,
							waitBackgroundColor: zot(le.waitBackgroundColor) ? B : le.waitBackgroundColor,
							rollWaitBackgroundColor: zot(le.rollWaitBackgroundColor) ? I : le.rollWaitBackgroundColor,
							waitColor: zot(le.waitColor) ? S : le.waitColor,
							rollWaitColor: zot(le.rollWaitBackgroundColor) ? M : le.rollWaitColor,
							waitModal: zot(le.waitModal) ? E : le.waitModal,
							waitEnabled: zot(le.waitEnabled) ? O : le.waitEnabled,
							align: Y,
							valign: X,
							indentHorizontal: _,
							indentVertical: W,
							inherit: q
						})).tabInfo = r, Z.color = Z.tabInfo.color, Z.rollColor = Z.tabInfo.rollColor, Z.type = "TabsButton", Z.listIndentReady = !0
					} else le.listIndentReady ? Z = le : (Z = new oo.Container).type = le.type, (Z.content = le).checkBox && (Z.checkBox = le.checkBox), Z.tabInfo = {}, H && (Z.excludeTap = !0), Z.tabInfo.color = zot(le.color) ? d : le.color, Z.tabInfo.backgroundColor = zot(le.backgroundColor) ? l : le.backgroundColor, le.listIndentReady || (new oo.Rectangle(Math.max(le.width, m ? K ? i : ge + oe / 2 + b[0] / 2 : te), Math.max(le.height, m ? oe : a), oo.faint).addTo(Z), le.center(Z), "center" != L && "middle" != L && le.pos(0, null, "right" == L), "center" != D && "middle" != D && le.pos(null, 0, null, "bottom" == D));
					Z.width > pe && (pe = Z.width), G ? Z.tap(function(e) {
						ve(e.currentTarget.znum), U.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}) : Z.zimTabEvent = Z.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
						ve(e.currentTarget.znum), U.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}), Z.on("mousedown", function(e) {
						U.buttonDown = e.currentTarget
					}), Z.on("pressup", function() {
						U.buttonDown = null
					}), n.push(le.label), o.push(Z)
				}
				return [o, n]
			}
			var me = fe(o);

			function ze() {
				var e, t = 0,
					o = 0;
				for (de = 0; de < $.length; de++)(e = $[de]).znum = de, e.selectedIndex = de, e.selectedIndex == Q && v && (e.backgroundColor = c, e.rollBackgroundColor = u, e.color = p), J[de] && (J[de].znum = de), U.addChild(e), m && !K || (e.x = (i - e.width) / 2, e.y = (a - e.height) / 2), m ? (e.y = o, o = e.y + e.height + r, "left" == L ? e.x = ("TabsButton" == e.type || "ListItem" == e.type ? 0 : F) + (e.regX - (e.getBounds() ? e.getBounds().x : 0)) * e.scaleX : "right" == L && (e.x = (K ? i : pe) - e.width - ("TabsButton" == e.type || "ListItem" == e.type ? 0 : F))) : (e.x = t, t = e.x + e.width + r, "top" == D ? e.y = ("TabsButton" != e.type || ie ? F : 0) + (e.regY - (e.getBounds() ? e.getBounds().y : 0)) * e.scaleY : "bottom" == D && (e.y = a - e.height - ("TabsButton" != e.type || ie ? F : 0))), 0 != de || z || (e.enabled = !1), e.enabled = !0;
				zot(j) || U.removeChild(ne), U._bounds = null;
				var n = U.getBounds();
				if (n || 0 == createjs.EaselJS.version[0] ? n && (w = m && 0 != n.width && K ? i : n.width, h = m && 0 != n.height ? n.height : a, U.setBounds(w, h)) : (w = h = 0, U.setBounds()), zot(j) || (ne.widthOnly = w, ne.heightOnly = h, U.addChildAt(ne, 0)), m && !K)
					for (de = 0; de <= $.length; de++) "center" != L && "middle" != L || (e.x = (w - e.width) / 2)
			}

			function ve(e) {
				var t = $[Q];
				t && v && (t.tabInfo && zot(t.tabInfo.wait) && (t.tabInfo.backgroundColor && (t.backgroundColor = t.tabInfo.backgroundColor), t.tabInfo.rollBackgroundColor && (t.rollBackgroundColor = t.tabInfo.rollBackgroundColor), t.tabInfo.color && t.label && (t.color = t.tabInfo.color), t.tabInfo.rollColor && t.label && (t.rollColor = t.tabInfo.rollColor)), z || (t.enabled = !0)), (t = $[Q = e]) && (t.tabInfo && zot(t.tabInfo.wait) && v && (t.tabInfo.selectedBackgroundColor && (t.backgroundColor = t.tabInfo.selectedBackgroundColor), t.tabInfo.selectedRollBackgroundColor && (t.rollBackgroundColor = t.tabInfo.selectedRollBackgroundColor), t.tabInfo.selectedColor && t.label && (t.color = t.tabInfo.selectedColor), t.tabInfo.selectedRollColor && t.label && (t.rollColor = t.tabInfo.selectedRollColor)), z || (t.enabled = !1))
			}

			function be() {
				U.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}
			$ = me[0], J = me[1], ze(), this.addAt = function(e, t, o) {
				zot(t) && (t = $.length), t = oo.constrain(t, 0, $.length), Array.isArray(e) || (e = [e]), ae(e), he(e, o);
				var n = fe(e, o),
					r = n[0],
					i = n[1];
				t <= Q && (Q += r.length);
				var a = [t, 0].concat(r);
				return Array.prototype.splice.apply($, a), a = [t, 0].concat(i), Array.prototype.splice.apply(J, a), ze(), U
			}, this.removeAt = function(e, t) {
				if (0 == $.length) return U;
				for (zot(e) && (e = 1), zot(t) && (t = $.length - e), (t = oo.constrain(t, 0, $.length - e)) <= Q && Q <= t + e && (Q = -1), t + e < Q && (Q -= e), de = t; de < t + e; de++) $[de].tabInfo && ($[de].tabInfo.backgroundColor && ($[de].backgroundColor = $[de].tabInfo.backgroundColor), $[de].tabInfo.color && $[de].label && ($[de].color = $[de].tabInfo.color)), G ? $[de].noTap() : $[de].off((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", $[de].zimTabEvent), $[de].removeFrom();
				return $.splice(t, e), J.splice(t, e), ze(), U
			}, window.addEventListener("keydown", function(e) {
				if (U.keyEnabled && U.keyFocus && !U.zimAccessibility && 9 == e.keyCode) {
					var t = Q;
					e.shiftKey ? ve(--t < 0 ? o.length - 1 : t) : ve(++t > o.length - 1 ? 0 : t), U.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update(), e.preventDefault()
				}
			}), Object.defineProperty(this, "selected", {
				get: function() {
					return $[Q]
				},
				set: function(e) {
					zon && zog("selected is read only - try selectedIndex")
				}
			}), Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return Q
				},
				set: function(e) {
					ve(e), oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
				}
			}), this.last = function() {
				return this.selectedIndex = this.buttons.length - 1, this
			}, this.first = function() {
				return this.selectedIndex = 0, this
			}, Object.defineProperty(this, "tabs", {
				get: function() {
					return Q
				},
				set: function(e) {
					ve(Math.min(Math.max(e, 0), o.length - 1)), oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
				}
			}), Object.defineProperty(this, "color", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.color : d
				},
				set: function(e) {
					if (d = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.color = e), t == Q && v || (U.buttons[t].color = d);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "rollColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.rollColor : g
				},
				set: function(e) {
					if (g = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.rollColor = e), U.buttons[t].rollColor = g, t != Q && U.buttons[t].rolled && (U.buttons[t].color = g);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "selectedColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.selectedColor : p
				},
				set: function(e) {
					if (p = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.selectedColor = e), t == Q && v && (U.buttons[t].color = p);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "selectedRollColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.selectedRollColor : f
				},
				set: function(e) {
					if (f = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.selectedRollColor = e), t == Q && v && U.buttons[t].rolled && (U.buttons[t].color = f);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "backgroundColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.backgroundColor : l
				},
				set: function(e) {
					if (l = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.backgroundColor = e), t == Q && v || (U.buttons[t].backgroundColor = l);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "rollBackgroundColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.rollBackgroundColor : s
				},
				set: function(e) {
					if (s = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.rollBackgroundColor = e), U.buttons[t].rollBackgroundColor = s, t != Q && U.buttons[t].rolled && (U.buttons[t].backgroundColor = s);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "selectedBackgroundColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.selectedBackgroundColor : c
				},
				set: function(e) {
					if (c = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.selectedBackgroundColor = e), t == Q && v && (U.buttons[t].backgroundColor = c);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "selectedRollBackgroundColor", {
				get: function() {
					return U.buttons[0].tabItems ? U.buttons[0].tabItems.selectedRollBackgroundColor : u
				},
				set: function(e) {
					if (u = e, U.buttons[0].tabInfo) {
						for (var t = 0; t < U.buttons.length; t++) U.buttons[t].tabInfo && (U.buttons[t].tabInfo.selectedRollBackgroundColor = e), t == Q && v && U.buttons[t].rolled && (U.buttons[t].backgroundColor = u);
						oo.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
					}
				}
			}), Object.defineProperty(this, "label", {
				get: function() {
					return J[Q]
				},
				set: function(e) {
					zon && zog("selected is read only - try selectedIndex")
				}
			}), Object.defineProperty(this, "text", {
				get: function() {
					return null != J[Q] ? J[Q].text : void 0
				},
				set: function(e) {
					zon && zog("selected is read only - try selectedIndex")
				}
			}), Object.defineProperty(this, "buttons", {
				get: function() {
					return $
				},
				set: function(e) {
					zon && zog("buttons is read only")
				}
			}), Object.defineProperty(this, "labels", {
				get: function() {
					return J
				},
				set: function(e) {
					zon && zog("labels is read only")
				}
			}), this._enabled = !0, Object.defineProperty(U, "enabled", {
				get: function() {
					return U._enabled
				},
				set: function(e) {
					Ee(U, e)
				}
			}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
				get: function() {
					return oo.KEYFOCUS == U
				},
				set: function(e) {
					oo.KEYFOCUS = U
				}
			}), y && oo.KEYFOCUS && be(), this.on("mousedown", function() {
				y && be()
			});
			var ye = U.getBounds();
			zot(ye) || 0 == ye.width ? U.setBounds(0, 0, i, a) : U.width = i, !1 !== N && De(this, q), this.clone = function() {
				for (var e = oo.copy(o, !0), t = 0; t < e.length; t++) e[t].label = e[t].label.clone();
				return U.cloneProps(new oo.Tabs(i, a, e, l, s, c, u, d, g, p, f, m, r, z, v, b, n, y, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H, N, this.group, V))
			}
		}, oo.extend(oo.Tabs, oo.Container, "clone", "zimContainer", !1), oo.Pad = function(e, r, t, o, n, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S) {
			var M;
			if (M = zob(oo.Pad, arguments, "width, cols, rows, keys, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, color, rollColor, selectedColor, selectedRollColor, spacing, currentEnabled, corner, labelColor, gradient, gloss, backing, rollBacking, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, style, group, inherit", this)) return M;
			z_d("66"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Pad", this.group = I;
			var E = !1 === B ? {} : oo.getStyle(this.type, this.group, S);
			if (zot(e) && (e = null != E.width ? E.width : 150), zot(r) && (r = null != E.cols ? E.cols : 3), zot(t) && (t = null != E.rows ? E.rows : r), zot(o))
				if (null != E.keys) o = E.keys;
				else {
					o = [];
					for (var O = 1; O <= t * r; O++) o.push(O)
				}
			zot(g) && (g = null == E.currentEnabled || E.currentEnabled), zot(h) && (h = null != E.spacing ? E.spacing : 1);
			var j, L = this;
			this.cols = r, this.rows = t;
			var D, Y = e / r - h,
				X = [],
				R = 0;
			this.labels = [], this.buttons = [];
			for (O = 0; O < t; O++) {
				for (var _ = [], W = 0; W < r; W++) _.push(null != o[R] ? o[R] : ""), R++;
				var F = null != E.corner ? E.corner : p;
				F && !Array.isArray(F) && (F = [F, F, F, F]), D = X[O] = new oo.Tabs({
					width: e,
					height: Y,
					tabs: _,
					backgroundColor: null != E.backgroundColor ? E.backgroundColor : n,
					rollBackgroundColor: null != E.rollBackgroundColor ? E.rollBackgroundColor : i,
					selectedBackgroundColor: null != E.selectedBackgroundColor ? E.selectedBackgroundColor : a,
					color: null != E.color ? E.color : s,
					rollColor: null != E.rollColor ? E.rollColor : c,
					selectedColor: null != E.selectedColor ? E.selectedColor : u,
					spacing: null != E.spacing ? E.spacing : h,
					currentEnabled: null != E.currentEnabled ? E.currentEnabled : g,
					corner: F,
					backing: null != E.backing ? E.backing.clone() : v,
					rollBacking: null != E.rollBacking ? E.rollBacking.clone() : b,
					base: null,
					keyEnabled: !1,
					gradient: null != E.gradient ? E.gradient : m,
					gloss: null != E.gloss ? E.gloss : z,
					wait: null != E.wait ? E.wait : y,
					waitTime: null != E.waitTime ? E.waitTime : w,
					waitBackgroundColor: null != E.waitBackgroundColor ? E.waitBackgroundColor : C,
					rollWaitBackgroundColor: null != E.rollWaitBackgroundColor ? E.rollWaitBackgroundColor : x,
					waitColor: null != E.waitColor ? E.waitColor : k,
					rollWaitColor: null != E.rollWaitColor ? E.rollWaitColor : T,
					waitModal: null != E.waitModal ? E.waitModal : A,
					waitEnabled: null != E.waitEnabled ? E.waitEnabled : P,
					group: I,
					style: !1
				}), this.labels = this.labels.concat(D.labels), this.buttons = this.buttons.concat(D.buttons), this.addChild(D), D.selectedIndex = -1, D.y = (Y + h) * O, D.znum = O, D.on("change", G)
			}

			function G(e) {
				var t = e.target;
				L.selected = t.selected, L.text = t.text, L.label = t.label;
				for (var o = t.selectedIndex, n = 0; n < X.length; n++) X[n].selectedIndex = -1;
				t.selectedIndex = o, j = t.znum * r + o, L.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !L.stage || L.stage.update()
			}
			this.tabs = X, Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return j
				},
				set: function(e) {
					j = e;
					for (var t = 0; t < X.length; t++) X[t].selectedIndex = -1;
					var o = Math.floor(j / r);
					0 <= o && o < L.tabs.length && (L.tabs[o].selectedIndex = j % r)
				}
			}), this._enabled = !0, Object.defineProperty(L, "enabled", {
				get: function() {
					return L._enabled
				},
				set: function(e) {
					Ee(L, e)
				}
			}), !1 !== B && De(this, E), this.clone = function() {
				return L.cloneProps(new oo.Pad(e, r, t, o, n, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, this.group, S))
			}
		}, oo.extend(oo.Pad, oo.Container, "clone", "zimContainer", !1), oo.DPad = function(e, o, t, n, r, i, a, l, s, c, u, d, h, g, p, f, m) {
			var z;
			if (z = zob(oo.DPad, arguments, "axis, width, backgroundColor, borderWidth, borderColor, indicatorColor, indicatorPressColor, indicatorScale, indicatorRadius, innerCircle, innerScale, activeRadius, clamp, logo, style, group, inherit", this)) return z;
			z_d("66.2"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "DPad", this.group = f;
			var v = !1 === p ? {} : oo.getStyle(this.type, this.group, m);
			zot(e) && (e = null != v.axis ? v.axis : "all"), zot(o) && (o = null != v.width ? v.width : 100), zot(t) && (t = null != v.backgroundColor ? v.backgroundColor : "#666666"), zot(r) && (r = null != v.borderColor ? v.borderColor : null), zot(n) && (n = null != v.borderWidth ? v.borderWidth : null), r < 0 || n < 0 ? r = n = null : null != r && null == n && (n = 1), zot(i) && (i = null != v.indicatorColor ? v.indicatorColor : "#dddddd"), zot(a) && (a = null != v.indicatorPressColor ? v.indicatorPressColor : "#eeeeee"), zot(l) && (l = null != v.indicatorScale ? v.indicatorScale : 1), zot(s) && (s = null != v.indicatorRadius ? v.indicatorRadius : null), zot(c) && (c = null == v.innerCircle || v.innerCircle), zot(u) && (u = null != v.innerScale ? v.innerScale : .5), zot(d) && (d = null != v.activeRadius ? v.activeRadius : o), zot(h) && (h = null == v.clamp || v.clamp), zot(g) && (g = null != v.logo && v.logo);
			var b = this;
			this.axis = e;
			this.outer = new oo.Circle(o / 2, t, r, n).addTo(this);
			var y = this.inner = new oo.Circle(o * u / 2, "rgba(0,0,0,.2)").center(this);
			g && (this.logo = new oo.Label({
				text: "D",
				fontOptions: "bold"
			}).center(y).mov(1, 2).alp(.3));
			var w = (new oo.Container).addTo(this),
				C = .2 * (o - n) * l,
				x = 8;
			"vertical" == e ? x = 2 : "horizontal" == e ? (x = 2, w.rotation = 90) : "both" == e && (x = 4), oo.loop(x, function(e, t) {
				new Triangle(C, C, C, i).addTo(w).reg(null, zot(s) ? .475 * (o - n) : s).rot(360 * e / t)
			});
			var k, T, A, P = 0,
				B = 0;
			this.on("mousedown", function(e) {
				k = e.target.stage, A = e, w.loop(function(e) {
					e.color = a
				}), b.ticker = oo.Ticker.add(function() {
					! function() {
						var e = A;
						P = e.stageX / k.scaleX, B = e.stageY / k.scaleY, T = b.globalToLocal(P, B), (e = new createjs.Event("change")).dirX = 2 * ((T.x + d) / (2 * d) - .5), e.dirY = 2 * ((T.y + d) / (2 * d) - .5), h && (e.dirX = oo.constrain(e.dirX, -1, 1), e.dirY = oo.constrain(e.dirY, -1, 1));
						b.dirX = e.dirX, b.dirY = e.dirY, b.dispatchEvent(e)
					}()
				})
			}), this.on("pressmove", function(e) {
				A = e
			}), this.on("pressup", function(e) {
				oo.Ticker.remove(b.ticker), b.dirX = b.dirY = 0, w.loop(function(e) {
					e.color = i
				}), b.stage && k.update()
			}), this._enabled = !0, Object.defineProperty(b, "enabled", {
				get: function() {
					return b._enabled
				},
				set: function(e) {
					Ee(b, e)
				}
			}), De(this, v), this.clone = function() {
				return b.cloneProps(new oo.DPad(e, o, t, n, r, i, a, l, s, c, u, d, h, g, p, this.group, m))
			}, this.dispose = function() {
				return this.ticker && oo.Ticker.remove(this.ticker), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.DPad, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Radial = function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, L, D, Y) {
			var X;
			if (X = zob(oo.Radial, arguments, "labels, size, font, height, coreRadius, coreColor, startAngle, totalAngle, angles, flip, shiftRadial, icons, rollIcons, rotateIcons, iconsShiftRadial, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, backdropColor, color, selectedColor, rollColor, selectedRollColor, borderColor, borderWidth, gradient, gap, gapAsAngle, spacing, spacingInner, spacingOuter, currentEnabled, currentSelected, style, group, inherit", this)) return X;
			z_d("66.4"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Radial", this.group = D;
			var R = !1 === L ? {} : oo.getStyle(this.type, this.group, Y);
			zot(e) && (e = null != R.labels ? R.labels : ["A", "B", "C", "D", "E"]), zot(t) && (t = null != R.size ? R.size : 30), zot(o) && (o = null != R.font ? R.font : "verdana"), zot(a) && (a = null != R.startAngle ? R.startAngle : null), zot(l) && (l = null != R.totalAngle ? R.totalAngle : 360), zot(s) && (s = null != R.angles ? R.angles : null), zot(c) && (c = null == R.flip || R.flip), zot(u) && (u = null != R.shiftRadial ? R.shiftRadial : 0), zot(d) && (d = null != R.icons ? R.icons : null), zot(h) && (h = null != R.rollIcons ? R.rollIcons : null), zot(g) && (g = null != R.rotateIcons && R.rotateIcons), zot(p) && (p = null != R.iconsShiftRadial ? R.iconsShiftRadial : 0), zot(n) && (n = null != R.height ? R.height : 60), zot(r) && (r = null != R.coreRadius ? R.coreRadius : 100), zot(i) && (i = null != R.coreColor ? R.coreColor : "#333"), zot(b) && (b = null != R.backdropColor ? R.backdropColor : oo.clear), zot(f) && (f = null != R.backgroundColor ? R.backgroundColor : "#666"), zot(m) && (m = null != R.rollBackgroundColor ? R.rollBackgroundColor : "#777"), zot(z) && (z = null != R.selectedBackgroundColor ? R.selectedBackgroundColor : "#444"), zot(v) && (v = null != R.selectedRollBackgroundColor ? R.selectedRollBackgroundColor : z), zot(y) && (y = null != R.color ? R.color : "white"), zot(C) && (C = null != R.rollColor ? R.rollColor : y), zot(w) && (w = null != R.selectedColor ? R.selectedColor : y), zot(x) && (x = null != R.selectedRollColor ? R.selectedRollColor : C), zot(k) && (k = null != R.borderColor ? R.borderColor : "#333"), zot(T) && (T = null != R.borderWidth ? R.borderWidth : 2), zot(B) && (B = null != R.gapAsAngle && R.gapAsAngle), zot(P) && (P = null != R.gap ? R.gap : B ? 3 : 6), zot(A) && (A = null != R.gradient ? R.gradient : null), !0 === A && (A = .1), zot(I) && (I = null != R.spacing ? R.spacing : 6), zot(S) && (S = null != R.spacingInner ? R.spacingInner : I), zot(M) && (M = null != R.spacingOuter ? R.spacingOuter : I), zot(E) && (E = null != R.currentEnabled && R.currentEnabled), zot(O) && (O = null == R.currentSelected || R.currentSelected);
			var _ = this,
				W = this.innerRadius = r + S,
				F = this.outerRadius = W + n;
			this.setBounds(-F, -F, 2 * F, 2 * F);
			var G = this.backdrop = new Circle(F + M, b).center(this);
			if (0 < r && (this.core = new Circle(r, i).center(this)), s && s.length < e.length - 1) return zon && zog("zim.Radial() - not enough angles provided"), this;
			if (e && 0 < e.length || d && 0 < d.length) {
				var H;
				if (e && 0 < e.length && (H = e.length), d && 0 < d.length && (H = 0 < H ? Math.min(d.length, H) : d.length), h && h.length < H)
					for (j = 0; j < H - h.length; j++) h.push(new Circle(1, clear));
				var N = G.width,
					V = this.buttons = new Container(-N / 2, -N / 2, N, N).centerReg(this),
					q = P;
				B || (P = P / F * 180 / Math.PI, q = q / W * 180 / Math.PI), segmentAngle = (l - P * H + (360 == l ? 0 : P)) / H;
				for (var K = a || 0, U = 0; U < H; U++) {
					s && (segmentAngle = s[U]);
					var Z = new oo.Shape(-N / 2, -N / 2, N, N).centerReg(V);
					Z.num = U, Z.zimSelected = !1, Z.angle = segmentAngle;
					var Q = Z.graphics;
					Z.backgroundColor = oo.Pick.choose(f), Z.rollBackgroundColor = oo.Pick.choose(m), Z.selectedBackgroundColor = oo.Pick.choose(z), Z.selectedRollBackgroundColor = oo.Pick.choose(v), Z.color = oo.Pick.choose(y), Z.rollColor = oo.Pick.choose(C), Z.selectedColor = oo.Pick.choose(w), Z.selectedRollColor = oo.Pick.choose(x), Z.colorCommand = Q.f(Z.backgroundColor).command, (zot(T) || 0 < T) && (zot(k) && zot(T) || (zot(k) && (k = "black"), Z.borderColorCommand = Q.s(k).command, Z.borderWidthCommand = Q.ss(T).command));
					var J = (K - 90 - segmentAngle / 2) * Math.PI / 180,
						$ = (K - 90 + segmentAngle / 2) * Math.PI / 180,
						ee = (K - 90 + (segmentAngle + P - q) / 2) * Math.PI / 180,
						te = (K - 90 - (segmentAngle + P - q) / 2) * Math.PI / 180;
					if (Q.arc(0, 0, F, J, $, !1), Q.arc(0, 0, W, ee, te, !0).cp(), A && (Q.s().ss().rf(["rgba(0,0,0," + A + ")", "rgba(255,255,255," + A + ")"], [0, 1], 0, 0, W, 0, 0, F), Q.arc(0, 0, F, J, $, !1), Q.arc(0, 0, W, ee, te, !0).cp()), Z.cursor = "pointer", Z.zimOverEvent = Z.on("mouseover", function(e) {
							var t = e.target;
							t.colorCommand.style = t == _.selected ? t.selectedRollBackgroundColor : t.rollBackgroundColor, t.label && (t.label.color = t == _.selected ? t.selectedRollColor : t.rollColor), h && (t.holder.removeAllChildren(), h[t.num].loc(1, 0, t.holder)), _.stage && _.stage.update()
						}), Z.zimOutEvent = Z.on("mouseout", function(e) {
							var t = e.target;
							t.colorCommand.style = t == _.selected ? t.selectedBackgroundColor : t.backgroundColor, t.label && (t.label.color = t == _.selected ? t.selectedColor : t.color), h && (t.holder.removeAllChildren(), d && d[t.num].loc(1, 0, t.holder)), _.stage && _.stage.update()
						}), Z.zimDownEvent = Z.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
							var t = e.target,
								o = t !== _.selected;
							_.lastSelected = _.selected, le = t.num, O && (o ? (_.selected && (_.selected.colorCommand.style = _.selected.backgroundColor, _.selected.label && (_.selected.label.color = _.selected.color)), _.selected = t, _.label = t.label, _.label && (_.text = _.label.text), _.icon = t.icon, t.colorCommand.style = t.selectedRollBackgroundColor, t.label && (t.label.color = t.selectedRollColor)) : E || (le = -1, _.selected = null, _.label = null, _.text = null, _.icon = null, t.colorCommand.style = t.rollBackgroundColor, t.label && (t.label.color = t.rollColor))), _.dispatchEvent("change"), oo.OPTIMIZE || !zns && OPTIMIZE || !_.stage || _.stage.update()
						}), d && 0 < d.length) {
						var oe = W + n / 2 + p,
							ne = Z.holder = new Container(3, oe).addTo(this).reg(1, oe).rot(K);
						ne.mouseChildren = !1, ne.mouseEnabled = !1, Z.icon = d[U], d[U].loc(1, 0, ne), g || (d[U].rotation = -K)
					}
					if (e && 0 < e.length) {
						var re;
						if ("LabelOnArc" != e[U].type) {
							var ie = "Label" == e[U].type ? e[U] : new Label(e[U], t, o, y);
							re = new LabelOnArc({
								label: ie,
								color: y,
								size: t,
								spacing: -5,
								flip: c && 90 < K && K < 270,
								radius: W + (n - ie.height) / 2 + 2 + u
							})
						} else re = e[U];
						e[U] = re, (Z.label = re).center(this).rot(K), re.mouseChildren = !1, re.mouseEnabled = !1
					}
					if (U != e.length - 1) {
						var ae = s ? s[U + 1] : segmentAngle;
						K += (segmentAngle + ae) / 2 + P
					}
				}
				zot(a) || (_.rotation += _.buttons.getChildAt(0).angle / 2)
			}
			var le = null;
			Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return le
				},
				set: function(e) {
					var t;
					_.buttons && (t = _.buttons.getChildAt(e)), t !== _.selected && (_.selected && (_.selected.colorCommand.style = _.selected.backgroundColor, _.selected.label && (_.selected.label.color = _.selected.color)), (_.selected = t) && (t.colorCommand.style = t.selectedRollBackgroundColor, t.label && (t.label.color = t.selectedColor, _.text = t.label.text))), oo.OPTIMIZE || !zns && OPTIMIZE || !_.stage || _.stage.update()
				}
			}), De(this, R), this.clone = function() {
				return _.cloneProps(new oo.Radial(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, L, this.group, Y))
			}
		}, oo.extend(oo.Radial, oo.Container, "clone", "zimContainer", !1), oo.RadialMenu = function(e, l, s, c, r, t, o, n, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, i, S, M, E, a, O, j, L, D, Y) {
			var X, R = "menu, size, font, height, coreRadius, coreColor, title, titleIcon, startAngle, totalAngle, flip, shiftRadial, rotateIcons, iconsShiftRadial, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, backdropColor, color, selectedColor, rollColor, selectedRollColor, borderColor, borderWidth, gradient, gap, gapAsAngle, spacing, spacingInner, spacingOuter, currentEnabled, currentSelected, open, under, style, group, inherit",
				_ = R.split(", "),
				W = !1;
			if (e && e.constructor === {}.constructor)
				for (var F in e)
					if (0 <= _.indexOf(F)) {
						W = !0;
						break
					}
			if (e && W && (X = zob(oo.RadialMenu, arguments, R, this))) return X;
			z_d("66.6"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "RadialMenu", this.group = D;
			var G = !1 === L ? {} : oo.getStyle(this.type, this.group, Y);
			zot(e) && (e = null != G.menu ? G.menu : {
				A: {
					A1: ["AA1", "AA2", "AA3", "AA4"],
					A2: [],
					A3: []
				},
				B: ["B1", "B2", "B3", "B4", "B5", "B6"],
				C: []
			}), zot(l) && (l = null != G.size ? G.size : 30), zot(s) && (s = null != G.font ? G.font : "verdana"), zot(u) && (u = null != G.startAngle ? G.startAngle : null), zot(d) && (d = null != G.totalAngle ? G.totalAngle : 360), zot(h) && (h = null == G.flip || G.flip), zot(p) && (p = null != G.rotateIcons && G.rotateIcons), zot(g) && (g = null != G.shiftRadial ? G.shiftRadial : 0), zot(f) && (f = null != G.iconsShiftRadial ? G.iconsShiftRadial : 0), zot(c) && (c = null != G.height ? G.height : 60), zot(r) && (r = null != G.coreRadius ? G.coreRadius : 100), zot(t) && (t = null != G.coreColor ? G.coreColor : "#333"), zot(o) && (o = null != G.title ? G.title : "MENU"), zot(n) && (n = null != G.titleIcon ? G.titleIcon : null), zot(y) && (y = null != G.backdropColor ? G.backdropColor : oo.clear), zot(m) && (m = null != G.backgroundColor ? G.backgroundColor : "#666"), zot(z) && (z = null != G.rollBackgroundColor ? G.rollBackgroundColor : "#777"), zot(v) && (v = null != G.selectedBackgroundColor ? G.selectedBackgroundColor : "#444"), zot(b) && (b = null != G.selectedRollBackgroundColor ? G.selectedRollBackgroundColor : v), zot(w) && (w = null != G.color ? G.color : "white"), zot(x) && (x = null != G.rollColor ? G.rollColor : w), zot(C) && (C = null != G.selectedColor ? G.selectedColor : w), zot(k) && (k = null != G.selectedRollColor ? G.selectedRollColor : x), zot(T) && (T = null != G.borderColor ? G.borderColor : "#333"), zot(A) && (A = null != G.borderWidth ? G.borderWidth : 2), zot(I) && (I = null != G.gapAsAngle && G.gapAsAngle), zot(B) && (B = null != G.gap ? G.gap : I ? 3 : 6), zot(i) && (i = null != G.spacing ? G.spacing : 6), zot(P) && (P = null != G.gradient ? G.gradient : null), !0 === P && (P = .1), zot(S) && (S = null != G.spacingInner ? G.spacingInner : i), zot(M) && (M = null != G.spacingOuter ? G.spacingOuter : i), zot(E) && (E = null != G.currentEnabled && G.currentEnabled), zot(a) && (a = null == G.currentSelected || G.currentSelected), zot(O) && (O = null != G.open && G.open), zot(j) && (j = null == G.under || G.under);
			var H = this,
				N = (zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click",
				V = null,
				q = this.core = new Circle(r, t).addTo(this);
			n && (this.titleIcon = n.center(q)), o && (this.title = new Label(o, l, s, w).center(q)), q.cursor = "pointer", q.on(N, function(e) {
				H.leafNode = !1, 0 == Q.length ? J() : (loop(Q, function(e) {
					e.selectedIndex = -1, e.removeFrom(), Q = []
				}), H.outerLevel = 0, H.selected = H.outerMenu = H.selectedMenu = H.text = null), !E && H.selected == V || H.dispatchEvent("change"), V = H.selected, H.stage && H.stage.update()
			}), this.closeRings = function(e) {
				zot(e) && (e = H.outerLevel);
				var o = H.outerLevel - e;
				loop(Q, function(e, t) {
					o - 1 < t && (e.removeFrom(), e.selectedIndex = -1, Q.pop())
				}, !0), H.outerLevel = o, H.outerMenu = Q[Q.length - 1], H.outerMenu && (H.outerMenu.selectedIndex = -1), H.selected = H.selectedMenu = H.text = null, Q[Q.length - 2] ? (H.selectedMenu = Q[Q.length - 2], H.selectedIndex = H.selectedMenu.selectedIndex) : H.selectedIndex = -1, H.selected != V && H.dispatchEvent("change"), V = H.selected, H.stage && H.stage.update()
			};
			var K, U, Z = {};
			H.outerLevel = 0, e.constructor == {}.constructor && (e = {
				core: e
			}, K = H.tree = new oo.Hierarchy(e), U = K.getLinearIDs()), H.lastRadial = null;
			var Q = this.radials = [];

			function J(e) {
				var o, t, n;
				e ? o = e.level : (o = 0, t = r), loop(Q, function(e, t) {
					o - 1 < t && (e.removeFrom(), e.selectedIndex = -1, Q.pop())
				}, !0), e && (n = e.selected), n ? (id = n.id, t = e.outerRadius, $(id, o + 1, t)) : e || $("id0", o + 1, t), H.selected = n, H.selected ? (H.selectedMenu = Q[H.selected.menu.level - 1], H.selectedIndex = H.selected.num, H.selected.label ? H.text = H.selected.label.text : H.text = null) : (H.text = null, H.selectedIndex = -1, H.selectedMenu = null), H.stage && H.stage.update()
			}

			function $(e, t, o) {
				var n;
				if (t && (H.outerLevel = t), !Z[e]) {
					var r = K.getData(e),
						i = r.list;
					if (i && !oo.isEmpty(i)) {
						var a = {
							labels: K.getLinearList(i),
							coreRadius: o,
							size: l,
							font: s,
							startAngle: u,
							totalAngle: d,
							flip: h,
							rotateIcons: p,
							shiftRadial: g,
							iconsShiftRadial: f,
							height: c,
							coreColor: clear,
							backdropColor: y,
							backgroundColor: m,
							rollBackgroundColor: z,
							selectedBackgroundColor: v,
							selectedRollBackgroundColor: b,
							color: w,
							rollColor: x,
							selectedColor: C,
							selectedRollColor: k,
							borderColor: T,
							borderWidth: A,
							gapAsAngle: I,
							gap: B,
							gradient: P,
							spacingInner: S,
							spacingOuter: M
						};
						r.styles && (a = merge(a, r.styles)), n = Z[e] = new Radial(a), U = K.getLinearIDs(i), n.buttons.loop(function(e, t) {
							e.menu = n, e.id = U[t]
						}), n.level = H.outerLevel, n.on("change", function(e) {
							H.leafNode = !1, J(e.target), !E && H.selected == V || H.dispatchEvent("change"), V = H.selected
						})
					}
				}
				Z[e] ? (Q.push(Z[e]), Z[e].center(H), j && Z[e].bot()) : (H.leafNode = !0, H.outerLevel -= 1), H.outerMenu = n
			}
			O && J(), De(this, G), this.clone = function() {
				return H.cloneProps(new oo.RadialMenu(e, l, s, c, r, t, o, n, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, i, S, M, E, a, O, j, L, this.group, Y))
			}
		}, oo.extend(oo.RadialMenu, oo.Container, "clone", "zimContainer", !1), oo.ColorPicker = function(e, o, n, r, i, t, a, l, s, c, u, d, h, g, p, f, m, z, v) {
			var b;
			if (b = zob(oo.ColorPicker, arguments, "width, colors, cols, spacing, greyPicker, alphaPicker, startBackgroundColor, draggable, shadowColor, shadowBlur, buttonBar, circles, indicator, backgroundColor, keyArrows, container, style, group, inherit", this)) return b;
			z_d("67"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "ColorPicker", this.group = z;
			var y = !1 === m ? {} : oo.getStyle(this.type, this.group, v);
			zot(e) && (e = null != y.width ? y.width : 500), zot(o) && (o = null != y.colors ? y.colors : null), zot(o) && (M = !0), zot(n) && (n = null != y.cols ? y.cols : 10), zot(r) && (r = null != y.spacing ? y.spacing : 2);
			var w = !M && 0 < o.length && o.length <= n;
			zot(t) && (t = null != y.alphaPicker ? y.alphaPicker : !w), zot(i) && (i = null != y.greyPicker ? y.greyPicker : !w), zot(s) && (s = null != y.shadowColor ? y.shadowColor : "rgba(0,0,0,.3)"), zot(c) && (c = null != y.shadowBlur ? y.shadowBlur : 14), zot(u) && (u = null != y.buttonBar ? y.buttonBar : !w), zot(l) && (l = u ? null == y.draggable || y.draggable : null != y.draggable && y.draggable), zot(d) && (d = null != y.circles && y.circles), zot(h) && (h = null != y.indicator && y.indicator, u || (h = null == y.indicator || y.indicator)), zot(g) && (g = null != y.backgroundColor ? y.backgroundColor : "black"), zot(a) && (a = null != y.startBackgroundColor ? y.startBackgroundColor : null), zot(p) && (p = null == y.keyArrows || y.keyArrows);
			var C, x = this;
			if (zot(f)) {
				if (!zimDefaultFrame) return;
				f = zimDefaultFrame.stage
			} else {
				if (!f.getBounds) return;
				if (zot(f.getStage)) return
			}
			x.container = f;
			var k = "#e472c4",
				T = "#50c4b7",
				A = 1,
				P = 1,
				B = new createjs.Shape;
			this.addChild(B), B.x += r, B.y += r;
			var I, S, M = !1,
				E = [];
			if (zot(o)) {
				M = !0;
				var O = 6,
					j = O * O * O;
				O = Math.ceil(Math.pow(j, .5)), S = (e - r) / 18 - r;
				var L = Math.floor(Math.pow(O * O, 1 / 3));
				I = [];
				for (var D = 0; D < 6; D++)
					for (var Y = 0; Y < 6; Y++)
						for (var X = 0; X < 6; X++) I.push("#" + H(3 * D) + H(3 * Y) + H(3 * X));
				for (o = [], D = 0; D < I.length; D++) V = Math.floor(D / 6), o[18 * ((N = D % 6) + 6 * (L = 18 <= V ? 1 : 0)) + (V - 6 * L * 3)] = I[D];
				n = 18, E = [T, k]
			} else S = (e - r) / n - r;
			var R, _ = Math.ceil(o.length / n),
				W = 1,
				F = String(o[o.length - 1]);
			if (!zot(a)) {
				var G = a.match(/rgba\((.*)\)/);
				if (G) W = (V = G[1].split(",")).pop(), a = "rgb(" + V.join(",") + ")";
				F = String(a)
			}

			function H(e) {
				return (e = Math.floor(e).toString(16)) + "" + e
			}
			M && (R = T);
			var N, V, q, K, U = B.graphics,
				Z = (L = 0, null != y.borderColor ? y.borderColor : null),
				Q = null != y.borderWidth ? y.borderWidth : null;
			for (!zot(Z) && zot(Q) && (Q = 1), Q && zot(Z) && (Z = "#333"), Q && U.s(Z).ss(Q), D = 0; D < o.length; D++) V = D % n, N = Math.floor(D / n), q = V * (S + r), K = N * (S + r), d ? U.f(o[D]).dc(q + S / 2, K + S / 2, S / 2) : U.f(o[D]).r(q, K, S, S);
			var J = K + S + r;
			x.colors = o;
			var $ = J;
			if (i) {
				for (D = 0; D < 16; D++) E.push("#" + H(D) + H(D) + H(D));
				for (D = 0; D < E.length; D++) V = Math.floor(D / n), q = (N = D % n) * (S + r), K = V * (S + r) + J, d ? U.f(E[D]).dc(q + S / 2, K + S / 2, S / 2) : U.f(E[D]).r(q, K, S, S);
				J = K + S + r;
				var ee = n,
					te = Math.ceil(E.length / n)
			}
			if (x.greys = E, h) {
				function oe(e) {
					zot(e) || e < 0 ? h.visible = !1 : (h.visible = !0, "#000" == F || "#000000" == F || "black" == F ? (h.color = "#222", h.alpha = 1) : (h.color = "black", h.alpha = .5), h.x = B.x + e % n * (S + r) + S / 2, h.y = B.x + Math.floor(e / n) * (S + r) + S / 2)
				}(h = this.indicator = d ? new oo.Circle(S / 2 * .5, null, null, null, null, null, null, !1) : new oo.Rectangle(.5 * S, .5 * S, null, null, null, null, null, null, !1)).alpha = .5, h.centerReg(), this.addChild(h), oe(o.indexOf(F))
			}
			if (t) {
				var ne = new oo.Container({
					style: !1
				});
				ne.setBounds(0, 0, 600, 70), this.addChild(ne), ne.x = 0, ne.y = J;
				var re = this.alphaBacking = new oo.Rectangle(580, 50, "#222", null, null, 0, null, null, !1);
				ne.addChild(re), oo.centerReg(re, ne);
				var ie = this.alphaBut = new oo.Button({
						width: 20,
						height: 30,
						backgroundColor: "darkorange",
						rollBackgroundColor: "orange",
						label: "",
						corner: 0,
						hitPadding: 20,
						style: !1
					}),
					ae = this.alphaSlider = new oo.Slider({
						min: 0,
						max: 1,
						step: .05,
						button: ie,
						barLength: 330,
						barWidth: 2,
						barColor: "#999",
						vertical: !1,
						useTicks: !1,
						inside: !1,
						style: !1
					});
				ae.currentValue = zot(W) ? 1 : W, ne.addChild(ae), ae.x = 40, ae.y = ne.height / 2;
				var le = this.alphaText = new oo.Label({
					text: "Alpha: " + oo.decimals(W),
					size: 30,
					color: "orange",
					backing: "ignore",
					shadowColor: "ignore",
					shadowBlur: "ignore",
					backgroundColor: "ignore",
					rollColor: "orange",
					group: this.group
				});
				ne.addChild(le), le.x = ae.x + ae.bar.width + 40, le.y = ne.height / 2 - le.height / 2, ne.scaleX = ne.scaleY = e / 600, ae.on("change", function() {
					le.text = "Alpha: " + Pe(ae.currentValue), pe && (pe.alpha = P = ae.currentValue), u ? x.dispatchEvent("set") : x.dispatchEvent("change"), x.stage && x.stage.update()
				}), J += ne.height - 10
			}
			if (u) {
				var se = new oo.Container({
					style: !1
				});
				se.setBounds(0, 0, 600, 100), this.addChild(se), se.x = 0, se.y = J + 10;
				var ce = this.swatchText = new oo.Label({
					align: "center",
					text: F.toUpperCase(),
					labelWidth: 120,
					labelHeight: 50,
					size: 30,
					color: "orange",
					rollColor: "orange",
					backing: "ignore",
					shadowColor: "ignore",
					shadowBlur: "ignore",
					backgroundColor: "ignore",
					group: this.group
				});
				if (se.addChild(ce), oo.centerReg(ce), ce.x = 90, ce.y = 48, l) {
					var ue = this.grip = new oo.Shape({
						style: !1
					});
					se.addChild(ue), ue.graphics.f("rgba(256,256,256,.25)").r(0, 0, 5, 20).r(10, 0, 5, 20).r(20, 0, 5, 20).r(30, 0, 5, 20), ue.x = 70, ue.y = 65, ce.y = 40, ue.mouseEnabled = !1
				}
				var de = this.closeBut = new oo.Button({
					width: 90,
					height: 90,
					label: "X",
					backgroundColor: "#222",
					rollBackgroundColor: "#444",
					corner: 0,
					style: !1
				});
				se.addChild(de), de.x = 600 - de.width - 10, de.y = 0, de.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
					x.dispatchEvent("close")
				});
				var he = this.okBut = new oo.Button({
					width: 150,
					height: 90,
					label: "OK",
					backgroundColor: "#222",
					rollBackgroundColor: "#444",
					corner: 0,
					style: !1
				});
				se.addChild(he), he.x = de.x - he.width - 10, he.y = 0, he.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", be);
				var ge = this.swatchBacking = new oo.Shape({
					style: !1
				});
				se.addChild(ge), (U = ge.graphics).f("black").r(.5, .5, 50, 89).f("#666").r(50, .5, 50, 89).f("white").r(100, .5, 49.5, 89), ge.x = he.x - 150 - 10, ge.y = 0;
				var pe = this.swatch = new oo.Rectangle(150, 90, F, null, null, null, null, null, !1);
				se.addChild(pe), pe.x = ge.x, pe.y = 0, pe.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", be), pe.cursor = "pointer", pe.alpha = P = W, se.scaleX = se.scaleY = e / 600, J += se.height
			} else B.cursor = "pointer";
			t || u || (J -= 10 - r);
			var fe = J + 10;
			this.setBounds(0, 0, e, fe);
			var me, ze, ve = this.background = new oo.Rectangle(e, fe, g, null, null, null, null, null, !1);

			function be() {
				if (F != R || P != A) {
					if (M && i) {
						var e = [T = k, k = R];
						for (D = 0; D < 2; D++) {
							var t = B.graphics;
							V = Math.floor(D / n), q = (N = D % n) * (S + r), K = V * (S + r) + $, E[D] = e[D], t.f(ve.color).r(q - 1, K - 1, S + 2, S + 2).f(e[D]).r(q, K, S, S)
						}
						oo.OPTIMIZE || !zns && OPTIMIZE || !x.stage || x.stage.update()
					}
					R = F, A = P, x.dispatchEvent("change")
				} else x.dispatchEvent("close")
			}
			this.addChildAt(ve, 0), -1 != s && 0 < c && (ve.shadow = new createjs.Shadow(s, 8, 8, c)), l && (ve.on("mousedown", function(e) {
				C = e.target.stage, me = e.stageX / C.scaleX - x.x, ze = e.stageY / C.scaleY - x.y, ve.cursor = "move"
			}), ve.on("pressmove", function(e) {
				x.x = e.stageX / C.scaleX - me, x.y = e.stageY / C.scaleY - ze, x.stage && x.stage.update()
			}), ve.on("pressup", function(e) {
				ve.cursor = "default", x.stage && x.stage.update()
			}));
			var ye, we = n * (S + r),
				Ce = _ * (S + r);
			if (i) var xe = ee * (S + r),
				ke = te * (S + r);

			function Te() {
				x.keyFocus = !0;
				var e = document.activeElement;
				e && e.blur()
			}

			function Ae() {
				x.zimAccessibility && x.zimAccessibility.changeTitle(x, null, !0)
			}

			function Pe(e) {
				return Math.round(e * Math.pow(10, 2)) / Math.pow(10, 2)
			}
			B.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
				var t = oo.hitTestGrid(B, we, Ce, n, _, e.stageX, e.stageY, 0, 0, r, r);
				zot(t) || (F = o[t], u ? (pe.color = F, ce.text = String(o[t]).toUpperCase(), F != R && x.dispatchEvent("set")) : be()), i && (t = null, zot(t = oo.hitTestGrid(B, xe, ke, ee, te, e.stageX, e.stageY, 0, Ce, r, r)) || (F = E[t], u ? (pe.color = F, ce.text = E[t].toUpperCase(), F != R && x.dispatchEvent("set")) : be())), h && oe(o.indexOf(F)), u ? x.stage && x.stage.update() : h && x.stage && x.stage.update(), Ae()
			}), Object.defineProperty(this, "selectedColor", {
				get: function() {
					return F
				},
				set: function(e) {
					e = e.toUpperCase(), R = F = e, u && (pe.color = F, ce.text = F, x.stage && x.stage.update()), h && oe(o.indexOf(F)), Ae()
				}
			}), Object.defineProperty(this, "currentValue", {
				get: function() {
					return F
				},
				set: function(e) {
					x.selectedColor = e
				}
			}), Object.defineProperty(this, "currentValueEvent", {
				get: function() {
					return F
				},
				set: function(e) {
					e != x.selectedColor && (x.selectedColor = e, x.dispatchEvent("change"))
				}
			}), Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return o.indexOf(F)
				},
				set: function(e) {
					R = F = o[e], u && (pe.color = F, ce.text = F, x.stage && x.stage.update()), h && oe(o.indexOf(F)), Ae()
				}
			}), Object.defineProperty(this, "selectedAlpha", {
				get: function() {
					return t ? Pe(ae.currentValue) : 1
				},
				set: function(e) {
					t && (A = ae.currentValue = e, pe && (pe.alpha = A), le && (le.text = "Alpha: " + Pe(ae.currentValue)), x.stage && x.stage.update())
				}
			}), Object.defineProperty(this, "colors", {
				get: function() {
					return i ? o.concat(E) : o
				},
				set: function(e) {
					zon && zog("Display - ColorPicker() colors is read only - make a new ColorPicker to change")
				}
			}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
				get: function() {
					return oo.KEYFOCUS == x
				},
				set: function(e) {
					zns ? oo.KEYFOCUS = x : KEYFOCUS = x
				}
			}), p && oo.KEYFOCUS && Te(), this.on("mousedown", function() {
				p && Te()
			}), this.keyDownEvent = function(e) {
				if (x.stage && (x.zimAccessibility && x.focus || !x.zimAccessibility && x.keyFocus)) {
					var t = x.selectedIndex;

					function o() {
						t < 0 && (t = x.colors.length - 1), t > x.colors.length - 1 && (t = 0), x.selectedIndex = t, x.dispatchEvent("change"), x.stage && x.stage.update()
					}
					37 == e.keyCode || 40 == e.keyCode ? (t--, o()) : 38 != e.keyCode && 39 != e.keyCode || (t++, o())
				}
			}, window.addEventListener("keydown", this.keyDownEvent), this.hide = function() {
				if (x.removeFrom(), x.toggled = !1, x.zimAccessibility) {
					var e = x.zimAccessibility;
					e.resize(x), ye ? ye.focus() : x.zimTabTag.nextSibling.focus(), setTimeout(function() {
						e.talk("ColorPicker has been closed.")
					}, 50)
				}
				return x
			}, this.show = function() {
				if (x.center(x.container), x.zimAccessibility) {
					var e = x.zimAccessibility;
					setTimeout(function() {
						e.activatedObject && (ye = e.activatedObject.zimTabTag)
					}, 50), e.resize(x), e.tabIndex = x.zimTabIndex
				}
				return x.toggled = !0, x
			}, !(this.toggle = function(e) {
				return !0 === e ? x.show() : !1 === e ? x.hide() : x.container.contains(x) ? x.hide() : x.show(), x
			}) !== m && De(this, y), this.clone = function() {
				return x.cloneProps(new oo.ColorPicker(e, M ? null : o, n, r, i, t, a, l, s, c, u, d, h, g, p, f, m, this.group, v))
			}, this.dispose = function() {
				return window.removeEventListener("keydown", x.keyDownEvent), ae && ae.dispose(), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.ColorPicker, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Keyboard = function(n, f, m, r, i, a, l, t, z, v, b, o, y, s, c, u, d, h, g, p, w, C, x, k, e, T) {
			var A;
			if (A = zob(oo.Keyboard, arguments, "labels, backgroundColor, color, shiftBackgroundColor, shiftHoldBackgroundColor, placeBackgroundColor, placeColor, cursorColor, shadeAlpha, borderColor, borderWidth, margin, corner, draggable, placeClose, shadowColor, shadowBlur, container, data, place, special, rtl, hardKeyboard, style, group, inherit", this)) return A;
			z_d("67.2"), this.zimContainer_constructor(1e3, 400, null, null, !1), this.type = "Keyboard", this.group = e;
			var P = !1 === k ? {} : oo.getStyle(this.type, this.group, T);
			zot(n) && (n = null != P.labels ? P.labels : []), Array.isArray(n) || (n = [n]), zot(f) && (f = null != P.backgroundColor ? P.backgroundColor : "#333"), zot(m) && (m = null != P.color ? P.color : "white"), zot(r) && (r = null != P.shiftBackgroundColor ? P.shiftBackgroundColor : "orange"), zot(i) && (i = null != P.shiftHoldBackgroundColor ? P.shiftHoldBackgroundColor : "red"), zot(a) && (a = null != P.placeBackgroundColor ? P.placeBackgroundColor : "#50c4b7"), zot(l) && (l = null != P.placeColor ? P.placeColor : m), zot(t) && (t = null != P.cursorColor ? P.cursorColor : "#50c4b7"), zot(z) && (z = null != P.shadeAlpha ? P.shadeAlpha : .2), zot(v) && (v = null != P.borderColor ? P.borderColor : "rgba(0,0,0,.1)"), zot(b) && (b = null != P.borderWidth ? P.borderWidth : null), v < 0 || b < 0 ? v = b = null : null != v && null == b && (b = 1), zot(o) && (o = null != P.margin ? P.margin : 5), zot(y) && (y = null != P.corner ? P.corner : 30), zot(s) && (s = null != P.draggable && P.draggable), zot(c) && (c = null == P.placeClose || P.placeClose), zot(u) && (u = null != P.shadowColor ? P.shadowColor : "rgba(0,0,0,.2)"), zot(d) && (d = null != P.shadowBlur ? P.shadowBlur : 14), zot(g) && (g = null != P.data ? P.data : [
				[
					["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
					["a", "s", "d", "f", "g", "h", "j", "k", "l"],
					["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
					["?123"]
				],
				[
					["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
					["!", "@", "#", "$", "/", "^", "&", "*", "(", ")"],
					["1/2", "-", "'", '"', ":", ";", ",", "?", "backspace"],
					["ABC"]
				],
				[
					["+", "x", "%", "=", "<", ">", "{", "}", "[", "]"],
					["€", "£", "¥", "$", "￦", "~", "`", "¤", "♡", "☆"],
					["2/2", "_", "\\", "|", "《", "》", "¡", "¿", "backspace"],
					["ABC"]
				]
			]);
			var B = this;
			B.data = g, zot(p) && (p = null == P.place || P.place), zot(C) && (C = null != P.rtl && P.rtl), zot(x) && (x = null == P.hardKeyboard || P.hardKeyboard);
			var I = "zim display - Keyboard(): Please pass in a reference to a container with bounds set";
			if (zot(h)) {
				if (!zimDefaultFrame) return void zog(I);
				h = zimDefaultFrame.stage
			} else {
				if (!h.getBounds) return void zog(I);
				if (zot(h.stage)) return void zog("zim display - Keyboard(): The container must have a stage property")
			} - 1 != u && 0 < d && (B.shadow = new createjs.Shadow(u, 3, 3, d));
			var S, M = zimDefaultFrame ? zimDefaultFrame.stage : null;
			B.labels = n;
			var E = ["@", "", ".", "/", "away"];
			zot(w) || E.splice(1, 0, w);
			var O = oo.copy(g[0]);
			O[3] = O[3].concat(E);
			var j = oo.copy(g[1]);
			j[3] = j[3].concat(E);
			var L = oo.copy(g[2]);
			L[3] = L[3].concat(E);
			var D, Y, X, R, _, W, F, G, H, N, V, q, K = ["ė", "ē", "ę", "ê", "é", "ë", "è"],
				U = ["ū", "û", "ú", "ü", "ù"],
				Z = ["ī", "į", "ì", "í", "ï", "î"],
				Q = ["ō", "œ", "ø", "õ", "ô", "ó", "ö", "ò"],
				J = ["ā", "ã", "å", "â", "á", "ä", "à", "æ"],
				$ = ["ñ", "ń"],
				ee = [],
				te = 95.5,
				oe = {
					def: "default",
					shift: "shift",
					number1: "number1",
					number2: "number2"
				},
				ne = oe.def,
				re = !1,
				ie = 0,
				ae = [];

			function le(e) {
				var t, o = !1;
				if (ne === oe.def) {
					for (R.color = e ? i : r, t = 0; t < ee.length - 6 - (zot(w) ? 0 : 1); t++) {
						0 < (n = ee[t]).label.text.length && (1 === n.name.length ? (n.label.text = n.label.text.toUpperCase(), n.label.centerReg(n).mov(0, 6)) : n.label.centerReg(n))
					}
					e || (o = !0, oo.timeout(500, function() {
						o && (re = !0, R.color = i, D.updateCache(), B.stage.update())
					}), q = B.on("pressup", function(e) {
						B.off("pressup", q), o = !1
					})), ne = oe.shift
				} else {
					for (R.color = f, re = !1, t = 0; t < ee.length - 6; t++) {
						var n;
						0 < (n = ee[t]).label.text.length && (1 === n.name.length ? (n.label.text = n.label.text.toLowerCase(), n.label.centerReg(n).mov(0, 3)) : n.label.centerReg(n))
					}
					ne = oe.def
				}
				D.updateCache(), B.stage.update()
			}

			function se(e) {
				var t, o, n, r, i, a, l, s = 0,
					c = 0,
					u = !1,
					d = !1;
				zot(e) && (e = oe.def), e === oe.def ? t = O : e === oe.number1 ? t = j : e === oe.number2 && (t = L), D = new oo.Container(1e3, 430, null, null, !1).addTo(B);
				for (var h = 0; h < t.length; h++) {
					(h <= 1 || e == oe.def && 2 == h && "shift" != t[2][0]) && (s = (te / 2 + 2.5) * (10 - t[h].length));
					for (var g = 0; g < t[h].length; g++) {
						if (a = null, d = u = !1, "backspace" == t[h][g] ? (a = G, d = i = !0) : "shift" == t[h][g] ? (i = !0, a = F) : (3 == h || e != oe.def && 2 == h) && 0 == g ? d = i = !0 : "" == t[h][g] ? u = !(i = !1) : "away" == t[h][g] ? (a = H, d = i = !0) : i = !1, r = i ? 1.5 * te + 2.5 : u ? (te + 5) * (zot(w) ? 4 : 3) - 5 : te, n = new oo.Rectangle(r, te, f, v, b, y, null, null, !1).cur().addTo(D), d && n.addChild(new oo.Rectangle(r, te, "black", null, null, y, null, null, !1).alp(z)), n.label = o = a ? new oo.Label({
								text: "",
								backgroundColor: "ignore",
								font: null != P.font ? P.font : null,
								style: !1
							}) : new oo.Label({
								lineWidth: 10,
								lineHeight: 25,
								font: null != P.font ? P.font : null,
								text: t[h][g],
								color: m,
								align: "center",
								style: !1
							}), a) {
							var p = a.clone();
							p.scaleTo(n, 70, 70), p.centerReg(n)
						}
						l ? (l = !1, s += 67.33) : (o.centerReg(n).mov(0, isNaN(o.text) ? 3 : 7), n.x = s, n.y = c, n.name = t[h][g], 2 == h && 0 == g && e == oe.number1 && (n.toggle = "1/2"), 2 == h && 0 == g && e == oe.number2 && (n.toggle = "2/2"), 3 == h && 0 == g && e == oe.def && (n.toggle = "?123"), 3 == h && 0 == g && e != oe.def && (n.toggle = "ABC"), n.toggle && o.mov(0, 3), ee.push(n), "shift" == n.name && (R = n), s = n.x + n.width + 5)
					}
					c += te + 5, s = 0
				}
				D.cache(b ? -b : 0, b ? -b : 0, b ? D.width + 2 * b : D.width, b ? D.height + 2 * b : D.height)
			}

			function ce() {
				B.mouseYAmount && (B.y = B.parent.globalToLocal(0, B.mouseYAmount - V).y)
			}

			function ue() {
				M.off("pressmousemove", B.tickerMouseEvent), oo.Ticker.remove(ce)
			}

			function de() {
				if (_ && X) {
					for (var e = _.label.x + _.label.getBounds().x, t = 0; t < ie; t++) e += _.widthArray[t] ? _.widthArray[t] : 0;
					X.heightOnly = _.getBounds().height * (_.backing && zot(_.padding) ? .9 : 1) - (_.paddingVertical && _.background ? 2 * _.paddingVertical : 0), X.center(_), X.x = e
				}
			}

			function he() {
				if (W) return B;
				if (!_) return B;
				var e, t, o, n = c ? ["<", ">", "x"] : ["<", ">"];
				ae = [], o = _.localToLocal(0, 0, B), W = new oo.Container({
					style: !1
				}).addTo(B).pos({
					x: o.x,
					y: o.y + _.height + 15,
					reg: !0
				}).cur();
				for (var r = 0; r < n.length; r++) e = new oo.Rectangle(te, te, a, v, b, y, null, null, !1), "x" == n[r] && new oo.Rectangle(te, te, "black", null, null, y, null, null, !1).alp(z).addTo(e), (t = new oo.Label({
					lineWidth: 10,
					text: n[r],
					backing: e,
					font: null != P.font ? P.font : null,
					color: l,
					align: "center",
					valign: "center",
					style: !1
				}).addTo(W).cache()).x = r * (te + 5), ae.push(t);
				o = _.localToLocal(0, 0, B), W.x = o.x, W.y = o.y + _.height + 15, W.on("click", function(e) {
					0 == ae.indexOf(e.target) ? 0 < ie && ie-- : 1 == ae.indexOf(e.target) ? ie < _.text.length && ie++ : ge();
					de()
				}), B.stage.update()
			}

			function ge() {
				if (!W) return B;
				W.removeAllEventListeners(), B.removeChild(W), W = null
			}

			function pe(e) {
				if (_) {
					var t, o;
					if ("del" === e) _ && (_.text = [_.text.slice(0, ie - 1), _.text.slice(ie)].join("")), ie--, me();
					else {
						ne === oe.shift && (e = e.toUpperCase());
						var n = _.text;
						(t = _.clone().removeFrom()).text = e, o = t.label.getMeasuredWidth(), _.widthArray ? _.widthArray.splice(ie, 0, o) : _.widthArray = [_.breedte], ie < _.text.length ? _.text = [_.text.slice(0, ie), e, _.text.slice(ie)].join("") : _.text += e, _ && _.label.getBounds().width < S ? (ie++, de()) : _.text = n
					}
					ne !== oe.shift || re || (B.removeChild(D), se(), ne = oe.def), de();
					var r = new createjs.Event("keydown");
					r.letter = e, B.dispatchEvent(r), B.stage.update()
				}
			}

			function fe(e) {
				if (B.stage) {
					var t, o = 0,
						n = !1;
					(_ = e.target).widthArrayCheck || me(), S = _.label.lineWidth ? _.label.lineWidth : 1e4, (t = _.globalToLocal(e.stageX / e.target.stage.scaleX, e.stageY / e.target.stage.scaleY)).x -= _.label.x, t.y -= _.label.y;
					for (var r = 0; r < _.widthArray.length; r++)
						if (o += _.widthArray[r], t.x < o - _.widthArray[r] / 2 + _.label.getBounds().x) {
							ie = r, n = !0;
							break
						}
					n || (ie = _.text.length), de(), p && !W && 0 < _.text.length && he(), W && _ && (0 < _.text.length ? (t = _.localToLocal(0, 0, B), W.x = t.x, W.y = t.y + _.height + 15) : ge())
				}
			}

			function me() {
				if (_) {
					var e;
					_.widthArray = [];
					for (var t = 0; t < _.text.length; t++)(e = _.clone().removeFrom()).text = _.text[t], _.widthArray.push(e.label.getMeasuredWidth());
					_.widthArrayCheck = !0, de()
				}
			}

			function ze(e) {
				var t, o = !0;

				function n() {
					_ && 0 < _.text.length ? (0 < B.selectedIndex && pe("del"), e ? r() : B.on("pressup", r)) : pe("del")
				}

				function r() {
					o = !1, t && t.clear(), B.off("pressup", r)
				}
				n(), t = oo.timeout(300, function e() {
					(!_ || _.text.length < 1 || 0 == B.currentIndex) && (o = !1), o && (n(), t = t && oo.timeout(200, e)), _ && _.text.length < 1 && r()
				}), B.stage.update()
			}

			function ve() {
				for (var e = 0; e < n.length; e++) n[e].clickEvent = n[e].on("click", fe)
			}

			function be() {
				if (1 < n.length)
					for (var e = 0; e < n.length; e++) n[e].off("click", n[e].clickEvent)
			}

			function ye() {
				if (!X && (_ = n[0], S = _ && _.label.lineWidth ? _.label.lineWidth : 1e4, _)) {
					(X = new oo.Rectangle(3, _.height - (_.paddingVertical && _.background ? 2 * _.paddingVertical : 0), t, null, null, null, null, null, !1).center(_)).x = 0, X.visible = !1, X.animate({
						obj: {
							alpha: 0
						},
						rewind: !0,
						loop: !0,
						loopWait: 750,
						time: 250,
						id: "knipperTekst"
					});
					for (var e = 0; e < n.length; e++) n[e].widthArray = [0];
					me()
				}
			}

			function we() {
				oo.stopAnimate("knipperTekst"), _ && _.removeChild(X), _ = X = null
			}! function() {
				(F = new oo.Shape({
					style: !1
				})).graphics.f(m).p("AhIFoIAAjYIixAAID5n3ID6H3IixAAIAADYgAjHBxICeAAIAADYIBTAAIAAjYICeAAIjImSg"), F.setBounds(-25.5, -36, 51, 72), G = new oo.Container({
					style: !1
				});
				var e = new oo.Shape({
					style: !1
				});
				e.graphics.f(m).p("ACgC+IigigIifCgQgGAGgJAAQgJAAgGgGQgGgGgBgJQABgJAGgGICgigIigifQgGgGgBgJQABgJAGgGQAGgGAJAAQAIAAAHAGICfCgICgigQAGgGAJAAQAJAAAGAGQAGAGABAJQgBAJgGAGIigCfICgCgQAGAGABAJQgBAJgGAGQgGAGgJAAQgJAAgGgGg"), e.setTransform(82.6, 32), e.addTo(G);
				var t = new oo.Shape({
					style: !1
				});
				t.graphics.f(m).s().p("AkhFAQgcAAgUgUIkHj6QgVgUAAgeQAAgdAVgVIEHj6QAUgTAcAAINKAAQAdAAAUAUQAUAUAAAdIAAH1QAAAdgUATQgUAVgdAAgAk0kOIkGD8QgIAHAAALQAAALAIAIIEGD7QAIAHALAAINKAAQALAAAIgIQAHgHAAgLIAAn1QAAgLgHgIQgIgIgLAAItKAAQgLAAgIAHg"), t.setTransform(62.2, 32), t.addTo(G), G.setBounds(0, 0, 125, 64), (H = new oo.Container({
					style: !1
				})).setBounds(0, 0, 147, 86);
				for (var o, n = [{
						p: "Ai+heIF9AAIi/C9g",
						transform: [73.4, 76]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [128.4, 43.2]
					}, {
						p: "AnNAzIAAhlIObAAIAABlg",
						transform: [73, 43.2]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [18.8, 43.2]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [128.2, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [114.5, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [100.8, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [87.1, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [73.4, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [59.7, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [46, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [32.3, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [18.6, 29.5]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [128, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [114.3, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [100.6, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [86.9, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [73.2, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [59.5, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [45.8, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [32.1, 15.8]
					}, {
						p: "AgyAzIAAhlIBlAAIAABlg",
						transform: [18.4, 15.8]
					}, {
						p: "AphEnQgzAAgkgkQglglAAgzIAAlVQAAgzAlglQAkgkAzAAITDAAQAzAAAkAkQAlAlAAAzIAAFVQAAAzglAlQgkAkgzAAgAqjjtQgcAcAAAnIAAFVQAAAnAcAbQAbAcAnAAITDAAQAnAAAcgcQAbgbAAgnIAAlVQAAgngbgcQgcgcgnAAIzDAAQgnAAgbAcg",
						transform: [73.4, 29.5]
					}], r = 0; r < n.length; r++)(o = new oo.Shape({
					style: !1
				})).graphics.f(m).s().p(n[r].p), o.setTransform(n[r].transform[0], n[r].transform[1]), o.addTo(H)
			}(), se(ne), s && function() {
				N = new oo.Rectangle(1.5 * te + 2.5 + 2.5, te, f, v, b, y, null, null, !1).addTo(B, 0).cur();
				for (var e = 0; e < 4; e++) new oo.Rectangle(.4 * N.width, 4, m, null, null, null, null, null, !1).centerReg(N).alp(.2).y -= 15 * e - 22;
				N.x = 8.5 * te + 40, N.y = -te - 5, N.name = "drag"
			}(), this.on("mousedown", function(e) {
				M = B.stage, Y && B.removeChild(Y);
				W && ae.indexOf(e.target) < 0 && ge();
				zot(e.target.name) || (s && e.target === N ? (B.tickerMouseEvent = M.on("stagemousemove", function(e) {
					B.mouseYAmount = e.stageY
				}), oo.Ticker.add(ce), B.on("pressup", ue), V = e.stageY - B.localToGlobal(0, 0).y) : zot(w) || e.target.name !== w ? "shift" === e.target.name ? le() : "?123" === e.target.toggle ? (B.removeChild(D), se(oe.number1)) : "ABC" === e.target.toggle ? (B.removeChild(D), ne = oe.def, se(), re && le(!0)) : "1/2" === e.target.toggle ? (B.removeChild(D), se(oe.number2)) : "2/2" === e.target.toggle ? (B.removeChild(D), se(oe.number1)) : "away" === e.target.name ? (B.hide(), B.dispatchEvent("close")) : "e" === e.target.name || "u" === e.target.name || "i" === e.target.name || "o" === e.target.name || "a" === e.target.name || "n" === e.target.name ? function(t) {
					var a, l, s = !1,
						c = !1;
					switch (t) {
						case "e":
							a = K;
							break;
						case "u":
							a = U;
							break;
						case "i":
							a = Z;
							break;
						case "o":
							a = Q;
							break;
						case "a":
							a = J;
							break;
						case "n":
							a = $
					}
					l = oo.timeout(500, function() {
						var e, t, o, n, r = 0;
						if (l.clear(), !s) {
							c = !0, (Y = new oo.Container(1e3, te, null, null, !1).addTo(B, 0)).y = -te - 5;
							for (var i = 0; i < a.length; i++) n = ne === oe.shift ? a[i].toUpperCase() : a[i], e = new oo.Label({
								lineWidth: 10,
								lineHeight: 25,
								text: n,
								font: null != P.font ? P.font : null,
								color: m,
								align: "center",
								style: !1
							}), t = new oo.Rectangle(te, te, f, v, b, y, null, null, !1).addTo(Y), o = new oo.Rectangle(te, te, "white", null, null, y, null, null, !1).alp(.2), t.addChild(o), e.center(t), t.name = a[i], t.x = r, r += te + 5;
							B.stage.update()
						}
					});
					var o = B.on("pressup", function(e) {
						s = !0, B.off("pressup", o), c || pe(t)
					})
				}(e.target.name) : "return" === e.target.name ? pe("\n") : "backspace" === e.target.name ? ze() : "" === e.target.name ? pe(" ") : pe(e.target.name) : B.dispatchEvent("special"), M.update())
			}), B.addChar = function(e) {
				!zot(e) && e.match(/^.$/) && pe(e)
			}, B.removeChar = function() {
				ze(!0)
			}, ve(), ye(), Object.defineProperty(this, "selectedLabel", {
				get: function() {
					return _
				},
				set: function(e) {
					fe({
						target: e
					}), B.hidePlace()
				}
			}), Object.defineProperty(this, "selectedIndex", {
				get: function() {
					return ie
				},
				set: function(e) {
					ie = e, de()
				}
			}), this.show = function(e) {
				B.addTo(h), zot(e) || fe({
					target: n[e]
				});
				return X && (X.visible = !0), B.toggled = !0, B
			}, this.hide = function() {
				return B.removeFrom(h), X && (X.visible = !1), M.update(), B.toggled = !1, B
			}, this.toggle = function(e) {
				return !0 === e ? B.show() : !1 === e ? B.hide() : B.parent ? B.hide() : B.show(), B
			}, this.showPlace = function() {
				return he(), B
			}, this.hidePlace = function() {
				return ge(), B
			}, this.addLabels = function(e) {
				Array.isArray(e) || (e = [e]);
				for (var t = e.length - 1; 0 <= t; t--) {
					0 <= n.indexOf(e[t]) || "Label" != e[t].type ? e.splice(t, 1) : e[t].widthArray = [0]
				}
				return be(), n = n.concat(e), ve(), ye(), X && (X.visible = !0), B
			}, this.removeLabels = function(e) {
				Array.isArray(e) || (e = [e]), be();
				for (var t = 0; t < e.length; t++) {
					var o = n.indexOf(e[t]);
					0 <= o && n.splice(o, 1)
				}
				return ve(), 0 == n.length ? _ && we() : _ && -1 == n.indexOf(_) && (we(), ye()), B
			};
			var Ce = new oo.Rectangle(this.width, this.height, oo.clear, null, null, null, null, null, !1).addTo(this).expand().bot();
			Ce.on("mousedown", function() {}), Ce.on("click", function() {}), this.resize = function() {
				return B.scaleTo(M, 100 - 2 * o / M.width * 100, 50 - 2 * o / M.height * 100), B.y = M.height - B.height - o, B.x = M.width / 2 - B.width / 2, _ && W && (point = _.localToLocal(0, 0, B), W.x = point.x, W.y = point.y + _.height + 15), B.stage && B.stage.update(), B
			}, this.resize(), B.selectedLabel && (B.selectedIndex = B.selectedLabel.text.length), x && (this.keydownEvent = window.addEventListener("keydown", function(e) {
				if (B.stage) {
					var t = B;
					zot(t) || (35 == e.keyCode && (t.selectedIndex = t.selectedLabel.text.length), 36 == e.keyCode && (t.selectedIndex = 0), 37 == e.keyCode && (t.selectedIndex = t.selectedIndex - 1), 39 == e.keyCode && (t.selectedIndex = t.selectedIndex + 1), 46 == e.keyCode && t.selectedIndex < t.selectedLabel.text.length && (t.selectedIndex = t.selectedIndex + 1, t.removeChar()), 8 == e.keyCode && (e.preventDefault(), t.removeChar()), t.addChar(e.key), B.stage && B.stage.update())
				}
			})), !1 !== k && De(this, P), this.clone = function() {
				var e = new oo.Keyboard(n, f, m, r, i, a, t, z, o, y, s, c, u, d, h, g, p, w, C, x, k, this.group, T);
				return B.cloneProps(e)
			}, this.dispose = function() {
				return Ce.removeAllEventListeners(), B.keydownEvent && window.removeEventListener("keydown", B.keydownEvent), B.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Keyboard, oo.Container, "clone, dispose", "zimContainer", !1), oo.Organizer = function(e, t, r, o, i, a, l, s, n, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A) {
			var P;
			if (P = zob(oo.Organizer, arguments, "width, list, useAdd, useRemove, usePosition, autoAdd, autoRemove, autoPosition, addForward, removeForward, backgroundColor, rollBackgroundColor, selectedBackgroundColor, selectedRollBackgroundColor, color, rollColor, selectedColor, selectedRollColor, spacing, corner, keyEnabled, gradient, gloss, backdropColor, style, group, inherit", this)) return P;
			z_d("67.3"), this.group = T;
			var B = !1 === k ? {} : oo.getStyle("Organizer", this.group, A);
			zot(e) && (e = null != B.width ? B.width : t && t.vertical ? t.width : 300), zot(r) && (r = null == B.useAdd || B.useAdd), zot(o) && (o = null == B.useRemove || B.useRemove), zot(i) && (i = null == B.usePosition || B.usePosition), zot(a) && (a = null != B.autoAdd ? B.autoAdd : r), zot(l) && (l = null != B.autoRemove ? B.autoRemove : o), zot(s) && (s = null != B.autoPosition ? B.autoPosition : i), zot(n) && (n = null == B.addForward || B.addForward), zot(c) && (c = null == B.removeForward || B.removeForward), zot(u) && (u = null != B.backgroundColor ? B.backgroundColor : "#777"), zot(d) && (d = null != B.rollBackgroundColor ? B.rollBackgroundColor : "#555"), zot(h) && (h = null != B.selectedBackgroundColor ? B.selectedBackgroundColor : "#333"), zot(p) && (p = null != B.color ? B.color : "white"), zot(f) && (f = null != B.rollColor ? B.rollColor : p), zot(m) && (m = null != B.selectedColor ? B.selectedColor : p), zot(v) && (v = null != B.spacing ? B.spacing : 1), zot(b) && (b = null != B.corner ? B.corner : 0), zot(w) && (w = null != B.gradient ? B.gradient : .2), zot(C) && (C = null != B.gloss ? B.gloss : null), zot(x) && (x = null != B.backdropColor ? B.backdropColor : null), Array.isArray(b) || (b = [b, b, b, b]);
			var I = {
					width: 50,
					height: 50,
					label: "",
					shadowColor: -1,
					gradient: w,
					corner: b,
					backgroundColor: u,
					rollBackgroundColor: d
				},
				S = this.buttons = [],
				M = new oo.Shape;
			if (M.graphics.f(p).p("AAAA4Ih6B8Ig5g4IB8h8Ih7h6IA4g5IB6B8IB7h8IA5A5Ih8B6IB8B7Ig5A5g"), r && S.push(new oo.Button({
					icon: M.sca(.55).rot(-45).reg(1),
					inherit: I
				})), i) {
				var E = new oo.Shape;
				E.graphics.f(p).p("AiJieIETCeIkTCfg"), S.push(new oo.Button({
					icon: E.sca(.6).rot(t && !t.vertical ? 180 : -90).reg(-2),
					inherit: I
				})), S.push(new oo.Button({
					icon: E.clone().sca(.6).rot(t && !t.vertical ? 0 : 90).reg(-2),
					inherit: I
				}));
				var O = new oo.Shape;
				O.graphics.f(p).p("AiFCLIAAkVIBXAAIAAEVgAgiAAICoiHIAAEQg"), S.push(new oo.Button({
					icon: O.sca(.62).rot(t && !t.vertical ? 0 : 90).reg(0),
					inherit: I
				})), S.push(new oo.Button({
					icon: O.clone().sca(.62).rot(t && !t.vertical ? 180 : -90).reg(0),
					inherit: I
				}))
			}
			o && S.push(new oo.Button({
				icon: M.clone().rot(0).sca(.55),
				inherit: I
			})), 0 == S.length && (S = [""]), this.zimTabs_constructor(e, e / S.length, S, u, d, h, g, p, f, m, z, !1, v, !0, !1, b, null, !0, w, C, null, null, null, null, null, null, null, null, null, null, x);
			var j = this;
			j.list = t, j.type = "Organizer";
			var L = !(j.setButtons = function() {
					i && (j.buttons[1].icon.rotation = j.list && !j.list.vertical ? 180 : -90, j.buttons[2].icon.rotation = j.list && !j.list.vertical ? 0 : 90, j.buttons[3].icon.rotation = j.list && !j.list.vertical ? 0 : 90, j.buttons[4].icon.rotation = j.list && !j.list.vertical ? 180 : -90)
				}),
				D = t;
			j.change(function(e) {
				(!L && j.list || j.list && j.list != D) && (j.list != D && D && D.noChange(), j.list.change(function(e) {
					j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex
				}), L = !0, D = j.list);
				var t = e.target.selectedIndex;
				r || t++, i || r && !(0 < t) || (t = 5);
				var o = zot(j.list.selectedIndex) || j.list.selectedIndex < 0;
				switch (o && (j.currentValue = null), j.lastIndex = j.list.selectedIndex, t) {
					case 0:
						if (a) {
							var n = Math.max(0, j.list.selectedIndex);
							j.add(n)
						}
						j.orgType = "add";
						break;
					case 1:
						if (o) break;
						if (s) {
							n = j.list.selectedIndex;
							j.up(n)
						}
						j.orgType = "up";
						break;
					case 2:
						if (o) break;
						if (s) {
							n = j.list.selectedIndex;
							j.down(n)
						}
						j.orgType = "down";
						break;
					case 3:
						if (o) break;
						if (s) {
							n = j.list.selectedIndex;
							j.toTop(n)
						}
						j.orgType = "top";
						break;
					case 4:
						if (o) break;
						if (s) {
							n = j.list.selectedIndex;
							j.toBottom(n)
						}
						j.orgType = "bottom";
						break;
					case 5:
						if (o) break;
						if (l) {
							n = j.list.selectedIndex;
							j.remove(n)
						}
						j.orgType = "remove"
				}
			}), this.add = function(e, t, o) {
				if (zot(e) && (e = j.lastIndex), zot(t) && (t = ""), n) e = Math.min(j.list.length, Math.max(0, j.list.selectedIndex) + 1);
				else e = Math.max(0, j.list.selectedIndex);
				j.list.addAt(t, e, o), j.list.selectedIndexPlusPosition = e, j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex
			}, this.up = function(e) {
				zot(e) && (e = j.lastIndex);
				var t = j.list.items[e];
				zot(t) || (j.list.removeAt(1, e), j.list.addAt(t, e - 1), j.list.selectedIndexPlusPosition = Math.max(0, e - 1), j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex)
			}, this.down = function(e) {
				zot(e) && (e = j.lastIndex);
				var t = j.list.items[e];
				zot(t) || (j.list.removeAt(1, e), j.list.addAt(t, e + 1), j.list.selectedIndexPlusPosition = Math.min(j.list.length - 1, e + 1), j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex)
			}, this.toTop = function(e) {
				zot(e) && (e = j.lastIndex);
				var t = j.list.items[e];
				zot(t) || (j.list.removeAt(1, e), j.list.addAt(t, 0), j.list.first(), j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex)
			}, this.toBottom = function(e) {
				zot(e) && (e = j.lastIndex);
				var t = j.list.items[e];
				zot(t) || (j.list.removeAt(1, e), j.list.addAt(t, j.list.length), j.list.last(), j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex)
			}, !(this.remove = function(e) {
				zot(e) && (e = j.lastIndex), j.removedItem = j.list.selected;
				e = Math.max(0, j.list.selectedIndex);
				if (j.list.removeAt(1, e), c) e = Math.max(0, j.list.selectedIndex);
				else e = Math.max(0, j.list.selectedIndex - 1);
				j.list.selectedIndexPlusPosition = Math.min(j.list.length - 1, e), j.orgItem = j.list.selected, j.orgIndex = j.list.selectedIndex
			}) !== k && De(this, B), this.clone = function() {
				return j.cloneProps(new oo.Organizer(e, t, r, o, i, a, l, s, n, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, j.group, A))
			}
		}, oo.extend(oo.Organizer, oo.Tabs, "clone", "zimTabs", !1), oo.Marquee = function(e, t, o, r, n, i, a, l, s, c, u, d, h, g, p, f, m) {
			var z;
			if (z = zob(oo.Marquee, arguments, "width, height, items, time, transition, speed, direction, marqueeType, borderColor, borderWidth, refresh, mix, style, group, inherit", this)) return z;
			z_d("67.4"), this.group = f;
			var v = !1 === p ? {} : oo.getStyle("Marquee", this.group, m),
				b = this;
			zot(e) && (e = null != v.width ? v.width : 300), zot(t) && (t = null != v.height ? v.height : 100), zot(r) && (r = null != v.time ? v.time : 2e3), zot(n) && (n = null != v.transition ? v.transition : "slide"), zot(u) && (u = null != v.borderColor ? v.borderColor : "#333"), zot(d) && (d = null != v.borderWidth ? v.borderWidth : 1), u < 0 || d < 0 ? u = d = null : null != u && null == d && (d = 1), zot(l) && (l = null != v.marginLeft ? v.marginLeft : 25), zot(s) && (s = null != v.marginRight ? v.marginRight : 25), zot(i) && (i = null != v.speed ? v.speed : 500), zot(a) && (a = null != v.direction ? v.direction : "right"), zot(h) && (h = null != v.refresh ? v.refresh : 18e5), zot(g) && (g = null == v.mix || v.mix), this.zimContainer_constructor(e + l + s, t, null, null, !1), this.type = "Marquee", this.speed = i;
			var y = new Rectangle(e - 1, t - 1, clear).addTo(b).mov(l + .5, .5),
				w = this.content = new Container(e, t).loc(l, 0, b).setMask(y),
				C = this.pages = new oo.Pages(null, n, i, null, w).addTo(w),
				x = !1;
			this.add = function(e, t, o, n) {
				e.scaleTo(w), t && e.cur().on("click", function() {
					zgo(t, o)
				}), C.addPage(e), e.marqueeViews = 0, e.marquee = b, x || function() {
					x = !0, b.selectedIndex = 0, b.selected = C.pages[b.selectedIndex].page, b.lastSelected = null, b.selected.marqueeOn && b.selected.marqueeOn();
					b.interval = oo.interval(r, function() {
						b.go()
					})
				}(), n || S(), L && L.top()
			}, this.remove = function(e) {
				if (b.selected == e) {
					if (1 == b.pages.pages.length) return;
					var t = b.selectedIndex + 1;
					t == b.pages.pages.length && (t = 0), b.pages.go(t, null, null, 0), oo.timeout(20, function() {
						b.pages.removePage(e), e.dispose && e.dispose(), S()
					})
				} else b.pages.removePage(e), e.dispose && e.dispose(), S()
			}, zot(o) || Array.isArray(o) || (o = [o]), o && 0 < o.length && (g && oo.shuffle(o), oo.loop(o, function(e) {
				b.add(e, null, null, !0)
			})), 0 < h && oo.timeout(h, function() {
				location.reload()
			}), b.go = function(o) {
				if (b.selected.marqueeViews += 1, b.selected.marqueeOff && b.selected.marqueeOff(), o) b.selected = o, oo.loop(C.pages, function(e, t) {
					e.page != o || (b.selectedIndex = t)
				}), b.interval.interval = b.selected.marqueeTime ? b.selected.marqueeTime : r, b.interval.pause(I.toggled, null, !0);
				else {
					var e = b.selectedIndex + 1;
					b.selectedIndex = e % C.pages.length, b.selected = C.pages[b.selectedIndex].page, b.interval.time = b.selected.marqueeTime ? b.selected.marqueeTime : r
				}
				b.dispatchEvent("page"), b.selected.marqueeOn && b.selected.marqueeOn(), C.go(b.selected, a, n, i)
			}, C.on("pagetransitioned", function() {
				b.dispatchEvent("pagetransitioned"), b.indicator && (b.indicator.selectedIndex = b.selectedIndex)
			});
			var k = !1,
				T = b.left = new Container(l - 4, t - 4),
				A = (new Shape).sca(.6);
			A.graphics.f(light).mt(0, 0).p("AAhCLIAAkVIBXAAIAAEVgAh3CLIAAkVIBXAAIAAEVg");
			var P = (new Shape).sca(.6).reg(-2, 0);
			P.graphics.f(light).mt(0, 0).p("AiJieIETCeIkTCfg");
			var B, I = b.button = new Button({
				label: "",
				icon: A,
				toggleIcon: P,
				width: 45,
				height: 45,
				corner: 0,
				shadowBlur: 0
			}).scaleTo(T, 100).pos(0, 0, !1, !0, T);

			function S() {
				if (!zot(l) && 0 != l) {
					var e = 4 * l / 25;
					T.pos(l - T.width - e, e / 2, !1, !0, b), b.indicator && (b.indicator.dispose(), b.indicator.removeFrom()), B = B || new Proportion(8, 16, T.width + e, T.width / 2 + e, -1), b.indicator = new oo.Indicator({
						width: (C.pages.length <= 2 ? C.pages.length : C.pages.length - 1) * (T.width - 3),
						height: B.convert(C.pages.length),
						num: C.pages.length,
						shadowBlur: -1,
						interactive: !0,
						scale: 1.2,
						indicatorType: c
					}), b.indicator.fit(0, 0, t - I.height, I.width), b.indicator.rot("down" == a ? -90 : 90).center(T).pos(null, T.width - e / 2, null, !0), b.indicator.selectedIndex = b.selectedIndex, b.indicator.on("change", function() {
						b.go(C.pages[b.indicator.selectedIndex].page)
					})
				}
			}
			if (I.on("click", function() {
					b.interval && b.interval.pause(I.toggled), k = I.toggled, b.stage.update()
				}), S(), !zot(s) && 0 < s && void 0 !== zimDefaultFrame && zimDefaultFrame) {
				var M = 4 * s / 25,
					E = b.right = new oo.Container(45, 270),
					O = b.icon = zimDefaultFrame.makeIcon(oo.grey, oo.lighter, oo.silver).sca(.5).pos(0, 0, !0, !0, E).mov(0, 0).cur();
				O.on("mouseover", function() {
					j.animate({
						props: {
							scaleX: 1
						},
						time: 500,
						ease: "backOut",
						override: !0
					}), O.stage.update()
				}), O.on("mouseout", function() {
					j.animate({
						props: {
							scaleX: 0
						},
						time: 300,
						ease: "backIn",
						override: !0
					}), O.stage.update()
				}), O.on("mousedown", function() {
					zgo("https://zimjs.com/marquee", "_blank")
				});
				var j = b.label = new Label({
					text: "MARQUEE",
					color: dark,
					backgroundColor: lighter,
					shiftVertical: 1,
					paddingVertical: 5
				}).rot(-90).pos(0, 13, !0, !1, E).reg(-10).sca(0, 1).mov(0);
				E.fit(0, 0, s - M, t - M), E.pos(s - E.width - M, M / 2, !0, !0, b)
			}
			if (b.stage && b.stage.update(), this.pause = function(e, t) {
					zot(e) && (e = !0), e != k && (k = e, b.interval.pause(e, t), b.button.toggle(e))
				}, Object.defineProperty(this, "paused", {
					get: function() {
						return k
					},
					set: function(e) {
						zon && zog("ZIM Marquee() - paused is read only - use pause()")
					}
				}), Object.defineProperty(this, "time", {
					get: function() {
						return r
					},
					set: function(e) {
						r = e, b.interval.time = r
					}
				}), this.load = function(r, e) {
					var t = [];
					return g && oo.shuffle(r), oo.loop(r, function(e) {
						Array.isArray(e) ? t.push(e[0]) : t.push(e)
					}), b.marqueeLoader = frame.loadAssets(t, e), b.marqueeLoader.on("assetload", function(e) {
						var t = r[e.asset.id];
						if (Array.isArray(t)) var o = t[0],
							n = t[1];
						else o = t, n = "_self";
						b.add(e.asset, o, n), S()
					}), b
				}, !zot(u)) {
				var L = new Rectangle(e - 1, t - 1, oo.clear, u, d).loc(y, null, b);
				L.mouseEnabled = !1
			}!1 !== p && De(this, v), this.clone = function() {
				return b.cloneProps(new oo.Marquee(e, t, o, r, n, i, a, c, u, d, h, g, p, this.group, m))
			}, this.dispose = function() {
				return b.interval && b.interval.clear(), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Marquee, oo.Container, ["clone", "dispose"], "zimContainer"), oo.Loader = function(t, o, n, r, i, a, l, s, e, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M) {
			var E;
			if (E = zob(oo.Loader, arguments, "width, height, label, backgroundColor, rollBackgroundColor, color, rollColor, borderColor, borderRollColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, dashed, backing, rollBacking, rollPersist, icon, rollIcon, toggle, toggleBacking, rollToggleBacking, toggleIcon, rollToggleIcon, toggleEvent, frame, style, group, inherit", this)) return E;
			z_d("67.5"), this.group = S;
			var O = !1 === I ? {} : oo.getStyle("Loader", this.group, M);
			if (zot(t) && (t = null != O.width ? O.width : 250), zot(o) && (o = null != O.height ? O.height : 70), zot(r) && (r = null != O.backgroundColor ? O.backgroundColor : "rgba(0,0,0,.05)"), zot(i) && (i = null != O.rollBackgroundColor ? O.rollBackgroundColor : "rgba(0,0,0,.1)"), zot(a) && (a = null != O.color ? O.color : "rgba(0,0,0,.5)"), zot(l) && (l = null != O.rollColor ? O.rollColor : a), zot(s) && (s = null != O.borderColor ? O.borderColor : "rgba(0,0,0,.3)"), zot(c) && (c = null != O.borderWidth ? O.borderWidth : 1), zot(m) && (m = null == O.dashed || O.dashed), zot(u) && (u = null != O.corner ? O.corner : 0), zot(n) && (n = null != O.label ? O.label : new oo.Label({
					text: "UPLOAD PIC",
					color: a,
					rollColor: l,
					valign: "center",
					align: "center",
					backing: "ignore",
					shadowColor: "ignore",
					shadowBlur: "ignore",
					backgroundColor: "ignore",
					group: this.group
				})), zot(B)) {
				if (!zimDefaultFrame) return void(zon && zog("zim.Loader - please provide a reference to zim Frame"));
				B = zimDefaultFrame
			}
			this.zimButton_constructor(t, o, n, r, i, a, l, s, e, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, null, null, null, null, null, null, null, null, null, null, null, null, !1), this.type = "Loader";
			var j = this,
				L = B.stage;
			n = j.label;
			var D = j.tag = document.createElement("input");
			document.body.appendChild(D), D.setAttribute("type", "file"), D.setAttribute("multiple", "multiple"), D.setAttribute("aria-hidden", !0), D.hidden = !0, D.style.cssText = "border:thin solid grey; z-index:2; width:" + t + "px; height:" + o + "px; overflow:hidden; outline:none;position:absolute; left:0px; top:0px; display:none; cursor:pointer; opacity: 0; filter: alpha(opacity=0);", this.addEventListener("mousedown", function() {
				D.click()
			}), D.addEventListener("change", R);
			var Y = new createjs.DOMElement(D);
			L.addChild(Y), Y.alpha = 0;
			var X = B.retina && window.devicePixelRatio || 1;

			function R(e) {
				var n;
				n = e.dataTransfer && e.dataTransfer.files && 0 < e.dataTransfer.files.length ? e.dataTransfer.files : e.target.files;
				for (var r, t, o, i = [], a = 0; a < n.length; a++) t = n[a], o = void 0, (o = new FileReader).onload = function(e) {
					var o = new Image;
					o.onload = function() {
						var e = new oo.Bitmap(o);
						if (i.push(e), 1 == i.length && (r = e), i.length == n.length) {
							var t = new createjs.Event("loaded");
							t.bitmaps = i, t.bitmap = r, t.lastBitmap = e, t.total = i.length, j.dispatchEvent(t), D.value = ""
						}
					}, o.src = e.target.result
				}, o.readAsDataURL(t)
			}
			this.resize = function() {
				return j.stage ? (D.setAttribute("aria-hidden", !1), D.hidden = !1, D.style.display = "block", setTimeout(function() {
					var e = j.localToGlobal(0, 0);
					B.retina ? (Y.x = B.x / L.scaleX + e.x / X, Y.y = B.y / L.scaleY + e.y / X, oo.sca(Y, j.scaleX / X, j.scaleY / X)) : (Y.x = B.x + e.x * B.scale, Y.y = B.y + e.y * B.scale, oo.sca(Y, B.scale * j.scaleX, B.scale * j.scaleY)), L.update()
				}, 50), j) : (D.setAttribute("aria-hidden", !0), D.hidden = !0, void(D.style.display = "none"))
			}, this.resize(), j.on("added", function() {
				D.style.display = "block", D.hidden = !1, D.style.display = "block", j.resize()
			}), j.added(function e() {
				j.resize();
				setTimeout(function() {
					D.style.display = "block", D.hidden = !1, D.style.display = "block"
				}, 50);
				j.on("added", e, null, !0)
			}), j.on("removed", function() {
				D.style.display = "none", D.hidden = !0, D.style.display = "none"
			}), (new XMLHttpRequest).upload && D.addEventListener("drop", function(e) {
				D.removeEventListener("change", R), R(e), setInterval(function() {
					D.addEventListener("change", R)
				}, 100)
			}), !(this.save = function(e, t, o, n, r, i, a, l, s, c) {
				var u;
				if (u = zob(j.save, arguments, "content, filename, x, y, width, height, cached, cachedBounds, type, data")) return u;
				if (zot(e) && (e = B.stage), zot(s) && (s = "png"), zot(t)) t = "saved_" + String(oo.makeID("numbers", 5)) + "." + s;
				else {
					var d = t.split(".");
					if (1 == d.length) t += "." + s;
					else {
						var h = ["png", "jpg", "jpeg"],
							g = h.indexOf(d[d.length - 1].toLowerCase()); - 1 == g ? t += "." + s : s = h[g]
					}
				}
				if (zot(o) && (o = 0), zot(n) && (n = 0), zot(r) && (r = e.getBounds && e.getBounds() ? e.getBounds().width : B.width), zot(i) && (i = e.getBounds && e.getBounds() ? e.getBounds().height : B.height), e.cache(o, n, r, i), c) {
					var p = e.cacheCanvas.toDataURL("image/" + s);
					return a ? l && e.cache(cashedBound.x, cashedBound.y, cashedBound.width, cashedBound.height) : e.uncache(), p
				}
				if (/Edge\/(\d)+/.test(navigator.userAgent)) {
					var f = window.open();
					f.document.write("<html><head><title>saved</title></head><body style='margin:0px;padding:0px;overflow:hidden'><img src=" + e.cacheCanvas.toDataURL("image/" + s) + "></body></html>"), f.document.close()
				} else {
					"jpg" == s && (s = "jpeg");
					var m = document.createElement("a");
					m.setAttribute("download", t), m.setAttribute("href", e.cacheCanvas.toDataURL("image/" + s)), document.body.appendChild(m), m.click(), document.body.removeChild(m)
				}
				return a ? l && e.cache(cashedBound.x, cashedBound.y, cashedBound.width, cashedBound.height) : e.uncache(), j
			}) !== I && De(this, O), this.clone = function() {
				var e = new oo.Loader(t, o, zot(n) ? null : n.clone(), r, i, a, l, s, c, u, d, h, g, p, f, zot(z) ? null : z.clone(), zot(v) ? null : v.clone(), b, zot(y) ? null : y.clone(), zot(w) ? null : w.clone(), C, zot(x) ? null : x.clone(), zot(k) ? null : k.clone(), zot(T) ? null : T.clone(), zot(A) ? null : A.clone(), P, B, I, this.group);
				return j.cloneProps(e)
			}, Object.defineProperty(this, "frame", {
				get: function() {
					return B
				},
				set: function(e) {
					e != B && (B.off("update", j.updateEvent), B.off("resize", j.resizeEvent), B = e, j.resizeEvent = B.on("resize", j.resize), j.updateEvent = B.on("update", j.resize), j.resize())
				}
			}), this.resizeEvent = B.on("resize", j.resize), this.updateEvent = B.on("update", j.resize), this.dispose = function() {
				return B.off("update", j.updateEvent), B.off("resize", j.resizeEvent), document.body.removeChild(D), this.zimButton_dispose(), !0
			}
		}, oo.extend(oo.Loader, oo.Button, ["clone", "dispose"], "zimButton", !1), oo.TextArea = function(t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, e, C) {
			var x;
			if (x = zob(oo.TextArea, arguments, "width, height, size, padding, color, backgroundColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, dashed, id, placeholder, readOnly, spellCheck, password, inputType, frame, expand, style, group, inherit", this)) return x;
			z_d("67.6"), this.group = e;
			var k = !1 === w ? {} : oo.getStyle("TextArea", this.group, C);
			if (zot(t) && (t = null != k.width ? k.width : 250), zot(o) && (o = null != k.height ? k.height : 70), zot(n) && (n = null != k.size ? k.size : 20), zot(r) && (r = null != k.padding ? k.padding : 5), zot(i) && (i = null != k.color ? k.color : "#666"), zot(a) && (a = null != k.backgroundColor ? k.backgroundColor : "rgba(256,256,256,.1)"), zot(l) && (l = null != k.borderColor ? k.borderColor : "rgba(0,0,0,.1)"), zot(s) && (s = null != k.borderWidth ? k.borderWidth : null), l < 0 || s < 0 ? l = s = null : null != l && null == s && (s = 1), zot(c) && (c = null != k.corner ? k.corner : 0), !zot(d) && zot(u) && (u = null != k.shadowColor ? k.shadowColor : "rgba(0,0,0,.3)"), !zot(u) && zot(d) && (d = null != k.shadowBlur ? k.shadowBlur : 10), zot(z) && (z = null != k.password && k.password), zot(v) && (v = null != k.inputType && k.inputType), zot(y) && (y = null != k.expand ? k.expand : 20), !0 === y && (y = 20), zot(b)) {
				if (!zimDefaultFrame) return void(zon && zog("zim.TextArea - please provide a reference to zim Frame"));
				b = zimDefaultFrame
			}
			this.zimContainer_constructor(t, o, null, null, !1), this.type = "TextArea";
			var T = this,
				A = b.stage,
				P = this.background = new oo.Rectangle(t, o, a, l, s, c, h, null, !1).expand(y); - 1 != u && 0 < d && (P.shadow = new createjs.Shadow(u, 3, 3, d)), T.addChild(P);
			var B = T.tag = v || z ? document.createElement("input") : document.createElement("textarea");
			document.body.appendChild(B), zot(g) || (B.setAttribute("id", g), B.setAttribute("name", g)), z ? B.setAttribute("type", "password") : v && B.setAttribute("type", v), f && (B.readOnly = !0), m || (B.spellcheck = !1), zot(p) || B.setAttribute("placeholder", p), B.style.cssText = "background-color:rgba(0,0,0,.01); color:" + i + "; resize:none; z-index:3; width:" + (t - 2 * r) + "px; height:" + (o - 2 * r) + "px; overflow:hidden; outline:none;font-size:" + n + "px; font-family:" + (null != k.font ? k.font : "arial") + "; border:none; position:absolute; left:0px; top:0px; display:none;", B.addEventListener("change", function() {
				T.dispatchEvent("change")
			}), B.addEventListener("input", function() {
				T.dispatchEvent("input")
			}), B.addEventListener("focus", function() {
				b.zil && window.removeEventListener("keydown", b.zil[0]), T.dispatchEvent("focus")
			}), B.addEventListener("blur", function() {
				b.zil && window.addEventListener("keydown", b.zil[0]), T.dispatchEvent("blur")
			});
			var I = new createjs.DOMElement(B);
			I.alpha = 0, this.on("mousedown", function() {
				setTimeout(function() {
					B.focus()
				}, 100)
			}), this.setFocus = function(e) {
				return zot(e) && (e = !0), e ? B.focus() : B.blur(), T
			};
			var S = b.retina && window.devicePixelRatio || 1;
			this.resize = function() {
				return setTimeout(function() {
					var e = T.getConcatenatedMatrix().decompose(),
						t = T.localToGlobal(r, r);
					b.retina ? (I.x = b.x / A.scaleX + t.x / S, I.y = b.y / A.scaleY + t.y / S, oo.sca(I, e.scaleX / S / A.scaleX, e.scaleY / S / A.scaleY)) : (I.x = b.x + t.x * b.scale, I.y = b.y + t.y * b.scale, oo.sca(I, b.scale * e.scaleX, b.scale * e.scaleY)), I.alpha = 1, T.stage && A.update()
				}, 20), T
			}, this.resize(), T.added(function e() {
				A.addChild(I);
				setTimeout(function() {
					B.style.display = "block"
				}, 50);
				T.resize();
				T.on("added", e, null, !0)
			}), T.on("removed", function() {
				A.removeChild(I), B.style.display = "none"
			}), Object.defineProperty(this, "currentValue", {
				get: function() {
					return B.value
				},
				set: function(e) {
					B.value = e
				}
			}), Object.defineProperty(this, "text", {
				get: function() {
					return B.value
				},
				set: function(e) {
					B.value = e
				}
			}), Object.defineProperty(this, "focus", {
				get: function() {
					return document.activeElement == B
				},
				set: function(e) {
					T.setFocus(e)
				}
			}), Object.defineProperty(this, "readOnly", {
				get: function() {
					return B.readOnly
				},
				set: function(e) {
					B.readOnly = e
				}
			}), "undefined" != typeof KEYFOCUS && (oo.KEYFOCUS = KEYFOCUS), Object.defineProperty(this, "keyFocus", {
				get: function() {
					return oo.KEYFOCUS == T
				},
				set: function(e) {
					oo.KEYFOCUS = T
				}
			}), oo.KEYFOCUS || (T.keyFocus = !0), B.addEventListener("mousedown", function() {
				T.keyFocus = !0
			}), !1 !== w && De(this, k), this.clone = function() {
				var e = new oo.TextArea(t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, this.group, C);
				return T.cloneProps(e)
			}, Object.defineProperty(this, "frame", {
				get: function() {
					return b
				},
				set: function(e) {
					e != b && (b.off("update", T.updateEvent), b.off("resize", T.resizeEvent), b = e, T.resizeEvent = b.on("resize", T.resize), T.updateEvent = b.on("update", T.resize), T.resize())
				}
			}), this.resizeEvent = b.on("resize", T.resize), this.updateEvent = b.on("update", T.resize), this.dispose = function() {
				return b.off("update", T.updateEvent), b.off("resize", T.resizeEvent), document.body.removeChild(B), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.TextArea, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.Tag = function(t, o, n, r, i, a, l, s, c, u, e, d) {
			var h;
			if (h = zob(oo.Tag, arguments, "width, height, id, frame, backgroundColor, padding, paddingHorizontal, paddingVertical, expand, style, group, inherit", this)) return h;
			z_d("67.7"), this.group = e;
			var g = !1 === u ? {} : oo.getStyle("Tag", this.group, d);
			if (zot(t) && (t = null != g.width ? g.width : 250), zot(o) && (o = null != g.height ? g.height : 70), zot(n) && (n = null != g.id ? g.id : "zimTag_" + oo.rand(1e4)), zot(r)) {
				if (!zimDefaultFrame) return void(zon && zog("zim.TextArea - please provide a reference to zim Frame"));
				r = zimDefaultFrame
			}
			zot(i) && (i = null != g.backgroundColor ? g.backgroundColor : "rgba(0,0,0,0)"), zot(a) && (a = null != g.padding ? g.padding : 10), zot(l) && (l = null != g.paddingHorizontal ? g.paddingHorizontal : a), zot(s) && (s = null != g.paddingVertical ? g.paddingVertical : a), zot(c) && (c = null != g.expand ? g.expand : 20), !0 === c && (c = 20), this.zimContainer_constructor(t, o, null, null, !1), this.type = "Tag", this.tagID = n, this.id = n;
			var p = this,
				f = r.stage,
				m = (p.background = new oo.Rectangle(t + l, o + s, i).center(this).expand(c || 0), p.tag = document.createElement("div"));
			document.body.appendChild(m), m.setAttribute("id", n), m.setAttribute("name", n), m.style.cssText = "resize:none; z-index:3; width:" + t + "px; height:" + o + "px; overflow:hidden; outline:none;position:absolute; left:0px; top:0px; display:none;";
			var z = new createjs.DOMElement(m);
			z.alpha = 0;
			var v = r.retina && window.devicePixelRatio || 1;
			this.resize = function() {
				return setTimeout(function() {
					var e = p.localToGlobal(0, 0);
					r.retina ? (z.x = r.x / f.scaleX + e.x / v, z.y = r.y / f.scaleY + e.y / v, oo.sca(z, p.scaleX / v, p.scaleY / v)) : (z.x = r.x + e.x * r.scale, z.y = r.y + e.y * r.scale, oo.sca(z, r.scale * p.scaleX, r.scale * p.scaleY)), z.alpha = 1, p.stage && f.update()
				}, 50), p
			}, this.resize(), p.added(function e() {
				f.addChild(z);
				setTimeout(function() {
					m.style.display = "block"
				}, 50);
				p.resize();
				p.on("added", e, null, !0)
			}), p.on("removed", function() {
				f.removeChild(z), m.style.display = "none"
			}), this.add = function(e) {
				return m.innerHTML += e, p
			}, Object.defineProperty(this, "innerHTML", {
				get: function() {
					return m.innerHTML
				},
				set: function(e) {
					m.innerHTML = e
				}
			}), Object.defineProperty(this, "style", {
				get: function() {
					return m.style
				},
				set: function(e) {
					m.style = e
				}
			}), !1 !== u && De(this, g), this.clone = function() {
				var e = new oo.Tag(t, o, n, r, i, a, l, s, c, u, this.group, d);
				return p.cloneProps(e)
			}, Object.defineProperty(this, "frame", {
				get: function() {
					return r
				},
				set: function(e) {
					e != r && (r.off("update", p.updateEvent), r.off("resize", p.resizeEvent), r = e, p.resizeEvent = r.on("resize", p.resize), p.updateEvent = r.on("update", p.resize), p.resize())
				}
			}), this.resizeEvent = r.on("resize", p.resize), this.updateEvent = r.on("update", p.resize), this.dispose = function() {
				return r.off("update", p.updateEvent), r.off("resize", p.resizeEvent), document.body.removeChild(m), this.zimContainer_dispose(), !0
			}
		}, oo.extend(oo.Tag, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.addTo = function(e, t, o, n) {
			var r;
			if (r = zob(oo.addTo, arguments, "obj, container, index, localToLocal")) return r;
			if (z_d("47.5"), !zot(e)) {
				if (zot(t)) {
					if (!zimDefaultFrame) return void zog("zim methods - addTo(): please provide container");
					t = zimDefaultFrame.stage
				}
				if (zot(n) && (n = !0), e.parent || (n = !1), n) var i = e.parent.localToLocal(e.x, e.y, t);
				return zot(o) || isNaN(o) ? t.addChild(e) : t.addChildAt(e, o), n && (e.x = i.x, e.y = i.y), e
			}
			zog("zim methods - addTo(): please provide object")
		}, oo.removeFrom = function(e, t) {
			if (z_d("47.6"), !zot(e)) return zot(t) ? e.parent && e.parent.removeChild(e) : t.removeChild(e), e;
			zog("zim methods - removeFrom(): please provide object")
		}, oo.added = function(e, t, o, n) {
			if (z_d("47.7"), !zot(e) && !zot(t) && "function" == typeof t) {
				if (zot(o) && (o = 100), !e.stage) {
					var r = Date.now(),
						i = 0,
						a = setInterval(function() {
							5 < i ? clearInterval(a) : (i++, e.stage && (t(e.stage, e), clearInterval(a), clearInterval(l)))
						}, 10),
						l = setInterval(function() {
							0 < n && r - Date.now() > n && clearInterval(l), e.stage && (t(e.stage, e), clearInterval(l))
						}, o);
					return l
				}
				t(e.stage, e)
			}
		}, oo.centerReg = function(e, t, o, n) {
			var r;
			if (r = zob(oo.centerReg, arguments, "obj, container, index, add")) return r;
			if (z_d("48"), zot(e) || !e.getBounds || !e.getBounds()) return zog("zim methods - centerReg(): please provide object with bounds set"), e;
			zot(n) && (n = !0), zot(t) && e.parent && n && (t = e.parent, zot(o) && (o = e.parent.getChildIndex(e)), e.parent.removeChild(e)), zot(t) || t != e.parent || (zot(o) && (o = e.parent.getChildIndex(e)), e.parent.removeChild(e));
			var i = e.getBounds();
			return e.regX = i.x + i.width / 2, e.regY = i.y + i.height / 2, n ? oo.center(e, t, o) : e
		}, oo.centerCheck = !1, oo.center = function(e, t, o, n) {
			var r;
			if (r = zob(oo.center, arguments, "obj, container, index, add")) return r;
			if (oo.centerCheck || (z_d("48.1"), oo.centerCheck = !0), !zot(e) && e.getBounds) {
				if (zot(t) && (e.parent ? t = e.parent : zimDefaultFrame && (t = zimDefaultFrame.stage)), !zot(t) && t.getBounds) {
					var i = e.getBounds(),
						a = t.getBounds();
					if (zot(n) && (n = !0), n && t.addChild && (zot(o) || "number" == typeof o && isNaN(o) ? t.contains(e) || t.addChild(e) : t.addChildAt(e, o)), zot(a)) return i ? (e.x = i.x + e.regX - i.width / 2, e.y = i.y + e.regY - i.height / 2) : e.x = e.y = 0, e;
					if (zot(i)) return e.x = t.getBounds().width / 2, e.y = t.getBounds().height / 2, e;
					var l = e.localToLocal(e.regX, e.regY, t),
						s = oo.boundsToGlobal(e),
						c = oo.boundsToGlobal(t, s, !0);
					if (e.x = a.x + a.width / 2 - c.width / 2 + (l.x - c.x), e.y = a.y + a.height / 2 - c.height / 2 + (l.y - c.y), !n && t.getStage && t.stage && e.parent) {
						var u = t.localToLocal(e.x, e.y, e.parent);
						e.x = u.x, e.y = u.y
					}
					return e
				}
				zog("zim.center(): please provide container with bounds")
			} else zog("zim.center(): please provide object with bounds")
		}, oo.place = function(e, t) {
			if (z_d("49"), !zot(e)) return zot(t) && (t = "obj"), oo.drag({
				obj: e,
				currentTarget: !0,
				dragCursor: "crosshair"
			}), zog("place " + t + " - to get new position"), e.on("click", function() {
				zog(t + ".x = " + Math.round(e.x) + "; " + t + ".y = " + Math.round(e.y) + ";"), zog(t + ".loc(" + Math.round(e.x) + ", " + Math.round(e.y) + ");")
			}), e
		}, oo.placeReg = function(t, o) {
			if (z_d("49.5"), !zot(t)) {
				var e = t.stage;
				if (zot(e)) return zog("zim.placeReg() - add object to stage before calling placeReg()"), t;
				zot(o) && (o = "obj");
				var n = t.parent.localToGlobal(t.x, t.y),
					r = new oo.Shape(-25, -25, 50, 50, null, !1).addTo(e).pos({
						x: n.x,
						y: n.y,
						reg: !0
					});
				return r.graphics.s("white").mt(-25, 0).lt(25, 0).mt(0, -25).lt(0, 20), r.compositeOperation = "difference", r.expand(0), oo.drag({
					obj: r
				}), zog("place cursor to get new registration point location"), e.on("stagemouseup", function() {
					var e = t.globalToLocal(r.x, r.y);
					zog(o + ".regX = " + Math.round(e.x) + "; " + o + ".regY = " + Math.round(e.y) + ";"), zog(o + ".reg(" + Math.round(e.x) + ", " + Math.round(e.y) + ");")
				}), t
			}
		}, oo.pos = function(m, e, t, o, n, r, i, a, l, s, c) {
			var u;
			if (u = zob(oo.pos, arguments, "obj, x, y, horizontal, vertical, container, index, add, reg, regX, regY")) return u;
			z_d("41.5");
			var d = !1;
			"right" == o && (d = !0);
			var h = !1;
			"bottom" == n && (h = !0);
			var g = oo.POSREG;
			if ("undefined" != typeof POSREG && (g = POSREG), zot(l) && (l = g), !zot(m)) {
				if (zot(l) && zot(s) && (s = !1), zot(l) && zot(c) && (c = !1), !zot(l) && zot(s) && (s = l), !zot(l) && zot(c) && (c = l), zot(a) && (a = !0), zot(r) || r.addChild || (r = null), m.getBounds || object.getBounds() || (s = c = !1), zot(r) && (m.parent ? r = m.parent : zimDefaultFrame && (r = zimDefaultFrame.stage)), !m.parent && zot(e) && (e = 0), !m.parent && zot(t) && (t = 0), !zot(r) && r.addChild && a && (zot(i) || "number" == typeof i && isNaN(i) ? r.contains(m) || r.addChild(m) : r.addChildAt(m, i)), !s && !c && !("center" != o && "middle" != o || "center" != n && "middle" != n)) return m.center(r), m.mov(e, t), m;
				if ("center" == o || "middle" == o) {
					if (s) m.x = r.width / 2;
					else {
						var p = m.y;
						m.center(), m.y = p
					}
					m.mov(e), o = e = null
				} else !0 === o && (d = !0);
				if ("center" == n || "middle" == n) {
					if (c) m.y = r.height / 2;
					else {
						var f = m.x;
						m.center(), m.x = f
					}
					m.mov(0, t), n = t = null
				} else !0 === n && (h = !0);
				if (m.parent && m.parent.getBounds) {
					if (r = m.parent, zot(e) && 1 == d && (e = 0), zot(t) && 1 == h && (t = 0), zot(e) || (m.x = e), zot(t) || (m.y = t), zot(e) && zot(t) && !d && !h) return m;
					var z = 0,
						v = 0;
					if (m.getBounds()) {
						var b = function() {
							var e = m.getBounds(),
								t = e.x,
								o = e.y,
								n = e.width,
								r = e.height,
								i = m._props.matrix;
							i = m.getMatrix(i), (t || o) && i.appendTransform(0, 0, 1, 1, 0, 0, 0, -t, -o);
							var a = n * i.a,
								l = n * i.b,
								s = r * i.c,
								c = r * i.d,
								u = i.tx,
								d = i.ty,
								h = u,
								g = u,
								p = d,
								f = d;
							(t = a + u) < h ? h = t : g < t && (g = t);
							(t = a + s + u) < h ? h = t : g < t && (g = t);
							(t = s + u) < h ? h = t : g < t && (g = t);
							(o = l + d) < p ? p = o : f < o && (f = o);
							(o = l + c + d) < p ? p = o : f < o && (f = o);
							(o = c + d) < p ? p = o : f < o && (f = o);
							return {
								x: h,
								y: p,
								width: g - h,
								height: f - p
							}
						}();
						if (!zot(e)) {
							if (d) y = new oo.Point(b.x + b.width, b.y + b.height);
							else var y = new oo.Point(b.x, b.y);
							z = y.x - e
						}
						if (!zot(t)) {
							if (h) y = new oo.Point(b.x + b.width, b.y + b.height);
							else var y = new oo.Point(b.x, b.y);
							v = y.y - t
						}
						var w = r.getBounds();
						zot(e) || (d ? m.x = s ? w.width + w.x - e : w.width + w.x - e - z : (m.x = s ? e : e - z, m.x += w.x)), zot(t) || (h ? m.y = c ? w.height + w.y - t : w.height + w.y - t - v : (m.y = c ? t : t - v, m.y += w.y))
					}
				}
				return m
			}
		}, oo.loc = function(e, t, o, n, r, i, a, l) {
			var s;
			if (s = zob(oo.loc, arguments, "obj, target, y, container, index, add, localToLocal, x")) return s;
			if (z_d("41.55"), !zot(e)) {
				if ("number" == typeof t && (l = t, t = null), zot(t) || (zot(t.x) || (l = t.x), zot(t.y) || (o = t.y)), zot(l) && zot(t) && (l = e.x), zot(o) && zot(t) && (o = e.y), zot(i) && (i = !0), zot(n) && (e.parent ? n = e.parent : zimDefaultFrame && (n = zimDefaultFrame.stage)), i && n && (e.parent && n == e.parent || (zot(r) || isNaN(r) ? n.addChild(e) : n.addChildAt(e, r))), zot(a) && (a = !0), t && t.parent && e.parent && a) {
					var c = t.parent.localToLocal(l, o, e.parent);
					l = c.x, o = c.y
				}
				return e.x = l, e.y = o, e
			}
		}, oo.mov = function(e, t, o) {
			var n;
			return (n = zob(oo.mov, arguments, "obj, x, y")) ? n : (z_d("41.6"), zot(e) ? void 0 : (zot(t) || (e.x += t), zot(o) || (e.y += o), e))
		}, oo.sca = function(e, t, o) {
			if (z_d("41.97"), !zot(e) && !zot(e.scaleX)) return zot(t) && (t = e.scaleX), zot(o) && (o = t), e.scaleX = t, e.scaleY = o, e
		}, oo.alp = function(e, t) {
			if (z_d("41.7"), !zot(e)) return zot(t) || (e.alpha = e.hovOriginal = t), e
		}, oo.ble = function(e, t) {
			if (z_d("41.72"), !zot(e)) return zot(t) && (t = "difference"), e.compositeOperation = t, e
		}, oo.hov = function(e, t, o) {
			if (z_d("41.75"), !zot(e)) return zot(t) && (t = 1), zot(o) && (o = "number" == typeof t ? "alpha" : "color"), e.hovMouseover && (e.off("mouseover", e.hovMouseover), e.off("mouseout", e.hovMouseout)), -1 == t ? (e.cur("default"), zot(e.hovOld) || (e[e.hovType] = e.hovOld), e.hovOld = null, e.stage && e.stage.update()) : (e.cur(), e.hovOld = e[o], e.hovNew = t, e.hovType = o, e.hovMouseover = e.on("mouseover", function() {
				e[o] = e.hovNew, e.stage && e.stage.update()
			}), e.hovMouseout = e.on("mouseout", function() {
				e[o] = e.hovOld, e.stage && e.stage.update()
			})), e
		}, oo.rot = function(e, t, o, n) {
			if (z_d("41.8"), !zot(e)) {
				if (!zot(t))
					if (!e.parent || zot(o) && zot(n)) e.rotation = t;
					else {
						zot(o) && (o = e.x), zot(n) && (n = e.y);
						e.x, e.y;
						var r = e.parent.localToLocal(o, n, e),
							i = new oo.Point(e.x, e.y);
						e.reg(r.x, r.y), e.rotation = t, e.x = o, e.y = n;
						var a = e.parent.localToLocal(i.x, i.y, e);
						e.reg(a.x, a.y), e.x = i.x, e.y = i.y
					}
				return e
			}
		}, oo.siz = function(e, t, o, n) {
			if (z_d("41.85"), !zot(e)) return zot(n) && (n = !1), zot(t) || zot(o) ? zot(t) ? zot(o) || (n ? e.heightOnly = o : e.height = o) : n ? e.widthOnly = t : e.width = t : (e.widthOnly = t, e.heightOnly = o), e
		}, oo.ske = function(e, t, o) {
			if (z_d("41.9"), !zot(e)) return zot(t) || (e.skewX = t), zot(o) || (e.skewY = o), e
		}, oo.reg = function(e, t, o, n) {
			if (z_d("41.95"), !zot(e)) {
				var r = e.regX,
					i = e.regY;
				if (zot(t) || (e.regX = t), zot(o) || (e.regY = o), n && e.parent) {
					var a = e.localToLocal(r, i, e.parent);
					e.x -= a.x - e.x, e.y -= a.y - e.y
				}
				return e
			}
		}, oo.top = function(e) {
			if (z_d("41.62"), !zot(e) && e.parent) return e.parent.setChildIndex(e, e.parent.numChildren - 1), e
		}, oo.bot = function(e) {
			if (z_d("41.63"), !zot(e) && e.parent) return e.parent.setChildIndex(e, 0), e
		}, oo.ord = function(e, t) {
			if (z_d("41.64"), !zot(e) && e.parent) return zot(t) && (t = 0), e.parent.setChildIndex(e, e.parent.getChildIndex(e) + t), e
		}, oo.cur = function(e, t) {
			return z_d("41.1"), zot(e) ? zog("zim methods - cur(): please provide object") : (zot(t) && (t = "pointer"), e.cursor = t), e
		}, oo.sha = function(e, t, o, n, r) {
			return z_d("41.2"), zot(e) ? (zog("zim methods - sha(): please provide object"), e) : (zot(t) && (t = "rgba(0,0,0,.3)"), t.blur ? e.shadow = t : (zot(o) && (o = e.width ? .08 * e.width : 5), zot(n) && (n = e.height ? .08 * e.height : 5), zot(r) && (r = e.width ? .16 * e.width : 10), e.shadow = new createjs.Shadow(t, o, n, r)), e)
		}, oo.dep = function(e, t) {
			if (z_d("41.65"), !zot(e)) return zot(t) && (t = 0), e.depth = t, e
		}, oo.tap = function(r, i, a, l, e) {
			var s;
			if (z_d("47.8"), !zot(r) && !zot(i) && "function" == typeof i) return zot(a) && (a = 5), zot(l) && (l = 1e4), zot(e) && (e = !1), r.cursor = "pointer", r.zimClickDownEvent = r.on("mousedown", function(e) {
				if (s = e.target.stage, "List" == e.currentTarget.type) {
					if ("WindowBacking" == e.target.type) return;
					if (e.currentTarget.globalToLocal(e.stageX / s.scaleX, e.stageY / s.scaleY).y <= 0) return
				}
				var t = e.stageX / s.scaleX,
					o = e.stageY / s.scaleY,
					n = Date.now();
				r.zimClickUpEvent = r.on("pressup", function(e) {
					if (Math.abs(t + o - e.stageX / s.scaleX - e.stageY / s.scaleY) < a && Date.now() - n < l) {
						if (r.excludeTap) return;
						i(e)
					}
				}, null, !0)
			}, null, e), r
		}, oo.noTap = function(e) {
			if (z_d("47.9"), !zot(e)) return e.cursor && (e.cursor = "default"), e.off("mousedown", e.zimClickDownEvent), e.off("pressup", e.zimClickUpEvent), e
		}, oo.hold = function(n, r, i, a, e) {
			var l;
			if (z_d("47.87"), !zot(n) && !zot(r) && "function" == typeof r) return zot(i) && (i = 5), zot(a) && (a = 1500), zot(e) && (e = !1), n.cursor = "pointer", n.zimClickHoldDownEvent = n.on("mousedown", function(e) {
				if (l = e.target.stage, "List" == e.currentTarget.type) {
					if ("WindowBacking" == e.target.type) return;
					if (e.currentTarget.globalToLocal(e.stageX / l.scaleX, e.stageY / l.scaleY).y <= 0) return
				}
				var t = e.stageX / l.scaleX,
					o = e.stageY / l.scaleY;
				Date.now();
				clearInterval(n.zimHoldTimeout), n.zimHoldTimeout = setTimeout(function() {
					if (Math.abs(t + o - e.stageX / l.scaleX - e.stageY / l.scaleY) < i) {
						if (n.excludeHold) return;
						r(e)
					}
				}, a), n.zimClickHoldUpEvent = n.on("pressup", function(e) {
					clearInterval(n.zimHoldTimeout)
				}, null, !0)
			}, null, e), n
		}, oo.noHold = function(e) {
			if (z_d("47.88"), !zot(e)) return e.cursor && (e.cursor = "default"), e.off("mousedown", e.zimClickHoldDownEvent), e.off("pressup", e.zimClickHoldUpEvent), clearInterval(e.zimHoldTimeout), e
		}, oo.change = function(e, t, o) {
			if (z_d("47.85"), !zot(e) && !zot(t) && "function" == typeof t) return zot(o) && (o = !1), e.zimChangeEvent = e.on("change", function(e) {
				t(e)
			}, null, o), e
		}, oo.noChange = function(e) {
			if (z_d("47.95"), !zot(e)) return e.off("mousedown", e.zimChangeEvent), e
		}, oo.drag = function(l, e, s, r, t, o, a, i, c, u, n, d, h, g, p, f, m, z) {
			var v;
			if (v = zob(oo.drag, arguments, "obj, boundary, overCursor, dragCursor, all, swipe, localBounds, onTop, surround, slide, slideDamp, slideSnap, reg, removeTweens, startBounds, rect, currentTarget, offStage")) return v;
			if (z_d("31"), !zot(l) && l.on) {
				var b = oo.DRAGALL;
				"undefined" != typeof DRAGALL && (b = DRAGALL), zot(t) && zot(m) && (t = b), l.zimDown && l.noDrag(), l.cursor = zot(s) ? "pointer" : s, zot(t) && zot(m) ? m = !1 : zot(t) ? zot(m) && (m = !1) : m = t, "Tag" != l.type && "TextArea" != l.type && "Loader" != l.type || (m = !0), zot(o) && (o = !1), zot(a) && (a = !1), zot(i) && (i = !0), zot(c) && (c = !1), zot(u) && (u = !1), zot(n) && (n = .3), zot(d) && (d = !0);
				if (!0 !== d && ["horizontal", "vertical", "auto"].indexOf(d) < 0 && (d = !1), zot(h) && (h = !1), zot(g) && (g = !0), zot(p) && (p = !0), zot(e) && !zot(f) && (e = f), u) var y, w, C, x, k, T, A, P, B, I, S, M, E, O, j;
				oo.setSwipe(l, o), l.zimBoundary = e, l.zimLocalBounds = a;
				var L, D, Y, X, R, _, W, F = !1,
					G = !1;
				return l.zimAdded = l.on("added", H, null, !0), l.zimRemoved = l.on("removed", function() {
					l.zimDragTicker && oo.Ticker.remove(l.zimDragTicker)
				}, null, !0), l.parent && H(), l.pointers = {}, l.zimDown = l.on("mousedown", function(e) {
					if (l.stage) {
						W = l.stage, l.dragMouseX = Math.round(e.stageX / W.scaleX) + W.x, l.dragMouseY = Math.round(e.stageY / W.scaleY) + W.y;
						var t = "id" + Math.abs(e.pointerID + 1);
						if (l.pointers[t] = !0, _ = m ? e.currentTarget : e.target, !l.zimBoundary || _.getBounds()) {
							if (F = !0, l.stage.mouseMoveOutside = !0, u || (l.zimDragTicker && oo.Ticker.remove(l.zimDragTicker), l.zimDragTicker = oo.Ticker.add(function() {}, W)), g && createjs.Tween.removeTweens(_), _.parent) {
								if (i) {
									var o = _.parent.numChildren - 1;
									"Keyboard" == _.parent.getChildAt(o).type && o--, _.parent.setChildIndex(_, o), _.ZIMoutlineShape && _.outline()
								}
								if (_.parent == l.stage) var n = new oo.Point(e.stageX / W.scaleX, e.stageY / W.scaleY);
								else n = _.parent.globalToLocal(e.stageX / W.scaleX, e.stageY / W.scaleY);
								h && (_.x = n.x, _.y = n.y), L = n.x - _.x, D = n.y - _.y, l.zimBoundary && (a ? (X = oo.boundsToGlobal(_.parent, l.zimBoundary), c && (R = l.zimBoundary)) : (X = l.zimBoundary, c && (R = oo.boundsToGlobal(_.parent, l.zimBoundary, !0)))), l.cursor = zot(r) ? "pointer" : r, u && (l.slideStartX = l.x, l.slideStartY = l.y, j = !1, x = 0, k = [n.x], T = [n.y], O = E = -1e4, l.zimDragMoving = !0), "Pen" == l.type && (l.zimDragCheck = !0, G = !1)
							}
						} else zog("zim.drag() - drag object needs bounds set")
					}
				}, !0), l.zimMove = l.on("pressmove", function(e) {
					if (F) {
						var t = (z ? e.rawX : e.stageX) + W.x,
							o = (z ? e.rawY : e.stageY) + W.y;
						l.dragMouseX = Math.round(t / W.scaleX), l.dragMouseY = Math.round(o / W.scaleY), N(_, t / W.scaleX, o / W.scaleY), _.ZIMoutlineShape && _.outline(), "Pen" == l.type && !G && l.drawing ? G = !0 : "Tag" != l.type && "TextArea" != l.type && "Loader" != l.type || l.resize()
					}
				}, !0), l.zimPosition = N, l.zimUp = l.on("pressup", function(e) {
					var t = "id" + Math.abs(e.pointerID + 1);
					if (delete l.pointers[t], F) {
						if (l.cursor = zot(s) ? "pointer" : s, u) {
							if (_.parent) var o = z ? e.rawX : e.stageX,
								n = z ? e.rawY : e.stageY,
								r = _.parent.globalToLocal(o / W.scaleX, n / W.scaleY);
							else r = new oo.Point(0, 0);
							F = !1, A = r.x, P = r.y, B = _.x, I = _.y, y.immediate(_.x), w.immediate(_.y)
						} else {
							var i = 0;
							for (var a in l.pointers) i++;
							0 == i && oo.Ticker.remove(l.zimDragTicker), "Pen" == l.type && (l.zimDragCheck = !1, G && l.stopCheck())
						}
						l.stage && l.stage.update()
					}
				}, !0), l
			}

			function H() {
				l.off("added", l.zimAdded), D = L = 0, l.zimBoundary && (a ? (X = oo.boundsToGlobal(l.parent, l.zimBoundary), c && (R = l.zimBoundary)) : (X = l.zimBoundary, c && (R = oo.boundsToGlobal(l.parent, l.zimBoundary, !0)))), X && p && (Y = l.parent.localToGlobal(l.x, l.y), N(l, Y.x, Y.y)), u && setTimeout(function() {
					y = new oo.Damp(l.x, n), w = new oo.Damp(l.y, n), l.zimDragImmediate = function(e, t) {
							I = t, A = S = P = M = 0, zot(B = e) || y.immediate(e), zot(t) || w.immediate(t)
						}, C = 3, x = 0, k = [], T = [], A = l.x, P = l.y, B = l.x, I = l.y, S = l.x, M = l.y, O = E = -1e4, l.zimDragMoving = !0,
						function() {
							var e = l.stage;

							function r(e, t, o, n, r) {
								Math.abs(e.x - E) < .1 && Math.abs(e.y - O) < .1 ? (l.zimDragMoving = !1, e.x = n, e.y = r, e.slideStartX = null, e.slideStartY = null, j && e.dispatchEvent("slidestop"), "Pen" == l.type && (l.zimDragCheck = !1, G && l.stopCheck())) : (E = t, O = o)
							}
							l.zimDragTicker = function() {
								if (!zot(l.slideStartX))
									if (_ = _ || l, F) {
										if (_.parent) var e = _.parent.globalToLocal(l.dragMouseX, l.dragMouseY);
										else e = new oo.Point(0, 0);
										x++, k.push(e.x), T.push(e.y), M = C <= x ? (S = k.shift(), T.shift()) : (S = k[0], T[0])
									} else {
										if (!l.zimDragMoving) return;
										var t = B + A - S,
											o = I + P - M;
										if (X) t = (n = V(_, t, o)).x, o = n.y;
										if (d) _.x = y.convert(t), _.y = w.convert(o), r(_, _.x, _.y, t, o);
										else {
											var n = V(_, y.convert(t), w.convert(o));
											_.x = n.x, _.y = n.y, r(_, _.x, _.y, _.x, _.y)
										}
									}
							}, oo.Ticker.add(l.zimDragTicker, e)
						}()
				}, 50), zot(l.zimMaskDynamic) || l.zimMaskApply()
			}

			function N(e, t, o) {
				if (zot(e) && (e = _ || l), e.parent) {
					if (zot(t) || zot(o)) {
						var n = e.parent.localToGlobal(e.x, e.y);
						L = D = 0, l.zimBoundary && (a ? (X = oo.boundsToGlobal(e.parent, l.zimBoundary), c && (R = e.zimBoundary)) : (X = l.zimBoundary, c && (R = oo.boundsToGlobal(e.parent, l.zimBoundary, !0)))), t = n.x, o = n.y, u && (B = e.x, I = e.y, _ = e, y && y.immediate(B), w && w.immediate(I))
					}
					var r, i = e.parent.globalToLocal(t, o);
					u && d ? "vertical" == d ? (r = V(e, i.x - L, i.y - D), e.x = r.x, e.y = i.y - D) : "horizontal" == d ? (r = V(e, i.x - L, i.y - D), e.x = i.x - L, e.y = r.y) : (e.x = i.x - L, e.y = i.y - D) : (r = V(e, i.x - L, i.y - D), e.x = r.x, e.y = r.y), !u || j || e.slideStartX == e.x && e.slideStartY == e.y || (j = !0)
				}
			}

			function V(e, t, o) {
				if (!e.parent) return {
					x: t,
					y: o
				};
				if (X)
					if (c) {
						var n = e.getBounds().width,
							r = e.getBounds().height,
							i = e.getBounds().x,
							a = e.getBounds().y;
						n < R.width ? t = R.x + (R.width - n) / 2 + (e.regX - i) : (t - (e.regX - i) > R.x && (t = R.x + (e.regX - i)), t - (e.regX - i) + n < R.x + R.width && (t = R.x + R.width + (e.regX - i) - n)), e.height < R.height ? o = R.y + (R.height - r) / 2 + (e.regY - a) : (o - (e.regY - a) > R.y && (o = R.y + (e.regY - a)), o - (e.regY - a) + r < R.y + R.height && (o = R.y + R.height + (e.regY - a) - r))
					} else {
						var l = e.parent.localToGlobal(t, o);
						t = Math.max(X.x, Math.min(X.x + X.width, l.x)), o = Math.max(X.y, Math.min(X.y + X.height, l.y)), t = (l = e.parent.globalToLocal(t, o)).x, o = l.y
					}
				return {
					x: t,
					y: o
				}
			}
		}, oo.noDrag = function(e) {
			if (z_d("32"), !zot(e) && e.on) return e.cursor = "default", oo.setSwipe(e, !0), e.off("added", e.zimAdded), e.off("removed", e.zimRemoved), e.off("mousedown", e.zimDown), e.off("pressmove", e.zimMove), e.off("pressup", e.zimUp), oo.Ticker && e.zimDragSlide && oo.Ticker.remove(e.zimDragSlide), e.zimDragMoving = e.zimAdded = e.zimRemoved = e.zimDown = e.zimMove = e.zimUp = e.zimBoundary = e.zimDragSlide = null, e
		}, oo.dragBoundary = function(e, t, o) {
			if (z_d("33"), !zot(e) && e.on && !zot(t)) return e.zimBoundary = t, e.zimDragMoving = !0, e.zimPosition && e.zimPosition(), e
		}, oo.dragRect = oo.dragBoundary, oo.transform = function(l, t, e, o, n, r, i, a, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P) {
			var B;
			if (B = zob(oo.transform, arguments, "obj, move, stretchX, stretchY, scale, rotate, allowToggle, visible, onTop, showStretch, showRotate, showScale, showReg, showBorder, borderColor, borderWidth, dashed, customCursors, handleSize, regSize, snapDistance, snapRotation, cache, events, ghostColor, ghostWidth, ghostDashed, ghostHidden")) return B;
			if (z_d("33.5"), zot(l) || !l.getBounds) return zog("zim methods - transform(): please provide object with bounds set"), l;
			if (!l.getBounds()) return zog("zim methods - transform(): please setBounds() on object"), l;
			if (!l.parent) return zog("zim methods - transform(): object should be on stage first"), l;
			zot(t) && (t = !0), zot(e) && (e = !0), zot(o) && (o = !0), zot(n) && (n = !0), zot(r) && (r = !0);
			var I = oo.mobile();
			zot(i) && (i = !0), zot(a) && (a = !0), zot(s) && (s = !0), zot(c) && (c = !!I), zot(u) && (u = !!I), zot(d) && (d = !0), zot(h) && (h = !0), zot(g) && (g = !0), zot(p) && (p = "brown"), zot(f) && (f = 1), zot(k) && (k = null), zot(T) && (T = null), k < 0 || T < 0 ? k = T = null : null != k && null == T && (T = 1), zot(A) && (A = !0), zot(P) && (P = !1), zot(z) && (z = !I), zot(v) && (v = oo.mobile() ? 20 : 10), zot(b) && (b = 16), zot(y) && (y = 10), zot(w) && (w = 5), zot(C) && (C = !0), zot(x) && (x = !1), l.mouseChildren = !1;
			var S = l.getConcatenatedMatrix().decompose();
			if (void 0 === zimDefaultFrame)
				if ("undefined" == typeof frame || null == frame) {
					if (!l.stage) return zon && zog("ZIM transform() - please add object to stage before calling transform()"), l;
					frame = zimDefaultFrame = {
						stage: M,
						canvas: M.canvas
					}
				} else zimDefaultFrame = frame;
			else "undefined" != typeof frame && null != frame || (frame = zimDefaultFrame);
			zot(l.stage) && l.added(function() {
				l.transformControls && l.transformControls.resize()
			});
			var M = l.stage ? l.stage : frame.stage;
			zot(frame.eventRemove) && (M.enableMouseOver(), frame.ctrlKey = !1, frame.shiftKey = !1, window.addEventListener("keydown", function(e) {
				frame.altKey = e.altKey, frame.ctrlKey = e.ctrlKey
			}), window.addEventListener("keyup", function(e) {
				frame.altKey = e.altKey, frame.ctrlKey = e.ctrlKey
			}));
			var E = l.getBounds(),
				O = new oo.Shape({
					style: !1
				}),
				j = new oo.Shape({
					style: !1
				}),
				L = new oo.Shape({
					style: !1
				});
			j.mouseEnabled = !1, L.controlType = "reg";
			var D, Y, X, R, _, W, F, G = l.parent,
				H = O.graphics,
				N = j.graphics,
				V = L.graphics,
				q = new oo.Container({
					style: !1
				});
			q.type = "TransformControls";
			var K, U, Z, Q, J, $ = new oo.Container({
					style: !1
				}),
				ee = new oo.Container({
					style: !1
				}),
				te = new oo.Container({
					style: !1
				}),
				oe = new oo.Container({
					style: !1
				});
			if (zot(l.zimMaskDynamic) || l.zimMaskApply(), z) {
				var ne = new oo.Container({
						style: !1
					}),
					re = new oo.Container({
						style: !1
					});

				function ie(e) {
					e == ne && new oo.Triangle(16, 12, 12, "white").addTo(e).mov(0, -13.5), new oo.Triangle(16, 12, 12, "white").addTo(e).mov(13.5).rot(90), e == ne && new oo.Triangle(16, 12, 12, "white").addTo(e).mov(0, 13.5).rot(180), new oo.Triangle(16, 12, 12, "white").addTo(e).mov(-13.5).rot(-90), e == ne && new oo.Triangle(10, 7, 7, "black").addTo(e).mov(0, -13), new oo.Triangle(10, 7, 7, "black").addTo(e).mov(13).rot(90), e == ne && new oo.Triangle(10, 7, 7, "black").addTo(e).mov(0, 13).rot(180), new oo.Triangle(10, 7, 7, "black").addTo(e).mov(-13).rot(-90), C && e.cache(-20, -20, 40, 40)
				}
				ie(ne), ie(re);
				var ae = {
					"nw-resize": 45,
					"ne-resize": -45,
					"n-resize": 90,
					"e-resize": 0
				}
			}

			function le() {
				var e = l;
				for (Z = U = 1, J = Q = K = 0; e.parent;) K += e.rotation, U *= e.scaleX, Z *= e.scaleY, Q += e.skewX, J += e.skewY, e = e.parent
			}
			le();
			for (var se = K, ce = ["nw-resize", "ne-resize", "nw-resize", "ne-resize"], ue = [2, 3, 0, 1], de = 0; de < 4; de++) {
				if (d)(ze = new oo.Rectangle(v, v, "#e472c4", "#333", 2, null, null, null, !1)).centerReg($), C && ze.cache(-1, -1, v + 2, v + 2);
				else(ze = new oo.Rectangle(v, v, "rgba(0,0,0,0)", "rgba(0,0,0,0)", 2, null, null, null, !1)).centerReg($), ze.expand(0);
				ze.rotation = K, W = z ? "none" : ce[de], ze.drag({
					overCursor: W,
					dragCursor: W,
					onTop: !1
				}), ze.controlType = "corner", ze.cu = ce[de]
			}
			for (de = 0; de < ue.length; de++) $.getChildAt(de).op = $.getChildAt(ue[de]);
			var he = ["n-resize", "e-resize", "n-resize", "e-resize"];
			ue = [1, 1, 0, 0];
			for (de = 0; de < 4; de++) {
				var ge = de % 2 == 0 ? l.width / 2 : v,
					pe = de % 2 == 0 ? v : l.height / 2;
				if (c)(ze = new oo.Rectangle(v, v, "#AAA", "#333", 2, null, null, null, !1)).centerReg(de % 2 == 0 ? te : ee), C && ze.cache(-1, -1, v + 2, v + 2);
				else(ze = new oo.Rectangle(ge, pe, "rgba(0,0,0,0)", null, null, null, null, null, !1)).centerReg(de % 2 == 0 ? te : ee), ze.expand(0);
				ze.rotation = K, W = z ? "none" : he[de], ze.drag({
					overCursor: W,
					dragCursor: W,
					onTop: !1
				}), ze.controlType = "side", ze.cu = he[de]
			}
			for (de = 0; de < ue.length; de++) {
				var fe = de % 2 == 0 ? te : ee;
				fe.getChildAt(Math.floor(de / 2)).op = fe.getChildAt(ue[de])
			}
			var me = ["ne-resize", "nw-resize", "ne-resize", "nw-resize"];
			for (de = 0; de < 4; de++) {
				var ze;
				if (u)(ze = new oo.Circle(v, "#e472c4", null, null, null, null, null, !1)).addTo(oe), C && ze.cache(-v, -v, 2 * v, 2 * v);
				else(ze = new oo.Circle(v, "rgba(0,0,0,0)", null, null, null, null, null, !1)).addTo(oe), ze.expand(0);
				W = z ? "none" : me[de], ze.drag({
					overCursor: W,
					dragCursor: W,
					onTop: !1
				}), ze.controlType = "rotate", ze.cu = me[de]
			}
			var ve = 1.8;

			function be() {
				var e = v * ve * oo.sign(U),
					t = v * ve * oo.sign(Z);
				oe.getChildAt(0).reg(e, t), oe.getChildAt(1).reg(-e, t), oe.getChildAt(2).reg(-e, -t), oe.getChildAt(3).reg(e, -t), M.update()
			}

			function ye() {
				H.c(), N.c(), V.c(), D = l.localToGlobal(E.x, E.y), Y = l.localToGlobal(E.x + E.width, E.y), X = l.localToGlobal(E.x + E.width, E.y + E.height), R = l.localToGlobal(E.x, E.y + E.height), pTM = l.localToGlobal(E.x + E.width / 2, E.y), pRM = l.localToGlobal(E.x + E.width, E.y + E.height / 2), pBM = l.localToGlobal(E.x + E.width / 2, E.y + E.height), pLM = l.localToGlobal(E.x, E.y + E.height / 2), _ = l.localToGlobal(l.regX, l.regY), pMid = l.localToGlobal(E.x + E.width / 2, E.y + E.height / 2), F = [D, Y, X, R], mids = [pTM, pRM, pBM, pLM], g && (H.s(p), m && H.sd([10, 5], 0), H.ss(f).mt(D.x, D.y).lt(Y.x, Y.y).lt(X.x, X.y).lt(R.x, R.y).lt(D.x, D.y).cp()), zot(k) || (N.s(k), A && N.sd([10, 5], 0), N.ss(T).mt(D.x, D.y).lt(Y.x, Y.y).lt(X.x, X.y).lt(R.x, R.y).lt(D.x, D.y).cp()), O.setBounds(D.x, D.y, Y.x - D.x, R.y - D.y), h && (V.s("#eee").ss(f).f("rgba(0,0,0,.1)").dc(0, 0, b), V.s("#222").ss(f).dc(0, 0, .3 * b)), le();
				for (var e = Math.min(50, Math.abs(Q)) * oo.sign(Q), t = Math.min(50, Math.abs(J)) * oo.sign(J), o = K * oo.sign(U * Z) * oo.sign(l.scaleX * l.scaleY), n = 0; n < F.length; n++) {
					var r = F[n];
					$.getChildAt(n).loc(r.x, r.y).ske(e, t).rot(o), oe.getChildAt(n).loc(r.x, r.y).rot(o);
					var i = mids[n],
						a = n % 2 == 0 ? te : ee;
					a.getChildAt(Math.floor(n / 2)).loc(i.x, i.y).ske(e, t).rot(o), c || a.getChildAt(Math.floor(n / 2)).sca(n % 2 == 0 ? U / 2 : 1, n % 2 == 0 ? 1 : Z / 2)
				}
				L.x = _.x, L.y = _.y
			}
			oe.alpha = .5, be(), ye();
			var we = new oo.Shape(1e3, 1e3, null, null, null, !1);

			function Ce() {
				we.x = 0, we.y = 0, we.graphics.c().f("rgba(0,0,0,.01)").mt(D.x, D.y).lt(Y.x, Y.y).lt(X.x, X.y).lt(R.x, R.y).lt(D.x, D.y).cp(), we.reg(_.x, _.y), we.x = _.x, we.y = _.y
			}
			Ce(), q.on("dblclick", function(e) {
				frame.ctrlKey && l.transformControls.visible && (l.scaleX = 1, l.scaleY = 1, l.rotation = 0, ye(), Ce(), M.update()), Ke(e, !0)
			});
			var xe = q.on("mousedown", Te),
				ke = l.on("mousedown", Te);

			function Te(e) {
				var t = M.getObjectUnderPoint(e.stageX, e.stageY, 1);
				oo.mobile() || t && (l.contains && l.contains(t) || !l.contains && l == t) ? l.transformControls.visible || (z ? (et = !1, we.mouseEnabled = !1) : frame.canvas.style.cursor = "move", l.transformControls.show(), l.dispatchEvent("transformshow")) : !l.transformControls.visible || t && q.contains(t) || (l.transformControls.hide(), l.dispatchEvent("transformhide"))
			}
			var Ae, Pe, Be, Ie, Se, Me, Ee, Oe, je, Le, De, Ye = M.on("stagemousedown", function(e) {
				var t = M.getObjectUnderPoint(e.stageX, e.stageY, 1),
					o = t && t.parent && t.parent.layer && t.parent.layer == l;
				!l.transformControls.visible || t && (q.contains(t) || o) || (l.dispatchEvent("transformhide"), l.transformControls.hide())
			});
			i || (q.off("mousedown", xe), l.off("mousedown", ke), M.off("stagemousedown", Ye));
			var Xe, Re, _e, We = !1,
				Fe = !1,
				Ge = l.cursor,
				He = new oo.Circle(30, "rgba(0,0,0,0)", null, null, null, null, null, !1).expand(20);
			if (z) {
				He.mouseEnabled = !1, He.mouseChildren = !1, He.addChild(re), $.on("mouseover", Ze), $.on("mouseout", Qe), ee.on("mouseover", Ze), ee.on("mouseout", Qe), te.on("mouseover", Ze), te.on("mouseout", Qe), oe.on("mouseover", Ze), oe.on("mouseout", Qe);
				var Ne = new oo.Circle(30, "rgba(0,0,0,0)", null, null, null, null, null, !1).expand(20);
				Ne.cursor = "none"
			}

			function Ve(e) {
				if (Fe = !0, s && Je(), Xe && M.off("stagemousemove", Xe), Ae = e.target.x, Pe = e.target.y, Oe = l.x, je = l.y, startSX = l.scaleX, startSY = l.scaleY, "rotate" == e.target.controlType) {
					We = !0, Be = l.rotation;
					var t = e.stageX / M.scaleX,
						o = e.stageY / M.scaleY,
						n = G.localToGlobal(Oe, je);
					Le = n.x, De = n.y, Ie = 180 * Math.atan2(o - De, t - Le) / Math.PI
				}
				Me = frame.ctrlKey || "rotate" == e.target.controlType ? (Se = Math.abs(Ae - l.x), Math.abs(Pe - l.y)) : (Se = Math.abs(Ae - e.target.op.x), Math.abs(Pe - e.target.op.y)), cornerPointObj = e.target.op, "rotate" != e.target.controlType && (Ee = e.target.op.parent.localToLocal(e.target.op.x, e.target.op.y, l.parent)), He.stage ? M.setChildIndex(He, M.getChildIndex(q)) : He.addTo(M, M.getChildIndex(q) + 1), He.x = e.stageX / M.scaleX, He.y = e.stageY / M.scaleY, He.cursor = z ? "none" : e.target.cu, z && (l.getConcatenatedMatrix().decompose(S), S.rotation || (S.rotation = 0), re.rotation = S.rotation * oo.sign(U * Z) * oo.sign(l.scaleX * l.scaleY) + ae[e.target.cu] + se, "side" != e.target.controlType && U * Z < 0 && (re.rotation += 90), Ne.addTo(M, 1).pos({
					x: e.stageX / M.scaleX,
					y: e.stageY / M.scaleY,
					reg: !0
				})), we.visible = !1, l.cursor = "none"
			}

			function qe(e) {
				var t;
				if (t = frame.ctrlKey && "corner" == e.target.controlType ? Me < Se ? (e.target.x - Oe) / (Ae - Oe) : (e.target.y - je) / (Pe - je) : Me < Se ? (e.target.x - e.target.op.x) / (Ae - e.target.op.x) : (e.target.y - e.target.op.y) / (Pe - e.target.op.y), "corner" == e.target.controlType ? (l.scaleX = t * startSX, l.scaleY = t * startSY) : (l.scaleX = "e-resize" == e.target.cu ? t * startSX : startSX, l.scaleY = "n-resize" == e.target.cu ? t * startSY : startSY), ye(), He.x = e.stageX / M.scaleX, He.y = e.stageY / M.scaleY, z && (Ne.x = e.stageX / M.scaleX, Ne.y = e.stageY / M.scaleY), !frame.ctrlKey || "side" == e.target.controlType) {
					var o = e.target.op.parent.localToLocal(e.target.op.x, e.target.op.y, l.parent);
					l.x -= (o.x - Ee.x) * oo.sign(U) * oo.sign(l.scaleX), l.y -= (o.y - Ee.y) * oo.sign(Z) * oo.sign(l.scaleY)
				}
				ye(), l.transformControls.events && Ue(e, e.target.controlType)
			}

			function Ke(e, t) {
				be();
				var o = e ? e.target.controlType : "move";
				t && (o = "reset"), z && Ne.removeFrom(M), Ue(e, o, !0), M.update()
			}

			function Ue(e, t, o, n) {
				null == n && (n = !0);
				var r = !1;
				_e = null, "move" == t ? (l.x == tt.x && l.y == tt.y || ((_e = new createjs.Event("transformed")).transformType = "move"), n && (r = we.hitTestPoint(e.stageX / M.scaleX, e.stageY / M.scaleY))) : "corner" == t ? (l.scaleX == tt.scaleX && l.scaleY == tt.scaleY || ((_e = new createjs.Event("transformed")).transformType = "size"), n && (r = $.hitTestPoint(e.stageX / M.scaleX, e.stageY / M.scaleY))) : "side" == t ? (l.scaleX == tt.scaleX && l.scaleY == tt.scaleY || ((_e = new createjs.Event("transformed")).transformType = "stretch"), n && (r = ee.hitTestPoint(e.stageX / M.scaleX, e.stageY / M.scaleY) || te.hitTestPoint(e.stageX / M.scaleX, e.stageY / M.scaleY))) : "rotate" == t ? (l.rotation != tt.rotation && ((_e = new createjs.Event("transformed")).transformType = "rotate"), n && (r = oe.hitTestPoint(e.stageX / M.scaleX, e.stageY / M.scaleY))) : "reg" == t ? l.regX == tt.regX && l.regY == tt.regY || ((_e = new createjs.Event("transformed")).transformType = "reg") : (_e = new createjs.Event("transformed")).transformType = "reset" == t ? "reset" : "unknown", n && !r && (He.removeFrom(M), frame.canvas.style.cursor = "default", l.cursor = Ge), _e && (_e.pressup = o, l.dispatchEvent(_e))
			}

			function Ze(e) {
				Fe || (He.stage ? M.setChildIndex(He, M.getChildIndex(q)) : He.addTo(M, M.getChildIndex(q) + 1), Ne.addTo(M, 1), He.x = e.stageX / M.scaleX, He.y = e.stageY / M.scaleY, Ne.x = e.stageX / M.scaleX, Ne.y = e.stageY / M.scaleY, l.getConcatenatedMatrix().decompose(S), S.rotation || (S.rotation = 0), re.rotation = S.rotation * oo.sign(U * Z) * oo.sign(l.scaleX * l.scaleY) + ae[e.target.cu] + se, "side" != e.target.controlType && U * Z < 0 && (re.rotation += 90), M.update(), Xe && M.off("stagemousemove", Xe), Xe = M.on("stagemousemove", function(e) {
					He.x = e.stageX / M.scaleX, He.y = e.stageY / M.scaleY, M.update()
				}))
			}

			function Qe(e) {
				M.off("stagemousemove", Xe), Fe || (l.cursor = Ge, He.removeFrom(M), Ne.removeFrom(M), M.update())
			}

			function Je() {
				if (s) {
					var e = G.numChildren - 1;
					"Keyboard" == G.getChildAt(e).type && e--, G.setChildIndex(l, e), $e()
				}
			}

			function $e() {
				if (G == M) q.removeFrom(), M.addChildAt(q, M.getChildIndex(l) + 1);
				else {
					for (var e = G; e.parent && e.parent != M;) e = e.parent;
					l.stage && (q.parent == M && M.removeChild(q), M.addChildAt(q, M.getChildIndex(e) + 1))
				}
			}
			$.on("mousedown", Ve), $.on("pressmove", qe), $.on("pressup", Ke), ee.on("mousedown", Ve), ee.on("pressmove", qe), ee.on("pressup", Ke), te.on("mousedown", Ve), te.on("pressmove", qe), te.on("pressup", Ke), oe.on("mousedown", Ve), oe.on("pressmove", function(e) {
				var t = 180 * Math.atan2(e.stageY / M.scaleY - De, e.stageX / M.scaleX - Le) / Math.PI;
				frame.shiftKey ? l.rot(45 * Math.round((Be + (t - Ie) * oo.sign(U) * oo.sign(l.scaleX)) / 45)) : l.rot(Be + (t - Ie) * oo.sign(U) * oo.sign(l.scaleX));
				ye(), He.x = e.stageX / M.scaleX, He.y = e.stageY / M.scaleY, z && (l.getConcatenatedMatrix().decompose(S), S.rotation || (S.rotation = 0), re.rotation = S.rotation * oo.sign(U * Z) * oo.sign(l.scaleX * l.scaleY) + ae[e.target.cu] + se, "side" != e.target.controlType && U * Z < 0 && (re.rotation += 90), Ne.x = e.stageX / M.scaleX, Ne.y = e.stageY / M.scaleY);
				if (ye(), l.transformControls.events) {
					var o = e.target.controlType;
					Ue(e, o, null, !1)
				}
			}), oe.on("pressup", Ke), L.drag(), L.on("mousedown", Je), L.on("pressup", function(e) {
				if (!frame.ctrlKey) {
					for (var t = 0; t < F.length; t++)
						if (oo.dist(L.x, L.y, F[t].x, F[t].y) < y) {
							L.x = F[t].x, L.y = F[t].y;
							break
						}
					oo.dist(L.x, L.y, pMid.x, pMid.y) < y && (L.x = pMid.x, L.y = pMid.y)
				}
				var o = l.rotation,
					n = l.globalToLocal(L.x, L.y);
				if (G == M) var r = new oo.Point(L.x, L.y);
				else r = G.globalToLocal(L.x, L.y);
				l.reg(n.x, n.y), l.rotation = 0, l.x = l.x + r.x - l.x, l.y = l.y + r.y - l.y, l.rotation = o, ye(), Ce(), Ke(e), M.update()
			});
			var et = !0;
			W = z ? "none" : "move", we.drag({
				overCursor: W,
				dragCursor: W,
				onTop: !1
			}), we.controlType = "move", z && (we.on("mouseover", function(e) {
				if (Fe || !z || !et) return;
				ne.addTo(q).pos({
					x: e.stageX / M.scaleX,
					y: e.stageY / M.scaleY,
					reg: !0
				}), M.update(), Re && M.off("stagemousemove", Re);
				Re = M.on("stagemousemove", function(e) {
					ne.x = e.stageX / M.scaleX, ne.y = e.stageY / M.scaleY, M.update()
				})
			}), we.on("mouseout", function() {
				if (M.off("stagemousemove", Re), Fe) return;
				ne.removeFrom(q), M.update()
			})), we.on("mousedown", Je), we.on("pressmove", function(e) {
				if (l.transformControls.visible) {
					if (G == M) var t = new oo.Point(we.x, we.y);
					else t = G.globalToLocal(we.x, we.y);
					if (l.x = t.x, l.y = t.y, ye(), l.transformControls.events) {
						Ue(e, "move")
					}
				}
			}), we.on("pressup", function(e) {
				l.transformControls.visible && Ke(e)
			});
			var tt, ot = M.on("stagemouseup", function() {
				Fe = !1, we.mouseEnabled = !0, et || (_e = new createjs.Event("transformed"), l.x != tt.x || l.y != tt.y ? _e.transformType = "move" : _e.transformType = "select", _e.pressup = !0, l.dispatchEvent(_e)), et = !0, we.visible = !0, We && !frame.ctrlKey && 1 < w && (l.rotation = Math.round(l.rotation / w) * w, ye()), Ce(), we.mouseEnabled = !0, We = !1, M.update()
			});

			function nt() {
				tt = {
					x: l.x,
					y: l.y,
					rotation: l.rotation,
					regX: l.regX,
					regY: l.regY,
					scaleX: l.scaleX,
					scaleY: l.scaleY
				}
			}
			nt();
			var rt, it = l.on("mousedown", nt);
			q.on("mousedown", nt);
			q.addChild(O), t && q.addChild(we), n && q.addChild($), e && q.addChild(ee), o && q.addChild(te), r && q.addChild(oe), q.addChild(L), t && (l.drag({
				overCursor: "pointer",
				dragCursor: "pointer",
				onTop: !1,
				removeTweens: !1
			}), rt = l.on("pressmove", function() {
				ye(), Ce(), be()
			}));
			var at = i;
			return l.transformControls = {
				visible: a,
				events: x,
				ghost: !zot(k),
				ghostEnabled: !zot(k),
				show: function() {
					return s && Je(), $e(), l.toggled = !0, l.transformControls.visible = !0, j.parent && j.removeFrom(), M.update(), l
				},
				hide: function() {
					if (l.transformControls.ghost) var e = M.getChildIndex(q);
					return M.removeChild(q), l.transformControls.ghost && l.transformControls.ghostEnabled && M.addChildAt(j, e), l.toggled = !1, l.transformControls.visible = !1, z && (Xe && M.off("stagemousemove", Xe), Re && M.off("stagemousemove", Re), Fe = !1, He.removeFrom(M), Ne.removeFrom(M)), t || (l.cursor = Ge), M.update(), l
				},
				remove: function(e) {
					e || l.transformControls.hide(), toggle = !1, t && (l.noDrag(), l.off("pressmove", rt))
				},
				add: function(e) {
					e || l.transformControls.show(), toggle = at, t && (l.drag({
						overCursor: "pointer",
						dragCursor: "pointer",
						onTop: !1,
						removeTweens: !1
					}), rt = l.on("pressmove", rt))
				},
				allowToggleOn: function() {
					toggle = at = !0, xe = q.on("mousedown", xe), ke = l.on("mousedown", ke), Ye = M.on("stagemousedown", Ye)
				},
				allowToggleOff: function() {
					toggle = at = !1, q.off("mousedown", xe), l.off("mousedown", ke), M.off("stagemousedown", Ye)
				},
				disable: function() {
					q.mouseChildren = !1, q.mouseEnabled = !1, t && (l.noDrag(), l.off("pressmove", rt))
				},
				enable: function() {
					q.mouseChildren = !0, q.mouseEnabled = !0, t && (l.drag({
						overCursor: "pointer",
						dragCursor: "pointer",
						onTop: !1,
						removeTweens: !1
					}), rt = l.on("pressmove", rt))
				},
				recordData: function(e) {
					var t = {
						type: l.type,
						index: G.getChildIndex(l),
						x: l.x,
						y: l.y,
						scaleX: l.scaleX,
						scaleY: l.scaleY,
						rotation: l.rotation,
						skewX: l.skewX,
						skewY: l.skewY,
						regX: l.regX,
						regY: l.regY,
						controls: l.transformControls.visible
					};
					return e ? JSON.stringify(t) : t
				},
				setData: function(e, t) {
					if (!zot(e)) {
						t && (e = JSON.parse(e));
						e.controls;
						delete e.controls;
						var o = e.index;
						for (var n in zot(o) && (o = 0), delete e.index, e) l[n] = e[n];
						return timeout(90, function() {
							ye(), Ce(), be(), G.setChildIndex(l, o), l.transformControls.visible && "Layer" != l.type ? l.transformControls.show() : l.transformControls.hide(), !l.transformControls.ghost || l.transformControls.ghostEnabled || l.transformControls.visible || M.addChild(j)
						}), l
					}
				},
				hideGhost: function() {
					l.transformControls.ghost = !1, j.removeFrom()
				},
				showGhost: function() {
					if (l.transformControls.ghost = !0, l.transformControls.ghostEnabled && !l.transformControls.visible) {
						for (var e = G; e.parent && e.parent != M;) e = e.parent;
						j.stage ? M.setChildIndex(j, M.getChildIndex(e) + 1) : M.addChildAt(j, M.getChildIndex(e) + 1)
					}
				},
				addGhost: function() {
					0 < T ? (l.transformControls.ghostEnabled = !0, l.transformControls.showGhost()) : zon && zog("ZIM transform() - ghostWidth must be > 0 when making transform")
				},
				removeGhost: function() {
					l.transformControls.ghostEnabled = !1, l.transformControls.hideGhost()
				},
				resize: function(e) {
					if (G = l.parent, ye(), Ce(), be(), a && l.transformControls.show(), e) {
						var t = new createjs.Event("transformed");
						t.pressup = !0, t.transformType = "resize", l.dispatchEvent(t)
					}
					return l
				},
				dispose: function() {
					l.transformControls.hide(), toggle = !1, t && (l.noDrag(), l.off("pressmove", rt)), q.removeAllEventListeners(), ke && l.off("mousedown", ke), xe && l.off("mousedown", xe), Ye && M.off("stagemousedown", Ye), Xe && M.off("stagemousemove", Xe), Re && M.off("stagemousemove", Re), ot && M.off("stagemouseup", ot), it && l.off("mousedown", it), rt && l.off("pressmove", rt), q = He = Ne = null, l.transformControls = null
				},
				controls: q,
				scaleControls: $,
				stretchXControls: ee,
				stretchYControls: te,
				rotateControls: oe
			}, l.toggle = function(e) {
				return !0 === e ? l.transformControls.show() : !1 === e ? l.transformControls.hide() : l.transformControls.visible ? l.transformControls.hide() : l.transformControls.show(), l
			}, l.transformControls.ghost && (l.transformControls.toggleGhost = function(e) {
				return !0 === e ? l.transformControls.showGhost() : !1 === e ? l.transformControls.hideGhost() : l.transformControls.visible ? l.transformControls.hideGhost() : l.transformControls.showGhost(), l
			}), a ? l.transformControls.show() : !P && l.transformControls.ghost && l.transformControls.showGhost(), l
		}, oo.gesture = function(k, e, t, s, o, T, A, c, n, u, d, P, i, r, a, l) {
			var h;
			if (h = zob(oo.gesture, arguments, "obj, move, scale, rotate, boundary, minScale, maxScale, snapRotate, localBounds, slide, slideEffect, regControl, onTop, surround, circularBounds, rect")) return h;
			if (z_d("34.5"), !zot(k) && k.on) {
				var g, p;
				if (zot(e) && (e = !0), zot(t) && (t = !0), zot(s) && (s = !0), zot(n) && (n = !1), zot(c) && (c = 1), zot(u) && (u = !1), zot(d) && (d = 5), zot(P) && (P = !1), zot(i) && (i = !0), zot(r) && (r = !1), r && s && (r = l = null, zon && zog("ZIM Gesture() - does not support surround when rotate is true")), zot(a) && (a = !1), zot(o) && !zot(l) && (o = l), zot(k.zimMaskDynamic) || k.zimMaskApply(), !k.zimTouch) {
					var B, I, S, M, E, O, j, f, L = new oo.Damp(k.scaleX, .05),
						D = new oo.Damp(k.scaleY, .05),
						Y = k.scaleX / k.scaleY;
					if (k.zimTouch = {
							move: e,
							scale: t,
							rotate: s,
							pointers: {},
							checkBounds: function(e, t) {
								if (k.zimTouch.boundary) {
									var o = k.zimTouch.boundary,
										n = k.parent.localToLocal(e, t, k.parent);
									t = r ? (e = Math.min(o.x, Math.max(o.x + o.width, n.x)), Math.min(o.y, Math.max(o.y + o.height, n.y))) : (e = Math.max(o.x, Math.min(o.x + o.width, n.x)), Math.max(o.y, Math.min(o.y + o.height, n.y))), e = (n = k.parent.globalToLocal(e, t)).x, t = n.y
								}
								return {
									x: e,
									y: t
								}
							}
						}, o) {
						k.zimTouch.boundary = o, n && (k.zimTouch.boundary = oo.boundsToGlobal(k.parent, o)), k.zimTouch.boundaryStartX = k.zimTouch.boundary.x, k.zimTouch.boundaryStartY = k.zimTouch.boundary.y, k.zimTouch.boundaryStartW = k.zimTouch.boundary.width, k.zimTouch.boundaryStartH = k.zimTouch.boundary.height;
						var m = k.zimTouch.checkBounds(k.x, k.y);
						k.x = m.x, k.y = m.y
					}
					u && (slideSlice = 10, slideTotal = 5, p = 0, g = [], k.zimTouch.slideInterval = oo.interval(slideSlice, function() {
						g[p++ % slideTotal] = [k.x, k.y]
					}), k.zimTouch.slideInterval.pause(), k.animate({
						x: k.x,
						y: k.y
					}, 10, "quadOut")), k.zimTouch.mousedown = k.on("mousedown", function(e) {
						zot(f) ? f = 1 : f++;
						var t = k.stage;
						if (i) {
							var o = k.parent.numChildren - 1;
							"Keyboard" == k.parent.getChildAt(o).type && o--, k.parent.setChildIndex(k, o), k.ZIMoutlineShape && k.outline()
						}
						P || (j = null, I = k.scaleX, S = k.scaleY, M = k.rotation, E = k.regX, O = k.regY, k.reg(0, 0), B = k.getMatrix(), k.regX = E, k.regY = O);
						var n = "id" + Math.abs(e.pointerID + 1),
							r = k.parent.globalToLocal(e.stageX / t.scaleX, e.stageY / t.scaleY);
						k.zimTouch.pointers[n] = {
							startX: r.x,
							startY: r.y,
							x: r.x,
							y: r.y
						}, (k.zimTouch.move || k.zimTouch.rotate) && (k.zimTouch.total = 0, oo.loop(k.zimTouch.pointers, function(e) {
							k.zimTouch.total++
						})), u && 1 == k.zimTouch.total && k.zimTouch.slideInterval.pause(!1), z()
					}), k.zimTouch.pressmove = k.on("pressmove", function(e) {
						var t = k.stage,
							o = "id" + Math.abs(e.pointerID + 1),
							n = k.parent.globalToLocal(e.stageX / t.scaleX, e.stageY / t.scaleY);
						k.zimTouch.pointers[o] && (k.zimTouch.pointers[o].x = n.x, k.zimTouch.pointers[o].y = n.y);
						var r, i, a = 0,
							l = 0,
							s = 0,
							c = 0;
						oo.loop(k.zimTouch.pointers, function(e, t) {
							a += t.x - t.startX, l += t.y - t.startY, s += t.x, c += t.y
						}), r = a / k.zimTouch.total, i = l / k.zimTouch.total, a = k.zimTouch.startX + r, l = k.zimTouch.startY + i, s /= k.zimTouch.total, c /= k.zimTouch.total;
						var u = {
							x: k.x,
							y: k.y,
							scaleX: k.scaleX,
							scaleY: k.scaleY,
							rotation: k.rotation
						};
						if (k.zimTouch.move) {
							var d = k.zimTouch.checkBounds(a, l);
							u.x = d.x, u.y = d.y
						}
						if (2 == k.zimTouch.pair.length) {
							var h = k.zimTouch.pair[0],
								g = k.zimTouch.pair[1];
							if (k.zimTouch.scale) {
								var p = Math.sqrt(Math.pow(g.startX - h.startX, 2) + Math.pow(g.startY - h.startY, 2)),
									f = Math.sqrt(Math.pow(g.x - h.x, 2) + Math.pow(g.y - h.y, 2)),
									m = k.zimTouch.startSX + (f / p - 1),
									z = k.zimTouch.startSY + (f / p - 1);
								u.scaleX = m, u.scaleY = z, u.scaleX = L.convert(m), u.scaleY = D.convert(z);
								var v = !zot(T) && Math.min(m, z) < T,
									b = !zot(A) && Math.max(m, z) > A;
								(v || b) && (v ? 1 < Y ? (u.scaleY = T, u.scaleX = T * Y) : (u.scaleX = T, u.scaleY = T / Y) : b && (1 < Y ? (u.scaleX = A, u.scaleY = A / Y) : (u.scaleY = A, u.scaleX = A * Y)), L.immediate(u.scaleX), D.immediate(u.scaleY))
							}
							if (k.zimTouch.rotate) {
								var y = Math.atan2(h.startY - g.startY, h.startX - g.startX) * (180 / Math.PI),
									w = Math.atan2(h.y - g.y, h.x - g.x) * (180 / Math.PI) - y;
								u.rotation = k.zimTouch.startR + w
							}
							if (P) k.scaleX = u.scaleX, k.scaleY = u.scaleY, k.rotation = u.rotation, k.zimTouch.move && (k.x = u.x, k.y = u.y);
							else {
								k.reg(0, 0);
								var C = k.parent.localToGlobal(s, c);
								s = C.x, c = C.y;
								var x = zot(j) ? k.globalToLocal(s, c) : k.globalToLocal(j.x, j.y);
								B.clone().translate(x.x, x.y).rotate(u.rotation - M).scale(u.scaleX / I, u.scaleY / S).translate(-x.x, -x.y).decompose(k), k.zimTouch.move && (k.x += r, k.y += i), j = k.localToGlobal(x.x, x.y), k.reg(E, O)
							}
							k.zimTouch.scale && k.dispatchEvent("scale"), k.zimTouch.rotate && k.dispatchEvent("rotate"), k.zimTouch.move && k.dispatchEvent("move")
						} else k.x = u.x, k.y = u.y, k.zimTouch.move && k.dispatchEvent("move");
						"Tag" != k.type && "TextArea" != k.type && "Loader" != k.type || k.resize(), k.ZIMoutlineShape && k.outline(), k.getStage && k.stage && k.stage.update()
					});

					function z() {
						k.zimTouch.pair = [], oo.loop(k.zimTouch.pointers, function(e, t, o) {
							t.startX = t.x, t.startY = t.y, o <= 1 && k.zimTouch.pair.push(t)
						}), k.zimTouch.startX = k.x, k.zimTouch.startY = k.y, k.zimTouch.startSX = k.scaleX, k.zimTouch.startSY = k.scaleY, k.zimTouch.startR = k.rotation
					}

					function v() {
						var e = k.localToGlobal(k.regX, k.regY);
						if (a) var t = k.parent.localToGlobal(k.x - k.width / 2, k.y - k.height / 2),
							o = k.parent.localToGlobal(k.x + k.width / 2, k.y + k.height / 2),
							n = {
								x: t.x,
								y: t.y,
								width: o.x - t.x,
								height: o.y - t.y
							};
						else n = k.boundsToGlobal();
						var r = {
							x: k.zimTouch.boundaryStartX + e.x - n.x,
							y: k.zimTouch.boundaryStartY + e.y - n.y,
							width: k.zimTouch.boundaryStartW - n.width,
							height: k.zimTouch.boundaryStartH - n.height
						};
						k.gestureBoundary(r, !1)
					}
					k.on("mousedown", function() {
						var e = 1;
						k.stage.on("stagemousedown", function() {
							e++
						}), k.stage.on("stagemouseup", function() {
							0 == --e && setTimeout(function() {
								k.zimTouch && (k.zimTouch.total = 0), k.zimTouch && (k.zimTouch.pointers = {}), f = null
							}, 50)
						})
					}, null, !0), k.zimTouch.pressup = k.on("pressup", function(e) {
						var t = "id" + Math.abs(e.pointerID + 1);
						if (delete k.zimTouch.pointers[t], (k.zimTouch.move || k.zimTouch.rotate) && k.zimTouch.total--, s && !zot(c) && 0 == k.zimTouch.total && (0 < c ? k.rotation = Math.round(k.rotation / c) * c : 0 == c && (k.rotation = Math.round(k.rotation))), u && 0 == k.zimTouch.total && 1 == f) {
							k.zimTouch.slideInterval.pause();
							var o = g[(p + 1) % g.length],
								n = g[p % g.length],
								r = k.x + (o[0] - n[0]) * d,
								i = k.y + (o[1] - n[1]) * d,
								a = k.zimTouch.checkBounds(r, i),
								l = slideTotal * slideSlice * d * Math.min((k.x - a.x) / (k.x - r) || 1, (k.y - a.y) / (k.y - i) || 1);
							k.animate({
								x: a.x,
								y: a.y
							}, l, "quadOut", function() {
								k.dispatchEvent("slidestop")
							})
						}
						0 == k.zimTouch.total && (f = null), k.getStage && k.stage && k.stage.update(), z()
					}), o && (v(), k.on("move", v))
				}
				return k
			}
		}, oo.noGesture = function(e, t, o, n) {
			var r;
			return (r = zob(oo.noGesture, arguments, "obj, move, scale, rotate")) ? r : (z_d("34.6"), !zot(e) && e.on && e.zimTouch ? (zot(t) && (t = !0), zot(o) && (o = !0), zot(n) && (n = !0), e.zimTouch.move = !t, e.zimTouch.scale = !o, e.zimTouch.rotate = !n, e.zimTouch.move || e.zimTouch.scale || e.zimTouch.rotate || (e.off("mousedown", e.zimTouch.mousedown), e.off("pressmove", e.zimTouch.pressmove), e.off("pressup", e.zimTouch.pressup), delete e.zimTouch), e) : void 0)
		}, oo.gestureBoundary = function(e, t, o) {
			if (z_d("34.7"), !zot(e) && e.on && !zot(t) && e.zimTouch) {
				e.zimTouch.localBounds && e.parent ? e.zimTouch.boundary = oo.boundsToGlobal(e.parent, t) : e.zimTouch.boundary = t, zot(o) && (o = !0), o && (e.zimTouch.boundaryStartX = t.x, e.zimTouch.boundaryStartY = t.y, e.zimTouch.boundaryStartW = t.width, e.zimTouch.boundaryStartH = t.height);
				var n = e.zimTouch.checkBounds(e.x, e.y);
				return e.x = n.x, e.y = n.y, e
			}
		}, oo.addPhysics = function(e, t, o, n, r, i, a, l, s, c, u, d) {
			var h;
			if (h = zob(oo.addPhysics, arguments, "obj, dynamic, contract, shape, friction, linear, angular, density, restitution, maskBits, categoryBits, physics")) return h;
			if (z_d("34.8"), zot(d)) {
				if ("undefined" == typeof zimPhysics) return zon && zog("ZIM Physics module must be imported"), e;
				zot(zimDefaultPhysics) && (zimDefaultPhysics = new oo.Physics), d = zimDefaultPhysics
			}
			e.physics = d;
			var g = "rectangle";
			return "Circle" == e.type || "Dial" == e.type ? g = "circle" : "Triangle" == e.type && (g = "triangle"), zot(n) && (n = g),
				function(g, e, t, o, n, r, i, a, l, s, c) {
					z_d("69.97"), zot(t) && (t = 0);
					"rectangle" == o ? g.body = g.physics.makeRectangle(g.width - t, g.height - t, e, n, i, a, l, s, c, r) : "circle" == o ? g.body = g.physics.makeCircle(g.width / 2 - t, e, n, i, a, l, s, c, r) : "triangle" == o && (zot(g.a) && (g.a = g.width, g.b = g.c = Math.sqrt(Math.pow(g.a / 2, 2) + Math.pow(g.height, 2))), g.body = g.physics.makeTriangle(g.a - t, g.b - t, g.c - t, e, n, i, a, l, s, c, r));

					function u() {
						zimContactListener = new b2ContactListener, p = new oo.Dictionary(!0), f = new oo.Dictionary(!0), zimContactListener.BeginContact = function(e) {
							var t = p.at(e.m_fixtureB.GetBody());
							t ? t(e.m_fixtureA.GetBody().zimObj, e.m_fixtureA.GetBody()) : (t = p.at(e.m_fixtureA.GetBody())) && t(e.m_fixtureB.GetBody().zimObj, e.m_fixtureB.GetBody())
						}, zimContactListener.EndContact = function(e) {
							var t = f.at(e.m_fixtureB.GetBody());
							t ? t(e.m_fixtureA.GetBody().zimObj, e.m_fixtureA.GetBody()) : (t = f.at(e.m_fixtureB.GetBody().zimObj, e.m_fixtureB.GetBody())) && t(e.m_fixtureB.GetBody())
						}, g.physics.world.SetContactListener(zimContactListener)
					}
					g.body.x = g.x, g.body.y = g.y, g.body.rotation = g.rotation, g.physics.addMap(g.body, g), g.impulse = function(e, t, o, n) {
						zot(e) && (e = 0), zot(t) && (t = 0);
						var r = g.body.GetWorldCenter();
						return zot(o) && (o = r.x * g.physics.scale), zot(n) && (n = r.y * g.physics.scale), g.body.ApplyImpulse(new b2Vec2(e, t), new b2Vec2(o / g.physics.scale, n / g.physics.scale)), g
					}, g.force = function(e, t, o, n) {
						zot(e) && (e = 0), zot(t) && (t = 0);
						var r = g.body.GetWorldCenter();
						return zot(o) && (o = r.x * g.physics.scale), zot(n) && (n = r.y * g.physics.scale), g.body.ApplyForce(new b2Vec2(e, t), new b2Vec2(o / g.physics.scale, n / g.physics.scale)), g
					}, g.spin = function(e) {
						return zot(e) && (e = 10), g.body.ApplyTorque(1e3 * e), g
					}, g.torque = function(e) {
						return zot(e) && (e = 10), g.body.ApplyTorque(e), g
					}, g.follow = function(e, t, o, n, r, i, a, l, s, c, u, d) {
						var h;
						return (h = zob(g.follow, arguments, "damp, dampY, leftOffset, rightOffset, upOffset, downOffset, offsetDamp, offsetDampY, horizontal, vertical, borderLock, borderOriginal")) ? h : (g.physics.follow(g, e, t, o, n, r, i, a, l, s, c, u, d), g)
					}, g.noFollow = function() {
						return g.physics.follow(null), g
					}, g.control = function(e, t, o, n, r) {
						var i;
						return (i = zob(g.control, arguments, "type, speed, speedY, horizontal, vertical")) ? i : (g.physics.control(g, e, t, o, n, r), g)
					}, g.noControl = function() {
						return g.physics.noControl(g), g
					}, g.sleep = function() {
						return zog(g.body), g.body.SetAwake(!1), g
					}, g.wake = function() {
						return g.body.SetAwake(!0), g
					}, g.contact = function(e) {
						return zimContactListener || u(), p.add(g.body, e), g
					}, g.noContact = function() {
						return p.remove(g.body), g
					}, g.contactEnd = function(e) {
						return zimContactListener || u(), f.add(g.body, e), g
					}, g.noContactEnd = function() {
						return f.remove(g.body), g
					}, Object.defineProperty(g, "dynamic", {
						get: function() {
							return 2 == g.body.GetType()
						},
						set: function(e) {
							g.body.SetType(1 == e ? 2 : 0)
						}
					})
				}(e, t, o, n, r, i, a, l, s, c, u), e
		}, oo.removePhysics = function(e) {
			return z_d("34.85"), zot(e.physics) || (e == e.physics.followObj && e.physics.follow(null), e.physics.remove(e.body), e.follow = e.noFollow = e.control = e.noControl = e.sleep = e.wake = null, e.physics = e.impulse = e.force = e.spin = e.torque = null), e
		}, oo.hitTestPoint = function(e, t, o, n) {
			if (z_d("35"), !e.stage || zot(t) || zot(o)) return !1;
			var r = e.stage;
			if (!zot(e) && e.globalToLocal) {
				if (zot(n) && (n = !0), n) {
					var i = e.getBounds();
					if (i) {
						var a = e.globalToLocal(t, o);
						if (a.x > i.x + i.width || a.x < i.x) return !1;
						if (a.y > i.y + i.height || a.y < i.y) return !1
					}
				}
				var l = {
					x: t,
					y: o
				};
				return l = e.image || e.spriteSheet ? e.globalToLocal(l.x, l.y) : e.globalToLocal(l.x * r.scaleX, l.y * r.scaleY), e.hitTest(l.x, l.y)
			}
		}, oo.hitTestReg = function(e, t, o) {
			if (z_d("36"), !e.stage || !t.stage) return !1;
			var n = e.stage;
			if (!zot(e) && !zot(t) && e.localToLocal && t.localToLocal) {
				zot(o) && (o = !0);
				var r = t.localToGlobal(t.regX, t.regY),
					i = e.getBounds();
				if (o && i) {
					var a = e.globalToLocal(r.x, r.y);
					if (a.x > i.x + i.width || a.x < i.x) return !1;
					if (a.y > i.y + i.height || a.y < i.y) return !1
				}
				return r = e.image || e.spriteSheet || "Shape" == e.type ? e.globalToLocal(r.x, r.y) : e.globalToLocal(r.x * n.scaleX, r.y * n.scaleY), e.hitTest(r.x, r.y)
			}
		}, oo.hitTestRect = function(t, e, o, n) {
			if (z_d("37"), !t.stage || !e.stage) return !1;
			var r = t.stage;
			if (!zot(t) && !zot(e) && t.hitTest && e.getBounds) {
				zot(o) && (o = 0), zot(n) && (n = !0);
				var i = e.getBounds();
				if (i) {
					if (n)
						if (t.getBounds() && !oo.hitTestBounds(t, e)) return !1;
					var a, l, s = i.x + i.width / 2,
						c = i.y + i.height / 2;
					if (d(e.localToGlobal(s, c))) return !0;
					for (var u = 0; u <= o; u++) {
						if (a = i.width * (u + 1) / (o + 1), l = i.height * (u + 1) / (o + 1), d(e.localToGlobal(i.x + a, i.y))) return !0;
						if (d(e.localToGlobal(i.x + i.width, i.y + l))) return !0;
						if (d(e.localToGlobal(i.x + i.width - a, i.y + i.height))) return !0;
						if (d(e.localToGlobal(i.x, i.y + i.height - l))) return !0
					}
				} else zog("zim methods - hitTestRect():\n please setBounds() on param b object")
			}

			function d(e) {
				if (e = t.image || t.spriteSheet || "Shape" == t.type ? t.globalToLocal(e.x, e.y) : t.globalToLocal(e.x * r.scaleX, e.y * r.scaleY), t.hitTest(e.x, e.y)) return !0
			}
		}, oo.hitTestCircle = function(t, e, o, n) {
			if (z_d("38"), t.stage && e.stage && (stage = t.stage, !zot(t) && !zot(e) && t.hitTest && e.getBounds)) {
				zot(o) && (o = 8), zot(n) && (n = !0);
				var r = e.getBounds();
				if (r) {
					var i = t.getBounds();
					if (n && i && !oo.hitTestBounds(t, e)) return !1;
					var a = r.x + r.width / 2,
						l = r.y + r.height / 2,
						s = e.localToGlobal(a, l);
					if (p(s)) return !0;
					for (var c, u, d, h = (r.width + r.height) / 2 / 2, g = 0; g < o; g++)
						if (c = g / o * 2 * Math.PI, u = a + h * Math.cos(c), d = l + h * Math.sin(c), p(s = e.localToGlobal(u, d))) return !0
				} else zog("zim methods - hitTestCircle():\n please setBounds() on param b object")
			}

			function p(e) {
				if (e = t.image || t.spriteSheet || "Shape" == t.type ? t.globalToLocal(e.x, e.y) : t.globalToLocal(e.x * stage.scaleX, e.y * stage.scaleY), t.hitTest(e.x, e.y)) return !0
			}
		}, oo.hitTestCircles = function(e, t, o) {
			if (z_d("38.5"), e.stage && t.stage) {
				var n = e.stage;
				if (!zot(e) && !zot(t) && e.hitTest && e.getBounds && t.getBounds) {
					var r = e.getBounds(),
						i = t.getBounds();
					if (r && i) {
						zot(o) && (o = 0);
						var a = e.localToGlobal(r.x + r.width / 2, r.y + r.height / 2),
							l = t.localToGlobal(i.x + i.width / 2, i.y + i.height / 2),
							s = e.getConcatenatedMatrix(),
							c = t.getConcatenatedMatrix();
						scale1X = Math.sqrt(s.a / n.scaleX * s.a / n.scaleX + s.c / n.scaleX * s.c / n.scaleX), scale1Y = Math.sqrt(s.b / n.scaleY * s.b / n.scaleY + s.d / n.scaleY * s.d / n.scaleY), scale2X = Math.sqrt(c.a / n.scaleX * c.a / n.scaleX + c.c / n.scaleX * c.c / n.scaleX), scale2Y = Math.sqrt(c.b / n.scaleY * c.b / n.scaleY + c.d / n.scaleY * c.d / n.scaleY);
						var u = Math.sqrt(Math.abs(Math.pow(a.x - l.x, 2) + Math.pow(a.y - l.y, 2)));
						return r.width * Math.max(scale1X, scale1Y) / 2 + i.width * Math.max(scale2X, scale2Y) / 2 >= u - o
					}
					zog("zim methods - hitTestCircles():\n please setBounds() on both objects")
				}
			}
		}, oo.hitTestBounds = function(e, t, o, n) {
			if (z_d("39"), e.stage && t.stage && !zot(e) && !zot(t) && e.getBounds && t.getBounds) {
				var r = !1;
				n && n.graphics && (r = !0);
				var i = e.getBounds(),
					a = t.getBounds();
				if (i && a) {
					zot(o) && (o = 0);
					var l = oo.boundsToGlobal(e),
						s = oo.boundsToGlobal(t);
					if (r) {
						var c = n.graphics;
						c.c(), c.ss(1).s("blue"), c.r(l.x, l.y, l.width, l.height), c.s("green"), c.r(s.x, s.y, s.width, s.height), n.stage.update()
					}
					return oo.rectIntersect(l, s, o)
				}
				zog("zim methods - hitTestBounds():\n please setBounds() on both objects")
			}
		}, oo.hitTestPath = function(t, e, o, n) {
			if (z_d("37.5"), t.stage && e.stage && (stage = t.stage, !zot(t) && !zot(e) && t.hitTest && ("Squiggle" == e.type || "Bloob" == e.type))) {
				var r = t.getBounds();
				zot(o) && (o = 2), zot(n) && (n = !1);
				var i = e.interpolate(o, null, !0);
				if (n) {
					e.hitPathPoints ? e.hitPathPoints.removeAllChildren() : e.hitPathPoints = (new Container).addTo(stage), e.hitPathPoints.top();
					for (var a = 0; a < i.length; a++) {
						var l = i[a];
						l = e.localToGlobal(l.x, l.y), new oo.Circle(3).loc(l.x, l.y, e.hitPathPoints)
					}
				}
				if (r) {
					var s = oo.boundsAroundPoints(i);
					if (!oo.rectIntersect(t.boundsToGlobal(r), e.boundsToGlobal(s))) return
				}
				for (a = 0; a < i.length; a++) {
					l = i[a];
					if (c(l = e.localToGlobal(l.x, l.y))) return !0
				}
				return !1
			}

			function c(e) {
				if (e = t.image || t.spriteSheet || "Shape" == t.type ? t.globalToLocal(e.x, e.y) : t.globalToLocal(e.x * stage.scaleX, e.y * stage.scaleY), t.hitTest(e.x, e.y)) return !0
			}
		}, oo.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, u, d, h) {
			if (z_d("41"), !e.stage) return !1;
			if (!zot(e) && !d) {
				var g = e.globalToLocal(i, a);
				i = g.x, a = g.y
			}
			zot(l) && (l = 0), zot(s) && (s = 0), zot(c) && (c = 0), zot(u) && (u = 0);
			var p = (t += c) / n,
				f = (o += u) / r,
				m = Math.min(n - 1, Math.max(0, Math.floor((i - l) / p))),
				z = Math.min(r - 1, Math.max(0, Math.floor((a - s) / f)));
			if (!(p * (m + 1) - c < i - l || i - l < p * m || f * (z + 1) - u < a - s || a - s < f * z)) {
				var v = z * n + m;
				return zot(h) || "index" == h ? v : "col" == h ? m : "row" == h ? z : "array" == h ? [v, m, z] : void 0
			}
		}, oo.animate = function(s, e, t, c, n, r, a, o, i, l, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F, G) {
			var H;
			if (s && (s.props || s.obj) && (H = zob(oo.animate, arguments, "target, props, time, ease, call, params, wait, waitedCall, waitedParams, loop, loopCount, loopWait, loopCall, loopParams, loopWaitCall, loopWaitParams, rewind, rewindWait, rewindCall, rewindParams, rewindWaitCall, rewindWaitParams, sequence, sequenceCall, sequenceParams, sequenceReverse, ticker, cjsProps, css, protect, override, from, set, id, events, sequenceTarget, dynamic, drag, clamp, startPaused, clean, obj, seriesWait, sequenceWait"))) return H;
			if (z_d("45"), 0 == oo.ANIMATE || !window.zns && !ANIMATE) return s;
			var N = Array.prototype.slice.call(arguments);
			if (zot(e) && !zot(W) && (e = W), zot(W = e)) return zon && zog("animate() - need props"), s;
			t = oo.Pick.choose(t), c = oo.Pick.choose(c), a = oo.Pick.choose(a), u = oo.Pick.choose(u), d = oo.Pick.choose(d), m = oo.Pick.choose(m), z = oo.Pick.choose(z), T = oo.Pick.choose(T), M = oo.Pick.choose(M), E = oo.Pick.choose(E);
			var V = {
				override: !zot(s) && !zot(s.zimX) && !zot(W.x) || !zot(s) && !zot(s.zimY) && !zot(W.y)
			};

			function q(e, t, o) {
				if ("." == t.substr(0, 1)) {
					for (var n = t.split("."), r = e, i = 1; i < n.length - 1; i++) r = r[n[i]];
					r[n[n.length - 1]] = o
				} else e[t] = o
			}
			if (zot(l) || (V.loop = l), zot(u) || (V.count = u), zot(d) || (V.loopWait = d), zot(h) || (V.loopCall = h), zot(f) || (V.loopWaitParams = f), zot(p) || (V.loopWaitCall = p), zot(g) || (V.loopParams = g), zot(m) || (V.rewind = m), zot(z) || (V.rewindWait = z), zot(v) || (V.rewindCall = v), zot(b) || (V.rewindParams = b), zot(y) || (V.rewindWaitCall = y), zot(w) || (V.rewindWaitParams = w), zot(e) || (V = oo.merge(V, P)), P = V, oo.loop(W, function(e, t) {
					if ("string" == typeof e) {
						var o = e.split(".");
						if (1 < o.length && "." != e.substr(0, 1) && (W["." + e] = t, delete W[e], e = "." + e), 1 < o.length && "string" == typeof t) {
							var n = t.substr(0, 1);
							"+" != n && "-" != n && (W[e] = "+" + t)
						}
					}
				}), zot(C) && (C = 0), 0 < C && s.addChild) {
				for (var K = [], U = 0; U < s.numChildren; U++) K.push(s.getChildAt(U));
				L = s, s = K
			}
			if (s instanceof Array) {
				T && s.reverse();
				for (U = 0; U < s.length; U++) {
					var Z, Q = s[U];
					if (M)
						for (var J in Q.zimObj = {}, W) Z = oo.Pick.choose(W[J]), Q.zimObj[J] = Q[J], Q[J] = Z;
					else
						for (var J in Q.zimObj = {}, W) Q.zimObj[J] = oo.Pick.choose(W[J]);
					var $ = U * C;
					0 == U && ($ = 20), oo.animate(Q, Q.zimObj, t, c, U == s.length - 1 ? n : null, U == s.length - 1 ? r : null, a, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, x, k, null, A, oo.copy(P), B, I, S, null, E, O, j, L, D, Y, X, R, _, W, F, $)
				}
				return L
			}
			var ee, te, oe, ne = t;
			if (zot(ne) && (ne = 1e3), zot(c) && (c = "quadInOut"), zot(a) && (a = 0), zot(P) && (P = {
					override: !zot(s.zimX) && !zot(W.x) || !zot(s.zimY) && !zot(W.y)
				}), zot(r) && (r = s), zot(A) && (A = !0), zot(B) && (B = !1), zot(I) && (I = !1), zot(M) && (M = !1), zot(E) && (E = {}), E.scale && (E.scaleX = E.scaleY = E.scale, delete E.scale), zot(S) || (P.override = S), zot(Y) && (Y = !1), zot(R) && (R = !!Y), zot(D) && (D = !1), zot(X) && (X = !0), zot(_) && (_ = !0), W instanceof Array) {
				var re, ie, ae = 1;
				if (0 == W.length) return this;

				function le() {
					var e;
					s.zimLastObj && oo.loop(s.zimLastObj, function(e) {
						zot(s.zimTweenOriginals[e]) || (s[e] = s.zimTweenOriginals[e], s.zimLastObj[e] = s.zimTweenOriginals[e])
					});
					for (var t, o = a, n = 0, r = 0; r < W.length; r++)
						if (!zot((e = W[r]).target)) {
							zot(e.time) && (e.time = ne), o += e.wait ? e.wait : 0, t = e.time, e.rewind && (t = 2 * t + (e.rewindWait ? e.rewindWait : 0)), e.loop && (t *= e.loopCount, t += (e.loopCount - 1) * (e.loopWait ? e.loopWait : 0)), zot(e.params) && (e.params = e.target), ie = e.target;
							var i = {
								target: e.target,
								obj: oo.copy(e.obj),
								seriesWait: n,
								wait: o,
								waitedCall: e.waitedCall,
								waitedParams: e.waitedParams,
								time: e.time,
								ease: e.ease,
								from: e.from,
								rewind: e.rewind,
								call: e.call,
								params: e.params,
								loop: e.loop,
								loopCount: e.loopCount,
								loopWait: e.loopWait,
								loopCall: e.loopCall,
								loopParams: e.loopParams,
								loopWaitCall: e.loopWaitCall,
								loopWaitParams: e.loopWaitParams,
								rewind: e.rewind,
								rewindWait: e.rewindWait,
								rewindCall: e.rewindCall,
								rewindParams: e.rewindParams,
								rewindWaitCall: e.rewindWaitCall,
								rewindWaitParams: e.rewindWaitParams,
								set: oo.copy(e.masterSet),
								events: j,
								override: !1,
								id: O
							};
							r == W.length - 1 && se(i), oo.animate(i), n += o + t, o = 0
						}
				}

				function se(e) {
					var t = e.call,
						o = e.params;
					P.loop && (!P.count || ae < P.count) ? e.call = function() {
						function e() {
							for (var e = 0; e < re.objects.length; e++) re.objects[e].set && re.objects[e].set(re.values[e]);
							P.loopWaitCall && "function" == typeof P.loopWaitCall && P.loopWaitCall(P.loopWaitParams), le()
						}
						P.loopCall && "function" == typeof P.loopCall && P.loopCall(P.loopParams), P.loopWait ? (zot(s.zimTweens) && (s.zimTweens = {}), ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, {
							override: P.override
						}).wait(P.loopWait, !0).call(e)) : e()
					} : e.call = function() {
						t && "function" == typeof t && t(o), zot(r) && (r = ie), n && "function" == typeof n && n(r), Qt(O)
					}, ae++
				}
				return function() {
					var e = new oo.Dictionary;
					re = new oo.Dictionary;
					for (var t = 0; t < W.length; t++)
						if (we = W[t], s = s || we.target, zot(we.target) && (we.target = s), zot(we.ease) && (we.ease = c), !zot(we.target)) {
							if (zot(we.props) && !zot(we.obj) && (we.props = we.obj), we.obj = we.props, we.loop && (zot(we.loopCount) || we.loopCount <= 0) && (we.loopCount = 0, W.splice(t + 1, W.length)), zot(we.obj.scale) || (we.obj.scaleX = we.obj.scaleY = we.obj.scale, delete we.obj.scale), we.from) {
								var o = e.at(we.target);
								if (o) {
									if (we.set) {
										var n = oo.copy(we.obj),
											r = oo.merge(o, we.set);
										we.obj = Gt(we.target, we.obj, r), we.set = oo.merge(we.set, n)
									} else we.set = oo.copy(we.obj), we.obj = Gt(we.target, we.obj, o);
									we.from = !1
								} else e.add(we.target, Gt(we.target, we.obj, we.set))
							}
							var i = {};
							for (var a in we.obj) i[a] = we.set && we.set[a] ? we.set[a] : we.target[a];
							zot(re.at(we.target)) && re.add(we.target, {});
							var l = oo.merge(re.at(we.target), i);
							re.remove(we.target), re.add(we.target, l), we.masterSet = oo.copy(we.set)
						}
					zot(s.zimTweens) && (s.zimTweens = {})
				}(), _t(), le(), s
			}
			if (W && (W.x && (s.zimX = !0), W.y && (s.zimY = !0)), !zot(W.shape) && W.shape.type == s.type && ("Bloob" == s.type || "Squiggle" == s.type)) {
				var ce = s.pointObjects,
					ue = W.shape.pointObjects;
				if (ce.length != ue.length) zon && zog("ZIM animate() - shapes must be of same number of points"), delete W.shape;
				else {
					W.shape;
					delete W.shape;
					var de = zot(W.blobShift) ? 0 : W.blobShift;
					delete W.blobShift;
					var he = !0;
					for (U = 0; U < ce.length; U++) {
						var ge = ce[U],
							pe = ue[(2e4 * ce.length + U + de) % ce.length];
						for (Mt = 0; Mt < 4; Mt++)
							if (1 != Mt) {
								var fe = ge[Mt],
									me = (pe[Mt], oo.copy(N));
								me[0] = fe, me[1] = {
									x: pe[Mt].x,
									y: pe[Mt].y,
									rotation: pe[Mt].rotation
								}, he && (me[34] = !0, fe.animateEvent && fe.off("animation", fe.animateEvent), fe.animateEvent = fe.on("animation", function() {
									s.update()
								})), he = !1, oo.animate.apply(oo.animate, me)
							}
					}
					if (oo.isEmpty(W)) return s
				}
			}
			if (!zot(s)) {
				var ze, ve, be;
				if ("Sprite" != s.type && s.hasOwnProperty("paused") || Object.defineProperty(s, "paused", {
						get: function() {
							return s.animatePaused
						},
						set: function(e) {
							s.animatePaused = e
						}
					}), s.endTween = function() {
						return s.stopAnimate(), oo.loop(W, function(e) {
							q(s, e, W[e])
						}), s.stage && s.stage.update(), s
					}, s.zimTweenOriginals = {}, oo.loop(W, function(e, t) {
						s.zimTweenOriginals[e] = function(e, t) {
							if ("." != t.substr(0, 1)) return e[t];
							for (var o = t.split("."), n = e, r = 1; r < o.length; r++) n = n[o[r]];
							return n
						}(s, e)
					}), s.resetTween = function() {
						return oo.loop(s.zimTweenOriginals, function(e) {
							q(s, e, s.zimTweenOriginals[e])
						}), s.stage && s.stage.update(), s
					}, s.replayTween = function() {
						return s.resetTween(), s.stopAnimate(), oo.animate.apply(null, N), s
					}, W.path || D) s.requestedPercentComplete ? ze = s.requestedPercentComplete : s.percentComplete && (ve = s, be = "percentComplete", !Object.getOwnPropertyDescriptor(ve, be).get) && (ze = s.percentComplete), s.requestedPercentComplete = null, zot(ze) && (ze = 0), s.pathRatio = 0;
				if (B && (A = !1), zot(s.zimTweens) && (s.zimTweens = {}), !B)
					if (s.stage) Ye = s.stage;
					else {
						if (!zimDefaultFrame) return;
						Ye = zimDefaultFrame.stage
					}
				if (zot(W.scale) || (W.scaleX = W.scaleY = oo.Pick.choose(W.scale), delete W.scale), s.setColorRange && !zot(W.color)) {
					var ye = W.color;
					delete W.color, W.colorRange = 1, s.setColorRange(s.color, ye), s.colorRange = 0
				}
				for (var we in W) {
					if (!s.zimBusy) break;
					s.zimBusy[we] && delete W[we]
				}
				if (!oo.isEmpty(W)) {
					"Sprite" != s.type && (s.paused = !1), (I || P.loop || P.rewind) && (s.zimMouseEnabledCheck || (s.zimMouseEnabledCheck = !0, s.zimLastMouseEnabled = s.mouseEnabled), s.mouseEnabled = !1, setTimeout(function() {
						for (var e in s.zimBusy || (s.zimBusy = {}), W) s.zimBusy[e] = !0;
						s.zimMouseEnabledCheck = null, s.mouseEnabled = s.zimLastMouseEnabled
					}, 70)), _t();
					var Ce, xe = ["extra", "zoom", "speed", "layer", "fade"],
						ke = {
							zoom: "Pen" == s.type ? "size" : "scale",
							speed: "percentSpeed",
							layer: "layer",
							fade: "alpha"
						};
					for (var U in W) 0 <= xe.indexOf(U) || (W[U] = oo.Pick.choose(W[U]));
					for (U in xe.shift(), E) E[U] = oo.Pick.choose(E[U]);
					for (U in P) "waitedCall" != U && "waitedParams" != U && "loopCall" != U && "rewindCall" != U && "loopWaitCall" != U && "rewindWaitCall" != U && (P[U] = oo.Pick.choose(P[U]));
					if (s.getBounds && zot(s.percentCompleteCheck) && (s.percentCompleteCheck = !0, Object.defineProperty(s, "percentComplete", {
							get: function() {
								return this.zimTween && this.zimTween.duration ? this.zimTween.position / this.zimTween.duration * 100 : 0
							},
							set: function(e) {
								this.zimTween ? Ft(e, $e = !0) : this.requestedPercentComplete = e
							}
						}), Object.defineProperty(s, "percentCompleteNoAngle", {
							get: function() {
								return this.zimTween && this.zimTween.duration ? this.zimTween.position / this.zimTween.duration * 100 : 0
							},
							set: function(e) {
								this.zimTween ? Ft(e, !1) : this.requestedPercentComplete = e
							}
						})), !zot(W.path) && W.path.segmentPoints) {
						"Pen" == s.type && (s.infinite = !0), s.zimOnPath = !0, zot(s.pathRatio) && (s.pathRatio = 0), zot(W.orient) && (W.orient = W.path, W.startOrient = W.rotation);
						var Te = !(Ce = W.path).lockControls;
						delete W.path, W.pathRatio = 1
					}
					M && (W = Gt(s, W, E, !0));
					s.percentComplete;
					var Ae, Pe, Be, Ie, Se, Me = !0,
						Ee = !0,
						Oe = !0;
					if (zot(W.redirect) || (Oe = W.redirect, delete W.redirect), Ce) {
						var je;
						Te || (Fe = oo.copy(Ce.segmentPoints), je = oo.copy(Ce.segmentRatios));
						var Le = Ce.getCurvePoint(s.pathRatio, je, Fe);
						if (s.parent && Le) {
							var De = s.parent.globalToLocal(Le.x, Le.y);
							s.x = De.x, s.y = De.y
						}
						if (Y) {
							c = "linear", s.cursor = "pointer";
							var Ye, Xe = s.percentComplete,
								Re = (R || s.paused, !0),
								_e = !0,
								We = Xe,
								Fe = copy(Ce.segmentPoints),
								Ge = 0;
							oo.loop(Fe, function(e) {
								Ge += distanceAlongCurve(e)
							});
							var He = Math.round(Ge / Fe.length / 10),
								Ne = Ce.interpolate(He, null, !0),
								Ve = (Xe || 0) / 100 * Ge,
								qe = Ve;
							Ce.zimAnimateChanged = !1;
							oo.copy(Ce.segmentRatios);
							s.zimAnimatePathChange = Ce.on("change", function() {
								Ce.zimAnimateChanged = !0
							}), s.zimAnimateDragDown = s.on("mousedown", function(e) {
								(Ye = e.target.stage).mouseMoveOutside = !0, Ee = !(Me = !1), setTimeout(function() {
									Me = !0
								}, 50), !0, Ce.zimAnimateChanged && (Fe = oo.copy(Ce.segmentPoints), Ge = 0, oo.loop(Fe, function(e) {
									Ge += distanceAlongCurve(e)
								}), He = Math.round(Ge / Fe.length / 10), Ne = Ce.interpolate(He, null, !0), oo.copy(Ce.segmentRatios)), Ce.zimAnimateChanged = !1, Xe = s.percentComplete, Ue.immediate(Xe);
								var t = Xe;
								m && (t = ee.position > ee.duration / 2 ? 2 * (100 - Xe) : 2 * Xe), qe = Ve = (t || 0) / 100 * Ge
							});
							var Ke = !1;
							s.zimAnimateDragPress = s.on("pressmove", function(e) {
								Ke = !0,
									function(e) {
										var t = Ce.globalToLocal(e.rawX / Ye.scaleX, e.rawY / Ye.scaleY),
											o = Ve;
										"Bloob" == Ce.type && (Je[0] < Je[4] ? _e = !0 : Je[0] > Je[4] && (_e = !1), o < 10 && !_e ? (qe = Ve = o = Ge - 5, Ue.immediate(qe / Ge * 100), Je = [Ge - 1, Ge - 2, Ge, Ge - 3, Ge - 4]) : Ge - 10 < o && _e && (qe = Ve = o = 5, Ue.immediate(qe / Ge * 100), Je = [0, 0, 0, 0, 0]));
										var s = t.x,
											c = t.y,
											u = o;
										Ne.sort(function(e, t) {
											var o = e.x,
												n = e.y,
												r = e.r * Ge,
												i = t.x,
												a = t.y,
												l = t.r * Ge;
											return Math.sqrt(Math.pow(s - o, 2) + Math.pow(c - n, 2) + Math.pow(u - r, 2)) - Math.sqrt(Math.pow(s - i, 2) + Math.pow(c - a, 2) + Math.pow(u - l, 2))
										}), qe = Ne[0].r * Ge, Xe = qe / Ge * 100, Xe = constrain(Xe, 0, 99.95), m && (Xe /= 2, ee.position > ee.duration / 2 && (Xe = 100 - Xe))
									}(e)
							}), s.animateReturn = function() {
								m ? (_e = Re = !1, s.percentComplete < 50 && (s.percentComplete = 100 - s.percentComplete), s.pauseAnimate(!1)) : zon && zog("ZIM animate() - animateReturn() needs rewind set to true")
							}, s.zimAnimateDragUp = s.on("pressup", function() {
								0 == s.paused && !1, Me = !1, setTimeout(function() {
									Me = !0
								}, 50), Je[0] < Je[4] ? _e = !0 : Je[0] > Je[4] && (_e = !1), !s.paused && m && Oe && _e != Re && (s.percentComplete = 100 - s.percentComplete, Re = _e)
							});
							var Ue = new oo.Damp(Xe, .15),
								Ze = 0,
								Qe = 0,
								Je = [0, 0, 0, 0, 0],
								$e = !1;
							s.zimDragAnimateTicker = oo.Ticker.add(function() {
								if (Y)
									if (++Qe % 20 && (Je.push(qe), Je.shift()), Ve = qe, !0 || Ee && 1 == s.paused) {
										if ($e || "Bloob" == Ce.type && Math.abs(Ze - Xe) > (m ? 45 : 90)) {
											var e = Xe;
											Ue.immediate(e), $e = !1
										} else e = Ue.convert(Xe);
										.1 < Math.abs(Ze - e) ? (s.percentCompleteNoAngle = e, Ze = e) : (s.percentCompleteNoAngle = e, Ke = Ee = !1)
									} else Ee = !1
							}, Ye)
						}
					}
					if (W.orient) {
						if (!0 === W.orient) {
							var et = s.parent.localToGlobal(zot(W.x) ? s.x : W.x, zot(W.y) ? s.y : W.y);
							W.orient = {
								x: et.x,
								y: et.y
							}
						}
						Ae = W.orient, delete W.orient;
						var tt, ot = s.rotation;
						if (s.rotation = Ce.getPointAngle(0) + ot, Ae != Ce) tt = Ae.parent ? Ae.parent.localToLocal(Ae.x, Ae.y, s.parent) : s.parent.globalToLocal(Ae.x, Ae.y), s.rotation = oo.angle(s.x, s.y, tt.x, tt.y) + ot
					}
					W.flip && (Pe = W.flip, delete W.flip, Be = s.scaleX), W.flipVertical && (Ie = W.flipVertical, delete W.flipVertical, Se = s.scaleY);
					var nt = s.x,
						rt = s.y,
						it = 0;
					if (P.loop && !zot(P.count)) {
						it = P.count, delete P.count;
						ae = 1
					}
					var at, lt = 0;
					P.loopWait && (lt = P.loopWait, delete P.loopWait), P.loopCall && (at = P.loopCall, delete P.loopCall);
					var st, ct = s;
					P.loopParams && (ct = P.loopParams, delete P.loopParams), P.loopWaitCall && (st = P.loopWaitCall, delete P.loopWaitCall);
					var ut, dt = s;
					if (P.loopWaitParams && (dt = P.loopWaitParams, delete P.loopWaitParams), P.rewind) {
						if (c) {
							var ht = c; - 1 == ht.indexOf("InOut") && (-1 != ht.indexOf("Out") ? ht = ht.replace("Out", "In") : -1 != ht.indexOf("In") && (ht = ht.replace("In", "Out")))
						}
						var gt, pt, ft = 0;
						if (delete P.rewind, P.rewindWait && (ft = P.rewindWait, delete P.rewindWait), P.rewindCall) {
							gt = P.rewindCall;
							var mt = P.rewindParams;
							zot(mt) && (mt = s), delete P.rewindCall, delete P.rewindParams
						}

						function zt() {
							gt && "function" == typeof gt && gt(mt)
						}
						if (P.rewindWaitCall) {
							pt = P.rewindWaitCall;
							var vt = P.rewindWaitParams;
							zot(vt) && (vt = s), delete P.rewindWaitCall, delete P.rewindWaitParams
						}

						function bt() {
							pt && "function" == typeof pt && pt(vt)
						}

						function yt(e) {
							Wt(), ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, {
								override: P.override
							}).wait(a, !0).call(function() {
								o && "function" == typeof o && o(zot(i) ? s : i), wt(ee)
							}), e && Vt(e, ee)
						}

						function wt(e) {
							var t = Ut();
							s.set && !M && s.set(E), ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, P).to(W, ne, createjs.Ease[c]).call(bt).wait(ft, !0).call(zt).to(t, ne, createjs.Ease[ht]).call(Kt).wait(lt, !0).call(Ht), e && Vt(e, ee), Zt()
						}
						0 < F || 0 < G || 0 < a ? 0 < F || 0 < G ? ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, {
							override: P.override
						}).wait(0 < F ? F : 0, !0).wait(0 < G ? G : 0, !0).call(function() {
							yt(ee)
						}) : yt() : (Wt(), wt())
					} else {
						function Ct(e) {
							Wt(), ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, {
								override: P.override
							}).wait(a, !0).call(function() {
								o && "function" == typeof o && o(zot(i) ? s : i), xt(ee)
							}), e && Vt(e, ee)
						}

						function xt(e) {
							s.set && !M && s.set(E), ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, P).to(W, ne, createjs.Ease[c]).call(Kt).wait(lt, !0).call(Ht), e && Vt(e, ee), Zt()
						}
						0 < F || 0 < G || 0 < a ? 0 < F || 0 < G ? ee = s.zimTweens[O] = s.zimTween = createjs.Tween.get(s, {
							override: P.override
						}).wait(0 < F ? F : 0, !0).wait(0 < G ? G : 0, !0).call(function() {
							Ct(ee)
						}) : Ct() : (Wt(), xt())
					}
					ee.startPaused = R, ee.rewinding = !1, !B && A && (ze && (s.pathRatio = s.percentComplete && 100 != Math.round(s.percentComplete) ? s.percentComplete / 100 : 0, s.percentCompleteNoAngle = 100 != Math.round(ze) ? ze : 0), ut = j && !zot(L) && L.dispatchEvent ? oo.Ticker.add(function() {
						(Ce || Ae || Pe || Ie) && qt(), L.dispatchEvent("animation")
					}, Ye) : j && s.dispatchEvent ? oo.Ticker.add(function() {
						(Ce || Ae || Pe || Ie) && qt(), s.dispatchEvent("animation")
					}, Ye) : oo.Ticker.add(function() {
						(Ce || Ae || Pe || Ie) && qt()
					}, Ye));
					var kt = [1, 1, 1];
					zot(s.zimMaskDynamic) || s.zimMaskApply();
					var Tt, At, Pt = !1;
					Zt(), s.stopAnimate && s.stopAnimate.real || (s.stopAnimate = function(e, t, o, n) {
						if (zot(o) && (o = !0), s.paused = !0, "Pen" == s.type && s.zimOnPath && (s.stop(), s.zimOnPath = !1), zot(t) && (t = !0), o && Y && (Ce && Ce.off("change", s.zimAnimatePathChange), s.off("mousedown", s.zimAnimateDragDown), s.off("pressmove", s.zimAnimateDragPress), s.off("pressup", s.zimAnimateDragUp), oo.Ticker.remove(s.zimDragAnimateTicker)), zot(e)) {
							if (!t) return s;
							for (var r in s.zimBusy = null, createjs.Tween.removeTweens(s), s.zimTweens) Jt(r);
							s.zimTweens = null, s.zimIdSets = null, s.zimTween = null, oo.idSets && oo.idSets[te || r] && (delete oo.idSets[te || r], oo.isEmpty(oo.idSets) && delete oo.idSets), oo.animatedObjects.remove(s)
						} else {
							Array.isArray(e) || (e = [e]);
							var i = eo(e);
							for (var r in s.zimTweens) s.zimTweens[r].requestID && cancelAnimationFrame(s.zimTweens[r].requestID), t && 0 <= i.indexOf(r) && Qt(r), !t && i.indexOf(r) < 0 && Qt(r)
						}
						return s
					}, s.stopAnimate.real = !0, s.pauseAnimate = function(e, t, o, n) {
						if ("Pen" == s.type && (!1 === e ? s.zimOnPath && (s.infinite = !0) : s.stop()), At && !n) return s.pause(e, t), s;
						if (zot(e) && (e = !0), !1, s.paused = e, zot(o) && (o = !0), zot(t) && !o) return s;
						if (zot(t))
							for (var r in s.zimTweens) $t(r, e);
						else {
							Array.isArray(t) || (t = [t]);
							var i = eo(t);
							for (var r in s.zimTweens) o && 0 <= i.indexOf(r) && $t(r, e), !o && i.indexOf(r) < 0 && $t(r, e)
						}
						return s
					}), R && s.pauseAnimate(!0, O, null, !0), W.extra && (Tt = W.extra, delete W.extra, Array.isArray(Tt) || (Tt = [Tt]));
					for (U = 0; U < xe.length; U++) {
						var Bt = xe[U];
						W[Bt] && (zot(Tt) && (Tt = []), to(Bt, W[Bt]), delete W[Bt])
					}
					if (Tt) {
						var It;
						ee.extraTickers = [];
						for (U = 0; U < Tt.length; U++) {
							var St = Tt[U];
							for (var Mt in zot(St.inputObj) && (St.inputObj = s), zot(St.inputProp) && (St.inputProp = "y"), zot(St.inputMin) && (St.inputMin = 0), zot(St.inputMax) && (St.inputMax = "x" == St.inputProp ? Ye.width : Ye.height), zot(St.outputObj) && (St.outputObj = s), zot(St.outputProp) && (St.outputProp = "scale"), zot(St.outputMin) && (St.outputMin = 0), zot(St.outputMax) && (St.outputMax = St.outputMin + 1), zot(St.constrain) && (St.constrain = !0), St) W[Mt] = oo.Pick.choose(W[Mt]);
							"percentSpeed" == St.outputProp && (D = !0), It = new oo.Proportion(St.inputMin, St.inputMax, St.outputMin, St.outputMax, St.factor, St.outputRound);
							var Et = function() {
								var n = St,
									r = It;
								return function() {
									var e, t = n.outputObj;
									if (e = n.constrain ? oo.constrain(r.convert(n.inputObj[n.inputProp]), n.outputMin, n.outputMax) : r.convert(n.inputObj[n.inputProp]), "scale" == n.outputProp) t.scaleX = oo.sign(t.scaleX) * e, t.scaleY = oo.sign(t.scaleY) * e;
									else if ("scaleX" == n.outputProp) t.scaleX = oo.sign(t.scaleX) * e;
									else if ("scaleY" == n.outputProp) t.scaleY = oo.sign(t.scaleY) * e;
									else if ("layer" == n.outputProp) {
										if (!t.parent) return;
										var o = oo.constrain(Math.round(e), 0, t.parent.numChildren - 1);
										o != t.parent.getChildIndex(t) && t.parent.setChildIndex(t, o)
									} else t[n.outputProp] = e
								}
							}();
							Et(), ee.extraTickers.push(oo.Ticker.add(Et, Ye))
						}
					}
					if (D || s.zimAnimateDragDown) {
						if (D) {
							At = !0, s.pauseAnimate(!0, O, null, !0), s.paused = !1, ee.currentTime = 0;
							var Ot = ee;
							zot(s.percentSpeed) && (s.percentSpeed = ee.startPaused ? 0 : 100);
							var jt = 1e3 / 60;
							ee.currentTime = 0;
							var Lt = !a && zot(u) && l;
							X && l && zot(u) && (X = !1);
							var Dt, Yt = t + (m ? t : 0) + (z || 0) + (d || 0),
								Xt = 1;
							l && u && (Xt = u), X && (Dt = Yt * Xt),
								function e() {
									if (ee.requestID = requestAnimationFrame(e), D && (!ee.startPaused || 0 != s.percentSpeed)) {
										ee.startPaused = !1, 0 < a && ee != Ot && (a = 0, ee.currentTime = 0, s.pauseAnimate(!0, O), s.paused = !1, Lt = zot(u) && l), Lt && (ee.currentTime += 1e4 * Yt, ee.setPosition(ee.currentTime, !0), Lt = !1);
										var t = ee.currentTime + jt * s.percentSpeed / 100;
										Dt && 0 == a && (t = oo.constrain(t, 0, Dt)), ee.currentTime = t, ee.setPosition(ee.currentTime), (Ce || Ae || Pe || Ie) && qt(), Ye.update()
									}
								}()
						}
						var Rt;
						s.pause = function(e, t) {
							if (zot(e) && (e = !0), zot(t) && (t = 0), e) {
								if (s.zimAnimateDragDown && (Y = !1, s.cursor = "default", Ce && Ce.off("change", s.zimAnimatePathChange), s.off("mousedown", s.zimAnimateDragDown), s.off("pressmove", s.zimAnimateDragPress), s.off("pressup", s.zimAnimateDragUp), !D)) return;
								Rt = s.percentSpeed, 0 < t ? (!0, oo.animate({
									target: s,
									props: {
										percentSpeed: 0
									},
									override: !1,
									ticker: !1,
									time: t,
									call: function() {
										!1, s.percentSpeed = 0, s.paused = !0, D = !1, s.dispatchEvent("pause")
									}
								})) : (ee.startPaused = !1, !1, s.percentSpeed = 0, s.paused = !0, D = !1, setTimeout(function() {
									s.dispatchEvent("pause")
								}, 10))
							} else {
								if (s.zimAnimateDragDown && (Y = !0, s.cursor = "pointer", Ce && (s.zimAnimatePathChange = Ce.on("change", s.zimAnimatePathChange)), s.zimAnimateDragDown = s.on("mousedown", s.zimAnimateDragDown), s.zimAnimateDragPress = s.on("pressmove", s.zimAnimateDragPress), s.zimAnimateDragUp = s.on("pressup", s.zimAnimateDragUp), !D)) return;
								!1, ee.currentTime = ee.position, 0 < t ? (!0, oo.animate({
									target: s,
									props: {
										percentSpeed: Rt
									},
									override: !1,
									ticker: !1,
									time: t,
									call: function() {
										!1, s.percentSpeed = Rt, s.paused = !1, D = !0
									}
								})) : (!1, s.percentSpeed = Rt, s.paused = !1, D = !0)
							}
							return s
						}
					}
					return s
				}
			}

			function _t() {
				zot(O) ? O = oo.makeID(10) : (O = String(O), oe = O), zot(s.zimIdSets) && (s.zimIdSets = {}), zot(s.zimIdSets[O]) ? zot(s.zimTweens[O]) || (te = O, O = oo.makeID(10), s.zimIdSets[te] = [te], s.zimTweens[te].zimIdSet = te, s.zimIdSets[te].push(O)) : (te = O, O = oo.makeID(10), s.zimIdSets[te].push(O))
			}

			function Wt() {
				var e;
				for (U in s.zimLastObj || (s.zimLastObj = {}), W) {
					if ("string" == typeof W[U]) {
						if ("+" == W[U].substr(0, 1)) continue;
						e = s.zimLastObj && !zot(s.zimLastObj[U]) ? s.zimLastObj[U] : s[U], W[U] = e + Number(W[U].replace(/\s/g, ""))
					}
					s.zimLastObj[U] = m ? s.zimTweenOriginals[U] : W[U]
				}
				for (U in E) {
					if ("string" == typeof E[U]) {
						if ("+" == E[U].substr(0, 1)) continue;
						e = s.zimLastObj && !zot(s.zimLastObj[U]) ? s.zimLastObj[U] : s[U], E[U] = e + Number(E[U].replace(/\s/g, ""))
					}
					s.zimLastObj[U] = m ? s.zimTweenOriginals[U] : W[U]
				}
			}

			function Ft(e, t) {
				s.zimTween.startPaused = !1, D ? zot(s.zimTween.currentTime) || (s.zimTween.currentTime = s.zimTween.currentTime - s.zimTween.position + e * s.zimTween.duration / 100) : s.zimTween.setPosition(Math.round(e * s.zimTween.duration / 100)), t && Ce && !1 !== W.orient && Ce.getCurvePoint && (s.rotation = Ce.getCurvePoint(e / 100, null, null, !0).angle + (ot || 0)), $e && void 0 !== Xe && (Xe = e), qt()
			}

			function Gt(e, t, o, n) {
				Ce && (!zot(e.percentComplete) || o && !zot(o.percentComplete)) && zot((o = o || {}).pathRatio) && (o.pathRatio = zot(o.percentComplete) ? e.percentComplete / 100 : o.percentComplete / 100);
				var r = {};
				for (U in t) o && !zot(o[U]) ? r[U] = o[U] : r[U] = e[U], n && (e[U] = t[U]);
				return r
			}

			function Ht() {
				at && "function" == typeof at && at(ct)
			}

			function Nt() {
				st && "function" == typeof st && st(dt)
			}

			function Vt(e, t) {
				t.zimIdSet = e.zimIdSet, t.zimObj = e.zimObj, t.zimTicker = e.zimTicker, t.zimExtraTickers = e.zimExtraTickers, t.requestID = e.requestID
			}

			function qt() {
				if (s.parent && !ee.passive && !ee.startPaused) {
					if (Y && m && (We < 50 && 50 < s.percentComplete || 50 < We && s.percentComplete < 50) && (Re = s.percentComplete < 50), We = s.percentComplete, Ce) {
						Te && (Fe = Ce.segmentPoints, je = Ce.segmentRatios);
						var e = Ce.getCurvePoint(s.pathRatio, je, Fe);
						if (e) {
							e.z;
							var t = s.parent.globalToLocal(e.x, e.y);
							s.x = t.x, s.y = t.y
						}
					}
					var o;
					if (Pe && Me && (nt > s.x && oo.sign(s.scaleX) == oo.sign(Be) && (s.scaleX *= -1), nt < s.x && oo.sign(s.scaleX) != oo.sign(Be) && (s.scaleX *= -1)), Ie && Me && (rt > s.y && oo.sign(s.scaleY) == oo.sign(Se) && (s.scaleY *= -1), rt < s.y && oo.sign(s.scaleY) != oo.sign(Se) && (s.scaleY *= -1)), Ae) {
						var n;
						if (Ce == Ae) o = oo.angle(nt, rt, s.x, s.y) + ot;
						else n = Ae.parent ? Ae.parent.localToLocal(Ae.x, Ae.y, s.parent) : s.parent.globalToLocal(Ae.x, Ae.y), o = oo.angle(s.x, s.y, n.x, n.y) + ot;
						0 != o && (s.paused && !Ke || (Pe && 0 < nt - s.x && (o += 180), s.rotation = o == ot ? s.rotation : o))
					}
					if (Y) {
						var r = s.x - nt + s.y - rt;
						2 < Math.abs(r) && (kt.push(sign(r)), kt.shift(), ee.forward = function(e) {
							if (Array.isArray(e)) {
								for (var t = 0, o = 0, n = e.length; o < n; o++) t += e[o];
								return t
							}
						}(kt))
					}
					nt = s.x, rt = s.y
				}
			}

			function Kt() {
				if (s.paused && "Sprite" != s.type) n && "function" == typeof n && n(r);
				else {
					if (P.loop) {
						if (!(0 < it)) return void Nt();
						if (ae < it) return Nt(), void ae++;
						m ? s.set && s.set(Ut()) : s.set && s.set(W)
					}
					_ ? Qt(O) : s.pauseAnimate(!0, O), G && x && "function" == typeof x && x(k), n && "function" == typeof n && n(r)
				}
			}

			function Ut() {
				var e = {};
				for (var t in W)
					if (B) zot(E[t]) || M ? e[t] = s.style[t] : e[t] = E[t];
					else if (zot(E[t]) || M)
					if ("." == t.substr(0, 1)) {
						for (var o = t.split("."), n = s, r = 1; r < o.length; r++) n = n[o[r]];
						e[t] = n
					} else e[t] = s[t];
				else e[t] = E[t];
				return e
			}

			function Zt() {
				ee.zimObj = W, ee.zimTicker = ut, ee.zimPaused = Pt, te && (ee.zimIdSet = te), oe && (zot(oo.idSets) && (oo.idSets = {}), zot(oo.idSets[oe]) ? oo.idSets[oe] = [s] : oo.idSets[oe].indexOf(s) < 0 && oo.idSets[oe].push(s)), oo.animatedObjects || (oo.animatedObjects = new oo.Dictionary(!0)), oo.animatedObjects.add(s, !0)
			}

			function Qt(e) {
				if (!zot(s.zimTweens) && !zot(s.zimTweens[e])) {
					s.zimX = null, s.zimY = null,
						function(e) {
							if (s.zimBusy) {
								for (var t in e) delete s.zimBusy[t];
								oo.isEmpty(s.zimBusy) && (s.zimBusy = null)
							}
						}(s.zimTweens[e].zimObj), s.zimTweens[e].paused = !0, Jt(e);
					var t = s.zimTweens[e].zimIdSet;
					if (!zot(t) && s.zimIdSets) {
						var o = s.zimIdSets[t];
						o && o.splice(o.indexOf(e), 1), o && 0 == o.length && (delete s.zimIdSets[t], oo.isEmpty(s.zimIdSets) && delete s.zimIdSets)
					}
					if ("Pen" == s.type && s.zimOnPath && (s.stop(), s.zimOnPath = !1), delete s.zimTweens[e], oo.isEmpty(s.zimTweens) && s.stopAnimate(null, null, !1, !0), s.zimTweens && s.zimTweens[e] || s.zimIdSets && s.zimIdSets[t || e]);
					else if (oo.idSets && oo.idSets[t || e]) {
						oo.idSets[t || e];
						var n = oo.idSets[t || e].indexOf(s);
						0 <= n && oo.idSets[t || e].splice(n, 1), oo.idSets[t || e].length <= 0 && (delete oo.idSets[t || e], oo.isEmpty(oo.idSets) && delete oo.idSets)
					}
				}
			}

			function Jt(o) {
				! function() {
					var e = s.zimTweens[o].zimTicker;
					if (s.zimTweens[o].extraTickers)
						for (var t = 0; t < s.zimTweens[o].extraTickers.length; t++) oo.Ticker.remove(s.zimTweens[o].extraTickers[t]);
					e && setTimeout(function() {
						e && oo.Ticker.remove(e), e = null
					}, 200)
				}()
			}

			function $t(e, t) {
				var o = s.zimTweens[e];
				(o.paused = t) != o.zimPaused && ((o.zimPaused = t) ? o.zimTicker && (o.zimAnimateTimeout = setTimeout(function() {
					oo.Ticker.remove(o.zimTicker)
				}, 200)) : (o.startPaused = !1, clearTimeout(o.zimAnimateTimeout), o.zimTicker && (o.zimTicker = oo.Ticker.add(o.zimTicker, Ye))))
			}

			function eo(e) {
				for (var t = [], o = 0; o < e.length; o++) s.zimIdSets && !zot(s.zimIdSets[e[o]]) ? t = t.concat(s.zimIdSets[e[o]]) : t.push(e[o]);
				return t
			}

			function to(e, t) {
				!0 === t ? Tt.push({
					outputProp: ke[e]
				}) : Array.isArray(t) ? Tt.push({
					outputProp: ke[e],
					outputMin: t[0],
					outputMax: t[1],
					inputMin: t[2],
					inputMax: t[3]
				}) : Tt.push({
					outputProp: ke[e],
					outputMax: t
				})
			}
		}, oo.stopAnimate = function(e) {
			if (z_d("45.12"), zot(e)) {
				if (oo.animatedObjects)
					for (var t = oo.animatedObjects.length - 1; 0 <= t; t--) oo.animatedObjects.objects[t].stopAnimate()
			} else if (Array.isArray(e) || (e = [e]), oo.idSets)
				for (var o = 0; o < e.length; o++) {
					var n = e[o];
					if (oo.idSets[n])
						for (t = oo.idSets[n].length - 1; 0 <= t; t--) oo.idSets[n][t].stopAnimate(n)
				}
		}, oo.stopZimAnimate = function(e) {
			z_d("45.1"), oo.stopAnimate(e)
		}, oo.pauseAnimate = function(e, t) {
			if (z_d("45.22"), zot(e) && (e = !0), zot(t)) {
				if (oo.animatedObjects)
					for (var o = oo.animatedObjects.length - 1; 0 <= o; o--) oo.animatedObjects.objects[o].pauseAnimate(e)
			} else if (Array.isArray(t) || (t = [t]), oo.idSets)
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					if (oo.idSets[r])
						for (o = oo.idSets[r].length - 1; 0 <= o; o--) oo.idSets[r][o].pauseAnimate(e, r)
				}
		}, oo.pauseZimAnimate = function(e, t) {
			z_d("45.2"), oo.pauseAnimate(e, t)
		}, oo.wiggle = function(i, a, l, s, c, u, d, e, h, g, p, f, m, t) {
			var o;
			if (o = zob(oo.wiggle, arguments, "target, property, baseAmount, minAmount, maxAmount, minTime, maxTime, totalTime, type, ease, integer, id, startType, ticker")) return o;
			if (z_d("45.25"), zot(i) || zot(l) || zot(s)) return i;
			zot(c) && (c = s), zot(u) && (u = 1e3), zot(d) && (d = u), zot(g) && (g = "quadInOut"), zot(p) && (p = !1), zot(f) && (f = oo.makeID()), zot(h) && (h = "both"), zot(m) && (m = "both"), zot(t) && (t = !0), zot(e) || (i.wiggleTimeout = setTimeout(function() {
				i.stopAnimate(f), i.dispatchEvent("wigglestop")
			}, e));
			var z, v = 0;
			return function e() {
				var t = oo.rand(oo.Pick.choose(u), oo.Pick.choose(d)),
					o = {},
					n = {};
				if (n[a] = oo.Pick.choose(l), "negative" == h || 0 == v && "negative" == m) var r = -oo.rand(oo.Pick.choose(s), oo.Pick.choose(c), p);
				else r = "positive" == h || 0 == v && "positive" == m ? oo.rand(oo.Pick.choose(s), oo.Pick.choose(c), p) : 0 == v ? oo.rand(oo.Pick.choose(s), oo.Pick.choose(c), p, !0) : oo.rand(oo.Pick.choose(s), oo.Pick.choose(c), p) * oo.sign(z) * -1;
				o[a] = oo.Pick.choose(l) + r, 0 == v && (t /= 2), z = r, v++, "negative" == h || "positive" == h ? oo.animate({
					target: i,
					obj: o,
					set: n,
					ease: g,
					time: 2 * t,
					rewind: !0,
					override: !1,
					call: e,
					id: f,
					ticker: !!i.stage
				}) : oo.animate({
					target: i,
					obj: o,
					ease: g,
					time: t,
					override: !1,
					call: e,
					id: f,
					ticker: !!i.stage
				})
			}(), i
		}, oo.zimLoopCheck = !1, oo.loop = function(e, t, o, n, r, i) {
			var a;
			if (a = zob(oo.loop, arguments, "obj, call, reverse, step, start, end")) return a;
			if (oo.zimLoopCheck || z_d("45.3"), oo.zimLoopCheck = !0, !zot(e) && !zot(t)) {
				zot(o) && (o = !1), (zot(n) || n <= 0) && (n = 1);
				var l = "number" == typeof e ? "number" : e.constructor === Array ? "array" : e.constructor === {}.constructor ? "object" : e instanceof NodeList ? "nodelist" : e instanceof HTMLCollection ? "htmlcollection" : "invalid";
				if ("container" != l || e.addChild)
					if ("number" == l || "array" == l || "nodelist" == l || "htmlcollection" == l) {
						if (0 == (h = g((u = "number" == l ? e : e.length) - 1))) return;
						if (o)
							for (var s = r; i <= s; s -= n) {
								if ("number" == l) var c = t(s, h, r, i, e);
								else if ("array" == l) c = t(e[s], s, h, r, i, e);
								else c = t(e.item(s), s, h, r, i, e);
								if (void 0 !== c) return c
							} else
								for (s = r; s <= i; s += n) {
									if ("number" == l) c = t(s, h, r, i, e);
									else if ("array" == l) c = t(e[s], s, h, r, i, e);
									else c = t(e.item(s), s, h, r, i, e);
									if (void 0 !== c) return c
								}
					} else if ("object" == l) {
					var u = 0,
						d = [];
					for (var s in e) u++, d.push(s);
					if (0 == (h = g(u - 1))) return;
					if (o)
						for (s = r; i <= s; s -= n) {
							if (void 0 !== (c = t(d[s], e[d[s]], s, h, r, i, e))) return c
						} else
							for (s = r; s <= i; s += n) {
								if (void 0 !== (c = t(d[s], e[d[s]], s, h, r, i, e))) return c
							}
				} else {
					var h;
					if (0 == (h = g(e.numChildren - 1))) return;
					if (o)
						for (s = r; i <= s; s -= n) {
							if (void 0 !== (c = t(e.getChildAt(s), s, h, r, i, e))) return c
						} else
							for (s = r; s <= i; s += n) {
								if (void 0 !== (c = t(e.getChildAt(s), s, h, r, i, e))) return c
							}
				}
			}

			function g(e) {
				return zot(r) && (r = o ? e : 0), zot(i) && (i = o ? 0 : e), o && r < i || !o && i < r ? 0 : (r < 0 && i) < 0 || e < r && e < i ? 0 : (r = Math.max(0, Math.min(r, e)), i = Math.max(0, Math.min(i, e)), Math.floor((o ? r - i : i - r) / n) + 1)
			}
		}, oo.scaleTo = function(e, t, o, n, r, i) {
			var a;
			if (a = zob(oo.scaleTo, arguments, "obj, boundObj, percentX, percentY, type, boundsOnly")) return a;
			if (z_d("43"), !zot(e) && e.getBounds && e.getBounds()) {
				if (!zot(t) && t.getBounds && t.getBounds()) {
					zot(o) && (o = -1), zot(n) && (n = -1), -1 == o && -1 == n && (o = n = 100), zot(r) && (r = "smallest"), zot(i) && (i = !1);
					var l = t.getBounds().width * o / 100 * (i ? 1 : t.scaleX),
						s = t.getBounds().height * n / 100 * (i ? 1 : t.scaleY);
					if ("Stage" != t.type && "StageGL" != t.type || (l = t.width * o / 100, s = t.height * n / 100), (-1 == o || -1 == n) && "both" != r && "stretch" != r) return -1 == o ? oo.sca(e, s / e.getBounds().height) : oo.sca(e, l / e.getBounds().width), e;
					if ("both" == r || "stretch" == r) return e.scaleX = -1 != o ? l / e.getBounds().width : e.scaleX, e.scaleY = -1 != n ? s / e.getBounds().height : e.scaleY, e;
					if ("biggest" == r || "largest" == r || "outside" == r) var c = Math.max(l / e.getBounds().width, s / e.getBounds().height);
					else c = Math.min(l / e.getBounds().width, s / e.getBounds().height);
					return oo.sca(e, c), e
				}
				zog("zim methods - scaleTo(): please provide a boundObject (with setBounds) to scale to")
			} else zog("zim methods - scaleTo(): please provide an object (with setBounds) to scale")
		}, oo.fit = function(e, t, o, n, r, i) {
			var a;
			if (a = zob(oo.fit, arguments, "obj, left, top, width, height, inside")) return a;
			if (z_d("46"), !zot(e) && e.getBounds) {
				if (e.getBounds()) {
					if (zot(t)) {
						if (!e.stage) return void zog("zim methods - fit(): please add boundary dimensions or add obj to stage first");
						if (!e.stage.getBounds()) return void zog("zim methods - fit(): please add boundary dimensions or add obj with bounds to stage first");
						o = t = 0, n = e.stage.getBounds().width, r = e.stage.getBounds().height
					}
					zot(i) && (i = !0), e.scaleX = e.scaleY = 1;
					var l, s = n,
						c = r,
						u = e.getBounds().width,
						d = e.getBounds().height;
					l = i ? u / d <= s / c ? c / d : s / u : u / d <= s / c ? s / u : c / d, e.scaleX = e.scaleY = l;
					var h = u * l,
						g = d * l;
					return e.x = (e.regX - e.getBounds().x) * l + t + (s - h) / 2, e.y = (e.regY - e.getBounds().y) * l + o + (c - g) / 2, {
						x: e.x,
						y: e.y,
						width: h,
						height: g,
						scale: l,
						bX: t,
						bY: o,
						bWidth: n,
						bHeight: r
					}
				}
				zog("zim methods - fit(): please setBounds() on object")
			}
		}, oo.boundsCheck = !1, oo.boundsToGlobal = function(e, t, o) {
			if (oo.boundsCheck || (z_d("40"), oo.boundsCheck = !0), !zot(e) && e.getBounds) {
				zot(o) && (o = !1);
				var n = e.getBounds();
				if (n || !zot(t)) {
					if (t && (n = t), o) var r = e.globalToLocal(n.x, n.y),
						i = e.globalToLocal(n.x + n.width, n.y),
						a = e.globalToLocal(n.x + n.width, n.y + n.height),
						l = e.globalToLocal(n.x, n.y + n.height);
					else r = e.localToGlobal(n.x, n.y), i = e.localToGlobal(n.x + n.width, n.y), a = e.localToGlobal(n.x + n.width, n.y + n.height), l = e.localToGlobal(n.x, n.y + n.height);
					var s = Math.min(r.x, i.x, a.x, l.x),
						c = Math.min(r.y, i.y, a.y, l.y),
						u = Math.max(r.x, i.x, a.x, l.x),
						d = Math.max(r.y, i.y, a.y, l.y);
					return new createjs.Rectangle(s, c, u - s, d - c)
				}
				zog("zim methods - boundsToGlobal():\n please setBounds() on object (or a rectangle)")
			}
		}, oo.resetBounds = function(e, t, o, n, r) {
			if (z_d("40.5"), zot(n)) i = 0, a = t, l = 0, s = o;
			else var i = t,
				a = n,
				l = o,
				s = r;
			return zot(s) && (s = a), zot(t) ? e.setBounds(null) : e.setBounds(i, l, a, s), e
		}, oo.copyMatrix = function(e, t) {
			return z_d("45.5"), e.x = t.x, e.y = t.y, e.scaleX = t.scaleX, e.scaleY = t.scaleY, e.regX = t.regX, e.regY = t.regY, e.rotation = t.rotation, e.skewX = t.skewX, e.skewY = t.skewY, e
		}, oo.duplicate = function(e) {
			z_d("45.6");
			var t = e.clone();
			for (var o in e) e.hasOwnProperty(o) && null == t.prop && (t[o] = e[o]);
			return t
		}, oo.expand = function(e, t, o) {
			if (z_d("50"), zot(e) || !e.getBounds || !e.getBounds()) return zog("zim methods - expand(): please provide object with bounds set"), e;
			zot(t) && (t = 20), zot(o) && (o = t);
			var n = e.getBounds(),
				r = new createjs.Shape;
			return r.graphics.f("0").r(n.x - t, n.y - o, n.width + 2 * t, n.height + 2 * o), e.hitArea = r, e
		}, oo.setSwipe = function(i, e) {
			if (z_d("34"), !zot(i) && i.on) return i.zimNoSwipe = !e || null, i instanceof createjs.Container && function e(t) {
				var o = t.numChildren;
				var n;
				for (var r = 0; r < o; r++)(n = t.getChildAt(r)).zimNoSwipe = i.zimNoSwipe, n instanceof createjs.Container && e(n)
			}(i), i
		}, oo.setMask = function(n, r, i) {
			if (z_d("50.1"), zot(n) && zog("zim methods - setMask(): please provide obj"), zot(r)) return e(), n;
			var a, l = n.stage || (zimDefaultFrame ? zimDefaultFrame.stage : null);

			function e() {
				n.zimMask && n.zimMask.parent && n.zimMask.parent.removeChild(n.zimMask), n.zimMask = null, n.zimMaskTicker && oo.Ticker.remove(n.zimMaskTicker), n.mask = null
			}

			function t() {
				if (i && (!l || !r.stage)) return n;
				if (a = null, n.zimMask = r.zimMask = a = r.shape.clone(), oo.copyMatrix(a, r), r.addChildAt(a, 0), a.alpha = 0, n.parent) {
					var e = r.getConcatenatedMatrix().decompose(),
						t = n.parent.getConcatenatedMatrix().decompose();
					a.scaleX = e.scaleX / t.scaleX, a.scaleY = e.scaleY / t.scaleY, a.rotation = (e.rotation ? e.rotation : 0) - (t.rotation ? t.rotation : 0);
					var o = r.localToLocal(r.shape.x + r.regX, r.shape.y + r.regY, n.parent);
					a.x = o.x, a.y = o.y, n.mask = a
				} else n.mask = a
			}
			return n.zimMaskOriginal && n.zimMaskOriginal != r && e(), zot(i) && (i = !("Bloob" != r.type && zot(r.zimDown) && zot(r.transformControls) && zot(r.zimTouch) && zot(r.zimTweens)), r.zimMaskDynamic = i), (n.zimMaskOriginal = r).zimMaskApply = function() {
				n.zimMaskTicker && oo.Ticker.remove(n.zimMaskTicker), n.zimMaskTicker = oo.Ticker.add(t)
			}, r && r.shape ? (t(), i && r.zimMaskApply()) : (a = r, n.mask = a), n
		}, oo.outline = function(t, e, o) {
			var n;
			if (n = zob(oo.outline, arguments, "obj, color, size")) return n;
			if (z_d("47"), t.type && "zimOultineShape" == t.type) return zon && zog("zim.outline() - warning, you are trying to outline an outline - do not outline in a loop"), t;
			if (zot(t) || !t.getBounds) return zog("zim methods - outline(): please provide object with bounds set"), t;
			if (!t.getBounds()) return zog("zim methods - outline(): please setBounds() on object"), t;
			if (!t.parent) return zog("zim methods - outline(): object should be on stage first"), t;
			if (zot(e) && (e = "brown"), zot(o) && (o = 2), o <= 0) return t.ZIMoutlineShape && t.ZIMoutlineShape.parent.removeChild(t.ZIMoutlineShape), t.ZIMoutlineShapeC && t.ZIMoutlineShapeC.parent.removeChild(t.ZIMoutlineShapeC), void(t.ZIMoutlineShape = t.ZIMoutlineShapeC = null);
			var r = t.getBounds(),
				i = t.ZIMoutlineShape = t.ZIMoutlineShape ? t.ZIMoutlineShape : new oo.Shape;
			i.type = "zimOutlineShape";
			var a = t.ZIMoutlineShapeC = t.ZIMoutlineShapeC ? t.ZIMoutlineShapeC : new oo.Shape;
			a.type = "zimOutlineShape";
			var l = t.parent;
			t.outlineToggled = !0, t.outlineToggle = function(e) {
				return !0 === e ? (t.ZIMoutlineShape.visible = !0, t.ZIMoutlineShapeC.visible = !0) : !1 === e ? (t.ZIMoutlineShape.visible = !1, t.ZIMoutlineShapeC.visible = !1) : (t.ZIMoutlineShape.visible = !t.ZIMoutlineShape.visible, t.ZIMoutlineShapeC.visible = !t.ZIMoutlineShapeC.visible), t.outlineToggled = t.ZIMoutlineShape.visible, t
			};
			var s = t.localToLocal(r.x, r.y, l),
				c = t.localToLocal(r.x + r.width, r.y, l),
				u = t.localToLocal(r.x + r.width, r.y + r.height, l),
				d = t.localToLocal(r.x, r.y + r.height, l),
				h = t.localToLocal(0, 0, l),
				g = i.graphics.c(),
				p = a.graphics.c();
			g.s(e).ss(o).mt(s.x, s.y).lt(c.x, c.y).lt(u.x, u.y).lt(d.x, d.y).lt(s.x, s.y).cp();
			p.s("white").ss(o + 2), p.mt(-11, 0).lt(11, 0), p.mt(0, -11).lt(0, 11), p.s(e).ss(o), p.mt(-10, 0).lt(10, 0), p.mt(0, -10).lt(0, 10), a.x = h.x, a.y = h.y, a.rotation = t.rotation, g.s("white").ss(o + 2).dc(t.x, t.y, 16), g.s(e).ss(o).dc(t.x, t.y, 16), t.parent.removeChild(i), t.parent.removeChild(a);
			var f = t.parent.getChildIndex(t);
			return t.parent.addChildAt(a, f + 1), t.parent.addChildAt(i, f + 1), i.mouseEnabled = !1, a.mouseEnabled = !1, t
		}, oo.STYLE = null, oo.STYLECHECK = !1, oo.ignore = "ignore", oo.getStyle = function(e, t, o) {
			oo.STYLECHECK || (z_d("50.34"), oo.STYLECHECK = !0);
			var n = ["pos", "addTo", "center", "centerReg", "mov", "drag", "transform", "gesture", "outline", "bounds", "animate", "wiggle"],
				r = oo.STYLE;
			if ("undefined" != typeof STYLE && (r = STYLE), r = zot(r) ? {} : oo.copy(r), zot(o)) o = {};
			else
				for (var i = 0; i < n.length; i++) delete o[n[i]];
			var a, l = o,
				s = r.type;
			if (s && delete r.type, !zot(t) && !zot(r.group)) {
				var c = t.split(","),
					u = {};
				for (i = 0; i < c.length; i++) {
					var d = c[i].trim();
					zot(r.group[d]) || (u = oo.merge(u, r.group[d]))
				}
				delete r.group
			}
			for (var h in zot(e) || zot(s) || zot(s[e]) || (r = oo.merge(r, s[e])), zot(t) || zot(u) || (r = oo.merge(r, u)), r) l[h] ? delete r[h] : "ignore" != (a = -1 != n.indexOf(h) || r.delayPick ? r[h] : oo.Pick.choose(r[h])) ? (a && a.constructor === {}.constructor && (a = oo.copy(a, !0, !1)), r[h] = a) : delete r[h];
			return !1 === (r = oo.merge(r, l)).style ? {} : r
		};
		var r = ["visible", "x", "y", "scale", "scaleX", "scaleY", "rotation", "alpha", "skewX", "skewY", "regX", "regY"],
			De = function(t, o) {
				if (o) {
					o.add && t.addTo(), o.addTo && t.addTo(!0 === o.addTo ? null : o.addTo), o.center && t.center(!0 === o.center ? null : o.center), o.centerReg && t.centerReg(!0 === o.centerReg ? null : o.centerReg);
					for (var n = 0; n < r.length; n++) null != o[r[n]] && (t[r[n]] = oo.Pick.choose(o[r[n]]));
					if (o.bounds && o.bounds.constructor === {}.constructor && t.setBounds(o.bounds.x ? o.bounds.x : 0, o.bounds.y ? o.bounds.y : 0, o.bounds.width ? o.bounds.width : 100, o.bounds.height ? o.bounds.height : 100), (o.mov || o.move) && (o.move && (o.mov = o.move), o.mov.constructor === {}.constructor ? t.mov(oo.Pick.choose(o.mov.x), oo.Pick.choose(o.mov.y)) : t.mov(oo.Pick.choose(o.mov))), null != o.x && (o.loc ? null == o.loc.x && (o.loc.x = o.x) : o.loc = {
							x: o.x
						}), null != o.y && (o.loc ? null == o.loc.y && (o.loc.y = o.y) : o.loc = {
							y: o.y
						}), o.loc && (o.loc.constructor === {}.constructor ? t.loc(oo.Pick.choose(o.loc.x), oo.Pick.choose(o.loc.y)) : t.loc(oo.Pick.choose(o.loc))), o.pos)
						if (o.pos.constructor === {}.constructor) t.pos(oo.Pick.choose(o.pos.x), oo.Pick.choose(o.pos.y), oo.Pick.choose(o.pos.right), oo.Pick.choose(o.pos.bottom), oo.Pick.choose(o.pos.index), o.pos.add, oo.Pick.choose(o.pos.reg), oo.Pick.choose(o.pos.regX), oo.Pick.choose(o.pos.regY));
						else {
							var e = oo.Pick.choose(o.pos);
							"left" != e && "top" != e || t.pos(), "right" == e && t.pos({
								right: !0
							}), "bottom" == e && t.pos({
								bottom: !0
							}), "rightbottom" != e && "bottomright" != e || t.pos({
								right: !0,
								bottom: !0
							}), "center" == e && t.center()
						}
					if (o.outline && setTimeout(function() {
							t.outline(o.outline.constructor === {}.constructor ? o.outline : null), t.stage && t.stage.update()
						}, 20), o.drag && t.drag(o.drag.constructor === {}.constructor ? o.drag : {
							currentTarget: !0
						}), o.gesture && t.gesture(o.gesture.constructor === {}.constructor ? o.gesture : null), o.transform && setTimeout(function() {
							t.transform(o.transform.constructor === {}.constructor ? o.transform : null)
						}, 20), o.animate) {
						Array.isArray(o.animate) || (o.animate = [o.animate]);
						for (n = 0; n < o.animate.length; n++) ! function() {
							var e = o.animate[n];
							e.constructor === {}.constructor && setTimeout(function() {
								t.animate(e)
							}, 20)
						}()
					}
					if (o.wiggle) {
						Array.isArray(o.wiggle) || (o.wiggle = [o.wiggle]);
						for (n = 0; n < o.wiggle.length; n++) ! function() {
							var e = o.wiggle[n];
							e.constructor === {}.constructor && setTimeout(function() {
								t.wiggle(e)
							}, 20)
						}()
					}
					o.expand && t.expand(!0 === o.expand ? null : o.expand)
				}
			};
		oo.ANIMATE = !0, oo.OPTIMIZE = !1, oo.ACTIONEVENT = "mousedown", oo.KEYFOCUS = null, oo.POSREG = !1, oo.DRAGALL = !1, oo.Ticker = {
			stages: null,
			myUpdate: null,
			alwaysList: new oo.Dictionary,
			list: new oo.Dictionary,
			setFPS: function(e, t) {
				zot(e) && zot(t) ? (e = 30, t = 60) : zot(e) ? e = 30 : zot(t) && (t = e), oo.Ticker.framerate = createjs.Ticker.framerate = oo.mobile() ? e : t
			},
			setTimingMode: function(e) {
				createjs.Ticker.timingMode = createjs.Ticker.RAF, "synched" == e && (createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED), "timeout" == e && (createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT)
			},
			add: function(e, t) {
				z_d("30");
				var o = oo.Ticker;
				return o.has(e, t) ? e : (o.framerate || o.setFPS(), !zot(t) && t.update || (t = zimDefaultFrame.stage), zot(e) || "function" != typeof e ? void zog("zim.Ticker.add() - only add functions") : (o.ticker || (o.ticker = createjs.Ticker.on("tick", o.call)), o.list.at(t) ? o.list.at(t).push(e) : o.list.add(t, [e]), e))
			},
			rawID: {},
			raw: function(o) {
				z_d("30");
				var n = oo.makeID(7, "letters");
				return function e(t) {
					o(t), oo.Ticker.rawID[n] = requestAnimationFrame(e)
				}(), n
			},
			removeRaw: function(e) {
				cancelAnimationFrame(oo.Ticker.rawID[e]), delete oo.Ticker.rawID[e]
			},
			call: function(e) {
				for (var t, o, n = oo.Ticker, r = 0; r < n.list.length; r++) {
					t = n.list.objects[r], o = n.list.values[r];
					for (var i = 0; i < o.length; i++) o[i](e);
					n.alwaysList.at(t) ? t.update() : 0 < o.length && (!zot(n.update) || oo.OPTIMIZE || !zns && OPTIMIZE ? n.update && t.update() : t.update())
				}
				if (0 == n.list.length)
					for (r = 0; r < n.alwaysList.length; r++) t = n.alwaysList.objects[r], null == n.list[t] && t.update()
			},
			always: function(e) {
				z_d("30");
				var t = oo.Ticker;
				t.framerate || t.setFPS(), !zot(e) && e.update || (e = zimDefaultFrame.stage), t.alwaysList.add(e, !0), t.ticker || (t.ticker = createjs.Ticker.on("tick", t.call))
			},
			alwaysOff: function(e) {
				var t = oo.Ticker;
				!zot(e) && e.update || (e = zimDefaultFrame.stage), t.alwaysList.remove(e)
			},
			remove: function(e) {
				var t = oo.Ticker;
				if (zot(e) || "function" != typeof e) zog("zim.Ticker - only remove functions");
				else {
					for (var o = 0, n = 0; n < t.list.length; n++) {
						t.list.objects[n];
						var r = t.list.values[n].indexOf(e); - 1 < r && t.list.values[n].splice(r, 1), o += t.list.values[n].length
					}
					0 < t.alwaysList.length || 0 == o && (createjs.Ticker.off("tick", t.ticker), t.ticker = null)
				}
			},
			removeAll: function(e) {
				for (var t, o = oo.Ticker, n = 0, r = 0; r < o.list.length; r++) t = o.list.objects[r], !zot(e) && e !== t || (o.list.values[r] = []), n += o.list.values[r].length;
				0 < o.alwaysList.length || 0 == n && (createjs.Ticker.off("tick", o.ticker), o.ticker = null)
			},
			has: function(e, t) {
				return !zot(t) && t.update || (t = zimDefaultFrame.stage), oo.Ticker.list && oo.Ticker.list.at(t) && 0 <= oo.Ticker.list.at(t).indexOf(e)
			},
			dispose: function(e) {
				for (var t, o = oo.Ticker, n = 0, r = o.list.length - 1; 0 <= r; r--) t = o.list.objects[r], zot(e) || e === t ? (o.list.remove(e), o.alwaysList.remove(e)) : n += o.list.values[r].length;
				if (!(0 < o.alwaysList.length)) return 0 == n && (createjs.Ticker.off("tick", o.ticker), o.ticker = null), !0
			}
		}, Object.defineProperty(oo.Ticker, "update", {
			get: function() {
				return oo.Ticker.myUpdate
			},
			set: function(e) {
				var t = oo.Ticker;
				"boolean" != typeof e && (e = null), t.myUpdate = e, !1 === t.myUpdate && (cancelAnimationFrame(t.ticker), t.alwaysList = new oo.Dictionary)
			}
		}), oo.Pages = function(o, p, f, e, m, t, n, r) {
			var i;
			if (i = zob(oo.Pages, arguments, "pages, transition, speed, transitionTable, holder, style, group, inherit", this)) return i;
			z_d("71"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Pages", this.group = n;
			var a = !1 === t ? {} : oo.getStyle(this.type, this.group, r);
			if (zot(o) && (o = null != a.pages ? a.pages : []), this.pages = o, zot(p) && (p = null != a.transition ? a.transition : "none"), zot(f) && (f = null != a.speed ? a.speed : 200), zot(e) && (e = null != a.transitionTable ? a.transitionTable : []), this.transitionTable = e, zot(m) && (m = null != a.holder ? a.holder : null), zot(m) && zimDefaultFrame && (m = zimDefaultFrame.stage), m.getBounds && m.getBounds()) {
				this.speed = f, this.active = !0;
				var z = this;
				z.transitioning = !1;
				var v, b, y = m.getBounds().width,
					w = m.getBounds().height;
				"none" == p && e == [] || h();
				for (var l, s, C = ["left", "right", "up", "down"], c = 0; c < o.length; c++)(l = o[c]).constructor !== {}.constructor && (l = o[c] = {
					page: o[c]
				}), g(l.page, l.swipe);
				var u, x = this.page = o[0] ? o[0].page : null;
				zot(this.page) || (this.index = 0), this.addChild(x), A(x), this.swipe = new oo.Swipe(m);
				var k = !1,
					d = this.swipe.on("swipe", function(e) {
						if (z.active) {
							var t = e.currentTarget.direction;
							if ("none" != t) {
								var o = "";
								"left" == t ? o = "right" : "right" == t ? o = "left" : "up" == t ? o = "down" : "down" == t && (o = "up"), t = o;
								var n = C.indexOf(t);
								s = x.zimSwipeArray[n], u = [s, t, null, null, !0], z.page = x, z.nextPage = s, z.direction = t, z.dispatchEvent("swipe"), setTimeout(function() {
									k || z.go(s, t, null, null, !0)
								}, 50)
							}
						}
					});
				this.addPage = function(e, t) {
					g(e, t), z.pages.push({
						page: e
					}), x ? e.parent && e.parent.removeChild(e) : (x = z.page = e, z.addChild(x))
				}, this.removePage = function(o) {
					P(o), z.currentPage == o && (z.removeChild(o), m.stage && m.stage.update()), oo.loop(z.pages, function(e, t) {
						e.page != o && e != o || z.pages.splice(t, 1)
					}, !0), o.zimSwipeArray = null
				}, this.setSwipeArray = function(e, t) {
					zot(t) && (t = []);
					var o = {
						page: e,
						swipe: t
					};
					o.page.zimSwipeArray = o.swipe ? o.swipe : []
				}, this.pause = function() {
					k = !0
				}, this.unpause = function() {
					k && z.go(u[0], u[1], u[2], u[3], u[4])
				};
				var T = !0;
				this.go = function(e, t, o, n, r) {
					if ("number" == typeof e) {
						var i = z.pages[e];
						if (zot(i)) return;
						e = i.page
					}
					setTimeout(function() {
						k = !1
					}, 200);
					for (var a = [{
							x: y
						}, {
							x: -y
						}, {
							y: w
						}, {
							y: -w
						}], l = [{
							x: y / 2,
							alpha: 0
						}, {
							x: -y / 2,
							alpha: 0
						}, {
							y: w / 2,
							alpha: 0
						}, {
							y: -w / 2,
							alpha: 0
						}], s = p, c = f, u = 0; u < z.transitionTable.length; u++)
						if (z.transitionTable[u][0] == x && z.transitionTable[u][1] == e) {
							s = z.transitionTable[u][2], c = z.transitionTable[u][3];
							break
						}
					if (zot(o) && (o = s), zot(n) && (n = c), z.speed = n, z.direction = t, "" == e || null == e) z.page = x, z.dispatchEvent("nothing");
					else if ("string" == typeof e) z.page = x, z.dispatchEvent(e);
					else {
						if (e == x) return;
						zot(t) && (t = "right");
						var d = C.indexOf(t);
						if (!T) return;

						function h(e) {
							e[0].uncache(), e[1].uncache(), z.transitioning = !1, z.dispatchEvent("pagetransitioned"), z.removeChild(z.lastPage), z.removeChild(v), z.removeChild(b), A(x), T = !0
						}

						function g(e) {
							z.removeChild(z.lastPage), oo.animate(e.shift(), {
								alpha: 0
							}, z.speed / 2, null, h, e)
						}
						T = !1, e.x = 0, e.y = 0, e.alpha = e.zimOriginalAlpha, z.transitioning = !0, "slide" == o ? (e.x = -(0 | a[d].x), e.y = -(0 | a[d].y), e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), z.addChild(e), z.addChild(x), oo.animate(x, a[d], z.speed, null, h, [x, e]), oo.animate(e, [{
							x: 0
						}, {
							x: 0
						}, {
							y: 0
						}, {
							y: 0
						}][d], z.speed)) : "reveal" == o ? (e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), z.addChild(e), z.addChild(x), oo.animate(x, l[d], z.speed, null, h, [x, e])) : "fade" == o ? (e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), e.alpha = 1, z.addChild(e), z.addChild(x), oo.animate(x, {
							alpha: 0
						}, z.speed, null, h, [x, e])) : "black" == o ? (e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), e.alpha = 1, z.addChild(e), z.addChild(x), v.alpha = 0, z.addChild(v), oo.animate(v, {
							alpha: 1
						}, z.speed / 2, null, g, [v, x, e])) : "clear" == o ? (e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), e.alpha = 0, z.addChild(e), z.addChild(x), oo.animate(x, {
							alpha: 0
						}, z.speed / 2), oo.animate(e, {
							alpha: 1
						}, z.speed / 2, null, h, [x, e], z.speed / 2)) : "white" == o ? (e.cache(0, 0, (y + 1) / e.scaleX, (w + 1) / e.scaleY), x.cache(0, 0, (y + 1) / x.scaleX, (w + 1) / x.scaleY), e.alpha = 1, z.addChild(e), z.addChild(x), b.alpha = 0, z.addChild(b), oo.animate(b, {
							alpha: 1
						}, z.speed / 2, null, g, [b, x, e])) : (z.transitioning = !1, z.addChild(e), z.removeChild(x), T = !0), P(x), z.lastPage = x, z.page = e, z.index = -1;
						for (u = 0; u < z.pages.length; u++) {
							z.pages[u].page == z.page && (z.index = u)
						}
						"none" == o && A(e), zot(r) && (r = !1), z.fromSwipe = r, z.dispatchEvent("page"), x = e, m.stage && m.stage.update()
					}
				}, this.resize = function() {
					y = m.getBounds().width, w = m.getBounds().height, "none" == p && e == [] || h()
				}, this.puff = function(e) {
					for (var t = 0; t < o.length; t++) z.addChild(o[t].page);
					z.addChild(x), 0 < e && setTimeout(function() {
						z.settle()
					}, e)
				}, this.settle = function() {
					z.removeAllChildren(), z.addChild(x), z.dispatchEvent("puffed")
				}, this.disable = function() {
					z.active = !1
				}, !(this.enable = function() {
					z.active = !0
				}) !== t && De(this, a), this.dispose = function() {
					return z.swipe.off("swipe", d), this.zimContainer_dispose(), !0
				}
			} else zog("zim controls - Pages():\nholder object must have bounds set");

			function h() {
				(v = new createjs.Shape).graphics.f("black").r(0, 0, y, w + 1), (b = new createjs.Shape).graphics.f("white").r(0, 0, y, w + 1)
			}

			function g(e, t) {
				e.zimHTMLList = new oo.Dictionary, P(e), e.zimSwipeArray = t || [], e.zimOriginalAlpha = e.alpha, e.parent && e.parent.removeChild(l.page)
			}

			function A(e) {
				if (!zot(e))
					for (var t = 0; t < e.zimHTMLList.length; t++) e.addChildAt(e.zimHTMLList.values[t].obj, e.zimHTMLList.values[t].depth)
			}

			function P(e) {
				e.zimHTMLList.clear();
				for (var t = 0; t < e.numChildren; t++)
					if (ch = e.getChildAt(t), "TextArea" == ch.type || "Loader" == ch.type || "Tag" == ch.type) {
						var o = {
							obj: ch,
							depth: e.getChildIndex(ch)
						};
						e.zimHTMLList.add(ch, o)
					}
				for (t = e.numChildren - 1; 0 <= t; t--) ch = e.getChildAt(t), "TextArea" != ch.type && "Loader" != ch.type && "Tag" != ch.type || e.removeChild(ch)
			}
		}, oo.extend(oo.Pages, oo.Container, ["clone", "dispose"], "zimContainer", !1), oo.HotSpots = function(a, o, n) {
			var e;
			if (e = zob(oo.HotSpots, arguments, "spots, local, mouseDowns", this)) return e;
			if (z_d("72"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "HotSpots", !zot(a) && Array.isArray(a)) {
				zot(o) && (o = !0), zot(n) && (n = !1);
				for (var l, r, i = (zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", s = this.hotSpots = [], t = 0; t < a.length; t++) c(a[t]);
				this.addHotSpot = function(e, t, o, n, r, i) {
					l = {
						page: e,
						rect: t,
						call: o,
						callOver: n,
						callOut: r,
						talk: i
					}, a.push(l), c(l)
				}, this.show = function() {
					for (var e = 0; e < s.length; e++)(r = s[e]).button || (r.spot.alpha = .2)
				}, this.hide = function() {
					for (var e = 0; e < s.length; e++)(r = s[e]).spot.alpha = 0
				}, this.removeHotSpots = function(e, t) {
					for (var o = a.length - 1; 0 <= o; o--) l = a[o], r = s[o], t && !Array.isArray(t) && (t = [t.x, t.y, t.getBounds().width, t.getBounds().height]), (zot(e) && zot(t) || zot(t) && e == l.page || zot(e) && oo.arraysEqual(t, l.rect) || e == l.page && oo.arraysEqual(t, l.rect)) && (a.splice(o, 1), r.button && (r.button.off(i, r.button.zimHSEvent), r.button.zimHSEvent = null, n || (r.button.off("mousedown", r.button.zimHSMDEvent), r.button.zimHSMDEvent = null)), r.off(i, u), r.dispose(), s.splice(o, 1))
				}, this.dispose = function() {
					for (var e = 0; e < s.length; e++)(r = s[e]).button && (r.button.off(i, r.button.zimHSEvent), r.button.zimHSCall = null, r.button.zimHSEvent = null, n || (r.button.off("mousedown", r.button.zimHSMDEvent), r.button.zimHSMDEvent = null)), r.off(i, u), r.dispose();
					return !0
				}
			} else zog("zim controls - HotSpots():\nplease provide an array of HotSpot data");

			function c(e) {
				var t = null;
				if (!Array.isArray(e.rect)) {
					if (!(t = e.rect)) return void zog("zim controls - HotSpots(): HotSpot " + e.page + " " + e.rect + " button does not exist");
					e.rect = [t.x, t.y, t.width, t.height]
				}(r = new oo.HotSpot(e.page, e.rect[0], e.rect[1], e.rect[2], e.rect[3], e.call, e.callOver, e.callOut, o, e.talk)).zimHSpage = e.page, r.button = t, s.push(r), r.on(i, u), t && zot(e.callOver) && zot(e.callOut) && (r.spot.mouseEnabled = !1, r.spot.mouseChildren = !1, t.zimHScall = e.call, t.zimHSEvent = t.on(i, u, !0), n || (t.zimHSMDEvent = t.on("mousedown", function(e) {
					e.stopImmediatePropagation()
				})), t.cursor = "pointer")
			}

			function u(e) {
				e.stopImmediatePropagation && e.stopImmediatePropagation(), window.event && (window.event.cancelBubble = !0), "function" == typeof e.currentTarget.zimHScall && e.currentTarget.zimHScall(e)
			}
		}, oo.extend(oo.HotSpots, oo.Container, "clone", "zimContainer", !1), oo.HotSpot = function(e, t, o, n, r, i, a, l, s, c) {
			var u;
			if (u = zob(oo.HotSpot, arguments, "obj, x, y, width, height, call, callOver, callOut, local, talk", this)) return u;
			if (z_d("73"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "HotSpot", !zot(e) && e.addChild)
				if (e instanceof createjs.Container != 0)
					if (zot(t) || zot(o) || zot(n) || zot(r)) zog("zim controls - HotSpot():\nPlease pass in x, y, width, height");
					else {
						zot(s) && (s = !0), eventType = (zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click";
						var d = n,
							h = r;
						if (s) g = new oo.Point(t, o), f = n, m = r;
						else var g = e.globalToLocal(t, o),
							p = e.globalToLocal(t + d, o + h),
							f = p.x - g.x,
							m = p.y - g.y;
						var z = new oo.Shape(n, r);
						if (z.talk = zot(c) ? "HotSpot" : c, z.alpha = 0, z.graphics.f("black").dr(0, 0, f, m), z.x = g.x, z.y = g.y, z.cursor = "pointer", z.expand(0), this.spot = z, "function" == typeof i) var v = z.on(eventType, function(e) {
							i(e)
						});
						if ("function" == typeof a) var b = z.on("mouseover", function(e) {
							a(e)
						});
						if ("function" == typeof l) var y = z.on("mouseout", function(e) {
							l(e)
						});
						e.addChild(z), this.show = function() {
							e.addChild(backing)
						}, this.hide = function() {
							e.removeChild(backing)
						}, this.dispose = function() {
							return v && z.off(eventType, b), b && z.off("mouseover", b), y && z.off("mouseout", y), e.removeChild(z), !(z = null)
						}
					}
			else zog("zim controls - HotSpot():\nObjects passed in should be Containers");
			else zog("zim controls - HotSpot():\nPlease pass in container object for obj")
		}, oo.extend(oo.HotSpot, oo.Container, "clone", "zimContainer", !1), oo.Guide = function(n, r, i, t, o, e, a, l) {
			var s;
			if (s = zob(oo.Guide, arguments, "obj, vertical, percent, hideKey, pixelKey, style, group, inherit", this)) return s;
			z_d("76"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Guide", this.group = a;
			var c = !1 === e ? {} : oo.getStyle(this.type, this.group, l);
			if (zot(n) && (size = null != c.obj ? c.obj : null), zot(n) && (n = zimDefaultFrame ? zimDefaultFrame.stage : "stage"), zot(r) && (r = null == c.vertical || c.vertical), "stage" == n || n.addChild && n.getBounds && n.getBounds()) {
				zot(i) && (i = null == c.percent || c.percent), zot(t) && (t = null != c.hideKey ? c.hideKey : "G"), zot(o) && (o = null != c.pixelKey ? c.pixelKey : "P");
				var u, d, h, g, p, f = this,
					m = 80,
					z = 26,
					v = m / 6 + m / 2,
					b = 2 * z;
				r ? ((g = P("#00c5af", "white", "white")).shape.regX = m + m / 6, g.shape.regY = z / 2, g.label.x = -m / 2 - m / 6) : ((g = P("#d61fa0", "white", "white")).shape.regX = m / 2, g.shape.regY = z + z / 4, g.label.y = 3 * -z / 4), "stage" != n && n.addChild(f);
				var y, w, C, x, k = oo.added(f, function() {
						"stage" == n ? (p = f.stage, n = p) : p = n.stage;
						n.addChild(f), y = n.getBounds().width, w = n.getBounds().height, r ? (g.y = w / 2, g.label.text = "x:" + (f.percent ? "70%" : Math.round(70 * y / 100))) : (g.x = y / 2, g.label.text = "y:" + (f.percent ? "70%" : Math.round(70 * w / 100)));
						C = new createjs.Shape, f.addChild(C), r ? C.x = .7 * y : C.y = .7 * w, T || (n.addChild(f), I());
						p.off("stagemousemove", u), u = p.on("stagemousemove", B), p.update()
					}),
					T = !1,
					A = {
						x: 0,
						y: 0
					};
				Object.defineProperty(this, "pixels", {
					get: function() {
						return !i
					},
					set: function(e) {
						i = !e, f.resize()
					}
				}), window.addEventListener("keydown", S), this.toggled = !0, this.toggle = function(e) {
					return !0 === e ? f.visible = f.toggled = !0 : !1 === e ? f.visible = f.toggled = !1 : (f.visible = !f.visible, f.toggled = f.visible), p.off("stagemousemove", u), f.visible && (u = p.on("stagemousemove", B, f)), f
				}, !(this.resize = function() {
					return !!f && (p && (I(), B()), !0)
				}) !== e && De(this, c), this.dispose = function() {
					return !!f && (oo.noDrag(C), clearInterval(k), f.removeAllChildren(), window.removeEventListener("keydown", S), f.parent && f.parent.removeChild(f), !(f = null))
				}
			} else zog("zim controls - Guide(): Please provide container with bounds for the obj (setBounds())");

			function P(e, t, o) {
				var n = new oo.Container({
					style: !1
				});
				return n.shape = new createjs.Shape, n.shape.graphics.s(t).ss(1).f(e).r(0, 0, m, z), n.shape.alpha = .9, n.addChild(n.shape), n.label = new createjs.Text("10", "16px arial", o), n.label.textAlign = "center", n.label.textBaseline = "middle", n.addChild(n.label), n.mouseChildren = !1, n.mouseEnabled = !1, n
			}

			function B(e) {
				var t, o;
				e ? (t = n.globalToLocal(e.rawX / p.scaleX, e.rawY / p.scaleY), A = t) : t = {
					x: A.x,
					y: A.y
				}, i ? r ? (o = Math.round(Math.abs(t.x - C.x) / y * 100), g.label.text = "x:" + Math.max(0, Math.min(o, 100)) + "%", g.y = Math.max(b, Math.min(t.y, h))) : (o = Math.round(Math.abs(t.y - C.y) / w * 100), g.label.text = "y:" + Math.max(0, Math.min(o, 100)) + "%", g.x = Math.max(v, Math.min(t.x, d))) : r ? (o = Math.round(Math.abs(t.x - C.x)), g.label.text = "x:" + Math.max(0, Math.min(o, Math.round(y))), g.y = Math.max(b, Math.min(t.y, h))) : (o = Math.round(Math.abs(t.y - C.y)), g.label.text = "y:" + Math.max(0, Math.min(o, Math.round(w))), g.x = Math.max(v, Math.min(t.x, d))), p && p.update()
			}

			function I() {
				var e;
				T = !0, y = n.getBounds().width, w = n.getBounds().height, x = r ? (e = "ew-resize", new createjs.Rectangle(0, 0, y, 0)) : (e = "ns-resize", new createjs.Rectangle(0, 0, 0, w)), oo.noDrag(C), setTimeout(function() {
					oo.drag(C, x, e, e, null, null, !0)
				}, 500), p.mouseMoveOutside = !0, p.enableMouseOver(10), d = y - 2 * m / 3, h = w - z - z, C.uncache();
				var t = C.graphics;
				r ? (t.c().s("rgba(0,255,255,.1)").ss(20).mt(0, 0).lt(0, w), t.f().s("white").ss(2).mt(0, 0).lt(0, w), t.s("#00c5af").sd([20, 20]).mt(0, 0).lt(0, w).sd(), C.cache(-10, 0, 20, w)) : (t.c().s("rgba(255,0,255,.1)").ss(20).mt(0, 0).lt(y, 0), t.f().s("white").ss(2).mt(0, 0).lt(y, 0), t.s("#d61fa0").sd([20, 20]).mt(0, 0).lt(y, 0).sd(), C.cache(0, -10, y, 20)), r ? g.x = y : g.y = w, f.addChild(g)
			}

			function S(e) {
				e = e || event, p && (String.fromCharCode(e.keyCode) == t.toUpperCase() && f.toggle(), String.fromCharCode(e.keyCode) == o.toUpperCase() && (f.pixels = !f.pixels))
			}
		}, oo.extend(oo.Guide, oo.Container, "clone", "zimContainer", !1), oo.Grid = function(r, i, a, t, o, e, n, l) {
			var s;
			if (s = zob(oo.Grid, arguments, "obj, color, percent, hideKey, pixelKey, style, group, inherit", this)) return s;
			z_d("78"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Grid", this.group = n;
			var c = !1 === e ? {} : oo.getStyle(this.type, this.group, l);
			if (zot(r) && (size = null != c.obj ? c.obj : null), zot(r) && (r = zimDefaultFrame ? zimDefaultFrame.stage : "stage"), zot(i) && (i = null != c.color ? c.color : "black"), "stage" == r || r.addChild && r.getBounds && r.getBounds()) {
				zot(a) && (a = null == c.percent || c.percent), zot(t) && (t = null != c.hideKey ? c.hideKey : "G"), zot(o) && (o = null != c.pixelKey ? c.pixelKey : "P");
				var u, d = this,
					h = 10;
				this.mouseChildren = !1, this.mouseEnabled = !1;
				var g = 80,
					p = 26,
					f = B("#dddddd", i, "#333333");
				f.shape.regX = g / 2, f.shape.regY = -p / 4, f.label.y = 3 * p / 4;
				var m = B("#dddddd", i, "#333333");
				m.shape.regX = -g / 6, m.shape.regY = p / 2, m.label.x = g / 2 + g / 6;
				var z, v, b, y = g / 6 + g / 2,
					w = 2 * p;
				f.x = y, m.y = w, f.label.text = "x:0", m.label.text = "y:0", "stage" != r && r.addChild(d);
				var C, x, k, T = oo.added(d, function() {
						"stage" == r ? (b = d.stage, r = b) : b = r.stage;
						A || (S(), r.addChild(d));
						b.off("stagemousemove", u), u = b.on("stagemousemove", I), b.update()
					}),
					A = !1,
					P = {
						x: 0,
						y: 0
					};
				Object.defineProperty(this, "pixels", {
					get: function() {
						return !a
					},
					set: function(e) {
						a = !e, d.resize()
					}
				}), window.addEventListener("keydown", M), this.toggled = !0, this.toggle = function(e) {
					return !0 === e ? d.visible = d.toggled = !0 : !1 === e ? d.visible = d.toggled = !1 : (d.visible = !d.visible, d.toggled = d.visible), b.off("stagemousemove", u), d.visible && (u = b.on("stagemousemove", I, d)), d
				}, !(this.resize = function() {
					return !!d && (d.removeChild(k), k = null, b && (S(), I(), setTimeout(function() {
						d.removeChild(k), k = null, S()
					}, 200)), !0)
				}) !== e && De(this, c), this.dispose = function() {
					return clearInterval(T), d.removeAllChildren(), window.removeEventListener("keydown", M), d.parent && d.parent.removeChild(d), !(d = null)
				}
			} else zog("zim controls - Grid(): Please provide container with bounds for the obj (setBounds())");

			function B(e, t, o) {
				var n = new oo.Container({
					style: !1
				});
				return n.shape = new createjs.Shape, n.shape.graphics.s(t).ss(1).f(e).r(0, 0, g, p), n.shape.alpha = .9, n.addChild(n.shape), n.label = new createjs.Text("10", "16px arial", o), n.label.textAlign = "center", n.label.textBaseline = "middle", n.addChild(n.label), n.mouseChildren = !1, n.mouseEnabled = !1, n
			}

			function I(e) {
				var t;
				e ? (t = r.globalToLocal(e.rawX / b.scaleX, e.rawY / b.scaleY), P = t) : t = {
					x: P.x,
					y: P.y
				}, a ? (f.label.text = "x:" + Math.max(0, Math.min(Math.round(t.x / C * 100), 100)) + "%", f.x = Math.max(y, Math.min(t.x, z)), m.label.text = "y:" + Math.max(0, Math.min(Math.round(t.y / x * 100), 100)) + "%") : (f.label.text = "x:" + Math.max(0, Math.min(Math.round(t.x), Math.round(C))), f.x = Math.max(y, Math.min(t.x, z)), m.label.text = "y:" + Math.max(0, Math.min(Math.round(t.y), Math.round(x)))), m.y = Math.max(w, Math.min(t.y, v)), b && b.update()
			}

			function S() {
				A = !0, r && r.getBounds && (C = r.getBounds().width, x = r.getBounds().height), b && (b.mouseMoveOutside = !0, b.enableMouseOver(10)), z = C - 2 * g / 3, v = x - p - p, k = new oo.Container({
					style: !1
				}), d.addChild(k);
				var e = new createjs.Shape;
				k.addChild(e);
				var t = e.graphics;
				t.s(i).ss(1);
				var o = new createjs.Shape;
				if (k.addChild(o), a) {
					for (n = 1; n < 22; n++) t.mt(n * C / 20, 0).lt(n * C / 20, x);
					for (n = 1; n < 20; n++) t.mt(0, n * x / 20).lt(C, n * x / 20);
					e.alpha = .3, (t = o.graphics).s(i).ss(1);
					for (n = 1; n < 10; n++) t.mt(n * C / 10, 0).lt(n * C / 10, x);
					for (n = 1; n < 10; n++) t.mt(0, n * x / 10).lt(C, n * x / 10)
				} else {
					for (var n = 0; n < C / h; n++) t.mt(n * h, 0).lt(n * h, x);
					for (var n = 0; n < x / h; n++) t.mt(0, n * h).lt(C, n * h);
					e.alpha = .3, (t = o.graphics).s(i).ss(1);
					for (var n = 0; n < C / (10 * h); n++) t.mt(n * (10 * h), 0).lt(n * (10 * h), x);
					for (var n = 0; n < x / (10 * h); n++) t.mt(0, n * (10 * h)).lt(C, n * (10 * h))
				}
				t.s("#FFFFFF").ss(8), t.mt(C / 2, x / 2 - 40).lt(C / 2, x / 2 + 40), t.mt(C / 2 - 40, x / 2).lt(C / 2 + 40, x / 2), t.s("#000000").ss(4), t.mt(C / 2, x / 2 - 40).lt(C / 2, x / 2 + 40), t.mt(C / 2 - 40, x / 2).lt(C / 2 + 40, x / 2), t.s(i).ss(3), t.dr(0, 0, C, x), o.alpha = .5, k.cache(0, 0, C, x), d.addChild(f), d.addChild(m), b && b.update()
			}

			function M(e) {
				e = e || event, b && (String.fromCharCode(e.keyCode) == t.toUpperCase() && d.toggle(), String.fromCharCode(e.keyCode) == o.toUpperCase() && (d.removeChild(k), k = null, d.pixels = !d.pixels))
			}
		}, oo.extend(oo.Grid, oo.Container, "clone", "zimContainer", !1), oo.Tile = function(e, t, o, n, r, a, l, i, s, c, u, g, p, d, f, m, z, v, b, y, C, x) {
			var k;
			if (k = zob(oo.Tile, arguments, "obj, cols, rows, spacingH, spacingV, width, height, squeezeH, squeezeV, colSize, rowSize, align, valign, count, mirrorH, mirrorV, snapToPixel, clone, events, group, style, inherit", this)) return k;
			z_d("66.5"), this.zimContainer_constructor(null, null, null, null, !1), this.type = "Tile", this.group = y;
			var T = !1 === C ? {} : oo.getStyle(this.type, this.group, x);
			zot(e) && (e = null != T.obj ? T.obj : new oo.Circle), zot(t) && (t = null != T.cols ? T.cols : 1), zot(o) && (o = null != T.rows ? T.rows : 1), zot(a) && (a = null != T.width ? T.width : null), zot(l) && (l = null != T.height ? T.height : null), zot(c) && (c = null != T.colSize ? T.colSize : null), zot(u) && (u = null != T.rowSize ? T.rowSize : null), zot(a) || (c = null), zot(l) || (u = null), zot(n) && (n = null != T.spacingH ? T.spacingH : null), zot(r) && (r = null != T.spacingV ? T.spacingV : null), !zot(n) && zot(c) || (n = 0), !zot(r) && zot(u) || (r = 0), zot(i) && (i = null != T.squeezeH && T.squeezeH), zot(s) && (s = null != T.squeezeV && T.squeezeV), zot(g) && (g = null != T.align ? T.align : "left"), zot(p) && (p = null != T.valign ? T.valign : "top"), zot(d) && (d = null != T.count ? T.count : null), 0 == d && (d = null, zon && zog("ZIM Tile() - count parameter of 0 is ignored - see docs")), zot(f) && (f = null != T.mirrorH && T.mirrorH), zot(m) && (m = null != T.mirrorV && T.mirrorV), zot(z) && (z = null == T.snapToPixel || T.snapToPixel), z && (e && e.stage ? e.stage.snapToPixelEnabled = !0 : "undefined" != typeof elem && zimDefaultFrame && (zimDefaultFrame.stage.snapToPixelEnabled = !0)), zot(v) && (v = null == T.clone || T.clone), zot(b) && (b = null == T.events || T.events);
			var A = this;
			A.cols = t, A.rows = o, A.spacingH = n, A.spacingV = r, A.squeezeH = i, A.squeezeV = s;
			var P, B = "function" == typeof g,
				I = "function" == typeof p;
			A.align = B ? "left" : g, A.valign = I ? "top" : p, A.mirrorH = f, A.mirrorV = m, A.items = [];
			var S, M, E, O, j, L, D, Y, X, R, _, W, F, G, H = 0;
			e: for (var N = 0; N < o; N++)
				for (var V = 0; V < t; V++) {
					if (H++, !zot(d) && d < H) break e;
					zot(P = oo.Pick.choose(e)) && (P = new oo.Container(0, 0, 0, 0)), v && (0 == N && 0 == V || (P = P.clone())), b && P.on("change", function(e) {
						var t = new createjs.Event("change");
						t.item = e.currentTarget, zot(e.currentTarget.type), A.dispatchEvent(t)
					}), A.items.push(P), P.tileNum = H - 1
				}

			function q() {
				A.removeAllChildren(), S = [], M = [], E = [], O = [], j = [], X = Y = D = L = 0, R = [], _ = [], W = [], G = [], F = [], A.items && A.items.length || (A.items = []), d = A.items.length;
				for (var e, t = 0, o = 0, n = 0, r = 0; r < d; r++) o = Math.floor(r / A.cols), n = r % A.cols, zot(S[o]) && (S[o] = []), zot(A.items[r]) && (A.items[r] = new Container(0, 0, 0, 0)), S[o][n] = A.items[r];
				A.rows = Math.max(1, S.length), A.cols = Math.max(1, zot(S[0]) ? 0 : S[0].length);
				e: for (o = 0; o < A.rows; o++) {
					R.push([]), _.push([]), G.push([]), u && zot(l) && (h = oo.Pick.choose(u));
					for (r = 0; r < A.cols; r++) {
						if (t++, !zot(d) && d < t) break e;
						(e = S[o][r]).snapToPixel = z, A.addChild(e), R[o].push(e.scaleX), _[o].push(e.scaleY), 0 == o && c && zot(a) && (w = oo.Pick.choose(c)), 0 == o && F.push(oo.Pick.choose(g)), c && zot(a) || (w = Math.abs(e.width)), u && zot(l) || (h = Math.abs(e.height)), G[o][r] = [w, h], zot(O[r]) && (O[r] = 0), zot(j[o]) && (j[o] = 0), w > O[r] && (O[r] = w), h > j[o] && (j[o] = h), zot(M[o]) && (M[o] = 0), zot(E[r]) && (E[r] = 0), M[o] += w, E[r] += h, M[o] > L && (L = M[o]), E[r] > D && (D = E[r]), zot(W[r]) && (W[r] = 0), W[r]++
					}
				}
				if (!1 === A.squeezeH)
					for (r = 0; r < O.length; r++) {
						var i = O[r];
						Y += i
					}
				if (!1 === A.squeezeV)
					for (r = 0; r < j.length; r++) {
						i = j[r];
						X += i
					}
			}

			function K(e, t) {
				var o, n, r, i;
				e <= 0 && (e = null), t <= 0 && (t = null), o = zot(e) || "full" != A.squeezeH ? zot(e) ? 0 < Y ? Y + (A.cols - 1) * A.spacingH : L + (A.cols - 1) * A.spacingH : Math.max(L + (A.cols - 1) * A.spacingH, e) : e, n = zot(t) || "full" != A.squeezeV ? zot(t) ? 0 < X ? X + (A.rows - 1) * A.spacingV : D + (A.rows - 1) * A.spacingV : Math.max(D + (A.rows - 1) * A.spacingV, t) : t, A.setBounds(0, 0, o, n);
				var a = [],
					l = [],
					s = [];
				for (N = 0; N < S.length; N++)
					for (r = S[N], i = 0, zot(e) || 0, V = 0; V < r.length; V++) {
						var c, u;
						P = r[V], 0 == N && (a[V] = 0, zot(t) || ("full" == A.squeezeV ? l[V] = 1 < W[V] ? (t - E[V]) / (W[V] - 1) : 0 : A.squeezeV ? l[V] = 1 < W[V] ? Math.max(A.spacingV, (t - E[V]) / (W[V] - 1)) : 0 : l[V] = 1 < W[V] ? Math.max(A.spacingV, (n - E[V]) / (W[V] - 1)) : 0), A.squeezeV ? "center" == A.valign || "middle" == A.valign ? s[V] = (n - (E[V] + (W[V] - 1) * (zot(t) ? A.spacingV : l[V]))) / 2 : "bottom" == A.valign ? s[V] = n - (E[V] + (W[V] - 1) * (zot(t) ? A.spacingV : l[V])) : s[V] = 0 : s[V] = 0), P.getBounds(), 0 == V && (zot(e) || (u = "full" == A.squeezeH ? 1 < r.length ? (e - M[N]) / (r.length - 1) : 0 : A.squeezeH ? 1 < r.length ? Math.max(A.spacingH, (e - M[N]) / (r.length - 1)) : 0 : 1 < r.length ? Math.max(A.spacingH, (o - M[N]) / (r.length - 1)) : 0), c = A.squeezeH ? "center" == A.align || "middle" == A.align ? (o - (M[N] + (r.length - 1) * (zot(e) ? A.spacingH : u))) / 2 : "right" == A.align ? o - (M[N] + (r.length - 1) * (zot(e) ? A.spacingH : u)) : 0 : 0, finalVAlign = oo.Pick.choose(p)), g = F[V];
						var d = G[N][V][0],
							h = G[N][V][1];
						A.mirrorH && V % 2 == 1 && (P.scaleX = -R[N][V]), P.pos(i, null), !A.squeezeH && B ? !zot(e) || "center" != g && "middle" != g ? zot(e) && "right" == g && (P.x += O[V] - P.width) : P.x += (O[V] - P.width) / 2 : A.squeezeH ? !zot(e) || "center" != A.align && "middle" != A.align ? zot(e) && "right" == A.align && (P.x += d - P.width) : P.x += (d - P.width) / 2 : !zot(e) || "center" != A.align && "middle" != A.align ? zot(e) && "right" == A.align && (P.x += O[V] - P.width) : P.x += (O[V] - P.width) / 2, A.mirrorV && N % 2 == 1 && (P.scaleY = -_[N][V]), P.pos(null, a[V]), !A.squeezeV && I ? !zot(t) || "center" != finalVAlign && "middle" != finalVAlign ? zot(t) && "bottom" == finalVAlign && (P.y += j[N] - P.height) : P.y += (j[N] - P.height) / 2 : A.squeezeV ? !zot(t) || "center" != A.valign && "middle" != A.valign ? zot(t) && "bottom" == A.valign && (P.y += h - P.height) : P.y += (h - P.height) / 2 : !zot(t) || "center" != A.valign && "middle" != A.valign ? zot(t) && "bottom" == A.valign && (P.y += j[N] - P.height) : P.y += (j[N] - P.height) / 2, !0 !== A.squeezeH && zot(e) ? i += O[V] + (zot(e) ? A.spacingH : u) : i += d + (zot(e) ? A.spacingH : u), P.x += c, P.y += s[V], !0 !== A.squeezeV && zot(t) ? a[V] += j[N] + (zot(t) ? A.spacingV : l[V]) : a[V] += h + (zot(t) ? A.spacingV : l[V])
					}
			}
			q(), K(a, l), this.remake = function(e) {
				return zot(e) || (A.items = e), q(), K(a, l), A
			}, this.resize = function(e, t) {
				return zot(e) && (e = a), zot(t) && (t = l), K(a = e, l = t), A
			}, Object.defineProperty(this, "items2D", {
				get: function() {
					for (var e, t = [], o = 0; o < A.items.length; o++) o % A.cols == 0 && (e = [], t.push(e)), e.push(A.items[o]);
					return t
				},
				set: function(e) {
					zon && zog("ZIM Tile() - items2D is read only")
				}
			}), Object.defineProperty(this, "items2DCols", {
				get: function() {
					for (var e = [], t = 0; t < A.cols; t++) e.push([]);
					for (t = 0; t < A.items.length; t++) e[t % A.cols][Math.floor(t / A.cols)] = A.items[t];
					return e
				},
				set: function(e) {
					zon && zog("ZIM Tile() - items2DCols is read only")
				}
			}), !1 !== C && De(this, T), this.clone = function() {
				return A.cloneProps(new oo.Tile(e.clone ? e.clone() : e, A.cols, A.rows, A.spacingH, A.spacingV, a, l, A.squeezeH, A.squeezeV, c, u, g, p, A.items.length, A.mirrorH, A.mirrorV, z, v, b, this.style, this.group))
			}
		}, oo.extend(oo.Tile, oo.Container, "clone", "zimContainer", !1), oo.Layout = function(b, y, w, C, x, k, T, t, e, o, n) {
			var r;
			if (r = zob(oo.Layout, arguments, "holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey, style, group, inherit", this)) return r;
			z_d("80"), this.cjsEventDispatcher_constructor(), this.type = "Layout", this.group = o;
			var i = !1 === e ? {} : oo.getStyle(this.type, this.group, n);
			if (zot(b) && (b = null != i.holder ? i.holder : null), zot(T) && (T = null != i.scalingObject ? i.scalingObject : null), !zot(b) && b.getBounds)
				if ((T = zot(T) ? b : T).getBounds && T.getBounds()) {
					var A = T.getBounds();
					b.setBounds(0, 0, A.width, A.height), zot(w) && (w = null != i.lastMargin ? i.lastMargin : 0), zot(x) && (x = null == i.vertical || i.vertical), zot(C) && (C = null != i.backgroundColor ? i.backgroundColor : ""), zot(t) && (t = null != i.hideKey ? i.hideKey : "B"), zot(k) && (k = null != i.regionShape ? i.regionShape.clone() : null);
					var P = new createjs.Shape,
						B = this;
					if (this.active = !0, zot(y) && (y = null != i.regions ? oo.copy(i.regions) : null), !zot(y)) {
						var I;
						this.regions = y;
						var S = 0,
							M = "minWidth",
							E = "width",
							O = "height",
							j = "marginLeft",
							L = "maxHeight";
						x && (M = "minHeight", E = "height", O = "width", j = "marginTop", L = "maxWidth", "y", "x");
						for (var a = 0; a < y.length; a++) {
							if (!(I = y[a]).object || !I.object.getBounds()) return void zog("zim controls - Layout(): each region object must have an object with setBounds() set");
							I[M] || (I[M] = 0), I[E] || (I[E] = 0), I.backgroundColor || (I.backgroundColor = ""), I.given = 0, I.maxGiven = 0, zot(I[j]) && (I[j] = 1e-4), I[L] || (I[L] = 100), x ? (I.align || (I.align = "middle"), I.valign || (0 == a ? I.valign = "top" : a == y.length - 1 ? I.valign = "bottom" : I.valign = "middle", 1 == y.length && (I.valign = "middle"))) : (I.valign || (I.valign = "top"), I.align || (0 == a ? I.align = "left" : a == y.length - 1 ? I.align = "right" : I.align = "middle", 1 == y.length && (I.align = "middle"))), I[E] && (I[M] = 0), S += I[E] + I[j]
						}
						if (100 < (S += w)) zog("zim controls - Layout(): cannot fit regions into 100% bounds");
						else {
							var D = 100 - S;
							Y(), this.resize = function() {
								if (B.active) {
									A = T.getBounds(), b.setBounds(0, 0, A.width, A.height), P.graphics.clear(), "" != C && P.graphics.f(C).r(0, 0, A.width, A.height);
									for (var e = 0; e < y.length; e++)(I = y[e]).maxGiven = 0, I.marginGiven = 0;
									for (var t, o, n, r = !0, i = D; r;) {
										t = !(r = !1);
										for (e = 0; e < y.length; e++) 0 < (I = y[e]).given && 0 == I.maxGiven && (d = I.object.getBounds()[E], h = I.object.getBounds()[O], o = I.given * A[E] / 100, (n = I[L] * A[O] / 100) < h / d * o ? (I.maxGiven = d / h * n * 100 / A[E], I.given - I.maxGiven, i -= I.maxGiven) : t = !1);
										if (t) break;
										for (e = totalPrimaries = 0; e < y.length; e++) 0 == (I = y[e])[E] && 0 == I.maxGiven && (totalPrimaries += I.object.getBounds()[E]);
										for (e = 0; e < y.length; e++) 0 == (I = y[e])[E] && 0 == I.maxGiven && (I.given = I.object.getBounds()[E] / totalPrimaries * i)
									}
									var a = !0;
									if (0 < (I = y[0]).maxGiven ? I.maxGiven < I[M] && (I[E] = I[M], a = !1) : 0 < I.given && I.given < I[M] && (I[E] = I[M], a = !1), 0 < (I = y[y.length - 1]).maxGiven ? I.maxGiven < I[M] && (I[E] = I[M], a = !1) : 0 < I.given && I.given < I[M] && (I[E] = I[M], a = !1), !a) {
										for (e = S = 0; e < y.length; e++) I = y[e], S += I[E] + I[j];
										return 100 < (S += w) ? void zog("zim display - Layout(): cannot fit regions into 100% bounds") : (D = 100 - S, Y(), void B.resize())
									}
									var l = !0,
										s = 0,
										c = 0;
									for (e = 0; e < y.length; e++) s += (I = y[e])[j], 0 < I[E] ? c += I[E] : 0 < I.maxGiven ? c += I.maxGiven : 0 < I.given && (c += I.given), 0 == I[E] && (l = !1);
									if (l || t) {
										var u = 100 - c - (s += w);
										if (s -= w + y[0][j], 0 != u && 0 != s)
											for (e = 0; e < y.length; e++) 0 != e && ((I = y[e]).marginGiven = I[j] / s * (s + u))
									}
									var d, h, g, p, f, m = 0,
										z = 0;
									if (k && k.graphics) {
										var v = k.graphics;
										v.c()
									}
									for (e = 0; e < y.length; e++) 0 < (I = y[e]).marginGiven ? m += I.marginGiven * A[E] / 100 : m += I[j] * A[E] / 100, d = (d = 0 < I[E] ? I[E] : 0 < I.maxGiven ? I.maxGiven : 0 < I.given ? I.given : 0) * A[E] / 100, h = I[L] * A[O] / 100, z = (A[O] - h) / 2, g = x ? oo.fit(I.object, z, m, h, d) : oo.fit(I.object, m, z, d, h), "top" == I.valign ? I.object.y = g.bY : "bottom" == I.valign && (I.object.y = g.bY + g.bHeight - g.height), "left" == I.align ? I.object.x = g.bX : "right" == I.align && (I.object.x = g.bX + g.bWidth - g.width), k && k.graphics && (v.s("white").ss(2).r(g.bX, g.bY, g.bWidth, g.bHeight), v.s("#ff8203").sd([20, 20]).r(g.bX, g.bY, g.bWidth, g.bHeight).sd()), f = p = 0, 0 != m && m + d != A[E] || (x ? f = 1 : p = 1), h == A[O] && (x ? p = 1 : f = 1), "" != I.backgroundColor && P.graphics.f(I.backgroundColor).r(g.bX, g.bY, g.bWidth + p, g.bHeight + f), m += d
								}
							}, this.resize(), k && b.addChild(k), b.addChildAt(P, 0), window.addEventListener("keydown", l), this.disable = function() {
								B.active = !1, window.removeEventListener("keydown", l), k && (k.alpha = 0)
							}, this.enable = function() {
								B.active = !0, window.addEventListener("keydown", l), B.resize(), k && (k.alpha = 1)
							}, this.removeShape = function() {
								k && (k.graphics.clear(), b.removeChild(k), k = null, k = !1), window.removeEventListener("keydown", l)
							}, this.toggled = !0, this.toggle = function(e) {
								return k.visible = !0 === e || !1 !== e && !k.visible, B.toggled = k.visible, B
							}, !(this.addShape = function(e, t) {
								B.removeShape(), k = e, window.addEventListener("keydown", l), b.addChild(k), B.resize()
							}) !== e && De(this, i), this.dispose = function() {
								return B.removeShape(), !0
							}
						}
					}
				} else zog("zim controls - Layout(): holder must have bounds set or provide a scalingObject with bounds");
			else zog("zim controls - Layout(): please provide an object with bounds set that holds the objects being laid out");

			function Y() {
				for (var e = 0, t = 0; t < y.length; t++)((I = y[t]).given = 0) == I[E] && (e += I.object.getBounds()[E]);
				for (t = 0; t < y.length; t++) 0 == (I = y[t])[E] && (I.given = I.object.getBounds()[E] / e * D)
			}

			function l(e) {
				e = e || event, k && String.fromCharCode(e.keyCode) == t.toUpperCase() && (B.toggle(), k.stage && k.stage.update())
			}
		}, oo.extend(oo.Layout, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.Accessibility = function(d, e, o, t, n, g, p, r, i, a, l, s, c, u, h) {
			var f;
			if (f = zob(oo.Accessibility, arguments, "appName, tabOrder, tabIndex, cycle, decimals, frame, application, alwaysHighlight, AHTime, AHColor, AHBorderWidth, AHBorderPadding, AHAlpha, AHObject, AHObjectScale", this)) return f;
			if (z_d("30.5"), this.cjsEventDispatcher_constructor(), this.type = "Accessibility", zot(d) && (d = "application"), zot(t) && (t = !1), zot(n) && (n = 2), zot(g) && (g = zimDefaultFrame), zot(p) && (p = !oo.mobile()), zot(r) && (r = !1), zot(i) && (i = 700), zot(a) && (a = "brown"), zot(l) && (l = 3), zot(s) && (s = 5), zot(c) && (c = .8), zot(h) && (h = .8), zot(u)) {
				var m = new oo.Shape({
					style: !1
				});
				m.mouseEnabled = !1
			} else u.mouseEnabled && (u.mouseEnabled = !1);
			var z = g.retina && window.devicePixelRatio || 1,
				v = this;
			v.cycle = t, v.decimals = n, v.alwaysHighlight = r, v.AHTime = i, v.AHColor = a, v.AHBorderWidth = l, v.AHBorderPadding = s, v.AHAlpha = c, v.AHObjectScale = h;
			var b, y, w, C, x, k, T, A, P = -1,
				B = -1,
				I = [],
				S = [],
				M = {
					RadioButtons: "option",
					Tabs: "tab",
					Pad: "key"
				},
				E = g.canvas.id,
				O = oo.mobile(),
				j = !1,
				L = null,
				D = [];

			function Y(e) {
				var t = e.currentTarget.boundsToGlobal(),
					o = t.x + t.width / 2,
					n = t.y + t.height / 2;
				e.stageX / e.target.stage.scaleX < o - 5 || e.stageX / e.target.stage.scaleX > o + 5 || e.stageY / e.target.stage.scaleY < n - 5 || e.stageY / e.target.stage.scaleY > n + 5 ? _() : R()
			}

			function X() {
				C && (C.innerHTML = "")
			}

			function R() {
				var e, t;
				L = !0, H(), C && C.setAttribute("aria-hidden", !1), oo.ACTIONEVENT = "click", zns || (ACTIONEVENT = "click"), g.stage.removeChild(b), v.alwaysHighlight = !1, g.stage.update();
				for (var o = 0; o < P.length; o++)(t = (e = P[o]).obj.zimTabTag).disabled = !1, e.title = e.title.replace(/\s\(use arrow keys\)/, ""), t.setAttribute("aria-label", e.title), t.addEventListener("focus", W)
			}

			function _() {
				L = !1;
				for (var e = 0; e < P.length; e++) P[e].obj.zimTabTag.disabled = !1;
				H(), r && function() {
					for (var e = 0; e < I.length; e++) {
						var t = I[e];
						t.zimObject && ("Loader" == t.zimObject.type || "TextArea" == t.zimObject.type || "Tag" == t.zimObject.type) || (I[e].style.left = "-2000px")
					}
				}()
			}

			function W(e) {
				var t = e.currentTarget,
					o = t.zimObject;
				B = o.zimTabIndex, o.focus = !0;
				var n = new createjs.Event("change");
				n.title = t.getAttribute("aria-label"), v.dispatchEvent(n)
			}

			function F(e) {
				L = !1, e.target.focusTab.focus()
			}

			function G() {
				zot(L) || L ? R() : _()
			}

			function H() {
				j = !0, y.removeEventListener("focus", G), w.removeEventListener("focus", G), x.removeEventListener("focus", F), k.removeEventListener("focus", F), x.parentNode.removeChild(x), k.parentNode.removeChild(k), T.removeEventListener("focus", F), A.removeEventListener("focus", F), T.parentNode.removeChild(T), A.parentNode.removeChild(A);
				for (var e = 0; e < D.length; e++) D[e][0].off("mousedown", D[e][1])
			}

			function N(e) {
				var t = e.currentTarget;
				if ("RadioButton" == t.type || "TabsButton" == t.type || "PadButton" == t.type)
					for (var o = 0; o < t.zimTabParent.buttons.length; o++) {
						var n = t.zimTabParent.buttons[o];
						n.zimTabTag.setAttribute("aria-label", n.zimTabTag.getAttribute("aria-label").split(" - currently")[0] + (t.zimTabParent.selectedIndex == n.tabIndex ? " - currently selected." : " - currently not selected."))
					}
				v.tabIndex = e.currentTarget.zimTabIndex, v.activatedObject = t
			}

			function V(e) {
				return e.talk ? e.talk : "TextArea" == e.type || "RadioButtons" == e.type || "Tabs" == e.type || "Pad" == e.type ? e.type : "Waiter" == e.type ? "Waiter active - please wait" : e.text ? e.type + " - " + ("a" == e.text || "A" == e.text ? "eh" : e.text) : e.type + ("Dial" == e.type || "Slider" == e.type || "ColorPicker" == e.type || "Stepper" == e.type ? " (use arrow keys)" : "") + ("TextArea" == e.type ? " (press ENTER to edit)" : "")
			}

			function q(e) {
				var t = e.obj;
				e.title = e.title.replace(/\.$/, ""), "RadioButton" == t.type || "TabsButton" == t.type || "PadButton" == t.type ? e.title = e.title + (t.tabIndex == t.zimTabParent.selectedIndex ? " - currently selected" : " - currently not selected") : "CheckBox" == t.type ? e.title = e.title + (t.checked ? " - currently checked" : " - currently not checked") : "Stepper" == t.type ? e.title = e.title + " - currently displaying " + t.currentValue : "Slider" == t.type || "Dial" == t.type ? e.title = e.title + " - currently at " + oo.decimals(t.currentValue, v.decimals) : "ColorPicker" == t.type ? e.title = e.title + " - currently at " + t.selectedColor : "TextArea" == t.type ? e.title = e.title + ("" != t.tag.value ? "" : " - placeholder: " + t.tag.placeholder) : "Indicator" == t.type && (e.title = e.title + " - currently " + (0 <= t.selectedIndex ? "at " + (t.selectedIndex + 1) + " of " + t.num : "not indicating")), e.title += "."
			}

			function K(e, t, o, n, r) {
				var i;
				if (n && (d = n.obj), n && ("TextArea" == d.type || "Loader" == d.type)) return (i = d.tag).setAttribute("aria-label", t), d && i.setAttribute("aria-hidden", !d.stage), "before" == r ? o.parentNode.insertBefore(i, o) : o.parentNode.insertBefore(i, o.nextSibling), i.style.zIndex = -5, i.zimObject = d, n.obj.zimTabTag = i, I.push(i), i;
				if (!n || "Dial" != d.type && "Slider" != d.type && "Stepper" != d.type && "ColorPicker" != d.type) i = document.createElement("div"), d && (i.zimObject = d), i.innerHTML = "tag", i.setAttribute("role", p ? "application" : "button");
				else {
					var a, l, s = [];
					if ("Dial" == d.type || "Slider" == d.type)
						for (var c = d.step <= 0 ? (d.max - d.min) / 20 : d.step, u = d.min; u < d.max; u += c) s.push(d.min + u);
					else "Stepper" == d.type ? s = d.stepperArray : "ColorPicker" == d.type && (s = d.colors);
					(i = document.createElement("select")).disabled = !0, i.zimObject = d, i.addEventListener("change", function(e) {
						L && (e.currentTarget.zimObject.zimTabParent.currentValueEvent = e.target.value, g.stage.update())
					}), i.size = 1;
					for (u = 0; u < s.length; u++) a = s[u], (l = document.createElement("option")).setAttribute("aria-label", a), l.innerHTML = a, i.add(l), a == d.zimTabParent.currentValue && l.setAttribute("selected", "selected");
					i.setAttribute("role", "button")
				}
				if (i.setAttribute("id", e), i.setAttribute("tabindex", 0), i.setAttribute("aria-label", t), d && i.setAttribute("aria-hidden", !d.stage), "before" == r ? o.parentNode.insertBefore(i, o) : o.parentNode.insertBefore(i, o.nextSibling), i.style.position = "absolute", n) {
					var d, h = (d = n.obj).boundsToGlobal();
					g.retina ? (i.style.left = g.x + h.x * g.scale / z + "px", i.style.top = g.y + h.y * g.scale / z + "px", i.style.width = h.width * g.scale / z + "px", i.style.height = h.height * g.scale / z + "px") : (i.style.left = g.x + h.x * g.scale + "px", i.style.top = g.y + h.y * g.scale + "px", i.style.width = h.width * g.scale + "px", i.style.height = h.height * g.scale + "px"), n.obj.zimTabTag = i
				} else i.style.left = "-1000px", i.style.top = g.y + "px";
				return i.style.overflow = "hidden", i.style.zIndex = -5, i.style.fontSize = "20px", i.style.color = "rgba(0,0,0,.01)", I.push(i), i
			}
			Object.defineProperty(this, "tabOrder", {
				get: function() {
					return P
				},
				set: function(e) {
					y && y.removeEventListener("focus", X), w && w.removeEventListener("focus", X);
					for (var t = 0; t < I.length; t++) I[t].parentElement && (I[t].outerHTML = "");
					var o, n;
					for (I = [], t = 0; t < S.length; t++)(o = P[t]) && S[t][0].off("mousedown", S[t][1]);
					S = [], P = [];
					var r = [],
						i = g.canvas,
						a = 0;
					for (t = 0; t < e.length; t++) {
						if ("HotSpots" == (o = e[t]).type && (e.splice.apply(e, [t, 1].concat(o.hotSpots)), o = o.hotSpots[0]), "HotSpot" == o.type && (o = o.spot), o.constructor == {}.constructor) {
							if (!(n = o.obj) || !n.getStage) continue;
							o.title || (o.title = V(n))
						} else o = {
							obj: n = o,
							title: V(o)
						};
						if ("RadioButtons" == n.type || "Tabs" == n.type || "Pad" == n.type) {
							var l = [];
							a--;
							for (var s = 0; s < n.buttons.length; s++) {
								a++;
								var c = n.buttons[s],
									u = {
										obj: c,
										title: o.title + " - " + M[n.type] + ": " + ("a" == c.text || "A" == c.text ? "eh" : c.text)
									};
								l.push(u), c.zimTabParent = n, c.zimTabParent.zimAccessibility = v, c.zimTabIndex = t + a, c.tabIndex = s, c.zimAccessibility = v, q(u), i = K(E + "Tab" + (t + a), u.title, i, u), S.push([c, c.on("mousedown", N)]), j || D.push([c, c.on("mousedown", Y)])
							}
							r = r.concat(l)
						} else n.zimTabIndex = t + a, n.zimTabParent = n, q(o), n.zimAccessibility = v, S.push([n, n.on("mousedown", N)]), j || D.push([n, n.on("mousedown", Y)]), r.push(o), i = K(E + "Tab" + (t + a), o.title, i, o)
					}(y = v.startAppTag = K(E + "PrefixTab", d + " start", g.canvas, null, "before")).addEventListener("focus", X), j || (y.addEventListener("focus", G), (x = K(E + "noAriaTab", "", y, null, "before")).setAttribute("aria-hidden", !0), x.focusTab = y, x.addEventListener("focus", F), (T = K(E + "noAriaTab", "", y)).setAttribute("aria-hidden", !0), T.focusTab = y, T.addEventListener("focus", F)), i = K(E + "BufferTab", "", i), O && i.setAttribute("aria-hidden", !0), i = w = v.endAppTag = K(E + "SuffixTab", d + " end", i), w.addEventListener("focus", X), j || (w.addEventListener("focus", G), i = k = K(E + "noAriaTab", "", w), k.setAttribute("aria-hidden", !0), k.focusTab = w, k.addEventListener("focus", F), (A = K(E + "noAriaTab", "", w, null, "before")).setAttribute("aria-hidden", !0), A.focusTab = w, A.addEventListener("focus", F)), P = r
				}
			}), Object.defineProperty(this, "tabIndex", {
				get: function() {
					return B
				},
				set: function(e) {
					if (_state)
						if (e < 0 || e >= P.length) u();
						else {
							e != B && c();
							var t = P[e].obj;
							if (t.stage) {
								if (B = e, t.focus = !0, Q = !(Z = !0), v.changeTitle(t), t.zimTabTag.focus(), setTimeout(function() {
										t.zimTabTag.focus();
										var e = new createjs.Event("change");
										e.title = t.zimTabTag.getAttribute("aria-label"), v.dispatchEvent(e)
									}, 150), v.alwaysHighlight && !L) {
									if (v.AHObject) {
										b = v.AHObject;
										var o = oo.boundsToGlobal(t);
										v.AHObject.alp(v.AHAlpha).addTo(g.stage, null, !1), v.AHObject.fit(o.x, o.y, o.width, o.height), v.AHObject.sca(v.AHObject.scaleX * v.AHObjectScale), 0 < v.AHTime && (U = setTimeout(function() {
											g.stage.removeChild(v.AHObject), g.stage.update()
										}, v.AHTime))
									} else {
										b = m;
										var n = t.getBounds(),
											r = t.localToGlobal(n.x - 5, n.y - 5),
											i = t.localToGlobal(n.x + n.width + 5, n.y - 5),
											a = t.localToGlobal(n.x + n.width + 5, n.y + n.height + 5),
											l = t.localToGlobal(n.x - 5, n.y + n.height + 5),
											s = m.graphics;
										s.clear(), s.s(v.AHColor).ss(v.AHBorderWidth).mt(r.x, r.y).lt(i.x, i.y).lt(a.x, a.y).lt(l.x, l.y).lt(r.x, r.y).cp(), m.alpha = v.AHAlpha, 0 < v.AHTime && (U = setTimeout(function() {
											g.stage.removeChild(m), g.stage.update()
										}, v.AHTime))
									}
									g.stage.addChild(b), g.stage.update()
								}
							} else u()
						}
					function c() {
						if (B && -1 < B) P && P[B] && (P[B].obj.focus = !1);
						else
							for (var e = 0; e < P.length; e++) P[e].obj.focus = !1
					}

					function u() {
						c(), Z = !1, v.AHObject && g.stage.removeChild(v.AHObject), v.alwaysHighlightShape && g.stage.removeChild(v.alwaysHighlightShape), g.stage.update(), B = -1
					}
				}
			}), Object.defineProperty(this, "aria", {
				get: function() {
					return L
				},
				set: function(e) {
					(L = e) && R()
				}
			}), zot(e) ? setTimeout(function() {
				if (-1 == P) {
					P = [];
					var t = [];
					oo.loop(g.stage, function(e) {
						e.type && t.push(e)
					}), v.tabOrder = t, zot(o) || (v.tabIndex = o)
				}
			}, 50) : (P = [], v.tabOrder = e, zot(o) || (v.tabIndex = o));
			var U, Z = !1,
				Q = !0,
				J = g.on("keydown", function(e) {
					if (9 == e.keyCode && (function() {
							for (var e = !1, t = 0; t < I.length; t++)
								if (document.activeElement == I[t]) {
									e = !0;
									break
								}
							return !(document.activeElement != g.canvas && !e)
						}() || (Z = !1, -1 != v.tabIndex && (v.tabIndex = -1)), Z ? $(e) : function(e) {
							g.shiftKey || zid(E + "PrefixTab") != document.activeElement && g.canvas != document.activeElement ? !g.shiftKey || zid(E + "SuffixTab") != document.activeElement && zid(E + "BufferTab") != document.activeElement || (0 < P.length && (P[0].obj.focus = !0), Z = Q = !0, $(e)) : (0 < P.length && (P[P.length - 1].obj.focus = !0), Z = Q = !0, $(e))
						}(e)), Z && 0 < P.length && 0 <= v.tabIndex && 13 == e.keyCode) {
						var t = P[v.tabIndex],
							o = t.obj;
						if (t && o.stage) {
							var n = new createjs.Event("mousedown"),
								r = new createjs.Event("click");
							n.fromEnter = r.fromEnter = !0, "Pane" == o.type ? (o.backdrop.dispatchEvent(n), o.backdrop.dispatchEvent(r)) : (o.dispatchEvent(n), o.dispatchEvent(r))
						}
					}
				});

			function $(e) {
				e.ctrlKey ? ee(e.shiftKey ? -1 : 1) : (e.shiftKey ? v.tab(-1) : v.tab(1), e.preventDefault())
			}

			function ee(e) {
				Z = !1, zid(E + (1 == e ? "SuffixTab" : "PrefixTab")).focus(), g.stage.removeChild(u), g.stage.update(), v.tabIndex = -1
			}
			this.tab = function(e) {
				if (clearTimeout(U), b && g.stage.removeChild(b), zot(e) && (e = 1), 0 != P.length)
					for (var t = 0; t < P.length; t++) {
						var o = P[t].obj;
						if (o.focus) {
							o.focus = !1;
							var n = t + e,
								r = (n + 1e4 * P.length) % P.length,
								i = P[r];
							o = i.obj;
							for (var a = 0, l = !1; !o.stage || !(!o.zimTabParent && (zot(o.enabled) || o.enabled) || o.zimTabParent && (zot(o.zimTabParent.enabled) || o.zimTabParent.enabled));)
								if (a++, r = ((n += e) + 100 * P.length) % P.length, o = (i = P[r]).obj, a == P.length) {
									l = !0;
									break
								}
							if (l || !v.cycle && n != r && !Q) return void ee(e);
							Q = !1, v.tabIndex = r;
							break
						}
					} else ee(e)
			};
			var te = !(this.changeTitle = function(e, t, o) {
				if ("number" != typeof e && (e = e.zimTabIndex), !zot(e))
					if (o && zot(t)) v.tabIndex = e;
					else {
						var n = P[e],
							r = n.obj;
						zot(t) && (t = r.zimTabTag.getAttribute("aria-label").split(" - currently")[0]), n.title = t, q(n), r.zimTabTag.setAttribute("aria-label", n.title), o && (v.tabIndex = e)
					}
			});
			this.talk = function(e) {
				te || ((C = K(E + "TalkTab", "", w)).setAttribute("role", "alert"), te = !0), C.setAttribute("aria-label", e), C.innerHTML = " ", C.innerHTML = e;
				var t = new createjs.Event("change");
				t.title = e, v.dispatchEvent(t)
			}, this.resize = function(e) {
				if (zot(e)) {
					if (v.alwaysHighlight && !zot(L)) return;
					for (var t = 0; t < P.length; t++) n(P[t].obj)
				} else {
					if ("number" != typeof e && (e = e.zimTabIndex), e < 0) return;
					var o = P[e].obj;
					if (!o.stage && b && o == v.currentObject && (g.stage.removeChild(b), g.stage.update()), v.alwaysHighlight && !zot(L)) return;
					n(o)
				}

				function n(e) {
					if ("TextArea" != e.type && "Loader" != e.type) {
						var t = e.boundsToGlobal(),
							o = e.zimTabTag;
						g.retina ? (o.style.left = g.x + t.x * g.scale / z + "px", o.style.top = g.y + t.y * g.scale / z + "px", o.style.width = t.width * g.scale / z + "px", o.style.height = t.height * g.scale / z + "px") : (o.style.left = g.x + t.x * g.scale / z / z + "px", o.style.top = g.y + t.y * g.scale / z / z + "px", o.style.width = t.width * g.scale / z / z + "px", o.style.height = t.height * g.scale / z / z + "px"), o.setAttribute("aria-hidden", !e.stage), o.hidden = !e.stage
					} else e.resize()
				}
			}, Object.defineProperty(this, "currentObject", {
				get: function() {
					return P[B] && P[B].obj ? P[B].obj : null
				},
				set: function(e) {
					for (var t = 0; t < P.length; t++)
						if (P[t].obj == e) {
							v.tabIndex = t;
							break
						}
				}
			}), _state = !0, Object.defineProperty(this, "enabled", {
				get: function() {
					return _state
				},
				set: function(e) {
					_state = e
				}
			}), this.dispose = function() {
				v.tabOrder = [];
				for (var e = 0; e < I.length; e++) I[e].parentElement && (I[e].outerHTML = "");
				v.removeAllEventListeners(), g.off("keydown", J)
			}
		}, oo.extend(oo.Accessibility, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.Manager = function(e) {
			z_d("75");
			var r = this;
			this.type = e, this.items = [], this.add = function(e) {
				Array.isArray(e) ? r.items = r.items.concat(e) : r.items.push(e)
			}, this.remove = function(e) {
				if (zot(e)) r.items = [];
				else {
					var t;
					Array.isArray(e) || (e = [e]);
					for (var o = 0; o < e.length; o++) {
						t = e[o];
						var n = r.items.indexOf(t); - 1 != n && r.items.splice(n, 1)
					}
				}
			}, this.resize = function() {
				if (r)
					for (var e = 0; e < r.items.length; e++) r.items[e].resize ? r.items[e].resize() : r.items.splice(e)
			}, this.toggle = function(e) {
				if (r)
					for (var t = 0; t < r.items.length; t++) r.items[t].toggle ? r.items[t].toggle(e) : r.items.splice(t)
			}, this.dispose = function() {
				for (var e = r.items.length - 1; 0 <= e; e--) r.items[e].dispose();
				return r.items = [], !(r = null)
			}
		}, oo.ResizeManager = function() {
			z_d("75.5"), oo.Manager.call(this, "ResizeManager")
		}, oo.ResizeManager.prototype = new oo.Manager, oo.ResizeManager.prototype.constructor = oo.ResizeManager, oo.TransformManager = function(e, r) {
			z_d("75.7");
			var a = this;

			function l(e) {
				!localStorage || e && !e.pressup || a.savePersist(e)
			}
			this.type = "TransformManager", this.items = [], this.add = function(e) {
				var t, o = [];
				o = Array.isArray(e) ? e : [e];
				for (var n = !1, r = 0; r < o.length; r++) t = o[r], 0 == a.items.length && 0 == r && (n = !0), "Bloob" == t.type || "Squiggle" == t.type ? (a.persistID || (n ? (n = !1, t.controlsVisible = !0, a.currentObject = t) : t.controlsVisible = !1), t.on("change", function(e) {
					var t = new createjs.Event("transformed");
					t.transformObject = e.target, t.transformType = e.controlType, a.dispatchEvent(t)
				}), t.on("controlsshow", function(e) {
					var t = new createjs.Event("transformshow");
					a.currentObject = t.transformObject = e.target, a.dispatchEvent(t)
				}), t.on("controlshide", function(e) {
					var t = new createjs.Event("transformhide");
					t.transformObject = e.target, a.currentObject = null, a.dispatchEvent(t)
				}), t.on("update", function(e) {
					var t = new createjs.Event("transformed");
					t.transformObject = e.target, t.transformType = e.controlType, a.dispatchEvent(t)
				})) : (transObj = t.transformControls, a.persistID || (n && "Layer" != t.type ? (n = !1, transObj && transObj.visible && transObj.show(), a.currentObject = t) : transObj && transObj.hide()), t.on("transformed", function(e) {
					var t = new createjs.Event("transformed");
					t.transformObject = e.target, t.transformType = e.transformType, a.dispatchEvent(t)
				}), t.on("transformshow", function(e) {
					var t = new createjs.Event("transformshow");
					a.currentObject = t.transformObject = e.target, a.dispatchEvent(t)
				}), t.on("transformhide", function(e) {
					var t = new createjs.Event("transformhide");
					t.transformObject = e.target, a.currentObject = null, a.dispatchEvent(t)
				}));
				a.items = a.items.concat(e)
			}, this.remove = function(e) {
				if (zot(e)) a.items = [];
				else {
					var t;
					Array.isArray(e) || (e = [e]);
					for (var o = 0; o < e.length; o++) {
						t = e[o], a.currentObject == t && (a.currentObject = null), t.transformedEvent && (t.off("transformed", t.transformedEvent), t.transformedEvent = null), "Bloob" == t.type || "Squiggle" == t.type ? t.controlsVisible = !1 : t.transformControls.remove();
						var n = a.items.indexOf(t); - 1 != n && a.items.splice(n, 1)
					}
					r && a.savePersist()
				}
			}, this.show = function(e) {
				if (!zot(e)) {
					if ("Bloob" == e.type || "Squiggle" == e.type) e.controlsVisible || (e.controlsVisible = !0);
					else {
						var t = e.transformControls;
						if (!t || t.visible) return;
						t.show()
					}
					a.currentObject = e
				}
			}, this.hide = function(e) {
				if (!zot(e))
					if (a.currentObject == e && (a.currentObject = null), "Bloob" == e.type || "Squiggle" == e.type) e.controlsVisible && (e.controlsVisible = !1);
					else {
						var t = e.transformControls;
						if (!t || t.visible) return;
						t.hide()
					}
			}, this.hideAll = function(e) {
				for (var t, o, n = 0; n < a.items.length; n++)
					if ((o = a.items[n]) && (o.transformControls || o.update)) {
						if (a.items[n] == e) continue;
						"Bloob" == o.type || "Squiggle" == o.type ? o.controlsVisible && (o.controlsVisible = !1) : (t = a.items[n].transformControls).visible && t.hide()
					} else a.items.splice(n);
				a.currentObject = null
			}, this.resize = function() {
				if (a) {
					for (var e, t = 0; t < a.items.length; t++)(e = a.items[t]) && (e.transformControls || e.update) ? "Bloob" == e.type || "Squiggle" == e.type ? e.update() : e.transformControls.resize() : a.items.splice(t);
					r && a.savePersist()
				}
			}, zot(e) || a.add(e);
			var s = "TransformManager persist(persistID) - sorry, must provide id";
			this.persist = function(e) {
				if (zot(e) && zon) zog(s);
				else {
					a.persistID = e;
					var t, n = 0;
					if (localStorage && localStorage[e]) {
						var r = a.persistData = JSON.parse(localStorage[e]);
						if (r.length == a.items.length)
							for (var i = 0; i < a.items.length; i++) r[i].controlsVisible && (a.currentObject = a.items[i]), !r[i] || "Bloob" != r[i].type && "Squiggle" != r[i].type ? r[i] && (zot(a.items[i].transformControls) ? function() {
								var t = a.items[i],
									o = r[i];
								interval(50, function(e) {
									t.transformControls && (t.transformControls.setData(o), t.dispatchEvent("persistset"), ++n == r.length && setTimeout(function() {
										a.dispatchEvent("persistcomplete")
									}, 100), e.clear())
								}, 20)
							}() : (a.items[i].transformControls.setData(r[i]), function() {
								var t = a.items[i];
								timeout(50, function(e) {
									t.dispatchEvent("persistset"), ++n == r.length && setTimeout(function() {
										a.dispatchEvent("persistcomplete")
									}, 100)
								})
							}())) : (a.items[i].points.length != r[i].points.length && (a.items[i].points = r[i].points), a.items[i].setData(r[i]))
					}
					for (i = 0; i < a.items.length; i++)(t = a.items[i]).transformedEvent || ("Bloob" == t.type || "Squiggle" == t.type ? (t.transformedEvent = t.on("change", l), t.transformedEvent = t.on("update", l), t.transformedEvent = t.on("controlsshow", l), t.transformedEvent = t.on("controlshide", l)) : (t.transformedEvent = t.on("transformed", l), t.transformedEvent = t.on("transformshow", l), t.transformedEvent = t.on("transformhide", l)))
				}
			}, this.savePersist = function(e) {
				for (var t = [], o = 0; o < a.items.length; o++) it = a.items[o], "Bloob" == it.type || "Squiggle" == it.type ? it.recordData && t.push(it.recordData()) : it.transformControls && it.transformControls.recordData && t.push(it.transformControls.recordData());
				a.persistData = t, localStorage[a.persistID] = JSON.stringify(t)
			}, this.clearPersist = function(e) {
				zot(e) && zon ? zog(s) : (a.persistData = null, localStorage && localStorage.removeItem(e))
			}, this.stopPersist = function() {
				for (var e = 0; e < a.items.length; e++) it = a.items[e], it.transformedEvent && ("Bloob" == it.type || "Squiggle" == it.type ? it.off("change", it.transformedEvent) : it.off("transformed", it.transformedEvent), it.transformedEvent = null);
				a.persistData = null
			}, zot(r) || a.persist(r), this.dispose = function(e, t) {
				if (zot(e) && (e = !0), a.removeAllEventListeners(), a.persistID && e && a.stopPersist(), t)
					for (var n = 0; n < a.items.length; n++) o = a.items[n], "Bloob" == o.type || "Squiggle" == o.type ? o.dispose() : o.transformControls.dispose()
			}
		}, oo.extend(oo.TransformManager, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.GuideManager = function() {
			z_d("77"), oo.Manager.call(this, "GuideManager")
		}, oo.GuideManager.prototype = new oo.Manager, oo.GuideManager.prototype.constructor = oo.GuideManager, oo.GridManager = function() {
			z_d("79"), oo.Manager.call(this, "GridManager")
		}, oo.GridManager.prototype = new oo.Manager, oo.GridManager.prototype.constructor = oo.GridManager, oo.LayoutManager = function() {
			z_d("81"), this.type = "LayoutManager";
			var t = this;
			this.items = [], this.add = function(e) {
				t.items.push(e)
			}, this.resize = function() {
				for (var e = 0; e < t.items.length; e++) t.items[e].resize()
			}, this.disable = function() {
				for (var e = 0; e < t.items.length; e++) t.items[e].disable()
			}, this.enable = function() {
				for (var e = 0; e < t.items.length; e++) t.items[e].enable()
			}, this.dispose = function() {
				for (var e = 0; e < t.items.length; e++) t.items[e].removeShape();
				return !0
			}
		}, oo.SelectionSet = function(e) {
			z_d("81.5"), this.type = "SelectionSet", zot(e) && (e = []), this.selections = e, this.clear = function() {
				this.selections = []
			}, this.isSelected = function(e) {
				return 0 <= this.selections.indexOf(e)
			}, this.add = function(e, t, o, n) {
				if (!zot(e) && (zot(t) && (zot(this.selectionManager) || (t = this.selectionManager.multiple)), zot(this.selectionManager) || (this.selectionManager.setCurrent(this), !t && this.selectionManager.multipleSets && this.selectionManager.clear()), t || this.clear(), !(0 <= this.selections.indexOf(e)))) {
					if (this.selections.push(e), !zot(o)) {
						Array.isArray(o) || (o = [o]);
						for (var r = 0; r <= o.length; r++) o[r].add(e, t)
					}
					if (!zot(n))
						for (Array.isArray(n) || (n = [n]), r = 0; r <= n.length; r++) n[r].remove(e, t)
				}
			}, this.remove = function(e, t, o, n) {
				if (!zot(e)) {
					zot(t) && (zot(this.selectionManager) || (t = this.selectionManager.multiple)), zot(this.selectionManager) || this.selectionManager.setCurrent(this), t || this.clear();
					var r = this.selections.indexOf(e);
					if (zot(this.selectionManager) || (this.selectionManager.setCurrent(this), !t && this.selectionManager.multipleSets && this.selectionManager.clear()), t || this.clear(), t ? 0 <= r && this.selections.splice(r, 1) : this.clear(), !zot(o)) {
						Array.isArray(o) || (o = [o]);
						for (var i = 0; i <= o.length; i++) o[i].remove(e, t)
					}
					if (!zot(n))
						for (Array.isArray(n) || (n = [n]), i = 0; i <= n.length; i++) n[i].add(e, t)
				}
			}, this.toggle = function(e, t, o, n) {
				this.isSelected(e) ? this.remove(e, t, o, n) : this.add(e, t, o, n)
			}, this.dispose = function() {
				return this.clear(), !(this.selections = null)
			}
		}, oo.SelectionManager = function(o, e, t) {
			z_d("81.6"), this.cjsEventDispatcher_constructor(), this.type = "SelectionManager", zot(o) && (o = []), zot(t) && (t = !0), Array.isArray(o) || (o = [o]), this.sets = o, this.multipleKey = e, this.multipleSets = t, this.multiple = !1;
			for (var n = this, r = 0; r < o.length; r++) o[r].selectionManager = this;
			this.clear = function() {
				this.currentSet = null;
				for (var e = 0; e < o.length; e++) o[e].clear()
			}, this.setCurrent = function(e) {
				this.currentSet = e;
				for (var t = 0; t < o.length; t++) o[t] != e && (this.multipleSets || o[t].clear())
			};
			var i = new createjs.Event("keydown");
			this.eventRemove = i.remove, this.keydownEvent = window.addEventListener("keydown", function(e) {
				e.remove = n.eventRemove, n.multipleKey && (n.multiple = e[n.multipleKey + "Key"]), n.ctrlKey = e.ctrlKey, n.shiftKey = e.shiftKey, n.metaKey = e.metaKey, n.dispatchEvent(e), 90 == e.keyCode && (n.ctrlKey || n.metaKey) && n.dispatchEvent("undo")
			}), this.keyupEvent = window.addEventListener("keyup", function(e) {
				n.multipleKey && (n.multiple = e[n.multipleKey + "Key"]), n.ctrlKey = e.ctrlKey, n.shiftKey = e.shiftKey, n.metaKey = e.metaKey, e.remove = n.eventRemove, n.dispatchEvent(e)
			}), this.dispose = function() {
				window.removeEventListener("keydown", this.keydownEvent), window.removeEventListener("keyup", this.keyupEvent)
			}
		}, oo.extend(oo.SelectionManager, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.Swipe = function(e, t, o, n) {
			var r;
			if (r = zob(oo.Swipe, arguments, "obj, distance, duration, isometric", this)) return r;
			if (z_d("70"), this.cjsEventDispatcher_constructor(), this.type = "Swipe", !zot(e) && e.on) {
				var i, a, l, s, c, u;
				zot(t) && (t = 30), zot(o) && (o = 80), this.distance = t, this.duration = o, this.active = !0;
				var d, h = this;
				e.on("mousedown", function(o) {
					function t() {
						var e = new createjs.Event("swipe");
						if (e.obj = h.obj, e.stageX = o.stageX / d.scaleX, e.stageY = o.stageY / d.scaleY, e.rawX = o.rawX / d.scaleX, e.rawY = o.rawY / d.scaleY, e.swipeX = e.swipeY = 0, h.direction = "none", n) {
							if (Math.abs(l - i) > h.distance || Math.abs(s - a) > h.distance) {
								var t = 180 * Math.atan2(s - a, l - i) / Math.PI;
								270 <= (t = (t + 360) % 360) && t < 360 ? (e.swipeY = -1, h.direction = "up") : 0 <= t && t < 90 ? (e.swipeX = 1, h.direction = "right") : 90 <= t && t < 180 ? (e.swipeY = 1, h.direction = "down") : 180 <= t && t < 270 && (e.swipeX = -1, h.direction = "left")
							}
						} else Math.abs(l - i) > Math.abs(s - a) ? (l - i > h.distance && (e.swipeX = 1, h.direction = "right"), i - l > h.distance && (e.swipeX = -1, h.direction = "left")) : (s - a > h.distance && (e.swipeY = 1, h.direction = "down"), a - s > h.distance && (e.swipeY = -1, h.direction = "up"));
						h.dispatchEvent(e)
					}
					h.active && !o.target.zimNoSwipe && (h.obj = o.target, d = o.target.stage, l = i = o.stageX / d.scaleX, s = a = o.stageY / d.scaleY, c = !0, h.dispatchEvent("swipedown"), clearTimeout(u), u = setTimeout(function() {
						c && (t(), c = !1)
					}, h.duration), e.on("pressmove", function(e) {
						l = e.stageX / d.scaleX, s = e.stageY / d.scaleY
					}), e.on("pressup", function(e) {
						c && (t(), c = !1, clearTimeout(u))
					}))
				}), this.disable = function() {
					h.active = !1
				}, this.enable = function() {
					h.active = !0
				}
			} else zog("zim controls - Swipe():\nPlease pass in object")
		}, oo.extend(oo.Swipe, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.Swiper = function(e, t, o, n, r, i, a, l, s, c, u, d) {
			var h;
			if (h = zob(oo.Swiper, arguments, "swipeOn, target, property, sensitivity, horizontal, min, max, damp, integer, factor, loop, pauseTime", this)) return h;
			if (z_d("69.5"), this.cjsEventDispatcher_constructor(), this.type = "Swiper", !zot(e) && e.getStage && e.stage) {
				if (!zot(t)) {
					zot(n) && (n = 1), zot(r) && (r = !0), zot(l) && (l = .1), zot(s) && (s = !1), zot(c) && (c = 1), zot(u) && (u = !1), zot(d) && (d = 200);
					var g, p, f, m, z, v = this,
						b = e,
						y = v.desiredValue = t[o];
					this.target = t, this.property = o, this.sensitivity = n;
					var w, C = !1;
					b.canvas ? (f = b.on("stagemousedown", function(e) {
						C = !0, P(e), m = b.on("stagemousemove", B), z = b.on("stagemouseup", function() {
							C = !1, b.off("stagemousemove", m), b.off("stagemouseup", z), v.dispatchEvent("swipeup")
						})
					}), w = b) : (w = b.stage, I(), f = b.on("mousedown", P), m = b.on("pressmove", B), z = b.on("pressup", function() {
						C = !1, v.dispatchEvent("swipeup")
					}));
					var x = new oo.Damp(v.target[v.property], l),
						k = (v.target[v.property], 0),
						T = null;
					v.target.swiperTicker = oo.Ticker.add(function() {
						y == k ? y != T && (v.pauseTimeout && v.pauseTimeout.clear(), T = y, v.pauseTimeout = oo.timeout(d, function() {
							v.dispatchEvent("swipepause"), v.pauseTimeout = null
						})) : (T = null, k = y, v.pauseTimeout && v.pauseTimeout.clear()), v.swiperMoving && (v.target[v.property] = s ? Math.round(x.convert(y)) : x.convert(y), !C && !zot(i) && !zot(a) && Math.abs(v.target[v.property] - y) < Math.abs(a - i) / 1e3 ? (v.swiperMoving = !1, v.target[v.property] = y, v.immediate(v.target[v.property]), v.dispatchEvent("swipestop")) : v.target[v.property])
					}, w), this.immediate = function(e) {
						x.immediate(e), v.target[v.property] = s ? Math.round(e) : e, v.desiredValue = y = e
					};
					var A = !0;
					Object.defineProperty(v, "enabled", {
						get: function() {
							return A
						},
						set: function(e) {
							A != e && (e ? function() {
								b.canvas ? f = b.on("stagemousedown", f) : (f = b.on("mousedown", f), m = b.on("pressmove", m), z = b.on("pressup", z));
								v.immediate(v.target[v.property]), v.target.swiperTicker = oo.Ticker.add(v.target.swiperTicker, w)
							}() : S(), A = Boolean(e))
						}
					}), Object.defineProperty(v, "desiredValue", {
						get: function() {
							return y
						},
						set: function(e) {
							y = e
						}
					}), this.dispose = function() {
						S(), x = null
					}
				}
			} else zog("zim.Swiper() - please provide container on stage");

			function P(e) {
				w = e.target.stage, C = !0, g = r ? e.stageX / w.scaleX : e.stageY / w.scaleY, p = v.target[v.property], v.dispatchEvent("swipedown")
			}

			function B(e) {
				var t = g - (r ? e.stageX / w.scaleX : e.stageY / w.scaleY);
				if (0 < Math.abs(t) && (v.swiperMoving = !0), y = p - t * v.sensitivity * c, zot(i) || zot(a) || !u) zot(i) || (y = Math.max(y, i)), zot(a) || (y = Math.min(y, a));
				else {
					var o = y;
					y = (y + 1e4 * (a - i) - i) % (a - i) + i, Math.abs(o - y) > .8 * Math.abs(a - i) && (v.immediate(y), g = r ? e.stageX / w.scaleX : e.stageY / w.scaleY, p = v.target[v.property])
				}
				v.desiredValue = y, v.dispatchEvent("swipemove")
			}

			function I() {
				b.off("mousedown", f), b.off("pressmove", m), b.off("pressup", z)
			}

			function S() {
				b.canvas ? (b.off("stagemousedown", f), b.off("stagemousemove", m), b.off("stagemouseup", z)) : I(), oo.Ticker.remove(v.target.swiperTicker)
			}
		}, oo.extend(oo.Swiper, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.MotionController = function(a, l, e, s, t, r, i, o, c, u, n, d, h, g, p, f, m, z, v, b, y, w) {
			var C;
			if (C = zob(oo.MotionController, arguments, "target, type, speed, axis, boundary, map, diagonal, damp, flip, rotate, constant, firstPerson, turnSpeed, moveThreshold, stickThreshold, container, localBounds, mouseMoveOutside, mousedownIncludes, minPercentSpeed, maxPercentSpeed, dampKeyup", this)) return C;
			z_d("69.7"), this.cjsEventDispatcher_constructor(), this.type = "MotionController";
			var x = this,
				k = "zim MotionController(): Please pass in a reference to the stage or a container on the stage";
			if (zot(f)) {
				if (!zimDefaultFrame) return void zog(k);
				Y = f = zimDefaultFrame.stage
			} else if (zot(f.stage)) {
				if (!zimDefaultFrame) return void zog(k);
				Y = zimDefaultFrame.stage
			} else Y = f.stage;
			zot(a) && (a = new oo.Container(1, 1, null, null, !1));
			var T = "Accelerator" == a.type;
			if (zot(e) && (e = 7), !zot(l) && "DPad" == l.type) {
				var A = l;
				l = "manual", zot(s) && (s = A.axis), "all" == s && (s = "both");
				a.x, a.y;
				A.on("change", function() {
					x.convert(a.x + A.dirX * e, a.y + A.dirY * e)
				})
			}(zot(l) || "mousemove" != l && "pressmove" != l && "keydown" != l && "gamebutton" != l && "gamestick" != l && "swipe" != l && "follow" != l && "manual" != l) && (l = "mousedown"), zot(s) && (s = T ? "horizontal" : "both"), "keydown" == l && zot(r) && (r = [
				[65, 37],
				[68, 39],
				[87, 38],
				[83, 40]
			]), "gamebutton" == l && zot(r) && (r = d ? [14, 15, oo.GamePad.RT, oo.GamePad.LT] : [14, 15, 12, 13]), "gamestick" == l && zot(r) && (r = d ? [
				[0, 2],
				[0, 2],
				[1],
				[1]
			] : [0, 0, 1, 1]), "gamestick" == l && zot(r) && (r = [0, 0, 1, 1]), zot(i) && (i = !0), "horizontal" != s && "vertical" != s || (i = !1), zot(o) && (o = "keydown" == l || "gamebutton" == l ? 1 : "pressmove" == l ? .2 : .1), zot(d) && (d = !1), zot(h) && (h = .4 * e), zot(g) && (g = 4), zot(p) && (p = .2), zot(z) && (z = !1), Y.mouseMoveOutside = z, zot(v) && (v = []), Array.isArray(v) || (v = [v]), "Pen" != a.type || a.draggable ? v.push(a) : v.push(a, a.paper), (a.motionController = this).mousedownIncludes = v, zot(w) && (w = .3), x.dampKeyup = w, this.dirX = 0, this.dirY = 0, this.speed = e, this.turnSpeed = h, this.axis = s, this.target = a, this.moveThreshold = g, this.stickThreshold = p, this.boundary = t;
			var P, B, I, S = x.speed,
				M = x.speed,
				E = 0;
			(x.rotation = 0, T) ? (I = !(B = f.getBounds()) || "vertical" == s && !B.height || "vertical" != s && !B.width ? 1e3 : "vertical" == s ? B.height : B.width, zot(b) && (b = 0), zot(y) && (y = 100), zot(this.target.percentSpeed) && (this.target.percentSpeed = (y - b) / 2), x.x = I / 2, x.y = I / 2, P = new oo.Proportion(0, I, b, y)) : (x.x = this.target.x, x.y = this.target.y);
			var O, j, L, D, Y, X = x.scaleX = a.scaleX,
				R = (x.scaleY = a.scaleY, !1),
				_ = !1;
			if ("keydown" == l || "gamebutton" == l) {
				for (var W = 0; W < 4; W++) Array.isArray(r[W]) || (r[W] = [r[W]]);
				var F = [0, 0, 0, 0],
					G = [],
					H = ["X", "X", "Y", "Y"],
					N = [-1, 1, -1, 1],
					V = {
						dirX: 0,
						dirY: 0
					};
				if ("keydown" == l) var q = frame.on("keydown", U);
				else var K = (oe = x.gamepad = new oo.GamePad).on("buttondown", U);

				function U(e) {
					var t, o = "keydown" == l ? e.keyCode : e.buttonCode;
					for (W = 0; W < 4; W++)
						if (-1 < r[W].indexOf(o)) {
							if (i || "both" != x.axis || (V.dirX = V.dirY = 0), V["dir" + H[W]] = N[W], F[W] = 1, 0 == (t = G.indexOf(W))) return;
							return 0 < t && G.splice(t, 1), void G.unshift(W)
						}
				}
				if (zot(n))
					if ("keydown" == l) var Z = frame.on("keyup", J);
					else var Q = oe.on("buttonup", J);
				function J(e) {
					var t, o = "keydown" == l ? e.keyCode : e.buttonCode;
					for (W = 0; W < 4; W++)
						if (-1 < r[W].indexOf(o)) {
							if ((F[W] = 0) <= (t = G.indexOf(W)) && G.splice(t, 1), "both" != x.axis || i) V["dir" + H[W]] = -F[2 * Math.floor(W / 2)] + F[2 * Math.floor(W / 2) + 1];
							else if (0 < G.length) {
								V["dir" + H[W]] = 0;
								var n = G[0];
								V["dir" + H[n]] = N[n]
							} else V.dirX = V.dirY = 0;
							return
						}
				}
				var $ = {
						rotation: 0,
						speedX: x.speed,
						speedY: x.speed
					},
					ee = oo.Ticker.add(function() {
						if (d) le(V);
						else {
							var e = x.speed,
								t = x.speed;
							if ("both" == x.axis && 0 != V.dirX && 0 != V.dirY) {
								var o = ue(V.dirX, V.dirY);
								e = o.speedX, t = o.speedY
							}
							"horizontal" != x.axis && "both" != x.axis || (x.x += e * V.dirX), "vertical" != x.axis && "both" != x.axis || (x.y += t * V.dirY), se()
						}
					}, Y)
			} else if ("mousedown" == l || "mousemove" == l) O = Y.on("stage" + l, function(e) {
				if (Y = e.target.stage, "mousedown" == l) {
					if (Array.isArray(x.mousedownIncludes) || (x.mousedownIncludes = [x.mousedownIncludes]), x.mousedownIncludes.indexOf(f) < 0)
						for (var t = 0; t < f.numChildren; t++) {
							var o = f.getChildAt(t);
							if (-1 == x.mousedownIncludes.indexOf(o) && o.mouseEnabled && o.hitTestPoint && o.hitTestPoint(e.stageX / Y.scaleX, e.stageY / Y.scaleY)) return
						}
					x.dispatchEvent("mousedown")
				}
				var n = f.globalToLocal(z ? e.rawX / Y.scaleX : e.stageX / Y.scaleX, z ? e.rawY / Y.scaleY : e.stageY / Y.scaleY);
				x.x = n.x, x.y = n.y, se()
			});
			else if ("pressmove" == l || "follow" == l) {
				function te() {
					var e = f.globalToLocal(x.moveX, x.moveY);
					x.x = e.x, x.y = e.y, se(), "Pen" == a.type && !_ && a.drawing && (_ = !0)
				}
				"Pen" == a.type && (a.write = !1), O = Y.on("stagemousedown", function(e) {
					_ = !1, Array.isArray(x.mousedownIncludes) || (x.mousedownIncludes = [x.mousedownIncludes]);
					var t, o = !1;
					x.mouseDownIncludes && (t = Y.getObjectUnderPoint(e.stageX, e.stageY));
					for (var n = 0; n < x.mousedownIncludes.length; n++) t && x.mousedownIncludes[n].hitTestPoint && x.mousedownIncludes[n].hitTestPoint(e.stageX, e.stageY) && x.mousedownIncludes[n].contains(t) && (o = !0);
					if (!o)
						for (n = 0; n < f.numChildren; n++) {
							var r = f.getChildAt(n);
							if (-1 == x.mousedownIncludes.indexOf(r) && r.mouseEnabled && r.hitTestPoint && r.hitTestPoint(e.stageX / Y.scaleX, e.stageY / Y.scaleY)) return
						}
					var i = f.globalToLocal(z ? e.rawX / Y.scaleX : e.stageX / Y.scaleX, z ? e.rawY / Y.scaleY : e.stageY / Y.scaleY);
					"follow" != l && x.immediate("both" == s || "horizontal" == s ? i.x : null, "both" == s || "vertical" == s ? i.y : null), se(), x.dispatchEvent("mousedown"), R = !0, x.moveX = z ? e.rawX / Y.scaleX : e.stageX / Y.scaleX, x.moveY = z ? e.rawY / Y.scaleY : e.stageY / Y.scaleY, j = Y.on("stagemousemove", function(e) {
						x.moveX = z ? e.rawX / Y.scaleX : e.stageX / Y.scaleX, x.moveY = z ? e.rawY / Y.scaleY : e.stageY / Y.scaleY, "follow" != l && te()
					}), D && oo.Ticker.remove(D), "follow" == l && (D = oo.Ticker.add(te)), "Pen" == a.type && (a.write = !0, a.zimDragCheck = !0)
				}), L = Y.on("stagemouseup", function(e) {
					"Pen" == a.type && (a.write = !1, a.zimDragCheck = !1, _ && a.stopCheck()), D && oo.Ticker.remove(D), Y.off("stagemousemove", j), R = !1
				})
			} else if ("gamestick" == l) {
				var oe = this.gamepad = new oo.GamePad;
				for (W = 0; W < 4; W++) Array.isArray(r[W]) || (r[W] = [r[W]]);
				$ = {
					rotation: 0,
					speedX: x.speed,
					speedY: x.speed
				};
				var ne = oe.on("data", function(e) {
					V = {
						dirX: 0,
						dirY: 0
					};
					for (var t = 0; t < r[0].length; t++) {
						var o = e.axes[r[0][t]];
						if (Math.abs(o) > x.stickThreshold) {
							V.dirX = o;
							break
						}
					}
					for (t = 0; t < r[2].length; t++) {
						o = e.axes[r[2][t]];
						if (Math.abs(o) > x.stickThreshold) {
							V.dirY = o;
							break
						}
					}
					d ? le(V) : (x.x += x.speed * V.dirX, x.y += x.speed * V.dirY, se())
				})
			} else if ("swipe" == l) var re = new oo.Swiper(Y, x, "x", .8),
				ie = new oo.Swiper(Y, x, "y", .8, !1),
				ae = re.on("swipemove", function() {
					se()
				});

			function le(e) {
				$.rotation += e.dirX * x.turnSpeed, x.rotation = $.rotation, $.speedX = Math.sin($.rotation * Math.PI / 180) * x.speed * -e.dirY, $.speedY = -Math.cos($.rotation * Math.PI / 180) * x.speed * -e.dirY, x.x += $.speedX, x.y += $.speedY
			}

			function se() {
				var e = ue(x.x - (T ? x.target.percentSpeed : x.target.x), x.y - (T ? x.target.percentSpeed : x.target.y));
				if (S = e.speedX, M = e.speedY, u)
					if (x.rotation = e.angle, zot(x.rotation)) x.rotation = x.target.rotation;
					else {
						x.rotation += E;
						var t = ce(x.rotation),
							o = x.target.rotation = ce(x.target.rotation);
						180 < Math.abs(t - o) && (t < o ? o -= 360 : t -= 360), x.dampR.immediate(o), x.target.rotation = o, x.rotation = t
					}
			}

			function ce(e) {
				return (e % 360 + 360) % 360
			}

			function ue(e, t) {
				var o, n = x.speed,
					r = x.speed,
					i = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
				return 0 < i && (n = Math.abs(e) / i * x.speed, r = Math.abs(t) / i * x.speed, o = 90 - 180 * Math.atan2(e, t) / Math.PI), {
					speedX: n,
					speedY: r,
					angle: o
				}
			}
			var de = this.x = T ? I / 2 : this.target.x,
				he = this.y = T ? I / 2 : this.target.y;
			this.dampX = new oo.Damp(de, o), this.dampY = new oo.Damp(he, o), this.dampR = new oo.Damp(this.target.rotation, o);
			var ge = 0,
				pe = 0,
				fe = oo.Ticker.add(function() {
					if ("manual" == l && se(), x.boundary && (x.x = oo.constrain(x.x, x.boundary.x, x.boundary.x + x.boundary.width), x.y = oo.constrain(x.y, x.boundary.y, x.boundary.y + x.boundary.height)), "horizontal" == x.axis || "both" == x.axis) {
						if (x.dirX = oo.sign(x.x - de), Math.abs(x.x - de) < S ? de = x.x : de += x.dirX * S, V && 0 == V.dirX) {
							var e = x.boundary ? x.boundary.width / 2 : Y.width / 2,
								t = x.x - (x.x - e) * (T ? x.dampKeyup : 0);
							de = t, x.x = de
						}
						T && B && B.width ? x.target.percentSpeed = P.convert(x.dampX.convert(de)) : x.target.x = x.dampX.convert(de)
					}
					if ("vertical" == x.axis || "both" == x.axis) {
						if (x.dirY = oo.sign(x.y - he), Math.abs(x.y - he) < M ? he = x.y : he += oo.sign(x.y - he) * M, V && 0 == V.dirY) {
							e = x.boundary ? x.boundary.height / 2 : Y.height / 2;
							var o = x.y - (x.y - e) * (T ? x.dampKeyup : 0);
							he = o, x.y = he
						}
						T && B && B.height ? x.target.percentSpeed = P.convert(x.dampY.convert(he)) : x.target.y = x.dampY.convert(he)
					}
					if ("pressmove" == l && R && x.dispatchEvent("pressing"), x.movingX = Math.abs(de - (T ? x.target.percentSpeed : x.target.x)) > x.moveThreshold, x.movingY = Math.abs(he - (T ? x.target.percentSpeed : x.target.y)) > x.moveThreshold, !x.moving || x.movingX || x.movingY ? x.moving || !x.movingX && !x.movingY || x.dispatchEvent("startmoving") : x.dispatchEvent("stopmoving"), x.moving = x.movingX || x.movingY, x.moving && x.dispatchEvent("moving"), x.dirX != ge || x.dirY != pe) {
						var n = new createjs.Event("change");
						if (x.dirX != ge) {
							var r = ["left", null, "right"];
							n.dir = r[x.dirX + 1], ge = x.dirX, "horizontal" != c && "both" != c || (x.scaleX = a.scaleX = x.dirX ? Math.abs(a.scaleX) * x.dirX : a.scaleX, E = 0 != X && -1 == Math.round(x.scaleX / X) ? 180 : 0)
						} else {
							r = ["up", null, "down"];
							n.dir = r[x.dirY + 1], pe = x.dirY, "vertical" != c && "both" != c || (x.scaleY = a.scaleY = x.dirY ? Math.abs(a.scaleY) * -x.dirY : a.scaleY)
						}
						x.dispatchEvent(n)
					}
					u && !zot(x.rotation) && (x.target.rotation = x.dampR.convert(x.rotation))
				}, Y);
			this.immediate = function(e, t, o) {
				return !zot(e) && x.dampX && (x.dampX.immediate(e), x.x = T ? x.target.percentSpeed = de = e : x.target.x = de = e, re && re.immediate(e)), !zot(t) && x.dampY && (x.dampY.immediate(t), x.y = T ? x.target.percentSpeed = he = t : x.target.y = he = t, ie && ie.immediate(t)), !zot(o) && x.dampR && (x.dampR.immediate(o), x.rotation = x.target.rotation = o), x
			}, this.convert = function(e, t) {
				zot(e) || (x.x = e), zot(t) || (x.y = t), se()
			};
			var me = !0;

			function ze() {
				"keydown" == l ? (frame.off("keydown", q), frame.off("keyup", Z), oo.Ticker.remove(ee)) : "gamebutton" == l ? (oe.off("buttondown", K), oe.off("buttonup", Q), oo.Ticker.remove(ee)) : "gamestick" == l ? oe.off("data", ne) : "swipe" == l ? (re.enabled = !1, ie.enabled = !1, re.off("swipemove", ae)) : "mousedown" == l || "mousemove" == l ? Y.off("stage" + l, O) : "pressmove" == l && (Y.off("stagemousedown", O), Y.off("stagemousemove", j), Y.off("stagemouseup", L)), oo.Ticker.remove(fe)
			}
			Object.defineProperty(x, "enabled", {
				get: function() {
					return me
				},
				set: function(e) {
					me != e && (e ? function() {
						"keydown" == l ? (q = frame.on("keydown", q), Z = frame.on("keyup", Z), ee = oo.Ticker.add(ee, Y)) : "gamebutton" == l ? (K = oe.on("buttondown", K), Q = oe.on("buttonup", Q), ee = oo.Ticker.add(ee, Y)) : "gamestick" == l ? ne = oe.on("data", ne) : "swipe" == l ? (re.enabled = !0, ie.enabled = !0, ae = re.on("swipemove", ae)) : "mousedown" == l || "mousemove" == l ? O = Y.on("stage" + l, O) : "pressmove" == l && (O = Y.on("stagemousedown", O), j = Y.on("stagemousemove", j), L = Y.on("stagemouseup", L));
						fe = oo.Ticker.add(fe, Y)
					}() : ze(), me = Boolean(e))
				}
			}), this.dispose = function() {
				ze(), oe && oe.dispose(), re && re.dispose(), ie && re.dispose()
			}
		}, oo.extend(oo.MotionController, createjs.EventDispatcher, "enabled", "cjsEventDispatcher"), oo.GamePad = function() {
			if (z_d("69.8"), this.type = "GamePad", this.cjsEventDispatcher_constructor(), !navigator.getGamepads) return this.error = !0, void(zon && zog("zim.GamePad() - no browswer support"));
			var r;
			window.addEventListener("gamepadconnected", e), this.currentIndex = 0;
			var i = this;

			function e(e) {
				i.connected = !0,
					function(e, t) {
						var o = new createjs.Event(e);
						o.index = t.gamepad.index, o.id = t.gamepad.id, o.buttons = t.gamepad.buttons, o.axes = t.gamepad.axes, i.dispatchEvent(o)
					}("gamepadconnected", e);
				var t = navigator.getGamepads()[i.currentIndex];
				i.lastData = [];
				for (var o = 0; o < t.buttons.length; o++) i.lastData[o] = t.buttons[o].pressed;
				! function e() {
					if (r = requestAnimationFrame(e), i.data = navigator.getGamepads()[i.currentIndex], i.data) {
						for (var t = i.buttons = [], o = 0; o < i.data.buttons.length; o++)
							if (t[o] = i.data.buttons[o].pressed, t[o] != i.lastData[o]) {
								if (i.lastData[o] = t[o], t[o]) var n = new createjs.Event("buttondown");
								else n = new createjs.Event("buttonup");
								n.buttonCode = o, n.button = a[o], i.dispatchEvent(n)
							}(n = new createjs.Event("data")).axes = i.axes = i.data.axes, n.buttons = i.buttons, i.dispatchEvent(n)
					}
				}()
			}
			var t = setInterval(function() {
				navigator.getGamepads && navigator.getGamepads()[0] && (i.connected || e(), clearInterval(t))
			}, 500);
			var o = window.addEventListener("gamepaddisconnected", function(e) {
				e.gamepad.index == i.currentIndex && (cancelAnimationFrame(r), connected = !1, i.dispatchEvent("gamepaddisconnected"))
			});
			this.dispose = function() {
				window.removeEventListener("gamepadconnected", e), window.addEventListener("gamepaddisconnected", o), cancelAnimationFrame(r), clearInterval(t), i.connected = !1
			}
		};
		for (var a = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START", "LS", "RS", "DPAD_UP", "DPAD_DOWN", "DPAD_LEFT", "DPAD_RIGHT"], l = 0; l < a.length; l++) oo.GamePad[a[l]] = l;
		var p, f, e = ["LSX", "LSY", "RSX", "RSY"];
		for (l = 0; l < e.length; l++) oo.GamePad[e[l]] = l;
		oo.extend(oo.GamePad, createjs.EventDispatcher, null, "cjsEventDispatcher"), oo.Portal = function(t, o) {
			var e;
			if (e = zob(oo.Portal, arguments, "obj, lands", this)) return e;
			if (z_d("69.96"), !zot(t) && t.stage) {
				this.type = "Portal";
				var n = this,
					r = o && o.numChildren && 0 < o.numChildren;
				if (r) {
					var i = o.getChildAt(o.numChildren - 1),
						a = o.getChildAt(o.numChildren - 2);
					o.setChildIndex(a, o.numChildren - 1), a.setMask(t)
				}
				t.on(oo.mobile() ? "mousedown" : "mouseover", function() {
					n._enabled && (r && l(), n.dispatchEvent("enter"))
				}), t.on(oo.mobile() ? "pressup" : "mouseout", function() {
					n._enabled && n.dispatchEvent("exit")
				}), Object.defineProperty(this, "portal", {
					get: function() {
						return t
					},
					set: function(e) {
						!zot(e) && e.stage || !zon ? a.setMask(t) : zog("zim.Portal() - please provide a Display Object to act as the portal")
					}
				}), Object.defineProperty(this, "currentLand", {
					get: function() {
						return i
					},
					set: function(e) {
						if (o.contains(e))
							for (; e != i;) l()
					}
				}), Object.defineProperty(this, "nextLand", {
					get: function() {
						return a
					},
					set: function(e) {
						zon && zog("zim.Portal() - nextLand is read only - remake Portal to change")
					}
				}), this._enabled = !0, Object.defineProperty(n, "enabled", {
					get: function() {
						return n._enabled
					},
					set: function(e) {
						n._enabled = e
					}
				}), this.dispose = function() {}
			}

			function l() {
				o.setChildIndex(i, 0), i = a, a = o.getChildAt(o.numChildren - 2), o.setChildIndex(a, o.numChildren - 1), i.setMask(null), a.setMask(t), t.stage.update()
			}
		}, oo.extend(oo.Portal, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), zimContactListener = null, oo.Parallax = function(e, t, a, o, n, r, l) {
			var i;
			if (i = zob(oo.Parallax, arguments, "layers, damp, auto, stage, startPaused, mouseMoveOutside, clamp", this)) return i;
			if (z_d("68"), this.type = "Parallax", zot(o))
				if (e && e[0] && e[0].obj && e[0].obj.stage) o = e[0].obj.stage;
				else {
					if (!zimDefaultFrame) return;
					o = zimDefaultFrame.stage
				}
			a = !!zot(a), zot(n) && (n = !1), zot(r) && (r = !1);
			var s = o.getBounds().width,
				c = o.getBounds().height;
			o.mouseMoveOutside = r;
			var u = this;
			o.on("stagemousemove", function(e) {
				u.mouseX = e.rawX / o.scaleX, u.mouseY = e.rawY / o.scaleY
			});
			var d = zot(t) ? .1 : t;
			this.addLayer = function(e) {
				if (!(zot(e.obj) || zot(e.prop) || zot(e.propChange))) {
					var t = {
						obj: e.obj,
						prop: e.prop
					};
					t[t.prop] = e.propChange, zot(e.input) && (e.input = "mouseX"), t.input = e.input, t.split = zot(e.split) ? !("mouseX" != e.input || !a) : e.split;
					var o = zot(e.inMin) ? 0 : e.inMin,
						n = zot(e.inMax) ? "mouseX" == e.input || "scrollX" == e.input ? s : c : e.inMax,
						r = zot(e.factor) ? 1 : e.factor,
						i = !zot(e.integer) && e.integer;
					return t["p_" + t.prop] = new oo.ProportionDamp(o, n, 0, t[t.prop], d, r, i, l), "scale" == t.prop ? t["s_" + t.prop] = t.obj.scaleX : "frame" == t.prop ? t["s_" + t.prop] = t.obj.currentFrame : t["s_" + t.prop] = t.obj[t.prop], zot(e.immediate) || t["p_" + t.prop].immediate(e.immediate), h.push(t), h.length - 1
				}
			}, this.removeLayer = function(e) {
				if (!zot(e)) {
					var t = h[e];
					t["p_" + t.prop].dispose(), h.splice(e, 1)
				}
			}, this.immediate = function(e) {
				for (var t, o = 0; o < h.length; o++)(t = h[o])["p_" + t.prop].immediate(e[o])
			}, this.dispose = function() {
				return h = null, a && oo.Ticker.remove(p), !0
			}, e = zot(e) ? [] : e;
			for (var h = [], g = 0; g < e.length; g++) this.addLayer(e[g]);
			if (a) {
				var p = oo.Ticker.add(function(e) {
					u.step()
				}, o);
				n && oo.Ticker.remove(p)
			}
			this.step = function(e) {
				for (var t, o, n = 0; n < h.length; n++) t = h[n], zot(e) ? "mouseX" == t.input ? o = u.mouseX : "mouseY" == t.input ? o = u.mouseY : "scrollX" == t.input ? o = oo.scrollX() : "scrollY" == t.input && (o = oo.scrollY()) : o = e, "scale" == t.prop ? t.obj.scaleX = t.obj.scaleY = t["s_" + t.prop] + t["p_" + t.prop].convert(o) : "frame" == t.prop ? t.obj.gotoAndStop(t["s_" + t.prop] + t["p_" + t.prop].convert(o)) : (t.obj[t.prop] = t["s_" + t.prop] + t["p_" + t.prop].convert(o), t.split && (t.obj[t.prop] -= t[t.prop] / 2))
			}, u.paused = n, u.pause = function(e) {
				zot(e) && (e = !0), u.paused != e && (u.paused = e, p && (e ? oo.Ticker.remove(p) : p = oo.Ticker.add(p)))
			}, Object.defineProperty(u, "damp", {
				get: function() {
					return d
				},
				set: function(e) {
					var t;
					d = e;
					for (var o = 0; o < h.length; o++)(t = h[o])["p_" + t.prop].damp = d
				}
			})
		}, oo.Scroller = function(e, t, o, n, r, i, a, l, s, c) {
			var u;
			if (u = zob(oo.Scroller, arguments, "backing, speed, direction, horizontal, gapFix, stage, container, style, group, inherit", this)) return u;
			z_d("69"), this.cjsEventDispatcher_constructor(), this.type = "Scroller", this.group = s;
			var d = !1 === l ? {} : oo.getStyle(this.type, this.group, c);
			if (zot(e) && (e = null != d.backing ? d.backing : null), !zot(e)) {
				var h = this.backing1 = e;
				if (!zot(h) && h.getBounds) {
					var g = this.backing2 = e.clone();
					zot(n) && (n = null == d.horizontal || d.horizontal), zot(r) && (r = null != d.gapFix ? d.gapFix : 0), zot(a) && (a = null != d.container ? d.container : null), zot(i) && (i = null != d.stage ? d.stage : null);
					var p = this;
					zot(t) && (t = null != d.speed ? d.speed : 1), this.speed = t;
					var f = this.baseSpeed = this.speed;
					zot(o) && (o = null != d.direction ? d.direction : 1), this.direction = o;
					var m = n ? h.scaleX : h.scaleY;
					if (h.getBounds())
						if (i || h.stage)
							if (h.parent)
								if (h.parent.addChildAt(g, h.parent.getChildIndex(h)), i = i || h.stage, zot(a) && (a = i), a.getBounds()) {
									var z, v, b = h.getBounds().width * m - r,
										y = h.getBounds().height * m - r;
									n ? g.x = b : g.y = y;
									var w = !1,
										C = oo.Ticker.add(function(e) {
											z || (z = a.getBounds().width, v = a.getBounds().height);
											if (0 == p.speed || 0 == p.direction) return;
											n ? (h.x -= p.speed * p.direction, h.x < g.x ? g.x = h.x + b : g.x = h.x - b, 0 < p.direction * p.speed ? g.x < 0 && h.x < g.x ? h.x = g.x + b : h.x < 0 && g.x < h.x && (g.x = h.x + b) : g.x > z && g.x > h.x ? g.x = h.x - b : h.x > z && h.x > g.x && (h.x = g.x - b)) : (h.y -= p.speed * p.direction, h.y < g.y ? g.y = h.y + y : g.y = h.y - y, 0 < p.direction * p.speed ? g.y < 0 && h.y < g.y ? h.y = g.y + y : h.y < 0 && g.y < h.y && (g.y = h.y + y) : g.y > v && g.y > h.y ? g.y = h.y - y : h.y > v && h.y > g.y && (h.y = g.y - y))
										}, i);
									this.paused = !1, this.pause = function(e, t) {
										return zot(e) && (e = !0), zot(t) && (t = 0), e ? (f = p.speed, 0 < t ? (w = !0, oo.animate({
											target: p,
											obj: {
												pausingSpeed: 0
											},
											ticker: !1,
											time: t,
											call: function() {
												p.speed = 0, p.paused = !0, w = !1, p.dispatchEvent("pause")
											}
										})) : (w = !1, p.speed = 0, p.paused = !0, setTimeout(function() {
											p.dispatchEvent("pause")
										}, 10))) : (w = !1, 0 < t ? oo.animate({
											target: p,
											obj: {
												pausingSpeed: f
											},
											ticker: !1,
											time: t,
											call: function() {
												p.speed = f, p.paused = !1, w = !1
											}
										}) : (p.speed = f, p.paused = !1)), p
									}, Object.defineProperty(p, "percentSpeed", {
										get: function() {
											return 0 == p.baseSpeed ? NaN : p.speed / p.baseSpeed * 100
										},
										set: function(e) {
											w || p.paused || (p.speed = p.baseSpeed * e / 100)
										}
									}), Object.defineProperty(p, "pausingSpeed", {
										get: function() {
											return 0 == p.baseSpeed ? NaN : p.speed / p.baseSpeed * 100
										},
										set: function(e) {
											p.speed = p.baseSpeed * e / 100
										}
									}), !1 !== l && De(this, d), this.dispose = function() {
										return zon && zog("bye from Scroller"), oo.Ticker.remove(C), !0
									}
								} else zog("zim display - Scroller(): please setBounds() on container or stage if no container");
					else zog("zim display - Scroller(): please add object to container or stage before adding to Scroller");
					else zog("zim display - Scroller(): please pass in stage parameter or add backing objects to stage to start");
					else zog("zim display - Scroller(): please setBounds() on backing objects")
				}
			}
		}, oo.extend(oo.Scroller, createjs.EventDispatcher, null, "cjsEventDispatcher"), oo.Dynamo = function(n, e, t, o, r, i, a, l, s, c, u, d) {
			var h;
			if (h = zob(oo.Dynamo, arguments, "sprite, speed, label, startFrame, endFrame, update, reversible, flip, flipVertical, style, group, inherit", this)) return h;
			z_d("69.2"), this.cjsEventDispatcher_constructor(), this.type = "Dynamo", this.group = u;
			var g = !1 === c ? {} : oo.getStyle(this.type, this.group, d);
			if (zot(n) && (n = null != g.sprite ? g.sprite : null), !zot(n)) {
				var p = this.frames = n.parseFrames(t, o, r, !0);
				if (0 != p.length) {
					this.totalFrames = p.length;
					var f = 0;
					zot(e) && (e = null != g.speed ? g.speed : 30), zot(a) && (a = null == g.reversible || g.reversible);
					var m = this.baseSpeed = this.speed = e;
					zot(i) && (i = null != g.update && g.update), zot(l) && (l = null != g.flip ? g.flip : null), zot(l) && 0 == a && (l = !0);
					var z, v, b, y, w, C = this,
						x = Date.now(),
						k = !1;
					C.scaleX = n.scaleX, C.scaleY = n.scaleY,
						function e() {
							if (z = requestAnimationFrame(e), v = p[f].s, 0 != C.speed && 0 != v && (y = 1e3 / Math.abs(C.speed) * v, b = Date.now(), y < b - x)) {
								x = b;
								var t = C.frame + (0 < C.speed || !a ? 1 : -1),
									o = !1;
								t >= p.length && (o = !0, t = 0), t < 0 && (o = !0, t = p.length - 1), C.frame = t, l && (C.speed < 0 ? n.scaleX = -C.scaleX : n.scaleX = C.scaleX), s && (C.speed < 0 ? n.scaleY = -C.scaleY : n.scaleY = C.scaleY), o && C.dispatchEvent("loop"), C.dispatchEvent("change"), i && n.stage && n.stage.update(), zot(w) || w != C.frame || (k = !1, C.speed = 0, C.paused = !0, C.dispatchEvent("pause"))
							}
						}(), this.paused = !1, this.pause = function(e, t, o) {
							if (zot(e) && (e = !0), e != C.paused) return zot(t) && (t = 0), e ? (m = C.speed, zot(o) ? 0 < t ? (k = !0, oo.animate({
								target: C,
								obj: {
									pausingSpeed: 0
								},
								ticker: !1,
								time: t,
								call: function() {
									k = !1, C.speed = 0, C.paused = !0, C.dispatchEvent("pause")
								}
							})) : (k = !1, C.speed = 0, C.paused = !0, setTimeout(function() {
								C.dispatchEvent("pause")
							}, 10)) : (k = !0, w = o)) : (w = null, 0 < t ? (k = !0, oo.animate({
								target: C,
								obj: {
									pausingSpeed: m
								},
								ticker: !1,
								time: t,
								call: function() {
									k = !1, C.speed = m, C.paused = !1
								}
							})) : (k = !1, C.speed = m, C.paused = !1)), C
						}, Object.defineProperty(C, "frame", {
							get: function() {
								return f
							},
							set: function(e) {
								f = Math.round(e) % p.length;
								var t = p[f];
								zot(t) || (n.frame = t.f)
							}
						}), Object.defineProperty(C, "percentSpeed", {
							get: function() {
								return 0 == C.baseSpeed ? NaN : k || C.paused ? m / C.baseSpeed * 100 : C.speed / C.baseSpeed * 100
							},
							set: function(e) {
								k || C.paused ? m = C.baseSpeed * e / 100 : C.speed = C.baseSpeed * e / 100
							}
						}), Object.defineProperty(C, "pausingSpeed", {
							get: function() {
								return 0 == C.baseSpeed ? NaN : C.speed / C.baseSpeed * 100
							},
							set: function(e) {
								C.speed = C.baseSpeed * e / 100
							}
						}), !1 !== c && De(this, g), this.dispose = function() {
							cancelAnimationFrame(z)
						}
				}
			}
		}, oo.extend(oo.Dynamo, createjs.EventDispatcher, null, "cjsEventDispatcher"), oo.Accelerator = function(e) {
			z_d("69.3"), this.cjsEventDispatcher_constructor();
			var l = this;
			this.type = "Accelerator", this.paused = !1, this.items = [], this.paused = !1, this._percentSpeed = 100, this.add = function(e) {
				var t;
				t = Array.isArray(e) ? e : [e];
				for (var o = 0; o < t.length; o++) l.items.indexOf(t[o]) < 0 && l.items.push(t[o]);
				return l
			}, e && this.add(e), this.remove = function(e) {
				var t, o;
				t = Array.isArray(e) ? e : [e];
				for (var n = 0; n < t.length; n++) 0 <= (o = l.items.indexOf(t[n])) && l.items.splice(o, 1);
				return l
			}, this.pause = function(t, e, o) {
				if (zot(t) && (t = !0), t != l.paused) {
					var n = [];
					if (t) {
						zot(o) || (e = null);
						for (var r = !1, i = 0; i < l.items.length; i++)(zot(e) || !zot(o) || l.items[i].totalFrames) && (!l.items[i].totalFrames || zot(e) && zot(o)) || (l.items[i].pause(!0, e, o), r = !0, n[i] = 1, l.items[i].on("pause", function() {
							l.paused || (a(!0), l.paused = !0, l.dispatchEvent("pause"))
						}, null, !0));
						r || (a(), l.paused = !0, setTimeout(function() {
							l.dispatchEvent("pause")
						}, 10))
					} else l.paused = !1, a()
				}

				function a() {
					for (var e = 0; e < l.items.length; e++) 1 != n[e] && l.items[e].pause(t)
				}
			}, Object.defineProperty(l, "percentSpeed", {
				get: function() {
					return l._percentSpeed
				},
				set: function(e) {
					l._percentSpeed = e;
					for (var t = 0; t < l.items.length; t++) l.items[t].percentSpeed = e
				}
			}), this.dispose = function() {
				for (var e = 0; e < l.items.length; e++) l.items[e].dispose();
				return !0
			}
		}, oo.extend(oo.Accelerator, createjs.EventDispatcher, null, "cjsEventDispatcher"), oo.Emitter = function(f, m, z, t, e, o, n, r, i, a, l, s, v, b, c, u, d, h, g, p, y, w, C, x, k, T, A, P, B, I, S, M, E, O) {
			var j;
			if (j = zob(oo.Emitter, arguments, "obj, width, height, interval, num, life, fade, shrink, decayTime, decayStart, trace, traceFadeTime, traceShiftX, traceShiftY, angle, force, gravity, wind, layers, animation, random, horizontal, vertical, sink, sinkForce, cache, events, startPaused, pool, poolMin, particles, style, group, inherit", this)) return j;
			z_d("69.9"), this.type = "Emitter", this.group = E;
			var L = !1 === M ? {} : oo.getStyle(this.type, this.group, O);
			zot(f) && (f = null != L.obj ? L.obj : [new oo.Circle(20, "#e472c4"), new oo.Circle(20, "#acd241"), new oo.Circle(20, "#50c4b7")]), zot(m) && (m = null != L.width ? L.width : 300), zot(z) && (z = null != L.height ? L.height : 300), zot(t) && (t = null != L.interval ? L.interval : 20), "number" == typeof t && (t = Math.max(10, t)), zot(e) && (e = null != L.num ? L.num : 1), zot(l) && (l = null != L.trace && l.size), zot(s) && (s = null != L.traceFadeTime ? L.traceFadeTime : i), zot(v) && (v = null != L.traceShiftX ? L.traceShiftX : 0), zot(b) && (b = null != L.traceShiftY ? L.traceShiftY : 0), zot(o) && (o = null != L.life ? L.life : 1e3), zot(n) && (n = null == L.fade || L.fade), zot(r) && (r = null != L.shrink ? L.shrink : !l), zot(i) && (i = null != L.decayTime ? L.decayTime : 1e3), zot(c) && (c = null != L.angle ? L.angle : {
				min: 0,
				max: 360
			}), zot(u) && (u = null != L.force ? L.force : 5), zot(d) && (d = null != L.gravity ? L.gravity : 9.8), zot(h) && (h = null != L.wind ? L.wind : 0), zot(g) && (g = null != L.layers ? L.layers : "top"), zot(m) && (m = null != L.width ? L.width : 100), zot(z) && (z = null != L.height ? L.height : 100), zot(w) && (w = null != L.horizontal && L.horizontal), zot(C) && (C = null != L.vertical && L.vertical), zot(x) && (x = null != L.sink ? L.sink : null), !zot(x) && zot(k) && (k = null != L.sinkForce ? L.sinkForce : 10), zot(A) && (A = null != L.events && L.events), zot(P) && (P = null != L.startPaused && L.startPaused), zot(B) && (B = null == L.pool || L.pool), zot(I) && (I = null != L.poolMin ? L.poolMin : 0), zot(S) && (S = null != L.particles ? L.particles : new oo.Container), zot(p) && (p = null != L.animation ? L.animation : null), this.zimContainer_constructor(m, z, null, null, !1), this.type = "Emitter";
			var D = this;
			this.regX = m / 2, this.regY = z / 2, D.obj = f, D.particles = S, D.interval = t, D.num = e, D.life = o, D.fade = n, D.shrink = r, D.decayTime = i, D.decayStart = a, D.trace = l, D.traceFadeTime = s, D.traceShiftX = v, D.traceShiftY = b, D.angle = c, D.emitterForce = u, D.gravity = d, D.wind = h, D.layers = g, D.animation = p, D.random = y, D.horizontal = w, D.vertical = C, D.sink = x, D.sinkForce = k, D.events = A, D.startEmitterPaused = P, D.pool = B, D.poolMin = I, D.particlesEmitted = 0;
			var Y, X, R = [],
				_ = 0,
				W = 0;

			function F(e) {
				if (D.events && G("fizzed", e), (e.trace ? e.getChildAt(0).endSpurt : e.endSpurt) && (G("spurtfizzed", e), D.spurting = !1), D.pool && "end" != e.pooled) return e.pooled || (e.pooled = !0, R.push(e)), void(e.visible = !1);
				D.removeChild(e), D.trace && e.uncache(), e = null
			}

			function G(e, t) {
				var o = new createjs.Event(e);
				o.particle = t.trace ? t.getChildAt(0) : t, D.dispatchEvent(o)
			}

			function H(e) {
				D.pauseEmitter(), D.spurtCount = D.spurtNum = null, G("spurted", e), e.endSpurt = !0
			}
			oo.added(D, function(e) {
				X = e, zot(T) && (T = !X.isWebGL && oo.mobile());
				T && (X.snapToPixelEnabled = !0);
				if (X) {
					var t = D.parent.getChildIndex(D);
					D.parent.addChildAt(S, t), w || C || D.centerReg(null, null, !1), D.zimInterval = oo.interval(D.interval, function() {
						var g, p;
						D.startEmitterPaused ? D.pauseEmitter() : (f = Array.isArray(D.obj) ? D.obj : [D.obj]).length <= 0 || (g = Array.isArray(D.interval) ? (D.interval.sort(e), D.interval[0]) : D.interval.constructor == {}.constructor ? D.interval.min : D.interval, p = Array.isArray(D.num) ? (D.num.sort(e), D.num[D.num.length - 1]) : D.num.constructor == {}.constructor ? D.num.max : D.num, oo.loop(oo.Pick.choose(D.num), function() {
							if (0 < D.decayTime) {
								var e = {};
								D.shrink && (e.scale = 0), D.fade && (e.alpha = 0)
							}
							if (D.pool && 0 < R.length && W >= Math.max(D.poolMin, (D.life / g + 5) * p)) {
								if ((o = R[_++ % R.length]).visible = !0, (r = o.trace ? o.getChildAt(0) : o).emitShape) {
									var t = r.template;
									r.graphics.c().s(t.s ? oo.Pick.choose(t.s) : null).ss(t.ss ? oo.Pick.choose(t.ss) : null).sd(t.sd ? oo.Pick.choose(t.sd) : null, t.offset ? oo.Pick.choose(t.offset) : null)
								}
								o.trace && o.updateCache(), "top" == D.layers ? r.emitShape ? o.addTo(S, null, !1) : o.centerReg(S) : r.emitShape ? o.addTo(S, "bottom" == D.layers ? 0 : oo.rand(S.numChildren), !1) : o.centerReg(S, "bottom" == D.layers ? 0 : oo.rand(S.numChildren)), o.alpha = 1, o.scaleX = 1, o.scaleY = 1, r.alpha = r.originalAlpha, r.scaleX = r.originalScaleX, r.scaleY = r.originalScaleY, r.endSpurt = !1
							} else {
								var o;
								W++, D.trace && ((o = new oo.Container(m, z, null, null, !1)).trace = !0);
								var n = oo.Pick.choose(oo.shuffle(f)[0]);
								if ("shape" == n.type) {
									t = n;
									(r = new oo.Shape(1, 1, null, null, null, !1)).emitShape = !0, r.template = t, r.graphics.s(t.s ? oo.Pick.choose(t.s) : null).ss(t.ss ? oo.Pick.choose(t.ss) : null).sd(t.sd ? oo.Pick.choose(t.sd) : null, t.offset ? oo.Pick.choose(t.offset) : null), D.trace ? r.addTo(o, null, !1) : "top" == D.layers ? r.addTo(S, null, !1) : r.addTo(S, "bottom" == D.layers ? 0 : oo.rand(S.numChildren), null, !1)
								} else {
									var r;
									(r = n.clone()).centerReg || zimify(r), D.trace ? r.centerReg(o).pos({
										x: -1e3,
										y: -1e3,
										reg: !0
									}) : "top" == D.layers ? r.centerReg(S) : r.centerReg(S, "bottom" == D.layers ? 0 : oo.rand(S.numChildren))
								}
								D.trace && ("top" == D.layers ? o.addTo(S, null, !1) : o.addTo(S, "bottom" == D.layers ? 0 : oo.rand(S.numChildren), !1), o.cache(v, b, m, z)), D.trace || (o = r), (o.particle = r).originalAlpha = r.alpha, r.originalScaleX = r.scaleX, r.originalScaleY = r.scaleY
							}
							D.currentParticle = r, D.particlesEmitted++, o.particleNormal = !0, o.particleDecaying = !1, o.particleFizzing = !1;
							var i = oo.Pick.choose(D.angle),
								a = oo.Pick.choose(D.emitterForce),
								l = a * Math.cos(i * Math.PI / 180),
								s = a * Math.sin(i * Math.PI / 180);
							r.info = {
								position: {
									x: D.x,
									y: D.y
								},
								velocity: {
									x: l,
									y: s
								}
							}, D.horizontal && (r.info.position = {
								x: D.x - D.regX + oo.rand(0, m),
								y: D.y - D.regY + (D.vertical ? z / 2 : 0)
							}), D.vertical && (r.info.position = {
								x: D.x - D.regX + (D.horizontal ? m / 2 : 0),
								y: D.y - D.regY + oo.rand(0, z)
							}), r.emitShape ? r.graphics.mt(r.info.position.x, r.info.position.y) : (r.x = r.info.position.x, r.y = r.info.position.y), D.random && oo.loop(D.random, function(e, t) {
								val = oo.Pick.choose(t), "scale" == e ? r.sca(val) : ("x" == e ? r.info.position.x = D.horizontal || D.vertical ? val : val + m / 2 : "y" == e && (r.info.position.y = D.horizontal || D.vertical ? val : val + z / 2), "x" != e && "y" != e || !r.emitShape || r.graphics.mt(r.info.position.x, r.info.position.y), r[e] = val, r.emitShape && (r.x = 0, r.y = 0))
							}), T && !r.emitShape && r.cache(r.getBounds().x - 10, r.getBounds().y - 10, r.getBounds().width + 20, r.getBounds().height + 20);
							var c, u = !r.emitShape && D.shrink;
							if (0 < D.decayTime && (D.fade || u || D.trace && 0 < D.traceFadeTime)) {
								if (D.trace && 0 < D.traceFadeTime && o.animate({
										obj: {
											alpha: 0
										},
										time: D.traceFadeTime,
										wait: D.life - D.traceFadeTime,
										waitedCall: function(e) {
											e.particleNormal = !1, e.particleFizzing = !0
										},
										call: F,
										override: !1,
										id: "decay"
									}), D.fade || u) {
									var d = {};
									D.fade && (d.alpha = 0), u && (d.scaleX = 0, d.scaleY = 0), r.animate({
										obj: d,
										time: D.decayTime,
										wait: zot(D.decayStart) ? D.life - D.decayTime : D.decayStart,
										waitedCall: function(e) {
											e.parent != D && (e = e.parent), e.particleNormal = !1, e.particleDecaying = !0
										},
										call: function(e) {
											var t;
											D.events && G("decayed", e), e.endSpurt && G("spurtdecayed", e), D.trace && 0 < D.traceFadeTime || (zot(D.decayStart) || D.decayStart + D.decayTime > D.life ? e.parent && F(e.parent.trace ? e.parent : e) : (t = o, oo.timeout(D.life - (D.decayStart + D.decayTime), function() {
												F(t)
											})))
										},
										override: !1,
										id: "decay"
									})
								}
							} else 0 < D.life && ((c = o).timeOut = oo.timeout(D.life, function() {
								F(c)
							}));
							if (D.events && G("emitted", o), function(e) {
									if (zot(D.spurtCount) && zot(D.spurtNum)) return;
									D.spurtCount++, D.spurtCount >= D.spurtNum && H(e)
								}(r), D.animation) {
								var h = oo.Pick.choose(D.animation);
								zot(h.override) && (h.override = !1), r.animate(oo.copy(h))
							}
						}));

						function e(e, t) {
							return e - t
						}
					}, null, !0);
					Y = D.emitterTicker = oo.Ticker.add(function() {
						oo.loop(S, function(e) {
							if (e.trace) {
								var t = e;
								e = e.getChildAt(0)
							}
							var o = e.info,
								n = 0,
								r = 0;
							if (!zot(D.sink)) {
								var i = D.particles.localToGlobal(o.position.x, o.position.y);
								if (D.sink.parent && D.sink.parent.localToGlobal) var a = D.sink.parent.localToGlobal(D.sink.x, D.sink.y);
								else a = new createjs.Point(oo.Pick.choose(D.sink.x), oo.Pick.choose(D.sink.y));
								var l = oo.angle(i.x, i.y, a.x, a.y);
								n = D.sinkForce * Math.cos(l * Math.PI / 180), r = D.sinkForce * Math.sin(l * Math.PI / 180)
							}
							var s = D.wind + n,
								c = D.gravity + r;
							o.velocity.x += s * frameRate, o.velocity.y += c * frameRate, o.position.x += o.velocity.x * frameRate * 100, o.position.y += o.velocity.y * frameRate * 100, e.emitShape ? e.graphics.lt(o.position.x, o.position.y) : (e.x = o.position.x, e.y = o.position.y), D.trace && t && t.updateCache(e.emitShape ? null : "source-over")
						})
					}, X), frameRate = 1 / oo.Ticker.framerate
				}
			}), Object.defineProperty(D, "interval", {
				get: function() {
					return t
				},
				set: function(e) {
					t = e, D.zimInterval && (D.zimInterval.time = t)
				}
			}), this.spurting = !1, this.spurt = function(e, t, o) {
				var n;
				return (n = zob(D.spurt, arguments, "num, time, restart")) ? n : (zot(t) || (oo.timeout(oo.Pick.choose(t), function() {
					H(D.currentParticle)
				}), D.spurting = !0), zot(e) || (D.spurtNum = oo.Pick.choose(e), D.spurtCount = 0, D.spurting = !0), D.pauseEmitter(!1, o, null, !0), D)
			}, this.clearPool = function() {
				oo.loop(D, function(e) {
					e.pooled = "end", e.visible || D.removeChild(e)
				}, !0), _ = W = 0, R = []
			}, D.startEmitterPaused || (this.emitterPaused = !1), this.pauseEmitter = function(e, t, o, n) {
				if (D.startEmitterPaused = null, zot(e) && (e = !0), zot(t) && (t = !1), zot(o) && (o = !1), e) {
					if (D.emitterPaused) return D;
					o && (Y && oo.Ticker.remove(Y), oo.loop(D, function(e) {
						e.pauseAnimate(), e.trace && e.getChildAt(0).pauseAnimate(), e.timeOut && e.timeOut.pause()
					})), D.zimInterval.pause(), D.emitterPaused = !0
				} else {
					if (!D.emitterPaused) return D;
					t && (oo.loop(D, function(e) {
						e.stopAnimate(), e.timeOut && e.timeOut.clear(), e.trace && e.getChildAt(0).pauseAnimate()
					}), D.removeAllChildren()), X && Y && !oo.Ticker.has(X, Y) && (oo.Ticker.add(Y, X), oo.loop(D, function(e) {
						e.pauseAnimate(!1), e.timeOut && e.timeOut.pause(!1), e.trace && e.getChildAt(0).pauseAnimate(!1)
					})), D.zimInterval.pause(!1, n), D.emitterPaused = !1
				}
				return D
			}, !(this.resize = function(e, t) {
				zot(e) || (m = e), zot(t) || (z = t), D.setBounds(0, 0, m, z), w || C || D.centerReg(), D.clearPool()
			}) !== M && De(this, L), this.clone = function() {
				var e;
				return e = Array.isArray(D.obj) || D.obj.constructor == {}.constructor ? oo.copy(D.obj) : D.obj.clone ? D.obj.clone() : D.obj, D.cloneProps(new oo.Emitter(e, m, z, D.interval, D.num, D.life, D.fade, D.shrink, D.decayTime, D.decayStart, D.trace, D.traceFadeTime, D.traceShiftX, D.traceShiftY, D.angle, D.emitterForce, D.gravity, D.wind, D.layers, D.animation, oo.copy(D.random), D.horizontal, D.vertical, D.sink, D.sinkForce, T, D.events, P, D.pool, D.poolMin))
			}, this.dispose = function() {
				return Y && oo.Ticker.remove(Y), oo.loop(D, function(e) {
					e.stopAnimate()
				}), D.zimInterval && D.zimInterval.clear(), !0
			}
		}, oo.extend(oo.Emitter, oo.Container, "clone", "zimContainer", !1), oo.Pen = function(f, m, z, t, v, b, y, w, C, n, r, e, i, a, o, l, s, c, u, d, h, g, p, x, k) {
			var T;
			if (T = zob(oo.Pen, arguments, "size, color, penType, damp, spread, borderColor, borderWidth, end, paper, nib, cache, ctrlKey, cropScale, undo, undoKeys, draggable, onTop, deleteable, doubleClickDelete, immediateStop, lineAlpha, lineBlendMode, style, group, inherit", this)) return T;
			z_d("69.93"), this.zimContainer_constructor(), this.type = "Pen", this.group = x;
			var A = !1 === p ? {} : oo.getStyle(this.type, this.group, k);
			zot(z) && (z = null != A.penType ? A.penType : "line");
			var P = {
					size: 2,
					color: "#333",
					spread: {
						min: 5,
						max: 20
					},
					borderColor: "#111",
					borderWidth: 0
				},
				B = {
					line: {
						size: 2
					},
					kitetail: {
						size: {
							min: 5,
							max: 20
						},
						color: oo.series(oo.pink, oo.blue, oo.green),
						borderColor: "rgba(0,0,0,.5)",
						borderWidth: 1
					},
					grass: {
						color: "#acd241",
						size: 3,
						spread: {
							min: 10,
							max: 30
						}
					},
					hair: {
						color: ["#e472c4", "#50c4b7"],
						size: 3,
						spread: {
							min: 20,
							max: 50
						}
					},
					city: {
						size: {
							min: 30,
							max: 70
						},
						spread: {
							min: 50,
							max: 200
						},
						color: ["#333", "#111", "#555"]
					},
					barbwire: {},
					splatter: {
						size: {
							min: 5,
							max: 20
						},
						color: "rgba(0,0,0,.5)"
					}
				};
			zot(B[z]) && (z = "line"), zot(f) && (f = null != A.size ? A.size : zot(B[z].size) ? P.size : B[z].size), zot(m) && (m = null != A.color ? A.color : zot(B[z].color) ? P.color : B[z].color), zot(t) && (t = null != A.damp ? A.damp : .1), !1 === t && (t = 1), zot(v) && (v = null != A.spread ? A.spread : zot(B[z].spread) ? P.spread : B[z].spread), zot(b) && (b = null != A.borderColor ? A.borderColor : zot(B[z].borderColor) ? P.borderColor : B[z].borderColor), zot(y) && (y = null != A.borderWidth ? A.borderWidth : zot(B[z].borderWidth) ? P.borderWidth : B[z].borderWidth), zot(w) && (w = null != A.end ? A.end : "butt"), zot(i) && (i = null != A.cropScale ? A.cropScale : 1), zot(r) && (r = null == A.cache || A.cache), zot(a) && (a = null != A.undo ? A.undo : 0), zot(o) && (o = null == A.undoKeys || A.undoKeys), zot(l) && (l = null == A.draggable || A.draggable), zot(c) && (c = null == A.deleteable || A.deleteable), zot(u) && (u = null == A.doubleClickDelete || A.doubleClickDelete), zot(s) && (s = null == A.onTop || A.onTop), zot(d) && (d = null != A.immediateStop ? A.immediateStop : "both"), zot(h) && (h = null != A.lineAlpha ? A.lineAlpha : 1), zot(g) && (g = null != A.lineBlendMode ? A.lineBlendMode : "normal"), zot(C) && (C = null != A.paper ? A.paper : new oo.Container), zot(n) && (n = null != A.nib ? A.nib.clone() : null);
			var I = this;
			this.dampX = new oo.Damp(null, t), this.dampY = new oo.Damp(null, t);
			var S = !0;
			this.drawing = !1, this.immediateStop = d, this.undoLevels = a, this.undoKeys = o, this.draggable = l, this.lineAlpha = h, this.lineBlendMode = g;
			var M, E, O, j, L = new oo.Shape,
				D = zimDefaultFrame ? zimDefaultFrame.stage.width : 1024,
				Y = zimDefaultFrame ? zimDefaultFrame.stage.height : 768;
			I.paperNum = 0, I.sizeScale = 1, I.spreadScale = 1, I.sizeFactor = 1, I.spreadFactor = 1, I.stop = function() {}, L.addTo(C), this.added(function() {
				if (I.paper = C, !zot(n))
					if (I.zimDown) I.nib = n.addTo(I);
					else {
						var t;

						function o(e) {
							I.drawing && (I.nib.x = e.stageX / t.scaleX, I.nib.y = e.stageY / t.scaleY)
						}
						I.nib = n.addTo(I.parent, I.parent.getChildIndex(I)), I.nib.x = I.x, I.nib.y = I.y, I.nib.mouseEnabled = !1, I.stage.on("stagemousedown", function(e) {
							t = e.target.stage, I.nibEvent = I.stage.on("stagemousemove", o)
						}), I.stage.on("stagemouseup", function(e) {
							I.stage.off("stagemousemove", I.nibEvent)
						})
					}
				I.zimDragCheck = !1, I.stop = function() {
					I.stopCheck(!0)
				}, I.infinite = !1, I.stopCheck = function(e) {
					if (e) I.drawing = !1, I.infinite = !1;
					else {
						if (I.infinite) return;
						if (I.zimDragCheck) return;
						if (!I.immediateStop && I.drawing) return
					}
					I.immediate(I.x, I.y), setTimeout(function() {
						if (!I.drawing) {
							if (r) {
								L.cache(-(D * i - D) / 2, -(Y * i - Y) / 2, D * i, Y * i);
								var e = C.bitmap = new oo.Bitmap(L.cacheCanvas).reg((D * i - D) / 2, (Y * i - Y) / 2).addTo(C);
								L.graphics.clear(), L.uncache(), L.top()
							} else e = L;
							if (0 < I.undoLevels) {
								var t = {
									paper: C,
									line: e
								};
								a.push(t), a.length > I.undoLevels && a.unshift(), I.dispatchEvent("recordUndo")
							}
							r || (L = (new oo.Shape).clone().addTo(C)), I.lastSegment = e, (I.lastSelected = e).alpha = I.lineAlpha, e.blendMode = I.lineBlendMode, e.paper = C, I.dispatchEvent("stop"), I.dispatchEvent("change")
						}
					}, I.immediateStop || e ? 0 : 50)
				};
				var p = 0;
				I.dampX.immediate(I.x), I.dampY.immediate(I.y), I.lastX = I.x, I.lastY = I.y, I.ticker = oo.Ticker.add(function() {
					var e = I.dampX.convert(S ? I.x : I.finishX),
						t = I.dampY.convert(S ? I.y : I.finishY),
						o = I.parent.localToLocal(e, t, L),
						n = oo.Pick.choose(f) * I.sizeScale * I.sizeFactor,
						r = oo.Pick.choose(v) * I.spreadScale * I.spreadFactor;
					if (Math.abs(I.lastX - e) + Math.abs(I.lastY - t) < 1) return I.drawing && (I.drawing = !1, I.zimDown ? (I.x = I.lastX = S ? I.x : I.finishX, I.y = I.lastY = S ? I.y : I.finishY, I.dampX.immediate(I.x), I.dampY.immediate(I.y)) : (I.x = I.finishX = I.lastX = e, I.y = I.finishY = I.lastY = t), I.stopCheck()), I.lastX = e, void(I.lastY = t);
					if (I.drawing || (X = [], C.getChildIndex(L) != C.numChildren - 1 && L.top()), I.drawing = !0, I.dispatchEvent("drawing"), "splatter" == z)
						for (var i = 0; i <= 3; i++) {
							var a = oo.rand(360) * Math.PI / 180,
								l = r,
								s = {
									x: e + l * Math.cos(a),
									y: t + l * Math.sin(a)
								},
								c = I.parent.localToLocal(s.x, s.y, L);
							L.graphics.mt(c.x, c.y).f(oo.Pick.choose(m)).dc(c.x, c.y, n / 2)
						} else if ("grass" == z || "hair" == z || "city" == z) {
							if ("grass" == z || "hair" == z) {
								var u = I.lastX + (e - I.lastX) / 2,
									d = I.lastY + (t - I.lastY) / 2,
									h = I.parent.localToLocal(u, d, L);
								L.graphics.s(oo.Pick.choose(m)).ss(n, w).mt(h.x, h.y).lt(h.x + rand(-r / 4, r / 4), "hair" == z ? h.y + r : h.y - r)
							}("grass" == z || "hair" == z || "city" == z && p % 3 == 0) && L.graphics.s(oo.Pick.choose(m)).ss(n, w).mt(o.x, o.y).lt(o.x + ("city" == z ? 0 : rand(-r / 4, r / 4)), "hair" == z ? h.y + r : o.y - r), p++
						} else {
							if ("kitetail" == z && L.graphics.s(oo.Pick.choose(m)).ss(n, w), "barbwire" == z) {
								L.graphics.s(oo.Pick.choose(m)).ss(n, w);
								u = I.lastX + (e - I.lastX) / 2 + rand(-r, r), d = I.lastY + (t - I.lastY) / 2 + rand(-r, r)
							} else u = I.lastX + (e - I.lastX) / 2, d = I.lastY + (t - I.lastY) / 2;
							h = I.parent.localToLocal(u, d, L);
							L.graphics.qt(h.x, h.y, o.x, o.y)
						}
					var g = I.parent.localToLocal(I.lastX, I.lastY, L);
					if (0 < y && "line" != z) {
						u = I.lastX + (e - I.lastX) / 2, d = I.lastY + (t - I.lastY) / 2, h = I.parent.localToLocal(u, d, L);
						L.graphics.s(oo.Pick.choose(b)).ss(oo.Pick.choose(y)).mt(g.x, g.y).qt(h.x, h.y, o.x, o.y), "splatter" == z && L.graphics.es()
					}
					"splatter" == z ? L.graphics.f(oo.Pick.choose(m)) : "kitetail" == z || L.graphics.s(oo.Pick.choose(m)).ss(n, w), "grass" != z && "hair" != z && "city" != z && "splatter" != z && L.graphics.mt(g.x, g.y).qt(h.x, h.y, o.x, o.y), I.lastX = e, I.lastY = t
				}), I.stage.on("stagemouseup", function() {
					!1
				})
			}), I.mouseChildren = !1;
			a = [];
			var X = [];
			this.saveState = function(e, t, o) {
				var n = "Container" == e.type ? "paper" : "line",
					r = {
						paper: I.paper
					};
				r[n] = e, r[n + "Transform"] = {
					x: e.x,
					y: e.y,
					r: e.rotation,
					a: e.alpha,
					rX: e.regX,
					rY: e.regY,
					sX: e.scaleX,
					sY: e.scaleY,
					skX: e.skewX,
					skY: e.skewY,
					v: e.visible
				}, zot(t) || zot(o) || t == o || (r.startLayer = t, r.endLayer = o), a.push(r), I.dispatchEvent("recordUndo"), a.length > I.undoLevels && a.unshift()
			};
			var R, _, W = {
				x: 0,
				y: 0,
				r: 0,
				a: 1,
				rX: 0,
				rY: 0,
				sX: 1,
				sY: 1,
				skX: 0,
				skY: 0,
				v: !0
			};

			function F(e, t) {
				for (var o, n = a.length - 1; 0 <= n; n--)
					if (a[n][e] == t && a[n][e + "Transform"]) {
						o = a[n][e + "Transform"];
						break
					}
				o = o || oo.copy(W), t.x = o.x, t.y = o.y, t.alpha = o.a, t.rotation = o.r, t.regX = o.rX, t.regY = o.rY, t.scaleX = o.sX, t.scaleY = o.sY, t.skewX = o.skX, t.skewY = o.skY, t.visible = o.v, "line" == e && r && (t.regX = (D * i - D) / 2, t.regY = (Y * i - Y) / 2)
			}
			this.undo = function() {
				var e = a.pop();
				if (e) {
					if (X.push(e), e.clear) {
						for (var t = 0; t < e.clear.length; t++) e.paper.addChild(e.clear[t]);
						e.paper.addChild(L)
					} else e.line && e.lineTransform ? (zot(e.startLayer) || (L.top(), e.paper.setChildIndex(e.line, O)), F("line", e.line)) : e.line ? e.line.removeFrom() : e.paperTransform && F("paper", e.paper);
					I.lastPaper = I.paper, e.paper != I.paper && (I.paper = e.paper, I.dispatchEvent("paperChange")), I.dispatchEvent("change"), !OPTIMIZE && I.stage && I.stage.update()
				}
			}, this.redo = function() {
				var e = X.pop();
				if (e) {
					if (a.push(e), e.clear) e.paper.removeAllChildren(), e.paper.addChild(L);
					else if (e.line && e.lineTransform) {
						zot(e.endLayer) || (L.top(), e.paper.setChildIndex(e.line, j));
						var t = e.lineTransform,
							o = e.line
					} else if (e.line) e.line.addTo(e.paper);
					else if (e.paperTransform) t = e.paperTransform, o = e.paper;
					o && (o.x = t.x, o.y = t.y, o.alpha = t.a, o.rotation = t.r, o.regX = t.rX, o.regY = t.rY, o.scaleX = t.sX, o.scaleY = t.sY, o.skewX = t.skX, o.skewY = t.skY, o.visible = t.v), I.lastPaper = I.paper, e.paper != I.paper && (I.paper = e.paper, I.dispatchEvent("paperChange")), I.dispatchEvent("change"), !OPTIMIZE && I.stage && I.stage.update()
				}
			}, I.ctrlKey = !1, I.shiftKey = !1, I.ctrlKeyCheck = !1, I.zimkeydownEvent = window.addEventListener("keydown", function(e) {
				I.ctrlKey = e.ctrlKey, I.shiftKey = e.shiftKey, 17 == e.keyCode && l && !I.ctrlKeyCheck && (I.ctrlKeyCheck = !0, C.noDrag(), C.drag({
					onTop: s,
					all: !0
				})), I.undoLevels <= 0 || I.undoKeys && (e.ctrlKey && (e.shiftKey && 90 == e.keyCode || 89 == e.keyCode) ? I.redo() : e.ctrlKey && 90 == e.keyCode && I.undo())
			}), I.zimkeyupEvent = window.addEventListener("keyup", function(e) {
				17 == e.keyCode && l && I.ctrlKeyCheck && (I.ctrlKeyCheck = !1, C.noDrag(), C.drag({
					onTop: s
				})), e.ctrlKey || (I.ctrlKey = !1), e.shiftKey || (I.shiftKey = !1)
			}), Object.defineProperty(this, "paper", {
				get: function() {
					return C
				},
				set: function(e) {
					"Container" == e.type && (C = e, L.addTo(C, 0, !1), C.shape = L, I.dampX.immediate(I.x), I.dampY.immediate(I.y), I.lastX = I.finishX = I.x, I.lastY = I.finishY = I.y, "barbwire" == z && L.graphics.s(oo.Pick.choose(m)).ss(oo.Pick.choose(f) * I.sizeScale * I.sizeFactor, w), L.graphics.mt(I.x, I.y), C.parent || C.addTo(I.parent, I.parent.getChildIndex(I)), zot(C.paperNum) && (C.paperNum = ++I.paperNum, c && C.on("mousedown", function(e) {
						I.lastSelected = e.target, I.nibEvent && I.stage.off("stagemousemove", I.nibEvent);
						var t = e.target.paper;
						t && (t != I.paper && (I.paper = t, I.dispatchEvent("paperChange")), I.shiftKey && (I.ctrlKey ? I.clear() : (e.target.visible = !1, 0 < I.undoLevels && I.saveState(e.target), I.dispatchEvent("change"))))
					}), u && C.on("dblclick", function(e) {
						e.target.visible = !1, 0 < I.undoLevels && I.saveState(e.target)
					}), l && (C.on("mousedown", function(e) {
						stage = e.target.stage, !0, I.shiftKey && c || (M = e.stageX / stage.scaleX, E = e.stageY / stage.scaleY, L.top(), O = C.getChildIndex(e.target))
					}), C.drag({
						onTop: s
					}), C.on("pressup", function(e) {
						c && I.shiftKey || 0 != e.target.visible && (I.undoLevels <= 0 || (Math.abs(e.stageX / stage.scaleX - M) < 1 && Math.abs(e.stageY / stage.scaleY - E) < 1 ? s && (L.top(), j = C.getChildIndex(e.target), O != j && I.saveState(e.target, O, j)) : (I.ctrlKey ? (I.saveState(C), I.dispatchEvent("paperChange")) : (L.top(), j = C.getChildIndex(e.target), I.saveState(e.target, O, j)), I.dispatchEvent("change"), L.top())))
					}))))
				}
			}), Object.defineProperty(this, "write", {
				get: function() {
					return S
				},
				set: function(e) {
					S && !1 === e && (I.finishX = I.x, I.finishY = I.y), !S && e && (L.graphics.es(), L.graphics.ef(), I.dampX.immediate(I.x), I.dampY.immediate(I.y), I.lastX = I.x, I.lastY = I.y), S = e
				}
			}), Object.defineProperty(this, "size", {
				get: function() {
					return f
				},
				set: function(e) {
					L.graphics.es(), L.graphics.ef(), f = e, "splatter" != z && L.graphics.ss(oo.Pick.choose(f) * I.sizeScale * I.sizeFactor, w)
				}
			}), Object.defineProperty(this, "color", {
				get: function() {
					return m
				},
				set: function(e) {
					m = e, L.graphics.es(), L.graphics.ef(), "splatter" != z && L.graphics.s(oo.Pick.choose(m))
				}
			}), Object.defineProperty(this, "penType", {
				get: function() {
					return z
				},
				set: function(e) {
					z = e, L.graphics.ef().es(), "splatter" != z ? L.graphics.s(oo.Pick.choose(m)) : L.graphics.s(oo.Pick.choose(m)).ss(oo.Pick.choose(f) * I.sizeScale * I.sizeFactor, w)
				}
			}), Object.defineProperty(this, "damp", {
				get: function() {
					return t
				},
				set: function(e) {
					t = e, I.dampX.damp = t, I.dampY.damp = t
				}
			}), Object.defineProperty(this, "spread", {
				get: function() {
					return v
				},
				set: function(e) {
					v = e
				}
			}), this.setColorRange = function(e, t) {
				return _ = zot(t) ? (R = I.color, e) : (R = zot(e) ? I.color : e, t), I
			};
			var G = 0;
			Object.defineProperty(I, "colorRange", {
				get: function() {
					return G
				},
				set: function(e) {
					G = e, zot(R) || zot(_) || (I.color = oo.colorRange(R, _, e))
				}
			}), Object.defineProperty(this, "borderColor", {
				get: function() {
					return b
				},
				set: function(e) {
					b = e
				}
			}), Object.defineProperty(this, "borderWidth", {
				get: function() {
					return y
				},
				set: function(e) {
					y = e
				}
			}), zimDefaultFrame && (zimDefaultFrame.on("keydown", function() {
				frame.ctrlKey && I.write && (I.lastWrite = I.write, I.write = !1)
			}), zimDefaultFrame.on("keyup", function() {
				frame.ctrlKey || 0 != I.write || (I.write = I.lastWrite)
			})), I.setPen = function(e) {
				I.dampX.immediate(I.x), I.dampY.immediate(I.y), I.lastX = I.finishX = I.x, I.lastY = I.finishY = I.y, zot(e) && (e = z), zot(B[e]) && (e = "line"), I.penType = z = e;
				var t = oo.merge(P, B[e]);
				for (var o in t) I[o] != t[o] && (I[o] = t[o]);
				return I
			}, I.immediate = function(e, t) {
				return zot(e) || (I.x = e, I.dampX.immediate(I.x), I.lastX = I.finishX = I.x), zot(t) || (I.y = t, I.dampY.immediate(I.y), I.lastY = I.finishY = I.y), I
			}, I.clear = function() {
				if (!(C.numChildren <= 1)) {
					for (var e = [], t = 0; t < C.numChildren - 1; t++) e.push(C.getChildAt(t));
					return a.push({
						paper: C,
						clear: e
					}), a.length > I.undoLevels && a.unshift(), I.dispatchEvent("recordUndo"), C.removeAllChildren(), L.graphics.clear(), C.addChild(L), I.dispatchEvent("change"), I.stage && I.stage.update(), I
				}
			}, this.delete = function(e) {
				C.getChildAt(e).visible = !1, 0 < I.undoLevels && I.saveState(C.getChildAt(e))
			}, this.deleteSegment = function(e) {
				e.visible = !1, 0 < I.undoLevels && I.saveState(e)
			}, !(I.dispose = function(e) {
				return zot(e) ? (window.removeEventListener("keydown", I.zimkeydownEvent), window.removeEventListener("keyup", I.zimkeyupEvent), Ticker.remove(I.Ticker), I.removeAllEventListeners(), e.removeAllEventListeners(), L.graphics.clear(), r ? I.bitmap.removeFrom() : L.removeFrom(), n.removeFrom(), !0) : (e.removeAllEventListeners(), e.shape.graphics.clear(), void(r ? e.bitmap.removeFrom() : e.shape.removeFrom()))
			}) !== p && De(this, A)
		}, oo.extend(oo.Pen, oo.Container, "clone", "zimContainer", !1), oo.SoundWave = function(e, i, a, t, o, n, l, r, s, c) {
			var u;
			if (u = zob(oo.SoundWave, arguments, "num, input, include, smoothing, min, max, operation, baseline, magnify, reduce", this)) return u;
			z_d("69.95"), this.type = "SoundWave", zot(e) && (e = 120), zot(i) && (i = "mic"), zot(a) && (a = .1171875), zot(t) && (t = .85), zot(o) && (o = "mic" == i ? -80 : -100), zot(n) && (n = "mic" == i ? -40 : -10), zot(l) && (l = function(e, t) {
				return e * (.5 + 1 * t / Math.pow(oo.SoundWave.bufferLength, .95))
			}), zot(r) && (r = "mic" == i ? 0 : 30), zot(s) && (s = "mic" == i ? 1 : 10), zot(c) && (c = 0), oo.SoundWave.bufferLength = 1024, _num = e;
			var d = this;
			d.baseline = r, d.magnify = s, d.reduce = c;
			var h = new(window.AudioContext || window.webkitAudioContext),
				g = d.analyser = h.createAnalyser();
			if (g.minDecibels = o, g.maxDecibels = n, g.smoothingTimeConstant = t, Object.defineProperty(this, "smoothing", {
					get: function() {
						return g.smoothingTimeConstant
					},
					set: function(e) {
						g.smoothingTimeConstant = e
					}
				}), Object.defineProperty(this, "num", {
					get: function() {
						return _num
					},
					set: function(e) {
						_num = e, (m = Math.floor(a * oo.SoundWave.bufferLength / _num)) < 1 && zog("ZIM SoundWave: num is too big")
					}
				}), "mic" == i) return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, void(navigator.getUserMedia ? navigator.getUserMedia({
				audio: !0
			}, function(e) {
				z(d.source = h.createMediaStreamSource(e))
			}, function(e) {
				zog("ZIM SoundWave: Error occured: " + e)
			}) : zog("ZIM SoundWave: Sorry, mic not supported"));
			if (i.type && "sound" == i.type) zog("ZIM SoundWave: pass in the result of a zim.asset('somesound').play() for the input");
			else {
				if (i.playbackResource) var p = i.playbackResource,
					f = h.createMediaElementSource(p);
				else p = i, f = h.createMediaElementSource(p);
				var m;
				z(f)
			}

			function z(e) {
				if (e.connect(g), "mic" != i && g.connect(h.destination), g.fftSize = 2 * oo.SoundWave.bufferLength, (m = Math.floor(a * oo.SoundWave.bufferLength / _num)) < 1) zog("ZIM SoundWave: include param is too small or num param is too big");
				else {
					var t = g.frequencyBinCount,
						r = new Uint8Array(t);
					d.calculate = function() {
						g.getByteFrequencyData(r);
						var e = r.map(l);
						if (1 == m) return e;
						for (var t = [], o = 0, n = 0; n <= a * oo.SoundWave.bufferLength; n++) o += e[n], 0 != n && n % m == 0 && (t.push(Math.max(0, (o / m - d.baseline) * d.magnify - d.reduce)), o = 0);
						return "mic" != i && (t[0] *= .75, t[1] *= .85, t[2] *= .9, t[t.length - 2] *= .8, t[t.length - 1] *= .75), t[t.length - 1] *= 1.3, t[t.length - 2] *= 1.2, t[t.length - 3] *= 1.1, t
					}, setTimeout(function() {
						d.dispatchEvent("ready")
					}, 50)
				}
			}
		}, oo.extend(oo.SoundWave, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.VR = function(o, n, r, i, a, e, l, t, s, c, u, d) {
			var h;
			if (h = zob(oo.VR, arguments, "content, angle, distance, parallax, parallaxAngle, damp, parallaxDamp, startAngle, negativeParallax, boundaryMarkers, swiper, holder", this)) return h;
			if (z_d("69.98"), this.type = "VR", zimDefaultFrame) {
				var g = zimDefaultFrame;
				if (zot(d) || !d.getBounds || !d.getBounds().width) d = g.stage;
				zot(n) && (n = 0), zot(r) && (r = 100), zot(e) && (e = .5), zot(i) && (i = 0), zot(a) && (a = 60), zot(l) && (l = .1), zot(t) && (t = 0), zot(s) && (s = !1), zot(c) && (c = !0), zot(u) && (u = !0), this.angle = n, this.currentAngle = t, oo.mobile() && (u = !1);
				var p = this,
					f = d.width,
					m = d.height;
				p.zimContainer_constructor();
				var z = p.left = new oo.Container(f / 2, m, null, null, !1),
					v = new oo.Rectangle(f / 2, m, "rgba(0,0,0,.01)", null, null, null, null, null, !1);
				z.addChild(v);
				var b = p.right = z.clone();
				p.addChild(z, b), b.x = f / 2;
				var y = p.contentLeft = p.content = o,
					w = p.contentRight = o.clone();
				if (0 != t) var C = setTimeout(N, 100);
				else N();
				var x = [],
					k = [];
				if (V(y, w), q(x, "left"), q(k, "right"), 0 != n && 0 != r) {
					var T = new oo.Damp(180 + t, e);
					T.immediate(180 + t);
					var A = !1,
						P = !1;

					function B(e) {
						p.currentAngle = e;
						var t = -p.currentAngle * r / n;
						if (p.contentLeft.x = t, p.contentRight.x = t, Math.round(p.currentAngle) <= -n / 2 && !A)(o = new createjs.Event("boundaryout")).boundary = "left", A = !0, p.dispatchEvent(o);
						else if (Math.round(p.currentAngle) >= n / 2 && !P) {
							(o = new createjs.Event("boundaryout")).boundary = "right", P = !0, p.dispatchEvent(o)
						} else if (Math.round(p.currentAngle) > -n / 2 && Math.round(p.currentAngle) < n / 2) {
							var o = new createjs.Event("boundaryin");
							A ? (o.boundary = "left", p.dispatchEvent(o), A = !1) : P && (o.boundary = "right", p.dispatchEvent(o), P = !1)
						}
					}

					function I(e) {
						var t = e.parent.localToLocal(e.vrStartX, 0, d),
							o = e.vrParallaxDamp.convert("left" == e.vrChannel ? p.contentLeft.x + t.x - f / 4 : p.contentRight.x + t.x - f / 2 - f / 4);
						e.depth <= 0 && !s && (o = 0), e.vrParallaxDistance = Math.max(-r / n * a / 2, Math.min(r / n * a / 2, o)), e.dep(e.depth)
					}
					g.on("deviceorientation", function(e) {
						B(T.convert((180 < e.rotation.z ? -180 : 180) + e.rotation.z + t) - 180)
					}), oo.Ticker.always()
				}
				if (0 != i && 0 != r) {
					var S = new oo.ProportionDamp(180 - a / 2, 180 + a / 2, -a / 2, a / 2, l);
					if (S.immediate(180), 0 == n)
					function M(e, t) {
						e.vrParallaxDistance = e.depth <= 0 && !s ? 0 : t, e.dep(e.depth)
					}

					function E(t) {
						0 != n && 0 != r ? (oo.loop(x, I), oo.loop(k, I)) : (oo.loop(x, function(e) {
							M(e, t)
						}), oo.loop(k, function(e) {
							M(e, t)
						}))
					}
					g.on("deviceorientation", function(e) {
						var t = 0;
						0 == n && 0 != i && 0 != r && (t = S.convert((180 < e.rotation.z ? -180 : 180) + e.rotation.z)), E(t)
					}), oo.Ticker.always()
				}!u || 0 == r || 0 == n && 0 == i || p.added(function() {
					var e = {
						swipeAngle: 0
					};
					p.swiper = new oo.Swiper({
						swipeOn: p,
						target: e,
						property: "swipeAngle",
						sensitivity: .2,
						damp: .05,
						factor: -1,
						min: -330,
						max: 330
					});
					Ticker.add(function() {
						0 != n && 0 != r && B(e.swipeAngle), 0 != i && 0 != r && E(S.convert(e.swipeAngle + 180))
					})
				});
				var O = localStorage && localStorage.zimEyeAdjust ? Number(localStorage.zimEyeAdjust) : 0,
					j = O,
					L = !1;
				y.startRegX = y.regX, w.startRegX = w.regX;
				var D = this.adjuster = new oo.Container(800, 300, null, null, !1),
					Y = (v = D.backing = new oo.Rectangle(D.width, D.height, oo.lighter, null, null, null, null, null, !1).center(D).alp(1).sha("rgba(0,0,0,.2)", 0, 0, 30), D.strip = new oo.Rectangle(D.width, D.height / 3, oo.white, null, null, null, null, null, !1).center(D).alp(1), D.label = new oo.Label({
						text: "slide to adjust center of left and right",
						size: 28,
						color: oo.dark,
						align: "center",
						valign: "center"
					}).center(D).pos({
						y: 50,
						reg: !0
					}), D.close = new oo.Rectangle(50, 50, oo.light, null, null, null, null, null, !1).addTo(D).mov(D.width - 70, 26)),
					X = new oo.Shape(-40, -40, 80, 80, null, !1);
				X.graphics.f(oo.dark).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"), X.center(Y).sca(.3), Y.cursor = "pointer", Y.on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
					p.hideAdjuster(), W.currentValue = (W.max - W.min) / 2 + j, p.dispatchEvent("closed")
				});
				var R = new oo.Circle(30, oo.dark, null, null, null, null, null, !1).center(D).pos({
					x: D.width / 4,
					reg: !0
				});
				R.shape.alpha = .2, new oo.Circle(12, oo.dark, null, null, null, null, !1).center(R);
				var _ = new oo.Circle(30, oo.dark, null, null, null, null, !1).center(D).pos({
					x: D.width / 4 * 3,
					reg: !0
				});
				_.shape.alpha = .2, new oo.Circle(12, oo.dark, null, null, null, null, null, !1).center(_);
				var W = D.slider = new oo.Slider({
					min: 0,
					max: 30,
					step: 1,
					useTicks: !0,
					style: !1
				}).centerReg(D).pos({
					y: D.height - 40,
					reg: !0
				});
				W.currentValue = (W.max - W.min) / 2 + O;
				var F = new oo.Proportion(W.min, W.max, R.x - D.width / 4, R.x + D.width / 4, -1),
					G = new oo.Proportion(W.min, W.max, _.x - D.width / 4, _.x + D.width / 4);
				W.on("change", function() {
					R.x = F.convert(W.currentValue), _.x = G.convert(W.currentValue)
				}), new oo.Label("closer", 24, null, oo.silver).centerReg(D).pos({
					x: W.x - 220,
					y: W.y,
					reg: !0
				}), new oo.Label("farther", 24, null, oo.silver).centerReg(D).pos({
					x: W.x + 220,
					y: W.y,
					reg: !0
				}), (p.ok = new oo.Button({
					label: "OK",
					width: 90,
					height: 60,
					corner: 0,
					backgroundColor: oo.blue,
					rollBackgroundColor: oo.green,
					shadowColor: -1,
					style: !1
				}).centerReg(D).sca(.8).pos({
					x: D.width - 58,
					y: W.y,
					reg: !0
				})).on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
					localStorage && (localStorage.zimEyeAdjust = W.currentValue - (W.max - W.min) / 2), K(), p.hideAdjuster(), p.dispatchEvent("saved"), p.dispatchEvent("closed")
				}), (p.zero = new oo.Button({
					label: ">|<",
					width: 90,
					height: 60,
					corner: 0,
					backgroundColor: oo.yellow,
					rollBackgroundColor: oo.green,
					shadowColor: -1,
					style: !1
				}).centerReg(D).sca(.8).pos({
					x: 58,
					y: W.y,
					reg: !0
				})).on((zns ? "mousedown" == oo.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
					W.currentValue = (W.max - W.min) / 2, R.x = F.convert(W.currentValue), _.x = G.convert(W.currentValue)
				});
				var H = new oo.Proportion(0, 30, -d.width / 4, d.width / 4);
				K(), this.showAdjuster = function() {
					if (L) return p;
					L = !0, R.x = F.convert(W.currentValue), _.x = G.convert(W.currentValue), j = W.currentValue - (W.max - W.min) / 2, D.scaleTo(d).center(this), d.stage.update()
				}, this.hideAdjuster = function() {
					if (!L) return p;
					L = !1, D.removeFrom(this), d.stage.update()
				}, this.position = function(e, t, o) {
					function n(e) {
						e.vrStartX = t, e.vrParallaxDamp && e.vrParallaxDamp.immediate(t), e.mov(t, o)
					}
					return n(e), n(e.vrMatch), e
				}, this.register = function(e) {
					if (!e.parent || !e.parent.vrMatch) return zon && zog("ZIM VR() - please only register objects already inside content container"), e;
					var t = e.clone().addTo(e.parent.vrMatch),
						o = [],
						n = [];
					return V(e, t, o, n), q(o, "left"), q(n, "right"), e
				}, 0 != n && 0 != r && c && (p.boundaryRight = new oo.Container({
					style: !1
				}), new oo.Circle(24, oo.light, null, null, null, null, null, !1).addTo(p.boundaryRight).dep(-2), new oo.Triangle(16, 16, 16, oo.yellow, oo.grey, null, null, -3, null, null, !1).rot(-90).center(p.boundaryRight).dep(-6), p.boundaryRight.center(o).mov(r / 2 + 24), p.boundaryLeft = new oo.Container({
					style: !1
				}), new oo.Circle(24, oo.light, null, null, null, null, null, !1).addTo(p.boundaryLeft).dep(-2), new oo.Triangle(16, 16, 16, oo.yellow, oo.grey, null, null, -3, null, null, !1).rot(90).center(p.boundaryLeft).dep(-6), p.boundaryLeft.center(o).mov(-r / 2 - 24), p.register(p.boundaryRight), p.register(p.boundaryLeft)), this.remove = function(e) {
					return oo.loop(arguments, function(e, t) {
						o.contains(t) && (! function t(e) {
							var o = x.indexOf(e);
							0 <= x.indexOf(e) && (x.splice(o, 1), k.splice(o, 1)), oo.loop(e, function(e) {
								t(e)
							})
						}(t), t.parent.removeChild(t), t.vrMatch.parent.removeChild(t.vrMatch))
					}), p
				}, this.resize = function() {
					f = d.width, m = d.height, z.getChildAt(0).widthOnly = b.getChildAt(0).widthOnly = f / 2, z.getChildAt(0).heightOnly = b.getChildAt(0).heightOnly = m, b.x = f / 2, z.setBounds(0, 0, f / 2, m), b.setBounds(0, 0, f / 2, m), 0 != t ? (clearTimeout(C), C = setTimeout(N, 100)) : N(), D.scaleTo(d).center(this, null, !1)
				}
			} else zon && zog("zim.VR() - please use ZIM Frame");

			function N() {
				y.addTo(z, null, !1).setMask(z.getChildAt(0)).pos({
					y: (d.height - y.height) / 2,
					reg: !0
				}), w.addTo(b, null, !1).setMask(b.getChildAt(0)).pos({
					y: (d.height - y.height) / 2,
					reg: !0
				})
			}

			function V(e, o, n, r) {
				((e.vrMatch = o).vrMatch = e).cacheCanvas && o.cache(), e.dep && !zot(e.depth) && (x.push(e), k.push(o), zot(n) || n.push(e), zot(r) || r.push(o), o.dep(e.depth)), oo.loop(e, function(e, t) {
					V(e, o.getChildAt(t), n, r)
				})
			}

			function q(e, t) {
				oo.loop(e, function(e) {
					e.vrChannel = t, e.vrStartX = e.x, 0 != n && 0 != r && (e.vrAngle = n, e.vrDistance = r), 0 != i && 0 != r && (e.vrParallax = i / 100, (e.vrParallaxDistance = 0) != n && (e.vrParallaxDamp = new oo.Damp(0, l))), e.dep(e.depth)
				})
			}

			function K() {
				var e = H.convert(W.currentValue);
				y.regX = y.startRegX + e, w.regX = w.startRegX - e
			}
		}, oo.extend(oo.VR, oo.Container, "clone", "zimContainer", !1), oo.Frame = function(m, z, o, i, n, r, a, l, e, t, v, b, y, w, s, c, u, C, d, h, g, p, f, x, k, T, A, P) {
			var B;
			if (B = zob(oo.Frame, arguments, "scaling, width, height, color, outerColor, assets, path, progress, rollover, touch, scrollTop, align, valign, canvasID, rollPerSecond, delay, canvasCheck, gpu, gpuObj, nextFrame, nextStage, allowDefault, loadFailObj, sensors, retina, mouseMoveOutside, captureMouse, shim", this)) return B;
			z_d("83"), zon && zog("ZIM FRAME"), this.cjsEventDispatcher_constructor(), this.type = "Frame";
			var X = this;
			if (void 0 === zimDefaultFrame && (zimDefaultFrame = this), zot(u) && (u = !0), !!window.HTMLCanvasElement || !u) {
				var I = oo.mobile();
				zot(m) && (m = "full"), zot(e) && (e = !I), zot(t) && (t = !0), zot(v) && (v = !1), zot(b) && (b = "center"), zot(y) && (y = "center");
				zot(w) && (w = zimDefaultFrame != this ? "myCanvas" + oo.makeID(5) : "myCanvas"), zot(s) && (s = 20), zot(c) && (c = I ? 1e3 : 30), zot(C) && (C = !1), zot(p) && (p = !1), zot(f) && (f = "circles"), this.loadFailObj = f, zot(x) && (x = !1), zot(k) && (k = !0), this.retina = k, zot(T) && (T = !1), zot(A) && (A = !0), zot(P) && (P = !1);
				var S, M, E = ["fit", "outside", "full"];
				if (P) {
					var O = this.canvas = P.canvas;
					this.scale = P.stage.scaleX, setTimeout(function() {
						X.scale = P.stage.scaleX, window.addEventListener("resize", function() {
							X.scale = P.stage.scaleX
						})
					}, 20), this.x = P.stage.x, this.y = P.stage.y;
					var j = (R = P.stage).getBounds().width,
						L = R.getBounds().height;
					i = O.style.backgroundColor
				} else {
					var R;
					this.scale = 1, this.x = 0, this.y = 0;
					j = z, L = o
				}
				var D, Y, _, W = !1,
					F = !1,
					G = !1,
					H = !1;
				P || ("interactive" === document.readyState || "complete" === document.readyState ? setTimeout(function() {
					oe()
				}, 200) : document.addEventListener("DOMContentLoaded", oe));
				var N, V, q = !1,
					K = "full" == m && "undefined" != typeof InstallTrigger;
				if (this.swapRotation = !1, I) {
					var U = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth,
						Z = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
					this.swapRotation = (0 == window.orientation || 180 == window.orientation) && Z < U || 90 == Math.abs(window.orientation) && U < Z
				}
				window.addEventListener("resize", te), this.update = function() {
					ae(), X.dispatchEvent("update")
				}, this.loadAssets = function(e, l, t, o, n, r, i, a, s, c) {
					if (!zot(e)) {
						if (zot(e.src)) {
							var u;
							if (u = zob(X.loadAssets, arguments, "assets, path, progress, xhr, time, loadTimeout, outputAudioSprite, crossOrigin, fileType, queueOnly")) return u
						}
						if (!zot(t) && "ProgressBar" == t.type && zot(o) && (o = !0), Array.isArray(e) || (e = [e]), 0 != e.length) {
							zot(n) && (n = 0), zot(r) && (r = 8e3), zot(i) && (i = !1), zot(a) && (a = "anonymous"), zot(c) && (c = !1);
							var d, h, g, p = !1,
								f = [],
								m = /\.([^.]+)$/i,
								z = [],
								v = [],
								b = 0,
								y = !0;
							for (S = 0; S < e.length; S++) {
								if ((d = e[S]).constructor == {}.constructor)
									if (d.audioSprite) {
										L(d = (x = oo.copy(d)).src);
										var w, C = [];
										for (g = 0; g < x.audioSprite.length; g++) w = x.audioSprite[g], C.push({
											id: w[0],
											startTime: Math.round(1e3 * w[1]),
											duration: Math.round(1e3 * (w[2] - w[1]))
										});
										delete x.audioSprite, x.data = {
											audioSprite: C
										}, i && zog(JSON.stringify(x)), f.push(x)
									} else if (d.data && d.data.audioSprite) {
									var x;
									L(d = (x = oo.copy(d)).src), f.push(x)
								} else if (d.id) {
									X.assetIDs[d.id] = d.src, L(d = d.src);
									var k = {
										src: d,
										loadTimeout: r
									};
									zot(s) || (k.type = s), f.push(k)
								} else d.src.match(/fonts\.googleapis\.com/) ? v.push(d) : z.push(d);
								else {
									L(d);
									k = {
										src: d,
										loadTimeout: r
									};
									zot(s) || (k.type = s), f.push(k)
								}
								if (p && y) {
									var T = document.createElement("audio");
									T.setAttribute("src", (zot(l) ? "" : l) + d), document.body.appendChild(T), y = !1
								}
							}
							X.loadAssetsCount++, X.isLoading = !0;
							var A = new oo.Queue;
							if (A.isLoading = !0, A.loadAssetsCount = 0, !zot(t) && t.show && (t.zimActiveLoader = A, t.show()), 0 < z.length) {
								for (var P, B, I = [], S = 0; S < z.length; S++) P = {
									src: "url(" + ((B = z[S]).src.match(/^http/i) ? "" : l || "") + B.src + ")" + (B.type ? " format('" + B.type + "')" : ""),
									family: B.font
								}, B.weight && (P.weight = B.weight), B.style && (P.style = B.style), I.push(P);
								(M = new createjs.FontLoader({
									src: I
								}, !0)).on("complete", D), M.on("error", D), M.load(), A.loadAssetsCount++
							}
							if (0 < v.length) {
								var M;
								for (S = 0; S < v.length; S++) P = {
									src: (B = v[S]).src,
									type: "fontcss"
								}, A.loadAssetsCount++, (M = new createjs.FontLoader(P, !0)).on("complete", D), M.on("error", D), M.load()
							}
							var E = Date.now(),
								O = new createjs.Event("complete");
							if (0 < b) {
								A.loadAssetsCount++;
								var j = A.preload = X.preload = new createjs.LoadQueue(o, l, a);
								p && j.installPlugin(createjs.Sound), j.on("progress", function(e) {
									A.dispatchEvent(e), c || X.dispatchEvent(e)
								}), j.on("error", function(e) {
									A.dispatchEvent(e), c || X.dispatchEvent(e)
								}), j.on("fileload", function(e) {
									var t, o = e.item,
										n = e.item.type;
									o.id.match(m);
									if (n && "sound" == n) {
										var r = [];
										if (o.data && o.data.audioSprite)
											for (var i = 0; i < o.data.audioSprite.length; i++) r.push(o.data.audioSprite[i].id);
										else r.push(o.id);
										for (i = 0; i < r.length; i++) ! function() {
											var o = r[i];
											t = X.assets[r[i]] = {
												type: "sound",
												path: l,
												id: o,
												play: function(e) {
													e && !0 === e.loop && (e.loop = -1), e && e.loopCount && (e.loop = e.loopCount);
													var t = createjs.Sound.play(o, e);
													return t.getStage = function() {
														return R
													}, t
												}
											}
										}()
									} else "image" == n ? e.result.width && (t = X.assets[o.id] = new oo.Bitmap(e.result, e.result.width, e.result.height, o.id)) : t = X.assets[o.id] = e.result;
									var a = new createjs.Event("assetload");
									a.item = o, a.asset = t, A.dispatchEvent(a), c || X.dispatchEvent(a)
								}), X.preloadEvent = j.on("complete", function(e) {
									O = e, A.loadAssetsCount--, 0 == A.loadAssetsCount && Y()
								});
								try {
									j.loadManifest(f)
								} catch (e) {}
							}
							return A
						}
					}

					function L(e) {
						b++;
						var t = e.split("?");
						(h = t[0].match(m)) && 0 <= createjs.Sound.SUPPORTED_EXTENSIONS.indexOf(h[1]) && (p = !0)
					}

					function D() {
						A.loadAssetsCount--, 0 == A.loadAssetsCount && Y()
					}

					function Y() {
						var e = Date.now();
						n = Math.max(0, n - (e - E)), setTimeout(function() {
							X.loadAssetsCount--, X.loadAssetsCount <= 0 && (X.isLoading = !1), A.isLoading = !1, A.dispatchEvent(O), c || X.dispatchEvent(O)
						}, n)
					}
				}, this.asset = function(e) {
					if (!zot(e)) {
						var t = X.assetIDs[e];
						if (t && (e = t), X.assets[e]) return X.assets[e];
						if ("circles" == X.loadFailObj) var o = X.makeCircles(14);
						else o = X.loadFailObj;
						return o && (o.type = "EmptyAsset", o.id = e, o.play = function() {
							if (zon) return zog("zim.Frame - asset(" + e + ") not found"), {}
						}), o
					}
				}, this.setDefault = function() {
					return zimDefaultFrame = X
				}, Object.defineProperty(X, "isDefault", {
					get: function() {
						return zimDefaultFrame == X
					},
					set: function(e) {
						zog("zim.Frame(): isDefault is read only - see setDefault()")
					}
				}), Object.defineProperty(X, "stage", {
					get: function() {
						return R
					},
					set: function(e) {
						zog("zim.Frame(): stage is read only - see remakeCanvas(), perhaps")
					}
				}), Object.defineProperty(X, "width", {
					get: function() {
						return j
					},
					set: function(e) {
						zog("zim.Frame(): width is read only - see remakeCanvas(), perhaps")
					}
				}), Object.defineProperty(X, "height", {
					get: function() {
						return L
					},
					set: function(e) {
						zog("zim.Frame(): height is read only - see remakeCanvas(), perhaps")
					}
				}), Object.defineProperty(this, "color", {
					get: function() {
						return i
					},
					set: function(e) {
						zot(i = e) ? zid(w).style.backgroundColor = "default" : !zot(zid(w).style.backgroundColor = i) && C && R.setClearColor(oo.convertColor(i))
					}
				}), Object.defineProperty(this, "outerColor", {
					get: function() {
						return V
					},
					set: function(e) {
						V = e, zet("body").css({
							backgroundColor: V
						})
					}
				});
				var Q = p;
				Object.defineProperty(X, "allowDefault", {
					get: function() {
						return Q
					},
					set: function(e) {
						e ? (R.preventSelection = !1, document.body.style.overflow = "visible", X.zil && (window.removeEventListener("keydown", X.zil[0]), window.removeEventListener("wheel", X.zil[1]), window.removeEventListener("DOMMouseScroll", X.zil[2]), X.zil = null)) : (R.preventSelection = !0, document.body.style.overflow = "hidden", zot(X.zil) && (X.zil = zil())), Q = e
					}
				});
				var J = new createjs.Event("keydown");
				if (this.eventRemove = J.remove, window.addEventListener("keydown", ce), window.addEventListener("keyup", ue), window.addEventListener("wheel", de), x && window.DeviceMotionEvent && window.addEventListener("devicemotion", he), x && window.DeviceOrientationEvent) {
					var $ = 0,
						ee = 0;
					window.addEventListener("deviceorientation", ge)
				}
				this.remakeCanvas = function(e, t) {
					"full" != m && (zot(e) && (e = j), zot(t) && (t = L), zid(w) && zid(w).parentNode.removeChild(zid(w)), j = e, L = t, re(), ie())
				}, this.follow = function(r, e, t, o, i, a, l, s, c, u, d, h, g, p) {
					var n;
					if (n = zob(X.follow, arguments, "obj, boundary, damp, dampY, leftOffset, rightOffset, upOffset, downOffset, offsetDamp, offsetDampY, horizontal, vertical, borderLock, lag")) return n;
					if (X.followObj = null, X.followTicker && oo.Ticker.remove(X.followTicker), !zot(r)) return r.dirX = r.dirY = 0, (X.followObj = r).followDampX = null, r.followDampY = null, zot(e) && (e = new oo.Boundary(0, 0, X.stage.width, X.stage.height)), X.followBoundary = e, zot(t) && (t = .05), zot(o) && (o = t), zot(i) && (i = 0), zot(a) && (a = 0), zot(l) && (l = 0), zot(s) && (s = 0), zot(c) && (c = .02), zot(u) && (u = c), zot(d) && (d = !0), zot(h) && (h = !0), zot(g) && (g = !1), zot(p) && (p = !1), r.parent ? f() : r.on("added", f), r;

					function f() {
						var n = r.parent;
						X.frameBorderLock = g, d && (X.followDampX = new oo.Damp(n.x, t), X.offsetDampX = new oo.Damp(e.x + i + (e.width - i - a) / 2, c)), h && (X.followDampY = new oo.Damp(n.y, o), X.offsetDampY = new oo.Damp(e.y + l + (e.height - l - s) / 2, u)), X.followTicker = Ticker.add(function() {
							var e = X.followBoundary;
							if (d) {
								var t = e.x + i + (e.width - i - a) / 2;
								X.followOffsetX = [p ? e.x + e.width - i : t, t, p ? e.x + i : t], X.followObj && (n.x = X.followDampX.convert(X.offsetDampX.convert(X.followOffsetX[r.motionController ? r.motionController.dirX + 1 : 1]) - r.x))
							}
							if (h) {
								var o = e.y + l + (e.height - l - s) / 2;
								X.followOffsetY = [p ? e.y + e.height - s : o, o, p ? e.y + l : o], X.followObj && (n.y = X.followDampY.convert(X.offsetDampY.convert(X.followOffsetY[r.motionController ? r.motionController.dirY + 1 : 1]) - r.y))
							}
							X.frameBorderLock && (n.x > X.followBoundary.x && (n.x = X.followBoundary.x), n.y > X.followBoundary.y && (n.y = X.followBoundary.y), n.x < X.followBoundary.x + X.followBoundary.width - n.width && (n.x = X.followBoundary.x + X.followBoundary.width - n.width), n.y < X.followBoundary.y + X.followBoundary.height - n.height && (n.y = X.followBoundary.y + X.followBoundary.height - n.height))
						})
					}
				}, this.dispose = function() {
					return window.removeEventListener("resize", te), window.removeEventListener("keydown", ce), window.removeEventListener("keyup", ue), window.removeEventListener("wheel", de), window.removeEventListener("devicemotion", he), window.removeEventListener("deviceorientation", ge),
						function e(t) {
							t.removeAllEventListeners();
							if (t.numChildren)
								for (var o = t.numChildren - 1; 0 <= o; o--) e(t.getChildAt(o));
							t.parent && t.parent.removeChild(t)
						}(R), zid(w) && zid(w).parentNode.removeChild(zid(w)), !(X = R = null)
				}, this.orange = "#f58e25", this.green = "#acd241", this.pink = "#e472c4", this.blue = "#50c4b7", this.brown = "#d1a170", this.yellow = "#ebcb35", this.purple = "#993399", this.red = "#fb4758", this.silver = "#999999", this.tin = "#777777", this.grey = "#555555", this.gray = "#555555", this.lighter = "#eeeeee", this.moon = "#dddddd", this.light = "#cccccc", this.dark = "#333333", this.darker = "#111111", this.black = "#000000", this.white = "#ffffff", this.clear = "rgba(0,0,0,0)", this.faint = "rgba(0,0,0,.01)", this.makeCircles = function(e, t) {
					zot(e) && (e = 100);
					var o = [X.orange, X.green, X.pink, X.blue, X.brown, X.dark];
					if (t) {
						(r = new oo.Container({
							style: !1
						})).radius = e;
						for (var n = 0; n < o.length; n++) r.addChild(new oo.Circle(r.radius / o.length * (o.length - n), o[n], null, null, null, null, null, !1))
					} else {
						var r, i = (r = new oo.Shape({
							style: !1
						})).graphics;
						r.radius = e;
						for (n = 0; n < o.length; n++) i.f(o[n]).dc(0, 0, r.radius / o.length * (o.length - n));
						r.setBounds(-r.radius, -r.radius, 2 * r.radius, 2 * r.radius)
					}
					return r
				}, this.makeIcon = function(e, t, o) {
					var n = new oo.Container(-14, -13, 90, 120).reg(-14, -13);
					zot(e) && (e = X.light), zot(t) && (t = X.dark), !0 === o && (o = X.silver), new Rectangle(n.width, n.height, t).loc(-14, -13, n);
					var r = [
						[o || "#E474C3", "AieA0IAAgCIAmhlIEXAAIg5Bng", 41.7, 19.5],
						[o || "#50C5B7", "AiSAzIAnhlID+AAIg5Blg", 35.3, 33.2],
						[o || "#F48E25", "AiFA0IAmhnIDlAAIg5Bng", 28.9, 46.7],
						[o || "#EBCD36", "Ah4AzIAmhlIDLAAIg5Blg", 22.4, 60.5],
						[o || "#ABD140", "AhrA0IAAgFIAlhiICxAAIg5Bng", 16.1, 74.3],
						[e, "AlGHRIAnhnIH+AAIgbBngAlGlpIAnhnIJmAAIg5Bng", 32.7, 46.5]
					];
					return oo.loop(r, function(e) {
						var t = (new oo.Shape).addTo(n);
						t.graphics.f(e[0]).p(e[1]), t.setTransform(e[2], e[3])
					}), n.mouseChildren = !1, n
				}
			} else setTimeout(function() {
				X.dispatchEvent("failed")
			}, 100);

			function te() {
				if (P) {
					var e = R.getBounds();
					return j = e.width, L = e.height, void X.dispatchEvent("resize")
				}
				N = Date.now() + c, K ? q || (q = !0, _ = oo.Ticker.update, oo.Ticker.update = !1, ae(), se(), clearInterval(X.frameTime), X.frameTime = setInterval(function() {
					if (Date.now() > N) return clearInterval(X.frameTime), q = !1, void(R == zimDefaultFrame.stage && (oo.Ticker.update = _));
					ae(), se()
				}, 50)) : (ae(), se(), clearInterval(X.frameTime), X.frameTime = setInterval(function() {
					Date.now() > N ? clearInterval(X.frameTime) : (ae(), se())
				}, c < 50 ? c + 5 : 50))
			}

			function oe() {
				if (!H) {
					if (H = !0, -1 == E.indexOf(m)) {
						if (zot(zid(D = m))) return void zog("zim.Frame - scaling: HTML tag with id=" + m + " must exist");
						Y = this.tag = zid(D), m = zot(z) || zot(o) ? "tag" : "inline", 0 == w.indexOf("myCanvas") && (w = D + "Canvas")
					}
					if (X.canvasID = w, zot(z) && (z = 500), zot(o) && (o = 500), zot(n) || (X.outerColor = n), re(), ie(), I) {
						function e() {
							ae(), F = !0, ne(), se(), R && R.update()
						}
						v && setTimeout(function() {
							window.scrollTo(0, 0)
						}, 50), setTimeout(e, 100), 100 != c && setTimeout(e, c)
					} else F = !0, ne();
					var t;
					if (X.loadAssetsCount = 0, X.assets = {}, X.assetIDs = {}, zot(r)) G = !0, ne();
					else zot(t = r.constructor != {}.constructor || r.audioSprite || r.id || r.data || r.src ? X.loadAssets({
						assets: r,
						path: a,
						progress: l,
						queueOnly: !0
					}) : X.loadAssets(oo.merge(r, {
						progress: l,
						queueOnly: !0
					}))) || !t.on ? (zon && zog("ZIM Frame - load failed"), G = !0, ne()) : t.on("complete", function() {
						G = !0, ne()
					})
				}
			}

			function ne() {
				F && G && !W && (!zot(l) && l.show && l.hide(), X.dispatchEvent("ready"), W = !0, se())
			}

			function re() {
				var e = X.canvas = document.createElement("canvas");
				e.setAttribute("id", w), e.setAttribute("tabindex", 0);
				var t = oo.windowWidth(),
					o = oo.windowHeight(),
					n = window.devicePixelRatio || 1;
				"full" == m || "tag" == m ? k ? (X.scale = n, e.setAttribute("width", t * X.scale), e.setAttribute("height", o * X.scale), "full" == m && (e.style.width = t + "px", e.style.height = o + "px")) : (e.setAttribute("width", t), e.setAttribute("height", o)) : (e.setAttribute("width", j), e.setAttribute("height", L));
				var r = zid(w + "Alternative");
				r && e.appendChild(r), "tag" == m || "inline" == m ? Y.appendChild(e) : document.body.appendChild(e), zot(i) || (e.style.backgroundColor = i), "full" != m && "fit" != m && "outside" != m || (e.style.position = "absolute", p || (document.body.style.overflow = "hidden"))
			}

			function ie() {
				ae(), -1 == E.indexOf(m) || p || (X.zil = zil()), X.mouseEvent && R && R.off("stagemousemove", X.mouseEvent), (R = C ? new oo.StageGL(w, d) : new oo.Stage(w)).mouseMoveOutside = T, !zot(i) && C && R.setClearColor(oo.convertColor(i)), R.setBounds(0, 0, j, L), R.width = j, R.height = L, k && ae(), e && R.enableMouseOver(s), t && createjs.Touch.enable(R, !1, p), p && (R.preventSelection = !1), h && (R.nextStage = h.stage), g && (R.nextStage = g), A && (X.mouseX = 0, X.mouseY = 0, X.mouseEvent = R.on("stagemousemove", function(e) {
					X.mouseX = e.stageX / X.stage.scaleX, X.mouseY = e.stageY / X.stage.scaleY
				}))
			}

			function ae() {
				if (X) {
					var e, t, o = zid(w),
						n = oo.windowWidth(),
						r = oo.windowHeight();
					if ((S = X.orientation = r < n ? "horizontal" : "vertical") != M && (M = S, X.dispatchEvent("orientation")), I && v && setTimeout(function() {
							window.scrollTo(0, 0)
						}, 100), o) {
						if ("fit" == m) X.scale = j / L <= n / r ? r / L : n / j;
						else if ("outside" == m) X.scale = j / L <= n / r ? n / j : r / L;
						else {
							if ("full" == m) {
								if (o.style.left = o.style.top = "0px", o.width = j = n, o.height = L = r, R) {
									if (R.setBounds(0, 0, j, L), k) {
										var i = window.devicePixelRatio || 1;
										o.width = n * i, o.height = r * i, o.style.width = n + "px", o.style.height = r + "px", X.scale = i, R && (R.scaleX = R.scaleY = X.scale, R.tickOnUpdate = !1, R.update(), R.tickOnUpdate = !0)
									}
									R.width = j, R.height = L, C && R.updateViewport(j / R.scaleX, L / R.scaleY)
								}
								return oo.scrollX(0), oo.scrollY(0), void le()
							}
							if ("tag" == m) {
								j = "" == Y.style.width ? Y.getAttribute("width") || Y.offsetWidth : Y.style.width, L = "" == Y.style.height ? Y.getAttribute("height") || Y.offsetHeight : Y.style.height, k ? (o.width = j * X.scale, o.height = L * X.scale, o.style.width = j + "px", o.style.height = L + "px", R && (R.scaleX = R.scaleY = X.scale, R.tickOnUpdate = !1, R.update(), R.tickOnUpdate = !0)) : (o.width = j, o.height = L), R && (R.setBounds(0, 0, j, L), R.width = j, R.height = L, C && R.updateViewport(j / R.scaleX, L / R.scaleY)), Y.style.overflow = "hidden", o.style.left = o.style.top = "0px";
								var a = o.getBoundingClientRect();
								return X.x = a.x + oo.scrollX(), X.y = a.y + oo.scrollY(), void le()
							}
							if ("inline" == m) {
								if (k) {
									if (document.styleSheets[0])
										for (var l = document.styleSheets[0].rules || document.styleSheets[0].cssRules, s = 0; s < l.length; s++) {
											var c = l[s];
											if (c.selectorText == "#" + w) {
												var u = c.style.getPropertyValue("width");
												if (u) {
													var d = zum(o.style.width),
														h = zum(o.style.height);
													o.style.width = u
												}
											}
										}
									var g = window.getComputedStyle(o),
										p = zum(g.getPropertyValue("width"));
									d && (o.style.height = h * p / d + "px", g = window.getComputedStyle(o));
									var f = zum(g.getPropertyValue("height"));
									i = window.devicePixelRatio || 1;
									X.scale = p / z * i, o.width = j * X.scale, o.height = L * X.scale, o.style.width = p + "px", o.style.height = f + "px", R && (R.scaleX = R.scaleY = X.scale, R.tickOnUpdate = !1, R.update(), R.tickOnUpdate = !0)
								}
								R && (R.setBounds(0, 0, j, L), R.width = j, R.height = L, C && R.updateViewport(j / R.scaleX, L / R.scaleY)), o.style.left = o.style.top = "0px";
								a = o.getBoundingClientRect();
								return X.x = a.x + oo.scrollX(), X.y = a.y + oo.scrollY(), void le()
							}
						}
						if (t = L * X.scale, e = j * X.scale, k) {
							i = window.devicePixelRatio || 1;
							X.scale *= i, o.width = j * X.scale, o.height = L * X.scale, o.style.width = j * X.scale / i + "px", o.style.height = L * X.scale / i + "px", R && (R.scaleX = R.scaleY = X.scale, R.tickOnUpdate = !1, R.update(), R.tickOnUpdate = !0)
						} else o.style.width = e + "px", o.style.height = t + "px";
						X.x = "left" == b ? 0 : "right" == b ? n - e : (n - e) / 2, X.y = "top" == y ? 0 : "bottom" == y ? r - t : (r - t) / 2, o.style.left = X.x + "px", o.style.top = X.y + "px", oo.scrollX(0), oo.scrollY(0), le()
					}
				}
			}

			function le() {
				if ("outside" == m) {
					var e = (zum(X.canvas.style.width) - oo.windowWidth()) / 2;
					"left" == b ? (X.visibleLeft = 0, X.visibleRight = oo.windowWidth() / (oo.windowWidth() + 2 * e) * j) : "right" == b ? (X.visibleLeft = 2 * e / (oo.windowWidth() + 2 * e) * j, X.visibleRight = j) : (X.visibleLeft = e / (oo.windowWidth() + 2 * e) * j, X.visibleRight = (oo.windowWidth() + e) / (oo.windowWidth() + 2 * e) * j);
					var t = (zum(X.canvas.style.height) - oo.windowHeight()) / 2;
					"top" == y ? (X.visibleTop = 0, X.visibleBottom = oo.windowHeight() / (oo.windowHeight() + 2 * t) * L) : "bottom" == y ? (X.visibleTop = 2 * t / (oo.windowHeight() + 2 * t) * L, X.visibleBottom = L) : (X.visibleTop = t / (oo.windowHeight() + 2 * t) * L, X.visibleBottom = (oo.windowHeight() + t) / (oo.windowHeight() + 2 * t) * L)
				} else X.visibleLeft = X.visibleTop = 0, X.visibleRight = j, X.visibleBottom = L
			}

			function se() {
				W && X && (X.dispatchEvent("resize"), oo.OPTIMIZE || !zns && OPTIMIZE || !R || "full" != m && "tag" != m || R.update())
			}

			function ce(e) {
				e.remove = X.eventRemove, X.altKey = e.altKey, X.ctrlKey = e.ctrlKey, X.metaKey = e.metaKey, X.shiftKey = e.shiftKey, X.dispatchEvent(e)
			}

			function ue(e) {
				X.altKey = e.altKey, X.ctrlKey = e.ctrlKey, X.metaKey = e.metaKey, X.shiftKey = e.shiftKey, e.remove = X.eventRemove, X.dispatchEvent(e)
			}

			function de(e) {
				X.dispatchEvent(e)
			}

			function he(e) {
				e.remove = X.eventRemove, X.dispatchEvent(e)
			}

			function ge(e) {
				e.remove = X.eventRemove;
				var t = 360 - e.alpha;
				135 < Math.abs(t - $) && Math.abs(t - $) < 225 && (ee = 0 == ee ? 180 : 0), $ = t, e.rotation = {
					x: e.beta,
					y: e.gamma,
					z: (t + ee) % 360
				}, X.dispatchEvent(e)
			}
		}, oo.extend(oo.Frame, createjs.EventDispatcher, null, "cjsEventDispatcher", !1), oo.Queue = function() {
			this.cjsEventDispatcher_constructor(), this.isLoading = !0
		}, oo.extend(oo.Queue, createjs.EventDispatcher, null, "cjsEventDispatcher"), oo.LEFT = "left", oo.RIGHT = "right", oo.CENTER = "center", oo.MIDDLE = "middle", oo.TOP = "top", oo.BOTTOM = "bottom", oo.HORIZONTAL = "horizontal", oo.VERTICAL = "vertical", oo.BOTH = "both", oo.orange = "#f58e25", oo.green = "#acd241", oo.pink = "#e472c4", oo.blue = "#50c4b7", oo.brown = "#d1a170", oo.yellow = "#ebcb35", oo.purple = "#993399", oo.red = "#fb4758", oo.black = "#000000", oo.darker = "#111111", oo.dark = "#333333", oo.grey = "#555555", oo.gray = "#555555", oo.tin = "#777777", oo.silver = "#999999", oo.light = "#cccccc", oo.moon = "#dddddd", oo.lighter = "#eeeeee", oo.white = "#ffffff", oo.faint = "rgba(0,0,0,.01)";
		oo.clear = "rgba(0,0,0,0)";
		return oo.distillery = [], oo.distill = function() {
			!window.zns && oo && (oo.DISTILL || window.DISTILL) && oo.distillery.push("83.3", "83.35"), zog("zim.distill() - go to https://zimjs.com/distill and enter the following:"), zog(0 < oo.distillery.length ? oo.distillery.join(" ") : "must set zim.DISTILL = true;")
		}, oo.parseAudioSprite = function(e, t) {
			if (z_d("83.25"), !(zot(e) || zot(e.resources) || zot(e.spritemap))) {
				var o, n = e.resources[0],
					r = e.spritemap,
					i = [],
					a = {
						src: n,
						data: {}
					};
				for (l in r) o = r[l], i.push({
					id: l,
					startTime: Math.round(1e3 * o.start),
					duration: Math.round(1e3 * (o.end - o.start))
				});
				return a.data.audioSprite = i, t && zog(JSON.stringify(a)), a
			}
		}, oo.previewAudioSprite = function(e, t, o) {
			if (z_d("83.26"), !zot(e)) {
				if (zot(t) && (t = 3), zot(o)) {
					if (zot(zimDefaultFrame)) return;
					stage = (o = zimDefaultFrame).stage
				}
				var n = e,
					r = [],
					i = [];
				if (n.constructor == {}.constructor) {
					n.resources && (n = oo.parseAudioSprite(n)), n.audioSprite ? loop(n.audioSprite, function(e) {
						r.push(e[0].substr(0, t)), i.push(e[0])
					}) : n.data && n.data.audioSprite && loop(n.data.audioSprite, function(e) {
						r.push(e.id.substr(0, t)), i.push(e.id)
					});
					var a = new oo.Tabs({
						tabs: r,
						width: stageW,
						currentEnabled: !0
					}).addTo(stage);
					return a.on("change", function() {
						o.asset(i[a.selectedIndex]).play()
					}), a
				}
			}
		}, oo.svgToBitmap = function(e, t) {
			if (z_d("83.27"), !zot(e.draggable)) {
				var o = new DOMParser;
				e = (e = e.innerHTML ? o.parseFromString(e.innerHTML, "text/xml") : e).getElementsByTagName("svg") ? e.getElementsByTagName("svg")[0] : null
			}
			if (XMLSerializer || !zon) {
				var n = "string" == typeof e ? e : (new XMLSerializer).serializeToString(e);
				n.match(/xmlns/i) || (n = n.replace(/svg /i, "svg  xmlns='http://www.w3.org/2000/svg' "));
				var r = self.URL || self.webkitURL || self,
					i = new Image;
				i.onload = function() {
					var e = new oo.Bitmap(i);
					t(e)
				}, i.src = r.createObjectURL(new document.Bloob([n], {
					type: "image/svg+xml;charset=utf-8"
				}))
			} else zog("ZIM svgToBitmap() - sorry, not supported in Browser")
		}, oo
	}(zim || {});

function z_d(e) {
	zim && (zim.DISTILL || window.DISTILL) && zim.distillery.push(e)
}

function zimify(o, e) {
	z_d("83.3");
	var t = {
		drag: function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f) {
			return isDUO(arguments) ? (e.obj = this, zim.drag(e)) : zim.drag(this, e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f)
		},
		noDrag: function() {
			return zim.noDrag(this)
		},
		dragBoundary: function(e) {
			return zim.dragBoundary(this, e)
		},
		dragRect: function(e) {
			return zim.dragBoundary(this, e)
		},
		transform: function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A) {
			return isDUO(arguments) ? (e.obj = this, zim.transform(e)) : zim.transform(this, e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A)
		},
		setSwipe: function(e) {
			return zim.setSwipe(this, e)
		},
		gesture: function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p) {
			return isDUO(arguments) ? (e.obj = this, zim.gesture(e)) : zim.gesture(this, e, t, o, n, r, i, a, l, s, c, u, d, h, g, p)
		},
		noGesture: function(e, t, o) {
			if (isDUO(arguments)) return e.obj = this, zim.noGesture(e);
			zim.noGesture(this, e, t, o)
		},
		gestureBoundary: function(e, t) {
			return zim.gestureBoundary(this, e, t)
		},
		gestureRect: function(e, t) {
			return zim.gestureBoundary(this, e, t)
		},
		addPhysics: function(e, t, o, n, r, i, a, l, s, c, u) {
			return isDUO(arguments) ? (e.obj = this, zim.addPhysics(e)) : zim.addPhysics(this, e, t, o, n, r, i, a, l, s, c, u)
		},
		removePhysics: function() {
			return zim.removePhysics(this)
		},
		hitTestPoint: function(e, t, o) {
			return zim.hitTestPoint(this, e, t, o)
		},
		hitTestReg: function(e, t) {
			return zim.hitTestReg(this, e, t)
		},
		hitTestRect: function(e, t, o) {
			return zim.hitTestRect(this, e, t, o)
		},
		hitTestCircle: function(e, t, o) {
			return zim.hitTestCircle(this, e, t, o)
		},
		hitTestCircles: function(e, t) {
			return zim.hitTestCircles(this, e, t)
		},
		hitTestBounds: function(e, t, o) {
			return zim.hitTestBounds(this, e, t, o)
		},
		boundsToGlobal: function(e, t, o) {
			return zim.boundsToGlobal(this, e, t, o)
		},
		resetBounds: function(e, t, o, n) {
			return zim.resetBounds(this, e, t, o, n)
		},
		hitTestPath: function(e, t, o) {
			return zim.hitTestPath(this, e, t, o)
		},
		hitTestGrid: function(e, t, o, n, r, i, a, l, s, c, u, d) {
			return zim.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, u, d)
		},
		animate: function(e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F) {
			return e && (e.props || e.obj) && isDUO(arguments) ? (e.target = this, zim.animate(e)) : zim.animate(this, e, t, o, n, r, i, a, l, s, c, u, d, h, g, p, f, m, z, v, b, y, w, C, x, k, T, A, P, B, I, S, M, E, O, j, L, D, Y, X, R, _, W, F)
		},
		pauseAnimate: function() {
			return this
		},
		stopAnimate: function() {
			return this
		},
		wiggle: function(e, t, o, n, r, i, a, l, s, c, u, d, h) {
			return isDUO(arguments) ? (e.target = this, zim.wiggle(e)) : zim.wiggle(this, e, t, o, n, r, i, a, l, s, c, u, d, h)
		},
		loop: function(e, t, o, n, r) {
			return zim.loop(this, e, t, o, n, r)
		},
		copyMatrix: function(e) {
			return zim.copyMatrix(this, e)
		},
		duplicate: function() {
			return zim.duplicate(this)
		},
		cur: function(e) {
			return zim.cur(this, e)
		},
		sha: function(e, t, o, n) {
			return zim.sha(this, e, t, o, n)
		},
		pos: function(e, t, o, n, r, i, a, l, s, c) {
			return isDUO(arguments) ? (e.obj = this, zim.pos(e)) : zim.pos(this, e, t, o, n, r, i, a, l, s, c)
		},
		loc: function(e, t, o, n, r, i, a) {
			return isDUO(arguments) ? (e.obj = this, zim.loc(e)) : zim.loc(this, e, t, o, n, r, i, a)
		},
		mov: function(e, t) {
			return isDUO(arguments) ? (e.obj = this, zim.mov(e)) : zim.mov(this, e, t)
		},
		top: function() {
			return zim.top(this)
		},
		bot: function() {
			return zim.bot(this)
		},
		ord: function(e) {
			return zim.ord(this, e)
		},
		dep: function(e) {
			return zim.dep(this, e)
		},
		alp: function(e) {
			return zim.alp(this, e)
		},
		ble: function(e) {
			return zim.ble(this, e)
		},
		hov: function(e, t) {
			return zim.hov(this, e, t)
		},
		rot: function(e, t, o) {
			return zim.rot(this, e, t, o)
		},
		siz: function(e, t, o) {
			return zim.siz(this, e, t, o)
		},
		ske: function(e, t) {
			return zim.ske(this, e, t)
		},
		reg: function(e, t, o) {
			return zim.reg(this, e, t, o)
		},
		sca: function(e, t) {
			return zim.sca(this, e, t)
		},
		scaleTo: function(e, t, o, n, r) {
			return isDUO(arguments) ? (e.obj = this, zim.scaleTo(e)) : zim.scaleTo(this, e, t, o, n, r)
		},
		fit: function(e, t, o, n, r) {
			return isDUO(arguments) ? (e.obj = this, zim.fit(e)) : zim.fit(this, e, t, o, n, r)
		},
		outline: function(e, t) {
			return isDUO(arguments) ? (e.obj = this, zim.outline(e)) : zim.outline(this, e, t)
		},
		addTo: function(e, t, o) {
			return isDUO(arguments) ? (e.obj = this, zim.addTo(e)) : zim.addTo(this, e, t, o)
		},
		removeFrom: function(e) {
			return zim.removeFrom(this, e)
		},
		added: function(e, t, o) {
			return zim.added(this, e, t, o)
		},
		tap: function(e, t, o, n) {
			return zim.tap(this, e, t, o, n)
		},
		noTap: function() {
			return zim.noTap(this)
		},
		hold: function(e, t, o, n) {
			return zim.hold(this, e, t, o, n)
		},
		noHold: function() {
			return zim.noHold(this)
		},
		change: function(e, t) {
			return zim.change(this, e, t)
		},
		noChange: function() {
			return zim.noChange(this)
		},
		centerReg: function(e, t, o) {
			return isDUO(arguments) ? (e.obj = this, zim.centerReg(e)) : zim.centerReg(this, e, t, o)
		},
		center: function(e, t, o) {
			return isDUO(arguments) ? (e.obj = this, zim.center(e)) : zim.center(this, e, t, o)
		},
		place: function(e) {
			return zim.place(this, e)
		},
		placeReg: function(e) {
			return zim.placeReg(this, e)
		},
		expand: function(e, t) {
			return zim.expand(this, e, t)
		},
		setMask: function(e, t) {
			return zim.setMask(this, e, t)
		},
		cloneProps: function(e) {
			return e.type = this.type, e.group = this.group, e.style = this.style, e.alpha = this.alpha, e.rotation = this.rotation, e.mouseEnabled = this.mouseEnabled, e.tickEnabled = this.tickEnabled, e.x = this.x, e.y = this.y, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.skewX = this.skewX, e.skewY = this.skewY, e.name = this.name, e.regX = this.regX * e.width / this.width, e.regY = this.regY * e.height / this.height, e.visible = this.visible, e.shadow = this.shadow, this.type && "Shape" != this.type || zim.copyMatrix(e, this), e.compositeOperation = this.compositeOperation, e.snapToPixel = this.snapToPixel, e.filters = null == this.filters ? null : this.filters.slice(0), e.mask = this.mask, e.hitArea = this.hitArea, this.type && "Shape" != this.type || !this._bounds || e.setBounds(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height), e
		},
		cloneChildren: function(e) {
			e.children.length && e.removeAllChildren();
			for (var t = e.children, o = 0, n = this.children.length; o < n; o++) {
				var r = this.children[o].clone();
				r.parent = e, t.push(r)
			}
			return e
		}
	};
	if (!zot(e)) {
		e = [];
		for (var n in t) e.push(n);
		return e
	}
	for (var r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
	return zim && (o.cjsLocalToGlobal = o.localToGlobal, o.cjsGlobalToLocal = o.globalToLocal, o.cjsLocalToLocal = o.localToLocal, o.localToGlobal = function(e, t) {
		return zim.localToGlobal(e, t, o, o.cjsLocalToGlobal)
	}, o.globalToLocal = function(e, t) {
		return zim.globalToLocal(e, t, o, o.cjsGlobalToLocal)
	}, o.localToLocal = function(e, t, o) {
		return zim.localToLocal(e, t, o, clip)
	}), Object.defineProperty(o, "width", {
		enumerable: !0,
		get: function() {
			var e = this.getBounds();
			return zot(e) ? null : Math.abs(e.width * this.scaleX)
		},
		set: function(e) {
			var t = this.getBounds();
			if (zot(t) || 0 == t.width) zon && zog("width needs bounds set with setBounds()");
			else {
				var o = e / t.width;
				this.scaleX = this.scaleY = o
			}
		}
	}), Object.defineProperty(o, "height", {
		enumerable: !0,
		get: function() {
			var e = this.getBounds();
			return zot(e) ? null : Math.abs(e.height * this.scaleY)
		},
		set: function(e) {
			var t = this.getBounds();
			if (zot(t) || 0 == t.height) zon && zog("height needs bounds set with setBounds()");
			else {
				var o = e / t.height;
				this.scaleX = this.scaleY = o
			}
		}
	}), Object.defineProperty(o, "widthOnly", {
		enumerable: !0,
		get: function() {
			var e = this.getBounds();
			return zot(e) ? null : Math.abs(e.width * this.scaleX)
		},
		set: function(e) {
			var t = this.getBounds();
			if (zot(t) || 0 == t.width) zog("widthOnly needs bounds set with setBounds()");
			else {
				var o = e / t.width;
				this.scaleX = o
			}
		}
	}), Object.defineProperty(o, "heightOnly", {
		enumerable: !0,
		get: function() {
			var e = this.getBounds();
			return zot(e) ? null : Math.abs(e.height * this.scaleY)
		},
		set: function(e) {
			var t = this.getBounds();
			if (zot(t) || 0 == t.height) zog("heightOnly needs bounds set with setBounds()");
			else {
				var o = e / t.height;
				this.scaleY = o
			}
		}
	}), Object.defineProperty(o, "depth", {
		enumerable: !0,
		get: function() {
			return this._depth
		},
		set: function(e) {
			if (this._depth = e, !zot(this.vrChannel)) {
				var t = this.vrParallaxDistance ? e * this.vrParallax * this.vrParallaxDistance : 0;
				"left" == this.vrChannel ? this.x = this.vrStartX + e + t : "right" == this.vrChannel && (this.x = this.vrStartX - e + t)
			}
		}
	}), Object.defineProperty(o, "blendMode", {
		enumerable: !0,
		get: function() {
			return this.compositeOperation
		},
		set: function(e) {
			this.compositeOperation = e
		}
	}), o
}

function zimplify(e) {
	z_d("83.35"), document.window = Window, document.window = window, document.Bloob = Blob, ignore = "ignore", zot(e) && (e = []), Array.isArray(e) || (e = [e]);
	var t = zimify(null, !0),
		o = ["loop", "stopAnimate", "pauseAnimate", "animate", "wiggle"];
	for (var n in zim)(-1 == t.indexOf(n) || 0 <= o.indexOf(n)) && -1 == e.indexOf(n) && (window[n] = zim[n]);
	window.KEYFOCUS = zim.KEYFOCUS, window.OPTIMIZE = zim.OPTIMIZE, window.ACTIONEVENT = zim.ACTIONEVENT, window.STYLE = zim.STYLE
}
var ZIMONON = !1;
zim = function(m) {
	return m.ZIMON = {
		stringify: function(i, a) {
			if (z_d("83.39"), !zot(i)) {
				if (ZIMONON) return function o(n, e, t) {
					if (zot(n)) return;
					if (Array.isArray(n)) m.loop(n, function(e, t) {
						o(e, n, t)
					});
					else if (n.constructor == {}.constructor) m.loop(n, function(e, t) {
						o(t, n, e)
					});
					else if (n.type) {
						var r = {
							zimon: n.type
						};
						n.arguments && (r.args = Array.prototype.slice.call(n.arguments), o(r.args)), "series" == n.type && (r.args = Array.prototype.slice.call(n.array), o(r.args)), a && a[n.type] && a[n.type].props && (r.props = [], m.loop(a[n.type].props, function(e) {
							r.props.push(n[e])
						})), e ? e[t] = r : i = r
					} else "string" != typeof n && "number" != typeof n && "boolean" != typeof n && null !== n && zog("ZIMON - potentially bad JSON value" + n)
				}(i = m.copy(i)), JSON.stringify({
					obj: i,
					key: a,
					zimon: 1,
					info: "https://zimjs.com/zimon/"
				});
				zon && zog("ZIMON - set ZIMONON=true before using ZIMON.stringify()")
			}
		},
		parse: function(e, u) {
			if (z_d("83.39"), !zot(e)) {
				var t = JSON.parse(e),
					d = t.obj;
				u = t.key;
				return function o(n, e, t) {
					if (zot(n)) return;
					if (Array.isArray(n)) m.loop(n, function(e, t) {
						o(e, n, t)
					});
					else if (zot(n.zimon) && n.constructor == {}.constructor) m.loop(n, function(e, t) {
						o(t, n, e)
					});
					else if (n.zimon) {
						var r = n.zimon;

						function i(t) {
							try {
								return Function("return(" + t + ")")()
							} catch (e) {
								return zon && zog("ZIMON: bad function scope or name: " + t), null
							}
						}
						var a = "";
						u && (u[r] && u[r].scope ? a = u[r].scope + "." : u.scope && (a = u.scope + "."));
						var l = i(a + r),
							s = n.args;
						if (zot(s) && (s = []), o(s), "series" == n.type) var c = m.series(s);
						else var c = l ? new(l.bind.apply(l, [null].concat(Array.prototype.slice.call(s)))) : null;
						e ? e[t] = c : d = c, u && u[r] && u[r].props && c && m.loop(u[r].props, function(e, t) {
							zot(n.props[t]) || (c[e] = n.props[t])
						})
					}
				}(d), d
			}
		}
	}, m.Wonder = function(n, r, i, a, e) {
		var t;
		if (t = zob(m.Wonder, arguments, "wid, client, app, notes, server", this)) return t;
		if (z_d("82"), zot(n)) zog("zim.Wonder() - please provide Wonder ID (see https://zimjs.com/wonder/)");
		else {
			zot(e) && (e = "http://54.237.229.197:3001/wonder");
			var o = this;
			zot(m.wonderSession) && (m.wonderSession = "W" + m.rand(1e5, 999999));
			var l, s = [],
				c = setInterval(p, 1e3),
				u = 0,
				d = setInterval(function() {
					28 < u && (s.push({
						id: n,
						c: r,
						a: i,
						n: a,
						k: l,
						t: "e",
						v: "frequency max - terminated",
						s: m.wonderSession
					}), zog("zim.Wonder() - frequency max - terminated"), o.dispose()), u = 0
				}, 3e4);
			this.countsOff = {}, this.timesOff = {}, this.ordersOff = {}, this.count = function(e) {
				f(e, "count") && (l = e, s.push({
					id: n,
					c: r,
					a: i,
					n: a,
					k: e,
					t: "c",
					v: 1,
					s: m.wonderSession
				}))
			};
			var h = {};
			this.timeStart = function(e) {
				f(e, "time") && (o.timeEnd(e), h[l = e] = (new Date).getTime())
			};
			var g = {};
			this.timePause = function(e) {
				f(e, "time") && (g[e] || (g[e] = (new Date).getTime()))
			}, this.timeUnpause = function(e) {
				if (f(e, "time") && g[e]) {
					var t = (new Date).getTime() - g[e];
					h[e] && (h[e] += t), delete g[e]
				}
			}, this.timeEnd = function(e) {
				if (f(e, "time") && h[e]) {
					var t = g[e] ? g[e] : (new Date).getTime(),
						o = Math.round((t - h[e]) / 1e3);
					delete g[e], delete h[e], s.push({
						id: n,
						c: r,
						a: i,
						n: a,
						k: e,
						t: "t",
						v: o,
						s: m.wonderSession
					})
				}
			}, this.order = function(e, t) {
				f(e, "order") && (l = e, zot(t) ? zog("zim.Wonder order() - please provide an item") : s.push({
					id: n,
					c: r,
					a: i,
					n: a,
					k: e,
					t: "o",
					v: t,
					s: m.wonderSession
				}))
			}, this.countOff = function(e) {
				o.countsOff[e] = 1
			}, this.countOn = function(e) {
				delete o.countOff[e]
			}, this.timeOff = function(e) {
				o.timesOff[e] = 1
			}, this.timeOn = function(e) {
				delete o.timesOff[e]
			}, this.orderOff = function(e) {
				o.ordersOff[e] = 1
			}, this.orderOn = function(e) {
				delete o.ordersOff[e]
			}, this.dispose = function() {
				return p(), clearInterval(c), clearInterval(d), !0
			}
		}

		function p() {
			0 < s.length && (m.async(e + "?wonder=" + JSON.stringify(s)), s = [], u++)
		}

		function f(e, t) {
			return zot(e) ? (zog("zim.Wonder " + t + " - please provide a keyword"), !1) : !o[t + "sOff"][e]
		}
	}, m
}(zim || {});
window.zns || zimplify();
