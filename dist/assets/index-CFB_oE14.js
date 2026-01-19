import {
  r as m,
  w as at,
  n as Fn,
  o as Xe,
  a as bt,
  c as Ht,
  b as o,
  d as Re,
  e as i,
  f as M,
  g as e,
  h as Q,
  i as B,
  j as pe,
  T as $t,
  k as D,
  l as ke,
  m as zn,
  F as G,
  p as ae,
  q as ge,
  t as l,
  v as ht,
  u as be,
  s as Us,
  x as qa,
  y as qt,
  z as Wt,
  A as Oe,
  B as Wa,
  C as Nn,
  D as Mn,
  E as ds,
  G as gt,
  H as En,
  I as Ha,
  J as Ya,
  K as Ja,
  L as ja,
} from "./vendor-CwPUEyTs.js";
(function () {
  const b = document.createElement("link").relList;
  if (b && b.supports && b.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) C(h);
  new MutationObserver((h) => {
    for (const g of h)
      if (g.type === "childList")
        for (const v of g.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && C(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(h) {
    const g = {};
    return (
      h.integrity && (g.integrity = h.integrity),
      h.referrerPolicy && (g.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (g.credentials = "omit")
          : (g.credentials = "same-origin"),
      g
    );
  }
  function C(h) {
    if (h.ep) return;
    h.ep = !0;
    const g = f(h);
    fetch(h.href, g);
  }
})();
const dt = (x, b) => {
    const f = x.__vccOpts || x;
    for (const [C, h] of b) f[C] = h;
    return f;
  },
  Xa = { key: 0, class: "search-modal-fixed" },
  Qa = { class: "modal-top" },
  Za = { class: "modal-controls" },
  eo = { class: "search-modal-inner" },
  to = { class: "search-container" },
  so = { class: "input-wrapper" },
  no = { class: "categories-container" },
  ao = {
    __name: "SearchModal",
    props: { isOpen: Boolean },
    emits: ["close"],
    setup(x, { emit: b }) {
      const f = x,
        C = b,
        h = m(null),
        g = m(null),
        v = (j) => {
          g.value === j ? (g.value = null) : (g.value = j);
        };
      at(
        () => f.isOpen,
        (j) => {
          j
            ? ((document.body.style.overflow = "hidden"),
              Fn(() => {
                var I;
                (I = h.value) == null || I.focus();
              }))
            : ((document.body.style.overflow = ""), (g.value = null));
        },
      );
      const E = (j) => {
        j.key === "Escape" && f.isOpen && C("close");
      };
      return (
        Xe(() => {
          window.addEventListener("keydown", E);
        }),
        bt(() => {
          (window.removeEventListener("keydown", E),
            (document.body.style.overflow = ""));
        }),
        (j, I) => (
          o(),
          Ht(
            $t,
            { name: "fade" },
            {
              default: Re(() => [
                x.isOpen
                  ? (o(),
                    i("div", Xa, [
                      e("div", Qa, [
                        I[6] ||
                          (I[6] = e(
                            "div",
                            { class: "modal-logo" },
                            "Komodo Cruises",
                            -1,
                          )),
                        e("div", Za, [
                          e(
                            "button",
                            {
                              class: "close-btn",
                              onClick:
                                I[0] || (I[0] = (le) => j.$emit("close")),
                            },
                            [
                              ...(I[5] ||
                                (I[5] = [
                                  e(
                                    "span",
                                    { class: "btn-text" },
                                    "Close Search",
                                    -1,
                                  ),
                                  Q(),
                                  e("span", { class: "close-icon" }, "✕", -1),
                                ])),
                            ],
                          ),
                        ]),
                      ]),
                      e("div", eo, [
                        e("div", to, [
                          e("div", so, [
                            e(
                              "input",
                              {
                                type: "text",
                                placeholder: "Search...",
                                class: "search-input",
                                ref_key: "searchInput",
                                ref: h,
                              },
                              null,
                              512,
                            ),
                            I[7] ||
                              (I[7] = e(
                                "button",
                                { class: "search-submit" },
                                [
                                  e(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                      }),
                                      e("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65",
                                      }),
                                    ],
                                  ),
                                ],
                                -1,
                              )),
                          ]),
                        ]),
                        e("div", no, [
                          I[11] ||
                            (I[11] = e(
                              "p",
                              { class: "categories-label" },
                              "Refine your search",
                              -1,
                            )),
                          e(
                            "div",
                            {
                              class: B([
                                "categories-list",
                                { "has-selection": g.value },
                              ]),
                            },
                            [
                              e(
                                "a",
                                {
                                  href: "#",
                                  class: B([
                                    "category-link",
                                    {
                                      "is-selected": g.value === "Destinations",
                                    },
                                  ]),
                                  onClick:
                                    I[1] ||
                                    (I[1] = pe(
                                      (le) => v("Destinations"),
                                      ["prevent"],
                                    )),
                                },
                                "Destinations",
                                2,
                              ),
                              I[8] ||
                                (I[8] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1,
                                )),
                              e(
                                "a",
                                {
                                  href: "#",
                                  class: B([
                                    "category-link",
                                    { "is-selected": g.value === "Ships" },
                                  ]),
                                  onClick:
                                    I[2] ||
                                    (I[2] = pe(
                                      (le) => v("Ships"),
                                      ["prevent"],
                                    )),
                                },
                                "Ships",
                                2,
                              ),
                              I[9] ||
                                (I[9] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1,
                                )),
                              e(
                                "a",
                                {
                                  href: "#",
                                  class: B([
                                    "category-link",
                                    { "is-selected": g.value === "Cabins" },
                                  ]),
                                  onClick:
                                    I[3] ||
                                    (I[3] = pe(
                                      (le) => v("Cabins"),
                                      ["prevent"],
                                    )),
                                },
                                "Cabins",
                                2,
                              ),
                              I[10] ||
                                (I[10] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1,
                                )),
                              e(
                                "a",
                                {
                                  href: "#",
                                  class: B([
                                    "category-link",
                                    { "is-selected": g.value === "Blog" },
                                  ]),
                                  onClick:
                                    I[4] ||
                                    (I[4] = pe((le) => v("Blog"), ["prevent"])),
                                },
                                "Blog",
                                2,
                              ),
                            ],
                            2,
                          ),
                        ]),
                      ]),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            },
          )
        )
      );
    },
  },
  oo = dt(ao, [["__scopeId", "data-v-c3c0dc80"]]),
  io = { key: 0, class: "menu-modal-fixed" },
  lo = { class: "modal-top" },
  ro = { class: "modal-controls" },
  co = {
    __name: "MenuModal",
    props: { isOpen: Boolean },
    emits: ["close", "open-search"],
    setup(x, { emit: b }) {
      const f = x,
        C = b;
      at(
        () => f.isOpen,
        (g) => {
          g
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
        },
      );
      const h = (g) => {
        g.key === "Escape" && f.isOpen && C("close");
      };
      return (
        Xe(() => {
          window.addEventListener("keydown", h);
        }),
        bt(() => {
          (window.removeEventListener("keydown", h),
            (document.body.style.overflow = ""));
        }),
        (g, v) => (
          o(),
          Ht(
            $t,
            { name: "fade" },
            {
              default: Re(() => [
                x.isOpen
                  ? (o(),
                    i("div", io, [
                      e("div", lo, [
                        v[4] ||
                          (v[4] = e(
                            "div",
                            { class: "modal-logo" },
                            "Komodo Cruises",
                            -1,
                          )),
                        e("div", ro, [
                          e(
                            "button",
                            {
                              class: "control-btn",
                              onClick:
                                v[0] || (v[0] = (E) => g.$emit("open-search")),
                            },
                            [
                              ...(v[2] ||
                                (v[2] = [
                                  e(
                                    "svg",
                                    {
                                      width: "18",
                                      height: "18",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      class: "icon",
                                    },
                                    [
                                      e("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                      }),
                                      e("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65",
                                      }),
                                    ],
                                    -1,
                                  ),
                                  e(
                                    "span",
                                    { class: "btn-text" },
                                    "Search",
                                    -1,
                                  ),
                                ])),
                            ],
                          ),
                          e(
                            "button",
                            {
                              class: "control-btn",
                              onClick: v[1] || (v[1] = (E) => g.$emit("close")),
                            },
                            [
                              ...(v[3] ||
                                (v[3] = [
                                  e("span", { class: "btn-text" }, "Close", -1),
                                  Q(),
                                  e("span", { class: "close-icon" }, "✕", -1),
                                ])),
                            ],
                          ),
                        ]),
                      ]),
                      v[5] ||
                        (v[5] = e(
                          "div",
                          { class: "menu-content-container" },
                          [
                            e("div", { class: "col-left" }, [
                              e("nav", { class: "main-nav" }, [
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Our Collection",
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Villa Collection",
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Conservation",
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Wildlife",
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "About Komodo",
                                ),
                              ]),
                              e("div", { class: "social-icons" }, [
                                e("a", { href: "#", class: "social-link" }, [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("rect", {
                                        x: "2",
                                        y: "2",
                                        width: "20",
                                        height: "20",
                                        rx: "5",
                                        ry: "5",
                                      }),
                                      e("path", {
                                        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                                      }),
                                      e("line", {
                                        x1: "17.5",
                                        y1: "6.5",
                                        x2: "17.51",
                                        y2: "6.5",
                                      }),
                                    ],
                                  ),
                                ]),
                                e("a", { href: "#", class: "social-link" }, [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("path", {
                                        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                                      }),
                                    ],
                                  ),
                                ]),
                                e("a", { href: "#", class: "social-link" }, [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("path", {
                                        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                      }),
                                    ],
                                  ),
                                ]),
                                e("a", { href: "#", class: "social-link" }, [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("path", {
                                        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                      }),
                                      e("rect", {
                                        x: "2",
                                        y: "9",
                                        width: "4",
                                        height: "12",
                                      }),
                                      e("circle", { cx: "4", cy: "4", r: "2" }),
                                    ],
                                  ),
                                ]),
                                e("a", { href: "#", class: "social-link" }, [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    [
                                      e("path", {
                                        d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
                                      }),
                                      e("polygon", {
                                        points:
                                          "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
                                      }),
                                    ],
                                  ),
                                ]),
                              ]),
                            ]),
                            e("div", { class: "col-right" }, [
                              e("div", { class: "secondary-nav-grid" }, [
                                e("div", { class: "sec-col" }, [
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Photos & Videos",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Blog",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Indonesia Is...",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Magazine",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Rates",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Exclusive Offers",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Press Room",
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Careers",
                                  ),
                                ]),
                                e("div", { class: "sec-col" }, [
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link icon-link" },
                                    [
                                      e(
                                        "svg",
                                        {
                                          class: "nav-icon",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "2",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                        [
                                          e("path", {
                                            d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
                                          }),
                                          e("path", {
                                            d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
                                          }),
                                        ],
                                      ),
                                      Q(" Resource Library "),
                                    ],
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link icon-link" },
                                    [
                                      e(
                                        "svg",
                                        {
                                          class: "nav-icon",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "2",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                        [
                                          e("path", {
                                            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                                          }),
                                          e("polyline", {
                                            points: "10 17 15 12 10 7",
                                          }),
                                          e("line", {
                                            x1: "15",
                                            y1: "12",
                                            x2: "3",
                                            y2: "12",
                                          }),
                                        ],
                                      ),
                                      Q(" Trade Login & Rates "),
                                    ],
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link icon-link" },
                                    [
                                      e(
                                        "svg",
                                        {
                                          class: "nav-icon",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "2",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                        [
                                          e("path", { d: "M20 7h-9" }),
                                          e("path", { d: "M14 17H5" }),
                                          e("circle", {
                                            cx: "17",
                                            cy: "17",
                                            r: "3",
                                          }),
                                          e("circle", {
                                            cx: "7",
                                            cy: "7",
                                            r: "3",
                                          }),
                                        ],
                                      ),
                                      Q(" Suppliers "),
                                    ],
                                  ),
                                ]),
                              ]),
                              e("div", { class: "contact-info" }, [
                                e(
                                  "p",
                                  { class: "contact-email" },
                                  "E. enquiries@komodocruises.com",
                                ),
                                e(
                                  "p",
                                  { class: "contact-phone" },
                                  "T. +62 (0) 21 683 3424",
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "view-contact" },
                                  "View all contact information ›",
                                ),
                              ]),
                            ]),
                          ],
                          -1,
                        )),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            },
          )
        )
      );
    },
  },
  uo = dt(co, [["__scopeId", "data-v-d4e9a465"]]),
  vo = "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/";
function fs(x) {
  const b = new URL(vo),
    f = new URLSearchParams();
  for (const [C, h] of Object.entries(x)) h !== void 0 && f.set(C, h);
  return ((b.search = f.toString()), b.toString());
}
async function hs(x) {
  if (!x.ok) throw new Error(`HTTP ${x.status}: ${x.statusText}`);
  const b = await x.json();
  if ((b == null ? void 0 : b.ok) === !1)
    throw new Error(b.error || "API error");
  return b;
}
async function po(x, b = 3, f = 100) {
  let C = null;
  for (let h = 0; h <= b; h++)
    try {
      return await x();
    } catch (g) {
      if (
        ((C = g),
        !(
          C.message.includes("429") ||
          C.message.includes("500") ||
          C.message.includes("503") ||
          C.message.includes("504")
        ) || h === b)
      )
        throw g;
      const E = f * Math.pow(2, h);
      (console.warn(
        `API request failed (attempt ${h + 1}), retrying in ${E}ms...`,
        C.message,
      ),
        await new Promise((j) => setTimeout(j, E)));
    }
  throw C || new Error("Unknown error");
}
const Ls = new Map(),
  Bs = new Map(),
  Vt = new Map();
