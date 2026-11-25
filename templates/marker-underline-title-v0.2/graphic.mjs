// marker-underline-title: an OGraf v1 graphic (EBU) for DaVinci Resolve 21+ and other OGraf renderers.
//
// A two-line title settles in with a staggered blur-slide, then a marker stroke draws itself under
// one keyword: variable width, dry-brush edges, a slight rise to the right when the keyword is italic.
// Adapted from the video-shotcraft shot card `marker-underline-title` (Apache-2.0), see NOTICE.md.
//
// Every frame is a pure function of time. In post (non-realtime) the renderer calls
// setActionsSchedule() and then goToTime(t) in any order, also backwards, and the same t must give the
// same frame: no Math.random, no state carried from one frame to the next. In realtime the same painter
// runs from requestAnimationFrame.
//
// The card was tuned at 1920x1080 and 30 fps. We lay out a stage whose short side is 1080 px and scale
// it to the real frame, so every px value of the card is used as is. Timings are card frames (1/30 s)
// converted to milliseconds, so they hold on a timeline of any frame rate.

const FRAME_MS = 1000 / 30;
const ENTRY_FRAMES = 75; // lines settle by f26, stroke draws on f32-42, push-in ends on f74
const EXIT_MS = 400; // not in the card (it hard-cuts): drift up, blur and fade on stop; approved 2026-11-06
const SHORT_SIDE = 1080;
const DESIGN_FONT = 118; // stroke geometry is in px for a 118 px title; the SVG viewBox scales it
const FAMILY = 'MUT Noto Sans SC'; // private family name, never collides with an installed font

const DEFAULTS = {
  line1: '遇见全新的',
  line2: '动效模板',
  keyword: '全新',
  icon: '',
  textColor: '#17181c',
  markerColor: '#1b1916',
  transparent: false,
  fontSize: 118,
  fontFamily: '',
  italic: false,
};

// ---------------------------------------------------------------- easing (from shotcraft Polish.tsx)

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

// cubic-bezier(x1, y1, x2, y2) as a function of t, same curve as CSS. Newton-Raphson, bisection fallback.
const bezier = (x1, y1, x2, y2) => {
  if (x1 === y1 && x2 === y2) return (t) => clamp01(t);
  const ax = 1 - 3 * x2 + 3 * x1, bx = 3 * x2 - 6 * x1, cx = 3 * x1;
  const ay = 1 - 3 * y2 + 3 * y1, by = 3 * y2 - 6 * y1, cy = 3 * y1;
  const sx = (u) => ((ax * u + bx) * u + cx) * u;
  const sy = (u) => ((ay * u + by) * u + cy) * u;
  const dx = (u) => (3 * ax * u + 2 * bx) * u + cx;
  const solve = (x) => {
    let u = x;
    for (let i = 0; i < 8; i++) {
      const err = sx(u) - x;
      if (Math.abs(err) < 1e-7) return u;
      const d = dx(u);
      if (Math.abs(d) < 1e-6) break;
      u -= err / d;
    }
    let lo = 0, hi = 1;
    u = x;
    for (let i = 0; i < 40; i++) {
      const v = sx(u);
      if (Math.abs(v - x) < 1e-7) break;
      if (v < x) lo = u; else hi = u;
      u = (lo + hi) / 2;
    }
    return u;
  };
  return (t) => (t <= 0 ? 0 : t >= 1 ? 1 : sy(solve(t)));
};

const EASE = {
  snappy: bezier(0.16, 1, 0.3, 1), // line entry
  smooth: bezier(0.65, 0, 0.35, 1), // slow push-in
};

// progress of a segment that starts at `start` and lasts `dur` (both in card frames), eased and clamped
const ramp = (f, start, dur, ease) => ease(clamp01((f - start) / Math.max(1e-6, dur)));

// ---------------------------------------------------------------- marker stroke (from the card)

