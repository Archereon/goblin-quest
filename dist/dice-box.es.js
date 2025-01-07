var ZM = Object.defineProperty;
var wM = (y, M, P) => M in y ? ZM(y, M, { enumerable: !0, configurable: !0, writable: !0, value: P }) : y[M] = P;
var R = (y, M, P) => (wM(y, typeof M != "symbol" ? M + "" : M, P), P), O = (y, M, P) => {
  if (!M.has(y))
    throw TypeError("Cannot " + P);
};
var d = (y, M, P) => (O(y, M, "read from private field"), P ? P.call(y) : M.get(y)), T = (y, M, P) => {
  if (M.has(y))
    throw TypeError("Cannot add the same private member more than once");
  M instanceof WeakSet ? M.add(y) : M.set(y, P);
}, Z = (y, M, P, K) => (O(y, M, "write to private field"), K ? K.call(y, P) : M.set(y, P), P);
var Y = (y, M, P, K) => ({
  set _(l) {
    Z(y, M, l, P);
  },
  get _() {
    return d(y, M, K);
  }
}), G = (y, M, P) => (O(y, M, "access private method"), P);
function cM(y) {
  const { selector: M, id: P } = y;
  let K = document.body, l = document.createElement("canvas");
  if (l.id = P, l.classList.add("dice-box-canvas"), M) {
    if (typeof M != "string")
      throw new Error("You must provide a DOM selector as the first argument in order to render the Dice Box");
    if (K = document.querySelector(M), !(K != null && K.nodeName))
      throw new Error(`DiceBox target DOM node: '${M}' not found or not available yet. Try invoking inside a DOMContentLoaded event`);
  }
  return K.appendChild(l), l;
}
function DM() {
  let y;
  try {
    if (y = XM && (window.URL || window.webkitURL).createObjectURL(XM), !y)
      throw "";
    return new Worker(y);
  } catch {
    return new Worker("data:application/javascript;base64," + WM);
  } finally {
    y && (window.URL || window.webkitURL).revokeObjectURL(y);
  }
}
const LM = (y) => {
  let M;
  return function() {
    let P = this, K = arguments;
    M && window.cancelAnimationFrame(M), M = window.requestAnimationFrame(function() {
      y.apply(P, K);
    });
  };
}, tM = (y = { dedupe: !1 }) => {
  const { dedupe: M } = y;
  let P = [], K;
  const l = (X) => (M && (P = []), P.push(X), K || (K = W()), K.finally(() => {
    K = void 0;
  })), W = async () => {
    const X = [];
    for (; P.length; ) {
      const s = P.shift();
      X.push(await s());
    }
    return X;
  };
  return { push: l, queue: P, flush: () => K || Promise.resolve([]) };
}, YM = (y) => JSON.parse(JSON.stringify(y));
class dM {
  /**
   * Generate a random number between 0 (inclusive) and 1 (exclusive).
   * A drop in replacement for Math.random()
   * @return {number}
   */
  static value() {
    const M = window.crypto || window.msCrypto, P = new Uint32Array(1);
    return M.getRandomValues(P)[0] / 2 ** 32;
  }
  /**
   * Generate a very good random number between min (inclusive) and max (exclusive) by using crypto.getRandomValues() twice.
   * @param  {number} min
   * @param  {number} max
   * @return {number}
   */
  static range(M, P) {
    return Math.floor(Math.pow(10, 14) * this.value() * this.value()) % (P - M + 1) + M;
  }
}
const JM = (y) => {
  let M = !1, P = y.slice(y.startsWith("#") ? 1 : 0);
  P.length === 3 ? P = [...P].map((l) => l + l).join("") : P.length === 8 && (M = !0), P = parseInt(P, 16);
  let K = {
    r: P >>> 16,
    g: (P & 65280) >>> 8,
    b: P & 255
  };
  return M && (K.r = P >>> 24, K.g = (P & 16711680) >>> 16, K.b = (P & 65280) >>> 8, K.a = P & 255), K;
};
function FM() {
  try {
    const y = document.createElement("canvas");
    return !!window.WebGLRenderingContext && (y.getContext("webgl") || y.getContext("experimental-webgl"));
  } catch {
    return !1;
  }
}
const bM = { a: 1e4, b: 2e4, c: 3e4, d: 4e4 }, sM = 16, kM = {
  id: `dice-canvas-${Date.now()}`,
  // set the canvas id
  container: null,
  enableShadows: !0,
  // do dice cast shadows onto DiceBox mesh?
  shadowTransparency: 0.8,
  lightIntensity: 1,
  delay: 10,
  // delay between dice being generated - 0 causes stuttering and physics popping
  scale: 5,
  // scale the dice
  theme: "default",
  // can be a hex color or a pre-defined theme such as 'purpleRock'
  preloadThemes: [],
  externalThemes: {},
  // point to CDN paths
  themeColor: "#2e8555",
  // used for color values or named theme variants - not fully implemented yet // green: #2e8555 // yellow: #feea03
  offscreen: !0,
  // use offscreen canvas browser feature for performance improvements - will fallback to false based on feature detection
  assetPath: "/assets/dice-box/",
  // path to 'ammo', 'themes' folders and web workers
  // origin: location.origin,
  origin: typeof window < "u" ? window.location.origin : "",
  suspendSimulation: !1
};
var m, U, i, r, S, f, V, z, a, E, J, g, SM, B, zM, n, pM, A, e, Q, q;
class GM {
  constructor(M = {}) {
    // Load the BabylonJS World
    T(this, g);
    // Load the AmmoJS physics world
    T(this, B);
    T(this, n);
    // used by both .add and .roll - .roll clears the box and .add does not
    T(this, A);
    T(this, Q);
    R(this, "rollCollectionData", {});
    R(this, "rollGroupData", {});
    R(this, "rollDiceData", {});
    R(this, "themeData", []);
    R(this, "themesLoadedData", {});
    T(this, m, 0);
    T(this, U, 0);
    T(this, i, 0);
    T(this, r, 0);
    T(this, S, {});
    T(this, f, void 0);
    T(this, V, void 0);
    T(this, z, void 0);
    T(this, a, void 0);
    T(this, E, void 0);
    T(this, J, !0);
    R(this, "noop", () => {
    });
    R(this, "canvasWidth");
    R(this, "canvasHeight");
    R(this, "autoResize", !0);
    if (arguments.length === 2 && typeof (arguments[0] === "string") && typeof (arguments[1] === "object") && (console.warn("You are using the old API. Dicebox constructor accepts a config object as it's only argument. Please read the v1.1.0 docs at https://fantasticdice.games/docs/usage/config"), M = arguments[1], M.container = arguments[0]), typeof M != "object")
      throw new Error("Config options should be an object. Config reference: https://fantasticdice.games/docs/usage/config#configuration-options");
    const { onCollision: P, onBeforeRoll: K, onDieComplete: l, onRollComplete: W, onRemoveComplete: X, onThemeConfigLoaded: s, onThemeLoaded: j, ...b } = M;
    this.config = { ...kM, ...b }, this.onBeforeRoll = M.onBeforeRoll || this.noop, this.onDieComplete = M.onDieComplete || this.noop, this.onRollComplete = M.onRollComplete || this.noop, this.onRemoveComplete = M.onRemoveComplete || this.noop, this.onThemeLoaded = M.onThemeLoaded || this.noop, this.onThemeConfigLoaded = M.onThemeConfigLoaded || this.noop, this.onCollision = M.onCollision || this.noop, this.canvasWidth = M.canvasWidth, this.canvasHeight = M.canvasHeight, this.autoResize = M.autoResize, FM() ? (this.canvas = cM({
      selector: this.config.container,
      id: this.config.id
    }), this.isVisible = !0) : Z(this, J, !1), this.loadThemeQueue = tM();
  }
  resizeWorld() {
    if (this.autoResize) {
      const M = this.canvasWidth ? this.canvasWidth : this.canvas.clientWidth, P = this.canvasHeight ? this.canvasHeight : this.canvas.clientHeight, l = LM(() => {
        d(this, S).resize({ width: M, height: P }), d(this, z) && d(this, z).postMessage({ action: "resize", width: M, height: P });
      });
      window.addEventListener("resize", l);
    }
  }
  manualResizeWorld() {
    const M = this.canvasWidth ? this.canvasWidth : this.canvas.clientWidth, P = this.canvasHeight ? this.canvasHeight : this.canvas.clientHeight;
    d(this, S).resize({ width: M, height: P }), d(this, z) && d(this, z).postMessage({ action: "resize", width: M, height: P });
  }
  async init() {
    return d(this, J) ? G(this, B, zM).call(this) : Z(this, a, Promise.resolve()), await G(this, g, SM).call(this), this.resizeWorld(), d(this, S).onRollResult = (M) => {
      const P = this.rollDiceData[M.rollId], K = this.rollGroupData[P.groupId], l = this.rollCollectionData[P.collectionId];
      K.rolls[P.rollId].value = M.value, l.completedRolls++, l.completedRolls == l.rolls.length && l.resolve(Object.values(l.rolls).map(({ collectionId: j, id: b, meshName: p, ...L }) => L));
      const { collectionId: W, id: X, ...s } = P;
      this.onDieComplete(s);
    }, d(this, S).onRollComplete = () => {
      this.onRollComplete(this.getRollResults());
    }, d(this, S).onDieRemoved = (M) => {
      let P = this.rollDiceData[M];
      const K = this.rollCollectionData[P.removeCollectionId];
      K.completedRolls++, delete this.rollDiceData[P.rollId];
      const l = this.rollGroupData[P.groupId];
      delete l.rolls[P.rollId];
      const W = G(this, Q, q).call(this, P.groupId);
      l.value = W.value, l.qty = W.rollsArray.length, K.completedRolls == K.rolls.length && K.resolve(Object.values(K.rolls).map(({ id: L, ...D }) => D));
      const { collectionId: X, id: s, removeCollectionId: j, meshName: b, ...p } = P;
      this.onRemoveComplete(p);
    }, await Promise.all([d(this, f), d(this, a)]), d(this, z) && G(this, n, pM).call(this), await this.loadThemeQueue.push(() => this.loadTheme(this.config.theme)), this.config.preloadThemes.forEach((async function(M) {
      await this.loadThemeQueue.push(() => this.loadTheme(M));
    }).bind(this)), this;
  }
  // fetch the theme config and return a themeData object
  async getThemeConfig(M) {
    let P = `${this.config.origin}${this.config.assetPath}themes/${M}`;
    this.config.externalThemes[M] && (P = this.config.externalThemes[M]);
    let K = await fetch(`${P}/theme.config.json`).then((X) => {
      if (X.ok) {
        const s = X.headers.get("content-type");
        if (s && s.indexOf("application/json") !== -1)
          return X.json();
        if (X.type && X.type === "basic")
          return X.json();
        throw new Error(`Incorrect contentType: ${s}. Expected "application/json" or "basic"`);
      } else
        throw new Error(`Unable to fetch config file for theme: '${M}'. Request rejected with status ${X.status}: ${X.statusText}`);
    }).catch((X) => console.error(X));
    if (!K)
      throw new Error("No theme config data to work with.");
    let l = "default", W = `${this.config.origin}${this.config.assetPath}themes/default/default.json`;
    if (K.hasOwnProperty("meshFile") && (l = K.meshFile.replace(/(.*)\..{2,4}$/, "$1"), W = `${P}/${K.meshFile}`), !K.hasOwnProperty("diceAvailable"))
      throw new Error('A theme must indicate which dice are available by defining "diceAvailable".');
    if (K.hasOwnProperty("extends")) {
      const X = await this.loadTheme(K.extends).catch((j) => console.error(j));
      if (X.hasOwnProperty("extends"))
        throw new Error("Cannot extend a theme that extends another theme.");
      const s = {};
      K.diceAvailable.forEach((j) => {
        s[j] = K.systemName;
      }), X.diceExtended = { ...X.diceExtended, ...s }, this.config.theme = K.extends;
    }
    return Object.assign(
      K,
      {
        basePath: P,
        meshFilePath: W,
        meshName: l,
        theme: M
      }
    ), K;
  }
  async loadTheme(M) {
    if (this.themesLoadedData[M])
      return this.themesLoadedData[M];
    const P = this.themesLoadedData[M] = await this.getThemeConfig(M).catch((K) => console.error(K));
    if (this.onThemeConfigLoaded(P), !!P)
      return await d(this, S).loadTheme(P).catch((K) => console.error(K)), this.onThemeLoaded(P), P;
  }
  // TODO: use getter and setter
  // change config options
  async updateConfig(M) {
    const P = { ...this.config, ...M };
    if (this.config = P, P.theme) {
      const l = (await this.loadThemeQueue.push(() => this.loadTheme(P.theme))).at(-1);
      l.hasOwnProperty("extends") && (this.config.theme = l.extends);
    }
    return d(this, S).updateConfig(P), d(this, z) && d(this, z).postMessage({
      action: "updateConfig",
      options: P
    }), this;
  }
  async setDimensions(M, P) {
    if (!this.canvasWidth || this.canvasWidth != M || !this.canvasHeight || this.canvasHeight != P) {
      this.canvasWidth = M, this.canvasHeight = P;
      const K = { ...this.config, canvasWidth: M, canvasHeight: P };
      this.config = K, await d(this, S).updateConfig(K);
    }
    return this.manualResizeWorld(), this;
  }
  clear() {
    return Z(this, m, 0), Z(this, U, 0), Z(this, i, 0), Z(this, r, 0), this.rollCollectionData = {}, this.rollGroupData = {}, this.rollDiceData = {}, d(this, S).clear(), d(this, z) && d(this, z).postMessage({ action: "clearDice" }), this;
  }
  hide(M) {
    return M ? (this.canvas.dataset.hideClass = M, this.canvas.classList.add(M)) : this.canvas.style.display = "none", this.isVisible = !1, this;
  }
  show() {
    var P;
    const M = (P = this.canvas.dataset) == null ? void 0 : P.hideClass;
    return M ? (delete this.canvas.dataset.hideClass, this.canvas.classList.remove(M)) : this.canvas.style.display = "block", this.isVisible = !0, this.resizeWorld(), this;
  }
  // TODO: pass data with roll - such as roll name. Passed back at the end in the results
  roll(M, { theme: P = this.config.theme, themeColor: K = this.config.themeColor, newStartPoint: l = !0 } = {}, W = bM, X = sM) {
    this.clear();
    const s = Y(this, m)._++;
    this.rollCollectionData[s] = new v({
      id: s,
      notation: M,
      theme: P,
      themeColor: K,
      newStartPoint: l
    });
    const j = this.createNotationArray(M, this.themesLoadedData[P].diceAvailable);
    return G(this, A, e).call(this, j, s, W, X), this.rollCollectionData[s].promise;
  }
  add(M, { theme: P = this.config.theme, themeColor: K = this.config.themeColor, newStartPoint: l = !0 } = {}, W = bM, X = sM) {
    const s = Y(this, m)._++;
    this.rollCollectionData[s] = new v({
      id: s,
      notation: M,
      theme: P,
      themeColor: K,
      newStartPoint: l
    });
    const j = this.createNotationArray(M, this.themesLoadedData[P].diceAvailable);
    return G(this, A, e).call(this, j, s, W, X), this.rollCollectionData[s].promise;
  }
  reroll(M, { remove: P = !1, hide: K = !1, newStartPoint: l = !0 } = {}) {
    const X = (Array.isArray(M) ? M : [M]).map(({ value: s, ...j }) => j);
    return P === !0 && this.remove(X, { hide: K }), this.add(X, { newStartPoint: l });
  }
  remove(M, { hide: P = !1 } = {}) {
    const K = Array.isArray(M) ? M : [M], l = Y(this, m)._++;
    return this.rollCollectionData[l] = new v({
      id: l,
      notation: M,
      rolls: K
    }), K.map((W) => {
      this.rollDiceData[W.rollId].removeCollectionId = l;
      let X = this.rollDiceData[W.rollId].id;
      d(this, S).remove({ id: X, rollId: W.rollId }), d(this, z) && d(this, z).postMessage({ action: "removeDie", id: X });
    }), this.rollCollectionData[l].promise;
  }
  // accepts simple notations eg: 4d6
  // accepts array of notations eg: ['4d6','2d10']
  // accepts object {sides:int, qty:int}
  // accepts array of objects eg: [{sides:int, qty:int, mods:[]}]
  createNotationArray(M, P) {
    const K = Array.isArray(M) ? M : [M];
    let l = [];
    const W = (j) => {
      if (j.hasOwnProperty("qty") || (j.qty = 1), j.hasOwnProperty("sides"))
        return j.sides === "100" && (j.sides = 100, j.data = "single"), !0;
      {
        const b = "Roll notation is missing sides";
        throw new Error(b);
      }
    }, X = (j) => {
      j = j.toString();
      let b = j.split(".");
      return b[1] ? b[1] = parseInt(b[1]) + 1 : b[1] = 1, b[0] + "." + b[1];
    }, s = (j) => {
      j.hasOwnProperty("rollId") && this.rollDiceData.hasOwnProperty(j.rollId) && (j.rollId = X(j.rollId)), j.hasOwnProperty("modifier") || (j.modifier = 0);
    };
    return K.forEach((j) => {
      typeof j == "string" ? l.push(this.parse(j, P)) : typeof K == "object" && (s(j), W(j) && l.push(j));
    }), l;
  }
  // parse text die notation such as 2d10+3 => {number:2, type:6, modifier:3}
  // taken from https://github.com/ChapelR/dice-notation
  parse(M, P) {
    const K = /(\d+)([dD]{1}\d+)(.*)$/i, l = /(\d+)[dD](00|%)(.*)$/i, W = /(\d+)[dD](f+[ate]*)(.*)$/i, X = /(\d+)[dD]([\d\w]+)([+-]{0,1}\d+)?/i, s = /([+-])(\d+)/, j = M.trim().replace(/\s+/g, ""), b = (w, F) => {
      if (w = Number(w), Number.isNaN(w) || !Number.isInteger(w) || w < 1)
        throw new Error(F);
      return w;
    }, p = j.match(l) || j.match(K) || j.match(W) || j.match(X);
    let L = 0;
    const D = "Invalid notation: " + M;
    if (!p || !p.length || p.length < 3)
      throw new Error(D);
    if (p[3] && s.test(p[3])) {
      const w = p[3].match(s);
      let F = b(w[2], D);
      w[1].trim() === "-" && (F *= -1), L = F;
    }
    const x = {
      qty: b(p[1], D),
      modifier: L
    };
    return j.match(l) ? (x.sides = "d100", x.data = "single") : j.match(W) ? x.sides = "fate" : (P.includes(j.match(X)[2]), x.sides = p[2]), x;
  }
  getRollResults() {
    return Object.entries(this.rollGroupData).map(([M, P]) => {
      const K = G(this, Q, q).call(this, M);
      P.value = K.value, P.qty = K.rollsArray.length;
      const l = { ...P };
      return l.rolls = K.rollsArray, l;
    });
  }
}
m = new WeakMap(), U = new WeakMap(), i = new WeakMap(), r = new WeakMap(), S = new WeakMap(), f = new WeakMap(), V = new WeakMap(), z = new WeakMap(), a = new WeakMap(), E = new WeakMap(), J = new WeakMap(), g = new WeakSet(), SM = async function() {
  Z(this, f, new Promise((P, K) => {
    Z(this, V, P);
  }));
  const M = () => {
    d(this, V).call(this);
  };
  if (d(this, J))
    if ("OffscreenCanvas" in window && "transferControlToOffscreen" in this.canvas && this.config.offscreen) {
      const P = await import("./world.offscreen.js").then((K) => K.default);
      Z(this, S, new P({
        canvas: this.canvas,
        options: this.config,
        onInitComplete: M
      }));
    } else {
      this.config.offscreen && (console.warn("This browser does not support OffscreenCanvas. Using standard canvas fallback."), this.config.offscreen = !1);
      const P = await import("./world.onscreen.js").then((K) => K.default);
      Z(this, S, new P({
        canvas: this.canvas,
        options: this.config,
        onInitComplete: M
      }));
    }
  else {
    console.warn("This browser does not support WebGL which is required for 3D rendering. Falling back to random number generator");
    const P = await import("./world.none.js").then((K) => K.default);
    Z(this, S, new P({
      canvas: this.canvas,
      options: this.config,
      onInitComplete: M
    }));
  }
}, B = new WeakSet(), zM = function() {
  Z(this, z, new DM()), Z(this, a, new Promise((M, P) => {
    Z(this, E, M);
  })), d(this, z).onmessage = (M) => {
    switch (M.data.action) {
      case "init-complete":
        d(this, E).call(this);
        break;
      case "collision":
        this.onCollision && this.onCollision(M.data.body0Id, M.data.body1Id, M.data.force);
        break;
    }
  }, d(this, z).postMessage({
    action: "init",
    width: this.canvasWidth ? this.canvasWidth : this.canvas.clientWidth,
    height: this.canvasHeight ? this.canvasHeight : this.canvas.clientHeight,
    options: this.config
  });
}, n = new WeakSet(), pM = function() {
  const M = new MessageChannel();
  d(this, S).connect(M.port1), d(this, z).postMessage({
    action: "connect"
  }, [M.port2]);
}, A = new WeakSet(), e = async function(M, P, K, l) {
  this.onBeforeRoll(M);
  const W = this.rollCollectionData[P];
  let X = W.newStartPoint, s = 0;
  M.forEach(async (j) => {
    var I, H;
    if (!j.sides)
      throw new Error("Improper dice notation or unable to parse notation");
    let b = j.theme || W.theme || this.config.theme;
    const p = j.groupId !== void 0, L = () => this.loadTheme(b);
    await this.loadThemeQueue.push(L);
    let D = (I = this.themesLoadedData[b]) == null ? void 0 : I.diceAvailable, x = this.themesLoadedData[b].diceExtended || {};
    if (x) {
      const k = Object.keys(x);
      k && k.includes(j.sides) && (b = x[j.sides], D = (H = this.themesLoadedData[b]) == null ? void 0 : H.diceAvailable);
    }
    for (var w = 0, F = j.qty; w < F; w++) {
      j.rollId !== void 0 ? j.rollId : Y(this, i)._++, j.id !== void 0 ? j.id : Y(this, r)._++, p ? j.groupId : d(this, U);
      const k = Number.isInteger(j.sides) ? `d${j.sides}` : j.sides;
      /^d[1-9]{1}[0-9]{0,1}0?$/.test(j.sides) && (j.sides = parseInt(j.sides.replace("d", ""))), j.sides === "fate" && !D.includes(k) && !diceExtra.includes(k) || j.sides === "fate" && !d(this, J) || this.config.suspendSimulation || !D.includes(k) && !diceExtra.includes(k) || !d(this, J) || (s += 1);
    }
  }), M.forEach(async (j) => {
    var MM, PM, jM, KM, lM, yM;
    if (!j.sides)
      throw new Error("Improper dice notation or unable to parse notation");
    let b = j.theme || W.theme || this.config.theme;
    const p = j.themeColor || W.themeColor || this.config.themeColor, L = {}, D = j.groupId !== void 0;
    let x;
    const w = () => this.loadTheme(b);
    await this.loadThemeQueue.push(w);
    let F = this.themesLoadedData[b].meshName, I = (MM = this.themesLoadedData[b]) == null ? void 0 : MM.diceAvailable, H = this.themesLoadedData[b].diceExtended || {}, k = (jM = (PM = this.themesLoadedData[b]) == null ? void 0 : PM.material) == null ? void 0 : jM.type;
    const o = Object.keys(H);
    if (o && o.includes(j.sides)) {
      b = H[j.sides];
      const h = () => this.loadTheme(b);
      this.loadThemeQueue.push(h), F = this.themesLoadedData[b].meshName, I = (KM = this.themesLoadedData[b]) == null ? void 0 : KM.diceAvailable, k = (yM = (lM = this.themesLoadedData[b]) == null ? void 0 : lM.material) == null ? void 0 : yM.type;
    }
    let $ = "", u;
    k === "color" && (u = JM(p), $ = u.r * 0.299 + u.g * 0.587 + u.b * 0.114 > 175 ? "_dark" : "_light");
    for (var _ = 0, TM = j.qty; _ < TM; _++) {
      let h = j.rollId !== void 0 ? j.rollId : Y(this, i)._++, xM = j.id !== void 0 ? j.id : Y(this, r)._++;
      x = D ? j.groupId : d(this, U);
      const N = Number.isInteger(j.sides) ? `d${j.sides}` : j.sides;
      /^d[1-9]{1}[0-9]{0,1}0?$/.test(j.sides) && (j.sides = parseInt(j.sides.replace("d", "")));
      const c = {
        sides: j.sides,
        data: j.data,
        dieType: N,
        groupId: x,
        collectionId: W.id,
        rollId: h,
        id: xM,
        theme: b,
        themeColor: p,
        meshName: F
      };
      if (L[h] = c, this.rollDiceData[h] = c, W.rolls.push(this.rollDiceData[h]), c.sides === "fate" && !I.includes(N) && !o.includes(N) || c.sides === "fate" && !d(this, J)) {
        console.warn(`fate die unavailable in '${b}' theme. Using fallback.`);
        const t = -1, C = 1;
        c.value = dM.range(t, C), d(this, S).addNonDie(c);
      } else if (this.config.suspendSimulation || !I.includes(N) && !o.includes(N) || !d(this, J)) {
        const t = d(this, J) ? this.config.suspendSimulation ? "3D simulation suspended. Using fallback." : `${c.sides} die unavailable in '${b}' theme. Using fallback.` : "This browser does not support webGL. Using random number fallback.";
        console.warn(t);
        const C = Number.isInteger(c.sides) ? c.sides : parseInt(c.sides.replace(/\D/g, ""));
        c.value = dM.range(1, C), d(this, S).addNonDie(c);
      } else {
        let t;
        if (o.includes(N)) {
          const C = H[N];
          t = this.themesLoadedData[C];
        }
        d(this, S).add({
          ...c,
          newStartPoint: X,
          theme: (t == null ? void 0 : t.systemName) || b,
          meshName: (t == null ? void 0 : t.meshName) || F,
          colorSuffix: $,
          queueLength: s,
          seed: K,
          simSpeed: l
        });
      }
      X = !1;
    }
    D ? Object.assign(this.rollGroupData[x].rolls, L) : (j.rolls = L, j.id = x, this.rollGroupData[x] = j, ++Y(this, U)._);
  });
}, Q = new WeakSet(), q = function(M) {
  const P = this.rollGroupData[M], K = Object.values(P.rolls).map(({ collectionId: W, id: X, meshName: s, ...j }) => j);
  let l = K.reduce((W, X) => {
    const s = isNaN(X.value) ? 0 : X.value;
    return W + s;
  }, 0);
  return l += P.modifier ? P.modifier : 0, { value: l, rollsArray: K };
};
class v {
  constructor(M) {
    Object.assign(this, M), this.rolls = M.rolls || [], this.completedRolls = 0;
    const P = this;
    this.promise = new Promise((K, l) => {
      P.resolve = K, P.reject = l;
    });
  }
}
export {
  YM as d,
  GM as default
};
//# sourceMappingURL=dice-box.es.js.map