let Fs = null;
const zs = new Map();
async function Un() {
  if (Fs) return Fs;
  const x = fs({ resource: "operators" }),
    b = await fetch(x),
    f = await hs(b);
  return ((Fs = f), f);
}
async function Rn(x) {
  const b = `cabins|${x || ""}`;
  if (Ls.has(b)) return Ls.get(b);
  const f = fs({ resource: "cabins", sheet: x }),
    C = await fetch(f),
    h = await hs(C);
  return (Ls.set(b, h), h);
}
async function Gn() {
  const x = "shipdetail";
  if (zs.has(x)) return zs.get(x);
  const b = fs({ resource: "shipdetail" }),
    f = await fetch(b),
    g = {
      ok: !0,
      resource: "shipdetail",
      ships: ((await hs(f)).ships || []).map((v) => ({
        id: v.id || "",
        name: v.name || "",
        description: v.description || "",
        mainImage: v.image_main || "",
        images: v.images || [],
        specs: v.specs || {},
      })),
    };
  zs.set(x, g);
  try {
    localStorage.setItem(x, JSON.stringify({ timestamp: Date.now(), data: g }));
  } catch (v) {
    console.warn("Quota exceeded or storage disabled", v);
  }
  return g;
}
async function vs(x, b) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(x))
    throw new Error("Date must be in YYYY-MM-DD format");
  const f = `${x}|${b || ""}`;
  if (Bs.has(f)) return Bs.get(f);
  if (Vt.has(f)) return Vt.get(f);
  const C = fs({ resource: "availability", date: x }),
    h = po(() => fetch(C).then((g) => hs(g)), 3, 200)
      .then((g) => (Bs.set(f, g), Vt.delete(f), g))
      .catch((g) => {
        throw (
          Vt.delete(f),
          console.error(`Failed to get availability for ${x}:`, g),
          g
        );
      });
  return (Vt.set(f, h), h);
}
function Vn(x) {
  const b = x.getFullYear(),
    f = String(x.getMonth() + 1).padStart(2, "0"),
    C = String(x.getDate()).padStart(2, "0");
  return `${b}-${f}-${C}`;
}
function Pt(x) {
  return new Date(x + "T00:00:00");
}
function mo() {
  return Vn(new Date());
}
const Kn = "" + new URL("left-arrow-CTppQl_n.svg", import.meta.url).href,
  Gs = "" + new URL("right-arrow-BeSe4_f_.svg", import.meta.url).href,
  ct = "" + new URL("down-arrow-BfUnB_1G.svg", import.meta.url).href,
  ut = "" + new URL("up-arrow-CozmStYp.svg", import.meta.url).href,
  fo = { key: 0, class: "modal-overlay" },
  ho = { class: "modal-container" },
  go = { class: "modal-body" },
  bo = { class: "plan-wrap plan-page" },
  yo = { class: "plan-content" },
  ko = { class: "wizard-progress" },
  wo = { class: "wizard-circle" },
  _o = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Co = { key: 1 },
  $o = { class: "wizard-circle" },
  So = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  xo = { key: 1 },
  Do = { class: "wizard-circle" },
  Ao = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  To = { key: 1 },
  Io = { class: "wizard-circle" },
  No = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Mo = { key: 1 },
  Eo = { class: "wizard-circle" },
  Ro = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Po = { key: 1 },
  Oo = { key: 0 },
  Lo = { class: "list" },
  Bo = { class: "list-text" },
  Fo = ["value", "aria-label"],
  zo = { key: 1 },
  Uo = { class: "list" },
  Go = { key: 0, class: "muted" },
  Vo = { class: "ship-info" },
  Ko = { class: "ship-details-text" },
  qo = { class: "list-text" },
  Wo = ["value", "aria-label"],
  Ho = { key: 0, class: "muted" },
  Yo = { key: 2 },
  Jo = { class: "dates-two-column-wrapper" },
  jo = { class: "dates-column-left" },
  Xo = { class: "date-range-display" },
  Qo = { class: "date-value" },
  Zo = { class: "date-value" },
  ei = { class: "custom-calendar" },
  ti = { class: "calendar-header" },
  si = { class: "calendar-title" },
  ni = { class: "calendar-grid" },
  ai = { class: "calendar-days" },
  oi = ["disabled", "onClick"],
  ii = { class: "dates-column-right" },
  li = { class: "trip-duration-summary" },
  ri = { class: "trip-duration-controls" },
  ci = { class: "counter-row duration-counter-row" },
  ui = { class: "counter-ctrls" },
  di = ["disabled"],
  vi = { class: "count-display" },
  pi = ["disabled"],
  mi = { class: "counter-row duration-counter-row" },
  fi = { class: "counter-ctrls" },
  hi = ["disabled"],
  gi = { class: "count-display" },
  bi = ["disabled"],
  yi = { key: 0, class: "trip-duration-reset" },
  ki = { key: 3 },
  wi = { class: "mode-toggle-container" },
  _i = { class: "mode-toggle" },
  Ci = { class: "text-center mb-6" },
  $i = { key: 0, class: "results-note" },
  Si = { key: 1, class: "results-note" },
  xi = { key: 0, class: "flexible-guest-card" },
  Di = { class: "counter-row" },
  Ai = { class: "counter-ctrls" },
  Ti = ["disabled"],
  Ii = { class: "count-display" },
  Ni = { key: 1, class: "cabins-container" },
  Mi = ["onClick"],
  Ei = { class: "cabin-header-left" },
  Ri = { class: "cabin-title" },
  Pi = { class: "cabin-header-right" },
  Oi = { class: "cabin-summary" },
  Li = ["onClick"],
  Bi = { key: 0, class: "cabin-body" },
  Fi = { class: "counter-row" },
  zi = { class: "counter-ctrls" },
  Ui = ["disabled", "onClick"],
  Gi = { class: "count" },
  Vi = ["disabled", "onClick"],
  Ki = { class: "counter-row" },
  qi = { class: "counter-ctrls" },
  Wi = ["disabled", "onClick"],
  Hi = { class: "count" },
  Yi = ["disabled", "onClick"],
  Ji = { class: "cabins-total" },
  ji = { class: "total-value" },
  Xi = { key: 4 },
  Qi = { class: "bottom-bar" },
  Zi = { class: "nav-inner-footer" },
  el = ["src"],
  tl = ["src"],
  sl = { key: 0, class: "toast-notification" },
  nl = { class: "toast-message" },
  al = "Nusa Tenggara Timur",
  ft = 30,
  ol = 4,
  ps = 4,
  il = {
    __name: "PlanModal",
    props: { isOpen: Boolean },
    emits: ["close", "navigate-to-results"],
    setup(x, { emit: b }) {
      const f = x,
        C = b,
        h = m(1),
        g = ["Komodo National Park", "Labuan Bajo"],
        v = [],
        E = m([]),
        j = m(!1),
        I = m([]),
        le = m([]),
        se = m(""),
        Z = m(""),
        K = m(1),
        q = m(30);
      function Ae() {
        K.value > 1 && K.value--;
      }
      function Se() {
        K.value < q.value && K.value++;
      }
      function re() {
        q.value > K.value && q.value--;
      }
      function O() {
        q.value < ft && q.value++;
      }
      (m(!1),
        D(() => {
          const $ = [];
          for (let u = 1; u <= ft; u++) $.push(u);
          return $;
        }));
      const X = D(() =>
        K.value === 1 && q.value === ft
          ? "Any duration"
          : K.value === q.value
            ? `${K.value} ${K.value === 1 ? "day" : "days"}`
            : `${K.value} - ${q.value} days`,
      );
      function ce() {
        ((K.value = 1), (q.value = ft));
      }
      const Y = m(!0),
        W = m(2),
        R = m([{ id: 1, adults: 2, children: 0, expanded: !0 }]),
        _ = D(() => R.value.reduce(($, u) => $ + u.adults + u.children, 0)),
        fe = D(() => R.value.length < ol),
        me = m(!1),
        Ne = m("");
      let Be = null;
      const ne = m(new Date().getMonth()),
        He = m(new Date().getFullYear());
      function ot() {
        const $ = E.value.filter((A) => le.value.includes(A.id)),
          u = $.map((A) => A.label),
          y = $.map((A) => A.sheet),
          H = {
            region: al,
            destination: I.value[0] || "",
            destinations: I.value.slice(),
            ships: u,
            shipSheets: y,
            ship: u[0] || "",
            lodges: u.slice(),
            dateFrom: se.value,
            dateTo: Z.value,
            minTripDuration: K.value,
            maxTripDuration: q.value,
            isFlexible: Y.value,
            flexibleGuests: Y.value ? W.value : 0,
            cabins: Y.value
              ? []
              : R.value.map((A) => ({
                  adults: A.adults,
                  children: A.children,
                  total: A.adults + A.children,
                })),
            totalCabins: Y.value ? 0 : R.value.length,
            totalGuests: Y.value ? W.value : _.value,
            adults: Y.value
              ? W.value
              : R.value.reduce((A, V) => A + V.adults, 0),
            children: Y.value ? 0 : R.value.reduce((A, V) => A + V.children, 0),
            age3_9: 0,
            age0_2: 0,
            timestamp: Date.now(),
          };
        (localStorage.setItem("komodo_search_criteria", JSON.stringify(H)),
          C("navigate-to-results"));
      }
      const ue = ["Destinations", "Ships", "Dates", "Guests", "Submit"],
        k = D(() => ue[h.value - 2] || ""),
        Me = D(() => (h.value < 5 ? ue[h.value - 1] : "Submit"));
      D(() => mo());
      const P = D(
          () =>
            `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][ne.value]} ${He.value}`,
        ),
        Te = D(() => {
          const $ = new Date(He.value, ne.value, 1),
            u = new Date(He.value, ne.value + 1, 0),
            y = new Date($),
            H = new Date();
          y.setDate(y.getDate() - y.getDay());
          const A = [],
            V = new Date(u);
          V.setDate(V.getDate() + (6 - u.getDay()));
          for (let ee = new Date(y); ee <= V; ee.setDate(ee.getDate() + 1)) {
            ee.getDay();
            const he = ee.getMonth() === ne.value,
              xe = new Date(ee);
            xe.setHours(0, 0, 0, 0);
            const _e = new Date(H);
            _e.setHours(0, 0, 0, 0);
            const Fe = xe < _e,
              Ft = he && !Fe,
              It = Vn(ee);
            let Jt = !1,
              ze = !1,
              Ue = !1;
            if (se.value && Z.value && he) {
              const Ge = Pt(se.value),
                Ve = Pt(Z.value);
              xe >= Ge &&
                xe <= Ve &&
                ((Jt = !0),
                xe.getTime() === Ge.getTime() && (ze = !0),
                xe.getTime() === Ve.getTime() && (Ue = !0));
            }
            A.push({
              key: ee.getTime(),
              date: ee.getDate(),
              fullDate: It,
              isCurrentMonth: he,
              isSelectable: Ft,
              isPast: Fe,
              isSelected: se.value === It || Z.value === It,
              isInRange: Jt,
              isRangeStart: ze,
              isRangeEnd: Ue,
            });
          }
          return A;
        }),
        Ye = D(() => {
          if (!se.value || !Z.value) return ft;
          const $ = Pt(se.value),
            y = Pt(Z.value).getTime() - $.getTime(),
            H = Math.ceil(y / (1e3 * 60 * 60 * 24)) + 1;
          return Math.min(H, ft);
        });
      D(() => {
        const $ = Ye.value,
          u = [];
        for (let y = 1; y <= $; y++) u.push(y);
        return u;
      });
      const Pe = D(() => I.value.length > 0),
        Qe = D(() => I.value.length > 0 && le.value.length > 0),
        Le = D(() => I.value.length > 0 && le.value.length > 0 && !!se.value);
      (at(I, () => {
        le.value = [];
      }),
        at(Ye, ($) => {
          Fn(() => {
            (q.value > $ && (q.value = $),
              K.value > q.value && (K.value = q.value));
          });
        }));
      const oe = {
        bodyOverflow: "",
        htmlOverflow: "",
        bodyPadding: "",
        htmlPadding: "",
      };
      (at(
        () => f.isOpen,
        ($) => {
          $ ? et() : it();
        },
        { immediate: !0 },
      ),
        Xe(() => {
          Ze();
        }),
        bt(() => {
          it();
        }));
      function St() {
        C("close");
      }
      function $e($) {
        h.value = $;
      }
      function tt() {
        if (h.value === 1 && I.value.length === 0)
          return Bt("Please select at least one destination first.");
        if (h.value === 2 && le.value.length === 0)
          return Bt("Please select at least one ship first.");
        if (h.value === 3 && !se.value)
          return Bt("Please select a start date first.");
        h.value < 5 ? h.value++ : ot();
      }
      function yt() {
        h.value > 1 && h.value--;
      }
      function Je() {
        ot();
      }
      function kt() {
        ot();
      }
      async function Ze() {
        j.value = !0;
        try {
          let $, u;
          try {
            [$, u] = await Promise.all([
              Un(),
              Gn().catch(
                (A) => (
                  console.warn(
                    "Failed to load ship details (likely quota exceeded):",
                    A,
                  ),
                  null
                ),
              ),
            ]);
          } catch (A) {
            (console.warn("Critical failure loading operators:", A),
              (E.value = xt(v)));
            return;
          }
          const y = {};
          u != null &&
            u.ships &&
            u.ships.forEach((A) => {
              const V = A.name ? A.name.toLowerCase().trim() : "";
              V && (y[V] = A);
            });
          const H = (($ == null ? void 0 : $.operators) || [])
            .map((A) => {
              var _e, Fe;
              const V = ((_e = A.operator) == null ? void 0 : _e.trim()) || "",
                ee = ((Fe = A.sourceSheet) == null ? void 0 : Fe.trim()) || V,
                he = V.toLowerCase().trim(),
                xe = y[he];
              return {
                id: `${V}__${ee}`,
                label: V,
                sheet: ee,
                image: (xe == null ? void 0 : xe.mainImage) || "",
                description: (xe == null ? void 0 : xe.description) || "",
                specs: (xe == null ? void 0 : xe.specs) || {},
              };
            })
            .filter((A) => A.label && A.sheet);
          E.value = H.length ? H : xt(v);
        } catch ($) {
          (console.warn("Failed to load operators/details:", $),
            (E.value = xt(v)));
        } finally {
          j.value = !1;
        }
      }
      function et() {
        const $ = document.body,
          u = document.documentElement;
        if (!$ || !u) return;
        const y = window.innerWidth - u.clientWidth;
        if (
          ((oe.bodyOverflow = $.style.overflow),
          (oe.htmlOverflow = u.style.overflow),
          (oe.bodyPadding = $.style.paddingRight),
          (oe.htmlPadding = u.style.paddingRight),
          y > 0)
        ) {
          const H = `${y}px`;
          (($.style.paddingRight = H), (u.style.paddingRight = H));
        }
        (($.style.overflow = "hidden"), (u.style.overflow = "hidden"));
      }
      function it() {
        const $ = document.body,
          u = document.documentElement;
        !$ ||
          !u ||
          (($.style.overflow = oe.bodyOverflow),
          (u.style.overflow = oe.htmlOverflow),
          ($.style.paddingRight = oe.bodyPadding),
          (u.style.paddingRight = oe.htmlPadding));
      }
      function xt($) {
        return Array.isArray($)
          ? $.map((u) => {
              var A, V;
              const y = ((A = u.label) == null ? void 0 : A.trim()) || "",
                H = ((V = u.sheet) == null ? void 0 : V.trim()) || y;
              return { id: u.id || `${y}__${H}`, label: y, sheet: H };
            }).filter((u) => u.label && u.sheet)
          : [];
      }
      function Yt() {
        fe.value &&
          R.value.push({
            id: Date.now(),
            adults: 2,
            children: 0,
            expanded: !0,
          });
      }
      function we($) {
        R.value.length > 1 && R.value.splice($, 1);
      }
      function Lt($) {
        R.value[$].expanded = !R.value[$].expanded;
      }
      function Dt($, u) {
        const y = R.value[$];
        y.adults + y.children < ps && y[u]++;
      }
      function At($, u) {
        const y = R.value[$];
        (u === "adults" && y.adults > 1 && y.adults--,
          u === "children" && y.children > 0 && y.children--);
      }
      function Bt($) {
        ((Ne.value = $),
          (me.value = !0),
          Be && clearTimeout(Be),
          (Be = setTimeout(() => {
            me.value = !1;
          }, 3e3)));
      }
      function lt() {
        ne.value === 0 ? ((ne.value = 11), He.value--) : ne.value--;
      }
      function Tt() {
        ne.value === 11 ? ((ne.value = 0), He.value++) : ne.value++;
      }
      function Ee($) {
        if ($.isSelectable)
          if (!se.value || (se.value && Z.value))
            ((se.value = $.fullDate), (Z.value = ""));
          else {
            const u = Pt(se.value);
            Pt($.fullDate) < u
              ? ((Z.value = se.value), (se.value = $.fullDate))
              : (Z.value = $.fullDate);
          }
      }
      return ($, u) => (
        o(),
        Ht(zn, { to: "body" }, [
          ke(
            $t,
            { name: "modal-fade" },
            {
              default: Re(() => [
                x.isOpen
                  ? (o(),
                    i("div", fo, [
                      e("div", ho, [
                        e("div", { class: "modal-header" }, [
                          e("div", { class: "modal-header-content" }, [
                            u[12] ||
                              (u[12] = e(
                                "h2",
                                { class: "modal-title" },
                                "Plan your trip",
                                -1,
                              )),
                            e("button", { class: "modal-close", onClick: St }, [
                              ...(u[11] ||
                                (u[11] = [
                                  Q(" Close ", -1),
                                  e("span", { class: "close-x" }, "✕", -1),
                                ])),
                            ]),
                          ]),
                        ]),
                        e("div", go, [
                          e("section", bo, [
                            e("div", yo, [
                              e("div", ko, [
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 1,
                                        active: h.value === 1,
                                      },
                                    ]),
                                    onClick: u[0] || (u[0] = (y) => $e(1)),
                                  },
                                  [
                                    e("div", wo, [
                                      h.value > 1
                                        ? (o(),
                                          i("svg", _o, [
                                            ...(u[13] ||
                                              (u[13] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1,
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Co, "1")),
                                    ]),
                                    u[14] ||
                                      (u[14] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Destinations",
                                        -1,
                                      )),
                                  ],
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-line",
                                      { completed: h.value > 1 },
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 2,
                                        active: h.value === 2,
                                        disabled: !Pe.value,
                                      },
                                    ]),
                                    onClick:
                                      u[1] || (u[1] = (y) => Pe.value && $e(2)),
                                  },
                                  [
                                    e("div", $o, [
                                      h.value > 2
                                        ? (o(),
                                          i("svg", So, [
                                            ...(u[15] ||
                                              (u[15] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1,
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", xo, "2")),
                                    ]),
                                    u[16] ||
                                      (u[16] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Ships",
                                        -1,
                                      )),
                                  ],
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-line",
                                      { completed: h.value > 2 },
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 3,
                                        active: h.value === 3,
                                        disabled: !Qe.value,
                                      },
                                    ]),
                                    onClick:
                                      u[2] || (u[2] = (y) => Qe.value && $e(3)),
                                  },
                                  [
                                    e("div", Do, [
                                      h.value > 3
                                        ? (o(),
                                          i("svg", Ao, [
                                            ...(u[17] ||
                                              (u[17] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1,
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", To, "3")),
                                    ]),
                                    u[18] ||
                                      (u[18] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Dates",
                                        -1,
                                      )),
                                  ],
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-line",
                                      { completed: h.value > 3 },
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 4,
                                        active: h.value === 4,
                                        disabled: !Le.value,
                                      },
                                    ]),
                                    onClick:
                                      u[3] || (u[3] = (y) => Le.value && $e(4)),
                                  },
                                  [
                                    e("div", Io, [
                                      h.value > 4
                                        ? (o(),
                                          i("svg", No, [
                                            ...(u[19] ||
                                              (u[19] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1,
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Mo, "4")),
                                    ]),
                                    u[20] ||
                                      (u[20] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Guests",
                                        -1,
                                      )),
                                  ],
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-line",
                                      { completed: h.value > 4 },
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value === 5,
                                        active: h.value === 5,
                                        disabled: !Le.value,
                                      },
                                    ]),
                                    onClick:
                                      u[4] || (u[4] = (y) => Le.value && $e(5)),
                                  },
                                  [
                                    e("div", Eo, [
                                      h.value === 5
                                        ? (o(),
                                          i("svg", Ro, [
                                            ...(u[21] ||
                                              (u[21] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1,
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Po, "5")),
                                    ]),
                                    u[22] ||
                                      (u[22] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Submit",
                                        -1,
                                      )),
                                  ],
                                  2,
                                ),
                              ]),
                              h.value === 1
                                ? (o(),
                                  i("div", Oo, [
                                    u[24] ||
                                      (u[24] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Destinations",
                                        -1,
                                      )),
                                    u[25] ||
                                      (u[25] = e(
                                        "p",
                                        { class: "results-note" },
                                        " Select the destinations you're interested in: ",
                                        -1,
                                      )),
                                    e("div", Lo, [
                                      u[23] ||
                                        (u[23] = e(
                                          "div",
                                          { class: "list-heading" },
                                          "Nusa Tenggara Timur",
                                          -1,
                                        )),
                                      (o(),
                                      i(
                                        G,
                                        null,
                                        ae(g, (y) =>
                                          e(
                                            "div",
                                            { class: "list-row", key: y },
                                            [
                                              e("div", Bo, l(y), 1),
                                              ge(
                                                e(
                                                  "input",
                                                  {
                                                    class: "check",
                                                    type: "checkbox",
                                                    value: y,
                                                    "onUpdate:modelValue":
                                                      u[5] ||
                                                      (u[5] = (H) =>
                                                        (I.value = H)),
                                                    "aria-label": `Destination ${y}`,
                                                  },
                                                  null,
                                                  8,
                                                  Fo,
                                                ),
                                                [[ht, I.value]],
                                              ),
                                            ],
                                          ),
                                        ),
                                        64,
                                      )),
                                    ]),
                                  ]))
                                : h.value === 2
                                  ? (o(),
                                    i("div", zo, [
                                      u[26] ||
                                        (u[26] = e(
                                          "h3",
                                          { class: "step-title" },
                                          "Ships",
                                          -1,
                                        )),
                                      u[27] ||
                                        (u[27] = e(
                                          "p",
                                          { class: "results-note" },
                                          "Please select one or more ships:",
                                          -1,
                                        )),
                                      e("div", Uo, [
                                        j.value
                                          ? (o(),
                                            i("div", Go, " Loading ships... "))
                                          : (o(),
                                            i(
                                              G,
                                              { key: 1 },
                                              [
                                                (o(!0),
                                                i(
                                                  G,
                                                  null,
                                                  ae(
                                                    E.value,
                                                    (y) => (
                                                      o(),
                                                      i(
                                                        "div",
                                                        {
                                                          class: B([
                                                            "list-row",
                                                            {
                                                              "has-details":
                                                                !!y.image,
                                                            },
                                                          ]),
                                                          key: y.id,
                                                        },
                                                        [
                                                          e("div", Vo, [
                                                            e("div", Ko, [
                                                              e(
                                                                "div",
                                                                qo,
                                                                l(y.label),
                                                                1,
                                                              ),
                                                            ]),
                                                          ]),
                                                          ge(
                                                            e(
                                                              "input",
                                                              {
                                                                class: "check",
                                                                type: "checkbox",
                                                                value: y.id,
                                                                "onUpdate:modelValue":
                                                                  u[6] ||
                                                                  (u[6] = (H) =>
                                                                    (le.value =
                                                                      H)),
                                                                "aria-label": `Ship ${y.label}`,
                                                              },
                                                              null,
                                                              8,
                                                              Wo,
                                                            ),
                                                            [[ht, le.value]],
                                                          ),
                                                        ],
                                                        2,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                                E.value.length === 0
                                                  ? (o(),
                                                    i(
                                                      "div",
                                                      Ho,
                                                      " No ships found from API. ",
                                                    ))
                                                  : M("", !0),
                                              ],
                                              64,
                                            )),
                                      ]),
                                    ]))
                                  : h.value === 3
                                    ? (o(),
                                      i("div", Yo, [
                                        u[36] ||
                                          (u[36] = e(
                                            "h3",
                                            { class: "step-title" },
                                            "Dates",
                                            -1,
                                          )),
                                        e("div", Jo, [
                                          e("div", jo, [
                                            u[30] ||
                                              (u[30] = e(
                                                "p",
                                                { class: "results-note" },
                                                "Select your travel dates:",
                                                -1,
                                              )),
                                            e("div", Xo, [
                                              e(
                                                "span",
                                                Qo,
                                                l(se.value || "Start date"),
                                                1,
                                              ),
                                              u[28] ||
                                                (u[28] = e(
                                                  "span",
                                                  { class: "date-arrow" },
                                                  "→",
                                                  -1,
                                                )),
                                              e(
                                                "span",
                                                Zo,
                                                l(Z.value || "End date"),
                                                1,
                                              ),
                                            ]),
                                            u[31] ||
                                              (u[31] = e(
                                                "p",
                                                {
                                                  class:
                                                    "results-note text-sm calendar-instruction",
                                                },
                                                " Click to select start date, then click again to select end date. ",
                                                -1,
                                              )),
                                            e("div", ei, [
                                              e("div", ti, [
                                                e("h4", si, l(P.value), 1),
                                                e(
                                                  "div",
                                                  {
                                                    class: "calendar-nav-group",
                                                  },
                                                  [
                                                    e(
                                                      "button",
                                                      {
                                                        class: "calendar-nav",
                                                        onClick: lt,
                                                        type: "button",
                                                      },
                                                      " ‹ ",
                                                    ),
                                                    e(
                                                      "button",
                                                      {
                                                        class: "calendar-nav",
                                                        onClick: Tt,
                                                        type: "button",
                                                      },
                                                      " › ",
                                                    ),
                                                  ],
                                                ),
                                              ]),
                                              e("div", ni, [
                                                u[29] ||
                                                  (u[29] = e(
                                                    "div",
                                                    {
                                                      class:
                                                        "calendar-weekdays",
                                                    },
                                                    [
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Su",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Mo",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Tu",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "We",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Th",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Fr",
                                                      ),
                                                      e(
                                                        "div",
                                                        { class: "weekday" },
                                                        "Sa",
                                                      ),
                                                    ],
                                                    -1,
                                                  )),
                                                e("div", ai, [
                                                  (o(!0),
                                                  i(
                                                    G,
                                                    null,
                                                    ae(
                                                      Te.value,
                                                      (y) => (
                                                        o(),
                                                        i(
                                                          "button",
                                                          {
                                                            key: y.key,
                                                            class: B([
                                                              "calendar-day",
                                                              {
                                                                "other-month":
                                                                  !y.isCurrentMonth,
                                                                selected:
                                                                  y.isSelected,
                                                                disabled:
                                                                  !y.isSelectable,
                                                                past: y.isPast,
                                                                "in-range":
                                                                  y.isInRange,
                                                                "range-start":
                                                                  y.isRangeStart,
                                                                "range-end":
                                                                  y.isRangeEnd,
                                                              },
                                                            ]),
                                                            disabled:
                                                              !y.isSelectable,
                                                            onClick: (H) =>
                                                              Ee(y),
                                                            type: "button",
                                                          },
                                                          l(y.date),
                                                          11,
                                                          oi,
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                          e("div", ii, [
                                            u[34] ||
                                              (u[34] = e(
                                                "p",
                                                { class: "results-note" },
                                                "Select your trip duration",
                                                -1,
                                              )),
                                            e("div", li, l(X.value), 1),
                                            u[35] ||
                                              (u[35] = e(
                                                "p",
                                                {
                                                  class:
                                                    "results-note text-sm trip-duration-instruction",
                                                },
                                                " Adjust the min and max trip duration. ",
                                                -1,
                                              )),
                                            e("div", ri, [
                                              e("div", ci, [
                                                u[32] ||
                                                  (u[32] = e(
                                                    "div",
                                                    { class: "counter-text" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "counter-title",
                                                        },
                                                        "Min",
                                                      ),
                                                    ],
                                                    -1,
                                                  )),
                                                e("div", ui, [
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled: K.value <= 1,
                                                      onClick: Ae,
                                                    },
                                                    " − ",
                                                    8,
                                                    di,
                                                  ),
                                                  e("span", vi, l(K.value), 1),
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled:
                                                        K.value >= q.value,
                                                      onClick: Se,
                                                    },
                                                    " + ",
                                                    8,
                                                    pi,
                                                  ),
                                                ]),
                                              ]),
                                              e("div", mi, [
                                                u[33] ||
                                                  (u[33] = e(
                                                    "div",
                                                    { class: "counter-text" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "counter-title",
                                                        },
                                                        "Max",
                                                      ),
                                                    ],
                                                    -1,
                                                  )),
                                                e("div", fi, [
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled:
                                                        q.value <= K.value,
                                                      onClick: re,
                                                    },
                                                    " − ",
                                                    8,
                                                    hi,
                                                  ),
                                                  e("span", gi, l(q.value), 1),
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled: q.value >= ft,
                                                      onClick: O,
                                                    },
                                                    " + ",
                                                    8,
                                                    bi,
                                                  ),
                                                ]),
                                              ]),
                                              K.value > 1 || q.value < ft
                                                ? (o(),
                                                  i("div", yi, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: "btn-text-reset",
                                                        onClick: ce,
                                                      },
                                                      " Reset to any duration ",
                                                    ),
                                                  ]))
                                                : M("", !0),
                                            ]),
                                          ]),
                                        ]),
                                      ]))
                                    : h.value === 4
                                      ? (o(),
                                        i("div", ki, [
                                          u[43] ||
                                            (u[43] = e(
                                              "h3",
                                              { class: "step-title" },
                                              "Cabins & Guests",
                                              -1,
                                            )),
                                          e("div", wi, [
                                            e("div", _i, [
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: B([
                                                    "mode-btn",
                                                    { active: Y.value },
                                                  ]),
                                                  onClick:
                                                    u[7] ||
                                                    (u[7] = (y) =>
                                                      (Y.value = !0)),
                                                },
                                                " Flexible ",
                                                2,
                                              ),
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: B([
                                                    "mode-btn",
                                                    { active: !Y.value },
                                                  ]),
                                                  onClick:
                                                    u[8] ||
                                                    (u[8] = (y) =>
                                                      (Y.value = !1)),
                                                },
                                                " Room Allocation ",
                                                2,
                                              ),
                                            ]),
                                          ]),
                                          e("div", Ci, [
                                            Y.value
                                              ? (o(),
                                                i(
                                                  "p",
                                                  Si,
                                                  " Set total guests only. You can choose specific rooms later. ",
                                                ))
                                              : (o(),
                                                i(
                                                  "p",
                                                  $i,
                                                  " Configure guests for each cabin individually. ",
                                                )),
                                          ]),
                                          Y.value
                                            ? (o(),
                                              i("div", xi, [
                                                e("div", Di, [
                                                  u[37] ||
                                                    (u[37] = e(
                                                      "div",
                                                      { class: "counter-text" },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            class:
                                                              "counter-title",
                                                          },
                                                          "Total Guests",
                                                        ),
                                                        e(
                                                          "div",
                                                          {
                                                            class:
                                                              "counter-subtitle",
                                                          },
                                                          " We will find the best cabin combination for you ",
                                                        ),
                                                      ],
                                                      -1,
                                                    )),
                                                  e("div", Ai, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: "btn-icon",
                                                        disabled: W.value <= 1,
                                                        onClick:
                                                          u[9] ||
                                                          (u[9] = (y) =>
                                                            W.value--),
                                                      },
                                                      " − ",
                                                      8,
                                                      Ti,
                                                    ),
                                                    e(
                                                      "span",
                                                      Ii,
                                                      l(W.value),
                                                      1,
                                                    ),
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: "btn-icon",
                                                        onClick:
                                                          u[10] ||
                                                          (u[10] = (y) =>
                                                            W.value++),
                                                      },
                                                      " + ",
                                                    ),
                                                  ]),
                                                ]),
                                              ]))
                                            : (o(),
                                              i("div", Ni, [
                                                (o(!0),
                                                i(
                                                  G,
                                                  null,
                                                  ae(
                                                    R.value,
                                                    (y, H) => (
                                                      o(),
                                                      i(
                                                        "div",
                                                        {
                                                          key: y.id,
                                                          class:
                                                            "cabin-accordion",
                                                        },
                                                        [
                                                          e(
                                                            "div",
                                                            {
                                                              class:
                                                                "cabin-header",
                                                              onClick: (A) =>
                                                                Lt(H),
                                                            },
                                                            [
                                                              e("div", Ei, [
                                                                e(
                                                                  "span",
                                                                  Ri,
                                                                  "CABIN " +
                                                                    l(H + 1),
                                                                  1,
                                                                ),
                                                              ]),
                                                              e("div", Pi, [
                                                                e(
                                                                  "span",
                                                                  Oi,
                                                                  l(
                                                                    y.adults +
                                                                      y.children,
                                                                  ) +
                                                                    " guest" +
                                                                    l(
                                                                      y.adults +
                                                                        y.children !==
                                                                        1
                                                                        ? "s"
                                                                        : "",
                                                                    ),
                                                                  1,
                                                                ),
                                                                R.value.length >
                                                                1
                                                                  ? (o(),
                                                                    i(
                                                                      "button",
                                                                      {
                                                                        key: 0,
                                                                        type: "button",
                                                                        class:
                                                                          "cabin-remove-btn",
                                                                        onClick:
                                                                          pe(
                                                                            (
                                                                              A,
                                                                            ) =>
                                                                              we(
                                                                                H,
                                                                              ),
                                                                            [
                                                                              "stop",
                                                                            ],
                                                                          ),
                                                                        title:
                                                                          "Remove cabin",
                                                                      },
                                                                      [
                                                                        ...(u[38] ||
                                                                          (u[38] =
                                                                            [
                                                                              e(
                                                                                "svg",
                                                                                {
                                                                                  width:
                                                                                    "16",
                                                                                  height:
                                                                                    "16",
                                                                                  viewBox:
                                                                                    "0 0 24 24",
                                                                                  fill: "none",
                                                                                  stroke:
                                                                                    "currentColor",
                                                                                  "stroke-width":
                                                                                    "2",
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "path",
                                                                                    {
                                                                                      d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z",
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                                -1,
                                                                              ),
                                                                            ])),
                                                                      ],
                                                                      8,
                                                                      Li,
                                                                    ))
                                                                  : M("", !0),
                                                                (o(),
                                                                i(
                                                                  "svg",
                                                                  {
                                                                    class: B([
                                                                      "cabin-chevron",
                                                                      {
                                                                        expanded:
                                                                          y.expanded,
                                                                      },
                                                                    ]),
                                                                    width: "20",
                                                                    height:
                                                                      "20",
                                                                    viewBox:
                                                                      "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke:
                                                                      "currentColor",
                                                                    "stroke-width":
                                                                      "2",
                                                                  },
                                                                  [
                                                                    ...(u[39] ||
                                                                      (u[39] = [
                                                                        e(
                                                                          "polyline",
                                                                          {
                                                                            points:
                                                                              "6 9 12 15 18 9",
                                                                          },
                                                                          null,
                                                                          -1,
                                                                        ),
                                                                      ])),
                                                                  ],
                                                                  2,
                                                                )),
                                                              ]),
                                                            ],
                                                            8,
                                                            Mi,
                                                          ),
                                                          ke(
                                                            $t,
                                                            {
                                                              name: "accordion",
                                                            },
                                                            {
                                                              default: Re(
                                                                () => [
                                                                  y.expanded
                                                                    ? (o(),
                                                                      i(
                                                                        "div",
                                                                        Bi,
                                                                        [
                                                                          e(
                                                                            "div",
                                                                            Fi,
                                                                            [
                                                                              u[40] ||
                                                                                (u[40] =
                                                                                  e(
                                                                                    "div",
                                                                                    {
                                                                                      class:
                                                                                        "counter-text",
                                                                                    },
                                                                                    [
                                                                                      e(
                                                                                        "div",
                                                                                        {
                                                                                          class:
                                                                                            "semibold",
                                                                                        },
                                                                                        "Adults",
                                                                                      ),
                                                                                      e(
                                                                                        "div",
                                                                                        {
                                                                                          class:
                                                                                            "muted text-sm",
                                                                                        },
                                                                                        "Ages 17+",
                                                                                      ),
                                                                                    ],
                                                                                    -1,
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                zi,
                                                                                [
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon",
                                                                                      disabled:
                                                                                        y.adults <=
                                                                                        1,
                                                                                      onClick:
                                                                                        (
                                                                                          A,
                                                                                        ) =>
                                                                                          At(
                                                                                            H,
                                                                                            "adults",
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    Ui,
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    Gi,
                                                                                    l(
                                                                                      y.adults,
                                                                                    ),
                                                                                    1,
                                                                                  ),
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon",
                                                                                      disabled:
                                                                                        y.adults +
                                                                                          y.children >=
                                                                                        ps,
                                                                                      onClick:
                                                                                        (
                                                                                          A,
                                                                                        ) =>
                                                                                          Dt(
                                                                                            H,
                                                                                            "adults",
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    Vi,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            Ki,
                                                                            [
                                                                              u[41] ||
                                                                                (u[41] =
                                                                                  e(
                                                                                    "div",
                                                                                    {
                                                                                      class:
                                                                                        "counter-text",
                                                                                    },
                                                                                    [
                                                                                      e(
                                                                                        "div",
                                                                                        {
                                                                                          class:
                                                                                            "semibold",
                                                                                        },
                                                                                        "Children",
                                                                                      ),
                                                                                      e(
                                                                                        "div",
                                                                                        {
                                                                                          class:
                                                                                            "muted text-sm",
                                                                                        },
                                                                                        "Ages 3 - 16",
                                                                                      ),
                                                                                    ],
                                                                                    -1,
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                qi,
                                                                                [
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon",
                                                                                      disabled:
                                                                                        y.children <=
                                                                                        0,
                                                                                      onClick:
                                                                                        (
                                                                                          A,
                                                                                        ) =>
                                                                                          At(
                                                                                            H,
                                                                                            "children",
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    Wi,
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    Hi,
                                                                                    l(
                                                                                      y.children,
                                                                                    ),
                                                                                    1,
                                                                                  ),
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon",
                                                                                      disabled:
                                                                                        y.adults +
                                                                                          y.children >=
                                                                                        ps,
                                                                                      onClick:
                                                                                        (
                                                                                          A,
                                                                                        ) =>
                                                                                          Dt(
                                                                                            H,
                                                                                            "children",
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    Yi,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            {
                                                                              class:
                                                                                "cabin-note",
                                                                            },
                                                                            " Max " +
                                                                              l(
                                                                                ps,
                                                                              ) +
                                                                              " guests per cabin ",
                                                                          ),
                                                                        ],
                                                                      ))
                                                                    : M("", !0),
                                                                ],
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024,
                                                          ),
                                                        ],
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                                fe.value
                                                  ? (o(),
                                                    i(
                                                      "button",
                                                      {
                                                        key: 0,
                                                        type: "button",
                                                        class: "btn-add-cabin",
                                                        onClick: Yt,
                                                      },
                                                      " + Add Another Cabin ",
                                                    ))
                                                  : M("", !0),
                                                e("div", Ji, [
                                                  u[42] ||
                                                    (u[42] = e(
                                                      "span",
                                                      null,
                                                      "Total:",
                                                      -1,
                                                    )),
                                                  e(
                                                    "span",
                                                    ji,
                                                    l(R.value.length) +
                                                      " cabin" +
                                                      l(
                                                        R.value.length !== 1
                                                          ? "s"
                                                          : "",
                                                      ) +
                                                      ", " +
                                                      l(_.value) +
                                                      " guest" +
                                                      l(
                                                        _.value !== 1
                                                          ? "s"
                                                          : "",
                                                      ),
                                                    1,
                                                  ),
                                                ]),
                                              ])),
                                        ]))
                                      : (o(),
                                        i("div", Xi, [
                                          u[44] ||
                                            (u[44] = e(
                                              "h3",
                                              { class: "step-title" },
                                              "Check Availability",
                                              -1,
                                            )),
                                          u[45] ||
                                            (u[45] = e(
                                              "p",
                                              { class: "results-note" },
                                              " To see if we have availability for your preferred criteria, please click the button below. ",
                                              -1,
                                            )),
                                          e("div", { class: "mt-4" }, [
                                            e(
                                              "button",
                                              {
                                                class: "btn-primary",
                                                onClick: Je,
                                              },
                                              " Check now ",
                                            ),
                                          ]),
                                          u[46] ||
                                            (u[46] = e(
                                              "div",
                                              {
                                                class: "section-divider",
                                                style: { margin: "1.5rem 0" },
                                              },
                                              null,
                                              -1,
                                            )),
                                          u[47] ||
                                            (u[47] = e(
                                              "h4",
                                              { class: "section-title" },
                                              " Speak with a Komodo Cruises Travel Advisor ",
                                              -1,
                                            )),
                                          u[48] ||
                                            (u[48] = e(
                                              "p",
                                              { class: "results-note" },
                                              " Need some help to plan your trip? Enquire below to contact one of our Komodo Cruises Travel Advisors. ",
                                              -1,
                                            )),
                                          e("div", { class: "mt-4" }, [
                                            e(
                                              "button",
                                              {
                                                class: "btn-primary",
                                                onClick: kt,
                                              },
                                              " Enquire now ",
                                            ),
                                          ]),
                                        ])),
                              e("div", Qi, [
                                e("div", Zi, [
                                  h.value > 1
                                    ? (o(),
                                      i(
                                        "button",
                                        {
                                          key: 0,
                                          class: "link-muted text-icon-btn",
                                          onClick: yt,
                                        },
                                        [
                                          e(
                                            "img",
                                            {
                                              src: be(Kn),
                                              alt: "Previous",
                                              class: "nav-arrow",
                                            },
                                            null,
                                            8,
                                            el,
                                          ),
                                          Q(" " + l(k.value), 1),
                                        ],
                                      ))
                                    : M("", !0),
                                  e(
                                    "button",
                                    {
                                      class: "btn-primary text-icon-btn",
                                      onClick: tt,
                                    },
                                    [
                                      Q(l(Me.value) + " ", 1),
                                      e(
                                        "img",
                                        {
                                          src: be(Gs),
                                          alt: "Next",
                                          class: "nav-arrow white-filter",
                                        },
                                        null,
                                        8,
                                        tl,
                                      ),
                                    ],
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            },
          ),
          ke(
            $t,
            { name: "toast-slide" },
            {
              default: Re(() => [
                me.value
                  ? (o(),
                    i("div", sl, [
                      u[49] ||
                        (u[49] = e("span", { class: "toast-icon" }, "⚠️", -1)),
                      e("span", nl, l(Ne.value), 1),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            },
          ),
        ])
      );
    },
  },
  Vs = dt(il, [["__scopeId", "data-v-7c260327"]]),
  ll = { key: 0, class: "nav-inner plan-mode" },
  rl = { key: 1, class: "nav-inner" },
  cl = { class: "nav-left" },
  ul = { class: "nav-lang" },
  dl = {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.2",
    style: { "margin-right": "6px" },
  },
  vl = { key: 0, class: "lang-dropdown" },
  pl = ["onClick"],
  ml = { class: "nav-center" },
  fl = { class: "nav-right" },
  hl = {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    style: { "margin-left": "8px" },
  },
  gl = { key: 0, class: "site-footer mt-16" },
  bl = { class: "footer-inner container text-sm" },
  yl = {
    __name: "App",
    setup(x) {
      const b = Us(),
        f = qa(),
        C = m(!1),
        h = m(!1),
        g = m(!1),
        v = m(!1),
        E = m(!1),
        j = m("EN"),
        I = m(!1),
        le = [
          { code: "EN", label: "English" },
          { code: "ID", label: "Indonesia" },
          { code: "ZH", label: "Chinese" },
          { code: "ES", label: "Spanish" },
          { code: "FR", label: "French" },
        ],
        se = () => {
          I.value = !I.value;
        },
        Z = (re) => {
          ((j.value = re.code), (I.value = !1));
        },
        K = () => {
          C.value = window.scrollY > window.innerHeight * 0.8;
          const re = document.querySelectorAll('[data-nav-theme="light"]');
          let O = !1;
          (re.forEach((X) => {
            const ce = X.getBoundingClientRect();
            ce.top <= 80 && ce.bottom >= 80 && (O = !0);
          }),
            (E.value = O));
        },
        q = () => {
          ((g.value = !1),
            setTimeout(() => {
              h.value = !0;
            }, 300));
        },
        Ae = () => {
          f.path === "/results" ? b.push("/find-reservation") : (v.value = !0);
        },
        Se = () => {
          ((v.value = !1), b.push("/results"));
        };
      return (
        Xe(() => {
          window.addEventListener("scroll", K);
        }),
        bt(() => {
          window.removeEventListener("scroll", K);
        }),
        (re, O) => {
          const X = qt("router-link"),
            ce = qt("router-view");
          return (
            o(),
            i("div", null, [
              ke(
                oo,
                {
                  isOpen: h.value,
                  onClose: O[0] || (O[0] = (Y) => (h.value = !1)),
                },
                null,
                8,
                ["isOpen"],
              ),
              ke(
                Vs,
                {
                  isOpen: v.value,
                  onClose: O[1] || (O[1] = (Y) => (v.value = !1)),
                  onNavigateToResults: Se,
                },
                null,
                8,
                ["isOpen"],
              ),
              ke(
                uo,
                {
                  isOpen: g.value,
                  onClose: O[2] || (O[2] = (Y) => (g.value = !1)),
                  onOpenSearch: q,
                },
                null,
                8,
                ["isOpen"],
              ),
              e(
                "header",
                {
                  class: B([
                    "nav-container",
                    {
                      "nav-overlay": re.$route.path === "/",
                      "home-nav": re.$route.path === "/",
                      scrolled: C.value,
                      "nav-light-theme": E.value,
                      "navbar-result":
                        re.$route.path === "/results" ||
                        re.$route.path === "/find-reservation",
                    },
                  ]),
                },
                [
                  re.$route.meta.planHeader
                    ? (o(),
                      i("nav", ll, [
                        O[6] ||
                          (O[6] = e(
                            "div",
                            {
                              style: {
                                display: "flex",
                                "align-items": "center",
                                gap: "0.75rem",
                                color: "var(--ocean-900)",
                              },
                            },
                            [
                              e("div", { class: "brand" }, [
                                e(
                                  "span",
                                  { class: "desktop-only" },
                                  "Plan your trip",
                                ),
                                e(
                                  "span",
                                  { class: "mobile-only" },
                                  "Plan trip",
                                ),
                              ]),
                            ],
                            -1,
                          )),
                        ke(
                          X,
                          { class: "link-close close-btn-style", to: "/" },
                          {
                            default: Re(() => [
                              ...(O[5] ||
                                (O[5] = [
                                  e("span", { class: "btn-text" }, "Close", -1),
                                  e("span", { class: "close-icon" }, "âœ•", -1),
                                ])),
                            ]),
                            _: 1,
                          },
                        ),
                      ]))
                    : (o(),
                      i("nav", rl, [
                        e("div", cl, [
                          e(
                            "span",
                            {
                              class: "nav-menu",
                              onClick: O[3] || (O[3] = (Y) => (g.value = !0)),
                              title: "Menu",
                            },
                            [
                              ...(O[7] ||
                                (O[7] = [
                                  e(
                                    "svg",
                                    {
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.2",
                                    },
                                    [
                                      e("line", {
                                        x1: "3",
                                        y1: "12",
                                        x2: "21",
                                        y2: "12",
                                      }),
                                      e("line", {
                                        x1: "3",
                                        y1: "6",
                                        x2: "21",
                                        y2: "6",
                                      }),
                                      e("line", {
                                        x1: "3",
                                        y1: "18",
                                        x2: "21",
                                        y2: "18",
                                      }),
                                    ],
                                    -1,
                                  ),
                                ])),
                            ],
                          ),
                          e(
                            "div",
                            {
                              class: "nav-lang-wrapper",
                              onClick: se,
                              title: "Select Language",
                            },
                            [
                              e("span", ul, [
                                (o(),
                                i("svg", dl, [
                                  ...(O[8] ||
                                    (O[8] = [
                                      e(
                                        "path",
                                        { d: "M1 1L5 5L9 1" },
                                        null,
                                        -1,
                                      ),
                                    ])),
                                ])),
                                Q(" " + l(j.value), 1),
                              ]),
                              I.value
                                ? (o(),
                                  i("div", vl, [
                                    (o(),
                                    i(
                                      G,
                                      null,
                                      ae(le, (Y) =>
                                        e(
                                          "div",
                                          {
                                            key: Y.code,
                                            class: "lang-option",
                                            onClick: pe((W) => Z(Y), ["stop"]),
                                          },
                                          l(Y.label),
                                          9,
                                          pl,
                                        ),
                                      ),
                                      64,
                                    )),
                                  ]))
                                : M("", !0),
                            ],
                          ),
                        ]),
                        e("div", ml, [
                          ke(
                            X,
                            { to: "/", class: "brand-link" },
                            {
                              default: Re(() => [
                                ...(O[9] ||
                                  (O[9] = [
                                    e(
                                      "span",
                                      { class: "brand-chip" },
                                      "KOMODO CRUISES",
                                      -1,
                                    ),
                                  ])),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        e("div", fl, [
                          e(
                            "button",
                            {
                              class: "nav-text-item nav-plan-item",
                              onClick: Ae,
                              style: { "white-space": "nowrap" },
                            },
                            [
                              re.$route.path === "/results"
                                ? (o(),
                                  i(
                                    G,
                                    { key: 0 },
                                    [Q(" FIND RESERVATION ")],
                                    64,
                                  ))
                                : (o(),
                                  i(
                                    G,
                                    { key: 1 },
                                    [
                                      O[10] ||
                                        (O[10] = e(
                                          "span",
                                          { class: "desktop-only" },
                                          "PLAN YOUR TRIP",
                                          -1,
                                        )),
                                      O[11] ||
                                        (O[11] = e(
                                          "span",
                                          { class: "mobile-only" },
                                          "PLAN TRIP",
                                          -1,
                                        )),
                                    ],
                                    64,
                                  )),
                            ],
                          ),
                          O[15] ||
                            (O[15] = e(
                              "span",
                              { class: "nav-text-item" },
                              "LOGIN",
                              -1,
                            )),
                          e(
                            "span",
                            {
                              class: "nav-search",
                              onClick: O[4] || (O[4] = (Y) => (h.value = !0)),
                              title: "Search",
                            },
                            [
                              ...(O[12] ||
                                (O[12] = [
                                  e(
                                    "svg",
                                    {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.2",
                                    },
                                    [
                                      e("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                      }),
                                      e("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65",
                                      }),
                                    ],
                                    -1,
                                  ),
                                ])),
                            ],
                          ),
                          re.$route.path !== "/" &&
                          re.$route.path !== "/results" &&
                          re.$route.path !== "/find-reservation"
                            ? (o(),
                              Ht(
                                X,
                                { key: 0, to: "/plan", class: "btn-book-pill" },
                                {
                                  default: Re(() => [
                                    O[14] || (O[14] = Q(" BOOK NOW ", -1)),
                                    (o(),
                                    i("svg", hl, [
                                      ...(O[13] ||
                                        (O[13] = [
                                          e(
                                            "path",
                                            {
                                              d: "M2 20h20M12 4v12m0 0l-4-4m4 4l4-4",
                                            },
                                            null,
                                            -1,
                                          ),
                                        ])),
                                    ])),
                                  ]),
                                  _: 1,
                                },
                              ))
                            : M("", !0),
                        ]),
                      ])),
                ],
                2,
              ),
              ke(ce),
              !re.$route.meta.planHeader &&
              re.$route.path !== "/" &&
              re.$route.path !== "/results"
                ? (o(),
                  i("footer", gl, [
                    e(
                      "div",
                      bl,
                      " Â© " + l(new Date().getFullYear()) + " Komodo Cruises ",
                      1,
                    ),
                  ]))
                : M("", !0),
            ])
          );
        }
      );
    },
  },
  kl = "" + new URL("Komodo-siX32_CS.mp4", import.meta.url).href,
  wl = "" + new URL("dest-komodo-BZfQdiBM.png", import.meta.url).href,
  _l = "" + new URL("dest-labuan-bajo-H07b2mBM.png", import.meta.url).href,
  Cl = "" + new URL("dest-togean-DN15mR21.png", import.meta.url).href,
  $l = { class: "destination-carousel" },
  Sl = { class: "carousel-container" },
  xl = ["src", "alt"],
  Dl = { class: "carousel-content" },
  Al = { class: "carousel-content-left" },
  Tl = { class: "carousel-location" },
  Il = { class: "carousel-title" },
  Nl = { class: "carousel-content-right" },
  Ml = { class: "carousel-description" },
  El = ["href"],
  Rl = { class: "carousel-dots" },
  Pl = ["onClick", "aria-label"],
  Pn = 101,
  On = 50,
  Ol = {
    __name: "DestinationCarousel",
    setup(x) {
      const b = [
          {
            location: "INDONESIA",
            title: "Komodo National Park",
            description:
              "Home to the legendary Komodo dragons and pristine marine life. Discover ancient wilderness and untouched natural beauty.",
            ctaText: "EXPLORE THE PARK",
            ctaLink: "#",
            image: wl,
          },
          {
            location: "INDONESIA",
            title: "Labuan Bajo",
            description:
              "Gateway to the Komodo Islands with stunning sunsets and vibrant culture. Experience the perfect blend of adventure and relaxation.",
            ctaText: "DISCOVER LABUAN BAJO",
            ctaLink: "#",
            image: _l,
          },
          {
            location: "INDONESIA",
            title: "Togean Islands",
            description:
              "Remote paradise with crystal-clear waters and untouched coral reefs. A hidden gem for those seeking true escape.",
            ctaText: "VISIT TOGEAN",
            ctaLink: "#",
            image: Cl,
          },
        ],
        f = b.length,
        C = D(() => {
          const R = [];
          for (let _ = 0; _ < Pn; _++)
            b.forEach((fe, me) => {
              R.push({ ...fe, virtualKey: `set${_}-${me}`, originalIndex: me });
            });
          return R;
        }),
        h = Math.floor(Pn / 2) * f,
        g = m(h),
        v = m(typeof window < "u" ? window.innerWidth : 1200),
        E = D(() => ((g.value % f) + f) % f),
        j = D(() => b[E.value]),
        I = D(() =>
          v.value <= 480
            ? v.value * 0.765
            : v.value <= 768
              ? v.value * 0.675
              : Math.min(v.value * 0.5, 750),
        ),
        le = D(() => (v.value <= 768 ? 10 : 20)),
        se = D(() => {
          const R = I.value + le.value,
            _ = v.value / 2,
            fe = I.value / 2;
          return g.value * R - _ + fe;
        });
      function Z(R) {
        return R === g.value;
      }
      function K(R) {
        return R === g.value - 1 || R === g.value + 1;
      }
      function q() {
        g.value++;
      }
      function Ae() {
        g.value--;
      }
      function Se(R) {
        const _ = E.value,
          fe = R - _;
        fe !== 0 && (g.value += fe);
      }
      function re() {
        v.value = window.innerWidth;
      }
      const O = m(0),
        X = m(0);
      function ce(R) {
        O.value = R.changedTouches[0].screenX;
      }
      function Y(R) {
        X.value = R.changedTouches[0].screenX;
      }
      function W() {
        const R = O.value - X.value,
          _ = R > On,
          fe = R < -On;
        (_ ? q() : fe && Ae(), (O.value = 0), (X.value = 0));
      }
      return (
        Xe(() => {
          window.addEventListener("resize", re);
        }),
        bt(() => {
          window.removeEventListener("resize", re);
        }),
        (R, _) => (
          o(),
          i("section", $l, [
            _[3] ||
              (_[3] = e(
                "h2",
                { class: "carousel-heading" },
                " Destinations. Where our passion meets your purpose. ",
                -1,
              )),
            _[4] ||
              (_[4] = e(
                "p",
                { class: "carousel-subheading" },
                [
                  e("a", { href: "#" }, [
                    Q("WHERE NEXT: VIEW ALL DESTINATIONS "),
                    e("span", null, "→"),
                  ]),
                ],
                -1,
              )),
            e("div", Sl, [
              e(
                "button",
                {
                  class: "carousel-nav carousel-nav-left",
                  onClick: Ae,
                  "aria-label": "Previous destination",
                },
                [
                  ...(_[0] ||
                    (_[0] = [
                      e("img", { src: Kn, alt: "Previous" }, null, -1),
                    ])),
                ],
              ),
              e(
                "div",
                {
                  class: "carousel-viewport",
                  onTouchstart: ce,
                  onTouchmove: Y,
                  onTouchend: W,
                },
                [
                  e(
                    "div",
                    {
                      class: "carousel-track",
                      style: Wt({ transform: `translateX(-${se.value}px)` }),
                    },
                    [
                      (o(!0),
                      i(
                        G,
                        null,
                        ae(
                          C.value,
                          (fe, me) => (
                            o(),
                            i(
                              "div",
                              {
                                key: fe.virtualKey,
                                class: B([
                                  "carousel-slide",
                                  {
                                    "active-slide": Z(me),
                                    "side-slide": K(me),
                                  },
                                ]),
                                style: Wt({
                                  width: `${I.value}px`,
                                  marginRight: `${le.value}px`,
                                }),
                              },
                              [
                                e(
                                  "img",
                                  {
                                    src: fe.image,
                                    alt: fe.title,
                                    class: "slide-image",
                                  },
                                  null,
                                  8,
                                  xl,
                                ),
                              ],
                              6,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    4,
                  ),
                ],
                32,
              ),
              e(
                "button",
                {
                  class: "carousel-nav carousel-nav-right",
                  onClick: q,
                  "aria-label": "Next destination",
                },
                [
                  ...(_[1] ||
                    (_[1] = [e("img", { src: Gs, alt: "Next" }, null, -1)])),
                ],
              ),
            ]),
            e("div", Dl, [
              e("div", Al, [
                e("span", Tl, l(j.value.location), 1),
                e("h3", Il, l(j.value.title), 1),
              ]),
              e("div", Nl, [
                e("p", Ml, l(j.value.description), 1),
                e(
                  "a",
                  { href: j.value.ctaLink, class: "carousel-cta" },
                  [
                    Q(l(j.value.ctaText) + " ", 1),
                    _[2] || (_[2] = e("span", null, "→", -1)),
                  ],
                  8,
                  El,
                ),
              ]),
            ]),
            e("div", Rl, [
              (o(),
              i(
                G,
                null,
                ae(b, (fe, me) =>
                  e(
                    "button",
                    {
                      key: me,
                      class: B(["carousel-dot", { active: me === E.value }]),
                      onClick: (Ne) => Se(me),
                      "aria-label": `Go to slide ${me + 1}`,
                    },
                    null,
                    10,
                    Pl,
                  ),
                ),
                64,
              )),
            ]),
          ])
        )
      );
    },
  },
  Ll = dt(Ol, [["__scopeId", "data-v-9920d604"]]),
  Bl = "" + new URL("ship-phinisi-voyager-D5TceIuH.png", import.meta.url).href,
  Fl = "" + new URL("ship-ocean-explorer-Yg5A13gl.png", import.meta.url).href,
  zl = "" + new URL("ship-coral-queen-DLsN9IeK.png", import.meta.url).href,
  Ul = "" + new URL("ship-sunset-cruiser-B6Je6v6A.png", import.meta.url).href,
  Gl = "" + new URL("ship-island-hopper-zr6jDabx.png", import.meta.url).href,
  Vl = "" + new URL("ship-reef-dancer-w9AhwkP8.png", import.meta.url).href,
  Kl = { class: "ships-carousel" },
  ql = { class: "ships-container" },
  Wl = { class: "ships-filters" },
  Hl = ["onClick"],
  Yl = { class: "ships-slider-wrapper" },
  Jl = { class: "ships-slider-container" },
  jl = ["disabled"],
  Xl = { class: "ship-image-wrapper" },
  Ql = ["src", "alt"],
  Zl = { class: "ship-info" },
  er = { class: "ship-location" },
  tr = { class: "ship-name" },
  sr = ["disabled"],
  Ln = 50,
  nr = {
    __name: "ShipsCarousel",
    setup(x) {
      const b = [
          { id: "all", name: "All" },
          { id: "komodo", name: "Komodo" },
          { id: "labuan-bajo", name: "Labuan Bajo" },
          { id: "togean", name: "Togean" },
        ],
        f = [
          {
            id: 1,
            name: "Phinisi Voyager",
            destination: "komodo",
            locationName: "Komodo National Park",
            image: Bl,
          },
          {
            id: 2,
            name: "Ocean Explorer",
            destination: "komodo",
            locationName: "Komodo National Park",
            image: Fl,
          },
          {
            id: 3,
            name: "Coral Queen",
            destination: "labuan-bajo",
            locationName: "Labuan Bajo",
            image: zl,
          },
          {
            id: 4,
            name: "Sunset Cruiser",
            destination: "labuan-bajo",
            locationName: "Labuan Bajo",
            image: Ul,
          },
          {
            id: 5,
            name: "Island Hopper",
            destination: "togean",
            locationName: "Togean Islands",
            image: Gl,
          },
          {
            id: 6,
            name: "Reef Dancer",
            destination: "togean",
            locationName: "Togean Islands",
            image: Vl,
          },
        ],
        C = m("all"),
        h = m(0),
        g = m(typeof window < "u" ? window.innerWidth : 1200),
        v = D(() =>
          C.value === "all" ? f : f.filter((W) => W.destination === C.value),
        ),
        E = D(() => {
          if (g.value <= 640) return g.value * 0.75;
          if (g.value <= 900) return 300;
          const W = Math.min(g.value - 80, 1400),
            R = 32 * 2;
          return (W - R) / 3;
        }),
        j = D(() => (g.value <= 640 ? 16 : 32)),
        I = D(() => h.value * (E.value + j.value)),
        le = D(() => (g.value <= 640 ? 1 : g.value <= 900 ? 2 : 3)),
        se = D(() => v.value.length > le.value),
        Z = D(() => Math.max(0, v.value.length - le.value));
      function K(W) {
        ((C.value = W), (h.value = 0));
      }
      function q() {
        h.value < Z.value && h.value++;
      }
      function Ae() {
        h.value > 0 && h.value--;
      }
      function Se() {
        g.value = window.innerWidth;
      }
      const re = m(0),
        O = m(0);
      function X(W) {
        re.value = W.changedTouches[0].screenX;
      }
      function ce(W) {
        O.value = W.changedTouches[0].screenX;
      }
      function Y() {
        const W = re.value - O.value,
          R = W > Ln,
          _ = W < -Ln;
        (R ? q() : _ && Ae(), (re.value = 0), (O.value = 0));
      }
      return (
        Xe(() => {
          window.addEventListener("resize", Se);
        }),
        bt(() => {
          window.removeEventListener("resize", Se);
        }),
        (W, R) => (
          o(),
          i("section", Kl, [
            e("div", ql, [
              R[0] ||
                (R[0] = e(
                  "div",
                  { class: "ships-header" },
                  [
                    e(
                      "h2",
                      { class: "ships-heading" },
                      "Explore our fleet collection",
                    ),
                    e(
                      "p",
                      { class: "ships-description" },
                      " Our fleet of luxury vessels are designed for intimate journeys through Indonesia's most spectacular waters. Each ship offers unique experiences, from traditional phinisi craftsmanship to modern expedition yachts, ensuring unforgettable adventures across the archipelago. ",
                    ),
                  ],
                  -1,
                )),
              e("div", Wl, [
                (o(),
                i(
                  G,
                  null,
                  ae(b, (_) =>
                    e(
                      "button",
                      {
                        key: _.id,
                        class: B(["filter-btn", { active: C.value === _.id }]),
                        onClick: (fe) => K(_.id),
                      },
                      l(_.name),
                      11,
                      Hl,
                    ),
                  ),
                  64,
                )),
              ]),
            ]),
            e("div", Yl, [
              e("div", Jl, [
                se.value
                  ? (o(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "ships-nav ships-nav-left",
                        onClick: Ae,
                        disabled: h.value === 0,
                        "aria-label": "Previous ships",
                      },
                      [
                        ...(R[1] ||
                          (R[1] = [
                            e(
                              "svg",
                              {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                              },
                              [e("polyline", { points: "15 18 9 12 15 6" })],
                              -1,
                            ),
                          ])),
                      ],
                      8,
                      jl,
                    ))
                  : M("", !0),
                e(
                  "div",
                  {
                    class: "ships-viewport",
                    onTouchstart: X,
                    onTouchmove: ce,
                    onTouchend: Y,
                  },
                  [
                    ke(
                      $t,
                      { name: "slide-up", mode: "out-in" },
                      {
                        default: Re(() => [
                          (o(),
                          i(
                            "div",
                            { class: "ships-track-wrapper", key: C.value },
                            [
                              e(
                                "div",
                                {
                                  class: "ships-track",
                                  style: Wt({
                                    transform: `translateX(-${I.value}px)`,
                                  }),
                                },
                                [
                                  (o(!0),
                                  i(
                                    G,
                                    null,
                                    ae(
                                      v.value,
                                      (_) => (
                                        o(),
                                        i(
                                          "div",
                                          {
                                            key: _.id,
                                            class: "ship-card",
                                            style: Wt({
                                              width: `${E.value}px`,
                                              marginRight: `${j.value}px`,
                                            }),
                                          },
                                          [
                                            e("div", Xl, [
                                              e(
                                                "img",
                                                {
                                                  src: _.image,
                                                  alt: _.name,
                                                  class: "ship-image",
                                                },
                                                null,
                                                8,
                                                Ql,
                                              ),
                                            ]),
                                            e("div", Zl, [
                                              e(
                                                "span",
                                                er,
                                                l(_.locationName),
                                                1,
                                              ),
                                              e("h3", tr, l(_.name), 1),
                                            ]),
                                          ],
                                          4,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ],
                                4,
                              ),
                            ],
                          )),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  32,
                ),
                se.value
                  ? (o(),
                    i(
                      "button",
                      {
                        key: 1,
                        class: "ships-nav ships-nav-right",
                        onClick: q,
                        disabled: h.value >= Z.value,
                        "aria-label": "Next ships",
                      },
                      [
                        ...(R[2] ||
                          (R[2] = [
                            e(
                              "svg",
                              {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                              },
                              [e("polyline", { points: "9 18 15 12 9 6" })],
                              -1,
                            ),
                          ])),
                      ],
                      8,
                      sr,
                    ))
                  : M("", !0),
              ]),
            ]),
          ])
        )
      );
    },
  },
  ar = dt(nr, [["__scopeId", "data-v-82c1bf13"]]),
  or = "" + new URL("activity-snorkeling-B8hwZN3L.png", import.meta.url).href,
  ir = "" + new URL("activity-relaxing-DX-9w-xF.png", import.meta.url).href,
  lr = "" + new URL("activity-hiking-chrel6lc.png", import.meta.url).href,
  rr = "" + new URL("activity-community-B7vG2Gb2.png", import.meta.url).href,
  cr = "" + new URL("activity-wildlife-CZn9_LiH.png", import.meta.url).href,
  ur = "" + new URL("activity-beach-oc9adSOS.png", import.meta.url).href,
  dr = "" + new URL("activity-stargazing-BA4hSomZ.png", import.meta.url).href,
  vr = { class: "activities-carousel", "data-nav-theme": "light" },
  pr = { class: "activities-slider" },
  mr = ["src", "alt"],
  fr = { class: "activity-info" },
  hr = { class: "activity-title" },
  gr = { class: "activity-desc" },
  br = { class: "activities-dots" },
  yr = ["onClick", "aria-label"],
  kr = ["disabled"],
  wr = ["disabled"],
  Bn = 50,
  _r = {
    __name: "ActivitiesCarousel",
    setup(x) {
      const b = [
          {
            title: "Snorkeling & Diving",
            description: "Explore vibrant coral reefs and marine life",
            image: or,
          },
          {
            title: "Relaxing & Sunbathing",
            description: "Unwind on pristine decks and secluded beaches",
            image: ir,
          },
          {
            title: "Hiking & Viewpoints",
            description: "Trek to breathtaking panoramic vistas",
            image: lr,
          },
          {
            title: "Local Community Immersion",
            description: "Connect with authentic Indonesian culture",
            image: rr,
          },
          {
            title: "Wildlife Spotting",
            description: "Encounter Komodo dragons in their habitat",
            image: cr,
          },
          {
            title: "Beach Exploration",
            description: "Discover hidden coves and pristine shores",
            image: ur,
          },
          {
            title: "Stargazing",
            description: "Marvel at the Milky Way from open waters",
            image: dr,
          },
        ],
        f = m(0),
        C = m(typeof window < "u" ? window.innerWidth : 1200),
        h = m(null),
        g = D(() => (C.value <= 768 ? C.value : C.value * 0.35)),
        v = D(() => (C.value <= 768 ? 0 : f.value * g.value)),
        E = D(() => (C.value <= 768 ? b.length - 1 : b.length - 2));
      function j() {
        f.value < E.value && f.value++;
      }
      function I() {
        f.value > 0 && f.value--;
      }
      function le(X) {
        f.value = Math.min(X, E.value);
      }
      function se(X) {
        if (C.value <= 768 && h.value) {
          const ce = C.value;
          h.value.scrollTo({ left: X * ce, behavior: "smooth" });
        } else le(X);
      }
      function Z() {
        C.value = window.innerWidth;
      }
      const K = m(0),
        q = m(0);
      function Ae(X) {
        C.value > 768 && (K.value = X.changedTouches[0].screenX);
      }
      function Se(X) {
        C.value > 768 && (q.value = X.changedTouches[0].screenX);
      }
      function re() {
        if (C.value > 768) {
          const X = K.value - q.value,
            ce = X > Bn,
            Y = X < -Bn;
          (ce ? j() : Y && I(), (K.value = 0), (q.value = 0));
        }
      }
      function O(X) {
        if (C.value <= 768) {
          const ce = X.target.scrollLeft,
            Y = C.value,
            W = Math.round(ce / Y);
          f.value = W;
        }
      }
      return (
        Xe(() => {
          window.addEventListener("resize", Z);
        }),
        bt(() => {
          window.removeEventListener("resize", Z);
        }),
        (X, ce) => (
          o(),
          i("section", vr, [
            ce[2] ||
              (ce[2] = e(
                "div",
                { class: "activities-content" },
                [
                  e(
                    "h2",
                    { class: "activities-heading" },
                    "What to experience?",
                  ),
                  e(
                    "p",
                    { class: "activities-description" },
                    " From underwater adventures to peaceful sunsets, our carefully curated activities invite you to discover the magic of Indonesia's hidden treasures. ",
                  ),
                  e(
                    "button",
                    { class: "activities-cta" },
                    "Explore activities",
                  ),
                ],
                -1,
              )),
            e("div", pr, [
              e(
                "div",
                {
                  class: "activities-track",
                  ref_key: "trackRef",
                  ref: h,
                  onScroll: O,
                  onTouchstart: Ae,
                  onTouchmove: Se,
                  onTouchend: re,
                  style: Wt({ transform: `translateX(-${v.value}px)` }),
                },
                [
                  (o(),
                  i(
                    G,
                    null,
                    ae(b, (Y, W) =>
                      e(
                        "div",
                        {
                          key: W,
                          class: B([
                            "activity-slide",
                            { active: W === f.value },
                          ]),
                        },
                        [
                          e(
                            "img",
                            {
                              src: Y.image,
                              alt: Y.title,
                              class: "activity-image",
                            },
                            null,
                            8,
                            mr,
                          ),
                          e("div", fr, [
                            e("h3", hr, l(Y.title), 1),
                            e("p", gr, l(Y.description), 1),
                          ]),
                        ],
                        2,
                      ),
                    ),
                    64,
                  )),
                ],
                36,
              ),
            ]),
            e("div", br, [
              (o(),
              i(
                G,
                null,
                ae(b, (Y, W) =>
                  e(
                    "button",
                    {
                      key: W,
                      class: B(["activity-dot", { active: W === f.value }]),
                      onClick: (R) => se(W),
                      "aria-label": `Go to ${b[W].title}`,
                    },
                    null,
                    10,
                    yr,
                  ),
                ),
                64,
              )),
            ]),
            ce[3] ||
              (ce[3] = e(
                "button",
                { class: "activities-cta mobile-only" },
                "Explore activities",
                -1,
              )),
            e(
              "button",
              {
                class: "activities-nav activities-nav-left",
                onClick: I,
                disabled: f.value === 0,
              },
              [
                ...(ce[0] ||
                  (ce[0] = [
                    e(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                      },
                      [e("polyline", { points: "15 18 9 12 15 6" })],
                      -1,
                    ),
                  ])),
              ],
              8,
              kr,
            ),
            e(
              "button",
              {
                class: "activities-nav activities-nav-right",
                onClick: j,
                disabled: f.value >= E.value,
              },
              [
                ...(ce[1] ||
                  (ce[1] = [
                    e(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                      },
                      [e("polyline", { points: "9 18 15 12 9 6" })],
                      -1,
                    ),
                  ])),
              ],
              8,
              wr,
            ),
          ])
        )
      );
    },
  },
  Cr = dt(_r, [["__scopeId", "data-v-9abd6fc3"]]),
  $r = "" + new URL("home-landscape-wPTuluZw.png", import.meta.url).href,
  Sr = "" + new URL("home-conservation-DjIfDkiI.png", import.meta.url).href,
  xr = "" + new URL("home-culture-DX4UewC_.png", import.meta.url).href,
  Dr = "" + new URL("home-legacy-Dkg62GSZ.png", import.meta.url).href,
  Ar = ["muted"],
  Tr = ["aria-label"],
  Ir = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  },
  Nr = {
    key: 1,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  },
  Mr = { class: "komodo-section" },
  Er = { class: "komodo-content" },
  Rr = ["src"],
  Pr = { class: "komodo-section section-alt" },
  Or = { class: "komodo-content reverse" },
  Lr = ["src"],
  Br = { class: "komodo-section" },
  Fr = { class: "komodo-content" },
  zr = ["src"],
  Ur = { class: "komodo-section section-alt" },
  Gr = { class: "komodo-content reverse" },
  Vr = ["src"],
  Kr = { class: "home-footer" },
  qr = { class: "home-footer-inner container" },
  Wr = { class: "hf-top" },
  Hr = { class: "hf-links" },
  Yr = { class: "hf-bottom" },
  Jr = { class: "hf-copyright" },
  jr = {
    __name: "Home",
    setup(x) {
      const b = Us(),
        f = m(!1),
        C = m(!0),
        h = m(null),
        g = m(null),
        v = m(null),
        E = m(null),
        j = m(null),
        I = m(null),
        le = m(null),
        se = m(null),
        Z = m(null),
        K = m(null);
      let q = null;
      function Ae() {
        [
          { container: v.value, img: E.value },
          { container: j.value, img: I.value },
          { container: le.value, img: se.value },
          { container: Z.value, img: K.value },
        ].forEach((_) => {
          if (!_.container || !_.img) return;
          const fe = _.container.getBoundingClientRect(),
            me = window.innerHeight;
          if (fe.top < me && fe.bottom > 0) {
            const Ne = me / 2 - (fe.top + fe.height / 2),
              Be = 0.15;
            _.img.style.transform = `translateY(${Ne * Be}px)`;
          }
        });
      }
      let Se = !1;
      function re() {
        Se ||
          (window.requestAnimationFrame(() => {
            (Ae(), (Se = !1));
          }),
          (Se = !0));
      }
      function O() {
        ((C.value = !C.value),
          !C.value && h.value && h.value.play().catch(() => {}));
      }
      function X(R) {
        R.forEach((_) => {
          !_.isIntersecting && !C.value && (C.value = !0);
        });
      }
      (Xe(() => {
        ((q = new IntersectionObserver(X, { threshold: 0.1 })),
          g.value && q.observe(g.value),
          window.addEventListener("scroll", re),
          Ae());
      }),
        bt(() => {
          (window.removeEventListener("scroll", re), q && q.disconnect());
        }));
      function ce() {
        f.value = !0;
      }
      function Y() {
        f.value = !1;
      }
      function W() {
        ((f.value = !1), b.push("/results"));
      }
      return (R, _) => (
        o(),
        i(
          G,
          null,
          [
            e(
              "section",
              { class: "hero-section", ref_key: "heroSectionRef", ref: g },
              [
                e(
                  "video",
                  {
                    class: "hero-bg-video",
                    autoplay: "",
                    muted: C.value,
                    loop: "",
                    playsinline: "",
                    ref_key: "heroVideo",
                    ref: h,
                  },
                  [
                    ...(_[0] ||
                      (_[0] = [
                        e("source", { src: kl, type: "video/mp4" }, null, -1),
                      ])),
                  ],
                  8,
                  Ar,
                ),
                _[3] ||
                  (_[3] = e(
                    "div",
                    null,
                    [
                      e("h1", { class: "hero-title" }, "Shores of Wonder"),
                      e(
                        "p",
                        { class: "hero-sub" },
                        " Embark on an exclusive voyage through the Komodo Islands. ",
                      ),
                    ],
                    -1,
                  )),
                e(
                  "button",
                  {
                    class: "hero-sound-control",
                    onClick: O,
                    "aria-label": C.value ? "Unmute" : "Mute",
                  },
                  [
                    C.value
                      ? (o(),
                        i("svg", Ir, [
                          ...(_[1] ||
                            (_[1] = [
                              e(
                                "path",
                                { d: "M11 5L6 9H2v6h4l5 4V5z" },
                                null,
                                -1,
                              ),
                              e(
                                "line",
                                { x1: "23", y1: "9", x2: "17", y2: "15" },
                                null,
                                -1,
                              ),
                              e(
                                "line",
                                { x1: "17", y1: "9", x2: "23", y2: "15" },
                                null,
                                -1,
                              ),
                            ])),
                        ]))
                      : (o(),
                        i("svg", Nr, [
                          ...(_[2] ||
                            (_[2] = [
                              e(
                                "path",
                                { d: "M11 5L6 9H2v6h4l5 4V5z" },
                                null,
                                -1,
                              ),
                              e(
                                "path",
                                {
                                  d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
                                },
                                null,
                                -1,
                              ),
                            ])),
                        ])),
                  ],
                  8,
                  Tr,
                ),
              ],
              512,
            ),
            ke(Ll),
            e("section", Mr, [
              e("div", Er, [
                _[5] ||
                  (_[5] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        " A golden thread throughout every Komodo Cruises experience is a deep reverence for the wild and its power to heal. ",
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Our phinisi vessels and curated voyages are designed to offer guests the freedom to reflect, inviting in wonder and wholeness. ",
                      ),
                    ],
                    -1,
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef1", ref: v },
                  [
                    e(
                      "img",
                      {
                        src: be($r),
                        alt: "Komodo landscape",
                        loading: "lazy",
                        ref_key: "imgRef1",
                        ref: E,
                      },
                      null,
                      8,
                      Rr,
                    ),
                    _[4] ||
                      (_[4] = e(
                        "button",
                        { class: "play-button", "aria-label": "Play video" },
                        [
                          e(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "white",
                            },
                            [e("polygon", { points: "5,3 19,12 5,21" })],
                          ),
                        ],
                        -1,
                      )),
                  ],
                  512,
                ),
              ]),
            ]),
            e("section", Pr, [
              e("div", Or, [
                _[6] ||
                  (_[6] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        " Dedicated to environmentally conscious hospitality and sustainable conservation since 2015. ",
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Join us in our love for the natural world, to be part of something meaningful and bigger than ourselves. ",
                      ),
                    ],
                    -1,
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef2", ref: j },
                  [
                    e(
                      "img",
                      {
                        src: be(Sr),
                        alt: "Conservation efforts",
                        loading: "lazy",
                        ref_key: "imgRef2",
                        ref: I,
                      },
                      null,
                      8,
                      Lr,
                    ),
                  ],
                  512,
                ),
              ]),
            ]),
            e("section", Br, [
              e("div", Fr, [
                _[7] ||
                  (_[7] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        "Telling Komodo's stories.",
                      ),
                      e(
                        "p",
                        { class: "komodo-subheading" },
                        ' Komodo Cruises means "Place of Dragons" in local lore. ',
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Our people share their passion for Indonesia's natural spaces and rich cultures, bringing you closer to both through stories and experiences. ",
                      ),
                    ],
                    -1,
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef3", ref: le },
                  [
                    e(
                      "img",
                      {
                        src: be(xr),
                        alt: "Komodo stories",
                        loading: "lazy",
                        ref_key: "imgRef3",
                        ref: se,
                      },
                      null,
                      8,
                      zr,
                    ),
                  ],
                  512,
                ),
              ]),
            ]),
            e("section", Ur, [
              e("div", Gr, [
                _[8] ||
                  (_[8] = Oe(
                    '<div class="komodo-text"><p class="komodo-subheading">A legacy unfolds</p><h2 class="komodo-heading"> It started in 2015 with a simple wooden boat and a deep passion for the ocean. </h2><p class="komodo-paragraph"> A legacy unfolded over decades, inspired by family values and a purpose to offer profound wildlife encounters. </p><div style="margin-top:1.5rem;"><button class="hero-cta" style="color:#333;border:1px solid rgba(0, 0, 0, 0.2);background:transparent;padding:0.8rem 2rem;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.05em;"> Our Story </button></div></div>',
                    1,
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef4", ref: Z },
                  [
                    e(
                      "img",
                      {
                        src: be(Dr),
                        alt: "Our story",
                        loading: "lazy",
                        ref_key: "imgRef4",
                        ref: K,
                      },
                      null,
                      8,
                      Vr,
                    ),
                  ],
                  512,
                ),
              ]),
            ]),
            ke(Cr),
            ke(ar),
            e("footer", Kr, [
              e("div", qr, [
                e("div", Wr, [
                  _[12] ||
                    (_[12] = e(
                      "div",
                      { class: "hf-brand" },
                      [
                        e("div", { class: "hf-logo" }, "KOMODO CRUISES"),
                        e(
                          "div",
                          { class: "hf-copy" },
                          "Rare journeys across the Komodo Islands.",
                        ),
                      ],
                      -1,
                    )),
                  e("nav", Hr, [
                    e(
                      "a",
                      { href: "#", onClick: pe(ce, ["prevent"]) },
                      "Plan your trip",
                    ),
                    _[9] || (_[9] = e("a", { href: "#" }, "Experiences", -1)),
                    _[10] || (_[10] = e("a", { href: "#" }, "Our story", -1)),
                    _[11] || (_[11] = e("a", { href: "#" }, "Contact", -1)),
                  ]),
                  _[13] ||
                    (_[13] = Oe(
                      '<div class="hf-contact"><div class="hf-contact-title">Contact Us</div><div class="hf-contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+6285282296450">+62 852-8229-6450</a></div><div class="hf-contact-address"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran, Jakarta Selatan 12780</span></div></div>',
                      1,
                    )),
                ]),
                e("div", Yr, [
                  e(
                    "div",
                    Jr,
                    " © " +
                      l(new Date().getFullYear()) +
                      " Komodo Cruises | PT CANARD MONEY INDONESIA ",
                    1,
                  ),
                  _[14] ||
                    (_[14] = e(
                      "div",
                      { class: "hf-disclaimer" },
                      " All voyages subject to weather and park regulations. ",
                      -1,
                    )),
                ]),
              ]),
            ]),
            ke(
              Vs,
              { isOpen: f.value, onClose: Y, onNavigateToResults: W },
              null,
              8,
              ["isOpen"],
            ),
          ],
          64,
        )
      );
    },
  },
  Xr = "https://uo044o8swkcgo4s4cgockc08.49.13.148.202.sslip.io";
async function Qr(x) {
  try {
    const b = await fetch(`${Xr}/api/create-invoice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: x.amount,
          payerEmail: x.payerEmail,
          description: x.description,
          customerName: x.customerName,
          customerPhone: x.customerPhone,
          items: x.items,
          successRedirectUrl:
            x.successRedirectUrl || `${window.location.origin}/payment-success`,
          failureRedirectUrl:
            x.failureRedirectUrl || `${window.location.origin}/payment-failed`,
        }),
      }),
      f = await b.json();
    if (!b.ok) throw new Error(f.message || "Failed to create invoice");
    return f;
  } catch (b) {
    throw (console.error("Error creating Xendit invoice:", b), b);
  }
}
function Zr(x) {
  if (x) window.location.href = x;
  else throw new Error("Invoice URL is required");
}
function Ct(x) {
  if (!x) return 0;
  if (typeof x == "number") return x;
  const b = String(x)
    .replace(/[^\d.,]/g, "")
    .replace(/\./g, "")
    .replace(/,/g, "");
  return parseInt(b) || 0;
}
const ec = { class: "results-wrap" },
  tc = { key: 0, class: "simple-loader" },
  sc = { key: 1, class: "results-container" },
  nc = { class: "mobile-filter-summary" },
  ac = { class: "filter-summary-content" },
  oc = { class: "filter-summary-row" },
  ic = { class: "filter-summary-item" },
  lc = { class: "filter-summary-item" },
  rc = { class: "results-layout" },
  cc = { class: "results-main" },
  uc = { key: 0, class: "error-state" },
  dc = { class: "error-message" },
  vc = { key: 1 },
  pc = { class: "results-intro" },
  mc = { key: 0, class: "success-message" },
  fc = { key: 1, class: "no-availability" },
  hc = { key: 0, class: "results-controls" },
  gc = { class: "results-controls-left" },
  bc = ["aria-expanded"],
  yc = ["src"],
  kc = ["onClick"],
  wc = { class: "results-controls-right" },
  _c = { class: "results-count" },
  Cc = { class: "ship-selection-container" },
  $c = { class: "ship-selection-header" },
  Sc = { class: "ship-selection-subtitle" },
  xc = { class: "ship-selection-grid" },
  Dc = ["onClick"],
  Ac = { class: "ship-img-col" },
  Tc = ["src", "alt"],
  Ic = { class: "ship-card-content" },
  Nc = { class: "ship-card-name" },
  Mc = { key: 0, class: "ship-desc-sm" },
  Ec = { key: 1, class: "ship-card-info" },
  Rc = { class: "ship-card-capacity" },
  Pc = { key: 2, class: "ship-card-info" },
  Oc = { class: "cabin-results-section" },
  Lc = { key: 0, class: "back-to-ships-bar" },
  Bc = { class: "viewing-ship-label" },
  Fc = { key: 1, class: "no-availability" },
  zc = { key: 2, class: "lodge-results" },
  Uc = {
    class: "cabin-image",
    style: { position: "relative", overflow: "hidden" },
  },
  Gc = ["src", "alt", "onError"],
  Vc = ["onClick"],
  Kc = ["onClick"],
  qc = { class: "cabin-content" },
  Wc = { class: "cabin-title-group" },
  Hc = { class: "cabin-name" },
  Yc = { class: "cabin-badge active" },
  Jc = { class: "cabin-specs" },
  jc = { class: "cabin-overview" },
  Xc = { class: "overview-list" },
  Qc = { key: 0, class: "overview-list" },
  Zc = ["onClick"],
  eu = { key: 0, class: "trips-section-compact" },
  tu = { class: "trip-date-row" },
  su = { class: "trip-date-text" },
  nu = { class: "trip-availability-badge" },
  au = { key: 0, class: "more-dates-dropdown" },
  ou = ["onClick"],
  iu = { class: "trip-alt-info" },
  lu = { class: "trip-alt-date" },
  ru = { class: "trip-alt-rooms" },
  cu = { key: 0, class: "trip-reserved-label" },
  uu = { key: 1, class: "trip-select-action" },
  du = ["onClick"],
  vu = { class: "cabin-info-section" },
  pu = { class: "cabin-info-left" },
  mu = { class: "price-main" },
  fu = { class: "price-value" },
  hu = { class: "cabin-info-right cabin-buttons-row" },
  gu = ["onClick"],
  bu = ["onClick"],
  yu = { key: 3, class: "pagination" },
  ku = ["disabled"],
  wu = { class: "pagination-pages" },
  _u = ["onClick"],
  Cu = ["disabled"],
  $u = { key: 4, class: "no-results" },
  Su = { class: "sidebar-section-wrapper" },
  xu = { class: "sidebar-section check-availability-section" },
  Du = { key: 0, class: "sidebar-skeleton" },
  Au = ["aria-expanded"],
  Tu = { class: "caret" },
  Iu = ["src"],
  Nu = ["onClick"],
  Mu = { class: "list-text result-list-text" },
  Eu = ["value"],
  Ru = ["aria-expanded"],
  Pu = { class: "caret" },
  Ou = ["src"],
  Lu = { class: "dropdown-group-title" },
  Bu = { key: 0, class: "muted" },
  Fu = ["onClick"],
  zu = { class: "list-text result-list-text" },
  Uu = ["value"],
  Gu = { key: 0, class: "muted" },
  Vu = ["aria-expanded"],
  Ku = { key: 0 },
  qu = { key: 1 },
  Wu = { class: "caret" },
  Hu = ["src"],
  Yu = { class: "sidebar-pill-container" },
  Ju = { key: 0, class: "sidebar-flexible-content" },
  ju = { class: "sidebar-counter-row" },
  Xu = { class: "ctrls" },
  Qu = ["disabled"],
  Zu = { class: "val" },
  ed = { key: 1, class: "cabins-container-sidebar" },
  td = { class: "cabin-header-sidebar-static" },
  sd = { class: "cabin-header-left-sidebar" },
  nd = { class: "cabin-title-sidebar" },
  ad = { class: "cabin-summary-sidebar" },
  od = { class: "cabin-header-right-sidebar" },
  id = ["onClick"],
  ld = ["onClick"],
  rd = { key: 0, class: "cabin-body-sidebar" },
  cd = { class: "counter-row-sidebar" },
  ud = { class: "counter-ctrls-sidebar" },
  dd = ["disabled", "onClick"],
  vd = { class: "count-sidebar" },
  pd = ["disabled", "onClick"],
  md = { class: "counter-row-sidebar" },
  fd = { class: "counter-ctrls-sidebar" },
  hd = ["disabled", "onClick"],
  gd = { class: "count-sidebar" },
  bd = ["disabled", "onClick"],
  yd = ["aria-expanded"],
  kd = { class: "caret" },
  wd = ["src"],
  _d = { class: "custom-calendar" },
  Cd = { class: "calendar-header" },
  $d = { class: "calendar-title" },
  Sd = { class: "calendar-grid" },
  xd = { class: "calendar-days" },
  Dd = ["disabled", "onClick"],
  Ad = { class: "trip-duration-summary-sidebar" },
  Td = { class: "trip-duration-range-content sidebar-duration" },
  Id = { class: "counter-row duration-counter-row" },
  Nd = { class: "counter-ctrls" },
  Md = ["disabled"],
  Ed = { class: "count-display" },
  Rd = ["disabled"],
  Pd = { class: "counter-row duration-counter-row" },
  Od = { class: "counter-ctrls" },
  Ld = ["disabled"],
  Bd = { class: "count-display" },
  Fd = ["disabled"],
  zd = { class: "duration-reset-row" },
  Ud = ["disabled"],
  Gd = { key: 0, class: "sidebar-track" },
  Vd = { class: "itinerary-sticky" },
  Kd = { key: 0, class: "itinerary-empty" },
  qd = { key: 1, class: "itinerary-list" },
  Wd = { class: "itinerary-header" },
  Hd = { class: "itinerary-cabin-name" },
  Yd = ["onClick"],
  Jd = { class: "itinerary-info-row" },
  jd = { class: "itinerary-info-text" },
  Xd = { class: "itinerary-info-row" },
  Qd = { class: "itinerary-info-text" },
  Zd = { class: "itinerary-info-row guest-row-editable" },
  ev = { class: "guest-info-wrap" },
  tv = { class: "itinerary-info-text" },
  sv = ["onClick"],
  nv = { class: "itinerary-price-row" },
  av = { class: "itinerary-price-left" },
  ov = { class: "itinerary-price-label" },
  iv = { class: "itinerary-price-value" },
  lv = { key: 2, class: "itinerary-total" },
  rv = { class: "itinerary-total-row" },
  cv = { class: "itinerary-total-right" },
  uv = { class: "itinerary-total-amount" },
  dv = { key: 3, class: "itinerary-total-note" },
  vv = { class: "modal-body modal-body-redesigned" },
  pv = { class: "modal-info-section modal-info-left" },
  mv = { class: "modal-cabin-header" },
  fv = { class: "modal-cabin-name" },
  hv = { class: "modal-cabin-specs" },
  gv = { class: "modal-cabin-quote" },
  bv = { class: "modal-overview-section" },
  yv = { class: "modal-overview-grid" },
  kv = { class: "modal-overview-list" },
  wv = { key: 0, class: "modal-overview-list" },
  _v = { class: "modal-amenities-section" },
  Cv = { class: "modal-amenities-grid" },
  $v = { class: "modal-amenities-list" },
  Sv = { key: 0, class: "modal-amenities-list" },
  xv = { class: "modal-image-section modal-image-right" },
  Dv = ["src", "alt"],
  Av = { class: "modal-image-indicator" },
  Tv = { class: "indicator-count" },
  Iv = { class: "modal-bottom-section" },
  Nv = { class: "modal-rate-info" },
  Mv = { class: "modal-price-display" },
  Ev = { class: "price-amount" },
  Rv = { key: 0, class: "price-label" },
  Pv = { class: "guest-modal-body" },
  Ov = { class: "guest-counter-section" },
  Lv = { class: "guest-counter-row" },
  Bv = { class: "guest-counter-controls" },
  Fv = ["disabled"],
  zv = { class: "guest-counter-value" },
  Uv = ["disabled"],
  Gv = { class: "guest-available-note" },
  Vv = { key: 0 },
  Kv = { class: "guest-modal-actions" },
  qv = { key: 4, class: "enquiry-modal-overlay" },
  Wv = { class: "enquiry-modal-content" },
  Hv = { class: "enquiry-modal-body" },
  Yv = { class: "enquiry-form-section" },
  Jv = { class: "form-row" },
  jv = { class: "form-group form-group-small" },
  Xv = { class: "form-group" },
  Qv = { class: "form-group" },
  Zv = { class: "form-row" },
  ep = { class: "form-group" },
  tp = { class: "phone-input" },
  sp = { class: "form-group" },
  np = { class: "form-row" },
  ap = { class: "form-group" },
  op = { class: "form-group" },
  ip = { class: "form-group" },
  lp = { class: "form-group" },
  rp = { class: "form-checkboxes" },
  cp = { class: "checkbox-label" },
  up = { class: "checkbox-label" },
  dp = ["disabled"],
  vp = { class: "enquiry-summary-section" },
  pp = { class: "summary-items" },
  mp = { class: "summary-item-header" },
  fp = { class: "summary-lodge-name" },
  hp = { class: "summary-item-details" },
  gp = { class: "summary-cabin" },
  bp = { class: "summary-guests" },
  yp = { class: "summary-dates" },
  kp = { key: 0, class: "summary-pricing" },
  wp = { class: "pricing-row" },
  _p = { class: "pricing-value" },
  Cp = { class: "pricing-row" },
  $p = { class: "pricing-label" },
  Sp = { class: "pricing-value" },
  xp = { key: 0, class: "enquiry-total-section" },
  Dp = { class: "enquiry-total" },
  Ap = { class: "enquiry-total-row" },
  Tp = { class: "enquiry-total-amount" },
  Ip = { key: 1, class: "enquiry-pricing-note" },
  Np = { class: "home-footer" },
  Mp = { class: "home-footer-inner container" },
  Ep = { class: "hf-top" },
  Rp = { class: "hf-links" },
  Pp = { class: "hf-bottom" },
  Op = { class: "hf-copyright" },
  Lp = { class: "mobile-filter-modal" },
  Bp = { class: "mobile-filter-modal-header" },
  Fp = { class: "mobile-filter-modal-body" },
  zp = { class: "modal-field-group" },
  Up = ["src"],
  Gp = { key: 0, class: "modal-field-dropdown" },
  Vp = ["onClick"],
  Kp = { class: "list-text result-list-text" },
  qp = ["value"],
  Wp = { class: "modal-field-group" },
  Hp = ["src"],
  Yp = { key: 0, class: "modal-field-dropdown" },
  Jp = { class: "dropdown-group-title" },
  jp = { key: 0, class: "muted" },
  Xp = ["onClick"],
  Qp = { class: "list-text result-list-text" },
  Zp = ["value"],
  e1 = { class: "modal-field-group" },
  t1 = { key: 0 },
  s1 = { key: 1 },
  n1 = ["src"],
  a1 = {
    key: 0,
    class: "modal-field-dropdown cabin-panel",
    style: { padding: "1rem" },
  },
  o1 = { class: "sidebar-pill-container" },
  i1 = { key: 0, class: "sidebar-flexible-content" },
  l1 = { class: "sidebar-counter-row" },
  r1 = { class: "ctrls" },
  c1 = ["disabled"],
  u1 = { class: "val" },
  d1 = { key: 1, class: "cabins-container-sidebar" },
  v1 = { class: "cabin-header-sidebar-static" },
  p1 = { class: "cabin-header-left-sidebar" },
  m1 = { class: "cabin-title-sidebar" },
  f1 = { class: "cabin-summary-sidebar" },
  h1 = { class: "cabin-header-right-sidebar" },
  g1 = ["onClick"],
  b1 = ["onClick"],
  y1 = { key: 0, class: "cabin-body-sidebar" },
  k1 = { class: "counter-row-sidebar" },
  w1 = { class: "counter-ctrls-sidebar" },
  _1 = ["disabled", "onClick"],
  C1 = { class: "count-sidebar" },
  $1 = ["disabled", "onClick"],
  S1 = { class: "counter-row-sidebar" },
  x1 = { class: "counter-ctrls-sidebar" },
  D1 = ["disabled", "onClick"],
  A1 = { class: "count-sidebar" },
  T1 = ["disabled", "onClick"],
  I1 = { class: "modal-field-group" },
  N1 = ["src"],
  M1 = { key: 0, class: "modal-field-dropdown dates-panel" },
  E1 = {
    class: "custom-calendar",
    style: { "max-width": "100%", "box-shadow": "none", border: "none" },
  },
  R1 = { class: "calendar-header" },
  P1 = { class: "calendar-title" },
  O1 = { class: "calendar-grid" },
  L1 = { class: "calendar-days" },
  B1 = ["disabled", "onClick"],
  F1 = { class: "modal-field-group" },
  z1 = { class: "trip-duration-range-content mobile-duration" },
  U1 = { class: "counter-row duration-counter-row" },
  G1 = { class: "counter-ctrls" },
  V1 = ["disabled"],
  K1 = { class: "count-display" },
  q1 = ["disabled"],
  W1 = { class: "counter-row duration-counter-row" },
  H1 = { class: "counter-ctrls" },
  Y1 = ["disabled"],
  J1 = { class: "count-display" },
  j1 = ["disabled"],
  X1 = { class: "duration-reset-row" },
  Q1 = ["disabled"],
  Ot = "Rp",
  ms = "Nusa Tenggara Timur",
  je = 30,
  Z1 = 4,
  Kt = 4,
  em = {
    __name: "Results",
    setup(x) {
      const b = m({}),
        f = m({}),
        C = m(!1),
        h = m(!1),
        g = m(!1),
        v = m(!1),
        E = m(!1),
        j = m(!1);
      at(C, (s) => {
        s
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "");
      });
      function I() {
        (ne.value || (ne.value = {}),
          (ne.value.destinations = [...Ee.value]),
          (ne.value.ships = [...$.value]),
          (ne.value.dateFrom = y.value),
          (ne.value.dateTo = H.value),
          (ne.value.totalGuests = Fe.value),
          (nt.value = 1),
          ns());
      }
      function le() {
        ((h.value = !1),
          (g.value = !1),
          (v.value = !1),
          (E.value = !1),
          (j.value = !1),
          (C.value = !1),
          I());
      }
      function se(s, t) {
        if (!s) return "Select dates";
        const a = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          r = new Date(s),
          c = a[r.getMonth()],
          n = r.getDate();
        if (!t) return `${c} ${n}`;
        const d = new Date(t),
          p = a[d.getMonth()],
          N = d.getDate(),
          w = d.getFullYear();
        return c === p && r.getFullYear() === w
          ? `${c} ${n} - ${p} ${N} ${w}`
          : `${c} ${n} - ${p} ${N} ${w}`;
      }
      function Z(s) {
        if (!s || typeof s == "string") return [];
        const t = [];
        (s.image_main && t.push(s.image_main),
          Array.isArray(s.images) && t.push(...s.images));
        for (let a = 1; a <= 10; a++) {
          const r = `image_${a}`;
          s[r] && t.push(s[r]);
        }
        return t.filter((a) => !!a && String(a).trim().length > 0).map(_n);
      }
      function K(s) {
        const t = Z(s.detail) || [];
        return t.length ? t : Z(s.raw) || [];
      }
      function q(s) {
        return b.value[s] || 0;
      }
      function Ae(s) {
        return f.value[s] || "right";
      }
      function Se(s, t, a, r) {
        a > 0
          ? ((b.value[s] = (t + a) % a), (f.value[s] = r))
          : ((b.value[s] = 0), (f.value[s] = "right"));
      }
      function re(s) {
        const t = es.value.find((r) => r.key === s);
        if (!t) return;
        const a = K(t);
        Se(s, q(s) - 1, a.length, "left");
      }
      function O(s) {
        const t = es.value.find((r) => r.key === s);
        if (!t) return;
        const a = K(t);
        Se(s, q(s) + 1, a.length, "right");
      }
      const X = m(0);
      function ce() {
        if (!oe.value) return [];
        const s = K(oe.value);
        return s.length ? s : [oe.value.image || "/src/images/cabin.jpg"];
      }
      function Y() {
        const s = ce(),
          t = X.value % (s.length || 1);
        return s[t] || "/src/images/cabin.jpg";
      }
      function W() {
        const t = ce().length || 1;
        X.value = (X.value - 1 + t) % t;
      }
      function R() {
        const t = ce().length || 1;
        X.value = (X.value + 1) % t;
      }
      const _ = (s) => {
        if (s == null) return "Price on request";
        const t =
          typeof s == "string" ? parseFloat(s.replace(/[^0-9.-]+/g, "")) : s;
        return isNaN(t)
          ? s
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
              .format(t)
              .replace("IDR", "Rp");
      };
      Xe(() => {
        (window.addEventListener("resize", () => {
          window.innerWidth >= 640 &&
            typeof C < "u" &&
            C.value &&
            (C.value = !1);
        }),
          Wa(() => {
            try {
              (console.log("DEBUG selectedCabinDetail", zt.value),
                console.log("DEBUG selectedCabinPriceText", ws.value));
            } catch (s) {
              console.warn("DEBUG watchEffect error:", s);
            }
          }));
      });
      const fe = Us(),
        me = m(!0),
        Ne = m(""),
        Be = m(!1),
        ne = m(null),
        He = m({}),
        ot = m([]),
        ue = m(null),
        k = m(new Map()),
        Me = m(new Map()),
        P = m([]),
        Te = m(null),
        Ye = m(null),
        Pe = m(!1),
        Qe = m(!1),
        Le = m(!1),
        oe = m(null),
        St = m(1),
        $e = m(2),
        tt = m(!1),
        yt = m(""),
        Je = m(null),
        kt = m({}),
        Ze = m({}),
        et = m("recommended"),
        it = m(!1),
        xt = [
          { value: "recommended", label: "Recommended" },
          { value: "price_low", label: "Lowest Price" },
          { value: "price_high", label: "Highest Price" },
        ],
        Yt = ["Komodo National Park", "Labuan Bajo"];
      function we(s) {
        if (!s) return "";
        const t = s.match(/[-\w]{25,}/);
        return t ? `https://lh3.googleusercontent.com/d/${t[0]}` : s;
      }
      const Lt = {
        "SEMESTA VOYAGES": we(
          "https://drive.google.com/file/d/1semesta_placeholder",
        ),
        "AKASSA CRUISE": we(
          "https://drive.google.com/file/d/1akassa_placeholder",
        ),
        "DERYA LIVEABOARD": we(
          "https://drive.google.com/file/d/1derya_placeholder",
        ),
        "GIONA LIVEABOARD": we(
          "https://drive.google.com/file/d/1giona_placeholder",
        ),
        "DURYA LIVEABOARD": we(""),
        "BARAKATI LIVEABOARD": we(""),
        "ELBARIK CRUISE": we(""),
        "ANGELICA LIVEBOARD": we(""),
        "NAVILA LIVEBOARD": we(""),
        KAMBIOLA: we(""),
        "LAMBORAJO 2": we(""),
        YUMANA: we(""),
        SBVANREL: we(""),
        "RAFFLES CRUISE": we(""),
        "VINCA VOYAGE": we(""),
        "AMORE BOAT": we(""),
        "KUMAMBA 02": we(""),
        "MAREE GALLERY": we(""),
        "SORA GALLERY": we(""),
        TARA: we(""),
      };
      function Dt(s) {
        if (!s) return "";
        const t = At(s);
        if (t && t.mainImage) return t.mainImage;
        const a = s.toUpperCase().trim();
        if (Lt[a]) return Lt[a];
        for (const [r, c] of Object.entries(Lt)) {
          const n = r.toUpperCase().trim();
          if (n.includes(a) || a.includes(n)) return c;
        }
        return "";
      }
      function At(s) {
        if (!s) return null;
        const t = s.toUpperCase().trim(),
          a = t
            .replace(/S$/i, "")
            .replace(/LIVEABOARD/i, "LIVEBOARD")
            .replace(/LIVEBOARD/i, "LIVEABOARD");
        if (Me.value.has(t)) return Me.value.get(t);
        for (const [r, c] of Me.value.entries()) {
          const n = r
            .replace(/S$/i, "")
            .replace(/LIVEABOARD/i, "LIVEBOARD")
            .replace(/LIVEBOARD/i, "LIVEABOARD");
          if (
            r.includes(t) ||
            t.includes(r) ||
            n.includes(a) ||
            a.includes(n) ||
            r.split(" ")[0] === t.split(" ")[0]
          )
            return c;
        }
        return null;
      }
      const Bt = [],
        lt = m([]),
        Tt = m(!1),
        Ee = m([]),
        $ = m([]),
        u = m([]),
        y = m(""),
        H = m(""),
        A = m(1),
        V = m(30),
        ee = m([{ id: 1, adults: 2, children: 0, expanded: !0 }]),
        he = m(!0),
        xe = m(!1),
        _e = m(2),
        Fe = D(() =>
          he.value
            ? _e.value
            : ee.value.reduce((s, t) => s + t.adults + t.children, 0),
        ),
        Ft = D(() => ee.value.length < Z1),
        It = D(() => {
          if (!y.value || !H.value) return je;
          const s = new Date(y.value + "T00:00:00"),
            a = new Date(H.value + "T00:00:00").getTime() - s.getTime(),
            r = Math.ceil(a / (1e3 * 60 * 60 * 24)) + 1;
          return Math.min(r, je);
        });
      D(() => {
        const s = It.value,
          t = [];
        for (let a = 1; a <= s; a++) t.push(a);
        return t;
      });
      const Jt = D(() => {
          const s = A.value,
            t = V.value;
          return s === 1 && t === je
            ? "Any duration"
            : s === t
              ? `${s} ${s === 1 ? "day" : "days"}`
              : `${s} - ${t} days`;
        }),
        ze = m(!1),
        Ue = m(!1),
        Ge = m(!1),
        Ve = m(!1),
        wt = m(!1),
        gs = m(!1),
        bs = m(!1),
        ys = m(!1),
        ks = m(!1);
      m(!1);
      const Ks = m(null),
        qs = m(null),
        Ws = m(null),
        Hs = m(null),
        Ys = m(null),
        qn = m(null),
        vt = m(new Date().getMonth()),
        _t = m(new Date().getFullYear());
      function Wn() {
        ((ze.value = !1),
          (Ue.value = !1),
          (Ge.value = !1),
          (Ve.value = !1),
          (wt.value = !1));
      }
      function jt(s) {
        s === "regions"
          ? ((ze.value = !ze.value),
            (Ue.value = Ge.value = Ve.value = wt.value = !1))
          : s === "ships"
            ? ((Ue.value = !Ue.value),
              (ze.value = Ge.value = Ve.value = wt.value = !1))
            : s === "guests"
              ? ((Ge.value = !Ge.value),
                (ze.value = Ue.value = Ve.value = wt.value = !1))
              : s === "dates"
                ? ((Ve.value = !Ve.value),
                  (ze.value = Ue.value = Ge.value = wt.value = !1))
                : s === "duration" &&
                  ((wt.value = !wt.value),
                  (ze.value = Ue.value = Ge.value = Ve.value = !1));
      }
      function Js(s) {
        const t = Ee.value.indexOf(s);
        t >= 0 ? Ee.value.splice(t, 1) : Ee.value.push(s);
      }
      function js(s) {
        const t = $.value.indexOf(s);
        t >= 0 ? $.value.splice(t, 1) : $.value.push(s);
      }
      function Xs() {
        Ft.value &&
          ee.value.push({
            id: Date.now(),
            adults: 2,
            children: 0,
            expanded: !0,
          });
      }
      function Qs(s) {
        ee.value.length > 1 && ee.value.splice(s, 1);
      }
      function Zs(s) {
        ee.value[s].expanded = !ee.value[s].expanded;
      }
      function Xt(s, t) {
        const a = ee.value[s];
        a.adults + a.children < Kt && a[t]++;
      }
      function Qt(s, t) {
        const a = ee.value[s];
        (t === "adults" && a.adults > 1 && a.adults--,
          t === "children" && a.children > 0 && a.children--);
      }
      function en() {
        A.value > 1 && A.value--;
      }
      function tn() {
        A.value < V.value && A.value++;
      }
      function sn() {
        V.value > A.value && V.value--;
      }
      function nn() {
        V.value < je && V.value++;
      }
      function an() {
        ((A.value = 1), (V.value = je));
      }
      D(() => Ba());
      const on = D(
          () =>
            `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][vt.value]} ${_t.value}`,
        ),
        ln = D(() => {
          const s = new Date(_t.value, vt.value, 1),
            t = new Date(_t.value, vt.value + 1, 0),
            a = new Date(s),
            r = new Date();
          a.setDate(a.getDate() - a.getDay());
          const c = [],
            n = new Date(t);
          n.setDate(n.getDate() + (6 - t.getDay()));
          for (let d = new Date(a); d <= n; d.setDate(d.getDate() + 1)) {
            d.getDay();
            const p = d.getMonth() === vt.value,
              N = new Date(d);
            N.setHours(0, 0, 0, 0);
            const w = new Date(r);
            w.setHours(0, 0, 0, 0);
            const T = N < w,
              S = p && !T,
              z = us(d);
            let U = !1,
              L = !1,
              J = !1;
            if (y.value && H.value && p) {
              const de = new Date(y.value + "T00:00:00"),
                ie = new Date(H.value + "T00:00:00");
              N >= de &&
                N <= ie &&
                ((U = !0),
                N.getTime() === de.getTime() && (L = !0),
                N.getTime() === ie.getTime() && (J = !0));
            }
            c.push({
              key: d.getTime(),
              date: d.getDate(),
              fullDate: z,
              isCurrentMonth: p,
              isSelectable: S,
              isPast: T,
              isSelected: y.value === z || H.value === z,
              isInRange: U,
              isRangeStart: L,
              isRangeEnd: J,
            });
          }
          return c;
        });
      function rn(s) {
        let t = vt.value + s,
          a = _t.value;
        (t > 11 && ((t = 0), (a += 1)),
          t < 0 && ((t = 11), (a -= 1)),
          (vt.value = t),
          (_t.value = a));
      }
      function cn() {
        rn(1);
      }
      function un() {
        rn(-1);
      }
      function dn(s) {
        if (s.isSelectable)
          if (!y.value || (y.value && H.value))
            ((y.value = s.fullDate), (H.value = ""));
          else {
            const t = new Date(y.value + "T00:00:00");
            new Date(s.fullDate + "T00:00:00") < t
              ? ((H.value = y.value), (y.value = s.fullDate))
              : (H.value = s.fullDate);
          }
      }
      const vn = D(() => {
        if (Ee.value.length) return Ee.value[0];
        const s = ne.value;
        return Array.isArray(s == null ? void 0 : s.destinations) &&
          s.destinations.length
          ? s.destinations[0]
          : ms;
      });
      D(() => {
        var r, c, n;
        const s = ne.value;
        if (!s) return [];
        const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
          a = [];
        for (const d of t) {
          const p = He.value[d] || [];
          let N = 0,
            w = 0;
          for (const ie of p) {
            const F = (
              ((r = ie == null ? void 0 : ie.operators) == null
                ? void 0
                : r.flatMap((ve) => ve.cabins || [])) || []
            ).reduce((ve, Ke) => {
              const We = String(Ke).match(/\((\d+)\)/);
              return ve + (We ? parseInt(We[1], 10) : 0);
            }, 0);
            ((N += F), (w += F));
          }
          const T = p.length,
            S = T > 0 ? N / T : 0,
            z = S >= (s.totalGuests || 0),
            U = Math.max(
              1,
              s.totalGuests || (s.adults || 0) + (s.children || 0),
            ),
            L =
              p.find((ie) => (ie == null ? void 0 : ie.date) === s.dateFrom) ||
              p[0],
            de = (
              ((n =
                (c = L == null ? void 0 : L.operators) == null
                  ? void 0
                  : c[0]) == null
                ? void 0
                : n.cabins) || []
            ).reduce((ie, Ce) => {
              const F = String(Ce).match(/\((\d+)\)/),
                ve = F ? parseInt(F[1], 10) : 0;
              return ie + (ve >= U ? 1 : 0);
            }, 0);
          a.push({
            lodge: d,
            hasAvailability: z,
            availableSlots: Math.floor(S),
            totalSlots: T > 0 ? Math.floor(w / T) : 0,
            image: "/src/images/cabin.jpg",
            availableCabinsCount: de,
            dateFrom: s.dateFrom,
          });
        }
        return a;
      });
      const Hn = D(() => {
        const s = ne.value;
        if (!s) return [];
        const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
          a = s.dateFrom,
          r = Math.max(1, s.totalGuests || (s.adults || 0) + (s.children || 0)),
          c = [],
          n = new Set();
        for (const d of t) {
          const p = He.value[d] || [],
            N = p.find((T) => (T == null ? void 0 : T.date) === a) || p[0],
            w = ((N == null ? void 0 : N.operators) || []).flatMap(
              (T) => T.cabins || [],
            );
          for (const T of w) {
            const S = as(T),
              z = rt(T),
              U = typeof T == "string" ? "" : Is(T);
            if (z == null || z >= r) {
              const J =
                (typeof T != "string" && T != null && T.id
                  ? String(T.id).trim().toLowerCase()
                  : null) || `${ye(d)}|${mt(S)}`;
              if (n.has(J)) continue;
              (n.add(J),
                c.push({
                  ship: d,
                  cabinName: S,
                  capacity: z,
                  date: a,
                  image: U,
                }));
            }
          }
        }
        return c;
      });
      (D(() =>
        Hn.value.map((s) => ({
          cabinName: s.cabinName,
          ship: s.ship,
          date: s.date,
          capacity: s.capacity,
          image: s.image || "/src/images/cabin.jpg",
        })),
      ),
        D(() => {
          const s = ne.value;
          return s
            ? Math.max(1, s.totalGuests || (s.adults || 0) + (s.children || 0))
            : 1;
        }));
      const zt = D(() => {
          const s = oe.value;
          if (!s) return null;
          const t = s.originalItem || s;
          if (t.detail) return t.detail;
          const a = k.value || new Map(),
            r = `${ye(t.shipName || t.operatorLabel || "")}|${mt(t.cabinName)}`;
          return a.get(r) || null;
        }),
        Yn = D(() => {
          const s = zt.value;
          return (
            (
              (s == null ? void 0 : s.description) ||
              (s == null ? void 0 : s.desc) ||
              ""
            ).trim() ||
            "If you are desperate for a vacation, bring your friends or family and step away from it all."
          );
        }),
        ws = D(() => {
          const s = zt.value,
            t =
              (s && (typeof s.price == "number" ? s.price : os(s))) ||
              os(oe.value);
          if (t == null) return "";
          const a = Ms(t, Ot);
          return a ? Sn(a.amount, a.currency) : "";
        }),
        Jn = D(() => {
          var a, r;
          const s = zt.value;
          return s != null && s.capacity
            ? s.capacity
            : Ns((a = oe.value) == null ? void 0 : a.capacityText) ||
                ((r = oe.value) == null ? void 0 : r.capacity) ||
                "";
        }),
        _s = D(() => {
          var d;
          const s = zt.value,
            t = s && typeof s == "object" && s.facilities ? s.facilities : null,
            a = {
              wifi: "Wi-Fi",
              starlink: "Starlink",
              jacuzzi: "Jacuzzi",
              indoor_jacuzzi: "Indoor jacuzzi",
              outdoor_jacuzzi: "Outdoor jacuzzi",
              indoor_lounge: "Indoor lounge",
              outdoor_lounge: "Outdoor lounge",
              sundeck: "Sundeck",
              seaview: "Sea view",
              balcony: "Balcony",
              private_bathroom: "Private bathroom",
              shower: "Shower",
              bathtub: "Bathtub",
              outdoor_bathtub: "Outdoor bathtub",
              king_bed: "King bed",
              bar: "Bar",
              hammock: "Hammock",
              smart_tv: "Smart TV",
              ac: "Air conditioning",
            },
            r = [];
          if (t) for (const [p, N] of Object.entries(a)) t[p] && r.push(N);
          if (r.length) return r;
          const c = [];
          return (
            s &&
              (s.facility_text && c.push(s.facility_text),
              s.facilities_text && c.push(s.facilities_text),
              s.api_name && c.push(s.api_name),
              s.description && c.push(s.description)),
            (d = oe.value) != null &&
              d.capacityText &&
              c.push(oe.value.capacityText),
            ka(c.join(" "))
          );
        });
      D(() => {
        const s = ne.value;
        return s
          ? Array.isArray(s.destinations) && s.destinations.length
            ? s.destinations.join(", ")
            : s.destination || ""
          : "";
      });
      const jn = D(() => {
          const s = ne.value;
          if (!s) return [];
          const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
            a = s.shipSheets && s.shipSheets.length ? s.shipSheets : [],
            r = new Set(),
            c = (n) => {
              const d = ye(
                String(n)
                  .replace(/normalized/gi, "")
                  .replace(/cruise schedule/gi, ""),
              );
              if (!d) return;
              r.add(d);
              const p = d.split(" ")[0];
              p && r.add(p);
            };
          return (t.forEach(c), a.forEach(c), Array.from(r));
        }),
        Zt = D(() => {
          const s = ne.value;
          return s
            ? s.ships && s.ships.length
              ? s.ships
              : s.lodges || []
            : [];
        }),
        Cs = D(() =>
          Zt.value.length <= 1 || Je.value
            ? !1
            : pn.value.filter((t) => t.hasAvailability).length > 0,
        ),
        pn = D(() => {
          const s = ne.value,
            t = ue.value,
            a = A.value,
            r = V.value,
            c = k.value || new Map();
          if (!s || !t || !Array.isArray(t.operators)) return [];
          const n = Zt.value,
            d = [];
          for (const p of n) {
            const N = t.operators.find((w) => {
              const T = ye(w.operator || ""),
                S = ye(p);
              return T === S || T.includes(S) || S.includes(T);
            });
            if (N) {
              const w = (N.cabins || []).filter((z) => {
                  const U = As(z);
                  if (U != null && U <= 0) return !1;
                  if (a > 1 || r < je) {
                    let L = 0;
                    if (
                      (z.trip_days
                        ? (L = parseInt(z.trip_days, 10))
                        : z.days
                          ? (L = parseInt(z.days, 10))
                          : z.raw &&
                            (z.raw.trip_days
                              ? (L = parseInt(z.raw.trip_days, 10))
                              : z.raw.days && (L = parseInt(z.raw.days, 10))),
                      !L)
                    ) {
                      const J = as(z),
                        de = mt(J),
                        ie = ye(p),
                        Ce = ye(N.operator || "");
                      let F = c.get(`${ie}|${de}`);
                      if ((!F && Ce && (F = c.get(`${Ce}|${de}`)), !F)) {
                        const ve = `|${de}`;
                        for (const [Ke, We] of c.entries())
                          if (Ke.endsWith(ve)) {
                            F = We;
                            break;
                          }
                      }
                      if (!F) {
                        const ve = ls(J);
                        ve && (F = c.get(`${ie}|${ve}`));
                      }
                      F && (L = parseInt(F.trip_days || F.days || 0, 10));
                    }
                    if (L > 0 && (L < a || L > r)) return !1;
                  }
                  return !0;
                }),
                T = w.length,
                S = At(p);
              if (T > 0) {
                const z = w.reduce((U, L) => {
                  const J = rt(L);
                  return U + (J || 4);
                }, 0);
                d.push({
                  name: p,
                  operator: N.operator,
                  cabinsCount: T,
                  totalCapacity: z,
                  hasAvailability: !0,
                  image: (S == null ? void 0 : S.mainImage) || Dt(p) || "",
                  description: (S == null ? void 0 : S.description) || "",
                });
              } else
                d.push({
                  name: p,
                  operator: N.operator,
                  cabinsCount: 0,
                  totalCapacity: 0,
                  hasAvailability: !1,
                  image: (S == null ? void 0 : S.mainImage) || Dt(p) || "",
                  description: (S == null ? void 0 : S.description) || "",
                });
            } else {
              const w = At(p);
              d.push({
                name: p,
                operator: p,
                cabinsCount: 0,
                totalCapacity: 0,
                hasAvailability: !1,
                image: (w == null ? void 0 : w.mainImage) || Dt(p) || "",
                description: (w == null ? void 0 : w.description) || "",
              });
            }
          }
          return d.filter((p) => p.hasAvailability);
        });
      function Xn(s) {
        Je.value = s;
      }
      function Qn() {
        Je.value = null;
      }
      const es = D(() => {
          const s = ne.value,
            t = ue.value;
          if (!s || !t || !Array.isArray(t.operators)) return [];
          const a = jn.value,
            r = k.value || new Map(),
            c = new Map();
          for (const N of t.operators) {
            const w = N.operator,
              T = N.cabins || [];
            for (const S of T) {
              const z = As(S);
              if (z != null && z <= 0) continue;
              const U = as(S),
                L = kn(S),
                J = os(S),
                de = va(S, w);
              if (a.length && !ya(de, a)) continue;
              if (Je.value) {
                const Ie = ye(Je.value),
                  Rt = ye(de);
                if (!Rt.includes(Ie) && !Ie.includes(Rt)) continue;
              }
              const ie =
                  typeof S != "string" && S != null && S.id
                    ? String(S.id).trim().toLowerCase()
                    : null,
                Ce = mt(U),
                F = (typeof S != "string" && (S.start_date || S.date)) || "",
                ve = ie || `${ye(de)}|${Ce}|${F}` || `${ye(w)}|${Ce}|${F}`,
                Ke = `${ye(de)}|${Ce}`,
                We = w ? `${ye(w)}|${Ce}` : null;
              let De = r.get(Ke);
              if (
                (!De && We && (De = r.get(We)),
                !De &&
                  r.size > 0 &&
                  Math.floor(Math.random() * 100) < 5 &&
                  console.log("Cabin detail NOT found:", {
                    shipName: de,
                    operatorLabel: w,
                    cabinKey: Ce,
                    searchKey1: Ke,
                    searchKey2: We,
                    availableKeys: Array.from(r.keys())
                      .filter((Rt) => Rt.includes(Ce))
                      .slice(0, 3),
                  }),
                !De)
              ) {
                for (const [Ie, Rt] of r.entries())
                  if (Ie.endsWith(`|${Ce}`)) {
                    De = Rt;
                    break;
                  }
              }
              if (!De) {
                const Ie = `${ye(de)}|${ls(U)}`;
                De = r.get(Ie);
              }
              const Ps = os(De) || J,
                Os = kn(De) || L,
                Tn = As(De),
                Gt = Tn ?? z,
                Fa = Is(De) || Is(S) || "/src/images/cabin.jpg",
                za = typeof S != "string" ? S.trip_days || S.days : null,
                Ua = De ? De.trip_days || De.days : null,
                Ga = za || Ua || null,
                Va =
                  (typeof S != "string" ? S.start_date || S.date : null) ||
                  s.dateFrom,
                In = c.get(ve),
                Ka = {
                  key: ve,
                  operatorLabel: w,
                  shipName: de,
                  cabinName: U,
                  available: Gt,
                  availableText: Gt != null ? `${Gt} available` : "Available",
                  price: Ps,
                  capacityText: Os,
                  date: Va,
                  tripDays: Ga,
                  image: Fa,
                  raw: S,
                  detail: De,
                };
              if (!In) c.set(ve, Ka);
              else {
                const Ie = { ...In };
                (Ie.available == null && Gt != null && (Ie.available = Gt),
                  !Ie.price && Ps && (Ie.price = Ps),
                  !Ie.capacityText && Os && (Ie.capacityText = Os),
                  (Ie.availableText =
                    Ie.available != null
                      ? `${Ie.available} available`
                      : "Available"),
                  c.set(ve, Ie));
              }
            }
          }
          const n = Array.from(c.values());
          n.sort(
            (N, w) =>
              (N.operatorLabel || "").localeCompare(w.operatorLabel || "") ||
              (N.cabinName || "").localeCompare(w.cabinName || ""),
          );
          const d = s.dateFrom,
            p = s.dateTo;
          return d && p
            ? n.filter((w) => {
                const T = is(w);
                return T ? ga(w.date, T, d, p) : !0;
              })
            : n;
        }),
        Zn = D(() => {
          const s = es.value,
            t = ne.value || {},
            a = t.isFlexible,
            r = a ? t.flexibleGuests || 0 : t.totalGuests || 0,
            c = t.cabins || [],
            n = {};
          for (const p of s) {
            if (!p.date) continue;
            const w = `${ye(p.shipName || p.operatorLabel || "")}|${p.date}`;
            let T = 2;
            if (typeof rt == "function") T = rt(p) || 2;
            else {
              const U = (p.capacityText || "").match(/(\d+)/);
              U && (T = parseInt(U[1]));
            }
            const S = typeof p.available == "number" ? p.available : 1;
            n[w] = (n[w] || 0) + T * S;
          }
          const d = new Map();
          for (const p of s) {
            const N = `${p.shipName || p.operatorLabel}|${p.cabinName}`;
            d.has(N) || d.set(N, { ...p, trips: [], totalAvailable: 0 });
            const w = d.get(N),
              T = p.date || "",
              S = Number(p.tripDays || is(p)) || 3;
            if (!T) continue;
            const U = `${ye(p.shipName || p.operatorLabel || "")}|${T}`,
              L = n[U] || 0;
            if (r > 0 && L < r) continue;
            if (!a && c.length > 0) {
              let ie = 2;
              if (typeof rt == "function") ie = rt(p) || 2;
              else {
                const ve = (p.capacityText || "").match(/(\d+)/);
                ve && (ie = parseInt(ve[1]));
              }
              if (!c.some((F) => ie >= (F.total || F.adults + F.children)))
                continue;
            }
            const J = new Date(T + "T00:00:00");
            let de = !1;
            for (const ie of w.trips) {
              const Ce = new Date(ie.date + "T00:00:00"),
                F = Number(ie.tripDays) || 3,
                ve = new Date(Ce);
              if ((ve.setDate(ve.getDate() + F - 1), J >= Ce && J <= ve)) {
                de = !0;
                break;
              }
            }
            if (!de) {
              const ie = {
                date: p.date,
                tripDays: S,
                available: p.available || 1,
                key: p.key,
                originalItem: p,
              };
              (w.trips.push(ie),
                (w.totalAvailable += ie.available || 1),
                p.price &&
                  (!w.price || Ct(p.price) < Ct(w.price)) &&
                  (w.price = p.price));
            }
          }
          return Array.from(d.values())
            .map((p) => {
              var w;
              const N = p.trips.sort(
                (T, S) => new Date(T.date) - new Date(S.date),
              );
              return N.length === 0
                ? null
                : {
                    ...p,
                    id: p.key,
                    uniqueKey: `${p.shipName}|${p.cabinName}`,
                    title: fa(p),
                    subtitle: na(p.operatorLabel),
                    image: p.image,
                    prices: [
                      { label: "Start from", value: p.price || "Rp3,650,000" },
                    ],
                    availabilityCount:
                      p.totalAvailable > 1
                        ? `${p.totalAvailable} cabins available`
                        : p.availableText,
                    tripsCount: N.length,
                    trips: N,
                    date: Nt((w = N[0]) == null ? void 0 : w.date),
                    availabilityType: "standard",
                    availabilityTitle: "Great news, we have availability!",
                    availabilityText:
                      "Select the result that best suits you from the list below and it will be added to the itinerary summary on the right.",
                    originalItem: p,
                    isGallery: !0,
                  };
            })
            .filter((p) => p !== null);
        }),
        st = D(() => {
          let s = [...Zn.value];
          const t = A.value,
            a = V.value;
          return (
            (t > 1 || a < je) &&
              (s = s
                .map((r) => {
                  const c = (r.trips || []).filter((n) => {
                    const d = Number(n.tripDays) || 0;
                    return d >= t && d <= a;
                  });
                  return c.length === 0
                    ? null
                    : { ...r, trips: c, tripsCount: c.length };
                })
                .filter((r) => r !== null)),
            et.value === "price_low"
              ? s.sort((r, c) => {
                  var p, N, w, T;
                  const n = Ct(
                      ((N = (p = r.prices) == null ? void 0 : p[0]) == null
                        ? void 0
                        : N.value) || "0",
                    ),
                    d = Ct(
                      ((T = (w = c.prices) == null ? void 0 : w[0]) == null
                        ? void 0
                        : T.value) || "0",
                    );
                  return n - d;
                })
              : et.value === "price_high" &&
                s.sort((r, c) => {
                  var p, N, w, T;
                  const n = Ct(
                    ((N = (p = r.prices) == null ? void 0 : p[0]) == null
                      ? void 0
                      : N.value) || "0",
                  );
                  return (
                    Ct(
                      ((T = (w = c.prices) == null ? void 0 : w[0]) == null
                        ? void 0
                        : T.value) || "0",
                    ) - n
                  );
                }),
            s
          );
        }),
        nt = m(1),
        mn = m(!1);
      function $s() {
        mn.value = window.innerWidth < 768;
      }
      (Xe(() => {
        ($s(), window.addEventListener("resize", $s));
      }),
        Nn(() => {
          window.removeEventListener("resize", $s);
        }));
      const Ss = D(() => (mn.value ? 5 : 10)),
        ts = D(() => Math.ceil(st.value.length / Ss.value)),
        ea = D(() => {
          const s = (nt.value - 1) * Ss.value,
            t = s + Ss.value;
          return st.value.slice(s, t);
        });
      function xs(s) {
        s >= 1 &&
          s <= ts.value &&
          ((nt.value = s), window.scrollTo({ top: 0, behavior: "smooth" }));
      }
      function ta() {
        xs(nt.value + 1);
      }
      function sa() {
        xs(nt.value - 1);
      }
      (at(et, () => {
        nt.value = 1;
      }),
        at([A, V], () => {
          nt.value = 1;
        }),
        at(It, (s) => {
          (V.value > s && (V.value = s),
            A.value > V.value && (A.value = V.value));
        }));
      const Ds = D(() => {
          const s = Te.value || {},
            t = rt(s);
          if (t) return t;
          const a = Ns(s.capacityText);
          return a || 4;
        }),
        ss = D(() => {
          const s = P.value || [];
          if (!s.length)
            return {
              hasPrice: !1,
              total: 0,
              formattedTotal: "",
              pricedCount: 0,
              missingCount: 0,
            };
          let t = "",
            a = 0,
            r = 0;
          for (const n of s) {
            const d = Ms(n == null ? void 0 : n.price, t || Ot);
            if (
              !d ||
              (t || (t = d.currency), t && d.currency && t !== d.currency)
            )
              continue;
            const p = Number((n == null ? void 0 : n.guests) || 2),
              N = Number(d.amount) * (Number.isFinite(p) ? p : 2);
            ((a += N), r++);
          }
          const c = r > 0;
          return {
            hasPrice: c,
            total: a,
            formattedTotal: c ? _(a) : "",
            pricedCount: r,
            missingCount: s.length - r,
          };
        });
      function Nt(s) {
        return s
          ? new Date(s).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "";
      }
      function fn(s, t) {
        if (!s) return "";
        const a = new Date(s + "T00:00:00"),
          r = Number(t) || 1;
        if (r <= 1) return Nt(s);
        const c = new Date(a);
        c.setDate(c.getDate() + r - 1);
        const n = a.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          d = c.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        return `${n} - ${d}`;
      }
      function hn(s) {
        return s ? La(s, 2) : "";
      }
      function na(s) {
        if (!s) return "";
        const t = s.trim().split(/[\s(]+/)[0];
        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
      }
      function aa(s, t) {
        ((yt.value = t.key),
          s.originalItem && (s.originalItem.selectedTrip = t),
          kt.value[t.key] || (kt.value[t.key] = 1));
      }
      function gn(s) {
        Ze.value[s] = !Ze.value[s];
      }
      function pt(s) {
        return !s.trips || s.trips.length === 0
          ? null
          : s.trips.find((a) => a.key === yt.value) || s.trips[0];
      }
      function oa(s) {
        if (!s.trips || s.trips.length <= 1) return [];
        const t = pt(s);
        return s.trips.filter((a) => a.key !== t.key);
      }
      function ia(s) {
        const t = pt(s);
        if (!t) {
          console.warn("No trip selected");
          return;
        }
        const a = {
          ...s.originalItem,
          title: s.title,
          date: t.date,
          tripDays: t.tripDays,
          available: t.available,
          selectedTrip: t,
        };
        Dn(a);
      }
      async function la() {
        Tt.value = !0;
        try {
          const s = await Un();
          if (
            ((lt.value = (s.operators || [])
              .map((t) => {
                var c, n;
                const a = ((c = t.operator) == null ? void 0 : c.trim()) || "",
                  r = ((n = t.sourceSheet) == null ? void 0 : n.trim()) || a;
                return { id: `${a}__${r}`, label: a, sheet: r };
              })
              .filter((t) => t.label && t.sheet)),
            !$.value.length && u.value.length)
          ) {
            const t = [];
            for (const a of u.value) {
              const r = lt.value.find(
                (c) => c.label === a.label && c.sheet === (a.sheet || c.sheet),
              );
              r && t.push(r.id);
            }
            $.value = t;
          }
        } catch (s) {
          (console.warn("Failed to load operators:", s),
            (lt.value = Bt.map((t) => ({
              id: t.id || `${t.label || ""}__${t.sheet || ""}`,
              label: t.label,
              sheet: t.sheet || t.label,
            }))));
        } finally {
          Tt.value = !1;
        }
      }
      async function bn() {
        try {
          const a = await fetch(
              "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/?resource=cabindetail",
            ).then((n) => n.json()),
            r = new Map(),
            c = new Set();
          (a &&
            Array.isArray(a.data) &&
            a.data.forEach((n) => {
              const d = n.operator || n.shipName || "";
              c.add(d);
              const p = new Set();
              (p.add(ye(d)),
                p.add(
                  ye(d.replace(/\s+(cruise|liveaboard|voyages?|boat)s?$/i, "")),
                ));
              const N = d.toUpperCase().trim();
              (p.add(ye(N)),
                p.add(
                  ye(N.replace(/\s+(CRUISE|LIVEABOARD|VOYAGES?|BOAT)S?$/i, "")),
                ));
              const w = as(n),
                T = mt(w);
              p.forEach((U) => {
                if (U.trim()) {
                  const L = `${U}|${T}`;
                  r.set(L, n);
                }
              });
              const S = (n.api_name || "").toString().trim();
              if (S) {
                const U = mt(S);
                p.forEach((L) => {
                  if (L.trim()) {
                    const J = `${L}|${U}`;
                    r.set(J, n);
                  }
                });
              }
              const z = ls(w);
              if (
                (z &&
                  p.forEach((U) => {
                    const L = `${U}|${z}`;
                    r.set(L, n);
                  }),
                S)
              ) {
                const U = ls(S);
                U &&
                  p.forEach((L) => {
                    const J = `${L}|${U}`;
                    r.set(J, n);
                  });
              }
            }),
            (k.value = r),
            console.log(`Loaded ${r.size} cabin details from API`, {
              sampleKeys: Array.from(r.keys()).slice(0, 10),
              totalEntries: r.size,
              uniqueShipNames: Array.from(c).sort(),
            }));
        } catch (s) {
          console.warn("Failed to load cabindetail API", s);
        }
      }
      async function ra() {
        try {
          const a = await fetch(
              "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/?resource=shipdetail",
            ).then((c) => c.json()),
            r = new Map();
          (a &&
            a.ok &&
            Array.isArray(a.ships) &&
            a.ships.forEach((c) => {
              const n = (c.name || "").toUpperCase().trim();
              if (n) {
                const d = {
                  ...c,
                  mainImage: c.image_main || c.mainImage || "",
                };
                r.set(n, d);
              }
            }),
            (Me.value = r),
            console.log(
              `Loaded ${r.size} ship details from API`,
              Array.from(r.keys()),
            ));
        } catch (s) {
          console.warn("Failed to load shipdetail API", s);
        }
      }
      async function ns() {
        if (ne.value) {
          ((me.value = !0),
            (Ne.value = ""),
            (He.value = {}),
            (ot.value = []),
            (ue.value = null));
          try {
            const s = ne.value,
              t = An(s.dateFrom, s.dateTo),
              a = s.ships && s.ships.length ? s.ships : s.lodges || [],
              r = s.shipSheets && s.shipSheets.length ? s.shipSheets : a;
            (console.log(
              "[Results] Starting data load with",
              t.length,
              "dates",
            ),
              await Promise.all([
                (async () => {
                  try {
                    const w = await Gn();
                    if (w && w.ships) {
                      const T = new Map();
                      (w.ships.forEach((S) => {
                        const z = (S.name || "").toUpperCase().trim();
                        z &&
                          T.set(z, {
                            ...S,
                            mainImage: S.image_main || S.mainImage || "",
                          });
                      }),
                        (Me.value = T),
                        console.log(
                          "[Results] Ship details loaded:",
                          T.size,
                          "entries",
                        ));
                    }
                  } catch (w) {
                    console.warn(
                      "[Results] Failed to load ship details, continuing without:",
                      w,
                    );
                  }
                })(),
                (async () => {
                  try {
                    await bn();
                  } catch (w) {
                    console.warn(
                      "[Results] Failed to load cabin details, continuing without:",
                      w,
                    );
                  }
                })(),
              ]));
            let c = null;
            const n = () => (
                c || (c = Rn("Cruise Schedule - Normalized").catch(() => null)),
                c
              ),
              d = {};
            await Promise.all(
              r.map(async (w, T) => {
                const S = a[T] || w;
                let z = [];
                try {
                  const U = await Rn(w);
                  Array.isArray(U == null ? void 0 : U.allCabins) &&
                    (z = U.allCabins.map((L) =>
                      String(L).split(" (")[0].trim(),
                    ));
                } catch (U) {
                  console.warn(`Failed to get cabins for sheet ${w}:`, U);
                }
                if (z.length === 0)
                  try {
                    const U = await n();
                    if (U) {
                      const L = ye(S),
                        J = (U.operators || []).find(
                          (de) => ye(de.operator) === L,
                        );
                      J &&
                        Array.isArray(J.cabins) &&
                        (z = J.cabins.map((de) =>
                          String(de).split(" (")[0].trim(),
                        ));
                    }
                  } catch (U) {
                    console.warn(`Failed to get global cabins for ${S}:`, U);
                  }
                d[w] = Array.from(new Set(z.map(mt)));
              }),
            );
            const p = await Promise.all(
                r.map(async (w, T) => {
                  var Ce;
                  const S = a[T] || w,
                    z = d[w] || [],
                    U = t.map((F) =>
                      vs(F, w).catch(
                        (ve) => (
                          console.warn(
                            `Failed to get availability for ${F} on ${w}:`,
                            ve,
                          ),
                          null
                        ),
                      ),
                    ),
                    L = await Promise.all(U),
                    J = L.map((F, ve) =>
                      !F || !F.operators || F.operators.length === 0 ? ve : -1,
                    ).filter((F) => F >= 0);
                  let de = [];
                  if (J.length) {
                    const F = J.map((Ke) =>
                      vs(t[Ke], "Cruise Schedule - Normalized").catch(
                        (We) => (
                          console.warn(
                            `Failed to get fallback availability for ${t[Ke]}:`,
                            We,
                          ),
                          null
                        ),
                      ),
                    );
                    de = (await Promise.all(F)).filter((Ke) => Ke !== null);
                  }
                  const ie = [];
                  for (let F = 0; F < t.length; F++) {
                    const ve =
                      L[F] && L[F].operators && L[F].operators.length
                        ? L[F]
                        : J.includes(F) && de.length > 0
                          ? de[J.indexOf(F)]
                          : null;
                    if (ve) {
                      const Ke =
                          ((Ce = ve.operators) == null
                            ? void 0
                            : Ce.flatMap((De) => De.cabins || [])) || [],
                        We = z.length
                          ? Ke.filter((De) => z.includes(mt(De)))
                          : Ke;
                      ie.push({
                        ...ve,
                        operators: [
                          { operator: S, total: We.length, cabins: We },
                        ],
                      });
                    }
                  }
                  return [S, ie];
                }),
              ),
              N = {};
            for (const [w, T] of p) N[w] = T;
            if (
              ((He.value = N),
              (ot.value = Object.values(N).flat()),
              s != null && s.dateFrom)
            )
              try {
                const T = An(s.dateFrom, s.dateTo || s.dateFrom).map(
                    async (L) => {
                      let J = null;
                      try {
                        J = await vs(L);
                      } catch (de) {
                        console.warn(
                          `Failed primary availability fetch for ${L}, trying fallback:`,
                          de,
                        );
                      }
                      if (!J || !J.operators || J.operators.length === 0)
                        try {
                          J = await vs(L, "Cruise Schedule - Normalized");
                        } catch (de) {
                          console.warn(
                            `Failed fallback availability fetch for ${L}:`,
                            de,
                          );
                        }
                      return { date: L, data: J };
                    },
                  ),
                  S = await Promise.all(T),
                  z = new Map();
                for (const { date: L, data: J } of S)
                  if (!(!J || !J.operators))
                    for (const de of J.operators) {
                      const ie = de.operator;
                      z.has(ie) || z.set(ie, { operator: ie, cabins: [] });
                      const Ce = z.get(ie);
                      for (const F of de.cabins || []) {
                        const ve =
                          typeof F == "string"
                            ? { name: F, start_date: L }
                            : { ...F, start_date: F.start_date || L };
                        Ce.cabins.push(ve);
                      }
                    }
                const U = {
                  ok: !0,
                  operators: Array.from(z.values()),
                  total: Array.from(z.values()).reduce(
                    (L, J) => L + J.cabins.length,
                    0,
                  ),
                };
                ((ue.value = U),
                  console.log(
                    "[Results] Loaded global availability:",
                    U.total,
                    "total cabins",
                  ));
              } catch (w) {
                console.debug("[Results] global availability error", w);
              }
            ot.value.length === 0 &&
              (Ne.value =
                "No availability data found for the selected dates and ships.");
          } catch (s) {
            ((Ne.value = `Failed to check availability: ${s.message}`),
              console.error("[Results] Availability check error:", s));
          } finally {
            ((me.value = !1),
              console.log("[Results] Availability check complete"));
          }
        }
      }
      const ca = () => ns();
      function ua() {
        try {
          const s = lt.value.filter((c) => $.value.includes(c.id)),
            t = s.map((c) => c.label),
            a = s.map((c) => c.sheet),
            r = {
              region: ms,
              destination: Ee.value[0] || "",
              destinations: Ee.value.slice(),
              ships: t,
              shipSheets: a,
              ship: t[0] || "",
              lodges: t.slice(),
              dateFrom: y.value,
              dateTo: H.value || y.value,
              minTripDuration: A.value,
              maxTripDuration: V.value,
              cabins: he.value
                ? []
                : ee.value.map((c) => ({
                    adults: c.adults,
                    children: c.children,
                    total: c.adults + c.children,
                  })),
              totalCabins: he.value ? 0 : ee.value.length,
              totalGuests: Fe.value,
              isFlexible: he.value,
              flexibleGuests: he.value ? _e.value : 0,
              adults: he.value
                ? _e.value
                : ee.value.reduce((c, n) => c + n.adults, 0),
              children: he.value
                ? 0
                : ee.value.reduce((c, n) => c + n.children, 0),
              age3_9: 0,
              age0_2: 0,
              timestamp: Date.now(),
            };
          if (
            ((u.value = s.map((c) => ({ label: c.label, sheet: c.sheet }))),
            localStorage.setItem("komodo_search_criteria", JSON.stringify(r)),
            (ne.value = r),
            y.value)
          ) {
            const c = new Date(y.value);
            ((vt.value = c.getMonth()), (_t.value = c.getFullYear()));
          }
          ns();
        } catch (s) {
          (console.error("Failed to apply sidebar changes", s),
            alert("Failed to apply changes"));
        }
      }
      function da(s) {
        return [Ks.value, qs.value, Ws.value, Hs.value, Ys.value].some(
          (a) => a && (a === s || a.contains(s)),
        );
      }
      function yn(s) {
        da(s.target) || Wn();
      }
      (document.addEventListener("click", yn),
        Nn(() => {
          document.removeEventListener("click", yn);
        }),
        Xe(async () => {
          Et();
          try {
            const s = localStorage.getItem("komodo_search_criteria");
            if (s) {
              ne.value = JSON.parse(s);
              const t = ne.value || {};
              ((Ee.value = Array.isArray(t.destinations)
                ? t.destinations.slice()
                : t.destination
                  ? [t.destination]
                  : []),
                (he.value = !!t.isFlexible),
                (_e.value = t.flexibleGuests || 2));
              const a = Array.isArray(t.ships) ? t.ships : [],
                r = Array.isArray(t.shipSheets) ? t.shipSheets : [];
              if (
                ((u.value = a.map((c, n) => ({ label: c, sheet: r[n] || "" }))),
                (y.value = t.dateFrom || ""),
                (H.value = t.dateTo || ""),
                t.minTripDuration !== void 0
                  ? (A.value = t.minTripDuration)
                  : (A.value = 1),
                t.maxTripDuration !== void 0
                  ? (V.value = t.maxTripDuration)
                  : (V.value = je),
                Array.isArray(t.cabins) && t.cabins.length > 0
                  ? (ee.value = t.cabins.map((c, n) => ({
                      id: n + 1,
                      adults: c.adults || 2,
                      children: c.children || 0,
                      expanded: n === 0,
                    })))
                  : (ee.value = [
                      {
                        id: 1,
                        adults: t.totalGuests || t.adults || 2,
                        children: 0,
                        expanded: !0,
                      },
                    ]),
                y.value)
              ) {
                const c = new Date(y.value);
                ((vt.value = c.getMonth()), (_t.value = c.getFullYear()));
              }
            }
            (bn().catch((t) =>
              console.warn("Failed to load details background:", t),
            ),
              ra().catch((t) =>
                console.warn("Failed to load ship details background:", t),
              ),
              await Promise.all([la(), ns()]));
          } catch (s) {
            (console.error("Failed to load search criteria:", s),
              (Ne.value = "Failed to load search criteria"));
          }
        }));
      function as(s) {
        if (!s) return "";
        if (typeof s == "string") return s.split(" (")[0].trim();
        const t = (
          s.name ||
          s["cabin name"] ||
          s.cabin_name ||
          s.api_name ||
          ""
        ).toString();
        return t ? t.split("(")[0].trim() : "";
      }
      function As(s) {
        return !s || typeof s == "string"
          ? null
          : typeof s.available == "number"
            ? s.available
            : null;
      }
      function kn(s) {
        if (!s) return "";
        if (typeof s == "string") {
          const t = s.match(/\(([^)]+)\)$/);
          return t ? t[1] : "";
        }
        return typeof s.capacity == "number"
          ? `${s.capacity} pax`
          : s.capacity
            ? s.capacity
            : s.capacity_lock || "";
      }
      function os(s) {
        return !s || typeof s == "string" ? "" : s.price_lock || s.price || "";
      }
      function va(s, t) {
        return s && typeof s != "string" && s.shipname
          ? s.shipname
          : (t || "").replace(/\([^)]*\)/g, "").trim();
      }
      function Ts(s) {
        if (!s) return "CABIN";
        const t = s.detail || s;
        if (t.cabin_type || t.type)
          return (t.cabin_type || t.type).toUpperCase();
        const a = s.cabinName || s.name || "";
        return a.toLowerCase().includes("deluxe")
          ? "DELUXE"
          : a.toLowerCase().includes("suite")
            ? "SUITE"
            : a.toLowerCase().includes("master")
              ? "MASTER"
              : a.toLowerCase().includes("vip")
                ? "VIP"
                : "CABIN";
      }
      function pa(s) {
        if (!s) return 2;
        const t = s.detail || s;
        if (typeof t.capacity == "number") return t.capacity;
        const r = (t.capacityText || s.capacityText || "").match(/(\d+)/);
        return r ? parseInt(r[1], 10) : 2;
      }
      function wn(s) {
        if (!s) return "1 King";
        const t = s.detail || s;
        if (t.bed_type) return t.bed_type;
        const a = t.facilities || {};
        return a.king_bed
          ? "1 King"
          : a.twin_bed
            ? "2 Twins"
            : "1 King or 2 Twins";
      }
      function ma(s) {
        if (!s) return "Private cabin";
        const t = s.detail || s;
        return t.size ? t.size : t.area ? t.area : "Private cabin";
      }
      function is(s) {
        if (!s) return "";
        if (s.tripDays) return s.tripDays;
        const t = s.detail || s;
        if (t.trip_days) return t.trip_days;
        if (t.days) return t.days;
        if (s.raw && typeof s.raw != "string") {
          if (s.raw.trip_days) return s.raw.trip_days;
          if (s.raw.days) return s.raw.days;
        }
        return "";
      }
      function ls(s) {
        if (!s) return "";
        let t = String(s).toLowerCase();
        ((t = t.replace(/\([^)]*\)/g, " ")),
          (t = t.replace(/[\-–—_/]+/g, " ")));
        const a = new Set([
            "master",
            "vip",
            "suite",
            "deluxe",
            "superior",
            "private",
            "ocean",
            "sea",
            "view",
            "balcony",
            "bathtub",
            "room",
            "cabin",
            "deck",
            "upperdeck",
            "maindeck",
            "lowerdeck",
          ]),
          r = t
            .split(/\s+/)
            .map((c) => c.trim())
            .filter((c) => c && !a.has(c))
            .map((c) => c.replace(/[^a-z0-9]/g, ""))
            .filter(Boolean);
        return r.length ? r.sort().join(" ") : "";
      }
      function fa(s) {
        const t = s && (s.detail || s),
          a =
            (t == null ? void 0 : t.cabin_name) ||
            (t == null ? void 0 : t.api_name);
        return a && String(a).trim()
          ? String(a).trim()
          : (s == null ? void 0 : s.cabinName) || "";
      }
      function ha(s, t) {
        if (!s || !t) return null;
        const a = new Date(s + "T00:00:00"),
          r = new Date(a);
        return (r.setDate(r.getDate() + (Number(t) - 1)), r);
      }
      function ga(s, t, a, r) {
        if (!s || !t || !a || !r) return !0;
        const c = new Date(s + "T00:00:00"),
          n = ha(s, t),
          d = new Date(a + "T00:00:00"),
          p = new Date(r + "T00:00:00");
        return c <= p && n >= d;
      }
      function Mt(s) {
        if (!s)
          return [
            "Private bathroom",
            "Air conditioning",
            "Sea view",
            "Daily housekeeping",
            "Private bathroom",
            "Air conditioning",
          ];
        const t = s.detail || s,
          a = [],
          r = t.facilities || {},
          c = {
            wifi: "Complimentary Wi-Fi",
            starlink: "Starlink Internet",
            ac: "Air conditioning",
            private_bathroom: "Private bathroom",
            shower: "Walk-in shower",
            bathtub: "Bathtub",
            seaview: "Sea view",
            balcony: "Private balcony",
            sundeck: "Sundeck access",
            jacuzzi: "Jacuzzi",
            indoor_jacuzzi: "Indoor jacuzzi",
            outdoor_jacuzzi: "Outdoor jacuzzi",
            bar: "Mini bar",
            smart_tv: "Smart TV",
            king_bed: "King-size bed",
          };
        for (const [n, d] of Object.entries(c))
          if ((r[n] && a.push(d), a.length >= 8)) break;
        return (
          a.length === 0 &&
            a.push(
              "All cabins are non-smoking",
              "Private bathroom",
              "Air conditioning",
              "Daily housekeeping",
              "Private bathroom",
              "Air conditioning",
            ),
          a
        );
      }
      function _n(s) {
        if (!s) return "";
        try {
          const t = String(s),
            a = Cn(t);
          return a ? `https://lh3.googleusercontent.com/d/${a}=w1600` : t;
        } catch {
          return s;
        }
      }
      function Cn(s) {
        if (!s) return "";
        const t = String(s).match(/\/d\/([^/?#]+)/),
          a = String(s).match(/[?&]id=([^&]+)/);
        return (t && t[1]) || (a && a[1]) || "";
      }
      function ba(s) {
        const t = [],
          a = String(s || ""),
          r = Cn(a);
        return (
          a && t.push(a),
          r &&
            (t.push(`https://lh3.googleusercontent.com/d/${r}=w1600`),
            t.push(`https://drive.google.com/uc?export=view&id=${r}`),
            t.push(`https://drive.google.com/uc?export=download&id=${r}`),
            t.push(`https://drive.google.com/thumbnail?id=${r}&sz=w1600`)),
          Array.from(new Set(t))
        );
      }
      function $n(s, t) {
        const a = s == null ? void 0 : s.target;
        if (!a) return;
        const r = parseInt(a.getAttribute("data-try") || "0", 10),
          c = ba(t);
        r < c.length - 1
          ? (a.setAttribute("data-try", String(r + 1)), (a.src = c[r + 1]))
          : (a.src = "/src/images/cabin.jpg");
      }
      function Is(s) {
        if (!s || typeof s == "string") return "";
        const t = [];
        (s.image_main && t.push(s.image_main),
          Array.isArray(s.images) && t.push(...s.images));
        for (let r = 1; r <= 10; r++) {
          const c = `image_${r}`;
          s[c] && t.push(s[c]);
        }
        const a = t.find((r) => !!r && String(r).trim().length > 0) || "";
        return a ? _n(a) : "";
      }
      function rt(s) {
        if (typeof s == "string") {
          const a = s.match(/\(([^)]+)\)$/);
          if (a && a[1]) {
            const r = (a[1].match(/\d+/g) || []).map((c) => parseInt(c, 10));
            if (r.length) return Math.max(...r);
          }
          return null;
        }
        const t = (
          s.capacity ||
          s.max_guests ||
          s.sleeps ||
          s.capacity_lock ||
          ""
        ).toString();
        if (t) {
          const a = (t.match(/\d+/g) || []).map((r) => parseInt(r, 10));
          if (a.length) return Math.max(...a);
        }
        return null;
      }
      function ye(s) {
        return s
          ? String(s)
              .replace(/\([^)]*\)/g, " ")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, " ")
              .trim()
              .replace(/\s+/g, " ")
          : "";
      }
      function mt(s) {
        if (!s) return "";
        let t = String(s);
        t = t.replace(/\([^)]*\)$/, "").trim();
        const a = t.split(/[-–—]/);
        return (
          (t = a[a.length - 1]),
          t
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim()
            .replace(/\s+/g, " ")
        );
      }
      function ya(s, t) {
        const a = ye(s);
        return t.some((r) => a.includes(r) || r.includes(a));
      }
      function ka(s) {
        if (!s) return [];
        const t = [],
          a = s.match(/\(([^)]+)\)/g);
        (a && a.forEach((d) => t.push(d.replace(/[()]/g, " "))), t.push(s));
        const c = t
            .join(" | ")
            .split(/[+|,\/]/)
            .map((d) => d.replace(/\b(pax|guests?)\b/gi, "").trim())
            .filter(Boolean)
            .filter((d) => !/^\d+(\s*-\s*\d+)?$/.test(d))
            .map((d) =>
              d
                .split(" ")
                .map((p) =>
                  p ? p[0].toUpperCase() + p.slice(1).toLowerCase() : "",
                )
                .filter(Boolean)
                .join(" "),
            ),
          n = [];
        for (const d of c) {
          const p = d.toLowerCase();
          n.some((N) => N.toLowerCase() === p) || n.push(d);
        }
        return n;
      }
      function Ns(s) {
        if (!s) return null;
        const a = String(s).match(/\d+/g);
        if (!a || a.length === 0) return null;
        const r = a.map((c) => parseInt(c, 10));
        return Math.max(...r);
      }
      function Ms(s, t = Ot) {
        var N, w;
        if (s == null) return null;
        if (typeof s == "number" && !Number.isNaN(s))
          return { amount: s, currency: t };
        const a = String(s).trim();
        if (!a) return null;
        const r = a.match(/([^\d]*)([\d.,\s]+)/);
        if (!r) return null;
        let c =
            ((N = r[1]) == null ? void 0 : N.replace(/from/gi, "").trim()) || t,
          n = (w = r[2]) == null ? void 0 : w.trim();
        if (!n) return null;
        ((n = n.replace(/[\s,]/g, "")),
          (n.match(/\./g) || []).length > 1 && (n = n.replace(/\./g, "")));
        const p = parseFloat(n);
        return Number.isNaN(p) ? null : { amount: p, currency: c };
      }
      function Sn(s, t = Ot) {
        return Number.isFinite(s)
          ? `${t || Ot} ${Math.round(s).toLocaleString("en-US")}`
          : "";
      }
      function wa(s) {
        if (!(s != null && s.price)) return "";
        const t = Ms(s.price, Ot);
        if (!t) return "";
        const a = Number((s == null ? void 0 : s.guests) || 2),
          r = t.amount * (Number.isFinite(a) ? a : 2);
        return Sn(r, t.currency);
      }
      function _a(s) {
        ((oe.value = s), (Pe.value = !0), cs());
      }
      function Es() {
        ((Pe.value = !1), (oe.value = null), (St.value = 1), Rs());
      }
      function Ca() {
        ((Le.value = !0), cs());
      }
      function $a() {
        ((Le.value = !1), Rs());
      }
      function rs() {
        ((Qe.value = !1),
          (Te.value = null),
          ($e.value = 2),
          (Ye.value = null),
          Rs());
      }
      function Sa() {
        const s = Ds.value;
        $e.value = Math.min(s, $e.value + 1);
      }
      function xa() {
        $e.value = Math.max(1, $e.value - 1);
      }
      function Da() {
        Ye.value !== null
          ? (Ta(Ye.value, $e.value), rs())
          : Te.value && (Ia(Te.value, $e.value), rs());
      }
      function Aa(s, t) {
        ((Te.value = {
          cabinName: s.cabin,
          shipName: s.ship,
          date: s.date,
          capacityText: s.capacity || "4 guests",
          availableText: s.capacity ? `${s.capacity} capacity` : "Available",
        }),
          (Ye.value = t),
          ($e.value = s.guests || 2),
          (Qe.value = !0),
          cs());
      }
      function Ta(s, t) {
        try {
          const a = "komodo_itinerary",
            r = JSON.parse(localStorage.getItem(a) || "[]");
          r[s] &&
            ((r[s].guests = t),
            localStorage.setItem(a, JSON.stringify(r)),
            Et());
        } catch (a) {
          console.error("Failed to update itinerary", a);
        }
      }
      function xn(s) {
        return P.value.some(
          (t) =>
            t.cabin === (s.title || s.cabinName) &&
            t.ship === s.shipName &&
            t.date === s.date,
        );
      }
      function Ut(s, t) {
        if (!s || !t) return !1;
        const a = s.originalItem;
        if (!a) return !1;
        const r = s.title || a.cabinName;
        return P.value.some(
          (c) => c.cabin === r && c.ship === a.shipName && c.date === t.date,
        );
      }
      function Dn(s) {
        var t;
        if (xn(s)) Na(s);
        else {
          Te.value = s;
          const a = Number(
            ((t = ne.value) == null ? void 0 : t.totalGuests) || 2,
          );
          let r = rt(s);
          (!r && s.originalItem && (r = rt(s.originalItem)),
            !r && s.capacityText && (r = Ns(s.capacityText)));
          const c = r || 4;
          (($e.value = Math.min(a, c)), (Qe.value = !0), cs());
        }
      }
      function Ia(s, t = 2) {
        try {
          const a = "komodo_itinerary",
            r = JSON.parse(localStorage.getItem(a) || "[]"),
            c = s.title || s.cabinName;
          if (
            r.some(
              (p) =>
                p.cabin === c && p.ship === s.shipName && p.date === s.date,
            )
          )
            return;
          const d = {
            operator: s.operatorLabel,
            ship: s.shipName,
            cabin: c,
            date: s.date,
            price: s.price || null,
            capacity: s.capacityText || null,
            guests: t,
            qty: 1,
            addedAt: Date.now(),
          };
          (r.push(d), localStorage.setItem(a, JSON.stringify(r)), Et());
        } catch (a) {
          console.error("Failed to add to itinerary", a);
        }
      }
      function Na(s) {
        try {
          const t = "komodo_itinerary",
            a = JSON.parse(localStorage.getItem(t) || "[]"),
            r = s.title || s.cabinName,
            c = a.filter(
              (n) =>
                !(n.cabin === r && n.ship === s.shipName && n.date === s.date),
            );
          (localStorage.setItem(t, JSON.stringify(c)), Et());
        } catch (t) {
          console.error("Failed to remove from itinerary", t);
        }
      }
      function Ma() {
        Be.value = !0;
      }
      function Ea() {
        Be.value = !1;
      }
      function Ra() {
        ((Be.value = !1), fe.push("/results"));
      }
      function Et() {
        try {
          const t = JSON.parse(
            localStorage.getItem("komodo_itinerary") || "[]",
          );
          P.value = Array.isArray(t) ? t : [];
        } catch {
          P.value = [];
        }
      }
      function Pa(s) {
        try {
          const t = "komodo_itinerary",
            a = JSON.parse(localStorage.getItem(t) || "[]");
          (a.splice(s, 1), localStorage.setItem(t, JSON.stringify(a)), Et());
        } catch (t) {
          console.error("Failed to remove item", t);
        }
      }
      const qe = {
        count: 0,
        bodyOverflow: "",
        htmlOverflow: "",
        bodyPadding: "",
        htmlPadding: "",
      };
      function cs() {
        const s = document.body,
          t = document.documentElement;
        if (!(!s || !t)) {
          if (qe.count === 0) {
            const a = window.innerWidth - t.clientWidth;
            if (
              ((qe.bodyOverflow = s.style.overflow),
              (qe.htmlOverflow = t.style.overflow),
              (qe.bodyPadding = s.style.paddingRight),
              (qe.htmlPadding = t.style.paddingRight),
              a > 0)
            ) {
              const r = `${a}px`;
              ((s.style.paddingRight = r), (t.style.paddingRight = r));
            }
            ((s.style.overflow = "hidden"), (t.style.overflow = "hidden"));
          }
          qe.count++;
        }
      }
      function Rs() {
        const s = document.body,
          t = document.documentElement;
        !s ||
          !t ||
          (qe.count !== 0 &&
            (qe.count--,
            !(qe.count > 0) &&
              ((s.style.overflow = qe.bodyOverflow),
              (t.style.overflow = qe.htmlOverflow),
              (s.style.paddingRight = qe.bodyPadding),
              (t.style.paddingRight = qe.htmlPadding))));
      }
      const te = m({
        title: "",
        firstName: "",
        lastName: "",
        phoneCountry: "+62",
        phoneNumber: "",
        country: "",
        email: "",
        confirmEmail: "",
        userType: "",
        notes: "",
        subscribeNews: !1,
        consentData: !1,
      });
      async function Oa() {
        if (!te.value.firstName || !te.value.lastName) {
          alert("Please enter your first and last name");
          return;
        }
        if (!te.value.email || te.value.email !== te.value.confirmEmail) {
          alert("Please ensure email addresses match");
          return;
        }
        if (!te.value.consentData) {
          alert("Please consent to data collection to proceed");
          return;
        }
        if (!P.value.length) {
          alert("Please add at least one cabin to your itinerary");
          return;
        }
        let s = 0;
        const t = [];
        for (const a of P.value) {
          const r = Ct(a.price),
            c = Number(a.guests || 2),
            n = r * c;
          ((s += n),
            t.push({
              name: `${a.ship} - ${a.cabin}`,
              quantity: c,
              price: r,
              category: "Cruise Cabin",
            }));
        }
        (s <= 0 &&
          ((s = 1e6),
          t.push({
            name: "Komodo Cruise Booking",
            quantity: 1,
            price: s,
            category: "Cruise Booking",
          })),
          (tt.value = !0));
        try {
          const r = `Komodo Cruise Booking: ${P.value.map((n) => `${n.ship} - ${n.cabin}`).join(", ")}`,
            c = await Qr({
              amount: s,
              payerEmail: te.value.email,
              description: r,
              customerName: `${te.value.title ? te.value.title + " " : ""}${te.value.firstName} ${te.value.lastName}`,
              customerPhone: te.value.phoneCountry + te.value.phoneNumber,
              items: t,
            });
          if (
            (localStorage.setItem(
              "komodo_last_enquiry",
              JSON.stringify({
                form: te.value,
                itinerary: P.value,
                invoiceId: c.invoiceId,
                invoiceUrl: c.invoiceUrl,
                amount: s,
                createdAt: new Date().toISOString(),
              }),
            ),
            c.invoiceUrl)
          )
            Zr(c.invoiceUrl);
          else throw new Error("No invoice URL received");
        } catch (a) {
          (console.error("Failed to create payment:", a),
            alert(
              `Failed to process payment: ${a.message}. Please try again.`,
            ));
        } finally {
          tt.value = !1;
        }
      }
      function An(s, t) {
        if (!s || !t) return s ? [s] : [];
        const a = new Date(s),
          r = new Date(t),
          c = [];
        for (let n = new Date(a); n <= r; n.setDate(n.getDate() + 1))
          c.push(us(n));
        return c;
      }
      function La(s, t) {
        const a = new Date(s);
        return (a.setDate(a.getDate() + t), us(a));
      }
      function us(s) {
        const t = s.getFullYear(),
          a = String(s.getMonth() + 1).padStart(2, "0"),
          r = String(s.getDate()).padStart(2, "0");
        return `${t}-${a}-${r}`;
      }
      function Ba() {
        return us(new Date());
      }
      return (
        Et(),
        (s, t) => {
          var a, r, c;
          return (
            o(),
            i(
              G,
              null,
              [
                e("div", ec, [
                  me.value
                    ? (o(), i("div", tc, "Loading"))
                    : (o(),
                      i("div", sc, [
                        e("div", nc, [
                          e("div", ac, [
                            e("div", oc, [
                              e("div", ic, [
                                t[58] ||
                                  (t[58] = e(
                                    "svg",
                                    {
                                      class: "filter-icon",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                    },
                                    [
                                      e("path", {
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                      }),
                                      e("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4",
                                      }),
                                    ],
                                    -1,
                                  )),
                                e(
                                  "span",
                                  null,
                                  l(ee.value.length) +
                                    " cabin" +
                                    l(ee.value.length !== 1 ? "s" : "") +
                                    ", " +
                                    l(Fe.value) +
                                    " guest" +
                                    l(Fe.value !== 1 ? "s" : ""),
                                  1,
                                ),
                              ]),
                              e("div", lc, [
                                t[59] ||
                                  (t[59] = Oe(
                                    '<svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
                                    1,
                                  )),
                                e("span", null, l(se(y.value, H.value)), 1),
                              ]),
                            ]),
                          ]),
                          e(
                            "button",
                            {
                              class: "filter-edit-btn",
                              onClick: t[0] || (t[0] = (n) => (C.value = !0)),
                              "aria-label": "Edit filters",
                            },
                            [
                              ...(t[60] ||
                                (t[60] = [
                                  e(
                                    "svg",
                                    {
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                    },
                                    [
                                      e("path", {
                                        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                                      }),
                                      e("path", {
                                        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                                      }),
                                    ],
                                    -1,
                                  ),
                                ])),
                            ],
                          ),
                        ]),
                        e("div", rc, [
                          e("div", cc, [
                            Ne.value
                              ? (o(),
                                i("div", uc, [
                                  e("p", dc, l(Ne.value), 1),
                                  e(
                                    "button",
                                    { onClick: ca, class: "btn-primary" },
                                    "Try Again",
                                  ),
                                ]))
                              : (o(),
                                i("div", vc, [
                                  t[79] ||
                                    (t[79] = e(
                                      "h2",
                                      { class: "results-title" },
                                      "Your Search Results",
                                      -1,
                                    )),
                                  e("div", pc, [
                                    es.value.length &&
                                    (Cs.value || st.value.length > 0)
                                      ? (o(),
                                        i("div", mc, [
                                          ...(t[61] ||
                                            (t[61] = [
                                              e(
                                                "p",
                                                { class: "desktop-only" },
                                                [
                                                  e(
                                                    "strong",
                                                    null,
                                                    "Your preferred travel dates are available!",
                                                  ),
                                                  Q(
                                                    " We have a team of Komodo Cruises Journey Designers who are ready to plan your trip. Simply select the results that suit your preferences best and submit your enquiry. ",
                                                  ),
                                                ],
                                                -1,
                                              ),
                                              e(
                                                "p",
                                                { class: "mobile-only" },
                                                [
                                                  e(
                                                    "strong",
                                                    null,
                                                    "Your preferred dates are available!",
                                                  ),
                                                  Q(
                                                    " Select results below and submit your enquiry. ",
                                                  ),
                                                ],
                                                -1,
                                              ),
                                              e(
                                                "p",
                                                {
                                                  class:
                                                    "results-note-muted desktop-only",
                                                },
                                                [
                                                  e(
                                                    "span",
                                                    { class: "semibold" },
                                                    "Note:",
                                                  ),
                                                  Q(
                                                    " These results indicate availability and do not guarantee a booking. ",
                                                  ),
                                                ],
                                                -1,
                                              ),
                                            ])),
                                        ]))
                                      : !xe.value && st.value.length > 0
                                        ? (o(),
                                          i("div", fc, [
                                            ...(t[62] ||
                                              (t[62] = [
                                                Oe(
                                                  '<p class="desktop-only"><strong>Your preferred dates are unfortunately not available, but there is availability at other Komodo Cruises lodges or on alternate dates.</strong></p><p class="desktop-only"> We have a team of Komodo Cruises Journey Designers who are ready to plan your trip. Simply select the results that suit your preferences best and submit your enquiry. </p><p class="mobile-only"><strong>Dates not available.</strong> Check alternatives below and submit enquiry. </p><p class="results-note-muted desktop-only"><span class="semibold">Note:</span> These results indicate availability and do not guarantee a booking. </p>',
                                                  4,
                                                ),
                                              ])),
                                          ]))
                                        : M("", !0),
                                  ]),
                                  st.value.length
                                    ? (o(),
                                      i("div", hc, [
                                        e("div", gc, [
                                          e(
                                            "div",
                                            {
                                              class: "sort-dropdown",
                                              ref_key: "sortDropdownRef",
                                              ref: qn,
                                            },
                                            [
                                              t[63] ||
                                                (t[63] = e(
                                                  "span",
                                                  { class: "sort-label" },
                                                  "SORT BY",
                                                  -1,
                                                )),
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: "sort-btn",
                                                  onClick:
                                                    t[1] ||
                                                    (t[1] = (n) =>
                                                      (it.value = !it.value)),
                                                  "aria-expanded": it.value,
                                                },
                                                [
                                                  e(
                                                    "span",
                                                    null,
                                                    l(
                                                      ((a = xt.find(
                                                        (n) =>
                                                          n.value === et.value,
                                                      )) == null
                                                        ? void 0
                                                        : a.label) ||
                                                        "Recommended",
                                                    ),
                                                    1,
                                                  ),
                                                  e(
                                                    "img",
                                                    {
                                                      src: it.value
                                                        ? be(ut)
                                                        : be(ct),
                                                      alt: "",
                                                      class: "sort-caret",
                                                    },
                                                    null,
                                                    8,
                                                    yc,
                                                  ),
                                                ],
                                                8,
                                                bc,
                                              ),
                                              it.value
                                                ? (o(),
                                                  i(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      class:
                                                        "sort-dropdown-panel",
                                                      onClick:
                                                        t[2] ||
                                                        (t[2] = pe(() => {}, [
                                                          "stop",
                                                        ])),
                                                    },
                                                    [
                                                      (o(),
                                                      i(
                                                        G,
                                                        null,
                                                        ae(xt, (n) =>
                                                          e(
                                                            "button",
                                                            {
                                                              key: n.value,
                                                              class: B([
                                                                "sort-option",
                                                                {
                                                                  active:
                                                                    et.value ===
                                                                    n.value,
                                                                },
                                                              ]),
                                                              onClick: (d) => {
                                                                ((et.value =
                                                                  n.value),
                                                                  (it.value =
                                                                    !1));
                                                              },
                                                            },
                                                            l(n.label),
                                                            11,
                                                            kc,
                                                          ),
                                                        ),
                                                        64,
                                                      )),
                                                    ],
                                                  ))
                                                : M("", !0),
                                            ],
                                            512,
                                          ),
                                        ]),
                                        e("div", wc, [
                                          e(
                                            "span",
                                            _c,
                                            l(st.value.length) +
                                              " " +
                                              l(
                                                st.value.length === 1
                                                  ? "Cabin"
                                                  : "Cabins",
                                              ),
                                            1,
                                          ),
                                        ]),
                                      ]))
                                    : M("", !0),
                                  ge(
                                    e(
                                      "div",
                                      Cc,
                                      [
                                        e("div", $c, [
                                          t[64] ||
                                            (t[64] = e(
                                              "h3",
                                              { class: "ship-selection-title" },
                                              "Select a Ship",
                                              -1,
                                            )),
                                          e(
                                            "p",
                                            Sc,
                                            " You selected " +
                                              l(Zt.value.length) +
                                              " ships. Please choose one to view available cabins. ",
                                            1,
                                          ),
                                        ]),
                                        e("div", xc, [
                                          (o(!0),
                                          i(
                                            G,
                                            null,
                                            ae(
                                              pn.value,
                                              (n) => (
                                                o(),
                                                i(
                                                  "div",
                                                  {
                                                    key: n.name,
                                                    class:
                                                      "ship-selection-card",
                                                    onClick: (d) => Xn(n.name),
                                                  },
                                                  [
                                                    e("div", Ac, [
                                                      e(
                                                        "img",
                                                        {
                                                          src:
                                                            n.image ||
                                                            "/src/images/placeholder-ship.jpg",
                                                          alt: n.name,
                                                          class:
                                                            "ship-thumbnail",
                                                          referrerpolicy:
                                                            "no-referrer",
                                                          onError:
                                                            t[3] ||
                                                            (t[3] = (d) =>
                                                              (d.target.src =
                                                                "/src/images/cabin.jpg")),
                                                        },
                                                        null,
                                                        40,
                                                        Tc,
                                                      ),
                                                    ]),
                                                    e("div", Ic, [
                                                      e("h4", Nc, l(n.name), 1),
                                                      n.description
                                                        ? (o(),
                                                          i(
                                                            "p",
                                                            Mc,
                                                            l(n.description),
                                                            1,
                                                          ))
                                                        : M("", !0),
                                                      n.hasAvailability
                                                        ? (o(),
                                                          i("div", Ec, [
                                                            e(
                                                              "span",
                                                              null,
                                                              l(n.cabinsCount) +
                                                                " cabin" +
                                                                l(
                                                                  n.cabinsCount !==
                                                                    1
                                                                    ? "s"
                                                                    : "",
                                                                ) +
                                                                " available",
                                                              1,
                                                            ),
                                                            e(
                                                              "span",
                                                              Rc,
                                                              "Up to " +
                                                                l(
                                                                  n.totalCapacity,
                                                                ) +
                                                                " guests",
                                                              1,
                                                            ),
                                                          ]))
                                                        : (o(),
                                                          i("div", Pc, [
                                                            ...(t[65] ||
                                                              (t[65] = [
                                                                e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "no-availability-text",
                                                                  },
                                                                  "No availability for selected dates",
                                                                  -1,
                                                                ),
                                                              ])),
                                                          ])),
                                                    ]),
                                                    t[66] ||
                                                      (t[66] = e(
                                                        "div",
                                                        {
                                                          class:
                                                            "ship-card-arrow",
                                                        },
                                                        [
                                                          e(
                                                            "svg",
                                                            {
                                                              width: "20",
                                                              height: "20",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              fill: "none",
                                                              stroke:
                                                                "currentColor",
                                                              "stroke-width":
                                                                "2",
                                                            },
                                                            [
                                                              e("polyline", {
                                                                points:
                                                                  "9 18 15 12 9 6",
                                                              }),
                                                            ],
                                                          ),
                                                        ],
                                                        -1,
                                                      )),
                                                  ],
                                                  8,
                                                  Dc,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                      ],
                                      512,
                                    ),
                                    [[Mn, Cs.value]],
                                  ),
                                  ge(
                                    e(
                                      "div",
                                      Oc,
                                      [
                                        Je.value && Zt.value.length > 1
                                          ? (o(),
                                            i("div", Lc, [
                                              e(
                                                "button",
                                                {
                                                  class: "btn-back-ships",
                                                  onClick: Qn,
                                                },
                                                [
                                                  ...(t[67] ||
                                                    (t[67] = [
                                                      e(
                                                        "svg",
                                                        {
                                                          width: "16",
                                                          height: "16",
                                                          viewBox: "0 0 24 24",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                        },
                                                        [
                                                          e("polyline", {
                                                            points:
                                                              "15 18 9 12 15 6",
                                                          }),
                                                        ],
                                                        -1,
                                                      ),
                                                      Q(" Back to Ships ", -1),
                                                    ])),
                                                ],
                                              ),
                                              e("span", Bc, [
                                                t[68] ||
                                                  (t[68] = Q("Viewing: ", -1)),
                                                e(
                                                  "strong",
                                                  null,
                                                  l(Je.value),
                                                  1,
                                                ),
                                              ]),
                                            ]))
                                          : M("", !0),
                                        st.value.length === 0
                                          ? (o(),
                                            i("div", Fc, [
                                              ...(t[69] ||
                                                (t[69] = [
                                                  e(
                                                    "div",
                                                    { class: "desktop-only" },
                                                    [
                                                      e("p", null, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          "No results found.",
                                                        ),
                                                      ]),
                                                      e(
                                                        "p",
                                                        null,
                                                        " We could not find any availability matching your search. Please try adjusting your filters. ",
                                                      ),
                                                    ],
                                                    -1,
                                                  ),
                                                  e(
                                                    "div",
                                                    { class: "mobile-only" },
                                                    [
                                                      e("p", null, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          "No results found.",
                                                        ),
                                                      ]),
                                                      e(
                                                        "p",
                                                        null,
                                                        "Please try adjusting your filters.",
                                                      ),
                                                    ],
                                                    -1,
                                                  ),
                                                ])),
                                            ]))
                                          : M("", !0),
                                        st.value.length
                                          ? (o(),
                                            i("div", zc, [
                                              (o(!0),
                                              i(
                                                G,
                                                null,
                                                ae(
                                                  ea.value,
                                                  (n) => (
                                                    o(),
                                                    i(
                                                      "div",
                                                      {
                                                        class: "cabin-card",
                                                        key: n.uniqueKey,
                                                      },
                                                      [
                                                        e("div", Uc, [
                                                          ke(
                                                            $t,
                                                            {
                                                              name:
                                                                n.isGallery &&
                                                                Ae(n.id) ===
                                                                  "left"
                                                                  ? "slide-left"
                                                                  : "slide-right",
                                                            },
                                                            {
                                                              default: Re(
                                                                () => [
                                                                  (o(),
                                                                  i(
                                                                    "img",
                                                                    {
                                                                      src: n.isGallery
                                                                        ? K(
                                                                            n.originalItem,
                                                                          )[
                                                                            q(
                                                                              n.id,
                                                                            )
                                                                          ] ||
                                                                          "/src/images/cabin.jpg"
                                                                        : n.image ||
                                                                          "/src/images/cabin.jpg",
                                                                      alt: n.title,
                                                                      referrerpolicy:
                                                                        "no-referrer",
                                                                      decoding:
                                                                        "async",
                                                                      loading:
                                                                        "lazy",
                                                                      onError: (
                                                                        d,
                                                                      ) =>
                                                                        $n(
                                                                          d,
                                                                          n.image,
                                                                        ),
                                                                      key: n.isGallery
                                                                        ? q(
                                                                            n.id,
                                                                          )
                                                                        : 0,
                                                                    },
                                                                    null,
                                                                    40,
                                                                    Gc,
                                                                  )),
                                                                ],
                                                              ),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["name"],
                                                          ),
                                                          n.isGallery
                                                            ? (o(),
                                                              i(
                                                                G,
                                                                { key: 0 },
                                                                [
                                                                  e(
                                                                    "button",
                                                                    {
                                                                      class:
                                                                        "gallery-nav gallery-prev",
                                                                      onClick: (
                                                                        d,
                                                                      ) =>
                                                                        re(
                                                                          n.id,
                                                                        ),
                                                                      "aria-label":
                                                                        "Previous image",
                                                                    },
                                                                    " ‹ ",
                                                                    8,
                                                                    Vc,
                                                                  ),
                                                                  e(
                                                                    "button",
                                                                    {
                                                                      class:
                                                                        "gallery-nav gallery-next",
                                                                      onClick: (
                                                                        d,
                                                                      ) =>
                                                                        O(n.id),
                                                                      "aria-label":
                                                                        "Next image",
                                                                    },
                                                                    " › ",
                                                                    8,
                                                                    Kc,
                                                                  ),
                                                                ],
                                                                64,
                                                              ))
                                                            : M("", !0),
                                                        ]),
                                                        e("div", qc, [
                                                          e("div", Wc, [
                                                            e(
                                                              "h3",
                                                              Hc,
                                                              l(n.title),
                                                              1,
                                                            ),
                                                            e(
                                                              "span",
                                                              Yc,
                                                              l(
                                                                Ts(
                                                                  n.originalItem,
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                          ]),
                                                          e("div", Jc, [
                                                            e(
                                                              "span",
                                                              null,
                                                              "Sleeps " +
                                                                l(
                                                                  pa(
                                                                    n.originalItem,
                                                                  ) || 2,
                                                                ),
                                                              1,
                                                            ),
                                                            t[71] ||
                                                              (t[71] = e(
                                                                "span",
                                                                {
                                                                  class:
                                                                    "specs-divider",
                                                                },
                                                                "|",
                                                                -1,
                                                              )),
                                                            e(
                                                              "span",
                                                              null,
                                                              l(
                                                                wn(
                                                                  n.originalItem,
                                                                ) || "1 King",
                                                              ),
                                                              1,
                                                            ),
                                                            is(n.originalItem)
                                                              ? (o(),
                                                                i(
                                                                  G,
                                                                  { key: 0 },
                                                                  [
                                                                    t[70] ||
                                                                      (t[70] =
                                                                        e(
                                                                          "span",
                                                                          {
                                                                            class:
                                                                              "specs-divider",
                                                                          },
                                                                          "|",
                                                                          -1,
                                                                        )),
                                                                    e(
                                                                      "span",
                                                                      null,
                                                                      l(
                                                                        is(
                                                                          n.originalItem,
                                                                        ),
                                                                      ) +
                                                                        " Days",
                                                                      1,
                                                                    ),
                                                                  ],
                                                                  64,
                                                                ))
                                                              : M("", !0),
                                                          ]),
                                                          e("div", jc, [
                                                            e("ul", Xc, [
                                                              (o(!0),
                                                              i(
                                                                G,
                                                                null,
                                                                ae(
                                                                  Mt(
                                                                    n.originalItem,
                                                                  ).slice(0, 3),
                                                                  (d, p) => (
                                                                    o(),
                                                                    i(
                                                                      "li",
                                                                      {
                                                                        key: p,
                                                                      },
                                                                      l(d),
                                                                      1,
                                                                    )
                                                                  ),
                                                                ),
                                                                128,
                                                              )),
                                                            ]),
                                                            Mt(n.originalItem)
                                                              .length > 3
                                                              ? (o(),
                                                                i("ul", Qc, [
                                                                  (o(!0),
                                                                  i(
                                                                    G,
                                                                    null,
                                                                    ae(
                                                                      Mt(
                                                                        n.originalItem,
                                                                      ).slice(
                                                                        3,
                                                                        6,
                                                                      ),
                                                                      (
                                                                        d,
                                                                        p,
                                                                      ) => (
                                                                        o(),
                                                                        i(
                                                                          "li",
                                                                          {
                                                                            key:
                                                                              p +
                                                                              3,
                                                                          },
                                                                          l(d),
                                                                          1,
                                                                        )
                                                                      ),
                                                                    ),
                                                                    128,
                                                                  )),
                                                                ]))
                                                              : M("", !0),
                                                          ]),
                                                          e(
                                                            "button",
                                                            {
                                                              class:
                                                                "cabin-details-btn",
                                                              onClick: (d) =>
                                                                n.availabilityType ===
                                                                  "standard" &&
                                                                _a(
                                                                  n.originalItem,
                                                                ),
                                                            },
                                                            " CABIN DETAILS ",
                                                            8,
                                                            Zc,
                                                          ),
                                                          n.trips &&
                                                          n.trips.length > 0
                                                            ? (o(),
                                                              i("div", eu, [
                                                                e("div", tu, [
                                                                  e(
                                                                    "span",
                                                                    su,
                                                                    l(
                                                                      fn(
                                                                        pt(n)
                                                                          .date,
                                                                        pt(n)
                                                                          .tripDays,
                                                                      ),
                                                                    ),
                                                                    1,
                                                                  ),
                                                                  e(
                                                                    "span",
                                                                    nu,
                                                                    l(
                                                                      pt(n)
                                                                        .available ||
                                                                        1,
                                                                    ) +
                                                                      " cabin" +
                                                                      l(
                                                                        (pt(n)
                                                                          .available ||
                                                                          1) > 1
                                                                          ? "s"
                                                                          : "",
                                                                      ),
                                                                    1,
                                                                  ),
                                                                ]),
                                                                n.trips.length >
                                                                  1 &&
                                                                Ze.value[
                                                                  n.uniqueKey
                                                                ]
                                                                  ? (o(),
                                                                    i(
                                                                      "div",
                                                                      au,
                                                                      [
                                                                        (o(!0),
                                                                        i(
                                                                          G,
                                                                          null,
                                                                          ae(
                                                                            oa(
                                                                              n,
                                                                            ),
                                                                            (
                                                                              d,
                                                                              p,
                                                                            ) => (
                                                                              o(),
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  key: p,
                                                                                  class:
                                                                                    B(
                                                                                      [
                                                                                        "trip-option-alt",
                                                                                        Ut(
                                                                                          n,
                                                                                          d,
                                                                                        )
                                                                                          ? "trip-reserved"
                                                                                          : "",
                                                                                      ],
                                                                                    ),
                                                                                  onClick:
                                                                                    (
                                                                                      N,
                                                                                    ) =>
                                                                                      !Ut(
                                                                                        n,
                                                                                        d,
                                                                                      ) &&
                                                                                      aa(
                                                                                        n,
                                                                                        d,
                                                                                      ),
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "div",
                                                                                    iu,
                                                                                    [
                                                                                      e(
                                                                                        "span",
                                                                                        lu,
                                                                                        l(
                                                                                          fn(
                                                                                            d.date,
                                                                                            d.tripDays,
                                                                                          ),
                                                                                        ),
                                                                                        1,
                                                                                      ),
                                                                                      e(
                                                                                        "span",
                                                                                        ru,
                                                                                        l(
                                                                                          d.available ||
                                                                                            1,
                                                                                        ) +
                                                                                          " cabin" +
                                                                                          l(
                                                                                            (d.available ||
                                                                                              1) >
                                                                                              1
                                                                                              ? "s"
                                                                                              : "",
                                                                                          ),
                                                                                        1,
                                                                                      ),
                                                                                    ],
                                                                                  ),
                                                                                  Ut(
                                                                                    n,
                                                                                    d,
                                                                                  )
                                                                                    ? (o(),
                                                                                      i(
                                                                                        "span",
                                                                                        cu,
                                                                                        [
                                                                                          ...(t[72] ||
                                                                                            (t[72] =
                                                                                              [
                                                                                                e(
                                                                                                  "span",
                                                                                                  {
                                                                                                    class:
                                                                                                      "reserved-check-small",
                                                                                                  },
                                                                                                  "✓",
                                                                                                  -1,
                                                                                                ),
                                                                                                Q(
                                                                                                  " Reserved ",
                                                                                                  -1,
                                                                                                ),
                                                                                              ])),
                                                                                        ],
                                                                                      ))
                                                                                    : (o(),
                                                                                      i(
                                                                                        "span",
                                                                                        uu,
                                                                                        "Select",
                                                                                      )),
                                                                                ],
                                                                                10,
                                                                                ou,
                                                                              )
                                                                            ),
                                                                          ),
                                                                          128,
                                                                        )),
                                                                        e(
                                                                          "button",
                                                                          {
                                                                            class:
                                                                              "less-dates-toggle",
                                                                            onClick:
                                                                              pe(
                                                                                (
                                                                                  d,
                                                                                ) =>
                                                                                  gn(
                                                                                    n.uniqueKey,
                                                                                  ),
                                                                                [
                                                                                  "stop",
                                                                                ],
                                                                              ),
                                                                          },
                                                                          [
                                                                            ...(t[73] ||
                                                                              (t[73] =
                                                                                [
                                                                                  e(
                                                                                    "span",
                                                                                    null,
                                                                                    "LESS DATES",
                                                                                    -1,
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    {
                                                                                      class:
                                                                                        "toggle-arrow expanded",
                                                                                    },
                                                                                    "▲",
                                                                                    -1,
                                                                                  ),
                                                                                ])),
                                                                          ],
                                                                          8,
                                                                          du,
                                                                        ),
                                                                      ],
                                                                    ))
                                                                  : M("", !0),
                                                              ]))
                                                            : M("", !0),
                                                          e("div", vu, [
                                                            e("div", pu, [
                                                              (o(!0),
                                                              i(
                                                                G,
                                                                null,
                                                                ae(
                                                                  n.prices,
                                                                  (d, p) => (
                                                                    o(),
                                                                    i(
                                                                      "div",
                                                                      {
                                                                        key: p,
                                                                        class:
                                                                          "price-display",
                                                                      },
                                                                      [
                                                                        e(
                                                                          "p",
                                                                          mu,
                                                                          [
                                                                            t[74] ||
                                                                              (t[74] =
                                                                                e(
                                                                                  "span",
                                                                                  {
                                                                                    class:
                                                                                      "price-label",
                                                                                  },
                                                                                  "From",
                                                                                  -1,
                                                                                )),
                                                                            e(
                                                                              "span",
                                                                              fu,
                                                                              l(
                                                                                _(
                                                                                  d.value,
                                                                                ),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                        t[75] ||
                                                                          (t[75] =
                                                                            e(
                                                                              "p",
                                                                              {
                                                                                class:
                                                                                  "price-sub",
                                                                              },
                                                                              "per person, per night",
                                                                              -1,
                                                                            )),
                                                                      ],
                                                                    )
                                                                  ),
                                                                ),
                                                                128,
                                                              )),
                                                            ]),
                                                            e("div", hu, [
                                                              n.trips &&
                                                              n.trips.length > 1
                                                                ? (o(),
                                                                  i(
                                                                    "button",
                                                                    {
                                                                      key: 0,
                                                                      class: B([
                                                                        "btn-more-dates",
                                                                        {
                                                                          active:
                                                                            Ze
                                                                              .value[
                                                                              n
                                                                                .uniqueKey
                                                                            ],
                                                                        },
                                                                      ]),
                                                                      onClick:
                                                                        pe(
                                                                          (d) =>
                                                                            gn(
                                                                              n.uniqueKey,
                                                                            ),
                                                                          [
                                                                            "stop",
                                                                          ],
                                                                        ),
                                                                    },
                                                                    [
                                                                      e(
                                                                        "span",
                                                                        null,
                                                                        l(
                                                                          Ze
                                                                            .value[
                                                                            n
                                                                              .uniqueKey
                                                                          ]
                                                                            ? "LESS DATES"
                                                                            : "MORE DATES",
                                                                        ),
                                                                        1,
                                                                      ),
                                                                      e(
                                                                        "span",
                                                                        {
                                                                          class:
                                                                            B([
                                                                              "btn-arrow",
                                                                              {
                                                                                expanded:
                                                                                  Ze
                                                                                    .value[
                                                                                    n
                                                                                      .uniqueKey
                                                                                  ],
                                                                              },
                                                                            ]),
                                                                        },
                                                                        "▼",
                                                                        2,
                                                                      ),
                                                                    ],
                                                                    10,
                                                                    gu,
                                                                  ))
                                                                : M("", !0),
                                                              e(
                                                                "button",
                                                                {
                                                                  class: B([
                                                                    "btn-reserve-now",
                                                                    Ut(n, pt(n))
                                                                      ? "btn-reserved"
                                                                      : "",
                                                                  ]),
                                                                  onClick: (
                                                                    d,
                                                                  ) => ia(n),
                                                                },
                                                                [
                                                                  Ut(n, pt(n))
                                                                    ? (o(),
                                                                      i(
                                                                        G,
                                                                        {
                                                                          key: 0,
                                                                        },
                                                                        [
                                                                          t[76] ||
                                                                            (t[76] =
                                                                              e(
                                                                                "span",
                                                                                {
                                                                                  class:
                                                                                    "reserved-check",
                                                                                },
                                                                                "✓",
                                                                                -1,
                                                                              )),
                                                                          t[77] ||
                                                                            (t[77] =
                                                                              Q(
                                                                                " RESERVED ",
                                                                                -1,
                                                                              )),
                                                                        ],
                                                                        64,
                                                                      ))
                                                                    : (o(),
                                                                      i(
                                                                        G,
                                                                        {
                                                                          key: 1,
                                                                        },
                                                                        [
                                                                          Q(
                                                                            " RESERVE NOW ",
                                                                          ),
                                                                        ],
                                                                        64,
                                                                      )),
                                                                ],
                                                                10,
                                                                bu,
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]),
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]))
                                          : M("", !0),
                                        ts.value > 1
                                          ? (o(),
                                            i("div", yu, [
                                              e(
                                                "button",
                                                {
                                                  class: "pagination-btn",
                                                  onClick: sa,
                                                  disabled: nt.value === 1,
                                                },
                                                " ‹ Previous ",
                                                8,
                                                ku,
                                              ),
                                              e("div", wu, [
                                                (o(!0),
                                                i(
                                                  G,
                                                  null,
                                                  ae(
                                                    ts.value,
                                                    (n) => (
                                                      o(),
                                                      i(
                                                        "button",
                                                        {
                                                          key: n,
                                                          class: B([
                                                            "pagination-page",
                                                            {
                                                              active:
                                                                nt.value === n,
                                                            },
                                                          ]),
                                                          onClick: (d) => xs(n),
                                                        },
                                                        l(n),
                                                        11,
                                                        _u,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                              ]),
                                              e(
                                                "button",
                                                {
                                                  class: "pagination-btn",
                                                  onClick: ta,
                                                  disabled:
                                                    nt.value === ts.value,
                                                },
                                                " Next › ",
                                                8,
                                                Cu,
                                              ),
                                            ]))
                                          : M("", !0),
                                        xe.value && !st.value.length
                                          ? (o(),
                                            i("div", $u, [
                                              t[78] ||
                                                (t[78] = e(
                                                  "p",
                                                  null,
                                                  "No alternative options found for your criteria.",
                                                  -1,
                                                )),
                                              e(
                                                "button",
                                                {
                                                  onClick: I,
                                                  class: "btn-primary",
                                                },
                                                " Search Again ",
                                              ),
                                            ]))
                                          : M("", !0),
                                      ],
                                      512,
                                    ),
                                    [[Mn, !Cs.value]],
                                  ),
                                ])),
                          ]),
                          e("div", Su, [
                            e("div", xu, [
                              t[95] ||
                                (t[95] = e(
                                  "h3",
                                  { class: "section-title-sidebar" },
                                  "Check Availability",
                                  -1,
                                )),
                              me.value
                                ? (o(),
                                  i("div", Du, [
                                    ...(t[80] ||
                                      (t[80] = [
                                        Oe(
                                          '<div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-toggle"><div class="skeleton-text-lg"></div><div class="skeleton-circle"></div></div><div class="skeleton-btn"></div>',
                                          6,
                                        ),
                                      ])),
                                  ]))
                                : (o(),
                                  i(
                                    G,
                                    { key: 1 },
                                    [
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "destDropdown",
                                          ref: Ks,
                                        },
                                        [
                                          t[81] ||
                                            (t[81] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Destinations",
                                              -1,
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                ze.value || bs.value
                                                  ? "is-filled"
                                                  : "",
                                              ]),
                                              onMouseenter:
                                                t[4] ||
                                                (t[4] = (n) => (bs.value = !0)),
                                              onMouseleave:
                                                t[5] ||
                                                (t[5] = (n) => (bs.value = !1)),
                                              onClick:
                                                t[6] ||
                                                (t[6] = pe(
                                                  (n) => jt("regions"),
                                                  ["stop"],
                                                )),
                                              "aria-expanded": ze.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                "Destinations: " +
                                                  l(Ee.value.length),
                                                1,
                                              ),
                                              e("span", Tu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: ze.value
                                                      ? be(ut)
                                                      : be(ct),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Iu,
                                                ),
                                              ]),
                                            ],
                                            42,
                                            Au,
                                          ),
                                          ze.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: "dropdown-panel",
                                                  onClick:
                                                    t[9] ||
                                                    (t[9] = pe(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      class:
                                                        "dropdown-group-title",
                                                    },
                                                    l(ms),
                                                  ),
                                                  (o(),
                                                  i(
                                                    G,
                                                    null,
                                                    ae(Yt, (n) =>
                                                      e(
                                                        "div",
                                                        {
                                                          class: "list-row",
                                                          key: n,
                                                          onClick: (d) => Js(n),
                                                        },
                                                        [
                                                          e("div", Mu, l(n), 1),
                                                          ge(
                                                            e(
                                                              "input",
                                                              {
                                                                class: "check",
                                                                type: "checkbox",
                                                                value: n,
                                                                "onUpdate:modelValue":
                                                                  t[7] ||
                                                                  (t[7] = (d) =>
                                                                    (Ee.value =
                                                                      d)),
                                                                onClick:
                                                                  t[8] ||
                                                                  (t[8] =
                                                                    pe(() => {}, [
                                                                      "stop",
                                                                    ])),
                                                              },
                                                              null,
                                                              8,
                                                              Eu,
                                                            ),
                                                            [[ht, Ee.value]],
                                                          ),
                                                        ],
                                                        8,
                                                        Nu,
                                                      ),
                                                    ),
                                                    64,
                                                  )),
                                                ],
                                              ))
                                            : M("", !0),
                                        ],
                                        512,
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "shipsDropdown",
                                          ref: qs,
                                        },
                                        [
                                          t[82] ||
                                            (t[82] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Ships",
                                              -1,
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Ue.value || gs.value
                                                  ? "is-filled"
                                                  : "",
                                              ]),
                                              onMouseenter:
                                                t[10] ||
                                                (t[10] = (n) =>
                                                  (gs.value = !0)),
                                              onMouseleave:
                                                t[11] ||
                                                (t[11] = (n) =>
                                                  (gs.value = !1)),
                                              onClick:
                                                t[12] ||
                                                (t[12] = pe(
                                                  (n) => jt("ships"),
                                                  ["stop"],
                                                )),
                                              "aria-expanded": Ue.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                "Ships: " + l($.value.length),
                                                1,
                                              ),
                                              e("span", Pu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ue.value
                                                      ? be(ut)
                                                      : be(ct),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Ou,
                                                ),
                                              ]),
                                            ],
                                            42,
                                            Ru,
                                          ),
                                          Ue.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: "dropdown-panel",
                                                  onClick:
                                                    t[15] ||
                                                    (t[15] = pe(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", Lu, l(vn.value), 1),
                                                  Tt.value
                                                    ? (o(),
                                                      i(
                                                        "div",
                                                        Bu,
                                                        "Loading ships...",
                                                      ))
                                                    : (o(),
                                                      i(
                                                        G,
                                                        { key: 1 },
                                                        [
                                                          (o(!0),
                                                          i(
                                                            G,
                                                            null,
                                                            ae(
                                                              lt.value,
                                                              (n) => (
                                                                o(),
                                                                i(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "list-row",
                                                                    key: n.id,
                                                                    onClick: (
                                                                      d,
                                                                    ) =>
                                                                      js(n.id),
                                                                  },
                                                                  [
                                                                    e(
                                                                      "div",
                                                                      zu,
                                                                      l(
                                                                        n.label,
                                                                      ),
                                                                      1,
                                                                    ),
                                                                    ge(
                                                                      e(
                                                                        "input",
                                                                        {
                                                                          class:
                                                                            "check",
                                                                          type: "checkbox",
                                                                          value:
                                                                            n.id,
                                                                          "onUpdate:modelValue":
                                                                            t[13] ||
                                                                            (t[13] =
                                                                              (
                                                                                d,
                                                                              ) =>
                                                                                ($.value =
                                                                                  d)),
                                                                          onClick:
                                                                            t[14] ||
                                                                            (t[14] =
                                                                              pe(() => {}, [
                                                                                "stop",
                                                                              ])),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        Uu,
                                                                      ),
                                                                      [
                                                                        [
                                                                          ht,
                                                                          $.value,
                                                                        ],
                                                                      ],
                                                                    ),
                                                                  ],
                                                                  8,
                                                                  Fu,
                                                                )
                                                              ),
                                                            ),
                                                            128,
                                                          )),
                                                          lt.value.length === 0
                                                            ? (o(),
                                                              i(
                                                                "div",
                                                                Gu,
                                                                " No ships found from API. ",
                                                              ))
                                                            : M("", !0),
                                                        ],
                                                        64,
                                                      )),
                                                ],
                                              ))
                                            : M("", !0),
                                        ],
                                        512,
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "guestsDropdown",
                                          ref: Ws,
                                        },
                                        [
                                          t[89] ||
                                            (t[89] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Cabins & Guests",
                                              -1,
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Ge.value || ys.value
                                                  ? "is-filled"
                                                  : "",
                                              ]),
                                              onMouseenter:
                                                t[16] ||
                                                (t[16] = (n) =>
                                                  (ys.value = !0)),
                                              onMouseleave:
                                                t[17] ||
                                                (t[17] = (n) =>
                                                  (ys.value = !1)),
                                              onClick:
                                                t[18] ||
                                                (t[18] = pe(
                                                  (n) => jt("guests"),
                                                  ["stop"],
                                                )),
                                              "aria-expanded": Ge.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              he.value
                                                ? (o(),
                                                  i(
                                                    "span",
                                                    Ku,
                                                    "Flexible: " +
                                                      l(_e.value) +
                                                      " Guest" +
                                                      l(
                                                        _e.value !== 1
                                                          ? "s"
                                                          : "",
                                                      ),
                                                    1,
                                                  ))
                                                : (o(),
                                                  i(
                                                    "span",
                                                    qu,
                                                    l(ee.value.length) +
                                                      " Cabin" +
                                                      l(
                                                        ee.value.length !== 1
                                                          ? "s"
                                                          : "",
                                                      ) +
                                                      ", " +
                                                      l(Fe.value) +
                                                      " Guest" +
                                                      l(
                                                        Fe.value !== 1
                                                          ? "s"
                                                          : "",
                                                      ),
                                                    1,
                                                  )),
                                              e("span", Wu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ge.value
                                                      ? be(ut)
                                                      : be(ct),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Hu,
                                                ),
                                              ]),
                                            ],
                                            42,
                                            Vu,
                                          ),
                                          Ge.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class:
                                                    "dropdown-panel cabin-dropdown-panel",
                                                  onClick:
                                                    t[23] ||
                                                    (t[23] = pe(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", Yu, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: B([
                                                          "sidebar-pill-btn",
                                                          { active: he.value },
                                                        ]),
                                                        onClick:
                                                          t[19] ||
                                                          (t[19] = (n) =>
                                                            (he.value = !0)),
                                                      },
                                                      " Flexible ",
                                                      2,
                                                    ),
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: B([
                                                          "sidebar-pill-btn",
                                                          { active: !he.value },
                                                        ]),
                                                        onClick:
                                                          t[20] ||
                                                          (t[20] = (n) =>
                                                            (he.value = !1)),
                                                      },
                                                      " Structured ",
                                                      2,
                                                    ),
                                                  ]),
                                                  he.value
                                                    ? (o(),
                                                      i("div", Ju, [
                                                        e("div", ju, [
                                                          t[83] ||
                                                            (t[83] = e(
                                                              "span",
                                                              {
                                                                class: "label",
                                                              },
                                                              "Total Guests",
                                                              -1,
                                                            )),
                                                          e("div", Xu, [
                                                            e(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                class:
                                                                  "btn-ctrl",
                                                                disabled:
                                                                  _e.value <= 1,
                                                                onClick:
                                                                  t[21] ||
                                                                  (t[21] = (
                                                                    n,
                                                                  ) =>
                                                                    _e.value--),
                                                              },
                                                              " − ",
                                                              8,
                                                              Qu,
                                                            ),
                                                            e(
                                                              "span",
                                                              Zu,
                                                              l(_e.value),
                                                              1,
                                                            ),
                                                            e(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                class:
                                                                  "btn-ctrl",
                                                                onClick:
                                                                  t[22] ||
                                                                  (t[22] = (
                                                                    n,
                                                                  ) =>
                                                                    _e.value++),
                                                              },
                                                              " + ",
                                                            ),
                                                          ]),
                                                        ]),
                                                        t[84] ||
                                                          (t[84] = e(
                                                            "p",
                                                            {
                                                              class:
                                                                "sidebar-note",
                                                            },
                                                            " We will automatically find the best cabin combination for your group. ",
                                                            -1,
                                                          )),
                                                      ]))
                                                    : (o(),
                                                      i("div", ed, [
                                                        (o(!0),
                                                        i(
                                                          G,
                                                          null,
                                                          ae(
                                                            ee.value,
                                                            (n, d) => (
                                                              o(),
                                                              i(
                                                                "div",
                                                                {
                                                                  key: n.id,
                                                                  class:
                                                                    "cabin-accordion-sidebar",
                                                                },
                                                                [
                                                                  e("div", td, [
                                                                    e(
                                                                      "div",
                                                                      sd,
                                                                      [
                                                                        e(
                                                                          "span",
                                                                          nd,
                                                                          "CABIN " +
                                                                            l(
                                                                              d +
                                                                                1,
                                                                            ),
                                                                          1,
                                                                        ),
                                                                        e(
                                                                          "span",
                                                                          ad,
                                                                          l(
                                                                            n.adults +
                                                                              n.children,
                                                                          ) +
                                                                            " guest" +
                                                                            l(
                                                                              n.adults +
                                                                                n.children !==
                                                                                1
                                                                                ? "s"
                                                                                : "",
                                                                            ),
                                                                          1,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    e(
                                                                      "div",
                                                                      od,
                                                                      [
                                                                        ee.value
                                                                          .length >
                                                                        1
                                                                          ? (o(),
                                                                            i(
                                                                              "button",
                                                                              {
                                                                                key: 0,
                                                                                type: "button",
                                                                                class:
                                                                                  "cabin-remove-btn-sidebar",
                                                                                onClick:
                                                                                  pe(
                                                                                    (
                                                                                      p,
                                                                                    ) =>
                                                                                      Qs(
                                                                                        d,
                                                                                      ),
                                                                                    [
                                                                                      "stop",
                                                                                    ],
                                                                                  ),
                                                                                title:
                                                                                  "Remove cabin",
                                                                              },
                                                                              [
                                                                                ...(t[85] ||
                                                                                  (t[85] =
                                                                                    [
                                                                                      e(
                                                                                        "svg",
                                                                                        {
                                                                                          width:
                                                                                            "14",
                                                                                          height:
                                                                                            "14",
                                                                                          viewBox:
                                                                                            "0 0 24 24",
                                                                                          fill: "none",
                                                                                          stroke:
                                                                                            "currentColor",
                                                                                          "stroke-width":
                                                                                            "2",
                                                                                        },
                                                                                        [
                                                                                          e(
                                                                                            "path",
                                                                                            {
                                                                                              d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z",
                                                                                            },
                                                                                          ),
                                                                                        ],
                                                                                        -1,
                                                                                      ),
                                                                                    ])),
                                                                              ],
                                                                              8,
                                                                              id,
                                                                            ))
                                                                          : M(
                                                                              "",
                                                                              !0,
                                                                            ),
                                                                        e(
                                                                          "button",
                                                                          {
                                                                            type: "button",
                                                                            class:
                                                                              "cabin-toggle-btn-sidebar",
                                                                            onClick:
                                                                              pe(
                                                                                (
                                                                                  p,
                                                                                ) =>
                                                                                  Zs(
                                                                                    d,
                                                                                  ),
                                                                                [
                                                                                  "stop",
                                                                                ],
                                                                              ),
                                                                          },
                                                                          [
                                                                            (o(),
                                                                            i(
                                                                              "svg",
                                                                              {
                                                                                class:
                                                                                  B(
                                                                                    [
                                                                                      "cabin-chevron-sidebar",
                                                                                      {
                                                                                        expanded:
                                                                                          n.expanded,
                                                                                      },
                                                                                    ],
                                                                                  ),
                                                                                width:
                                                                                  "16",
                                                                                height:
                                                                                  "16",
                                                                                viewBox:
                                                                                  "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke:
                                                                                  "currentColor",
                                                                                "stroke-width":
                                                                                  "2",
                                                                              },
                                                                              [
                                                                                ...(t[86] ||
                                                                                  (t[86] =
                                                                                    [
                                                                                      e(
                                                                                        "polyline",
                                                                                        {
                                                                                          points:
                                                                                            "6 9 12 15 18 9",
                                                                                        },
                                                                                        null,
                                                                                        -1,
                                                                                      ),
                                                                                    ])),
                                                                              ],
                                                                              2,
                                                                            )),
                                                                          ],
                                                                          8,
                                                                          ld,
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  ]),
                                                                  n.expanded
                                                                    ? (o(),
                                                                      i(
                                                                        "div",
                                                                        rd,
                                                                        [
                                                                          e(
                                                                            "div",
                                                                            cd,
                                                                            [
                                                                              t[87] ||
                                                                                (t[87] =
                                                                                  e(
                                                                                    "span",
                                                                                    {
                                                                                      class:
                                                                                        "counter-label-sidebar",
                                                                                    },
                                                                                    "Adults",
                                                                                    -1,
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                ud,
                                                                                [
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon-sm",
                                                                                      disabled:
                                                                                        n.adults <=
                                                                                        1,
                                                                                      onClick:
                                                                                        (
                                                                                          p,
                                                                                        ) =>
                                                                                          Qt(
                                                                                            d,
                                                                                            "adults",
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    dd,
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    vd,
                                                                                    l(
                                                                                      n.adults,
                                                                                    ),
                                                                                    1,
                                                                                  ),
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon-sm",
                                                                                      disabled:
                                                                                        n.adults +
                                                                                          n.children >=
                                                                                        Kt,
                                                                                      onClick:
                                                                                        (
                                                                                          p,
                                                                                        ) =>
                                                                                          Xt(
                                                                                            d,
                                                                                            "adults",
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    pd,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            md,
                                                                            [
                                                                              t[88] ||
                                                                                (t[88] =
                                                                                  e(
                                                                                    "span",
                                                                                    {
                                                                                      class:
                                                                                        "counter-label-sidebar",
                                                                                    },
                                                                                    "Children",
                                                                                    -1,
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                fd,
                                                                                [
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon-sm",
                                                                                      disabled:
                                                                                        n.children <=
                                                                                        0,
                                                                                      onClick:
                                                                                        (
                                                                                          p,
                                                                                        ) =>
                                                                                          Qt(
                                                                                            d,
                                                                                            "children",
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    hd,
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    gd,
                                                                                    l(
                                                                                      n.children,
                                                                                    ),
                                                                                    1,
                                                                                  ),
                                                                                  e(
                                                                                    "button",
                                                                                    {
                                                                                      type: "button",
                                                                                      class:
                                                                                        "btn-icon-sm",
                                                                                      disabled:
                                                                                        n.adults +
                                                                                          n.children >=
                                                                                        Kt,
                                                                                      onClick:
                                                                                        (
                                                                                          p,
                                                                                        ) =>
                                                                                          Xt(
                                                                                            d,
                                                                                            "children",
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    bd,
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                          ),
                                                                        ],
                                                                      ))
                                                                    : M("", !0),
                                                                ],
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                        Ft.value
                                                          ? (o(),
                                                            i(
                                                              "button",
                                                              {
                                                                key: 0,
                                                                type: "button",
                                                                class:
                                                                  "btn-add-cabin-sidebar",
                                                                onClick: Xs,
                                                              },
                                                              " + Add Another Cabin ",
                                                            ))
                                                          : M("", !0),
                                                      ])),
                                                ],
                                              ))
                                            : M("", !0),
                                        ],
                                        512,
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "datesDropdown",
                                          ref: Hs,
                                        },
                                        [
                                          t[91] ||
                                            (t[91] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Dates",
                                              -1,
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Ve.value || ks.value
                                                  ? "is-filled"
                                                  : "",
                                              ]),
                                              onMouseenter:
                                                t[24] ||
                                                (t[24] = (n) =>
                                                  (ks.value = !0)),
                                              onMouseleave:
                                                t[25] ||
                                                (t[25] = (n) =>
                                                  (ks.value = !1)),
                                              onClick:
                                                t[26] ||
                                                (t[26] = pe(
                                                  (n) => jt("dates"),
                                                  ["stop"],
                                                )),
                                              "aria-expanded": Ve.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                l(
                                                  y.value
                                                    ? `${y.value} → ${H.value || "..."}`
                                                    : "Select dates",
                                                ),
                                                1,
                                              ),
                                              e("span", kd, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ve.value
                                                      ? be(ut)
                                                      : be(ct),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  wd,
                                                ),
                                              ]),
                                            ],
                                            42,
                                            yd,
                                          ),
                                          Ve.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class:
                                                    "dropdown-panel date-dropdown-panel",
                                                  onClick:
                                                    t[27] ||
                                                    (t[27] = pe(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", _d, [
                                                    e("div", Cd, [
                                                      e(
                                                        "h4",
                                                        $d,
                                                        l(on.value),
                                                        1,
                                                      ),
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "calendar-nav-group",
                                                        },
                                                        [
                                                          e(
                                                            "button",
                                                            {
                                                              class:
                                                                "calendar-nav",
                                                              onClick: un,
                                                              type: "button",
                                                            },
                                                            " ‹ ",
                                                          ),
                                                          e(
                                                            "button",
                                                            {
                                                              class:
                                                                "calendar-nav",
                                                              onClick: cn,
                                                              type: "button",
                                                            },
                                                            " › ",
                                                          ),
                                                        ],
                                                      ),
                                                    ]),
                                                    e("div", Sd, [
                                                      t[90] ||
                                                        (t[90] = Oe(
                                                          '<div class="calendar-weekdays"><div class="weekday">Su</div><div class="weekday">Mo</div><div class="weekday">Tu</div><div class="weekday">We</div><div class="weekday">Th</div><div class="weekday">Fr</div><div class="weekday">Sa</div></div>',
                                                          1,
                                                        )),
                                                      e("div", xd, [
                                                        (o(!0),
                                                        i(
                                                          G,
                                                          null,
                                                          ae(
                                                            ln.value,
                                                            (n) => (
                                                              o(),
                                                              i(
                                                                "button",
                                                                {
                                                                  key: n.key,
                                                                  class: B([
                                                                    "calendar-day",
                                                                    {
                                                                      "other-month":
                                                                        !n.isCurrentMonth,
                                                                      selected:
                                                                        n.isSelected,
                                                                      disabled:
                                                                        !n.isSelectable,
                                                                      past: n.isPast,
                                                                      "in-range":
                                                                        n.isInRange,
                                                                      "range-start":
                                                                        n.isRangeStart,
                                                                      "range-end":
                                                                        n.isRangeEnd,
                                                                    },
                                                                  ]),
                                                                  disabled:
                                                                    !n.isSelectable,
                                                                  onClick: (
                                                                    d,
                                                                  ) => dn(n),
                                                                  type: "button",
                                                                },
                                                                l(n.date),
                                                                11,
                                                                Dd,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ]),
                                                    ]),
                                                  ]),
                                                ],
                                              ))
                                            : M("", !0),
                                        ],
                                        512,
                                      ),
                                      e(
                                        "div",
                                        {
                                          class:
                                            "list trip-duration-always-open",
                                          ref_key: "durationDropdown",
                                          ref: Ys,
                                        },
                                        [
                                          t[94] ||
                                            (t[94] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Trip Duration",
                                              -1,
                                            )),
                                          e("div", Ad, l(Jt.value), 1),
                                          e("div", Td, [
                                            e("div", Id, [
                                              t[92] ||
                                                (t[92] = e(
                                                  "div",
                                                  { class: "counter-text" },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        class: "counter-title",
                                                      },
                                                      "Min",
                                                    ),
                                                  ],
                                                  -1,
                                                )),
                                              e("div", Nd, [
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-icon",
                                                    disabled: A.value <= 1,
                                                    onClick: en,
                                                  },
                                                  " − ",
                                                  8,
                                                  Md,
                                                ),
                                                e("span", Ed, l(A.value), 1),
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-icon",
                                                    disabled:
                                                      A.value >= V.value,
                                                    onClick: tn,
                                                  },
                                                  " + ",
                                                  8,
                                                  Rd,
                                                ),
                                              ]),
                                            ]),
                                            e("div", Pd, [
                                              t[93] ||
                                                (t[93] = e(
                                                  "div",
                                                  { class: "counter-text" },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        class: "counter-title",
                                                      },
                                                      "Max",
                                                    ),
                                                  ],
                                                  -1,
                                                )),
                                              e("div", Od, [
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-icon",
                                                    disabled:
                                                      V.value <= A.value,
                                                    onClick: sn,
                                                  },
                                                  " − ",
                                                  8,
                                                  Ld,
                                                ),
                                                e("span", Bd, l(V.value), 1),
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-icon",
                                                    disabled: V.value >= je,
                                                    onClick: nn,
                                                  },
                                                  " + ",
                                                  8,
                                                  Fd,
                                                ),
                                              ]),
                                            ]),
                                            e("div", zd, [
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: "btn-reset-duration",
                                                  onClick: an,
                                                  disabled:
                                                    A.value === 1 &&
                                                    V.value === je,
                                                },
                                                " Reset to Any Duration ",
                                                8,
                                                Ud,
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        512,
                                      ),
                                      e("div", { class: "sidebar-actions" }, [
                                        e(
                                          "button",
                                          { class: "btn-primary", onClick: ua },
                                          " Apply ",
                                        ),
                                      ]),
                                    ],
                                    64,
                                  )),
                            ]),
                            me.value
                              ? M("", !0)
                              : (o(),
                                i("div", Gd, [
                                  e("div", Vd, [
                                    t[106] ||
                                      (t[106] = e(
                                        "h3",
                                        { class: "itinerary-title" },
                                        "Your Itinerary",
                                        -1,
                                      )),
                                    t[107] ||
                                      (t[107] = e(
                                        "p",
                                        { class: "itinerary-description" },
                                        " This is a summary of the accommodation you have selected. After submitting your booking request, a Komodo Cruises Journey Designer will make contact to book and confirm your trip. ",
                                        -1,
                                      )),
                                    t[108] ||
                                      (t[108] = e(
                                        "div",
                                        { class: "itinerary-divider" },
                                        null,
                                        -1,
                                      )),
                                    P.value.length === 0
                                      ? (o(),
                                        i(
                                          "div",
                                          Kd,
                                          " You haven't selected any options yet. ",
                                        ))
                                      : (o(),
                                        i("ul", qd, [
                                          (o(!0),
                                          i(
                                            G,
                                            null,
                                            ae(
                                              P.value,
                                              (n, d) => (
                                                o(),
                                                i(
                                                  "li",
                                                  {
                                                    key: n.addedAt,
                                                    class: "itinerary-item",
                                                  },
                                                  [
                                                    e("div", Wd, [
                                                      e("div", null, [
                                                        t[96] ||
                                                          (t[96] = e(
                                                            "div",
                                                            {
                                                              class:
                                                                "itinerary-type",
                                                            },
                                                            "CABIN",
                                                            -1,
                                                          )),
                                                        e(
                                                          "div",
                                                          Hd,
                                                          l(n.cabin),
                                                          1,
                                                        ),
                                                      ]),
                                                      e(
                                                        "button",
                                                        {
                                                          class:
                                                            "itinerary-remove-btn-top",
                                                          onClick: (p) => Pa(d),
                                                          title:
                                                            "Remove from itinerary",
                                                        },
                                                        [
                                                          ...(t[97] ||
                                                            (t[97] = [
                                                              e(
                                                                "svg",
                                                                {
                                                                  class:
                                                                    "action-icon",
                                                                  viewBox:
                                                                    "0 0 24 24",
                                                                  fill: "none",
                                                                  stroke:
                                                                    "currentColor",
                                                                  "stroke-width":
                                                                    "1.5",
                                                                },
                                                                [
                                                                  e("line", {
                                                                    x1: "18",
                                                                    y1: "6",
                                                                    x2: "6",
                                                                    y2: "18",
                                                                  }),
                                                                  e("line", {
                                                                    x1: "6",
                                                                    y1: "6",
                                                                    x2: "18",
                                                                    y2: "18",
                                                                  }),
                                                                ],
                                                                -1,
                                                              ),
                                                            ])),
                                                        ],
                                                        8,
                                                        Yd,
                                                      ),
                                                    ]),
                                                    e("div", Jd, [
                                                      t[99] ||
                                                        (t[99] = Oe(
                                                          '<svg class="itinerary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
                                                          1,
                                                        )),
                                                      e("span", jd, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          l(Nt(n.date)),
                                                          1,
                                                        ),
                                                        t[98] ||
                                                          (t[98] = Q(
                                                            " – ",
                                                            -1,
                                                          )),
                                                        e(
                                                          "strong",
                                                          null,
                                                          l(Nt(hn(n.date))),
                                                          1,
                                                        ),
                                                      ]),
                                                    ]),
                                                    e("div", Xd, [
                                                      t[100] ||
                                                        (t[100] = Oe(
                                                          '<svg class="itinerary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 15h18l-1.5 6h-15L3 15z"></path><rect x="5" y="8" width="14" height="7" rx="1"></rect><path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"></path><line x1="2" y1="15" x2="22" y2="15"></line></svg>',
                                                          1,
                                                        )),
                                                      e(
                                                        "span",
                                                        Qd,
                                                        l(n.ship),
                                                        1,
                                                      ),
                                                    ]),
                                                    e("div", Zd, [
                                                      e("div", ev, [
                                                        t[101] ||
                                                          (t[101] = e(
                                                            "svg",
                                                            {
                                                              class:
                                                                "itinerary-icon",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              fill: "none",
                                                              stroke:
                                                                "currentColor",
                                                              "stroke-width":
                                                                "1.5",
                                                            },
                                                            [
                                                              e("path", {
                                                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                                              }),
                                                              e("circle", {
                                                                cx: "12",
                                                                cy: "7",
                                                                r: "4",
                                                              }),
                                                            ],
                                                            -1,
                                                          )),
                                                        e(
                                                          "span",
                                                          tv,
                                                          l(n.guests || 2) +
                                                            " adult" +
                                                            l(
                                                              (n.guests || 2) >
                                                                1
                                                                ? "s"
                                                                : "",
                                                            ),
                                                          1,
                                                        ),
                                                      ]),
                                                      e(
                                                        "button",
                                                        {
                                                          class:
                                                            "btn-edit-item",
                                                          onClick: pe(
                                                            (p) => Aa(n, d),
                                                            ["stop"],
                                                          ),
                                                          title: "Edit Guests",
                                                        },
                                                        [
                                                          ...(t[102] ||
                                                            (t[102] = [
                                                              e(
                                                                "svg",
                                                                {
                                                                  xmlns:
                                                                    "http://www.w3.org/2000/svg",
                                                                  width: "14",
                                                                  height: "14",
                                                                  viewBox:
                                                                    "0 0 24 24",
                                                                  fill: "none",
                                                                  stroke:
                                                                    "currentColor",
                                                                  "stroke-width":
                                                                    "2",
                                                                  "stroke-linecap":
                                                                    "round",
                                                                  "stroke-linejoin":
                                                                    "round",
                                                                },
                                                                [
                                                                  e("path", {
                                                                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                                                                  }),
                                                                  e("path", {
                                                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                                                                  }),
                                                                ],
                                                                -1,
                                                              ),
                                                            ])),
                                                        ],
                                                        8,
                                                        sv,
                                                      ),
                                                    ]),
                                                    e("div", nv, [
                                                      e("div", av, [
                                                        t[103] ||
                                                          (t[103] = e(
                                                            "svg",
                                                            {
                                                              class:
                                                                "itinerary-icon",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              fill: "none",
                                                              stroke:
                                                                "currentColor",
                                                              "stroke-width":
                                                                "1.5",
                                                            },
                                                            [
                                                              e("rect", {
                                                                x: "2",
                                                                y: "6",
                                                                width: "20",
                                                                height: "12",
                                                                rx: "2",
                                                              }),
                                                              e("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "2",
                                                              }),
                                                              e("path", {
                                                                d: "M6 12h.01M18 12h.01",
                                                              }),
                                                            ],
                                                            -1,
                                                          )),
                                                        e(
                                                          "span",
                                                          ov,
                                                          l(n.cabin),
                                                          1,
                                                        ),
                                                      ]),
                                                      e(
                                                        "span",
                                                        iv,
                                                        l(_(n.price)),
                                                        1,
                                                      ),
                                                    ]),
                                                  ],
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ])),
                                    ss.value.hasPrice
                                      ? (o(),
                                        i("div", lv, [
                                          e("div", rv, [
                                            t[105] ||
                                              (t[105] = e(
                                                "span",
                                                {
                                                  class:
                                                    "itinerary-total-label-simple",
                                                },
                                                "EST. TOTAL",
                                                -1,
                                              )),
                                            e("div", cv, [
                                              e(
                                                "span",
                                                uv,
                                                l(ss.value.formattedTotal),
                                                1,
                                              ),
                                              t[104] ||
                                                (t[104] = e(
                                                  "span",
                                                  {
                                                    class: "itinerary-tax-note",
                                                  },
                                                  "(Tax Included)",
                                                  -1,
                                                )),
                                            ]),
                                          ]),
                                        ]))
                                      : P.value.length
                                        ? (o(),
                                          i(
                                            "p",
                                            dv,
                                            " Pricing for the selected cabins will be confirmed by our Journey Designers. ",
                                          ))
                                        : M("", !0),
                                    P.value.length
                                      ? (o(),
                                        i(
                                          "button",
                                          {
                                            key: 4,
                                            class: "btn-send-enquiry",
                                            onClick: Ca,
                                          },
                                          " Send Availability Enquiry ",
                                        ))
                                      : M("", !0),
                                    t[109] ||
                                      (t[109] = e(
                                        "a",
                                        {
                                          href: "#",
                                          class: "link-speak-with-us",
                                        },
                                        [
                                          Q(" Speak with us "),
                                          e("img", { src: Gs, alt: "" }),
                                        ],
                                        -1,
                                      )),
                                  ]),
                                ])),
                          ]),
                        ]),
                      ])),
                  Pe.value && oe.value
                    ? (o(),
                      i(
                        "div",
                        { key: 2, class: "modal-overlay", onClick: Es },
                        [
                          e(
                            "div",
                            {
                              class: "modal-content modal-content-redesigned",
                              onClick:
                                t[30] || (t[30] = pe(() => {}, ["stop"])),
                            },
                            [
                              e(
                                "button",
                                { class: "modal-close-details", onClick: Es },
                                "✕",
                              ),
                              e("div", vv, [
                                e("div", pv, [
                                  e("div", mv, [
                                    e("h2", fv, l(Ts(oe.value)), 1),
                                    t[110] ||
                                      (t[110] = e(
                                        "p",
                                        { class: "modal-cabin-subtitle" },
                                        "Room",
                                        -1,
                                      )),
                                  ]),
                                  e(
                                    "div",
                                    hv,
                                    " Sleeps " +
                                      l(Jn.value || 2) +
                                      " | " +
                                      l(wn(oe.value)) +
                                      " | " +
                                      l(ma(oe.value)),
                                    1,
                                  ),
                                  e(
                                    "blockquote",
                                    gv,
                                    ' "' + l(Yn.value) + '" ',
                                    1,
                                  ),
                                  e("div", bv, [
                                    t[111] ||
                                      (t[111] = e(
                                        "h3",
                                        { class: "modal-section-title" },
                                        "OVERVIEW",
                                        -1,
                                      )),
                                    e("div", yv, [
                                      e("ul", kv, [
                                        (o(!0),
                                        i(
                                          G,
                                          null,
                                          ae(
                                            Mt(oe.value).slice(0, 4),
                                            (n, d) => (
                                              o(),
                                              i("li", { key: d }, l(n), 1)
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]),
                                      Mt(oe.value).length > 4
                                        ? (o(),
                                          i("ul", wv, [
                                            (o(!0),
                                            i(
                                              G,
                                              null,
                                              ae(
                                                Mt(oe.value).slice(4, 8),
                                                (n, d) => (
                                                  o(),
                                                  i(
                                                    "li",
                                                    { key: d + 4 },
                                                    l(n),
                                                    1,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]))
                                        : M("", !0),
                                    ]),
                                  ]),
                                  e("div", _v, [
                                    t[112] ||
                                      (t[112] = e(
                                        "h3",
                                        { class: "modal-section-title" },
                                        "AMENITIES & FEATURES",
                                        -1,
                                      )),
                                    e("div", Cv, [
                                      e("ul", $v, [
                                        (o(!0),
                                        i(
                                          G,
                                          null,
                                          ae(
                                            _s.value.slice(0, 3),
                                            (n, d) => (
                                              o(),
                                              i("li", { key: d }, l(n), 1)
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]),
                                      _s.value.length > 3
                                        ? (o(),
                                          i("ul", Sv, [
                                            (o(!0),
                                            i(
                                              G,
                                              null,
                                              ae(
                                                _s.value.slice(3, 6),
                                                (n, d) => (
                                                  o(),
                                                  i(
                                                    "li",
                                                    { key: d + 3 },
                                                    l(n),
                                                    1,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]))
                                        : M("", !0),
                                    ]),
                                  ]),
                                ]),
                                e("div", xv, [
                                  (o(),
                                  i(
                                    "img",
                                    {
                                      src: Y(),
                                      alt: oe.value.cabinName,
                                      referrerpolicy: "no-referrer",
                                      class: "modal-cabin-image",
                                      key: X.value,
                                      onError:
                                        t[28] ||
                                        (t[28] = (n) => $n(n, oe.value.image)),
                                    },
                                    null,
                                    40,
                                    Dv,
                                  )),
                                  e(
                                    "button",
                                    {
                                      class:
                                        "modal-gallery-nav modal-gallery-prev",
                                      onClick: W,
                                      "aria-label": "Previous",
                                    },
                                    " ‹ ",
                                  ),
                                  e(
                                    "button",
                                    {
                                      class:
                                        "modal-gallery-nav modal-gallery-next",
                                      onClick: R,
                                      "aria-label": "Next",
                                    },
                                    " › ",
                                  ),
                                  e("div", Av, [
                                    Q(l(Ts(oe.value)) + " ", 1),
                                    e(
                                      "span",
                                      Tv,
                                      l(X.value + 1) +
                                        " of " +
                                        l(ce().length || 1),
                                      1,
                                    ),
                                  ]),
                                ]),
                              ]),
                              e("div", Iv, [
                                e("div", Nv, [
                                  e("div", Mv, [
                                    e(
                                      "span",
                                      Ev,
                                      l(ws.value || "Price on request"),
                                      1,
                                    ),
                                    ws.value
                                      ? (o(), i("span", Rv, "/Night"))
                                      : M("", !0),
                                  ]),
                                  t[113] ||
                                    (t[113] = e(
                                      "span",
                                      { class: "price-note" },
                                      "Excluding taxes and fees",
                                      -1,
                                    )),
                                ]),
                                e(
                                  "button",
                                  {
                                    class: "modal-book-btn",
                                    onClick:
                                      t[29] ||
                                      (t[29] = (n) => {
                                        (Dn(oe.value), Es());
                                      }),
                                  },
                                  l(
                                    xn(oe.value)
                                      ? "Remove from itinerary"
                                      : "RESERVE NOW",
                                  ),
                                  1,
                                ),
                              ]),
                            ],
                          ),
                        ],
                      ))
                    : M("", !0),
                  Qe.value
                    ? (o(),
                      i(
                        "div",
                        { key: 3, class: "guest-modal-overlay", onClick: rs },
                        [
                          e(
                            "div",
                            {
                              class: "guest-modal-content",
                              onClick:
                                t[31] || (t[31] = pe(() => {}, ["stop"])),
                            },
                            [
                              e(
                                "button",
                                { class: "guest-modal-close", onClick: rs },
                                "✕",
                              ),
                              t[116] ||
                                (t[116] = e(
                                  "div",
                                  { class: "guest-modal-header" },
                                  [
                                    e(
                                      "h3",
                                      { class: "guest-modal-title" },
                                      "Number of Guests",
                                    ),
                                  ],
                                  -1,
                                )),
                              e("div", Pv, [
                                t[115] ||
                                  (t[115] = e(
                                    "p",
                                    { class: "guest-modal-description" },
                                    " Please indicate how many guests will be accommodated: ",
                                    -1,
                                  )),
                                e("div", Ov, [
                                  e("div", Lv, [
                                    t[114] ||
                                      (t[114] = e(
                                        "div",
                                        { class: "guest-counter-label" },
                                        "Guests",
                                        -1,
                                      )),
                                    e("div", Bv, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "guest-counter-btn",
                                          onClick: xa,
                                          disabled: $e.value <= 1,
                                        },
                                        " − ",
                                        8,
                                        Fv,
                                      ),
                                      e("span", zv, l($e.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "guest-counter-btn",
                                          onClick: Sa,
                                          disabled: $e.value >= Ds.value,
                                        },
                                        " + ",
                                        8,
                                        Uv,
                                      ),
                                    ]),
                                  ]),
                                  e("div", Gv, [
                                    Q(
                                      l(
                                        ((r = Te.value) == null
                                          ? void 0
                                          : r.availableText) || "1 available",
                                      ) + " ",
                                      1,
                                    ),
                                    (c = Te.value) != null && c.capacityText
                                      ? (o(),
                                        i(
                                          "span",
                                          Vv,
                                          " • Max " + l(Ds.value) + " guests",
                                          1,
                                        ))
                                      : M("", !0),
                                  ]),
                                ]),
                                e("div", Kv, [
                                  e(
                                    "button",
                                    { class: "btn-submit-guest", onClick: Da },
                                    l(
                                      Ye.value !== null
                                        ? "Update Itinerary"
                                        : "Add to Itinerary",
                                    ),
                                    1,
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                        ],
                      ))
                    : M("", !0),
                  Le.value
                    ? (o(),
                      i("div", qv, [
                        e("div", Wv, [
                          e("div", { class: "enquiry-modal-header" }, [
                            t[117] ||
                              (t[117] = e(
                                "h2",
                                { class: "enquiry-modal-title" },
                                "Plan your Trip",
                                -1,
                              )),
                            e(
                              "button",
                              { class: "enquiry-modal-close", onClick: $a },
                              " Close ✕ ",
                            ),
                          ]),
                          e("div", Hv, [
                            e("div", Yv, [
                              t[135] ||
                                (t[135] = e(
                                  "p",
                                  { class: "enquiry-intro" },
                                  " Please complete the form below and one of our Journey Designers will contact you shortly to plan your trip. ",
                                  -1,
                                )),
                              e(
                                "form",
                                {
                                  class: "enquiry-form",
                                  onSubmit: pe(Oa, ["prevent"]),
                                },
                                [
                                  e("div", Jv, [
                                    e("div", jv, [
                                      t[119] ||
                                        (t[119] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Title",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "select",
                                          {
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[32] ||
                                              (t[32] = (n) =>
                                                (te.value.title = n)),
                                          },
                                          [
                                            ...(t[118] ||
                                              (t[118] = [
                                                Oe(
                                                  '<option value="">Select</option><option value="Mr">Mr</option><option value="Mrs">Mrs</option><option value="Ms">Ms</option><option value="Dr">Dr</option>',
                                                  5,
                                                ),
                                              ])),
                                          ],
                                          512,
                                        ),
                                        [[ds, te.value.title]],
                                      ),
                                    ]),
                                    e("div", Xv, [
                                      t[120] ||
                                        (t[120] = e(
                                          "label",
                                          { class: "form-label" },
                                          "First Name",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "text",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[33] ||
                                              (t[33] = (n) =>
                                                (te.value.firstName = n)),
                                            required: "",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[gt, te.value.firstName]],
                                      ),
                                    ]),
                                    e("div", Qv, [
                                      t[121] ||
                                        (t[121] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Last Name",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "text",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[34] ||
                                              (t[34] = (n) =>
                                                (te.value.lastName = n)),
                                            required: "",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[gt, te.value.lastName]],
                                      ),
                                    ]),
                                  ]),
                                  e("div", Zv, [
                                    e("div", ep, [
                                      t[123] ||
                                        (t[123] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Contact Number",
                                          -1,
                                        )),
                                      e("div", tp, [
                                        ge(
                                          e(
                                            "select",
                                            {
                                              class: "phone-country",
                                              "onUpdate:modelValue":
                                                t[35] ||
                                                (t[35] = (n) =>
                                                  (te.value.phoneCountry = n)),
                                            },
                                            [
                                              ...(t[122] ||
                                                (t[122] = [
                                                  Oe(
                                                    '<option value="+62">🇮🇩 +62</option><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option><option value="+61">🇦🇺 +61</option><option value="+65">🇸🇬 +65</option><option value="+60">🇲🇾 +60</option>',
                                                    6,
                                                  ),
                                                ])),
                                            ],
                                            512,
                                          ),
                                          [[ds, te.value.phoneCountry]],
                                        ),
                                        ge(
                                          e(
                                            "input",
                                            {
                                              type: "tel",
                                              class: "form-control",
                                              "onUpdate:modelValue":
                                                t[36] ||
                                                (t[36] = (n) =>
                                                  (te.value.phoneNumber = n)),
                                              placeholder: "812345678",
                                            },
                                            null,
                                            512,
                                          ),
                                          [[gt, te.value.phoneNumber]],
                                        ),
                                      ]),
                                    ]),
                                    e("div", sp, [
                                      t[125] ||
                                        (t[125] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Country",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "select",
                                          {
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[37] ||
                                              (t[37] = (n) =>
                                                (te.value.country = n)),
                                          },
                                          [
                                            ...(t[124] ||
                                              (t[124] = [
                                                Oe(
                                                  '<option value="">Select Country</option><option value="Indonesia">Indonesia</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Australia">Australia</option><option value="Singapore">Singapore</option><option value="Malaysia">Malaysia</option>',
                                                  7,
                                                ),
                                              ])),
                                          ],
                                          512,
                                        ),
                                        [[ds, te.value.country]],
                                      ),
                                    ]),
                                  ]),
                                  e("div", np, [
                                    e("div", ap, [
                                      t[126] ||
                                        (t[126] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Email",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "email",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[38] ||
                                              (t[38] = (n) =>
                                                (te.value.email = n)),
                                            required: "",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[gt, te.value.email]],
                                      ),
                                    ]),
                                    e("div", op, [
                                      t[127] ||
                                        (t[127] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Confirm Email Address",
                                          -1,
                                        )),
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "email",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[39] ||
                                              (t[39] = (n) =>
                                                (te.value.confirmEmail = n)),
                                            required: "",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[gt, te.value.confirmEmail]],
                                      ),
                                    ]),
                                  ]),
                                  e("div", ip, [
                                    t[129] ||
                                      (t[129] = e(
                                        "label",
                                        { class: "form-label" },
                                        "I am a:",
                                        -1,
                                      )),
                                    ge(
                                      e(
                                        "select",
                                        {
                                          class: "form-control",
                                          "onUpdate:modelValue":
                                            t[40] ||
                                            (t[40] = (n) =>
                                              (te.value.userType = n)),
                                        },
                                        [
                                          ...(t[128] ||
                                            (t[128] = [
                                              e(
                                                "option",
                                                { value: "" },
                                                "Select",
                                                -1,
                                              ),
                                              e(
                                                "option",
                                                { value: "guest" },
                                                "Guest",
                                                -1,
                                              ),
                                              e(
                                                "option",
                                                { value: "agent" },
                                                "Travel Agent",
                                                -1,
                                              ),
                                            ])),
                                        ],
                                        512,
                                      ),
                                      [[ds, te.value.userType]],
                                    ),
                                  ]),
                                  e("div", lp, [
                                    t[130] ||
                                      (t[130] = e(
                                        "label",
                                        { class: "form-label" },
                                        "Is there anything else you'd like to let us know?",
                                        -1,
                                      )),
                                    ge(
                                      e(
                                        "textarea",
                                        {
                                          class: "form-control form-textarea",
                                          rows: "4",
                                          "onUpdate:modelValue":
                                            t[41] ||
                                            (t[41] = (n) =>
                                              (te.value.notes = n)),
                                        },
                                        null,
                                        512,
                                      ),
                                      [[gt, te.value.notes]],
                                    ),
                                  ]),
                                  e("div", rp, [
                                    e("label", cp, [
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "checkbox",
                                            "onUpdate:modelValue":
                                              t[42] ||
                                              (t[42] = (n) =>
                                                (te.value.subscribeNews = n)),
                                          },
                                          null,
                                          512,
                                        ),
                                        [[ht, te.value.subscribeNews]],
                                      ),
                                      t[131] ||
                                        (t[131] = e(
                                          "span",
                                          null,
                                          "Sign up to receive news and blog posts from Komodo Cruises",
                                          -1,
                                        )),
                                    ]),
                                    e("label", up, [
                                      ge(
                                        e(
                                          "input",
                                          {
                                            type: "checkbox",
                                            "onUpdate:modelValue":
                                              t[43] ||
                                              (t[43] = (n) =>
                                                (te.value.consentData = n)),
                                            required: "",
                                          },
                                          null,
                                          512,
                                        ),
                                        [[ht, te.value.consentData]],
                                      ),
                                      t[132] ||
                                        (t[132] = e(
                                          "span",
                                          null,
                                          "I consent to my submitted data being collected and stored",
                                          -1,
                                        )),
                                    ]),
                                  ]),
                                  t[133] ||
                                    (t[133] = e(
                                      "p",
                                      { class: "form-note" },
                                      [
                                        e("strong", null, "PLEASE NOTE:"),
                                        Q(
                                          " These results indicate availability and do not guarantee a booking. One of our Journey Designers will contact you shortly to plan your trip. ",
                                        ),
                                      ],
                                      -1,
                                    )),
                                  e(
                                    "button",
                                    {
                                      type: "submit",
                                      class: "btn-submit-enquiry",
                                      disabled: tt.value,
                                    },
                                    l(
                                      tt.value
                                        ? "PROCESSING..."
                                        : "PROCEED TO PAYMENT",
                                    ),
                                    9,
                                    dp,
                                  ),
                                  t[134] ||
                                    (t[134] = e(
                                      "p",
                                      { class: "form-recaptcha" },
                                      " This form is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply. ",
                                      -1,
                                    )),
                                ],
                                32,
                              ),
                            ]),
                            e("div", vp, [
                              t[139] ||
                                (t[139] = e(
                                  "h3",
                                  { class: "summary-title" },
                                  "Your Itinerary",
                                  -1,
                                )),
                              t[140] ||
                                (t[140] = e(
                                  "p",
                                  { class: "summary-description" },
                                  " This is a summary of the accommodation you've selected. One of our Komodo Cruises Journey Designers will contact you shortly to plan your trip. ",
                                  -1,
                                )),
                              e("div", pp, [
                                (o(!0),
                                i(
                                  G,
                                  null,
                                  ae(
                                    P.value,
                                    (n, d) => (
                                      o(),
                                      i(
                                        "div",
                                        { key: d, class: "summary-item" },
                                        [
                                          e("div", mp, [
                                            e("h4", fp, l(n.ship), 1),
                                          ]),
                                          e("div", hp, [
                                            e("p", gp, l(n.cabin), 1),
                                            e(
                                              "p",
                                              bp,
                                              l(n.guests || 2) +
                                                " Guest" +
                                                l(
                                                  (n.guests || 2) > 1
                                                    ? "s"
                                                    : "",
                                                ),
                                              1,
                                            ),
                                            e(
                                              "p",
                                              yp,
                                              l(Nt(n.date)) +
                                                " → " +
                                                l(Nt(hn(n.date))),
                                              1,
                                            ),
                                          ]),
                                          n.price
                                            ? (o(),
                                              i("div", kp, [
                                                e("div", wp, [
                                                  t[136] ||
                                                    (t[136] = e(
                                                      "span",
                                                      {
                                                        class: "pricing-label",
                                                      },
                                                      "Price per cabin",
                                                      -1,
                                                    )),
                                                  e("span", _p, l(n.price), 1),
                                                ]),
                                                e("div", Cp, [
                                                  e(
                                                    "span",
                                                    $p,
                                                    "× " +
                                                      l(n.guests || 2) +
                                                      " guest" +
                                                      l(
                                                        (n.guests || 2) > 1
                                                          ? "s"
                                                          : "",
                                                      ),
                                                    1,
                                                  ),
                                                  e("span", Sp, l(wa(n)), 1),
                                                ]),
                                              ]))
                                            : M("", !0),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              ss.value.hasPrice
                                ? (o(),
                                  i("div", xp, [
                                    t[138] ||
                                      (t[138] = e(
                                        "div",
                                        { class: "enquiry-total-divider" },
                                        null,
                                        -1,
                                      )),
                                    e("div", Dp, [
                                      e("div", Ap, [
                                        t[137] ||
                                          (t[137] = e(
                                            "span",
                                            { class: "enquiry-total-label" },
                                            "Total Price",
                                            -1,
                                          )),
                                        e(
                                          "span",
                                          Tp,
                                          l(ss.value.formattedTotal),
                                          1,
                                        ),
                                      ]),
                                    ]),
                                  ]))
                                : P.value.length
                                  ? (o(),
                                    i(
                                      "p",
                                      Ip,
                                      " Pricing for the selected cabins will be confirmed by our Journey Designers. ",
                                    ))
                                  : M("", !0),
                            ]),
                          ]),
                        ]),
                      ]))
                    : M("", !0),
                  e("footer", Np, [
                    e("div", Mp, [
                      e("div", Ep, [
                        t[144] ||
                          (t[144] = e(
                            "div",
                            { class: "hf-brand" },
                            [
                              e("div", { class: "hf-logo" }, "KOMODO CRUISES"),
                              e(
                                "div",
                                { class: "hf-copy" },
                                "Rare journeys across the Komodo Islands.",
                              ),
                            ],
                            -1,
                          )),
                        e("nav", Rp, [
                          e(
                            "a",
                            { href: "#", onClick: pe(Ma, ["prevent"]) },
                            "Plan your trip",
                          ),
                          t[141] ||
                            (t[141] = e("a", { href: "#" }, "Experiences", -1)),
                          t[142] ||
                            (t[142] = e("a", { href: "#" }, "Our story", -1)),
                          t[143] ||
                            (t[143] = e("a", { href: "#" }, "Contact", -1)),
                        ]),
                        t[145] ||
                          (t[145] = Oe(
                            '<div class="hf-contact"><div class="hf-contact-title">Contact Us</div><div class="hf-contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+6285282296450">+62 852-8229-6450</a></div><div class="hf-contact-address"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran, Jakarta Selatan 12780</span></div></div>',
                            1,
                          )),
                      ]),
                      e("div", Pp, [
                        e(
                          "div",
                          Op,
                          " © " +
                            l(new Date().getFullYear()) +
                            " Komodo Cruises | PT CANARD MONEY INDONESIA ",
                          1,
                        ),
                        t[146] ||
                          (t[146] = e(
                            "div",
                            { class: "hf-disclaimer" },
                            " All voyages subject to weather and park regulations. ",
                            -1,
                          )),
                      ]),
                    ]),
                  ]),
                ]),
                (o(),
                Ht(zn, { to: "body" }, [
                  C.value
                    ? (o(),
                      i(
                        "div",
                        {
                          key: 0,
                          class: "mobile-filter-modal-overlay",
                          onClick:
                            t[57] ||
                            (t[57] = pe((n) => (C.value = !1), ["self"])),
                        },
                        [
                          e("div", Lp, [
                            e("div", Bp, [
                              t[148] ||
                                (t[148] = e(
                                  "h3",
                                  null,
                                  "Check Availability",
                                  -1,
                                )),
                              e(
                                "button",
                                {
                                  class: "modal-close-btn",
                                  onClick:
                                    t[44] || (t[44] = (n) => (C.value = !1)),
                                },
                                [
                                  ...(t[147] ||
                                    (t[147] = [
                                      e("span", null, "Close", -1),
                                      Q(" ✕ ", -1),
                                    ])),
                                ],
                              ),
                            ]),
                            e("div", Fp, [
                              e("div", zp, [
                                t[149] ||
                                  (t[149] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Destinations",
                                    -1,
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[45] ||
                                      (t[45] = (n) => (h.value = !h.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      "Destinations: " + l(Ee.value.length),
                                      1,
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: h.value ? be(ut) : be(ct),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      Up,
                                    ),
                                  ],
                                ),
                                h.value
                                  ? (o(),
                                    i("div", Gp, [
                                      e(
                                        "div",
                                        { class: "dropdown-group-title" },
                                        l(ms),
                                      ),
                                      (o(),
                                      i(
                                        G,
                                        null,
                                        ae(Yt, (n) =>
                                          e(
                                            "div",
                                            {
                                              class: "list-row",
                                              key: n,
                                              onClick: (d) => Js(n),
                                            },
                                            [
                                              e("div", Kp, l(n), 1),
                                              ge(
                                                e(
                                                  "input",
                                                  {
                                                    class: "check",
                                                    type: "checkbox",
                                                    value: n,
                                                    "onUpdate:modelValue":
                                                      t[46] ||
                                                      (t[46] = (d) =>
                                                        (Ee.value = d)),
                                                    onClick:
                                                      t[47] ||
                                                      (t[47] = pe(() => {}, [
                                                        "stop",
                                                      ])),
                                                  },
                                                  null,
                                                  8,
                                                  qp,
                                                ),
                                                [[ht, Ee.value]],
                                              ),
                                            ],
                                            8,
                                            Vp,
                                          ),
                                        ),
                                        64,
                                      )),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", Wp, [
                                t[150] ||
                                  (t[150] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Ships",
                                    -1,
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[48] ||
                                      (t[48] = (n) => (g.value = !g.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      "Ships: " + l($.value.length),
                                      1,
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: g.value ? be(ut) : be(ct),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      Hp,
                                    ),
                                  ],
                                ),
                                g.value
                                  ? (o(),
                                    i("div", Yp, [
                                      e("div", Jp, l(vn.value), 1),
                                      Tt.value
                                        ? (o(),
                                          i("div", jp, "Loading ships..."))
                                        : (o(!0),
                                          i(
                                            G,
                                            { key: 1 },
                                            ae(
                                              lt.value,
                                              (n) => (
                                                o(),
                                                i(
                                                  "div",
                                                  {
                                                    class: "list-row",
                                                    key: n.id,
                                                    onClick: (d) => js(n.id),
                                                  },
                                                  [
                                                    e("div", Qp, l(n.label), 1),
                                                    ge(
                                                      e(
                                                        "input",
                                                        {
                                                          class: "check",
                                                          type: "checkbox",
                                                          value: n.id,
                                                          "onUpdate:modelValue":
                                                            t[49] ||
                                                            (t[49] = (d) =>
                                                              ($.value = d)),
                                                          onClick:
                                                            t[50] ||
                                                            (t[50] =
                                                              pe(() => {}, [
                                                                "stop",
                                                              ])),
                                                        },
                                                        null,
                                                        8,
                                                        Zp,
                                                      ),
                                                      [[ht, $.value]],
                                                    ),
                                                  ],
                                                  8,
                                                  Xp,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", e1, [
                                t[157] ||
                                  (t[157] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Cabins & Guests",
                                    -1,
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[51] ||
                                      (t[51] = (n) => (v.value = !v.value)),
                                  },
                                  [
                                    he.value
                                      ? (o(),
                                        i(
                                          "span",
                                          t1,
                                          "Flexible: " +
                                            l(_e.value) +
                                            " Guest" +
                                            l(_e.value !== 1 ? "s" : ""),
                                          1,
                                        ))
                                      : (o(),
                                        i(
                                          "span",
                                          s1,
                                          l(ee.value.length) +
                                            " Cabin" +
                                            l(
                                              ee.value.length !== 1 ? "s" : "",
                                            ) +
                                            ", " +
                                            l(Fe.value) +
                                            " Guest" +
                                            l(Fe.value !== 1 ? "s" : ""),
                                          1,
                                        )),
                                    e(
                                      "img",
                                      {
                                        src: v.value ? be(ut) : be(ct),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      n1,
                                    ),
                                  ],
                                ),
                                v.value
                                  ? (o(),
                                    i("div", a1, [
                                      e("div", o1, [
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "sidebar-pill-btn",
                                              { active: he.value },
                                            ]),
                                            onClick:
                                              t[52] ||
                                              (t[52] = (n) => (he.value = !0)),
                                          },
                                          " Flexible ",
                                          2,
                                        ),
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "sidebar-pill-btn",
                                              { active: !he.value },
                                            ]),
                                            onClick:
                                              t[53] ||
                                              (t[53] = (n) => (he.value = !1)),
                                          },
                                          " Structured ",
                                          2,
                                        ),
                                      ]),
                                      he.value
                                        ? (o(),
                                          i("div", i1, [
                                            e("div", l1, [
                                              t[151] ||
                                                (t[151] = e(
                                                  "span",
                                                  { class: "label" },
                                                  "Total Guests",
                                                  -1,
                                                )),
                                              e("div", r1, [
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-ctrl",
                                                    disabled: _e.value <= 1,
                                                    onClick:
                                                      t[54] ||
                                                      (t[54] = (n) =>
                                                        _e.value--),
                                                  },
                                                  " − ",
                                                  8,
                                                  c1,
                                                ),
                                                e("span", u1, l(_e.value), 1),
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-ctrl",
                                                    onClick:
                                                      t[55] ||
                                                      (t[55] = (n) =>
                                                        _e.value++),
                                                  },
                                                  " + ",
                                                ),
                                              ]),
                                            ]),
                                            t[152] ||
                                              (t[152] = e(
                                                "p",
                                                { class: "sidebar-note" },
                                                " We will automatically find the best cabin combination for your group. ",
                                                -1,
                                              )),
                                          ]))
                                        : (o(),
                                          i("div", d1, [
                                            (o(!0),
                                            i(
                                              G,
                                              null,
                                              ae(
                                                ee.value,
                                                (n, d) => (
                                                  o(),
                                                  i(
                                                    "div",
                                                    {
                                                      key: n.id,
                                                      class:
                                                        "cabin-accordion-sidebar",
                                                    },
                                                    [
                                                      e("div", v1, [
                                                        e("div", p1, [
                                                          e(
                                                            "span",
                                                            m1,
                                                            "CABIN " + l(d + 1),
                                                            1,
                                                          ),
                                                          e(
                                                            "span",
                                                            f1,
                                                            l(
                                                              n.adults +
                                                                n.children,
                                                            ) +
                                                              " guest" +
                                                              l(
                                                                n.adults +
                                                                  n.children !==
                                                                  1
                                                                  ? "s"
                                                                  : "",
                                                              ),
                                                            1,
                                                          ),
                                                        ]),
                                                        e("div", h1, [
                                                          ee.value.length > 1
                                                            ? (o(),
                                                              i(
                                                                "button",
                                                                {
                                                                  key: 0,
                                                                  type: "button",
                                                                  class:
                                                                    "cabin-remove-btn-sidebar",
                                                                  onClick: pe(
                                                                    (p) =>
                                                                      Qs(d),
                                                                    ["stop"],
                                                                  ),
                                                                  title:
                                                                    "Remove cabin",
                                                                },
                                                                [
                                                                  ...(t[153] ||
                                                                    (t[153] = [
                                                                      e(
                                                                        "svg",
                                                                        {
                                                                          width:
                                                                            "14",
                                                                          height:
                                                                            "14",
                                                                          viewBox:
                                                                            "0 0 24 24",
                                                                          fill: "none",
                                                                          stroke:
                                                                            "currentColor",
                                                                          "stroke-width":
                                                                            "2",
                                                                        },
                                                                        [
                                                                          e(
                                                                            "path",
                                                                            {
                                                                              d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z",
                                                                            },
                                                                          ),
                                                                        ],
                                                                        -1,
                                                                      ),
                                                                    ])),
                                                                ],
                                                                8,
                                                                g1,
                                                              ))
                                                            : M("", !0),
                                                          e(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              class:
                                                                "cabin-toggle-btn-sidebar",
                                                              onClick: pe(
                                                                (p) => Zs(d),
                                                                ["stop"],
                                                              ),
                                                            },
                                                            [
                                                              (o(),
                                                              i(
                                                                "svg",
                                                                {
                                                                  class: B([
                                                                    "cabin-chevron-sidebar",
                                                                    {
                                                                      expanded:
                                                                        n.expanded,
                                                                    },
                                                                  ]),
                                                                  width: "16",
                                                                  height: "16",
                                                                  viewBox:
                                                                    "0 0 24 24",
                                                                  fill: "none",
                                                                  stroke:
                                                                    "currentColor",
                                                                  "stroke-width":
                                                                    "2",
                                                                },
                                                                [
                                                                  ...(t[154] ||
                                                                    (t[154] = [
                                                                      e(
                                                                        "polyline",
                                                                        {
                                                                          points:
                                                                            "6 9 12 15 18 9",
                                                                        },
                                                                        null,
                                                                        -1,
                                                                      ),
                                                                    ])),
                                                                ],
                                                                2,
                                                              )),
                                                            ],
                                                            8,
                                                            b1,
                                                          ),
                                                        ]),
                                                      ]),
                                                      n.expanded
                                                        ? (o(),
                                                          i("div", y1, [
                                                            e("div", k1, [
                                                              t[155] ||
                                                                (t[155] = e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "counter-label-sidebar",
                                                                  },
                                                                  "Adults",
                                                                  -1,
                                                                )),
                                                              e("div", w1, [
                                                                e(
                                                                  "button",
                                                                  {
                                                                    type: "button",
                                                                    class:
                                                                      "btn-icon-sm",
                                                                    disabled:
                                                                      n.adults <=
                                                                      1,
                                                                    onClick: (
                                                                      p,
                                                                    ) =>
                                                                      Qt(
                                                                        d,
                                                                        "adults",
                                                                      ),
                                                                  },
                                                                  " − ",
                                                                  8,
                                                                  _1,
                                                                ),
                                                                e(
                                                                  "span",
                                                                  C1,
                                                                  l(n.adults),
                                                                  1,
                                                                ),
                                                                e(
                                                                  "button",
                                                                  {
                                                                    type: "button",
                                                                    class:
                                                                      "btn-icon-sm",
                                                                    disabled:
                                                                      n.adults +
                                                                        n.children >=
                                                                      Kt,
                                                                    onClick: (
                                                                      p,
                                                                    ) =>
                                                                      Xt(
                                                                        d,
                                                                        "adults",
                                                                      ),
                                                                  },
                                                                  " + ",
                                                                  8,
                                                                  $1,
                                                                ),
                                                              ]),
                                                            ]),
                                                            e("div", S1, [
                                                              t[156] ||
                                                                (t[156] = e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "counter-label-sidebar",
                                                                  },
                                                                  "Children",
                                                                  -1,
                                                                )),
                                                              e("div", x1, [
                                                                e(
                                                                  "button",
                                                                  {
                                                                    type: "button",
                                                                    class:
                                                                      "btn-icon-sm",
                                                                    disabled:
                                                                      n.children <=
                                                                      0,
                                                                    onClick: (
                                                                      p,
                                                                    ) =>
                                                                      Qt(
                                                                        d,
                                                                        "children",
                                                                      ),
                                                                  },
                                                                  " − ",
                                                                  8,
                                                                  D1,
                                                                ),
                                                                e(
                                                                  "span",
                                                                  A1,
                                                                  l(n.children),
                                                                  1,
                                                                ),
                                                                e(
                                                                  "button",
                                                                  {
                                                                    type: "button",
                                                                    class:
                                                                      "btn-icon-sm",
                                                                    disabled:
                                                                      n.adults +
                                                                        n.children >=
                                                                      Kt,
                                                                    onClick: (
                                                                      p,
                                                                    ) =>
                                                                      Xt(
                                                                        d,
                                                                        "children",
                                                                      ),
                                                                  },
                                                                  " + ",
                                                                  8,
                                                                  T1,
                                                                ),
                                                              ]),
                                                            ]),
                                                          ]))
                                                        : M("", !0),
                                                    ],
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                            Ft.value
                                              ? (o(),
                                                i(
                                                  "button",
                                                  {
                                                    key: 0,
                                                    type: "button",
                                                    class:
                                                      "btn-add-cabin-sidebar",
                                                    onClick: Xs,
                                                  },
                                                  " + Add Another Cabin ",
                                                ))
                                              : M("", !0),
                                          ])),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", I1, [
                                t[159] ||
                                  (t[159] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Dates",
                                    -1,
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[56] ||
                                      (t[56] = (n) => (E.value = !E.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      l(
                                        y.value
                                          ? `${y.value} → ${H.value || "..."}`
                                          : "Select dates",
                                      ),
                                      1,
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: E.value ? be(ut) : be(ct),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      N1,
                                    ),
                                  ],
                                ),
                                E.value
                                  ? (o(),
                                    i("div", M1, [
                                      e("div", E1, [
                                        e("div", R1, [
                                          e("h4", P1, l(on.value), 1),
                                          e(
                                            "div",
                                            { class: "calendar-nav-group" },
                                            [
                                              e(
                                                "button",
                                                {
                                                  class: "calendar-nav",
                                                  onClick: un,
                                                  type: "button",
                                                },
                                                " ‹ ",
                                              ),
                                              e(
                                                "button",
                                                {
                                                  class: "calendar-nav",
                                                  onClick: cn,
                                                  type: "button",
                                                },
                                                " › ",
                                              ),
                                            ],
                                          ),
                                        ]),
                                        e("div", O1, [
                                          t[158] ||
                                            (t[158] = e(
                                              "div",
                                              { class: "calendar-weekdays" },
                                              [
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Su",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Mo",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Tu",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "We",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Th",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Fr",
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Sa",
                                                ),
                                              ],
                                              -1,
                                            )),
                                          e("div", L1, [
                                            (o(!0),
                                            i(
                                              G,
                                              null,
                                              ae(
                                                ln.value,
                                                (n) => (
                                                  o(),
                                                  i(
                                                    "button",
                                                    {
                                                      key: n.key,
                                                      class: B([
                                                        "calendar-day",
                                                        {
                                                          "other-month":
                                                            !n.isCurrentMonth,
                                                          selected:
                                                            n.isSelected,
                                                          disabled:
                                                            !n.isSelectable,
                                                          past: n.isPast,
                                                          "in-range":
                                                            n.isInRange,
                                                          "range-start":
                                                            n.isRangeStart,
                                                          "range-end":
                                                            n.isRangeEnd,
                                                        },
                                                      ]),
                                                      disabled: !n.isSelectable,
                                                      onClick: (d) => dn(n),
                                                      type: "button",
                                                    },
                                                    l(n.date),
                                                    11,
                                                    B1,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                        ]),
                                      ]),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", F1, [
                                t[162] ||
                                  (t[162] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Trip Duration",
                                    -1,
                                  )),
                                e("div", z1, [
                                  e("div", U1, [
                                    t[160] ||
                                      (t[160] = e(
                                        "div",
                                        { class: "counter-text" },
                                        [
                                          e(
                                            "div",
                                            { class: "counter-title" },
                                            "Min",
                                          ),
                                        ],
                                        -1,
                                      )),
                                    e("div", G1, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: A.value <= 1,
                                          onClick: en,
                                        },
                                        " − ",
                                        8,
                                        V1,
                                      ),
                                      e("span", K1, l(A.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: A.value >= V.value,
                                          onClick: tn,
                                        },
                                        " + ",
                                        8,
                                        q1,
                                      ),
                                    ]),
                                  ]),
                                  e("div", W1, [
                                    t[161] ||
                                      (t[161] = e(
                                        "div",
                                        { class: "counter-text" },
                                        [
                                          e(
                                            "div",
                                            { class: "counter-title" },
                                            "Max",
                                          ),
                                        ],
                                        -1,
                                      )),
                                    e("div", H1, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: V.value <= A.value,
                                          onClick: sn,
                                        },
                                        " − ",
                                        8,
                                        Y1,
                                      ),
                                      e("span", J1, l(V.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: V.value >= je,
                                          onClick: nn,
                                        },
                                        " + ",
                                        8,
                                        j1,
                                      ),
                                    ]),
                                  ]),
                                  e("div", X1, [
                                    e(
                                      "button",
                                      {
                                        type: "button",
                                        class: "btn-reset-duration",
                                        onClick: an,
                                        disabled:
                                          A.value === 1 && V.value === je,
                                      },
                                      " Reset to Any Duration ",
                                      8,
                                      Q1,
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            e("div", { class: "mobile-filter-modal-footer" }, [
                              e(
                                "button",
                                { class: "btn-apply-modal", onClick: le },
                                " Apply ",
                              ),
                            ]),
                          ]),
                        ],
                      ))
                    : M("", !0),
                ])),
                ke(
                  Vs,
                  { isOpen: Be.value, onClose: Ea, onNavigateToResults: Ra },
                  null,
                  8,
                  ["isOpen"],
                ),
              ],
              64,
            )
          );
        }
      );
    },
  },
  tm = { class: "plan-wrap plan-page" },
  sm = { class: "plan-content" },
  nm = { class: "steps", role: "tablist", "aria-label": "Plan steps" },
  am = ["disabled"],
  om = ["disabled"],
  im = ["disabled"],
  lm = ["disabled"],
  rm = { key: 0 },
  cm = { class: "list" },
  um = { class: "list-text" },
  dm = ["value", "aria-label"],
  vm = { key: 1 },
  pm = { class: "list" },
  mm = { class: "list-text" },
  fm = ["value", "aria-label"],
  hm = { key: 2 },
  gm = { class: "date-range-display" },
  bm = { class: "date-value" },
  ym = { class: "date-value" },
  km = { class: "custom-calendar" },
  wm = { class: "calendar-header" },
  _m = { class: "calendar-title" },
  Cm = { class: "calendar-grid" },
  $m = { class: "calendar-days" },
  Sm = ["disabled", "onClick"],
  xm = { key: 3 },
  Dm = { class: "counters" },
  Am = { class: "counter-row" },
  Tm = { class: "counter-ctrls" },
  Im = { class: "count" },
  Nm = { class: "counter-row" },
  Mm = { class: "counter-ctrls" },
  Em = { class: "count" },
  Rm = { class: "counter-row" },
  Pm = { class: "counter-ctrls" },
  Om = { class: "count" },
  Lm = { class: "counter-row" },
  Bm = { class: "counter-ctrls" },
  Fm = { class: "count" },
  zm = { key: 4 },
  Um = { class: "mt-4" },
  Gm = { class: "mt-4" },
  Vm = { class: "mt-4", style: { "text-align": "right" } },
  Km = { class: "bottom-bar" },
  qm = {
    class: "nav-inner",
    style: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
    },
  },
  Wm = { key: 1 },
  Hm = "Nusa Tenggara Timur",
  Ym = {
    __name: "Plan",
    setup(x) {
      const b = m(1),
        f = ["Pulau Komodo", "Labuan Bajo"],
        C = [],
        h = m(""),
        g = m(""),
        v = m(""),
        E = m(""),
        j = m(2),
        I = m(0),
        le = m(0),
        se = m(0),
        Z = m(new Date().getMonth()),
        K = m(new Date().getFullYear()),
        q = ["Destinations", "Ships", "Dates", "Guests", "Submit"],
        Ae = D(() => q[b.value - 2] || ""),
        Se = D(() => (b.value < 5 ? q[b.value - 1] + " ›" : "Submit ›"));
      D(() => new Date().toISOString().split("T")[0]);
      const re = D(
          () =>
            `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Z.value]} ${K.value}`,
        ),
        O = D(() => {
          const ue = new Date(K.value, Z.value, 1),
            k = new Date(K.value, Z.value + 1, 0),
            Me = new Date(ue),
            P = new Date();
          Me.setDate(Me.getDate() - Me.getDay());
          const Te = [],
            Ye = new Date(k);
          Ye.setDate(Ye.getDate() + (6 - k.getDay()));
          for (let Pe = new Date(Me); Pe <= Ye; Pe.setDate(Pe.getDate() + 1)) {
            Pe.getDay();
            const Qe = Pe.getMonth() === Z.value,
              Le = new Date(Pe);
            Le.setHours(0, 0, 0, 0);
            const oe = new Date(P);
            oe.setHours(0, 0, 0, 0);
            const St = Le < oe,
              $e = Qe && !St,
              tt = Pe.toISOString().split("T")[0];
            let yt = !1,
              Je = !1,
              kt = !1;
            if (v.value && E.value && Qe) {
              const Ze = new Date(v.value + "T00:00:00"),
                et = new Date(E.value + "T00:00:00");
              Le >= Ze &&
                Le <= et &&
                ((yt = !0),
                Le.getTime() === Ze.getTime() && (Je = !0),
                Le.getTime() === et.getTime() && (kt = !0));
            }
            Te.push({
              key: Pe.getTime(),
              date: Pe.getDate(),
              fullDate: tt,
              isCurrentMonth: Qe,
              isSelectable: $e,
              isPast: St,
              isSelected: v.value === tt || E.value === tt,
              isInRange: yt,
              isRangeStart: Je,
              isRangeEnd: kt,
            });
          }
          return Te;
        }),
        X = D(() => !!h.value),
        ce = D(() => !!h.value && !!g.value),
        Y = D(() => !!h.value && !!g.value && !!v.value);
      at(h, () => {
        g.value = "";
      });
      function W(ue) {
        b.value = ue;
      }
      function R() {
        if (b.value === 1 && !h.value)
          return Be("Please select a destination first.");
        if (b.value === 2 && !g.value) return Be("Please select a ship first.");
        if (b.value === 3 && !v.value)
          return Be("Please select a start date first.");
        b.value < 5 ? b.value++ : fe();
      }
      function _() {
        b.value > 1 && b.value--;
      }
      function fe() {
        const ue = {
          region: Hm,
          destination: h.value,
          ship: g.value,
          lodges: g.value ? [g.value] : [],
          dateFrom: v.value,
          dateTo: E.value,
          adults: j.value,
          children: I.value,
          age3_9: le.value,
          age0_2: se.value,
          totalGuests: j.value + I.value + le.value + se.value,
          timestamp: Date.now(),
        };
        (localStorage.setItem("komodo_search_criteria", JSON.stringify(ue)),
          (window.location.href = "/results"));
      }
      function me(ue) {
        ue === "adults"
          ? j.value++
          : ue === "children"
            ? I.value++
            : ue === "age3_9"
              ? le.value++
              : ue === "age0_2" && se.value++;
      }
      function Ne(ue) {
        ue === "adults" && j.value > 0
          ? j.value--
          : ue === "children" && I.value > 0
            ? I.value--
            : ue === "age3_9" && le.value > 0
              ? le.value--
              : ue === "age0_2" && se.value > 0 && se.value--;
      }
      function Be(ue) {
        alert(ue);
      }
      function ne() {
        Z.value === 0 ? ((Z.value = 11), K.value--) : Z.value--;
      }
      function He() {
        Z.value === 11 ? ((Z.value = 0), K.value++) : Z.value++;
      }
      function ot(ue) {
        if (ue.isSelectable)
          if (!v.value || (v.value && E.value))
            ((v.value = ue.fullDate), (E.value = ""));
          else {
            const k = new Date(v.value + "T00:00:00");
            new Date(ue.fullDate + "T00:00:00") < k
              ? ((E.value = v.value), (v.value = ue.fullDate))
              : (E.value = ue.fullDate);
          }
      }
      return (ue, k) => {
        const Me = qt("router-link");
        return (
          o(),
          i("section", tm, [
            e("div", sm, [
              e("div", nm, [
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 1 }]),
                    onClick: k[0] || (k[0] = (P) => W(1)),
                  },
                  " Step 1 ",
                  2,
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 2 }]),
                    onClick: k[1] || (k[1] = (P) => W(2)),
                    disabled: !X.value,
                  },
                  " Step 2 ",
                  10,
                  am,
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 3 }]),
                    onClick: k[2] || (k[2] = (P) => W(3)),
                    disabled: !ce.value,
                  },
                  " Step 3 ",
                  10,
                  om,
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 4 }]),
                    onClick: k[3] || (k[3] = (P) => W(4)),
                    disabled: !Y.value,
                  },
                  " Step 4 ",
                  10,
                  im,
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 5 }]),
                    onClick: k[4] || (k[4] = (P) => W(5)),
                    disabled: !Y.value,
                  },
                  " Step 5 ",
                  10,
                  lm,
                ),
              ]),
              b.value === 1
                ? (o(),
                  i("div", rm, [
                    k[16] ||
                      (k[16] = e(
                        "h3",
                        { class: "step-title" },
                        "Destinations",
                        -1,
                      )),
                    k[17] ||
                      (k[17] = e(
                        "p",
                        { class: "results-note" },
                        [
                          Q(" Region: "),
                          e(
                            "span",
                            { class: "semibold" },
                            "Nusa Tenggara Timur",
                          ),
                        ],
                        -1,
                      )),
                    k[18] ||
                      (k[18] = e(
                        "p",
                        { class: "results-note" },
                        "Select a destination you're interested in:",
                        -1,
                      )),
                    e("div", cm, [
                      k[15] ||
                        (k[15] = e(
                          "div",
                          { class: "list-heading" },
                          "Nusa Tenggara Timur",
                          -1,
                        )),
                      (o(),
                      i(
                        G,
                        null,
                        ae(f, (P) =>
                          e("div", { class: "list-row", key: P }, [
                            e("div", um, l(P), 1),
                            ge(
                              e(
                                "input",
                                {
                                  class: "radio",
                                  type: "radio",
                                  name: "destination",
                                  value: P,
                                  "onUpdate:modelValue":
                                    k[5] || (k[5] = (Te) => (h.value = Te)),
                                  "aria-label": `Destination ${P}`,
                                },
                                null,
                                8,
                                dm,
                              ),
                              [[En, h.value]],
                            ),
                          ]),
                        ),
                        64,
                      )),
                    ]),
                  ]))
                : b.value === 2
                  ? (o(),
                    i("div", vm, [
                      k[19] ||
                        (k[19] = e("h3", { class: "step-title" }, "Ships", -1)),
                      k[20] ||
                        (k[20] = e(
                          "p",
                          { class: "results-note" },
                          "Please select a ship:",
                          -1,
                        )),
                      e("div", pm, [
                        (o(),
                        i(
                          G,
                          null,
                          ae(C, (P) =>
                            e("div", { class: "list-row", key: P }, [
                              e("div", mm, l(P), 1),
                              ge(
                                e(
                                  "input",
                                  {
                                    class: "radio",
                                    type: "radio",
                                    name: "ship",
                                    value: P,
                                    "onUpdate:modelValue":
                                      k[6] || (k[6] = (Te) => (g.value = Te)),
                                    "aria-label": `Ship ${P}`,
                                  },
                                  null,
                                  8,
                                  fm,
                                ),
                                [[En, g.value]],
                              ),
                            ]),
                          ),
                          64,
                        )),
                      ]),
                    ]))
                  : b.value === 3
                    ? (o(),
                      i("div", hm, [
                        k[23] ||
                          (k[23] = e(
                            "h3",
                            { class: "step-title" },
                            "Dates",
                            -1,
                          )),
                        k[24] ||
                          (k[24] = e(
                            "p",
                            { class: "results-note" },
                            "Select your travel dates:",
                            -1,
                          )),
                        k[25] ||
                          (k[25] = e(
                            "p",
                            { class: "results-note text-sm" },
                            " Click to select start date, then click again to select end date. ",
                            -1,
                          )),
                        e("div", gm, [
                          e("span", bm, l(v.value || "Start date"), 1),
                          k[21] ||
                            (k[21] = e(
                              "span",
                              { class: "date-arrow" },
                              "→",
                              -1,
                            )),
                          e("span", ym, l(E.value || "End date"), 1),
                        ]),
                        e("div", km, [
                          e("div", wm, [
                            e(
                              "button",
                              {
                                class: "calendar-nav",
                                onClick: ne,
                                type: "button",
                              },
                              " ‹ ",
                            ),
                            e("h4", _m, l(re.value), 1),
                            e(
                              "button",
                              {
                                class: "calendar-nav",
                                onClick: He,
                                type: "button",
                              },
                              " › ",
                            ),
                          ]),
                          e("div", Cm, [
                            k[22] ||
                              (k[22] = Oe(
                                '<div class="calendar-weekdays"><div class="weekday">Su</div><div class="weekday">Mo</div><div class="weekday">Tu</div><div class="weekday">We</div><div class="weekday">Th</div><div class="weekday">Fr</div><div class="weekday">Sa</div></div>',
                                1,
                              )),
                            e("div", $m, [
                              (o(!0),
                              i(
                                G,
                                null,
                                ae(
                                  O.value,
                                  (P) => (
                                    o(),
                                    i(
                                      "button",
                                      {
                                        key: P.key,
                                        class: B([
                                          "calendar-day",
                                          {
                                            "other-month": !P.isCurrentMonth,
                                            selected: P.isSelected,
                                            disabled: !P.isSelectable,
                                            past: P.isPast,
                                            "in-range": P.isInRange,
                                            "range-start": P.isRangeStart,
                                            "range-end": P.isRangeEnd,
                                          },
                                        ]),
                                        disabled: !P.isSelectable,
                                        onClick: (Te) => ot(P),
                                        type: "button",
                                      },
                                      l(P.date),
                                      11,
                                      Sm,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                          ]),
                        ]),
                      ]))
                    : b.value === 4
                      ? (o(),
                        i("div", xm, [
                          k[30] ||
                            (k[30] = e(
                              "h3",
                              { class: "step-title" },
                              "Guests",
                              -1,
                            )),
                          k[31] ||
                            (k[31] = e(
                              "p",
                              { class: "results-note" },
                              " Please indicate how many adults will need to be accommodated. ",
                              -1,
                            )),
                          k[32] ||
                            (k[32] = e(
                              "p",
                              { class: "results-note" },
                              " If your booking includes children, please enquire directly on the next step. ",
                              -1,
                            )),
                          k[33] ||
                            (k[33] = e(
                              "p",
                              { class: "results-note" },
                              "View our child policy for each lodge here.",
                              -1,
                            )),
                          e("div", Dm, [
                            e("div", Am, [
                              k[26] ||
                                (k[26] = e(
                                  "div",
                                  { class: "counter-text" },
                                  [
                                    e("div", { class: "semibold" }, "Adults"),
                                    e(
                                      "div",
                                      { class: "muted text-sm" },
                                      "Ages 17+",
                                    ),
                                  ],
                                  -1,
                                )),
                              e("div", Tm, [
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[7] || (k[7] = (P) => Ne("adults")),
                                  },
                                  " − ",
                                ),
                                e("span", Im, l(j.value), 1),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[8] || (k[8] = (P) => me("adults")),
                                  },
                                  " + ",
                                ),
                              ]),
                            ]),
                            e("div", Nm, [
                              k[27] ||
                                (k[27] = e(
                                  "div",
                                  { class: "counter-text" },
                                  [
                                    e("div", { class: "semibold" }, "Children"),
                                    e(
                                      "div",
                                      { class: "muted text-sm" },
                                      "Ages 10 - 16",
                                    ),
                                  ],
                                  -1,
                                )),
                              e("div", Mm, [
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[9] || (k[9] = (P) => Ne("children")),
                                  },
                                  " − ",
                                ),
                                e("span", Em, l(I.value), 1),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[10] || (k[10] = (P) => me("children")),
                                  },
                                  " + ",
                                ),
                              ]),
                            ]),
                            e("div", Rm, [
                              k[28] ||
                                (k[28] = e(
                                  "div",
                                  { class: "counter-text" },
                                  [
                                    e(
                                      "div",
                                      { class: "semibold" },
                                      "Ages 3 - 9",
                                    ),
                                  ],
                                  -1,
                                )),
                              e("div", Pm, [
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[11] || (k[11] = (P) => Ne("age3_9")),
                                  },
                                  " − ",
                                ),
                                e("span", Om, l(le.value), 1),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[12] || (k[12] = (P) => me("age3_9")),
                                  },
                                  " + ",
                                ),
                              ]),
                            ]),
                            e("div", Lm, [
                              k[29] ||
                                (k[29] = e(
                                  "div",
                                  { class: "counter-text" },
                                  [
                                    e(
                                      "div",
                                      { class: "semibold" },
                                      "Ages 0 - 2",
                                    ),
                                  ],
                                  -1,
                                )),
                              e("div", Bm, [
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[13] || (k[13] = (P) => Ne("age0_2")),
                                  },
                                  " − ",
                                ),
                                e("span", Fm, l(se.value), 1),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "btn-icon",
                                    onClick:
                                      k[14] || (k[14] = (P) => me("age0_2")),
                                  },
                                  " + ",
                                ),
                              ]),
                            ]),
                          ]),
                        ]))
                      : (o(),
                        i("div", zm, [
                          k[37] ||
                            (k[37] = e(
                              "h3",
                              { class: "step-title" },
                              "Check Availability",
                              -1,
                            )),
                          k[38] ||
                            (k[38] = e(
                              "p",
                              { class: "results-note" },
                              " To see if we have availability for your preferred criteria, please click the button below. ",
                              -1,
                            )),
                          e("div", Um, [
                            ke(
                              Me,
                              { class: "btn-primary", to: "/results" },
                              {
                                default: Re(() => [
                                  ...(k[34] || (k[34] = [Q("Check now", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          k[39] ||
                            (k[39] = e(
                              "div",
                              {
                                class: "section-divider",
                                style: { margin: "1.5rem 0" },
                              },
                              null,
                              -1,
                            )),
                          k[40] ||
                            (k[40] = e(
                              "h4",
                              { class: "section-title" },
                              " Speak with a Komodo Cruises Travel Advisor ",
                              -1,
                            )),
                          k[41] ||
                            (k[41] = e(
                              "p",
                              { class: "results-note" },
                              " Need some help to plan your trip? Enquire below to contact one of our Komodo Cruises Travel Advisors. ",
                              -1,
                            )),
                          e("div", Gm, [
                            ke(
                              Me,
                              { class: "btn-primary", to: "/results" },
                              {
                                default: Re(() => [
                                  ...(k[35] ||
                                    (k[35] = [Q("Enquire now", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          e("div", Vm, [
                            ke(
                              Me,
                              { to: "/", class: "nav-link" },
                              {
                                default: Re(() => [
                                  ...(k[36] ||
                                    (k[36] = [Q("Back to Search", -1)])),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                        ])),
              e("div", Km, [
                e("div", qm, [
                  b.value > 1
                    ? (o(),
                      i(
                        "button",
                        { key: 0, class: "link-muted", onClick: _ },
                        " ‹ " + l(Ae.value),
                        1,
                      ))
                    : (o(), i("span", Wm)),
                  e(
                    "button",
                    { class: "btn-primary", onClick: R },
                    l(Se.value),
                    1,
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  },
  Jm = { class: "payment-success-page" },
  jm = { class: "success-container" },
  Xm = { class: "success-content" },
  Qm = { class: "booking-card" },
  Zm = { class: "booking-header" },
  ef = { class: "booking-id" },
  tf = { class: "value" },
  sf = { class: "booking-details" },
  nf = { class: "detail-section" },
  af = { class: "detail-grid" },
  of = { class: "detail-item" },
  lf = { class: "value" },
  rf = { class: "detail-item" },
  cf = { class: "value" },
  uf = { class: "detail-item" },
  df = { class: "value" },
  vf = { class: "detail-section" },
  pf = { class: "detail-grid" },
  mf = { class: "detail-item" },
  ff = { class: "value" },
  hf = { class: "detail-item" },
  gf = { class: "value" },
  bf = { class: "detail-item" },
  yf = { class: "value" },
  kf = { class: "detail-item" },
  wf = { class: "value" },
  _f = { class: "detail-item" },
  Cf = { class: "value" },
  $f = { class: "detail-section payment-section" },
  Sf = { class: "payment-breakdown" },
  xf = { class: "payment-row" },
  Df = { class: "payment-row total" },
  Af = { class: "total-amount" },
  Tf = { class: "email-notice" },
  If = { class: "email-content" },
  Nf = { key: 0 },
  Mf = { key: 1 },
  Ef = { key: 2 },
  Rf = { class: "action-buttons" },
  Pf = {
    __name: "PaymentSuccess",
    setup(x) {
      const b = m("sending"),
        f = Ha({
          bookingId: "KC2025001",
          customerName: "Guest",
          email: "guest@email.com",
          phone: "-",
          shipName: "Komodo Cruise",
          cabinName: "-",
          itinerary: "-",
          travelDate: "To be confirmed",
          guests: 2,
          pricePerCabin: 0,
          totalAmount: 0,
        }),
        C = (g) =>
          g
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })
                .format(g)
                .replace("IDR", "Rp")
            : "Rp 0",
        h = async () => {
          try {
            ((b.value = "sending"),
              (
                await (
                  await fetch(
                    "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/api/send-confirmation-email",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        customerName: f.customerName,
                        customerEmail: f.email,
                        customerPhone: f.phone,
                        bookingId: f.bookingId,
                        shipName: f.shipName,
                        cabinName: f.cabinName,
                        itinerary: f.itinerary,
                        travelDate: f.travelDate,
                        guests: f.guests,
                        pricePerCabin: f.pricePerCabin,
                        totalAmount: f.totalAmount,
                      }),
                    },
                  )
                ).json()
              ).success
                ? (b.value = "sent")
                : (b.value = "failed"));
          } catch (g) {
            (console.error("Failed to send email:", g), (b.value = "failed"));
          }
        };
      return (
        Xe(async () => {
          try {
            const g = localStorage.getItem("komodo_last_enquiry");
            if (g) {
              const v = JSON.parse(g);
              if (
                (v.form &&
                  ((f.customerName =
                    `${v.form.title || ""} ${v.form.firstName || ""} ${v.form.lastName || ""}`.trim() ||
                    "Guest"),
                  (f.email = v.form.email || "guest@email.com"),
                  (f.phone = v.form.phone || "-")),
                v.itinerary && v.itinerary.length > 0)
              ) {
                const E = v.itinerary[0];
                ((f.shipName = E.ship || "Komodo Cruise"),
                  (f.cabinName = E.cabin || "-"),
                  (f.itinerary = E.itinerary || "-"),
                  (f.travelDate = E.date || "To be confirmed"),
                  (f.guests = E.guests || 2),
                  (f.pricePerCabin = E.pricePerCabin || 0));
              }
              ((f.totalAmount = v.amount || 0),
                (f.bookingId = v.invoiceId
                  ? `KC${Date.now().toString().slice(-8)}`
                  : "KC2025001"));
            }
            (localStorage.removeItem("komodo_itinerary"),
              f.email && f.email !== "guest@email.com"
                ? await h()
                : (b.value = "sent"));
          } catch (g) {
            (console.error("Error loading booking data:", g),
              (b.value = "failed"));
          }
        }),
        (g, v) => {
          const E = qt("router-link");
          return (
            o(),
            i("div", Jm, [
              e("div", jm, [
                v[26] ||
                  (v[26] = Oe(
                    '<div class="success-animation" data-v-5a35b571><div class="checkmark-circle" data-v-5a35b571><svg class="checkmark" viewBox="0 0 52 52" data-v-5a35b571><circle class="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none" data-v-5a35b571></circle><path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" data-v-5a35b571></path></svg></div></div>',
                    1,
                  )),
                e("div", Xm, [
                  v[22] ||
                    (v[22] = e(
                      "h1",
                      { class: "success-title" },
                      "Thank You for Your Purchase!",
                      -1,
                    )),
                  v[23] ||
                    (v[23] = e(
                      "p",
                      { class: "success-subtitle" },
                      " Your payment has been successfully processed ",
                      -1,
                    )),
                  e("div", Qm, [
                    e("div", Zm, [
                      v[1] ||
                        (v[1] = e(
                          "div",
                          { class: "booking-badge" },
                          [
                            e(
                              "svg",
                              {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                              },
                              [
                                e("path", {
                                  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                }),
                                e("polyline", {
                                  points: "22 4 12 14.01 9 11.01",
                                }),
                              ],
                            ),
                            e("span", null, "Booking Confirmed"),
                          ],
                          -1,
                        )),
                      e("div", ef, [
                        v[0] ||
                          (v[0] = e(
                            "span",
                            { class: "label" },
                            "Booking ID",
                            -1,
                          )),
                        e("span", tf, "#" + l(f.bookingId), 1),
                      ]),
                    ]),
                    e("div", sf, [
                      e("div", nf, [
                        v[5] ||
                          (v[5] = e(
                            "h3",
                            { class: "section-title" },
                            [
                              e(
                                "svg",
                                {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                },
                                [
                                  e("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                  }),
                                  e("circle", { cx: "12", cy: "7", r: "4" }),
                                ],
                              ),
                              Q(" Guest Information "),
                            ],
                            -1,
                          )),
                        e("div", af, [
                          e("div", of, [
                            v[2] ||
                              (v[2] = e(
                                "span",
                                { class: "label" },
                                "Name",
                                -1,
                              )),
                            e("span", lf, l(f.customerName), 1),
                          ]),
                          e("div", rf, [
                            v[3] ||
                              (v[3] = e(
                                "span",
                                { class: "label" },
                                "Email",
                                -1,
                              )),
                            e("span", cf, l(f.email), 1),
                          ]),
                          e("div", uf, [
                            v[4] ||
                              (v[4] = e(
                                "span",
                                { class: "label" },
                                "Phone",
                                -1,
                              )),
                            e("span", df, l(f.phone), 1),
                          ]),
                        ]),
                      ]),
                      e("div", vf, [
                        v[11] ||
                          (v[11] = e(
                            "h3",
                            { class: "section-title" },
                            [
                              e(
                                "svg",
                                {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                },
                                [
                                  e("path", {
                                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                                  }),
                                ],
                              ),
                              Q(" Trip Details "),
                            ],
                            -1,
                          )),
                        e("div", pf, [
                          e("div", mf, [
                            v[6] ||
                              (v[6] = e(
                                "span",
                                { class: "label" },
                                "Ship",
                                -1,
                              )),
                            e("span", ff, l(f.shipName), 1),
                          ]),
                          e("div", hf, [
                            v[7] ||
                              (v[7] = e(
                                "span",
                                { class: "label" },
                                "Cabin Type",
                                -1,
                              )),
                            e("span", gf, l(f.cabinName), 1),
                          ]),
                          e("div", bf, [
                            v[8] ||
                              (v[8] = e(
                                "span",
                                { class: "label" },
                                "Itinerary",
                                -1,
                              )),
                            e("span", yf, l(f.itinerary), 1),
                          ]),
                          e("div", kf, [
                            v[9] ||
                              (v[9] = e(
                                "span",
                                { class: "label" },
                                "Travel Date",
                                -1,
                              )),
                            e("span", wf, l(f.travelDate), 1),
                          ]),
                          e("div", _f, [
                            v[10] ||
                              (v[10] = e(
                                "span",
                                { class: "label" },
                                "Guests",
                                -1,
                              )),
                            e("span", Cf, l(f.guests) + " Person(s)", 1),
                          ]),
                        ]),
                      ]),
                      e("div", $f, [
                        v[14] ||
                          (v[14] = e(
                            "h3",
                            { class: "section-title" },
                            [
                              e(
                                "svg",
                                {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                },
                                [
                                  e("rect", {
                                    x: "1",
                                    y: "4",
                                    width: "22",
                                    height: "16",
                                    rx: "2",
                                    ry: "2",
                                  }),
                                  e("line", {
                                    x1: "1",
                                    y1: "10",
                                    x2: "23",
                                    y2: "10",
                                  }),
                                ],
                              ),
                              Q(" Payment Summary "),
                            ],
                            -1,
                          )),
                        e("div", Sf, [
                          e("div", xf, [
                            e(
                              "span",
                              null,
                              l(f.cabinName) + " × " + l(f.guests),
                              1,
                            ),
                            e(
                              "span",
                              null,
                              l(C(f.pricePerCabin)) + " × " + l(f.guests),
                              1,
                            ),
                          ]),
                          v[13] ||
                            (v[13] = e(
                              "div",
                              { class: "payment-divider" },
                              null,
                              -1,
                            )),
                          e("div", Df, [
                            v[12] ||
                              (v[12] = e("span", null, "Total Paid", -1)),
                            e("span", Af, l(C(f.totalAmount)), 1),
                          ]),
                        ]),
                        v[15] ||
                          (v[15] = e(
                            "div",
                            { class: "payment-status" },
                            [
                              e(
                                "svg",
                                {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                },
                                [
                                  e("path", {
                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                                  }),
                                  e("polyline", {
                                    points: "22 4 12 14.01 9 11.01",
                                  }),
                                ],
                              ),
                              e("span", null, "Payment Successful"),
                            ],
                            -1,
                          )),
                      ]),
                    ]),
                  ]),
                  e("div", Tf, [
                    v[19] ||
                      (v[19] = e(
                        "div",
                        { class: "email-icon" },
                        [
                          e(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                            },
                            [
                              e("path", {
                                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                              }),
                              e("polyline", { points: "22,6 12,13 2,6" }),
                            ],
                          ),
                        ],
                        -1,
                      )),
                    e("div", If, [
                      v[17] || (v[17] = e("h4", null, "Check Your Email", -1)),
                      e("p", null, [
                        v[16] ||
                          (v[16] = Q(
                            " A detailed receipt and booking confirmation has been sent to ",
                            -1,
                          )),
                        e("strong", null, l(f.email), 1),
                      ]),
                      v[18] ||
                        (v[18] = e(
                          "p",
                          { class: "email-hint" },
                          " Don't forget to check your spam folder if you don't see it within a few minutes. ",
                          -1,
                        )),
                    ]),
                    e(
                      "div",
                      { class: B(["email-status", b.value]) },
                      [
                        b.value === "sending"
                          ? (o(), i("span", Nf, "Sending..."))
                          : b.value === "sent"
                            ? (o(), i("span", Mf, "✓ Email Sent"))
                            : b.value === "failed"
                              ? (o(), i("span", Ef, "⚠ Will retry"))
                              : M("", !0),
                      ],
                      2,
                    ),
                  ]),
                  v[24] ||
                    (v[24] = Oe(
                      '<div class="whats-next" data-v-5a35b571><h3 data-v-5a35b571>What Happens Next?</h3><div class="next-steps" data-v-5a35b571><div class="step" data-v-5a35b571><div class="step-number" data-v-5a35b571>1</div><div class="step-content" data-v-5a35b571><strong data-v-5a35b571>Email Confirmation</strong><p data-v-5a35b571> Check your inbox for your booking receipt and trip details </p></div></div><div class="step" data-v-5a35b571><div class="step-number" data-v-5a35b571>2</div><div class="step-content" data-v-5a35b571><strong data-v-5a35b571>Journey Designer Contact</strong><p data-v-5a35b571> Our team will reach out within 24 hours to finalize your itinerary </p></div></div><div class="step" data-v-5a35b571><div class="step-number" data-v-5a35b571>3</div><div class="step-content" data-v-5a35b571><strong data-v-5a35b571>Prepare for Adventure</strong><p data-v-5a35b571> Get your travel documents ready and pack for an unforgettable trip! </p></div></div></div></div>',
                      1,
                    )),
                  e("div", Rf, [
                    ke(
                      E,
                      { to: "/", class: "btn-primary" },
                      {
                        default: Re(() => [
                          ...(v[20] ||
                            (v[20] = [
                              e(
                                "svg",
                                {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                },
                                [
                                  e("path", {
                                    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                                  }),
                                  e("polyline", {
                                    points: "9 22 9 12 15 12 15 22",
                                  }),
                                ],
                                -1,
                              ),
                              Q(" Back to Home ", -1),
                            ])),
                        ]),
                        _: 1,
                      },
                    ),
                    ke(
                      E,
                      { to: "/plan", class: "btn-secondary" },
                      {
                        default: Re(() => [
                          ...(v[21] ||
                            (v[21] = [Q(" Explore More Trips ", -1)])),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  v[25] ||
                    (v[25] = e(
                      "div",
                      { class: "support-info" },
                      [
                        e("p", null, "Need help? Contact our support team at"),
                        e(
                          "a",
                          { href: "mailto:support@komodocruises.com" },
                          "support@komodocruises.com",
                        ),
                      ],
                      -1,
                    )),
                ]),
              ]),
            ])
          );
        }
      );
    },
  },
  Of = dt(Pf, [["__scopeId", "data-v-5a35b571"]]),
  Lf = {},
  Bf = { class: "payment-result-page" },
  Ff = { class: "payment-result-container" },
  zf = { class: "result-actions" };
function Uf(x, b) {
  const f = qt("router-link");
  return (
    o(),
    i("div", Bf, [
      e("div", Ff, [
        b[2] ||
          (b[2] = Oe(
            '<div class="result-icon failed" data-v-690b1a80><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-690b1a80><circle cx="12" cy="12" r="10" data-v-690b1a80></circle><line x1="15" y1="9" x2="9" y2="15" data-v-690b1a80></line><line x1="9" y1="9" x2="15" y2="15" data-v-690b1a80></line></svg></div><h1 class="result-title" data-v-690b1a80>Payment Failed</h1><p class="result-message" data-v-690b1a80> We&#39;re sorry, but your payment could not be processed. </p><div class="result-details" data-v-690b1a80><p data-v-690b1a80>This could be due to:</p><ul data-v-690b1a80><li data-v-690b1a80>Insufficient funds</li><li data-v-690b1a80>Card declined by issuer</li><li data-v-690b1a80>Payment session expired</li><li data-v-690b1a80>Technical issues</li></ul><p data-v-690b1a80>Please try again or contact our support team for assistance.</p></div>',
            4,
          )),
        e("div", zf, [
          ke(
            f,
            { to: "/results", class: "btn-secondary" },
            {
              default: Re(() => [...(b[0] || (b[0] = [Q("Try Again", -1)]))]),
              _: 1,
            },
          ),
          ke(
            f,
            { to: "/", class: "btn-primary" },
            {
              default: Re(() => [
                ...(b[1] || (b[1] = [Q("Back to Home", -1)])),
              ]),
              _: 1,
            },
          ),
        ]),
      ]),
    ])
  );
}
const Gf = dt(Lf, [
    ["render", Uf],
    ["__scopeId", "data-v-690b1a80"],
  ]),
  Vf = { class: "find-reservation-wrap" },
  Kf = { class: "find-reservation-container" },
  qf = { class: "form-group" },
  Wf = { class: "form-group" },
  Hf = { class: "form-actions" },
  Yf = {
    __name: "FindReservation",
    setup(x) {
      const b = m(""),
        f = m(""),
        C = () => {
          !b.value ||
            !f.value ||
            alert("Feature coming soon: Find reservation " + b.value);
        };
      return (h, g) => (
        o(),
        i("div", Vf, [
          e("div", Kf, [
            g[5] ||
              (g[5] = e(
                "h1",
                { class: "find-reservation-title" },
                "Find Your Reservation",
                -1,
              )),
            e(
              "form",
              { class: "find-reservation-form", onSubmit: pe(C, ["prevent"]) },
              [
                e("div", qf, [
                  g[2] ||
                    (g[2] = e(
                      "label",
                      { class: "form-label" },
                      "Confirmation or Booking Number*",
                      -1,
                    )),
                  ge(
                    e(
                      "input",
                      {
                        type: "text",
                        "onUpdate:modelValue":
                          g[0] || (g[0] = (v) => (b.value = v)),
                        class: "form-input",
                        placeholder: "",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[gt, b.value]],
                  ),
                  g[3] ||
                    (g[3] = e(
                      "div",
                      { class: "form-help-text" },
                      " *Confirmation number format: 12345678-1-ABC ",
                      -1,
                    )),
                ]),
                e("div", Wf, [
                  g[4] ||
                    (g[4] = e("label", { class: "form-label" }, "Email*", -1)),
                  ge(
                    e(
                      "input",
                      {
                        type: "email",
                        "onUpdate:modelValue":
                          g[1] || (g[1] = (v) => (f.value = v)),
                        class: "form-input",
                        placeholder: "",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[gt, f.value]],
                  ),
                ]),
                e("div", Hf, [
                  e(
                    "button",
                    {
                      type: "submit",
                      class: B([
                        "btn-find-reservation",
                        { active: b.value && f.value },
                      ]),
                    },
                    " Find Reservation ",
                    2,
                  ),
                ]),
              ],
              32,
            ),
            g[6] ||
              (g[6] = e(
                "div",
                { class: "find-reservation-footer" },
                [
                  e("p", null, "Don't know your confirmation number?"),
                  e(
                    "p",
                    null,
                    " This number was included in an email sent at the time of booking. Please check your email to recover the number. ",
                  ),
                ],
                -1,
              )),
          ]),
        ])
      );
    },
  },
  Jf = dt(Yf, [["__scopeId", "data-v-9d81daa5"]]),
  jf = Ya({
    history: Ja(),
    routes: [
      { path: "/", component: jr },
      { path: "/plan", component: Ym, meta: { planHeader: !0 } },
      { path: "/results", component: em },
      { path: "/payment-success", component: Of },
      { path: "/payment-failed", component: Gf },
      { path: "/find-reservation", component: Jf },
    ],
  });
ja(yl).use(jf).mount("#app");