const mulberry32 = (a) => () => {
  let t = (a += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// The stroke is one filled polygon: a wobbly centre line plus a variable width. All values are px for a
// 118 px title. The card's own stroke is len 252, rise 9 (italic "new"), 40 samples, seed 77; with those
// inputs `d` is exactly the card's path. `maxY` is the lowest point, for keeping clear of the next line.
const buildStroke = (len, rise) => {
  const n = Math.max(24, Math.round((40 * len) / 252)); // keep the card's jitter density on any length
  const rand = mulberry32(77);
  const wob = Array.from({ length: n + 1 }, () => rand() - 0.5);
  const top = [];
  const bot = [];
  let maxY = 0;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = t * len;
    // centre line: left low, right high by `rise` (0 for upright text), plus a slow wave and jitter
    const mid = 14.5 + rise * (0.5 - t) + Math.sin(t * Math.PI * 1.6 + 0.4) * 2.6 + wob[i] * 1.6;
    // width: thin start, full middle, pointed end, plus fine jitter
    const wBase = 14 + Math.sin(t * Math.PI) * 6 - Math.max(0, t - 0.86) * 46 - Math.max(0, 0.06 - t) * 70;
    const w = Math.max(2.2, wBase + wob[i] * 3);
    top.push(`${x.toFixed(1)},${(mid - w / 2).toFixed(1)}`);
    bot.push(`${x.toFixed(1)},${(mid + w / 2).toFixed(1)}`);
    maxY = Math.max(maxY, mid + w / 2);
  }
  return { d: `M${top.join('L')}L${bot.reverse().join('L')}Z`, maxY };
};

// ---------------------------------------------------------------- paper grain (from Polish.tsx Grain)

const hash = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const GRAIN = Array.from({ length: 6 }, (_, variant) => {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'>` +
    `<filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>` +
    `<feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='${variant * 17 + 3}' stitchTiles='stitch'/>` +
    `<feColorMatrix type='matrix' values='0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1'/>` +
    `<feComponentTransfer><feFuncR type='linear' slope='2.4' intercept='-0.7'/><feFuncG type='linear' slope='2.4' intercept='-0.7'/>` +
    `<feFuncB type='linear' slope='2.4' intercept='-0.7'/></feComponentTransfer></filter>` +
    `<rect width='100%' height='100%' filter='url(#g)'/></svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
});

// Decode the six tiles once, so switching tiles mid-render never shows a frame without grain.
let grainJob = null;
const grainImages = [];
const preloadGrain = () =>
  (grainJob ??= Promise.all(
    GRAIN.map((css) => {
      const img = new Image();
      img.src = css.slice(5, -2); // url("…") → …
      grainImages.push(img);
      return img.decode().catch(() => {});
    }),
  ));

// ---------------------------------------------------------------- fonts

// Noto Sans SC Bold ships as 101 unicode-range slices; the browser only loads the slices the text needs.
// If the fonts folder is missing the graphic still runs, on the system font.
let fontJob = null;
const addFonts = () =>
  (fontJob ??= (async () => {
    try {
      const { default: slices } = await import('./fonts/noto-sans-sc-700.mjs');
      for (const [file, range] of slices) {
        const url = new URL(`./fonts/${file}`, import.meta.url).href;
        const face = new FontFace(FAMILY, `url("${url}") format("woff2")`, {
          weight: '700',
          style: 'normal',
          unicodeRange: range,
          display: 'block',
        });
        document.fonts.add(face);
      }
    } catch (err) {
      console.warn('marker-underline-title: built-in font not found, using system fonts', err);
    }
  })());

const familyCss = (fonts) => [...fonts, FAMILY].map((f) => `"${f}"`).join(', ') + ', sans-serif';

// ---------------------------------------------------------------- icon image

// Turn what the user typed (or the renderer passed) into a URL. Windows and macOS absolute paths become
// file URLs; anything relative is resolved against this package folder.
const iconUrl = (raw) => {
  const p = String(raw ?? '').trim().replace(/^"(.*)"$/, '$1'); // Explorer's "Copy as path" adds quotes
  if (!p) return '';
  if (/^(https?|file|data|blob):/i.test(p)) return p;
  const enc = (s) => encodeURI(s).replace(/#/g, '%23').replace(/\?/g, '%3F');
  const slashed = p.replace(/\\/g, '/');
  if (/^[a-z]:\//i.test(slashed)) return `file:///${enc(slashed)}`; // C:\x\y.png
  if (slashed.startsWith('//')) return `file:${enc(slashed)}`; // \\server\share\y.png
  if (slashed.startsWith('/')) return `file://${enc(slashed)}`; // /Users/x/y.png
  return new URL(enc(slashed), import.meta.url).href;
};

// Resolves to { ok, img, w, h }. A missing or blocked image resolves { ok: false }: the graphic then
// renders without the icon instead of failing or waiting forever.
const loadIcon = (raw) =>
  new Promise((resolve) => {
    const url = iconUrl(raw);
    if (!url) return resolve({ ok: false });
    const img = new Image();
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      resolve(ok ? { ok: true, img, w: img.naturalWidth, h: img.naturalHeight } : { ok: false });
    };
    const timer = setTimeout(() => finish(false), 5000);
    img.onload = () => img.decode().then(() => finish(true), () => finish(true));
    img.onerror = () => finish(false);
    img.alt = '';
    img.style.cssText = 'display:block;width:100%;height:100%;object-fit:contain;';
    img.src = url;
  });

// ---------------------------------------------------------------- data

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const text = (v) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim();

// colour typed by hand: #RRGGBB, RRGGBB, #RGB or #RRGGBBAA in any case; anything else gives the default
const hex = (v, def) => {
  let h = String(v ?? '').trim().toLowerCase().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/.test(h)) h = [...h].map((c) => c + c).join('');
  if (/^[0-9a-f]{8}$/.test(h)) h = h.slice(0, 6);
  return /^[0-9a-f]{6}$/.test(h) ? `#${h}` : def;
};
// number typed by hand: "118", "118px" and "1,5" all work
const num = (v, def) => {
  const s = String(v ?? '').trim().replace(',', '.').replace(/px$/i, '');
  const n = Number(s);
  return s !== '' && Number.isFinite(n) ? n : def;
};
const bool = (v, def) => {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number') return v !== 0;
  const s = String(v ?? '').trim().toLowerCase();
  if (['true', '1', 'yes', 'on', 'y', '是', '开', '对'].includes(s)) return true;
  if (['false', '0', 'no', 'off', 'n', '否', '关', '不'].includes(s)) return false;
  return def;
};
const fontList = (v) =>
  String(v ?? '')
    .split(/[,，]/)
    .map((s) => s.trim().replace(/^["']+|["']+$/g, '').replace(/[;{}"\\]/g, ''))
    .filter(Boolean);

const normalize = (raw) => ({
  line1: text(raw.line1),
  line2: text(raw.line2),
  keyword: text(raw.keyword),
  icon: String(raw.icon ?? '').trim(),
  textColor: hex(raw.textColor, DEFAULTS.textColor),
  markerColor: hex(raw.markerColor, DEFAULTS.markerColor),
  transparent: bool(raw.transparent, DEFAULTS.transparent),
  fontSize: Math.min(400, Math.max(16, num(raw.fontSize, DEFAULTS.fontSize))),
  fonts: fontList(raw.fontFamily),
  italic: bool(raw.italic, DEFAULTS.italic),
});

// The keyword is underlined where it first appears: line 1 first, then line 2. Not found: no stroke.
const findKeyword = (d) => {
  if (!d.keyword) return null;
  const a = d.line1.indexOf(d.keyword);
  if (a >= 0) return { line: 1, at: a };
  const b = d.line2.indexOf(d.keyword);
  return b >= 0 ? { line: 2, at: b } : null;
};

// put a line's text into `el`, with the keyword span `kw` in its place when the keyword is on this line
const fillLine = (el, value, at, keyword, kw, kwText) => {
  if (at < 0) {
    el.textContent = value;
    return;
  }
  kwText.textContent = keyword;
  el.replaceChildren(value.slice(0, at), kw, value.slice(at + keyword.length));
};

// target step of a playAction, per the OGraf step model (stepCount 1: step 0 is on screen, >= 1 is the end)
const targetStep = (params, current) =>
  Number.isInteger(params?.goto) && params.goto >= 0
    ? params.goto
    : (current ?? -1) + (Number.isFinite(params?.delta) ? params.delta : 1);

// ---------------------------------------------------------------- markup

const template = (uid) => `
<div data-r="stage" style="position:absolute;left:0;top:0;transform-origin:0 0;overflow:hidden;">
  <div data-r="paper" style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(180deg,#f6f6f4 0%,#efefec 55%,#e8e8e4 100%);">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 62% 70% at 42% 30%,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0) 72%);"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 72% 72% at 50% 46%,rgba(42,44,54,0) 45%,rgba(42,44,54,0.038) 75.3%,rgba(42,44,54,0.120) 100%),radial-gradient(ellipse 100% 100% at 50% 46%,rgba(42,44,54,0) 60%,rgba(42,44,54,0.072) 100%);"></div>
    <div data-r="grain" style="position:absolute;inset:0;opacity:0.05;mix-blend-mode:overlay;background-size:256px 256px;"></div>
  </div>
  <div data-r="push" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <div data-r="exit">
      <div data-r="block" style="font-weight:700;line-height:1.12;letter-spacing:-0.028em;text-align:center;white-space:nowrap;">
        <div data-r="line1" style="display:flex;align-items:center;justify-content:center;">
          <span data-r="t1" style="flex:none;"><span data-r="kw" style="position:relative;display:inline-block;"><span data-r="kwText"></span><i data-r="kwBase" style="display:inline-block;width:0;height:0;vertical-align:baseline;"></i><svg data-r="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;overflow:visible;visibility:hidden;">
            <defs>
              <filter id="${uid}-dry" x="-5%" y="-40%" width="110%" height="180%" color-interpolation-filters="sRGB">
                <feTurbulence type="fractalNoise" baseFrequency="0.09 0.5" numOctaves="2" seed="7" result="warp"/>
                <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.8" xChannelSelector="R" yChannelSelector="G" result="rough"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.035 0.9" numOctaves="2" seed="19" result="grain"/>
                <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -16 11.4" result="holes"/>
                <feComposite in="rough" in2="holes" operator="in"/>
              </filter>
            </defs>
            <path data-r="path" fill-opacity="0.94" filter="url(#${uid}-dry)"/>
          </svg></span></span>
        </div>
        <div data-r="line2" style="display:flex;align-items:center;justify-content:center;">
          <span data-r="iconSlot" style="flex:none;display:none;"></span><span data-r="t2" style="flex:none;"></span>
        </div>
      </div>
    </div>
  </div>
</div>`;

let uidCounter = 0;

// ---------------------------------------------------------------- the graphic

export default class MarkerUnderlineTitle extends HTMLElement {
  // ---- OGraf API

  async load({ data, renderType = 'realtime', renderCharacteristics } = {}) {
    this.realtime = renderType !== 'non-realtime';
    this.base = { ...DEFAULTS, ...(isObj(data) ? data : {}) };
    this.res = renderCharacteristics?.resolution;
    this.schedule = [];
    this.seq = 0;
    this.t = 0;
    this.step = undefined;
    this.fontJobs = new Map();
    this.fontDone = new Set();
    this.iconJobs = new Map();
    this.iconDone = new Map();
    this.layoutKey = null;
    this.stroke = null;
    this.ctx = document.createElement('canvas').getContext('2d');
    this.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;visibility:hidden;';
    this.innerHTML = template(`mut${++uidCounter}`);
    this.r = {};
    for (const n of this.querySelectorAll('[data-r]')) this.r[n.dataset.r] = n;
    await Promise.all([addFonts(), preloadGrain()]);
    await this.#prepare(normalize(this.base));
    this.clock0 = performance.now();
    this.#paint(this.#now());
    return { statusCode: 200 };
  }

  async dispose() {
    cancelAnimationFrame(this.raf);
    clearTimeout(this.stopTimer);
    this.raf = null;
    this.replaceChildren();
    return { statusCode: 200 };
  }

  async playAction(params = {}) {
    if (targetStep(params, this.step) >= 1) {
      await this.stopAction(params);
      return { statusCode: 200, currentStep: undefined };
    }
    this.#push('playAction', params);
    this.step = 0;
    await this.#refresh();
    return { statusCode: 200, currentStep: 0 };
  }

  async stopAction(params = {}) {
    this.step = undefined;
    this.#push('stopAction', params);
    await this.#refresh();
    // the last exit frame must not depend on rAF, which the browser may throttle when nothing looks at it
    if (this.realtime) {
      clearTimeout(this.stopTimer);
      this.stopTimer = setTimeout(() => this.#paint(this.#now()), params?.skipAnimation ? 0 : EXIT_MS + 30);
    }
    return { statusCode: 200 };
  }

  // A direct update (an Inspector edit) changes the graphic for its whole duration. Updates that should
  // happen at a given moment arrive through setActionsSchedule() instead.
  async updateAction(params = {}) {
    if (isObj(params?.data)) this.base = { ...this.base, ...params.data };
    await this.#refresh();
    return { statusCode: 200 };
  }

  async customAction() {
    return { statusCode: 404, statusMessage: 'This graphic has no custom actions' };
  }

  async setActionsSchedule({ schedule } = {}) {
    this.schedule = (Array.isArray(schedule) ? schedule : []).map((e, i) => ({
      t: Number(e?.timestamp) || 0,
      type: e?.action?.type,
      params: isObj(e?.action?.params) ? e.action.params : {},
      i,
    }));
    this.seq = this.schedule.length;
    this.#sort();
    await this.#refresh();
    return { statusCode: 200 };
  }

  async goToTime({ timestamp } = {}) {
    const t = Number(timestamp) || 0;
    this.t = t;
    await this.#prepare(this.#stateAt(t).d);
    this.#paint(t);
    // Chrome skips repainting when a value moves very little (the push-in changes scale by 0.00001 near
    // its end), so a frame would look like whichever neighbour was painted before it. Re-inserting the
    // stage makes Chrome paint it from scratch: the same t then gives the same pixels from any direction.
    this.insertBefore(this.r.stage, this.r.stage.nextSibling);
    return { statusCode: 200 };
  }

  // ---- time and state

  #now() {
    return this.realtime ? performance.now() - this.clock0 : this.t;
  }

  #push(type, params) {
    this.schedule.push({ t: this.#now(), type, params: isObj(params) ? params : {}, i: this.seq++ });
    this.#sort();
  }

  #sort() {
    // stable: actions at the same time keep the order they arrived in
    this.schedule.sort((a, b) => a.t - b.t || a.i - b.i);
  }

  async #refresh() {
    await this.#prepare(this.#stateAt(this.#now()).d);
    this.#paint(this.#now());
    if (this.realtime && !this.raf) {
      const tick = () => {
        this.raf = this.#paint(this.#now()) ? requestAnimationFrame(tick) : null;
      };
      this.raf = requestAnimationFrame(tick);
    }
  }

  // What is on screen at time t: the data in force, ms since the graphic entered (null before it
  // entered) and the exit progress 0-1 (0 while it has not been stopped).
  #stateAt(t) {
    let data = this.base;
    let play = null, stop = null, skipIn = false, skipOut = false, step;
    for (const e of this.schedule) {
      if (e.t > t) break;
      if (e.type === 'updateAction') {
        if (isObj(e.params.data)) data = { ...data, ...e.params.data };
      } else if (e.type === 'playAction' && targetStep(e.params, step) < 1) {
        play = e.t;
        stop = null;
        skipIn = !!e.params.skipAnimation;
        step = 0;
      } else if (e.type === 'stopAction' || e.type === 'playAction') {
        if (play !== null && stop === null) {
          stop = e.t;
          skipOut = !!e.params.skipAnimation;
        }
        step = undefined;
      }
    }
    const inMs = play === null ? null : t - play + (skipIn ? ENTRY_FRAMES * FRAME_MS : 0);
    const outP = stop === null ? 0 : skipOut ? 1 : clamp01((t - stop) / EXIT_MS);
    return { d: normalize(data), inMs, outP };
  }

  // Load what a frame with data `d` needs (font slices for its text, the icon) before it is painted.
  async #prepare(d) {
    const jobs = [];
    const fam = familyCss(d.fonts);
    const fkey = `${fam}\n${d.line1}\n${d.line2}`;
    if (!this.fontJobs.has(fkey)) {
      const job = document.fonts
        .load(`700 ${DESIGN_FONT}px ${fam}`, `${d.line1}${d.line2}` || ' ')
        .catch((err) => console.warn('marker-underline-title: font load failed', err))
        .then(() => {
          this.fontDone.add(fkey);
        });
      this.fontJobs.set(fkey, job);
    }
    jobs.push(this.fontJobs.get(fkey));
    if (d.icon) {
      if (!this.iconJobs.has(d.icon)) {
        this.iconJobs.set(d.icon, loadIcon(d.icon).then((res) => this.iconDone.set(d.icon, res)));
      }
      jobs.push(this.iconJobs.get(d.icon));
    }
    await Promise.all(jobs);
  }

  // ---- drawing

  #paint(t) {
    const { d, inMs, outP } = this.#stateAt(t);
    const visible = inMs !== null && outP < 1;
    this.style.visibility = visible ? 'visible' : 'hidden';
    if (!visible) return false;
    this.#layout(d);
    const r = this.r;
    const f = inMs / FRAME_MS; // card frames since the graphic entered

    // two lines settle in turn: one snappy progress drives position, blur and opacity
    this.#line(r.line1, f, 0);
    this.#line(r.line2, f, 4);

    // marker stroke: drawn left to right on f32-42 with an ease-out, after the title has settled
    if (this.stroke) {
      const { len, s } = this.stroke;
      const draw = clamp01((f - 32) / 10);
      const drawE = 1 - Math.pow(1 - draw, 2.2);
      const right = (len - drawE * (len + 6)) * s;
      r.svg.style.visibility = draw > 0 ? 'visible' : 'hidden';
      r.svg.style.clipPath = `inset(${(-20 * s).toFixed(2)}px ${right.toFixed(2)}px ${(4 * s).toFixed(2)}px 0px)`;
    }

    // very slow push-in over the whole card
    const push = 1 + 0.015 * ramp(f, 0, 74, EASE.smooth);
    r.push.style.transform = `scale(${push.toFixed(5)})`;

    // exit (PROPOSAL): the text drifts up, blurs and fades together; the paper stays until the end
    if (outP > 0) {
      const x = outP * outP;
      r.exit.style.opacity = String(1 - x);
      r.exit.style.transform = `translateY(${(-36 * x).toFixed(3)}px)`;
      r.exit.style.filter = `blur(${(8 * x).toFixed(2)}px)`;
    } else {
      r.exit.style.opacity = '';
      r.exit.style.transform = '';
      r.exit.style.filter = '';
    }

    // film grain on the paper: a new tile and offset every 2 card frames
    if (!d.transparent) {
      const k = Math.floor(f / 2 + 1e-6);
      r.grain.style.backgroundImage = GRAIN[k % 6];
      r.grain.style.backgroundPosition = `${Math.floor(hash(k * 3 + 1) * 256)}px ${Math.floor(hash(k * 7 + 2) * 256)}px`;
    }
    return true;
  }

  #line(el, f, delay) {
    const e = ramp(f, delay, 22, EASE.snappy);
    el.style.opacity = String(Math.min(1, e * 1.4));
    el.style.transform = `translateY(${((1 - e) * 36).toFixed(3)}px)`;
    el.style.filter = e < 0.999 ? `blur(${((1 - e) * 8).toFixed(2)}px)` : 'none';
  }

  // Text, sizes and the stroke shape. Runs only when the data or the frame size changes.
  #layout(d) {
    const W = this.clientWidth || this.res?.width || 1920;
    const H = this.clientHeight || this.res?.height || 1080;
    const fam = familyCss(d.fonts);
    const icon = d.icon ? this.iconDone.get(d.icon) : null;
    const showIcon = !!icon?.ok;
    const key = JSON.stringify([W, H, d, showIcon, this.fontDone.has(`${fam}\n${d.line1}\n${d.line2}`)]);
    if (key === this.layoutKey) return;
    this.layoutKey = key;
    const r = this.r;

    // stage with a 1080 px short side, scaled to the frame
    const k = Math.min(W, H) / SHORT_SIDE;
    const sw = W / k;
    const sh = H / k;
    r.stage.style.width = `${sw}px`;
    r.stage.style.height = `${sh}px`;
    r.stage.style.transform = `scale(${k})`;
    r.paper.style.display = d.transparent ? 'none' : '';

    r.block.style.fontFamily = fam;
    r.block.style.color = d.textColor;
    r.kw.style.fontStyle = d.italic ? 'italic' : 'normal';
    r.path.setAttribute('fill', d.markerColor);

    const hit = findKeyword(d);
    fillLine(r.t1, d.line1, hit?.line === 1 ? hit.at : -1, d.keyword, r.kw, r.kwText);
    fillLine(r.t2, d.line2, hit?.line === 2 ? hit.at : -1, d.keyword, r.kw, r.kwText);
    if (showIcon && r.iconSlot.firstChild !== icon.img) r.iconSlot.replaceChildren(icon.img);
    r.iconSlot.style.display = showIcon ? 'block' : 'none';
    r.line1.style.display = d.line1 ? 'flex' : 'none';
    r.line2.style.display = d.line2 || showIcon ? 'flex' : 'none';
    r.line1.style.marginBottom = '0px';

    // sizes: the icon is 0.8 em tall; long lines shrink the whole block to 88 % of the frame width
    const aspect = showIcon && icon.w > 0 && icon.h > 0 ? Math.min(4, Math.max(0.25, icon.w / icon.h)) : 1;
    const size = (fs) => {
      r.block.style.fontSize = `${fs}px`;
      r.iconSlot.style.height = `${fs * 0.8}px`;
      r.iconSlot.style.width = `${fs * 0.8 * aspect}px`;
      r.iconSlot.style.marginRight = d.line2 ? `${fs * 0.2}px` : '0px';
    };
    let fs = d.fontSize;
    size(fs);
    const row2 = (showIcon ? r.iconSlot.offsetWidth + (d.line2 ? fs * 0.2 : 0) : 0) + (d.line2 ? r.t2.offsetWidth : 0);
    const widest = Math.max(d.line1 ? r.t1.offsetWidth : 0, row2, 1);
    const fit = Math.min(1, (0.88 * sw) / widest, (0.8 * sh) / Math.max(1, r.block.offsetHeight));
    if (fit < 1) {
      fs *= fit;
      size(fs);
    }

    if (!hit) {
      this.stroke = null;
      r.svg.style.display = 'none';
      return;
    }
    // stroke: keyword width + 24, starting 12 to the left of it (card values at 118 px, scaled by s).
    // Its top follows the keyword's ink bottom: in the card's own render the stroke's y=0 is 2.5 px above
    // the bottom of "new". Chinese glyphs reach lower than Latin ones, so the stroke moves down with them.
    const s = fs / DESIGN_FONT;
    const len = r.kw.offsetWidth / s + 24;
    this.ctx.font = `${d.italic ? 'italic ' : ''}700 ${fs}px ${fam}`;
    const desc = this.ctx.measureText(d.keyword).actualBoundingBoxDescent || 0;
    const anchor = r.kwBase.offsetTop + Math.min(Math.max(0, desc), 0.12 * fs) - 2.5 * s;
    const rise = d.italic ? Math.min(14, Math.max(5, (9 * len) / 252)) : 0;
    const stroke = buildStroke(len, rise);
    r.path.setAttribute('d', stroke.d);
    r.svg.setAttribute('viewBox', `0 0 ${len.toFixed(2)} 44`);
    r.svg.style.display = '';
    r.svg.style.left = `${(-12 * s).toFixed(2)}px`;
    r.svg.style.top = `${anchor.toFixed(2)}px`;
    r.svg.style.width = `${(len * s).toFixed(2)}px`;
    r.svg.style.height = `${(44 * s).toFixed(2)}px`;
    this.stroke = { len, s };

    // A stroke under line 1 must stay clear of line 2. Latin text leaves plenty of room at the card's
    // 1.12 line height; Chinese glyphs fill the line, so open the gap just enough (12 px at 118 px).
    if (hit.line === 1 && r.line2.style.display !== 'none') {
      const base1 = r.kw.offsetTop + r.kwBase.offsetTop; // both lines share one line-box layout,
      const base2 = base1 + (r.line2.offsetTop - r.line1.offsetTop); // so their baselines sit alike
      this.ctx.font = `700 ${fs}px ${fam}`;
      let top2 = d.line2 ? base2 - this.ctx.measureText(d.line2).actualBoundingBoxAscent : Infinity;
      if (showIcon) top2 = Math.min(top2, r.line2.offsetTop + (r.line2.offsetHeight - r.iconSlot.offsetHeight) / 2);
      const bottom = r.kw.offsetTop + anchor + (stroke.maxY + 0.9) * s; // 0.9: dry-brush displacement
      const short = 12 * s - (top2 - bottom);
      if (short > 0) r.line1.style.marginBottom = `${short.toFixed(2)}px`;
    }
  }
}
