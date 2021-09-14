! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports._vantaEffect = e() : t._vantaEffect = e() }("undefined" != typeof self ? self : this, function() {
    return function(t) {
        var e = {};

        function i(s) { if (e[s]) return e[s].exports; var o = e[s] = { i: s, l: !1, exports: {} }; return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports }
        return i.m = t, i.c = e, i.d = function(t, e, s) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(s, o, function(e) { return t[e] }.bind(null, o));
            return s
        }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 11)
    }({
        0: function(t, e, i) {
            "use strict";

            function s(t, e) { for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }

            function o() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600 }
            i.d(e, "c", function() { return s }), i.d(e, "d", function() { return o }), i.d(e, "h", function() { return n }), i.d(e, "g", function() { return r }), i.d(e, "f", function() { return h }), i.d(e, "e", function() { return a }), i.d(e, "a", function() { return c }), i.d(e, "b", function() { return l }), Number.prototype.clamp = function(t, e) { return Math.min(Math.max(this, t), e) };
            const n = t => t[Math.floor(Math.random() * t.length)];

            function r(t, e) { return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t) }

            function h(t, e) { return null == t && (t = 0), null == e && (e = 1), Math.floor(t + Math.random() * (e - t + 1)) }
            const a = t => document.querySelector(t),
                c = t => "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t,
                l = (t, e = 1) => {
                    const i = c(t),
                        s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
                        o = s ? { r: parseInt(s[1], 16), g: parseInt(s[2], 16), b: parseInt(s[3], 16) } : null;
                    return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")"
                }
        },
        1: function(t, e, i) {
            "use strict";
            i.d(e, "a", function() { return r });
            var s = i(0);
            const o = "object" == typeof window,
                n = o && window.THREE || {};
            o && !window.VANTA && (window.VANTA = {});
            const r = o && window.VANTA || {};
            r.register = (t, e) => r[t] = t => new e(t), r.version = "0.5.3";
            const h = function() { return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments) };
            r.VantaBase = class {
                constructor(t = {}) {
                    if (!o) return !1;
                    if (r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(s.c)({}, this.defaultOptions), (t instanceof HTMLElement || "string" == typeof t) && (t = { el: t }), Object(s.c)(this.options, t), this.el = this.options.el, null == this.el) h('Instance needs "el" param!');
                    else if (!(this.options.el instanceof HTMLElement)) { const t = this.el; if (this.el = Object(s.e)(t), !this.el) return void h("Cannot find element", t) }
                    let e, i;
                    for (e = 0; e < this.el.children.length; e++) i = this.el.children[e], "static" === getComputedStyle(i).position && (i.style.position = "relative"), "auto" === getComputedStyle(i).zIndex && (i.style.zIndex = 1);
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), this.initThree(), this.setSize();
                    try { this.init() } catch (t) { return h("Init error", t), this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(s.a)(this.options.backgroundColor))) }
                    window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), window.addEventListener("scroll", this.windowMouseMoveWrapper), window.addEventListener("mousemove", this.windowMouseMoveWrapper), window.addEventListener("touchstart", this.windowTouchWrapper), window.addEventListener("touchmove", this.windowTouchWrapper)
                }
                setOptions(t = {}) { Object(s.c)(this.options, t) }
                applyCanvasStyles(t, e = {}) { Object(s.c)(t.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object(s.c)(t.style, e), t.classList.add("vanta-canvas") }
                initThree() { n.WebGLRenderer ? (this.renderer = new n.WebGLRenderer({ alpha: !0, antialias: !0 }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new n.Scene) : console.warn("[VANTA] No THREE defined on window") }
                windowMouseMoveWrapper(t) {
                    const e = this.renderer.domElement.getBoundingClientRect(),
                        i = t.clientX - e.left,
                        s = t.clientY - e.top;
                    i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s))
                }
                windowTouchWrapper(t) {
                    if (1 === t.touches.length) {
                        const e = this.renderer.domElement.getBoundingClientRect(),
                            i = t.touches[0].clientX - e.left,
                            s = t.touches[0].clientY - e.top;
                        i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s))
                    }
                }
                triggerMouseMove(t, e) {
                    this.uniforms && (this.uniforms.u_mouse.value.x = t / this.scale, this.uniforms.u_mouse.value.y = e / this.scale);
                    const i = t / this.width,
                        s = e / this.height;
                    "function" == typeof this.onMouseMove && this.onMouseMove(i, s)
                }
                setSize() { this.scale || (this.scale = 1), Object(s.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight }
                resize() { this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize() }
                isOnscreen() {
                    const t = this.el.offsetHeight,
                        e = this.el.getBoundingClientRect(),
                        i = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                        s = e.top + i;
                    return s - window.innerHeight <= i && i <= s + t
                }
                animationLoop() { return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnscreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop) }
                restart() {
                    if (this.scene)
                        for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                    "function" == typeof this.onRestart && this.onRestart(), this.init()
                }
                init() { "function" == typeof this.onInit && this.onInit() }
                destroy() { "function" == typeof this.onDestroy && this.onDestroy(), window.removeEventListener("touchstart", this.windowTouchWrapper), window.removeEventListener("touchmove", this.windowTouchWrapper), window.removeEventListener("scroll", this.windowMouseMoveWrapper), window.removeEventListener("mousemove", this.windowMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null) }
            }, e.b = r.VantaBase
        },
        11: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(1),
                o = i(0);
            const n = "object" == typeof window && window.THREE || {};
            n.Color && n.Color.prototype && (n.Color.prototype.getBrightness = function() { return .299 * this.r + .587 * this.g + .114 * this.b });
            class r extends s.b {
                static initClass() { this.prototype.defaultOptions = { color: 16727937, backgroundColor: 2299196, points: 10, maxDistance: 20, spacing: 15, showDots: !0 } }
                genPoint(t, e, i) {
                    let s;
                    if (this.points || (this.points = []), this.options.showDots) {
                        const t = new n.SphereGeometry(.25, 12, 12),
                            e = new n.MeshLambertMaterial({ color: this.options.color });
                        s = new n.Mesh(t, e)
                    } else s = new n.Object3D;
                    return this.cont.add(s), s.ox = t, s.oy = e, s.oz = i, s.position.set(t, e, i), s.r = Object(o.g)(-2, 2), this.points.push(s)
                }
                onInit() {
                    this.cont = new n.Group, this.cont.position.set(0, 0, 0), this.scene.add(this.cont);
                    let t = this.options.points,
                        { spacing: e } = this.options;
                    Object(o.d)() && (t = ~~(.75 * t), e = ~~(.65 * e));
                    const i = t * t * 2;
                    this.linePositions = new Float32Array(i * i * 3), this.lineColors = new Float32Array(i * i * 3);
                    const s = new n.Color(this.options.color).getBrightness(),
                        r = new n.Color(this.options.backgroundColor).getBrightness();
                    this.blending = s > r ? "additive" : "subtractive";
                    const h = new n.BufferGeometry;
                    h.addAttribute("position", new n.BufferAttribute(this.linePositions, 3).setDynamic(!0)), h.addAttribute("color", new n.BufferAttribute(this.lineColors, 3).setDynamic(!0)), h.computeBoundingSphere(), h.setDrawRange(0, 0);
                    const a = new n.LineBasicMaterial({ vertexColors: n.VertexColors, blending: "additive" === this.blending ? n.AdditiveBlending : null, transparent: !0 });
                    this.linesMesh = new n.LineSegments(h, a), this.cont.add(this.linesMesh);
                    for (let i = 0; i <= t; i++)
                        for (let s = 0; s <= t; s++) {
                            const n = Object(o.f)(-3, 3),
                                r = (i - t / 2) * e + Object(o.f)(-5, 5);
                            let h = (s - t / 2) * e + Object(o.f)(-5, 5);
                            i % 2 && (h += .5 * e), this.genPoint(r, n - Object(o.f)(5, 15), h), this.genPoint(r + Object(o.f)(-5, 5), n + Object(o.f)(5, 15), h + Object(o.f)(-5, 5))
                        }
                    this.camera = new n.PerspectiveCamera(25, this.width / this.height, .01, 1e4), this.camera.position.set(50, 100, 150), this.scene.add(this.camera);
                    const c = new n.AmbientLight(16777215, .75);
                    return this.scene.add(c), this.spot = new n.SpotLight(16777215, 1), this.spot.position.set(0, 200, 0), this.spot.distance = 400, this.spot.target = this.cont, this.scene.add(this.spot)
                }
                onUpdate() {
                    let t;
                    null != this.helper && this.helper.update(), null != this.controls && this.controls.update();
                    const e = this.camera;
                    Math.abs(e.tx - e.position.x) > .01 && (t = e.tx - e.position.x, e.position.x += .02 * t), Math.abs(e.ty - e.position.y) > .01 && (t = e.ty - e.position.y, e.position.y += .02 * t), e.lookAt(new n.Vector3(0, 0, 0));
                    let i = 0,
                        s = 0,
                        o = 0;
                    const r = new n.Color(this.options.backgroundColor),
                        h = new n.Color(this.options.color),
                        a = h.clone().sub(r);
                    this.rayCaster && this.rayCaster.setFromCamera(new n.Vector2(this.rcMouseX, this.rcMouseY), this.camera);
                    for (let t = 0; t < this.points.length; t++) {
                        let e, c;
                        const l = this.points[t],
                            u = (c = this.rayCaster ? this.rayCaster.ray.distanceToPoint(l.position) : 1e3).clamp(5, 15);
                        if (l.scale.x = l.scale.y = l.scale.z = (.25 * (15 - u)).clamp(1, 100), 0 !== l.r) {
                            let t = Math.atan2(l.position.z, l.position.x);
                            e = Math.sqrt(l.position.z * l.position.z + l.position.x * l.position.x), t += 25e-5 * l.r, l.position.x = e * Math.cos(t), l.position.z = e * Math.sin(t)
                        }
                        for (let c = t; c < this.points.length; c++) {
                            const t = this.points[c],
                                u = l.position.x - t.position.x,
                                p = l.position.y - t.position.y,
                                d = l.position.z - t.position.z;
                            if ((e = Math.sqrt(u * u + p * p + d * d)) < this.options.maxDistance) {
                                let c;
                                const u = (2 * (1 - e / this.options.maxDistance)).clamp(0, 1);
                                c = "additive" === this.blending ? new n.Color(0).lerp(a, u) : r.clone().lerp(h, u), this.linePositions[i++] = l.position.x, this.linePositions[i++] = l.position.y, this.linePositions[i++] = l.position.z, this.linePositions[i++] = t.position.x, this.linePositions[i++] = t.position.y, this.linePositions[i++] = t.position.z, this.lineColors[s++] = c.r, this.lineColors[s++] = c.g, this.lineColors[s++] = c.b, this.lineColors[s++] = c.r, this.lineColors[s++] = c.g, this.lineColors[s++] = c.b, o++
                            }
                        }
                    }
                    return this.linesMesh.geometry.setDrawRange(0, 2 * o), this.linesMesh.geometry.attributes.position.needsUpdate = !0, this.linesMesh.geometry.attributes.color.needsUpdate = !0, .001 * this.t
                }
                onMouseMove(t, e) {
                    const i = this.camera;
                    i.oy || (i.oy = i.position.y, i.ox = i.position.x, i.oz = i.position.z);
                    const s = Math.atan2(i.oz, i.ox),
                        o = Math.sqrt(i.oz * i.oz + i.ox * i.ox),
                        n = s + 2 * (t - .5) * (this.options.mouseCoeffX || 1);
                    i.tz = o * Math.sin(n), i.tx = o * Math.cos(n), i.ty = i.oy + 50 * (e - .5) * (this.options.mouseCoeffY || 1), this.rayCaster, this.rcMouseX = 2 * t - 1, this.rcMouseY = 2 * -t + 1
                }
                onRestart() { this.scene.remove(this.linesMesh), this.points = [] }
            }
            r.initClass(), e.default = s.a.register("NET", r)
        }
    })
});