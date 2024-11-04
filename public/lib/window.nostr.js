var ul = Object.defineProperty;
var fl = (Ze, M, He) =>
  M in Ze ? ul(Ze, M, { enumerable: !0, configurable: !0, writable: !0, value: He }) : (Ze[M] = He);
var A = (Ze, M, He) => (fl(Ze, typeof M != "symbol" ? M + "" : M, He), He);
(function () {
  "use strict";
  var zo, Ko, Wo, Do, Vo;
  const Ze =
    '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed}.absolute{position:absolute}.bottom-1{bottom:.25rem}.right-2{right:.5rem}.right-3{right:.75rem}.top-0{top:0}.z-\\[9000\\]{z-index:9000}.m-auto{margin:auto}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-2{margin-left:.5rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.h-10{height:2.5rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.w-10{width:2.5rem}.w-40{width:10rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-full{width:100%}.max-w-56{max-width:14rem}@keyframes moveIn{0%{transform:translateY(-10px)}to{transform:translateY(0)}}.animate-fadein{animation:fadeIn 1s ease-in-out,moveIn 1s ease-in-out}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate-show{animation:fadeIn .2s ease-in-out}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-grabbing{cursor:grabbing}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.overflow-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border-0{border-width:0px}.border-2{border-width:2px}.border-solid{border-style:solid}.border-transparent{border-color:transparent}.bg-cyan-700{--tw-bg-opacity: 1;background-color:rgb(14 116 144 / var(--tw-bg-opacity))}.bg-cyan-800{--tw-bg-opacity: 1;background-color:rgb(21 94 117 / var(--tw-bg-opacity))}.bg-cyan-900{--tw-bg-opacity: 1;background-color:rgb(22 78 99 / var(--tw-bg-opacity))}.bg-cyan-950{--tw-bg-opacity: 1;background-color:rgb(8 51 68 / var(--tw-bg-opacity))}.bg-green-700{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.bg-green-800{--tw-bg-opacity: 1;background-color:rgb(22 101 52 / var(--tw-bg-opacity))}.bg-green-900{--tw-bg-opacity: 1;background-color:rgb(20 83 45 / var(--tw-bg-opacity))}.bg-green-950{--tw-bg-opacity: 1;background-color:rgb(5 46 22 / var(--tw-bg-opacity))}.bg-neutral-700{--tw-bg-opacity: 1;background-color:rgb(64 64 64 / var(--tw-bg-opacity))}.bg-neutral-800{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity))}.bg-neutral-900{--tw-bg-opacity: 1;background-color:rgb(23 23 23 / var(--tw-bg-opacity))}.bg-neutral-950{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity))}.bg-orange-700{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity))}.bg-orange-800{--tw-bg-opacity: 1;background-color:rgb(154 52 18 / var(--tw-bg-opacity))}.bg-orange-900{--tw-bg-opacity: 1;background-color:rgb(124 45 18 / var(--tw-bg-opacity))}.bg-orange-950{--tw-bg-opacity: 1;background-color:rgb(67 20 7 / var(--tw-bg-opacity))}.bg-purple-700{--tw-bg-opacity: 1;background-color:rgb(126 34 206 / var(--tw-bg-opacity))}.bg-purple-800{--tw-bg-opacity: 1;background-color:rgb(107 33 168 / var(--tw-bg-opacity))}.bg-purple-900{--tw-bg-opacity: 1;background-color:rgb(88 28 135 / var(--tw-bg-opacity))}.bg-purple-950{--tw-bg-opacity: 1;background-color:rgb(59 7 100 / var(--tw-bg-opacity))}.bg-red-700{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.bg-red-800{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.bg-red-900{--tw-bg-opacity: 1;background-color:rgb(127 29 29 / var(--tw-bg-opacity))}.bg-red-950{--tw-bg-opacity: 1;background-color:rgb(69 10 10 / var(--tw-bg-opacity))}.bg-stone-700{--tw-bg-opacity: 1;background-color:rgb(68 64 60 / var(--tw-bg-opacity))}.bg-stone-800{--tw-bg-opacity: 1;background-color:rgb(41 37 36 / var(--tw-bg-opacity))}.bg-stone-900{--tw-bg-opacity: 1;background-color:rgb(28 25 23 / var(--tw-bg-opacity))}.bg-stone-950{--tw-bg-opacity: 1;background-color:rgb(12 10 9 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-cyan-900{--tw-gradient-from: #164e63 var(--tw-gradient-from-position);--tw-gradient-to: rgb(22 78 99 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-green-900{--tw-gradient-from: #14532d var(--tw-gradient-from-position);--tw-gradient-to: rgb(20 83 45 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-neutral-900{--tw-gradient-from: #171717 var(--tw-gradient-from-position);--tw-gradient-to: rgb(23 23 23 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-orange-900{--tw-gradient-from: #7c2d12 var(--tw-gradient-from-position);--tw-gradient-to: rgb(124 45 18 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-purple-900{--tw-gradient-from: #581c87 var(--tw-gradient-from-position);--tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-red-900{--tw-gradient-from: #7f1d1d var(--tw-gradient-from-position);--tw-gradient-to: rgb(127 29 29 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-stone-900{--tw-gradient-from: #1c1917 var(--tw-gradient-from-position);--tw-gradient-to: rgb(28 25 23 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-cyan-700{--tw-gradient-to: #0e7490 var(--tw-gradient-to-position)}.to-green-700{--tw-gradient-to: #15803d var(--tw-gradient-to-position)}.to-neutral-700{--tw-gradient-to: #404040 var(--tw-gradient-to-position)}.to-orange-700{--tw-gradient-to: #c2410c var(--tw-gradient-to-position)}.to-purple-700{--tw-gradient-to: #7e22ce var(--tw-gradient-to-position)}.to-red-700{--tw-gradient-to: #b91c1c var(--tw-gradient-to-position)}.to-stone-700{--tw-gradient-to: #44403c var(--tw-gradient-to-position)}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.leading-3{line-height:.75rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.text-cyan-600{--tw-text-opacity: 1;color:rgb(8 145 178 / var(--tw-text-opacity))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.text-neutral-600{--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity))}.text-neutral-800{--tw-text-opacity: 1;color:rgb(38 38 38 / var(--tw-text-opacity))}.text-orange-600{--tw-text-opacity: 1;color:rgb(234 88 12 / var(--tw-text-opacity))}.text-purple-600{--tw-text-opacity: 1;color:rgb(147 51 234 / var(--tw-text-opacity))}.text-red-400{--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-stone-600{--tw-text-opacity: 1;color:rgb(87 83 78 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.decoration-2{text-decoration-thickness:2px}.underline-offset-4{text-underline-offset:4px}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.shadow-\\[0_0px_10px_0px_rgba\\(0\\,0\\,0\\,0\\.3\\)\\]{--tw-shadow: 0 0px 10px 0px rgba(0,0,0,.3);--tw-shadow-colored: 0 0px 10px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_0px_30px_0px_rgba\\(0\\,0\\,0\\,0\\.6\\)\\]{--tw-shadow: 0 0px 30px 0px rgba(0,0,0,.6);--tw-shadow-colored: 0 0px 30px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline-dashed{outline-style:dashed}.outline-1{outline-width:1px}.outline-offset-4{outline-offset:4px}.outline-cyan-500{outline-color:#06b6d4}.outline-green-500{outline-color:#22c55e}.outline-neutral-500{outline-color:#737373}.outline-orange-500{outline-color:#f97316}.outline-purple-500{outline-color:#a855f7}.outline-red-500{outline-color:#ef4444}.outline-stone-500{outline-color:#78716c}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.hover\\:bg-cyan-700:hover{--tw-bg-opacity: 1;background-color:rgb(14 116 144 / var(--tw-bg-opacity))}.hover\\:bg-cyan-800:hover{--tw-bg-opacity: 1;background-color:rgb(21 94 117 / var(--tw-bg-opacity))}.hover\\:bg-cyan-900:hover{--tw-bg-opacity: 1;background-color:rgb(22 78 99 / var(--tw-bg-opacity))}.hover\\:bg-cyan-950:hover{--tw-bg-opacity: 1;background-color:rgb(8 51 68 / var(--tw-bg-opacity))}.hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.hover\\:bg-green-800:hover{--tw-bg-opacity: 1;background-color:rgb(22 101 52 / var(--tw-bg-opacity))}.hover\\:bg-green-900:hover{--tw-bg-opacity: 1;background-color:rgb(20 83 45 / var(--tw-bg-opacity))}.hover\\:bg-green-950:hover{--tw-bg-opacity: 1;background-color:rgb(5 46 22 / var(--tw-bg-opacity))}.hover\\:bg-neutral-700:hover{--tw-bg-opacity: 1;background-color:rgb(64 64 64 / var(--tw-bg-opacity))}.hover\\:bg-neutral-800:hover{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity))}.hover\\:bg-neutral-900:hover{--tw-bg-opacity: 1;background-color:rgb(23 23 23 / var(--tw-bg-opacity))}.hover\\:bg-neutral-950:hover{--tw-bg-opacity: 1;background-color:rgb(10 10 10 / var(--tw-bg-opacity))}.hover\\:bg-orange-700:hover{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity))}.hover\\:bg-orange-800:hover{--tw-bg-opacity: 1;background-color:rgb(154 52 18 / var(--tw-bg-opacity))}.hover\\:bg-orange-900:hover{--tw-bg-opacity: 1;background-color:rgb(124 45 18 / var(--tw-bg-opacity))}.hover\\:bg-orange-950:hover{--tw-bg-opacity: 1;background-color:rgb(67 20 7 / var(--tw-bg-opacity))}.hover\\:bg-purple-700:hover{--tw-bg-opacity: 1;background-color:rgb(126 34 206 / var(--tw-bg-opacity))}.hover\\:bg-purple-800:hover{--tw-bg-opacity: 1;background-color:rgb(107 33 168 / var(--tw-bg-opacity))}.hover\\:bg-purple-900:hover{--tw-bg-opacity: 1;background-color:rgb(88 28 135 / var(--tw-bg-opacity))}.hover\\:bg-purple-950:hover{--tw-bg-opacity: 1;background-color:rgb(59 7 100 / var(--tw-bg-opacity))}.hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:bg-red-800:hover{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.hover\\:bg-red-900:hover{--tw-bg-opacity: 1;background-color:rgb(127 29 29 / var(--tw-bg-opacity))}.hover\\:bg-red-950:hover{--tw-bg-opacity: 1;background-color:rgb(69 10 10 / var(--tw-bg-opacity))}.hover\\:bg-stone-700:hover{--tw-bg-opacity: 1;background-color:rgb(68 64 60 / var(--tw-bg-opacity))}.hover\\:bg-stone-800:hover{--tw-bg-opacity: 1;background-color:rgb(41 37 36 / var(--tw-bg-opacity))}.hover\\:bg-stone-900:hover{--tw-bg-opacity: 1;background-color:rgb(28 25 23 / var(--tw-bg-opacity))}.hover\\:bg-stone-950:hover{--tw-bg-opacity: 1;background-color:rgb(12 10 9 / var(--tw-bg-opacity))}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:bg-neutral-400:disabled{--tw-bg-opacity: 1;background-color:rgb(163 163 163 / var(--tw-bg-opacity))}.disabled\\:text-neutral-200:disabled{--tw-text-opacity: 1;color:rgb(229 229 229 / var(--tw-text-opacity))}.group:hover .group-hover\\:underline{text-decoration-line:underline}@media (min-width: 640px){.sm\\:w-96{width:24rem}}';
  function M() {}
  function He(t) {
    return t();
  }
  function er() {
    return Object.create(null);
  }
  function Re(t) {
    t.forEach(He);
  }
  function en(t) {
    return typeof t == "function";
  }
  function tn(t, e) {
    return t != t ? e == e : t !== e || (t && typeof t == "object") || typeof t == "function";
  }
  let Nt;
  function ot(t, e) {
    return t === e ? !0 : (Nt || (Nt = document.createElement("a")), (Nt.href = e), t === Nt.href);
  }
  function Go(t) {
    return Object.keys(t).length === 0;
  }
  function Zo(t, ...e) {
    if (t == null) {
      for (const r of e) r(void 0);
      return M;
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function Jo(t, e, n) {
    t.$$.on_destroy.push(Zo(e, n));
  }
  const Qo = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
  function O(t, e) {
    t.appendChild(e);
  }
  function D(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function W(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function Xo(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function P(t) {
    return document.createElement(t);
  }
  function nn(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function Y(t) {
    return document.createTextNode(t);
  }
  function G() {
    return Y(" ");
  }
  function tr() {
    return Y("");
  }
  function re(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function k(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function ei(t) {
    return Array.from(t.childNodes);
  }
  function Me(t, e) {
    (e = "" + e), t.data !== e && (t.data = e);
  }
  function it(t, e) {
    t.value = e ?? "";
  }
  function nr(t, e, n) {
    for (let r = 0; r < t.options.length; r += 1) {
      const o = t.options[r];
      if (o.__value === e) {
        o.selected = !0;
        return;
      }
    }
    (!n || e !== void 0) && (t.selectedIndex = -1);
  }
  function ti(t) {
    const e = t.querySelector(":checked");
    return e && e.__value;
  }
  function rr(t, e, n) {
    t.classList.toggle(e, !!n);
  }
  let xt;
  function vt(t) {
    xt = t;
  }
  function ni() {
    if (!xt) throw new Error("Function called outside component initialization");
    return xt;
  }
  function ri(t) {
    ni().$$.on_mount.push(t);
  }
  const st = [],
    Et = [];
  let ct = [];
  const or = [],
    oi = Promise.resolve();
  let rn = !1;
  function ii() {
    rn || ((rn = !0), oi.then(ir));
  }
  function Lt(t) {
    ct.push(t);
  }
  const on = new Set();
  let at = 0;
  function ir() {
    if (at !== 0) return;
    const t = xt;
    do {
      try {
        for (; at < st.length; ) {
          const e = st[at];
          at++, vt(e), si(e.$$);
        }
      } catch (e) {
        throw ((st.length = 0), (at = 0), e);
      }
      for (vt(null), st.length = 0, at = 0; Et.length; ) Et.pop()();
      for (let e = 0; e < ct.length; e += 1) {
        const n = ct[e];
        on.has(n) || (on.add(n), n());
      }
      ct.length = 0;
    } while (st.length);
    for (; or.length; ) or.pop()();
    (rn = !1), on.clear(), vt(t);
  }
  function si(t) {
    if (t.fragment !== null) {
      t.update(), Re(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Lt);
    }
  }
  function ci(t) {
    const e = [],
      n = [];
    ct.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))), n.forEach((r) => r()), (ct = e);
  }
  const Ct = new Set();
  let Je;
  function Ut() {
    Je = { r: 0, c: [], p: Je };
  }
  function Pt() {
    Je.r || Re(Je.c), (Je = Je.p);
  }
  function ve(t, e) {
    t && t.i && (Ct.delete(t), t.i(e));
  }
  function Ee(t, e, n, r) {
    if (t && t.o) {
      if (Ct.has(t)) return;
      Ct.add(t),
        Je.c.push(() => {
          Ct.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    } else r && r();
  }
  function sr(t) {
    return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
  }
  function cr(t) {
    t && t.c();
  }
  function sn(t, e, n) {
    const { fragment: r, after_update: o } = t.$$;
    r && r.m(e, n),
      Lt(() => {
        const i = t.$$.on_mount.map(He).filter(en);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Re(i), (t.$$.on_mount = []);
      }),
      o.forEach(Lt);
  }
  function cn(t, e) {
    const n = t.$$;
    n.fragment !== null &&
      (ci(n.after_update),
      Re(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function ai(t, e) {
    t.$$.dirty[0] === -1 && (st.push(t), ii(), t.$$.dirty.fill(0)), (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function ar(t, e, n, r, o, i, s = null, c = [-1]) {
    const a = xt;
    vt(t);
    const l = (t.$$ = {
      fragment: null,
      ctx: [],
      props: i,
      update: M,
      not_equal: o,
      bound: er(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (a ? a.$$.context : [])),
      callbacks: er(),
      dirty: c,
      skip_bound: !1,
      root: e.target || a.$$.root,
    });
    s && s(l.root);
    let f = !1;
    if (
      ((l.ctx = n
        ? n(t, e.props || {}, (u, p, ...h) => {
            const b = h.length ? h[0] : p;
            return (
              l.ctx && o(l.ctx[u], (l.ctx[u] = b)) && (!l.skip_bound && l.bound[u] && l.bound[u](b), f && ai(t, u)), p
            );
          })
        : []),
      l.update(),
      (f = !0),
      Re(l.before_update),
      (l.fragment = r ? r(l.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        const u = ei(e.target);
        l.fragment && l.fragment.l(u), u.forEach(W);
      } else l.fragment && l.fragment.c();
      e.intro && ve(t.$$.fragment), sn(t, e.target, e.anchor), ir();
    }
    vt(a);
  }
  class lr {
    constructor() {
      A(this, "$$");
      A(this, "$$set");
    }
    $destroy() {
      cn(this, 1), (this.$destroy = M);
    }
    $on(e, n) {
      if (!en(n)) return M;
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        r.push(n),
        () => {
          const o = r.indexOf(n);
          o !== -1 && r.splice(o, 1);
        }
      );
    }
    $set(e) {
      this.$$set && !Go(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const li = "4";
  typeof window < "u" && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(li);
  function ui(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var an = { exports: {} };
  function ur(t, e = 100, n = {}) {
    if (typeof t != "function")
      throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t}\`.`);
    if (e < 0) throw new RangeError("`wait` must not be negative.");
    const { immediate: r } = typeof n == "boolean" ? { immediate: n } : n;
    let o, i, s, c, a;
    function l() {
      const u = Date.now() - c;
      if (u < e && u >= 0) s = setTimeout(l, e - u);
      else if (((s = void 0), !r)) {
        const p = o,
          h = i;
        (o = void 0), (i = void 0), (a = t.apply(p, h));
      }
    }
    const f = function (...u) {
      if (o && this !== o) throw new Error("Debounced method called with different contexts.");
      (o = this), (i = u), (c = Date.now());
      const p = r && !s;
      if ((s || (s = setTimeout(l, e)), p)) {
        const h = o,
          b = i;
        (o = void 0), (i = void 0), (a = t.apply(h, b));
      }
      return a;
    };
    return (
      (f.clear = () => {
        s && (clearTimeout(s), (s = void 0));
      }),
      (f.flush = () => {
        if (!s) return;
        const u = o,
          p = i;
        (o = void 0), (i = void 0), (a = t.apply(u, p)), clearTimeout(s), (s = void 0);
      }),
      f
    );
  }
  (an.exports.debounce = ur), (an.exports = ur);
  var fi = an.exports;
  const fr = ui(fi),
    ln = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const un = (t) => t instanceof Uint8Array,
    fn = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    _e = (t, e) => (t << (32 - e)) | (t >>> e);
  if (!(new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68))
    throw new Error("Non little-endian hardware is not supported");
  const di = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
  function ue(t) {
    if (!un(t)) throw new Error("Uint8Array expected");
    let e = "";
    for (let n = 0; n < t.length; n++) e += di[t[n]];
    return e;
  }
  function dr(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(e / 2);
    for (let r = 0; r < n.length; r++) {
      const o = r * 2,
        i = t.slice(o, o + 2),
        s = Number.parseInt(i, 16);
      if (Number.isNaN(s) || s < 0) throw new Error("Invalid byte sequence");
      n[r] = s;
    }
    return n;
  }
  function hi(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function _t(t) {
    if ((typeof t == "string" && (t = hi(t)), !un(t))) throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t;
  }
  function gi(...t) {
    const e = new Uint8Array(t.reduce((r, o) => r + o.length, 0));
    let n = 0;
    return (
      t.forEach((r) => {
        if (!un(r)) throw new Error("Uint8Array expected");
        e.set(r, n), (n += r.length);
      }),
      e
    );
  }
  let hr = class {
    clone() {
      return this._cloneInto();
    }
  };
  function gr(t) {
    const e = (r) => t().update(_t(r)).digest(),
      n = t();
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
  }
  function pi(t = 32) {
    if (ln && typeof ln.getRandomValues == "function") return ln.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  function pr(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
  }
  function br(t, ...e) {
    if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length))
      throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
  }
  function bi(t) {
    if (typeof t != "function" || typeof t.create != "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    pr(t.outputLen), pr(t.blockLen);
  }
  function Ht(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function wi(t, e) {
    br(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
  }
  const dn = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const wr = (t) => t instanceof Uint8Array,
    hn = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    ke = (t, e) => (t << (32 - e)) | (t >>> e);
  if (!(new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68))
    throw new Error("Non little-endian hardware is not supported");
  function yi(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function gn(t) {
    if ((typeof t == "string" && (t = yi(t)), !wr(t))) throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t;
  }
  function mi(...t) {
    const e = new Uint8Array(t.reduce((r, o) => r + o.length, 0));
    let n = 0;
    return (
      t.forEach((r) => {
        if (!wr(r)) throw new Error("Uint8Array expected");
        e.set(r, n), (n += r.length);
      }),
      e
    );
  }
  class yr {
    clone() {
      return this._cloneInto();
    }
  }
  function xi(t) {
    const e = (r) => t().update(gn(r)).digest(),
      n = t();
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
  }
  function mr(t = 32) {
    if (dn && typeof dn.getRandomValues == "function") return dn.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  function vi(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const o = BigInt(32),
      i = BigInt(4294967295),
      s = Number((n >> o) & i),
      c = Number(n & i),
      a = r ? 4 : 0,
      l = r ? 0 : 4;
    t.setUint32(e + a, s, r), t.setUint32(e + l, c, r);
  }
  let Ei = class extends yr {
    constructor(e, n, r, o) {
      super(),
        (this.blockLen = e),
        (this.outputLen = n),
        (this.padOffset = r),
        (this.isLE = o),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = hn(this.buffer));
    }
    update(e) {
      Ht(this);
      const { view: n, buffer: r, blockLen: o } = this;
      e = gn(e);
      const i = e.length;
      for (let s = 0; s < i; ) {
        const c = Math.min(o - this.pos, i - s);
        if (c === o) {
          const a = hn(e);
          for (; o <= i - s; s += o) this.process(a, s);
          continue;
        }
        r.set(e.subarray(s, s + c), this.pos),
          (this.pos += c),
          (s += c),
          this.pos === o && (this.process(n, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      Ht(this), wi(e, this), (this.finished = !0);
      const { buffer: n, view: r, blockLen: o, isLE: i } = this;
      let { pos: s } = this;
      (n[s++] = 128), this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), (s = 0));
      for (let u = s; u < o; u++) n[u] = 0;
      vi(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
      const c = hn(e),
        a = this.outputLen;
      if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = a / 4,
        f = this.get();
      if (l > f.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const r = e.slice(0, n);
      return this.destroy(), r;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
      return (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e;
    }
  };
  const _i = (t, e, n) => (t & e) ^ (~t & n),
    ki = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
    Si = new Uint32Array([
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
      310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
      3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
      3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
      1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
    ]),
    je = new Uint32Array([
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
    ]),
    qe = new Uint32Array(64);
  let Ai = class extends Ei {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = je[0] | 0),
        (this.B = je[1] | 0),
        (this.C = je[2] | 0),
        (this.D = je[3] | 0),
        (this.E = je[4] | 0),
        (this.F = je[5] | 0),
        (this.G = je[6] | 0),
        (this.H = je[7] | 0);
    }
    get() {
      const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: a } = this;
      return [e, n, r, o, i, s, c, a];
    }
    set(e, n, r, o, i, s, c, a) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = o | 0),
        (this.E = i | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = a | 0);
    }
    process(e, n) {
      for (let u = 0; u < 16; u++, n += 4) qe[u] = e.getUint32(n, !1);
      for (let u = 16; u < 64; u++) {
        const p = qe[u - 15],
          h = qe[u - 2],
          b = ke(p, 7) ^ ke(p, 18) ^ (p >>> 3),
          d = ke(h, 17) ^ ke(h, 19) ^ (h >>> 10);
        qe[u] = (d + qe[u - 7] + b + qe[u - 16]) | 0;
      }
      let { A: r, B: o, C: i, D: s, E: c, F: a, G: l, H: f } = this;
      for (let u = 0; u < 64; u++) {
        const p = ke(c, 6) ^ ke(c, 11) ^ ke(c, 25),
          h = (f + p + _i(c, a, l) + Si[u] + qe[u]) | 0,
          d = ((ke(r, 2) ^ ke(r, 13) ^ ke(r, 22)) + ki(r, o, i)) | 0;
        (f = l), (l = a), (a = c), (c = (s + h) | 0), (s = i), (i = o), (o = r), (r = (h + d) | 0);
      }
      (r = (r + this.A) | 0),
        (o = (o + this.B) | 0),
        (i = (i + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (a = (a + this.F) | 0),
        (l = (l + this.G) | 0),
        (f = (f + this.H) | 0),
        this.set(r, o, i, s, c, a, l, f);
    }
    roundClean() {
      qe.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  };
  const pn = xi(() => new Ai());
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const xr = BigInt(0),
    Rt = BigInt(1),
    Bi = BigInt(2),
    Mt = (t) => t instanceof Uint8Array,
    Ii = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
  function lt(t) {
    if (!Mt(t)) throw new Error("Uint8Array expected");
    let e = "";
    for (let n = 0; n < t.length; n++) e += Ii[t[n]];
    return e;
  }
  function vr(t) {
    const e = t.toString(16);
    return e.length & 1 ? `0${e}` : e;
  }
  function bn(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return BigInt(t === "" ? "0" : `0x${t}`);
  }
  function ut(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(e / 2);
    for (let r = 0; r < n.length; r++) {
      const o = r * 2,
        i = t.slice(o, o + 2),
        s = Number.parseInt(i, 16);
      if (Number.isNaN(s) || s < 0) throw new Error("Invalid byte sequence");
      n[r] = s;
    }
    return n;
  }
  function de(t) {
    return bn(lt(t));
  }
  function wn(t) {
    if (!Mt(t)) throw new Error("Uint8Array expected");
    return bn(lt(Uint8Array.from(t).reverse()));
  }
  function $e(t, e) {
    return ut(t.toString(16).padStart(e * 2, "0"));
  }
  function yn(t, e) {
    return $e(t, e).reverse();
  }
  function Oi(t) {
    return ut(vr(t));
  }
  function le(t, e, n) {
    let r;
    if (typeof e == "string")
      try {
        r = ut(e);
      } catch (i) {
        throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${i}`);
      }
    else if (Mt(e)) r = Uint8Array.from(e);
    else throw new Error(`${t} must be hex string or Uint8Array`);
    const o = r.length;
    if (typeof n == "number" && o !== n) throw new Error(`${t} expected ${n} bytes, got ${o}`);
    return r;
  }
  function Qe(...t) {
    const e = new Uint8Array(t.reduce((r, o) => r + o.length, 0));
    let n = 0;
    return (
      t.forEach((r) => {
        if (!Mt(r)) throw new Error("Uint8Array expected");
        e.set(r, n), (n += r.length);
      }),
      e
    );
  }
  function Ti(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function Ni(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Li(t) {
    let e;
    for (e = 0; t > xr; t >>= Rt, e += 1);
    return e;
  }
  function Ci(t, e) {
    return (t >> BigInt(e)) & Rt;
  }
  const Ui = (t, e, n) => t | ((n ? Rt : xr) << BigInt(e)),
    mn = (t) => (Bi << BigInt(t - 1)) - Rt,
    xn = (t) => new Uint8Array(t),
    Er = (t) => Uint8Array.from(t);
  function _r(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let r = xn(t),
      o = xn(t),
      i = 0;
    const s = () => {
        r.fill(1), o.fill(0), (i = 0);
      },
      c = (...u) => n(o, r, ...u),
      a = (u = xn()) => {
        (o = c(Er([0]), u)), (r = c()), u.length !== 0 && ((o = c(Er([1]), u)), (r = c()));
      },
      l = () => {
        if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
        let u = 0;
        const p = [];
        for (; u < e; ) {
          r = c();
          const h = r.slice();
          p.push(h), (u += r.length);
        }
        return Qe(...p);
      };
    return (u, p) => {
      s(), a(u);
      let h;
      for (; !(h = p(l())); ) a();
      return s(), h;
    };
  }
  const Pi = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || t instanceof Uint8Array,
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen),
  };
  function kt(t, e, n = {}) {
    const r = (o, i, s) => {
      const c = Pi[i];
      if (typeof c != "function") throw new Error(`Invalid validator "${i}", expected function`);
      const a = t[o];
      if (!(s && a === void 0) && !c(a, t))
        throw new Error(`Invalid param ${String(o)}=${a} (${typeof a}), expected ${i}`);
    };
    for (const [o, i] of Object.entries(e)) r(o, i, !1);
    for (const [o, i] of Object.entries(n)) r(o, i, !0);
    return t;
  }
  const Hi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        bitGet: Ci,
        bitLen: Li,
        bitMask: mn,
        bitSet: Ui,
        bytesToHex: lt,
        bytesToNumberBE: de,
        bytesToNumberLE: wn,
        concatBytes: Qe,
        createHmacDrbg: _r,
        ensureBytes: le,
        equalBytes: Ti,
        hexToBytes: ut,
        hexToNumber: bn,
        numberToBytesBE: $e,
        numberToBytesLE: yn,
        numberToHexUnpadded: vr,
        numberToVarBytesBE: Oi,
        utf8ToBytes: Ni,
        validateObject: kt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const oe = BigInt(0),
    ee = BigInt(1),
    Xe = BigInt(2),
    Ri = BigInt(3),
    vn = BigInt(4),
    kr = BigInt(5),
    Sr = BigInt(8);
  BigInt(9), BigInt(16);
  function ce(t, e) {
    const n = t % e;
    return n >= oe ? n : e + n;
  }
  function Mi(t, e, n) {
    if (n <= oe || e < oe) throw new Error("Expected power/modulo > 0");
    if (n === ee) return oe;
    let r = ee;
    for (; e > oe; ) e & ee && (r = (r * t) % n), (t = (t * t) % n), (e >>= ee);
    return r;
  }
  function pe(t, e, n) {
    let r = t;
    for (; e-- > oe; ) (r *= r), (r %= n);
    return r;
  }
  function En(t, e) {
    if (t === oe || e <= oe) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = ce(t, e),
      r = e,
      o = oe,
      i = ee;
    for (; n !== oe; ) {
      const c = r / n,
        a = r % n,
        l = o - i * c;
      (r = n), (n = a), (o = i), (i = l);
    }
    if (r !== ee) throw new Error("invert: does not exist");
    return ce(o, e);
  }
  function ji(t) {
    const e = (t - ee) / Xe;
    let n, r, o;
    for (n = t - ee, r = 0; n % Xe === oe; n /= Xe, r++);
    for (o = Xe; o < t && Mi(o, e, t) !== t - ee; o++);
    if (r === 1) {
      const s = (t + ee) / vn;
      return function (a, l) {
        const f = a.pow(l, s);
        if (!a.eql(a.sqr(f), l)) throw new Error("Cannot find square root");
        return f;
      };
    }
    const i = (n + ee) / Xe;
    return function (c, a) {
      if (c.pow(a, e) === c.neg(c.ONE)) throw new Error("Cannot find square root");
      let l = r,
        f = c.pow(c.mul(c.ONE, o), n),
        u = c.pow(a, i),
        p = c.pow(a, n);
      for (; !c.eql(p, c.ONE); ) {
        if (c.eql(p, c.ZERO)) return c.ZERO;
        let h = 1;
        for (let d = c.sqr(p); h < l && !c.eql(d, c.ONE); h++) d = c.sqr(d);
        const b = c.pow(f, ee << BigInt(l - h - 1));
        (f = c.sqr(b)), (u = c.mul(u, b)), (p = c.mul(p, f)), (l = h);
      }
      return u;
    };
  }
  function qi(t) {
    if (t % vn === Ri) {
      const e = (t + ee) / vn;
      return function (r, o) {
        const i = r.pow(o, e);
        if (!r.eql(r.sqr(i), o)) throw new Error("Cannot find square root");
        return i;
      };
    }
    if (t % Sr === kr) {
      const e = (t - kr) / Sr;
      return function (r, o) {
        const i = r.mul(o, Xe),
          s = r.pow(i, e),
          c = r.mul(o, s),
          a = r.mul(r.mul(c, Xe), s),
          l = r.mul(c, r.sub(a, r.ONE));
        if (!r.eql(r.sqr(l), o)) throw new Error("Cannot find square root");
        return l;
      };
    }
    return ji(t);
  }
  const $i = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN",
  ];
  function zi(t) {
    const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" },
      n = $i.reduce((r, o) => ((r[o] = "function"), r), e);
    return kt(t, n);
  }
  function Ki(t, e, n) {
    if (n < oe) throw new Error("Expected power > 0");
    if (n === oe) return t.ONE;
    if (n === ee) return e;
    let r = t.ONE,
      o = e;
    for (; n > oe; ) n & ee && (r = t.mul(r, o)), (o = t.sqr(o)), (n >>= ee);
    return r;
  }
  function Wi(t, e) {
    const n = new Array(e.length),
      r = e.reduce((i, s, c) => (t.is0(s) ? i : ((n[c] = i), t.mul(i, s))), t.ONE),
      o = t.inv(r);
    return e.reduceRight((i, s, c) => (t.is0(s) ? i : ((n[c] = t.mul(i, n[c])), t.mul(i, s))), o), n;
  }
  function Ar(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length,
      r = Math.ceil(n / 8);
    return { nBitLength: n, nByteLength: r };
  }
  function Di(t, e, n = !1, r = {}) {
    if (t <= oe) throw new Error(`Expected Field ORDER > 0, got ${t}`);
    const { nBitLength: o, nByteLength: i } = Ar(t, e);
    if (i > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const s = qi(t),
      c = Object.freeze({
        ORDER: t,
        BITS: o,
        BYTES: i,
        MASK: mn(o),
        ZERO: oe,
        ONE: ee,
        create: (a) => ce(a, t),
        isValid: (a) => {
          if (typeof a != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof a}`);
          return oe <= a && a < t;
        },
        is0: (a) => a === oe,
        isOdd: (a) => (a & ee) === ee,
        neg: (a) => ce(-a, t),
        eql: (a, l) => a === l,
        sqr: (a) => ce(a * a, t),
        add: (a, l) => ce(a + l, t),
        sub: (a, l) => ce(a - l, t),
        mul: (a, l) => ce(a * l, t),
        pow: (a, l) => Ki(c, a, l),
        div: (a, l) => ce(a * En(l, t), t),
        sqrN: (a) => a * a,
        addN: (a, l) => a + l,
        subN: (a, l) => a - l,
        mulN: (a, l) => a * l,
        inv: (a) => En(a, t),
        sqrt: r.sqrt || ((a) => s(c, a)),
        invertBatch: (a) => Wi(c, a),
        cmov: (a, l, f) => (f ? l : a),
        toBytes: (a) => (n ? yn(a, i) : $e(a, i)),
        fromBytes: (a) => {
          if (a.length !== i) throw new Error(`Fp.fromBytes: expected ${i}, got ${a.length}`);
          return n ? wn(a) : de(a);
        },
      });
    return Object.freeze(c);
  }
  function Br(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function Ir(t) {
    const e = Br(t);
    return e + Math.ceil(e / 2);
  }
  function Vi(t, e, n = !1) {
    const r = t.length,
      o = Br(e),
      i = Ir(e);
    if (r < 16 || r < i || r > 1024) throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
    const s = n ? de(t) : wn(t),
      c = ce(s, e - ee) + ee;
    return n ? yn(c, o) : $e(c, o);
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Yi = BigInt(0),
    _n = BigInt(1);
  function Fi(t, e) {
    const n = (o, i) => {
        const s = i.negate();
        return o ? s : i;
      },
      r = (o) => {
        const i = Math.ceil(e / o) + 1,
          s = 2 ** (o - 1);
        return { windows: i, windowSize: s };
      };
    return {
      constTimeNegate: n,
      unsafeLadder(o, i) {
        let s = t.ZERO,
          c = o;
        for (; i > Yi; ) i & _n && (s = s.add(c)), (c = c.double()), (i >>= _n);
        return s;
      },
      precomputeWindow(o, i) {
        const { windows: s, windowSize: c } = r(i),
          a = [];
        let l = o,
          f = l;
        for (let u = 0; u < s; u++) {
          (f = l), a.push(f);
          for (let p = 1; p < c; p++) (f = f.add(l)), a.push(f);
          l = f.double();
        }
        return a;
      },
      wNAF(o, i, s) {
        const { windows: c, windowSize: a } = r(o);
        let l = t.ZERO,
          f = t.BASE;
        const u = BigInt(2 ** o - 1),
          p = 2 ** o,
          h = BigInt(o);
        for (let b = 0; b < c; b++) {
          const d = b * a;
          let g = Number(s & u);
          (s >>= h), g > a && ((g -= p), (s += _n));
          const w = d,
            y = d + Math.abs(g) - 1,
            S = b % 2 !== 0,
            L = g < 0;
          g === 0 ? (f = f.add(n(S, i[w]))) : (l = l.add(n(L, i[y])));
        }
        return { p: l, f };
      },
      wNAFCached(o, i, s, c) {
        const a = o._WINDOW_SIZE || 1;
        let l = i.get(o);
        return l || ((l = this.precomputeWindow(o, a)), a !== 1 && i.set(o, c(l))), this.wNAF(a, l, s);
      },
    };
  }
  function Or(t) {
    return (
      zi(t.Fp),
      kt(
        t,
        { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
        { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" },
      ),
      Object.freeze({ ...Ar(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
    );
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Gi(t) {
    const e = Or(t);
    kt(
      e,
      { a: "field", b: "field" },
      {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function",
      },
    );
    const { endo: n, Fp: r, a: o } = e;
    if (n) {
      if (!r.eql(o, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
    return Object.freeze({ ...e });
  }
  const { bytesToNumberBE: Zi, hexToBytes: Ji } = Hi,
    et = {
      Err: class extends Error {
        constructor(e = "") {
          super(e);
        }
      },
      _parseInt(t) {
        const { Err: e } = et;
        if (t.length < 2 || t[0] !== 2) throw new e("Invalid signature integer tag");
        const n = t[1],
          r = t.subarray(2, n + 2);
        if (!n || r.length !== n) throw new e("Invalid signature integer: wrong length");
        if (r[0] & 128) throw new e("Invalid signature integer: negative");
        if (r[0] === 0 && !(r[1] & 128)) throw new e("Invalid signature integer: unnecessary leading zero");
        return { d: Zi(r), l: t.subarray(n + 2) };
      },
      toSig(t) {
        const { Err: e } = et,
          n = typeof t == "string" ? Ji(t) : t;
        if (!(n instanceof Uint8Array)) throw new Error("ui8a expected");
        let r = n.length;
        if (r < 2 || n[0] != 48) throw new e("Invalid signature tag");
        if (n[1] !== r - 2) throw new e("Invalid signature: incorrect length");
        const { d: o, l: i } = et._parseInt(n.subarray(2)),
          { d: s, l: c } = et._parseInt(i);
        if (c.length) throw new e("Invalid signature: left bytes after parsing");
        return { r: o, s };
      },
      hexFromSig(t) {
        const e = (l) => (Number.parseInt(l[0], 16) & 8 ? "00" + l : l),
          n = (l) => {
            const f = l.toString(16);
            return f.length & 1 ? `0${f}` : f;
          },
          r = e(n(t.s)),
          o = e(n(t.r)),
          i = r.length / 2,
          s = o.length / 2,
          c = n(i),
          a = n(s);
        return `30${n(s + i + 4)}02${a}${o}02${c}${r}`;
      },
    },
    Ie = BigInt(0),
    be = BigInt(1);
  BigInt(2);
  const Tr = BigInt(3);
  BigInt(4);
  function Qi(t) {
    const e = Gi(t),
      { Fp: n } = e,
      r =
        e.toBytes ||
        ((b, d, g) => {
          const w = d.toAffine();
          return Qe(Uint8Array.from([4]), n.toBytes(w.x), n.toBytes(w.y));
        }),
      o =
        e.fromBytes ||
        ((b) => {
          const d = b.subarray(1),
            g = n.fromBytes(d.subarray(0, n.BYTES)),
            w = n.fromBytes(d.subarray(n.BYTES, 2 * n.BYTES));
          return { x: g, y: w };
        });
    function i(b) {
      const { a: d, b: g } = e,
        w = n.sqr(b),
        y = n.mul(w, b);
      return n.add(n.add(y, n.mul(b, d)), g);
    }
    if (!n.eql(n.sqr(e.Gy), i(e.Gx))) throw new Error("bad generator point: equation left != right");
    function s(b) {
      return typeof b == "bigint" && Ie < b && b < e.n;
    }
    function c(b) {
      if (!s(b)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function a(b) {
      const { allowedPrivateKeyLengths: d, nByteLength: g, wrapPrivateKey: w, n: y } = e;
      if (d && typeof b != "bigint") {
        if ((b instanceof Uint8Array && (b = lt(b)), typeof b != "string" || !d.includes(b.length)))
          throw new Error("Invalid key");
        b = b.padStart(g * 2, "0");
      }
      let S;
      try {
        S = typeof b == "bigint" ? b : de(le("private key", b, g));
      } catch {
        throw new Error(`private key must be ${g} bytes, hex or bigint, not ${typeof b}`);
      }
      return w && (S = ce(S, y)), c(S), S;
    }
    const l = new Map();
    function f(b) {
      if (!(b instanceof u)) throw new Error("ProjectivePoint expected");
    }
    class u {
      constructor(d, g, w) {
        if (((this.px = d), (this.py = g), (this.pz = w), d == null || !n.isValid(d))) throw new Error("x required");
        if (g == null || !n.isValid(g)) throw new Error("y required");
        if (w == null || !n.isValid(w)) throw new Error("z required");
      }
      static fromAffine(d) {
        const { x: g, y: w } = d || {};
        if (!d || !n.isValid(g) || !n.isValid(w)) throw new Error("invalid affine point");
        if (d instanceof u) throw new Error("projective point not allowed");
        const y = (S) => n.eql(S, n.ZERO);
        return y(g) && y(w) ? u.ZERO : new u(g, w, n.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(d) {
        const g = n.invertBatch(d.map((w) => w.pz));
        return d.map((w, y) => w.toAffine(g[y])).map(u.fromAffine);
      }
      static fromHex(d) {
        const g = u.fromAffine(o(le("pointHex", d)));
        return g.assertValidity(), g;
      }
      static fromPrivateKey(d) {
        return u.BASE.multiply(a(d));
      }
      _setWindowSize(d) {
        (this._WINDOW_SIZE = d), l.delete(this);
      }
      assertValidity() {
        if (this.is0()) {
          if (e.allowInfinityPoint && !n.is0(this.py)) return;
          throw new Error("bad point: ZERO");
        }
        const { x: d, y: g } = this.toAffine();
        if (!n.isValid(d) || !n.isValid(g)) throw new Error("bad point: x or y not FE");
        const w = n.sqr(g),
          y = i(d);
        if (!n.eql(w, y)) throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y: d } = this.toAffine();
        if (n.isOdd) return !n.isOdd(d);
        throw new Error("Field doesn't support isOdd");
      }
      equals(d) {
        f(d);
        const { px: g, py: w, pz: y } = this,
          { px: S, py: L, pz: H } = d,
          _ = n.eql(n.mul(g, H), n.mul(S, y)),
          E = n.eql(n.mul(w, H), n.mul(L, y));
        return _ && E;
      }
      negate() {
        return new u(this.px, n.neg(this.py), this.pz);
      }
      double() {
        const { a: d, b: g } = e,
          w = n.mul(g, Tr),
          { px: y, py: S, pz: L } = this;
        let H = n.ZERO,
          _ = n.ZERO,
          E = n.ZERO,
          m = n.mul(y, y),
          x = n.mul(S, S),
          N = n.mul(L, L),
          C = n.mul(y, S);
        return (
          (C = n.add(C, C)),
          (E = n.mul(y, L)),
          (E = n.add(E, E)),
          (H = n.mul(d, E)),
          (_ = n.mul(w, N)),
          (_ = n.add(H, _)),
          (H = n.sub(x, _)),
          (_ = n.add(x, _)),
          (_ = n.mul(H, _)),
          (H = n.mul(C, H)),
          (E = n.mul(w, E)),
          (N = n.mul(d, N)),
          (C = n.sub(m, N)),
          (C = n.mul(d, C)),
          (C = n.add(C, E)),
          (E = n.add(m, m)),
          (m = n.add(E, m)),
          (m = n.add(m, N)),
          (m = n.mul(m, C)),
          (_ = n.add(_, m)),
          (N = n.mul(S, L)),
          (N = n.add(N, N)),
          (m = n.mul(N, C)),
          (H = n.sub(H, m)),
          (E = n.mul(N, x)),
          (E = n.add(E, E)),
          (E = n.add(E, E)),
          new u(H, _, E)
        );
      }
      add(d) {
        f(d);
        const { px: g, py: w, pz: y } = this,
          { px: S, py: L, pz: H } = d;
        let _ = n.ZERO,
          E = n.ZERO,
          m = n.ZERO;
        const x = e.a,
          N = n.mul(e.b, Tr);
        let C = n.mul(g, S),
          $ = n.mul(w, L),
          q = n.mul(y, H),
          z = n.add(g, w),
          v = n.add(S, L);
        (z = n.mul(z, v)), (v = n.add(C, $)), (z = n.sub(z, v)), (v = n.add(g, y));
        let B = n.add(S, H);
        return (
          (v = n.mul(v, B)),
          (B = n.add(C, q)),
          (v = n.sub(v, B)),
          (B = n.add(w, y)),
          (_ = n.add(L, H)),
          (B = n.mul(B, _)),
          (_ = n.add($, q)),
          (B = n.sub(B, _)),
          (m = n.mul(x, v)),
          (_ = n.mul(N, q)),
          (m = n.add(_, m)),
          (_ = n.sub($, m)),
          (m = n.add($, m)),
          (E = n.mul(_, m)),
          ($ = n.add(C, C)),
          ($ = n.add($, C)),
          (q = n.mul(x, q)),
          (v = n.mul(N, v)),
          ($ = n.add($, q)),
          (q = n.sub(C, q)),
          (q = n.mul(x, q)),
          (v = n.add(v, q)),
          (C = n.mul($, v)),
          (E = n.add(E, C)),
          (C = n.mul(B, v)),
          (_ = n.mul(z, _)),
          (_ = n.sub(_, C)),
          (C = n.mul(z, $)),
          (m = n.mul(B, m)),
          (m = n.add(m, C)),
          new u(_, E, m)
        );
      }
      subtract(d) {
        return this.add(d.negate());
      }
      is0() {
        return this.equals(u.ZERO);
      }
      wNAF(d) {
        return h.wNAFCached(this, l, d, (g) => {
          const w = n.invertBatch(g.map((y) => y.pz));
          return g.map((y, S) => y.toAffine(w[S])).map(u.fromAffine);
        });
      }
      multiplyUnsafe(d) {
        const g = u.ZERO;
        if (d === Ie) return g;
        if ((c(d), d === be)) return this;
        const { endo: w } = e;
        if (!w) return h.unsafeLadder(this, d);
        let { k1neg: y, k1: S, k2neg: L, k2: H } = w.splitScalar(d),
          _ = g,
          E = g,
          m = this;
        for (; S > Ie || H > Ie; )
          S & be && (_ = _.add(m)), H & be && (E = E.add(m)), (m = m.double()), (S >>= be), (H >>= be);
        return y && (_ = _.negate()), L && (E = E.negate()), (E = new u(n.mul(E.px, w.beta), E.py, E.pz)), _.add(E);
      }
      multiply(d) {
        c(d);
        let g = d,
          w,
          y;
        const { endo: S } = e;
        if (S) {
          const { k1neg: L, k1: H, k2neg: _, k2: E } = S.splitScalar(g);
          let { p: m, f: x } = this.wNAF(H),
            { p: N, f: C } = this.wNAF(E);
          (m = h.constTimeNegate(L, m)),
            (N = h.constTimeNegate(_, N)),
            (N = new u(n.mul(N.px, S.beta), N.py, N.pz)),
            (w = m.add(N)),
            (y = x.add(C));
        } else {
          const { p: L, f: H } = this.wNAF(g);
          (w = L), (y = H);
        }
        return u.normalizeZ([w, y])[0];
      }
      multiplyAndAddUnsafe(d, g, w) {
        const y = u.BASE,
          S = (H, _) => (_ === Ie || _ === be || !H.equals(y) ? H.multiplyUnsafe(_) : H.multiply(_)),
          L = S(this, g).add(S(d, w));
        return L.is0() ? void 0 : L;
      }
      toAffine(d) {
        const { px: g, py: w, pz: y } = this,
          S = this.is0();
        d == null && (d = S ? n.ONE : n.inv(y));
        const L = n.mul(g, d),
          H = n.mul(w, d),
          _ = n.mul(y, d);
        if (S) return { x: n.ZERO, y: n.ZERO };
        if (!n.eql(_, n.ONE)) throw new Error("invZ was invalid");
        return { x: L, y: H };
      }
      isTorsionFree() {
        const { h: d, isTorsionFree: g } = e;
        if (d === be) return !0;
        if (g) return g(u, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: d, clearCofactor: g } = e;
        return d === be ? this : g ? g(u, this) : this.multiplyUnsafe(e.h);
      }
      toRawBytes(d = !0) {
        return this.assertValidity(), r(u, this, d);
      }
      toHex(d = !0) {
        return lt(this.toRawBytes(d));
      }
    }
    (u.BASE = new u(e.Gx, e.Gy, n.ONE)), (u.ZERO = new u(n.ZERO, n.ONE, n.ZERO));
    const p = e.nBitLength,
      h = Fi(u, e.endo ? Math.ceil(p / 2) : p);
    return { CURVE: e, ProjectivePoint: u, normPrivateKeyToScalar: a, weierstrassEquation: i, isWithinCurveOrder: s };
  }
  function Xi(t) {
    const e = Or(t);
    return (
      kt(
        e,
        { hash: "hash", hmac: "function", randomBytes: "function" },
        { bits2int: "function", bits2int_modN: "function", lowS: "boolean" },
      ),
      Object.freeze({ lowS: !0, ...e })
    );
  }
  function es(t) {
    const e = Xi(t),
      { Fp: n, n: r } = e,
      o = n.BYTES + 1,
      i = 2 * n.BYTES + 1;
    function s(v) {
      return Ie < v && v < n.ORDER;
    }
    function c(v) {
      return ce(v, r);
    }
    function a(v) {
      return En(v, r);
    }
    const {
        ProjectivePoint: l,
        normPrivateKeyToScalar: f,
        weierstrassEquation: u,
        isWithinCurveOrder: p,
      } = Qi({
        ...e,
        toBytes(v, B, U) {
          const R = B.toAffine(),
            I = n.toBytes(R.x),
            j = Qe;
          return U ? j(Uint8Array.from([B.hasEvenY() ? 2 : 3]), I) : j(Uint8Array.from([4]), I, n.toBytes(R.y));
        },
        fromBytes(v) {
          const B = v.length,
            U = v[0],
            R = v.subarray(1);
          if (B === o && (U === 2 || U === 3)) {
            const I = de(R);
            if (!s(I)) throw new Error("Point is not on curve");
            const j = u(I);
            let V = n.sqrt(j);
            const K = (V & be) === be;
            return ((U & 1) === 1) !== K && (V = n.neg(V)), { x: I, y: V };
          } else if (B === i && U === 4) {
            const I = n.fromBytes(R.subarray(0, n.BYTES)),
              j = n.fromBytes(R.subarray(n.BYTES, 2 * n.BYTES));
            return { x: I, y: j };
          } else
            throw new Error(
              `Point of length ${B} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`,
            );
        },
      }),
      h = (v) => lt($e(v, e.nByteLength));
    function b(v) {
      const B = r >> be;
      return v > B;
    }
    function d(v) {
      return b(v) ? c(-v) : v;
    }
    const g = (v, B, U) => de(v.slice(B, U));
    class w {
      constructor(B, U, R) {
        (this.r = B), (this.s = U), (this.recovery = R), this.assertValidity();
      }
      static fromCompact(B) {
        const U = e.nByteLength;
        return (B = le("compactSignature", B, U * 2)), new w(g(B, 0, U), g(B, U, 2 * U));
      }
      static fromDER(B) {
        const { r: U, s: R } = et.toSig(le("DER", B));
        return new w(U, R);
      }
      assertValidity() {
        if (!p(this.r)) throw new Error("r must be 0 < r < CURVE.n");
        if (!p(this.s)) throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(B) {
        return new w(this.r, this.s, B);
      }
      recoverPublicKey(B) {
        const { r: U, s: R, recovery: I } = this,
          j = E(le("msgHash", B));
        if (I == null || ![0, 1, 2, 3].includes(I)) throw new Error("recovery id invalid");
        const V = I === 2 || I === 3 ? U + e.n : U;
        if (V >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const K = I & 1 ? "03" : "02",
          X = l.fromHex(K + h(V)),
          Z = a(V),
          ie = c(-j * Z),
          Q = c(R * Z),
          se = l.BASE.multiplyAndAddUnsafe(X, ie, Q);
        if (!se) throw new Error("point at infinify");
        return se.assertValidity(), se;
      }
      hasHighS() {
        return b(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new w(this.r, c(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return ut(this.toDERHex());
      }
      toDERHex() {
        return et.hexFromSig({ r: this.r, s: this.s });
      }
      toCompactRawBytes() {
        return ut(this.toCompactHex());
      }
      toCompactHex() {
        return h(this.r) + h(this.s);
      }
    }
    const y = {
      isValidPrivateKey(v) {
        try {
          return f(v), !0;
        } catch {
          return !1;
        }
      },
      normPrivateKeyToScalar: f,
      randomPrivateKey: () => {
        const v = Ir(e.n);
        return Vi(e.randomBytes(v), e.n);
      },
      precompute(v = 8, B = l.BASE) {
        return B._setWindowSize(v), B.multiply(BigInt(3)), B;
      },
    };
    function S(v, B = !0) {
      return l.fromPrivateKey(v).toRawBytes(B);
    }
    function L(v) {
      const B = v instanceof Uint8Array,
        U = typeof v == "string",
        R = (B || U) && v.length;
      return B ? R === o || R === i : U ? R === 2 * o || R === 2 * i : v instanceof l;
    }
    function H(v, B, U = !0) {
      if (L(v)) throw new Error("first arg must be private key");
      if (!L(B)) throw new Error("second arg must be public key");
      return l.fromHex(B).multiply(f(v)).toRawBytes(U);
    }
    const _ =
        e.bits2int ||
        function (v) {
          const B = de(v),
            U = v.length * 8 - e.nBitLength;
          return U > 0 ? B >> BigInt(U) : B;
        },
      E =
        e.bits2int_modN ||
        function (v) {
          return c(_(v));
        },
      m = mn(e.nBitLength);
    function x(v) {
      if (typeof v != "bigint") throw new Error("bigint expected");
      if (!(Ie <= v && v < m)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
      return $e(v, e.nByteLength);
    }
    function N(v, B, U = C) {
      if (["recovered", "canonical"].some((ne) => ne in U)) throw new Error("sign() legacy options not supported");
      const { hash: R, randomBytes: I } = e;
      let { lowS: j, prehash: V, extraEntropy: K } = U;
      j == null && (j = !0), (v = le("msgHash", v)), V && (v = le("prehashed msgHash", R(v)));
      const X = E(v),
        Z = f(B),
        ie = [x(Z), x(X)];
      if (K != null) {
        const ne = K === !0 ? I(n.BYTES) : K;
        ie.push(le("extraEntropy", ne));
      }
      const Q = Qe(...ie),
        se = X;
      function he(ne) {
        const Ce = _(ne);
        if (!p(Ce)) return;
        const Ot = a(Ce),
          Ue = l.BASE.multiply(Ce).toAffine(),
          ge = c(Ue.x);
        if (ge === Ie) return;
        const Pe = c(Ot * c(se + ge * Z));
        if (Pe === Ie) return;
        let rt = (Ue.x === ge ? 0 : 2) | Number(Ue.y & be),
          Ge = Pe;
        return j && b(Pe) && ((Ge = d(Pe)), (rt ^= 1)), new w(ge, Ge, rt);
      }
      return { seed: Q, k2sig: he };
    }
    const C = { lowS: e.lowS, prehash: !1 },
      $ = { lowS: e.lowS, prehash: !1 };
    function q(v, B, U = C) {
      const { seed: R, k2sig: I } = N(v, B, U),
        j = e;
      return _r(j.hash.outputLen, j.nByteLength, j.hmac)(R, I);
    }
    l.BASE._setWindowSize(8);
    function z(v, B, U, R = $) {
      var Ue;
      const I = v;
      if (((B = le("msgHash", B)), (U = le("publicKey", U)), "strict" in R))
        throw new Error("options.strict was renamed to lowS");
      const { lowS: j, prehash: V } = R;
      let K, X;
      try {
        if (typeof I == "string" || I instanceof Uint8Array)
          try {
            K = w.fromDER(I);
          } catch (ge) {
            if (!(ge instanceof et.Err)) throw ge;
            K = w.fromCompact(I);
          }
        else if (typeof I == "object" && typeof I.r == "bigint" && typeof I.s == "bigint") {
          const { r: ge, s: Pe } = I;
          K = new w(ge, Pe);
        } else throw new Error("PARSE");
        X = l.fromHex(U);
      } catch (ge) {
        if (ge.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
        return !1;
      }
      if (j && K.hasHighS()) return !1;
      V && (B = e.hash(B));
      const { r: Z, s: ie } = K,
        Q = E(B),
        se = a(ie),
        he = c(Q * se),
        ne = c(Z * se),
        Ce = (Ue = l.BASE.multiplyAndAddUnsafe(X, he, ne)) == null ? void 0 : Ue.toAffine();
      return Ce ? c(Ce.x) === Z : !1;
    }
    return {
      CURVE: e,
      getPublicKey: S,
      getSharedSecret: H,
      sign: q,
      verify: z,
      ProjectivePoint: l,
      Signature: w,
      utils: y,
    };
  }
  let Nr = class extends yr {
    constructor(e, n) {
      super(), (this.finished = !1), (this.destroyed = !1), bi(e);
      const r = gn(n);
      if (((this.iHash = e.create()), typeof this.iHash.update != "function"))
        throw new Error("Expected instance of class which extends utils.Hash");
      (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
      const o = this.blockLen,
        i = new Uint8Array(o);
      i.set(r.length > o ? e.create().update(r).digest() : r);
      for (let s = 0; s < i.length; s++) i[s] ^= 54;
      this.iHash.update(i), (this.oHash = e.create());
      for (let s = 0; s < i.length; s++) i[s] ^= 106;
      this.oHash.update(i), i.fill(0);
    }
    update(e) {
      return Ht(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Ht(this),
        br(e, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: n, iHash: r, finished: o, destroyed: i, blockLen: s, outputLen: c } = this;
      return (
        (e = e),
        (e.finished = o),
        (e.destroyed = i),
        (e.blockLen = s),
        (e.outputLen = c),
        (e.oHash = n._cloneInto(e.oHash)),
        (e.iHash = r._cloneInto(e.iHash)),
        e
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  };
  const Lr = (t, e, n) => new Nr(t, e).update(n).digest();
  Lr.create = (t, e) => new Nr(t, e);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function ts(t) {
    return { hash: t, hmac: (e, ...n) => Lr(t, e, mi(...n)), randomBytes: mr };
  }
  function ns(t, e) {
    const n = (r) => es({ ...t, ...ts(r) });
    return Object.freeze({ ...n(e), create: n });
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const jt = BigInt(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
    ),
    qt = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    Cr = BigInt(1),
    $t = BigInt(2),
    Ur = (t, e) => (t + e / $t) / e;
  function Pr(t) {
    const e = jt,
      n = BigInt(3),
      r = BigInt(6),
      o = BigInt(11),
      i = BigInt(22),
      s = BigInt(23),
      c = BigInt(44),
      a = BigInt(88),
      l = (t * t * t) % e,
      f = (l * l * t) % e,
      u = (pe(f, n, e) * f) % e,
      p = (pe(u, n, e) * f) % e,
      h = (pe(p, $t, e) * l) % e,
      b = (pe(h, o, e) * h) % e,
      d = (pe(b, i, e) * b) % e,
      g = (pe(d, c, e) * d) % e,
      w = (pe(g, a, e) * g) % e,
      y = (pe(w, c, e) * d) % e,
      S = (pe(y, n, e) * f) % e,
      L = (pe(S, s, e) * b) % e,
      H = (pe(L, r, e) * l) % e,
      _ = pe(H, $t, e);
    if (!kn.eql(kn.sqr(_), t)) throw new Error("Cannot find square root");
    return _;
  }
  const kn = Di(jt, void 0, void 0, { sqrt: Pr }),
    ft = ns(
      {
        a: BigInt(0),
        b: BigInt(7),
        Fp: kn,
        n: qt,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
          beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
          splitScalar: (t) => {
            const e = qt,
              n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -Cr * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              i = n,
              s = BigInt("0x100000000000000000000000000000000"),
              c = Ur(i * t, e),
              a = Ur(-r * t, e);
            let l = ce(t - c * n - a * o, e),
              f = ce(-c * r - a * i, e);
            const u = l > s,
              p = f > s;
            if ((u && (l = e - l), p && (f = e - f), l > s || f > s))
              throw new Error("splitScalar: Endomorphism failed, k=" + t);
            return { k1neg: u, k1: l, k2neg: p, k2: f };
          },
        },
      },
      pn,
    ),
    zt = BigInt(0),
    Hr = (t) => typeof t == "bigint" && zt < t && t < jt,
    rs = (t) => typeof t == "bigint" && zt < t && t < qt,
    Rr = {};
  function Kt(t, ...e) {
    let n = Rr[t];
    if (n === void 0) {
      const r = pn(Uint8Array.from(t, (o) => o.charCodeAt(0)));
      (n = Qe(r, r)), (Rr[t] = n);
    }
    return pn(Qe(n, ...e));
  }
  const Sn = (t) => t.toRawBytes(!0).slice(1),
    An = (t) => $e(t, 32),
    Bn = (t) => ce(t, jt),
    St = (t) => ce(t, qt),
    In = ft.ProjectivePoint,
    os = (t, e, n) => In.BASE.multiplyAndAddUnsafe(t, e, n);
  function On(t) {
    let e = ft.utils.normPrivateKeyToScalar(t),
      n = In.fromPrivateKey(e);
    return { scalar: n.hasEvenY() ? e : St(-e), bytes: Sn(n) };
  }
  function Mr(t) {
    if (!Hr(t)) throw new Error("bad x: need 0 < x < p");
    const e = Bn(t * t),
      n = Bn(e * t + BigInt(7));
    let r = Pr(n);
    r % $t !== zt && (r = Bn(-r));
    const o = new In(t, r, Cr);
    return o.assertValidity(), o;
  }
  function jr(...t) {
    return St(de(Kt("BIP0340/challenge", ...t)));
  }
  function is(t) {
    return On(t).bytes;
  }
  function ss(t, e, n = mr(32)) {
    const r = le("message", t),
      { bytes: o, scalar: i } = On(e),
      s = le("auxRand", n, 32),
      c = An(i ^ de(Kt("BIP0340/aux", s))),
      a = Kt("BIP0340/nonce", c, o, r),
      l = St(de(a));
    if (l === zt) throw new Error("sign failed: k is zero");
    const { bytes: f, scalar: u } = On(l),
      p = jr(f, o, r),
      h = new Uint8Array(64);
    if ((h.set(f, 0), h.set(An(St(u + p * i)), 32), !qr(h, r, o))) throw new Error("sign: Invalid signature produced");
    return h;
  }
  function qr(t, e, n) {
    const r = le("signature", t, 64),
      o = le("message", e),
      i = le("publicKey", n, 32);
    try {
      const s = Mr(de(i)),
        c = de(r.subarray(0, 32));
      if (!Hr(c)) return !1;
      const a = de(r.subarray(32, 64));
      if (!rs(a)) return !1;
      const l = jr(An(c), Sn(s), o),
        f = os(s, a, St(-l));
      return !(!f || !f.hasEvenY() || f.toAffine().x !== c);
    } catch {
      return !1;
    }
  }
  const fe = {
    getPublicKey: is,
    sign: ss,
    verify: qr,
    utils: {
      randomPrivateKey: ft.utils.randomPrivateKey,
      lift_x: Mr,
      pointToBytes: Sn,
      numberToBytesBE: $e,
      bytesToNumberBE: de,
      taggedHash: Kt,
      mod: ce,
    },
  };
  function Tn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
  }
  function cs(t) {
    if (typeof t != "boolean") throw new Error(`Expected boolean, not ${t}`);
  }
  function $r(t, ...e) {
    if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length))
      throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
  }
  function as(t) {
    if (typeof t != "function" || typeof t.create != "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Tn(t.outputLen), Tn(t.blockLen);
  }
  function ls(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function us(t, e) {
    $r(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
  }
  const Se = { number: Tn, bool: cs, bytes: $r, hash: as, exists: ls, output: us };
  function fs(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const o = BigInt(32),
      i = BigInt(4294967295),
      s = Number((n >> o) & i),
      c = Number(n & i),
      a = r ? 4 : 0,
      l = r ? 0 : 4;
    t.setUint32(e + a, s, r), t.setUint32(e + l, c, r);
  }
  class ds extends hr {
    constructor(e, n, r, o) {
      super(),
        (this.blockLen = e),
        (this.outputLen = n),
        (this.padOffset = r),
        (this.isLE = o),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = fn(this.buffer));
    }
    update(e) {
      Se.exists(this);
      const { view: n, buffer: r, blockLen: o } = this;
      e = _t(e);
      const i = e.length;
      for (let s = 0; s < i; ) {
        const c = Math.min(o - this.pos, i - s);
        if (c === o) {
          const a = fn(e);
          for (; o <= i - s; s += o) this.process(a, s);
          continue;
        }
        r.set(e.subarray(s, s + c), this.pos),
          (this.pos += c),
          (s += c),
          this.pos === o && (this.process(n, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      Se.exists(this), Se.output(e, this), (this.finished = !0);
      const { buffer: n, view: r, blockLen: o, isLE: i } = this;
      let { pos: s } = this;
      (n[s++] = 128), this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), (s = 0));
      for (let u = s; u < o; u++) n[u] = 0;
      fs(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
      const c = fn(e),
        a = this.outputLen;
      if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = a / 4,
        f = this.get();
      if (l > f.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const r = e.slice(0, n);
      return this.destroy(), r;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
      return (e.length = o), (e.pos = c), (e.finished = i), (e.destroyed = s), o % n && e.buffer.set(r), e;
    }
  }
  const hs = (t, e, n) => (t & e) ^ (~t & n),
    gs = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
    ps = new Uint32Array([
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
      310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
      3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
      3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
      1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
    ]),
    ze = new Uint32Array([
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
    ]),
    Ke = new Uint32Array(64);
  class zr extends ds {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = ze[0] | 0),
        (this.B = ze[1] | 0),
        (this.C = ze[2] | 0),
        (this.D = ze[3] | 0),
        (this.E = ze[4] | 0),
        (this.F = ze[5] | 0),
        (this.G = ze[6] | 0),
        (this.H = ze[7] | 0);
    }
    get() {
      const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: a } = this;
      return [e, n, r, o, i, s, c, a];
    }
    set(e, n, r, o, i, s, c, a) {
      (this.A = e | 0),
        (this.B = n | 0),
        (this.C = r | 0),
        (this.D = o | 0),
        (this.E = i | 0),
        (this.F = s | 0),
        (this.G = c | 0),
        (this.H = a | 0);
    }
    process(e, n) {
      for (let u = 0; u < 16; u++, n += 4) Ke[u] = e.getUint32(n, !1);
      for (let u = 16; u < 64; u++) {
        const p = Ke[u - 15],
          h = Ke[u - 2],
          b = _e(p, 7) ^ _e(p, 18) ^ (p >>> 3),
          d = _e(h, 17) ^ _e(h, 19) ^ (h >>> 10);
        Ke[u] = (d + Ke[u - 7] + b + Ke[u - 16]) | 0;
      }
      let { A: r, B: o, C: i, D: s, E: c, F: a, G: l, H: f } = this;
      for (let u = 0; u < 64; u++) {
        const p = _e(c, 6) ^ _e(c, 11) ^ _e(c, 25),
          h = (f + p + hs(c, a, l) + ps[u] + Ke[u]) | 0,
          d = ((_e(r, 2) ^ _e(r, 13) ^ _e(r, 22)) + gs(r, o, i)) | 0;
        (f = l), (l = a), (a = c), (c = (s + h) | 0), (s = i), (i = o), (o = r), (r = (h + d) | 0);
      }
      (r = (r + this.A) | 0),
        (o = (o + this.B) | 0),
        (i = (i + this.C) | 0),
        (s = (s + this.D) | 0),
        (c = (c + this.E) | 0),
        (a = (a + this.F) | 0),
        (l = (l + this.G) | 0),
        (f = (f + this.H) | 0),
        this.set(r, o, i, s, c, a, l, f);
    }
    roundClean() {
      Ke.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  class bs extends zr {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  }
  const dt = gr(() => new zr());
  gr(() => new bs());
  var ht = Symbol("verified"),
    ws = (t) => t instanceof Object;
  function ys(t) {
    if (
      !ws(t) ||
      typeof t.kind != "number" ||
      typeof t.content != "string" ||
      typeof t.created_at != "number" ||
      typeof t.pubkey != "string" ||
      !t.pubkey.match(/^[a-f0-9]{64}$/) ||
      !Array.isArray(t.tags)
    )
      return !1;
    for (let e = 0; e < t.tags.length; e++) {
      let n = t.tags[e];
      if (!Array.isArray(n)) return !1;
      for (let r = 0; r < n.length; r++) if (typeof n[r] == "object") return !1;
    }
    return !0;
  }
  new TextDecoder("utf-8");
  var ms = new TextEncoder(),
    xs = class {
      generateSecretKey() {
        return fe.utils.randomPrivateKey();
      }
      getPublicKey(e) {
        return ue(fe.getPublicKey(e));
      }
      finalizeEvent(e, n) {
        const r = e;
        return (r.pubkey = ue(fe.getPublicKey(n))), (r.id = Nn(r)), (r.sig = ue(fe.sign(Nn(r), n))), (r[ht] = !0), r;
      }
      verifyEvent(e) {
        if (typeof e[ht] == "boolean") return e[ht];
        const n = Nn(e);
        if (n !== e.id) return (e[ht] = !1), !1;
        try {
          const r = fe.verify(e.sig, n, e.pubkey);
          return (e[ht] = r), r;
        } catch {
          return (e[ht] = !1), !1;
        }
      }
    };
  function vs(t) {
    if (!ys(t)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([0, t.pubkey, t.created_at, t.kind, t.tags, t.content]);
  }
  function Nn(t) {
    let e = dt(ms.encode(vs(t)));
    return ue(e);
  }
  var Wt = new xs(),
    Es = Wt.generateSecretKey,
    Kr = Wt.getPublicKey;
  Wt.finalizeEvent, Wt.verifyEvent;
  var tt = Symbol("verified"),
    _s = (t) => t instanceof Object;
  function ks(t) {
    if (
      !_s(t) ||
      typeof t.kind != "number" ||
      typeof t.content != "string" ||
      typeof t.created_at != "number" ||
      typeof t.pubkey != "string" ||
      !t.pubkey.match(/^[a-f0-9]{64}$/) ||
      !Array.isArray(t.tags)
    )
      return !1;
    for (let e = 0; e < t.tags.length; e++) {
      let n = t.tags[e];
      if (!Array.isArray(n)) return !1;
      for (let r = 0; r < n.length; r++) if (typeof n[r] == "object") return !1;
    }
    return !0;
  }
  new TextDecoder("utf-8");
  var Ss = new TextEncoder();
  function At(t) {
    t.indexOf("://") === -1 && (t = "wss://" + t);
    let e = new URL(t);
    return (
      (e.pathname = e.pathname.replace(/\/+/g, "/")),
      e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)),
      ((e.port === "80" && e.protocol === "ws:") || (e.port === "443" && e.protocol === "wss:")) && (e.port = ""),
      e.searchParams.sort(),
      (e.hash = ""),
      e.toString()
    );
  }
  var As = class {
      constructor(e) {
        A(this, "value");
        A(this, "next", null);
        A(this, "prev", null);
        this.value = e;
      }
    },
    Bs = class {
      constructor() {
        A(this, "first");
        A(this, "last");
        (this.first = null), (this.last = null);
      }
      enqueue(e) {
        const n = new As(e);
        return (
          this.last
            ? this.last === this.first
              ? ((this.last = n), (this.last.prev = this.first), (this.first.next = n))
              : ((n.prev = this.last), (this.last.next = n), (this.last = n))
            : ((this.first = n), (this.last = n)),
          !0
        );
      }
      dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
          const n = this.first;
          return (this.first = null), (this.last = null), n.value;
        }
        const e = this.first;
        return (this.first = e.next), e.value;
      }
    },
    Is = class {
      generateSecretKey() {
        return fe.utils.randomPrivateKey();
      }
      getPublicKey(e) {
        return ue(fe.getPublicKey(e));
      }
      finalizeEvent(e, n) {
        const r = e;
        return (r.pubkey = ue(fe.getPublicKey(n))), (r.id = Ln(r)), (r.sig = ue(fe.sign(Ln(r), n))), (r[tt] = !0), r;
      }
      verifyEvent(e) {
        if (typeof e[tt] == "boolean") return e[tt];
        const n = Ln(e);
        if (n !== e.id) return (e[tt] = !1), !1;
        try {
          const r = fe.verify(e.sig, n, e.pubkey);
          return (e[tt] = r), r;
        } catch {
          return (e[tt] = !1), !1;
        }
      }
    };
  function Os(t) {
    if (!ks(t)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([0, t.pubkey, t.created_at, t.kind, t.tags, t.content]);
  }
  function Ln(t) {
    let e = dt(Ss.encode(Os(t)));
    return ue(e);
  }
  var Dt = new Is();
  Dt.generateSecretKey, Dt.getPublicKey, Dt.finalizeEvent;
  var Ts = Dt.verifyEvent,
    Ns = 22242;
  function Ls(t, e) {
    if (
      (t.ids && t.ids.indexOf(e.id) === -1) ||
      (t.kinds && t.kinds.indexOf(e.kind) === -1) ||
      (t.authors && t.authors.indexOf(e.pubkey) === -1)
    )
      return !1;
    for (let n in t)
      if (n[0] === "#") {
        let r = n.slice(1),
          o = t[`#${r}`];
        if (o && !e.tags.find(([i, s]) => i === n.slice(1) && o.indexOf(s) !== -1)) return !1;
      }
    return !((t.since && e.created_at < t.since) || (t.until && e.created_at > t.until));
  }
  function Cs(t, e) {
    for (let n = 0; n < t.length; n++) if (Ls(t[n], e)) return !0;
    return !1;
  }
  function Us(t, e) {
    let n = e.length + 3,
      r = t.indexOf(`"${e}":`) + n,
      o = t.slice(r).indexOf('"') + r + 1;
    return t.slice(o, o + 64);
  }
  function Ps(t) {
    let e = t.slice(0, 22).indexOf('"EVENT"');
    if (e === -1) return null;
    let n = t.slice(e + 7 + 1).indexOf('"');
    if (n === -1) return null;
    let r = e + 7 + 1 + n,
      o = t.slice(r + 1, 80).indexOf('"');
    if (o === -1) return null;
    let i = r + 1 + o;
    return t.slice(r + 1, i);
  }
  function Hs(t, e) {
    return {
      kind: Ns,
      created_at: Math.floor(Date.now() / 1e3),
      tags: [
        ["relay", t],
        ["challenge", e],
      ],
      content: "",
    };
  }
  async function Rs() {
    return new Promise((t) => {
      const e = new MessageChannel(),
        n = () => {
          e.port1.removeEventListener("message", n), t();
        };
      e.port1.addEventListener("message", n), e.port2.postMessage(0), e.port1.start();
    });
  }
  var Ms = (t) => ((t[tt] = !0), !0),
    Wr = class {
      constructor(e, n) {
        A(this, "url");
        A(this, "_connected", !1);
        A(this, "onclose", null);
        A(this, "onnotice", (e) => console.debug(`NOTICE from ${this.url}: ${e}`));
        A(this, "_onauth", null);
        A(this, "baseEoseTimeout", 4400);
        A(this, "connectionTimeout", 4400);
        A(this, "openSubs", new Map());
        A(this, "connectionTimeoutHandle");
        A(this, "connectionPromise");
        A(this, "openCountRequests", new Map());
        A(this, "openEventPublishes", new Map());
        A(this, "ws");
        A(this, "incomingMessageQueue", new Bs());
        A(this, "queueRunning", !1);
        A(this, "challenge");
        A(this, "serial", 0);
        A(this, "verifyEvent");
        A(this, "_WebSocket");
        (this.url = At(e)),
          (this.verifyEvent = n.verifyEvent),
          (this._WebSocket = n.websocketImplementation || WebSocket);
      }
      static async connect(e, n) {
        const r = new Wr(e, n);
        return await r.connect(), r;
      }
      closeAllSubscriptions(e) {
        for (let [n, r] of this.openSubs) r.close(e);
        this.openSubs.clear();
        for (let [n, r] of this.openEventPublishes) r.reject(new Error(e));
        this.openEventPublishes.clear();
        for (let [n, r] of this.openCountRequests) r.reject(new Error(e));
        this.openCountRequests.clear();
      }
      get connected() {
        return this._connected;
      }
      async connect() {
        return this.connectionPromise
          ? this.connectionPromise
          : ((this.challenge = void 0),
            (this.connectionPromise = new Promise((e, n) => {
              this.connectionTimeoutHandle = setTimeout(() => {
                var r;
                n("connection timed out"),
                  (this.connectionPromise = void 0),
                  (r = this.onclose) == null || r.call(this),
                  this.closeAllSubscriptions("relay connection timed out");
              }, this.connectionTimeout);
              try {
                this.ws = new this._WebSocket(this.url);
              } catch (r) {
                n(r);
                return;
              }
              (this.ws.onopen = () => {
                clearTimeout(this.connectionTimeoutHandle), (this._connected = !0), e();
              }),
                (this.ws.onerror = (r) => {
                  var o;
                  n(r.message || "websocket error"),
                    this._connected &&
                      ((this._connected = !1),
                      (this.connectionPromise = void 0),
                      (o = this.onclose) == null || o.call(this),
                      this.closeAllSubscriptions("relay connection errored"));
                }),
                (this.ws.onclose = async () => {
                  var r;
                  this._connected &&
                    ((this._connected = !1),
                    (this.connectionPromise = void 0),
                    (r = this.onclose) == null || r.call(this),
                    this.closeAllSubscriptions("relay connection closed"));
                }),
                (this.ws.onmessage = this._onmessage.bind(this));
            })),
            this.connectionPromise);
      }
      async runQueue() {
        for (this.queueRunning = !0; this.handleNext() !== !1; ) await Rs();
        this.queueRunning = !1;
      }
      handleNext() {
        var r, o, i;
        const e = this.incomingMessageQueue.dequeue();
        if (!e) return !1;
        const n = Ps(e);
        if (n) {
          const s = this.openSubs.get(n);
          if (!s) return;
          const c = Us(e, "id"),
            a = (r = s.alreadyHaveEvent) == null ? void 0 : r.call(s, c);
          if (((o = s.receivedEvent) == null || o.call(s, this, c), a)) return;
        }
        try {
          let s = JSON.parse(e);
          switch (s[0]) {
            case "EVENT": {
              const c = this.openSubs.get(s[1]),
                a = s[2];
              this.verifyEvent(a) && Cs(c.filters, a) && c.onevent(a);
              return;
            }
            case "COUNT": {
              const c = s[1],
                a = s[2],
                l = this.openCountRequests.get(c);
              l && (l.resolve(a.count), this.openCountRequests.delete(c));
              return;
            }
            case "EOSE": {
              const c = this.openSubs.get(s[1]);
              if (!c) return;
              c.receivedEose();
              return;
            }
            case "OK": {
              const c = s[1],
                a = s[2],
                l = s[3],
                f = this.openEventPublishes.get(c);
              a ? f.resolve(l) : f.reject(new Error(l)), this.openEventPublishes.delete(c);
              return;
            }
            case "CLOSED": {
              const c = s[1],
                a = this.openSubs.get(c);
              if (!a) return;
              (a.closed = !0), a.close(s[2]);
              return;
            }
            case "NOTICE":
              this.onnotice(s[1]);
              return;
            case "AUTH": {
              (this.challenge = s[1]), (i = this._onauth) == null || i.call(this, s[1]);
              return;
            }
          }
        } catch {
          return;
        }
      }
      async send(e) {
        if (!this.connectionPromise) throw new Error("sending on closed connection");
        this.connectionPromise.then(() => {
          var n;
          (n = this.ws) == null || n.send(e);
        });
      }
      async auth(e) {
        if (!this.challenge) throw new Error("can't perform auth, no challenge was received");
        const n = await e(Hs(this.url, this.challenge)),
          r = new Promise((o, i) => {
            this.openEventPublishes.set(n.id, { resolve: o, reject: i });
          });
        return this.send('["AUTH",' + JSON.stringify(n) + "]"), r;
      }
      async publish(e) {
        const n = new Promise((r, o) => {
          this.openEventPublishes.set(e.id, { resolve: r, reject: o });
        });
        return this.send('["EVENT",' + JSON.stringify(e) + "]"), n;
      }
      async count(e, n) {
        this.serial++;
        const r = (n == null ? void 0 : n.id) || "count:" + this.serial,
          o = new Promise((i, s) => {
            this.openCountRequests.set(r, { resolve: i, reject: s });
          });
        return this.send('["COUNT","' + r + '",' + JSON.stringify(e).substring(1)), o;
      }
      subscribe(e, n) {
        const r = this.prepareSubscription(e, n);
        return r.fire(), r;
      }
      prepareSubscription(e, n) {
        this.serial++;
        const r = n.id || "sub:" + this.serial,
          o = new js(this, r, e, n);
        return this.openSubs.set(r, o), o;
      }
      close() {
        var e;
        this.closeAllSubscriptions("relay connection closed by us"),
          (this._connected = !1),
          (e = this.ws) == null || e.close();
      }
      _onmessage(e) {
        this.incomingMessageQueue.enqueue(e.data), this.queueRunning || this.runQueue();
      }
    },
    js = class {
      constructor(e, n, r, o) {
        A(this, "relay");
        A(this, "id");
        A(this, "closed", !1);
        A(this, "eosed", !1);
        A(this, "filters");
        A(this, "alreadyHaveEvent");
        A(this, "receivedEvent");
        A(this, "onevent");
        A(this, "oneose");
        A(this, "onclose");
        A(this, "eoseTimeout");
        A(this, "eoseTimeoutHandle");
        (this.relay = e),
          (this.filters = r),
          (this.id = n),
          (this.alreadyHaveEvent = o.alreadyHaveEvent),
          (this.receivedEvent = o.receivedEvent),
          (this.eoseTimeout = o.eoseTimeout || e.baseEoseTimeout),
          (this.oneose = o.oneose),
          (this.onclose = o.onclose),
          (this.onevent =
            o.onevent ||
            ((i) => {
              console.warn(
                `onevent() callback not defined for subscription '${this.id}' in relay ${this.relay.url}. event received:`,
                i,
              );
            }));
      }
      fire() {
        this.relay.send('["REQ","' + this.id + '",' + JSON.stringify(this.filters).substring(1)),
          (this.eoseTimeoutHandle = setTimeout(this.receivedEose.bind(this), this.eoseTimeout));
      }
      receivedEose() {
        var e;
        this.eosed ||
          (clearTimeout(this.eoseTimeoutHandle), (this.eosed = !0), (e = this.oneose) == null || e.call(this));
      }
      close(e = "closed by caller") {
        var n;
        !this.closed &&
          this.relay.connected &&
          (this.relay.send('["CLOSE",' + JSON.stringify(this.id) + "]"), (this.closed = !0)),
          this.relay.openSubs.delete(this.id),
          (n = this.onclose) == null || n.call(this, e);
      }
    },
    qs = class {
      constructor(e) {
        A(this, "relays", new Map());
        A(this, "seenOn", new Map());
        A(this, "trackRelays", !1);
        A(this, "verifyEvent");
        A(this, "trustedRelayURLs", new Set());
        A(this, "_WebSocket");
        (this.verifyEvent = e.verifyEvent), (this._WebSocket = e.websocketImplementation);
      }
      async ensureRelay(e, n) {
        e = At(e);
        let r = this.relays.get(e);
        return (
          r ||
            ((r = new Wr(e, {
              verifyEvent: this.trustedRelayURLs.has(e) ? Ms : this.verifyEvent,
              websocketImplementation: this._WebSocket,
            })),
            n != null && n.connectionTimeout && (r.connectionTimeout = n.connectionTimeout),
            this.relays.set(e, r)),
          await r.connect(),
          r
        );
      }
      close(e) {
        e.map(At).forEach((n) => {
          var r;
          (r = this.relays.get(n)) == null || r.close();
        });
      }
      subscribeMany(e, n, r) {
        return this.subscribeManyMap(Object.fromEntries(e.map((o) => [o, n])), r);
      }
      subscribeManyMap(e, n) {
        this.trackRelays &&
          (n.receivedEvent = (p, h) => {
            let b = this.seenOn.get(h);
            b || ((b = new Set()), this.seenOn.set(h, b)), b.add(p);
          });
        const r = new Set(),
          o = [],
          i = Object.keys(e).length,
          s = [];
        let c = (p) => {
          var h;
          (s[p] = !0), s.filter((b) => b).length === i && ((h = n.oneose) == null || h.call(n), (c = () => {}));
        };
        const a = [];
        let l = (p, h) => {
          var b;
          c(p),
            (a[p] = h),
            a.filter((d) => d).length === i && ((b = n.onclose) == null || b.call(n, a), (l = () => {}));
        };
        const f = (p) => {
            var b;
            if ((b = n.alreadyHaveEvent) != null && b.call(n, p)) return !0;
            const h = r.has(p);
            return r.add(p), h;
          },
          u = Promise.all(
            Object.entries(e).map(async (p, h, b) => {
              if (b.indexOf(p) !== h) {
                l(h, "duplicate url");
                return;
              }
              let [d, g] = p;
              d = At(d);
              let w;
              try {
                w = await this.ensureRelay(d, {
                  connectionTimeout: n.maxWait ? Math.max(n.maxWait * 0.8, n.maxWait - 1e3) : void 0,
                });
              } catch (S) {
                l(h, (S == null ? void 0 : S.message) || String(S));
                return;
              }
              let y = w.subscribe(g, {
                ...n,
                oneose: () => c(h),
                onclose: (S) => l(h, S),
                alreadyHaveEvent: f,
                eoseTimeout: n.maxWait,
              });
              o.push(y);
            }),
          );
        return {
          async close() {
            await u,
              o.forEach((p) => {
                p.close();
              });
          },
        };
      }
      subscribeManyEose(e, n, r) {
        const o = this.subscribeMany(e, n, {
          ...r,
          oneose() {
            o.close();
          },
        });
        return o;
      }
      async querySync(e, n, r) {
        return new Promise(async (o) => {
          const i = [];
          this.subscribeManyEose(e, [n], {
            ...r,
            onevent(s) {
              i.push(s);
            },
            onclose(s) {
              o(i);
            },
          });
        });
      }
      async get(e, n, r) {
        n.limit = 1;
        const o = await this.querySync(e, n, r);
        return o.sort((i, s) => s.created_at - i.created_at), o[0] || null;
      }
      publish(e, n) {
        return e.map(At).map(async (r, o, i) => {
          if (i.indexOf(r) !== o) return Promise.reject("duplicate url");
          let s = await this.ensureRelay(r);
          return s.publish(n).then((c) => {
            if (this.trackRelays) {
              let a = this.seenOn.get(n.id);
              a || ((a = new Set()), this.seenOn.set(n.id, a)), a.add(s);
            }
            return c;
          });
        });
      }
      listConnectionStatus() {
        const e = new Map();
        return this.relays.forEach((n, r) => e.set(r, n.connected)), e;
      }
      destroy() {
        this.relays.forEach((e) => e.close()), (this.relays = new Map());
      }
    },
    Dr;
  try {
    Dr = WebSocket;
  } catch {}
  var $s = class extends qs {
    constructor() {
      super({ verifyEvent: Ts, websocketImplementation: Dr });
    }
  };
  function Cn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`positive integer expected, not ${t}`);
  }
  function Vr(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function Yr(t) {
    return t instanceof Uint8Array || (t != null && typeof t == "object" && t.constructor.name === "Uint8Array");
  }
  function we(t, ...e) {
    if (!Yr(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
      throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
  }
  function gt(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Un(t, e) {
    we(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
  }
  /*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */ const te = (t) =>
      new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    zs = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
  if (!(new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68))
    throw new Error("Non little-endian hardware is not supported");
  function Pn(t) {
    if (typeof t != "string") throw new Error(`string expected, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function We(t) {
    if (typeof t == "string") t = Pn(t);
    else if (Yr(t)) t = t.slice();
    else throw new Error(`Uint8Array expected, got ${typeof t}`);
    return t;
  }
  function Ks(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function Ws(t, e) {
    if (t.length !== e.length) return !1;
    let n = 0;
    for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
    return n === 0;
  }
  const Ds = (t, e) => (Object.assign(e, t), e),
    Oe = 16,
    Hn = new Uint8Array(16),
    Ae = te(Hn),
    Vs = 225,
    Ys = (t, e, n, r) => {
      const o = r & 1;
      return {
        s3: (n << 31) | (r >>> 1),
        s2: (e << 31) | (n >>> 1),
        s1: (t << 31) | (e >>> 1),
        s0: (t >>> 1) ^ ((Vs << 24) & -(o & 1)),
      };
    },
    ye = (t) =>
      (((t >>> 0) & 255) << 24) | (((t >>> 8) & 255) << 16) | (((t >>> 16) & 255) << 8) | ((t >>> 24) & 255) | 0;
  function Fs(t) {
    t.reverse();
    const e = t[15] & 1;
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      (t[r] = (o >>> 1) | n), (n = (o & 1) << 7);
    }
    return (t[0] ^= -e & 225), t;
  }
  const Gs = (t) => (t > 64 * 1024 ? 8 : t > 1024 ? 4 : 2);
  class Fr {
    constructor(e, n) {
      (this.blockLen = Oe),
        (this.outputLen = Oe),
        (this.s0 = 0),
        (this.s1 = 0),
        (this.s2 = 0),
        (this.s3 = 0),
        (this.finished = !1),
        (e = We(e)),
        we(e, 16);
      const r = zs(e);
      let o = r.getUint32(0, !1),
        i = r.getUint32(4, !1),
        s = r.getUint32(8, !1),
        c = r.getUint32(12, !1);
      const a = [];
      for (let b = 0; b < 128; b++)
        a.push({ s0: ye(o), s1: ye(i), s2: ye(s), s3: ye(c) }), ({ s0: o, s1: i, s2: s, s3: c } = Ys(o, i, s, c));
      const l = Gs(n || 1024);
      if (![1, 2, 4, 8].includes(l)) throw new Error(`ghash: wrong window size=${l}, should be 2, 4 or 8`);
      this.W = l;
      const u = 128 / l,
        p = (this.windowSize = 2 ** l),
        h = [];
      for (let b = 0; b < u; b++)
        for (let d = 0; d < p; d++) {
          let g = 0,
            w = 0,
            y = 0,
            S = 0;
          for (let L = 0; L < l; L++) {
            if (!((d >>> (l - L - 1)) & 1)) continue;
            const { s0: _, s1: E, s2: m, s3: x } = a[l * b + L];
            (g ^= _), (w ^= E), (y ^= m), (S ^= x);
          }
          h.push({ s0: g, s1: w, s2: y, s3: S });
        }
      this.t = h;
    }
    _updateBlock(e, n, r, o) {
      (e ^= this.s0), (n ^= this.s1), (r ^= this.s2), (o ^= this.s3);
      const { W: i, t: s, windowSize: c } = this;
      let a = 0,
        l = 0,
        f = 0,
        u = 0;
      const p = (1 << i) - 1;
      let h = 0;
      for (const b of [e, n, r, o])
        for (let d = 0; d < 4; d++) {
          const g = (b >>> (8 * d)) & 255;
          for (let w = 8 / i - 1; w >= 0; w--) {
            const y = (g >>> (i * w)) & p,
              { s0: S, s1: L, s2: H, s3: _ } = s[h * c + y];
            (a ^= S), (l ^= L), (f ^= H), (u ^= _), (h += 1);
          }
        }
      (this.s0 = a), (this.s1 = l), (this.s2 = f), (this.s3 = u);
    }
    update(e) {
      (e = We(e)), gt(this);
      const n = te(e),
        r = Math.floor(e.length / Oe),
        o = e.length % Oe;
      for (let i = 0; i < r; i++) this._updateBlock(n[i * 4 + 0], n[i * 4 + 1], n[i * 4 + 2], n[i * 4 + 3]);
      return o && (Hn.set(e.subarray(r * Oe)), this._updateBlock(Ae[0], Ae[1], Ae[2], Ae[3]), Ae.fill(0)), this;
    }
    destroy() {
      const { t: e } = this;
      for (const n of e) (n.s0 = 0), (n.s1 = 0), (n.s2 = 0), (n.s3 = 0);
    }
    digestInto(e) {
      gt(this), Un(e, this), (this.finished = !0);
      const { s0: n, s1: r, s2: o, s3: i } = this,
        s = te(e);
      return (s[0] = n), (s[1] = r), (s[2] = o), (s[3] = i), e;
    }
    digest() {
      const e = new Uint8Array(Oe);
      return this.digestInto(e), this.destroy(), e;
    }
  }
  class Zs extends Fr {
    constructor(e, n) {
      e = We(e);
      const r = Fs(e.slice());
      super(r, n), r.fill(0);
    }
    update(e) {
      (e = We(e)), gt(this);
      const n = te(e),
        r = e.length % Oe,
        o = Math.floor(e.length / Oe);
      for (let i = 0; i < o; i++)
        this._updateBlock(ye(n[i * 4 + 3]), ye(n[i * 4 + 2]), ye(n[i * 4 + 1]), ye(n[i * 4 + 0]));
      return (
        r && (Hn.set(e.subarray(o * Oe)), this._updateBlock(ye(Ae[3]), ye(Ae[2]), ye(Ae[1]), ye(Ae[0])), Ae.fill(0)),
        this
      );
    }
    digestInto(e) {
      gt(this), Un(e, this), (this.finished = !0);
      const { s0: n, s1: r, s2: o, s3: i } = this,
        s = te(e);
      return (s[0] = n), (s[1] = r), (s[2] = o), (s[3] = i), e.reverse();
    }
  }
  function Gr(t) {
    const e = (r, o) => t(o, r.length).update(We(r)).digest(),
      n = t(new Uint8Array(16), 0);
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = (r, o) => t(r, o)), e;
  }
  Gr((t, e) => new Fr(t, e)), Gr((t, e) => new Zs(t, e));
  const De = 16,
    Js = 283;
  function Rn(t) {
    return (t << 1) ^ (Js & -(t >> 7));
  }
  function pt(t, e) {
    let n = 0;
    for (; e > 0; e >>= 1) (n ^= t & -(e & 1)), (t = Rn(t));
    return n;
  }
  const Mn = (() => {
      let t = new Uint8Array(256);
      for (let n = 0, r = 1; n < 256; n++, r ^= Rn(r)) t[n] = r;
      const e = new Uint8Array(256);
      e[0] = 99;
      for (let n = 0; n < 255; n++) {
        let r = t[255 - n];
        (r |= r << 8), (e[t[n]] = (r ^ (r >> 4) ^ (r >> 5) ^ (r >> 6) ^ (r >> 7) ^ 99) & 255);
      }
      return e;
    })(),
    Qs = Mn.map((t, e) => Mn.indexOf(e)),
    Xs = (t) => (t << 24) | (t >>> 8),
    jn = (t) => (t << 8) | (t >>> 24);
  function Zr(t, e) {
    if (t.length !== 256) throw new Error("Wrong sbox length");
    const n = new Uint32Array(256).map((l, f) => e(t[f])),
      r = n.map(jn),
      o = r.map(jn),
      i = o.map(jn),
      s = new Uint32Array(256 * 256),
      c = new Uint32Array(256 * 256),
      a = new Uint16Array(256 * 256);
    for (let l = 0; l < 256; l++)
      for (let f = 0; f < 256; f++) {
        const u = l * 256 + f;
        (s[u] = n[l] ^ r[f]), (c[u] = o[l] ^ i[f]), (a[u] = (t[l] << 8) | t[f]);
      }
    return { sbox: t, sbox2: a, T0: n, T1: r, T2: o, T3: i, T01: s, T23: c };
  }
  const qn = Zr(Mn, (t) => (pt(t, 3) << 24) | (t << 16) | (t << 8) | pt(t, 2)),
    Jr = Zr(Qs, (t) => (pt(t, 11) << 24) | (pt(t, 13) << 16) | (pt(t, 9) << 8) | pt(t, 14)),
    ec = (() => {
      const t = new Uint8Array(16);
      for (let e = 0, n = 1; e < 16; e++, n = Rn(n)) t[e] = n;
      return t;
    })();
  function Qr(t) {
    we(t);
    const e = t.length;
    if (![16, 24, 32].includes(e)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${e}`);
    const { sbox2: n } = qn,
      r = te(t),
      o = r.length,
      i = (c) => Be(n, c, c, c, c),
      s = new Uint32Array(e + 28);
    s.set(r);
    for (let c = o; c < s.length; c++) {
      let a = s[c - 1];
      c % o === 0 ? (a = i(Xs(a)) ^ ec[c / o - 1]) : o > 6 && c % o === 4 && (a = i(a)), (s[c] = s[c - o] ^ a);
    }
    return s;
  }
  function tc(t) {
    const e = Qr(t),
      n = e.slice(),
      r = e.length,
      { sbox2: o } = qn,
      { T0: i, T1: s, T2: c, T3: a } = Jr;
    for (let l = 0; l < r; l += 4) for (let f = 0; f < 4; f++) n[l + f] = e[r - l - 4 + f];
    e.fill(0);
    for (let l = 4; l < r - 4; l++) {
      const f = n[l],
        u = Be(o, f, f, f, f);
      n[l] = i[u & 255] ^ s[(u >>> 8) & 255] ^ c[(u >>> 16) & 255] ^ a[u >>> 24];
    }
    return n;
  }
  function Ve(t, e, n, r, o, i) {
    return t[((n << 8) & 65280) | ((r >>> 8) & 255)] ^ e[((o >>> 8) & 65280) | ((i >>> 24) & 255)];
  }
  function Be(t, e, n, r, o) {
    return t[(e & 255) | (n & 65280)] | (t[((r >>> 16) & 255) | ((o >>> 16) & 65280)] << 16);
  }
  function Xr(t, e, n, r, o) {
    const { sbox2: i, T01: s, T23: c } = qn;
    let a = 0;
    (e ^= t[a++]), (n ^= t[a++]), (r ^= t[a++]), (o ^= t[a++]);
    const l = t.length / 4 - 2;
    for (let b = 0; b < l; b++) {
      const d = t[a++] ^ Ve(s, c, e, n, r, o),
        g = t[a++] ^ Ve(s, c, n, r, o, e),
        w = t[a++] ^ Ve(s, c, r, o, e, n),
        y = t[a++] ^ Ve(s, c, o, e, n, r);
      (e = d), (n = g), (r = w), (o = y);
    }
    const f = t[a++] ^ Be(i, e, n, r, o),
      u = t[a++] ^ Be(i, n, r, o, e),
      p = t[a++] ^ Be(i, r, o, e, n),
      h = t[a++] ^ Be(i, o, e, n, r);
    return { s0: f, s1: u, s2: p, s3: h };
  }
  function nc(t, e, n, r, o) {
    const { sbox2: i, T01: s, T23: c } = Jr;
    let a = 0;
    (e ^= t[a++]), (n ^= t[a++]), (r ^= t[a++]), (o ^= t[a++]);
    const l = t.length / 4 - 2;
    for (let b = 0; b < l; b++) {
      const d = t[a++] ^ Ve(s, c, e, o, r, n),
        g = t[a++] ^ Ve(s, c, n, e, o, r),
        w = t[a++] ^ Ve(s, c, r, n, e, o),
        y = t[a++] ^ Ve(s, c, o, r, n, e);
      (e = d), (n = g), (r = w), (o = y);
    }
    const f = t[a++] ^ Be(i, e, o, r, n),
      u = t[a++] ^ Be(i, n, e, o, r),
      p = t[a++] ^ Be(i, r, n, e, o),
      h = t[a++] ^ Be(i, o, r, n, e);
    return { s0: f, s1: u, s2: p, s3: h };
  }
  function eo(t, e) {
    if (!e) return new Uint8Array(t);
    if ((we(e), e.length < t))
      throw new Error(`aes: wrong destination length, expected at least ${t}, got: ${e.length}`);
    return e;
  }
  function rc(t) {
    if ((we(t), t.length % De !== 0))
      throw new Error(`aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size ${De}`);
  }
  function oc(t, e, n) {
    let r = t.length;
    const o = r % De;
    if (!e && o !== 0) throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
    const i = te(t);
    if (e) {
      let a = De - o;
      a || (a = De), (r = r + a);
    }
    const s = eo(r, n),
      c = te(s);
    return { b: i, o: c, out: s };
  }
  function ic(t, e) {
    if (!e) return t;
    const n = t.length;
    if (!n) throw new Error("aes/pcks5: empty ciphertext not allowed");
    const r = t[n - 1];
    if (r <= 0 || r > 16) throw new Error(`aes/pcks5: wrong padding byte: ${r}`);
    const o = t.subarray(0, -r);
    for (let i = 0; i < r; i++) if (t[n - i - 1] !== r) throw new Error("aes/pcks5: wrong padding");
    return o;
  }
  function sc(t) {
    const e = new Uint8Array(16),
      n = te(e);
    e.set(t);
    const r = De - t.length;
    for (let o = De - r; o < De; o++) e[o] = r;
    return n;
  }
  const to = Ds({ blockSize: 16, nonceLength: 16 }, function (e, n, r = {}) {
    we(e), we(n, 16);
    const o = !r.disablePadding;
    return {
      encrypt: (i, s) => {
        const c = Qr(e),
          { b: a, o: l, out: f } = oc(i, o, s),
          u = te(n);
        let p = u[0],
          h = u[1],
          b = u[2],
          d = u[3],
          g = 0;
        for (; g + 4 <= a.length; )
          (p ^= a[g + 0]),
            (h ^= a[g + 1]),
            (b ^= a[g + 2]),
            (d ^= a[g + 3]),
            ({ s0: p, s1: h, s2: b, s3: d } = Xr(c, p, h, b, d)),
            (l[g++] = p),
            (l[g++] = h),
            (l[g++] = b),
            (l[g++] = d);
        if (o) {
          const w = sc(i.subarray(g * 4));
          (p ^= w[0]),
            (h ^= w[1]),
            (b ^= w[2]),
            (d ^= w[3]),
            ({ s0: p, s1: h, s2: b, s3: d } = Xr(c, p, h, b, d)),
            (l[g++] = p),
            (l[g++] = h),
            (l[g++] = b),
            (l[g++] = d);
        }
        return c.fill(0), f;
      },
      decrypt: (i, s) => {
        rc(i);
        const c = tc(e),
          a = te(n),
          l = eo(i.length, s),
          f = te(i),
          u = te(l);
        let p = a[0],
          h = a[1],
          b = a[2],
          d = a[3];
        for (let g = 0; g + 4 <= f.length; ) {
          const w = p,
            y = h,
            S = b,
            L = d;
          (p = f[g + 0]), (h = f[g + 1]), (b = f[g + 2]), (d = f[g + 3]);
          const { s0: H, s1: _, s2: E, s3: m } = nc(c, p, h, b, d);
          (u[g++] = H ^ w), (u[g++] = _ ^ y), (u[g++] = E ^ S), (u[g++] = m ^ L);
        }
        return c.fill(0), ic(l, o);
      },
    };
  });
  /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function bt(t) {
    if (!Number.isSafeInteger(t)) throw new Error(`Wrong integer: ${t}`);
  }
  function Te(...t) {
    const e = (o, i) => (s) => o(i(s)),
      n = Array.from(t)
        .reverse()
        .reduce((o, i) => (o ? e(o, i.encode) : i.encode), void 0),
      r = t.reduce((o, i) => (o ? e(o, i.decode) : i.decode), void 0);
    return { encode: n, decode: r };
  }
  function Ne(t) {
    return {
      encode: (e) => {
        if (!Array.isArray(e) || (e.length && typeof e[0] != "number"))
          throw new Error("alphabet.encode input should be an array of numbers");
        return e.map((n) => {
          if ((bt(n), n < 0 || n >= t.length))
            throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);
          return t[n];
        });
      },
      decode: (e) => {
        if (!Array.isArray(e) || (e.length && typeof e[0] != "string"))
          throw new Error("alphabet.decode input should be array of strings");
        return e.map((n) => {
          if (typeof n != "string") throw new Error(`alphabet.decode: not string element=${n}`);
          const r = t.indexOf(n);
          if (r === -1) throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);
          return r;
        });
      },
    };
  }
  function Le(t = "") {
    if (typeof t != "string") throw new Error("join separator should be string");
    return {
      encode: (e) => {
        if (!Array.isArray(e) || (e.length && typeof e[0] != "string"))
          throw new Error("join.encode input should be array of strings");
        for (let n of e) if (typeof n != "string") throw new Error(`join.encode: non-string input=${n}`);
        return e.join(t);
      },
      decode: (e) => {
        if (typeof e != "string") throw new Error("join.decode input should be string");
        return e.split(t);
      },
    };
  }
  function Vt(t, e = "=") {
    if ((bt(t), typeof e != "string")) throw new Error("padding chr should be string");
    return {
      encode(n) {
        if (!Array.isArray(n) || (n.length && typeof n[0] != "string"))
          throw new Error("padding.encode input should be array of strings");
        for (let r of n) if (typeof r != "string") throw new Error(`padding.encode: non-string input=${r}`);
        for (; (n.length * t) % 8; ) n.push(e);
        return n;
      },
      decode(n) {
        if (!Array.isArray(n) || (n.length && typeof n[0] != "string"))
          throw new Error("padding.encode input should be array of strings");
        for (let o of n) if (typeof o != "string") throw new Error(`padding.decode: non-string input=${o}`);
        let r = n.length;
        if ((r * t) % 8) throw new Error("Invalid padding: string should have whole number of bytes");
        for (; r > 0 && n[r - 1] === e; r--)
          if (!(((r - 1) * t) % 8)) throw new Error("Invalid padding: string has too much padding");
        return n.slice(0, r);
      },
    };
  }
  function no(t) {
    if (typeof t != "function") throw new Error("normalize fn should be function");
    return { encode: (e) => e, decode: (e) => t(e) };
  }
  function ro(t, e, n) {
    if (e < 2) throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);
    if (n < 2) throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);
    if (!Array.isArray(t)) throw new Error("convertRadix: data should be array");
    if (!t.length) return [];
    let r = 0;
    const o = [],
      i = Array.from(t);
    for (
      i.forEach((s) => {
        if ((bt(s), s < 0 || s >= e)) throw new Error(`Wrong integer: ${s}`);
      });
      ;

    ) {
      let s = 0,
        c = !0;
      for (let a = r; a < i.length; a++) {
        const l = i[a],
          f = e * s + l;
        if (!Number.isSafeInteger(f) || (e * s) / e !== s || f - l !== e * s)
          throw new Error("convertRadix: carry overflow");
        if (((s = f % n), (i[a] = Math.floor(f / n)), !Number.isSafeInteger(i[a]) || i[a] * n + s !== f))
          throw new Error("convertRadix: carry overflow");
        if (c) i[a] ? (c = !1) : (r = a);
        else continue;
      }
      if ((o.push(s), c)) break;
    }
    for (let s = 0; s < t.length - 1 && t[s] === 0; s++) o.push(0);
    return o.reverse();
  }
  const oo = (t, e) => (e ? oo(e, t % e) : t),
    Yt = (t, e) => t + (e - oo(t, e));
  function $n(t, e, n, r) {
    if (!Array.isArray(t)) throw new Error("convertRadix2: data should be array");
    if (e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
    if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong to=${n}`);
    if (Yt(e, n) > 32) throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Yt(e, n)}`);
    let o = 0,
      i = 0;
    const s = 2 ** n - 1,
      c = [];
    for (const a of t) {
      if ((bt(a), a >= 2 ** e)) throw new Error(`convertRadix2: invalid data word=${a} from=${e}`);
      if (((o = (o << e) | a), i + e > 32)) throw new Error(`convertRadix2: carry overflow pos=${i} from=${e}`);
      for (i += e; i >= n; i -= n) c.push(((o >> (i - n)) & s) >>> 0);
      o &= 2 ** i - 1;
    }
    if (((o = (o << (n - i)) & s), !r && i >= e)) throw new Error("Excess padding");
    if (!r && o) throw new Error(`Non-zero padding: ${o}`);
    return r && i > 0 && c.push(o >>> 0), c;
  }
  function cc(t) {
    return (
      bt(t),
      {
        encode: (e) => {
          if (!(e instanceof Uint8Array)) throw new Error("radix.encode input should be Uint8Array");
          return ro(Array.from(e), 2 ** 8, t);
        },
        decode: (e) => {
          if (!Array.isArray(e) || (e.length && typeof e[0] != "number"))
            throw new Error("radix.decode input should be array of strings");
          return Uint8Array.from(ro(e, t, 2 ** 8));
        },
      }
    );
  }
  function Ye(t, e = !1) {
    if ((bt(t), t <= 0 || t > 32)) throw new Error("radix2: bits should be in (0..32]");
    if (Yt(8, t) > 32 || Yt(t, 8) > 32) throw new Error("radix2: carry overflow");
    return {
      encode: (n) => {
        if (!(n instanceof Uint8Array)) throw new Error("radix2.encode input should be Uint8Array");
        return $n(Array.from(n), 8, t, !e);
      },
      decode: (n) => {
        if (!Array.isArray(n) || (n.length && typeof n[0] != "number"))
          throw new Error("radix2.decode input should be array of strings");
        return Uint8Array.from($n(n, t, 8, e));
      },
    };
  }
  function io(t) {
    if (typeof t != "function") throw new Error("unsafeWrapper fn should be function");
    return function (...e) {
      try {
        return t.apply(null, e);
      } catch {}
    };
  }
  const ac = Te(Ye(4), Ne("0123456789ABCDEF"), Le("")),
    lc = Te(Ye(5), Ne("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), Vt(5), Le(""));
  Te(Ye(5), Ne("0123456789ABCDEFGHIJKLMNOPQRSTUV"), Vt(5), Le("")),
    Te(
      Ye(5),
      Ne("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
      Le(""),
      no((t) => t.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
    );
  const wt = Te(Ye(6), Ne("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), Vt(6), Le("")),
    uc = Te(Ye(6), Ne("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), Vt(6), Le("")),
    zn = (t) => Te(cc(58), Ne(t), Le("")),
    Kn = zn("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
  zn("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
    zn("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
  const so = [0, 2, 3, 5, 6, 7, 9, 10, 11],
    fc = {
      encode(t) {
        let e = "";
        for (let n = 0; n < t.length; n += 8) {
          const r = t.subarray(n, n + 8);
          e += Kn.encode(r).padStart(so[r.length], "1");
        }
        return e;
      },
      decode(t) {
        let e = [];
        for (let n = 0; n < t.length; n += 11) {
          const r = t.slice(n, n + 11),
            o = so.indexOf(r.length),
            i = Kn.decode(r);
          for (let s = 0; s < i.length - o; s++) if (i[s] !== 0) throw new Error("base58xmr: wrong padding");
          e = e.concat(Array.from(i.slice(i.length - o)));
        }
        return Uint8Array.from(e);
      },
    },
    Wn = Te(Ne("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), Le("")),
    co = [996825010, 642813549, 513874426, 1027748829, 705979059];
  function Bt(t) {
    const e = t >> 25;
    let n = (t & 33554431) << 5;
    for (let r = 0; r < co.length; r++) ((e >> r) & 1) === 1 && (n ^= co[r]);
    return n;
  }
  function ao(t, e, n = 1) {
    const r = t.length;
    let o = 1;
    for (let i = 0; i < r; i++) {
      const s = t.charCodeAt(i);
      if (s < 33 || s > 126) throw new Error(`Invalid prefix (${t})`);
      o = Bt(o) ^ (s >> 5);
    }
    o = Bt(o);
    for (let i = 0; i < r; i++) o = Bt(o) ^ (t.charCodeAt(i) & 31);
    for (let i of e) o = Bt(o) ^ i;
    for (let i = 0; i < 6; i++) o = Bt(o);
    return (o ^= n), Wn.encode($n([o % 2 ** 30], 30, 5, !1));
  }
  function lo(t) {
    const e = t === "bech32" ? 1 : 734539939,
      n = Ye(5),
      r = n.decode,
      o = n.encode,
      i = io(r);
    function s(f, u, p = 90) {
      if (typeof f != "string") throw new Error(`bech32.encode prefix should be string, not ${typeof f}`);
      if (!Array.isArray(u) || (u.length && typeof u[0] != "number"))
        throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);
      const h = f.length + 7 + u.length;
      if (p !== !1 && h > p) throw new TypeError(`Length ${h} exceeds limit ${p}`);
      return (f = f.toLowerCase()), `${f}1${Wn.encode(u)}${ao(f, u, e)}`;
    }
    function c(f, u = 90) {
      if (typeof f != "string") throw new Error(`bech32.decode input should be string, not ${typeof f}`);
      if (f.length < 8 || (u !== !1 && f.length > u))
        throw new TypeError(`Wrong string length: ${f.length} (${f}). Expected (8..${u})`);
      const p = f.toLowerCase();
      if (f !== p && f !== f.toUpperCase()) throw new Error("String must be lowercase or uppercase");
      f = p;
      const h = f.lastIndexOf("1");
      if (h === 0 || h === -1) throw new Error('Letter "1" must be present between prefix and data only');
      const b = f.slice(0, h),
        d = f.slice(h + 1);
      if (d.length < 6) throw new Error("Data must be at least 6 characters long");
      const g = Wn.decode(d).slice(0, -6),
        w = ao(b, g, e);
      if (!d.endsWith(w)) throw new Error(`Invalid checksum in ${f}: expected "${w}"`);
      return { prefix: b, words: g };
    }
    const a = io(c);
    function l(f) {
      const { prefix: u, words: p } = c(f, !1);
      return { prefix: u, words: p, bytes: r(p) };
    }
    return { encode: s, decode: c, decodeToBytes: l, decodeUnsafe: a, fromWords: r, fromWordsUnsafe: i, toWords: o };
  }
  const uo = lo("bech32");
  lo("bech32m");
  const dc = { encode: (t) => new TextDecoder().decode(t), decode: (t) => new TextEncoder().encode(t) },
    hc = Te(
      Ye(4),
      Ne("0123456789abcdef"),
      Le(""),
      no((t) => {
        if (typeof t != "string" || t.length % 2)
          throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);
        return t.toLowerCase();
      }),
    );
  `${Object.keys({ utf8: dc, hex: hc, base16: ac, base32: lc, base64: wt, base64url: uc, base58: Kn, base58xmr: fc }).join(", ")}`;
  const ae = (t, e) => (t[e++] & 255) | ((t[e++] & 255) << 8);
  class gc {
    constructor(e) {
      (this.blockLen = 16),
        (this.outputLen = 16),
        (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.pos = 0),
        (this.finished = !1),
        (e = We(e)),
        we(e, 32);
      const n = ae(e, 0),
        r = ae(e, 2),
        o = ae(e, 4),
        i = ae(e, 6),
        s = ae(e, 8),
        c = ae(e, 10),
        a = ae(e, 12),
        l = ae(e, 14);
      (this.r[0] = n & 8191),
        (this.r[1] = ((n >>> 13) | (r << 3)) & 8191),
        (this.r[2] = ((r >>> 10) | (o << 6)) & 7939),
        (this.r[3] = ((o >>> 7) | (i << 9)) & 8191),
        (this.r[4] = ((i >>> 4) | (s << 12)) & 255),
        (this.r[5] = (s >>> 1) & 8190),
        (this.r[6] = ((s >>> 14) | (c << 2)) & 8191),
        (this.r[7] = ((c >>> 11) | (a << 5)) & 8065),
        (this.r[8] = ((a >>> 8) | (l << 8)) & 8191),
        (this.r[9] = (l >>> 5) & 127);
      for (let f = 0; f < 8; f++) this.pad[f] = ae(e, 16 + 2 * f);
    }
    process(e, n, r = !1) {
      const o = r ? 0 : 2048,
        { h: i, r: s } = this,
        c = s[0],
        a = s[1],
        l = s[2],
        f = s[3],
        u = s[4],
        p = s[5],
        h = s[6],
        b = s[7],
        d = s[8],
        g = s[9],
        w = ae(e, n + 0),
        y = ae(e, n + 2),
        S = ae(e, n + 4),
        L = ae(e, n + 6),
        H = ae(e, n + 8),
        _ = ae(e, n + 10),
        E = ae(e, n + 12),
        m = ae(e, n + 14);
      let x = i[0] + (w & 8191),
        N = i[1] + (((w >>> 13) | (y << 3)) & 8191),
        C = i[2] + (((y >>> 10) | (S << 6)) & 8191),
        $ = i[3] + (((S >>> 7) | (L << 9)) & 8191),
        q = i[4] + (((L >>> 4) | (H << 12)) & 8191),
        z = i[5] + ((H >>> 1) & 8191),
        v = i[6] + (((H >>> 14) | (_ << 2)) & 8191),
        B = i[7] + (((_ >>> 11) | (E << 5)) & 8191),
        U = i[8] + (((E >>> 8) | (m << 8)) & 8191),
        R = i[9] + ((m >>> 5) | o),
        I = 0,
        j = I + x * c + N * (5 * g) + C * (5 * d) + $ * (5 * b) + q * (5 * h);
      (I = j >>> 13),
        (j &= 8191),
        (j += z * (5 * p) + v * (5 * u) + B * (5 * f) + U * (5 * l) + R * (5 * a)),
        (I += j >>> 13),
        (j &= 8191);
      let V = I + x * a + N * c + C * (5 * g) + $ * (5 * d) + q * (5 * b);
      (I = V >>> 13),
        (V &= 8191),
        (V += z * (5 * h) + v * (5 * p) + B * (5 * u) + U * (5 * f) + R * (5 * l)),
        (I += V >>> 13),
        (V &= 8191);
      let K = I + x * l + N * a + C * c + $ * (5 * g) + q * (5 * d);
      (I = K >>> 13),
        (K &= 8191),
        (K += z * (5 * b) + v * (5 * h) + B * (5 * p) + U * (5 * u) + R * (5 * f)),
        (I += K >>> 13),
        (K &= 8191);
      let X = I + x * f + N * l + C * a + $ * c + q * (5 * g);
      (I = X >>> 13),
        (X &= 8191),
        (X += z * (5 * d) + v * (5 * b) + B * (5 * h) + U * (5 * p) + R * (5 * u)),
        (I += X >>> 13),
        (X &= 8191);
      let Z = I + x * u + N * f + C * l + $ * a + q * c;
      (I = Z >>> 13),
        (Z &= 8191),
        (Z += z * (5 * g) + v * (5 * d) + B * (5 * b) + U * (5 * h) + R * (5 * p)),
        (I += Z >>> 13),
        (Z &= 8191);
      let ie = I + x * p + N * u + C * f + $ * l + q * a;
      (I = ie >>> 13),
        (ie &= 8191),
        (ie += z * c + v * (5 * g) + B * (5 * d) + U * (5 * b) + R * (5 * h)),
        (I += ie >>> 13),
        (ie &= 8191);
      let Q = I + x * h + N * p + C * u + $ * f + q * l;
      (I = Q >>> 13),
        (Q &= 8191),
        (Q += z * a + v * c + B * (5 * g) + U * (5 * d) + R * (5 * b)),
        (I += Q >>> 13),
        (Q &= 8191);
      let se = I + x * b + N * h + C * p + $ * u + q * f;
      (I = se >>> 13),
        (se &= 8191),
        (se += z * l + v * a + B * c + U * (5 * g) + R * (5 * d)),
        (I += se >>> 13),
        (se &= 8191);
      let he = I + x * d + N * b + C * h + $ * p + q * u;
      (I = he >>> 13),
        (he &= 8191),
        (he += z * f + v * l + B * a + U * c + R * (5 * g)),
        (I += he >>> 13),
        (he &= 8191);
      let ne = I + x * g + N * d + C * b + $ * h + q * p;
      (I = ne >>> 13),
        (ne &= 8191),
        (ne += z * u + v * f + B * l + U * a + R * c),
        (I += ne >>> 13),
        (ne &= 8191),
        (I = ((I << 2) + I) | 0),
        (I = (I + j) | 0),
        (j = I & 8191),
        (I = I >>> 13),
        (V += I),
        (i[0] = j),
        (i[1] = V),
        (i[2] = K),
        (i[3] = X),
        (i[4] = Z),
        (i[5] = ie),
        (i[6] = Q),
        (i[7] = se),
        (i[8] = he),
        (i[9] = ne);
    }
    finalize() {
      const { h: e, pad: n } = this,
        r = new Uint16Array(10);
      let o = e[1] >>> 13;
      e[1] &= 8191;
      for (let c = 2; c < 10; c++) (e[c] += o), (o = e[c] >>> 13), (e[c] &= 8191);
      (e[0] += o * 5),
        (o = e[0] >>> 13),
        (e[0] &= 8191),
        (e[1] += o),
        (o = e[1] >>> 13),
        (e[1] &= 8191),
        (e[2] += o),
        (r[0] = e[0] + 5),
        (o = r[0] >>> 13),
        (r[0] &= 8191);
      for (let c = 1; c < 10; c++) (r[c] = e[c] + o), (o = r[c] >>> 13), (r[c] &= 8191);
      r[9] -= 8192;
      let i = (o ^ 1) - 1;
      for (let c = 0; c < 10; c++) r[c] &= i;
      i = ~i;
      for (let c = 0; c < 10; c++) e[c] = (e[c] & i) | r[c];
      (e[0] = (e[0] | (e[1] << 13)) & 65535),
        (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
        (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
        (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
        (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
        (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
        (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
        (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
      let s = e[0] + n[0];
      e[0] = s & 65535;
      for (let c = 1; c < 8; c++) (s = (((e[c] + n[c]) | 0) + (s >>> 16)) | 0), (e[c] = s & 65535);
    }
    update(e) {
      gt(this);
      const { buffer: n, blockLen: r } = this;
      e = We(e);
      const o = e.length;
      for (let i = 0; i < o; ) {
        const s = Math.min(r - this.pos, o - i);
        if (s === r) {
          for (; r <= o - i; i += r) this.process(e, i);
          continue;
        }
        n.set(e.subarray(i, i + s), this.pos),
          (this.pos += s),
          (i += s),
          this.pos === r && (this.process(n, 0, !1), (this.pos = 0));
      }
      return this;
    }
    destroy() {
      this.h.fill(0), this.r.fill(0), this.buffer.fill(0), this.pad.fill(0);
    }
    digestInto(e) {
      gt(this), Un(e, this), (this.finished = !0);
      const { buffer: n, h: r } = this;
      let { pos: o } = this;
      if (o) {
        for (n[o++] = 1; o < 16; o++) n[o] = 0;
        this.process(n, 0, !0);
      }
      this.finalize();
      let i = 0;
      for (let s = 0; s < 8; s++) (e[i++] = r[s] >>> 0), (e[i++] = r[s] >>> 8);
      return e;
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const r = e.slice(0, n);
      return this.destroy(), r;
    }
  }
  function pc(t) {
    const e = (r, o) => t(o).update(We(r)).digest(),
      n = t(new Uint8Array(32));
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = (r) => t(r)), e;
  }
  pc((t) => new gc(t));
  const bc = Pn("expand 16-byte k"),
    wc = Pn("expand 32-byte k"),
    yc = te(bc),
    mc = te(wc);
  function F(t, e) {
    return (t << e) | (t >>> (32 - e));
  }
  function Dn(t) {
    return t.byteOffset % 4 === 0;
  }
  const Ft = 64,
    xc = 16,
    fo = 2 ** 32 - 1,
    ho = new Uint32Array();
  function vc(t, e, n, r, o, i, s, c) {
    const a = o.length,
      l = new Uint8Array(Ft),
      f = te(l),
      u = Dn(o) && Dn(i),
      p = u ? te(o) : ho,
      h = u ? te(i) : ho;
    for (let b = 0; b < a; s++) {
      if ((t(e, n, r, f, s, c), s >= fo)) throw new Error("arx: counter overflow");
      const d = Math.min(Ft, a - b);
      if (u && d === Ft) {
        const g = b / 4;
        if (b % 4 !== 0) throw new Error("arx: invalid block position");
        for (let w = 0, y; w < xc; w++) (y = g + w), (h[y] = p[y] ^ f[w]);
        b += Ft;
        continue;
      }
      for (let g = 0, w; g < d; g++) (w = b + g), (i[w] = o[w] ^ l[g]);
      b += d;
    }
  }
  function Ec(t, e) {
    const {
      allowShortKeys: n,
      extendNonceFn: r,
      counterLength: o,
      counterRight: i,
      rounds: s,
    } = Ks({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return (
      Cn(o),
      Cn(s),
      Vr(i),
      Vr(n),
      (c, a, l, f, u = 0) => {
        we(c), we(a), we(l);
        const p = l.length;
        if ((f || (f = new Uint8Array(p)), we(f), Cn(u), u < 0 || u >= fo)) throw new Error("arx: counter overflow");
        if (f.length < p) throw new Error(`arx: output (${f.length}) is shorter than data (${p})`);
        const h = [];
        let b = c.length,
          d,
          g;
        if (b === 32) (d = c.slice()), h.push(d), (g = mc);
        else if (b === 16 && n) (d = new Uint8Array(32)), d.set(c), d.set(c, 16), (g = yc), h.push(d);
        else throw new Error(`arx: invalid 32-byte key, got length=${b}`);
        Dn(a) || ((a = a.slice()), h.push(a));
        const w = te(d);
        if (r) {
          if (a.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
          r(g, w, te(a.subarray(0, 16)), w), (a = a.subarray(16));
        }
        const y = 16 - o;
        if (y !== a.length) throw new Error(`arx: nonce must be ${y} or 16 bytes`);
        if (y !== 12) {
          const L = new Uint8Array(12);
          L.set(a, i ? 0 : 12 - a.length), (a = L), h.push(a);
        }
        const S = te(a);
        for (vc(t, g, w, S, l, f, u, s); h.length > 0; ) h.pop().fill(0);
        return f;
      }
    );
  }
  function _c(t, e, n, r, o, i = 20) {
    let s = t[0],
      c = t[1],
      a = t[2],
      l = t[3],
      f = e[0],
      u = e[1],
      p = e[2],
      h = e[3],
      b = e[4],
      d = e[5],
      g = e[6],
      w = e[7],
      y = o,
      S = n[0],
      L = n[1],
      H = n[2],
      _ = s,
      E = c,
      m = a,
      x = l,
      N = f,
      C = u,
      $ = p,
      q = h,
      z = b,
      v = d,
      B = g,
      U = w,
      R = y,
      I = S,
      j = L,
      V = H;
    for (let X = 0; X < i; X += 2)
      (_ = (_ + N) | 0),
        (R = F(R ^ _, 16)),
        (z = (z + R) | 0),
        (N = F(N ^ z, 12)),
        (_ = (_ + N) | 0),
        (R = F(R ^ _, 8)),
        (z = (z + R) | 0),
        (N = F(N ^ z, 7)),
        (E = (E + C) | 0),
        (I = F(I ^ E, 16)),
        (v = (v + I) | 0),
        (C = F(C ^ v, 12)),
        (E = (E + C) | 0),
        (I = F(I ^ E, 8)),
        (v = (v + I) | 0),
        (C = F(C ^ v, 7)),
        (m = (m + $) | 0),
        (j = F(j ^ m, 16)),
        (B = (B + j) | 0),
        ($ = F($ ^ B, 12)),
        (m = (m + $) | 0),
        (j = F(j ^ m, 8)),
        (B = (B + j) | 0),
        ($ = F($ ^ B, 7)),
        (x = (x + q) | 0),
        (V = F(V ^ x, 16)),
        (U = (U + V) | 0),
        (q = F(q ^ U, 12)),
        (x = (x + q) | 0),
        (V = F(V ^ x, 8)),
        (U = (U + V) | 0),
        (q = F(q ^ U, 7)),
        (_ = (_ + C) | 0),
        (V = F(V ^ _, 16)),
        (B = (B + V) | 0),
        (C = F(C ^ B, 12)),
        (_ = (_ + C) | 0),
        (V = F(V ^ _, 8)),
        (B = (B + V) | 0),
        (C = F(C ^ B, 7)),
        (E = (E + $) | 0),
        (R = F(R ^ E, 16)),
        (U = (U + R) | 0),
        ($ = F($ ^ U, 12)),
        (E = (E + $) | 0),
        (R = F(R ^ E, 8)),
        (U = (U + R) | 0),
        ($ = F($ ^ U, 7)),
        (m = (m + q) | 0),
        (I = F(I ^ m, 16)),
        (z = (z + I) | 0),
        (q = F(q ^ z, 12)),
        (m = (m + q) | 0),
        (I = F(I ^ m, 8)),
        (z = (z + I) | 0),
        (q = F(q ^ z, 7)),
        (x = (x + N) | 0),
        (j = F(j ^ x, 16)),
        (v = (v + j) | 0),
        (N = F(N ^ v, 12)),
        (x = (x + N) | 0),
        (j = F(j ^ x, 8)),
        (v = (v + j) | 0),
        (N = F(N ^ v, 7));
    let K = 0;
    (r[K++] = (s + _) | 0),
      (r[K++] = (c + E) | 0),
      (r[K++] = (a + m) | 0),
      (r[K++] = (l + x) | 0),
      (r[K++] = (f + N) | 0),
      (r[K++] = (u + C) | 0),
      (r[K++] = (p + $) | 0),
      (r[K++] = (h + q) | 0),
      (r[K++] = (b + z) | 0),
      (r[K++] = (d + v) | 0),
      (r[K++] = (g + B) | 0),
      (r[K++] = (w + U) | 0),
      (r[K++] = (y + R) | 0),
      (r[K++] = (S + I) | 0),
      (r[K++] = (L + j) | 0),
      (r[K++] = (H + V) | 0);
  }
  const kc = Ec(_c, { counterRight: !1, counterLength: 4, allowShortKeys: !1 });
  class go extends hr {
    constructor(e, n) {
      super(), (this.finished = !1), (this.destroyed = !1), Se.hash(e);
      const r = _t(n);
      if (((this.iHash = e.create()), typeof this.iHash.update != "function"))
        throw new Error("Expected instance of class which extends utils.Hash");
      (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
      const o = this.blockLen,
        i = new Uint8Array(o);
      i.set(r.length > o ? e.create().update(r).digest() : r);
      for (let s = 0; s < i.length; s++) i[s] ^= 54;
      this.iHash.update(i), (this.oHash = e.create());
      for (let s = 0; s < i.length; s++) i[s] ^= 106;
      this.oHash.update(i), i.fill(0);
    }
    update(e) {
      return Se.exists(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Se.exists(this),
        Se.bytes(e, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: n, iHash: r, finished: o, destroyed: i, blockLen: s, outputLen: c } = this;
      return (
        (e = e),
        (e.finished = o),
        (e.destroyed = i),
        (e.blockLen = s),
        (e.outputLen = c),
        (e.oHash = n._cloneInto(e.oHash)),
        (e.iHash = r._cloneInto(e.iHash)),
        e
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const Gt = (t, e, n) => new go(t, e).update(n).digest();
  Gt.create = (t, e) => new go(t, e);
  function Sc(t, e, n) {
    return Se.hash(t), n === void 0 && (n = new Uint8Array(t.outputLen)), Gt(t, _t(n), _t(e));
  }
  const Vn = new Uint8Array([0]),
    po = new Uint8Array();
  function Ac(t, e, n, r = 32) {
    if ((Se.hash(t), Se.number(r), r > 255 * t.outputLen)) throw new Error("Length should be <= 255*HashLen");
    const o = Math.ceil(r / t.outputLen);
    n === void 0 && (n = po);
    const i = new Uint8Array(o * t.outputLen),
      s = Gt.create(t, e),
      c = s._cloneInto(),
      a = new Uint8Array(s.outputLen);
    for (let l = 0; l < o; l++)
      (Vn[0] = l + 1),
        c
          .update(l === 0 ? po : a)
          .update(n)
          .update(Vn)
          .digestInto(a),
        i.set(a, t.outputLen * l),
        s._cloneInto(c);
    return s.destroy(), c.destroy(), a.fill(0), Vn.fill(0), i.slice(0, r);
  }
  var nt = Symbol("verified"),
    Bc = (t) => t instanceof Object;
  function Ic(t) {
    if (
      !Bc(t) ||
      typeof t.kind != "number" ||
      typeof t.content != "string" ||
      typeof t.created_at != "number" ||
      typeof t.pubkey != "string" ||
      !t.pubkey.match(/^[a-f0-9]{64}$/) ||
      !Array.isArray(t.tags)
    )
      return !1;
    for (let e = 0; e < t.tags.length; e++) {
      let n = t.tags[e];
      if (!Array.isArray(n)) return !1;
      for (let r = 0; r < n.length; r++) if (typeof n[r] == "object") return !1;
    }
    return !0;
  }
  var bo = new TextDecoder("utf-8"),
    wo = new TextEncoder();
  function It(t) {
    t.indexOf("://") === -1 && (t = "wss://" + t);
    let e = new URL(t);
    return (
      (e.pathname = e.pathname.replace(/\/+/g, "/")),
      e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)),
      ((e.port === "80" && e.protocol === "ws:") || (e.port === "443" && e.protocol === "wss:")) && (e.port = ""),
      e.searchParams.sort(),
      (e.hash = ""),
      e.toString()
    );
  }
  var Oc = class {
      constructor(t) {
        A(this, "value");
        A(this, "next", null);
        A(this, "prev", null);
        this.value = t;
      }
    },
    Tc = class {
      constructor() {
        A(this, "first");
        A(this, "last");
        (this.first = null), (this.last = null);
      }
      enqueue(t) {
        const e = new Oc(t);
        return (
          this.last
            ? this.last === this.first
              ? ((this.last = e), (this.last.prev = this.first), (this.first.next = e))
              : ((e.prev = this.last), (this.last.next = e), (this.last = e))
            : ((this.first = e), (this.last = e)),
          !0
        );
      }
      dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
          const e = this.first;
          return (this.first = null), (this.last = null), e.value;
        }
        const t = this.first;
        return (this.first = t.next), t.value;
      }
    },
    Nc = class {
      generateSecretKey() {
        return fe.utils.randomPrivateKey();
      }
      getPublicKey(t) {
        return ue(fe.getPublicKey(t));
      }
      finalizeEvent(t, e) {
        const n = t;
        return (n.pubkey = ue(fe.getPublicKey(e))), (n.id = Yn(n)), (n.sig = ue(fe.sign(Yn(n), e))), (n[nt] = !0), n;
      }
      verifyEvent(t) {
        if (typeof t[nt] == "boolean") return t[nt];
        const e = Yn(t);
        if (e !== t.id) return (t[nt] = !1), !1;
        try {
          const n = fe.verify(t.sig, e, t.pubkey);
          return (t[nt] = n), n;
        } catch {
          return (t[nt] = !1), !1;
        }
      }
    };
  function Lc(t) {
    if (!Ic(t)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([0, t.pubkey, t.created_at, t.kind, t.tags, t.content]);
  }
  function Yn(t) {
    let e = dt(wo.encode(Lc(t)));
    return ue(e);
  }
  var Zt = new Nc(),
    Cc = Zt.generateSecretKey,
    Uc = Zt.getPublicKey,
    Pc = Zt.finalizeEvent,
    yo = Zt.verifyEvent;
  async function Hc(t, e, n) {
    const r = t instanceof Uint8Array ? ue(t) : t,
      o = ft.getSharedSecret(r, "02" + e),
      i = mo(o);
    let s = Uint8Array.from(pi(16)),
      c = wo.encode(n),
      a = to(i, s).encrypt(c),
      l = wt.encode(new Uint8Array(a)),
      f = wt.encode(new Uint8Array(s.buffer));
    return `${l}?iv=${f}`;
  }
  async function Rc(t, e, n) {
    const r = t instanceof Uint8Array ? ue(t) : t;
    let [o, i] = n.split("?iv="),
      s = ft.getSharedSecret(r, "02" + e),
      c = mo(s),
      a = wt.decode(i),
      l = wt.decode(o),
      f = to(c, a).decrypt(l);
    return bo.decode(f);
  }
  function mo(t) {
    return t.slice(1, 33);
  }
  var Mc = 1,
    jc = 65535;
  function qc(t, e) {
    const n = ft.getSharedSecret(t, "02" + e).subarray(1, 33);
    return Sc(dt, n, "nip44-v2");
  }
  function $c(t, e) {
    const n = Ac(dt, t, e, 76);
    return { chacha_key: n.subarray(0, 32), chacha_nonce: n.subarray(32, 44), hmac_key: n.subarray(44, 76) };
  }
  function zc(t) {
    if (!Number.isSafeInteger(t) || t < 1) throw new Error("expected positive integer");
    if (t <= 32) return 32;
    const e = 1 << (Math.floor(Math.log2(t - 1)) + 1),
      n = e <= 256 ? 32 : e / 8;
    return n * (Math.floor((t - 1) / n) + 1);
  }
  function Kc(t) {
    const e = new DataView(t.buffer).getUint16(0),
      n = t.subarray(2, 2 + e);
    if (e < Mc || e > jc || n.length !== e || t.length !== 2 + zc(e)) throw new Error("invalid padding");
    return bo.decode(n);
  }
  function Wc(t, e, n) {
    if (n.length !== 32) throw new Error("AAD associated data must be 32 bytes");
    const r = gi(n, e);
    return Gt(dt, t, r);
  }
  function Dc(t) {
    if (typeof t != "string") throw new Error("payload must be a valid string");
    const e = t.length;
    if (e < 132 || e > 87472) throw new Error("invalid payload length: " + e);
    if (t[0] === "#") throw new Error("unknown encryption version");
    let n;
    try {
      n = wt.decode(t);
    } catch (i) {
      throw new Error("invalid base64: " + i.message);
    }
    const r = n.length;
    if (r < 99 || r > 65603) throw new Error("invalid data length: " + r);
    const o = n[0];
    if (o !== 2) throw new Error("unknown encryption version " + o);
    return { nonce: n.subarray(1, 33), ciphertext: n.subarray(33, -32), mac: n.subarray(-32) };
  }
  function Vc(t, e) {
    const { nonce: n, ciphertext: r, mac: o } = Dc(t),
      { chacha_key: i, chacha_nonce: s, hmac_key: c } = $c(e, n),
      a = Wc(c, r, n);
    if (!Ws(a, o)) throw new Error("invalid MAC");
    const l = kc(i, s, r);
    return Kc(l);
  }
  var Yc = /^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/,
    Fc;
  try {
    Fc = fetch;
  } catch {}
  var Gc = 22242,
    xo = 24133;
  function Zc(t, e) {
    if (
      (t.ids && t.ids.indexOf(e.id) === -1) ||
      (t.kinds && t.kinds.indexOf(e.kind) === -1) ||
      (t.authors && t.authors.indexOf(e.pubkey) === -1)
    )
      return !1;
    for (let n in t)
      if (n[0] === "#") {
        let r = n.slice(1),
          o = t[`#${r}`];
        if (o && !e.tags.find(([i, s]) => i === n.slice(1) && o.indexOf(s) !== -1)) return !1;
      }
    return !((t.since && e.created_at < t.since) || (t.until && e.created_at > t.until));
  }
  function Jc(t, e) {
    for (let n = 0; n < t.length; n++) if (Zc(t[n], e)) return !0;
    return !1;
  }
  function Qc(t, e) {
    let n = e.length + 3,
      r = t.indexOf(`"${e}":`) + n,
      o = t.slice(r).indexOf('"') + r + 1;
    return t.slice(o, o + 64);
  }
  function Xc(t) {
    let e = t.slice(0, 22).indexOf('"EVENT"');
    if (e === -1) return null;
    let n = t.slice(e + 7 + 1).indexOf('"');
    if (n === -1) return null;
    let r = e + 7 + 1 + n,
      o = t.slice(r + 1, 80).indexOf('"');
    if (o === -1) return null;
    let i = r + 1 + o;
    return t.slice(r + 1, i);
  }
  function ea(t, e) {
    return {
      kind: Gc,
      created_at: Math.floor(Date.now() / 1e3),
      tags: [
        ["relay", t],
        ["challenge", e],
      ],
      content: "",
    };
  }
  async function ta() {
    return new Promise((t) => {
      const e = new MessageChannel(),
        n = () => {
          e.port1.removeEventListener("message", n), t();
        };
      e.port1.addEventListener("message", n), e.port2.postMessage(0), e.port1.start();
    });
  }
  var na = (t) => ((t[nt] = !0), !0),
    vo = class {
      constructor(t, e) {
        A(this, "url");
        A(this, "_connected", !1);
        A(this, "onclose", null);
        A(this, "onnotice", (t) => console.debug(`NOTICE from ${this.url}: ${t}`));
        A(this, "_onauth", null);
        A(this, "baseEoseTimeout", 4400);
        A(this, "connectionTimeout", 4400);
        A(this, "openSubs", new Map());
        A(this, "connectionTimeoutHandle");
        A(this, "connectionPromise");
        A(this, "openCountRequests", new Map());
        A(this, "openEventPublishes", new Map());
        A(this, "ws");
        A(this, "incomingMessageQueue", new Tc());
        A(this, "queueRunning", !1);
        A(this, "challenge");
        A(this, "serial", 0);
        A(this, "verifyEvent");
        A(this, "_WebSocket");
        (this.url = It(t)),
          (this.verifyEvent = e.verifyEvent),
          (this._WebSocket = e.websocketImplementation || WebSocket);
      }
      static async connect(t, e) {
        const n = new vo(t, e);
        return await n.connect(), n;
      }
      closeAllSubscriptions(t) {
        for (let [e, n] of this.openSubs) n.close(t);
        this.openSubs.clear();
        for (let [e, n] of this.openEventPublishes) n.reject(new Error(t));
        this.openEventPublishes.clear();
        for (let [e, n] of this.openCountRequests) n.reject(new Error(t));
        this.openCountRequests.clear();
      }
      get connected() {
        return this._connected;
      }
      async connect() {
        return this.connectionPromise
          ? this.connectionPromise
          : ((this.challenge = void 0),
            (this.connectionPromise = new Promise((t, e) => {
              this.connectionTimeoutHandle = setTimeout(() => {
                var n;
                e("connection timed out"),
                  (this.connectionPromise = void 0),
                  (n = this.onclose) == null || n.call(this),
                  this.closeAllSubscriptions("relay connection timed out");
              }, this.connectionTimeout);
              try {
                this.ws = new this._WebSocket(this.url);
              } catch (n) {
                e(n);
                return;
              }
              (this.ws.onopen = () => {
                clearTimeout(this.connectionTimeoutHandle), (this._connected = !0), t();
              }),
                (this.ws.onerror = (n) => {
                  var r;
                  e(n.message || "websocket error"),
                    this._connected &&
                      ((this._connected = !1),
                      (this.connectionPromise = void 0),
                      (r = this.onclose) == null || r.call(this),
                      this.closeAllSubscriptions("relay connection errored"));
                }),
                (this.ws.onclose = async () => {
                  var n;
                  this._connected &&
                    ((this._connected = !1),
                    (this.connectionPromise = void 0),
                    (n = this.onclose) == null || n.call(this),
                    this.closeAllSubscriptions("relay connection closed"));
                }),
                (this.ws.onmessage = this._onmessage.bind(this));
            })),
            this.connectionPromise);
      }
      async runQueue() {
        for (this.queueRunning = !0; this.handleNext() !== !1; ) await ta();
        this.queueRunning = !1;
      }
      handleNext() {
        var n, r, o;
        const t = this.incomingMessageQueue.dequeue();
        if (!t) return !1;
        const e = Xc(t);
        if (e) {
          const i = this.openSubs.get(e);
          if (!i) return;
          const s = Qc(t, "id"),
            c = (n = i.alreadyHaveEvent) == null ? void 0 : n.call(i, s);
          if (((r = i.receivedEvent) == null || r.call(i, this, s), c)) return;
        }
        try {
          let i = JSON.parse(t);
          switch (i[0]) {
            case "EVENT": {
              const s = this.openSubs.get(i[1]),
                c = i[2];
              this.verifyEvent(c) && Jc(s.filters, c) && s.onevent(c);
              return;
            }
            case "COUNT": {
              const s = i[1],
                c = i[2],
                a = this.openCountRequests.get(s);
              a && (a.resolve(c.count), this.openCountRequests.delete(s));
              return;
            }
            case "EOSE": {
              const s = this.openSubs.get(i[1]);
              if (!s) return;
              s.receivedEose();
              return;
            }
            case "OK": {
              const s = i[1],
                c = i[2],
                a = i[3],
                l = this.openEventPublishes.get(s);
              c ? l.resolve(a) : l.reject(new Error(a)), this.openEventPublishes.delete(s);
              return;
            }
            case "CLOSED": {
              const s = i[1],
                c = this.openSubs.get(s);
              if (!c) return;
              (c.closed = !0), c.close(i[2]);
              return;
            }
            case "NOTICE":
              this.onnotice(i[1]);
              return;
            case "AUTH": {
              (this.challenge = i[1]), (o = this._onauth) == null || o.call(this, i[1]);
              return;
            }
          }
        } catch {
          return;
        }
      }
      async send(t) {
        if (!this.connectionPromise) throw new Error("sending on closed connection");
        this.connectionPromise.then(() => {
          var e;
          (e = this.ws) == null || e.send(t);
        });
      }
      async auth(t) {
        if (!this.challenge) throw new Error("can't perform auth, no challenge was received");
        const e = await t(ea(this.url, this.challenge)),
          n = new Promise((r, o) => {
            this.openEventPublishes.set(e.id, { resolve: r, reject: o });
          });
        return this.send('["AUTH",' + JSON.stringify(e) + "]"), n;
      }
      async publish(t) {
        const e = new Promise((n, r) => {
          this.openEventPublishes.set(t.id, { resolve: n, reject: r });
        });
        return this.send('["EVENT",' + JSON.stringify(t) + "]"), e;
      }
      async count(t, e) {
        this.serial++;
        const n = (e == null ? void 0 : e.id) || "count:" + this.serial,
          r = new Promise((o, i) => {
            this.openCountRequests.set(n, { resolve: o, reject: i });
          });
        return this.send('["COUNT","' + n + '",' + JSON.stringify(t).substring(1)), r;
      }
      subscribe(t, e) {
        const n = this.prepareSubscription(t, e);
        return n.fire(), n;
      }
      prepareSubscription(t, e) {
        this.serial++;
        const n = e.id || "sub:" + this.serial,
          r = new ra(this, n, t, e);
        return this.openSubs.set(n, r), r;
      }
      close() {
        var t;
        this.closeAllSubscriptions("relay connection closed by us"),
          (this._connected = !1),
          (t = this.ws) == null || t.close();
      }
      _onmessage(t) {
        this.incomingMessageQueue.enqueue(t.data), this.queueRunning || this.runQueue();
      }
    },
    ra = class {
      constructor(t, e, n, r) {
        A(this, "relay");
        A(this, "id");
        A(this, "closed", !1);
        A(this, "eosed", !1);
        A(this, "filters");
        A(this, "alreadyHaveEvent");
        A(this, "receivedEvent");
        A(this, "onevent");
        A(this, "oneose");
        A(this, "onclose");
        A(this, "eoseTimeout");
        A(this, "eoseTimeoutHandle");
        (this.relay = t),
          (this.filters = n),
          (this.id = e),
          (this.alreadyHaveEvent = r.alreadyHaveEvent),
          (this.receivedEvent = r.receivedEvent),
          (this.eoseTimeout = r.eoseTimeout || t.baseEoseTimeout),
          (this.oneose = r.oneose),
          (this.onclose = r.onclose),
          (this.onevent =
            r.onevent ||
            ((o) => {
              console.warn(
                `onevent() callback not defined for subscription '${this.id}' in relay ${this.relay.url}. event received:`,
                o,
              );
            }));
      }
      fire() {
        this.relay.send('["REQ","' + this.id + '",' + JSON.stringify(this.filters).substring(1)),
          (this.eoseTimeoutHandle = setTimeout(this.receivedEose.bind(this), this.eoseTimeout));
      }
      receivedEose() {
        var t;
        this.eosed ||
          (clearTimeout(this.eoseTimeoutHandle), (this.eosed = !0), (t = this.oneose) == null || t.call(this));
      }
      close(t = "closed by caller") {
        var e;
        !this.closed &&
          this.relay.connected &&
          (this.relay.send('["CLOSE",' + JSON.stringify(this.id) + "]"), (this.closed = !0)),
          this.relay.openSubs.delete(this.id),
          (e = this.onclose) == null || e.call(this, t);
      }
    },
    oa = class {
      constructor(t) {
        A(this, "relays", new Map());
        A(this, "seenOn", new Map());
        A(this, "trackRelays", !1);
        A(this, "verifyEvent");
        A(this, "trustedRelayURLs", new Set());
        A(this, "_WebSocket");
        (this.verifyEvent = t.verifyEvent), (this._WebSocket = t.websocketImplementation);
      }
      async ensureRelay(t, e) {
        t = It(t);
        let n = this.relays.get(t);
        return (
          n ||
            ((n = new vo(t, {
              verifyEvent: this.trustedRelayURLs.has(t) ? na : this.verifyEvent,
              websocketImplementation: this._WebSocket,
            })),
            e != null && e.connectionTimeout && (n.connectionTimeout = e.connectionTimeout),
            this.relays.set(t, n)),
          await n.connect(),
          n
        );
      }
      close(t) {
        t.map(It).forEach((e) => {
          var n;
          (n = this.relays.get(e)) == null || n.close();
        });
      }
      subscribeMany(t, e, n) {
        return this.subscribeManyMap(Object.fromEntries(t.map((r) => [r, e])), n);
      }
      subscribeManyMap(t, e) {
        this.trackRelays &&
          (e.receivedEvent = (u, p) => {
            let h = this.seenOn.get(p);
            h || ((h = new Set()), this.seenOn.set(p, h)), h.add(u);
          });
        const n = new Set(),
          r = [],
          o = Object.keys(t).length,
          i = [];
        let s = (u) => {
          var p;
          (i[u] = !0), i.filter((h) => h).length === o && ((p = e.oneose) == null || p.call(e), (s = () => {}));
        };
        const c = [];
        let a = (u, p) => {
          var h;
          s(u),
            (c[u] = p),
            c.filter((b) => b).length === o && ((h = e.onclose) == null || h.call(e, c), (a = () => {}));
        };
        const l = (u) => {
            var h;
            if ((h = e.alreadyHaveEvent) != null && h.call(e, u)) return !0;
            const p = n.has(u);
            return n.add(u), p;
          },
          f = Promise.all(
            Object.entries(t).map(async (u, p, h) => {
              if (h.indexOf(u) !== p) {
                a(p, "duplicate url");
                return;
              }
              let [b, d] = u;
              b = It(b);
              let g;
              try {
                g = await this.ensureRelay(b, {
                  connectionTimeout: e.maxWait ? Math.max(e.maxWait * 0.8, e.maxWait - 1e3) : void 0,
                });
              } catch (y) {
                a(p, (y == null ? void 0 : y.message) || String(y));
                return;
              }
              let w = g.subscribe(d, {
                ...e,
                oneose: () => s(p),
                onclose: (y) => a(p, y),
                alreadyHaveEvent: l,
                eoseTimeout: e.maxWait,
              });
              r.push(w);
            }),
          );
        return {
          async close() {
            await f,
              r.forEach((u) => {
                u.close();
              });
          },
        };
      }
      subscribeManyEose(t, e, n) {
        const r = this.subscribeMany(t, e, {
          ...n,
          oneose() {
            r.close();
          },
        });
        return r;
      }
      async querySync(t, e, n) {
        return new Promise(async (r) => {
          const o = [];
          this.subscribeManyEose(t, [e], {
            ...n,
            onevent(i) {
              o.push(i);
            },
            onclose(i) {
              r(o);
            },
          });
        });
      }
      async get(t, e, n) {
        e.limit = 1;
        const r = await this.querySync(t, e, n);
        return r.sort((o, i) => i.created_at - o.created_at), r[0] || null;
      }
      publish(t, e) {
        return t.map(It).map(async (n, r, o) => {
          if (o.indexOf(n) !== r) return Promise.reject("duplicate url");
          let i = await this.ensureRelay(n);
          return i.publish(e).then((s) => {
            if (this.trackRelays) {
              let c = this.seenOn.get(e.id);
              c || ((c = new Set()), this.seenOn.set(e.id, c)), c.add(i);
            }
            return s;
          });
        });
      }
      listConnectionStatus() {
        const t = new Map();
        return this.relays.forEach((e, n) => t.set(n, e.connected)), t;
      }
      destroy() {
        this.relays.forEach((t) => t.close()), (this.relays = new Map());
      }
    },
    Eo;
  try {
    Eo = WebSocket;
  } catch {}
  var ia = class extends oa {
      constructor() {
        super({ verifyEvent: yo, websocketImplementation: Eo });
      }
    },
    _o;
  try {
    _o = fetch;
  } catch {}
  var Jt = /^bunker:\/\/([0-9a-f]{64})\??([?\/\w:.=&%-]*)$/,
    sa = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  async function ca(t) {
    let e = t.match(Jt);
    if (e)
      try {
        const n = e[1],
          r = new URLSearchParams(e[2]);
        return { pubkey: n, relays: r.getAll("relay"), secret: r.get("secret") };
      } catch {}
    return ko(t);
  }
  async function ko(t) {
    const e = t.match(Yc);
    if (!e) return null;
    const [n, r = "_", o] = e;
    try {
      const i = `https://${o}/.well-known/nostr.json?name=${r}`,
        s = await (await _o(i, { redirect: "error" })).json();
      let c = s.names[r],
        a = s.nip46[c] || [];
      return { pubkey: c, relays: a, secret: null };
    } catch {
      return null;
    }
  }
  var So = class {
    constructor(t, e, n = {}) {
      A(this, "pool");
      A(this, "subCloser");
      A(this, "isOpen");
      A(this, "serial");
      A(this, "idPrefix");
      A(this, "listeners");
      A(this, "waitingForAuth");
      A(this, "secretKey");
      A(this, "bp");
      A(this, "cachedPubKey");
      if (e.relays.length === 0) throw new Error("no relays are specified for this bunker");
      (this.pool = n.pool || new ia()),
        (this.secretKey = t),
        (this.bp = e),
        (this.isOpen = !1),
        (this.idPrefix = Math.random().toString(36).substring(7)),
        (this.serial = 0),
        (this.listeners = {}),
        (this.waitingForAuth = {});
      const r = this.listeners,
        o = this.waitingForAuth,
        i = this.secretKey;
      (this.subCloser = this.pool.subscribeMany(this.bp.relays, [{ kinds: [xo], "#p": [Uc(this.secretKey)] }], {
        async onevent(s) {
          let c;
          try {
            c = JSON.parse(await Rc(t, s.pubkey, s.content));
          } catch {
            c = JSON.parse(Vc(s.content, qc(i, s.pubkey)));
          }
          const { id: a, result: l, error: f } = c;
          if (l === "auth_url" && o[a]) {
            delete o[a],
              n.onauth
                ? n.onauth(f)
                : console.warn(
                    `nostr-tools/nip46: remote signer ${e.pubkey} tried to send an "auth_url"='${f}' but there was no onauth() callback configured.`,
                  );
            return;
          }
          let u = r[a];
          u && (f ? u.reject(f) : l && u.resolve(l), delete r[a]);
        },
      })),
        (this.isOpen = !0);
    }
    async close() {
      (this.isOpen = !1), this.subCloser.close();
    }
    async sendRequest(t, e) {
      return new Promise(async (n, r) => {
        try {
          if (!this.isOpen) throw new Error("this signer is not open anymore, create a new one");
          this.serial++;
          const o = `${this.idPrefix}-${this.serial}`,
            i = await Hc(this.secretKey, this.bp.pubkey, JSON.stringify({ id: o, method: t, params: e })),
            s = Pc(
              { kind: xo, tags: [["p", this.bp.pubkey]], content: i, created_at: Math.floor(Date.now() / 1e3) },
              this.secretKey,
            );
          (this.listeners[o] = { resolve: n, reject: r }),
            (this.waitingForAuth[o] = !0),
            await Promise.any(this.pool.publish(this.bp.relays, s));
        } catch (o) {
          r(o);
        }
      });
    }
    async ping() {
      let t = await this.sendRequest("ping", []);
      if (t !== "pong") throw new Error(`result is not pong: ${t}`);
    }
    async connect() {
      await this.sendRequest("connect", [this.bp.pubkey, this.bp.secret || ""]);
    }
    async getPublicKey() {
      return this.cachedPubKey || (this.cachedPubKey = await this.sendRequest("get_public_key", [])), this.cachedPubKey;
    }
    async getRelays() {
      return JSON.parse(await this.sendRequest("get_relays", []));
    }
    async signEvent(t) {
      let e = await this.sendRequest("sign_event", [JSON.stringify(t)]),
        n = JSON.parse(e);
      if (yo(n)) return n;
      throw new Error(`event returned from bunker is improperly signed: ${JSON.stringify(n)}`);
    }
    async nip04Encrypt(t, e) {
      return await this.sendRequest("nip04_encrypt", [t, e]);
    }
    async nip04Decrypt(t, e) {
      return await this.sendRequest("nip04_decrypt", [t, e]);
    }
    async nip44Encrypt(t, e) {
      return await this.sendRequest("nip44_encrypt", [t, e]);
    }
    async nip44Decrypt(t, e) {
      return await this.sendRequest("nip44_decrypt", [t, e]);
    }
  };
  async function aa(t, e, n, r, o, i = Cc()) {
    if (o && !sa.test(o)) throw new Error("Invalid email");
    let s = new So(i, t.bunkerPointer, e),
      c = await s.sendRequest("create_account", [n, r, o || ""]);
    return (s.bp.pubkey = c), await s.connect(), s;
  }
  var Ao = /^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/,
    Bo;
  try {
    Bo = fetch;
  } catch {}
  async function la(t) {
    var i;
    const e = t.match(Ao);
    if (!e) return null;
    const [n, r = "_", o] = e;
    try {
      const s = `https://${o}/.well-known/nostr.json?name=${r}`,
        c = await (await Bo(s, { redirect: "error" })).json();
      let a = c.names[r];
      return a ? { pubkey: a, relays: (i = c.relays) == null ? void 0 : i[a] } : null;
    } catch {
      return null;
    }
  }
  new TextDecoder("utf-8"), new TextEncoder();
  var ua = 5e3;
  function fa(t) {
    return ha("npub", dr(t));
  }
  function da(t, e) {
    let n = uo.toWords(e);
    return uo.encode(t, n, ua);
  }
  function ha(t, e) {
    return da(t, e);
  }
  const yt = [];
  function ga(t, e = M) {
    let n;
    const r = new Set();
    function o(c) {
      if (tn(t, c) && ((t = c), n)) {
        const a = !yt.length;
        for (const l of r) l[1](), yt.push(l, t);
        if (a) {
          for (let l = 0; l < yt.length; l += 2) yt[l][0](yt[l + 1]);
          yt.length = 0;
        }
      }
    }
    function i(c) {
      o(c(t));
    }
    function s(c, a = M) {
      const l = [c, a];
      return (
        r.add(l),
        r.size === 1 && (n = e(o, i) || M),
        c(t),
        () => {
          r.delete(l), r.size === 0 && n && (n(), (n = null));
        }
      );
    }
    return { set: o, update: i, subscribe: s };
  }
  const pa = (t) => {
    const { subscribe: e, set: n } = ga(void 0, () => {
      const r = window.matchMedia(t);
      n(r.matches);
      const o = () => n(r.matches);
      return (
        r.addEventListener("change", o),
        () => {
          r.removeEventListener("change", o);
        }
      );
    });
    return { subscribe: e };
  };
  function ba(t) {
    let e, n, r;
    return {
      c() {
        (e = nn("svg")),
          (n = nn("circle")),
          (r = nn("path")),
          k(n, "class", "opacity-25"),
          k(n, "cx", "12"),
          k(n, "cy", "12"),
          k(n, "r", "10"),
          k(n, "stroke", "currentColor"),
          k(n, "stroke-width", "4"),
          k(r, "class", "opacity-75"),
          k(r, "fill", "currentColor"),
          k(
            r,
            "d",
            "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          ),
          k(e, "class", "ml-2 h-5 w-5 animate-spin text-white"),
          k(e, "xmlns", "http://www.w3.org/2000/svg"),
          k(e, "fill", "none"),
          k(e, "viewBox", "0 0 24 24");
      },
      m(o, i) {
        D(o, e, i), O(e, n), O(e, r);
      },
      p: M,
      i: M,
      o: M,
      d(o) {
        o && W(e);
      },
    };
  }
  class Io extends lr {
    constructor(e) {
      super(), ar(this, e, null, ba, tn, {});
    }
  }
  const { window: Fn } = Qo;
  function Oo(t, e, n) {
    const r = t.slice();
    return (r[78] = e[n]), r;
  }
  function wa(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c,
      a,
      l,
      f,
      u,
      p,
      h = !t[20] && !t[13] && !t[14] && !t[15] && To(t);
    const b = [Aa, Sa, ka, _a, Ea, va, xa],
      d = [];
    function g(w, y) {
      return w[13] ? 0 : w[14] ? 1 : w[15] ? 2 : w[20] ? 3 : w[17] ? 4 : w[21] ? 6 : 5;
    }
    return (
      (c = g(t)),
      (a = d[c] = b[c](t)),
      {
        c() {
          (e = P("div")),
            (n = P("button")),
            (r = Y("⤫")),
            (i = G()),
            h && h.c(),
            (s = G()),
            a.c(),
            k(n, "class", (o = "absolute right-2 top-0 cursor-pointer bg-transparent text-3xl text-" + t[0] + "-600")),
            k(
              e,
              "class",
              (l =
                "animate-show rounded-md bg-gradient-to-b px-8 py-8 shadow-[0_0px_30px_0px_rgba(0,0,0,0.6)] transition-all sm:w-96 from-" +
                t[0] +
                "-900 to-" +
                t[0] +
                "-700 " +
                t[27]),
            );
        },
        m(w, y) {
          D(w, e, y),
            O(e, n),
            O(n, r),
            O(e, i),
            h && h.m(e, null),
            O(e, s),
            d[c].m(e, null),
            (f = !0),
            u ||
              ((p = re(n, "click", function () {
                en(t[20] ? t[32] : t[30]) && (t[20] ? t[32] : t[30]).apply(this, arguments);
              })),
              (u = !0));
        },
        p(w, y) {
          (t = w),
            (!f ||
              (y[0] & 1 &&
                o !== (o = "absolute right-2 top-0 cursor-pointer bg-transparent text-3xl text-" + t[0] + "-600"))) &&
              k(n, "class", o),
            !t[20] && !t[13] && !t[14] && !t[15]
              ? h
                ? h.p(t, y)
                : ((h = To(t)), h.c(), h.m(e, s))
              : h && (h.d(1), (h = null));
          let S = c;
          (c = g(t)),
            c === S
              ? d[c].p(t, y)
              : (Ut(),
                Ee(d[S], 1, 1, () => {
                  d[S] = null;
                }),
                Pt(),
                (a = d[c]),
                a ? a.p(t, y) : ((a = d[c] = b[c](t)), a.c()),
                ve(a, 1),
                a.m(e, null)),
            (!f ||
              (y[0] & 134217729 &&
                l !==
                  (l =
                    "animate-show rounded-md bg-gradient-to-b px-8 py-8 shadow-[0_0px_30px_0px_rgba(0,0,0,0.6)] transition-all sm:w-96 from-" +
                    t[0] +
                    "-900 to-" +
                    t[0] +
                    "-700 " +
                    t[27]))) &&
              k(e, "class", l);
        },
        i(w) {
          f || (ve(a), (f = !0));
        },
        o(w) {
          Ee(a), (f = !1);
        },
        d(w) {
          w && W(e), h && h.d(), d[c].d(), (u = !1), p();
        },
      }
    );
  }
  function ya(t) {
    let e, n, r, o, i;
    const s = [La, Na, Ta, Oa],
      c = [];
    function a(l, f) {
      return l[12] ? 0 : l[21] ? (l[2] ? 3 : 2) : 1;
    }
    return (
      (n = a(t)),
      (r = c[n] = s[n](t)),
      {
        c() {
          (e = P("div")),
            r.c(),
            k(
              e,
              "class",
              (o =
                "rounded px-2 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-200 bg-" +
                t[0] +
                "-700 hover:bg-" +
                t[0] +
                "-800 " +
                t[27]),
            );
        },
        m(l, f) {
          D(l, e, f), c[n].m(e, null), (i = !0);
        },
        p(l, f) {
          let u = n;
          (n = a(l)),
            n === u
              ? c[n].p(l, f)
              : (Ut(),
                Ee(c[u], 1, 1, () => {
                  c[u] = null;
                }),
                Pt(),
                (r = c[n]),
                r ? r.p(l, f) : ((r = c[n] = s[n](l)), r.c()),
                ve(r, 1),
                r.m(e, null)),
            (!i ||
              (f[0] & 134217729 &&
                o !==
                  (o =
                    "rounded px-2 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-200 bg-" +
                    l[0] +
                    "-700 hover:bg-" +
                    l[0] +
                    "-800 " +
                    l[27]))) &&
              k(e, "class", o);
        },
        i(l) {
          i || (ve(r), (i = !0));
        },
        o(l) {
          Ee(r), (i = !1);
        },
        d(l) {
          l && W(e), c[n].d();
        },
      }
    );
  }
  function ma(t) {
    return { c: M, m: M, p: M, i: M, o: M, d: M };
  }
  function To(t) {
    let e, n, r, o, i;
    return {
      c() {
        (e = P("button")),
          (n = Y("?")),
          k(e, "class", (r = "absolute bottom-1 right-3 cursor-pointer bg-transparent text-xl text-" + t[0] + "-600"));
      },
      m(s, c) {
        D(s, e, c), O(e, n), o || ((i = re(e, "click", t[31])), (o = !0));
      },
      p(s, c) {
        c[0] & 1 &&
          r !== (r = "absolute bottom-1 right-3 cursor-pointer bg-transparent text-xl text-" + s[0] + "-600") &&
          k(e, "class", r);
      },
      d(s) {
        s && W(e), (o = !1), i();
      },
    };
  }
  function xa(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c = t[21].npub + "",
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w,
      y,
      S = Kr(t[11]) + "",
      L,
      H,
      _,
      E = (t[21].picture || t[21].name) && No(t);
    return {
      c() {
        (e = P("div")),
          (n = P("div")),
          (n.textContent = "You are connected to Nostr as"),
          (r = G()),
          (o = P("a")),
          E && E.c(),
          (i = G()),
          (s = P("div")),
          (a = Y(c)),
          (f = G()),
          (u = P("button")),
          (p = Y("Disconnect")),
          (b = G()),
          (d = P("div")),
          (g = Y("This webpage is using the public key:")),
          (w = P("br")),
          (y = G()),
          (L = Y(S)),
          k(n, "class", "mb-4 text-sm"),
          k(s, "class", "block break-all"),
          k(o, "target", "_blank"),
          k(o, "href", (l = "https://nosta.me/" + t[21].npub)),
          k(o, "class", "group text-white no-underline"),
          k(e, "class", "text-center"),
          k(
            u,
            "class",
            (h =
              "my-2 mt-6 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          k(d, "class", "mt-6 block break-all text-center text-sm");
      },
      m(m, x) {
        D(m, e, x),
          O(e, n),
          O(e, r),
          O(e, o),
          E && E.m(o, null),
          O(o, i),
          O(o, s),
          O(s, a),
          D(m, f, x),
          D(m, u, x),
          O(u, p),
          D(m, b, x),
          D(m, d, x),
          O(d, g),
          O(d, w),
          O(d, y),
          O(d, L),
          H || ((_ = re(u, "click", t[34])), (H = !0));
      },
      p(m, x) {
        m[21].picture || m[21].name ? (E ? E.p(m, x) : ((E = No(m)), E.c(), E.m(o, i))) : E && (E.d(1), (E = null)),
          x[0] & 2097152 && c !== (c = m[21].npub + "") && Me(a, c),
          x[0] & 2097152 && l !== (l = "https://nosta.me/" + m[21].npub) && k(o, "href", l),
          x[0] & 1 &&
            h !==
              (h =
                "my-2 mt-6 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white bg-" +
                m[0] +
                "-900 hover:bg-" +
                m[0] +
                "-950") &&
            k(u, "class", h),
          x[0] & 2048 && S !== (S = Kr(m[11]) + "") && Me(L, S);
      },
      i: M,
      o: M,
      d(m) {
        m && (W(e), W(f), W(u), W(b), W(d)), E && E.d(), (H = !1), _();
      },
    };
  }
  function va(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c,
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w,
      y = t[19] && Uo(t);
    const S = [Ia, Ba],
      L = [];
    function H(m, x) {
      return m[12] ? 0 : 1;
    }
    (a = H(t)), (l = L[a] = S[a](t));
    let _ = t[12] && t[16] && Po(t),
      E = !t[12] && Ho(t);
    return {
      c() {
        (e = P("div")),
          (e.textContent = "How do you want to connect to Nostr?"),
          (n = G()),
          (r = P("form")),
          (o = P("input")),
          (i = G()),
          y && y.c(),
          (s = G()),
          (c = P("button")),
          l.c(),
          (p = G()),
          _ && _.c(),
          (h = G()),
          E && E.c(),
          (b = tr()),
          k(e, "class", "text-center text-lg"),
          k(o, "class", "box-border w-full rounded px-2 py-1 text-lg text-neutral-800 outline-none"),
          k(o, "placeholder", "user@provider or bunker://..."),
          (o.autofocus = !0),
          (o.disabled = t[12]),
          k(o, "autocapitalize", "none"),
          k(
            c,
            "class",
            (f =
              "mt-4 flex w-full cursor-pointer items-center justify-center rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          (c.disabled = u = !t[26] || t[12]),
          k(r, "class", "mb-1 mt-4 flex flex-col");
      },
      m(m, x) {
        D(m, e, x),
          D(m, n, x),
          D(m, r, x),
          O(r, o),
          t[52](o),
          it(o, t[4]),
          O(r, i),
          y && y.m(r, null),
          O(r, s),
          O(r, c),
          L[a].m(c, null),
          O(r, p),
          _ && _.m(r, null),
          D(m, h, x),
          E && E.m(m, x),
          D(m, b, x),
          (d = !0),
          o.focus(),
          g || ((w = [re(o, "input", t[53]), re(r, "submit", t[33])]), (g = !0));
      },
      p(m, x) {
        (!d || x[0] & 4096) && (o.disabled = m[12]),
          x[0] & 16 && o.value !== m[4] && it(o, m[4]),
          m[19] ? (y ? y.p(m, x) : ((y = Uo(m)), y.c(), y.m(r, s))) : y && (y.d(1), (y = null));
        let N = a;
        (a = H(m)),
          a !== N &&
            (Ut(),
            Ee(L[N], 1, 1, () => {
              L[N] = null;
            }),
            Pt(),
            (l = L[a]),
            l || ((l = L[a] = S[a](m)), l.c()),
            ve(l, 1),
            l.m(c, null)),
          (!d ||
            (x[0] & 1 &&
              f !==
                (f =
                  "mt-4 flex w-full cursor-pointer items-center justify-center rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
                  m[0] +
                  "-900 hover:bg-" +
                  m[0] +
                  "-950"))) &&
            k(c, "class", f),
          (!d || (x[0] & 67112960 && u !== (u = !m[26] || m[12]))) && (c.disabled = u),
          m[12] && m[16] ? (_ ? _.p(m, x) : ((_ = Po(m)), _.c(), _.m(r, null))) : _ && (_.d(1), (_ = null)),
          m[12] ? E && (E.d(1), (E = null)) : E ? E.p(m, x) : ((E = Ho(m)), E.c(), E.m(b.parentNode, b));
      },
      i(m) {
        d || (ve(l), (d = !0));
      },
      o(m) {
        Ee(l), (d = !1);
      },
      d(m) {
        m && (W(e), W(n), W(r), W(h), W(b)),
          t[52](null),
          y && y.d(),
          L[a].d(),
          _ && _.d(),
          E && E.d(m),
          (g = !1),
          Re(w);
      },
    };
  }
  function Ea(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c,
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w,
      y,
      S,
      L,
      H,
      _,
      E = sr(t[22]),
      m = [];
    for (let x = 0; x < E.length; x += 1) m[x] = Ro(Oo(t, E, x));
    return {
      c() {
        (e = P("div")),
          (e.textContent = "Create a Nostr account"),
          (n = G()),
          (r = P("form")),
          (o = P("div")),
          (i = P("input")),
          (s = G()),
          (c = P("div")),
          (c.textContent = "@"),
          (a = G()),
          (l = P("select"));
        for (let x = 0; x < m.length; x += 1) m[x].c();
        (f = G()),
          (u = P("button")),
          (p = Y("Continue »")),
          (d = G()),
          (g = P("div")),
          (w = Y("Do you already have a Nostr address?")),
          (y = P("br")),
          (S = G()),
          (L = P("button")),
          (L.textContent = "Login now"),
          k(e, "class", "text-center text-lg"),
          k(i, "class", "box-border w-40 rounded px-2 py-1 text-lg text-neutral-800 outline-none"),
          k(i, "placeholder", "bob"),
          (i.autofocus = !0),
          k(i, "autocapitalize", "none"),
          k(c, "class", "mx-2 text-2xl"),
          k(l, "class", "box-border w-full rounded px-2 py-1 text-lg text-neutral-800 outline-none"),
          t[10] === void 0 && Lt(() => t[51].call(l)),
          k(o, "class", "flex flex-row"),
          k(
            u,
            "class",
            (h =
              "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          (u.disabled = b = !t[10] || !t[9] || t[18]),
          k(r, "class", "mb-1 mt-4"),
          k(L, "class", "cursor-pointer border-0 bg-transparent text-sm text-white underline"),
          k(g, "class", "mt-6 text-center text-sm leading-3");
      },
      m(x, N) {
        D(x, e, N), D(x, n, N), D(x, r, N), O(r, o), O(o, i), t[49](i), it(i, t[9]), O(o, s), O(o, c), O(o, a), O(o, l);
        for (let C = 0; C < m.length; C += 1) m[C] && m[C].m(l, null);
        nr(l, t[10], !0),
          O(r, f),
          O(r, u),
          O(u, p),
          D(x, d, N),
          D(x, g, N),
          O(g, w),
          O(g, y),
          O(g, S),
          O(g, L),
          i.focus(),
          H ||
            ((_ = [
              re(i, "input", t[50]),
              re(i, "input", t[38]),
              re(l, "change", t[51]),
              re(r, "submit", t[37]),
              re(L, "click", t[36]),
            ]),
            (H = !0));
      },
      p(x, N) {
        if ((N[0] & 512 && i.value !== x[9] && it(i, x[9]), N[0] & 4194304)) {
          E = sr(x[22]);
          let C;
          for (C = 0; C < E.length; C += 1) {
            const $ = Oo(x, E, C);
            m[C] ? m[C].p($, N) : ((m[C] = Ro($)), m[C].c(), m[C].m(l, null));
          }
          for (; C < m.length; C += 1) m[C].d(1);
          m.length = E.length;
        }
        N[0] & 4195328 && nr(l, x[10]),
          N[0] & 1 &&
            h !==
              (h =
                "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
                x[0] +
                "-900 hover:bg-" +
                x[0] +
                "-950") &&
            k(u, "class", h),
          N[0] & 4457984 && b !== (b = !x[10] || !x[9] || x[18]) && (u.disabled = b);
      },
      i: M,
      o: M,
      d(x) {
        x && (W(e), W(n), W(r), W(d), W(g)), t[49](null), Xo(m, x), (H = !1), Re(_);
      },
    };
  }
  function _a(t) {
    let e, n, r;
    return {
      c() {
        (e = P("div")),
          (e.textContent = "What is that?"),
          (n = G()),
          (r = P("div")),
          (r.innerHTML = `<p class="mb mt-4">This widget is created with <i>window.nostr.js</i>, a small script
            you can drop in any page that already uses NIP-07 and make it also
            work with NIP-46 automatically when the user doesn&#39;t have an
            extension installed.
            <br/>
            It adds a small floating button on the side of the window that users
            can use to create Nostr accuonts or connect to their NIP-46 bunkers.</p> <p class="mt-4">This tool is opensource, get the code from the <a target="_blank" class="underline" href="https://github.com/fiatjaf/window.nostr.js">project&#39;s page</a>.</p> <p class="mt-4">You don&#39;t know what Nostr is?
            <a target="_blank" class="underline" href="https://www.nostr.com">Learn more</a>.</p>`),
          k(e, "class", "text-center text-lg"),
          k(r, "class", "text-base leading-5");
      },
      m(o, i) {
        D(o, e, i), D(o, n, i), D(o, r, i);
      },
      p: M,
      i: M,
      o: M,
      d(o) {
        o && (W(e), W(n), W(r));
      },
    };
  }
  function ka(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c = new URL(t[15]).host + "",
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w;
    return {
      c() {
        (e = P("div")),
          (n = P("div")),
          (n.textContent = "An action requires your confirmation"),
          (r = G()),
          (o = P("div")),
          (i = Y("Now you a new window will bring you to ")),
          (s = P("strong")),
          (a = Y(c)),
          (l = Y(`
            where you can approve the current action. If nothing happens check that
            if your browser is blocking popups, pleaase.`)),
          (f = P("br")),
          (u = Y(`
            After that you will be returned to this page.`)),
          (p = G()),
          (h = P("button")),
          (b = Y("Confirm action »")),
          k(n, "class", "text-center text-lg"),
          k(o, "class", "mt-4 text-center text-sm leading-4"),
          k(
            h,
            "class",
            (d =
              "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          k(e, "class", "m-auto w-full");
      },
      m(y, S) {
        D(y, e, S),
          O(e, n),
          O(e, r),
          O(e, o),
          O(o, i),
          O(o, s),
          O(s, a),
          O(o, l),
          O(o, f),
          O(o, u),
          O(e, p),
          O(e, h),
          O(h, b),
          g || ((w = re(h, "click", t[48])), (g = !0));
      },
      p(y, S) {
        S[0] & 32768 && c !== (c = new URL(y[15]).host + "") && Me(a, c),
          S[0] & 1 &&
            d !==
              (d =
                "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
                y[0] +
                "-900 hover:bg-" +
                y[0] +
                "-950") &&
            k(h, "class", d);
      },
      i: M,
      o: M,
      d(y) {
        y && W(e), (g = !1), w();
      },
    };
  }
  function Sa(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c = new URL(t[14]).host + "",
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w;
    return {
      c() {
        (e = P("div")),
          (n = P("div")),
          (n.textContent = "Login into a Nostr account"),
          (r = G()),
          (o = P("div")),
          (i = Y("Now you a new window will bring you to ")),
          (s = P("strong")),
          (a = Y(c)),
          (l = Y(`
            where you can login and approve the permissions. If nothing happens check
            that if your browser is blocking popups, pleaase.`)),
          (f = P("br")),
          (u = Y(`
            After that you will be returned to this page.`)),
          (p = G()),
          (h = P("button")),
          (b = Y("Login now »")),
          k(n, "class", "text-center text-lg"),
          k(o, "class", "mt-4 text-center text-sm leading-4"),
          k(
            h,
            "class",
            (d =
              "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          k(e, "class", "m-auto w-full");
      },
      m(y, S) {
        D(y, e, S),
          O(e, n),
          O(e, r),
          O(e, o),
          O(o, i),
          O(o, s),
          O(s, a),
          O(o, l),
          O(o, f),
          O(o, u),
          O(e, p),
          O(e, h),
          O(h, b),
          g || ((w = re(h, "click", t[47])), (g = !0));
      },
      p(y, S) {
        S[0] & 16384 && c !== (c = new URL(y[14]).host + "") && Me(a, c),
          S[0] & 1 &&
            d !==
              (d =
                "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
                y[0] +
                "-900 hover:bg-" +
                y[0] +
                "-950") &&
            k(h, "class", d);
      },
      i: M,
      o: M,
      d(y) {
        y && W(e), (g = !1), w();
      },
    };
  }
  function Aa(t) {
    let e,
      n,
      r,
      o,
      i,
      s,
      c = new URL(t[13]).host + "",
      a,
      l,
      f,
      u,
      p,
      h,
      b,
      d,
      g,
      w;
    return {
      c() {
        (e = P("div")),
          (n = P("div")),
          (n.textContent = "Create a Nostr account"),
          (r = G()),
          (o = P("div")),
          (i = Y("Now you a new window will bring you to ")),
          (s = P("strong")),
          (a = Y(c)),
          (l = Y(`
            where the account creation will take place. If nothing happens check
            that if your browser is blocking popups, pleaase.`)),
          (f = P("br")),
          (u = Y(`
            After that you will be returned to this page.`)),
          (p = G()),
          (h = P("button")),
          (b = Y("Start account creation »")),
          k(n, "class", "text-center text-lg"),
          k(o, "class", "mt-4 text-center text-sm leading-4"),
          k(
            h,
            "class",
            (d =
              "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
              t[0] +
              "-900 hover:bg-" +
              t[0] +
              "-950"),
          ),
          k(e, "class", "m-auto w-full");
      },
      m(y, S) {
        D(y, e, S),
          O(e, n),
          O(e, r),
          O(e, o),
          O(o, i),
          O(o, s),
          O(s, a),
          O(o, l),
          O(o, f),
          O(o, u),
          O(e, p),
          O(e, h),
          O(h, b),
          g || ((w = re(h, "click", t[46])), (g = !0));
      },
      p(y, S) {
        S[0] & 8192 && c !== (c = new URL(y[13]).host + "") && Me(a, c),
          S[0] & 1 &&
            d !==
              (d =
                "mt-4 block w-full cursor-pointer rounded border-0 px-2 py-1 text-lg text-white disabled:cursor-default disabled:bg-neutral-400 disabled:text-neutral-200 bg-" +
                y[0] +
                "-900 hover:bg-" +
                y[0] +
                "-950") &&
            k(h, "class", d);
      },
      i: M,
      o: M,
      d(y) {
        y && W(e), (g = !1), w();
      },
    };
  }
  function No(t) {
    let e,
      n,
      r = t[21].picture && Lo(t),
      o = t[21].name && Co(t);
    return {
      c() {
        (e = P("div")), r && r.c(), (n = G()), o && o.c(), k(e, "class", "mb-2 flex items-center justify-center gap-2");
      },
      m(i, s) {
        D(i, e, s), r && r.m(e, null), O(e, n), o && o.m(e, null);
      },
      p(i, s) {
        i[21].picture ? (r ? r.p(i, s) : ((r = Lo(i)), r.c(), r.m(e, n))) : r && (r.d(1), (r = null)),
          i[21].name ? (o ? o.p(i, s) : ((o = Co(i)), o.c(), o.m(e, null))) : o && (o.d(1), (o = null));
      },
      d(i) {
        i && W(e), r && r.d(), o && o.d();
      },
    };
  }
  function Lo(t) {
    let e, n, r;
    return {
      c() {
        (e = P("img")),
          ot(e.src, (n = t[21].picture)) || k(e, "src", n),
          k(e, "alt", ""),
          k(
            e,
            "class",
            (r = "h-10 w-10 rounded-full border-2 border-solid border-transparent group-hover:border-" + t[0] + "-100"),
          );
      },
      m(o, i) {
        D(o, e, i);
      },
      p(o, i) {
        i[0] & 2097152 && !ot(e.src, (n = o[21].picture)) && k(e, "src", n),
          i[0] & 1 &&
            r !==
              (r =
                "h-10 w-10 rounded-full border-2 border-solid border-transparent group-hover:border-" +
                o[0] +
                "-100") &&
            k(e, "class", r);
      },
      d(o) {
        o && W(e);
      },
    };
  }
  function Co(t) {
    let e,
      n = t[21].name + "",
      r;
    return {
      c() {
        (e = P("div")), (r = Y(n)), k(e, "class", "text-3xl decoration-2 underline-offset-4 group-hover:underline");
      },
      m(o, i) {
        D(o, e, i), O(e, r);
      },
      p(o, i) {
        i[0] & 2097152 && n !== (n = o[21].name + "") && Me(r, n);
      },
      d(o) {
        o && W(e);
      },
    };
  }
  function Uo(t) {
    let e, n;
    return {
      c() {
        (e = P("div")),
          (n = Y(t[19])),
          k(e, "class", "my-2 rounded bg-yellow-100 p-2 text-center text-sm leading-4 text-red-400");
      },
      m(r, o) {
        D(r, e, o), O(e, n);
      },
      p(r, o) {
        o[0] & 524288 && Me(n, r[19]);
      },
      d(r) {
        r && W(e);
      },
    };
  }
  function Ba(t) {
    let e;
    return {
      c() {
        e = Y("Connect »");
      },
      m(n, r) {
        D(n, e, r);
      },
      i: M,
      o: M,
      d(n) {
        n && W(e);
      },
    };
  }
  function Ia(t) {
    let e, n, r;
    return (
      (n = new Io({})),
      {
        c() {
          (e = Y(`Connecting to bunker
              `)),
            cr(n.$$.fragment);
        },
        m(o, i) {
          D(o, e, i), sn(n, o, i), (r = !0);
        },
        i(o) {
          r || (ve(n.$$.fragment, o), (r = !0));
        },
        o(o) {
          Ee(n.$$.fragment, o), (r = !1);
        },
        d(o) {
          o && W(e), cn(n, o);
        },
      }
    );
  }
  function Po(t) {
    let e, n, r, o, i;
    return {
      c() {
        (e = P("div")),
          (n = Y(`Waiting too much?
              `)),
          (r = P("button")),
          (r.textContent = "Cancel the connection"),
          k(r, "class", "cursor-pointer border-0 bg-transparent text-sm text-white underline"),
          k(e, "class", "mt-6 text-center text-sm leading-3");
      },
      m(s, c) {
        D(s, e, c), O(e, n), O(e, r), o || ((i = re(r, "click", t[39])), (o = !0));
      },
      p: M,
      d(s) {
        s && W(e), (o = !1), i();
      },
    };
  }
  function Ho(t) {
    let e, n, r, o, i, s, c;
    return {
      c() {
        (e = P("div")),
          (n = Y("Do you need a Nostr account?")),
          (r = P("br")),
          (o = G()),
          (i = P("button")),
          (i.textContent = "Sign up now"),
          k(i, "class", "cursor-pointer border-0 bg-transparent text-sm text-white underline"),
          k(e, "class", "mt-6 text-center text-sm leading-3");
      },
      m(a, l) {
        D(a, e, l), O(e, n), O(e, r), O(e, o), O(e, i), s || ((c = re(i, "click", t[35])), (s = !0));
      },
      p: M,
      d(a) {
        a && W(e), (s = !1), c();
      },
    };
  }
  function Ro(t) {
    let e, n, r;
    return {
      c() {
        (e = P("option")),
          k(e, "label", (n = t[78].domain)),
          (e.__value = r = t[78]),
          it(e, e.__value),
          k(e, "class", "px-2 py-1 text-lg");
      },
      m(o, i) {
        D(o, e, i);
      },
      p(o, i) {
        i[0] & 4194304 && n !== (n = o[78].domain) && k(e, "label", n),
          i[0] & 4194304 && r !== (r = o[78]) && ((e.__value = r), it(e, e.__value));
      },
      d(o) {
        o && W(e);
      },
    };
  }
  function Oa(t) {
    let e, n;
    return {
      c() {
        (e = P("img")),
          ot(e.src, (n = t[21].picture)) || k(e, "src", n),
          k(e, "alt", ""),
          k(e, "class", "h-6 w-6 rounded-full");
      },
      m(r, o) {
        D(r, e, o);
      },
      p(r, o) {
        o[0] & 2097152 && !ot(e.src, (n = r[21].picture)) && k(e, "src", n);
      },
      i: M,
      o: M,
      d(r) {
        r && W(e);
      },
    };
  }
  function Ta(t) {
    let e,
      n,
      r,
      o = (t[21].name || t[21].npub.slice(0, 7) + "…" + t[21].npub.slice(-4)) + "",
      i;
    function s(l, f) {
      return l[21].picture ? Ua : Ca;
    }
    let c = s(t),
      a = c(t);
    return {
      c() {
        (e = P("div")),
          a.c(),
          (n = G()),
          (r = P("div")),
          (i = Y(o)),
          k(r, "class", "inline-block max-w-56 overflow-hidden overflow-ellipsis whitespace-nowrap"),
          k(e, "class", "flex items-center px-2");
      },
      m(l, f) {
        D(l, e, f), a.m(e, null), O(e, n), O(e, r), O(r, i);
      },
      p(l, f) {
        c === (c = s(l)) && a ? a.p(l, f) : (a.d(1), (a = c(l)), a && (a.c(), a.m(e, n))),
          f[0] & 2097152 &&
            o !== (o = (l[21].name || l[21].npub.slice(0, 7) + "…" + l[21].npub.slice(-4)) + "") &&
            Me(i, o);
      },
      i: M,
      o: M,
      d(l) {
        l && W(e), a.d();
      },
    };
  }
  function Na(t) {
    let e;
    function n(i, s) {
      return i[2] ? Ha : Pa;
    }
    let r = n(t),
      o = r(t);
    return {
      c() {
        o.c(), (e = tr());
      },
      m(i, s) {
        o.m(i, s), D(i, e, s);
      },
      p(i, s) {
        r !== (r = n(i)) && (o.d(1), (o = r(i)), o && (o.c(), o.m(e.parentNode, e)));
      },
      i: M,
      o: M,
      d(i) {
        i && W(e), o.d(i);
      },
    };
  }
  function La(t) {
    let e, n, r, o;
    return (
      (r = new Io({})),
      {
        c() {
          (e = P("div")),
            (n = Y(`Connecting to bunker
          `)),
            cr(r.$$.fragment),
            k(e, "class", "flex items-center px-2");
        },
        m(i, s) {
          D(i, e, s), O(e, n), sn(r, e, null), (o = !0);
        },
        p: M,
        i(i) {
          o || (ve(r.$$.fragment, i), (o = !0));
        },
        o(i) {
          Ee(r.$$.fragment, i), (o = !1);
        },
        d(i) {
          i && W(e), cn(r);
        },
      }
    );
  }
  function Ca(t) {
    let e;
    return {
      c() {
        (e = P("span")), (e.textContent = "☉"), k(e, "class", "mr-2");
      },
      m(n, r) {
        D(n, e, r);
      },
      p: M,
      d(n) {
        n && W(e);
      },
    };
  }
  function Ua(t) {
    let e, n;
    return {
      c() {
        (e = P("img")),
          ot(e.src, (n = t[21].picture)) || k(e, "src", n),
          k(e, "alt", ""),
          k(e, "class", "mr-2 h-5 w-5 rounded-full");
      },
      m(r, o) {
        D(r, e, o);
      },
      p(r, o) {
        o[0] & 2097152 && !ot(e.src, (n = r[21].picture)) && k(e, "src", n);
      },
      d(r) {
        r && W(e);
      },
    };
  }
  function Pa(t) {
    let e;
    return {
      c() {
        (e = P("div")), (e.textContent = "Connect with Nostr"), k(e, "class", "flex items-center px-2");
      },
      m(n, r) {
        D(n, e, r);
      },
      d(n) {
        n && W(e);
      },
    };
  }
  function Ha(t) {
    let e;
    return {
      c() {
        (e = P("div")), (e.textContent = "N"), k(e, "class", "w-6 text-center");
      },
      m(n, r) {
        D(n, e, r);
      },
      d(n) {
        n && W(e);
      },
    };
  }
  function Ra(t) {
    let e, n, r, o, i, s, c;
    const a = [ma, ya, wa],
      l = [];
    function f(u, p) {
      return !u[25] && !u[21] && u[1] ? 0 : u[25] ? 2 : 1;
    }
    return (
      (n = f(t)),
      (r = l[n] = a[n](t)),
      {
        c() {
          (e = P("div")),
            r.c(),
            k(e, "class", "draggable z-[9000] animate-fadein font-sans text-white"),
            k(
              e,
              "style",
              (o =
                "position: fixed; " +
                (t[25] && t[5] ? "width: 100vw;" : "") +
                "; right: " +
                (t[25] && t[5] ? "0" : t[3]) +
                "px; user-select: none; " +
                (t[25] && t[5] ? "bottom: 0px" : t[24] + ":" + t[23] + "px")),
            ),
            rr(e, "cursor-pointer", !t[21] && !t[25]);
        },
        m(u, p) {
          D(u, e, p),
            l[n].m(e, null),
            t[54](e),
            (i = !0),
            s ||
              ((c = [
                re(Fn, "click", t[29]),
                re(Fn, "mouseup", t[42]),
                re(Fn, "mousemove", t[41]),
                re(e, "mousedown", t[40]),
              ]),
              (s = !0));
        },
        p(u, p) {
          let h = n;
          (n = f(u)),
            n === h
              ? l[n].p(u, p)
              : (Ut(),
                Ee(l[h], 1, 1, () => {
                  l[h] = null;
                }),
                Pt(),
                (r = l[n]),
                r ? r.p(u, p) : ((r = l[n] = a[n](u)), r.c()),
                ve(r, 1),
                r.m(e, null)),
            (!i ||
              (p[0] & 58720296 &&
                o !==
                  (o =
                    "position: fixed; " +
                    (u[25] && u[5] ? "width: 100vw;" : "") +
                    "; right: " +
                    (u[25] && u[5] ? "0" : u[3]) +
                    "px; user-select: none; " +
                    (u[25] && u[5] ? "bottom: 0px" : u[24] + ":" + u[23] + "px")))) &&
              k(e, "style", o),
            (!i || p[0] & 35651584) && rr(e, "cursor-pointer", !u[21] && !u[25]);
        },
        i(u) {
          i || (ve(r), (i = !0));
        },
        o(u) {
          Ee(r), (i = !1);
        },
        d(u) {
          u && W(e), l[n].d(), t[54](null), (s = !1), Re(c);
        },
      }
    );
  }
  const Mo = "We could not connect to a NIP-46 bunker with that url, are you sure it is set up correctly?",
    jo = "We were not able to connect using this address. For it to work it has to come from a NIP-46 provider.",
    Fe = 20;
  function Gn(t) {
    return window.open(t, "window.nostr", "width=600,height=800,popup=yes");
  }
  function Ma(t, e, n) {
    let r, o, i, s, c, a;
    const l = pa("only screen and (max-width: 640px)");
    Jo(t, l, (T) => n(5, (a = T)));
    const f = {
      ORIGIN: "wnj:origin",
      CLIENT_SECRET: "wnj:clientSecret",
      Y_POS: "wnj:ypos",
      CALLBACK_TOKEN: "wnj:callbackToken",
      BUNKER_POINTER: "wnj:bunkerPointer",
      CACHED_PUBKEY: "wnj:cachedPubKey",
    };
    let u,
      { accent: p } = e,
      { position: h = "top" } = e,
      { startHidden: b } = e,
      { compactMode: d } = e;
    const g = window,
      w = new $s();
    let y, S, L, H, _, E;
    const m = localStorage.getItem(f.CLIENT_SECRET);
    m ? (E = dr(m)) : ((E = Es()), localStorage.setItem(f.CLIENT_SECRET, ue(E)));
    let x = "closed",
      N,
      C,
      $,
      q,
      z,
      v,
      B = null,
      U = null,
      R = null,
      I = !1,
      j,
      V,
      K,
      X = !1,
      Z,
      ie,
      Q = [
        {
          picture: "https://nsec.app/favicon.ico",
          name: "Nsec.app",
          about:
            "Store keys safely without a browser extension! Nsec.app is a non-custodial web app that can be connected to Nostr apps and provide restricted access to your keys.",
          nip05: "_@nsec.app",
          website: "https://nsec.app",
          domain: "nsec.app",
        },
      ],
      { right: se = 20 } = e,
      he = !1,
      ne = !1,
      Ce,
      Ot,
      Ue;
    const ge = {
        pool: w,
        onauth(T) {
          j ? n(13, (B = T)) : Z ? (n(15, (R = T)), n(25, (i = !0))) : n(14, (U = T));
        },
      },
      Pe = fr(() => {
        switch (x) {
          case "justopened":
            n(44, (x = "opened"));
            break;
          case "justclosed":
            n(44, (x = "closed"));
            break;
        }
      }, 500);
    function rt() {
      n(44, (x = "justopened")), Pe();
    }
    function Ge() {
      n(44, (x = "justclosed")), Pe();
    }
    function Qt() {
      if (N && !v) {
        Xt();
        return;
      }
      rt();
    }
    Qn();
    let Yo = {
      isWnj: !0,
      async getPublicKey() {
        return !z && !v && rt(), (await q).getPublicKey();
      },
      async signEvent(T) {
        try {
          return !z && !v && Qt(), await (await q).signEvent(T);
        } finally {
          n(15, (R = null)), Ge();
        }
      },
      async getRelays() {
        return !z && !v && Qt(), (await q).getRelays();
      },
      nip04: {
        async encrypt(T, J) {
          return !z && !v && Qt(), (await q).nip04Encrypt(T, J);
        },
        async decrypt(T, J) {
          return !z && !v && Qt(), (await q).nip04Decrypt(T, J);
        },
      },
    };
    function Qn() {
      Ge(),
        (N = null),
        (q = new Promise((T, J) => {
          (C = T), ($ = J);
        })),
        n(21, (Z = null)),
        n(12, (z = !1)),
        n(16, (I = !1)),
        n(17, (j = !1)),
        (v = !1),
        (ie = null),
        n(19, (K = ""));
    }
    ri(() => {
      if (!N) {
        let T = localStorage.getItem(f.BUNKER_POINTER);
        T && ((N = JSON.parse(T)), Xn(), localStorage.getItem(f.CACHED_PUBKEY) || Xt());
      }
      if (g.nostr && !g.nostr.isWnj) {
        g.destroyWnj();
        return;
      } else
        Object.defineProperty(window, "nostr", {
          get() {
            return Yo;
          },
          set(T) {
            (Yo = T), T.isWnj || g.destroyWnj();
          },
          configurable: !0,
        });
      return () => {
        ie && ie.close();
      };
    });
    function $a(T) {
      Math.abs(o - Ot) > 6 ||
        Date.now() - Ue > 600 ||
        x === "justopened" ||
        x === "justclosed" ||
        (T.composedPath().find((J) => J.id === "wnj") ? rt() : Ge());
    }
    function za(T) {
      Ge(), n(17, (j = !1)), n(13, (B = null)), n(14, (U = null)), n(15, (R = null)), T.stopPropagation();
    }
    function Ka(T) {
      n(20, (X = !0)), T.stopPropagation();
    }
    function Wa(T) {
      n(20, (X = !1)), T.stopPropagation();
    }
    async function Da(T) {
      T.preventDefault();
      try {
        if (((N = await ca(y.value)), !N)) {
          y.value.match(Jt) ? n(19, (K = Mo)) : n(19, (K = jo));
          return;
        }
        y.setCustomValidity(""), n(19, (K = "")), await Xt(), Xn();
      } catch {
        y.value.match(Jt) ? n(19, (K = Mo)) : n(19, (K = jo)), n(12, (z = !1));
      }
    }
    async function Va(T) {
      T.preventDefault(), localStorage.removeItem(f.BUNKER_POINTER), localStorage.removeItem(f.CACHED_PUBKEY), Qn();
    }
    async function Ya(T) {
      if ((T.preventDefault(), n(17, (j = !0)), Q.length > 0 && Q[0].bunkerPointer == null)) {
        let J = [],
          me = [];
        for (let xe = 0; xe < Q.length; xe++) {
          let Tt = ko(Q[xe].nip05).then((Fo) => {
            Fo ? n(22, (Q[xe].bunkerPointer = Fo), Q) : J.push(Q[xe]);
          });
          me.push(Tt);
        }
        await Promise.all(me);
        for (let xe = 0; xe < J.length; xe++) {
          let Tt = Q.indexOf(J[xe]);
          Q.splice(Tt, 1);
        }
        n(22, Q);
      }
    }
    function Fa(T) {
      n(17, (j = !1));
    }
    async function Ga(T) {
      if ((T.preventDefault(), !_)) return;
      n(18, (V = !0));
      let J = await aa(_, ge, L.value, _.domain, void 0, E);
      n(18, (V = !1)), rt(), n(17, (j = !1)), (N = J.bp), Xn(), Xt(J);
    }
    const Za = fr(async () => {
      _ &&
        L.value.length > 0 &&
        ((await la(L.value + "@" + _.domain))
          ? L.setCustomValidity(`'${L.value}' is already taken.`)
          : L.setCustomValidity(""));
    }, 500);
    function Ja() {
      n(16, (I = !1)), n(12, (z = !1)), $("connection aborted"), Qn();
    }
    async function Xt(T = void 0) {
      (T = T || new So(E, N, ge)), n(12, (z = !0));
      let J = setTimeout(() => {
        n(16, (I = !0)), n(25, (i = !0));
      }, 5e3);
      try {
        await T.connect(), (v = !0), localStorage.setItem(f.BUNKER_POINTER, JSON.stringify(N)), Ge(), C(T);
      } catch (me) {
        $((me == null ? void 0 : me.message) || String(me));
      } finally {
        clearTimeout(J), n(12, (z = !1)), n(16, (I = !1)), n(13, (B = null)), n(14, (U = null)), n(15, (R = null));
      }
    }
    async function Xn() {
      let T = localStorage.getItem(f.CACHED_PUBKEY);
      T || ((T = await (await q).getPublicKey()), localStorage.setItem(f.CACHED_PUBKEY, T)),
        n(21, (Z = { pubkey: T, npub: fa(T), event: null })),
        (ie = w.subscribeMany(
          ["wss://purplepag.es", "wss://relay.snort.social", "wss://relay.nos.social"],
          [{ kinds: [0], authors: [T] }],
          {
            onevent(J) {
              var me;
              if (!((((me = Z.event) == null ? void 0 : me.created_at) || 0) >= J.created_at))
                try {
                  let { name: xe, picture: Tt } = JSON.parse(J.content);
                  n(21, (Z.event = J), Z), n(21, (Z.name = xe), Z), n(21, (Z.picture = Tt), Z);
                } catch {}
            },
          },
        ));
    }
    function Qa(T) {
      if (i) return;
      he = !0;
      const J = u.getBoundingClientRect();
      (Ce = T.clientY - J.top), (Ot = o), (Ue = Date.now());
    }
    function Xa(T) {
      he &&
        (r === "top" ? n(23, (o = T.clientY)) : n(23, (o = window.innerHeight - T.clientY)),
        n(23, (o -= Ce)),
        n(45, (ne = !0)),
        o < Fe && n(23, (o = Fe)),
        o > window.innerHeight - Fe && n(23, (o = window.innerHeight - Fe)));
    }
    function el() {
      if (
        ((he = !1),
        setTimeout(() => {
          n(45, (ne = !1));
        }, 10),
        ne)
      ) {
        const T = u.getBoundingClientRect(),
          J = window.innerHeight,
          me = J / 2;
        T.top < me ? (n(24, (r = "top")), n(23, (o = T.top))) : (n(24, (r = "bottom")), n(23, (o = J - T.bottom))),
          o < Fe && n(23, (o = Fe)),
          localStorage.setItem(f.ORIGIN, r),
          localStorage.setItem(f.Y_POS, o.toString());
      }
    }
    const tl = () => Gn(B),
      nl = () => Gn(U),
      rl = () => {
        Gn(R);
      };
    function ol(T) {
      Et[T ? "unshift" : "push"](() => {
        (L = T), n(8, L);
      });
    }
    function il() {
      (H = this.value), n(9, H);
    }
    function sl() {
      (_ = ti(this)), n(10, _), n(22, Q);
    }
    function cl(T) {
      Et[T ? "unshift" : "push"](() => {
        (y = T), n(7, y);
      });
    }
    function al() {
      (S = this.value), n(4, S);
    }
    function ll(T) {
      Et[T ? "unshift" : "push"](() => {
        (u = T), n(6, u);
      });
    }
    return (
      (t.$$set = (T) => {
        "accent" in T && n(0, (p = T.accent)),
          "position" in T && n(43, (h = T.position)),
          "startHidden" in T && n(1, (b = T.startHidden)),
          "compactMode" in T && n(2, (d = T.compactMode)),
          "right" in T && n(3, (se = T.right));
      }),
      (t.$$.update = () => {
        (t.$$.dirty[0] & 32) | (t.$$.dirty[1] & 4096) &&
          n(24, (r = a ? "bottom" : localStorage.getItem(f.ORIGIN) || h)),
          t.$$.dirty[0] & 32 && n(23, (o = a ? Fe : parseInt(localStorage.getItem(f.Y_POS) || "0") || Fe)),
          t.$$.dirty[1] & 8192 && n(25, (i = x === "justopened" || x === "opened")),
          (t.$$.dirty[0] & 1) | (t.$$.dirty[1] & 16384) &&
            n(
              27,
              (s = ne
                ? "cursor-grabbing outline-dashed outline-" + p + "-500 outline-1 outline-offset-4"
                : "outline-none"),
            ),
          t.$$.dirty[0] & 16 && n(26, (c = S && (S.match(Jt) || S.match(Ao))));
      }),
      [
        p,
        b,
        d,
        se,
        S,
        a,
        u,
        y,
        L,
        H,
        _,
        E,
        z,
        B,
        U,
        R,
        I,
        j,
        V,
        K,
        X,
        Z,
        Q,
        o,
        r,
        i,
        c,
        s,
        l,
        $a,
        za,
        Ka,
        Wa,
        Da,
        Va,
        Ya,
        Fa,
        Ga,
        Za,
        Ja,
        Qa,
        Xa,
        el,
        h,
        x,
        ne,
        tl,
        nl,
        rl,
        ol,
        il,
        sl,
        cl,
        al,
        ll,
      ]
    );
  }
  class ja extends lr {
    constructor(e) {
      super(),
        ar(
          this,
          e,
          Ma,
          Ra,
          tn,
          { accent: 0, position: 43, startHidden: 1, compactMode: 2, right: 3 },
          null,
          [-1, -1, -1],
        );
    }
  }
  const mt = window;
  mt.destroyWnj = () => {
    setTimeout(() => {
      qa.$destroy();
    }, 1);
  };
  const Zn = document.createElement("div");
  (Zn.style.zIndex = "90000"), document.body.appendChild(Zn);
  const Jn = document.createElement("div");
  Jn.id = "wnj";
  const qo = document.createElement("style");
  qo.innerHTML = Ze;
  const $o = Zn.attachShadow({ mode: "open" });
  $o.appendChild(Jn), $o.appendChild(qo);
  const qa = new ja({
    target: Jn,
    props: {
      accent: ((zo = mt.wnjParams) == null ? void 0 : zo.accent) || "cyan",
      position: ((Ko = mt.wnjParams) == null ? void 0 : Ko.position) === "bottom" ? "bottom" : "top",
      startHidden: (Wo = mt.wnjParams) == null ? void 0 : Wo.startHidden,
      compactMode: (Do = mt.wnjParams) == null ? void 0 : Do.compactMode,
    },
  });
  if (!((Vo = mt.wnjParams) != null && Vo.disableOverflowFix)) {
    const t = document.createElement("style"),
      e = `
    html, body {
      overflow: auto;
      height: 100%;
    }
  `;
    (t.innerHTML = e), document.head.appendChild(t);
  }
})();
